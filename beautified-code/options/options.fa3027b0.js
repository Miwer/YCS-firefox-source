var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    t = {},
    a = {},
    o = e.parcelRequireb06e;
null == o && ((o = function(e) {
    if (e in t) return t[e].exports;
    if (e in a) {
        var o = a[e];
        delete a[e];
        var c = {
            id: e,
            exports: {}
        };
        return t[e] = c, o.call(c.exports, c, c.exports), c.exports
    }
    var s = new Error("Cannot find module '" + e + "'");
    throw s.code = "MODULE_NOT_FOUND", s
}).register = function(e, t) {
    a[e] = t
}, e.parcelRequireb06e = o);
const c = {
    autoload: !0,
    highlightText: !0,
    cache: !0,
    autoClear: 200
};
var s = o("epVyJ"),
    r = o("bRhBe");
window.onload = async () => {
    try {
        const e = e => {
                "boolean" == typeof e && (document.getElementById("y_opts_autoload").checked = e)
            },
            t = async e => {
                try {
                    await browser.storage.local.set({
                        autoload: e.checked
                    })
                } catch (e) {}
            }, a = e => {
                "boolean" == typeof e && (document.getElementById("y_opts_highlight").checked = e)
            }, o = async e => {
                try {
                    await browser.storage.local.set({
                        highlightText: e.checked
                    })
                } catch (e) {}
            }, n = e => {
                "boolean" == typeof e && (document.getElementById("y_opts_cache").checked = e)
            }, l = async e => {
                try {
                    await browser.storage.local.set({
                        cache: e.checked
                    })
                } catch (e) {}
            }, i = e => {
                e && (document.getElementById("y_opts_cache_quota").value = e.toString())
            }, d = async e => {
                try {
                    s.isNumeric(e.target.value) && await browser.storage.local.set({
                        autoClear: e.target.value
                    })
                } catch (e) {}
            }, g = async () => {
                try {
                    var e;
                    const t = await r.idb,
                        a = await navigator.storage.estimate(),
                        o = document.getElementById("ycs_total_cache"),
                        c = document.getElementById("ycs_used_cache"),
                        n = document.getElementById("ycs_browser_av_storage"),
                        l = document.getElementById("ycs_quota_av_storage");
                    o.textContent = await t.count("STORE_CACHE_YCS") + "", c.textContent = s.formatBytes((null == a || null === (e = a.usageDetails) || void 0 === e ? void 0 : e.indexedDB) || a.usage), n.textContent = (a.usage / a.quota * 100).toFixed(2) + "%", l.textContent = s.formatBytes(a.quota)
                } catch (e) {}
            }, y = async () => {
                try {
                    const e = await r.idb;
                    await e.clear("STORE_CACHE_YCS"), await g()
                } catch (e) {}
            }, u = await browser.storage.local.get();
        await browser.storage.local.set({
            ...c,
            ...u
        });
        const h = await browser.storage.local.get();
        if (h)
            for (const t of Object.keys(h)) switch (t) {
                case "autoload":
                    e(h[t]);
                    break;
                case "highlightText":
                    a(h[t]);
                    break;
                case "cache":
                    n(h[t]);
                    break;
                case "autoClear":
                    i(h[t])
            }
        const _ = document.getElementsByClassName("ycs_inner_wrap")[0];
        null == _ || _.addEventListener("click", (async e => {
            switch (e.target.id) {
                case "y_opts_autoload":
                    t(e.target);
                    break;
                case "y_opts_highlight":
                    o(e.target);
                    break;
                case "y_opts_cache":
                    l(e.target);
                    break;
                case "ycs_opts_btn_cache":
                    e.target.disabled = !0, await y(), e.target.disabled = !1
            }
        }));
        const w = document.getElementById("y_opts_cache_quota");
        null == w || w.addEventListener("input", d);
        document.getElementById("ycs_opts_btn_export_page").onclick = () => {
            try {
                browser.tabs.create({
                    url: browser.runtime.getURL("./options/export.html")
                })
            } catch (e) {}
        }, await g()
    } catch (e) {}
};