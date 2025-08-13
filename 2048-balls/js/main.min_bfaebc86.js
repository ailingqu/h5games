if ("undefined" != window.CrazyGames) {
    const {
        CrazySDK
    } = window.CrazyGames;
    window.crazysdk = CrazySDK.getInstance();
    window.crazysdk.init();
}


function waitAsync(e, t) {
    return new Promise(function(o, n) {
        setTimeout(function() {
            t && t(), o()
        }, e)
    })
}

function closure(e) {
    for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
    return function() {
        for (var o = [], n = 0; n < arguments.length; n++) o[n] = arguments[n];
        return e.apply(null, t.concat(o))
    }
}
var __reflect = this && this.__reflect || function(e, t, o) {
        e.__class__ = t, o ? o.push(t) : o = [t], e.__types__ = e.__types__ ? o.concat(e.__types__) : o
    },
    __extends = this && this.__extends || function(e, t) {
        function o() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        o.prototype = t.prototype, e.prototype = new o
    },
    __awaiter = this && this.__awaiter || function(e, t, o, n) {
        return new(o || (o = Promise))(function(a, r) {
            function i(e) {
                try {
                    h(n.next(e))
                } catch (t) {
                    r(t)
                }
            }

            function s(e) {
                try {
                    h(n["throw"](e))
                } catch (t) {
                    r(t)
                }
            }

            function h(e) {
                e.done ? a(e.value) : new o(function(t) {
                    t(e.value)
                }).then(i, s)
            }
            h((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function o(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(o) {
            if (a) throw new TypeError("Generator is already executing.");
            for (; h;) try {
                if (a = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4:
                        return h.label++, {
                            value: o[1],
                            done: !1
                        };
                    case 5:
                        h.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = h.ops.pop(), h.trys.pop();
                        continue;
                    default:
                        if (i = h.trys, !(i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                            h = 0;
                            continue
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            h.label = o[1];
                            break
                        }
                        if (6 === o[0] && h.label < i[1]) {
                            h.label = i[1], i = o;
                            break
                        }
                        if (i && h.label < i[2]) {
                            h.label = i[2], h.ops.push(o);
                            break
                        }
                        i[2] && h.ops.pop(), h.trys.pop();
                        continue
                }
                o = t.call(e, h)
            } catch (n) {
                o = [6, n], r = 0
            } finally {
                a = i = 0
            }
            if (5 & o[0]) throw o[1];
            return {
                value: o[0] ? o[1] : void 0,
                done: !0
            }
        }
        var a, r, i, s, h = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: o(0),
            "throw": o(1),
            "return": o(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    },
    Emiter = function() {
        function e() {
            this.maps = {}, this.uid = 0, this._duringEmit = !1
        }
        return e.prototype.add = function(e, t, o, n, a) {
            o = o || null, n = n || 0;
            var r = this.uid++,
                i = this.maps[e] || [];
            return i.push([r, t, o, n, a]), this.maps[e] = i, i.sort(function(e, t) {
                return e[3] < t[3]
            }), r
        }, e.prototype.on = function(e, t, o, n) {
            return this.add(e, t, o, n, !1)
        }, e.prototype.once = function(e, t, o, n) {
            return this.add(e, t, o, n, !0)
        }, e.prototype.race = function(e, t, o, n) {
            for (var a = this, r = [], i = !1, s = function(e) {
                    for (var n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s];
                    i = !0, r.forEach(function(e) {
                        return a.rm(e[0], e[1])
                    }), t.apply(o, [e].concat(n))
                }, h = 0, c = e; h < c.length; h++) {
                var l = c[h];
                if (i) break;
                r.push([this.once(l, closure(s, l), o, n), l])
            }
        }, e.prototype.rm = function(e, t) {
            for (var o = t ? [t] : Object.keys(this.maps), n = 0, a = o; n < a.length; n++) {
                var r = a[n],
                    i = this.maps[r];
                if (i) {
                    this._duringEmit && (this.maps[r] = i = i.concat());
                    for (var s = 0; s < i.length;) {
                        var h = i[s],
                            c = h[0];
                        h[1], h[2], h[3], h[4];
                        if (c == e) return i.splice(s, 1), !0;
                        s++
                    }
                }
            }
            return !1
        }, e.prototype.rmall = function(e) {
            void 0 == e ? this.maps = {} : delete this.maps[e]
        }, e.prototype.emit = function(t, o) {
            var n = this.maps[t];
            if (n && n.length > 0) {
                for (var a = 0; a < n.length;) {
                    var r = n[a],
                        i = (r[0], r[1]),
                        s = r[2],
                        h = (r[3], r[4]);
                    h ? n.splice(a, 1) : a++, this._duringEmit = !0;
                    var c = i.call(s, o);
                    if (this._duringEmit = !1, c == e.CONST["break"]) break
                }
                return !0
            }
            return !1
        }, e.CONST = {
            "break": {}
        }, e
    }();
__reflect(Emiter.prototype, "Emiter");
var Facade = function() {
    function e() {
        this._responders = [], this._commands = {}, e.inst = this, this.emiter = new Emiter
    }
    return e.prototype.registResponser = function(e) {
        if (this._responders.some(function(t) {
                return t.res == e
            })) throw "this responser has been registed already!";
        for (var t = e.listResponse(), o = [], n = function(t) {
                var n = a.emiter.on(t, function(o) {
                    e.doResponse(t, o)
                });
                o.push({
                    name: t,
                    id: n
                })
            }, a = this, r = 0, i = t; r < i.length; r++) {
            var s = i[r];
            n(s)
        }
        this._responders.push({
            res: e,
            ids: o
        })
    }, e.prototype.unregistResponser = function(e) {
        for (var t = 0, o = this._responders; t < o.length; t++) {
            var n = o[t];
            if (n.res == e) {
                for (var a = n.ids, r = 0, i = a; r < i.length; r++) {
                    var s = i[r];
                    this.emiter.rm(s.id, s.name)
                }
                this._responders.splice(this._responders.indexOf(n), 1);
                break
            }
        }
    }, e.prototype.registCommand = function(e, t) {
        if (this._commands[e]) throw "cmd has been registed already!!!";
        var o = this.emiter.on(e, function(o) {
            (new t).excute(o, e)
        });
        this._commands[e] = o
    }, e.prototype.unregistCommand = function(e) {
        var t = this._commands[e];
        t && this.emiter.rm(t, e)
    }, e.prototype.notify = function(e, t) {
        return this.emiter.emit(e, t)
    }, e.prototype.dispose = function() {
        this.emiter.rmall(), this._responders.length = 0
    }, e
}();
__reflect(Facade.prototype, "Facade"), egret.Bitmap.prototype.pos = function(e, t, o, n) {
    this.x = e, this.y = t, this.width = o, this.height = n, this.anchorOffsetX = o / 2, this.anchorOffsetY = n / 2
};
var GameScene = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.MapType = [], t.MapState = [], t.PrizeNum = [0, 500, 1e3, 3e3, 5e3, 8e3, 1e4, 15e3, 2e4, 0, 0, 0, 0, 0, 0, 0, 0, 0], t.NumLockTT = [], t.NumLockTT_S = [], t.HeroImage = [], t.NowHeroImg = [], t.InterImage = [], t.HelpImage = [], t.BgImage = [], t.MapImage = [], t.GamebgImage = [], t.OverImage = [], t.GuaiImage = [], t.GuaiImage2 = [], t.UILabel = [], t.UIText = [], t.RankText = [], t.RankImage = [], t.RankImage2 = [], t.RoleImage = [], t.RoleNumber = [0, 300, 600, 1e3, 2e3, 2e3, 2e3, 2e3, 2e3], t.UnlockImage = [], t.Ballsize = [
            []
        ], t.bodyarr = [], t.that = t, t.egret = egret, t.Connect = new GameConnect, t.GameData = new GameMessage, t.LoadGameScore(), (void 0 == t.ball12num || void 0 == t.ball13num) && (t.ball12num = 3, t.ball13num = 3, t.SaveGameScore()), t.Connect.UpLoadScore(t.NumScoreTT), t.Connect.setCurentScore(t.NumScoreTT), t.iPhoneH = t.Connect.GetiPhoneH(), t.iPhoneW = t.Connect.GetiPhoneW(), t.PlatForm = t.Connect.GetPlatForm(), t.StageWidth = egret.MainContext.instance.stage.stageWidth, t.StageHeight = egret.MainContext.instance.stage.stageHeight, console.log("StageWidth: " + t.StageWidth), console.log("StageHeight: " + t.StageHeight), t.touchEnabled = !0, t.NowPage = 0, t.RankNow = 0, t.choose = 0, t.MoveCanNot = 0, t.NumTimeAD = 800, t.NumStyleAD = 0, t.VideoState = 0, t.NewGame = 0, t.NewLevel = 0, t.NumScore = 0, t.UnlockNum = 0, t.Ball13Ad = !1, t.Ball12Ad = !1, t.RankKill = 0;
        for (var o = t.Connect.GetUserScore(1), n = 0; n < o.length; n++) o[n] > 2e4 && t.RankKill++;
        for (var n = 0; 9 > n; n++) 1 == t.NumLockTT[n] && t.UnlockNum++;
        var a = new egret.Timer(10);
        a.addEventListener(egret.TimerEvent.TIMER, t.TimerTick, t), a.start();
        var r = new egret.Timer(100);
        return r.addEventListener(egret.TimerEvent.TIMER, t.DrawAction, t), r.start(), t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.TouchBegin, t), t.addEventListener(egret.TouchEvent.TOUCH_MOVE, t.TouchMoved, t), t.addEventListener(egret.TouchEvent.TOUCH_END, t.TouchEnded, t), 0 != t.iPhoneW && (t.x = t.iPhoneW), t.factor = 30, t.WorldStep = 30, t.CreateWorld(), t.InitGame(), t
    }
    return __extends(t, e), t.prototype.InitGame = function() {
        if (this.PutThePicture(), 0 == this.choose) this.InterImage[0].pos(320, 568, this.StageWidth, 1136), this.InterImage[1].pos(82 - this.iPhoneW, 968, 126, 132), this.InterImage[2].pos(550 + this.iPhoneW, 968, 134, 138), this.InterImage[3].pos(320, 260, 332, 202), egret.Tween.get(this.InterImage[3], {
            loop: !0
        }).to({
            scaleX: 1.05,
            scaleY: 1.05
        }, 500).to({
            scaleX: 1,
            scaleY: 1
        }, 500), this.InterImage[4].pos(320, 616, 350, 110), this.InterImage[5].pos(320, 780, 350, 110), this.crazygames.pos(320, 1090, 350, 113) /*设置CrazyGame LOGO的位置*/ ;
        else if (100 == this.choose) {
            this.BuyHero = this.NowHeroTT, this.NowPage = 0, this.InterImage[0].pos(320, 568, this.StageWidth + 40, this.StageHeight), this.InterImage[1].pos(320, 218, 205, 174), this.InterImage[2].pos(320, 212, 350, 350), this.InterImage[3].pos(320, 212, 180, 180), this.InterImage[4].pos(60 - this.iPhoneW, 60, 80, 80), this.InterImage[5].pos(320, 380, 454, 70), this.InterImage[6].pos(170, 1050, 204, 96), this.InterImage[7].pos(320 /*440*/ , 1050, 274, 96), this.InterImage[8].pos(340, 920, 120, 120);
            for (var e = 0; 9 > e; e++) {
                var t = Math.floor(e / 9),
                    o = Math.floor(e / 3) - 3 * t;
                this.RankImage[e].pos(t * this.StageWidth + 160 + 160 * Math.floor(e % 3), 508 + 160 * o, 120, 120), this.RoleImage[e].pos(t * this.StageWidth + 160 + 160 * Math.floor(e % 3), 508 + 160 * o, 80, 80), this.UnlockImage[e].pos(t * this.StageWidth + 160 + 160 * Math.floor(e % 3), 508 + 160 * o, 120, 120)
            }
            for (var e = 0; 9 > e; e++) 1 == this.NumLockTT[e] && (this.UnlockImage[e].visible = !1);
            this.InterImage[8].pos(this.RankImage[this.NowHeroTT - 1].x, this.RankImage[this.NowHeroTT - 1].y, 120, 120), this.ScoreLabel.font = RES.getRes("numimage_fnt"), this.ScoreLabel.text = "c" + this.NumGoldTT, this.ScoreLabel.x = 120 - this.iPhoneW, this.ScoreLabel.y = 60, this.ScoreLabel.scaleX = .8, this.ScoreLabel.scaleY = .8, this.ScoreLabel.anchorOffsetX = 0, this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2, this.UILabel[0].font = RES.getRes("numimage_fnt"), this.UnlockNum < 9 ? this.UILabel[0].text = "" + this.RoleNumber[this.UnlockNum] : this.UILabel[0].text = "2000", this.UILabel[0].x = 240 /*360*/ , this.UILabel[0].y = 1066, this.UILabel[0].scaleX = .5, this.UILabel[0].scaleY = .5, this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2, this.NumGoldTT >= this.RoleNumber[this.UnlockNum] && (this.InterImage[7].texture = RES.getRes("shopbtn3_png")), egret.Tween.get(this.InterImage[2], {
                loop: !0
            }).to({
                rotation: 360
            }, 5e3), egret.Tween.get(this.InterImage[6], {
                loop: !0
            }).to({
                scaleX: 1.05,
                scaleY: 1.05
            }, 400).to({
                scaleX: 1,
                scaleY: 1
            }, 300).to({
                scaleX: 1.05,
                scaleY: 1.05
            }, 400).to({
                scaleX: 1,
                scaleY: 1
            }, 300).to({}, 2e3)
        } else if (1 == this.choose) {
            this.GameState = 0, this.RandHero = -1, this.TouchNowHero = -1, this.HeroImage = [], this.NowHeroImg = [
                []
            ], this.GamebgImage[0].pos(320, 568, this.StageWidth, 1136), this.GamebgImage[1].pos(320, 606, 500, 600), this.GamebgImage[1].alpha = .9, this.GamebgImage[2].pos(320, 600, 10, 530), this.HelpImage[0].pos(320, 568, 140, 180), this.HelpImage[0].alpha = 0, 1 == this.NumGateTT ? this.HelpImage[0].visible = !0 : this.HelpImage[0].visible = !1, egret.Tween.get(this.HelpImage[0], {
                loop: !0
            }).to({
                alpha: 1
            }, 300).to({
                x: 470
            }, 600).to({
                x: 170
            }, 1200).to({
                x: 320
            }, 600).to({
                alpha: 0
            }, 300);
            for (var n = Math.ceil(this.StageHeight / 128) + 2, a = Math.ceil(this.StageWidth / 128) + 2, e = 0; n > e; e++)
                for (var r = 0; a > r; r++) {
                    var i = this.BgImage.length;
                    this.BgImage[i] = new egret.Bitmap(RES.getRes("hero" + this.NowHeroTT + "1_png")), this.BgLayer.addChild(this.BgImage[i]), this.BgImage[i].pos(64 + 128 * r - this.iPhoneW, 64 + 128 * e, 129, 129)
                }
            this.GamebgImage[3].pos(320, 140, 318, 34), this.GamebgImage[4].pos(320, 140, 318, 34), this.GamebgImage[4].rotation = 180, this.GamebgImage[5].pos(122, 140, 91, 95), this.GamebgImage[6].pos(516, 140, 91, 95), this.GamebgImage[7].pos(320, 188, 200, 40), this.GamebgImage[8].pos(216, 250, 60, 19), this.GamebgImage[9].pos(320, 250, 130, 28), this.GamebgImage[10].pos(540, 250, 50, 50), this.GamebgImage[11].pos(130, 1e3, 169, 148), this.GamebgImage[12].pos(130, 1e3, 169, 148), this.GamebgImage[13].pos(516, 1e3, 166, 148), this.GamebgImage[14].pos(516, 1e3, 166, 148), this.GamebgImage[15].pos(60 - this.iPhoneW, 60, 80, 80), this.GamebgImage[15].scaleX = .8, this.GamebgImage[15].scaleY = .8, this.UILabel[1].font = RES.getRes("numimage_fnt"), this.UILabel[1].text = "" + this.NumGateTT, this.UILabel[1].scaleX = .8, this.UILabel[1].scaleY = .8, this.UILabel[1].x = 122, this.UILabel[1].y = 138, this.UILabel[1].anchorOffsetY = this.UILabel[1].height / 2, this.UILabel[1].anchorOffsetX = this.UILabel[1].width / 2, this.UILabel[2].font = RES.getRes("numimage_fnt"), this.UILabel[2].text = "" + (this.NumGateTT + 1), this.UILabel[2].scaleX = .8, this.UILabel[2].scaleY = .8, this.UILabel[2].x = 516, this.UILabel[2].y = 138, this.UILabel[2].anchorOffsetY = this.UILabel[2].height / 2, this.UILabel[2].anchorOffsetX = this.UILabel[2].width / 2, this.UIText[0] = new egret.TextField, this.addChild(this.UIText[0]), this.UIText[0].textColor = 0, this.UIText[0].text = "0", this.UIText[0].bold = !1, this.UIText[0].size = 34, this.UIText[0].anchorOffsetX = this.UIText[0].width / 2, this.UIText[0].anchorOffsetY = this.UIText[0].height / 2, this.UIText[0].x = 320, this.UIText[0].y = 188, this.UIText[1] = new egret.TextField, this.addChild(this.UIText[1]), this.UIText[1].textColor = 16777215, this.UIText[1].text = "0", this.UIText[1].size = 20, this.UIText[1].bold = !1, this.UIText[1].anchorOffsetX = this.UIText[1].width / 2, this.UIText[1].anchorOffsetY = this.UIText[1].height / 2, this.UIText[1].x = 320, this.UIText[1].y = 250, this.UIText[2] = new egret.TextField, this.addChild(this.UIText[2]), this.UIText[2].textColor = 0, this.UIText[2].text = "" + this.ball12num, this.UIText[2].size = 34, this.UIText[2].bold = !1, this.UIText[2].anchorOffsetX = this.UIText[2].width / 2, this.UIText[2].anchorOffsetY = this.UIText[2].height / 2, this.UIText[2].x = 182, this.UIText[2].y = 1040, this.UIText[3] = new egret.TextField, this.addChild(this.UIText[3]), this.UIText[3].textColor = 0, this.UIText[3].text = "" + this.ball13num, this.UIText[3].size = 34, this.UIText[3].bold = !1, this.UIText[3].anchorOffsetX = this.UIText[3].width / 2, this.UIText[3].anchorOffsetY = this.UIText[3].height / 2, this.UIText[3].x = 464, this.UIText[3].y = 1040, this.Testball1213(), this.LoadGame(), null != this.Soundbg && this.Soundbg.stop()
        }
    }, t.prototype.LoadResource = function() {
        if (0 == this.choose) {
            this.InterImage[0] = new egret.Bitmap(RES.getRes("mapbg_png")), this.InterImage[1] = new egret.Bitmap(RES.getRes("shop_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("rank_png")), this.InterImage[3] = new egret.Bitmap(RES.getRes("title1_png")), this.InterImage[4] = new egret.Bitmap(RES.getRes("title2_png")), this.InterImage[5] = new egret.Bitmap(RES.getRes("title3_png"));

            this.crazygames = new egret.Bitmap(RES.getRes("crazygames_png"));

            /*禁止Rank按钮*/
            this.InterImage[2].visible = false;
            /*禁止PlayWithFriend按钮*/
            this.InterImage[4].visible = false;

        } else if (100 == this.choose) {
            this.MapLayer = new egret.DisplayObjectContainer, this.RankLayer = new egret.DisplayObjectContainer, this.InterImage[0] = new egret.Bitmap(RES.getRes("shopbg_png")), this.InterImage[1] = new egret.Bitmap(RES.getRes("shoptong_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("shoplight_png")), this.InterImage[3] = new egret.Bitmap(RES.getRes("hero" + this.NowHeroTT + "1_png")), this.InterImage[4] = new egret.Bitmap(RES.getRes("shopbtn1_png")), this.InterImage[5] = new egret.Bitmap(RES.getRes("shoptitle_png")), this.InterImage[6] = new egret.Bitmap(RES.getRes("shopbtn2_png")), this.InterImage[7] = new egret.Bitmap(RES.getRes("shopbtn4_png")), this.InterImage[8] = new egret.Bitmap(RES.getRes("shopselect_png"));
            for (var e = 0; 9 > e; e++) this.RankImage[e] = new egret.Bitmap(RES.getRes("herobg_png")), this.RoleImage[e] = new egret.Bitmap(RES.getRes("hero" + (e + 1) + "1_png")), this.UnlockImage[e] = new egret.Bitmap(RES.getRes("herounlock_png"));
            this.ScoreLabel = new egret.BitmapText, this.UILabel[0] = new egret.BitmapText;

            /*禁止广告按钮*/
            this.InterImage[6].visible = false;

        } else if (1 == this.choose) {
            this.MapLayer = new egret.DisplayObjectContainer, this.BgLayer = new egret.DisplayObjectContainer, this.GameBgLayer = new egret.DisplayObjectContainer, this.HeroLayer = new egret.DisplayObjectContainer, this.HelpLayer = new egret.DisplayObjectContainer;
            for (var e = 0; 3 > e; e++) this.UILabel[e] = new egret.BitmapText;
            this.ScoreLabel = new egret.BitmapText, this.GamebgImage[0] = new egret.Bitmap(RES.getRes("mapbg_png")), this.GamebgImage[0].visible = !1, this.GamebgImage[1] = new egret.Bitmap(RES.getRes("border_png")), this.GamebgImage[2] = new egret.Bitmap(RES.getRes("gamehelp2_png")), this.GamebgImage[3] = new egret.Bitmap(RES.getRes("mapui7_png")), this.GamebgImage[4] = new egret.Bitmap(RES.getRes("mapui6_png")), this.GamebgImage[5] = new egret.Bitmap(RES.getRes("mapui1_png")), this.GamebgImage[6] = new egret.Bitmap(RES.getRes("mapui2_png")), this.GamebgImage[7] = new egret.Bitmap(RES.getRes("mapui3_png")), this.GamebgImage[8] = new egret.Bitmap(RES.getRes("mapui4_png")), this.GamebgImage[9] = new egret.Bitmap(RES.getRes("mapui5_png")), this.GamebgImage[10] = new egret.Bitmap(RES.getRes("mapui8_png")), this.GamebgImage[11] = new egret.Bitmap(RES.getRes("gamebtn1_png")), this.GamebgImage[12] = new egret.Bitmap(RES.getRes("gamebtn2_png")), this.GamebgImage[13] = new egret.Bitmap(RES.getRes("gamebtn3_png")), this.GamebgImage[14] = new egret.Bitmap(RES.getRes("gamebtn4_png")), this.GamebgImage[15] = new egret.Bitmap(RES.getRes("shopbtn1_png")), this.BgImage = [], this.HelpImage[0] = new egret.Bitmap(RES.getRes("gamehelp1_png"));

            this.GamebgImage[13].visible = false;
        }
    }, t.prototype.PutThePicture = function() {
        if (this.LoadResource(), 0 == this.choose) {
            for (var e = 0; 6 > e; e++) this.addChild(this.InterImage[e]);
            this.addChild(this.crazygames); /*添加CrazyGame LOGO到Sence*/
        } else if (100 == this.choose) {
            this.addChild(this.MapLayer);
            for (var e = 0; 8 > e; e++) this.MapLayer.addChild(this.InterImage[e]);
            this.MapLayer.addChild(this.InterImage[8]), this.MapLayer.addChild(this.RankLayer);
            for (var e = 0; 9 > e; e++) this.RankLayer.addChild(this.RankImage[e]), this.RankLayer.addChild(this.RoleImage[e]), this.RankLayer.addChild(this.UnlockImage[e]);
            this.RankLayer.addChild(this.InterImage[8]), this.MapLayer.addChild(this.ScoreLabel), this.MapLayer.addChild(this.UILabel[0])
        } else if (1 == this.choose) {
            this.addChild(this.MapLayer), this.MapLayer.addChild(this.BgLayer), this.MapLayer.addChild(this.GameBgLayer), this.MapLayer.addChild(this.HeroLayer), this.MapLayer.addChild(this.HelpLayer);
            for (var e = 0; 16 > e; e++) this.GameBgLayer.addChild(this.GamebgImage[e]);
            for (var e = 0; 1 > e; e++) this.HelpLayer.addChild(this.HelpImage[e]);
            for (var e = 0; 3 > e; e++) this.addChild(this.UILabel[e])
        }
    }, t.prototype.ReleaseGame = function() {
        if (0 == this.choose);
        else if (1 == this.choose) {
            this.WorldState = 1;
            for (var e = this.world.GetBodyList(); e; e = e.GetNext()) e.SetUserData(null), this.world.DestroyBody(e)
        }
        for (var t = egret.setTimeout(function() {}, this, 0), o = 0; t >= o; o++) egret.clearTimeout(o);
        egret.Tween.removeAllTweens(), this.removeChildren(), this.InterImage = [], this.OverImage = [], this.GuaiImage = []
    }, t.prototype.TimerTick = function() {
        0 == this.choose || 100 == this.choose || 1 == this.choose && (-1 == this.GameState || (0 == this.GameState ? this.DrawHero() : 1 == this.GameState ? this.DrawHero() : 2 == this.GameState && this.DrawHero()))
    }, t.prototype.DrawAction = function() {
        0 == this.choose || 1 == this.choose, this.CheckADVideo()
    }, t.prototype.PlayGame = function() {
        this.TouchNow = 1, this.GameState = 0
    }, t.prototype.LoadGame = function() {
        this.SetTargetScore(1);
        var e = this.NowGateScore / this.NowGateTargetScore;
        e > 1 && (e = 1), this.GamebgImage[4].width = 318 - 318 * e, this.Isdrop = !0, this.Ballstarty = 354, this.Ballsize = [
            [56, 20, 28],
            [64, 24, 30],
            [76, 23, 30],
            [90, 56, 40],
            [104, 60, 40],
            [124, 90, 44],
            [140, 100, 50],
            [160, 88, 38],
            [180, 106, 50],
            [200, 140, 50],
            [228, 170, 66],
            [260, 200, 76],
            [82, 20, 28],
            [100, 20, 28]
        ], this.Balloffset = [
            [116, 528],
            [116, 524],
            [116, 524],
            [120, 520]
        ], this.CreateBorder(320, 606, 0), this.RandHero = Math.floor(3 * Math.random()), this.Createheroimg(1), this.CreateDebug(), this.TestBody = [];
        for (var t = 0; 5 > t; t++) this.TestBody[t] = new egret.Bitmap(RES.getRes("interbg_png")), this.GameBgLayer.addChild(this.TestBody[t]), this.TestBody[t].name = "0", this.TestBody[t].visible = !1;
        this.TestBody[0].pos(120, 390, 80, 2), this.TestBody[1].pos(220, 390, 80, 2), this.TestBody[2].pos(320, 390, 80, 2), this.TestBody[3].pos(420, 390, 80, 2), this.TestBody[4].pos(520, 390, 80, 2)
    }, t.prototype.DrawHero = function() {
        for (var e = this, t = 0, o = [0, 0, 0, 0, 0], n = 0; n < this.HeroImage.length; n++)
            if (-1 != this.HeroImage[n][0]) {
                for (var a = 1; 3 > a; a++) this.HeroImage[n][a].x = this.HeroImage[n][0].x, this.HeroImage[n][a].y = this.HeroImage[n][0].y, this.HeroImage[n][a].rotation = this.HeroImage[n][0].rotation;
                if (this.HeroImage[n][3] && 110 == this.HeroImage[n][3].id && this.HeroImage[n][3].SetLinearVelocity(new Box2D.Common.Math.b2Vec2(0, 0)), this.HeroImage[n][0].y < 550)
                    for (var a = 0; a < this.TestBody.length; a++) this.ImageInImage(this.HeroImage[n][0], this.TestBody[a]) && o[a]++
            }
        for (var n = 0; n < o.length; n++) 0 != o[n] && t++;
        t >= 5 ? this.Failtimer || (2 == this.GameState ? (egret.clearTimeout(this.Failtimer), this.Failtimer = null) : this.Failtimer = egret.setTimeout(function() {
            e.ShowFail()
        }, this, 2e3)) : this.Failtimer && (egret.clearTimeout(this.Failtimer), this.Failtimer = null), this.GamebgImage[2] && this.NowHeroImg[0][0] && (this.NowHeroImg[0][1].visible ? (this.GamebgImage[2].x = this.NowHeroImg[0][1].x, this.GamebgImage[2].visible = !0) : this.GamebgImage[2].visible = !1)
    }, t.prototype.Createheroimg = function(e, t, o, n, a, r) {
        if (1 == e) {
            var i = this.HeroLayer.numChildren;
            if (3 != this.NowHeroImg[0].length) {
                var s = new egret.Bitmap(RES.getRes("herocheck_png")),
                    h = new egret.Bitmap(RES.getRes("ball" + (this.RandHero + 1) + "1_png")),
                    c = new egret.Bitmap(RES.getRes("ball" + (this.RandHero + 1) + "2_png"));
                this.HeroLayer.addChild(s), this.HeroLayer.addChild(h), this.HeroLayer.addChild(c), s.pos(320, this.Ballstarty, this.Ballsize[this.RandHero][0], this.Ballsize[this.RandHero][0]), s.visible = !1, s.name = this.RandHero + "", h.pos(320, this.Ballstarty, this.Ballsize[this.RandHero][0], this.Ballsize[this.RandHero][0]), c.pos(320, this.Ballstarty, this.Ballsize[this.RandHero][1], this.Ballsize[this.RandHero][2]), egret.Tween.get(h).to({
                    scaleX: 1.4,
                    scaleY: 1.4
                }, 100).to({
                    scaleX: .7,
                    scaleY: .7
                }, 100).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 100).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100), egret.Tween.get(c).to({
                    scaleX: 1.3,
                    scaleY: 1.3
                }, 100).to({
                    scaleX: .7,
                    scaleY: .7
                }, 100).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 100).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100), this.NowHeroImg = [], this.NowHeroImg.push([s, h, c]);
                var l = RES.getRes("soundblock_mp3");
                l.play(0, 1)
            } else {
                this.NowHeroImg[0][0].texture = RES.getRes("herocheck_png"), this.NowHeroImg[0][0].name = this.RandHero + "", this.NowHeroImg[0][1].texture = RES.getRes("ball" + (this.RandHero + 1) + "1_png"), this.NowHeroImg[0][2].texture = RES.getRes("ball" + (this.RandHero + 1) + "2_png"), this.HeroLayer.setChildIndex(this.NowHeroImg[0][1], i), this.HeroLayer.setChildIndex(this.NowHeroImg[0][2], i + 1), this.NowHeroImg[0][0].pos(320, this.Ballstarty, this.Ballsize[this.RandHero][0], this.Ballsize[this.RandHero][0]), this.NowHeroImg[0][0].visible = !1, this.NowHeroImg[0][1].pos(320, this.Ballstarty, this.Ballsize[this.RandHero][0], this.Ballsize[this.RandHero][0]), this.NowHeroImg[0][2].pos(320, this.Ballstarty, this.Ballsize[this.RandHero][1], this.Ballsize[this.RandHero][2]);
                for (var m = 1; 3 > m; m++) this.NowHeroImg[0][m].visible = !0;
                egret.Tween.get(this.NowHeroImg[0][1]).to({
                    scaleX: 1.4,
                    scaleY: 1.4
                }, 100).to({
                    scaleX: .7,
                    scaleY: .7
                }, 100).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 100).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100), egret.Tween.get(this.NowHeroImg[0][2]).to({
                    scaleX: 1.3,
                    scaleY: 1.3
                }, 100).to({
                    scaleX: .7,
                    scaleY: .7
                }, 100).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 100).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100);
                var l = RES.getRes("soundblock_mp3");
                l.play(0, 1)
            }
        } else if (2 == e) {
            for (var m = 0; 3 > m; m++) this.NowHeroImg[0][m].visible = !1, this.NowHeroImg[0][m].x = 320, this.NowHeroImg[0][m].y = this.Ballstarty;
            var s = new egret.Bitmap(RES.getRes("herocheck_png")),
                h = new egret.Bitmap(RES.getRes("ball" + (this.RandHero + 1) + "1_png")),
                c = new egret.Bitmap(RES.getRes("ball" + (this.RandHero + 1) + "2_png"));
            this.HeroLayer.addChild(s), this.HeroLayer.addChild(h), h.name = "" + this.RandHero, this.HeroLayer.addChild(c), s.pos(t, this.Ballstarty, this.Ballsize[this.RandHero][0], this.Ballsize[this.RandHero][0]), s.visible = !1, h.pos(t, this.Ballstarty, this.Ballsize[this.RandHero][0], this.Ballsize[this.RandHero][0]), c.pos(t, this.Ballstarty, this.Ballsize[this.RandHero][1], this.Ballsize[this.RandHero][2]), this.HeroImage.push([s, h, c]), this.NowHeroindex = this.HeroImage.length - 1
        } else if (3 == e) {
            n.name = r + "", this.HeroImage[r][0].texture = RES.getRes("herocheck_png"), this.HeroImage[r][1].texture = RES.getRes("ball" + (a + 1) + "1_png"), this.HeroImage[r][1].name = "" + a, this.HeroImage[r][2].texture = RES.getRes("ball" + (a + 1) + "2_png"), this.HeroImage[r][0].pos(t, o, this.Ballsize[a][0], this.Ballsize[a][0]), this.HeroImage[r][0].visible = !1, this.HeroImage[r][1].pos(t, o, this.Ballsize[a][0], this.Ballsize[a][0]), this.HeroImage[r][2].pos(t, o, this.Ballsize[a][1], this.Ballsize[a][2]);
            var l = RES.getRes("soundblock_mp3");
            l.play(0, 1)
        }
    }, t.prototype.drawRect = function(e, t, o, n) {
        var a = new egret.Shape;
        this.addChild(a), a.graphics.beginFill(65280, 1), a.graphics.lineStyle(0, 65280), a.graphics.drawRect(e - o / 2, t - n / 2, o, n), a.graphics.endFill()
    }, t.prototype.SetTargetScore = function(e) {
        1 == e ? (this.NowScore = 0, 1 == this.NumGateTT ? (this.TargetScore = 40, this.NowGateTargetScore = this.TargetScore - 0) : 2 == this.NumGateTT ? (this.TargetScore = this.NumScoreTT + 50, this.NowGateTargetScore = this.TargetScore - 40) : 3 == this.NumGateTT ? (this.TargetScore = this.NumScoreTT + 70, this.NowGateTargetScore = this.TargetScore - 90) : 4 == this.NumGateTT ? (this.TargetScore = this.NumScoreTT + 90, this.NowGateTargetScore = this.TargetScore - 160) : (this.TargetScore = this.NumScoreTT + 100 * (this.NumGateTT - 4), this.NowGateTargetScore = 100), this.NowGateScore = 0) : 2 == e ? (1 == this.NumGateTT ? this.TargetScore = this.NowScore + 40 : 2 == this.NumGateTT ? this.TargetScore = this.NowScore + 50 : 3 == this.NumGateTT ? this.TargetScore = this.NowScore + 70 : 4 == this.NumGateTT ? this.TargetScore = this.NowScore + 90 : this.TargetScore = this.NowScore + 100, this.NowGateScore = 0, this.NowGateTargetScore = this.TargetScore - this.NowScore, this.UIText[0].text = "" + this.NowScore, this.UIText[0].anchorOffsetX = this.UIText[0].width / 2, this.UILabel[1].text = "" + this.NumGateTT, this.UILabel[2].text = "" + (this.NumGateTT + 1), this.UILabel[1].anchorOffsetX = this.UILabel[1].width / 2, this.UILabel[2].anchorOffsetX = this.UILabel[2].width / 2, this.GamebgImage[4].width = 318) : (this.NowScore > this.NumScoreTT && (this.NumScoreTT = this.NowScore, this.SaveGameScore(), this.Connect.UpLoadScore(this.NumScoreTT), this.Connect.setCurentScore(this.NumScoreTT)), this.NowScore = 0, this.NowGateScore = 0, this.UIText[0].text = "" + this.NowScore, this.UIText[0].anchorOffsetX = this.UIText[0].width / 2, this.GamebgImage[4].width = 318), this.UIText[1].text = "" + this.NumScoreTT, this.UIText[1].anchorOffsetX = this.UIText[1].width / 2
    }, t.prototype.ClearBall = function(e) {
        for (var t = this, o = 0; o < this.HeroImage.length; o++)
            if (-1 != this.HeroImage[o][0])
                if (e) {
                    if (this.HeroImage[o][3].id < 4) {
                        for (var n = 0; 3 > n; n++) this.HeroImage[o][3].SetUserData(null), this.world.DestroyBody(this.HeroImage[o][3]),
                            function(e, o) {
                                t.egret.Tween.get(t.HeroImage[e][o]).to({
                                    scaleX: 1.5,
                                    scaleY: 1.5
                                }, 60).to({
                                    scaleX: .7,
                                    scaleY: .7
                                }, 60).to({
                                    scaleX: 1.2,
                                    scaleY: 1.2
                                }, 60).to({
                                    scaleX: 1,
                                    scaleY: 1
                                }, 60).call(function(n) {
                                    -1 != t.HeroImage[e][o] && (t.HeroLayer.removeChild(t.HeroImage[e][o]), t.HeroImage[e][o] = -1)
                                })
                            }(o, n);
                        var a = new particle.GravityParticleSystem(RES.getRes("texiaobomb_png"), RES.getRes("texiaobomb_json"));
                        this.HeroLayer.addChildAt(a, 0), a.emitterX = this.HeroImage[o][0].x, a.emitterY = this.HeroImage[o][0].y, a.start(), a.emissionTime = 100
                    }
                } else {
                    for (var n = 1; 3 > n; n++) this.HeroLayer.removeChild(this.HeroImage[o][n]), this.HeroImage[o][n] = -1;
                    this.HeroImage[o][3].SetUserData(null), this.world.DestroyBody(this.HeroImage[o][3])
                }
        e || (this.HeroImage = [])
    }, t.prototype.PushBall = function() {
        for (var e = Math.floor(40 * Math.random()), t = 0; t < this.HeroImage.length; t++)
            if (-1 != this.HeroImage[t][0]) {
                var o = new Box2D.Common.Math.b2Vec2(e, -400),
                    n = this.HeroImage[t][3].GetPosition();
                this.HeroImage[t][3].ApplyImpulse(o, n)
            }
    }, t.prototype.cc = function(e, t, o) {
        var n = new egret.Shape;
        o.addChild(n), n.x = e, n.y = t, n.graphics.lineStyle(10, 65280), n.graphics.beginFill(16711680, 1), n.graphics.drawCircle(0, 0, 4), n.graphics.endFill()
    }, t.prototype.lizi = function(e, t) {
        var o = new particle.GravityParticleSystem(RES.getRes("texiaobomb_png"), RES.getRes("texiaobomb_json"));
        this.HeroLayer.addChildAt(o, this.HeroLayer.numChildren - 3), o.emitterX = e, o.emitterY = t, o.start(), o.emissionTime = 100
    }, t.prototype.Testball1213 = function() {
        0 == this.ball12num ? ( /*this.GamebgImage[11].visible = !0,*/ this.GamebgImage[12].visible = !1, this.UIText[2].visible = !1) : (this.GamebgImage[11].visible = !1, this.GamebgImage[12].visible = !0, this.UIText[2].text = "" + this.ball12num, this.UIText[2].visible = !0, this.UIText[2].anchorOffsetX = this.UIText[2].width / 2), 0 == this.ball13num ? ( /*this.GamebgImage[13].visible = !0,*/ this.GamebgImage[14].visible = !1, this.UIText[3].visible = !1) : (this.GamebgImage[13].visible = !1, this.GamebgImage[14].visible = !0, this.UIText[3].text = "" + this.ball13num, this.UIText[3].visible = !0, this.UIText[3].anchorOffsetX = this.UIText[3].width / 2)
    }, t.prototype.MoveOrNot = function() {
        this.ReleaseGame(), this.choose = 1, this.InitGame()
    }, t.prototype.EndFail = function() {
        for (var e = 0; 4 > e; e++) this.removeChild(this.OverImage[e]);
        this.removeChild(this.UILabel[1])
    }, t.prototype.ShowFail = function() {
        if (1 != this.GameState && 2 != this.GameState) {
            this.MoveCanNot = 1, this.GameState = 1, this.NewGame++, this.NowScore = 0, this.OverImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), this.OverImage[1] = new egret.Bitmap(RES.getRes("overtitle3_png")), this.OverImage[2] = new egret.Bitmap(RES.getRes("overtitle4_png")), this.OverImage[3] = new egret.Bitmap(RES.getRes("overbtn5_png")), this.OverImage[4] = new egret.Bitmap(RES.getRes("overbtn6_png")), this.OverImage[5] = new egret.Bitmap(RES.getRes("rankbtn4_png")), this.OverImage[6] = new egret.Bitmap(RES.getRes("moregame" + (this.NewGame % 3 + 1) + "_png")), this.OverImage[6].visible = !1;
            for (var e = 0; 7 > e; e++) this.addChild(this.OverImage[e]);
            this.OverImage[0].pos(320, 568, this.StageWidth + 40, this.StageHeight + 40), this.OverImage[1].pos(320, 360, this.StageWidth + 40, 220), this.OverImage[2].pos(320, 356, 505, 84), this.OverImage[3].pos(320, 928, 350, 110), this.OverImage[4].pos(320, 786, 350, 110), this.OverImage[5].pos(60 - this.iPhoneW, 60, 90, 98), this.OverImage[6].pos(540 + this.iPhoneW, 530, 140, 180), 0 == this.PlatForm && (this.OverImage[6].visible = !0, egret.Tween.get(this.OverImage[6], {
                loop: !0
            }).to({
                scaleX: .95,
                scaleY: .95
            }, 500).to({
                scaleX: 1,
                scaleY: 1
            }, 500)), egret.Tween.get(this.OverImage[2], {
                loop: !0
            }).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 800).to({
                scaleX: 1,
                scaleY: 1
            }, 600), this.OverImage[1].alpha = 0, this.OverImage[2].alpha = 0, this.OverImage[3].alpha = 0, this.OverImage[4].alpha = 0, egret.Tween.get(this.OverImage[1]).to({
                alpha: 1
            }, 400), egret.Tween.get(this.OverImage[2]).to({
                alpha: 1
            }, 400);
            for (var e = 3; 5 > e; e++) egret.Tween.get(this.OverImage[e]).wait(400).to({
                alpha: 1
            }, 500);
            this.NowScore > this.NumScoreTT && (this.NumScoreTT = this.NowScore, this.SaveGameScore(), this.Connect.UpLoadScore(this.NumScoreTT), this.Connect.setCurentScore(this.NumScoreTT)), this.MoveCanNot = 0, this.ShowADNow(1);
            var t = RES.getRes("soundfail_mp3");
            t.play(0, 1)
        }
    }, t.prototype.ShowResult = function() {
        var e = this;
        if (2 != this.GameState) {
            this.GameState = 2, this.NumGateTT % 5 == 0 && (this.ball12num++, this.ball13num++, this.Testball1213()), this.NumGateTT++, this.NewGame++, this.OverImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), this.OverImage[1] = new egret.Bitmap(RES.getRes("overtitle1_png")), this.OverImage[2] = new egret.Bitmap(RES.getRes("overtitle2_png")), this.OverImage[3] = new egret.Bitmap(RES.getRes("overbtn4_png")), this.OverImage[4] = new egret.Bitmap(RES.getRes("overbtn5_png")), this.OverImage[5] = new egret.Bitmap(RES.getRes("rankbtn4_png")), this.OverImage[6] = new egret.Bitmap(RES.getRes("moregame" + (this.NewGame % 3 + 1) + "_png"));
            for (var t = 0; 7 > t; t++) this.addChild(this.OverImage[t]);
            this.OverImage[0].pos(320, 568, this.StageWidth + 40, this.StageHeight + 40), this.OverImage[1].pos(320, 360, this.StageWidth + 40, 220), this.OverImage[2].pos(320, 356, 505, 84), this.OverImage[3].pos(320, 786, 350, 110), this.OverImage[3].visible = !1, this.OverImage[4].pos(320, 928, 350, 110), this.OverImage[5].pos(60 - this.iPhoneW, 60, 90, 98), this.OverImage[6].pos(540 + this.iPhoneW, 530, 140, 180), this.OverImage[6].visible = !1, egret.Tween.get(this.OverImage[2], {
                loop: !0
            }).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 800).to({
                scaleX: 1,
                scaleY: 1
            }, 600), egret.Tween.get(this.OverImage[1]).to({
                alpha: 1
            }, 400), egret.Tween.get(this.OverImage[2]).to({
                alpha: 1
            }, 400);
            for (var t = 3; 5 > t; t++) egret.Tween.get(this.OverImage[t]).wait(400).to({
                alpha: 1
            }, 500);
            0 == this.PlatForm && (this.OverImage[6].visible = !0, egret.Tween.get(this.OverImage[6], {
                loop: !0
            }).to({
                scaleX: .95,
                scaleY: .95
            }, 500).to({
                scaleX: 1,
                scaleY: 1
            }, 500)), this.UILabel[3] = new egret.BitmapText, this.addChild(this.UILabel[3]), this.UILabel[3].font = RES.getRes("numimage_fnt"), this.UILabel[3].text = "c+" + this.NowGateScore, this.UILabel[3].scaleX = 1.2, this.UILabel[3].scaleY = 1.2, this.UILabel[3].x = 320, this.UILabel[3].y = 620, this.UILabel[3].anchorOffsetY = this.UILabel[3].height / 2, this.UILabel[3].anchorOffsetX = this.UILabel[3].width / 2, this.UILabel[4] = new egret.BitmapText, this.addChild(this.UILabel[4]), this.UILabel[4].font = RES.getRes("numimage_fnt"), this.UILabel[4].text = "c" + this.NumGoldTT, this.UILabel[4].scaleX = .8, this.UILabel[4].scaleY = .8, this.UILabel[4].x = 126 - this.iPhoneW, this.UILabel[4].y = 58, this.UILabel[4].anchorOffsetY = this.UILabel[4].height / 2, this.NumGoldTT += this.NowGateScore, this.UILabel[0].text = "c" + this.NumGoldTT, egret.setTimeout(function() {
                e.NowScore > e.NumScoreTT && (e.NumScoreTT = e.NowScore, e.SaveGameScore(), e.Connect.UpLoadScore(e.NumScoreTT), e.Connect.setCurentScore(e.NumScoreTT)), e.MoveCanNot = 0
            }, this, 600), this.SaveGameScore();
            var o = RES.getRes("soundwin_mp3");
            o.play(0, 1);

            /*禁止Rank按钮*/
            this.OverImage[5].visible = false;

            /*禁止moregames按钮*/
            this.OverImage[6].visible = false;
        }
    }, t.prototype.UnlockHero = function() {
        this.HeroArray = [];
        for (var e = 0; 9 > e; e++) 0 == this.NumLockTT[e] && this.HeroArray.push(e);
        this.RunNum = Math.randInt(15, 20), 1 == this.HeroArray.length && (this.RunNum = 1), this.TimeNum = 100, this.RoleNum = Math.randInt(0, this.HeroArray.length - 1), this.RandomHero()
    }, t.prototype.RandomHero = function() {
        if (this.InterImage[8].x = this.RankImage[this.HeroArray[this.RoleNum]].x, this.InterImage[8].y = this.RankImage[this.HeroArray[this.RoleNum]].y, this.RunNum <= 0) {
            this.UnlockNum++, this.MoveCanNot = 0, this.NumLockTT[this.HeroArray[this.RoleNum]] = 1, this.NowHeroTT = this.HeroArray[this.RoleNum] + 1, this.UnlockImage[this.HeroArray[this.RoleNum]].visible = !1, this.InterImage[3].texture = RES.getRes("hero" + this.NowHeroTT + "1_png");
            for (var e = 0; 4 > e; e++) egret.Tween.get(this.InterImage[8]).to({}, 200 * e).to({
                alpha: .2
            }, 100).to({
                alpha: 1
            }, 100);
            this.UnlockNum >= this.RoleNumber.length ? this.UILabel[0].text = "" + this.RoleNumber[this.RoleNumber.length - 1] : this.UILabel[0].text = "" + this.RoleNumber[this.UnlockNum], this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.SaveGameScore(), this.NumGoldTT >= this.RoleNumber[this.UnlockNum] && (this.InterImage[7].texture = RES.getRes("shopbtn3_png"));
            var t = RES.getRes("soundunlock_mp3");
            t.play(0, 1)
        } else {
            this.RunNum--, this.RunNum < 5 && (this.TimeNum += 50), this.RoleNum = Math.randInt(0, this.HeroArray.length - 1), egret.setTimeout(this.RandomHero, this, this.TimeNum);
            var t = RES.getRes("soundrandom_mp3");
            t.play(0, 1)
        }
    }, t.prototype.ShowRank = function() {
        this.RankNow = 1, this.RankLayer = new egret.DisplayObjectContainer, this.Scroller = new egret.ScrollView, 0 == this.choose && (this.InterImage[1].visible = !1, this.InterImage[2].visible = !1, this.InterImage[3].visible = !1, this.InterImage[4].visible = !1, this.InterImage[5].visible = !1), 1 == this.choose && (this.OverImage[1].visible = !1, this.OverImage[2].visible = !1, this.OverImage[3].visible = !1, this.OverImage[4].visible = !1), this.RankImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), 0 == this.RankNum ? this.RankImage[1] = new egret.Bitmap(RES.getRes("rankbtn2_png")) : this.RankImage[1] = new egret.Bitmap(RES.getRes("rankbtn1_png")), this.RankImage[2] = new egret.Bitmap(RES.getRes("rankbtn4_png")), this.RankImage[3] = new egret.Bitmap(RES.getRes("rankme_png")), this.RankImage[4] = new egret.Bitmap(RES.getRes("rankmark_png")), this.RankImage[5] = new egret.Bitmap(RES.getRes("rankbtn3_png")), this.RankImage[6] = new egret.Bitmap(RES.getRes("rankshare_png"));
        for (var e = 0; 7 > e; e++) this.addChild(this.RankImage[e]);
        this.RankLabel = new egret.TextField, this.addChild(this.RankLabel), this.RankImage[0].pos(320, 568, this.StageWidth + 20, this.StageHeight + 20), this.RankImage[1].pos(320, 160, 480, 72), this.RankImage[2].pos(126, 992, 80, 80), this.RankImage[3].pos(380, 994, 360, 80), 0 == this.RankNum ? this.RankImage[4].pos(265, 143, 18, 18) : this.RankImage[4].pos(500, 145, 18, 18), this.RankImage[5].pos(320, 568, 120, 122), this.RankImage[6].pos(320, 700, 263, 93);
        var t = [],
            o = [],
            n = [];
        0 == this.RankNum ? (t = this.Connect.GetUserName(1), o = this.Connect.GetUserImage(1), n = this.Connect.GetUserScore(1), this.RankImage[5].visible = !1, this.RankImage[6].visible = !1, this.RankKill > 0 && (t.splice(0, this.RankKill), o.splice(0, this.RankKill), n.splice(0, this.RankKill))) : (t = this.Connect.GetUserName(2), o = this.Connect.GetUserImage(2), n = this.Connect.GetUserScore(2), this.RankImage[5].visible = !1, this.RankImage[6].visible = !1, t.length < 3 && (this.RankImage[5].visible = !0, this.RankImage[6].visible = !0)), this.RankLabel.x = 540, this.RankLabel.y = 994, this.RankLabel.size = 30, this.RankLabel.textColor = 0, this.RankLabel.text = "" + this.Connect.GetMyRank(), this.RankLabel.anchorOffsetX = this.RankLabel.width, this.RankLabel.anchorOffsetY = this.RankLabel.height / 2;
        for (var a, r, i, s, h, c, l = function(e) {
                a = new egret.Bitmap(RES.getRes("rankbg_png")), m.RankLayer.addChild(a), a.pos(320, 90 * e, 480, 80), 3 > e ? (r = new egret.Bitmap(RES.getRes("rankview" + (e + 1) + "_png")), m.RankLayer.addChild(r), r.pos(115, 90 * e, 50, 50)) : (i = new egret.TextField, m.RankLayer.addChild(i), i.x = 115, i.y = 90 * e, i.text = e + 1 + "", i.size = 30, i.textColor = 0, i.anchorOffsetX = i.width / 2, i.anchorOffsetY = i.height / 2), s = new egret.Bitmap(RES.getRes("rankpeople_png")), m.RankLayer.addChild(s), s.pos(525, 90 * e, 28, 28);
                var l = new egret.Bitmap;
                m.RankLayer.addChild(l), l.pos(190, 90 * e, 66, 66), RES.getResByUrl(o[e], function(e) {
                    l.texture = e
                }, m, RES.ResourceItem.TYPE_IMAGE), h = new egret.TextField, m.RankLayer.addChild(h), h.x = 240, h.y = 90 * e, h.size = 22, h.textColor = 0, h.text = "" + t[e], h.width > 180 && (h.width = 180), h.wordWrap = !0, h.anchorOffsetY = h.height / 2, c = new egret.TextField, m.RankLayer.addChild(c), c.x = 500, c.y = 90 * e, c.size = 34, c.textColor = 0, c.text = n[e] + "", c.anchorOffsetX = c.width, c.anchorOffsetY = c.height / 2
            }, m = this, e = 0; e < t.length; e++) l(e);
        this.RankLayer.x = 0, this.RankLayer.y = 40, this.RankLayer.width = 600, this.RankLayer.height = 90 * t.length, this.Scroller.x = 0, this.Scroller.y = 216, this.Scroller.width = 640, this.Scroller.height = 710, this.Scroller.setContent(this.RankLayer), this.addChild(this.Scroller)
    }, t.prototype.EndRank = function() {
        this.RankNow = 0;
        for (var e = 0; 7 > e; e++) this.removeChild(this.RankImage[e]);
        this.removeChild(this.RankLabel), this.RankLayer.removeChildren(), this.removeChild(this.Scroller), 0 == this.choose && (this.InterImage[1].visible = !0, this.InterImage[2].visible = !0, this.InterImage[3].visible = !0, this.InterImage[4].visible = !0, this.InterImage[5].visible = !0), 1 == this.choose && (this.OverImage[1].visible = !0, this.OverImage[2].visible = !0, this.OverImage[3].visible = !0, this.OverImage[4].visible = !0)
    }, t.prototype.PreShowRankTouchBegin = function(e) {
        1 == this.RankNow && (this.PointInRect(40, 473, 45, 49, e) ? (this.SetColor(this.RankImage[2], 2), this.PlaySound("soundpress_mp3")) : this.PointInRect(27, 35, 121, 69, e) && 0 == this.RankNum ? (this.RankNum = 1, this.EndRank(), this.ShowRank(), this.PlaySound("soundpress_mp3")) : this.PointInRect(151, 35, 139, 70, e) && 1 == this.RankNum ? (this.RankNum = 0, this.EndRank(), this.ShowRank(), this.PlaySound("soundpress_mp3")) : this.PointInRect(93, 251, 192, 185, e) && 1 == this.RankImage[5].visible && (this.SetColor(this.RankImage[5], 2), this.SetColor(this.RankImage[6], 2), this.PlaySound("soundpress_mp3")))
    }, t.prototype.ShowRankToucEnd = function(e) {
        this.SetColor(this.RankImage[2], 1), this.SetColor(this.RankImage[1], 1), this.SetColor(this.RankImage[5], 1), this.SetColor(this.RankImage[6], 1), this.PointInRect(40, 473, 45, 49, e) ? this.EndRank() : this.PointInRect(39, 47, 116, 49, e) && 0 == this.RankNum || this.PointInRect(156, 48, 123, 49, e) && 1 == this.RankNum || this.PointInRect(93, 251, 192, 185, e) && 1 == this.RankImage[5].visible && (this.SetColor(this.RankImage[5], 1), this.SetColor(this.RankImage[6], 1), this.Connect.ShareGame())
    }, t.prototype.PlaySound = function(e) {
        var t = RES.getRes(e);
        t.play(0, 1)
    }, t.prototype.ShowADNow = function(e) {
        0 == e ? 1 == platform.hasRAD() ? (this.Connect.ShowADVideo(), this.VideoState = -1) : this.ShowTipView("Please try again later") : 1 == e && this.NumTimeAD >= 800 && (1 == platform.hasIAD() ? (this.NumTimeAD = 0, this.Connect.ShowADChaping()) : console.log("无插屏广告"))
    }, t.prototype.CheckADVideo = function() {
        this.NumTimeAD++, -1 == this.VideoState && (this.VideoState = this.Connect.GetADVideoState(), 0 == this.VideoState || 1 == this.VideoState && (this.NumTimeAD = 0, 100 == this.choose ? (this.NumGoldTT += 300, this.ScoreLabel.text = "c" + this.NumGoldTT, this.SaveGameScore(), egret.setTimeout(this.ShowTipView, this, 600, "You got 300 coins!"), this.UnlockNum >= 8 || this.NumGoldTT < this.RoleNumber[this.UnlockNum] ? this.InterImage[7].texture = RES.getRes("shopbtn4_png") : this.InterImage[7].texture = RES.getRes("shopbtn3_png")) : 1 == this.choose && (this.Ball12Ad && (this.ball12num += 3, this.Testball1213(), this.Ball12Ad = !1, this.WorldStep = 30, this.SaveGameScore()), this.Ball13Ad && (this.ball13num += 3, this.Testball1213(), this.Ball13Ad = !1, this.WorldStep = 30, this.SaveGameScore()))))
    }, t.prototype.CreateWorld = function() {
        var e = this,
            t = new Box2D.Common.Math.b2Vec2(0, 13.8);
        this.world = new Box2D.Dynamics.b2World(t, !0);
        var o = new Box2D.Dynamics.b2ContactListener(this);
        o.PostSolve = this.PostSolve, this.world.SetContactListener(o), egret.Ticker.getInstance().register(function(t) {
            e.world.Step(e.WorldStep / 1e3, 10, 10), e.BallDie(), e.ScaleField();
            for (var o = e.world.GetBodyList(); o; o = o.GetNext()) null != o.GetUserData() && (o.GetUserData().x = o.GetPosition().x * e.factor, o.GetUserData().y = o.GetPosition().y * e.factor, o.GetUserData().rotation = 180 * o.GetAngle() / Math.PI)
        }, this)
    }, t.prototype.BallDie = function() {
        for (var e = this, t = 0; t < this.bodyarr.length; t++) {
            this.world.DestroyBody(this.bodyarr[t][0]);
            var o = this.bodyarr[t][1],
                n = this.bodyarr[t][0];
            if (888 != n.id) {
                var a = this.bodyarr[t][2],
                    r = this.bodyarr[t][3],
                    i = this.bodyarr[t][4],
                    s = this.bodyarr[t][5];
                o.GetFixtureList().GetShape().SetRadius(this.Ballsize[a][0] / 2 / this.factor);
                var h = n.GetUserData();
                this.HeroLayer.getChildIndex(s);
                this.HeroLayer.setChildIndex(this.HeroImage[r][1], 0), this.HeroLayer.setChildIndex(this.HeroImage[r][2], 1);
                for (var c = 0; 3 > c; c++) - 1 != this.HeroImage[r][c] && ! function(t, o, n, a) {
                    e.egret.Tween.get(e.HeroImage[o][t]).to({
                        x: s.x,
                        y: s.y
                    }, 200).call(function(n) {
                        e.HeroLayer.removeChild(e.HeroImage[o][t]), e.HeroImage[o][t] = -1
                    }), egret.setTimeout(function() {
                        a && (110 == a.id || 109 == a.id) && (a.id = ~~e.HeroImage[n][1].name)
                    }, e, 150)
                }(c, r, i, o);
                this.HeroLayer.setChildIndex(this.HeroImage[i][1], this.HeroLayer.numChildren - 1), this.HeroLayer.setChildIndex(this.HeroImage[i][2], this.HeroLayer.numChildren - 2), this.lizi(this.HeroImage[i][1].x, this.HeroImage[i][1].y), this.NowScore += a, this.UIText[0].text = this.NowScore + "", this.UIText[0].anchorOffsetX = this.UIText[0].width / 2, this.NowScore > this.NumScoreTT && (this.UIText[1].text = "" + this.NowScore), this.NowGateScore += a;
                var l = this.NowGateScore / this.NowGateTargetScore;
                l > 1 && (l = 1, this.GamebgImage[4].width = 0, 1 != this.GameState && 2 != this.GameState && (this.MoveCanNot = 1, this.WorldStep = 0, this.ShowResult(), this.ShowADNow(1))), this.GamebgImage[4].width = 318 - 318 * l, this.egret.Tween.get(this.HeroImage[i][1]).to({
                    scaleX: 2,
                    scaleY: 2
                }, 130).to({
                    scaleX: .6,
                    scaleY: .6
                }, 100).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 100).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100), this.egret.Tween.get(this.HeroImage[i][2]).to({
                    scaleX: 1.6,
                    scaleY: 1.6
                }, 120).to({
                    scaleX: .7,
                    scaleY: .7
                }, 120).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 120).to({
                    scaleX: 1,
                    scaleY: 1
                }, 120);
                var m = RES.getRes("soundperfect_mp3");
                m.play(0, 1)
            } else {
                var h = this.bodyarr[t][1],
                    i = this.bodyarr[t][2];
                this.HeroLayer.setChildIndex(this.HeroImage[i][1], 0), this.HeroLayer.setChildIndex(this.HeroImage[i][2], 1);
                for (var u = function(t) {
                        return -1 == g.HeroImage[i][t] ? "continue" : void g.egret.Tween.get(g.HeroImage[i][t]).to({
                            x: h.x,
                            y: h.y,
                            alpha: 0
                        }, 100).call(function(o) {
                            e.HeroLayer.removeChild(e.HeroImage[i][t]), e.HeroImage[i][t] = -1
                        })
                    }, g = this, p = 0; 3 > p; p++) u(p)
            }
        }
        this.bodyarr = []
    }, t.prototype.CreateCircle = function(e, t, o, n) {
        t.name = n + "";
        var a = new Box2D.Dynamics.b2BodyDef;
        a.position.Set(e.x / this.factor, e.y / this.factor), a.userData = t, a.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        var r = this.world.CreateBody(a);
        this.HeroImage.length < 12 && egret.setTimeout(function() {
            r.SetLinearDamping(.8), r.SetAngularDamping(.8)
        }, this, 1e3);
        var i;
        i = new Box2D.Collision.Shapes.b2CircleShape(e.r / this.factor);
        var s = new Box2D.Dynamics.b2FixtureDef;
        s.density = 1, s.friction = .3, s.restitution = .4, s.id = this.RandHero, s.shape = i, r.CreateFixture(s);
        var h = new Box2D.Common.Math.b2Vec2(0, 20),
            c = new Box2D.Common.Math.b2Vec2(e.x / this.factor, e.y / this.factor);
        r.ApplyForce(h, c), this.HeroImage[n][3] = r;
        var l = RES.getRes("sounddrop_mp3");
        l.play(0, 1)
    }, t.prototype.CreateBorder = function(e, t, o) {
        var n = this.GameData.GetGuaiMessage(),
            a = new egret.Bitmap(RES.getRes("herocheck_png"));
        this.MapLayer.addChild(a), a.visible = !1, a.pos(e, t, a.width, a.height), a.name = "111";
        var r = new Box2D.Dynamics.b2BodyDef;
        r.type = Box2D.Dynamics.b2Body.b2_staticBody, r.position.Set(e / this.factor, t / this.factor), r.userData = a;
        var i = this.world.CreateBody(r);
        i.SetUserData;
        for (var s = 0; s < n.length; s++) {
            var h = n[s],
                c = new Box2D.Dynamics.b2FixtureDef;
            if (c.density = 2, c.friction = 20, c.restitution = .2, c.isSensor = !1, "POLYGON" == h[0])
                for (var l = h[1], m = 0; m < l.length; m++) {
                    for (var u = [], g = 0; g < l[m].length; g++) u[g] = new Box2D.Common.Math.b2Vec2, u[g].Set(l[m][g].x - 250 / this.factor, l[m][g].y - 300 / this.factor);
                    var p = new Box2D.Collision.Shapes.b2PolygonShape;
                    p.SetAsVector(u, l[m].length), c.shape = p, c.id = 111, i.CreateFixture(c)
                }
        }
    }, t.prototype.PostSolve = function(e, t) {
        var o = this.that,
            n = e.GetFixtureA().GetBody(),
            a = e.GetFixtureB().GetBody();
        if (n.id > a.id) {
            var r = n;
            n = a, a = r
        }
        if (111 != a.id && 110 != a.id && 109 != a.id && 888 != a.id && null != n.GetUserData() && null != a.GetUserData()) {
            var i = ~~n.GetUserData().name,
                s = ~~a.GetUserData().name;
            if (12 == a.id) {
                var h = n.GetUserData();
                12 == n.id ? (a.SetUserData(null), c = 4, o.HeroImage[i][1].name = "" + c, n.id = 110, o.Createheroimg(3, h.x, h.y, h, c, i), o.bodyarr.push([a, n, c, s, i, h])) : n.id < 3 && (a.SetUserData(null), c = ++n.id, o.HeroImage[i][1].name = "" + c, n.id = 110, o.Createheroimg(3, h.x, h.y, h, c, i), o.bodyarr.push([a, n, c, s, i, h]))
            } else if (13 == a.id) {
                a.SetUserData(null);
                var h = n.GetUserData();
                c = a.id, a.id = 888, o.PushBall(), o.bodyarr.push([a, h, s])
            } else if (n.id == a.id) {
                var c;
                Math.floor(10 * Math.random());
                n.SetUserData(null);
                var h = a.GetUserData();
                c = ++n.id > 11 ? 11 : n.id, o.HeroImage[s][1].name = "" + c, a.id = 109, o.Createheroimg(3, h.x, h.y, h, c, s), o.bodyarr.push([n, a, c, i, s, h])
            }
        }
    }, t.prototype.ScaleField = function() {
        for (var e = 0; e < this.HeroImage.length; e++) {
            var t = this.HeroImage[e][3];
            if (-1 != this.HeroImage[e][0] && 12 != this.HeroImage[e][3].id && 13 != this.HeroImage[e][3].id && 110 != this.HeroImage[e][3].id && 109 != this.HeroImage[e][3].id && 888 != this.HeroImage[e][3].id)
                for (var o = 0; o < this.HeroImage.length; o++)
                    if (e != o && -1 != this.HeroImage[o][0] && 12 != this.HeroImage[o][3].id && 13 != this.HeroImage[o][3].id && 110 != this.HeroImage[o][3].id && 109 != this.HeroImage[o][3].id && 888 != this.HeroImage[o][3].id) {
                        var n = this.HeroImage[o][3];
                        if (null != t.GetUserData() && null != n.GetUserData()) {
                            var a = ~~t.GetUserData().name,
                                r = ~~n.GetUserData().name;
                            if (this.HeroImage[a][1].name == this.HeroImage[r][1].name && this.BallInBall2(t.GetUserData(), this.HeroImage[o][0], n.id)) {
                                n.SetUserData(null);
                                var i = t.GetUserData(),
                                    s = ~~this.HeroImage[a][1].name,
                                    h = ++s > 11 ? 11 : s;
                                this.HeroImage[a][1].name = "" + h, t.id = 110, this.Createheroimg(3, i.x, i.y, i, h, a), this.bodyarr.push([n, t, h, r, a, i])
                            }
                        }
                    }
        }
    }, t.prototype.CreateDebug = function() {
        var e = new egret.Sprite;
        this.addChild(e), this.debug = new Box2D.Dynamics.b2DebugDraw, this.debug.SetSprite(e), this.debug.SetDrawScale(this.factor), this.debug.SetLineThickness(1), this.debug.SetAlpha(1), this.debug.SetFillAlpha(.5), this.debug.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit), this.world.SetDebugDraw(this.debug)
    }, t.prototype.CreateBlock = function(e, t, o, n) {
        var a = new egret.Bitmap(RES.getRes("interbg_png"));
        this.GameBgLayer.addChild(a), a.pos(e, t, o, n), a.visible = !0;
        var r = new Box2D.Dynamics.b2BodyDef;
        r.position = new Box2D.Common.Math.b2Vec2(e / this.factor, t / this.factor), r.type = Box2D.Dynamics.b2Body.b2_staticBody, r.userData = a;
        var i, s = this.world.CreateBody(r);
        i = Box2D.Collision.Shapes.b2PolygonShape.AsBox(a.width / 2 / this.factor, a.height / 2 / this.factor);
        var h = new Box2D.Dynamics.b2FixtureDef;
        return h.isSensor = !0, h.density = .5, h.friction = 1, h.restitution = 0, h.shape = i, h.id = 108, s.CreateFixture(h), s
    }, t.prototype.ShowGame = function(e, t) {
        0 == this.PlatForm && (this.NewGame++, this.GameImage = new egret.Bitmap(RES.getRes("moregame" + (this.NewGame % 2 + 1) + "_png")), this.addChild(this.GameImage), this.GameImage.pos(e, t, 140, 180), egret.Tween.get(this.GameImage, {
            loop: !0
        }).to({
            scaleX: .95,
            scaleY: .95
        }, 600).to({
            scaleX: 1,
            scaleY: 1
        }, 600))
    }, t.prototype.EndGame = function() {
        this.removeChild(this.GameImage)
    }, t.prototype.ShowTipView = function(e) {
        var t = new egret.Bitmap(RES.getRes("rankbg_png"));
        this.addChild(t), t.alpha = 0, t.scaleX = .3, t.scaleY = .3, t.pos(320, 500, 390, 65);
        var o = new egret.TextField;
        this.addChild(o), o.size = 28, o.x = 320, o.y = 500, o.text = e, o.bold = !0, o.textColor = 862853, o.alpha = 0, o.scaleX = .3, o.scaleY = .3, o.anchorOffsetX = o.width / 2, o.anchorOffsetY = o.height / 2, egret.Tween.get(t).to({
            scaleX: 1,
            scaleY: 1
        }, 400, egret.Ease.getBackOut(1)), egret.Tween.get(o).to({
            scaleX: 1,
            scaleY: 1
        }, 400, egret.Ease.getBackOut(1)), egret.Tween.get(t).to({
            alpha: 1
        }, 300).to({}, 800).to({
            y: t.y - 120,
            alpha: 0
        }, 500), egret.Tween.get(o).to({
            alpha: 1
        }, 300).to({}, 800).to({
            y: o.y - 120,
            alpha: 0
        }, 500);
        var n = RES.getRes("soundwarn_mp3");
        n.play(0, 1)
    }, t.prototype.PointInImage = function(e, t, o) {
        return e > o.x - o.width / 2 && e < o.x + o.width / 2 && t > o.y - o.height / 2 && t < o.y + o.height / 2 ? !0 : !1
    }, t.prototype.ImageInImage1 = function(e, t, o, n) {
        return e.x - e.width / 2 < t.x + t.width / 2 && e.x + e.width / 2 > t.x - t.width / 2 && e.y - e.height / 2 < t.y + t.height / 2 && e.y + e.height / 2 > t.y - t.height / 2 ? !0 : !1
    }, t.prototype.ImageInImage2 = function(e, t, o) {
        if (t.rotation % 90 != 0) {
            var n = Math.abs(e.x - t.x),
                a = Math.abs(e.y - t.y);
            return n * n + a * a <= t.height / 2 * t.height / 2 ? !0 : !1
        }
        return e.x - e.width / 2 < t.x + t.width / 2 && e.x + e.width / 2 > t.x - t.width / 2 && e.y - e.height / 2 < t.y + t.height / 2 && e.y + e.height / 2 > t.y - t.height / 2 ? !0 : !1
    }, t.prototype.ImageInImage = function(e, t) {
        return e.x - e.width / 2 < t.x + t.width / 2 && e.x + e.width / 2 > t.x - t.width / 2 && e.y - e.height / 2 < t.y + t.height / 2 && e.y + e.height / 2 > t.y - t.height / 2 ? !0 : !1
    }, t.prototype.BallInBall = function(e, t, o) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) < this.Ballsize[~~e.name][0] / 2 + this.Ballsize[o][0] / 2 ? !0 : !1
    }, t.prototype.BallInBall2 = function(e, t, o) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) - 4 < this.Ballsize[o][0] / 2 + this.Ballsize[o][0] / 2 ? !0 : !1
    }, t.prototype.BallInRect = function(e, t) {
        return e.x - e.width / 2 < t.x + t.width / 2 && e.x + e.width / 2 > t.x - t.width / 2 && e.y - e.height / 2 < t.y + t.height / 2 && e.y + e.height / 2 > t.y - t.height / 2 ? !0 : !1
    }, t.prototype.PointInRect = function(e, t, o, n, a) {
        return a.x > e && a.x < e + o && a.y > t && a.y < t + n ? !0 : !1
    }, t.prototype.SetColor = function(e, t) {
        var o = [];
        1 == t ? o = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0] : 2 == t && (o = [1, 0, 0, 0, -60, 0, 1, 0, 0, -60, 0, 0, 1, 0, -60, 0, 0, 0, 1, 0]);
        var n = new egret.ColorMatrixFilter(o);
        e.filters = [n]
    }, t.prototype.SaveGameScore = function() {
        var e = {
            NowHeros: this.NowHeroTT,
            NumGates: this.NumGateTT,
            NumGolds: this.NumGoldTT,
            NumScores: this.NumScoreTT,
            NumLocks: this.NumLockTT,
            Numball12: this.ball12num,
            Numball13: this.ball13num
        };
        this.Connect.setData(e)
    }, t.prototype.LoadGameScore = function() {
        var e = this.Connect.readData();
        if (console.log(e), 0 == e.NumGates || void 0 == e.NumGates) {
            console.log("Fuck"), this.NumGateTT = 1, this.NowHeroTT = 1, this.NumGoldTT = 100, this.NumLockTT[0] = 1, this.NumScoreTT = 0, this.ball12num = 3, this.ball13num = 3;
            for (var t = 1; 9 > t; t++) this.NumLockTT[t] = 0;
            this.SaveGameScore()
        } else this.NowHeroTT = e.NowHeros, this.NumGateTT = e.NumGates, this.NumGoldTT = e.NumGolds, this.NumScoreTT = e.NumScores, this.NumLockTT = e.NumLocks, this.ball12num = e.Numball12, this.ball13num = e.Numball13
    }, t.prototype.GetId = function() {
        return this.HeroImage.length < 14 ? Math.floor(3 * Math.random()) : Math.floor(4 * Math.random())
    }, t.prototype.Getrandid = function(e) {
        var t;
        return t = 40 > e ? Math.floor(9 * Math.random()) : 75 > e ? Math.floor(9 * Math.random()) + 9 : 95 > e ? Math.floor(12 * Math.random()) + 18 : Math.floor(11 * Math.random() + 30)
    }, t.prototype.TouchBegin = function(e) {
        if (!this.Touchnowid && (this.Touchnowid = e.touchPointID + "", 0 == this.MoveCanNot)) {
            this.TouchFun = "";
            var t = new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2),
                o = new egret.Point(e.stageX - this.iPhoneW, e.stageY);
            if (0 == this.choose) {
                if (1 == this.RankNow) return void this.PreShowRankTouchBegin(t);
                this.PointInRect(10 - this.iPhoneW / 2, 449, 68, 67, t) ? this.SetColor(this.InterImage[1], 2) : this.PointInRect(239 + this.iPhoneW / 2, 449, 72, 71, t) ? this.SetColor(this.InterImage[2], 2) : this.PointInRect(56, 271, 210, 70, t) ? this.SetColor(this.InterImage[4], 2) : this.PointInRect(53, 354, 210, 70, t) && this.SetColor(this.InterImage[5], 2)
            } else if (100 == this.choose) {
                var n = 146;
                if (0 == this.InterImage[6].visible && (n = 90), this.PointInRect(10 - this.iPhoneW / 2, 8, 42, 44, t)) this.SetColor(this.InterImage[4], 2), this.PlaySound("soundpress_mp3");
                else if (this.PointInRect(25, 466, 118, 90, t) && 1 == this.InterImage[6].visible) this.SetColor(this.InterImage[6], 2), this.PlaySound("soundpress_mp3");
                else if (this.PointInRect(n, 466, 140, 70, t)) this.SetColor(this.InterImage[7], 2), this.SetColor(this.UILabel[0], 2), this.PlaySound("soundpress_mp3");
                else {
                    this.TouchNowX = t.x;
                    for (var a = 0; 9 > a; a++)
                        if (this.PointInRect(50 + 80 * Math.floor(a % 3), 229 + 80 * Math.floor(a / 3), 60, 60, t)) {
                            if (a = 9 * this.NowPage + a, a > 14) break;
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        }
                }
            } else if (1 == this.choose)
                if (-1 == this.GameState) this.PointInRect(29, 443, 72, 53, t) || this.PlayGame();
                else if (0 == this.GameState) this.PointInRect(8 - this.iPhoneW / 2, 8, 41, 46, t) ? (this.SetColor(this.GamebgImage[15], 2), this.PlaySound("soundpress_mp3")) : this.PointInRect(252, 106, 37, 32, t) ? this.HelpImage[0].visible || (this.TouchFun = "rest", this.SetColor(this.GamebgImage[10], 2), this.PlaySound("soundpress_mp3")) : this.PointInRect(23, 461, 81, 82, t) ? (this.TouchFun = "allballs", this.SetColor(this.GamebgImage[11], 2), this.SetColor(this.GamebgImage[12], 2), this.PlaySound("soundpress_mp3")) : this.PointInRect(220, 463, 88, 74, t) ? (this.TouchFun = "bombball", this.SetColor(this.GamebgImage[13], 2), this.SetColor(this.GamebgImage[14], 2), this.PlaySound("soundpress_mp3")) : (this.TouchmovebeginX = o.x, this.TouchmovebeginY = o.y, -1 == this.TouchNowHero && (this.TouchNowHero = this.RandHero), this.MoveX = this.NowHeroImg[0][0].x);
            else if (1 == this.GameState) {
                if (1 == this.RankNow) return void this.PreShowRankTouchBegin(t);
                this.PointInRect(66, 356, 182, 67, t) ? (this.SetColor(this.OverImage[4], 2), this.TouchFun = "failrank", this.PlaySound("soundpress_mp3")) : this.PointInRect(68, 424, 182, 68, t) ? (this.SetColor(this.OverImage[3], 2), this.TouchFun = "failstart", this.PlaySound("soundpress_mp3")) : this.PointInRect(8 - this.iPhoneW / 2, 8, 41, 46, t) ? (this.SetColor(this.OverImage[5], 2), this.PlaySound("soundpress_mp3")) : this.PointInRect(235 + this.iPhoneW / 2, 219, 71, 90, t) && 0 == this.PlatForm && (this.SetColor(this.OverImage[6], 2), this.PlaySound("soundpress_mp3"))
            } else 2 == this.GameState && (this.PointInRect(66, 356, 182, 67, t) || (this.PointInRect(68, 424, 182, 68, t) ? (this.SetColor(this.OverImage[4], 2), this.TouchFun = "okstart", this.PlaySound("soundpress_mp3")) : this.PointInRect(8 - this.iPhoneW / 2, 8, 41, 46, t) ? (this.SetColor(this.OverImage[5], 2), this.PlaySound("soundpress_mp3")) : this.PointInRect(235 + this.iPhoneW / 2, 219, 71, 90, t) && 0 == this.PlatForm && (this.SetColor(this.OverImage[6], 2), this.PlaySound("soundpress_mp3"))))
        }
    }, t.prototype.TouchMoved = function(e) {
        if (0 == this.MoveCanNot) {
            var t, o;
            if (t = new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2), o = new egret.Point(e.stageX - this.iPhoneW, e.stageY), 0 == this.choose);
            else if (100 == this.choose);
            else if (1 == this.choose && 0 == this.GameState) {
                if (e.touchPointID + "" != this.Touchnowid) return;
                if (this.HelpImage[0].visible) return;
                var n = o.x - this.TouchmovebeginX,
                    a = 2 * n + this.MoveX,
                    r = this.Balloffset[this.RandHero > 3 ? 3 : this.RandHero];
                if (-1 != this.TouchNowHero)
                    for (var i = 0; i < this.NowHeroImg[0].length; i++) a < r[0] ? this.NowHeroImg[0][i].x = r[0] : a > r[1] ? this.NowHeroImg[0][i].x = r[1] : this.NowHeroImg[0][i].x = a
            }
        }
    }, t.prototype.TouchEnded = function(e) {
        var t = this;
        if (e.touchPointID + "" == this.Touchnowid && (this.Touchnowid = "", 0 == this.MoveCanNot)) {
            var o = new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2),
                n = new egret.Point(e.stageX - this.iPhoneW, e.stageY);
            if (0 == this.choose) {
                if (1 == this.RankNow) return void this.ShowRankToucEnd(o);
                this.SetColor(this.InterImage[1], 1), this.SetColor(this.InterImage[2], 1), this.SetColor(this.InterImage[4], 1), this.SetColor(this.InterImage[5], 1), this.PointInRect(10 - this.iPhoneW / 2, 449, 68, 67, o) ? (this.ReleaseGame(), this.choose = 100, this.InitGame()) : this.PointInRect(239 + this.iPhoneW / 2, 449, 72, 71, o) ? (this.RankNum = 1 /*, this.ShowRank()*/ /*禁止Rank按钮功能*/ ) : this.PointInRect(56, 271, 210, 70, o) ? this.Connect.showChoose().then(function() {
                    /*t.ReleaseGame(), t.choose = 1, t.InitGame()*/
                    /*禁止PlayWithGame按钮功能*/ }) : this.PointInRect(53, 354, 210, 70, o) && (this.ReleaseGame(), this.choose = 1, this.InitGame()//, window.crazysdk && window.crazysdk.requestAd()
                )
            } else if (100 == this.choose) {
                if (this.SetColor(this.InterImage[4], 1), this.SetColor(this.InterImage[6], 1), this.SetColor(this.InterImage[7], 1), this.SetColor(this.UILabel[0], 1), this.PointInRect(10 - this.iPhoneW / 2, 8, 42, 44, o)) this.ReleaseGame(), this.choose = 0, this.InitGame();
                else if (this.PointInRect(34, 500, 102, 48, o) && 1 == this.InterImage[6].visible) this.ShowADNow(0);
                else if (this.PointInRect(302, 990, 284, 112, n)) {
                    for (var a = 0, r = 0; 9 > r; r++) 0 == this.NumLockTT[r] && a++;
                    if (a > 0) {
                        var i = 0;
                        0 == this.NowPage && (i = this.RoleNumber[this.UnlockNum]), this.NumGoldTT < i ? this.ShowTipView("Your Coin is not enough") : (this.NumGoldTT -= i, this.MoveCanNot = 1, this.InterImage[7].texture = RES.getRes("shopbtn4_png"), this.ScoreLabel.text = "c" + this.NumGoldTT, this.ScoreLabel.anchorOffsetX = 0, this.SaveGameScore(), this.UnlockHero())
                    } else this.ShowTipView("You have all the Theme")
                } else if (this.PointInRect(0, 224, this.StageWidth / 2, 220, o) && (egret.Tween.get(this.RankLayer).to({
                        x: -this.NowPage * this.StageWidth
                    }, 300), 1 == this.NowPage && (this.InterImage[5].texture = RES.getRes("shoptitle1_png")), this.UILabel[0].text = "" + this.RoleNumber[this.UnlockNum], this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UnlockNum >= 8 || this.NumGoldTT < this.RoleNumber[this.UnlockNum] ? this.InterImage[7].texture = RES.getRes("shopbtn4_png") : this.InterImage[7].texture = RES.getRes("shopbtn3_png"), this.PointInRect(0, 224, this.StageWidth / 2, 220, o)))
                    for (var r = 0; 9 > r; r++)
                        if (this.PointInRect(50 + 80 * Math.floor(r % 3), 229 + 80 * Math.floor(r / 3), 60, 60, o)) {
                            if (r = 9 * this.NowPage + r, r > 17) break;
                            if (1 == this.NumLockTT[r]) {
                                this.BuyHero = r + 1, this.InterImage[8].x = this.RankImage[r].x, this.InterImage[8].y = this.RankImage[r].y, this.InterImage[3].texture = RES.getRes("hero" + this.BuyHero + "1_png"), this.InterImage[3].pos(320, 212, 180, 180);
                                var a = 0;
                                this.NowHeroTT = this.BuyHero, this.SaveGameScore()
                            }
                        }
            } else if (1 == this.choose)
                if (this.SetColor(this.GamebgImage[11], 1), this.SetColor(this.GamebgImage[12], 1), this.SetColor(this.GamebgImage[13], 1), this.SetColor(this.GamebgImage[14], 1), 0 == this.GameState)
                    if (this.SetColor(this.GamebgImage[10], 1), this.SetColor(this.GamebgImage[15], 1), this.HelpImage[0].visible) this.HelpImage[0].visible = !1, egret.Tween.removeTweens(this.HelpImage[0]);
                    else if (this.PointInRect(8 - this.iPhoneW / 2, 8, 41, 46, o)) this.ReleaseGame(), this.choose = 0, this.InitGame();
            else if (this.PointInRect(252, 106, 37, 32, o) && "rest" == this.TouchFun) this.ClearBall(), this.SetTargetScore(3), this.PlaySound("soundnewb_mp3");
            else if (this.PointInRect(23, 461, 81, 82, o) && "allballs" == this.TouchFun) this.Ball12Ad || this.Ball13Ad || (this.ball12num <= 0 ? (1 == platform.hasRAD() && (this.WorldStep = 0) /*, this.Ball12Ad = !0, this.ShowADNow(0)*/ ) : 12 != this.RandHero ? (13 != this.RandHero && (this.Replaceball = this.RandHero), this.RandHero = 12, this.TouchNowHero = this.RandHero, this.Createheroimg(1)) : (this.RandHero = this.Replaceball, this.TouchNowHero = this.RandHero, this.NowHeroImg[0][0].visible || this.Createheroimg(1)));
            else if (this.PointInRect(220, 463, 88, 74, o) && "bombball" == this.TouchFun) this.Ball12Ad || this.Ball13Ad || (this.ball13num <= 0 ? (1 == platform.hasRAD() && (this.WorldStep = 0) /*, this.Ball13Ad = !0, this.ShowADNow(0)*/ ) : 13 != this.RandHero ? (12 != this.RandHero && (this.Replaceball = this.RandHero), this.RandHero = 13, this.TouchNowHero = this.RandHero, this.Createheroimg(1)) : (this.RandHero = this.Replaceball, this.TouchNowHero = this.RandHero, this.NowHeroImg[0][0].visible || this.Createheroimg(1)));
            else {
                for (var s = [0, 0, 0, 0, 0], h = 0, r = 0; r < this.HeroImage.length; r++)
                    if (!(-1 == this.HeroImage[r][0] || this.HeroImage[r][0].y > 500)) {
                        if (110 == this.HeroImage[r][3].id || 109 == this.HeroImage[r][3].id || 888 == this.HeroImage[r][3].id) return void(this.TouchNowHero = -1);
                        if (this.BallInBall(this.NowHeroImg[0][0], this.HeroImage[r][0], this.HeroImage[r][3].id)) return this.NowHeroImg[0][0].name == this.HeroImage[r][3].id ? void(this.TouchNowHero = -1) : void(this.TouchNowHero = -1);
                        if (this.HeroImage[r][0].y < 550)
                            for (var c = 0; c < this.TestBody.length; c++) this.ImageInImage(this.HeroImage[r][0], this.TestBody[c]) && s[c]++
                    }
                for (var r = 0; r < s.length; r++) 0 != s[r] && h++;
                if (h >= 5) return void(this.TouchNowHero = -1);
                if (this.Isdrop) {
                    this.Isdrop = !1;
                    var l = n.x - this.TouchmovebeginX,
                        m = 2 * l + this.MoveX,
                        u = this.Balloffset[this.RandHero > 3 ? 3 : this.RandHero]; - 1 != this.TouchNowHero ? (m < u[0] ? m = u[0] : m > u[1] && (m = u[1]), 12 == this.TouchNowHero && (this.ball12num--, this.Testball1213()), 13 == this.TouchNowHero && (this.ball13num--, this.Testball1213()), this.Createheroimg(2, m), this.CreateCircle({
                        x: m,
                        y: this.Ballstarty,
                        r: this.Ballsize[this.TouchNowHero][0] / 2
                    }, this.HeroImage[this.NowHeroindex][0], this.TouchNowHero, this.NowHeroindex), this.RandHero = this.GetId(), this.TouchNowHero = this.RandHero, egret.setTimeout(function() {
                        t.Isdrop = !0, t.NowHeroImg[0][1].visible || t.Createheroimg(1)
                    }, this, 500)) : egret.setTimeout(function() {
                        t.Isdrop = !0
                    }, this, 500)
                }
            } else if (1 == this.GameState) {
                if (this.SetColor(this.OverImage[3], 1), this.SetColor(this.OverImage[4], 1), this.SetColor(this.OverImage[5], 1), this.SetColor(this.OverImage[6], 1), 1 == this.RankNow) return void this.ShowRankToucEnd(o);
                if (this.PointInRect(66, 356, 182, 67, o) && "failrank" == this.TouchFun) this.RankNum = 1, this.ShowRank();
                else if (this.PointInRect(68, 424, 182, 68, o) && "failstart" == this.TouchFun) {
                    this.ClearBall();
                    for (var r = 0; r < this.OverImage.length; r++) this.removeChild(this.OverImage[r]);
                    this.SetTargetScore(3), this.WorldStep = 30, this.GameState = 0
                } else this.PointInRect(8 - this.iPhoneW / 2, 8, 41, 46, o) ? (this.ReleaseGame(), this.choose = 0, this.InitGame()) : this.PointInRect(235 + this.iPhoneW / 2, 219, 71, 90, o) && 0 == this.PlatForm && this.Connect.OpenMyGame(this.NewGame % 3 + 1)
            } else if (2 == this.GameState)
                if (this.SetColor(this.OverImage[4], 1), this.SetColor(this.OverImage[5], 1), this.SetColor(this.OverImage[6], 1), this.PointInRect(66, 356, 182, 67, o) && "okrank" == this.TouchFun);
                else if (this.PointInRect(68, 424, 182, 68, o) && "okstart" == this.TouchFun) {
                for (var r = 0; r < this.OverImage.length; r++) this.removeChild(this.OverImage[r]);
                this.removeChild(this.UILabel[3]), this.removeChild(this.UILabel[4]), this.SetTargetScore(2), this.WorldStep = 30, this.GameState = 0;

                // if (window.crazysdk)
                //     window.crazysdk.requestAd();

            } else this.PointInRect(8 - this.iPhoneW / 2, 8, 41, 46, o) ? (this.ReleaseGame(), this.choose = 0, this.InitGame()) : this.PointInRect(235 + this.iPhoneW / 2, 219, 71, 90, o) && 0 == this.PlatForm && this.Connect.OpenMyGame(this.NewGame % 3 + 1)
        }
    }, t
}(egret.Sprite);
__reflect(GameScene.prototype, "GameScene");
var BasePlatform = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.challenge_info = null, t.isNewPlayer = !1, t.playerType = "old", t.appId = "753573595124217", t.appName = "2048 Balls", t.switchGameInfo = null, t.invite_skin_data = null, t.entry = "normal", t.$remoteData = null, t
    }
    return __extends(t, e), t.prototype.needAccount = function() {
        return !1
    }, t.prototype.initSDK = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, this.initRemoteData()];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.setLoadingProgress = function(e) {}, t.prototype.startGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.getToken = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, null]
            })
        })
    }, Object.defineProperty(t.prototype, "userInfo", {
        get: function() {
            return {
                name: "terran",
                id: "122",
                photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1919308798192205&height=256&width=256&ext=1556338068&hash=AeT6AJodDv0PCryf",
                friends: [],
                lang: "en_US"
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getContextId = function() {
        return ""
    }, t.prototype.getPlayerId = function() {
        return "terran"
    }, t.prototype.hasIAD = function() {
        return !1; /*禁止有广告*/
    }, t.prototype.showIAD = function() {
        /*return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })*/
    }, t.prototype.hasRAD = function() {
        return !1; /*禁止有广告*/
    }, t.prototype.showRAD = function() {
        /*return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })*/
    }, t.prototype.suportAD = function() {
        return !0
    }, t.prototype.getFriends = function() {
        return []
    }, t.prototype.invite = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.share = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !0]
            })
        })
    }, t.prototype.choose = function(e, t, o) {
        return void 0 === t && (t = !1), void 0 === o && (o = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !1]
            })
        })
    }, t.prototype.switchCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !0]
            })
        })
    }, t.prototype.createCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !0]
            })
        })
    }, t.prototype.getContextPlayers = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, []]
            })
        })
    }, t.prototype.switchGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.updateStatues = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.listResponse = function() {
        return []
    }, t.prototype.doResponse = function(e, t) {}, t.prototype.log = function(e, t, o) {
        void 0 === o && (o = 1), console.log("name", e, "data", JSON.stringify(t))
    }, t.prototype.getPlatFormiOS = function() {
        return !1
    }, t.prototype.getWorldEntries = function() {
        return []
    }, t.prototype.getWorldEntriesAsync = function() {
        return Promise.resolve([])
    }, t.prototype.getWorldFriendEntries = function() {
        return []
    }, t.prototype.getWorldFriendEntriesAsync = function() {
        return Promise.resolve([])
    }, t.prototype.getWorldSelfEntry = function() {
        return null
    }, t.prototype.getHighScore = function() {
        return +egret.localStorage.getItem("hight_score1") || 0
    }, t.prototype.setHighScore = function(e, t) {
        egret.localStorage.setItem("hight_score1", e + "")
    }, t.prototype.setSessionScore = function(e) {}, t.prototype.initRemoteData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o, n, a;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, this.getData(["user_info1"])];
                    case 1:
                        e = r.sent(), t = {};
                        try {
                            t = JSON.parse(e.user_info1)
                        } catch (i) {}
                        o = null;
                        try {
                            o = JSON.parse(localStorage.getItem("local_user_info_" + this.getPlayerId()))
                        } catch (i) {}
                        return n = o && +o.w__tsp || -1, a = t && +t.w__tsp || 0, n > a && (t = o, console.log("use local user_info", n, a)), this.$remoteData = t || {}, [2]
                }
            })
        })
    }, t.prototype.syncRemoteData = function(e) {
        return void 0 === e && (e = !1), __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return this.$remoteData.w__tsp = Date.now(), t = JSON.stringify(this.$remoteData), [4, this.setData({
                            user_info1: t
                        }, e)];
                    case 1:
                        return o.sent(), localStorage.setItem("local_user_info_" + this.getPlayerId(), t), [2]
                }
            })
        })
    }, t.prototype.cr = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.$remoteData = {}, [4, this.syncRemoteData(!0)];
                    case 1:
                        return e.sent(), this.emit("cr_data"), [2]
                }
            })
        })
    }, Object.defineProperty(t.prototype, "remoteData", {
        get: function() {
            return this.$remoteData
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getData = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, o, n, a;
            return __generator(this, function(r) {
                for (t = {}, o = 0, n = e; o < n.length; o++) a = n[o], t[a] = egret.localStorage.getItem(a);
                return [2, t]
            })
        })
    }, t.prototype.setData = function(e, t) {
        return void 0 === t && (t = !1), __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(o) {
                for (t in e) egret.localStorage.setItem(t, e[t]);
                return [2]
            })
        })
    }, t.prototype.canAdd2HomeScreen = function() {
        return !0
    }, t.prototype.add2HomeScreen = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, {
                    res: !0,
                    code: ""
                }]
            })
        })
    }, t.prototype.checkBotSubscribe = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, {
                    result: !0
                }]
            })
        })
    }, t.prototype.suportIAP = function() {
        return !1
    }, t.prototype.purchaseAsync = function(e, t) {
        return void 0 === t && (t = ""), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !1]
            })
        })
    }, t.prototype.hasPurchased = function(e) {
        return !1
    }, t
}(Emiter);
__reflect(BasePlatform.prototype, "BasePlatform", ["IResponder"]);
var Main = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, t), egret.ImageLoader.crossOrigin = "anonymous", t
    }
    return __extends(t, e), t.prototype.onAddToStage = function(e) {
        this.applyConsole(), egret.lifecycle.addLifecycleListener(function(e) {
            e.onUpdate = function() {}
        }), egret.lifecycle.onPause = function() {
            egret.ticker.pause()
        }, egret.lifecycle.onResume = function() {
            egret.ticker.resume()
        }, this.runGame()["catch"](function(e) {
            console.log(e)
        })
    }, t.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return App.startup(this.stage), platform = PlatformFactory.create(), platform.log(Constant.LogEvent.game_loading, {
                            type: "initialized"
                        }), [4, this.loadResource()];
                    case 1:
                        return e.sent(), [4, RES.getResAsync("description_json")];
                    case 2:
                        return e.sent(), platform.setLoadingProgress(1), [4, platform.initSDK()];
                    case 3:
                        return e.sent(), console.log("init---"), [4, platform.startGame(["753573595124217_753588208456089", "753573595124217_753588288456081"], ["753573595124217_753588658456044", "753573595124217_753588845122692"])];
                    case 4:
                        return e.sent(), app.http.checkSuper()["catch"](function(e) {
                            return console.log("check super error")
                        }), [4, platform.checkBotSubscribe()];
                    case 5:
                        return e.sent(), [4, app.connect.addShortcut()];
                    case 6:
                        return e.sent(), this.PlayGame(), platform.log(Constant.LogEvent.game_loading, {
                            type: "ready"
                        }), app.notify(Constant.Notify.game_ready), [2]
                }
            })
        })
    }, t.prototype.PlayGame = function() {
        var e = new GameScene;
        this.addChild(e), this.stage.removeChild(this.LoadView);
        var t = new egret.TextField;
        this.addChild(t), t.x = egret.MainContext.instance.stage.stageWidth / 2, t.y = egret.MainContext.instance.stage.stageHeight - 25, t.size = 16, t.textColor = 7633807, t.text = $T_GAME_VERSION, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2
    }, t.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 4, , 5]), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        return t.sent(), [4, RES.loadGroup("loading")];
                    case 2:
                        return t.sent(), platform.setLoadingProgress(.1), this.LoadView = new LoadingUI, this.stage.addChild(this.LoadView), [4, RES.loadGroup("preload", 0, this.LoadView)];
                    case 3:
                        return t.sent(), platform.setLoadingProgress(.8), [3, 5];
                    case 4:
                        return e = t.sent(), console.error(e), [3, 5];
                    case 5:
                        return [2]
                }
            })
        })
    }, t.prototype.applyConsole = function() {
        var e = this,
            t = (console.log, "e3sdsfs3eee"),
            o = "true" == egret.localStorage.getItem(t),
            n = null,
            a = function(e) {
                egret.Capabilities.runtimeType == egret.RuntimeType.WEB && egret.Capabilities.isMobile && (e ? n ? n.showSwitch() : n = new window.VConsole : n && n.hideSwitch())
            };
        a(o), Object.defineProperty(window, "$dev", {
            get: function() {
                return o
            },
            set: function(e) {
                egret.localStorage.setItem(t, e), o = e, a(e)
            },
            configurable: !0
        });
        var r = 0,
            i = 0;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function(t) {
            50 == Math.abs(Math.clamp(t.stageX - e.stage.stageWidth / 2, -50, 50)) || t.stageY >= 50 || (i++, clearTimeout(r), r = setTimeout(function() {
                i >= 5 && ($dev = !$dev), i = 0
            }, 200))
        }, this)
    }, t
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var App = function(e) {
    function t(t) {
        var o = e.call(this) || this;
        return o.stage = t, o._busyCount = 0, o._busy_timer = 0, o.event = new Emiter, o
    }
    return __extends(t, e), t.prototype.init = function() {
        this.http = new HttpService, this.storager = new Storager, this.model = new GameModel, this.connect = new GameConnect
    }, t.startup = function(e) {
        var o = new t(e);
        return Object.defineProperty(window, "app", {
            get: function() {
                return o
            },
            configurable: !0
        }), o.init(), o.registCommand(Constant.Notify.startup, StartupCmd), o.notify(Constant.Notify.startup), o
    }, t.prototype.busy = function() {
        egret.clearTimeout(this._busy_timer), egret.setTimeout(this.busyTimerOut, this, 2e4), 0 == this._busyCount++ && (this._busyInst = new BusyIndicator, this.stage.addChild(this._busyInst), this._busyInst.x = this.stage.stageWidth >> 1, this._busyInst.y = this.stage.stageHeight >> 1)
    }, t.prototype.rmBusy = function() {
        --this._busyCount <= 0 && this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
    }, t.prototype.busyTimerOut = function() {
        this._busyCount = 0, this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
    }, t.prototype.toast = function(e, t, o) {
        void 0 === t && (t = 1e3), void 0 === o && (o = 200)
    }, t
}(Facade);
__reflect(App.prototype, "App");
var Constant;
! function(e) {
    var t;
    ! function(e) {
        e[e.startup = 0] = "startup", e[e.game_ready = 1] = "game_ready", e[e.game_over = 2] = "game_over"
    }(t = e.Notify || (e.Notify = {})), e.context_template = {
        heart: "heart",
        challenge: "challenge",
        challenge_result: "challenge_result",
        auto_choose: "auto_choose",
        skin_invite: "skin_invite",
        home_share: "home_share"
    }, e.LogEvent = {
        add_home_screen: "add_home_screen",
        game_loading: "game_loading",
        play_times: "play_times",
        level: "level",
        dead: "dead"
    }, e.SAME_CONTEXT = "SAME_CONTEXT", e.USER_INPUT = "USER_INPUT"
}(Constant || (Constant = {}));
var GameModel = function() {
    function e() {
        this.lastContextualScore = 1, this.play_times = 0, this.isSuper = !1, this.invite_skin_share_count = 0
    }
    return e
}();
__reflect(GameModel.prototype, "GameModel");
var GameOverCmd = function() {
    function e() {}
    return e.prototype.excute = function(e, t) {
        var o = +e;
        console.log("enter GameOverCmd"), app.model.play_times++;
        var n = platform.isNewPlayer ? "New_Play_Times" : "Old_Play_Times";
        if (platform.log(Constant.LogEvent.play_times, {
                result: app.model.play_times,
                type: n
            }), platform.log(Constant.LogEvent.level, {
                result: o
            }), app.model.lastContextualScore = e, platform instanceof PlatformFB) {
            if (FBInstant.context.getID()) {
                var a = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1;
                a || ShareHelper.sendLeadboardUpdate(e)["catch"](function(e) {
                    console.log("challenge failed:", e)
                })
            }
            FBInstant.setSessionData({
                nickname: platform.userInfo.name,
                playerInfo: {
                    head: platform.userInfo.photo,
                    lang: platform.userInfo.lang,
                    score: platform.getHighScore()
                }
            })
        }
    }, e
}();
__reflect(GameOverCmd.prototype, "GameOverCmd", ["ICommand"]);
var GameReadyCmd = function() {
    function e() {
        this._lastContextId = null, this._contextLeaderBoard = null
    }
    return e.prototype.excute = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                return console.log("enter GameReadyCmd"), platform instanceof PlatformFB && (console.log("platform.entry", platform.entry), e = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1, e || this.watchContextIfChanged()), platform.getContextId() && 0 == platform.entry.indexOf("bot_") && (app.connect.pendingChallengePost = !0), !platform.getContextId() || platform.entry != Constant.context_template.auto_choose && platform.entry != Constant.context_template.skin_invite && platform.entry != Constant.context_template.home_share || (app.connect.pendingChallengePost = !0), platform.getContextId() && "group_rank" == platform.entry && (app.connect.pendingChallengePost = !0), app.http.reportFriends()["catch"](function(e) {
                    return console.log("report friends failed:", e)
                }), app.http.reportSwitchGame()["catch"](function(e) {}), app.http.getRecommendGames()["catch"](function(e) {}), app.http.reportIfFromSkinShare()["catch"](function(e) {}), app.http.getSkinShareCount()["catch"](function(e) {}), console.log("isSuper: " + app.model.isSuper), app.model.isSuper, [2]
            })
        })
    }, e.prototype.showChoose = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB) || FBInstant.context.getID()) return [3, 5];
                        app.busy(), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                    case 2:
                        return e = o.sent(), ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                    case 3:
                        return t = o.sent(), [3, 4];
                    case 4:
                        app.rmBusy(), o.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }, e.prototype.watchContextIfChanged = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o, n, a, r, i, s;
            return __generator(this, function(h) {
                switch (h.label) {
                    case 0:
                        e = FBInstant.player.getName(), t = app.model, h.label = 1;
                    case 1:
                        if (o = FBInstant.context.getID(), !o) return [3, 13];
                        if (n = "context." + o, o == this._lastContextId) return [3, 8];
                        console.log("context changes detected"), h.label = 2;
                    case 2:
                        return h.trys.push([2, 6, , 7]), this._lastContextId = o, a = this, [4, FBInstant.getLeaderboardAsync(n)];
                    case 3:
                        return a._contextLeaderBoard = h.sent(), t.lastContextualScore = 1, console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(t.lastContextualScore, "")];
                    case 4:
                        return h.sent(), console.log("sending update ..."), [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: n,
                            text: e + " joined this game"
                        })];
                    case 5:
                        return h.sent(), [3, 7];
                    case 6:
                        return r = h.sent(), console.log("rank msg failed:", r), [3, 7];
                    case 7:
                        console.log("all done!"), h.label = 8;
                    case 8:
                        if (i = app.connect.getCurentScore() || 0, !(i > t.lastContextualScore)) return [3, 13];
                        h.label = 9;
                    case 9:
                        return h.trys.push([9, 12, , 13]), console.log("score changed!"), t.lastContextualScore = i, console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(t.lastContextualScore, "")];
                    case 10:
                        return h.sent(), console.log("sending update ..."), [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: n,
                            text: e + " scored " + i,
                            data: {
                                ss: "hhh"
                            }
                        })];
                    case 11:
                        return h.sent(), console.log("all done!"), [3, 13];
                    case 12:
                        return s = h.sent(), console.log("score changed update failed:", s), [3, 13];
                    case 13:
                        return [4, waitAsync(3e3)];
                    case 14:
                        return h.sent(), [3, 1];
                    case 15:
                        return [2]
                }
            })
        })
    }, e
}();
__reflect(GameReadyCmd.prototype, "GameReadyCmd", ["ICommand"]);
var StartupCmd = function() {
    function e() {}
    return e.prototype.excute = function(e, t) {
        app.registCommand(Constant.Notify.game_over, GameOverCmd), app.registCommand(Constant.Notify.game_ready, GameReadyCmd)
    }, e
}();
__reflect(StartupCmd.prototype, "StartupCmd", ["ICommand"]);
var BusyIndicator = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.autoClose = !1;
        var o = RES.getRes("loading_indicator_png");
        return t._bmp = new egret.Bitmap(o), t._bmp.anchorOffsetX = o.textureWidth >> 1, t._bmp.anchorOffsetY = o.textureHeight >> 1, t.addChild(t._bmp), t.width = t.height = 0, t
    }
    return __extends(t, e), t.prototype.$onAddToStage = function(t, o) {
        e.prototype.$onAddToStage.call(this, t, o), egret.Tween.get(this._bmp, {
            loop: !0
        }).to({
            rotation: 180
        }, 1e3).to({
            rotation: 360
        }, 1e3)
    }, t.prototype.$onRemoveFromStage = function() {
        e.prototype.$onRemoveFromStage.call(this), egret.Tween.removeTweens(this._bmp)
    }, t
}(egret.Sprite);
__reflect(BusyIndicator.prototype, "BusyIndicator");
var GameConnect = function() {
    function e() {
        this._deadCount = 0, this.pendingChallengePost = !1, this.Init()
    }
    return e.prototype.Init = function() {
        e.iPhoneH = 0, e.iPhoneW = 0, e.NowLanguage = 1, e.OpenAdWall = 0, e.ADVideoState = 0, e.NowGate = 1, this.LoginGame()
    }, e.prototype.LoginGame = function() {}, e.prototype.OpenWallOrNot = function() {
        return e.OpenAdWall
    }, e.prototype.GetiPhoneH = function() {
        var e = egret.MainContext.instance.stage.stageHeight;
        return (e - 1136) / 2
    }, e.prototype.GetiPhoneW = function() {
        var e = egret.MainContext.instance.stage.stageWidth;
        return (e - 640) / 2
    }, e.prototype.GetLanguage = function() {
        return e.NowLanguage
    }, e.prototype.OpenMyGame = function(e) {
        1 == e ? platform.switchGame("2291347300982909") : 2 == e ? platform.switchGame("2504628763086020") : platform.switchGame("618654648671417")
    }, e.prototype.OpenMyBot = function() {
        platform.checkBotSubscribe()
    }, e.prototype.GetPlatForm = function() {
        return 1 == platform.getPlatFormiOS() ? 1 : 0
    }, e.prototype.ShareGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, ShareHelper.sendGenericUpdate(Constant.context_template.home_share, null, !0)];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, e.prototype.ChallengeGame = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, platform.createCtx(e)];
                    case 1:
                        return t = o.sent(), this.pendingChallengePost = !0, [2, t]
                }
            })
        })
    }, e.prototype.ShowADChaping = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return console.log("开启插屏广告"), this.hasPurchasedRemoveAD() ? [2] : platform.hasIAD() ? [4, platform.showIAD()] : [2];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, e.prototype.ShowADVideo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return console.log("开启视频广告"), e.ADVideoState = -1, platform.hasRAD() ? platform.showRAD().then(function() {
                    e.ADVideoState = 1
                })["catch"](function() {
                    e.ADVideoState = 0
                }) : e.ADVideoState = 0, [2]
            })
        })
    }, e.prototype.GetADVideoState = function() {
        return e.ADVideoState
    }, e.prototype.SignInGameCenter = function() {
        console.log("登录排行榜")
    }, e.prototype.UpLoadScore = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return console.log("上传分数"), [4, platform.setHighScore(e)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, e.prototype.UpSessionScore = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return console.log("上传会话分数"), [4, platform.setSessionScore(e)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, e.prototype.GetMyID = function() {
        return platform.userInfo.id
    }, e.prototype.GetMyName = function() {
        return platform.userInfo.name
    }, e.prototype.GetMyImage = function() {
        return platform.userInfo.photo
    }, e.prototype.GetMyRank = function() {
        var e = platform.getWorldSelfEntry();
        return e ? e.originalRank : 999999
    }, e.prototype.GetFriendRankList = function() {
        return platform.getWorldFriendEntries()
    }, e.prototype.GetWorldRankList = function() {
        return platform.getWorldEntries()
    }, e.prototype.GetUserName = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.name
        }) : this.GetFriendRankList().map(function(e) {
            return e.name
        })
    }, e.prototype.GetUserID = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.id
        }) : this.GetFriendRankList().map(function(e) {
            return e.id
        })
    }, e.prototype.GetUserImage = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.photo
        }) : this.GetFriendRankList().map(function(e) {
            return e.photo
        })
    }, e.prototype.GetUserScore = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.score
        }) : this.GetFriendRankList().map(function(e) {
            return e.score
        })
    }, e.prototype.SendEvent = function(e) {
        var t = "nothing";
        t = 1 == e ? "pass_level" : "", platform.log(t, 1)
    }, e.prototype.canaAutoEnterGame = function() {
        return !platform.isNewPlayer && !!platform.getContextId()
    }, e.prototype.onGameStart = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, this.addShortcut()];
                    case 1:
                        return t.sent(), [3, 3];
                    case 2:
                        return e = t.sent(), console.log("shortcut error:", e), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, e.prototype.readData = function() {
        var e = platform.remoteData.game_db || {};
        return e
    }, e.prototype.setData = function(e) {
        platform.remoteData.game_db = e, platform.syncRemoteData()
    }, e.prototype.onGameOver = function(e) {
        app.notify(Constant.Notify.game_over, e)
    }, e.prototype.onDead = function(e) {
        platform.log(Constant.LogEvent.dead, {
            result: ++this._deadCount
        })
    }, e.prototype.setCurentScore = function(t) {
        e.NowGate = t
    }, e.prototype.getCurentScore = function() {
        var t = e.NowGate;
        return t
    }, e.prototype.getInviteCount = function() {
        return platform.remoteData.skin_invites || (platform.remoteData.skin_invites = []), platform.remoteData.skin_invites.length
    }, e.prototype.pullInviteCount = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, app.http.getSkinShareCount()];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, e.prototype.inviteForSkin = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return platform.remoteData.skin_invites || (platform.remoteData.skin_invites = []), [4, platform.choose(["NEW_CONTEXT_ONLY"], !0, Constant.context_template.skin_invite)];
                    case 1:
                        if (e = o.sent()) {
                            if (t = platform.getContextId(), -1 != platform.remoteData.skin_invites.indexOf(t)) return app.toast("Duplicated, try another person"), [2, !1];
                            platform.remoteData.skin_invites.push(t), platform.syncRemoteData(), ShareHelper.sendGenericUpdate(Constant.context_template.skin_invite)
                        }
                        return [2, !0]
                }
            })
        })
    }, e.prototype.showChoose = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB)) return [3, 5];
                        app.busy(), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                    case 2:
                        return e = o.sent(), ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                    case 3:
                        return t = o.sent(), [3, 4];
                    case 4:
                        app.rmBusy(), o.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }, e.prototype.suportIAP = function() {
        return !1
    }, e.prototype.purchaseRemoveAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, platform.purchaseAsync("1")];
                    case 1:
                        return e = t.sent(), [2, e]
                }
            })
        })
    }, e.prototype.hasPurchasedRemoveAD = function() {
        return platform.hasPurchased("1")
    }, e.prototype.getLeaderboardByLevel = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        this.leaderBoad && this.leaderBoad.name == "level_l_" + e || (this.leaderBoad = new LeaderBoard("level_l_" + e, "LOWER_IS_BETTER", 999), this.leaderBoad.setFriends(platform.getFriends())), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, this.leaderBoad.initializeAsync(!1, !0)];
                    case 2:
                        return o.sent(), [3, 4];
                    case 3:
                        return t = o.sent(), console.log("fuck", t), [3, 4];
                    case 4:
                        return [2, this.leaderBoad]
                }
            })
        })
    }, e.prototype.onLevelStart = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return console.log("请求" + e + "关数据"), platform instanceof PlatformFB ? [4, this.getLeaderboardByLevel(e)] : [2];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, e.prototype.getLevelRanks = function(e, t, o) {
        return void 0 === o && (o = !1), __awaiter(this, void 0, void 0, function() {
            var n, a;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return console.log("得到" + e + "关数据"), platform instanceof PlatformFB ? [4, this.getLeaderboardByLevel(e)] : (platform.setHighScore(t), [2, platform.getWorldFriendEntries()]);
                    case 1:
                        return n = r.sent(), o || this.leaderBoad.setScore(t), a = n.getConnectedPlayerEntries(), console.log("getLevelRanks", a.length), [2, a.length > 0 ? a : null]
                }
            })
        })
    }, e.prototype.getVersion = function() {
        return $T_GAME_VERSION
    }, e.prototype.challengePost = function(e, t) {
        ShareHelper.challengePost(e, t)
    }, e.prototype.challengeShare = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, ShareHelper.challengeShare(e, t)];
                    case 1:
                        return o.sent(), [2]
                }
            })
        })
    }, e.prototype.getChallengeLevel = function() {
        return platform.challenge_info && platform.challenge_info.level || -1
    }, e.prototype.hasContext = function() {
        return !!platform.getContextId()
    }, e.prototype.canAutoChallengePost = function() {
        var e = this.pendingChallengePost;
        return console.log("canAutoChallengePost", e), this.pendingChallengePost = !1, e
    }, e.prototype.getRecommendGamesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e = this;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return app.model.recommendGames ? [3, 2] : [4, new Promise(function(t) {
                            app.event.on("game_recommend_ready", function() {
                                t()
                            }, e)
                        })];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, app.model.recommendGames]
                }
            })
        })
    }, e.prototype.onRecommendGameTapped = function(e) {
        platform.switchGame(e)
    }, e.prototype.getLoginDays = function() {
        var e = platform.remoteData.login_day_count;
        return e ? e : 0
    }, e.prototype.isSuper = function() {
        return 1 == app.model.isSuper ? 1 : 0
    }, e.prototype.addShortcut = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return console.log("addShortcut...."), console.log(platform.remoteData.add_hs_refuse_count), console.log(platform.remoteData.add_hs), console.log(platform.canAdd2HomeScreen()), platform.remoteData.add_hs_refuse_count >= 2 ? [2] : 0 != platform.remoteData.add_hs ? [2] : (e = platform.canAdd2HomeScreen()) ? (t = platform.playerType, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: t,
                            result: -1
                        }), [4, platform.add2HomeScreen()]) : [2];
                    case 1:
                        return o = n.sent(), o.res ? (platform.remoteData.add_hs = 1, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: t,
                            result: 1
                        })) : (o.code == Constant.USER_INPUT ? platform.remoteData.add_hs_refuse_count++ : platform.remoteData.add_hs = 2, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: t,
                            result: 0,
                            code: o.code
                        })), platform.syncRemoteData(), [2]
                }
            })
        })
    }, e
}();
__reflect(GameConnect.prototype, "GameConnect"), Date.prototype.format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var o in t) new RegExp("(" + o + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[o] : ("00" + t[o]).substr(("" + t[o]).length)));
    return e
}, Date.week = function(e) {
    void 0 === e && (e = 2521);
    var t = -252e5,
        o = ~~((Date.now() + t + 864e5) / 6048e5) - e - 1;
    return o
}, Date.days = function(e) {
    void 0 === e && (e = 0);
    var t = -252e5,
        o = ~~((Date.now() + t + 864e5) / 864e5) - e - 1;
    return o
}, egret.DisplayObject.prototype.removeFromParent = function() {
    this.parent && this.parent.removeChild(this)
}, String.prototype.substitute = function(e) {
    return this.replace(/\{(.+?)\}/gi, function(t, o) {
        return e[o]
    })
}, Array.prototype.random = function(e) {
    if (void 0 === e && (e = !1), 0 == this.length) return null;
    var t = Math.floor(this.length * Math.random());
    this[t];
    return e && this.splice(t, 1), this[t]
}, Array.prototype.choice = function(e) {
    if (0 == this.length) return null;
    void 0 == e && (e = function(e) {
        return e
    });
    for (var t = this.reduce(function(t, o) {
            return t + e(o)
        }, 0) * Math.random(), o = this.length, n = 0; o > n; n++) {
        var a = e(this[n]);
        if (a > t) return this[n];
        t -= a
    }
    return this[o - 1]
}, Array.prototype.unique = function() {
    for (var e = [], t = 0; t < this.length;) {
        this[t];
        e.indexOf(this[t]) >= 0 ? this.splice(t, 1) : e.push(this[t++])
    }
    return this
}, Array.prototype.sorton = function(e, t) {
    return void 0 === t && (t = !0), this.sort(function(o, n) {
        var a = o[e] || 0,
            r = n[e] || 0,
            i = a > r ? 1 : r > a ? -1 : 0;
        return t || (i *= -1), i
    })
}, Array.prototype.shuffle = function() {
    for (var e = this.length - 1; e > 0; e--) {
        var t = Math.floor(Math.random() * (e + 1));
        o = [this[t], this[e]], this[e] = o[0], this[t] = o[1]
    }
    return this;
    var o
}, Array.prototype.rm = function(e) {
    for (var t = "function" == typeof e ? e : function(t) {
            return t == e
        }, o = 0; o < this.length;) {
        var n = this[o];
        if (t(n)) return this.splice(o, 1), !0;
        o++
    }
    return !1
}, Array.prototype.next = function() {
    return (void 0 == this._iter_index || this._iter_index >= this.length) && (this._iter_index = 0), this[this._iter_index++]
}, Math.randInt = function(e, t) {
    return void 0 === e && (e = 0), void 0 === t && (t = 10), Math.floor(Math.random() * (t - e + 1)) + e
}, Math.clamp = function(e, t, o) {
    return Math.max(t, Math.min(e, o))
};
var GameMessage = function() {
    function e() {
        this.BlockState = [], this.BlockStateX = [], this.BlockStateY = [], this.BlockRotate = []
    }
    return e.prototype.SetGate = function(e) {}, e.prototype.GetNumBlock = function() {
        return this.NumBlock
    }, e.prototype.GetMessageState = function(e) {
        return this.BlockState[e]
    }, e.prototype.GetMessageX = function(e) {
        return this.BlockStateX[e]
    }, e.prototype.GetMessageY = function(e) {
        return this.BlockStateY[e]
    }, e.prototype.GetMessageR = function(e) {
        return this.BlockRotate[e]
    }, e.prototype.GetMessageLength = function() {
        return this.BlockState.length
    }, e.prototype.GetGuaiMessage = function() {
        var e = [],
            t = 30;
        return e = [
            ["POLYGON", [
                [new Box2D.Common.Math.b2Vec2(8 / t, 563 / t), new Box2D.Common.Math.b2Vec2(10 / t, 566 / t), new Box2D.Common.Math.b2Vec2(8 / t, 565 / t)],
                [new Box2D.Common.Math.b2Vec2(22 / t, 559 / t), new Box2D.Common.Math.b2Vec2(20 / t, 556 / t), new Box2D.Common.Math.b2Vec2(22 / t, 557 / t)],
                [new Box2D.Common.Math.b2Vec2(44 / t, 580 / t), new Box2D.Common.Math.b2Vec2(41 / t, 578 / t), new Box2D.Common.Math.b2Vec2(43 / t, 578 / t)],
                [new Box2D.Common.Math.b2Vec2(459 / t, 578 / t), new Box2D.Common.Math.b2Vec2(456 / t, 580 / t), new Box2D.Common.Math.b2Vec2(457 / t, 578 / t)],
                [new Box2D.Common.Math.b2Vec2(463 / t, 592 / t), new Box2D.Common.Math.b2Vec2(466 / t, 590 / t), new Box2D.Common.Math.b2Vec2(465 / t, 592 / t)],
                [new Box2D.Common.Math.b2Vec2(46 / t, 581 / t), new Box2D.Common.Math.b2Vec2(44 / t, 580 / t), new Box2D.Common.Math.b2Vec2(46 / t, 580 / t)],
                [new Box2D.Common.Math.b2Vec2(48 / t, 582 / t), new Box2D.Common.Math.b2Vec2(46 / t, 581 / t), new Box2D.Common.Math.b2Vec2(48 / t, 581 / t)],
                [new Box2D.Common.Math.b2Vec2(481 / t, 554 / t), new Box2D.Common.Math.b2Vec2(480 / t, 556 / t), new Box2D.Common.Math.b2Vec2(480 / t, 554 / t)],
                [new Box2D.Common.Math.b2Vec2(482 / t, 552 / t), new Box2D.Common.Math.b2Vec2(481 / t, 554 / t), new Box2D.Common.Math.b2Vec2(481 / t, 552 / t)],
                [new Box2D.Common.Math.b2Vec2(495 / t, 556 / t), new Box2D.Common.Math.b2Vec2(497 / t, 551 / t), new Box2D.Common.Math.b2Vec2(497 / t, 554 / t)],
                [new Box2D.Common.Math.b2Vec2(28 / t, 586 / t), new Box2D.Common.Math.b2Vec2(34 / t, 590 / t), new Box2D.Common.Math.b2Vec2(30 / t, 589 / t)],
                [new Box2D.Common.Math.b2Vec2(10 / t, 566 / t), new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(14 / t, 572 / t), new Box2D.Common.Math.b2Vec2(11 / t, 570 / t)],
                [new Box2D.Common.Math.b2Vec2(486 / t, 572 / t), new Box2D.Common.Math.b2Vec2(490 / t, 566 / t), new Box2D.Common.Math.b2Vec2(489 / t, 570 / t)],
                [new Box2D.Common.Math.b2Vec2(466 / t, 590 / t), new Box2D.Common.Math.b2Vec2(499 / t, 542 / t), new Box2D.Common.Math.b2Vec2(498 / t, 547 / t), new Box2D.Common.Math.b2Vec2(470 / t, 589 / t)],
                [new Box2D.Common.Math.b2Vec2(47 / t, 596 / t), new Box2D.Common.Math.b2Vec2(53 / t, 598 / t), new Box2D.Common.Math.b2Vec2(49 / t, 598 / t)],
                [new Box2D.Common.Math.b2Vec2(494 / t, 559 / t), new Box2D.Common.Math.b2Vec2(495 / t, 556 / t), new Box2D.Common.Math.b2Vec2(495 / t, 559 / t)],
                [new Box2D.Common.Math.b2Vec2(497 / t, 551 / t), new Box2D.Common.Math.b2Vec2(498 / t, 547 / t), new Box2D.Common.Math.b2Vec2(498 / t, 551 / t)],
                [new Box2D.Common.Math.b2Vec2(5 / t, 556 / t), new Box2D.Common.Math.b2Vec2(8 / t, 563 / t), new Box2D.Common.Math.b2Vec2(5 / t, 559 / t)],
                [new Box2D.Common.Math.b2Vec2(453 / t, 596 / t), new Box2D.Common.Math.b2Vec2(463 / t, 592 / t), new Box2D.Common.Math.b2Vec2(459 / t, 595 / t)],
                [new Box2D.Common.Math.b2Vec2(475 / t, 563 / t), new Box2D.Common.Math.b2Vec2(470 / t, 569 / t), new Box2D.Common.Math.b2Vec2(470 / t, 567 / t)],
                [new Box2D.Common.Math.b2Vec2(53 / t, 598 / t), new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(53 / t, 599 / t)],
                [new Box2D.Common.Math.b2Vec2(1 / t, 542 / t), new Box2D.Common.Math.b2Vec2(2 / t, 547 / t), new Box2D.Common.Math.b2Vec2(1 / t, 547 / t)],
                [new Box2D.Common.Math.b2Vec2(489 / t, 531 / t), new Box2D.Common.Math.b2Vec2(500 / t, 542 / t), new Box2D.Common.Math.b2Vec2(499 / t, 542 / t), new Box2D.Common.Math.b2Vec2(488 / t, 536 / t), new Box2D.Common.Math.b2Vec2(488 / t, 531 / t)],
                [new Box2D.Common.Math.b2Vec2(498 / t, 547 / t), new Box2D.Common.Math.b2Vec2(499 / t, 542 / t), new Box2D.Common.Math.b2Vec2(499 / t, 547 / t)],
                [new Box2D.Common.Math.b2Vec2(34 / t, 590 / t), new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(53 / t, 598 / t), new Box2D.Common.Math.b2Vec2(35 / t, 592 / t)],
                [new Box2D.Common.Math.b2Vec2(490 / t, 566 / t), new Box2D.Common.Math.b2Vec2(498 / t, 547 / t), new Box2D.Common.Math.b2Vec2(492 / t, 565 / t)],
                [new Box2D.Common.Math.b2Vec2(54 / t, 585 / t), new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(48 / t, 582 / t), new Box2D.Common.Math.b2Vec2(50 / t, 582 / t)],
                [new Box2D.Common.Math.b2Vec2(485 / t, 546 / t), new Box2D.Common.Math.b2Vec2(499 / t, 542 / t), new Box2D.Common.Math.b2Vec2(482 / t, 552 / t), new Box2D.Common.Math.b2Vec2(482 / t, 550 / t)],
                [new Box2D.Common.Math.b2Vec2(2 / t, 547 / t), new Box2D.Common.Math.b2Vec2(5 / t, 556 / t), new Box2D.Common.Math.b2Vec2(3 / t, 554 / t)],
                [new Box2D.Common.Math.b2Vec2(480 / t, 556 / t), new Box2D.Common.Math.b2Vec2(499 / t, 542 / t), new Box2D.Common.Math.b2Vec2(475 / t, 563 / t), new Box2D.Common.Math.b2Vec2(475 / t, 561 / t)],
                [new Box2D.Common.Math.b2Vec2(41 / t, 594 / t), new Box2D.Common.Math.b2Vec2(47 / t, 596 / t), new Box2D.Common.Math.b2Vec2(41 / t, 595 / t)],
                [new Box2D.Common.Math.b2Vec2(15 / t, 546 / t), new Box2D.Common.Math.b2Vec2(1 / t, 542 / t), new Box2D.Common.Math.b2Vec2(13 / t, 540 / t), new Box2D.Common.Math.b2Vec2(14 / t, 540 / t)],
                [new Box2D.Common.Math.b2Vec2(60 / t, 587 / t), new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(54 / t, 585 / t), new Box2D.Common.Math.b2Vec2(60 / t, 586 / t)],
                [new Box2D.Common.Math.b2Vec2(446 / t, 585 / t), new Box2D.Common.Math.b2Vec2(442 / t, 599 / t), new Box2D.Common.Math.b2Vec2(440 / t, 587 / t), new Box2D.Common.Math.b2Vec2(440 / t, 586 / t)],
                [new Box2D.Common.Math.b2Vec2(442 / t, 599 / t), new Box2D.Common.Math.b2Vec2(453 / t, 596 / t), new Box2D.Common.Math.b2Vec2(451 / t, 598 / t)],
                [new Box2D.Common.Math.b2Vec2(30 / t, 569 / t), new Box2D.Common.Math.b2Vec2(1 / t, 542 / t), new Box2D.Common.Math.b2Vec2(22 / t, 559 / t), new Box2D.Common.Math.b2Vec2(30 / t, 567 / t)],
                [new Box2D.Common.Math.b2Vec2(13 / t, 540 / t), new Box2D.Common.Math.b2Vec2(1 / t, 542 / t), new Box2D.Common.Math.b2Vec2(0 / t, 542 / t), new Box2D.Common.Math.b2Vec2(11 / t, 531 / t), new Box2D.Common.Math.b2Vec2(12 / t, 531 / t)],
                [new Box2D.Common.Math.b2Vec2(69 / t, 589 / t), new Box2D.Common.Math.b2Vec2(58 / t, 600 / t), new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(60 / t, 587 / t), new Box2D.Common.Math.b2Vec2(69 / t, 588 / t)],
                [new Box2D.Common.Math.b2Vec2(440 / t, 587 / t), new Box2D.Common.Math.b2Vec2(442 / t, 599 / t), new Box2D.Common.Math.b2Vec2(431 / t, 589 / t), new Box2D.Common.Math.b2Vec2(431 / t, 588 / t)],
                [new Box2D.Common.Math.b2Vec2(41 / t, 578 / t), new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(30 / t, 569 / t), new Box2D.Common.Math.b2Vec2(33 / t, 570 / t)],
                [new Box2D.Common.Math.b2Vec2(470 / t, 569 / t), new Box2D.Common.Math.b2Vec2(442 / t, 599 / t), new Box2D.Common.Math.b2Vec2(459 / t, 578 / t), new Box2D.Common.Math.b2Vec2(467 / t, 570 / t)],
                [new Box2D.Common.Math.b2Vec2(488 / t, 536 / t), new Box2D.Common.Math.b2Vec2(499 / t, 542 / t), new Box2D.Common.Math.b2Vec2(485 / t, 546 / t), new Box2D.Common.Math.b2Vec2(487 / t, 536 / t)],
                [new Box2D.Common.Math.b2Vec2(11 / t, 531 / t), new Box2D.Common.Math.b2Vec2(0 / t, 542 / t), new Box2D.Common.Math.b2Vec2(10 / t, 520 / t), new Box2D.Common.Math.b2Vec2(11 / t, 520 / t)],
                [new Box2D.Common.Math.b2Vec2(80 / t, 590 / t), new Box2D.Common.Math.b2Vec2(58 / t, 600 / t), new Box2D.Common.Math.b2Vec2(69 / t, 589 / t), new Box2D.Common.Math.b2Vec2(80 / t, 589 / t)],
                [new Box2D.Common.Math.b2Vec2(431 / t, 589 / t), new Box2D.Common.Math.b2Vec2(442 / t, 599 / t), new Box2D.Common.Math.b2Vec2(442 / t, 600 / t), new Box2D.Common.Math.b2Vec2(420 / t, 590 / t), new Box2D.Common.Math.b2Vec2(420 / t, 589 / t)],
                [new Box2D.Common.Math.b2Vec2(490 / t, 520 / t), new Box2D.Common.Math.b2Vec2(500 / t, 542 / t), new Box2D.Common.Math.b2Vec2(489 / t, 531 / t), new Box2D.Common.Math.b2Vec2(489 / t, 520 / t)],
                [new Box2D.Common.Math.b2Vec2(20 / t, 556 / t), new Box2D.Common.Math.b2Vec2(15 / t, 546 / t), new Box2D.Common.Math.b2Vec2(16 / t, 546 / t)],
                [new Box2D.Common.Math.b2Vec2(456 / t, 580 / t), new Box2D.Common.Math.b2Vec2(446 / t, 585 / t), new Box2D.Common.Math.b2Vec2(446 / t, 584 / t)],
                [new Box2D.Common.Math.b2Vec2(14 / t, 574 / t), new Box2D.Common.Math.b2Vec2(14 / t, 572 / t), new Box2D.Common.Math.b2Vec2(28 / t, 586 / t), new Box2D.Common.Math.b2Vec2(26 / t, 586 / t)],
                [new Box2D.Common.Math.b2Vec2(474 / t, 586 / t), new Box2D.Common.Math.b2Vec2(472 / t, 586 / t), new Box2D.Common.Math.b2Vec2(486 / t, 572 / t), new Box2D.Common.Math.b2Vec2(486 / t, 574 / t)],
                [new Box2D.Common.Math.b2Vec2(495 / t, 556 / t), new Box2D.Common.Math.b2Vec2(498 / t, 547 / t), new Box2D.Common.Math.b2Vec2(497 / t, 551 / t)],
                [new Box2D.Common.Math.b2Vec2(5 / t, 556 / t), new Box2D.Common.Math.b2Vec2(2 / t, 547 / t), new Box2D.Common.Math.b2Vec2(1 / t, 542 / t), new Box2D.Common.Math.b2Vec2(30 / t, 569 / t), new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(10 / t, 566 / t), new Box2D.Common.Math.b2Vec2(8 / t, 563 / t)],
                [new Box2D.Common.Math.b2Vec2(442 / t, 599 / t), new Box2D.Common.Math.b2Vec2(470 / t, 569 / t), new Box2D.Common.Math.b2Vec2(499 / t, 542 / t), new Box2D.Common.Math.b2Vec2(466 / t, 590 / t), new Box2D.Common.Math.b2Vec2(463 / t, 592 / t), new Box2D.Common.Math.b2Vec2(453 / t, 596 / t)],
                [new Box2D.Common.Math.b2Vec2(14 / t, 572 / t), new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(34 / t, 590 / t), new Box2D.Common.Math.b2Vec2(28 / t, 586 / t)],
                [new Box2D.Common.Math.b2Vec2(472 / t, 586 / t), new Box2D.Common.Math.b2Vec2(498 / t, 547 / t), new Box2D.Common.Math.b2Vec2(490 / t, 566 / t), new Box2D.Common.Math.b2Vec2(486 / t, 572 / t)],
                [new Box2D.Common.Math.b2Vec2(10 / t, 520 / t), new Box2D.Common.Math.b2Vec2(0 / t, 542 / t), new Box2D.Common.Math.b2Vec2(0 / t, 300 / t), new Box2D.Common.Math.b2Vec2(10 / t, 300 / t)],
                [new Box2D.Common.Math.b2Vec2(500 / t, 300 / t), new Box2D.Common.Math.b2Vec2(500 / t, 542 / t), new Box2D.Common.Math.b2Vec2(490 / t, 520 / t), new Box2D.Common.Math.b2Vec2(490 / t, 300 / t)],
                [new Box2D.Common.Math.b2Vec2(499 / t, 542 / t), new Box2D.Common.Math.b2Vec2(480 / t, 556 / t), new Box2D.Common.Math.b2Vec2(482 / t, 552 / t)],
                [new Box2D.Common.Math.b2Vec2(499 / t, 542 / t), new Box2D.Common.Math.b2Vec2(470 / t, 569 / t), new Box2D.Common.Math.b2Vec2(475 / t, 563 / t)],
                [new Box2D.Common.Math.b2Vec2(442 / t, 599 / t), new Box2D.Common.Math.b2Vec2(456 / t, 580 / t), new Box2D.Common.Math.b2Vec2(459 / t, 578 / t)],
                [new Box2D.Common.Math.b2Vec2(442 / t, 599 / t), new Box2D.Common.Math.b2Vec2(446 / t, 585 / t), new Box2D.Common.Math.b2Vec2(456 / t, 580 / t)],
                [new Box2D.Common.Math.b2Vec2(442 / t, 600 / t), new Box2D.Common.Math.b2Vec2(58 / t, 600 / t), new Box2D.Common.Math.b2Vec2(80 / t, 590 / t), new Box2D.Common.Math.b2Vec2(420 / t, 590 / t)],
                [new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(44 / t, 580 / t), new Box2D.Common.Math.b2Vec2(48 / t, 582 / t)],
                [new Box2D.Common.Math.b2Vec2(58 / t, 599 / t), new Box2D.Common.Math.b2Vec2(41 / t, 578 / t), new Box2D.Common.Math.b2Vec2(44 / t, 580 / t)],
                [new Box2D.Common.Math.b2Vec2(1 / t, 542 / t), new Box2D.Common.Math.b2Vec2(20 / t, 556 / t), new Box2D.Common.Math.b2Vec2(22 / t, 559 / t)],
                [new Box2D.Common.Math.b2Vec2(1 / t, 542 / t), new Box2D.Common.Math.b2Vec2(15 / t, 546 / t), new Box2D.Common.Math.b2Vec2(20 / t, 556 / t)],
                [new Box2D.Common.Math.b2Vec2(24 / t, 18 / t), new Box2D.Common.Math.b2Vec2(26 / t, 14 / t), new Box2D.Common.Math.b2Vec2(28 / t, 14 / t), new Box2D.Common.Math.b2Vec2(26 / t, 18 / t)],
                [new Box2D.Common.Math.b2Vec2(14 / t, 28 / t), new Box2D.Common.Math.b2Vec2(18 / t, 24 / t), new Box2D.Common.Math.b2Vec2(18 / t, 26 / t)],
                [new Box2D.Common.Math.b2Vec2(37 / t, 8 / t), new Box2D.Common.Math.b2Vec2(34 / t, 10 / t), new Box2D.Common.Math.b2Vec2(35 / t, 8 / t)],
                [new Box2D.Common.Math.b2Vec2(482 / t, 24 / t), new Box2D.Common.Math.b2Vec2(484 / t, 27 / t), new Box2D.Common.Math.b2Vec2(482 / t, 26 / t)],
                [new Box2D.Common.Math.b2Vec2(473 / t, 16 / t), new Box2D.Common.Math.b2Vec2(476 / t, 18 / t), new Box2D.Common.Math.b2Vec2(474 / t, 18 / t)],
                [new Box2D.Common.Math.b2Vec2(15 / t, 29 / t), new Box2D.Common.Math.b2Vec2(14 / t, 28 / t), new Box2D.Common.Math.b2Vec2(16 / t, 27 / t), new Box2D.Common.Math.b2Vec2(16 / t, 29 / t)],
                [new Box2D.Common.Math.b2Vec2(471 / t, 15 / t), new Box2D.Common.Math.b2Vec2(473 / t, 16 / t), new Box2D.Common.Math.b2Vec2(471 / t, 16 / t)],
                [new Box2D.Common.Math.b2Vec2(5 / t, 44 / t), new Box2D.Common.Math.b2Vec2(3 / t, 49 / t), new Box2D.Common.Math.b2Vec2(3 / t, 46 / t)],
                [new Box2D.Common.Math.b2Vec2(14 / t, 28 / t), new Box2D.Common.Math.b2Vec2(10 / t, 34 / t), new Box2D.Common.Math.b2Vec2(11 / t, 30 / t)],
                [new Box2D.Common.Math.b2Vec2(34 / t, 10 / t), new Box2D.Common.Math.b2Vec2(28 / t, 14 / t), new Box2D.Common.Math.b2Vec2(30 / t, 11 / t)],
                [new Box2D.Common.Math.b2Vec2(6 / t, 41 / t), new Box2D.Common.Math.b2Vec2(5 / t, 44 / t), new Box2D.Common.Math.b2Vec2(5 / t, 41 / t)],
                [new Box2D.Common.Math.b2Vec2(453 / t, 4 / t), new Box2D.Common.Math.b2Vec2(447 / t, 2 / t), new Box2D.Common.Math.b2Vec2(451 / t, 2 / t)],
                [new Box2D.Common.Math.b2Vec2(492 / t, 37 / t), new Box2D.Common.Math.b2Vec2(489 / t, 32 / t), new Box2D.Common.Math.b2Vec2(492 / t, 35 / t)],
                [new Box2D.Common.Math.b2Vec2(11 / t, 39 / t), new Box2D.Common.Math.b2Vec2(12 / t, 35 / t), new Box2D.Common.Math.b2Vec2(12 / t, 39 / t)],
                [new Box2D.Common.Math.b2Vec2(3 / t, 49 / t), new Box2D.Common.Math.b2Vec2(2 / t, 53 / t), new Box2D.Common.Math.b2Vec2(2 / t, 49 / t)],
                [new Box2D.Common.Math.b2Vec2(488 / t, 35 / t), new Box2D.Common.Math.b2Vec2(489 / t, 32 / t), new Box2D.Common.Math.b2Vec2(489 / t, 39 / t), new Box2D.Common.Math.b2Vec2(488 / t, 39 / t)],
                [new Box2D.Common.Math.b2Vec2(495 / t, 44 / t), new Box2D.Common.Math.b2Vec2(492 / t, 37 / t), new Box2D.Common.Math.b2Vec2(495 / t, 41 / t)],
                [new Box2D.Common.Math.b2Vec2(47 / t, 4 / t), new Box2D.Common.Math.b2Vec2(37 / t, 8 / t), new Box2D.Common.Math.b2Vec2(41 / t, 5 / t)],
                [new Box2D.Common.Math.b2Vec2(2 / t, 53 / t), new Box2D.Common.Math.b2Vec2(1 / t, 58 / t), new Box2D.Common.Math.b2Vec2(1 / t, 53 / t)],
                [new Box2D.Common.Math.b2Vec2(447 / t, 2 / t), new Box2D.Common.Math.b2Vec2(442 / t, 1 / t), new Box2D.Common.Math.b2Vec2(447 / t, 1 / t)],
                [new Box2D.Common.Math.b2Vec2(499 / t, 58 / t), new Box2D.Common.Math.b2Vec2(498 / t, 53 / t), new Box2D.Common.Math.b2Vec2(499 / t, 53 / t)],
                [new Box2D.Common.Math.b2Vec2(10 / t, 34 / t), new Box2D.Common.Math.b2Vec2(2 / t, 53 / t), new Box2D.Common.Math.b2Vec2(8 / t, 35 / t)],
                [new Box2D.Common.Math.b2Vec2(466 / t, 10 / t), new Box2D.Common.Math.b2Vec2(58 / t, 1 / t), new Box2D.Common.Math.b2Vec2(58 / t, 0 / t), new Box2D.Common.Math.b2Vec2(442 / t, 1 / t), new Box2D.Common.Math.b2Vec2(453 / t, 4 / t), new Box2D.Common.Math.b2Vec2(465 / t, 8 / t)],
                [new Box2D.Common.Math.b2Vec2(12 / t, 35 / t), new Box2D.Common.Math.b2Vec2(14 / t, 28 / t), new Box2D.Common.Math.b2Vec2(15 / t, 29 / t), new Box2D.Common.Math.b2Vec2(15 / t, 31 / t)],
                [new Box2D.Common.Math.b2Vec2(465 / t, 12 / t), new Box2D.Common.Math.b2Vec2(466 / t, 10 / t), new Box2D.Common.Math.b2Vec2(471 / t, 15 / t), new Box2D.Common.Math.b2Vec2(469 / t, 15 / t)],
                [new Box2D.Common.Math.b2Vec2(498 / t, 53 / t), new Box2D.Common.Math.b2Vec2(495 / t, 44 / t), new Box2D.Common.Math.b2Vec2(497 / t, 46 / t)],
                [new Box2D.Common.Math.b2Vec2(459 / t, 6 / t), new Box2D.Common.Math.b2Vec2(453 / t, 4 / t), new Box2D.Common.Math.b2Vec2(459 / t, 5 / t)],
                [new Box2D.Common.Math.b2Vec2(58 / t, 1 / t), new Box2D.Common.Math.b2Vec2(47 / t, 4 / t), new Box2D.Common.Math.b2Vec2(49 / t, 2 / t)],
                [new Box2D.Common.Math.b2Vec2(10 / t, 47 / t), new Box2D.Common.Math.b2Vec2(11 / t, 39 / t), new Box2D.Common.Math.b2Vec2(11 / t, 47 / t)],
                [new Box2D.Common.Math.b2Vec2(489 / t, 32 / t), new Box2D.Common.Math.b2Vec2(490 / t, 47 / t), new Box2D.Common.Math.b2Vec2(489 / t, 47 / t)],
                [new Box2D.Common.Math.b2Vec2(27 / t, 16 / t), new Box2D.Common.Math.b2Vec2(28 / t, 14 / t), new Box2D.Common.Math.b2Vec2(35 / t, 12 / t), new Box2D.Common.Math.b2Vec2(35 / t, 13 / t)],
                [new Box2D.Common.Math.b2Vec2(484 / t, 27 / t), new Box2D.Common.Math.b2Vec2(489 / t, 30 / t), new Box2D.Common.Math.b2Vec2(489 / t, 32 / t), new Box2D.Common.Math.b2Vec2(488 / t, 35 / t), new Box2D.Common.Math.b2Vec2(487 / t, 35 / t)],
                [new Box2D.Common.Math.b2Vec2(35 / t, 12 / t), new Box2D.Common.Math.b2Vec2(47 / t, 10 / t), new Box2D.Common.Math.b2Vec2(47 / t, 11 / t)],
                [new Box2D.Common.Math.b2Vec2(453 / t, 10 / t), new Box2D.Common.Math.b2Vec2(466 / t, 10 / t), new Box2D.Common.Math.b2Vec2(465 / t, 12 / t), new Box2D.Common.Math.b2Vec2(453 / t, 11 / t)],
                [new Box2D.Common.Math.b2Vec2(26 / t, 14 / t), new Box2D.Common.Math.b2Vec2(24 / t, 18 / t), new Box2D.Common.Math.b2Vec2(14 / t, 28 / t), new Box2D.Common.Math.b2Vec2(14 / t, 26 / t)],
                [new Box2D.Common.Math.b2Vec2(5 / t, 44 / t), new Box2D.Common.Math.b2Vec2(2 / t, 53 / t), new Box2D.Common.Math.b2Vec2(3 / t, 49 / t)],
                [new Box2D.Common.Math.b2Vec2(495 / t, 44 / t), new Box2D.Common.Math.b2Vec2(498 / t, 53 / t), new Box2D.Common.Math.b2Vec2(499 / t, 58 / t), new Box2D.Common.Math.b2Vec2(490 / t, 47 / t), new Box2D.Common.Math.b2Vec2(489 / t, 32 / t), new Box2D.Common.Math.b2Vec2(492 / t, 37 / t)],
                [new Box2D.Common.Math.b2Vec2(453 / t, 4 / t), new Box2D.Common.Math.b2Vec2(442 / t, 1 / t), new Box2D.Common.Math.b2Vec2(447 / t, 2 / t)],
                [new Box2D.Common.Math.b2Vec2(58 / t, 1 / t), new Box2D.Common.Math.b2Vec2(35 / t, 12 / t), new Box2D.Common.Math.b2Vec2(28 / t, 14 / t), new Box2D.Common.Math.b2Vec2(37 / t, 8 / t), new Box2D.Common.Math.b2Vec2(47 / t, 4 / t)],
                [new Box2D.Common.Math.b2Vec2(14 / t, 28 / t), new Box2D.Common.Math.b2Vec2(12 / t, 35 / t), new Box2D.Common.Math.b2Vec2(1 / t, 58 / t), new Box2D.Common.Math.b2Vec2(2 / t, 53 / t), new Box2D.Common.Math.b2Vec2(10 / t, 34 / t)],
                [new Box2D.Common.Math.b2Vec2(0 / t, 58 / t), new Box2D.Common.Math.b2Vec2(1 / t, 58 / t), new Box2D.Common.Math.b2Vec2(10 / t, 300 / t), new Box2D.Common.Math.b2Vec2(0 / t, 300 / t)],
                [new Box2D.Common.Math.b2Vec2(490 / t, 300 / t), new Box2D.Common.Math.b2Vec2(499 / t, 58 / t), new Box2D.Common.Math.b2Vec2(500 / t, 58 / t), new Box2D.Common.Math.b2Vec2(500 / t, 300 / t)],
                [new Box2D.Common.Math.b2Vec2(1 / t, 58 / t), new Box2D.Common.Math.b2Vec2(10 / t, 47 / t), new Box2D.Common.Math.b2Vec2(10 / t, 300 / t)],
                [new Box2D.Common.Math.b2Vec2(1 / t, 58 / t), new Box2D.Common.Math.b2Vec2(11 / t, 39 / t), new Box2D.Common.Math.b2Vec2(10 / t, 47 / t)],
                [new Box2D.Common.Math.b2Vec2(1 / t, 58 / t), new Box2D.Common.Math.b2Vec2(12 / t, 35 / t), new Box2D.Common.Math.b2Vec2(11 / t, 39 / t)],
                [new Box2D.Common.Math.b2Vec2(58 / t, 1 / t), new Box2D.Common.Math.b2Vec2(47 / t, 10 / t), new Box2D.Common.Math.b2Vec2(35 / t, 12 / t)],
                [new Box2D.Common.Math.b2Vec2(58 / t, 1 / t), new Box2D.Common.Math.b2Vec2(453 / t, 10 / t), new Box2D.Common.Math.b2Vec2(47 / t, 10 / t)],
                [new Box2D.Common.Math.b2Vec2(490 / t, 47 / t), new Box2D.Common.Math.b2Vec2(499 / t, 58 / t), new Box2D.Common.Math.b2Vec2(490 / t, 300 / t)],
                [new Box2D.Common.Math.b2Vec2(482 / t, 24 / t), new Box2D.Common.Math.b2Vec2(489 / t, 30 / t), new Box2D.Common.Math.b2Vec2(484 / t, 27 / t)],
                [new Box2D.Common.Math.b2Vec2(482 / t, 24 / t), new Box2D.Common.Math.b2Vec2(476 / t, 18 / t), new Box2D.Common.Math.b2Vec2(470 / t, 11 / t), new Box2D.Common.Math.b2Vec2(489 / t, 30 / t)],
                [new Box2D.Common.Math.b2Vec2(476 / t, 18 / t), new Box2D.Common.Math.b2Vec2(473 / t, 16 / t), new Box2D.Common.Math.b2Vec2(466 / t, 10 / t), new Box2D.Common.Math.b2Vec2(470 / t, 11 / t)],
                [new Box2D.Common.Math.b2Vec2(471 / t, 15 / t), new Box2D.Common.Math.b2Vec2(466 / t, 10 / t), new Box2D.Common.Math.b2Vec2(473 / t, 16 / t)],
                [new Box2D.Common.Math.b2Vec2(442 / t, 1 / t), new Box2D.Common.Math.b2Vec2(58 / t, 0 / t), new Box2D.Common.Math.b2Vec2(442 / t, 0 / t)]
            ]]
        ]
    }, e
}();
__reflect(GameMessage.prototype, "GameMessage");
var Http = function() {
    function e() {}
    return e.prototype.encodeValue = function(e, t) {
        return t instanceof Array ? this.encodeArray(e, t) : encodeURIComponent(e) + "=" + encodeURIComponent(t)
    }, e.prototype.encodeArray = function(e, t) {
        return e ? 0 == t.length ? encodeURIComponent(e) + "=" : t.map(function(t) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }).join("&") : ""
    }, e.prototype.toString = function(e) {
        if (!e) return "";
        var t = [];
        for (var o in e) t.push(this.encodeValue(o, e[o]));
        return t.join("&")
    }, e.prototype.request = function(e) {
        var t = new XMLHttpRequest;
        t.responseType = "arraybuffer" !== e.responseType ? "text" : "arraybuffer", t.timeout = e.timeout || 0, t.onerror = function(o) {
            console.log("[http][" + e.method + "][error] [" + t.status + ":" + t.statusText + "] " + e.url), e.onerror && e.onerror(o)
        }, t.onabort = function(t) {
            console.log("[http][" + e.method + "][abort] " + e.url), e.onabort && e.onabort()
        }, t.onprogress = function(t) {
            t && t.lengthComputable && e.onprogress && e.onprogress(t.loaded / t.total)
        }, t.onload = function(o) {
            var n = void 0 !== t.status ? t.status : 200;
            if (200 === n || 204 === n || 0 === n) {
                var a = t.response || t.responseText;
                console.log("[http][" + e.method + "][loaded] " + e.url + ":" + a), e.onload(a)
            } else console.log("[http][" + e.method + "][error] [" + t.status + ":" + t.statusText + "] " + e.url), e.onerror && e.onerror(o)
        };
        var o = this.toString(e.data),
            n = e.url;
        if ("GET" == e.method && o && (n = e.url + "?" + o, o = null), t.open(e.method, n, !0), "POST" == e.method && (e.rawData ? (t.setRequestHeader("Content-Type", "application/json"), o = JSON.stringify(e.rawData)) : t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), e.headers)
            for (var a = 0; a < e.headers.length; a++) t.setRequestHeader(e.headers[a++], e.headers[a]);
        return t.send(o), console.log("[http][" + e.method + "] " + e.url + ":" + JSON.stringify(e.data)), t
    }, e.prototype.post = function(e, t) {
        var o = this;
        return new Promise(function(n, a) {
            /*o.request({
                url: e,
                data: t,
                method: "POST",
                onload: n,
                onerror: a,
                ontimeout: a
            })*/
        })
    }, e.prototype.get = function(e, t) {
        var o = this;
        return new Promise(function(n, a) {
            /*o.request({
                url: e,
                data: t,
                method: "GET",
                onload: n,
                onerror: a,
                ontimeout: a
            })*/
        })
    }, e
}();
__reflect(Http.prototype, "Http");
var Storager = function() {
    function e(e) {
        void 0 === e && (e = "global"), this.id = e
    }
    return e.prototype.set = function(e, t) {
        "object" == typeof t && (t = JSON.stringify(t)), egret.localStorage.setItem(this.id + "_" + e, t)
    }, e.prototype.get = function(e, t) {
        return egret.localStorage.getItem(this.id + "_" + e) || t || null
    }, e.prototype.rm = function(e) {
        egret.localStorage.removeItem(this.id + "_" + e)
    }, e.prototype.json = function(e, t) {
        void 0 === t && (t = null);
        var o, n = egret.localStorage.getItem(this.id + "_" + e);
        try {
            o = JSON.parse(n)
        } catch (a) {
            $dev && console.log("json failed")
        }
        return o || t || null
    }, e.clear = function() {
        egret.localStorage.clear()
    }, e
}();
__reflect(Storager.prototype, "Storager");
var ad;
! function(e) {
    var t = function(e) {
        function t(t, o) {
            void 0 === o && (o = !0);
            var n = e.call(this) || this;
            return n.ids = t, n._adInstance = null, n._isStart = !1, n._watch_count = 0, n.suportAD() && o && n.preloadAD(), n
        }
        return __extends(t, e), t.prototype.suportAD = function() {
            throw "should be implemented in subclass!"
        }, t.prototype.getName = function() {
            throw "should be implemented in subclass!"
        }, t.prototype.getADInstanceAsync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, null]
                })
            })
        }, t.prototype.hasAD = function() {
            return !!this._adInstance
        }, t.prototype.preloadAD = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t, o, n, a, r, i, s, h, c = this;
                return __generator(this, function(l) {
                    switch (l.label) {
                        case 0:
                            if (this._isStart) return [2];
                            this._isStart = !0, e = "", t = this.ids.concat(), o = 0, n = null, l.label = 1;
                        case 1:
                            if (n) return [3, 24];
                            a = o++ % t.length, l.label = 2;
                        case 2:
                            return l.trys.push([2, 22, , 23]), [4, this.getADInstanceAsync(t[a])];
                        case 3:
                            n = l.sent(), e = "", console.log(this.getName() + " create suc:" + a), r = 0, l.label = 4;
                        case 4:
                            if (this._adInstance || !n) return [3, 21];
                            l.label = 5;
                        case 5:
                            return l.trys.push([5, 14, , 20]), [4, n.loadAsync()];
                        case 6:
                            l.sent(), e = "", this._adInstance = n, this.emit("ad_ready"), console.log(this.getName() + " load suc"), l.label = 7;
                        case 7:
                            return [4, new Promise(function(e, t) {
                                return c.once("show_ad", e)
                            })];
                        case 8:
                            l.sent(), l.label = 9;
                        case 9:
                            return l.trys.push([9, 11, , 12]), [4, this._adInstance.showAsync()];
                        case 10:
                            return l.sent(), e = "", console.log(this.getName() + " show suc"), this.emit("show_result", {
                                result: !0,
                                level: a
                            }), o = 0, this._adInstance = null, n = null, [3, 13];
                        case 11:
                            return i = l.sent(), console.log(this.getName() + " show failed," + i.code + "," + i.message), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 2,
                                code: i.code,
                                msg: i.message,
                                lastError: e
                            }), e = i.code + ":2", this.emit("show_result", {
                                result: !1,
                                err: i,
                                level: a
                            }), "ADS_NOT_LOADED" == i.code ? (this._adInstance = null, r = 0, [3, 13]) : "PENDING_REQUEST" != i.code && "UNKNOWN" != i.code && "RATE_LIMITED" != i.code ? (this._adInstance = null, n = null, [3, 13]) : [3, 12];
                        case 12:
                            return [3, 7];
                        case 13:
                            return [3, 20];
                        case 14:
                            return s = l.sent(), console.log(this.getName() + " load failed," + s.code + "," + s.message), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 1,
                                code: s.code,
                                msg: s.message,
                                lastError: e
                            }), e = s.code + ":1", "ADS_FREQUENT_LOAD" != s.code ? [3, 16] : [4, new Promise(function(e) {
                                return setTimeout(e, 18e5)
                            })];
                        case 15:
                            return l.sent(), [3, 21];
                        case 16:
                            return "INVALID_PARAM" != s.code ? [3, 17] : (n = null, [3, 21]);
                        case 17:
                            return [4, new Promise(function(e) {
                                return setTimeout(e, 31e3)
                            })];
                        case 18:
                            l.sent(), l.label = 19;
                        case 19:
                            return [3, 20];
                        case 20:
                            return [3, 4];
                        case 21:
                            return [3, 23];
                        case 22:
                            return h = l.sent(), console.log(this.getName() + " create failed," + h.code + "," + a), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 0,
                                code: h.code,
                                msg: h.message,
                                lastError: e
                            }), e = h.code + ":0", "CLIENT_UNSUPPORTED_OPERATION" == h.code || "ADS_TOO_MANY_INSTANCES" == h.code ? [2] : [3, 23];
                        case 23:
                            return [3, 1];
                        case 24:
                            return [2]
                    }
                })
            })
        }, t.prototype.showAD = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t = this;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (!this.hasAD()) throw "no ad ready";
                            return e = this.emit("show_ad"), e ? [4, new Promise(function(e, o) {
                                t.once("show_result", function(n) {
                                    t.emit("ad_show", {
                                        type: t.getName(),
                                        result: ++t._watch_count,
                                        level: n.level
                                    }), n.result ? e() : o(n.err)
                                })
                            })] : [2];
                        case 1:
                            return o.sent(), [2]
                    }
                })
            })
        }, t
    }(Emiter);
    __reflect(t.prototype, "Advertise");
    var o = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.getName = function() {
            return "iad"
        }, t.prototype.suportAD = function() {
            var e = FBInstant.getSupportedAPIs();
            return e.indexOf("getInterstitialAdAsync") > -1
        }, t.prototype.getADInstanceAsync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, FBInstant.getInterstitialAdAsync(e)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        }, t
    }(t);
    e.InterstitialAD = o, __reflect(o.prototype, "ad.InterstitialAD");
    var n = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.getName = function() {
            return "rad"
        }, t.prototype.suportAD = function() {
            var e = FBInstant.getSupportedAPIs();
            return e.indexOf("getRewardedVideoAsync") > -1
        }, t.prototype.getADInstanceAsync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, FBInstant.getRewardedVideoAsync(e)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        }, t
    }(t);
    e.RewardedVideoAD = n, __reflect(n.prototype, "ad.RewardedVideoAD")
}(ad || (ad = {}));
var LoadingUI = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.createView(), t
    }
    return __extends(t, e), t.prototype.createView = function() {
        this.LoadImage = new egret.Bitmap(RES.getRes("loading1_png")), this.addChild(this.LoadImage), this.StageWidth = egret.MainContext.instance.stage.stageWidth, this.LoadImage.x = (this.StageWidth - 920) / 2, this.LoadImage.width = 920, this.LoadImage.height = 1136;
        var e = new egret.Bitmap(RES.getRes("loading2_png"));
        this.addChild(e), e.x = this.StageWidth / 2, e.y = 568, e.width = 96, e.height = 96, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.rotation = 0, egret.Tween.get(e, {
            loop: !0
        }).to({
            rotation: 360
        }, 2e3)
    }, t.prototype.onProgress = function(e, t) {}, t
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var HttpService = function() {
    function e() {
        this.game_id = 26, this.host = "https://fb-api.capjoy.com", this._server = new Http
    }
    return Object.defineProperty(e.prototype, "server", {
        get: function() {
            return this._server
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.reportFriends = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return platform instanceof PlatformFB && platform.getFriends().length > 0 ? (e = {
                            action: "friends",
                            playerId: platform.getPlayerId(),
                            payload: platform.getFriends().map(function(e) {
                                return e.getID()
                            })
                        }, [4, this._server.post("https://fb-bot.capjoy.com/api/v0/upload_" + this.game_id, {
                            data: JSON.stringify(e)
                        })]) : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.reportSwitchGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return platform.switchGameInfo && platform.isNewPlayer ? [4, this._server.post(this.host + "/fbapi/v0/ads/report/" + platform.switchGameInfo.appId + "/" + platform.appId + "/" + platform.getPlayerId(), {
                            v: $T_GAME_VERSION
                        })["catch"](function(e) {
                            return console.log(e)
                        })] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.checkSuper = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o, n, a;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        e = this.host + "/fbapi/v0/testCase_" + this.game_id, r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), n = (o = JSON).parse, [4, this._server.post(e, {
                            nickname: platform.userInfo.name,
                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                            timezoneOffset: (new Date).getTimezoneOffset(),
                            playerId: platform.getPlayerId(),
                            appId: platform.appId
                        })];
                    case 2:
                        return t = n.apply(o, [r.sent()]), 0 == t.error && (app.model.isSuper = 1 == +t.data), [3, 4];
                    case 3:
                        return a = r.sent(), console.log("check super failed"), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.getRecommendGames = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o, n, a;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return e = this.host + "/fbapi/v0/getRecommendGames", t = {
                            playerId: platform.userInfo.id,
                            nickname: platform.userInfo.name,
                            appId: platform.appId,
                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                            deviceOS: platform instanceof PlatformFB ? FBInstant.getPlatform() : "IOS",
                            timezoneOffset: (new Date).getTimezoneOffset()
                        }, a = (n = JSON).parse, [4, this._server.post(e, t)];
                    case 1:
                        return o = a.apply(n, [r.sent()]), 0 == o.error ? (app.model.recommendGames = o.data && o.data.ads || null, app.event.emit("game_recommend_ready")) : console.log("getRecommendGames  error:", o.msg), [2]
                }
            })
        })
    }, e.prototype.reportIfFromSkinShare = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return platform.invite_skin_data && platform.isNewPlayer ? (e = this.host + "/api/game/v0/shareUpdate_" + this.game_id, [4, this._server.post(e, {
                            v: $T_GAME_VERSION,
                            playerId: platform.getPlayerId(),
                            sharePlayerId: platform.invite_skin_data.playerId,
                            type: "share"
                        })["catch"](function(e) {
                            return console.log(e)
                        })]) : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.getSkinShareCount = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o, n, a;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        e = 0, r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), t = this.host + "/api/game/v0/shareGet_" + this.game_id, [4, this._server.post(t, {
                            v: $T_GAME_VERSION,
                            playerId: platform.getPlayerId(),
                            type: "share"
                        })];
                    case 2:
                        return o = r.sent(), n = JSON.parse(o), e = +n.data.count || 0, [3, 4];
                    case 3:
                        return a = r.sent(), console.log(a), [3, 4];
                    case 4:
                        return app.model.invite_skin_share_count = e, [2]
                }
            })
        })
    }, e
}();
__reflect(HttpService.prototype, "HttpService");
var LeaderBoard = function(e) {
    function t(t, o, n) {
        void 0 === o && (o = "HIGHER_IS_BETTER"), void 0 === n && (n = 0);
        var a = e.call(this) || this;
        return a.name = t, a.sortType = o, a.defaultScore = n, a._selfEntry = null, a._entries = null, a._friendEntries = null, a._preInitialized = !1, a._preInitializing = !1, a._initialized = !1, a._initializing = !1, a._friends = null, a
    }
    return __extends(t, e), t.prototype.preInitializeAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o = this;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return this._preInitialized ? [2] : this._preInitializing ? [4, new Promise(function(e) {
                            o.once("preInitialized", e)
                        })] : [3, 2];
                    case 1:
                        return n.sent(), [2];
                    case 2:
                        return this._preInitializing = !0, e = this, [4, FBInstant.getLeaderboardAsync(this.name)];
                    case 3:
                        return e._leaderboard = n.sent(), [4, this._leaderboard.getPlayerEntryAsync()];
                    case 4:
                        return t = n.sent(), t ? this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(t) : this._selfEntry = RankPlayerVO.createFromContextPlayer(FBInstant.player), this._preInitialized = !0, this._preInitializing = !1, this.emit("preInitialized"), console.log("leaderboard preInitialized", this.name), [2]
                }
            })
        })
    }, Object.defineProperty(t.prototype, "initialized", {
        get: function() {
            return this.initialized
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.initializeAsync = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var o, n, a, r = this;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return this._initialized ? [2] : this._initializing ? [4, new Promise(function(e) {
                            r.once("initialized", e)
                        })] : [3, 2];
                    case 1:
                        return i.sent(), [2];
                    case 2:
                        return this._initializing = !0, [4, this.preInitializeAsync()];
                    case 3:
                        i.sent(), i.label = 4;
                    case 4:
                        return i.trys.push([4, 9, , 10]), o = e, o ? [4, this.getEntriesAsync()] : [3, 6];
                    case 5:
                        o = i.sent(), i.label = 6;
                    case 6:
                        return n = t, n ? [4, this.getConnectedPlayerEntriesAsync()] : [3, 8];
                    case 7:
                        n = i.sent(), i.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        return a = i.sent(), console.log("排行榜数据错误"), [3, 10];
                    case 10:
                        return this._initialized = !0, this._initializing = !1, this.emit("initialized"), console.log("leaderboard initialized", this.name), [2]
                }
            })
        })
    }, t.prototype.getEntriesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, this.preInitializeAsync()];
                    case 1:
                        return o.sent(), this._entries ? [3, 3] : (e = this._leaderboard, [4, e.getEntriesAsync(100, 0)]);
                    case 2:
                        t = o.sent(), this._entries = t.map(function(e) {
                            return RankPlayerVO.createFromLeaderBoardEntry(e)
                        }), o.label = 3;
                    case 3:
                        return [2, this._entries || []]
                }
            })
        })
    }, t.prototype.getEntries = function() {
        return this._entries || []
    }, t.prototype.getConnectedPlayerEntriesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o, n;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, this.preInitializeAsync()];
                    case 1:
                        return a.sent(), this._friendEntries ? [3, 3] : (e = this._leaderboard, [4, e.getConnectedPlayerEntriesAsync(100, 0)]);
                    case 2:
                        t = a.sent(), this._friendEntries = t.map(function(e) {
                            return RankPlayerVO.createFromLeaderBoardEntry(e)
                        }), o = FBInstant.player.getID(), n = this._friendEntries.findIndex(function(e) {
                            return e.id == o
                        }), -1 == n && (this._friendEntries.push(RankPlayerVO.createFromContextPlayer(FBInstant.player)), this._friendEntries.forEach(function(e, t) {
                            return e.originalRank = t + 1
                        })), this.bindFriends(), a.label = 3;
                    case 3:
                        return [2, this._friendEntries || []]
                }
            })
        })
    }, t.prototype.getConnectedPlayerEntries = function() {
        return this._friendEntries || []
    }, t.prototype.refreshRankList = function(e, t, o) {
        var n = FBInstant.player.getID(),
            a = e.findIndex(function(e) {
                return e.id == n
            });
        if (-1 != a) {
            var r = e[a];
            r.score = t, r.extraData = o, e.sorton("score", "LOWER_IS_BETTER" == this.sortType), e.forEach(function(e, t) {
                return e.originalRank = t + 1
            })
        } else if (e.length > 0 && t > e[e.length - 1].score) {
            var r = RankPlayerVO.createFromContextPlayer(FBInstant.player);
            r.score = t, r.extraData = o, e.push(r), e.sorton("score", "LOWER_IS_BETTER" == this.sortType), e.forEach(function(e, t) {
                return e.originalRank = t + 1
            })
        }
    }, t.prototype.setScore = function(e, t) {
        var o = this;
        if (!this._preInitialized) throw "doesn't preInitialized";
        if (!(e < this._selfEntry.score)) {
            this._selfEntry.score = e, this._selfEntry.extraData = t, this._entries && this.refreshRankList(this._entries, e, t), this._friendEntries && this.refreshRankList(this._friendEntries, e, t);
            var n = function() {
                return __awaiter(o, void 0, void 0, function() {
                    var o;
                    return __generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.preInitializeAsync()];
                            case 1:
                                return n.sent(), console.log("setScoreAsync", e), [4, this._leaderboard.setScoreAsync(e, JSON.stringify(t))];
                            case 2:
                                return o = n.sent(), this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(o), console.log("setScoreAsync suc"), [2]
                        }
                    })
                })
            };
            n()
        }
    }, t.prototype.getScore = function() {
        if (!this._preInitialized) throw "doesn't preInitialized";
        return this._selfEntry.score
    }, t.prototype.setFriends = function(e) {
        this._friends = e, this.bindFriends()
    }, t.prototype.bindFriends = function() {
        if (this._friends && this._friendEntries) {
            var e = {},
                t = this._friends;
            t.forEach(function(t) {
                return e[t.getID()] = RankPlayerVO.createFromContextPlayer(t)
            }), e[FBInstant.player.getID()] = RankPlayerVO.createFromContextPlayer(FBInstant.player);
            var o = this._friendEntries;
            o.forEach(function(t) {
                var o = e[t.id];
                o && (t.name = o.name, t.photo = o.photo, delete e[t.id])
            });
            for (var n in e) o.push(e[n]), e[n].score = this.defaultScore;
            o.sorton("score", "LOWER_IS_BETTER" == this.sortType), o.forEach(function(e, t) {
                return e.originalRank = t + 1
            })
        }
    }, t.prototype.getSelfEntry = function() {
        return this._selfEntry
    }, t
}(Emiter);
__reflect(LeaderBoard.prototype, "LeaderBoard");
var PlatformDev = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return __extends(t, e), t.prototype.needAccount = function() {
        return !0
    }, t.prototype.getWorldFriendEntries = function() {
        for (var e = [], t = 1; e.length < 1;) {
            var o = new RankPlayerVO;
            o.id = "player" + t, o.name = "abc" + t, o.photo = "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1919308798192205&height=256&width=256&ext=1556338068&hash=AeT6AJodDv0PCryf", o.score = 1 + Math.floor(100 * Math.random()), e.push(o), t++
        }
        return e
    }, t
}(BasePlatform);
__reflect(PlatformDev.prototype, "PlatformDev");
var PlatformFactory = function() {
    function e() {}
    return e.create = function() {
        return window.FBInstant ? new PlatformFB : new PlatformDev
    }, e
}();
__reflect(PlatformFactory.prototype, "PlatformFactory");
var PlatformFB = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._canAdd2HomeScreen = !1, t._isDateReady = !1, t._isFetching = !1, t._userInfo = {
            name: "",
            id: "",
            photo: "",
            friends: [],
            lang: "en_US"
        }, t._isPaymentsReady = !1, t
    }
    return __extends(t, e), t.prototype.getFriends = function() {
        return this._friends || []
    }, t.prototype.initSDK = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o = this;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return $T_FB_INITIALIZED ? [3, 2] : [4, FBInstant.initializeAsync()];
                    case 1:
                        n.sent(), n.label = 2;
                    case 2:
                        return this._worldRank = new LeaderBoard("world"), e = function(e) {
                            e.code && (e.nick = FBInstant.player.getName(), o.log("platform_error", e))
                        }, this._worldRank.on("error", e, this), t = function(e) {
                            o.log("platform_api", e)
                        }, this._worldRank.on("api", t, this), this.fetchData(), [2]
                }
            })
        })
    }, t.prototype.fetchData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t = this;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return this._isDateReady ? [2] : this._isFetching ? [4, new Promise(function(e, o) {
                            t.once("data_ready", e)
                        })] : [3, 2];
                    case 1:
                        return o.sent(), [2];
                    case 2:
                        return o.trys.push([2, 4, , 5]), this._isFetching = !0, [4, this.initRemoteData()];
                    case 3:
                        return o.sent(), this._isDateReady = !0, [3, 5];
                    case 4:
                        return e = o.sent(), console.log("fetchData error", e.code || e.msg || e), [3, 5];
                    case 5:
                        return this._isFetching = !1, this.emit("data_ready"), [2]
                }
            })
        })
    }, t.prototype.setLoadingProgress = function(e) {
        $T_PROGRESS = Math.max($T_PROGRESS, 100 * e)
    }, t.prototype.startGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var o, n, a, r, i, s, h, c, l, m = this;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return [4, FBInstant.startGameAsync()];
                    case 1:
                        return u.sent(), this.initPayments(), console.log("startGameAsync", Date.now()), o = FBInstant.getEntryPointData(), console.log("entry_data", JSON.stringify(o)), this.challenge_info = o && o.challenge_info, this.challenge_info ? [4, FBInstant.context.getPlayersAsync()] : [3, 3];
                    case 2:
                        n = u.sent(), a = {}, r = {}, n.forEach(function(e) {
                            a[e.getID()] = e.getPhoto(), r[e.getID()] = e.getName()
                        }), this.challenge_info.opponents.forEach(function(e) {
                            e.name = r[e.playerId] || "unkonw", e.photo = a[e.playerId] || "default-portrait_png"
                        }), u.label = 3;
                    case 3:
                        return this.switchGameInfo = o && o.switchGameInfo || null, this.invite_skin_data = o && o.invite_skin_data, this.invite_skin_data && this.invite_skin_data.playerId == FBInstant.player.getID() && (this.invite_skin_data = null), i = this, [4, FBInstant.player.getConnectedPlayersAsync()];
                    case 4:
                        i._friends = u.sent() || [], s = this._friends.map(function(e) {
                            return e.getID()
                        }), this._userInfo = {
                            id: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            photo: FBInstant.player.getPhoto(),
                            friends: s,
                            lang: FBInstant.getLocale()
                        }, u.label = 5;
                    case 5:
                        return u.trys.push([5, 7, , 8]), h = this, [4, FBInstant.canCreateShortcutAsync()];
                    case 6:
                        return h._canAdd2HomeScreen = u.sent(), [3, 8];
                    case 7:
                        return c = u.sent(), console.log("canCreateShortcutAsync failed"), [3, 8];
                    case 8:
                        return console.log("can add sc", this._canAdd2HomeScreen), [4, this.fetchData()];
                    case 9:
                        return u.sent(), this.isNewPlayer = void 0 == this.$remoteData.gold, this.playerType = this.isNewPlayer ? "new" : "old", this.isNewPlayer && (this.$remoteData.gold = 0, this.$remoteData.add_hs = 0, this.$remoteData.add_hs_refuse_count = 0, this.$remoteData.context_ids = [], this.$remoteData.h_score = 0, this.$remoteData.iap_inventory = [], this.$remoteData.game_db = {}, this.$remoteData.skin_invites = [], this.syncRemoteData()), this.$remoteData.last_login_dayth ? Date.days() != this.$remoteData.last_login_dayth && (this.$remoteData.login_day_count++, this.$remoteData.last_login_dayth = Date.days(), this.syncRemoteData()) : (this.$remoteData.last_login_dayth = Date.days(), this.$remoteData.login_day_count = 1, this.syncRemoteData()), console.log("login_days"), this._worldRank.setFriends(this._friends), [4, this._worldRank.initializeAsync(!0, !0)];
                    case 10:
                        return u.sent(), FBInstant.setSessionData({
                            nickname: this._userInfo.name,
                            playerInfo: {
                                head: this._userInfo.photo,
                                lang: this._userInfo.lang,
                                score: this.$remoteData.h_score
                            }
                        }), -1 == FBInstant.getPlatform().indexOf("WEB") ? (this.iad = new ad.InterstitialAD(e, !0), this.iad.on("ad_failed", function(e) {
                            return m.log("ad_failed", e)
                        }), this.iad.on("ad_show", function(e) {
                            return m.log("iad_times", e)
                        }), this.rad = new ad.RewardedVideoAD(t, !0), this.rad.on("ad_failed", function(e) {
                            return m.log("ad_failed", e)
                        }), this.rad.on("ad_show", function(e) {
                            return m.log("rad_times", e)
                        })) : (console.log("WEB & MOBILE_WEB video ad skiped!"), this.iad = new ad.InterstitialAD(e, !0), this.iad.on("ad_failed", function(e) {
                            return m.log("ad_failed", e)
                        }), this.iad.on("ad_show", function(e) {
                            return m.log("iad_times", e)
                        })), l = o ? o.type : "normal", "normal" == l && FBInstant.context.getID() && (l = "group_rank"), platform.log("entry_point", {
                            entry: l,
                            play_type: this.playerType
                        }), this.entry = l, console.log("entry", l), [2]
                }
            })
        })
    }, t.prototype.getPlatFormiOS = function() {
        return "IOS" == FBInstant.getPlatform() ? !0 : !1
    }, t.prototype.getWorldEntries = function() {
        return this._worldRank.getEntries()
    }, t.prototype.getWorldEntriesAsync = function() {
        return this._worldRank.getEntriesAsync()
    }, t.prototype.getWorldFriendEntries = function() {
        return this._worldRank.getConnectedPlayerEntries()
    }, t.prototype.getWorldFriendEntriesAsync = function() {
        return this._worldRank.getConnectedPlayerEntriesAsync()
    }, t.prototype.getWorldSelfEntry = function() {
        return this._worldRank.getSelfEntry()
    }, t.prototype.getHighScore = function() {
        return this._worldRank.getScore() || this.$remoteData.h_score
    }, t.prototype.setHighScore = function(e, t) {
        console.log("seth", e), e > this.$remoteData.h_score && (this.$remoteData.h_score = e, this.syncRemoteData()), this._worldRank.setScore(e, t)
    }, t.prototype.setSessionScore = function(e) {
        console.log("postSessionScore: " + e), FBInstant.postSessionScore(e)
    }, t.prototype.hasAD = function() {
        return this.hasRAD() || this.hasIAD()
    }, t.prototype.showAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.hasRAD() ? [4, this.showRAD()] : [3, 2];
                    case 1:
                        return e.sent(), [3, 4];
                    case 2:
                        return this.hasIAD() ? [4, this.showIAD()] : [3, 4];
                    case 3:
                        e.sent(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, t.prototype.hasRAD = function() {
        return this.rad && this.rad.hasAD()
    }, t.prototype.showRAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = this.rad, e ? [4, this.rad.showAD()] : [3, 2];
                    case 1:
                        e = t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, t.prototype.hasIAD = function() {
        return this.iad && this.iad.hasAD()
    }, t.prototype.showIAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = this.iad, e ? [4, this.iad.showAD()] : [3, 2];
                    case 1:
                        e = t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, t.prototype.getToken = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(o) {
                return e = FBInstant.player.getName() || "unknow", t = {
                    playerId: this._signedPlayerInfo.getPlayerID(),
                    signature: this._signedPlayerInfo.getSignature(),
                    photo: FBInstant.player.getPhoto(),
                    nickname: e
                }, [2, t]
            })
        })
    }, Object.defineProperty(t.prototype, "userInfo", {
        get: function() {
            return this._userInfo
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getContextId = function() {
        return FBInstant.context.getID()
    }, t.prototype.getPlayerId = function() {
        return FBInstant.player.getID()
    }, t.prototype.choose = function(e, t, o) {
        return void 0 === t && (t = !1), void 0 === o && (o = "default"), __awaiter(this, void 0, void 0, function() {
            var n;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        this.log("create_detail", {
                            phase: 0,
                            place: o
                        }), void 0 == e && (e = ["NEW_CONTEXT_ONLY"]), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, FBInstant.context.chooseAsync({
                            filters: e,
                            minSize: t ? 3 : 2
                        })];
                    case 2:
                        return a.sent(), [3, 4];
                    case 3:
                        return n = a.sent(), console.log("choose result", JSON.stringify(n)), n.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.log("create_detail", {
                            phase: 1,
                            place: o
                        }), this.emit("context_changed"), [2, !0]
                }
            })
        })
    }, t.prototype.switchCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            var o;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        this.log("switch_detail", {
                            phase: 0,
                            place: t
                        }), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, FBInstant.context.switchAsync(e)];
                    case 2:
                        return n.sent(), [3, 4];
                    case 3:
                        return o = n.sent(), console.log("switchCtx result", JSON.stringify(o)), o.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.emit("context_changed"), this.log("switch_detail", {
                            phase: 1,
                            place: t
                        }), [2, !0]
                }
            })
        })
    }, t.prototype.createCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            var o;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        this.log("create_detail", {
                            phase: 0,
                            place: t
                        }), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, FBInstant.context.createAsync(e)];
                    case 2:
                        return n.sent(), [3, 4];
                    case 3:
                        return o = n.sent(), console.log("createCtx result", JSON.stringify(o)), o.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.emit("context_changed"), this.log("create_detail", {
                            phase: 1,
                            place: t
                        }), [2, !0]
                }
            })
        })
    }, t.prototype.getContextPlayers = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        e = [], o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, FBInstant.context.getPlayersAsync()];
                    case 2:
                        return e = o.sent(), [3, 4];
                    case 3:
                        return t = o.sent(), console.log("getContextPlayers error", JSON.stringify(t)), [3, 4];
                    case 4:
                        return [2, e]
                }
            })
        })
    }, t.prototype.switchGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var o;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return o = {
                            switchGameInfo: {
                                appId: this.appId,
                                appName: this.appName
                            },
                            type: this.appName
                        }, [4, FBInstant.switchGameAsync(e, Object.assign(o, t))];
                    case 1:
                        return n.sent(), [2]
                }
            })
        })
    }, t.prototype.updateStatues = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var o, n, a;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        o = 0, r.label = 1;
                    case 1:
                        if (!(3 > o)) return [3, 8];
                        n = !1, r.label = 2;
                    case 2:
                        return r.trys.push([2, 4, , 5]), [4, FBInstant.updateAsync({
                            action: t.action || "CUSTOM",
                            cta: t.cta || "Play now",
                            image: t.image,
                            text: t.text || "Play with me!",
                            template: t.template || "game_result",
                            data: e,
                            strategy: t.strategy || "IMMEDIATE",
                            notification: t.notification || "NO_PUSH"
                        })];
                    case 3:
                        return r.sent(), [3, 5];
                    case 4:
                        return a = r.sent(), n = !0, console.log("updateStatues failed", o, JSON.stringify(a)), [3, 5];
                    case 5:
                        return n ? [4, waitAsync(500)] : [3, 8];
                    case 6:
                        r.sent(), r.label = 7;
                    case 7:
                        return o++, [3, 1];
                    case 8:
                        return [2]
                }
            })
        })
    }, t.prototype.share = function(e) {
        return void 0 === e && (e = {}), __awaiter(this, void 0, void 0, function() {
            var t, o;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        t = !0, n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), console.log("share..."), [4, FBInstant.shareAsync({
                            intent: "INVITE",
                            image: e.img || RES.getRes("share_png").toDataURL("image/png"),
                            text: e.text || "Hey buddy, I found an awesome game. I'm sure you'll love it.",
                            data: e.data || null
                        })];
                    case 2:
                        return n.sent(), [3, 4];
                    case 3:
                        return o = n.sent(), t = !1, [3, 4];
                    case 4:
                        return [2, t]
                }
            })
        })
    }, t.prototype.log = function(t, o, n) {
        void 0 === n && (n = 1), e.prototype.log.call(this, t, o, n), o = o || {}, o._appVersion = $T_GAME_VERSION, o.playerId = FBInstant.player.getID(), o.playerName = FBInstant.player.getName(), FBInstant.logEvent(t, n, o)
    }, t.prototype.getData = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, o, n;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        t = null, o = 5, a.label = 1;
                    case 1:
                        if (t || !(o-- > 0)) return [3, 6];
                        a.label = 2;
                    case 2:
                        return a.trys.push([2, 4, , 5]), [4, FBInstant.player.getDataAsync(e)];
                    case 3:
                        return t = a.sent(), [3, 5];
                    case 4:
                        return n = a.sent(), [3, 5];
                    case 5:
                        return [3, 1];
                    case 6:
                        return [2, t || {}]
                }
            })
        })
    }, t.prototype.setData = function(e, t) {
        return void 0 === t && (t = !1), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, FBInstant.player.setDataAsync(e)];
                    case 1:
                        return o.sent(), t ? [4, FBInstant.player.flushDataAsync()] : [3, 3];
                    case 2:
                        o.sent(), o.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.canAdd2HomeScreen = function() {
        return this._canAdd2HomeScreen
    }, t.prototype.add2HomeScreen = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, FBInstant.createShortcutAsync()];
                    case 1:
                        return t.sent(), [3, 3];
                    case 2:
                        return e = t.sent(), console.log("add 2 Home Screen result", JSON.stringify(e)), [2, {
                            res: !1,
                            code: e.code
                        }];
                    case 3:
                        return [2, {
                            res: !0,
                            code: ""
                        }]
                }
            })
        })
    }, t.prototype.suportIAP = function() {
        return this._isPaymentsReady
    }, t.prototype.getCatalogAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        e = null, o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, FBInstant.payments.getCatalogAsync()];
                    case 2:
                        return e = o.sent(), console.log(JSON.stringify(e)), [3, 4];
                    case 3:
                        return t = o.sent(), console.log("getCatalogAsync error:" + t.code || t.message || t), [3, 4];
                    case 4:
                        return [2, e]
                }
            })
        })
    }, t.prototype.purchaseAsync = function(e, t) {
        return void 0 === t && (t = ""), __awaiter(this, void 0, void 0, function() {
            var o, n, a, r, i;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        if (!this._isPaymentsReady) return [2, !1];
                        o = !1, n = FBInstant.getPlatform(), this.log("buyProduct", {
                            phase: 0,
                            productId: e,
                            platform: n
                        }), s.label = 1;
                    case 1:
                        return s.trys.push([1, 4, , 5]), a = {}, a.productID = e, t && (a.developerPayload = a.developerPayload), [4, FBInstant.payments.purchaseAsync(a)];
                    case 2:
                        return r = s.sent(), this.log("buyProduct", {
                            phase: 1,
                            productId: e,
                            platform: n
                        }), [4, FBInstant.payments.consumePurchaseAsync(r.purchaseToken)];
                    case 3:
                        return s.sent(), this.addIAPInventroy(r.productID), this.log("buyProduct", {
                            phase: 2,
                            productId: e,
                            platform: n
                        }), o = !0, [3, 5];
                    case 4:
                        return i = s.sent(), console.log("purchaseAsync error:" + i.code || i.message || i), this.log("buyProduct", {
                            phase: -1,
                            productId: e,
                            platform: n,
                            code: i.code
                        }), [3, 5];
                    case 5:
                        return [2, o]
                }
            })
        })
    }, t.prototype.checkPurchaseAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o, n, a, r, i;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        if (!this._isPaymentsReady) return [2, null];
                        e = FBInstant.getPlatform(), t = null, s.label = 1;
                    case 1:
                        return s.trys.push([1, 3, , 4]), [4, FBInstant.payments.getPurchasesAsync()];
                    case 2:
                        return t = s.sent(), [3, 4];
                    case 3:
                        return o = s.sent(), console.log("getPurchasesAsync error:" + o.code || o.message || o), [3, 4];
                    case 4:
                        n = 0, a = t, s.label = 5;
                    case 5:
                        if (!(n < a.length)) return [3, 10];
                        r = a[n], s.label = 6;
                    case 6:
                        return s.trys.push([6, 8, , 9]), [4, FBInstant.payments.consumePurchaseAsync(r.purchaseToken)];
                    case 7:
                        return s.sent(), this.addIAPInventroy(r.productID), this.log("checkPurchase", {
                            phase: 1,
                            productId: r.productID,
                            platform: e
                        }), [3, 9];
                    case 8:
                        return i = s.sent(), console.log("checkPurchase error:" + i.code || i.message || i), this.log("checkPurchase", {
                            phase: -1,
                            platform: e,
                            code: i.code
                        }), [3, 9];
                    case 9:
                        return n++, [3, 5];
                    case 10:
                        return [2]
                }
            })
        })
    }, t.prototype.initPayments = function() {
        var e = this;
        if (-1 != FBInstant.getSupportedAPIs().indexOf("payments.purchaseAsync") && "IOS" != FBInstant.getPlatform()) {
            var t = FBInstant.getPlatform();
            this.log("paymentsReady", {
                phase: 0,
                platform: t
            }), FBInstant.payments.onReady(function() {
                e._isPaymentsReady = !0, e.log("paymentsReady", {
                    phase: 1,
                    platform: t
                }), e.checkPurchaseAsync()
            })
        }
    }, t.prototype.addIAPInventroy = function(e) {
        this.remoteData.iap_inventory || (this.remoteData.iap_inventory = []), this.remoteData.iap_inventory.push(e), this.syncRemoteData()
    }, t.prototype.hasPurchased = function(e) {
        var t = this.remoteData.iap_inventory;
        return t && -1 != t.indexOf(e)
    }, t.prototype.checkBotSubscribe = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, o, n;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        e = null, a.label = 1;
                    case 1:
                        return a.trys.push([1, 5, , 6]), [4, FBInstant.player.canSubscribeBotAsync()];
                    case 2:
                        return t = a.sent(), console.log("can subscribe:", t), t ? (this.log("bot_subscribe", {
                            result: -1
                        }), [4, FBInstant.player.subscribeBotAsync()]) : [3, 4];
                    case 3:
                        o = a.sent(), this.log("bot_subscribe", {
                            result: 1
                        }), e = {
                            result: !0
                        }, a.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        return n = a.sent(), this.log("bot_subscribe", {
                            result: 0
                        }), e = {
                            result: !1,
                            code: n.code,
                            msg: n.message
                        }, [3, 6];
                    case 6:
                        return [2, e]
                }
            })
        })
    }, t
}(BasePlatform);
__reflect(PlatformFB.prototype, "PlatformFB");
var RankPlayerVO = function() {
    function e() {
        this.name = "", this.photo = "", this.score = 0, this.id = "", this.tip = "", this.originalRank = 0
    }
    return Object.defineProperty(e.prototype, "skin", {
        get: function() {
            return this.extraData && this.extraData.skin || 1
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.toJSON = function() {
        return {
            id: this.id,
            score: this.score,
            extraData: this.extraData
        }
    }, e.createFromJSON = function(t) {
        var o = new e;
        if (o.id = t.id, o.score = t.score, "string" == typeof t.extraData) try {
            o.extraData = JSON.parse(t.extraData)
        } catch (n) {} else o.extraData = t.extraData;
        return o
    }, e.createFromLeaderBoardEntry = function(t) {
        var o = t.getPlayer(),
            n = new e;
        n.name = o.getName(), n.photo = o.getPhoto(), n.id = o.getID(), n.score = t.getScore();
        var a = t.getExtraData(),
            r = null;
        try {
            a && (r = JSON.parse(a))
        } catch (i) {
            console.log(i)
        }
        return n.extraData = r, n.originalRank = t.getRank(), n
    }, e.createFromContextPlayer = function(t) {
        var o = new e;
        return o.name = t.getName(), o.photo = t.getPhoto(), o.id = t.getID(), o
    }, e
}();
__reflect(RankPlayerVO.prototype, "RankPlayerVO");
var ShareHelper;
! function(e) {
    function t(e) {
        var t = this;
        return new Promise(function(o, n) {
            e.once("ready_2_draw", function() {
                console.log("ready_2_draw");
                var t = new egret.RenderTexture;
                t.drawToTexture(e, new egret.Rectangle(0, 0, 600, 314)), e.removeFromParent();
                var n = t.toDataURL("image/png");
                t.dispose(), o(n)
            }, t), app.stage.addChildAt(e, 0), e.y = app.stage.stageHeight + 10
        })
    }

    function o(e, o, n) {
        return __awaiter(this, void 0, void 0, function() {
            var a, r, i, s, h, c;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return a = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: o
                        }, r = {
                            level: e,
                            senderId: a.playerId,
                            opponents: [a]
                        }, i = n ? "Hey, " + n + ", m" : "M", s = i + "y score is " + o + "! Can you do better?", h = new ShareImage, [4, t(h.InitShareImage1(e, a.photo, o))];
                    case 1:
                        return c = l.sent(), console.log("r done"), r.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge"
                        }, {
                            challenge_info: r
                        }), {
                            image: c,
                            text: "[Level " + e + "] " + s,
                            template: "challenge",
                            cta: "CHALLENGE"
                        })];
                    case 2:
                        return l.sent(), [2]
                }
            })
        })
    }

    function n(e, o, n, a) {
        return __awaiter(this, void 0, void 0, function() {
            var r, i, s, h, c, l, m;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return r = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: o
                        }, i = n || "you", s = "you" == i ? "you" : "they", h = r.name + " has challenged " + i + ", " + s + " are neck and neck!", r.score > a.score ? h = r.name + " has failed to challenge " + i + ", " + i + " win!" : r.score < a.score && (h = r.name + " has succeeded in passing " + i + ". Come and challenge " + r.name), console.log("r image"), c = new ShareImage, [4, t(c.InitShareImage2(e, [r.photo, a.photo], [o, a.score]))];
                    case 1:
                        return l = u.sent(), console.log("r done"), m = {
                            level: e,
                            senderId: r.playerId,
                            opponents: [a, r]
                        }, m.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge_result"
                        }, {
                            challenge_info: m
                        }), {
                            image: l,
                            text: "[Level " + e + "] " + h,
                            cta: "Play",
                            template: "challenge_result"
                        })];
                    case 2:
                        return u.sent(), [2]
                }
            })
        })
    }

    function a(e, o, n) {
        return __awaiter(this, void 0, void 0, function() {
            var a, r, i, s, h, c, l;
            return __generator(this, function(m) {
                switch (m.label) {
                    case 0:
                        return a = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: o
                        }, r = n.find(function(e) {
                            return e.playerId == a.playerId
                        }), r ? a.score < r.score && Object.assign(r, a) : n.push(a), n.sorton("score", !0), n.forEach(function(e, t) {
                            return e.rankIndex = t
                        }), i = {
                            level: e,
                            senderId: a.playerId,
                            opponents: n
                        }, s = n.findIndex(function(e) {
                            return e.playerId == a.playerId
                        }), h = [], n.length <= 6 ? h = n : 6 > s ? h = n.slice(0, 6) : (h = n.slice(0, 5), h.push(n[s]), s = 5), c = new ShareImage, [4, t(c.InitShareImage(e, s, h))];
                    case 1:
                        return l = m.sent(), console.log("r done"), i.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge_leaderboard"
                        }, {
                            challenge_info: i
                        }), {
                            image: l,
                            text: "[Level " + e + "] " + platform.userInfo.name + " scored " + a.score + "s",
                            cta: "Play",
                            template: "challenge_leaderboard"
                        })];
                    case 2:
                        return m.sent(), [2]
                }
            })
        })
    }

    function r() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(o) {
                return e = [{
                    playerId: "1838821619562248",
                    name: "six",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.5
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.8
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.3
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 2.3
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 2.6
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: .3
                }], t = new ShareImage, app.stage.addChild(t.InitShareImage(10, 0, e)), [2]
            })
        })
    }

    function i(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var r, i, s, h, c, l, m, u, l, g, p;
            return __generator(this, function(d) {
                switch (d.label) {
                    case 0:
                        return platform instanceof PlatformFB ? "SOLO" == FBInstant.context.getType() ? [2] : (r = app.model, i = platform.challenge_info, platform.challenge_info = null, s = FBInstant.context.isSizeBetween(3, null), h = s && s.answer, [4, FBInstant.context.getPlayersAsync()]) : [2];
                    case 1:
                        if (c = d.sent() || [], c = c.filter(function(e) {
                                return e.getID() != FBInstant.player.getID()
                            }), i && !(i.senderId == platform.userInfo.id && i.opponents.length <= 2)) return [3, 6];
                        l = "", !h && c.length > 0 && (l = c[0].getName()), console.log("sending challenge"), d.label = 2;
                    case 2:
                        return d.trys.push([2, 4, , 5]), [4, o(e, t, l)];
                    case 3:
                        return d.sent(), [3, 5];
                    case 4:
                        return m = d.sent(), console.log("sending challenge failed", m), [3, 5];
                    case 5:
                        return console.log("sending challenge done"), [3, 16];
                    case 6:
                        if (1 != i.opponents.length) return [3, 11];
                        u = i.opponents[0], console.log("sending challenge result"), l = h ? u.name : "", d.label = 7;
                    case 7:
                        return d.trys.push([7, 9, , 10]), [4, n(e, t, l, u)];
                    case 8:
                        return d.sent(), [3, 10];
                    case 9:
                        return g = d.sent(), console.log("sending challenge result failed", g), [3, 10];
                    case 10:
                        return console.log("sending challenge result done"), [3, 16];
                    case 11:
                        console.log("sending challenge leaderbooard"), d.label = 12;
                    case 12:
                        return d.trys.push([12, 14, , 15]), [4, a(e, t, i.opponents)];
                    case 13:
                        return d.sent(), [3, 15];
                    case 14:
                        return p = d.sent(), console.log("sending challenge leaderbooard failed", p), [3, 15];
                    case 15:
                        console.log("sending challenge leaderbooard done"), d.label = 16;
                    case 16:
                        return [2]
                }
            })
        })
    }

    function s(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var o;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), [4, Promise.race([Promise.all([new Promise(function(e) {
                            return setTimeout(e, 3e3)
                        }), i(e, t)]), new Promise(function(e) {
                            return setTimeout(e, 6e3)
                        })])];
                    case 1:
                        return n.sent(), [3, 3];
                    case 2:
                        return o = n.sent(), console.log("error", o), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }

    function h(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, o, n, a;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB)) return [2];
                        if ("SOLO" == FBInstant.context.getType()) return [2];
                        t = app.model, o = "context." + FBInstant.context.getID(), r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, FBInstant.getLeaderboardAsync(o)];
                    case 2:
                        return n = r.sent(), n.setScoreAsync(e, ""), [3, 4];
                    case 3:
                        return a = r.sent(), [3, 4];
                    case 4:
                        return [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: o
                        })];
                    case 5:
                        return r.sent(), [2]
                }
            })
        })
    }

    function c(e, o, n) {
        return void 0 === n && (n = !1), __awaiter(this, void 0, void 0, function() {
            var a, r, i, s, h;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        a = ["Wow, it's real cool.", "Clear up all the snow!", "Let me help you!"], c.label = 1;
                    case 1:
                        return c.trys.push([1, 7, , 8]), r = new ShareImage, i = r.InitShareCommon("share" + Math.randInt(1, 3) + "_jpg", FBInstant.player.getPhoto()), [4, t(i)];
                    case 2:
                        return s = c.sent(), console.log("r img done"), n ? [3, 4] : [4, platform.updateStatues(Object.assign({
                            type: e
                        }, o), {
                            text: a.random(),
                            image: s,
                            cta: "Play",
                            template: e
                        })];
                    case 3:
                        return c.sent(), [3, 6];
                    case 4:
                        return [4, platform.share({
                            img: s,
                            text: a.random(),
                            cta: "Play",
                            data: Object.assign({
                                type: e
                            }, o)
                        })];
                    case 5:
                        c.sent(), c.label = 6;
                    case 6:
                        return [3, 8];
                    case 7:
                        return h = c.sent(), console.log("update Failed" + JSON.stringify(h)), [3, 8];
                    case 8:
                        return [2]
                }
            })
        })
    }

    function l(e, o) {
        return __awaiter(this, void 0, void 0, function() {
            var n, a, r, i, s, h;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return n = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: o
                        }, a = {
                            level: e,
                            senderId: n.playerId,
                            opponents: [n]
                        }, r = "My score is " + o + "s! Can you do better?", console.log("r image"), i = new ShareImage, [4, t(i.InitShareImage1(e, n.photo, o))];
                    case 1:
                        return s = c.sent(), console.log("r done"), a.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.share({
                            img: s,
                            text: "[Level " + e + "] " + r,
                            cta: "CHALLENGE",
                            data: Object.assign({
                                type: "challenge"
                            }, {
                                challenge_info: a
                            })
                        })];
                    case 2:
                        return h = c.sent(), [2, h]
                }
            })
        })
    }
    e.testl = r, e.challengePost = s, e.sendLeadboardUpdate = h, e.sendGenericUpdate = c, e.challengeShare = l
}(ShareHelper || (ShareHelper = {})), egret.Bitmap.prototype.pos = function(e, t, o, n) {
    this.x = e, this.y = t, this.width = o, this.height = n, this.anchorOffsetX = o / 2, this.anchorOffsetY = n / 2
};
var ShareImage = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.UserName = [], t.UserID = [], t.UserImage = [], t.UserScore = [], t.x = 20, t.y = 500, t
    }
    return __extends(t, e), t.prototype.InitShareCommon = function(e, t) {
        this.NumReady = 1, this.NumReadyNow = 0;
        var o = new egret.Bitmap(RES.getRes(e));
        return this.addChild(o), o.pos(300, 157, 600, 314), this.CreateImageHead2(80, 80, t), this
    }, t.prototype.InitShareImage1 = function(e, t, o) {
        return this.NumReady = 1, this.NumReadyNow = 0, this.CreateImageBg("share_challenge_bg1_png", e, 1), this.CreateImageHead(300, 100, t, 1, 0), this.CreateLabelScore(25, 150, o, 1), this
    }, t.prototype.InitShareImage2 = function(e, t, o) {
        return this.NumReady = 2, this.NumReadyNow = 0, console.log("shareimgphoto:" + t), console.log("shareimgscore:" + o), this.CreateImageBg("share_challenge_bg2_png", e, 2), o[0] <= o[1] ? this.CreateImageKing(135, 167, 1) : this.CreateImageKing(465, 167, 2), this.CreateLabelScore(135, 280, o[0], 2), this.CreateLabelScore(465, 280, o[1], 2), this.CreateImageHead(135, 167, t[0], 1, 0), this.CreateImageHead(465, 167, t[1], 1, 0), this
    }, t.prototype.InitShareImage = function(e, t, o) {
        var n = o.length;
        n > 6 && (n = 6), this.NumIndex = t, this.NumReady = n, this.NumReadyNow = 0;
        var a = o.map(function(e) {
                return e.name
            }),
            r = o.map(function(e) {
                return e.photo
            }),
            i = o.map(function(e) {
                return e.score
            });
        return this.CreateImageBg("share_challenge_bg3_png", e, 3), 3 == n ? (this.CreateImageKing(300, 140, 2), this.CreateLabelScore(120, 280, i[1], 3), this.CreateLabelScore(300, 280, i[0], 3), this.CreateLabelScore(480, 280, i[2], 3), this.CreateLabelName(120, 238, a[1], 1), this.CreateLabelName(300, 238, a[0], 0), this.CreateLabelName(480, 238, a[2], 2), this.CreateImageHead(120, 140, r[1], 3, 2), this.CreateImageHead(300, 140, r[0], 2, 1), this.CreateImageHead(480, 140, r[2], 3, 3)) : 4 == n ? (this.CreateImageKing(90, 140, 2), this.CreateLabelScore(90, 280, i[0], 3), this.CreateLabelScore(230, 280, i[1], 3), this.CreateLabelScore(370, 280, i[2], 3), this.CreateLabelScore(510, 280, i[3], 3), this.CreateLabelName(90, 238, a[0], 0), this.CreateLabelName(230, 238, a[1], 1), this.CreateLabelName(370, 238, a[2], 2), this.CreateLabelName(510, 238, a[3], 3), this.CreateImageHead(90, 140, r[0], 2, 1), this.CreateImageHead(230, 140, r[1], 3, 2), this.CreateImageHead(370, 140, r[2], 3, 3), this.CreateImageHead(510, 140, r[3], 3, 4)) : 5 == n ? (this.CreateImageKing(80, 140, 2), this.CreateLabelScore(80, 280, i[0], 3), this.CreateLabelScore(340, 90, i[1], 3), this.CreateLabelScore(540, 90, i[2], 3), this.CreateLabelScore(340, 220, i[3], 3), this.CreateLabelScore(540, 220, i[4], 3), this.CreateLabelName(80, 238, a[0], 0), this.CreateLabelName(260, 155, a[1], 1), this.CreateLabelName(440, 155, a[2], 2), this.CreateLabelName(260, 285, a[3], 3), this.CreateLabelName(440, 285, a[4], 4), this.CreateImageHead(80, 140, r[0], 2, 1), this.CreateImageHead(260, 90, r[1], 3, 2), this.CreateImageHead(440, 90, r[2], 3, 3), this.CreateImageHead(260, 220, r[3], 3, 4), this.CreateImageHead(440, 220, r[4], 3, 5)) : (this.CreateImageKing(260, 90, 3), this.CreateLabelScore(160, 90, i[1], 3), this.CreateLabelScore(340, 90, i[0], 3), this.CreateLabelScore(520, 90, i[2], 3), this.CreateLabelScore(160, 220, i[3], 3), this.CreateLabelScore(340, 220, i[4], 3), this.CreateLabelScore(520, 220, i[5], 3), this.CreateLabelName(80, 150, a[1], 1), this.CreateLabelName(260, 150, a[0], 0), this.CreateLabelName(440, 150, a[2], 2), this.CreateLabelName(80, 280, a[3], 3), this.CreateLabelName(260, 280, a[4], 4), this.CreateLabelName(440, 280, a[5], 5), this.CreateImageHead(80, 90, r[1], 3, 2), this.CreateImageHead(260, 90, r[0], 3, 1), this.CreateImageHead(440, 90, r[2], 3, 3), this.CreateImageHead(80, 220, r[3], 3, 4), this.CreateImageHead(260, 220, r[4], 3, 5), this.CreateImageHead(440, 220, r[5], 3, 6)), this
    }, t.prototype.CreateImageBg = function(e, t, o) {
        var n = new egret.Bitmap(RES.getRes(e));
        this.addChild(n), n.pos(300, 157, 600, 314);
        var a = new egret.TextField;
        this.addChild(a), a.textColor = 16767243, a.size = 35, a.bold = !0, a.text = "LEVEL " + t, 1 == o ? (a.x = 25, a.y = 50, a.anchorOffsetX = 0) : 2 == o ? (a.x = 300, a.y = 50, a.size = 40, a.anchorOffsetX = a.width / 2) : 3 == o && (a.x = 580, a.y = 28, a.size = 32, a.anchorOffsetX = a.width), a.anchorOffsetY = a.height / 2
    }, t.prototype.CreateImageKing = function(e, t, o) {
        var n = new egret.Bitmap(RES.getRes("share_crown_png"));
        this.addChild(n), t -= 1 == o ? 105 : 2 == o ? 85 : 55, n.pos(e, t, 66, 58)
    }, t.prototype.CreateImageHead = function(e, t, o, n, a) {
        var r = this,
            i = 150;
        2 == n ? i = 104 : 3 == n && (i = 72);
        var s = new egret.Bitmap;
        this.addChild(s), s.pos(e, t, i, i), RES.getResByUrl(o, function(e) {
            s.texture = e;
            var t = new egret.Shape;
            t.graphics.beginFill(255), t.graphics.drawCircle(s.x, s.y, i / 2), t.graphics.endFill(), r.addChild(t), s.mask = t, r.NumReadyNow++, r.NumReadyNow >= r.NumReady && (console.log("准备好绘图了"), r.dispatchEventWith("ready_2_draw"))
        }, this, RES.ResourceItem.TYPE_IMAGE);
        var h = new egret.Bitmap(RES.getRes("share_challenge_head" + n + "_png"));
        if (this.addChild(h), h.pos(e, t, h.width, h.height), n > 1) {
            var c = new egret.TextField;
            this.addChild(c), c.x = e, 2 == n ? c.y = t + 53 : c.y = t + 30, c.bold = !0, c.text = a + "", c.size = 22, c.anchorOffsetX = c.width / 2, c.anchorOffsetY = c.height / 2
        }
    }, t.prototype.CreateImageHead2 = function(e, t, o) {
        var n = this,
            a = 100,
            r = new egret.Bitmap;
        this.addChild(r), r.pos(e, t, a, a), RES.getResByUrl(o, function(e) {
            r.texture = e;
            var t = new egret.Shape;
            t.graphics.beginFill(255), t.graphics.drawCircle(r.x, r.y, a / 2), t.graphics.endFill(), n.addChild(t), r.mask = t, n.NumReadyNow++, n.NumReadyNow >= n.NumReady && (console.log("准备好绘图了"), n.dispatchEventWith("ready_2_draw"))
        }, this, RES.ResourceItem.TYPE_IMAGE);
        var i = new egret.Bitmap(RES.getRes("sharehead_png"));
        this.addChild(i), i.pos(e, t, 118, 118)
    }, t.prototype.CreateLabelScore = function(e, t, o, n) {
        var a = new egret.TextField;
        this.addChild(a), a.x = e, a.y = t, a.bold = !0, a.text = o + " s", 1 == n ? (a.size = 40, a.anchorOffsetX = 0) : 2 == n ? (a.size = 36, a.anchorOffsetX = a.width / 2) : (a.size = 24, a.anchorOffsetX = a.width / 2), a.anchorOffsetY = a.height / 2
    }, t.prototype.CreateLabelName = function(e, t, o, n) {
        var a = new egret.TextField;
        this.addChild(a), a.x = e, a.y = t, a.text = o, a.size = 17, a.width > 130 && (a.width = 130), a.wordWrap = !0, n == this.NumIndex && (a.textColor = 16767243), a.anchorOffsetX = a.width / 2, a.anchorOffsetY = a.height / 2
    }, t
}(egret.Sprite);
__reflect(ShareImage.prototype, "ShareImage");