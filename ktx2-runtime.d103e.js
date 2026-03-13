
(function() {
    'use strict';
    var BASIS_PATH = 'static/basis/';
    var RGBA32 = 13;

    window.__KTX2 = { module: null, ready: false, manifest: null };

    window.__KTX2_init = function(callback) {
        if (window.__KTX2.ready) { callback(true); return; }

        // Load manifest first
        var manifestXhr = new XMLHttpRequest();
        manifestXhr.open('GET', 'ktx2-manifest.json', true);
        manifestXhr.responseType = 'json';
        manifestXhr.onload = function() {
            if (manifestXhr.status === 200 && manifestXhr.response) {
                window.__KTX2.manifest = manifestXhr.response;
                console.log('[KTX2] Manifest loaded:', Object.keys(manifestXhr.response).length, 'entries');
            } else {
                window.__KTX2.manifest = {};
                console.warn('[KTX2] No manifest found, KTX2 disabled');
            }
            initBasis(callback);
        };
        manifestXhr.onerror = function() {
            window.__KTX2.manifest = {};
            console.warn('[KTX2] Failed to load manifest');
            initBasis(callback);
        };
        manifestXhr.send();
    };

    function initBasis(callback) {
        // Guard: don't initialize twice
        if (window.__KTX2._initPromise) {
            window.__KTX2._initPromise.then(function() { callback(true); }).catch(function() { callback(false); });
            return;
        }

        var Factory = window.BASIS;
        if (!Factory) { console.warn('[KTX2] BASIS not found'); callback(false); return; }

        // Pre-fetch WASM once, then inject via instantiateWasm to avoid
        // the double-fetch issue (streaming attempt + ArrayBuffer fallback)
        var wasmUrl = BASIS_PATH + 'basis_transcoder.wasm';
        window.__KTX2._initPromise = fetch(wasmUrl)
            .then(function(resp) { return resp.arrayBuffer(); })
            .then(function(wasmBinary) {
                return Factory({
                    wasmBinary: wasmBinary
                });
            })
            .then(function(mod) {
                window.__KTX2.module = mod;
                mod.initializeBasis();
                window.__KTX2.ready = true;
                console.log('[KTX2] Transcoder ready');
                callback(true);
            })
            .catch(function(e) {
                console.error('[KTX2] Init failed:', e);
                window.__KTX2._initPromise = null;
                callback(false);
            });
    }

    window.__KTX2_patchDownloader = function() {
        if (!cc || !cc.assetManager || !cc.assetManager.downloader) return;

        // Disable ImageBitmap path — forces downloadDomImage for fallback
        cc.macro.ALLOW_IMAGE_BITMAP = false;

        var dl = cc.assetManager.downloader;
        var origPng = dl._downloaders['.png'];
        if (!origPng) return;

        function basisDownload(url, options, onComplete) {
            if (!window.__KTX2.ready || !window.__KTX2.module) {
                origPng(url, options, onComplete);
                return;
            }

            // Strip query string and extension to get the manifest key
            var cleanUrl = url.replace(/\?.*$/, '');
            var baseKey = cleanUrl.replace(/\.(png|jpg|jpeg)$/i, '');

            // Check manifest: only request .ktx2 if the file was actually converted
            var manifest = window.__KTX2.manifest;
            if (!manifest || !manifest[baseKey]) {
                origPng(url, options, onComplete);
                return;
            }

            var ktx2Url = cleanUrl.replace(/\.(png|jpg|jpeg)$/i, '.ktx2');

            var xhr = new XMLHttpRequest();
            xhr.open('GET', ktx2Url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function() {
                if ((xhr.status === 200 || xhr.status === 0) && xhr.response && xhr.response.byteLength > 0) {
                    var canvas = transcode(xhr.response);
                    if (canvas) {
                        onComplete(null, canvas);
                        return;
                    }
                }
                origPng(url, options, onComplete);
            };
            xhr.onerror = function() { origPng(url, options, onComplete); };
            xhr.send();
        }

        dl.register('.png', basisDownload);
        dl.register('.jpg', basisDownload);
        dl.register('.jpeg', basisDownload);
        console.log('[KTX2] Downloader patched');
    };

    window.__KTX2_patchTexture = function() {
        // No Texture2D patch needed — Canvas is accepted natively by the engine
    };

    function transcode(buf) {
        var mod = window.__KTX2.module;
        if (!mod || !mod.KTX2File) return null;
        try {
            var data = new Uint8Array(buf);
            var ktx2 = new mod.KTX2File(data);
            if (!ktx2 || !ktx2.isValid()) {
                if (ktx2) { ktx2.close(); ktx2.delete(); }
                return null;
            }

            var w = ktx2.getWidth();
            var h = ktx2.getHeight();

            if (!ktx2.startTranscoding()) { ktx2.close(); ktx2.delete(); return null; }

            // KTX2File API: getImageTranscodedSizeInBytes(level, layer, face, format)
            var sz = ktx2.getImageTranscodedSizeInBytes(0, 0, 0, RGBA32);
            if (sz === 0) { ktx2.close(); ktx2.delete(); return null; }

            var dst = new Uint8Array(sz);
            // KTX2File API: transcodeImage(dst, level, layer, face, format, flags, channel, row_pitch)
            var ok = ktx2.transcodeImage(dst, 0, 0, 0, RGBA32, 0, -1, 0);
            ktx2.close();
            ktx2.delete();

            if (!ok) return null;

            // Create Canvas from RGBA pixels
            var c = document.createElement('canvas');
            c.width = w;
            c.height = h;
            var ctx = c.getContext('2d');
            var imgData = ctx.createImageData(w, h);
            imgData.data.set(dst);
            ctx.putImageData(imgData, 0, 0);
            return c;
        } catch (e) {
            console.error('[KTX2] Transcode error:', e);
            return null;
        }
    }
})();
