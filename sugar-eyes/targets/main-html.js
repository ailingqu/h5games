/** Cooked with Flambe, https://getflambe.com */
'use strict';
(function(bd) {
    function r(a, b) {
        function c() {}
        c.prototype = a;
        var d = new c,
            f;
        for (f in b) d[f] = b[f];
        b.toString !== Object.prototype.toString && (d.toString = b.toString);
        return d
    }

    function cd(a) {
        return a instanceof Array ? function() {
            return G.iter(a)
        } : "function" == typeof a.iterator ? E(a, a.iterator) : a.iterator
    }

    function E(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = jd++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var e = {},
        q = function() {
            return w.__string_rec(this, "")
        },
        ha = function(a, b) {
            this.r = RegExp(a, b.split("u").join(""))
        };
    e.EReg = ha;
    ha.__name__ = ["EReg"];
    ha.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a];
            throw new n("EReg::matched");
        },
        matchedPos: function() {
            if (null == this.r.m) throw new n("No string matched");
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        split: function(a) {
            return a.replace(this.r, "#__delim__#").split("#__delim__#")
        },
        __class__: ha
    };
    var G = function() {};
    e.HxOverrides = G;
    G.__name__ = ["HxOverrides"];
    G.strDate = function(a) {
        switch (a.length) {
            case 8:
                var a = a.split(":"),
                    b = new Date;
                b.setTime(0);
                b.setUTCHours(a[0]);
                b.setUTCMinutes(a[1]);
                b.setUTCSeconds(a[2]);
                return b;
            case 10:
                return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
            case 19:
                return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0],
                    a[1] - 1, a[2], b[0], b[1], b[2]);
            default:
                throw new n("Invalid date format : " + a);
        }
    };
    G.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    G.substr = function(a, b, c) {
        if (null == c) c = a.length;
        else if (0 > c)
            if (0 == b) c = a.length + c;
            else return "";
        return a.substr(b, c)
    };
    G.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    };
    G.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var vb = function() {};
    e.Lambda =
        vb;
    vb.__name__ = ["Lambda"];
    vb.array = function(a) {
        for (var b = [], a = cd(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    vb.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var d = cd(a)(); d.hasNext();) d.next(), ++c;
        else
            for (d = cd(a)(); d.hasNext();) {
                var f = d.next();
                b(f) && ++c
            }
        return c
    };
    var wb = function() {
        this.length = 0
    };
    e.List = wb;
    wb.__name__ = ["List"];
    wb.prototype = {
        add: function(a) {
            a = new ic(a, null);
            null == this.h ? this.h = a : this.q.next = a;
            this.q = a;
            this.length++
        },
        iterator: function() {
            return new jc(this.h)
        },
        __class__: wb
    };
    var ic = function(a, b) {
        this.item = a;
        this.next = b
    };
    e["_List.ListNode"] = ic;
    ic.__name__ = ["_List", "ListNode"];
    ic.prototype = {
        __class__: ic
    };
    var jc = function(a) {
        this.head = a
    };
    e["_List.ListIterator"] = jc;
    jc.__name__ = ["_List", "ListIterator"];
    jc.prototype = {
        hasNext: function() {
            return null != this.head
        },
        next: function() {
            var a = this.head.item;
            this.head = this.head.next;
            return a
        },
        __class__: jc
    };
    Math.__name__ = ["Math"];
    var K = function() {};
    e.Reflect = K;
    K.__name__ = ["Reflect"];
    K.field = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    };
    K.getProperty = function(a, b) {
        var c;
        if (null == a) return null;
        var d;
        d = a.__properties__ ? c = a.__properties__["get_" + b] : !1;
        return d ? a[c]() : a[b]
    };
    K.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                d;
            for (d in a) "__id__" != d && "hx__closures__" != d && c.call(a, d) && b.push(d)
        }
        return b
    };
    K.isFunction = function(a) {
        return "function" == typeof a ? !(a.__name__ || a.__ename__) : !1
    };
    K.deleteField = function(a, b) {
        if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b];
        return !0
    };
    var s = function() {};
    e.Std = s;
    s.__name__ = ["Std"];
    s.string = function(a) {
        return w.__string_rec(a, "")
    };
    s.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == G.cca(a, 1) || 88 == G.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    s.random = function(a) {
        return 0 >= a ? 0 : Math.floor(Math.random() * a)
    };
    var kc = function() {
        this.b = ""
    };
    e.StringBuf = kc;
    kc.__name__ = ["StringBuf"];
    kc.prototype = {
        __class__: kc
    };
    var ba = function() {};
    e.StringTools = ba;
    ba.__name__ = ["StringTools"];
    ba.startsWith = function(a, b) {
        return a.length >= b.length ? G.substr(a, 0, b.length) ==
            b : !1
    };
    ba.lpad = function(a, b, c) {
        if (0 >= b.length) return a;
        for (; a.length < c;) a = b + a;
        return a
    };
    ba.replace = function(a, b, c) {
        return a.split(b).join(c)
    };
    var p = e.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    p.TNull = ["TNull", 0];
    p.TNull.toString = q;
    p.TNull.__enum__ = p;
    p.TInt = ["TInt", 1];
    p.TInt.toString = q;
    p.TInt.__enum__ = p;
    p.TFloat = ["TFloat", 2];
    p.TFloat.toString = q;
    p.TFloat.__enum__ = p;
    p.TBool = ["TBool", 3];
    p.TBool.toString = q;
    p.TBool.__enum__ =
        p;
    p.TObject = ["TObject", 4];
    p.TObject.toString = q;
    p.TObject.__enum__ = p;
    p.TFunction = ["TFunction", 5];
    p.TFunction.toString = q;
    p.TFunction.__enum__ = p;
    p.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = p;
        a.toString = q;
        return a
    };
    p.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = p;
        a.toString = q;
        return a
    };
    p.TUnknown = ["TUnknown", 8];
    p.TUnknown.toString = q;
    p.TUnknown.__enum__ = p;
    var P = function() {};
    e.Type = P;
    P.__name__ = ["Type"];
    P.getClassName = function(a) {
        a = a.__name__;
        return null == a ? null : a.join(".")
    };
    P.getEnumName = function(a) {
        return a.__ename__.join(".")
    };
    P.resolveClass = function(a) {
        a = e[a];
        return null == a || !a.__name__ ? null : a
    };
    P.resolveEnum = function(a) {
        a = e[a];
        return null == a || !a.__ename__ ? null : a
    };
    P.createEmptyInstance = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    };
    P.createEnum = function(a, b, c) {
        var d = K.field(a, b);
        if (null == d) throw new n("No such constructor " + b);
        if (K.isFunction(d)) {
            if (null == c) throw new n("Constructor " + b + " need parameters");
            return d.apply(a, c)
        }
        if (null != c && 0 != c.length) throw new n("Constructor " + b + " does not need parameters");
        return d
    };
    P["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return p.TBool;
            case "function":
                return a.__name__ || a.__ename__ ? p.TObject : p.TFunction;
            case "number":
                return Math.ceil(a) == a % 2147483648 ? p.TInt : p.TFloat;
            case "object":
                if (null == a) return p.TNull;
                var b = a.__enum__;
                if (null != b) return p.TEnum(b);
                a = w.getClass(a);
                return null != a ? p.TClass(a) : p.TObject;
            case "string":
                return p.TClass(String);
            case "undefined":
                return p.TNull;
            default:
                return p.TUnknown
        }
    };
    var pa = function() {};
    e["flambe.util.Disposable"] = pa;
    pa.__name__ = ["flambe", "util", "Disposable"];
    pa.prototype = {
        __class__: pa
    };
    var B = function() {
        this._flags = 0;
        this.owner = this.next = null
    };
    e["flambe.Component"] = B;
    B.__name__ = ["flambe", "Component"];
    B.__interfaces__ = [pa];
    B.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onStart: function() {},
        onStop: function() {},
        onUpdate: function() {},
        dispose: function() {
            null != this.owner && this.owner.remove(this)
        },
        get_name: function() {
            return null
        },
        __class__: B,
        __properties__: {
            get_name: "get_name"
        }
    };
    var xb = function() {
        B.call(this);
        this._disposables = []
    };
    e["flambe.Disposer"] = xb;
    xb.__name__ = ["flambe", "Disposer"];
    xb.__super__ = B;
    xb.prototype = r(B.prototype, {
        get_name: function() {
            return "Disposer_4"
        },
        add: function(a) {
            this._disposables.push(a);
            return this
        },
        connect0: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        onRemoved: function() {
            this.freeDisposables()
        },
        dispose: function() {
            B.prototype.dispose.call(this);
            this.freeDisposables()
        },
        freeDisposables: function() {
            var a = this._disposables;
            this._disposables = [];
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                c.dispose()
            }
        },
        __class__: xb
    });
    var m = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    e["flambe.Entity"] = m;
    m.__name__ = ["flambe", "Entity"];
    m.__interfaces__ = [pa];
    m.prototype = {
        add: function(a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) {
            for (var b =
                    null, c = this.firstComponent; null != c;) {
                var d = c.next;
                if (c == a) return null == b ? this.firstComponent = d : (b.owner = this, b.next = d), delete this._compMap[c.get_name()], 0 != (c._flags & 1) && (c.onStop(), c._flags &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = d
            }
            return !1
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, d = this.firstChild; null != d;) c = d, d = d.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next = this.firstChild, this.firstChild = a;
            return this
        },
        removeChild: function(a) {
            for (var b = null, c = this.firstChild; null != c;) {
                var d = c.next;
                if (c == a) {
                    null == b ? this.firstChild = d : b.next = d;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = d
            }
        },
        disposeChildren: function() {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: m
    };
    var Rc = function() {};
    e["flambe.util.PackageLog"] = Rc;
    Rc.__name__ = ["flambe", "util", "PackageLog"];
    var lc = function() {};
    e["flambe.platform.Platform"] = lc;
    lc.__name__ = ["flambe", "platform", "Platform"];
    lc.prototype = {
        __class__: lc
    };
    var qa = function() {};
    e["flambe.platform.html.HtmlPlatform"] = qa;
    qa.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    qa.__interfaces__ = [lc];
    qa.prototype = {
        init: function() {
            var a = this;
            x.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {}
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque",
                "true");
            this._stage = new u(b);
            this._pointer = new W;
            this._mouse = new yb(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new Pa;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var d = 0,
                f = function(c) {
                    if (!(1E3 > c.timeStamp - d)) {
                        var f = b.getBoundingClientRect(),
                            g = a.getX(c, f),
                            f = a.getY(c, f);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(),
                                    a._mouse.submitDown(g, f, c.button), b.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(g, f);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(g, f, c.button);
                                break;
                            case "DOMMouseScroll":
                            case "mousewheel":
                                a._mouse.submitScroll(g, f, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", f, !1);
            window.addEventListener("mousemove", f, !1);
            window.addEventListener("mouseup", f, !1);
            b.addEventListener("mousewheel", f, !1);
            b.addEventListener("DOMMouseScroll", f, !1);
            b.addEventListener("contextmenu",
                function(a) {
                    a.preventDefault()
                }, !1);
            var g = "undefined" != typeof window.ontouchstart,
                f = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (g || f) {
                var Sc = new zb(this._pointer, g ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = Sc;
                f = function(b) {
                    var c = g ? b.changedTouches : [b],
                        f = b.target.getBoundingClientRect();
                    d = b.timeStamp;
                    switch (b.type) {
                        case "MSPointerMove":
                        case "pointermove":
                        case "touchmove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) {
                                var e = c[b];
                                ++b;
                                var k = a.getX(e, f),
                                    i = a.getY(e, f);
                                Sc.submitMove((g ? e.identifier : e.pointerId) | 0, k, i)
                            }
                            break;
                        case "MSPointerUp":
                        case "pointerup":
                        case "touchcancel":
                        case "touchend":
                            for (b = 0; b < c.length;) e = c[b], ++b, k = a.getX(e, f), i = a.getY(e, f), Sc.submitUp((g ? e.identifier : e.pointerId) | 0, k, i);
                            break;
                        case "MSPointerDown":
                        case "pointerdown":
                        case "touchstart":
                            b.preventDefault();
                            x.SHOULD_HIDE_MOBILE_BROWSER && x.hideMobileBrowser();
                            for (b = 0; b < c.length;) e = c[b], ++b, k = a.getX(e, f), i = a.getY(e, f), Sc.submitDown((g ? e.identifier : e.pointerId) | 0, k, i)
                    }
                };
                g ? (b.addEventListener("touchstart",
                    f, !1), b.addEventListener("touchmove", f, !1), b.addEventListener("touchend", f, !1), b.addEventListener("touchcancel", f, !1)) : (b.addEventListener("MSPointerDown", f, !1), b.addEventListener("MSPointerMove", f, !1), b.addEventListener("MSPointerUp", f, !1))
            } else this._touch = new Ab;
            var e = window.onerror;
            window.onerror = function(a, b, c) {
                j.uncaughtError.emit(a);
                return null != e ? e(a, b, c) : !1
            };
            var i = x.loadExtension("hidden", window.document);
            null != i.value ? (f = function() {
                    j.hidden.set__(K.field(window.document, i.field))
                }, f(null),
                window.document.addEventListener(i.prefix + "visibilitychange", f, !1)) : (f = function(a) {
                j.hidden.set__("pagehide" == a.type)
            }, window.addEventListener("pageshow", f, !1), window.addEventListener("pagehide", f, !1));
            j.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var M = x.loadExtension("requestAnimationFrame").value;
            if (null != M) {
                var h = window.performance,
                    m = null != h && x.polyfill("now", h);
                m && (this._lastUpdate = h.now());
                var l = null,
                    l = function(c) {
                        c = m ? h.now() :
                            c;
                        a.update(c);
                        M(l, b)
                    };
                M(l, b)
            } else window.setInterval(function() {
                var b = Date.now();
                a.update(b)
            }, 16);
            this._renderer.get_type()
        },
        loadAssetPack: function(a) {
            return (new F(this, a)).promise
        },
        getStage: function() {
            return this._stage
        },
        getStorage: function() {
            if (null == this._storage) {
                var a = Tc.getLocalStorage();
                this._storage = null != a ? new Bb(a) : new Cb
            }
            return this._storage
        },
        getLocale: function() {
            var a = window.navigator.language;
            null == a && (a = window.navigator.userLanguage);
            return a
        },
        createLogHandler: function() {
            return null
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            j.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getExternal: function() {
            null == this._external && (this._external = new Db);
            return this._external
        },
        getRenderer: function() {
            return this._renderer
        },
        getX: function(a, b) {
            return (a.clientX - b.left) * this._stage.get_width() / b.width
        },
        getY: function(a, b) {
            return (a.clientY - b.top) * this._stage.get_height() /
                b.height
        },
        createRenderer: function(a) {
            return new Qa(a)
        },
        __class__: qa
    };
    var X = function(a, b) {
        this._value = a;
        this._changed = null != b ? new Ha(b) : null
    };
    e["flambe.util.Value"] = X;
    X.__name__ = ["flambe", "util", "Value"];
    X.prototype = {
        watch: function(a) {
            a(this._value, this._value);
            return this.get_changed().connect(a)
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b));
            return a
        },
        get_changed: function() {
            null == this._changed && (this._changed = new Ha);
            return this._changed
        },
        toString: function() {
            return "" + s.string(this._value)
        },
        __class__: X,
        __properties__: {
            get_changed: "get_changed",
            set__: "set__"
        }
    };
    var Ra = function(a, b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    e["flambe.util.SignalConnection"] = Ra;
    Ra.__name__ = ["flambe", "util", "SignalConnection"];
    Ra.__interfaces__ = [pa];
    Ra.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this), this._signal = null)
        },
        __class__: Ra
    };
    var R = function(a) {
        this._head =
            null != a ? new Ra(this, a) : null;
        this._deferredTasks = null
    };
    e["flambe.util.SignalBase"] = R;
    R.__name__ = ["flambe", "util", "SignalBase"];
    R.prototype = {
        connectImpl: function(a, b) {
            var c = this,
                d = new Ra(this, a);
            this._head == R.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(d, b)
            }) : this.listAdd(d, b);
            return d
        },
        disconnect: function(a) {
            var b = this;
            this._head == R.DISPATCHING_SENTINEL ? this.defer(function() {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        defer: function(a) {
            for (var b = null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new mc(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() {
            var a = this._head;
            this._head = R.DISPATCHING_SENTINEL;
            return a
        },
        didEmit: function(a) {
            this._head = a;
            a = this._deferredTasks;
            for (this._deferredTasks = null; null != a;) a.fn(), a = a.next
        },
        listAdd: function(a, b) {
            if (b) a._next = this._head, this._head = a;
            else {
                for (var c = null, d = this._head; null != d;) c = d, d = d._next;
                null != c ? c._next = a : this._head = a
            }
        },
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c;) {
                if (c == a) {
                    a = c._next;
                    null == b ? this._head = a : b._next = a;
                    break
                }
                b = c;
                c = c._next
            }
        },
        __class__: R
    };
    var Ha = function(a) {
        R.call(this, a)
    };
    e["flambe.util.Signal2"] = Ha;
    Ha.__name__ = ["flambe", "util", "Signal2"];
    Ha.__super__ = R;
    Ha.prototype = r(R.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a, b) {
            var c = this;
            this._head == R.DISPATCHING_SENTINEL ? this.defer(function() {
                c.emitImpl(a, b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(), d = c; null != d;) d._listener(a, b), d.stayInList || d.dispose(), d = d._next;
            this.didEmit(c)
        },
        __class__: Ha
    });
    var N = function(a) {
        R.call(this, a)
    };
    e["flambe.util.Signal1"] = N;
    N.__name__ = ["flambe", "util", "Signal1"];
    N.__super__ = R;
    N.prototype = r(R.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a) {
            var b = this;
            this._head == R.DISPATCHING_SENTINEL ? this.defer(function() {
                b.emitImpl(a)
            }) : this.emitImpl(a)
        },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(), c = c._next;
            this.didEmit(b)
        },
        __class__: N
    });
    var L = function(a,
        b) {
        this._behavior = null;
        X.call(this, a, b)
    };
    e["flambe.animation.AnimatedFloat"] = L;
    L.__name__ = ["flambe", "animation", "AnimatedFloat"];
    L.__super__ = X;
    L.prototype = r(X.prototype, {
        set__: function(a) {
            this._behavior = null;
            return X.prototype.set__.call(this, a)
        },
        update: function(a) {
            null != this._behavior && (X.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null))
        },
        animate: function(a, b, c, d) {
            this.set__(a);
            this.animateTo(b, c, d)
        },
        animateTo: function(a, b, c) {
            this.set_behavior(new cb(this._value,
                a, b, c))
        },
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: L,
        __properties__: r(X.prototype.__properties__, {
            set_behavior: "set_behavior"
        })
    });
    var j = function() {};
    e["flambe.System"] = j;
    j.__name__ = ["flambe", "System"];
    j.init = function() {
        j._calledInit || (j._platform.init(), j._calledInit = !0)
    };
    var nc = function(a) {
        this._handler = a
    };
    e["flambe.util.Logger"] = nc;
    nc.__name__ = ["flambe", "util", "Logger"];
    nc.prototype = {
        __class__: nc
    };
    var Eb = function() {};
    e["flambe.Log"] = Eb;
    Eb.__name__ = ["flambe", "Log"];
    Eb.__super__ = Rc;
    Eb.prototype = r(Rc.prototype, {
        __class__: Eb
    });
    var oc = function(a) {
        null == a && (a = 1);
        this._realDt = 0;
        B.call(this);
        this.scale = new L(a)
    };
    e["flambe.SpeedAdjuster"] = oc;
    oc.__name__ = ["flambe", "SpeedAdjuster"];
    oc.__super__ = B;
    oc.prototype = r(B.prototype, {
        get_name: function() {
            return "SpeedAdjuster_9"
        },
        onUpdate: function(a) {
            0 < this._realDt && (a = this._realDt, this._realDt = 0);
            this.scale.update(a)
        },
        __class__: oc
    });
    var pc = function() {};
    e["flambe.animation.Behavior"] = pc;
    pc.__name__ = ["flambe", "animation", "Behavior"];
    pc.prototype = {
        __class__: pc
    };
    var J = function() {};
    e["flambe.animation.Ease"] = J;
    J.__name__ = ["flambe", "animation", "Ease"];
    J.linear = function(a) {
        return a
    };
    J.quadOut = function(a) {
        return a * (2 - a)
    };
    J.cubeOut = function(a) {
        return 1 + --a * a * a
    };
    J.bounceOut = function(a) {
        return 0.36363636363636365 > a ? 7.5625 * a * a : 0.7272727272727273 > a ? 7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75 : 0.9090909090909091 > a ? 7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375 : 7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) +
            0.984375
    };
    J.circInOut = function(a) {
        return 0.5 >= a ? (Math.sqrt(1 - 4 * a * a) - 1) / -2 : (Math.sqrt(1 - (2 * a - 2) * (2 * a - 2)) + 1) / 2
    };
    J.backIn = function(a) {
        return a * a * (2.70158 * a - 1.70158)
    };
    J.backOut = function(a) {
        return 1 - --a * a * (-2.70158 * a - 1.70158)
    };
    var cb = function(a, b, c, d) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != d ? d : J.linear
    };
    e["flambe.animation.Tween"] = cb;
    cb.__name__ = ["flambe", "animation", "Tween"];
    cb.__interfaces__ = [pc];
    cb.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >=
                this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: cb
    };
    var Ia = function() {};
    e["flambe.asset.Asset"] = Ia;
    Ia.__name__ = ["flambe", "asset", "Asset"];
    Ia.__interfaces__ = [pa];
    Ia.prototype = {
        __class__: Ia
    };
    var h = e["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe", "asset", "AssetFormat"],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    h.WEBP = ["WEBP", 0];
    h.WEBP.toString =
        q;
    h.WEBP.__enum__ = h;
    h.JXR = ["JXR", 1];
    h.JXR.toString = q;
    h.JXR.__enum__ = h;
    h.PNG = ["PNG", 2];
    h.PNG.toString = q;
    h.PNG.__enum__ = h;
    h.JPG = ["JPG", 3];
    h.JPG.toString = q;
    h.JPG.__enum__ = h;
    h.GIF = ["GIF", 4];
    h.GIF.toString = q;
    h.GIF.__enum__ = h;
    h.DDS = ["DDS", 5];
    h.DDS.toString = q;
    h.DDS.__enum__ = h;
    h.PVR = ["PVR", 6];
    h.PVR.toString = q;
    h.PVR.__enum__ = h;
    h.PKM = ["PKM", 7];
    h.PKM.toString = q;
    h.PKM.__enum__ = h;
    h.MP3 = ["MP3", 8];
    h.MP3.toString = q;
    h.MP3.__enum__ = h;
    h.M4A = ["M4A", 9];
    h.M4A.toString = q;
    h.M4A.__enum__ = h;
    h.OPUS = ["OPUS", 10];
    h.OPUS.toString =
        q;
    h.OPUS.__enum__ = h;
    h.OGG = ["OGG", 11];
    h.OGG.toString = q;
    h.OGG.__enum__ = h;
    h.WAV = ["WAV", 12];
    h.WAV.toString = q;
    h.WAV.__enum__ = h;
    h.Data = ["Data", 13];
    h.Data.toString = q;
    h.Data.__enum__ = h;
    var qc = function(a, b, c, d) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = d
    };
    e["flambe.asset.AssetEntry"] = qc;
    qc.__name__ = ["flambe", "asset", "AssetEntry"];
    qc.prototype = {
        __class__: qc
    };
    var Fb = function() {};
    e["flambe.asset.AssetPack"] = Fb;
    Fb.__name__ = ["flambe", "asset", "AssetPack"];
    Fb.__interfaces__ = [pa];
    Fb.prototype = {
        __class__: Fb
    };
    var Gb = function() {};
    e["flambe.asset.File"] = Gb;
    Gb.__name__ = ["flambe", "asset", "File"];
    Gb.__interfaces__ = [Ia];
    Gb.prototype = {
        __class__: Gb
    };
    var Q = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    e["flambe.asset.Manifest"] = Q;
    Q.__name__ = ["flambe", "asset", "Manifest"];
    Q.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = K.field(db.getType(Q).assets[0], a);
        if (null == c) {
            if (b) throw new n(U.withFields("Missing asset pack", ["name", a]));
            return null
        }
        var d = new Q;
        d.set_localBase("assets");
        for (var f = 0; f <
            c.length;) {
            var g = c[f];
            ++f;
            var e = g.name,
                k = a + "/" + e + "?v=" + s.string(g.md5),
                i = Q.inferFormat(e);
            i != h.Data && (e = U.removeFileExtension(e));
            d.add(e, k, g.bytes, i)
        }
        return d
    };
    Q.fromAssetsLocalized = function(a, b, c) {
        null == c && (c = !0);
        null == b && (b = j._platform.getLocale());
        if (null != b)
            for (b = b.split("-"); 0 < b.length;) {
                var d = Q.fromAssets(a + "_" + b.join("-"), !1);
                if (null != d) return d;
                b.pop()
            }
        return Q.fromAssets(a, c)
    };
    Q.exists = function(a) {
        var b = db.getType(Q).assets[0];
        return Object.prototype.hasOwnProperty.call(b, a)
    };
    Q.inferFormat =
        function(a) {
            a = U.getUrlExtension(a);
            if (null != a) switch (a.toLowerCase()) {
                case "dds":
                    return h.DDS;
                case "gif":
                    return h.GIF;
                case "jpeg":
                case "jpg":
                    return h.JPG;
                case "jxr":
                case "wdp":
                    return h.JXR;
                case "m4a":
                    return h.M4A;
                case "mp3":
                    return h.MP3;
                case "ogg":
                    return h.OGG;
                case "opus":
                    return h.OPUS;
                case "pkm":
                    return h.PKM;
                case "png":
                    return h.PNG;
                case "pvr":
                    return h.PVR;
                case "wav":
                    return h.WAV;
                case "webp":
                    return h.WEBP
            }
            return h.Data
        };
    Q.prototype = {
        add: function(a, b, c, d) {
            null == c && (c = 0);
            null == d && (d = Q.inferFormat(b));
            a = new qc(a, b, d, c);
            this._entries.push(a);
            return a
        },
        iterator: function() {
            return G.iter(this._entries)
        },
        getFullURL: function(a) {
            var b = null != this.get_remoteBase() && Q._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? U.joinPath(b, a.url) : a.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(a) {
            null != a && !ba.startsWith(a, "http://") && ba.startsWith(a, "https://");
            return this._localBase = a
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        __class__: Q,
        __properties__: {
            get_remoteBase: "get_remoteBase",
            set_localBase: "set_localBase",
            get_localBase: "get_localBase"
        }
    };
    var O = e["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",")
    };
    O.Normal = ["Normal", 0];
    O.Normal.toString = q;
    O.Normal.__enum__ = O;
    O.Add = ["Add", 1];
    O.Add.toString = q;
    O.Add.__enum__ = O;
    O.Multiply = ["Multiply", 2];
    O.Multiply.toString = q;
    O.Multiply.__enum__ = O;
    O.Screen = ["Screen", 3];
    O.Screen.toString = q;
    O.Screen.__enum__ = O;
    O.Mask = ["Mask", 4];
    O.Mask.toString = q;
    O.Mask.__enum__ =
        O;
    O.Copy = ["Copy", 5];
    O.Copy.toString = q;
    O.Copy.__enum__ = O;
    var Hb = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    e["flambe.math.Point"] = Hb;
    Hb.__name__ = ["flambe", "math", "Point"];
    Hb.prototype = {
        distanceTo: function(a, b) {
            return Math.sqrt(this.distanceToSquared(a, b))
        },
        distanceToSquared: function(a, b) {
            var c = this.x - a,
                d = this.y - b;
            return c * c + d * d
        },
        __class__: Hb
    };
    var o = function() {
        this.blendMode = this.scissor = null;
        var a = this;
        B.call(this);
        this._flags |= 54;
        this._localMatrix = new rc;
        var b = function() {
            a._flags |=
                24
        };
        this.x = new L(0, b);
        this.y = new L(0, b);
        this.rotation = new L(0, b);
        this.scaleX = new L(1, b);
        this.scaleY = new L(1, b);
        this.anchorX = new L(0, b);
        this.anchorY = new L(0, b);
        this.alpha = new L(1)
    };
    e["flambe.display.Sprite"] = o;
    o.__name__ = ["flambe", "display", "Sprite"];
    o.hitTest = function(a, b, c) {
        var d = a._compMap.Sprite_7;
        if (null != d) {
            if (6 != (d._flags & 6)) return null;
            d.getLocalMatrix().inverseTransform(b, c, o._scratchPoint) && (b = o._scratchPoint.x, c = o._scratchPoint.y);
            var f = d.scissor;
            if (null != f && !f.contains(b, c)) return null
        }
        a =
            o.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != d && d.containsLocal(b, c) ? d : null
    };
    o.render = function(a, b) {
        var c = a._compMap.Sprite_7;
        if (null != c) {
            var d = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= d) return;
            b.save();
            1 > d && b.multiplyAlpha(d);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var d = c.getLocalMatrix(),
                f = d.m02,
                g = d.m12;
            0 != (c._flags & 32) && (f = Math.round(f), g = Math.round(g));
            b.transform(d.m00, d.m10, d.m01, d.m11, f, g);
            d = c.scissor;
            null != d && b.applyScissor(d.x, d.y, d.width, d.height);
            c.draw(b)
        }
        d = a._compMap.Director_8;
        if (null != d) {
            d = d.occludedScenes;
            for (f = 0; f < d.length;) g = d[f], ++f, o.render(g, b)
        }
        for (d = a.firstChild; null != d;) f = d.next, o.render(d, b), d = f;
        null != c && b.restore()
    };
    o.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var d = o.hitTestBackwards(a.next, b, c);
            return null != d ? d : o.hitTest(a, b, c)
        }
        return null
    };
    o.__super__ = B;
    o.prototype = r(B.prototype, {
        get_name: function() {
            return "Sprite_7"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() &&
                0 <= b ? b < this.getNaturalHeight() : !1
        },
        getLocalMatrix: function() {
            0 != (this._flags & 8) && (this._flags &= -9, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        setAnchor: function(a, b) {
            this.anchorX.set__(a);
            this.anchorY.set__(b);
            return this
        },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() /
                2);
            return this
        },
        setXY: function(a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setAlpha: function(a) {
            this.alpha.set__(a);
            return this
        },
        setScale: function(a) {
            this.scaleX.set__(a);
            this.scaleY.set__(a);
            return this
        },
        setScaleXY: function(a, b) {
            this.scaleX.set__(a);
            this.scaleY.set__(b);
            return this
        },
        disablePixelSnapping: function() {
            this.set_pixelSnapping(!1);
            return this
        },
        onAdded: function() {
            0 != (this._flags & 64) && this.connectHover()
        },
        onRemoved: function() {
            null != this._hoverConnection && (this._hoverConnection.dispose(),
                this._hoverConnection = null)
        },
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a)
        },
        draw: function() {},
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite_7;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new N);
            return this._pointerDown
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new N);
            return this._pointerUp
        },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = j._platform.getPointer().move.connect(function(b) {
                for (var c = b.hit; null != c;) {
                    if (c == a) return;
                    c = c.getParentSprite()
                }
                null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                a._hoverConnection.dispose();
                a._hoverConnection = null
            }))
        },
        set_visible: function(a) {
            this._flags = Ib.set(this._flags, 2, a);
            return a
        },
        set_pointerEnabled: function(a) {
            this._flags =
                Ib.set(this._flags, 4, a);
            return a
        },
        set_pixelSnapping: function(a) {
            this._flags = Ib.set(this._flags, 32, a);
            return a
        },
        onPointerDown: function(a) {
            this.onHover(a);
            null != this._pointerDown && this._pointerDown.emit(a)
        },
        onPointerMove: function(a) {
            this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a)
        },
        onHover: function(a) {
            if (0 == (this._flags & 64) && (this._flags |= 64, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(a), this.connectHover()
        },
        onPointerUp: function(a) {
            1 ==
                a.source[1] && (null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a), this._flags &= -65, null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null));
            null != this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: o,
        __properties__: r(B.prototype.__properties__, {
            get_pointerUp: "get_pointerUp",
            get_pointerDown: "get_pointerDown",
            set_pointerEnabled: "set_pointerEnabled",
            set_pixelSnapping: "set_pixelSnapping",
            set_visible: "set_visible"
        })
    });
    var Ja = function(a, b, c) {
        o.call(this);
        this.color = a;
        this.width = new L(b);
        this.height = new L(c)
    };
    e["flambe.display.FillSprite"] = Ja;
    Ja.__name__ = ["flambe", "display", "FillSprite"];
    Ja.__super__ = o;
    Ja.prototype = r(o.prototype, {
        draw: function(a) {
            a.fillRect(this.color, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        onUpdate: function(a) {
            o.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: Ja
    });
    var Jb = function(a) {
        this._kernings =
            null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a
    };
    e["flambe.display.Glyph"] = Jb;
    Jb.__name__ = ["flambe", "display", "Glyph"];
    Jb.prototype = {
        draw: function(a, b, c) {
            0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        getKerning: function(a) {
            return null != this._kernings ? this._kernings.h[a] | 0 : 0
        },
        setKerning: function(a, b) {
            null == this._kernings && (this._kernings = new ka);
            this._kernings.h[a] = b
        },
        __class__: Jb
    };
    var la = function(a, b) {
        this.name = b;
        this._pack = a;
        this._file = a.getFile(b + ".fnt");
        this.reload()
    };
    e["flambe.display.Font"] = la;
    la.__name__ = ["flambe", "display", "Font"];
    la.prototype = {
        layoutText: function(a, b, c, d, f) {
            null == f && (f = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = S.Left);
            return new Ka(this, a, b, c, d, f)
        },
        reload: function() {
            this._glyphs = new ka;
            this._glyphs.h[la.NEWLINE.charCode] = la.NEWLINE;
            for (var a = new Sa(this._file.toString()), b = new ka, c = this.name.lastIndexOf("/"), c = 0 <= c ? G.substr(this.name,
                    0, c + 1) : "", d = a.keywords(); d.hasNext();) switch (d.next()) {
                case "char":
                    for (var f = null, g = a.pairs(); g.hasNext();) {
                        var e = g.next();
                        switch (e.key) {
                            case "height":
                                f.height = e.getInt();
                                break;
                            case "id":
                                f = new Jb(e.getInt());
                                break;
                            case "page":
                                e = e.getInt();
                                f.page = b.h[e];
                                break;
                            case "width":
                                f.width = e.getInt();
                                break;
                            case "x":
                                f.x = e.getInt();
                                break;
                            case "xadvance":
                                f.xAdvance = e.getInt();
                                break;
                            case "xoffset":
                                f.xOffset = e.getInt();
                                break;
                            case "y":
                                f.y = e.getInt();
                                break;
                            case "yoffset":
                                f.yOffset = e.getInt()
                        }
                    }
                    this._glyphs.set(f.charCode,
                        f);
                    break;
                case "common":
                    for (f = a.pairs(); f.hasNext();) g = f.next(), "lineHeight" == g.key && (this.lineHeight = g.getInt());
                    break;
                case "info":
                    for (f = a.pairs(); f.hasNext();) g = f.next(), "size" == g.key && (this.size = g.getInt());
                    break;
                case "kerning":
                    for (var f = null, e = g = 0, k = a.pairs(); k.hasNext();) {
                        var i = k.next();
                        switch (i.key) {
                            case "amount":
                                e = i.getInt();
                                break;
                            case "first":
                                f = this._glyphs.get(i.getInt());
                                break;
                            case "second":
                                g = i.getInt()
                        }
                    }
                    null != f && 0 != e && f.setKerning(g, e);
                    break;
                case "page":
                    f = 0;
                    g = null;
                    for (e = a.pairs(); e.hasNext();) switch (k =
                        e.next(), k.key) {
                        case "file":
                            g = k.getString();
                            break;
                        case "id":
                            f = k.getInt()
                    }
                    g = this._pack.getTexture(c + U.removeFileExtension(g));
                    b.h[f] = g
            }
        },
        __class__: la
    };
    var S = e["flambe.display.TextAlign"] = {
        __ename__: ["flambe", "display", "TextAlign"],
        __constructs__: ["Left", "Center", "Right"]
    };
    S.Left = ["Left", 0];
    S.Left.toString = q;
    S.Left.__enum__ = S;
    S.Center = ["Center", 1];
    S.Center.toString = q;
    S.Center.__enum__ = S;
    S.Right = ["Right", 2];
    S.Right.toString = q;
    S.Right.__enum__ = S;
    var Ka = function(a, b, c, d, f, g) {
        this.lines = 0;
        var e = this;
        this._font =
            a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + g);
        this.bounds = new eb;
        for (var k = [], g = 0, i = b.length; g < i;) {
            var M = g++,
                M = b.charCodeAt(M),
                M = a._glyphs.get(M);
            null != M && this._glyphs.push(M)
        }
        for (var b = -1, h = 0, j = 0, a = a._glyphs.get(10), g = function() {
                var a = e.bounds.width;
                e.bounds.width = a > h ? a : h;
                e.bounds.height += j;
                k[e.lines] = h;
                j = h = 0;
                ++e.lines
            }, i = 0; i < this._glyphs.length;) {
            M = this._glyphs[i];
            this._offsets[i] = Math.round(h);
            var l = 0 < d && h + M.width > d;
            l || M == a ? (l && (0 <= b ? (this._glyphs[b] = a, h = this._offsets[b],
                i = b) : this._glyphs.splice(i, 0, a)), b = -1, j = this._lineOffset, g()) : (32 == M.charCode && (b = i), h += M.xAdvance + f, l = M.height + M.yOffset, j > l || (j = l), i + 1 < this._glyphs.length && (h += M.getKerning(this._glyphs[i + 1].charCode)));
            ++i
        }
        g();
        f = 0;
        a = Ka.getAlignOffset(c, k[0], d);
        b = 1.79769313486231E308;
        g = -1.79769313486231E308;
        M = i = 0;
        for (l = this._glyphs.length; M < l;) {
            var m = this._glyphs[M];
            10 == m.charCode && (f += this._lineOffset, ++i, a = Ka.getAlignOffset(c, k[i], d));
            this._offsets[M] += a;
            var o = f + m.yOffset,
                b = b < o ? b : o,
                m = o + m.height;
            g > m || (g = m);
            ++M
        }
        this.bounds.x =
            Ka.getAlignOffset(c, this.bounds.width, d);
        this.bounds.y = b;
        this.bounds.height = g - b
    };
    e["flambe.display.TextLayout"] = Ka;
    Ka.__name__ = ["flambe", "display", "TextLayout"];
    Ka.getAlignOffset = function(a, b, c) {
        switch (a[1]) {
            case 0:
                return 0;
            case 1:
                return Math.round((c - b) / 2);
            case 2:
                return c - b
        }
    };
    Ka.prototype = {
        draw: function(a) {
            for (var b = 0, c = 0, d = this._glyphs.length; c < d;) {
                var f = this._glyphs[c];
                10 == f.charCode ? b += this._lineOffset : f.draw(a, this._offsets[c], b);
                ++c
            }
        },
        __class__: Ka
    };
    var Sa = function(a) {
        this._configText = a;
        this._keywordPattern =
            new ha("([A-Za-z]+)(.*)", "");
        this._pairPattern = new ha('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    e["flambe.display._Font.ConfigParser"] = Sa;
    Sa.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    Sa.advance = function(a, b) {
        var c = b.matchedPos();
        return G.substr(a, c.pos + c.len, a.length)
    };
    Sa.prototype = {
        keywords: function() {
            var a = this,
                b = this._configText;
            return {
                next: function() {
                    b = Sa.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return a._keywordPattern.match(b)
                }
            }
        },
        pairs: function() {
            var a = this,
                b = this._pairText;
            return {
                next: function() {
                    b = Sa.advance(b, a._pairPattern);
                    return new sc(a._pairPattern.matched(1), a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        __class__: Sa
    };
    var sc = function(a, b) {
        this.key = a;
        this._value = b
    };
    e["flambe.display._Font.ConfigPair"] = sc;
    sc.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    sc.prototype = {
        getInt: function() {
            return s.parseInt(this._value)
        },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null :
                G.substr(this._value, 1, this._value.length - 2)
        },
        __class__: sc
    };
    var tc = function() {};
    e["flambe.display.Graphics"] = tc;
    tc.__name__ = ["flambe", "display", "Graphics"];
    tc.prototype = {
        __class__: tc
    };
    var ra = function(a) {
        o.call(this);
        this.texture = a
    };
    e["flambe.display.ImageSprite"] = ra;
    ra.__name__ = ["flambe", "display", "ImageSprite"];
    ra.__super__ = o;
    ra.prototype = r(o.prototype, {
        draw: function(a) {
            null != this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() :
                0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: ra
    });
    var ia = e["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    ia.Portrait = ["Portrait", 0];
    ia.Portrait.toString = q;
    ia.Portrait.__enum__ = ia;
    ia.Landscape = ["Landscape", 1];
    ia.Landscape.toString = q;
    ia.Landscape.__enum__ = ia;
    var Kb = function() {};
    e["flambe.display.Texture"] = Kb;
    Kb.__name__ = ["flambe", "display", "Texture"];
    Kb.__interfaces__ = [Ia];
    Kb.prototype = {
        __class__: Kb,
        __properties__: {
            get_width: "get_width",
            get_height: "get_height"
        }
    };
    var Uc = function() {};
    e["flambe.display.SubTexture"] = Uc;
    Uc.__name__ = ["flambe", "display", "SubTexture"];
    Uc.__interfaces__ = [Kb];
    var xa = function(a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        o.call(this);
        this._font = a;
        this._text = b;
        this._align = S.Left;
        this._flags |= 128;
        var d = function() {
            c._flags |= 128
        };
        this.wrapWidth = new L(0, d);
        this.letterSpacing = new L(0, d);
        this.lineSpacing = new L(0, d)
    };
    e["flambe.display.TextSprite"] = xa;
    xa.__name__ = ["flambe", "display", "TextSprite"];
    xa.__super__ = o;
    xa.prototype = r(o.prototype, {
        draw: function(a) {
            this.updateLayout();
            this._layout.draw(a)
        },
        getNaturalWidth: function() {
            this.updateLayout();
            return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width
        },
        getNaturalHeight: function() {
            this.updateLayout();
            var a = this._layout.lines * (this._font.lineHeight + this.lineSpacing._value),
                b = this._layout.bounds.height;
            return a > b ? a : b
        },
        containsLocal: function(a, b) {
            this.updateLayout();
            return this._layout.bounds.contains(a,
                b)
        },
        setWrapWidth: function(a) {
            this.wrapWidth.set__(a);
            return this
        },
        setAlign: function(a) {
            this.set_align(a);
            return this
        },
        set_text: function(a) {
            a != this._text && (this._text = a, this._flags |= 128);
            return a
        },
        set_align: function(a) {
            a != this._align && (this._align = a, this._flags |= 128);
            return a
        },
        updateLayout: function() {
            0 != (this._flags & 128) && (this._flags &= -129, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function(a) {
            o.prototype.onUpdate.call(this,
                a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: xa,
        __properties__: r(o.prototype.__properties__, {
            set_align: "set_align",
            set_text: "set_text"
        })
    });
    var Y = e["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    Y.Left = ["Left", 0];
    Y.Left.toString = q;
    Y.Left.__enum__ = Y;
    Y.Middle = ["Middle", 1];
    Y.Middle.toString = q;
    Y.Middle.__enum__ = Y;
    Y.Right = ["Right", 2];
    Y.Right.toString = q;
    Y.Right.__enum__ = Y;
    Y.Unknown =
        function(a) {
            a = ["Unknown", 3, a];
            a.__enum__ = Y;
            a.toString = q;
            return a
        };
    var ma = e["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    ma.Default = ["Default", 0];
    ma.Default.toString = q;
    ma.Default.__enum__ = ma;
    ma.Button = ["Button", 1];
    ma.Button.toString = q;
    ma.Button.__enum__ = ma;
    ma.None = ["None", 2];
    ma.None.toString = q;
    ma.None.__enum__ = ma;
    var uc = function() {
        this.init(0, 0, 0, null)
    };
    e["flambe.input.MouseEvent"] = uc;
    uc.__name__ = ["flambe", "input", "MouseEvent"];
    uc.prototype = {
        init: function(a, b, c, d) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = d
        },
        __class__: uc
    };
    var Lb = e["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    Lb.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = Lb;
        a.toString = q;
        return a
    };
    Lb.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = Lb;
        a.toString = q;
        return a
    };
    var vc = function() {
        this.init(0, 0, 0, null, null)
    };
    e["flambe.input.PointerEvent"] = vc;
    vc.__name__ = ["flambe", "input", "PointerEvent"];
    vc.prototype = {
        init: function(a, b, c, d, f) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = d;
            this.source = f;
            this._stopped = !1
        },
        __class__: vc
    };
    var wc = function(a) {
        this.id = a;
        this._source = Lb.Touch(this)
    };
    e["flambe.input.TouchPoint"] = wc;
    wc.__name__ = ["flambe", "input", "TouchPoint"];
    wc.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: wc
    };
    var sa = function() {};
    e["flambe.math.FMath"] = sa;
    sa.__name__ = ["flambe", "math", "FMath"];
    sa.clamp = function(a, b, c) {
        return a < b ? b : a > c ? c : a
    };
    var rc = function() {
        this.identity()
    };
    e["flambe.math.Matrix"] =
        rc;
    rc.__name__ = ["flambe", "math", "Matrix"];
    rc.prototype = {
        set: function(a, b, c, d, f, g) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = f;
            this.m10 = b;
            this.m11 = d;
            this.m12 = g
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        compose: function(a, b, c, d, f) {
            var g = Math.sin(f),
                f = Math.cos(f);
            this.set(f * c, g * c, -g * d, f * d, a, b)
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function(a, b, c) {
            var d = this.determinant();
            if (0 ==
                d) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / d;
            c.y = (b * this.m00 - a * this.m10) / d;
            return !0
        },
        __class__: rc
    };
    var eb = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, d)
    };
    e["flambe.math.Rectangle"] = eb;
    eb.__name__ = ["flambe", "math", "Rectangle"];
    eb.prototype = {
        set: function(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.width = c;
            this.height = d
        },
        contains: function(a, b) {
            a -= this.x;
            if (0 <= this.width) {
                if (0 > a || a > this.width) return !1
            } else if (0 < a || a < this.width) return !1;
            b -= this.y;
            if (0 <= this.height) {
                if (0 > b || b > this.height) return !1
            } else if (0 < b || b < this.height) return !1;
            return !0
        },
        __class__: eb
    };
    var $ = function() {
        this._disposed = !1
    };
    e["flambe.platform.BasicAsset"] = $;
    $.__name__ = ["flambe", "platform", "BasicAsset"];
    $.__interfaces__ = [Ia];
    $.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() {},
        __class__: $
    };
    var La = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new Mb;
        this._bytesLoaded = new T;
        this._pack = new Nb(b,
            this);
        var d = vb.array(b);
        if (0 == d.length) this.handleSuccess();
        else {
            for (var f = new T, g = 0; g < d.length;) {
                var e = d[g];
                ++g;
                var k = e.name,
                    k = null != H[k] ? f.getReserved(k) : f.h[k];
                if (null == k) {
                    var k = [],
                        i = e.name;
                    null != H[i] ? f.setReserved(i, k) : f.h[i] = k
                }
                k.push(e)
            }
            this._assetsRemaining = vb.count(f);
            for (d = new ya(f, f.arrayKeys()); d.hasNext();) f = [d.next()], this.pickBestEntry(f[0], function(a) {
                return function(d) {
                    if (null != d) {
                        var f = b.getFullURL(d);
                        try {
                            c.loadEntry(f, d)
                        } catch (g) {
                            g instanceof n && (g = g.val), c.handleError(d, "Unexpected error: " +
                                s.string(g))
                        }
                        f = c.promise;
                        f.set_total(f._total + d.bytes)
                    } else d = a[0][0], La.isAudio(d.format) ? (f = ja.getInstance(), c.handleLoad(d, f)) : c.handleError(d, "Could not find a supported format to load")
                }
            }(f))
        }
    };
    e["flambe.platform.BasicAssetPackLoader"] = La;
    La.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    La.isAudio = function(a) {
        switch (a[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1
        }
    };
    La.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) {
            this.getAssetFormats(function(c) {
                for (var d =
                        0; d < c.length;) {
                    var f = c[d];
                    ++d;
                    for (var g = 0; g < a.length;) {
                        var e = a[g];
                        ++g;
                        if (e.format == f) {
                            b(e);
                            return
                        }
                    }
                }
                b(null)
            })
        },
        loadEntry: function() {},
        getAssetFormats: function() {},
        handleLoad: function(a, b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        c = this._pack.textures;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        c = this._pack.sounds;
                        break;
                    case 13:
                        c = this._pack.files
                }
                var d = a.name;
                null != H[d] ? c.setReserved(d, b) : c.h[d] = b;
                this._assetsRemaining -=
                    1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a, b) {
            var c = a.name,
                d = this._bytesLoaded;
            null != H[c] ? d.setReserved(c, b) : d.h[c] = b;
            c = 0;
            d = this._bytesLoaded;
            for (d = new ya(d, d.arrayKeys()); d.hasNext();) var f = d.next(),
                c = c + f;
            this.promise.set_progress(c)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(a, b) {
            this.promise.error.emit(U.withFields(b, ["url", a.url]))
        },
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: La
    };
    var Nb = function(a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new T;
        this.sounds = new T;
        this.files = new T
    };
    e["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = Nb;
    Nb.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    Nb.__interfaces__ = [Fb];
    Nb.prototype = {
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures,
                c = null != H[a] ? c.getReserved(a) : c.h[a];
            if (null == c && b) throw new n(U.withFields("Missing texture", ["name", a]));
            return c
        },
        getSound: function(a,
            b) {
            null == b && (b = !0);
            var c = this.sounds,
                c = null != H[a] ? c.getReserved(a) : c.h[a];
            if (null == c && b) throw new n(U.withFields("Missing sound", ["name", a]));
            return c
        },
        getFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files,
                c = null != H[a] ? c.getReserved(a) : c.h[a];
            if (null == c && b) throw new n(U.withFields("Missing file", ["name", a]));
            return c
        },
        dispose: function() {
            if (!this.disposed) {
                this.disposed = !0;
                for (var a = this.textures, a = new ya(a, a.arrayKeys()); a.hasNext();) a.next().dispose();
                this.textures = null;
                a = this.sounds;
                for (a = new ya(a,
                        a.arrayKeys()); a.hasNext();) a.next().dispose();
                this.sounds = null;
                a = this.files;
                for (a = new ya(a, a.arrayKeys()); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        __class__: Nb
    };
    var fb = function(a) {
        this._disposed = !1;
        this._content = a
    };
    e["flambe.platform.BasicFile"] = fb;
    fb.__name__ = ["flambe", "platform", "BasicFile"];
    fb.__interfaces__ = [Gb];
    fb.__super__ = $;
    fb.prototype = r($.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: fb
    });
    var xc =
        function() {};
    e["flambe.subsystem.MouseSystem"] = xc;
    xc.__name__ = ["flambe", "subsystem", "MouseSystem"];
    xc.prototype = {
        __class__: xc
    };
    var da = function(a) {
        this._pointer = a;
        this._source = Lb.Mouse(da._sharedEvent);
        this.down = new N;
        this.move = new N;
        this.up = new N;
        this.scroll = new N;
        this._y = this._x = 0;
        this._cursor = ma.Default;
        this._buttonStates = new ka
    };
    e["flambe.platform.BasicMouse"] = da;
    da.__name__ = ["flambe", "platform", "BasicMouse"];
    da.__interfaces__ = [xc];
    da.prototype = {
        submitDown: function(a, b, c) {
            this._buttonStates.exists(c) ||
                (this._buttonStates.h[c] = !0, this.prepare(a, b, yc.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(da._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit(da._sharedEvent)
        },
        submitUp: function(a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, yc.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(da._sharedEvent))
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head) return !1;
            this.scroll.emit(c);
            return !0
        },
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            da._sharedEvent.init(da._sharedEvent.id + 1, a, b, c)
        },
        __class__: da
    };
    var zc = function() {};
    e["flambe.subsystem.PointerSystem"] = zc;
    zc.__name__ = ["flambe", "subsystem", "PointerSystem"];
    zc.prototype = {
        __class__: zc,
        __properties__: {
            get_x: "get_x",
            get_y: "get_y"
        }
    };
    var W = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new N;
        this.move = new N;
        this.up = new N;
        this._x = a;
        this._y = b;
        this._isDown =
            c
    };
    e["flambe.platform.BasicPointer"] = W;
    W.__name__ = ["flambe", "platform", "BasicPointer"];
    W.__interfaces__ = [zc];
    W.prototype = {
        get_x: function() {
            return this._x
        },
        get_y: function() {
            return this._y
        },
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !0;
                var d = [],
                    f = o.hitTest(j.root, a, b);
                if (null != f)
                    for (var g = f.owner;;) {
                        var e = g._compMap.Sprite_7;
                        null != e && d.push(e);
                        g = g.parent;
                        if (null == g) break
                    }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerDown(W._sharedEvent), W._sharedEvent._stopped) return;
                this.down.emit(W._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var d = [],
                    f = o.hitTest(j.root, a, b);
                if (null != f)
                    for (var g = f.owner;;) {
                        var e = g._compMap.Sprite_7;
                        null != e && d.push(e);
                        g = g.parent;
                        if (null == g) break
                    }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerMove(W._sharedEvent), W._sharedEvent._stopped) return;
                this.move.emit(W._sharedEvent)
            }
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var d = [],
                    f = o.hitTest(j.root, a, b);
                if (null !=
                    f)
                    for (var g = f.owner;;) {
                        var e = g._compMap.Sprite_7;
                        null != e && d.push(e);
                        g = g.parent;
                        if (null == g) break
                    }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerUp(W._sharedEvent), W._sharedEvent._stopped) return;
                this.up.emit(W._sharedEvent)
            }
        },
        prepare: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            W._sharedEvent.init(W._sharedEvent.id + 1, a, b, c, d)
        },
        __class__: W,
        __properties__: {
            get_y: "get_y",
            get_x: "get_x"
        }
    };
    var Ma = function(a, b, c) {
        this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root =
            a;
        this._width = b;
        this._height = c
    };
    e["flambe.platform.BasicTexture"] = Ma;
    Ma.__name__ = ["flambe", "platform", "BasicTexture"];
    Ma.__interfaces__ = [Uc];
    Ma.__super__ = $;
    Ma.prototype = r($.prototype, {
        subTexture: function(a, b, c, d) {
            c = this.root.createTexture(c, d);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b;
            return c
        },
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: Ma,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width"
        }
    });
    var Vc = function() {};
    e["flambe.subsystem.TouchSystem"] = Vc;
    Vc.__name__ = ["flambe", "subsystem", "TouchSystem"];
    var zb = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new ka;
        this._points = [];
        this.down = new N;
        this.move = new N;
        this.up = new N
    };
    e["flambe.platform.BasicTouch"] = zb;
    zb.__name__ = ["flambe", "platform", "BasicTouch"];
    zb.__interfaces__ = [Vc];
    zb.prototype = {
        submitDown: function(a, b, c) {
            if (!this._pointMap.h.hasOwnProperty(a)) {
                var d = new wc(a);
                d.init(b, c);
                this._pointMap.h[a] =
                    d;
                this._points.push(d);
                null == this._pointerTouch && (this._pointerTouch = d, this._pointer.submitDown(b, c, d._source));
                this.down.emit(d)
            }
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.h[a];
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._source), this.move.emit(a))
        },
        submitUp: function(a, b, c) {
            var d = this._pointMap.h[a];
            null != d && (d.init(b, c), this._pointMap.remove(a), G.remove(this._points, d), this._pointerTouch == d && (this._pointerTouch = null, this._pointer.submitUp(b, c, d._source)), this.up.emit(d))
        },
        __class__: zb
    };
    var Ta = function() {};
    e["flambe.sound.Sound"] = Ta;
    Ta.__name__ = ["flambe", "sound", "Sound"];
    Ta.__interfaces__ = [Ia];
    Ta.prototype = {
        __class__: Ta
    };
    var ja = function() {
        this._disposed = !1;
        this._playback = new Ob(this)
    };
    e["flambe.platform.DummySound"] = ja;
    ja.__name__ = ["flambe", "platform", "DummySound"];
    ja.__interfaces__ = [Ta];
    ja.getInstance = function() {
        null == ja._instance && (ja._instance = new ja);
        return ja._instance
    };
    ja.__super__ = $;
    ja.prototype = r($.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        onDisposed: function() {},
        __class__: ja
    });
    var Ua = function() {};
    e["flambe.sound.Playback"] = Ua;
    Ua.__name__ = ["flambe", "sound", "Playback"];
    Ua.__interfaces__ = [pa];
    Ua.prototype = {
        __class__: Ua,
        __properties__: {
            set_paused: "set_paused"
        }
    };
    var Ob = function(a) {
        this._sound = a;
        this.volume = new L(0);
        this._complete = new X(!0)
    };
    e["flambe.platform.DummyPlayback"] = Ob;
    Ob.__name__ = ["flambe", "platform", "DummyPlayback"];
    Ob.__interfaces__ = [Ua];
    Ob.prototype = {
        set_paused: function() {
            return !0
        },
        dispose: function() {},
        __class__: Ob,
        __properties__: {
            set_paused: "set_paused"
        }
    };
    var Pb = function() {};
    e["flambe.subsystem.StorageSystem"] = Pb;
    Pb.__name__ = ["flambe", "subsystem", "StorageSystem"];
    Pb.prototype = {
        __class__: Pb
    };
    var Cb = function() {
        this.clear()
    };
    e["flambe.platform.DummyStorage"] = Cb;
    Cb.__name__ = ["flambe", "platform", "DummyStorage"];
    Cb.__interfaces__ = [Pb];
    Cb.prototype = {
        set: function(a, b) {
            var c = this._hash;
            null != H[a] ? c.setReserved(a, b) : c.h[a] = b;
            return !0
        },
        get: function(a, b) {
            var c = this._hash;
            return (null != H[a] ? c.existsReserved(a) : c.h.hasOwnProperty(a)) ? (c = this._hash, null != H[a] ? c.getReserved(a) :
                c.h[a]) : b
        },
        clear: function() {
            this._hash = new T
        },
        __class__: Cb
    };
    var Ab = function() {
        this.down = new N;
        this.move = new N;
        this.up = new N
    };
    e["flambe.platform.DummyTouch"] = Ab;
    Ab.__name__ = ["flambe", "platform", "DummyTouch"];
    Ab.__interfaces__ = [Vc];
    Ab.prototype = {
        __class__: Ab
    };
    var gb = function() {
        this._entries = []
    };
    e["flambe.platform.EventGroup"] = gb;
    gb.__name__ = ["flambe", "platform", "EventGroup"];
    gb.__interfaces__ = [pa];
    gb.prototype = {
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new Ac(a, b, c))
        },
        addDisposingListener: function(a, b, c) {
            var d = this;
            this.addListener(a, b, function(a) {
                d.dispose();
                c(a)
            })
        },
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        __class__: gb
    };
    var Ac = function(a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    e["flambe.platform._EventGroup.Entry"] = Ac;
    Ac.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    Ac.prototype = {
        __class__: Ac
    };
    var Qb = function() {};
    e["flambe.platform.InternalGraphics"] =
        Qb;
    Qb.__name__ = ["flambe", "platform", "InternalGraphics"];
    Qb.__interfaces__ = [tc];
    Qb.prototype = {
        __class__: Qb
    };
    var Bc = function() {};
    e["flambe.subsystem.RendererSystem"] = Bc;
    Bc.__name__ = ["flambe", "subsystem", "RendererSystem"];
    Bc.prototype = {
        __class__: Bc,
        __properties__: {
            get_type: "get_type"
        }
    };
    var Rb = function() {};
    e["flambe.platform.InternalRenderer"] = Rb;
    Rb.__name__ = ["flambe", "platform", "InternalRenderer"];
    Rb.__interfaces__ = [Bc];
    Rb.prototype = {
        __class__: Rb
    };
    var Pa = function() {
        this._tickables = []
    };
    e["flambe.platform.MainLoop"] =
        Pa;
    Pa.__name__ = ["flambe", "platform", "MainLoop"];
    Pa.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_9;
        if (null != c && (c._realDt = b, b *= c.scale._value, 0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (c = a.firstComponent; null != c;) {
            var d = c.next;
            0 == (c._flags & 1) && (c._flags |= 1, c.onStart());
            c.onUpdate(b);
            c = d
        }
        for (c = a.firstChild; null != c;) d = c.next, Pa.updateEntity(c, b), c = d
    };
    Pa.prototype = {
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b,
                        1) : ++b
                }
                j.volume.update(a);
                Pa.updateEntity(j.root, a)
            }
        },
        render: function(a) {
            var b = a.graphics;
            null != b && (a.willRender(), o.render(j.root, b), a.didRender())
        },
        addTickable: function(a) {
            this._tickables.push(a)
        },
        __class__: Pa
    };
    var yc = function() {};
    e["flambe.platform.MouseCodes"] = yc;
    yc.__name__ = ["flambe", "platform", "MouseCodes"];
    yc.toButton = function(a) {
        switch (a) {
            case 0:
                return Y.Left;
            case 1:
                return Y.Middle;
            case 2:
                return Y.Right
        }
        return Y.Unknown(a)
    };
    var Cc = function() {};
    e["flambe.platform.TextureRoot"] = Cc;
    Cc.__name__ = ["flambe", "platform", "TextureRoot"];
    Cc.prototype = {
        __class__: Cc
    };
    var Sb = function() {};
    e["flambe.platform.Tickable"] = Sb;
    Sb.__name__ = ["flambe", "platform", "Tickable"];
    Sb.prototype = {
        __class__: Sb
    };
    var Tb = function(a, b) {
        this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", {
            alpha: b
        })
    };
    e["flambe.platform.html.CanvasGraphics"] = Tb;
    Tb.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Tb.__interfaces__ = [Qb];
    Tb.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        transform: function(a, b, c, d, f, g) {
            this._canvasCtx.transform(a,
                b, c, d, f, g)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, d, f, g, e) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, d, f, g, e), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + d | 0, a.rootY + f | 0, g | 0, e | 0, b | 0, c | 0, g | 0, e | 0)
        },
        fillRect: function(a, b, c, d, f) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, d, f), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + s.string(a);
                this._canvasCtx.fillStyle = "#" + s.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, d | 0, f | 0)
            }
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *= a
        },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over";
                    break;
                case 1:
                    b = "lighter";
                    break;
                case 2:
                    b = "multiply";
                    break;
                case 3:
                    b = "screen";
                    break;
                case 4:
                    b = "destination-in";
                    break;
                case 5:
                    b = "copy"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        applyScissor: function(a, b, c, d) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, d | 0);
            this._canvasCtx.clip()
        },
        willRender: function() {
            this._firstDraw = !0
        },
        didRender: function() {},
        __class__: Tb
    };
    var Qa = function(a) {
        this.graphics = new Tb(a, !1);
        this._hasGPU = new X(!0)
    };
    e["flambe.platform.html.CanvasRenderer"] = Qa;
    Qa.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    Qa.__interfaces__ = [Rb];
    Qa.prototype = {
        get_type: function() {
            return na.Canvas
        },
        createTextureFromImage: function(a) {
            a = new hb(Qa.CANVAS_TEXTURES ? x.createCanvas(a) : a);
            return a.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        __class__: Qa,
        __properties__: {
            get_type: "get_type"
        }
    };
    var Ub = function(a, b, c) {
        Ma.call(this, a, b, c)
    };
    e["flambe.platform.html.CanvasTexture"] = Ub;
    Ub.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    Ub.__super__ = Ma;
    Ub.prototype = r(Ma.prototype, {
        __class__: Ub
    });
    var hb = function(a) {
        this._graphics = null;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height
    };
    e["flambe.platform.html.CanvasTextureRoot"] = hb;
    hb.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    hb.__interfaces__ = [Cc];
    hb.__super__ = $;
    hb.prototype = r($.prototype, {
        createTexture: function(a, b) {
            return new Ub(this, a, b)
        },
        onDisposed: function() {
            this._graphics = this.image = null
        },
        __class__: hb
    });
    var F = function(a, b) {
        La.call(this, a,
            b)
    };
    e["flambe.platform.html.HtmlAssetPackLoader"] = F;
    F.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    F.detectImageFormats = function(a) {
        var b = [h.PNG, h.JPG, h.GIF],
            c = 2,
            d = window.document.createElement("img");
        d.onload = d.onerror = function() {
            1 == d.width && b.unshift(h.WEBP);
            c -= 1;
            0 == c && a(b)
        };
        d.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var f = window.document.createElement("img");
        f.onload = f.onerror = function() {
            1 == f.width && b.unshift(h.JXR);
            c -= 1;
            0 == c && a(b)
        };
        f.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    F.detectAudioFormats = function() {
        var a = window.document.createElement("audio");
        if (null == a || null == E(a, a.canPlayType)) return [];
        var b = new ha("\\b(iPhone|iPod|iPad|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!D.get_supported() && b.match(c)) return [];
        for (var b = [{
                format: h.M4A,
                mimeType: "audio/mp4; codecs=mp4a"
            }, {
                format: h.MP3,
                mimeType: "audio/mpeg"
            }, {
                format: h.OPUS,
                mimeType: "audio/ogg; codecs=opus"
            }, {
                format: h.OGG,
                mimeType: "audio/ogg; codecs=vorbis"
            }, {
                format: h.WAV,
                mimeType: "audio/wav"
            }], c = [], d = 0; d < b.length;) {
            var f =
                b[d];
            ++d;
            var g = "";
            try {
                g = a.canPlayType(f.mimeType)
            } catch (e) {}
            "" != g && c.push(f.format)
        }
        return c
    };
    F.supportsBlob = function() {
        if (F._detectBlobSupport) {
            F._detectBlobSupport = !1;
            if ((new ha("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            F._URL = x.loadExtension("URL").value
        }
        return null != F._URL ? null != F._URL.createObjectURL : !1
    };
    F.__super__ = La;
    F.prototype =
        r(La.prototype, {
            loadEntry: function(a, b) {
                var c = this;
                switch (b.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        var d = window.document.createElement("img"),
                            f = new gb;
                        f.addDisposingListener(d, "load", function() {
                            F.supportsBlob() && F._URL.revokeObjectURL(d.src);
                            var a = c._platform.getRenderer().createTextureFromImage(d);
                            null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                        });
                        f.addDisposingListener(d, "error", function() {
                            c.handleError(b, "Failed to load image")
                        });
                        F.supportsBlob() ? this.download(a, b, "blob", function(a) {
                            d.src =
                                F._URL.createObjectURL(a)
                        }) : d.src = a;
                        break;
                    case 5:
                    case 6:
                    case 7:
                        this.download(a, b, "arraybuffer", function() {
                            var a = c._platform.getRenderer().createCompressedTexture(b.format, null);
                            null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                        });
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        if (D.get_supported()) this.download(a, b, "arraybuffer", function(a) {
                            D.ctx.decodeAudioData(a, function(a) {
                                c.handleLoad(b, new D(a))
                            }, function() {
                                var a = ja.getInstance();
                                c.handleLoad(b, a)
                            })
                        });
                        else {
                            var g = window.document.createElement("audio");
                            g.preload = "auto";
                            var e = ++F._mediaRefCount;
                            null == F._mediaElements && (F._mediaElements = new ka);
                            F._mediaElements.set(e, g);
                            f = new gb;
                            f.addDisposingListener(g, "canplaythrough", function() {
                                F._mediaElements.remove(e);
                                c.handleLoad(b, new ib(g))
                            });
                            f.addDisposingListener(g, "error", function() {
                                F._mediaElements.remove(e);
                                var a = g.error.code;
                                3 == a || 4 == a ? (a = ja.getInstance(), c.handleLoad(b, a)) : c.handleError(b, "Failed to load audio: " + g.error.code)
                            });
                            f.addListener(g, "progress", function() {
                                if (0 < g.buffered.length && 0 < g.duration) {
                                    var a =
                                        g.buffered.end(0) / g.duration;
                                    c.handleProgress(b, a * b.bytes | 0)
                                }
                            });
                            g.src = a;
                            g.load()
                        }
                        break;
                    case 13:
                        this.download(a, b, "text", function(a) {
                            c.handleLoad(b, new fb(a))
                        })
                }
            },
            getAssetFormats: function(a) {
                var b = this;
                null == F._supportedFormats && (F._supportedFormats = new Mb, F.detectImageFormats(function(a) {
                    F._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(F.detectAudioFormats()).concat([h.Data]))
                }));
                F._supportedFormats.get(a)
            },
            download: function(a, b, c, d) {
                var f = this,
                    g = null,
                    e = null,
                    k = 0,
                    i = !1,
                    h = function() {
                        i && (i = !1, window.clearInterval(k))
                    },
                    j = 3,
                    l = function() {
                        j -= 1;
                        return 0 <= j ? (e(), !0) : !1
                    },
                    e = function() {
                        h();
                        null != g && g.abort();
                        g = new XMLHttpRequest;
                        g.open("GET", a, !0);
                        g.responseType = c;
                        var e = 0;
                        g.onprogress = function(a) {
                            i || (i = !0, k = window.setInterval(function() {
                                4 != g.readyState && 5E3 < Date.now() - e && !l() && (h(), f.handleError(b, "Download stalled"))
                            }, 1E3));
                            e = Date.now();
                            f.handleProgress(b, a.loaded)
                        };
                        g.onerror = function() {
                            if (0 != g.status || !l()) h(), f.handleError(b, "HTTP error " + g.status)
                        };
                        g.onload = function() {
                            var a = g.response;
                            null == a && (a = g.responseText);
                            h();
                            d(a)
                        };
                        g.send()
                    };
                e()
            },
            __class__: F
        });
    var Dc = function() {};
    e["flambe.subsystem.ExternalSystem"] = Dc;
    Dc.__name__ = ["flambe", "subsystem", "ExternalSystem"];
    Dc.prototype = {
        __class__: Dc
    };
    var Db = function() {};
    e["flambe.platform.html.HtmlExternal"] = Db;
    Db.__name__ = ["flambe", "platform", "html", "HtmlExternal"];
    Db.__interfaces__ = [Dc];
    Db.prototype = {
        call: function(a, b) {
            null == b && (b = []);
            for (var c = window, d = c, f = 0, g = a.split("."); f < g.length;) {
                var e = g[f];
                ++f;
                c = d;
                d = K.field(c, e)
            }
            return d.apply(c, b)
        },
        __class__: Db
    };
    var yb = function(a, b) {
        da.call(this, a);
        this._canvas = b
    };
    e["flambe.platform.html.HtmlMouse"] = yb;
    yb.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    yb.__super__ = da;
    yb.prototype = r(da.prototype, {
        __class__: yb
    });
    var ib = function(a) {
        this._disposed = !1;
        this.audioElement = a
    };
    e["flambe.platform.html.HtmlSound"] = ib;
    ib.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    ib.__interfaces__ = [Ta];
    ib.__super__ = $;
    ib.prototype = r($.prototype, {
        play: function(a) {
            null == a &&
                (a = 1);
            return new jb(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new jb(this, a, !0)
        },
        onDisposed: function() {
            this.audioElement = null
        },
        __class__: ib
    });
    var jb = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new L(b, function() {
            d.updateVolume()
        });
        this.updateVolume();
        this._complete = new X(!1);
        this.playAudio();
        j.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._HtmlSound.HtmlPlayback"] = jb;
    jb.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    jb.__interfaces__ = [Sb, Ua];
    jb.prototype = {
        set_paused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
            return a
        },
        update: function(a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1, this._volumeBinding.dispose(), this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        playAudio: function() {
            var a = this;
            this._clonedElement.loop && !qa.instance.musicPlaying && (qa.instance.musicPlaying = !0, this._clonedElement.play(), this._tickableAdded || (qa.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = j.volume.get_changed().connect(function() {
                a.updateVolume()
            }), this._hideBinding = j.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            })))
        },
        updateVolume: function() {
            this._clonedElement.volume = j.volume._value * this.volume._value
        },
        __class__: jb,
        __properties__: {
            set_paused: "set_paused"
        }
    };
    var Ec = function() {};
    e["flambe.subsystem.StageSystem"] = Ec;
    Ec.__name__ = ["flambe", "subsystem", "StageSystem"];
    Ec.prototype = {
        __class__: Ec,
        __properties__: {
            get_width: "get_width",
            get_height: "get_height"
        }
    };
    var u = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new ca;
        this.scaleFactor = 1;
        x.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            x.callLater(E(b,
                b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", E(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new X(null);
        null != window.orientation && (window.addEventListener("orientationchange", E(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new X(!1);
        x.addVendorListener(window.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    e["flambe.platform.html.HtmlStage"] = u;
    u.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    u.__interfaces__ = [Ec];
    u.prototype = {
        get_width: function() {
            return this._canvas.width
        },
        get_height: function() {
            return this._canvas.height
        },
        lockOrientation: function(a) {
            var b = x.loadExtension("lockOrientation", window.screen).value;
            if (null != b) {
                var c;
                switch (a[1]) {
                    case 0:
                        c = "portrait";
                        break;
                    case 1:
                        c = "landscape"
                }
                b.apply(window.screen, [c])
            }
        },
        onWindowResize: function() {
            var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        resizeCanvas: function(a,
            b) {
            var c = u.BASE_HEIGHT / b;
            u.STAGE_WIDTH = Math.round(c * a);
            u.STAGE_WIDTH < u.BASE_WIDTH ? (u.STAGE_WIDTH = u.BASE_WIDTH, c = u.BASE_WIDTH / a, u.STAGE_HEIGHT = Math.round(c * b)) : u.STAGE_HEIGHT = u.BASE_HEIGHT;
            u.STAGE_HEIGHT == u.BASE_HEIGHT && u.STAGE_WIDTH > u.MAX_WIDTH && (u.STAGE_WIDTH = u.MAX_WIDTH);
            this.scaleFactor = Math.min(a / u.STAGE_WIDTH, b / u.STAGE_HEIGHT);
            var c = this.scaleFactor * u.STAGE_WIDTH,
                d = this.scaleFactor * u.STAGE_HEIGHT;
            this._canvas.width = u.STAGE_WIDTH;
            this._canvas.height = u.STAGE_HEIGHT;
            this._canvas.style.width = c + "px";
            this._canvas.style.height = d + "px";
            this.scaleFactor = 1 / this.scaleFactor;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var a = this,
                b = window.document.documentElement.style;
            b.height = s.string(window.innerHeight + 100) + "px";
            b.width = s.string(window.innerWidth) + "px";
            b.overflow = "visible";
            x.callLater(function() {
                x.hideMobileBrowser();
                x.callLater(function() {
                    b.height = s.string(window.innerHeight) + "px";
                    a.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(x.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 == x.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: u,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width"
        }
    };
    var Bb = function(a) {
        this._storage = a
    };
    e["flambe.platform.html.HtmlStorage"] = Bb;
    Bb.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    Bb.__interfaces__ = [Pb];
    Bb.prototype = {
        set: function(a, b) {
            var c;
            try {
                var d = new ea;
                d.useCache = !0;
                d.useEnumIndex = !1;
                d.serialize(b);
                c = d.toString()
            } catch (f) {
                return !1
            }
            try {
                this._storage.setItem("flambe:" +
                    a, c)
            } catch (g) {
                return g instanceof n && (g = g.val), !1
            }
            return !0
        },
        get: function(a, b) {
            var c = null;
            try {
                c = this._storage.getItem("flambe:" + a)
            } catch (d) {
                d instanceof n && (d = d.val)
            }
            if (null != c) try {
                return aa.run(c)
            } catch (f) {}
            return b
        },
        __class__: Bb
    };
    var x = function() {};
    e["flambe.platform.html.HtmlUtil"] = x;
    x.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    x.callLater = function(a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    };
    x.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    };
    x.loadExtension = function(a, b) {
        null == b && (b = window);
        var c = K.field(b, a);
        if (null != c) return {
            prefix: "",
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() + G.substr(a, 1, null), d = 0, f = x.VENDOR_PREFIXES; d < f.length;) {
            var g = f[d];
            ++d;
            var e = g + c,
                k = K.field(b, e);
            if (null != k) return {
                prefix: g,
                field: e,
                value: k
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    x.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            d = x.loadExtension(d, b);
            if (null != d.field) return d
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    x.polyfill = function(a, b) {
        null == b && (b = window);
        var c =
            x.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    x.addVendorListener = function(a, b, c, d) {
        for (var f = 0, g = x.VENDOR_PREFIXES; f < g.length;) {
            var e = g[f];
            ++f;
            a.addEventListener(e + b, c, d)
        }
        a.addEventListener(b, c, d)
    };
    x.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return ia.Landscape;
            default:
                return ia.Portrait
        }
    };
    x.createEmptyCanvas = function(a, b) {
        var c = window.document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    };
    x.createCanvas = function(a) {
        var b = x.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d", null);
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    x.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) {
                return 0 == b ? 0 : a(b)
            };
            Math.cos = function(a) {
                return 0 == a ? 1 : b(a)
            }
        }
    };
    var D = function(a) {
        this._disposed = !1;
        this.buffer = a
    };
    e["flambe.platform.html.WebAudioSound"] = D;
    D.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    D.__interfaces__ = [Ta];
    D.__properties__ = {
        get_supported: "get_supported"
    };
    D.get_supported = function() {
        if (D._detectSupport) {
            D._detectSupport = !1;
            var a = x.loadExtension("AudioContext").value;
            null != a && (D.ctx = new a, D.gain = D.createGain(), D.gain.connect(D.ctx.destination), j.volume.watch(function(a) {
                D.gain.gain.value = a
            }))
        }
        return null != D.ctx
    };
    D.createGain = function() {
        return null != D.ctx.createGain ? D.ctx.createGain() : D.ctx.createGainNode()
    };
    D.start = function(a, b) {
        null != a.start ? a.start(b) : a.noteOn(b)
    };
    D.__super__ = $;
    D.prototype = r($.prototype, {
        play: function(a) {
            null ==
                a && (a = 1);
            return new kb(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new kb(this, a, !0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: D,
        __properties__: {
            get_duration: "get_duration"
        }
    });
    var kb = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._head = D.gain;
        this._complete = new X(!1);
        this._sourceNode = D.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function() {
            d._complete.set__(!0)
        };
        D.start(this._sourceNode,
            0);
        this.playAudio();
        this.volume = new L(b, function(a) {
            d.setVolume(a)
        });
        1 != b && this.setVolume(b);
        j.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = kb;
    kb.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    kb.__interfaces__ = [Sb, Ua];
    kb.prototype = {
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_position: function() {
            return this._complete._value ?
                this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (D.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        update: function(a) {
            this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        setVolume: function(a) {
            null == this._gainNode && (this._gainNode = D.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        insertNode: function(a) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a
        },
        playAudio: function() {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = D.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (qa.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = j.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        __class__: kb,
        __properties__: {
            get_position: "get_position",
            set_paused: "set_paused"
        }
    };
    var Vb = function() {
        this._width = this._height = -1;
        this._transitor = null;
        B.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new m
    };
    e["flambe.scene.Director"] = Vb;
    Vb.__name__ = ["flambe", "scene", "Director"];
    Vb.__super__ = B;
    Vb.prototype = r(B.prototype, {
        get_name: function() {
            return "Director_8"
        },
        pushScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var d = this.get_topScene();
            null != d ? this.playTransition(d, a, b, function() {
                    c.hide(d)
                }) :
                (this.add(a), this.invalidateVisibility())
        },
        unwindToScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var d = this.get_topScene();
            if (null != d) {
                if (d != a) {
                    for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.playTransition(d, a, b, function() {
                        c.hideAndDispose(d)
                    })
                }
            } else this.pushScene(a, b)
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this.completeTransition();
            for (var a = 0, b = this.scenes; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onUpdate: function(a) {
            null != this._transitor && this._transitor.update(a) && this.completeTransition()
        },
        get_topScene: function() {
            var a = this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        add: function(a) {
            var b = this.get_topScene();
            null != b && this._root.removeChild(b);
            G.remove(this.scenes, a);
            this.scenes.push(a);
            this._root.addChild(a)
        },
        hide: function(a) {
            a = a._compMap.Scene_1;
            null != a && a.hidden.emit()
        },
        hideAndDispose: function(a) {
            this.hide(a);
            a.dispose()
        },
        show: function(a) {
            a = a._compMap.Scene_1;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a]._compMap.Scene_1;
                if (null == b || b.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        playTransition: function(a, b,
            c, d) {
            this.completeTransition();
            this.add(b);
            null != c ? (this.occludedScenes.push(a), this._transitor = new Fc(a, b, c, d), this._transitor.init(this)) : (d(), this.invalidateVisibility())
        },
        get_width: function() {
            return 0 > this._width ? j._platform.getStage().get_width() : this._width
        },
        get_height: function() {
            return 0 > this._height ? j._platform.getStage().get_height() : this._height
        },
        __class__: Vb,
        __properties__: r(B.prototype.__properties__, {
            get_height: "get_height",
            get_width: "get_width",
            get_topScene: "get_topScene"
        })
    });
    var Fc =
        function(a, b, c, d) {
            this._from = a;
            this._to = b;
            this._transition = c;
            this._onComplete = d
        };
    e["flambe.scene._Director.Transitor"] = Fc;
    Fc.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    Fc.prototype = {
        init: function(a) {
            this._transition.init(a, this._from, this._to)
        },
        update: function(a) {
            return this._transition.update(a)
        },
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        __class__: Fc
    };
    var ta = function(a) {
        null == a && (a = !0);
        B.call(this);
        this.opaque = a;
        this.shown = new ca;
        this.hidden = new ca
    };
    e["flambe.scene.Scene"] =
        ta;
    ta.__name__ = ["flambe", "scene", "Scene"];
    ta.__super__ = B;
    ta.prototype = r(B.prototype, {
        get_name: function() {
            return "Scene_1"
        },
        __class__: ta
    });
    var lb = function() {};
    e["flambe.scene.Transition"] = lb;
    lb.__name__ = ["flambe", "scene", "Transition"];
    lb.prototype = {
        init: function(a, b, c) {
            this._director = a;
            this._from = b;
            this._to = c
        },
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: lb
    };
    var za = function(a, b) {
        this._duration = a;
        this._ease = null != b ? b : J.linear
    };
    e["flambe.scene.TweenTransition"] = za;
    za.__name__ = ["flambe",
        "scene", "TweenTransition"
    ];
    za.__super__ = lb;
    za.prototype = r(lb.prototype, {
        init: function(a, b, c) {
            lb.prototype.init.call(this, a, b, c);
            this._elapsed = 0
        },
        update: function(a) {
            this._elapsed += a;
            return this._elapsed >= this._duration
        },
        interp: function(a, b) {
            return a + (b - a) * this._ease(this._elapsed / this._duration)
        },
        __class__: za
    });
    var mb = function(a, b) {
        this._direction = 2;
        za.call(this, a, b)
    };
    e["flambe.scene.SlideTransition"] = mb;
    mb.__name__ = ["flambe", "scene", "SlideTransition"];
    mb.__super__ = za;
    mb.prototype = r(za.prototype, {
        init: function(a,
            b, c) {
            za.prototype.init.call(this, a, b, c);
            switch (this._direction) {
                case 0:
                    this._x = 0;
                    this._y = -this._director.get_height();
                    break;
                case 1:
                    this._x = 0;
                    this._y = this._director.get_height();
                    break;
                case 2:
                    this._x = -this._director.get_width();
                    this._y = 0;
                    break;
                case 3:
                    this._x = this._director.get_width(), this._y = 0
            }
            a = this._from._compMap.Sprite_7;
            null == a && (b = this._from, a = new o, b.add(a));
            a.setXY(0, 0);
            a = this._to._compMap.Sprite_7;
            null == a && (b = this._to, a = new o, b.add(a));
            a.setXY(-this._x, -this._y)
        },
        update: function(a) {
            a = za.prototype.update.call(this,
                a);
            this._from._compMap.Sprite_7.setXY(this.interp(0, this._x), this.interp(0, this._y));
            this._to._compMap.Sprite_7.setXY(this.interp(-this._x, 0), this.interp(-this._y, 0));
            return a
        },
        complete: function() {
            this._from._compMap.Sprite_7.setXY(0, 0);
            this._to._compMap.Sprite_7.setXY(0, 0)
        },
        __class__: mb
    });
    var Aa = function() {};
    e["flambe.script.Action"] = Aa;
    Aa.__name__ = ["flambe", "script", "Action"];
    Aa.prototype = {
        __class__: Aa
    };
    var Ba = function(a, b, c, d) {
        this._value = a;
        this._to = b;
        this._seconds = c;
        this._easing = d
    };
    e["flambe.script.AnimateTo"] =
        Ba;
    Ba.__name__ = ["flambe", "script", "AnimateTo"];
    Ba.__interfaces__ = [Aa];
    Ba.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new cb(this._value._value, this._to, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: Ba
    };
    var Va = function(a) {
        this._fn = a
    };
    e["flambe.script.CallFunction"] = Va;
    Va.__name__ = ["flambe", "script",
        "CallFunction"
    ];
    Va.__interfaces__ = [Aa];
    Va.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: Va
    };
    var Wa = function(a) {
        this._duration = a;
        this._elapsed = 0
    };
    e["flambe.script.Delay"] = Wa;
    Wa.__name__ = ["flambe", "script", "Delay"];
    Wa.__interfaces__ = [Aa];
    Wa.prototype = {
        update: function(a) {
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var b = this._elapsed - this._duration;
                this._elapsed = 0;
                return a - b
            }
            return -1
        },
        __class__: Wa
    };
    var Xa = function(a) {
        this._completedActions = [];
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Parallel"] = Xa;
    Xa.__name__ = ["flambe", "script", "Parallel"];
    Xa.__interfaces__ = [Aa];
    Xa.prototype = {
        update: function(a, b) {
            for (var c = !0, d = 0, f = 0, g = this._runningActions.length; f < g;) {
                var e = f++,
                    k = this._runningActions[e];
                if (null != k) {
                    var i = k.update(a, b);
                    0 <= i ? (this._runningActions[e] = null, this._completedActions.push(k), i > d && (d = i)) : c = !1
                }
            }
            return c ? (this._runningActions = this._completedActions, this._completedActions = [], d) : -1
        },
        __class__: Xa
    };
    var Wb = function(a, b) {
        null == b && (b = -1);
        this._action = a;
        this._remaining =
            this._count = b
    };
    e["flambe.script.Repeat"] = Wb;
    Wb.__name__ = ["flambe", "script", "Repeat"];
    Wb.__interfaces__ = [Aa];
    Wb.prototype = {
        update: function(a, b) {
            if (0 == this._count) return 0;
            var c = this._action.update(a, b);
            return 0 < this._count && 0 <= c && 0 == --this._remaining ? (this._remaining = this._count, c) : -1
        },
        __class__: Wb
    };
    var Na = function() {
        B.call(this);
        this.stopAll()
    };
    e["flambe.script.Script"] = Na;
    Na.__name__ = ["flambe", "script", "Script"];
    Na.__super__ = B;
    Na.prototype = r(B.prototype, {
        get_name: function() {
            return "Script_6"
        },
        run: function(a) {
            a =
                new Xb(a);
            this._handles.push(a);
            return a
        },
        stopAll: function() {
            this._handles = []
        },
        onUpdate: function(a) {
            for (var b = 0; b < this._handles.length;) {
                var c = this._handles[b];
                c.removed || 0 <= c.action.update(a, this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: Na
    });
    var Xb = function(a) {
        this.removed = !1;
        this.action = a
    };
    e["flambe.script._Script.Handle"] = Xb;
    Xb.__name__ = ["flambe", "script", "_Script", "Handle"];
    Xb.__interfaces__ = [pa];
    Xb.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: Xb
    };
    var Ya = function(a) {
        this._idx =
            0;
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Sequence"] = Ya;
    Ya.__name__ = ["flambe", "script", "Sequence"];
    Ya.__interfaces__ = [Aa];
    Ya.prototype = {
        add: function(a) {
            this._runningActions.push(a)
        },
        update: function(a, b) {
            for (var c = 0;;) {
                var d = this._runningActions[this._idx];
                if (null != d)
                    if (d = d.update(a - c, b), 0 <= d) c += d;
                    else return -1;
                ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (c > a) return -1
            }
            return c
        },
        __class__: Ya
    };
    var na = e["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe",
            "subsystem", "RendererType"
        ],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    na.Stage3D = ["Stage3D", 0];
    na.Stage3D.toString = q;
    na.Stage3D.__enum__ = na;
    na.WebGL = ["WebGL", 1];
    na.WebGL.toString = q;
    na.WebGL.__enum__ = na;
    na.Canvas = ["Canvas", 2];
    na.Canvas.toString = q;
    na.Canvas.__enum__ = na;
    var nb = function() {};
    e["flambe.swf.Symbol"] = nb;
    nb.__name__ = ["flambe", "swf", "Symbol"];
    nb.prototype = {
        __class__: nb
    };
    var Yb = function(a, b) {
        this._name = a.symbol;
        var c = a.rect;
        this.texture = b.subTexture(c[0], c[1], c[2], c[3]);
        c = a.origin;
        null !=
            c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY = this.anchorX = 0
    };
    e["flambe.swf.BitmapSymbol"] = Yb;
    Yb.__name__ = ["flambe", "swf", "BitmapSymbol"];
    Yb.__interfaces__ = [nb];
    Yb.prototype = {
        createSprite: function() {
            var a = new ra(this.texture);
            a.setAnchor(this.anchorX, this.anchorY);
            return a
        },
        __class__: Yb
    };
    var Za = function(a, b) {
        this.name = a;
        var c = 1 / b.length;
        this.frames = [];
        for (var d = 0; d < b.length;) {
            var f = b[d];
            ++d;
            this.frames.push(new Gc(f, c))
        }
    };
    e["flambe.swf.Flipbook"] = Za;
    Za.__name__ = ["flambe", "swf", "Flipbook"];
    Za.prototype = {
        setDuration: function(a) {
            for (var a = a / this.frames.length, b = 0, c = this.frames; b < c.length;) {
                var d = c[b];
                ++b;
                d.duration = a
            }
            return this
        },
        setAnchor: function(a, b) {
            for (var c = 0, d = this.frames; c < d.length;) {
                var f = d[c];
                ++c;
                f.anchorX = a;
                f.anchorY = b
            }
            return this
        },
        __class__: Za
    };
    var Gc = function(a, b) {
        this.label = null;
        this.anchorX = this.anchorY = 0;
        this.texture = a;
        this.duration = b
    };
    e["flambe.swf.FlipbookFrame"] = Gc;
    Gc.__name__ = ["flambe", "swf", "FlipbookFrame"];
    Gc.prototype = {
        toSymbol: function() {
            return new Zb(this)
        },
        __class__: Gc
    };
    var Zb = function(a) {
        this._texture = a.texture;
        this._anchorX = a.anchorX;
        this._anchorY = a.anchorY
    };
    e["flambe.swf._Flipbook.FrameSymbol"] = Zb;
    Zb.__name__ = ["flambe", "swf", "_Flipbook", "FrameSymbol"];
    Zb.__interfaces__ = [nb];
    Zb.prototype = {
        createSprite: function() {
            var a = new ra(this._texture);
            a.setAnchor(this._anchorX, this._anchorY);
            return a
        },
        __class__: Zb
    };
    var $a = function(a, b) {
        this._file = a.getFile(b + "/library.json");
        var c = JSON.parse(this._file.toString());
        this._symbols = new T;
        this.frameRate = c.frameRate;
        for (var d = [],
                f = 0, g = c.movies; f < g.length;) {
            var e = g[f];
            ++f;
            e = new ob(this, e);
            d.push(e);
            var k = e._name,
                i = this._symbols;
            null != H[k] ? i.setReserved(k, e) : i.h[k] = e
        }
        c = c.textureGroups[0].atlases;
        for (f = 0; f < c.length;) {
            k = c[f];
            ++f;
            g = a.getTexture(b + "/" + U.removeFileExtension(k.file));
            e = 0;
            for (k = k.textures; e < k.length;) {
                i = k[e];
                ++e;
                var i = new Yb(i, g),
                    h = i._name,
                    j = this._symbols;
                null != H[h] ? j.setReserved(h, i) : j.h[h] = i
            }
        }
        for (c = 0; c < d.length;) {
            g = d[c];
            ++c;
            f = 0;
            for (g = g.layers; f < g.length;) {
                e = g[f];
                ++f;
                e = e.keyframes;
                k = e.length;
                i = 0;
                for (h = k; i < h;) {
                    var l =
                        i++,
                        j = e[l];
                    if (null != j.symbolName) {
                        var m = j.symbolName,
                            o = this._symbols,
                            m = null != H[m] ? o.getReserved(m) : o.h[m];
                        j.symbol = m
                    }
                    if (j.tweened && 1 == j.duration && l + 1 < k && (l = e[l + 1], !l.visible || null == l.symbolName)) j.visible = !1
                }
            }
        }
    };
    e["flambe.swf.Library"] = $a;
    $a.__name__ = ["flambe", "swf", "Library"];
    $a.fromFlipbooks = function(a) {
        var b = P.createEmptyInstance($a);
        b._symbols = new T;
        b.frameRate = 60;
        b._file = null;
        for (var c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            for (var f = [], g = 0, e = d.frames; g < e.length;) {
                var k = e[g];
                ++g;
                f.push({
                    duration: k.duration *
                        b.frameRate,
                    label: k.label,
                    pivot: [k.anchorX, k.anchorY],
                    ref: ""
                })
            }
            f = new ob(b, {
                id: d.name,
                layers: [{
                    name: "flipbook",
                    flipbook: !0,
                    keyframes: f
                }]
            });
            g = d.name;
            e = b._symbols;
            null != H[g] ? e.setReserved(g, f) : e.h[g] = f;
            f = f.layers[0].keyframes;
            g = 0;
            for (e = d.frames.length; g < e;) {
                var k = g++,
                    i = d.frames[k].toSymbol();
                f[k].symbol = i
            }
        }
        return b
    };
    $a.prototype = {
        createSprite: function(a, b) {
            null == b && (b = !0);
            var c = this._symbols,
                c = null != H[a] ? c.getReserved(a) : c.h[a];
            if (null == c) {
                if (b) throw new n(U.withFields("Missing symbol", ["name", a]));
                return null
            }
            return c.createSprite()
        },
        __class__: $a
    };
    var $b = function(a) {
        this._oneshotSprite = this._loopingSprite = this._looped = null;
        B.call(this);
        this._lib = a;
        this._root = new m;
        this.movie = new X(null);
        this.setCache(!0)
    };
    e["flambe.swf.MoviePlayer"] = $b;
    $b.__name__ = ["flambe", "swf", "MoviePlayer"];
    $b.__super__ = B;
    $b.prototype = r(B.prototype, {
        get_name: function() {
            return "MoviePlayer_5"
        },
        setCache: function(a) {
            this._cache = a ? new T : null;
            return this
        },
        play: function(a, b) {
            null == b && (b = !0);
            if (b || null == this._oneshotSprite || this._oneshotSprite.symbol._name !=
                a) this._oneshotSprite = this.playFromCache(a);
            return this
        },
        loop: function(a, b) {
            null == b && (b = !0);
            if (b || null == this._loopingSprite || this._loopingSprite.symbol._name != a) this._oneshotSprite = null, this._loopingSprite = this.playFromCache(a);
            return this
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this._root.dispose();
            this._oneshotSprite = this._loopingSprite = null;
            this.movie.set__(null)
        },
        onUpdate: function(a) {
            null != this._oneshotSprite && this._oneshotSprite._position + a > this._oneshotSprite.symbol.duration &&
                (this._oneshotSprite = null, null != this._looped && this._looped.emit(), this.setCurrent(this._loopingSprite))
        },
        playFromCache: function(a) {
            var b;
            if (null != this._cache)
                if (b = this._cache, b = null != H[a] ? b.getReserved(a) : b.h[a], null != b) b.set_position(0);
                else {
                    b = this.createMovie(a);
                    var c = this._cache;
                    null != H[a] ? c.setReserved(a, b) : c.h[a] = b
                }
            else b = this.createMovie(a);
            return this.setCurrent(b)
        },
        createMovie: function(a) {
            a = this._lib.createSprite(a, !0);
            null != this._decorator && this._decorator(a);
            return a
        },
        setCurrent: function(a) {
            this._root.add(a);
            return this.movie.set__(a)
        },
        __class__: $b
    });
    var wa = function(a) {
        this._looped = null;
        o.call(this);
        this.symbol = a;
        this.speed = new L(1);
        this._animators = Array(a.layers.length);
        for (var b = 0, c = this._animators.length; b < c;) {
            var d = b++;
            this._animators[d] = new Hc(a.layers[d])
        }
        this._position = this._frame = 0;
        this["goto"](1)
    };
    e["flambe.swf.MovieSprite"] = wa;
    wa.__name__ = ["flambe", "swf", "MovieSprite"];
    wa.__super__ = o;
    wa.prototype = r(o.prototype, {
        onAdded: function() {
            o.prototype.onAdded.call(this);
            for (var a = 0, b = this._animators; a <
                b.length;) {
                var c = b[a];
                ++a;
                this.owner.addChild(c.content)
            }
        },
        onRemoved: function() {
            o.prototype.onRemoved.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.removeChild(c.content)
            }
        },
        onUpdate: function(a) {
            o.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            switch (this._flags & 384) {
                case 0:
                    this._position += this.speed._value * a;
                    this._position > this.symbol.duration && (this._position %= this.symbol.duration, null != this._looped && this._looped.emit());
                    break;
                case 256:
                    this._flags &= -257
            }
            this["goto"](this._position *
                this.symbol.frameRate)
        },
        "goto": function(a) {
            if (this._frame != a) {
                if (a < this._frame)
                    for (var b = 0, c = this._animators; b < c.length;) {
                        var d = c[b];
                        ++b;
                        d.needsKeyframeUpdate = !0;
                        d.keyframeIdx = 0
                    }
                b = 0;
                for (c = this._animators; b < c.length;) d = c[b], ++b, d.composeFrame(a);
                this._frame = a
            }
        },
        set_position: function(a) {
            return this._position = sa.clamp(a, 0, this.symbol.duration)
        },
        get_looped: function() {
            null == this._looped && (this._looped = new ca);
            return this._looped
        },
        set_pixelSnapping: function(a) {
            for (var b = 0, c = this._animators; b < c.length;) {
                var d =
                    c[b];
                ++b;
                d.setPixelSnapping(a)
            }
            return o.prototype.set_pixelSnapping.call(this, a)
        },
        rewind: function() {
            this._position = 0;
            this._flags |= 256
        },
        __class__: wa,
        __properties__: r(o.prototype.__properties__, {
            get_looped: "get_looped",
            set_position: "set_position"
        })
    });
    var Hc = function(a) {
        this.keyframeIdx = 0;
        this.needsKeyframeUpdate = !1;
        this.layer = a;
        this.content = new m;
        if (a.empty) this._sprites = null;
        else {
            this._sprites = Array(a.keyframes.length);
            for (var b = 0, c = this._sprites.length; b < c;) {
                var d = b++,
                    f = a.keyframes[d];
                this._sprites[d] =
                    0 < d && a.keyframes[d - 1].symbol == f.symbol ? this._sprites[d - 1] : null == f.symbol ? new o : f.symbol.createSprite()
            }
            this.content.add(this._sprites[0])
        }
    };
    e["flambe.swf._MovieSprite.LayerAnimator"] = Hc;
    Hc.__name__ = ["flambe", "swf", "_MovieSprite", "LayerAnimator"];
    Hc.prototype = {
        composeFrame: function(a) {
            if (null != this._sprites) {
                var b = this.layer.keyframes,
                    c = b.length - 1;
                if (a > this.layer.frames) this.content._compMap.Sprite_7.set_visible(!1), this.keyframeIdx = c, this.needsKeyframeUpdate = !0;
                else {
                    for (; this.keyframeIdx < c && b[this.keyframeIdx +
                            1].index <= a;) ++this.keyframeIdx, this.needsKeyframeUpdate = !0;
                    var d;
                    this.needsKeyframeUpdate ? (this.needsKeyframeUpdate = !1, d = this._sprites[this.keyframeIdx], d != this.content._compMap.Sprite_7 && ((null == d ? null : w.getClass(d)) == wa && d.rewind(), this.content.add(d))) : d = this.content._compMap.Sprite_7;
                    var f = b[this.keyframeIdx],
                        g = f.visible && null != f.symbol;
                    d.set_visible(g);
                    if (g) {
                        var g = f.x,
                            e = f.y,
                            k = f.scaleX,
                            i = f.scaleY,
                            h = f.skewX,
                            j = f.skewY,
                            l = f.alpha;
                        if (f.tweened && this.keyframeIdx < c) {
                            a = (a - f.index) / f.duration;
                            c = f.ease;
                            if (0 != c) {
                                var m;
                                0 > c ? (m = 1 - a, m = 1 - m * m, c = -c) : m = a * a;
                                a = c * m + (1 - c) * a
                            }
                            b = b[this.keyframeIdx + 1];
                            g += (b.x - g) * a;
                            e += (b.y - e) * a;
                            k += (b.scaleX - k) * a;
                            i += (b.scaleY - i) * a;
                            h += (b.skewX - h) * a;
                            j += (b.skewY - j) * a;
                            l += (b.alpha - l) * a
                        }
                        b = d.getLocalMatrix();
                        a = Math.sin(h);
                        h = Math.cos(h);
                        c = Math.sin(j);
                        j = Math.cos(j);
                        b.set(j * k, c * k, -a * i, h * i, g, e);
                        b.translate(-f.pivotX, -f.pivotY);
                        d.alpha.set__(l)
                    }
                }
            }
        },
        setPixelSnapping: function(a) {
            for (var b = 0, c = this._sprites; b < c.length;) {
                var d = c[b];
                ++b;
                d.set_pixelSnapping(a)
            }
        },
        __class__: Hc
    };
    var ob = function(a, b) {
        this._name =
            b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length);
        for (var c = 0, d = this.layers.length; c < d;) {
            var f = c++,
                g = new Ic(b.layers[f]);
            this.frames = Math.max(g.frames, this.frames);
            this.layers[f] = g
        }
        this.duration = this.frames / this.frameRate
    };
    e["flambe.swf.MovieSymbol"] = ob;
    ob.__name__ = ["flambe", "swf", "MovieSymbol"];
    ob.__interfaces__ = [nb];
    ob.prototype = {
        createSprite: function() {
            return new wa(this)
        },
        __class__: ob
    };
    var Ic = function(a) {
        this.empty = !0;
        this.name = a.name;
        var b = null;
        this.keyframes = Array(a.keyframes.length);
        for (var c = 0, d = this.keyframes.length; c < d;) {
            var f = c++,
                b = new Jc(a.keyframes[f], b);
            this.keyframes[f] = b;
            this.empty = this.empty && null == b.symbolName
        }
        this.frames = null != b ? b.index + b.duration : 0
    };
    e["flambe.swf.MovieLayer"] = Ic;
    Ic.__name__ = ["flambe", "swf", "MovieLayer"];
    Ic.prototype = {
        __class__: Ic
    };
    var Jc = function(a, b) {
        this.ease = 0;
        this.visible = this.tweened = !0;
        this.alpha = 1;
        this.skewX = this.skewY = this.pivotX = this.pivotY = 0;
        this.scaleX = this.scaleY = 1;
        this.x = this.y = 0;
        this.symbol = null;
        this.index = null != b ? b.index + b.duration :
            0;
        this.duration = a.duration;
        this.label = a.label;
        this.symbolName = a.ref;
        var c = a.loc;
        null != c && (this.x = c[0], this.y = c[1]);
        c = a.scale;
        null != c && (this.scaleX = c[0], this.scaleY = c[1]);
        c = a.skew;
        null != c && (this.skewX = c[0], this.skewY = c[1]);
        c = a.pivot;
        null != c && (this.pivotX = c[0], this.pivotY = c[1]);
        null != a.alpha && (this.alpha = a.alpha);
        null != a.visible && (this.visible = a.visible);
        null != a.tweened && (this.tweened = a.tweened);
        null != a.ease && (this.ease = a.ease)
    };
    e["flambe.swf.MovieKeyframe"] = Jc;
    Jc.__name__ = ["flambe", "swf", "MovieKeyframe"];
    Jc.prototype = {
        __class__: Jc
    };
    var Ib = function() {};
    e["flambe.util.BitSets"] = Ib;
    Ib.__name__ = ["flambe", "util", "BitSets"];
    Ib.set = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    var pb = function() {
        this.mainSection = new T;
        this.sections = new T
    };
    e["flambe.util.Config"] = pb;
    pb.__name__ = ["flambe", "util", "Config"];
    pb.parse = function(a) {
        for (var b = new pb, c = new ha("^\\s*;", ""), d = new ha("^\\s*\\[\\s*([^\\]]*)\\s*\\]", ""), f = new ha("^\\s*([\\w\\.\\-_]+)\\s*=\\s*(.*)", ""), g = b.mainSection, e = 0, a = (new ha("\r\n|\r|\n", "g")).split(a); e < a.length;) {
            var k =
                a[e];
            ++e;
            if (!c.match(k))
                if (d.match(k))
                    if (k = d.matched(1), g = b.sections, null != H[k] ? g.existsReserved(k) : g.h.hasOwnProperty(k)) g = b.sections, g = null != H[k] ? g.getReserved(k) : g.h[k];
                    else {
                        var g = new T,
                            i = b.sections;
                        null != H[k] ? i.setReserved(k, g) : i.h[k] = g
                    }
            else if (f.match(k)) {
                var k = f.matched(1),
                    i = f.matched(2),
                    h = i.charCodeAt(0);
                if ((34 == h || 39 == h) && i.charCodeAt(i.length - 1) == h) i = G.substr(i, 1, i.length - 2);
                i = ba.replace(ba.replace(ba.replace(ba.replace(ba.replace(ba.replace(i, "\\n", "\n"), "\\r", "\r"), "\\t", "\t"), "\\'", "'"),
                    '\\"', '"'), "\\\\", "\\");
                null != H[k] ? g.setReserved(k, i) : g.h[k] = i
            }
        }
        return b
    };
    pb.prototype = {
        __class__: pb
    };
    var ed = function() {};
    e["flambe.util.LogHandler"] = ed;
    ed.__name__ = ["flambe", "util", "LogHandler"];
    var Kc = function(a) {
        this.config = a;
        this.missingTranslation = new N
    };
    e["flambe.util.MessageBundle"] = Kc;
    Kc.__name__ = ["flambe", "util", "MessageBundle"];
    Kc.prototype = {
        __class__: Kc
    };
    var Mb = function() {
        this.success = new N;
        this.error = new N;
        this.progressChanged = new ca;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    e["flambe.util.Promise"] =
        Mb;
    Mb.__name__ = ["flambe", "util", "Promise"];
    Mb.prototype = {
        set_result: function(a) {
            if (this.hasResult) throw new n("Promise result already assigned");
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function(a) {
            return this.hasResult ? (a(this._result), null) : this.success.connect(a).once()
        },
        set_progress: function(a) {
            this._progress != a && (this._progress = a, this.progressChanged.emit());
            return a
        },
        set_total: function(a) {
            this._total != a && (this._total = a, this.progressChanged.emit());
            return a
        },
        __class__: Mb,
        __properties__: {
            set_total: "set_total",
            set_progress: "set_progress",
            set_result: "set_result"
        }
    };
    var ca = function(a) {
        R.call(this, a)
    };
    e["flambe.util.Signal0"] = ca;
    ca.__name__ = ["flambe", "util", "Signal0"];
    ca.__super__ = R;
    ca.prototype = r(R.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function() {
            var a = this;
            this._head == R.DISPATCHING_SENTINEL ? this.defer(function() {
                a.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList ||
                b.dispose(), b = b._next;
            this.didEmit(a)
        },
        __class__: ca
    });
    var mc = function(a) {
        this.next = null;
        this.fn = a
    };
    e["flambe.util._SignalBase.Task"] = mc;
    mc.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    mc.prototype = {
        __class__: mc
    };
    var U = function() {};
    e["flambe.util.Strings"] = U;
    U.__name__ = ["flambe", "util", "Strings"];
    U.getFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? G.substr(a, b + 1, null) : null
    };
    U.removeFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? G.substr(a, 0, b) : a
    };
    U.getUrlExtension =
        function(a) {
            var b = a.lastIndexOf("?");
            0 <= b && (a = G.substr(a, 0, b));
            b = a.lastIndexOf("/");
            0 <= b && (a = G.substr(a, b + 1, null));
            return U.getFileExtension(a)
        };
    U.joinPath = function(a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    U.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = a + (0 < a.length ? " [" : "["), d = 0; d < c;) {
                0 < d && (a += ", ");
                var f = b[d],
                    g = b[d + 1];
                if (w.__instanceof(g, Error)) {
                    var e = g.stack;
                    null != e && (g = e)
                }
                a += f + "=" + s.string(g);
                d += 2
            }
            a += "]"
        }
        return a
    };
    var Lc = function() {
        this.__sprites = {};
        this.__spritesFormat = {}
    };
    e["framework.engine.SpriteSheet"] = Lc;
    Lc.__name__ = ["framework", "engine", "SpriteSheet"];
    Lc.prototype = {
        add: function(a) {
            for (var b = I.get_instance().pack.getTexture(a), c = 0, a = JSON.parse(I.get_instance().pack.getFile(a + ".json").toString()).frames; c < a.length;) {
                var d = a[c];
                ++c;
                var f = b.subTexture(d.frame.x, d.frame.y, d.frame.w, d.frame.h);
                this.__sprites[d.filename] = f;
                this.__spritesFormat[d.filename] = d.frame
            }
        },
        get: function(a) {
            return this.__sprites[a]
        },
        getFormat: function(a) {
            return this.__spritesFormat[a]
        },
        __class__: Lc
    };
    var Ca = function() {};
    e["framework.util.AnimationUtil"] = Ca;
    Ca.__name__ = ["framework", "util", "AnimationUtil"];
    Ca.pulse1 = function(a, b, c, d) {
        var f = new Na,
            a = new Ya([new Xa([new Ba(a.scaleX, 1, c), new Ba(a.scaleY, d, c)]), new Xa([new Ba(a.scaleX, d, c), new Ba(a.scaleY, 1, c)])]);
        f.run(new Wb(a));
        b.add(f);
        return f
    };
    Ca.popup = function(a, b, c, d, f) {
        null == d && (d = 0);
        a.setScale(c);
        y.to(a, b, {
            scaleX: 1,
            scaleY: 1
        }, d, f, J.backOut)
    };
    Ca.shake = function(a, b) {
        for (var c = a.x._value, d = 25, f = 0; 7 > f;) {
            var e = f++;
            y.to(a, 0.1, {
                    x: c + d
                }, 0.1 * e, 6 == e ?
                b : null);
            d *= -0.5
        }
    };
    var Wc = function() {};
    e["framework.util.BrowserUtil"] = Wc;
    Wc.__name__ = ["framework", "util", "BrowserUtil"];
    Wc.setDisplay = function(a, b) {
        var c = window.document.getElementById(a);
        null != c && (c.style.display = b)
    };
    var V = function(a) {
        this.active = !1;
        ta.call(this, a)
    };
    e["framework.util.Console"] = V;
    V.__name__ = ["framework", "util", "Console"];
    V.trace = function(a) {
        if (null != V.instanse && V.instanse.active) {
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                V.instanse.text = s.string(c) + " " + V.instanse.text
            }
            V.instanse.text =
                "\n" + V.instanse.text;
            V.instanse.label.set_text(V.instanse.text)
        }
    };
    V.__super__ = ta;
    V.prototype = r(ta.prototype, {
        onAdded: function() {
            var a = this,
                b = I.get_instance(),
                c = new Ja(16777215, C.STAGE_WIDTH, C.STAGE_HEIGHT);
            this.owner.addChild((new m).add(c));
            this.label = new xa(b.arial, "");
            this.label.setWrapWidth(C.STAGE_WIDTH).setAlign(S.Left);
            this.label.y.set__(50);
            this.text = "";
            this.owner.addChild((new m).add(this.label));
            c = new xa(b.arial, "close");
            c.centerAnchor();
            c.get_pointerDown().connect(function() {
                b.director.unwindToScene(a.back)
            });
            this.owner.addChild((new m).add(c));
            l.bottomCenterSprite(c);
            c = new xa(b.arial, "clear");
            c.centerAnchor();
            c.get_pointerDown().connect(function() {
                a.text = "";
                a.label.set_text("")
            });
            l.bottomCenterSprite(c, 50);
            this.active = !0
        },
        __class__: V
    });
    var l = function() {};
    e["framework.util.ScreenUtils"] = l;
    l.__name__ = ["framework", "util", "ScreenUtils"];
    l.centerX = function() {
        return C.STAGE_WIDTH / 2 + (C.CANVAS_WIDTH - C.STAGE_WIDTH) / 2
    };
    l.centerY = function() {
        return C.STAGE_HEIGHT / 2
    };
    l.rightX = function() {
        return C.CANVAS_WIDTH
    };
    l.bottomY =
        function() {
            return C.STAGE_HEIGHT
        };
    l.centerSprite = function(a, b, c, d) {
        null == d && (d = !0);
        null == c && (c = 0);
        null == b && (b = 0);
        b = d ? b : a.getNaturalWidth() / 2 + b;
        c = d ? c : a.getNaturalHeight() / 2 + c;
        a.setXY(l.centerX() + b, l.centerY() + c)
    };
    l.bottomCenterSprite = function(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        a.setXY(l.centerX() + b, C.STAGE_HEIGHT - a.getNaturalHeight() / 2 + c)
    };
    l.topCenter = function(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        a.setXY(l.centerX() + b, a.getNaturalHeight() / 2 + c)
    };
    l.bottomRight = function(a, b, c) {
        null == c && (c = 0);
        null ==
            b && (b = 0);
        a.setXY(l.rightX() - a.getNaturalWidth() / 2 + b, l.bottomY() - a.getNaturalHeight() / 2 + c)
    };
    l.bottomLeft = function(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        a.setXY(a.getNaturalWidth() / 2 + b, l.bottomY() - a.getNaturalHeight() / 2 + c)
    };
    l.centerInTheParent = function(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        l.centerInTheContainer(a, a.owner.parent, b, c)
    };
    l.bottomCenterInTheParent = function(a, b, c, d) {
        null == d && (d = !0);
        null == c && (c = 0);
        null == b && (b = 0);
        var f = a.owner.parent._compMap.Sprite_7,
            e = d ? 0 : a.getNaturalWidth() / 2,
            d = d ? 0 : a.getNaturalHeight() /
            2;
        null != f && a.setXY(f.getNaturalWidth() / 2 + b + e, f.getNaturalHeight() + c + d)
    };
    l.centerInTheContainer = function(a, b, c, d, f) {
        null == f && (f = !0);
        null == d && (d = 0);
        null == c && (c = 0);
        b = b._compMap.Sprite_7;
        c = f ? 0 - c : a.getNaturalWidth() / 2 - c;
        d = f ? 0 - d : a.getNaturalHeight() / 2 - d;
        null != b && a.setXY(b.getNaturalWidth() / 2 - c, b.getNaturalHeight() / 2 - d)
    };
    l.init = function() {};
    var A = function() {};
    e["framework.util.SpriteUtil"] = A;
    A.__name__ = ["framework", "util", "SpriteUtil"];
    A.sprite = function(a, b, c) {
        null == c && (c = !0);
        a = (new ra(A.spriteSheet.get(a))).centerAnchor();
        b.addChild((new m).add(a), c);
        return a
    };
    A.imagesprite = function(a, b, c) {
        null == c && (c = !0);
        a = new ra(I.get_instance().pack.getTexture(a));
        b.addChild((new m).add(a), c);
        return a
    };
    A.fillBG = function(a, b, c, d) {
        null == d && (d = 0.5);
        null == c && (c = 0);
        null == b && (b = 0.5);
        c = new Ja(c, C.CANVAS_WIDTH, C.CANVAS_HEIGHT);
        0 < d ? c.alpha.animate(0, b, d) : c.alpha.set__(b);
        a.addChild((new m).add(c));
        return c
    };
    A.addLabel = function(a, b, c, d) {
        null == d && (d = !0);
        a = new xa(c, a);
        a.setAlign(S.Center);
        b.addChild((new m).add(a), d);
        return a
    };
    var y = function() {};
    e["framework.util.Tweener"] = y;
    y.__name__ = ["framework", "util", "Tweener"];
    y.to = function(a, b, c, d, f, e) {
        null == d && (d = 0);
        var h = new Ya;
        0 > d && (d = 0);
        if (0 == b && 0 == d) {
            h = 0;
            for (b = K.fields(c); h < b.length;) e = b[h], ++h, d = K.getProperty(a, e), w.__cast(d, L).set__(K.field(c, e));
            null != f && f();
            return null
        }
        if (0 == b && 0 < d) {
            var k = new m;
            0 != d && h.add(new Wa(d));
            h.add(new Va(function() {
                for (var b = 0, d = K.fields(c); b < d.length;) {
                    var e = d[b];
                    ++b;
                    var g = K.getProperty(a, e);
                    w.__cast(g, L).set__(K.field(c, e))
                }
                null != f && f();
                k.dispose()
            }));
            b = new Na;
            j.root.addChild(k.add(b));
            b.run(h);
            return b
        }
        0 < d && h.add(new Wa(d));
        for (var d = [], i = 0, l = K.fields(c); i < l.length;) {
            var o = l[i];
            ++i;
            var r = K.getProperty(a, o);
            d.push(new Ba(r, K.field(c, o), b, e))
        }
        b = new Xa(d);
        h.add(b);
        var q = new m;
        h.add(new Va(function() {
            null != f && f();
            q.dispose()
        }));
        b = new Na;
        j.root.addChild(q.add(b));
        b.run(h);
        return b
    };
    var t = function() {
        this.spritesheet = I.get_instance().spritesheets;
        this.notification = Da.get_instance();
        this.game = I.get_instance().gameManager;
        this.ctx = I.get_instance();
        B.call(this)
    };
    e["framework.view.AbstractComponent"] = t;
    t.__name__ = ["framework", "view", "AbstractComponent"];
    t.__super__ = B;
    t.prototype = r(B.prototype, {
        get_name: function() {
            return "AbstractComponent_2"
        },
        __class__: t
    });
    var fa = function(a, b) {
        null == b && (b = 0);
        t.call(this);
        this.__texture = a;
        this.__delay = b
    };
    e["framework.view.AnimatedButton"] = fa;
    fa.__name__ = ["framework", "view", "AnimatedButton"];
    fa.__super__ = t;
    fa.prototype = r(t.prototype, {
        onAdded: function() {
            t.prototype.onAdded.call(this);
            this.__body = w.__cast(A.sprite(this.__texture,
                this.owner), ra);
            this.show()
        },
        get_body: function() {
            return this.__body
        },
        show: function(a) {
            null == a && (a = -1);
            this.__body.set_visible(!0);
            this.__body.setScale(0); - 1 == a && (a = this.__delay);
            y.to(this.__body, 0.5, {
                scaleX: 1,
                scaleY: 1
            }, a, null, J.backOut)
        },
        __class__: fa,
        __properties__: r(t.prototype.__properties__, {
            get_body: "get_body"
        })
    });
    var Oa = function(a, b, c) {
        null == c && (c = 0);
        fa.call(this, a, c);
        this.__texture2 = b;
        this.currentState = 1
    };
    e["framework.view.StateButton"] = Oa;
    Oa.__name__ = ["framework", "view", "StateButton"];
    Oa.__super__ =
        fa;
    Oa.prototype = r(fa.prototype, {
        changeState: function() {
            1 == this.currentState ? this.currentState = 2 : 2 == this.currentState && (this.currentState = 1);
            this.setState()
        },
        setState: function() {
            1 == this.currentState ? this.__body.texture = this.spritesheet.get(this.__texture) : 2 == this.currentState && (this.__body.texture = this.spritesheet.get(this.__texture2))
        },
        __class__: Oa
    });
    var I = function() {
        this.returnFromMenu = !1
    };
    e["game.GameContext"] = I;
    I.__name__ = ["game", "GameContext"];
    I.get_instance = function() {
        null == I.__instance && (I.__instance =
            new I);
        return I.__instance
    };
    I.prototype = {
        init: function(a, b, c) {
            this.isMobile = j._platform.getExternal().call("isMobile.any");
            this.pack = a;
            this.director = c;
            this.messages = new Kc(pb.parse(b.getFile("messages.ini").toString()));
            this.arial = new la(this.pack, "fonts/Arial");
            this.font = new la(this.pack, "fonts/font");
            this.digitsFont = new la(this.pack, "fonts/digits");
            this.whiteFont = new la(this.pack, "fonts/fontwhite");
            this.goldFont = new la(this.pack, "fonts/font_gold");
            this.scoreFont = new la(this.pack, "fonts/font_1");
            this.spritesheets = new Lc;
            this.spritesheets.add("ui");
            this.spritesheets.add("game");
            this.spritesheets.add("monsters");
            this.spritesheets.add("differentbloods");
            A.spriteSheet = this.spritesheets;
            this.sound = new Mc(this);
            this.sound.setSoundState(v.soundEnabled());
            this.gameManager = new Nc;
            this.animation = new qb;
            j._platform.getStage().resize.connect(E(this, this.checkOrientation));
            this.checkOrientation();
            qb.init()
        },
        enterHomeScene: function(a) {
            null == a && (a = !0);
            this.director.unwindToScene(Xc.create(this), a ? new mb(0.5,
                J.quadOut) : null)
        },
        enterPlayingScene: function(a) {
            null == a && (a = !0);
            var b = ab.create(this);
            this.director.unwindToScene(b.owner, a ? new mb(0.5, J.quadOut) : null);
            b.shown.connect(function() {}).once();
            Wc.setDisplay("spilgames-branding-image", "none")
        },
        showCredits: function(a) {
            this.director.pushScene(Yc.create(this, a))
        },
        pauseGame: function() {
            V.trace(["The advertisement is about to show, you should pause your game"]);
            this.sound.muteForAds()
        },
        resumeGame: function() {
            V.trace(["The advertisment is shown and your game can now be resumed"]);
            this.sound.unmuteForAds()
        },
        checkOrientation: function() {
            C.CANVAS_HEIGHT = u.STAGE_HEIGHT;
            C.CANVAS_WIDTH = u.STAGE_WIDTH;
            V.trace([j._platform.getStage().orientation, s.string(j._platform.getStage().orientation) == s.string(ia.Landscape)]);
            j._platform.getStage().orientation._value == ia.Landscape ? (j._platform.getExternal().call("enableWarning"), V.trace(["need rotate"])) : j._platform.getStage().orientation._value == ia.Portrait && (j._platform.getExternal().call("disableWarning"), V.trace(["normal"]))
        },
        __class__: I
    };
    var Zc = function() {};
    e["game.Main"] = Zc;
    Zc.__name__ = ["game", "Main"];
    Zc.main = function() {
        C.STAGE_WIDTH = 500;
        C.STAGE_HEIGHT = 900;
        C.MAX_STAGE_WIDTH = 720;
        u.BASE_WIDTH = C.STAGE_WIDTH | 0;
        u.BASE_HEIGHT = C.STAGE_HEIGHT | 0;
        u.MAX_WIDTH = C.MAX_STAGE_WIDTH | 0;
        j.init();
        j._platform.getStage().lockOrientation(ia.Portrait);
        var a = new Vb;
        j.root.add(a);
        var b = Q.fromAssets("bootstrap");
        j._platform.loadAssetPack(b).get(function(b) {
            var d = Q.fromAssetsLocalized("locale");
            j._platform.loadAssetPack(d).get(function(d) {
                var e = Q.fromAssets("main"),
                    e = j._platform.loadAssetPack(e);
                e.get(function(e) {
                    l.init();
                    var g = I.get_instance();
                    g.init(e, d, a);
                    g.enterHomeScene(!1);
                    b.dispose()
                });
                e = $c.create(b, e);
                a.unwindToScene(e)
            })
        });
        C.CANVAS_HEIGHT = u.STAGE_HEIGHT;
        C.CANVAS_WIDTH = u.STAGE_WIDTH
    };
    var qb = function() {};
    e["game.control.AnimationControl"] = qb;
    qb.__name__ = ["game", "control", "AnimationControl"];
    qb.init = function() {
        for (var a = I.get_instance(), b = [], c = [], d = [0, 0], f = 1; 7 > f;) {
            for (var e = f++, c = [], h = 0; 6 > h;) d = h++, d = "blood" + e + ba.lpad(null == d ? "null" : "" + d, "0", 4), c.push(a.spritesheets.get(d)),
                d = a.spritesheets.getFormat(d), d = [0.5 * d.w, d.h];
            b.push((new Za("blood" + e, c)).setDuration(0.5).setAnchor(d[0], d[1]))
        }
        c = [];
        for (f = 0; 7 > f;) e = f++, e = "explosion" + ba.lpad(null == e ? "null" : "" + e, "0", 4), c.push(a.spritesheets.get(e)), e = a.spritesheets.getFormat(e), d = [0.5 * e.w, 0.5 * e.h];
        b.push((new Za("explosion", c)).setDuration(0.5).setAnchor(d[0], d[1]));
        a.lib = $a.fromFlipbooks(b)
    };
    qb.prototype = {
        showFlyScore: function(a, b, c) {
            var d = new xa(I.get_instance().scoreFont, a);
            this.layer.addChild((new m).add(d));
            d.setAlign(S.Center).setXY(b,
                c);
            y.to(d, 0.3, {
                y: d.y._value - 70
            }, 0, null, J.cubeOut);
            y.to(d, 0.2, {
                alpha: 0
            }, 0.5, function() {
                d.owner.dispose()
            })
        },
        showMessage: function(a, b, c) {
            var d = A.sprite(a, this.layer).setScale(0).setXY(b, c);
            y.to(d, 0.5, {
                scaleX: 1,
                scaleY: 1
            }, 0, function() {
                d.owner.dispose()
            }, J.backOut)
        },
        showBlood: function(a, b, c, d) {
            var f = I.get_instance().lib.createSprite("blood" + c, !0);
            this.layer.addChild((new m).add(f));
            f.setXY(a, b);
            f.get_looped().connect(function() {
                null != d && d();
                f.owner.dispose()
            })
        },
        showAnim: function(a, b, c, d, f) {
            var e = I.get_instance().lib.createSprite(d, !0);
            this.layer.addChild((new m).add(e));
            e.setXY(a, b);
            e.setScale(c);
            e.get_looped().connect(function() {
                null != f && f();
                e.owner.dispose()
            })
        },
        showBombExplosion: function(a, b, c) {
            I.get_instance();
            for (var d = 1; 4 > d;) {
                var f = [d++],
                    e = [A.sprite("bublik" + f[0] + ".png", this.layer).setScale(0).setXY(a, b)],
                    h = e[0],
                    k = 0.1 * f[0],
                    f = function(a, b) {
                        return function() {
                            null != c && 3 == b[0] && c();
                            a[0].owner.dispose()
                        }
                    }(e, f);
                y.to(h, 0.25, {
                    scaleX: 1,
                    scaleY: 1
                }, k, f, J.bounceOut)
            }
        },
        __class__: qb
    };
    var Nc = function() {
        this.bestScore = this.playingGame =
            this.score = 0;
        null != v.getData(v.BEST) && (this.bestScore = v.getData(v.BEST));
        null != v.getData(v.GAME) && (this.playingGame = v.getData(v.GAME))
    };
    e["game.control.GameManager"] = Nc;
    Nc.__name__ = ["game", "control", "GameManager"];
    Nc.prototype = {
        __class__: Nc
    };
    var Da = function() {
        this.levelLose = new ca;
        this.restartLevel = new ca
    };
    e["game.control.Notification"] = Da;
    Da.__name__ = ["game", "control", "Notification"];
    Da.get_instance = function() {
        null == Da.__instance && (Da.__instance = new Da);
        return Da.__instance
    };
    Da.prototype = {
        __class__: Da
    };
    var Mc = function(a) {
        this.__play = !1;
        this.__ctx = a
    };
    e["game.control.SoundControl"] = Mc;
    Mc.__name__ = ["game", "control", "SoundControl"];
    Mc.prototype = {
        play: function(a, b, c) {
            null == b && (b = 0);
            var d = this,
                a = "sounds/" + a;
            if (this.__play)
                if (0 == b) this.__ctx.pack.getSound(a).play();
                else {
                    var f = new Na;
                    f.run(new Ya([new Wa(b), new Va(function() {
                        d.__ctx.pack.getSound(a).play()
                    })]));
                    null == c ? j.root.add(f) : c.add(f)
                }
        },
        playLoop: function(a, b) {
            null == b && (b = 1);
            this.stopLoop();
            a = "sounds/" + a;
            null == this.__bgSound && (this.__bgSound = this.__ctx.pack.getSound(a).loop(b));
            this.__play || this.__bgSound.set_paused(!0)
        },
        stopLoop: function() {
            null != this.__bgSound && (this.__bgSound.dispose(), this.__bgSound = null)
        },
        changeVolume: function() {
            this.__play = !this.__play;
            null != this.__bgSound && this.__bgSound.set_paused(!this.__play);
            v.setSoundState(this.__play)
        },
        setSoundState: function(a) {
            this.__play = a
        },
        muteForAds: function() {
            this.__curentState = this.__play;
            this.__play = !1;
            this.__bgSound.set_paused(!0)
        },
        unmuteForAds: function() {
            this.__curentState && (this.__play = !0, this.__bgSound.set_paused(!1))
        },
        __class__: Mc
    };
    var v = function() {};
    e["game.control.StorageController"] = v;
    v.__name__ = ["game", "control", "StorageController"];
    v.save = function() {
        var a = I.get_instance().gameManager;
        a.score > a.bestScore && (a.bestScore = a.score);
        v.set(v.BEST, a.bestScore);
        v.set(v.GAME, a.playingGame)
    };
    v.getData = function(a) {
        return v.get(a)
    };
    v.soundEnabled = function() {
        return v.get("sound", !0)
    };
    v.setSoundState = function(a) {
        return v.set("sound", a)
    };
    v.tutorilaShowed = function() {
        return v.get("tutorial", !1)
    };
    v.setTutorilaShowed = function() {
        return v.set("tutorial", !0)
    };
    v.set = function(a, b) {
        return j._platform.getStorage().set(v.prefix + a, b)
    };
    v.get = function(a, b) {
        return j._platform.getStorage().get(v.prefix + a, b)
    };
    var ga = function() {
        this.current = 0;
        this.showed = v.tutorilaShowed()
    };
    e["game.control.TutorialManager"] = ga;
    ga.__name__ = ["game", "control", "TutorialManager"];
    ga.get_instance = function() {
        null == ga.__instance && (ga.__instance = new ga);
        return ga.__instance
    };
    ga.prototype = {
        showTutorial: function() {
            this.showed || (this.current++, this.tutorial.show(this.current), 6 == this.current &&
                (this.showed = !0, v.setTutorilaShowed()))
        },
        init: function(a) {
            this.tutorial = new ac;
            a.addChild((new m).add(this.tutorial))
        },
        getBlobs: function() {
            if (1 != this.current) {
                if (2 == this.current) return [2, 1];
                if (3 == this.current) return [1, 2];
                if (5 == this.current) return [2]
            }
            return [1]
        },
        availablePlace: function(a, b) {
            return 1 == this.current && 2 == a && 2 == b || 2 == this.current && 1 == a && 3 == b || 4 == this.current && 3 == a && 2 == b || 4 < this.current ? !0 : !1
        },
        allowRotate: function() {
            return this.showed || 3 == this.current ? !0 : !1
        },
        __class__: ga
    };
    var Oc = function() {};
    e["pathfinder.IMap"] = Oc;
    Oc.__name__ = ["pathfinder", "IMap"];
    Oc.prototype = {
        __class__: Oc
    };
    var bc = function(a, b) {
        this.cols = a;
        this.rows = b
    };
    e["game.model.MyMap"] = bc;
    bc.__name__ = ["game", "model", "MyMap"];
    bc.__interfaces__ = [Oc];
    bc.prototype = {
        isWalkable: function(a, b) {
            return 1 == this.field[a][b]
        },
        fill: function(a) {
            this.field = [
                [],
                [],
                [],
                [],
                []
            ];
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                this.field[c.x][c.y] = 1
            }
        },
        __class__: bc
    };
    var C = function() {};
    e["game.model.Options"] = C;
    C.__name__ = ["game", "model", "Options"];
    var Yc = function() {};
    e["game.scene.CreditsScene"] = Yc;
    Yc.__name__ = ["game", "scene", "CreditsScene"];
    Yc.create = function(a, b) {
        var c = new m;
        c.add(new ta(!1));
        var d = new m,
            f = new o;
        c.addChild(d.add(f));
        f = new Ja(0, C.CANVAS_WIDTH, C.CANVAS_HEIGHT);
        f.alpha.animate(0, 0.5, 0.5);
        d.addChild((new m).add(f));
        d = A.sprite("credits0000", d);
        l.centerSprite(d, 0, 0);
        j._platform.getPointer().down.connect(function() {
            a.director.unwindToScene(b)
        }).once();
        return c
    };
    var ab = function(a) {
        ta.call(this, a)
    };
    e["game.scene.GameScene"] = ab;
    ab.__name__ = ["game", "scene",
        "GameScene"
    ];
    ab.create = function(a) {
        var b = new ab,
            c = new m;
        c.add(b);
        var d = new m,
            f = new o;
        c.addChild(d.add(f));
        c = new z;
        d.add(c);
        a.gameView = c;
        return b
    };
    ab.__super__ = ta;
    ab.prototype = r(ta.prototype, {
        __class__: ab
    });
    var Xc = function() {};
    e["game.scene.MainMenuScene"] = Xc;
    Xc.__name__ = ["game", "scene", "MainMenuScene"];
    Xc.create = function(a) {
        a.sound.playLoop("loop", 1);
        var b = Ea.first ? 3.5 : 0.5,
            c = new m,
            d = new m,
            f = new o,
            f = d.add(f);
        c.addChild(f);
        f = new Ea;
        f = (new m).add(f);
        d.addChild(f);
        var e = A.sprite("play_small0000", d);
        l.centerSprite(e,
            0, 0);
        Ca.popup(e, 0.5, 0, b, function() {
            Ca.pulse1(e, d, 1, 1.05)
        });
        e.get_pointerUp().connect(function(b) {
            b._stopped = !0;
            a.sound.play("click");
            a.returnFromMenu ? (I.get_instance().pauseGame(), j._platform.getExternal().call("commercialBreak", [function() {
                I.get_instance().resumeGame();
                j._platform.getExternal().call("gameplayStart");
                a.enterPlayingScene()
            }])) : (j._platform.getExternal().call("gameplayStart"), a.enterPlayingScene())
        });
        var f = new rb(b),
            h = (new m).add(f);
        d.addChild(h);
        l.bottomLeft(f.get_body(), 0, 0);
        f = A.sprite("credits_button0000",
            d);
        f.get_pointerUp().connect(function(b) {
            b._stopped = !0;
            a.showCredits(c)
        });
        l.bottomRight(f, 0, 0);
        Ca.popup(f, 0.5, 0, b);
        return c
    };
    var $c = function() {};
    e["game.scene.PreloaderScene"] = $c;
    $c.__name__ = ["game", "scene", "PreloaderScene"];
    $c.create = function(a, b) {
        var c = new m,
            d = new Ja(14414581, C.CANVAS_WIDTH, C.CANVAS_HEIGHT);
        c.addChild((new m).add(d));
        d = new ra(a.getTexture("progress/loader_back"));
        d.centerAnchor();
        var f = (new m).add(d);
        l.centerSprite(d, 0, 0);
        c.addChild(f);
        var e = new ra(a.getTexture("progress/loader_progress"));
        e.centerAnchor();
        f.addChild((new m).add(e));
        l.centerInTheParent(e, 0, 100);
        f = e.getNaturalHeight();
        e.scissor = new eb(0, 0, 0, f);
        f = (C.CANVAS_WIDTH - 20) / d.getNaturalWidth();
        d.setScale(Math.min(1, f));
        b.progressChanged.connect(function() {
            var a = b._progress / b._total,
                c = e.getNaturalWidth() * a,
                d = e.getNaturalHeight();
            e.scissor = new eb(0, 0, c, d);
            1 <= a && j._platform.getExternal().call("loadingComplete")
        });
        j._platform.getExternal().call("startLoading");
        return c
    };
    var cc = function(a) {
        null == a && (a = !1);
        B.call(this);
        this.isMainMenu =
            a
    };
    e["game.view.BackgroundView"] = cc;
    cc.__name__ = ["game", "view", "BackgroundView"];
    cc.__super__ = B;
    cc.prototype = r(B.prototype, {
        get_name: function() {
            return "BackgroundView_3"
        },
        onAdded: function() {
            this._layer = new m;
            this.owner.addChild(this._layer);
            this.create()
        },
        create: function() {
            this.bgsprite = A.imagesprite("bg/bg1", this.owner);
            this.bgsprite.centerAnchor().setScaleXY(1, 1);
            l.centerSprite(this.bgsprite)
        },
        __class__: cc
    });
    var z = function() {
        this.maxNumber = 2;
        this.score = 0;
        this.field = [
            [],
            [],
            [],
            [],
            []
        ];
        t.call(this);
        z.DW = 2.5 * z.H - l.centerX()
    };
    e["game.view.GameView"] = z;
    z.__name__ = ["game", "view", "GameView"];
    z.__super__ = t;
    z.prototype = r(t.prototype, {
        onAdded: function() {
            this.map = new bc(5, 5);
            this.game.score = 0;
            this.game.playingGame++;
            this.world = new m;
            this.world.add(new o);
            this.owner.addChild(this.world);
            this.bg = new cc;
            this.world.add(this.bg);
            this.shadow = new dc;
            this.world.addChild((new m).add(this.shadow));
            this.gameLayer = new m;
            this.gameLayerSprite = new o;
            this.gameLayer.add(this.gameLayerSprite);
            this.world.addChild(this.gameLayer);
            this.ui = new ec;
            this.owner.addChild((new m).add(this.ui));
            this.ctx.gameManager.ui = this.ui;
            this.addListeners();
            this.ctx.animation.layer = this.world;
            this.game.pause = !0;
            this.tutorial = ga.get_instance();
            this.tutorial.showed || (this.tutorial.init(this.owner), this.tutorial.showTutorial());
            this.initBlobGroup();
            v.tutorilaShowed()
        },
        addListeners: function() {
            this.__disposer = this.owner._compMap.Disposer_4;
            null == this.__disposer && this.owner.add(this.__disposer = new xb);
            this.__disposer.connect0(this.ui.pauseSignal, E(this,
                this.onClickPause));
            this.__disposer.connect0(this.ui.unPauseSignal, E(this, this.onClickUnPause));
            this.__disposer.connect0(this.notification.restartLevel, E(this, this.onGameRestart));
            this.__disposer.connect0(this.notification.levelLose, E(this, this.onLevelLose))
        },
        onLevelLose: function() {
            this.game.bestScore = Math.max(this.score, this.game.bestScore) | 0;
            v.save();
            this.game.score = this.score;
            this.ctx.enterHomeScene()
        },
        onGameRestart: function() {},
        onClickPause: function() {},
        onClickUnPause: function() {},
        initBlobGroup: function() {
            this.findFree() ||
                (v.save(), this.ui.showLose());
            this.combo = 1;
            var a = [this.getRandomNum()];
            if (this.tutorial.showed) {
                if (5 <= s.random(10) && this.findTwoFree()) {
                    var b = this.getRandomNum();
                    b == a[0] && (1 == b ? ++b : --b);
                    a.push(b)
                }
            } else a = this.tutorial.getBlobs();
            this.blobs = new sb(a);
            this.blobs.stopMove.connect(E(this, this.place));
            this.blobs.move.connect(E(this, this.move));
            this.tutorial.showed ? this.gameLayer.addChild((new m).add(this.blobs)) : this.owner.addChild((new m).add(this.blobs))
        },
        move: function(a, b) {
            if (0 <= a && 0 <= b && 5 > a && 5 > b)
                if (1 ==
                    this.blobs.blobs.length) this.shadow.show(a, b, null == this.field[a][b]);
                else {
                    var c = null == this.blobs.grp[0][1] ? a : a + 1,
                        d = null == this.blobs.grp[0][1] ? b + 1 : b;
                    0 <= c && 0 <= d && 5 > c && 5 > d ? this.shadow.show2(a, b, c, d, null == this.field[a][b] && null == this.field[c][d]) : this.shadow.reset()
                }
            else this.shadow.reset()
        },
        findFree: function() {
            for (var a = 0; 5 > a;)
                for (var b = a++, c = 0; 5 > c;)
                    if (null == this.field[c++][b]) return !0;
            return !1
        },
        findTwoFree: function() {
            for (var a = 0; 4 > a;)
                for (var b = a++, c = 0; 4 > c;) {
                    var d = c++;
                    if (null == this.field[d][b] && (null ==
                            this.field[d + 1][b] || null == this.field[d][b + 1])) return !0
                }
            return !1
        },
        place: function(a, b) {
            this.shadow.reset();
            if (this.availablePlace(a, b)) {
                this.blobs.fixPlace(a, b, this.gameLayer);
                for (var c = 0; 2 > c;)
                    for (var d = c++, f = 0; 2 > f;) {
                        var e = f++,
                            h = this.blobs.grp[d][e];
                        null != h && (this.field[a + e][b + d] = h)
                    }
                this.tutorial.showTutorial();
                this.checkMerge(this.blobs.getForCheck())
            } else this.blobs.back()
        },
        availablePlace: function(a, b) {
            if (!this.tutorial.showed) return this.tutorial.availablePlace(a, b) ? !0 : !1;
            for (var c = 0; 2 > c;)
                for (var d =
                        c++, f = 0; 2 > f;) {
                    var e = f++;
                    if (null != this.blobs.grp[d][e] && (0 > a + e || 4 < a + e || 0 > b + d || 4 < b + d || null != this.field[a + e][b + d])) return !1
                }
            return !0
        },
        checkMerge: function(a) {
            var b = this;
            this.chain = [];
            this.findType = a.type;
            this.checkNearest(a);
            if (2 < this.chain.length) {
                this.map.fill(this.chain);
                for (var a = 0, c = -1, d = -1, f = -1, e = this.chain[0], h = 0, k = 0, i = this.chain; k < i.length;) {
                    var j = i[k];
                    ++k;
                    this.field[j.x][j.y] = null;
                    0 == a && (c = j.x, d = j.y, f = j.type + 1);
                    ++a;
                    if (!(c == j.x && d == j.y)) {
                        var l = this.findPath(c, d, j);
                        l.length > h && (h = l.length);
                        j.destroyAnim(l);
                        this.ctx.sound.play("swoosh")
                    }
                }
                e.create.connect(function() {
                    if (8 > f) {
                        var a = b.chain.length * (f - 1) * b.combo;
                        b.game.score += a;
                        b.ctx.animation.showFlyScore("+" + a, c * z.H + 0.5 * z.H - z.DW, d * z.H + z.DH);
                        b.ui.updateScore(b.game.score);
                        3 == f && b.tutorial.showTutorial();
                        1 < b.combo && b.ctx.animation.showMessage("combo_4.png", c * z.H + 0.5 * z.H - z.DW, d * z.H + z.DH + 150)
                    }
                    b.combo++;
                    b.createMerged(c, d, f)
                }).once();
                e.finishBlood.connect(function() {
                    8 > f ? b.checkMerge(b.field[c][d]) : b.initBlobGroup()
                }).once();
                e.destroyLast(h);
                e = null
            } else a = this.blobs.getForCheck(),
                null != a ? this.checkMerge(a) : (this.blobs.destroy(), this.initBlobGroup())
        },
        findPath: function(a, b, c) {
            var d = new Pc(this.map),
                c = new Fa(c.x, c.y),
                a = new Fa(a, b);
            return d.createPath(c, a, Z.PRODUCT, !1, !1)
        },
        checkNearest: function(a) {
            if (null != a && a.type == this.findType && -1 == this.chain.indexOf(a)) {
                this.chain.push(a);
                var b = a.x,
                    a = a.y;
                this.checkNearest(this.field[sa.clamp(b - 1, 0, 4)][a]);
                this.checkNearest(this.field[sa.clamp(b + 1, 0, 4)][a]);
                this.checkNearest(this.field[b][sa.clamp(a - 1, 0, 4)]);
                this.checkNearest(this.field[b][sa.clamp(a +
                    1, 0, 4)])
            }
        },
        createMerged: function(a, b, c) {
            if (8 > c) {
                var d = new sb([c]);
                this.gameLayer.addChild((new m).add(d));
                d.fixPlace(a, b, this.gameLayer);
                this.field[a][b] = d.grp[0][0];
                c > this.maxNumber && (this.maxNumber = c)
            } else {
                c = a - 1;
                for (a += 2; c < a;)
                    for (var d = c++, f = b - 1, e = b + 2; f < e;) {
                        var h = f++,
                            k = this.field[sa.clamp(d, 0, 4)][sa.clamp(h, 0, 4)];
                        if (null != k) {
                            var i = 2 * k.type;
                            this.game.score += i;
                            this.ctx.animation.showFlyScore("+" + i, k.x * z.H + 0.5 * z.H - z.DW, k.y * z.H + z.DH);
                            this.ctx.animation.showAnim(k.sprite.x._value, k.sprite.y._value - 40,
                                1.5, "explosion");
                            k.destroy();
                            this.field[sa.clamp(d, 0, 4)][sa.clamp(h, 0, 4)] = null
                        }
                    }
                Ca.shake(this.world._compMap.Sprite_7, null);
                this.ui.updateScore(this.game.score)
            }
        },
        getRandomNum: function() {
            for (var a = [10, 20, 30, 38, 44, 48, 50], b = s.random(a[this.maxNumber - 1]), c = 1, d = 0, f = this.maxNumber; d < f;) {
                var e = d++;
                if (b < a[e]) {
                    c = e + 1;
                    break
                }
            }
            return c
        },
        onUpdate: function() {},
        __class__: z
    });
    var Ea = function() {
        t.call(this)
    };
    e["game.view.MainMenuView"] = Ea;
    Ea.__name__ = ["game", "view", "MainMenuView"];
    Ea.__super__ = t;
    Ea.prototype = r(t.prototype, {
        onAdded: function() {
            var a = A.imagesprite("bg/sky", this.owner),
                b = A.sprite("title0000", this.owner);
            b.y.set__(-150);
            b.x.set__(l.centerX());
            var c = A.imagesprite("bg/guys", this.owner).centerAnchor();
            l.bottomCenterSprite(c, 0, 100);
            var d = c.y._value,
                f = c.y;
            f.set__(f._value + c.getNaturalHeight());
            Ea.first ? (y.to(a, 3, {
                y: C.STAGE_HEIGHT - a.getNaturalHeight()
            }, 0, E(this, this.showAds), J.cubeOut), y.to(b, 0.25, {
                y: l.centerY() - 300
            }, 3, null, J.backOut), y.to(c, 2, {
                y: d
            }, 1, null, J.cubeOut), Ea.first = !1) : (a.y.set__(C.STAGE_HEIGHT - a.getNaturalHeight()),
                b.y.set__(l.centerY() - 300), c.y.set__(d))
        },
        showAds: function() {
            I.get_instance().pauseGame();
            j._platform.getExternal().call("commercialBreak", [(dd = I.get_instance(), E(dd, dd.resumeGame))])
        },
        __class__: Ea
    });
    var rb = function(a) {
        null == a && (a = 0);
        Oa.call(this, "sound_button0000", "sound_disabled0000", a);
        this.currentState = v.soundEnabled() ? 1 : 2
    };
    e["game.view.SoundButton"] = rb;
    rb.__name__ = ["game", "view", "SoundButton"];
    rb.__super__ = Oa;
    rb.prototype = r(Oa.prototype, {
        onAdded: function() {
            Oa.prototype.onAdded.call(this);
            this.setState();
            this.__body.get_pointerDown().connect(E(this, this.changeSound))
        },
        changeSound: function() {
            this.ctx.sound.changeVolume();
            this.changeState()
        },
        __class__: rb
    });
    var ac = function() {
        t.call(this)
    };
    e["game.view.TutorialView"] = ac;
    ac.__name__ = ["game", "view", "TutorialView"];
    ac.__super__ = t;
    ac.prototype = r(t.prototype, {
        onAdded: function() {
            t.prototype.onAdded.call(this);
            this.container = new o;
            this.hand = A.sprite("hand.png", this.owner);
            this.hand.set_pointerEnabled(!1);
            this.hand.rotation.set__(30)
        },
        show: function(a) {
            var b =
                this;
            if (5 == a) this.script.stopAll(), this.script = null, this.hand.owner.dispose(), this.background.set_visible(!1);
            else {
                null != this.background && this.background.owner.dispose();
                this.background = A.imagesprite("bg/tutor" + (4 == a ? 3 : a), this.owner, !1).centerAnchor();
                this.background.set_pointerEnabled(!1);
                if (3 == a) a = A.addLabel("TAP", this.background.owner, this.ctx.font).setScale(0.5), l.bottomCenterInTheParent(a, 0, -310);
                else if (6 == a) {
                    a = A.addLabel("TAP TO CONTINUE", this.background.owner, this.ctx.font).setScale(0);
                    l.bottomCenterInTheParent(a,
                        0, -100);
                    l.centerSprite(this.background);
                    this.background.alpha.set__(0);
                    y.to(this.background, 0.5, {
                        alpha: 1
                    }, 1.5, null, J.backOut);
                    y.to(a, 0.5, {
                        scaleX: 0.5,
                        scaleY: 0.5
                    }, 3.5, function() {
                        j._platform.getPointer().down.connect(function() {
                            b.owner.dispose()
                        }).once()
                    }, J.backOut);
                    return
                }
                l.centerSprite(this.background);
                this.moveHand()
            }
        },
        moveHand: function() {
            var a = ga.get_instance().current;
            null != this.script && this.script.stopAll();
            1 == a ? (l.bottomCenterSprite(this.hand, -300, 550), this.script = y.to(this.hand, 1.5, {
                y: this.hand.y._value -
                    350
            }, 0, E(this, this.moveHand))) : 2 == a ? (l.bottomCenterSprite(this.hand, -350, 550), this.script = y.to(this.hand, 1.5, {
                y: this.hand.y._value - 250
            }, 0, E(this, this.moveHand))) : 3 == a ? (l.bottomCenterSprite(this.hand, -300, 500), this.hand.setScale(1), this.script = y.to(this.hand, 1, {
                scaleY: 0.8,
                scaleX: 0.8
            }, 0, E(this, this.moveHand))) : 4 == a && (l.bottomCenterSprite(this.hand, -350, 550), this.script = y.to(this.hand, 1.5, {
                y: this.hand.y._value - 250,
                x: this.hand.x._value + 200
            }, 0, E(this, this.moveHand)))
        },
        __class__: ac
    });
    var ec = function() {
        this.unPauseSignal =
            new ca;
        this.pauseSignal = new ca;
        t.call(this)
    };
    e["game.view.UIView"] = ec;
    ec.__name__ = ["game", "view", "UIView"];
    ec.__super__ = t;
    ec.prototype = r(t.prototype, {
        onAdded: function() {
            var a = this;
            this.uiContainer = new o;
            this.uiContainer.get_pointerDown().connect(E(this, this.onPanelDown));
            var b = (new m).add(this.uiContainer);
            this.owner.addChild(b);
            var c = A.sprite("scores.png", b);
            l.topCenter(c);
            this.bg = A.fillBG(b, 0.5);
            this.bg.set_visible(!1);
            this.title = A.sprite("pause.png", b);
            l.centerSprite(this.title, 0, 50);
            this.title.set_visible(!1);
            this.infoLabel = A.addLabel("PAUSE", this.title.owner, this.ctx.font);
            l.centerInTheParent(this.infoLabel, 0, -200);
            this.stars = new m;
            b.addChild(this.stars);
            this.scoreText = A.addLabel("0", c.owner, this.ctx.digitsFont);
            this.scoreText.setAlign(S.Center).setScale(0.7);
            l.centerInTheParent(this.scoreText, 0, -33);
            this.pauseBtn = new fa("pause_button0000", 0.2);
            b.addChild((new m).add(this.pauseBtn), !1);
            l.bottomRight(this.pauseBtn.get_body(), 0, 0);
            this.pauseBtn.get_body().get_pointerUp().connect(E(this, this.onClickPause));
            c = 0.5 * this.title.getNaturalWidth();
            this.restartBtn = new fa("restart_2.png", 0.2);
            this.title.owner.addChild((new m).add(this.restartBtn));
            this.restartBtn.get_body().setXY(c + 121, 103);
            this.restartBtn.get_body().get_pointerUp().connect(E(this, this.restart));
            this.exitBtn = new fa("home0000", 0.2);
            this.title.owner.addChild((new m).add(this.exitBtn));
            this.exitBtn.get_body().setXY(c - 121, 103);
            this.exitBtn.get_body().get_pointerUp().connect(function() {
                a.ctx.returnFromMenu = !0;
                a.ctx.enterHomeScene()
            });
            this.continueBtn =
                new fa("backbutton0000", 0.2);
            this.title.owner.addChild((new m).add(this.continueBtn));
            this.continueBtn.get_body().setXY(c, 63);
            this.continueBtn.get_body().get_pointerDown().connect(E(this, this.onClickContinue));
            this.soundBtn = new rb(0.2);
            b.addChild((new m).add(this.soundBtn), !1);
            l.bottomLeft(this.soundBtn.get_body(), 0, 0)
        },
        onClickPause: function(a) {
            a._stopped = !0;
            this.bg.set_visible(!0);
            this.title.set_visible(!0);
            this.game.pause = !0;
            this.pauseBtn.get_body().set_pointerEnabled(!1);
            j._platform.getExternal().call("gameplayStop")
        },
        onClickContinue: function() {
            this.title.set_visible(!1);
            this.bg.set_visible(!1);
            this.game.pause = !1;
            this.pauseBtn.get_body().set_pointerEnabled(!0);
            j._platform.getExternal().call("gameplayStart")
        },
        onPanelDown: function(a) {
            a._stopped = !0
        },
        updateScore: function(a) {
            this.scoreText.set_text("" + a)
        },
        showLose: function() {
            var a = this;
            j._platform.getExternal().call("gameplayStop");
            var b = A.sprite("crown.png", this.uiContainer.owner);
            this.plashka = A.imagesprite("bg/plashka", this.uiContainer.owner).centerAnchor();
            l.centerSprite(this.plashka,
                0, -20);
            this.plashkaY = this.plashka.y._value;
            this.plashka.y.set__(-600);
            this.plashka.set_visible(!1);
            b.setXY(this.plashka.x._value + 100, this.plashkaY);
            b.set_visible(!1);
            this.bg.set_visible(!0);
            this.game.pause = !0;
            this.pauseBtn.get_body().set_pointerEnabled(!1);
            this.pauseBtn.get_body().set_visible(!1);
            this.soundBtn.get_body().set_visible(!1);
            this.infoLabel.set_text("");
            this.plashka.set_visible(!0);
            y.to(this.plashka, 0.5, {
                y: this.plashkaY - 20
            }, 0, function() {
                a.game.bestScore >= a.game.score && (b.set_visible(!0),
                    y.to(b, 0.5, {
                        y: a.plashkaY - 300
                    }, 1.75, null, J.backOut))
            }, J.backOut);
            this.textContainer = A.sprite("plashka1.png", this.plashka.owner);
            l.centerInTheParent(this.textContainer, 18, -50);
            this.moregamesBtn = new fa("moregames.png", 0.2);
            this.plashka.owner.addChild((new m).add(this.moregamesBtn));
            this.moregamesBtn.get_body().setXY(348, 520);
            this.moregamesBtn.get_body().set_visible(!1);
            this.moregamesBtn.get_body().get_pointerDown().connect(function() {
                j._platform.getExternal().call("clickMoreGames")
            });
            this.restartBtn =
                new fa("restart_button0000", 0.2);
            this.plashka.owner.addChild((new m).add(this.restartBtn));
            this.restartBtn.get_body().setXY(228, 480);
            this.restartBtn.get_body().get_pointerUp().connect(E(this, this.restart));
            this.exitBtn = new fa("home0000", 0.2);
            this.plashka.owner.addChild((new m).add(this.exitBtn));
            this.exitBtn.get_body().setXY(107, 520);
            this.exitBtn.get_body().get_pointerUp().connect(function() {
                a.ctx.enterHomeScene()
            });
            this.ctx.sound.playLoop("winning", 1);
            this.restartBtn.show(1);
            this.moregamesBtn.show(1);
            this.exitBtn.show(1);
            this.addText("Score", 0.5, 2, 4);
            this.addDigits(this.game.score + "", 0.75, 222, 62);
            this.addText("Best", 1, 2, 96);
            this.addDigits(this.game.bestScore + "", 1.25, 222, 158);
            this.addText("Games", 1.5, 2, 195);
            this.addDigits(this.game.playingGame + "", 1.75, 222, 257);
            tb.delay(E(this, this.showParticles), 2E3)
        },
        showParticles: function() {
            for (var a = 0; 50 > a;) {
                a++;
                var b = new fc;
                this.stars.addChild((new m).add(b))
            }
        },
        addText: function(a, b, c, d) {
            a = A.addLabel(a, this.textContainer.owner, this.ctx.whiteFont);
            a.setAlign(S.Left).setXY(c,
                d).setAlpha(0);
            y.to(a, 0.5, {
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, b, null, J.backOut)
        },
        addDigits: function(a, b, c, d) {
            var f = A.addLabel(a, this.textContainer.owner, this.ctx.goldFont);
            f.setXY(c, d).setScale(0.7).setAlpha(0).setAnchor(0, 0.5 * f.getNaturalHeight());
            f.setAlign(S.Center);
            y.to(f, 0.25, {
                alpha: 1,
                scaleX: 0.9,
                scaleY: 0.5
            }, b, function() {
                y.to(f, 0.25, {
                    scaleX: 0.7,
                    scaleY: 0.7
                })
            }, J.backOut)
        },
        restart: function() {
            this.ctx.sound.playLoop("loop", 1);
            this.showAds()
        },
        onAdsFinished: function() {
            I.get_instance().resumeGame();
            this.ctx.enterPlayingScene();
            j._platform.getExternal().call("gameplayStart")
        },
        showAds: function() {
            I.get_instance().pauseGame();
            j._platform.getExternal().call("commercialBreak", [E(this, this.onAdsFinished)])
        },
        __class__: ec
    });
    var bb = function(a) {
        this.finishBlood = new ca;
        this.create = new ca;
        this.firstMove = !0;
        this.time = 0.25;
        this.timer = -1;
        t.call(this);
        this.type = a;
        this.initAnimation()
    };
    e["game.view.gameobjects.Blob"] = bb;
    bb.__name__ = ["game", "view", "gameobjects", "Blob"];
    bb.__super__ = t;
    bb.prototype = r(t.prototype, {
        initAnimation: function() {
            var a =
                I.get_instance();
            this.books = [];
            for (var b = [], c = [0, 0], d = bb.frames[this.type] + 1, f = 0; f < d;) c = f++, c = "monster" + this.type + ba.lpad(null == c ? "null" : "" + c, "0", 4), b.push(a.spritesheets.get(c)), c = a.spritesheets.getFormat(c), c = [0.5 * c.w, c.h];
            if (7 == this.type)
                for (a = 1; a < d;) f = a++, b.push(b[d - f]);
            this.books.push((new Za("wait", b)).setDuration(0.1 * b.length).setAnchor(c[0], c[1]));
            this.addFrame("stay", "monster" + this.type + "0000");
            this.addFrame("left", "monster_move" + this.type + "0001");
            this.addFrame("right", "monster_move" + this.type +
                "0002");
            this.addFrame("up", "monster_move" + this.type + "0003");
            this.addFrame("down", "monster_move" + this.type + "0004");
            this.lib = $a.fromFlipbooks(this.books)
        },
        addFrame: function(a, b) {
            var c = this.ctx.spritesheets.getFormat(b),
                d = 0.5 * c.w,
                c = c.h;
            this.books.push((new Za(a, [this.ctx.spritesheets.get(b)])).setDuration(0.5).setAnchor(d, c))
        },
        onAdded: function() {
            t.prototype.onAdded.call(this);
            this.sprite = new o;
            this.owner.add(this.sprite);
            this.shadow = A.sprite("monster_move" + this.type + "0000", this.owner).setXY(5, -30);
            this.shadow.setAlpha(0);
            this.moviePlayer = new $b(this.lib);
            this.moviePlayer.loop("stay");
            this.sprite.owner.add(this.moviePlayer);
            this.sprite.disablePixelSnapping();
            Ca.popup(this.sprite, 0.5, 0)
        },
        destroy: function() {
            this.owner.disposeChildren();
            this.owner.remove(this)
        },
        move: function() {
            if (0 < this.__path.length) {
                var a = this.__path.shift();
                y.to(this.sprite, this.time, {
                    x: (a.x + 0.5) * z.H - z.DW,
                    y: (a.y + 0.9) * z.H + z.DH
                }, 0, E(this, this.move), this.firstMove ? J.backIn : null);
                this.firstMove = !1;
                a.x < this.x ? this.moviePlayer.loop("right") : a.x > this.x ? this.moviePlayer.loop("left") :
                    a.y > this.y ? this.moviePlayer.loop("up") : a.y < this.y && this.moviePlayer.loop("down")
            } else this.destroy()
        },
        playAnim: function() {
            this.timer = 180 + s.random(180);
            7 == this.type && (this.timer = 60)
        },
        destroyLast: function(a) {
            var b = this;
            y.to(this.sprite, this.time, {
                alpha: 0
            }, this.time * (a - 1), function() {
                b.create.emit();
                7 > b.type ? (b.ctx.animation.showBlood(b.sprite.x._value, b.sprite.y._value, b.type, E(b, b.onFinishBlood)), b.ctx.sound.play("chpok2")) : (b.ctx.animation.showBombExplosion(b.sprite.x._value, b.sprite.y._value - 40, E(b,
                    b.onFinishBlood)), b.ctx.sound.play("bomb"))
            })
        },
        onFinishBlood: function() {
            this.finishBlood.emit();
            this.destroy()
        },
        destroyAnim: function(a) {
            this.__path = a;
            this.__path.shift();
            this.timer = -1;
            this.move()
        },
        onUpdate: function(a) {
            t.prototype.onUpdate.call(this, a);
            0 == --this.timer && (this.playAnim(), 7 == this.type ? this.moviePlayer.play("wait") : (a = s.random(10), 3 > a ? this.moviePlayer.play("wait") : (7 > a || this.moviePlayer.play("wait"), this.breath())))
        },
        showShadow: function() {
            this.shadow.set_visible(!0);
            this.shadow.setAlpha(0.2)
        },
        hideShadow: function() {
            this.shadow.set_visible(!1)
        },
        breath: function() {
            var a = this;
            y.to(this.sprite, 0.5, {
                scaleX: 0.9,
                scaleY: 1.1
            }, 0, function() {
                y.to(a.sprite, 0.5, {
                    scaleX: 1,
                    scaleY: 1
                })
            })
        },
        __class__: bb
    });
    var sb = function(a) {
        this.move = new Ha;
        this.stopMove = new Ha;
        this.grp = [
            [],
            []
        ];
        this.blobs = [];
        this.prevX = this.prevY = -1;
        t.call(this);
        this.__types = a;
        this.DH = z.DH;
        this.H = z.H;
        this.DW = z.DW;
        this.isMobile = this.ctx.isMobile
    };
    e["game.view.gameobjects.BlobGroup"] = sb;
    sb.__name__ = ["game", "view", "gameobjects", "BlobGroup"];
    sb.__super__ =
        t;
    sb.prototype = r(t.prototype, {
        onAdded: function() {
            t.prototype.onAdded.call(this);
            this.sprite = new o;
            this.owner.addChild((new m).add(this.sprite));
            l.bottomCenterSprite(this.sprite, 0, -80);
            A.sprite("circle0000", this.sprite.owner).setAlpha(0).setXY(0, -20);
            this.listener = this.sprite.get_pointerDown().connect(E(this, this.click));
            for (var a = 0, b = this.__types.length; a < b;) {
                var c = a++;
                if (0 < this.__types[c]) {
                    var d = new bb(this.__types[c]);
                    this.sprite.owner.addChild((new m).add(d));
                    this.grp[0][c] = d;
                    2 == this.__types.length &&
                        d.sprite.setXY(0.5 * (this.__types.length * c - 1) * this.H, 0);
                    this.blobs.push(d)
                }
            }
        },
        click: function() {
            this.dragged = !0;
            !ga.get_instance().showed && ga.get_instance().allowRotate() && (this.dragged = !1);
            this.dy = this.sprite.y._value - j._platform.getPointer().get_y();
            this.dx = this.sprite.x._value - j._platform.getPointer().get_x();
            this.startPoint = new Hb(j._platform.getPointer().get_x(), j._platform.getPointer().get_y());
            j._platform.getPointer().up.connect(E(this, this.release)).once()
        },
        release: function() {
            this.calculatePosition();
            this.dragged = !1;
            3 > this.startPoint.distanceTo(j._platform.getPointer().get_x(), j._platform.getPointer().get_y()) && 1 < this.blobs.length ? (ga.get_instance().allowRotate() && (this.rotate(), this.ctx.sound.play("laugh_" + (s.random(2) + 2)), ga.get_instance().showTutorial()), this.back()) : this.stopMove.emit(this.newX, this.newY)
        },
        calculatePosition: function() {
            var a = this.grp[0][0].sprite;
            this.newY = (this.sprite.y._value + a.y._value - this.DH - 0.5 * this.H) / this.H | 0;
            this.newX = (this.sprite.x._value + a.x._value + this.DW) / this.H |
                0
        },
        showShadow: function(a) {
            this.shadowVisible = a;
            for (var b = 0; 2 > b;)
                for (var c = b++, d = 0; 2 > d;) {
                    var f = d++,
                        f = this.grp[c][f];
                    null != f && (a ? f.showShadow() : f.hideShadow())
                }
        },
        onUpdate: function(a) {
            t.prototype.onUpdate.call(this, a);
            if (this.dragged && (this.sprite.x.set__(j._platform.getPointer().get_x() + this.dx), this.sprite.y.set__(j._platform.getPointer().get_y() + this.dy), 3 < this.startPoint.distanceTo(j._platform.getPointer().get_x(), j._platform.getPointer().get_y()) && !this.shadowVisible && (this.showShadow(!0), this.dy +=
                    this.isMobile ? -100 : 0), this.calculatePosition(), this.newX != this.prevX || this.newY != this.prevY)) this.move.emit(this.newX, this.newY), this.prevX = this.newX, this.prevY = this.newY
        },
        rotate: function() {
            var a = J.circInOut;
            null != this.grp[0][1] ? (this.grp[1][0] = this.grp[0][1], this.grp[0][1] = null, y.to(this.grp[0][0].sprite, 0.5, {
                x: 0,
                y: 0.5 * -this.H
            }, 0, null, a), y.to(this.grp[1][0].sprite, 0.5, {
                x: 0,
                y: 0.5 * this.H
            }, 0, null, a)) : (this.grp[0][1] = this.grp[0][0], this.grp[0][0] = this.grp[1][0], this.grp[1][0] = null, y.to(this.grp[0][0].sprite,
                0.5, {
                    x: 0.5 * -this.H,
                    y: 0
                }, 0, null, a), y.to(this.grp[0][1].sprite, 0.5, {
                x: 0.5 * this.H,
                y: 0
            }, 0, null, a))
        },
        back: function() {
            l.bottomCenterSprite(this.sprite, 0, -80);
            this.showShadow(!1)
        },
        fixPlace: function(a, b, c) {
            this.sprite.setXY(0, 0);
            this.sprite.get_pointerDown().disconnect(this.listener);
            this.ctx.sound.play("chpok" + s.random(2));
            for (var d = 0; 2 > d;)
                for (var f = d++, e = 0; 2 > e;) {
                    var h = e++,
                        k = [this.grp[f][h]];
                    if (null != k[0]) {
                        this.sprite.owner.removeChild(k[0].owner);
                        c.addChild(k[0].owner);
                        k[0].hideShadow();
                        var h = a + h,
                            i = b + f,
                            j = (i + 0.9) * this.H + this.DH;
                        k[0].sprite.setXY((h + 0.5) * this.H - this.DW, j - 20);
                        var l = k[0].sprite,
                            m = function(a) {
                                return function() {
                                    var b = a[0].sprite,
                                        c = function(a) {
                                            return function() {
                                                a[0].playAnim();
                                                y.to(a[0].sprite, 0.1, {
                                                    scaleX: 1,
                                                    scaleY: 1
                                                })
                                            }
                                        }(a);
                                    y.to(b, 0.1, {
                                        scaleX: 1.1,
                                        scaleY: 0.9
                                    }, 0, c)
                                }
                            }(k);
                        y.to(l, 0.1, {
                            y: j
                        }, 0, m);
                        k[0].x = h;
                        k[0].y = i
                    }
                }
        },
        getForCheck: function() {
            var a = null;
            1 == this.blobs.length ? (a = this.blobs[0], this.blobs[0] = null) : 2 == this.blobs.length && (a = this.blobs[0].type < this.blobs[1].type ? this.blobs.shift() : this.blobs.pop());
            return a
        },
        destroy: function() {
            this.owner.dispose()
        },
        __class__: sb
    });
    var dc = function() {
        this.field = [
            [],
            [],
            [],
            [],
            []
        ];
        t.call(this)
    };
    e["game.view.gameobjects.ShadowField"] = dc;
    dc.__name__ = ["game", "view", "gameobjects", "ShadowField"];
    dc.__super__ = t;
    dc.prototype = r(t.prototype, {
        onAdded: function() {
            t.prototype.onAdded.call(this);
            for (var a = 0; 5 > a;)
                for (var b = a++, c = 0; 5 > c;) {
                    var d = c++,
                        f = A.sprite("light_green0000", this.owner);
                    f.setAnchor(0, 0);
                    f.setXY(b * z.H - z.DW, d * z.H + z.DH);
                    this.field[b][d] = f;
                    f.set_visible(!1)
                }
        },
        show: function(a,
            b, c) {
            for (var d = 0; 5 > d;)
                for (var f = d++, e = 0; 5 > e;) {
                    var h = e++;
                    a == f && b == h && c ? this.setVisible(this.field[f][h]) : this.setInVisible(this.field[f][h])
                }
        },
        setVisible: function(a) {
            a.set_visible(!0);
            a.alpha.set__(0);
            y.to(a, 0.2, {
                alpha: 1
            })
        },
        setInVisible: function(a) {
            0 != (a._flags & 2) && y.to(a, 0.2, {
                alpha: 0
            }, 0, function() {
                a.set_visible(!1)
            })
        },
        reset: function() {
            for (var a = 0; 5 > a;)
                for (var b = a++, c = 0; 5 > c;) {
                    var d = c++;
                    this.field[b][d].set_visible(!1)
                }
        },
        show2: function(a, b, c, d, f) {
            for (var e = 0; 5 > e;)
                for (var h = e++, k = 0; 5 > k;) {
                    var i = k++;
                    (a ==
                        h && b == i || c == h && d == i) && f ? this.setVisible(this.field[h][i]) : this.setInVisible(this.field[h][i])
                }
        },
        __class__: dc
    });
    var fc = function() {
        this.rotation = this.scaleX = this.scaleY = 0;
        t.call(this)
    };
    e["game.view.gameobjects.Star"] = fc;
    fc.__name__ = ["game", "view", "gameobjects", "Star"];
    fc.__super__ = t;
    fc.prototype = r(t.prototype, {
        onAdded: function() {
            t.prototype.onAdded.call(this);
            this.type = s.random(7) + 1;
            this.sprite = A.sprite("item" + this.type + "0000", this.owner);
            this.move()
        },
        move: function() {
            this.scale = 0.01 * s.random(20) + 0.45;
            this.sprite.setXY(s.random(C.CANVAS_WIDTH), -s.random(450) - 50);
            this.speedX = s.random(4);
            this.speedY = s.random(5) + 3;
            this.sprite.x._value > 0.5 * C.CANVAS_WIDTH && (this.speedX *= -1);
            3 == this.type || 4 == this.type || 7 == this.type ? this.rotation = s.random(5) - 2 : (this.scaleX = (s.random(7) - 3) / 50, this.scaleY = (s.random(7) - 3) / 50, 2 == this.type && (this.scaleY = 0));
            this.sprite.setScale(this.scale)
        },
        onUpdate: function(a) {
            t.prototype.onUpdate.call(this, a);
            a = this.sprite.x;
            a.set__(a._value + this.speedX);
            a = this.sprite.y;
            a.set__(a._value +
                this.speedY);
            a = this.sprite.rotation;
            a.set__(a._value + this.rotation);
            a = this.sprite.scaleX;
            a.set__(a._value + this.scaleX);
            Math.abs(this.sprite.scaleX._value) > this.scale && (this.scaleX *= -1);
            a = this.sprite.scaleY;
            a.set__(a._value + this.scaleY);
            Math.abs(this.sprite.scaleY._value) > this.scale && (this.scaleY *= -1);
            this.sprite.y._value > C.CANVAS_HEIGHT + 50 && this.move()
        },
        __class__: fc
    });
    var ub = function() {};
    e["haxe.IMap"] = ub;
    ub.__name__ = ["haxe", "IMap"];
    ub.prototype = {
        __class__: ub
    };
    var ea = function() {
        this.buf = new kc;
        this.cache = [];
        this.useCache = ea.USE_CACHE;
        this.useEnumIndex = ea.USE_ENUM_INDEX;
        this.shash = new T;
        this.scount = 0
    };
    e["haxe.Serializer"] = ea;
    ea.__name__ = ["haxe", "Serializer"];
    ea.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(a) {
            var b = this.shash,
                b = null != H[a] ? b.getReserved(a) : b.h[a];
            if (null != b) this.buf.b += "R", this.buf.b += null == b ? "null" : "" + b;
            else {
                var b = this.shash,
                    c = this.scount++;
                null != H[a] ? b.setReserved(a, c) : b.h[a] = c;
                this.buf.b += "y";
                a = encodeURIComponent(a);
                this.buf.b += s.string(a.length);
                this.buf.b +=
                    ":";
                this.buf.b += null == a ? "null" : "" + a
            }
        },
        serializeRef: function(a) {
            for (var b = typeof a, c = 0, d = this.cache.length; c < d;) {
                var f = c++,
                    e = this.cache[f];
                if (typeof e == b && e == a) return this.buf.b += "r", this.buf.b += null == f ? "null" : "" + f, !0
            }
            this.cache.push(a);
            return !1
        },
        serializeFields: function(a) {
            for (var b = 0, c = K.fields(a); b < c.length;) {
                var d = c[b];
                ++b;
                this.serializeString(d);
                this.serialize(K.field(a, d))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = P["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == a) {
                        this.buf.b +=
                            "z";
                        break
                    }
                    this.buf.b += "i";
                    this.buf.b += null == a ? "null" : "" + a;
                    break;
                case 2:
                    isNaN(a) ? this.buf.b += "k" : isFinite(a) ? (this.buf.b += "d", this.buf.b += null == a ? "null" : "" + a) : this.buf.b += 0 > a ? "m" : "p";
                    break;
                case 3:
                    this.buf.b += a ? "t" : "f";
                    break;
                case 4:
                    if (w.__instanceof(a, fd)) a = P.getClassName(a), this.buf.b += "A", this.serializeString(a);
                    else if (w.__instanceof(a, gd)) this.buf.b += "B", this.serializeString(P.getEnumName(a));
                    else {
                        if (this.useCache && this.serializeRef(a)) break;
                        this.buf.b += "o";
                        this.serializeFields(a)
                    }
                    break;
                case 5:
                    throw new n("Cannot serialize function");
                case 6:
                    b = b[2];
                    if (b == String) {
                        this.serializeString(a);
                        break
                    }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            b = 0;
                            this.buf.b += "a";
                            for (var c = 0, d = a.length; c < d;) {
                                var e = c++;
                                null == a[e] ? ++b : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == b ? "null" : "" + b), b = 0), this.serialize(a[e]))
                            }
                            0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == b ? "null" : "" + b));
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.b += s.string(a.getTime());
                            break;
                        case wb:
                            this.buf.b += "l";
                            for (a = a.h; null !=
                                a;) b = a.item, a = a.next, this.serialize(b);
                            this.buf.b += "h";
                            break;
                        case ka:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b += null == c ? "null" : "" + c, this.serialize(a.h[c]);
                            this.buf.b += "h";
                            break;
                        case ua:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c = b.next(), d = K.field(c, "__id__"), K.deleteField(c, "__id__"), this.serialize(c), c.__id__ = d, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case T:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(null !=
                                H[c] ? a.getReserved(c) : a.h[c]);
                            this.buf.b += "h";
                            break;
                        case oa:
                            this.buf.b += "s";
                            this.buf.b += s.string(Math.ceil(8 * a.length / 6));
                            this.buf.b += ":";
                            c = 0;
                            d = a.length - 2;
                            b = ea.BASE64_CODES;
                            if (null == b) {
                                for (var b = Array(ea.BASE64.length), e = 0, g = ea.BASE64.length; e < g;) {
                                    var h = e++;
                                    b[h] = G.cca(ea.BASE64, h)
                                }
                                ea.BASE64_CODES = b
                            }
                            for (; c < d;) e = a.b[c++], g = a.b[c++], h = a.b[c++], this.buf.b += String.fromCharCode(b[e >> 2]), this.buf.b += String.fromCharCode(b[(e << 4 | g >> 4) & 63]), this.buf.b += String.fromCharCode(b[(g << 2 | h >> 6) & 63]), this.buf.b += String.fromCharCode(b[h &
                                63]);
                            c == d ? (d = a.b[c++], a = a.b[c++], this.buf.b += String.fromCharCode(b[d >> 2]), this.buf.b += String.fromCharCode(b[(d << 4 | a >> 4) & 63]), this.buf.b += String.fromCharCode(b[a << 2 & 63])) : c == d + 1 && (a = a.b[c++], this.buf.b += String.fromCharCode(b[a >> 2]), this.buf.b += String.fromCharCode(b[a << 4 & 63]));
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(P.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(P.getClassName(b)),
                                this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) {
                        if (this.serializeRef(a)) break;
                        this.cache.pop()
                    }
                    this.buf.b += s.string(this.useEnumIndex ? "j" : "w");
                    this.serializeString(P.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += s.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += s.string(b - 2);
                    for (c = 2; c < b;) d = c++, this.serialize(a[d]);
                    this.useCache && this.cache.push(a);
                    break;
                default:
                    throw new n("Cannot serialize " + s.string(a));
            }
        },
        __class__: ea
    };
    var tb = function(a) {
        var b = this;
        this.id = setInterval(function() {
            b.run()
        }, a)
    };
    e["haxe.Timer"] = tb;
    tb.__name__ = ["haxe", "Timer"];
    tb.delay = function(a, b) {
        var c = new tb(b);
        c.run = function() {
            c.stop();
            a()
        };
        return c
    };
    tb.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: tb
    };
    var gc = function() {};
    e["haxe._Unserializer.DefaultResolver"] = gc;
    gc.__name__ = ["haxe", "_Unserializer", "DefaultResolver"];
    gc.prototype = {
        resolveClass: function(a) {
            return P.resolveClass(a)
        },
        resolveEnum: function(a) {
            return P.resolveEnum(a)
        },
        __class__: gc
    };
    var aa = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = aa.DEFAULT_RESOLVER;
        null == a && (a = new gc, aa.DEFAULT_RESOLVER = a);
        this.resolver = a
    };
    e["haxe.Unserializer"] = aa;
    aa.__name__ = ["haxe", "Unserializer"];
    aa.initCodes = function() {
        for (var a = [], b = 0, c = aa.BASE64.length; b < c;) {
            var d = b++;
            a[aa.BASE64.charCodeAt(d)] = d
        }
        return a
    };
    aa.run = function(a) {
        return (new aa(a)).unserialize()
    };
    aa.prototype = {
        readDigits: function() {
            for (var a =
                    0, b = !1, c = this.pos;;) {
                var d = this.buf.charCodeAt(this.pos);
                if (d != d) break;
                if (45 == d) {
                    if (this.pos != c) break;
                    b = !0
                } else {
                    if (48 > d || 57 < d) break;
                    a = 10 * a + (d - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        readFloat: function() {
            for (var a = this.pos;;) {
                var b = this.buf.charCodeAt(this.pos);
                if (b != b) break;
                if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                else break
            }
            return parseFloat(G.substr(this.buf, a, this.pos - a))
        },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >= this.length) throw new n("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw new n("Invalid object key");
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) {
            if (58 != this.buf.charCodeAt(this.pos++)) throw new n("Invalid enum format");
            var c = this.readDigits();
            if (0 == c) return P.createEnum(a, b);
            for (var d = []; 0 < c--;) d.push(this.unserialize());
            return P.createEnum(a, b, d)
        },
        unserialize: function() {
            switch (this.buf.charCodeAt(this.pos++)) {
                case 65:
                    var a = this.unserialize(),
                        b = this.resolver.resolveClass(a);
                    if (null == b) throw new n("Class not found " +
                        a);
                    return b;
                case 66:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new n("Enum not found " + a);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new n("Class not found " + a);
                    a = P.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.buf.charCodeAt(this.pos++)) throw new n("Invalid custom data");
                    return a;
                case 77:
                    a = new ua;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw new n("Invalid string reference");
                    return this.scache[a];
                case 97:
                    a = [];
                    for (this.cache.push(a);;) {
                        b = this.buf.charCodeAt(this.pos);
                        if (104 == b) {
                            this.pos++;
                            break
                        }
                        117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize())
                    }
                    return a;
                case 98:
                    a = new T;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) {
                        var b = this.unserialize(),
                            c = this.unserialize();
                        null != H[b] ? a.setReserved(b, c) : a.h[b] = c
                    }
                    this.pos++;
                    return a;
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new n("Class not found " + a);
                    a = P.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 100:
                    return this.readFloat();
                case 102:
                    return !1;
                case 105:
                    return this.readDigits();
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new n("Enum not found " + a);
                    this.pos++;
                    var c = this.readDigits(),
                        d = b.__constructs__.slice()[c];
                    if (null == d) throw new n("Unknown enum index " + a + "@" +
                        c);
                    a = this.unserializeEnum(b, d);
                    this.cache.push(a);
                    return a;
                case 107:
                    return NaN;
                case 108:
                    a = new wb;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 109:
                    return -Infinity;
                case 110:
                    return null;
                case 111:
                    return a = {}, this.cache.push(a), this.unserializeObject(a), a;
                case 112:
                    return Infinity;
                case 113:
                    a = new ka;
                    this.cache.push(a);
                    for (b = this.buf.charCodeAt(this.pos++); 58 == b;) b = this.readDigits(), c = this.unserialize(), a.h[b] = c, b = this.buf.charCodeAt(this.pos++);
                    if (104 != b) throw new n("Invalid IntMap format");
                    return a;
                case 114:
                    a = this.readDigits();
                    if (0 > a || a >= this.cache.length) throw new n("Invalid reference");
                    return this.cache[a];
                case 115:
                    a = this.readDigits();
                    d = this.buf;
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < a) throw new n("Invalid bytes length");
                    var e = aa.CODES;
                    null == e && (e = aa.initCodes(), aa.CODES = e);
                    for (var g = this.pos, h = a & 3, k = g + (a - h), b = new oa(new Qc(3 * (a >> 2) + (2 <= h ? h - 1 : 0))), c = 0; g < k;) {
                        var i = e[d.charCodeAt(g++)],
                            j = e[d.charCodeAt(g++)];
                        b.b[c++] =
                            (i << 2 | j >> 4) & 255;
                        i = e[d.charCodeAt(g++)];
                        b.b[c++] = (j << 4 | i >> 2) & 255;
                        j = e[d.charCodeAt(g++)];
                        b.b[c++] = (i << 6 | j) & 255
                    }
                    2 <= h && (j = e[d.charCodeAt(g++)], k = e[d.charCodeAt(g++)], b.b[c++] = (j << 2 | k >> 4) & 255, 3 == h && (d = e[d.charCodeAt(g++)], b.b[c++] = (k << 4 | d >> 2) & 255));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 116:
                    return !0;
                case 118:
                    return 48 <= this.buf.charCodeAt(this.pos) && 57 >= this.buf.charCodeAt(this.pos) && 48 <= this.buf.charCodeAt(this.pos + 1) && 57 >= this.buf.charCodeAt(this.pos + 1) && 48 <= this.buf.charCodeAt(this.pos + 2) && 57 >=
                        this.buf.charCodeAt(this.pos + 2) && 48 <= this.buf.charCodeAt(this.pos + 3) && 57 >= this.buf.charCodeAt(this.pos + 3) && 45 == this.buf.charCodeAt(this.pos + 4) ? (a = G.strDate(G.substr(this.buf, this.pos, 19)), this.pos += 19) : (a = this.readFloat(), a = new Date(a)), this.cache.push(a), a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new n("Enum not found " + a);
                    a = this.unserializeEnum(b, this.unserialize());
                    this.cache.push(a);
                    return a;
                case 120:
                    throw n.wrap(this.unserialize());
                case 121:
                    a = this.readDigits();
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < a) throw new n("Invalid string length");
                    b = G.substr(this.buf, this.pos, a);
                    this.pos += a;
                    b = decodeURIComponent(b.split("+").join(" "));
                    this.scache.push(b);
                    return b;
                case 122:
                    return 0
            }
            this.pos--;
            throw new n("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
        },
        __class__: aa
    };
    var ka = function() {
        this.h = {}
    };
    e["haxe.ds.IntMap"] = ka;
    ka.__name__ = ["haxe", "ds", "IntMap"];
    ka.__interfaces__ = [ub];
    ka.prototype = {
        set: function(a, b) {
            this.h[a] = b
        },
        get: function(a) {
            return this.h[a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty(a)
        },
        remove: function(a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
            return G.iter(a)
        },
        __class__: ka
    };
    var ua = function() {
        this.h = {
            __keys__: {}
        }
    };
    e["haxe.ds.ObjectMap"] = ua;
    ua.__name__ = ["haxe", "ds", "ObjectMap"];
    ua.__interfaces__ = [ub];
    ua.assignId = function(a) {
        return a.__id__ = ++ua.count
    };
    ua.getId = function(a) {
        return a.__id__
    };
    ua.prototype = {
        set: function(a, b) {
            var c =
                a.__id__ || (a.__id__ = ++ua.count);
            this.h[c] = b;
            this.h.__keys__[c] = a
        },
        get: function(a) {
            return this.h[a.__id__]
        },
        exists: function(a) {
            return null != this.h.__keys__[a.__id__]
        },
        remove: function(a) {
            a = a.__id__;
            if (null == this.h.__keys__[a]) return !1;
            delete this.h[a];
            delete this.h.__keys__[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
            return G.iter(a)
        },
        __class__: ua
    };
    var ya = function(a, b) {
        this.map = a;
        this.keys = b;
        this.index = 0;
        this.count = b.length
    };
    e["haxe.ds._StringMap.StringMapIterator"] = ya;
    ya.__name__ = ["haxe", "ds", "_StringMap", "StringMapIterator"];
    ya.prototype = {
        hasNext: function() {
            return this.index < this.count
        },
        next: function() {
            var a = this.map,
                b = this.keys[this.index++];
            return null != H[b] ? a.getReserved(b) : a.h[b]
        },
        __class__: ya
    };
    var T = function() {
        this.h = {}
    };
    e["haxe.ds.StringMap"] = T;
    T.__name__ = ["haxe", "ds", "StringMap"];
    T.__interfaces__ = [ub];
    T.prototype = {
        set: function(a, b) {
            null != H[a] ? this.setReserved(a, b) : this.h[a] = b
        },
        get: function(a) {
            return null != H[a] ?
                this.getReserved(a) : this.h[a]
        },
        exists: function(a) {
            return null != H[a] ? this.existsReserved(a) : this.h.hasOwnProperty(a)
        },
        setReserved: function(a, b) {
            null == this.rh && (this.rh = {});
            this.rh["$" + a] = b
        },
        getReserved: function(a) {
            return null == this.rh ? null : this.rh["$" + a]
        },
        existsReserved: function(a) {
            return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + a)
        },
        remove: function(a) {
            if (null != H[a]) {
                a = "$" + a;
                if (null == this.rh || !this.rh.hasOwnProperty(a)) return !1;
                delete this.rh[a]
            } else {
                if (!this.h.hasOwnProperty(a)) return !1;
                delete this.h[a]
            }
            return !0
        },
        keys: function() {
            return G.iter(this.arrayKeys())
        },
        arrayKeys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b);
            if (null != this.rh)
                for (b in this.rh) 36 == b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        iterator: function() {
            return new ya(this, this.arrayKeys())
        },
        __class__: T
    };
    var oa = function(a) {
        this.length = a.byteLength;
        this.b = new ad(a);
        this.b.bufferValue = a;
        a.hxBytes = this;
        a.bytes = this.b
    };
    e["haxe.io.Bytes"] = oa;
    oa.__name__ = ["haxe", "io", "Bytes"];
    oa.alloc = function(a) {
        return new oa(new Qc(a))
    };
    oa.ofString = function(a) {
        for (var b = [], c = 0; c < a.length;) {
            var d = a.charCodeAt(c++);
            55296 <= d && 56319 >= d && (d = d - 55232 << 10 | a.charCodeAt(c++) & 1023);
            127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18), b.push(128 | d >> 12 & 63)), b.push(128 | d >> 6 & 63)), b.push(128 | d & 63))
        }
        return new oa((new ad(b)).buffer)
    };
    oa.ofData = function(a) {
        var b = a.hxBytes;
        return null != b ? b : new oa(a)
    };
    oa.fastGet = function(a, b) {
        return a.bytes[b]
    };
    oa.prototype = {
        __class__: oa
    };
    var db = function() {};
    e["haxe.rtti.Meta"] =
        db;
    db.__name__ = ["haxe", "rtti", "Meta"];
    db.getType = function(a) {
        a = db.getMeta(a);
        return null == a || null == a.obj ? {} : a.obj
    };
    db.getMeta = function(a) {
        return a.__meta__
    };
    var n = function(a) {
        Error.call(this);
        this.val = a;
        this.message = "" + a;
        Error.captureStackTrace && Error.captureStackTrace(this, n)
    };
    e["js._Boot.HaxeError"] = n;
    n.__name__ = ["js", "_Boot", "HaxeError"];
    n.wrap = function(a) {
        return a instanceof Error ? a : new n(a)
    };
    n.__super__ = Error;
    n.prototype = r(Error.prototype, {
        __class__: n
    });
    var w = function() {};
    e["js.Boot"] = w;
    w.__name__ = ["js", "Boot"];
    w.getClass = function(a) {
        if (a instanceof Array && null == a.__enum__) return Array;
        var b = a.__class__;
        if (null != b) return b;
        a = w.__nativeClassName(a);
        return null != a ? w.__resolveNativeClass(a) : null
    };
    w.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "function":
                return "<function>";
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t",
                                d = 2, e = a.length; d < e;) var g = d++,
                            c = 2 != g ? c + ("," + w.__string_rec(a[g], b)) : c + w.__string_rec(a[g], b);
                        return c + ")"
                    }
                    c = a.length;
                    d = "[";
                    b += "\t";
                    for (e = 0; e < c;) g = e++, d += (0 < g ? "," : "") + w.__string_rec(a[g], b);
                    return d + "]"
                }
                try {
                    d = a.toString
                } catch (h) {
                    return "???"
                }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                for (c in a)
                    if (!e || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" ==
                        c || (2 != d.length && (d += ", \n"), d += b + c + " : " + w.__string_rec(a[c], b));
                b = b.substring(1);
                return d + ("\n" + b + "}");
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    w.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d = 0, e = c.length; d < e;) {
                var g = d++,
                    g = c[g];
                if (g == b || w.__interfLoop(g, b)) return !0
            }
        return w.__interfLoop(a.__super__, b)
    };
    w.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case Array:
                return a instanceof Array ? null == a.__enum__ : !1;
            case hd:
                return "boolean" ==
                    typeof a;
            case kd:
                return !0;
            case id:
                return "number" == typeof a;
            case ld:
                return "number" == typeof a ? (a | 0) === a : !1;
            case String:
                return "string" == typeof a;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (a instanceof b || w.__interfLoop(w.getClass(a), b)) return !0
                    } else {
                        if ("object" == typeof b && w.__isNativeObj(b) && a instanceof b) return !0
                    }
                else return !1;
                return b == fd && null != a.__name__ || b == gd && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    w.__cast = function(a, b) {
        if (w.__instanceof(a, b)) return a;
        throw new n("Cannot cast " + s.string(a) +
            " to " + s.string(b));
    };
    w.__nativeClassName = function(a) {
        a = w.__toStr.call(a).slice(8, -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    };
    w.__isNativeObj = function(a) {
        return null != w.__nativeClassName(a)
    };
    w.__resolveNativeClass = function(a) {
        return bd[a]
    };
    var Tc = function() {};
    e["js.Browser"] = Tc;
    Tc.__name__ = ["js", "Browser"];
    Tc.getLocalStorage = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            return a
        } catch (b) {
            return null
        }
    };
    var va = function(a) {
        if (a instanceof Array && null == a.__enum__) this.a =
            a, this.byteLength = a.length;
        else {
            this.a = [];
            for (var b = 0; b < a;) this.a[b++] = 0;
            this.byteLength = a
        }
    };
    e["js.html.compat.ArrayBuffer"] = va;
    va.__name__ = ["js", "html", "compat", "ArrayBuffer"];
    va.sliceImpl = function(a, b) {
        var c = new ad(this, a, null == b ? null : b - a),
            d = new Qc(c.byteLength);
        (new ad(d)).set(c);
        return d
    };
    va.prototype = {
        slice: function(a, b) {
            return new va(this.a.slice(a, b))
        },
        __class__: va
    };
    var Ga = function() {};
    e["js.html.compat.Uint8Array"] = Ga;
    Ga.__name__ = ["js", "html", "compat", "Uint8Array"];
    Ga._new = function(a, b, c) {
        if ("number" ==
            typeof a) {
            c = [];
            for (b = 0; b < a;) {
                var d = b++;
                c[d] = 0
            }
            c.byteLength = c.length;
            c.byteOffset = 0;
            c.buffer = new va(c)
        } else if (w.__instanceof(a, va)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
        else if (a instanceof Array && null == a.__enum__) c = a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new va(c);
        else throw new n("TODO " + s.string(a));
        c.subarray = Ga._subarray;
        c.set = Ga._set;
        return c
    };
    Ga._set = function(a, b) {
        if (w.__instanceof(a.buffer, va)) {
            if (a.byteLength +
                b > this.byteLength) throw new n("set() outside of range");
            for (var c = 0, d = a.byteLength; c < d;) {
                var e = c++;
                this[e + b] = a[e]
            }
        } else if (a instanceof Array && null == a.__enum__) {
            if (a.length + b > this.byteLength) throw new n("set() outside of range");
            c = 0;
            for (d = a.length; c < d;) e = c++, this[e + b] = a[e]
        } else throw new n("TODO");
    };
    Ga._subarray = function(a, b) {
        var c = Ga._new(this.slice(a, b));
        c.byteOffset = a;
        return c
    };
    var Fa = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    e["pathfinder.Coordinate"] = Fa;
    Fa.__name__ = ["pathfinder",
        "Coordinate"
    ];
    Fa.prototype = {
        isEqualTo: function(a) {
            return this.x == a.x ? this.y == a.y : !1
        },
        clone: function() {
            return new Fa(this.x, this.y)
        },
        __class__: Fa
    };
    var Z = e["pathfinder.EHeuristic"] = {
        __ename__: ["pathfinder", "EHeuristic"],
        __constructs__: ["DIAGONAL", "PRODUCT", "EUCLIDIAN", "MANHATTAN"]
    };
    Z.DIAGONAL = ["DIAGONAL", 0];
    Z.DIAGONAL.toString = q;
    Z.DIAGONAL.__enum__ = Z;
    Z.PRODUCT = ["PRODUCT", 1];
    Z.PRODUCT.toString = q;
    Z.PRODUCT.__enum__ = Z;
    Z.EUCLIDIAN = ["EUCLIDIAN", 2];
    Z.EUCLIDIAN.toString = q;
    Z.EUCLIDIAN.__enum__ = Z;
    Z.MANHATTAN = ["MANHATTAN", 3];
    Z.MANHATTAN.toString = q;
    Z.MANHATTAN.__enum__ = Z;
    var hc = function(a, b, c) {
        null == c && (c = !0);
        this.isWalkable = c;
        Fa.call(this, a, b)
    };
    e["pathfinder.Node"] = hc;
    hc.__name__ = ["pathfinder", "Node"];
    hc.__super__ = Fa;
    hc.prototype = r(Fa.prototype, {
        __class__: hc
    });
    var Pc = function(a, b) {
        null == b && (b = 1E4);
        this.configure(a, b)
    };
    e["pathfinder.Pathfinder"] = Pc;
    Pc.__name__ = ["pathfinder", "Pathfinder"];
    Pc.prototype = {
        configure: function(a, b) {
            null == b && (b = 1E4);
            this._map = a;
            this._timeOutDuration = b;
            this._nodes = [];
            this._cols =
                this._map.cols;
            this._rows = this._map.rows;
            for (var c = 0, d = this._map.cols; c < d;)
                for (var e = c++, g = this._nodes[e] = [], h = 0, k = this._map.rows; h < k;) {
                    var i = h++;
                    g[i] = new hc(e, i, this._map.isWalkable(e, i))
                }
        },
        createPath: function(a, b, c, d, e) {
            null == e && (e = !1);
            null == d && (d = !0);
            null == c && (c = Z.PRODUCT);
            this._info = {
                heuristic: c,
                timeElapsed: 0,
                pathLength: 0,
                isDiagonalEnabled: d
            };
            if (!this._map.isWalkable(a.x, a.y) || !this._map.isWalkable(b.x, b.y) || a.isEqualTo(b)) return null;
            this._openList = [];
            this._closedList = [];
            this._startNode = this._nodes[a.x][a.y];
            this._destNode = this._nodes[b.x][b.y];
            this._startNode.g = 0;
            var a = this._startNode,
                b = this._destNode,
                g;
            switch (c[1]) {
                case 0:
                    g = a.x - b.x;
                    g = 0 > g ? -g : g;
                    a = a.y - b.y;
                    a = 0 > a ? -a : a;
                    b = g < a ? g : a;
                    g = 10 * (g + a - 2 * b) + 14 * b;
                    break;
                case 1:
                    g = a.x - this._destNode.x;
                    var h = a.y - this._destNode.y,
                        k = this._startNode.x - this._destNode.x,
                        i = this._startNode.y - this._destNode.y;
                    g = (0 > g ? -g : g) * (0 > i ? -i : i) - (0 > k ? -k : k) * (0 > h ? -h : h);
                    h = a.x - b.x;
                    h = 0 > h ? -h : h;
                    a = a.y - b.y;
                    a = 0 > a ? -a : a;
                    b = h < a ? h : a;
                    g = 10 * (h + a - 2 * b) + 14 * b + 0.01 * (0 > g ? -g : g);
                    break;
                case 2:
                    g = a.x - b.x;
                    g = 0 > g ? -g : g;
                    a = a.y -
                        b.y;
                    a = 0 > a ? -a : a;
                    g = 10 * Math.sqrt(g * g + a * a);
                    break;
                case 3:
                    g = a.x - b.x, a = a.y - b.y, g = 10 * ((0 < g ? g : -g) + (0 < a ? a : -a))
            }
            this._startNode.f = g;
            this._openList.push(this._startNode);
            return this._searchPath(c, d, e)
        },
        _searchPath: function(a, b, c) {
            null == c && (c = !1);
            null == b && (b = !0);
            var d, e, g, h, k, i;
            h = null;
            var j = this._startNode,
                l = (new Date).getTime() / 1E3;
            for (this._isCompleted = !1; !this._isCompleted;) {
                d = 0 > j.x - 1 ? 0 : j.x - 1;
                e = j.x + 1 >= this._cols ? this._cols - 1 : j.x + 1;
                g = 0 > j.y - 1 ? 0 : j.y - 1;
                h = j.y + 1 >= this._rows ? this._rows - 1 : j.y + 1;
                for (var m = h + 1; g < m;) {
                    for (var o =
                            g++, q = d, r = e + 1; q < r;)
                        if (k = q++, h = this._nodes[k][o], k = c || !h.isWalkable ? c ? this._map.isWalkable(k, o) : !1 : !0, h != j && k) {
                            k = 10;
                            if (!(j.x == h.x || j.y == h.y)) {
                                if (!b) continue;
                                k = 14
                            }
                            k = j.g + k;
                            i = this._destNode;
                            var n;
                            switch (a[1]) {
                                case 0:
                                    n = h.x - i.x;
                                    n = 0 > n ? -n : n;
                                    i = h.y - i.y;
                                    i = 0 > i ? -i : i;
                                    var p = n < i ? n : i;
                                    n = 10 * (n + i - 2 * p) + 14 * p;
                                    break;
                                case 1:
                                    n = h.x - this._destNode.x;
                                    var p = h.y - this._destNode.y,
                                        s = this._startNode.x - this._destNode.x,
                                        t = this._startNode.y - this._destNode.y;
                                    n = (0 > n ? -n : n) * (0 > t ? -t : t) - (0 > s ? -s : s) * (0 > p ? -p : p);
                                    p = h.x - i.x;
                                    p = 0 > p ? -p : p;
                                    i = h.y - i.y;
                                    i = 0 > i ? -i : i;
                                    s = p < i ? p : i;
                                    n = 10 * (p + i - 2 * s) + 14 * s + 0.01 * (0 > n ? -n : n);
                                    break;
                                case 2:
                                    n = h.x - i.x;
                                    n = 0 > n ? -n : n;
                                    i = h.y - i.y;
                                    i = 0 > i ? -i : i;
                                    n = 10 * Math.sqrt(n * n + i * i);
                                    break;
                                case 3:
                                    n = h.x - i.x, i = h.y - i.y, n = 10 * ((0 < n ? n : -n) + (0 < i ? i : -i))
                            }
                            i = k + n; - 1 != this._openList.indexOf(h) || -1 != this._closedList.indexOf(h) ? h.f > i && (h.f = i, h.g = k, h.parent = j) : (h.f = i, h.g = k, h.parent = j, this._openList.push(h))
                        }
                    this._info.timeElapsed = 1E3 * ((new Date).getTime() / 1E3 - l) | 0;
                    if (this._info.timeElapsed > this._timeOutDuration) return null
                }
                this._closedList.push(j);
                if (0 == this._openList.length) return null;
                this._openList.sort(E(this, this._sort));
                j = this._openList.shift();
                j == this._destNode && (this._isCompleted = !0)
            }
            this._info.timeElapsed = 1E3 * ((new Date).getTime() / 1E3 - l) | 0;
            a = [];
            b = this._destNode;
            for (a[0] = b.clone(); !(b = b.parent, a.unshift(b.clone()), b == this._startNode););
            this._info.pathLength = a.length;
            return a
        },
        _sort: function(a, b) {
            return a.f > b.f ? 1 : a.f < b.f ? -1 : 0
        },
        __class__: Pc
    };
    var dd, jd = 0;
    e.Math = Math;
    String.prototype.__class__ = e.String = String;
    String.__name__ = ["String"];
    e.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = e.Date = Date;
    Date.__name__ = ["Date"];
    var ld = e.Int = {
            __name__: ["Int"]
        },
        kd = e.Dynamic = {
            __name__: ["Dynamic"]
        },
        id = e.Float = Number;
    id.__name__ = ["Float"];
    var hd = e.Bool = Boolean;
    hd.__ename__ = ["Bool"];
    var fd = e.Class = {
            __name__: ["Class"]
        },
        gd = {},
        H = {},
        Qc = bd.ArrayBuffer || va;
    null == Qc.prototype.slice && (Qc.prototype.slice = va.sliceImpl);
    var ad = bd.Uint8Array || Ga._new;
    qa.instance = new qa;
    R.DISPATCHING_SENTINEL = new Ra(null, null);
    j.root = new m;
    j.uncaughtError = new N;
    j.hidden = new X(!1);
    j.volume = new L(1);
    j._platform = qa.instance;
    j._calledInit = !1;
    Eb.logger = new nc(j._platform.createLogHandler("flambe"));
    Q.__meta__ = {
        obj: {
            assets: [{
                bootstrap: [{
                    bytes: 142759,
                    md5: "b5950ad813218046a01cf426e62ddf04",
                    name: "progress/loader_back.png"
                }, {
                    bytes: 132,
                    md5: "d92f83dfcbf0a8d0d124295b20968dc1",
                    name: "progress/loader_progress.png"
                }],
                locale: [{
                    bytes: 1068,
                    md5: "850f039942d736f5bf1695f4000d7697",
                    name: "messages.ini"
                }],
                main: [{
                    bytes: 832842,
                    md5: "6cd4791f24db61357b1aa98abf43dcbd",
                    name: "bg/bg1.png"
                }, {
                    bytes: 521413,
                    md5: "8b6e92bdebaf8938394088dd8e5e6f09",
                    name: "bg/guys.png"
                }, {
                    bytes: 179567,
                    md5: "ca89bd28743842f8ec2e6a79fef41414",
                    name: "bg/plashka.png"
                }, {
                    bytes: 566452,
                    md5: "a283a50a97b9640fb1e7c593f489a8d1",
                    name: "bg/sky.png"
                }, {
                    bytes: 6624,
                    md5: "18df2c77e436d582e49eb58738c580b3",
                    name: "bg/tutor1.png"
                }, {
                    bytes: 6641,
                    md5: "287854c0f7d466c5ab33beecad9f745f",
                    name: "bg/tutor2.png"
                }, {
                    bytes: 6611,
                    md5: "df23189ebfade070d6829454a0b0d680",
                    name: "bg/tutor3.png"
                }, {
                    bytes: 179563,
                    md5: "a6bdd847510a5a9e826752ed8124ec4d",
                    name: "bg/tutor6.png"
                }, {
                    bytes: 7382,
                    md5: "35cec5465dde00d7a24f1240f51e1f9e",
                    name: "differentbloods.json"
                }, {
                    bytes: 64353,
                    md5: "a9e7b633ea5eceb08e3fcb7ac332fa11",
                    name: "differentbloods.png"
                }, {
                    bytes: 62781,
                    md5: "8d5c99f3348be99f90a917df8fc87a7e",
                    name: "fonts/Arial.fnt"
                }, {
                    bytes: 73484,
                    md5: "17de2950f875e8ded54839764b651bf8",
                    name: "fonts/Arial_0.png"
                }, {
                    bytes: 1192,
                    md5: "477e934912978350309a5b974bccc0a5",
                    name: "fonts/digits.fnt"
                }, {
                    bytes: 11848,
                    md5: "b33d671f45abcfd6b14c461a1f44c2b0",
                    name: "fonts/digits.png"
                }, {
                    bytes: 5828,
                    md5: "22017f6f1ba6f2cae93dd8fdbd9b789f",
                    name: "fonts/font.fnt"
                }, {
                    bytes: 68989,
                    md5: "c4d8230b429572d219f827029b9308a6",
                    name: "fonts/font.png"
                }, {
                    bytes: 7395,
                    md5: "68454a0776ffe2d784f278c6661e17f6",
                    name: "fonts/fontwhite.fnt"
                }, {
                    bytes: 23799,
                    md5: "d665ad1487fef0eeaf36758fb90dfc35",
                    name: "fonts/fontwhite.png"
                }, {
                    bytes: 1272,
                    md5: "87feda610c33d5948c9c1f52a187d62e",
                    name: "fonts/font_1.fnt"
                }, {
                    bytes: 6969,
                    md5: "897d0a357bb9e7e620574033d9fcd323",
                    name: "fonts/font_1.png"
                }, {
                    bytes: 1191,
                    md5: "812f82394d34053f024ccbdc53c12b13",
                    name: "fonts/font_gold.fnt"
                }, {
                    bytes: 16998,
                    md5: "20afa3662ed4b0fba091a45d134f8e36",
                    name: "fonts/font_gold.png"
                }, {
                    bytes: 9589,
                    md5: "2e27d5d3ead69a30522e09ebfd81197a",
                    name: "game.json"
                }, {
                    bytes: 158090,
                    md5: "536174fe0c7447bd90cda8325e853e33",
                    name: "game.png"
                }, {
                    bytes: 28930,
                    md5: "ba6a3f9ebec6234c2de96d5afaae87e6",
                    name: "monsters.json"
                }, {
                    bytes: 150883,
                    md5: "22351dce9a638eebf97a410c21174997",
                    name: "monsters.png"
                }, {
                    bytes: 18880,
                    md5: "45291c19db90a4563f0adcdfe3e69ae9",
                    name: "sounds/bomb.mp3"
                }, {
                    bytes: 13460,
                    md5: "03e5a619b02970a14c4b171d68d04dd8",
                    name: "sounds/bomb.ogg"
                }, {
                    bytes: 4327,
                    md5: "40568c8788520f664e3eb0b08f42dfe5",
                    name: "sounds/chpok0.mp3"
                }, {
                    bytes: 5929,
                    md5: "52670b04b4e2098d0108a286e7349ea9",
                    name: "sounds/chpok0.ogg"
                }, {
                    bytes: 3703,
                    md5: "dc0f36a68a66f8a935315c1cc0c06305",
                    name: "sounds/chpok1.mp3"
                }, {
                    bytes: 5283,
                    md5: "4fc3584d2d90141b18bbcbc473c0eaa7",
                    name: "sounds/chpok1.ogg"
                }, {
                    bytes: 6988,
                    md5: "a40c7aae6b9b6cc76fcc53c559a0d84a",
                    name: "sounds/chpok2.mp3"
                }, {
                    bytes: 12989,
                    md5: "85810126a1b4d63d478fd14597992128",
                    name: "sounds/chpok2.ogg"
                }, {
                    bytes: 7537,
                    md5: "c3bc4a2fb786c3777317c7d338501de7",
                    name: "sounds/chpok3.mp3"
                }, {
                    bytes: 9486,
                    md5: "7e3e38d9038abea0908b18a4cfda17da",
                    name: "sounds/chpok3.ogg"
                }, {
                    bytes: 7880,
                    md5: "83f39c741cf7ddd364488bd6ab1d5b05",
                    name: "sounds/click.mp3"
                }, {
                    bytes: 6587,
                    md5: "31347ee09827ff4025a66c83041a2b8f",
                    name: "sounds/click.ogg"
                }, {
                    bytes: 10169,
                    md5: "77ed7303fb8c9223d43ebc745433d47e",
                    name: "sounds/laugh_2.mp3"
                }, {
                    bytes: 9873,
                    md5: "d2578ebd925afce30346249a9d8c9fc6",
                    name: "sounds/laugh_2.ogg"
                }, {
                    bytes: 10640,
                    md5: "dc1367d81628796762cbe947eb8bff48",
                    name: "sounds/laugh_3.mp3"
                }, {
                    bytes: 13221,
                    md5: "5f71022cf15a7d71fe5df533280676cc",
                    name: "sounds/laugh_3.ogg"
                }, {
                    bytes: 663283,
                    md5: "79b7cf9e57578a15a333ea6b071c9e57",
                    name: "sounds/loop.mp3"
                }, {
                    bytes: 611959,
                    md5: "f5fb8872e64c6dfc7b1676c922f14a0a",
                    name: "sounds/loop.ogg"
                }, {
                    bytes: 3806,
                    md5: "ab5a7db9e2359fb34a6dc7ad6347963d",
                    name: "sounds/swoosh.mp3"
                }, {
                    bytes: 6348,
                    md5: "3e1b35865eecfbd8fa891c8cc8468cf6",
                    name: "sounds/swoosh.ogg"
                }, {
                    bytes: 163598,
                    md5: "60fc33258d2ef640403e82c93c45db58",
                    name: "sounds/winning.mp3"
                }, {
                    bytes: 182531,
                    md5: "de33992d0a34827078b937511a150060",
                    name: "sounds/winning.ogg"
                }, {
                    bytes: 5530,
                    md5: "599c032ab155c0efb88de318bb338c22",
                    name: "ui.json"
                }, {
                    bytes: 667060,
                    md5: "3251482de1402c174de84a853904f7c7",
                    name: "ui.png"
                }]
            }]
        }
    };
    Q._supportsCrossOrigin = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
    o._scratchPoint = new Hb;
    la.NEWLINE = new Jb(10);
    da._sharedEvent = new uc;
    W._sharedEvent = new vc;
    Qa.CANVAS_TEXTURES = (new ha("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    F._mediaRefCount = 0;
    F._detectBlobSupport = !0;
    u.BASE_WIDTH = 1;
    u.BASE_HEIGHT =
        1;
    u.MAX_WIDTH = 1;
    u.STAGE_HEIGHT = 1;
    u.STAGE_WIDTH = 1;
    x.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    x.SHOULD_HIDE_MOBILE_BROWSER = window.top == window ? (new ha("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent) : !1;
    D._detectSupport = !0;
    wa.NAME = "Sprite_7";
    wa.PAUSED = 128;
    wa.SKIP_NEXT = 256;
    wa.NEXT_FLAG = 512;
    v.BEST = "best";
    v.GAME = "game";
    v.prefix = "sugar_eyes_";
    z.DH = 140;
    z.DW = 0;
    z.H = 102;
    Ea.first = !0;
    bb.frames = [0, 9, 13, 37, 15, 45, 17, 4];
    ea.USE_CACHE = !1;
    ea.USE_ENUM_INDEX = !1;
    ea.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    aa.DEFAULT_RESOLVER = new gc;
    aa.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    ua.count = 0;
    w.__toStr = {}.toString;
    Ga.BYTES_PER_ELEMENT = 1;
    Zc.main()
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);