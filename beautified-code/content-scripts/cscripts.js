! function() {
    const e = document.querySelectorAll(`script[src="chrome-extension://${browser.runtime.id}/web-resources/wresources.js"]`);
    for (const t of e) t.remove()
}(), browser.runtime.onMessage.addListener(((e, t, o) => {
        try {
            "YCS_CACHE_STORAGE_GET_SEND" === (null == e ? void 0 : e.type) && (null == e ? void 0 : e.body) && window.postMessage({
                type: "YCS_CACHE_STORAGE_GET_RESPONSE",
                body: e.body
            }, window.location.origin), "YCS_AUTOLOAD" === (null == e ? void 0 : e.type) && window.postMessage({
                type: "YCS_AUTOLOAD"
            }, window.location.origin)
        } catch (e) {}
    })), window.addEventListener("message", (async e => {
        try {
            var t, o, r, s, i;
            if (e.source != window) return;
            if (e.data.type && "NUMBER_COMMENTS" === e.data.type && browser.runtime.sendMessage(`${browser.runtime.id}`, {
                    type: "YCS_SET_BADGE",
                    text: e.data.text.toString() || ""
                }), "GET_OPTIONS" === (null === (t = e.data) || void 0 === t ? void 0 : t.type)) try {
                const e = await browser.storage.local.get();
                window.postMessage({
                    type: "YCS_OPTIONS",
                    text: e
                }, window.location.origin)
            } catch (e) {}
            "YCS_CACHE_STORAGE_SET" === (null === (o = e.data) || void 0 === o ? void 0 : o.type) && (null === (r = e.data) || void 0 === r ? void 0 : r.body) && browser.runtime.sendMessage(`${browser.runtime.id}`, e.data, (e => {})), "YCS_CACHE_STORAGE_GET" === (null === (s = e.data) || void 0 === s ? void 0 : s.type) && (null === (i = e.data) || void 0 === i ? void 0 : i.body) && browser.runtime.sendMessage(`${browser.runtime.id}`, e.data, (e => {}))
        } catch (e) {}
    }), !1),
    function(e, t) {
        try {
            const o = document.querySelector(t),
                r = document.createElement("script");
            r.setAttribute("type", "text/javascript"), r.setAttribute("src", e), null == o || o.appendChild(r)
        } catch (e) {
            throw e
        }
    }(browser.runtime.getURL("web-resources/wresources.js"), "body");