(() => {
    function e(e) {
        return e && e.__esModule ? e.default : e
    }
    const t = {
        autoload: !0,
        highlightText: !0,
        cache: !0,
        autoClear: 200
    };
    var r, n, o = {};
    r = o, n = function() {
        "use strict";

        function e(e) {
            return Number.isInteger(e) && e >= 0
        }

        function t(e) {
            this.name = "ArgumentError", this.message = e
        }
        return function(r, n) {
            if (n = n || {}, "function" != typeof r) throw new t("fetch must be a function");
            if ("object" != typeof n) throw new t("defaults must be an object");
            if (void 0 !== n.retries && !e(n.retries)) throw new t("retries must be a positive integer");
            if (void 0 !== n.retryDelay && !e(n.retryDelay) && "function" != typeof n.retryDelay) throw new t("retryDelay must be a positive integer or a function returning a positive integer");
            if (void 0 !== n.retryOn && !Array.isArray(n.retryOn) && "function" != typeof n.retryOn) throw new t("retryOn property expects an array or function");
            return n = Object.assign({
                    retries: 3,
                    retryDelay: 1e3,
                    retryOn: []
                }, n),
                function(o, i) {
                    var a = n.retries,
                        s = n.retryDelay,
                        c = n.retryOn;
                    if (i && void 0 !== i.retries) {
                        if (!e(i.retries)) throw new t("retries must be a positive integer");
                        a = i.retries
                    }
                    if (i && void 0 !== i.retryDelay) {
                        if (!e(i.retryDelay) && "function" != typeof i.retryDelay) throw new t("retryDelay must be a positive integer or a function returning a positive integer");
                        s = i.retryDelay
                    }
                    if (i && i.retryOn) {
                        if (!Array.isArray(i.retryOn) && "function" != typeof i.retryOn) throw new t("retryOn property expects an array or function");
                        c = i.retryOn
                    }
                    return new Promise((function(e, t) {
                        var n = function(n) {
                            var s = "undefined" != typeof Request && o instanceof Request ? o.clone() : o;
                            r(s, i).then((function(r) {
                                if (Array.isArray(c) && -1 === c.indexOf(r.status)) e(r);
                                else if ("function" == typeof c) try {
                                    return Promise.resolve(c(n, null, r)).then((function(t) {
                                        t ? u(n, null, r) : e(r)
                                    })).catch(t)
                                } catch (e) {
                                    t(e)
                                } else n < a ? u(n, null, r) : e(r)
                            })).catch((function(e) {
                                if ("function" == typeof c) try {
                                    Promise.resolve(c(n, e, null)).then((function(r) {
                                        r ? u(n, e, null) : t(e)
                                    })).catch((function(e) {
                                        t(e)
                                    }))
                                } catch (e) {
                                    t(e)
                                } else n < a ? u(n, e, null) : t(e)
                            }))
                        };

                        function u(e, t, r) {
                            var o = "function" == typeof s ? s(e, t, r) : s;
                            setTimeout((function() {
                                n(++e)
                            }), o)
                        }
                        n(0)
                    }))
                }
        }
    }, "object" == typeof o ? o = n() : "function" == typeof define && define.amd ? define(n) : (r = "undefined" != typeof globalThis ? globalThis : r || self).fetchRetry = n();
    let i, a;
    const s = new WeakMap,
        c = new WeakMap,
        u = new WeakMap,
        l = new WeakMap,
        d = new WeakMap;
    let f = {
        get(e, t, r) {
            if (e instanceof IDBTransaction) {
                if ("done" === t) return c.get(e);
                if ("objectStoreNames" === t) return e.objectStoreNames || u.get(e);
                if ("store" === t) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
            }
            return b(e[t])
        },
        set: (e, t, r) => (e[t] = r, !0),
        has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
    };

    function y(e) {
        return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (a || (a = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
            return e.apply(p(this), t), b(s.get(this))
        } : function(...t) {
            return b(e.apply(p(this), t))
        } : function(t, ...r) {
            const n = e.call(p(this), t, ...r);
            return u.set(n, t.sort ? t.sort() : [t]), b(n)
        }
    }

    function v(e) {
        return "function" == typeof e ? y(e) : (e instanceof IDBTransaction && function(e) {
            if (c.has(e)) return;
            const t = new Promise(((t, r) => {
                const n = () => {
                        e.removeEventListener("complete", o), e.removeEventListener("error", i), e.removeEventListener("abort", i)
                    },
                    o = () => {
                        t(), n()
                    },
                    i = () => {
                        r(e.error || new DOMException("AbortError", "AbortError")), n()
                    };
                e.addEventListener("complete", o), e.addEventListener("error", i), e.addEventListener("abort", i)
            }));
            c.set(e, t)
        }(e), t = e, (i || (i = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => t instanceof e)) ? new Proxy(e, f) : e);
        var t
    }

    function b(e) {
        if (e instanceof IDBRequest) return function(e) {
            const t = new Promise(((t, r) => {
                const n = () => {
                        e.removeEventListener("success", o), e.removeEventListener("error", i)
                    },
                    o = () => {
                        t(b(e.result)), n()
                    },
                    i = () => {
                        r(e.error), n()
                    };
                e.addEventListener("success", o), e.addEventListener("error", i)
            }));
            return t.then((t => {
                t instanceof IDBCursor && s.set(t, e)
            })).catch((() => {})), d.set(t, e), t
        }(e);
        if (l.has(e)) return l.get(e);
        const t = v(e);
        return t !== e && (l.set(e, t), d.set(t, e)), t
    }
    const p = e => d.get(e);
    const w = ["get", "getKey", "getAll", "getAllKeys", "count"],
        g = ["put", "add", "delete", "clear"],
        h = new Map;

    function m(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
        if (h.get(t)) return h.get(t);
        const r = t.replace(/FromIndex$/, ""),
            n = t !== r,
            o = g.includes(r);
        if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !o && !w.includes(r)) return;
        const i = async function(e, ...t) {
            const i = this.transaction(e, o ? "readwrite" : "readonly");
            let a = i.store;
            return n && (a = a.index(t.shift())), (await Promise.all([a[r](...t), o && i.done]))[0]
        };
        return h.set(t, i), i
    }
    f = (e => ({
        ...e,
        get: (t, r, n) => m(t, r) || e.get(t, r, n),
        has: (t, r) => !!m(t, r) || e.has(t, r)
    }))(f);
    e(o)(fetch, {
        retries: 100,
        retryDelay: (e, t, r) => "AbortError" !== (null == t ? void 0 : t.name) && (e > 50 ? 6e4 : e > 20 ? 1e4 : 2e3),
        retryOn: (e, t, r) => "AbortError" !== (null == t ? void 0 : t.name) && (null !== t || r.status >= 400 ? !(e > 100) : void 0)
    });
    const D = function(e, t, {
            blocked: r,
            upgrade: n,
            blocking: o,
            terminated: i
        } = {}) {
            const a = indexedDB.open(e, t),
                s = b(a);
            return n && a.addEventListener("upgradeneeded", (e => {
                n(b(a.result), e.oldVersion, e.newVersion, b(a.transaction))
            })), r && a.addEventListener("blocked", (() => r())), s.then((e => {
                i && e.addEventListener("close", (() => i())), o && e.addEventListener("versionchange", (() => o()))
            })).catch((() => {})), s
        }("IDB_YCS", 1, {
            upgrade(e) {
                e.createObjectStore("STORE_CACHE_YCS")
            }
        }),
        E = "STORE_CACHE_YCS";
    browser.runtime.onInstalled.addListener((async () => {
        const e = await browser.storage.local.get();
        await browser.storage.local.set({
            ...t,
            ...e
        });
        const r = await browser.tabs.query({
            url: "*://*.youtube.com/*"
        });
        for (const e of r)
            if (e.id) try {
                browser.tabs.insertCSS(e.id, {
                    file: "content-scripts/style.css"
                }), browser.tabs.executeScript(e.id, {
                    file: "content-scripts/cscripts.js"
                })
            } catch (e) {}
    })), browser.runtime.onMessage.addListener((async (e, t) => {
        var r, n;
        "YCS_SET_BADGE" === (null == e ? void 0 : e.type) && (browser.browserAction.setBadgeText({
            text: null == e || null === (r = e.text) || void 0 === r ? void 0 : r.toString(),
            tabId: null === (n = t.tab) || void 0 === n ? void 0 : n.id
        }), browser.browserAction.setBadgeBackgroundColor({
            color: "#2f3640"
        }));
        if ("YCS_CACHE_STORAGE_GET" === (null == e ? void 0 : e.type) && (null == e ? void 0 : e.body) && e.body.videoId) {
            var o;
            const r = await D,
                n = await r.get(E, e.body.videoId);
            var i;
            if (null == t || null === (o = t.tab) || void 0 === o ? void 0 : o.id)
                if (n) browser.tabs.sendMessage(null === (i = t.tab) || void 0 === i ? void 0 : i.id, {
                    type: "YCS_CACHE_STORAGE_GET_SEND",
                    body: n.body
                });
                else {
                    var a;
                    (await browser.storage.local.get("autoload")).autoload && browser.tabs.sendMessage(null === (a = t.tab) || void 0 === a ? void 0 : a.id, {
                        type: "YCS_AUTOLOAD"
                    })
                }
        }
        if ("YCS_CACHE_STORAGE_SET" === (null == e ? void 0 : e.type) && (null == e ? void 0 : e.body) && e.body.videoId) {
            const t = await browser.storage.local.get(["cache", "autoClear"]);
            if (!(null == t ? void 0 : t.cache)) return;
            const r = 1e6 * t.autoClear || 2e8,
                n = await navigator.storage.estimate(),
                o = await D;
            n.usage < r ? await o.put(E, e, e.body.videoId) : n.usage >= r && (await o.clear(E), await o.put(E, e, e.body.videoId))
        }
    }))
})();