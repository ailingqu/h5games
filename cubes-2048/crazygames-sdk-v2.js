/*! For license information please see bundle.js.LICENSE.txt */
( () => {
    var e = {
        198: (e, t, n) => {
            var r = 1 / 0
              , i = 9007199254740991
              , a = "[object Map]"
              , s = "[object Promise]"
              , o = "[object Set]"
              , u = "[object WeakMap]"
              , l = "[object DataView]"
              , c = /^\s+|\s+$/g
              , h = /^[-+]0x[0-9a-f]+$/i
              , d = /^0b[01]+$/i
              , f = /^\[object .+?Constructor\]$/
              , p = /^0o[0-7]+$/i
              , g = /^(?:0|[1-9]\d*)$/
              , v = "\\ud800-\\udfff"
              , y = "\\u0300-\\u036f\\ufe20-\\ufe23"
              , w = "\\u20d0-\\u20f0"
              , _ = "\\ufe0e\\ufe0f"
              , m = "[" + v + "]"
              , b = "[" + y + w + "]"
              , k = "\\ud83c[\\udffb-\\udfff]"
              , I = "[^" + v + "]"
              , E = "(?:\\ud83c[\\udde6-\\uddff]){2}"
              , S = "[\\ud800-\\udbff][\\udc00-\\udfff]"
              , A = "\\u200d"
              , T = "(?:" + b + "|" + k + ")?"
              , R = "[" + _ + "]?"
              , D = R + T + "(?:" + A + "(?:" + [I, E, S].join("|") + ")" + R + T + ")*"
              , x = "(?:" + [I + b + "?", b, E, S, m].join("|") + ")"
              , W = RegExp(k + "(?=" + k + ")|" + x + D, "g")
              , z = RegExp("[" + A + v + y + w + _ + "]")
              , L = parseInt
              , M = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
              , U = "object" == typeof self && self && self.Object === Object && self
              , B = M || U || Function("return this")();
            function P(e) {
                var t = -1
                  , n = Array(e.size);
                return e.forEach((function(e, r) {
                    n[++t] = [r, e]
                }
                )),
                n
            }
            function C(e) {
                var t = -1
                  , n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                }
                )),
                n
            }
            var F, j, q, O = Function.prototype, N = Object.prototype, K = B["__core-js_shared__"], G = (F = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "", V = O.toString, $ = N.hasOwnProperty, Q = N.toString, Z = RegExp("^" + V.call($).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Y = B.Symbol, X = Y ? Y.iterator : void 0, H = N.propertyIsEnumerable, J = Math.floor, ee = (j = Object.keys,
            q = Object,
            function(e) {
                return j(q(e))
            }
            ), te = Math.random, ne = fe(B, "DataView"), re = fe(B, "Map"), ie = fe(B, "Promise"), ae = fe(B, "Set"), se = fe(B, "WeakMap"), oe = ve(ne), ue = ve(re), le = ve(ie), ce = ve(ae), he = ve(se);
            function de(e, t) {
                return e + J(te() * (t - e + 1))
            }
            function fe(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return function(e) {
                    if (!be(e) || function(e) {
                        return !!G && G in e
                    }(e))
                        return !1;
                    var t = me(e) || function(e) {
                        var t = !1;
                        if (null != e && "function" != typeof e.toString)
                            try {
                                t = !!(e + "")
                            } catch (e) {}
                        return t
                    }(e) ? Z : f;
                    return t.test(ve(e))
                }(n) ? n : void 0
            }
            var pe = function(e) {
                return Q.call(e)
            };
            function ge(e, t) {
                return !!(t = null == t ? i : t) && ("number" == typeof e || g.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
            function ve(e) {
                if (null != e) {
                    try {
                        return V.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
            function ye(e, t, n) {
                var i, s, u = -1, l = function(e) {
                    if (!e)
                        return [];
                    if (_e(e))
                        return function(e) {
                            return "string" == typeof e || !we(e) && ke(e) && "[object String]" == Q.call(e)
                        }(e) ? function(e) {
                            return z.test(e)
                        }(t = e) ? function(e) {
                            return e.match(W) || []
                        }(t) : function(e) {
                            return e.split("")
                        }(t) : function(e, t) {
                            var n = -1
                              , r = e.length;
                            for (t || (t = Array(r)); ++n < r; )
                                t[n] = e[n];
                            return t
                        }(e);
                    var t;
                    if (X && e[X])
                        return function(e) {
                            for (var t, n = []; !(t = e.next()).done; )
                                n.push(t.value);
                            return n
                        }(e[X]());
                    var n = pe(e);
                    return (n == a ? P : n == o ? C : Ie)(e)
                }(e), f = l.length, g = f - 1;
                for ((n ? function(e, t, n) {
                    if (!be(n))
                        return !1;
                    var r = typeof t;
                    return !!("number" == r ? _e(n) && ge(t, n.length) : "string" == r && t in n) && function(e, t) {
                        return e === t || e != e && t != t
                    }(n[t], e)
                }(e, t, n) : void 0 === t) ? t = 1 : (i = function(e) {
                    var t = function(e) {
                        return e ? (e = function(e) {
                            if ("number" == typeof e)
                                return e;
                            if (function(e) {
                                return "symbol" == typeof e || ke(e) && "[object Symbol]" == Q.call(e)
                            }(e))
                                return NaN;
                            if (be(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = be(t) ? t + "" : t
                            }
                            if ("string" != typeof e)
                                return 0 === e ? e : +e;
                            e = e.replace(c, "");
                            var n = d.test(e);
                            return n || p.test(e) ? L(e.slice(2), n ? 2 : 8) : h.test(e) ? NaN : +e
                        }(e)) === r || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                    }(e)
                      , n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }(t),
                s = f,
                i == i && (void 0 !== s && (i = i <= s ? i : s),
                i = i >= 0 ? i : 0),
                t = i); ++u < t; ) {
                    var v = de(u, g)
                      , y = l[v];
                    l[v] = l[u],
                    l[u] = y
                }
                return l.length = t,
                l
            }
            (ne && pe(new ne(new ArrayBuffer(1))) != l || re && pe(new re) != a || ie && pe(ie.resolve()) != s || ae && pe(new ae) != o || se && pe(new se) != u) && (pe = function(e) {
                var t = Q.call(e)
                  , n = "[object Object]" == t ? e.constructor : void 0
                  , r = n ? ve(n) : void 0;
                if (r)
                    switch (r) {
                    case oe:
                        return l;
                    case ue:
                        return a;
                    case le:
                        return s;
                    case ce:
                        return o;
                    case he:
                        return u
                    }
                return t
            }
            );
            var we = Array.isArray;
            function _e(e) {
                return null != e && function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i
                }(e.length) && !me(e)
            }
            function me(e) {
                var t = be(e) ? Q.call(e) : "";
                return "[object Function]" == t || "[object GeneratorFunction]" == t
            }
            function be(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function ke(e) {
                return !!e && "object" == typeof e
            }
            function Ie(e) {
                return e ? function(e, t) {
                    return function(t) {
                        for (var n = -1, r = t ? t.length : 0, i = Array(r); ++n < r; )
                            i[n] = (a = t[n],
                            e[a]);
                        var a;
                        return i
                    }(t)
                }(e, function(e) {
                    return _e(e) ? function(e, t) {
                        var n = we(e) || function(e) {
                            return function(e) {
                                return ke(e) && _e(e)
                            }(e) && $.call(e, "callee") && (!H.call(e, "callee") || "[object Arguments]" == Q.call(e))
                        }(e) ? function(e, t) {
                            for (var n = -1, r = Array(e); ++n < e; )
                                r[n] = t(n);
                            return r
                        }(e.length, String) : []
                          , r = n.length
                          , i = !!r;
                        for (var a in e)
                            !t && !$.call(e, a) || i && ("length" == a || ge(a, r)) || n.push(a);
                        return n
                    }(e) : function(e) {
                        if (n = (t = e) && t.constructor,
                        t !== ("function" == typeof n && n.prototype || N))
                            return ee(e);
                        var t, n, r = [];
                        for (var i in Object(e))
                            $.call(e, i) && "constructor" != i && r.push(i);
                        return r
                    }(e)
                }(e)) : []
            }
            e.exports = function(e) {
                return ye(e, 4294967295)
            }
        }
        ,
        486: function(e, t, n) {
            var r;
            e = n.nmd(e),
            function() {
                var i, a = "Expected a function", s = "__lodash_hash_undefined__", o = "__lodash_placeholder__", u = 32, l = 128, c = 1 / 0, h = 9007199254740991, d = NaN, f = 4294967295, p = [["ary", l], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", u], ["partialRight", 64], ["rearg", 256]], g = "[object Arguments]", v = "[object Array]", y = "[object Boolean]", w = "[object Date]", _ = "[object Error]", m = "[object Function]", b = "[object GeneratorFunction]", k = "[object Map]", I = "[object Number]", E = "[object Object]", S = "[object Promise]", A = "[object RegExp]", T = "[object Set]", R = "[object String]", D = "[object Symbol]", x = "[object WeakMap]", W = "[object ArrayBuffer]", z = "[object DataView]", L = "[object Float32Array]", M = "[object Float64Array]", U = "[object Int8Array]", B = "[object Int16Array]", P = "[object Int32Array]", C = "[object Uint8Array]", F = "[object Uint8ClampedArray]", j = "[object Uint16Array]", q = "[object Uint32Array]", O = /\b__p \+= '';/g, N = /\b(__p \+=) '' \+/g, K = /(__e\(.*?\)|\b__t\)) \+\n'';/g, G = /&(?:amp|lt|gt|quot|#39);/g, V = /[&<>"']/g, $ = RegExp(G.source), Q = RegExp(V.source), Z = /<%-([\s\S]+?)%>/g, Y = /<%([\s\S]+?)%>/g, X = /<%=([\s\S]+?)%>/g, H = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, J = /^\w*$/, ee = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, te = /[\\^$.*+?()[\]{}|]/g, ne = RegExp(te.source), re = /^\s+/, ie = /\s/, ae = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, se = /\{\n\/\* \[wrapped with (.+)\] \*/, oe = /,? & /, ue = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, le = /[()=,{}\[\]\/\s]/, ce = /\\(\\)?/g, he = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, de = /\w*$/, fe = /^[-+]0x[0-9a-f]+$/i, pe = /^0b[01]+$/i, ge = /^\[object .+?Constructor\]$/, ve = /^0o[0-7]+$/i, ye = /^(?:0|[1-9]\d*)$/, we = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _e = /($^)/, me = /['\n\r\u2028\u2029\\]/g, be = "\\ud800-\\udfff", ke = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Ie = "\\u2700-\\u27bf", Ee = "a-z\\xdf-\\xf6\\xf8-\\xff", Se = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ae = "\\ufe0e\\ufe0f", Te = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Re = "[" + be + "]", De = "[" + Te + "]", xe = "[" + ke + "]", We = "\\d+", ze = "[" + Ie + "]", Le = "[" + Ee + "]", Me = "[^" + be + Te + We + Ie + Ee + Se + "]", Ue = "\\ud83c[\\udffb-\\udfff]", Be = "[^" + be + "]", Pe = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ce = "[\\ud800-\\udbff][\\udc00-\\udfff]", Fe = "[" + Se + "]", je = "\\u200d", qe = "(?:" + Le + "|" + Me + ")", Oe = "(?:" + Fe + "|" + Me + ")", Ne = "(?:['’](?:d|ll|m|re|s|t|ve))?", Ke = "(?:['’](?:D|LL|M|RE|S|T|VE))?", Ge = "(?:" + xe + "|" + Ue + ")?", Ve = "[" + Ae + "]?", $e = Ve + Ge + "(?:" + je + "(?:" + [Be, Pe, Ce].join("|") + ")" + Ve + Ge + ")*", Qe = "(?:" + [ze, Pe, Ce].join("|") + ")" + $e, Ze = "(?:" + [Be + xe + "?", xe, Pe, Ce, Re].join("|") + ")", Ye = RegExp("['’]", "g"), Xe = RegExp(xe, "g"), He = RegExp(Ue + "(?=" + Ue + ")|" + Ze + $e, "g"), Je = RegExp([Fe + "?" + Le + "+" + Ne + "(?=" + [De, Fe, "$"].join("|") + ")", Oe + "+" + Ke + "(?=" + [De, Fe + qe, "$"].join("|") + ")", Fe + "?" + qe + "+" + Ne, Fe + "+" + Ke, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", We, Qe].join("|"), "g"), et = RegExp("[" + je + be + ke + Ae + "]"), tt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, nt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], rt = -1, it = {};
                it[L] = it[M] = it[U] = it[B] = it[P] = it[C] = it[F] = it[j] = it[q] = !0,
                it[g] = it[v] = it[W] = it[y] = it[z] = it[w] = it[_] = it[m] = it[k] = it[I] = it[E] = it[A] = it[T] = it[R] = it[x] = !1;
                var at = {};
                at[g] = at[v] = at[W] = at[z] = at[y] = at[w] = at[L] = at[M] = at[U] = at[B] = at[P] = at[k] = at[I] = at[E] = at[A] = at[T] = at[R] = at[D] = at[C] = at[F] = at[j] = at[q] = !0,
                at[_] = at[m] = at[x] = !1;
                var st = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , ot = parseFloat
                  , ut = parseInt
                  , lt = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
                  , ct = "object" == typeof self && self && self.Object === Object && self
                  , ht = lt || ct || Function("return this")()
                  , dt = t && !t.nodeType && t
                  , ft = dt && e && !e.nodeType && e
                  , pt = ft && ft.exports === dt
                  , gt = pt && lt.process
                  , vt = function() {
                    try {
                        return ft && ft.require && ft.require("util").types || gt && gt.binding && gt.binding("util")
                    } catch (e) {}
                }()
                  , yt = vt && vt.isArrayBuffer
                  , wt = vt && vt.isDate
                  , _t = vt && vt.isMap
                  , mt = vt && vt.isRegExp
                  , bt = vt && vt.isSet
                  , kt = vt && vt.isTypedArray;
                function It(e, t, n) {
                    switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                    }
                    return e.apply(t, n)
                }
                function Et(e, t, n, r) {
                    for (var i = -1, a = null == e ? 0 : e.length; ++i < a; ) {
                        var s = e[i];
                        t(r, s, n(s), e)
                    }
                    return r
                }
                function St(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); )
                        ;
                    return e
                }
                function At(e, t) {
                    for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); )
                        ;
                    return e
                }
                function Tt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                        if (!t(e[n], n, e))
                            return !1;
                    return !0
                }
                function Rt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, i = 0, a = []; ++n < r; ) {
                        var s = e[n];
                        t(s, n, e) && (a[i++] = s)
                    }
                    return a
                }
                function Dt(e, t) {
                    return !(null == e || !e.length) && Ft(e, t, 0) > -1
                }
                function xt(e, t, n) {
                    for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                        if (n(t, e[r]))
                            return !0;
                    return !1
                }
                function Wt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
                        i[n] = t(e[n], n, e);
                    return i
                }
                function zt(e, t) {
                    for (var n = -1, r = t.length, i = e.length; ++n < r; )
                        e[i + n] = t[n];
                    return e
                }
                function Lt(e, t, n, r) {
                    var i = -1
                      , a = null == e ? 0 : e.length;
                    for (r && a && (n = e[++i]); ++i < a; )
                        n = t(n, e[i], i, e);
                    return n
                }
                function Mt(e, t, n, r) {
                    var i = null == e ? 0 : e.length;
                    for (r && i && (n = e[--i]); i--; )
                        n = t(n, e[i], i, e);
                    return n
                }
                function Ut(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                        if (t(e[n], n, e))
                            return !0;
                    return !1
                }
                var Bt = Nt("length");
                function Pt(e, t, n) {
                    var r;
                    return n(e, (function(e, n, i) {
                        if (t(e, n, i))
                            return r = n,
                            !1
                    }
                    )),
                    r
                }
                function Ct(e, t, n, r) {
                    for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i; )
                        if (t(e[a], a, e))
                            return a;
                    return -1
                }
                function Ft(e, t, n) {
                    return t == t ? function(e, t, n) {
                        for (var r = n - 1, i = e.length; ++r < i; )
                            if (e[r] === t)
                                return r;
                        return -1
                    }(e, t, n) : Ct(e, qt, n)
                }
                function jt(e, t, n, r) {
                    for (var i = n - 1, a = e.length; ++i < a; )
                        if (r(e[i], t))
                            return i;
                    return -1
                }
                function qt(e) {
                    return e != e
                }
                function Ot(e, t) {
                    var n = null == e ? 0 : e.length;
                    return n ? Vt(e, t) / n : d
                }
                function Nt(e) {
                    return function(t) {
                        return null == t ? i : t[e]
                    }
                }
                function Kt(e) {
                    return function(t) {
                        return null == e ? i : e[t]
                    }
                }
                function Gt(e, t, n, r, i) {
                    return i(e, (function(e, i, a) {
                        n = r ? (r = !1,
                        e) : t(n, e, i, a)
                    }
                    )),
                    n
                }
                function Vt(e, t) {
                    for (var n, r = -1, a = e.length; ++r < a; ) {
                        var s = t(e[r]);
                        s !== i && (n = n === i ? s : n + s)
                    }
                    return n
                }
                function $t(e, t) {
                    for (var n = -1, r = Array(e); ++n < e; )
                        r[n] = t(n);
                    return r
                }
                function Qt(e) {
                    return e ? e.slice(0, dn(e) + 1).replace(re, "") : e
                }
                function Zt(e) {
                    return function(t) {
                        return e(t)
                    }
                }
                function Yt(e, t) {
                    return Wt(t, (function(t) {
                        return e[t]
                    }
                    ))
                }
                function Xt(e, t) {
                    return e.has(t)
                }
                function Ht(e, t) {
                    for (var n = -1, r = e.length; ++n < r && Ft(t, e[n], 0) > -1; )
                        ;
                    return n
                }
                function Jt(e, t) {
                    for (var n = e.length; n-- && Ft(t, e[n], 0) > -1; )
                        ;
                    return n
                }
                var en = Kt({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                })
                  , tn = Kt({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });
                function nn(e) {
                    return "\\" + st[e]
                }
                function rn(e) {
                    return et.test(e)
                }
                function an(e) {
                    var t = -1
                      , n = Array(e.size);
                    return e.forEach((function(e, r) {
                        n[++t] = [r, e]
                    }
                    )),
                    n
                }
                function sn(e, t) {
                    return function(n) {
                        return e(t(n))
                    }
                }
                function on(e, t) {
                    for (var n = -1, r = e.length, i = 0, a = []; ++n < r; ) {
                        var s = e[n];
                        s !== t && s !== o || (e[n] = o,
                        a[i++] = n)
                    }
                    return a
                }
                function un(e) {
                    var t = -1
                      , n = Array(e.size);
                    return e.forEach((function(e) {
                        n[++t] = e
                    }
                    )),
                    n
                }
                function ln(e) {
                    var t = -1
                      , n = Array(e.size);
                    return e.forEach((function(e) {
                        n[++t] = [e, e]
                    }
                    )),
                    n
                }
                function cn(e) {
                    return rn(e) ? function(e) {
                        for (var t = He.lastIndex = 0; He.test(e); )
                            ++t;
                        return t
                    }(e) : Bt(e)
                }
                function hn(e) {
                    return rn(e) ? function(e) {
                        return e.match(He) || []
                    }(e) : function(e) {
                        return e.split("")
                    }(e)
                }
                function dn(e) {
                    for (var t = e.length; t-- && ie.test(e.charAt(t)); )
                        ;
                    return t
                }
                var fn = Kt({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                })
                  , pn = function e(t) {
                    var n, r = (t = null == t ? ht : pn.defaults(ht.Object(), t, pn.pick(ht, nt))).Array, ie = t.Date, be = t.Error, ke = t.Function, Ie = t.Math, Ee = t.Object, Se = t.RegExp, Ae = t.String, Te = t.TypeError, Re = r.prototype, De = ke.prototype, xe = Ee.prototype, We = t["__core-js_shared__"], ze = De.toString, Le = xe.hasOwnProperty, Me = 0, Ue = (n = /[^.]+$/.exec(We && We.keys && We.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "", Be = xe.toString, Pe = ze.call(Ee), Ce = ht._, Fe = Se("^" + ze.call(Le).replace(te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), je = pt ? t.Buffer : i, qe = t.Symbol, Oe = t.Uint8Array, Ne = je ? je.allocUnsafe : i, Ke = sn(Ee.getPrototypeOf, Ee), Ge = Ee.create, Ve = xe.propertyIsEnumerable, $e = Re.splice, Qe = qe ? qe.isConcatSpreadable : i, Ze = qe ? qe.iterator : i, He = qe ? qe.toStringTag : i, et = function() {
                        try {
                            var e = ua(Ee, "defineProperty");
                            return e({}, "", {}),
                            e
                        } catch (e) {}
                    }(), st = t.clearTimeout !== ht.clearTimeout && t.clearTimeout, lt = ie && ie.now !== ht.Date.now && ie.now, ct = t.setTimeout !== ht.setTimeout && t.setTimeout, dt = Ie.ceil, ft = Ie.floor, gt = Ee.getOwnPropertySymbols, vt = je ? je.isBuffer : i, Bt = t.isFinite, Kt = Re.join, gn = sn(Ee.keys, Ee), vn = Ie.max, yn = Ie.min, wn = ie.now, _n = t.parseInt, mn = Ie.random, bn = Re.reverse, kn = ua(t, "DataView"), In = ua(t, "Map"), En = ua(t, "Promise"), Sn = ua(t, "Set"), An = ua(t, "WeakMap"), Tn = ua(Ee, "create"), Rn = An && new An, Dn = {}, xn = Ba(kn), Wn = Ba(In), zn = Ba(En), Ln = Ba(Sn), Mn = Ba(An), Un = qe ? qe.prototype : i, Bn = Un ? Un.valueOf : i, Pn = Un ? Un.toString : i;
                    function Cn(e) {
                        if (Js(e) && !Os(e) && !(e instanceof On)) {
                            if (e instanceof qn)
                                return e;
                            if (Le.call(e, "__wrapped__"))
                                return Pa(e)
                        }
                        return new qn(e)
                    }
                    var Fn = function() {
                        function e() {}
                        return function(t) {
                            if (!Hs(t))
                                return {};
                            if (Ge)
                                return Ge(t);
                            e.prototype = t;
                            var n = new e;
                            return e.prototype = i,
                            n
                        }
                    }();
                    function jn() {}
                    function qn(e, t) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__chain__ = !!t,
                        this.__index__ = 0,
                        this.__values__ = i
                    }
                    function On(e) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = f,
                        this.__views__ = []
                    }
                    function Nn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Kn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Gn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Vn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.__data__ = new Gn; ++t < n; )
                            this.add(e[t])
                    }
                    function $n(e) {
                        var t = this.__data__ = new Kn(e);
                        this.size = t.size
                    }
                    function Qn(e, t) {
                        var n = Os(e)
                          , r = !n && qs(e)
                          , i = !n && !r && Vs(e)
                          , a = !n && !r && !i && oo(e)
                          , s = n || r || i || a
                          , o = s ? $t(e.length, Ae) : []
                          , u = o.length;
                        for (var l in e)
                            !t && !Le.call(e, l) || s && ("length" == l || i && ("offset" == l || "parent" == l) || a && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || ga(l, u)) || o.push(l);
                        return o
                    }
                    function Zn(e) {
                        var t = e.length;
                        return t ? e[Gr(0, t - 1)] : i
                    }
                    function Yn(e, t) {
                        return Wa(Ai(e), ar(t, 0, e.length))
                    }
                    function Xn(e) {
                        return Wa(Ai(e))
                    }
                    function Hn(e, t, n) {
                        (n !== i && !Cs(e[t], n) || n === i && !(t in e)) && rr(e, t, n)
                    }
                    function Jn(e, t, n) {
                        var r = e[t];
                        Le.call(e, t) && Cs(r, n) && (n !== i || t in e) || rr(e, t, n)
                    }
                    function er(e, t) {
                        for (var n = e.length; n--; )
                            if (Cs(e[n][0], t))
                                return n;
                        return -1
                    }
                    function tr(e, t, n, r) {
                        return cr(e, (function(e, i, a) {
                            t(r, e, n(e), a)
                        }
                        )),
                        r
                    }
                    function nr(e, t) {
                        return e && Ti(t, xo(t), e)
                    }
                    function rr(e, t, n) {
                        "__proto__" == t && et ? et(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                        }) : e[t] = n
                    }
                    function ir(e, t) {
                        for (var n = -1, a = t.length, s = r(a), o = null == e; ++n < a; )
                            s[n] = o ? i : So(e, t[n]);
                        return s
                    }
                    function ar(e, t, n) {
                        return e == e && (n !== i && (e = e <= n ? e : n),
                        t !== i && (e = e >= t ? e : t)),
                        e
                    }
                    function sr(e, t, n, r, a, s) {
                        var o, u = 1 & t, l = 2 & t, c = 4 & t;
                        if (n && (o = a ? n(e, r, a, s) : n(e)),
                        o !== i)
                            return o;
                        if (!Hs(e))
                            return e;
                        var h = Os(e);
                        if (h) {
                            if (o = function(e) {
                                var t = e.length
                                  , n = new e.constructor(t);
                                return t && "string" == typeof e[0] && Le.call(e, "index") && (n.index = e.index,
                                n.input = e.input),
                                n
                            }(e),
                            !u)
                                return Ai(e, o)
                        } else {
                            var d = ha(e)
                              , f = d == m || d == b;
                            if (Vs(e))
                                return mi(e, u);
                            if (d == E || d == g || f && !a) {
                                if (o = l || f ? {} : fa(e),
                                !u)
                                    return l ? function(e, t) {
                                        return Ti(e, ca(e), t)
                                    }(e, function(e, t) {
                                        return e && Ti(t, Wo(t), e)
                                    }(o, e)) : function(e, t) {
                                        return Ti(e, la(e), t)
                                    }(e, nr(o, e))
                            } else {
                                if (!at[d])
                                    return a ? e : {};
                                o = function(e, t, n) {
                                    var r, i = e.constructor;
                                    switch (t) {
                                    case W:
                                        return bi(e);
                                    case y:
                                    case w:
                                        return new i(+e);
                                    case z:
                                        return function(e, t) {
                                            var n = t ? bi(e.buffer) : e.buffer;
                                            return new e.constructor(n,e.byteOffset,e.byteLength)
                                        }(e, n);
                                    case L:
                                    case M:
                                    case U:
                                    case B:
                                    case P:
                                    case C:
                                    case F:
                                    case j:
                                    case q:
                                        return ki(e, n);
                                    case k:
                                        return new i;
                                    case I:
                                    case R:
                                        return new i(e);
                                    case A:
                                        return function(e) {
                                            var t = new e.constructor(e.source,de.exec(e));
                                            return t.lastIndex = e.lastIndex,
                                            t
                                        }(e);
                                    case T:
                                        return new i;
                                    case D:
                                        return r = e,
                                        Bn ? Ee(Bn.call(r)) : {}
                                    }
                                }(e, d, u)
                            }
                        }
                        s || (s = new $n);
                        var p = s.get(e);
                        if (p)
                            return p;
                        s.set(e, o),
                        io(e) ? e.forEach((function(r) {
                            o.add(sr(r, t, n, r, e, s))
                        }
                        )) : eo(e) && e.forEach((function(r, i) {
                            o.set(i, sr(r, t, n, i, e, s))
                        }
                        ));
                        var v = h ? i : (c ? l ? ta : ea : l ? Wo : xo)(e);
                        return St(v || e, (function(r, i) {
                            v && (r = e[i = r]),
                            Jn(o, i, sr(r, t, n, i, e, s))
                        }
                        )),
                        o
                    }
                    function or(e, t, n) {
                        var r = n.length;
                        if (null == e)
                            return !r;
                        for (e = Ee(e); r--; ) {
                            var a = n[r]
                              , s = t[a]
                              , o = e[a];
                            if (o === i && !(a in e) || !s(o))
                                return !1
                        }
                        return !0
                    }
                    function ur(e, t, n) {
                        if ("function" != typeof e)
                            throw new Te(a);
                        return Ta((function() {
                            e.apply(i, n)
                        }
                        ), t)
                    }
                    function lr(e, t, n, r) {
                        var i = -1
                          , a = Dt
                          , s = !0
                          , o = e.length
                          , u = []
                          , l = t.length;
                        if (!o)
                            return u;
                        n && (t = Wt(t, Zt(n))),
                        r ? (a = xt,
                        s = !1) : t.length >= 200 && (a = Xt,
                        s = !1,
                        t = new Vn(t));
                        e: for (; ++i < o; ) {
                            var c = e[i]
                              , h = null == n ? c : n(c);
                            if (c = r || 0 !== c ? c : 0,
                            s && h == h) {
                                for (var d = l; d--; )
                                    if (t[d] === h)
                                        continue e;
                                u.push(c)
                            } else
                                a(t, h, r) || u.push(c)
                        }
                        return u
                    }
                    Cn.templateSettings = {
                        escape: Z,
                        evaluate: Y,
                        interpolate: X,
                        variable: "",
                        imports: {
                            _: Cn
                        }
                    },
                    Cn.prototype = jn.prototype,
                    Cn.prototype.constructor = Cn,
                    qn.prototype = Fn(jn.prototype),
                    qn.prototype.constructor = qn,
                    On.prototype = Fn(jn.prototype),
                    On.prototype.constructor = On,
                    Nn.prototype.clear = function() {
                        this.__data__ = Tn ? Tn(null) : {},
                        this.size = 0
                    }
                    ,
                    Nn.prototype.delete = function(e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    Nn.prototype.get = function(e) {
                        var t = this.__data__;
                        if (Tn) {
                            var n = t[e];
                            return n === s ? i : n
                        }
                        return Le.call(t, e) ? t[e] : i
                    }
                    ,
                    Nn.prototype.has = function(e) {
                        var t = this.__data__;
                        return Tn ? t[e] !== i : Le.call(t, e)
                    }
                    ,
                    Nn.prototype.set = function(e, t) {
                        var n = this.__data__;
                        return this.size += this.has(e) ? 0 : 1,
                        n[e] = Tn && t === i ? s : t,
                        this
                    }
                    ,
                    Kn.prototype.clear = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    ,
                    Kn.prototype.delete = function(e) {
                        var t = this.__data__
                          , n = er(t, e);
                        return !(n < 0 || (n == t.length - 1 ? t.pop() : $e.call(t, n, 1),
                        --this.size,
                        0))
                    }
                    ,
                    Kn.prototype.get = function(e) {
                        var t = this.__data__
                          , n = er(t, e);
                        return n < 0 ? i : t[n][1]
                    }
                    ,
                    Kn.prototype.has = function(e) {
                        return er(this.__data__, e) > -1
                    }
                    ,
                    Kn.prototype.set = function(e, t) {
                        var n = this.__data__
                          , r = er(n, e);
                        return r < 0 ? (++this.size,
                        n.push([e, t])) : n[r][1] = t,
                        this
                    }
                    ,
                    Gn.prototype.clear = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new Nn,
                            map: new (In || Kn),
                            string: new Nn
                        }
                    }
                    ,
                    Gn.prototype.delete = function(e) {
                        var t = sa(this, e).delete(e);
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    Gn.prototype.get = function(e) {
                        return sa(this, e).get(e)
                    }
                    ,
                    Gn.prototype.has = function(e) {
                        return sa(this, e).has(e)
                    }
                    ,
                    Gn.prototype.set = function(e, t) {
                        var n = sa(this, e)
                          , r = n.size;
                        return n.set(e, t),
                        this.size += n.size == r ? 0 : 1,
                        this
                    }
                    ,
                    Vn.prototype.add = Vn.prototype.push = function(e) {
                        return this.__data__.set(e, s),
                        this
                    }
                    ,
                    Vn.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    $n.prototype.clear = function() {
                        this.__data__ = new Kn,
                        this.size = 0
                    }
                    ,
                    $n.prototype.delete = function(e) {
                        var t = this.__data__
                          , n = t.delete(e);
                        return this.size = t.size,
                        n
                    }
                    ,
                    $n.prototype.get = function(e) {
                        return this.__data__.get(e)
                    }
                    ,
                    $n.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    $n.prototype.set = function(e, t) {
                        var n = this.__data__;
                        if (n instanceof Kn) {
                            var r = n.__data__;
                            if (!In || r.length < 199)
                                return r.push([e, t]),
                                this.size = ++n.size,
                                this;
                            n = this.__data__ = new Gn(r)
                        }
                        return n.set(e, t),
                        this.size = n.size,
                        this
                    }
                    ;
                    var cr = xi(wr)
                      , hr = xi(_r, !0);
                    function dr(e, t) {
                        var n = !0;
                        return cr(e, (function(e, r, i) {
                            return n = !!t(e, r, i)
                        }
                        )),
                        n
                    }
                    function fr(e, t, n) {
                        for (var r = -1, a = e.length; ++r < a; ) {
                            var s = e[r]
                              , o = t(s);
                            if (null != o && (u === i ? o == o && !so(o) : n(o, u)))
                                var u = o
                                  , l = s
                        }
                        return l
                    }
                    function pr(e, t) {
                        var n = [];
                        return cr(e, (function(e, r, i) {
                            t(e, r, i) && n.push(e)
                        }
                        )),
                        n
                    }
                    function gr(e, t, n, r, i) {
                        var a = -1
                          , s = e.length;
                        for (n || (n = pa),
                        i || (i = []); ++a < s; ) {
                            var o = e[a];
                            t > 0 && n(o) ? t > 1 ? gr(o, t - 1, n, r, i) : zt(i, o) : r || (i[i.length] = o)
                        }
                        return i
                    }
                    var vr = Wi()
                      , yr = Wi(!0);
                    function wr(e, t) {
                        return e && vr(e, t, xo)
                    }
                    function _r(e, t) {
                        return e && yr(e, t, xo)
                    }
                    function mr(e, t) {
                        return Rt(t, (function(t) {
                            return Zs(e[t])
                        }
                        ))
                    }
                    function br(e, t) {
                        for (var n = 0, r = (t = vi(t, e)).length; null != e && n < r; )
                            e = e[Ua(t[n++])];
                        return n && n == r ? e : i
                    }
                    function kr(e, t, n) {
                        var r = t(e);
                        return Os(e) ? r : zt(r, n(e))
                    }
                    function Ir(e) {
                        return null == e ? e === i ? "[object Undefined]" : "[object Null]" : He && He in Ee(e) ? function(e) {
                            var t = Le.call(e, He)
                              , n = e[He];
                            try {
                                e[He] = i;
                                var r = !0
                            } catch (e) {}
                            var a = Be.call(e);
                            return r && (t ? e[He] = n : delete e[He]),
                            a
                        }(e) : function(e) {
                            return Be.call(e)
                        }(e)
                    }
                    function Er(e, t) {
                        return e > t
                    }
                    function Sr(e, t) {
                        return null != e && Le.call(e, t)
                    }
                    function Ar(e, t) {
                        return null != e && t in Ee(e)
                    }
                    function Tr(e, t, n) {
                        for (var a = n ? xt : Dt, s = e[0].length, o = e.length, u = o, l = r(o), c = 1 / 0, h = []; u--; ) {
                            var d = e[u];
                            u && t && (d = Wt(d, Zt(t))),
                            c = yn(d.length, c),
                            l[u] = !n && (t || s >= 120 && d.length >= 120) ? new Vn(u && d) : i
                        }
                        d = e[0];
                        var f = -1
                          , p = l[0];
                        e: for (; ++f < s && h.length < c; ) {
                            var g = d[f]
                              , v = t ? t(g) : g;
                            if (g = n || 0 !== g ? g : 0,
                            !(p ? Xt(p, v) : a(h, v, n))) {
                                for (u = o; --u; ) {
                                    var y = l[u];
                                    if (!(y ? Xt(y, v) : a(e[u], v, n)))
                                        continue e
                                }
                                p && p.push(v),
                                h.push(g)
                            }
                        }
                        return h
                    }
                    function Rr(e, t, n) {
                        var r = null == (e = Ea(e, t = vi(t, e))) ? e : e[Ua(Qa(t))];
                        return null == r ? i : It(r, e, n)
                    }
                    function Dr(e) {
                        return Js(e) && Ir(e) == g
                    }
                    function xr(e, t, n, r, a) {
                        return e === t || (null == e || null == t || !Js(e) && !Js(t) ? e != e && t != t : function(e, t, n, r, a, s) {
                            var o = Os(e)
                              , u = Os(t)
                              , l = o ? v : ha(e)
                              , c = u ? v : ha(t)
                              , h = (l = l == g ? E : l) == E
                              , d = (c = c == g ? E : c) == E
                              , f = l == c;
                            if (f && Vs(e)) {
                                if (!Vs(t))
                                    return !1;
                                o = !0,
                                h = !1
                            }
                            if (f && !h)
                                return s || (s = new $n),
                                o || oo(e) ? Hi(e, t, n, r, a, s) : function(e, t, n, r, i, a, s) {
                                    switch (n) {
                                    case z:
                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                            return !1;
                                        e = e.buffer,
                                        t = t.buffer;
                                    case W:
                                        return !(e.byteLength != t.byteLength || !a(new Oe(e), new Oe(t)));
                                    case y:
                                    case w:
                                    case I:
                                        return Cs(+e, +t);
                                    case _:
                                        return e.name == t.name && e.message == t.message;
                                    case A:
                                    case R:
                                        return e == t + "";
                                    case k:
                                        var o = an;
                                    case T:
                                        var u = 1 & r;
                                        if (o || (o = un),
                                        e.size != t.size && !u)
                                            return !1;
                                        var l = s.get(e);
                                        if (l)
                                            return l == t;
                                        r |= 2,
                                        s.set(e, t);
                                        var c = Hi(o(e), o(t), r, i, a, s);
                                        return s.delete(e),
                                        c;
                                    case D:
                                        if (Bn)
                                            return Bn.call(e) == Bn.call(t)
                                    }
                                    return !1
                                }(e, t, l, n, r, a, s);
                            if (!(1 & n)) {
                                var p = h && Le.call(e, "__wrapped__")
                                  , m = d && Le.call(t, "__wrapped__");
                                if (p || m) {
                                    var b = p ? e.value() : e
                                      , S = m ? t.value() : t;
                                    return s || (s = new $n),
                                    a(b, S, n, r, s)
                                }
                            }
                            return !!f && (s || (s = new $n),
                            function(e, t, n, r, a, s) {
                                var o = 1 & n
                                  , u = ea(e)
                                  , l = u.length;
                                if (l != ea(t).length && !o)
                                    return !1;
                                for (var c = l; c--; ) {
                                    var h = u[c];
                                    if (!(o ? h in t : Le.call(t, h)))
                                        return !1
                                }
                                var d = s.get(e)
                                  , f = s.get(t);
                                if (d && f)
                                    return d == t && f == e;
                                var p = !0;
                                s.set(e, t),
                                s.set(t, e);
                                for (var g = o; ++c < l; ) {
                                    var v = e[h = u[c]]
                                      , y = t[h];
                                    if (r)
                                        var w = o ? r(y, v, h, t, e, s) : r(v, y, h, e, t, s);
                                    if (!(w === i ? v === y || a(v, y, n, r, s) : w)) {
                                        p = !1;
                                        break
                                    }
                                    g || (g = "constructor" == h)
                                }
                                if (p && !g) {
                                    var _ = e.constructor
                                      , m = t.constructor;
                                    _ == m || !("constructor"in e) || !("constructor"in t) || "function" == typeof _ && _ instanceof _ && "function" == typeof m && m instanceof m || (p = !1)
                                }
                                return s.delete(e),
                                s.delete(t),
                                p
                            }(e, t, n, r, a, s))
                        }(e, t, n, r, xr, a))
                    }
                    function Wr(e, t, n, r) {
                        var a = n.length
                          , s = a
                          , o = !r;
                        if (null == e)
                            return !s;
                        for (e = Ee(e); a--; ) {
                            var u = n[a];
                            if (o && u[2] ? u[1] !== e[u[0]] : !(u[0]in e))
                                return !1
                        }
                        for (; ++a < s; ) {
                            var l = (u = n[a])[0]
                              , c = e[l]
                              , h = u[1];
                            if (o && u[2]) {
                                if (c === i && !(l in e))
                                    return !1
                            } else {
                                var d = new $n;
                                if (r)
                                    var f = r(c, h, l, e, t, d);
                                if (!(f === i ? xr(h, c, 3, r, d) : f))
                                    return !1
                            }
                        }
                        return !0
                    }
                    function zr(e) {
                        return !(!Hs(e) || (t = e,
                        Ue && Ue in t)) && (Zs(e) ? Fe : ge).test(Ba(e));
                        var t
                    }
                    function Lr(e) {
                        return "function" == typeof e ? e : null == e ? nu : "object" == typeof e ? Os(e) ? Cr(e[0], e[1]) : Pr(e) : hu(e)
                    }
                    function Mr(e) {
                        if (!ma(e))
                            return gn(e);
                        var t = [];
                        for (var n in Ee(e))
                            Le.call(e, n) && "constructor" != n && t.push(n);
                        return t
                    }
                    function Ur(e, t) {
                        return e < t
                    }
                    function Br(e, t) {
                        var n = -1
                          , i = Ks(e) ? r(e.length) : [];
                        return cr(e, (function(e, r, a) {
                            i[++n] = t(e, r, a)
                        }
                        )),
                        i
                    }
                    function Pr(e) {
                        var t = oa(e);
                        return 1 == t.length && t[0][2] ? ka(t[0][0], t[0][1]) : function(n) {
                            return n === e || Wr(n, e, t)
                        }
                    }
                    function Cr(e, t) {
                        return ya(e) && ba(t) ? ka(Ua(e), t) : function(n) {
                            var r = So(n, e);
                            return r === i && r === t ? Ao(n, e) : xr(t, r, 3)
                        }
                    }
                    function Fr(e, t, n, r, a) {
                        e !== t && vr(t, (function(s, o) {
                            if (a || (a = new $n),
                            Hs(s))
                                !function(e, t, n, r, a, s, o) {
                                    var u = Sa(e, n)
                                      , l = Sa(t, n)
                                      , c = o.get(l);
                                    if (c)
                                        Hn(e, n, c);
                                    else {
                                        var h = s ? s(u, l, n + "", e, t, o) : i
                                          , d = h === i;
                                        if (d) {
                                            var f = Os(l)
                                              , p = !f && Vs(l)
                                              , g = !f && !p && oo(l);
                                            h = l,
                                            f || p || g ? Os(u) ? h = u : Gs(u) ? h = Ai(u) : p ? (d = !1,
                                            h = mi(l, !0)) : g ? (d = !1,
                                            h = ki(l, !0)) : h = [] : no(l) || qs(l) ? (h = u,
                                            qs(u) ? h = vo(u) : Hs(u) && !Zs(u) || (h = fa(l))) : d = !1
                                        }
                                        d && (o.set(l, h),
                                        a(h, l, r, s, o),
                                        o.delete(l)),
                                        Hn(e, n, h)
                                    }
                                }(e, t, o, n, Fr, r, a);
                            else {
                                var u = r ? r(Sa(e, o), s, o + "", e, t, a) : i;
                                u === i && (u = s),
                                Hn(e, o, u)
                            }
                        }
                        ), Wo)
                    }
                    function jr(e, t) {
                        var n = e.length;
                        if (n)
                            return ga(t += t < 0 ? n : 0, n) ? e[t] : i
                    }
                    function qr(e, t, n) {
                        t = t.length ? Wt(t, (function(e) {
                            return Os(e) ? function(t) {
                                return br(t, 1 === e.length ? e[0] : e)
                            }
                            : e
                        }
                        )) : [nu];
                        var r = -1;
                        t = Wt(t, Zt(aa()));
                        var i = Br(e, (function(e, n, i) {
                            var a = Wt(t, (function(t) {
                                return t(e)
                            }
                            ));
                            return {
                                criteria: a,
                                index: ++r,
                                value: e
                            }
                        }
                        ));
                        return function(e) {
                            var t = e.length;
                            for (e.sort((function(e, t) {
                                return function(e, t, n) {
                                    for (var r = -1, i = e.criteria, a = t.criteria, s = i.length, o = n.length; ++r < s; ) {
                                        var u = Ii(i[r], a[r]);
                                        if (u)
                                            return r >= o ? u : u * ("desc" == n[r] ? -1 : 1)
                                    }
                                    return e.index - t.index
                                }(e, t, n)
                            }
                            )); t--; )
                                e[t] = e[t].value;
                            return e
                        }(i)
                    }
                    function Or(e, t, n) {
                        for (var r = -1, i = t.length, a = {}; ++r < i; ) {
                            var s = t[r]
                              , o = br(e, s);
                            n(o, s) && Yr(a, vi(s, e), o)
                        }
                        return a
                    }
                    function Nr(e, t, n, r) {
                        var i = r ? jt : Ft
                          , a = -1
                          , s = t.length
                          , o = e;
                        for (e === t && (t = Ai(t)),
                        n && (o = Wt(e, Zt(n))); ++a < s; )
                            for (var u = 0, l = t[a], c = n ? n(l) : l; (u = i(o, c, u, r)) > -1; )
                                o !== e && $e.call(o, u, 1),
                                $e.call(e, u, 1);
                        return e
                    }
                    function Kr(e, t) {
                        for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                            var i = t[n];
                            if (n == r || i !== a) {
                                var a = i;
                                ga(i) ? $e.call(e, i, 1) : ui(e, i)
                            }
                        }
                        return e
                    }
                    function Gr(e, t) {
                        return e + ft(mn() * (t - e + 1))
                    }
                    function Vr(e, t) {
                        var n = "";
                        if (!e || t < 1 || t > h)
                            return n;
                        do {
                            t % 2 && (n += e),
                            (t = ft(t / 2)) && (e += e)
                        } while (t);
                        return n
                    }
                    function $r(e, t) {
                        return Ra(Ia(e, t, nu), e + "")
                    }
                    function Qr(e) {
                        return Zn(Fo(e))
                    }
                    function Zr(e, t) {
                        var n = Fo(e);
                        return Wa(n, ar(t, 0, n.length))
                    }
                    function Yr(e, t, n, r) {
                        if (!Hs(e))
                            return e;
                        for (var a = -1, s = (t = vi(t, e)).length, o = s - 1, u = e; null != u && ++a < s; ) {
                            var l = Ua(t[a])
                              , c = n;
                            if ("__proto__" === l || "constructor" === l || "prototype" === l)
                                return e;
                            if (a != o) {
                                var h = u[l];
                                (c = r ? r(h, l, u) : i) === i && (c = Hs(h) ? h : ga(t[a + 1]) ? [] : {})
                            }
                            Jn(u, l, c),
                            u = u[l]
                        }
                        return e
                    }
                    var Xr = Rn ? function(e, t) {
                        return Rn.set(e, t),
                        e
                    }
                    : nu
                      , Hr = et ? function(e, t) {
                        return et(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Jo(t),
                            writable: !0
                        })
                    }
                    : nu;
                    function Jr(e) {
                        return Wa(Fo(e))
                    }
                    function ei(e, t, n) {
                        var i = -1
                          , a = e.length;
                        t < 0 && (t = -t > a ? 0 : a + t),
                        (n = n > a ? a : n) < 0 && (n += a),
                        a = t > n ? 0 : n - t >>> 0,
                        t >>>= 0;
                        for (var s = r(a); ++i < a; )
                            s[i] = e[i + t];
                        return s
                    }
                    function ti(e, t) {
                        var n;
                        return cr(e, (function(e, r, i) {
                            return !(n = t(e, r, i))
                        }
                        )),
                        !!n
                    }
                    function ni(e, t, n) {
                        var r = 0
                          , i = null == e ? r : e.length;
                        if ("number" == typeof t && t == t && i <= 2147483647) {
                            for (; r < i; ) {
                                var a = r + i >>> 1
                                  , s = e[a];
                                null !== s && !so(s) && (n ? s <= t : s < t) ? r = a + 1 : i = a
                            }
                            return i
                        }
                        return ri(e, t, nu, n)
                    }
                    function ri(e, t, n, r) {
                        var a = 0
                          , s = null == e ? 0 : e.length;
                        if (0 === s)
                            return 0;
                        for (var o = (t = n(t)) != t, u = null === t, l = so(t), c = t === i; a < s; ) {
                            var h = ft((a + s) / 2)
                              , d = n(e[h])
                              , f = d !== i
                              , p = null === d
                              , g = d == d
                              , v = so(d);
                            if (o)
                                var y = r || g;
                            else
                                y = c ? g && (r || f) : u ? g && f && (r || !p) : l ? g && f && !p && (r || !v) : !p && !v && (r ? d <= t : d < t);
                            y ? a = h + 1 : s = h
                        }
                        return yn(s, 4294967294)
                    }
                    function ii(e, t) {
                        for (var n = -1, r = e.length, i = 0, a = []; ++n < r; ) {
                            var s = e[n]
                              , o = t ? t(s) : s;
                            if (!n || !Cs(o, u)) {
                                var u = o;
                                a[i++] = 0 === s ? 0 : s
                            }
                        }
                        return a
                    }
                    function ai(e) {
                        return "number" == typeof e ? e : so(e) ? d : +e
                    }
                    function si(e) {
                        if ("string" == typeof e)
                            return e;
                        if (Os(e))
                            return Wt(e, si) + "";
                        if (so(e))
                            return Pn ? Pn.call(e) : "";
                        var t = e + "";
                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                    }
                    function oi(e, t, n) {
                        var r = -1
                          , i = Dt
                          , a = e.length
                          , s = !0
                          , o = []
                          , u = o;
                        if (n)
                            s = !1,
                            i = xt;
                        else if (a >= 200) {
                            var l = t ? null : Vi(e);
                            if (l)
                                return un(l);
                            s = !1,
                            i = Xt,
                            u = new Vn
                        } else
                            u = t ? [] : o;
                        e: for (; ++r < a; ) {
                            var c = e[r]
                              , h = t ? t(c) : c;
                            if (c = n || 0 !== c ? c : 0,
                            s && h == h) {
                                for (var d = u.length; d--; )
                                    if (u[d] === h)
                                        continue e;
                                t && u.push(h),
                                o.push(c)
                            } else
                                i(u, h, n) || (u !== o && u.push(h),
                                o.push(c))
                        }
                        return o
                    }
                    function ui(e, t) {
                        return null == (e = Ea(e, t = vi(t, e))) || delete e[Ua(Qa(t))]
                    }
                    function li(e, t, n, r) {
                        return Yr(e, t, n(br(e, t)), r)
                    }
                    function ci(e, t, n, r) {
                        for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e); )
                            ;
                        return n ? ei(e, r ? 0 : a, r ? a + 1 : i) : ei(e, r ? a + 1 : 0, r ? i : a)
                    }
                    function hi(e, t) {
                        var n = e;
                        return n instanceof On && (n = n.value()),
                        Lt(t, (function(e, t) {
                            return t.func.apply(t.thisArg, zt([e], t.args))
                        }
                        ), n)
                    }
                    function di(e, t, n) {
                        var i = e.length;
                        if (i < 2)
                            return i ? oi(e[0]) : [];
                        for (var a = -1, s = r(i); ++a < i; )
                            for (var o = e[a], u = -1; ++u < i; )
                                u != a && (s[a] = lr(s[a] || o, e[u], t, n));
                        return oi(gr(s, 1), t, n)
                    }
                    function fi(e, t, n) {
                        for (var r = -1, a = e.length, s = t.length, o = {}; ++r < a; ) {
                            var u = r < s ? t[r] : i;
                            n(o, e[r], u)
                        }
                        return o
                    }
                    function pi(e) {
                        return Gs(e) ? e : []
                    }
                    function gi(e) {
                        return "function" == typeof e ? e : nu
                    }
                    function vi(e, t) {
                        return Os(e) ? e : ya(e, t) ? [e] : Ma(yo(e))
                    }
                    var yi = $r;
                    function wi(e, t, n) {
                        var r = e.length;
                        return n = n === i ? r : n,
                        !t && n >= r ? e : ei(e, t, n)
                    }
                    var _i = st || function(e) {
                        return ht.clearTimeout(e)
                    }
                    ;
                    function mi(e, t) {
                        if (t)
                            return e.slice();
                        var n = e.length
                          , r = Ne ? Ne(n) : new e.constructor(n);
                        return e.copy(r),
                        r
                    }
                    function bi(e) {
                        var t = new e.constructor(e.byteLength);
                        return new Oe(t).set(new Oe(e)),
                        t
                    }
                    function ki(e, t) {
                        var n = t ? bi(e.buffer) : e.buffer;
                        return new e.constructor(n,e.byteOffset,e.length)
                    }
                    function Ii(e, t) {
                        if (e !== t) {
                            var n = e !== i
                              , r = null === e
                              , a = e == e
                              , s = so(e)
                              , o = t !== i
                              , u = null === t
                              , l = t == t
                              , c = so(t);
                            if (!u && !c && !s && e > t || s && o && l && !u && !c || r && o && l || !n && l || !a)
                                return 1;
                            if (!r && !s && !c && e < t || c && n && a && !r && !s || u && n && a || !o && a || !l)
                                return -1
                        }
                        return 0
                    }
                    function Ei(e, t, n, i) {
                        for (var a = -1, s = e.length, o = n.length, u = -1, l = t.length, c = vn(s - o, 0), h = r(l + c), d = !i; ++u < l; )
                            h[u] = t[u];
                        for (; ++a < o; )
                            (d || a < s) && (h[n[a]] = e[a]);
                        for (; c--; )
                            h[u++] = e[a++];
                        return h
                    }
                    function Si(e, t, n, i) {
                        for (var a = -1, s = e.length, o = -1, u = n.length, l = -1, c = t.length, h = vn(s - u, 0), d = r(h + c), f = !i; ++a < h; )
                            d[a] = e[a];
                        for (var p = a; ++l < c; )
                            d[p + l] = t[l];
                        for (; ++o < u; )
                            (f || a < s) && (d[p + n[o]] = e[a++]);
                        return d
                    }
                    function Ai(e, t) {
                        var n = -1
                          , i = e.length;
                        for (t || (t = r(i)); ++n < i; )
                            t[n] = e[n];
                        return t
                    }
                    function Ti(e, t, n, r) {
                        var a = !n;
                        n || (n = {});
                        for (var s = -1, o = t.length; ++s < o; ) {
                            var u = t[s]
                              , l = r ? r(n[u], e[u], u, n, e) : i;
                            l === i && (l = e[u]),
                            a ? rr(n, u, l) : Jn(n, u, l)
                        }
                        return n
                    }
                    function Ri(e, t) {
                        return function(n, r) {
                            var i = Os(n) ? Et : tr
                              , a = t ? t() : {};
                            return i(n, e, aa(r, 2), a)
                        }
                    }
                    function Di(e) {
                        return $r((function(t, n) {
                            var r = -1
                              , a = n.length
                              , s = a > 1 ? n[a - 1] : i
                              , o = a > 2 ? n[2] : i;
                            for (s = e.length > 3 && "function" == typeof s ? (a--,
                            s) : i,
                            o && va(n[0], n[1], o) && (s = a < 3 ? i : s,
                            a = 1),
                            t = Ee(t); ++r < a; ) {
                                var u = n[r];
                                u && e(t, u, r, s)
                            }
                            return t
                        }
                        ))
                    }
                    function xi(e, t) {
                        return function(n, r) {
                            if (null == n)
                                return n;
                            if (!Ks(n))
                                return e(n, r);
                            for (var i = n.length, a = t ? i : -1, s = Ee(n); (t ? a-- : ++a < i) && !1 !== r(s[a], a, s); )
                                ;
                            return n
                        }
                    }
                    function Wi(e) {
                        return function(t, n, r) {
                            for (var i = -1, a = Ee(t), s = r(t), o = s.length; o--; ) {
                                var u = s[e ? o : ++i];
                                if (!1 === n(a[u], u, a))
                                    break
                            }
                            return t
                        }
                    }
                    function zi(e) {
                        return function(t) {
                            var n = rn(t = yo(t)) ? hn(t) : i
                              , r = n ? n[0] : t.charAt(0)
                              , a = n ? wi(n, 1).join("") : t.slice(1);
                            return r[e]() + a
                        }
                    }
                    function Li(e) {
                        return function(t) {
                            return Lt(Yo(Oo(t).replace(Ye, "")), e, "")
                        }
                    }
                    function Mi(e) {
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0],t[1]);
                            case 3:
                                return new e(t[0],t[1],t[2]);
                            case 4:
                                return new e(t[0],t[1],t[2],t[3]);
                            case 5:
                                return new e(t[0],t[1],t[2],t[3],t[4]);
                            case 6:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
                            case 7:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
                            }
                            var n = Fn(e.prototype)
                              , r = e.apply(n, t);
                            return Hs(r) ? r : n
                        }
                    }
                    function Ui(e) {
                        return function(t, n, r) {
                            var a = Ee(t);
                            if (!Ks(t)) {
                                var s = aa(n, 3);
                                t = xo(t),
                                n = function(e) {
                                    return s(a[e], e, a)
                                }
                            }
                            var o = e(t, n, r);
                            return o > -1 ? a[s ? t[o] : o] : i
                        }
                    }
                    function Bi(e) {
                        return Ji((function(t) {
                            var n = t.length
                              , r = n
                              , s = qn.prototype.thru;
                            for (e && t.reverse(); r--; ) {
                                var o = t[r];
                                if ("function" != typeof o)
                                    throw new Te(a);
                                if (s && !u && "wrapper" == ra(o))
                                    var u = new qn([],!0)
                            }
                            for (r = u ? r : n; ++r < n; ) {
                                var l = ra(o = t[r])
                                  , c = "wrapper" == l ? na(o) : i;
                                u = c && wa(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9] ? u[ra(c[0])].apply(u, c[3]) : 1 == o.length && wa(o) ? u[l]() : u.thru(o)
                            }
                            return function() {
                                var e = arguments
                                  , r = e[0];
                                if (u && 1 == e.length && Os(r))
                                    return u.plant(r).value();
                                for (var i = 0, a = n ? t[i].apply(this, e) : r; ++i < n; )
                                    a = t[i].call(this, a);
                                return a
                            }
                        }
                        ))
                    }
                    function Pi(e, t, n, a, s, o, u, c, h, d) {
                        var f = t & l
                          , p = 1 & t
                          , g = 2 & t
                          , v = 24 & t
                          , y = 512 & t
                          , w = g ? i : Mi(e);
                        return function l() {
                            for (var _ = arguments.length, m = r(_), b = _; b--; )
                                m[b] = arguments[b];
                            if (v)
                                var k = ia(l)
                                  , I = function(e, t) {
                                    for (var n = e.length, r = 0; n--; )
                                        e[n] === t && ++r;
                                    return r
                                }(m, k);
                            if (a && (m = Ei(m, a, s, v)),
                            o && (m = Si(m, o, u, v)),
                            _ -= I,
                            v && _ < d) {
                                var E = on(m, k);
                                return Ki(e, t, Pi, l.placeholder, n, m, E, c, h, d - _)
                            }
                            var S = p ? n : this
                              , A = g ? S[e] : e;
                            return _ = m.length,
                            c ? m = function(e, t) {
                                for (var n = e.length, r = yn(t.length, n), a = Ai(e); r--; ) {
                                    var s = t[r];
                                    e[r] = ga(s, n) ? a[s] : i
                                }
                                return e
                            }(m, c) : y && _ > 1 && m.reverse(),
                            f && h < _ && (m.length = h),
                            this && this !== ht && this instanceof l && (A = w || Mi(A)),
                            A.apply(S, m)
                        }
                    }
                    function Ci(e, t) {
                        return function(n, r) {
                            return function(e, t, n, r) {
                                return wr(e, (function(e, i, a) {
                                    t(r, n(e), i, a)
                                }
                                )),
                                r
                            }(n, e, t(r), {})
                        }
                    }
                    function Fi(e, t) {
                        return function(n, r) {
                            var a;
                            if (n === i && r === i)
                                return t;
                            if (n !== i && (a = n),
                            r !== i) {
                                if (a === i)
                                    return r;
                                "string" == typeof n || "string" == typeof r ? (n = si(n),
                                r = si(r)) : (n = ai(n),
                                r = ai(r)),
                                a = e(n, r)
                            }
                            return a
                        }
                    }
                    function ji(e) {
                        return Ji((function(t) {
                            return t = Wt(t, Zt(aa())),
                            $r((function(n) {
                                var r = this;
                                return e(t, (function(e) {
                                    return It(e, r, n)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    function qi(e, t) {
                        var n = (t = t === i ? " " : si(t)).length;
                        if (n < 2)
                            return n ? Vr(t, e) : t;
                        var r = Vr(t, dt(e / cn(t)));
                        return rn(t) ? wi(hn(r), 0, e).join("") : r.slice(0, e)
                    }
                    function Oi(e) {
                        return function(t, n, a) {
                            return a && "number" != typeof a && va(t, n, a) && (n = a = i),
                            t = ho(t),
                            n === i ? (n = t,
                            t = 0) : n = ho(n),
                            function(e, t, n, i) {
                                for (var a = -1, s = vn(dt((t - e) / (n || 1)), 0), o = r(s); s--; )
                                    o[i ? s : ++a] = e,
                                    e += n;
                                return o
                            }(t, n, a = a === i ? t < n ? 1 : -1 : ho(a), e)
                        }
                    }
                    function Ni(e) {
                        return function(t, n) {
                            return "string" == typeof t && "string" == typeof n || (t = go(t),
                            n = go(n)),
                            e(t, n)
                        }
                    }
                    function Ki(e, t, n, r, a, s, o, l, c, h) {
                        var d = 8 & t;
                        t |= d ? u : 64,
                        4 & (t &= ~(d ? 64 : u)) || (t &= -4);
                        var f = [e, t, a, d ? s : i, d ? o : i, d ? i : s, d ? i : o, l, c, h]
                          , p = n.apply(i, f);
                        return wa(e) && Aa(p, f),
                        p.placeholder = r,
                        Da(p, e, t)
                    }
                    function Gi(e) {
                        var t = Ie[e];
                        return function(e, n) {
                            if (e = go(e),
                            (n = null == n ? 0 : yn(fo(n), 292)) && Bt(e)) {
                                var r = (yo(e) + "e").split("e");
                                return +((r = (yo(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                            }
                            return t(e)
                        }
                    }
                    var Vi = Sn && 1 / un(new Sn([, -0]))[1] == c ? function(e) {
                        return new Sn(e)
                    }
                    : ou;
                    function $i(e) {
                        return function(t) {
                            var n = ha(t);
                            return n == k ? an(t) : n == T ? ln(t) : function(e, t) {
                                return Wt(t, (function(t) {
                                    return [t, e[t]]
                                }
                                ))
                            }(t, e(t))
                        }
                    }
                    function Qi(e, t, n, s, c, h, d, f) {
                        var p = 2 & t;
                        if (!p && "function" != typeof e)
                            throw new Te(a);
                        var g = s ? s.length : 0;
                        if (g || (t &= -97,
                        s = c = i),
                        d = d === i ? d : vn(fo(d), 0),
                        f = f === i ? f : fo(f),
                        g -= c ? c.length : 0,
                        64 & t) {
                            var v = s
                              , y = c;
                            s = c = i
                        }
                        var w = p ? i : na(e)
                          , _ = [e, t, n, s, c, v, y, h, d, f];
                        if (w && function(e, t) {
                            var n = e[1]
                              , r = t[1]
                              , i = n | r
                              , a = i < 131
                              , s = r == l && 8 == n || r == l && 256 == n && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
                            if (!a && !s)
                                return e;
                            1 & r && (e[2] = t[2],
                            i |= 1 & n ? 0 : 4);
                            var u = t[3];
                            if (u) {
                                var c = e[3];
                                e[3] = c ? Ei(c, u, t[4]) : u,
                                e[4] = c ? on(e[3], o) : t[4]
                            }
                            (u = t[5]) && (c = e[5],
                            e[5] = c ? Si(c, u, t[6]) : u,
                            e[6] = c ? on(e[5], o) : t[6]),
                            (u = t[7]) && (e[7] = u),
                            r & l && (e[8] = null == e[8] ? t[8] : yn(e[8], t[8])),
                            null == e[9] && (e[9] = t[9]),
                            e[0] = t[0],
                            e[1] = i
                        }(_, w),
                        e = _[0],
                        t = _[1],
                        n = _[2],
                        s = _[3],
                        c = _[4],
                        !(f = _[9] = _[9] === i ? p ? 0 : e.length : vn(_[9] - g, 0)) && 24 & t && (t &= -25),
                        t && 1 != t)
                            m = 8 == t || 16 == t ? function(e, t, n) {
                                var a = Mi(e);
                                return function s() {
                                    for (var o = arguments.length, u = r(o), l = o, c = ia(s); l--; )
                                        u[l] = arguments[l];
                                    var h = o < 3 && u[0] !== c && u[o - 1] !== c ? [] : on(u, c);
                                    return (o -= h.length) < n ? Ki(e, t, Pi, s.placeholder, i, u, h, i, i, n - o) : It(this && this !== ht && this instanceof s ? a : e, this, u)
                                }
                            }(e, t, f) : t != u && 33 != t || c.length ? Pi.apply(i, _) : function(e, t, n, i) {
                                var a = 1 & t
                                  , s = Mi(e);
                                return function t() {
                                    for (var o = -1, u = arguments.length, l = -1, c = i.length, h = r(c + u), d = this && this !== ht && this instanceof t ? s : e; ++l < c; )
                                        h[l] = i[l];
                                    for (; u--; )
                                        h[l++] = arguments[++o];
                                    return It(d, a ? n : this, h)
                                }
                            }(e, t, n, s);
                        else
                            var m = function(e, t, n) {
                                var r = 1 & t
                                  , i = Mi(e);
                                return function t() {
                                    return (this && this !== ht && this instanceof t ? i : e).apply(r ? n : this, arguments)
                                }
                            }(e, t, n);
                        return Da((w ? Xr : Aa)(m, _), e, t)
                    }
                    function Zi(e, t, n, r) {
                        return e === i || Cs(e, xe[n]) && !Le.call(r, n) ? t : e
                    }
                    function Yi(e, t, n, r, a, s) {
                        return Hs(e) && Hs(t) && (s.set(t, e),
                        Fr(e, t, i, Yi, s),
                        s.delete(t)),
                        e
                    }
                    function Xi(e) {
                        return no(e) ? i : e
                    }
                    function Hi(e, t, n, r, a, s) {
                        var o = 1 & n
                          , u = e.length
                          , l = t.length;
                        if (u != l && !(o && l > u))
                            return !1;
                        var c = s.get(e)
                          , h = s.get(t);
                        if (c && h)
                            return c == t && h == e;
                        var d = -1
                          , f = !0
                          , p = 2 & n ? new Vn : i;
                        for (s.set(e, t),
                        s.set(t, e); ++d < u; ) {
                            var g = e[d]
                              , v = t[d];
                            if (r)
                                var y = o ? r(v, g, d, t, e, s) : r(g, v, d, e, t, s);
                            if (y !== i) {
                                if (y)
                                    continue;
                                f = !1;
                                break
                            }
                            if (p) {
                                if (!Ut(t, (function(e, t) {
                                    if (!Xt(p, t) && (g === e || a(g, e, n, r, s)))
                                        return p.push(t)
                                }
                                ))) {
                                    f = !1;
                                    break
                                }
                            } else if (g !== v && !a(g, v, n, r, s)) {
                                f = !1;
                                break
                            }
                        }
                        return s.delete(e),
                        s.delete(t),
                        f
                    }
                    function Ji(e) {
                        return Ra(Ia(e, i, Na), e + "")
                    }
                    function ea(e) {
                        return kr(e, xo, la)
                    }
                    function ta(e) {
                        return kr(e, Wo, ca)
                    }
                    var na = Rn ? function(e) {
                        return Rn.get(e)
                    }
                    : ou;
                    function ra(e) {
                        for (var t = e.name + "", n = Dn[t], r = Le.call(Dn, t) ? n.length : 0; r--; ) {
                            var i = n[r]
                              , a = i.func;
                            if (null == a || a == e)
                                return i.name
                        }
                        return t
                    }
                    function ia(e) {
                        return (Le.call(Cn, "placeholder") ? Cn : e).placeholder
                    }
                    function aa() {
                        var e = Cn.iteratee || ru;
                        return e = e === ru ? Lr : e,
                        arguments.length ? e(arguments[0], arguments[1]) : e
                    }
                    function sa(e, t) {
                        var n, r, i = e.__data__;
                        return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
                    }
                    function oa(e) {
                        for (var t = xo(e), n = t.length; n--; ) {
                            var r = t[n]
                              , i = e[r];
                            t[n] = [r, i, ba(i)]
                        }
                        return t
                    }
                    function ua(e, t) {
                        var n = function(e, t) {
                            return null == e ? i : e[t]
                        }(e, t);
                        return zr(n) ? n : i
                    }
                    var la = gt ? function(e) {
                        return null == e ? [] : (e = Ee(e),
                        Rt(gt(e), (function(t) {
                            return Ve.call(e, t)
                        }
                        )))
                    }
                    : pu
                      , ca = gt ? function(e) {
                        for (var t = []; e; )
                            zt(t, la(e)),
                            e = Ke(e);
                        return t
                    }
                    : pu
                      , ha = Ir;
                    function da(e, t, n) {
                        for (var r = -1, i = (t = vi(t, e)).length, a = !1; ++r < i; ) {
                            var s = Ua(t[r]);
                            if (!(a = null != e && n(e, s)))
                                break;
                            e = e[s]
                        }
                        return a || ++r != i ? a : !!(i = null == e ? 0 : e.length) && Xs(i) && ga(s, i) && (Os(e) || qs(e))
                    }
                    function fa(e) {
                        return "function" != typeof e.constructor || ma(e) ? {} : Fn(Ke(e))
                    }
                    function pa(e) {
                        return Os(e) || qs(e) || !!(Qe && e && e[Qe])
                    }
                    function ga(e, t) {
                        var n = typeof e;
                        return !!(t = null == t ? h : t) && ("number" == n || "symbol" != n && ye.test(e)) && e > -1 && e % 1 == 0 && e < t
                    }
                    function va(e, t, n) {
                        if (!Hs(n))
                            return !1;
                        var r = typeof t;
                        return !!("number" == r ? Ks(n) && ga(t, n.length) : "string" == r && t in n) && Cs(n[t], e)
                    }
                    function ya(e, t) {
                        if (Os(e))
                            return !1;
                        var n = typeof e;
                        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !so(e)) || J.test(e) || !H.test(e) || null != t && e in Ee(t)
                    }
                    function wa(e) {
                        var t = ra(e)
                          , n = Cn[t];
                        if ("function" != typeof n || !(t in On.prototype))
                            return !1;
                        if (e === n)
                            return !0;
                        var r = na(n);
                        return !!r && e === r[0]
                    }
                    (kn && ha(new kn(new ArrayBuffer(1))) != z || In && ha(new In) != k || En && ha(En.resolve()) != S || Sn && ha(new Sn) != T || An && ha(new An) != x) && (ha = function(e) {
                        var t = Ir(e)
                          , n = t == E ? e.constructor : i
                          , r = n ? Ba(n) : "";
                        if (r)
                            switch (r) {
                            case xn:
                                return z;
                            case Wn:
                                return k;
                            case zn:
                                return S;
                            case Ln:
                                return T;
                            case Mn:
                                return x
                            }
                        return t
                    }
                    );
                    var _a = We ? Zs : gu;
                    function ma(e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || xe)
                    }
                    function ba(e) {
                        return e == e && !Hs(e)
                    }
                    function ka(e, t) {
                        return function(n) {
                            return null != n && n[e] === t && (t !== i || e in Ee(n))
                        }
                    }
                    function Ia(e, t, n) {
                        return t = vn(t === i ? e.length - 1 : t, 0),
                        function() {
                            for (var i = arguments, a = -1, s = vn(i.length - t, 0), o = r(s); ++a < s; )
                                o[a] = i[t + a];
                            a = -1;
                            for (var u = r(t + 1); ++a < t; )
                                u[a] = i[a];
                            return u[t] = n(o),
                            It(e, this, u)
                        }
                    }
                    function Ea(e, t) {
                        return t.length < 2 ? e : br(e, ei(t, 0, -1))
                    }
                    function Sa(e, t) {
                        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t)
                            return e[t]
                    }
                    var Aa = xa(Xr)
                      , Ta = ct || function(e, t) {
                        return ht.setTimeout(e, t)
                    }
                      , Ra = xa(Hr);
                    function Da(e, t, n) {
                        var r = t + "";
                        return Ra(e, function(e, t) {
                            var n = t.length;
                            if (!n)
                                return e;
                            var r = n - 1;
                            return t[r] = (n > 1 ? "& " : "") + t[r],
                            t = t.join(n > 2 ? ", " : " "),
                            e.replace(ae, "{\n/* [wrapped with " + t + "] */\n")
                        }(r, function(e, t) {
                            return St(p, (function(n) {
                                var r = "_." + n[0];
                                t & n[1] && !Dt(e, r) && e.push(r)
                            }
                            )),
                            e.sort()
                        }(function(e) {
                            var t = e.match(se);
                            return t ? t[1].split(oe) : []
                        }(r), n)))
                    }
                    function xa(e) {
                        var t = 0
                          , n = 0;
                        return function() {
                            var r = wn()
                              , a = 16 - (r - n);
                            if (n = r,
                            a > 0) {
                                if (++t >= 800)
                                    return arguments[0]
                            } else
                                t = 0;
                            return e.apply(i, arguments)
                        }
                    }
                    function Wa(e, t) {
                        var n = -1
                          , r = e.length
                          , a = r - 1;
                        for (t = t === i ? r : t; ++n < t; ) {
                            var s = Gr(n, a)
                              , o = e[s];
                            e[s] = e[n],
                            e[n] = o
                        }
                        return e.length = t,
                        e
                    }
                    var za, La, Ma = (za = zs((function(e) {
                        var t = [];
                        return 46 === e.charCodeAt(0) && t.push(""),
                        e.replace(ee, (function(e, n, r, i) {
                            t.push(r ? i.replace(ce, "$1") : n || e)
                        }
                        )),
                        t
                    }
                    ), (function(e) {
                        return 500 === La.size && La.clear(),
                        e
                    }
                    )),
                    La = za.cache,
                    za);
                    function Ua(e) {
                        if ("string" == typeof e || so(e))
                            return e;
                        var t = e + "";
                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                    }
                    function Ba(e) {
                        if (null != e) {
                            try {
                                return ze.call(e)
                            } catch (e) {}
                            try {
                                return e + ""
                            } catch (e) {}
                        }
                        return ""
                    }
                    function Pa(e) {
                        if (e instanceof On)
                            return e.clone();
                        var t = new qn(e.__wrapped__,e.__chain__);
                        return t.__actions__ = Ai(e.__actions__),
                        t.__index__ = e.__index__,
                        t.__values__ = e.__values__,
                        t
                    }
                    var Ca = $r((function(e, t) {
                        return Gs(e) ? lr(e, gr(t, 1, Gs, !0)) : []
                    }
                    ))
                      , Fa = $r((function(e, t) {
                        var n = Qa(t);
                        return Gs(n) && (n = i),
                        Gs(e) ? lr(e, gr(t, 1, Gs, !0), aa(n, 2)) : []
                    }
                    ))
                      , ja = $r((function(e, t) {
                        var n = Qa(t);
                        return Gs(n) && (n = i),
                        Gs(e) ? lr(e, gr(t, 1, Gs, !0), i, n) : []
                    }
                    ));
                    function qa(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var i = null == n ? 0 : fo(n);
                        return i < 0 && (i = vn(r + i, 0)),
                        Ct(e, aa(t, 3), i)
                    }
                    function Oa(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var a = r - 1;
                        return n !== i && (a = fo(n),
                        a = n < 0 ? vn(r + a, 0) : yn(a, r - 1)),
                        Ct(e, aa(t, 3), a, !0)
                    }
                    function Na(e) {
                        return null != e && e.length ? gr(e, 1) : []
                    }
                    function Ka(e) {
                        return e && e.length ? e[0] : i
                    }
                    var Ga = $r((function(e) {
                        var t = Wt(e, pi);
                        return t.length && t[0] === e[0] ? Tr(t) : []
                    }
                    ))
                      , Va = $r((function(e) {
                        var t = Qa(e)
                          , n = Wt(e, pi);
                        return t === Qa(n) ? t = i : n.pop(),
                        n.length && n[0] === e[0] ? Tr(n, aa(t, 2)) : []
                    }
                    ))
                      , $a = $r((function(e) {
                        var t = Qa(e)
                          , n = Wt(e, pi);
                        return (t = "function" == typeof t ? t : i) && n.pop(),
                        n.length && n[0] === e[0] ? Tr(n, i, t) : []
                    }
                    ));
                    function Qa(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? e[t - 1] : i
                    }
                    var Za = $r(Ya);
                    function Ya(e, t) {
                        return e && e.length && t && t.length ? Nr(e, t) : e
                    }
                    var Xa = Ji((function(e, t) {
                        var n = null == e ? 0 : e.length
                          , r = ir(e, t);
                        return Kr(e, Wt(t, (function(e) {
                            return ga(e, n) ? +e : e
                        }
                        )).sort(Ii)),
                        r
                    }
                    ));
                    function Ha(e) {
                        return null == e ? e : bn.call(e)
                    }
                    var Ja = $r((function(e) {
                        return oi(gr(e, 1, Gs, !0))
                    }
                    ))
                      , es = $r((function(e) {
                        var t = Qa(e);
                        return Gs(t) && (t = i),
                        oi(gr(e, 1, Gs, !0), aa(t, 2))
                    }
                    ))
                      , ts = $r((function(e) {
                        var t = Qa(e);
                        return t = "function" == typeof t ? t : i,
                        oi(gr(e, 1, Gs, !0), i, t)
                    }
                    ));
                    function ns(e) {
                        if (!e || !e.length)
                            return [];
                        var t = 0;
                        return e = Rt(e, (function(e) {
                            if (Gs(e))
                                return t = vn(e.length, t),
                                !0
                        }
                        )),
                        $t(t, (function(t) {
                            return Wt(e, Nt(t))
                        }
                        ))
                    }
                    function rs(e, t) {
                        if (!e || !e.length)
                            return [];
                        var n = ns(e);
                        return null == t ? n : Wt(n, (function(e) {
                            return It(t, i, e)
                        }
                        ))
                    }
                    var is = $r((function(e, t) {
                        return Gs(e) ? lr(e, t) : []
                    }
                    ))
                      , as = $r((function(e) {
                        return di(Rt(e, Gs))
                    }
                    ))
                      , ss = $r((function(e) {
                        var t = Qa(e);
                        return Gs(t) && (t = i),
                        di(Rt(e, Gs), aa(t, 2))
                    }
                    ))
                      , os = $r((function(e) {
                        var t = Qa(e);
                        return t = "function" == typeof t ? t : i,
                        di(Rt(e, Gs), i, t)
                    }
                    ))
                      , us = $r(ns)
                      , ls = $r((function(e) {
                        var t = e.length
                          , n = t > 1 ? e[t - 1] : i;
                        return n = "function" == typeof n ? (e.pop(),
                        n) : i,
                        rs(e, n)
                    }
                    ));
                    function cs(e) {
                        var t = Cn(e);
                        return t.__chain__ = !0,
                        t
                    }
                    function hs(e, t) {
                        return t(e)
                    }
                    var ds = Ji((function(e) {
                        var t = e.length
                          , n = t ? e[0] : 0
                          , r = this.__wrapped__
                          , a = function(t) {
                            return ir(t, e)
                        };
                        return !(t > 1 || this.__actions__.length) && r instanceof On && ga(n) ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                            func: hs,
                            args: [a],
                            thisArg: i
                        }),
                        new qn(r,this.__chain__).thru((function(e) {
                            return t && !e.length && e.push(i),
                            e
                        }
                        ))) : this.thru(a)
                    }
                    ))
                      , fs = Ri((function(e, t, n) {
                        Le.call(e, n) ? ++e[n] : rr(e, n, 1)
                    }
                    ))
                      , ps = Ui(qa)
                      , gs = Ui(Oa);
                    function vs(e, t) {
                        return (Os(e) ? St : cr)(e, aa(t, 3))
                    }
                    function ys(e, t) {
                        return (Os(e) ? At : hr)(e, aa(t, 3))
                    }
                    var ws = Ri((function(e, t, n) {
                        Le.call(e, n) ? e[n].push(t) : rr(e, n, [t])
                    }
                    ))
                      , _s = $r((function(e, t, n) {
                        var i = -1
                          , a = "function" == typeof t
                          , s = Ks(e) ? r(e.length) : [];
                        return cr(e, (function(e) {
                            s[++i] = a ? It(t, e, n) : Rr(e, t, n)
                        }
                        )),
                        s
                    }
                    ))
                      , ms = Ri((function(e, t, n) {
                        rr(e, n, t)
                    }
                    ));
                    function bs(e, t) {
                        return (Os(e) ? Wt : Br)(e, aa(t, 3))
                    }
                    var ks = Ri((function(e, t, n) {
                        e[n ? 0 : 1].push(t)
                    }
                    ), (function() {
                        return [[], []]
                    }
                    ))
                      , Is = $r((function(e, t) {
                        if (null == e)
                            return [];
                        var n = t.length;
                        return n > 1 && va(e, t[0], t[1]) ? t = [] : n > 2 && va(t[0], t[1], t[2]) && (t = [t[0]]),
                        qr(e, gr(t, 1), [])
                    }
                    ))
                      , Es = lt || function() {
                        return ht.Date.now()
                    }
                    ;
                    function Ss(e, t, n) {
                        return t = n ? i : t,
                        t = e && null == t ? e.length : t,
                        Qi(e, l, i, i, i, i, t)
                    }
                    function As(e, t) {
                        var n;
                        if ("function" != typeof t)
                            throw new Te(a);
                        return e = fo(e),
                        function() {
                            return --e > 0 && (n = t.apply(this, arguments)),
                            e <= 1 && (t = i),
                            n
                        }
                    }
                    var Ts = $r((function(e, t, n) {
                        var r = 1;
                        if (n.length) {
                            var i = on(n, ia(Ts));
                            r |= u
                        }
                        return Qi(e, r, t, n, i)
                    }
                    ))
                      , Rs = $r((function(e, t, n) {
                        var r = 3;
                        if (n.length) {
                            var i = on(n, ia(Rs));
                            r |= u
                        }
                        return Qi(t, r, e, n, i)
                    }
                    ));
                    function Ds(e, t, n) {
                        var r, s, o, u, l, c, h = 0, d = !1, f = !1, p = !0;
                        if ("function" != typeof e)
                            throw new Te(a);
                        function g(t) {
                            var n = r
                              , a = s;
                            return r = s = i,
                            h = t,
                            u = e.apply(a, n)
                        }
                        function v(e) {
                            var n = e - c;
                            return c === i || n >= t || n < 0 || f && e - h >= o
                        }
                        function y() {
                            var e = Es();
                            if (v(e))
                                return w(e);
                            l = Ta(y, function(e) {
                                var n = t - (e - c);
                                return f ? yn(n, o - (e - h)) : n
                            }(e))
                        }
                        function w(e) {
                            return l = i,
                            p && r ? g(e) : (r = s = i,
                            u)
                        }
                        function _() {
                            var e = Es()
                              , n = v(e);
                            if (r = arguments,
                            s = this,
                            c = e,
                            n) {
                                if (l === i)
                                    return function(e) {
                                        return h = e,
                                        l = Ta(y, t),
                                        d ? g(e) : u
                                    }(c);
                                if (f)
                                    return _i(l),
                                    l = Ta(y, t),
                                    g(c)
                            }
                            return l === i && (l = Ta(y, t)),
                            u
                        }
                        return t = go(t) || 0,
                        Hs(n) && (d = !!n.leading,
                        o = (f = "maxWait"in n) ? vn(go(n.maxWait) || 0, t) : o,
                        p = "trailing"in n ? !!n.trailing : p),
                        _.cancel = function() {
                            l !== i && _i(l),
                            h = 0,
                            r = c = s = l = i
                        }
                        ,
                        _.flush = function() {
                            return l === i ? u : w(Es())
                        }
                        ,
                        _
                    }
                    var xs = $r((function(e, t) {
                        return ur(e, 1, t)
                    }
                    ))
                      , Ws = $r((function(e, t, n) {
                        return ur(e, go(t) || 0, n)
                    }
                    ));
                    function zs(e, t) {
                        if ("function" != typeof e || null != t && "function" != typeof t)
                            throw new Te(a);
                        var n = function() {
                            var r = arguments
                              , i = t ? t.apply(this, r) : r[0]
                              , a = n.cache;
                            if (a.has(i))
                                return a.get(i);
                            var s = e.apply(this, r);
                            return n.cache = a.set(i, s) || a,
                            s
                        };
                        return n.cache = new (zs.Cache || Gn),
                        n
                    }
                    function Ls(e) {
                        if ("function" != typeof e)
                            throw new Te(a);
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                            }
                            return !e.apply(this, t)
                        }
                    }
                    zs.Cache = Gn;
                    var Ms = yi((function(e, t) {
                        var n = (t = 1 == t.length && Os(t[0]) ? Wt(t[0], Zt(aa())) : Wt(gr(t, 1), Zt(aa()))).length;
                        return $r((function(r) {
                            for (var i = -1, a = yn(r.length, n); ++i < a; )
                                r[i] = t[i].call(this, r[i]);
                            return It(e, this, r)
                        }
                        ))
                    }
                    ))
                      , Us = $r((function(e, t) {
                        var n = on(t, ia(Us));
                        return Qi(e, u, i, t, n)
                    }
                    ))
                      , Bs = $r((function(e, t) {
                        var n = on(t, ia(Bs));
                        return Qi(e, 64, i, t, n)
                    }
                    ))
                      , Ps = Ji((function(e, t) {
                        return Qi(e, 256, i, i, i, t)
                    }
                    ));
                    function Cs(e, t) {
                        return e === t || e != e && t != t
                    }
                    var Fs = Ni(Er)
                      , js = Ni((function(e, t) {
                        return e >= t
                    }
                    ))
                      , qs = Dr(function() {
                        return arguments
                    }()) ? Dr : function(e) {
                        return Js(e) && Le.call(e, "callee") && !Ve.call(e, "callee")
                    }
                      , Os = r.isArray
                      , Ns = yt ? Zt(yt) : function(e) {
                        return Js(e) && Ir(e) == W
                    }
                    ;
                    function Ks(e) {
                        return null != e && Xs(e.length) && !Zs(e)
                    }
                    function Gs(e) {
                        return Js(e) && Ks(e)
                    }
                    var Vs = vt || gu
                      , $s = wt ? Zt(wt) : function(e) {
                        return Js(e) && Ir(e) == w
                    }
                    ;
                    function Qs(e) {
                        if (!Js(e))
                            return !1;
                        var t = Ir(e);
                        return t == _ || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !no(e)
                    }
                    function Zs(e) {
                        if (!Hs(e))
                            return !1;
                        var t = Ir(e);
                        return t == m || t == b || "[object AsyncFunction]" == t || "[object Proxy]" == t
                    }
                    function Ys(e) {
                        return "number" == typeof e && e == fo(e)
                    }
                    function Xs(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= h
                    }
                    function Hs(e) {
                        var t = typeof e;
                        return null != e && ("object" == t || "function" == t)
                    }
                    function Js(e) {
                        return null != e && "object" == typeof e
                    }
                    var eo = _t ? Zt(_t) : function(e) {
                        return Js(e) && ha(e) == k
                    }
                    ;
                    function to(e) {
                        return "number" == typeof e || Js(e) && Ir(e) == I
                    }
                    function no(e) {
                        if (!Js(e) || Ir(e) != E)
                            return !1;
                        var t = Ke(e);
                        if (null === t)
                            return !0;
                        var n = Le.call(t, "constructor") && t.constructor;
                        return "function" == typeof n && n instanceof n && ze.call(n) == Pe
                    }
                    var ro = mt ? Zt(mt) : function(e) {
                        return Js(e) && Ir(e) == A
                    }
                      , io = bt ? Zt(bt) : function(e) {
                        return Js(e) && ha(e) == T
                    }
                    ;
                    function ao(e) {
                        return "string" == typeof e || !Os(e) && Js(e) && Ir(e) == R
                    }
                    function so(e) {
                        return "symbol" == typeof e || Js(e) && Ir(e) == D
                    }
                    var oo = kt ? Zt(kt) : function(e) {
                        return Js(e) && Xs(e.length) && !!it[Ir(e)]
                    }
                      , uo = Ni(Ur)
                      , lo = Ni((function(e, t) {
                        return e <= t
                    }
                    ));
                    function co(e) {
                        if (!e)
                            return [];
                        if (Ks(e))
                            return ao(e) ? hn(e) : Ai(e);
                        if (Ze && e[Ze])
                            return function(e) {
                                for (var t, n = []; !(t = e.next()).done; )
                                    n.push(t.value);
                                return n
                            }(e[Ze]());
                        var t = ha(e);
                        return (t == k ? an : t == T ? un : Fo)(e)
                    }
                    function ho(e) {
                        return e ? (e = go(e)) === c || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                    }
                    function fo(e) {
                        var t = ho(e)
                          , n = t % 1;
                        return t == t ? n ? t - n : t : 0
                    }
                    function po(e) {
                        return e ? ar(fo(e), 0, f) : 0
                    }
                    function go(e) {
                        if ("number" == typeof e)
                            return e;
                        if (so(e))
                            return d;
                        if (Hs(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = Hs(t) ? t + "" : t
                        }
                        if ("string" != typeof e)
                            return 0 === e ? e : +e;
                        e = Qt(e);
                        var n = pe.test(e);
                        return n || ve.test(e) ? ut(e.slice(2), n ? 2 : 8) : fe.test(e) ? d : +e
                    }
                    function vo(e) {
                        return Ti(e, Wo(e))
                    }
                    function yo(e) {
                        return null == e ? "" : si(e)
                    }
                    var wo = Di((function(e, t) {
                        if (ma(t) || Ks(t))
                            Ti(t, xo(t), e);
                        else
                            for (var n in t)
                                Le.call(t, n) && Jn(e, n, t[n])
                    }
                    ))
                      , _o = Di((function(e, t) {
                        Ti(t, Wo(t), e)
                    }
                    ))
                      , mo = Di((function(e, t, n, r) {
                        Ti(t, Wo(t), e, r)
                    }
                    ))
                      , bo = Di((function(e, t, n, r) {
                        Ti(t, xo(t), e, r)
                    }
                    ))
                      , ko = Ji(ir)
                      , Io = $r((function(e, t) {
                        e = Ee(e);
                        var n = -1
                          , r = t.length
                          , a = r > 2 ? t[2] : i;
                        for (a && va(t[0], t[1], a) && (r = 1); ++n < r; )
                            for (var s = t[n], o = Wo(s), u = -1, l = o.length; ++u < l; ) {
                                var c = o[u]
                                  , h = e[c];
                                (h === i || Cs(h, xe[c]) && !Le.call(e, c)) && (e[c] = s[c])
                            }
                        return e
                    }
                    ))
                      , Eo = $r((function(e) {
                        return e.push(i, Yi),
                        It(Lo, i, e)
                    }
                    ));
                    function So(e, t, n) {
                        var r = null == e ? i : br(e, t);
                        return r === i ? n : r
                    }
                    function Ao(e, t) {
                        return null != e && da(e, t, Ar)
                    }
                    var To = Ci((function(e, t, n) {
                        null != t && "function" != typeof t.toString && (t = Be.call(t)),
                        e[t] = n
                    }
                    ), Jo(nu))
                      , Ro = Ci((function(e, t, n) {
                        null != t && "function" != typeof t.toString && (t = Be.call(t)),
                        Le.call(e, t) ? e[t].push(n) : e[t] = [n]
                    }
                    ), aa)
                      , Do = $r(Rr);
                    function xo(e) {
                        return Ks(e) ? Qn(e) : Mr(e)
                    }
                    function Wo(e) {
                        return Ks(e) ? Qn(e, !0) : function(e) {
                            if (!Hs(e))
                                return function(e) {
                                    var t = [];
                                    if (null != e)
                                        for (var n in Ee(e))
                                            t.push(n);
                                    return t
                                }(e);
                            var t = ma(e)
                              , n = [];
                            for (var r in e)
                                ("constructor" != r || !t && Le.call(e, r)) && n.push(r);
                            return n
                        }(e)
                    }
                    var zo = Di((function(e, t, n) {
                        Fr(e, t, n)
                    }
                    ))
                      , Lo = Di((function(e, t, n, r) {
                        Fr(e, t, n, r)
                    }
                    ))
                      , Mo = Ji((function(e, t) {
                        var n = {};
                        if (null == e)
                            return n;
                        var r = !1;
                        t = Wt(t, (function(t) {
                            return t = vi(t, e),
                            r || (r = t.length > 1),
                            t
                        }
                        )),
                        Ti(e, ta(e), n),
                        r && (n = sr(n, 7, Xi));
                        for (var i = t.length; i--; )
                            ui(n, t[i]);
                        return n
                    }
                    ))
                      , Uo = Ji((function(e, t) {
                        return null == e ? {} : function(e, t) {
                            return Or(e, t, (function(t, n) {
                                return Ao(e, n)
                            }
                            ))
                        }(e, t)
                    }
                    ));
                    function Bo(e, t) {
                        if (null == e)
                            return {};
                        var n = Wt(ta(e), (function(e) {
                            return [e]
                        }
                        ));
                        return t = aa(t),
                        Or(e, n, (function(e, n) {
                            return t(e, n[0])
                        }
                        ))
                    }
                    var Po = $i(xo)
                      , Co = $i(Wo);
                    function Fo(e) {
                        return null == e ? [] : Yt(e, xo(e))
                    }
                    var jo = Li((function(e, t, n) {
                        return t = t.toLowerCase(),
                        e + (n ? qo(t) : t)
                    }
                    ));
                    function qo(e) {
                        return Zo(yo(e).toLowerCase())
                    }
                    function Oo(e) {
                        return (e = yo(e)) && e.replace(we, en).replace(Xe, "")
                    }
                    var No = Li((function(e, t, n) {
                        return e + (n ? "-" : "") + t.toLowerCase()
                    }
                    ))
                      , Ko = Li((function(e, t, n) {
                        return e + (n ? " " : "") + t.toLowerCase()
                    }
                    ))
                      , Go = zi("toLowerCase")
                      , Vo = Li((function(e, t, n) {
                        return e + (n ? "_" : "") + t.toLowerCase()
                    }
                    ))
                      , $o = Li((function(e, t, n) {
                        return e + (n ? " " : "") + Zo(t)
                    }
                    ))
                      , Qo = Li((function(e, t, n) {
                        return e + (n ? " " : "") + t.toUpperCase()
                    }
                    ))
                      , Zo = zi("toUpperCase");
                    function Yo(e, t, n) {
                        return e = yo(e),
                        (t = n ? i : t) === i ? function(e) {
                            return tt.test(e)
                        }(e) ? function(e) {
                            return e.match(Je) || []
                        }(e) : function(e) {
                            return e.match(ue) || []
                        }(e) : e.match(t) || []
                    }
                    var Xo = $r((function(e, t) {
                        try {
                            return It(e, i, t)
                        } catch (e) {
                            return Qs(e) ? e : new be(e)
                        }
                    }
                    ))
                      , Ho = Ji((function(e, t) {
                        return St(t, (function(t) {
                            t = Ua(t),
                            rr(e, t, Ts(e[t], e))
                        }
                        )),
                        e
                    }
                    ));
                    function Jo(e) {
                        return function() {
                            return e
                        }
                    }
                    var eu = Bi()
                      , tu = Bi(!0);
                    function nu(e) {
                        return e
                    }
                    function ru(e) {
                        return Lr("function" == typeof e ? e : sr(e, 1))
                    }
                    var iu = $r((function(e, t) {
                        return function(n) {
                            return Rr(n, e, t)
                        }
                    }
                    ))
                      , au = $r((function(e, t) {
                        return function(n) {
                            return Rr(e, n, t)
                        }
                    }
                    ));
                    function su(e, t, n) {
                        var r = xo(t)
                          , i = mr(t, r);
                        null != n || Hs(t) && (i.length || !r.length) || (n = t,
                        t = e,
                        e = this,
                        i = mr(t, xo(t)));
                        var a = !(Hs(n) && "chain"in n && !n.chain)
                          , s = Zs(e);
                        return St(i, (function(n) {
                            var r = t[n];
                            e[n] = r,
                            s && (e.prototype[n] = function() {
                                var t = this.__chain__;
                                if (a || t) {
                                    var n = e(this.__wrapped__);
                                    return (n.__actions__ = Ai(this.__actions__)).push({
                                        func: r,
                                        args: arguments,
                                        thisArg: e
                                    }),
                                    n.__chain__ = t,
                                    n
                                }
                                return r.apply(e, zt([this.value()], arguments))
                            }
                            )
                        }
                        )),
                        e
                    }
                    function ou() {}
                    var uu = ji(Wt)
                      , lu = ji(Tt)
                      , cu = ji(Ut);
                    function hu(e) {
                        return ya(e) ? Nt(Ua(e)) : function(e) {
                            return function(t) {
                                return br(t, e)
                            }
                        }(e)
                    }
                    var du = Oi()
                      , fu = Oi(!0);
                    function pu() {
                        return []
                    }
                    function gu() {
                        return !1
                    }
                    var vu, yu = Fi((function(e, t) {
                        return e + t
                    }
                    ), 0), wu = Gi("ceil"), _u = Fi((function(e, t) {
                        return e / t
                    }
                    ), 1), mu = Gi("floor"), bu = Fi((function(e, t) {
                        return e * t
                    }
                    ), 1), ku = Gi("round"), Iu = Fi((function(e, t) {
                        return e - t
                    }
                    ), 0);
                    return Cn.after = function(e, t) {
                        if ("function" != typeof t)
                            throw new Te(a);
                        return e = fo(e),
                        function() {
                            if (--e < 1)
                                return t.apply(this, arguments)
                        }
                    }
                    ,
                    Cn.ary = Ss,
                    Cn.assign = wo,
                    Cn.assignIn = _o,
                    Cn.assignInWith = mo,
                    Cn.assignWith = bo,
                    Cn.at = ko,
                    Cn.before = As,
                    Cn.bind = Ts,
                    Cn.bindAll = Ho,
                    Cn.bindKey = Rs,
                    Cn.castArray = function() {
                        if (!arguments.length)
                            return [];
                        var e = arguments[0];
                        return Os(e) ? e : [e]
                    }
                    ,
                    Cn.chain = cs,
                    Cn.chunk = function(e, t, n) {
                        t = (n ? va(e, t, n) : t === i) ? 1 : vn(fo(t), 0);
                        var a = null == e ? 0 : e.length;
                        if (!a || t < 1)
                            return [];
                        for (var s = 0, o = 0, u = r(dt(a / t)); s < a; )
                            u[o++] = ei(e, s, s += t);
                        return u
                    }
                    ,
                    Cn.compact = function(e) {
                        for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n; ) {
                            var a = e[t];
                            a && (i[r++] = a)
                        }
                        return i
                    }
                    ,
                    Cn.concat = function() {
                        var e = arguments.length;
                        if (!e)
                            return [];
                        for (var t = r(e - 1), n = arguments[0], i = e; i--; )
                            t[i - 1] = arguments[i];
                        return zt(Os(n) ? Ai(n) : [n], gr(t, 1))
                    }
                    ,
                    Cn.cond = function(e) {
                        var t = null == e ? 0 : e.length
                          , n = aa();
                        return e = t ? Wt(e, (function(e) {
                            if ("function" != typeof e[1])
                                throw new Te(a);
                            return [n(e[0]), e[1]]
                        }
                        )) : [],
                        $r((function(n) {
                            for (var r = -1; ++r < t; ) {
                                var i = e[r];
                                if (It(i[0], this, n))
                                    return It(i[1], this, n)
                            }
                        }
                        ))
                    }
                    ,
                    Cn.conforms = function(e) {
                        return function(e) {
                            var t = xo(e);
                            return function(n) {
                                return or(n, e, t)
                            }
                        }(sr(e, 1))
                    }
                    ,
                    Cn.constant = Jo,
                    Cn.countBy = fs,
                    Cn.create = function(e, t) {
                        var n = Fn(e);
                        return null == t ? n : nr(n, t)
                    }
                    ,
                    Cn.curry = function e(t, n, r) {
                        var a = Qi(t, 8, i, i, i, i, i, n = r ? i : n);
                        return a.placeholder = e.placeholder,
                        a
                    }
                    ,
                    Cn.curryRight = function e(t, n, r) {
                        var a = Qi(t, 16, i, i, i, i, i, n = r ? i : n);
                        return a.placeholder = e.placeholder,
                        a
                    }
                    ,
                    Cn.debounce = Ds,
                    Cn.defaults = Io,
                    Cn.defaultsDeep = Eo,
                    Cn.defer = xs,
                    Cn.delay = Ws,
                    Cn.difference = Ca,
                    Cn.differenceBy = Fa,
                    Cn.differenceWith = ja,
                    Cn.drop = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? ei(e, (t = n || t === i ? 1 : fo(t)) < 0 ? 0 : t, r) : []
                    }
                    ,
                    Cn.dropRight = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? ei(e, 0, (t = r - (t = n || t === i ? 1 : fo(t))) < 0 ? 0 : t) : []
                    }
                    ,
                    Cn.dropRightWhile = function(e, t) {
                        return e && e.length ? ci(e, aa(t, 3), !0, !0) : []
                    }
                    ,
                    Cn.dropWhile = function(e, t) {
                        return e && e.length ? ci(e, aa(t, 3), !0) : []
                    }
                    ,
                    Cn.fill = function(e, t, n, r) {
                        var a = null == e ? 0 : e.length;
                        return a ? (n && "number" != typeof n && va(e, t, n) && (n = 0,
                        r = a),
                        function(e, t, n, r) {
                            var a = e.length;
                            for ((n = fo(n)) < 0 && (n = -n > a ? 0 : a + n),
                            (r = r === i || r > a ? a : fo(r)) < 0 && (r += a),
                            r = n > r ? 0 : po(r); n < r; )
                                e[n++] = t;
                            return e
                        }(e, t, n, r)) : []
                    }
                    ,
                    Cn.filter = function(e, t) {
                        return (Os(e) ? Rt : pr)(e, aa(t, 3))
                    }
                    ,
                    Cn.flatMap = function(e, t) {
                        return gr(bs(e, t), 1)
                    }
                    ,
                    Cn.flatMapDeep = function(e, t) {
                        return gr(bs(e, t), c)
                    }
                    ,
                    Cn.flatMapDepth = function(e, t, n) {
                        return n = n === i ? 1 : fo(n),
                        gr(bs(e, t), n)
                    }
                    ,
                    Cn.flatten = Na,
                    Cn.flattenDeep = function(e) {
                        return null != e && e.length ? gr(e, c) : []
                    }
                    ,
                    Cn.flattenDepth = function(e, t) {
                        return null != e && e.length ? gr(e, t = t === i ? 1 : fo(t)) : []
                    }
                    ,
                    Cn.flip = function(e) {
                        return Qi(e, 512)
                    }
                    ,
                    Cn.flow = eu,
                    Cn.flowRight = tu,
                    Cn.fromPairs = function(e) {
                        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
                            var i = e[t];
                            r[i[0]] = i[1]
                        }
                        return r
                    }
                    ,
                    Cn.functions = function(e) {
                        return null == e ? [] : mr(e, xo(e))
                    }
                    ,
                    Cn.functionsIn = function(e) {
                        return null == e ? [] : mr(e, Wo(e))
                    }
                    ,
                    Cn.groupBy = ws,
                    Cn.initial = function(e) {
                        return null != e && e.length ? ei(e, 0, -1) : []
                    }
                    ,
                    Cn.intersection = Ga,
                    Cn.intersectionBy = Va,
                    Cn.intersectionWith = $a,
                    Cn.invert = To,
                    Cn.invertBy = Ro,
                    Cn.invokeMap = _s,
                    Cn.iteratee = ru,
                    Cn.keyBy = ms,
                    Cn.keys = xo,
                    Cn.keysIn = Wo,
                    Cn.map = bs,
                    Cn.mapKeys = function(e, t) {
                        var n = {};
                        return t = aa(t, 3),
                        wr(e, (function(e, r, i) {
                            rr(n, t(e, r, i), e)
                        }
                        )),
                        n
                    }
                    ,
                    Cn.mapValues = function(e, t) {
                        var n = {};
                        return t = aa(t, 3),
                        wr(e, (function(e, r, i) {
                            rr(n, r, t(e, r, i))
                        }
                        )),
                        n
                    }
                    ,
                    Cn.matches = function(e) {
                        return Pr(sr(e, 1))
                    }
                    ,
                    Cn.matchesProperty = function(e, t) {
                        return Cr(e, sr(t, 1))
                    }
                    ,
                    Cn.memoize = zs,
                    Cn.merge = zo,
                    Cn.mergeWith = Lo,
                    Cn.method = iu,
                    Cn.methodOf = au,
                    Cn.mixin = su,
                    Cn.negate = Ls,
                    Cn.nthArg = function(e) {
                        return e = fo(e),
                        $r((function(t) {
                            return jr(t, e)
                        }
                        ))
                    }
                    ,
                    Cn.omit = Mo,
                    Cn.omitBy = function(e, t) {
                        return Bo(e, Ls(aa(t)))
                    }
                    ,
                    Cn.once = function(e) {
                        return As(2, e)
                    }
                    ,
                    Cn.orderBy = function(e, t, n, r) {
                        return null == e ? [] : (Os(t) || (t = null == t ? [] : [t]),
                        Os(n = r ? i : n) || (n = null == n ? [] : [n]),
                        qr(e, t, n))
                    }
                    ,
                    Cn.over = uu,
                    Cn.overArgs = Ms,
                    Cn.overEvery = lu,
                    Cn.overSome = cu,
                    Cn.partial = Us,
                    Cn.partialRight = Bs,
                    Cn.partition = ks,
                    Cn.pick = Uo,
                    Cn.pickBy = Bo,
                    Cn.property = hu,
                    Cn.propertyOf = function(e) {
                        return function(t) {
                            return null == e ? i : br(e, t)
                        }
                    }
                    ,
                    Cn.pull = Za,
                    Cn.pullAll = Ya,
                    Cn.pullAllBy = function(e, t, n) {
                        return e && e.length && t && t.length ? Nr(e, t, aa(n, 2)) : e
                    }
                    ,
                    Cn.pullAllWith = function(e, t, n) {
                        return e && e.length && t && t.length ? Nr(e, t, i, n) : e
                    }
                    ,
                    Cn.pullAt = Xa,
                    Cn.range = du,
                    Cn.rangeRight = fu,
                    Cn.rearg = Ps,
                    Cn.reject = function(e, t) {
                        return (Os(e) ? Rt : pr)(e, Ls(aa(t, 3)))
                    }
                    ,
                    Cn.remove = function(e, t) {
                        var n = [];
                        if (!e || !e.length)
                            return n;
                        var r = -1
                          , i = []
                          , a = e.length;
                        for (t = aa(t, 3); ++r < a; ) {
                            var s = e[r];
                            t(s, r, e) && (n.push(s),
                            i.push(r))
                        }
                        return Kr(e, i),
                        n
                    }
                    ,
                    Cn.rest = function(e, t) {
                        if ("function" != typeof e)
                            throw new Te(a);
                        return $r(e, t = t === i ? t : fo(t))
                    }
                    ,
                    Cn.reverse = Ha,
                    Cn.sampleSize = function(e, t, n) {
                        return t = (n ? va(e, t, n) : t === i) ? 1 : fo(t),
                        (Os(e) ? Yn : Zr)(e, t)
                    }
                    ,
                    Cn.set = function(e, t, n) {
                        return null == e ? e : Yr(e, t, n)
                    }
                    ,
                    Cn.setWith = function(e, t, n, r) {
                        return r = "function" == typeof r ? r : i,
                        null == e ? e : Yr(e, t, n, r)
                    }
                    ,
                    Cn.shuffle = function(e) {
                        return (Os(e) ? Xn : Jr)(e)
                    }
                    ,
                    Cn.slice = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? (n && "number" != typeof n && va(e, t, n) ? (t = 0,
                        n = r) : (t = null == t ? 0 : fo(t),
                        n = n === i ? r : fo(n)),
                        ei(e, t, n)) : []
                    }
                    ,
                    Cn.sortBy = Is,
                    Cn.sortedUniq = function(e) {
                        return e && e.length ? ii(e) : []
                    }
                    ,
                    Cn.sortedUniqBy = function(e, t) {
                        return e && e.length ? ii(e, aa(t, 2)) : []
                    }
                    ,
                    Cn.split = function(e, t, n) {
                        return n && "number" != typeof n && va(e, t, n) && (t = n = i),
                        (n = n === i ? f : n >>> 0) ? (e = yo(e)) && ("string" == typeof t || null != t && !ro(t)) && !(t = si(t)) && rn(e) ? wi(hn(e), 0, n) : e.split(t, n) : []
                    }
                    ,
                    Cn.spread = function(e, t) {
                        if ("function" != typeof e)
                            throw new Te(a);
                        return t = null == t ? 0 : vn(fo(t), 0),
                        $r((function(n) {
                            var r = n[t]
                              , i = wi(n, 0, t);
                            return r && zt(i, r),
                            It(e, this, i)
                        }
                        ))
                    }
                    ,
                    Cn.tail = function(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? ei(e, 1, t) : []
                    }
                    ,
                    Cn.take = function(e, t, n) {
                        return e && e.length ? ei(e, 0, (t = n || t === i ? 1 : fo(t)) < 0 ? 0 : t) : []
                    }
                    ,
                    Cn.takeRight = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? ei(e, (t = r - (t = n || t === i ? 1 : fo(t))) < 0 ? 0 : t, r) : []
                    }
                    ,
                    Cn.takeRightWhile = function(e, t) {
                        return e && e.length ? ci(e, aa(t, 3), !1, !0) : []
                    }
                    ,
                    Cn.takeWhile = function(e, t) {
                        return e && e.length ? ci(e, aa(t, 3)) : []
                    }
                    ,
                    Cn.tap = function(e, t) {
                        return t(e),
                        e
                    }
                    ,
                    Cn.throttle = function(e, t, n) {
                        var r = !0
                          , i = !0;
                        if ("function" != typeof e)
                            throw new Te(a);
                        return Hs(n) && (r = "leading"in n ? !!n.leading : r,
                        i = "trailing"in n ? !!n.trailing : i),
                        Ds(e, t, {
                            leading: r,
                            maxWait: t,
                            trailing: i
                        })
                    }
                    ,
                    Cn.thru = hs,
                    Cn.toArray = co,
                    Cn.toPairs = Po,
                    Cn.toPairsIn = Co,
                    Cn.toPath = function(e) {
                        return Os(e) ? Wt(e, Ua) : so(e) ? [e] : Ai(Ma(yo(e)))
                    }
                    ,
                    Cn.toPlainObject = vo,
                    Cn.transform = function(e, t, n) {
                        var r = Os(e)
                          , i = r || Vs(e) || oo(e);
                        if (t = aa(t, 4),
                        null == n) {
                            var a = e && e.constructor;
                            n = i ? r ? new a : [] : Hs(e) && Zs(a) ? Fn(Ke(e)) : {}
                        }
                        return (i ? St : wr)(e, (function(e, r, i) {
                            return t(n, e, r, i)
                        }
                        )),
                        n
                    }
                    ,
                    Cn.unary = function(e) {
                        return Ss(e, 1)
                    }
                    ,
                    Cn.union = Ja,
                    Cn.unionBy = es,
                    Cn.unionWith = ts,
                    Cn.uniq = function(e) {
                        return e && e.length ? oi(e) : []
                    }
                    ,
                    Cn.uniqBy = function(e, t) {
                        return e && e.length ? oi(e, aa(t, 2)) : []
                    }
                    ,
                    Cn.uniqWith = function(e, t) {
                        return t = "function" == typeof t ? t : i,
                        e && e.length ? oi(e, i, t) : []
                    }
                    ,
                    Cn.unset = function(e, t) {
                        return null == e || ui(e, t)
                    }
                    ,
                    Cn.unzip = ns,
                    Cn.unzipWith = rs,
                    Cn.update = function(e, t, n) {
                        return null == e ? e : li(e, t, gi(n))
                    }
                    ,
                    Cn.updateWith = function(e, t, n, r) {
                        return r = "function" == typeof r ? r : i,
                        null == e ? e : li(e, t, gi(n), r)
                    }
                    ,
                    Cn.values = Fo,
                    Cn.valuesIn = function(e) {
                        return null == e ? [] : Yt(e, Wo(e))
                    }
                    ,
                    Cn.without = is,
                    Cn.words = Yo,
                    Cn.wrap = function(e, t) {
                        return Us(gi(t), e)
                    }
                    ,
                    Cn.xor = as,
                    Cn.xorBy = ss,
                    Cn.xorWith = os,
                    Cn.zip = us,
                    Cn.zipObject = function(e, t) {
                        return fi(e || [], t || [], Jn)
                    }
                    ,
                    Cn.zipObjectDeep = function(e, t) {
                        return fi(e || [], t || [], Yr)
                    }
                    ,
                    Cn.zipWith = ls,
                    Cn.entries = Po,
                    Cn.entriesIn = Co,
                    Cn.extend = _o,
                    Cn.extendWith = mo,
                    su(Cn, Cn),
                    Cn.add = yu,
                    Cn.attempt = Xo,
                    Cn.camelCase = jo,
                    Cn.capitalize = qo,
                    Cn.ceil = wu,
                    Cn.clamp = function(e, t, n) {
                        return n === i && (n = t,
                        t = i),
                        n !== i && (n = (n = go(n)) == n ? n : 0),
                        t !== i && (t = (t = go(t)) == t ? t : 0),
                        ar(go(e), t, n)
                    }
                    ,
                    Cn.clone = function(e) {
                        return sr(e, 4)
                    }
                    ,
                    Cn.cloneDeep = function(e) {
                        return sr(e, 5)
                    }
                    ,
                    Cn.cloneDeepWith = function(e, t) {
                        return sr(e, 5, t = "function" == typeof t ? t : i)
                    }
                    ,
                    Cn.cloneWith = function(e, t) {
                        return sr(e, 4, t = "function" == typeof t ? t : i)
                    }
                    ,
                    Cn.conformsTo = function(e, t) {
                        return null == t || or(e, t, xo(t))
                    }
                    ,
                    Cn.deburr = Oo,
                    Cn.defaultTo = function(e, t) {
                        return null == e || e != e ? t : e
                    }
                    ,
                    Cn.divide = _u,
                    Cn.endsWith = function(e, t, n) {
                        e = yo(e),
                        t = si(t);
                        var r = e.length
                          , a = n = n === i ? r : ar(fo(n), 0, r);
                        return (n -= t.length) >= 0 && e.slice(n, a) == t
                    }
                    ,
                    Cn.eq = Cs,
                    Cn.escape = function(e) {
                        return (e = yo(e)) && Q.test(e) ? e.replace(V, tn) : e
                    }
                    ,
                    Cn.escapeRegExp = function(e) {
                        return (e = yo(e)) && ne.test(e) ? e.replace(te, "\\$&") : e
                    }
                    ,
                    Cn.every = function(e, t, n) {
                        var r = Os(e) ? Tt : dr;
                        return n && va(e, t, n) && (t = i),
                        r(e, aa(t, 3))
                    }
                    ,
                    Cn.find = ps,
                    Cn.findIndex = qa,
                    Cn.findKey = function(e, t) {
                        return Pt(e, aa(t, 3), wr)
                    }
                    ,
                    Cn.findLast = gs,
                    Cn.findLastIndex = Oa,
                    Cn.findLastKey = function(e, t) {
                        return Pt(e, aa(t, 3), _r)
                    }
                    ,
                    Cn.floor = mu,
                    Cn.forEach = vs,
                    Cn.forEachRight = ys,
                    Cn.forIn = function(e, t) {
                        return null == e ? e : vr(e, aa(t, 3), Wo)
                    }
                    ,
                    Cn.forInRight = function(e, t) {
                        return null == e ? e : yr(e, aa(t, 3), Wo)
                    }
                    ,
                    Cn.forOwn = function(e, t) {
                        return e && wr(e, aa(t, 3))
                    }
                    ,
                    Cn.forOwnRight = function(e, t) {
                        return e && _r(e, aa(t, 3))
                    }
                    ,
                    Cn.get = So,
                    Cn.gt = Fs,
                    Cn.gte = js,
                    Cn.has = function(e, t) {
                        return null != e && da(e, t, Sr)
                    }
                    ,
                    Cn.hasIn = Ao,
                    Cn.head = Ka,
                    Cn.identity = nu,
                    Cn.includes = function(e, t, n, r) {
                        e = Ks(e) ? e : Fo(e),
                        n = n && !r ? fo(n) : 0;
                        var i = e.length;
                        return n < 0 && (n = vn(i + n, 0)),
                        ao(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Ft(e, t, n) > -1
                    }
                    ,
                    Cn.indexOf = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var i = null == n ? 0 : fo(n);
                        return i < 0 && (i = vn(r + i, 0)),
                        Ft(e, t, i)
                    }
                    ,
                    Cn.inRange = function(e, t, n) {
                        return t = ho(t),
                        n === i ? (n = t,
                        t = 0) : n = ho(n),
                        function(e, t, n) {
                            return e >= yn(t, n) && e < vn(t, n)
                        }(e = go(e), t, n)
                    }
                    ,
                    Cn.invoke = Do,
                    Cn.isArguments = qs,
                    Cn.isArray = Os,
                    Cn.isArrayBuffer = Ns,
                    Cn.isArrayLike = Ks,
                    Cn.isArrayLikeObject = Gs,
                    Cn.isBoolean = function(e) {
                        return !0 === e || !1 === e || Js(e) && Ir(e) == y
                    }
                    ,
                    Cn.isBuffer = Vs,
                    Cn.isDate = $s,
                    Cn.isElement = function(e) {
                        return Js(e) && 1 === e.nodeType && !no(e)
                    }
                    ,
                    Cn.isEmpty = function(e) {
                        if (null == e)
                            return !0;
                        if (Ks(e) && (Os(e) || "string" == typeof e || "function" == typeof e.splice || Vs(e) || oo(e) || qs(e)))
                            return !e.length;
                        var t = ha(e);
                        if (t == k || t == T)
                            return !e.size;
                        if (ma(e))
                            return !Mr(e).length;
                        for (var n in e)
                            if (Le.call(e, n))
                                return !1;
                        return !0
                    }
                    ,
                    Cn.isEqual = function(e, t) {
                        return xr(e, t)
                    }
                    ,
                    Cn.isEqualWith = function(e, t, n) {
                        var r = (n = "function" == typeof n ? n : i) ? n(e, t) : i;
                        return r === i ? xr(e, t, i, n) : !!r
                    }
                    ,
                    Cn.isError = Qs,
                    Cn.isFinite = function(e) {
                        return "number" == typeof e && Bt(e)
                    }
                    ,
                    Cn.isFunction = Zs,
                    Cn.isInteger = Ys,
                    Cn.isLength = Xs,
                    Cn.isMap = eo,
                    Cn.isMatch = function(e, t) {
                        return e === t || Wr(e, t, oa(t))
                    }
                    ,
                    Cn.isMatchWith = function(e, t, n) {
                        return n = "function" == typeof n ? n : i,
                        Wr(e, t, oa(t), n)
                    }
                    ,
                    Cn.isNaN = function(e) {
                        return to(e) && e != +e
                    }
                    ,
                    Cn.isNative = function(e) {
                        if (_a(e))
                            throw new be("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                        return zr(e)
                    }
                    ,
                    Cn.isNil = function(e) {
                        return null == e
                    }
                    ,
                    Cn.isNull = function(e) {
                        return null === e
                    }
                    ,
                    Cn.isNumber = to,
                    Cn.isObject = Hs,
                    Cn.isObjectLike = Js,
                    Cn.isPlainObject = no,
                    Cn.isRegExp = ro,
                    Cn.isSafeInteger = function(e) {
                        return Ys(e) && e >= -9007199254740991 && e <= h
                    }
                    ,
                    Cn.isSet = io,
                    Cn.isString = ao,
                    Cn.isSymbol = so,
                    Cn.isTypedArray = oo,
                    Cn.isUndefined = function(e) {
                        return e === i
                    }
                    ,
                    Cn.isWeakMap = function(e) {
                        return Js(e) && ha(e) == x
                    }
                    ,
                    Cn.isWeakSet = function(e) {
                        return Js(e) && "[object WeakSet]" == Ir(e)
                    }
                    ,
                    Cn.join = function(e, t) {
                        return null == e ? "" : Kt.call(e, t)
                    }
                    ,
                    Cn.kebabCase = No,
                    Cn.last = Qa,
                    Cn.lastIndexOf = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var a = r;
                        return n !== i && (a = (a = fo(n)) < 0 ? vn(r + a, 0) : yn(a, r - 1)),
                        t == t ? function(e, t, n) {
                            for (var r = n + 1; r--; )
                                if (e[r] === t)
                                    return r;
                            return r
                        }(e, t, a) : Ct(e, qt, a, !0)
                    }
                    ,
                    Cn.lowerCase = Ko,
                    Cn.lowerFirst = Go,
                    Cn.lt = uo,
                    Cn.lte = lo,
                    Cn.max = function(e) {
                        return e && e.length ? fr(e, nu, Er) : i
                    }
                    ,
                    Cn.maxBy = function(e, t) {
                        return e && e.length ? fr(e, aa(t, 2), Er) : i
                    }
                    ,
                    Cn.mean = function(e) {
                        return Ot(e, nu)
                    }
                    ,
                    Cn.meanBy = function(e, t) {
                        return Ot(e, aa(t, 2))
                    }
                    ,
                    Cn.min = function(e) {
                        return e && e.length ? fr(e, nu, Ur) : i
                    }
                    ,
                    Cn.minBy = function(e, t) {
                        return e && e.length ? fr(e, aa(t, 2), Ur) : i
                    }
                    ,
                    Cn.stubArray = pu,
                    Cn.stubFalse = gu,
                    Cn.stubObject = function() {
                        return {}
                    }
                    ,
                    Cn.stubString = function() {
                        return ""
                    }
                    ,
                    Cn.stubTrue = function() {
                        return !0
                    }
                    ,
                    Cn.multiply = bu,
                    Cn.nth = function(e, t) {
                        return e && e.length ? jr(e, fo(t)) : i
                    }
                    ,
                    Cn.noConflict = function() {
                        return ht._ === this && (ht._ = Ce),
                        this
                    }
                    ,
                    Cn.noop = ou,
                    Cn.now = Es,
                    Cn.pad = function(e, t, n) {
                        e = yo(e);
                        var r = (t = fo(t)) ? cn(e) : 0;
                        if (!t || r >= t)
                            return e;
                        var i = (t - r) / 2;
                        return qi(ft(i), n) + e + qi(dt(i), n)
                    }
                    ,
                    Cn.padEnd = function(e, t, n) {
                        e = yo(e);
                        var r = (t = fo(t)) ? cn(e) : 0;
                        return t && r < t ? e + qi(t - r, n) : e
                    }
                    ,
                    Cn.padStart = function(e, t, n) {
                        e = yo(e);
                        var r = (t = fo(t)) ? cn(e) : 0;
                        return t && r < t ? qi(t - r, n) + e : e
                    }
                    ,
                    Cn.parseInt = function(e, t, n) {
                        return n || null == t ? t = 0 : t && (t = +t),
                        _n(yo(e).replace(re, ""), t || 0)
                    }
                    ,
                    Cn.random = function(e, t, n) {
                        if (n && "boolean" != typeof n && va(e, t, n) && (t = n = i),
                        n === i && ("boolean" == typeof t ? (n = t,
                        t = i) : "boolean" == typeof e && (n = e,
                        e = i)),
                        e === i && t === i ? (e = 0,
                        t = 1) : (e = ho(e),
                        t === i ? (t = e,
                        e = 0) : t = ho(t)),
                        e > t) {
                            var r = e;
                            e = t,
                            t = r
                        }
                        if (n || e % 1 || t % 1) {
                            var a = mn();
                            return yn(e + a * (t - e + ot("1e-" + ((a + "").length - 1))), t)
                        }
                        return Gr(e, t)
                    }
                    ,
                    Cn.reduce = function(e, t, n) {
                        var r = Os(e) ? Lt : Gt
                          , i = arguments.length < 3;
                        return r(e, aa(t, 4), n, i, cr)
                    }
                    ,
                    Cn.reduceRight = function(e, t, n) {
                        var r = Os(e) ? Mt : Gt
                          , i = arguments.length < 3;
                        return r(e, aa(t, 4), n, i, hr)
                    }
                    ,
                    Cn.repeat = function(e, t, n) {
                        return t = (n ? va(e, t, n) : t === i) ? 1 : fo(t),
                        Vr(yo(e), t)
                    }
                    ,
                    Cn.replace = function() {
                        var e = arguments
                          , t = yo(e[0]);
                        return e.length < 3 ? t : t.replace(e[1], e[2])
                    }
                    ,
                    Cn.result = function(e, t, n) {
                        var r = -1
                          , a = (t = vi(t, e)).length;
                        for (a || (a = 1,
                        e = i); ++r < a; ) {
                            var s = null == e ? i : e[Ua(t[r])];
                            s === i && (r = a,
                            s = n),
                            e = Zs(s) ? s.call(e) : s
                        }
                        return e
                    }
                    ,
                    Cn.round = ku,
                    Cn.runInContext = e,
                    Cn.sample = function(e) {
                        return (Os(e) ? Zn : Qr)(e)
                    }
                    ,
                    Cn.size = function(e) {
                        if (null == e)
                            return 0;
                        if (Ks(e))
                            return ao(e) ? cn(e) : e.length;
                        var t = ha(e);
                        return t == k || t == T ? e.size : Mr(e).length
                    }
                    ,
                    Cn.snakeCase = Vo,
                    Cn.some = function(e, t, n) {
                        var r = Os(e) ? Ut : ti;
                        return n && va(e, t, n) && (t = i),
                        r(e, aa(t, 3))
                    }
                    ,
                    Cn.sortedIndex = function(e, t) {
                        return ni(e, t)
                    }
                    ,
                    Cn.sortedIndexBy = function(e, t, n) {
                        return ri(e, t, aa(n, 2))
                    }
                    ,
                    Cn.sortedIndexOf = function(e, t) {
                        var n = null == e ? 0 : e.length;
                        if (n) {
                            var r = ni(e, t);
                            if (r < n && Cs(e[r], t))
                                return r
                        }
                        return -1
                    }
                    ,
                    Cn.sortedLastIndex = function(e, t) {
                        return ni(e, t, !0)
                    }
                    ,
                    Cn.sortedLastIndexBy = function(e, t, n) {
                        return ri(e, t, aa(n, 2), !0)
                    }
                    ,
                    Cn.sortedLastIndexOf = function(e, t) {
                        if (null != e && e.length) {
                            var n = ni(e, t, !0) - 1;
                            if (Cs(e[n], t))
                                return n
                        }
                        return -1
                    }
                    ,
                    Cn.startCase = $o,
                    Cn.startsWith = function(e, t, n) {
                        return e = yo(e),
                        n = null == n ? 0 : ar(fo(n), 0, e.length),
                        t = si(t),
                        e.slice(n, n + t.length) == t
                    }
                    ,
                    Cn.subtract = Iu,
                    Cn.sum = function(e) {
                        return e && e.length ? Vt(e, nu) : 0
                    }
                    ,
                    Cn.sumBy = function(e, t) {
                        return e && e.length ? Vt(e, aa(t, 2)) : 0
                    }
                    ,
                    Cn.template = function(e, t, n) {
                        var r = Cn.templateSettings;
                        n && va(e, t, n) && (t = i),
                        e = yo(e),
                        t = mo({}, t, r, Zi);
                        var a, s, o = mo({}, t.imports, r.imports, Zi), u = xo(o), l = Yt(o, u), c = 0, h = t.interpolate || _e, d = "__p += '", f = Se((t.escape || _e).source + "|" + h.source + "|" + (h === X ? he : _e).source + "|" + (t.evaluate || _e).source + "|$", "g"), p = "//# sourceURL=" + (Le.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++rt + "]") + "\n";
                        e.replace(f, (function(t, n, r, i, o, u) {
                            return r || (r = i),
                            d += e.slice(c, u).replace(me, nn),
                            n && (a = !0,
                            d += "' +\n__e(" + n + ") +\n'"),
                            o && (s = !0,
                            d += "';\n" + o + ";\n__p += '"),
                            r && (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                            c = u + t.length,
                            t
                        }
                        )),
                        d += "';\n";
                        var g = Le.call(t, "variable") && t.variable;
                        if (g) {
                            if (le.test(g))
                                throw new be("Invalid `variable` option passed into `_.template`")
                        } else
                            d = "with (obj) {\n" + d + "\n}\n";
                        d = (s ? d.replace(O, "") : d).replace(N, "$1").replace(K, "$1;"),
                        d = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                        var v = Xo((function() {
                            return ke(u, p + "return " + d).apply(i, l)
                        }
                        ));
                        if (v.source = d,
                        Qs(v))
                            throw v;
                        return v
                    }
                    ,
                    Cn.times = function(e, t) {
                        if ((e = fo(e)) < 1 || e > h)
                            return [];
                        var n = f
                          , r = yn(e, f);
                        t = aa(t),
                        e -= f;
                        for (var i = $t(r, t); ++n < e; )
                            t(n);
                        return i
                    }
                    ,
                    Cn.toFinite = ho,
                    Cn.toInteger = fo,
                    Cn.toLength = po,
                    Cn.toLower = function(e) {
                        return yo(e).toLowerCase()
                    }
                    ,
                    Cn.toNumber = go,
                    Cn.toSafeInteger = function(e) {
                        return e ? ar(fo(e), -9007199254740991, h) : 0 === e ? e : 0
                    }
                    ,
                    Cn.toString = yo,
                    Cn.toUpper = function(e) {
                        return yo(e).toUpperCase()
                    }
                    ,
                    Cn.trim = function(e, t, n) {
                        if ((e = yo(e)) && (n || t === i))
                            return Qt(e);
                        if (!e || !(t = si(t)))
                            return e;
                        var r = hn(e)
                          , a = hn(t);
                        return wi(r, Ht(r, a), Jt(r, a) + 1).join("")
                    }
                    ,
                    Cn.trimEnd = function(e, t, n) {
                        if ((e = yo(e)) && (n || t === i))
                            return e.slice(0, dn(e) + 1);
                        if (!e || !(t = si(t)))
                            return e;
                        var r = hn(e);
                        return wi(r, 0, Jt(r, hn(t)) + 1).join("")
                    }
                    ,
                    Cn.trimStart = function(e, t, n) {
                        if ((e = yo(e)) && (n || t === i))
                            return e.replace(re, "");
                        if (!e || !(t = si(t)))
                            return e;
                        var r = hn(e);
                        return wi(r, Ht(r, hn(t))).join("")
                    }
                    ,
                    Cn.truncate = function(e, t) {
                        var n = 30
                          , r = "...";
                        if (Hs(t)) {
                            var a = "separator"in t ? t.separator : a;
                            n = "length"in t ? fo(t.length) : n,
                            r = "omission"in t ? si(t.omission) : r
                        }
                        var s = (e = yo(e)).length;
                        if (rn(e)) {
                            var o = hn(e);
                            s = o.length
                        }
                        if (n >= s)
                            return e;
                        var u = n - cn(r);
                        if (u < 1)
                            return r;
                        var l = o ? wi(o, 0, u).join("") : e.slice(0, u);
                        if (a === i)
                            return l + r;
                        if (o && (u += l.length - u),
                        ro(a)) {
                            if (e.slice(u).search(a)) {
                                var c, h = l;
                                for (a.global || (a = Se(a.source, yo(de.exec(a)) + "g")),
                                a.lastIndex = 0; c = a.exec(h); )
                                    var d = c.index;
                                l = l.slice(0, d === i ? u : d)
                            }
                        } else if (e.indexOf(si(a), u) != u) {
                            var f = l.lastIndexOf(a);
                            f > -1 && (l = l.slice(0, f))
                        }
                        return l + r
                    }
                    ,
                    Cn.unescape = function(e) {
                        return (e = yo(e)) && $.test(e) ? e.replace(G, fn) : e
                    }
                    ,
                    Cn.uniqueId = function(e) {
                        var t = ++Me;
                        return yo(e) + t
                    }
                    ,
                    Cn.upperCase = Qo,
                    Cn.upperFirst = Zo,
                    Cn.each = vs,
                    Cn.eachRight = ys,
                    Cn.first = Ka,
                    su(Cn, (vu = {},
                    wr(Cn, (function(e, t) {
                        Le.call(Cn.prototype, t) || (vu[t] = e)
                    }
                    )),
                    vu), {
                        chain: !1
                    }),
                    Cn.VERSION = "4.17.21",
                    St(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                        Cn[e].placeholder = Cn
                    }
                    )),
                    St(["drop", "take"], (function(e, t) {
                        On.prototype[e] = function(n) {
                            n = n === i ? 1 : vn(fo(n), 0);
                            var r = this.__filtered__ && !t ? new On(this) : this.clone();
                            return r.__filtered__ ? r.__takeCount__ = yn(n, r.__takeCount__) : r.__views__.push({
                                size: yn(n, f),
                                type: e + (r.__dir__ < 0 ? "Right" : "")
                            }),
                            r
                        }
                        ,
                        On.prototype[e + "Right"] = function(t) {
                            return this.reverse()[e](t).reverse()
                        }
                    }
                    )),
                    St(["filter", "map", "takeWhile"], (function(e, t) {
                        var n = t + 1
                          , r = 1 == n || 3 == n;
                        On.prototype[e] = function(e) {
                            var t = this.clone();
                            return t.__iteratees__.push({
                                iteratee: aa(e, 3),
                                type: n
                            }),
                            t.__filtered__ = t.__filtered__ || r,
                            t
                        }
                    }
                    )),
                    St(["head", "last"], (function(e, t) {
                        var n = "take" + (t ? "Right" : "");
                        On.prototype[e] = function() {
                            return this[n](1).value()[0]
                        }
                    }
                    )),
                    St(["initial", "tail"], (function(e, t) {
                        var n = "drop" + (t ? "" : "Right");
                        On.prototype[e] = function() {
                            return this.__filtered__ ? new On(this) : this[n](1)
                        }
                    }
                    )),
                    On.prototype.compact = function() {
                        return this.filter(nu)
                    }
                    ,
                    On.prototype.find = function(e) {
                        return this.filter(e).head()
                    }
                    ,
                    On.prototype.findLast = function(e) {
                        return this.reverse().find(e)
                    }
                    ,
                    On.prototype.invokeMap = $r((function(e, t) {
                        return "function" == typeof e ? new On(this) : this.map((function(n) {
                            return Rr(n, e, t)
                        }
                        ))
                    }
                    )),
                    On.prototype.reject = function(e) {
                        return this.filter(Ls(aa(e)))
                    }
                    ,
                    On.prototype.slice = function(e, t) {
                        e = fo(e);
                        var n = this;
                        return n.__filtered__ && (e > 0 || t < 0) ? new On(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)),
                        t !== i && (n = (t = fo(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                        n)
                    }
                    ,
                    On.prototype.takeRightWhile = function(e) {
                        return this.reverse().takeWhile(e).reverse()
                    }
                    ,
                    On.prototype.toArray = function() {
                        return this.take(f)
                    }
                    ,
                    wr(On.prototype, (function(e, t) {
                        var n = /^(?:filter|find|map|reject)|While$/.test(t)
                          , r = /^(?:head|last)$/.test(t)
                          , a = Cn[r ? "take" + ("last" == t ? "Right" : "") : t]
                          , s = r || /^find/.test(t);
                        a && (Cn.prototype[t] = function() {
                            var t = this.__wrapped__
                              , o = r ? [1] : arguments
                              , u = t instanceof On
                              , l = o[0]
                              , c = u || Os(t)
                              , h = function(e) {
                                var t = a.apply(Cn, zt([e], o));
                                return r && d ? t[0] : t
                            };
                            c && n && "function" == typeof l && 1 != l.length && (u = c = !1);
                            var d = this.__chain__
                              , f = !!this.__actions__.length
                              , p = s && !d
                              , g = u && !f;
                            if (!s && c) {
                                t = g ? t : new On(this);
                                var v = e.apply(t, o);
                                return v.__actions__.push({
                                    func: hs,
                                    args: [h],
                                    thisArg: i
                                }),
                                new qn(v,d)
                            }
                            return p && g ? e.apply(this, o) : (v = this.thru(h),
                            p ? r ? v.value()[0] : v.value() : v)
                        }
                        )
                    }
                    )),
                    St(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                        var t = Re[e]
                          , n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                          , r = /^(?:pop|shift)$/.test(e);
                        Cn.prototype[e] = function() {
                            var e = arguments;
                            if (r && !this.__chain__) {
                                var i = this.value();
                                return t.apply(Os(i) ? i : [], e)
                            }
                            return this[n]((function(n) {
                                return t.apply(Os(n) ? n : [], e)
                            }
                            ))
                        }
                    }
                    )),
                    wr(On.prototype, (function(e, t) {
                        var n = Cn[t];
                        if (n) {
                            var r = n.name + "";
                            Le.call(Dn, r) || (Dn[r] = []),
                            Dn[r].push({
                                name: t,
                                func: n
                            })
                        }
                    }
                    )),
                    Dn[Pi(i, 2).name] = [{
                        name: "wrapper",
                        func: i
                    }],
                    On.prototype.clone = function() {
                        var e = new On(this.__wrapped__);
                        return e.__actions__ = Ai(this.__actions__),
                        e.__dir__ = this.__dir__,
                        e.__filtered__ = this.__filtered__,
                        e.__iteratees__ = Ai(this.__iteratees__),
                        e.__takeCount__ = this.__takeCount__,
                        e.__views__ = Ai(this.__views__),
                        e
                    }
                    ,
                    On.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var e = new On(this);
                            e.__dir__ = -1,
                            e.__filtered__ = !0
                        } else
                            (e = this.clone()).__dir__ *= -1;
                        return e
                    }
                    ,
                    On.prototype.value = function() {
                        var e = this.__wrapped__.value()
                          , t = this.__dir__
                          , n = Os(e)
                          , r = t < 0
                          , i = n ? e.length : 0
                          , a = function(e, t, n) {
                            for (var r = -1, i = n.length; ++r < i; ) {
                                var a = n[r]
                                  , s = a.size;
                                switch (a.type) {
                                case "drop":
                                    e += s;
                                    break;
                                case "dropRight":
                                    t -= s;
                                    break;
                                case "take":
                                    t = yn(t, e + s);
                                    break;
                                case "takeRight":
                                    e = vn(e, t - s)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }(0, i, this.__views__)
                          , s = a.start
                          , o = a.end
                          , u = o - s
                          , l = r ? o : s - 1
                          , c = this.__iteratees__
                          , h = c.length
                          , d = 0
                          , f = yn(u, this.__takeCount__);
                        if (!n || !r && i == u && f == u)
                            return hi(e, this.__actions__);
                        var p = [];
                        e: for (; u-- && d < f; ) {
                            for (var g = -1, v = e[l += t]; ++g < h; ) {
                                var y = c[g]
                                  , w = y.iteratee
                                  , _ = y.type
                                  , m = w(v);
                                if (2 == _)
                                    v = m;
                                else if (!m) {
                                    if (1 == _)
                                        continue e;
                                    break e
                                }
                            }
                            p[d++] = v
                        }
                        return p
                    }
                    ,
                    Cn.prototype.at = ds,
                    Cn.prototype.chain = function() {
                        return cs(this)
                    }
                    ,
                    Cn.prototype.commit = function() {
                        return new qn(this.value(),this.__chain__)
                    }
                    ,
                    Cn.prototype.next = function() {
                        this.__values__ === i && (this.__values__ = co(this.value()));
                        var e = this.__index__ >= this.__values__.length;
                        return {
                            done: e,
                            value: e ? i : this.__values__[this.__index__++]
                        }
                    }
                    ,
                    Cn.prototype.plant = function(e) {
                        for (var t, n = this; n instanceof jn; ) {
                            var r = Pa(n);
                            r.__index__ = 0,
                            r.__values__ = i,
                            t ? a.__wrapped__ = r : t = r;
                            var a = r;
                            n = n.__wrapped__
                        }
                        return a.__wrapped__ = e,
                        t
                    }
                    ,
                    Cn.prototype.reverse = function() {
                        var e = this.__wrapped__;
                        if (e instanceof On) {
                            var t = e;
                            return this.__actions__.length && (t = new On(this)),
                            (t = t.reverse()).__actions__.push({
                                func: hs,
                                args: [Ha],
                                thisArg: i
                            }),
                            new qn(t,this.__chain__)
                        }
                        return this.thru(Ha)
                    }
                    ,
                    Cn.prototype.toJSON = Cn.prototype.valueOf = Cn.prototype.value = function() {
                        return hi(this.__wrapped__, this.__actions__)
                    }
                    ,
                    Cn.prototype.first = Cn.prototype.head,
                    Ze && (Cn.prototype[Ze] = function() {
                        return this
                    }
                    ),
                    Cn
                }();
                ht._ = pn,
                (r = function() {
                    return pn
                }
                .call(t, n, t, e)) === i || (e.exports = r)
            }
            .call(this)
        },
        236: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(823)
              , a = r(n(767))
              , s = {
                adFinished: () => {}
                ,
                adError: () => {}
                ,
                adStarted: () => {}
            };
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.adCallbacks = s,
                    this.requestInProgress = !1,
                    this.adblockDetectionResolvers = [],
                    this.logger = new a.default("ad"),
                    this.adblockDetectionTimeout = window.setTimeout(( () => {
                        this.logger.log("Adblock timeout executed since there wasn't an adblock event in 5000ms"),
                        this.setAdblockDetectionResult(!1)
                    }
                    ), 5e3)
                }
                async requestAd(e, t) {
                    if (this.logger.log(`Requesting ${e} ad`),
                    await this.sdk.ensureInit(),
                    this.adCallbacks = {
                        adFinished: (null == t ? void 0 : t.adFinished) || s.adFinished,
                        adError: (null == t ? void 0 : t.adError) || (null == t ? void 0 : t.adFinished) || s.adFinished,
                        adStarted: (null == t ? void 0 : t.adStarted) || s.adStarted
                    },
                    this.requestInProgress) {
                        this.logger.log("Ad already requested");
                        const e = "An ad request is already in progress";
                        return (0,
                        i.wrapUserFn)(this.adCallbacks.adError)(e, {
                            reason: "other",
                            message: e
                        })
                    }
                    this.requestInProgress = !0,
                    this.sdk.postMessage("requestAd", {
                        adType: e
                    })
                }
                hasAdblock(e) {
                    return (0,
                    i.callbackWrapper)(( () => void 0 !== this.adblockDetectionResult ? Promise.resolve(this.adblockDetectionResult) : (this.sdk.postMessage("hasAdblock", {}),
                    this.logger.log("Requesting adblock status"),
                    new Promise((e => {
                        this.adblockDetectionResolvers.push(e)
                    }
                    )))), e)
                }
                handleEvent(e) {
                    const t = e.data;
                    switch (t.type) {
                    case "adblockDetectionExecuted":
                        return this.handleAdBlockDetectionExecutedEvent(t);
                    case "adError":
                        return this.requestInProgress = !1,
                        (0,
                        i.wrapUserFn)(this.adCallbacks.adError)(t.error, t.errorData);
                    case "adFinished":
                        return this.requestInProgress = !1,
                        (0,
                        i.wrapUserFn)(this.adCallbacks.adFinished)();
                    case "adStarted":
                        return (0,
                        i.wrapUserFn)(this.adCallbacks.adStarted)()
                    }
                }
                handleAdBlockDetectionExecutedEvent(e) {
                    const {hasAdblock: t} = e
                      , n = !!t;
                    if (void 0 !== this.adblockDetectionResult)
                        return this.logger.log(`Received update for adblock state: (${n}).`),
                        void (this.adblockDetectionResult = n);
                    this.setAdblockDetectionResult(n),
                    clearTimeout(this.adblockDetectionTimeout)
                }
                setAdblockDetectionResult(e) {
                    this.adblockDetectionResult = e,
                    this.adblockDetectionResolvers.forEach((t => t(e))),
                    this.adblockDetectionResolvers = []
                }
            }
        },
        683: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(81)
              , a = n(823)
              , s = n(414)
              , o = n(314)
              , u = r(n(767));
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.disableBannerCheck = !1,
                    this.useTestAds = !1,
                    this.bannerQueue = {},
                    this.overlayBanners = {},
                    this.renderedBannerIds = new Set,
                    this.logger = new u.default("banner")
                }
                requestBanner(e, t) {
                    return (0,
                    a.callbackWrapper)((async () => {
                        this.logger.log("Requesting banner", e),
                        await this.sdk.ensureInit(!0);
                        const t = await (0,
                        i.getBannerContainer)(e.id, !this.disableBannerCheck);
                        this.logger.verbose("Requesting banner from GF", e);
                        const n = {
                            ...e,
                            id: t.innerContainerId
                        };
                        return this.renderedBannerIds.add(e.id),
                        new Promise(( (e, t) => {
                            this.bannerQueue[n.id] = {
                                banner: n,
                                resolve: e,
                                reject: t
                            },
                            this.sdk.postMessage("requestBanner", [{
                                containerId: n.id,
                                size: (0,
                                i.getBannerSizeAsText)(n)
                            }])
                        }
                        ))
                    }
                    ), t)
                }
                requestResponsiveBanner(e, t) {
                    return (0,
                    a.callbackWrapper)((async () => {
                        this.logger.log(`Requesting responsive banner for container #${e}`),
                        await this.sdk.ensureInit(!0);
                        const t = await (0,
                        i.getBannerContainer)(e, !this.disableBannerCheck)
                          , {width: n, height: r} = t.containerInfo.size
                          , a = {
                            id: t.innerContainerId,
                            width: n,
                            height: r,
                            isResponsive: !0
                        };
                        return this.renderedBannerIds.add(e),
                        this.logger.log("Requesting responsive banner from gameframe", a),
                        new Promise(( (e, t) => {
                            this.bannerQueue[a.id] = {
                                banner: a,
                                resolve: e,
                                reject: t
                            },
                            this.sdk.postMessage("requestResponsiveBanner", [{
                                id: a.id,
                                width: n,
                                height: r
                            }])
                        }
                        ))
                    }
                    ), t)
                }
                requestOverlayBanners(e, t) {
                    const n = e.map((e => e.id));
                    Object.keys(this.overlayBanners).forEach((e => {
                        n.includes(e) || (this.logger.log("Remove overlay banner " + e),
                        this.overlayBanners[e].destroy(),
                        delete this.overlayBanners[e])
                    }
                    )),
                    e.forEach((e => {
                        if (this.overlayBanners[e.id])
                            return void this.logger.log("Skip overlay banner update " + e.id);
                        this.logger.log("Create overlay banner " + e.id);
                        const n = new s.OverlayBanner(e,this.disableBannerCheck,this,t);
                        this.overlayBanners[e.id] = n
                    }
                    ))
                }
                handleEvent(e) {
                    switch (e.data.type) {
                    case "bannerError":
                        return this.handleBannerErrorEvent(e.data);
                    case "bannerRendered":
                        return this.handleBannerRenderedEvent(e.data);
                    case "requestBanner":
                        return this.handleRequestBannerEvent(e.data)
                    }
                }
                handleBannerErrorEvent(e) {
                    const {error: t, containerId: n} = e;
                    this.logger.log("Banner error happened", {
                        error: t,
                        containerId: n
                    });
                    const r = this.popFromBannerQueue(e.containerId);
                    if (!r)
                        return;
                    const {reject: i} = r;
                    i(t)
                }
                handleBannerRenderedEvent(e) {
                    const t = this.popFromBannerQueue(e.containerId);
                    if (!t)
                        return;
                    const {banner: n, resolve: r} = t;
                    this.logger.log("Banner rendered", n),
                    r()
                }
                handleRequestBannerEvent(e) {
                    const {request: t} = e;
                    this.logger.verbose("Banner request answer from gameframe received", t),
                    this.buildBannerRequestCallback(t),
                    (0,
                    i.requestInGameBanner)(t)
                }
                buildBannerRequestCallback(e) {
                    e.options.banner = {
                        callback: e => {
                            const t = this.popFromBannerQueue(e.code);
                            if (!t)
                                return;
                            const {banner: n, resolve: r, reject: i} = t;
                            if (delete this.bannerQueue[e.code],
                            !e.empty)
                                return this.logger.log("Banner rendered", n),
                                this.sdk.postMessage("bannerProcessed", {
                                    containerId: n.id,
                                    width: n.width,
                                    height: n.height,
                                    minPrice: e.minPrice,
                                    houseAd: e.houseAd,
                                    empty: e.empty
                                }),
                                void r();
                            if (this.useTestAds)
                                (0,
                                o.renderFakeBanner)(n),
                                this.logger.log("Fake banner rendered", n),
                                r();
                            else {
                                this.logger.log("No banner available", n);
                                const t = "Sorry, no banner is available for the moment, please retry";
                                this.sdk.postMessage("bannerProcessed", {
                                    containerId: n.id,
                                    width: n.width,
                                    height: n.height,
                                    error: t,
                                    minPrice: e.minPrice,
                                    houseAd: e.houseAd,
                                    empty: e.empty
                                }),
                                i(t)
                            }
                        }
                    }
                }
                popFromBannerQueue(e) {
                    const t = this.bannerQueue[e];
                    return t ? (delete this.bannerQueue[e],
                    t) : (this.logger.log(`Cannot retrieve element for id ${e} from the banner queue`),
                    null)
                }
                clearBanner(e) {
                    this.sdk.postMessage("clearBanner", {});
                    const t = document.getElementById((0,
                    i.ContainerIdToInnerId)(e));
                    t ? (t.remove(),
                    this.renderedBannerIds.delete(e),
                    this.logger.log(`Cleared the banner from container #${e}`)) : this.logger.log(`There isn't a banner in container #${e}, not clearing anything.`)
                }
                clearAllBanners() {
                    this.sdk.postMessage("clearAllBanners", {});
                    const e = Array.from(this.renderedBannerIds.values());
                    this.logger.log("Clearing all banners, ids: ", e.map((e => `#${e}`)).join(", ")),
                    e.forEach((e => {
                        this.clearBanner(e)
                    }
                    ))
                }
            }
        },
        881: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(823)
              , a = n(659)
              , s = r(n(767));
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.logger = new s.default("game")
                }
                async happytime(e) {
                    return (0,
                    i.callbackWrapper)((async () => {
                        this.logger.log("Requesting happytime"),
                        await this.sdk.ensureInit(),
                        this.sdk.postMessage("happytime", {})
                    }
                    ), e)
                }
                async gameplayStart(e) {
                    return (0,
                    i.callbackWrapper)((async () => {
                        this.logger.log("Requesting gameplay start"),
                        await this.sdk.ensureInit(),
                        this.sdk.postMessage("gameplayStart", {})
                    }
                    ), e)
                }
                async gameplayStop(e) {
                    return (0,
                    i.callbackWrapper)((async () => {
                        this.logger.log("Requesting gameplay stop"),
                        await this.sdk.ensureInit(),
                        this.sdk.postMessage("gameplayStop", {})
                    }
                    ), e)
                }
                async sdkGameLoadingStart(e) {
                    return (0,
                    i.callbackWrapper)((async () => {
                        this.logger.log("Requesting game loading start"),
                        await this.sdk.ensureInit(),
                        this.sdk.postMessage("sdkGameLoadingStart", {})
                    }
                    ), e)
                }
                async sdkGameLoadingStop(e) {
                    return (0,
                    i.callbackWrapper)((async () => {
                        this.logger.log("Requesting game loading stop"),
                        await this.sdk.ensureInit(),
                        this.sdk.postMessage("sdkGameLoadingStop", {})
                    }
                    ), e)
                }
                async inviteLink(e, t) {
                    return (0,
                    i.callbackWrapper)((async () => {
                        this.logger.log("Requesting invite link"),
                        await this.sdk.ensureInit();
                        const t = (0,
                        a.generateInviteLink)(e, this.gameLink);
                        return this.logger.log(`Invite link is ${t}`),
                        this.sdk.postMessage("inviteUrl", {
                            inviteUrl: t
                        }),
                        t
                    }
                    ), t)
                }
                showInviteButton(e, t) {
                    return (0,
                    i.callbackWrapper)((async () => {
                        this.logger.log("Show invite button"),
                        await this.sdk.ensureInit();
                        const t = (0,
                        a.generateInviteLink)(e, this.gameLink);
                        return this.logger.log(`Invite button link ${t}`),
                        this.sdk.postMessage("showInviteButton", {
                            inviteUrl: t
                        }),
                        t
                    }
                    ), t)
                }
                async hideInviteButton() {
                    this.logger.log("Hide invite button"),
                    await this.sdk.ensureInit(),
                    this.sdk.postMessage("hideInviteButton", {})
                }
                async getInviteParam(e, t) {
                    return (0,
                    i.callbackWrapper)((async () => new URLSearchParams(window.location.search).get(e)), t)
                }
                async setScreenshotHandlerAsync(e) {
                    return () => {}
                }
                setScreenshotHandler(e) {
                    return () => {}
                }
                handleEvent(e) {
                    "focusStealAttempt" === e.data.type && this.restoreCanvasFocus()
                }
                restoreCanvasFocus() {
                    try {
                        const e = document.getElementsByTagName("canvas");
                        1 !== e.length ? this.logger.log(`There are ${e.length} canvases, don't restore focus`) : (this.logger.log("Restore focus to canvas"),
                        e[0].tabIndex = 1,
                        e[0].focus())
                    } catch {
                        this.logger.error("Failed to restore canvas focus")
                    }
                }
            }
        },
        273: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(n(683))
              , a = r(n(881))
              , s = r(n(236))
              , o = r(n(320))
              , u = n(871)
              , l = n(951)
              , c = n(823)
              , h = n(412)
              , d = r(n(767));
            t.default = class {
                constructor() {
                    this.initResolvers = [],
                    this.rafvertizingUrl = "",
                    this.initState = u.INIT_STATE.UNINITIALIZED,
                    this._banner = new i.default(this),
                    this._game = new a.default(this),
                    this._ad = new s.default(this),
                    this._user = new o.default(this),
                    this.logger = new d.default("none"),
                    this.receiveMessage = async e => {
                        const t = e.data;
                        if ("sdk" !== t.messageTarget)
                            return;
                        const n = t.type;
                        if (n && this.isValidCrazyEvent(n)) {
                            if (this.logger.verbose("Received message from GF", t),
                            "initialized" === n)
                                return this.gfWindow = e.source,
                                this.initializeReply(t.data);
                            this._banner.handleEvent(e),
                            this._ad.handleEvent(e),
                            this._user.handleEvent(e),
                            this._game.handleEvent(e)
                        }
                    }
                }
                init(e) {
                    this.initState === u.INIT_STATE.UNINITIALIZED && (this.logger.log('Initializing v2 SDK (enable "Verbose" for full logs)'),
                    e && this.logger.log("Init options", e),
                    this.registerMessageListener(),
                    this.sendInit(e),
                    this.initState = u.INIT_STATE.REQUESTED)
                }
                async addInitCallback(e) {
                    await this.ensureInit(),
                    e(this._initInfo)
                }
                async isQaTool(e) {
                    return await this.ensureInit(),
                    this.postMessage("isQATool", {}),
                    (0,
                    c.callbackWrapper)((async () => !!this._isQaTool), e)
                }
                async getEnvironment(e) {
                    return this.gfWindow && this.postMessage("getEnvironment", {}),
                    (0,
                    c.callbackWrapper)((async () => "crazygames"), e)
                }
                get banner() {
                    return this._banner
                }
                get game() {
                    return this._game
                }
                get user() {
                    return this._user
                }
                get ad() {
                    return this._ad
                }
                async syncUnityGameData(e) {
                    return await this.ensureInit(),
                    (0,
                    c.callbackWrapper)((async () => {
                        this.logger.log("Requesting to sync Unity gameData"),
                        this.postMessage("syncUnityGameData", {})
                    }
                    ), e)
                }
                postMessage(e, t) {
                    const n = {
                        type: e,
                        data: t
                    };
                    this.logger.verbose("Message to GF", n),
                    this.gfWindow ? this.gfWindow.postMessage(n, "*") : this.logger.log("CrazyGames gameframe hasn't been detected")
                }
                async ensureInit(e=!1) {
                    return this.initState === u.INIT_STATE.INITIALIZED ? e ? (0,
                    l.loadAdsIfNeeded)(this.rafvertizingUrl) : Promise.resolve() : (this.init(),
                    new Promise((t => {
                        this.initResolvers.push((async () => {
                            e ? (await (0,
                            l.loadAdsIfNeeded)(this.rafvertizingUrl),
                            t()) : t()
                        }
                        ))
                    }
                    )))
                }
                sendInit(e) {
                    const t = {
                        type: "init-js-sdk",
                        data: {
                            version: h.SDK_VERSION,
                            sdkType: "js",
                            ...e
                        }
                    };
                    window.postMessage(t, "*"),
                    window.parent.postMessage(t, "*"),
                    window.parent.parent.postMessage(t, "*"),
                    window.parent.parent.parent.postMessage(t, "*")
                }
                registerMessageListener() {
                    window.addEventListener("message", this.receiveMessage, !1)
                }
                async initializeReply(e) {
                    e && !0 === e.debug && (d.default.forceEnable = !0),
                    this.logger.log("Initialize reply received from gameframe", e),
                    this.initState !== u.INIT_STATE.INITIALIZED && (e && (this.rafvertizingUrl = e.rafvertizingUrl,
                    this.gameId = e.gameId,
                    this._game.gameLink = e.gameLink,
                    this._banner.useTestAds = e.useTestAds,
                    this._banner.disableBannerCheck = e.disableBannerCheck || !1,
                    this._user.systemInfo = e.systemInfo,
                    this._user.userAccountAvailable = !!e.userAccountAvailable,
                    this._isQaTool = !!e.isQaTool),
                    this.initState = u.INIT_STATE.INITIALIZED,
                    this._initInfo = e,
                    this.initResolvers.length > 0 && (this.logger.log("Calling init callbacks"),
                    this.initResolvers.forEach((e => e())),
                    this.initResolvers = []))
                }
                isValidCrazyEvent(e) {
                    switch (e) {
                    case "adStarted":
                    case "adFinished":
                    case "adError":
                    case "adblockDetectionExecuted":
                    case "bannerRendered":
                    case "bannerError":
                    case "requestBanner":
                    case "initialized":
                    case "requestGameDataResponse":
                    case "userLoggedIn":
                    case "showAuthPromptResponse":
                    case "requestUserTokenResponse":
                    case "requestXsollaUserTokenResponse":
                    case "linkAccountResponse":
                    case "initialUserSet":
                    case "focusStealAttempt":
                        return !0;
                    default:
                        return !1
                    }
                }
            }
        },
        320: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(823)
              , a = r(n(767));
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.authDeferredPromise = null,
                    this.accountLinkDeferredPromise = null,
                    this.authListeners = [],
                    this.userSetResolvers = [],
                    this.isUserInitialized = !1,
                    this.userTokenResolvers = [],
                    this.userTokenRequestInProgress = !1,
                    this.xsollaUserTokenRequestInProgress = !1,
                    this.xsollaUserTokenResolvers = [],
                    this.logger = new a.default("user"),
                    setTimeout(( () => {
                        this.isUserInitialized || this.initializeUser(void 0)
                    }
                    ), 5e3)
                }
                showAuthPrompt(e) {
                    return this.logger.log("Requesting auth prompt"),
                    this.authDeferredPromise ? (0,
                    i.callbackWrapper)((async () => {
                        throw new Error("showAuthPromptInProgress")
                    }
                    ), e) : this.user ? (0,
                    i.callbackWrapper)((async () => {
                        throw new Error("userAlreadySignedIn")
                    }
                    ), e) : (0,
                    i.callbackWrapper)(( () => new Promise((async (e, t) => {
                        this.authDeferredPromise = {
                            resolve: e,
                            reject: t
                        },
                        await this.sdk.ensureInit(),
                        this.sdk.postMessage("showAuthPrompt", {})
                    }
                    ))), e)
                }
                handleAuthPromptResponse(e) {
                    this.logger.log("Received auth prompt response", e);
                    const {error: t, user: n} = e;
                    t ? this.authDeferredPromise && this.authDeferredPromise.reject(t.code) : (this.user = n,
                    this.authDeferredPromise && this.authDeferredPromise.resolve(this.user)),
                    this.authDeferredPromise = null
                }
                showAccountLinkPrompt(e) {
                    return this.logger.log("Requesting link account prompt"),
                    this.accountLinkDeferredPromise ? (0,
                    i.callbackWrapper)((async () => {
                        throw new Error("showAccountLinkPromptInProgress")
                    }
                    ), e) : this.user ? (0,
                    i.callbackWrapper)(( () => new Promise((async (e, t) => {
                        this.accountLinkDeferredPromise = {
                            resolve: e,
                            reject: t
                        },
                        await this.sdk.ensureInit(),
                        this.sdk.postMessage("showAccountLinkPrompt", {})
                    }
                    ))), e) : (0,
                    i.callbackWrapper)((async () => {
                        throw new Error("userNotAuthenticated")
                    }
                    ), e)
                }
                handleAccountLinkPromptResponse(e) {
                    this.logger.log("Received account link prompt response", e);
                    const {response: t} = e;
                    this.accountLinkDeferredPromise && this.accountLinkDeferredPromise.resolve({
                        response: t
                    }),
                    this.accountLinkDeferredPromise = null
                }
                getUser(e) {
                    return (0,
                    i.callbackWrapper)((async () => (this.logger.log("Requesting user object"),
                    await this.sdk.ensureInit(),
                    this.sdk.postMessage("getUser", {}),
                    this.isUserInitialized || (this.logger.log("Waiting for the user init message..."),
                    await this.ensureUserInitialized()),
                    this.user)), e)
                }
                async ensureUserInitialized() {
                    return new Promise((e => {
                        this.userSetResolvers.push(( () => {
                            e()
                        }
                        ))
                    }
                    ))
                }
                getSystemInfo(e) {
                    return (0,
                    i.callbackWrapper)((async () => (this.logger.log("Requesting system info"),
                    await this.sdk.ensureInit(),
                    this.sdk.postMessage("getSystemInfo", {}),
                    this.systemInfo)), e)
                }
                isUserAccountAvailable(e) {
                    return this.sdk.postMessage("isUserAccountAvailable", {}),
                    (0,
                    i.callbackWrapper)((async () => (this.logger.log("Requesting user account available"),
                    await this.sdk.ensureInit(),
                    !!this.userAccountAvailable)), e)
                }
                async getUserToken(e) {
                    var t;
                    return this.logger.log("Requesting user token"),
                    await this.sdk.ensureInit(),
                    this.tokenExpiresAtMs && this.tokenExpiresAtMs < Date.now() && (this.logger.log("User token expired, clean it so it is requested again"),
                    this.userToken = null,
                    this.tokenExpiresAtMs = null),
                    this.tokenExpiresAtMs && !this.userTokenRequestInProgress && this.tokenExpiresAtMs - 3e4 < Date.now() && (this.logger.log("User token expires soon, request new one in background"),
                    this.requestNewUserToken()),
                    (null === (t = this.userToken) || void 0 === t ? void 0 : t.token) ? (this.logger.log("Returning cached user token"),
                    (0,
                    i.callbackWrapper)((async () => this.userToken.token), e)) : (this.userTokenRequestInProgress ? this.logger.log("User token request to portal in progress") : (this.logger.log("No user token present in the SDK, request one"),
                    this.requestNewUserToken()),
                    (0,
                    i.callbackWrapper)((async () => {
                        if (await new Promise((e => {
                            this.userTokenResolvers.push((async () => {
                                e()
                            }
                            ))
                        }
                        )),
                        !this.userToken)
                            throw this.logger.error("User token missing after portal request finished"),
                            new Error("unexpectedError");
                        if (this.userToken.error)
                            throw new Error(this.userToken.error.code);
                        if (!this.userToken.token)
                            throw this.logger.error("User token missing, even though there isn't any error"),
                            new Error("unexpectedError");
                        return this.userToken.token
                    }
                    ), e))
                }
                handleUserTokenResponse(e) {
                    this.logger.log("Received token response from portal", e),
                    this.userToken = e,
                    this.userTokenRequestInProgress = !1,
                    e.expiresIn && (this.tokenExpiresAtMs = Date.now() + 1e3 * e.expiresIn),
                    this.userTokenResolvers.forEach((e => e())),
                    this.userTokenResolvers = []
                }
                requestNewUserToken() {
                    this.logger.log("Requesting user token from portal"),
                    this.sdk.postMessage("requestUserToken", {}),
                    this.userTokenRequestInProgress = !0
                }
                async getXsollaUserToken(e) {
                    var t;
                    return this.logger.log("Requesting Xsolla user token"),
                    await this.sdk.ensureInit(),
                    this.xsollaUserTokenExpiresAtMs && this.xsollaUserTokenExpiresAtMs < Date.now() && (this.logger.log("Xsolla user token expired, clean it so it is requested again"),
                    this.xsollaUserToken = null,
                    this.xsollaUserTokenExpiresAtMs = null),
                    this.xsollaUserTokenExpiresAtMs && !this.xsollaUserTokenRequestInProgress && this.xsollaUserTokenExpiresAtMs - 3e4 < Date.now() && (this.logger.log("Xsolla user token expires soon, request new one in background"),
                    this.requestNewXsollaUserToken()),
                    (null === (t = this.xsollaUserToken) || void 0 === t ? void 0 : t.token) ? (this.logger.log("Returning cached Xsolla user token"),
                    (0,
                    i.callbackWrapper)((async () => this.xsollaUserToken.token), e)) : (this.xsollaUserTokenRequestInProgress ? this.logger.log("Xsolla user token request to portal in progress") : (this.logger.log("No Xsolla user token present in the SDK, request one"),
                    this.requestNewXsollaUserToken()),
                    (0,
                    i.callbackWrapper)((async () => {
                        if (await new Promise((e => {
                            this.xsollaUserTokenResolvers.push((async () => {
                                e()
                            }
                            ))
                        }
                        )),
                        !this.xsollaUserToken)
                            throw this.logger.error("Xsolla user token missing after portal request finished"),
                            new Error("unexpectedError");
                        if (this.xsollaUserToken.error)
                            throw new Error(this.xsollaUserToken.error.code);
                        if (!this.xsollaUserToken.token)
                            throw this.logger.error("Xsolla user token missing, even though there isn't any error"),
                            new Error("unexpectedError");
                        return this.xsollaUserToken.token
                    }
                    ), e))
                }
                handleXsollaUserTokenResponse(e) {
                    this.logger.log("Received Xsolla user token response from portal", e),
                    this.xsollaUserToken = e,
                    this.xsollaUserTokenRequestInProgress = !1,
                    e.expiresIn && (this.xsollaUserTokenExpiresAtMs = Date.now() + 1e3 * e.expiresIn),
                    this.xsollaUserTokenResolvers.forEach((e => e())),
                    this.xsollaUserTokenResolvers = []
                }
                requestNewXsollaUserToken() {
                    this.logger.log("Requesting Xsolla user token from portal"),
                    this.sdk.postMessage("requestXsollaUserToken", {}),
                    this.xsollaUserTokenRequestInProgress = !0
                }
                addScore(e, t) {
                    return this.logger.log("Requesting to add score", e),
                    console.warn("addScore is temporarily disabled"),
                    (0,
                    i.callbackWrapper)((async () => {}
                    ), t)
                }
                addScoreEncrypted(e, t, n) {
                    return this.logger.log("Requesting to add score encrypted. Score: ", e, "Encrypted: ", t),
                    "number" != typeof e || isNaN(e) ? (0,
                    i.callbackWrapper)((async () => {
                        throw this.logger.error("Score input must be a number"),
                        new Error("unexpectedError")
                    }
                    ), n) : "https:" !== window.location.protocol ? (0,
                    i.callbackWrapper)((async () => {
                        throw this.logger.error("AddScore is only supported on https"),
                        new Error("unexpectedError")
                    }
                    ), n) : (0,
                    i.callbackWrapper)((async () => {
                        await this.sdk.ensureInit(),
                        this.sdk.postMessage("addScore", {
                            score: e,
                            encryptedScore: t
                        })
                    }
                    ), n)
                }
                handleEvent(e) {
                    const t = e.data;
                    switch (t.type) {
                    case "showAuthPromptResponse":
                        this.handleAuthPromptResponse(t);
                        break;
                    case "linkAccountResponse":
                        this.handleAccountLinkPromptResponse(t.data);
                        break;
                    case "userLoggedIn":
                        this.handleUserLoggedIn(t.data);
                        break;
                    case "requestUserTokenResponse":
                        this.handleUserTokenResponse(t);
                        break;
                    case "requestXsollaUserTokenResponse":
                        this.handleXsollaUserTokenResponse(t);
                        break;
                    case "initialUserSet":
                        this.initializeUser(t.data.user)
                    }
                }
                addAuthListener(e) {
                    this.authListeners.push(e),
                    this.sdk.postMessage("addAuthListener", {}),
                    this.callAuthChangeListener(e)
                }
                removeAuthListener(e) {
                    this.sdk.postMessage("removeAuthListener", {}),
                    this.authListeners = this.authListeners.filter((t => t !== e))
                }
                handleUserLoggedIn(e) {
                    this.user = e.user,
                    this.initializeUser(e.user),
                    this.callAuthChangeListeners()
                }
                initializeUser(e) {
                    this.isUserInitialized || (this.user = e,
                    this.userSetResolvers.forEach((e => e())),
                    this.userSetResolvers = [],
                    this.isUserInitialized = !0)
                }
                callAuthChangeListeners() {
                    this.authListeners.forEach((e => this.callAuthChangeListener(e)))
                }
                callAuthChangeListener(e) {
                    try {
                        e(this.user)
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
        },
        176: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(823);
            t.default = class {
                constructor() {
                    this.errorMessage = 'CrazySDK is disabled on this domain. Please check if window.CrazyGames.SDK.environment is not "disabled" before calling the SDK.',
                    this.errorData = {
                        reason: "other",
                        message: this.errorMessage
                    },
                    this.errorFunction = async () => {
                        throw new Error(this.errorMessage)
                    }
                }
                init() {}
                addInitCallback() {}
                async isQaTool(e) {
                    return (0,
                    r.callbackWrapper)((async () => !1), e)
                }
                async getEnvironment(e) {
                    return (0,
                    r.callbackWrapper)((async () => "disabled"), e)
                }
                async syncUnityGameData(e) {
                    return this.errorFunction()
                }
                get ad() {
                    return {
                        requestAd: async (e, t) => null == t ? void 0 : t.adError(this.errorMessage, this.errorData),
                        hasAdblock: e => (0,
                        r.callbackWrapper)(this.errorFunction, e)
                    }
                }
                get banner() {
                    return {
                        requestBanner: (e, t) => (0,
                        r.callbackWrapper)(this.errorFunction, t),
                        requestResponsiveBanner: (e, t) => (0,
                        r.callbackWrapper)(this.errorFunction, t),
                        requestOverlayBanners: (e, t) => this.errorFunction(),
                        clearBanner: e => this.errorFunction(),
                        clearAllBanners: () => this.errorFunction()
                    }
                }
                get game() {
                    return {
                        happytime: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        gameplayStart: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        gameplayStop: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        sdkGameLoadingStart: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        sdkGameLoadingStop: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        inviteLink: (e, t) => (0,
                        r.callbackWrapper)(this.errorFunction, t),
                        hideInviteButton: () => this.errorFunction(),
                        showInviteButton: (e, t) => (0,
                        r.callbackWrapper)(this.errorFunction, t),
                        getInviteParam: (e, t) => (0,
                        r.callbackWrapper)(this.errorFunction, t),
                        setScreenshotHandlerAsync: async e => () => {}
                        ,
                        setScreenshotHandler: e => () => {}
                    }
                }
                get user() {
                    return {
                        getUser: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        getSystemInfo: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        showAuthPrompt: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        showAccountLinkPrompt: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        addAuthListener(e) {},
                        removeAuthListener(e) {},
                        getUserToken: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        getXsollaUserToken: e => (0,
                        r.callbackWrapper)(this.errorFunction, e),
                        addScore: (e, t) => (0,
                        r.callbackWrapper)(this.errorFunction, t),
                        addScoreEncrypted: (e, t, n) => (0,
                        r.callbackWrapper)(this.errorFunction, n),
                        isUserAccountAvailable: e => (0,
                        r.callbackWrapper)(this.errorFunction, e)
                    }
                }
            }
        }
        ,
        223: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(823)
              , a = n(871)
              , s = r(n(767))
              , o = 3e4;
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.requestInProgress = !1,
                    this.throttleInterstitial = !1,
                    this.throttleRewarded = !1,
                    this.logger = new s.default("ad")
                }
                init(e) {
                    var t, n, r, i;
                    (null === (t = null == e ? void 0 : e.fb) || void 0 === t ? void 0 : t.interstitialId) || console.warn("InitOptions missing interstitialId, interstitial ads will not work."),
                    (null === (n = null == e ? void 0 : e.fb) || void 0 === n ? void 0 : n.rewardedId) || console.warn("InitOptions missing rewardedId, rewarded ads will not work."),
                    this.interstitialAdId = null === (r = null == e ? void 0 : e.fb) || void 0 === r ? void 0 : r.interstitialId,
                    this.rewardedAdId = null === (i = null == e ? void 0 : e.fb) || void 0 === i ? void 0 : i.rewardedId,
                    this.preloadAds()
                }
                async preloadAds() {
                    this.preloadInterstitialAd(0),
                    this.preloadRewardedAd(0)
                }
                async requestAd(e, t) {
                    if (this.logger.log(`Requesting ${e} ad`),
                    this.requestInProgress && (null == t ? void 0 : t.adError)) {
                        const e = "An ad request is already in progress";
                        (0,
                        i.wrapUserFn)(t.adError)(e, {
                            reason: "other",
                            message: e
                        })
                    }
                    return this.requestInProgress = !0,
                    "rewarded" === e ? this.displayRewardedAd(t) : this.displayMidrollAd(t)
                }
                hasAdblock(e) {
                    return (0,
                    i.callbackWrapper)(( () => Promise.resolve(!1)), e)
                }
                handleAdError(e, t) {
                    this.requestInProgress = !1,
                    (null == t ? void 0 : t.adError) ? (0,
                    i.wrapUserFn)(t.adError)(e.toString(), {
                        reason: "other",
                        message: e.toString()
                    }) : (null == t ? void 0 : t.adFinished) && (0,
                    i.wrapUserFn)(t.adFinished)()
                }
                handleAdFinished(e) {
                    this.requestInProgress = !1,
                    (null == e ? void 0 : e.adFinished) && (0,
                    i.wrapUserFn)(e.adFinished)()
                }
                handleAdStarted(e) {
                    (null == e ? void 0 : e.adStarted) && (0,
                    i.wrapUserFn)(null == e ? void 0 : e.adStarted)()
                }
                async displayMidrollAd(e) {
                    if (this.preloadedInterstitialAd)
                        if (this.throttleInterstitial)
                            this.handleAdError(`Please wait ${a.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS / 1e3} seconds between two midroll ads`, e);
                        else {
                            try {
                                this.handleAdStarted(e),
                                this.throttleInterstitial = !0,
                                setTimeout(( () => this.throttleInterstitial = !1), a.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS),
                                await this.preloadedInterstitialAd.showAsync(),
                                this.handleAdFinished(e)
                            } catch (t) {
                                const n = t;
                                this.handleAdError(`${n.code} ${n.message}`, e)
                            }
                            this.preloadedInterstitialAd = void 0,
                            this.preloadInterstitialAd(0)
                        }
                    else
                        this.handleAdError("Missing preloaded interstitial ad", e)
                }
                async displayRewardedAd(e) {
                    if (this.preloadedRewardedAd)
                        if (this.throttleRewarded)
                            this.handleAdError(`Please wait ${a.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS / 1e3} seconds between two rewarded ads`, e);
                        else {
                            try {
                                this.handleAdStarted(e),
                                this.throttleRewarded = !0,
                                setTimeout(( () => this.throttleRewarded = !1), a.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS),
                                await this.preloadedRewardedAd.showAsync(),
                                this.handleAdFinished(e)
                            } catch (t) {
                                const n = t;
                                this.handleAdError(`${n.code} ${n.message}`, e)
                            }
                            this.preloadedRewardedAd = void 0,
                            this.preloadRewardedAd(0)
                        }
                    else
                        this.handleAdError("Missing preloaded rewarded ad", e)
                }
                async preloadInterstitialAd(e) {
                    if (!this.interstitialAdId || this.preloadedInterstitialAd)
                        return;
                    if (e >= 3)
                        return console.warn("Failed to preload interstitial ads 3 times in a row, no interstitial ads will be displayed in this session.");
                    const t = await this.sdk.ensureInit();
                    let n;
                    try {
                        n = await t.getInterstitialAdAsync(this.interstitialAdId)
                    } catch (t) {
                        const n = t;
                        return console.error(`Failed to get interstitial (midgame) ad. Code: ${n.code}, message: ${n.message}`),
                        void setTimeout(( () => this.preloadInterstitialAd(e + 1)), o)
                    }
                    try {
                        await n.loadAsync()
                    } catch (t) {
                        const n = t;
                        return console.error(`Failed to load interstitial (midgame) ad. Code: ${n.code}, message: ${n.message}`),
                        void setTimeout(( () => this.preloadInterstitialAd(e + 1)), o)
                    }
                    this.preloadedInterstitialAd = n,
                    this.logger.log("Interstitial (midgame) ad preloaded")
                }
                async preloadRewardedAd(e) {
                    if (!this.rewardedAdId || this.preloadedRewardedAd)
                        return;
                    if (e >= 3)
                        return console.warn("Failed to preload rewarded ads 3 times in a row, no rewarded ads will be displayed in this session.");
                    const t = await this.sdk.ensureInit();
                    let n;
                    try {
                        n = await t.getRewardedVideoAsync(this.rewardedAdId)
                    } catch (t) {
                        const n = t;
                        return console.error(`Failed to get rewarded ad. Code: ${n.code}, message: ${n.message}`),
                        void setTimeout(( () => this.preloadRewardedAd(e + 1)), o)
                    }
                    try {
                        await n.loadAsync()
                    } catch (t) {
                        const n = t;
                        return console.error(`Failed to load rewarded ad. Code: ${n.code}, message: ${n.message}`),
                        void setTimeout(( () => this.preloadRewardedAd(e + 1)), o)
                    }
                    this.preloadedRewardedAd = n,
                    this.logger.log("Rewarded ad preloaded")
                }
            }
        },
        983: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(823)
              , a = n(871)
              , s = r(n(223))
              , o = r(n(767));
            t.default = class {
                constructor() {
                    this.initState = a.INIT_STATE.UNINITIALIZED,
                    this.initResolvers = [],
                    this._ad = new s.default(this),
                    this.bannerLogger = new o.default("banner"),
                    this.mainLogger = new o.default("none")
                }
                init(e) {
                    this.loadFbSdk(),
                    this._ad.init(e)
                }
                async addInitCallback(e) {
                    await this.ensureInit(),
                    e({
                        gameLink: "",
                        rafvertizingUrl: "",
                        useTestAds: !1,
                        systemInfo: {
                            countryCode: "",
                            browser: {
                                name: "",
                                version: ""
                            },
                            os: {
                                name: "",
                                version: ""
                            },
                            device: "desktop",
                            applicationType: "web"
                        },
                        gameId: "",
                        locale: "en-US",
                        userAccountAvailable: !1,
                        isQaTool: !1
                    })
                }
                async isQaTool(e) {
                    return (0,
                    i.callbackWrapper)((async () => !1), e)
                }
                async getEnvironment(e) {
                    return (0,
                    i.callbackWrapper)((async () => "facebook"), e)
                }
                get ad() {
                    return this._ad
                }
                get banner() {
                    return {
                        requestBanner: (e, t) => {
                            const n = "Responsive banner not supported with FacebookSDK";
                            return this.bannerLogger.error(n),
                            (0,
                            i.callbackWrapper)((async () => {
                                throw new Error(n)
                            }
                            ), t)
                        }
                        ,
                        requestResponsiveBanner: (e, t) => {
                            const n = "Responsive banner not supported with FacebookSDK";
                            return this.bannerLogger.error(n),
                            (0,
                            i.callbackWrapper)((async () => {
                                throw new Error(n)
                            }
                            ), t)
                        }
                        ,
                        requestOverlayBanners(e, t) {
                            throw new Error("Overlay banners not supported with FacebookSDK")
                        },
                        clearBanner(e) {
                            throw new Error("Clearing banners is supported with Yandex")
                        },
                        clearAllBanners() {
                            throw new Error("Clearing banners is supported with Yandex")
                        }
                    }
                }
                get game() {
                    return {
                        happytime: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Happytime is not supported with FacebookSDK")
                        }
                        ), e),
                        gameplayStart: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Gameplay start is not supported with FacebookSDK")
                        }
                        ), e),
                        gameplayStop: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Gameplay stop is not supported with FacebookSDK")
                        }
                        ), e),
                        sdkGameLoadingStart: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Game load start from SDK is not supported with FacebookSDK")
                        }
                        ), e),
                        sdkGameLoadingStop: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Game load stop from SDK is not supported with FacebookSDK")
                        }
                        ), e),
                        inviteLink: (e, t) => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Invite link is not supported with FacebookSDK")
                        }
                        ), t),
                        showInviteButton: (e, t) => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Invite link is not supported with FacebookSDK")
                        }
                        ), t),
                        hideInviteButton: () => {
                            throw new a.SDKError("Invite button is not supported with FacebookSDK")
                        }
                        ,
                        setScreenshotHandlerAsync: async e => () => {}
                        ,
                        setScreenshotHandler: e => () => {}
                        ,
                        getInviteParam: (e, t) => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Invite link is not supported with FacebookSDK")
                        }
                        ), t)
                    }
                }
                get user() {
                    return {
                        getUser: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No user available with FacebookSDK")
                        }
                        ), e),
                        getSystemInfo: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No system info available with FacebookSDK")
                        }
                        ), e),
                        showAuthPrompt: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No user available with FacebookSDK")
                        }
                        ), e),
                        showAccountLinkPrompt: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No account linking available with FacebookSDK")
                        }
                        ), e),
                        getUserToken: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No user token available with FacebookSDK.")
                        }
                        ), e),
                        getXsollaUserToken: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No Xsolla user token available with FacebookSDK.")
                        }
                        ), e),
                        addScore: (e, t) => (0,
                        i.callbackWrapper)((async () => {
                            throw new a.SDKError("Game score is not supported with FacebookSDK")
                        }
                        ), t),
                        addScoreEncrypted: (e, t, n) => (0,
                        i.callbackWrapper)((async () => {
                            throw new a.SDKError("Game score is not supported with FacebookSDK")
                        }
                        ), n),
                        addAuthListener(e) {},
                        removeAuthListener(e) {},
                        isUserAccountAvailable: e => (0,
                        i.callbackWrapper)((async () => !1), e)
                    }
                }
                syncUnityGameData(e) {
                    throw new a.SDKError("syncUnityGameData is not supported with FacebookSDK")
                }
                async ensureInit() {
                    return this.initState === a.INIT_STATE.INITIALIZED ? Promise.resolve(this.fbSdk) : (this.loadFbSdk(),
                    new Promise((e => {
                        this.initResolvers.push((async () => {
                            e(this.fbSdk)
                        }
                        ))
                    }
                    )))
                }
                async loadFbSdk() {
                    var e, t, n;
                    this.initState === a.INIT_STATE.UNINITIALIZED && (this.mainLogger.log("Loading FBInstant SDK"),
                    this.initState = a.INIT_STATE.REQUESTED,
                    await (0,
                    i.loadScript)("https://connect.facebook.net/en_US/fbinstant.7.1.js"),
                    this.fbSdk = window.FBInstant,
                    await (null === (e = this.fbSdk) || void 0 === e ? void 0 : e.initializeAsync()),
                    null === (t = this.fbSdk) || void 0 === t || t.setLoadingProgress(100),
                    await (null === (n = this.fbSdk) || void 0 === n ? void 0 : n.startGameAsync()),
                    this.initState = a.INIT_STATE.INITIALIZED,
                    this.initResolvers.length > 0 && (this.mainLogger.log("Calling init callbacks"),
                    this.initResolvers.forEach((e => e())),
                    this.initResolvers = []))
                }
            }
        },
        608: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(823)
              , a = r(n(767));
            t.default = class {
                constructor() {
                    this.requestInProgress = !1,
                    this.overlay = null,
                    this.logger = new a.default("ad")
                }
                init() {
                    this.overlay = document.createElement("div"),
                    this.overlay.id = "local-overlay",
                    this.createOverlayStyle(),
                    document.body.appendChild(this.overlay)
                }
                async requestAd(e, t) {
                    if (this.requestInProgress)
                        if (null == t ? void 0 : t.adError) {
                            const e = "An ad request is already in progress";
                            (0,
                            i.wrapUserFn)(t.adError)(e, {
                                reason: "other",
                                message: e
                            })
                        } else
                            (null == t ? void 0 : t.adFinished) && (0,
                            i.wrapUserFn)(t.adFinished)();
                    else
                        (null == t ? void 0 : t.adStarted) && (0,
                        i.wrapUserFn)(t.adStarted)(),
                        await this.renderFakeAd(e),
                        (null == t ? void 0 : t.adFinished) && (0,
                        i.wrapUserFn)(t.adFinished)()
                }
                hasAdblock(e) {
                    return this.logger.log("Requesting adblock status (always false) (local)"),
                    (0,
                    i.callbackWrapper)(( () => Promise.resolve(!1)), e)
                }
                async renderFakeAd(e) {
                    return this.logger.log(`Requesting ${e} ad`),
                    this.requestInProgress = !0,
                    this.showOverlay(),
                    this.overlay.innerHTML = `<h1>A ${e} ad would appear here</h1>`,
                    new Promise((e => {
                        window.setTimeout(( () => {
                            this.requestInProgress = !1,
                            this.hideOverlay(),
                            e()
                        }
                        ), 5e3)
                    }
                    ))
                }
                showOverlay() {
                    this.overlay.style.display = "flex"
                }
                hideOverlay() {
                    this.overlay.style.display = "none",
                    this.overlay.innerHTML = ""
                }
                createOverlayStyle() {
                    const e = {
                        position: "fixed",
                        display: "none",
                        inset: 0,
                        "font-family": "Arial, Helvetica, sans-serif",
                        color: "white",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "rgba(0,0,0,0.75)",
                        "z-index": "10000"
                    };
                    for (const t in e)
                        this.overlay.style[t] = e[t]
                }
            }
        },
        216: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(81)
              , a = n(823)
              , s = n(414)
              , o = n(314)
              , u = r(n(767));
            t.default = class {
                constructor() {
                    this.disableBannerCheck = !1,
                    this.overlayBanners = {},
                    this.renderedBannerIds = new Set,
                    this.logger = new u.default("banner")
                }
                requestBanner(e, t) {
                    return (0,
                    a.callbackWrapper)((async () => {
                        this.logger.log("Requesting banner", e);
                        const t = await (0,
                        i.getBannerContainer)(e.id, !this.disableBannerCheck)
                          , n = {
                            ...e,
                            id: t.innerContainerId
                        };
                        this.renderedBannerIds.add(e.id),
                        (0,
                        o.renderFakeBanner)(n)
                    }
                    ), t)
                }
                requestResponsiveBanner(e, t) {
                    return (0,
                    a.callbackWrapper)((async () => {
                        this.logger.log("Requesting responsive banner", e);
                        const t = await (0,
                        i.getBannerContainer)(e, !this.disableBannerCheck)
                          , n = {
                            id: t.innerContainerId,
                            width: t.containerInfo.size.width,
                            height: t.containerInfo.size.height,
                            isResponsive: !0
                        };
                        this.renderedBannerIds.add(e),
                        (0,
                        o.renderFakeBanner)(n)
                    }
                    ), t)
                }
                requestOverlayBanners(e, t) {
                    const n = e.map((e => e.id));
                    Object.keys(this.overlayBanners).forEach((e => {
                        n.includes(e) || (this.logger.log("Remove overlay banner " + e),
                        this.overlayBanners[e].destroy(),
                        delete this.overlayBanners[e])
                    }
                    )),
                    e.forEach((e => {
                        if (this.overlayBanners[e.id])
                            return void this.logger.log("Skip overlay banner update " + e.id);
                        this.logger.log("Create overlay banner " + e.id);
                        const n = new s.OverlayBanner(e,this.disableBannerCheck,this,t);
                        this.overlayBanners[e.id] = n
                    }
                    ))
                }
                clearBanner(e) {
                    const t = document.getElementById((0,
                    i.ContainerIdToInnerId)(e));
                    t ? (t.remove(),
                    this.renderedBannerIds.delete(e),
                    this.logger.log(`Cleared the banner from container #${e}`)) : this.logger.log(`There isn't a banner in container #${e}, not clearing anything.`)
                }
                clearAllBanners() {
                    const e = Array.from(this.renderedBannerIds.values());
                    this.logger.log("Clearing all banners, ids: ", e.map((e => `#${e}`)).join(", ")),
                    e.forEach((e => {
                        this.clearBanner(e)
                    }
                    ))
                }
            }
        },
        942: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(871)
              , a = r(n(608))
              , s = r(n(216))
              , o = r(n(338))
              , u = n(823)
              , l = n(659)
              , c = r(n(767));
            t.default = class {
                constructor() {
                    this.initState = i.INIT_STATE.UNINITIALIZED,
                    this._ad = new a.default,
                    this._banner = new s.default,
                    this._user = new o.default,
                    this.gameLink = "https://www.crazygames.com/game/your-game-will-appear-here",
                    this.mainLogger = new c.default("none"),
                    this.gameLogger = new c.default("game"),
                    this.showInviteButton = (e, t) => (0,
                    u.callbackWrapper)((async () => {
                        this.gameLogger.log("Show invite button (local)");
                        const t = (0,
                        l.generateInviteLink)(e, this.gameLink);
                        return this.gameLogger.log(`Invite button link ${t}`),
                        t
                    }
                    ), t),
                    this.inviteLink = (e, t) => (0,
                    u.callbackWrapper)((async () => {
                        this.gameLogger.log("Requesting invite link (local)");
                        const t = (0,
                        l.generateInviteLink)(e, this.gameLink);
                        return this.gameLogger.log(`Invite link is ${t}`),
                        t
                    }
                    ), t)
                }
                init(e) {
                    this.mainLogger.log("Initializing local sdk"),
                    e && this.mainLogger.log("Init options", e),
                    this.initState !== i.INIT_STATE.INITIALIZED && (this.initState = i.INIT_STATE.INITIALIZED,
                    this._ad.init(),
                    this._banner.disableBannerCheck = "true" === (0,
                    u.getQueryStringValue)("disable_banner_check"))
                }
                addInitCallback(e) {
                    let t = !0;
                    "false" === (0,
                    u.getQueryStringValue)("user_account_available") && (t = !1),
                    e({
                        gameLink: "https://www.crazygames.com/game/yourFabulousGameHere",
                        rafvertizingUrl: "demo",
                        useTestAds: !1,
                        systemInfo: {
                            countryCode: "demo",
                            browser: {
                                name: "demo",
                                version: "demo"
                            },
                            os: {
                                name: "demo",
                                version: "demo"
                            },
                            device: "desktop",
                            applicationType: "web"
                        },
                        gameId: "",
                        locale: "en-US",
                        userAccountAvailable: t,
                        isQaTool: !1
                    })
                }
                async isQaTool(e) {
                    return (0,
                    u.callbackWrapper)((async () => !1), e)
                }
                async getEnvironment(e) {
                    return (0,
                    u.callbackWrapper)((async () => "local"), e)
                }
                get ad() {
                    return this._ad
                }
                get banner() {
                    return this._banner
                }
                get user() {
                    return this._user
                }
                get game() {
                    return {
                        happytime: e => (0,
                        u.callbackWrapper)((async () => {
                            this.gameLogger.log("Requesting happytime (local)")
                        }
                        ), e),
                        gameplayStart: e => (0,
                        u.callbackWrapper)((async () => {
                            this.gameLogger.log("Requesting gameplay start (local)")
                        }
                        ), e),
                        gameplayStop: e => (0,
                        u.callbackWrapper)((async () => {
                            this.gameLogger.log("Requesting gameplay stop (local)")
                        }
                        ), e),
                        sdkGameLoadingStart: e => (0,
                        u.callbackWrapper)((async () => {
                            this.gameLogger.log("Requesting game loading start (local)")
                        }
                        ), e),
                        sdkGameLoadingStop: e => (0,
                        u.callbackWrapper)((async () => {
                            this.gameLogger.log("Requesting game loading stop (local)")
                        }
                        ), e),
                        inviteLink: this.inviteLink,
                        showInviteButton: this.showInviteButton,
                        hideInviteButton: () => {
                            this.gameLogger.log("Hide invite button (local)")
                        }
                        ,
                        setScreenshotHandlerAsync: async e => () => {}
                        ,
                        setScreenshotHandler: e => () => {}
                        ,
                        getInviteParam: (e, t) => (0,
                        u.callbackWrapper)((async () => new URLSearchParams(window.location.search).get(e)), t)
                    }
                }
                syncUnityGameData(e) {
                    return (0,
                    u.callbackWrapper)((async () => {
                        this.mainLogger.log("Requesting to sync UnityGameData (local)")
                    }
                    ), e)
                }
            }
        },
        338: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(823)
              , a = r(n(767));
            t.default = class {
                constructor() {
                    this.systemInfo = {
                        browser: {
                            name: "Chrome",
                            version: "89.0.0.0"
                        },
                        countryCode: "FR",
                        os: {
                            name: "Windows",
                            version: "10"
                        },
                        device: "desktop",
                        applicationType: "web"
                    },
                    this.demoUser1 = {
                        username: "User1",
                        profilePictureUrl: "https://images.crazygames.com/userportal/avatars/1.png"
                    },
                    this.demoUser2 = {
                        username: "User2",
                        profilePictureUrl: "https://images.crazygames.com/userportal/avatars/2.png"
                    },
                    this.user1Token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.u4N2DzCC6Vmo6Gys-XSl8rHQR0NUJAcWQWr29eLd54qMDPbCopPG0kye8TAidOU6dWAqNWO_kERbl75nTxNcJjbW4yqBS_bIPingIhuCCJsjvnQPkalfmVotmoZGQP21Q9MyZPfpjZNogioA3a0vm6APXAqzudTA9lTioztnT4YvgndISngOMQVNoDCJ_DgCbKy8GFQDcCN-AHFFb0WIVWiTYszv-9JZohUzULt-ueYL31pXVGHQ5C4rHESEg7LYzx1IaLKw1zcoYGxul0RxR35nm3yD_bGa6fQVzCfnKnhEBRifUZsIN1LfIHfNB23ZOh1llG7PEOdvtCSfIxP9ZK6t4gRkGn1VsqZFAMhq1LgJebO8hcm_Iqx0wF3WkdMysoQuWThTNKnwmphv9pguuALILYJluUP8UQll3qiF6gzoLPy1MfD_9l4TPZeP9Bv50B-Tm6Lk3OW248jyuFRKP_VgwZutTb5pJ7LggFcqWFXsBv5ZG3V2zsfVwpAPDhpmb4ykjoB2xLSuxjrvs1dzMhl02QAQjqTUgHj4fstgX-2jYowDyyPjj6JbT2ZC7vrrdmPvc8AcNvyCszamfRYjexElGaeJDDt6vtRuJw_JVwsCLaYHGif4UaKCoe6BECg3mRVUkH08Nm-qQPQw9slpYZmxckFEQQPCGkkPhgOBFkE",
                    this.user2Token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIyIiwidXNlcm5hbWUiOiJVc2VyMiIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8yLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.kh60HYKR8txKvLoCB6dQ9hQG8Mu1UgtneTGs3Y15HvBWrZoLKp3x3pTf_Vhq8xzs7fQYJKr94zYAxxFRztHey7Tv7PBBmPESUFo8Le-_s2xDy982sFhpM6XDt84ohhvEuJEsOW8wIcCaCK6wzm6UWY6n1bpw1cO1KNASyZRSkDRhfyzDVJ5e167OLgGe3euodTHgClJPDv0ZYhle9KH86PepWamCm0429VrzyOu6QdbtFcRlRNZVnTtgNrCpyvss4AyDhnY5qV9yng7xHVt4zlocP_Z7btBL_kxrzYskhJi6KYuQAYmqLxqHSDnehlIvgO4cdEpJA_FOTeACTohhEu8zjXRrfdAFvEe0W6qqUo5HNFoElRoxYWf11WGSdrJCjpF4Qei9BPgprFaVH2Xi-ITAjKyElQxeKs5p6VmvaMAGwdqZgM4fm7OSex8QQGK0HFJ7wFoCTV5PLl-MBVvTSTfemJMWEwc8od124gwT_uGdDKrASovT2pijgBsAi3jxwgfEr1RPq8uCgZtksrTqaAM9TMv9Z6Zv35pdgTrWzTrOn-G-uc4EPZq7iQaEnglWEFj8Qsm_nMQMgtIM7MYG8KwPC4if3-Yc8KwaAL_taVvkqyMaV3W5j4MX9b1bbf_fw3jrGt74MACb7FtgzKudxoz2CXKZqTppadxS_IOnlMk",
                    this.expiredToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzQ5MSwiZXhwIjoxNjY4NTkzNDkyfQ.l_0cyeD-suEM7n9l-Vb2nP5vTJi-e3HwZQWLUESJMdVTX1zPDuQhwnSgHhcGVGFnhG5Wvtni-ElpM8HnVNvY7hRthbeP23n2ScAJBvAX10vrzPuLJRn_Nj_5GcRQpK4fH813Ij8ZWuOaS2hD4gKaEUessZs5n5hNBTQN9T5j4wkNvfhuw9vqtVOha2aPveqeVy1eA5XAWI7IirHi31-Dw60MSVgsp3r4tpYEHTlUPktzLsQvO9Sk9IE7iybg9ycoFoS6L1eAvxGWVF1BMHRerPwdOV9CN0rtrqrTM3pyb1fpmFfgQpoA8AgPuVrU58mwyeTpUQ4WSrPrltGjxxfiGQOATBDBrJk5V173BfUgBEgAEP0TifWAQt02iijJa9G6q-V8p0GWto1EYSdvEDmG0YhoRBVxnOQH3U1Fu0yxMWGMm9VmZVVhVN8PpLjitEhP4Gn33IafpS05d1-Q0NFMb9-FvQCdtXjTaGbaBVIeBN-aO0r4ERvoBE9R0AUrywd9Z2zK_qKRvp35NyryLjnedsYt5Xrc9TA2uDMR77TjByyqsdQ_qv4zhLfhuiMiweXyPfYzltAiNJmEUohxlP7OvH33B6xpT7Qz2ZyEeMHBrQRQGGlT6MowcMYx_2LFNSK8PwZJNlMs0Uw_uCIu-4TvqleVleIg7sLhWiijw1cxtmM",
                    this.logger = new a.default("user")
                }
                showAuthPrompt(e) {
                    switch (this.logger.log("Requesting auth prompt (local)"),
                    (0,
                    i.getQueryStringValue)("show_auth_prompt_response")) {
                    case "user1":
                    default:
                        return (0,
                        i.callbackWrapper)((async () => this.demoUser1), e);
                    case "user2":
                        return (0,
                        i.callbackWrapper)((async () => this.demoUser2), e);
                    case "user_cancelled":
                        return (0,
                        i.callbackWrapper)((async () => {
                            throw new Error("userCancelled")
                        }
                        ), e)
                    }
                }
                showAccountLinkPrompt(e) {
                    switch (this.logger.log("Requesting link account prompt (local)"),
                    (0,
                    i.getQueryStringValue)("link_account_response")) {
                    case "yes":
                    default:
                        return (0,
                        i.callbackWrapper)((async () => ({
                            response: "yes"
                        })), e);
                    case "no":
                        return (0,
                        i.callbackWrapper)((async () => ({
                            response: "no"
                        })), e);
                    case "logged_out":
                        return (0,
                        i.callbackWrapper)((async () => {
                            throw new Error("userNotAuthenticated")
                        }
                        ), e)
                    }
                }
                getUser(e) {
                    switch (this.logger.log("Requesting user object (local)"),
                    (0,
                    i.getQueryStringValue)("user_response")) {
                    case "user1":
                    default:
                        return (0,
                        i.callbackWrapper)((async () => this.demoUser1), e);
                    case "user2":
                        return (0,
                        i.callbackWrapper)((async () => this.demoUser2), e);
                    case "logged_out":
                        return (0,
                        i.callbackWrapper)((async () => null), e)
                    }
                }
                getSystemInfo(e) {
                    return this.logger.log("Requesting system info (local)"),
                    (0,
                    i.callbackWrapper)((async () => this.systemInfo), e)
                }
                getUserToken(e) {
                    switch (this.logger.log("Requesting user token (local)"),
                    (0,
                    i.getQueryStringValue)("token_response")) {
                    case "user1":
                    default:
                        return (0,
                        i.callbackWrapper)((async () => this.user1Token), e);
                    case "user2":
                        return (0,
                        i.callbackWrapper)((async () => this.user2Token), e);
                    case "expired_token":
                        return (0,
                        i.callbackWrapper)((async () => this.expiredToken), e);
                    case "logged_out":
                        return (0,
                        i.callbackWrapper)((async () => {
                            throw new Error("userNotAuthenticated")
                        }
                        ), e)
                    }
                }
                getXsollaUserToken(e) {
                    return this.logger.log("Requesting Xsolla user token (local)"),
                    (0,
                    i.callbackWrapper)((async () => "Demo local Xsolla token"), e)
                }
                addScore(e, t) {
                    return this.logger.log("Requesting to add score (local)", e),
                    (0,
                    i.callbackWrapper)((async () => {}
                    ), t)
                }
                addScoreEncrypted(e, t, n) {
                    return this.logger.log("Requesting to add score (local). Score: ", e, "Encrypted score: ", t),
                    (0,
                    i.callbackWrapper)((async () => {}
                    ), n)
                }
                addAuthListener(e) {}
                removeAuthListener(e) {}
                isUserAccountAvailable(e) {
                    return this.logger.log("Requesting user account available (local)"),
                    (0,
                    i.callbackWrapper)((async () => !0), e)
                }
            }
        },
        245: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(514)
              , i = n(286);
            t.default = class {
                constructor(e) {
                    this.sdkInitializer = e,
                    this.initCallbacks = [],
                    this.throttledHappyTime = (0,
                    r.throttledMethod)((async e => (await this.sdkInitializer.ensureInit(),
                    this.sdkInitializer.getInstance().game.happytime(e))), 1e3),
                    this.throttledGameplayStart = (0,
                    r.throttledMethod)((async e => (await this.sdkInitializer.ensureInit(),
                    this.sdkInitializer.getInstance().game.gameplayStart(e))), 1e3),
                    this.throttledGameplayStop = (0,
                    r.throttledMethod)((async e => (await this.sdkInitializer.ensureInit(),
                    this.sdkInitializer.getInstance().game.gameplayStop(e))), 1e3)
                }
                async getEnvironment(e) {
                    return await this.sdkInitializer.ensureInit(),
                    this.sdkInitializer.getInstance().getEnvironment(e)
                }
                async isQaTool(e) {
                    return await this.sdkInitializer.ensureInit(),
                    this.sdkInitializer.getInstance().isQaTool(e)
                }
                init() {}
                addInitCallback(e) {
                    this.initCallbacks.push(e)
                }
                forwardInitCallbacks(e) {
                    this.initCallbacks.forEach((t => e.addInitCallback(t))),
                    this.initCallbacks = []
                }
                async syncUnityGameData(e) {
                    return await this.sdkInitializer.ensureInit(),
                    this.sdkInitializer.getInstance().syncUnityGameData(e)
                }
                get ad() {
                    return {
                        requestAd: async (e, t) => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().ad.requestAd(e, t)),
                        hasAdblock: async e => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().ad.hasAdblock(e))
                    }
                }
                get banner() {
                    return {
                        requestBanner: async (e, t) => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().banner.requestBanner(e, t)),
                        requestResponsiveBanner: async (e, t) => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().banner.requestResponsiveBanner(e, t)),
                        requestOverlayBanners: async (e, t) => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().banner.requestOverlayBanners(e, t)),
                        clearBanner: async e => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().banner.clearBanner(e)),
                        clearAllBanners: async () => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().banner.clearAllBanners())
                    }
                }
                get game() {
                    return {
                        happytime: this.throttledHappyTime,
                        gameplayStart: this.throttledGameplayStart,
                        gameplayStop: this.throttledGameplayStop,
                        sdkGameLoadingStart: async e => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().game.sdkGameLoadingStart(e)),
                        sdkGameLoadingStop: async e => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().game.sdkGameLoadingStop(e)),
                        inviteLink: async (e, t) => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().game.inviteLink(e, t)),
                        showInviteButton: async (e, t) => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().game.showInviteButton(e, t)),
                        hideInviteButton: async () => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().game.hideInviteButton()),
                        setScreenshotHandlerAsync: async e => (await this.sdkInitializer.ensureInit(),
                        console.log("[Crazygames SDK (JS)] Screenshot handlers are outdated. Please update to the latest Unity SDK."),
                        () => {}
                        ),
                        setScreenshotHandler: e => (console.log("[Crazygames SDK (JS)] Screenshot handlers are outdated. Please update to the latest Unity SDK."),
                        () => {}
                        ),
                        getInviteParam: async (e, t) => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().game.getInviteParam(e, t))
                    }
                }
                get user() {
                    return {
                        getUser: async e => ((0,
                        i.showBetaWarning)("getUser"),
                        await this.sdkInitializer.ensureInit(),
                        await this.sdkInitializer.getInstance().user.getUser(e)),
                        getSystemInfo: async e => (await this.sdkInitializer.ensureInit(),
                        await this.sdkInitializer.getInstance().user.getSystemInfo(e)),
                        showAuthPrompt: async e => ((0,
                        i.showBetaWarning)("showAuthPrompt"),
                        await this.sdkInitializer.ensureInit(),
                        await this.sdkInitializer.getInstance().user.showAuthPrompt(e)),
                        showAccountLinkPrompt: async e => ((0,
                        i.showBetaWarning)("showAccountLinkPrompt"),
                        await this.sdkInitializer.ensureInit(),
                        await this.sdkInitializer.getInstance().user.showAccountLinkPrompt(e)),
                        addAuthListener: async e => {
                            await this.sdkInitializer.ensureInit(),
                            this.sdkInitializer.getInstance().user.addAuthListener(e)
                        }
                        ,
                        removeAuthListener: async e => {
                            await this.sdkInitializer.ensureInit(),
                            this.sdkInitializer.getInstance().user.removeAuthListener(e)
                        }
                        ,
                        getUserToken: async e => ((0,
                        i.showBetaWarning)("getUserToken"),
                        await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().user.getUserToken(e)),
                        getXsollaUserToken: async e => ((0,
                        i.showBetaWarning)("getXsollaUserToken"),
                        await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().user.getXsollaUserToken(e)),
                        addScore: async (e, t) => ((0,
                        i.showBetaWarning)("addScore"),
                        await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().user.addScore(e, t)),
                        addScoreEncrypted: async (e, t, n) => ((0,
                        i.showBetaWarning)("addScoreEncrypted"),
                        await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().user.addScoreEncrypted(e, t, n)),
                        isUserAccountAvailable: async e => (await this.sdkInitializer.ensureInit(),
                        this.sdkInitializer.getInstance().user.isUserAccountAvailable(e))
                    }
                }
            }
        }
        ,
        724: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.SDKInitializer = void 0;
            const i = r(n(273))
              , a = r(n(942))
              , s = r(n(799))
              , o = n(823)
              , u = r(n(176))
              , l = r(n(983))
              , c = r(n(245))
              , h = n(719)
              , d = n(412)
              , f = r(n(767));
            t.SDKInitializer = class {
                constructor() {
                    this.proxyInstance = new c.default(this),
                    this.initResolvers = [],
                    this.crazyGamesCheckResolver = () => {}
                    ,
                    this.isOnCrazyGames = !1,
                    this.logger = new f.default("none"),
                    this.initializeSDK()
                }
                async isYandex() {
                    try {
                        return window.location.origin.endsWith("yandex.net") || "true" === (0,
                        o.getQueryStringValue)("useYandexSdk")
                    } catch (e) {
                        return console.error("Crazygames SDK failed to detect Yandex domain", e),
                        !1
                    }
                }
                async isFacebook() {
                    try {
                        return window.location.origin.endsWith("apps.fbsbx.com") || "true" === (0,
                        o.getQueryStringValue)("useFacebookSdk")
                    } catch (e) {
                        return console.error("Crazygames SDK failed to detect Facebook domain", e),
                        !1
                    }
                }
                async isLocalhost() {
                    if (["http://localhost:4000/gameframe-unity56-standalone/", "http://localhost:4000/gameframe-unity56/", "http://localhost:4000/gameframe-standalone/", "http://localhost:4000/gameframe/"].some((e => window.location.href.startsWith(e))))
                        return !1;
                    const e = ["localhost", "127.0.0.1", "preview.construct.net"].includes(window.location.hostname) || "true" === (0,
                    o.getQueryStringValue)("useLocalSdk");
                    return e && await (0,
                    h.wait)(500),
                    e
                }
                async isCrazyGames() {
                    window.addEventListener("message", (e => this.crazyGamesGfCheckListener(e)), !1);
                    const e = {
                        type: "checkCrazyGamesGF"
                    };
                    window.postMessage(e, "*"),
                    window.parent.postMessage(e, "*"),
                    window.parent.parent.postMessage(e, "*"),
                    window.parent.parent.parent.postMessage(e, "*");
                    const t = new Promise((e => {
                        this.crazyGamesCheckResolver = e
                    }
                    ));
                    return await Promise.race([t, (0,
                    h.wait)(3e3)]),
                    window.removeEventListener("message", this.crazyGamesGfCheckListener),
                    this.isOnCrazyGames
                }
                crazyGamesGfCheckListener(e) {
                    "crazyGamesGFConfirmation" === e.data.type && (this.isOnCrazyGames = !0,
                    this.crazyGamesCheckResolver())
                }
                getProxy() {
                    return this.proxyInstance
                }
                getInstance() {
                    return this.realInstance
                }
                async initializeSDK() {
                    const [e,t,n,r] = await Promise.all([this.isCrazyGames(), this.isLocalhost(), this.isFacebook(), this.isYandex()]);
                    t ? (f.default.forceEnable = !0,
                    this.realInstance = new a.default) : this.realInstance = e ? new i.default : r ? new s.default : n ? new l.default : new u.default;
                    const o = window.crazySdkInitOptions
                      , c = await this.realInstance.getEnvironment()
                      , h = d.SDK_VERSION;
                    console.log("CrazyGames HTML SDK", {
                        environment: c,
                        version: h,
                        initOptions: o
                    }),
                    this.proxyInstance.forwardInitCallbacks(this.realInstance),
                    this.realInstance.init(o),
                    this.onInitialized()
                }
                onInitialized() {
                    this.logger.log(`SDK initialized, forwarding ${this.initResolvers.length} cached calls`),
                    this.initResolvers.length > 0 && (this.initResolvers.forEach((e => e())),
                    this.initResolvers = [])
                }
                async ensureInit() {
                    return this.realInstance ? Promise.resolve() : new Promise((e => {
                        this.initResolvers.push((async () => {
                            e()
                        }
                        ))
                    }
                    ))
                }
            }
        },
        769: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(823)
              , a = n(871)
              , s = r(n(767));
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.requestInProgress = !1,
                    this.throttleMidroll = !1,
                    this.throttleRewarded = !1,
                    this.logger = new s.default("ad"),
                    this._onRewardedCalled = !1
                }
                async requestAd(e, t) {
                    if (this.logger.log(`Requesting ${e} ad`),
                    this.requestInProgress && (null == t ? void 0 : t.adError)) {
                        const e = "An ad request is already in progress";
                        (0,
                        i.wrapUserFn)(t.adError)(e, {
                            reason: "other",
                            message: e
                        })
                    }
                    return this.requestInProgress = !0,
                    "rewarded" === e ? this.requestRewardedAd(t) : this.requestMidrollAd(t)
                }
                hasAdblock(e) {
                    return (0,
                    i.callbackWrapper)(( () => Promise.resolve(!1)), e)
                }
                handleAdError(e, t) {
                    this.requestInProgress = !1,
                    (null == t ? void 0 : t.adError) ? (0,
                    i.wrapUserFn)(t.adError)(e.toString(), {
                        reason: "other",
                        message: e.toString()
                    }) : (null == t ? void 0 : t.adFinished) && (0,
                    i.wrapUserFn)(t.adFinished)()
                }
                handleAdFinished(e) {
                    this.requestInProgress = !1,
                    (null == e ? void 0 : e.adFinished) && (0,
                    i.wrapUserFn)(e.adFinished)()
                }
                handleAdStarted(e) {
                    (null == e ? void 0 : e.adStarted) && (0,
                    i.wrapUserFn)(null == e ? void 0 : e.adStarted)()
                }
                async requestMidrollAd(e) {
                    const t = await this.sdk.ensureInit();
                    this.throttleMidroll ? this.handleAdError(`Please wait ${a.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS / 1e3} seconds between two midroll ads`, e) : t.adv.showFullscreenAdv({
                        callbacks: {
                            onOpen: () => {
                                this.throttleMidroll = !0,
                                setTimeout(( () => this.throttleMidroll = !1), a.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS),
                                this.handleAdStarted(e)
                            }
                            ,
                            onClose: () => {
                                this.handleAdFinished(e)
                            }
                            ,
                            onError: t => {
                                this.handleAdError(t, e)
                            }
                        }
                    })
                }
                async requestRewardedAd(e) {
                    const t = await this.sdk.ensureInit();
                    this.throttleRewarded ? this.handleAdError(`Please wait ${a.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS / 1e3} seconds between two rewarded ads`, e) : (this._onRewardedCalled = !1,
                    t.adv.showRewardedVideo({
                        callbacks: {
                            onOpen: () => {
                                this.throttleRewarded = !0,
                                setTimeout(( () => this.throttleRewarded = !1), a.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS),
                                this.handleAdStarted(e)
                            }
                            ,
                            onRewarded: () => {
                                this._onRewardedCalled || (this._onRewardedCalled = !0,
                                this.handleAdFinished(e))
                            }
                            ,
                            onClose: () => {
                                this._onRewardedCalled || (this._onRewardedCalled = !0,
                                this.handleAdFinished(e))
                            }
                            ,
                            onError: t => {
                                this.handleAdError(t, e)
                            }
                        }
                    }))
                }
            }
        },
        799: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(823)
              , a = n(871)
              , s = r(n(769))
              , o = r(n(767));
            t.default = class {
                constructor() {
                    this.initState = a.INIT_STATE.UNINITIALIZED,
                    this.yandexPromise = null,
                    this._ad = new s.default(this),
                    this.bannerLogger = new o.default("banner"),
                    this.mainLogger = new o.default("none")
                }
                init() {
                    this.initState === a.INIT_STATE.UNINITIALIZED && this.installYandex()
                }
                async addInitCallback(e) {
                    var t;
                    await this.ensureInit(),
                    e({
                        gameLink: "",
                        rafvertizingUrl: "",
                        useTestAds: !1,
                        systemInfo: {
                            countryCode: "",
                            browser: {
                                name: "",
                                version: ""
                            },
                            os: {
                                name: "",
                                version: ""
                            },
                            device: "desktop",
                            applicationType: "web"
                        },
                        gameId: "",
                        locale: (null === (t = this.yandexSDKObj) || void 0 === t ? void 0 : t.environment.i18n.lang) || "en-US",
                        userAccountAvailable: !1,
                        isQaTool: !1
                    })
                }
                async isQaTool(e) {
                    return (0,
                    i.callbackWrapper)((async () => !1), e)
                }
                async getEnvironment(e) {
                    return (0,
                    i.callbackWrapper)((async () => "yandex"), e)
                }
                get ad() {
                    return this._ad
                }
                get banner() {
                    return {
                        requestBanner: (e, t) => {
                            const n = "Responsive banner not supported with YandexSDK";
                            return this.bannerLogger.error(n),
                            (0,
                            i.callbackWrapper)((async () => {
                                throw new Error(n)
                            }
                            ), t)
                        }
                        ,
                        requestResponsiveBanner: (e, t) => {
                            const n = "Responsive banner not supported with YandexSDK";
                            return this.bannerLogger.error(n),
                            (0,
                            i.callbackWrapper)((async () => {
                                throw new Error(n)
                            }
                            ), t)
                        }
                        ,
                        requestOverlayBanners(e, t) {
                            throw new Error("Overlay banners not supported with Yandex")
                        },
                        clearBanner(e) {
                            throw new Error("Clearing banners is supported with Yandex")
                        },
                        clearAllBanners() {
                            throw new Error("Clearing banners is supported with Yandex")
                        }
                    }
                }
                get game() {
                    return {
                        happytime: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Happytime is not supported with YandexSDK")
                        }
                        ), e),
                        gameplayStart: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Gameplay start is not supported with YandexSDK")
                        }
                        ), e),
                        gameplayStop: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Gameplay stop is not supported with YandexSDK")
                        }
                        ), e),
                        sdkGameLoadingStart: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Game load start from SDK is not supported with YandexSDK")
                        }
                        ), e),
                        sdkGameLoadingStop: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Game load stop from SDK is not supported with YandexSDK")
                        }
                        ), e),
                        inviteLink: (e, t) => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Invite link is not supported with YandexSDK")
                        }
                        ), t),
                        showInviteButton: (e, t) => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Invite link is not supported with YandexSDK")
                        }
                        ), t),
                        hideInviteButton: () => {
                            throw new a.SDKError("Invite button is not supported with YandexSDK")
                        }
                        ,
                        setScreenshotHandlerAsync: async e => () => {}
                        ,
                        setScreenshotHandler: e => () => {}
                        ,
                        getInviteParam: (e, t) => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("Invite link is not supported with YandexSDK")
                        }
                        ), t)
                    }
                }
                get user() {
                    return {
                        getUser: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No user available with Yandex")
                        }
                        ), e),
                        getSystemInfo: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No system info available with Yandex")
                        }
                        ), e),
                        showAuthPrompt: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No user available with Yandex")
                        }
                        ), e),
                        showAccountLinkPrompt: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No account linking available with Yandex")
                        }
                        ), e),
                        getUserToken: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No user token available with Yandex.")
                        }
                        ), e),
                        getXsollaUserToken: e => (0,
                        i.callbackWrapper)(( () => {
                            throw new a.SDKError("No Xsolla user token available with Yandex.")
                        }
                        ), e),
                        addScore: (e, t) => (0,
                        i.callbackWrapper)((async () => {
                            throw new a.SDKError("Game score is not supported with Yandex")
                        }
                        ), t),
                        addScoreEncrypted: (e, t, n) => (0,
                        i.callbackWrapper)((async () => {
                            throw new a.SDKError("Game score is not supported with Yandex")
                        }
                        ), n),
                        addAuthListener(e) {},
                        removeAuthListener(e) {},
                        isUserAccountAvailable: e => (0,
                        i.callbackWrapper)((async () => !1), e)
                    }
                }
                syncUnityGameData(e) {
                    return (0,
                    i.callbackWrapper)(( () => {
                        throw new a.SDKError("syncUnityGameData is not supported with YandexSDK")
                    }
                    ), e)
                }
                async ensureInit() {
                    return this.yandexSDKObj ? this.yandexSDKObj : this.initState !== a.INIT_STATE.UNINITIALIZED && this.yandexPromise ? (this.yandexSDKObj = await this.yandexPromise,
                    this.yandexSDKObj) : this.installYandex()
                }
                async installYandex() {
                    this.mainLogger.log("Initializing"),
                    this.initState = a.INIT_STATE.REQUESTED,
                    await (0,
                    i.loadScript)("https://yandex.ru/games/sdk/v2");
                    const e = window.YaGames.init();
                    this.yandexPromise = e;
                    const t = await Promise.race([e, new Promise(( (e, t) => {
                        setTimeout(( () => {
                            t("Yandex SDK was unable to init within the timeout")
                        }
                        ), 5e3)
                    }
                    ))]);
                    return this.yandexSDKObj = t,
                    this.mainLogger.log("Yandex SDK initialized"),
                    this.initState = a.INIT_STATE.INITIALIZED,
                    t
                }
            }
        },
        871: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS = t.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS = t.INIT_STATE = t.SDKError = void 0;
            class n extends Error {
            }
            var r;
            t.SDKError = n,
            function(e) {
                e[e.UNINITIALIZED = 0] = "UNINITIALIZED",
                e[e.REQUESTED = 1] = "REQUESTED",
                e[e.INITIALIZED = 2] = "INITIALIZED"
            }(r || (t.INIT_STATE = r = {})),
            t.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS = 18e4,
            t.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS = 5e3
        }
        ,
        81: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ContainerIdToInnerId = t.BannerError = void 0,
            t.getBannerContainer = async function(e, n) {
                var r;
                if (!e)
                    throw new o("Container id not specified");
                const i = await (0,
                a.getContainerInfo)(e)
                  , {visibleState: s} = i;
                if (n) {
                    if ("notCreated" === s)
                        throw new o("Container is not present on the page");
                    if ("notVisible" === s)
                        throw new o("Container is not entirely visible on the page")
                }
                const u = (0,
                t.ContainerIdToInnerId)(e);
                if (!document.getElementById(u)) {
                    const t = document.createElement("div");
                    t.id = u,
                    t.classList.add("crazygames-banner-container"),
                    null === (r = document.getElementById(e)) || void 0 === r || r.append(t)
                }
                return {
                    mainContainerId: e,
                    innerContainerId: u,
                    containerInfo: i
                }
            }
            ,
            t.requestInGameBanner = async function(e) {
                const {CrazygamesAds: t} = window;
                if (s.verbose("Requesting banner to CrazyAds", e),
                !t) {
                    const e = "CrazygamesAds not found, maybe using an adblocker.";
                    throw s.verbose(e),
                    new Error(e)
                }
                return t.requestAds(e.request, e.options)
            }
            ,
            t.getBannerSizeAsText = function(e) {
                return `${e.width}x${e.height}`
            }
            ;
            const i = r(n(767))
              , a = n(492)
              , s = new i.default("banner");
            class o extends Error {
            }
            t.BannerError = o,
            t.ContainerIdToInnerId = e => `${e}-crazygames-inner`
        },
        951: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.loadAdsIfNeeded = function(e) {
                return window.CrazygamesAds ? Promise.resolve() : function(e) {
                    return i || (i = (0,
                    r.loadScript)(e).then(( () => {
                        window.CrazygamesAds.initAds({
                            analyticsEventHandler: () => {}
                        })
                    }
                    )),
                    i)
                }(e)
            }
            ;
            const r = n(823);
            let i
        }
        ,
        314: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.renderFakeBanner = function(e) {
                s.log("Rendering fake banner", e);
                const t = document.getElementById(e.id);
                if (!t)
                    return;
                let n = e.width
                  , r = e.height;
                if (e.isResponsive) {
                    const e = (0,
                    i.default)(u).find((e => n >= e.width && r >= e.height));
                    if (!e)
                        throw new a.BannerError(`No available banner size has been found for container ${t.id}`);
                    n = e.width,
                    r = e.height
                }
                t.innerHTML = "";
                const l = document.createElement("img");
                l.setAttribute("src", `${o}${n}x${r}.png`),
                l.setAttribute("width", `${n}px`),
                l.setAttribute("height", `${r}px`),
                t.appendChild(l),
                t.style.backgroundColor = "rgb(191, 173, 255, 0.25)"
            }
            ;
            const i = r(n(198))
              , a = n(81)
              , s = new (r(n(767)).default)("banner")
              , o = "https://images.crazygames.com/crazygames-sdk/"
              , u = [{
                width: 970,
                height: 90
            }, {
                width: 320,
                height: 50
            }, {
                width: 160,
                height: 600
            }, {
                width: 336,
                height: 280
            }, {
                width: 728,
                height: 90
            }, {
                width: 300,
                height: 600
            }, {
                width: 468,
                height: 60
            }, {
                width: 970,
                height: 250
            }, {
                width: 300,
                height: 250
            }, {
                width: 250,
                height: 250
            }, {
                width: 120,
                height: 600
            }]
        },
        414: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.OverlayBanner = void 0;
            const r = n(486);
            t.OverlayBanner = class {
                constructor(e, t, n, i) {
                    this.onWindowResize = () => {
                        this.setContainerPosition()
                    }
                    ,
                    this.containerElement = document.createElement("div"),
                    this.containerId = "overlay-banner-" + e.id,
                    this.containerElement.id = this.containerId,
                    this.bannerRequest = e,
                    this.containerElement.style.position = "absolute",
                    this.containerElement.style.transformOrigin = "top left",
                    this.containerElement.style.userSelect = "none";
                    const a = document.getElementById("gfMainContainer");
                    a ? a.appendChild(this.containerElement) : document.body.appendChild(this.containerElement);
                    const s = e.size.split("x");
                    this.onScreenSize = {
                        width: parseInt(s[0]),
                        height: parseInt(s[1])
                    },
                    this.bannerModule = n,
                    this.callback = i,
                    this.disableBannerCheck = t,
                    this.debouncedWindowResize = (0,
                    r.debounce)(this.onWindowResize, 200),
                    window.addEventListener("resize", this.debouncedWindowResize),
                    this.renderBanner()
                }
                isVisible() {
                    const e = this.computeOverlay();
                    if (this.disableBannerCheck)
                        return !0;
                    const t = e.left + e.width * e.scale
                      , n = e.top + e.height * e.scale
                      , r = this.getGameContainerDimensions();
                    return !(e.top < -4 || e.left < -4 || t > window.innerWidth + 4 || n > r.height + 4)
                }
                computeOverlay() {
                    const e = this.getScale()
                      , t = this.getOnScreenPosition();
                    return {
                        width: this.onScreenSize.width,
                        height: this.onScreenSize.height,
                        top: t.y,
                        left: t.x,
                        scale: e
                    }
                }
                getGameContainerDimensions() {
                    const e = document.getElementById("game-container");
                    return e ? {
                        width: e.clientWidth,
                        height: e.clientHeight
                    } : {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                getScale() {
                    return this.getGameContainerDimensions().width / 922
                }
                getOnScreenPosition() {
                    const e = this.getGameContainerDimensions()
                      , t = this.bannerRequest.anchor.x * e.width
                      , n = (1 - this.bannerRequest.anchor.y) * e.height
                      , r = this.getScale()
                      , i = this.onScreenSize
                      , a = i.width * r
                      , s = i.height * r
                      , o = this.bannerRequest.pivot || {
                        x: .5,
                        y: .5
                    };
                    return {
                        x: t + this.bannerRequest.position.x * r - a * o.x,
                        y: n - this.bannerRequest.position.y * r - s * (1 - o.y)
                    }
                }
                setContainerPosition() {
                    const e = this.computeOverlay();
                    this.containerElement.style.width = `${e.width}px`,
                    this.containerElement.style.height = `${e.height}px`,
                    this.containerElement.style.top = `${e.top}px`,
                    this.containerElement.style.left = `${e.left}px`,
                    this.containerElement.style.transform = `scale(${e.scale})`,
                    this.containerElement.style.display = "block"
                }
                renderBanner() {
                    if (this.setContainerPosition(),
                    !this.isVisible())
                        return this.callback(this.bannerRequest.id, "bannerError", "bannerNotEntirelyVisible"),
                        void (this.containerElement.style.display = "none");
                    this.bannerModule.requestBanner({
                        id: this.containerId,
                        ...this.onScreenSize
                    }, ( (e, t) => {
                        e ? this.callback(this.bannerRequest.id, "bannerError", e) : this.callback(this.bannerRequest.id, "bannerRendered")
                    }
                    ))
                }
                destroy() {
                    this.containerElement && this.containerElement.remove(),
                    window.removeEventListener("resize", this.debouncedWindowResize)
                }
            }
        }
        ,
        767: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = "border-radius: 3px; padding: 0px 4px; color: white;"
              , r = ["%cHTML5 SDK", `background-color: #6842FF; ${n}`];
            class i {
                constructor(e) {
                    this.badge = e,
                    this.debugFlagPresent = window.location.href.includes("sdk_debug=true")
                }
                isEnabled() {
                    return this.debugFlagPresent || i.forceEnable
                }
                log(e, ...t) {
                    if (!this.isEnabled())
                        return;
                    if (!this.isEnabled())
                        return;
                    if ("none" === this.badge)
                        return console.log(...r, e, t.length > 0 ? t : "");
                    let i = [];
                    switch (this.badge) {
                    case "game":
                        i = ["%cGAME", `background-color: #d48f06; ${n}`];
                        break;
                    case "user":
                        i = ["%cUSER", `background-color: #3498DB; ${n}`];
                        break;
                    case "ad":
                        i = ["%cAD", `background-color: #008A00; ${n}`];
                        break;
                    case "banner":
                        i = ["%cBANNER", `background-color: #00ABA9; ${n}`]
                    }
                    console.log(`${r[0]}%c ${i[0]}`, r[1], "", i[1], e, t.length > 0 ? t : "")
                }
                verbose(e, ...t) {
                    console.debug(...r, e, t.length > 0 ? t : "")
                }
                error(e, ...t) {
                    console.error(...r, e, t.length > 0 ? t : "")
                }
            }
            i.forceEnable = !1,
            t.default = i
        }
        ,
        492: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getContainerInfo = async function(e) {
                const t = document.getElementById(e);
                return t ? async function(e) {
                    return new Promise((t => {
                        const r = new IntersectionObserver(( ([e]) => {
                            const i = e.intersectionRatio > n;
                            t({
                                visibleState: i ? "visible" : "notVisible",
                                size: {
                                    width: Math.ceil(e.boundingClientRect.width),
                                    height: Math.ceil(e.boundingClientRect.height)
                                }
                            }),
                            r.disconnect()
                        }
                        ));
                        r.observe(e)
                    }
                    ))
                }(t) : {
                    visibleState: "notCreated",
                    size: {
                        width: 0,
                        height: 0
                    }
                }
            }
            ;
            const n = .95
        }
        ,
        823: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getQueryStringValue = function(e) {
                return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(e).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$","i"), "$1"))
            }
            ,
            t.addStyle = function(e) {
                const t = document.createElement("style");
                t.textContent = e,
                document.head.append(t)
            }
            ,
            t.loadScript = function(e) {
                return new Promise(( (t, n) => {
                    const r = document.createElement("script");
                    r.onload = () => t(),
                    r.onerror = e => n(e),
                    r.src = e,
                    r.async = !0,
                    document.head.appendChild(r)
                }
                ))
            }
            ,
            t.callbackWrapper = async function(e, t) {
                return new Promise((async (n, r) => {
                    try {
                        const r = await e();
                        t && a(t)(void 0, r),
                        n(r)
                    } catch (e) {
                        i.error(e),
                        t ? (a(t)(e.message || e.toString(), void 0),
                        n()) : r(e.message || e.toString())
                    }
                }
                ))
            }
            ,
            t.wrapUserFn = a;
            const i = new (r(n(767)).default)("none");
            function a(e) {
                return (...t) => {
                    try {
                        e(...t)
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
        },
        659: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.generateInviteLink = function(e, t) {
                if (!t)
                    return "An error happened when generating invite link";
                const n = new URL(t)
                  , r = n.searchParams;
                return r.set("czy_invite", "true"),
                r.set("utm_source", "invite"),
                Object.keys(e).forEach((t => {
                    r.set(t, e[t])
                }
                )),
                n.toString()
            }
        }
        ,
        514: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.throttledMethod = void 0,
            t.throttledMethod = (e, t) => {
                let n = 0;
                return (...r) => {
                    const i = (new Date).getTime();
                    return i - n > t ? (n = i,
                    e(...r)) : void 0
                }
            }
        }
        ,
        719: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.wait = function(e) {
                return new Promise((t => setTimeout(t, e)))
            }
        }
        ,
        286: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.showBetaWarning = function(e) {
                n.includes(e) || (n.push(e),
                console.warn(`The ${e} function is still in BETA, please get in touch with us if you are interested in using it.`),
                ["getUser", "showAuthPrompt"].includes(e) && console.warn("From the 9th of October, the 'id' field will be removed from the user object. If you need to send the user id to your server, check the 'getUserToken' method and our docs. If you are using the 'id' field please update your game(s) and remove the usages."))
            }
            ;
            const n = []
        }
        ,
        412: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.SDK_VERSION = void 0,
            t.SDK_VERSION = "2.9.0"
        }
    }
      , t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i)
            return i.exports;
        var a = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n),
        a.loaded = !0,
        a.exports
    }
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.nmd = e => (e.paths = [],
    e.children || (e.children = []),
    e),
    ( () => {
        "use strict";
        const e = n(823)
          , t = (new (n(724).SDKInitializer)).getProxy();
        t.init(window.crazySdkInitOptions),
        window.CrazyGames = {
            SDK: t
        },
        (0,
        e.addStyle)("\n.crazygames-banner-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n")
    }
    )()
}
)();
