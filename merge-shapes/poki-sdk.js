(() => {
    "use strict";
    const e = e => {
            const t = RegExp(`[?&]${e}=([^&]*)`).exec(window.location.search);
            return t && decodeURIComponent(t[1].replace(/\+/g, " "))
        },
        t = "kids" === e("tag"),
        o = !!window.adBridge,
        i = "yes" === e("hoist") || "yes" === e("gdhoist");
    const r = new class {
        #e = [];
        enqueue(e, o, i, r) {
            const a = {
                fn: e,
                args: o || [],
                resolveFn: i,
                rejectFn: r
            };
            t ? i && i(!0) : this.#e.push(a)
        }
        dequeue() {
            for (; this.#e.length > 0;) {
                const e = this.#e.shift(),
                    {
                        fn: t,
                        args: o
                    } = e;
                if ("function" == typeof window.PokiSDK[t])
                    if (e?.resolveFn || e?.rejectFn) {
                        const i = "init" === t;
                        if (window.PokiSDK[t](...o).catch(((...t) => {
                                "function" == typeof e.rejectFn && e.rejectFn(...t), i && setTimeout((() => {
                                    this.dequeue()
                                }), 0)
                            })).then(((...t) => {
                                "function" == typeof e.resolveFn && e.resolveFn(...t), i && setTimeout((() => {
                                    this.dequeue()
                                }), 0)
                            })), i) break
                    } else window.PokiSDK[t](...o);
                else console.error(`%cPOKI:%c cannot execute ${t}`, "font-weight: bold", "")
            }
        }
        init = (e = {}, t = {}) => new Promise(((o, i) => {
            this.enqueue("init", [e, t], o, i)
        }));
        rewardedBreak = () => new Promise((e => {
            e(!1)
        }));
        commercialBreak = e => new Promise(((t, o) => {
            this.enqueue("commercialBreak", [e], t, o)
        }));
        displayAd = (e, t, o, i) => {
            i && i(!0), o && o()
        };
        withArguments = e => (...t) => {
            this.enqueue(e, t)
        };
        handleAutoResolvePromise = () => new Promise((e => {
            e()
        }));
        throwNotLoaded = () => {
            console.debug("PokiSDK is not loaded yet. Not all methods are available.")
        };
        doNothing = () => {};
        getUser = async () => new Promise(((e, t) => {
            this.enqueue("getUser", [], e, t)
        }));
        login = async () => new Promise(((e, t) => {
            this.enqueue("login", [], e, t)
        }))
    };
    if (window.PokiSDK = {
            init: r.init,
            initWithVideoHB: r.init,
            commercialBreak: r.commercialBreak,
            rewardedBreak: r.rewardedBreak,
            displayAd: r.displayAd,
            destroyAd: r.doNothing,
            getLeaderboard: r.handleAutoResolvePromise,
            shareableURL: () => new Promise(((e, t) => {
                t()
            })),
            getURLParam: t => e(`gd${t}`) || e(t) || "",
            getLanguage: () => navigator.language.toLowerCase().split("-")[0],
            isAdBlocked: () => {}
        }, ["captureError", "customEvent", "gameInteractive", "gameLoadingFinished", "gameLoadingProgress", "gameLoadingStart", "gameplayStart", "gameplayStop", "happyTime", "logError", "muteAd", "roundEnd", "roundStart", "sendHighscore", "setDebug", "setDebugTouchOverlayController", "setLogging", "setPlayerAge", "setPlaytestCanvas", "enableEventTracking", "playtestSetCanvas", "playtestCaptureHtmlOnce", "playtestCaptureHtmlForce", "playtestCaptureHtmlOn", "playtestCaptureHtmlOff"].forEach((e => {
            window.PokiSDK[e] = r.withArguments(e)
        })), !o && !t) try {
        let t = localStorage.getItem("poki_events_user_id");
        t || (t = crypto.randomUUID(), "GB" !== e("country") && localStorage.setItem("poki_events_user_id", t));
        const o = e("game_id"),
            i = e("game_version_id"),
            r = "1" === localStorage.getItem("poki_pbf"),
            a = e => /^[-+]?\d+$/.test(e.trim()),
            n = (e, t, o) => "game" === e && "loading" === t && "start" === o || ("game" === e && "loading" === t && "complete" === o || ("game" === e && "launch" === t && "" === o || ("game" === e && "meaningful" === t && "first" === o || ("tutorial" === e && "start" === t && "" === o || ("tutorial" === e && "complete" === t && "" === o || (!("progress" !== e || "start" !== t || !a(o)) || (!("progress" !== e || "complete" !== t || !a(o)) || (!("progress" !== e || "fail" !== t || !a(o)) || ("rewarded" === e && "visible" === t || ("rewarded" === e && "click" === t || (!("rewarded" !== e || "start" !== t || !a(o)) || (!("rewarded" !== e || "complete" !== t || !a(o)) || (!("midroll" !== e || "start" !== t || !a(o)) || (!("midroll" !== e || "complete" !== t || !a(o)) || "custom" === e))))))))))))));
        window.PokiSDK.measure = (e, a, s) => {
            "level" === (e = `${e}`) && (e = "progress"), n(e, a = void 0 === a ? "" : `${a}`, s = void 0 === s ? "" : `${s}`) ? (window.pokiMeasureBuildin = !0, window.parent.postMessage({
                type: "pokiMessageEvent",
                content: {
                    event: "pokiTrackingMeasure",
                    data: {
                        category: e,
                        action: a,
                        label: s
                    }
                }
            }, "*"), o && i && fetch("https://t.poki.io/game-event", {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify({
                    category: e,
                    action: a,
                    label: s,
                    p4d_game_id: o,
                    p4d_version_id: i,
                    time_on_page: Math.floor(performance.now()),
                    user_id: t,
                    user_new: !r
                }),
                mode: "no-cors",
                keepalive: !0,
                credentials: "omit"
            }).catch((e => {
                console.warn("%cPOKI:%c failed to measure", "font-weight: bold", "", e)
            }))) : console.warn(`%cPOKI:%c measure() event not allowed: ${e}-${a}-${s}`, "font-weight: bold", "")
        }, window.PokiSDK.measure("game", "loading", "start"), window.pokiMeasureBuildin = !1
    } catch (e) {
        console.error(e), window.PokiSDK.measure = () => {}
    }
    const a = (() => {
            const r = window.pokiSDKVersion || e("ab") || "5c49ea812255a126bbbc05aa1f7019fba3325cef";
            let a = `poki-sdk-core-${r}.js`;
            t && (a = `poki-sdk-kids-${r}.js`), o && (a = `poki-sdk-playground-${r}.js`), i && (a = `poki-sdk-hoist-${r}.js`);
            new URL(document.currentScript.src);
            return `https://game-cdn.poki.com/scripts/${r}/${a}`
        })(),
        n = document.createElement("script");
    n.setAttribute("src", a), n.setAttribute("type", "text/javascript"), n.setAttribute("crossOrigin", "anonymous"), n.onload = () => r.dequeue(), document.head.appendChild(n)
})();