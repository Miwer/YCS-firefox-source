var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    e = {},
    n = {},
    o = t.parcelRequireb06e;
null == o && ((o = function(t) {
    if (t in e) return e[t].exports;
    if (t in n) {
        var o = n[t];
        delete n[t];
        var a = {
            id: t,
            exports: {}
        };
        return e[t] = a, o.call(a.exports, a, a.exports), a.exports
    }
    var r = new Error("Cannot find module '" + t + "'");
    throw r.code = "MODULE_NOT_FOUND", r
}).register = function(t, e) {
    n[t] = e
}, t.parcelRequireb06e = o);
var a = o("bRhBe"),
    r = o("epVyJ");
window.onload = async () => {
    try {
        const t = async () => await browser.tabs.query({
            active: !0,
            lastFocusedWindow: !0
        }), e = t => {
            try {
                if ("string" != typeof t) return;
                const e = new URL(t).pathname.split("/"),
                    n = e[e.indexOf("shorts") + 1];
                return `https://www.youtube.com/watch?v=${n}`
            } catch (t) {}
        }, n = t => {
            try {
                if ("string" != typeof t) return;
                const e = new URL(t),
                    n = e.pathname.split("/").indexOf("shorts");
                if (-1 === n) return !1;
                if (n >= 0) return !0
            } catch (t) {}
        }, o = document.getElementById("ycs_opts_btn_cache"), s = document.getElementById("ycs_opts_btn_opts_page"), c = document.getElementById("ycs_opts_btn_export_cache_page"), i = async () => {
            try {
                var t;
                const e = await a.idb,
                    n = await navigator.storage.estimate(),
                    o = document.getElementById("ycs_total_cache"),
                    s = document.getElementById("ycs_used_cache"),
                    c = document.getElementById("ycs_browser_av_storage"),
                    i = document.getElementById("ycs_quota_av_storage");
                o.textContent = await e.count("STORE_CACHE_YCS") + "", s.textContent = r.formatBytes((null == n || null === (t = n.usageDetails) || void 0 === t ? void 0 : t.indexedDB) || n.usage), c.textContent = (n.usage / n.quota * 100).toFixed(2) + "%", i.textContent = r.formatBytes(n.quota)
            } catch (t) {}
        }, u = async () => {
            try {
                const t = await a.idb;
                await t.clear("STORE_CACHE_YCS"), await i()
            } catch (t) {}
        };
        null == o || o.addEventListener("click", (async () => {
            await u()
        })), null == s || s.addEventListener("click", (() => {
            try {
                browser.runtime.openOptionsPage()
            } catch (t) {}
        })), null == c || c.addEventListener("click", (() => {
            try {
                browser.tabs.create({
                    url: browser.runtime.getURL("./options/export.html")
                })
            } catch (t) {}
        })), i();
        try {
            const o = await t();
            if (n(o[0].url || "")) {
                document.getElementById("ycs_btn_opt_block").insertAdjacentHTML("afterbegin", '<button class="ycs_opts_btn" type="button" id="ycs_open_shorts" name="Open YouTube shorts for search." title="Open YouTube shorts for search.">Open YT short</button>');
                document.getElementById("ycs_open_shorts").onclick = () => {
                    try {
                        const t = e(o[0].url || "") || "";
                        browser.tabs.update({
                            url: t
                        })
                    } catch (t) {}
                }
            }
        } catch (t) {}
    } catch (t) {}
};