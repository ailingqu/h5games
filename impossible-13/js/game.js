(function (root, factory) {
	if (typeof module === "object" && module.exports) {
		module.exports = factory()
	} else {
		root.game = {
			config: factory(),
		}
	}
})(typeof self !== "undefined" ? self : this, function () {
	return {
		build_time: "10.02.2021 14:54:06",
		build_version: 148,
		publisher: "poki",
		game_title: "Impossible 13",
		game_title_short: "Impossible13",
		game_slug: "get-13",
	}
})
;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var game;
(function (game) {
    var Config = /** @class */ (function () {
        function Config() {
        }
        Config.GAME_TITLE = "Impossible_13";
        Config.LANGUAGES = ["en", "ru"];
        Config.SOURCE_GAME_WIDTH = 640;
        Config.SOURCE_GAME_HEIGHT = 850;
        Config.IS_LANDSCAPE = Config.SOURCE_GAME_WIDTH > Config.SOURCE_GAME_HEIGHT;
        Config.IS_PORTRAIT = Config.SOURCE_GAME_HEIGHT > Config.SOURCE_GAME_WIDTH;
        Config.GAME_CENTER = new Phaser.Point(Config.SOURCE_GAME_WIDTH / 2, Config.SOURCE_GAME_HEIGHT / 2);
        Config.GAME_BOUNDS = new Phaser.Rectangle(0, 0, Config.SOURCE_GAME_WIDTH, Config.SOURCE_GAME_HEIGHT);
        Config.GAME_WIDTH = Config.SOURCE_GAME_WIDTH;
        Config.GAME_HEIGHT = Config.SOURCE_GAME_HEIGHT;
        Config.HALF_GAME_WIDTH = Config.GAME_WIDTH * 0.5;
        Config.HALF_GAME_HEIGHT = Config.GAME_HEIGHT * 0.5;
        Config.WORLD_SCALE = 1;
        Config.ASPECT_RATIO = Config.SOURCE_GAME_WIDTH / Config.SOURCE_GAME_HEIGHT;
        Config.ASSETS_SCALE = 1; // legacy from Get13 Mobile
        return Config;
    }());
    game.Config = Config;
})(game || (game = {}));
var utils;
(function (utils) {
    var DrawUtil = /** @class */ (function () {
        function DrawUtil() {
        }
        DrawUtil.createRectTexture = function (_game, width, height, colorHex, cacheKey) {
            if (colorHex === void 0) { colorHex = "#000000"; }
            var color = Phaser.Color.hexToColor(colorHex);
            var addToCache = !!cacheKey;
            var texture = _game.add.bitmapData(width, height, cacheKey, addToCache);
            texture.fill(color.r, color.g, color.b);
            return texture;
        };
        DrawUtil.createCircleTexture = function (_game, radius, colorHex, cacheKey) {
            if (colorHex === void 0) { colorHex = "#000000"; }
            //let color:any = Phaser.Color.hexToColor(colorHex);
            var addToCache = !!cacheKey;
            var texture = _game.add.bitmapData(radius * 2, radius * 2, cacheKey, addToCache);
            texture.context.fillStyle = colorHex;
            texture.circle(radius, radius, radius);
            return texture;
        };
        return DrawUtil;
    }());
    utils.DrawUtil = DrawUtil;
})(utils || (utils = {}));
///<reference path='../robowhale/utils/DrawUtil.ts' />
///<reference path='../types/phaser.comments.d.ts' />
///<reference path='../Config.ts' />
var game;
(function (game) {
    var StateTransition = /** @class */ (function (_super) {
        __extends(StateTransition, _super);
        function StateTransition(_game) {
            var _this = _super.call(this, _game, _game.plugins) || this;
            _this.overlayDuration = 150;
            var bmd = utils.DrawUtil.createRectTexture(_this.game, 1, 1, "#FFF3E0", "black_rect");
            _this.overlay = new Phaser.Image(_game, 0, 0, bmd);
            _this.overlay.visible = false;
            _this.game.stage.addChild(_this.overlay);
            return _this;
        }
        StateTransition.prototype.fillStage = function () {
            this.overlay.width = game.Config.GAME_WIDTH;
            this.overlay.height = game.Config.GAME_HEIGHT;
        };
        StateTransition.prototype.changeState = function (newState, arg) {
            this.fillStage();
            this.game.input.enabled = false;
            this.showOverlay(newState, arg);
        };
        StateTransition.prototype.showOverlay = function (newState, arg) {
            var _this = this;
            this.overlay.visible = true;
            this.overlay.alpha = 0;
            this.overlayTween = this.game.add.tween(this.overlay).to({ alpha: 1 }, this.overlayDuration, Phaser.Easing.Cubic.Out, true);
            this.overlayTween.onComplete.addOnce(function () { _this.doChangeState(newState, arg); }, this);
        };
        StateTransition.prototype.doChangeState = function (newState, arg) {
            var _this = this;
            this.game.input.enabled = true;
            this.game.state.start(newState, true, false, arg);
            setTimeout(function () { _this.hideOverlay(); }, 100);
            setTimeout(function () { _this.overlay.visible = false; }, 100 + this.overlayDuration); // just in case
        };
        StateTransition.prototype.hideOverlay = function () {
            this.overlayTween = this.game.add.tween(this.overlay).to({ alpha: 0 }, this.overlayDuration, Phaser.Easing.Cubic.Out, true);
        };
        return StateTransition;
    }(Phaser.Plugin));
    game.StateTransition = StateTransition;
})(game || (game = {}));
///<reference path="IStorage.ts"/>
var game;
(function (game) {
    var RuntimeStorage /*implements IStorage*/ = /** @class */ (function () {
        function RuntimeStorage() {
            this.name = "Runtime Storage";
            this.storage = {};
        }
        Object.defineProperty(RuntimeStorage.prototype, "namespace", {
            get: function () {
                return this._namespace;
            },
            enumerable: false,
            configurable: true
        });
        RuntimeStorage.prototype.init = function () {
        };
        RuntimeStorage.prototype.setNamespace = function (namespace) {
            this._namespace = namespace;
        };
        RuntimeStorage.prototype.saveValue = function (key, value) {
            this.storage[this.getSaveKey(key)] = value;
        };
        RuntimeStorage.prototype.getValue = function (key) {
            return this.storage[this.getSaveKey(key)];
        };
        RuntimeStorage.prototype.getNumber = function (key) {
            return this.getValue(key) || 0;
        };
        RuntimeStorage.prototype.getBoolean = function (key) {
            return this.getValue(key) || false;
        };
        RuntimeStorage.prototype.getString = function (key) {
            return this.getValue(key) || "";
        };
        RuntimeStorage.prototype.getObject = function (key) {
            return this.getValue(key) || {};
        };
        RuntimeStorage.prototype.getContent = function (ignoreNamespace) {
            var _this = this;
            if (ignoreNamespace === void 0) { ignoreNamespace = false; }
            if (ignoreNamespace) {
                return this.storage;
            }
            else {
                var keys = Object.keys(this.storage).filter(function (key) { return key.indexOf(_this._namespace) > -1; });
                var content_1 = {};
                keys.forEach(function (key) {
                    content_1[key] = _this.storage[key];
                });
                return content_1;
            }
        };
        RuntimeStorage.prototype.clear = function (ignoreNamespace) {
            var _this = this;
            if (ignoreNamespace === void 0) { ignoreNamespace = false; }
            if (ignoreNamespace) {
                this.storage = {};
            }
            else {
                var keysToDelete = Object.keys(this.storage).filter(function (key) { return key.indexOf(_this._namespace) > -1; });
                keysToDelete.forEach(function (key) {
                    delete _this.storage[key];
                });
            }
        };
        RuntimeStorage.prototype.getSaveKey = function (key) {
            return this._namespace + "__" + key;
        };
        return RuntimeStorage;
    }());
    game.RuntimeStorage = RuntimeStorage;
})(game || (game = {}));
var game;
(function (game) {
    var LocalForageWrapper = /** @class */ (function () {
        function LocalForageWrapper(storeName) {
            this.type = "Local Forage";
            this.storeName = storeName;
        }
        LocalForageWrapper.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var testKey, results, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.instance = localforage.createInstance({
                                driver: [localforage.LOCALSTORAGE, localforage.INDEXEDDB],
                                storeName: this.storeName,
                                name: "robowhale",
                            });
                            testKey = "testKey";
                            return [4 /*yield*/, Promise.all([
                                    this.instance.setItem(testKey, testKey),
                                    this.instance.getItem(testKey),
                                    this.instance.removeItem(testKey),
                                ])];
                        case 1:
                            results = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            this.instance = null;
                            return [2 /*return*/, Promise.reject(error_1)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        LocalForageWrapper.prototype.saveValue = function (key, value) {
            var _a;
            return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.setItem(this.getStorageKey(key), value);
        };
        LocalForageWrapper.prototype.getStorageKey = function (key) {
            return "__" + key;
        };
        LocalForageWrapper.prototype.getValue = function (key) {
            var _a;
            return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.getItem(this.getStorageKey(key));
        };
        LocalForageWrapper.prototype.getNumber = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getValue(key)];
                });
            });
        };
        LocalForageWrapper.prototype.getBoolean = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getValue(key)];
                });
            });
        };
        LocalForageWrapper.prototype.getString = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getValue(key)];
                });
            });
        };
        LocalForageWrapper.prototype.getObject = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getValue(key)];
                });
            });
        };
        LocalForageWrapper.prototype.remove = function (key) {
            var _a;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.removeItem(this.getStorageKey(key));
        };
        LocalForageWrapper.prototype.clear = function () {
            var _a;
            return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.clear();
        };
        LocalForageWrapper.prototype.getDriverType = function () {
            if (!this.instance) {
                return "none";
            }
            switch (this.instance["_driver"]) {
                case localforage.LOCALSTORAGE:
                    return "localStorage";
                case localforage.INDEXEDDB:
                    return "indexed db";
                case localforage.WEBSQL:
                    return "websql";
                default:
                    return "none";
            }
        };
        return LocalForageWrapper;
    }());
    game.LocalForageWrapper = LocalForageWrapper;
})(game || (game = {}));
///<reference path="robowhale/storage/IStorage.ts"/>
///<reference path="robowhale/storage/RuntimeStorage.ts"/>
///<reference path="robowhale/storage/LocalForageWrapper.ts"/>
var game;
(function (game_1) {
    var GameStoreKey;
    (function (GameStoreKey) {
        GameStoreKey["LANGUAGE"] = "language";
        GameStoreKey["SOUND_MUTED"] = "sound_muted";
        GameStoreKey["MUSIC_MUTED"] = "music_muted";
        GameStoreKey["SAVED_GAME_STATE"] = "saved_game_state";
        GameStoreKey["TUTORIAL_COMPLETE"] = "Tutorial";
        GameStoreKey["GAME_OVER_TUTORIAL_COMPLETE"] = "game_over_tutorial_complete";
        GameStoreKey["COINS"] = "Coins";
        GameStoreKey["BEST_ITEM"] = "best_item";
        GameStoreKey["HEADSTART_POPUP_DSIABLED"] = "headstart_popup_disabled";
        GameStoreKey["COINSx2_POPUP_DSIABLED"] = "coinsx2_popup_disabled";
        GameStoreKey["SHUFFLE_TIMES"] = "shuffle_times";
        GameStoreKey["GAMES_PLAYED"] = "games_played";
        GameStoreKey["SHARE_REWARD_CLAIMED"] = "share_reward";
        GameStoreKey["PLAYER_ID"] = "player_id";
        GameStoreKey["PLAYER_NAME"] = "player_name";
        GameStoreKey["FREE_COINS_DISABLED"] = "free_coins_enabled";
    })(GameStoreKey = game_1.GameStoreKey || (game_1.GameStoreKey = {}));
    var GameStore = /** @class */ (function () {
        function GameStore(game, storeName) {
            this.game = game;
            this.storeName = storeName;
            this.initRuntimeStorage();
        }
        GameStore.prototype.initRuntimeStorage = function () {
            this._runtimeStorage = new game_1.RuntimeStorage();
            this._runtimeStorage.setNamespace(game.Config.GAME_TITLE);
        };
        GameStore.prototype.initActualStorage = function () {
            return this.useLocalForage();
        };
        GameStore.prototype.useLocalForage = function () {
            var _this = this;
            var forage = new game_1.LocalForageWrapper(this.storeName);
            return new Promise(function (resolve, reject) {
                forage.init()
                    .then(function () {
                    _this.setStorage(forage);
                    resolve();
                })
                    .catch(function (error) {
                    reject(error);
                })
                    .finally(function () {
                    var _a, _b;
                    var storageType = forage.getDriverType();
                    (_a = _this.game.raven) === null || _a === void 0 ? void 0 : _a.addTagsContext({ storage: storageType });
                    (_b = _this.game.analytics) === null || _b === void 0 ? void 0 : _b.sendDesignEvent("Storage:" + storageType);
                });
            });
        };
        GameStore.prototype.setStorage = function (storage) {
            this._storage = storage;
        };
        GameStore.prototype.getValue = function (key) {
            return this._runtimeStorage.getValue(key);
        };
        GameStore.prototype.getBoolean = function (key) {
            return this._runtimeStorage.getBoolean(key);
        };
        GameStore.prototype.getNumber = function (key) {
            return this._runtimeStorage.getNumber(key);
        };
        GameStore.prototype.getObject = function (key) {
            return this._runtimeStorage.getObject(key);
        };
        GameStore.prototype.saveValue = function (key, value) {
            var _this = this;
            var _a;
            this._runtimeStorage.saveValue(key, value);
            (_a = this._storage) === null || _a === void 0 ? void 0 : _a.saveValue(key, value).catch(function (error) {
                var _a;
                (_a = _this.game.raven) === null || _a === void 0 ? void 0 : _a.captureException(error, { extra: { key: key } });
            });
        };
        GameStore.prototype.changeNumericValue = function (key, changeValue) {
            var oldValue = this.getNumber(key);
            var newValue = oldValue + changeValue;
            this.saveValue(key, newValue);
            return newValue;
        };
        GameStore.prototype.getCoins = function () {
            return this.getNumber(GameStoreKey.COINS);
        };
        GameStore.prototype.getPlayerId = function () {
            return this.getValue(GameStoreKey.PLAYER_ID);
        };
        GameStore.prototype.changeCoins = function (delta) {
            var oldValue = this.getCoins();
            var newValue = Math.max(0, oldValue + delta);
            this.saveValue(GameStoreKey.COINS, newValue);
            return newValue;
        };
        GameStore.prototype.loadInitialValues = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.all(__spreadArrays([
                                this.loadValue(GameStoreKey.SAVED_GAME_STATE, ""),
                                this.loadValue(GameStoreKey.LANGUAGE, ""),
                                this.loadValue(GameStoreKey.TUTORIAL_COMPLETE, false),
                                this.loadValue(GameStoreKey.GAME_OVER_TUTORIAL_COMPLETE, false),
                                this.loadValue(GameStoreKey.BEST_ITEM, 2),
                                this.loadValue(GameStoreKey.COINS, 0),
                                this.loadValue(GameStoreKey.GAMES_PLAYED, 0),
                                this.loadValue(GameStoreKey.SHUFFLE_TIMES, 0),
                                this.loadValue(GameStoreKey.HEADSTART_POPUP_DSIABLED, false),
                                this.loadValue(GameStoreKey.COINSx2_POPUP_DSIABLED, false),
                                this.loadValue(GameStoreKey.SOUND_MUTED, false),
                                this.loadValue(GameStoreKey.MUSIC_MUTED, false),
                                this.loadValue(GameStoreKey.SHARE_REWARD_CLAIMED, false),
                                this.loadValue(GameStoreKey.FREE_COINS_DISABLED, false),
                                this.loadValue(GameStoreKey.PLAYER_ID, ""),
                                this.loadValue(GameStoreKey.PLAYER_NAME, "")
                            ], this.loadBoosters()))];
                        case 1:
                            _a.sent();
                            this.checkLoadedValues();
                            this.clearDataOnLoad();
                            console.groupCollapsed("Loaded initial values");
                            console.log(this._runtimeStorage.getContent(true));
                            console.groupEnd();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GameStore.prototype.checkLoadedValues = function () {
            var keys = Object.keys(GameStore).map(function (key) {
                return GameStore[key];
            });
            var loadedKeys = Object.keys(this._runtimeStorage.getContent()).map(function (key) {
                return key.split("__")[1];
            });
            var diff = _.difference(keys, loadedKeys);
            if (diff.length > 0) {
                console.warn("Not all saved values were loaded!", diff);
            }
        };
        GameStore.prototype.loadValue = function (key, defaultValue, callback, callbackContext) {
            return __awaiter(this, void 0, void 0, function () {
                var cb, cbContext, value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this._storage) {
                                this._runtimeStorage.saveValue(key, defaultValue);
                                return [2 /*return*/];
                            }
                            cb = callback || this.getLoadCallbackByValueType(defaultValue);
                            cbContext = callbackContext || this._storage;
                            return [4 /*yield*/, cb.call(cbContext, key)];
                        case 1:
                            value = (_a.sent()) || defaultValue;
                            this._runtimeStorage.saveValue(key, value);
                            return [2 /*return*/];
                    }
                });
            });
        };
        GameStore.prototype.getLoadCallbackByValueType = function (value) {
            var valueType = typeof value;
            switch (valueType) {
                case "number":
                    return this._storage.getNumber;
                case "string":
                    return this._storage.getValue;
                case "boolean":
                    return this._storage.getBoolean;
                case "object":
                    return this._storage.getObject;
                default:
                    return this._storage.getValue;
            }
        };
        GameStore.prototype.clear = function () {
            var _a;
            this._runtimeStorage.clear();
            (_a = this._storage) === null || _a === void 0 ? void 0 : _a.clear();
        };
        GameStore.prototype.initPlayer = function () {
            var id = this.getValue(GameStoreKey.PLAYER_ID);
            if (id === "") {
                this.saveValue(GameStoreKey.PLAYER_ID, this.game.rnd.uuid().toString());
            }
        };
        GameStore.prototype.clearDataOnLoad = function () {
            var clear = utils.NetUtil.getParamBool("clearData");
            if (!clear) {
                return;
            }
            this.saveValue(GameStoreKey.SAVED_GAME_STATE, "");
            this.saveValue(GameStoreKey.TUTORIAL_COMPLETE, false);
            this.saveValue(GameStoreKey.GAME_OVER_TUTORIAL_COMPLETE, false);
            this.saveValue(GameStoreKey.BEST_ITEM, 2);
            this.saveValue(GameStoreKey.COINS, 0);
            this.saveValue(GameStoreKey.GAMES_PLAYED, 0);
            this.saveValue(GameStoreKey.SHUFFLE_TIMES, 0);
            this.saveValue(GameStoreKey.HEADSTART_POPUP_DSIABLED, false);
            this.saveValue(GameStoreKey.COINSx2_POPUP_DSIABLED, false);
            this.saveValue(GameStoreKey.SHARE_REWARD_CLAIMED, false);
            this.clearBoosters();
        };
        GameStore.prototype.loadBoosters = function () {
            var _this = this;
            return game_1.BoosterTypeUtil.getAllTypes().map(function (booster) {
                return _this.loadValue(booster, 0);
            });
        };
        GameStore.prototype.clearBoosters = function () {
            var _this = this;
            return game_1.BoosterTypeUtil.getAllTypes().map(function (booster) {
                return _this.saveValue(booster, 0);
            });
        };
        GameStore.prototype.migrateSaveData = function () {
            var _this = this;
            try {
                var oldSavePrefix_1 = "Impossible_13";
                Object.keys(localStorage)
                    .filter(function (key) { return key.includes(oldSavePrefix_1); })
                    .forEach(function (key) {
                    var newKey = key.split("__")[1];
                    var oldValue = localStorage.getItem(key);
                    var newValue = newKey === GameStoreKey.SAVED_GAME_STATE ? oldValue : JSON.parse(oldValue);
                    _this.saveValue(newKey, newValue);
                    localStorage.removeItem(key);
                });
            }
            catch (error) {
            }
        };
        return GameStore;
    }());
    game_1.GameStore = GameStore;
})(game || (game = {}));
var utils;
(function (utils) {
    var NetUtil = /** @class */ (function () {
        function NetUtil() {
        }
        NetUtil.getCurrentHost = function () {
            if (window.location && window.location.hostname) {
                return window.location.hostname;
            }
            return null;
        };
        NetUtil.isLocalhost = function () {
            var localhostAliases = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                localhostAliases[_i] = arguments[_i];
            }
            return NetUtil.isHostAllowed(__spreadArrays(localhostAliases, ["localhost"]));
        };
        NetUtil.isHostAllowed = function (allowedHosts) {
            var currentHost = NetUtil.getCurrentHost();
            if (currentHost) {
                return allowedHosts.some(function (host) {
                    return currentHost.includes(host);
                });
            }
            return false;
        };
        NetUtil.inIFrame = function () {
            try {
                return window.self !== window.top;
            }
            catch (e) {
                return true;
            }
        };
        NetUtil.getParam = function (name) {
            var normalizedName = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + normalizedName + "=([^&#]*)");
            var results = regex.exec(location.search);
            return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
        };
        NetUtil.getParamInt = function (name, _default) {
            if (_default === void 0) { _default = 0; }
            var value = this.getParam(name);
            if (value) {
                var num = parseInt(value);
                return isNaN(num) ? _default : num;
            }
            return _default;
        };
        NetUtil.getParamFloat = function (name, _default) {
            if (_default === void 0) { _default = 0; }
            var value = this.getParam(name);
            if (value) {
                var num = parseFloat(value);
                return isNaN(num) ? _default : num;
            }
            return _default;
        };
        NetUtil.getParamBool = function (name, expectedValue) {
            if (expectedValue === void 0) { expectedValue = "1"; }
            var value = NetUtil.getParam(name);
            return !!(value && value === expectedValue);
        };
        return NetUtil;
    }());
    utils.NetUtil = NetUtil;
})(utils || (utils = {}));
var game;
(function (game_2) {
    var SimpleButton = /** @class */ (function (_super) {
        __extends(SimpleButton, _super);
        function SimpleButton(game, x, y, key, frame, parent) {
            var _this = _super.call(this, game, x, y, key, frame) || this;
            _this.callbackDelay = 0;
            _this._enabled = true;
            _this.disableInput = false;
            _this.userData = null;
            _this.soundKey = "tap";
            _this.areTweensEnabled = true;
            parent = parent !== null && parent !== void 0 ? parent : _this.game.world;
            parent.add(_this);
            _this._callback = new Phaser.Signal();
            _this.anchor.set(0.5, 0.5);
            _this.inputEnabled = true;
            _this.events.onInputDown.add(_this.onInputDown, _this);
            _this.events.onInputUp.add(_this.onInputUp, _this);
            _this.userData = {};
            _this.name = frame;
            if (_this.game.device.desktop) {
                _this.input.useHandCursor = true;
            }
            return _this;
        }
        Object.defineProperty(SimpleButton.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                this._enabled = value;
                this.input.enabled = this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        SimpleButton.prototype.onInputDown = function () {
            if (this.disableInput) {
                return;
            }
            this.executeCallback();
            if (this.game.cache.checkSoundKey(this.soundKey)) {
                this.game.sound.play(this.soundKey);
            }
            if (this.areTweensEnabled) {
                this.game.add.tween(this.scale).to({ x: 0.9, y: 0.9 }, 50, Phaser.Easing.Cubic.Out, true);
            }
        };
        SimpleButton.prototype.onInputUp = function () {
            if (this.disableInput) {
                return;
            }
            if (this.areTweensEnabled) {
                this.game.tweens.removeFrom(this.scale);
                this.game.add.tween(this.scale).to({ x: 1, y: 1 }, 150, Phaser.Easing.Cubic.Out, true);
            }
        };
        SimpleButton.prototype.executeCallback = function () {
            if (this.callbackDelay > 0) {
                this.game.time.events.add(this.callbackDelay, this._callback.dispatch, this._callback, this);
            }
            else {
                this._callback.dispatch(this);
            }
        };
        SimpleButton.prototype.setCallbackDelay = function (delay) {
            this.callbackDelay = delay;
        };
        SimpleButton.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this._callback.dispose();
            this._callback = null;
        };
        Object.defineProperty(SimpleButton.prototype, "callback", {
            get: function () {
                return this._callback;
            },
            enumerable: false,
            configurable: true
        });
        return SimpleButton;
    }(Phaser.Image));
    game_2.SimpleButton = SimpleButton;
})(game || (game = {}));
var game;
(function (game) {
    var StateKey;
    (function (StateKey) {
        StateKey["BOOT"] = "Boot";
        StateKey["PRELOADER"] = "WebPreloader";
        StateKey["MAIN_MENU"] = "MainMenu";
        StateKey["LEADERBOARDS"] = "LEADERBOARDS";
        StateKey["BOOSTERS_SHOP"] = "BoostersShop";
        StateKey["LEVEL"] = "Level";
        StateKey["GAME_OVER"] = "GameOver";
    })(StateKey = game.StateKey || (game.StateKey = {}));
})(game || (game = {}));
var utils;
(function (utils) {
    var FPSMeter = /** @class */ (function (_super) {
        __extends(FPSMeter, _super);
        function FPSMeter(game, parent) {
            var _this = _super.call(this, game, parent || game.stage, "fps_meter") || this;
            _this.timer = 0;
            _this.updateInterval = 100;
            _this.initBackground();
            _this.initText();
            _this.onResize();
            _this.game.state.onStateChange.add(_this.addPointerCallback, _this);
            _this.game.scale.onSizeChange.add(_this.onResize, _this);
            _this.game.time.advancedTiming = true;
            return _this;
        }
        FPSMeter.prototype.addPointerCallback = function () {
            if (this.game.input.onDown.has(this.onInputDown, this) === false) {
                this.game.input.onDown.add(this.onInputDown, this);
            }
        };
        FPSMeter.prototype.onInputDown = function (pointer) {
            var bounds = this.getBounds(this.parent);
            var isPointerOver = bounds.contains(pointer.x, pointer.y);
            if (isPointerOver) {
                this.toggleVisibility();
            }
        };
        FPSMeter.prototype.toggleVisibility = function () {
            if (this.alive) {
                this.kill();
            }
            else {
                this.revive();
            }
        };
        FPSMeter.prototype.initBackground = function () {
            var texture = utils.DrawUtil.createRectTexture(this.game, 164, 26);
            this.bg = this.game.add.image(0, 0, texture, null, this);
        };
        FPSMeter.prototype.initText = function () {
            var style = { font: "18px Consolas", fill: "#FFFFFF", align: "left" };
            this.text = this.game.add.text(6, 4, "0 fps", style, this);
            // this.text.lineSpacing = -5;
        };
        FPSMeter.prototype.update = function () {
            this.timer += this.game.time.elapsed;
            if (this.timer >= this.updateInterval) {
                this.timer -= this.updateInterval;
                this.updateStats();
            }
        };
        FPSMeter.prototype.updateStats = function () {
            var fps = "FPS: " + this.game.time.fps;
            var drawCalls = "DC: " + this.getDrawCallsNum();
            var result = fps + " | " + drawCalls;
            this.text.setText(result);
        };
        FPSMeter.prototype.getDrawCallsNum = function () {
            if (this.game.renderType === Phaser.CANVAS) {
                return 0;
            }
            var num = this.game.renderer.renderSession["drawCount"];
            var meterDrawCalls = 2;
            return num - meterDrawCalls;
        };
        FPSMeter.prototype.onResize = function () {
            this.top = game.Config.GAME_HEIGHT - this.bg.height;
            this.left = 0;
        };
        FPSMeter.prototype.destroy = function () {
            this.game.time.advancedTiming = false;
            _super.prototype.destroy.call(this, true, false);
        };
        return FPSMeter;
    }(Phaser.Group));
    utils.FPSMeter = FPSMeter;
})(utils || (utils = {}));
///<reference path='../robowhale/utils/FPSMeter.ts' />
var game;
(function (game) {
    var NetUtil = utils.NetUtil;
    var Boot = /** @class */ (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.game.analytics) {
                                this.game.analytics = new game.GameAnalyticsWrapper(this.game);
                            }
                            _a = this.game;
                            return [4 /*yield*/, this.checkAvifSupport()
                                // with this particular game the compressed pngs are smaller when webps so we can just skip webp entirely
                                // this.game.webp = this.checkWebpSupport()
                            ];
                        case 1:
                            _a.avif = _b.sent();
                            // with this particular game the compressed pngs are smaller when webps so we can just skip webp entirely
                            // this.game.webp = this.checkWebpSupport()
                            this.patchLoader();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Boot.prototype.checkAvifSupport = function () {
            var disableAvif = NetUtil.getParamBool("noAvif");
            if (disableAvif) {
                return Promise.resolve(false);
            }
            var isDevelop = window.environment === GameEnvironment.DEVELOP;
            if (isDevelop) {
                return Promise.resolve(false);
            }
            return new Promise(function (resolve) {
                var callback = function () { return image.height === 2 ? resolve(true) : resolve(false); };
                var image = new Image();
                image.onload = callback;
                image.onerror = callback;
                image.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
            });
        };
        Boot.prototype.checkWebpSupport = function () {
            var disableWebP = NetUtil.getParamBool("noWebp");
            if (disableWebP) {
                return false;
            }
            var isDevelop = window.environment === GameEnvironment.DEVELOP;
            if (isDevelop) {
                return false;
            }
            return this.checkWebP();
        };
        Boot.prototype.checkWebP = function () {
            var match = navigator.userAgent.match(/(Edge|Firefox)\/(\d+)\.(\d*)/);
            if (match && match[1] === "Firefox" && +match[2] >= 65) {
                return true;
            }
            // https://web.archive.org/web/20190626051700/https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/19618851/
            if (match && match[1] === "Edge" && +match[2] === 18 && +match[3] === 17763) {
                return false;
            }
            var canvas = Phaser.CanvasPool.create(document.body);
            var supported = canvas.toDataURL
                ? canvas.toDataURL("image/webp").indexOf("data:image/webp") == 0
                : false;
            Phaser.CanvasPool.remove(canvas);
            return supported;
        };
        Boot.prototype.patchLoader = function () {
            if (!this.game.avif && !this.game.webp) {
                return;
            }
            var newFormat = this.game.avif ? ".avif" : ".webp";
            var formatsToReplace = [".png", ".jpg"];
            var original = Phaser.Loader.prototype.addToFileList;
            Phaser.Loader.prototype.addToFileList = function (type, key, url, properties, overwrite, extension) {
                var format = formatsToReplace.find(function (_format) { return url.includes(_format); });
                if (format) {
                    url = url.replace(format, newFormat);
                }
                original.call(this, type, key, url, properties, overwrite, extension);
                return this;
            };
        };
        Boot.prototype.preload = function () {
        };
        Boot.prototype.create = function () {
            var _this = this;
            this.addPlugins();
            this.setupScale();
            this.addFPSMeter();
            this.detectModernDevice();
            this.fixAndroidDoubleClickBug();
            this.decoratePage();
            this.game.raven.setTagsOnStart();
            this.game.raven.trackStateChanges();
            this.game.raven.trackInputDown();
            this.game.input.maxPointers = 1;
            Promise.allSettled([
                this.loadWebFonts(),
                this.initPokiSdk(),
            ]).catch(function (error) {
                console.warn(error);
            }).finally(function () {
                _this.game.state.start('Preloader', true, false);
            });
        };
        Boot.prototype.addPlugins = function () {
            this.game.stateTransitionPlugin = this.game.add.plugin(new game.StateTransition(this.game));
            this.game.kineticScrolling = this.game.plugins.add(Phaser.Plugin.KineticScrolling);
            // this.game.plugins.add(PhaserNineSlice.Plugin)
            this.game.plugins.add(PhaserCachebuster.CacheBuster);
            if (Phaser.Plugin.SceneGraph) {
                this.game.plugins.add(Phaser.Plugin.SceneGraph, { quiet: true });
            }
        };
        Boot.prototype.setupScale = function () {
            if (this.game.device.desktop) {
                this.scaleForDesktop();
            }
            else {
                this.scaleForMobile();
                this.scaleGame();
                if (this.isLandscape()) {
                    this.onEnterIncorrectOrientation();
                }
            }
        };
        Boot.prototype.scaleForDesktop = function () {
            var scale = this.game.scale;
            scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            scale.aspectRatio = game.Config.SOURCE_GAME_WIDTH / game.Config.SOURCE_GAME_HEIGHT;
            scale.pageAlignHorizontally = true;
            scale.pageAlignVertically = true;
            // scale.maxWidth = Config.SOURCE_GAME_WIDTH
            // scale.maxHeight = Config.SOURCE_GAME_HEIGHT
        };
        Boot.prototype.scaleForMobile = function () {
            var scale = this.game.scale;
            scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            scale.forceOrientation(false, true);
            scale.onOrientationChange.add(this.onOrientationChange, this);
            window.addEventListener("resize", this.onSizeChange.bind(this));
        };
        Boot.prototype.onOrientationChange = function (scale, prevOrientation, wasIncorrect) {
            if (wasIncorrect) {
                this.fillViewport();
            }
        };
        Boot.prototype.onSizeChange = function () {
            var correctPortrait = game.Config.IS_PORTRAIT && this.isPortrait();
            var correctLandscape = game.Config.IS_LANDSCAPE && this.isLandscape();
            var isCorrectOrientation = correctPortrait || correctLandscape;
            if (isCorrectOrientation) {
                this.scaleGame();
                this.game.state.resize(game.Config.GAME_WIDTH, game.Config.GAME_HEIGHT);
                this.onEnterCorrectOrientation();
            }
            else {
                this.onEnterIncorrectOrientation();
            }
        };
        Boot.prototype.fillViewport = function () {
            var _this = this;
            if (typeof this.resizeTimeout !== "undefined") {
                clearTimeout(this.resizeTimeout);
            }
            this.resizeTimeout = setTimeout(function () {
                document.body.style.width = "100vw";
                document.body.style.height = "100vh";
                _this.resizeTimeout = setTimeout(function () {
                    _this.onSizeChange();
                }, 300);
            }, 300);
        };
        Boot.prototype.decoratePage = function () {
            var removeSidebars = utils.NetUtil.getParamBool("noSidebars");
            if (removeSidebars === false) {
                this.addSidebars(this.game.canvas);
                var imageFormat = this.getDefaultImageFormat();
                this.game.canvas.parentElement.style.backgroundImage = "url('assets/graphics/page_background." + imageFormat + "')";
                this.game.canvas.style.boxShadow = "0px 0px 5px 5px rgba(0, 0, 0, 0.07)";
                this.game.scale.refresh();
            }
            else {
                this.game.scale.pageAlignHorizontally = true;
                this.game.scale.pageAlignVertically = true;
                this.game.scale.align(true, true);
            }
        };
        Boot.prototype.getDefaultImageFormat = function () {
            if (this.game.avif) {
                return "avif";
            }
            else if (this.game.webp) {
                return "webp";
            }
            else {
                return "png";
            }
        };
        Boot.prototype.addSidebars = function (canvas) {
            var imageFormat = this.getDefaultImageFormat();
            var leftSidebar = document.createElement("div");
            leftSidebar.className = "sidebar";
            leftSidebar.style.backgroundImage = "url('assets/graphics/page_sidebar_left." + imageFormat + "')";
            canvas.parentNode.insertBefore(leftSidebar, canvas);
            var rightSidebar = document.createElement("div");
            rightSidebar.className = "sidebar";
            rightSidebar.style.backgroundImage = "url('assets/graphics/page_sidebar_right." + imageFormat + "')";
            canvas.parentNode.insertBefore(rightSidebar, canvas.nextSibling);
        };
        Boot.prototype.addFPSMeter = function () {
            var showStats = NetUtil.getParamBool("stats");
            if (showStats) {
                this.stage.addChild(new utils.FPSMeter(this.game));
            }
        };
        Boot.prototype.detectModernDevice = function () {
            game.Main.modernDevice = (this.game.renderType === Phaser.WEBGL || this.game.renderType === Phaser.WEBGL_MULTI);
        };
        Boot.prototype.scaleGame = function () {
            var newGameWidth = window.innerWidth;
            var newGameHeight = window.innerHeight;
            var originalWidth = game.Config.SOURCE_GAME_WIDTH;
            var originalHeight = game.Config.SOURCE_GAME_HEIGHT;
            var worldScale = (game.Config.IS_PORTRAIT)
                ? newGameWidth / originalWidth
                : newGameHeight / originalHeight;
            this.scale.setGameSize(newGameWidth / worldScale, newGameHeight / worldScale);
            this.game.canvas.parentElement.style.width = newGameWidth + "px";
            this.game.canvas.parentElement.style.height = newGameHeight + "px";
            game.Config.WORLD_SCALE = worldScale;
            game.Config.GAME_WIDTH = this.game.width;
            game.Config.GAME_HEIGHT = this.game.height;
            game.Config.HALF_GAME_WIDTH = game.Config.GAME_WIDTH * 0.5;
            game.Config.HALF_GAME_HEIGHT = game.Config.GAME_HEIGHT * 0.5;
            game.Config.ASPECT_RATIO = game.Config.GAME_WIDTH / game.Config.GAME_HEIGHT;
            game.Config.GAME_BOUNDS.setTo(0, 0, game.Config.GAME_WIDTH, game.Config.GAME_HEIGHT);
            game.Config.GAME_CENTER.set(game.Config.HALF_GAME_WIDTH, game.Config.HALF_GAME_HEIGHT);
        };
        Boot.prototype.onEnterIncorrectOrientation = function () {
            document.getElementById('rotate').style.display = 'flex';
        };
        Boot.prototype.onEnterCorrectOrientation = function () {
            document.getElementById('rotate').style.display = 'none';
        };
        Boot.prototype.isLandscape = function () {
            return (window.innerWidth > window.innerHeight);
        };
        Boot.prototype.isPortrait = function () {
            return (window.innerHeight > window.innerWidth);
        };
        Boot.prototype.fixAndroidDoubleClickBug = function () {
            if (this.game.device.touch && this.game.device.android) {
                this.game.input.mouse.enabled = false;
                this.game.input.mouse.stop();
            }
        };
        Boot.prototype.loadWebFonts = function () {
            return new Promise(function (resolve, reject) {
                WebFont.load({
                    custom: {
                        families: ['Nunito:n4,n7'],
                        urls: ["css/fonts.css"],
                    },
                    inactive: reject,
                    active: resolve,
                });
            });
        };
        Boot.prototype.initPokiSdk = function () {
            this.game.poki = new game.PokiSdkWrapper(this.game);
            return this.game.poki.init();
        };
        return Boot;
    }(Phaser.State));
    game.Boot = Boot;
})(game || (game = {}));
var game;
(function (game) {
    var LevelStats = /** @class */ (function () {
        function LevelStats(_game) {
            this.coins = 0;
            this.moves = 0;
            this._isHighscore = false;
            this.game = _game;
            this.bestItemTypeOnStart = this.game.store.getNumber(game.GameStoreKey.BEST_ITEM);
            this.totalTime = 0;
            this.lastActiveTime = this.game.time.now;
        }
        LevelStats.prototype.updateTime = function () {
            var delta = this.game.time.now - this.lastActiveTime;
            this.lastActiveTime = this.game.time.now;
            this.totalTime += delta;
        };
        LevelStats.prototype.onLevelEnd = function (itemsOnGrid) {
            this.updateTime();
            this.calculateTime();
            this.bestItemTypeAtEnd = _.maxBy(itemsOnGrid, "itemType").itemType;
            if (this.bestItemTypeAtEnd > this.bestItemTypeOnStart) {
                this._isHighscore = true;
            }
        };
        LevelStats.prototype.calculateTime = function () {
            this._timeInSeconds = Math.round(this.totalTime / 1000);
            this._timeInMinutes = Math.round(this._timeInSeconds / 60);
        };
        Object.defineProperty(LevelStats.prototype, "timeInMinutes", {
            get: function () {
                return this._timeInMinutes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LevelStats.prototype, "timeInSeconds", {
            get: function () {
                return this._timeInSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LevelStats.prototype, "isHighscore", {
            get: function () {
                return this._isHighscore;
            },
            enumerable: false,
            configurable: true
        });
        LevelStats.prototype.clone = function () {
            var ls = new LevelStats(this.game);
            ls.moves = this.moves;
            ls.coins = this.coins;
            ls.lastActiveTime = this.lastActiveTime;
            ls.totalTime = this.totalTime;
            return ls;
        };
        LevelStats.prototype.toString = function () {
            var data = {
                coins: this.coins,
                moves: this.moves,
                totalTime: this.totalTime,
                timeInSeconds: this.timeInSeconds,
                timeInMinutes: this.timeInMinutes,
                bestItemTypeOnStart: this.bestItemTypeOnStart,
                currentBestItemType: this.currentBestItemType,
                bestItemTypeAtEnd: this.bestItemTypeAtEnd,
                isHighscore: this._isHighscore
            };
            return JSON.stringify(data);
        };
        LevelStats.fromString = function (data, _game) {
            var parsedData = _.attempt(JSON.parse, data);
            if (_.isError(parsedData)) {
                console.warn("Can't parse saved LevelStats!", parsedData.name, parsedData.message);
                return null;
            }
            else {
                var levelStats = new LevelStats(_game);
                levelStats.coins = parsedData.coins;
                levelStats.moves = parsedData.moves;
                levelStats.totalTime = parsedData.totalTime;
                levelStats.lastActiveTime = _game.time.now;
                levelStats._timeInSeconds = parsedData.timeInSeconds;
                levelStats._timeInMinutes = parsedData.timeInMinutes;
                levelStats.bestItemTypeOnStart = parsedData.bestItemTypeOnStart;
                levelStats.currentBestItemType = parsedData.currentBestItemType;
                levelStats.bestItemTypeAtEnd = parsedData.bestItemTypeAtEnd;
                levelStats._isHighscore = parsedData.isHighscore;
                return levelStats;
            }
        };
        return LevelStats;
    }());
    game.LevelStats = LevelStats;
})(game || (game = {}));
///<reference path='LevelStats.ts' />
var game;
(function (game) {
    var FakeLevelStats = /** @class */ (function (_super) {
        __extends(FakeLevelStats, _super);
        function FakeLevelStats(_game) {
            var _this = _super.call(this, _game) || this;
            _this.coins = _this.game.rnd.integerInRange(0, 1999);
            _this.moves = _this.game.rnd.integerInRange(1, 1000);
            _this._timeInSeconds = _this.game.rnd.integerInRange(30, 4000);
            _this._timeInMinutes = _this.game.rnd.integerInRange(0, 100);
            _this.bestItemTypeAtEnd = _this.game.rnd.integerInRange(2, 200);
            // this._isHighscore = this.game.rnd.sign() === 1;
            _this._isHighscore = true;
            return _this;
        }
        return FakeLevelStats;
    }(game.LevelStats));
    game.FakeLevelStats = FakeLevelStats;
})(game || (game = {}));
/// <reference path='../../Config.ts' />
/// <reference path='../../Main.ts' />
/// <reference path='../../plugins/StateTransition.ts' />
///<reference path='../level/FakeLevelStats.ts' />
var game;
(function (game_3) {
    var BasePreloader = /** @class */ (function (_super) {
        __extends(BasePreloader, _super);
        function BasePreloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BasePreloader.prototype.fadeOutLoadingSpinner = function () {
            var loadingSpinner = this.getLoadingSpinner();
            if (loadingSpinner) {
                loadingSpinner.classList.add("spinner-fadeout");
            }
        };
        BasePreloader.prototype.removeLoadingSpinner = function () {
            var loadingSpinner = this.getLoadingSpinner();
            if (loadingSpinner) {
                loadingSpinner.remove();
            }
        };
        BasePreloader.prototype.getLoadingSpinner = function () {
            return document.getElementById("loading-spinner-container");
        };
        BasePreloader.prototype.preload = function () {
            this.game.analytics.sendLoadingEvent("main", "start");
            this.game.poki.sdk.gameLoadingStart();
            this.load.cacheBuster = window.game.config.build_version.toString();
            this.load.maxParallelDownloads = this.game.device.android ? 6 : 32;
            this.load.onFileComplete.add(this.onLoadProgress, this);
            this.loadOtherAssets();
            this.loadFonts();
            this.loadAudio();
            this.loadGraphics();
        };
        BasePreloader.prototype.onLoadProgress = function () {
        };
        BasePreloader.prototype.loadOtherAssets = function () {
            this.load.json("texts", "assets/texts.json");
            this.load.json("boosters", "assets/configs/boosters.json");
        };
        BasePreloader.prototype.loadFonts = function () {
            this.load.bitmapFontFromAtlas(game_3.GameFonts.BOOSTERS_SHOP_BARIOL_BOLD, "boosters_shop", "bariol_bold0000", "assets/fonts/bitmap/bariol_bold.fnt");
            this.load.bitmapFontFromAtlas(game_3.GameFonts.BARIOL_BOLD_BMP, "interface", "bariol_bold0000", "assets/fonts/bitmap/bariol_bold.fnt");
            this.load.bitmapFontFromAtlas(game_3.GameFonts.BARIOL_REGULAR_BMP, "interface", "bariol_regular0000", "assets/fonts/bitmap/bariol_regular.fnt");
            this.load.bitmapFontFromAtlas(game_3.GameFonts.GAME_OVER_BARIOL_BOLD, "game_over", "bariol_bold0000", "assets/fonts/bitmap/bariol_bold.fnt");
        };
        BasePreloader.prototype.loadAudio = function () {
        };
        BasePreloader.prototype.loadGraphics = function () {
            this.load.atlasJSONHash("leaderboard", 'assets/graphics/leaderboard.png', 'assets/graphics/leaderboard.json');
            this.load.atlasJSONHash("main_menu", 'assets/graphics/main_menu.png', 'assets/graphics/main_menu.json');
            this.load.atlasJSONHash("language_button", 'assets/graphics/button_language.png', 'assets/graphics/button_language.json');
            this.load.atlasJSONHash("boosters_shop", 'assets/graphics/boosters_shop.png', 'assets/graphics/boosters_shop.json');
            this.load.atlasJSONHash("interface", 'assets/graphics/interface.png', 'assets/graphics/interface.json');
            this.load.atlasJSONHash("game_over", 'assets/graphics/game_over.png', 'assets/graphics/game_over.json');
        };
        BasePreloader.prototype.create = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadSaveData()];
                        case 1:
                            _a.sent();
                            this.initPlayfab();
                            this.addToast();
                            this.initTexts();
                            this.initBoosters();
                            this.initAudio();
                            this.loadAudioDelayed();
                            this.game.poki.sdk.gameLoadingFinished();
                            this.game.analytics.sendLoadingEvent("main", "complete");
                            this.startGame();
                            return [2 /*return*/];
                    }
                });
            });
        };
        BasePreloader.prototype.loadSaveData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var error_2, message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 6]);
                            return [4 /*yield*/, this.game.store.initActualStorage()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 2:
                            error_2 = _a.sent();
                            message = error_2 instanceof DOMException
                                ? error_2.message
                                : error_2.toString();
                            this.game.analytics.sendErrorEvent("Storage:Init:" + message, gameanalytics.EGAErrorSeverity.Warning);
                            console.warn(error_2);
                            return [3 /*break*/, 6];
                        case 3: return [4 /*yield*/, this.game.store.loadInitialValues()];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.game.store.migrateSaveData()];
                        case 5:
                            _a.sent();
                            return [7 /*endfinally*/];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        BasePreloader.prototype.initPlayfab = function () {
            var store = this.game.store;
            var playerId = store.getPlayerId();
            if (playerId === "") {
                playerId = this.game.rnd.uuid().toString();
                store.saveValue(game_3.GameStoreKey.PLAYER_ID, playerId);
            }
            this.game.playfab = new game.PlayfabWrapper(this.game);
        };
        BasePreloader.prototype.addToast = function () {
            this.game.toast = new game_3.Toast(this.game, this.stage);
            this.game.toast.kill();
        };
        BasePreloader.prototype.initTexts = function () {
            this.game.texts = new game_3.GameTexts(this.game);
            this.game.analytics.sendDesignEvent("Language:browser:" + navigator.language);
            this.game.analytics.sendDesignEvent("Language:game:" + this.game.texts.language);
        };
        BasePreloader.prototype.initBoosters = function () {
            this.game.boosters = new game_3.BoostersManager(this.game);
            var addBoosters = utils.NetUtil.getParamBool("boosters");
            if (addBoosters) {
                this.game.boosters.getBooster(game_3.BoosterType.MAGNET).num = 9;
                this.game.boosters.getBooster(game_3.BoosterType.REMOVE).num = 9;
                this.game.boosters.getBooster(game_3.BoosterType.UPGRADE).num = 3;
                this.game.boosters.getBooster(game_3.BoosterType.SORT).num = 9;
                this.game.boosters.getBooster(game_3.BoosterType.UNDO).num = 9;
            }
        };
        BasePreloader.prototype.initAudio = function () {
            this.game.audio = new game_3.GameAudio(this.game);
            this.game.audio.trackFocusChange();
            this.game.audio.loadMute();
        };
        BasePreloader.prototype.loadAudioDelayed = function () {
            var basePath = "assets/audio/";
            var audioLoader = new Phaser.Loader(this.game);
            audioLoader.cacheBuster = "1"; // don't use cacheBuster
            audioLoader.audio("tap", basePath + "tap.mp3");
            audioLoader.audio("fancy_tap", basePath + "fancy_tap.mp3");
            audioLoader.audio("coins_prize", basePath + "coins_prize.mp3");
            audioLoader.audio("score_count_2", basePath + "score_count_2.mp3");
            audioLoader.audio("pop_1", basePath + "Pop_A.mp3");
            audioLoader.audio("pop_2", basePath + "Pop_B.mp3");
            audioLoader.audio("pop_4", basePath + "Pop_D.mp3");
            audioLoader.audio("item_convert", basePath + "item_convert.mp3");
            audioLoader.audio("item_convert_2", basePath + "item_convert_2.mp3");
            audioLoader.audio("toast_1", basePath + "toast_1.mp3");
            audioLoader.audio("muted_error", basePath + "muted_error.mp3");
            audioLoader.audio("new_item", basePath + "new_item.mp3");
            audioLoader.audio("purchase", basePath + "purchase.mp3");
            audioLoader.audio("game_complete_1", basePath + "game_complete_1.mp3");
            audioLoader.audio("game_complete_2", basePath + "game_complete_2.mp3");
            audioLoader.audio("coins_2", basePath + "coins_2.mp3");
            audioLoader.audio("coins_3", basePath + "coins_3.mp3");
            audioLoader.audio("no_moves_1", basePath + "no_moves_1.mp3");
            audioLoader.audio("no_moves_2", basePath + "no_moves_2.mp3");
            audioLoader.audio("whoosh", basePath + "whoosh_up.mp3");
            audioLoader.audio("popup", basePath + "popup.mp3");
            audioLoader.audio("shuffle", basePath + "shake.mp3");
            audioLoader.audio("restart_1", basePath + "restart_1.mp3");
            audioLoader.audio("booster_selected", basePath + "booster_selected.mp3");
            audioLoader.audio("fforward", basePath + "fforward.mp3");
            audioLoader.audio("tutorial", basePath + "tutorial.mp3");
            audioLoader.resetLocked = true; // prevent reset on state change
            audioLoader.onLoadComplete.addOnce(this.onAudioLoadComplete, this, 0, audioLoader);
            audioLoader.start();
        };
        BasePreloader.prototype.onAudioLoadComplete = function (loader) {
            console.groupCollapsed("Audio [delayed load]");
            loader._fileList.forEach(function (file) {
                console.log(file.key, file.url, file.loaded);
            });
            console.groupEnd();
        };
        BasePreloader.prototype.addCheatResources = function () {
            this.game.store.saveValue(game_3.GameStoreKey.COINS, 1000);
            this.game.boosters.getBooster(game_3.BoosterType.MAGNET).num = 5;
            this.game.boosters.getBooster(game_3.BoosterType.UNDO).num = 10;
            this.game.boosters.getBooster(game_3.BoosterType.REMOVE).num = 99;
            this.game.boosters.getBooster(game_3.BoosterType.SORT).num = 2;
            this.game.boosters.getBooster(game_3.BoosterType.UPGRADE).num = 3;
        };
        BasePreloader.prototype.startGame = function () {
            var isDevelop = window.environment === GameEnvironment.DEVELOP;
            if (isDevelop) {
                this.startGameDev();
            }
            else {
                this.startGameDeploy();
            }
        };
        BasePreloader.prototype.getSavedGameplayData = function () {
            var savedGame = this.game.store.getValue(game_3.GameStoreKey.SAVED_GAME_STATE);
            if (_.isEmpty(savedGame)) {
                return null;
            }
            else {
                return game_3.SavedGameState.fromString(savedGame, this.game);
            }
        };
        BasePreloader.prototype.createFakeLeaderBoard = function () {
            var leaderboard = this.cache.getJSON("leaderboard", true);
            leaderboard.forEach(function (entry) {
                entry.DisplayName = entry.name;
                entry.PlayFabId = entry.id;
                entry.Position = entry.rank;
                entry.StatValue = entry.points;
                delete entry.name;
                delete entry.id;
                delete entry.rank;
                delete entry.points;
            });
            console.log(JSON.stringify(leaderboard, null, 4));
        };
        BasePreloader.prototype.startGameDev = function () {
            this.game.changeState("MainMenu");
            // this.game.changeState("BoostersShop")
            // this.game.changeState("Level")
            // this.game.changeState("GameOver", { levelStats: new FakeLevelStats(this.game), skipStartAnimaition: false })
            // this.game.changeState(StateKey.LEADERBOARDS)
            // this.game.changeState("Test")
        };
        BasePreloader.prototype.startGameDeploy = function () {
            var _this = this;
            var isFirstTime = this.game.store.getBoolean(game_3.GameStoreKey.TUTORIAL_COMPLETE) === false;
            if (isFirstTime) {
                this.game.poki.commercialBreak("Preloader").finally(function () {
                    _this.game.changeState("Level");
                });
                return;
            }
            var savedGame = this.getSavedGameplayData();
            if (savedGame) {
                this.game.poki.commercialBreak("Preloader").finally(function () {
                    _this.game.changeState("Level", savedGame);
                });
                return;
            }
            this.game.changeState("MainMenu");
            // this.game.changeState("BoostersShop");
            // this.game.changeState("Level");
            // this.game.changeState("GameOver", new FakeLevelStats(this.game))
            // this.game.changeState("Test");
        };
        BasePreloader.prototype.shutdown = function (game) {
            var _this = this;
            this.fadeOutLoadingSpinner();
            setTimeout(function () {
                _this.removeLoadingSpinner();
            }, 200);
        };
        return BasePreloader;
    }(Phaser.State));
    game_3.BasePreloader = BasePreloader;
})(game || (game = {}));
///<reference path='BasePreloader.ts' />
var game;
(function (game_4) {
    var WebPreloader = /** @class */ (function (_super) {
        __extends(WebPreloader, _super);
        function WebPreloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WebPreloader.prototype.init = function () {
            _super.prototype.init.call(this);
            this.resize();
        };
        WebPreloader.prototype.onLoadProgress = function () {
            _super.prototype.onLoadProgress.call(this);
            // use this.load.progressFloat
        };
        WebPreloader.prototype.create = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, _super.prototype.create.call(this)];
                });
            });
        };
        WebPreloader.prototype.resize = function () {
        };
        WebPreloader.prototype.shutdown = function (game) {
            _super.prototype.shutdown.call(this, game);
        };
        return WebPreloader;
    }(game_4.BasePreloader));
    game_4.WebPreloader = WebPreloader;
})(game || (game = {}));
var game;
(function (game) {
    var GameLogo = /** @class */ (function (_super) {
        __extends(GameLogo, _super);
        function GameLogo(_game, parent) {
            var _this = _super.call(this, _game, parent, "game_logo") || this;
            _this.starsNum = 3;
            _this.scales = [0.44, 0.66, 1];
            _this.addLogo();
            _this.addLeftStars();
            _this.addRightStars();
            return _this;
        }
        GameLogo.prototype.addLogo = function () {
            this.logo = this.game.add.image(0, 0, "main_menu", "Item_130000", this);
            this.logo.anchor.set(0.5, 0.5);
            this.logo.inputEnabled = true;
            this.logo.data.clicks = 0;
            this.logo.events.onInputDown.add(this.onClick, this);
            this.logo.name = "game_logo";
            if (game.Main.development) {
                this.logo.input.useHandCursor = true;
            }
        };
        GameLogo.prototype.onClick = function () {
            if (++this.logo.data.clicks === 5) {
                this.logo.data.clicks = 0;
                var clearSaveData = typeof window.confirm !== "undefined" && window.confirm("Clear all saved data?") === true;
                if (clearSaveData) {
                    console.log("Game store :: All saved data was cleared!");
                    this.game.store.clear();
                    this.game.state.restart(true, false);
                }
            }
        };
        GameLogo.prototype.addLeftStars = function () {
            this.leftStars = this.createStars();
            this.leftStars.name = "left_stars";
            this.leftStars.right = this.logo.left - 20;
            this.leftStars.centerY = this.logo.centerY;
        };
        GameLogo.prototype.addRightStars = function () {
            this.rightStars = this.createStars();
            this.rightStars.name = "right_stars";
            this.rightStars.scale.x = -1;
            this.rightStars.left = this.logo.right + 20;
            this.rightStars.centerY = this.leftStars.centerY;
        };
        GameLogo.prototype.createStars = function () {
            var _this = this;
            var stars = this.game.add.group(this);
            stars.createMultiple(this.starsNum, "main_menu", "Title_Star0000", true);
            stars.children.forEach(function (child, index) {
                child.anchor.set(0.5, 0.5);
                child.scale.set(_this.scales[index]);
            });
            stars.align(this.starsNum, 1, 52, 70, Phaser.CENTER);
            stars.children[1].x -= 9;
            return stars;
        };
        GameLogo.prototype.show = function (initialDelay) {
            this.showItem(initialDelay);
            this.showStars(initialDelay);
        };
        GameLogo.prototype.showItem = function (initialDelay) {
            this.game.add.tween(this.logo).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, initialDelay);
            this.game.add.tween(this.logo.scale).from({
                x: 0.66,
                y: 0.66,
            }, 400, Phaser.Easing.Back.Out, true, initialDelay);
            // this.game.add.tween(this.logo).from({ angle: -15 }, 400, Phaser.Easing.Back.Out, true, initialDelay)
            this.centerY = this.originalY - 100;
            this.game.add.tween(this).to({ y: this.originalY }, 500, Phaser.Easing.Back.Out, true, initialDelay);
        };
        GameLogo.prototype.showStars = function (initialDelay) {
            var delay = initialDelay + 200;
            this.doShowStars(this.leftStars, delay);
            this.doShowStars(this.rightStars, delay);
        };
        GameLogo.prototype.doShowStars = function (stars, initialDelay) {
            var _this = this;
            stars.children.reverse().forEach(function (star, index) {
                var duration = 330 + 120 * index;
                var delay = initialDelay + index * 100;
                _this.game.add.tween(star).from({
                    x: "-66",
                    alpha: 0,
                    angle: 30,
                }, duration, Phaser.Easing.Cubic.Out, true, delay);
            });
        };
        GameLogo.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return GameLogo;
    }(Phaser.Group));
    game.GameLogo = GameLogo;
})(game || (game = {}));
var game;
(function (game) {
    var MainMenuCircles = /** @class */ (function (_super) {
        __extends(MainMenuCircles, _super);
        function MainMenuCircles(_game, parent) {
            var _this = _super.call(this, _game, parent, "circles") || this;
            _this.addCircles();
            _this.bringToTop(_this.bestItemCircle);
            return _this;
        }
        MainMenuCircles.prototype.addCircles = function () {
            var dx = 200;
            var textColor = 0xF29000;
            var circleTextureKey = "main_menu";
            var circleTextureFrame = "Circle0000";
            var coinsContent = this.game.store.getCoins().toString();
            this.coinsCircle = new game.StatCircle(this.game, this, circleTextureKey, circleTextureFrame, textColor, coinsContent);
            this.coinsCircle.addIcon("main_menu", "Icon_Coin0000");
            this.coinsCircle.scale.set(0.9);
            this.coinsCircle.name = "coins_circle";
            this.coinsCircle.centerX = -dx;
            var bestItem = this.game.store.getNumber(game.GameStoreKey.BEST_ITEM) || 2;
            this.bestItemCircle = new game.BestItemCircle(this.game, this, circleTextureKey, circleTextureFrame, textColor, bestItem.toString(), bestItem);
            this.bestItemCircle.innerCircle.loadTexture("main_menu", "Circle_Inner0000");
            this.bestItemCircle.item.getAt(0).loadTexture("main_menu", "Item_Back0000");
            this.bestItemCircle.addIcon("main_menu", "Icon_Crown0000");
            this.bestItemCircle.scale.set(1.13);
            this.bestItemCircle.name = "best_item_circle";
            var gamesPlayerText = this.getGamesPlayedText();
            this.gamesPlayedCircle = new game.StatCircle(this.game, this, circleTextureKey, circleTextureFrame, textColor, gamesPlayerText);
            this.gamesPlayedCircle.addIcon("main_menu", "Icon_Time0000");
            this.gamesPlayedCircle.text.scale.set(0.9);
            this.gamesPlayedCircle.text.y -= 5;
            this.gamesPlayedCircle.scale.set(0.9);
            this.gamesPlayedCircle.centerX = dx;
            this.circles = [this.coinsCircle, this.bestItemCircle, this.gamesPlayedCircle];
        };
        MainMenuCircles.prototype.getGamesPlayedText = function () {
            var gamesPlayedNum = this.game.store.getNumber(game.GameStoreKey.GAMES_PLAYED);
            var gamesPlayedTemplate = this.game.texts.texts.games;
            var gamesPlayerText = gamesPlayedTemplate.replace("#", gamesPlayedNum + "\n");
            return gamesPlayerText;
        };
        MainMenuCircles.prototype.show = function (initialDelay) {
            var _this = this;
            this.visible = true;
            this.circles.forEach(function (circle, index) {
                var delay = initialDelay + 150 + index * 120;
                _this.game.add.tween(circle).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, delay);
                _this.game.add.tween(circle).from({ y: "+22" }, 400, Phaser.Easing.Back.Out, true, delay);
                // .onComplete.addOnce(() => {
                // 	this.animateCircle(circle);
                // });
            });
        };
        MainMenuCircles.prototype.animateCircle = function (circle) {
            this.game.add.tween(this).to({ y: "+16" }, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        };
        MainMenuCircles.prototype.updateCoinsCircle = function () {
            var coins = this.game.store.getCoins();
            this.coinsCircle.updateText(coins.toString());
        };
        MainMenuCircles.prototype.onLanguageChange = function () {
            this.gamesPlayedCircle.updateText(this.getGamesPlayedText());
        };
        MainMenuCircles.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.circles = null;
        };
        return MainMenuCircles;
    }(Phaser.Group));
    game.MainMenuCircles = MainMenuCircles;
})(game || (game = {}));
var game;
(function (game) {
    var CreditsContent = /** @class */ (function (_super) {
        __extends(CreditsContent, _super);
        function CreditsContent(_game, parent) {
            var _this = _super.call(this, _game, parent, "credits") || this;
            _this.addBack();
            _this.addTitle();
            _this.addBackButton();
            _this.addContent();
            _this.alignContent();
            _this.backButton.kill();
            return _this;
        }
        CreditsContent.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "main_menu", "Settings_GUI_Back0000", this);
            this.back.alpha = 0;
        };
        CreditsContent.prototype.addTitle = function () {
            var content = this.geTitleContent();
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 46,
                fill: "#F29000",
                align: "center",
            };
            this.title = this.game.add.text(0, 0, content, style, this);
            this.title.anchor.set(0.5, 0.5);
            this.title.centerX = this.back.centerX;
            this.title.centerY = this.back.top + 56;
        };
        CreditsContent.prototype.geTitleContent = function () {
            return this.game.texts.texts.credits;
        };
        CreditsContent.prototype.addBackButton = function () {
            this.backButton = new game.SimpleButton(this.game, 0, 0, "main_menu", "Button_Back0000", this);
            this.backButton.areTweensEnabled = false;
            this.backButton.left = this.back.left;
            this.backButton.centerY = this.title.centerY + 1;
        };
        CreditsContent.prototype.addContent = function () {
            this.content = new game.SimpleButton(this.game, 0, 0, "main_menu", "credits_content0000", this);
            this.content.input.enabled = false;
            // this.content.callback.add(this.onRobowhaleClick, this);
        };
        CreditsContent.prototype.alignContent = function () {
            var top = this.title.bottom;
            var bottom = this.back.bottom;
            var height = bottom - top;
            this.content.centerX = this.back.centerX;
            this.content.centerY = top + height / 2;
        };
        CreditsContent.prototype.onRobowhaleClick = function () {
            window.open(CreditsContent.ROBOWHALE_URL);
        };
        CreditsContent.prototype.show = function (delay) {
            this.visible = true;
            this.exists = true;
            this.backButton.enabled = true;
            this.alpha = 0;
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).to({ alpha: 1 }, 250, Phaser.Easing.Cubic.Out, true, delay);
        };
        CreditsContent.prototype.hide = function () {
            var _this = this;
            this.backButton.enabled = false;
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).to({ alpha: 0 }, 120, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.exists = false;
                _this.visible = false;
            });
        };
        CreditsContent.prototype.onLanguageChange = function () {
            this.title.text = this.geTitleContent();
        };
        CreditsContent.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        CreditsContent.ROBOWHALE_URL = "https://robowhale.com/?utm_source=get13_fbinstant";
        return CreditsContent;
    }(Phaser.Group));
    game.CreditsContent = CreditsContent;
})(game || (game = {}));
///<reference path='CreditsContent.ts' />
var game;
(function (game) {
    var CreditsPopup = /** @class */ (function (_super) {
        __extends(CreditsPopup, _super);
        function CreditsPopup(_game, parent) {
            var _this = _super.call(this, _game, parent, "settings_popup") || this;
            _this.addBack();
            _this.addCloseButton();
            _this.addCreditsContent();
            return _this;
        }
        CreditsPopup.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "main_menu", "Settings_GUI_Back0000", this);
            this.back.inputEnabled = true;
            this.back.name = "settings_popup";
        };
        CreditsPopup.prototype.addCloseButton = function () {
            var offset = -6 * game.Config.ASSETS_SCALE;
            this.closeButton = new game.SimpleButton(this.game, 0, 0, "main_menu", "Button_Close0000", this);
            this.closeButton.centerX = this.back.right + offset;
            this.closeButton.centerY = this.back.top - offset;
            this.closeButton.name = "settings_close_button";
        };
        CreditsPopup.prototype.addCreditsContent = function () {
            this.content = new game.CreditsContent(this.game, this);
        };
        CreditsPopup.prototype.show = function (initialDelay) {
            this.visible = true;
            this.exists = true;
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).from({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true, initialDelay);
            this.game.add.tween(this).from({ y: "+50" }, 350, Phaser.Easing.Back.Out, true, initialDelay);
            this.showCloseButton(initialDelay + 200);
        };
        CreditsPopup.prototype.showCloseButton = function (delay) {
            this.closeButton.alpha = 0;
            this.closeButton.scale.set(0.77);
            this.game.tweens.removeFrom(this.closeButton);
            this.game.tweens.removeFrom(this.closeButton.scale);
            this.game.add.tween(this.closeButton).to({ alpha: 1 }, 150, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.closeButton.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Back.Out, true, delay);
        };
        CreditsPopup.prototype.hide = function () {
            var _this = this;
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).to({ alpha: 0, y: "+40" }, 160, Phaser.Easing.Cubic.In, true)
                .onComplete.addOnce(function () {
                _this.visible = false;
                _this.exists = false;
            });
        };
        CreditsPopup.prototype.getWidth = function () {
            return this.back.width;
        };
        CreditsPopup.prototype.getHeight = function () {
            return this.back.height;
        };
        CreditsPopup.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return CreditsPopup;
    }(Phaser.Group));
    game.CreditsPopup = CreditsPopup;
})(game || (game = {}));
///<reference path='CreditsPopup.ts' />
var game;
(function (game) {
    var CreditsScreen = /** @class */ (function (_super) {
        __extends(CreditsScreen, _super);
        function CreditsScreen(_game, parent) {
            var _this = _super.call(this, _game, parent, "settings_screen") || this;
            _this.addBackdrop();
            _this.addPopup();
            return _this;
        }
        CreditsScreen.prototype.addBackdrop = function () {
            this.backdrop = this.game.add.image(0, 0, "main_menu", "white_rect0000", this);
            this.backdrop.tint = 0x1A237E;
            this.backdrop.alpha = 0.66;
            this.backdrop.inputEnabled = true;
            this.backdrop.name = "settings_background";
        };
        CreditsScreen.prototype.addPopup = function () {
            this.window = new game.CreditsPopup(this.game, this);
            this.window.closeButton.callback.add(this.hide, this);
        };
        CreditsScreen.prototype.show = function () {
            this.parent.bringToTop(this);
            this.backdrop.events.onInputDown.add(this.onBackClick, this);
            this.visible = true;
            this.exists = true;
            this.window.closeButton.enabled = true;
            this.alpha = 1;
            this.showBackdrop();
            this.window.show(100);
        };
        CreditsScreen.prototype.onBackClick = function (back, pointer) {
            if (pointer.interactiveCandidates.length > 1) {
                return;
            }
            this.hide();
        };
        CreditsScreen.prototype.showBackdrop = function () {
            this.backdrop.alpha = 0;
            this.game.add.tween(this.backdrop).to({ alpha: 0.66 }, 150, Phaser.Easing.Cubic.Out, true);
        };
        CreditsScreen.prototype.hide = function () {
            var _this = this;
            this.backdrop.events.onInputDown.remove(this.onBackClick, this);
            this.window.closeButton.enabled = false;
            this.game.add.tween(this).to({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.exists = false;
                _this.visible = false;
            });
        };
        CreditsScreen.prototype.resize = function () {
            this.resizeBackdrop();
            this.window.closeButton.visible = false;
            this.window.centerX = game.Config.HALF_GAME_WIDTH;
            this.window.centerY = game.Config.HALF_GAME_HEIGHT;
            this.window.closeButton.visible = true;
        };
        CreditsScreen.prototype.resizeBackdrop = function () {
            this.backdrop.width = game.Config.GAME_WIDTH * 1.2;
            this.backdrop.height = game.Config.GAME_HEIGHT * 1.2;
            this.backdrop.centerX = game.Config.HALF_GAME_WIDTH;
            this.backdrop.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        CreditsScreen.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return CreditsScreen;
    }(Phaser.Group));
    game.CreditsScreen = CreditsScreen;
})(game || (game = {}));
var game;
(function (game_5) {
    var LanguageButton = /** @class */ (function (_super) {
        __extends(LanguageButton, _super);
        function LanguageButton(game, parent) {
            var _this = _super.call(this, game, parent) || this;
            _this.addBack();
            _this.addArrows();
            _this.addLanguageText();
            return _this;
        }
        LanguageButton.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "language_button", "button_language_back0000", this);
            this.back.anchor.set(0.5);
        };
        LanguageButton.prototype.addArrows = function () {
            var dx = 135;
            var y = -6;
            this.leftArrow = this.game.add.image(0, 0, "language_button", "arrow_left0000", this);
            this.leftArrow.anchor.set(0.5, 0.5);
            this.leftArrow.x = this.back.centerX - dx;
            this.leftArrow.y = y;
            this.leftArrow.inputEnabled = true;
            this.leftArrow.input.useHandCursor = true;
            this.rightArrow = this.game.add.image(0, 0, "language_button", "arrow_right0000", this);
            this.rightArrow.anchor.set(0.5, 0.5);
            this.rightArrow.x = this.back.centerX + dx;
            this.rightArrow.y = y;
            this.rightArrow.inputEnabled = true;
            this.rightArrow.input.useHandCursor = true;
        };
        LanguageButton.prototype.addLanguageText = function () {
            var style = {
                font: game_5.GameFonts.DEFAULT,
                fontWeight: game_5.FontWeight.BOLD,
                fontSize: 38,
                fill: "#ffffff",
                align: "center",
            };
            this.text = this.game.add.text(0, 0, "Language", style, this);
            this.text.anchor.set(0.5, 0.5);
            this.text.resolution = 2;
            this.text.y = this.leftArrow.y + 1;
        };
        LanguageButton.prototype.updateText = function (content) {
            this.text.setText(content, true);
            this.adjustTextSize();
        };
        LanguageButton.prototype.adjustTextSize = function () {
            var left = this.leftArrow.right;
            var right = this.rightArrow.left;
            var width = right - left;
            var maxWidth = width * 0.9;
            this.text.scale.set(1);
            var scale = Math.min(1, maxWidth / this.text.width);
            this.text.scale.set(scale);
        };
        Object.defineProperty(LanguageButton.prototype, "enabled", {
            set: function (value) {
                if (value) {
                    this.leftArrow.input.enabled = true;
                    this.rightArrow.input.enabled = true;
                }
                else {
                    this.leftArrow.input.enabled = false;
                    this.rightArrow.input.enabled = false;
                }
            },
            enumerable: false,
            configurable: true
        });
        return LanguageButton;
    }(Phaser.Group));
    game_5.LanguageButton = LanguageButton;
})(game || (game = {}));
///<reference path='LanguageButton.ts' />
var game;
(function (game) {
    var SettingsContent = /** @class */ (function (_super) {
        __extends(SettingsContent, _super);
        function SettingsContent(_game, parent) {
            var _this = _super.call(this, _game, parent, "settings_content") || this;
            _this.addBack();
            _this.addTitle();
            _this.addButtons();
            _this.buttons = [_this.soundButton, _this.languageButton];
            return _this;
        }
        SettingsContent.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "main_menu", "Settings_GUI_Back0000", this);
            this.back.alpha = 0;
        };
        SettingsContent.prototype.addTitle = function () {
            var content = this.getTitleContent();
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 46,
                fill: "#F29000",
                align: "center",
            };
            this.title = this.game.add.text(0, 0, content, style, this);
            this.title.anchor.set(0.5, 0.5);
            this.title.centerX = this.back.centerX;
            this.title.centerY = this.back.top + 56;
        };
        SettingsContent.prototype.getTitleContent = function () {
            return this.game.texts.texts.settings;
        };
        SettingsContent.prototype.addButtons = function () {
            this.buttonsContainer = this.game.add.group(this, "buttons");
            this.addSoundButton();
            this.addLanguageButton();
            this.alignButtons();
        };
        SettingsContent.prototype.addSoundButton = function () {
            this.soundButton = new game.ToggleButton(this.game, 0, 0, "main_menu", "Button_Sound_On0000", "Button_Sound_Off0000", this.buttonsContainer);
            this.soundButton.buttonState = (this.game.sound.mute) ? game.ToggleButtonState.STATE_2 : game.ToggleButtonState.STATE_1;
            this.soundButton.callback.add(this.onSoundButtonClick, this);
        };
        SettingsContent.prototype.onSoundButtonClick = function () {
            this.game.audio.soundMute = !this.game.audio.soundMute;
        };
        SettingsContent.prototype.addLanguageButton = function () {
            var _this = this;
            var language = game.LanguageUtil.getLanguageTitle(this.game.texts.language);
            this.languageButton = new game.LanguageButton(this.game, this.buttonsContainer);
            this.languageButton.centerX = this.soundButton.centerX;
            this.languageButton.top = this.soundButton.bottom + 30;
            this.languageButton.leftArrow.events.onInputDown.add(function () { return _this.updateLanguage(-1); });
            this.languageButton.rightArrow.events.onInputDown.add(function () { return _this.updateLanguage(1); });
            this.languageButton.updateText(language);
        };
        SettingsContent.prototype.updateLanguage = function (direction) {
            this.game.audio.playSound("tap");
            var texts = this.game.texts;
            var currentLanguage = texts.language;
            var languages = texts.allLanguages;
            var currentIndex = languages.indexOf(currentLanguage);
            var newIndex = Phaser.Math.wrap(currentIndex + direction, 0, languages.length);
            var newLanguage = languages[newIndex];
            this.game.store.saveValue(game.GameStoreKey.LANGUAGE, newLanguage);
            this.game.texts.setLanguage(newLanguage);
            this.languageButton.updateText(game.LanguageUtil.getLanguageTitle(newLanguage));
        };
        SettingsContent.prototype.alignButtons = function () {
            var top = this.title.bottom;
            var bottom = this.back.bottom;
            var height = bottom - top;
            this.buttonsContainer.centerX = this.back.centerX;
            this.buttonsContainer.centerY = top + height / 2;
        };
        SettingsContent.prototype.show = function (delay) {
            this.visible = true;
            this.exists = true;
            this.buttons.forEach(function (button) {
                button.enabled = true;
            });
            this.alpha = 0;
            this.game.add.tween(this).to({ alpha: 1 }, 250, Phaser.Easing.Cubic.Out, true, delay);
        };
        SettingsContent.prototype.hide = function () {
            var _this = this;
            this.buttons.forEach(function (button) {
                button.enabled = false;
            });
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).to({ alpha: 0 }, 120, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.exists = false;
                _this.visible = false;
            });
        };
        SettingsContent.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.buttons = null;
        };
        SettingsContent.prototype.onLanguageChange = function () {
            this.title.text = this.getTitleContent();
        };
        return SettingsContent;
    }(Phaser.Group));
    game.SettingsContent = SettingsContent;
})(game || (game = {}));
///<reference path='../credits/CreditsContent.ts' />
///<reference path='SettingsContent.ts' />
var game;
(function (game) {
    var SettingsPopup = /** @class */ (function (_super) {
        __extends(SettingsPopup, _super);
        function SettingsPopup(_game, parent) {
            var _this = _super.call(this, _game, parent, "settings_popup") || this;
            _this.addBack();
            _this.addCloseButton();
            _this.addSettingsContent();
            return _this;
        }
        SettingsPopup.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "main_menu", "Settings_GUI_Back0000", this);
            this.back.inputEnabled = true;
            this.back.name = "settings_popup";
        };
        SettingsPopup.prototype.addCloseButton = function () {
            var offset = -6 * game.Config.ASSETS_SCALE;
            this.closeButton = new game.SimpleButton(this.game, 0, 0, "main_menu", "Button_Close0000", this);
            this.closeButton.centerX = this.back.right + offset;
            this.closeButton.centerY = this.back.top - offset;
            this.closeButton.name = "settings_close_button";
        };
        SettingsPopup.prototype.addSettingsContent = function () {
            this.content = new game.SettingsContent(this.game, this);
        };
        SettingsPopup.prototype.show = function (initialDelay) {
            this.visible = true;
            this.exists = true;
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).from({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true, initialDelay);
            this.game.add.tween(this).from({ y: "+50" }, 350, Phaser.Easing.Back.Out, true, initialDelay);
            this.showCloseButton(initialDelay + 200);
        };
        SettingsPopup.prototype.showCloseButton = function (delay) {
            this.closeButton.alpha = 0;
            this.closeButton.scale.set(0.77);
            this.game.tweens.removeFrom(this.closeButton);
            this.game.tweens.removeFrom(this.closeButton.scale);
            this.game.add.tween(this.closeButton).to({ alpha: 1 }, 150, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.closeButton.scale).to({ x: 1, y: 1 }, 350, Phaser.Easing.Back.Out, true, delay);
        };
        SettingsPopup.prototype.hide = function () {
            var _this = this;
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).to({ alpha: 0, y: "+40" }, 160, Phaser.Easing.Cubic.In, true)
                .onComplete.addOnce(function () {
                _this.visible = false;
                _this.exists = false;
            });
        };
        SettingsPopup.prototype.getWidth = function () {
            return this.back.width;
        };
        SettingsPopup.prototype.getHeight = function () {
            return this.back.height;
        };
        SettingsPopup.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return SettingsPopup;
    }(Phaser.Group));
    game.SettingsPopup = SettingsPopup;
})(game || (game = {}));
///<reference path='SettingsPopup.ts' />
var game;
(function (game) {
    var SettingsScreen = /** @class */ (function (_super) {
        __extends(SettingsScreen, _super);
        function SettingsScreen(_game, parent) {
            var _this = _super.call(this, _game, parent, "settings_screen") || this;
            _this.addBackdrop();
            _this.addWindow();
            _this.addBuildInfo();
            return _this;
        }
        SettingsScreen.prototype.addBackdrop = function () {
            this.backdrop = this.game.add.image(0, 0, "main_menu", "white_rect0000", this);
            this.backdrop.tint = 0x1A237E;
            this.backdrop.alpha = 0.66;
            this.backdrop.inputEnabled = true;
            this.backdrop.name = "settings_background";
        };
        SettingsScreen.prototype.addWindow = function () {
            this.window = new game.SettingsPopup(this.game, this);
            this.window.closeButton.callback.add(this.hide, this);
        };
        SettingsScreen.prototype.addBuildInfo = function () {
            var buildVersion = window.game.config.build_version;
            var buildDate = window.game.config.build_time;
            var content = "Build #" + buildVersion + "\n" + buildDate;
            var style = {
                font: game.GameFonts.NUNITO_CSS,
                fontWeight: game.FontWeight.NORMAL,
                fontSize: 30,
                fill: "#ffffff",
                align: "center",
            };
            this.buildInfo = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_REGULAR_BMP, content, 30, this);
            this.buildInfo.align = "center";
            this.buildInfo.anchor.set(0.5, 1);
            this.buildInfo.alpha = 0.7;
        };
        SettingsScreen.prototype.show = function () {
            this.parent.bringToTop(this);
            this.backdrop.events.onInputDown.add(this.onBackClick, this);
            this.visible = true;
            this.exists = true;
            this.window.closeButton.enabled = true;
            this.alpha = 1;
            this.showBackdrop();
            this.window.show(100);
        };
        SettingsScreen.prototype.onBackClick = function (back, pointer) {
            if (pointer.interactiveCandidates.length > 1) {
                return;
            }
            this.hide();
        };
        SettingsScreen.prototype.showBackdrop = function () {
            this.backdrop.alpha = 0;
            this.game.add.tween(this.backdrop).to({ alpha: 0.66 }, 150, Phaser.Easing.Cubic.Out, true);
        };
        SettingsScreen.prototype.hide = function () {
            var _this = this;
            this.backdrop.events.onInputDown.remove(this.onBackClick, this);
            this.window.closeButton.enabled = false;
            this.game.add.tween(this).to({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.exists = false;
                _this.visible = false;
            });
        };
        SettingsScreen.prototype.resize = function () {
            this.resizeBackdrop();
            this.window.closeButton.visible = false;
            this.window.centerX = game.Config.HALF_GAME_WIDTH;
            this.window.centerY = game.Config.HALF_GAME_HEIGHT;
            this.window.closeButton.visible = true;
            this.buildInfo.x = game.Config.HALF_GAME_WIDTH;
            this.buildInfo.bottom = game.Config.GAME_HEIGHT - 20;
        };
        SettingsScreen.prototype.resizeBackdrop = function () {
            this.backdrop.width = game.Config.GAME_WIDTH * 1.2;
            this.backdrop.height = game.Config.GAME_HEIGHT * 1.2;
            this.backdrop.centerX = game.Config.HALF_GAME_WIDTH;
            this.backdrop.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        SettingsScreen.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return SettingsScreen;
    }(Phaser.Group));
    game.SettingsScreen = SettingsScreen;
})(game || (game = {}));
var game;
(function (game) {
    var leaderboard;
    (function (leaderboard) {
        var Avatar = /** @class */ (function (_super) {
            __extends(Avatar, _super);
            function Avatar(_game, parent) {
                var _this = _super.call(this, _game, parent, "avatar") || this;
                _this.addAvatar();
                _this.addMask();
                return _this;
            }
            Avatar.prototype.addAvatar = function () {
                this.avatar = this.game.add.image(0, 0, "leaderboard", "avatar_mask0000", this);
                this.avatar.anchor.set(0.5, 0.5);
                this.avatar.data.maxHeight = this.avatar.height;
            };
            Avatar.prototype.addMask = function () {
                this.alphaMask = this.game.make.image(0, 0, "leaderboard", "avatar_mask0000");
                this.alphaMask.anchor.set(0.5, 0.5);
            };
            Avatar.prototype.updateImage = function (imageKey) {
                this.alpha = 1;
                this.avatar.loadTexture(imageKey);
                this.avatar.scale.set(this.avatar.data.maxHeight / this.avatar.height);
                var bmd = this.game.make.bitmapData(this.avatar.width, this.avatar.height);
                bmd.draw(this.avatar, this.avatar.width / 2, this.avatar.height / 2);
                bmd.blendDestinationAtop();
                bmd.draw(this.alphaMask, this.avatar.width / 2, this.avatar.height / 2);
                this.avatar.loadTexture(bmd);
                this.avatar.scale.set(1);
            };
            Avatar.prototype.clearImage = function () {
                this.avatar.loadTexture("leaderboard", "avatar_mask0000");
                this.alpha = 0.66;
            };
            Avatar.prototype.destroy = function () {
                _super.prototype.destroy.call(this, true, false);
            };
            return Avatar;
        }(Phaser.Group));
        leaderboard.Avatar = Avatar;
    })(leaderboard = game.leaderboard || (game.leaderboard = {}));
})(game || (game = {}));
///<reference path='Avatar.ts' />
var game;
(function (game) {
    var Avatar = game.leaderboard.Avatar;
    var LeaderboardRow = /** @class */ (function (_super) {
        __extends(LeaderboardRow, _super);
        function LeaderboardRow(_game, parent) {
            var _this = _super.call(this, _game, parent, "leaderboard_entry") || this;
            _this.avatarSideMargin = 20;
            _this._selected = false;
            _this._dark = false;
            _this._empty = true;
            _this.textSize = 30;
            _this.textColor = 0xF29000;
            _this.textFont = game.GameFonts.BARIOL_REGULAR_BMP;
            _this.addBack();
            _this.addRank();
            _this.addAvatar();
            _this.addPlayerName();
            _this.addPoints();
            _this.addBorder();
            _this.bringToTop(_this.avatar);
            _this.resize(_this.back.width, _this.back.height);
            return _this;
        }
        Object.defineProperty(LeaderboardRow.prototype, "empty", {
            get: function () {
                return this._empty;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LeaderboardRow.prototype, "dark", {
            set: function (value) {
                this._dark = value;
                if (this._dark) {
                    this.back.tint = 0xF29000;
                    this.back.alpha = 0.1;
                }
                else {
                    this.back.alpha = 0;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LeaderboardRow.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (value) {
                this._selected = value;
                this.border.visible = this._selected;
            },
            enumerable: false,
            configurable: true
        });
        LeaderboardRow.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "leaderboard", "Leaderboard_Entry_Back0000", this);
        };
        LeaderboardRow.prototype.addRank = function () {
            this.rank = this.game.add.bitmapText(0, 0, this.textFont, "1", this.textSize, this);
            this.rank.anchor.set(0.5, 0.5);
            this.rank.tint = this.textColor;
        };
        LeaderboardRow.prototype.addAvatar = function () {
            this.avatar = new Avatar(this.game, this);
            this.avatar.alpha = 0.66;
            // this.avatar.kill()
        };
        LeaderboardRow.prototype.addPlayerName = function () {
            var content = "Vladislav";
            var fillColor = "#" + this.textColor.toString(16);
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.NORMAL,
                fontSize: this.textSize,
                fill: fillColor,
                align: "left",
            };
            this.playerName = this.game.add.text(0, 0, content, style, this);
            this.playerName.anchor.set(0, 0.5);
        };
        LeaderboardRow.prototype.addPoints = function () {
            this.points = this.game.add.bitmapText(0, 0, this.textFont, "0000", this.textSize, this);
            this.points.align = "right";
            this.points.anchor.set(1, 0.5);
            this.points.tint = this.textColor;
        };
        LeaderboardRow.prototype.addBorder = function () {
            this.border = this.game.add.image(0, 0, "leaderboard", "LeaderboardEntry_Border0000", this);
            this.border.anchor.set(0.5, 0.5);
            this.border.tint = 0xF29000;
            this.border.visible = false;
        };
        LeaderboardRow.prototype.resize = function (width, height) {
            this.back.width = width;
            this.back.height = height;
            this.alignAvatar();
            this.alignRank();
            // this.playerName.left = this.avatar.right + this.avatarSideMargin
            this.playerName.left = this.back.left + 110;
            this.playerName.centerY = this.back.centerY;
            this.points.right = this.back.right - 20;
            this.points.centerY = this.back.centerY;
            this.border.width = this.back.width;
            this.border.height = this.back.height;
            this.border.centerX = this.back.centerX;
            this.border.centerY = this.back.centerY;
        };
        LeaderboardRow.prototype.alignRank = function () {
            var left = this.back.left;
            var right = this.avatar.left;
            var width = right - left;
            this.rank.centerX = left + width / 2;
            this.rank.centerY = this.back.centerY;
        };
        LeaderboardRow.prototype.alignAvatar = function () {
            var maxHeight = this.back.height * 0.8;
            this.avatar.scale.set(1);
            this.avatar.scale.set(maxHeight / this.avatar.height);
            this.avatar.centerX = this.back.left + 140;
            this.avatar.centerY = this.back.centerY;
        };
        LeaderboardRow.prototype.setEmpty = function () {
            [this.rank, this.avatar, this.playerName, this.points].forEach(function (child) {
                child.visible = false;
            });
            this.avatar.clearImage();
            this.data = null;
            this._empty = true;
        };
        LeaderboardRow.prototype.setData = function (data) {
            this.data = data;
            [this.rank, this.avatar, this.playerName, this.points].forEach(function (child) {
                child.visible = true;
            });
            this.avatar.kill();
            this.updateRank(this.data.Position);
            this.updateName(this.data.DisplayName);
            this.updatePoints(this.data.StatValue);
            this._empty = false;
        };
        LeaderboardRow.prototype.updateRank = function (rank) {
            this.rank.setText(this.formatNumber(rank + 1));
            this.rank.scale.set(1);
            var maxWidth = 80;
            if (this.rank.width > maxWidth) {
                this.rank.scale.set(maxWidth / this.rank.width);
                this.alignRank();
            }
        };
        LeaderboardRow.prototype.updateName = function (name) {
            var normalizedName = _.truncate(name, { length: 20, omission: "..." });
            var deburred = _.deburr(normalizedName);
            this.playerName.setText(deburred);
        };
        LeaderboardRow.prototype.updatePoints = function (points) {
            this.points.setText(this.formatNumber(points));
        };
        LeaderboardRow.prototype.formatNumber = function (num) {
            return num.toLocaleString().split(",").join(" ");
        };
        LeaderboardRow.prototype.updateAvatar = function () {
            var avatarKey = "avatar_" + this.getPlayerID();
            if (this.game.cache.checkImageKey(avatarKey)) {
                this.avatar.updateImage(avatarKey);
                this.alignAvatar();
            }
            else {
                this.avatar.clearImage();
            }
        };
        LeaderboardRow.prototype.getPlayerID = function () {
            return (this.data)
                ? this.data.PlayFabId
                : "";
        };
        LeaderboardRow.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return LeaderboardRow;
    }(Phaser.Group));
    game.LeaderboardRow = LeaderboardRow;
})(game || (game = {}));
var game;
(function (game) {
    var AvatarsLoader = /** @class */ (function () {
        function AvatarsLoader(pGame) {
            this.destroyed = false;
            this.game = pGame;
            this.onLoadComplete = new Phaser.Signal();
        }
        AvatarsLoader.prototype.load = function (avatarsData) {
            var _this = this;
            this.avatarsTotal = avatarsData.length;
            this.avatarsLoaded = 0;
            this.avatarsData = avatarsData;
            avatarsData.forEach(function (avatarData) {
                if (_this.game.cache.checkImageKey(avatarData.key)) {
                    avatarData.loaded = true;
                    _this.avatarsLoaded++;
                    _this.checkIfComplete();
                }
                else {
                    var image = new Image();
                    image.crossOrigin = "anonymous";
                    image.onerror = _this.onAvatarImageLoadError.bind(_this, avatarData);
                    image.onload = _this.onAvatarImageLoaded.bind(_this, image, avatarData);
                    image.alt = avatarData.key;
                    image.src = avatarData.url;
                }
            });
        };
        AvatarsLoader.prototype.onAvatarImageLoadError = function (avatarData, event) {
            avatarData.loaded = false;
            avatarData.error = event.type;
            this.avatarsLoaded++;
            this.checkIfComplete();
        };
        AvatarsLoader.prototype.onAvatarImageLoaded = function (image, avatarData) {
            this.game.cache.addImage(image.alt, image.src, image);
            avatarData.loaded = true;
            this.avatarsLoaded++;
            this.checkIfComplete();
        };
        AvatarsLoader.prototype.checkIfComplete = function () {
            if (this.destroyed) {
                return;
            }
            if (this.avatarsLoaded >= this.avatarsTotal) {
                this.onLoadComplete.dispatch(this.avatarsData);
                if (this.autoDestroy) {
                    this.destroy();
                }
            }
        };
        AvatarsLoader.prototype.destroy = function () {
            if (this.destroyed === false) {
                this.destroyed = true;
                this.onLoadComplete.dispose();
                this.onLoadComplete = null;
            }
        };
        return AvatarsLoader;
    }());
    game.AvatarsLoader = AvatarsLoader;
})(game || (game = {}));
///<reference path='LeaderboardRow.ts' />
///<reference path='AvatarsLoader.ts' />
///<reference path='IAvatarData.ts' />
var game;
(function (game) {
    var Leaderboard = /** @class */ (function (_super) {
        __extends(Leaderboard, _super);
        function Leaderboard(_game, parent, rowsNum) {
            var _this = _super.call(this, _game, parent, "leaderboard") || this;
            _this.addTitle();
            _this.addSubtitle();
            _this.addSeparator();
            _this.addRows(rowsNum);
            _this.resetRows();
            return _this;
        }
        Leaderboard.prototype.addTitle = function () {
            var content = "Title";
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 36,
                fill: "#F29000",
            };
            this.title = this.game.add.text(0, 0, "Title", style, this);
        };
        Leaderboard.prototype.addSubtitle = function () {
            this.subtitle = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_REGULAR_BMP, "Subtitle", 26, this);
            this.subtitle.tint = 0xF29000;
        };
        Leaderboard.prototype.updateSubtitle = function (content) {
            this.subtitle.setText(content);
            this.subtitle.right = this.separator.right - 5;
        };
        Leaderboard.prototype.addSeparator = function () {
            this.separator = this.game.add.image(0, 0, "leaderboard", "leaderboard_separator0000", this);
        };
        Leaderboard.prototype.addRows = function (rowsNum) {
            this.rows = this.createRows(rowsNum);
            this.rowsGroup = this.game.add.group(this, "rows");
            this.rowsGroup.addMultiple(this.rows, true);
        };
        Leaderboard.prototype.createRows = function (rowsNum) {
            var _this = this;
            return _.times(rowsNum, function (num) {
                var row = new game.LeaderboardRow(_this.game, _this);
                row.dark = (num % 2 === 0);
                return row;
            });
        };
        Leaderboard.prototype.resize = function (width, height) {
            this.title.left = 5;
            this.title.top = 0;
            this.subtitle.right = width - 5;
            this.subtitle.bottom = this.title.bottom;
            this.separator.width = width;
            this.separator.centerX = width / 2;
            this.separator.centerY = this.title.bottom + 14;
            this.alignRows(width);
        };
        Leaderboard.prototype.alignRows = function (width) {
            this.rows.forEach(function (entry, index) {
                entry.resize(width, Leaderboard.ENTRY_HEIGHT * 0.9);
                entry.centerX = width / 2;
                entry.top = index * Leaderboard.ENTRY_HEIGHT;
            });
            this.rowsGroup.centerX = this.separator.centerX;
            this.rowsGroup.top = this.separator.centerY + 20;
        };
        Leaderboard.prototype.setData = function (entriesData) {
            // this.resetRows();
            var width = this.rows[0].width;
            this.rowsGroup.destroy(true, false);
            this.rows = null;
            this.addRows(entriesData.length);
            this.alignRows(width);
            this.updateRowsData(entriesData);
        };
        Leaderboard.prototype.resetRows = function () {
            this.rows.forEach(function (row, index) {
                row.setEmpty();
                row.selected = false;
            });
        };
        Leaderboard.prototype.updateRowsData = function (entriesData) {
            this.rows.forEach(function (entry, index) {
                var data = entriesData[index];
                if (data) {
                    entry.setData(entriesData[index]);
                }
            });
        };
        Leaderboard.prototype.updateAvatars = function () {
            this.rows.forEach(function (row) {
                row.updateAvatar();
            });
        };
        Leaderboard.prototype.setSelected = function (playerID) {
            this.rows.forEach(function (row) {
                if (row.getPlayerID() === playerID) {
                    row.selected = true;
                }
            });
        };
        Leaderboard.prototype.reset = function () {
            var subtitle = this.game.texts.texts["leaderboard"]["all_players"];
            this.updateSubtitle(subtitle);
            this.resetRows();
        };
        Leaderboard.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        Leaderboard.ENTRY_HEIGHT = 90;
        return Leaderboard;
    }(Phaser.Group));
    game.Leaderboard = Leaderboard;
})(game || (game = {}));
var game;
(function (game_6) {
    var LoadingSpinner = /** @class */ (function (_super) {
        __extends(LoadingSpinner, _super);
        function LoadingSpinner(game, texture, frame) {
            var _this = _super.call(this, game, 0, 0, texture, frame) || this;
            _this.anchor.set(0.5, 0.5);
            _this.visible = false;
            return _this;
        }
        LoadingSpinner.prototype.show = function (delay) {
            var _this = this;
            if (delay === void 0) { delay = 0; }
            this.doReset();
            this.game.add.tween(this).from({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.scale).from({ x: 0.8, y: 0.8 }, 400, Phaser.Easing.Back.Out, true, delay)
                .onComplete.addOnce(function () {
                _this.startAnimation();
            });
        };
        LoadingSpinner.prototype.doReset = function () {
            this.stopAnimation();
            this.visible = true;
            this.scale.set(1);
            this.angle = 0;
        };
        LoadingSpinner.prototype.startAnimation = function () {
            var scaleTween = this.game.add.tween(this.scale).to({ x: 0.9, y: 0.9 }, 400, Phaser.Easing.Sinusoidal.InOut, false, 0, -1, true);
            scaleTween.repeatDelay(300);
            scaleTween.start();
            var rotateTween = this.game.add.tween(this).to({ angle: 360 }, 800, Phaser.Easing.Sinusoidal.InOut, false, 0, -1);
            rotateTween.repeatDelay(300);
            rotateTween.start();
        };
        LoadingSpinner.prototype.stopAnimation = function () {
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this.scale);
        };
        LoadingSpinner.prototype.hide = function () {
            var _this = this;
            this.stopAnimation();
            this.game.add.tween(this.scale).to({ x: 1.1, y: 1.1 }, 400, Phaser.Easing.Back.In, true);
            this.game.add.tween(this).to({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, 200)
                .onComplete.addOnce(function () {
                _this.visible = false;
            });
        };
        LoadingSpinner.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true);
        };
        return LoadingSpinner;
    }(Phaser.Image));
    game_6.LoadingSpinner = LoadingSpinner;
})(game || (game = {}));
var game;
(function (game) {
    var LoadingOverlay = /** @class */ (function (_super) {
        __extends(LoadingOverlay, _super);
        function LoadingOverlay(_game, parent) {
            var _this = _super.call(this, _game, parent, "loading_overlay") || this;
            _this.addBack();
            _this.addSpinner();
            return _this;
        }
        LoadingOverlay.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "leaderboard", "white_rect0000", this);
            this.back.tint = 0xFFF3E0;
        };
        LoadingOverlay.prototype.addSpinner = function () {
            this.spinner = new game.LoadingSpinner(this.game, "leaderboard", "Loading_Icon0000");
            this.spinner.tint = 0xEB9000;
            this.add(this.spinner);
        };
        LoadingOverlay.prototype.resize = function (width, height) {
            this.back.width = width;
            this.back.height = height;
            this.spinner.centerX = this.back.centerX;
            this.spinner.centerY = this.back.centerY;
        };
        LoadingOverlay.prototype.show = function () {
            this.game.tweens.removeFrom(this);
            this.visible = true;
            this.alpha = 1;
            this.spinner.show(230);
        };
        LoadingOverlay.prototype.hide = function () {
            var _this = this;
            this.game.add.tween(this).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.visible = false;
            });
        };
        LoadingOverlay.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return LoadingOverlay;
    }(Phaser.Group));
    game.LoadingOverlay = LoadingOverlay;
})(game || (game = {}));
var game;
(function (game) {
    var LeaderboardScrollHandler = /** @class */ (function () {
        function LeaderboardScrollHandler(_game, leaderboardScreen) {
            this.inputDown = false;
            this.enabled = false;
            this.maxOverscrollDistance = 300;
            this.game = _game;
            this.leaderboardScreen = leaderboardScreen;
            this.leaderboardScreen.back.events.onInputDown.add(this.onInputDown, this);
            this.leaderboardScreen.back.events.onInputUp.add(this.onInputUp, this);
            this.scrollbar = this.leaderboardScreen.scrollbar;
            this.updateOverscrollDistance();
            this.game.input.mouse.mouseWheelCallback = this.onMouseWheel.bind(this);
        }
        LeaderboardScrollHandler.prototype.onInputDown = function () {
            if (this.enabled === false) {
                return;
            }
            this.inputDown = true;
            this.lastPointerPosition = this.game.input.activePointer.position.clone();
            this.showScrollbar();
        };
        LeaderboardScrollHandler.prototype.showScrollbar = function () {
            this.game.tweens.removeFrom(this.leaderboardScreen.scrollbar);
            this.game.add.tween(this.leaderboardScreen.scrollbar).to({ alpha: 0.66 }, 200, Phaser.Easing.Cubic.Out, true);
            this.game.time.events.removeBy(this.hideScrollbar, this);
            this.game.time.events.add(1000, this.hideScrollbar, this);
        };
        LeaderboardScrollHandler.prototype.hideScrollbar = function () {
            if (this.inputDown) {
                return;
            }
            this.game.tweens.removeFrom(this.leaderboardScreen.scrollbar);
            this.game.add.tween(this.leaderboardScreen.scrollbar).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true, 500);
        };
        LeaderboardScrollHandler.prototype.onInputUp = function () {
            if (this.enabled === false) {
                return;
            }
            this.inputDown = false;
            this.alignAfterScroll();
            this.hideScrollbar();
        };
        LeaderboardScrollHandler.prototype.alignAfterScroll = function () {
            var currentY = this.leaderboardScreen.leaderboards.y;
            var top = this.getTopLimit();
            var bottom = this.getBottomLimit();
            if (currentY > bottom) {
                this.alignWithTween(bottom);
            }
            else if (currentY < top) {
                this.alignWithTween(top);
            }
        };
        LeaderboardScrollHandler.prototype.getTopLimit = function () {
            return this.leaderboardScreen.leaderboardsBounds.y + this.leaderboardScreen.leaderboardsBounds.height - this.leaderboardScreen.leaderboards.height - 10;
        };
        LeaderboardScrollHandler.prototype.getBottomLimit = function () {
            return this.leaderboardScreen.leaderboardsBounds.y;
        };
        LeaderboardScrollHandler.prototype.alignWithTween = function (targetY) {
            var _this = this;
            this.game.tweens.removeFrom(this.leaderboardScreen.leaderboards);
            this.game.add.tween(this.leaderboardScreen.leaderboards).to({ y: targetY }, 400, Phaser.Easing.Cubic.Out, true)
                .onUpdateCallback(function () {
                _this.updateScrollbarSize();
                _this.updateScrollbarPosition();
            });
        };
        LeaderboardScrollHandler.prototype.onMouseWheel = function (event) {
            if (this.enabled === false) {
                return;
            }
            var leaderboards = this.leaderboardScreen.leaderboards;
            var dy = (game.Leaderboard.ENTRY_HEIGHT / 2) * Phaser.Math.sign(event.deltaY);
            leaderboards.y = Phaser.Math.clamp(leaderboards.y - dy, this.getTopLimit(), this.getBottomLimit());
            this.updateScrollbarPosition();
            this.showScrollbar();
        };
        LeaderboardScrollHandler.prototype.update = function () {
            if (this.enabled && this.inputDown) {
                this.updateScroll();
                this.updateScrollbarSize();
                this.updateScrollbarPosition();
            }
        };
        LeaderboardScrollHandler.prototype.updateScroll = function () {
            var currentPosition = this.game.input.activePointer.position;
            var dy = currentPosition.y - this.lastPointerPosition.y;
            this.scrollBy(dy);
            currentPosition.clone(this.lastPointerPosition);
        };
        LeaderboardScrollHandler.prototype.scrollBy = function (dy) {
            var leaderboards = this.leaderboardScreen.leaderboards;
            var newY = leaderboards.y + dy;
            var topDistance = this.getTopLimit() - newY;
            var bottomDistance = newY - this.getBottomLimit();
            var kMax = 1.5;
            var k = kMax;
            if (topDistance > 0 || bottomDistance > 0) {
                var maxDistance = Math.max(topDistance, bottomDistance);
                k = Phaser.Math.mapLinear(maxDistance, 0, this.maxOverscrollDistance, kMax, 0);
            }
            leaderboards.y += dy * k;
        };
        LeaderboardScrollHandler.prototype.updateScrollbarPosition = function () {
            var bounds = this.leaderboardScreen.leaderboardsBounds;
            var leaderboards = this.leaderboardScreen.leaderboards;
            var dy = bounds.y - leaderboards.y;
            var absDY = Math.max(0, dy);
            var max = leaderboards.height - bounds.height;
            var percent = Phaser.Math.clamp(absDY / max, 0, 1);
            var offset = this.leaderboardScreen.scrollbar.height / 2 + 5;
            var top = bounds.top + offset;
            var bottom = bounds.top + bounds.height - offset;
            this.leaderboardScreen.scrollbar.centerY = top + (bottom - top) * percent;
        };
        LeaderboardScrollHandler.prototype.updateScrollbarSize = function () {
            var y = this.leaderboardScreen.leaderboards.y;
            var topDistance = this.getTopLimit() - y;
            var bottomDistance = y - this.getBottomLimit();
            var kMax = 1;
            var k = 1;
            if (topDistance > 0 || bottomDistance > 0) {
                var maxDistance = Math.max(topDistance, bottomDistance);
                k = Phaser.Math.mapLinear(maxDistance, 0, this.maxOverscrollDistance, kMax, 0.5);
            }
            this.scrollbar.height = this.scrollbar.originalHeight * k;
        };
        LeaderboardScrollHandler.prototype.enable = function () {
            this.enabled = true;
        };
        LeaderboardScrollHandler.prototype.disable = function () {
            this.enabled = false;
        };
        LeaderboardScrollHandler.prototype.resize = function () {
            this.updateOverscrollDistance();
        };
        LeaderboardScrollHandler.prototype.updateOverscrollDistance = function () {
            this.maxOverscrollDistance = this.leaderboardScreen.leaderboardsBounds.height * 0.33;
        };
        LeaderboardScrollHandler.prototype.destroy = function () {
            this.game.input.mouse.mouseWheelCallback = null;
        };
        return LeaderboardScrollHandler;
    }());
    game.LeaderboardScrollHandler = LeaderboardScrollHandler;
})(game || (game = {}));
var game;
(function (game) {
    var LoginPopup = /** @class */ (function (_super) {
        __extends(LoginPopup, _super);
        function LoginPopup(_game, parent) {
            var _this = _super.call(this, _game, parent, "exit_confirm_screen") || this;
            _this.onNameEnter = new Phaser.Signal();
            _this.addBackdrop();
            _this.addBack();
            _this.addTitle();
            _this.addSubtitle();
            _this.addButtons();
            _this.alignSubtitle();
            return _this;
        }
        LoginPopup.prototype.addBackdrop = function () {
            this.backdrop = this.game.add.image(0, 0, "interface", "white_rect0000", this);
            this.backdrop.tint = 0x1A237E;
            this.backdrop.alpha = 0.5;
            this.backdrop.inputEnabled = true;
        };
        LoginPopup.prototype.addBack = function () {
            this.window = this.game.add.group(this, "popup");
            this.windowBack = this.game.add.image(0, 0, "interface", "Modal_Back0000", this.window);
            this.windowBack.anchor.set(0.5, 0.5);
        };
        LoginPopup.prototype.addTitle = function () {
            var content = this.game.texts.texts.quit_popup_title;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 44,
                fill: "#FF9933",
            };
            this.title = this.game.add.text(0, 0, content, style, this.window);
            this.title.anchor.set(0.5, 0.5);
            this.title.centerX = this.windowBack.centerX;
            this.title.top = this.windowBack.top + 25;
            this.title.kill();
        };
        LoginPopup.prototype.addSubtitle = function () {
            var content = this.game.texts.texts.leaderboard.login;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.NORMAL,
                fontSize: 32,
                fill: "#FF9933",
            };
            this.subtitle = this.game.add.text(0, 0, content, style, this.window);
            this.subtitle.anchor.set(0.5, 0.5);
            this.subtitle.wordWrap = true;
            this.subtitle.wordWrapWidth = this.windowBack.width * 0.8;
            this.subtitle.lineSpacing = -6;
            this.subtitle.align = "center";
        };
        LoginPopup.prototype.alignSubtitle = function () {
            var top = this.windowBack.top;
            var bottom = this.yesButton.top;
            var height = bottom - top;
            this.subtitle.centerX = this.windowBack.centerX;
            this.subtitle.y = top + height / 2 + 4;
        };
        LoginPopup.prototype.addButtons = function () {
            var dx = 90 * game.Config.ASSETS_SCALE;
            var y = 160 * game.Config.ASSETS_SCALE;
            this.noButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_No0000", this.window);
            this.noButton.x = this.windowBack.centerX - dx;
            this.noButton.top = this.windowBack.top + y;
            this.noButton.callback.add(this.onNoButtonClick, this);
            this.yesButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_Yes0000", this.window);
            this.yesButton.x = this.windowBack.centerX + dx;
            this.yesButton.top = this.windowBack.top + y;
            this.yesButton.callback.add(this.onYesButtonClick, this);
            this.buttons = [this.noButton, this.yesButton];
            this.alignButtons();
        };
        LoginPopup.prototype.alignButtons = function () {
            var top = this.windowBack.bottom - 114;
            var bottom = this.windowBack.bottom;
            var height = bottom - top;
            this.buttons.forEach(function (button, index) {
                button.y = top + height / 2;
            });
        };
        LoginPopup.prototype.onNoButtonClick = function () {
            this.hide();
        };
        LoginPopup.prototype.onYesButtonClick = function () {
            this.promptName();
        };
        LoginPopup.prototype.promptName = function () {
            var message = this.game.texts.texts.leaderboard.name_prompt;
            var name = window.prompt(message);
            if (name === null) { // user press Cancel
                return;
            }
            var trimmed = _.trim(name);
            if (trimmed.length <= 2) {
                this.promptName();
            }
            else {
                this.onNameEnter.dispatch(trimmed);
            }
        };
        LoginPopup.prototype.enableButtons = function () {
            this.buttons.forEach(function (button) {
                button.enabled = true;
            });
        };
        LoginPopup.prototype.disableButtons = function () {
            this.buttons.forEach(function (button) {
                button.enabled = false;
            });
        };
        LoginPopup.prototype.updateContent = function (titleContent, subtitleContent) {
            this.title.text = titleContent;
            this.subtitle.text = subtitleContent;
        };
        LoginPopup.prototype.show = function () {
            this.revive();
            this.enableButtons();
            this.alpha = 1;
            this.game.add.tween(this.backdrop).from({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true);
            var delay = 0;
            this.game.add.tween(this.window).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.window.scale).from({ x: 0.8, y: 0.8 }, 400, Phaser.Easing.Back.Out, true, delay);
        };
        LoginPopup.prototype.hide = function () {
            var _this = this;
            this.game.add.tween(this).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.kill();
            });
        };
        LoginPopup.prototype.resize = function () {
            this.resizeBackdrop();
            this.alignWindow();
        };
        LoginPopup.prototype.resizeBackdrop = function () {
            this.backdrop.width = game.Config.GAME_WIDTH * 1.2;
            this.backdrop.height = game.Config.GAME_HEIGHT * 1.2;
            this.backdrop.centerX = game.Config.HALF_GAME_WIDTH;
            this.backdrop.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        LoginPopup.prototype.alignWindow = function () {
            this.window.centerX = game.Config.HALF_GAME_WIDTH;
            this.window.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        LoginPopup.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return LoginPopup;
    }(Phaser.Group));
    game.LoginPopup = LoginPopup;
})(game || (game = {}));
///<reference path='Leaderboard.ts' />
///<reference path='../../gui/LoadingIndicator.ts' />
///<reference path='LoadingOverlay.ts' />
///<reference path='LeaderboardScrollHandler.ts' />
///<reference path='loginScreen/LoginPopup.ts' />
var game;
(function (game) {
    var LeaderboardScreen = /** @class */ (function (_super) {
        __extends(LeaderboardScreen, _super);
        function LeaderboardScreen() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.useRealData = true;
            _this.isShutdown = false;
            return _this;
        }
        LeaderboardScreen.prototype.init = function (data) {
            this.initData = data;
            this.isShutdown = false;
        };
        LeaderboardScreen.prototype.create = function () {
            this.onShow = new Phaser.Signal();
            this.onHide = new Phaser.Signal();
            this.addBackground();
            this.addTopPanel();
            this.addLeaderboards();
            this.addLeaderboardBounds();
            this.addErrorMessage();
            this.addScrollbar();
            this.addLoadingOverlay();
            this.addLoginPopup();
            this.world.bringToTop(this.topPanel);
            this.world.bringToTop(this.loginPopup);
            this.addKeyboardCallbacks();
            this.addKineticScroll();
            this.resize();
            this.loadingOverlay.show();
            this.loadData();
        };
        LeaderboardScreen.prototype.gotoLastState = function () {
            if (this.initData) {
                this.game.changeState(this.initData.lastState, this.initData.lastStateData);
            }
            else {
                this.game.changeState(game.StateKey.MAIN_MENU, true);
            }
        };
        LeaderboardScreen.prototype.addBackground = function () {
            this.back = this.game.add.image(0, 0, "leaderboard", "white_rect0000");
            this.back.tint = 0xFFF3E0;
            this.back.anchor.set(0.5, 0.5);
            this.back.fixedToCamera = true;
        };
        LeaderboardScreen.prototype.addTopPanel = function () {
            this.topPanel = this.game.add.group(this.world, "top_panel");
            this.topPanel.fixedToCamera = true;
            this.topPanelBack = this.game.add.image(0, 0, "leaderboard", "Leaderboard_TopPanel_Back0000", this.topPanel);
            // this.topPanelBack.tint = 0xff0000
            // this.topPanelBack.alpha = 0.2
            this.addTitle();
            this.backButton = new game.SimpleButton(this.game, 0, 0, "leaderboard", "Button_Back0000", this.topPanel);
            this.backButton.callback.add(this.onBackButtonClick, this);
        };
        LeaderboardScreen.prototype.addTitle = function () {
            var content = this.game.texts.texts.leaderboard.title;
            var textStyle = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 50,
                fill: "#EB9000",
            };
            this.title = this.game.add.text(0, 0, content, textStyle, this.topPanel);
            // this.adjustTitleSize()
        };
        LeaderboardScreen.prototype.adjustTitleSize = function () {
            var maxWidth = this.topPanel.width * 0.7;
            this.title.scale.set(1);
            this.title.scale.set(Math.min(1, maxWidth / this.title.width));
        };
        LeaderboardScreen.prototype.onBackButtonClick = function () {
            this.gotoLastState();
        };
        LeaderboardScreen.prototype.addLeaderboards = function () {
            this.leaderboards = this.game.add.group(this.world, "leaderboards");
            this.leaderboards.kill();
            this.addAroundLeaderboard();
            this.addTopLeaderboard();
        };
        LeaderboardScreen.prototype.addAroundLeaderboard = function () {
            var title = this.game.texts.texts.leaderboard.friends;
            var rowsNum = 11;
            this.aroundLeaderboard = new game.Leaderboard(this.game, this.leaderboards, rowsNum);
            this.aroundLeaderboard.title.setText(title);
            this.aroundLeaderboard.subtitle.visible = false;
        };
        LeaderboardScreen.prototype.addTopLeaderboard = function () {
            var title = this.game.texts.texts.leaderboard.top.replace("#", LeaderboardScreen.TOP_ENTRIES_NUM.toString());
            var subtitle = this.game.texts.texts["leaderboard"]["all_players"];
            this.topLeaderboard = new game.Leaderboard(this.game, this.leaderboards, LeaderboardScreen.TOP_ENTRIES_NUM);
            this.topLeaderboard.title.setText(title);
            this.topLeaderboard.subtitle.visible = false;
        };
        LeaderboardScreen.prototype.addScrollbar = function () {
            this.scrollbar = this.game.add.image(0, 0, "leaderboard", "scrollbar0000");
            this.scrollbar.anchor.set(1, 0.5);
            this.scrollbar.height *= 1.33;
            this.scrollbar.originalHeight = this.scrollbar.height;
            this.scrollbar.tint = 0xEB9000;
            this.scrollbar.fixedToCamera = true;
            this.scrollbar.kill();
        };
        LeaderboardScreen.prototype.addLeaderboardBounds = function () {
            this.leaderboardsBounds = new Phaser.Rectangle(0, 0, game.Config.GAME_WIDTH, 400);
        };
        LeaderboardScreen.prototype.addErrorMessage = function () {
            var content = this.game.texts.texts.leaderboard.error;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.NORMAL,
                fontSize: 44,
                fill: "#EB9000",
                align: "center",
            };
            this.errorMessage = this.game.add.text(0, 0, content, style);
            this.errorMessage.align = "center";
            this.errorMessage.anchor.set(0.5);
            this.errorMessage.wordWrap = true;
            this.errorMessage.wordWrapWidth = game.Config.GAME_WIDTH * 0.8;
            this.errorMessage.x = game.Config.HALF_GAME_WIDTH;
            this.errorMessage.y = game.Config.HALF_GAME_HEIGHT;
            this.errorMessage.kill();
            this.errorMessage.fixedToCamera = true;
        };
        LeaderboardScreen.prototype.addLoadingOverlay = function () {
            this.loadingOverlay = new game.LoadingOverlay(this.game, this.world);
        };
        LeaderboardScreen.prototype.addLoginPopup = function () {
            this.loginPopup = new game.LoginPopup(this.game, this.world);
            this.loginPopup.kill();
        };
        LeaderboardScreen.prototype.addKeyboardCallbacks = function () {
            this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.gotoLastState, this);
            if (game.Main.development) {
                this.game.input.keyboard.addKey(Phaser.Keyboard.R).onDown.add(this.restart, this);
            }
        };
        LeaderboardScreen.prototype.restart = function () {
            this.game.changeState(this.key, this.initData);
        };
        LeaderboardScreen.prototype.addKineticScroll = function () {
            this.game.kineticScrolling.configure({
                kineticMovement: true,
                timeConstantScroll: 325,
                horizontalScroll: false,
                verticalScroll: true,
                horizontalWheel: false,
                verticalWheel: true,
                deltaWheel: 20,
            });
        };
        LeaderboardScreen.prototype.resize = function () {
            this.resizeBackground();
            this.adjustTitleSize();
            this.alignTopPanel();
            this.resizeLeaderboardsBounds();
            this.alignLeaderboards();
            this.alignScrollbar();
            this.resizeLoadingOverlay();
            this.updateWorldBounds();
            this.loginPopup.resize();
        };
        LeaderboardScreen.prototype.updateWorldBounds = function () {
            this.game.world.setBounds(0, 0, game.Config.GAME_WIDTH, this.leaderboards.height + 134);
        };
        LeaderboardScreen.prototype.resizeBackground = function () {
            this.back.width = game.Config.GAME_WIDTH * 1.1;
            this.back.height = game.Config.GAME_HEIGHT * 1.1;
            this.back.cameraOffset.x = game.Config.HALF_GAME_WIDTH;
            this.back.cameraOffset.y = game.Config.HALF_GAME_HEIGHT;
        };
        LeaderboardScreen.prototype.alignTopPanel = function () {
            this.topPanelBack.width = game.Config.GAME_WIDTH + 2;
            this.topPanelBack.height = 120;
            this.backButton.left = this.topPanelBack.centerX - game.Config.HALF_GAME_WIDTH + 25;
            this.backButton.centerY = this.topPanelBack.centerY + 2;
            var left = this.backButton.right;
            var right = this.topPanelBack.right;
            var width = right - left;
            this.title.centerX = left + width / 2;
            this.title.centerY = this.backButton.centerY - 4;
            this.topPanel.top = 0;
            // this.topPanel.centerX = game.Config.HALF_GAME_WIDTH
            // this.topPanel.cameraOffset.x = -game.Config.HALF_GAME_WIDTH
        };
        LeaderboardScreen.prototype.resizeLeaderboardsBounds = function () {
            var sideMargin = 35;
            var width = game.Config.GAME_WIDTH - sideMargin * 2;
            var top = this.topPanel.bottom;
            var bottom = game.Config.GAME_HEIGHT;
            var height = bottom - top;
            this.leaderboardsBounds.width = width;
            this.leaderboardsBounds.height = height;
            this.leaderboardsBounds.centerX = game.Config.HALF_GAME_WIDTH;
            this.leaderboardsBounds.y = top;
        };
        LeaderboardScreen.prototype.alignLeaderboards = function () {
            var width = this.leaderboardsBounds.width;
            var height = this.leaderboardsBounds.height;
            this.aroundLeaderboard.resize(width, height);
            this.aroundLeaderboard.top = 0;
            this.topLeaderboard.resize(width, height);
            this.topLeaderboard.top = this.aroundLeaderboard.bottom + 50;
            this.leaderboards.top = this.leaderboardsBounds.top;
            this.leaderboards.centerX = this.leaderboardsBounds.centerX;
        };
        LeaderboardScreen.prototype.alignScrollbar = function () {
            this.scrollbar.x = game.Config.GAME_WIDTH - 10;
        };
        LeaderboardScreen.prototype.resizeLoadingOverlay = function () {
            this.loadingOverlay.resize(game.Config.GAME_WIDTH, this.leaderboardsBounds.height);
            this.loadingOverlay.top = this.leaderboardsBounds.top;
            this.loadingOverlay.centerX = game.Config.HALF_GAME_WIDTH;
        };
        LeaderboardScreen.prototype.disableButtons = function () {
            this.backButton.enabled = false;
        };
        LeaderboardScreen.prototype.enableButtons = function () {
            this.backButton.enabled = true;
        };
        LeaderboardScreen.prototype.update = function () {
            this.updateScrollBar();
        };
        LeaderboardScreen.prototype.updateScrollBar = function () {
            var offset = this.scrollbar.height / 2;
            var top = this.topPanel.height + offset;
            var bottom = game.Config.GAME_HEIGHT - offset - 14;
            var height = bottom - top;
            var scrollTop = 0;
            var scrollBottom = this.game.world.bounds.height - this.game.camera.height;
            var scrollHeight = scrollBottom - scrollTop;
            var percent = this.game.camera.y / scrollHeight;
            this.scrollbar.cameraOffset.x = game.Config.GAME_WIDTH - 10;
            this.scrollbar.cameraOffset.y = top + height * percent;
        };
        LeaderboardScreen.prototype.loadLeaderboardData = function () {
            var _this = this;
            Promise.all([
                this.game.playfab.getPlayerLeaderboardEntry(),
                this.game.playfab.getAroundPlayerLeaderboard(7),
                this.game.playfab.getTopLeaderboard(LeaderboardScreen.TOP_ENTRIES_NUM),
            ]).then(function (_a) {
                var playerEntry = _a[0], aroundEntries = _a[1], topEntries = _a[2];
                _this.onDataLoaded(playerEntry, aroundEntries, topEntries);
            }).catch(function () {
                _this.showErrorMessage();
            });
        };
        LeaderboardScreen.prototype.onDataLoaded = function (playerEntry, aroundPlayerEntries, topEntries) {
            if (this.isShutdown) {
                return;
            }
            this.leaderboards.visible = true;
            this.updateAroundPlayerLeaderboard(aroundPlayerEntries, playerEntry);
            this.updateTopLeaderboard(topEntries, playerEntry);
            this.leaderboards.cacheAsBitmap = true;
            this.loadingOverlay.hide();
            this.scrollbar.revive();
            this.game.kineticScrolling.start();
            this.updateWorldBounds();
        };
        LeaderboardScreen.prototype.updateAroundPlayerLeaderboard = function (entries, playerEntry) {
            this.aroundLeaderboard.setData(entries);
            this.aroundLeaderboard.visible = true;
            if (playerEntry) {
                this.aroundLeaderboard.setSelected(playerEntry.PlayFabId);
            }
        };
        LeaderboardScreen.prototype.updateTopLeaderboard = function (entries, playerEntry) {
            this.topLeaderboard.setData(entries);
            this.topLeaderboard.top = (this.aroundLeaderboard.visible) ? this.aroundLeaderboard.bottom + 50 : 0;
            if (playerEntry) {
                this.topLeaderboard.setSelected(playerEntry.PlayFabId);
            }
        };
        LeaderboardScreen.prototype.formatNumber = function (value) {
            return value.toLocaleString().split(",").join(" ");
        };
        LeaderboardScreen.prototype.loadAvatars = function (entries) {
            var avatarsData = entries.map(function (entryData) {
                return {
                    key: "avatar_" + entryData.PlayFabId,
                    url: entryData.Profile.AvatarUrl,
                    extraData: entryData.PlayFabId,
                    loaded: false,
                };
            });
            var avatarsLoader = new game.AvatarsLoader(this.game);
            avatarsLoader.autoDestroy = true;
            avatarsLoader.onLoadComplete.addOnce(this.onAvatarsLoaded, this);
            avatarsLoader.load(avatarsData);
        };
        LeaderboardScreen.prototype.onAvatarsLoaded = function (loadedAvatars) {
            if (this.isShutdown) {
                return;
            }
            [this.aroundLeaderboard, this.topLeaderboard]
                .forEach(function (leaderboard) {
                leaderboard.updateAvatars();
            });
            this.updateLeaderboardsCachedImage();
        };
        LeaderboardScreen.prototype.updateLeaderboardsCachedImage = function () {
            if (this.game.renderer.type === Phaser.CANVAS) {
                return;
            }
            this.leaderboards._generateCachedSprite();
        };
        LeaderboardScreen.prototype.loadData = function () {
            var _this = this;
            var isLoggedIn = this.game.playfab.isLoggedIn;
            if (isLoggedIn) {
                this.onLoginComplete();
            }
            else {
                this.game.playfab.login(this.game.store.getPlayerId())
                    .then(this.onLoginComplete.bind(this))
                    .catch(function () {
                    _this.loadingOverlay.hide();
                    _this.showErrorMessage();
                });
            }
        };
        LeaderboardScreen.prototype.onLoginComplete = function () {
            return __awaiter(this, void 0, void 0, function () {
                var playerName;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            playerName = this.game.store.getValue(game.GameStoreKey.PLAYER_NAME);
                            if (!(playerName === "")) return [3 /*break*/, 1];
                            this.loginPopup.noButton.callback.addOnce(this.hide, this);
                            this.loginPopup.onNameEnter.addOnce(this.onNameEnter, this);
                            this.loginPopup.show();
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this.onNameReady(playerName)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        LeaderboardScreen.prototype.onNameEnter = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var truncatedName, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            truncatedName = name.slice(0, 25) // 25 chars is Playfab limitation
                            ;
                            this.loginPopup.hide();
                            this.game.store.saveValue(game.GameStoreKey.PLAYER_NAME, truncatedName);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, this.game.playfab.updatePlayerName(truncatedName)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.onNameReady(truncatedName)];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            this.loadingOverlay.hide();
                            this.showErrorMessage();
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        LeaderboardScreen.prototype.onNameReady = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, this.game.playfab.updatePlayerScore(this.game.store.getNumber(game.GameStoreKey.BEST_ITEM))];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.loadLeaderboardData()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            this.loadingOverlay.hide();
                            this.showErrorMessage();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        LeaderboardScreen.prototype.reset = function () {
            this.enableButtons();
            this.aroundLeaderboard.reset();
            this.topLeaderboard.reset();
            this.leaderboards.visible = false;
        };
        LeaderboardScreen.prototype.hide = function () {
            var _this = this;
            this.game.add.tween(this).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.gotoLastState();
                _this.onHide.dispatch(true);
            });
        };
        LeaderboardScreen.prototype.showErrorMessage = function () {
            this.errorMessage.alpha = 0;
            this.errorMessage.revive();
            this.game.add.tween(this.errorMessage).to({ alpha: 1 }, 150, Phaser.Easing.Cubic.Out, true);
        };
        LeaderboardScreen.prototype.shutdown = function () {
            this.isShutdown = true;
            this.onShow.dispose();
            this.onHide.dispose();
            this.game.kineticScrolling.stop();
        };
        LeaderboardScreen.TOP_ENTRIES_NUM = 30;
        return LeaderboardScreen;
    }(Phaser.State));
    game.LeaderboardScreen = LeaderboardScreen;
})(game || (game = {}));
///<reference path='GameLogo.ts' />
///<reference path='MainMenuCircles.ts' />
///<reference path='credits/CreditsScreen.ts' />
///<reference path='settings/SettingsScreen.ts' />
///<reference path='../leaderboards/LeaderboardScreen.ts' />
var game;
(function (game) {
    var MainMenu = /** @class */ (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainMenu.prototype.init = function (skipStartAnimation) {
            if (skipStartAnimation === void 0) { skipStartAnimation = false; }
            this.skipStartAnimation = skipStartAnimation;
        };
        MainMenu.prototype.create = function () {
            this.addBackground();
            this.addTitle();
            this.addButtons();
            this.addCircles();
            this.addSettingsScreen();
            this.addCreditsScreen();
            this.addKeyboardCallbacks();
            this.resize();
            if (this.skipStartAnimation === false) {
                this.show();
            }
            this.game.texts.onLanguageChange.add(this.onLanguageChange, this);
        };
        MainMenu.prototype.onLanguageChange = function () {
            this.settingsScreen.window.content.onLanguageChange();
            this.creditsScreen.window.content.onLanguageChange();
            this.circles.onLanguageChange();
        };
        MainMenu.prototype.addBackground = function () {
            this.background = new game.GameBackground(this.game, "main_menu", "white_rect_large0000");
        };
        MainMenu.prototype.addTitle = function () {
            this.gameLogo = new game.GameLogo(this.game, this.world);
        };
        MainMenu.prototype.addButtons = function () {
            this.playButton = new game.SimpleButton(this.game, 0, 0, "main_menu", "Button_Play_20000");
            this.playButton.callback.addOnce(this.onPlayButtonClick, this);
            var playButtonBottomMargin = 21;
            this.leaderboardsButton = new game.SimpleButton(this.game, 0, 0, "main_menu", "Button_Stats0000");
            this.leaderboardsButton.top = this.playButton.bottom + playButtonBottomMargin;
            this.leaderboardsButton.left = this.playButton.left;
            this.leaderboardsButton.callback.add(this.onLeaderboardClick, this);
            this.creditsButton = new game.SimpleButton(this.game, 0, 0, "main_menu", "Button_Credits0000");
            this.creditsButton.top = this.playButton.bottom + playButtonBottomMargin;
            this.creditsButton.centerX = this.playButton.centerX;
            this.creditsButton.callback.add(this.onCreditsButtonClick, this);
            this.settingsButton = new game.SimpleButton(this.game, 0, 0, "main_menu", "Button_Settings0000");
            this.settingsButton.right = this.playButton.right;
            this.settingsButton.top = this.playButton.bottom + playButtonBottomMargin;
            this.settingsButton.callback.add(this.onSettingsButtonClick, this);
            this.buttons = [this.playButton, this.leaderboardsButton, this.creditsButton, this.settingsButton];
            this.buttonsGroup = this.game.add.group(this.world, "buttons");
            this.buttonsGroup.addMultiple(this.buttons, true);
        };
        MainMenu.prototype.onPlayButtonClick = function () {
            var _this = this;
            if (this.game.boosters.canBuyAnyBooster()) {
                this.game.changeState("BoostersShop");
            }
            else {
                this.game.poki.commercialBreak("MainMenu:PlayButton")
                    .finally(function () {
                    _this.game.changeState("Level");
                });
            }
        };
        MainMenu.prototype.onLeaderboardClick = function () {
            this.game.changeState(game.StateKey.LEADERBOARDS, {
                lastState: this.key,
                lastStateData: true,
            });
        };
        MainMenu.prototype.onCreditsButtonClick = function () {
            this.creditsScreen.show();
        };
        MainMenu.prototype.onSettingsButtonClick = function () {
            this.settingsScreen.show();
        };
        MainMenu.prototype.addCircles = function () {
            this.circles = new game.MainMenuCircles(this.game, this.world);
        };
        MainMenu.prototype.addSettingsScreen = function () {
            this.settingsScreen = new game.SettingsScreen(this.game, this.world);
            this.settingsScreen.kill();
        };
        MainMenu.prototype.addCreditsScreen = function () {
            this.creditsScreen = new game.CreditsScreen(this.game, this.world);
            this.creditsScreen.kill();
        };
        MainMenu.prototype.addKeyboardCallbacks = function () {
            this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.onEscPressed, this);
            this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(this.onPlayButtonClick, this);
            if (game.Main.development) {
                this.game.input.keyboard.addKey(Phaser.Keyboard.T).onDown.add(this.showTestToast, this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.onPlayButtonClick, this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.R).onDown.add(this.restart, this);
            }
        };
        MainMenu.prototype.showTestToast = function () {
            this.game.toast.show("Some multiline unbelievibly long content. That's just insane, folks!", 0, 4000);
        };
        MainMenu.prototype.onEscPressed = function () {
            if (this.settingsScreen.visible) {
                this.settingsScreen.hide();
                return;
            }
        };
        MainMenu.prototype.restart = function () {
            this.game.changeState("MainMenu");
        };
        MainMenu.prototype.resize = function () {
            this.background.resize();
            this.buttonsGroup.centerX = game.Config.HALF_GAME_WIDTH;
            this.buttonsGroup.centerY = game.Config.HALF_GAME_HEIGHT;
            this.alignLogo();
            this.alignCircles();
            this.settingsScreen.resize();
            this.creditsScreen.resize();
        };
        MainMenu.prototype.alignLogo = function () {
            var top = 0;
            var bottom = this.buttonsGroup.top;
            var height = bottom - top;
            this.gameLogo.centerX = game.Config.HALF_GAME_WIDTH;
            this.gameLogo.centerY = top + height / 2;
            this.gameLogo.originalY = this.gameLogo.y;
        };
        MainMenu.prototype.alignCircles = function () {
            var top = this.buttonsGroup.bottom;
            var bottom = game.Config.GAME_HEIGHT;
            var height = bottom - top;
            this.circles.centerX = game.Config.HALF_GAME_WIDTH;
            this.circles.centerY = top + height / 2 - 20;
        };
        MainMenu.prototype.show = function () {
            this.gameLogo.show(200);
            this.showButtons(500);
            this.circles.show(600);
            this.game.time.events.add(2200, this.animatePlayButton, this);
        };
        MainMenu.prototype.showButtons = function (initialDelay) {
            var _this = this;
            this.buttons.forEach(function (button, index) {
                var delay = initialDelay + index * 100;
                _this.game.add.tween(button.scale).from({ x: 0.66, y: 0.66 }, 400, Phaser.Easing.Back.Out, true, delay);
                _this.game.add.tween(button).from({ alpha: 0 }, 200, Phaser.Easing.Quadratic.Out, true, delay);
            });
        };
        MainMenu.prototype.animatePlayButton = function () {
            var _this = this;
            var targetScale = 1.07;
            this.game.add.tween(this.playButton.scale).to({
                x: targetScale,
                y: targetScale,
            }, 300, Phaser.Easing.Sinusoidal.InOut, true, 0, 2, true)
                .onComplete.addOnce(function () {
                _this.game.time.events.add(3000, _this.animatePlayButton, _this);
            });
        };
        MainMenu.prototype.shutdown = function () {
            this.buttons = null;
            this.game.texts.onLanguageChange.remove(this.onLanguageChange, this);
        };
        return MainMenu;
    }(Phaser.State));
    game.MainMenu = MainMenu;
})(game || (game = {}));
var game;
(function (game) {
    var ComplexButton = /** @class */ (function (_super) {
        __extends(ComplexButton, _super);
        function ComplexButton(_game, parent, imageKey, imageFrame) {
            var _this = _super.call(this, _game, parent) || this;
            _this._enabled = true;
            _this.callbackDelay = 0;
            _this.soundKey = "tap";
            _this.userData = {};
            _this.name = "button_" + imageKey + ", " + imageFrame;
            _this._callback = new Phaser.Signal();
            _this.addBack(imageKey, imageFrame);
            return _this;
        }
        Object.defineProperty(ComplexButton.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                this._enabled = value;
                this.back.input.enabled = this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        ComplexButton.prototype.addBack = function (imageKey, imageFrame) {
            this.back = this.game.add.image(0, 0, imageKey, imageFrame, this);
            this.back.anchor.set(0.5, 0.5);
            this.back.inputEnabled = true;
            this.back.events.onInputDown.add(this.onInputDown, this);
            this.back.events.onInputUp.add(this.onInputUp, this);
            this.back.name = imageFrame;
            if (this.game.device.desktop) {
                this.back.input.useHandCursor = true;
            }
        };
        ComplexButton.prototype.onInputDown = function () {
            if (this.game.cache.checkSoundKey(this.soundKey)) {
                this.game.sound.play(this.soundKey);
            }
            this.executeCallback();
            this.originalScale = this.scale.clone();
            this.game.tweens.removeFrom(this.scale);
            this.game.add.tween(this.scale).to({
                x: this.scale.x * 0.9,
                y: this.scale.y * 0.9,
            }, 100, Phaser.Easing.Cubic.Out, true);
        };
        ComplexButton.prototype.onInputUp = function (back, pointer) {
            this.game.tweens.removeFrom(this.scale);
            this.game.add.tween(this.scale).to({
                x: this.originalScale.x,
                y: this.originalScale.y,
            }, 150, Phaser.Easing.Cubic.Out, true);
        };
        ComplexButton.prototype.executeCallback = function () {
            if (this.callbackDelay > 0) {
                this.game.time.events.add(this.callbackDelay, this._callback.dispatch, this._callback, this);
            }
            else {
                this._callback.dispatch(this);
            }
        };
        ComplexButton.prototype.addIcon = function (texture, frame, position) {
            if (position === void 0) { position = Phaser.CENTER; }
            this.icon = this.game.add.image(0, 0, texture, frame, this);
            this.icon.anchor.set(0.5, 0.5);
            this.icon.alignIn(this.back, position);
        };
        ComplexButton.prototype.addBmpText = function (content, font, fontSize, offsetX, offsetY) {
            if (offsetX === void 0) { offsetX = 0; }
            if (offsetY === void 0) { offsetY = 0; }
            this.bmpText = this.game.add.bitmapText(0, 0, font, content, fontSize, this);
            this.bmpText.align = "center";
            this.bmpText.anchor.set(0.5, 0.5);
            this.bmpText.centerX = this.back.centerX + offsetX;
            this.bmpText.centerY = this.back.centerY + offsetY;
            return this.bmpText;
        };
        ComplexButton.prototype.addText = function (content, style) {
            this.text = this.game.add.text(0, 0, content, style, this);
            this.text.anchor.set(0.5, 0.5);
            this.text.alignIn(this.back, Phaser.CENTER);
            return this.text;
        };
        ComplexButton.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this._callback.dispose();
            this._callback = null;
            this.userData = null;
        };
        Object.defineProperty(ComplexButton.prototype, "callback", {
            get: function () {
                return this._callback;
            },
            enumerable: false,
            configurable: true
        });
        return ComplexButton;
    }(Phaser.Group));
    game.ComplexButton = ComplexButton;
})(game || (game = {}));
///<reference path='../../../gui/buttons/ComplexButton.ts' />
var game;
(function (game) {
    var AddCoinsButton = /** @class */ (function (_super) {
        __extends(AddCoinsButton, _super);
        function AddCoinsButton(_game, parent) {
            var _this = _super.call(this, _game, parent, "boosters_shop", "Button_Add_Coins0000") || this;
            _this.addWhite();
            return _this;
        }
        AddCoinsButton.prototype.addWhite = function () {
            this.white = this.game.add.image(0, 0, "boosters_shop", "Button_Add_Coins_White0000", this);
            this.white.anchor.set(0.5, 0.5);
            this.white.scale.set(0.995);
            this.white.centerX = this.back.centerX;
            this.white.centerY = this.back.centerY;
            this.white.visible = false;
        };
        AddCoinsButton.prototype.highlight = function () {
            var _this = this;
            var duration = 330;
            this.white.alpha = 0;
            this.white.visible = true;
            this.game.tweens.removeFrom(this.white);
            this.game.add.tween(this.white).to({ alpha: 0.66 }, duration, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true)
                .onComplete.addOnce(function () {
                _this.white.visible = false;
            });
            var targetScale = 1.1;
            this.scale.set(1);
            this.game.tweens.removeFrom(this.scale);
            this.game.add.tween(this.scale).to({ x: targetScale, y: targetScale }, duration, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
        };
        return AddCoinsButton;
    }(game.ComplexButton));
    game.AddCoinsButton = AddCoinsButton;
})(game || (game = {}));
///<reference path='AddCoinsButton.ts' />
var game;
(function (game) {
    var ShopCoinsLabel = /** @class */ (function (_super) {
        __extends(ShopCoinsLabel, _super);
        function ShopCoinsLabel(_game, parent) {
            var _this = _super.call(this, _game, parent, "coins_label") || this;
            _this.coinsNum = 0;
            _this.textInitialX = 0;
            _this.addBack();
            _this.addCoinIcon();
            _this.addGetCoinsButton();
            _this.addText();
            return _this;
        }
        ShopCoinsLabel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "boosters_shop", "Coins_Label_Back0000", this);
            this.back.anchor.set(0.5, 0.5);
            this.back.scale.x = 0.9;
        };
        ShopCoinsLabel.prototype.addCoinIcon = function () {
            this.coinIcon = this.game.add.image(0, 0, "boosters_shop", "Coins_Label_Coin0000", this);
            this.coinIcon.anchor.set(0.5, 0.5);
            this.coinIcon.left = this.back.left + 18;
            this.coinIcon.centerY = this.back.centerY;
        };
        ShopCoinsLabel.prototype.addGetCoinsButton = function () {
            this.getCoinsButton = new game.AddCoinsButton(this.game, this);
            this.getCoinsButton.right = this.back.right;
            this.getCoinsButton.centerY = this.back.centerY;
            this.getCoinsButton.visible = false;
        };
        ShopCoinsLabel.prototype.addText = function () {
            this.text = this.game.add.bitmapText(0, 0, game.GameFonts.BOOSTERS_SHOP_BARIOL_BOLD, "0000", 42, this);
            this.text.anchor.set(1, 0.5);
            this.text.x = this.back.right - 20;
            this.text.centerY = this.coinIcon.centerY + 1;
            this.textInitialX = this.text.x;
        };
        ShopCoinsLabel.prototype.updateCount = function (newCoinsNum, tweenX, tweenNumber) {
            var _this = this;
            if (tweenX === void 0) { tweenX = false; }
            if (tweenNumber === void 0) { tweenNumber = true; }
            if (this.coinsNum !== newCoinsNum) {
                this.game.tweens.removeFrom(this);
                this.text.setText(newCoinsNum.toString());
                if (tweenX) {
                    this.text.x = this.textInitialX;
                    this.game.tweens.removeFrom(this.text);
                    this.game.add.tween(this.text).to({ x: "-10" }, 220, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
                }
                if (tweenNumber) {
                    var tween = this.game.add.tween(this).to({ coinsNum: newCoinsNum }, 1333, Phaser.Easing.Exponential.Out);
                    tween.onStart.addOnce(function () {
                        _this.game.audio.playSound("score_count_2", 0.44);
                    });
                    tween.onComplete.addOnce(function () {
                        _this.game.add.tween(_this.text.scale).to({ x: 1.2, y: 1.2 }, 216, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
                    });
                    tween.onUpdateCallback(function () {
                        _this.text.setText(_this.coinsNum.toFixed(0));
                    });
                    tween.start();
                }
                else {
                    this.coinsNum = newCoinsNum;
                }
            }
        };
        ShopCoinsLabel.prototype.shake = function () {
            this.game.tweens.removeFrom(this.text);
            this.text.x = this.textInitialX;
            this.game.add.tween(this.text).to({ x: "-10" }, 80, Phaser.Easing.Sinusoidal.InOut, true, 0, 3, true);
        };
        ShopCoinsLabel.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return ShopCoinsLabel;
    }(Phaser.Group));
    game.ShopCoinsLabel = ShopCoinsLabel;
})(game || (game = {}));
///<reference path='ShopCoinsLabel.ts' />
var game;
(function (game) {
    var BoostersShopTopPanel = /** @class */ (function (_super) {
        __extends(BoostersShopTopPanel, _super);
        function BoostersShopTopPanel(_game, parent) {
            var _this = _super.call(this, _game, parent, "top_panel") || this;
            _this.addBack();
            _this.addBackButton();
            _this.addSoundButton();
            _this.addCoinsCounter();
            return _this;
        }
        BoostersShopTopPanel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "boosters_shop", "Top_Panel_Back0000", this);
            this.back.inputEnabled = true;
        };
        BoostersShopTopPanel.prototype.addBackButton = function () {
            this.backButton = new game.SimpleButton(this.game, 0, 0, "boosters_shop", "Button_Main_Menu0000", this);
        };
        BoostersShopTopPanel.prototype.addSoundButton = function () {
            this.soundButton = new game.ToggleButton(this.game, 0, 0, "interface", "Button_Sound_On0000", "Button_Sound_Off0000", this);
            this.soundButton.scale.set(0.7);
            this.soundButton.areTweensEnabled = false;
            this.soundButton.buttonState = (this.game.sound.mute) ? game.ToggleButtonState.STATE_2 : game.ToggleButtonState.STATE_1;
            this.soundButton.callback.add(this.onSoundButtonClick, this);
        };
        BoostersShopTopPanel.prototype.onSoundButtonClick = function () {
            this.game.audio.soundMute = !this.game.audio.soundMute;
        };
        BoostersShopTopPanel.prototype.addCoinsCounter = function () {
            var coinsNum = this.game.store.getCoins();
            this.coinsLabel = new game.ShopCoinsLabel(this.game, this);
            this.coinsLabel.updateCount(coinsNum, false, false);
        };
        BoostersShopTopPanel.prototype.show = function (initialDelay) {
            this.game.add.tween(this).from({ y: "-60", alpha: 0 }, 400, Phaser.Easing.Cubic.Out, true, initialDelay);
        };
        BoostersShopTopPanel.prototype.resize = function (width) {
            this.back.width = width;
            this.alignButtons();
            this.alignCoinsLabel();
        };
        BoostersShopTopPanel.prototype.alignButtons = function () {
            var sideMargin = 20;
            var buttonsY = this.back.centerY + 2;
            this.backButton.left = this.back.left + sideMargin;
            this.backButton.centerY = buttonsY;
            this.soundButton.right = this.back.right - sideMargin - 12;
            this.soundButton.centerY = buttonsY;
        };
        BoostersShopTopPanel.prototype.alignCoinsLabel = function () {
            this.coinsLabel.centerX = this.back.centerX;
            this.coinsLabel.centerY = this.back.centerY;
        };
        BoostersShopTopPanel.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return BoostersShopTopPanel;
    }(Phaser.Group));
    game.BoostersShopTopPanel = BoostersShopTopPanel;
})(game || (game = {}));
///<reference path='../../../gui/buttons/ComplexButton.ts' />
var game;
(function (game) {
    var FreeCoinsButton = /** @class */ (function (_super) {
        __extends(FreeCoinsButton, _super);
        function FreeCoinsButton(_game, parent) {
            var _this = _super.call(this, _game, parent, "boosters_shop", "Button_Free_Coins0000") || this;
            _this.addCustomText();
            _this.addWhite();
            return _this;
        }
        FreeCoinsButton.prototype.addCustomText = function () {
            var template = this.game.texts.texts.coins_1000;
            var coinsNum = 1000;
            var content = template.replace("#", coinsNum.toString());
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 31,
                fill: "#ffffff",
                align: "center",
            };
            this.addText(content, style);
            this.text.x += 56;
            this.text.y -= 5;
            this.text.lineSpacing = -10;
        };
        FreeCoinsButton.prototype.addWhite = function () {
            this.white = this.game.add.image(0, 0, "boosters_shop", "Button_Highlight0000", this);
            this.white.centerX = this.back.centerX;
            this.white.top = this.back.top;
            this.white.visible = false;
        };
        FreeCoinsButton.prototype.highlight = function () {
            this.animateWhite();
            this.scale.set(1);
            this.game.tweens.removeFrom(this.scale);
            this.game.add.tween(this.scale).to({
                x: 1.15,
                y: 1.15,
            }, 330, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
        };
        FreeCoinsButton.prototype.animateWhite = function () {
            var _this = this;
            this.white.visible = true;
            this.white.alpha = 0;
            this.game.tweens.removeFrom(this.white);
            this.game.add.tween(this.white).to({ alpha: 0.66 }, 330, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true)
                .onComplete.addOnce(function () {
                _this.white.visible = false;
            });
        };
        FreeCoinsButton.prototype.disable = function () {
            this.alpha = 0.33;
            this.enabled = false;
        };
        return FreeCoinsButton;
    }(game.ComplexButton));
    game.FreeCoinsButton = FreeCoinsButton;
})(game || (game = {}));
///<reference path='FreeCoinsButton.ts' />
var game;
(function (game) {
    var BoostersShopBottomPanel = /** @class */ (function (_super) {
        __extends(BoostersShopBottomPanel, _super);
        function BoostersShopBottomPanel(_game, parent) {
            var _this = _super.call(this, _game, parent, "bottom_panel") || this;
            _this.addBack();
            _this.addFreeCoinsButton();
            _this.addPlayButton();
            return _this;
        }
        BoostersShopBottomPanel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "boosters_shop", "Bottom_Panel_Back0000", this);
            this.back.inputEnabled = true;
        };
        BoostersShopBottomPanel.prototype.addFreeCoinsButton = function () {
            this.freeCoinsButton = new game.FreeCoinsButton(this.game, this);
            this.freeCoinsButton.name = "1000_coins_button";
        };
        BoostersShopBottomPanel.prototype.addPlayButton = function () {
            this.playButton = new game.SimpleButton(this.game, 0, 0, "boosters_shop", "Button_Play0000", this);
        };
        BoostersShopBottomPanel.prototype.resize = function (width) {
            this.back.width = width;
            this.alignButtons();
        };
        BoostersShopBottomPanel.prototype.alignButtons = function () {
            var dx = game.Config.GAME_WIDTH * 0.24;
            var buttonsY = this.back.centerY + 2;
            this.freeCoinsButton.centerX = this.back.centerX - dx;
            this.freeCoinsButton.centerY = buttonsY;
            this.playButton.centerX = this.back.centerX + dx;
            this.playButton.centerY = buttonsY;
        };
        BoostersShopBottomPanel.prototype.show = function (initialDelay) {
            this.game.add.tween(this).from({ y: "+60", alpha: 0 }, 400, Phaser.Easing.Cubic.Out, true, initialDelay);
        };
        BoostersShopBottomPanel.prototype.getHeight = function () {
            return this.back.height;
        };
        BoostersShopBottomPanel.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return BoostersShopBottomPanel;
    }(Phaser.Group));
    game.BoostersShopBottomPanel = BoostersShopBottomPanel;
})(game || (game = {}));
var game;
(function (game) {
    var BoosterCountLabel = /** @class */ (function (_super) {
        __extends(BoosterCountLabel, _super);
        function BoosterCountLabel(_game, parent) {
            var _this = _super.call(this, _game, parent, "booster_num_label") || this;
            _this.addBack();
            _this.addText();
            return _this;
        }
        BoosterCountLabel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "boosters_shop", "Booster_Count_Label_Back0000", this);
            this.back.anchor.set(0.5, 0.5);
        };
        BoosterCountLabel.prototype.addText = function () {
            this.text = this.game.add.bitmapText(0, 0, game.GameFonts.BOOSTERS_SHOP_BARIOL_BOLD, "x0", 40, this);
            this.text.anchor.set(0.5, 0.5);
        };
        BoosterCountLabel.prototype.updateContent = function (value, tween) {
            if (tween === void 0) { tween = true; }
            this.text.setText("x" + value.toString());
            if (tween) {
                this.text.y = 0;
                this.game.tweens.removeFrom(this.text);
                this.game.add.tween(this.text).to({ y: "-6" }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
                this.back.scale.x = 1;
                this.game.tweens.removeFrom(this.back.scale);
                this.game.add.tween(this.back.scale).to({ x: 1.4 }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
            }
        };
        BoosterCountLabel.prototype.setBackgroundColor = function (color) {
            this.back.tint = color;
        };
        BoosterCountLabel.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return BoosterCountLabel;
    }(Phaser.Group));
    game.BoosterCountLabel = BoosterCountLabel;
})(game || (game = {}));
///<reference path='BoosterCountLabel.ts' />
var game;
(function (game) {
    var ShopCard = /** @class */ (function (_super) {
        __extends(ShopCard, _super);
        function ShopCard(_game, parent, config) {
            var _this = _super.call(this, _game, parent, "item_card_" + config) || this;
            _this.shadowOffset = 6;
            _this._config = config;
            _this.addShadow();
            _this.addBack();
            _this.addWhiteStripe();
            _this.addIcon();
            _this.addTitle();
            _this.addCountLabel();
            _this.addBuyButton();
            _this.addDescription();
            _this.addInfoButton();
            _this.addWhite();
            _this.initMainContent();
            return _this;
        }
        ShopCard.prototype.addShadow = function () {
            this.shadow = this.game.add.image(0, this.shadowOffset, "boosters_shop", "Card_Shadow0000", this);
            this.shadow.anchor.set(0.5, 0.5);
        };
        ShopCard.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "boosters_shop", "Card_Back0000", this);
            this.back.anchor.set(0.5, 0.5);
            this.back.tint = 0x35AFDB;
        };
        ShopCard.prototype.addWhiteStripe = function () {
            this.whiteStripe = this.game.add.image(0, 0, "boosters_shop", "White_Stripe0000", this);
            this.whiteStripe.left = this.back.left;
            this.whiteStripe.top = this.back.top + 35;
        };
        ShopCard.prototype.addIcon = function () {
            var imageKey = "Booster_" + this._config.booster.type + "0000";
            this.icon = this.game.add.image(0, 0, "boosters_shop", imageKey, this);
            this.icon.anchor.set(0.5, 0.5);
            this.icon.x = this.back.left + 77;
            this.icon.centerY = this.whiteStripe.centerY;
        };
        ShopCard.prototype.addTitle = function () {
            var content = this._config.booster.title;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 36,
                fill: "#ffffff",
                align: "left",
            };
            this.title = this.game.add.text(0, 0, content, style, this);
            this.title.lineSpacing = -14;
            this.title.anchor.set(0, 0.5);
            this.title.x = this.back.left + 136;
            this.title.y = this.whiteStripe.centerY;
        };
        ShopCard.prototype.addCountLabel = function () {
            var count = this._config.booster.num;
            this.countLabel = new game.BoosterCountLabel(this.game, this);
            this.countLabel.setBackgroundColor(this.back.tint);
            this.countLabel.x = this.back.left + 390;
            this.countLabel.y = this.whiteStripe.centerY;
            this.countLabel.updateContent(count, false);
        };
        ShopCard.prototype.addBuyButton = function () {
            var price = this._config.booster.price;
            this.buyButton = new game.CardBuyButton(this.game, this);
            this.buyButton.centerX = this.back.centerX;
            this.buyButton.y = this.back.top + 146;
            this.buyButton.updatePrice(price);
            this.buyButton.card = this;
            this.buyButton.name = "buy_button_" + this._config.booster.title;
            this.buyButton.back.name = "buy_button_" + this._config.booster.title;
        };
        ShopCard.prototype.addDescription = function () {
            var content = this._config.booster.description;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 33,
                fill: "#ffffff",
                align: "center",
            };
            this.description = this.game.add.text(0, 0, content, style, this);
            this.description.anchor.set(0.5, 0.5);
            this.description.lineSpacing = -10;
            this.description.wordWrap = true;
            this.description.wordWrapWidth = this.back.width * 0.75;
            this.description.setShadow(0, 2, "rgba(0,0,0,0.2)", 0, false, true);
            this.description.centerX = this.back.centerX;
            this.description.centerY = this.back.centerY;
            this.description.visible = false;
        };
        ShopCard.prototype.addInfoButton = function () {
            this.infoButton = new game.ToggleButton(this.game, 0, 0, "boosters_shop", "Button_Info0000", "Button_Info0001");
            this.infoButton.right = this.back.right;
            this.infoButton.bottom = this.back.bottom;
            this.infoButton.areTweensEnabled = false;
            this.infoButton.callback.add(this.onInfoButtonClick, this);
            this.add(this.infoButton);
        };
        ShopCard.prototype.updateContent = function () {
            if (this.countLabel) {
                this.countLabel.updateContent(this.config.booster.num);
            }
        };
        Object.defineProperty(ShopCard.prototype, "config", {
            get: function () {
                return this._config;
            },
            enumerable: false,
            configurable: true
        });
        ShopCard.prototype.onInfoButtonClick = function (event) {
            if (this.description.visible) {
                this.hideDescription();
                this.showMainContent(100);
            }
            else {
                this.hideMainContent();
                this.showDescription(100);
            }
        };
        ShopCard.prototype.hideDescription = function () {
            var _this = this;
            this.game.tweens.removeFrom(this.description);
            this.game.add.tween(this.description).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.description.visible = false;
            });
        };
        ShopCard.prototype.showMainContent = function (delay) {
            var _this = this;
            this.mainContent.forEach(function (child, index) {
                child.visible = true;
                child.alpha = 0;
                _this.game.tweens.removeFrom(child);
                _this.game.add.tween(child).to({ alpha: 1 }, 200, Phaser.Easing.Cubic.Out, true, delay);
            });
            this.buyButton.enabled = true;
        };
        ShopCard.prototype.hideMainContent = function () {
            var _this = this;
            this.mainContent.forEach(function (child, index) {
                _this.game.tweens.removeFrom(child);
                _this.game.add.tween(child).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true);
            });
            this.buyButton.enabled = false;
        };
        ShopCard.prototype.showDescription = function (delay) {
            this.description.visible = true;
            this.description.alpha = 0;
            this.game.tweens.removeFrom(this.description);
            this.game.add.tween(this.description).to({ alpha: 1 }, 200, Phaser.Easing.Cubic.Out, true, delay);
        };
        ShopCard.prototype.initMainContent = function () {
            this.mainContent = [this.whiteStripe, this.icon, this.title, this.countLabel, this.buyButton];
        };
        ShopCard.prototype.addWhite = function () {
            this.white = this.game.add.image(0, 0, "boosters_shop", "Card_Back0000", this);
            this.white.centerX = this.back.centerX;
            this.white.centerY = this.back.centerY;
            this.white.visible = false;
        };
        ShopCard.prototype.highlight = function () {
            var _this = this;
            this.white.visible = true;
            this.white.alpha = 0;
            this.game.tweens.removeFrom(this.white);
            this.game.add.tween(this.white).to({ alpha: 0.66 }, 300, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true)
                .onComplete.addOnce(function () {
                _this.white.visible = false;
            });
        };
        ShopCard.prototype.resetHighlight = function () {
            this.game.tweens.removeFrom(this.white);
            this.white.visible = false;
        };
        ShopCard.prototype.animateBuyButton = function () {
            this.stopAnimateBuyButton();
            this.game.add.tween(this.buyButton.scale).to({
                x: 1.1,
                y: 1.1,
            }, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        };
        ShopCard.prototype.stopAnimateBuyButton = function () {
            this.game.tweens.removeFrom(this.buyButton.scale);
            this.buyButton.scale.set(1);
        };
        ShopCard.prototype.getHeight = function () {
            return this.back.height;
        };
        ShopCard.prototype.destroy = function () {
            this.game.tweens.removeFrom(this.buyButton.scale);
            this.mainContent = null;
            _super.prototype.destroy.call(this, true, false);
        };
        return ShopCard;
    }(Phaser.Group));
    game.ShopCard = ShopCard;
})(game || (game = {}));
var game;
(function (game) {
    var ShopCardConfig = /** @class */ (function () {
        function ShopCardConfig() {
            this.backTextureColor = 0x35AFDB;
            this.videoButton = false;
            this.booster = null;
            this.counterVisible = true;
        }
        return ShopCardConfig;
    }());
    game.ShopCardConfig = ShopCardConfig;
})(game || (game = {}));
///<reference path='../../../gui/buttons/ComplexButton.ts' />
var game;
(function (game) {
    var CardBuyButton = /** @class */ (function (_super) {
        __extends(CardBuyButton, _super);
        function CardBuyButton(_game, parent) {
            var _this = _super.call(this, _game, parent, "boosters_shop", "Button_Buy_Back0000") || this;
            _this.addBmpText("0000", game.GameFonts.BOOSTERS_SHOP_BARIOL_BOLD, 36, 0, -2);
            _this.bmpText.anchor.set(1, 0.5);
            _this.bmpText.right = _this.back.right - 24;
            return _this;
        }
        /*private addText():void {
            let textFormat:TextFormat = new TextFormat("font_boosters_shop", 36 * Config.ASSETS_SCALE, 0xffffff);

            this.textField = new TextField(this.width * 0.75, this.height, "1000", textFormat);
            this.textField.format.horizontalAlign = Align.RIGHT;
            this.textField.alignPivot(Align.LEFT, Align.CENTER);
            this.textField.x = this.width - this.textField.width - 25 * Config.ASSETS_SCALE;
            this.textField.y = 30 * Config.ASSETS_SCALE;
            this.textField.batchable = true;
            //this.textField.touchable = false;
            //this.textField.border = true;
            this.overlay.addChild(this.textField);
        }*/
        CardBuyButton.prototype.updatePrice = function (newPrice) {
            this.bmpText.setText(newPrice.toString());
        };
        return CardBuyButton;
    }(game.ComplexButton));
    game.CardBuyButton = CardBuyButton;
})(game || (game = {}));
var game;
(function (game) {
    var ScrollHandler = /** @class */ (function () {
        function ScrollHandler(_game, state) {
            this._enabled = true;
            this.pointerDown = false;
            this.game = _game;
            this.state = state;
            this.cards = this.state.cardsContainer;
            this.cardsBounds = this.state.cardsBounds;
            this.scroll = this.state.scroll;
            this.createScrollRect();
            this.game.input.onDown.add(this.onInputDown, this);
            this.game.input.onUp.add(this.onInputUp, this);
            this.game.input.mouse.mouseWheelCallback = this.onMouseWheel.bind(this);
        }
        Object.defineProperty(ScrollHandler.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        ScrollHandler.prototype.onMouseWheel = function (event) {
            if (this._enabled === false) {
                return;
            }
            this.game.tweens.removeFrom(this.cards);
            var dy = 100 * Phaser.Math.sign(event.deltaY);
            var newY = this.cards.y + dy;
            this.cards.y = Phaser.Math.clamp(newY, this.scrollBounds.top, this.scrollBounds.bottom);
            this.updateScrollbar();
            this.scroll.show();
            this.scroll.hide(1000);
        };
        ScrollHandler.prototype.createScrollRect = function () {
            var top = this.cardsBounds.bottom - this.cards.height - 40;
            var bottom = this.cardsBounds.top;
            var height = bottom - top;
            this.scrollBounds = new Phaser.Rectangle(0, game.Config.GAME_WIDTH, top, height);
        };
        ScrollHandler.prototype.onInputDown = function (pointer) {
            if (this._enabled) {
                if (pointer.interactiveCandidates.length > 0) {
                    return;
                }
                this.pointerDown = true;
                this.lastPointerPosition = pointer.position.clone();
                this.scroll.show();
                this.game.tweens.removeFrom(this.cards);
                this.cards.children.forEach(function (child) {
                    if (child instanceof game.ShopCard) {
                        child.resetHighlight();
                    }
                });
            }
        };
        ScrollHandler.prototype.onInputUp = function (pointer) {
            if (this._enabled) {
                this.pointerDown = false;
                this.scroll.hide();
            }
        };
        ScrollHandler.prototype.update = function () {
            if (this._enabled) {
                if (this.pointerDown) {
                    this.updateScroll();
                    this.updateScrollbar();
                }
            }
        };
        ScrollHandler.prototype.updateScroll = function () {
            var pointerPosition = this.game.input.activePointer.position;
            var dy = pointerPosition.y - this.lastPointerPosition.y;
            var k = 1.3;
            var newY = this.cards.y + dy * k;
            this.cards.y = Phaser.Math.clamp(newY, this.scrollBounds.top, this.scrollBounds.bottom);
            pointerPosition.clone(this.lastPointerPosition);
        };
        ScrollHandler.prototype.updateScrollbar = function () {
            var dy = this.scrollBounds.y - this.cards.y;
            var percent = Math.abs(dy) / this.scrollBounds.height;
            this.scroll.setPosition(1 - percent);
        };
        ScrollHandler.prototype.updateCardVisibility = function () {
            var _this = this;
            this.cards.children.forEach(function (card) {
                card.updateTransform(card.parent);
                var cardTop = card.top + _this.cards.y;
                var cardBottom = card.bottom + _this.cards.y;
                card.visible = (cardTop < _this.cardsBounds.bottom && cardBottom > _this.cardsBounds.top + 20);
            });
        };
        ScrollHandler.prototype.resize = function () {
            var top = this.cardsBounds.bottom - this.cards.height - 40;
            var bottom = this.cardsBounds.top;
            var height = bottom - top;
            this.scrollBounds.y = top;
            this.scrollBounds.height = height;
        };
        ScrollHandler.prototype.destroy = function () {
            this._enabled = false;
            this.game.input.onDown.remove(this.onInputDown, this);
            this.game.input.onUp.remove(this.onInputUp, this);
        };
        return ScrollHandler;
    }());
    game.ScrollHandler = ScrollHandler;
})(game || (game = {}));
var game;
(function (game) {
    var ScrollbarHandle = /** @class */ (function (_super) {
        __extends(ScrollbarHandle, _super);
        function ScrollbarHandle(_game, key, frame) {
            var _this = _super.call(this, _game, 0, 0, key, frame) || this;
            _this._minY = 0;
            _this._maxY = 0;
            _this.delta = 0;
            _this.anchor.set(0.5, 0.5);
            return _this;
        }
        ScrollbarHandle.prototype.setLimits = function (min, max) {
            this._minY = min;
            this._maxY = max;
            this.delta = max - min;
        };
        ScrollbarHandle.prototype.setPosition = function (percent) {
            percent = Phaser.Math.clamp(percent, 0, 1);
            this.y = this._minY + this.delta * percent;
        };
        ScrollbarHandle.prototype.show = function () {
            this.game.time.events.removeBy(this.doHide, this);
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).to({ alpha: 1 }, 100, Phaser.Easing.Cubic.Out, true);
        };
        ScrollbarHandle.prototype.hide = function (delay) {
            if (delay === void 0) { delay = 660; }
            this.game.time.events.removeBy(this.doHide, this);
            this.game.time.events.add(delay, this.doHide, this);
        };
        ScrollbarHandle.prototype.doHide = function () {
            this.game.add.tween(this).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true);
        };
        Object.defineProperty(ScrollbarHandle.prototype, "minY", {
            get: function () {
                return this._minY;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ScrollbarHandle.prototype, "maxY", {
            get: function () {
                return this._maxY;
            },
            enumerable: false,
            configurable: true
        });
        return ScrollbarHandle;
    }(Phaser.Image));
    game.ScrollbarHandle = ScrollbarHandle;
})(game || (game = {}));
///<reference path='topPanel/BoostersShopTopPanel.ts' />
///<reference path='bottomPanel/BoostersShopBottomPanel.ts' />
///<reference path='itemCards/ShopCard.ts' />
///<reference path='itemCards/ShopCardConfig.ts' />
///<reference path='itemCards/CardBuyButton.ts' />
///<reference path='scroll/ScrollHandler.ts' />
///<reference path='scroll/ScrollbarHandle.ts' />
var game;
(function (game_7) {
    var BoostersShop = /** @class */ (function (_super) {
        __extends(BoostersShop, _super);
        function BoostersShop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BoostersShop.prototype.create = function () {
            this.addBackground();
            this.addTopPanel();
            this.addCards();
            this.addScroll();
            this.addBottomPanel();
            this.addCoinsSpreadFx();
            this.addKineticScroll();
            this.addKeyboardCallbacks();
            this.resize();
            this.world.setChildIndex(this.cardsContainer, 1);
            this.show();
        };
        BoostersShop.prototype.addBackground = function () {
            this.background = new game_7.GameBackground(this.game, "boosters_shop", "Bottom_Panel_Back0000");
            this.background.tint = 0xffffff;
            this.background.fixedToCamera = true;
        };
        BoostersShop.prototype.addTopPanel = function () {
            this.topPanel = new game_7.BoostersShopTopPanel(this.game, this.world);
            this.topPanel.backButton.callback.addOnce(this.gotoMainMenu, this);
            this.topPanel.coinsLabel.getCoinsButton.callback.add(this.showRewardedVideo, this);
            this.topPanel.fixedToCamera = true;
        };
        BoostersShop.prototype.gotoMainMenu = function () {
            this.game.changeState("MainMenu");
        };
        BoostersShop.prototype.onShareButtonClick = function () {
            var highscore = this.game.store.getNumber(game_7.GameStoreKey.BEST_ITEM);
            var text = this.game.texts.texts["share_message"];
            // let image: string = this.getShareImage()
            this.game.share
                .share(text)
                .catch(function (error) {
            });
        };
        BoostersShop.prototype.getShareImage = function () {
            var image = this.game.make.image(0, 0, "main_menu", "Item_130000");
            var dataURL = this.game.make
                .bitmapData(image.width, image.height)
                .drawFull(image)
                .canvas.toDataURL();
            // utils.NetUtil.openWindowWithImage(dataURL);
            return dataURL;
        };
        BoostersShop.prototype.onShareComplete = function () {
            this.highlightBuyButtons();
        };
        BoostersShop.prototype.addCards = function () {
            var _this = this;
            var cardConfigs = this.game.boosters.boosters
                .sort(this.sortBoostersByPrice)
                .map(function (booster) {
                var config = new game_7.ShopCardConfig();
                config.booster = booster;
                return config;
            });
            this.cards = cardConfigs.map(function (config) {
                return new game_7.ShopCard(_this.game, _this.world, config);
            });
            this.cardsContainer = this.game.add.group(this.world, "cards");
            this.cardsContainer.addMultiple(this.cards, true);
            this.cardsContainer.align(1, this.cards.length, this.cards[0].width, 226, Phaser.BOTTOM_CENTER);
            this.cardsContainer.forEach(function (card) {
                card.buyButton.callback.add(_this.onBuyButtonClick, _this);
            }, this);
            this.cardsBounds = new Phaser.Rectangle(0, 0, game.Config.GAME_WIDTH, game.Config.GAME_HEIGHT);
        };
        BoostersShop.prototype.sortBoostersByPrice = function (booster_1, booster_2) {
            var delta = booster_1.price - booster_2.price;
            return Phaser.Math.sign(delta);
        };
        BoostersShop.prototype.onBuyButtonClick = function (buyButton) {
            var card = buyButton.card;
            var booster = card.config.booster;
            var coins = this.game.store.getCoins();
            if (coins >= booster.price) {
                if (booster.num < booster.maxNum) {
                    this.game.sound.play('purchase', 1.0);
                    coins -= booster.price;
                    this.game.store.changeCoins(-booster.price);
                    this.topPanel.coinsLabel.updateCount(coins, true, false);
                    booster.num++;
                    card.updateContent();
                    card.highlight();
                    this.highlightBuyButtons();
                }
                else {
                    var content = this.game.texts.texts['booster_maxed_warning'];
                    this.game.toast.show(content);
                }
            }
            else {
                this.game.sound.play('muted_error', 0.66);
                this.topPanel.coinsLabel.shake();
                this.topPanel.coinsLabel.getCoinsButton.highlight();
                if (this.bottomPanel.freeCoinsButton.enabled) {
                    this.bottomPanel.freeCoinsButton.highlight();
                }
            }
        };
        BoostersShop.prototype.addScroll = function () {
            this.scroll = new game_7.ScrollbarHandle(this.game, "boosters_shop", "Scroll0000");
            this.scroll.x = game_7.Config.GAME_WIDTH - 20 * game_7.Config.ASSETS_SCALE;
            this.scroll.fixedToCamera = true;
            this.world.add(this.scroll);
        };
        BoostersShop.prototype.addBottomPanel = function () {
            this.bottomPanel = new game_7.BoostersShopBottomPanel(this.game, this.world);
            this.bottomPanel.freeCoinsButton.onChildInputUp.add(this.showRewardedVideo, this);
            this.bottomPanel.playButton.callback.addOnce(this.onPlayButtonClick, this);
            this.bottomPanel.fixedToCamera = true;
            var isFreeCoinsDisabled = this.game.store.getBoolean(game_7.GameStoreKey.FREE_COINS_DISABLED);
            if (isFreeCoinsDisabled) {
                this.bottomPanel.freeCoinsButton.disable();
            }
        };
        BoostersShop.prototype.showRewardedVideo = function () {
            var _this = this;
            this.game.poki.rewardedBreak("BoostersShop:1000_coins", {
                onSuccess: function () {
                    _this.giveFreeCoins();
                    _this.bottomPanel.freeCoinsButton.disable();
                    _this.game.store.saveValue(game_7.GameStoreKey.FREE_COINS_DISABLED, true);
                },
            });
        };
        BoostersShop.prototype.giveFreeCoins = function () {
            var _this = this;
            var coinsNum = 1000;
            this.game.store.changeCoins(coinsNum);
            var emitPoint = this.getCoinsFxEmitPoint();
            var coinsCollectPoint = this.getCoinsFxCollectPoint();
            this.coinsSpreadFX.show(emitPoint, coinsCollectPoint, 1330);
            this.coinsSpreadFX.onCoinsCollectedSignal.addOnce(function () {
                var targetScale = 1.07;
                _this.game.add.tween(_this.topPanel.coinsLabel.scale).to({
                    x: targetScale,
                    y: targetScale,
                }, 230, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
                _this.updateCoinsLabel();
                _this.highlightBuyButtons();
            });
        };
        BoostersShop.prototype.getCoinsFxEmitPoint = function () {
            return new Phaser.Point(game.Config.HALF_GAME_WIDTH, game.Config.HALF_GAME_HEIGHT);
        };
        BoostersShop.prototype.getCoinsFxCollectPoint = function () {
            var coinsLabel = this.topPanel.coinsLabel;
            var coinPosition = coinsLabel.toGlobal(coinsLabel.coinIcon.position).toPhaser();
            return coinPosition;
        };
        BoostersShop.prototype.updateCoinsLabel = function () {
            var coins = this.game.store.getCoins();
            this.topPanel.coinsLabel.updateCount(coins);
        };
        BoostersShop.prototype.onPlayButtonClick = function () {
            var _this = this;
            this.game.poki.commercialBreak("BoostersShop:PlayButton")
                .finally(function () {
                _this.gotoLevel();
            });
        };
        BoostersShop.prototype.gotoLevel = function () {
            this.game.changeState("Level");
        };
        BoostersShop.prototype.addCoinsSpreadFx = function () {
            this.coinsSpreadFX = new game_7.CoinsSpreadFX(this.game, this.world, 30);
            this.coinsSpreadFX.background.loadTexture("boosters_shop", "white_rect_large0000");
            this.coinsSpreadFX.setCoinTexture("boosters_shop", "Coins_Label_Coin0000");
            this.coinsSpreadFX.fixedToCamera = true;
        };
        BoostersShop.prototype.addKineticScroll = function () {
            this.game.kineticScrolling.configure({
                kineticMovement: true,
                timeConstantScroll: 325,
                horizontalScroll: false,
                verticalScroll: true,
                horizontalWheel: false,
                verticalWheel: true,
                deltaWheel: 25,
            });
            this.game.kineticScrolling.start();
        };
        BoostersShop.prototype.addKeyboardCallbacks = function () {
            var _this = this;
            this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.gotoMainMenu, this);
            if (game_7.Main.development) {
                this.game.input.keyboard.addKey(Phaser.Keyboard.R).onDown.add(this.restart, this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.gotoLevel, this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.EQUALS).onDown.add(function () {
                    _this.changeCoins(1000);
                });
                this.game.input.keyboard.addKey(Phaser.Keyboard.UNDERSCORE).onDown.add(function () {
                    _this.changeCoins(-1000);
                });
                this.game.input.keyboard.addKey(Phaser.Keyboard.OPEN_BRACKET).onDown.add(this.giveFreeCoins, this);
            }
        };
        BoostersShop.prototype.restart = function () {
            this.game.changeState("BoostersShop");
        };
        BoostersShop.prototype.changeCoins = function (delta) {
            var coins = this.game.store.changeCoins(delta);
            this.topPanel.coinsLabel.updateCount(coins, true, false);
            this.highlightBuyButtons();
        };
        BoostersShop.prototype.resize = function () {
            this.background.resize();
            this.alignTopPanel();
            this.alignBottomPanel();
            this.alignCards();
            this.alignScroll();
            this.game.world.setBounds(0, 0, game_7.Config.GAME_WIDTH, this.cardsContainer.height + this.bottomPanel.getHeight() + this.topPanel.height + 50);
            this.coinsSpreadFX.resize();
        };
        BoostersShop.prototype.alignTopPanel = function () {
            this.topPanel.resize(game.Config.GAME_WIDTH);
            this.topPanel.centerX = game.Config.HALF_GAME_WIDTH;
            this.topPanel.top = 0;
        };
        BoostersShop.prototype.alignBottomPanel = function () {
            this.bottomPanel.resize(game.Config.GAME_WIDTH);
            this.bottomPanel.centerX = game.Config.HALF_GAME_WIDTH;
            this.bottomPanel.cameraOffset.y = game_7.Config.GAME_HEIGHT - this.bottomPanel.getHeight();
        };
        BoostersShop.prototype.alignCards = function () {
            this.cardsBounds.x = 0;
            this.cardsBounds.width = game.Config.GAME_WIDTH;
            this.cardsBounds.y = this.topPanel.bottom;
            this.cardsBounds.height = this.bottomPanel.top - this.topPanel.bottom;
            this.cardsContainer.centerX = this.cardsBounds.centerX;
            this.cardsContainer.y = this.cardsBounds.top;
        };
        BoostersShop.prototype.alignScroll = function () {
            var offset = this.scroll.height / 2 + 10;
            var top = this.cardsBounds.top + offset;
            var bottom = this.cardsBounds.bottom - offset;
            this.scroll.setLimits(top, bottom);
            this.scroll.right = this.cardsBounds.right - 8;
        };
        BoostersShop.prototype.show = function () {
            this.topPanel.show(100);
            this.bottomPanel.show(100);
            // this.showCards(250)
            this.showScroll(250);
            this.highlightBuyButtons();
        };
        BoostersShop.prototype.showCards = function (initialDelay) {
            this.cardsContainer.y = this.bottomPanel.y - this.cardsContainer.height - 70 * game_7.Config.ASSETS_SCALE;
            var dy = Math.abs(this.cardsContainer.y - this.cardsBounds.top);
            var duration = (dy / 1000) * 2600;
            var scrollTween = this.game.add.tween(this.cardsContainer).to({ y: this.cardsBounds.top }, duration, Phaser.Easing.Cubic.Out, true, initialDelay);
            scrollTween.onUpdateCallback(function () {
                // this.scrollHandler.updateScrollbar()
            });
            this.game.add.tween(this.cardsContainer).from({ alpha: 0 }, 330, Phaser.Easing.Cubic.Out, true, initialDelay);
        };
        BoostersShop.prototype.showScroll = function (initialDelay) {
            this.game.add.tween(this.scroll).from({ alpha: 1 }, 330, Phaser.Easing.Cubic.Out, true, initialDelay);
        };
        BoostersShop.prototype.highlightBuyButtons = function () {
            var coins = this.game.store.getCoins();
            this.cards.forEach(function (card) {
                if (card.config.booster.price <= coins) {
                    card.animateBuyButton();
                }
                else {
                    card.stopAnimateBuyButton();
                }
            });
        };
        BoostersShop.prototype.update = function (game) {
            _super.prototype.update.call(this, game);
            this.updateScrollPosition();
        };
        BoostersShop.prototype.updateScrollPosition = function () {
            var offset = this.scroll.height / 2 + 10;
            var top = this.topPanel.height + offset;
            var bottom = game_7.Config.GAME_HEIGHT - this.bottomPanel.getHeight() - offset;
            var height = bottom - top;
            var scrollTop = 0;
            var scrollBottom = this.game.world.bounds.height - this.game.camera.height;
            var scrollHeight = scrollBottom - scrollTop;
            var percent = this.game.camera.y / scrollHeight;
            this.scroll.cameraOffset.y = top + height * percent;
        };
        BoostersShop.prototype.shutdown = function () {
            this.game.kineticScrolling.stop();
        };
        return BoostersShop;
    }(Phaser.State));
    game_7.BoostersShop = BoostersShop;
})(game || (game = {}));
var game;
(function (game) {
    var Item = /** @class */ (function (_super) {
        __extends(Item, _super);
        function Item(_game, parent) {
            var _this = _super.call(this, _game, parent, "item") || this;
            _this._itemType = 0;
            _this.dropCell = null;
            _this.z = 0;
            _this.onCollectComplete = new Phaser.Signal();
            _this.onRemoveBoosterComplete = new Phaser.Signal();
            _this.addBack();
            _this.addTextfield();
            _this.addWhite();
            _this.addBorder();
            _this.visible = false;
            _this.exists = false;
            return _this;
        }
        Item.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "Item_White0000", this);
            this.back.anchor.set(0.5, 0.5);
        };
        Item.prototype.addTextfield = function () {
            this.text = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_BOLD_BMP, "0", 45, this);
            this.text.anchor.set(0.5, 0.5);
        };
        Item.prototype.addWhite = function () {
            this.white = this.game.add.image(0, 0, "interface", "Item_White0000", this);
            this.white.anchor.set(0.5, 0.5);
            this.white.visible = false;
        };
        Item.prototype.addBorder = function () {
            this.border = this.game.add.image(0, 0, "interface", "Item_Shine0000", this);
            this.border.anchor.set(0.5, 0.5);
            this.border.visible = false;
        };
        Item.prototype.setItemType = function (itemType) {
            this._itemType = itemType;
            this._title = "Item " + this._itemType.toString();
            this.name = this._title;
            this.back.tint = Item.getBackColor(this._itemType);
            this.border.tint = this.back.tint;
            this.text.tint = Item.getTextColor(this._itemType);
            this.text.setText(this._itemType);
        };
        Item.getBackColor = function (itemType) {
            var index = Phaser.Math.wrap(itemType - 1, 0, Item.BACK_COLORS.length - 1);
            return Item.BACK_COLORS[index];
        };
        Item.getTextColor = function (itemType) {
            var index = Phaser.Math.wrap(itemType - 1, 0, Item.TEXT_COLORS.length - 1);
            return Item.TEXT_COLORS[index];
        };
        Item.prototype.onSelected = function () {
            this.showBorderOnSelect();
            this.game.add.tween(this.scale).to({
                x: 1.1,
                y: 1.1,
            }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
            var dy = 7 * this.game.rnd.sign();
            this.wiggleTween = this.game.add.tween(this).to({ y: this.y + dy }, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        };
        Item.prototype.showBorderOnSelect = function () {
            var _this = this;
            this.game.tweens.removeFrom(this.border);
            this.game.tweens.removeFrom(this.border.scale);
            this.border.visible = true;
            this.border.alpha = 1;
            this.border.scale.set(0.9);
            this.game.add.tween(this.border).to({ alpha: 0 }, 1000, Phaser.Easing.Exponential.Out, true);
            this.game.add.tween(this.border.scale).to({ x: 1.2, y: 1.2 }, 1000, Phaser.Easing.Exponential.Out, true)
                .onComplete.addOnce(function () {
                _this.border.visible = false;
            });
        };
        Item.prototype.onDeselected = function () {
            this.game.tweens.removeFrom(this, false);
            this.game.tweens.removeFrom(this.scale);
            this.stopWiggleTween();
            this.hideBorder();
            this.scale.set(1);
            this.alignToCellCenterSmooth();
        };
        Item.prototype.hideBorder = function () {
            this.game.tweens.removeFrom(this.border);
            this.game.tweens.removeFrom(this.border.scale);
            this.border.visible = false;
        };
        Item.prototype.stopWiggleTween = function () {
            if (this.wiggleTween) {
                this.game.tweens.remove(this.wiggleTween);
                this.wiggleTween.stop(false);
                this.wiggleTween = null;
            }
        };
        Item.prototype.onConverted = function (scale) {
            var _this = this;
            if (scale === void 0) { scale = 1.2; }
            this.game.tweens.removeFrom(this.white);
            this.game.tweens.removeFrom(this.white.scale);
            this.white.visible = true;
            this.white.alpha = 0.7;
            this.white.scale.set(1);
            this.game.add.tween(this.white).to({ alpha: 0 }, 400, Phaser.Easing.Cubic.In, true)
                .onComplete.addOnce(function () {
                _this.white.visible = false;
            });
            this.angle = -20;
            this.game.add.tween(this).to({ angle: 0 }, 400, Phaser.Easing.Back.Out, true);
            this.game.add.tween(this.scale).to({ x: scale, y: scale }, 400, Phaser.Easing.Back.Out, true)
                .onComplete.addOnce(function () {
                _this.game.add.tween(_this.scale).to({ x: 1, y: 1 }, 300, Phaser.Easing.Back.Out, true);
            });
        };
        Item.prototype.applyRemoveBooster = function () {
            var _this = this;
            this.border.visible = false;
            this.white.visible = false;
            this.game.add.tween(this).to({ y: "+13" }, 500, Phaser.Easing.Back.InOut, true);
            this.game.add.tween(this.scale).to({ x: 0.77, y: 0.77 }, 160, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.onRemove2();
            });
        };
        Item.prototype.onRemove2 = function () {
            var _this = this;
            var duration = 330;
            this.game.add.tween(this.scale).to({ x: 2, y: 2 }, duration, Phaser.Easing.Cubic.In, true);
            this.game.add.tween(this).to({ alpha: 0 }, duration, Phaser.Easing.Cubic.In, true)
                .onComplete.addOnce(function () {
                _this.onRemoveBoosterComplete.dispatch(_this);
            });
        };
        Item.prototype.showOnGrid = function (instant, delay) {
            if (instant === false) {
                this.game.add.tween(this).from({ y: "-40", alpha: 0 }, 300, Phaser.Easing.Cubic.Out, true, delay);
            }
        };
        Item.prototype.collect = function (destinationX, destinationY) {
            var _this = this;
            this.parent.bringToTop(this);
            this.onDeselected();
            var duration = this.getCollectTweenDuration(this._itemType);
            this.game.add.tween(this).to({ x: destinationX, y: destinationY }, 200, Phaser.Easing.Back.In, true)
                .onComplete.addOnce(function () {
                _this.onCollectComplete.dispatch(_this, _this._itemType);
                _this.onAddToPool();
            });
        };
        Item.prototype.getCollectTweenDuration = function (itemType) {
            var minDuration = 150;
            var duration = Phaser.Math.mapLinear(itemType, 1, 13, 250, minDuration);
            return Math.max(duration, minDuration);
        };
        Item.prototype.linkCell = function (cell) {
            var cellIsFree = cell.isFree();
            if (cellIsFree === false) {
                console.assert(false, "Cell [" + cell.column + ", " + cell.row + "] is busy! item = " + cell.item.itemType);
            }
            if (this.cell) {
                this.clearCell();
            }
            this.cell = cell;
            this.cell.item = this;
        };
        Item.prototype.clearCell = function () {
            if (this.cell) {
                this.cell.item = null;
                this.cell = null;
            }
        };
        Item.prototype.removeFromGrid = function () {
            this.clearCell();
            this.onAddToPool();
        };
        Item.prototype.dropToCell = function (targetCell, delay) {
            if (delay === void 0) { delay = 0; }
            var tweenX = targetCell.column * game.Cell.WIDTH + game.Cell.WIDTH * 0.5;
            var tweenY = targetCell.row * game.Cell.HEIGHT + game.Cell.HEIGHT * 0.5;
            var distance = Phaser.Math.distance(this.x, this.y, tweenX, tweenY);
            var tweenDuration = distance * 1.01;
            return this.game.add.tween(this).to({
                x: tweenX,
                y: tweenY,
            }, tweenDuration, Phaser.Easing.Quadratic.Out, true, delay);
        };
        Item.prototype.onAddToPool = function () {
            this.visible = false;
            this.exists = false;
            this.game.tweens.removeFrom([
                this, this.scale,
                this.white, this.white.scale,
                this.border, this.border.scale,
            ]);
        };
        Item.prototype.onRemoveFromPool = function () {
            this.visible = true;
            this.exists = true;
            this.alpha = 1;
            this.scale.set(1);
            this.rotation = 0;
            this.border.visible = false;
            this.white.visible = false;
        };
        Item.prototype.alignToCellCenterSmooth = function (duration) {
            if (duration === void 0) { duration = 150; }
            if (this.cell) {
                this.stopAlignTween();
                this.game.tweens.removeFrom(this);
                this.alignTween = this.game.add.tween(this).to({
                    x: this.cell.centerX,
                    y: this.cell.centerY,
                }, duration, Phaser.Easing.Cubic.Out, true);
            }
        };
        Item.prototype.stopAlignTween = function () {
            if (this.alignTween) {
                this.alignTween.stop();
                this.alignTween = null;
            }
        };
        Item.prototype.alignToCellCenterInstant = function () {
            if (this.cell) {
                this.x = this.cell.centerX;
                this.y = this.cell.centerY;
            }
        };
        Item.prototype.upgrade = function (newItemType, delay) {
            var _this = this;
            if (newItemType === void 0) { newItemType = 0; }
            if (delay === void 0) { delay = 0; }
            if (newItemType === 0) {
                newItemType = this._itemType + 1;
            }
            this._itemType = newItemType;
            this.game.add.tween(this).to({ alpha: 0 }, 330, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.scale).to({ x: 0.2, y: 0.2 }, 330, Phaser.Easing.Back.In, true, delay)
                .onComplete.addOnce(function () {
                _this.upgrade2(newItemType);
            });
        };
        Item.prototype.upgrade2 = function (newType) {
            var _this = this;
            this.setItemType(newType);
            this.white.visible = true;
            this.white.alpha = 0;
            this.game.add.tween(this.white).to({ alpha: 0.55 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.hideWhite();
            });
            this.game.add.tween(this).to({ alpha: 1 }, 200, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this.scale).to({ x: 1, y: 1 }, 440, Phaser.Easing.Back.Out, true);
        };
        Item.prototype.hideWhite = function () {
            this.game.add.tween(this.white).to({ alpha: 0 }, 660, Phaser.Easing.Cubic.Out, true);
        };
        Item.prototype.destroy = function () {
            this.clearCell();
            _super.prototype.destroy.call(this, true, false);
        };
        Object.defineProperty(Item.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Item.prototype, "itemType", {
            get: function () {
                return this._itemType;
            },
            enumerable: false,
            configurable: true
        });
        Item.prototype.animateAsMagnet = function () {
            var _this = this;
            this.game.tweens.removeFrom(this.scale);
            this.game.add.tween(this.scale).to({ x: 1.25, y: 1.25 }, 300, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.game.add.tween(_this.scale).to({
                    x: 1.1,
                    y: 1.1,
                }, 300, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            });
            this.white.visible = true;
            this.white.alpha = 0;
            this.game.add.tween(this.white).to({ alpha: 0.33 }, 233, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        };
        Item.prototype.stopMagnetAnimation = function () {
            this.game.tweens.removeFrom(this.scale);
            this.game.tweens.removeFrom(this.white);
        };
        Item.RADIUS = 55 * game.Config.ASSETS_SCALE;
        Item.RADIUS_SQUARED = Item.RADIUS * Item.RADIUS;
        Item.CONTACT_RADIUS = 190 * game.Config.ASSETS_SCALE;
        Item.CONTACT_RADIUS_SQUARED = Item.CONTACT_RADIUS * Item.CONTACT_RADIUS;
        Item.BACK_COLORS = [
            0xF56990,
            0x4FC3F7,
            0x9AD546,
            0xA698C9,
            0x80C8BD,
            0xEC535A,
            0xD98C4D,
            0xDFB600,
            0x66BB6A,
        ];
        Item.TEXT_COLORS = [
            0xB04B67,
            0x398BB0,
            0x6E9832,
            0x786E91,
            0x5C8F87,
            0xA9393E,
            0x9C6538,
            0x9C8000,
            0x4A874D,
        ];
        return Item;
    }(Phaser.Group));
    game.Item = Item;
})(game || (game = {}));
///<reference path="..\items\Item.ts"/>
var game;
(function (game_8) {
    var Cell = /** @class */ (function (_super) {
        __extends(Cell, _super);
        function Cell(game, row, column) {
            var _this = _super.call(this, game, 0, 0, "interface", "white_rect0000") || this;
            _this.item = null;
            _this._row = row;
            _this._column = column;
            _this.name = "cell {" + _this.column + ", " + _this.row + "}";
            _this.width = Cell.WIDTH;
            _this.height = Cell.HEIGHT;
            _this.tint = 0x2BB6F6;
            return _this;
        }
        Cell.prototype.isFree = function () {
            return (this.item === null);
        };
        Cell.prototype.toString = function () {
            return "Cell {row: " + this._row + ", column: " + this._column + "}";
        };
        Object.defineProperty(Cell.prototype, "centerX", {
            // @ts-ignore
            get: function () { return this.x + this.width * 0.5; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cell.prototype, "centerY", {
            // @ts-ignore
            get: function () { return this.y + this.height * 0.5; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cell.prototype, "column", {
            get: function () { return this._column; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cell.prototype, "row", {
            get: function () { return this._row; },
            enumerable: false,
            configurable: true
        });
        Cell.WIDTH = 130;
        Cell.HEIGHT = 130;
        return Cell;
    }(Phaser.Image));
    game_8.Cell = Cell;
})(game || (game = {}));
///<reference path='../../../types/phaser.comments.d.ts' />
///<reference path='../../../Config.ts' />
///<reference path='Cell.ts' />
var game;
(function (game) {
    var Grid = /** @class */ (function (_super) {
        __extends(Grid, _super);
        function Grid(_game, parent, rows, columns) {
            var _this = _super.call(this, _game, parent || _game.world, "grid_[" + columns + ", " + rows + "]") || this;
            _this._rows = 0;
            _this._columns = 0;
            _this.cellsVisible = false;
            _this._rows = rows;
            _this._columns = columns;
            _this.createCells();
            return _this;
            // this.alignCells();
        }
        Grid.prototype.createCells = function () {
            var _this = this;
            var cellsNum = this._rows * this._columns;
            this.cells = _.times(cellsNum, function (cellIndex) {
                var row = Math.floor(cellIndex / _this._columns);
                var column = cellIndex - (row * _this._columns);
                var cell = new game.Cell(_this.game, row, column);
                cell.alpha = 0;
                cell.left = column * game.Cell.WIDTH;
                cell.top = row * game.Cell.HEIGHT;
                _this.add(cell);
                return cell;
            });
        };
        Grid.prototype.alignCells = function () {
            console.log(this.children);
            this.align(10, this._rows, 100, 100, Phaser.CENTER);
        };
        Grid.prototype.toggleVisibility = function () {
            var _this = this;
            this.cellsVisible = !this.cellsVisible;
            this.cells.forEach(function (cell) {
                cell.alpha = (_this.cellsVisible) ? 0.66 : 0;
            });
        };
        Grid.prototype.getCellAt = function (row, column) {
            var l = this.cells.length;
            for (var i = 0; i < l; i++) {
                var cell = this.cells[i];
                if (cell.row === row && cell.column === column) {
                    return cell;
                }
            }
            return null;
        };
        Grid.prototype.getFreeCell = function () {
            for (var i = 0; i < this.cells.length; i++) {
                var cell = this.cells[i];
                if (cell.isFree())
                    return cell;
            }
            return null;
        };
        Grid.prototype.getFreeCellsNum = function () {
            var freeCellsNum = 0;
            this.cells.forEach(function (cell) {
                if (cell.isFree())
                    freeCellsNum++;
            });
            return freeCellsNum;
        };
        Grid.prototype.getCellUnderPoint = function (worldX, worldY) {
            var localPosition = this.toLocal(new PIXI.Point(worldX, worldY), this.game.world);
            var row = Math.floor(localPosition.y / game.Cell.WIDTH);
            var column = Math.floor(localPosition.x / game.Cell.HEIGHT);
            return this.getCellAt(row, column);
        };
        Grid.prototype.topRowIsEmpty = function () {
            for (var i = 0; i < this._columns; i++) {
                var cell = this.getCellAt(0, i);
                if (cell.isFree() === false)
                    return false;
            }
            return true;
        };
        Grid.prototype.getWidth = function () {
            var left = this.cells[0].x;
            var right = this.cells[this.cells.length - 1].x + this.cells[this.cells.length - 1].width;
            return right - left;
        };
        Grid.prototype.getHeight = function () {
            var top = this.cells[0].y;
            var bottom = this.cells[this.cells.length - 1].y + this.cells[this.cells.length - 1].height;
            return bottom - top;
        };
        Grid.prototype.logState = function () {
            var output = this.game.time.now.toString() + " GRID:\n";
            for (var i = 0; i < this._rows; i++) {
                for (var j = 0; j < this._columns; j++) {
                    var cell = this.getCellAt(i, j);
                    if (cell.isFree()) {
                        output += "-  ";
                    }
                    else {
                        output += cell.item.itemType + "  ";
                    }
                }
                output += "\n";
            }
            console.log(output);
        };
        Grid.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.cells = null;
        };
        Object.defineProperty(Grid.prototype, "rows", {
            get: function () { return this._rows; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Grid.prototype, "columns", {
            get: function () { return this._columns; },
            enumerable: false,
            configurable: true
        });
        Grid.ROWS = 5;
        Grid.COLUMNS = 4;
        return Grid;
    }(Phaser.Group));
    game.Grid = Grid;
})(game || (game = {}));
var game;
(function (game) {
    var LevelCoinsLabel = /** @class */ (function (_super) {
        __extends(LevelCoinsLabel, _super);
        function LevelCoinsLabel(_game, parent) {
            var _this = _super.call(this, _game, parent, "coins_label") || this;
            _this.addBack();
            _this.addIcon();
            _this.addText();
            return _this;
        }
        LevelCoinsLabel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "CoinsCounter_Back0000", this);
        };
        LevelCoinsLabel.prototype.addIcon = function () {
            this.icon = this.game.add.image(0, 0, "interface", "CoinsCounter_Coin0000", this);
            this.icon.anchor.set(0.5, 0.5);
            this.icon.left = this.back.left + 20;
            this.icon.centerY = this.back.centerY;
        };
        LevelCoinsLabel.prototype.addText = function () {
            this.text = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_BOLD_BMP, "0000", 42, this);
            this.text.anchor.set(1, 0.5);
            this.text.x = this.back.right - 20;
            this.text.y = this.back.centerY;
        };
        LevelCoinsLabel.prototype.updateContent = function (coins, instant) {
            if (instant === void 0) { instant = false; }
            this.text.setText(coins);
            if (instant === false) {
                this.game.tweens.removeFrom(this.text);
                this.text.x = this.back.right - 20;
                this.game.add.tween(this.text).to({ x: "-10" }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
            }
        };
        LevelCoinsLabel.prototype.resize = function (height) {
            this.back.height = height;
            this.icon.centerY = this.back.centerY;
            this.text.centerY = this.back.centerY + 2;
        };
        return LevelCoinsLabel;
    }(Phaser.Group));
    game.LevelCoinsLabel = LevelCoinsLabel;
})(game || (game = {}));
///<reference path='LevelCoinsLabel.ts' />
var game;
(function (game) {
    var LevelTopPanel = /** @class */ (function (_super) {
        __extends(LevelTopPanel, _super);
        function LevelTopPanel(_game, parent) {
            var _this = _super.call(this, _game, parent, "top_panel") || this;
            _this.addBack();
            _this.addCoinsLabel();
            _this.addPauseButton();
            _this.addBoostersButton();
            _this.buttons = [_this.boostersButton, _this.pauseButton];
            return _this;
        }
        LevelTopPanel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "Panel_Back0000", this);
            this.back.tint = game.LevelGUI.NORMAL_COLOR;
        };
        LevelTopPanel.prototype.addCoinsLabel = function () {
            var coinsNum = this.game.store.getCoins();
            this.coinsLabel = new game.LevelCoinsLabel(this.game, this);
            this.coinsLabel.updateContent(coinsNum, true);
        };
        LevelTopPanel.prototype.addBoostersButton = function () {
            this.boostersButton = new game.ToggleButton(this.game, 0, 0, "interface", "Boosters_Button_Show0000", "Boosters_Button_Hide0000");
            this.add(this.boostersButton);
        };
        LevelTopPanel.prototype.addPauseButton = function () {
            this.pauseButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_Pause0000");
            this.add(this.pauseButton);
        };
        LevelTopPanel.prototype.resize = function (width, height, contentWidth) {
            this.back.width = width;
            this.back.height = height;
            this.alignContent(width, contentWidth);
        };
        LevelTopPanel.prototype.alignContent = function (width, contentWidth) {
            var sidePadding = (width - contentWidth) / 2;
            this.coinsLabel.resize(this.back.height);
            this.coinsLabel.left = this.back.left + sidePadding;
            this.coinsLabel.centerY = this.back.centerY;
            this.pauseButton.right = this.back.right - sidePadding;
            this.pauseButton.centerY = this.back.centerY + 4;
            this.boostersButton.x = this.pauseButton.x - 90;
            this.boostersButton.centerY = this.pauseButton.centerY;
        };
        LevelTopPanel.prototype.hideForTutorial = function () {
            // this.coinsLabel.visible = false;
            this.coinsLabel.alpha = 0;
            this.buttons.forEach(function (button) {
                button.visible = false;
            });
        };
        LevelTopPanel.prototype.showAfterTutorial = function () {
            // this.coinsLabel.visible = true;
            this.coinsLabel.alpha = 1;
            this.buttons.forEach(function (button) {
                button.visible = true;
            });
        };
        LevelTopPanel.prototype.enableButtons = function () {
            this.buttons.forEach(function (button) {
                button.enabled = true;
                button.alpha = 1;
            });
        };
        LevelTopPanel.prototype.disableButtons = function () {
            this.buttons.forEach(function (button) {
                button.enabled = false;
                button.alpha = game.LevelGUI.DISABLED_BUTTON_ALPHA;
            });
        };
        LevelTopPanel.prototype.enableInput = function () {
            this.buttons.forEach(function (button) {
                button.enabled = true;
            });
        };
        LevelTopPanel.prototype.disableInput = function () {
            this.buttons.forEach(function (button) {
                button.enabled = false;
            });
        };
        LevelTopPanel.prototype.onBoosterHintShow = function () {
            this.coinsLabel.visible = false;
            this.buttons.forEach(function (button) {
                button.visible = false;
            });
        };
        LevelTopPanel.prototype.onBoosterHintHide = function () {
            this.coinsLabel.visible = true;
            this.buttons.forEach(function (button) {
                button.visible = true;
            });
        };
        LevelTopPanel.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return LevelTopPanel;
    }(Phaser.Group));
    game.LevelTopPanel = LevelTopPanel;
})(game || (game = {}));
var game;
(function (game) {
    var FreeBoostersButton = /** @class */ (function (_super) {
        __extends(FreeBoostersButton, _super);
        function FreeBoostersButton(_game, key, frame, parent) {
            return _super.call(this, _game, 0, 0, key, frame, parent) || this;
        }
        FreeBoostersButton.prototype.disable = function () {
            this.alpha = 0.5;
            this.enabled = false;
        };
        return FreeBoostersButton;
    }(game.SimpleButton));
    game.FreeBoostersButton = FreeBoostersButton;
})(game || (game = {}));
///<reference path='FreeBoostersButton.ts' />
var game;
(function (game) {
    var FreeBoostersPopover = /** @class */ (function (_super) {
        __extends(FreeBoostersPopover, _super);
        function FreeBoostersPopover(_game, parent) {
            var _this = _super.call(this, _game, parent, "free_boosters_popover") || this;
            _this.onBoosterRewarded = new Phaser.Signal();
            _this.addBack();
            _this.addText();
            _this.addButtons();
            _this.alignButtons();
            return _this;
        }
        FreeBoostersPopover.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "Free_Boosters_Back0000", this);
            this.back.anchor.set(0.5, 0);
        };
        FreeBoostersPopover.prototype.addText = function () {
            var content = this.game.texts.texts.watch_video;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 33,
                fill: "#ffffff",
                align: "center",
            };
            var maxHeight = 100;
            this.text = this.game.add.text(0, 0, content, style, this);
            this.text.anchor.set(0.5, 0.5);
            this.text.wordWrap = true;
            this.text.wordWrapWidth = this.back.width * 0.9;
            this.text.lineSpacing = -10;
            this.text.scale.set(Math.min(1, maxHeight / this.text.height));
            this.text.centerX = this.back.centerX;
            this.text.centerY = this.back.top + 86;
        };
        FreeBoostersPopover.prototype.addButtons = function () {
            var _this = this;
            this.freeRemoveButton = new game.FreeBoostersButton(this.game, "interface", "Button_Free_Remove0000", this);
            this.freeRemoveButton.booster = game.BoosterType.REMOVE;
            this.freeRemoveButton.boostersNum = 2;
            this.freeUndoButton = new game.FreeBoostersButton(this.game, "interface", "Button_Free_Undo0000", this);
            this.freeUndoButton.booster = game.BoosterType.UNDO;
            this.freeUndoButton.boostersNum = 3;
            this.buttons = [this.freeRemoveButton, this.freeUndoButton];
            this.buttons.forEach(function (button) {
                button.events.onInputUp.add(_this.onButtonClick, _this);
            });
            this.buttonsGroup = this.game.add.group(this, "buttons");
            this.buttonsGroup.addMultiple(this.buttons, true);
            this.buttonsGroup.align(1, 2, this.freeUndoButton.width, this.freeUndoButton.height * 1.25, Phaser.CENTER);
        };
        FreeBoostersPopover.prototype.alignButtons = function () {
            var top = this.text.bottom;
            var bottom = this.back.bottom;
            var height = bottom - top;
            this.buttonsGroup.centerX = this.back.centerX;
            this.buttonsGroup.centerY = top + height / 2;
        };
        FreeBoostersPopover.prototype.onButtonClick = function (button) {
            var _this = this;
            this.game.poki.rewardedBreak("Gameplay:FreeBoostersPopover:" + button.booster, {
                onSuccess: function () {
                    button.disable();
                    _this.onRewardedAdComplete(button.booster, button.boostersNum);
                },
            });
        };
        FreeBoostersPopover.prototype.onRewardedAdComplete = function (boosterType, boostersNum) {
            this.onBoosterRewarded.dispatch(boosterType, boostersNum);
        };
        FreeBoostersPopover.prototype.onRewardedAdFail = function () {
            this.game.toast.showRewardedVideoWarning();
        };
        FreeBoostersPopover.prototype.show = function () {
            this.revive();
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this.scale);
            this.alpha = 1;
            this.scale.set(1);
            this.game.add.tween(this.scale).from({ x: 0.9, y: 0.9 }, 400, Phaser.Easing.Back.Out, true);
            this.game.add.tween(this).from({ alpha: 0, y: "-20" }, 200, Phaser.Easing.Cubic.Out, true);
            /*let offsetY:number = 50 * Config.ASSETS_SCALE;
            this.alpha = 0;
            this.y += offsetY;
            this.game.add.tween(this).to({alpha: 1, y: this.y - offsetY}, 300, Phaser.Easing.Cubic.Out, true);*/
        };
        FreeBoostersPopover.prototype.hide = function () {
            var _this = this;
            this.game.add.tween(this).to({ alpha: 0, y: "+25" }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.visible = false;
                _this.exists = false;
            });
        };
        FreeBoostersPopover.prototype.getButtonByBoosterType = function (boosterType) {
            return this.buttons.find(function (button) { return button.booster === boosterType; });
        };
        FreeBoostersPopover.prototype.getSaveState = function () {
            return this.buttons.reduce(function (acc, button) {
                var _a;
                return __assign(__assign({}, acc), (_a = {}, _a[button.booster] = button.enabled === false, _a));
            }, {});
        };
        FreeBoostersPopover.prototype.loadState = function (freeBoosters) {
            var _this = this;
            Object.keys(freeBoosters).forEach(function (key) {
                var wasUsed = freeBoosters[key];
                if (wasUsed === true) {
                    _this.getButtonByBoosterType(key).disable();
                }
            });
        };
        FreeBoostersPopover.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.buttons = null;
            this.onBoosterRewarded.dispose();
            this.onBoosterRewarded = null;
        };
        return FreeBoostersPopover;
    }(Phaser.Group));
    game.FreeBoostersPopover = FreeBoostersPopover;
})(game || (game = {}));
var game;
(function (game) {
    var BoosterNumLabel = /** @class */ (function (_super) {
        __extends(BoosterNumLabel, _super);
        function BoosterNumLabel(_game, parent) {
            var _this = _super.call(this, _game, parent, "booster_num_label") || this;
            _this.addBack();
            _this.addText();
            return _this;
        }
        BoosterNumLabel.prototype.addBack = function () {
            // this.back = this.game.add.nineSlice(0, 0, "interface", "Booster_Label_Double0000", 40, 34, {top: 11}, this);
            this.back = this.game.add.image(0, 0, "interface", "Booster_Label_Double0000", this);
            this.back.anchor.set(0.5, 0.5);
            this.back.tint = BoosterNumLabel.NORMAL_COLOR;
        };
        BoosterNumLabel.prototype.addText = function () {
            var content = "0";
            this.text = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_BOLD_BMP, content, 28, this);
            this.text.anchor.set(0.5, 0.5);
            this.text.y = 1;
        };
        BoosterNumLabel.prototype.updateContent = function (num) {
            this.text.setText(num);
            this.back.width = this.getBackWidth();
            // this.back.resize(this.getBackWidth(), this.back.height);
        };
        BoosterNumLabel.prototype.getBackWidth = function () {
            var minWidth = 32;
            var width = this.text.width + 7 * 2;
            return Math.max(minWidth, width);
        };
        BoosterNumLabel.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        BoosterNumLabel.NORMAL_COLOR = 0xFF6F00;
        BoosterNumLabel.GAME_OVER_COLOR = 0xB75D5D;
        return BoosterNumLabel;
    }(Phaser.Group));
    game.BoosterNumLabel = BoosterNumLabel;
})(game || (game = {}));
///<reference path='BoosterNumLabel.ts' />
var game;
(function (game) {
    var BoosterButton = /** @class */ (function (_super) {
        __extends(BoosterButton, _super);
        function BoosterButton(_game, parent, boosterType) {
            var _this = _super.call(this, _game, parent, "booster_button") || this;
            _this._enabled = true;
            _this._selected = false;
            _this._boosterType = boosterType;
            _this.booster = _this.game.boosters.getBooster(_this._boosterType);
            _this.onSelected = new Phaser.Signal();
            _this.onClick = new Phaser.Signal();
            _this.addBack();
            _this.addSelectedMark();
            _this.addIcon();
            _this.addLabel();
            return _this;
        }
        Object.defineProperty(BoosterButton.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BoosterButton.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BoosterButton.prototype, "boosterType", {
            get: function () {
                return this._boosterType;
            },
            enumerable: false,
            configurable: true
        });
        BoosterButton.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "white_rect_large0000", this);
            this.back.alpha = 0;
            this.back.inputEnabled = true;
            this.back.events.onInputDown.add(this.onClickCallback, this);
            this.back.name = "booster_button_" + this._boosterType;
        };
        BoosterButton.prototype.onClickCallback = function () {
            if (this._enabled) {
                this.onClick.dispatch(this, this.booster);
            }
        };
        BoosterButton.prototype.addSelectedMark = function () {
            this.selectedMark = this.game.add.image(0, 0, "interface", "white_rect0000", this);
            this.selectedMark.width = this.back.width;
            this.selectedMark.height = 10;
            this.selectedMark.visible = false;
        };
        BoosterButton.prototype.addIcon = function () {
            var iconFrame = "Booster_" + this._boosterType + "0000";
            this.icon = this.game.add.image(0, 0, "interface", iconFrame, this);
            this.icon.anchor.set(0.5, 0.5);
        };
        BoosterButton.prototype.addLabel = function () {
            this.labelOffset = new Phaser.Point(38, -22);
            this.label = new game.BoosterNumLabel(this.game, this);
        };
        BoosterButton.prototype.updateData = function () {
            var num = this.booster.num;
            this.label.updateContent(num);
            this.alignLabel();
            this._enabled = num > 0;
            if (this._enabled) {
                this.icon.alpha = 1;
                this.label.alpha = 1;
                this.back.input.enabled = true;
            }
            else {
                this.icon.alpha = 0.5;
                this.label.alpha = 0.66;
                this.back.input.enabled = true;
            }
        };
        BoosterButton.prototype.select = function () {
            if (this._selected === false) {
                this._selected = true;
                this.game.tweens.removeFrom(this);
                this.game.add.tween(this.back).to({ alpha: 0.2 }, 100, Phaser.Easing.Cubic.Out, true);
                this.selectedMark.visible = true;
                this.game.add.tween(this.selectedMark).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true);
                var iconY = this.back.centerY - 4;
                var labelY = iconY + this.labelOffset.y;
                this.game.add.tween(this.icon).to({ y: iconY }, 400, Phaser.Easing.Back.Out, true, 50);
                this.game.add.tween(this.label).to({ y: labelY }, 400, Phaser.Easing.Back.Out, true, 100);
                this.onSelected.dispatch(this);
            }
        };
        BoosterButton.prototype.deselect = function () {
            if (this._selected) {
                this._selected = false;
                this.game.tweens.removeFrom(this);
                this.back.alpha = 0;
                this.selectedMark.visible = false;
                var iconY = this.back.centerY + 2;
                this.game.tweens.removeFrom(this.icon);
                this.game.add.tween(this.icon).to({ y: iconY }, 200, Phaser.Easing.Cubic.Out, true, 50);
                var labelY = iconY + this.labelOffset.y;
                this.game.tweens.removeFrom(this.label);
                this.game.add.tween(this.label).to({ y: labelY }, 200, Phaser.Easing.Cubic.Out, true, 100);
            }
        };
        BoosterButton.prototype.resize = function (width, height) {
            this.back.width = width;
            this.back.height = height;
            this.selectedMark.width = this.back.width;
            this.selectedMark.centerX = this.back.centerX;
            this.selectedMark.bottom = this.back.bottom;
            this.icon.alignIn(this.back, Phaser.CENTER, 0, 2);
            this.alignLabel();
        };
        BoosterButton.prototype.alignLabel = function () {
            this.label.x = this.icon.x + this.labelOffset.x;
            this.label.y = this.icon.y + this.labelOffset.y;
        };
        BoosterButton.prototype.highlight = function () {
            this.game.tweens.removeFrom(this.back);
            this.back.alpha = 0;
            this.game.add.tween(this.back).to({ alpha: 0.5 }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, 3, true);
            this.game.tweens.removeFrom(this.label.scale);
            this.label.scale.set(1);
            this.game.add.tween(this.label.scale).to({
                x: 1.12,
                y: 1.12,
            }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, 3, true);
        };
        BoosterButton.prototype.highlightForTutorial = function () {
            this.back.visible = true;
            this.game.add.tween(this.back).to({ alpha: 0.25 }, 250, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        };
        BoosterButton.prototype.stopHighlightForTutorial = function () {
            this.game.tweens.removeFrom(this.back);
            this.back.alpha = 0;
        };
        BoosterButton.prototype.setGameOverColors = function () {
            this.label.back.tint = game.BoosterNumLabel.GAME_OVER_COLOR;
        };
        BoosterButton.prototype.setNormalColors = function () {
            this.label.back.tint = game.BoosterNumLabel.NORMAL_COLOR;
        };
        BoosterButton.prototype.shake = function () {
            this.icon.y = this.back.centerY + 2;
            this.game.tweens.removeFrom(this.icon);
            this.game.add.tween(this.icon).to({ y: "-6" }, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, 3, true);
            this.back.visible = true;
            this.back.alpha = 0;
            this.game.tweens.removeFrom(this.back);
            this.game.add.tween(this.back).to({ alpha: 0.2 }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, 2, true);
        };
        BoosterButton.prototype.emulateClick = function () {
            this.onClickCallback();
        };
        BoosterButton.prototype.shakeIcon = function () {
            this.game.add.tween(this.icon).to({ angle: "-15" }, 80, Phaser.Easing.Sinusoidal.InOut, true, 0, 3, true);
        };
        BoosterButton.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.onSelected.dispose();
            this.onSelected = null;
            this.onClick.dispose();
            this.onClick = null;
        };
        return BoosterButton;
    }(Phaser.Group));
    game.BoosterButton = BoosterButton;
})(game || (game = {}));
///<reference path='BoosterButton.ts' />
var game;
(function (game) {
    var BoostersPanel = /** @class */ (function (_super) {
        __extends(BoostersPanel, _super);
        function BoostersPanel(_game, parent) {
            var _this = _super.call(this, _game, parent, "boosters_panel") || this;
            _this.onBoosterSelected = new Phaser.Signal();
            _this.onBoosterCanceled = new Phaser.Signal();
            _this.addBack();
            _this.addGameOverBack();
            _this.addBoostersButtons();
            return _this;
        }
        BoostersPanel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "Panel_Back0000", this);
            this.back.tint = 0xF9B752;
            this.back.name = "simple_back";
        };
        BoostersPanel.prototype.addGameOverBack = function () {
            this.gameOverBack = this.game.add.image(0, 0, "interface", "Panel_Back0000", this);
            this.gameOverBack.tint = game.LevelGUI.GAME_OVER_COLOR;
            this.gameOverBack.visible = false;
            this.gameOverBack.name = "game_over_back";
        };
        BoostersPanel.prototype.addBoostersButtons = function () {
            var _this = this;
            var boosterTypes = [game.BoosterType.MAGNET, game.BoosterType.UNDO, game.BoosterType.REMOVE, game.BoosterType.SORT, game.BoosterType.UPGRADE];
            this.buttons = boosterTypes.map(function (type) {
                return new game.BoosterButton(_this.game, _this, type);
            });
            this.buttons.forEach(function (button) {
                button.onClick.add(_this.onBoosterButtonClick, _this);
                // button.onSelected.add(this.onBoosterButtonSelected, this);
            });
        };
        BoostersPanel.prototype.onBoosterButtonClick = function (button) {
            if (button.selected) {
                this.onBoosterCanceled.dispatch(button.boosterType);
            }
            else {
                this.game.audio.playSound("fancy_tap", 0.66);
                this.onBoosterSelected.dispatch(button.boosterType);
            }
        };
        BoostersPanel.prototype.onBoosterButtonSelected = function (button) {
            _.without(this.buttons, button).forEach(function (button) {
                button.deselect();
            });
        };
        BoostersPanel.prototype.updateData = function () {
            this.buttons.forEach(function (button) {
                button.updateData();
            });
        };
        BoostersPanel.prototype.resize = function (height) {
            this.back.width = game.Config.GAME_WIDTH;
            this.back.height = height;
            this.gameOverBack.width = this.back.width;
            this.gameOverBack.height = this.back.height;
            this.resizeButtons();
        };
        BoostersPanel.prototype.resizeButtons = function () {
            var _this = this;
            var buttonWidth = this.back.width / this.buttons.length;
            this.buttons.forEach(function (button, index) {
                button.resize(buttonWidth, _this.back.height);
                button.left = index * buttonWidth;
                button.centerY = _this.back.centerY;
            });
        };
        BoostersPanel.prototype.getButton = function (boosterType) {
            return _.find(this.buttons, { boosterType: boosterType });
        };
        BoostersPanel.prototype.enableInput = function () {
            this.ignoreChildInput = false;
            this.buttons.forEach(function (button) {
                button.ignoreChildInput = false;
            });
        };
        BoostersPanel.prototype.disableInput = function () {
            this.ignoreChildInput = true;
            this.buttons.forEach(function (button) {
                button.ignoreChildInput = true;
            });
        };
        BoostersPanel.prototype.disableButtonsExcept = function (exception) {
            this.buttons.forEach(function (button) {
                if (button !== exception) {
                    button.ignoreChildInput = true;
                }
            });
        };
        BoostersPanel.prototype.deselectAllButtons = function () {
            this.buttons.forEach(function (button) {
                button.deselect();
            });
        };
        BoostersPanel.prototype.setGameOverColors = function () {
            this.gameOverBack.visible = true;
            this.gameOverBack.alpha = 0;
            this.game.add.tween(this.gameOverBack).to({ alpha: 1 }, 450, Phaser.Easing.Cubic.Out, true);
            this.buttons.forEach(function (button) {
                button.setGameOverColors();
            });
        };
        BoostersPanel.prototype.setNormalColors = function () {
            var _this = this;
            this.game.add.tween(this.gameOverBack).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.gameOverBack.visible = false;
            });
            this.buttons.forEach(function (button) {
                button.setNormalColors();
            });
        };
        BoostersPanel.prototype.shakeButtons = function () {
            var _this = this;
            this.buttons.forEach(function (button) {
                var boostersNum = _this.game.boosters.getBooster(button.boosterType).num;
                if (boostersNum > 0) {
                    button.shake();
                }
            });
        };
        BoostersPanel.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.onBoosterSelected.dispose();
            this.onBoosterSelected = null;
            this.onBoosterCanceled.dispose();
            this.onBoosterCanceled = null;
        };
        return BoostersPanel;
    }(Phaser.Group));
    game.BoostersPanel = BoostersPanel;
})(game || (game = {}));
var game;
(function (game) {
    var BoosterHint = /** @class */ (function (_super) {
        __extends(BoosterHint, _super);
        function BoosterHint(_game, parent) {
            var _this = _super.call(this, _game, parent, "booster_hint") || this;
            _this.wasResized = false;
            _this.onCancel = new Phaser.Signal();
            _this.addBack();
            _this.addCancelButton();
            _this.addHintText();
            _this.alignText();
            _this.game.time.events.add(50, function () {
                _this.kill();
            }, _this);
            return _this;
        }
        BoosterHint.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "Panel_Back0000", this);
            this.back.width = game.Cell.WIDTH * game.Grid.COLUMNS;
            this.back.height = 100;
            this.back.tint = 0xF8A122;
        };
        BoosterHint.prototype.addCancelButton = function () {
            this.cancelButton = new game.SimpleButton(this.game, 0, 0, "interface", "Booster_Hint_Close0000", this);
            this.cancelButton.callback.add(this.onCancelButtonClick, this);
            this.cancelButton.centerX = this.back.left + this.back.width * 0.8;
            this.cancelButton.centerY = this.back.centerY;
        };
        BoosterHint.prototype.onCancelButtonClick = function () {
            this.onCancel.dispatch();
        };
        BoosterHint.prototype.addHintText = function () {
            var content = this.game.boosters.getBooster(game.BoosterType.MAGNET).hint;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 30,
                fill: "#ffffff",
                align: "center",
            };
            this.text = this.game.add.text(0, 0, content, style, this);
            this.text.anchor.set(0.5, 0.5);
            this.text.lineSpacing = -6;
            this.text.align = "center";
        };
        BoosterHint.prototype.alignText = function () {
            var left = this.back.left;
            var right = this.cancelButton.left;
            var width = right - left;
            var maxWidth = width * 0.85;
            var maxHeight = this.back.height * 0.85;
            this.text.scale.set(1);
            this.text.wordWrap = true;
            this.text.wordWrapWidth = maxWidth;
            if (this.text.width > maxWidth || this.text.height > maxHeight) {
                var scaleX = maxWidth / this.text.width;
                var scaleY = maxHeight / this.text.height;
                var scale = Math.min(scaleX, scaleY);
                this.text.scale.set(scale);
            }
            this.text.centerX = left + width / 2;
            this.text.centerY = this.back.centerY;
        };
        BoosterHint.prototype.updateContent = function (content) {
            this.text.setText(content);
            this.alignText();
        };
        BoosterHint.prototype.show = function () {
            this.game.tweens.removeFrom(this);
            this.visible = true;
            this.exists = true;
            this.alpha = 1;
            this.game.add.tween(this).from({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this).from({ y: "-10" }, 250, Phaser.Easing.Cubic.Out, true);
        };
        BoosterHint.prototype.hide = function () {
            var _this = this;
            this.game.add.tween(this).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.visible = false;
                _this.exists = false;
            });
        };
        BoosterHint.prototype.hideInstant = function () {
            this.visible = false;
            this.exists = false;
        };
        BoosterHint.prototype.resize = function (width, height) {
            this.back.width = width;
            this.back.height = height;
            this.cancelButton.right = this.back.right - 20;
            this.cancelButton.centerY = this.back.centerY;
            this.alignText();
        };
        BoosterHint.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.onCancel.dispose();
            this.onCancel = null;
        };
        return BoosterHint;
    }(Phaser.Group));
    game.BoosterHint = BoosterHint;
})(game || (game = {}));
///<reference path='../items/Item.ts' />
var game;
(function (game) {
    var HighscoreToast = /** @class */ (function (_super) {
        __extends(HighscoreToast, _super);
        function HighscoreToast(_game, parent) {
            var _this = _super.call(this, _game, parent, "highscore_toast") || this;
            _this.titleLines = _this.game.texts.texts['highscore_titles'];
            _this.addBack();
            _this.addShadow();
            _this.addTitle();
            _this.addSubtitle();
            _this.addRipples();
            return _this;
        }
        HighscoreToast.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "Highscore_Back0000", this);
            this.back.anchor.set(0.5, 0.5);
            this.back.tint = 0xEA3139;
        };
        HighscoreToast.prototype.addShadow = function () {
            this.shadow = this.game.add.image(0, 0, "interface", "Highscore_Back0000", this);
            this.shadow.alpha = 0.2;
            this.shadow.tint = this.back.tint;
            this.shadow.centerX = this.back.centerX;
            this.shadow.bottom = this.back.bottom + 8;
        };
        HighscoreToast.prototype.addTitle = function () {
            var content = this.game.rnd.pick(this.titleLines);
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 40,
                fill: "#ffffff",
                align: "center",
            };
            this.title = this.game.add.text(0, 0, content, style, this);
            this.title.anchor.set(0.5, 0.5);
            this.title.centerX = this.back.centerX;
            this.title.y = this.back.top + 32;
        };
        HighscoreToast.prototype.addSubtitle = function () {
            var content = this.game.texts.texts.highscore_subtitle;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 22,
                fill: "#ffffff",
                align: "center",
            };
            this.subtitle = this.game.add.text(0, 0, content, style, this);
            this.subtitle.anchor.set(0.5, 0.5);
            this.subtitle.centerX = this.back.centerX;
            this.subtitle.y = this.back.y + 24;
        };
        HighscoreToast.prototype.addRipples = function () {
            var _this = this;
            this.ripples = _.times(3, function (num) {
                var white = _this.game.add.image(0, 0, "interface", "Highscore_Back0000", _this);
                white.anchor.set(0.5, 0.5);
                white.visible = false;
                _this.sendToBack(white);
                return white;
            });
        };
        HighscoreToast.prototype.updateContent = function (item) {
            this.updateTitle(item.itemType);
            this.updateSubtitle(item.itemType);
            this.back.tint = game.Item.getBackColor(item.itemType);
            this.shadow.tint = game.Item.getBackColor(item.itemType);
        };
        HighscoreToast.prototype.updateTitle = function (itemType) {
            var newTextLine = (itemType === 12)
                ? this.game.texts.texts.highscore_title_12
                : this.game.rnd.pick(this.titleLines);
            this.title.setText(newTextLine);
            this.adjustTitleSize();
        };
        HighscoreToast.prototype.adjustTitleSize = function () {
            var maxWidth = this.back.width * 0.82;
            this.title.scale.set(1);
            this.title.scale.set(Math.min(1, maxWidth / this.title.width));
        };
        HighscoreToast.prototype.updateSubtitle = function (itemType) {
            this.subtitle.text = this.game.texts.texts.highscore_subtitle.replace("#", itemType.toString());
            // this.subtitle.scale.set(this.title.scale.x)
        };
        HighscoreToast.prototype.show = function () {
            this.revive();
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this.scale);
            this.scale.set(1.3);
            this.alpha = 0;
            this.game.add.tween(this.scale).to({ x: 1, y: 1 }, 800, Phaser.Easing.Bounce.Out, true);
            this.game.add.tween(this).to({ alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this).to({ y: "-14" }, 900, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            this.showRipples();
            this.game.time.events.removeBy(this.hide, this);
            this.game.time.events.add(3000, this.hide, this);
        };
        HighscoreToast.prototype.showRipples = function () {
            var _this = this;
            this.ripples.forEach(function (ripple, index) {
                ripple.visible = true;
                ripple.alpha = 0.66;
                ripple.scale.set(1);
                _this.game.tweens.removeFrom(ripple);
                _this.game.tweens.removeFrom(ripple.scale);
                var delay = 220 + 200 * index;
                var targetScale = 1.2;
                _this.game.add.tween(ripple).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true, delay);
                _this.game.add.tween(ripple.scale).to({
                    x: targetScale,
                    y: targetScale,
                }, 500, Phaser.Easing.Linear.None, true, delay);
            });
        };
        HighscoreToast.prototype.hide = function () {
            var _this = this;
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this.scale);
            this.game.add.tween(this.scale).to({ x: 0.66, y: 0.66 }, 330, Phaser.Easing.Back.In, true);
            this.game.add.tween(this).to({ alpha: 0 }, 130, Phaser.Easing.Cubic.Out, true, 200)
                .onComplete.addOnce(function () {
                _this.visible = false;
                _this.exists = false;
            });
        };
        HighscoreToast.prototype.destroy = function () {
            this.game.time.events.removeBy(this.hide, this);
            _super.prototype.destroy.call(this, true, false);
        };
        return HighscoreToast;
    }(Phaser.Group));
    game.HighscoreToast = HighscoreToast;
})(game || (game = {}));
///<reference path='../../../../types/phaser.comments.d.ts' />
///<reference path='../../../../gui/buttons/ComplexButton.ts' />
var game;
(function (game) {
    var GameOverButton = /** @class */ (function (_super) {
        __extends(GameOverButton, _super);
        function GameOverButton(_game, parent, textContent) {
            var _this = _super.call(this, _game, parent, "interface", "Game_Over_Button_Back0000") || this;
            _this.back.name = "game_over_button_" + _.snakeCase(textContent);
            _this.back.scale.set(1.1, 1);
            _this.addCustomText(textContent);
            _this.addWhite();
            return _this;
        }
        GameOverButton.prototype.addCustomText = function (textContent) {
            var style = {
                font: game.GameFonts.NUNITO_CSS,
                fontSize: 25,
                fontWeight: game.FontWeight.BOLD,
                fill: "#ffffff",
                align: "center",
            };
            this.addText(textContent, style);
            this.text.lineSpacing = -8;
            this.text.y += 2;
        };
        GameOverButton.prototype.addWhite = function () {
            this.white = this.game.add.image(0, 0, "interface", "Game_Over_Button_White0000", this);
            this.white.centerX = this.back.centerX;
            this.white.centerY = this.back.centerY;
            this.white.visible = false;
        };
        GameOverButton.prototype.enable = function () {
            this.enabled = true;
            this.alpha = 1;
        };
        GameOverButton.prototype.disable = function () {
            this.enabled = false;
            this.alpha = 0.66;
        };
        GameOverButton.prototype.highlight = function () {
            var _this = this;
            this.game.tweens.removeFrom(this.white);
            this.white.visible = true;
            this.white.alpha = 0;
            this.game.add.tween(this.white).to({ alpha: 0.33 }, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, 6, true)
                .onComplete.addOnce(function () {
                _this.white.visible = false;
            });
        };
        return GameOverButton;
    }(game.ComplexButton));
    game.GameOverButton = GameOverButton;
})(game || (game = {}));
var game;
(function (game) {
    var GameOverVideoButton = /** @class */ (function (_super) {
        __extends(GameOverVideoButton, _super);
        function GameOverVideoButton(_game, parent, textContent) {
            var _this = _super.call(this, _game, parent, textContent) || this;
            _this._wasUsed = false;
            _this.addVideoIcon();
            _this.alignText();
            return _this;
        }
        Object.defineProperty(GameOverVideoButton.prototype, "wasUsed", {
            get: function () {
                return this._wasUsed;
            },
            enumerable: false,
            configurable: true
        });
        GameOverVideoButton.prototype.addVideoIcon = function () {
            this.videoIcon = this.game.add.image(0, 0, "interface", "Video_Icon0000", this);
            this.videoIcon.anchor.set(0.5, 0.5);
            this.videoIcon.centerX = this.back.left + this.back.width * 0.23;
            this.videoIcon.centerY = this.back.centerY;
        };
        GameOverVideoButton.prototype.alignText = function () {
            var left = this.videoIcon.right;
            var right = this.back.right;
            var width = right - left;
            var maxWidth = width * 0.8;
            this.text.scale.set(1);
            this.text.scale.set(Math.min(1, maxWidth / this.text.width));
            this.text.centerX = left + width / 2;
        };
        GameOverVideoButton.prototype.markAsUsed = function () {
            this._wasUsed = true;
            this.disable();
        };
        return GameOverVideoButton;
    }(game.GameOverButton));
    game.GameOverVideoButton = GameOverVideoButton;
})(game || (game = {}));
///<reference path='GameOverButton.ts' />
///<reference path='GameOverVideoButton.ts' />
var game;
(function (game) {
    var GameOverGUI = /** @class */ (function (_super) {
        __extends(GameOverGUI, _super);
        function GameOverGUI(_game, parent) {
            var _this = _super.call(this, _game, parent, "game_over_gui") || this;
            _this.onShuffle = new Phaser.Signal();
            _this.onUndo = new Phaser.Signal();
            _this.onEndGame = new Phaser.Signal();
            _this.addBack();
            _this.addTitle();
            _this.addButtons();
            _this.bringToTop(_this.title);
            return _this;
        }
        GameOverGUI.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "Game_Over_Top_Panel0000", this);
        };
        GameOverGUI.prototype.addTitle = function () {
            var content = this.game.texts.texts['no_moves'];
            var style = {
                font: game.GameFonts.NUNITO_CSS,
                fontSize: 48,
                fontWeight: game.FontWeight.BOLD,
                fill: "#ffffff",
                align: "center",
            };
            this.title = this.game.add.text(0, 0, content, style, this);
            this.title.anchor.set(0.5, 0.5);
            this.title.centerX = this.back.centerX;
            this.title.top = this.back.top + 20;
        };
        GameOverGUI.prototype.alignTitle = function () {
            var maxWidth = this.back.width * 0.8;
            this.title.scale.set(1);
            if (this.title.width > maxWidth) {
                this.title.scale.set(maxWidth / this.title.width);
            }
            this.title.centerX = this.back.centerX;
            this.title.centerY = this.back.top + (this.buttonsGroup.top - this.back.top) / 2 + 4;
        };
        GameOverGUI.prototype.addButtons = function () {
            var shuffleContent = this.game.texts.texts['video_shuffle'];
            this.shuffleButton = new game.GameOverVideoButton(this.game, this, shuffleContent);
            this.shuffleButton.name = "SHUFFLE";
            this.shuffleButton.userData.signal = this.onShuffle;
            this.shuffleButton.callback.addOnce(this.onIncentiveButtonClick, this);
            var endGameContent = this.game.texts.texts['game_end'];
            this.endGameButton = new game.GameOverButton(this.game, this, endGameContent);
            this.buttons = [this.shuffleButton, this.endGameButton];
            this.buttonsGroup = this.game.add.group(this, "buttons");
            this.buttonsGroup.addMultiple(this.buttons, true);
            this.buttonsGroup.align(this.buttons.length, 1, 250, this.shuffleButton.height, Phaser.CENTER);
        };
        GameOverGUI.prototype.onIncentiveButtonClick = function (button) {
            this.game.poki.rewardedBreak("GameOver:ShuffleButton", {
                onSuccess: function () {
                    button.markAsUsed();
                    button.userData.signal.dispatch();
                },
            });
        };
        GameOverGUI.prototype.enableButtons = function () {
            this.buttons.forEach(function (button) {
                if (button instanceof game.GameOverVideoButton) {
                    if (button.wasUsed === false) {
                        button.enable();
                    }
                }
                else {
                    button.enable();
                }
            });
        };
        GameOverGUI.prototype.disableButtons = function () {
            this.buttons.forEach(function (button) {
                button.disable();
            });
        };
        GameOverGUI.prototype.show = function () {
            this.revive();
            this.alpha = 1;
            this.game.add.tween(this).from({ alpha: 0, y: "-30" }, 300, Phaser.Easing.Cubic.Out, true);
            this.title.visible = true;
            this.alignTitle();
            this.enableButtons();
            this.showButtons(150);
        };
        GameOverGUI.prototype.showButtons = function (initialDelay) {
            var _this = this;
            if (initialDelay === void 0) { initialDelay = 0; }
            this.buttons.forEach(function (button, index) {
                button.visible = true;
                // button.alpha = 1;
                button.scale.set(1);
                var delay = initialDelay + index * 100;
                _this.game.add.tween(button).from({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true, delay);
                _this.game.add.tween(button.scale).from({ x: 0.8, y: 0.8 }, 400, Phaser.Easing.Back.Out, true);
                // this.game.add.tween(button).from({y: "+10"}, 100, Phaser.Easing.Cubic.Out, true, delay);
            });
        };
        GameOverGUI.prototype.hide = function () {
            var _this = this;
            this.disableButtons();
            this.game.add.tween(this).to({ y: "-50", alpha: 0 }, 200, Phaser.Easing.Cubic.In, true)
                .onComplete.addOnce(function () {
                _this.visible = false;
                _this.exists = false;
            });
        };
        GameOverGUI.prototype.shake = function () {
            this.shakeText();
            this.shakeButtons();
        };
        GameOverGUI.prototype.shakeText = function () {
            this.game.tweens.removeFrom(this.title);
            this.title.x = this.back.centerX;
            this.game.add.tween(this.title).to({ x: "-14" }, 50, Phaser.Easing.Sinusoidal.InOut, true, 0, 6, true);
        };
        GameOverGUI.prototype.shakeButtons = function () {
            var _this = this;
            _.filter(this.buttons, { enabled: true, visible: true }).forEach(function (button, index) {
                var delay = index * 100;
                _this.game.tweens.removeFrom(button.scale);
                button.scale.set(1);
                _this.game.add.tween(button.scale).to({
                    x: 1.15,
                    y: 1.15,
                }, 200, Phaser.Easing.Sinusoidal.InOut, true, delay, 0, true);
            });
        };
        GameOverGUI.prototype.onBoosterSelected = function (boosterHint) {
            this.title.visible = false;
            this.buttons.forEach(function (button) {
                button.visible = false;
            });
            this.y = -1 * (this.height - boosterHint.height) + 5 * game.Config.ASSETS_SCALE;
        };
        GameOverGUI.prototype.onBoosterCancelled = function () {
            this.title.visible = true;
            this.buttons.forEach(function (button) {
                button.visible = true;
            });
            this.y = 0;
        };
        GameOverGUI.prototype.enableInput = function () {
            this.ignoreChildInput = false;
            this.buttons.forEach(function (button) {
                button.ignoreChildInput = false;
            });
        };
        GameOverGUI.prototype.disableInput = function () {
            this.ignoreChildInput = true;
            this.buttons.forEach(function (button) {
                button.ignoreChildInput = true;
            });
        };
        GameOverGUI.prototype.resize = function (width) {
            this.back.width = width;
            this.alignButtons();
            this.alignTitle();
        };
        GameOverGUI.prototype.alignButtons = function () {
            this.buttonsGroup.centerX = this.back.centerX;
            this.buttonsGroup.centerY = 120;
        };
        GameOverGUI.prototype.getButtonGlobalPosition = function (button) {
            return button.parent.toGlobal(button.position);
        };
        GameOverGUI.prototype.getSaveState = function () {
            return {
                shuffleUsed: this.shuffleButton.wasUsed,
            };
        };
        GameOverGUI.prototype.loadState = function (state) {
            if (state.shuffleUsed) {
                this.shuffleButton.markAsUsed();
            }
        };
        GameOverGUI.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.buttons = null;
            this.disposeSignals();
        };
        GameOverGUI.prototype.disposeSignals = function () {
            this.onShuffle.dispose();
            this.onShuffle = null;
            this.onUndo.dispose();
            this.onUndo = null;
            this.onEndGame.dispose();
            this.onEndGame = null;
        };
        return GameOverGUI;
    }(Phaser.Group));
    game.GameOverGUI = GameOverGUI;
})(game || (game = {}));
var game;
(function (game) {
    var GameOverTutorial = /** @class */ (function (_super) {
        __extends(GameOverTutorial, _super);
        function GameOverTutorial(_game, parent) {
            var _this = _super.call(this, _game, parent, "game_over_tutorial") || this;
            _this.currentTextLine = -1;
            _this.clicksNum = 0;
            _this.onComplete = new Phaser.Signal();
            _this.textLines = _this.game.texts.texts['game_over_tutorial'];
            _this.addBack();
            _this.addCentralText();
            _this.addHint();
            _this.addBottomPanelHint();
            _this.addButtonHint();
            _this.visible = false;
            _this.exists = false;
            return _this;
        }
        GameOverTutorial.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "white_rect0000", this);
            this.back.alpha = 0.66;
            this.back.tint = 0x1A237E;
        };
        GameOverTutorial.prototype.addCentralText = function () {
            var content = this.textLines[0];
            this.centralText = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_BOLD_BMP, content, 44, this);
            this.centralText.anchor.set(0.5, 0.5);
            this.centralText.align = "center";
        };
        GameOverTutorial.prototype.addHint = function () {
            var content = this.game.texts.texts['game_over_tutorial_hint'];
            this.textHint = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_BOLD_BMP, content, 40, this);
            this.textHint.anchor.set(0.5, 0.5);
            this.textHint.align = "center";
        };
        GameOverTutorial.prototype.addBottomPanelHint = function () {
            this.bottomPanelHint = this.game.add.image(0, 0, "interface", "Bottom_Panel_Hint0000", this);
            this.bottomPanelHint.anchor.set(0.5, 0.5);
            this.bottomPanelHint.visible = false;
        };
        GameOverTutorial.prototype.addButtonHint = function () {
            this.buttonHint = this.game.add.image(0, 0, "interface", "Button_Hint0000", this);
            this.buttonHint.anchor.set(0.5, 0.5);
            // this.buttonHint.alpha = 0;
            this.buttonHint.visible = false;
        };
        GameOverTutorial.prototype.show = function (gameOver) {
            this.visible = true;
            this.gameOver = gameOver;
            this.parent.addChildAt(this.back, 0);
            this.resizeBackground();
            this.showNextTextLine();
            this.animateHint();
            this.game.input.onDown.add(this.onInputDown, this);
        };
        GameOverTutorial.prototype.animateHint = function () {
            this.game.add.tween(this.textHint).to({ alpha: 0.5 }, 400, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        };
        GameOverTutorial.prototype.onInputDown = function () {
            switch (this.clicksNum++) {
                case 0:
                    this.hideTextHint();
                    this.showNextTextLine();
                    this.showBottomPanelHint();
                    break;
                case 1:
                    this.hideBottomPanelHint();
                    this.showNextTextLine();
                    this.showVideoButtonsHints();
                    break;
                case 2:
                    this.hideVideoButtonsHints();
                    this.showNextTextLine();
                    this.showEndGameButtonHint();
                    break;
                case 3:
                    this.hide();
                    break;
                default:
                    this.hide();
                    break;
            }
        };
        GameOverTutorial.prototype.showNextTextLine = function () {
            var textLine = this.textLines[++this.currentTextLine];
            if (textLine) {
                this.centralText.setText(textLine);
                this.game.tweens.removeFrom(this.centralText);
                this.game.tweens.removeFrom(this.centralText.scale);
                this.centralText.alpha = 1;
                this.centralText.scale.set(1);
                this.game.add.tween(this.centralText).to({ alpha: 1 }, 150, Phaser.Easing.Cubic.Out, true);
                this.game.add.tween(this.centralText.scale).to({ x: 1, y: 1 }, 330, Phaser.Easing.Cubic.Out, true);
            }
        };
        GameOverTutorial.prototype.showBottomPanelHint = function () {
            this.bottomPanelHint.visible = true;
            this.bottomPanelHint.alpha = 0.2;
            this.game.add.tween(this.bottomPanelHint).to({ alpha: 1 }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            this.bottomPanelHint.scale.set(1.5);
            this.game.add.tween(this.bottomPanelHint.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Cubic.Out, true);
        };
        GameOverTutorial.prototype.hideBottomPanelHint = function () {
            this.game.tweens.removeFrom(this.bottomPanelHint);
            this.game.tweens.removeFrom(this.bottomPanelHint.scale);
            this.bottomPanelHint.visible = false;
        };
        GameOverTutorial.prototype.showVideoButtonsHints = function () {
            var shuffleButtonPosition = this.gameOver.getButtonGlobalPosition(this.gameOver.shuffleButton);
            this.buttonHint.x = shuffleButtonPosition.x;
            this.buttonHint.y = shuffleButtonPosition.y;
            this.buttonHint.visible = true;
            this.buttonHint.alpha = 0.2;
            this.game.add.tween(this.buttonHint).to({ alpha: 1 }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            this.buttonHint.scale.set(1.5);
            this.game.add.tween(this.buttonHint.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Cubic.Out, true);
        };
        GameOverTutorial.prototype.hideVideoButtonsHints = function () {
            this.removeButtonHintTweens();
            this.buttonHint.visible = false;
        };
        GameOverTutorial.prototype.removeButtonHintTweens = function () {
            this.game.tweens.removeFrom(this.buttonHint);
            this.game.tweens.removeFrom(this.buttonHint.scale);
        };
        GameOverTutorial.prototype.showEndGameButtonHint = function () {
            var endGameButtonPosition = this.gameOver.getButtonGlobalPosition(this.gameOver.endGameButton);
            this.buttonHint.x = endGameButtonPosition.x;
            this.buttonHint.y = endGameButtonPosition.y;
            this.buttonHint.visible = true;
            this.buttonHint.alpha = 0.2;
            this.game.add.tween(this.buttonHint).to({ alpha: 1 }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            this.buttonHint.scale.set(1.5);
            this.game.add.tween(this.buttonHint.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Cubic.Out, true);
        };
        /*private hightlightGameOverButton(button:GameOverButton, buttonHint:Phaser.Image):void {
            let buttonPosition:PIXI.Point = this.gameOver.getButtonGlobalPosition(this.gameOver.endGameButton);
            buttonHint.x = buttonPosition.x;
            buttonHint.y = buttonPosition.y;
            buttonHint.visible = true;
            buttonHint.alpha = 0.2;
            this.game.add.tween(buttonHint).to({alpha: 1}, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            
            buttonHint.scale.set(1.5);
            this.game.add.tween(buttonHint.scale).to({x: 1, y: 1}, 500, Phaser.Easing.Cubic.Out, true);
        }*/
        GameOverTutorial.prototype.hide = function () {
            var _this = this;
            this.game.store.saveValue(game.GameStoreKey.GAME_OVER_TUTORIAL_COMPLETE, true);
            this.game.input.onDown.remove(this.onInputDown, this);
            this.removeButtonHintTweens();
            this.game.add.tween(this.back).to({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.back.visible = false;
            });
            this.game.add.tween(this).to({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.onHideComplete();
            });
        };
        GameOverTutorial.prototype.onHideComplete = function () {
            this.onComplete.dispatch();
            this.pendingDestroy = true;
        };
        GameOverTutorial.prototype.hideTextHint = function () {
            this.game.tweens.removeFrom(this.textHint);
            this.game.tweens.removeFrom(this.textHint.scale);
            this.textHint.visible = false;
        };
        GameOverTutorial.prototype.resize = function () {
            this.resizeBackground();
            this.centralText.maxWidth = game.Config.GAME_WIDTH * 0.8;
            this.centralText.centerX = game.Config.HALF_GAME_WIDTH;
            this.centralText.centerY = game.Config.HALF_GAME_HEIGHT;
            this.textHint.maxWidth = game.Config.GAME_WIDTH * 0.8;
            this.textHint.centerX = game.Config.HALF_GAME_WIDTH;
            this.textHint.y = game.Config.GAME_HEIGHT - 110 - this.textHint.height * 0.5 - 20;
            this.bottomPanelHint.x = game.Config.HALF_GAME_WIDTH;
            this.bottomPanelHint.y = game.Config.GAME_HEIGHT - this.bottomPanelHint.height * 0.5;
            this.buttonHint.x = game.Config.HALF_GAME_WIDTH;
            this.buttonHint.y = game.Config.GAME_HEIGHT - this.buttonHint.height * 0.5 + 16 * game.Config.ASSETS_SCALE;
        };
        GameOverTutorial.prototype.resizeBackground = function () {
            this.back.width = game.Config.GAME_WIDTH * 1.2;
            this.back.height = game.Config.GAME_HEIGHT * 1.2;
            this.back.centerX = game.Config.HALF_GAME_WIDTH;
            this.back.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        GameOverTutorial.prototype.destroy = function () {
            this.hideTextHint();
            _super.prototype.destroy.call(this, true, false);
            this.onComplete.dispose();
            this.onComplete = null;
            this.textLines = null;
        };
        return GameOverTutorial;
    }(Phaser.Group));
    game.GameOverTutorial = GameOverTutorial;
})(game || (game = {}));
///<reference path='SimpleButton.ts' />
///<reference path='../../types/phaser.comments.d.ts' />
var game;
(function (game_9) {
    var ToggleButtonState;
    (function (ToggleButtonState) {
        ToggleButtonState[ToggleButtonState["STATE_1"] = 0] = "STATE_1";
        ToggleButtonState[ToggleButtonState["STATE_2"] = 1] = "STATE_2";
    })(ToggleButtonState = game_9.ToggleButtonState || (game_9.ToggleButtonState = {}));
    var ToggleButton = /** @class */ (function (_super) {
        __extends(ToggleButton, _super);
        function ToggleButton(game, x, y, spritesheet, key1, key2, parent) {
            var _this = _super.call(this, game, x, y, spritesheet, key1, parent) || this;
            _this.spriteSheet = spritesheet;
            _this.textureKey1 = key1;
            _this.textureKey2 = key2;
            _this._buttonState = ToggleButtonState.STATE_1;
            _this.events.onInputDown.add(_this.switchTextures, _this);
            return _this;
        }
        ToggleButton.prototype.switchTextures = function () {
            this.buttonState = (this._buttonState === ToggleButtonState.STATE_1)
                ? ToggleButtonState.STATE_2
                : ToggleButtonState.STATE_1;
        };
        Object.defineProperty(ToggleButton.prototype, "buttonState", {
            get: function () {
                return this._buttonState;
            },
            set: function (value) {
                this._buttonState = value;
                this.frameName = (this._buttonState === ToggleButtonState.STATE_1)
                    ? this.textureKey1
                    : this.textureKey2;
            },
            enumerable: false,
            configurable: true
        });
        return ToggleButton;
    }(game.SimpleButton));
    game_9.ToggleButton = ToggleButton;
})(game || (game = {}));
var game;
(function (game) {
    var Checkbox = /** @class */ (function (_super) {
        __extends(Checkbox, _super);
        function Checkbox(_game, parent, text, props) {
            var _this = _super.call(this, _game, parent, "checkbox") || this;
            _this._checked = true;
            _this.onChange = new Phaser.Signal();
            _this.props = props;
            _this.addCheck();
            _this.addLabel(text);
            _this.onChildInputDown.add(_this.onClick, _this);
            return _this;
        }
        Object.defineProperty(Checkbox.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (value) {
                this._checked = value;
                (this._checked)
                    ? this.setChecked()
                    : this.setUnchecked();
            },
            enumerable: false,
            configurable: true
        });
        Checkbox.prototype.addCheck = function () {
            this.check = this.game.add.image(0, 0, this.props.textureKey, this.props.onFrame, this);
            this.check.anchor.set(0.5, 0.5);
            this.check.inputEnabled = true;
            this.check.input.useHandCursor = true;
        };
        Checkbox.prototype.addLabel = function (labelContent) {
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.NORMAL,
                fontSize: 32,
                fill: "#ffffff",
                align: "left",
            };
            this.label = this.game.add.text(0, 0, labelContent, style, this);
            this.label.anchor.set(0, 0.5);
            this.label.x = this.check.right + 8;
            this.label.centerY = this.check.centerY + 1;
            this.label.data.originalX = this.label.x;
            this.label.inputEnabled = true;
            this.label.input.useHandCursor = true;
            this.label.hitArea = new Phaser.Rectangle(0, -this.label.height / 2, this.label.width, this.label.height);
            // this.label.hitArea = this.label.getBounds(this.game.world);
        };
        Checkbox.prototype.onClick = function () {
            if (this._checked) {
                this.setUnchecked();
            }
            else {
                this.setChecked();
            }
        };
        Checkbox.prototype.setChecked = function () {
            this._checked = true;
            this.check.frameName = this.props.onFrame;
            this.playTweens();
            this.playClickSound();
            this.onChange.dispatch(this);
        };
        Checkbox.prototype.setUnchecked = function () {
            this._checked = false;
            this.check.frameName = this.props.offFrame;
            this.playTweens();
            this.playClickSound();
            this.onChange.dispatch(this);
        };
        Checkbox.prototype.playClickSound = function () {
            this.game.audio.playClickSound(0.5);
        };
        Checkbox.prototype.playTweens = function () {
            // this.game.tweens.removeFrom(this.check.scale);
            // this.check.scale.set(1);
            // let scale = 1.1;
            // this.game.add.tween(this.check.scale).to({x: scale, y: scale}, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
            this.game.tweens.removeFrom(this.label);
            this.label.x = this.label.data.originalX;
            this.game.add.tween(this.label).to({ x: "+8" }, 150, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
        };
        Checkbox.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.onChange.dispose();
            this.onChange = null;
        };
        return Checkbox;
    }(Phaser.Group));
    game.Checkbox = Checkbox;
})(game || (game = {}));
var game;
(function (game) {
    var ExitConfirmPopup = /** @class */ (function (_super) {
        __extends(ExitConfirmPopup, _super);
        function ExitConfirmPopup(_game, parent) {
            var _this = _super.call(this, _game, parent, "exit_confirm_screen") || this;
            _this.addBackdrop();
            _this.addBack();
            _this.addTitle();
            _this.addSubtitle();
            _this.addButtons();
            _this.alignSubtitle();
            return _this;
        }
        ExitConfirmPopup.prototype.addBackdrop = function () {
            this.backdrop = this.game.add.image(0, 0, "interface", "white_rect0000", this);
            this.backdrop.tint = 0x1A237E;
            this.backdrop.alpha = 0.5;
            this.backdrop.inputEnabled = true;
        };
        ExitConfirmPopup.prototype.addBack = function () {
            this.window = this.game.add.group(this, "popup");
            this.windowBack = this.game.add.image(0, 0, "interface", "Modal_Back0000", this.window);
            this.windowBack.anchor.set(0.5, 0.5);
        };
        ExitConfirmPopup.prototype.addTitle = function () {
            var content = this.game.texts.texts.quit_popup_title;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 40,
                fill: "#FF9933",
                align: "center",
            };
            this.title = this.game.add.text(0, 0, content, style, this.window);
            this.title.anchor.set(0.5, 0.5);
            this.title.centerX = this.windowBack.centerX;
            this.title.top = this.windowBack.top + 25;
        };
        ExitConfirmPopup.prototype.addSubtitle = function () {
            var content = this.game.texts.texts.progress_lost_warinig;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.NORMAL,
                fontSize: 28,
                fill: "#FF9933",
                align: "center",
            };
            this.subtitle = this.game.add.text(0, 0, content, style, this.window);
            this.subtitle.anchor.set(0.5, 0.5);
            this.subtitle.wordWrap = true;
            this.subtitle.wordWrapWidth = this.windowBack.width * 0.85;
            this.subtitle.lineSpacing = -8;
            this.subtitle.centerX = this.windowBack.centerX;
        };
        ExitConfirmPopup.prototype.addButtons = function () {
            var dx = 90 * game.Config.ASSETS_SCALE;
            var y = 160 * game.Config.ASSETS_SCALE;
            this.noButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_No0000", this.window);
            this.noButton.x = this.windowBack.centerX - dx;
            this.noButton.top = this.windowBack.top + y;
            this.noButton.callback.add(this.onNoButtonClick, this);
            this.yesButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_Yes0000", this.window);
            this.yesButton.x = this.windowBack.centerX + dx;
            this.yesButton.top = this.windowBack.top + y;
            // this.yesButton.callback.addOnce(this.onYesButtonClick, this);
            this.buttons = [this.noButton, this.yesButton];
        };
        ExitConfirmPopup.prototype.alignButtons = function () {
            var top = this.subtitle.bottom;
            var bottom = this.windowBack.bottom;
            var height = bottom - top;
            this.buttons.forEach(function (button, index) {
                button.y = top + height / 2;
            });
        };
        ExitConfirmPopup.prototype.alignSubtitle = function () {
            var top = this.title.bottom - 12;
            var bottom = this.yesButton.top;
            var height = bottom - top;
            this.subtitle.y = top + height / 2;
        };
        ExitConfirmPopup.prototype.onNoButtonClick = function () {
            this.disableButtons();
            this.hide();
        };
        ExitConfirmPopup.prototype.onYesButtonClick = function () {
            this.disableButtons();
            this.game.changeState("BoostersShop");
        };
        ExitConfirmPopup.prototype.enableButtons = function () {
            this.buttons.forEach(function (button) {
                button.enabled = true;
            });
        };
        ExitConfirmPopup.prototype.disableButtons = function () {
            this.buttons.forEach(function (button) {
                button.enabled = false;
            });
        };
        ExitConfirmPopup.prototype.updateContent = function (titleContent, subtitleContent) {
            this.title.text = titleContent;
            this.subtitle.text = subtitleContent;
        };
        ExitConfirmPopup.prototype.show = function () {
            this.visible = true;
            this.exists = true;
            this.enableButtons();
            this.alpha = 1;
            this.game.add.tween(this.backdrop).from({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true);
            var delay = 0;
            this.game.add.tween(this.window).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.window.scale).from({ x: 0.8, y: 0.8 }, 400, Phaser.Easing.Back.Out, true, delay);
            /*[this.title, this.subtitle, ...this.buttons].forEach((child, index) => {
                let delay_2:number = 100 + index * 50;
                this.game.add.tween(child).from({alpha: 0}, 100, Phaser.Easing.Cubic.Out, true, delay_2);
                this.game.add.tween(child.scale).from({x: 0.8, y: 0.8}, 400, Phaser.Easing.Back.Out, true, delay_2);
            });*/
        };
        ExitConfirmPopup.prototype.hide = function () {
            var _this = this;
            this.yesButton.callback.removeAll();
            this.game.add.tween(this).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.visible = false;
                _this.exists = false;
            });
        };
        ExitConfirmPopup.prototype.resize = function () {
            this.resizeBackdrop();
            this.alignWindow();
        };
        ExitConfirmPopup.prototype.resizeBackdrop = function () {
            this.backdrop.width = game.Config.GAME_WIDTH * 1.2;
            this.backdrop.height = game.Config.GAME_HEIGHT * 1.2;
            this.backdrop.centerX = game.Config.HALF_GAME_WIDTH;
            this.backdrop.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        ExitConfirmPopup.prototype.alignWindow = function () {
            this.window.centerX = game.Config.HALF_GAME_WIDTH;
            this.window.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        ExitConfirmPopup.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return ExitConfirmPopup;
    }(Phaser.Group));
    game.ExitConfirmPopup = ExitConfirmPopup;
})(game || (game = {}));
///<reference path="../../../../gui/buttons/SimpleButton.ts"/>
///<reference path="../../../../gui/buttons/ToggleButton.ts"/>
///<reference path="../../../../gui/Checkbox.ts"/>
///<reference path='ExitConfirmPopup.ts' />
var game;
(function (game) {
    var PauseScreen = /** @class */ (function (_super) {
        __extends(PauseScreen, _super);
        function PauseScreen(_game, parent) {
            var _this = _super.call(this, _game, parent, "pause_screen") || this;
            _this.onShow = new Phaser.Signal();
            _this.onHide = new Phaser.Signal();
            _this.level = _this.game.state.getCurrentState();
            _this.addBackground();
            _this.addMainGroup();
            _this.addResumeButton();
            _this.addMiddleButtons();
            _this.addCheckboxes();
            _this.updateCheckboxes();
            _this.addBuildInfo();
            _this.addConfirmExitPopup();
            return _this;
        }
        PauseScreen.prototype.addBackground = function () {
            this.background = this.game.add.image(0, 0, "interface", "white_rect0000", this);
            this.background.inputEnabled = true;
            this.background.tint = 0xFFF3E0;
            this.background.anchor.set(0.5, 0.5);
            this.background.name = "pause_screen_back";
        };
        PauseScreen.prototype.addMainGroup = function () {
            this.mainGroup = this.game.add.group(this, "main_group");
        };
        PauseScreen.prototype.addResumeButton = function () {
            this.resumeButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_Resume0000", this.mainGroup);
        };
        PauseScreen.prototype.addMiddleButtons = function () {
            this.homeButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_Home0000");
            this.homeButton.callback.add(this.onHomeButtonClick, this);
            this.restartButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_Restart0000");
            this.restartButton.callback.add(this.onRestartButtonClick, this);
            this.soundButton = new game.ToggleButton(this.game, 0, 0, "interface", "Button_Sound_On0000", "Button_Sound_Off0000");
            this.soundButton.callback.add(this.onSoundButtonClick, this);
            this.updateSoundButtonState();
            this.middleButtons = this.game.add.group(this.mainGroup, "middle_buttons");
            this.middleButtons.addMultiple([this.homeButton, this.restartButton, this.soundButton], true);
            this.middleButtons.align(3, 1, 150, 100, Phaser.CENTER);
        };
        PauseScreen.prototype.onHomeButtonClick = function () {
            if (this.showConfirmExitPopup()) {
                var title = this.game.texts.texts.quit_popup_title;
                var subtitle = this.game.texts.texts.progress_lost_warinig;
                this.confirmExitPopup.updateContent(title, subtitle);
                this.confirmExitPopup.yesButton.callback.addOnce(this.switchToBoosterShop, this);
                this.confirmExitPopup.show();
            }
            else {
                this.switchToBoosterShop();
            }
        };
        PauseScreen.prototype.switchToBoosterShop = function () {
            var _this = this;
            this.game.poki.commercialBreak("PauseScreen:Quit")
                .finally(function () {
                _this.game.changeState("BoostersShop");
            });
        };
        PauseScreen.prototype.onRestartButtonClick = function () {
            var showPopup = this.showConfirmExitPopup() === false;
            if (showPopup) {
                this.restartLevel();
                return;
            }
            var title = this.game.texts.texts.restart_popup_title;
            var subtitle = this.game.texts.texts.progress_lost_warinig;
            this.confirmExitPopup.updateContent(title, subtitle);
            this.confirmExitPopup.yesButton.callback.addOnce(this.restartLevel, this);
            this.confirmExitPopup.show();
        };
        PauseScreen.prototype.restartLevel = function () {
            var _this = this;
            this.game.poki.commercialBreak("PauseScreen:Restart").finally(function () {
                _this.game.changeState("Level");
            });
        };
        PauseScreen.prototype.showConfirmExitPopup = function () {
            return this.level.levelStats.moves > 3;
        };
        PauseScreen.prototype.onSoundButtonClick = function () {
            this.game.audio.soundMute = !this.game.audio.soundMute;
        };
        PauseScreen.prototype.addCheckboxes = function () {
            var props = {
                textureKey: "interface",
                onFrame: "Checkbox0001",
                offFrame: "Checkbox0000",
            };
            var headstartText = this.game.texts.texts["headstart_popup_cb"];
            this.headstartCheckbox = new game.Checkbox(this.game, this, headstartText, props);
            this.headstartCheckbox.onChange.add(this.onHeadstartCbChanged, this);
            this.headstartCheckbox.label.tint = 0xFF9933;
            this.headstartCheckbox.name = "headstart_checkbox";
            var doubleCoinsText = this.game.texts.texts["coinsx2_popup_cb"];
            this.doubleCoinsCheckbox = new game.Checkbox(this.game, this, doubleCoinsText, props);
            this.doubleCoinsCheckbox.onChange.add(this.onDoubleCoinsCbChanged, this);
            this.doubleCoinsCheckbox.label.tint = 0xFF9933;
            this.doubleCoinsCheckbox.name = "double_coins_checkbox";
            this.doubleCoinsCheckbox.kill();
            var cbsArray = [this.headstartCheckbox, this.doubleCoinsCheckbox];
            this.checkboxes = this.game.add.group(this.mainGroup, "checkboxes");
            this.checkboxes.addMultiple(cbsArray, true);
            this.checkboxes.align(1, cbsArray.length, game.Config.GAME_WIDTH, 80, Phaser.LEFT_CENTER);
        };
        PauseScreen.prototype.onHeadstartCbChanged = function (checkbox) {
            this.game.store.saveValue(game.GameStoreKey.HEADSTART_POPUP_DSIABLED, !checkbox.checked);
        };
        PauseScreen.prototype.onDoubleCoinsCbChanged = function (checkbox) {
            this.game.store.saveValue(game.GameStoreKey.COINSx2_POPUP_DSIABLED, !checkbox.checked);
        };
        PauseScreen.prototype.resize = function () {
            this.resizeBackground();
            this.resumeButton.centerX = game.Config.HALF_GAME_WIDTH;
            this.resumeButton.top = 0;
            this.middleButtons.centerX = game.Config.HALF_GAME_WIDTH;
            this.middleButtons.top = this.resumeButton.bottom + 40;
            this.checkboxes.centerX = game.Config.HALF_GAME_WIDTH;
            this.checkboxes.top = this.middleButtons.bottom + 45;
            this.mainGroup.centerX = game.Config.HALF_GAME_WIDTH;
            this.mainGroup.centerY = game.Config.HALF_GAME_HEIGHT;
            this.buildInfo.centerX = game.Config.HALF_GAME_WIDTH;
            this.buildInfo.bottom = game.Config.GAME_HEIGHT - 20;
            this.confirmExitPopup.resize();
        };
        PauseScreen.prototype.resizeBackground = function () {
            this.background.width = game.Config.GAME_WIDTH * 1.25;
            this.background.height = game.Config.GAME_HEIGHT * 1.25;
            this.background.centerX = game.Config.HALF_GAME_WIDTH;
            this.background.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        PauseScreen.prototype.show = function () {
            var _this = this;
            this.revive();
            this.updateCheckboxes();
            this.updateSoundButtonState();
            this.onShow.dispatch(this);
            this.game.tweens.removeFrom(this);
            this.alpha = 1;
            this.background.alpha = 0;
            this.game.add.tween(this.background).to({ alpha: 1 }, 100, Phaser.Easing.Cubic.Out, true);
            __spreadArrays([this.resumeButton], this.middleButtons.children).forEach(function (child, index) {
                _this.game.add.tween(child).from({ alpha: 0, y: "+20" }, 150, Phaser.Easing.Cubic.Out, true, index * 66);
            });
            [this.headstartCheckbox, this.doubleCoinsCheckbox].forEach(function (cb, index) {
                _this.game.add.tween(cb).from({
                    x: "+20",
                    alpha: 0,
                }, 150, Phaser.Easing.Cubic.Out, true, 100 + index * 66);
            });
        };
        PauseScreen.prototype.updateSoundButtonState = function () {
            this.soundButton.buttonState = this.game.sound.mute ? game.ToggleButtonState.STATE_2 : game.ToggleButtonState.STATE_1;
        };
        PauseScreen.prototype.updateCheckboxes = function () {
            var store = this.game.store;
            this.headstartCheckbox.checked = store.getBoolean(game.GameStoreKey.HEADSTART_POPUP_DSIABLED) === false;
            this.doubleCoinsCheckbox.checked = store.getBoolean(game.GameStoreKey.COINSx2_POPUP_DSIABLED) === false;
        };
        PauseScreen.prototype.addBuildInfo = function () {
            var _this = this;
            var buildVersion = window.game.config.build_version;
            var buildDate = window.game.config.build_time;
            var content = "Build #" + buildVersion + "\n" + buildDate;
            this.buildInfo = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_REGULAR_BMP, content, 30, this);
            this.buildInfo.align = "center";
            this.buildInfo.anchor.set(0.5, 1);
            this.buildInfo.tint = 0xFF9933;
            this.buildInfo.alpha = 0;
            this.buildInfo.inputEnabled = true;
            this.buildInfo.hitArea = this.buildInfo.getBounds(this);
            this.buildInfo.events.onInputDown.add(function () {
                _this.buildInfo.alpha = (_this.buildInfo.alpha === 0) ? 1 : 0;
            });
        };
        PauseScreen.prototype.addConfirmExitPopup = function () {
            this.confirmExitPopup = new game.ExitConfirmPopup(this.game, this);
            this.confirmExitPopup.kill();
        };
        PauseScreen.prototype.hide = function () {
            var _this = this;
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).to({ alpha: 0 }, 100, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.onHide.dispatch(_this);
                _this.visible = false;
                _this.exists = false;
            });
        };
        PauseScreen.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return PauseScreen;
    }(Phaser.Group));
    game.PauseScreen = PauseScreen;
})(game || (game = {}));
///<reference path='../Checkbox.ts' />
var game;
(function (game) {
    var ComplexPopup = /** @class */ (function (_super) {
        __extends(ComplexPopup, _super);
        function ComplexPopup(_game, parent) {
            var _this = _super.call(this, _game, parent, "popup") || this;
            _this.hiding = false;
            _this.onShow = new Phaser.Signal();
            _this.onHide = new Phaser.Signal();
            _this.onRewardedAdComplete = new Phaser.Signal();
            _this.addBackdrop();
            _this.addWindow();
            _this.addTitle();
            _this.addMainText();
            _this.addContent();
            _this.addButtons();
            _this.addCheckbox();
            _this.alignContent();
            _this.kill();
            return _this;
        }
        ComplexPopup.prototype.addBackdrop = function () {
            this.backdrop = this.game.add.image(0, 0, "interface", "white_rect0000", this);
            this.backdrop.anchor.set(0.5, 0.5);
            this.backdrop.alpha = 0.5;
            this.backdrop.tint = 0x1A237E;
            this.backdrop.inputEnabled = true;
        };
        ComplexPopup.prototype.addWindow = function () {
            this.window = this.game.add.group(this, "container");
            this.windowBack = this.game.add.image(0, 0, "interface", "Popup_Back0000", this.window);
            this.windowBack.anchor.set(0.5, 0.5);
        };
        ComplexPopup.prototype.addTitle = function () {
            this.titleBack = this.game.add.image(0, 0, "interface", "Popup_Title_Back0000", this.window);
            this.titleBack.centerX = this.windowBack.centerX;
            this.titleBack.top = this.windowBack.top + 40;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 44,
                fill: "#ffffff",
                align: "center",
            };
            this.title = this.game.add.text(0, 0, "Title", style, this.window);
            this.title.anchor.set(0.5, 0.5);
            this.title.centerX = this.titleBack.centerX;
            this.title.centerY = this.titleBack.centerY;
        };
        ComplexPopup.prototype.addMainText = function () {
            var content = "Some multiline\ncontent?!?!";
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.NORMAL,
                fontSize: 30,
                fill: "#F89932",
                align: "center",
            };
            this.mainText = this.game.add.text(0, 0, content, style, this.window);
            this.mainText.anchor.set(0.5, 0.5);
            this.mainText.lineSpacing = -8;
            this.mainText.wordWrap = true;
            this.mainText.wordWrapWidth = this.windowBack.width * 0.9;
            this.mainText.x = this.windowBack.centerX;
            this.mainText.top = this.windowBack.top + 130;
        };
        ComplexPopup.prototype.addContent = function () {
            this.content = this.game.add.image(0, 0, "interface", "Headstart_Popup_Content0000", this.window);
            this.content.anchor.set(0.5, 0.5);
            this.content.centerX = this.windowBack.centerX;
            this.content.top = this.mainText.bottom + 10;
        };
        ComplexPopup.prototype.addButtons = function () {
            var dx = 90;
            var buttonY = this.windowBack.top + 410;
            this.noButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_No0000", this.window);
            this.noButton.x = this.windowBack.centerX - dx;
            this.noButton.y = buttonY;
            this.noButton.callback.addOnce(this.hide, this);
            this.yesButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_Yes0000", this.window);
            this.yesButton.x = this.windowBack.centerX + dx;
            this.yesButton.y = buttonY;
            // this.yesButton.callback.addOnce(this.hide, this);
        };
        ComplexPopup.prototype.addCheckbox = function () {
            var title = this.game.texts.texts['dont_ask_cb'];
            this.checkbox = new game.Checkbox(this.game, this.window, title, {
                textureKey: "interface",
                onFrame: "Checkbox0001",
                offFrame: "Checkbox0000",
            });
            this.checkbox.checked = this.game.store.getBoolean(game.GameStoreKey.HEADSTART_POPUP_DSIABLED);
            this.checkbox.centerX = this.windowBack.centerX;
            this.checkbox.centerY = this.yesButton.bottom + (this.windowBack.bottom - this.yesButton.bottom) / 2;
            this.checkbox.label.tint = 0xFF9933;
        };
        ComplexPopup.prototype.alignContent = function () {
            var top = this.mainText.bottom;
            var bottom = this.noButton.top;
            var height = bottom - top;
            this.content.centerX = this.windowBack.centerX;
            this.content.centerY = top + height / 2;
        };
        ComplexPopup.prototype.show = function () {
            this.parent.bringToTop(this);
            this.revive();
            this.showBackdrop();
            this.showWindow(250);
        };
        ComplexPopup.prototype.showBackdrop = function () {
            this.backdrop.alpha = 0;
            this.game.add.tween(this.backdrop).to({ alpha: 0.66 }, 500, Phaser.Easing.Cubic.Out, true);
        };
        ComplexPopup.prototype.showWindow = function (delay) {
            var _this = this;
            this.alignWindow();
            this.game.add.tween(this.window).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.window).from({ y: "+60" }, 600, Phaser.Easing.Back.Out, true, delay);
            this.window.scale.set(0.8);
            var scaleTween = this.game.add.tween(this.window.scale).to({
                x: 1,
                y: 1,
            }, 400, Phaser.Easing.Back.Out, true, delay);
            scaleTween.onStart.addOnce(function () {
                _this.game.sound.play('popup', 0.33);
            });
            scaleTween.onComplete.addOnce(function () {
                _this.animateYesButton();
            });
        };
        ComplexPopup.prototype.animateYesButton = function () {
            var scale = 1.15;
            this.game.add.tween(this.yesButton.scale).to({
                x: scale,
                y: scale,
            }, 440, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        };
        ComplexPopup.prototype.hide = function () {
            var _this = this;
            if (this.hiding) {
                return;
            }
            this.hiding = true;
            this.disableInput();
            this.game.add.tween(this).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.onHideComplete();
            });
        };
        ComplexPopup.prototype.disableInput = function () {
            [this.noButton, this.yesButton].forEach(function (button) {
                button.enabled = false;
            });
            this.checkbox.ignoreChildInput = true;
        };
        ComplexPopup.prototype.onHideComplete = function () {
            this.onHide.dispatch();
            this.visible = false;
            this.pendingDestroy = true;
        };
        ComplexPopup.prototype.resize = function () {
            this.resizeBackground();
            this.alignWindow();
        };
        ComplexPopup.prototype.resizeBackground = function () {
            this.backdrop.width = game.Config.GAME_WIDTH * 1.2;
            this.backdrop.height = game.Config.GAME_HEIGHT * 1.2;
            this.backdrop.centerX = game.Config.HALF_GAME_WIDTH;
            this.backdrop.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        ComplexPopup.prototype.alignWindow = function () {
            this.window.centerX = game.Config.HALF_GAME_WIDTH;
            this.window.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        ComplexPopup.prototype.showRewardedVideo = function (placement) {
            this.game.poki.rewardedBreak(placement, {
                onSuccess: this.onRewardedAdCompleteCallback.bind(this),
            });
        };
        ComplexPopup.prototype.onRewardedAdCompleteCallback = function () {
            this.onRewardedAdComplete.dispatch(this);
            this.hide();
        };
        ComplexPopup.prototype.onRewardedAdFail = function () {
            this.game.toast.showRewardedVideoWarning();
            this.hide();
        };
        ComplexPopup.prototype.destroy = function () {
            this.game.tweens.removeFrom(this.yesButton.scale);
            _super.prototype.destroy.call(this, true, false);
            this.onShow.dispose();
            this.onShow = null;
            this.onHide.dispose();
            this.onHide = null;
            this.onRewardedAdComplete.dispose();
            this.onRewardedAdComplete = null;
        };
        return ComplexPopup;
    }(Phaser.Group));
    game.ComplexPopup = ComplexPopup;
})(game || (game = {}));
///<reference path='ComplexPopup.ts' />
var game;
(function (game) {
    var HeadstartPopup = /** @class */ (function (_super) {
        __extends(HeadstartPopup, _super);
        function HeadstartPopup(_game, parent) {
            var _this = _super.call(this, _game, parent) || this;
            _this.name = "headstart_popup";
            _this.backdrop.name = "headstart_popup_back";
            var titleContent = _this.game.texts.texts['headstart_popup_title'];
            _this.title.setText(titleContent);
            var mainTextContent = _this.game.texts.texts.headstart_popup_message;
            _this.mainText.setText(mainTextContent);
            _this.content.frameName = "Headstart_Popup_Content0000";
            _this.alignContent();
            _this.yesButton.callback.addOnce(_this.showRewardedVideo.bind(_this, "HeadstartPopup"));
            _this.checkbox.checked = _this.game.store.getBoolean(game.GameStoreKey.HEADSTART_POPUP_DSIABLED);
            _this.checkbox.onChange.add(_this.onCheckboxChanged, _this);
            return _this;
        }
        HeadstartPopup.prototype.onCheckboxChanged = function () {
            this.game.store.saveValue(game.GameStoreKey.HEADSTART_POPUP_DSIABLED, this.checkbox.checked);
        };
        return HeadstartPopup;
    }(game.ComplexPopup));
    game.HeadstartPopup = HeadstartPopup;
})(game || (game = {}));
///<reference path='LevelTopPanel.ts' />
///<reference path='freeBoosters/FreeBoostersPopover.ts' />
///<reference path='boostersPanel/BoostersPanel.ts' />
///<reference path='boostersPanel/BoosterHint.ts' />
///<reference path='HighscoreToast.ts' />
///<reference path='gameOver/GameOverGUI.ts' />
///<reference path='gameOver/GameOverTutorial.ts' />
///<reference path='pauseScreen/PauseScreen.ts' />
///<reference path='freeBoosters/FreeBoostersPopover.ts' />
///<reference path='../../../gui/popups/HeadstartPopup.ts' />
var game;
(function (game) {
    var LevelGUI = /** @class */ (function (_super) {
        __extends(LevelGUI, _super);
        function LevelGUI(_game, parent, level) {
            var _this = _super.call(this, _game, parent, "level_gui") || this;
            _this.level = level;
            _this.grid = _this.level.grid;
            _this.onUndoSelected = new Phaser.Signal();
            _this.onBoosterSelected = new Phaser.Signal();
            _this.onBoosterCancelled = new Phaser.Signal();
            _this.addTopPanel();
            _this.addFreeBoostersPopover();
            _this.addBoostersPanel();
            _this.addHighscoreToast();
            _this.addGameOver();
            _this.addBoosterHint();
            _this.addPauseScreen();
            _this.addRestartOverlay();
            return _this;
        }
        LevelGUI.prototype.addTopPanel = function () {
            this.topPanel = new game.LevelTopPanel(this.game, this);
            this.topPanel.boostersButton.callback.add(this.toggleFreeBoosters, this);
        };
        LevelGUI.prototype.toggleFreeBoosters = function () {
            if (this.freeBoostersPopover.visible) {
                this.hideFreeBoostersPopover();
            }
            else {
                this.showFreeBoostersPopover();
            }
        };
        LevelGUI.prototype.hideFreeBoostersPopover = function () {
            this.level.pointerEnabled = true;
            this.pauseButton.enabled = true;
            this.pauseButton.alpha = 1;
            this.boostersPanel.enableInput();
            this.freeBoostersPopover.hide();
        };
        LevelGUI.prototype.showFreeBoostersPopover = function () {
            this.level.pointerEnabled = false;
            this.level.pointerDown = false;
            this.pauseButton.enabled = false;
            this.pauseButton.alpha = LevelGUI.DISABLED_BUTTON_ALPHA;
            this.boostersPanel.disableInput();
            this.freeBoostersPopover.x = this.topPanel.boostersButton.x;
            this.freeBoostersPopover.y = this.topPanel.boostersButton.bottom - 4;
            this.freeBoostersPopover.show();
        };
        LevelGUI.prototype.addFreeBoostersPopover = function () {
            this.freeBoostersPopover = new game.FreeBoostersPopover(this.game, this);
            this.freeBoostersPopover.onBoosterRewarded.add(this.onFreeBoosterEarned, this);
            this.freeBoostersPopover.kill();
        };
        LevelGUI.prototype.onFreeBoosterEarned = function (boosterType, boostersNum) {
            var booster = this.game.boosters.getBooster(boosterType);
            if (!booster) {
                return;
            }
            booster.num += boostersNum;
            this.boostersPanel.getButton(boosterType).highlight();
            this.boostersPanel.updateData();
            this.hideFreeBoostersPopover();
            this.topPanel.boostersButton.buttonState = game.ToggleButtonState.STATE_1;
            this.game.sound.play('booster_selected', 0.5);
            this.level.saveGameStateInStore();
        };
        LevelGUI.prototype.addBoostersPanel = function () {
            this.boostersPanel = new game.BoostersPanel(this.game, this);
            this.boostersPanel.onBoosterSelected.add(this.onBoosterSelectedCallback, this);
            this.boostersPanel.onBoosterCanceled.add(this.onBoosterCancelledCallback, this);
            this.boostersPanel.updateData();
        };
        LevelGUI.prototype.onBoosterSelectedCallback = function (boosterType) {
            var booster = this.game.boosters.getBooster(boosterType);
            if (boosterType === game.BoosterType.UNDO) {
                this.boostersPanel.deselectAllButtons();
                this.onUndoSelected.dispatch();
                return;
            }
            this.boostersPanel.disableInput();
            this.boostersPanel.getButton(boosterType).select();
            this.boostersPanel.getButton(boosterType).ignoreChildInput = false;
            this.topPanel.disableInput();
            this.boosterHint.onCancel.addOnce(this.onBoosterCancelledCallback, this);
            this.boosterHint.top = 0;
            this.boosterHint.updateContent(booster.hint);
            this.boosterHint.show();
            if (this.gameOver.visible) {
                this.gameOver.onBoosterSelected(this.boosterHint);
            }
            this.onBoosterSelected.dispatch(boosterType);
        };
        LevelGUI.prototype.onBoosterCancelledCallback = function (boosterType) {
            this.boostersPanel.deselectAllButtons();
            this.boostersPanel.enableInput();
            if (this.gameOver) {
                this.boosterHint.hideInstant();
            }
            else {
                this.boosterHint.hide();
            }
            this.topPanel.enableInput();
            if (this.gameOver.visible) {
                this.gameOver.onBoosterCancelled();
            }
            this.onBoosterCancelled.dispatch();
        };
        LevelGUI.prototype.onBoosterComplete = function () {
            this.boosterHint.hide();
            this.boostersPanel.enableInput();
            this.boostersPanel.deselectAllButtons();
            this.boostersPanel.updateData();
            this.topPanel.onBoosterHintHide();
            this.topPanel.enableInput();
            if (this.gameOver.visible) {
                this.gameOver.hide();
                this.boostersPanel.setNormalColors();
                this.topPanel.enableButtons();
            }
        };
        LevelGUI.prototype.addHighscoreToast = function () {
            this.highscoreToast = new game.HighscoreToast(this.game, this);
            this.highscoreToast.kill();
        };
        LevelGUI.prototype.addGameOver = function () {
            this.gameOver = new game.GameOverGUI(this.game, this);
            this.gameOver.kill();
        };
        LevelGUI.prototype.addBoosterHint = function () {
            this.boosterHint = new game.BoosterHint(this.game, this);
        };
        LevelGUI.prototype.addPauseScreen = function () {
            this.pauseScreen = new game.PauseScreen(this.game, this);
            this.pauseScreen.kill();
        };
        LevelGUI.prototype.addRestartOverlay = function () {
            this.restartOverlay = this.game.add.image(0, 0, "interface", "white_rect0000", this);
            this.restartOverlay.anchor.set(0.5, 0.5);
            this.restartOverlay.visible = false;
            this.restartOverlay.name = "restart_overlay";
        };
        LevelGUI.prototype.addHeadstartPopup = function () {
            this.headstartPopup = new game.HeadstartPopup(this.game, this);
            return this.headstartPopup;
        };
        LevelGUI.prototype.addTutorial = function () {
            var tutorial = new game.Tutorial(this.game, this, this.level);
            tutorial.initAllowedItems();
            tutorial.parent.bringToTop(tutorial);
            return tutorial;
        };
        LevelGUI.prototype.showRestartOverlay = function () {
            var _this = this;
            this.restartOverlay.bringToTop();
            this.restartOverlay.visible = true;
            this.restartOverlay.alpha = 1;
            this.game.add.tween(this.restartOverlay).to({ alpha: 0 }, 500, Phaser.Easing.Cubic.In, true, 100)
                .onComplete.addOnce(function () {
                _this.restartOverlay.visible = false;
            });
        };
        LevelGUI.prototype.onPause = function (moves) {
            var _this = this;
            this.game.time.events.add(100, this.pauseScreen.show, this.pauseScreen, moves);
            this.game.add.tween(this.topPanel).to({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.topPanel.visible = false;
            });
            this.game.add.tween(this.boostersPanel).to({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.boostersPanel.visible = false;
            });
            this.highscoreToast.visible = false;
        };
        LevelGUI.prototype.onResume = function () {
            this.pauseScreen.hide();
            this.topPanel.visible = true;
            this.game.tweens.removeFrom(this.topPanel);
            this.game.add.tween(this.topPanel).from({ y: "-40" }, 200, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this.topPanel).to({ alpha: 1 }, 200, Phaser.Easing.Cubic.Out, true);
            this.boostersPanel.visible = true;
            this.game.tweens.removeFrom(this.boostersPanel);
            this.game.add.tween(this.boostersPanel).from({ y: "+40" }, 200, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this.boostersPanel).to({ alpha: 1 }, 200, Phaser.Easing.Cubic.Out, true);
        };
        LevelGUI.prototype.onRestore = function () {
            this.showRestartOverlay();
            if (this.gameOver.visible) {
                this.gameOver.hide();
                this.boostersPanel.setNormalColors();
                this.topPanel.enableButtons();
            }
        };
        LevelGUI.prototype.onGameOver = function () {
            if (this.gameOver.visible !== false) {
                return;
            }
            this.game.sound.play('no_moves_1', 0.66);
            this.topPanel.disableInput();
            this.boostersPanel.enableInput();
            this.boostersPanel.setGameOverColors();
            this.gameOver.top = 0;
            this.gameOver.show();
            // if (this.gameOverTutorial) {
            // 	this.gameOver.disableInput()
            // 	this.boostersPanel.disableInput()
            //
            // 	this.gameOverTutorial.onComplete.addOnce(this.onGameOverTutorialComplete, this)
            // 	this.gameOverTutorial.show(this.gameOver)
            // }
        };
        LevelGUI.prototype.onGameOverTutorialComplete = function () {
            this.gameOver.enableInput();
            this.boostersPanel.enableInput();
        };
        LevelGUI.prototype.onContinueAfterGameOver = function () {
            this.topPanel.enableInput();
            this.topPanel.enableButtons();
            this.boostersPanel.setNormalColors();
            this.gameOver.hide();
        };
        LevelGUI.prototype.show = function (delay) {
            var offsetY = 60 * game.Config.ASSETS_SCALE;
            var duration = 400;
            this.game.add.tween(this.topPanel).from({
                y: "-" + offsetY,
                alpha: 0,
            }, duration, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.boostersPanel).from({
                y: "+" + offsetY,
                alpha: 0,
            }, duration, Phaser.Easing.Cubic.Out, true, delay);
        };
        LevelGUI.prototype.showHighscoreToast = function (item) {
            this.highscoreToast.x = game.Config.HALF_GAME_WIDTH;
            this.highscoreToast.y = this.boostersPanel.y;
            this.highscoreToast.updateContent(item);
            this.highscoreToast.show();
        };
        // adjust panel heights
        LevelGUI.prototype.initialResize = function () {
            this.topPanel.resize(game.Config.GAME_WIDTH, LevelGUI.PANEL_HEIGHT, game.Config.GAME_WIDTH * 0.85);
            this.topPanel.top = 0;
            this.topPanel.centerX = game.Config.HALF_GAME_WIDTH;
            this.boostersPanel.resize(game.LevelGUI.PANEL_HEIGHT);
            this.boostersPanel.centerX = game.Config.HALF_GAME_WIDTH;
            this.boostersPanel.bottom = game.Config.GAME_HEIGHT;
            this.highscoreToast.centerX = game.Config.HALF_GAME_WIDTH;
            this.highscoreToast.y = this.boostersPanel.top;
            this.highscoreToast.originalY = this.highscoreToast.y;
            this.gameOver.resize(game.Config.GAME_WIDTH);
            this.gameOver.top = 0;
            this.gameOver.centerX = game.Config.HALF_GAME_WIDTH;
            if (this.headstartPopup) {
                this.headstartPopup.resize();
            }
            this.pauseScreen.resize();
            this.resizeRestartOverlay();
        };
        LevelGUI.prototype.resizeRestartOverlay = function () {
            this.restartOverlay.width = game.Config.GAME_WIDTH * 1.2;
            this.restartOverlay.height = game.Config.GAME_HEIGHT * 1.2;
            this.restartOverlay.centerX = game.Config.HALF_GAME_WIDTH;
            this.restartOverlay.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        // adjust sizes which depends on grid size and position
        LevelGUI.prototype.finalResize = function () {
            var contentWidth = Math.max(game.Config.GAME_WIDTH * 0.8, this.level.grid.width);
            this.topPanel.resize(game.Config.GAME_WIDTH, LevelGUI.PANEL_HEIGHT, contentWidth);
            this.topPanel.top = 0;
            this.topPanel.centerX = game.Config.HALF_GAME_WIDTH;
            this.freeBoostersPopover.centerX = this.topPanel.boostersButton.centerX;
            this.freeBoostersPopover.top = this.topPanel.boostersButton.bottom + 6;
            if (this.level.tutorial) {
                this.level.tutorial.resize(LevelGUI.PANEL_HEIGHT);
                this.level.tutorial.centerX = this.topPanel.centerX;
                this.level.tutorial.centerY = this.topPanel.centerY;
            }
            this.boosterHint.resize(contentWidth, LevelGUI.PANEL_HEIGHT);
            this.boosterHint.centerX = this.topPanel.centerX;
            this.boosterHint.centerY = this.topPanel.centerY;
        };
        LevelGUI.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.disposeSignals();
            this.level = null;
        };
        LevelGUI.prototype.disposeSignals = function () {
            this.onBoosterSelected.dispose();
            this.onBoosterSelected = null;
            this.onBoosterCancelled.dispose();
            this.onBoosterCancelled = null;
            this.onUndoSelected.dispose();
            this.onUndoSelected = null;
        };
        Object.defineProperty(LevelGUI.prototype, "coinsLabel", {
            get: function () {
                return this.topPanel.coinsLabel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LevelGUI.prototype, "pauseButton", {
            get: function () {
                return this.topPanel.pauseButton;
            },
            enumerable: false,
            configurable: true
        });
        LevelGUI.NORMAL_COLOR = 0xFFB751;
        LevelGUI.GAME_OVER_COLOR = 0xE57373;
        LevelGUI.DISABLED_BUTTON_ALPHA = 0.7;
        LevelGUI.PANEL_HEIGHT = 110;
        return LevelGUI;
    }(Phaser.Group));
    game.LevelGUI = LevelGUI;
})(game || (game = {}));
var game;
(function (game) {
    var Finger = /** @class */ (function (_super) {
        __extends(Finger, _super);
        function Finger(_game) {
            var _this = _super.call(this, _game, 0, 0, "interface", "Finger0000") || this;
            _this.visible = false;
            return _this;
        }
        Finger.prototype.showTap = function () {
            var _this = this;
            this.visible = true;
            this.game.tweens.removeFrom(this);
            this.rotation = 0;
            this.alpha = 0;
            this.scale.set(1);
            this.game.add.tween(this).to({ alpha: 1 }, 250, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.showTap2();
            });
        };
        Finger.prototype.showTap2 = function () {
            var duration = 400;
            this.game.add.tween(this.scale).to({ x: 0.8, y: 0.8 }, duration, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this).to({ angle: -17 }, duration, Phaser.Easing.Cubic.Out, true);
            this.delayedCall = this.game.time.events.add(900, this.hideTap, this);
        };
        Finger.prototype.hideTap = function () {
            var _this = this;
            this.game.add.tween(this.scale).to({ x: 1, y: 1 }, 750, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this).to({ angle: 0 }, 750, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this).to({ alpha: 0 }, 250, Phaser.Easing.Cubic.Out, true, 500)
                .onComplete.addOnce(function () {
                _this.hideTap2();
            });
        };
        Finger.prototype.hideTap2 = function () {
            this.delayedCall = this.game.time.events.add(660, this.showTap, this);
        };
        Finger.prototype.pointAt = function (x, y) {
            this.removeTimers();
            this.removeTweens();
            this.frameName = "Finger_20000";
            this.angle = 0;
            this.scale.set(1);
            this.anchor.set(0.5, 1);
            this.visible = true;
            this.alpha = 0;
            this.x = x;
            this.y = y;
            this.game.add.tween(this).to({ alpha: 1 }, 200, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this).to({ y: "-66" }, 500, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        };
        Finger.prototype.removeTweens = function () {
            if (this.game) {
                this.game.tweens.removeFrom(this);
                this.game.tweens.removeFrom(this.scale);
            }
        };
        Finger.prototype.followPath = function (path) {
            this.path = path;
            this.visible = true;
            this.show();
        };
        Finger.prototype.show = function () {
            var _this = this;
            this.removeTweens();
            this.currentPoint = this.path[0];
            this.x = this.currentPoint.x;
            this.y = this.currentPoint.y;
            this.alpha = 0;
            this.rotation = 0;
            this.scale.set(1);
            this.game.add.tween(this).to({ alpha: 1 }, 250, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.show2();
            });
        };
        Finger.prototype.show2 = function () {
            var duration = 400;
            this.game.add.tween(this.scale).to({ x: 0.8, y: 0.8 }, duration, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this).to({ angle: -17 }, duration, Phaser.Easing.Cubic.Out, true);
            this.delayedCall = this.game.time.events.add(600, this.moveToNextPoint, this);
        };
        Finger.prototype.moveToNextPoint = function () {
            var _this = this;
            var nextPoint = this.getNextPoint();
            var distance = this.currentPoint.distance(nextPoint);
            var duration = distance * 3.3;
            this.currentPoint = nextPoint;
            this.game.add.tween(this).to({ x: nextPoint.x, y: nextPoint.y }, duration, Phaser.Easing.Linear.None, true)
                .onComplete.addOnce(function () {
                _this.onMoveComplete();
            });
        };
        Finger.prototype.getNextPoint = function () {
            var currentIndex = this.path.indexOf(this.currentPoint);
            var nextIndex = (currentIndex === this.path.length - 1) ? 0 : currentIndex + 1;
            return this.path[nextIndex];
        };
        Finger.prototype.onMoveComplete = function () {
            if (this.currentPoint === this.path[this.path.length - 1]) {
                this.hide();
            }
            else {
                this.moveToNextPoint();
            }
        };
        Finger.prototype.hide = function () {
            var _this = this;
            this.game.add.tween(this).to({ alpha: 0 }, 250, Phaser.Easing.Cubic.Out, true, 500)
                .onComplete.addOnce(function () {
                _this.hide2();
            });
        };
        Finger.prototype.hide2 = function () {
            this.game.time.events.add(666, this.show, this);
        };
        Finger.prototype.stopAndHide = function () {
            this.removeTweens();
            this.removeTimers();
            this.visible = false;
        };
        Finger.prototype.removeTimers = function () {
            if (this.delayedCall) {
                this.game.time.events.remove(this.delayedCall);
                this.delayedCall = null;
            }
        };
        Finger.prototype.destroy = function () {
            this.stopAndHide();
            this.removeTimers();
            _super.prototype.destroy.call(this, true);
            this.path = null;
            this.currentPoint = null;
        };
        Finger.OFFSET = new Phaser.Point(26, 50);
        return Finger;
    }(Phaser.Image));
    game.Finger = Finger;
})(game || (game = {}));
var game;
(function (game) {
    var TutorialTopPanel = /** @class */ (function (_super) {
        __extends(TutorialTopPanel, _super);
        function TutorialTopPanel(_game, parent) {
            var _this = _super.call(this, _game, parent, "tutorial_text") || this;
            _this.currentLine = 0;
            _this.tutorialLines = _this.game.texts.texts.tutorial;
            _this.addBack();
            _this.addTitle();
            _this.addSubtitle();
            _this.alignTexts();
            _this.game.add.tween(_this.subtitle).to({ alpha: 0.33 }, 400, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            return _this;
        }
        TutorialTopPanel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "Tutorial_Back0000", this);
        };
        TutorialTopPanel.prototype.addTitle = function () {
            var content = this.tutorialLines[0];
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 32,
                fill: "#ffffff",
                align: "center",
            };
            this.title = this.game.add.text(0, 0, content, style, this);
            this.title.wordWrap = true;
            this.title.wordWrapWidth = this.back.width * 0.85;
            this.title.lineSpacing = -10;
            this.title.align = "center";
            this.title.anchor.set(0.5, 0);
            this.title.name = "title";
        };
        TutorialTopPanel.prototype.addSubtitle = function () {
            var content = this.game.texts.texts.tutorial_hint;
            this.subtitle = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_BOLD_BMP, content, 28, this);
            this.subtitle.anchor.set(0.5, 0);
            this.subtitle.centerX = this.title.centerX;
            this.subtitle.top = this.title.bottom + 5;
            this.subtitle.name = "subtitle";
        };
        TutorialTopPanel.prototype.showNextLine = function () {
            this.setTextLine(++this.currentLine);
            this.tweenText();
        };
        TutorialTopPanel.prototype.setTextLine = function (lineNum) {
            this.currentLine = Phaser.Math.clamp(lineNum, 0, this.tutorialLines.length - 1);
            var text = this.tutorialLines[this.currentLine];
            var maxHeight = this.back.height;
            this.title.setText(text, true);
            this.title.scale.set(1);
            this.title.scale.set(Math.min(1, maxHeight / this.title.height));
            this.title.centerY = this.back.centerY;
        };
        TutorialTopPanel.prototype.tweenText = function () {
            this.game.tweens.removeFrom(this.title);
            this.game.tweens.removeFrom(this.title.scale);
            var originalScale = this.title.scale.x;
            this.title.alpha = 0;
            this.title.scale.set(originalScale * 0.8);
            this.game.add.tween(this.title).to({ alpha: 1 }, 200, Phaser.Easing.Cubic.Out, true);
            this.game.add.tween(this.title.scale).to({
                x: originalScale,
                y: originalScale,
            }, 360, Phaser.Easing.Back.Out, true);
        };
        TutorialTopPanel.prototype.hide = function () {
            this.game.add.tween(this).to({ alpha: 0, y: "-66" }, 100, Phaser.Easing.Cubic.In, true);
        };
        TutorialTopPanel.prototype.show = function () {
            this.alpha = 0;
            this.game.add.tween(this).to({ alpha: 1 }, 660, Phaser.Easing.Linear.None, true, 100);
        };
        TutorialTopPanel.prototype.resize = function (height) {
            this.back.height = height;
            this.alignTexts();
        };
        TutorialTopPanel.prototype.alignTexts = function () {
            this.subtitle.centerX = this.back.centerX;
            this.subtitle.bottom = this.back.bottom - 20;
            if (this.subtitle.visible) {
                this.title.bottom = this.subtitle.top - 5;
            }
            else {
                var maxHeight = this.back.height * 0.7;
                this.title.scale.set(1);
                if (this.title.height > maxHeight) {
                    this.title.scale.set(maxHeight / this.title.height);
                }
                this.title.centerY = this.back.centerY;
            }
            this.title.centerX = this.back.centerX;
        };
        TutorialTopPanel.prototype.hideSubtitle = function () {
            this.game.tweens.removeFrom(this.subtitle);
            this.subtitle.visible = false;
        };
        TutorialTopPanel.prototype.destroy = function () {
            this.hideSubtitle();
            _super.prototype.destroy.call(this, true, false);
            this.tutorialLines = null;
        };
        return TutorialTopPanel;
    }(Phaser.Group));
    game.TutorialTopPanel = TutorialTopPanel;
})(game || (game = {}));
///<reference path='Finger.ts' />
///<reference path='TutorialTopPanel.ts' />
var game;
(function (game) {
    var Tutorial = /** @class */ (function (_super) {
        __extends(Tutorial, _super);
        function Tutorial(_game, parent, level) {
            var _this = _super.call(this, _game, parent, "tutorial") || this;
            _this.clicks = 0;
            _this.isComplete = false;
            _this.onComplete = new Phaser.Signal();
            _this.level = level;
            _this.prepareGrid();
            _this.initAllowedItems();
            _this.addFinger();
            _this.addText();
            return _this;
        }
        Tutorial.prototype.prepareGrid = function () {
            this.level.activeItems.forEach(function (item) {
                item.setItemType(2);
            });
            this.level.activeItems[0].setItemType(1);
            this.level.activeItems[this.level.activeItems.length - 1].setItemType(1);
        };
        Tutorial.prototype.initAllowedItems = function () {
            var grid = this.level.grid;
            this.allowedItems = [
                grid.getCellAt(3, 1).item,
                grid.getCellAt(2, 2).item,
                grid.getCellAt(1, 2).item,
            ];
            this.allowedItems.forEach(function (item) {
                item.setItemType(1);
            });
        };
        Tutorial.prototype.addFinger = function () {
            this.finger = new game.Finger(this.game);
            this.add(this.finger);
        };
        Tutorial.prototype.addText = function () {
            this.topPanel = new game.TutorialTopPanel(this.game, this);
            this.topPanel.x = (game.Config.GAME_WIDTH - this.topPanel.width) * 0.5;
        };
        Tutorial.prototype.show = function () {
            var _this = this;
            this.parent.bringToTop(this);
            this.game.sound.play('tutorial', 0.5);
            this.level.pointerEnabled = false;
            this.level.gui.topPanel.hideForTutorial();
            this.topPanel.show();
            this.topPanel.hideSubtitle();
            this.level.onFirstComboComplete.addOnce(this.onFirstComboComplete, this);
            this.level.pointerEnabled = true;
            this.game.time.events.add(100, function () {
                _this.showCombineTutorial();
            });
        };
        Tutorial.prototype.onInputDown = function (pointer) {
            switch (this.clicks) {
                case 0:
                    this.game.input.onDown.remove(this.onInputDown, this);
                    this.topPanel.showNextLine();
                    this.showUndoTutorial();
                    this.level.gui.boostersPanel.onBoosterSelected.addOnce(this.onUndoComplete, this);
                    break;
                case 1:
                    this.game.input.onDown.remove(this.onInputDown, this);
                    this.topPanel.showNextLine();
                    this.level.gui.boostersPanel.getButton(game.BoosterType.REMOVE).stopHighlightForTutorial();
                    this.level.onFirstBoosterComplete.addOnce(this.onRemoveBoosterComplete, this);
                    this.finger.stopAndHide();
                    break;
                case 2:
                    this.game.input.onDown.remove(this.onInputDown, this);
                    this.level.gui.topPanel.enableButtons();
                    this.hide();
                    break;
                default:
                    this.topPanel.showNextLine();
                    break;
            }
            this.clicks++;
        };
        Tutorial.prototype.showCombineTutorial = function () {
            this.fadeOutItems();
            this.moveFingerAlongPath();
        };
        Tutorial.prototype.fadeOutItems = function () {
            var _this = this;
            this.level.activeItems.forEach(function (item) {
                if (_this.allowedItems.indexOf(item) === -1) {
                    item.alpha = 0.33;
                }
            });
        };
        Tutorial.prototype.moveFingerAlongPath = function () {
            var path = this.createPath();
            this.finger.followPath(path);
        };
        Tutorial.prototype.createPath = function () {
            var grid = this.level.grid;
            var cells = [
                grid.getCellAt(3, 1),
                grid.getCellAt(2, 2),
                grid.getCellAt(1, 2),
            ];
            var path = cells.map(function (cell) {
                var point = cell.parent.toGlobal(cell.position).toPhaser();
                point.add(game.Finger.OFFSET.x, game.Finger.OFFSET.y);
                return point;
            });
            return path;
        };
        Tutorial.prototype.onFirstComboComplete = function () {
            this.fadeInAllItems();
            this.level.pointerEnabled = false;
            this.finger.stopAndHide();
            this.topPanel.showNextLine();
            this.game.input.onDown.add(this.onInputDown, this);
        };
        Tutorial.prototype.fadeInAllItems = function () {
            var l = this.level.activeItems.length;
            for (var i = 0; i < l; i++) {
                this.level.activeItems[i].alpha = 1;
            }
        };
        Tutorial.prototype.showUndoTutorial = function () {
            var buttonWidth = game.Config.GAME_WIDTH / 5;
            var undoButtonIndex = 2;
            var fingerX = undoButtonIndex * buttonWidth - buttonWidth * 0.5 + 6;
            var fingerY = game.Config.GAME_HEIGHT - 88;
            this.finger.pointAt(fingerX, fingerY);
            this.game.boosters.boosters.forEach(function (booster) {
                booster.num = 0;
            });
            this.game.boosters.getBooster(game.BoosterType.UNDO).num = 1;
            this.level.gui.boostersPanel.updateData();
            this.level.gui.boostersPanel.enableInput();
            this.level.gui.boostersPanel.getButton(game.BoosterType.UNDO).highlightForTutorial();
        };
        Tutorial.prototype.onUndoComplete = function () {
            this.level.gui.boostersPanel.onBoosterSelected.remove(this.onUndoComplete, this);
            this.level.gui.boostersPanel.getButton(game.BoosterType.UNDO).stopHighlightForTutorial();
            this.allowedItems.length = 0;
            this.finger.stopAndHide();
            this.level.pointerEnabled = false;
            this.topPanel.showNextLine();
            this.showRemoveBoosterTutorial();
        };
        Tutorial.prototype.showRemoveBoosterTutorial = function () {
            var buttonWidth = game.Config.GAME_WIDTH / 5;
            var undoButtonIndex = 3;
            var fingerX = undoButtonIndex * buttonWidth - buttonWidth * 0.5 + 6;
            var fingerY = game.Config.GAME_HEIGHT - 88 * game.Config.ASSETS_SCALE;
            this.game.boosters.getBooster(game.BoosterType.REMOVE).num = 1;
            this.finger.pointAt(fingerX, fingerY);
            this.level.gui.boostersPanel.getButton(game.BoosterType.REMOVE).updateData();
            this.level.gui.boostersPanel.getButton(game.BoosterType.REMOVE).highlightForTutorial();
            this.game.input.onDown.add(this.onInputDown, this);
        };
        Tutorial.prototype.onRemoveBoosterComplete = function () {
            this.level.onFirstBoosterComplete.remove(this.onRemoveBoosterComplete, this);
            this.level.pointerEnabled = false;
            this.topPanel.showNextLine();
            this.level.gui.topPanel.disableInput();
            this.game.input.onDown.add(this.onInputDown, this);
            this.level.pointerEnabled = true;
            this.isComplete = true;
        };
        Tutorial.prototype.hide = function () {
            var _this = this;
            this.level.gui.topPanel.showAfterTutorial();
            this.game.add.tween(this.topPanel).to({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.onHideComplete();
            });
        };
        Tutorial.prototype.onHideComplete = function () {
            this.visible = false;
            this.onComplete.dispatch();
        };
        Tutorial.prototype.resize = function (height) {
            this.topPanel.resize(height);
        };
        Tutorial.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.level = null;
            this.allowedItems = null;
            this.onComplete.dispose();
            this.onComplete = null;
        };
        return Tutorial;
    }(Phaser.Group));
    game.Tutorial = Tutorial;
})(game || (game = {}));
///<reference path="..\IResetable.ts"/>
var game;
(function (game) {
    var ItemsPool = /** @class */ (function () {
        function ItemsPool(_game, objectsLayer) {
            this._game = _game;
            this.itemsLayer = objectsLayer;
            this.initItems();
        }
        ItemsPool.prototype.initItems = function () {
            var _this = this;
            var itemsNum = game.Grid.COLUMNS * game.Grid.ROWS;
            this.items = _.times(itemsNum, function () {
                return new game.Item(_this._game, _this.itemsLayer);
            });
            this.itemsLayer.addMultiple(this.items, true);
        };
        ItemsPool.prototype.getItem = function (itemType) {
            var item = _.find(this.items, { exists: false });
            if (!item) {
                console.warn("Additional item allocated! [itemType = " + itemType + "]");
                item = new game.Item(this._game);
                this.items.push(item);
                this.itemsLayer.add(item);
            }
            item.setItemType(itemType);
            item.onRemoveFromPool();
            return item;
        };
        ItemsPool.prototype.returnItem = function (item) {
            item.onAddToPool();
        };
        ItemsPool.prototype.doReset = function () {
            var l = this.items.length;
            for (var i = 0; i < l; i++) {
                var item = this.items[i];
                if (item.exists)
                    this.returnItem(item);
            }
        };
        ItemsPool.prototype.destroy = function () {
            this._game = null;
            this.itemsLayer = null;
            this.items.length = 0;
            this.items = null;
        };
        return ItemsPool;
    }());
    game.ItemsPool = ItemsPool;
})(game || (game = {}));
var game;
(function (game) {
    var ItemRippleFX = /** @class */ (function (_super) {
        __extends(ItemRippleFX, _super);
        function ItemRippleFX(_game, parent) {
            var _this = _super.call(this, _game, parent) || this;
            _this.addCirles();
            _this.visible = false;
            _this.exists = false;
            return _this;
        }
        ItemRippleFX.prototype.addCirles = function () {
            this.circles = this.createMultiple(3, "interface", "Item_White0000");
            this.circles.forEach(function (circle) {
                circle.anchor.set(0.5, 0.5);
            });
        };
        ItemRippleFX.prototype.show = function (item) {
            var _this = this;
            this.item = item;
            this.visible = true;
            this.exists = true;
            var color = game.Item.getBackColor(item.itemType);
            this.circles.forEach(function (circle, index) {
                _this.game.tweens.removeFrom(circle);
                _this.game.tweens.removeFrom(circle.scale);
                var delay = 100 + index * 200;
                var scale = 1.6;
                var duration = 660;
                circle.tint = color;
                _this.game.add.tween(circle.scale).to({ x: scale, y: scale }, duration, Phaser.Easing.Linear.None, true, delay);
                _this.game.add.tween(circle).to({ alpha: 0 }, duration, Phaser.Easing.Linear.None, true, delay)
                    .onComplete.addOnce(_this.onTweenComplete, _this, 0, index);
            });
        };
        ItemRippleFX.prototype.onTweenComplete = function (index) {
            if (index === this.circles.length - 1) {
                this.visible = false;
            }
        };
        ItemRippleFX.prototype.update = function () {
            if (this.visible && this.item) {
                this.x = this.item.x;
                this.y = this.item.y;
            }
        };
        ItemRippleFX.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.circles = null;
            this.item = null;
        };
        return ItemRippleFX;
    }(Phaser.Group));
    game.ItemRippleFX = ItemRippleFX;
})(game || (game = {}));
var game;
(function (game) {
    var ChainLink = /** @class */ (function (_super) {
        __extends(ChainLink, _super);
        function ChainLink(_game) {
            var _this = _super.call(this, _game, 0, 0, "interface", "Item_Link0000") || this;
            _this.anchor.set(0.5, 0.5);
            _this.exists = false;
            _this.visible = false;
            return _this;
        }
        ChainLink.prototype.show = function () {
            this.visible = true;
            this.exists = true;
            this.game.tweens.removeFrom(this.scale);
            this.scale.set(0, 1);
            this.game.add.tween(this.scale).to({ x: 1, y: 1 }, 330, Phaser.Easing.Back.Out, true);
        };
        ChainLink.prototype.hide = function () {
            this.exists = false;
            this.visible = false;
        };
        return ChainLink;
    }(Phaser.Image));
    game.ChainLink = ChainLink;
})(game || (game = {}));
var game;
(function (game) {
    var ItemsGenerator = /** @class */ (function () {
        function ItemsGenerator(difficulty) {
            this.itemRnd = new Phaser.RandomDataGenerator();
            this.difficulty = difficulty;
            this.setNewSeed();
            //for (i:number = 1; i < 15; i++) {
            //    trace("Difficulty for", i, "= " + this.getDifficulty(i));
            //}
        }
        ItemsGenerator.prototype.setAllowedItemTypes = function (itemTypes) {
            this.allowedItemTypes = itemTypes;
        };
        ItemsGenerator.prototype.getNewItemType = function () {
            var randomIndex = this.itemRnd.integerInRange(0, this.allowedItemTypes.length - 1);
            return this.allowedItemTypes[randomIndex];
        };
        ItemsGenerator.prototype.updateAllowedItemTypes = function (activeItems) {
            var bestItem = this.getBestItemType(activeItems);
            var worstItem = this.getWorstItemType(bestItem);
            var itemTypes = [];
            if (bestItem < 3) {
                itemTypes.push(1, 2);
            }
            else {
                if ((bestItem + 1) % 13 === 0) {
                    bestItem--; // do not generate 13, 26, 39 and so on
                }
                for (var i = worstItem; i < bestItem; i++) {
                    itemTypes.push(i);
                }
            }
            this.setChances(itemTypes);
        };
        ItemsGenerator.prototype.getBestItemType = function (items) {
            return _.maxBy(items, "itemType").itemType;
        };
        ItemsGenerator.prototype.getWorstItemType = function (bestType) {
            return Math.max(1, bestType - 6);
        };
        ItemsGenerator.prototype.setChances = function (itemTypes) {
            this.allowedItemTypes.length = 0;
            var bestType = itemTypes[itemTypes.length - 1];
            var difficulty = this.getDifficulty(bestType); // [0.5..1.99] lower - easier
            var typesNum = itemTypes.length;
            for (var i = 0; i < itemTypes.length; i++) {
                var itemType = itemTypes[i];
                var chances = 0;
                if (typesNum > 1) {
                    chances = (100 - this.allowedItemTypes.length) / typesNum;
                    chances = Math.floor(chances * difficulty);
                }
                else {
                    chances = (100 - this.allowedItemTypes.length);
                }
                for (var j = 0; j < chances; j++) {
                    this.allowedItemTypes.push(itemType);
                }
                typesNum--;
            }
            console.assert(this.allowedItemTypes.length === 100);
        };
        ItemsGenerator.prototype.getDifficulty = function (bestType) {
            return this.difficulty;
        };
        ItemsGenerator.prototype.setNewSeed = function () {
            var seeds = [Date.now()];
            //seeds = [0];
            this.itemRnd.sow(seeds);
        };
        ItemsGenerator.prototype.getSeed = function () {
            return this.itemRnd.state();
        };
        ItemsGenerator.prototype.setSeed = function (seed) {
            this.itemRnd.state(seed);
        };
        ItemsGenerator.prototype.destroy = function () {
            this.itemRnd = null;
            this.allowedItemTypes = null;
        };
        return ItemsGenerator;
    }());
    game.ItemsGenerator = ItemsGenerator;
})(game || (game = {}));
var game;
(function (game) {
    var FindChainStrategy = /** @class */ (function () {
        function FindChainStrategy(_game, grid) {
            this.stack = [];
            this.foundChain = [];
            this.game = _game;
            this.grid = grid;
        }
        FindChainStrategy.prototype.hasChains = function (items) {
            return this.getPossibleMove(items) !== null;
        };
        FindChainStrategy.prototype.getPossibleMove = function (items) {
            var l = items.length;
            for (var i = 0; i < l; i++) {
                var item = items[i];
                var chain = this.getPossibleChain(item);
                if (chain && chain.length >= 3) {
                    return chain;
                }
            }
            return null;
        };
        FindChainStrategy.prototype.getPossibleChain = function (item) {
            this.stack.length = 0;
            this.stack.push(item);
            this.foundChain.length = 0;
            var type = item.itemType;
            var iterations = 0;
            while (this.stack.length > 0) {
                var testItem = this.stack.pop();
                this.foundChain.push(testItem);
                if (this.foundChain.length > 2) {
                    return this.foundChain;
                }
                this.putInStack(testItem, type, -1, -1); // top-left
                this.putInStack(testItem, type, -1, 0); // top
                this.putInStack(testItem, type, -1, 1); // top-right
                this.putInStack(testItem, type, 0, 1); // right
                this.putInStack(testItem, type, 1, 1); // bottom-right
                this.putInStack(testItem, type, 1, 0); // bottom
                this.putInStack(testItem, type, 1, -1); // bottom-left
                this.putInStack(testItem, type, 0, -1); // left
            }
            return null;
        };
        FindChainStrategy.prototype.putInStack = function (sourceItem, type, rowOffset, columnOffset) {
            var item = this.getItem(sourceItem, rowOffset, columnOffset);
            if (item && this.itemGoodForChain(item, type)) {
                this.stack.push(item);
            }
        };
        FindChainStrategy.prototype.getItem = function (sourceItem, rowOffset, columnOffset) {
            var cell = sourceItem.cell;
            var row = cell.row + rowOffset;
            var column = cell.column + columnOffset;
            if (row >= 0 && row < this.grid.rows && column >= 0 && column < this.grid.columns) {
                return this.grid.getCellAt(row, column).item;
            }
        };
        FindChainStrategy.prototype.itemGoodForChain = function (item, type) {
            return (item.itemType === type && this.foundChain.indexOf(item) === -1);
        };
        FindChainStrategy.prototype.destroy = function () {
            this.game = null;
            this.grid = null;
            this.stack = null;
            this.foundChain = null;
        };
        return FindChainStrategy;
    }());
    game.FindChainStrategy = FindChainStrategy;
})(game || (game = {}));
var game;
(function (game) {
    var DropStrategy = /** @class */ (function () {
        function DropStrategy(_game, grid) {
            this.dropDuration = 0;
            this.game = _game;
            this.grid = grid;
            this.onDropComplete = new Phaser.Signal();
        }
        DropStrategy.prototype.dropItems = function (items) {
            this.items = items;
            this.dropDuration = 0;
            this.doDrop();
        };
        DropStrategy.prototype.doDrop = function () {
            var _this = this;
            this.items.sort(this.sortItemsBottomUp);
            // calculate drop
            for (var i = 0; i < game.Grid.ROWS; i++) {
                this.items.forEach(function (item) {
                    var dropCell = _this.findBottomFreeCell(item.cell);
                    if (dropCell) {
                        item.dropCell = dropCell;
                        item.linkCell(dropCell);
                    }
                });
            }
            var itemsToDrop = this.items.filter(function (item) { return !!item.dropCell; });
            var itemsToDropNum = itemsToDrop.length;
            if (itemsToDropNum === 0) {
                this.onDropCompleteCallback();
                return;
            }
            // do actual drop
            itemsToDrop.forEach(function (item) {
                item.dropToCell(item.dropCell).onComplete.addOnce(function () {
                    if (--itemsToDropNum === 0) {
                        _this.onDropCompleteCallback();
                    }
                });
                item.dropCell = null;
            });
        };
        DropStrategy.prototype.sortItemsBottomUp = function (item1, item2) {
            var cell1 = item1.cell;
            var cell2 = item2.cell;
            if (cell1.row === cell2.row)
                return cell2.column - cell1.column;
            else
                return cell2.row - cell1.row;
        };
        DropStrategy.prototype.findBottomFreeCell = function (itemCell) {
            var bottomCell = this.grid.getCellAt(itemCell.row + 1, itemCell.column);
            if (bottomCell && bottomCell.isFree()) {
                return bottomCell;
            }
            return null;
        };
        DropStrategy.prototype.findDropCell = function (itemCell) {
            var bottomCell = this.grid.getCellAt(itemCell.row + 1, itemCell.column);
            if (bottomCell && bottomCell.isFree()) {
                return bottomCell;
            }
            var rightCell = this.grid.getCellAt(itemCell.row, itemCell.column + 1);
            var bottomRightCell = this.grid.getCellAt(itemCell.row + 1, itemCell.column + 1);
            if (rightCell && rightCell.isFree() && bottomRightCell && bottomRightCell.isFree()) {
                return bottomRightCell;
            }
            var leftCell = this.grid.getCellAt(itemCell.row, itemCell.column - 1);
            var bottomLeftCell = this.grid.getCellAt(itemCell.row + 1, itemCell.column - 1);
            if (leftCell && leftCell.isFree() && bottomLeftCell && bottomLeftCell.isFree()) {
                return bottomLeftCell;
            }
            return null;
        };
        DropStrategy.prototype.onDropCompleteCallback = function () {
            this.onDropComplete.dispatch();
        };
        DropStrategy.prototype.destroy = function () {
            this.game = null;
            this.grid = null;
            this.items = null;
            this.onDropComplete.dispose();
            this.onDropComplete = null;
        };
        return DropStrategy;
    }());
    game.DropStrategy = DropStrategy;
})(game || (game = {}));
///<reference path='DropStrategy.ts' />
var game;
(function (game) {
    var ItemsAligner = /** @class */ (function () {
        function ItemsAligner(_game, grid) {
            this.game = _game;
            this.grid = grid;
            this.dropStrategy = new game.DropStrategy(this.game, this.grid);
            this.freeCells = [];
            this.onAddItem = new Phaser.Signal();
            this.onAlignComplete = new Phaser.Signal();
        }
        ItemsAligner.prototype.alignAndRefill = function (items) {
            this.items = items;
            this.dropItems();
        };
        ItemsAligner.prototype.dropItems = function () {
            this.dropStrategy.onDropComplete.add(this.refillGrid, this);
            this.dropStrategy.dropItems(this.items);
        };
        ItemsAligner.prototype.sortItemsForMoveUp = function (item1, item2) {
            var cell1 = item1.cell;
            var cell2 = item2.cell;
            if (cell1.row === cell2.row)
                return cell2.column - cell1.column;
            else
                return cell1.row - cell2.row;
        };
        ItemsAligner.prototype.refillGrid = function () {
            var cellsToRefill = this.getCellsToRefill();
            cellsToRefill.sort(this.sortCellsBottomUp);
            if (cellsToRefill.length > 0) {
                this.doRefillGrid(cellsToRefill);
            }
            this.freeCells.length = 0;
            this.onComplete();
        };
        ItemsAligner.prototype.getCellsToRefill = function () {
            this.freeCells.length = 0;
            var cells = this.grid.cells;
            var l = cells.length;
            for (var i = 0; i < l; i++) {
                var cell = cells[i];
                if (cell.isFree()) {
                    this.freeCells.push(cell);
                }
            }
            return this.freeCells;
        };
        ItemsAligner.prototype.sortCellsBottomUp = function (cell1, cell2) {
            if (cell1.row === cell2.row)
                return cell2.column - cell1.column;
            else
                return cell2.row - cell1.row;
        };
        ItemsAligner.prototype.doRefillGrid = function (cells) {
            var delay = 0;
            var l = cells.length;
            for (var i = 0; i < l; i++) {
                this.onAddItem.dispatch(cells[i], delay);
                delay += 33;
            }
        };
        ItemsAligner.prototype.onComplete = function () {
            this.onAlignComplete.dispatch();
        };
        ItemsAligner.prototype.destroy = function () {
            this.grid = null;
            this.items = null;
            this.freeCells.length = 0;
            this.freeCells = null;
            this.dropStrategy.destroy();
            this.dropStrategy = null;
        };
        return ItemsAligner;
    }());
    game.ItemsAligner = ItemsAligner;
})(game || (game = {}));
var game;
(function (game) {
    var CellState = /** @class */ (function () {
        function CellState(row, column, itemType) {
            this.itemType = 0;
            this.row = row;
            this.column = column;
            this.itemType = itemType;
        }
        return CellState;
    }());
    game.CellState = CellState;
})(game || (game = {}));
///<reference path='CellState.ts' />
var game;
(function (game) {
    var GridState = /** @class */ (function () {
        function GridState(cellStates) {
            this.cellStates = cellStates;
        }
        GridState.fromGrid = function (grid) {
            var cellStates = grid.cells.map(function (cell) {
                var itemType = (cell.isFree()) ? 0 : cell.item.itemType;
                var cellState = new game.CellState(cell.row, cell.column, itemType);
                return cellState;
            });
            return new GridState(cellStates);
        };
        GridState.fromString = function (data) {
            var parsedData = _.attempt(JSON.parse, data);
            if (_.isError(parsedData)) {
                console.warn("Can't parse saved GridState", parsedData.name, parsedData.message);
                return null;
            }
            else {
                var cellStates = parsedData.map(function (data) {
                    return new game.CellState(data.row, data.column, data.itemType);
                });
                return new GridState(cellStates);
            }
        };
        GridState.prototype.toString = function () {
            var data = this.cellStates.map(function (cellState) {
                return {
                    row: cellState.row,
                    column: cellState.column,
                    itemType: cellState.itemType
                };
            });
            return JSON.stringify(data);
        };
        GridState.prototype.destroy = function () {
            this.cellStates = null;
        };
        return GridState;
    }());
    game.GridState = GridState;
})(game || (game = {}));
///<reference path='GridState.ts' />
///<reference path='../LevelStats.ts' />
var game;
(function (game) {
    var SavedGameState = /** @class */ (function () {
        function SavedGameState(coins, levelStats, wasGameComplete, gameOverState, freeBoosters, gridState, boosters, seed) {
            this._coins = coins;
            this.levelStats = levelStats;
            this.wasGameComplete = wasGameComplete;
            this.gameOverState = gameOverState;
            this.freeBoosters = freeBoosters;
            this.gridState = gridState;
            this.boosters = boosters;
            this._seed = seed;
        }
        SavedGameState.fromString = function (data, _game) {
            var _a;
            var parsedData = _.attempt(JSON.parse, data);
            if (_.isError(parsedData)) {
                console.warn("Can't parse SavedGameState data!", parsedData);
                return null;
            }
            var coins = parsedData.coins;
            var levelStats = game.LevelStats.fromString(parsedData.levelStats, _game);
            var wasGameComplete = parsedData.wasGameComplete;
            var gameOverState = parsedData.gameOverState;
            var freeBoosters = (_a = parsedData.freeBoosters) !== null && _a !== void 0 ? _a : {};
            var gridState = game.GridState.fromString(parsedData.gridState);
            var boosters = JSON.parse(parsedData.boosters);
            var seed = parsedData.seed;
            return new SavedGameState(coins, levelStats, wasGameComplete, gameOverState, freeBoosters, gridState, boosters, seed);
        };
        SavedGameState.prototype.toString = function () {
            var data = {
                coins: this._coins,
                levelStats: this.levelStats.toString(),
                wasGameComplete: this.wasGameComplete,
                gameOverState: this.gameOverState,
                freeBoosters: this.freeBoosters,
                gridState: this.gridState.toString(),
                boosters: JSON.stringify(this.boosters),
                seed: this._seed,
            };
            return JSON.stringify(data);
        };
        SavedGameState.prototype.destroy = function () {
            this.levelStats = null;
            this.gridState.destroy();
            this.gridState = null;
            this.boosters = null;
        };
        Object.defineProperty(SavedGameState.prototype, "coins", {
            get: function () {
                return this._coins;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SavedGameState.prototype, "seed", {
            get: function () {
                return this._seed;
            },
            enumerable: false,
            configurable: true
        });
        return SavedGameState;
    }());
    game.SavedGameState = SavedGameState;
})(game || (game = {}));
///<reference path='SaveGameState.ts' />
var game;
(function (game) {
    var UndoHandler = /** @class */ (function () {
        function UndoHandler() {
            this.maxSaveNum = 3;
            this.gameStates = [];
        }
        UndoHandler.prototype.save = function (gameState) {
            this.gameStates.push(gameState);
            if (this.gameStates.length > this.maxSaveNum) {
                var oldestSave = this.gameStates.shift();
                oldestSave.destroy();
                oldestSave = null;
            }
        };
        UndoHandler.prototype.getSave = function (offset) {
            if (offset === void 0) { offset = 0; }
            var index = (offset < 0) ? this.gameStates.length + offset : offset;
            if (index >= 0) {
                return this.gameStates[index];
            }
            else {
                return null;
            }
        };
        UndoHandler.prototype.getEarliestSave = function () {
            if (this.gameStates.length > 0) {
                return this.gameStates[0];
            }
            else {
                return null;
            }
        };
        UndoHandler.prototype.popLatestSave = function () {
            if (this.gameStates.length > 0) {
                return this.gameStates.pop();
            }
            else {
                return null;
            }
        };
        UndoHandler.prototype.removeLatestSave = function () {
            if (this.gameStates.length > 0) {
                var lastSave = this.gameStates.pop();
                lastSave.destroy();
                lastSave = null;
            }
        };
        UndoHandler.prototype.savedStatesNum = function () {
            return this.gameStates.length;
        };
        UndoHandler.prototype.clearSavesAfter = function (save) {
            var index = this.gameStates.indexOf(save);
            if (index > -1) {
                var l = this.gameStates.length;
                for (var i = index; i < l; i++) {
                    this.gameStates[i].destroy();
                }
                this.gameStates.length = index;
            }
        };
        UndoHandler.prototype.clearAllSaves = function () {
            this.gameStates.forEach(function (gameState) {
                gameState.destroy();
            });
            this.gameStates.length = 0;
        };
        UndoHandler.prototype.destroy = function () {
            this.clearAllSaves();
            this.gameStates = null;
        };
        return UndoHandler;
    }());
    game.UndoHandler = UndoHandler;
})(game || (game = {}));
var game;
(function (game) {
    var BoosterMode = /** @class */ (function () {
        function BoosterMode(_game, grid, itemsLayer, itemsAligner) {
            this.active = false;
            this.game = _game;
            this.grid = grid;
            this.itemsLayer = itemsLayer;
            this.itemsAligner = itemsAligner;
            this.onAddItem = new Phaser.Signal();
            this.onBoosterComplete = new Phaser.Signal();
            this.onSave = new Phaser.Signal();
            this.initCallbacks();
        }
        BoosterMode.prototype.initCallbacks = function () {
            this.callbacks = {};
            this.callbacks[game.BoosterType.REMOVE] = this.applyRemoveItem;
            this.callbacks[game.BoosterType.MAGNET] = this.applyMagnet;
            this.callbacks[game.BoosterType.SORT] = this.applySort;
            this.callbacks[game.BoosterType.UPGRADE] = this.applyUpgrade;
            this.preCallbacks = {};
            this.preCallbacks[game.BoosterType.REMOVE] = this.dummyPrecallback;
            this.preCallbacks[game.BoosterType.SORT] = this.dummyPrecallback;
            this.preCallbacks[game.BoosterType.MAGNET] = this.canApplyMagnet;
            this.preCallbacks[game.BoosterType.UPGRADE] = this.canApplyUpgrade;
        };
        BoosterMode.prototype.dummyPrecallback = function (item) {
            if (item === void 0) { item = null; }
            return true;
        };
        BoosterMode.prototype.activate = function (items, boosterType) {
            console.assert(this.active === false);
            //trace("BoosterMode activated!", boosterType);
            this.active = true;
            this.activeItems = items;
            this.boosterType = boosterType;
            this.game.input.onDown.add(this.onInputDown, this);
            this.startFloatItems();
        };
        BoosterMode.prototype.startFloatItems = function () {
            var _this = this;
            this.activeItems
                .sort(this.sortItemsUpBottom)
                .reverse()
                .forEach(function (item, index) {
                var delay = Phaser.Math.wrap(index * 100, 0, 400);
                item.floatTween = _this.game.add.tween(item).to({ y: "-16" }, 550, Phaser.Easing.Sinusoidal.InOut, true, delay, -1, true);
            });
        };
        BoosterMode.prototype.sortItemsUpBottom = function (item1, item2) {
            var cell1 = item1.cell;
            var cell2 = item2.cell;
            if (cell1.row === cell2.row)
                return cell2.column - cell1.column;
            else
                return cell1.row - cell2.row;
        };
        BoosterMode.prototype.stopFloatItems = function () {
            this.activeItems.forEach(function (item) {
                if (item.floatTween) {
                    item.floatTween.stop(false);
                    item.floatTween = null;
                }
                item.alignToCellCenterSmooth(200);
                // item.alignToCellCenterInstant();
            });
        };
        BoosterMode.prototype.onInputDown = function (pointer) {
            if (this.active === false) {
                return;
            }
            var cell = this.grid.getCellUnderPoint(pointer.x, pointer.y);
            if (cell && cell.item) {
                var preCallback = this.preCallbacks[this.boosterType];
                var performCallback = preCallback.call(this, cell.item);
                var callback = this.callbacks[this.boosterType];
                if (callback && performCallback) {
                    this.game.raven.addExtraContext({
                        lastBooster: this.boosterType,
                        lastBoosterCell: "[column: " + cell.column + ", row: " + cell.row + "]",
                        lastBoosterItem: cell.item.itemType,
                    });
                    this.game.sound.play('pop_2', 0.5);
                    this.active = false;
                    this.stopFloatItems();
                    this.beforeBoosterStart();
                    callback.call(this, cell.item);
                }
            }
        };
        BoosterMode.prototype.beforeBoosterStart = function () {
            this.onSave.dispatch();
            this.game.boosters.getBooster(this.boosterType).num--;
        };
        BoosterMode.prototype.applyRemoveItem = function (item) {
            item.parent.bringToTop(item);
            item.onRemoveBoosterComplete.addOnce(this.onRemoveItemComplete, this);
            item.applyRemoveBooster();
        };
        BoosterMode.prototype.onRemoveItemComplete = function (item) {
            this.removeItem(item);
            this.updateGridAfterBooster();
        };
        BoosterMode.prototype.canApplyMagnet = function (centralItem) {
            var _this = this;
            var filteredItems = this.activeItems.filter(function (item) {
                return item.itemType === centralItem.itemType;
            });
            if (filteredItems.length < 3) {
                var message = this.game.boosters.getBooster(game.BoosterType.MAGNET).warning;
                this.game.toast.show(message);
                filteredItems.forEach(function (item, index) {
                    _this.game.add.tween(item.scale).to({
                        x: 1.1,
                        y: 1.1,
                    }, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, 6, true);
                });
                return false;
            }
            return true;
        };
        BoosterMode.prototype.applyMagnet = function (centralItem) {
            this.attractItems(centralItem);
            centralItem.parent.bringToTop(centralItem);
            centralItem.animateAsMagnet();
        };
        BoosterMode.prototype.attractItems = function (centralItem) {
            var _this = this;
            var delay = 100;
            _(this.activeItems)
                .without(centralItem)
                .filter({ itemType: centralItem.itemType })
                .forEach(function (item, index) {
                item.parent.bringToTop(item);
                _this.applyMagnetToItem(centralItem, item, delay);
                delay += 33;
            });
            this.game.time.events.add(delay + 300, this.onMagnetComplete, this, centralItem);
        };
        BoosterMode.prototype.applyMagnetToItem = function (centralItem, item, delay) {
            var _this = this;
            this.game.time.events.add(delay, function () {
                _this.game.tweens.removeFrom(item);
                _this.game.add.tween(item).to({ x: centralItem.x, y: centralItem.y }, 350, Phaser.Easing.Back.In, true)
                    .onComplete.addOnce(function () {
                    _this.removeItem(item);
                });
            }, this);
        };
        BoosterMode.prototype.onMagnetComplete = function (centralItem) {
            this.game.audio.playSound('item_convert_2', 0.25);
            var newItemType = centralItem.itemType + 1;
            var cell = centralItem.cell;
            centralItem.stopMagnetAnimation();
            this.removeItem(centralItem);
            this.onAddItem.dispatch(cell, newItemType);
            this.game.time.events.add(600, this.updateGridAfterBooster, this);
        };
        BoosterMode.prototype.applySort = function (item) {
            this.game.audio.playSound("shuffle", 0.66);
            this.shakeGrid();
            this.sortItems();
        };
        BoosterMode.prototype.shakeGrid = function () {
            this.game.add.tween(this.itemsLayer).to({ x: "+10" }, 75, Phaser.Easing.Sinusoidal.InOut, true, 0, 5, true);
        };
        BoosterMode.prototype.sortItems = function () {
            var _this = this;
            this.activeItems.sort(this.sortItemsByType);
            this.activeItems.forEach(function (item) {
                item.clearCell();
            });
            this.activeItems.forEach(function (item, index) {
                var cell = _this.grid.cells[index];
                item.linkCell(cell);
                item.stopAlignTween();
                item.alignToCellCenterInstant();
                item.alpha = 0;
                item.y -= 20;
                var delay = index * 33 + 100;
                var tween = _this.game.add.tween(item).to({
                    y: "+20",
                    alpha: 1,
                }, 330, Phaser.Easing.Cubic.Out, true, delay);
                if (index === _this.activeItems.length - 1) {
                    tween.onComplete.addOnce(_this.onBoosterCompleteCallback, _this);
                }
            });
        };
        BoosterMode.prototype.sortItemsByType = function (item_1, item_2) {
            return item_1.itemType - item_2.itemType;
        };
        BoosterMode.prototype.removeItem = function (item) {
            item.clearCell();
            item.onAddToPool();
            _.pull(this.activeItems, item);
        };
        BoosterMode.prototype.updateGridAfterBooster = function () {
            this.itemsAligner.onAlignComplete.addOnce(this.onBoosterCompleteCallback, this);
            this.itemsAligner.alignAndRefill(this.activeItems);
        };
        BoosterMode.prototype.canApplyUpgrade = function (item) {
            if (item.itemType === 12) {
                var warning = this.game.boosters.getBooster(game.BoosterType.UPGRADE).warning;
                this.game.toast.show(warning);
                console.warn("BoosterMode :: ", warning);
                this.game.add.tween(item).to({ x: "+6" }, 80, Phaser.Easing.Sinusoidal.InOut, true, 0, 3, true);
                return false;
            }
            return true;
        };
        BoosterMode.prototype.applyUpgrade = function (item) {
            var _this = this;
            this.game.sound.play('new_item', 0.5);
            var delay = 33;
            var itemsToUpgrade = _(this.activeItems)
                .filter({ itemType: item.itemType })
                .sort(this.sortItemsByGridPosition.bind(this))
                .value();
            itemsToUpgrade.forEach(function (item, index) {
                _this.game.time.events.add(index * delay, item.upgrade, item);
            });
            var finalDelay = itemsToUpgrade.length * delay + 100;
            this.game.time.events.add(finalDelay, this.onBoosterCompleteCallback, this);
        };
        BoosterMode.prototype.sortItemsByGridPosition = function (item_1, item_2) {
            var z1 = item_1.cell.row * this.grid.columns + item_1.cell.column;
            var z2 = item_2.cell.row * this.grid.columns + item_2.cell.column;
            return z1 - z2;
        };
        BoosterMode.prototype.onBoosterCompleteCallback = function () {
            this.active = false;
            this.game.input.onDown.remove(this.onInputDown, this);
            this.itemsAligner.onAlignComplete.remove(this.onBoosterCompleteCallback, this);
            this.onBoosterComplete.dispatch(this.boosterType);
        };
        BoosterMode.prototype.dispatchNewItemEvent = function (cell, itemType) {
            this.onAddItem.dispatch(cell, itemType);
        };
        BoosterMode.prototype.cancel = function () {
            this.active = false;
            this.game.input.onDown.remove(this.onInputDown, this);
            this.stopFloatItems();
        };
        BoosterMode.prototype.destroy = function () {
            this.game.input.onDown.remove(this.onInputDown, this);
            this.itemsAligner.onAlignComplete.remove(this.onBoosterCompleteCallback, this);
            this.callbacks = null;
            this.activeItems = null;
            this.grid = null;
            this.game = null;
            this.itemsAligner = null;
            this.disposeSignals();
        };
        BoosterMode.prototype.disposeSignals = function () {
            this.onAddItem.dispose();
            this.onAddItem = null;
            this.onBoosterComplete.dispose();
            this.onBoosterComplete = null;
            this.onSave.dispose();
            this.onSave = null;
        };
        return BoosterMode;
    }());
    game.BoosterMode = BoosterMode;
})(game || (game = {}));
var game;
(function (game) {
    var PanelStars = /** @class */ (function (_super) {
        __extends(PanelStars, _super);
        function PanelStars(_game, parent, key, frame) {
            var _this = _super.call(this, _game, parent, "panel_stars") || this;
            var scales = [0.44, 0.66, 1];
            _this.createMultiple(scales.length, key, frame, true);
            _this.children.forEach(function (child, index) {
                child.anchor.set(0.5, 0.5);
                child.scale.set(scales[index]);
            });
            _this.align(_this.numChildren, 1, 40, 70, Phaser.CENTER);
            _this.children[1].x -= 5;
            return _this;
        }
        PanelStars.prototype.show = function (initialDelay) {
            var _this = this;
            this.children.reverse().forEach(function (child, index) {
                var delay = initialDelay + index * 100;
                var duration = 330 + 120 * index;
                _this.game.add.tween(child).from({ x: child.x - 66, alpha: 0, angle: -50 }, duration, Phaser.Easing.Cubic.Out, true, delay);
            });
        };
        PanelStars.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return PanelStars;
    }(Phaser.Group));
    game.PanelStars = PanelStars;
})(game || (game = {}));
///<reference path='../../../../gui/PanelStars.ts' />
var game;
(function (game) {
    var VictoryTopPanel = /** @class */ (function (_super) {
        __extends(VictoryTopPanel, _super);
        function VictoryTopPanel(_game, parent) {
            var _this = _super.call(this, _game, parent, "victory_panel") || this;
            _this.addBack();
            _this.addTitle();
            _this.addStars();
            _this.bringToTop(_this.title);
            return _this;
        }
        VictoryTopPanel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "interface", "Victory_Back0000", this);
        };
        VictoryTopPanel.prototype.addTitle = function () {
            var content = this.game.texts.texts.victory;
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 60,
                fill: "#ffffff",
                align: "center",
            };
            this.title = this.game.add.text(0, 0, content, style, this);
            this.title.anchor.set(0.5, 0.5);
            this.title.centerX = this.back.centerX;
            this.title.centerY = this.back.centerY + 3;
        };
        VictoryTopPanel.prototype.addStars = function () {
            var titleMargin = 26;
            var key = "interface";
            var frame = "Little_Star0000";
            this.leftStars = new game.PanelStars(this.game, this, key, frame);
            this.leftStars.right = this.title.left - titleMargin;
            this.leftStars.centerY = this.title.centerY;
            this.rightStars = new game.PanelStars(this.game, this, key, frame);
            this.rightStars.scale.x = -1;
            this.rightStars.left = this.title.right + titleMargin;
            this.rightStars.centerY = this.title.centerY;
        };
        VictoryTopPanel.prototype.show = function (delay) {
            this.visible = true;
            this.showMain(delay);
            this.showStars(delay);
        };
        VictoryTopPanel.prototype.showMain = function (delay) {
            var yOffset = 40 * game.Config.ASSETS_SCALE;
            this.y -= yOffset;
            this.alpha = 0;
            this.game.add.tween(this).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true, delay);
            this.game.add.tween(this).to({ y: this.y + yOffset }, 330, Phaser.Easing.Back.Out, true, delay);
        };
        VictoryTopPanel.prototype.showStars = function (initialDelay) {
            var delay = initialDelay + 0.1;
            this.leftStars.show(delay);
            this.rightStars.show(delay);
        };
        return VictoryTopPanel;
    }(Phaser.Group));
    game.VictoryTopPanel = VictoryTopPanel;
})(game || (game = {}));
var game;
(function (game) {
    var FinalItem = /** @class */ (function (_super) {
        __extends(FinalItem, _super);
        function FinalItem(_game, parent) {
            var _this = _super.call(this, _game, parent, "final_item") || this;
            _this.onAnimationComplete = new Phaser.Signal();
            _this.addImage();
            _this.addWhite();
            return _this;
        }
        FinalItem.prototype.addImage = function () {
            this.image = this.game.add.image(0, 0, "interface", "Tile0000", this);
            this.image.anchor.set(0.5, 0.5);
            this.originalWidth = this.image.width;
        };
        FinalItem.prototype.addWhite = function () {
            this.white = this.game.add.image(0, 0, "interface", "Tile_White0000", this);
            this.white.anchor.set(0.5, 0.5);
            this.white.visible = false;
        };
        FinalItem.prototype.saveInitialPosition = function (x, y) {
            this.initialPos = new Phaser.Point(x, y);
        };
        FinalItem.prototype.show = function () {
            var _this = this;
            var targetScale = 116 / this.originalWidth;
            this.visible = true;
            this.scale.set(0);
            this.game.add.tween(this.scale).to({ x: targetScale, y: targetScale }, 400, Phaser.Easing.Back.Out, true)
                .onComplete.addOnce(function () {
                _this.game.add.tween(_this.scale).to({ x: 0.8, y: 0.8 }, 300, Phaser.Easing.Sinusoidal.InOut, true, 0, 2, true)
                    .onComplete.addOnce(function () {
                    _this.game.add.tween(_this.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Back.Out, true, 33)
                        .onComplete.addOnce(function () {
                        _this.show3();
                    });
                });
            });
            this.showWhite();
        };
        FinalItem.prototype.showWhite = function () {
            this.white.visible = true;
            this.white.alpha = 0.1;
            this.game.add.tween(this.white).to({ alpha: 0.66 }, 100, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(this.hideWhite, this);
        };
        FinalItem.prototype.hideWhite = function () {
            var _this = this;
            this.game.add.tween(this.white).to({ alpha: 0 }, 1500, Phaser.Easing.Cubic.In, true)
                .onComplete.addOnce(function () {
                _this.white.visible = false;
            });
        };
        FinalItem.prototype.show2 = function () {
            var _this = this;
            this.game.add.tween(this).to({ angle: -5 }, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, 8, true);
            this.game.add.tween(this.scale).to({ x: 1, y: 1 }, 1600, Phaser.Easing.Linear.None, true)
                .onComplete.addOnce(function () {
                _this.show3();
            });
        };
        FinalItem.prototype.show3 = function () {
            var _this = this;
            var distance = this.position.distance(this.initialPos);
            var duration = Phaser.Math.clamp(distance, 500, 1500);
            this.game.add.tween(this).to({ x: this.initialPos.x, y: this.initialPos.y, angle: 0 }, duration, Phaser.Easing.Back.InOut, true)
                .onComplete.addOnce(function () {
                _this.onAnimationComplete.dispatch(_this);
            });
        };
        FinalItem.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.onAnimationComplete.dispose();
            this.onAnimationComplete = null;
        };
        return FinalItem;
    }(Phaser.Group));
    game.FinalItem = FinalItem;
})(game || (game = {}));
///<reference path='VictoryPanel.ts' />
///<reference path='FinalItem.ts' />
var game;
(function (game) {
    var GameCompleteScreen = /** @class */ (function (_super) {
        __extends(GameCompleteScreen, _super);
        function GameCompleteScreen(_game, parent, levelStats) {
            var _this = _super.call(this, _game, parent, "game_complete") || this;
            _this.levelStats = levelStats;
            _this.onBackFadeInComplete = new Phaser.Signal();
            _this.onHideStarted = new Phaser.Signal();
            _this.onHideComplete = new Phaser.Signal();
            _this.escKey = _this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            _this.sendGameCompleteEvent();
            _this.addBackground();
            _this.addVictoryPanel();
            _this.addCentralItem();
            _this.addCrown();
            _this.addShareButton();
            _this.addButtons();
            _this.addWhiteOverlay();
            _this.bringToTop(_this.victoryPanel);
            return _this;
        }
        GameCompleteScreen.prototype.sendGameCompleteEvent = function () {
        };
        GameCompleteScreen.prototype.addBackground = function () {
            this.bg = new game.GameBackground(this.game);
            this.add(this.bg);
        };
        GameCompleteScreen.prototype.addVictoryPanel = function () {
            this.victoryPanel = new game.VictoryTopPanel(this.game, this);
        };
        GameCompleteScreen.prototype.addCentralItem = function () {
            this.centralItemBack = this.game.add.image(0, 0, "interface", "Cental_Item_Back0000", this);
            this.centralItemBack.anchor.set(0.5, 0.5);
            // this.centralItemBack.tint = 0xFFFAD0;
            this.centralItemBack.alpha = 0.8;
            this.centralItem = new game.FinalItem(this.game, this);
        };
        GameCompleteScreen.prototype.addCrown = function () {
            this.crown = this.game.add.image(0, 0, "interface", "Crown0000", this);
            this.crown.anchor.set(0.5, 1);
        };
        GameCompleteScreen.prototype.addShareButton = function () {
            this.shareButton = new game.SimpleButton(this.game, 0, 0, "interface", "Button_Share0000", this);
            this.shareButton.events.onInputUp.add(this.onShareButtonClick, this);
        };
        GameCompleteScreen.prototype.onShareButtonClick = function () {
            var highscore = this.game.store.getNumber(game.GameStoreKey.BEST_ITEM);
            var text = this.game.texts.texts["share_highscore"].replace("#", highscore.toString());
            // let image: string = this.getShareImage()
            this.game.share
                .share(text)
                .catch(function (error) {
                console.warn(error);
            });
        };
        GameCompleteScreen.prototype.getShareImage = function () {
            var image = this.game.make.image(0, 0, "main_menu", "Item_130000");
            var dataURL = this.game.make
                .bitmapData(image.width, image.height)
                .drawFull(image)
                .canvas.toDataURL();
            // utils.NetUtil.openWindowWithImage(dataURL);
            return dataURL;
        };
        GameCompleteScreen.prototype.addButtons = function () {
            var _a;
            var _this = this;
            var buttonFrames = ["Button_Rate0000", "Button_Continue0000", "Button_Home0000"];
            this.bottomButtons = buttonFrames.map(function (texture) {
                return new game.SimpleButton(_this.game, 0, 0, "interface", texture, _this);
            });
            _a = this.bottomButtons, this.friendsButton = _a[0], this.continueButton = _a[1], this.menuButton = _a[2];
            this.friendsButton.callback.add(this.onFriendsButtonClick, this);
            this.continueButton.callback.addOnce(this.hide, this);
            this.menuButton.callback.addOnce(this.onMenuButtonClick, this);
            this.buttonsGroup = this.game.add.group(this, "bottomButtons");
            this.buttonsGroup.addMultiple(this.bottomButtons, true);
            this.buttonsGroup.align(this.bottomButtons.length, 1, 150, 155, Phaser.CENTER);
        };
        GameCompleteScreen.prototype.onFriendsButtonClick = function () {
        };
        GameCompleteScreen.prototype.onMenuButtonClick = function () {
            this.game.changeState("BoostersShop");
        };
        GameCompleteScreen.prototype.addWhiteOverlay = function () {
            this.whiteOverlay = this.game.add.image(0, 0, "interface", "white_rect0000", this);
            this.whiteOverlay.visible = false;
        };
        GameCompleteScreen.prototype.show = function (originalItem) {
            this.setVisibility();
            this.showBackground();
            this.showFinalItem(originalItem);
        };
        GameCompleteScreen.prototype.setVisibility = function () {
            this.visible = true;
            this.bg.visible = false;
            this.victoryPanel.visible = false;
            this.centralItemBack.visible = false;
            this.crown.visible = false;
            this.shareButton.visible = false;
            this.bottomButtons.forEach(function (button) {
                button.visible = false;
            });
        };
        GameCompleteScreen.prototype.showBackground = function () {
            var _this = this;
            this.bg.visible = true;
            this.bg.alpha = 0;
            this.game.add.tween(this.bg).to({ alpha: 1 }, 2800, Phaser.Easing.Linear.None, true)
                .onComplete.addOnce(function () {
                _this.onBackFadeInComplete.dispatch();
            });
        };
        GameCompleteScreen.prototype.showFinalItem = function (item) {
            var worldItemPosition = item.parent.toGlobal(item.position);
            this.centralItem.x = worldItemPosition.x;
            this.centralItem.y = worldItemPosition.y;
            this.centralItem.onAnimationComplete.addOnce(this.show2, this);
            this.centralItem.show();
        };
        GameCompleteScreen.prototype.show2 = function () {
            this.escKey.onDown.addOnce(this.hide, this);
            this.showCentralItemBack(330);
            this.showCrown(660);
            this.showWhiteOverlay(1700);
            this.victoryPanel.show(2700);
            this.showButtons(3500);
            this.game.time.events.add(1000, this.shakeShareButton, this);
        };
        GameCompleteScreen.prototype.showCentralItemBack = function (initialDelay) {
            this.centralItemBack.visible = true;
            this.centralItemBack.scale.set(0);
            this.centralItemBack.angle = -20;
            this.game.add.tween(this.centralItemBack.scale).to({
                x: 1,
                y: 1,
            }, 400, Phaser.Easing.Back.Out, true, initialDelay);
            this.game.add.tween(this.centralItemBack).to({ angle: 0 }, 1000, Phaser.Easing.Cubic.Out, true, initialDelay);
        };
        GameCompleteScreen.prototype.showCrown = function (initialDelay) {
            var crownOffsetY = 50 * game.Config.ASSETS_SCALE;
            this.crown.scale.set(2);
            this.crown.visible = true;
            this.crown.alpha = 0;
            this.crown.y -= crownOffsetY;
            this.game.add.tween(this.crown).to({
                alpha: 1,
                y: this.crown.y + crownOffsetY,
            }, 1500, Phaser.Easing.Cubic.Out, true, initialDelay);
            this.game.add.tween(this.crown.scale).to({ x: 1, y: 1 }, 1500, Phaser.Easing.Cubic.Out, true, initialDelay);
        };
        GameCompleteScreen.prototype.showWhiteOverlay = function (initialDelay) {
            var _this = this;
            this.game.time.events.add(initialDelay, function () {
                _this.game.sound.play('game_complete_2', 0.66);
            }, this);
            this.whiteOverlay.visible = true;
            this.whiteOverlay.alpha = 0;
            this.game.add.tween(this.whiteOverlay).to({ alpha: 1 }, 66, Phaser.Easing.Cubic.Out, true, initialDelay)
                .onComplete.addOnce(function () {
                _this.game.add.tween(_this.whiteOverlay).to({ alpha: 0 }, 1000, Phaser.Easing.Exponential.In, true)
                    .onComplete.addOnce(function () {
                    _this.whiteOverlay.visible = false;
                });
            });
        };
        GameCompleteScreen.prototype.showButtons = function (initialDelay) {
            var _this = this;
            __spreadArrays([this.shareButton], this.bottomButtons).forEach(function (button, index) {
                button.visible = true;
                var delay = initialDelay + index * 100;
                _this.game.add.tween(button.scale).from({ x: 0.5, y: 0.5 }, 330, Phaser.Easing.Back.Out, true, delay);
                _this.game.add.tween(button).from({ y: "+40" }, 330, Phaser.Easing.Back.Out, true, delay);
                _this.game.add.tween(button).from({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true, delay);
            });
        };
        GameCompleteScreen.prototype.shakeShareButton = function () {
            this.game.time.events.loop(4000, this.doShakeShareButton, this);
        };
        GameCompleteScreen.prototype.doShakeShareButton = function () {
            var _this = this;
            this.game.tweens.removeFrom(this.shareButton);
            this.game.tweens.removeFrom(this.shareButton.scale);
            this.shareButton.scale.set(1);
            this.game.add.tween(this.shareButton.scale).to({
                x: 1.1,
                y: 1.1,
            }, 450, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
            var deltaAngle = 3;
            this.game.add.tween(this.shareButton).to({ angle: deltaAngle }, 100, Phaser.Easing.Linear.None, true)
                .onComplete.addOnce(function () {
                _this.game.add.tween(_this.shareButton).to({ angle: -deltaAngle }, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, 3, true)
                    .onComplete.addOnce(function () {
                    _this.game.add.tween(_this.shareButton).to({ angle: 0 }, 100, Phaser.Easing.Linear.None, true);
                });
            });
        };
        GameCompleteScreen.prototype.hide = function (e) {
            var _this = this;
            if (e === void 0) { e = null; }
            this.escKey.onDown.remove(this.hide, this);
            var hideTween = this.game.add.tween(this).to({ alpha: 0 }, 330, Phaser.Easing.Cubic.Out, true);
            hideTween.onStart.addOnce(function () {
                _this.onHideStarted.dispatch();
            });
            hideTween.onComplete.addOnce(function () {
                _this.onHideCompleteCallback();
            });
        };
        GameCompleteScreen.prototype.onHideCompleteCallback = function () {
            this.onHideComplete.dispatch();
            this.visible = false;
            this.pendingDestroy = true;
        };
        GameCompleteScreen.prototype.resize = function () {
            this.bg.resize();
            this.resizeWhiteOverlay();
            this.victoryPanel.centerX = game.Config.HALF_GAME_WIDTH;
            this.victoryPanel.top = game.Config.GAME_HEIGHT * 0.07;
            this.centralItemBack.x = game.Config.HALF_GAME_WIDTH;
            this.centralItemBack.y = game.Config.GAME_HEIGHT * 0.48;
            this.centralItem.x = game.Config.HALF_GAME_WIDTH;
            this.centralItem.y = this.centralItemBack.y + 4 * game.Config.ASSETS_SCALE;
            this.centralItem.saveInitialPosition(this.centralItem.x, this.centralItem.y);
            this.crown.x = this.centralItem.x;
            this.crown.y = this.centralItem.top + 17;
            this.shareButton.x = game.Config.HALF_GAME_WIDTH;
            this.shareButton.y = this.centralItemBack.bottom - 10;
            this.alignBottomButtons();
        };
        GameCompleteScreen.prototype.resizeWhiteOverlay = function () {
            this.whiteOverlay.width = game.Config.GAME_WIDTH * 1.25;
            this.whiteOverlay.height = game.Config.GAME_HEIGHT * 1.25;
            this.whiteOverlay.centerX = game.Config.HALF_GAME_WIDTH;
            this.whiteOverlay.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        GameCompleteScreen.prototype.alignBottomButtons = function () {
            var top = this.shareButton.bottom;
            var bottom = game.Config.GAME_HEIGHT;
            var height = bottom - top;
            this.buttonsGroup.centerX = game.Config.HALF_GAME_WIDTH;
            this.buttonsGroup.centerY = top + height / 2;
        };
        GameCompleteScreen.prototype.destroy = function () {
            this.game.time.events.removeBy(this.shakeShareButton, this);
            this.game.time.events.removeBy(this.doShakeShareButton, this);
            this.escKey.onDown.remove(this.hide, this);
            this.escKey = null;
            _super.prototype.destroy.call(this, true, false);
            this.disposeSignals();
        };
        GameCompleteScreen.prototype.disposeSignals = function () {
            this.onBackFadeInComplete.dispose();
            this.onBackFadeInComplete = null;
            this.onHideStarted.dispose();
            this.onHideStarted = null;
            this.onHideComplete.dispose();
            this.onHideComplete = null;
        };
        return GameCompleteScreen;
    }(Phaser.Group));
    game.GameCompleteScreen = GameCompleteScreen;
})(game || (game = {}));
var game;
(function (game_10) {
    var GameBackground = /** @class */ (function (_super) {
        __extends(GameBackground, _super);
        function GameBackground(game, texture, frame) {
            if (texture === void 0) { texture = "interface"; }
            if (frame === void 0) { frame = "white_rect0000"; }
            var _this = _super.call(this, game, 0, 0, texture, frame) || this;
            _this.game.world.add(_this);
            _this.tint = 0xFFF3E0;
            return _this;
        }
        GameBackground.prototype.resize = function () {
            var k = 1.25;
            this.width = game.Config.GAME_WIDTH * k;
            this.height = game.Config.GAME_HEIGHT * k;
            this.centerX = game.Config.HALF_GAME_WIDTH;
            this.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        GameBackground.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true);
        };
        return GameBackground;
    }(Phaser.Image));
    game_10.GameBackground = GameBackground;
})(game || (game = {}));
///<reference path='grid/Grid.ts' />
///<reference path='gui/LevelGUI.ts' />
///<reference path='tutorial/Tutorial.ts' />
///<reference path='items/ItemsPool.ts' />
///<reference path='items/ItemRippleFX.ts' />
///<reference path='ChainLink.ts' />
///<reference path='ItemsGenerator.ts' />
///<reference path='FindChainStrategy.ts' />
///<reference path='ItemsAligner.ts' />
///<reference path='undo/UndoHandler.ts' />
///<reference path='boosters/BoosterMode.ts' />
///<reference path='gui/gameComplete/GameCompleteScreen.ts' />
///<reference path='../../objects/GameBackground.ts' />
var game;
(function (game) {
    var Level = /** @class */ (function (_super) {
        __extends(Level, _super);
        function Level() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Level.prototype.init = function (gameState) {
            this.loadedGameState = gameState;
            this.levelStats = new game.LevelStats(this.game);
            this.activeItems = [];
            this.chain = [];
            this.chainItemType = 0;
            this.lastSelectedItem = null;
            this.pointerDown = false;
            this.pointerEnabled = false;
            this.isGameOver = false;
            this.isGameComplete = false;
            this.boostersUsed = false;
            this.isPaused = false;
            this.isGameplayStopped = false;
            this.game.store.saveValue(game.GameStoreKey.FREE_COINS_DISABLED, false);
            this.game.poki.sdk.gameplayStart();
        };
        Level.prototype.create = function () {
            this.initItemsProgress();
            this.setupLayers();
            this.initItemsGenerator();
            this.itemsPool = new game.ItemsPool(this.game, this._itemsLayer);
            this.findPossibleMovesStrategy = new game.FindChainStrategy(this.game, this.grid);
            this.initUndoHandler();
            this.initItemsAligner();
            this.initBoosterMode();
            this.fillGridFirstTime();
            this.addTutorial();
            this.addHeadstartPopup();
            this.addKeyboardCallbacks();
            this.addPointerCallbacks();
            this.resize();
            this.loadGameState();
            if (!this.tutorial && !this.gui.headstartPopup && !this.isGameOver) {
                this.pointerEnabled = true;
                this.show();
            }
        };
        Level.prototype.loadGameState = function () {
            if (!this.loadedGameState) {
                return;
            }
            this.clearActiveItems();
            this.isGameComplete = this.loadedGameState.wasGameComplete;
            this.itemsProgress[this.loadedGameState.levelStats.currentBestItemType - 1] = true;
            this.restore(this.loadedGameState);
            this.game.boosters.loadFromSave(this.loadedGameState.boosters, false);
            this.gui.gameOver.loadState(this.loadedGameState.gameOverState);
            this.gui.freeBoostersPopover.loadState(this.loadedGameState.freeBoosters);
            this.gui.boostersPanel.updateData();
            var isGameOver = !this.findPossibleMovesStrategy.hasChains(this.activeItems);
            if (isGameOver) {
                this.onGameOver(100);
            }
            console.groupCollapsed("Game state loaded");
            console.log(this.loadedGameState);
            console.groupEnd();
        };
        Level.prototype.testGameOver = function (delay) {
            var _this = this;
            this.game.time.events.add(delay, function () {
                _this.onGameOver(0);
            }, this);
        };
        Level.prototype.testGameComplete = function (delay) {
            this.game.time.events.add(delay, this.onGameComplete, this, this.game.rnd.pick(this.activeItems));
        };
        Level.prototype.initItemsProgress = function () {
            this.itemsProgress = [];
            this.itemsProgress[0] = true;
            this.itemsProgress[1] = true;
        };
        Level.prototype.setupLayers = function () {
            this.addBackground();
            this.addGrid();
            this.addItemsLayer();
            this.addChainLinks();
            this.addItemsTopLayer();
            this.addGUI();
            this.addEffects();
        };
        Level.prototype.addBackground = function () {
            this.background = new game.GameBackground(this.game);
            this.world.add(this.background);
        };
        Level.prototype.addGrid = function () {
            this.grid = new game.Grid(this.game, this.world, game.Grid.ROWS, game.Grid.COLUMNS);
        };
        Level.prototype.addItemsLayer = function () {
            this._itemsLayer = this.game.add.group(this.world, "items");
        };
        Level.prototype.addChainLinks = function () {
            var _this = this;
            var linksNum = this.grid.cells.length - 1;
            this.chainLinks = _.times(linksNum, function (num) {
                return new game.ChainLink(_this.game);
            });
            this._itemsLayer.addMultiple(this.chainLinks, true);
        };
        Level.prototype.addItemsTopLayer = function () {
            this._itemsTopLayer = this.game.add.group(this.world, "items_top");
        };
        Level.prototype.addEffects = function () {
            this.itemRippleFX = new game.ItemRippleFX(this.game, this._itemsLayer);
        };
        Level.prototype.addGUI = function () {
            this.gui = new game.LevelGUI(this.game, this.world, this);
            this.gui.pauseButton.callback.add(this.pause, this);
            this.gui.pauseScreen.resumeButton.callback.add(this.onResumeButtonClick, this);
            this.gui.onBoosterSelected.add(this.onBoosterSelected, this);
            this.gui.onBoosterCancelled.add(this.onBoosterCancelled, this);
            this.gui.onUndoSelected.add(this.undoLastAction, this);
            this.gui.gameOver.onUndo.add(this.undoLastMoves, this);
            this.gui.gameOver.onShuffle.add(this.shuffleItems, this);
            this.gui.gameOver.endGameButton.callback.addOnce(this.onEndButtonClick, this);
        };
        Level.prototype.onEndButtonClick = function () {
            this.endGame();
        };
        Level.prototype.onResumeButtonClick = function () {
            var _this = this;
            this.game.poki.commercialBreak("Gameplay:Resume")
                .finally(function () {
                _this.game.poki.sdk.gameplayStart();
                _this.resume();
            });
        };
        Level.prototype.pause = function () {
            var _this = this;
            this.isPaused = true;
            this.pointerEnabled = false;
            this.pointerDown = false;
            this.game.tweens.removeFrom(this._itemsLayer);
            this.game.add.tween(this._itemsLayer).to({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this._itemsLayer.visible = false;
            });
            this.gui.onPause(this.levelStats.moves);
            this.game.poki.sdk.gameplayStop();
        };
        Level.prototype.resume = function () {
            this.isPaused = false;
            this.pointerEnabled = true;
            this._itemsLayer.visible = true;
            this.game.tweens.removeFrom(this._itemsLayer);
            this.game.add.tween(this._itemsLayer).to({ alpha: 1 }, 200, Phaser.Easing.Cubic.Out, true);
            this.gui.onResume();
        };
        Level.prototype.gotoBoostersShop = function () {
            this.game.changeState("BoostersShop");
        };
        Level.prototype.shuffleItems = function () {
            var _this = this;
            this.activeItems.sort(function () {
                return _this.game.rnd.sign();
            });
            this.activeItems.forEach(function (item) {
                item.clearCell();
            });
            this.activeItems.forEach(function (item, index) {
                var row = Math.floor(index / game.Grid.COLUMNS);
                var column = index % game.Grid.COLUMNS;
                var cell = _this.grid.getCellAt(row, column);
                item.linkCell(cell);
                item.alignToCellCenterInstant();
            });
            if (this.findPossibleMovesStrategy.getPossibleMove(this.activeItems) === null) {
                this.shuffleItems();
            }
            else {
                this.pointerEnabled = true;
                this.isGameOver = false;
                this.gui.onContinueAfterGameOver();
                this.onShuffleComplete();
                this.saveGameStateInStore();
            }
        };
        Level.prototype.onShuffleComplete = function () {
            this.game.sound.play("shuffle", 0.66);
            this.updateShuffleAchievement();
            this.shakeGrid();
            this.activeItems.reverse().forEach(function (item, index) {
                var delay = 150 + index * 33;
                item.showOnGrid(false, delay);
            });
        };
        Level.prototype.shakeGrid = function () {
            this.game.add.tween(this._itemsLayer).to({ x: "+12" }, 80, Phaser.Easing.Sinusoidal.InOut, true, 0, 5, true);
        };
        Level.prototype.updateShuffleAchievement = function () {
            var shuffleTimes = this.game.store.getNumber(game.GameStoreKey.SHUFFLE_TIMES) + 1;
            this.game.store.saveValue(game.GameStoreKey.SHUFFLE_TIMES, shuffleTimes);
            // Game.gameServices.updateShuffleAchievement(shuffleTimes);
        };
        Level.prototype.undoLastMoves = function () {
            var undoMoves = 3;
            var savedState = this.undoHandler.getSave(undoMoves * -1);
            if (savedState === null) {
                savedState = this.undoHandler.getEarliestSave();
            }
            if (savedState) {
                this.game.sound.play("restart_1", 0.75);
                this.clearActiveItems();
                this.levelStats.coins = savedState.coins;
                this.gui.coinsLabel.updateContent(this.levelStats.coins, true);
                this.restoreBoosters(savedState.boosters);
                this.restoreGrid(savedState.gridState);
                this.itemsGenerator.setSeed(savedState.seed);
                //this.undoHandler.clearSaves();
                this.undoHandler.clearSavesAfter(savedState);
                this.isGameOver = false;
                this.pointerEnabled = true;
                this.gui.onRestore();
                this.gui.onContinueAfterGameOver();
                // very rare case - if player undo at game over state
                // we shuffle tiles then
                var isTherePossibleMoves = this.findPossibleMovesStrategy.getPossibleMove(this.activeItems) !== null;
                if (isTherePossibleMoves === false) {
                    this.shuffleItems();
                }
            }
            else {
                var message = this.game.boosters.getBooster(game.BoosterType.UNDO).warning;
                this.game.toast.show(message);
                console.warn("Can't undo last moves! There are no saved states!");
            }
        };
        Level.prototype.endGame = function () {
            this.levelStats.onLevelEnd(this.activeItems);
            var bestItem = this.getBestItemOnGrid();
            this.updateLeaderboards(bestItem);
            this.game.changeState("GameOver", {
                levelStats: this.levelStats,
                skipStartAnimation: false,
            });
        };
        Level.prototype.updateLeaderboards = function (score) {
        };
        Level.prototype.onBoosterSelected = function (boosterType) {
            this.pointerEnabled = false;
            this.boosterMode.activate(this.activeItems, boosterType);
        };
        Level.prototype.onBoosterCancelled = function () {
            this.boosterMode.cancel();
            if (this.gui.gameOver.visible === false) {
                this.pointerEnabled = true;
            }
        };
        Level.prototype.initItemsGenerator = function () {
            var difficulty = parseFloat(this.game.analytics.getRemoteConfigValue("difficulty", "1.33"));
            var initialTypes = [1, 2];
            // let initialTypes:number[] = [1, 2, 3, 4];
            // let initialTypes:number[] = [4, 5, 6, 7, 8, 9, 10, 11, 12];
            // let initialTypes:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            //let initialTypes:number[] = [10, 11, 12, 13, 14, 15, 16, 17, 18];
            this.itemsGenerator = new game.ItemsGenerator(difficulty);
            this.itemsGenerator.setAllowedItemTypes(initialTypes);
        };
        Level.prototype.initUndoHandler = function () {
            this.undoHandler = new game.UndoHandler();
            this.undoHandler.maxSaveNum = 20;
        };
        Level.prototype.initItemsAligner = function () {
            this.itemsAligner = new game.ItemsAligner(this.game, this.grid);
            this.itemsAligner.onAddItem.add(this.addItemOnRefill, this);
        };
        Level.prototype.initBoosterMode = function () {
            this.boosterMode = new game.BoosterMode(this.game, this.grid, this._itemsLayer, this.itemsAligner);
            this.boosterMode.onSave.add(this.saveGameState, this);
            this.boosterMode.onAddItem.add(this.onMagnetApplied, this);
            this.boosterMode.onBoosterComplete.add(this.onBoosterComplete, this);
        };
        Level.prototype.onMagnetApplied = function (cell, itemType) {
            var newItem = this.createAndAddItemToGrid(cell, itemType);
            newItem.parent.bringToTop(newItem);
            newItem.onConverted(1.25);
            this.updateItemsProgress(newItem);
            if (this.isGameComplete === false && newItem.itemType === 13) {
                this.onGameComplete(newItem);
            }
            this.upgradeItems();
            this.itemsGenerator.updateAllowedItemTypes(this.activeItems);
        };
        Level.prototype.onBoosterComplete = function (boosterType) {
            this.boostersUsed = true;
            this.levelStats.moves++;
            this.levelStats.updateTime();
            this.gui.onBoosterComplete();
            if (this.tutorial && this.onFirstBoosterComplete) {
                this.onFirstBoosterComplete.dispatch();
            }
            var isTherePossibleMoves = this.findPossibleMovesStrategy.getPossibleMove(this.activeItems) !== null;
            // let fastGameOver:boolean = (Game.debugPanel) ? Game.debugPanel.fastGameOver : false; // TODO implement DebugPanel
            var fastGameOver = false;
            if (isTherePossibleMoves === false || fastGameOver) {
                this.onGameOver();
            }
            else {
                if (!this.tutorial) {
                    this.pointerEnabled = true;
                    this.pointerDown = false;
                    this.isGameOver = false;
                }
            }
        };
        Level.prototype.addItemOnRefill = function (cell, delay) {
            var item = this.createAndAddItemToGrid(cell);
            item.showOnGrid(false, delay / 1000);
        };
        Level.prototype.createAndAddItemToGrid = function (cell, itemType) {
            if (itemType === void 0) { itemType = 0; }
            var iType = (itemType === 0) ? this.itemsGenerator.getNewItemType() : itemType;
            var item = this.itemsPool.getItem(iType);
            item.x = cell.column * game.Cell.WIDTH + game.Cell.WIDTH * 0.5;
            item.y = cell.row * game.Cell.HEIGHT + game.Cell.HEIGHT * 0.5;
            item.linkCell(cell);
            this.activeItems.push(item);
            return item;
        };
        Level.prototype.fillGridFirstTime = function () {
            var _this = this;
            this.grid.cells.forEach(function (cell) {
                _this.createAndAddItemToGrid(cell);
            });
        };
        Level.prototype.addTutorial = function () {
            var skipTutorial = utils.NetUtil.getParamBool("skipTutorial");
            if (skipTutorial) {
                return;
            }
            var isTutorialPassed = this.game.store.getBoolean(game.GameStoreKey.TUTORIAL_COMPLETE);
            if (isTutorialPassed) {
                return;
            }
            this.onFirstComboComplete = new Phaser.Signal();
            this.onFirstBoosterComplete = new Phaser.Signal();
            this.tutorial = this.gui.addTutorial();
            this.tutorial.onComplete.addOnce(this.onTutorialComplete, this);
            this.tutorial.show();
        };
        Level.prototype.onTutorialComplete = function (e) {
            this.game.store.saveValue(game.GameStoreKey.TUTORIAL_COMPLETE, true);
            this.tutorial.pendingDestroy = true;
            this.tutorial = null;
            this.pointerEnabled = true;
        };
        Level.prototype.addHeadstartPopup = function () {
            if (this.tutorial) {
                return;
            }
            var hasSavedState = !!this.loadedGameState;
            var popupEnabled = this.game.store.getBoolean(game.GameStoreKey.HEADSTART_POPUP_DSIABLED) === false;
            var bestScore = this.game.store.getNumber(game.GameStoreKey.BEST_ITEM);
            var forcePopup = utils.NetUtil.getParamBool("headstartPopup");
            if ((hasSavedState === false && popupEnabled && bestScore >= 6) || forcePopup) {
                this.gui.addHeadstartPopup();
                this.gui.headstartPopup.onHide.addOnce(this.onHeadstartPopupHide, this);
                this.gui.headstartPopup.onRewardedAdComplete.addOnce(this.onHeadstartPopupVideoComplete, this);
                this.gui.headstartPopup.show();
            }
        };
        Level.prototype.onHeadstartPopupHide = function () {
            this.pointerEnabled = true;
        };
        Level.prototype.onHeadstartPopupVideoComplete = function () {
            this.game.time.events.add(160, this.applyHeadstart, this);
        };
        Level.prototype.applyHeadstart = function () {
            this.game.sound.play("fforward", 0.5);
            this.activeItems.forEach(function (item, index) {
                item.upgrade(item.itemType + 3, index * 33);
            });
        };
        Level.prototype.onPointerDown = function (pointer) {
            if (this.gui.gameOver.visible && this.boosterMode.active === false) {
                var gridBounds = this.grid.getBounds(this.world).toPhaser();
                if (gridBounds.contains(pointer.worldX, pointer.worldY)) {
                    this.game.sound.play("muted_error", 0.66);
                    this.gui.gameOver.shake();
                    this.gui.boostersPanel.shakeButtons();
                }
            }
            if (this.pointerEnabled) {
                this.pointerDown = true;
                this.chain.length = 0;
                this.chainItemType = 0;
                this.lastSelectedItem = null;
            }
        };
        Level.prototype.onPointerUp = function (pointer) {
            if (!(this.pointerEnabled && this.pointerDown)) {
                return;
            }
            this.pointerDown = false;
            this.hideAllChainLinks();
            this.fadeInAllItems();
            if (this.chain.length <= 2) {
                this.unhighlightChainItems();
                return;
            }
            this.pointerEnabled = false;
            this.saveGameState();
            this.collectItems();
            this.gui.topPanel.disableButtons();
            this.gui.boostersPanel.disableInput();
        };
        Level.prototype.hideAllChainLinks = function () {
            this.chainLinks.forEach(function (link) {
                link.hide();
            });
        };
        Level.prototype.fadeOutSomeItems = function (itemType) {
            if (this.tutorial) {
                return;
            }
            var l = this.activeItems.length;
            for (var i = 0; i < l; i++) {
                var item = this.activeItems[i];
                if (item.itemType !== itemType) {
                    item.alpha = 0.33;
                }
            }
        };
        Level.prototype.fadeInAllItems = function () {
            if (this.tutorial) {
                return;
            }
            var l = this.activeItems.length;
            for (var i = 0; i < l; i++) {
                this.activeItems[i].alpha = 1;
            }
        };
        Level.prototype.unhighlightChainItems = function () {
            var l = this.chain.length;
            for (var i = 0; i < l; i++) {
                this.chain[i].onDeselected();
            }
        };
        Level.prototype.collectItems = function () {
            var _this = this;
            var targetCellColumn = this.lastSelectedItem.cell.column;
            var targetCellRow = this.lastSelectedItem.cell.row;
            this.lastSelectedItem.onCollectComplete.addOnce(this.onChainCollected.bind(this, this.lastSelectedItem, this.lastSelectedItem.itemType, targetCellColumn, targetCellRow));
            this.chain.forEach(function (item) {
                item.clearCell();
                item.collect(_this.lastSelectedItem.x, _this.lastSelectedItem.y);
                item.parent.bringToTop(item);
                _this.removeFromActiveItems(item);
            });
        };
        Level.prototype.onChainCollected = function (item, itemType, column, row) {
            if (this.tutorial && this.onFirstComboComplete) {
                this.onFirstComboComplete.dispatch();
            }
            this.levelStats.moves++;
            this.levelStats.updateTime();
            this.levelStats.currentBestItemType = this.getBestItemOnGrid();
            this.calculateCoins();
            var newItemType = itemType + 1;
            var convertedItem = this.convertChainToNewItem(newItemType, column, row);
            this.updateHighscore(convertedItem);
            this.upgradeItems();
            this.updateSkillAchievements(convertedItem);
            var fastGameComplete = utils.NetUtil.getParamBool("fastGameComplete");
            if (this.isGameComplete === false && convertedItem.itemType === 13 || fastGameComplete) {
                convertedItem.visible = false;
                this.onGameComplete(convertedItem);
                this.game.poki.sdk.happyTime(1);
            }
            else {
                this.itemsGenerator.updateAllowedItemTypes(this.activeItems);
                this.game.time.events.add(200, this.onCollectComplete, this);
            }
        };
        Level.prototype.updateHighscore = function (newItem) {
            var newItemType = newItem.itemType;
            var currentHighscore = this.game.store.getNumber(game.GameStoreKey.BEST_ITEM);
            if (newItemType > currentHighscore) {
                this.game.store.saveValue(game.GameStoreKey.BEST_ITEM, newItemType);
                this.updateLeaderboards(newItemType);
                if (newItem.itemType > 2) {
                    this.gui.showHighscoreToast(newItem);
                    var happyTimeScale = Math.min(0.7, (newItemType / 10) - 0.2);
                    this.game.poki.sdk.happyTime(happyTimeScale);
                }
            }
        };
        Level.prototype.onGameComplete = function (item) {
            this.game.sound.play("game_complete_1");
            this.isGameComplete = true;
            this.gui.topPanel.disableInput();
            this.gui.boostersPanel.disableInput();
            this.levelStats.onLevelEnd(this.activeItems);
            this.saveGameStateInStore();
            this.gameCompleteScreen = new game.GameCompleteScreen(this.game, this.world, this.levelStats);
            this.gameCompleteScreen.onBackFadeInComplete.addOnce(this.hideOnGameComplete, this);
            this.gameCompleteScreen.onHideStarted.addOnce(this.showAfterGameComplete, this);
            this.gameCompleteScreen.onHideComplete.addOnce(this.onGameCompleteHide, this);
            this.gameCompleteScreen.resize();
            this.gameCompleteScreen.show(item);
        };
        Level.prototype.hideOnGameComplete = function () {
            [this._itemsLayer, this._itemsTopLayer, this.gui].forEach(function (child) {
                child.visible = false;
            });
        };
        Level.prototype.showAfterGameComplete = function () {
            [this._itemsLayer, this._itemsTopLayer, this.gui].forEach(function (child) {
                child.visible = true;
            });
            this.activeItems.forEach(function (item) {
                item.visible = true;
            });
        };
        Level.prototype.onGameCompleteHide = function () {
            this.itemsGenerator.updateAllowedItemTypes(this.activeItems);
            this.onCollectComplete();
        };
        Level.prototype.removeFromActiveItems = function (item) {
            _.pull(this.activeItems, item);
        };
        Level.prototype.calculateCoins = function () {
            var k = this.chainItemType;
            var coinsAddNum = this.chain.length * k;
            this.levelStats.coins += coinsAddNum;
            this.game.store.changeCoins(coinsAddNum);
            this.gui.coinsLabel.updateContent(this.game.store.getCoins());
            //let x:number = this.grid.x + this.lastSelectedItem.x + 20;
            //let y:number = this.grid.y + this.lastSelectedItem.y - 100;
            //this.gui.showCoinsFX(coinsAddNum, this.coins, x, y);
        };
        Level.prototype.convertChainToNewItem = function (newItemType, column, row) {
            var itemWorldPosition = this._itemsLayer.toGlobal(this.lastSelectedItem.position);
            var cell = this.grid.getCellAt(row, column);
            var newItem = this.createAndAddItemToGrid(cell, newItemType);
            newItem.onConverted();
            this.updateItemsProgress(newItem);
            return newItem;
        };
        Level.prototype.updateItemsProgress = function (item) {
            var unlocked = this.itemsProgress[item.itemType - 1];
            if (!unlocked) {
                this.itemsProgress[item.itemType - 1] = true;
                this.showFadingCircles(item);
                this.game.audio.playSound("item_convert", 0.33);
            }
            else {
                this.game.audio.playSound("item_convert_2", 0.22);
            }
        };
        Level.prototype.showFadingCircles = function (newItem) {
            this.itemRippleFX.x = newItem.x;
            this.itemRippleFX.y = newItem.y;
            this.itemRippleFX.show(newItem);
        };
        Level.prototype.upgradeItems = function () {
            var bestItemType = this.itemsGenerator.getBestItemType(this.activeItems);
            var worstType = this.itemsGenerator.getWorstItemType(bestItemType);
            var l = this.activeItems.length;
            for (var i = 0; i < l; i++) {
                var item = this.activeItems[i];
                if (item.itemType < worstType) {
                    item.upgrade();
                }
            }
        };
        Level.prototype.updateSkillAchievements = function (newItem) {
            var itemType = newItem.itemType;
            // TODO Achievements :: skill
            // Game.gameServices.tryToUnlockSkillAchievement(itemType);
        };
        Level.prototype.onCollectComplete = function () {
            this.itemsAligner.onAlignComplete.addOnce(this.saveGameStateInStore, this);
            this.itemsAligner.onAlignComplete.addOnce(this.checkGameOver, this);
            this.itemsAligner.alignAndRefill(this.activeItems);
        };
        Level.prototype.checkGameOver = function () {
            var isTherePossibleMoves = this.findPossibleMovesStrategy.getPossibleMove(this.activeItems) !== null;
            // let fastGameOver:boolean = (Game.debugPanel) ? Game.debugPanel.fastGameOver : false;
            var fastGameOver = false; // TODO add DebugPanel
            if (isTherePossibleMoves === false || fastGameOver) {
                this.onGameOver();
            }
            else {
                if (!this.tutorial) {
                    this.pointerEnabled = true;
                    this.gui.topPanel.enableButtons();
                    this.gui.topPanel.enableInput();
                    this.gui.boostersPanel.enableInput();
                }
            }
        };
        Level.prototype.saveGameStateInStore = function () {
            var gameState = this.createSavedGameState();
            this.game.store.saveValue(game.GameStoreKey.SAVED_GAME_STATE, gameState.toString());
        };
        Level.prototype.undoLastAction = function () {
            if (this.undoHandler.savedStatesNum() > 0) {
                this.boostersUsed = true;
                this.game.sound.play("restart_1", 0.75);
                this.game.boosters.getBooster(game.BoosterType.UNDO).num -= 1;
                this.gui.boostersPanel.updateData();
                this.clearActiveItems();
                this.hideAllChainLinks();
                this.clearChain();
                this.pointerDown = false;
                this.pointerEnabled = true;
                var savedGameState = this.undoHandler.popLatestSave();
                if (savedGameState) {
                    this.restore(savedGameState);
                    savedGameState.destroy();
                    savedGameState = null;
                }
                this.gui.onRestore();
            }
            else {
                var message = this.game.boosters.getBooster(game.BoosterType.UNDO).warning;
                console.warn("Boosters Undo ::", message);
                this.game.toast.show(message);
                this.gui.boostersPanel.getButton(game.BoosterType.UNDO).shakeIcon();
            }
        };
        Level.prototype.clearActiveItems = function () {
            var l = this.activeItems.length;
            for (var i = 0; i < l; i++) {
                this.activeItems[i].removeFromGrid();
            }
            this.activeItems.length = 0;
        };
        Level.prototype.clearChain = function () {
            this.chain.length = 0;
            this.chainItemType = 0;
            this.lastSelectedItem = null;
        };
        Level.prototype.saveGameState = function () {
            var gameState = this.createSavedGameState();
            this.undoHandler.save(gameState);
        };
        Level.prototype.createSavedGameState = function () {
            return new game.SavedGameState(this.game.store.getCoins(), this.levelStats.clone(), this.isGameComplete, this.gui.gameOver.getSaveState(), this.gui.freeBoostersPopover.getSaveState(), game.GridState.fromGrid(this.grid), this.game.boosters.createSave(), this.itemsGenerator.getSeed());
        };
        Level.prototype.restore = function (gameState) {
            this.game.store.saveValue(game.GameStoreKey.COINS, gameState.coins);
            this.levelStats = gameState.levelStats;
            this.gui.coinsLabel.updateContent(gameState.coins, true);
            this.restoreBoosters(gameState.boosters);
            this.restoreGrid(gameState.gridState);
            this.itemsGenerator.setSeed(gameState.seed);
        };
        Level.prototype.restoreBoosters = function (boosters) {
            this.game.boosters.loadFromSave(boosters);
        };
        Level.prototype.restoreGrid = function (gridState) {
            var _this = this;
            gridState.cellStates.forEach(function (cellState) {
                var cell = _this.grid.getCellAt(cellState.row, cellState.column);
                var itemType = cellState.itemType;
                if (itemType > 0) {
                    _this.createAndAddItemToGrid(cell, itemType);
                }
            });
        };
        Level.prototype.update = function () {
            this.selectItems();
        };
        Level.prototype.selectItems = function () {
            if (!this.pointerEnabled || !this.pointerDown || !this._itemsLayer.visible) {
                return;
            }
            var pointerPos = this.game.input.activePointer.position;
            var selectedItem = this.getItemUnderPoint(pointerPos.x, pointerPos.y);
            if (selectedItem) {
                var allowedByTutorial = !(this.tutorial && this.tutorial.allowedItems.indexOf(selectedItem) === -1) || (this.tutorial && this.tutorial.isComplete);
                var typeFits = (this.chainItemType === 0 || this.chainItemType === selectedItem.itemType);
                var inChain = this.chain.indexOf(selectedItem) > -1;
                var distanceFits = (this.lastSelectedItem) ? this.isDistanceFits(this.lastSelectedItem, selectedItem) : true;
                if (typeFits && inChain) { // deselect item
                    var index = this.chain.indexOf(selectedItem);
                    if (index === this.chain.length - 2) { // pre-last item
                        this.lastSelectedItem.onDeselected();
                        this.chain.splice(index + 1, 1);
                        this.lastSelectedItem = selectedItem;
                        this.hideLastUsedChainLink();
                        return;
                    }
                }
                if (typeFits && inChain === false && distanceFits && allowedByTutorial) {
                    this.addItemToChain(selectedItem);
                    if (this.chain.length > 1) {
                        this.showNewChainLink();
                    }
                }
            }
        };
        Level.prototype.getItemUnderPoint = function (x, y) {
            var l = this.activeItems.length;
            for (var i = 0; i < l; i++) {
                var item = this.activeItems[i];
                var itemWorldPos = this._itemsLayer.toGlobal(item.position);
                var distanceSquared = Phaser.Math.distanceSq(itemWorldPos.x, itemWorldPos.y, x, y);
                if (distanceSquared < game.Item.RADIUS_SQUARED) {
                    return item;
                }
            }
            return null;
        };
        Level.prototype.isDistanceFits = function (item1, item2) {
            var distanceSquared = Phaser.Math.distanceSq(item1.x, item1.y, item2.x, item2.y);
            return (distanceSquared < game.Item.CONTACT_RADIUS_SQUARED);
        };
        Level.prototype.hideLastUsedChainLink = function () {
            var i = this.chainLinks.length;
            while (--i > -1) {
                if (this.chainLinks[i].visible === true) {
                    this.chainLinks[i].hide();
                    return;
                }
            }
        };
        Level.prototype.addItemToChain = function (item) {
            this.game.audio.playSound("pop_1", 0.5);
            item.onSelected();
            this.chain.push(item);
            this.lastSelectedItem = item;
            if (this.chain.length === 1) { // 1st item sets itemType for all chain
                this.chainItemType = item.itemType;
                this.fadeOutSomeItems(this.chainItemType);
            }
        };
        Level.prototype.showNewChainLink = function () {
            var newLink = this.getUnusedChainLink();
            if (newLink) {
                var chainLenght = this.chain.length;
                var item1 = this.chain[chainLenght - 1];
                var item2 = this.chain[chainLenght - 2];
                var x1 = item1.cell.column * game.Cell.WIDTH + game.Cell.WIDTH * 0.5;
                var y1 = item1.cell.row * game.Cell.HEIGHT + game.Cell.HEIGHT * 0.5;
                var x2 = item2.cell.column * game.Cell.WIDTH + game.Cell.WIDTH * 0.5;
                var y2 = item2.cell.row * game.Cell.HEIGHT + game.Cell.HEIGHT * 0.5;
                var x = Phaser.Math.linear(x1, x2, 0.5);
                var y = Phaser.Math.linear(y1, y2, 0.5);
                var angle = Phaser.Math.angleBetween(x2, y2, x1, y1);
                newLink.x = x;
                newLink.y = y;
                newLink.rotation = angle + Math.PI * 0.5;
                newLink.tint = game.Item.getBackColor(this.chainItemType);
                newLink.show();
            }
            else {
                console.assert(false, "No more chain links are available!");
            }
        };
        Level.prototype.getUnusedChainLink = function () {
            return _.find(this.chainLinks, { visible: false });
        };
        Level.prototype.onGameOver = function (delay) {
            if (delay === void 0) { delay = 500; }
            this.pointerEnabled = false;
            this.isGameOver = true;
            this.game.time.events.add(delay, this.gui.onGameOver, this.gui);
        };
        Level.prototype.continueAfterGameOver = function () {
            this.gui.onContinueAfterGameOver();
            this.grid.visible = true;
            this._itemsLayer.visible = true;
            this.pointerEnabled = true;
        };
        Level.prototype.addKeyboardCallbacks = function () {
            var _this = this;
            this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.onEscPressed, this);
            if (game.Main.development) {
                // this.game.input.keyboard.addKey(Phaser.Keyboard.G).onDown.add(this.grid.logState, this.grid);
                this.game.input.keyboard.addKey(Phaser.Keyboard.DELETE).onDown.add(this.clearSavedData, this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.G).onDown.add(function () {
                    _this.grid.visible = !_this.grid.visible;
                });
                this.game.input.keyboard.addKey(Phaser.Keyboard.O).onDown.add(function () {
                    _this.onGameOver(100);
                });
                this.game.input.keyboard.addKey(Phaser.Keyboard.C).onDown.add(function () {
                    _this.testGameComplete(100);
                });
                this.game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE).onDown.add(this.refillGrid, this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.R).onDown.add(this.restartState, this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.D).onDown.add(this.logDisplayList, this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.EQUALS).onDown.add(this.testUpgradeItems, this);
            }
        };
        Level.prototype.clearSavedData = function () {
            var result = window.confirm("Clear saved data?");
            if (result) {
                this.game.store.clear();
                this.game.changeState("Level");
            }
        };
        Level.prototype.onEscPressed = function () {
            if (this.gui.headstartPopup && this.gui.headstartPopup.visible) {
                this.gui.headstartPopup.hide();
                return;
            }
            if (this.gui.freeBoostersPopover.visible) {
                this.gui.hideFreeBoostersPopover();
                return;
            }
            if (this.boosterMode.active) {
                this.boosterMode.cancel();
                return;
            }
            this.gotoBoostersShop();
        };
        Level.prototype.logDisplayList = function () {
            if (this.game.debug.isDisabled === false && this.game.debug.graph) {
                this.game.debug.graph();
            }
            else {
                (this.game.debug.isDisabled)
                    ? console.warn("Debug disabled!")
                    : console.warn("SceneGraph plugin is not loaded!");
            }
        };
        Level.prototype.testUpgradeItems = function () {
            this.activeItems.forEach(function (item) {
                item.setItemType(item.itemType + 1);
            });
        };
        Level.prototype.restartState = function () {
            this.game.changeState("Level");
        };
        Level.prototype.refillGrid = function () {
            this.clearActiveItems();
            this.fillGridFirstTime();
            var moves = this.findPossibleMovesStrategy.getPossibleMove(this.activeItems);
            if (moves === null) {
                this.refillGrid();
            }
        };
        Level.prototype.addPointerCallbacks = function () {
            this.game.input.onDown.add(this.onPointerDown, this);
            this.game.input.onUp.add(this.onPointerUp, this);
        };
        Level.prototype.removePointerCallbacks = function () {
            this.game.input.onDown.remove(this.onPointerDown, this);
            this.game.input.onUp.remove(this.onPointerUp, this);
        };
        Level.prototype.resize = function () {
            this.background.resize();
            this.gui.initialResize();
            this.resizeGrid();
            this.resizeItems();
            this.gui.finalResize();
            if (this.gameCompleteScreen) {
                this.gameCompleteScreen.resize();
            }
        };
        Level.prototype.resizeGrid = function () {
            var top = this.gui.topPanel.bottom;
            var bottom = this.gui.boostersPanel.top;
            var height = bottom - top;
            var maxHeight = height * 0.9;
            this.grid.scale.set(1);
            if (this.grid.height > maxHeight) {
                this.grid.scale.set(maxHeight / this.grid.height);
            }
            this.grid.centerX = game.Config.HALF_GAME_WIDTH;
            this.grid.centerY = top + height / 2;
        };
        Level.prototype.resizeItems = function () {
            this._itemsLayer.scale = this.grid.scale;
            this._itemsLayer.x = this.grid.x;
            this._itemsLayer.y = this.grid.y;
            this._itemsTopLayer.scale = this.grid.scale;
            this._itemsTopLayer.x = this.grid.x;
            this._itemsTopLayer.y = this.grid.y;
        };
        Level.prototype.show = function () {
            this.gui.show(100);
            this.game.add.tween(this._itemsLayer).from({ y: "-14" }, 400, Phaser.Easing.Back.Out, true, 300);
            this.game.add.tween(this._itemsLayer).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, 300);
        };
        Level.prototype.getBestItemOnGrid = function () {
            this.activeItems = _.compact(this.activeItems);
            var bestItem = _.maxBy(this.activeItems, "itemType");
            if (bestItem) {
                return bestItem.itemType;
            }
            else {
                return 2;
            }
        };
        Level.prototype.handleBackButton = function () {
            if (this.gui.headstartPopup && this.gui.headstartPopup.visible) {
                return;
            }
            if (this.gui.freeBoostersPopover.visible) {
                return;
            }
            if (this.gui.pauseScreen.visible) {
                return;
            }
            if (this.tutorial && this.tutorial.visible) {
                return;
            }
            if (this.gui.gameOver.visible) {
                this.game.sound.play("muted_error", 0.66);
                this.gui.gameOver.shake();
                this.gui.boostersPanel.shakeButtons();
                return;
            }
            if (this.gameCompleteScreen && this.gameCompleteScreen.visible) {
                return;
            }
            this.pause();
        };
        Level.prototype.shutdown = function () {
            this.game.store.saveValue(game.GameStoreKey.SAVED_GAME_STATE, "");
            this.game.input.onDown.remove(this.onPointerDown, this);
            this.game.input.onUp.remove(this.onPointerUp, this);
            this.itemsPool.destroy();
            this.itemsGenerator.destroy();
            this.findPossibleMovesStrategy.destroy();
            this.itemsAligner.destroy();
            this.undoHandler.destroy();
            this.boosterMode.destroy();
            if (this.loadedGameState) {
                this.loadedGameState.destroy();
                this.loadedGameState = null;
            }
            this.disposeSignals();
            if (this.isPaused === false) {
                this.game.poki.sdk.gameplayStop();
            }
        };
        Level.prototype.disposeSignals = function () {
            if (this.onFirstBoosterComplete) {
                this.onFirstBoosterComplete.dispose();
                this.onFirstBoosterComplete = null;
            }
            if (this.onFirstComboComplete) {
                this.onFirstComboComplete.dispose();
                this.onFirstComboComplete = null;
            }
        };
        return Level;
    }(Phaser.State));
    game.Level = Level;
})(game || (game = {}));
var game;
(function (game) {
    var GameOverTopPanel = /** @class */ (function (_super) {
        __extends(GameOverTopPanel, _super);
        function GameOverTopPanel(_game, parent) {
            var _this = _super.call(this, _game, parent, "game_over_top") || this;
            _this.addBack();
            _this.addTitle();
            _this.addRhombuses();
            _this.bringToTop(_this.title);
            return _this;
        }
        GameOverTopPanel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "game_over", "Top_Panel_Back0000", this);
        };
        GameOverTopPanel.prototype.addTitle = function () {
            var content = this.game.texts.texts['game_over'];
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.BOLD,
                fontSize: 56,
                fill: "#ffffff",
                align: "center",
            };
            this.title = this.game.add.text(0, 0, content, style, this);
            this.title.anchor.set(0.5, 0.5);
        };
        GameOverTopPanel.prototype.addRhombuses = function () {
            var y = this.back.height * 0.5;
            var dx = this.back.width * 0.34;
            var titleMargin = 20;
            this.leftRhombs = this.game.add.image(0, 0, "game_over", "Top_Panel_Rhombuses0000", this);
            this.leftRhombs.anchor.set(1, 0.5);
            this.leftRhombs.x = this.title.left - titleMargin;
            this.leftRhombs.y = y;
            this.rightRhombs = this.game.add.image(0, 0, "game_over", "Top_Panel_Rhombuses0000", this);
            this.rightRhombs.scale.x = -1;
            this.rightRhombs.left = this.title.right + 20;
            this.rightRhombs.x = Math.round(this.back.width * 0.5 + dx);
            this.rightRhombs.y = y;
            if (this.title.width > 400) {
                this.rightRhombs.kill();
                this.leftRhombs.kill();
            }
        };
        GameOverTopPanel.prototype.show = function (initialDelay) {
            var offsetY = 60 * game.Config.ASSETS_SCALE;
            this.alpha = 0;
            this.y -= offsetY;
            this.game.add.tween(this).to({
                y: this.y + offsetY,
                alpha: 1,
            }, 400, Phaser.Easing.Cubic.Out, true, initialDelay);
            this.showRhombuses(initialDelay);
        };
        GameOverTopPanel.prototype.showRhombuses = function (initialDelay) {
            var offsetX = 66 * game.Config.ASSETS_SCALE;
            var duration = 660;
            var delay = initialDelay + 200;
            this.game.add.tween(this.leftRhombs).from({
                x: this.leftRhombs.x - offsetX,
                alpha: 0,
            }, duration, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.rightRhombs).from({
                x: this.rightRhombs.x + offsetX,
                alpha: 0,
            }, duration, Phaser.Easing.Cubic.Out, true, delay);
        };
        GameOverTopPanel.prototype.resize = function () {
            this.back.width = game.Config.GAME_WIDTH;
            this.title.centerX = this.back.centerX;
            this.title.centerY = this.back.centerY + 2;
            var titleMargin = 24;
            this.leftRhombs.right = this.title.left - titleMargin;
            this.leftRhombs.centerY = this.title.centerY;
            this.rightRhombs.right = this.title.right + titleMargin;
            this.rightRhombs.centerY = this.title.centerY;
        };
        GameOverTopPanel.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return GameOverTopPanel;
    }(Phaser.Group));
    game.GameOverTopPanel = GameOverTopPanel;
})(game || (game = {}));
var game;
(function (game) {
    var StatCircle = /** @class */ (function (_super) {
        __extends(StatCircle, _super);
        function StatCircle(_game, parent, circleTextureKey, circleTextureFrame, textColor, textContent) {
            var _this = _super.call(this, _game, parent, "stat_circle") || this;
            _this.addCircle(circleTextureKey, circleTextureFrame);
            _this.addText(textContent, textColor);
            return _this;
        }
        StatCircle.prototype.addInnerCircle = function () {
            this.innerCircle = this.game.add.image(0, 0, "game_over", "Circle_Inner0000", this);
            this.innerCircle.anchor.set(0.5, 0.5);
            this.innerCircle.alignIn(this.circle, Phaser.CENTER);
            this.innerCircle.sendToBack();
        };
        StatCircle.prototype.addCircle = function (circleTextureKey, circleTextureFrame) {
            this.circle = this.game.add.image(0, 0, circleTextureKey, circleTextureFrame, this);
            this.circle.anchor.set(0.5, 0.5);
        };
        StatCircle.prototype.addText = function (textContent, textColor) {
            var style = {
                font: game.GameFonts.NUNITO_CSS,
                fontSize: 44,
                fontWeight: game.FontWeight.BOLD,
                fill: "#" + textColor.toString(16),
                align: "center",
            };
            this._text = this.game.add.text(0, 0, textContent, style, this);
            this._text.lineSpacing = -8;
            this._text.anchor.set(0.5, 0.5);
            this._text.x = this.circle.centerX;
            this._text.y = this.circle.centerY;
        };
        StatCircle.prototype.updateText = function (content) {
            this._text.text = content;
        };
        StatCircle.prototype.addIcon = function (iconTextureKey, iconTextureFrame) {
            if (!this.icon) {
                this.icon = this.game.add.image(0, 0, iconTextureKey, iconTextureFrame, this);
                this.icon.anchor.set(0.5, 0.5);
                this.icon.centerX = this.circle.centerX;
                this.icon.centerY = this.circle.top + 3;
            }
        };
        StatCircle.prototype.getCircleHeight = function () {
            return this.circle.height;
        };
        Object.defineProperty(StatCircle.prototype, "text", {
            get: function () {
                return this._text;
            },
            enumerable: false,
            configurable: true
        });
        StatCircle.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return StatCircle;
    }(Phaser.Group));
    game.StatCircle = StatCircle;
})(game || (game = {}));
var game;
(function (game) {
    var BestItemCircle = /** @class */ (function (_super) {
        __extends(BestItemCircle, _super);
        function BestItemCircle(_game, parent, circleTextureKey, circleTextureFrame, textColor, textContent, itemType) {
            var _this = _super.call(this, _game, parent, circleTextureKey, circleTextureFrame, textColor, textContent) || this;
            _this.text.visible = false;
            _this.addInnerCircle();
            _this.addItem(itemType);
            return _this;
        }
        BestItemCircle.prototype.addItem = function (itemType) {
            var back = this.game.add.image(0, 0, "game_over", "Item_Back0000");
            back.anchor.set(0.5, 0.5);
            back.tint = game.Item.getBackColor(itemType);
            var text = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_BOLD_BMP, itemType.toString(), 42);
            text.anchor.set(0.5, 0.5);
            text.tint = game.Item.getTextColor(itemType);
            this.item = this.game.add.group(this, "item");
            this.item.addMultiple([back, text], true);
            this.item.scale.set(1.2);
            this.item.x = this.circle.centerX;
            this.item.y = this.circle.centerY;
        };
        BestItemCircle.prototype.setItemFont = function (font) {
            if (this.item && this.item.getAt(1) && this.item.getAt(1) instanceof Phaser.BitmapText) {
                this.item.getAt(1).font = font;
            }
        };
        BestItemCircle.prototype.animateIcon = function () {
            this.game.add.tween(this.icon).to({ y: "-10" }, 330, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        };
        BestItemCircle.prototype.animateItem = function () {
            this.game.add.tween(this.item.scale).to({
                x: 1.33,
                y: 1.33,
            }, 900, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        };
        BestItemCircle.prototype.addIcon = function (iconTextureKey, iconTextureFrame) {
            _super.prototype.addIcon.call(this, iconTextureKey, iconTextureFrame);
            this.icon.y -= 10 * game.Config.ASSETS_SCALE;
            this.bringToTop(this.item);
        };
        BestItemCircle.prototype.destroy = function () {
            this.game.tweens.removeFrom(this.item.scale);
            if (this.icon) {
                this.game.tweens.removeFrom(this.icon);
            }
            _super.prototype.destroy.call(this);
        };
        return BestItemCircle;
    }(game.StatCircle));
    game.BestItemCircle = BestItemCircle;
})(game || (game = {}));
var game;
(function (game) {
    var CoinsCircle = /** @class */ (function (_super) {
        __extends(CoinsCircle, _super);
        function CoinsCircle(_game, parent, circleTextureKey, circleTextureFrame, textColor, textContent) {
            var _this = _super.call(this, _game, parent, circleTextureKey, circleTextureFrame, textColor, textContent) || this;
            _this.coinsNum = 0;
            return _this;
        }
        CoinsCircle.prototype.setCoinsNum = function (coins) {
            this.text.setText(coins);
            this.coinsNum = coins;
        };
        CoinsCircle.prototype.updateCoins = function (newNumber, delay) {
            if (delay === void 0) { delay = 0; }
            var duration = 1300;
            this.tweenCoins(newNumber, duration, delay);
            this.game.add.tween(this.scale).to({ x: 0.66, y: 0.66 }, duration, Phaser.Easing.Linear.None, true, delay);
        };
        CoinsCircle.prototype.tweenCoins = function (newNumber, duration, delay) {
            var _this = this;
            var tween = this.game.add.tween(this).to({ coinsNum: newNumber }, duration, Phaser.Easing.Cubic.Out, true, delay);
            tween.onStart.addOnce(function () {
                _this.game.audio.playSound("score_count_2", 0.5);
            });
            tween.onUpdateCallback(function () {
                _this.coinsNum = Math.round(_this.coinsNum);
                _this.text.setText(_this.coinsNum);
            });
            tween.onComplete.addOnce(function () {
                _this.onCoinsTweenComplete();
            });
        };
        CoinsCircle.prototype.onCoinsTweenComplete = function () {
            this.text.y = 0;
            this.game.add.tween(this.scale).to({
                x: this.originalScale.x,
                y: this.originalScale.y,
            }, 1000, Phaser.Easing.Elastic.Out, true);
        };
        CoinsCircle.prototype.destroy = function () {
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this.scale);
            _super.prototype.destroy.call(this);
        };
        return CoinsCircle;
    }(game.StatCircle));
    game.CoinsCircle = CoinsCircle;
})(game || (game = {}));
var game;
(function (game) {
    var LevelStatCircle = /** @class */ (function (_super) {
        __extends(LevelStatCircle, _super);
        function LevelStatCircle(_game, parent, circleTextureKey, circleTextureFrame, textColor, textContent) {
            var _this = _super.call(this, _game, parent, circleTextureKey, circleTextureFrame, textColor, textContent) || this;
            _this.addProgressBar();
            _this.addCropRect();
            return _this;
        }
        LevelStatCircle.prototype.addProgressBar = function () {
            this.progressBar = this.game.add.image(0, 0, "game_over", "Circle_Progress_Bar0000", this);
            this.progressBar.data.originalHeight = this.progressBar.height;
            this.progressBar.visible = false;
            this.progressBar.sendToBack();
        };
        LevelStatCircle.prototype.addCropRect = function () {
            this.progressBar.cropRect = new Phaser.Rectangle(0, 0, this.progressBar.width, this.progressBar.height);
        };
        LevelStatCircle.prototype.setPercent = function (percent, instant) {
            if (instant === void 0) { instant = false; }
            var newHeight = (this.progressBar.data.originalHeight / 100) * percent;
            if (instant) {
                this.progressBar.cropRect.y = newHeight;
            }
            else {
                this.game.add.tween(this.progressBar.cropRect).to({ y: 0 }, 330, Phaser.Easing.Cubic.Out, true);
            }
        };
        return LevelStatCircle;
    }(game.StatCircle));
    game.LevelStatCircle = LevelStatCircle;
})(game || (game = {}));
var game;
(function (game) {
    var ShareButton = /** @class */ (function (_super) {
        __extends(ShareButton, _super);
        function ShareButton(_game, parent) {
            var _this = _super.call(this, _game, parent, "game_over", "Share_Button_Back0000") || this;
            _this.bottomOffset = 55;
            _this.shareMessage = "";
            _this.addHint();
            _this.addShadow();
            _this.addWhite();
            return _this;
        }
        ShareButton.prototype.addShadow = function () {
            var shadowOffset = 8 * game.Config.ASSETS_SCALE;
            this.shadow = this.game.add.image(0, 0, "game_over", "Share_Shadow0000", this);
            this.shadow.centerX = this.back.centerX;
            this.shadow.bottom = this.back.bottom + shadowOffset;
            this.shadow.tint = 0;
            this.shadow.alpha = 0.08;
            this.sendToBack(this.shadow);
        };
        ShareButton.prototype.addWhite = function () {
            this.white = this.game.add.image(0, 0, "game_over", "Share_Button_Back0000", this);
            this.white.visible = false;
        };
        ShareButton.prototype.addTextContent = function () {
        };
        ShareButton.prototype.addHint = function () {
            var content = this.game.texts.texts['share_tap'];
            this.hint = this.game.add.bitmapText(0, 0, game.GameFonts.GAME_OVER_BARIOL_BOLD, content, 30, this);
            this.hint.anchor.set(0.5, 0.5);
            this.hint.centerX = this.back.centerX;
            this.hint.centerY = this.back.bottom - 26;
        };
        ShareButton.prototype.addHashtag = function () {
            this.hashtag = this.game.add.image(0, 0, "game_over", "Hashtag0000", this);
            this.hashtag.anchor.set(0.5, 0.5);
            this.hashtag.centerX = this.back.centerX;
            this.hashtag.centerY = this.back.top + 194;
            this.hashtag.alpha = 0.85;
            this.hashtag.visible = false;
        };
        ShareButton.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            if (this._shareBitmapData) {
                this._shareBitmapData.destroy();
                this._shareBitmapData = null;
            }
        };
        return ShareButton;
    }(game.ComplexButton));
    game.ShareButton = ShareButton;
})(game || (game = {}));
///<reference path='ShareButton.ts' />
var game;
(function (game) {
    var ItemShareButton = /** @class */ (function (_super) {
        __extends(ItemShareButton, _super);
        function ItemShareButton(_game, parent, itemType) {
            var _this = _super.call(this, _game, parent) || this;
            _this.itemType = itemType;
            _this.mainColor = game.Item.getBackColor(itemType);
            _this.darkColor = game.Item.getTextColor(itemType);
            _this.addItemBack();
            _this.addGradient();
            _this.addCentralPart();
            _this.addTitle();
            _this.addItem();
            _this.addStars();
            _this.addHashtag();
            _this.hint.tint = _this.mainColor;
            return _this;
        }
        ItemShareButton.prototype.addItemBack = function () {
            this.itemBack = this.game.add.image(0, 0, "game_over", "Item_Share_Back0000", this);
            this.itemBack.tint = this.darkColor;
            this.itemBack.centerX = this.back.centerX;
            this.itemBack.top = this.back.top;
        };
        ItemShareButton.prototype.addGradient = function () {
            var alpha = 0.2;
            var scale = 1.32;
            var gradientsNum = 4;
            var deltaScale = (scale - 1) / gradientsNum;
            for (var i = 0; i < gradientsNum; i++) {
                var gradient = this.game.add.image(0, 0, "game_over", "Item_Share_Back_Central0000", this);
                gradient.anchor.set(0.5, 0.5);
                gradient.scale.x = scale;
                gradient.centerX = this.itemBack.centerX;
                gradient.centerY = this.itemBack.centerY;
                gradient.tint = this.mainColor;
                gradient.alpha = alpha;
                scale -= deltaScale;
            }
        };
        ItemShareButton.prototype.addCentralPart = function () {
            this.centralPart = this.game.add.image(0, 0, "game_over", "Item_Share_Back_Central0000", this);
            this.centralPart.tint = this.mainColor;
            this.centralPart.anchor.set(0.5, 0.5);
            this.centralPart.centerX = this.itemBack.centerX;
            this.centralPart.centerY = this.itemBack.centerY;
        };
        ItemShareButton.prototype.addTitle = function () {
            var content = "BEAT THIS";
            this.titleText = this.game.add.bitmapText(0, 0, game.GameFonts.GAME_OVER_BARIOL_BOLD, content, 35, this);
            this.titleText.anchor.set(0.5, 0.5);
            this.titleText.centerX = this.itemBack.centerX;
            this.titleText.centerY = this.itemBack.top + 40;
        };
        ItemShareButton.prototype.addItem = function () {
            var shadow = this.game.add.image(0, 6, "game_over", "White_Circle0000");
            shadow.anchor.set(0.5, 0.5);
            shadow.tint = this.darkColor;
            shadow.alpha = 0.4;
            var back = this.game.add.image(0, 0, "game_over", "White_Circle0000");
            back.anchor.set(0.5, 0.5);
            var text = this.game.add.bitmapText(0, 0, game.GameFonts.GAME_OVER_BARIOL_BOLD, this.itemType.toString(), 46);
            text.tint = this.mainColor;
            text.anchor.set(0.5, 0.5);
            this.item = this.game.add.group(this, "item");
            this.item.addMultiple([shadow, back, text], true);
            this.alignItem();
        };
        ItemShareButton.prototype.alignItem = function () {
            var top = this.titleText.bottom;
            var bottom = this.itemBack.bottom;
            var height = bottom - top;
            this.item.centerX = this.itemBack.centerX;
            this.item.centerY = top + height / 2;
        };
        ItemShareButton.prototype.addStars = function () {
            var stars = this.game.add.image(0, 0, "game_over", "Item_Share_Stars0000", this);
            stars.anchor.set(0.5, 0.5);
            stars.x = this.item.centerX;
            stars.y = this.item.centerY - 6;
        };
        ItemShareButton.prototype.animate = function (delay) {
            var _this = this;
            this.game.add.tween(this.scale).to({ x: this.scale.x * 1.1, y: this.scale.y * 1.1 }, 500, Phaser.Easing.Sinusoidal.InOut, true, delay, 2, true)
                .onComplete.addOnce(function () {
                _this.game.time.events.add(3000, _this.animate, _this);
            });
        };
        ItemShareButton.prototype.showHighscore = function () {
            this.addHighscore();
            this.animateHighscore();
            this.hint.visible = false;
        };
        ItemShareButton.prototype.addHighscore = function () {
            var content = this.game.texts.texts['highscore'];
            this.highscoreText = this.game.add.bitmapText(0, 0, game.GameFonts.GAME_OVER_BARIOL_BOLD, content, 30, this);
            this.highscoreText.anchor.set(0.5, 0.5);
            this.highscoreText.centerX = this.itemBack.centerX;
            this.highscoreText.centerY = this.hint.y;
            this.highscoreText.tint = this.mainColor;
        };
        ItemShareButton.prototype.animateHighscore = function () {
            var _this = this;
            this.highscoreText.alpha = 0;
            this.highscoreText.visible = true;
            var fadeDuration = 230;
            this.game.add.tween(this.highscoreText).to({ alpha: 1 }, fadeDuration, Phaser.Easing.Cubic.Out, true, 200)
                .onComplete.addOnce(function () {
                _this.game.add.tween(_this.highscoreText).to({ alpha: 0.6 }, 360, Phaser.Easing.Sinusoidal.InOut, true, 0, 2, true)
                    .onComplete.addOnce(function () {
                    _this.game.add.tween(_this.highscoreText).to({ alpha: 0 }, fadeDuration, Phaser.Easing.Cubic.Out, true)
                        .onComplete.addOnce(function () {
                        _this.highscoreText.visible = false;
                        _this.animateHint();
                    });
                });
            });
        };
        ItemShareButton.prototype.animateHint = function () {
            var _this = this;
            this.hint.alpha = 0;
            this.hint.visible = true;
            var fadeDuration = 230;
            this.game.add.tween(this.hint).to({ alpha: 1 }, fadeDuration, Phaser.Easing.Cubic.Out, true, 200)
                .onComplete.addOnce(function () {
                _this.game.add.tween(_this.hint).to({ alpha: 0.6 }, 360, Phaser.Easing.Sinusoidal.InOut, true, 0, 2, true)
                    .onComplete.addOnce(function () {
                    _this.game.add.tween(_this.hint).to({ alpha: 0 }, fadeDuration, Phaser.Easing.Cubic.Out, true)
                        .onComplete.addOnce(function () {
                        _this.hint.visible = false;
                        _this.animateHighscore();
                    });
                });
            });
        };
        ItemShareButton.prototype.destroy = function () {
            if (this.highscoreText) {
                this.game.tweens.removeFrom(this.highscoreText);
            }
            this.game.tweens.removeFrom(this.hint);
            this.game.tweens.removeFrom(this);
            _super.prototype.destroy.call(this);
        };
        return ItemShareButton;
    }(game.ShareButton));
    game.ItemShareButton = ItemShareButton;
})(game || (game = {}));
var game;
(function (game) {
    var ShopLabel = /** @class */ (function (_super) {
        __extends(ShopLabel, _super);
        function ShopLabel(_game) {
            var _this = _super.call(this, _game, 0, 0, "game_over", "Buy_Label0000") || this;
            _this.anchor.set(0.5, 0.5);
            _this.visible = false;
            return _this;
        }
        ShopLabel.prototype.show = function (delay) {
            var _this = this;
            if (delay === void 0) { delay = 0; }
            this.visible = true;
            this.alpha = 1;
            this.scale.set(1);
            this.game.add.tween(this).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.scale).from({ x: 0.8, y: 0.8 }, 400, Phaser.Easing.Back.Out, true, delay)
                .onComplete.addOnce(function () {
                _this.startShake();
            });
        };
        ShopLabel.prototype.startShake = function () {
            var _this = this;
            var deltaAngle = 6;
            this.game.add.tween(this).to({ angle: -deltaAngle }, 50, Phaser.Easing.Linear.None, true)
                .onComplete.addOnce(function () {
                _this.doShake();
            });
        };
        ShopLabel.prototype.doShake = function () {
            var _this = this;
            this.game.add.tween(this.scale).to({ x: 1.33, y: 1.33 }, 250, Phaser.Easing.Sinusoidal.InOut, true, 0, 1, true);
            this.game.add.tween(this).to({ angle: Math.abs(this.angle) }, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, 3, true)
                .onComplete.addOnce(function () {
                _this.onShakeComplete();
            });
        };
        ShopLabel.prototype.onShakeComplete = function () {
            this.game.add.tween(this).to({ angle: 0 }, 50, Phaser.Easing.Linear.None, true);
            this.delayedCall = this.game.time.events.add(2000, this.startShake, this);
        };
        ShopLabel.prototype.destroy = function () {
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this.scale);
            if (this.delayedCall) {
                this.game.time.events.remove(this.delayedCall);
            }
            _super.prototype.destroy.call(this, true);
        };
        return ShopLabel;
    }(Phaser.Image));
    game.ShopLabel = ShopLabel;
})(game || (game = {}));
var game;
(function (game) {
    var LeaderboardRankLabel = /** @class */ (function (_super) {
        __extends(LeaderboardRankLabel, _super);
        function LeaderboardRankLabel(_game, parent) {
            var _this = _super.call(this, _game, parent, "rank_label") || this;
            _this.addBack();
            _this.addText();
            _this.alignText();
            _this.loadPlayerRank();
            return _this;
        }
        LeaderboardRankLabel.prototype.addBack = function () {
            this.back = this.game.add.image(0, 0, "game_over", "Rank_Label0000", this);
            this.back.anchor.set(0.5, 0.5);
        };
        LeaderboardRankLabel.prototype.addText = function () {
            var content = "# 1 000 000";
            this.text = this.game.add.bitmapText(0, 0, game.GameFonts.GAME_OVER_BARIOL_BOLD, content, 22, this);
            this.text.anchor.set(0.5, 0.5);
        };
        LeaderboardRankLabel.prototype.updateRank = function (rank) {
            this.text.setText("# " + this.formatNumber(rank));
            this.alignText();
        };
        LeaderboardRankLabel.prototype.formatNumber = function (num) {
            return num.toLocaleString().split(",").join(" ");
        };
        LeaderboardRankLabel.prototype.alignText = function () {
            var maxWidth = this.back.width * 0.8;
            this.text.scale.set(1);
            if (this.text.width > maxWidth) {
                this.text.scale.set(maxWidth / this.text.width);
            }
            this.text.centerX = this.back.centerX;
            this.text.centerY = this.back.centerY;
        };
        LeaderboardRankLabel.prototype.loadPlayerRank = function () {
            var _this = this;
            var playfab = this.game.playfab;
            var isLoggedIn = playfab.isLoggedIn;
            if (isLoggedIn) {
                playfab.getPlayerLeaderboardEntry().then(function (data) {
                    _this.updateRank(data.Position + 1);
                    _this.show();
                });
            }
        };
        LeaderboardRankLabel.prototype.show = function () {
            this.revive();
            this.alpha = 0;
            this.game.add.tween(this).from({ alpha: 0, y: "+8" }, 800, Phaser.Easing.Cubic.Out, true);
        };
        LeaderboardRankLabel.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return LeaderboardRankLabel;
    }(Phaser.Group));
    game.LeaderboardRankLabel = LeaderboardRankLabel;
})(game || (game = {}));
///<reference path='ComplexPopup.ts' />
var game;
(function (game) {
    var DoubleCoinsPopup = /** @class */ (function (_super) {
        __extends(DoubleCoinsPopup, _super);
        function DoubleCoinsPopup(_game, parent, coinsNum) {
            var _this = _super.call(this, _game, parent) || this;
            _this.name = "double_coins_popup";
            _this.backdrop.name = "double_coins_popup_back";
            var titleContent = _this.game.texts.texts["coinsx2_popup_title"];
            _this.title.setText(titleContent);
            var mainTextContent = _this.game.texts.texts["coinsx2_popup_message"];
            _this.mainText.setText(mainTextContent);
            _this.content.frameName = "DoubleCoins_Popup_Content0000";
            _this.alignContent();
            _this.addCoins(coinsNum);
            _this.checkbox.checked = _this.game.store.getBoolean(game.GameStoreKey.COINSx2_POPUP_DSIABLED);
            _this.checkbox.onChange.add(_this.onCheckboxChanged, _this);
            _this.yesButton.callback.addOnce(_this.showRewardedVideo.bind(_this, "DoubleCoinsPopup"));
            return _this;
        }
        DoubleCoinsPopup.prototype.addCoins = function (coinsNum) {
            var content = "+" + coinsNum;
            var coins = this.game.add.bitmapText(0, 0, game.GameFonts.BARIOL_BOLD_BMP, content, 46, this.window);
            coins.anchor.set(1, 0.5);
            coins.x = this.content.right - 90;
            coins.centerY = this.content.centerY;
            coins.tint = 0xF89932;
        };
        DoubleCoinsPopup.prototype.onCheckboxChanged = function () {
            this.game.store.saveValue(game.GameStoreKey.COINSx2_POPUP_DSIABLED, this.checkbox.checked);
        };
        return DoubleCoinsPopup;
    }(game.ComplexPopup));
    game.DoubleCoinsPopup = DoubleCoinsPopup;
})(game || (game = {}));
var game;
(function (game) {
    var CoinsSpreadFX = /** @class */ (function (_super) {
        __extends(CoinsSpreadFX, _super);
        function CoinsSpreadFX(_game, parent, coinsNum) {
            if (coinsNum === void 0) { coinsNum = 30; }
            var _this = _super.call(this, _game, parent, "video_coins_fx") || this;
            _this.coinsNum = coinsNum;
            _this.onCoinsCollectedSignal = new Phaser.Signal();
            _this.playCoinSoundThrottled = _.throttle(_this.playCoinSound.bind(_this), 50, { trailing: true });
            _this.addBackground();
            _this.addCoins();
            _this.visible = false;
            _this.exists = false;
            return _this;
        }
        CoinsSpreadFX.prototype.setCoinTexture = function (key, frame) {
            this.coins.forEach(function (coin) {
                coin.loadTexture(key, frame);
            });
        };
        CoinsSpreadFX.prototype.playCoinSound = function () {
            if (this.exists && this.game) {
                this.game.audio.playSound('coin', 0.33);
            }
        };
        CoinsSpreadFX.prototype.addBackground = function () {
            this.background = this.game.add.image(0, 0, "interface", "white_rect0000", this);
            this.background.alpha = 0.33;
        };
        CoinsSpreadFX.prototype.addCoins = function () {
            this.coins = this.createMultiple(this.coinsNum, "interface", "CoinsCounter_Coin0000", true, function (coin) {
                coin.anchor.set(0.5, 0.5);
            });
        };
        CoinsSpreadFX.prototype.show = function (dispatchPoint, collectPoint, delay) {
            if (delay === void 0) { delay = 0; }
            this.revive();
            this.doReset();
            this.placeCoins();
            this.parent.bringToTop(this);
            this.showWhite();
            this.showCoins();
            this.collectCoins(1300, collectPoint);
            this.game.audio.playSound("coins_prize", 0.66);
        };
        CoinsSpreadFX.prototype.doReset = function () {
            var _this = this;
            this.game.tweens.removeFrom(this);
            this.coins.forEach(function (coin) {
                _this.game.tweens.removeFrom(coin.scale);
                coin.scale.set(1);
                coin.alpha = 1;
            });
        };
        CoinsSpreadFX.prototype.placeCoins = function () {
            var _this = this;
            var offset = 40;
            var bounds = new Phaser.Rectangle(0, 0, 0, 0);
            bounds.copyFrom(game.Config.GAME_BOUNDS);
            bounds.inflate(-offset, -offset);
            this.coins.forEach(function (coin) {
                _this.placeCoinRandomly(coin, bounds);
                coin.angle = _this.game.rnd.realInRange(-45, 45);
                coin.revive();
            });
        };
        CoinsSpreadFX.prototype.placeCoinRandomly = function (coin, bounds) {
            coin.centerX = bounds.randomX;
            coin.centerY = bounds.randomY;
        };
        CoinsSpreadFX.prototype.showWhite = function () {
            this.background.alpha = 0;
            this.game.add.tween(this.background)
                .to({ alpha: 0.77 }, 66, Phaser.Easing.Cubic.Out)
                .to({ alpha: 0 }, 1500, Phaser.Easing.Cubic.In)
                .start();
        };
        CoinsSpreadFX.prototype.showCoins = function () {
            var _this = this;
            var centerPoint = game.Config.GAME_CENTER;
            this.coins.forEach(function (coin) {
                var delay = 0;
                var duration = 450;
                var target = Phaser.Point.interpolate(centerPoint, coin.position, 0.8);
                _this.game.add.tween(coin).from({
                    x: target.x,
                    y: target.y,
                }, duration, Phaser.Easing.Back.Out, true, delay);
                // this.game.add.tween(coin.scale).from({x: 0.5, y: 0.5}, 400, Phaser.Easing.Back.Out, true, delay);
                _this.game.add.tween(coin).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, delay);
                _this.game.add.tween(coin).from({ angle: "-30" }, 1800, Phaser.Easing.Cubic.Out, true, delay);
            });
        };
        CoinsSpreadFX.prototype.collectCoins = function (initialDelay, collectPoint) {
            var _this = this;
            this.game.time.events.add(initialDelay, function () {
                _this.coins.forEach(function (coin, index) {
                    var delay = _this.game.rnd.realInRange(0, 100);
                    _this.game.add.tween(coin).to({
                        x: collectPoint.x,
                        y: collectPoint.y,
                        angle: 0,
                    }, 800, Phaser.Easing.Back.In, true, delay)
                        .onComplete.addOnce(_this.onCoinCollected, _this, 0, coin);
                });
            }, this);
        };
        CoinsSpreadFX.prototype.onCoinCollected = function (coin) {
            coin.visible = false;
            this.playCoinSoundThrottled();
            if (this.coins.indexOf(coin) === this.coins.length - 1) {
                this.visible = false;
                this.exists = false;
                this.onCoinsCollectedSignal.dispatch();
            }
        };
        CoinsSpreadFX.prototype.resize = function () {
            this.background.width = game.Config.GAME_WIDTH * 1.2;
            this.background.height = game.Config.GAME_HEIGHT * 1.2;
            this.background.centerX = game.Config.HALF_GAME_WIDTH;
            this.background.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        CoinsSpreadFX.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
            this.onCoinsCollectedSignal.dispose();
            this.onCoinsCollectedSignal = null;
        };
        return CoinsSpreadFX;
    }(Phaser.Group));
    game.CoinsSpreadFX = CoinsSpreadFX;
})(game || (game = {}));
///<reference path='GameOverTopPanel.ts' />
///<reference path='circles/StatCircle.ts' />
///<reference path='circles/BestItemCircle.ts' />
///<reference path='circles/CoinsCircle.ts' />
///<reference path='circles/LevelStatCircle.ts' />
///<reference path='share/ItemShareButton.ts' />
///<reference path='ShopLabel.ts' />
///<reference path='LeaderboardRankLabel.ts' />
///<reference path='../../gui/popups/DoubleCoinsPopup.ts' />
///<reference path='../../objects/CoinsSpreadFX.ts' />
var game;
(function (game) {
    var GameOver = /** @class */ (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.skipStartAnimation = false;
            return _this;
        }
        GameOver.prototype.init = function (data) {
            this.levelStats = data.levelStats;
            this.skipStartAnimation = data.skipStartAnimation;
        };
        GameOver.prototype.create = function () {
            this.updateAchievements();
            this.addBackground();
            this.addTopPanel();
            this.addCircles();
            this.addDoubleCoinsButton();
            this.addShareButton();
            this.addBottomButtons();
            this.addShopLabel();
            this.addRankLabel();
            this.addCoinsFX();
            this.addKeyCallbacks();
            this.resize();
            if (this.skipStartAnimation === false) {
                this.show();
            }
        };
        GameOver.prototype.updateAchievements = function () {
            this.game.store.changeNumericValue(game.GameStoreKey.GAMES_PLAYED, 1);
        };
        GameOver.prototype.addBackground = function () {
            this.background = new game.GameBackground(this.game, "game_over", "white_rect0000");
        };
        GameOver.prototype.addTopPanel = function () {
            this.topPanel = new game.GameOverTopPanel(this.game, this.world);
        };
        GameOver.prototype.addCircles = function () {
            var coins = this.game.store.getCoins();
            this.coinsCircle = new game.CoinsCircle(this.game, this.world, "game_over", "Circle0000", 0xFF9800, coins.toString());
            this.coinsCircle.originalScale = this.coinsCircle.scale.clone();
            this.coinsCircle.addIcon("game_over", "Icon_Coin0000");
            this.coinsCircle.setCoinsNum(coins);
            var itemType = this.levelStats.bestItemTypeAtEnd;
            this.bestItemCircle = new game.BestItemCircle(this.game, this.world, "game_over", "Circle0000", 0xFF9800, itemType.toString(), itemType);
            this.bestItemCircle.scale.set(1.25);
            if (this.levelStats.isHighscore) {
                this.bestItemCircle.addIcon("game_over", "Icon_Crown0000");
            }
            var timeContent = this.getTimeCircleContent();
            this.timeCircle = new game.StatCircle(this.game, this.world, "game_over", "Circle0000", 0xFF9800, timeContent);
            this.timeCircle.addIcon("game_over", "Icon_Time0000");
            this.circles = [this.coinsCircle, this.bestItemCircle, this.timeCircle];
        };
        GameOver.prototype.getTimeCircleContent = function () {
            var minutes = Math.floor(this.levelStats.timeInSeconds / 60);
            var minutesStr = (minutes < 10) ? "0" + minutes : minutes.toString();
            var seconds = (this.levelStats.timeInSeconds % 60);
            var secondsStr = (seconds < 10) ? "0" + seconds : seconds.toString();
            return minutesStr + ":" + secondsStr;
        };
        GameOver.prototype.addDoubleCoinsButton = function () {
            this.doubleCoinsButton = new game.SimpleButton(this.game, 0, 0, "game_over", "Button_Double_Coins0000");
            this.doubleCoinsButton.callback.addOnce(this.showRewardedVideo, this, 0, "double_coins_button");
        };
        GameOver.prototype.showRewardedVideo = function (uiOrigin) {
            this.game.poki.rewardedBreak("GameOver:DoubleCoinsButton", {
                onSuccess: this.doubleEarnedCoins.bind(this),
            });
        };
        GameOver.prototype.addShareButton = function () {
            var shareMessageTemplate = this.game.texts.texts.share_highscore;
            var shareMessage = shareMessageTemplate.replace("#", this.levelStats.bestItemTypeAtEnd.toString());
            this.shareButton = new game.ItemShareButton(this.game, this.world, this.levelStats.bestItemTypeAtEnd);
            this.shareButton.shareMessage = shareMessage;
            this.shareButton.x = game.Config.HALF_GAME_WIDTH;
            this.shareButton.y = game.Config.GAME_HEIGHT * 0.59;
            this.shareButton.back.events.onInputUp.add(this.shareHighscore, this);
            if (this.levelStats.isHighscore) {
                this.shareButton.showHighscore();
            }
            this.shareButton.kill();
        };
        GameOver.prototype.shareHighscore = function () {
            return __awaiter(this, void 0, void 0, function () {
                var highscore, text;
                return __generator(this, function (_a) {
                    highscore = this.game.store.getNumber(game.GameStoreKey.BEST_ITEM);
                    text = this.game.texts.texts["share_highscore"].replace("#", highscore.toString());
                    // let image: string = this.getShareImage()
                    this.game.share
                        .share(text)
                        .catch(function (error) {
                        console.warn(error);
                    });
                    return [2 /*return*/];
                });
            });
        };
        GameOver.prototype.getShareImage = function () {
            var image = this.game.make.image(0, 0, "main_menu", "Item_130000");
            var dataURL = this.game.make
                .bitmapData(image.width, image.height)
                .drawFull(image)
                .canvas.toDataURL();
            // utils.NetUtil.openWindowWithImage(dataURL);
            return dataURL;
        };
        GameOver.prototype.addBottomButtons = function () {
            var dx = 146 * game.Config.ASSETS_SCALE;
            var y = game.Config.GAME_HEIGHT * 0.87;
            this.restartButton = new game.SimpleButton(this.game, 0, 0, "game_over", "Button_Restart0000");
            this.restartButton.x = game.Config.HALF_GAME_WIDTH - dx;
            this.restartButton.callback.addOnce(this.onRestartButtonClick, this);
            this.boostersShopButton = new game.SimpleButton(this.game, 0, 0, "game_over", "Button_Shop0000");
            this.boostersShopButton.x = game.Config.HALF_GAME_WIDTH;
            this.boostersShopButton.callback.addOnce(this.gotoBoostersShop, this);
            this.leaderboardButton = new game.SimpleButton(this.game, 0, 0, "game_over", "Button_Stats0000");
            this.leaderboardButton.x = game.Config.HALF_GAME_WIDTH + dx;
            this.leaderboardButton.callback.add(this.gotoLeaderboards, this);
            this.buttons = [this.restartButton, this.boostersShopButton, this.leaderboardButton];
            this.bottomButtons = this.game.add.group(this.world, "bottom_buttons");
            this.bottomButtons.addMultiple(this.buttons, true);
            this.bottomButtons.align(this.buttons.length, 1, 146, 140, Phaser.CENTER);
        };
        GameOver.prototype.onRestartButtonClick = function () {
            var _this = this;
            this.game.poki.commercialBreak("GameOver:RestartButton")
                .finally(function () {
                _this.gotoLevel();
            });
        };
        GameOver.prototype.gotoLevel = function () {
            this.game.changeState("Level");
        };
        GameOver.prototype.gotoBoostersShop = function () {
            this.game.changeState("BoostersShop");
        };
        GameOver.prototype.gotoLeaderboards = function () {
            this.game.changeState(game.StateKey.LEADERBOARDS, {
                lastState: this.key,
                lastStateData: {
                    levelStats: this.levelStats,
                    skipStartAnimation: true,
                },
            });
        };
        GameOver.prototype.addShopLabel = function () {
            var offset = 48 * game.Config.ASSETS_SCALE;
            this.shopLabel = new game.ShopLabel(this.game);
            this.shopLabel.x = this.boostersShopButton.x + offset;
            this.shopLabel.y = this.boostersShopButton.y - offset;
            this.bottomButtons.add(this.shopLabel);
        };
        GameOver.prototype.addRankLabel = function () {
            this.rankLabel = new game.LeaderboardRankLabel(this.game, this.bottomButtons);
            this.rankLabel.centerX = this.leaderboardButton.centerX;
            this.rankLabel.top = this.leaderboardButton.bottom + 4;
            this.rankLabel.kill();
        };
        GameOver.prototype.addCoinsFX = function () {
            this.coinsSpreadFX = new game.CoinsSpreadFX(this.game, this.world, 30);
        };
        GameOver.prototype.doubleEarnedCoins = function () {
            if (this.doubleCoinsButton) {
                this.doubleCoinsButton.visible = false;
            }
            this.game.store.changeCoins(this.levelStats.coins);
            if (this.shopLabel.visible === false && this.game.boosters.canBuyAnyBooster()) {
                this.shopLabel.show(0);
            }
            this.showCoinsFX();
        };
        GameOver.prototype.showCoinsFX = function () {
            var _this = this;
            var dispatchPoint = new Phaser.Point(game.Config.HALF_GAME_WIDTH, game.Config.HALF_GAME_HEIGHT);
            var collectPoint = this.coinsCircle.parent.toGlobal(this.coinsCircle.position).toPhaser();
            this.coinsSpreadFX.onCoinsCollectedSignal.addOnce(function () {
                _this.coinsCircle.updateCoins(_this.game.store.getCoins(), 0);
                _this.coinsSpreadFX.pendingDestroy = true;
            }, this);
            this.coinsSpreadFX.show(dispatchPoint, collectPoint);
        };
        GameOver.prototype.addKeyCallbacks = function () {
            this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.onEscPressed, this);
            if (game.Main.development) {
                this.game.input.keyboard.addKey(Phaser.Keyboard.R).onDown.add(this.restart, this);
            }
        };
        GameOver.prototype.restart = function () {
            this.game.changeState("GameOver", {
                levelStats: this.levelStats,
                skipStartAnimation: false,
            });
        };
        GameOver.prototype.onEscPressed = function () {
            this.game.changeState("BoostersShop");
        };
        GameOver.prototype.resize = function () {
            this.background.resize();
            this.topPanel.resize();
            this.topPanel.centerX = game.Config.HALF_GAME_WIDTH;
            this.topPanel.top = 0;
            this.alignBottomButtons();
            this.alignTopCircles();
            this.alignBestItemCircle();
            this.alignDoubleCoinsButton();
            this.alignShareButton();
            if (this.coinsSpreadFX) {
                this.coinsSpreadFX.resize();
            }
        };
        GameOver.prototype.alignBottomButtons = function () {
            this.bottomButtons.centerX = game.Config.HALF_GAME_WIDTH;
            this.bottomButtons.centerY = game.Config.GAME_HEIGHT * 0.88;
        };
        GameOver.prototype.alignTopCircles = function () {
            var offsetX = game.Config.GAME_WIDTH * 0.27;
            var y = game.Config.GAME_HEIGHT * 0.3;
            this.coinsCircle.x = game.Config.HALF_GAME_WIDTH - offsetX;
            this.coinsCircle.centerY = y;
            this.timeCircle.x = game.Config.HALF_GAME_WIDTH + offsetX;
            this.timeCircle.centerY = y;
        };
        GameOver.prototype.alignBestItemCircle = function () {
            var top = this.timeCircle.bottom;
            var bottom = this.bottomButtons.top;
            var height = bottom - top;
            this.bestItemCircle.x = game.Config.HALF_GAME_WIDTH;
            this.bestItemCircle.y = top + height / 2;
        };
        GameOver.prototype.alignDoubleCoinsButton = function () {
            this.doubleCoinsButton.centerX = this.coinsCircle.centerX;
            this.doubleCoinsButton.centerY = this.coinsCircle.bottom - 12;
        };
        GameOver.prototype.alignShareButton = function () {
            var top = this.bestItemCircle.bottom;
            var bottom = this.bottomButtons.top;
            var height = bottom - top;
            var maxHeight = height * 0.9;
            if (this.shareButton.height > maxHeight) {
                this.shareButton.scale.set(maxHeight / this.shareButton.height);
            }
            this.shareButton.x = game.Config.HALF_GAME_WIDTH;
            this.shareButton.y = top + height / 2 - 6;
        };
        GameOver.prototype.show = function () {
            this.topPanel.show(100);
            this.showCircles(330);
            this.showShareButton(700);
            this.showButtons(1100);
        };
        GameOver.prototype.showCircles = function (initialDelay) {
            var _this = this;
            this.circles.forEach(function (child, index) {
                var delay = initialDelay + index * 120;
                _this.game.add.tween(child).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, delay);
                _this.game.add.tween(child).from({ y: "+40" }, 750, Phaser.Easing.Cubic.Out, true, delay);
            });
            if (this.doubleCoinsButton) {
                var delay = initialDelay + 480;
                this.game.add.tween(this.doubleCoinsButton).from({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true, delay);
                this.game.add.tween(this.doubleCoinsButton.scale).from({
                    x: 0.8,
                    y: 0.8,
                }, 400, Phaser.Easing.Back.Out, true, delay)
                    .onComplete.addOnce(function () {
                    _this.animateDoubleCoinsButton();
                });
            }
        };
        GameOver.prototype.animateDoubleCoinsButton = function () {
            var _this = this;
            if (this.doubleCoinsButton && this.doubleCoinsButton.visible) {
                this.game.time.events.loop(3000, function () {
                    _this.game.add.tween(_this.doubleCoinsButton.scale).to({
                        x: 1.1,
                        y: 1.1,
                    }, 300, Phaser.Easing.Sinusoidal.InOut, true, 0, 2, true);
                });
            }
        };
        GameOver.prototype.showShareButton = function (delay) {
            this.game.add.tween(this.shareButton).from({ alpha: 0 }, 200, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(this.shareButton).from({ y: "+40" }, 750, Phaser.Easing.Cubic.Out, true, delay);
            // .onComplete.addOnce(() => {
            // 	this.shareButton.animate(500);
            // });
        };
        GameOver.prototype.showButtons = function (initialDelay) {
            var _this = this;
            this.buttons.forEach(function (button, index) {
                var delay = initialDelay + index * 100;
                _this.game.add.tween(button).from({ alpha: 0, y: "+20" }, 300, Phaser.Easing.Cubic.Out, true, delay);
            });
            this.showShopLabel(initialDelay + 500);
            this.game.time.events.add(initialDelay, this.loadLeaderboardRank, this);
        };
        GameOver.prototype.showShopLabel = function (delay) {
            if (this.game.boosters.canBuyAnyBooster()) {
                this.shopLabel.show(delay);
            }
        };
        GameOver.prototype.loadLeaderboardRank = function () {
            this.rankLabel.loadPlayerRank();
        };
        GameOver.prototype.shutdown = function () {
            this.circles = null;
            this.buttons = null;
        };
        return GameOver;
    }(Phaser.State));
    game.GameOver = GameOver;
})(game || (game = {}));
var game;
(function (game) {
    var TestState = /** @class */ (function (_super) {
        __extends(TestState, _super);
        function TestState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TestState.prototype.init = function () {
        };
        TestState.prototype.create = function () {
            this.addBackground();
            this.addImages();
            this.resize();
        };
        TestState.prototype.addBackground = function () {
            this.background = new game.GameBackground(this.game);
        };
        TestState.prototype.addImages = function () {
            var _this = this;
            var sizes = [
                { width: 10, height: 10 },
                { width: 100, height: 40 },
                { width: 200, height: 32 },
                { width: 400, height: 100 },
                { width: 600, height: 100 }
            ];
            var images = sizes.map(function (size) {
                var image = _this.game.add.image(0, 0, "interface", "white_rect0000");
                image.width = size.width;
                image.height = size.height;
                image.tint = game.LevelGUI.NORMAL_COLOR;
                image.smoothed = false;
                return image;
            });
            this.container = this.game.add.group();
            this.container.addMultiple(images, true);
            this.container.align(1, images.length, game.Config.GAME_WIDTH, 120, Phaser.LEFT_CENTER);
            // this.container.forEach((child:Phaser.Image) => {
            // 	let content:string = `${child.width}x${child.height}`;
            // 	let text:Phaser.BitmapText = this.game.add.bitmapText(0, 0, GameFonts.BARIOL_REGULAR_BMP, content, 20, this.container);
            // 	text.anchor.set(0, 0.5);
            // 	text.x = child.left + 10;
            // 	text.y = child.centerY;
            // }, null);
        };
        TestState.prototype.resize = function () {
            this.background.resize();
            this.container.centerX = game.Config.HALF_GAME_WIDTH;
            this.container.centerY = game.Config.HALF_GAME_HEIGHT;
        };
        TestState.prototype.shutdown = function () {
        };
        return TestState;
    }(Phaser.State));
    game.TestState = TestState;
})(game || (game = {}));
var game;
(function (game) {
    var BoosterTypeUtil = /** @class */ (function () {
        function BoosterTypeUtil() {
        }
        BoosterTypeUtil.getAllTypes = function () {
            return Object.keys(game.BoosterType).map(function (key) {
                return game.BoosterType[key];
            });
        };
        BoosterTypeUtil.fromString = function (str) {
            var entries = _.entries(game.BoosterType);
            var entry = _.find(entries, function (entry) { return entry[1] === str; });
            if (entry) {
                return game.BoosterType[entry[0]];
            }
            return null;
        };
        return BoosterTypeUtil;
    }());
    game.BoosterTypeUtil = BoosterTypeUtil;
})(game || (game = {}));
var game;
(function (game) {
    var BoosterType;
    (function (BoosterType) {
        BoosterType["UNDO"] = "Undo";
        BoosterType["MAGNET"] = "Magnet";
        BoosterType["SORT"] = "Sort";
        BoosterType["REMOVE"] = "Remove";
        BoosterType["UPGRADE"] = "Upgrade";
    })(BoosterType = game.BoosterType || (game.BoosterType = {}));
})(game || (game = {}));
///<reference path='BoosterType.ts' />
var game;
(function (game) {
    var Booster = /** @class */ (function () {
        function Booster(_game, type) {
            this.game = _game;
            this._type = type;
            this.onChange = new Phaser.Signal();
            this.updateTexts();
            this.initValuesFromConfig();
            this._num = this.game.store.getNumber(this._type);
            this._price = this.calculatePrice();
        }
        Booster.prototype.updateTexts = function () {
            var texts = this.game.texts.texts["boosters"][this._type.toString()];
            this._title = texts.title;
            this._description = texts.description;
            this._hint = texts.hint;
            this.warning = texts.warning;
        };
        Booster.prototype.initValuesFromConfig = function () {
            var config = this.game.cache.getJSON("boosters")[this._type];
            this._maxNum = config.max;
            this.basePrice = config.price;
        };
        Booster.prototype.calculatePrice = function () {
            /*let price:number = this.basePrice;
            for (let i:number = 0; i < this._num; i++) {
                price *= 1.25;
            }
            return Math.floor(price);*/
            return this.basePrice;
        };
        Object.defineProperty(Booster.prototype, "description", {
            get: function () {
                return this._description;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Booster.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Booster.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Booster.prototype, "price", {
            get: function () {
                return this._price;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Booster.prototype, "num", {
            get: function () {
                return this._num;
            },
            set: function (value) {
                if (value >= 0 && value <= this._maxNum) {
                    var prevValue = this._num;
                    var newValue = value;
                    this._num = value;
                    this._price = this.calculatePrice();
                    this.game.store.saveValue(this._type, value);
                    this.onChange.dispatch(this, prevValue, newValue);
                }
                if (value > this._maxNum) {
                    console.warn("Booster " + this._type + " :: Max num is reached! [max = " + this._maxNum + ", newValue = " + value + "]");
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Booster.prototype, "hint", {
            get: function () {
                return this._hint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Booster.prototype, "maxNum", {
            get: function () {
                return this._maxNum;
            },
            enumerable: false,
            configurable: true
        });
        return Booster;
    }());
    game.Booster = Booster;
})(game || (game = {}));
/// <reference path='IBoostersConfig.ts' />
/// <reference path='BoosterTypeUtil.ts' />
/// <reference path='Booster.ts' />
var game;
(function (game) {
    var BoostersManager = /** @class */ (function () {
        function BoostersManager(_game) {
            this.game = _game;
            this.createBoosters();
            this.game.texts.onLanguageChange.add(this.onLanguageChange, this);
        }
        BoostersManager.prototype.onLanguageChange = function () {
            this.boosters.forEach(function (booster) { return booster.updateTexts(); });
        };
        BoostersManager.prototype.createBoosters = function () {
            var _this = this;
            this.boosters = game.BoosterTypeUtil.getAllTypes().map(function (boosterType) {
                return new game.Booster(_this.game, boosterType);
            });
            this.boosters.forEach(function (booster) {
                booster.onChange.add(_this.onBoosterChange, _this);
            });
        };
        BoostersManager.prototype.onBoosterChange = function (booster, prevValue, newValue) {
            // console.log("Boosters :: changed", booster.type, prevValue, newValue);
        };
        BoostersManager.prototype.getBooster = function (type) {
            return _.find(this.boosters, { type: type });
        };
        BoostersManager.prototype.createSave = function () {
            var save = {};
            this.boosters.forEach(function (booster) {
                save[booster.type] = booster.num;
            });
            return save;
        };
        BoostersManager.prototype.loadFromSave = function (save, ignoreUndo) {
            var _this = this;
            if (ignoreUndo === void 0) { ignoreUndo = true; }
            Object.keys(save).forEach(function (key) {
                var boosterType = game.BoosterTypeUtil.fromString(key);
                var booster = _this.getBooster(boosterType);
                if (!booster) {
                    return;
                }
                if (boosterType === game.BoosterType.UNDO) {
                    booster.num = ignoreUndo ? booster.num : save[key];
                }
                else {
                    booster.num = save[key];
                }
            });
        };
        BoostersManager.prototype.canBuyAnyBooster = function () {
            var coins = this.game.store.getCoins();
            return this.boosters.some(function (booster) {
                return coins >= booster.price;
            });
        };
        return BoostersManager;
    }());
    game.BoostersManager = BoostersManager;
})(game || (game = {}));
var utils;
(function (utils) {
    var PhaserExtensions = /** @class */ (function () {
        function PhaserExtensions() {
        }
        PhaserExtensions.extend = function () {
            var extendMethods = Object.keys(PhaserExtensions);
            extendMethods.forEach(function (method) {
                if (method !== "extend") {
                    PhaserExtensions[method]();
                }
            });
        };
        PhaserExtensions.extendTimer = function () {
            Phaser.Timer.prototype.removeBy = function (callback, callbackContext) {
                var _this = this;
                _(this.events)
                    .filter({ callback: callback, callbackContext: callbackContext })
                    .forEach(function (event) {
                    _this.remove(event);
                });
            };
        };
        PhaserExtensions.extendGameObjectFactory = function () {
            /* type NS = PhaserNineSlice.NineSlice;
            type NSCacheData = PhaserNineSlice.NineSliceCacheData;
            
            Phaser.GameObjectFactory.prototype.nineSlice = function (x:number, y:number, key:string, frame:string, width:number, height:number, data, group?:Phaser.Group):NS {
                if (group === undefined) {
                    group = this.world;
                }
                
                let nineSliceObject = new PhaserNineSlice.NineSlice(this.game, x, y, key, frame, width, height, data);
                return group.add(nineSliceObject);
            }; */
            /* Phaser.GameObjectFactory.prototype.button = function (key:string, frame?:string, group?:Phaser.Group):game.SimpleButton {
                let button:game.SimpleButton = new game.SimpleButton(this.game, 0, 0, key, frame);
                
                let parent:Phaser.Group = group || this.game.world;
                parent.add(button);

                return button;
            } */
        };
        PhaserExtensions.extendLoader = function () {
            Phaser.Loader.prototype.bitmapFontFromAtlas = function (key, atlasKey, atlasFrame, dataURL, xSpacing, ySpacing) {
                var _this = this;
                this.xml(key + "_data", dataURL);
                this.onLoadComplete.addOnce(function () {
                    _this.game.cache.addBitmapFontFromAtlas(key, atlasKey, atlasFrame, key + "_data", "xml", xSpacing, ySpacing);
                });
                return this;
            };
        };
        PhaserExtensions.extendBitmapText = function () {
            Phaser.BitmapText.prototype.setTextOld = Phaser.BitmapText.prototype.setText;
            Phaser.BitmapText.prototype.setText = function (text) {
                if (typeof text === "number") {
                    text = text.toString();
                }
                return this.setTextOld(text);
            };
        };
        PhaserExtensions.extendText = function () {
            Phaser.Text.prototype.setTextOld = Phaser.Text.prototype.setText;
            Phaser.Text.prototype.setText = function (text, immediate) {
                if (typeof text === "number") {
                    text = text.toString();
                }
                return this.setTextOld(text, immediate);
            };
        };
        PhaserExtensions.addWiggleEasing = function () {
            Phaser.Easing.Wiggle = function wiggle(aProgress, aPeriod1, aPeriod2) {
                if (aPeriod1 === void 0) { aPeriod1 = 6.5; }
                if (aPeriod2 === void 0) { aPeriod2 = 6.5; }
                var current1 = aProgress * Math.PI * 2 * aPeriod1;
                var current2 = aProgress * Math.PI * 2 * aPeriod2;
                return Math.sin(current1) * Math.cos(current2);
            };
        };
        PhaserExtensions.addLightBackEasing = function () {
            var mult = 1;
            Phaser.Easing.LightBack = {
                In: function (k) {
                    var s = 1.70158 * mult;
                    return k * k * ((s + 1) * k - s);
                },
                Out: function (k) {
                    var s = 1.70158 * mult;
                    return --k * k * ((s + 1) * k + s) + 1;
                },
                InOut: function (k) {
                    var s = 1.70158 * 1.525 * mult;
                    if ((k *= 2) < 1)
                        return 0.5 * (k * k * ((s + 1) * k - s));
                    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
                }
            };
        };
        PhaserExtensions.extendCache = function () {
            Phaser.Cache.prototype.cloneBitmapFont = function (oldKey, newKey) {
                if (this.checkBitmapFontKey(newKey)) {
                    console.warn("Cache :: bitmapFont with key " + newKey + " already exists! Choose another key.");
                    return null;
                }
                var oldFont = this.getBitmapFont(oldKey);
                var newFont = {
                    url: null,
                    data: _.cloneDeep(oldFont.data),
                    font: _.cloneDeep(oldFont.font),
                    base: oldFont.base
                };
                this.game.cache._cache.bitmapFont[newKey] = newFont;
                return newFont;
            };
        };
        return PhaserExtensions;
    }());
    utils.PhaserExtensions = PhaserExtensions;
})(utils || (utils = {}));
var utils;
(function (utils) {
    var PIXIExtensions = /** @class */ (function () {
        function PIXIExtensions() {
        }
        PIXIExtensions.extend = function () {
            PIXI.Rectangle.prototype.toPhaser = function () {
                return new Phaser.Rectangle(this.x, this.y, this.width, this.height);
            };
            PIXI.Point.prototype.toPhaser = function () {
                return new Phaser.Point(this.x, this.y);
            };
            PIXI.DisplayObjectContainer.prototype.bringToTop = function (child) {
                this.setChildIndex(child, this.children.length - 1);
            };
            Object.defineProperty(PIXI.DisplayObjectContainer.prototype, 'numChildren', {
                get: function () {
                    return this.children.length;
                }
            });
        };
        return PIXIExtensions;
    }());
    utils.PIXIExtensions = PIXIExtensions;
})(utils || (utils = {}));
var utils;
(function (utils) {
    var Polyfills = /** @class */ (function () {
        function Polyfills() {
        }
        Polyfills.extend = function () {
            var extendMethods = Object.keys(Polyfills);
            extendMethods.forEach(function (method) {
                if (method !== "extend") {
                    Polyfills[method]();
                }
            });
        };
        Polyfills.numberIsFinite = function () {
            Number.isFinite = Number.isFinite || function (value) {
                return typeof value === 'number' && isFinite(value);
            };
        };
        Polyfills.numberIsInteger = function () {
            Number.isInteger = Number.isInteger || function (value) {
                return typeof value === 'number'
                    && Number.isFinite(value)
                    && !(value % 1);
            };
        };
        Polyfills.nodeRemove = function () {
            var arr = [Element, CharacterData, DocumentType];
            var args = [];
            arr.forEach(function (item) {
                if (item) {
                    args.push(item.prototype);
                }
            });
            // from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
            (function (arr) {
                arr.forEach(function (item) {
                    if (item.hasOwnProperty("remove")) {
                        return;
                    }
                    Object.defineProperty(item, "remove", {
                        configurable: true,
                        enumerable: true,
                        writable: true,
                        value: function remove() {
                            this.parentNode.removeChild(this);
                        },
                    });
                });
            })(args);
        };
        return Polyfills;
    }());
    utils.Polyfills = Polyfills;
})(utils || (utils = {}));
var game;
(function (game) {
    var DrawUtil = utils.DrawUtil;
    var Toast = /** @class */ (function (_super) {
        __extends(Toast, _super);
        function Toast(_game, parent) {
            var _this = _super.call(this, _game, parent, "toast") || this;
            _this.addBack();
            _this.addText();
            _this.resizeBack(500, 120);
            _this.game.state.onStateChange.add(_this.hide, _this);
            return _this;
        }
        Toast.prototype.addBack = function () {
            var texture = DrawUtil.createRectTexture(this.game, 200, 100);
            this.back = this.game.add.image(0, 0, texture, null, this);
            this.back.anchor.set(0.5, 0.5);
            this.back.alpha = 0.8;
        };
        Toast.prototype.addText = function () {
            var content = "Toast";
            var style = {
                font: game.GameFonts.DEFAULT,
                fontWeight: game.FontWeight.NORMAL,
                fontSize: 32,
                fill: "#ffffff",
                align: "center",
            };
            this.text = this.game.add.text(0, 0, content, style, this);
            this.text.align = "center";
            this.text.wordWrap = true;
            this.text.wordWrapWidth = this.back.width * 0.85;
            this.text.lineSpacing = -5;
            this.text.anchor.set(0.5, 0.5);
        };
        Toast.prototype.alignText = function () {
            var maxHeight = this.back.height * 0.8;
            this.text.scale.set(1);
            if (this.text.height > maxHeight) {
                this.text.scale.set(maxHeight / this.text.height);
            }
            this.text.centerX = this.back.centerX;
            this.text.centerY = this.back.centerY;
        };
        Toast.prototype.resizeBack = function (width, height) {
            this.back.width = width;
            this.back.height = height;
            this.text.wordWrapWidth = this.back.width * 0.85;
            this.alignText();
        };
        Toast.prototype.updateText = function (content) {
            this.text.setText(content);
            this.alignText();
        };
        Toast.prototype.show = function (message, showDelay, hideDelay) {
            if (showDelay === void 0) { showDelay = 0; }
            if (hideDelay === void 0) { hideDelay = 3000; }
            this.visible = true;
            this.exists = true;
            this.updateText(message);
            this.alpha = 1;
            this.scale.set(1);
            this.centerX = game.Config.HALF_GAME_WIDTH;
            this.centerY = game.Config.GAME_HEIGHT * 0.9;
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this.scale);
            this.game.add.tween(this).from({ alpha: 0, y: "+10" }, 230, Phaser.Easing.Cubic.Out, true, showDelay);
            this.game.time.events.removeBy(this.hide, this);
            this.game.time.events.add(hideDelay, this.hide, this);
        };
        Toast.prototype.hide = function () {
            var _this = this;
            this.game.time.events.removeBy(this.hide, this);
            this.game.tweens.removeFrom(this);
            this.game.add.tween(this).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.Out, true)
                .onComplete.addOnce(function () {
                _this.visible = false;
                _this.exists = false;
            });
        };
        Toast.prototype.showRewardedVideoWarning = function () {
            var message = this.game.texts.texts.videos_warning;
            this.show(message, 0, 2500);
        };
        Toast.prototype.showShareMessage = function (coins) {
            if (coins === void 0) { coins = 0; }
            var message = this.game.texts.texts['share_complete'];
            if (coins > 0) {
                message += "\n" + this.game.texts.texts['coins_reward'].replace("#", coins.toString());
            }
            this.show(message, 0, 3000);
        };
        Toast.prototype.showShareWarningMessage = function () {
            var message = "Sharing is not available in your browser";
            this.show(message, 0, 2500);
        };
        Toast.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true, false);
        };
        return Toast;
    }(Phaser.Group));
    game.Toast = Toast;
})(game || (game = {}));
var game;
(function (game) {
    var RavenWrapper = /** @class */ (function () {
        function RavenWrapper(_game) {
            this._enabled = false;
            this.game = _game;
            this._enabled = typeof Raven !== "undefined" && Raven.isSetup();
        }
        Object.defineProperty(RavenWrapper.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        RavenWrapper.prototype.trackStateChanges = function () {
            if (this._enabled === false) {
                return;
            }
            this.game.state.onStateChange.add(function (newState, oldState) {
                Raven.setTagsContext({
                    "game_state_previous": oldState,
                    "game_state_current": newState,
                });
            });
        };
        RavenWrapper.prototype.setTagsOnStart = function () {
            if (this._enabled === false) {
                return;
            }
            Raven.setTagsContext({
                renderer: this.game.getRendererString(),
                avif: this.game.avif,
            });
        };
        RavenWrapper.prototype.trackInputDown = function () {
            var _this = this;
            if (this._enabled === false) {
                return;
            }
            this.game.state.onStateChange.add(function () {
                _this.game.input.onDown.add(_this.doTrackInputDown, _this);
            });
        };
        RavenWrapper.prototype.doTrackInputDown = function (pointer) {
            if (pointer.interactiveCandidates.length > 0) {
                var interactiveItems = pointer.interactiveCandidates.map(function (handler) {
                    return handler.sprite.name;
                });
                Raven.setExtraContext({
                    last_click: interactiveItems.join(", "),
                });
            }
        };
        RavenWrapper.prototype.saveFacebookTags = function (platform, locale, sdkVersion, supportedAPIs) {
            if (this._enabled === false) {
                return;
            }
            Raven.setTagsContext({
                "fb_platform": platform,
                "fb_locale": locale,
                "fb_sdk_version": sdkVersion,
            });
            Raven.setExtraContext({
                "Supported APIs": supportedAPIs.join(", "),
            });
        };
        RavenWrapper.prototype.addExtraContext = function (context) {
            if (this._enabled === false) {
                return;
            }
            Raven.setExtraContext(context);
        };
        RavenWrapper.prototype.addTagsContext = function (tags) {
            if (this._enabled === false) {
                return;
            }
            Raven.setTagsContext(tags);
        };
        RavenWrapper.prototype.captureException = function (exception, options) {
            if (this._enabled === false) {
                return;
            }
            Raven.captureException(exception, options);
        };
        return RavenWrapper;
    }());
    game.RavenWrapper = RavenWrapper;
})(game || (game = {}));
var game;
(function (game) {
    var GameAudio = /** @class */ (function () {
        function GameAudio(_game) {
            this.savedSoundMute = false;
            this.savedMusicMute = false;
            this.game = _game;
            this.fixIFrameSoundIssue();
        }
        Object.defineProperty(GameAudio.prototype, "musicLoop", {
            get: function () {
                return this._musicLoop;
            },
            enumerable: false,
            configurable: true
        });
        GameAudio.prototype.fixIFrameSoundIssue = function () {
            var _this = this;
            this.game.input.touch.touchEndCallback = function () {
                if (_this.game.sound.context.state === "suspended") {
                    _this.game.sound.context.resume();
                }
            };
        };
        GameAudio.prototype.initMusicLoop = function (externalNode) {
            if (externalNode === void 0) { externalNode = false; }
            this.musicVolume = 1;
            this._musicLoop = this.game.sound.add("main_loop", this.musicVolume, true, !externalNode);
            this._musicLoop.mute = this.savedMusicMute;
            if (externalNode) {
                this._musicLoop.gainNode = this.createMusicLoopNode();
            }
        };
        GameAudio.prototype.createMusicLoopNode = function () {
            var node = this.game.sound.context.createGain();
            node.gain.setTargetAtTime(0, node.context.currentTime, 0.1);
            node.connect(this.game.sound.context.destination);
            return node;
        };
        GameAudio.prototype.loadMute = function () {
            this.soundMute = this.game.store.getBoolean(game.GameStoreKey.SOUND_MUTED);
            this.musicMute = this.game.store.getBoolean(game.GameStoreKey.MUSIC_MUTED);
        };
        GameAudio.prototype.playMusicLoop = function () {
            if (this._musicLoop && this._musicLoop.isPlaying === false) {
                this._musicLoop.play();
            }
            return this._musicLoop;
        };
        GameAudio.prototype.playSound = function (key, volume) {
            if (volume === void 0) { volume = 1.0; }
            if (this.game.cache.checkSoundKey(key)) {
                return this.game.sound.play(key, volume);
            }
            else {
                // console.warn(`Audio :: sound ${key} not found in Cache.`);
            }
            return null;
        };
        GameAudio.prototype.stopSound = function (key) {
            this.game.sound._sounds.forEach(function (sound) {
                if (sound.key === key) {
                    sound.stop();
                }
            });
        };
        GameAudio.prototype.playClickSound = function (volume) {
            if (volume === void 0) { volume = 1; }
            if (this.game.cache.checkSoundKey("click")) {
                this.game.sound.play("click", volume);
            }
        };
        GameAudio.prototype.trackFocusChange = function () {
            if (this.game.device.desktop) {
                return;
            }
            this.game.onBlur.add(this.onGameFocusLost, this);
            this.game.onFocus.add(this.onGameFocus, this);
        };
        GameAudio.prototype.onGameFocusLost = function (event) {
            this.game.sound.mute = true;
            if (this._musicLoop) {
                this._musicLoop.mute = true;
            }
        };
        GameAudio.prototype.onGameFocus = function (event) {
            this.game.sound.mute = this.savedSoundMute;
            if (this._musicLoop) {
                this._musicLoop.mute = this.savedMusicMute;
            }
        };
        GameAudio.prototype.handleMusicOnStart = function () {
            if (this.game.sound.touchLocked) {
                var touchEventType = (this.game.device.iOSVersion > 8)
                    ? "touchend"
                    : "touchstart";
                this.firstTouchListener = this.onFirstTouch.bind(this);
                this.game.canvas.addEventListener(touchEventType, this.firstTouchListener);
            }
            else {
                this.playMusicLoop();
            }
        };
        GameAudio.prototype.onFirstTouch = function (event) {
            this.game.canvas.removeEventListener(event.type, this.firstTouchListener);
            this.playMusicLoopFirstTime(1500);
        };
        GameAudio.prototype.playMusicLoopFirstTime = function (fadeDuration) {
            if (fadeDuration === void 0) { fadeDuration = 1000; }
            if (this._musicLoop) {
                this._musicLoop.play(null, 0, 0, true);
                this._musicLoop.fadeTo(fadeDuration, this.musicVolume);
            }
        };
        Object.defineProperty(GameAudio.prototype, "soundMute", {
            get: function () {
                return this.game.sound.mute;
            },
            set: function (value) {
                this.savedSoundMute = value;
                this.game.sound.mute = value;
                this.game.store.saveValue(game.GameStoreKey.SOUND_MUTED, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameAudio.prototype, "musicMute", {
            get: function () {
                /*if (this._musicLoop) {
                    return this._musicLoop.mute;
                }*/
                return this.savedMusicMute;
            },
            set: function (value) {
                this.savedMusicMute = value;
                this.game.store.saveValue(game.GameStoreKey.MUSIC_MUTED, value);
                if (this._musicLoop) {
                    this._musicLoop.mute = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        GameAudio.prototype.recreateAudioContext = function () {
            if (this.game.device.iOS === false) {
                return;
            }
            if (this.game.sound.usingWebAudio === false) {
                return;
            }
            var hasAudioContext = typeof AudioContext !== "undefined";
            if (hasAudioContext === false) {
                return;
            }
            this.doRecreateAudioContext();
        };
        GameAudio.prototype.doRecreateAudioContext = function () {
            var _a, _b;
            var manager = this.game.sound;
            var managerMute = this.game.store.getBoolean(game.GameStoreKey.SOUND_MUTED);
            var managerVolume = manager.volume;
            (_a = manager.context) === null || _a === void 0 ? void 0 : _a.close();
            (_b = manager.masterGain) === null || _b === void 0 ? void 0 : _b.disconnect();
            manager.context = new AudioContext();
            manager.masterGain = manager.context.createGain();
            manager.masterGain.connect(manager.context.destination);
            manager.masterGain.gain.value = managerMute ? 0 : managerVolume;
            manager._sounds.forEach(function (sound) {
                var volume = sound.volume;
                var mute = sound.mute;
                sound.context = manager.context;
                sound.masterGainNode = manager.masterGain;
                sound.gainNode = sound.context.createGain();
                if (sound.connect) {
                    sound.gainNode.connect(sound.masterGainNode);
                }
                sound.volume = volume;
                sound.mute = mute;
            });
        };
        GameAudio.prototype.suspendAudioContext = function () {
            var _a, _b;
            if (((_a = this.game.sound.context) === null || _a === void 0 ? void 0 : _a.state) === "running") {
                return (_b = this.game.sound.context) === null || _b === void 0 ? void 0 : _b.suspend();
            }
            return Promise.resolve();
        };
        GameAudio.prototype.resumeAudioContext = function () {
            var _a, _b;
            if (((_a = this.game.sound.context) === null || _a === void 0 ? void 0 : _a.state) === "suspended") {
                return (_b = this.game.sound.context) === null || _b === void 0 ? void 0 : _b.resume();
            }
            return Promise.resolve();
        };
        return GameAudio;
    }());
    game.GameAudio = GameAudio;
})(game || (game = {}));
var game;
(function (game) {
    var FontWeight;
    (function (FontWeight) {
        FontWeight[FontWeight["NORMAL"] = 400] = "NORMAL";
        FontWeight[FontWeight["BOLD"] = 700] = "BOLD";
    })(FontWeight = game.FontWeight || (game.FontWeight = {}));
    var GameFonts = /** @class */ (function () {
        function GameFonts(_game) {
            this.game = _game;
        }
        // CSS
        GameFonts.NUNITO_CSS = "Nunito";
        GameFonts.DEFAULT = GameFonts.NUNITO_CSS;
        // BITMAP
        GameFonts.BARIOL_BOLD_BMP = "bariol_bold_bmp";
        GameFonts.BARIOL_REGULAR_BMP = "bariol_regular_bmp";
        GameFonts.BOOSTERS_SHOP_BARIOL_BOLD = "boosters_shop_bariol_bold";
        GameFonts.GAME_OVER_BARIOL_BOLD = "game_over_bariol_bold";
        return GameFonts;
    }());
    game.GameFonts = GameFonts;
})(game || (game = {}));
var game;
(function (game) {
    var LanguageUtil = /** @class */ (function () {
        function LanguageUtil() {
        }
        LanguageUtil.getLanguageTitle = function (shortCode) {
            return this.LANGUAGES_MAP[shortCode];
        };
        LanguageUtil.convertLanguageCodeToGameLanguage = function (code) {
            switch (code) {
                case "pt-BR":
                    return "br";
                case "ja":
                    return "jp";
                case "uk-UA":
                case "uk-ua":
                case "uk":
                    return "ru";
                default:
                    return code.split("-")[0].toLowerCase();
            }
        };
        LanguageUtil.LANGUAGES_MAP = {
            ru: "Русский",
            en: "English",
            fr: "Français",
            it: "Italiano",
            de: "Deutsch",
            es: "Español",
            nl: "Nederlands",
            no: "Norsk",
            fi: "Suomi",
            br: "Brasileiro",
            pt: "Português",
            jp: "日本語",
            ar: "العربية",
            tr: "Türkçe",
            se: "Svenska",
            pl: "Polski",
        };
        return LanguageUtil;
    }());
    game.LanguageUtil = LanguageUtil;
})(game || (game = {}));
///<reference path="./ITexts.ts"/>
///<reference path='LanguageUtil.ts' />
var game;
(function (game) {
    var GameTexts = /** @class */ (function () {
        function GameTexts(_game) {
            this.game = _game;
            this.allTexts = this.game.cache.getJSON("texts");
            this._allLanguages = Object.keys(this.allTexts);
            this._language = this.detectLanguage();
            this.texts = this.allTexts[this._language];
            this.onLanguageChange = new Phaser.Signal();
            console.info("Language: " + this._language);
            console.groupCollapsed("Texts");
            console.log(this.texts);
            console.groupEnd();
        }
        Object.defineProperty(GameTexts.prototype, "allLanguages", {
            get: function () {
                return this._allLanguages;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameTexts.prototype, "language", {
            get: function () {
                return this._language;
            },
            enumerable: false,
            configurable: true
        });
        GameTexts.prototype.detectLanguage = function () {
            return (this.getLanguageFromUrlParam() ||
                this.getSavedLanguage() ||
                this.getLanguageFromBrowser() ||
                "en");
        };
        GameTexts.prototype.getLanguageFromUrlParam = function () {
            var language = utils.NetUtil.getParam("lang") || utils.NetUtil.getParam("language");
            if (language && this.isLanguageSupported(language)) {
                return language;
            }
            return null;
        };
        GameTexts.prototype.getSavedLanguage = function () {
            return this.game.store.getValue(game.GameStoreKey.LANGUAGE);
        };
        GameTexts.prototype.getLanguageFromBrowser = function () {
            var _this = this;
            var language = game.LanguageUtil.convertLanguageCodeToGameLanguage(navigator.language);
            if (language && this.isLanguageSupported(language)) {
                return language;
            }
            if (typeof navigator.languages !== "undefined") {
                var languages = navigator.languages.map(function (code) { return game.LanguageUtil.convertLanguageCodeToGameLanguage(code); });
                var supportedLanguage = languages.find(function (language) { return _this.isLanguageSupported(language); });
                if (supportedLanguage) {
                    return supportedLanguage;
                }
            }
            return null;
        };
        GameTexts.prototype.isLanguageSupported = function (language) {
            return this._allLanguages.includes(language);
        };
        GameTexts.prototype.setLanguage = function (language) {
            if (!this.isLanguageSupported(language)) {
                console.warn("Language " + language + " is not supported!");
                return false;
            }
            this._language = language;
            this.texts = this.allTexts[language];
            this.onLanguageChange.dispatch(language);
            console.log("Current language:", this._language);
            return true;
        };
        return GameTexts;
    }());
    game.GameTexts = GameTexts;
})(game || (game = {}));
var game;
(function (game) {
    var PlayfabWrapper = /** @class */ (function () {
        function PlayfabWrapper(_game) {
            this._isLoggedIn = false;
            this.loginResult = null;
            this.game = _game;
            this.sdk = PlayFabClientSDK;
            this.leaderboardName = window.game.config.publisher;
            PlayFab.settings.titleId = "A0553";
        }
        Object.defineProperty(PlayfabWrapper.prototype, "isLoggedIn", {
            get: function () {
                return this._isLoggedIn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PlayfabWrapper.prototype, "id", {
            get: function () {
                var _a;
                return (_a = this.loginResult) === null || _a === void 0 ? void 0 : _a.PlayFabId;
            },
            enumerable: false,
            configurable: true
        });
        PlayfabWrapper.prototype.login = function (playerId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                PlayFabClientSDK.LoginWithCustomID({
                    CreateAccount: true,
                    CustomId: playerId,
                    TitleId: "A0553",
                }, function (result, error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        _this._isLoggedIn = true;
                        _this.loginResult = result.data;
                        resolve(result.data);
                    }
                });
            });
        };
        PlayfabWrapper.prototype.getTopLeaderboard = function (entriesNum) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.sdk.GetLeaderboard({
                    MaxResultsCount: entriesNum,
                    StartPosition: 0,
                    StatisticName: _this.leaderboardName,
                }, function (result, error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result.data.Leaderboard);
                    }
                });
            });
        };
        PlayfabWrapper.prototype.getAroundPlayerLeaderboard = function (resultsCount) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.sdk.GetLeaderboardAroundPlayer({
                    PlayFabId: _this.id,
                    MaxResultsCount: resultsCount,
                    StatisticName: _this.leaderboardName,
                }, function (result, error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result.data.Leaderboard);
                    }
                });
            });
        };
        PlayfabWrapper.prototype.getPlayerLeaderboardEntry = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.sdk.GetLeaderboardAroundPlayer({
                    PlayFabId: _this.id,
                    MaxResultsCount: 1,
                    StatisticName: _this.leaderboardName,
                }, function (result, error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result.data.Leaderboard[0]);
                    }
                });
            });
        };
        PlayfabWrapper.prototype.getPlayerScore = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.sdk.GetPlayerStatistics({
                    StatisticNames: [_this.leaderboardName],
                }, function (result, error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result.data.Statistics[0]);
                    }
                });
            });
        };
        PlayfabWrapper.prototype.updatePlayerScore = function (score) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.sdk.UpdatePlayerStatistics({
                    Statistics: [{ StatisticName: _this.leaderboardName, Value: score }],
                }, function (result, error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                });
            });
        };
        PlayfabWrapper.prototype.updatePlayerName = function (name) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.sdk.UpdateUserTitleDisplayName({
                    DisplayName: name,
                }, function (result, error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result.data.DisplayName);
                    }
                });
            });
        };
        PlayfabWrapper.generatePlayfabId = function (rnd) {
            return rnd.uuid().split("-").join("").slice(0, 16).toUpperCase();
        };
        PlayfabWrapper.prototype.fillLeaderboard = function () {
            return __awaiter(this, void 0, void 0, function () {
                var fakeData;
                var _this = this;
                return __generator(this, function (_a) {
                    fakeData = this.game.cache.getJSON("leaderboard");
                    fakeData.slice(50).forEach(function (entry, index) {
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.login(entry.PlayFabId)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.updatePlayerName(entry.DisplayName)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.updatePlayerScore(entry.StatValue)];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, index * 1000);
                    });
                    return [2 /*return*/];
                });
            });
        };
        return PlayfabWrapper;
    }());
    game.PlayfabWrapper = PlayfabWrapper;
})(game || (game = {}));
var game;
(function (game) {
    var WebShare = /** @class */ (function () {
        function WebShare(_game) {
            this.isEnabled = false;
            this.game = _game;
            this.isEnabled = typeof navigator["share"] === "function";
            if (this.isEnabled) {
                this._share = navigator.share.bind(navigator);
            }
        }
        WebShare.prototype.share = function (text, url, title) {
            if (this.isEnabled === false) {
                this.game.toast.showShareWarningMessage();
                return Promise.reject("WebShare API isn't available");
            }
            var _default = {
                url: location.href,
                title: window.game.config["game_title"],
            };
            return this._share(__assign(__assign({}, _default), { title: title,
                text: text,
                url: url }));
        };
        return WebShare;
    }());
    game.WebShare = WebShare;
})(game || (game = {}));
var game;
(function (game) {
    var EGAAdAction = gameanalytics.EGAAdAction;
    var EGAAdType = gameanalytics.EGAAdType;
    var PokiDummySdk = /** @class */ (function () {
        function PokiDummySdk() {
        }
        PokiDummySdk.prototype.init = function () {
            return Promise.resolve();
        };
        PokiDummySdk.prototype.setDebug = function (value) {
        };
        PokiDummySdk.prototype.gameLoadingStart = function () {
        };
        PokiDummySdk.prototype.gameLoadingProgress = function (progress) {
        };
        PokiDummySdk.prototype.gameLoadingFinished = function () {
        };
        PokiDummySdk.prototype.gameplayStart = function () {
        };
        PokiDummySdk.prototype.gameplayStop = function () {
        };
        PokiDummySdk.prototype.commercialBreak = function () {
            return Promise.resolve(undefined);
        };
        PokiDummySdk.prototype.rewardedBreak = function () {
            return Promise.resolve(undefined);
        };
        PokiDummySdk.prototype.happyTime = function (scale) {
        };
        return PokiDummySdk;
    }());
    game.PokiDummySdk = PokiDummySdk;
    var PokiSdkWrapper = /** @class */ (function () {
        function PokiSdkWrapper(_game) {
            this.isEnabled = false;
            this.wasMuted = false;
            this.isAdBlockEnabled = false;
            this.game = _game;
            this.isEnabled = typeof PokiSDK !== "undefined";
            this.sdk = this.isEnabled ? PokiSDK : new PokiDummySdk();
            this.sdk.setDebug(utils.NetUtil.getParamBool("pokiDev"));
        }
        PokiSdkWrapper.prototype.init = function () {
            var _this = this;
            return this.sdk.init()
                .catch(function () {
                _this.isAdBlockEnabled = true;
            });
        };
        PokiSdkWrapper.prototype.commercialBreak = function (placement) {
            var _this = this;
            var _a;
            if (this.isAdBlockEnabled) {
                return Promise.reject("AdBlock");
            }
            (_a = this.game.analytics) === null || _a === void 0 ? void 0 : _a.sendAdEvent(EGAAdAction.Clicked, EGAAdType.Interstitial, placement, "poki");
            return this.onBreakStart()
                .finally(function () {
                _this.sdk.commercialBreak()
                    .then(function () {
                    var _a;
                    (_a = _this.game.analytics) === null || _a === void 0 ? void 0 : _a.sendAdEvent(EGAAdAction.Show, EGAAdType.Interstitial, placement, "poki");
                })
                    .catch(function () {
                    var _a;
                    (_a = _this.game.analytics) === null || _a === void 0 ? void 0 : _a.sendAdEvent(EGAAdAction.FailedShow, EGAAdType.Interstitial, placement, "poki");
                })
                    .finally(function () {
                    _this.onBreakComplete();
                });
            });
        };
        PokiSdkWrapper.prototype.rewardedBreak = function (placement, callbacks) {
            var _this = this;
            var _a;
            if (this.isAdBlockEnabled) {
                this.game.toast.showRewardedVideoWarning();
                return Promise.reject("AdBlock");
            }
            (_a = this.game.analytics) === null || _a === void 0 ? void 0 : _a.sendAdEvent(EGAAdAction.Clicked, EGAAdType.RewardedVideo, placement, "poki");
            return this.onBreakStart()
                .finally(function () {
                _this.sdk.rewardedBreak()
                    .then(function (success) {
                    var _a, _b;
                    if (success) {
                        (_a = _this.game.analytics) === null || _a === void 0 ? void 0 : _a.sendAdEvent(EGAAdAction.Show, EGAAdType.RewardedVideo, placement, "poki");
                        callbacks.onSuccess();
                    }
                    else {
                        (_b = _this.game.analytics) === null || _b === void 0 ? void 0 : _b.sendAdEvent(EGAAdAction.FailedShow, EGAAdType.RewardedVideo, placement, "poki");
                        callbacks.onCancel && callbacks.onCancel();
                    }
                })
                    .catch(function () {
                    var _a;
                    callbacks.onFail && callbacks.onFail();
                    _this.game.toast.showRewardedVideoWarning();
                    (_a = _this.game.analytics) === null || _a === void 0 ? void 0 : _a.sendAdEvent(EGAAdAction.FailedShow, EGAAdType.RewardedVideo, placement, "poki");
                })
                    .finally(function () {
                    _this.onBreakComplete();
                });
            });
        };
        PokiSdkWrapper.prototype.onBreakStart = function () {
            this.wasMuted = this.game.sound.mute;
            this.game.sound.mute = true;
            this.game.canvas.style.pointerEvents = "none";
            this.game.input.keyboard.enabled = false;
            return this.game.audio.suspendAudioContext();
        };
        PokiSdkWrapper.prototype.onBreakComplete = function () {
            this.game.sound.mute = this.wasMuted;
            this.game.canvas.style.pointerEvents = "auto";
            this.game.input.keyboard.enabled = true;
            this.game.audio.resumeAudioContext();
        };
        PokiSdkWrapper.prototype.recreateAudioContext = function (delay) {
            var _this = this;
            this.game.time.events.add(delay, function () {
                _this.game.audio.recreateAudioContext();
            });
        };
        return PokiSdkWrapper;
    }());
    game.PokiSdkWrapper = PokiSdkWrapper;
})(game || (game = {}));
var game;
(function (game_11) {
    var GA = gameanalytics.GameAnalytics;
    var EGAProgressionStatus = gameanalytics.EGAProgressionStatus;
    var EGAErrorSeverity = gameanalytics.EGAErrorSeverity;
    var RendererType;
    (function (RendererType) {
        RendererType["CANVAS"] = "CANVAS";
        RendererType["WEBGL"] = "WEBGL";
    })(RendererType = game_11.RendererType || (game_11.RendererType = {}));
    var GameAnalyticsWrapper = /** @class */ (function () {
        function GameAnalyticsWrapper(game) {
            this.isEnabled = false;
            var disableAnalytics = this.disableAnalytics();
            if (disableAnalytics) {
                this.isEnabled = false;
                return;
            }
            this.game = game;
            this.isEnabled = true;
            this.loadingTimes = {};
            this.setLog();
            this.setCustomDimensions();
            GA.configureBuild(window.game.config.build_version.toString());
            GA.initialize("c29379c894f89732844718be51e26549", "4b19931335469b6791305dad754d3dc1caf03a44");
            GA.addDesignEvent("Startup");
        }
        GameAnalyticsWrapper.prototype.disableAnalytics = function () {
            var forceAnalytics = utils.NetUtil.getParamBool("analytics");
            if (forceAnalytics) {
                return false;
            }
            return game_11.Main.development || typeof GA === "undefined" || this.isRobowhale();
        };
        GameAnalyticsWrapper.prototype.isRobowhale = function () {
            var _a;
            return (_a = location.hostname) === null || _a === void 0 ? void 0 : _a.includes("robowhale");
        };
        GameAnalyticsWrapper.prototype.setLog = function () {
            var logLevel = utils.NetUtil.getParamInt("analyticsLog");
            if (logLevel === 1) {
                GA.setEnabledInfoLog(true);
            }
            else if (logLevel === 2) {
                GA.setEnabledVerboseLog(true);
            }
        };
        GameAnalyticsWrapper.prototype.setCustomDimensions = function () {
            GA.configureAvailableCustomDimensions01(["poki", "yandex", "game-distribution"]);
            GA.setCustomDimension01("poki");
            GA.configureAvailableCustomDimensions02([RendererType.CANVAS, RendererType.WEBGL]);
            GA.setCustomDimension02(this.getRendererType());
            var browsers = ["chrome", "firefox", "ie", "mobileSafari", "opera", "safari", "silk", "trident", "other"];
            var currentBrowser = this.getCurrentBrowser(browsers);
            GA.configureAvailableCustomDimensions03(browsers);
            GA.setCustomDimension03(currentBrowser);
        };
        GameAnalyticsWrapper.prototype.getRendererType = function () {
            if (this.game.renderer instanceof PIXI.CanvasRenderer) {
                return RendererType.CANVAS;
            }
            else {
                return RendererType.WEBGL;
            }
        };
        GameAnalyticsWrapper.prototype.getCurrentBrowser = function (browsers) {
            var _this = this;
            var currentBrowser = browsers.find(function (browser) { return _this.game.device[browser] === true; });
            return currentBrowser !== null && currentBrowser !== void 0 ? currentBrowser : "other";
        };
        GameAnalyticsWrapper.prototype.sendLevelStart = function (level) {
            this.sendProgressionEvent(EGAProgressionStatus.Start, level);
        };
        GameAnalyticsWrapper.prototype.sendLevelComplete = function (level, starsNum) {
            this.sendProgressionEvent(EGAProgressionStatus.Complete, level, starsNum);
        };
        GameAnalyticsWrapper.prototype.sendLevelFail = function (level) {
            this.sendProgressionEvent(EGAProgressionStatus.Fail, level);
        };
        GameAnalyticsWrapper.prototype.sendProgressionEvent = function (type, level, score) {
            if (this.isEnabled === false) {
                return;
            }
            var levelKey = "level_" + _.padStart(level.toString(), 3, "0");
            GA.addProgressionEvent(type, levelKey, "", "", score);
        };
        GameAnalyticsWrapper.prototype.sendBoosterUseEvent = function (level, type) {
            if (this.isEnabled === false) {
                return;
            }
            var levelKey = "Level_" + _.padStart(level.toString(), 3, "0");
            GA.addDesignEvent(levelKey + ":Booster:" + type);
        };
        GameAnalyticsWrapper.prototype.sendAdEvent = function (action, type, placement, adProvider) {
            if (this.isEnabled === false) {
                return;
            }
            GA.addAdEvent(action, type, adProvider, placement);
        };
        GameAnalyticsWrapper.prototype.sendRewardedAd = function (placement, type, action) {
            if (this.isEnabled === false) {
                return;
            }
            GA.addDesignEvent("Rewarded_Ad:" + placement + ":" + type + ":" + action);
        };
        GameAnalyticsWrapper.prototype.sendLoadingEvent = function (place, type) {
            if (this.isEnabled === false) {
                return;
            }
            if (type === "start") {
                this.loadingTimes[place] = Date.now();
                GA.addDesignEvent("Loading:" + place + ":" + type);
            }
            if (type === "complete") {
                var durationMs = Date.now() - this.loadingTimes[place];
                var duration = Phaser.Math.roundTo(durationMs / 1000, -1);
                GA.addDesignEvent("Loading:" + place + ":" + type, duration);
            }
        };
        GameAnalyticsWrapper.prototype.sendDesignEvent = function (event, value) {
            if (this.isEnabled === false) {
                return;
            }
            GA.addDesignEvent(event, value);
        };
        GameAnalyticsWrapper.prototype.sendErrorEvent = function (message, severity) {
            if (severity === void 0) { severity = EGAErrorSeverity.Error; }
            if (this.isEnabled === false) {
                return;
            }
            GA.addErrorEvent(severity, message);
        };
        GameAnalyticsWrapper.prototype.getRemoteConfigValue = function (key, defaultValue) {
            if (this.isEnabled === false) {
                return defaultValue;
            }
            return GA.getRemoteConfigsValueAsString(key, defaultValue);
        };
        return GameAnalyticsWrapper;
    }());
    game_11.GameAnalyticsWrapper = GameAnalyticsWrapper;
})(game || (game = {}));
///<reference path='Config.ts' />
///<reference path='plugins/StateTransition.ts' />
///<reference path="GameStore.ts"/>
///<reference path="GameStore.ts"/>
///<reference path="robowhale/utils/NetUtil.ts"/>
///<reference path='gui/buttons/SimpleButton.ts' />
///<reference path='states/StateKey.ts' />
///<reference path='states/Boot.ts' />
///<reference path='states/preloader/BasePreloader.ts' />
///<reference path='states/preloader/WebPreloader.ts' />
///<reference path='states/mainMenu/MainMenu.ts' />
///<reference path='states/boostersShop/BoostersShop.ts' />
///<reference path='states/level/Level.ts' />
///<reference path='states/leaderboards/LeaderboardScreen.ts' />
///<reference path='states/gameOver/GameOver.ts' />
///<reference path='states/test/TestState.ts' />
///<reference path="states/level/boosters/BoostersManager.ts"/>
///<reference path='robowhale/PhaserExtensions.ts' />
///<reference path='robowhale/PIXIExtensions.ts' />
///<reference path='robowhale/Polyfills.ts' />
///<reference path='gui/Toast.ts' />
///<reference path='RavenWrapper.ts' />
///<reference path="GameStore.ts"/>
///<reference path="GameAudio.ts"/>
///<reference path="GameFonts.ts"/>
///<reference path="texts/GameTexts.ts"/>
///<reference path='playfab/PlayfabWrapper.ts' />
///<reference path='WebShare.ts' />
///<reference path='poki/PokiSdkWrapper.ts' />
///<reference path='GameAnalyticsWrapper.ts' />
var game;
(function (game) {
    var Main = /** @class */ (function (_super) {
        __extends(Main, _super);
        function Main() {
            var _this = this;
            utils.Polyfills.extend();
            utils.PIXIExtensions.extend();
            utils.PhaserExtensions.extend();
            _this = _super.call(this, {
                width: game.Config.SOURCE_GAME_WIDTH,
                height: game.Config.SOURCE_GAME_HEIGHT,
                renderer: Main.getRendererType(),
                transparent: false,
                antialias: true,
                enableDebug: utils.NetUtil.getParamBool("debug"),
                failIfMajorPerformanceCaveat: true,
                disableVisibilityChange: true,
                clearBeforeRender: false,
                parent: document.getElementById("canvas-container"),
            }) || this;
            _this.detectDevMode();
            _this.detectLocalhost();
            _this.avif = false;
            _this.webp = false;
            _this.raven = new game.RavenWrapper(_this);
            _this.store = new game.GameStore(_this, "Impossible13");
            _this.fonts = new game.GameFonts(_this);
            _this.share = new game.WebShare(_this);
            _this.addStates();
            return _this;
        }
        Main.getRendererType = function () {
            var forceCanvas = utils.NetUtil.getParamBool("canvas");
            if (forceCanvas) {
                return Phaser.CANVAS;
            }
            return Phaser.AUTO;
        };
        Main.prototype.detectDevMode = function () {
            Main.development = utils.NetUtil.getParamBool("dev");
            if (Main.development) {
                console.info("Developer mode is ON");
            }
        };
        Main.prototype.detectLocalhost = function () {
            var localhosts = ["localhost", "192.168"];
            this.isLocalhost = localhosts.some(function (localAddress) {
                return location.hostname.indexOf(localAddress) > -1;
            });
        };
        Main.prototype.addStates = function () {
            this.state.add('Boot', game.Boot, true);
            this.state.add('Preloader', game.WebPreloader, false);
            this.state.add('MainMenu', game.MainMenu, false);
            this.state.add('BoostersShop', game.BoostersShop, false);
            this.state.add('Level', game.Level, false);
            this.state.add('GameOver', game.GameOver, false);
            this.state.add(game.StateKey.LEADERBOARDS, game.LeaderboardScreen, false);
            // this.state.add('Test', TestState, false);
        };
        Main.prototype.changeState = function (newState, arg) {
            this.stateTransitionPlugin.changeState(newState, arg);
        };
        Main.prototype.getRendererString = function () {
            if (this.renderer) {
                return this.renderer.type === Phaser.WEBGL
                    ? "webgl"
                    : "canvas";
            }
            return "no-renderer";
        };
        Main.modernDevice = false;
        Main.development = false;
        return Main;
    }(Phaser.Game));
    game.Main = Main;
})(game || (game = {}));
var GameEnvironment;
(function (GameEnvironment) {
    GameEnvironment["DEVELOP"] = "develop";
    GameEnvironment["DEPLOY_WEB"] = "deploy-web";
})(GameEnvironment || (GameEnvironment = {}));
// @ts-nocheck
var game;
(function (game) {
    function sitelock() {
            return;
        if (window.environment !== GameEnvironment.DEPLOY_WEB) {
            return;
        }
        var isIgnoreSitelock = utils.NetUtil.getParamBool("sitelock", "0");
        if (isIgnoreSitelock) {
            return;
        }
        var _0x1918 = ["top", "indexOf", "aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==", "hostname", "length", "location", "LnBva2ktZ2RuLmNvbQ==", "href"];
        (function (_0x4a02b5, _0x5c0c3d) {
            var _0x56a85d = function (_0x375c0e) {
                while (--_0x375c0e) {
                    _0x4a02b5.push(_0x4a02b5.shift());
                }
            };
            _0x56a85d(++_0x5c0c3d);
        }(_0x1918, 0x1ae));
        var _0xcdc9 = function (_0x4a02b5, _0x5c0c3d) {
            _0x4a02b5 -= 0x0;
            var _0x56a85d = _0x1918[_0x4a02b5];
            return _0x56a85d;
        };
        (function checkInit() {
            var _0x151adb = ["bG9jYWxob3N0", "LnBva2kuY29t", _0xcdc9("0x0")];
            var _0x219654 = ![];
            var _0x558823 = window[_0xcdc9("0x7")][_0xcdc9("0x5")];
            for (var _0x220888 = 0x0; _0x220888 < _0x151adb[_0xcdc9('0x6')]; _0x220888++) {
                var _0x4a2f49 = atob(_0x151adb[_0x220888]);
                if (_0x558823[_0xcdc9("0x3")](_0x4a2f49, _0x558823.length - _0x4a2f49.length) !== -0x1) {
                    _0x219654 = !![];
                    break;
                }
            }
            if (!_0x219654) {
                var _0xcff8e8 = _0xcdc9("0x4");
                var _0x3296f7 = atob(_0xcff8e8);
                window.location[_0xcdc9("0x1")] = _0x3296f7;
                window[_0xcdc9("0x2")][_0xcdc9("0x7")] !== window[_0xcdc9("0x7")] && (window[_0xcdc9("0x2")][_0xcdc9("0x7")] = window[_0xcdc9("0x7")]);
            }
        }());
    }
    game.sitelock = sitelock;
})(game || (game = {}));
///<reference path="Main.ts"/>
///<reference path="GameEnvironment.ts"/>
///<reference path='poki/Sitelock.ts' />
window.addEventListener("load", function () {
    game.sitelock();
    game.loadErudaConsole();
    game.startPhaser();
});
var game;
(function (game) {
    function loadErudaConsole() {
        var erudaValue = utils.NetUtil.getParamInt("console");
        if (erudaValue <= 0) {
            logBuildInfo();
            return;
        }
        doLoadErudaConsole(erudaValue);
    }
    game.loadErudaConsole = loadErudaConsole;
    function logBuildInfo() {
        console.info("Build #" + window.game.config.build_version, window.game.config.build_time);
    }
    function doLoadErudaConsole(erudaValue) {
        var body = document.getElementsByTagName("body")[0];
        var script = document.createElement("script");
        script.src = "//cdn.jsdelivr.net/npm/eruda";
        script.type = "text/javascript";
        script.onload = onErudaConsoleLoad.bind(this, erudaValue);
        body.appendChild(script);
    }
    function onErudaConsoleLoad(value) {
        eruda.init({
            tool: ["console", "elements", "info"],
        });
        logBuildInfo();
        if (value === 2) {
            eruda.show();
        }
    }
    function startPhaser() {
        var environment = window.environment;
        var forceRaven = utils.NetUtil.getParamBool("raven");
        if (forceRaven || environment !== GameEnvironment.DEVELOP) {
            setupRaven(environment, forceRaven);
        }
        else {
            createGame();
        }
    }
    game.startPhaser = startPhaser;
    function setupRaven(environment, forceRaven) {
        var options = {
            environment: environment.toString(),
            release: window.game.config.build_version,
            captureUnhandledRejections: false,
            whitelistUrls: ["poki-gdn.com", "robowhale.com"],
            ignoreErrors: ["freed script", "out of memory", "InvalidStateError: Failed to execute 'appendBuffer' on 'SourceBuffer'", "EncodingError"],
            tags: {
                publisher: window.game.config.publisher,
            },
        };
        if (forceRaven) {
            options.whitelistUrls.push(location.hostname);
        }
        Raven.config("https://893cb3b443434e15870f088030cff4c4@o122971.ingest.sentry.io/1467242", options).install();
        Raven.context(function () {
            createGame();
        });
    }
    function createGame() {
        window["gameInstance"] = new game.Main();
    }
    function createCustomAudioContext() {
        var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
        if (iOS === false) {
            return;
        }
        var hasAudioContext = typeof AudioContext !== "undefined";
        if (!hasAudioContext) {
            return;
        }
        PhaserGlobal = {
            audioContext: new AudioContext(),
        };
    }
})(game || (game = {}));
//# sourceMappingURL=game.js.map