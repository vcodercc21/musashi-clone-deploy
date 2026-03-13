window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AnimPreloader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32ba73NEghLL5B3x5BuzHiF", "AnimPreloader");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AnimPreloader = void 0;
    var SubjectComp_1 = require("../Patterns/Observer/SubjectComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AnimPreloader = function(_super) {
      __extends(AnimPreloader, _super);
      function AnimPreloader() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timeShow = .2;
        _this.timeHide = .2;
        _this.timeDelayShow = 0;
        _this.timeDelayHide = 0;
        return _this;
      }
      AnimPreloader.prototype.show = function(isAnim, options) {
        var _this = this;
        void 0 === isAnim && (isAnim = true);
        void 0 === options && (options = {});
        this.node.active = true;
        cc.Tween.stopAllByTarget(this.node);
        if (isAnim) {
          this.node.opacity = 0;
          cc.tween(this.node).delay(options.delayShow || this.timeDelayShow).to(this.timeShow, {
            opacity: 255
          }).call(function() {
            _this.node.opacity = 255;
          }).start();
        } else this.node.opacity = 255;
      };
      AnimPreloader.prototype.hide = function(isAnim) {
        var _this = this;
        void 0 === isAnim && (isAnim = true);
        cc.Tween.stopAllByTarget(this.node);
        isAnim ? cc.tween(this.node).delay(this.timeDelayHide).to(this.timeHide, {
          opacity: 0
        }).call(function() {
          _this.node.active = false;
        }).start() : this.node.active = false;
      };
      __decorate([ property({
        displayName: "Time show"
      }) ], AnimPreloader.prototype, "timeShow", void 0);
      __decorate([ property({
        displayName: "Time hide"
      }) ], AnimPreloader.prototype, "timeHide", void 0);
      __decorate([ property({
        displayName: "Time delay show"
      }) ], AnimPreloader.prototype, "timeDelayShow", void 0);
      __decorate([ property({
        displayName: "Time delay hide"
      }) ], AnimPreloader.prototype, "timeDelayHide", void 0);
      AnimPreloader = __decorate([ ccclass ], AnimPreloader);
      return AnimPreloader;
    }(SubjectComp_1.SubjectComp);
    exports.AnimPreloader = AnimPreloader;
    cc._RF.pop();
  }, {
    "../Patterns/Observer/SubjectComp": "SubjectComp"
  } ],
  AssetManagerComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "661d9hy/29CFqb1Pvt/QWFt", "AssetManagerComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AssetManagerComp = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AssetManagerComp = function(_super) {
      __extends(AssetManagerComp, _super);
      function AssetManagerComp() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AssetManagerComp = __decorate([ ccclass ], AssetManagerComp);
      return AssetManagerComp;
    }(cc.Component);
    exports.AssetManagerComp = AssetManagerComp;
    cc._RF.pop();
  }, {} ],
  AssetsManager9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b56fsJBUtETI6XxQwgxuBc", "AssetsManager9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var _a;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AssetManager9999 = void 0;
    var Declaration9999_1 = require("./Declaration9999");
    var SlotConstants9999_1 = require("./slot/SlotConstants9999");
    var ESlotSymbol = SlotConstants9999_1.SlotConstants9999.ESlotSymbol;
    var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
    var configCoreSymbol = (_a = {}, _a[ESlotSymbol.H6] = "the_legend_of_musashi_symbol_h6_01", 
    _a[ESlotSymbol.H5] = "the_legend_of_musashi_symbol_h5_01", _a[ESlotSymbol.H4] = "the_legend_of_musashi_symbol_h4_01", 
    _a[ESlotSymbol.H3] = "the_legend_of_musashi_symbol_h3_01", _a[ESlotSymbol.H2] = "the_legend_of_musashi_symbol_h2_01", 
    _a[ESlotSymbol.H1] = "the_legend_of_musashi_symbol_h1_01", _a[ESlotSymbol.L4] = "the_legend_of_musashi_symbol_L4_01", 
    _a[ESlotSymbol.L3] = "the_legend_of_musashi_symbol_L3_01", _a[ESlotSymbol.L2] = "the_legend_of_musashi_symbol_L2_01", 
    _a[ESlotSymbol.L1] = "the_legend_of_musashi_symbol_L1_01", _a[ESlotSymbol.SC] = "the_legend_of_musashi_symbol_scatter_01", 
    _a[ESlotSymbol.WI] = "the_legend_of_musashi_symbol_wild_01", _a[ESlotSymbol.WI_LI] = "the_legend_of_musashi_symbol_wild_01", 
    _a[ESlotSymbol.WI_EX] = "the_legend_of_musashi_symbol_wild_02", _a);
    var AssetManager9999 = function(_super) {
      __extends(AssetManager9999, _super);
      function AssetManager9999() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listCoreSymbols = [];
        return _this;
      }
      AssetManager9999.prototype.getCoreSymbolByCode = function(code) {
        var symbolName = configCoreSymbol[code];
        if (!symbolName) return null;
        return this.listCoreSymbols.find(function(sf) {
          return sf && sf.name === symbolName;
        }) || null;
      };
      __decorate([ property(cc.SpriteFrame) ], AssetManager9999.prototype, "listCoreSymbols", void 0);
      AssetManager9999 = __decorate([ ccclass ], AssetManager9999);
      return AssetManager9999;
    }(Declaration9999_1.AssetManagerComp);
    exports.AssetManager9999 = AssetManager9999;
    cc._RF.pop();
  }, {
    "./Declaration9999": "Declaration9999",
    "./slot/SlotConstants9999": "SlotConstants9999"
  } ],
  BaseNotifyPopup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3bd9bhCVLhLabeu0ozaz2Tm", "BaseNotifyPopup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BaseNotifyPopup = void 0;
    var BasePopup_1 = require("./BasePopup");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseNotifyPopup = function(_super) {
      __extends(BaseNotifyPopup, _super);
      function BaseNotifyPopup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.message = null;
        _this.btnConfirm = null;
        _this.btnCancel = null;
        _this._cbConfirm = null;
        _this._cbCancel = null;
        return _this;
      }
      BaseNotifyPopup.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.btnConfirm.on("click", this.onBtnConfirm, this);
        this.btnCancel.on("click", this.onBtnCancel, this);
      };
      BaseNotifyPopup.prototype.show = function(options) {
        void 0 === options && (options = {});
        _super.prototype.show.call(this, options);
        this.setDataNotify(options.data);
      };
      BaseNotifyPopup.prototype.setDataNotify = function(data) {
        this.resetDataNotify();
        var title = data.title, message = data.message, textCancel = data.textCancel, textConfirm = data.textConfirm, cbConfirm = data.cbConfirm, cbCancel = data.cbCancel;
        this.title && title && (this.title.string = title);
        this.message && message && (this.message.string = message);
        if (cbConfirm && textConfirm) {
          this._cbConfirm = cbConfirm;
          this.btnConfirm.active = true;
          this.btnConfirm.getComponentInChildren(cc.Label).string = textConfirm;
        }
        if (cbCancel && textCancel) {
          this._cbCancel = cbCancel;
          this.btnCancel.active = true;
          this.btnCancel.getComponentInChildren(cc.Label).string = textCancel;
        }
      };
      BaseNotifyPopup.prototype.resetDataNotify = function() {
        this._cbConfirm = null;
        this._cbCancel = null;
        this.title.string = "Notification";
        this.message.string = "";
        this.btnConfirm.active = false;
        this.btnCancel.active = false;
      };
      BaseNotifyPopup.prototype.onBtnConfirm = function() {
        var _a;
        this.hide();
        null === (_a = this._cbConfirm) || void 0 === _a ? void 0 : _a.call(this);
      };
      BaseNotifyPopup.prototype.onBtnCancel = function() {
        var _a;
        this.hide();
        null === (_a = this._cbCancel) || void 0 === _a ? void 0 : _a.call(this);
      };
      __decorate([ property(cc.Label) ], BaseNotifyPopup.prototype, "title", void 0);
      __decorate([ property(cc.Label) ], BaseNotifyPopup.prototype, "message", void 0);
      __decorate([ property(cc.Node) ], BaseNotifyPopup.prototype, "btnConfirm", void 0);
      __decorate([ property(cc.Node) ], BaseNotifyPopup.prototype, "btnCancel", void 0);
      BaseNotifyPopup = __decorate([ ccclass ], BaseNotifyPopup);
      return BaseNotifyPopup;
    }(BasePopup_1.BasePopup);
    exports.BaseNotifyPopup = BaseNotifyPopup;
    cc._RF.pop();
  }, {
    "./BasePopup": "BasePopup"
  } ],
  BasePopup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "364e3jZ89hDyrAPdqXjEyUw", "BasePopup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BasePopup = void 0;
    var SubjectComp_1 = require("../Patterns/Observer/SubjectComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BasePopup = function(_super) {
      __extends(BasePopup, _super);
      function BasePopup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timeShow = .2;
        _this.timeHide = .2;
        _this.timeDelayShow = 0;
        _this.timeDelayHide = 0;
        _this._callbackShow = null;
        _this._callbackHide = null;
        return _this;
      }
      BasePopup.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      BasePopup.prototype.show = function(options, data) {
        var _this = this;
        void 0 === options && (options = {});
        void 0 === data && (data = {});
        var cbShow = options.cbShow, cbHide = options.cbHide;
        this._callbackShow = cbShow;
        this._callbackHide = cbHide;
        this.node.active = true;
        this.node.opacity = 0;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).delay(this.timeDelayShow).to(this.timeShow, {
          opacity: 255
        }).call(function() {
          var _a;
          null === (_a = _this._callbackShow) || void 0 === _a ? void 0 : _a.call(_this);
          _this.node.opacity = 255;
        }).start();
      };
      BasePopup.prototype.hide = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).delay(this.timeDelayHide).to(this.timeHide, {
          opacity: 0
        }).call(function() {
          var _a;
          null === (_a = _this._callbackHide) || void 0 === _a ? void 0 : _a.call(_this);
          _this.node.active = false;
        }).start();
      };
      __decorate([ property({
        displayName: "Time show"
      }) ], BasePopup.prototype, "timeShow", void 0);
      __decorate([ property({
        displayName: "Time hide"
      }) ], BasePopup.prototype, "timeHide", void 0);
      __decorate([ property({
        displayName: "Time delay show"
      }) ], BasePopup.prototype, "timeDelayShow", void 0);
      __decorate([ property({
        displayName: "Time delay hide"
      }) ], BasePopup.prototype, "timeDelayHide", void 0);
      BasePopup = __decorate([ ccclass ], BasePopup);
      return BasePopup;
    }(SubjectComp_1.SubjectComp);
    exports.BasePopup = BasePopup;
    cc._RF.pop();
  }, {
    "../Patterns/Observer/SubjectComp": "SubjectComp"
  } ],
  BaseSelectPopup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79e5cYfT/lA1LsGC5oG2GMC", "BaseSelectPopup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BaseSelectPopup = void 0;
    var BasePopup_1 = require("./BasePopup");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseSelectPopup = function(_super) {
      __extends(BaseSelectPopup, _super);
      function BaseSelectPopup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.message = null;
        _this.btnConfirm = null;
        _this.btnCancel = null;
        _this.selectItem = null;
        _this.selectHolder = null;
        _this._cbConfirm = null;
        _this._cbCancel = null;
        _this._curSelect = null;
        _this._isShowConfirm = false;
        return _this;
      }
      BaseSelectPopup.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.btnConfirm.on("click", this.onBtnConfirm, this);
        this.btnCancel.on("click", this.onBtnCancel, this);
      };
      BaseSelectPopup.prototype.show = function(options) {
        void 0 === options && (options = {});
        _super.prototype.show.call(this, options);
        this.setDataNotify(options.data);
      };
      BaseSelectPopup.prototype.setDataNotify = function(data) {
        this.resetDataNotify();
        var title = data.title, message = data.message, textCancel = data.textCancel, textConfirm = data.textConfirm, cbConfirm = data.cbConfirm, cbCancel = data.cbCancel, selectData = data.selectData;
        this.title && title && (this.title.string = title);
        this.message && message && (this.message.string = message);
        if (cbConfirm && textConfirm) {
          this._isShowConfirm = true;
          this._cbConfirm = cbConfirm;
          this.btnConfirm.active = true;
          this.btnConfirm.getComponentInChildren(cc.Label).string = textConfirm;
        }
        if (cbCancel && textCancel) {
          this._cbCancel = cbCancel;
          this.btnCancel.active = true;
          this.btnCancel.getComponentInChildren(cc.Label).string = textCancel;
        }
        this.setupSelect(selectData);
      };
      BaseSelectPopup.prototype.setupSelect = function(selectData) {
        var _this = this;
        if (selectData && selectData.length > 0) {
          this.selectHolder.removeAllChildren();
          selectData.forEach(function(item) {
            var node = cc.instantiate(_this.selectItem);
            node.active = true;
            node.getComponent(cc.Toggle).isChecked = false;
            node.getComponentInChildren(cc.Label).string = item;
            node.on("toggle", function() {
              _this._curSelect = item;
              _this.btnConfirm.getComponent(cc.Button).interactable = !!_this._curSelect;
              _this._isShowConfirm || _this.hide();
            }, _this);
            _this.selectHolder.addChild(node);
          });
        }
      };
      BaseSelectPopup.prototype.resetDataNotify = function() {
        this.btnConfirm.getComponent(cc.Button).interactable = false;
        this._cbConfirm = null;
        this._cbCancel = null;
        this.title.string = "Notification";
        this.message.string = "";
        this.btnConfirm.active = false;
        this.btnCancel.active = false;
      };
      BaseSelectPopup.prototype.onBtnConfirm = function() {
        var _a;
        this.hide();
        null === (_a = this._cbConfirm) || void 0 === _a ? void 0 : _a.call(this, this._curSelect);
      };
      BaseSelectPopup.prototype.onBtnCancel = function() {
        var _a;
        this.hide();
        null === (_a = this._cbCancel) || void 0 === _a ? void 0 : _a.call(this);
      };
      __decorate([ property(cc.Label) ], BaseSelectPopup.prototype, "title", void 0);
      __decorate([ property(cc.Label) ], BaseSelectPopup.prototype, "message", void 0);
      __decorate([ property(cc.Node) ], BaseSelectPopup.prototype, "btnConfirm", void 0);
      __decorate([ property(cc.Node) ], BaseSelectPopup.prototype, "btnCancel", void 0);
      __decorate([ property(cc.Node) ], BaseSelectPopup.prototype, "selectItem", void 0);
      __decorate([ property(cc.Node) ], BaseSelectPopup.prototype, "selectHolder", void 0);
      BaseSelectPopup = __decorate([ ccclass ], BaseSelectPopup);
      return BaseSelectPopup;
    }(BasePopup_1.BasePopup);
    exports.BaseSelectPopup = BaseSelectPopup;
    cc._RF.pop();
  }, {
    "./BasePopup": "BasePopup"
  } ],
  CascadeCommands9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02c40AecyND0po8NifkTnSR", "CascadeCommands9999");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExpandingWildsCommand = exports.WaitForDropsCommand = exports.CascadeStepCommand = void 0;
    var SlotSymbol9999_1 = require("./SlotSymbol9999");
    var CascadeStepCommand = function() {
      function CascadeStepCommand(reelDataList, ownerNode, stepData, onStepExecute) {
        this.duration = 0;
        this._hideDuration = .25;
        this._scheduledCallback = null;
        this._dropHandler = null;
        this._reelDataList = reelDataList;
        this._ownerNode = ownerNode;
        this._stepData = stepData;
        this._onStepExecute = onStepExecute;
      }
      CascadeStepCommand.prototype.execute = function(onComplete) {
        var _this = this;
        this._onStepExecute && this._stepData && this._onStepExecute(this._stepData);
        this._reelDataList.forEach(function(data) {
          data.deletions.forEach(function(del) {
            var row = del.coordinates.row;
            var symbolNode = data.reelComp.listSymbols[row];
            symbolNode && symbolNode.getComponent(SlotSymbol9999_1.SlotSymbol9999).hide(_this._hideDuration);
          });
        });
        this._scheduledCallback = function() {
          _this._scheduledCallback = null;
          var droppingCount = 0;
          _this._reelDataList.forEach(function(data) {
            if (0 === data.movements.length) return;
            droppingCount++;
          });
          if (0 === droppingCount) {
            onComplete && onComplete();
            return;
          }
          var remaining = droppingCount;
          _this._dropHandler = function() {
            remaining--;
            if (remaining <= 0) {
              _this._ownerNode.off("reelDropDone", _this._dropHandler);
              _this._dropHandler = null;
              onComplete && onComplete();
            }
          };
          _this._ownerNode.on("reelDropDone", _this._dropHandler);
          _this._reelDataList.forEach(function(data) {
            if (0 === data.movements.length) return;
            _this._placeAndDrop(data);
          });
        };
        this._ownerNode.getComponent(cc.Component).scheduleOnce(this._scheduledCallback, this._hideDuration + .05);
      };
      CascadeStepCommand.prototype.cancel = function() {
        if (this._scheduledCallback) {
          var comp = this._ownerNode.getComponent(cc.Component);
          comp && comp.unschedule(this._scheduledCallback);
          this._scheduledCallback = null;
        }
      };
      CascadeStepCommand.prototype._placeAndDrop = function(data) {
        var reelComp = data.reelComp, movements = data.movements;
        var listSymbols = reelComp.listSymbols;
        var symbolPositions = reelComp.symbolPositions;
        var symbolHeight = reelComp.symbolHeight;
        var sourceRows = new Set();
        var existingMoves = [];
        var newMoves = [];
        movements.forEach(function(move) {
          if (move.from) {
            sourceRows.add(move.from.row);
            existingMoves.push(move);
          } else newMoves.push(move);
        });
        var freeNodes = [];
        for (var r = 0; r < listSymbols.length; r++) {
          var node = listSymbols[r];
          !node || node.active || sourceRows.has(r) || freeNodes.push(node);
        }
        var newList = new Array(listSymbols.length).fill(null);
        var dropTargets = [];
        existingMoves.forEach(function(move) {
          var symbolNode = listSymbols[move.from.row];
          if (symbolNode) {
            symbolNode.getComponent(SlotSymbol9999_1.SlotSymbol9999).idle();
            newList[move.to.row] = symbolNode;
            dropTargets.push({
              node: symbolNode,
              targetY: symbolPositions[move.to.row]
            });
          }
        });
        newMoves.sort(function(a, b) {
          return a.to.row - b.to.row;
        });
        newMoves.forEach(function(move, i) {
          var symbolNode = freeNodes.length > 0 ? freeNodes.shift() : null;
          if (symbolNode) {
            symbolNode.getComponent(SlotSymbol9999_1.SlotSymbol9999).setCoreSymbol(move.symbol);
            symbolNode.getComponent(SlotSymbol9999_1.SlotSymbol9999).idle();
            newList[move.to.row] = symbolNode;
            symbolNode.y = symbolPositions[0] + symbolHeight * (newMoves.length - i);
            dropTargets.push({
              node: symbolNode,
              targetY: symbolPositions[move.to.row]
            });
          }
        });
        for (var r = 0; r < listSymbols.length; r++) newList[r] || (newList[r] = listSymbols[r]);
        reelComp.applyDropTargets(newList, dropTargets);
      };
      return CascadeStepCommand;
    }();
    exports.CascadeStepCommand = CascadeStepCommand;
    var WaitForDropsCommand = function() {
      function WaitForDropsCommand(ownerNode, getDropCount) {
        this.duration = 0;
        this._handler = null;
        this._ownerNode = ownerNode;
        this._getDropCount = getDropCount;
      }
      WaitForDropsCommand.prototype.execute = function(onComplete) {
        var _this = this;
        var remaining = this._getDropCount();
        if (remaining <= 0) {
          onComplete && onComplete();
          return;
        }
        this._handler = function() {
          remaining--;
          if (remaining <= 0) {
            _this._ownerNode.off("reelDropDone", _this._handler);
            _this._handler = null;
            onComplete && onComplete();
          }
        };
        this._ownerNode.on("reelDropDone", this._handler);
      };
      WaitForDropsCommand.prototype.cancel = function() {
        if (this._handler) {
          this._ownerNode.off("reelDropDone", this._handler);
          this._handler = null;
        }
      };
      return WaitForDropsCommand;
    }();
    exports.WaitForDropsCommand = WaitForDropsCommand;
    var ExpandingWildsCommand = function() {
      function ExpandingWildsCommand(reelDataList) {
        this.duration = .2;
        this._animDuration = .5;
        this._cancelled = false;
        this._reelDataList = reelDataList;
      }
      ExpandingWildsCommand.prototype.execute = function(onComplete) {
        var _this = this;
        if (0 === this._reelDataList.length) {
          onComplete && onComplete();
          return;
        }
        var completedReels = 0;
        var totalReels = this._reelDataList.length;
        this._reelDataList.forEach(function(data) {
          if (_this._cancelled) return;
          data.reelComp.showExpandingWild(data.wildSpriteFrame, _this._animDuration, function() {
            completedReels++;
            completedReels >= totalReels && onComplete && !_this._cancelled && onComplete();
          });
        });
      };
      ExpandingWildsCommand.prototype.cancel = function() {
        this._cancelled = true;
        this._reelDataList.forEach(function(data) {
          if (data.reelComp.hasExpandingWild) {
            var node = data.reelComp._expandingWildNode;
            if (node) {
              cc.Tween.stopAllByTarget(node);
              node.opacity = 255;
              node.scaleY = 1;
            }
          }
        });
      };
      return ExpandingWildsCommand;
    }();
    exports.ExpandingWildsCommand = ExpandingWildsCommand;
    cc._RF.pop();
  }, {
    "./SlotSymbol9999": "SlotSymbol9999"
  } ],
  CommandManagerComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cef2ciAnpP5KlVeNV7E3Ns", "CommandManagerComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CommandManagerComp = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CommandManagerComp = function(_super) {
      __extends(CommandManagerComp, _super);
      function CommandManagerComp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._executedCommands = [];
        _this._queue = [];
        _this._isRunning = false;
        _this._onQueueComplete = null;
        _this._currentCommand = null;
        _this._waitingForDuration = false;
        _this._durationCallback = null;
        return _this;
      }
      CommandManagerComp.prototype.executeCommand = function(command) {
        command.execute();
        this._executedCommands.push(command);
      };
      CommandManagerComp.prototype.enqueue = function(command) {
        this._queue.push(command);
      };
      CommandManagerComp.prototype.enqueueAll = function(commands) {
        var _this = this;
        commands.forEach(function(cmd) {
          return _this._queue.push(cmd);
        });
      };
      CommandManagerComp.prototype.runQueue = function(onComplete) {
        this._onQueueComplete = onComplete || null;
        this._runNext();
      };
      CommandManagerComp.prototype.cancelCurrentDuration = function() {
        if (!this._waitingForDuration || !this._currentCommand) return;
        this._currentCommand.cancel();
        if (this._durationCallback) {
          this.unschedule(this._durationCallback);
          this._durationCallback = null;
        }
        this._waitingForDuration = false;
        this._runNext();
      };
      CommandManagerComp.prototype.clearQueue = function() {
        if (this._waitingForDuration && this._currentCommand) {
          this._currentCommand.cancel();
          if (this._durationCallback) {
            this.unschedule(this._durationCallback);
            this._durationCallback = null;
          }
        }
        this._queue = [];
        this._isRunning = false;
        this._waitingForDuration = false;
        this._currentCommand = null;
      };
      CommandManagerComp.prototype.isRunning = function() {
        return this._isRunning;
      };
      CommandManagerComp.prototype._runNext = function() {
        var _this = this;
        if (0 === this._queue.length) {
          this._isRunning = false;
          this._currentCommand = null;
          if (this._onQueueComplete) {
            this._onQueueComplete();
            this._onQueueComplete = null;
          }
          return;
        }
        this._isRunning = true;
        var command = this._queue.shift();
        this._currentCommand = command;
        this._executedCommands.push(command);
        command.execute(function() {
          _this._startDurationWait(command);
        });
      };
      CommandManagerComp.prototype._startDurationWait = function(command) {
        var _this = this;
        if (command.duration > 0) {
          this._waitingForDuration = true;
          this._durationCallback = function() {
            _this._waitingForDuration = false;
            _this._durationCallback = null;
            _this._runNext();
          };
          this.scheduleOnce(this._durationCallback, command.duration);
        } else this._runNext();
      };
      CommandManagerComp.prototype.undoLastCommand = function() {
        if (this._executedCommands.length > 0) {
          var command = this._executedCommands.pop();
          command.undo && command.undo();
        }
      };
      CommandManagerComp = __decorate([ ccclass ], CommandManagerComp);
      return CommandManagerComp;
    }(cc.Component);
    exports.CommandManagerComp = CommandManagerComp;
    cc._RF.pop();
  }, {} ],
  Declaration9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97083eei/FFvZkQr7i3qWex", "Declaration9999");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PopupConfig = exports.GameDataEvents = exports.GameDataWriter = exports.GameDataParser = exports.ICommand = exports.CommandManagerComp = exports.SubjectComp = exports.GameAPI = exports.PopupManagerComp = exports.NetworkManagerComp = exports.AssetManagerComp = exports.GameConfigManagerComp = exports.AnimPreloader = exports.GameController = exports.BaseNotifyPopup = exports.BaseSelectPopup = exports.BasePopup = exports.Director = void 0;
    var Director_1 = require("../../../ScriptBase/Game/Director");
    Object.defineProperty(exports, "Director", {
      enumerable: true,
      get: function() {
        return Director_1.Director;
      }
    });
    var BasePopup_1 = require("../../../ScriptBase/Game/BasePopup");
    Object.defineProperty(exports, "BasePopup", {
      enumerable: true,
      get: function() {
        return BasePopup_1.BasePopup;
      }
    });
    var BaseSelectPopup_1 = require("../../../ScriptBase/Game/BaseSelectPopup");
    Object.defineProperty(exports, "BaseSelectPopup", {
      enumerable: true,
      get: function() {
        return BaseSelectPopup_1.BaseSelectPopup;
      }
    });
    var BaseNotifyPopup_1 = require("../../../ScriptBase/Game/BaseNotifyPopup");
    Object.defineProperty(exports, "BaseNotifyPopup", {
      enumerable: true,
      get: function() {
        return BaseNotifyPopup_1.BaseNotifyPopup;
      }
    });
    var GameController_1 = require("../../../ScriptBase/Game/GameController");
    Object.defineProperty(exports, "GameController", {
      enumerable: true,
      get: function() {
        return GameController_1.GameController;
      }
    });
    var AnimPreloader_1 = require("../../../ScriptBase/Game/AnimPreloader");
    Object.defineProperty(exports, "AnimPreloader", {
      enumerable: true,
      get: function() {
        return AnimPreloader_1.AnimPreloader;
      }
    });
    var GameConfigManagerComp_1 = require("../../../ScriptBase/Managers/GameConfigManagerComp");
    Object.defineProperty(exports, "GameConfigManagerComp", {
      enumerable: true,
      get: function() {
        return GameConfigManagerComp_1.GameConfigManagerComp;
      }
    });
    var AssetManagerComp_1 = require("../../../ScriptBase/Managers/AssetManagerComp");
    Object.defineProperty(exports, "AssetManagerComp", {
      enumerable: true,
      get: function() {
        return AssetManagerComp_1.AssetManagerComp;
      }
    });
    var NetworkManagerComp_1 = require("../../../ScriptBase/Managers/NetworkManagerComp");
    Object.defineProperty(exports, "NetworkManagerComp", {
      enumerable: true,
      get: function() {
        return NetworkManagerComp_1.NetworkManagerComp;
      }
    });
    var PopupManagerComp_1 = require("../../../ScriptBase/Managers/PopupManagerComp");
    Object.defineProperty(exports, "PopupManagerComp", {
      enumerable: true,
      get: function() {
        return PopupManagerComp_1.PopupManagerComp;
      }
    });
    var api_1 = require("../../../ScriptBase/Managers/api");
    Object.defineProperty(exports, "GameAPI", {
      enumerable: true,
      get: function() {
        return api_1.GameAPI;
      }
    });
    var SubjectComp_1 = require("../../../ScriptBase/Patterns/Observer/SubjectComp");
    Object.defineProperty(exports, "SubjectComp", {
      enumerable: true,
      get: function() {
        return SubjectComp_1.SubjectComp;
      }
    });
    var CommandManagerComp_1 = require("../../../ScriptBase/Patterns/Command/CommandManagerComp");
    Object.defineProperty(exports, "CommandManagerComp", {
      enumerable: true,
      get: function() {
        return CommandManagerComp_1.CommandManagerComp;
      }
    });
    var ICommand_1 = require("../../../ScriptBase/Patterns/Command/ICommand");
    Object.defineProperty(exports, "ICommand", {
      enumerable: true,
      get: function() {
        return ICommand_1.ICommand;
      }
    });
    var GameDataParser_1 = require("../../../ScriptBase/DataModel/GameDataParser");
    Object.defineProperty(exports, "GameDataParser", {
      enumerable: true,
      get: function() {
        return GameDataParser_1.GameDataParser;
      }
    });
    var GameDataWriter_1 = require("../../../ScriptBase/DataModel/GameDataWriter");
    Object.defineProperty(exports, "GameDataWriter", {
      enumerable: true,
      get: function() {
        return GameDataWriter_1.GameDataWriter;
      }
    });
    var GameDataEvents_1 = require("../../../ScriptBase/DataModel/GameDataEvents");
    Object.defineProperty(exports, "GameDataEvents", {
      enumerable: true,
      get: function() {
        return GameDataEvents_1.GameDataEvents;
      }
    });
    var PopupConfig_1 = require("../../../ScriptBase/Constants/PopupConfig");
    Object.defineProperty(exports, "PopupConfig", {
      enumerable: true,
      get: function() {
        return PopupConfig_1.PopupConfig;
      }
    });
    cc._RF.pop();
  }, {
    "../../../ScriptBase/Constants/PopupConfig": "PopupConfig",
    "../../../ScriptBase/DataModel/GameDataEvents": "GameDataEvents",
    "../../../ScriptBase/DataModel/GameDataParser": "GameDataParser",
    "../../../ScriptBase/DataModel/GameDataWriter": "GameDataWriter",
    "../../../ScriptBase/Game/AnimPreloader": "AnimPreloader",
    "../../../ScriptBase/Game/BaseNotifyPopup": "BaseNotifyPopup",
    "../../../ScriptBase/Game/BasePopup": "BasePopup",
    "../../../ScriptBase/Game/BaseSelectPopup": "BaseSelectPopup",
    "../../../ScriptBase/Game/Director": "Director",
    "../../../ScriptBase/Game/GameController": "GameController",
    "../../../ScriptBase/Managers/AssetManagerComp": "AssetManagerComp",
    "../../../ScriptBase/Managers/GameConfigManagerComp": "GameConfigManagerComp",
    "../../../ScriptBase/Managers/NetworkManagerComp": "NetworkManagerComp",
    "../../../ScriptBase/Managers/PopupManagerComp": "PopupManagerComp",
    "../../../ScriptBase/Managers/api": "api",
    "../../../ScriptBase/Patterns/Command/CommandManagerComp": "CommandManagerComp",
    "../../../ScriptBase/Patterns/Command/ICommand": "ICommand",
    "../../../ScriptBase/Patterns/Observer/SubjectComp": "SubjectComp"
  } ],
  Director9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82cd5ph/LJHKaFgqPrDQC2Y", "Director9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Director9999 = void 0;
    var Declaration9999_1 = require("../Declaration9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Director9999 = function(_super) {
      __extends(Director9999, _super);
      function Director9999() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Director9999 = __decorate([ ccclass ], Director9999);
      return Director9999;
    }(Declaration9999_1.Director);
    exports.Director9999 = Director9999;
    cc._RF.pop();
  }, {
    "../Declaration9999": "Declaration9999"
  } ],
  Director: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7adccdJ9ftAuY6lL/BzyONq", "Director");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Director = void 0;
    var GameDataWriter_1 = require("../DataModel/GameDataWriter");
    var NetworkManagerComp_1 = require("../Managers/NetworkManagerComp");
    var SubjectComp_1 = require("../Patterns/Observer/SubjectComp");
    var GameController_1 = require("./GameController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Director = function(_super) {
      __extends(Director, _super);
      function Director() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameNode = null;
        return _this;
      }
      Director.prototype.onLoad = function() {
        this.init();
      };
      Director.prototype.init = function() {
        this.setupGame();
        this.initNetwork();
      };
      Director.prototype.setupGame = function() {
        this.initGameDataWriter();
        this.setupGameController();
      };
      Director.prototype.initGameDataWriter = function() {
        this._gameDataWriter = new GameDataWriter_1.GameDataWriter();
      };
      Director.prototype.setupGameController = function() {
        this._gameController = this.gameNode.getComponent(GameController_1.GameController);
        this._gameController.setApiListener({
          callApiGetSession: this.callApiGetSession.bind(this),
          callApiGetSpinResult: this.callApiGetSpinResult.bind(this),
          calApiGetSpinComplete: this.calApiGetSpinComplete.bind(this),
          callApiSpinRestore: this.callApiSpinRestore.bind(this)
        });
      };
      Director.prototype.initNetwork = function() {
        return __awaiter(this, void 0, void 0, function() {
          var response;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, NetworkManagerComp_1.NetworkManagerComp.instance.authenticate() ];

             case 1:
              response = _a.sent();
              cc.log("Player authenticate:", response);
              response && this.executeScripts(this._gameDataWriter.makeScriptSetupGame(response));
              return [ 2 ];
            }
          });
        });
      };
      Director.prototype.executeScripts = function(scripts) {
        var _this = this;
        if (!scripts || !Array.isArray(scripts)) return;
        scripts.forEach(function(_a) {
          var code = _a.code, data = _a.data;
          cc.log("executeScript", code, data);
          _this.gameNode.emit(code, data);
        });
      };
      Director.prototype.callApiGetSession = function() {
        return __awaiter(this, void 0, void 0, function() {
          var response;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, NetworkManagerComp_1.NetworkManagerComp.instance.callApiGetSession() ];

             case 1:
              response = _a.sent();
              this.executeScripts(this._gameDataWriter.makeScriptLastSession(response));
              return [ 2 ];
            }
          });
        });
      };
      Director.prototype.callApiGetSpinResult = function(betAmount) {
        return __awaiter(this, void 0, void 0, function() {
          var response;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, NetworkManagerComp_1.NetworkManagerComp.instance.callApiGetSpinResult(betAmount) ];

             case 1:
              response = _a.sent();
              this.executeScripts(this._gameDataWriter.makeScriptSpinResult(response));
              return [ 2 ];
            }
          });
        });
      };
      Director.prototype.calApiGetSpinComplete = function(roundId) {
        return __awaiter(this, void 0, void 0, function() {
          var response;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, NetworkManagerComp_1.NetworkManagerComp.instance.callApiGetSpinComplete(roundId) ];

             case 1:
              response = _a.sent();
              this.executeScripts(this._gameDataWriter.makeScriptSpinComplete(response));
              return [ 2 ];
            }
          });
        });
      };
      Director.prototype.callApiSpinRestore = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.executeScripts(this._gameDataWriter.makeScriptRestoreSpinResult());
            return [ 2 ];
          });
        });
      };
      __decorate([ property(cc.Node) ], Director.prototype, "gameNode", void 0);
      Director = __decorate([ ccclass ], Director);
      return Director;
    }(SubjectComp_1.SubjectComp);
    exports.Director = Director;
    cc._RF.pop();
  }, {
    "../DataModel/GameDataWriter": "GameDataWriter",
    "../Managers/NetworkManagerComp": "NetworkManagerComp",
    "../Patterns/Observer/SubjectComp": "SubjectComp",
    "./GameController": "GameController"
  } ],
  EventManagerComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77884Sro3lI/ZG7bmlzSeEu", "EventManagerComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EventManagerComp = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EventManagerComp = function(_super) {
      __extends(EventManagerComp, _super);
      function EventManagerComp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._eventEmitter = new cc.EventTarget();
        return _this;
      }
      EventManagerComp.prototype.onLoad = function() {
        console.log("EventManagerComp initialized as a component instance.");
      };
      EventManagerComp.prototype.on = function(eventName, callback, target) {
        this._eventEmitter.on(eventName, callback, target);
      };
      EventManagerComp.prototype.off = function(eventName, callback, target) {
        this._eventEmitter.off(eventName, callback, target);
      };
      EventManagerComp.prototype.emit = function(eventName) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        (_a = this._eventEmitter).emit.apply(_a, __spreadArrays([ eventName ], args));
      };
      EventManagerComp.prototype.targetOff = function(target) {
        this._eventEmitter.targetOff(target);
      };
      EventManagerComp = __decorate([ ccclass ], EventManagerComp);
      return EventManagerComp;
    }(cc.Component);
    exports.EventManagerComp = EventManagerComp;
    cc._RF.pop();
  }, {} ],
  ExampleCommand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ed651VeYhCIJUXVGRrld5W", "ExampleCommand");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExampleCommand = void 0;
    var ExampleCommand = function() {
      function ExampleCommand(target, moveVector) {
        this._target = target;
        this._moveVector = moveVector;
      }
      ExampleCommand.prototype.execute = function() {
        this._previousPosition = this._target.position;
        this._previousPosition = this._target.position.clone();
        this._target.x += this._moveVector.x;
        this._target.y += this._moveVector.y;
        this._target.z += this._moveVector.z;
        console.log("ExampleCommand Executed: Moved target by (" + this._moveVector.x + ", " + this._moveVector.y + ").");
      };
      ExampleCommand.prototype.undo = function() {
        if (this._previousPosition) {
          this._target.position = this._previousPosition;
          console.log("ExampleCommand Undone: Restored position.");
        }
      };
      return ExampleCommand;
    }();
    exports.ExampleCommand = ExampleCommand;
    cc._RF.pop();
  }, {} ],
  ExampleState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b602e171t1Hw5PrAYkGlm/Z", "ExampleState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MovingState = exports.IdleState = void 0;
    var IdleState = function() {
      function IdleState(target) {
        this.name = "Idle";
        this._target = target;
      }
      IdleState.prototype.onEnter = function() {
        console.log("[IdleState] Enter \u2014 node '" + this._target.name + "' is now idle.");
      };
      IdleState.prototype.onUpdate = function(dt) {};
      IdleState.prototype.onExit = function() {
        console.log("[IdleState] Exit");
      };
      return IdleState;
    }();
    exports.IdleState = IdleState;
    var MovingState = function() {
      function MovingState(target, direction, speed) {
        void 0 === speed && (speed = 200);
        this.name = "Moving";
        this._target = target;
        this._direction = direction.normalize();
        this._speed = speed;
      }
      MovingState.prototype.onEnter = function() {
        console.log("[MovingState] Enter \u2014 moving at speed " + this._speed);
      };
      MovingState.prototype.onUpdate = function(dt) {
        this._target.x += this._direction.x * this._speed * dt;
        this._target.y += this._direction.y * this._speed * dt;
      };
      MovingState.prototype.onExit = function() {
        console.log("[MovingState] Exit");
      };
      return MovingState;
    }();
    exports.MovingState = MovingState;
    cc._RF.pop();
  }, {} ],
  GameConfig9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf793jDhahEPa8jZL20zjIx", "GameConfig9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameConfig9999 = void 0;
    var Declaration9999_1 = require("./Declaration9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameConfig9999 = function(_super) {
      __extends(GameConfig9999, _super);
      function GameConfig9999() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GameConfig9999.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      GameConfig9999.prototype.gameConfig = function() {
        return {
          BET_AMOUNTS: [ 10, 20, 40, 60, 80, 100, 200, 300, 500, 800, 1e3, 2e3, 3e3, 5e3 ]
        };
      };
      GameConfig9999 = __decorate([ ccclass ], GameConfig9999);
      return GameConfig9999;
    }(Declaration9999_1.GameConfigManagerComp);
    exports.GameConfig9999 = GameConfig9999;
    cc._RF.pop();
  }, {
    "./Declaration9999": "Declaration9999"
  } ],
  GameConfigManagerComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9b49Kezb1KoKDaNKyrCUTi", "GameConfigManagerComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = this && this.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameConfigManagerComp = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameConfigManagerComp = function(_super) {
      __extends(GameConfigManagerComp, _super);
      function GameConfigManagerComp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mapConfig = new Map();
        return _this;
      }
      GameConfigManagerComp.prototype.onLoad = function() {
        this.setupConfig();
      };
      GameConfigManagerComp.prototype.setupConfig = function() {
        var _this = this;
        var config = this.allConfig();
        Object.keys(config).forEach(function(key) {
          _this.mapConfig.set(key, config[key]);
        });
      };
      GameConfigManagerComp.prototype.allConfig = function() {
        return __assign(__assign({}, this.baseConfig()), this.gameConfig());
      };
      GameConfigManagerComp.prototype.baseConfig = function() {
        return {
          version: "1.0.0",
          debugMode: true,
          AUTO_SPIN_VALUES: [ 5, 25, 50, 100, 200, 500, 1e3, 2e3, 5e3 ],
          BET_AMOUNTS: []
        };
      };
      GameConfigManagerComp.prototype.getConfigByKey = function(key) {
        return this.mapConfig.get(key);
      };
      GameConfigManagerComp = __decorate([ ccclass ], GameConfigManagerComp);
      return GameConfigManagerComp;
    }(cc.Component);
    exports.GameConfigManagerComp = GameConfigManagerComp;
    cc._RF.pop();
  }, {} ],
  GameController9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "918003EQOZIdaMucQ2io4PX", "GameController9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameController9999 = void 0;
    var Declaration9999_1 = require("../Declaration9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameController9999 = function(_super) {
      __extends(GameController9999, _super);
      function GameController9999() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GameController9999 = __decorate([ ccclass ], GameController9999);
      return GameController9999;
    }(Declaration9999_1.GameController);
    exports.GameController9999 = GameController9999;
    cc._RF.pop();
  }, {
    "../Declaration9999": "Declaration9999"
  } ],
  GameController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb17c/ltzBKxoL69UF3T2ts", "GameController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameController = void 0;
    var PopupConfig_1 = require("../Constants/PopupConfig");
    var GameDataEvents_1 = require("../DataModel/GameDataEvents");
    var SubjectComp_1 = require("../Patterns/Observer/SubjectComp");
    var api_1 = require("../Managers/api");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameController = function(_super) {
      __extends(GameController, _super);
      function GameController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnSpin = null;
        _this.btnAutoSpin = null;
        _this.btnNewBet = null;
        _this.reelControl = null;
        _this.lblWinAmount = null;
        _this.lblBalanceAmount = null;
        _this.lblBetAmount = null;
        _this._autoSpinValue = -1;
        _this._betAmount = 0;
        _this._currentRoundId = "";
        _this._pendingSteps = null;
        _this._pendingExpandingWilds = null;
        return _this;
      }
      GameController.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.setupUI();
        this.listenNodeEvents();
        this.listenScriptsEvent();
      };
      GameController.prototype.setupUI = function() {
        this.updateBetAmount(this.getConfig().getConfigByKey("BET_AMOUNTS")[0]);
        this.updateWinAmount(0);
        this.updateBalanceAmount(0);
        this.updateSpinButtonState(false);
        this.updateAutoSpinButtonState(false);
      };
      GameController.prototype.listenNodeEvents = function() {
        this.btnSpin.on("click", this.onClickSpin, this);
        this.btnAutoSpin.on("click", this.onClickAutoSpin, this);
        this.btnNewBet.on("click", this.onClickNewBet, this);
        this.reelControl.node.on(GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.CASCADE_ALL_DONE, this._onCascadeAllDone, this);
        this.reelControl.node.on(GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.SPIN_ALL_DONE, this._onSpinAllDone, this);
      };
      GameController.prototype.listenScriptsEvent = function() {
        this.node.on(GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.SETUP_GAME, this.onSetupGame, this);
        this.node.on(GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.SPIN_RESULT, this.onSpinResult, this);
        this.node.on(GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.SPIN_COMPLETE, this.onSpinComplete, this);
        this.node.on(GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.PIN_RESTORE_NOTIFY, this.onSpinRestoreNotify, this);
        this.node.on(GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.LAST_SESSION, this.onLastSession, this);
      };
      GameController.prototype.setApiListener = function(listener) {
        listener && (this._apiListener = listener);
        cc.log("setApiListener", listener);
      };
      GameController.prototype.onClickSpin = function() {
        this.updateSpinButtonState(false);
        this.updateAutoSpinButtonState(this._autoSpinValue > 0);
        this.spin();
      };
      GameController.prototype.onClickNewBet = function() {
        var _this = this;
        this.showPopup(PopupConfig_1.PopupConfig.popupName().SELECT, {
          data: {
            title: "New Bet",
            message: "Select bet amount",
            textConfirm: "Yes",
            textCancel: "No",
            cbConfirm: function(value) {
              _this.updateBetAmount(value);
            },
            cbCancel: function() {},
            selectData: this.getConfig().getConfigByKey("BET_AMOUNTS")
          }
        });
      };
      GameController.prototype.onClickAutoSpin = function() {
        var _this = this;
        this._autoSpinValue <= 0 ? this.showPopup(PopupConfig_1.PopupConfig.popupName().SELECT, {
          data: {
            title: "Auto Spin",
            message: "Select number of spins",
            textConfirm: "Yes",
            textCancel: "No",
            cbConfirm: function(value) {
              _this._autoSpinValue = value;
              _this.sendAutoSpin();
            },
            cbCancel: function() {},
            selectData: this.getConfig().getConfigByKey("AUTO_SPIN_VALUES")
          }
        }) : this.stopAutoSpin();
      };
      GameController.prototype.spin = function() {
        this._apiListener && this._apiListener.callApiGetSpinResult(this._betAmount);
        this.reelControl.startSpin();
      };
      GameController.prototype.sendAutoSpin = function() {
        cc.log("start auto spin", this._autoSpinValue);
        this.updateSpinButtonState(false);
        this.spin();
        this.updateAutoSpinValue();
      };
      GameController.prototype.updateAutoSpinValue = function() {
        --this._autoSpinValue;
        this._autoSpinValue <= 0 ? this.stopAutoSpin() : this.btnAutoSpin.getComponentInChildren(cc.Label).string = this._autoSpinValue + "\nStop";
      };
      GameController.prototype.stopAutoSpin = function() {
        cc.log("stop auto spin");
        this.btnAutoSpin.getComponentInChildren(cc.Label).string = "Auto";
        this._autoSpinValue = -1;
      };
      GameController.prototype.onLastSession = function(data) {
        cc.warn("onLastSession", data);
        if (!data || Array.isArray(data.rounds) && 0 === data.rounds.length) {
          this.updateSpinButtonState(true);
          this.updateAutoSpinButtonState(true);
          return;
        }
      };
      GameController.prototype.onSetupGame = function(data) {
        cc.warn("onSetupGame", data);
        this.updateBalanceAmount(api_1.GameAPI.instance.toDisplayAmount(data.balance));
        this._apiListener && this._apiListener.callApiGetSession();
      };
      GameController.prototype.onSpinResult = function(data) {
        cc.warn("onSpinResult", data);
        var steps = data.wager.data;
        this._currentRoundId = data.roundId || "";
        var step0 = steps[0];
        this.updateWinAmount(0);
        this._emitCounterUpdate(step0.counters);
        var isPowerMode = "BASE_POWER_MODE" === step0.state;
        var expandingWilds = step0.transforms && step0.transforms.EXPANDING_WILDS_MODIFIER;
        var hasExpandingWilds = expandingWilds && expandingWilds.length > 0;
        this._pendingSteps = steps;
        this._pendingExpandingWilds = isPowerMode && hasExpandingWilds ? expandingWilds : null;
        isPowerMode && hasExpandingWilds ? this.reelControl.onReceiveResult(step0.original_panel.reels) : this.reelControl.onReceiveResult(step0.panel.reels);
      };
      GameController.prototype._onSpinAllDone = function() {
        var _this = this;
        var steps = this._pendingSteps;
        var expandingWilds = this._pendingExpandingWilds;
        this._pendingSteps = null;
        this._pendingExpandingWilds = null;
        if (!steps) return;
        this.updateWinAmount(api_1.GameAPI.instance.toDisplayAmount(steps[0].round_winnings));
        expandingWilds ? this.reelControl.applyExpandingWilds(expandingWilds, function() {
          _this._processCascades(steps);
        }) : this._processCascades(steps);
      };
      GameController.prototype._processCascades = function(steps) {
        var _this = this;
        if (steps.length > 1) {
          var cascadeSteps_1 = steps.slice(1);
          this.scheduleOnce(function() {
            _this.reelControl.setCascadeQueue(cascadeSteps_1, function(step) {
              _this.updateWinAmount(api_1.GameAPI.instance.toDisplayAmount(step.round_winnings));
            });
          }, .5);
        } else this._completeRound();
      };
      GameController.prototype._emitCounterUpdate = function(counters) {
        if (!counters) return;
        this.node.emit(GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.COUNTER_UPDATE, counters);
      };
      GameController.prototype._onCascadeAllDone = function() {
        cc.log("All cascades done");
        this._completeRound();
      };
      GameController.prototype._completeRound = function() {
        this._currentRoundId && this._apiListener && this._apiListener.calApiGetSpinComplete(this._currentRoundId);
      };
      GameController.prototype.onSpinComplete = function(data) {
        cc.warn("onSpinComplete", data);
        data && null != data.balance && this.updateBalanceAmount(api_1.GameAPI.instance.toDisplayAmount(data.balance));
        this._autoSpinValue > 0 && this.sendAutoSpin();
        this.updateSpinButtonState(true);
        this.updateAutoSpinButtonState(true);
      };
      GameController.prototype.updateWinAmount = function(value) {
        this.lblWinAmount && (this.lblWinAmount.string = value.toFixed(2));
      };
      GameController.prototype.updateBalanceAmount = function(value) {
        this.lblBalanceAmount && (this.lblBalanceAmount.string = value.toFixed(2));
      };
      GameController.prototype.updateBetAmount = function(value) {
        this._betAmount = value;
        this.lblBetAmount.string = value.toFixed(2);
      };
      GameController.prototype.onSpinRestoreNotify = function(data) {
        var _this = this;
        cc.warn("onSpinRestoreNotify", data);
        this.updateSpinButtonState(false);
        this.updateAutoSpinButtonState(false);
        this.showPopup(PopupConfig_1.PopupConfig.popupName().NOTIFY, {
          data: {
            title: "Session Recovery",
            message: data.message,
            textConfirm: "Yes",
            textCancel: "No",
            cbConfirm: function() {
              _this.reelControl.startSpin();
              _this._apiListener && _this._apiListener.callApiSpinRestore();
            },
            cbCancel: function() {
              _this.updateSpinButtonState(true);
              _this.updateAutoSpinButtonState(true);
            }
          }
        });
      };
      GameController.prototype.updateSpinButtonState = function(interactable) {
        this._autoSpinValue > 0 && (interactable = false);
        this.btnSpin.getComponent(cc.Button).interactable = interactable;
      };
      GameController.prototype.updateAutoSpinButtonState = function(interactable) {
        this.btnAutoSpin.getComponent(cc.Button).interactable = interactable;
      };
      __decorate([ property(cc.Node) ], GameController.prototype, "btnSpin", void 0);
      __decorate([ property(cc.Node) ], GameController.prototype, "btnAutoSpin", void 0);
      __decorate([ property(cc.Node) ], GameController.prototype, "btnNewBet", void 0);
      __decorate([ property(SubjectComp_1.SubjectComp) ], GameController.prototype, "reelControl", void 0);
      __decorate([ property(cc.Label) ], GameController.prototype, "lblWinAmount", void 0);
      __decorate([ property(cc.Label) ], GameController.prototype, "lblBalanceAmount", void 0);
      __decorate([ property(cc.Label) ], GameController.prototype, "lblBetAmount", void 0);
      GameController = __decorate([ ccclass ], GameController);
      return GameController;
    }(SubjectComp_1.SubjectComp);
    exports.GameController = GameController;
    cc._RF.pop();
  }, {
    "../Constants/PopupConfig": "PopupConfig",
    "../DataModel/GameDataEvents": "GameDataEvents",
    "../Managers/api": "api",
    "../Patterns/Observer/SubjectComp": "SubjectComp"
  } ],
  GameDataEvents: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e8a7aaIJFMdKLTpdpJnTp0", "GameDataEvents");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameDataEvents = void 0;
    var GameDataEvents = function() {
      function GameDataEvents() {}
      GameDataEvents.SCRIPT_EVENTS = {
        SETUP_GAME: "setupGame",
        SPIN_RESULT: "spinResult",
        PIN_RESTORE_NOTIFY: "spinRestoreNotify",
        SPIN_RESTORE: "spinRestore",
        SPIN_COMPLETE: "spinComplete",
        LAST_SESSION: "lastSession",
        COUNTER_UPDATE: "counterUpdate",
        POWER_MODE_START: "powerModeStart",
        POWER_MODE_END: "powerModeEnd",
        SPIN_ALL_DONE: "spinAllDone",
        CASCADE_ALL_DONE: "cascadeAllDone"
      };
      return GameDataEvents;
    }();
    exports.GameDataEvents = GameDataEvents;
    cc._RF.pop();
  }, {} ],
  GameDataManagerComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4075b0MSZdHEacRBn7sbFOJ", "GameDataManagerComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameDataManagerComp = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameDataManagerComp = function(_super) {
      __extends(GameDataManagerComp, _super);
      function GameDataManagerComp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._dataStore = {};
        _this._localData = {};
        _this.STORAGE_KEY = "game_local_data";
        return _this;
      }
      GameDataManagerComp.prototype.onLoad = function() {
        this.loadLocalData();
      };
      GameDataManagerComp.prototype.setRuntimeData = function(key, value) {
        this._dataStore[key] = value;
      };
      GameDataManagerComp.prototype.getRuntimeData = function(key) {
        return this._dataStore[key];
      };
      GameDataManagerComp.prototype.setLocalData = function(key, value) {
        this._localData[key] = value;
        this.save();
      };
      GameDataManagerComp.prototype.getLocalData = function(key, defaultValue) {
        if (void 0 === this._localData[key]) return defaultValue;
        return this._localData[key];
      };
      GameDataManagerComp.prototype.save = function() {
        cc.sys.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._localData));
      };
      GameDataManagerComp.prototype.loadLocalData = function() {
        var raw = cc.sys.localStorage.getItem(this.STORAGE_KEY);
        if (raw) try {
          this._localData = JSON.parse(raw);
        } catch (e) {
          console.warn("Corrupted local data, resetting.");
          this._localData = {};
        }
      };
      GameDataManagerComp = __decorate([ ccclass ], GameDataManagerComp);
      return GameDataManagerComp;
    }(cc.Component);
    exports.GameDataManagerComp = GameDataManagerComp;
    cc._RF.pop();
  }, {} ],
  GameDataParser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bb2cJEYfpMaYyPRRdUO7+1", "GameDataParser");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameDataParser = void 0;
    var GameDataParser = function() {
      function GameDataParser() {}
      GameDataParser.prototype.parser = function(data) {};
      return GameDataParser;
    }();
    exports.GameDataParser = GameDataParser;
    cc._RF.pop();
  }, {} ],
  GameDataWriter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e796bvanA9ARKM8PPvmrdNB", "GameDataWriter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameDataWriter = void 0;
    var GameDataEvents_1 = require("./GameDataEvents");
    var GameDataParser_1 = require("./GameDataParser");
    var GameDataWriter = function() {
      function GameDataWriter() {
        this._lastSpinResult = null;
        this._parser = new GameDataParser_1.GameDataParser();
      }
      GameDataWriter.prototype.makeScriptSetupGame = function(res) {
        var scripts = [];
        scripts.push({
          code: GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.SETUP_GAME,
          data: res
        });
        return scripts;
      };
      GameDataWriter.prototype.makeScriptLastSession = function(res) {
        var scripts = [];
        scripts.push({
          code: GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.LAST_SESSION,
          data: res
        });
        if (res.rounds && res.rounds.length > 0) {
          var spinResult = {
            roundId: res.rounds[0].roundId,
            wager: res.rounds[0].wagers[0]
          };
          this._lastSpinResult = spinResult;
          scripts.push({
            code: GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.PIN_RESTORE_NOTIFY,
            data: {
              message: "You got another spin uncomplete"
            }
          });
        }
        return scripts;
      };
      GameDataWriter.prototype.makeScriptSpinResult = function(res) {
        var scripts = [];
        scripts.push({
          code: GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.SPIN_RESULT,
          data: res
        });
        this._lastSpinResult = res;
        return scripts;
      };
      GameDataWriter.prototype.makeScriptRestoreSpinResult = function() {
        var scripts = [];
        scripts = scripts.concat(this.makeScriptSpinResult(this._lastSpinResult));
        return scripts;
      };
      GameDataWriter.prototype.makeScriptSpinComplete = function(res) {
        var scripts = [];
        scripts.push({
          code: GameDataEvents_1.GameDataEvents.SCRIPT_EVENTS.SPIN_COMPLETE,
          data: res
        });
        return scripts;
      };
      return GameDataWriter;
    }();
    exports.GameDataWriter = GameDataWriter;
    var d = {
      roundId: "8428fcd6-040e-4297-ae66-382cdc691ce4",
      wager: {
        win: 0,
        state: {
          initial_state: {
            previous_panel: {
              reels: [ [ "H5", "L2", "H4", "H4" ], [ "L3", "L3", "H1", "H1" ], [ "L2", "L2", "L4", "L4" ], [ "H3", "L3", "H3", "L2" ], [ "L1", "L1", "H3", "H3" ], [ "L2", "H2", "H2", "L3" ] ]
            },
            counters: {
              MULTIPLIER: {
                value_per_bet: {
                  200: 1
                },
                default_value: 1,
                limits: [ 1 ]
              },
              LIVES: {
                value_per_bet: {
                  200: 4
                },
                default_value: 0,
                limits: [ 0, 3, 4, 5, 6, 7, 8, 9, 10 ]
              },
              COLLECTED_FREE_SPINS: {
                value_per_bet: {
                  200: 65
                },
                default_value: 0,
                limits: [ 0, 65, 130, 195, 260, 325, 390, 455, 520, 585, 650 ]
              },
              LEVEL: {
                value_per_bet: {
                  200: 1
                },
                default_value: 0,
                limits: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
              }
            },
            previous_panel_per_bet: null,
            transform_sources_per_bet: null,
            base_state: "BASE_POWER_MODE",
            base_state_per_bet: {
              200: "BASE_POWER_MODE"
            }
          },
          final_state: {
            previous_panel: {
              reels: [ [ "H4", "L2", "L4", "H6" ], [ "H5", "H3", "H5", "L3" ], [ "H4", "H1", "L4", "H2" ], [ "WI_EX", "WI_LI", "WI_EX", "WI_EX" ], [ "H3", "H3", "L1", "L1" ], [ "L3", "H5", "L2", "H6" ] ]
            },
            counters: {
              LIVES: {
                value_per_bet: {
                  200: 3
                },
                default_value: 0,
                limits: [ 0, 3, 4, 5, 6, 7, 8, 9, 10 ]
              },
              LEVEL: {
                value_per_bet: {
                  200: 1
                },
                default_value: 0,
                limits: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
              },
              COLLECTED_FREE_SPINS: {
                value_per_bet: {
                  200: 65
                },
                default_value: 0,
                limits: [ 0, 65, 130, 195, 260, 325, 390, 455, 520, 585, 650 ]
              },
              MULTIPLIER: {
                value_per_bet: {
                  200: 1
                },
                default_value: 1,
                limits: [ 1 ]
              }
            },
            previous_panel_per_bet: null,
            transform_sources_per_bet: null,
            base_state: "BASE_POWER_MODE",
            base_state_per_bet: {
              200: "BASE_POWER_MODE"
            }
          }
        },
        data: [ {
          original_state: "BASE_POWER_MODE",
          state: "BASE_POWER_MODE",
          bet_amount: 200,
          fixed_bet: false,
          action_winnings: 0,
          round_winnings: 0,
          winnings: {
            WINNING_WAYS: [],
            NEW_LEVEL: [],
            CONSUMED_LIVES: [ {
              id: "WI_LI",
              winnings: 1,
              winning_type: "Scatter",
              prize_type: "CollectedItem",
              source: {
                type: "Symbols",
                main_symbol: "WI",
                occurrences: 1,
                winning_symbols: [ {
                  symbol: "WI_LI",
                  coordinates: {
                    reel: 3,
                    row: 1
                  }
                } ],
                aggregations: 1
              }
            } ],
            FREE_SPINS: [],
            COLLECTED_FREE_SPINS: [],
            SUPER_FREE_SPINS: []
          },
          counters: {
            COLLECTED_FREE_SPINS: {
              value_per_bet: {
                200: 65
              },
              default_value: 0,
              limits: [ 0, 65, 130, 195, 260, 325, 390, 455, 520, 585, 650 ]
            },
            LIVES: {
              value_per_bet: {
                200: 3
              },
              default_value: 0,
              limits: [ 0, 3, 4, 5, 6, 7, 8, 9, 10 ]
            },
            MULTIPLIER: {
              value_per_bet: {
                200: 1
              },
              default_value: 1,
              limits: [ 1 ]
            },
            LEVEL: {
              value_per_bet: {
                200: 1
              },
              default_value: 0,
              limits: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
            }
          },
          opens_game_round: true,
          closes_game_round: true,
          available_actions: [ "Spin" ],
          redeemables: [],
          max_win_reached: false,
          action_type: "Spin",
          original_panel: {
            reels: [ [ "H4", "L2", "L4", "H6" ], [ "H5", "H3", "H5", "L3" ], [ "H4", "H1", "L4", "H2" ], [ "H4", "WI_LI", "H2", "H2" ], [ "H3", "H3", "L1", "L1" ], [ "L3", "H5", "L2", "H6" ] ]
          },
          panel: {
            reels: [ [ "H4", "L2", "L4", "H6" ], [ "H5", "H3", "H5", "L3" ], [ "H4", "H1", "L4", "H2" ], [ "WI_EX", "WI_LI", "WI_EX", "WI_EX" ], [ "H3", "H3", "L1", "L1" ], [ "L3", "H5", "L2", "H6" ] ]
          },
          taxonomy: {
            type: "SimpleTaxonomy",
            dimensions: [ 4, 4, 4, 4, 4, 4 ]
          },
          transforms: {
            EXPANDING_WILDS_MODIFIER: [ {
              type: "OverrideTransform",
              source: [ {
                symbol: "WI_LI",
                coordinates: {
                  reel: 3,
                  row: 1
                }
              } ],
              overrides: [ {
                coordinates: {
                  reel: 3,
                  row: 0
                },
                original_symbol: "H4",
                symbol: "WI_EX"
              }, {
                coordinates: {
                  reel: 3,
                  row: 2
                },
                original_symbol: "H2",
                symbol: "WI_EX"
              }, {
                coordinates: {
                  reel: 3,
                  row: 3
                },
                original_symbol: "H2",
                symbol: "WI_EX"
              } ]
            } ],
            MYSTERY_SYMBOL_REPLACEMENT: [],
            AVALANCHE_CASCADES: []
          },
          taxonomy_transforms: [],
          state_per_bet: {
            200: "BASE_POWER_MODE"
          }
        } ],
        next: []
      },
      balance: 9894.4
    };
    cc._RF.pop();
  }, {
    "./GameDataEvents": "GameDataEvents",
    "./GameDataParser": "GameDataParser"
  } ],
  ICommand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71822DIdjFH+KyX2auob+2z", "ICommand");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad50f9z43VDhbIqnxnONDJP", "IState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  NetworkManager9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9584dqap/5NXpFdI3D21GUC", "NetworkManager9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NetworkManager9999 = void 0;
    var Declaration9999_1 = require("../Declaration9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NetworkManager9999 = function(_super) {
      __extends(NetworkManager9999, _super);
      function NetworkManager9999() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NetworkManager9999 = __decorate([ ccclass ], NetworkManager9999);
      return NetworkManager9999;
    }(Declaration9999_1.NetworkManagerComp);
    exports.NetworkManager9999 = NetworkManager9999;
    cc._RF.pop();
  }, {
    "../Declaration9999": "Declaration9999"
  } ],
  NetworkManagerComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "771c2H8IYJACqbuBwhWf5KU", "NetworkManagerComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NetworkManagerComp = void 0;
    var api_1 = require("./api");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NetworkManagerComp = function(_super) {
      __extends(NetworkManagerComp, _super);
      function NetworkManagerComp() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NetworkManagerComp_1 = NetworkManagerComp;
      Object.defineProperty(NetworkManagerComp, "instance", {
        get: function() {
          this._instance || console.warn("NetworkManagerComp instance is missing. Create a Node with NetworkManagerComp attached.");
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      NetworkManagerComp.prototype.onLoad = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            NetworkManagerComp_1._instance = this;
            return [ 2 ];
          });
        });
      };
      NetworkManagerComp.prototype.authenticate = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, api_1.GameAPI.instance.authenticate() ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      NetworkManagerComp.prototype.callApiGetSession = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, api_1.GameAPI.instance.recover() ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      NetworkManagerComp.prototype.callApiGetSpinResult = function(betAmount) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, api_1.GameAPI.instance.play(betAmount) ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      NetworkManagerComp.prototype.callApiGetSpinComplete = function(roundId) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, api_1.GameAPI.instance.complete(roundId) ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      var NetworkManagerComp_1;
      NetworkManagerComp._instance = null;
      NetworkManagerComp = NetworkManagerComp_1 = __decorate([ ccclass ], NetworkManagerComp);
      return NetworkManagerComp;
    }(cc.Component);
    exports.NetworkManagerComp = NetworkManagerComp;
    cc._RF.pop();
  }, {
    "./api": "api"
  } ],
  ObserverComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82839KvoOpM/5yZfwCBy6MD", "ObserverComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ObserverComp = void 0;
    var AssetManagerComp_1 = require("../../Managers/AssetManagerComp");
    var EventManagerComp_1 = require("../../Managers/EventManagerComp");
    var GameConfigManagerComp_1 = require("../../Managers/GameConfigManagerComp");
    var GameDataManagerComp_1 = require("../../Managers/GameDataManagerComp");
    var PopupManagerComp_1 = require("../../Managers/PopupManagerComp");
    var PreloaderManagerComp_1 = require("../../Managers/PreloaderManagerComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ObserverComp = function(_super) {
      __extends(ObserverComp, _super);
      function ObserverComp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._gameConfig = null;
        _this._assetManager = null;
        _this._popupManager = null;
        _this._gameDataManager = null;
        _this._eventManager = null;
        _this._preloaderManager = null;
        return _this;
      }
      ObserverComp.prototype.onLoad = function() {
        this._gameConfig = this.node.getComponent(GameConfigManagerComp_1.GameConfigManagerComp);
        this._assetManager = this.node.getComponent(AssetManagerComp_1.AssetManagerComp);
        this._popupManager = this.node.getComponent(PopupManagerComp_1.PopupManagerComp);
        this._gameDataManager = this.node.getComponent(GameDataManagerComp_1.GameDataManagerComp);
        this._eventManager = this.node.getComponent(EventManagerComp_1.EventManagerComp);
        this._preloaderManager = this.node.getComponent(PreloaderManagerComp_1.PreloaderManagerComp);
      };
      ObserverComp.prototype.getConfig = function() {
        return this._gameConfig;
      };
      ObserverComp.prototype.getAssetManager = function() {
        return this._assetManager;
      };
      ObserverComp.prototype.getPopupManager = function() {
        return this._popupManager;
      };
      ObserverComp.prototype.getGameDataManager = function() {
        return this._gameDataManager;
      };
      ObserverComp.prototype.getEventManager = function() {
        return this._eventManager;
      };
      ObserverComp.prototype.getPreloaderManager = function() {
        return this._preloaderManager;
      };
      ObserverComp = __decorate([ ccclass ], ObserverComp);
      return ObserverComp;
    }(cc.Component);
    exports.ObserverComp = ObserverComp;
    cc._RF.pop();
  }, {
    "../../Managers/AssetManagerComp": "AssetManagerComp",
    "../../Managers/EventManagerComp": "EventManagerComp",
    "../../Managers/GameConfigManagerComp": "GameConfigManagerComp",
    "../../Managers/GameDataManagerComp": "GameDataManagerComp",
    "../../Managers/PopupManagerComp": "PopupManagerComp",
    "../../Managers/PreloaderManagerComp": "PreloaderManagerComp"
  } ],
  PopupConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb583wwI6pEuohPnmECU7mg", "PopupConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PopupConfig = void 0;
    var PopupConfig = function() {
      function PopupConfig() {}
      PopupConfig.popupName = function() {
        return {
          NOTIFY: "PopupNotify",
          SELECT: "PopupSelect"
        };
      };
      return PopupConfig;
    }();
    exports.PopupConfig = PopupConfig;
    cc._RF.pop();
  }, {} ],
  PopupManager9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd86cy0gbZDsIWN26gwVNmt", "PopupManager9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PopupTypeAdapterIngame = exports.EPopupTypeIngame = void 0;
    var Declaration9999_1 = require("./Declaration9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EPopupTypeIngame;
    (function(EPopupTypeIngame) {})(EPopupTypeIngame = exports.EPopupTypeIngame || (exports.EPopupTypeIngame = {}));
    exports.PopupTypeAdapterIngame = {};
    var PopupManager9999 = function(_super) {
      __extends(PopupManager9999, _super);
      function PopupManager9999() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PopupManager9999.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      PopupManager9999 = __decorate([ ccclass ], PopupManager9999);
      return PopupManager9999;
    }(Declaration9999_1.PopupManagerComp);
    exports.default = PopupManager9999;
    cc._RF.pop();
  }, {
    "./Declaration9999": "Declaration9999"
  } ],
  PopupManagerComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "355cdQD2lJDOpee9AEEgRub", "PopupManagerComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PopupManagerComp = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupManagerComp = function(_super) {
      __extends(PopupManagerComp, _super);
      function PopupManagerComp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popupContainer = null;
        _this.popupOverlay = null;
        _this.preloadedPopups = [];
        _this._activePopups = new Map();
        _this._currentPopupName = null;
        return _this;
      }
      PopupManagerComp.prototype.onLoad = function() {
        this.popupContainer || cc.warn("Pls attach popup container here: ", this.node);
        this.preloadPopup();
        this.setOverlay(false);
        this.popupOverlay && this.popupOverlay.on(cc.Node.EventType.TOUCH_END, this._onOverlayTouched, this);
      };
      PopupManagerComp.prototype.preloadPopup = function() {
        for (var _i = 0, _a = this.preloadedPopups; _i < _a.length; _i++) {
          var prefab = _a[_i];
          this.instantiatePopup(prefab);
        }
      };
      PopupManagerComp.prototype.showPopup = function(popupName, options) {
        var _this = this;
        void 0 === options && (options = {});
        var originalCbHide = options.cbHide;
        options.cbHide = function() {
          null === originalCbHide || void 0 === originalCbHide ? void 0 : originalCbHide();
          _this.setOverlay(false);
        };
        this.setOverlay(true);
        this._currentPopupName = popupName;
        if (this._activePopups.has(popupName)) {
          this.showActivePopup(popupName, options);
          return;
        }
        this.loadPopup(popupName, options);
      };
      PopupManagerComp.prototype.showActivePopup = function(popupName, options) {
        void 0 === options && (options = {});
        var popup = this._activePopups.get(popupName);
        popup.show(options);
      };
      PopupManagerComp.prototype.loadPopup = function(popupName, options) {
        var _this = this;
        void 0 === options && (options = {});
        cc.assetManager.loadBundle("preload", function(err, bundle) {
          if (err) {
            console.warn("PopupManager: Failed to load popup " + popupName, err);
            return;
          }
          bundle.load("popups/" + popupName, cc.Prefab, function(err, prefab) {
            if (err) {
              console.warn("PopupManager: Failed to load popup " + popupName, err);
              return;
            }
            _this.instantiatePopup(prefab);
            _this.showActivePopup(popupName, options);
          });
        });
      };
      PopupManagerComp.prototype.hidePopup = function(popupName) {
        if (this._activePopups.has(popupName)) {
          var popup = this._activePopups.get(popupName);
          popup.hide();
        }
      };
      PopupManagerComp.prototype.instantiatePopup = function(prefab) {
        var node = cc.instantiate(prefab);
        node.parent = this.popupContainer;
        var popupName = prefab.name;
        var popup = node.getComponent("BasePopup");
        node.active = false;
        this._activePopups.set(popupName, popup);
        console.log("PopupManager: Shown " + popupName);
      };
      PopupManagerComp.prototype.setOverlay = function(visible) {
        this.popupOverlay && (this.popupOverlay.active = visible);
        visible || (this._currentPopupName = null);
      };
      PopupManagerComp.prototype._onOverlayTouched = function() {
        this._currentPopupName && this.hidePopup(this._currentPopupName);
      };
      __decorate([ property(cc.Node) ], PopupManagerComp.prototype, "popupContainer", void 0);
      __decorate([ property(cc.Node) ], PopupManagerComp.prototype, "popupOverlay", void 0);
      __decorate([ property([ cc.Prefab ]) ], PopupManagerComp.prototype, "preloadedPopups", void 0);
      PopupManagerComp = __decorate([ ccclass ], PopupManagerComp);
      return PopupManagerComp;
    }(cc.Component);
    exports.PopupManagerComp = PopupManagerComp;
    cc._RF.pop();
  }, {} ],
  PopupNotify9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca437Y+ky5Pup+wjwydyu0g", "PopupNotify9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Declaration9999_1 = require("../Declaration9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupNotify9999 = function(_super) {
      __extends(PopupNotify9999, _super);
      function PopupNotify9999() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PopupNotify9999.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      PopupNotify9999 = __decorate([ ccclass ], PopupNotify9999);
      return PopupNotify9999;
    }(Declaration9999_1.BaseNotifyPopup);
    exports.default = PopupNotify9999;
    cc._RF.pop();
  }, {
    "../Declaration9999": "Declaration9999"
  } ],
  PopupSelect9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0e92/nvZVDMZ35fdiAd4Tl", "PopupSelect9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Declaration9999_1 = require("../Declaration9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopupNotify9999 = function(_super) {
      __extends(PopupNotify9999, _super);
      function PopupNotify9999() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PopupNotify9999.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      PopupNotify9999 = __decorate([ ccclass ], PopupNotify9999);
      return PopupNotify9999;
    }(Declaration9999_1.BaseSelectPopup);
    exports.default = PopupNotify9999;
    cc._RF.pop();
  }, {
    "../Declaration9999": "Declaration9999"
  } ],
  PreloaderManagerComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "afa0bmjp8NCta0fuqJQ7nMw", "PreloaderManagerComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PreloaderManagerComp = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PreloaderManagerComp = function(_super) {
      __extends(PreloaderManagerComp, _super);
      function PreloaderManagerComp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.preloader = null;
        return _this;
      }
      PreloaderManagerComp.prototype.show = function() {
        this.preloader.active = true;
      };
      PreloaderManagerComp.prototype.hide = function() {
        this.preloader.active = false;
      };
      __decorate([ property(cc.Node) ], PreloaderManagerComp.prototype, "preloader", void 0);
      PreloaderManagerComp = __decorate([ ccclass ], PreloaderManagerComp);
      return PreloaderManagerComp;
    }(cc.Component);
    exports.PreloaderManagerComp = PreloaderManagerComp;
    cc._RF.pop();
  }, {} ],
  ReelControl9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be8e4lteV5PIIdltiFU8UWo", "ReelControl9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReelControl9999 = void 0;
    var Declaration9999_1 = require("../Declaration9999");
    var CascadeCommands9999_1 = require("./CascadeCommands9999");
    var SlotReel9999_1 = require("./SlotReel9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReelControl9999 = function(_super) {
      __extends(ReelControl9999, _super);
      function ReelControl9999() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.reel = null;
        _this.cols = 6;
        _this.rows = 5;
        _this.listReel = [];
        _this.commandManager = null;
        _this._currentDropCount = 0;
        _this._spinningReelsCount = 0;
        _this._isSpinning = false;
        return _this;
      }
      ReelControl9999.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.commandManager = this.node.addComponent(Declaration9999_1.CommandManagerComp);
        this.setupReels();
      };
      ReelControl9999.prototype.setupReels = function() {
        var _this = this;
        this.node.removeAllChildren(true);
        for (var i = 0; i < this.cols; i++) {
          var reelNode = cc.instantiate(this.reel);
          this.node.addChild(reelNode);
          var reelComp = reelNode.getComponent(SlotReel9999_1.SlotReel9999);
          reelComp.setReel(i, this.rows);
          this.listReel.push(reelNode);
          reelNode.on("idle", function() {
            _this.node.emit("reelDropDone");
            _this._isSpinning && _this._onReelSpinDone();
          });
        }
      };
      ReelControl9999.prototype.startSpin = function() {
        this._isSpinning = true;
        this._spinningReelsCount = this.listReel.length;
        var delay = 0;
        for (var col = 0; col < this.listReel.length; col++) {
          var reelComp = this.listReel[col].getComponent(SlotReel9999_1.SlotReel9999);
          reelComp.spin(delay);
          delay += .05;
        }
      };
      ReelControl9999.prototype._onReelSpinDone = function() {
        this._spinningReelsCount--;
        if (this._spinningReelsCount <= 0) {
          this._spinningReelsCount = 0;
          this._isSpinning = false;
          this.node.emit(Declaration9999_1.GameDataEvents.SCRIPT_EVENTS.SPIN_ALL_DONE);
        }
      };
      ReelControl9999.prototype.onReceiveResult = function(resultDatas) {
        for (var col = 0; col < resultDatas.length; col++) {
          var colData = resultDatas[col];
          var reelComp = this.listReel[col].getComponent(SlotReel9999_1.SlotReel9999);
          reelComp.onReceiveResult(colData);
        }
      };
      ReelControl9999.prototype.applyExpandingWilds = function(expandingWildsTransforms, onComplete) {
        var _this = this;
        if (!expandingWildsTransforms || 0 === expandingWildsTransforms.length) {
          onComplete && onComplete();
          return;
        }
        var wildSpriteFrame = this.getAssetsManager().getCoreSymbolByCode("WI_EX");
        if (!wildSpriteFrame) {
          cc.warn("ExpandingWilds: WI_EX sprite frame not found");
          onComplete && onComplete();
          return;
        }
        var affectedReels = new Set();
        for (var _i = 0, expandingWildsTransforms_1 = expandingWildsTransforms; _i < expandingWildsTransforms_1.length; _i++) {
          var transform = expandingWildsTransforms_1[_i];
          var sourceSymbol = transform.source && transform.source[0];
          sourceSymbol && affectedReels.add(sourceSymbol.coordinates.reel);
        }
        var reelDataList = [];
        affectedReels.forEach(function(reelIndex) {
          reelIndex < _this.listReel.length && reelDataList.push({
            reelComp: _this.listReel[reelIndex].getComponent(SlotReel9999_1.SlotReel9999),
            wildSpriteFrame: wildSpriteFrame
          });
        });
        if (0 === reelDataList.length) {
          onComplete && onComplete();
          return;
        }
        this.commandManager.clearQueue();
        this.commandManager.enqueue(new CascadeCommands9999_1.ExpandingWildsCommand(reelDataList));
        this.commandManager.runQueue(function() {
          onComplete && onComplete();
        });
      };
      ReelControl9999.prototype.setCascadeQueue = function(cascadeSteps, onStepExecute) {
        var _this = this;
        this.commandManager.clearQueue();
        for (var _i = 0, cascadeSteps_1 = cascadeSteps; _i < cascadeSteps_1.length; _i++) {
          var step = cascadeSteps_1[_i];
          var cascades = step.transforms && step.transforms.AVALANCHE_CASCADES;
          if (!cascades || 0 === cascades.length) continue;
          var cascadeData = cascades[0];
          var deletions = cascadeData.deletions, movements = cascadeData.movements;
          if ((!deletions || 0 === deletions.length) && (!movements || 0 === movements.length)) continue;
          var delPerReel = this._groupByReel(deletions || [], function(d) {
            return d.coordinates.reel;
          });
          var movePerReel = this._groupByReel(movements || [], function(m) {
            return m.to.reel;
          });
          var reelDataList = [];
          for (var col = 0; col < this.listReel.length; col++) {
            var dels = delPerReel.get(col) || [];
            var moves = movePerReel.get(col) || [];
            if (0 === dels.length && 0 === moves.length) continue;
            reelDataList.push({
              reelComp: this.listReel[col].getComponent(SlotReel9999_1.SlotReel9999),
              deletions: dels,
              movements: moves
            });
          }
          if (0 === reelDataList.length) continue;
          this.commandManager.enqueue(new CascadeCommands9999_1.CascadeStepCommand(reelDataList, this.node, step, onStepExecute));
        }
        this.commandManager.runQueue(function() {
          cc.log("cascadeAllDone");
          _this.node.emit(Declaration9999_1.GameDataEvents.SCRIPT_EVENTS.CASCADE_ALL_DONE);
        });
      };
      ReelControl9999.prototype._groupByReel = function(items, getReelFn) {
        var map = new Map();
        items.forEach(function(item) {
          var reel = getReelFn(item);
          map.has(reel) || map.set(reel, []);
          map.get(reel).push(item);
        });
        return map;
      };
      __decorate([ property({
        displayName: "reel",
        type: cc.Prefab
      }) ], ReelControl9999.prototype, "reel", void 0);
      __decorate([ property({
        displayName: "col"
      }) ], ReelControl9999.prototype, "cols", void 0);
      __decorate([ property({
        displayName: "row"
      }) ], ReelControl9999.prototype, "rows", void 0);
      ReelControl9999 = __decorate([ ccclass ], ReelControl9999);
      return ReelControl9999;
    }(Declaration9999_1.SubjectComp);
    exports.ReelControl9999 = ReelControl9999;
    cc._RF.pop();
  }, {
    "../Declaration9999": "Declaration9999",
    "./CascadeCommands9999": "CascadeCommands9999",
    "./SlotReel9999": "SlotReel9999"
  } ],
  SlotConstants9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "158f4tCeVlGCLoceZ4sXBoj", "SlotConstants9999");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SlotConstants9999 = void 0;
    var SlotConstants9999 = function() {
      function SlotConstants9999() {}
      SlotConstants9999.ESlotSymbol = {
        H6: "H6",
        H5: "H5",
        H4: "H4",
        H3: "H3",
        H2: "H2",
        H1: "H1",
        L4: "L4",
        L3: "L3",
        L2: "L2",
        L1: "L1",
        SC: "SC",
        WI: "WI",
        WI_EX: "WI_EX",
        WI_LI: "WI_LI"
      };
      SlotConstants9999.DefaultSymbol = [ [ "H4", "L1", "H2", "H6", "L3" ], [ "L2", "H1", "H5", "L4", "H3" ], [ "H1", "H2", "L2", "H3", "L1" ], [ "L4", "H4", "H6", "L3", "H1" ], [ "H3", "L3", "H1", "L2", "L4" ], [ "H5", "H6", "L1", "H2", "L3" ] ];
      return SlotConstants9999;
    }();
    exports.SlotConstants9999 = SlotConstants9999;
    cc._RF.pop();
  }, {} ],
  SlotReel9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ba75G3WWxFx51WiDAbI26F", "SlotReel9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SlotReel9999 = void 0;
    var Declaration9999_1 = require("../Declaration9999");
    var SlotConstants9999_1 = require("./SlotConstants9999");
    var SlotSymbol9999_1 = require("./SlotSymbol9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReelState;
    (function(ReelState) {
      ReelState["IDLE"] = "idle";
      ReelState["SPINNING"] = "spinning";
      ReelState["RETURNING"] = "returning";
      ReelState["CASCADE_DROP"] = "cascadeDrop";
    })(ReelState || (ReelState = {}));
    var SlotReel9999 = function(_super) {
      __extends(SlotReel9999, _super);
      function SlotReel9999() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.symbol = null;
        _this._listSymbols = [];
        _this._symbolPositions = [];
        _this._state = ReelState.IDLE;
        _this._delay = 0;
        _this._delaySpinResult = 0;
        _this._spinTo = 0;
        _this._originY = 0;
        _this._symbolHeight = 0;
        _this._rows = 0;
        _this._resultData = [];
        _this._dropTargets = [];
        _this._originalSymbolHeight = 0;
        _this._isExpandingWild = false;
        return _this;
      }
      Object.defineProperty(SlotReel9999.prototype, "listSymbols", {
        get: function() {
          return this._listSymbols;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(SlotReel9999.prototype, "symbolPositions", {
        get: function() {
          return this._symbolPositions;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(SlotReel9999.prototype, "symbolHeight", {
        get: function() {
          return this._symbolHeight;
        },
        enumerable: false,
        configurable: true
      });
      SlotReel9999.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      SlotReel9999.prototype.setReel = function(col, rows) {
        var _this = this;
        this.node.removeAllChildren(true);
        this._listSymbols = [];
        this._symbolPositions = [];
        this._rows = rows;
        var _a = this.symbol.data, symbolHeight = _a.height, symbolAnchorY = _a.anchorY;
        this._symbolHeight = symbolHeight;
        this._spinTo = rows * symbolHeight + symbolHeight * symbolAnchorY;
        for (var r = 0; r < rows; r++) {
          var symbolNode = cc.instantiate(this.symbol);
          symbolNode.getComponent(SlotSymbol9999_1.SlotSymbol9999).setCoreSymbol(SlotConstants9999_1.SlotConstants9999.DefaultSymbol[col][r]);
          symbolNode.name += "_" + col + "_" + r;
          symbolNode.y -= r * this._symbolHeight;
          this.node.addChild(symbolNode);
          this._listSymbols.push(symbolNode);
        }
        this._originY = this.node.y;
        this.scheduleOnce(function() {
          _this._symbolPositions = [];
          for (var r = 0; r < _this._listSymbols.length; r++) _this._symbolPositions[r] = _this._listSymbols[r].y;
        }, 0);
      };
      SlotReel9999.prototype.showExpandingWild = function(wildSpriteFrame, duration, onComplete) {
        void 0 === duration && (duration = .5);
        this._isExpandingWild = true;
        var firstSymbol = this._listSymbols[0];
        if (!firstSymbol) return;
        var symbolComp = firstSymbol.getComponent(SlotSymbol9999_1.SlotSymbol9999);
        0 === this._originalSymbolHeight && (this._originalSymbolHeight = firstSymbol.height);
        for (var i = 1; i < this._listSymbols.length; i++) this._listSymbols[i].active = false;
        symbolComp.deactive();
        symbolComp.core.active = true;
        symbolComp.core.getComponent(cc.Sprite).spriteFrame = wildSpriteFrame;
        var reelHeight = this._rows * this._symbolHeight;
        firstSymbol.anchorY = 1;
        firstSymbol.y = this._symbolPositions[0] + .5 * this._symbolHeight;
        firstSymbol.height = reelHeight;
        firstSymbol.scaleY = 0;
        firstSymbol.opacity = 0;
        cc.Tween.stopAllByTarget(firstSymbol);
        cc.tween(firstSymbol).to(.6 * duration, {
          scaleY: 1.05,
          opacity: 255
        }, {
          easing: "backOut"
        }).to(.4 * duration, {
          scaleY: 1
        }, {
          easing: "bounceOut"
        }).call(function() {
          onComplete && onComplete();
        }).start();
      };
      SlotReel9999.prototype.hideExpandingWild = function() {
        if (!this._isExpandingWild) return;
        this._isExpandingWild = false;
        var firstSymbol = this._listSymbols[0];
        if (firstSymbol) {
          cc.Tween.stopAllByTarget(firstSymbol);
          firstSymbol.anchorY = .5;
          this._originalSymbolHeight > 0 && (firstSymbol.height = this._originalSymbolHeight);
          firstSymbol.y = this._symbolPositions[0];
          firstSymbol.scaleY = 1;
          firstSymbol.opacity = 255;
        }
        for (var _i = 0, _a = this._listSymbols; _i < _a.length; _i++) {
          var sym = _a[_i];
          sym.active = true;
          sym.getComponent(SlotSymbol9999_1.SlotSymbol9999).idle();
        }
      };
      Object.defineProperty(SlotReel9999.prototype, "hasExpandingWild", {
        get: function() {
          return this._isExpandingWild;
        },
        enumerable: false,
        configurable: true
      });
      SlotReel9999.prototype.spin = function(delay) {
        this.hideExpandingWild();
        this._state = ReelState.SPINNING;
        this._delay = delay;
        this._delaySpinResult = delay;
        this._resultData = [];
      };
      SlotReel9999.prototype.onReceiveResult = function(resultData) {
        this._resultData = resultData;
        this._state === ReelState.IDLE && this._spinResult();
      };
      SlotReel9999.prototype._spinResult = function() {
        for (var i = 0; i < this._listSymbols.length; i++) {
          this._listSymbols[i].getComponent(SlotSymbol9999_1.SlotSymbol9999).setCoreSymbol(this._resultData[i]);
          this._listSymbols[i].getComponent(SlotSymbol9999_1.SlotSymbol9999).idle();
        }
        this.node.y = this._spinTo;
        this._resultData = [];
        this._state = ReelState.RETURNING;
      };
      SlotReel9999.prototype.applyDropTargets = function(newList, dropTargets) {
        this._listSymbols = newList;
        this._dropTargets = dropTargets;
        this._state = ReelState.CASCADE_DROP;
      };
      SlotReel9999.prototype.update = function(dt) {
        switch (this._state) {
         case ReelState.CASCADE_DROP:
          this._updateCascadeDrop(dt);
          break;

         case ReelState.RETURNING:
          this._updateReturning(dt);
          break;

         case ReelState.SPINNING:
          this._updateSpinning(dt);
        }
      };
      SlotReel9999.prototype._updateCascadeDrop = function(dt) {
        var dropSpeed = 1200;
        var moveAmount = dropSpeed * dt;
        var allDone = true;
        for (var i = 0; i < this._dropTargets.length; i++) {
          var _a = this._dropTargets[i], node = _a.node, targetY = _a.targetY;
          if (node.y > targetY) {
            node.y -= moveAmount;
            node.y <= targetY ? node.y = targetY : allDone = false;
          }
        }
        if (allDone) {
          this._dropTargets = [];
          this._state = ReelState.IDLE;
          this.node.emit(ReelState.IDLE);
        }
      };
      SlotReel9999.prototype._updateReturning = function(dt) {
        if (this._delaySpinResult > 0) {
          this._delaySpinResult -= dt;
          if (this._delaySpinResult > 0) return;
        }
        var returnSpeed = 1500;
        var moveAmount = returnSpeed * dt;
        this.node.y -= moveAmount;
        if (this.node.y <= this._originY) {
          this.node.y = this._originY;
          this._state = ReelState.IDLE;
          this.node.emit(ReelState.IDLE);
        }
      };
      SlotReel9999.prototype._updateSpinning = function(dt) {
        if (this._delay > 0) {
          this._delay -= dt;
          if (this._delay > 0) return;
        }
        var spinSpeed = 1500;
        var moveAmount = spinSpeed * dt;
        this.node.y -= moveAmount;
        if (this.node.y <= -this._spinTo) {
          this.node.y = -this._spinTo;
          this._state = ReelState.IDLE;
          this._resultData.length > 0 && this._spinResult();
        }
      };
      __decorate([ property({
        displayName: "symbol",
        type: cc.Prefab
      }) ], SlotReel9999.prototype, "symbol", void 0);
      SlotReel9999 = __decorate([ ccclass ], SlotReel9999);
      return SlotReel9999;
    }(Declaration9999_1.SubjectComp);
    exports.SlotReel9999 = SlotReel9999;
    cc._RF.pop();
  }, {
    "../Declaration9999": "Declaration9999",
    "./SlotConstants9999": "SlotConstants9999",
    "./SlotSymbol9999": "SlotSymbol9999"
  } ],
  SlotSymbol9999: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9577aAWjQZAZ4OtvLnCHwcY", "SlotSymbol9999");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SlotSymbol9999 = void 0;
    var Declaration9999_1 = require("../Declaration9999");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SlotSymbol9999 = function(_super) {
      __extends(SlotSymbol9999, _super);
      function SlotSymbol9999() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.core = null;
        _this.blur = null;
        _this.spine = null;
        return _this;
      }
      SlotSymbol9999.prototype.setCoreSymbol = function(code) {
        this.deactive();
        this.core.active = true;
        this.core.getComponent(cc.Sprite).spriteFrame = this.getAssetsManager().getCoreSymbolByCode(code);
      };
      SlotSymbol9999.prototype.deactive = function() {
        this.core.active = false;
        this.blur.active = false;
        this.spine.active = false;
      };
      SlotSymbol9999.prototype.hide = function(dur) {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(dur, {
          scale: 0,
          opacity: 0
        }, {
          easing: "backIn"
        }).call(function() {
          _this.node.active = false;
        }).start();
      };
      SlotSymbol9999.prototype.idle = function() {
        this.node.scale = 1;
        this.node.opacity = 255;
        this.node.active = true;
      };
      SlotSymbol9999.prototype.expandToWild = function(wildCode, duration, onComplete) {
        var _this = this;
        void 0 === duration && (duration = .4);
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(.4 * duration, {
          scale: 1.3
        }, {
          easing: "backOut"
        }).call(function() {
          _this.setCoreSymbol(wildCode);
        }).to(.3 * duration, {
          scale: .9
        }, {
          easing: "sineIn"
        }).to(.3 * duration, {
          scale: 1
        }, {
          easing: "bounceOut"
        }).call(function() {
          onComplete && onComplete();
        }).start();
      };
      __decorate([ property(cc.Node) ], SlotSymbol9999.prototype, "core", void 0);
      __decorate([ property(cc.Node) ], SlotSymbol9999.prototype, "blur", void 0);
      __decorate([ property(cc.Node) ], SlotSymbol9999.prototype, "spine", void 0);
      SlotSymbol9999 = __decorate([ ccclass ], SlotSymbol9999);
      return SlotSymbol9999;
    }(Declaration9999_1.SubjectComp);
    exports.SlotSymbol9999 = SlotSymbol9999;
    cc._RF.pop();
  }, {
    "../Declaration9999": "Declaration9999"
  } ],
  StateMachineComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b9e2rJ2Q9OUZxvdCjGEBW7", "StateMachineComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StateMachineComp = void 0;
    var SubjectComp_1 = require("../Observer/SubjectComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StateMachineComp = function(_super) {
      __extends(StateMachineComp, _super);
      function StateMachineComp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._states = new Map();
        _this._currentState = null;
        _this._previousState = null;
        return _this;
      }
      StateMachineComp.prototype.addState = function(state) {
        this._states.has(state.name) && console.warn("StateMachineComp: State '" + state.name + "' already registered, overwriting.");
        this._states.set(state.name, state);
      };
      StateMachineComp.prototype.addStates = function(states) {
        var _this = this;
        states.forEach(function(s) {
          return _this.addState(s);
        });
      };
      StateMachineComp.prototype.changeState = function(name) {
        var nextState = this._states.get(name);
        if (!nextState) {
          console.warn("StateMachineComp: State '" + name + "' not found.");
          return;
        }
        if (this._currentState === nextState) return;
        this._currentState && this._currentState.onExit();
        this._previousState = this._currentState;
        this._currentState = nextState;
        this._currentState.onEnter();
      };
      StateMachineComp.prototype.revertState = function() {
        this._previousState && this.changeState(this._previousState.name);
      };
      StateMachineComp.prototype.getCurrentState = function() {
        return this._currentState;
      };
      StateMachineComp.prototype.getCurrentStateName = function() {
        return this._currentState ? this._currentState.name : null;
      };
      StateMachineComp.prototype.isInState = function(name) {
        return null != this._currentState && this._currentState.name === name;
      };
      StateMachineComp.prototype.update = function(dt) {
        this._currentState && this._currentState.onUpdate(dt);
      };
      StateMachineComp = __decorate([ ccclass ], StateMachineComp);
      return StateMachineComp;
    }(SubjectComp_1.SubjectComp);
    exports.StateMachineComp = StateMachineComp;
    cc._RF.pop();
  }, {
    "../Observer/SubjectComp": "SubjectComp"
  } ],
  SubjectComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51dcegDUCVMQaLdnDNdbXxd", "SubjectComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SubjectComp = void 0;
    var ObserverComp_1 = require("./ObserverComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SubjectComp = function(_super) {
      __extends(SubjectComp, _super);
      function SubjectComp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._observer = null;
        return _this;
      }
      SubjectComp.prototype.onLoad = function() {
        this.initObserver();
      };
      SubjectComp.prototype.initObserver = function() {
        if (this._observer) return;
        var ObserverNode = cc.find("ObserverNode");
        ObserverNode ? this._observer = ObserverNode.getComponent(ObserverComp_1.ObserverComp) : console.warn("SubjectComp: 'Canvas' node not found in scene.");
      };
      SubjectComp.prototype.getConfig = function() {
        this.initObserver();
        return this._observer.getConfig();
      };
      SubjectComp.prototype.getAssetsManager = function() {
        this.initObserver();
        return this._observer.getAssetManager();
      };
      SubjectComp.prototype.showWaiting = function() {
        this.initObserver();
        this._observer.getPreloaderManager().show();
      };
      SubjectComp.prototype.showPreload = function() {
        this.initObserver();
        this._observer.getPreloaderManager().show();
      };
      SubjectComp.prototype.hideLoading = function() {
        this.initObserver();
        this._observer.getPreloaderManager().hide();
      };
      SubjectComp.prototype.showPopup = function(popupName, data) {
        this.initObserver();
        this._observer.getPopupManager().showPopup(popupName, data);
      };
      SubjectComp.prototype.fireEvent = function(event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        this.initObserver();
        (_a = this._observer.getEventManager()).emit.apply(_a, __spreadArrays([ event ], args));
      };
      SubjectComp.prototype.registerEvent = function(event, callback, target) {
        this.initObserver();
        this._observer.getEventManager().on(event, callback, target);
      };
      SubjectComp = __decorate([ ccclass ], SubjectComp);
      return SubjectComp;
    }(cc.Component);
    exports.SubjectComp = SubjectComp;
    cc._RF.pop();
  }, {
    "./ObserverComp": "ObserverComp"
  } ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4875zBReRKWI7AASO0nnNh", "Utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Utils = void 0;
    var Utils;
    (function(Utils) {
      function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
      }
      Utils.clamp = clamp;
      function lerp(start, end, t) {
        return start * (1 - t) + end * t;
      }
      Utils.lerp = lerp;
      function randomRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      Utils.randomRange = randomRange;
      function randomRangeInt(min, max) {
        return Math.floor(randomRange(min, max));
      }
      Utils.randomRangeInt = randomRangeInt;
    })(Utils = exports.Utils || (exports.Utils = {}));
    cc._RF.pop();
  }, {} ],
  api: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92886UvJK9O0Y7rZ3D0Vv8s", "api");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameAPI = void 0;
    var BASE_URL = "https://demo.spinart.cloud";
    var GameAPI = function() {
      function GameAPI() {
        this.token = null;
        this.sessionId = null;
        this.defaultProvider = "peterandsons";
        this.defaultGame = "musashi";
        this._currencyDecimals = 0;
        this._currencyMultiplier = 1;
        this.token = null;
        this.sessionId = this._generateUUID();
        this.defaultProvider = "peterandsons";
        this.defaultGame = "musashi";
      }
      Object.defineProperty(GameAPI, "instance", {
        get: function() {
          this._instance || (this._instance = new GameAPI());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      GameAPI.prototype.setToken = function(token) {
        this.token = token;
      };
      GameAPI.prototype.getToken = function() {
        return this.token;
      };
      GameAPI.prototype._getHeaders = function(requiresAuth) {
        void 0 === requiresAuth && (requiresAuth = true);
        var headers = {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "x-session-id": this.sessionId
        };
        requiresAuth && this.token && (headers["authorization"] = "Bearer " + this.token);
        return headers;
      };
      GameAPI.prototype._post = function(endpoint, payload, requiresAuth) {
        void 0 === requiresAuth && (requiresAuth = true);
        return __awaiter(this, void 0, void 0, function() {
          var url, response, error_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              url = "" + BASE_URL + endpoint;
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 4, , 5 ]);
              return [ 4, fetch(url, {
                method: "POST",
                headers: this._getHeaders(requiresAuth),
                body: JSON.stringify(payload)
              }) ];

             case 2:
              response = _a.sent();
              if (!response.ok) throw new Error("[GameAPI] HTTP Error! Status: " + response.status + " at " + endpoint);
              return [ 4, response.json() ];

             case 3:
              return [ 2, _a.sent() ];

             case 4:
              error_1 = _a.sent();
              console.error("[GameAPI] Fetch failed for " + endpoint + ":", error_1);
              throw error_1;

             case 5:
              return [ 2 ];
            }
          });
        });
      };
      GameAPI.prototype.authenticate = function(wallet, operator, key) {
        void 0 === wallet && (wallet = "demo");
        void 0 === operator && (operator = "demo");
        void 0 === key && (key = "748116791788");
        return __awaiter(this, void 0, void 0, function() {
          var payload, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              payload = {
                wallet: wallet,
                operator: operator,
                key: key,
                provider: this.defaultProvider,
                game: this.defaultGame
              };
              return [ 4, this._post("/authenticate", payload, false) ];

             case 1:
              res = _a.sent();
              res && res.token && this.setToken(res.token);
              if (res && null != res.currencyDecimals) {
                this._currencyDecimals = res.currencyDecimals;
                this._currencyMultiplier = Math.pow(10, this._currencyDecimals);
              }
              return [ 2, res ];
            }
          });
        });
      };
      GameAPI.prototype.recover = function(complete) {
        void 0 === complete && (complete = false);
        return __awaiter(this, void 0, void 0, function() {
          var payload;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              payload = {
                game: this.defaultGame,
                provider: this.defaultProvider,
                complete: complete
              };
              return [ 4, this._post("/game/recover", payload, true) ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      GameAPI.prototype.play = function(bet, complete, asyncWin) {
        void 0 === bet && (bet = 2);
        void 0 === complete && (complete = false);
        void 0 === asyncWin && (asyncWin = false);
        return __awaiter(this, void 0, void 0, function() {
          var payload;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              payload = {
                game: this.defaultGame,
                provider: this.defaultProvider,
                action: "main",
                complete: complete,
                asyncWin: asyncWin,
                bet: bet / this._currencyMultiplier
              };
              return [ 4, this._post("/game/play", payload, true) ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      GameAPI.prototype.complete = function(roundId, asyncWin) {
        void 0 === asyncWin && (asyncWin = false);
        return __awaiter(this, void 0, void 0, function() {
          var payload;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              payload = {
                game: this.defaultGame,
                provider: this.defaultProvider,
                roundId: roundId,
                asyncWin: asyncWin
              };
              return [ 4, this._post("/game/complete", payload, true) ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      GameAPI.prototype._generateUUID = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          var r = 16 * Math.random() | 0;
          var v = "x" === c ? r : 3 & r | 8;
          return v.toString(16);
        });
      };
      GameAPI.prototype.toDisplayAmount = function(value) {
        return value * this._currencyMultiplier;
      };
      Object.defineProperty(GameAPI.prototype, "currencyMultiplier", {
        get: function() {
          return this._currencyMultiplier;
        },
        enumerable: false,
        configurable: true
      });
      GameAPI._instance = null;
      return GameAPI;
    }();
    exports.GameAPI = GameAPI;
    cc._RF.pop();
  }, {} ]
}, {}, [ "AssetsManager9999", "Declaration9999", "GameConfig9999", "PopupManager9999", "Director9999", "GameController9999", "NetworkManager9999", "PopupNotify9999", "PopupSelect9999", "CascadeCommands9999", "ReelControl9999", "SlotConstants9999", "SlotReel9999", "SlotSymbol9999", "PopupConfig", "GameDataEvents", "GameDataParser", "GameDataWriter", "AnimPreloader", "BaseNotifyPopup", "BasePopup", "BaseSelectPopup", "Director", "GameController", "AssetManagerComp", "EventManagerComp", "GameConfigManagerComp", "GameDataManagerComp", "NetworkManagerComp", "PopupManagerComp", "PreloaderManagerComp", "api", "CommandManagerComp", "ExampleCommand", "ICommand", "ObserverComp", "SubjectComp", "ExampleState", "IState", "StateMachineComp", "Utils" ]);
//# sourceMappingURL=index.js.map
