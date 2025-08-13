(() => {
  var e = {
      721: () => {
        Promise.allSettled =
          Promise.allSettled ||
          ((e) =>
            Promise.all(
              e.map((e) =>
                e
                  .then((e) => ({ status: "fulfilled", value: e }))
                  .catch((e) => ({ status: "rejected", reason: e }))
              )
            ));
      },
      871: () => {
        const e = document.createElement("style");
        (e.innerHTML =
          "\n\t\n\tcanvas{\n\t\ttouch-action: none;\n\t\t-webkit-touch-callout: none;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\t\t-ms-user-select: none;\n\t\tuser-select: none;\n\t}\n\n"),
          document.head.appendChild(e);
      },
    },
    t = {};
  function i(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, i), a.exports;
  }
  (() => {
    "use strict";
    const e = {
      ready: "pokiAppReady",
      failed: "pokiAppFailed",
      startLoading: "pokiAppStartLoading",
      ads: {
        startTimer: "pokiStartTimer",
        completed: "pokiAdsCompleted",
        error: "pokiAdsError",
        impression: "pokiAdsImpression",
        durationChange: "pokiAdsDurationChange",
        limit: "pokiAdsLimit",
        ready: "pokiAdsReady",
        requested: "pokiAdsRequested",
        prebidRequested: "pokiAdsPrebidRequested",
        skipped: "pokiAdsSkipped",
        started: "pokiAdsStarted",
        stopped: "pokiAdsStopped",
        busy: "pokiAdsBusy",
        loaded: "pokiAdsLoaded",
        position: {
          preroll: "PP",
          midroll: "PM",
          rewarded: "PR",
          display: "DP",
        },
        video: {
          clicked: "pokiVideoAdsClicked",
          firstQuartile: "pokiVideoAdsFirstQuartile",
          midPoint: "pokiVideoAdsMidPoint",
          thirdQuartile: "pokiVideoAdsThirdQuartile",
          error: "pokiVideoAdsError",
          loaderError: "pokiVideoAdsLoaderError",
          paused: "pokiVideoAdsPauseTriggered",
          resumed: "pokiVideoAdsResumedTriggered",
          progress: "pokiVideoAdsProgress",
          buffering: "pokiVideoAdsBuffering",
          startHouseAdFlow: "pokiVideoAdsStartHouseAdFlow",
        },
        display: { error: "pokiDisplayAdsError" },
        extendedVideoError: "pokiAdsExtendedVideoError",
        debugging: "pokiAdsDebugging",
      },
      info: {
        messages: {
          timeLimit:
            "The ad-request was not processed, because of a time constraint",
          prerollLimit:
            "The ad-request was cancelled, because we're not allowed to show a preroll (PokiSDK.commercialBreak before PokiSDK.gameplayStart)",
          disabled:
            "The ad-request was cancelled, because we've disabled this format for this specific configuration",
        },
      },
      playtest: {
        startVideo: "pokiPlaytestStartVideo",
        stopVideo: "pokiPlaytestStopVideo",
      },
      message: {
        event: "pokiMessageEvent",
        sdkDetails: "pokiMessageSdkDetails",
        setPokiURLParams: "pokiMessageSetPokiURLParams",
        sendGameScreenshot: "pokiMessageSendScreenshot",
        sendGameRawScreenshot: "pokiMessageSendRawScreenshot",
        sendUploadScreenshot: "pokiMessageSendUploadScreenshot",
        sendCommand: "pokiMessageSendCommand",
        sendInspectorEvent: "pokiMessageInspectorEvent",
        sendInspectorCookies: "pokiMessageSendInspectorCookies",
        sendInspectorConsole: "pokiMessageSendInspectorConsole",
        sendInspectorBadBehavior: "pokiMessageSendInspectorBadBehavior",
      },
      tracking: {
        custom: "pokiTrackingCustom",
        debugTrueInProduction: "pokiMessageDebugTrueProduction",
        screen: {
          gameplayStart: "pokiTrackingScreenGameplayStart",
          gameplayStop: "pokiTrackingScreenGameplayStop",
          gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
          commercialBreak: "pokiTrackingScreenCommercialBreak",
          rewardedBreak: "pokiTrackingScreenRewardedBreak",
          firstRound: "pokiTrackingScreenFirstRound",
          displayAd: "pokiTrackingScreenDisplayAdRequest",
          destroyAd: "pokiTrackingScreenDisplayAdDestroy",
          playerActive: "pokiTrackingScreenPlayerActive",
        },
        playtest: {
          showModal: "pokiTrackingPlaytestShowModal",
          accepted: "pokiTrackingPlaytestAccepted",
          rejected: "pokiTrackingPlaytestRejected",
          noCanvas: "pokiTrackingPlaytestNoCanvas",
          notLoaded: "pokiTrackingPlaytestNotLoaded",
          starting: "pokiTrackingPlaytestStarting",
          closed: "pokiTrackingPlaytestClosed",
          error: "pokiTrackingPlaytestError",
        },
        sdk: {
          status: {
            initialized: "pokiTrackingSdkStatusInitialized",
            failed: "pokiTrackingSdkStatusFailed",
          },
        },
        ads: {
          ay: { failed: "pokiTrackingAdsAYFailed" },
          status: {
            busy: "pokiTrackingAdsStatusBusy",
            completed: "pokiTrackingAdsStatusCompleted",
            error: "pokiTrackingAdsStatusError",
            impression: "pokiTrackingAdsStatusImpression",
            limit: "pokiTrackingAdsStatusLimit",
            ready: "pokiTrackingAdsStatusReady",
            requested: "pokiTrackingAdsStatusRequested",
            prebidRequested: "pokiTrackingAdsStatusPrebidRequested",
            skipped: "pokiTrackingAdsStatusSkipped",
            started: "pokiTrackingAdsStatusStarted",
            buffering: "pokiTrackingAdsStatusBuffering",
          },
          video: {
            clicked: "pokiTrackingAdsVideoClicked",
            error: "pokiTrackingAdsVideoError",
            loaderError: "pokiTrackingAdsVideoLoaderError",
            progress: "pokiTrackingAdsVideoProgress",
            paused: "pokiTrackingAdsVideoPaused",
            resumed: "pokiTrackingAdsVideoResumed",
            extendedVideoError: "pokiTrackingAdsVideoExtendedVideoError",
          },
          display: {
            requested: "pokiTrackingScreenDisplayAdRequested",
            impression: "pokiTrackingScreenDisplayAdImpression",
            notFilled: "pokiTrackingAdsDisplayNotFilled",
          },
          rewardedWeb: {
            request: "pokiTrackingRewardedWebRequest",
            ready: "pokiTrackingRewardedWebReady",
            impression: "pokiTrackingRewardedWebImpression",
            closedGranted: "pokiTrackingRewardedWebClosedGranted",
            closedDeclined: "pokiTrackingRewardedWebclosedDeclined",
            empty: "pokiTrackingRewardedWebEmpty",
          },
          debugging: "pokiTrackingAdsDebugging",
        },
      },
      accounts: {
        openAuthPanel: "pokiAccountsOpenAuthPanel",
        authPanelClosed: "pokiAccountsAuthPanelClosed",
        getUserInfo: "pokiAccountsGetUserInfo",
        userInfo: "pokiAccountsUserInfo",
      },
    };
    function t(e) {
      var t = new RegExp("".concat(e, "=([^;]+)(?:;|$)")).exec(document.cookie);
      return t ? t[1] : "";
    }
    function n(e, t, i) {
      document.cookie = ""
        .concat(e, "=")
        .concat(t, "; path=/; samesite=lax; max-age=")
        .concat(Math.min(i || 15552e3, 15552e3));
    }
    function o() {
      for (var e = Math.floor(Date.now() / 1e3), t = "", i = 0; i < 4; i++)
        (t = String.fromCharCode(255 & e) + t), (e >>= 8);
      if (window.crypto && crypto.getRandomValues && Uint32Array) {
        var n = new Uint32Array(12);
        crypto.getRandomValues(n);
        for (var o = 0; o < 12; o++) t += String.fromCharCode(255 & n[o]);
      } else
        for (var a = 0; a < 12; a++)
          t += String.fromCharCode(Math.floor(256 * Math.random()));
      return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    function a(e, t, i) {
      console.error(e);
      var n = [
        { k: "where", v: t },
        {
          k: "error",
          v:
            e.name && e.message
              ? "".concat(e.name, ": ").concat(e.message)
              : JSON.stringify(e),
        },
      ];
      if (void 0 !== i) {
        var o = i;
        "string" != typeof e && (o = JSON.stringify(e)),
          n.push({ k: "extra", v: o });
      }
      !(function (e, t) {
        fetch(e, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: t,
          mode: "no-cors",
          keepalive: !0,
          credentials: "omit",
        }).catch(function (i) {
          console.error(i);
          try {
            var n =
              "XMLHttpRequest" in window
                ? new XMLHttpRequest()
                : new ActiveXObject("Microsoft.XMLHTTP");
            n.open("POST", e, !0),
              n.setRequestHeader("Content-Type", "text/plain"),
              n.send(t);
          } catch (e) {}
        });
      })(
        "https://t.poki.io/l",
        JSON.stringify({ c: "observer-error", ve: 7, d: n })
      );
    }
    window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
    var r = "poki_session";
    window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
    var s = [
      "poki.at",
      "poki.be",
      "poki.by",
      "poki.ch",
      "poki.cn",
      "poki.co.id",
      "poki.co.il",
      "poki.com.br",
      "poki.com",
      "poki.cz",
      "poki.de",
      "poki.dk",
      "poki.fi",
      "poki.it",
      "poki.jp",
      "poki.nl",
      "poki.pl",
      "poki.pt",
      "poki.se",
      "www.trochoi.net",
    ];
    function d() {
      try {
        var e = new URL(document.referrer).hostname;
        return s.indexOf(e) > -1 ? "poki" : e;
      } catch (e) {}
      return "";
    }
    function c(e, t) {
      if (!e) return !1;
      if (!(e && e.page && e.landing_page && e.previous_page)) return !1;
      if (!e.tab_id) return !1;
      if (!e.expire || Date.now() > e.expire) return !1;
      if (e.expire > Date.now() + 18e5) return !1;
      if (t) {
        if (void 0 !== e.referrer_domain) {
          var i = d();
          if (
            "poki" !== i &&
            "authorize.roblox.com" !== i &&
            "accounts.google.com" !== i &&
            i !== e.referrer_domain
          )
            return !1;
        }
        var n = new URLSearchParams(window.location.search);
        if (
          [
            "gclid",
            "msclkid",
            "yclid",
            "ttclid",
            "fbclid",
            "utm_campaign",
            "campaign",
            "adgroup",
            "creative",
            "utm_term",
          ].some(function (e) {
            return n.has(e);
          }) ||
          "web_app_manifest" === n.get("utm_source") ||
          "bing" === n.get("utm_source") ||
          "cpc" === n.get("utm_medium") ||
          "rtb-cpm" === n.get("utm_medium")
        )
          return !1;
      }
      return !0;
    }
    function l() {
      var e = null;
      c(window[window._pokiSessionGlobalName], !1) &&
        (e = window[window._pokiSessionGlobalName]);
      try {
        var t = sessionStorage.getItem(r);
        if (t) {
          var i = JSON.parse(t);
          c(i, !0) && (!e || i.depth > e.depth) && (e = i);
        }
      } catch (e) {
        try {
          a(e, "getSession", sessionStorage.getItem(r));
        } catch (t) {
          a(e, "getSession", t);
        }
      }
      return e;
    }
    function p() {
      var e = 0;
      window[window._pokiSessionGlobalName] &&
        window[window._pokiSessionGlobalName].count &&
        (e = window[window._pokiSessionGlobalName].count);
      try {
        var i = sessionStorage.getItem(r);
        if (i) {
          var n = JSON.parse(i);
          n && n.count && n.count > e && (e = n.count);
        }
      } catch (e) {
        try {
          a(e, "getPreviousSessionCount", sessionStorage.getItem(r));
        } catch (t) {
          a(e, "getPreviousSessionCount", t);
        }
      }
      try {
        var o = t(r);
        if (o) {
          var s = JSON.parse(o);
          s && s.count && s.count > e && (e = s.count);
        }
      } catch (e) {
        try {
          a(e, "getPreviousSessionCount", t(r));
        } catch (t) {
          a(e, "getPreviousSessionCount", t);
        }
      }
      return e;
    }
    function A() {
      if (
        window[window._pokiSessionGlobalName] &&
        window[window._pokiSessionGlobalName].tab_id
      )
        return window[window._pokiSessionGlobalName].tab_id;
      try {
        var e = sessionStorage.getItem(r);
        if (e) {
          var t = JSON.parse(e);
          if (t && t.tab_id) return t.tab_id;
        }
      } catch (e) {}
      return o();
    }
    function u() {
      var e = 0,
        i = l();
      i && (e = i.depth);
      try {
        var n = t(r);
        if (n) {
          var o = JSON.parse(n);
          !c(o, !0) || (i && o.id !== i.id) || (e = Math.max(e, o.depth));
        }
      } catch (e) {
        var s = null;
        try {
          s = t(r) || null;
        } catch (e) {}
        a(e, "getSessionDepth", s);
      }
      return e;
    }
    const m = (e, t) => {
        let i = !1;
        return (
          Object.keys(t).forEach((n) => {
            t[n] === e && (i = !0);
          }),
          i
        );
      },
      g = [
        "AT",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FI",
        "FR",
        "DE",
        "GR",
        "GB",
        "HU",
        "IE",
        "IT",
        "LV",
        "LT",
        "LU",
        "MT",
        "NL",
        "PL",
        "PT",
        "RO",
        "SK",
        "SI",
        "ES",
        "SE",
        "IS",
        "LI",
        "NO",
      ];
    function h(e) {
      return g.includes(e);
    }
    const w = (e, t) => {
        if ("undefined" == typeof window && !t) return "";
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        const i = new RegExp(`(?:[\\?&]|^)${e}=([^&#]*)`).exec(
          t || window?.location?.search || ""
        );
        return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "));
      },
      v = () =>
        "undefined" != typeof navigator &&
        /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo|kaios)/i.test(
          navigator.userAgent
        ),
      f = () =>
        "undefined" != typeof navigator &&
        /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(
          navigator.userAgent
        ),
      b = () => (v() ? "mobile" : f() ? "tablet" : "desktop");
    var y;
    !(function (e) {
      (e.ON = "on"),
        (e.NOT_APPLICABLE = "not_applicable"),
        (e.DISABLED = "disabled"),
        (e.PBS_ONLY = "pbs_only"),
        (e.DPF_ONLY = "dpf_only"),
        (e.CSTS_ONLY = "csts_only"),
        (e.PBS_DPF_CSTS = "pbs_dpf_csts");
    })(y || (y = {}));
    const k = w("referrer") || "",
      _ = w("ccpaApplies") || "",
      x = {
        bot: "1" === w("bot"),
        categories: w("categories") || "",
        device: b(),
        experiment: w("experiment") || "",
        forceAd: w("force_ad") || !1,
        isPokiIframe: (parseInt(w("site_id"), 10) || 0) > 0,
        isPokiExternal: !!window.isPokiExternal,
        siteID: parseInt(w("site_id"), 10) || 3,
        tag: w("tag") || "",
        versionID: w("game_version_id"),
        debugMode: "true" === w("pokiDebug"),
        logMode: "" !== w("pokiLogging"),
        testVideos: "true" === w("testVideos"),
        referrerParam: k,
        isPlayground: !!window.isPokiPlayground,
        isInspector:
          "inspector-uploads.poki-user-content.com" ===
            window?.location?.host ||
          document?.referrer?.includes("inspector.poki.dev") ||
          "1" === w("inspector"),
        houseAdsOnly: !1,
        ccpaApplies: "1" === _ || ("0" !== _ && void 0),
        country: (w("country") || "").toUpperCase(),
        gameID: w("game_id"),
        gdprApplies: h((w("country") || "").toUpperCase()),
        contentGameID: void 0,
        specialCondition: w("special_condition"),
        nonPersonalized: "y" === w("nonPersonalized"),
        familyFriendly: "y" === w("familyFriendly"),
        kioskMode: "y" === w("kioskMode") || !!window?.kioskMode,
        forceBidder: w("force_bidder") || "",
        cloudSaveGames: "y" === w("cloudsavegames"),
        AYMode: y.ON,
        forceStartAY: "y" === w("forceStartAY"),
      },
      I = (e, t) => {
        x[e] = t;
      },
      S = x;
    class E {
      static sendMessage(t, i, n = window.parent) {
        if (!m(t, e.message)) {
          const t = Object.keys(e.message).map((e) => `poki.message.${e}`);
          throw new TypeError(`Argument 'type' must be one of ${t.join(", ")}`);
        }
        const o = i || {};
        S.gameID &&
          S.versionID &&
          (o.pokifordevs = { game_id: S.gameID, game_version_id: S.versionID }),
          n?.postMessage({ type: t, content: o }, "*");
      }
    }
    class C {
      static debug = !1;
      static log = !1;
      static init = (e, t) => {
        const { hostname: i } = window.location;
        void 0 === e &&
          ("test" === window?.process?.env?.NODE_ENV
            ? ((e = !1), void 0 === t && (t = !1))
            : "localhost" === i ||
              "127.0.0.1" === i ||
              "[::1]" === i ||
              "launch.playcanvas.com" === i
            ? ((e = !0), void 0 === t && (t = !1))
            : ((e = !1), void 0 === t && (t = !1))),
          S.isInspector
            ? ((e = !0), (t = !0))
            : i.endsWith(".poki-gdn.com") && ((e = !1), (t = !1)),
          S.debugMode && (e = !0),
          S.logMode && (t = !0),
          void 0 === t && (t = e),
          (C.debug = e),
          (C.log = t);
      };
    }
    const P = (e) => {
        let t = [];
        return (
          Object.keys(e).forEach((i) => {
            "object" == typeof e[i] ? (t = t.concat(P(e[i]))) : t.push(e[i]);
          }),
          t
        );
      },
      B = P;
    class T {
      static listeners = {};
      static videoDataAnnotations = {};
      static clearEventListeners() {
        this.listeners = {};
      }
      static removeEventListener(e, t) {
        if (!Object.prototype.hasOwnProperty.call(this.listeners, e)) return;
        const i = this.listeners[e].indexOf(t);
        -1 !== i && this.listeners[e].splice(i, 1);
      }
      static addEventListener(e, t, i = !1) {
        if (
          ((i = !!i),
          Object.prototype.hasOwnProperty.call(this.listeners, e) ||
            (this.listeners[e] = []),
          i)
        ) {
          const i = (n) => {
            this.removeEventListener.bind(this)(e, i), t(n);
          };
          this.listeners[e].push(i);
        } else this.listeners[e].push(t);
      }
      static dispatchEvent(e, t = {}) {
        const i = Object.keys(this.listeners);
        for (let n = 0; n < i.length; n++) {
          const o = i[n];
          if (e === o) {
            const e = this.listeners[o];
            for (let i = 0; i < e.length; i++)
              e[i]({ ...this.videoDataAnnotations, ...t });
          }
        }
      }
      static addVideoDataAnnotations(e) {
        this.videoDataAnnotations = { ...this.videoDataAnnotations, ...e };
      }
      static getVideoDataAnnotations() {
        return this.videoDataAnnotations;
      }
      static clearVideoDataAnnotations() {
        this.videoDataAnnotations = {};
      }
    }
    const D = (e) => {
      if ("undefined" == typeof window || "undefined" == typeof fetch) return;
      const t = T.getVideoDataAnnotations();
      let { size: i } = e;
      e.event?.startsWith("video-") && (i = "640x360v");
      const n = {
        ...e,
        size: i,
        adBreakId: e.adBreakId || t.adBreakId,
        currentAdNumber: e.currentAdNumber || t.currentAdNumber,
        totalAdAmount: e.totalAdAmount || t.totalAdAmount,
        opportunity_id: e.opportunityId || t.opportunityId,
        ad_unit_path: e.adUnitPath || t.adUnitPath,
        p4d_game_id: S.gameID,
        p4d_version_id: S.versionID,
        bidder: e.bidder || t.bidder,
        bid: e.bid || t.bid || 0,
        error_code: e.errorCode,
        creative_id: e.creativeId || t.creativeId,
        experiment: S.experiment,
      };
      fetch("https://t.poki.io/adserver", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(n),
      }).catch((e) => {
        console.warn("%cPOKI:%c adserver error", "font-weight: bold", "", e);
      });
    };
    function M() {
      const e = window,
        t = [];
      return (
        ("function" != typeof e.ga && "function" != typeof e.gtag) ||
          t.push("ga"),
        e.mixpanel &&
          "function" == typeof e.mixpanel.track &&
          t.push("mixpanel"),
        "function" == typeof e.GameAnalytics && t.push("gameanalytics"),
        (e.kongregateAPI || e.kongregate) && t.push("kongregate"),
        e.FlurryAgent && t.push("flurry"),
        e.Countly && t.push("countly"),
        e.amplitude && t.push("amplitude"),
        t
      );
    }
    function L(e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return e instanceof Error;
      }
    }
    function O(e) {
      try {
        const t = new WeakSet();
        return JSON.stringify(e, (e, i) => {
          if ("object" == typeof i && null !== i) {
            if (t.has(i)) return "[Circular]";
            t.add(i);
          }
          return i;
        });
      } catch {
        try {
          return e.toString();
        } catch {
          return "[Object]";
        }
      }
    }
    const N = [],
      R = (function (e) {
        let t = !1,
          i = 0;
        return (n) => {
          if (t) return void i++;
          (t = !0),
            setTimeout(() => {
              t = !1;
            }, e);
          const o = i;
          (i = 0), n(o);
        };
      })(100),
      z = console.error,
      U = ["Audio callback had starved sending audio by"];
    let F = !1;
    const j = Math.random().toString(36).substring(2);
    let G;
    function H() {
      const e = window;
      return e.config?.unityVersion
        ? e.config.unityVersion
        : e.Phaser?.VERSION
        ? e.Phaser.VERSION
        : e.pc?.version
        ? e.pc.version
        : e.Module?.engineVersion
        ? e.Module.engineVersion
        : ki.__godotVersion
        ? ki.__godotVersion
        : void 0;
    }
    function V(e, t = !0) {
      S.gameID && !S.isPlayground
        ? R((t) => {
            try {
              const i = e.message || O(e);
              N.push({ n: e.name, m: i, s: JSON.stringify(e.stack) }),
                G && G({ name: e.name, message: i, stack: e.stack });
              const n = JSON.stringify({
                  gid: S.gameID,
                  vid: S.versionID,
                  ve: 7,
                  n: e.name,
                  m: i + (t ? ` (skipped ${t} errors)` : ""),
                  s: JSON.stringify(e.stack),
                  ui: j,
                  ev: `${H()}`,
                }),
                o = "https://t.poki.io/ge";
              if (navigator.sendBeacon) navigator.sendBeacon(o, n);
              else {
                const e = new XMLHttpRequest();
                e.open("POST", o, !0), e.send(n);
              }
            } catch (e) {
              z("%cPOKI:%c failed to log error", "font-weight: bold", "", e);
            }
          })
        : t &&
          console.error("%cPOKI:%c game error", "font-weight: bold", "", e);
    }
    function q(e) {
      L(e.reason)
        ? V(e.reason)
        : V({
            name: "unhandledrejection",
            message: JSON.stringify(e.reason) || O(e),
          });
    }
    function W(e) {
      L(e.error) ? V(e.error) : V(e);
    }
    function Q() {
      if (
        S.gameID &&
        !S.isPlayground &&
        !S.isPokiExternal &&
        S.isPokiIframe &&
        !F
      ) {
        (F = !0),
          window.addEventListener("unhandledrejection", q),
          window.addEventListener("error", W);
        try {
          console.error = (...e) => {
            const t = O(e);
            U.some((e) => t.includes(e)) ||
              V({ name: "console.error", message: t }, !1),
              z.apply(console, e);
          };
        } catch {}
      }
    }
    function K() {
      if (F) {
        (F = !1),
          window.removeEventListener("unhandledrejection", q),
          window.removeEventListener("error", W);
        try {
          console.error = z;
        } catch {}
      }
    }
    "undefined" != typeof window && Q();
    const $ = () => {
      let e = Math.floor(Date.now() / 1e3),
        t = "";
      for (let i = 0; i < 4; i++)
        (t = String.fromCharCode(255 & e) + t), (e >>= 8);
      if (window.crypto && crypto.getRandomValues && Uint32Array) {
        const e = new Uint32Array(12);
        crypto.getRandomValues(e);
        for (let i = 0; i < 12; i++) t += String.fromCharCode(255 & e[i]);
      } else
        for (let e = 0; e < 12; e++)
          t += String.fromCharCode(Math.floor(256 * Math.random()));
      return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    };
    var Z;
    !(function (e) {
      (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large");
    })(Z || (Z = {}));
    const X = window.requestAnimationFrame;
    function Y(e) {
      return Math.round(100 * e) / 100;
    }
    class J {
      #e = [];
      #t = 0;
      #i;
      constructor(e) {
        Math.random() > e ||
          ((this.#i = performance.now() + 1e3),
          X(() => {
            this.#n();
          }));
      }
      #n() {
        const e = performance.now();
        for (; e >= this.#i; )
          this.#e.unshift(this.#t),
            this.#e.length > 10 && this.#e.pop(),
            (this.#t = 0),
            (this.#i += 1e3);
        this.#t++,
          X(() => {
            this.#n();
          });
      }
      stats() {
        if (0 === this.#e.length) return;
        const e = Math.min(...this.#e),
          t = Math.max(...this.#e),
          i = Y(this.#e.reduce((e, t) => e + t, 0) / this.#e.length);
        let n = Y(
          this.#e
            .slice(1)
            .map((e, t) => Math.abs(e - this.#e[t]))
            .reduce((e, t) => e + t, 0) /
            (this.#e.length - 1)
        );
        return Number.isNaN(n) && (n = 0), `${e}|${t}|${i}|${n}`;
      }
    }
    const ee = Math.random().toString(36).substring(2);
    async function te() {
      const e = await window.cookieStore.getAll(),
        t = window.indexedDB.databases
          ? await window.indexedDB.databases()
          : [];
      return [
        ...e.map((e) => ({
          name: e.name,
          expire_seconds: Math.round((e.expires - Date.now()) / 1e3),
          type: "cookie",
          domain: e.domain,
        })),
        ...Object.keys(window.localStorage).map((e) => ({
          name: e,
          expire_seconds: 15552e3,
          type: "localStorage",
        })),
        ...t.map((e) => ({ name: e.name, expire_seconds: 0, type: "idb" })),
      ];
    }
    class ie {
      static async collectAndLog() {
        try {
          const e = { cookies: await te(), p4d_game_id: S.gameID, user_id: ee };
          fetch("https://t.poki.io/game-cookies", {
            method: "post",
            body: JSON.stringify(e),
          }).catch();
        } catch {}
      }
      static trackSavegames() {
        window.cookieStore &&
          window.cookieStore.getAll &&
          S.gameID &&
          (Math.random() > 0.01 ||
            (navigator.userAgent.indexOf("Safari") > -1 &&
              navigator.userAgent.indexOf("Chrome") <= -1) ||
            (ie.collectAndLog(), setInterval(ie.collectAndLog, 12e4)));
      }
    }
    const ne = (() => {
      let e = 0;
      return () => (
        (e += 1),
        `u${`0000${(((36 * Math.random()) ** 4) | 0).toString(36)}`.slice(
          -4
        )}${e}`
      );
    })();
    function oe(e) {
      const t = [];
      for (let i = 0, n = e.length; i < n; i++) t.push(e[i]);
      return t;
    }
    function ae(e) {
      return "style" in e;
    }
    const re = (e, t) => {
        if (e instanceof t) return !0;
        const i = Object.getPrototypeOf(e);
        return null !== i && (i.constructor.name === t.name || re(i, t));
      },
      se = new Set([
        "cx",
        "cy",
        "x",
        "y",
        "r",
        "rx",
        "ry",
        "d",
        "fill",
        "alignment-baseline",
        "baseline-shift",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-rendering",
        "dominant-baseline",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "paint-order",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "stroke",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "vector-effect",
      ]),
      de = { html: void 0, svg: void 0 };
    function ce(e, t = {}) {
      const i = re(e, SVGElement) ? "svg" : "html",
        n = de[i];
      if (n) return n;
      const o =
          t.includeStyleProperties ??
          oe(window.getComputedStyle(document.documentElement)),
        a = "html" === i ? o.filter((e) => !se.has(e)) : [...o];
      return (de[i] = a), a;
    }
    function le(e, t) {
      const i = (e.ownerDocument.defaultView || window)
        .getComputedStyle(e)
        .getPropertyValue(t);
      return i ? parseFloat(i.replace("px", "")) : 0;
    }
    function pe(e, t = {}) {
      return {
        width:
          t.width ||
          (function (e) {
            const t = le(e, "border-left-width"),
              i = le(e, "border-right-width");
            return e.clientWidth + t + i;
          })(e),
        height:
          t.height ||
          (function (e) {
            const t = le(e, "border-top-width"),
              i = le(e, "border-bottom-width");
            return e.clientHeight + t + i;
          })(e),
      };
    }
    const Ae = 16384;
    function ue(e) {
      return new Promise((t, i) => {
        const n = new Image();
        (n.decode = () => t(n)),
          (n.onload = () => t(n)),
          (n.onerror = i),
          (n.crossOrigin = "anonymous"),
          (n.decoding = "async"),
          (n.src = e);
      });
    }
    async function me(e, t, i) {
      const n = "http://www.w3.org/2000/svg",
        o = document.createElementNS(n, "svg"),
        a = document.createElementNS(n, "foreignObject");
      return (
        o.setAttribute("width", `${t}`),
        o.setAttribute("height", `${i}`),
        o.setAttribute("viewBox", `0 0 ${t} ${i}`),
        a.setAttribute("width", "100%"),
        a.setAttribute("height", "100%"),
        a.setAttribute("x", "0"),
        a.setAttribute("y", "0"),
        a.setAttribute("externalResourcesRequired", "true"),
        o.appendChild(a),
        a.appendChild(e),
        (async function (e) {
          return Promise.resolve()
            .then(() => new XMLSerializer().serializeToString(e))
            .then(encodeURIComponent)
            .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
        })(o)
      );
    }
    function ge(e, t, i, n) {
      const o = `.${e}:${t}`,
        a = i.cssText
          ? (function (e) {
              const t = e.getPropertyValue("content");
              return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
            })(i)
          : (function (e, t) {
              return ce(document.documentElement, t)
                .map(
                  (t) =>
                    `${t}: ${e.getPropertyValue(t)}${
                      e.getPropertyPriority(t) ? " !important" : ""
                    };`
                )
                .join(" ");
            })(i, n);
      return document.createTextNode(`${o}{${a}}`);
    }
    function he(e, t, i, n) {
      const o = window.getComputedStyle(e, i),
        a = o.getPropertyValue("content");
      if ("" === a || "none" === a) return;
      const r = ne();
      try {
        t.className = `${t.className} ${r}`;
      } catch {
        return;
      }
      const s = document.createElement("style");
      s.appendChild(ge(r, i, o, n)), t.appendChild(s);
    }
    const we = "application/font-woff",
      ve = "image/jpeg",
      fe = {
        woff: we,
        woff2: we,
        ttf: "application/font-truetype",
        eot: "application/vnd.ms-fontobject",
        png: "image/png",
        jpg: ve,
        jpeg: ve,
        gif: "image/gif",
        tiff: "image/tiff",
        svg: "image/svg+xml",
        webp: "image/webp",
      };
    function be(e) {
      const t = (function (e) {
        const t = /\.([^./]*?)$/g.exec(e);
        return t ? t[1] : "";
      })(e).toLowerCase();
      return fe[t] || "";
    }
    function ye(e) {
      return -1 !== e.search(/^(data:)/);
    }
    function ke(e, t) {
      return `data:${t};base64,${e}`;
    }
    async function _e(e, t, i) {
      const n = await fetch(e, t);
      if (404 === n.status) throw new Error(`Resource "${n.url}" not found`);
      const o = await n.blob();
      return new Promise((e, t) => {
        const a = new FileReader();
        (a.onerror = t),
          (a.onloadend = () => {
            try {
              e(i({ res: n, result: a.result }));
            } catch (e) {
              t(e);
            }
          }),
          a.readAsDataURL(o);
      });
    }
    const xe = {};
    async function Ie(e, t, i) {
      const n = (function (e, t, i) {
        let n = e.replace(/\?.*/, "");
        return (
          i && (n = e),
          /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")),
          t ? `[${t}]${n}` : n
        );
      })(e, t, i.includeQueryParams);
      if (null != xe[n]) return xe[n];
      let o;
      i.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
      try {
        const n = await _e(
          e,
          i.fetchRequestInit,
          ({ res: e, result: i }) => (
            t || (t = e.headers.get("Content-Type") || ""),
            (function (e) {
              return e.split(/,/)[1];
            })(i)
          )
        );
        o = ke(n, t);
      } catch (t) {
        o = i.imagePlaceholder || "";
        let n = `Failed to fetch resource: ${e}`;
        t && (n = "string" == typeof t ? t : t.message),
          n &&
            console.warn(
              "%cPOKI:%c failed to fetch resource",
              "font-weight: bold",
              "",
              n
            );
      }
      return (xe[n] = o), o;
    }
    async function Se(e, t) {
      return re(e, HTMLCanvasElement)
        ? (async function (e) {
            try {
              if (e.getContext("2d")) return ue(e.toDataURL());
            } catch {}
            if (0 === e.width || 0 === e.height) return ue("data:,");
            const t = document
              .createElement("canvas")
              .getContext("2d", { alpha: !0 });
            (t.canvas.width = e.width), (t.canvas.height = e.height);
            const i = t.getImageData(0, 0, t.canvas.width, t.canvas.height);
            return ue(
              await new Promise((n) => {
                try {
                  requestAnimationFrame(() => {
                    const o = document
                        .createElement("canvas")
                        .getContext("webgl2"),
                      a = o.createTexture(),
                      r = o.createFramebuffer();
                    o.bindTexture(o.TEXTURE_2D, a),
                      o.bindFramebuffer(o.FRAMEBUFFER, r),
                      o.texImage2D(
                        o.TEXTURE_2D,
                        0,
                        o.RGBA,
                        o.RGBA,
                        o.UNSIGNED_BYTE,
                        e
                      ),
                      o.framebufferTexture2D(
                        o.FRAMEBUFFER,
                        o.COLOR_ATTACHMENT0,
                        o.TEXTURE_2D,
                        a,
                        0
                      ),
                      o.readPixels(
                        0,
                        0,
                        e.width,
                        e.height,
                        o.RGBA,
                        o.UNSIGNED_BYTE,
                        new Uint8Array(i.data.buffer)
                      ),
                      t.putImageData(i, 0, 0),
                      o.deleteTexture(a),
                      o.deleteFramebuffer(r);
                    const s = o.getExtension("WEBGL_lose_context");
                    s && s.loseContext(), n(t.canvas.toDataURL());
                  });
                } catch {
                  n("data:,");
                }
              })
            );
          })(e)
        : re(e, HTMLVideoElement)
        ? (async function (e, t) {
            if (e.currentSrc) {
              const t = document.createElement("canvas"),
                i = t.getContext("2d");
              return (
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                i?.drawImage(e, 0, 0, t.width, t.height),
                ue(t.toDataURL())
              );
            }
            const { poster: i } = e,
              n = be(i);
            return ue(await Ie(i, n, t));
          })(e, t)
        : re(e, HTMLIFrameElement)
        ? (async function (e, t) {
            try {
              if (e?.contentDocument?.body)
                return await Te(e.contentDocument.body, t, !0);
            } catch {}
            return e.cloneNode(!1);
          })(e, t)
        : e.cloneNode(Ce(e));
    }
    const Ee = (e) => "SLOT" === e.tagName?.toUpperCase(),
      Ce = (e) => null != e.tagName && "SVG" === e.tagName.toUpperCase();
    function Pe(e, t, i) {
      return (
        (function (e, t, i) {
          const n = t.style;
          if (!n) return;
          const o = window.getComputedStyle(e);
          o.cssText
            ? ((n.cssText = o.cssText), (n.transformOrigin = o.transformOrigin))
            : ce(e, i).forEach((i) => {
                let a = o.getPropertyValue(i);
                if ("font-size" === i && a.endsWith("px")) {
                  const e =
                    Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1;
                  a = `${e}px`;
                }
                re(e, HTMLIFrameElement) &&
                  "display" === i &&
                  "inline" === a &&
                  (a = "block"),
                  "d" === i &&
                    t.getAttribute("d") &&
                    (a = `path(${t.getAttribute("d")})`),
                  n.setProperty(i, a, o.getPropertyPriority(i));
              });
        })(e, t, i),
        re(e, HTMLElement) &&
        re(t, HTMLElement) &&
        ((function (e, t) {
          re(e, HTMLTextAreaElement) && (t.innerHTML = e.value),
            re(e, HTMLInputElement) && t.setAttribute("value", e.value);
        })(e, t),
        (function (e, t) {
          if (re(e, HTMLSelectElement)) {
            const i = t,
              n = Array.from(i.children).find(
                (t) => e.value === t.getAttribute("value")
              );
            n && n.setAttribute("selected", "");
          }
        })(e, t),
        (function (e, t, i) {
          he(e, t, ":before", i), he(e, t, ":after", i);
        })(e, t, i),
        i.patchScroll)
          ? (function (e, t) {
              if ((0 === e.scrollTop && 0 === e.scrollLeft) || !t.children)
                return t;
              for (let i = 0; i < t.children.length; i += 1) {
                const n = t.children[i];
                if (!n.children) continue;
                const { transform: o } = n.style,
                  a = new DOMMatrix(o),
                  { a: r, b: s, c: d, d: c } = a;
                (a.a = 1),
                  (a.b = 0),
                  (a.c = 0),
                  (a.d = 1),
                  a.translateSelf(-e.scrollLeft, -e.scrollTop),
                  (a.a = r),
                  (a.b = s),
                  (a.c = d),
                  (a.d = c),
                  (n.style.transform = a.toString());
              }
              return t;
            })(e, t)
          : t
      );
    }
    let Be = 0;
    async function Te(e, t, i) {
      return i || !t.filter || t.filter(e)
        ? ae(e)
          ? (Be++,
            Be % 5 == 0 &&
              (await ((n = 0),
              (e) =>
                new Promise((t) => {
                  setTimeout(() => t(e), n);
                }))),
            Promise.resolve(e)
              .then((e) => Se(e, t))
              .then((i) =>
                (async function (e, t, i) {
                  if (Ce(t)) return t;
                  let n = [];
                  return (
                    (n =
                      Ee(e) && e.assignedNodes
                        ? oe(e.assignedNodes())
                        : re(e, HTMLIFrameElement) && e.contentDocument?.body
                        ? oe(e.contentDocument.body.childNodes)
                        : oe(
                            ("shadowRoot" in e ? e.shadowRoot ?? e : e)
                              .childNodes
                          )),
                    0 === n.length ||
                      re(e, HTMLVideoElement) ||
                      (await n.reduce(
                        (e, n) =>
                          e
                            .then(() => Te(n, i))
                            .then((e) => {
                              e && t.appendChild(e);
                            }),
                        Promise.resolve()
                      )),
                    t
                  );
                })(e, i, t)
              )
              .then((i) => Pe(e, i, t))
              .then((e) =>
                (async function (e, t) {
                  const i = e.querySelectorAll ? e.querySelectorAll("use") : [];
                  if (0 === i.length) return e;
                  const n = {};
                  for (let o = 0; o < i.length; o++) {
                    const a = i[o].getAttribute("xlink:href");
                    if (a) {
                      const i = e.querySelector(a),
                        o = document.querySelector(a);
                      i || !o || n[a] || (n[a] = await Te(o, t, !0));
                    }
                  }
                  const o = Object.values(n);
                  if (o.length) {
                    const t = "http://www.w3.org/1999/xhtml",
                      i = document.createElementNS(t, "svg");
                    i.setAttribute("xmlns", t),
                      (i.style.position = "absolute"),
                      (i.style.width = "0"),
                      (i.style.height = "0"),
                      (i.style.overflow = "hidden"),
                      (i.style.display = "none");
                    const n = document.createElementNS(t, "defs");
                    i.appendChild(n);
                    for (let e = 0; e < o.length; e++) n.appendChild(o[e]);
                    e.appendChild(i);
                  }
                  return e;
                })(e, t)
              ))
          : e.cloneNode(!1)
        : null;
      var n;
    }
    const De = /url\((['"]?)([^'"]+?)\1\)/g,
      Me = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
      Le = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
    async function Oe(e, t, i, n, o) {
      try {
        const a = i
            ? (function (e, t) {
                if (e.match(/^[a-z]+:\/\//i)) return e;
                if (e.match(/^\/\//)) return window.location.protocol + e;
                if (e.match(/^[a-z]+:/i)) return e;
                const i = document.implementation.createHTMLDocument(),
                  n = i.createElement("base"),
                  o = i.createElement("a");
                return (
                  i.head.appendChild(n),
                  i.body.appendChild(o),
                  t && (n.href = t),
                  (o.href = e),
                  o.href
                );
              })(t, i)
            : t,
          r = be(t);
        let s;
        if (o) {
          s = ke(await o(a), r);
        } else s = await Ie(a, r, n);
        return e.replace(
          (function (e) {
            const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
            return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
          })(t),
          `$1${s}$3`
        );
      } catch {}
      return e;
    }
    function Ne(e) {
      return -1 !== e.search(De);
    }
    async function Re(e, t, i) {
      if (!Ne(e)) return e;
      const n = (function (e, { preferredFontFormat: t }) {
          return t
            ? e.replace(Le, (e) => {
                for (;;) {
                  const [i, , n] = Me.exec(e) || [];
                  if (!n) return "";
                  if (n === t) return `src: ${i};`;
                }
              })
            : e;
        })(e, i),
        o = (function (e) {
          const t = [];
          return (
            e.replace(De, (e, i, n) => (t.push(n), e)), t.filter((e) => !ye(e))
          );
        })(n);
      return o.reduce(
        (e, n) => e.then((e) => Oe(e, n, t, i)),
        Promise.resolve(n)
      );
    }
    async function ze(e, t, i) {
      const n = t.style?.getPropertyValue(e);
      if (n) {
        const o = await Re(n, null, i);
        return t.style.setProperty(e, o, t.style.getPropertyPriority(e)), !0;
      }
      return !1;
    }
    async function Ue(e, t) {
      ae(e) &&
        (await (async function (e, t) {
          (await ze("background", e, t)) ||
            (await ze("background-image", e, t)),
            (await ze("mask", e, t)) || (await ze("mask-image", e, t));
        })(e, t),
        await (async function (e, t) {
          const i = re(e, HTMLImageElement),
            n = re(e, SVGImageElement);
          if ((!i || ye(e.src)) && (!n || ye(e.href.baseVal))) return;
          const o = i ? e.src : e.href.baseVal,
            a = await Ie(o, be(o), t);
          await new Promise((t, n) => {
            (e.onload = t), (e.onerror = n);
            const o = e;
            o.decode && (o.decode = t),
              "lazy" === o.loading && (o.loading = "eager"),
              i ? ((e.srcset = ""), (e.src = a)) : (e.href.baseVal = a);
          });
        })(e, t),
        await (async function (e, t) {
          const i = oe(e.childNodes).map((e) => Ue(e, t));
          await Promise.all(i).then(() => e);
        })(e, t));
    }
    const Fe = {};
    async function je(e) {
      let t = Fe[e];
      if (null != t) return t;
      const i = await fetch(e);
      return (t = { url: e, cssText: await i.text() }), (Fe[e] = t), t;
    }
    async function Ge(e, t) {
      let { cssText: i } = e;
      const n = /url\(["']?([^"')]+)["']?\)/g,
        o = (i.match(/url\([^)]+\)/g) || []).map(async (o) => {
          let a = o.replace(n, "$1");
          return (
            a.startsWith("https://") || (a = new URL(a, e.url).href),
            _e(
              a,
              t.fetchRequestInit,
              ({ result: e }) => ((i = i.replace(o, `url(${e})`)), [o, e])
            )
          );
        });
      return Promise.all(o).then(() => i);
    }
    function He(e) {
      if (null == e) return [];
      const t = [];
      let i = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
      const n = new RegExp(
        "((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})",
        "gi"
      );
      for (;;) {
        const e = n.exec(i);
        if (null === e) break;
        t.push(e[0]);
      }
      i = i.replace(n, "");
      const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        a = new RegExp(
          "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
          "gi"
        );
      for (;;) {
        let e = o.exec(i);
        if (null === e) {
          if (((e = a.exec(i)), null === e)) break;
          o.lastIndex = a.lastIndex;
        } else a.lastIndex = o.lastIndex;
        t.push(e[0]);
      }
      return t;
    }
    async function Ve(e, t) {
      if (null == e.ownerDocument)
        throw new Error("Provided element is not within a Document");
      const i = oe(e.ownerDocument.styleSheets),
        n = await (async function (e, t) {
          const i = [],
            n = [];
          return (
            e.forEach((i) => {
              if ("cssRules" in i)
                try {
                  oe(i.cssRules || []).forEach((e, o) => {
                    if (e instanceof CSSImportRule) {
                      let a = o + 1;
                      const r = je(e.href)
                        .then((e) => Ge(e, t))
                        .then((e) =>
                          He(e).forEach((e) => {
                            try {
                              i.insertRule(
                                e,
                                e.startsWith("@import")
                                  ? (a += 1)
                                  : i.cssRules.length
                              );
                            } catch (t) {
                              console.error(
                                "Error inserting rule from remote css",
                                { rule2: e, err: t }
                              );
                            }
                          })
                        )
                        .catch((e) => {
                          console.error(
                            "Error loading remote css",
                            e.toString()
                          );
                        });
                      n.push(r);
                    }
                  });
                } catch (o) {
                  const a =
                    e.find((e) => null == e.href) || document.styleSheets[0];
                  null != i.href &&
                    n.push(
                      je(i.href)
                        .then((e) => Ge(e, t))
                        .then((e) =>
                          He(e).forEach((e) => {
                            a.insertRule(e, a.cssRules.length);
                          })
                        )
                        .catch((e) => {
                          console.error("Error loading remote stylesheet", e);
                        })
                    ),
                    console.error("Error inlining remote css file", o);
                }
            }),
            Promise.all(n).then(
              () => (
                e.forEach((e) => {
                  if ("cssRules" in e)
                    try {
                      oe(e.cssRules || []).forEach((e) => {
                        i.push(e);
                      });
                    } catch (t) {
                      console.error(
                        `Error while reading CSS rules from ${e.href}`,
                        t
                      );
                    }
                }),
                i
              )
            )
          );
        })(i, t);
      return (function (e) {
        return e
          .filter((e) => e instanceof CSSFontFaceRule)
          .filter((e) => Ne(e.style.getPropertyValue("src")));
      })(n);
    }
    async function qe(e, t) {
      const i =
        null != t.fontEmbedCSS
          ? t.fontEmbedCSS
          : t.skipFonts
          ? null
          : await (async function (e, t) {
              const i = await Ve(e, t);
              return (
                await Promise.all(
                  i.map((e) => {
                    const i = e.parentStyleSheet
                      ? e.parentStyleSheet.href
                      : null;
                    return Re(e.cssText, i, t);
                  })
                )
              ).join("\n");
            })(e, t);
      if (i) {
        const t = document.createElement("style"),
          n = document.createTextNode(i);
        t.appendChild(n),
          e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
      }
    }
    async function We(e, t = {}) {
      const { width: i, height: n } = pe(e, t),
        o = await Te(e, t, !0);
      await qe(o, t),
        await Ue(o, t),
        (function (e, t) {
          const { style: i } = e;
          t.backgroundColor && (i.backgroundColor = t.backgroundColor),
            t.width && (i.width = `${t.width}px`),
            t.height && (i.height = `${t.height}px`);
          const n = t.style;
          null != n &&
            Object.keys(n).forEach((e) => {
              i[e] = n[e];
            });
        })(o, t);
      return await me(o, i, n);
    }
    async function Qe(e, t = {}) {
      const { width: i, height: n } = pe(e, t),
        o = await We(e, t),
        a = await ue(o),
        r = document.createElement("canvas"),
        s = r.getContext("2d"),
        d = window.devicePixelRatio || 1,
        c = t.canvasWidth || i,
        l = t.canvasHeight || n;
      return (
        (r.width = c * d),
        (r.height = l * d),
        t.skipAutoScale ||
          (function (e) {
            (e.width > Ae || e.height > Ae) &&
              (e.width > Ae && e.height > Ae
                ? e.width > e.height
                  ? ((e.height *= Ae / e.width), (e.width = Ae))
                  : ((e.width *= Ae / e.height), (e.height = Ae))
                : e.width > Ae
                ? ((e.height *= Ae / e.width), (e.width = Ae))
                : ((e.width *= Ae / e.height), (e.height = Ae)));
          })(r),
        (r.style.width = `${c}`),
        (r.style.height = `${l}`),
        t.backgroundColor &&
          ((s.fillStyle = t.backgroundColor),
          s.fillRect(0, 0, r.width, r.height)),
        s.drawImage(a, 0, 0, r.width, r.height),
        r
      );
    }
    async function Ke(e, t = {}) {
      return (await Qe(e, t)).toDataURL();
    }
    const $e = "pokiSdkContainer",
      Ze = "pokiSdkFixed",
      Xe = "pokiSdkOverlay",
      Ye = "pokiSdkHidden",
      Je = "pokiSdkInsideContainer",
      et = "pokiSdkPauseButtonContainer",
      tt = "pokiSdkPauseButton",
      it = "pokiSdkPauseButtonBG",
      nt = "pokiSdkStartAdButton",
      ot = "pokiSdkProgressBar",
      at = "pokiSdkProgressContainer",
      rt = "pokiSdkSpinnerContainer",
      st = "pokiSdkVideoContainer",
      dt = "pokiSdkVisible",
      ct = "pokiSDKAdContainer",
      lt = "pokiSDKHouseAdContainer",
      pt = "pokiSDKNrAdsContainer",
      At = `\n.${$e} {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.${$e}.${Ze} {\n\tposition: fixed;\n}\n\n.${$e}.${dt} {\n\tdisplay: block;\n}\n\n.${$e}.${Ye},\n.${rt}.${Ye} {\n\tdisplay: none;\n}\n\n.${$e}.${Ye},\n.${rt} {\n\tpointer-events: none;\n}\n\n.${rt} {\n\tz-index: 10;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: url('https://a.poki-cdn.com/images/thumb_anim_2x.gif') 50% 50% no-repeat;\n\tuser-select: none;\n}\n\n.${Je} {\n\tbackground: #000;\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s ease-in-out;\n\t-moz-transition: opacity 0.5s ease-in-out;\n\t-ms-transition: opacity 0.5s ease-in-out;\n\t-o-transition: opacity 0.5s ease-in-out;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.${$e}.${dt} .${Je} {\n\topacity: 1;\n}\n\n.${ct}, .${st} {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.${nt} {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 15pt 'Arial', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n}\n\n.${et} {\n\tcursor:pointer;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n}\n\n.${it} {\n    content: '';\n    background: rgba(0, 43, 80, 0.5);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\tz-index: 11;\n}\n\n.${et}:hover .${it} {\n\tbackground: rgba(0, 43, 80, 0.7);\n}\n\n.${tt} {\n\tposition: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 12;\n}\n\n.${tt}:before {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: block;\n\tborder: 2px solid #fff;\n\tborder-radius: 50%;\n\tuser-select: none;\n\tbackground-color: rgba(0, 0, 0, 0.6);\n\ttransition: background-color 0.5s ease;\n\tanimation: 1s linear infinite pokiPulse;\n\tz-index: 12;\n}\n\n.${tt}:after {\n\tcontent: '';\n\tposition: absolute;\n\tdisplay: block;\n\tbox-sizing: border-box;\n\tborder-color: transparent transparent transparent #fff;\n\tborder-style: solid;\n\tborder-width: 26px 0 26px 40px;\n\tpointer-events: none;\n\tanimation: 1s linear infinite pokiPulse;\n\tleft: 6px;\n\tz-index: 12;\n}\n\n@keyframes pokiPulse {\n\t0% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n\t70% {\n\t\ttransform: translate(-50%, -50%) scale(1.1);\n\t}\n\t100% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n}\n\n.${at} {\n\tbackground: #B8C7DD;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n.${ot} {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #FFDC00;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.5s;\n\ttransition-timing-function: linear;\n}\n\n.${ot}.${dt}, .${et}.${dt}, .${nt}.${dt} {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n.${ot}.${Ye}, .${et}.${Ye}, .${nt}.${Ye}, .${pt}.${Ye} {\n\tdisplay: none;\n\tpointer-events: none;\n}\n\n.${ct} .${lt} {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n\tcursor: pointer;\n}\n\n.${pt} {\n\tbottom: 10px;\n\tposition: absolute;\n\tleft: 10px;\n\tz-index: 9999;\n\tcolor: #FFF;\n\tfont: 700 9pt 'Arial', sans-serif;\n\tfilter: drop-shadow(0 0 0.2rem black);\n}\n\n`;
    async function ut(e, t = {}, i = 5e3) {
      const n = new AbortController(),
        { signal: o } = n,
        a = { ...t, signal: o };
      let r = null;
      const s = new Promise((e, t) => {
        r = setTimeout(() => {
          n.abort(),
            t(new DOMException(`Signal timed out after ${i}ms`, "AbortError"));
        }, i);
      });
      try {
        const t = await Promise.race([fetch(e, a), s]);
        return r && clearTimeout(r), t;
      } catch (t) {
        throw (
          (r && clearTimeout(r),
          t instanceof Error && "AbortError" === t.name
            ? (console.error(
                `%cPOKI:%c fetchWithTimeout: Fetch aborted for ${e}. Error: ${t.message}`
              ),
              t)
            : t instanceof Error
            ? (console.error(
                `%cPOKI:%c fetchWithTimeout: Fetch error for ${e}:`,
                t.message
              ),
              t)
            : (console.error(
                `%cPOKI:%c fetchWithTimeout: An unexpected error occurred for ${e}:`,
                t
              ),
              new Error("An unexpected fetch error occurred.")))
        );
      }
    }
    const mt = async (e) => {
        const { screenshot: t } = e,
          i = await ut(
            "https://api.poki.io/screenshot",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                data: t,
                p4d_game_id: S.gameID,
                p4d_version_id: S.versionID,
              }),
            },
            3e4
          );
        try {
          if (200 === i.status) {
            return "https://poki-user-content.com/" + (await i.json()).source;
          }
        } catch {}
        return null;
      },
      gt = async () => {
        const e = (e) =>
            ![
              "VIDEO",
              "TEXTAREA",
              "SCRIPT",
              "NOSCRIPT",
              "INPUT",
              "IFRAME",
            ].includes(e.nodeName) &&
            !("IMG" === e.nodeName && !e.getAttribute("src")) &&
            !e.classList?.contains($e),
          t = document.body.style.minWidth,
          i = document.body.style.minHeight;
        (document.body.style.minWidth = "100%"),
          (document.body.style.minHeight = "100%");
        let n = await Ke(document.body, {
          filter: e,
          width: window.innerWidth,
          height: window.innerHeight,
          backgroundColor: "#fff",
        });
        if (n && n.length < 10) {
          const t = document.body.style.position;
          (document.body.style.position = "fixed"),
            (n = await Ke(document.body, {
              filter: e,
              width: window.innerWidth,
              height: window.innerHeight,
              backgroundColor: "#fff",
            })),
            (document.body.style.position = t);
        }
        return (
          (document.body.style.minWidth = t),
          (document.body.style.minHeight = i),
          n
        );
      },
      ht = async (e = null) => {
        let t = await gt();
        if (t && t.length > 10) {
          e &&
            (t = await (async (e, t) => {
              const { title: i, thumbnail: n } = t,
                o = new Image();
              o.crossOrigin = "Anonymous";
              const a = new Promise((e) => {
                o.onload = () => e(o);
              });
              o.src = e;
              const r = new Image();
              r.crossOrigin = "Anonymous";
              const s = new Promise((e) => {
                r.onload = () => e(r);
              });
              r.src = "https://a.poki-cdn.com/images/screenshot-frame.png";
              const d = new Image();
              d.crossOrigin = "Anonymous";
              const c = new Promise((e) => {
                d.onload = () => e(d);
              });
              d.src = `https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=128,height=128,fit=cover,f=auto/${n}`;
              const l = new FontFace(
                  "TorusBold",
                  "url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)"
                ).load(),
                [p, A, u, m] = await Promise.all([a, s, c, l]),
                g = document.createElement("canvas");
              (g.width = p.width), (g.height = p.height);
              const h = g.getContext("2d");
              h.drawImage(p, 0, 0);
              const w = g.width / A.width,
                v = A.height * w,
                f = g.height - v;
              h.drawImage(A, 0, f, g.width, v);
              const b = u.height * w;
              ((e, t, i, n, o, a, r) => {
                e.save(), e.beginPath();
                const s = i + o,
                  d = n + a;
                e.moveTo(i + r, n),
                  e.lineTo(s - r, n),
                  e.quadraticCurveTo(s, n, s, n + r),
                  e.lineTo(s, d - r),
                  e.quadraticCurveTo(s, d, s - r, d),
                  e.lineTo(i + r, d),
                  e.quadraticCurveTo(i, d, i, d - r),
                  e.lineTo(i, n + r),
                  e.quadraticCurveTo(i, n, i + r, n),
                  e.closePath(),
                  e.clip(),
                  e.drawImage(t, i, n, o, a),
                  e.restore();
              })(h, u, 64 * w, f + 20 * w, b, b, 24 * w);
              const { fonts: y } = document;
              y.add(m);
              const k = 226 * w,
                _ = f + 68 * w;
              return (
                (h.textAlign = "left"),
                (h.textBaseline = "top"),
                (h.fillStyle = "#002b50"),
                (h.font = `700 ${56 * w}px TorusBold,sans-serif`),
                h.fillText(i, k, _),
                g.toDataURL()
              );
            })(t, e));
          return await mt({ screenshot: t });
        }
        return null;
      };
    function wt() {
      let e;
      try {
        (e = performance
          .getEntriesByType("resource")
          .map((e) => e.encodedBodySize)
          .reduce((e, t) => e + t)),
          (e += performance.getEntriesByType("navigation")[0].encodedBodySize);
      } catch {}
      return e;
    }
    const vt = () =>
        "undefined" != typeof navigator &&
        /(iPad|iPhone|iPod)/gi.test(navigator.userAgent),
      ft =
        "MacIntel" === window.navigator.platform &&
        void 0 !== window.navigator.standalone &&
        navigator.maxTouchPoints > 1,
      bt = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const yt = v() || f() || ft;
    let kt = !1;
    const _t = new Image();
    (_t.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAYAAACqhkzFAAADE2lDQ1BJQ0MgcHJvZmlsZQAAeNp9kk9s21Qcxz+2X92qCh4qYRqoqnIAKqoNma6gbkAhadI/tOuyJB1t4IDrOHUSx7ZsZyw9IuAIk+AAJ1BXCQ4cOMDWgZDQDttlEoi/EkIc0DQuO1ExTYIqHOKsOfEu7/s++r7v7/d+eiB2DN93BNB0o6Awn0mtrZdTg38i8TAjPMghwwz9dD6/DNDb+5YEd35GAvjhmOH7zpWvPt3rnJoYe2f/8/GxV3N3+f81XLFCE/gX5C9NP4hA2QXyr0V+BGIISAZr62UQo0Bys6t1ILnR1VkgGZQKsyDWgJRpGxUQ54GjG318s083nZYZ9zAGJIJWYRXQQDofNopLsX7LNHJF4H6Q3rOtxWVAgLTjR5lC7PmkGsytxp5Ldmuhl3OtFi2WYv1jw1sqAMMg/WGGs+XeXXdj5TSQAOl2q7GajvndipXN9TyBV4g9srpll14CVJBHwnPFHDAC8pEte3Yl5hN148V87NctZz6uKz/rR/nT9+o6K8vAYZDnrPDgjZFdWuhq+ZUoKPXuOtXa3GKcec4OFgqxft138su9TCPIzQNJkN+23NVil8vbFSO7FOd8JkbFjHhOTIuMmBEvkKVGiI+DRZ08Bi4RBg4OxsCtge85hYdLjQiPoO9k0SJgiRp1LBy2pDMUMbGxCGjifZG8uvNTYnfoekSRBvUuF0kxLdLiefGMeEqcIE2VmvwQBvX3vfbJszYZajhUCGlwk4BmdaZ98qytX9cv6lf0X/Tb+o7yobKr3FC+Vi6TwcKK/fdqa0PaMS2tTWhJbVAb1R4lR4MAA5cVbtImIuIOZQxCHDxcdUodV6fUx0mp42pWPaE+qT7dNxuDNkUa3CKgCX1/VwIS8ayngFFm8fBpE1BjE5uIFGn8eMYpFnExeYKjpJhEZ5Lja+vlVDdu7wwSIB2+ccC8bZj+G5QLB2zjA7j8Jhz59YA98hEcegMufesbgQGAAsjVKvz1Mdy3Dg98B8Mvh9Xjk93uExkY+L3T2XsMBt+F/Qudzj/bnc7+RVB+g2/c/wD2jOYIAU+O+QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQpSURBVHjapFZLLFx9FD9z74x2COod72eQUCLSSGhrPOoRFhY23xcaYtdWx6O0lSbNJxQpY6ZtpG2w6aIWFgRhiIVHLBoiLLxJBB2PIMSMx2B6zr+9k2lSH6Mnubn/3HPv75zzO68rSklJKQoPD1fs7u6CwWCAs7MzEIlExvv5+Tl7TufT09PfdPSc9CR6vR54ngd+YWFhxMrK6lZgYKBaq9UaPza9kwjgpjoSQU86juOAx/PLxcXFu9bW1qd+fn5DBwcHfw0ox8tyfn4+3tLSUu/v7z+k0+n+CvA5AdJD9DQBPT1B0GFTT80B5PAsIWVcXBxT9PT0vJmYmHjh5OQE1xEC5MlKU1MTtLa2sofd3d1Vk5OT1wJlScHLIicnB+Lj45nrg4ODFH6ira2tztvbe4Q4NYfDMgJMS0uDoKAgFvrx8TEMDw8DJuqBjY2NlkAPDw+vxqHol0YsFhvdrqqqguLiYnZWq9Vvp6ennzk4OFwpZPFFitraWmakpqaGEvWWnMDiV+zs7FyalAuluroaioqKhOzXzczMFF/mKXdZCHV1dcbwe3t7a+fm5uT/B8pdhRcKv6CgQCgp5ezsbAGBCgkxG5Ckvr4eCgsL2bmvr68eh0r+nzzlzClahUIBcrlc8PQdltVTe3v73zzlzO0EpVIJZWVlAqeqpaWlJ6aectfp18rKSmhoaBDq9D2CPrazs2Oeii/7mKY01SMNX+qWlZUV2NzcBBx1gF0E+/v7BPohNjZWjFNKJaZO+VO2BNne3obk5GRYX1/Xb2xsSC56b2BgQImGpRd6mJeXB1lZWay3iSMcaQxMKpVuHx0d6XASLXt6eq7iLllFL1fRO42Hh8eeEVBYNjQYSktLobm5Gdra2piH7e3tgIOXNT/2eTb2dndXVxckJSXByckJ0Nnd3R0QEHiM+BWGLFGpVGBhYQGRkZFnHR0dLFnEGYWL1mFtbQ3GxsaIT9uKioqvBI4UgEajgeXlZXB1dWW8klUt0djS0mJITEzU0UTCLaiJiIhQ0xmtGkhwJRDR7GpsbJRRcvAbyM/PBy8vL2a4pKSEVin/HN+/QdMa0y9BS98x5HsxMTHv+vv7X+N0EaWmpoKvry84OjpSQdPwvY27/DNFEBAQwAAp20QbhVyKBymFiB98y8jIuB8VFbVKSxvJd8a+vYOh6mUyGd/Z2Qmjo6OwtbXlhpwthYWFTe7t7TFKcAX/nIf4F8DA0tPTW3De/Yt8GMgaJSchIeE/9OjR+Pi4JDg42FgBPj4+A7gevru4uBj/LJydnRmPRP5NtP6xvLz8H+KSwCg5tEcwlE38VWkQgHBFDGVnZydlZmbK3Nzc+smoRCJh7wuVIs7NzX2IJfEFC5d1A2WPSoE2A/3vREdHv5+amgoPCQn5FBoa+oWooMzSu6blJsgPAQYACgtfMJolu7EAAAAASUVORK5CYII="),
      (_t.onload = () => {
        kt = !0;
      });
    class xt {
      image = null;
      ready = !1;
      drawSize = 0;
      previousMouseDown = !1;
      #o = 20;
      #a = 60;
      #r = 100;
      #s = 40;
      #d = 2;
      constructor(e) {
        (this.image = new Image()),
          (this.image.src = e),
          (this.image.onload = () => {
            this.ready = !0;
          });
      }
      update(e) {
        e &&
          !this.previousMouseDown &&
          ((this.drawSize += this.#o),
          (this.drawSize = Math.min(
            Math.max(this.drawSize, this.#a),
            this.#r
          ))),
          (this.drawSize -= this.#d),
          (this.drawSize = e
            ? Math.max(this.drawSize, this.#s)
            : Math.max(this.drawSize, 0)),
          (this.previousMouseDown = e);
      }
      draw(e, t, i) {
        const n = this.drawSize / 2,
          o = t - n,
          a = i - n;
        e.drawImage(
          this.image,
          0,
          0,
          this.image.width,
          this.image.height,
          o,
          a,
          this.drawSize,
          this.drawSize
        );
      }
      destroy() {
        (this.image = null), (this.ready = !1);
      }
    }
    const It = new xt(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArGSURBVHgBvVlbbFxHGZ451z273rXXsWt7k5RESpwoJqQpqdI2hTiNeQDaB0COoAIkHgolECQuEpc+eA0SD6ihBKrmIU+FloK3SJFIoWpDurmASy5qIbEJJaI0TryRb3vzXs5lZpg5O7N79vTs2gkVRxrP8dkzM9988/3/P/MfCN6HixACxwGA6fFxaXB2AGYTGRgfGCCJTIak6e/DY2N4jL4GISTgf7wguMPLBTk+rloj39srK+TDsqrvkSD4kARAlyTBGHsHYVKg1bsIo+sEgb+Zjnk69NpT6bGxMftOwd8uYDg6OiGte2Rdf2zLzq+rmv7VkAI7dRkAnSJVaJFpjxDWOsYUEqLFocVEAFRpMR0yYznOmepy/kfvHD14LZVKodsCsNoXk8mkZO38Yq/Wn0jquv5EhwpAWAHAoGBDtGgcsMTBuoABB0xvLFpMWioOAGValmkxbfRCaak0/pOPxa6tlvFVAR4dHZW3fOdX3zI07cmYBjujFGwHBRumdYiC1ChglQGGNcCssNEJqRXGsM0BM5ZLTq0ULQAKJpkplys/3jH78rEDBw6wObYFLq+AFY4mk9rWL/z0F7Gw/v3eEAytCQHQrQMQp6VTqxXGdkSpMS5Yd5mn9zpfAVYb/H+2GkxC7qrIsBMo6iMzxqa7doTzr50/fx7dMcMHJ6b6ezZseSluyHsYyC4OMMLlwICotAdVrmlXsCs6xi7NVBagJgvBNJMFY5rJokBZztGyWAUga5LL5euXR5769I550ILplgx//NAhffPw5891h+VdvQYAPXqNWQY6ptZYDQewyKShcj2L2r3nE2OyYc9lLiGhe9mdKOxD4Z4HNtrSr996K+2sGvBwMqk8+JkfHuky1E/2UgkIGXTREuXLz5aXgW3Sr0fHopa55xC1EgBWGCq7MJDu1u55oGertP7VS5dO4BUBM2/QP/Ltx2ORcJKB7WaAuV5jQgqcVTG4cGWilribgJ7/pdqjOpveNl4ZMR04UNklDW0v7V+vTKbT6SZpSH7A5d1f2xwNh5+Mc8NiEohyw3KXXeHG4mERegYVF/QVwbbCQbJVMbiBshWLcfvo4mNGdPUHc9tG72rLMIteZ7Pqkbih7OkJNQAzZusS4Iyy5YewMePV+EfxjggsQRMl9WADdWB0Rfete/iVdPo5HMjwd19ZGDQ09TGmU1Ei3BsIrfo1J4Bwh9A8OAgA7fEmjC3GuM7dYJgbc5TXRkj9SnnnQBPLdYZZcOjf/9jPug15O9Nt3OMNDG5cXgmIpfaChh6g0PM88PL2ARvtGLuI8mkTHh2VCHp4vXpKaLnOcGRoSA2p8kfrzt/HrOwDKwZYiVHiK8A3QcmjaTegcFfJXCbDoemhJ2ZnQUi0cwEz7fbu/+awpkjrhCGISCTACqtuB84Lxg/MvyLiR2EHwuUJ0AKHocJY52e/MSyau4BpDJc0Rd/nuivJEwA8EQy2AbaaXUugnnkteXy3CDgMeIgTF1LVe9kusQ44Hh+hgOXtutTQapMMQINdYWBwFYDagfdKRLDslYcqN4DLurYHgJRcB2xZGVmSpbvr4RQ2bxWF028FFraZAPG1IZ42TX1AT1AB3INwPJKifDA+NKQIwLAUpr9BuF4WeuKmKGbNem9lUN77dtolvucAtJ64N6TzQ0Gnc92oMUwNDkQ7DLp/hjExQxjQcdAgQfekRd3Kvb1nHNh8X6ulKI4xsQLocqlAIonO60voj0ABdStDCvLDrdqRoPehry17IefucyBVAqRGF2cPC6wl9rzkB+kH1I61Vs/aaZk9E3voZsPERTleI9WVxI3LGYIIKSB+pMEcuDjigIBBVvIK7TTvBS2eYX5D+NiYRzy28ScI3SyULPck4jKsrzUItsyr7EebnwzYy8g361ZAVgIV9E5QMHHDMmicThx+gLVtdCPqQHfxXYaL9i3HqZYnTX66tXkRcd0rj1aurRW4VvJo0jRp7CNEaoDxyQrDhBxryrYlTPMZhDFMPrJxIzaXly9XnVr+wEaN8xebsVgiQIINxg+ulYG289WINFICgjA3j0FLeSn35677hhymBlfIV65cwfN/+O3ZKiIFdkCs8KQHA25zHQWdv4MMDwYw6H/WBJo0ki0if8HGrojioNm5l58/t2bpPDUzUrO8kZER3KWp1Uoh/8syT3SwRlVcWxaHNJaLkGbWWmnar9GgwFI3cB9YttIlm+Oomn9VwnZlamobqTNM98L4JlxrLr155liRJzlYA3EcdyWCm0G3c2sk4N4vF+zVqwDryQq5iRaKIf/23w+jxWV7aGjUbeoCZsiHOqfR8tU3b5XzhefzVu1l0bDMDUB4EOxjO4jdoPv6JDyuU2zUKx6i2NgFNn5x+bhz5dy/jIc2WzRmNACzPijlCKugeuPsH58uWKSYt2tJDgG6ghryEKD9xuVn2c+0mCTyMGsKCXBm2biMsEIFZUrvTB2WOsLl7MmTdROqnzhSqQO4e3O36czM3MgvLjyTM2kmxuKN+azLvHObH2H8bo+A1qHXm2dzSLMEirx/NibLArE6v3DrmcKFU/+UF5FNM5z1Q2jTqfkTu3eTTNkG5uULU/qmnX1QD233bobYwFLAqYPwP36JEM/yuwHBA9bkXsCbrlriKaulbO6F2d8ffTrioOLc3EVreno6GHA6/ToY2nAawA6dZKcuToa37dpDZCUBAxgTGhQ+2vvMGwAcn8uyUEOvQqtsJZcoqwsMbMW+OvObZ7/s2FK+uICqqdSzTclBX+ZnHExNvY5PXPwTcYhBUG7+jDQwuJemj3oIbA0Ke4Ah3ABqc6AmB1oVYBH3ABYHW60xu1iqXpw7ffxLShXMgUKuPDgIbH/mJ9AzTUxMyJOTQFuQ342qNo4PfOrxsc7u+Ofco7/G8wbisKo0En1iww89Pgx5tO5Pahc8oPNUBjd/d2y8RJxc3FxTymbjJrWr96Re5RaAwRtvvESyloZVrOH8Py5Mgrs+sOBoka0OkKLu8nIGhbsTcd/yhlSnsfxMq0WnIYGsWZPBYoUUc/PzR/59/OhhyVYLSlguL9/qDwTbkmFxDQ8nlegg0DpoigCqSiR+z0ODXVvvPRSJRh+N8sRgmKda6+cv2JyBr8sDNyYh/G0pl31x8dyrP89nrmWIHSo5EakEbqyzJiZGcatPCG0Bs50cTQHILMlCd/whyTHCCFpGdNv9m2Lb7z8YNoz7dFUeMDzfOLzZSKZ1sVW0kPAMpFjJzr84/5dTz+HZ/8zZGFUcKJcH+8wKfZ0GiCRuh6ktYHGxFOzs7ICsKI5ekfOGBSxdMWXdArLat//RB8Nr+ncrhrFFUZS1sqr2Q0nqcAFjvEwwKdpm9W2rlL9YzeamF0+fmEQEm1CRLGsZmdFeuarkuqqJRAatBHbVgNlVYzsl9/ffUkpGRSPzuZDd2aE4FlEMIqsEO7Ij0f21ItOUgUwwYlxbQCUAOxg6qgYwItDBFWRLKrSUSJ+F52bsDRv2OsnkPnFWWPFaNWAPcjiaSknxk1kqgIyapXkZQ8UKMVSZFCzXiE2JSPQrA7AUh4QwBYojGMo2QpJlR0zgZBPAAXQrkEqNUkZv7wPj7QOu46ZeezwppdNAGhychYnECLw0O+0mO7oqkVq/ffTbCJKx4yjYNK/gRCLhWj5den8E//9fLKHI2Gd6Z4U+ce8BK+y39+n6L5YV4ArrvzyVAAAAAElFTkSuQmCC"
      ),
      St = new xt(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdZdEcIwDAfwZAqQgAQs4AAHIAEHzAlSWgfMARZAQUjZ9rDbR5M22f+uzdaX30OvaREUIaIDlxuPVCMiRrAOIw+a5zngrsiYlwmWQWwwIVKHKZEyrBDRYZWIDDNCtjFjZBlzQsaEZCB/HLm+wTfnhqcT+OfawD75Jijy+IBvuv/M+3Qnv4QJyQst2Wf1LFli2e5ggYn7XQ2m7uAlWPGdpMGqb1kJZvZuaN2RDBakCIIi1Hf6y/DbaR6QP+1P5pe98AyNAAAAAElFTkSuQmCC"
      );
    function Et(e, t, i, n, o, a) {
      if (!kt || !a || !_t) return;
      const r = Math.max(n, o);
      if (
        ((function (e, t, i, n, o, a) {
          [It, St].forEach((r) => {
            if (!r.ready || !a) return;
            const s = r === It ? t : i;
            r.update(s);
            const d = e.x * n,
              c = e.y * o;
            r.draw(a, d, c);
          });
        })(e, t, i, n, o, a),
        !yt)
      ) {
        const t = 0.5 * r;
        a.drawImage(
          _t,
          0,
          0,
          _t.width,
          _t.height,
          e.x * n,
          e.y * o,
          _t.width * t,
          _t.height * t
        );
      }
    }
    const Ct = "Game tab in background";
    let Pt = !0,
      Bt = [],
      Tt = null,
      Dt = document.createElement("canvas"),
      Mt = null,
      Lt = null,
      Ot = null,
      Nt = 0,
      Rt = [],
      zt = [],
      Ut = [],
      Ft = [],
      jt = 24;
    (v() || f() || ft) && (jt = 12),
      Dt.setAttribute("data-poki-no-playtest", "true"),
      Dt.addEventListener("webglcontextlost", () => {
        console.info(
          "%cPOKI_PLAYTEST:%c streamCanvas context lost",
          "font-weight: bold",
          ""
        ),
          (Dt = document.createElement("canvas")),
          (Mt = null);
      });
    const Gt = { x: 0, y: 0 };
    let Ht = !1,
      Vt = !1,
      qt = !1,
      Wt = !1,
      Qt = "",
      Kt = 1,
      $t = 1,
      Zt = -1,
      Xt = -1;
    function Yt(e) {
      if (null === Tt || !Bt.length) return;
      const t = Bt[0],
        i = t.width / Tt.width,
        n = t.height / Tt.height,
        o = (e.clientX - Tt.left) * i,
        a = (e.clientY - Tt.top) * n;
      (Gt.x = Math.max(0, Math.min(o, t.width))),
        (Gt.y = Math.max(0, Math.min(a, t.height)));
    }
    const Jt = (e) => {
        Bt.length && Dt && Yt(e);
      },
      ei = (e) => {
        Bt.length &&
          Dt &&
          (0 === e.button
            ? ((Ht = !0), (Vt = !1))
            : 2 === e.button
            ? ((qt = !0), (Wt = !1))
            : 1 === e.button && ((Ht = !0), (Vt = !1), (qt = !0), (Wt = !1)),
          Yt(e));
      },
      ti = (e) => {
        0 === e.button
          ? (Vt = !0)
          : 2 === e.button
          ? (Wt = !0)
          : 1 === e.button && ((Vt = !0), (Wt = !0));
      };
    function ii() {
      const e = Qt;
      e &&
        Dt &&
        Mt &&
        ((Mt.fillStyle = "rgba(255, 255, 255, 0.5)"),
        Mt.fillRect(0, 0, Dt.width, Dt.height),
        (Mt.font = "48px Arial"),
        (Mt.fillStyle = "#009cff"),
        (Mt.textAlign = "center"),
        Mt.fillText(e, Dt.width / 2, Dt.height / 2));
    }
    function ni(e) {
      if (!Dt || !Bt.length) return;
      const t = Bt[0],
        i = t.width,
        n = t.height;
      if (i === Zt && n === Xt && !e) return;
      (Zt = i), (Xt = n), (Tt = t.getBoundingClientRect());
      let { width: o, height: a } = Tt;
      (0 !== o && 0 !== a) || ((o = i), (a = n));
      const r = v() || f(),
        s = ft ? 1024 : r ? 640 : 1280,
        d = Math.min(s / o, s / a, 1);
      (o = Math.round(o * d)),
        (a = Math.round(a * d)),
        (Kt = o / i),
        ($t = a / n);
      e || Dt.width !== o || Dt.height !== a
        ? ((Dt.width = o),
          (Dt.height = a),
          console.info(
            `%cPOKI_PLAYTEST:%c capturing at ${o}x${a} (${i}x${n})`,
            "font-weight: bold",
            ""
          ))
        : console.info(
            `%cPOKI_PLAYTEST:%c resize but video unchanged ${o}x${a} (${i}x${n})`,
            "font-weight: bold",
            ""
          );
    }
    function oi(e) {
      let t = null;
      for (let i = 0; i < e.length; i++)
        if (!document.body.contains(e[i])) {
          if (e[i].pokiHtmlDummyCanvas) continue;
          if ((t || (t = document.getElementsByTagName("flt-glass-pane")), t)) {
            let n = !1;
            for (let o = 0; o < t.length; o++)
              t[o].shadowRoot?.contains(e[i]) && (n = !0);
            if (n) continue;
          }
          return !1;
        }
      return !0;
    }
    async function ai(e) {
      if (
        Dt &&
        (Lt ||
          ((Lt = document.createElement("canvas")),
          0 === Bt.length
            ? ((Lt.width = Dt.width), (Lt.height = Dt.height))
            : ((Lt.width = Bt[0].width), (Lt.height = Bt[0].height)),
          Lt.addEventListener("contextlost", () => {
            (Lt = null), (Ot = null);
          })),
        Ot || ((Ot = Lt.getContext("2d")), Ot))
      )
        try {
          performance.now();
          const t = await (async (e) => {
            const t = [
              "VIDEO",
              "TEXTAREA",
              "SCRIPT",
              "NOSCRIPT",
              "INPUT",
              "IFRAME",
            ];
            e || t.push("CANVAS");
            const i = (e) =>
                !(
                  t.includes(e.nodeName) ||
                  ("IMG" === e.nodeName && !e.getAttribute("src")) ||
                  e.classList?.contains($e) ||
                  "true" === e.getAttribute?.("data-poki-playtest-skip")
                ),
              n = document.body.style.minWidth,
              o = document.body.style.minHeight,
              a = document.body.style.backgroundColor;
            let r;
            (document.body.style.minWidth = "100%"),
              (document.body.style.minHeight = "100%"),
              e || (document.body.style.backgroundColor = "transparent");
            try {
              r = await We(document.body, {
                filter: i,
                width: window.innerWidth,
                height: window.innerHeight,
              });
            } catch (e) {
              console.warn(
                "%cPOKI:%c failed to generate svg",
                "font-weight: bold",
                "",
                e
              );
            }
            return (
              (document.body.style.minWidth = n),
              (document.body.style.minHeight = o),
              (document.body.style.backgroundColor = a),
              r
            );
          })(e);
          if (t && t.length > 10) {
            const e = await new Promise((e, i) => {
              const n = new Image();
              (n.decode = () => e(n)),
                (n.onload = () => e(n)),
                (n.onerror = i),
                (n.crossOrigin = "anonymous"),
                (n.decoding = "async"),
                (n.src = t);
            });
            requestAnimationFrame(() => {
              Lt &&
                Ot &&
                (Ot.clearRect(0, 0, Lt.width, Lt.height),
                Ot.drawImage(
                  e,
                  0,
                  0,
                  e.width,
                  e.height,
                  0,
                  0,
                  Lt.width,
                  Lt.height
                ),
                (Nt = 0));
            });
          }
        } catch (e) {
          console.warn(
            "%cPOKI_PLAYTEST:%c ui canvas error",
            "font-weight: bold",
            "",
            e.name,
            e.message,
            e.stack
          ),
            Nt++,
            (ki.__playtestCaptureHTML === fi ||
              ki.__playtestCaptureHTML === vi) &&
              Nt > 10 &&
              (Pt = !0);
        }
    }
    function ri(e) {
      Qt = e;
    }
    async function si(e) {
      if (!Pt) {
        Bt = e;
        for (let e = 0; e < Rt.length; e++) Rt[e].stop();
        for (let e = 0; e < zt.length; e++) zt[e].readable.cancel();
        for (let e = 0; e < Ut.length; e++) Ut[e].cancel();
        for (let e = 0; e < Ft.length; e++) Ft[e].close();
        (Rt = []), (zt = []), (Ut = []), (Ft = []);
        try {
          if (bt)
            for (let e = 0; e < Bt.length; e++) {
              if (Bt[e].pokiHtmlDummyCanvas) continue;
              const t = Bt[e].captureStream(jt).getVideoTracks()[0];
              Rt.push(t), Ft.push(null);
              const i = new Blob(
                  [
                    "self.onmessage=(async({data:{track:e}})=>{if(!e)return;const a=new MediaStreamTrackProcessor({track:e}).readable.getReader(),s=()=>{a.read().then(({done:e,value:a})=>{e?a.close():(postMessage(a),a.close(),s())})};s()});",
                  ],
                  { type: "application/javascript" }
                ),
                n = new Worker(URL.createObjectURL(i));
              n.onmessage = ({ data: t }) => {
                Ft.length <= e ||
                  (null !== Ft[e] && Ft[e].close(), (Ft[e] = t));
              };
              try {
                n.postMessage({ track: t });
              } catch (e) {
                console.warn(
                  "%cPOKI_PLAYTEST:%c worker error",
                  "font-weight: bold",
                  "",
                  e
                ),
                  (Pt = !0);
              }
            }
          else
            for (let e = 0; e < Bt.length; e++) {
              if (Bt[e].pokiHtmlDummyCanvas) continue;
              const t = Bt[e].captureStream(jt).getVideoTracks()[0],
                i = new window.MediaStreamTrackProcessor(t),
                n = i.readable.getReader();
              Rt.push(t), zt.push(i), Ut.push(n), Ft.push(null);
              const o = () => {
                n.read().then(({ done: t, value: i }) => {
                  t
                    ? (Pt = !0)
                    : Ft.length <= e
                    ? i.close()
                    : (null !== Ft[e] && Ft[e].close(), (Ft[e] = i), o());
                });
              };
              o();
            }
          ni(!0);
        } catch (e) {
          console.warn(
            "%cPOKI_PLAYTEST:%c setPlaytestSoureCanvasses error",
            "font-weight: bold",
            "",
            e
          ),
            (Pt = !0);
        }
      }
    }
    function di() {
      const { __playtestCanvas: e } = ki;
      if (e?.length && oi(e)) return e;
      if (ki.__playtestCaptureHTML === vi) {
        const e = document.createElement("canvas");
        return (
          (e.width = window.innerWidth),
          (e.height = window.innerHeight),
          e.setAttribute("data-poki-html-canvas", "true"),
          (e.pokiHtmlDummyCanvas = !0),
          [e]
        );
      }
      let t = 0,
        i = Array.from(document.getElementsByTagName("canvas"));
      if (0 === i.length) {
        const e = document.getElementsByTagName("flt-glass-pane");
        for (let t = 0; t < e.length; t++) {
          const { shadowRoot: n } = e[t];
          n && (i = i.concat(Array.from(n.querySelectorAll("canvas"))));
        }
      }
      let n = [];
      if (
        (i.forEach((e) => {
          if ("true" === e.getAttribute("data-poki-no-playtest")) return;
          const i = getComputedStyle(e),
            { width: o, height: a } = i,
            r = parseInt(o, 10) * parseInt(a, 10);
          r >= t &&
            (function (e) {
              if (!e) return !1;
              let t = e,
                i = !0;
              for (; t && t !== document.body; ) {
                const e = window.getComputedStyle(t);
                if ("none" === e.display) return !1;
                if ("hidden" === e.visibility) return !1;
                if (i && (0 === t.offsetWidth || 0 === t.offsetHeight))
                  return !1;
                "absolute" === e.position && (i = !1), (t = t.parentElement);
              }
              const n = e.getBoundingClientRect(),
                o = window.innerHeight || document.documentElement.clientHeight,
                a = window.innerWidth || document.documentElement.clientWidth;
              return !(n.right < 0 || n.bottom < 0 || n.left > a || n.top > o);
            })(e) &&
            (r > t && (n = []),
            n.push({ canvas: e, style: i, index: n.length }),
            (t = r));
        }),
        0 === n.length)
      ) {
        if (ki.__playtestCaptureHTML === fi) {
          const e = document.createElement("canvas");
          return (
            (e.width = window.innerWidth),
            (e.height = window.innerHeight),
            e.setAttribute("data-poki-html-canvas", "true"),
            (e.pokiHtmlDummyCanvas = !0),
            [e]
          );
        }
        return [];
      }
      return (
        n.sort((e, t) => {
          const i = parseInt(e.style.zIndex, 10) || 0,
            n = parseInt(t.style.zIndex, 10) || 0;
          return i < n ? -1 : i > n ? 1 : e.index - t.index;
        }),
        n.map((e) => e.canvas)
      );
    }
    function ci(e, t) {
      if (!Dt) return null;
      (Pt = !1), si(e), ni(!0);
      const i = Dt.captureStream(jt);
      let n;
      window.addEventListener("pointermove", Jt, { capture: !0, passive: !0 }),
        window.addEventListener("pointerdown", ei, {
          capture: !0,
          passive: !0,
        }),
        window.addEventListener("pointerup", ti, { capture: !0, passive: !0 }),
        window.addEventListener("contextmenu", ti, {
          capture: !0,
          passive: !0,
        });
      let o,
        a = 0,
        r = null;
      if (ki.__playtestCaptureHTML === fi || ki.__playtestCaptureHTML === vi) {
        let e = 0;
        n = setInterval(() => {
          if (!Dt) return;
          const t = !!Bt[0].pokiHtmlDummyCanvas;
          !t ||
            (Bt[0].width === window.innerWidth &&
              Bt[0].height === window.innerHeight) ||
            ((Bt[0].width = window.innerWidth),
            (Bt[0].height = window.innerHeight));
          let i = !1;
          if (
            (t &&
              document.getElementsByTagName("canvas").length > 0 &&
              (i = !0),
            !i)
          ) {
            const t = (function (e) {
              const t = 3 & e.length,
                i = e.length - t,
                n = 3432918353,
                o = 461845907;
              let a = 0,
                r = 0,
                s = 0;
              for (; s < i; )
                (r =
                  (255 & e.charCodeAt(s)) |
                  ((255 & e.charCodeAt(++s)) << 8) |
                  ((255 & e.charCodeAt(++s)) << 16) |
                  ((255 & e.charCodeAt(++s)) << 24)),
                  ++s,
                  (r =
                    ((65535 & r) * n + ((((r >>> 16) * n) & 65535) << 16)) &
                    4294967295),
                  (r = (r << 15) | (r >>> 17)),
                  (r =
                    ((65535 & r) * o + ((((r >>> 16) * o) & 65535) << 16)) &
                    4294967295),
                  (a ^= r),
                  (a = (a << 13) | (a >>> 19)),
                  (a = (5 * a + 3864292196) & 4294967295);
              switch (((r = 0), t)) {
                case 3:
                  r ^= (255 & e.charCodeAt(s + 2)) << 16;
                case 2:
                  r ^= (255 & e.charCodeAt(s + 1)) << 8;
                case 1:
                  (r ^= 255 & e.charCodeAt(s)),
                    (r =
                      ((65535 & r) * n + ((((r >>> 16) * n) & 65535) << 16)) &
                      4294967295),
                    (r = (r << 15) | (r >>> 17)),
                    (r =
                      ((65535 & r) * o + ((((r >>> 16) * o) & 65535) << 16)) &
                      4294967295),
                    (a ^= r);
              }
              return (
                (a ^= e.length),
                (a ^= a >>> 16),
                (a =
                  (2246822507 * (65535 & a) +
                    (((2246822507 * (a >>> 16)) & 65535) << 16)) &
                  4294967295),
                (a ^= a >>> 13),
                (a =
                  (3266489909 * (65535 & a) +
                    (((3266489909 * (a >>> 16)) & 65535) << 16)) &
                  4294967295),
                (a ^= a >>> 16),
                a >>> 0
              );
            })(document.body.innerHTML);
            e !== t && ((e = t), (i = !0));
          }
          i && ai(t);
        }, 1e3);
      }
      return (
        (o = setInterval(() => {
          if (Pt || !Dt || !Bt.length || a > 10)
            return (
              console.info(
                "%cPOKI_PLAYTEST:%c",
                "font-weight: bold",
                "",
                Pt ? "stopped" : "crashed",
                Pt,
                !Dt,
                !Bt.length,
                a
              ),
              window.removeEventListener("pointermove", Jt),
              window.removeEventListener("pointerdown", ei),
              window.removeEventListener("pointerup", ti),
              window.removeEventListener("contextmenu", ti),
              clearInterval(n),
              (ki.__playtestCaptureHTML = ""),
              (Dt = null),
              (Mt = null),
              (Lt = null),
              (Ot = null),
              si([]),
              It.destroy(),
              St.destroy(),
              clearInterval(o),
              r && clearTimeout(r),
              void t()
            );
          if (oi(Bt)) {
            if (!Mt && ((Mt = Dt.getContext("2d")), !Mt))
              return (
                console.info(
                  "%cPOKI_PLAYTEST:%c streamCanvas context creation failed",
                  "font-weight: bold",
                  ""
                ),
                void a++
              );
            (a = 0),
              ni(!1),
              ki.__playtestCaptureHTML === wi
                ? ((ki.__playtestCaptureHTML = ""), ai(!1))
                : ki.__playtestCaptureHTML === bi &&
                  ((ki.__playtestCaptureHTML = ""), (Lt = null), (Ot = null)),
              Mt.clearRect(0, 0, Dt.width, Dt.height);
            for (let e = 0; e < Ft.length; e++) {
              const t = Ft[e];
              null !== t &&
                Mt.drawImage(
                  t,
                  0,
                  0,
                  t.displayWidth,
                  t.displayHeight,
                  0,
                  0,
                  Dt.width,
                  Dt.height
                );
            }
            Lt &&
              Mt.drawImage(
                Lt,
                0,
                0,
                Lt.width,
                Lt.height,
                0,
                0,
                Dt.width,
                Dt.height
              ),
              Et(Gt, Ht, qt, Kt, $t, Mt),
              Ht && Vt && ((Ht = !1), (Vt = !1)),
              qt && Wt && ((qt = !1), (Wt = !1)),
              ii();
          } else {
            console.info(
              "%cPOKI_PLAYTEST:%c source canvasses not in DOM",
              "font-weight: bold",
              ""
            );
            const e = di();
            e.length
              ? si(e)
              : (console.info(
                  "%cPOKI_PLAYTEST:%c no source canvasses found",
                  "font-weight: bold",
                  ""
                ),
                a++);
          }
        }, 1e3 / jt)),
        window.addEventListener("visibilitychange", () => {
          console.info(
            "%cPOKI_PLAYTEST:%c visibility change",
            "font-weight: bold",
            "",
            document.visibilityState
          ),
            r && clearTimeout(r),
            "visible" === document.visibilityState
              ? Qt === Ct && (Qt = "")
              : ((Qt = Ct),
                ii(),
                (r = setTimeout(() => {
                  Pt = !0;
                }, 6e4)));
        }),
        window.addEventListener("resize", () => {
          console.info(
            "%cPOKI_PLAYTEST:%c resize",
            "font-weight: bold",
            "",
            window.innerWidth,
            window.innerHeight
          );
        }),
        window.addEventListener("orientationchange", (e) => {
          console.info(
            "%cPOKI_PLAYTEST:%c orientationchange",
            "font-weight: bold",
            "",
            e?.target?.screen?.orientation?.type
          );
        }),
        window.screen.orientation.addEventListener("change", (e) => {
          console.info(
            "%cPOKI_PLAYTEST:%c orientation change",
            "font-weight: bold",
            "",
            e.target?.type
          );
        }),
        i
      );
    }
    const li = new RegExp(
      `(${[
        "WebView",
        "(iPhone|iPod|iPad)(?!.*Safari)",
        "Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})",
        "Linux; U; Android",
      ].join("|")})`,
      "ig"
    );
    function pi() {
      window.navigator.userAgent.match(li) &&
        !S.isPlayground &&
        document.addEventListener(
          "touchmove",
          (e) => (e.preventDefault(), (e.returnValue = !1), !1),
          { passive: !1 }
        );
    }
    class Ai {
      #c = null;
      getUser = async () =>
        C.debug
          ? {
              id: "2ea1243e-2df1-4633-a1fd-1df63c25598b",
              username: "TestUser",
              avatarUrl: "https://a.poki-cdn.com/img/placeholder_gradient.png",
            }
          : (this.#c || (this.#c = await this.#l()), this.#c);
      login = async () => {
        if (C.debug) return;
        return (await this.getUser())
          ? void 0
          : new Promise((t, i) => {
              function n(t) {
                t.data.type === e.accounts.authPanelClosed &&
                  (window.removeEventListener("message", n),
                  i(
                    new Error("User closed the auth panel without signing in.")
                  ));
              }
              window?.top?.postMessage({ type: e.accounts.openAuthPanel }, "*"),
                window.addEventListener("message", n),
                setTimeout(() => {
                  window.removeEventListener("message", n),
                    i(
                      new Error(
                        "Login timeout. User took too long to complete the action."
                      )
                    );
                }, 45e3);
            });
      };
      #l = async () => {
        try {
          return new Promise((t) => {
            window?.top?.postMessage({ type: e.accounts.getUserInfo }, "*");
            const i = (n) => {
              if (n.data.type === e.accounts.userInfo) {
                window.removeEventListener("message", i);
                const { enabled: e, session: a } = n.data;
                if (!e || !a) return void t(null);
                (this.#c = {
                  username:
                    ((o = a.identity.id),
                    `User_${(function (e) {
                      let t = 0;
                      for (let i = 0; i < e.length; i++)
                        t = (31 * t + e.charCodeAt(i)) >>> 0;
                      return (t % 1e9) + 1;
                    })(o)}`),
                  avatarUrl:
                    "https://a.poki-cdn.com/img/placeholder_gradient.png",
                  id: a.identity.id,
                }),
                  t(this.#c);
              }
              var o;
            };
            window.addEventListener("message", i),
              setTimeout(() => {
                window.removeEventListener("message", i), t(null);
              }, 8e3);
          });
        } catch (e) {
          console.warn(
            "%cPOKI:%c failed to fetch user info",
            "font-weight: bold",
            "",
            e
          );
        }
        return null;
      };
    }
    function ui(e, ...t) {
      console.info(
        `%cPOKI:%c ${e}`,
        "background-color: green; border-radius: 3px; color: white; padding: 1px 5px",
        "",
        ...t
      );
    }
    function mi(e, ...t) {
      console.warn(
        `%cPOKI:%c ${e}`,
        "background-color: red; border-radius: 3px; color: white; padding: 1px 5px",
        "",
        ...t
      );
    }
    function gi(e, ...t) {
      console.error(
        `%cPOKI:%c ${e}`,
        "background-color: red; border-radius: 3px; color: white; padding: 1px 5px",
        "",
        ...t
      );
    }
    var hi;
    const wi = "once",
      vi = "force",
      fi = "on",
      bi = "off";
    class yi {
      __monetization;
      __gameStarted = !1;
      #p = !1;
      #A;
      #u = new J(0.01);
      #m;
      #g = 0;
      #h = 0;
      #w = 0;
      #v = 0;
      #f = new Ai();
      #b = !1;
      static lastInteractionTime = 0;
      static __playtestCanvas;
      static __playtestCaptureHTML = "";
      static __godotVersion = void 0;
      constructor(e, t = !1) {
        (this.__monetization = e),
          (this.#b = t),
          pi(),
          setInterval(() => {
            this.#h = Math.max(this.#h - 1, 0);
          }, 1e3);
      }
      init = (t = {}) => {
        this.__logCall("init", t),
          window.addEventListener("pointerdown", this.#y),
          document.addEventListener("keydown", this.#y);
        const i = window;
        if (i.engine?.config?.onPrint) {
          const e = i.engine.config.onPrint;
          i.engine.config.onPrint = (...t) => {
            e(...t);
            const n = t[0]?.match(/Godot Engine (.+)/);
            n &&
              n[1] &&
              ((hi.__godotVersion = n[1]), (i.engine.config.onPrint = e));
          };
        }
        return new Promise((i) => {
          this.__monetization.init({
            onReady: () => {
              w("preroll") && this.__monetization.forcePreroll(), i();
            },
            ...t,
          }),
            this.#k(),
            S.isInspector && this.#_(),
            document.location.search.length <= 1 &&
              (E.sendMessage(e.message.sendInspectorBadBehavior, {
                data: { behavior: "rewrite_query_params" },
              }),
              E.sendMessage(e.message.sendInspectorEvent, {
                event: "bad-behavior",
                data: { behavior: "rewrite_query_params" },
              })),
            E.sendMessage(e.message.sdkDetails, {
              version: "5ca7710b4e089af65cb8f6c747d472b76ec8592f",
            });
        });
      };
      #k = () => {
        window.addEventListener(
          "message",
          async (t) => {
            if ("pokiGenerateScreenshot" === t.data.type)
              (async (t) => {
                const { hasFrame: i } = t;
                let n = null;
                if (i) {
                  const { title: e, thumbnail: i } = t;
                  n = await ht({ title: e, thumbnail: i });
                } else n = await ht();
                const o = { screenshot: n, errors: N };
                t.callback && (o.callback = t.callback),
                  E.sendMessage(e.message.sendGameScreenshot, { data: o });
              })(t.data);
            else if ("pokiGenerateRawScreenshot" === t.data.type)
              (async () => {
                const t = await gt();
                E.sendMessage(e.message.sendGameRawScreenshot, {
                  data: { screenshot: t },
                });
              })();
            else if ("pokiUploadScreenshot" === t.data.type) {
              const i = await mt(t.data);
              E.sendMessage(e.message.sendUploadScreenshot, {
                data: { screenshot: i },
              });
            }
          },
          !1
        );
      };
      #_ = () => {
        if (
          (window.addEventListener(
            "message",
            async (t) => {
              if (
                ("pokiInspectorRequestCookies" === t.data.type &&
                  te().then((t) => {
                    E.sendMessage(e.message.sendInspectorCookies, {
                      data: { cookies: t },
                    }),
                      E.sendMessage(e.message.sendInspectorEvent, {
                        event: "cookies",
                        data: { cookies: t },
                      });
                  }),
                "pokiInspectorClearLocalStorage" === t.data.type)
              )
                try {
                  if ((localStorage.clear(), indexedDB.databases)) {
                    const e = await indexedDB.databases(),
                      t = (
                        await Promise.allSettled(
                          e
                            .filter((e) => "string" == typeof e.name)
                            .map((e) => indexedDB.deleteDatabase(e.name))
                        )
                      ).filter((e) => "rejected" === e.status);
                    t.length > 0 &&
                      mi(
                        "PokiSDK: Some IndexedDB databases failed to delete",
                        t
                      );
                  }
                  document.cookie.split(";").forEach((e) => {
                    const t = e.split("=")[0].trim();
                    document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                  }),
                    E.sendMessage(e.message.sendInspectorEvent, {
                      event: "localStorageCleared",
                    });
                } catch (t) {
                  mi("PokiSDK: Error clearing localStorage", t),
                    E.sendMessage(e.message.sendInspectorEvent, {
                      event: "localStorageClearError",
                      data: { error: String(t) },
                    });
                }
            },
            !1
          ),
          "desktop" !== S.device)
        )
          try {
            const t = (t) => {
              const i = console[t];
              console[t] = (...n) => {
                E.sendMessage(e.message.sendInspectorConsole, {
                  data: { level: t, args: O(n) },
                }),
                  E.sendMessage(e.message.sendInspectorEvent, {
                    event: "console",
                    data: { level: t, args: O(n) },
                  }),
                  i.apply(console, n);
              };
            };
            t("log"), t("warn"), t("error");
          } catch {}
      };
      initWithVideoHB = () => this.init();
      setDebug = (t = !0) => {
        this.__logCall("setDebug", t);
        const { hostname: i } = window.location;
        i.endsWith("poki-gdn.com")
          ? t && Ki.track(e.tracking.debugTrueInProduction)
          : ((C.debug = t), (C.log = t ?? C.log), t ? K() : Q());
      };
      setLogging = (e) => {
        this.__logCall("setLogging", e), (C.log = e);
      };
      #x = () => this.#h >= 10;
      gameLoadingFinished = () => {
        this.__logCall("gameLoadingFinished"),
          clearInterval(window.pokiCancelProgressInterval),
          Ki.track(e.tracking.screen.gameLoadingFinished, {
            transferSize: wt(),
            trackers: M().join(","),
            error_session_id: j,
            now: Math.round(window.performance?.now?.()) || void 0,
          });
        const t = window.pokiMeasureBuildin;
        window.PokiSDK.measure("game", "loading", "complete"),
          (window.pokiMeasureBuildin = t);
      };
      gameplayStart = (t) => {
        if ((this.__logCall("gameplayStart", t), this.#x()))
          return void mi(
            "PokiSDK.gameplayStart() ignored because of too many events"
          );
        (this.#p = !0),
          this.__gameStarted ||
            ((this.__gameStarted = !0),
            Ki.track(e.tracking.screen.firstRound),
            this.__monetization.startStartAdsAfterTimer());
        const i = this.#h;
        setTimeout(() => {
          let n;
          performance.now() - hi.lastInteractionTime < 5e3 && (n = this.#m),
            Ki.track(e.tracking.screen.gameplayStart, {
              ...t,
              fps: this.#u.stats(),
              badEvents: i,
              interaction: n,
            });
        }, 0),
          clearTimeout(this.#A),
          (this.#A = setTimeout(() => {
            window.addEventListener("pointermove", this.#I),
              document.addEventListener("keydown", this.#I);
          }, 6e5)),
          this.#g &&
            (this.#g > performance.now() - 50 && this.#h++, (this.#g = 0));
      };
      gameplayStop = (t) => {
        this.__logCall("gameplayStop", t),
          this.#x()
            ? mi("PokiSDK.gameplayStart() ignored because of too many events")
            : ((this.#p = !1),
              Ki.track(e.tracking.screen.gameplayStop, {
                ...t,
                fps: this.#u.stats(),
              }),
              clearTimeout(this.#A),
              window.removeEventListener("pointermove", this.#I),
              document.removeEventListener("keydown", this.#I),
              (this.#g = performance.now()));
      };
      customEvent = (t, i, n = {}) => {
        this.__logCall("customEvent", t, i, n),
          t && i
            ? ((t = String(t)),
              (i = String(i)),
              (n = { ...n }),
              ("game" === t && "segment" === i && n.segment) ||
                Ki.track(e.tracking.custom, {
                  eventNoun: t,
                  eventVerb: i,
                  eventData: n,
                }))
            : console.error(
                "%cPOKI:%c PokiSDK.customEvent() needs at least a noun and a verb",
                "font-weight: bold",
                ""
              );
      };
      commercialBreak = (t) =>
        new Promise((i) => {
            i();
            return;
          if ((this.__logCall("commercialBreak", t), this.#x()))
            return (
              mi("PokiSDK.commercialBreak() ignored because of too many calls"),
              void i()
            );
          const n = this.__gameStarted
            ? e.ads.position.midroll
            : e.ads.position.preroll;
          let o = !1;
          this.__runVideoAd({
            amount: 1,
            position: n,
            onStart: () => {
              if (
                (this.#w++,
                (o = !0),
                window.pokiMeasureBuildin &&
                  window.PokiSDK.measure("midroll", "start", this.#w),
                "function" == typeof t)
              )
                try {
                  t();
                } catch (e) {
                  mi(
                    "error in onStart callback of PokiSDK.commercialBreak()",
                    e
                  );
                }
            },
          }).then(() => {
            o &&
              window.pokiMeasureBuildin &&
              window.PokiSDK.measure("midroll", "complete", this.#w),
              i();
          });
        });
      rewardedBreak = (t) =>
        new Promise((i) => {
            i();
            return;
          this.__logCall("rewardedBreak", t);
          let n,
            o = 1;
          if ("function" == typeof t) n = t;
          else if ("object" == typeof t) {
            t.onStart && (n = t.onStart);
            const e = t?.size || Z.SMALL;
            e === Z.SMALL
              ? (o = 1)
              : e === Z.MEDIUM
              ? (o = 2)
              : e === Z.LARGE && (o = 3);
          }
          let a = !1;
          setTimeout(() => {
            this.__runVideoAd({
              position: e.ads.position.rewarded,
              amount: o,
              onStart: () => {
                if (
                  (this.#v++,
                  (a = !0),
                  window.pokiMeasureBuildin &&
                    window.PokiSDK.measure("rewarded", "start", this.#v),
                  "function" == typeof n)
                )
                  try {
                    n();
                  } catch (e) {
                    mi(
                      "error in onStart callback of PokiSDK.rewardedBreak()",
                      e
                    );
                  }
              },
            }).then((e) => {
              a &&
                window.pokiMeasureBuildin &&
                window.PokiSDK.measure("rewarded", "complete", this.#v),
                i(e);
            });
          }, 0);
        });
      displayAd = (t, i, n, o) => {
        return;
        this.__logCall("displayAd", t, i, n, o);
        const a = $();
        Ki.track(e.tracking.screen.displayAd, {
          size: i,
          opportunityId: a,
          duringGameplay: this.#p,
        });
        const r = {
          container: t,
          opportunityId: a,
          size: i,
          duringGameplay: this.#p,
          onCanDestroy: n,
          onDisplayRendered: o,
          headerBiddingAllowed: !0,
        };
        this.__monetization.displayAd(r);
      };
      destroyAd = (e) => {
        this.__logCall("destroyAd", e), this.__monetization.destroyAd(e);
      };
      isAdBlocked = () => !1;
      muteAd = () => {
        this.__logCall("muteAd"), this.__monetization.muteAd();
      };
      setVolume = (e) => {
        this.__logCall("setVolume", e), this.__monetization.setVolume(e);
      };
      logError = (e) => {
        this.captureError(e);
      };
      setPlaytestCanvas = (e) => {
        this.__logCall("setPlaytestCanvas", e), this.playtestSetCanvas(e);
      };
      playtestSetCanvas = (e) => {
        this.__logCall("playtestSetCanvas", e),
          e
            ? ((hi.__playtestCanvas = [].concat(e)), si(hi.__playtestCanvas))
            : (hi.__playtestCanvas = []);
      };
      playtestCaptureHtmlOnce = () => {
        this.__logCall("playtestCaptureHtmlOnce"),
          (hi.__playtestCaptureHTML = wi);
      };
      playtestCaptureHtmlForce = () => {
        this.__logCall("playtestCaptureHtmlForce"),
          (hi.__playtestCaptureHTML = vi);
      };
      playtestCaptureHtmlOn = () => {
        this.__logCall("playtestCaptureHtmlOn"),
          (hi.__playtestCaptureHTML = fi);
      };
      playtestCaptureHtmlOff = () => {
        this.__logCall("playtestCaptureHtmlOff"),
          (hi.__playtestCaptureHTML = bi);
      };
      getIsoLanguage = () => w("iso_lang");
      shareableURL = (t = {}) =>
        new Promise((i, n) => {
          this.__logCall("shareableURL", t);
          const o = new URLSearchParams(),
            a = Object.keys(t);
          if (S.isPokiIframe || S.isInspector) {
            const n = w("poki_url");
            a.forEach((e) => {
              void 0 !== t[e] && null !== t[e] && o.set(`gd${e}`, t[e]);
            }),
              i(`${n}?${o.toString()}`),
              E.sendMessage(e.message.setPokiURLParams, { params: t });
          } else
            window.self === window.top
              ? (a.forEach((e) => {
                  void 0 !== t[e] && null !== t[e] && o.set(`${e}`, t[e]);
                }),
                i(
                  `${window.location.origin}${
                    window.location.pathname
                  }?${o.toString()}`
                ))
              : n(
                  new Error(
                    "shareableURL only works on Poki or a top level frame"
                  )
                );
        });
      getURLParam = (e) => w(`gd${e}`) || w(e);
      captureError = (e) => {
        this.__logCall("captureError", e), V(e);
      };
      getLanguage = () => navigator.language.toLowerCase().split("-")[0];
      generateScreenshot = async () => (
        this.__logCall("generateScreenshot"), ht()
      );
      enableEventTracking = (e) => {
        this.__logCall("enableEventTracking", e),
          S.isPlayground ||
            S.isPokiIframe ||
            S.isInspector ||
            document?.referrer?.includes("games.poki.com") ||
            Ki.setupObserverWithCMP(e || 0);
      };
      __runVideoAd = ({
        position: t,
        amount: i,
        onStart: n,
        timeBetweenAds: o,
      }) =>
        new Promise((a) => {
          let r = 1;
          this.__monetization.setNrAds(r, i);
          const s = $(),
            d = (n) => {
              setTimeout(() => {
                if (n?.type === e.ads.limit || n?.type === e.ads.busy)
                  return void a(!1);
                if (r === i || this.#b)
                  return (
                    T.dispatchEvent(e.ads.startTimer, {
                      overwriteTimeBetweenAds: o,
                    }),
                    void a(!!n?.rewardAllowed)
                  );
                const c = T.getVideoDataAnnotations();
                if ("poki" === c?.bidder)
                  return (
                    T.dispatchEvent(e.ads.startTimer, {
                      overwriteTimeBetweenAds: o,
                    }),
                    void a(!0)
                  );
                r++,
                  T.clearVideoDataAnnotations(),
                  T.addVideoDataAnnotations({
                    adBreakId: s,
                    position: t,
                    opportunityId: $(),
                    currentAdNumber: r,
                    totalAdAmount: i,
                  }),
                  this.__monetization.setNrAds(r, i),
                  this.__monetization.requestAd({ position: t, onFinish: d });
              }, 0);
            };
          T.clearVideoDataAnnotations(),
            T.addVideoDataAnnotations({
              adBreakId: s,
              position: t,
              opportunityId: $(),
              currentAdNumber: 1,
              totalAdAmount: i,
            }),
            this.__monetization.requestAd({
              position: t,
              onFinish: d,
              onStart: () => {
                if (
                  (this.__monetization.setNrAds(r, i), "function" == typeof n)
                )
                  try {
                    n();
                  } catch (e) {
                    console.error(
                      "%cPOKI:%c error in onStart callback of PokiSDK.runVideoAd()",
                      "font-weight: bold",
                      "",
                      e
                    );
                  }
              },
            });
        });
      #I = () => {
        window.removeEventListener("pointermove", this.#I),
          document.removeEventListener("keydown", this.#I),
          Ki.track(e.tracking.screen.playerActive),
          (this.#A = setTimeout(() => {
            window.addEventListener("pointermove", this.#I),
              document.addEventListener("keydown", this.#I);
          }, 6e5));
      };
      #y = (e) => {
        "pointerdown" === e.type
          ? (this.#m = "pointerdown")
          : "keydown" === e.type
          ? (this.#m = `keydown-${e.code}`)
          : (this.#m = "unknown"),
          (hi.lastInteractionTime = performance.now());
      };
      __logCall = (e, ...t) => {
        if (!S.isPlayground) {
          for (let e = 0; e < t.length; e++) void 0 === t[e] && (t[e] = "");
          ui(`PokiSDK.${e}(`, ...t, ")");
        }
      };
      setDebugTouchOverlayController = () => {};
      gameInteractive = () => {};
      gameLoadingProgress = () => {};
      gameLoadingStart = () => {};
      getLeaderboard = () => Promise.resolve([]);
      happyTime = () => {};
      sendHighscore = () => {};
      setPlayerAge = () => {};
      roundStart = () => {};
      roundEnd = () => {};
      getUser = async () => this.#f.getUser();
      login = async () => this.#f.login();
    }
    hi = yi;
    const ki = yi;
    function _i() {
      const e = document.getElementById("poki-playtest-popup-reject"),
        t = document.getElementById("poki-playtest-popup-resolve");
      e?.removeEventListener("pointerdown", _i),
        t?.removeEventListener("pointerdown", _i),
        document.getElementById("poki-playtest-popup-wrapper")?.remove(),
        document.getElementById("poki-playtest-template-markup")?.remove(),
        document.getElementById("poki-playtest-template-style")?.remove();
    }
    function xi(e) {
      e.stopImmediatePropagation();
    }
    function Ii({ gameTitle: e, rejectCallback: t, resolveCallback: i }) {
      const n = document.body;
      !(function (e) {
        const t = document.createElement("template");
        (t.innerHTML =
          '\n\t<template id="poki-playtest-template-markup">\n\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup-wrapper" id="poki-playtest-popup-wrapper">\n\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup">\n\t\t\t\t<header class="poki-playtest-popup-scope-reset poki-playtest-popup__header">\n\t\t\t\t\t<img class="poki-playtest-popup-scope-reset poki-playtest-popup__header__img" width="36" height="36" src="https://a.poki-cdn.com/playtest/playtest-icon.svg" alt="Lab icon">\n\t\t\t\t\t<h2 class="poki-playtest-popup-scope-reset poki-playtest-popup__header__title">Hey there, adventurer</h2>\n\t\t\t\t</header>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__content">\n\t\t\t\t\t<p>You found a mystery game and have been selected to test it out! When you join the playtest, we&apos;ll record your gameplay to see all the fun (and maybe some goofy) moments you encounter. This helps the developer figure out what rocks and what needs a little extra magic in their game. Don&apos;t worry, your gameplay recording will be deleted after 365 days.</p>\n\t\t\t\t\t<p>And hey, if you&apos;re not feeling it, no biggie - you can refuse the playtest and still play the game just like normal. For more information, please read our <a href="https://a.poki-cdn.com/playtest/2025.07.31_Poki_Playtest_Privacy_Statement.pdf" download="2025-07-31 Poki Playtest Privacy Statement.pdf" target="_blank">Privacy Statement Playtest</a>.</p>\n\t\t\t\t\t<h3>Do you consent to join the playtest of <span id="poki-playtest-popup-game-title">%GAME_TITLE%</span>?</h3>\n\t\t\t\t\t<p><small>Please note that this game has been uploaded independently by this game&apos;s developer and has not yet been verified by the Poki team. If you run into any trouble, contact us at <strong><a href="mailto:hello@poki.com">hello@poki.com</a></strong></small></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__actions">\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-reject" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">No, thanks</button>\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-resolve" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">Yes, let\'s go</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</template>\n'),
          e.appendChild(t.content);
        const i = document.createElement("style");
        (i.innerHTML =
          '\n\t.poki-playtest-popup {\n\t\tall: unset;\n\n\t\t& *,\n\t\t& *::before,\n\t\t& *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t}\n\n\t.poki-playtest-popup {\n\t\tborder-radius: 16px;\n\t\tbackground: #FFF;\n\t\tbox-shadow: 0px 60px 24px 0px rgba(93, 107, 132, 0.03), 0px 34px 20px 0px rgba(93, 107, 132, 0.09), 0px 15px 15px 0px rgba(93, 107, 132, 0.15), 0px 4px 8px 0px rgba(93, 107, 132, 0.18);\n\n\t\tdisplay: flex;\n\t\tmax-width: 480px;\n\t\tmin-width: 320px;\n\t\twidth: 100%;\n\t\tpadding: 8px 0 16px 0;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tgap: 16px;\n\t\tcolor: #002B50;\n\n\t\tposition: fixed;\n\t\tz-index: 99999;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\t.poki-playtest-popup__header {\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\tpadding: 8px 16px 16px;\n\t\t\talign-items: center;\n\t\t\tgap: 12px;\n\t\t\tborder-bottom: 2px solid #F0F5FC;\n\t}\n\n\t.poki-playtest-popup__header__img {\n\t\tall: unset;\n\t}\n\n\t.poki-playtest-popup__header__title {\n\t\tfont: 700 24px/1.16 Torus, sans-serif;\n\t\tmargin: 0;\n\t}\n\n\t.poki-playtest-popup__content {\n\t\tfont: 400 14px/1.57 "Proxima Nova", sans-serif;\n\t\tpadding: 0 16px;\n\n\t\ta {\n\t\t\tcolor: #0074E0;\n\t\t\tpointer-events: auto;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: #009CFF;\n\t\t\t}\n\t\t}\n\n\t\tp {\n\t\t\tmargin: 8px 0 0;\n\n\t\t\t&:first-child {\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\n\t\t\tsmall {\n\t\t\t\tall: unset;\n\t\t\t}\n\n\t\t\t&:has(small) {\n\t\t\t\tcolor: #5D6B84;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 1.33;\n\t\t\t\tletter-spacing: 0.3px;\n\t\t\t}\n\t\t}\n\n\t\th3 {\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 16px;\n\t\t\tline-height: 1.5;\n\t\t\tmargin: 16px 0 14px;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 640px) {\n\t\t.poki-playtest-popup {\n\t\t\tgap: 8px;\n\t\t\tpadding: 8px 0 12px 0;\n\t\t}\n\t\t.poki-playtest-popup__header {\n\t\t\tpadding: 0px 16px 0px;\n\t\t\talign-items: center;\n\t\t\tgap: 8px;\n\t\t}\n\t\t.poki-playtest-popup__content {\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 1.33;\n\t\t}\n\t}\n\n\t.poki-playtest-popup__actions {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tpadding: 8px 16px 0;\n\t\tgap: 16px;\n\t\tjustify-content: center;\n\t}\n\n\t.poki-playtest-popup__button {\n\t\tdisplay: flex;\n\t\tpadding: 7px 24px 9px;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex: 1 0 0;\n\t\tborder-radius: 24px;\n\t\tbackground: #009CFF;\n\t\tcursor: pointer;\n\t\tpointer-events: auto;\n\n\t\tcolor: #FFF;\n\t\tfont: 700 16px/1.25 Torus, sans-serif;\n\n\t\t&:hover {\n\t\t\tbackground-color: #0074E0;\n\t\t}\n\t}\n\n\t.poki-playtest-popup-wrapper {\n\t\tall: unset;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground: #002B50AF;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 99998;\n\t}\n\n\t.poki-playtest-popup-scope-reset {\n\t\tletter-spacing: normal;\n\t\ttext-align: left;\n\t\ttext-decoration: none;\n\t\ttext-indent: 0;\n\t\ttext-shadow: none;\n\t\ttext-transform: none;\n\t\twhite-space: normal;\n\t\tword-spacing: normal;\n\t}\n'),
          (i.id = "poki-playtest-template-style"),
          e.appendChild(i);
      })(n);
      const o = document
        .getElementById("poki-playtest-template-markup")
        .content.cloneNode(!0);
      (o.querySelector("#poki-playtest-popup-game-title").textContent = e),
        (async function () {
          const e = new FontFace(
              "ProximaNova",
              "url(https://a.poki-cdn.com/fonts/proxima-nova-regular-latin.woff2)"
            ).load(),
            t = new FontFace(
              "ProximaNova",
              "url(https://a.poki-cdn.com/fonts/proxima-nova-bold-latin.woff2)",
              { weight: "bold" }
            ).load(),
            i = new FontFace(
              "Torus",
              "url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)"
            ).load(),
            [n, o, a] = await Promise.all([e, t, i]);
          document.fonts.add(n), document.fonts.add(o), document.fonts.add(a);
        })().then(() => {
          n.appendChild(o),
            (function ({ rejectCallback: e, resolveCallback: t }) {
              const i = document.getElementById("poki-playtest-popup-reject"),
                n = document.getElementById("poki-playtest-popup-resolve");
              i?.addEventListener("pointerup", () => {
                setTimeout(_i, 10), e();
              }),
                n?.addEventListener("pointerup", () => {
                  setTimeout(_i, 10), t();
                });
              const o = document.getElementById("poki-playtest-popup-wrapper");
              o &&
                [
                  "pointerdown",
                  "pointerup",
                  "pointermove",
                  "click",
                  "mousedown",
                  "mouseup",
                  "mousemove",
                  "touchstart",
                  "touchend",
                  "touchmove",
                  "contextmenu",
                  "dragstart",
                ].forEach((e) => o.addEventListener(e, xi));
            })({ rejectCallback: t, resolveCallback: i });
        });
    }
    function Si(e) {
      const t = [];
      let i = 0;
      for (let n = 0; n < e.length; n++) {
        if (i > 0) {
          i--;
          continue;
        }
        const o = e[n];
        if ("string" == typeof o)
          (i = (o.match(/%c/g) || []).length), t.push(o.replace(/%c/g, ""));
        else
          try {
            t.push(String(o));
          } catch (e) {
            t.push(`<${e.message}>`);
          }
      }
      return t.join(" ");
    }
    const Ei = window.requestAnimationFrame;
    function Ci(e) {
      fetch("https://mystery-game-tile.poki.io/v0/metric", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      });
    }
    function Pi(e) {
      const t = Math.random().toString(36).substring(2);
      let i = null,
        n = 0,
        o = 0,
        a = 0,
        r = [];
      const s = () => {
        a++, Ei(s);
      };
      s(),
        setInterval(() => {
          r.push(a), (a = 0);
        }, 1e3);
      const d = () => {
        const i = Gi() > 0,
          a = r;
        (r = []),
          Ci({
            metrictest_id: e.metrictestID,
            play_id: t,
            started: i,
            duration: performance.now(),
            timed_out: !0,
            sdk_version: "5ca7710b4e089af65cb8f6c747d472b76ec8592f",
            fpss: a,
            upvotes: n,
            downvotes: o,
          });
      };
      window.addEventListener("beforeunload", d);
      const c = (e) => {
        e.data &&
          "vote" === e.data.type &&
          (e.data.direction < 0 ? o++ : e.data.direction > 0 && n++);
      };
      window.addEventListener("message", c);
      i = setInterval(() => {
        const a = Gi() > 0,
          s = Math.max(Ni, ki.lastInteractionTime),
          l = performance.now() - s > 6e4,
          p = r;
        (r = []),
          l &&
            (clearInterval(i),
            window.removeEventListener("beforeunload", d),
            window.removeEventListener("message", c)),
          Ci({
            metrictest_id: e.metrictestID,
            play_id: t,
            started: a,
            duration: s,
            timed_out: l,
            sdk_version: "5ca7710b4e089af65cb8f6c747d472b76ec8592f",
            fpss: p,
            upvotes: n,
            downvotes: o,
          });
      }, 1e4);
    }
    let Bi = !1;
    try {
      "1" === localStorage.getItem("poki_pbf")
        ? (Bi = !0)
        : S.isPlayground ||
          "GB" === S.country ||
          localStorage.setItem("poki_pbf", "1");
    } catch {}
    let Ti = (e, t) => {},
      Di = [],
      Mi = null,
      Li = 0,
      Oi = 0,
      Ni = 0;
    const Ri = [
        ...Object.values(e.tracking.screen),
        e.tracking.ads.status.completed,
        e.tracking.ads.status.error,
        e.tracking.ads.status.limit,
        e.tracking.ads.video.progress,
      ],
      zi = {
        [e.tracking.screen.commercialBreak]: "commercialBreak",
        [e.tracking.screen.gameLoadingFinished]: "gameLoadingFinished",
        [e.tracking.screen.gameplayStart]: "gameplayStart",
        [e.tracking.screen.gameplayStop]: "gameplayStop",
        [e.tracking.screen.rewardedBreak]: "rewardedBreak",
      };
    let Ui = [],
      Fi = [];
    try {
      const e = (e) => {
        const t = console[e];
        (console[e] = (...i) => {
          t.apply(console, i),
            Fi &&
              Fi.push({ timeMs: performance.now(), level: e, message: Si(i) });
        }),
          Ui.push(() => {
            console[e] = t;
          });
      };
      S.gameID &&
        !S.isPlayground &&
        !S.isPokiExternal &&
        S.isPokiIframe &&
        (e("log"), e("info"), e("warn"), e("error"));
    } catch {}
    function ji() {
      (Di = null), Ui.forEach((e) => e()), (Ui = []), (Fi = null);
    }
    function Gi() {
      return Oi;
    }
    function Hi(t, i) {
      console.info(
        "%cPOKI_PLAYTEST:%c start recording using codec",
        "font-weight: bold",
        "",
        i
      );
      const n = ci(t, () => {
        Mi?.close(1e3, "Playtest recording stopped");
      });
      n &&
        ((Mi = new WebSocket("wss://playtest-recorder.poki.io/ws")),
        Mi.addEventListener("error", () => {
          Ki.track(e.tracking.playtest.error, { message: "websocket error" }),
            console.info("%cPOKI_PLAYTEST:%c error", "font-weight: bold", "");
        }),
        Mi.addEventListener("open", () => {
          if (!Mi) return;
          if (Mi.readyState === Mi.OPEN) {
            let e;
            try {
              const t = document.createElement("canvas"),
                i = {
                  powerPreference: "high-performance",
                  failIfMajorPerformanceCaveat: !1,
                };
              let n = t.getContext("webgl2", i);
              if (
                (n ||
                  ((n = t.getContext("webgl", i)),
                  n || (n = t.getContext("experimental-webgl", i))),
                n)
              ) {
                const t = n,
                  i = t.getExtension("WEBGL_debug_renderer_info");
                i && (e = t.getParameter(i.UNMASKED_RENDERER_WEBGL)),
                  e || (e = t.getParameter(t.RENDERER));
              }
            } catch {}
            const i = JSON.stringify({
              type: "save",
              game_id: S.gameID,
              version_id: S.versionID,
              webgl_renderer: e,
              sdk_version: "5ca7710b4e089af65cb8f6c747d472b76ec8592f",
              cpus: navigator.hardwareConcurrency,
              device_pixel_ratio: window.devicePixelRatio || 1,
              canvasses: t.length,
            });
            Mi.send(i),
              console.info(
                "%cPOKI_PLAYTEST:%c websocket open",
                "font-weight: bold",
                "",
                i
              );
          }
          const o = new MediaRecorder(n, {
              mimeType: i,
              videoBitsPerSecond: 5e5,
            }),
            a = performance.now(),
            r = (e) => Math.round((e || performance.now()) - a);
          o.addEventListener("stop", () => {
            console.info(
              "%cPOKI_PLAYTEST:%c recording stopped",
              "font-weight: bold",
              ""
            );
          }),
            o.addEventListener("error", (e) => {
              console.warn(
                "%cPOKI_PLAYTEST:%c",
                "font-weight: bold",
                "",
                e.error
              );
            }),
            o.addEventListener("dataavailable", (e) => {
              e.data.size > 0 &&
                Mi &&
                Mi.readyState === Mi.OPEN &&
                Mi.send(e.data);
            }),
            o.start(250);
          const s = {};
          let d = !1;
          document.addEventListener("keydown", (e) => {
            s[e.code] || ((s[e.code] = !0), (d = !0));
          }),
            document.addEventListener("keyup", (e) => {
              s[e.code] && ((s[e.code] = !1), (d = !0));
            });
          const c = setInterval(() => {
            const e = Object.keys(s);
            d &&
              e.length > 0 &&
              Mi &&
              Mi.readyState === Mi.OPEN &&
              Mi.send(
                JSON.stringify({ type: "keyboard", offset: r(), keys: s })
              ),
              (d = !1),
              e.forEach((e) => {
                s[e] || delete s[e];
              });
          }, 50);
          (Ti = (e, t) => {
            if (!Mi || Mi.readyState !== Mi.OPEN) return;
            Mi.send(O({ type: "sdk-event", offset: r(t), event: e }));
            const i = zi[e];
            i &&
              Mi.send(
                O({
                  type: "console",
                  offset: r(t),
                  level: "log",
                  message: `PokiSDK.${i}()`,
                })
              );
          }),
            null !== Di &&
              (Di.forEach((e) => {
                Ti(e.event, e.timeMs);
              }),
              (Di = null)),
            (G = (e) => {
              Mi &&
                Mi.readyState === Mi.OPEN &&
                Mi.send(
                  JSON.stringify({ type: "error", offset: r(), error: e })
                );
            }),
            Ui.forEach((e) => e()),
            (Ui = []);
          try {
            const e = (e) => {
              const t = console[e];
              (console[e] = (...i) => {
                t.apply(console, i),
                  Mi &&
                    Mi.readyState === Mi.OPEN &&
                    Mi.send(
                      JSON.stringify({
                        type: "console",
                        offset: r(),
                        level: e,
                        message: Si(i),
                      })
                    );
              }),
                Ui.push(() => {
                  console[e] = t;
                });
            };
            e("log"), e("info"), e("warn"), e("error");
          } catch {}
          Fi &&
            (Fi.forEach((e) => {
              Mi &&
                Mi.readyState === Mi.OPEN &&
                Mi.send(
                  JSON.stringify({
                    type: "console",
                    offset: r(e.timeMs),
                    level: e.level,
                    message: e.message,
                  })
                );
            }),
            (Fi = null)),
            ki.__playtestCaptureHTML === vi &&
              Mi.send(
                JSON.stringify({
                  type: "console",
                  offset: r(),
                  level: "log",
                  message: "No canvas found, using HTML capture",
                })
              );
          const l = ({ position: t }) => {
            if (!Mi || Mi.readyState !== Mi.OPEN) return;
            let i = e.tracking.screen.commercialBreak,
              n = "Commercial Break";
            t === e.ads.position.rewarded &&
              ((i = e.tracking.screen.rewardedBreak), (n = "Rewarded Break")),
              ri(n),
              Mi.send(
                JSON.stringify({ type: "sdk-event", offset: r(), event: i })
              );
          };
          T.addEventListener(e.playtest.startVideo, l);
          const p = () => {
            ri("");
          };
          T.addEventListener(e.playtest.stopVideo, p);
          const A = new J(1),
            u = setInterval(() => {
              Mi &&
                Mi.readyState === Mi.OPEN &&
                Mi.send(
                  JSON.stringify({ type: "fps", offset: r(), stats: A.stats() })
                );
            }, 1e3);
          Mi.addEventListener("close", (t) => {
            console.info(
              "%cPOKI_PLAYTEST:%c websocket closed",
              "font-weight: bold",
              "",
              t
            ),
              (Ti = () => {}),
              T.removeEventListener(e.playtest.startVideo, l),
              T.removeEventListener(e.playtest.stopVideo, p),
              clearInterval(c),
              clearInterval(u),
              o.stop(),
              (Pt = !0),
              (Mi = null),
              ji(),
              Ki.track(e.tracking.playtest.closed, {
                reason: `${t.reason}:${t.code}:${t.wasClean}`,
              });
          });
        }));
    }
    function Vi(t) {
      const i = (function (e) {
          if ("1" === w("playtest")) return !0;
          if (!S.country) return !1;
          if (!S.isPokiIframe) return !1;
          if (!e.playtestRecord) return !1;
          if (e.playtestVersion && e.playtestVersion !== S.versionID) return !1;
          if (e.playtestNewUser && Bi) return !1;
          const t = v() || f() || ft;
          if ("desktop" === e.playtestDeviceCategory && t) return !1;
          if ("mobile" === e.playtestDeviceCategory && !t) return !1;
          if (["GB", "NL", "CA"].includes(S.country)) return !1;
          const i = navigator;
          if (
            i.connection &&
            i.connection.effectiveType &&
            "4g" !== i.connection.effectiveType
          )
            return !1;
          if (i?.hardwareConcurrency < 8) return !1;
          if (
            !document
              .createElement("canvas")
              .getContext("webgl2", { failIfMajorPerformanceCaveat: !0 })
          )
            return !1;
          if (bt) {
            const e = i.userAgent.match(/Version\/([\d]+)/);
            if (!e || parseInt(e[1], 10) < 18) return !1;
          } else if (void 0 === window.MediaStreamTrackProcessor) return !1;
          return !0;
        })(t),
        n = (function () {
          if (void 0 === window.MediaRecorder) return;
          let e = 'video/webm;codecs="vp9"';
          return (
            (vt() || ft || bt) && (e = 'video/mp4;codecs="avc1.42000d"'),
            MediaRecorder.isTypeSupported(e) ? e : void 0
          );
        })(),
        o = "1" === w("playerfittest");
      if (!i || !n || o)
        return (o || (t.metrictestID && S.isPokiIframe)) && Pi(t), void ji();
      var a;
      Ki.track(e.tracking.playtest.showModal, { show: !0 }),
        console.info("%cPOKI_PLAYTEST:%c init", "font-weight: bold", "", n),
        ((a = t?.gameTitle || "this game"),
        new Promise((e, t) => {
          console.info(
            "%cPOKI_PLAYTEST:%c showing consent screen",
            "font-weight: bold",
            ""
          ),
            Ii({ rejectCallback: t, resolveCallback: e, gameTitle: a });
        }))
          .then(() => {
            Ki.track(e.tracking.playtest.accepted);
            const t = performance.now() + 6e4;
            let i = 0,
              o = performance.now();
            const a = setInterval(() => {
              const r = performance.now();
              if (
                !(function () {
                  const e = window;
                  return !!(
                    (e.pc && (e.pc.app || e.pc.AppBase)) ||
                    e.c3_runtimeInterface ||
                    e._dmJSDeviceShared ||
                    e.g_WebAudioContext ||
                    e.unityGame
                  );
                })()
              ) {
                const t = wt() || 0;
                t !== i && ((i = t), (o = r)),
                  ((Li && r - Li > 1e4) || r - o > 1e4) &&
                    (Ki.track(e.tracking.playtest.noCanvas),
                    console.info(
                      "%cPOKI_PLAYTEST:%c no canvas found, switch to HTML capture",
                      "font-weight: bold",
                      ""
                    ),
                    (ki.__playtestCaptureHTML = vi));
              }
              const s = di();
              if (s.length) {
                clearInterval(a), Ki.track(e.tracking.playtest.starting);
                try {
                  Hi(s, n);
                } catch {}
              }
              r > t &&
                (Ki.track(e.tracking.playtest.notLoaded),
                clearInterval(a),
                console.info(
                  "%cPOKI_PLAYTEST:%c no gameLoadingFinished within 2 minutes",
                  "font-weight: bold",
                  ""
                ),
                ji());
            }, 1e3);
          })
          .catch((t) => {
            Ki.track(e.tracking.playtest.rejected),
              console.info(
                "%cPOKI_PLAYTEST:%c rejected",
                "font-weight: bold",
                "",
                t
              ),
              ji();
          });
    }
    const qi = (e, t = !1) =>
        new Promise((i, n) => {
          const o = document.createElement("script");
          (o.type = t ? "module" : "text/javascript"),
            (o.async = !0),
            (o.src = e);
          const a = () => {
            (o.readyState &&
              "loaded" !== o.readyState &&
              "complete" !== o.readyState) ||
              (i(), (o.onload = null), (o.onreadystatechange = null));
          };
          (o.onload = a),
            (o.onreadystatechange = a),
            (o.onerror = n),
            document.head.appendChild(o);
        }),
      Wi = B(e.tracking),
      Qi = window;
    class Ki {
      static logToObserver = !1;
      static cmpRequired = void 0;
      static cmpIndex = void 0;
      static eventQueue = [];
      static track(t, i = {}) {
        try {
          let n = { ...i };
          if (-1 === Wi.indexOf(t))
            throw new TypeError(
              `Invalid 'event', must be one of ${Wi.join(", ")}`
            );
          if ("object" != typeof n)
            throw new TypeError("Invalid data, must be an object");
          const o = T.getVideoDataAnnotations();
          if (o?.pokiAdServer)
            switch (t) {
              case e.tracking.ads.status.started: {
                const { creativeId: e } = o;
                T.addVideoDataAnnotations({ houseAdId: e }), (n.houseAdId = e);
                break;
              }
              case e.tracking.ads.status.impression: {
                const e = n?.creativeId;
                D({ ...n, event: "video-impression", creativeId: e }),
                  T.addVideoDataAnnotations({ houseAdId: e }),
                  (n.houseAdId = e);
                break;
              }
              case e.tracking.ads.video.error:
                D({ ...n, event: "video-error", errorCode: n?.errorCode });
                break;
              case e.tracking.ads.video.loaderError:
                D({
                  ...n,
                  event: "video-adsloader-error",
                  errorCode: n?.errorCode,
                });
                break;
              case e.tracking.ads.status.completed:
                D({ ...n, event: "video-complete" });
            }
          if ((t.includes("pokiTrackingRewardedWeb") && (n = o), C.log)) {
            if ("test" === window?.process?.env?.NODE_ENV) return;
            Object.keys(n).length
              ? console.info(
                  `%cPOKI_TRACKER:%c Tracked event '${t}' with data:`,
                  "font-weight: bold",
                  "",
                  n
                )
              : console.info(
                  `%cPOKI_TRACKER:%c Tracked event '${t}'`,
                  "font-weight: bold",
                  ""
                );
          }
          if (
            ((function (t) {
              if (
                ((Ni = performance.now()),
                t.event === e.tracking.screen.gameLoadingFinished
                  ? (Li = performance.now())
                  : t.event === e.tracking.screen.gameplayStart &&
                    (Oi = performance.now()),
                Ri.includes(t.event))
              )
                try {
                  Ti(t.event),
                    null !== Di &&
                      Di.push({ event: t.event, timeMs: performance.now() });
                } catch (e) {
                  console.warn(
                    "%cPOKI_PLAYTEST:%c",
                    "font-weight: bold",
                    "",
                    e
                  );
                }
            })({ event: t, data: n }),
            E.sendMessage(e.message.event, { event: t, data: n }),
            !(
              S.isPokiIframe ||
              S.isInspector ||
              S.isPlayground ||
              S.isPokiExternal
            ))
          ) {
            const i = "sdk",
              o = "message",
              a = {
                content: {
                  event: t,
                  data: n,
                  pokifordevs: { game_id: S.gameID, game_version_id: void 0 },
                },
                type: e.message.event,
              };
            Ki.logToObserver
              ? Ki.pushEvent(i, o, a)
              : (Ki.eventQueue.push([i, o, a]),
                Ki.eventQueue.length > 100 && Ki.eventQueue.shift());
          }
        } catch (e) {
          gi("error while tracking event", e);
        }
      }
      static setupDefaultEvents() {
        const t = {
          [e.ready]: e.tracking.sdk.status.initialized,
          [e.failed]: e.tracking.sdk.status.failed,
          [e.ads.busy]: e.tracking.ads.status.busy,
          [e.ads.completed]: e.tracking.ads.status.completed,
          [e.ads.error]: e.tracking.ads.status.error,
          [e.ads.impression]: e.tracking.ads.status.impression,
          [e.ads.limit]: e.tracking.ads.status.limit,
          [e.ads.ready]: e.tracking.ads.status.ready,
          [e.ads.requested]: e.tracking.ads.status.requested,
          [e.ads.prebidRequested]: e.tracking.ads.status.prebidRequested,
          [e.ads.skipped]: e.tracking.ads.status.skipped,
          [e.ads.started]: e.tracking.ads.status.started,
          [e.ads.video.clicked]: e.tracking.ads.video.clicked,
          [e.ads.video.error]: e.tracking.ads.video.error,
          [e.ads.video.loaderError]: e.tracking.ads.video.loaderError,
          [e.ads.video.buffering]: e.tracking.ads.status.buffering,
          [e.ads.video.progress]: e.tracking.ads.video.progress,
          [e.ads.video.paused]: e.tracking.ads.video.paused,
          [e.ads.video.resumed]: e.tracking.ads.video.resumed,
          [e.ads.extendedVideoError]: e.tracking.ads.video.extendedVideoError,
        };
        Object.keys(t).forEach((e) => {
          T.addEventListener(e, (i) => {
            Ki.track(t[e], i);
          });
        });
      }
      static pushEvent(e, t, i) {
        Qi.pokiGTM.push({
          event: `${e}-${t}`,
          eventNoun: e,
          eventVerb: t,
          eventData: i || {},
        });
      }
      static setRequireConsent(e) {
        (Ki.cmpRequired = e), Ki.setupObserverIfCMP();
      }
      static setupObserverWithCMP(e) {
        (Ki.cmpIndex = e), Ki.setupObserverIfCMP();
      }
      static setupObserverIfCMP() {
        if (void 0 !== Ki.cmpRequired && void 0 !== Ki.cmpIndex)
          if (Ki.cmpRequired) {
            if (!window.__tcfapi)
              return void console.error(
                "%cPOKI:%c PokiSDK.enableEventTracking() was called but no CMP is present.",
                "font-weight: bold",
                ""
              );
            window.__tcfapi("addEventListener", 2, (e, t) => {
              !t ||
                ("tcloaded" !== e.eventStatus &&
                  "useractioncomplete" !== e.eventStatus) ||
                (window.__tcfapi("getNonIABVendorConsents", 2, (e) => {
                  e &&
                    e.nonIabVendorConsents &&
                    e.nonIabVendorConsents[Ki.cmpIndex || 0] &&
                    Ki.setupObserver();
                }),
                window.__tcfapi(
                  "removeEventListener",
                  2,
                  () => {},
                  e.listenerId
                ));
            });
          } else Ki.setupObserver();
      }
      static setupObserver() {
        for (
          Qi._pokiSessionGlobalName = "pokiSession",
            Qi._pokiUserGlobalName = "pokiUser",
            Qi._pokiContextGlobalName = "pokiContext",
            Qi._pokiTrackerGlobalName = "pokiTracker",
            (function (e, i, s) {
              var m = null;
              try {
                (m = l())
                  ? ((m.previous_page.path = m.page.path),
                    (m.previous_page.type = m.page.type),
                    (m.previous_page.id = m.page.id),
                    (m.previous_page.start = m.page.start),
                    (m.previous_page.pageview_id = m.page.pageview_id),
                    (m.page.path = e),
                    (m.page.type = i),
                    (m.page.id = s),
                    (m.page.start = Date.now()),
                    (m.page.pageview_id = o()),
                    (m.depth = u() + 1),
                    (m.expire = Date.now() + 18e5))
                  : (m = (function (e, i, s) {
                      try {
                        var l = t(r);
                        if (l) {
                          var m = JSON.parse(l);
                          if (c(m, !0))
                            return (
                              (m.previous_page.path = m.page.path),
                              (m.previous_page.type = m.page.type),
                              (m.previous_page.id = m.page.id),
                              (m.previous_page.start = m.page.start),
                              (m.previous_page.pageview_id =
                                m.page.pageview_id),
                              (m.page.path = e),
                              (m.page.type = i),
                              (m.page.id = s),
                              (m.page.start = Date.now()),
                              (m.page.pageview_id = o()),
                              (m.depth = u() + 1),
                              (m.expire = Date.now() + 18e5),
                              (m.tab_id = A()),
                              n(r, JSON.stringify(m)),
                              m
                            );
                        }
                      } catch (e) {
                        var g = null;
                        try {
                          g = t(r) || null;
                        } catch (e) {}
                        a(e, "getSessionDepth", g);
                      }
                      var h = o();
                      return {
                        id: o(),
                        expire: Date.now() + 18e5,
                        tab_id: A(),
                        depth: 1,
                        count: p() + 1,
                        page: {
                          path: e,
                          type: i,
                          id: s,
                          start: Date.now(),
                          pageview_id: h,
                        },
                        previous_page: {},
                        landing_page: {
                          path: e,
                          type: i,
                          id: s,
                          start: Date.now(),
                          pageview_id: h,
                        },
                        referrer_domain: d(),
                      };
                    })(e, i, s)),
                  m.count > 1 &&
                    (n(
                      "poki_uid_new",
                      "0",
                      parseInt(t("poki_uid_ttl"), 10) || 15552e3
                    ),
                    window[window._pokiUserGlobalName] &&
                      (window[window._pokiUserGlobalName].is_new = !1));
                var g = JSON.stringify(m);
                try {
                  sessionStorage.setItem(r, g);
                } catch (e) {
                  a(e, "updateSession-1");
                }
                window[window._pokiSessionGlobalName] = m;
                try {
                  n(r, g);
                } catch (e) {
                  a(e, "updateSession-4");
                }
              } catch (e) {
                a(e, "updateSession-2");
              }
            })(window.location.pathname, "external", S.contentGameID),
            (function () {
              var e,
                i,
                a,
                r,
                s =
                  null === (e = window[window._pokiUserGlobalName]) ||
                  void 0 === e
                    ? void 0
                    : e.id,
                d =
                  (null === (i = window[window._pokiUserGlobalName]) ||
                  void 0 === i
                    ? void 0
                    : i.is_new) || !1,
                c =
                  (null === (a = window[window._pokiUserGlobalName]) ||
                  void 0 === a
                    ? void 0
                    : a.version) || 0,
                l =
                  (null === (r = window[window._pokiUserGlobalName]) ||
                  void 0 === r
                    ? void 0
                    : r.ttl) || 15552e3;
              s ||
                ((s = t("poki_uid")),
                (d = "1" === t("poki_uid_new")),
                (c = parseInt(t("poki_uid_version"), 10) || 0),
                (l = parseInt(t("poki_uid_ttl"), 10) || l)),
                (s &&
                  (function (e) {
                    if (!/^[A-Za-z0-9-_]+$/.test(e)) return !1;
                    try {
                      return (
                        16 ===
                        atob(e.replace(/-/g, "+").replace(/_/g, "/")).length
                      );
                    } catch (e) {
                      return !1;
                    }
                  })(s)) ||
                  ((s = o()), (d = !0), (c = 1), (l = 15552e3)),
                n("poki_uid", s, l),
                n("poki_uid_new", d ? "1" : "0", l),
                n("poki_uid_version", c, l),
                n("poki_uid_ttl", l, l),
                (window[window._pokiUserGlobalName] = {
                  id: s,
                  is_new: d,
                  version: c,
                  ttl: l,
                });
            })(),
            Qi[Qi._pokiSessionGlobalName].referrer = S.referrerParam,
            Qi[Qi._pokiContextGlobalName] = {
              tag: null,
              site: { id: null, domain: window.location.hostname, prefix: "" },
              page: {
                id: S.contentGameID,
                type: "external",
                path: window.location.pathname,
                pageview_id: o(),
              },
              user: Qi[Qi._pokiUserGlobalName],
              session: Qi[Qi._pokiSessionGlobalName],
            },
            Qi.pokiGTM = Qi.pokiGTM || [],
            qi("https://a.poki-cdn.com/t2.js"),
            Ki.logToObserver = !0;
          Ki.eventQueue.length;

        ) {
          const [e, t, i] = Ki.eventQueue.shift();
          Ki.pushEvent(e, t, i);
        }
      }
    }
    i(721);
    function $i(e) {
      if (!document.body || !document.body.appendChild)
        return void document.addEventListener("DOMContentLoaded", () => {
          $i(e);
        });
      const t = document.createElement("iframe");
      (t.style.display = "none"),
        document.body.appendChild(t),
        t.contentWindow &&
          (t.contentWindow.document.open(),
          t.contentWindow.document.write(`<script>${e}<\/script>`),
          t.contentWindow.document.close());
    }
    function Zi() {
      $i(
        "\nwindow.addEventListener('storage', function(event) {\n\ttry {\n\t\tconst key = event.key;\n\n\t\t// key is null when localStorage.clear() is called.\n\t\tif (key === null) {\n\t\t\twindow.top.postMessage({\n\t\t\t\ttype: 'mutateSaveGame',\n\t\t\t\tcontent: {\n\t\t\t\t\taction: 'clear',\n\t\t\t\t},\n\t\t\t}, '*');\n\t\t\treturn;\n\t\t}\n\n\t\t// newValue is null when localStorage.removeItem() is called.\n\t\tif (event.newValue === null) {\n\t\t\twindow.top.postMessage({\n\t\t\t\ttype: 'mutateSaveGame',\n\t\t\t\tcontent: {\n\t\t\t\t\taction: 'delete',\n\t\t\t\t\tkey,\n\t\t\t\t},\n\t\t\t}, '*');\n\t\t} else {\n\t\t\twindow.top.postMessage({\n\t\t\t\ttype: 'mutateSaveGame',\n\t\t\t\tcontent: {\n\t\t\t\t\taction: 'set',\n\t\t\t\t\tkey,\n\t\t\t\t\tvalue: event.newValue,\n\t\t\t\t},\n\t\t\t}, '*');\n\t\t}\n\t} catch { }\n});\n"
      );
    }
    const Xi = () => {
      S.isPokiIframe &&
        (setTimeout(ie.trackSavegames, 1e4),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && Zi());
    };
    let Yi,
      Ji,
      en = !1,
      tn = !1,
      nn = 0;
    const on = () => {
        nn++,
          (Yi = setTimeout(on, 100 * nn)),
          window.__tcfapi &&
            window.__tcfapi("ping", 2, (e, t) => {
              t && e?.cmpLoaded && ((en = !0), clearTimeout(Yi));
            });
      },
      an = () => {
        nn++,
          (Ji = setTimeout(an, 100 * nn)),
          window.__uspapi &&
            window.__uspapi("uspPing", 1, () => {
              (tn = !0), clearInterval(Ji);
            });
      },
      rn = () => {
        S.gdprApplies
          ? (!(function () {
              if (window.__tcfapi || S.isPlayground || S.familyFriendly) return;
              const e = window.top,
                t = {};
              let i = !1;
              const n = [];
              (window.__tcfapi = (o, a, r, s) => {
                if (!i) return n.push([o, a, r, s]), !0;
                const d = `${Math.random()}`,
                  c = {
                    __tcfapiCall: {
                      command: o,
                      parameter: s,
                      version: a,
                      callId: d,
                    },
                  };
                return (t[d] = r), e.postMessage(c, "*"), !0;
              }),
                window.addEventListener(
                  "message",
                  function (e) {
                    let i = {};
                    try {
                      i =
                        "string" == typeof e.data ? JSON.parse(e.data) : e.data;
                    } catch {}
                    const n = i.__tcfapiReturn;
                    n &&
                      "function" == typeof t[n.callId] &&
                      (t[n.callId](n.returnValue, n.success),
                      delete t[n.callId]);
                  },
                  !1
                );
              const o = `${Math.random()}`;
              let a = null;
              (t[o] = (e, t) => {
                i ||
                  (t &&
                    ((i = !0),
                    clearInterval(a),
                    n.forEach((e) => {
                      window.__tcfapi(...e);
                    }),
                    (n.length = 0)));
              }),
                (a = setInterval(() => {
                  e.postMessage(
                    {
                      __tcfapiCall: { command: "ping", version: 2, callId: o },
                    },
                    "*"
                  );
                }, 500)),
                setTimeout(() => {
                  clearInterval(a);
                }, 1e4);
            })(),
            Ki.setRequireConsent(!0),
            on(),
            setTimeout(() => {
              en ||
                S.isPlayground ||
                S.isPokiIframe ||
                console.warn(
                  "%cPOKI:%c GDPC - No __tcfapi callback after 2s, verify implementation!",
                  "font-weight: bold",
                  ""
                );
            }, 2e3))
          : Ki.setRequireConsent(!1),
          S.ccpaApplies &&
            (!(function () {
              if (window.__uspapi || S.isPlayground || S.familyFriendly) return;
              const e = window.top,
                t = {};
              (window.__uspapi = (i, n, o) => {
                const a = `${Math.random()}`,
                  r = { __uspapiCall: { command: i, version: n, callId: a } };
                (t[a] = o), e.postMessage(r, "*");
              }),
                window.addEventListener(
                  "message",
                  function (e) {
                    const i = e && e.data && e.data.__uspapiReturn;
                    i &&
                      i.callId &&
                      "function" == typeof t[i.callId] &&
                      (t[i.callId](i.returnValue, i.success),
                      (t[i.callId] = null));
                  },
                  !1
                );
            })(),
            an(),
            setTimeout(() => {
              tn ||
                S.isPlayground ||
                S.isPokiIframe ||
                console.warn(
                  "%cPOKI:%c USPrivacy - No __uspapi callback after 2s, verify implementation!",
                  "font-weight: bold",
                  ""
                );
            }, 2e3));
      },
      sn = () => S.gdprApplies && !en && !C.debug && !S.familyFriendly,
      dn = () => S.ccpaApplies && !tn && !C.debug && !S.familyFriendly,
      cn = {
        adTagUrl:
          "//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1",
        adTiming: {
          preroll: !1,
          timeBetweenAds: 12e4,
          timePerTry: 7e3,
          startAdsAfter: 12e4,
        },
        waterfallRetries: 2,
      };
    class ln {
      #S;
      #E;
      constructor(t = {}) {
        this.setTimings(t),
          (this.#E = {
            timePerTry: void 0,
            timeBetweenAds: void 0,
            startAdsAfter: void 0,
          }),
          t?.fake ||
            T.addEventListener(
              e.ads.startTimer,
              this.startTimeBetweenAdsTimer.bind(this)
            );
      }
      setTimings(e) {
        const t = cn.adTiming,
          {
            preroll: i = t.preroll,
            timePerTry: n = t.timePerTry,
            timeBetweenAds: o = t.timeBetweenAds,
            startAdsAfter: a = t.startAdsAfter,
          } = e;
        this.#S = {
          preroll: !1 !== i,
          timePerTry: n,
          timeBetweenAds: o,
          startAdsAfter: a,
        };
      }
      resetAll() {
        this.stopTimer("timePerTry"),
          this.stopTimer("timeBetweenAds"),
          this.stopTimer("startAdsAfter");
      }
      startTimeBetweenAdsTimer(e) {
        e?.overwriteTimeBetweenAds
          ? this.startTimer(
              "timeBetweenAds",
              () => {},
              e.overwriteTimeBetweenAds
            )
          : this.startTimer("timeBetweenAds");
      }
      startStartAdsAfterTimer() {
        this.startTimer("startAdsAfter");
      }
      requestPossible() {
        return !this.#E.timeBetweenAds && !this.#E.startAdsAfter;
      }
      startWaterfallTimer(e) {
        this.startTimer("timePerTry", e);
      }
      stopWaterfallTimer() {
        this.stopTimer("timePerTry");
      }
      stopTimer(e) {
        this.#E[e] && (clearTimeout(this.#E[e]), (this.#E[e] = void 0));
      }
      startTimer(e, t = () => {}, i) {
        const n = i || this.#S[e];
        n <= 0
          ? t()
          : (this.#E[e] && clearTimeout(this.#E[e]),
            (this.#E[e] = window.setTimeout(() => {
              this.stopTimer(e), t();
            }, n)));
      }
      prerollPossible() {
        return this.#S.preroll;
      }
    }
    const pn = () => {
        const e = new URL(window.location.href);
        e.hash = "";
        const t = [];
        return (
          e.searchParams.forEach((e, i) => t.push(i)),
          t.forEach((t) => {
            e.searchParams.delete(t);
          }),
          e.toString()
        );
      },
      An = (e) => {
        let t = "";
        return (
          Object.keys(e).forEach((i) => {
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              let n = e[i];
              Array.isArray(n) && (n = n.join()), (t += `${i}=${n}&`);
            }
          }),
          (t = encodeURIComponent(t)),
          `&cust_params=${t}`
        );
      };
    const un = {
        v_k0treo: 2.5,
        v_qr1wxs: 7.5,
        v_9diccg: 19,
        v_13q0xkw: 0.25,
        v_dn33ls: 1,
        v_z07u2o: 1.5,
        v_1400iyo: 2.25,
        v_9w8kxs: 3,
        v_ufej9c: 3.5,
        v_10960ao: 4.25,
        v_1ksbym8: 4.75,
        v_1ag9340: 5.25,
        v_1tbhh4w: 5.75,
        v_jjcgzk: 6.5,
        v_brnu9s: 7,
        v_1wscef4: 7.75,
        v_q22xhc: 8.5,
        v_f8irk0: 9,
        v_1rik45c: 9.75,
        v_lxhyww: 10.5,
        v_a9z0u8: 11,
        v_1yhiww0: 11.75,
        v_10mwg74: 12.25,
        v_1ji4u80: 12.75,
        v_wm2c5c: 13.5,
        v_2na6tc: 14,
        v_1myzri8: 14.75,
        v_3pzm68: 6,
        v_16kerr4: 6.25,
        v_1mdrmkg: 6.75,
        v_1ga0k5c: 7.25,
        v_5iwz5s: 8,
        v_12tk934: 8.25,
        v_1hsybr4: 8.75,
        v_1cj61hc: 9.25,
        v_y3r5kw: 9.5,
        v_94ow0: 10,
        v_15woqgw: 10.25,
        v_1orx4hs: 10.75,
        v_1d4e6f4: 11.25,
        v_t57ev4: 11.5,
        v_783hmo: 12,
        v_m7hkao: 12.5,
        v_hmo9hc: 13,
        v_19djnr4: 13.25,
        v_1twpm2o: 13.75,
        v_17zlou8: 14.25,
        v_ign1mo: 14.5,
        v_ccvz7k: 15,
        v_1f7b4sg: 15.25,
        v_snq4g0: 15.5,
        v_5wnf28: 16,
        v_137aozk: 16.25,
        v_1j0njsw: 16.75,
        v_1b8yx34: 17.25,
        v_yhhlhc: 17.5,
        v_25swe8: 18,
        v_15081z4: 18.25,
        v_1pje0ao: 18.75,
        v_1eptudc: 19.25,
        v_1xl28e8: 19.75,
        v_gfliio: 21,
        v_3y3sao: 22,
        v_ixhuyo: 22.5,
        v_ro52io: 23.5,
        v_qa73ls: 24.5,
        v_emo5j4: 25,
        v_yq5fk: 26,
        v_aobxts: 27,
        v_6shmgw: 28,
        v_natgqo: 28.5,
        v_x0f94w: 29.5,
        v_d2hfr4: 31,
        v_dch14w: 33,
        v_1jyadc: 34,
        v_8p5tz4: 36,
        v_fwv9xc: 37,
        v_c60r9c: 39,
        v_58awow: 40,
        v_bbcow: 42,
        v_a0x534: 43,
        v_hdmdq8: 45,
        v_2e8b28: 46,
        v_5nljb4: 48,
        v_1wr0n4: 50,
        v_pam1og: 0.5,
        v_1ipf08w: 0.75,
        v_1axqdj4: 1.25,
        v_1qr38cg: 1.75,
        v_15ldds: 2,
        v_1q248w0: 2.75,
        v_1eelatc: 3.25,
        v_1x9tou8: 3.75,
        v_8iam0w: 4,
        v_nhooow: 4.5,
        v_fq01z4: 5,
        v_w0u77k: 5.5,
        v_1vi5a0w: 15.75,
        v_orvt34: 16.5,
        v_dybn5s: 17,
        v_1q8czr4: 17.75,
        v_l11af4: 18.5,
        v_uqn2tc: 19.5,
        v_7zkdfk: 20,
        v_o7a58g: 20.5,
        v_vezl6o: 21.5,
        v_b5t88w: 23,
        v_4x2d4w: 24,
        v_xhwjk0: 25.5,
        v_lhw3r4: 26.5,
        v_tjkbuo: 27.5,
        v_h72ebk: 29,
        v_31n3sw: 30,
        v_64rl6o: 32,
        v_9lmigw: 35,
        v_3fdjpc: 38,
        v_fapfcw: 41,
        v_7o0lc0: 44,
        v_clbdvk: 47,
        v_ee8qv4: 49,
      },
      mn = {
        "11s3rwg": 2.49,
        "1uhxr0g": 2.87,
        qr1wxs: 7.5,
        "15xxon4": 0.01,
        o6no5c: 0.02,
        fb0nwg: 0.04,
        "1etkow0": 0.05,
        x2aoe8: 0.06,
        "1wkupds": 0.07,
        "11i46io": 0.09,
        jqu60w: 0.1,
        "1j9e70g": 0.11,
        "1adr6rk": 0.13,
        smh69s: 0.14,
        "1s5179c": 0.15,
        "8naeps": 0.16,
        qekf7k: 0.18,
        "1px4g74": 0.19,
        hixeyo: 0.2,
        za7fgg: 0.22,
        "1ysrgg0": 0.23,
        lyqx34: 0.26,
        "16hwveo": 1.13,
        "1fdjvnk": 1.17,
        "2jjcao": 1.2,
        "1jtdds0": 1.23,
        t6gd1c: 1.26,
        "65e29s": 1.28,
        "1nf83r4": 1.31,
        wsb30g: 1.34,
        jgukn4: 1.38,
        al7ke8: 1.4,
        "1a3rlds": 1.41,
        "8datc0": 1.44,
        "1pn4utc": 1.47,
        z07u2o: 1.5,
        "13g1c74": 1.53,
        ct4bgg: 1.56,
        ukeby8: 1.58,
        mspp8g: 1.62,
        "1dfmpz4": 1.65,
        lm6m8: 1.68,
        icw740: 1.7,
        "18zt7uo": 1.73,
        "79cfsw": 1.76,
        "1oj6ha8": 1.79,
        "1xethj4": 1.83,
        "12c2yo0": 1.85,
        bp5xxc: 1.88,
        "1syzzeo": 1.91,
        ncow00: 1.94,
        "1dzlwqo": 1.97,
        "15ldds": 2,
        "10o5edc": 2.009999,
        a18dmo: 2.04,
        "1rb2f40": 2.069999,
        pkln28: 2.1,
        "1g7insw": 2.13,
        "12w25fk": 2.17,
        c954ow: 2.2,
        "1brp5og": 2.21,
        "1400iyo": 2.25,
        v4dips: 2.3,
        hsx0cg: 2.34,
        "18fu134": 2.37,
        "167xa0w": 2.41,
        "1f3ka9s": 2.45,
        "1d5n4lc": 1.01,
        "1uwx534": 1.03,
        bml8g: 1.04,
        i2wlq8: 1.06,
        "979lhc": 1.08,
        "18ptmgw": 1.09,
        "1qh3myo": 1.11,
        "6zcuf4": 1.12,
        oqmuww: 1.14,
        fuzuo0: 1.16,
        xm9v5s: 1.18,
        "1x4tw5c": 1.19,
        "1223da8": 1.21,
        katcsg: 1.22,
        bf6cjk: 1.24,
        "1axqdj4": 1.25,
        "1sp0e0w": 1.27,
        "15ny39c": 1.29,
        nwo2rk: 1.3,
        f112io: 1.32,
        "1ejl3i8": 1.33,
        "1pkk5c": 1.36,
        "1184l4w": 1.37,
        "1izelmo": 1.39,
        schkw0: 1.42,
        "1rv1lvk": 1.43,
        "17vuubk": 1.45,
        q4ktts: 1.46,
        h8xtkw: 1.48,
        "1yirv28": 1.51,
        "3xhb7k": 1.52,
        lorbpc: 1.54,
        "1l7bcow": 1.55,
        "1cbocg0": 1.57,
        "1u2ycxs": 1.59,
        "51foqo": 1.6,
        "14jzpq8": 1.61,
        "1mb9q80": 1.63,
        dx2ozk: 1.64,
        vocphc: 1.66,
        "1v6wqgw": 1.67,
        "10467ls": 1.69,
        "1hvg83k": 1.71,
        "9h96v4": 1.72,
        r8j7cw: 1.74,
        "1qr38cg": 1.75,
        "16rwgsg": 1.77,
        p0mgao: 1.78,
        g4zg1s: 1.8,
        "1fnjh1c": 1.81,
        xw9gjk: 1.82,
        "2tixog": 1.84,
        kksy68: 1.86,
        "1k3cz5s": 1.87,
        "1b7pyww": 1.89,
        tgfyf4: 1.9,
        "5levi8": 1.92,
        "153ywhs": 1.93,
        "1mv8wzk": 1.95,
        eh1vr4: 1.96,
        w8bw8w: 1.98,
        iwvdvk: 2.02,
        "1iffev4": 2.029999,
        "19jsem8": 2.049999,
        rsie4g: 2.06,
        "7tbmkg": 2.08,
        "17bvnk0": 2.089999,
        "1p35o1s": 2.11,
        goymtc: 2.12,
        "1xysoao": 2.15,
        "3di4g0": 2.16,
        l4s4xs: 2.18,
        "1knc5xc": 2.19,
        u0f56o: 2.22,
        "1tiz668": 2.23,
        "4hghz4": 2.24,
        m8qigw: 2.26,
        dd3i80: 2.28,
        "1cvnj7k": 2.29,
        "1umxjpc": 2.31,
        "1mzuo": 2.32,
        zk70u8: 2.33,
        "1hbh1c0": 2.35,
        "8xa03k": 2.36,
        qok0lc: 2.38,
        "1q741kw": 2.39,
        "6pd91c": 2.4,
        ogn9j4: 2.42,
        "1wuuark": 2.47,
        k0treo: 2.5,
        "1jjdse8": 2.51,
        swgrnk: 2.54,
        "162xhc0": 2.57,
        fg0glc: 2.6,
        l11af4: 18.5,
        "9diccg": 19,
        "7zkdfk": 20,
        gfliio: 21,
        b5t88w: 23,
        "4x2d4w": 24,
        emo5j4: 25,
        aobxts: 27,
        "6shmgw": 28,
        "31n3sw": 30,
        "64rl6o": 32,
        dch14w: 33,
        "9lmigw": 35,
        "1yv9csg": 5.35,
        o42yo: 6.8,
        q22xhc: 8.5,
        d2hfr4: 31,
        "1np7p4w": 0.03,
        "1zk5j4": 0.08,
        av75s0: 0.12,
        "185ufpc": 0.17,
        "1h1hfy8": 0.21,
        "47gwlc": 0.24,
        d33wu8: 0.28,
        uudxc0: 0.3,
        "14tzb40": 0.33,
        e72adc: 0.36,
        "1vgwbuo": 0.39,
        "10e5szk": 0.41,
        "1i5fthc": 0.43,
        "1r12tq8": 0.47,
        pam1og: 0.5,
        gez1fk: 0.52,
        "1xot2ww": 0.55,
        kusjk0: 0.58,
        bz5jb4: 0.6,
        tqfjsw: 0.62,
        "5vegw0": 0.64,
        "1n58idc": 0.67,
        wibhmo: 0.7,
        "1fkyrk": 0.72,
        "1ipf08w": 0.75,
        s2hzi8: 0.78,
        pul8g0: 0.82,
        "1ghi96o": 0.85,
        "3nhpts": 0.88,
        lerqbk: 0.9,
        uaeqkg: 0.94,
        "14a04cg": 0.97,
        dn33ls: 1,
        ved43k: 1.02,
        zu6m80: 1.05,
        "1hlgmps": 1.07,
        qyjlz4: 1.1,
        "1lhay2o": 0.27,
        "1clnxts": 0.29,
        "1ucxybk": 0.31,
        "5bfa4g": 0.32,
        n2pam8: 0.34,
        "1ml9bls": 0.35,
        "1dpmbcw": 0.37,
        vycav4: 0.38,
        vls00: 0.4,
        imvshs: 0.42,
        "9r8s8w": 0.44,
        "199st8g": 0.45,
        "7jc16o": 0.48,
        "171w268": 0.49,
        "1ot62o0": 0.51,
        "1fxj2f4": 0.53,
        y691xc: 0.54,
        "33ij28": 0.56,
        "12m2k1s": 0.57,
        "1kdckjk": 0.59,
        "1t8zksg": 0.63,
        "15dyhvk": 0.65,
        nmohds: 0.66,
        er1h4w: 0.68,
        "1e9li4g": 0.69,
        "1w0vim8": 0.71,
        "10y4zr4": 0.73,
        j6uz9c: 0.74,
        ab7z0g: 0.76,
        "19ts000": 0.77,
        "1rl20hs": 0.79,
        "83b7y8": 0.8,
        "17lv8xs": 0.81,
        "1pd59fk": 0.83,
        gyy874: 0.84,
        yq88ow: 0.86,
        "1y8s9og": 0.87,
        "1361qtc": 0.89,
        "1kxbrb4": 0.91,
        "1c1or28": 0.93,
        "1tsyrk0": 0.95,
        "4rg3cw": 0.96,
        miq3uo: 0.98,
        "1m1a4u8": 0.99,
        "11x3klc": 5.05,
        "1nrplhc": 5.15,
        "1ag9340": 5.25,
        qh2bk0: 5.3,
        "14wh7gg": 5.45,
        w0u77k: 5.5,
        "7ltxj4": 5.6,
        kxafwg: 5.7,
        "1tbhh4w": 5.75,
        "110mw3k": 5.85,
        "1pfn5s0": 5.95,
        "3pzm68": 6,
        ml8074: 6.1,
        "1uzf1fk": 6.15,
        "16kerr4": 6.25,
        "1jvva4g": 6.35,
        "67vym8": 6.4,
        jjcgzk: 6.5,
        hbfpxc: 6.6,
        "13ij8jk": 6.65,
        "1mdrmkg": 6.75,
        p34cn4: 6.9,
        "1xhbdvk": 6.95,
        "1ihxb7k": 7.15,
        "1ga0k5c": 7.25,
        dflekg: 7.4,
        "1o1p6v4": 7.55,
        "2c1n9c": 7.6,
        "1wscef4": 7.75,
        zhp4hs: 7.9,
        "5iwz5s": 8,
        f8irk0: 9,
        y3r5kw: 9.5,
        lxhyww: 10.5,
        a9z0u8: 11,
        "783hmo": 12,
        m7hkao: 12.5,
        wm2c5c: 13.5,
        "2na6tc": 14,
        ign1mo: 14.5,
        snq4g0: 15.5,
        "5wnf28": 16,
        dybn5s: 17,
        yhhlhc: 17.5,
        testbid: 0,
        "1nz7aio": 2.43,
        xca9s0: 2.46,
        b56r5s: 2.52,
        obngu8: 2.58,
        "24jy80": 2.64,
        "1jedzpc": 2.67,
        "18au8e8": 2.73,
        hnx7nk: 2.76,
        "13v0q9s": 2.81,
        "10lkow": 2.96,
        "156gsu8": 7.05,
        "1tlh2io": 7.35,
        "1aq8ohs": 7.65,
        "1losn40": 7.95,
        "1sf0sn4": 2.55,
        "1eykhkw": 2.61,
        srgyyo: 2.7,
        "1yxr94w": 2.79,
        d83pj4: 2.84,
        n7p3b4: 2.9,
        "1dum41s": 2.93,
        "1iafm68": 2.99,
        "7vtiww": 7.2,
        b2outc: 7.8,
        "13q0xkw": 0.25,
        riisqo: 0.46,
        "1bhpkao": 0.61,
        cj4q2o: 0.92,
        "1o96vwg": 1.15,
        "1wav400": 1.35,
        "1grhukg": 1.49,
        "1vqvx8g": 1.99,
        yg8nb4: 2.14,
        "1lrajgg": 2.27,
        fl09a8: 2.44,
        "1h6h8n4": 2.77,
        "1m69xj4": 3.55,
        rdj01s: 4.3,
        "29jqww": 2.48,
        "1anqs5c": 2.53,
        "6kdgcg": 2.56,
        "1nu7hts": 2.59,
        "1wpui2o": 2.63,
        jvtyps: 2.66,
        "1sa0zy8": 2.71,
        "1q248w0": 2.75,
        "4cgpa8": 2.8,
        "1cqnqio": 2.85,
        "5gf2tc": 2.88,
        ec2328: 2.92,
        "1vlw4jk": 2.95,
        "9w8kxs": 3,
        "176vuv4": 3.05,
        "1kicd8g": 3.15,
        jbury8: 3.3,
        h3y0w0: 3.4,
        gmdxc: 3.6,
        ovmnls: 3.7,
        "15sxvy8": 3.85,
        "1j4eebk": 3.95,
        "1gwhn9c": 4.05,
        e22hog: 4.2,
        "1oo69z4": 4.35,
        nhooow: 4.5,
        "17gvg8w": 4.65,
        "1ksbym8": 4.75,
        hxwt1c: 4.9,
        t1gkcg: 5.1,
        "2221vk": 5.2,
        d5lt6o: 5.4,
        "1i7xpts": 5.55,
        "1g00yrk": 5.65,
        etjdhc: 5.8,
        s4zvuo: 5.9,
        "1c46neo": 6.05,
        "99rhts": 6.2,
        xorri8: 6.3,
        "1em2zuo": 6.45,
        "1rxji80": 6.55,
        umw8ao: 6.7,
        "192b474": 6.85,
        brnu9s: 7,
        x7ah34: 2.62,
        "11n3z7k": 2.65,
        b06ygw: 2.68,
        "1aiqzgg": 2.69,
        "8sa7eo": 2.72,
        qjk7wg: 2.74,
        zf785c: 2.78,
        m3qps0: 2.82,
        "1lmaqrk": 2.83,
        uzdq0w: 2.86,
        "14yz3sw": 2.89,
        "1mq94ao": 2.91,
        w3c3k0: 2.94,
        "10j5log": 2.97,
        irvl6o: 2.98,
        yb8um8: 3.1,
        "60e9kw": 3.2,
        "1eelatc": 3.25,
        "1rq1t6o": 3.35,
        "13b1ji8": 3.45,
        ufej9c: 3.5,
        "18utf5s": 3.65,
        "1x9tou8": 3.75,
        bk658g: 3.8,
        wxavpc: 3.9,
        "8iam0w": 4,
        ltr4e8: 4.099999,
        "1u7y5mo": 4.15,
        "10960ao": 4.25,
        "2yiqdc": 4.4,
        "1bcprls": 4.45,
        "1vvvpxc": 4.55,
        a686bk: 4.6,
        yl8g00: 4.7,
        "4mgao0": 4.8,
        "1d0nbwg": 4.85,
        "1qc3u9s": 4.95,
        fq01z4: 5,
        watslc: 7.1,
        l7a1a8: 7.3,
        zmox6o: 7.45,
        oe5d6o: 7.7,
        "18dc4qo": 7.85,
        "94ow0": 10,
        t57ev4: 11.5,
        hmo9hc: 13,
        ccvz7k: 15,
        orvt34: 16.5,
        "25swe8": 18,
        uqn2tc: 19.5,
        "3y3sao": 22,
        yq5fk: 26,
        h72ebk: 29,
        "1jyadc": 34,
        testBid: 50,
      },
      gn = {
        hgfim8: "Amazon - DistrictM",
        qc2iv4: "Amazon - Magnite",
        "183cjcw": "Amazon - AppNexus",
        "8ksidc": "Amazon - OpenX",
        "1s2jaww": "Amazon - PubMatic",
        "1pumjuo": "Amazon - EMX",
        "12jknpc": "Amazon - Conversant UAM",
        "1kauo74": "Amazon - Amobee DSP",
        "15bglj4": "Amazon - PubMatic UAM APAC",
        "5swkjk": "Amazon - PubMatic UAM EU",
        "1d32f4": "Amazon - Simpli.fi",
        ksan7k: "Amazon - Index Exchange",
        urw0zk: "Amazon - Smaato",
        "1dn4f0g": "Amazon - AdGeneration",
        vvueio: "Amazon - DMX",
        "1veefi8": "Amazon - Yieldmo",
        "1i2xx4w": "Amazon - Yahoo Japan",
        rg0we8: "Amazon - UnrulyX_SSP_APS",
        y3r5kw: "Amazon - Verizon Media Group",
        "1xmb6kg": "Amazon - GumGum UAM",
        "1t6hog0": "Amazon - Acuity",
        "1n2qm0w": "Amazon - Sharethrough",
        j4d2ww: "Amazon - EMX UAM",
        "1imx3wg": "Amazon - LoopMe_UAM",
        z7pj40: "Amazon - Pulsepoint",
        p845c0: "Amazon - SmartRTB+",
      };
    function hn(e) {
      return gn[e] || "Amazon";
    }
    let wn,
      vn = [];
    const fn = (e) =>
      vn.includes(e) || vn.includes(`www.${e}`) || e?.includes?.("game");
    function bn() {
      let e;
      return wn && (e = wn.join(";")), (wn = void 0), e;
    }
    const yn = () =>
        "undefined" != typeof navigator &&
        /MSIE \\d|Trident.*rv:/i.test(navigator.userAgent),
      kn = S.AYMode === y.DPF_ONLY || S.AYMode === y.PBS_DPF_CSTS,
      _n = "rewarded",
      xn = "video",
      In = kn
        ? {
            desktop: {
              "160x600": "RGjLwUuLJpFowG0HnC9poTmR",
              "300x250": "EcwwLdbNTzELxa4qcd9d060O",
              "320x50": "kKvCaOdMrYSNPdizhUX5FLch",
              "728x90": "IR8yJgBz7GF45aIQY0zFBiBN",
              "970x250": "MO7cOKSWWir2LKsAOxZ6dkIp",
              midroll: "SbURP42RHjzFNKkUeaPcwM29",
              rewarded: "PtqCLLsXZVRo5Hj7lhb9MB3o",
            },
            tablet: {
              "320x50": "7V4dBacaZLpJNTxep4Ks5PEX",
              midroll: "50WRe2wy7WRtTvopS7MinCAG",
              rewarded: "fY4eZNUpf1InC3YSRgThyD6r",
            },
            mobile: {
              "320x50": "1VeYl3yQOPHg0digg7vBePbF",
              midroll: "50WRe2wy7WRtTvopS7MinCAG",
              rewarded: "GBsiqQg5Y3yh0RkjarOmf58V",
            },
          }
        : {
            desktop: {
              "160x600": "pHhFwvUCUJQKwwA7iy4fAk2F",
              "300x250": "c3GnFrB8rylhgQwXfD5VTq8P",
              "320x50": "9DvtR4XBxhm8JoliuTxyVz3L",
              "728x90": "v6NMslR400yh8RzvRiRLpwvH",
              "970x250": "EWsiZSpdRTxOym1GzRvUmzNW",
              midroll: "4Hy6nGZMC66xUwMP5cl1hCTE",
              rewarded: "dNQuJjmJrj6ZdQMVxklBfduh",
            },
            tablet: {
              "320x50": "f8V9c0yVZENi5WNpSqvEgunY",
              midroll: "zFsaqtEiGSRs5zXx8U3N3IzK",
              rewarded: "3e3zEB2v1HZGMtSTr9bVm1op",
            },
            mobile: {
              "320x50": "jJuityvxj0Xu0AKku01W2eKX",
              midroll: "zFsaqtEiGSRs5zXx8U3N3IzK",
              rewarded: "qqlfsqZLNfx0YdnQoeTTx13y",
            },
          },
      Sn = kn
        ? {
            desktop: {
              "160x600": "3344122-9",
              "300x250": "3344124-15",
              "320x50": "3344126-43",
              "728x90": "3344128-2",
              "970x250": "3344130-57",
              midroll: 3344138,
              rewarded: 3344140,
            },
            tablet: {
              "320x50": "3344136-43",
              midroll: 3344144,
              rewarded: 3344146,
            },
            mobile: {
              "320x50": "3344134-43",
              midroll: 3344144,
              rewarded: 3344142,
            },
          }
        : {
            desktop: {
              "160x600": 2969680,
              "300x250": 2969676,
              "320x50": 2969674,
              "728x90": 2969668,
              "970x250": 2969678,
              midroll: 2969664,
              rewarded: 2969666,
            },
            tablet: { "320x50": 2969690, midroll: 3344110, rewarded: 2969688 },
            mobile: { "320x50": 2969684, midroll: 3344110, rewarded: 2969682 },
          },
      En = kn
        ? {
            desktop: {
              "160x600": "5883933",
              "300x250": "5883934",
              "320x50": "5883935",
              "728x90": "5883936",
              "970x250": "5883937",
              midroll: "5883941",
              rewarded: "5883942",
            },
            tablet: {
              "320x50": "5883940",
              midroll: "5883943",
              rewarded: "5883945",
            },
            mobile: {
              "320x50": "5883939",
              midroll: "5883943",
              rewarded: "5883944",
            },
          }
        : {
            desktop: {
              "160x600": "5883917",
              "300x250": "5883918",
              "320x50": "5883919",
              "728x90": "5883920",
              "970x250": "5883921",
              midroll: "5883925",
              rewarded: "5883926",
            },
            tablet: {
              "320x50": "5883924",
              midroll: "5883927",
              rewarded: "5883929",
            },
            mobile: {
              "320x50": "5883923",
              midroll: "5883927",
              rewarded: "5883928",
            },
          },
      Cn = kn
        ? {
            desktop: {
              "160x600": "1097616",
              "300x250": "1097617",
              "320x50": "1097618",
              "728x90": "1097619",
              "970x250": "1097620",
              midroll: "1097624",
              rewarded: "1097625",
            },
            tablet: {
              "320x50": "1097623",
              midroll: "1097627",
              rewarded: "1097629",
            },
            mobile: {
              "320x50": "1097622",
              midroll: "1097627",
              rewarded: "1097626",
            },
          }
        : {
            desktop: {
              "160x600": "1097600",
              "300x250": "1097601",
              "320x50": "1097602",
              "728x90": "1097603",
              "970x250": "1097604",
              midroll: "1097608",
              rewarded: "1097609",
            },
            tablet: {
              "320x50": "1097607",
              midroll: "1097611",
              rewarded: "1097612",
            },
            mobile: {
              "320x50": "1097606",
              midroll: "1097611",
              rewarded: "1097610",
            },
          },
      Pn = kn
        ? {
            desktop: {
              "160x600": "BzoTmh4NGZ",
              "300x250": "lcmX1jq1Lj",
              "320x50": "iowki7KCLk",
              "728x90": "RGlldqn551",
              "970x250": "ohcXUNESA6",
              midroll: "tqA7KwGzJP",
              rewarded: "innweoOi9C",
            },
            tablet: {
              "320x50": "HI8chf3nOw",
              midroll: "SLZIt97iqi",
              rewarded: "pWV7sSiv1v",
            },
            mobile: {
              "320x50": "o0HIu0ypvx",
              midroll: "SLZIt97iqi",
              rewarded: "DMtCvhStDo",
            },
          }
        : {
            desktop: {
              "160x600": "EcE3bPtcQ7",
              "300x250": "z4419hyP3D",
              "320x50": "iO0r99GJyD",
              "728x90": "eNHLwil1Sz",
              "970x250": "VV8quyp9Uc",
              midroll: "r2YIBgLder",
              rewarded: "qphbf73F9j",
            },
            tablet: {
              "320x50": "USm2WyRzQM",
              midroll: "vzAXcywC8m",
              rewarded: "lLev33Pjr2",
            },
            mobile: {
              "320x50": "EZVAmOVfTC",
              midroll: "vzAXcywC8m",
              rewarded: "STZwixwqOK",
            },
          },
      Bn = kn
        ? {
            desktop: {
              "160x600": "32576935",
              "300x250": "32576941",
              "320x50": "32576946",
              "728x90": "32576950",
              "970x250": "32576954",
              midroll: "32576912",
              rewarded: "32576919",
            },
            tablet: {
              "320x50": "32576998",
              midroll: "32577004",
              rewarded: "32577010",
            },
            mobile: {
              "320x50": "32576997",
              midroll: "32577004",
              rewarded: "32577003",
            },
          }
        : {
            desktop: {
              "160x600": "32576856",
              "300x250": "32576857",
              "320x50": "32576858",
              "728x90": "32576859",
              "970x250": "32576860",
              midroll: "32576861",
              rewarded: "32576862",
            },
            tablet: {
              "320x50": "32576994",
              midroll: "32577001",
              rewarded: "32577002",
            },
            mobile: {
              "320x50": "32576993",
              midroll: "32577001",
              rewarded: "32577000",
            },
          },
      Tn = kn
        ? {
            desktop: {
              "160x600": "desktop_ingame_160x600_B",
              "300x250": "desktop_ingame_300x250_B",
              "320x50": "desktop_ingame_320x50_B",
              "728x90": "desktop_ingame_728x90_B",
              "970x250": "desktop_ingame_970x250_B",
              midroll: "desktop_ingame_midroll_1_B",
              rewarded: "desktop_ingame_roll_1_B",
            },
            tablet: {
              "320x50": "tablet_ingame_320x50_B",
              midroll: "mobile_ingame_midroll_1_B",
              rewarded: "tablet_ingame_roll_1_B",
            },
            mobile: {
              "320x50": "mobile_ingame_320x50_B",
              midroll: "mobile_ingame_midroll_1_B",
              rewarded: "mobile_ingame_roll_1_B",
            },
          }
        : {
            desktop: {
              "160x600": "desktop_ingame_160x600",
              "300x250": "desktop_ingame_300x250",
              "320x50": "desktop_ingame_320x50",
              "728x90": "desktop_ingame_728x90",
              "970x250": "desktop_ingame_970x250",
              midroll: "desktop_ingame_midroll_1",
              rewarded: "desktop_ingame_roll_1",
            },
            tablet: {
              "320x50": "tablet_ingame_320x50",
              midroll: "mobile_ingame_midroll_1",
              rewarded: "tablet_ingame_roll_1",
            },
            mobile: {
              "320x50": "mobile_ingame_320x50",
              midroll: "mobile_ingame_midroll_1",
              rewarded: "mobile_ingame_roll_1",
            },
          },
      Dn = Tn,
      Mn = kn
        ? {
            desktop: {
              "160x600": "560728457",
              "300x250": "560728458",
              "320x50": "560728459",
              "728x90": "560728460",
              "970x250": "560728461",
              midroll: "560728517",
              rewarded: "560728518",
            },
            tablet: {
              "320x50": "560728464",
              midroll: "560728520",
              rewarded: "560728521",
            },
            mobile: {
              "320x50": "560728463",
              midroll: "560728520",
              rewarded: "560728519",
            },
          }
        : {
            desktop: {
              "160x600": "560728446",
              "300x250": "560728447",
              "320x50": "560728448",
              "728x90": "560728449",
              "970x250": "560728450",
              midroll: "560728512",
              rewarded: "560728513",
            },
            tablet: {
              "320x50": "560728453",
              midroll: "560728515",
              rewarded: "560728516",
            },
            mobile: {
              "320x50": "560728452",
              midroll: "560728515",
              rewarded: "560728514",
            },
          },
      Ln = "lcpgaTLqkd6gRi8AVtVr0gLe",
      On = "PIsUL8EJvXXA1thcFkCPWdhi",
      Nn = "KQ3P2qVndkjlesGkzM5Rknma",
      Rn = "Ydwhf5DPoJBinldgPdkD9okm",
      zn = {
        desktop: {
          "160x600": "desktop_ingame_160x600_B_PBc2s",
          "300x250": "desktop_ingame_300x250_B_PBc2s",
          "320x50": "desktop_ingame_320x50_B_PBc2s",
          "728x90": "desktop_ingame_728x90_B_PBc2s",
          "970x250": "desktop_ingame_970x250_B_PBc2s",
          midroll: "desktop_ingame_midroll_1_B_PBc2s",
          rewarded: "desktop_ingame_roll_1_B_PBc2s",
        },
        tablet: {
          "320x50": "tablet_ingame_320x50_B_PBc2s",
          midroll: "tablet_ingame_roll_1_B_PBc2s",
          rewarded: "tablet_ingame_roll_1_B_PBc2s",
        },
        mobile: {
          "320x50": "mobile_ingame_320x50_B_PBc2s",
          midroll: "mobile_ingame_roll_1_B_PBc2s",
          rewarded: "mobile_ingame_midroll_1_B_PBc2s",
        },
      },
      Un = {
        desktop: {
          "160x600": 290341,
          "300x250": 290342,
          "320x50": 290343,
          "728x90": 290344,
          "970x250": 290345,
          midroll: 290349,
          rewarded: 290350,
        },
        tablet: { "320x50": 290348, midroll: 290352, rewarded: 290353 },
        mobile: { "320x50": 290347, midroll: 290352, rewarded: 290351 },
      },
      Fn = {
        desktop: {
          "160x600": "PBS_desktop_ingame_160x600_PBs2s",
          "300x250": "PBS_desktop_ingame_300x250_PBs2s",
          "320x50": "PBS_desktop_ingame_320x50_PBs2s",
          "728x90": "PBS_desktop_ingame_728x90_PBs2s",
          "970x250": "PBS_desktop_ingame_970x250_PBs2s",
          midroll: "PBS_desktop_instream_PBs2s",
          rewarded: "PBS_desktop_instream_PBs2s",
        },
        tablet: {
          "320x50": "PBS_tablet_ingame_320x50_PBs2s",
          midroll: "PBS_tablet_instream_PBs2s",
          rewarded: "PBS_tablet_instream_PBs2s",
        },
        mobile: {
          "320x50": "PBS_mobile_ingame_320x50_PBs2s",
          midroll: "PBS_mobile_instream_PBs2s",
          rewarded: "PBS_mobile_instream_PBs2s",
        },
      },
      jn = {
        desktop: {
          "160x600": "w94NCQZPkvMe9abEANk3j9UM",
          "300x250": "2j1V0jSoGrQcQPZ6wjcjDc1v",
          "320x50": "JCzEzMwjMCqgNH9mVSCgLbFM",
          "728x90": "PhpWXPWg4o3y6FlY0qwH7fRy",
          "970x250": "DNOO90lGmA22jVxRo4meiTOX",
          midroll: "jdbFspMsO3380VFGH56aQSPT",
          rewarded: "EOxLPMBPLxUim1O5YYjgJ3zV",
        },
        tablet: {
          "320x50": "hW9BnmYxpqIlMHb1TyfDXhgb",
          midroll: "0LJiuzsOrsiZypi2Hp6aGHz3",
          rewarded: "6ZMiHSLfdWgTA8JQUtBvLb2p",
        },
        mobile: {
          "320x50": "8CHGo2XPaoLDBXnfgeZHPDp2",
          midroll: "0LJiuzsOrsiZypi2Hp6aGHz3",
          rewarded: "YEfxtSaAovu1QuPW3b2GGreQ",
        },
      },
      Gn = {
        desktop: {
          "160x600": 3451892,
          "300x250": 3451894,
          "320x50": 3451896,
          "728x90": 3451898,
          "970x250": 3451900,
          midroll: 3451908,
          rewarded: 3451910,
        },
        tablet: { "320x50": 3451906, midroll: 3451914, rewarded: 3451916 },
        mobile: { "320x50": 3451904, midroll: 3451914, rewarded: 3451912 },
      },
      Hn = {
        desktop: {
          "160x600": "6031290",
          "300x250": "6031291",
          "320x50": "6031292",
          "728x90": "6031293",
          "970x250": "6031294",
          midroll: "6031300",
          rewarded: "6031301",
        },
        tablet: {
          "320x50": "6031297",
          midroll: "6031302",
          rewarded: "6031304",
        },
        mobile: {
          "320x50": "6031296",
          midroll: "6031302",
          rewarded: "6031303",
        },
      },
      Vn = {
        desktop: {
          "160x600": "1119460",
          "300x250": "1119461",
          "320x50": "1119462",
          "728x90": "1119463",
          "970x250": "1119464",
          midroll: "1119468",
          rewarded: "1119469",
        },
        tablet: {
          "320x50": "1119467",
          midroll: "1119471",
          rewarded: "1119472",
        },
        mobile: {
          "320x50": "1119466",
          midroll: "1119471",
          rewarded: "1119470",
        },
      },
      qn = {
        desktop: {
          "160x600": "joqZdjrS44",
          "300x250": "A5WslvYq3U",
          "320x50": "jeJTT1JQc1",
          "728x90": "HUdxaDxmjN",
          "970x250": "MFOfbG0BvV",
          midroll: "8Ktl6U8ziM",
          rewarded: "Na5xNjU0Nc",
        },
        tablet: {
          "320x50": "YZvrrtjbzK",
          midroll: "0EFXGI0X4R",
          rewarded: "dGO6uV5f0u",
        },
        mobile: {
          "320x50": "ZjGxFZU4bI",
          midroll: "0EFXGI0X4R",
          rewarded: "0KnEmI2AtO",
        },
      },
      Wn = {
        desktop: {
          "160x600": "33053938",
          "300x250": "33053941",
          "320x50": "33053940",
          "728x90": "33053943",
          "970x250": "33053944",
          midroll: "33053942",
          rewarded: "33053939",
        },
        tablet: {
          "320x50": "33053997",
          midroll: "33054000",
          rewarded: "33053999",
        },
        mobile: {
          "320x50": "33054001",
          midroll: "33054000",
          rewarded: "33054003",
        },
      },
      Qn = {
        desktop: {
          "160x600": "PBS_desktop_ingame_160x600",
          "300x250": "PBS_desktop_ingame_300x250",
          "320x50": "PBS_desktop_ingame_320x50",
          "728x90": "PBS_desktop_ingame_728x90",
          "970x250": "PBS_desktop_ingame_970x250",
          midroll: "PBS_desktop_ingame_midroll_1",
          rewarded: "PBS_desktop_ingame_roll_1",
        },
        tablet: {
          "320x50": "PBS_tablet_ingame_320x50",
          midroll: "PBS_mobile_ingame_midroll_1",
          rewarded: "PBS_tablet_ingame_roll_1",
        },
        mobile: {
          "320x50": "PBS_mobile_ingame_320x50",
          midroll: "PBS_mobile_ingame_midroll_1",
          rewarded: "PBS_mobile_ingame_roll_1",
        },
      },
      Kn = {
        desktop: {
          "160x600": "560923015",
          "300x250": "560923016",
          "320x50": "560923017",
          "728x90": "560923018",
          "970x250": "560923019",
          midroll: "560923023",
          rewarded: "560923024",
        },
        tablet: {
          "320x50": "560923022",
          midroll: "560923026",
          rewarded: "560923027",
        },
        mobile: {
          "320x50": "560923021",
          midroll: "560923026",
          rewarded: "560923025",
        },
      },
      $n = {
        desktop: {
          "160x600": 290357,
          "300x250": 290358,
          "320x50": 290359,
          "728x90": 290360,
          "970x250": 290361,
          midroll: 290365,
          rewarded: 290366,
        },
        tablet: { "320x50": 290364, midroll: 290368, rewarded: 290369 },
        mobile: { "320x50": 290363, midroll: 290368, rewarded: 290367 },
      },
      Zn = "playground",
      Xn = "ingame",
      Yn = "external";
    function Jn() {
      return S.isPokiIframe || S.isPlayground ? (S.isPlayground ? Zn : Xn) : Yn;
    }
    const eo = {
      skyscraper: "160x600",
      rectangle: "300x250",
      leaderboard: "728x90",
      smallLeaderboard: "320x50",
      billboard: "970x250",
      midroll: "midroll",
      rewarded: "rewarded",
      gamebar: "gamebar",
      externalSkyscraper: "300x600",
    };
    const to = () => {
      const e = window;
      (e.floorModuleLoaded = !1),
        (window.assertive = {
          entityId: "5Lgx5W5CGs9PYyu8u",
          analytics: {
            integrations: {
              ivt: !1,
              webVitals: !1,
              webAnalytics: !1,
              nativo: !1,
              taboola: !1,
              outbrain: !1,
              adsense: !1,
              reconciliation: !1,
              custom: {
                custom_1: e.parent.pokiExperiment,
                custom_2: e.parent.pokiAYMode,
              },
            },
          },
          storage: { keyPrefix: "pvay_" },
          floor: {
            enabled: e.parent.pokiGetDPFEnabledResult,
            addToHashKey: !1,
            currency: "EUR",
            priceBuckets: [
              { min: 0.03, max: 0.25, increment: 0.01 },
              { min: 0.25, max: 2, increment: 0.05 },
              { min: 2, max: 5, increment: 0.1 },
              { min: 5, max: 20, increment: 0.15 },
            ],
            prebidMinFloor: 0.15,
            exploreRate: "auto",
            readyCallback: () => {
              e.floorModuleLoaded = !0;
            },
          },
        });
      const t = document.createElement("script");
      (t.src = "https://5lgx5w5cgs9pyyu8u.ay.delivery/client-v2.js"),
        (t.async = !0),
        document.body.appendChild(t);
    };
    let io;
    const no = () =>
      (S.isPlayground &&
        [
          "US",
          "CA",
          "DE",
          "BR",
          "FR",
          "AU",
          "MX",
          "JP",
          "ES",
          "CH",
          "PL",
          "KR",
          "GB",
          "BE",
          "IT",
          "AE",
          "NL",
          "SE",
          "DK",
          "SA",
          "NZ",
          "RO",
          "ZA",
          "TH",
          "AT",
          "NO",
          "MY",
          "CL",
          "SG",
          "CZ",
          "IL",
          "HU",
          "FI",
          "SK",
          "IE",
          "HK",
          "BG",
          "PT",
          "UY",
          "TW",
          "CR",
          "GR",
          "OM",
          "PR",
          "JO",
          "PA",
          "HR",
          "UZ",
          "KE",
          "KW",
          "LV",
          "LU",
          "SI",
          "EE",
          "MM",
          "QA",
          "LT",
          "BH",
          "IS",
          "JM",
          "TT",
          "NA",
          "MT",
          "BS",
          "MO",
          "AW",
          "AS",
          "VI",
          "KY",
          "LI",
          "BQ",
          "JE",
          "BM",
          "PW",
          "VG",
          "GG",
          "MP",
          "MC",
          "NU",
          "NF",
          "TV",
        ].includes(S.country)) ||
      S.forceStartAY;
    function oo(e = "display") {
      return (
        !!S.forceStartAY ||
        S.AYMode === y.PBS_ONLY ||
        ([y.ON, y.PBS_DPF_CSTS].includes(S.AYMode) && no())
      );
    }
    function ao() {
      return (
        [y.ON, y.PBS_DPF_CSTS, y.DPF_ONLY].includes(S.AYMode) || S.forceStartAY
      );
    }
    function ro() {
      return !!window?.assertive?.addAmazonFloors && ao();
    }
    async function so() {
      const { AYMode: e, country: t } = S;
      if (!S.isPlayground && !S.forceStartAY) return;
      if (e === y.NOT_APPLICABLE || e === y.DISABLED) return;
      const i = oo(),
        n = ao(),
        o = [y.ON, y.PBS_DPF_CSTS, y.CSTS_ONLY].includes(e) || S.forceStartAY;
      (window.assertive = {
        entityId: "US" === t ? "GQP4knBP4M2tmmbDA" : "CsX5Xy7uK2mDtHD7e",
        analytics: {
          integrations: { ima: !1 },
          logUnfilled: !0,
          useHistoryChangeTrigger: !0,
          custom: { custom_1: S.experiment, custom_2: e },
          sampleRate: 0.1,
          override: { normalizeSlotId: (e, t) => t || e },
        },
        hash: { generator: "server", values: 1, key: "control" },
        reduction: { enabled: o, limit: { percentage: o ? 1 : 0 } },
        floor: {
          enabled: n,
          addToHashKey: !1,
          currency: "EUR",
          gptHook: !1,
          priceBuckets: [
            { min: 0.03, max: 0.25, increment: 0.01 },
            { min: 0.25, max: 2, increment: 0.05 },
            { min: 2, max: 5, increment: 0.1 },
            { min: 5, max: 20, increment: 0.15 },
          ],
          exploreRate: "auto",
          limit: { excludeSlotIds: ["video", "rewarded"] },
        },
      }),
        (function () {
          try {
            if (
              ((io = document.createElement("iframe")),
              (io.id = "ay-video-optimizer"),
              io.setAttribute("frameborder", "0"),
              io.setAttribute("scrolling", "no"),
              io.setAttribute("allowtransparency", "true"),
              io.setAttribute("width", "1"),
              io.setAttribute("height", "1"),
              (io.style.position = "absolute"),
              (io.style.left = "-9999px"),
              document.body.appendChild(io),
              io.contentDocument)
            ) {
              (window.pokiGetDPFEnabledResult = ao()),
                (window.pokiAYMode = S.AYMode),
                (window.pokiExperiment = S.experiment);
              const e = io.contentDocument.createElement("script");
              (e.textContent = `(${to.toString()})();`),
                io.contentDocument.body.appendChild(e);
            }
          } catch (e) {
            console.error("Error creating video optimizer:", e);
          }
        })(),
        n &&
          window.googletag.cmd.push(() => {
            window.googletag.pubads().setTargeting("ay_hb_house", "1");
          }),
        await qi(
          "https://a.poki-cdn.com/ay/client-v2_d9611ecbfb334b6d55d2ea9f208a1230e0a9e551.js"
        ),
        i &&
          (await qi(
            "https://a.poki-cdn.com/ay/s2s-client-v1_a97f1ac245962c2123973baa429e4a466b9652ef.js"
          ),
          window?.ayS2STag?.init({
            orgId: "saWdJc9SuSG9wLYDz",
            entityId: "WxopjWtNMn2mCEStE",
            bidders: [
              "adagio",
              "appnexus",
              "ix",
              "onetag",
              "openx",
              "pubmatic",
              "richaudience",
              "rubicon",
              "sharethrough",
              "triplelift",
              "unruly",
            ],
            serverOnlyBidders: [],
            pbjs: "pbjs",
            continent:
              {
                AF: "AS",
                AL: "EU",
                AQ: "AN",
                DZ: "AF",
                AS: "OC",
                AD: "EU",
                AO: "AF",
                AG: "NA",
                AZ: "AS",
                AR: "SA",
                AU: "OC",
                AT: "EU",
                BS: "NA",
                BH: "AS",
                BD: "AS",
                AM: "AS",
                BB: "NA",
                BE: "EU",
                BM: "NA",
                BT: "AS",
                BO: "SA",
                BA: "EU",
                BW: "AF",
                BV: "AN",
                BR: "SA",
                BZ: "NA",
                IO: "AF",
                SB: "OC",
                VG: "NA",
                BN: "AS",
                BG: "EU",
                MM: "AS",
                BI: "AF",
                BY: "EU",
                KH: "AS",
                CM: "AF",
                CA: "NA",
                CV: "AF",
                KY: "NA",
                CF: "AF",
                LK: "AS",
                TD: "AF",
                CL: "SA",
                CN: "AS",
                TW: "AS",
                CX: "AS",
                CC: "AS",
                CO: "SA",
                KM: "AF",
                YT: "AF",
                CG: "AF",
                CD: "AF",
                CK: "OC",
                CR: "NA",
                HR: "EU",
                CU: "NA",
                CY: "AS",
                CZ: "EU",
                BJ: "AF",
                DK: "EU",
                DM: "NA",
                DO: "NA",
                EC: "SA",
                SV: "NA",
                GQ: "AF",
                ET: "AF",
                ER: "AF",
                EE: "EU",
                FO: "EU",
                FK: "SA",
                GS: "AN",
                FJ: "OC",
                FI: "EU",
                AX: "EU",
                FR: "EU",
                GF: "SA",
                PF: "OC",
                TF: "AF",
                DJ: "AF",
                GA: "AF",
                GE: "AS",
                GM: "AF",
                DE: "EU",
                GH: "AF",
                GI: "EU",
                KI: "OC",
                GR: "EU",
                GL: "NA",
                GD: "NA",
                GP: "NA",
                GU: "OC",
                GT: "NA",
                GN: "AF",
                GY: "SA",
                HT: "NA",
                HM: "AN",
                VA: "EU",
                HN: "NA",
                HK: "AS",
                HU: "EU",
                IS: "EU",
                IN: "AS",
                ID: "AS",
                IR: "AS",
                IQ: "AS",
                IE: "EU",
                IL: "AS",
                IT: "EU",
                CI: "AF",
                JM: "NA",
                JP: "AS",
                KZ: "AS",
                JO: "AS",
                KE: "AF",
                KP: "AS",
                KR: "AS",
                XK: "EU",
                KW: "AS",
                KG: "AS",
                LA: "AS",
                LB: "AS",
                LS: "AF",
                LV: "EU",
                LR: "AF",
                LY: "AF",
                LI: "EU",
                LT: "EU",
                LU: "EU",
                MO: "AS",
                MG: "AF",
                MW: "AF",
                MY: "AS",
                MV: "AS",
                ML: "AF",
                MT: "EU",
                MQ: "NA",
                MR: "AF",
                MU: "AF",
                MX: "NA",
                MC: "EU",
                MN: "AS",
                MD: "EU",
                ME: "EU",
                MS: "NA",
                MA: "AF",
                MZ: "AF",
                OM: "AS",
                NA: "AF",
                NR: "OC",
                NP: "AS",
                NL: "EU",
                CW: "NA",
                AW: "NA",
                SX: "NA",
                BQ: "NA",
                NC: "OC",
                VU: "OC",
                NZ: "OC",
                NI: "NA",
                NE: "AF",
                NG: "AF",
                NU: "OC",
                NF: "OC",
                NO: "EU",
                MP: "OC",
                UM: "OC",
                FM: "OC",
                MH: "OC",
                PW: "OC",
                PK: "AS",
                PS: "AS",
                PA: "NA",
                PG: "OC",
                PY: "SA",
                PE: "SA",
                PH: "AS",
                PN: "OC",
                PL: "EU",
                PT: "EU",
                GW: "AF",
                TL: "AS",
                PR: "NA",
                QA: "AS",
                RE: "AF",
                RO: "EU",
                RU: "EU",
                RW: "AF",
                BL: "NA",
                SH: "AF",
                KN: "NA",
                AI: "NA",
                LC: "NA",
                MF: "NA",
                PM: "NA",
                VC: "NA",
                SM: "EU",
                ST: "AF",
                SA: "AS",
                SN: "AF",
                RS: "EU",
                SC: "AF",
                SL: "AF",
                SG: "AS",
                SK: "EU",
                VN: "AS",
                SI: "EU",
                SO: "AF",
                ZA: "AF",
                ZW: "AF",
                ES: "EU",
                SS: "AF",
                SD: "AF",
                EH: "AF",
                SR: "SA",
                SJ: "EU",
                SZ: "AF",
                SE: "EU",
                CH: "EU",
                SY: "AS",
                TJ: "AS",
                TH: "AS",
                TG: "AF",
                TK: "OC",
                TO: "OC",
                TT: "NA",
                AE: "AS",
                TN: "AF",
                TR: "AS",
                TM: "AS",
                TC: "NA",
                TV: "OC",
                UG: "AF",
                UA: "EU",
                MK: "EU",
                EG: "AF",
                GB: "EU",
                GG: "EU",
                JE: "EU",
                IM: "EU",
                TZ: "AF",
                US: "NA",
                VI: "NA",
                BF: "AF",
                UY: "SA",
                UZ: "AS",
                VE: "SA",
                WF: "OC",
                WS: "OC",
                YE: "AS",
                ZM: "AF",
                XD: "AS",
                XS: "AS",
              }[S.country] || "NA",
            analytics: !1,
            aliasRegistry: null,
            suffix: "_s2s",
            abPercentage: 100,
            customEndpoint: { us: "pbs-poki-us", eu: "pbs-poki-eu" },
          }));
    }
    function co(e, t, i, n, o) {
      let a = uo("AdSystem", "Poki", { version: "0.1" });
      return (
        t &&
          (a += (function (e) {
            return Ao("VASTAdTagURI", e);
          })(t)),
        i && (a += lo(i, n)),
        o && (a += po(o)),
        (function (e, t) {
          return uo("VAST", e, { version: t });
        })(
          (function (e, t) {
            return uo("Ad", e, { id: t });
          })(uo("Wrapper", a), e),
          "4.2"
        )
      );
    }
    function lo(e, t) {
      return Ao("Impression", e, { id: t });
    }
    function po(e) {
      return Ao("Error", e);
    }
    function Ao(e, t, i = {}) {
      return uo(e, `<![CDATA[${t}]]>`, i);
    }
    function uo(e, t, i = {}) {
      const n = (function (e, t) {
        if (!t || 0 === Object.keys(t).length) return e;
        return Object.keys(t).reduce((e, i) => {
          const n = t[i];
          return n ? `${e} ${i}="${n}"` : e;
        }, e);
      })(e, i);
      return `<${n}>${t}</${e}>`;
    }
    function mo(e) {
      const t = e;
      return {
        getVastXmlWithTracking: function (e, n, o, a, r) {
          const s = (function (e, i) {
              if (!e) return;
              const n = lo(e, i);
              return t.parse(n);
            })(o, a),
            d = (function (e) {
              if (!e) return;
              const i = po(e);
              return t.parse(i);
            })(r);
          if (!n && !s && !d) return e;
          const c = t.parse(e);
          return (
            (function (e, t, n) {
              const o = e.querySelectorAll("InLine,Wrapper"),
                a = o.length;
              for (let e = 0; e < a; e++) {
                const r = o[e],
                  s = e < a - 1;
                i(r, t, s), i(r, n, s);
              }
            })(c, s, d),
            (function (e, t) {
              if (!t) return;
              const i = e.querySelector("Ad");
              if (!i) return;
              i.id = t;
            })(c, n),
            t.serialize(c)
          );
        },
        buildVastWrapper: co,
      };
      function i(e, t, i) {
        if (!t) return;
        const n = i ? t.cloneNode(!0) : t;
        e.appendChild(n.documentElement);
      }
    }
    function go() {
      let e, t;
      return {
        parse: function (t) {
          return (e || (e = new DOMParser()), e).parseFromString(
            t,
            "application/xml"
          );
        },
        serialize: function (e) {
          return (t || (t = new XMLSerializer()), t).serializeToString(e);
        },
      };
    }
    const ho = mo(go()),
      wo = (function () {
        const e = {};
        return {
          store: function (t, i) {
            e[t] = i;
          },
          remove: function (t) {
            const i = e[t];
            if (i) return delete e[t], i;
          },
        };
      })();
    function vo() {
      const e = T.getVideoDataAnnotations(),
        t = (function (e) {
          const t = (function (e) {
            if (!e || !e.length) return;
            for (let t = 0; t < e.length; t++) {
              const i = e[t],
                n = wo.remove(i);
              if (n) return n;
            }
          })(e);
          if (!t) return;
          const { adUnitCode: i, requestId: n, auctionId: o } = t,
            a = t.adId,
            { bids: r } = window.pbjs.getBidResponsesForAdUnitCode(i);
          return r.find(
            (e) => e.adId === a && e.requestId === n && e.auctionId === o
          );
        })(e?.IMAWrapperIDs || []);
      if (t) {
        T.addVideoDataAnnotations({
          HBPrebidLikelyWon: !0,
          HBPrebidWon: !0,
          HBBid: JSON.stringify(t),
        });
        try {
          window.pbjs.markWinningBidAsUsed({ ...t, events: !0 });
        } catch (e) {
          gi("Error marking winning bid as used", e);
        }
      }
    }
    const fo = (e) => {
      const { adId: t, adUnitCode: i, requestId: n, auctionId: o } = e,
        a = `poki_${$()}`;
      wo.store(a, { adId: t, adUnitCode: i, requestId: n, auctionId: o });
      let { vastXml: r } = e;
      const { vastUrl: s } = e;
      return (
        r
          ? (r = ho.getVastXmlWithTracking(r, a, void 0, void 0, void 0))
          : s && (r = ho.buildVastWrapper(a, s, void 0, void 0, void 0)),
        (e.vastXml = r),
        a
      );
    };
    const bo = {},
      yo = [
        "IAB7-3",
        "IAB7-5",
        "IAB7-8",
        "IAB7-9",
        "IAB7-10",
        "IAB7-11",
        "IAB7-14",
        "IAB7-17",
        "IAB7-18",
        "IAB7-19",
        "IAB7-21",
        "IAB7-22",
        "IAB7-24",
        "IAB7-25",
        "IAB7-26",
        "IAB7-27",
        "IAB7-28",
        "IAB7-29",
        "IAB7-30",
        "IAB7-31",
        "IAB7-34",
        "IAB7-37",
        "IAB7-39",
        "IAB7-41",
        "IAB7-42",
        "IAB7-43",
        "IAB7-44",
        "IAB7-45",
        "IAB8-5",
        "IAB8-18",
        "IAB9-9",
        "IAB11-1",
        "IAB11-4",
        "IAB11-5",
        "IAB14-1",
        "IAB14-2",
        "IAB14-3",
        "IAB15-5",
        "IAB17-18",
        "IAB18-2",
        "IAB23",
        "IAB23-1",
        "IAB23-2",
        "IAB23-3",
        "IAB23-4",
        "IAB23-5",
        "IAB23-6",
        "IAB23-7",
        "IAB23-8",
        "IAB23-9",
        "IAB23-10",
        "IAB24",
        "IAB25",
        "IAB25-1",
        "IAB25-2",
        "IAB25-3",
        "IAB25-4",
        "IAB25-5",
        "IAB25-6",
        "IAB25-7",
        "IAB26",
        "IAB26-1",
        "IAB26-2",
        "IAB26-3",
        "IAB26-4",
      ];
    let ko,
      _o = !1,
      xo = {},
      Io = !1;
    const So = () => _o,
      Eo = () => Io,
      Co = (e, t) => {
        if (
          (void 0 === ko &&
            (ko = ((e) => {
              const { country: t } = S,
                i = e?.[t]?.video?.amazon;
              return !!i && Math.random() > i;
            })(t)),
          !ko && ((xo = e), window.apstag))
        )
          try {
            const e = "1--",
              t = "1YN",
              i = (t) => {
                const i = {
                  pubID: "e32f1423-28bc-43ed-8ab0-5ae6b4449cf8",
                  adServer: "googletag",
                  videoAdServer: "GAM",
                  ...(S.gdprApplies ? { gdpr: { cmpTimeout: 1e4 } } : {}),
                  ...(S.ccpaApplies ? { params: { aps_privacy: t || e } } : {}),
                  signals: xo,
                };
                window.apstag.init(i, () => {
                  _o = !0;
                });
              };
            S.ccpaApplies
              ? window.__uspapi("uspPing", 1, () => {
                  window.__uspapi("getUSPData", 1, (e, n) => {
                    if (n) {
                      let t = e?.uspString?.charAt(2) || "N";
                      "-" === t && (t = "N"), i(`1Y${t}`);
                    } else i(t);
                  });
                })
              : i(e);
          } catch {
            (_o = !1), (window.apstag = void 0);
          }
      },
      Po = (t, i) => {
        const n = {
            "728x90": `/21682198607/${S.device}_ingame_728x90/${S.siteID}_${S.device}_ingame_728x90`,
            "300x250": `/21682198607/${S.device}_ingame_300x250/${S.siteID}_${S.device}_ingame_300x250`,
            "970x250": `/21682198607/${S.device}_ingame_970x250/${S.siteID}_${S.device}_ingame_970x250`,
            "160x600": `/21682198607/${S.device}_ingame_160x600/${S.siteID}_${S.device}_ingame_160x600`,
            "320x50": `/21682198607/${S.device}_ingame_320x50/${S.siteID}_${S.device}_ingame_320x50`,
            "728x90_external": `/21682198607/external_${S.device}_display_ingame/external_${S.device}_ingame_728x90`,
            "300x250_external": `/21682198607/external_${S.device}_display_ingame/external_${S.device}_ingame_300x250`,
            "970x250_external": `/21682198607/external_${S.device}_display_ingame/external_${S.device}_ingame_970x250`,
            "160x600_external": `/21682198607/external_${S.device}_display_ingame/external_${S.device}_ingame_160x600`,
            "320x50_external": `/21682198607/external_${S.device}_display_ingame/external_${S.device}_ingame_320x50`,
            "300x600_external_platform": `/21682198607/external_${S.device}_display_platform`,
          },
          o = (e) => {
            const t = {
              mimes:
                yn() || v() || f()
                  ? ["video/mp4", "application/javascript"]
                  : [
                      "video/mp4",
                      "video/webm",
                      "video/ogg",
                      "application/javascript",
                    ],
              minduration: 1,
              protocols: [2, 3, 5, 6, 7, 8, 11, 12, 13, 14],
              w: 640,
              h: 480,
              placement: 1,
              linearity: 1,
              boxingallowed: 1,
              pos: 1,
              api: [2, 7, 8],
              ...(e
                ? { maxduration: 30, maxextended: 10 }
                : { maxduration: 15 }),
              playbackmethod: [3],
              skip: 0,
              startdelay: -1,
            };
            return {
              bids: [
                {
                  bidder: "appnexus",
                  bidSource: { server: 0, client: 100 },
                  params: {
                    placementId: e
                      ? Bn[S.device].rewarded
                      : Bn[S.device].midroll,
                    supplyType: "web",
                  },
                },
                {
                  bidder: "openx",
                  params: {
                    delDomain: "poki-d.openx.net",
                    unit: e ? Mn[S.device].rewarded : Mn[S.device].midroll,
                  },
                },
                {
                  bidder: "ix",
                  params: {
                    siteId: e ? Cn[S.device].rewarded : Cn[S.device].midroll,
                    video: {},
                  },
                },
                {
                  bidder: "richaudience",
                  params: {
                    pid: e ? Pn[S.device].rewarded : Pn[S.device].midroll,
                    supplyType: "site",
                  },
                },
                {
                  bidder: "onetag",
                  bidSource: { server: 0, client: 100 },
                  params: {
                    pubId: "6da09f566a9dc06",
                    ext: {
                      placement_name: e
                        ? Tn[S.device].rewarded
                        : Tn[S.device].midroll,
                    },
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: 498726,
                    zoneId: e ? Sn[S.device].rewarded : Sn[S.device].midroll,
                    position: "atf",
                    video: { size_id: 204 },
                    bcat: yo,
                  },
                },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: e ? En[S.device].rewarded : En[S.device].midroll,
                    bcat: yo,
                  },
                },
                {
                  bidder: "sharethrough",
                  params: {
                    pkey: e ? In[S.device].rewarded : In[S.device].midroll,
                    bcat: yo,
                  },
                },
                {
                  bidder: "triplelift",
                  params: {
                    inventoryCode: e
                      ? zn[S.device].rewarded
                      : zn[S.device].midroll,
                    video: { ...t },
                  },
                },
                {
                  bidder: "unruly",
                  params: {
                    siteId: e ? Un[S.device].rewarded : Un[S.device].midroll,
                  },
                },
                ...(oo("video")
                  ? [
                      {
                        bidder: "appnexus_s2s",
                        bidSource: { server: 0, client: 100 },
                        params: {
                          placementId: e
                            ? Wn[S.device].rewarded
                            : Wn[S.device].midroll,
                          supplyType: "web",
                        },
                      },
                      {
                        bidder: "openx_s2s",
                        params: {
                          delDomain: "poki-d.openx.net",
                          unit: e
                            ? Kn[S.device].rewarded
                            : Kn[S.device].midroll,
                        },
                      },
                      {
                        bidder: "ix_s2s",
                        params: {
                          siteId: e
                            ? Vn[S.device].rewarded
                            : Vn[S.device].midroll,
                          video: {},
                        },
                      },
                      {
                        bidder: "richaudience_s2s",
                        params: {
                          pid: e ? qn[S.device].rewarded : qn[S.device].midroll,
                          supplyType: "site",
                        },
                      },
                      {
                        bidder: "onetag_s2s",
                        bidSource: { server: 0, client: 100 },
                        params: {
                          pubId: "6da09f566a9dc06",
                          ext: {
                            placement_name: e
                              ? Qn[S.device].rewarded
                              : Qn[S.device].midroll,
                          },
                        },
                      },
                      {
                        bidder: "rubicon_s2s",
                        params: {
                          accountId: 18608,
                          siteId: 551606,
                          zoneId: e
                            ? Gn[S.device].rewarded
                            : Gn[S.device].midroll,
                          position: "atf",
                          video: { size_id: 204 },
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "pubmatic_s2s",
                        params: {
                          publisherId: "156838",
                          adSlot: e
                            ? Hn[S.device].rewarded
                            : Hn[S.device].midroll,
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "sharethrough_s2s",
                        params: {
                          pkey: e
                            ? jn[S.device].rewarded
                            : jn[S.device].midroll,
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "unruly_s2s",
                        params: {
                          siteId: e
                            ? $n[S.device].rewarded
                            : $n[S.device].midroll,
                        },
                      },
                    ]
                  : []),
              ],
              mediaTypes: {
                video: {
                  context: "instream",
                  playerSize: [640, 480],
                  plcmt: 1,
                  ...t,
                },
              },
            };
          },
          a = o(!0),
          r = o(!1),
          s = window.location.hostname.replace(".", "-"),
          d = [
            { code: xn, mediaTypes: r.mediaTypes, bids: [...r.bids] },
            { code: _n, mediaTypes: a.mediaTypes, bids: [...a.bids] },
            {
              code: n["728x90"],
              mediaTypes: { banner: { sizes: [[728, 90]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                {
                  bidder: "appnexus",
                  params: { placementId: Bn[S.device]["728x90"] },
                },
                {
                  bidder: "openx",
                  params: {
                    delDomain: "poki-d.openx.net",
                    unit: Mn[S.device]["728x90"],
                  },
                },
                { bidder: "ix", params: { siteId: Cn[S.device]["728x90"] } },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: En[S.device]["728x90"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: 498726,
                    zoneId: Sn[S.device]["728x90"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "onetag",
                  params: {
                    pubId: "6da09f566a9dc06",
                    ext: { placement_name: Tn[S.device]["728x90"] },
                  },
                },
                {
                  bidder: "richaudience",
                  params: { pid: Pn[S.device]["728x90"], supplyType: "site" },
                },
                {
                  bidder: "sharethrough",
                  params: { pkey: In[S.device]["728x90"], bcat: yo },
                },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: zn[S.device]["728x90"] },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: "poki-com",
                    placement: Dn[S.device]["728x90"],
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["728x90"] },
                },
                ...(oo()
                  ? [
                      {
                        bidder: "appnexus_s2s",
                        bidSource: { server: 0, client: 100 },
                        params: { placementId: Wn[S.device]["728x90"] },
                      },
                      {
                        bidder: "openx_s2s",
                        params: {
                          delDomain: "poki-d.openx.net",
                          unit: Kn[S.device]["728x90"],
                        },
                      },
                      {
                        bidder: "ix_s2s",
                        params: { siteId: Vn[S.device]["728x90"] },
                      },
                      {
                        bidder: "pubmatic_s2s",
                        params: {
                          publisherId: "156838",
                          adSlot: Hn[S.device]["728x90"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "rubicon_s2s",
                        params: {
                          accountId: 18608,
                          siteId: 551606,
                          zoneId: Gn[S.device]["728x90"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "onetag_s2s",
                        params: {
                          pubId: "6da09f566a9dc06",
                          ext: { placement_name: Qn[S.device]["728x90"] },
                        },
                      },
                      {
                        bidder: "richaudience_s2s",
                        params: {
                          pid: qn[S.device]["728x90"],
                          supplyType: "site",
                        },
                      },
                      {
                        bidder: "sharethrough_s2s",
                        params: { pkey: jn[S.device]["728x90"], bcat: yo },
                      },
                      {
                        bidder: "triplelift_s2s",
                        params: { inventoryCode: Fn[S.device]["728x90"] },
                      },
                      {
                        bidder: "unruly_s2s",
                        params: { siteId: $n[S.device]["728x90"] },
                      },
                    ]
                  : []),
              ],
            },
            {
              code: n["300x250"],
              mediaTypes: { banner: { sizes: [[300, 250]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                {
                  bidder: "appnexus",
                  params: { placementId: Bn[S.device]["300x250"] },
                },
                {
                  bidder: "openx",
                  params: {
                    delDomain: "poki-d.openx.net",
                    unit: Mn[S.device]["300x250"],
                  },
                },
                { bidder: "ix", params: { siteId: Cn[S.device]["300x250"] } },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: En[S.device]["300x250"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: 498726,
                    zoneId: Sn[S.device]["300x250"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "onetag",
                  params: {
                    pubId: "6da09f566a9dc06",
                    ext: { placement_name: Tn[S.device]["300x250"] },
                  },
                },
                {
                  bidder: "richaudience",
                  params: { pid: Pn[S.device]["300x250"], supplyType: "site" },
                },
                {
                  bidder: "sharethrough",
                  params: { pkey: In[S.device]["300x250"], bcat: yo },
                },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: zn[S.device]["300x250"] },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: "poki-com",
                    placement: Dn[S.device]["300x250"],
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["300x250"] },
                },
                ...(oo()
                  ? [
                      {
                        bidder: "appnexus_s2s",
                        bidSource: { server: 0, client: 100 },
                        params: { placementId: Wn[S.device]["300x250"] },
                      },
                      {
                        bidder: "openx_s2s",
                        params: {
                          delDomain: "poki-d.openx.net",
                          unit: Kn[S.device]["300x250"],
                        },
                      },
                      {
                        bidder: "ix_s2s",
                        params: { siteId: Vn[S.device]["300x250"] },
                      },
                      {
                        bidder: "pubmatic_s2s",
                        params: {
                          publisherId: "156838",
                          adSlot: Hn[S.device]["300x250"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "rubicon_s2s",
                        params: {
                          accountId: 18608,
                          siteId: 551606,
                          zoneId: Gn[S.device]["300x250"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "onetag_s2s",
                        params: {
                          pubId: "6da09f566a9dc06",
                          ext: { placement_name: Qn[S.device]["300x250"] },
                        },
                      },
                      {
                        bidder: "richaudience_s2s",
                        params: {
                          pid: qn[S.device]["300x250"],
                          supplyType: "site",
                        },
                      },
                      {
                        bidder: "sharethrough_s2s",
                        params: { pkey: jn[S.device]["300x250"], bcat: yo },
                      },
                      {
                        bidder: "triplelift_s2s",
                        params: { inventoryCode: Fn[S.device]["300x250"] },
                      },
                      {
                        bidder: "unruly_s2s",
                        params: { siteId: $n[S.device]["300x250"] },
                      },
                    ]
                  : []),
              ],
            },
            {
              code: n["970x250"],
              mediaTypes: { banner: { sizes: [[970, 250]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                {
                  bidder: "appnexus",
                  params: { placementId: Bn[S.device]["970x250"] },
                },
                {
                  bidder: "openx",
                  params: {
                    delDomain: "poki-d.openx.net",
                    unit: Mn[S.device]["970x250"],
                  },
                },
                { bidder: "ix", params: { siteId: Cn[S.device]["970x250"] } },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: En[S.device]["970x250"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: 498726,
                    zoneId: Sn[S.device]["970x250"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "onetag",
                  params: {
                    pubId: "6da09f566a9dc06",
                    ext: { placement_name: Tn[S.device]["970x250"] },
                  },
                },
                {
                  bidder: "richaudience",
                  params: { pid: Pn[S.device]["970x250"], supplyType: "site" },
                },
                {
                  bidder: "sharethrough",
                  params: { pkey: In[S.device]["970x250"], bcat: yo },
                },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: zn[S.device]["970x250"] },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: "poki-com",
                    placement: Dn[S.device]["970x250"],
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["970x250"] },
                },
                ...(oo()
                  ? [
                      {
                        bidder: "appnexus_s2s",
                        bidSource: { server: 0, client: 100 },
                        params: { placementId: Wn[S.device]["970x250"] },
                      },
                      {
                        bidder: "openx_s2s",
                        params: {
                          delDomain: "poki-d.openx.net",
                          unit: Kn[S.device]["970x250"],
                        },
                      },
                      {
                        bidder: "ix_s2s",
                        params: { siteId: Vn[S.device]["970x250"] },
                      },
                      {
                        bidder: "pubmatic_s2s",
                        params: {
                          publisherId: "156838",
                          adSlot: Hn[S.device]["970x250"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "rubicon_s2s",
                        params: {
                          accountId: 18608,
                          siteId: 551606,
                          zoneId: Gn[S.device]["970x250"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "onetag_s2s",
                        params: {
                          pubId: "6da09f566a9dc06",
                          ext: { placement_name: Qn[S.device]["970x250"] },
                        },
                      },
                      {
                        bidder: "richaudience_s2s",
                        params: {
                          pid: qn[S.device]["970x250"],
                          supplyType: "site",
                        },
                      },
                      {
                        bidder: "sharethrough_s2s",
                        params: { pkey: jn[S.device]["970x250"], bcat: yo },
                      },
                      {
                        bidder: "triplelift_s2s",
                        params: { inventoryCode: Fn[S.device]["970x250"] },
                      },
                      {
                        bidder: "unruly_s2s",
                        params: { siteId: $n[S.device]["970x250"] },
                      },
                    ]
                  : []),
              ],
            },
            {
              code: n["160x600"],
              mediaTypes: { banner: { sizes: [[160, 600]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                {
                  bidder: "appnexus",
                  params: { placementId: Bn[S.device]["160x600"] },
                },
                {
                  bidder: "openx",
                  params: {
                    delDomain: "poki-d.openx.net",
                    unit: Mn[S.device]["160x600"],
                  },
                },
                { bidder: "ix", params: { siteId: Cn[S.device]["160x600"] } },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: En[S.device]["160x600"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: 498726,
                    zoneId: Sn[S.device]["160x600"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "onetag",
                  params: {
                    pubId: "6da09f566a9dc06",
                    ext: { placement_name: Tn[S.device]["160x600"] },
                  },
                },
                {
                  bidder: "richaudience",
                  params: { pid: Pn[S.device]["160x600"], supplyType: "site" },
                },
                {
                  bidder: "sharethrough",
                  params: { pkey: In[S.device]["160x600"], bcat: yo },
                },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: zn[S.device]["160x600"] },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: "poki-com",
                    placement: Dn[S.device]["160x600"],
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["160x600"] },
                },
                ...(oo()
                  ? [
                      {
                        bidder: "appnexus_s2s",
                        bidSource: { server: 0, client: 100 },
                        params: { placementId: Wn[S.device]["160x600"] },
                      },
                      {
                        bidder: "openx_s2s",
                        params: {
                          delDomain: "poki-d.openx.net",
                          unit: Kn[S.device]["160x600"],
                        },
                      },
                      {
                        bidder: "ix_s2s",
                        params: { siteId: Vn[S.device]["160x600"] },
                      },
                      {
                        bidder: "pubmatic_s2s",
                        params: {
                          publisherId: "156838",
                          adSlot: Hn[S.device]["160x600"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "rubicon_s2s",
                        params: {
                          accountId: 18608,
                          siteId: 551606,
                          zoneId: Gn[S.device]["160x600"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "onetag_s2s",
                        params: {
                          pubId: "6da09f566a9dc06",
                          ext: { placement_name: Qn[S.device]["160x600"] },
                        },
                      },
                      {
                        bidder: "richaudience_s2s",
                        params: {
                          pid: qn[S.device]["160x600"],
                          supplyType: "site",
                        },
                      },
                      {
                        bidder: "sharethrough_s2s",
                        params: { pkey: jn[S.device]["160x600"], bcat: yo },
                      },
                      {
                        bidder: "triplelift_s2s",
                        params: { inventoryCode: Fn[S.device]["160x600"] },
                      },
                      {
                        bidder: "unruly_s2s",
                        params: { siteId: $n[S.device]["160x600"] },
                      },
                    ]
                  : []),
              ],
            },
            {
              code: n["320x50"],
              mediaTypes: { banner: { sizes: [[320, 50]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                {
                  bidder: "appnexus",
                  params: { placementId: Bn[S.device]["320x50"] },
                },
                {
                  bidder: "openx",
                  params: {
                    delDomain: "poki-d.openx.net",
                    unit: Mn[S.device]["320x50"],
                  },
                },
                { bidder: "ix", params: { siteId: Cn[S.device]["320x50"] } },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: En[S.device]["320x50"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: 498726,
                    zoneId: Sn[S.device]["320x50"],
                    bcat: yo,
                  },
                },
                {
                  bidder: "onetag",
                  params: {
                    pubId: "6da09f566a9dc06",
                    ext: { placement_name: Tn[S.device]["320x50"] },
                  },
                },
                {
                  bidder: "richaudience",
                  params: { pid: Pn[S.device]["320x50"], supplyType: "site" },
                },
                {
                  bidder: "sharethrough",
                  params: { pkey: In[S.device]["320x50"], bcat: yo },
                },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: zn[S.device]["320x50"] },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: "poki-com",
                    placement: Dn[S.device]["320x50"],
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["320x50"] },
                },
                ...(oo()
                  ? [
                      {
                        bidder: "appnexus_s2s",
                        bidSource: { server: 0, client: 100 },
                        params: { placementId: Wn[S.device]["320x50"] },
                      },
                      {
                        bidder: "openx_s2s",
                        params: {
                          delDomain: "poki-d.openx.net",
                          unit: Kn[S.device]["320x50"],
                        },
                      },
                      {
                        bidder: "ix_s2s",
                        params: { siteId: Vn[S.device]["320x50"] },
                      },
                      {
                        bidder: "pubmatic_s2s",
                        params: {
                          publisherId: "156838",
                          adSlot: Hn[S.device]["320x50"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "rubicon_s2s",
                        params: {
                          accountId: 18608,
                          siteId: 551606,
                          zoneId: Gn[S.device]["320x50"],
                          bcat: yo,
                        },
                      },
                      {
                        bidder: "onetag_s2s",
                        params: {
                          pubId: "6da09f566a9dc06",
                          ext: { placement_name: Qn[S.device]["320x50"] },
                        },
                      },
                      {
                        bidder: "richaudience_s2s",
                        params: {
                          pid: qn[S.device]["320x50"],
                          supplyType: "site",
                        },
                      },
                      {
                        bidder: "sharethrough_s2s",
                        params: { pkey: jn[S.device]["320x50"], bcat: yo },
                      },
                      {
                        bidder: "triplelift_s2s",
                        params: { inventoryCode: Fn[S.device]["320x50"] },
                      },
                      {
                        bidder: "unruly_s2s",
                        params: { siteId: $n[S.device]["320x50"] },
                      },
                    ]
                  : []),
              ],
            },
            {
              code: n["728x90_external"],
              mediaTypes: { banner: { sizes: [[728, 90]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                { bidder: "appnexus", params: { placementId: "20973406" } },
                {
                  bidder: "openx",
                  params: { unit: "543885656", delDomain: "poki-d.openx.net" },
                },
                {
                  bidder: "ix",
                  params: {
                    siteId: "268177",
                    placementId: "625562",
                    size: [728, 90],
                  },
                },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: "3457872",
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: "362566",
                    zoneId: "1962680-2",
                    bcat: yo,
                  },
                },
                { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                {
                  bidder: "richaudience",
                  params: { pid: "MP_gIE1VDieUi", supplyType: "site" },
                },
                { bidder: "sharethrough", params: { pkey: Rn, bcat: yo } },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: "Poki_728x90_Prebid" },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: s,
                    placement: `external_${S.device}_display_ingame`,
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["728x90"] },
                },
              ],
            },
            {
              code: n["300x250_external"],
              mediaTypes: { banner: { sizes: [[300, 250]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                { bidder: "appnexus", params: { placementId: "20973408" } },
                {
                  bidder: "openx",
                  params: { unit: "543885657", delDomain: "poki-d.openx.net" },
                },
                {
                  bidder: "ix",
                  params: { siteId: "625564", size: [300, 250] },
                },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: "3457874",
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: "362566",
                    zoneId: "1962680-15",
                    bcat: yo,
                  },
                },
                { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                {
                  bidder: "richaudience",
                  params: { pid: "MP_gIE1VDieUi", supplyType: "site" },
                },
                { bidder: "sharethrough", params: { pkey: Nn, bcat: yo } },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: "Poki_300x250_Prebid" },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: s,
                    placement: `external_${S.device}_display_ingame`,
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["300x250"] },
                },
              ],
            },
            {
              code: n["970x250_external"],
              mediaTypes: { banner: { sizes: [[970, 250]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                { bidder: "appnexus", params: { placementId: "20973415" } },
                {
                  bidder: "openx",
                  params: { unit: "543885650", delDomain: "poki-d.openx.net" },
                },
                {
                  bidder: "ix",
                  params: { siteId: "625560", size: [970, 250] },
                },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: "3457879",
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: "362566",
                    zoneId: "1962680-57",
                    bcat: yo,
                  },
                },
                { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                {
                  bidder: "richaudience",
                  params: { pid: "MP_gIE1VDieUi", supplyType: "site" },
                },
                { bidder: "sharethrough", params: { pkey: On, bcat: yo } },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: "Poki_970x250_Prebid" },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: s,
                    placement: `external_${S.device}_display_ingame`,
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["970x250"] },
                },
              ],
            },
            {
              code: n["160x600_external"],
              mediaTypes: { banner: { sizes: [[160, 600]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                { bidder: "appnexus", params: { placementId: "20973407" } },
                {
                  bidder: "openx",
                  params: { unit: "543885653", delDomain: "poki-d.openx.net" },
                },
                {
                  bidder: "ix",
                  params: { siteId: "625563", size: [160, 600] },
                },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: "3457877",
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: "362566",
                    zoneId: "1962680-9",
                    bcat: yo,
                  },
                },
                { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                {
                  bidder: "richaudience",
                  params: { pid: "MP_gIE1VDieUi", supplyType: "site" },
                },
                { bidder: "sharethrough", params: { pkey: Ln, bcat: yo } },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: "Poki_160x600_Prebid" },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: s,
                    placement: `external_${S.device}_display_ingame`,
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["160x600"] },
                },
              ],
            },
            {
              code: n["320x50_external"],
              mediaTypes: { banner: { sizes: [[320, 50]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                { bidder: "appnexus", params: { placementId: "20973413" } },
                {
                  bidder: "openx",
                  params: { unit: "543885649", delDomain: "poki-d.openx.net" },
                },
                { bidder: "ix", params: { siteId: "625559", size: [320, 50] } },
                {
                  bidder: "pubmatic",
                  params: {
                    publisherId: "156838",
                    adSlot: "3457875",
                    bcat: yo,
                  },
                },
                {
                  bidder: "rubicon",
                  params: {
                    accountId: 18608,
                    siteId: "362566",
                    zoneId: "1962680-43",
                    bcat: yo,
                  },
                },
                { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                {
                  bidder: "richaudience",
                  params: { pid: "MP_gIE1VDieUi", supplyType: "site" },
                },
                { bidder: "sharethrough", params: { pkey: Nn, bcat: yo } },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: "Poki_320x50_Prebid" },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: s,
                    placement: `external_${S.device}_display_ingame`,
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
                {
                  bidder: "unruly",
                  params: { siteId: Un[S.device]["320x50"] },
                },
              ],
            },
            {
              code: n["300x600_external_platform"],
              mediaTypes: { banner: { sizes: [[300, 600]] } },
              ortb2Imp: { battr: [6, 7] },
              bids: [
                { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                {
                  bidder: "richaudience",
                  params: { pid: "MP_gIE1VDieUi", supplyType: "site" },
                },
                {
                  bidder: "triplelift",
                  params: { inventoryCode: "Poki_300x600_Prebid" },
                },
                {
                  bidder: "adagio",
                  params: {
                    organizationId: "1155",
                    site: s,
                    placement: `external_${S.device}_display_ingame`,
                    environment: S.device,
                    useAdUnitCodeAsAdUnitElementId: !0,
                    pagetype: "game",
                    category: "games",
                  },
                },
              ],
            },
          ],
          c = {
            buckets: [
              { precision: 2, max: 5.6, increment: 0.01 },
              { precision: 2, max: 20, increment: 0.05 },
              { precision: 2, max: 45, increment: 0.5 },
            ],
          },
          l = c,
          p = {
            debug: !1,
            enableSendAllBids: !1,
            usePrebidCache: !0,
            deviceAccess: !0,
            bidderTimeout: "desktop" === S.device ? 1875 : 1500,
            enableTIDs: !0,
            eventHistoryTTL: 90,
            minBidCacheTTL: 90,
            mediaTypePriceGranularity: { video: c, banner: l },
            currency: {
              adServerCurrency: "EUR",
              defaultRates: {
                EUR: { EUR: 1, GBP: 0.84, USD: 1.02 },
                GBP: { EUR: 1.2, GBP: 1, USD: 1.22 },
                USD: { EUR: 0.98, GBP: 0.82, USD: 1 },
              },
            },
            cache: {
              url: "https://prebid.adnxs.com/pbc/v1/cache",
              ignoreBidderCacheKey: !0,
            },
            targetingControls: {
              allowTargetingKeys: [
                "BIDDER",
                "AD_ID",
                "PRICE_BUCKET",
                "SIZE",
                "DEAL",
                "SOURCE",
                "FORMAT",
                "UUID",
                "CACHE_ID",
                "CACHE_HOST",
                "ADOMAIN",
              ],
              allowSendAllBidsTargetingKeys: [
                "BIDDER",
                "AD_ID",
                "PRICE_BUCKET",
                "SIZE",
                "DEAL",
                "SOURCE",
                "FORMAT",
                "UUID",
                "CACHE_ID",
                "CACHE_HOST",
                "ADOMAIN",
              ],
            },
            ortb2: {
              site: { name: "Poki", page: pn() },
              device: {
                ...(window.innerWidth && window.innerHeight
                  ? { w: window.innerWidth, h: window.innerHeight }
                  : {}),
              },
              bcat: yo,
            },
            debugging: bo,
            pageUrl: pn(),
            realTimeData: {
              dataProviders: [
                {
                  name: "adagio",
                  params: { organizationId: "1155", site: "poki-com" },
                },
              ],
            },
            userSync: {
              filterSettings: { all: { bidders: "*", filter: "include" } },
              syncsPerBidder: 1e3,
              syncDelay: 100,
              userIds: [
                {
                  name: "pubCommonId",
                  storage: {
                    type: "cookie",
                    name: "poki_pubcid",
                    expires: 180,
                  },
                },
              ],
            },
            ...(S.gdprApplies
              ? {
                  consentManagement: {
                    gdpr: { cmpApi: "iab", timeout: 8e3, defaultGdprScope: !0 },
                  },
                }
              : {}),
            ...(S.ccpaApplies
              ? { consentManagement: { usp: { cmpApi: "iab", timeout: 8e3 } } }
              : {}),
          };
        window.pbjs.que.push(() => {
          Io = !0;
          const n = { floors: {}, ...p, ...t.config };
          window.pbjs.addAdUnits(
            ((e, t) => {
              const { country: i } = S,
                n = t?.[i];
              if (!n) return e;
              for (let t = 0; t <= e.length; t++) {
                const i = e[t],
                  o = n[i?.mediaTypes?.video ? "video" : "display"] || {};
                for (let n = (i?.bids?.length || 0) - 1; n >= 0; n--) {
                  const a = i.bids[n],
                    r = Math.random();
                  o[a.bidder] && r > o[a.bidder] && e[t].bids.splice(n, 1);
                }
              }
              return e;
            })(t.adUnits || d, i)
          ),
            window.pbjs.setConfig(n);
          const o = (e) => (t, i, n) => {
            if (n?.mediaTypes?.banner) {
              ["ix", "richaudience", "pubmatic", "sharethrough"].includes(e) &&
                (t *= 0.95);
            }
            return S.forceBidder === e && (t = 45), t;
          };
          (window.pbjs.bidderSettings = {
            standard: { storageAllowed: !0 },
            appnexus: { bidCpmAdjustment: o("appnexus") },
            openx: { bidCpmAdjustment: o("openx") },
            ix: { bidCpmAdjustment: o("ix") },
            richaudience: { bidCpmAdjustment: o("richaudience") },
            onetag: { bidCpmAdjustment: o("onetag") },
            rubicon: { bidCpmAdjustment: o("rubicon") },
            pubmatic: { bidCpmAdjustment: o("pubmatic") },
            sharethrough: { bidCpmAdjustment: o("sharethrough") },
            triplelift: { bidCpmAdjustment: o("triplelift") },
            adagio: { bidCpmAdjustment: o("adagio") },
          }),
            window.pbjs.onEvent("bidAdjustment", (e) => {
              e &&
                (function (e) {
                  let t = e?.meta?.advertiserDomains?.find(fn);
                  return (
                    !t &&
                      "richaudience" === e.bidderCode &&
                      fn(e?.meta) &&
                      (t = e.meta),
                    !!t &&
                      (wn || (wn = []),
                      wn.push(
                        `${e.bidder}:${t}:${e?.cpm.toFixed(4)}:${
                          e?.meta?.primaryCatId || "-"
                        }`
                      ),
                      console.warn(
                        "%cPOKI:%c blocked ad: ",
                        "font-weight: bold",
                        "",
                        e
                      ),
                      !0)
                  );
                })(e) &&
                (e.ttl = 0);
            }),
            void 0 !== window.pbjs &&
              (window.pbjs.onEvent("bidAdjustment", (e) => {
                fo(e);
              }),
              T.addEventListener(e.ads.loaded, vo),
              T.addEventListener(e.ads.video.error, () => {
                const e = T.getVideoDataAnnotations()?.adID;
                try {
                  window.pbjs.markWinningBidAsUsed({ adId: e });
                } catch (e) {
                  gi("Error marking winning bid as used", e);
                }
              }));
        });
      },
      Bo = ["AU", "CA", "IE", "NZ", "US", "GB"];
    function To() {
      const { country: e } = S;
      return "US" === e ? 1.49 : Bo.includes(e) ? 0.49 : 0.15;
    }
    function Do(t, i, n, o, a, r) {
      const s = b(),
        d = a ? "nope" : i,
        c = pn(),
        l = o ? _n : xn;
      let p,
        A = 0;
      const u = () => {
        if ((A--, !(A > 0)))
          try {
            let o,
              A = d;
            if (Eo()) {
              T.dispatchEvent(e.ads.prebidRequested, { blocked: bn() });
              const a = window.pbjs.adUnits.filter((e) => e.code === l)[0];
              if ("undefined" === a)
                return (
                  console.warn(
                    "%cPOKI:%c Video-ad-unit not found, did you give it the adunit.code='video' value?",
                    "font-weight: bold",
                    ""
                  ),
                  void t.requestAd(d)
                );
              A = window.pbjs.adServers.dfp
                .buildVideoUrl({
                  adUnit: a,
                  params: {
                    iu: w("iu", i),
                    sz: "640x360|640x480",
                    output: "vast",
                    cust_params: n,
                    description_url: c,
                    url: c,
                    nofb: 1,
                    max_ad_duration: 15e3,
                  },
                })
                ?.replace("&max_ad_duration=15000", "")
                ?.replace("&min_ad_duration=1000", "");
              const r = w("cust_params", A),
                s = decodeURIComponent(r);
              if (w("hb_pb", s)) {
                const e = window.pbjs.getHighestCpmBids(l);
                e.length > 0 && (o = e[0]);
              }
              const p = (function (e, t) {
                if (ao() && io?.contentWindow?.floorModuleLoaded)
                  try {
                    return io.contentWindow.assertive?.getAdServerFloorTargeting?.(
                      e,
                      t
                    );
                  } catch (e) {
                    console.warn(
                      "%cPOKI:%c error getting dynamic video floors GAM criteria:",
                      "font-weight: bold",
                      "",
                      e
                    );
                  }
              })(l, o);
              if (p) {
                console.info(
                  "%cPOKI:%c [AY] GAM prebid floor criteria",
                  "font-weight: bold",
                  "",
                  p
                );
                const e = An({ ...p })?.replace("&cust_params=", "");
                A = A.replace("cust_params=", `cust_params=${e}%26`);
              }
              if (o) {
                let e = o.meta?.advertiserDomains?.join(",");
                "richaudience" === o.bidderCode && (e = o.meta),
                  T.addVideoDataAnnotations({
                    adID: o.adId,
                    adDomain: e,
                    HBAdDomain: e,
                    HBBidder: o.bidderCode,
                    HBAdId: o.adId,
                    HBCreativeId: o.creativeId,
                    HBSource: o.source,
                    HBCPM: o.cpm,
                  }),
                  Math.random() < 0.01 &&
                    T.addVideoDataAnnotations({
                      HBVastXML: JSON.stringify(o.vastXml),
                      HBVastUrl: o.vastUrl,
                    });
              }
            }
            if (p) {
              p.startsWith("%26") && (p = p.substring(3));
              const e = decodeURIComponent(p),
                t = w("amznp", e);
              ("8iam0w" === t && ("mobile" === s || "tablet" === s)) ||
                (A = A.replace("cust_params=", `cust_params=${p}%26`)),
                T.addVideoDataAnnotations({ APSBidder: hn(t) });
            }
            if (a) {
              if (p) {
                const e = (function (e) {
                  const t = decodeURIComponent(e),
                    i = w("amznbid", t);
                  if (!i) return null;
                  const n = un[i];
                  return n
                    ? {
                        bid: n,
                        vast: `https://aax.amazon-adsystem.com/e/dtb/vast?b=${w(
                          "amzniid",
                          t
                        )}&rnd=${Math.round(1e10 * Math.random())}&pp=${i}`,
                      }
                    : null;
                })(p);
                e &&
                  (!o || !o.videoCacheKey || o.cpm < e.bid) &&
                  (o = {
                    cpm: e.bid,
                    vast: e.vast,
                    bidder: "amazon",
                    videoCacheKey: "amazon",
                  });
              }
              if (
                (1 === r ||
                  (o && o.videoCacheKey && !(o.cpm < To())) ||
                  (o = {
                    cpm: To(),
                    vast: "https://api.poki.com/ads/houseads/video/vast",
                    bidder: "poki",
                    videoCacheKey: "poki",
                  }),
                !o || !o.videoCacheKey)
              )
                return void T.dispatchEvent(
                  1 === r ? e.ads.video.error : e.ads.completed,
                  { rewardAllowed: !1 }
                );
              switch (o.bidder) {
                case "onetag":
                  A = `https://onetag-sys.com/invocation/?key=${o.videoCacheKey}`;
                  break;
                case "rubicon":
                  A = `https://prebid-server.rubiconproject.com/cache?uuid=${o.videoCacheKey}`;
                  break;
                case "spotx":
                  A = `https://search.spotxchange.com/ad/vast.html?key=${o.videoCacheKey}`;
                  break;
                case "amazon":
                case "poki":
                  A = o.vast;
                  break;
                default:
                  A = `https://prebid.adnxs.com/pbc/v1/cache?uuid=${o.videoCacheKey}`;
              }
              D({ event: "video-ready", bidder: o?.bidder, bid: o?.cpm }),
                T.addVideoDataAnnotations({
                  p4d_game_id: S.gameID,
                  p4d_version_id: S.versionID,
                  bidder: o?.bidder,
                  bid: o?.cpm,
                });
            }
            T.addVideoDataAnnotations({ pokiAdServer: a, adTagUrl: A }),
              o
                ? T.addVideoDataAnnotations({
                    prebidBidder: o?.bidder,
                    prebidBid: o?.cpm,
                  })
                : T.addVideoDataAnnotations({
                    prebidBidder: void 0,
                    prebidBid: void 0,
                  }),
              t.requestAd(A);
          } catch {
            t.requestAd(d);
          }
      };
      if ((So() && A++, Eo() && A++, So()))
        try {
          let e = "desktop_ingame_midroll_1";
          o &&
            (e =
              "desktop" === s
                ? "desktop_ingame_roll_1"
                : "mobile_ingame_roll_1");
          let t = [{ slotID: e, mediaType: "video" }];
          ro() && (t = window?.assertive?.addAmazonFloors?.(t)),
            window.apstag.fetchBids({ slots: t, timeout: 1500 }, (e) => {
              e.length > 0 && (p = e[0].encodedQsParams), u();
            });
        } catch {
          u();
        }
      a && D({ event: "video-request" }),
        Eo() &&
          window.pbjs.que.push(() => {
            const e = (function (e) {
                if (ao() && io?.contentWindow?.floorModuleLoaded)
                  try {
                    return io.contentWindow.assertive?.getPrebidFloor?.(e);
                  } catch (e) {
                    console.warn(
                      "%cPOKI:%c error getting dynamic video floors:",
                      "font-weight: bold",
                      "",
                      e
                    );
                  }
              })(l),
              t = window.pbjs.adUnits.filter((e) => e.code === l)[0];
            e &&
              (console.info(
                "%cPOKI:%c [AY] applied prebid floor to Prebid",
                "font-weight: bold",
                "",
                e
              ),
              (t.floors = {
                currency: "USD",
                schema: { delimiter: "|", fields: ["mediaType"] },
                values: { "*": e },
              })),
              window.pbjs.requestBids({
                adUnits: [t],
                bidsBackHandler: () => {
                  u();
                },
              });
          }),
        So() || Eo() || u();
    }
    function Mo() {
      return (
        !("yes" !== w("poki-ad-server")) &&
        (console.info(
          "%cPOKI:%c Only running Poki-ad-server",
          "font-weight: bold",
          ""
        ),
        !0)
      );
    }
    let Lo,
      Oo = !1;
    const { testVideos: No, device: Ro } = S,
      zo = () =>
        No
          ? "/6062/sanghan_rweb_ad_unit"
          : `/21682198607/${Ro}_ingame_rewarded_google/${S.siteID}_${Ro}_ingame_rewarded_google`,
      Uo = (t) => {
        "desktop" === Ro || document?.fullscreenElement
          ? T.dispatchEvent(e.ads.video.startHouseAdFlow)
          : window.googletag.cmd.push(() => {
              Ki.track(e.tracking.ads.rewardedWeb.request),
                ((e) => {
                  googletag.defineOutOfPageSlot &&
                    (Lo && googletag.destroySlots([Lo]),
                    (Lo = googletag
                      .defineOutOfPageSlot(
                        zo(),
                        googletag.enums.OutOfPageFormat.REWARDED
                      )
                      .addService(googletag.pubads())),
                    googletag.enableServices(),
                    Object.keys(e).forEach((t) => {
                      const i = e[t];
                      "" !== i && Lo?.setTargeting?.(t, i);
                    }));
                })(t),
                Lo
                  ? window.googletag.cmd.push(() => {
                      window.googletag.display(Lo);
                    })
                  : T.dispatchEvent(e.ads.video.startHouseAdFlow);
            });
      },
      Fo = {
        desktop: {
          [Zn]: {
            [eo.skyscraper]: ["DZ", "BO", "BD", "TN"],
            [eo.rectangle]: ["CN", "BO", "BD", "NP", "TN", "DZ"],
            [eo.leaderboard]: ["CN", "NP", "PY", "DZ", "BO", "TN"],
            [eo.midroll]: ["CN", "PK", "DZ"],
            [eo.rewarded]: ["CN", "DZ"],
          },
          [Xn]: { [eo.leaderboard]: ["DZ"] },
        },
        mobile: {
          [Zn]: {
            [eo.gamebar]: [
              "BR",
              "AR",
              "GR",
              "OM",
              "VN",
              "CO",
              "TR",
              "CN",
              "AZ",
              "GT",
              "PY",
              "PH",
              "MA",
              "HN",
              "TW",
              "IQ",
              "NI",
              "DO",
              "RS",
              "EC",
              "UA",
              "UY",
              "AM",
              "AL",
              "IN",
              "ID",
              "DZ",
              "EG",
              "PK",
              "BO",
              "BD",
              "LK",
              "NP",
              "TN",
            ],
            [eo.rewarded]: ["CN"],
          },
          [Xn]: { [eo.smallLeaderboard]: ["DZ"] },
        },
      };
    function jo(e = "", t = Jn()) {
      const { device: i, country: n } = S,
        o = ((e) => {
          if (e.includes("gamebar_320x50")) return eo.gamebar;
          if (e.includes(`external_${S.device}_display_platform`))
            return eo.externalSkyscraper;
          const t = Object.keys(eo).find((t) => !!e.includes(`_${eo[t]}`));
          return t && "gamebar" !== t
            ? t
            : (console.warn(
                "%cPOKI:%c Unknown adunitpath or new gamebar format",
                "font-weight: bold",
                "",
                e
              ),
              "");
        })(e);
      return !Fo?.[i]?.[t]?.[eo[o]]?.includes(n);
    }
    class Go {
      #C;
      #P;
      #B;
      #T = 0;
      #D = !1;
      timing;
      totalRetries;
      #M;
      #L;
      #O;
      constructor(t, i = {}) {
        (this.#C = t),
          (this.#L = Mo()),
          (this.totalRetries = i.totalRetries || cn.waterfallRetries || 1),
          (this.timing = i.timing || new ln(cn.adTiming)),
          T.addEventListener(e.ads.video.error, () => {
            this.moveThroughWaterfall();
          }),
          T.addEventListener(e.ads.video.loaderError, () => {
            this.moveThroughWaterfall();
          }),
          T.addEventListener(e.ads.ready, () => {
            this.timing.stopWaterfallTimer();
          }),
          T.addEventListener(e.ads.started, () => {
            this.stopWaterfall();
          }),
          T.addEventListener(e.ads.video.startHouseAdFlow, () => {
            this.startHouseAdFlow();
          });
      }
      moveThroughWaterfall() {
        if (this.#O)
          return (
            (this.#O = !1),
            void T.dispatchEvent(e.ads.error, { rewardAllowed: !1 })
          );
        !1 !== this.#D &&
          (this.timing.stopWaterfallTimer(),
          this.#T < this.totalRetries
            ? this.requestAd()
            : ((this.#D = !1),
              this.#M ? Uo(this.#B) : T.dispatchEvent(e.ads.error, {})));
      }
      cutOffWaterfall() {
        this.#C.tearDown(), this.moveThroughWaterfall();
      }
      startHouseAdFlow() {
        const e = "https://api.poki.com/ads/houseads/video/vast";
        T.addVideoDataAnnotations({
          pokiAdServer: !0,
          adTagUrl: e,
          bidder: "poki",
          bid: 0,
        }),
          D({ event: "video-request" }),
          this.#C.requestAd(e),
          (this.#O = !0);
      }
      start(t = {}, i) {
        (this.#D = !0),
          (this.#T = 0),
          (this.#B = t),
          (this.#M = i === e.ads.position.rewarded),
          (this.#P = ((t) => {
            const { device: i } = S;
            let n = "midroll";
            if (w("noFill") || C.debug) return ["junk", "junk"];
            t === e.ads.position.rewarded && (n = "rewarded");
            const o = "/21682198607/";
            return Jn() === Yn
              ? [
                  `${o}external_${i}_video_1/external_${i}_ingame_${n}_1`,
                  `${o}external_${i}_video_2/external_${i}_ingame_${n}_2`,
                ]
              : [
                  `${o}${i}_ingame_${n}_1/${S.siteID}_${i}_ingame_${n}_1`,
                  `${o}${i}_ingame_${n}_2/${S.siteID}_${i}_ingame_${n}_2`,
                ];
          })(i)),
          this.requestAd();
      }
      requestAd() {
        this.timing.startWaterfallTimer(() => {
          this.cutOffWaterfall();
        }),
          this.#T++,
          (this.#B.waterfall = this.#T),
          (this.#O = !1);
        const t = (this.#T - 1) % this.#P.length,
          i = this.#P[t];
        let n = `https://securepubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=${i}&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast4`;
        S.familyFriendly && (n += "&tfcd=1&tfua=1&rdp=1&npa=1"),
          S.nonPersonalized && (n += "&npa=1"),
          (n +=
            "&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1");
        const o =
          Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
          ) > 970;
        (this.#B.ay_hb_house = 1),
          (this.#B.billboards_fit = o ? "yes" : "no"),
          (this.#B.page_has_lead =
            null !==
            document.getElementById(
              `/21682198607/desktop_gp_728x90/${S.siteID}_desktop_gp_728x90`
            )?.offsetParent
              ? "yes"
              : "no");
        const a =
            ((e) => {
              const t = encodeURIComponent(pn());
              return (e = (e = e.split("{url}").join(t))
                .split("{descriptionUrl}")
                .join(t))
                .split("{timestamp}")
                .join(new Date().getTime().toString());
            })(n) + An(this.#B),
          r = jo(i);
        T.addVideoDataAnnotations({
          adUnitPath: i,
          adTagUrl: a,
          waterfall: this.#T,
          size: "640x360v",
          ab: this.#B.ab,
          headerBiddingAllowed: r,
        }),
          T.dispatchEvent(e.ads.requested),
          C.debug || S.houseAdsOnly
            ? (ui(
                `requesting video ad in house-ad mode (${this.#T}/${
                  this.totalRetries
                } tries)`
              ),
              this.startHouseAdFlow())
            : this.#L
            ? (ui(
                `requesting video ad with Poki Adserver (${this.#T}/${
                  this.totalRetries
                } tries)`
              ),
              Do(this.#C, a, this.#B, this.#M, !0, this.#T))
            : r && 1 === this.#T
            ? (ui(
                `requesting video ad with Prebid Video enabled (${this.#T}/${
                  this.totalRetries
                } tries)`
              ),
              Do(this.#C, a, this.#B, this.#M, !1, this.#T))
            : (ui(
                `requesting video ad in plain mode (${this.#T}/${
                  this.totalRetries
                } tries)`
              ),
              this.#C.requestAd(a));
      }
      isRunning() {
        return this.#D;
      }
      stopWaterfall() {
        (this.#D = !1), this.timing.stopWaterfallTimer();
      }
    }
    class Ho {
      #N;
      #R;
      #z;
      #U;
      #F;
      #j;
      #G;
      #H;
      #V;
      #q;
      currentProgress;
      constructor(t) {
        (this.#j = []),
          (this.#N = t),
          this.reset(),
          T.addEventListener(e.ads.video.progress, (e) => {
            const t = 100 - this.currentProgress,
              i = (e.currentTime / e.duration) * t;
            i < t && this.#N(this.currentProgress + i);
          }),
          this.initializeNoProgressFix();
      }
      queueFakeProgress(e, t, i) {
        this.#j.push({ progressToFake: e, duration: t, stopEvent: i }),
          T.addEventListener(i, () => {
            (this.#R[i] = !0),
              (this.currentProgress = this.#z + e),
              (this.#z = this.currentProgress),
              this.#N(this.currentProgress),
              this.#G.shift(),
              this.#G.length > 0 ? this.continue() : this.pause();
          });
      }
      fakeProgress(e, t, i) {
        this.#G.push({ progressToFake: e, duration: t, stopEvent: i }),
          (this.#q = !0),
          this.continue();
      }
      start() {
        this.#G.length > 0 ||
          ((this.#G = [...this.#j]), (this.#V = !0), this.continue());
      }
      continue() {
        if (this.#G.length > 0 && !this.#F) {
          this.#U = Date.now();
          const e = 50;
          (this.#F = window.setInterval(this.tick.bind(this), e)),
            (this.#V = !0);
        }
      }
      pause() {
        this.clearInterval();
      }
      tick() {
        const t = this.#G[0],
          i = Date.now() - this.#U,
          n = Math.min(i / t.duration, 1);
        (this.currentProgress = this.#z + t.progressToFake * n),
          this.#q &&
            T.dispatchEvent(e.ads.video.progress, {
              duration: t.duration / 1e3,
              currentTime: i / 1e3,
            }),
          this.#N(this.currentProgress),
          (this.#R[t.stopEvent] || 1 === n) && this.pause();
      }
      clearInterval() {
        this.#F && (clearInterval(this.#F), (this.#F = 0));
      }
      initializeNoProgressFix() {
        T.addEventListener(e.ads.started, (t) => {
          this.#H = window.setTimeout(() => {
            if (this.#V) {
              const i = 100 - this.currentProgress,
                n = 1e3 * t.duration - 1e3;
              this.fakeProgress(i, n, e.ads.completed);
            }
          }, 1e3);
        }),
          T.addEventListener(e.ads.video.progress, () => {
            this.#H && (clearTimeout(this.#H), (this.#H = 0));
          });
      }
      reset() {
        (this.#R = {}),
          (this.#z = 0),
          (this.#U = 0),
          (this.currentProgress = 0),
          (this.#G = []),
          (this.#V = !1),
          (this.#q = !1),
          this.clearInterval();
      }
      fakeItTillTheEnd(t) {
        const i = 100 - this.currentProgress;
        this.fakeProgress(i, 1e3 * t, e.ads.completed);
      }
    }
    let Vo;
    async function qo() {
      if (
        "undefined" != typeof navigator &&
        navigator.userAgent.toLowerCase().includes("bytedancewebview")
      )
        return !0;
      if (!Vo) {
        (Vo = document.createElement("video")),
          Vo.setAttribute("playsinline", "playsinline");
        const e = document.createElement("source");
        (e.src =
          "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"),
          Vo.appendChild(e);
      }
      try {
        return await Vo.play(), !0;
      } catch {
        return !1;
      }
    }
    function Wo(e) {
      e.classList.add(Ye), e.classList.remove(dt);
    }
    function Qo(e) {
      e.classList.add(dt), e.classList.remove(Ye);
    }
    class Ko {
      #W;
      #Q;
      #K;
      #$;
      #Z;
      #X;
      #Y;
      #J;
      #ee;
      #te;
      #ie;
      #ne;
      #oe;
      #ae;
      #re;
      constructor(t) {
        if (
          ((this.#oe = new Ho((e) => this.updateProgressBar(e))),
          this.#oe.queueFakeProgress(20, 2e3, e.ads.started),
          this.#se(t.wrapper),
          "undefined" != typeof window && document)
        ) {
          const e = document.createElement("style");
          (e.innerHTML = At), document.head.appendChild(e);
        }
      }
      updateProgressBar(e) {
        this.#ee.style.width = `${e}%`;
      }
      setupEvents(e) {
        this.#$ = e;
      }
      hide() {
        this.#ae?.(),
          Wo(this.#Q),
          Wo(this.#te),
          this.hidePauseButton(),
          Wo(this.#J),
          Wo(this.#re),
          this.#Q.classList.remove(Xe),
          (this.#ee.style.width = "0%"),
          this.#oe.reset();
      }
      hideSpinner() {
        Wo(this.#ie);
      }
      show() {
        this.#Q.classList.add(Xe),
          Qo(this.#Q),
          Qo(this.#ie),
          Qo(this.#te),
          this.#oe.start();
      }
      getVideoBounds() {
        return this.#W.getBoundingClientRect();
      }
      getAdContainer() {
        return this.#W;
      }
      getVideoContainer() {
        return this.#ne;
      }
      showPauseButton() {
        Qo(this.#Z),
          this.#$ &&
            this.#Z.addEventListener("click", () => {
              this.#$.resumeAd();
            });
      }
      hidePauseButton() {
        Wo(this.#Z),
          this.#$ &&
            this.#Z.removeEventListener("click", () => {
              this.#$.resumeAd();
            });
      }
      showStartAdButton() {
        Qo(this.#J),
          this.#$ &&
            this.#J.addEventListener("click", () => {
              this.#$.startAdClicked();
            });
      }
      hideStartAdButton() {
        Wo(this.#J),
          this.#$ &&
            this.#J.removeEventListener("click", () => {
              this.#$.startAdClicked();
            });
      }
      #se(e) {
        (this.#Q = document.createElement("div")),
          (this.#K = document.createElement("div")),
          (this.#Z = document.createElement("div")),
          (this.#X = document.createElement("div")),
          (this.#Y = document.createElement("div")),
          (this.#J = document.createElement("div")),
          (this.#ee = document.createElement("div")),
          (this.#te = document.createElement("div")),
          (this.#ie = document.createElement("div")),
          (this.#W = document.createElement("div")),
          (this.#ne = document.createElement("video")),
          (this.#re = document.createElement("div")),
          (this.#W.id = "pokiSDKAdContainer"),
          (this.#ne.id = "pokiSDKVideoContainer"),
          (this.#Q.className = $e),
          (this.#K.className = Je),
          (this.#Z.className = et),
          (this.#X.className = tt),
          (this.#Y.className = it),
          this.#Z.appendChild(this.#X),
          this.#Z.appendChild(this.#Y),
          (this.#J.className = nt),
          (this.#J.innerHTML = "Tap anywhere to play ad"),
          (this.#ee.className = ot),
          (this.#te.className = at),
          (this.#ie.className = rt),
          (this.#W.className = ct),
          (this.#ne.className = st),
          (this.#re.className = pt),
          this.hide(),
          this.#ne.setAttribute("playsinline", "playsinline"),
          this.#ne.setAttribute("muted", "muted"),
          this.#Q.appendChild(this.#K),
          this.#Q.appendChild(this.#ie),
          this.#Q.appendChild(this.#re),
          this.#K.appendChild(this.#te),
          this.#K.appendChild(this.#ne),
          this.#K.appendChild(this.#W),
          this.#Q.appendChild(this.#Z),
          this.#Q.appendChild(this.#J),
          this.#te.appendChild(this.#ee);
        let t = e || null;
        const i = () => {
          if ((t || (t = document.body), t))
            if ((t.appendChild(this.#Q), t === document.body))
              this.#Q.classList.add(Ze);
            else {
              const e = window.getComputedStyle(t).position;
              (e && -1 !== ["absolute", "fixed", "relative"].indexOf(e)) ||
                (t.style.position = "relative");
            }
          else window.requestAnimationFrame(i);
        };
        !t ||
          t instanceof HTMLElement ||
          ((t = null),
          console.warn(
            "%cPOKI:%c wrapper is not a HTMLElement, falling back to document.body",
            "font-weight: bold",
            ""
          )),
          i();
      }
      async startNonIMAFallbackVideo(t) {
        const i = document.createElement("video");
        (i.id = "pokiSDKHouseAdContainer"),
          (i.className = lt),
          (i.playsInline = !0),
          (i.muted = vt() || ft),
          (i.src = t.videoUrl);
        let n = !1;
        const o = () => {
          t.clickThrough && window.open(t.clickThrough),
            T.dispatchEvent(e.ads.video.clicked, { creativeId: "HouseAd" }),
            i.pause(),
            a();
        };
        this.#K.addEventListener("click", o);
        const a = (t) => {
          (this.#ae = void 0),
            this.hide(),
            this.#K.removeChild(i),
            this.#K.removeEventListener("click", o),
            t || T.dispatchEvent(e.ads.completed, { rewardAllowed: n });
        };
        (this.#ae = () => a(!0)),
          (i.onabort = () => a()),
          (i.onerror = () => a()),
          (i.onerror = () => a()),
          (i.ontimeupdate = () => {
            i.currentTime >= 2 && (n = !0);
          }),
          (i.onplaying = () => {
            T.dispatchEvent(e.ads.started, {
              creativeId: "HouseAd",
              duration: t.duration,
              skip: -1,
            }),
              T.dispatchEvent(e.ads.impression),
              this.#oe.fakeItTillTheEnd(t.duration);
          }),
          (i.onended = () => {
            a();
          }),
          this.#K.appendChild(i);
        qo() || (i.muted = !0), i.play().catch(() => a());
      }
      setNrAds(e, t) {
        1 !== t
          ? (Qo(this.#re), (this.#re.innerHTML = `Ad ${e} of ${t}`))
          : Wo(this.#re);
      }
    }
    class $o {
      adDisplayContainer;
      adsManager;
      adsLoader;
      videoElement;
      bannerTimeout = null;
      allowedToPlayAd = !1;
      runningAd = !1;
      completeOnce = !1;
      videoStarted = !1;
      currentWidth = 640;
      currentHeight = 480;
      currentRequestIsMuted = !1;
      volume = 1;
      constructor(e) {
        (this.videoElement = document.getElementById("pokiSDKVideoContainer")),
          (this.adsManager = null),
          (this.volume = e),
          this.initAdDisplayContainer(),
          this.initAdsLoader();
      }
      initAdDisplayContainer() {
        this.adDisplayContainer ||
          (window.google &&
            (this.adDisplayContainer = new google.ima.AdDisplayContainer(
              document.getElementById("pokiSDKAdContainer"),
              this.videoElement
            )));
      }
      initAdsLoader() {
        this.adsLoader ||
          (window.google &&
            ((this.adsLoader = new google.ima.AdsLoader(
              this.adDisplayContainer
            )),
            this.adsLoader
              .getSettings()
              .setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
            this.adsLoader
              .getSettings()
              .setDisableCustomPlaybackForIOS10Plus(!0),
            this.adsLoader.getSettings().setNumRedirects(8),
            this.adsLoader.addEventListener(
              google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
              this.onAdsManagerLoaded,
              !1,
              this
            ),
            this.adsLoader.addEventListener(
              google.ima.AdErrorEvent.Type.AD_ERROR,
              this.onAdLoaderError,
              !1,
              this
            ),
            this.videoElement.addEventListener("onended", () =>
              this.adsLoader.contentComplete()
            )));
      }
      async requestAd(e) {
        if (this.runningAd) return;
        (this.runningAd = !0),
          (this.completeOnce = !0),
          (this.videoStarted = !1),
          this.adDisplayContainer.initialize(),
          (this.videoElement.src = "");
        const t =
            document?.getElementById("pokiDebugVASTResponse")?.value || "",
          i = new google.ima.AdsRequest();
        t ? (i.adsResponse = t) : (i.adTagUrl = e),
          (i.linearAdSlotWidth = this.currentWidth),
          (i.linearAdSlotHeight = this.currentHeight),
          (i.nonLinearAdSlotWidth = this.currentWidth),
          (i.nonLinearAdSlotHeight = this.currentHeight),
          (i.forceNonLinearFullSlot = !0);
        (await qo())
          ? (i.setAdWillPlayMuted(!1), (this.currentRequestIsMuted = !1))
          : (i.setAdWillPlayMuted(!0), (this.currentRequestIsMuted = !0)),
          (this.allowedToPlayAd = !0),
          this.adsLoader.requestAds(i, { adTagUrl: e });
      }
      resize(e, t) {
        (this.currentWidth = e),
          (this.currentHeight = t),
          this.adsManager &&
            this.adsManager.resize(e, t, window?.google.ima.ViewMode.NORMAL);
      }
      onAdsManagerLoaded(t) {
        const i = new google.ima.AdsRenderingSettings();
        (i.enablePreloading = !0),
          (i.restoreCustomPlaybackStateOnAdBreakComplete = !0),
          (i.mimeTypes =
            yn() || v() || f()
              ? ["video/mp4"]
              : ["video/mp4", "video/webm", "video/ogg"]),
          (i.loadVideoTimeout = 8e3),
          (this.adsManager = t.getAdsManager(this.videoElement, i)),
          this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume))),
          this.currentRequestIsMuted && this.adsManager.setVolume(0),
          this.allowedToPlayAd
            ? (this.attachAdEvents(), T.dispatchEvent(e.ads.ready))
            : this.tearDown();
      }
      setVolume(e) {
        (this.volume = e),
          this.adsManager &&
            this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume)));
      }
      startPlayback() {
        try {
          this.adsManager.init(
            this.currentWidth,
            this.currentHeight,
            google.ima.ViewMode.NORMAL
          ),
            this.adsManager.start();
        } catch {
          return this.tearDown(), !1;
        }
        return !0;
      }
      startIOSPlayback() {
        this.adsManager.start();
      }
      stopPlayback() {
        this.tearDown();
      }
      resumeAd() {
        T.dispatchEvent(e.ads.video.resumed),
          this.adsManager && this.adsManager.resume();
      }
      tearDown() {
        this.adsManager &&
          (this.adsManager.stop(),
          this.adsManager.destroy(),
          (this.adsManager = null)),
          null !== this.bannerTimeout &&
            (clearTimeout(this.bannerTimeout), (this.bannerTimeout = null)),
          this.adsLoader &&
            (this.adsLoader.contentComplete(),
            this.adsLoader.destroy(),
            (this.adsLoader = null),
            this.initAdsLoader()),
          (this.completeOnce = !1),
          (this.runningAd = !1);
      }
      attachAdEvents() {
        const e = google.ima.AdEvent.Type;
        this.adsManager.addEventListener(
          google.ima.AdErrorEvent.Type.AD_ERROR,
          this.onAdError,
          !1,
          this
        ),
          [
            e.AD_PROGRESS,
            e.ALL_ADS_COMPLETED,
            e.CLICK,
            e.COMPLETE,
            e.IMPRESSION,
            e.PAUSED,
            e.SKIPPED,
            e.STARTED,
            e.USER_CLOSE,
            e.AD_BUFFERING,
            e.LOG,
            e.LOADED,
          ].forEach((e) => {
            this.adsManager.addEventListener(e, this.onAdEvent, !1, this);
          });
      }
      onAdEvent(t) {
        const i = t.getAd(),
          n = () => {
            try {
              let e,
                t = !1;
              const n = i?.getWrapperAdIds?.() || [],
                o = i?.getAdSystem?.();
              "GDFP" === o || "AdSense" === o
                ? ((e = i?.getAdId?.()), (t = !0))
                : n.length > 0 && (e = n[n.length - 1]),
                T.addVideoDataAnnotations({
                  IMAAdID: i?.getAdId?.(),
                  IMAAdSystem: i?.getAdSystem?.(),
                  IMAContentType: i?.getContentType?.(),
                  IMATitle: i?.getTitle?.(),
                  IMALineItemID: e,
                  IMAGoogleBackfill: t,
                  IMAUniversalAdIDRegistry: i?.getUniversalAdIdRegistry?.(),
                  IMAUniversalAdIDValue: i?.getUniversalAdIdValue?.(),
                  IMAUniversalAdIDs: JSON.stringify(i?.getUniversalAdIds?.()),
                  IMAWrapperIDs: [n, i?.getWrapperCreativeIds?.() || []].flat(
                    1 / 0
                  ),
                });
            } catch (e) {
              console.warn(
                "%cPOKI:%c error annotating IMA ad:",
                "font-weight: bold",
                "",
                e
              );
            }
          };
        switch (t.type) {
          case google.ima.AdEvent.Type.AD_PROGRESS:
            T.dispatchEvent(e.ads.video.progress, t.getAdData());
            break;
          case google.ima.AdEvent.Type.LOADED:
            n(), T.dispatchEvent(e.ads.loaded, {});
            break;
          case google.ima.AdEvent.Type.STARTED:
            (t.remainingTime = this.adsManager.getRemainingTime()),
              t.remainingTime <= 0 && (t.remainingTime = 15),
              (this.videoStarted = !0),
              i.isLinear() ||
                (this.bannerTimeout = window.setTimeout(() => {
                  this.completeOnce &&
                    ((this.completeOnce = !1),
                    T.dispatchEvent(e.ads.completed, {
                      rewardAllowed: this.videoStarted && t.rewardAllowed,
                    })),
                    this.tearDown();
                }, 1e3 * (t.remainingTime + 1))),
              T.addVideoDataAnnotations({
                creativeId: i.getCreativeId(),
                duration: i.getDuration(),
                skip: i.getSkipTimeOffset(),
              }),
              n(),
              T.dispatchEvent(e.ads.started, {});
            break;
          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          case google.ima.AdEvent.Type.COMPLETE:
            this.completeOnce &&
              ((this.completeOnce = !1),
              T.dispatchEvent(e.ads.completed, {
                rewardAllowed: this.videoStarted,
              })),
              this.tearDown();
            break;
          case google.ima.AdEvent.Type.USER_CLOSE:
            this.completeOnce &&
              ((this.completeOnce = !1),
              T.dispatchEvent(e.ads.completed, { rewardAllowed: !1 })),
              this.tearDown();
            break;
          case google.ima.AdEvent.Type.PAUSED:
            this.adsManager.pause(), T.dispatchEvent(e.ads.video.paused);
            break;
          case google.ima.AdEvent.Type.AD_BUFFERING:
            T.dispatchEvent(e.ads.video.buffering);
            break;
          case google.ima.AdEvent.Type.CLICK:
            T.dispatchEvent(e.ads.video.clicked);
            break;
          case google.ima.AdEvent.Type.SKIPPED:
            T.dispatchEvent(e.ads.skipped),
              this.completeOnce &&
                ((this.completeOnce = !1),
                T.dispatchEvent(e.ads.completed, {
                  rewardAllowed: this.videoStarted,
                })),
              document.activeElement && document.activeElement.blur(),
              this.tearDown();
            break;
          case google.ima.AdEvent.Type.IMPRESSION:
            T.dispatchEvent(e.ads.impression, {
              creativeId: i.getCreativeId(),
            }),
              (function () {
                const t = T.getVideoDataAnnotations(),
                  {
                    HBBid: i,
                    position: n,
                    pokiAdServer: o,
                    HBPrebidWon: a,
                    adUnitPath: r,
                    IMALineItemID: s,
                    IMAGoogleBackfill: d,
                  } = t,
                  c = n === e.ads.position.rewarded ? _n : xn;
                if (o) return;
                let l;
                if (i)
                  try {
                    (l = JSON.parse(i)),
                      T.addVideoDataAnnotations({ HBBid: void 0 });
                  } catch (e) {}
                l ||
                  (l =
                    window?.pbjs?.getHighestUnusedBidResponseForAdUnitCode?.(
                      c
                    ));
                const p = {
                  mediaType: "video",
                  preBidWon: a || !1,
                  flooring: !0,
                  slotId: c,
                  adUnitPath: r,
                  highestPreBid: l?.cpm || 0,
                  highestPreBid_partner: l?.bidderCode || "",
                  creative_width: 640,
                  creative_height: 480,
                  timeToRespond: l?.timeToRespond || 0,
                  dfpResponseInformation: {
                    lineItemId: parseInt(s, 10) || 0,
                    isBackfill: d,
                  },
                };
                io?.contentWindow?.assertive?.logCustomImpression?.(p);
              })();
        }
      }
      onAdLoaderError(t) {
        this.tearDown();
        const i = t?.getError(),
          n = i?.toString() || "Unknown",
          o = i?.getErrorCode() || 0;
        T.dispatchEvent(e.ads.video.loaderError, { message: n, errorCode: o });
      }
      onAdError(t) {
        this.tearDown();
        const i = t?.getError(),
          n = i?.toString() || "Unknown",
          o = i?.getErrorCode() || 0;
        T.dispatchEvent(e.ads.video.error, {
          message: n,
          errorCode: o,
          context: t?.getUserRequestContext(),
        });
      }
      muteAd() {
        void 0 !== this.adsManager &&
          null != this.adsManager &&
          this.adsManager.setVolume(0);
      }
      isAdRunning() {
        return this.runningAd;
      }
    }
    const Zo = () => {
      let { pathname: e } = window.location;
      "/" !== e[0] && (e = `/${e}`);
      let t = "";
      window.top !== window && (t = encodeURIComponent(document.referrer));
      return ut(
        `https://devs-api.poki.com/gameinfo/@sdk?href=${encodeURIComponent(
          `${window.location.protocol}//${window.location.host}${e}${window.location.search}`
        )}&referrer=${t}`,
        { method: "GET", headers: { "Content-Type": "text/plain" } }
      )
        .then(async (e) => {
          if (e.status >= 200 && e.status < 400) {
            const t = await e.json();
            if (!t.game_id) return;
            return {
              gameID: t.game_id,
              gameTitle: t.game_name,
              playtestRecord: t.playtest_record,
              playtestVersion: t.playtest_version,
              playtestDeviceCategory: t.playtest_device_category,
              playtestNewUser: t.playtest_new_user,
              metrictestID: t.metrictest_id,
              metrictestVersion: t.metrictest_version,
              metrictestDeviceCategory: t.metrictest_device_category,
              cachedContentGameID: t.cached_content_game_id,
              specialConditions: t.ad_settings.special_conditions,
              adTiming: {
                preroll: t.ad_settings.preroll,
                timePerTry: t.ad_settings.time_per_try,
                timeBetweenAds: t.ad_settings.time_between_ads,
                startAdsAfter: t.ad_settings.start_ads_after,
              },
            };
          }
          throw e;
        })
        .catch((e) =>
          (async function (e) {
            console.warn(
              "%cPOKI:%c failed request p4d info",
              "font-weight: bold",
              "",
              e
            );
            try {
              let { pathname: t } = window.location;
              "/" !== t[0] && (t = `/${t}`);
              const i = JSON.stringify({
                  c: "sdk-p4d-error",
                  ve: 7,
                  d: [
                    {
                      k: "error",
                      v: JSON.stringify({
                        status: e.status,
                        json: e.json && (await e.json()),
                        body: JSON.stringify({
                          href: `${window.location.protocol}//${window.location.host}${t}${window.location.search}`,
                        }),
                        name: e.name,
                        message: e.message,
                      }),
                    },
                  ],
                }),
                n = "https://t.poki.io/l";
              if (navigator.sendBeacon) navigator.sendBeacon(n, i);
              else
                try {
                  const e = new XMLHttpRequest();
                  e.open("POST", n, !0), e.send(i);
                } catch {}
            } catch {}
          })(e)
        );
    };
    async function Xo() {
      try {
        const e = { "Content-Type": "text/plain" },
          t = await ut(
            "https://geo.poki.io/",
            { method: "GET", headers: e },
            3e3
          ),
          { ISO: i, ccpaApplies: n } = await t.json();
        return { ISO: i, ccpaApplies: n };
      } catch (e) {
        return (
          console.warn(
            "%cPOKI:%c failed to fetch country info",
            "font-weight: bold",
            "",
            e
          ),
          { ISO: "ZZ", ccpaApplies: !1 }
        );
      }
    }
    async function Yo() {
      if ("test" === window?.process?.env?.NODE_ENV)
        return { blocklist: [], countryExclusion: [], bidderLimitation: {} };
      try {
        const e = { "Content-Type": "application/json" },
          t = await ut("https://api.poki.com/ads/settings", {
            method: "GET",
            headers: e,
          }),
          {
            blocklist: i,
            country_exclusion: n,
            bidder_limitation: o,
          } = await t.json(),
          a = JSON.parse(o) || {};
        return (
          S.country &&
            ((a[S.country] = a[S.country] || {}),
            (a[S.country].video = a[S.country].video || {}),
            (a[S.country].video.triplelift = 0.05)),
          {
            blocklist: i?.split(/[\r\n]+/) || [],
            countryExclusion: (n.split(",") || []).map((e) => e.toUpperCase()),
            bidderLimitation: a,
          }
        );
      } catch (e) {
        return (
          console.warn(
            "%cPOKI:%c failed to fetch ad settings",
            "font-weight: bold",
            "",
            e
          ),
          { blocklist: [], countryExclusion: [], bidderLimitation: {} }
        );
      }
    }
    class Jo {
      slotMap = new Map();
      totalRefreshNumber = {};
      static enforceFamilyFriendlyFlow() {
        window.googletag.cmd.push(() => {
          window.googletag
            .pubads()
            .setPrivacySettings({
              underAgeOfConsent: !0,
              childDirectedTreatment: !0,
              restrictDataProcessing: !0,
              nonPersonalizedAds: !0,
            });
        });
      }
      static enforceNonPersonalized() {
        window.googletag.cmd.push(() => {
          window.googletag
            .pubads()
            .setPrivacySettings({ nonPersonalizedAds: !0 });
        });
      }
      callOnCanDestroy(e) {
        const t = this.slotMap.get(e);
        t &&
          !t.onCanDestroyCalled &&
          t.onCanDestroy &&
          ((t.onCanDestroyCalled = !0), t.onCanDestroy());
      }
      setupSlotRenderEndedListener() {
        window.googletag.cmd.push(() => {
          window.googletag.pubads().addEventListener("slotRenderEnded", (t) => {
            const i = t.slot.getSlotElementId(),
              n = this.slotMap.get(i);
            if (!n || !n.gptSlot) return;
            let o = "",
              a = "",
              r = "",
              s = "",
              d = "",
              c = "",
              l = !1,
              p = {},
              A = "",
              u = "",
              m = "",
              g = !1;
            const h = t.slot;
            try {
              if (h) {
                const e = h?.getResponseInformation?.() || {};
                (o = e.isBackfill),
                  (a = e.lineItemId),
                  (r = e.campaignId),
                  (s = e.creativeId);
              }
              (p = n.pbjsTargetting || {}),
                (A = p.hb_bidder),
                (u = p.hb_adomain),
                (m = ((e) => {
                  let t = { cpm: 0 };
                  if (void 0 === window.pbjs || !Eo()) return t;
                  const i = window.pbjs.getAllWinningBids() || [];
                  return (
                    (
                      window.pbjs.getBidResponsesForAdUnitCode(e)?.bids || []
                    ).forEach((e) => {
                      !i.find((t) => t.adId === e.adId) &&
                        e.cpm > t.cpm &&
                        (t = e);
                    }),
                    t
                  );
                })(n.adUnitPath)),
                (g = t.isEmpty);
            } catch (e) {
              console.warn(
                "%cPOKI:%c error in slotRenderEnded",
                "font-weight: bold",
                "",
                e
              );
            }
            try {
              h &&
                ((d = h?.getHtml?.() || ""),
                (c = (function (e) {
                  if (!e || "function" != typeof e.indexOf) return null;
                  if (-1 !== e.indexOf("amazon-adsystem.com/aax2/apstag"))
                    return null;
                  const t = new RegExp(
                      '(?:(?:pbjs\\.renderAd\\(document,|adId:*|hb_adid":\\[)|(?:pbadid=)|(?:adId=))[\'"](.*?)["\']',
                      "gi"
                    ),
                    i = e.replace(/ /g, ""),
                    n = t.exec(i);
                  return (n && n[1]) || null;
                })(d)),
                (l = !!c));
            } catch (e) {
              console.warn(
                "%cPOKI:%c error in slotRenderEnded",
                "font-weight: bold",
                "",
                e
              );
            }
            let w = parseFloat(p.hb_pb);
            Number.isNaN(w) && (w = void 0);
            const v = {
              size: n.size,
              opportunityId: n.opportunityId,
              refresh: n.refreshNumber > 0,
              refreshNumber: n.refreshNumber,
              refreshType: n.criteria?.refreshType || "",
              duringGameplay: n.duringGameplay,
              adUnitPath: n.adUnitPath,
              prebidBid: w,
              prebidBidder: A,
              prebidWon: l,
              prebidSecondBid: m.cpm > 0 ? m.cpm : void 0,
              prebidSecondBidder: m.bidder,
              dfpIsBackfill: o,
              dfpLineItemId: a,
              dfpCampaignId: r,
              dfpCreativeId: s,
              isEmpty: g,
              adDomain: u,
              platformAd: n.platformAd,
              blocked: bn(),
            };
            if (g) {
              this.callOnCanDestroy(n.id);
              try {
                const t =
                  window?.pbjs?.getHighestUnusedBidResponseForAdUnitCode?.(
                    n.adUnitPath
                  );
                t &&
                  Ki.track(e.tracking.ads.display.notFilled, {
                    bidder: t.bidder,
                    cpm: t.cpm,
                    adUnitPath: n.adUnitPath,
                    opportunityId: n.opportunityId,
                  });
              } catch {}
            }
            g && n.backfillHouseads
              ? this.requestHouseAd(n, v)
              : (n.onDisplayRendered && n.onDisplayRendered(g),
                Ki.track(e.tracking.ads.display.impression, v));
          }),
            window.googletag
              .pubads()
              .addEventListener("impressionViewable", (t) => {
                const i = t.slot.getSlotElementId();
                (t?.slot?.getAdUnitPath()?.includes("ingame_rewarded_google") ||
                  t?.slot?.getAdUnitPath()?.includes("sanghan_rweb_ad_unit")) &&
                  Ki.track(e.tracking.ads.rewardedWeb.impression),
                  setTimeout(() => {
                    this.callOnCanDestroy(i);
                  }, 1e3 * Math.random());
              });
        });
      }
      validateDisplaySettings(e) {
        const t = ["970x250", "300x250", "728x90", "160x600", "320x50"],
          i = ["300x600"];
        return S.isPokiExternal
          ? i.includes(e)
          : v() || f()
          ? ["320x50"].includes(e)
          : t.includes(e);
      }
      getDisplaySlotConfig(e, t, i) {
        const n = t.split("x").map((e) => parseInt(e, 10)),
          o = this.getDisplaySlotID(e);
        if (o) {
          const t = this.slotMap.get(o);
          if (t && t.width === n[0] && t.height === n[1])
            return t.refreshNumber++, t;
          this.clearAd(e);
        }
        let a = (function (e) {
          let t = `/21682198607/debug-display/debug-display-${e}`;
          return (
            C.debug ||
              (t = S.isPokiIframe
                ? `/21682198607/${S.device}_ingame_${e}/${S.siteID}_${S.device}_ingame_${e}`
                : S.isPokiExternal
                ? `/21682198607/external_${S.device}_display_platform`
                : `/21682198607/external_${S.device}_display_ingame/external_${S.device}_ingame_${e}`),
            t
          );
        })(t);
        i && (a = i);
        const r = `poki-${$()}`,
          s = document.createElement("div");
        return (
          (s.id = r),
          (s.className = "poki-ad-slot"),
          (s.style.width = `${n[0]}px`),
          (s.style.height = `${n[1]}px`),
          (s.style.overflow = "hidden"),
          (s.style.position = "relative"),
          s.setAttribute("data-poki-ad-size", t),
          {
            id: r,
            adUnitPath: a,
            size: t,
            width: n[0],
            height: n[1],
            refreshNumber: 0,
            onCanDestroyCalled: !1,
            backfillHouseads: !1,
            innerAdContainer: s,
            platformAd: !1,
            criteria: {},
          }
        );
      }
      renderAd(e) {
        const {
            container: t,
            size: i,
            opportunityId: n,
            criteria: o = {},
            adUnitPath: a = "",
            duringGameplay: r = !1,
            onCanDestroy: s = () => {},
            onDisplayRendered: d = () => {},
            backfillHouseads: c = !1,
            platformAd: l = !1,
            headerBiddingAllowed: p = !0,
          } = e,
          A = this.getDisplaySlotConfig(t, i, a);
        (A.backfillHouseads = c),
          (A.criteria = o),
          (A.platformAd = l),
          this.slotMap.set(A.id, A),
          (A.opportunityId = n),
          (A.headerBiddingAllowed = p),
          (A.duringGameplay = "function" == typeof r ? r() : r),
          (A.onDisplayRendered = d),
          (A.onCanDestroy = s);
        let u = null;
        A.refreshNumber > 0 && (u = A.innerAdContainer),
          u ||
            (t.appendChild(A.innerAdContainer),
            t.setAttribute("data-poki-ad-id", A.id));
        const m = () => {
          setTimeout(() => {
            this.callOnCanDestroy(A.id);
          }, 6e3),
            C.debug || S.houseAdsOnly
              ? this.requestHouseAd(A, {
                  opportunityId: A.opportunityId,
                  refresh: A.refreshNumber > 0,
                  refreshNumber: A.refreshNumber,
                  refreshType: A.criteria?.refreshType || "",
                  duringGameplay: A.duringGameplay,
                  adUnitPath: A.adUnitPath,
                  platformAd: A.platformAd,
                })
              : window.googletag.cmd.push(() => {
                  const e = this.slotMap.get(A.id);
                  e &&
                    e.opportunityId === n &&
                    (this.totalRefreshNumber[A.adUnitPath] ||
                      (this.totalRefreshNumber[A.adUnitPath] = 0),
                    this.setupGPT(A, {
                      ...o,
                      refresh_number: `${A.refreshNumber || 0}`,
                      total_refresh_number: `${
                        this.totalRefreshNumber[A.adUnitPath]
                      }`,
                    }),
                    this.totalRefreshNumber[A.adUnitPath]++,
                    this.requestAd(A));
                });
        };
        A.intersectionObserver?.disconnect();
        a.includes("mobile_gamebar_320x50")
          ? m()
          : ((A.intersectionObserver = new window.IntersectionObserver(
              ([e]) => {
                e.isIntersecting && (A.intersectionObserver?.disconnect(), m());
              },
              { threshold: 0.5 }
            )),
            A.intersectionObserver.observe(A.innerAdContainer));
      }
      setupGPT(e, t) {
        e.gptSlot ||
          (160 === e.width && 600 === e.height
            ? (e.gptSlot = window.googletag
                .defineSlot(e.adUnitPath, [[e.width, e.height], "fluid"], e.id)
                .addService(window.googletag.pubads()))
            : 300 === e.width && 600 === e.height
            ? (e.gptSlot = window.googletag
                .defineSlot(
                  e.adUnitPath,
                  [
                    [300, 600],
                    [160, 600],
                    [120, 600],
                    [300, 250],
                    [300, 300],
                    [250, 250],
                    [240, 400],
                    [250, 360],
                    [300, 50],
                    [120, 240],
                  ],
                  e.id
                )
                .addService(window.googletag.pubads()))
            : (e.gptSlot = window.googletag
                .defineSlot(e.adUnitPath, [e.width, e.height], e.id)
                .addService(window.googletag.pubads()))),
          window.googletag.enableServices(),
          e.gptSlot?.clearTargeting(),
          Object.keys(t).forEach((i) => {
            const n = t[i];
            n && e.gptSlot?.setTargeting(i, n);
          });
      }
      requestAd = (t) => {
        Ki.track(e.tracking.ads.display.requested, {
          size: t.size,
          opportunityId: t.opportunityId,
          adUnitPath: t.adUnitPath,
          duringGameplay: t.duringGameplay,
          refresh: t.refreshNumber > 0,
          refreshNumber: t.refreshNumber,
          refreshType: t.criteria?.refreshType || "",
          platformAd: t.platformAd,
          headerBiddingAllowed: t.headerBiddingAllowed,
        });
        let i = 0;
        const n = () => {
          if ((i--, !(i > 0))) {
            if (t.headerBiddingAllowed && So())
              try {
                window.apstag.setDisplayBids();
              } catch {}
            if (t.headerBiddingAllowed && Eo())
              try {
                window.pbjs.setTargetingForGPTAsync([t.adUnitPath]),
                  (t.pbjsTargetting =
                    window.pbjs.getAdserverTargetingForAdUnitCode([
                      t.adUnitPath,
                    ]));
              } catch {}
            window?.assertive?.setFloors?.([t.gptSlot]),
              t.refreshNumber > 0
                ? window.googletag.pubads().refresh([t.gptSlot])
                : window.googletag.display(t.id);
          }
        };
        if (t.headerBiddingAllowed) {
          if ((So() && i++, Eo() && i++, So()))
            try {
              let e = [
                {
                  slotName: t.adUnitPath,
                  slotID: t.id,
                  sizes: [[t.width, t.height]],
                },
              ];
              ro() && (e = window?.assertive?.addAmazonFloors?.(e)),
                window.apstag.fetchBids({ slots: e, timeout: 1500 }, () => {
                  n();
                });
            } catch {
              n();
            }
          if (Eo())
            try {
              window.pbjs.requestBids({
                adUnitCodes: [t.adUnitPath],
                bidsBackHandler: () => {
                  n();
                },
              });
            } catch {
              n();
            }
          So() || Eo() || n();
        } else n();
      };
      clearAd(t) {
        const i = this.getDisplaySlotID(t);
        if (!i)
          return void console.error(
            "%cPOKI:%c PokiSDK.destroyAd() called on a container without ad",
            "font-weight: bold",
            ""
          );
        const n = this.slotMap.get(i) || null;
        if (n) {
          for (
            n.onCanDestroy &&
              !n.onCanDestroyCalled &&
              gi("PokiSDK.destroyAd() called without waiting for onCanDestroy"),
              Ki.track(e.tracking.screen.destroyAd, {
                opportunityId: n.opportunityId,
                okToDestroy: n.onCanDestroyCalled,
                platformAd: n.platformAd,
              }),
              n.intersectionObserver?.disconnect(),
              n.gptSlot && googletag?.destroySlots?.([n.gptSlot]);
            t.lastChild;

          )
            t.removeChild(t.lastChild);
          t.removeAttribute("data-poki-ad-id"), this.slotMap.delete(n.id);
        }
      }
      getDisplaySlotID(e) {
        if (!e) return null;
        const t = e.getAttribute("data-poki-ad-id");
        return t || null;
      }
      requestHouseAd = (t, i) => {
        let n = `${t.width}x${t.height}`;
        "300x600" === n && (n = "160x600");
        const o = {
          ...i,
          dfpIsBackfill: void 0,
          dfpLineItemId: void 0,
          dfpCampaignId: void 0,
          size: n,
          bidder: "poki",
          bid: 0,
        };
        D({ ...o, event: "request" }),
          ut(`https://api.poki.com/ads/houseads/display/${n}`)
            .then((e) => e.json())
            .then((n) => {
              const a = `<img draggable="false" src="${n.asset}" alt="house ad" style="display:block; margin:0 auto;" />`;
              let r = a;
              S.isPokiExternal &&
                n.click_through_url &&
                (r = `<a href="${n.click_through_url}" target="_blank" rel="noopener noreferrer">${a}</a>`),
                (t.innerAdContainer.innerHTML = r),
                t.onDisplayRendered && t.onDisplayRendered(!0),
                (i.houseAdId = n.id),
                (i.isEmpty = !1),
                Ki.track(e.tracking.ads.display.impression, i),
                D({ ...o, event: "impression" }),
                setTimeout(() => {
                  D({ ...o, event: "viewable" });
                }, 1e3);
            })
            .catch(() => {
              t.onDisplayRendered && t.onDisplayRendered(!0);
            });
      };
    }
    class ea extends Jo {
      requestAd = (e) => {
        D({
          event: "request",
          size: e.size,
          opportunityId: e.opportunityId,
          adUnitPath: e.adUnitPath,
        });
        let t = 0;
        const i = () => {
          t--, t > 0 || this.allBidsBack(e.id);
        };
        if ((So() && t++, Eo() && t++, So()))
          try {
            let t = [
              {
                slotName: e.adUnitPath,
                slotID: e.id,
                sizes: [[e.width, e.height]],
              },
            ];
            ro() && (t = window?.assertive?.addAmazonFloors?.(t)),
              window.apstag.fetchBids({ slots: t, timeout: 1500 }, (t) => {
                t && t.length > 0 && (e.amznTargetting = t[0]), i();
              });
          } catch {
            i();
          }
        if (Eo())
          try {
            window.pbjs.requestBids({
              adUnitCodes: [e.adUnitPath],
              bidsBackHandler: () => {
                (e.pbjsTargetting =
                  window.pbjs.getAdserverTargetingForAdUnitCode([
                    e.adUnitPath,
                  ])),
                  i();
              },
            });
          } catch {
            i();
          }
        So() || Eo() || ((e.pbjsTargetting = {}), (e.amznTargetting = {}), i());
      };
      allBidsBack(t) {
        const i = this.slotMap.get(t);
        if (!i) return;
        const n = document.createElement("iframe");
        n.setAttribute("frameborder", "0"),
          n.setAttribute("scrolling", "no"),
          n.setAttribute("marginheight", "0"),
          n.setAttribute("marginwidth", "0"),
          n.setAttribute("topmargin", "0"),
          n.setAttribute("leftmargin", "0"),
          n.setAttribute("allowtransparency", "true"),
          n.setAttribute("width", `${i.width}`),
          n.setAttribute("height", `${i.height}`);
        const o = document.getElementById(i.id);
        if (!o)
          return void console.error(
            "%cPOKI:%c display error - container not found",
            "font-weight: bold",
            "",
            t
          );
        o.appendChild(n);
        const a = n?.contentWindow?.document;
        if (!a)
          return (
            console.error(
              "%cPOKI:%c display error - iframe injection for ad failed",
              "font-weight: bold",
              "",
              t
            ),
            void this.clearAd(o.parentNode)
          );
        let r = !0,
          s = i.pbjsTargetting.hb_bidder,
          d = parseFloat(i.pbjsTargetting.hb_pb);
        Number.isNaN(d) && (d = 0);
        const c = ((l = i?.amznTargetting?.amznbid), mn[l] || 0);
        var l;
        c > d
          ? ((s = hn(i?.amznTargetting?.amnzp)),
            (d = c),
            (r = !1),
            this.renderAMZNAd(i.id, o, a))
          : this.renderPrebidAd(i.id, o, a);
        const p = !s;
        Ki.track(e.tracking.ads.display.impression, {
          size: i.size,
          opportunityId: i.opportunityId,
          duringGameplay: i.duringGameplay,
          adUnitPath: i.adUnitPath,
          prebidBid: d,
          prebidBidder: s,
          preBidWon: r,
          dfpIsBackfill: !1,
          dfpLineItemId: void 0,
          dfpCampaignId: void 0,
          adDomain: i.pbjsTargetting.hb_adomain,
          isEmpty: p,
        }),
          D({
            event: "impression",
            size: i.size,
            opportunityId: i.opportunityId,
            adUnitPath: i.adUnitPath,
            bidder: s,
            bid: d,
          }),
          i.onDisplayRendered && i.onDisplayRendered(p),
          p
            ? this.callOnCanDestroy(i.id)
            : ((i.intersectionObserver = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    const { isIntersecting: t } = e;
                    t
                      ? i.intersectingTimer ||
                        (i.intersectingTimer = setTimeout(() => {
                          i.intersectionObserver?.unobserve(e.target),
                            D({
                              event: "viewable",
                              size: i.size,
                              opportunityId: i.opportunityId,
                              adUnitPath: i.adUnitPath,
                              bidder: s,
                              bid: d,
                            }),
                            this.callOnCanDestroy(i.id);
                        }, 1e3))
                      : i.intersectingTimer &&
                        (clearTimeout(i.intersectingTimer),
                        (i.intersectingTimer = void 0));
                  });
                },
                { threshold: 0.5 }
              )),
              i.intersectionObserver.observe(o));
      }
      renderPrebidAd(e, t, i) {
        const n = this.slotMap.get(e);
        if (n)
          return n.pbjsTargetting.hb_adid
            ? void window.pbjs.renderAd(i, n.pbjsTargetting.hb_adid)
            : (console.warn(
                "%cPOKI:%c display error - prebid nothing to render",
                "font-weight: bold",
                "",
                e,
                n.pbjsTargetting
              ),
              void this.clearAd(t.parentNode));
      }
      renderAMZNAd(e, t, i) {
        const n = this.slotMap.get(e);
        if (n)
          return n?.amznTargetting?.amzniid
            ? void window.apstag.renderImp(i, n?.amznTargetting?.amzniid)
            : (console.warn(
                "%cPOKI:%c display error - amazon nothing to render",
                "font-weight: bold",
                "",
                e,
                n.pbjsTargetting
              ),
              void this.clearAd(t.parentNode));
      }
      setupGPT = (e, t) => {};
      setupSlotRenderEndedListener = () => {};
    }
    i(871);
    const ta = new ln(cn.adTiming);
    const ia = new ki(
      new (class {
        #C;
        #de = !1;
        #ce = {
          [e.ads.position.preroll]: 0,
          [e.ads.position.midroll]: 0,
          [e.ads.position.rewarded]: 0,
        };
        #le = {
          [e.ads.position.preroll]: 0,
          [e.ads.position.midroll]: 0,
          [e.ads.position.rewarded]: 0,
        };
        #B = {};
        #pe = {};
        #Ae = null;
        #ue;
        #me = !1;
        #ge;
        #he = !1;
        #we = !1;
        #ve = {};
        #fe = { blocklist: [], countryExclusion: [], bidderLimitation: {} };
        #be = !1;
        #ye;
        #ke;
        #_e = !1;
        #xe = !1;
        #Ie = !1;
        #Se = !1;
        #Ee = !1;
        #Ce = !1;
        #Pe = !1;
        display;
        constructor() {
          (window.googletag = window.googletag || { cmd: [] }),
            (window.pbjs = window.pbjs || { que: [] }),
            (this.display = Mo() ? new ea() : new Jo());
        }
        init(e = {}) {
          if ("undefined" == typeof window) return;
          const { onReady: t = null } = e;
          if (((this.#ve = e), t && this.#Be("onReady", t), !this.#me))
            return (
              this.#Ae ||
                ((e.strictConsentMode || S.gdprApplies) && (this.#Se = !0),
                (this.#Ae = this.#Te())),
              this.#Ae
            );
          console.error(
            "%cPOKI:%c SDK has already been initialized",
            "font-weight: bold",
            ""
          );
        }
        startLoadingMonetizationCore = () => this.loadMonetizationCore();
        configureA9 = (e) => Co(e, this.#fe.bidderLimitation);
        #Te() {
          const { debug: t, logging: i, wrapper: n } = this.#ve;
          C.init(t, i),
            C.debug && K(),
            this.#De(),
            Ki.setupDefaultEvents(),
            Xi(),
            (this.#ue = new Ko({ wrapper: n })),
            window.addEventListener(
              "resize",
              this.resizeVideoAd.bind(this),
              !1
            );
          let o = Zo;
          (C.debug || S.isPlayground) && (o = () => Promise.resolve());
          const a =
            void 0 !== this.#ve.isCCPA ? this.#ve.isCCPA : S.ccpaApplies;
          let r = Xo;
          const s = (this.#ve.country || S.country).toUpperCase();
          s &&
            void 0 !== a &&
            (r = () => Promise.resolve({ ISO: s, ccpaApplies: a }));
          const d = [...[o(), r()], Yo()];
          return Promise.allSettled(d)
            .then((t) => {
              try {
                const [n, o, r] = t;
                if ("fulfilled" === n.status) {
                  const e = n.value;
                  if (e) {
                    S.gameID || I("gameID", e.gameID),
                      e.cachedContentGameID &&
                        I("contentGameID", e.cachedContentGameID),
                      this.setAdTimings(e.adTiming),
                      (this.#ye = e.specialConditions);
                    try {
                      Vi(e);
                    } catch (e) {
                      console.warn(
                        "%cPOKI:%c error in maybeStartPlaytest",
                        "font-weight: bold",
                        "",
                        e
                      );
                    }
                  }
                  if (
                    !(
                      (e && e.gameID) ||
                      C.debug ||
                      window?.isPokiPlayground ||
                      S.isPokiExternal ||
                      "test" === window?.process?.env?.NODE_ENV
                    )
                  ) {
                    const e =
                        "background-color: red; border-radius: 3px; color: white; padding: 1px 5px",
                      t = [
                        "Possible Unauthorized Game Hosting Detected❗",
                        "We've noticed that this game, which is part of Poki, is being played on a site that isn't currently allowed.",
                        "If you're a developer who is hosting this game on your site, no worries! Please reach out to us to get your domain approved and we'll hook you up.",
                        "However, if you are hosting this game without proper authorization, be advised: this is a violation of our terms and infringes upon copyright laws. Consider this message as a formal Digital Millennium Copyright Act (DMCA) Takedown Notice. Please remove the game from your site immediately to avoid further action.",
                      ];
                    console.error("%cALERT", e, t.join("\n\n"));
                  }
                }
                let d = { ISO: "ZZ", ccpaApplies: !1 };
                if (
                  ("fulfilled" === o.status && (d = o.value),
                  I("country", (s || d?.ISO || "ZZ").toUpperCase()),
                  I("gdprApplies", h(S.country)),
                  I("ccpaApplies", void 0 === a ? d?.ccpaApplies || !1 : a),
                  S.gdprApplies && (this.#Se = !0),
                  rn(),
                  "fulfilled" === r.status)
                ) {
                  const e = r.value;
                  e && (this.#fe = e);
                }
                (i = this.#fe.blocklist),
                  (vn = i || []),
                  this.#Se && T.dispatchEvent(e.ready),
                  S.isPlayground ||
                    S.isPokiExternal ||
                    this.loadMonetizationCore();
              } catch (t) {
                T.dispatchEvent(e.failed, { message: `${t}` });
              }
              var i;
            })
            .catch((t) => {
              T.dispatchEvent(e.failed, { message: `${t}` });
            });
        }
        async loadMonetizationCore() {
          const {
            prebid: t = {},
            a9Signals: i = {},
            volume: n = 1,
            waterfallRetries: o,
            displayOnly: a = !1,
          } = this.#ve;
          let { nonPersonalized: r = !1, familyFriendly: s = !1 } = {
            ...this.#ve,
          };
          if (S.isInspector) return void (this.#Se || T.dispatchEvent(e.ready));
          (r = r || !!S.nonPersonalized),
            (s = s || !!S.familyFriendly),
            I("nonPersonalized", r),
            I("familyFriendly", s);
          const d = [];
          return (
            (this.#Ie = a),
            this.#Se &&
              !S.familyFriendly &&
              (await new Promise((e) => {
                (S.gdprApplies && !C.debug) || e();
                let t = 0;
                const i = () => {
                  if (!en) return t++, void setTimeout(i, 50 * t);
                  window.__tcfapi("addEventListener", 2, (t, i) => {
                    i &&
                      ["tcloaded", "useractioncomplete"].includes(
                        t.eventStatus
                      ) &&
                      t?.purpose?.consents?.[1] &&
                      (t.listenerId &&
                        window.__tcfapi(
                          "removeEventListener",
                          2,
                          () => {},
                          t.listenerId
                        ),
                      e());
                  });
                };
                i();
              })),
            d.push(qi("https://securepubads.g.doubleclick.net/tag/js/gpt.js")),
            a
              ? d.push(Promise.resolve())
              : d.push(
                  qi("https://imasdk.googleapis.com/js/sdkloader/ima3.js")
                ),
            S.familyFriendly || S.nonPersonalized
              ? (d.push(
                  Promise.resolve(),
                  Promise.resolve(),
                  Promise.resolve()
                ),
                S.familyFriendly && Jo.enforceFamilyFriendlyFlow(),
                I("nonPersonalized", !0),
                Jo.enforceNonPersonalized())
              : d.push(
                  so(),
                  qi("https://a.poki-cdn.com/prebid/prebid_1750427869.js"),
                  qi("https://c.amazon-adsystem.com/aax2/apstag.js")
                ),
            this.display.setupSlotRenderEndedListener(),
            Promise.allSettled(d)
              .then((r) => {
                try {
                  const [s, d, c, l, p] = r;
                  "rejected" === s.status && (this.#Ce = !0),
                    "rejected" === c.status &&
                      Ki.track(e.tracking.ads.ay.failed, {
                        reason: O(c.reason),
                        ayMode: S.AYMode,
                        gptRejected: "rejected" === s.status,
                        imaRejected: "rejected" === d.status,
                        prebidRejected: "rejected" === l.status,
                        a9Rejected: "rejected" === p.status,
                        displayOnly: a,
                        fullStack:
                          S.familyFriendly || S.nonPersonalized ? 0 : 1,
                      }),
                    Po(t, this.#fe.bidderLimitation),
                    Co(i, this.#fe.bidderLimitation),
                    window.googletag.cmd.push(() => {
                      googletag
                        .pubads()
                        .addEventListener("rewardedSlotReady", (t) => {
                          Ki.track(e.tracking.ads.rewardedWeb.ready),
                            t.makeRewardedVisible();
                        }),
                        googletag
                          .pubads()
                          .addEventListener("rewardedSlotGranted", () => {
                            Oo = !0;
                          }),
                        googletag
                          .pubads()
                          .addEventListener("rewardedSlotClosed", () => {
                            Oo
                              ? Ki.track(
                                  e.tracking.ads.rewardedWeb.closedGranted
                                )
                              : Ki.track(
                                  e.tracking.ads.rewardedWeb.closedDeclined
                                ),
                              window?.location
                                ?.toString()
                                ?.includes("#goog_rewarded") &&
                                window?.history?.go(-1),
                              T.dispatchEvent(e.ads.completed, {
                                rewardAllowed: Oo,
                              });
                          }),
                        googletag
                          .pubads()
                          .addEventListener("slotRenderEnded", (t) => {
                            zo() === t?.slot?.getAdUnitPath() &&
                              t.isEmpty &&
                              (Ki.track(e.tracking.ads.rewardedWeb.empty),
                              T.dispatchEvent(e.ads.video.startHouseAdFlow));
                          }),
                        googletag
                          .pubads()
                          .addEventListener("slotRequested", (t) => {
                            t ||
                              (Ki.track(e.tracking.ads.rewardedWeb.empty),
                              T.dispatchEvent(e.ads.video.startHouseAdFlow));
                          });
                    }),
                    "rejected" === d.status && (this.#Pe = !0);
                  const A = { ...cn };
                  C.debug &&
                    ((A.adTiming.startAdsAfter = 0),
                    this.setAdTimings(A.adTiming));
                  const u = S.forceAd;
                  if (
                    (u &&
                      (this.setAdTimings({
                        preroll: !0,
                        timeBetweenAds: 12e4,
                        timePerTry: 7e3,
                        startAdsAfter: 0,
                      }),
                      (A.customCriteria = {
                        ...A.customCriteria,
                        force_ad: u,
                      })),
                    (this.#B = { ...A.customCriteria, ay_mode: S.AYMode }),
                    (this.#C = new $o(n)),
                    this.#ue.setupEvents(this),
                    this.#we && ta.startStartAdsAfterTimer(),
                    (this.#ge = new Go(this.#C, {
                      timing: ta,
                      totalRetries: o,
                    })),
                    (this.#Ee = !0),
                    this.#Ce && this.#Pe)
                  )
                    return void T.dispatchEvent(e.failed, {
                      message: "Both core sdks failed to boot",
                    });
                  this.#Se || T.dispatchEvent(e.ready);
                } catch (t) {
                  T.dispatchEvent(e.failed, { message: `${t}` });
                }
              })
              .catch((t) => {
                console.warn("%cPOKI:%c", "font-weight: bold", "", t),
                  T.dispatchEvent(e.failed, { message: `${t}` });
              })
          );
        }
        requestAd(t = {}) {
          const {
              autoStart: i = !0,
              onFinish: n = null,
              onStart: o = null,
              position: a = null,
            } = t,
            r = T.getVideoDataAnnotations();
          if (
            (Ki.track(
              a === e.ads.position.rewarded
                ? e.tracking.screen.rewardedBreak
                : e.tracking.screen.commercialBreak,
              r
            ),
            this.#be)
          ) {
            if (n)
              try {
                n({ type: e.ads.busy, rewardAllowed: !1 });
              } catch (e) {
                mi("error in onFinish callback", e);
              }
            return;
          }
          if (
            ((this.#be = !0),
            (this.#de = !1 !== i),
            this.#Be("onFinish", (e) => {
              if ((o && this.#Me("onStart"), n)) {
                this.#Me("onFinish");
                try {
                  n(e);
                } catch (e) {
                  mi("error in onFinish callback", e);
                }
              }
            }),
            this.#Be("onFinish", (t) => {
              if ((T.dispatchEvent(e.playtest.stopVideo), n))
                try {
                  n(t);
                } catch (e) {
                  mi("error in onFinish callback", e);
                }
            }),
            this.#Be("onStart", (t) => {
              T.dispatchEvent(e.playtest.startVideo, { position: a }),
                o && o(t);
            }),
            null === a || !m(a, e.ads.position))
          )
            return (
              gi(`invalid position: ${a}`), void T.dispatchEvent(e.ads.error, r)
            );
          if (this.#Ie)
            return (
              mi("Display only mode, no video ads available"),
              void T.dispatchEvent(e.ads.error, r)
            );
          if (!this.#me)
            return (
              gi("Requesting ad before PokiSDK.init() is done"),
              T.dispatchEvent(e.ads.error, r),
              void this.#Le()
            );
          if (this.#C?.isAdRunning?.() || this.#ge?.isRunning?.())
            return (
              gi("a video ad is already running"),
              void T.dispatchEvent(e.ads.busy, r)
            );
          if (a === e.ads.position.preroll && !ta.prerollPossible())
            return (
              ui("commercialBreak not possible before gameplayStart"),
              void T.dispatchEvent(e.ads.limit, {
                ...r,
                reason: e.info.messages.prerollLimit,
              })
            );
          if (a !== e.ads.position.rewarded && !ta.requestPossible())
            return (
              ui("commercialBreak too soon after previous one"),
              void T.dispatchEvent(e.ads.limit, {
                ...r,
                reason: e.info.messages.timeLimit,
              })
            );
          if (
            a !== e.ads.position.rewarded &&
            this.#fe.countryExclusion.includes(S.country)
          )
            return (
              ui(`commercialBreak is disabled in this country: ${S.country}`),
              void T.dispatchEvent(e.ads.limit, {
                ...r,
                reason: e.info.messages.disabled,
              })
            );
          if (S.kioskMode)
            return a === e.ads.position.rewarded
              ? void this.#Oe()
              : void T.dispatchEvent(e.ads.limit, {
                  ...r,
                  reason: e.info.messages.disabled,
                });
          if (this.#Se && !this.#Ee)
            return a === e.ads.position.rewarded || C.debug
              ? void this.#Oe()
              : (ui("commercialBreak not possible before consent"),
                void T.dispatchEvent(e.ads.error, r));
          if (!this.#C || this.#xe || this.#Pe)
            return void (a === e.ads.position.rewarded
              ? this.#Oe()
              : T.dispatchEvent(e.ads.error, r));
          if (sn())
            return (
              gi("No TCFv2 CMP detected!"), void T.dispatchEvent(e.ads.error, r)
            );
          if (dn())
            return gi("No USP detected!"), void T.dispatchEvent(e.ads.error, r);
          if (this.#_e) return void T.dispatchEvent(e.ads.ready, r);
          const s = {
            ...this.#Ne(),
            ...this.#B,
            position: a,
            ab: Math.floor(100 * Math.random()).toString(),
            refresh_number: this.#ce[a],
            total_refresh_number: this.#le[a],
          };
          this.#ce[a]++,
            this.#le[a]++,
            this.#ue.show(),
            this.resizeVideoAd(),
            this.#ge.start(s, a);
        }
        displayAd(e) {
          const { container: t, size: i } = e;
          return (
            (e.criteria = {
              ab: Math.floor(100 * Math.random()).toString(),
              ...this.#Ne(),
              ...this.#B,
              ...(e.criteria || {}),
            }),
            e.platformAd &&
              (delete e.criteria.p4d_game_id_cond,
              delete e.criteria.p4d_game_id),
            !S.kioskMode &&
              (C.debug
                ? (this.display.renderAd(e), !0)
                : this.#Se && !this.#Ee
                ? (gi("Ad libraries not yet loaded"), !1)
                : this.#Ce
                ? (gi("Bot, IMA or Adblocker error"), !1)
                : sn()
                ? (gi(
                    "No TCFv2 CMP detected, please contact developersupport@poki.com for more information"
                  ),
                  !1)
                : dn()
                ? (gi(
                    "No USP detected, please contact developersupport@poki.com for more information"
                  ),
                  !1)
                : i
                ? this.#me
                  ? t
                    ? void 0 === window.googletag
                      ? (gi("googletag not defined"), !1)
                      : this.#fe.countryExclusion.includes(S.country)
                      ? (gi("Country is excluded from ads"), !1)
                      : this.display.validateDisplaySettings(i)
                      ? (this.display.renderAd(e), !0)
                      : (gi(
                          `Display size ${i} is not supported on this device`
                        ),
                        !1)
                    : (gi("Provided container does not exist"), !1)
                  : (gi("Requesting ad on unbooted SDK"), this.#Le(), !1)
                : (gi(
                    "No ad size given, usage: displayAd(<container>, <size>)"
                  ),
                  !1))
          );
        }
        destroyAd(e) {
          this.#fe.countryExclusion.includes(S.country) ||
            ((e = e || document.body), this.display.clearAd(e));
        }
        startStartAdsAfterTimer() {
          this.#Le() ? (this.#we = !0) : ta.startStartAdsAfterTimer();
        }
        muteAd() {
          this.#Le() || this.#C.muteAd();
        }
        isAdBlocked = () => !1;
        setVolume(e) {
          this.#Le() || this.#C?.setVolume(e);
        }
        forcePreroll() {
          if (this.#Le()) return;
          const t = ta.prerollPossible;
          (ta.prerollPossible = () => !0),
            this.requestAd({ position: e.ads.position.preroll }),
            (ta.prerollPossible = t);
        }
        resumeAd() {
          this.#Le() || (this.#ue.hidePauseButton(), this.#C.resumeAd());
        }
        startAdClicked() {
          this.#Le() ||
            (vt() &&
              this.#he &&
              ((this.#he = !1),
              this.#ue.hideStartAdButton(),
              this.#C.startIOSPlayback()));
        }
        stopVideoAd() {
          this.#ue.hide(),
            T.dispatchEvent(e.ads.stopped),
            this.#Le() ||
              (this.#ge.stopWaterfall(),
              this.#C.stopPlayback(),
              Lo && googletag.destroySlots([Lo]));
        }
        resizeVideoAd() {
          if (!this.#C) return;
          const e = this.#ue.getVideoBounds();
          if (0 === e.width || 0 === e.height)
            return (
              this.#ke && clearTimeout(this.#ke),
              void (this.#ke = setTimeout(() => {
                this.resizeVideoAd();
              }, 100))
            );
          this.#C.resize(e.width, e.height);
        }
        setAdTimings(t = {}) {
          (this.#ce = {
            [e.ads.position.preroll]: 0,
            [e.ads.position.midroll]: 0,
            [e.ads.position.rewarded]: 0,
          }),
            ta.setTimings(t),
            ta.resetAll();
        }
        setSpecialConditions(e) {
          this.#ye = e || [];
        }
        #Re() {
          if (!this.#Le())
            if (this.#_e)
              try {
                this.resizeVideoAd(),
                  this.#C.startPlayback() || this.stopVideoAd();
              } catch {
                T.dispatchEvent(e.ads.error, {});
              }
            else T.dispatchEvent(e.ads.error, {});
        }
        #Be(e, t) {
          this.#pe[e] = t;
        }
        #ze(e, t = void 0) {
          "function" == typeof this.#pe[e] && this.#pe[e](t);
        }
        #De() {
          T.addEventListener(e.ready, () => {
            (this.#me = !0), this.setVolume(0.6), this.#ze("onReady");
          }),
            T.addEventListener(e.failed, () => {
              (this.#me = !0), (this.#xe = !0);
            }),
            T.addEventListener(e.ads.ready, () => {
              (this.#_e = !0), this.#de && this.#Re();
            }),
            T.addEventListener(e.ads.started, () => {
              this.#ue.hideSpinner(),
                this.#ze("onStart", { type: e.ads.limit });
            }),
            T.addEventListener(e.ads.video.paused, () => {
              this.#ue.showPauseButton();
            }),
            T.addEventListener(e.ads.video.error, () => {
              const t = T.getVideoDataAnnotations();
              var i;
              t?.HBVastUrl &&
                ((i = t?.HBVastUrl),
                qi("https://a.poki.com/ads/vast-client-2.js", !0)
                  .then(() => {
                    if (window.VASTClient)
                      try {
                        const t = [],
                          n = new window.VASTClient();
                        n.getParser().on("VAST-resolved", (e) => {
                          t.push(e);
                        }),
                          n
                            .get(i)
                            .then(() => {
                              T.dispatchEvent(e.ads.extendedVideoError, {
                                vastChain: JSON.stringify(t),
                                vastResolved: !0,
                              });
                            })
                            .catch((i) => {
                              T.dispatchEvent(e.ads.extendedVideoError, {
                                vastChain: JSON.stringify(t),
                                vastResolved: !1,
                                vastResolveErr: JSON.stringify(i),
                              });
                            });
                      } catch (e) {
                        console.warn(
                          "%cPOKI:%c Error parsing VAST",
                          "font-weight: bold",
                          "",
                          e
                        );
                      }
                  })
                  .catch(() => {}));
            }),
            T.addEventListener(e.ads.limit, () => {
              (this.#be = !1),
                this.#ze("onFinish", { type: e.ads.limit, rewardAllowed: !1 });
            }),
            T.addEventListener(e.ads.stopped, () => {
              (this.#be = !1),
                this.#ze("onFinish", {
                  type: e.ads.stopped,
                  rewardAllowed: !1,
                });
            }),
            T.addEventListener(e.ads.error, (t) => {
              (this.#be = !1),
                this.#ze("onFinish", {
                  type: e.ads.error,
                  rewardAllowed: !!t.rewardAllowed,
                });
            }),
            T.addEventListener(e.ads.busy, () => {
              (this.#be = !1),
                this.#ze("onFinish", { type: e.ads.busy, rewardAllowed: !1 });
            }),
            T.addEventListener(e.ads.completed, (t) => {
              (this.#be = !1),
                this.#ze("onFinish", {
                  type: e.ads.completed,
                  rewardAllowed: !!t.rewardAllowed,
                });
            }),
            [e.ads.limit, e.ads.stopped, e.ads.error, e.ads.completed].forEach(
              (e) => {
                T.addEventListener(e, () => {
                  this.#ue && this.#ue.hide(), (this.#_e = !1);
                });
              }
            );
        }
        #Le = () =>
          !(!this.#Se || this.#Ee) ||
          (!this.#Se &&
            !this.#me &&
            (console.error("The Poki SDK was not yet booted"), !0));
        #Ne = () => {
          const e = {};
          if (
            ((e.tag = S.tag),
            (e.site_id = S.siteID),
            (e.categories = decodeURIComponent(S.categories)),
            S.cookieDepL && (e.cookieDepL = S.cookieDepL),
            S.experiment)
          ) {
            const t = decodeURIComponent(S.experiment);
            (e.experiment = t),
              S.contentGameID &&
                (e.expid_content_gameid = `${t}|${S.contentGameID}`);
          }
          return (
            S.specialCondition &&
            this.#ye &&
            this.#ye.includes(S.specialCondition)
              ? "landing" === S.specialCondition
                ? (e.p4d_game_id_cond = `${S.gameID}|l`)
                : "crosspromo" === S.specialCondition
                ? (e.p4d_game_id_cond = `${S.gameID}|cp`)
                : (e.p4d_game_id = S.gameID)
              : (e.p4d_game_id = S.gameID),
            e
          );
        };
        #Oe = () => {
          T.addVideoDataAnnotations({ pokiAdServer: !0 });
          const t = () => T.dispatchEvent(e.ads.error, {});
          (async function () {
            const e = await ut("https://api.poki.com/ads/houseads/video/vast"),
              t = await e.text(),
              i = new DOMParser().parseFromString(t, "text/xml"),
              n = i.querySelector("ClickThrough")?.textContent?.trim() || "",
              o = (
                i.querySelector("Duration")?.textContent?.trim() || "00:00:11"
              ).split(":"),
              a = 60 * +o[0] * 60 + 60 * +o[1] + +o[2];
            let r = "";
            return (
              i.querySelectorAll("MediaFile").forEach((e) => {
                const t = e?.textContent?.trim() || "";
                t.includes("advertisement.h264_high.mp4") && (r = t);
              }),
              S.kioskMode
                ? { duration: a, videoUrl: r }
                : { clickThrough: n, duration: a, videoUrl: r }
            );
          })()
            .then((e) => {
              try {
                this.#ue.show(), this.#ue.startNonIMAFallbackVideo(e);
              } catch {
                t();
              }
            })
            .catch(() => {
              E.sendMessage(e.message.sendCommand, {
                event: "adLibrariesNotLoaded",
              }),
                t();
            });
        };
        #Me(e) {
          delete this.#pe[e];
        }
        setNrAds(e, t) {
          this.#me && this.#ue?.setNrAds(e, t);
        }
      })()
    );
    for (const e in ia) e.startsWith("__") || (window.PokiSDK[e] = ia[e]);
  })();
})();
