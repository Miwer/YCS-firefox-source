function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    n = {},
    a = {},
    i = r.parcelRequireb06e;
null == i && ((i = function(e) {
    if (e in n) return n[e].exports;
    if (e in a) {
        var t = a[e];
        delete a[e];
        var r = {
            id: e,
            exports: {}
        };
        return n[e] = r, t.call(r.exports, r, r.exports), r.exports
    }
    var i = new Error("Cannot find module '" + e + "'");
    throw i.code = "MODULE_NOT_FOUND", i
}).register = function(e, t) {
    a[e] = t
}, r.parcelRequireb06e = i);
var s = i("hkaxq"),
    o = {};
t(o, "utils", (() => Zl), (e => Zl = e)), t(o, "writeFile", (() => jl), (e => jl = e));
for (var l = {}, c = l.Buffer, f = {
        version: "0.18.2"
    }, h = 1200, u = 1252, d = [874, 932, 936, 949, 950, 1e4], p = 0; p <= 8; ++p) d.push(1250 + p);
var m = {
        0: 1252,
        1: 65001,
        2: 65001,
        77: 1e4,
        128: 932,
        129: 949,
        130: 1361,
        134: 936,
        136: 950,
        161: 1253,
        162: 1254,
        163: 1258,
        177: 1255,
        178: 1256,
        186: 1257,
        204: 1251,
        222: 874,
        238: 1250,
        255: 1252,
        69: 6969
    },
    g = function(e) {
        -1 != d.indexOf(e) && (u = m[0] = e)
    };
var v = function(e) {
    h = e, g(e)
};

function E() {
    v(1200), g(1252)
}

function S(e) {
    for (var t = [], r = 0; r < e.length >> 1; ++r) t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
    return t.join("")
}
var b, w = function(e) {
        var t = e.charCodeAt(0),
            r = e.charCodeAt(1);
        return 255 == t && 254 == r ? function(e) {
            for (var t = [], r = 0; r < e.length >> 1; ++r) t[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
            return t.join("")
        }(e.slice(2)) : 254 == t && 255 == r ? S(e.slice(2)) : 65279 == t ? e.slice(1) : e
    },
    B = function(e) {
        return String.fromCharCode(e)
    },
    C = function(e) {
        return String.fromCharCode(e)
    };
var _, y = (_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", {
        encode: function(e) {
            for (var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, o = 0, l = 0, c = 0; c < e.length;) i = (r = e.charCodeAt(c++)) >> 2, s = (3 & r) << 4 | (n = e.charCodeAt(c++)) >> 4, o = (15 & n) << 2 | (a = e.charCodeAt(c++)) >> 6, l = 63 & a, isNaN(n) ? o = l = 64 : isNaN(a) && (l = 64), t += _.charAt(i) + _.charAt(s) + _.charAt(o) + _.charAt(l);
            return t
        },
        decode: function(e) {
            var t = "",
                r = 0,
                n = 0,
                a = 0,
                i = 0,
                s = 0,
                o = 0;
            e = e.replace(/[^\w\+\/\=]/g, "");
            for (var l = 0; l < e.length;) r = _.indexOf(e.charAt(l++)) << 2 | (i = _.indexOf(e.charAt(l++))) >> 4, t += String.fromCharCode(r), n = (15 & i) << 4 | (s = _.indexOf(e.charAt(l++))) >> 2, 64 !== s && (t += String.fromCharCode(n)), a = (3 & s) << 6 | (o = _.indexOf(e.charAt(l++))), 64 !== o && (t += String.fromCharCode(a));
            return t
        }
    }),
    T = void 0 !== c && void 0 !== l && void 0 !== l.versions && !!l.versions.node,
    A = function() {};
if (void 0 !== c) {
    var R = !c.from;
    if (!R) try {
        c.from("foo", "utf8")
    } catch (e) {
        R = !0
    }
    A = R ? function(e, t) {
        return t ? new c(e, t) : new c(e)
    } : c.from.bind(c), c.alloc || (c.alloc = function(e) {
        return new c(e)
    }), c.allocUnsafe || (c.allocUnsafe = function(e) {
        return new c(e)
    })
}

function x(e) {
    return T ? c.alloc(e) : "undefined" != typeof Uint8Array ? new Uint8Array(e) : new Array(e)
}

function I(e) {
    return T ? c.allocUnsafe(e) : "undefined" != typeof Uint8Array ? new Uint8Array(e) : new Array(e)
}
var D = function(e) {
    return T ? A(e, "binary") : e.split("").map((function(e) {
        return 255 & e.charCodeAt(0)
    }))
};

function O(e) {
    if ("undefined" == typeof ArrayBuffer) return D(e);
    for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n != e.length; ++n) r[n] = 255 & e.charCodeAt(n);
    return t
}

function P(e) {
    if (Array.isArray(e)) return e.map((function(e) {
        return String.fromCharCode(e)
    })).join("");
    for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]);
    return t.join("")
}

function k(e) {
    if ("undefined" == typeof ArrayBuffer) throw new Error("Unsupported");
    if (e instanceof ArrayBuffer) return k(new Uint8Array(e));
    for (var t = new Array(e.length), r = 0; r < e.length; ++r) t[r] = e[r];
    return t
}
var F = function(e) {
        if ("undefined" != typeof Uint8Array) {
            var t = 0,
                r = 0;
            for (t = 0; t < e.length; ++t) r += e[t].length;
            var n = new Uint8Array(r),
                a = 0;
            for (t = 0, r = 0; t < e.length; r += a, ++t)
                if (a = e[t].length, e[t] instanceof Uint8Array) n.set(e[t], r);
                else {
                    if ("string" == typeof e[t]) throw "wtf";
                    n.set(new Uint8Array(e[t]), r)
                } return n
        }
        return [].concat.apply([], e.map((function(e) {
            return Array.isArray(e) ? e : [].slice.call(e)
        })))
    },
    N = /\u0000/g,
    M = /[\u0001-\u0006]/g,
    L = {},
    U = function(e) {
        function t(e) {
            for (var t = "", r = e.length - 1; r >= 0;) t += e.charAt(r--);
            return t
        }

        function r(e, t) {
            for (var r = ""; r.length < t;) r += e;
            return r
        }

        function n(e, t) {
            var n = "" + e;
            return n.length >= t ? n : r("0", t - n.length) + n
        }

        function a(e, t) {
            var n = "" + e;
            return n.length >= t ? n : r(" ", t - n.length) + n
        }

        function i(e, t) {
            var n = "" + e;
            return n.length >= t ? n : n + r(" ", t - n.length)
        }
        e.version = "0.11.2";
        var s = Math.pow(2, 32);

        function o(e, t) {
            return e > s || e < -s ? function(e, t) {
                var n = "" + Math.round(e);
                return n.length >= t ? n : r("0", t - n.length) + n
            }(e, t) : function(e, t) {
                var n = "" + e;
                return n.length >= t ? n : r("0", t - n.length) + n
            }(Math.round(e), t)
        }

        function l(e, t) {
            return t = t || 0, e.length >= 7 + t && 103 == (32 | e.charCodeAt(t)) && 101 == (32 | e.charCodeAt(t + 1)) && 110 == (32 | e.charCodeAt(t + 2)) && 101 == (32 | e.charCodeAt(t + 3)) && 114 == (32 | e.charCodeAt(t + 4)) && 97 == (32 | e.charCodeAt(t + 5)) && 108 == (32 | e.charCodeAt(t + 6))
        }
        var c = [
                ["Sun", "Sunday"],
                ["Mon", "Monday"],
                ["Tue", "Tuesday"],
                ["Wed", "Wednesday"],
                ["Thu", "Thursday"],
                ["Fri", "Friday"],
                ["Sat", "Saturday"]
            ],
            f = [
                ["J", "Jan", "January"],
                ["F", "Feb", "February"],
                ["M", "Mar", "March"],
                ["A", "Apr", "April"],
                ["M", "May", "May"],
                ["J", "Jun", "June"],
                ["J", "Jul", "July"],
                ["A", "Aug", "August"],
                ["S", "Sep", "September"],
                ["O", "Oct", "October"],
                ["N", "Nov", "November"],
                ["D", "Dec", "December"]
            ];

        function h(e) {
            e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "'
        }
        var u = {};
        h(u);
        var d = [],
            p = 0;
        for (p = 5; p <= 8; ++p) d[p] = 32 + p;
        for (p = 23; p <= 26; ++p) d[p] = 0;
        for (p = 27; p <= 31; ++p) d[p] = 14;
        for (p = 50; p <= 58; ++p) d[p] = 14;
        for (p = 59; p <= 62; ++p) d[p] = p - 58;
        for (p = 67; p <= 68; ++p) d[p] = p - 58;
        for (p = 72; p <= 75; ++p) d[p] = p - 58;
        for (p = 67; p <= 68; ++p) d[p] = p - 57;
        for (p = 76; p <= 78; ++p) d[p] = p - 56;
        for (p = 79; p <= 81; ++p) d[p] = p - 34;
        var m = [];

        function g(e, t, r) {
            for (var n = e < 0 ? -1 : 1, a = e * n, i = 0, s = 1, o = 0, l = 1, c = 0, f = 0, h = Math.floor(a); c < t && (o = (h = Math.floor(a)) * s + i, f = h * c + l, !(a - h < 5e-8));) a = 1 / (a - h), i = s, s = o, l = c, c = f;
            if (f > t && (c > t ? (f = l, o = i) : (f = c, o = s)), !r) return [0, n * o, f];
            var u = Math.floor(n * o / f);
            return [u, n * o - u * f, f]
        }

        function v(e, t, r) {
            if (e > 2958465 || e < 0) return null;
            var n = 0 | e,
                a = Math.floor(86400 * (e - n)),
                i = 0,
                s = [],
                o = {
                    D: n,
                    T: a,
                    u: 86400 * (e - n) - a,
                    y: 0,
                    m: 0,
                    d: 0,
                    H: 0,
                    M: 0,
                    S: 0,
                    q: 0
                };
            if (Math.abs(o.u) < 1e-6 && (o.u = 0), t && t.date1904 && (n += 1462), o.u > .9999 && (o.u = 0, 86400 == ++a && (o.T = a = 0, ++n, ++o.D)), 60 === n) s = r ? [1317, 10, 29] : [1900, 2, 29], i = 3;
            else if (0 === n) s = r ? [1317, 8, 29] : [1900, 1, 0], i = 6;
            else {
                n > 60 && --n;
                var l = new Date(1900, 0, 1);
                l.setDate(l.getDate() + n - 1), s = [l.getFullYear(), l.getMonth() + 1, l.getDate()], i = l.getDay(), n < 60 && (i = (i + 6) % 7), r && (i = function(e, t) {
                    t[0] -= 581;
                    var r = e.getDay();
                    e < 60 && (r = (r + 6) % 7);
                    return r
                }(l, s))
            }
            return o.y = s[0], o.m = s[1], o.d = s[2], o.S = a % 60, a = Math.floor(a / 60), o.M = a % 60, a = Math.floor(a / 60), o.H = a, o.q = i, o
        }
        m[5] = m[63] = '"$"#,##0_);\\("$"#,##0\\)', m[6] = m[64] = '"$"#,##0_);[Red]\\("$"#,##0\\)', m[7] = m[65] = '"$"#,##0.00_);\\("$"#,##0.00\\)', m[8] = m[66] = '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', m[41] = '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)', m[42] = '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)', m[43] = '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)', m[44] = '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)', e.parse_date_code = v;
        var E = new Date(1899, 11, 31, 0, 0, 0),
            S = E.getTime(),
            b = new Date(1900, 2, 1, 0, 0, 0);

        function w(e, t) {
            var r = e.getTime();
            return t ? r -= 1262304e5 : e >= b && (r += 864e5), (r - (S + 6e4 * (e.getTimezoneOffset() - E.getTimezoneOffset()))) / 864e5
        }
        e._general_int = function(e) {
            return e.toString(10)
        };
        var B = function() {
            var e = /(?:\.0*|(\.\d*[1-9])0+)$/;

            function t(t) {
                return -1 == t.indexOf(".") ? t : t.replace(e, "$1")
            }
            var r = /(?:\.0*|(\.\d*[1-9])0+)[Ee]/,
                n = /(E[+-])(\d)$/;
            return function(e) {
                var a, i = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
                return a = i >= -4 && i <= -1 ? e.toPrecision(10 + i) : Math.abs(i) <= 9 ? function(e) {
                    var r = e < 0 ? 12 : 11,
                        n = t(e.toFixed(12));
                    return n.length <= r || (n = e.toPrecision(10)).length <= r ? n : e.toExponential(5)
                }(e) : 10 === i ? e.toFixed(10).substr(0, 12) : function(e) {
                    var r = t(e.toFixed(11));
                    return r.length > (e < 0 ? 12 : 11) || "0" === r || "-0" === r ? e.toPrecision(6) : r
                }(e), t(function(e) {
                    return -1 == e.indexOf("E") ? e : e.replace(r, "$1E").replace(n, "$10$2")
                }(a.toUpperCase()))
            }
        }();

        function C(e, t) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "TRUE" : "FALSE";
                case "number":
                    return (0 | e) === e ? e.toString(10) : B(e);
                case "undefined":
                    return "";
                case "object":
                    if (null == e) return "";
                    if (e instanceof Date) return k(14, w(e, t && t.date1904), t)
            }
            throw new Error("unsupported value in General format: " + e)
        }

        function _(e, t, r, a) {
            var i, s = "",
                o = 0,
                l = 0,
                h = r.y,
                u = 0;
            switch (e) {
                case 98:
                    h = r.y + 543;
                case 121:
                    switch (t.length) {
                        case 1:
                        case 2:
                            i = h % 100, u = 2;
                            break;
                        default:
                            i = h % 1e4, u = 4
                    }
                    break;
                case 109:
                    switch (t.length) {
                        case 1:
                        case 2:
                            i = r.m, u = t.length;
                            break;
                        case 3:
                            return f[r.m - 1][1];
                        case 5:
                            return f[r.m - 1][0];
                        default:
                            return f[r.m - 1][2]
                    }
                    break;
                case 100:
                    switch (t.length) {
                        case 1:
                        case 2:
                            i = r.d, u = t.length;
                            break;
                        case 3:
                            return c[r.q][0];
                        default:
                            return c[r.q][1]
                    }
                    break;
                case 104:
                    switch (t.length) {
                        case 1:
                        case 2:
                            i = 1 + (r.H + 11) % 12, u = t.length;
                            break;
                        default:
                            throw "bad hour format: " + t
                    }
                    break;
                case 72:
                    switch (t.length) {
                        case 1:
                        case 2:
                            i = r.H, u = t.length;
                            break;
                        default:
                            throw "bad hour format: " + t
                    }
                    break;
                case 77:
                    switch (t.length) {
                        case 1:
                        case 2:
                            i = r.M, u = t.length;
                            break;
                        default:
                            throw "bad minute format: " + t
                    }
                    break;
                case 115:
                    if ("s" != t && "ss" != t && ".0" != t && ".00" != t && ".000" != t) throw "bad second format: " + t;
                    return 0 !== r.u || "s" != t && "ss" != t ? (l = a >= 2 ? 3 === a ? 1e3 : 100 : 1 === a ? 10 : 1, (o = Math.round(l * (r.S + r.u))) >= 60 * l && (o = 0), "s" === t ? 0 === o ? "0" : "" + o / l : (s = n(o, 2 + a), "ss" === t ? s.substr(0, 2) : "." + s.substr(2, t.length - 1))) : n(r.S, t.length);
                case 90:
                    switch (t) {
                        case "[h]":
                        case "[hh]":
                            i = 24 * r.D + r.H;
                            break;
                        case "[m]":
                        case "[mm]":
                            i = 60 * (24 * r.D + r.H) + r.M;
                            break;
                        case "[s]":
                        case "[ss]":
                            i = 60 * (60 * (24 * r.D + r.H) + r.M) + Math.round(r.S + r.u);
                            break;
                        default:
                            throw "bad abstime format: " + t
                    }
                    u = 3 === t.length ? 1 : 2;
                    break;
                case 101:
                    i = h, u = 1
            }
            return u > 0 ? n(i, u) : ""
        }

        function y(e) {
            if (e.length <= 3) return e;
            for (var t = e.length % 3, r = e.substr(0, t); t != e.length; t += 3) r += (r.length > 0 ? "," : "") + e.substr(t, 3);
            return r
        }
        e._general_num = B, e._general = C;
        var T = function() {
            var e = /%/g;

            function s(e, t) {
                var r, n = e.indexOf("E") - e.indexOf(".") - 1;
                if (e.match(/^#+0.0E\+0$/)) {
                    if (0 == t) return "0.0E+0";
                    if (t < 0) return "-" + s(e, -t);
                    var a = e.indexOf("."); - 1 === a && (a = e.indexOf("E"));
                    var i = Math.floor(Math.log(t) * Math.LOG10E) % a;
                    if (i < 0 && (i += a), -1 === (r = (t / Math.pow(10, i)).toPrecision(n + 1 + (a + i) % a)).indexOf("e")) {
                        var o = Math.floor(Math.log(t) * Math.LOG10E);
                        for (-1 === r.indexOf(".") ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (o - r.length + i) : r += "E+" + (o - i);
                            "0." === r.substr(0, 2);) r = (r = r.charAt(0) + r.substr(2, a) + "." + r.substr(2 + a)).replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
                        r = r.replace(/\+-/, "-")
                    }
                    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, (function(e, t, r, n) {
                        return t + r + n.substr(0, (a + i) % a) + "." + n.substr(i) + "E"
                    }))
                } else r = t.toExponential(n);
                return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E")
            }
            var l = /# (\?+)( ?)\/( ?)(\d+)/;
            var c = /^#*0*\.([0#]+)/,
                f = /\).*[0#]/,
                h = /\(###\) ###\\?-####/;

            function u(e) {
                for (var t, r = "", n = 0; n != e.length; ++n) switch (t = e.charCodeAt(n)) {
                    case 35:
                        break;
                    case 63:
                        r += " ";
                        break;
                    case 48:
                        r += "0";
                        break;
                    default:
                        r += String.fromCharCode(t)
                }
                return r
            }

            function d(e, t) {
                var r = Math.pow(10, t);
                return "" + Math.round(e * r) / r
            }

            function p(e, t) {
                var r = e - Math.floor(e),
                    n = Math.pow(10, t);
                return t < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n)
            }

            function m(v, E, S) {
                if (40 === v.charCodeAt(0) && !E.match(f)) {
                    var b = E.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                    return S >= 0 ? m("n", b, S) : "(" + m("n", b, -S) + ")"
                }
                if (44 === E.charCodeAt(E.length - 1)) return function(e, t, r) {
                    for (var n = t.length - 1; 44 === t.charCodeAt(n - 1);) --n;
                    return T(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)))
                }(v, E, S);
                if (-1 !== E.indexOf("%")) return function(t, n, a) {
                    var i = n.replace(e, ""),
                        s = n.length - i.length;
                    return T(t, i, a * Math.pow(10, 2 * s)) + r("%", s)
                }(v, E, S);
                if (-1 !== E.indexOf("E")) return s(E, S);
                if (36 === E.charCodeAt(0)) return "$" + m(v, E.substr(" " == E.charAt(1) ? 2 : 1), S);
                var w, B, C, _, A = Math.abs(S),
                    R = S < 0 ? "-" : "";
                if (E.match(/^00+$/)) return R + o(A, E.length);
                if (E.match(/^[#?]+$/)) return "0" === (w = o(S, 0)) && (w = ""), w.length > E.length ? w : u(E.substr(0, E.length - w.length)) + w;
                if (B = E.match(l)) return function(e, t, i) {
                    var s = parseInt(e[4], 10),
                        o = Math.round(t * s),
                        l = Math.floor(o / s),
                        c = o - l * s,
                        f = s;
                    return i + (0 === l ? "" : "" + l) + " " + (0 === c ? r(" ", e[1].length + 1 + e[4].length) : a(c, e[1].length) + e[2] + "/" + e[3] + n(f, e[4].length))
                }(B, A, R);
                if (E.match(/^#+0+$/)) return R + o(A, E.length - E.indexOf("0"));
                if (B = E.match(c)) return w = d(S, B[1].length).replace(/^([^\.]+)$/, "$1." + u(B[1])).replace(/\.$/, "." + u(B[1])).replace(/\.(\d*)$/, (function(e, t) {
                    return "." + t + r("0", u(B[1]).length - t.length)
                })), -1 !== E.indexOf("0.") ? w : w.replace(/^0\./, ".");
                if (E = E.replace(/^#+([0.])/, "$1"), B = E.match(/^(0*)\.(#*)$/)) return R + d(A, B[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, B[1].length ? "0." : ".");
                if (B = E.match(/^#{1,3},##0(\.?)$/)) return R + y(o(A, 0));
                if (B = E.match(/^#,##0\.([#0]*0)$/)) return S < 0 ? "-" + m(v, E, -S) : y("" + (Math.floor(S) + function(e, t) {
                    return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0
                }(S, B[1].length))) + "." + n(p(S, B[1].length), B[1].length);
                if (B = E.match(/^#,#*,#0/)) return m(v, E.replace(/^#,#*,/, ""), S);
                if (B = E.match(/^([0#]+)(\\?-([0#]+))+$/)) return w = t(m(v, E.replace(/[\\-]/g, ""), S)), C = 0, t(t(E.replace(/\\/g, "")).replace(/[0#]/g, (function(e) {
                    return C < w.length ? w.charAt(C++) : "0" === e ? "0" : ""
                })));
                if (E.match(h)) return "(" + (w = m(v, "##########", S)).substr(0, 3) + ") " + w.substr(3, 3) + "-" + w.substr(6);
                var x = "";
                if (B = E.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return C = Math.min(B[4].length, 7), _ = g(A, Math.pow(10, C) - 1, !1), w = "" + R, " " == (x = T("n", B[1], _[1])).charAt(x.length - 1) && (x = x.substr(0, x.length - 1) + "0"), w += x + B[2] + "/" + B[3], (x = i(_[2], C)).length < B[4].length && (x = u(B[4].substr(B[4].length - x.length)) + x), w += x;
                if (B = E.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return C = Math.min(Math.max(B[1].length, B[4].length), 7), R + ((_ = g(A, Math.pow(10, C) - 1, !0))[0] || (_[1] ? "" : "0")) + " " + (_[1] ? a(_[1], C) + B[2] + "/" + B[3] + i(_[2], C) : r(" ", 2 * C + 1 + B[2].length + B[3].length));
                if (B = E.match(/^[#0?]+$/)) return w = o(S, 0), E.length <= w.length ? w : u(E.substr(0, E.length - w.length)) + w;
                if (B = E.match(/^([#0?]+)\.([#0]+)$/)) {
                    w = "" + S.toFixed(Math.min(B[2].length, 10)).replace(/([^0])0+$/, "$1"), C = w.indexOf(".");
                    var I = E.indexOf(".") - C,
                        D = E.length - w.length - I;
                    return u(E.substr(0, I) + w + E.substr(E.length - D))
                }
                if (B = E.match(/^00,000\.([#0]*0)$/)) return C = p(S, B[1].length), S < 0 ? "-" + m(v, E, -S) : y(function(e) {
                    return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? 0 | e : e - 1 | 0) : "" + Math.floor(e)
                }(S)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, (function(e) {
                    return "00," + (e.length < 3 ? n(0, 3 - e.length) : "") + e
                })) + "." + n(C, B[1].length);
                switch (E) {
                    case "###,##0.00":
                        return m(v, "#,##0.00", S);
                    case "###,###":
                    case "##,###":
                    case "#,###":
                        var O = y(o(A, 0));
                        return "0" !== O ? R + O : "";
                    case "###,###.00":
                        return m(v, "###,##0.00", S).replace(/^0\./, ".");
                    case "#,###.00":
                        return m(v, "#,##0.00", S).replace(/^0\./, ".")
                }
                throw new Error("unsupported format |" + E + "|")
            }

            function v(e, t) {
                var r, n = e.indexOf("E") - e.indexOf(".") - 1;
                if (e.match(/^#+0.0E\+0$/)) {
                    if (0 == t) return "0.0E+0";
                    if (t < 0) return "-" + v(e, -t);
                    var a = e.indexOf("."); - 1 === a && (a = e.indexOf("E"));
                    var i = Math.floor(Math.log(t) * Math.LOG10E) % a;
                    if (i < 0 && (i += a), !(r = (t / Math.pow(10, i)).toPrecision(n + 1 + (a + i) % a)).match(/[Ee]/)) {
                        var s = Math.floor(Math.log(t) * Math.LOG10E); - 1 === r.indexOf(".") ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i), r = r.replace(/\+-/, "-")
                    }
                    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, (function(e, t, r, n) {
                        return t + r + n.substr(0, (a + i) % a) + "." + n.substr(i) + "E"
                    }))
                } else r = t.toExponential(n);
                return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E")
            }

            function E(s, o, d) {
                if (40 === s.charCodeAt(0) && !o.match(f)) {
                    var p = o.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                    return d >= 0 ? E("n", p, d) : "(" + E("n", p, -d) + ")"
                }
                if (44 === o.charCodeAt(o.length - 1)) return function(e, t, r) {
                    for (var n = t.length - 1; 44 === t.charCodeAt(n - 1);) --n;
                    return T(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)))
                }(s, o, d);
                if (-1 !== o.indexOf("%")) return function(t, n, a) {
                    var i = n.replace(e, ""),
                        s = n.length - i.length;
                    return T(t, i, a * Math.pow(10, 2 * s)) + r("%", s)
                }(s, o, d);
                if (-1 !== o.indexOf("E")) return v(o, d);
                if (36 === o.charCodeAt(0)) return "$" + E(s, o.substr(" " == o.charAt(1) ? 2 : 1), d);
                var m, S, b, w, B = Math.abs(d),
                    C = d < 0 ? "-" : "";
                if (o.match(/^00+$/)) return C + n(B, o.length);
                if (o.match(/^[#?]+$/)) return m = "" + d, 0 === d && (m = ""), m.length > o.length ? m : u(o.substr(0, o.length - m.length)) + m;
                if (S = o.match(l)) return function(e, t, n) {
                    return n + (0 === t ? "" : "" + t) + r(" ", e[1].length + 2 + e[4].length)
                }(S, B, C);
                if (o.match(/^#+0+$/)) return C + n(B, o.length - o.indexOf("0"));
                if (S = o.match(c)) return m = (m = ("" + d).replace(/^([^\.]+)$/, "$1." + u(S[1])).replace(/\.$/, "." + u(S[1]))).replace(/\.(\d*)$/, (function(e, t) {
                    return "." + t + r("0", u(S[1]).length - t.length)
                })), -1 !== o.indexOf("0.") ? m : m.replace(/^0\./, ".");
                if (o = o.replace(/^#+([0.])/, "$1"), S = o.match(/^(0*)\.(#*)$/)) return C + ("" + B).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, S[1].length ? "0." : ".");
                if (S = o.match(/^#{1,3},##0(\.?)$/)) return C + y("" + B);
                if (S = o.match(/^#,##0\.([#0]*0)$/)) return d < 0 ? "-" + E(s, o, -d) : y("" + d) + "." + r("0", S[1].length);
                if (S = o.match(/^#,#*,#0/)) return E(s, o.replace(/^#,#*,/, ""), d);
                if (S = o.match(/^([0#]+)(\\?-([0#]+))+$/)) return m = t(E(s, o.replace(/[\\-]/g, ""), d)), b = 0, t(t(o.replace(/\\/g, "")).replace(/[0#]/g, (function(e) {
                    return b < m.length ? m.charAt(b++) : "0" === e ? "0" : ""
                })));
                if (o.match(h)) return "(" + (m = E(s, "##########", d)).substr(0, 3) + ") " + m.substr(3, 3) + "-" + m.substr(6);
                var _ = "";
                if (S = o.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return b = Math.min(S[4].length, 7), w = g(B, Math.pow(10, b) - 1, !1), m = "" + C, " " == (_ = T("n", S[1], w[1])).charAt(_.length - 1) && (_ = _.substr(0, _.length - 1) + "0"), m += _ + S[2] + "/" + S[3], (_ = i(w[2], b)).length < S[4].length && (_ = u(S[4].substr(S[4].length - _.length)) + _), m += _;
                if (S = o.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return b = Math.min(Math.max(S[1].length, S[4].length), 7), C + ((w = g(B, Math.pow(10, b) - 1, !0))[0] || (w[1] ? "" : "0")) + " " + (w[1] ? a(w[1], b) + S[2] + "/" + S[3] + i(w[2], b) : r(" ", 2 * b + 1 + S[2].length + S[3].length));
                if (S = o.match(/^[#0?]+$/)) return m = "" + d, o.length <= m.length ? m : u(o.substr(0, o.length - m.length)) + m;
                if (S = o.match(/^([#0]+)\.([#0]+)$/)) {
                    m = "" + d.toFixed(Math.min(S[2].length, 10)).replace(/([^0])0+$/, "$1"), b = m.indexOf(".");
                    var A = o.indexOf(".") - b,
                        R = o.length - m.length - A;
                    return u(o.substr(0, A) + m + o.substr(o.length - R))
                }
                if (S = o.match(/^00,000\.([#0]*0)$/)) return d < 0 ? "-" + E(s, o, -d) : y("" + d).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, (function(e) {
                    return "00," + (e.length < 3 ? n(0, 3 - e.length) : "") + e
                })) + "." + n(0, S[1].length);
                switch (o) {
                    case "###,###":
                    case "##,###":
                    case "#,###":
                        var x = y("" + B);
                        return "0" !== x ? C + x : "";
                    default:
                        if (o.match(/\.[0#?]*$/)) return E(s, o.slice(0, o.lastIndexOf(".")), d) + u(o.slice(o.lastIndexOf(".")))
                }
                throw new Error("unsupported format |" + o + "|")
            }
            return function(e, t, r) {
                return (0 | r) === r ? E(e, t, r) : m(e, t, r)
            }
        }();

        function A(e) {
            for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n) switch (e.charCodeAt(n)) {
                case 34:
                    r = !r;
                    break;
                case 95:
                case 42:
                case 92:
                    ++n;
                    break;
                case 59:
                    t[t.length] = e.substr(a, n - a), a = n + 1
            }
            if (t[t.length] = e.substr(a), !0 === r) throw new Error("Format |" + e + "| unterminated string ");
            return t
        }
        e._split = A;
        var R = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;

        function x(e) {
            for (var t = 0, r = "", n = ""; t < e.length;) switch (r = e.charAt(t)) {
                case "G":
                    l(e, t) && (t += 6), t++;
                    break;
                case '"':
                    for (; 34 !== e.charCodeAt(++t) && t < e.length;);
                    ++t;
                    break;
                case "\\":
                case "_":
                    t += 2;
                    break;
                case "@":
                    ++t;
                    break;
                case "B":
                case "b":
                    if ("1" === e.charAt(t + 1) || "2" === e.charAt(t + 1)) return !0;
                case "M":
                case "D":
                case "Y":
                case "H":
                case "S":
                case "E":
                case "m":
                case "d":
                case "y":
                case "h":
                case "s":
                case "e":
                case "g":
                    return !0;
                case "A":
                case "a":
                case "上":
                    if ("A/P" === e.substr(t, 3).toUpperCase()) return !0;
                    if ("AM/PM" === e.substr(t, 5).toUpperCase()) return !0;
                    if ("上午/下午" === e.substr(t, 5).toUpperCase()) return !0;
                    ++t;
                    break;
                case "[":
                    for (n = r;
                        "]" !== e.charAt(t++) && t < e.length;) n += e.charAt(t);
                    if (n.match(R)) return !0;
                    break;
                case ".":
                case "0":
                case "#":
                    for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || "\\" == r && "-" == e.charAt(t + 1) && "0#".indexOf(e.charAt(t + 2)) > -1););
                    break;
                case "?":
                    for (; e.charAt(++t) === r;);
                    break;
                case "*":
                    ++t, " " != e.charAt(t) && "*" != e.charAt(t) || ++t;
                    break;
                case "(":
                case ")":
                    ++t;
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1;);
                    break;
                default:
                    ++t
            }
            return !1
        }

        function I(e, t, r, n) {
            for (var a, i, s, o = [], c = "", f = 0, h = "", u = "t", d = "H"; f < e.length;) switch (h = e.charAt(f)) {
                case "G":
                    if (!l(e, f)) throw new Error("unrecognized character " + h + " in " + e);
                    o[o.length] = {
                        t: "G",
                        v: "General"
                    }, f += 7;
                    break;
                case '"':
                    for (c = ""; 34 !== (s = e.charCodeAt(++f)) && f < e.length;) c += String.fromCharCode(s);
                    o[o.length] = {
                        t: "t",
                        v: c
                    }, ++f;
                    break;
                case "\\":
                    var p = e.charAt(++f),
                        m = "(" === p || ")" === p ? p : "t";
                    o[o.length] = {
                        t: m,
                        v: p
                    }, ++f;
                    break;
                case "_":
                    o[o.length] = {
                        t: "t",
                        v: " "
                    }, f += 2;
                    break;
                case "@":
                    o[o.length] = {
                        t: "T",
                        v: t
                    }, ++f;
                    break;
                case "B":
                case "b":
                    if ("1" === e.charAt(f + 1) || "2" === e.charAt(f + 1)) {
                        if (null == a && null == (a = v(t, r, "2" === e.charAt(f + 1)))) return "";
                        o[o.length] = {
                            t: "X",
                            v: e.substr(f, 2)
                        }, u = h, f += 2;
                        break
                    }
                case "M":
                case "D":
                case "Y":
                case "H":
                case "S":
                case "E":
                    h = h.toLowerCase();
                case "m":
                case "d":
                case "y":
                case "h":
                case "s":
                case "e":
                case "g":
                    if (t < 0) return "";
                    if (null == a && null == (a = v(t, r))) return "";
                    for (c = h; ++f < e.length && e.charAt(f).toLowerCase() === h;) c += h;
                    "m" === h && "h" === u.toLowerCase() && (h = "M"), "h" === h && (h = d), o[o.length] = {
                        t: h,
                        v: c
                    }, u = h;
                    break;
                case "A":
                case "a":
                case "上":
                    var g = {
                        t: h,
                        v: h
                    };
                    if (null == a && (a = v(t, r)), "A/P" === e.substr(f, 3).toUpperCase() ? (null != a && (g.v = a.H >= 12 ? "P" : "A"), g.t = "T", d = "h", f += 3) : "AM/PM" === e.substr(f, 5).toUpperCase() ? (null != a && (g.v = a.H >= 12 ? "PM" : "AM"), g.t = "T", f += 5, d = "h") : "上午/下午" === e.substr(f, 5).toUpperCase() ? (null != a && (g.v = a.H >= 12 ? "下午" : "上午"), g.t = "T", f += 5, d = "h") : (g.t = "t", ++f), null == a && "T" === g.t) return "";
                    o[o.length] = g, u = h;
                    break;
                case "[":
                    for (c = h;
                        "]" !== e.charAt(f++) && f < e.length;) c += e.charAt(f);
                    if ("]" !== c.slice(-1)) throw 'unterminated "[" block: |' + c + "|";
                    if (c.match(R)) {
                        if (null == a && null == (a = v(t, r))) return "";
                        o[o.length] = {
                            t: "Z",
                            v: c.toLowerCase()
                        }, u = c.charAt(1)
                    } else c.indexOf("$") > -1 && (c = (c.match(/\$([^-\[\]]*)/) || [])[1] || "$", x(e) || (o[o.length] = {
                        t: "t",
                        v: c
                    }));
                    break;
                case ".":
                    if (null != a) {
                        for (c = h; ++f < e.length && "0" === (h = e.charAt(f));) c += h;
                        o[o.length] = {
                            t: "s",
                            v: c
                        };
                        break
                    }
                case "0":
                case "#":
                    for (c = h; ++f < e.length && "0#?.,E+-%".indexOf(h = e.charAt(f)) > -1;) c += h;
                    o[o.length] = {
                        t: "n",
                        v: c
                    };
                    break;
                case "?":
                    for (c = h; e.charAt(++f) === h;) c += h;
                    o[o.length] = {
                        t: h,
                        v: c
                    }, u = h;
                    break;
                case "*":
                    ++f, " " != e.charAt(f) && "*" != e.charAt(f) || ++f;
                    break;
                case "(":
                case ")":
                    o[o.length] = {
                        t: 1 === n ? "t" : h,
                        v: h
                    }, ++f;
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    for (c = h; f < e.length && "0123456789".indexOf(e.charAt(++f)) > -1;) c += e.charAt(f);
                    o[o.length] = {
                        t: "D",
                        v: c
                    };
                    break;
                case " ":
                    o[o.length] = {
                        t: h,
                        v: h
                    }, ++f;
                    break;
                case "$":
                    o[o.length] = {
                        t: "t",
                        v: "$"
                    }, ++f;
                    break;
                default:
                    if (-1 === ",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(h)) throw new Error("unrecognized character " + h + " in " + e);
                    o[o.length] = {
                        t: "t",
                        v: h
                    }, ++f
            }
            var E, S = 0,
                b = 0;
            for (f = o.length - 1, u = "t"; f >= 0; --f) switch (o[f].t) {
                case "h":
                case "H":
                    o[f].t = d, u = "h", S < 1 && (S = 1);
                    break;
                case "s":
                    (E = o[f].v.match(/\.0+$/)) && (b = Math.max(b, E[0].length - 1)), S < 3 && (S = 3);
                case "d":
                case "y":
                case "M":
                case "e":
                    u = o[f].t;
                    break;
                case "m":
                    "s" === u && (o[f].t = "M", S < 2 && (S = 2));
                    break;
                case "X":
                    break;
                case "Z":
                    S < 1 && o[f].v.match(/[Hh]/) && (S = 1), S < 2 && o[f].v.match(/[Mm]/) && (S = 2), S < 3 && o[f].v.match(/[Ss]/) && (S = 3)
            }
            switch (S) {
                case 0:
                    break;
                case 1:
                    a.u >= .5 && (a.u = 0, ++a.S), a.S >= 60 && (a.S = 0, ++a.M), a.M >= 60 && (a.M = 0, ++a.H);
                    break;
                case 2:
                    a.u >= .5 && (a.u = 0, ++a.S), a.S >= 60 && (a.S = 0, ++a.M)
            }
            var w, B = "";
            for (f = 0; f < o.length; ++f) switch (o[f].t) {
                case "t":
                case "T":
                case " ":
                case "D":
                    break;
                case "X":
                    o[f].v = "", o[f].t = ";";
                    break;
                case "d":
                case "m":
                case "y":
                case "h":
                case "H":
                case "M":
                case "s":
                case "e":
                case "b":
                case "Z":
                    o[f].v = _(o[f].t.charCodeAt(0), o[f].v, a, b), o[f].t = "t";
                    break;
                case "n":
                case "?":
                    for (w = f + 1; null != o[w] && ("?" === (h = o[w].t) || "D" === h || (" " === h || "t" === h) && null != o[w + 1] && ("?" === o[w + 1].t || "t" === o[w + 1].t && "/" === o[w + 1].v) || "(" === o[f].t && (" " === h || "n" === h || ")" === h) || "t" === h && ("/" === o[w].v || " " === o[w].v && null != o[w + 1] && "?" == o[w + 1].t));) o[f].v += o[w].v, o[w] = {
                        v: "",
                        t: ";"
                    }, ++w;
                    B += o[f].v, f = w - 1;
                    break;
                case "G":
                    o[f].t = "t", o[f].v = C(t, r)
            }
            var y, A, I = "";
            if (B.length > 0) {
                40 == B.charCodeAt(0) ? (y = t < 0 && 45 === B.charCodeAt(0) ? -t : t, A = T("n", B, y)) : (A = T("n", B, y = t < 0 && n > 1 ? -t : t), y < 0 && o[0] && "t" == o[0].t && (A = A.substr(1), o[0].v = "-" + o[0].v)), w = A.length - 1;
                var D = o.length;
                for (f = 0; f < o.length; ++f)
                    if (null != o[f] && "t" != o[f].t && o[f].v.indexOf(".") > -1) {
                        D = f;
                        break
                    } var O = o.length;
                if (D === o.length && -1 === A.indexOf("E")) {
                    for (f = o.length - 1; f >= 0; --f) null != o[f] && -1 !== "n?".indexOf(o[f].t) && (w >= o[f].v.length - 1 ? (w -= o[f].v.length, o[f].v = A.substr(w + 1, o[f].v.length)) : w < 0 ? o[f].v = "" : (o[f].v = A.substr(0, w + 1), w = -1), o[f].t = "t", O = f);
                    w >= 0 && O < o.length && (o[O].v = A.substr(0, w + 1) + o[O].v)
                } else if (D !== o.length && -1 === A.indexOf("E")) {
                    for (w = A.indexOf(".") - 1, f = D; f >= 0; --f)
                        if (null != o[f] && -1 !== "n?".indexOf(o[f].t)) {
                            for (i = o[f].v.indexOf(".") > -1 && f === D ? o[f].v.indexOf(".") - 1 : o[f].v.length - 1, I = o[f].v.substr(i + 1); i >= 0; --i) w >= 0 && ("0" === o[f].v.charAt(i) || "#" === o[f].v.charAt(i)) && (I = A.charAt(w--) + I);
                            o[f].v = I, o[f].t = "t", O = f
                        } for (w >= 0 && O < o.length && (o[O].v = A.substr(0, w + 1) + o[O].v), w = A.indexOf(".") + 1, f = D; f < o.length; ++f)
                        if (null != o[f] && (-1 !== "n?(".indexOf(o[f].t) || f === D)) {
                            for (i = o[f].v.indexOf(".") > -1 && f === D ? o[f].v.indexOf(".") + 1 : 0, I = o[f].v.substr(0, i); i < o[f].v.length; ++i) w < A.length && (I += A.charAt(w++));
                            o[f].v = I, o[f].t = "t", O = f
                        }
                }
            }
            for (f = 0; f < o.length; ++f) null != o[f] && "n?".indexOf(o[f].t) > -1 && (y = n > 1 && t < 0 && f > 0 && "-" === o[f - 1].v ? -t : t, o[f].v = T(o[f].t, o[f].v, y), o[f].t = "t");
            var P = "";
            for (f = 0; f !== o.length; ++f) null != o[f] && (P += o[f].v);
            return P
        }
        e.is_date = x, e._eval = I;
        var D = /\[[=<>]/,
            O = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;

        function P(e, t) {
            if (null == t) return !1;
            var r = parseFloat(t[2]);
            switch (t[1]) {
                case "=":
                    if (e == r) return !0;
                    break;
                case ">":
                    if (e > r) return !0;
                    break;
                case "<":
                    if (e < r) return !0;
                    break;
                case "<>":
                    if (e != r) return !0;
                    break;
                case ">=":
                    if (e >= r) return !0;
                    break;
                case "<=":
                    if (e <= r) return !0
            }
            return !1
        }

        function k(e, t, r) {
            null == r && (r = {});
            var n = "";
            switch (typeof e) {
                case "string":
                    n = "m/d/yy" == e && r.dateNF ? r.dateNF : e;
                    break;
                case "number":
                    null == (n = 14 == e && r.dateNF ? r.dateNF : (null != r.table ? r.table : u)[e]) && (n = r.table && r.table[d[e]] || u[d[e]]), null == n && (n = m[e] || "General")
            }
            if (l(n, 0)) return C(t, r);
            t instanceof Date && (t = w(t, r.date1904));
            var a = function(e, t) {
                var r = A(e),
                    n = r.length,
                    a = r[n - 1].indexOf("@");
                if (n < 4 && a > -1 && --n, r.length > 4) throw new Error("cannot find right format for |" + r.join("|") + "|");
                if ("number" != typeof t) return [4, 4 === r.length || a > -1 ? r[r.length - 1] : "@"];
                switch (r.length) {
                    case 1:
                        r = a > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
                        break;
                    case 2:
                        r = a > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
                        break;
                    case 3:
                        r = a > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"]
                }
                var i = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
                if (-1 === r[0].indexOf("[") && -1 === r[1].indexOf("[")) return [n, i];
                if (null != r[0].match(D) || null != r[1].match(D)) {
                    var s = r[0].match(O),
                        o = r[1].match(O);
                    return P(t, s) ? [n, r[0]] : P(t, o) ? [n, r[1]] : [n, r[null != s && null != o ? 2 : 1]]
                }
                return [n, i]
            }(n, t);
            if (l(a[1])) return C(t, r);
            if (!0 === t) t = "TRUE";
            else if (!1 === t) t = "FALSE";
            else if ("" === t || null == t) return "";
            return I(a[1], t, r, a[0])
        }

        function F(e, t) {
            if ("number" != typeof t) {
                t = +t || -1;
                for (var r = 0; r < 392; ++r)
                    if (null != u[r]) {
                        if (u[r] == e) {
                            t = r;
                            break
                        }
                    } else t < 0 && (t = r);
                t < 0 && (t = 391)
            }
            return u[t] = e, t
        }
        e.load = F, e._table = u, e.get_table = function() {
            return u
        }, e.load_table = function(e) {
            for (var t = 0; 392 != t; ++t) void 0 !== e[t] && F(e[t], t)
        }, e.init_table = h, e.format = k
    };
U(L);
L._table[22], L._table[15], L._table[14], L._table[19], L._table[18], L._table[20], L._table[2], L._table[4], L._table[10], L._table[11];
var H = {
        5: '"$"#,##0_);\\("$"#,##0\\)',
        6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
        7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
        8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
        23: "General",
        24: "General",
        25: "General",
        26: "General",
        27: "m/d/yy",
        28: "m/d/yy",
        29: "m/d/yy",
        30: "m/d/yy",
        31: "m/d/yy",
        32: "h:mm:ss",
        33: "h:mm:ss",
        34: "h:mm:ss",
        35: "h:mm:ss",
        36: "m/d/yy",
        41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
        42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
        43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
        44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
        50: "m/d/yy",
        51: "m/d/yy",
        52: "m/d/yy",
        53: "m/d/yy",
        54: "m/d/yy",
        55: "m/d/yy",
        56: "m/d/yy",
        57: "m/d/yy",
        58: "m/d/yy",
        59: "0",
        60: "0.00",
        61: "#,##0",
        62: "#,##0.00",
        63: '"$"#,##0_);\\("$"#,##0\\)',
        64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
        65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
        66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
        67: "0%",
        68: "0.00%",
        69: "# ?/?",
        70: "# ??/??",
        71: "m/d/yy",
        72: "m/d/yy",
        73: "d-mmm-yy",
        74: "d-mmm",
        75: "mmm-yy",
        76: "h:mm",
        77: "h:mm:ss",
        78: "m/d/yy h:mm",
        79: "mm:ss",
        80: "[h]:mm:ss",
        81: "mmss.0"
    },
    V = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
var W;
! function(e) {
    function t() {
        for (var e = 0, t = new Array(256), r = 0; 256 != r; ++r) e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = r) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1, t[r] = e;
        return "undefined" != typeof Int32Array ? new Int32Array(t) : t
    }
    e.version = "1.2.0";
    var r = t();

    function n(e) {
        var t = 0,
            r = 0,
            n = 0,
            a = "undefined" != typeof Int32Array ? new Int32Array(4096) : new Array(4096);
        for (n = 0; 256 != n; ++n) a[n] = e[n];
        for (n = 0; 256 != n; ++n)
            for (r = e[n], t = 256 + n; t < 4096; t += 256) r = a[t] = r >>> 8 ^ e[255 & r];
        var i = [];
        for (n = 1; 16 != n; ++n) i[n - 1] = "undefined" != typeof Int32Array ? a.subarray(256 * n, 256 * n + 256) : a.slice(256 * n, 256 * n + 256);
        return i
    }
    var a = n(r),
        i = a[0],
        s = a[1],
        o = a[2],
        l = a[3],
        c = a[4],
        f = a[5],
        h = a[6],
        u = a[7],
        d = a[8],
        p = a[9],
        m = a[10],
        g = a[11],
        v = a[12],
        E = a[13],
        S = a[14];

    function b(e, t) {
        for (var n = -1 ^ t, a = 0, i = e.length; a < i;) n = n >>> 8 ^ r[255 & (n ^ e.charCodeAt(a++))];
        return ~n
    }

    function w(e, t) {
        for (var n = -1 ^ t, a = e.length - 15, b = 0; b < a;) n = S[e[b++] ^ 255 & n] ^ E[e[b++] ^ n >> 8 & 255] ^ v[e[b++] ^ n >> 16 & 255] ^ g[e[b++] ^ n >>> 24] ^ m[e[b++]] ^ p[e[b++]] ^ d[e[b++]] ^ u[e[b++]] ^ h[e[b++]] ^ f[e[b++]] ^ c[e[b++]] ^ l[e[b++]] ^ o[e[b++]] ^ s[e[b++]] ^ i[e[b++]] ^ r[e[b++]];
        for (a += 15; b < a;) n = n >>> 8 ^ r[255 & (n ^ e[b++])];
        return ~n
    }

    function B(e, t) {
        for (var n = -1 ^ t, a = 0, i = e.length, s = 0, o = 0; a < i;)(s = e.charCodeAt(a++)) < 128 ? n = n >>> 8 ^ r[255 & (n ^ s)] : s < 2048 ? n = (n = n >>> 8 ^ r[255 & (n ^ (192 | s >> 6 & 31))]) >>> 8 ^ r[255 & (n ^ (128 | 63 & s))] : s >= 55296 && s < 57344 ? (s = 64 + (1023 & s), o = 1023 & e.charCodeAt(a++), n = (n = (n = (n = n >>> 8 ^ r[255 & (n ^ (240 | s >> 8 & 7))]) >>> 8 ^ r[255 & (n ^ (128 | s >> 2 & 63))]) >>> 8 ^ r[255 & (n ^ (128 | o >> 6 & 15 | (3 & s) << 4))]) >>> 8 ^ r[255 & (n ^ (128 | 63 & o))]) : n = (n = (n = n >>> 8 ^ r[255 & (n ^ (224 | s >> 12 & 15))]) >>> 8 ^ r[255 & (n ^ (128 | s >> 6 & 63))]) >>> 8 ^ r[255 & (n ^ (128 | 63 & s))];
        return ~n
    }
    e.table = r, e.bstr = b, e.buf = w, e.str = B
}(W = {});
var X = function() {
    var e, t = {};

    function r(e) {
        if ("/" == e.charAt(e.length - 1)) return -1 === e.slice(0, -1).indexOf("/") ? e : r(e.slice(0, -1));
        var t = e.lastIndexOf("/");
        return -1 === t ? e : e.slice(0, t + 1)
    }

    function n(e) {
        if ("/" == e.charAt(e.length - 1)) return n(e.slice(0, -1));
        var t = e.lastIndexOf("/");
        return -1 === t ? e : e.slice(t + 1)
    }

    function a(e, t) {
        "string" == typeof t && (t = new Date(t));
        var r = t.getHours();
        r = (r = r << 6 | t.getMinutes()) << 5 | t.getSeconds() >>> 1, e.write_shift(2, r);
        var n = t.getFullYear() - 1980;
        n = (n = n << 4 | t.getMonth() + 1) << 5 | t.getDate(), e.write_shift(2, n)
    }

    function i(e) {
        Vt(e, 0);
        for (var t = {}, r = 0; e.l <= e.length - 4;) {
            var n = e.read_shift(2),
                a = e.read_shift(2),
                i = e.l + a,
                s = {};
            if (21589 === n) 1 & (r = e.read_shift(1)) && (s.mtime = e.read_shift(4)), a > 5 && (2 & r && (s.atime = e.read_shift(4)), 4 & r && (s.ctime = e.read_shift(4))), s.mtime && (s.mt = new Date(1e3 * s.mtime));
            e.l = i, t[n] = s
        }
        return t
    }

    function s() {
        return e || (e = {})
    }

    function o(e, t) {
        if (80 == e[0] && 75 == e[1]) return ge(e, t);
        if (109 == (32 | e[0]) && 105 == (32 | e[1])) return function(e, t) {
            if ("mime-version:" != C(e.slice(0, 13)).toLowerCase()) throw new Error("Unsupported MAD header");
            var r = t && t.root || "",
                n = (T && c.isBuffer(e) ? e.toString("binary") : C(e)).split("\r\n"),
                a = 0,
                i = "";
            for (a = 0; a < n.length; ++a)
                if (i = n[a], /^Content-Location:/i.test(i) && (i = i.slice(i.indexOf("file")), r || (r = i.slice(0, i.lastIndexOf("/") + 1)), i.slice(0, r.length) != r))
                    for (; r.length > 0 && (r = (r = r.slice(0, r.length - 1)).slice(0, r.lastIndexOf("/") + 1), i.slice(0, r.length) != r););
            var s = (n[1] || "").match(/boundary="(.*?)"/);
            if (!s) throw new Error("MAD cannot find boundary");
            var o = "--" + (s[1] || ""),
                l = {
                    FileIndex: [],
                    FullPaths: []
                };
            d(l);
            var f, h = 0;
            for (a = 0; a < n.length; ++a) {
                var u = n[a];
                u !== o && u !== o + "--" || (h++ && Be(l, n.slice(f, a), r), f = a)
            }
            return l
        }(e, t);
        if (e.length < 512) throw new Error("CFB file size " + e.length + " < 512");
        var r, n, a, i, s, o, p = 512,
            m = [],
            g = e.slice(0, 512);
        Vt(g, 0);
        var v = function(e) {
            if (80 == e[e.l] && 75 == e[e.l + 1]) return [0, 0];
            e.chk(S, "Header Signature: "), e.l += 16;
            var t = e.read_shift(2, "u");
            return [e.read_shift(2, "u"), t]
        }(g);
        switch (r = v[0]) {
            case 3:
                p = 512;
                break;
            case 4:
                p = 4096;
                break;
            case 0:
                if (0 == v[1]) return ge(e, t);
            default:
                throw new Error("Major Version: Expected 3 or 4 saw " + r)
        }
        512 !== p && Vt(g = e.slice(0, p), 28);
        var b = e.slice(0, p);
        ! function(e, t) {
            var r = 9;
            switch (e.l += 2, r = e.read_shift(2)) {
                case 9:
                    if (3 != t) throw new Error("Sector Shift: Expected 9 saw " + r);
                    break;
                case 12:
                    if (4 != t) throw new Error("Sector Shift: Expected 12 saw " + r);
                    break;
                default:
                    throw new Error("Sector Shift: Expected 9 or 12 saw " + r)
            }
            e.chk("0600", "Mini Sector Shift: "), e.chk("000000000000", "Reserved: ")
        }(g, r);
        var w = g.read_shift(4, "i");
        if (3 === r && 0 !== w) throw new Error("# Directory Sectors: Expected 0 saw " + w);
        g.l += 4, i = g.read_shift(4, "i"), g.l += 4, g.chk("00100000", "Mini Stream Cutoff Size: "), s = g.read_shift(4, "i"), n = g.read_shift(4, "i"), o = g.read_shift(4, "i"), a = g.read_shift(4, "i");
        for (var B = -1, _ = 0; _ < 109 && !((B = g.read_shift(4, "i")) < 0); ++_) m[_] = B;
        var y = function(e, t) {
            for (var r = Math.ceil(e.length / t) - 1, n = [], a = 1; a < r; ++a) n[a - 1] = e.slice(a * t, (a + 1) * t);
            return n[r - 1] = e.slice(r * t), n
        }(e, p);
        f(o, a, y, p, m);
        var A = function(e, t, r, n) {
            var a = e.length,
                i = [],
                s = [],
                o = [],
                l = [],
                c = n - 1,
                f = 0,
                h = 0,
                u = 0,
                d = 0;
            for (f = 0; f < a; ++f)
                if (o = [], (u = f + t) >= a && (u -= a), !s[u]) {
                    l = [];
                    var p = [];
                    for (h = u; h >= 0;) {
                        p[h] = !0, s[h] = !0, o[o.length] = h, l.push(e[h]);
                        var m = r[Math.floor(4 * h / n)];
                        if (n < 4 + (d = 4 * h & c)) throw new Error("FAT boundary crossed: " + h + " 4 " + n);
                        if (!e[m]) break;
                        if (p[h = Ft(e[m], d)]) break
                    }
                    i[u] = {
                        nodes: o,
                        data: ht([l])
                    }
                } return i
        }(y, i, m, p);
        A[i].name = "!Directory", n > 0 && s !== E && (A[s].name = "!MiniFAT"), A[m[0]].name = "!FAT", A.fat_addrs = m, A.ssz = p;
        var R = [],
            x = [],
            I = [];
        ! function(e, t, r, n, a, i, s, o) {
            for (var c, f = 0, d = n.length ? 2 : 0, p = t[e].data, m = 0, g = 0; m < p.length; m += 128) {
                var v = p.slice(m, m + 128);
                Vt(v, 64), g = v.read_shift(2), c = dt(v, 0, g - d), n.push(c);
                var S = {
                    name: c,
                    type: v.read_shift(1),
                    color: v.read_shift(1),
                    L: v.read_shift(4, "i"),
                    R: v.read_shift(4, "i"),
                    C: v.read_shift(4, "i"),
                    clsid: v.read_shift(16),
                    state: v.read_shift(4, "i"),
                    start: 0,
                    size: 0
                };
                0 !== v.read_shift(2) + v.read_shift(2) + v.read_shift(2) + v.read_shift(2) && (S.ct = u(v, v.l - 8)), 0 !== v.read_shift(2) + v.read_shift(2) + v.read_shift(2) + v.read_shift(2) && (S.mt = u(v, v.l - 8)), S.start = v.read_shift(4, "i"), S.size = v.read_shift(4, "i"), S.size < 0 && S.start < 0 && (S.size = S.type = 0, S.start = E, S.name = ""), 5 === S.type ? (f = S.start, a > 0 && f !== E && (t[f].name = "!StreamData")) : S.size >= 4096 ? (S.storage = "fat", void 0 === t[S.start] && (t[S.start] = h(r, S.start, t.fat_addrs, t.ssz)), t[S.start].name = S.name, S.content = t[S.start].data.slice(0, S.size)) : (S.storage = "minifat", S.size < 0 ? S.size = 0 : f !== E && S.start !== E && t[f] && (S.content = l(S, t[f].data, (t[o] || {}).data))), S.content && Vt(S.content, 0), i[c] = S, s.push(S)
            }
        }(i, A, y, R, n, {}, x, s),
        function(e, t, r) {
            for (var n = 0, a = 0, i = 0, s = 0, o = 0, l = r.length, c = [], f = []; n < l; ++n) c[n] = f[n] = n, t[n] = r[n];
            for (; o < f.length; ++o) a = e[n = f[o]].L, i = e[n].R, s = e[n].C, c[n] === n && (-1 !== a && c[a] !== a && (c[n] = c[a]), -1 !== i && c[i] !== i && (c[n] = c[i])), -1 !== s && (c[s] = n), -1 !== a && n != c[n] && (c[a] = c[n], f.lastIndexOf(a) < o && f.push(a)), -1 !== i && n != c[n] && (c[i] = c[n], f.lastIndexOf(i) < o && f.push(i));
            for (n = 1; n < l; ++n) c[n] === n && (-1 !== i && c[i] !== i ? c[n] = c[i] : -1 !== a && c[a] !== a && (c[n] = c[a]));
            for (n = 1; n < l; ++n)
                if (0 !== e[n].type) {
                    if ((o = n) != c[o])
                        do {
                            o = c[o], t[n] = t[o] + "/" + t[n]
                        } while (0 !== o && -1 !== c[o] && o != c[o]);
                    c[n] = -1
                } for (t[0] += "/", n = 1; n < l; ++n) 2 !== e[n].type && (t[n] += "/")
        }(x, I, R), R.shift();
        var D = {
            FileIndex: x,
            FullPaths: I
        };
        return t && t.raw && (D.raw = {
            header: b,
            sectors: y
        }), D
    }

    function l(e, t, r) {
        for (var n = e.start, a = e.size, i = [], s = n; r && a > 0 && s >= 0;) i.push(t.slice(s * v, s * v + v)), a -= v, s = Ft(r, 4 * s);
        return 0 === i.length ? Xt(0) : F(i).slice(0, e.size)
    }

    function f(e, t, r, n, a) {
        var i = E;
        if (e === E) {
            if (0 !== t) throw new Error("DIFAT chain shorter than expected")
        } else if (-1 !== e) {
            var s = r[e],
                o = (n >>> 2) - 1;
            if (!s) return;
            for (var l = 0; l < o && (i = Ft(s, 4 * l)) !== E; ++l) a.push(i);
            f(Ft(s, n - 4), t - 1, r, n, a)
        }
    }

    function h(e, t, r, n, a) {
        var i = [],
            s = [];
        a || (a = []);
        var o = n - 1,
            l = 0,
            c = 0;
        for (l = t; l >= 0;) {
            a[l] = !0, i[i.length] = l, s.push(e[l]);
            var f = r[Math.floor(4 * l / n)];
            if (n < 4 + (c = 4 * l & o)) throw new Error("FAT boundary crossed: " + l + " 4 " + n);
            if (!e[f]) break;
            l = Ft(e[f], c)
        }
        return {
            nodes: i,
            data: ht([s])
        }
    }

    function u(e, t) {
        return new Date(1e3 * (kt(e, t + 4) / 1e7 * Math.pow(2, 32) + kt(e, t) / 1e7 - 11644473600))
    }

    function d(e, t) {
        var r = t || {},
            n = r.root || "Root Entry";
        if (e.FullPaths || (e.FullPaths = []), e.FileIndex || (e.FileIndex = []), e.FullPaths.length !== e.FileIndex.length) throw new Error("inconsistent CFB structure");
        0 === e.FullPaths.length && (e.FullPaths[0] = n + "/", e.FileIndex[0] = {
                name: n,
                type: 5
            }), r.CLSID && (e.FileIndex[0].clsid = r.CLSID),
            function(e) {
                var t = "Sh33tJ5";
                if (X.find(e, "/" + t)) return;
                var r = Xt(4);
                r[0] = 55, r[1] = r[3] = 50, r[2] = 54, e.FileIndex.push({
                    name: t,
                    type: 2,
                    content: r,
                    size: 4,
                    L: 69,
                    R: 69,
                    C: 69
                }), e.FullPaths.push(e.FullPaths[0] + t), p(e)
            }(e)
    }

    function p(e, t) {
        d(e);
        for (var a = !1, i = !1, s = e.FullPaths.length - 1; s >= 0; --s) {
            var o = e.FileIndex[s];
            switch (o.type) {
                case 0:
                    i ? a = !0 : (e.FileIndex.pop(), e.FullPaths.pop());
                    break;
                case 1:
                case 2:
                case 5:
                    i = !0, isNaN(o.R * o.L * o.C) && (a = !0), o.R > -1 && o.L > -1 && o.R == o.L && (a = !0);
                    break;
                default:
                    a = !0
            }
        }
        if (a || t) {
            var l = new Date(1987, 1, 19),
                c = 0,
                f = Object.create ? Object.create(null) : {},
                h = [];
            for (s = 0; s < e.FullPaths.length; ++s) f[e.FullPaths[s]] = !0, 0 !== e.FileIndex[s].type && h.push([e.FullPaths[s], e.FileIndex[s]]);
            for (s = 0; s < h.length; ++s) {
                var u = r(h[s][0]);
                (i = f[u]) || (h.push([u, {
                    name: n(u).replace("/", ""),
                    type: 1,
                    clsid: w,
                    ct: l,
                    mt: l,
                    content: null
                }]), f[u] = !0)
            }
            for (h.sort((function(e, t) {
                    return function(e, t) {
                        for (var r = e.split("/"), n = t.split("/"), a = 0, i = 0, s = Math.min(r.length, n.length); a < s; ++a) {
                            if (i = r[a].length - n[a].length) return i;
                            if (r[a] != n[a]) return r[a] < n[a] ? -1 : 1
                        }
                        return r.length - n.length
                    }(e[0], t[0])
                })), e.FullPaths = [], e.FileIndex = [], s = 0; s < h.length; ++s) e.FullPaths[s] = h[s][0], e.FileIndex[s] = h[s][1];
            for (s = 0; s < h.length; ++s) {
                var p = e.FileIndex[s],
                    m = e.FullPaths[s];
                if (p.name = n(m).replace("/", ""), p.L = p.R = p.C = -(p.color = 1), p.size = p.content ? p.content.length : 0, p.start = 0, p.clsid = p.clsid || w, 0 === s) p.C = h.length > 1 ? 1 : -1, p.size = 0, p.type = 5;
                else if ("/" == m.slice(-1)) {
                    for (c = s + 1; c < h.length && r(e.FullPaths[c]) != m; ++c);
                    for (p.C = c >= h.length ? -1 : c, c = s + 1; c < h.length && r(e.FullPaths[c]) != r(m); ++c);
                    p.R = c >= h.length ? -1 : c, p.type = 1
                } else r(e.FullPaths[s + 1] || "") == r(m) && (p.R = s + 1), p.type = 2
            }
        }
    }

    function m(e, t) {
        var r = t || {};
        if ("mad" == r.fileType) return function(e, t) {
            for (var r = t || {}, n = r.boundary || "SheetJS", a = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + (n = "------=" + n).slice(2) + '"', "", "", ""], i = e.FullPaths[0], s = i, o = e.FileIndex[0], l = 1; l < e.FullPaths.length; ++l)
                if (s = e.FullPaths[l].slice(i.length), (o = e.FileIndex[l]).size && o.content && "Sh33tJ5" != s) {
                    s = s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, (function(e) {
                        return "_x" + e.charCodeAt(0).toString(16) + "_"
                    })).replace(/[\u0080-\uFFFF]/g, (function(e) {
                        return "_u" + e.charCodeAt(0).toString(16) + "_"
                    }));
                    for (var f = o.content, h = T && c.isBuffer(f) ? f.toString("binary") : C(f), u = 0, d = Math.min(1024, h.length), p = 0, m = 0; m <= d; ++m)(p = h.charCodeAt(m)) >= 32 && p < 128 && ++u;
                    var g = u >= 4 * d / 5;
                    a.push(n), a.push("Content-Location: " + (r.root || "file:///C:/SheetJS/") + s), a.push("Content-Transfer-Encoding: " + (g ? "quoted-printable" : "base64")), a.push("Content-Type: " + Se(o, s)), a.push(""), a.push(g ? we(h) : be(h))
                } return a.push(n + "--\r\n"), a.join("\r\n")
        }(e, r);
        if (p(e), "zip" === r.fileType) return function(e, t) {
            var r = t || {},
                n = [],
                i = [],
                s = Xt(1),
                o = r.compression ? 8 : 0,
                l = 0;
            0;
            var c = 0,
                f = 0,
                h = 0,
                u = 0,
                d = e.FullPaths[0],
                p = d,
                m = e.FileIndex[0],
                g = [],
                v = 0;
            for (c = 1; c < e.FullPaths.length; ++c)
                if (p = e.FullPaths[c].slice(d.length), (m = e.FileIndex[c]).size && m.content && "Sh33tJ5" != p) {
                    var E = h,
                        S = Xt(p.length);
                    for (f = 0; f < p.length; ++f) S.write_shift(1, 127 & p.charCodeAt(f));
                    S = S.slice(0, S.l), g[u] = W.buf(m.content, 0);
                    var b = m.content;
                    8 == o && (b = _(b)), (s = Xt(30)).write_shift(4, 67324752), s.write_shift(2, 20), s.write_shift(2, l), s.write_shift(2, o), m.mt ? a(s, m.mt) : s.write_shift(4, 0), s.write_shift(-4, 8 & l ? 0 : g[u]), s.write_shift(4, 8 & l ? 0 : b.length), s.write_shift(4, 8 & l ? 0 : m.content.length), s.write_shift(2, S.length), s.write_shift(2, 0), h += s.length, n.push(s), h += S.length, n.push(S), h += b.length, n.push(b), 8 & l && ((s = Xt(12)).write_shift(-4, g[u]), s.write_shift(4, b.length), s.write_shift(4, m.content.length), h += s.l, n.push(s)), (s = Xt(46)).write_shift(4, 33639248), s.write_shift(2, 0), s.write_shift(2, 20), s.write_shift(2, l), s.write_shift(2, o), s.write_shift(4, 0), s.write_shift(-4, g[u]), s.write_shift(4, b.length), s.write_shift(4, m.content.length), s.write_shift(2, S.length), s.write_shift(2, 0), s.write_shift(2, 0), s.write_shift(2, 0), s.write_shift(2, 0), s.write_shift(4, 0), s.write_shift(4, E), v += s.l, i.push(s), v += S.length, i.push(S), ++u
                } return (s = Xt(22)).write_shift(4, 101010256), s.write_shift(2, 0), s.write_shift(2, 0), s.write_shift(2, u), s.write_shift(2, u), s.write_shift(4, v), s.write_shift(4, h), s.write_shift(2, 0), F([F(n), F(i), s])
        }(e, r);
        var n = function(e) {
                for (var t = 0, r = 0, n = 0; n < e.FileIndex.length; ++n) {
                    var a = e.FileIndex[n];
                    if (a.content) {
                        var i = a.content.length;
                        i > 0 && (i < 4096 ? t += i + 63 >> 6 : r += i + 511 >> 9)
                    }
                }
                for (var s = e.FullPaths.length + 3 >> 2, o = t + 127 >> 7, l = (t + 7 >> 3) + r + s + o, c = l + 127 >> 7, f = c <= 109 ? 0 : Math.ceil((c - 109) / 127); l + c + f + 127 >> 7 > c;) f = ++c <= 109 ? 0 : Math.ceil((c - 109) / 127);
                var h = [1, f, c, o, s, r, t, 0];
                return e.FileIndex[0].size = t << 6, h[7] = (e.FileIndex[0].start = h[0] + h[1] + h[2] + h[3] + h[4] + h[5]) + (h[6] + 7 >> 3), h
            }(e),
            i = Xt(n[7] << 9),
            s = 0,
            o = 0;
        for (s = 0; s < 8; ++s) i.write_shift(1, b[s]);
        for (s = 0; s < 8; ++s) i.write_shift(2, 0);
        for (i.write_shift(2, 62), i.write_shift(2, 3), i.write_shift(2, 65534), i.write_shift(2, 9), i.write_shift(2, 6), s = 0; s < 3; ++s) i.write_shift(2, 0);
        for (i.write_shift(4, 0), i.write_shift(4, n[2]), i.write_shift(4, n[0] + n[1] + n[2] + n[3] - 1), i.write_shift(4, 0), i.write_shift(4, 4096), i.write_shift(4, n[3] ? n[0] + n[1] + n[2] - 1 : E), i.write_shift(4, n[3]), i.write_shift(-4, n[1] ? n[0] - 1 : E), i.write_shift(4, n[1]), s = 0; s < 109; ++s) i.write_shift(-4, s < n[2] ? n[1] + s : -1);
        if (n[1])
            for (o = 0; o < n[1]; ++o) {
                for (; s < 236 + 127 * o; ++s) i.write_shift(-4, s < n[2] ? n[1] + s : -1);
                i.write_shift(-4, o === n[1] - 1 ? E : o + 1)
            }
        var l = function(e) {
            for (o += e; s < o - 1; ++s) i.write_shift(-4, s + 1);
            e && (++s, i.write_shift(-4, E))
        };
        for (o = s = 0, o += n[1]; s < o; ++s) i.write_shift(-4, B.DIFSECT);
        for (o += n[2]; s < o; ++s) i.write_shift(-4, B.FATSECT);
        l(n[3]), l(n[4]);
        for (var f = 0, h = 0, u = e.FileIndex[0]; f < e.FileIndex.length; ++f)(u = e.FileIndex[f]).content && ((h = u.content.length) < 4096 || (u.start = o, l(h + 511 >> 9)));
        for (l(n[6] + 7 >> 3); 511 & i.l;) i.write_shift(-4, B.ENDOFCHAIN);
        for (o = s = 0, f = 0; f < e.FileIndex.length; ++f)(u = e.FileIndex[f]).content && (!(h = u.content.length) || h >= 4096 || (u.start = o, l(h + 63 >> 6)));
        for (; 511 & i.l;) i.write_shift(-4, B.ENDOFCHAIN);
        for (s = 0; s < n[4] << 2; ++s) {
            var d = e.FullPaths[s];
            if (d && 0 !== d.length) {
                u = e.FileIndex[s], 0 === s && (u.start = u.size ? u.start - 1 : E);
                var m = 0 === s && r.root || u.name;
                if (h = 2 * (m.length + 1), i.write_shift(64, m, "utf16le"), i.write_shift(2, h), i.write_shift(1, u.type), i.write_shift(1, u.color), i.write_shift(-4, u.L), i.write_shift(-4, u.R), i.write_shift(-4, u.C), u.clsid) i.write_shift(16, u.clsid, "hex");
                else
                    for (f = 0; f < 4; ++f) i.write_shift(4, 0);
                i.write_shift(4, u.state || 0), i.write_shift(4, 0), i.write_shift(4, 0), i.write_shift(4, 0), i.write_shift(4, 0), i.write_shift(4, u.start), i.write_shift(4, u.size), i.write_shift(4, 0)
            } else {
                for (f = 0; f < 17; ++f) i.write_shift(4, 0);
                for (f = 0; f < 3; ++f) i.write_shift(4, -1);
                for (f = 0; f < 12; ++f) i.write_shift(4, 0)
            }
        }
        for (s = 1; s < e.FileIndex.length; ++s)
            if ((u = e.FileIndex[s]).size >= 4096)
                if (i.l = u.start + 1 << 9, T && c.isBuffer(u.content)) u.content.copy(i, i.l, 0, u.size), i.l += u.size + 511 & -512;
                else {
                    for (f = 0; f < u.size; ++f) i.write_shift(1, u.content[f]);
                    for (; 511 & f; ++f) i.write_shift(1, 0)
                } for (s = 1; s < e.FileIndex.length; ++s)
            if ((u = e.FileIndex[s]).size > 0 && u.size < 4096)
                if (T && c.isBuffer(u.content)) u.content.copy(i, i.l, 0, u.size), i.l += u.size + 63 & -64;
                else {
                    for (f = 0; f < u.size; ++f) i.write_shift(1, u.content[f]);
                    for (; 63 & f; ++f) i.write_shift(1, 0)
                } if (T) i.l = i.length;
        else
            for (; i.l < i.length;) i.write_shift(1, 0);
        return i
    }
    t.version = "1.2.1";
    var g, v = 64,
        E = -2,
        S = "d0cf11e0a1b11ae1",
        b = [208, 207, 17, 224, 161, 177, 26, 225],
        w = "00000000000000000000000000000000",
        B = {
            MAXREGSECT: -6,
            DIFSECT: -4,
            FATSECT: -3,
            ENDOFCHAIN: E,
            FREESECT: -1,
            HEADER_SIGNATURE: S,
            HEADER_MINOR_VERSION: "3e00",
            MAXREGSID: -6,
            NOSTREAM: -1,
            HEADER_CLSID: w,
            EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
        };

    function C(e) {
        for (var t = new Array(e.length), r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]);
        return t.join("")
    }

    function _(e) {
        return g ? g.deflateRawSync(e) : oe(e)
    }
    var R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        O = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258],
        P = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    for (var k, L, U = "undefined" != typeof Uint8Array, H = U ? new Uint8Array(256) : [], V = 0; V < 256; ++V) H[V] = (L = void 0, 255 & ((L = 139536 & ((k = V) << 1 | k << 11) | 558144 & (k << 5 | k << 15)) >> 16 | L >> 8 | L));

    function G(e, t) {
        var r = H[255 & e];
        return t <= 8 ? r >>> 8 - t : (r = r << 8 | H[e >> 8 & 255], t <= 16 ? r >>> 16 - t : (r = r << 8 | H[e >> 16 & 255]) >>> 24 - t)
    }

    function j(e, t) {
        var r = 7 & t,
            n = t >>> 3;
        return (e[n] | (r <= 6 ? 0 : e[n + 1] << 8)) >>> r & 3
    }

    function $(e, t) {
        var r = 7 & t,
            n = t >>> 3;
        return (e[n] | (r <= 5 ? 0 : e[n + 1] << 8)) >>> r & 7
    }

    function z(e, t) {
        var r = 7 & t,
            n = t >>> 3;
        return (e[n] | (r <= 3 ? 0 : e[n + 1] << 8)) >>> r & 31
    }

    function Y(e, t) {
        var r = 7 & t,
            n = t >>> 3;
        return (e[n] | (r <= 1 ? 0 : e[n + 1] << 8)) >>> r & 127
    }

    function K(e, t, r) {
        var n = 7 & t,
            a = t >>> 3,
            i = (1 << r) - 1,
            s = e[a] >>> n;
        return r < 8 - n ? s & i : (s |= e[a + 1] << 8 - n, r < 16 - n ? s & i : (s |= e[a + 2] << 16 - n, r < 24 - n ? s & i : (s |= e[a + 3] << 24 - n) & i))
    }

    function J(e, t, r) {
        var n = 7 & t,
            a = t >>> 3;
        return n <= 5 ? e[a] |= (7 & r) << n : (e[a] |= r << n & 255, e[a + 1] = (7 & r) >> 8 - n), t + 3
    }

    function q(e, t, r) {
        return r = (1 & r) << (7 & t), e[t >>> 3] |= r, t + 1
    }

    function Q(e, t, r) {
        var n = t >>> 3;
        return r <<= 7 & t, e[n] |= 255 & r, r >>>= 8, e[n + 1] = r, t + 8
    }

    function Z(e, t, r) {
        var n = t >>> 3;
        return r <<= 7 & t, e[n] |= 255 & r, r >>>= 8, e[n + 1] = 255 & r, e[n + 2] = r >>> 8, t + 16
    }

    function ee(e, t) {
        var r = e.length,
            n = 2 * r > t ? 2 * r : t + 5,
            a = 0;
        if (r >= t) return e;
        if (T) {
            var i = I(n);
            if (e.copy) e.copy(i);
            else
                for (; a < e.length; ++a) i[a] = e[a];
            return i
        }
        if (U) {
            var s = new Uint8Array(n);
            if (s.set) s.set(e);
            else
                for (; a < r; ++a) s[a] = e[a];
            return s
        }
        return e.length = n, e
    }

    function te(e) {
        for (var t = new Array(e), r = 0; r < e; ++r) t[r] = 0;
        return t
    }

    function re(e, t, r) {
        var n = 1,
            a = 0,
            i = 0,
            s = 0,
            o = 0,
            l = e.length,
            c = U ? new Uint16Array(32) : te(32);
        for (i = 0; i < 32; ++i) c[i] = 0;
        for (i = l; i < r; ++i) e[i] = 0;
        l = e.length;
        var f = U ? new Uint16Array(l) : te(l);
        for (i = 0; i < l; ++i) c[a = e[i]]++, n < a && (n = a), f[i] = 0;
        for (c[0] = 0, i = 1; i <= n; ++i) c[i + 16] = o = o + c[i - 1] << 1;
        for (i = 0; i < l; ++i) 0 != (o = e[i]) && (f[i] = c[o + 16]++);
        var h = 0;
        for (i = 0; i < l; ++i)
            if (0 != (h = e[i]))
                for (o = G(f[i], n) >> n - h, s = (1 << n + 4 - h) - 1; s >= 0; --s) t[o | s << h] = 15 & h | i << 4;
        return n
    }
    var ne = U ? new Uint16Array(512) : te(512),
        ae = U ? new Uint16Array(32) : te(32);
    if (!U) {
        for (var ie = 0; ie < 512; ++ie) ne[ie] = 0;
        for (ie = 0; ie < 32; ++ie) ae[ie] = 0
    }! function() {
        for (var e = [], t = 0; t < 32; t++) e.push(5);
        re(e, ae, 32);
        var r = [];
        for (t = 0; t <= 143; t++) r.push(8);
        for (; t <= 255; t++) r.push(9);
        for (; t <= 279; t++) r.push(7);
        for (; t <= 287; t++) r.push(8);
        re(r, ne, 288)
    }();
    var se = function() {
        for (var e = U ? new Uint8Array(32768) : [], t = 0, r = 0; t < P.length - 1; ++t)
            for (; r < P[t + 1]; ++r) e[r] = t;
        for (; r < 32768; ++r) e[r] = 29;
        var n = U ? new Uint8Array(259) : [];
        for (t = 0, r = 0; t < O.length - 1; ++t)
            for (; r < O[t + 1]; ++r) n[r] = t;
        return function(t, r) {
            return t.length < 8 ? function(e, t) {
                for (var r = 0; r < e.length;) {
                    var n = Math.min(65535, e.length - r),
                        a = r + n == e.length;
                    for (t.write_shift(1, +a), t.write_shift(2, n), t.write_shift(2, 65535 & ~n); n-- > 0;) t[t.l++] = e[r++]
                }
                return t.l
            }(t, r) : function(t, r) {
                for (var a = 0, i = 0, s = U ? new Uint16Array(32768) : []; i < t.length;) {
                    var o = Math.min(65535, t.length - i);
                    if (o < 10) {
                        for (7 & (a = J(r, a, +!(i + o != t.length))) && (a += 8 - (7 & a)), r.l = a / 8 | 0, r.write_shift(2, o), r.write_shift(2, 65535 & ~o); o-- > 0;) r[r.l++] = t[i++];
                        a = 8 * r.l
                    } else {
                        a = J(r, a, +!(i + o != t.length) + 2);
                        for (var l = 0; o-- > 0;) {
                            var c = t[i],
                                f = -1,
                                h = 0;
                            if ((f = s[l = 32767 & (l << 5 ^ c)]) && ((f |= -32768 & i) > i && (f -= 32768), f < i))
                                for (; t[f + h] == t[i + h] && h < 250;) ++h;
                            if (h > 2) {
                                (c = n[h]) <= 22 ? a = Q(r, a, H[c + 1] >> 1) - 1 : (Q(r, a, 3), Q(r, a += 5, H[c - 23] >> 5), a += 3);
                                var u = c < 8 ? 0 : c - 4 >> 2;
                                u > 0 && (Z(r, a, h - O[c]), a += u), c = e[i - f], a = Q(r, a, H[c] >> 3), a -= 3;
                                var d = c < 4 ? 0 : c - 2 >> 1;
                                d > 0 && (Z(r, a, i - f - P[c]), a += d);
                                for (var p = 0; p < h; ++p) s[l] = 32767 & i, l = 32767 & (l << 5 ^ t[i]), ++i;
                                o -= h - 1
                            } else c <= 143 ? c += 48 : a = q(r, a, 1), a = Q(r, a, H[c]), s[l] = 32767 & i, ++i
                        }
                        a = Q(r, a, 0) - 1
                    }
                }
                return r.l = (a + 7) / 8 | 0, r.l
            }(t, r)
        }
    }();

    function oe(e) {
        var t = Xt(50 + Math.floor(1.1 * e.length)),
            r = se(e, t);
        return t.slice(0, r)
    }
    var le = U ? new Uint16Array(32768) : te(32768),
        ce = U ? new Uint16Array(32768) : te(32768),
        fe = U ? new Uint16Array(128) : te(128),
        he = 1,
        ue = 1;

    function de(e, t) {
        var r = z(e, t) + 257,
            n = z(e, t += 5) + 1,
            a = function(e, t) {
                var r = 7 & t,
                    n = t >>> 3;
                return (e[n] | (r <= 4 ? 0 : e[n + 1] << 8)) >>> r & 15
            }(e, t += 5) + 4;
        t += 4;
        for (var i = 0, s = U ? new Uint8Array(19) : te(19), o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], l = 1, c = U ? new Uint8Array(8) : te(8), f = U ? new Uint8Array(8) : te(8), h = s.length, u = 0; u < a; ++u) s[R[u]] = i = $(e, t), l < i && (l = i), c[i]++, t += 3;
        var d = 0;
        for (c[0] = 0, u = 1; u <= l; ++u) f[u] = d = d + c[u - 1] << 1;
        for (u = 0; u < h; ++u) 0 != (d = s[u]) && (o[u] = f[d]++);
        var p = 0;
        for (u = 0; u < h; ++u)
            if (0 != (p = s[u])) {
                d = H[o[u]] >> 8 - p;
                for (var m = (1 << 7 - p) - 1; m >= 0; --m) fe[d | m << p] = 7 & p | u << 3
            } var g = [];
        for (l = 1; g.length < r + n;) switch (t += 7 & (d = fe[Y(e, t)]), d >>>= 3) {
            case 16:
                for (i = 3 + j(e, t), t += 2, d = g[g.length - 1]; i-- > 0;) g.push(d);
                break;
            case 17:
                for (i = 3 + $(e, t), t += 3; i-- > 0;) g.push(0);
                break;
            case 18:
                for (i = 11 + Y(e, t), t += 7; i-- > 0;) g.push(0);
                break;
            default:
                g.push(d), l < d && (l = d)
        }
        var v = g.slice(0, r),
            E = g.slice(r);
        for (u = r; u < 286; ++u) v[u] = 0;
        for (u = n; u < 30; ++u) E[u] = 0;
        return he = re(v, le, 286), ue = re(E, ce, 30), t
    }

    function pe(e, t) {
        var r = function(e, t) {
            if (3 == e[0] && !(3 & e[1])) return [x(t), 2];
            for (var r = 0, n = 0, a = I(t || 262144), i = 0, s = a.length >>> 0, o = 0, l = 0; 0 == (1 & n);)
                if (n = $(e, r), r += 3, n >>> 1 != 0)
                    for (n >> 1 == 1 ? (o = 9, l = 5) : (r = de(e, r), o = he, l = ue);;) {
                        !t && s < i + 32767 && (s = (a = ee(a, i + 32767)).length);
                        var c = K(e, r, o),
                            f = n >>> 1 == 1 ? ne[c] : le[c];
                        if (r += 15 & f, 0 == ((f >>>= 4) >>> 8 & 255)) a[i++] = f;
                        else {
                            if (256 == f) break;
                            var h = (f -= 257) < 8 ? 0 : f - 4 >> 2;
                            h > 5 && (h = 0);
                            var u = i + O[f];
                            h > 0 && (u += K(e, r, h), r += h), c = K(e, r, l), r += 15 & (f = n >>> 1 == 1 ? ae[c] : ce[c]);
                            var d = (f >>>= 4) < 4 ? 0 : f - 2 >> 1,
                                p = P[f];
                            for (d > 0 && (p += K(e, r, d), r += d), !t && s < u && (s = (a = ee(a, u + 100)).length); i < u;) a[i] = a[i - p], ++i
                        }
                    } else {
                        7 & r && (r += 8 - (7 & r));
                        var m = e[r >>> 3] | e[1 + (r >>> 3)] << 8;
                        if (r += 32, m > 0)
                            for (!t && s < i + m && (s = (a = ee(a, i + m)).length); m-- > 0;) a[i++] = e[r >>> 3], r += 8
                    }
            return t ? [a, r + 7 >>> 3] : [a.slice(0, i), r + 7 >>> 3]
        }(e.slice(e.l || 0), t);
        return e.l += r[1], r[0]
    }

    function me(e, t) {
        if (!e) throw new Error(t)
    }

    function ge(e, t) {
        var r = e;
        Vt(r, 0);
        var n = {
            FileIndex: [],
            FullPaths: []
        };
        d(n, {
            root: t.root
        });
        for (var a = r.length - 4;
            (80 != r[a] || 75 != r[a + 1] || 5 != r[a + 2] || 6 != r[a + 3]) && a >= 0;) --a;
        r.l = a + 4, r.l += 4;
        var s = r.read_shift(2);
        r.l += 6;
        var o = r.read_shift(4);
        for (r.l = o, a = 0; a < s; ++a) {
            r.l += 20;
            var l = r.read_shift(4),
                c = r.read_shift(4),
                f = r.read_shift(2),
                h = r.read_shift(2),
                u = r.read_shift(2);
            r.l += 8;
            var p = r.read_shift(4),
                m = i(r.slice(r.l + f, r.l + f + h));
            r.l += f + h + u;
            var g = r.l;
            r.l = p + 4, ve(r, l, c, n, m), r.l = g
        }
        return n
    }

    function ve(e, t, r, n, a) {
        e.l += 2;
        var s = e.read_shift(2),
            o = e.read_shift(2),
            l = function(e) {
                var t = 65535 & e.read_shift(2),
                    r = 65535 & e.read_shift(2),
                    n = new Date,
                    a = 31 & r,
                    i = 15 & (r >>>= 5);
                r >>>= 4, n.setMilliseconds(0), n.setFullYear(r + 1980), n.setMonth(i - 1), n.setDate(a);
                var s = 31 & t,
                    o = 63 & (t >>>= 5);
                return t >>>= 6, n.setHours(t), n.setMinutes(o), n.setSeconds(s << 1), n
            }(e);
        if (8257 & s) throw new Error("Unsupported ZIP encryption");
        e.read_shift(4);
        for (var c = e.read_shift(4), f = e.read_shift(4), h = e.read_shift(2), u = e.read_shift(2), d = "", p = 0; p < h; ++p) d += String.fromCharCode(e[e.l++]);
        if (u) {
            var m = i(e.slice(e.l, e.l + u));
            (m[21589] || {}).mt && (l = m[21589].mt), ((a || {})[21589] || {}).mt && (l = a[21589].mt)
        }
        e.l += u;
        var v = e.slice(e.l, e.l + c);
        switch (o) {
            case 8:
                v = function(e, t) {
                    if (!g) return pe(e, t);
                    var r = new(0, g.InflateRaw),
                        n = r._processChunk(e.slice(e.l), r._finishFlushFlag);
                    return e.l += r.bytesRead, n
                }(e, f);
                break;
            case 0:
                break;
            default:
                throw new Error("Unsupported ZIP Compression method " + o)
        }
        var E = !1;
        8 & s && (134695760 == e.read_shift(4) && (e.read_shift(4), E = !0), c = e.read_shift(4), f = e.read_shift(4)), c != t && me(E, "Bad compressed size: " + t + " != " + c), f != r && me(E, "Bad uncompressed size: " + r + " != " + f), Ce(n, d, v, {
            unsafe: !0,
            mt: l
        })
    }
    var Ee = {
        htm: "text/html",
        xml: "text/xml",
        gif: "image/gif",
        jpg: "image/jpeg",
        png: "image/png",
        mso: "application/x-mso",
        thmx: "application/vnd.ms-officetheme",
        sh33tj5: "application/octet-stream"
    };

    function Se(e, t) {
        if (e.ctype) return e.ctype;
        var r = e.name || "",
            n = r.match(/\.([^\.]+)$/);
        return n && Ee[n[1]] || t && (n = (r = t).match(/[\.\\]([^\.\\])+$/)) && Ee[n[1]] ? Ee[n[1]] : "application/octet-stream"
    }

    function be(e) {
        for (var t = y.encode(e), r = [], n = 0; n < t.length; n += 76) r.push(t.slice(n, n + 76));
        return r.join("\r\n") + "\r\n"
    }

    function we(e) {
        var t = e.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, (function(e) {
            var t = e.charCodeAt(0).toString(16).toUpperCase();
            return "=" + (1 == t.length ? "0" + t : t)
        }));
        "\n" == (t = t.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")).charAt(0) && (t = "=0D" + t.slice(1));
        for (var r = [], n = (t = t.replace(/\r(?!\n)/gm, "=0D").replace(/\n\n/gm, "\n=0A").replace(/([^\r\n])\n/gm, "$1=0A")).split("\r\n"), a = 0; a < n.length; ++a) {
            var i = n[a];
            if (0 != i.length)
                for (var s = 0; s < i.length;) {
                    var o = 76,
                        l = i.slice(s, s + o);
                    "=" == l.charAt(o - 1) ? o-- : "=" == l.charAt(o - 2) ? o -= 2 : "=" == l.charAt(o - 3) && (o -= 3), l = i.slice(s, s + o), (s += o) < i.length && (l += "="), r.push(l)
                } else r.push("")
        }
        return r.join("\r\n")
    }

    function Be(e, t, r) {
        for (var n, a = "", i = "", s = "", o = 0; o < 10; ++o) {
            var l = t[o];
            if (!l || l.match(/^\s*$/)) break;
            var c = l.match(/^(.*?):\s*([^\s].*)$/);
            if (c) switch (c[1].toLowerCase()) {
                case "content-location":
                    a = c[2].trim();
                    break;
                case "content-type":
                    s = c[2].trim();
                    break;
                case "content-transfer-encoding":
                    i = c[2].trim()
            }
        }
        switch (++o, i.toLowerCase()) {
            case "base64":
                n = D(y.decode(t.slice(o).join("")));
                break;
            case "quoted-printable":
                n = function(e) {
                    for (var t = [], r = 0; r < e.length; ++r) {
                        for (var n = e[r]; r <= e.length && "=" == n.charAt(n.length - 1);) n = n.slice(0, n.length - 1) + e[++r];
                        t.push(n)
                    }
                    for (var a = 0; a < t.length; ++a) t[a] = t[a].replace(/[=][0-9A-Fa-f]{2}/g, (function(e) {
                        return String.fromCharCode(parseInt(e.slice(1), 16))
                    }));
                    return D(t.join("\r\n"))
                }(t.slice(o));
                break;
            default:
                throw new Error("Unsupported Content-Transfer-Encoding " + i)
        }
        var f = Ce(e, a.slice(r.length), n, {
            unsafe: !0
        });
        s && (f.ctype = s)
    }

    function Ce(e, t, r, a) {
        var i = a && a.unsafe;
        i || d(e);
        var s = !i && X.find(e, t);
        if (!s) {
            var o = e.FullPaths[0];
            t.slice(0, o.length) == o ? o = t : ("/" != o.slice(-1) && (o += "/"), o = (o + t).replace("//", "/")), s = {
                name: n(t),
                type: 2
            }, e.FileIndex.push(s), e.FullPaths.push(o), i || X.utils.cfb_gc(e)
        }
        return s.content = r, s.size = r ? r.length : 0, a && (a.CLSID && (s.clsid = a.CLSID), a.mt && (s.mt = a.mt), a.ct && (s.ct = a.ct)), s
    }
    return t.find = function(e, t) {
        var r = e.FullPaths.map((function(e) {
                return e.toUpperCase()
            })),
            n = r.map((function(e) {
                var t = e.split("/");
                return t[t.length - ("/" == e.slice(-1) ? 2 : 1)]
            })),
            a = !1;
        47 === t.charCodeAt(0) ? (a = !0, t = r[0].slice(0, -1) + t) : a = -1 !== t.indexOf("/");
        var i = t.toUpperCase(),
            s = !0 === a ? r.indexOf(i) : n.indexOf(i);
        if (-1 !== s) return e.FileIndex[s];
        var o = !i.match(M);
        for (i = i.replace(N, ""), o && (i = i.replace(M, "!")), s = 0; s < r.length; ++s) {
            if ((o ? r[s].replace(M, "!") : r[s]).replace(N, "") == i) return e.FileIndex[s];
            if ((o ? n[s].replace(M, "!") : n[s]).replace(N, "") == i) return e.FileIndex[s]
        }
        return null
    }, t.read = function(t, r) {
        var n = r && r.type;
        switch (n || T && c.isBuffer(t) && (n = "buffer"), n || "base64") {
            case "file":
                return function(t, r) {
                    return s(), o(e.readFileSync(t), r)
                }(t, r);
            case "base64":
                return o(D(y.decode(t)), r);
            case "binary":
                return o(D(t), r)
        }
        return o(t, r)
    }, t.parse = o, t.write = function(t, r) {
        var n = m(t, r);
        switch (r && r.type || "buffer") {
            case "file":
                return s(), e.writeFileSync(r.filename, n), n;
            case "binary":
                return "string" == typeof n ? n : C(n);
            case "base64":
                return y.encode("string" == typeof n ? n : C(n));
            case "buffer":
                if (T) return c.isBuffer(n) ? n : A(n);
            case "array":
                return "string" == typeof n ? D(n) : n
        }
        return n
    }, t.writeFile = function(t, r, n) {
        s();
        var a = m(t, n);
        e.writeFileSync(r, a)
    }, t.utils = {
        cfb_new: function(e) {
            var t = {};
            return d(t, e), t
        },
        cfb_add: Ce,
        cfb_del: function(e, t) {
            d(e);
            var r = X.find(e, t);
            if (r)
                for (var n = 0; n < e.FileIndex.length; ++n)
                    if (e.FileIndex[n] == r) return e.FileIndex.splice(n, 1), e.FullPaths.splice(n, 1), !0;
            return !1
        },
        cfb_mov: function(e, t, r) {
            d(e);
            var a = X.find(e, t);
            if (a)
                for (var i = 0; i < e.FileIndex.length; ++i)
                    if (e.FileIndex[i] == a) return e.FileIndex[i].name = n(r), e.FullPaths[i] = r, !0;
            return !1
        },
        cfb_gc: function(e) {
            p(e, !0)
        },
        ReadShift: Mt,
        CheckField: Ht,
        prep_blob: Vt,
        bconcat: F,
        use_zlib: function(e) {
            try {
                var t = new(0, e.InflateRaw);
                if (t._processChunk(new Uint8Array([3, 0]), t._finishFlushFlag), !t.bytesRead) throw new Error("zlib does not expose bytesRead");
                g = e
            } catch (e) {}
        },
        _deflateRaw: oe,
        _inflateRaw: pe,
        consts: B
    }, t
}();
let G;

function j(e) {
    return "string" == typeof e ? O(e) : Array.isArray(e) ? function(e) {
        if ("undefined" == typeof Uint8Array) throw new Error("Unsupported");
        return new Uint8Array(e)
    }(e) : e
}

function z(e, t, r) {
    if (void 0 !== G && G.writeFileSync) return r ? G.writeFileSync(e, t, r) : G.writeFileSync(e, t);
    if ("undefined" != typeof Deno) {
        if (r) switch (r) {
            case "utf8":
                t = new TextEncoder(r).encode(t);
                break;
            case "binary":
                t = O(t);
                break;
            default:
                throw new Error("Unsupported encoding " + r)
        }
        return Deno.writeFileSync(e, t)
    }
    var n = "utf8" == r ? We(t) : t;
    if ("undefined" != typeof IE_SaveFile) return IE_SaveFile(n, e);
    if ("undefined" != typeof Blob) {
        var a = new Blob([j(n)], {
            type: "application/octet-stream"
        });
        if ("undefined" != typeof navigator && navigator.msSaveBlob) return navigator.msSaveBlob(a, e);
        if ("undefined" != typeof saveAs) return saveAs(a, e);
        if ("undefined" != typeof URL && "undefined" != typeof document && document.createElement && URL.createObjectURL) {
            var i = URL.createObjectURL(a);
            if ("object" == typeof chrome && "function" == typeof(chrome.downloads || {}).download) return URL.revokeObjectURL && "undefined" != typeof setTimeout && setTimeout((function() {
                URL.revokeObjectURL(i)
            }), 6e4), chrome.downloads.download({
                url: i,
                filename: e,
                saveAs: !0
            });
            var s = document.createElement("a");
            if (null != s.download) return s.download = e, s.href = i, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL && "undefined" != typeof setTimeout && setTimeout((function() {
                URL.revokeObjectURL(i)
            }), 6e4), i
        }
    }
    if ("undefined" != typeof $ && "undefined" != typeof File && "undefined" != typeof Folder) try {
        var o = File(e);
        return o.open("w"), o.encoding = "binary", Array.isArray(t) && (t = P(t)), o.write(t), o.close(), t
    } catch (e) {
        if (!e.message || !e.message.match(/onstruct/)) throw e
    }
    throw new Error("cannot save file " + e)
}

function Y(e) {
    for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n) Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
    return r
}

function K(e, t) {
    for (var r = [], n = Y(e), a = 0; a !== n.length; ++a) null == r[e[n[a]][t]] && (r[e[n[a]][t]] = n[a]);
    return r
}

function J(e) {
    for (var t = [], r = Y(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n];
    return t
}

function q(e) {
    for (var t = [], r = Y(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = parseInt(r[n], 10);
    return t
}
var Q = new Date(1899, 11, 30, 0, 0, 0);

function Z(e, t) {
    var r = e.getTime();
    return t && (r -= 1263168e5), (r - (Q.getTime() + 6e4 * (e.getTimezoneOffset() - Q.getTimezoneOffset()))) / 864e5
}
var ee = new Date,
    te = Q.getTime() + 6e4 * (ee.getTimezoneOffset() - Q.getTimezoneOffset()),
    re = ee.getTimezoneOffset();

function ne(e) {
    var t = new Date;
    return t.setTime(864e5 * e + te), t.getTimezoneOffset() !== re && t.setTime(t.getTime() + 6e4 * (t.getTimezoneOffset() - re)), t
}

function ae(e) {
    var t = 0,
        r = 0,
        n = !1,
        a = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
    if (!a) throw new Error("|" + e + "| is not an ISO8601 Duration");
    for (var i = 1; i != a.length; ++i)
        if (a[i]) {
            switch (r = 1, i > 3 && (n = !0), a[i].slice(a[i].length - 1)) {
                case "Y":
                    throw new Error("Unsupported ISO Duration Field: " + a[i].slice(a[i].length - 1));
                case "D":
                    r *= 24;
                case "H":
                    r *= 60;
                case "M":
                    if (!n) throw new Error("Unsupported ISO Duration Field: M");
                    r *= 60
            }
            t += r * parseInt(a[i], 10)
        } return t
}
var ie = new Date("2017-02-19T19:06:09.000Z");
isNaN(ie.getFullYear()) && (ie = new Date("2/19/17"));
var se = 2017 == ie.getFullYear();

function oe(e, t) {
    var r = new Date(e);
    if (se) return t > 0 ? r.setTime(r.getTime() + 6e4 * r.getTimezoneOffset()) : t < 0 && r.setTime(r.getTime() - 6e4 * r.getTimezoneOffset()), r;
    if (e instanceof Date) return e;
    if (1917 == ie.getFullYear() && !isNaN(r.getFullYear())) {
        var n = r.getFullYear();
        return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r
    }
    var a = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
        i = new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
    return e.indexOf("Z") > -1 && (i = new Date(i.getTime() - 6e4 * i.getTimezoneOffset())), i
}

function le(e, t) {
    if (T && c.isBuffer(e)) {
        if (t) {
            if (255 == e[0] && 254 == e[1]) return e.slice(2).toString("utf16le");
            if (254 == e[1] && 255 == e[2]) return S(e.slice(2).toString("binary"))
        }
        return e.toString("binary")
    }
    for (var r = [], n = 0; n != e.length; ++n) r.push(String.fromCharCode(e[n]));
    return r.join("")
}

function ce(e) {
    if ("undefined" != typeof JSON && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
    if ("object" != typeof e || null == e) return e;
    if (e instanceof Date) return new Date(e.getTime());
    var t = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = ce(e[r]));
    return t
}

function fe(e, t) {
    for (var r = ""; r.length < t;) r += e;
    return r
}

function he(e) {
    var t = Number(e);
    if (isFinite(t)) return t;
    if (!isNaN(t)) return NaN;
    if (!/\d/.test(e)) return t;
    var r = 1,
        n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, (function() {
            return r *= 100, ""
        }));
    return isNaN(t = Number(n)) ? (n = n.replace(/[(](.*)[)]/, (function(e, t) {
        return r = -r, t
    })), isNaN(t = Number(n)) ? t : t / r) : t / r
}
var ue = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function de(e) {
    var t = new Date(e),
        r = new Date(NaN),
        n = t.getYear(),
        a = t.getMonth(),
        i = t.getDate();
    if (isNaN(i)) return r;
    var s = e.toLowerCase();
    if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
        if ((s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")).length > 3 && -1 == ue.indexOf(s)) return r
    } else if (s.match(/[a-z]/)) return r;
    return n < 0 || n > 8099 ? r : (a > 0 || i > 1) && 101 != n ? t : e.match(/[^-0-9:,\/\\]/) ? r : t
}
var pe = 5 == "abacaba".split(/(:?b)/i).length;

function me(e) {
    return e ? e.content && e.type ? le(e.content, !0) : e.data ? w(e.data) : e.asNodeBuffer && T ? w(e.asNodeBuffer().toString("binary")) : e.asBinary ? w(e.asBinary()) : e._data && e._data.getContent ? w(le(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null
}

function ge(e, t) {
    for (var r = e.FullPaths || Y(e.files), n = t.toLowerCase().replace(/[\/]/g, "\\"), a = n.replace(/\\/g, "/"), i = 0; i < r.length; ++i) {
        var s = r[i].replace(/^Root Entry[\/]/, "").toLowerCase();
        if (n == s || a == s) return e.files ? e.files[r[i]] : e.FileIndex[i]
    }
    return null
}

function ve(e, t) {
    var r = ge(e, t);
    if (null == r) throw new Error("Cannot find file " + t + " in zip");
    return r
}

function Ee(e, t, r) {
    if (!r) return me(ve(e, t));
    if (!t) return null;
    try {
        return Ee(e, t)
    } catch (e) {
        return null
    }
}

function Se(e, t, r) {
    if (e.FullPaths) {
        var n;
        if ("string" == typeof r) return n = T ? A(r) : function(e) {
            for (var t = [], r = 0, n = e.length + 250, a = x(e.length + 255), i = 0; i < e.length; ++i) {
                var s = e.charCodeAt(i);
                if (s < 128) a[r++] = s;
                else if (s < 2048) a[r++] = 192 | s >> 6 & 31, a[r++] = 128 | 63 & s;
                else if (s >= 55296 && s < 57344) {
                    s = 64 + (1023 & s);
                    var o = 1023 & e.charCodeAt(++i);
                    a[r++] = 240 | s >> 8 & 7, a[r++] = 128 | s >> 2 & 63, a[r++] = 128 | o >> 6 & 15 | (3 & s) << 4, a[r++] = 128 | 63 & o
                } else a[r++] = 224 | s >> 12 & 15, a[r++] = 128 | s >> 6 & 63, a[r++] = 128 | 63 & s;
                r > n && (t.push(a.slice(0, r)), r = 0, a = x(65535), n = 65530)
            }
            return t.push(a.slice(0, r)), F(t)
        }(r), X.utils.cfb_add(e, t, n);
        X.utils.cfb_add(e, t, r)
    } else e.file(t, r)
}

function be() {
    return X.utils.cfb_new()
}

function we(e, t) {
    switch (t.type) {
        case "base64":
            return X.read(e, {
                type: "base64"
            });
        case "binary":
            return X.read(e, {
                type: "binary"
            });
        case "buffer":
        case "array":
            return X.read(e, {
                type: "buffer"
            })
    }
    throw new Error("Unrecognized type " + t.type)
}
var Be = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',
    Ce = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,
    _e = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm;
Be.match(_e) || (_e = /<[^>]*>/g);
var ye = /<(\/?)\w+:/;

function Te(e, t, r) {
    for (var n = {}, a = 0, i = 0; a !== e.length && (32 !== (i = e.charCodeAt(a)) && 10 !== i && 13 !== i); ++a);
    if (t || (n[0] = e.slice(0, a)), a === e.length) return n;
    var s = e.match(Ce),
        o = 0,
        l = "",
        c = 0,
        f = "",
        h = "",
        u = 1;
    if (s)
        for (c = 0; c != s.length; ++c) {
            for (h = s[c], i = 0; i != h.length && 61 !== h.charCodeAt(i); ++i);
            for (f = h.slice(0, i).trim(); 32 == h.charCodeAt(i + 1);) ++i;
            for (u = 34 == (a = h.charCodeAt(i + 1)) || 39 == a ? 1 : 0, l = h.slice(i + 1 + u, h.length - u), o = 0; o != f.length && 58 !== f.charCodeAt(o); ++o);
            if (o === f.length) f.indexOf("_") > 0 && (f = f.slice(0, f.indexOf("_"))), n[f] = l, r || (n[f.toLowerCase()] = l);
            else {
                var d = (5 === o && "xmlns" === f.slice(0, 5) ? "xmlns" : "") + f.slice(o + 1);
                if (n[d] && "ext" == f.slice(o - 3, o)) continue;
                n[d] = l, r || (n[d.toLowerCase()] = l)
            }
        }
    return n
}

function Ae(e) {
    return e.replace(ye, "<$1")
}
var Re, xe, Ie = {
        "&quot;": '"',
        "&apos;": "'",
        "&gt;": ">",
        "&lt;": "<",
        "&amp;": "&"
    },
    De = J(Ie),
    Oe = (Re = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi, xe = /_x([\da-fA-F]{4})_/gi, function e(t) {
        var r = t + "",
            n = r.indexOf("<![CDATA[");
        if (-1 == n) return r.replace(Re, (function(e, t) {
            return Ie[e] || String.fromCharCode(parseInt(t, e.indexOf("x") > -1 ? 16 : 10)) || e
        })).replace(xe, (function(e, t) {
            return String.fromCharCode(parseInt(t, 16))
        }));
        var a = r.indexOf("]]>");
        return e(r.slice(0, n)) + r.slice(n + 9, a) + e(r.slice(a + 3))
    }),
    Pe = /[&<>'"]/g,
    ke = /[\u0000-\u0008\u000b-\u001f]/g;

function Fe(e) {
    return (e + "").replace(Pe, (function(e) {
        return De[e]
    })).replace(ke, (function(e) {
        return "_x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + "_"
    }))
}

function Ne(e) {
    return Fe(e).replace(/ /g, "_x0020_")
}
var Me = /[\u0000-\u001f]/g;

function Le(e) {
    return (e + "").replace(Pe, (function(e) {
        return De[e]
    })).replace(/\n/g, "<br/>").replace(Me, (function(e) {
        return "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";"
    }))
}! function() {
    var e = /&#(\d+);/g;

    function t(e, t) {
        return String.fromCharCode(parseInt(t, 10))
    }
}();
var Ue = function(e) {
    return e.replace(/(\r\n|[\r\n])/g, "&#10;")
};

function He(e) {
    switch (e) {
        case 1:
        case !0:
        case "1":
        case "true":
        case "TRUE":
            return !0;
        default:
            return !1
    }
}
var Ve = function(e) {
        for (var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, o = 0; r < e.length;)(n = e.charCodeAt(r++)) < 128 ? t += String.fromCharCode(n) : (a = e.charCodeAt(r++), n > 191 && n < 224 ? (s = (31 & n) << 6, s |= 63 & a, t += String.fromCharCode(s)) : (i = e.charCodeAt(r++), n < 240 ? t += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | 63 & i) : (o = ((7 & n) << 18 | (63 & a) << 12 | (63 & i) << 6 | 63 & (s = e.charCodeAt(r++))) - 65536, t += String.fromCharCode(55296 + (o >>> 10 & 1023)), t += String.fromCharCode(56320 + (1023 & o)))));
        return t
    },
    We = function(e) {
        for (var t = [], r = 0, n = 0, a = 0; r < e.length;) switch (n = e.charCodeAt(r++), !0) {
            case n < 128:
                t.push(String.fromCharCode(n));
                break;
            case n < 2048:
                t.push(String.fromCharCode(192 + (n >> 6))), t.push(String.fromCharCode(128 + (63 & n)));
                break;
            case n >= 55296 && n < 57344:
                n -= 55296, a = e.charCodeAt(r++) - 56320 + (n << 10), t.push(String.fromCharCode(240 + (a >> 18 & 7))), t.push(String.fromCharCode(144 + (a >> 12 & 63))), t.push(String.fromCharCode(128 + (a >> 6 & 63))), t.push(String.fromCharCode(128 + (63 & a)));
                break;
            default:
                t.push(String.fromCharCode(224 + (n >> 12))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (63 & n)))
        }
        return t.join("")
    };
if (T) {
    var Xe = function(e) {
        var t, r, n, a = c.alloc(2 * e.length),
            i = 1,
            s = 0,
            o = 0;
        for (r = 0; r < e.length; r += i) i = 1, (n = e.charCodeAt(r)) < 128 ? t = n : n < 224 ? (t = 64 * (31 & n) + (63 & e.charCodeAt(r + 1)), i = 2) : n < 240 ? (t = 4096 * (15 & n) + 64 * (63 & e.charCodeAt(r + 1)) + (63 & e.charCodeAt(r + 2)), i = 3) : (i = 4, t = 262144 * (7 & n) + 4096 * (63 & e.charCodeAt(r + 1)) + 64 * (63 & e.charCodeAt(r + 2)) + (63 & e.charCodeAt(r + 3)), o = 55296 + ((t -= 65536) >>> 10 & 1023), t = 56320 + (1023 & t)), 0 !== o && (a[s++] = 255 & o, a[s++] = o >>> 8, o = 0), a[s++] = t % 256, a[s++] = t >>> 8;
        return a.slice(0, s).toString("ucs2")
    };
    Ve("foo bar bazâð£") == Xe("foo bar bazâð£") && (Ve = Xe);
    var Ge = function(e) {
        return A(e, "binary").toString("utf8")
    };
    Ve("foo bar bazâð£") == Ge("foo bar bazâð£") && (Ve = Ge), We = function(e) {
        return A(e, "utf8").toString("binary")
    }
}
var je, $e, ze, Ye = (je = {}, function(e, t) {
        var r = e + "|" + (t || "");
        return je[r] ? je[r] : je[r] = new RegExp("<(?:\\w+:)?" + e + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + e + ">", t || "")
    }),
    Ke = ($e = [
        ["nbsp", " "],
        ["middot", "·"],
        ["quot", '"'],
        ["apos", "'"],
        ["gt", ">"],
        ["lt", "<"],
        ["amp", "&"]
    ].map((function(e) {
        return [new RegExp("&" + e[0] + ";", "ig"), e[1]]
    })), function(e) {
        for (var t = e.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^>]*>/g, ""), r = 0; r < $e.length; ++r) t = t.replace($e[r][0], $e[r][1]);
        return t
    });
ze = {};
var Je = /(^\s|\s$|\n)/;

function qe(e, t) {
    return "<" + e + (t.match(Je) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">"
}

function Qe(e) {
    return Y(e).map((function(t) {
        return " " + t + '="' + e[t] + '"'
    })).join("")
}

function Ze(e, t, r) {
    return "<" + e + (null != r ? Qe(r) : "") + (null != t ? (t.match(Je) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">"
}

function et(e, t) {
    try {
        return e.toISOString().replace(/\.\d*/, "")
    } catch (e) {
        if (t) throw e
    }
    return ""
}
var tt = {
        dc: "http://purl.org/dc/elements/1.1/",
        dcterms: "http://purl.org/dc/terms/",
        dcmitype: "http://purl.org/dc/dcmitype/",
        mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
        vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
        xsi: "http://www.w3.org/2001/XMLSchema-instance",
        xsd: "http://www.w3.org/2001/XMLSchema",
        main: ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"]
    },
    rt = "urn:schemas-microsoft-com:office:office",
    nt = "urn:schemas-microsoft-com:office:excel",
    at = "urn:schemas-microsoft-com:office:spreadsheet",
    it = "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
    st = "http://macVmlSchemaUri",
    ot = "urn:schemas-microsoft-com:vml",
    lt = "http://www.w3.org/TR/REC-html40";
var ct, ft, ht = function(e) {
        for (var t = [], r = 0; r < e[0].length; ++r)
            if (e[0][r])
                for (var n = 0, a = e[0][r].length; n < a; n += 10240) t.push.apply(t, e[0][r].slice(n, n + 10240));
        return t
    },
    ut = ht,
    dt = function(e, t, r) {
        for (var n = [], a = t; a < r; a += 2) n.push(String.fromCharCode(Ot(e, a)));
        return n.join("").replace(N, "")
    },
    pt = dt,
    mt = function(e, t, r) {
        for (var n = [], a = t; a < t + r; ++a) n.push(("0" + e[a].toString(16)).slice(-2));
        return n.join("")
    },
    gt = mt,
    vt = function(e, t, r) {
        for (var n = [], a = t; a < r; a++) n.push(String.fromCharCode(Dt(e, a)));
        return n.join("")
    },
    Et = vt,
    St = function(e, t) {
        var r = kt(e, t);
        return r > 0 ? vt(e, t + 4, t + 4 + r - 1) : ""
    },
    bt = St,
    wt = function(e, t) {
        var r = kt(e, t);
        return r > 0 ? vt(e, t + 4, t + 4 + r - 1) : ""
    },
    Bt = wt,
    Ct = function(e, t) {
        var r = 2 * kt(e, t);
        return r > 0 ? vt(e, t + 4, t + 4 + r - 1) : ""
    },
    _t = Ct;
ct = ft = function(e, t) {
    var r = kt(e, t);
    return r > 0 ? dt(e, t + 4, t + 4 + r) : ""
};
var yt, Tt, At = function(e, t) {
        var r = kt(e, t);
        return r > 0 ? vt(e, t + 4, t + 4 + r) : ""
    },
    Rt = At;
yt = Tt = function(e, t) {
    return function(e, t) {
        for (var r = 1 - 2 * (e[t + 7] >>> 7), n = ((127 & e[t + 7]) << 4) + (e[t + 6] >>> 4 & 15), a = 15 & e[t + 6], i = 5; i >= 0; --i) a = 256 * a + e[t + i];
        return 2047 == n ? 0 == a ? r * (1 / 0) : NaN : (0 == n ? n = -1022 : (n -= 1023, a += Math.pow(2, 52)), r * Math.pow(2, n - 52) * a)
    }(e, t)
};
var xt = function(e) {
    return Array.isArray(e) || "undefined" != typeof Uint8Array && e instanceof Uint8Array
};

function It() {
    dt = function(e, t, r) {
        return b.utils.decode(1200, e.slice(t, r)).replace(N, "")
    }, vt = function(e, t, r) {
        return b.utils.decode(65001, e.slice(t, r))
    }, St = function(e, t) {
        var r = kt(e, t);
        return r > 0 ? b.utils.decode(u, e.slice(t + 4, t + 4 + r - 1)) : ""
    }, wt = function(e, t) {
        var r = kt(e, t);
        return r > 0 ? b.utils.decode(h, e.slice(t + 4, t + 4 + r - 1)) : ""
    }, Ct = function(e, t) {
        var r = 2 * kt(e, t);
        return r > 0 ? b.utils.decode(1200, e.slice(t + 4, t + 4 + r - 1)) : ""
    }, ct = function(e, t) {
        var r = kt(e, t);
        return r > 0 ? b.utils.decode(1200, e.slice(t + 4, t + 4 + r)) : ""
    }, At = function(e, t) {
        var r = kt(e, t);
        return r > 0 ? b.utils.decode(65001, e.slice(t + 4, t + 4 + r)) : ""
    }
}
T && (dt = function(e, t, r) {
    return c.isBuffer(e) ? e.toString("utf16le", t, r).replace(N, "") : pt(e, t, r)
}, mt = function(e, t, r) {
    return c.isBuffer(e) ? e.toString("hex", t, t + r) : gt(e, t, r)
}, St = function(e, t) {
    if (!c.isBuffer(e)) return bt(e, t);
    var r = e.readUInt32LE(t);
    return r > 0 ? e.toString("utf8", t + 4, t + 4 + r - 1) : ""
}, wt = function(e, t) {
    if (!c.isBuffer(e)) return Bt(e, t);
    var r = e.readUInt32LE(t);
    return r > 0 ? e.toString("utf8", t + 4, t + 4 + r - 1) : ""
}, Ct = function(e, t) {
    if (!c.isBuffer(e)) return _t(e, t);
    var r = 2 * e.readUInt32LE(t);
    return e.toString("utf16le", t + 4, t + 4 + r - 1)
}, ct = function(e, t) {
    if (!c.isBuffer(e)) return ft(e, t);
    var r = e.readUInt32LE(t);
    return e.toString("utf16le", t + 4, t + 4 + r)
}, At = function(e, t) {
    if (!c.isBuffer(e)) return Rt(e, t);
    var r = e.readUInt32LE(t);
    return e.toString("utf8", t + 4, t + 4 + r)
}, vt = function(e, t, r) {
    return c.isBuffer(e) ? e.toString("utf8", t, r) : Et(e, t, r)
}, ht = function(e) {
    return e[0].length > 0 && c.isBuffer(e[0][0]) ? c.concat(e[0].map((function(e) {
        return c.isBuffer(e) ? e : A(e)
    }))) : ut(e)
}, F = function(e) {
    return c.concat(e.map((function(e) {
        return c.isBuffer(e) ? e : A(e)
    })))
}, yt = function(e, t) {
    return c.isBuffer(e) ? e.readDoubleLE(t) : Tt(e, t)
}, xt = function(e) {
    return c.isBuffer(e) || Array.isArray(e) || "undefined" != typeof Uint8Array && e instanceof Uint8Array
}), void 0 !== b && It();
var Dt = function(e, t) {
        return e[t]
    },
    Ot = function(e, t) {
        return 256 * e[t + 1] + e[t]
    },
    Pt = function(e, t) {
        var r = 256 * e[t + 1] + e[t];
        return r < 32768 ? r : -1 * (65535 - r + 1)
    },
    kt = function(e, t) {
        return 16777216 * e[t + 3] + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t]
    },
    Ft = function(e, t) {
        return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
    },
    Nt = function(e, t) {
        return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
    };

function Mt(e, t) {
    var r, n, a, i, s, o, l = "",
        f = [];
    switch (t) {
        case "dbcs":
            if (o = this.l, T && c.isBuffer(this)) l = this.slice(this.l, this.l + 2 * e).toString("utf16le");
            else
                for (s = 0; s < e; ++s) l += String.fromCharCode(Ot(this, o)), o += 2;
            e *= 2;
            break;
        case "utf8":
            l = vt(this, this.l, this.l + e);
            break;
        case "utf16le":
            e *= 2, l = dt(this, this.l, this.l + e);
            break;
        case "wstr":
            if (void 0 === b) return Mt.call(this, e, "dbcs");
            l = b.utils.decode(h, this.slice(this.l, this.l + 2 * e)), e *= 2;
            break;
        case "lpstr-ansi":
            l = St(this, this.l), e = 4 + kt(this, this.l);
            break;
        case "lpstr-cp":
            l = wt(this, this.l), e = 4 + kt(this, this.l);
            break;
        case "lpwstr":
            l = Ct(this, this.l), e = 4 + 2 * kt(this, this.l);
            break;
        case "lpp4":
            e = 4 + kt(this, this.l), l = ct(this, this.l), 2 & e && (e += 2);
            break;
        case "8lpp4":
            e = 4 + kt(this, this.l), l = At(this, this.l), 3 & e && (e += 4 - (3 & e));
            break;
        case "cstr":
            for (e = 0, l = ""; 0 !== (a = Dt(this, this.l + e++));) f.push(B(a));
            l = f.join("");
            break;
        case "_wstr":
            for (e = 0, l = ""; 0 !== (a = Ot(this, this.l + e));) f.push(B(a)), e += 2;
            e += 2, l = f.join("");
            break;
        case "dbcs-cont":
            for (l = "", o = this.l, s = 0; s < e; ++s) {
                if (this.lens && -1 !== this.lens.indexOf(o)) return a = Dt(this, o), this.l = o + 1, i = Mt.call(this, e - s, a ? "dbcs-cont" : "sbcs-cont"), f.join("") + i;
                f.push(B(Ot(this, o))), o += 2
            }
            l = f.join(""), e *= 2;
            break;
        case "cpstr":
            if (void 0 !== b) {
                l = b.utils.decode(h, this.slice(this.l, this.l + e));
                break
            }
        case "sbcs-cont":
            for (l = "", o = this.l, s = 0; s != e; ++s) {
                if (this.lens && -1 !== this.lens.indexOf(o)) return a = Dt(this, o), this.l = o + 1, i = Mt.call(this, e - s, a ? "dbcs-cont" : "sbcs-cont"), f.join("") + i;
                f.push(B(Dt(this, o))), o += 1
            }
            l = f.join("");
            break;
        default:
            switch (e) {
                case 1:
                    return r = Dt(this, this.l), this.l++, r;
                case 2:
                    return r = ("i" === t ? Pt : Ot)(this, this.l), this.l += 2, r;
                case 4:
                case -4:
                    return "i" === t || 0 == (128 & this[this.l + 3]) ? (r = (e > 0 ? Ft : Nt)(this, this.l), this.l += 4, r) : (n = kt(this, this.l), this.l += 4, n);
                case 8:
                case -8:
                    if ("f" === t) return n = 8 == e ? yt(this, this.l) : yt([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
                    e = 8;
                case 16:
                    l = mt(this, this.l, e)
            }
    }
    return this.l += e, l
}
var Lt = function(e, t, r) {
    e[r] = 255 & t, e[r + 1] = t >>> 8 & 255
};

function Ut(e, t, r) {
    var n = 0,
        a = 0;
    if ("dbcs" === r) {
        for (a = 0; a != t.length; ++a) Lt(this, t.charCodeAt(a), this.l + 2 * a);
        n = 2 * t.length
    } else if ("sbcs" === r) {
        if (void 0 !== b && 874 == u)
            for (a = 0; a != t.length; ++a) {
                var i = b.utils.encode(u, t.charAt(a));
                this[this.l + a] = i[0]
            } else
                for (t = t.replace(/[^\x00-\x7F]/g, "_"), a = 0; a != t.length; ++a) this[this.l + a] = 255 & t.charCodeAt(a);
        n = t.length
    } else {
        if ("hex" === r) {
            for (; a < e; ++a) this[this.l++] = parseInt(t.slice(2 * a, 2 * a + 2), 16) || 0;
            return this
        }
        if ("utf16le" === r) {
            var s = Math.min(this.l + e, this.length);
            for (a = 0; a < Math.min(t.length, e); ++a) {
                var o = t.charCodeAt(a);
                this[this.l++] = 255 & o, this[this.l++] = o >> 8
            }
            for (; this.l < s;) this[this.l++] = 0;
            return this
        }
        switch (e) {
            case 1:
                n = 1, this[this.l] = 255 & t;
                break;
            case 2:
                n = 2, this[this.l] = 255 & t, t >>>= 8, this[this.l + 1] = 255 & t;
                break;
            case 3:
                n = 3, this[this.l] = 255 & t, t >>>= 8, this[this.l + 1] = 255 & t, t >>>= 8, this[this.l + 2] = 255 & t;
                break;
            case 4:
                n = 4,
                    function(e, t, r) {
                        e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255
                    }(this, t, this.l);
                break;
            case 8:
                if (n = 8, "f" === r) {
                    ! function(e, t, r) {
                        var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7,
                            a = 0,
                            i = 0,
                            s = n ? -t : t;
                        isFinite(s) ? 0 == s ? a = i = 0 : (a = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - a), a <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? a = -1022 : (i -= Math.pow(2, 52), a += 1023)) : (a = 2047, i = isNaN(t) ? 26985 : 0);
                        for (var o = 0; o <= 5; ++o, i /= 256) e[r + o] = 255 & i;
                        e[r + 6] = (15 & a) << 4 | 15 & i, e[r + 7] = a >> 4 | n
                    }(this, t, this.l);
                    break
                }
            case 16:
                break;
            case -4:
                n = 4,
                    function(e, t, r) {
                        e[r] = 255 & t, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255
                    }(this, t, this.l)
        }
    }
    return this.l += n, this
}

function Ht(e, t) {
    var r = mt(this, this.l, e.length >> 1);
    if (r !== e) throw new Error(t + "Expected " + e + " saw " + r);
    this.l += e.length >> 1
}

function Vt(e, t) {
    e.l = t, e.read_shift = Mt, e.chk = Ht, e.write_shift = Ut
}

function Wt(e, t) {
    e.l += t
}

function Xt(e) {
    var t = x(e);
    return Vt(t, 0), t
}

function Gt() {
    var e = [],
        t = T ? 256 : 2048,
        r = function(e) {
            var t = Xt(e);
            return Vt(t, 0), t
        },
        n = r(t),
        a = function() {
            n && (n.length > n.l && ((n = n.slice(0, n.l)).l = n.length), n.length > 0 && e.push(n), n = null)
        },
        i = function(e) {
            return n && e < n.length - n.l ? n : (a(), n = r(Math.max(e + 1, t)))
        };
    return {
        next: i,
        push: function(e) {
            a(), null == (n = e).l && (n.l = n.length), i(t)
        },
        end: function() {
            return a(), F(e)
        },
        _bufs: e
    }
}

function jt(e, t, r, n) {
    el || ((el = K(tl, "n")).BrtFRTArchID$ = 16);
    var a, i = +el[t];
    if (!isNaN(i)) {
        n || (n = tl[i].p || (r || []).length || 0), a = 1 + (i >= 128 ? 1 : 0) + 1, n >= 128 && ++a, n >= 16384 && ++a, n >= 2097152 && ++a;
        var s = e.next(a);
        i <= 127 ? s.write_shift(1, i) : (s.write_shift(1, 128 + (127 & i)), s.write_shift(1, i >> 7));
        for (var o = 0; 4 != o; ++o) {
            if (!(n >= 128)) {
                s.write_shift(1, n);
                break
            }
            s.write_shift(1, 128 + (127 & n)), n >>= 7
        }
        n > 0 && xt(r) && e.push(r)
    }
}

function $t(e, t, r) {
    var n = ce(e);
    if (t.s ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r)) : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)), !r || r.biff < 12) {
        for (; n.c >= 256;) n.c -= 256;
        for (; n.r >= 65536;) n.r -= 65536
    }
    return n
}

function zt(e, t, r) {
    var n = ce(e);
    return n.s = $t(n.s, t.s, r), n.e = $t(n.e, t.s, r), n
}

function Yt(e, t) {
    if (e.cRel && e.c < 0)
        for (e = ce(e); e.c < 0;) e.c += t > 8 ? 16384 : 256;
    if (e.rRel && e.r < 0)
        for (e = ce(e); e.r < 0;) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
    var r = tr(e);
    return e.cRel || null == e.cRel || (r = r.replace(/^([A-Z])/, "$$$1")), e.rRel || null == e.rRel || (r = function(e) {
        return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2")
    }(r)), r
}

function Kt(e, t) {
    return 0 != e.s.r || e.s.rRel || e.e.r != (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) || e.e.rRel ? 0 != e.s.c || e.s.cRel || e.e.c != (t.biff >= 12 ? 16383 : 255) || e.e.cRel ? Yt(e.s, t.biff) + ":" + Yt(e.e, t.biff) : (e.s.rRel ? "" : "$") + qt(e.s.r) + ":" + (e.e.rRel ? "" : "$") + qt(e.e.r) : (e.s.cRel ? "" : "$") + Zt(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Zt(e.e.c)
}

function Jt(e) {
    return parseInt(e.replace(/\$(\d+)$/, "$1"), 10) - 1
}

function qt(e) {
    return "" + (e + 1)
}

function Qt(e) {
    for (var t = e.replace(/^\$([A-Z])/, "$1"), r = 0, n = 0; n !== t.length; ++n) r = 26 * r + t.charCodeAt(n) - 64;
    return r - 1
}

function Zt(e) {
    if (e < 0) throw new Error("invalid column " + e);
    var t = "";
    for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode((e - 1) % 26 + 65) + t;
    return t
}

function er(e) {
    for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
        var a = e.charCodeAt(n);
        a >= 48 && a <= 57 ? t = 10 * t + (a - 48) : a >= 65 && a <= 90 && (r = 26 * r + (a - 64))
    }
    return {
        c: r - 1,
        r: t - 1
    }
}

function tr(e) {
    for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0) r = String.fromCharCode((t - 1) % 26 + 65) + r;
    return r + (e.r + 1)
}

function rr(e) {
    var t = e.indexOf(":");
    return -1 == t ? {
        s: er(e),
        e: er(e)
    } : {
        s: er(e.slice(0, t)),
        e: er(e.slice(t + 1))
    }
}

function nr(e, t) {
    return void 0 === t || "number" == typeof t ? nr(e.s, e.e) : ("string" != typeof e && (e = tr(e)), "string" != typeof t && (t = tr(t)), e == t ? e : e + ":" + t)
}

function ar(e) {
    var t = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: 0
            }
        },
        r = 0,
        n = 0,
        a = 0,
        i = e.length;
    for (r = 0; n < i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a;
    for (t.s.c = --r, r = 0; n < i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) r = 10 * r + a;
    if (t.s.r = --r, n === i || 10 != a) return t.e.c = t.s.c, t.e.r = t.s.r, t;
    for (++n, r = 0; n != i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a;
    for (t.e.c = --r, r = 0; n != i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) r = 10 * r + a;
    return t.e.r = --r, t
}

function ir(e, t) {
    var r = "d" == e.t && t instanceof Date;
    if (null != e.z) try {
        return e.w = L.format(e.z, r ? Z(t) : t)
    } catch (e) {}
    try {
        return e.w = L.format((e.XF || {}).numFmtId || (r ? 14 : 0), r ? Z(t) : t)
    } catch (e) {
        return "" + t
    }
}

function sr(e, t, r) {
    return null == e || null == e.t || "z" == e.t ? "" : void 0 !== e.w ? e.w : ("d" == e.t && !e.z && r && r.dateNF && (e.z = r.dateNF), "e" == e.t ? Gr[e.v] || e.v : ir(e, null == t ? e.v : t))
}

function or(e, t) {
    var r = t && t.sheet ? t.sheet : "Sheet1",
        n = {};
    return n[r] = e, {
        SheetNames: [r],
        Sheets: n
    }
}

function lr(e, t, r) {
    var n = r || {},
        a = e ? Array.isArray(e) : n.dense;
    var i = e || (a ? [] : {}),
        s = 0,
        o = 0;
    if (i && null != n.origin) {
        if ("number" == typeof n.origin) s = n.origin;
        else {
            var l = "string" == typeof n.origin ? er(n.origin) : n.origin;
            s = l.r, o = l.c
        }
        i["!ref"] || (i["!ref"] = "A1:A1")
    }
    var c = {
        s: {
            c: 1e7,
            r: 1e7
        },
        e: {
            c: 0,
            r: 0
        }
    };
    if (i["!ref"]) {
        var f = ar(i["!ref"]);
        c.s.c = f.s.c, c.s.r = f.s.r, c.e.c = Math.max(c.e.c, f.e.c), c.e.r = Math.max(c.e.r, f.e.r), -1 == s && (c.e.r = s = f.e.r + 1)
    }
    for (var h = 0; h != t.length; ++h)
        if (t[h]) {
            if (!Array.isArray(t[h])) throw new Error("aoa_to_sheet expects an array of arrays");
            for (var u = 0; u != t[h].length; ++u)
                if (void 0 !== t[h][u]) {
                    var d = {
                            v: t[h][u]
                        },
                        p = s + h,
                        m = o + u;
                    if (c.s.r > p && (c.s.r = p), c.s.c > m && (c.s.c = m), c.e.r < p && (c.e.r = p), c.e.c < m && (c.e.c = m), !t[h][u] || "object" != typeof t[h][u] || Array.isArray(t[h][u]) || t[h][u] instanceof Date)
                        if (Array.isArray(d.v) && (d.f = t[h][u][1], d.v = d.v[0]), null === d.v)
                            if (d.f) d.t = "n";
                            else if (n.nullError) d.t = "e", d.v = 0;
                    else {
                        if (!n.sheetStubs) continue;
                        d.t = "z"
                    } else "number" == typeof d.v ? d.t = "n" : "boolean" == typeof d.v ? d.t = "b" : d.v instanceof Date ? (d.z = n.dateNF || L._table[14], n.cellDates ? (d.t = "d", d.w = L.format(d.z, Z(d.v))) : (d.t = "n", d.v = Z(d.v), d.w = L.format(d.z, d.v))) : d.t = "s";
                    else d = t[h][u];
                    if (a) i[p] || (i[p] = []), i[p][m] && i[p][m].z && (d.z = i[p][m].z), i[p][m] = d;
                    else {
                        var g = tr({
                            c: m,
                            r: p
                        });
                        i[g] && i[g].z && (d.z = i[g].z), i[g] = d
                    }
                }
        } return c.s.c < 1e7 && (i["!ref"] = nr(c)), i
}

function cr(e, t) {
    return lr(null, e, t)
}

function fr(e, t) {
    return t || (t = Xt(4)), t.write_shift(4, e), t
}

function hr(e) {
    var t = e.read_shift(4);
    return 0 === t ? "" : e.read_shift(t, "dbcs")
}

function ur(e, t) {
    var r = !1;
    return null == t && (r = !0, t = Xt(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t
}

function dr(e) {
    return {
        ich: e.read_shift(2),
        ifnt: e.read_shift(2)
    }
}

function pr(e, t) {
    var r = e.l,
        n = e.read_shift(1),
        a = hr(e),
        i = [],
        s = {
            t: a,
            h: a
        };
    if (0 != (1 & n)) {
        for (var o = e.read_shift(4), l = 0; l != o; ++l) i.push(dr(e));
        s.r = i
    } else s.r = [{
        ich: 0,
        ifnt: 0
    }];
    return e.l = r + t, s
}
var mr = pr;

function gr(e, t) {
    var r = !1;
    return null == t && (r = !0, t = Xt(23 + 4 * e.t.length)), t.write_shift(1, 1), ur(e.t, t), t.write_shift(4, 1),
        function(e, t) {
            t || (t = Xt(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0)
        }({
            ich: 0,
            ifnt: 0
        }, t), r ? t.slice(0, t.l) : t
}

function vr(e) {
    var t = e.read_shift(4),
        r = e.read_shift(2);
    return r += e.read_shift(1) << 16, e.l++, {
        c: t,
        iStyleRef: r
    }
}

function Er(e, t) {
    return null == t && (t = Xt(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t
}

function Sr(e) {
    var t = e.read_shift(2);
    return t += e.read_shift(1) << 16, e.l++, {
        c: -1,
        iStyleRef: t
    }
}

function br(e, t) {
    return null == t && (t = Xt(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t
}
var wr = hr,
    Br = ur;

function Cr(e) {
    var t = e.read_shift(4);
    return 0 === t || 4294967295 === t ? "" : e.read_shift(t, "dbcs")
}

function _r(e, t) {
    var r = !1;
    return null == t && (r = !0, t = Xt(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t
}
var yr = hr,
    Tr = Cr,
    Ar = _r;

function Rr(e) {
    var t = e.slice(e.l, e.l + 4),
        r = 1 & t[0],
        n = 2 & t[0];
    e.l += 4;
    var a = 0 === n ? yt([0, 0, 0, 0, 252 & t[0], t[1], t[2], t[3]], 0) : Ft(t, 0) >> 2;
    return r ? a / 100 : a
}

function xr(e, t) {
    null == t && (t = Xt(4));
    var r = 0,
        n = 0,
        a = 100 * e;
    if (e == (0 | e) && e >= -536870912 && e < 536870912 ? n = 1 : a == (0 | a) && a >= -536870912 && a < 536870912 && (n = 1, r = 1), !n) throw new Error("unsupported RkNumber " + e);
    t.write_shift(-4, ((r ? a : e) << 2) + (r + 2))
}

function Ir(e) {
    var t = {
        s: {},
        e: {}
    };
    return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t
}
var Dr = Ir,
    Or = function(e, t) {
        return t || (t = Xt(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t
    };

function Pr(e) {
    if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
    return e.read_shift(8, "f")
}

function kr(e, t) {
    return (t || Xt(8)).write_shift(8, e, "f")
}

function Fr(e, t) {
    if (t || (t = Xt(8)), !e || e.auto) return t.write_shift(4, 0), t.write_shift(4, 0), t;
    null != e.index ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : null != e.theme ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
    var r = e.tint || 0;
    if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), e.rgb && null == e.theme) {
        var n = e.rgb || "FFFFFF";
        "number" == typeof n && (n = ("000000" + n.toString(16)).slice(-6)), t.write_shift(1, parseInt(n.slice(0, 2), 16)), t.write_shift(1, parseInt(n.slice(2, 4), 16)), t.write_shift(1, parseInt(n.slice(4, 6), 16)), t.write_shift(1, 255)
    } else t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
    return t
}
var Nr = {
        1: {
            n: "CodePage",
            t: 2
        },
        2: {
            n: "Category",
            t: 80
        },
        3: {
            n: "PresentationFormat",
            t: 80
        },
        4: {
            n: "ByteCount",
            t: 3
        },
        5: {
            n: "LineCount",
            t: 3
        },
        6: {
            n: "ParagraphCount",
            t: 3
        },
        7: {
            n: "SlideCount",
            t: 3
        },
        8: {
            n: "NoteCount",
            t: 3
        },
        9: {
            n: "HiddenCount",
            t: 3
        },
        10: {
            n: "MultimediaClipCount",
            t: 3
        },
        11: {
            n: "ScaleCrop",
            t: 11
        },
        12: {
            n: "HeadingPairs",
            t: 4108
        },
        13: {
            n: "TitlesOfParts",
            t: 4126
        },
        14: {
            n: "Manager",
            t: 80
        },
        15: {
            n: "Company",
            t: 80
        },
        16: {
            n: "LinksUpToDate",
            t: 11
        },
        17: {
            n: "CharacterCount",
            t: 3
        },
        19: {
            n: "SharedDoc",
            t: 11
        },
        22: {
            n: "HyperlinksChanged",
            t: 11
        },
        23: {
            n: "AppVersion",
            t: 3,
            p: "version"
        },
        24: {
            n: "DigSig",
            t: 65
        },
        26: {
            n: "ContentType",
            t: 80
        },
        27: {
            n: "ContentStatus",
            t: 80
        },
        28: {
            n: "Language",
            t: 80
        },
        29: {
            n: "Version",
            t: 80
        },
        255: {},
        2147483648: {
            n: "Locale",
            t: 19
        },
        2147483651: {
            n: "Behavior",
            t: 19
        },
        1919054434: {}
    },
    Mr = {
        1: {
            n: "CodePage",
            t: 2
        },
        2: {
            n: "Title",
            t: 80
        },
        3: {
            n: "Subject",
            t: 80
        },
        4: {
            n: "Author",
            t: 80
        },
        5: {
            n: "Keywords",
            t: 80
        },
        6: {
            n: "Comments",
            t: 80
        },
        7: {
            n: "Template",
            t: 80
        },
        8: {
            n: "LastAuthor",
            t: 80
        },
        9: {
            n: "RevNumber",
            t: 80
        },
        10: {
            n: "EditTime",
            t: 64
        },
        11: {
            n: "LastPrinted",
            t: 64
        },
        12: {
            n: "CreatedDate",
            t: 64
        },
        13: {
            n: "ModifiedDate",
            t: 64
        },
        14: {
            n: "PageCount",
            t: 3
        },
        15: {
            n: "WordCount",
            t: 3
        },
        16: {
            n: "CharCount",
            t: 3
        },
        17: {
            n: "Thumbnail",
            t: 71
        },
        18: {
            n: "Application",
            t: 80
        },
        19: {
            n: "DocSecurity",
            t: 3
        },
        255: {},
        2147483648: {
            n: "Locale",
            t: 19
        },
        2147483651: {
            n: "Behavior",
            t: 19
        },
        1919054434: {}
    },
    Lr = K(Nr, "n"),
    Ur = K(Mr, "n"),
    Hr = {
        1: "US",
        2: "CA",
        3: "",
        7: "RU",
        20: "EG",
        30: "GR",
        31: "NL",
        32: "BE",
        33: "FR",
        34: "ES",
        36: "HU",
        39: "IT",
        41: "CH",
        43: "AT",
        44: "GB",
        45: "DK",
        46: "SE",
        47: "NO",
        48: "PL",
        49: "DE",
        52: "MX",
        55: "BR",
        61: "AU",
        64: "NZ",
        66: "TH",
        81: "JP",
        82: "KR",
        84: "VN",
        86: "CN",
        90: "TR",
        105: "JS",
        213: "DZ",
        216: "MA",
        218: "LY",
        351: "PT",
        354: "IS",
        358: "FI",
        420: "CZ",
        886: "TW",
        961: "LB",
        962: "JO",
        963: "SY",
        964: "IQ",
        965: "KW",
        966: "SA",
        971: "AE",
        972: "IL",
        974: "QA",
        981: "IR",
        65535: "US"
    },
    Vr = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
var Wr, Xr = ce([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((function(e) {
        return [e >> 16 & 255, e >> 8 & 255, 255 & e]
    }))),
    Gr = {
        0: "#NULL!",
        7: "#DIV/0!",
        15: "#VALUE!",
        23: "#REF!",
        29: "#NAME?",
        36: "#NUM!",
        42: "#N/A",
        43: "#GETTING_DATA",
        255: "#WTF?"
    },
    jr = q(Gr),
    $r = {
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
        "application/vnd.ms-excel.binIndexWs": "TODO",
        "application/vnd.ms-excel.intlmacrosheet": "TODO",
        "application/vnd.ms-excel.binIndexMs": "TODO",
        "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
        "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
        "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
        "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
        "application/vnd.ms-excel.pivotTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
        "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
        "application/vnd.ms-office.chartstyle+xml": "TODO",
        "application/vnd.ms-office.chartex+xml": "TODO",
        "application/vnd.ms-excel.calcChain": "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
        "application/vnd.ms-office.activeX": "TODO",
        "application/vnd.ms-office.activeX+xml": "TODO",
        "application/vnd.ms-excel.attachedToolbars": "TODO",
        "application/vnd.ms-excel.connections": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
        "application/vnd.ms-excel.externalLink": "links",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
        "application/vnd.ms-excel.sheetMetadata": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "TODO",
        "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
        "application/vnd.ms-excel.pivotCacheRecords": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
        "application/vnd.ms-excel.queryTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
        "application/vnd.ms-excel.userNames": "TODO",
        "application/vnd.ms-excel.revisionHeaders": "TODO",
        "application/vnd.ms-excel.revisionLog": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
        "application/vnd.ms-excel.tableSingleCells": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
        "application/vnd.ms-excel.slicer": "TODO",
        "application/vnd.ms-excel.slicerCache": "TODO",
        "application/vnd.ms-excel.slicer+xml": "TODO",
        "application/vnd.ms-excel.slicerCache+xml": "TODO",
        "application/vnd.ms-excel.wsSortMap": "TODO",
        "application/vnd.ms-excel.table": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
        "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
        "application/vnd.ms-excel.Timeline+xml": "TODO",
        "application/vnd.ms-excel.TimelineCache+xml": "TODO",
        "application/vnd.ms-office.vbaProject": "vba",
        "application/vnd.ms-office.vbaProjectSignature": "TODO",
        "application/vnd.ms-office.volatileDependencies": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
        "application/vnd.ms-excel.controlproperties+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.model+data": "TODO",
        "application/vnd.ms-excel.Survey+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
        "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
        "application/vnd.openxmlformats-package.relationships+xml": "rels",
        "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
        "image/png": "TODO",
        sheet: "js"
    },
    zr = (Y(Wr = {
        workbooks: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
            xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
            xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
            xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
            xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
        },
        strs: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
            xlsb: "application/vnd.ms-excel.sharedStrings"
        },
        comments: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
            xlsb: "application/vnd.ms-excel.comments"
        },
        sheets: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
            xlsb: "application/vnd.ms-excel.worksheet"
        },
        charts: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
            xlsb: "application/vnd.ms-excel.chartsheet"
        },
        dialogs: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
            xlsb: "application/vnd.ms-excel.dialogsheet"
        },
        macros: {
            xlsx: "application/vnd.ms-excel.macrosheet+xml",
            xlsb: "application/vnd.ms-excel.macrosheet"
        },
        styles: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
            xlsb: "application/vnd.ms-excel.styles"
        }
    }).forEach((function(e) {
        ["xlsm", "xlam"].forEach((function(t) {
            Wr[e][t] || (Wr[e][t] = Wr[e].xlsx)
        }))
    })), Y(Wr).forEach((function(e) {
        Y(Wr[e]).forEach((function(t) {
            $r[Wr[e][t]] = e
        }))
    })), Wr),
    Yr = function(e) {
        for (var t = [], r = Y(e), n = 0; n !== r.length; ++n) null == t[e[r[n]]] && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
        return t
    }($r);
tt.CT = "http://schemas.openxmlformats.org/package/2006/content-types";
var Kr = Ze("Types", null, {
        xmlns: tt.CT,
        "xmlns:xsd": tt.xsd,
        "xmlns:xsi": tt.xsi
    }),
    Jr = [
        ["xml", "application/xml"],
        ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
        ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
        ["data", "application/vnd.openxmlformats-officedocument.model+data"],
        ["bmp", "image/bmp"],
        ["png", "image/png"],
        ["gif", "image/gif"],
        ["emf", "image/x-emf"],
        ["wmf", "image/x-wmf"],
        ["jpg", "image/jpeg"],
        ["jpeg", "image/jpeg"],
        ["tif", "image/tiff"],
        ["tiff", "image/tiff"],
        ["pdf", "application/pdf"],
        ["rels", Yr.rels[0]]
    ].map((function(e) {
        return Ze("Default", null, {
            Extension: e[0],
            ContentType: e[1]
        })
    }));

function qr(e, t) {
    var r, n = [];
    n[n.length] = Be, n[n.length] = Kr, n = n.concat(Jr);
    var a = function(a) {
            e[a] && e[a].length > 0 && (r = e[a][0], n[n.length] = Ze("Override", null, {
                PartName: ("/" == r[0] ? "" : "/") + r,
                ContentType: zr[a][t.bookType || "xlsx"]
            }))
        },
        i = function(r) {
            (e[r] || []).forEach((function(e) {
                n[n.length] = Ze("Override", null, {
                    PartName: ("/" == e[0] ? "" : "/") + e,
                    ContentType: zr[r][t.bookType || "xlsx"]
                })
            }))
        },
        s = function(t) {
            (e[t] || []).forEach((function(e) {
                n[n.length] = Ze("Override", null, {
                    PartName: ("/" == e[0] ? "" : "/") + e,
                    ContentType: Yr[t][0]
                })
            }))
        };
    return a("workbooks"), i("sheets"), i("charts"), s("themes"), ["strs", "styles"].forEach(a), ["coreprops", "extprops", "custprops"].forEach(s), s("vba"), s("comments"), s("drawings"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("")
}
var Qr = {
    WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
    SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
    HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
    VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
    XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
    XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
    XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
    CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
    CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
    VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};

function Zr(e) {
    var t = e.lastIndexOf("/");
    return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels"
}
tt.RELS = "http://schemas.openxmlformats.org/package/2006/relationships";
var en = Ze("Relationships", null, {
    xmlns: tt.RELS
});

function tn(e) {
    var t = [Be, en];
    return Y(e["!id"]).forEach((function(r) {
        t[t.length] = Ze("Relationship", null, e["!id"][r])
    })), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("")
}
var rn = [Qr.HLINK, Qr.XPATH, Qr.XMISS];

function nn(e, t, r, n, a, i) {
    if (a || (a = {}), e["!id"] || (e["!id"] = {}), t < 0)
        for (t = 1; e["!id"]["rId" + t]; ++t);
    if (a.Id = "rId" + t, a.Type = n, a.Target = r, i ? a.TargetMode = i : rn.indexOf(a.Type) > -1 && (a.TargetMode = "External"), e["!id"][a.Id]) throw new Error("Cannot rewrite rId " + t);
    return e["!id"][a.Id] = a, e[("/" + a.Target).replace("//", "/")] = a, t
}

function an(e, t, r) {
    return ['  <rdf:Description rdf:about="' + e + '">\n', '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + '"/>\n', "  </rdf:Description>\n"].join("")
}
var sn, on = (sn = '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + f.version + "</meta:generator></office:meta></office:document-meta>", function() {
        return sn
    }),
    ln = [
        ["cp:category", "Category"],
        ["cp:contentStatus", "ContentStatus"],
        ["cp:keywords", "Keywords"],
        ["cp:lastModifiedBy", "LastAuthor"],
        ["cp:lastPrinted", "LastPrinted"],
        ["cp:revision", "RevNumber"],
        ["cp:version", "Version"],
        ["dc:creator", "Author"],
        ["dc:description", "Comments"],
        ["dc:identifier", "Identifier"],
        ["dc:language", "Language"],
        ["dc:subject", "Subject"],
        ["dc:title", "Title"],
        ["dcterms:created", "CreatedDate", "date"],
        ["dcterms:modified", "ModifiedDate", "date"]
    ];
tt.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties", Qr.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
! function() {
    for (var e = new Array(ln.length), t = 0; t < ln.length; ++t) {
        var r = ln[t],
            n = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
        e[t] = new RegExp("<" + n + "[^>]*>([\\s\\S]*?)</" + n + ">")
    }
}();
var cn = Ze("cp:coreProperties", null, {
    "xmlns:cp": tt.CORE_PROPS,
    "xmlns:dc": tt.dc,
    "xmlns:dcterms": tt.dcterms,
    "xmlns:dcmitype": tt.dcmitype,
    "xmlns:xsi": tt.xsi
});

function fn(e, t, r, n, a) {
    null == a[e] && null != t && "" !== t && (a[e] = t, t = Fe(t), n[n.length] = r ? Ze(e, t, r) : qe(e, t))
}

function hn(e, t) {
    var r = t || {},
        n = [Be, cn],
        a = {};
    if (!e && !r.Props) return n.join("");
    e && (null != e.CreatedDate && fn("dcterms:created", "string" == typeof e.CreatedDate ? e.CreatedDate : et(e.CreatedDate, r.WTF), {
        "xsi:type": "dcterms:W3CDTF"
    }, n, a), null != e.ModifiedDate && fn("dcterms:modified", "string" == typeof e.ModifiedDate ? e.ModifiedDate : et(e.ModifiedDate, r.WTF), {
        "xsi:type": "dcterms:W3CDTF"
    }, n, a));
    for (var i = 0; i != ln.length; ++i) {
        var s = ln[i],
            o = r.Props && null != r.Props[s[1]] ? r.Props[s[1]] : e ? e[s[1]] : null;
        !0 === o ? o = "1" : !1 === o ? o = "0" : "number" == typeof o && (o = String(o)), null != o && fn(s[0], o, null, n, a)
    }
    return n.length > 2 && (n[n.length] = "</cp:coreProperties>", n[1] = n[1].replace("/>", ">")), n.join("")
}
var un = [
    ["Application", "Application", "string"],
    ["AppVersion", "AppVersion", "string"],
    ["Company", "Company", "string"],
    ["DocSecurity", "DocSecurity", "string"],
    ["Manager", "Manager", "string"],
    ["HyperlinksChanged", "HyperlinksChanged", "bool"],
    ["SharedDoc", "SharedDoc", "bool"],
    ["LinksUpToDate", "LinksUpToDate", "bool"],
    ["ScaleCrop", "ScaleCrop", "bool"],
    ["HeadingPairs", "HeadingPairs", "raw"],
    ["TitlesOfParts", "TitlesOfParts", "raw"]
];
tt.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties", Qr.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
var dn = Ze("Properties", null, {
    xmlns: tt.EXT_PROPS,
    "xmlns:vt": tt.vt
});

function pn(e) {
    var t = [],
        r = Ze;
    return e || (e = {}), e.Application = "SheetJS", t[t.length] = Be, t[t.length] = dn, un.forEach((function(n) {
        if (void 0 !== e[n[1]]) {
            var a;
            switch (n[2]) {
                case "string":
                    a = Fe(String(e[n[1]]));
                    break;
                case "bool":
                    a = e[n[1]] ? "true" : "false"
            }
            void 0 !== a && (t[t.length] = r(n[0], a))
        }
    })), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), {
        size: 2,
        baseType: "variant"
    })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map((function(e) {
        return "<vt:lpstr>" + Fe(e) + "</vt:lpstr>"
    })).join(""), {
        size: e.Worksheets,
        baseType: "lpstr"
    })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("")
}
tt.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties", Qr.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties";
var mn = Ze("Properties", null, {
    xmlns: tt.CUST_PROPS,
    "xmlns:vt": tt.vt
});

function gn(e) {
    var t = [Be, mn];
    if (!e) return t.join("");
    var r = 1;
    return Y(e).forEach((function(n) {
        ++r, t[t.length] = Ze("property", function(e, t) {
            switch (typeof e) {
                case "string":
                    var r = Ze("vt:lpwstr", Fe(e));
                    return t && (r = r.replace(/&quot;/g, "_x0022_")), r;
                case "number":
                    return Ze((0 | e) == e ? "vt:i4" : "vt:r8", Fe(String(e)));
                case "boolean":
                    return Ze("vt:bool", e ? "true" : "false")
            }
            if (e instanceof Date) return Ze("vt:filetime", et(e));
            throw new Error("Unable to serialize " + e)
        }(e[n], !0), {
            fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
            pid: r,
            name: Fe(n)
        })
    })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("")
}
var vn = {
    Title: "Title",
    Subject: "Subject",
    Author: "Author",
    Keywords: "Keywords",
    Comments: "Description",
    LastAuthor: "LastAuthor",
    RevNumber: "Revision",
    Application: "AppName",
    LastPrinted: "LastPrinted",
    CreatedDate: "Created",
    ModifiedDate: "LastSaved",
    Category: "Category",
    Manager: "Manager",
    Company: "Company",
    AppVersion: "Version",
    ContentStatus: "ContentStatus",
    Identifier: "Identifier",
    Language: "Language"
};
J(vn);

function En(e) {
    var t = e.read_shift(4),
        r = e.read_shift(4);
    return new Date(1e3 * (r / 1e7 * Math.pow(2, 32) + t / 1e7 - 11644473600)).toISOString().replace(/\.000/, "")
}

function Sn(e, t) {
    var r = Xt(4),
        n = Xt(4);
    switch (r.write_shift(4, 80 == e ? 31 : e), e) {
        case 3:
            n.write_shift(-4, t);
            break;
        case 5:
            (n = Xt(8)).write_shift(8, t, "f");
            break;
        case 11:
            n.write_shift(4, t ? 1 : 0);
            break;
        case 64:
            n = function(e) {
                var t = ("string" == typeof e ? new Date(Date.parse(e)) : e).getTime() / 1e3 + 11644473600,
                    r = t % Math.pow(2, 32),
                    n = (t - r) / Math.pow(2, 32);
                n *= 1e7;
                var a = (r *= 1e7) / Math.pow(2, 32) | 0;
                a > 0 && (r %= Math.pow(2, 32), n += a);
                var i = Xt(8);
                return i.write_shift(4, r), i.write_shift(4, n), i
            }(t);
            break;
        case 31:
        case 80:
            for ((n = Xt(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2))).write_shift(4, t.length + 1), n.write_shift(0, t, "dbcs"); n.l != n.length;) n.write_shift(1, 0);
            break;
        default:
            throw new Error("TypedPropertyValue unrecognized type " + e + " " + t)
    }
    return F([r, n])
}
var bn = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"].concat(["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"]);

function wn(e) {
    switch (typeof e) {
        case "boolean":
            return 11;
        case "number":
            return (0 | e) == e ? 3 : 5;
        case "string":
            return 31;
        case "object":
            if (e instanceof Date) return 64
    }
    return -1
}

function Bn(e, t, r) {
    var n = Xt(8),
        a = [],
        i = [],
        s = 8,
        o = 0,
        l = Xt(8),
        c = Xt(8);
    if (l.write_shift(4, 2), l.write_shift(4, 1200), c.write_shift(4, 1), i.push(l), a.push(c), s += 8 + l.length, !t) {
        (c = Xt(8)).write_shift(4, 0), a.unshift(c);
        var f = [Xt(4)];
        for (f[0].write_shift(4, e.length), o = 0; o < e.length; ++o) {
            var h = e[o][0];
            for ((l = Xt(8 + 2 * (h.length + 1) + (h.length % 2 ? 0 : 2))).write_shift(4, o + 2), l.write_shift(4, h.length + 1), l.write_shift(0, h, "dbcs"); l.l != l.length;) l.write_shift(1, 0);
            f.push(l)
        }
        l = F(f), i.unshift(l), s += 8 + l.length
    }
    for (o = 0; o < e.length; ++o)
        if ((!t || t[e[o][0]]) && !(bn.indexOf(e[o][0]) > -1) && null != e[o][1]) {
            var u = e[o][1],
                d = 0;
            if (t) {
                var p = r[d = +t[e[o][0]]];
                if ("version" == p.p && "string" == typeof u) {
                    var m = u.split(".");
                    u = (+m[0] << 16) + (+m[1] || 0)
                }
                l = Sn(p.t, u)
            } else {
                var g = wn(u); - 1 == g && (g = 31, u = String(u)), l = Sn(g, u)
            }
            i.push(l), (c = Xt(8)).write_shift(4, t ? d : 2 + o), a.push(c), s += 8 + l.length
        } var v = 8 * (i.length + 1);
    for (o = 0; o < i.length; ++o) a[o].write_shift(4, v), v += i[o].length;
    return n.write_shift(4, s), n.write_shift(4, i.length), F([n].concat(a).concat(i))
}

function Cn(e, t, r, n, a, i) {
    var s = Xt(a ? 68 : 48),
        o = [s];
    s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, X.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, a ? 2 : 1), s.write_shift(16, t, "hex"), s.write_shift(4, a ? 68 : 48);
    var l = Bn(e, r, n);
    if (o.push(l), a) {
        var c = Bn(a, null, null);
        s.write_shift(16, i, "hex"), s.write_shift(4, 68 + l.length), o.push(c)
    }
    return F(o)
}

function _n(e, t) {
    return e.read_shift(t), null
}

function yn(e, t) {
    return 1 === e.read_shift(t)
}

function Tn(e, t) {
    return t || (t = Xt(2)), t.write_shift(2, +!!e), t
}

function An(e) {
    return e.read_shift(2, "u")
}

function Rn(e, t) {
    return t || (t = Xt(2)), t.write_shift(2, e), t
}

function xn(e, t) {
    return function(e, t, r) {
        for (var n = [], a = e.l + t; e.l < a;) n.push(r(e, a - e.l));
        if (a !== e.l) throw new Error("Slurp error");
        return n
    }(e, t, An)
}

function In(e, t, r) {
    return r || (r = Xt(2)), r.write_shift(1, "e" == t ? +e : +!!e), r.write_shift(1, "e" == t ? 1 : 0), r
}

function Dn(e, t, r) {
    var n = e.read_shift(r && r.biff >= 12 ? 2 : 1),
        a = "sbcs-cont",
        i = h;
    (r && r.biff >= 8 && (h = 1200), r && 8 != r.biff) ? 12 == r.biff && (a = "wstr"): e.read_shift(1) && (a = "dbcs-cont");
    r.biff >= 2 && r.biff <= 5 && (a = "cpstr");
    var s = n ? e.read_shift(n, a) : "";
    return h = i, s
}

function On(e) {
    var t = h;
    h = 1200;
    var r, n = e.read_shift(2),
        a = e.read_shift(1),
        i = 4 & a,
        s = 8 & a,
        o = 1 + (1 & a),
        l = 0,
        c = {};
    s && (l = e.read_shift(2)), i && (r = e.read_shift(4));
    var f = 2 == o ? "dbcs-cont" : "sbcs-cont",
        u = 0 === n ? "" : e.read_shift(n, f);
    return s && (e.l += 4 * l), i && (e.l += r), c.t = u, s || (c.raw = "<t>" + c.t + "</t>", c.r = c.t), h = t, c
}

function Pn(e) {
    var t = e.t || "",
        r = Xt(3);
    r.write_shift(2, t.length), r.write_shift(1, 1);
    var n = Xt(2 * t.length);
    return n.write_shift(2 * t.length, t, "utf16le"), F([r, n])
}

function kn(e, t, r) {
    if (r) {
        if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, "cpstr");
        if (r.biff >= 12) return e.read_shift(t, "dbcs-cont")
    }
    return 0 === e.read_shift(1) ? e.read_shift(t, "sbcs-cont") : e.read_shift(t, "dbcs-cont")
}

function Fn(e, t, r) {
    var n = e.read_shift(r && 2 == r.biff ? 1 : 2);
    return 0 === n ? (e.l++, "") : kn(e, n, r)
}

function Nn(e, t, r) {
    if (r.biff > 5) return Fn(e, 0, r);
    var n = e.read_shift(1);
    return 0 === n ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont")
}

function Mn(e, t, r) {
    return r || (r = Xt(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r
}

function Ln(e, t) {
    var r = e.read_shift(16);
    switch (16, r) {
        case "e0c9ea79f9bace118c8200aa004ba90b":
            return function(e) {
                var t = e.read_shift(4),
                    r = e.l,
                    n = !1;
                t > 24 && (e.l += t - 24, "795881f43b1d7f48af2c825dc4852763" === e.read_shift(16) && (n = !0), e.l = r);
                var a = e.read_shift((n ? t - 24 : t) >> 1, "utf16le").replace(N, "");
                return n && (e.l += 24), a
            }(e);
        case "0303000000000000c000000000000046":
            return function(e) {
                for (var t = e.read_shift(2), r = ""; t-- > 0;) r += "../";
                var n = e.read_shift(0, "lpstr-ansi");
                if (e.l += 2, 57005 != e.read_shift(2)) throw new Error("Bad FileMoniker");
                if (0 === e.read_shift(4)) return r + n.replace(/\\/g, "/");
                var a = e.read_shift(4);
                if (3 != e.read_shift(2)) throw new Error("Bad FileMoniker");
                return r + e.read_shift(a >> 1, "utf16le").replace(N, "")
            }(e);
        default:
            throw new Error("Unsupported Moniker " + r)
    }
}

function Un(e) {
    var t = e.read_shift(4);
    return t > 0 ? e.read_shift(t, "utf16le").replace(N, "") : ""
}

function Hn(e, t) {
    t || (t = Xt(6 + 2 * e.length)), t.write_shift(4, 1 + e.length);
    for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r));
    return t.write_shift(2, 0), t
}

function Vn(e) {
    var t = Xt(512),
        r = 0,
        n = e.Target;
    "file://" == n.slice(0, 7) && (n = n.slice(7));
    var a = n.indexOf("#"),
        i = a > -1 ? 31 : 23;
    switch (n.charAt(0)) {
        case "#":
            i = 28;
            break;
        case ".":
            i &= -3
    }
    t.write_shift(4, 2), t.write_shift(4, i);
    var s = [8, 6815827, 6619237, 4849780, 83];
    for (r = 0; r < s.length; ++r) t.write_shift(4, s[r]);
    if (28 == i) Hn(n = n.slice(1), t);
    else if (2 & i) {
        for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < s.length; ++r) t.write_shift(1, parseInt(s[r], 16));
        var o = a > -1 ? n.slice(0, a) : n;
        for (t.write_shift(4, 2 * (o.length + 1)), r = 0; r < o.length; ++r) t.write_shift(2, o.charCodeAt(r));
        t.write_shift(2, 0), 8 & i && Hn(a > -1 ? n.slice(a + 1) : "", t)
    } else {
        for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < s.length; ++r) t.write_shift(1, parseInt(s[r], 16));
        for (var l = 0;
            "../" == n.slice(3 * l, 3 * l + 3) || "..\\" == n.slice(3 * l, 3 * l + 3);) ++l;
        for (t.write_shift(2, l), t.write_shift(4, n.length - 3 * l + 1), r = 0; r < n.length - 3 * l; ++r) t.write_shift(1, 255 & n.charCodeAt(r + 3 * l));
        for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r) t.write_shift(4, 0)
    }
    return t.slice(0, t.l)
}

function Wn(e) {
    return [e.read_shift(1), e.read_shift(1), e.read_shift(1), e.read_shift(1)]
}

function Xn(e, t) {
    var r = Wn(e);
    return r[3] = 0, r
}

function Gn(e) {
    return {
        r: e.read_shift(2),
        c: e.read_shift(2),
        ixfe: e.read_shift(2)
    }
}

function jn(e, t, r, n) {
    return n || (n = Xt(6)), n.write_shift(2, e), n.write_shift(2, t), n.write_shift(2, r || 0), n
}

function $n(e, t, r) {
    var n = r.biff > 8 ? 4 : 2;
    return [e.read_shift(n), e.read_shift(n, "i"), e.read_shift(n, "i")]
}

function zn(e) {
    return [e.read_shift(2), Rr(e)]
}

function Yn(e) {
    var t = e.read_shift(2),
        r = e.read_shift(2);
    return {
        s: {
            c: e.read_shift(2),
            r: t
        },
        e: {
            c: e.read_shift(2),
            r: r
        }
    }
}

function Kn(e, t) {
    return t || (t = Xt(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t
}

function Jn(e) {
    var t = e.read_shift(2),
        r = e.read_shift(2);
    return {
        s: {
            c: e.read_shift(1),
            r: t
        },
        e: {
            c: e.read_shift(1),
            r: r
        }
    }
}
var qn = Jn;

function Qn(e) {
    e.l += 4;
    var t = e.read_shift(2),
        r = e.read_shift(2),
        n = e.read_shift(2);
    return e.l += 12, [r, t, n]
}

function Zn(e) {
    e.l += 2, e.l += e.read_shift(2)
}
var ea = {
    0: Zn,
    4: Zn,
    5: Zn,
    6: Zn,
    7: function(e) {
        return e.l += 4, e.cf = e.read_shift(2), {}
    },
    8: Zn,
    9: Zn,
    10: Zn,
    11: Zn,
    12: Zn,
    13: function(e) {
        var t = {};
        return e.l += 4, e.l += 16, t.fSharedNote = e.read_shift(2), e.l += 4, t
    },
    14: Zn,
    15: Zn,
    16: Zn,
    17: Zn,
    18: Zn,
    19: Zn,
    20: Zn,
    21: Qn
};

function ta(e, t) {
    var r = {
        BIFFVer: 0,
        dt: 0
    };
    switch (r.BIFFVer = e.read_shift(2), (t -= 2) >= 2 && (r.dt = e.read_shift(2), e.l -= 2), r.BIFFVer) {
        case 1536:
        case 1280:
        case 1024:
        case 768:
        case 512:
        case 2:
        case 7:
            break;
        default:
            if (t > 6) throw new Error("Unexpected BIFF Ver " + r.BIFFVer)
    }
    return e.read_shift(t), r
}

function ra(e, t, r) {
    var n = 1536,
        a = 16;
    switch (r.bookType) {
        case "biff8":
        case "xla":
            break;
        case "biff5":
            n = 1280, a = 8;
            break;
        case "biff4":
            n = 4, a = 6;
            break;
        case "biff3":
            n = 3, a = 6;
            break;
        case "biff2":
            n = 2, a = 4;
            break;
        default:
            throw new Error("unsupported BIFF version")
    }
    var i = Xt(a);
    return i.write_shift(2, n), i.write_shift(2, t), a > 4 && i.write_shift(2, 29282), a > 6 && i.write_shift(2, 1997), a > 8 && (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)), i
}

function na(e, t) {
    var r = !t || t.biff >= 8 ? 2 : 1,
        n = Xt(8 + r * e.name.length);
    n.write_shift(4, e.pos), n.write_shift(1, e.hs || 0), n.write_shift(1, e.dt), n.write_shift(1, e.name.length), t.biff >= 8 && n.write_shift(1, 1), n.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
    var a = n.slice(0, n.l);
    return a.l = n.l, a
}

function aa(e, t, r) {
    var n = 0;
    r && 2 == r.biff || (n = e.read_shift(2));
    var a = e.read_shift(2);
    return r && 2 == r.biff && (n = 1 - (a >> 15), a &= 32767), [{
        Unsynced: 1 & n,
        DyZero: (2 & n) >> 1,
        ExAsc: (4 & n) >> 2,
        ExDsc: (8 & n) >> 3
    }, a]
}

function ia(e, t, r, n) {
    var a = r && 5 == r.biff;
    n || (n = Xt(a ? 3 + t.length : 5 + 2 * t.length)), n.write_shift(2, e), n.write_shift(a ? 1 : 2, t.length), a || n.write_shift(1, 1), n.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le");
    var i = n.length > n.l ? n.slice(0, n.l) : n;
    return null == i.l && (i.l = i.length), i
}
var sa = Nn;

function oa(e, t, r) {
    var n = e.l + t,
        a = 8 != r.biff && r.biff ? 2 : 4,
        i = e.read_shift(a),
        s = e.read_shift(a),
        o = e.read_shift(2),
        l = e.read_shift(2);
    return e.l = n, {
        s: {
            r: i,
            c: o
        },
        e: {
            r: s,
            c: l
        }
    }
}

function la(e, t, r, n) {
    var a = r && 5 == r.biff;
    n || (n = Xt(a ? 16 : 20)), n.write_shift(2, 0), e.style ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524)) : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4));
    var i = 0;
    return e.numFmtId > 0 && a && (i |= 1024), n.write_shift(4, i), n.write_shift(4, 0), a || n.write_shift(4, 0), n.write_shift(2, 0), n
}

function ca(e, t, r) {
    var n = Gn(e);
    2 != r.biff && 9 != t || ++e.l;
    var a = function(e) {
        var t = e.read_shift(1);
        return 1 === e.read_shift(1) ? t : 1 === t
    }(e);
    return n.val = a, n.t = !0 === a || !1 === a ? "b" : "e", n
}
var fa = function(e, t, r) {
    return 0 === t ? "" : Nn(e, 0, r)
};

function ha(e, t, r) {
    var n, a = e.read_shift(2),
        i = {
            fBuiltIn: 1 & a,
            fWantAdvise: a >>> 1 & 1,
            fWantPict: a >>> 2 & 1,
            fOle: a >>> 3 & 1,
            fOleLink: a >>> 4 & 1,
            cf: a >>> 5 & 1023,
            fIcon: a >>> 15 & 1
        };
    return 14849 === r.sbcch && (n = function(e, t, r) {
        e.l += 4, t -= 4;
        var n = e.l + t,
            a = Dn(e, 0, r),
            i = e.read_shift(2);
        if (i !== (n -= e.l)) throw new Error("Malformed AddinUdf: padding = " + n + " != " + i);
        return e.l += i, a
    }(e, t - 2, r)), i.body = n || e.read_shift(t - 2), "string" == typeof n && (i.Name = n), i
}
var ua = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"];

function da(e, t, r) {
    var n = e.l + t,
        a = e.read_shift(2),
        i = e.read_shift(1),
        s = e.read_shift(1),
        o = e.read_shift(r && 2 == r.biff ? 1 : 2),
        l = 0;
    (!r || r.biff >= 5) && (5 != r.biff && (e.l += 2), l = e.read_shift(2), 5 == r.biff && (e.l += 2), e.l += 4);
    var c = kn(e, s, r);
    32 & a && (c = ua[c.charCodeAt(0)]);
    var f = n - e.l;
    r && 2 == r.biff && --f;
    var h = n != e.l && 0 !== o && f > 0 ? function(e, t, r, n) {
        var a, i = e.l + t,
            s = As(e, n, r);
        i !== e.l && (a = Ts(e, i - e.l, s, r));
        return [s, a]
    }(e, f, r, o) : [];
    return {
        chKey: i,
        Name: c,
        itab: l,
        rgce: h
    }
}

function pa(e, t, r) {
    if (r.biff < 8) return function(e, t, r) {
        3 == e[e.l + 1] && e[e.l]++;
        var n = Dn(e, 0, r);
        return 3 == n.charCodeAt(0) ? n.slice(1) : n
    }(e, 0, r);
    for (var n = [], a = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2); 0 != i--;) n.push($n(e, r.biff, r));
    if (e.l != a) throw new Error("Bad ExternSheet: " + e.l + " != " + a);
    return n
}

function ma(e, t, r) {
    var n = qn(e, 6);
    switch (r.biff) {
        case 2:
            e.l++, t -= 7;
            break;
        case 3:
        case 4:
            e.l += 2, t -= 8;
            break;
        default:
            e.l += 6, t -= 12
    }
    return [n, ks(e, t, r)]
}
var ga = [];

function va(e) {
    var t = Xt(24),
        r = er(e[0]);
    t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
    for (var n = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), a = 0; a < 16; ++a) t.write_shift(1, parseInt(n[a], 16));
    return F([t, Vn(e[1])])
}

function Ea(e) {
    var t = e[1].Tooltip,
        r = Xt(10 + 2 * (t.length + 1));
    r.write_shift(2, 2048);
    var n = er(e[0]);
    r.write_shift(2, n.r), r.write_shift(2, n.r), r.write_shift(2, n.c), r.write_shift(2, n.c);
    for (var a = 0; a < t.length; ++a) r.write_shift(2, t.charCodeAt(a));
    return r.write_shift(2, 0), r
}

function Sa(e, t, r) {
    if (!r.cellStyles) return Wt(e, t);
    var n = r && r.biff >= 12 ? 4 : 2,
        a = e.read_shift(n),
        i = e.read_shift(n),
        s = e.read_shift(n),
        o = e.read_shift(n),
        l = e.read_shift(2);
    2 == n && (e.l += 2);
    var c = {
        s: a,
        e: i,
        w: s,
        ixfe: o,
        flags: l
    };
    return (r.biff >= 5 || !r.biff) && (c.level = l >> 8 & 7), c
}
ga[8] = function(e, t) {
    var r = e.l + t;
    e.l += 10;
    var n = e.read_shift(2);
    e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
    var a = e.read_shift(1);
    return e.l += a, e.l = r, {
        fmt: n
    }
};
var ba = Gn,
    wa = xn,
    Ba = Fn;
var Ca = function() {
        var e = {
                1: 437,
                2: 850,
                3: 1252,
                4: 1e4,
                100: 852,
                101: 866,
                102: 865,
                103: 861,
                104: 895,
                105: 620,
                106: 737,
                107: 857,
                120: 950,
                121: 949,
                122: 936,
                123: 932,
                124: 874,
                125: 1255,
                126: 1256,
                150: 10007,
                151: 10029,
                152: 10006,
                200: 1250,
                201: 1251,
                202: 1254,
                203: 1253,
                0: 20127,
                8: 865,
                9: 437,
                10: 850,
                11: 437,
                13: 437,
                14: 850,
                15: 437,
                16: 850,
                17: 437,
                18: 850,
                19: 932,
                20: 850,
                21: 437,
                22: 850,
                23: 865,
                24: 437,
                25: 437,
                26: 850,
                27: 437,
                28: 863,
                29: 850,
                31: 852,
                34: 852,
                35: 852,
                36: 860,
                37: 850,
                38: 866,
                55: 850,
                64: 852,
                77: 936,
                78: 949,
                79: 950,
                80: 874,
                87: 1252,
                88: 1252,
                89: 1252,
                108: 863,
                134: 737,
                135: 852,
                136: 857,
                204: 1257,
                255: 16969
            },
            t = J({
                1: 437,
                2: 850,
                3: 1252,
                4: 1e4,
                100: 852,
                101: 866,
                102: 865,
                103: 861,
                104: 895,
                105: 620,
                106: 737,
                107: 857,
                120: 950,
                121: 949,
                122: 936,
                123: 932,
                124: 874,
                125: 1255,
                126: 1256,
                150: 10007,
                151: 10029,
                152: 10006,
                200: 1250,
                201: 1251,
                202: 1254,
                203: 1253,
                0: 20127
            });

        function r(t, r) {
            var n = r || {};
            return n.dateNF || (n.dateNF = "yyyymmdd"), cr(function(t, r) {
                var n = [],
                    a = x(1);
                switch (r.type) {
                    case "base64":
                        a = D(y.decode(t));
                        break;
                    case "binary":
                        a = D(t);
                        break;
                    case "buffer":
                    case "array":
                        a = t
                }
                Vt(a, 0);
                var i = a.read_shift(1),
                    s = !!(136 & i),
                    o = !1,
                    l = !1;
                switch (i) {
                    case 2:
                    case 3:
                    case 131:
                    case 139:
                    case 245:
                        break;
                    case 48:
                    case 49:
                        o = !0, s = !0;
                        break;
                    case 140:
                        l = !0;
                        break;
                    default:
                        throw new Error("DBF Unsupported Version: " + i.toString(16))
                }
                var c = 0,
                    f = 521;
                2 == i && (c = a.read_shift(2)), a.l += 3, 2 != i && (c = a.read_shift(4)), c > 1048576 && (c = 1e6), 2 != i && (f = a.read_shift(2));
                var h = a.read_shift(2),
                    u = r.codepage || 1252;
                2 != i && (a.l += 16, a.read_shift(1), 0 !== a[a.l] && (u = e[a[a.l]]), a.l += 1, a.l += 2), l && (a.l += 36);
                for (var d = [], p = {}, m = Math.min(a.length, 2 == i ? 521 : f - 10 - (o ? 264 : 0)), g = l ? 32 : 11; a.l < m && 13 != a[a.l];) switch ((p = {}).name = b.utils.decode(u, a.slice(a.l, a.l + g)).replace(/[\u0000\r\n].*$/g, ""), a.l += g, p.type = String.fromCharCode(a.read_shift(1)), 2 == i || l || (p.offset = a.read_shift(4)), p.len = a.read_shift(1), 2 == i && (p.offset = a.read_shift(2)), p.dec = a.read_shift(1), p.name.length && d.push(p), 2 != i && (a.l += l ? 13 : 14), p.type) {
                    case "B":
                        (!o || 8 != p.len) && r.WTF;
                        break;
                    case "G":
                    case "P":
                        r.WTF;
                        break;
                    case "+":
                    case "0":
                    case "@":
                    case "C":
                    case "D":
                    case "F":
                    case "I":
                    case "L":
                    case "M":
                    case "N":
                    case "O":
                    case "T":
                    case "Y":
                        break;
                    default:
                        throw new Error("Unknown Field Type: " + p.type)
                }
                if (13 !== a[a.l] && (a.l = f - 1), 13 !== a.read_shift(1)) throw new Error("DBF Terminator not found " + a.l + " " + a[a.l]);
                a.l = f;
                var v = 0,
                    E = 0;
                for (n[0] = [], E = 0; E != d.length; ++E) n[0][E] = d[E].name;
                for (; c-- > 0;)
                    if (42 !== a[a.l])
                        for (++a.l, n[++v] = [], E = 0, E = 0; E != d.length; ++E) {
                            var S = a.slice(a.l, a.l + d[E].len);
                            a.l += d[E].len, Vt(S, 0);
                            var w = b.utils.decode(u, S);
                            switch (d[E].type) {
                                case "C":
                                    w.trim().length && (n[v][E] = w.replace(/\s+$/, ""));
                                    break;
                                case "D":
                                    8 === w.length ? n[v][E] = new Date(+w.slice(0, 4), +w.slice(4, 6) - 1, +w.slice(6, 8)) : n[v][E] = w;
                                    break;
                                case "F":
                                    n[v][E] = parseFloat(w.trim());
                                    break;
                                case "+":
                                case "I":
                                    n[v][E] = l ? 2147483648 ^ S.read_shift(-4, "i") : S.read_shift(4, "i");
                                    break;
                                case "L":
                                    switch (w.trim().toUpperCase()) {
                                        case "Y":
                                        case "T":
                                            n[v][E] = !0;
                                            break;
                                        case "N":
                                        case "F":
                                            n[v][E] = !1;
                                            break;
                                        case "":
                                        case "?":
                                            break;
                                        default:
                                            throw new Error("DBF Unrecognized L:|" + w + "|")
                                    }
                                    break;
                                case "M":
                                    if (!s) throw new Error("DBF Unexpected MEMO for type " + i.toString(16));
                                    n[v][E] = "##MEMO##" + (l ? parseInt(w.trim(), 10) : S.read_shift(4));
                                    break;
                                case "N":
                                    (w = w.replace(/\u0000/g, "").trim()) && "." != w && (n[v][E] = +w || 0);
                                    break;
                                case "@":
                                    n[v][E] = new Date(S.read_shift(-8, "f") - 621356832e5);
                                    break;
                                case "T":
                                    n[v][E] = new Date(864e5 * (S.read_shift(4) - 2440588) + S.read_shift(4));
                                    break;
                                case "Y":
                                    n[v][E] = S.read_shift(4, "i") / 1e4;
                                    break;
                                case "O":
                                    n[v][E] = -S.read_shift(-8, "f");
                                    break;
                                case "B":
                                    if (o && 8 == d[E].len) {
                                        n[v][E] = S.read_shift(8, "f");
                                        break
                                    }
                                case "G":
                                case "P":
                                    S.l += d[E].len;
                                    break;
                                case "0":
                                    if ("_NullFlags" === d[E].name) break;
                                default:
                                    throw new Error("DBF Unsupported data type " + d[E].type)
                            }
                        } else a.l += h;
                if (2 != i && a.l < a.length && 26 != a[a.l++]) throw new Error("DBF EOF Marker missing " + (a.l - 1) + " of " + a.length + " " + a[a.l - 1].toString(16));
                return r && r.sheetRows && (n = n.slice(0, r.sheetRows)), n
            }(t, n), n)
        }
        var n = {
            B: 8,
            C: 250,
            L: 1,
            D: 8,
            "?": 0,
            "": 0
        };
        return {
            versions: [2, 3, 48, 49, 131, 139, 140, 245],
            to_workbook: function(e, t) {
                try {
                    return or(r(e, t), t)
                } catch (e) {
                    if (t && t.WTF) throw e
                }
                return {
                    SheetNames: [],
                    Sheets: {}
                }
            },
            to_sheet: r,
            from_sheet: function(e, r) {
                var a = r || {};
                if (+a.codepage >= 0 && v(+a.codepage), "string" == a.type) throw new Error("Cannot write DBF to JS string");
                var i = Gt(),
                    s = zl(e, {
                        header: 1,
                        raw: !0,
                        cellDates: !0
                    }),
                    o = s[0],
                    l = s.slice(1),
                    c = 0,
                    f = 0,
                    h = 0,
                    d = 1;
                for (c = 0; c < o.length; ++c)
                    if (null != c) {
                        if (++h, "number" == typeof o[c] && (o[c] = o[c].toString(10)), "string" != typeof o[c]) throw new Error("DBF Invalid column name " + o[c] + " |" + typeof o[c] + "|");
                        if (o.indexOf(o[c]) !== c)
                            for (f = 0; f < 1024; ++f)
                                if (-1 == o.indexOf(o[c] + "_" + f)) {
                                    o[c] += "_" + f;
                                    break
                                }
                    } var p = ar(e["!ref"]),
                    m = [];
                for (c = 0; c <= p.e.c - p.s.c; ++c) {
                    var g = [];
                    for (f = 0; f < l.length; ++f) null != l[f][c] && g.push(l[f][c]);
                    if (0 != g.length && null != o[c]) {
                        var E = "",
                            S = "";
                        for (f = 0; f < g.length; ++f) {
                            switch (typeof g[f]) {
                                case "number":
                                    S = "B";
                                    break;
                                case "string":
                                default:
                                    S = "C";
                                    break;
                                case "boolean":
                                    S = "L";
                                    break;
                                case "object":
                                    S = g[f] instanceof Date ? "D" : "C"
                            }
                            if ("C" == (E = E && E != S ? "C" : S)) break
                        }
                        d += n[E] || 0, m[c] = E
                    } else m[c] = "?"
                }
                var b = i.next(32);
                for (b.write_shift(4, 318902576), b.write_shift(4, l.length), b.write_shift(2, 296 + 32 * h), b.write_shift(2, d), c = 0; c < 4; ++c) b.write_shift(4, 0);
                for (b.write_shift(4, 0 | (+t[u] || 3) << 8), c = 0, f = 0; c < o.length; ++c)
                    if (null != o[c]) {
                        var w = i.next(32),
                            B = (o[c].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
                        w.write_shift(1, B, "sbcs"), w.write_shift(1, "?" == m[c] ? "C" : m[c], "sbcs"), w.write_shift(4, f), w.write_shift(1, n[m[c]] || 0), w.write_shift(1, 0), w.write_shift(1, 2), w.write_shift(4, 0), w.write_shift(1, 0), w.write_shift(4, 0), w.write_shift(4, 0), f += n[m[c]] || 0
                    } var C = i.next(264);
                for (C.write_shift(4, 13), c = 0; c < 65; ++c) C.write_shift(4, 0);
                for (c = 0; c < l.length; ++c) {
                    var _ = i.next(d);
                    for (_.write_shift(1, 0), f = 0; f < o.length; ++f)
                        if (null != o[f]) switch (m[f]) {
                            case "L":
                                _.write_shift(1, null == l[c][f] ? 63 : l[c][f] ? 84 : 70);
                                break;
                            case "B":
                                _.write_shift(8, l[c][f] || 0, "f");
                                break;
                            case "D":
                                l[c][f] ? (_.write_shift(4, ("0000" + l[c][f].getFullYear()).slice(-4), "sbcs"), _.write_shift(2, ("00" + (l[c][f].getMonth() + 1)).slice(-2), "sbcs"), _.write_shift(2, ("00" + l[c][f].getDate()).slice(-2), "sbcs")) : _.write_shift(8, "00000000", "sbcs");
                                break;
                            case "C":
                                var y = String(l[c][f] || "");
                                for (_.write_shift(1, y, "sbcs"), h = 0; h < 250 - y.length; ++h) _.write_shift(1, 32)
                        }
                }
                return i.next(1).write_shift(1, 26), i.end()
            }
        }
    }(),
    _a = function() {
        var e = {
                AA: "À",
                BA: "Á",
                CA: "Â",
                DA: 195,
                HA: "Ä",
                JA: 197,
                AE: "È",
                BE: "É",
                CE: "Ê",
                HE: "Ë",
                AI: "Ì",
                BI: "Í",
                CI: "Î",
                HI: "Ï",
                AO: "Ò",
                BO: "Ó",
                CO: "Ô",
                DO: 213,
                HO: "Ö",
                AU: "Ù",
                BU: "Ú",
                CU: "Û",
                HU: "Ü",
                Aa: "à",
                Ba: "á",
                Ca: "â",
                Da: 227,
                Ha: "ä",
                Ja: 229,
                Ae: "è",
                Be: "é",
                Ce: "ê",
                He: "ë",
                Ai: "ì",
                Bi: "í",
                Ci: "î",
                Hi: "ï",
                Ao: "ò",
                Bo: "ó",
                Co: "ô",
                Do: 245,
                Ho: "ö",
                Au: "ù",
                Bu: "ú",
                Cu: "û",
                Hu: "ü",
                KC: "Ç",
                Kc: "ç",
                q: "æ",
                z: "œ",
                a: "Æ",
                j: "Œ",
                DN: 209,
                Dn: 241,
                Hy: 255,
                S: 169,
                c: 170,
                R: 174,
                "B ": 180,
                0: 176,
                1: 177,
                2: 178,
                3: 179,
                5: 181,
                6: 182,
                7: 183,
                Q: 185,
                k: 186,
                b: 208,
                i: 216,
                l: 222,
                s: 240,
                y: 248,
                "!": 161,
                '"': 162,
                "#": 163,
                "(": 164,
                "%": 165,
                "'": 167,
                "H ": 168,
                "+": 171,
                ";": 187,
                "<": 188,
                "=": 189,
                ">": 190,
                "?": 191,
                "{": 223
            },
            t = new RegExp("N(" + Y(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"),
            r = function(t, r) {
                var n = e[r];
                return "number" == typeof n ? C(n) : n
            },
            n = function(e, t, r) {
                var n = t.charCodeAt(0) - 32 << 4 | r.charCodeAt(0) - 48;
                return 59 == n ? e : C(n)
            };

        function a(e, a) {
            var i, s = e.split(/[\n\r]+/),
                o = -1,
                l = -1,
                c = 0,
                f = 0,
                h = [],
                u = [],
                d = null,
                p = {},
                m = [],
                g = [],
                E = [],
                S = 0;
            for (+a.codepage >= 0 && v(+a.codepage); c !== s.length; ++c) {
                S = 0;
                var w, B = s[c].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(t, r),
                    C = B.replace(/;;/g, "\0").split(";").map((function(e) {
                        return e.replace(/\u0000/g, ";")
                    })),
                    _ = C[0];
                if (B.length > 0) switch (_) {
                    case "ID":
                    case "E":
                    case "B":
                    case "O":
                    case "W":
                        break;
                    case "P":
                        "P" == C[1].charAt(0) && u.push(B.slice(3).replace(/;;/g, ";"));
                        break;
                    case "C":
                        var y = !1,
                            T = !1,
                            A = !1,
                            R = !1,
                            x = -1,
                            I = -1;
                        for (f = 1; f < C.length; ++f) switch (C[f].charAt(0)) {
                            case "A":
                            case "G":
                                break;
                            case "X":
                                l = parseInt(C[f].slice(1)) - 1, T = !0;
                                break;
                            case "Y":
                                for (o = parseInt(C[f].slice(1)) - 1, T || (l = 0), i = h.length; i <= o; ++i) h[i] = [];
                                break;
                            case "K":
                                '"' === (w = C[f].slice(1)).charAt(0) ? w = w.slice(1, w.length - 1) : "TRUE" === w ? w = !0 : "FALSE" === w ? w = !1 : isNaN(he(w)) ? isNaN(de(w).getDate()) || (w = oe(w)) : (w = he(w), null !== d && L.is_date(d) && (w = ne(w))), void 0 !== b && "string" == typeof w && "string" != (a || {}).type && (a || {}).codepage && (w = b.utils.decode(a.codepage, w)), y = !0;
                                break;
                            case "E":
                                R = !0;
                                var D = zi(C[f].slice(1), {
                                    r: o,
                                    c: l
                                });
                                h[o][l] = [h[o][l], D];
                                break;
                            case "S":
                                A = !0, h[o][l] = [h[o][l], "S5S"];
                                break;
                            case "R":
                                x = parseInt(C[f].slice(1)) - 1;
                                break;
                            case "C":
                                I = parseInt(C[f].slice(1)) - 1;
                                break;
                            default:
                                if (a && a.WTF) throw new Error("SYLK bad record " + B)
                        }
                        if (y && (h[o][l] && 2 == h[o][l].length ? h[o][l][0] = w : h[o][l] = w, d = null), A) {
                            if (R) throw new Error("SYLK shared formula cannot have own formula");
                            var O = x > -1 && h[x][I];
                            if (!O || !O[1]) throw new Error("SYLK shared formula cannot find base");
                            h[o][l][1] = Ji(O[1], {
                                r: o - x,
                                c: l - I
                            })
                        }
                        break;
                    case "F":
                        var P = 0;
                        for (f = 1; f < C.length; ++f) switch (C[f].charAt(0)) {
                            case "X":
                                l = parseInt(C[f].slice(1)) - 1, ++P;
                                break;
                            case "Y":
                                for (o = parseInt(C[f].slice(1)) - 1, i = h.length; i <= o; ++i) h[i] = [];
                                break;
                            case "M":
                                S = parseInt(C[f].slice(1)) / 20;
                                break;
                            case "F":
                            case "G":
                            case "S":
                            case "D":
                            case "N":
                                break;
                            case "P":
                                d = u[parseInt(C[f].slice(1))];
                                break;
                            case "W":
                                for (E = C[f].slice(1).split(" "), i = parseInt(E[0], 10); i <= parseInt(E[1], 10); ++i) S = parseInt(E[2], 10), g[i - 1] = 0 === S ? {
                                    hidden: !0
                                } : {
                                    wch: S
                                }, ai(g[i - 1]);
                                break;
                            case "C":
                                g[l = parseInt(C[f].slice(1)) - 1] || (g[l] = {});
                                break;
                            case "R":
                                m[o = parseInt(C[f].slice(1)) - 1] || (m[o] = {}), S > 0 ? (m[o].hpt = S, m[o].hpx = si(S)) : 0 === S && (m[o].hidden = !0);
                                break;
                            default:
                                if (a && a.WTF) throw new Error("SYLK bad record " + B)
                        }
                        P < 1 && (d = null);
                        break;
                    default:
                        if (a && a.WTF) throw new Error("SYLK bad record " + B)
                }
            }
            return m.length > 0 && (p["!rows"] = m), g.length > 0 && (p["!cols"] = g), a && a.sheetRows && (h = h.slice(0, a.sheetRows)), [h, p]
        }

        function i(e, t) {
            var r = function(e, t) {
                    switch (t.type) {
                        case "base64":
                            return a(y.decode(e), t);
                        case "binary":
                            return a(e, t);
                        case "buffer":
                            return a(T && c.isBuffer(e) ? e.toString("binary") : P(e), t);
                        case "array":
                            return a(le(e), t)
                    }
                    throw new Error("Unrecognized type " + t.type)
                }(e, t),
                n = r[0],
                i = r[1],
                s = cr(n, t);
            return Y(i).forEach((function(e) {
                s[e] = i[e]
            })), s
        }

        function s(e, t, r, n) {
            var a = "C;Y" + (r + 1) + ";X" + (n + 1) + ";K";
            switch (e.t) {
                case "n":
                    a += e.v || 0, e.f && !e.F && (a += ";E" + Ki(e.f, {
                        r: r,
                        c: n
                    }));
                    break;
                case "b":
                    a += e.v ? "TRUE" : "FALSE";
                    break;
                case "e":
                    a += e.w || e.v;
                    break;
                case "d":
                    a += '"' + (e.w || e.v) + '"';
                    break;
                case "s":
                    a += '"' + e.v.replace(/"/g, "").replace(/;/g, ";;") + '"'
            }
            return a
        }
        return e["|"] = 254, {
            to_workbook: function(e, t) {
                return or(i(e, t), t)
            },
            to_sheet: i,
            from_sheet: function(e, t) {
                var r, n, a = ["ID;PWXL;N;E"],
                    i = [],
                    o = ar(e["!ref"]),
                    l = Array.isArray(e),
                    c = "\r\n";
                a.push("P;PGeneral"), a.push("F;P0;DG0G8;M255"), e["!cols"] && (n = a, e["!cols"].forEach((function(e, t) {
                    var r = "F;W" + (t + 1) + " " + (t + 1) + " ";
                    e.hidden ? r += "0" : ("number" != typeof e.width || e.wpx || (e.wpx = ti(e.width)), "number" != typeof e.wpx || e.wch || (e.wch = ri(e.wpx)), "number" == typeof e.wch && (r += Math.round(e.wch))), " " != r.charAt(r.length - 1) && n.push(r)
                }))), e["!rows"] && function(e, t) {
                    t.forEach((function(t, r) {
                        var n = "F;";
                        t.hidden ? n += "M0;" : t.hpt ? n += "M" + 20 * t.hpt + ";" : t.hpx && (n += "M" + 20 * ii(t.hpx) + ";"), n.length > 2 && e.push(n + "R" + (r + 1))
                    }))
                }(a, e["!rows"]), a.push("B;Y" + (o.e.r - o.s.r + 1) + ";X" + (o.e.c - o.s.c + 1) + ";D" + [o.s.c, o.s.r, o.e.c, o.e.r].join(" "));
                for (var f = o.s.r; f <= o.e.r; ++f)
                    for (var h = o.s.c; h <= o.e.c; ++h) {
                        var u = tr({
                            r: f,
                            c: h
                        });
                        (r = l ? (e[f] || [])[h] : e[u]) && (null != r.v || r.f && !r.F) && i.push(s(r, 0, f, h))
                    }
                return a.join(c) + c + i.join(c) + c + "E" + c
            }
        }
    }(),
    ya = function() {
        function e(e, t) {
            for (var r = e.split("\n"), n = -1, a = -1, i = 0, s = []; i !== r.length; ++i)
                if ("BOT" !== r[i].trim()) {
                    if (!(n < 0)) {
                        for (var o = r[i].trim().split(","), l = o[0], c = o[1], f = r[++i] || ""; 1 & (f.match(/["]/g) || []).length && i < r.length - 1;) f += "\n" + r[++i];
                        switch (f = f.trim(), +l) {
                            case -1:
                                if ("BOT" === f) {
                                    s[++n] = [], a = 0;
                                    continue
                                }
                                if ("EOD" !== f) throw new Error("Unrecognized DIF special command " + f);
                                break;
                            case 0:
                                "TRUE" === f ? s[n][a] = !0 : "FALSE" === f ? s[n][a] = !1 : isNaN(he(c)) ? isNaN(de(c).getDate()) ? s[n][a] = c : s[n][a] = oe(c) : s[n][a] = he(c), ++a;
                                break;
                            case 1:
                                (f = (f = f.slice(1, f.length - 1)).replace(/""/g, '"')) && f.match(/^=".*"$/) && (f = f.slice(2, -1)), s[n][a++] = "" !== f ? f : null
                        }
                        if ("EOD" === f) break
                    }
                } else s[++n] = [], a = 0;
            return t && t.sheetRows && (s = s.slice(0, t.sheetRows)), s
        }

        function t(t, r) {
            return cr(function(t, r) {
                switch (r.type) {
                    case "base64":
                        return e(y.decode(t), r);
                    case "binary":
                        return e(t, r);
                    case "buffer":
                        return e(T && c.isBuffer(t) ? t.toString("binary") : P(t), r);
                    case "array":
                        return e(le(t), r)
                }
                throw new Error("Unrecognized type " + r.type)
            }(t, r), r)
        }
        var r, n, a = (r = function(e, t, r, n, a) {
            e.push(t), e.push(r + "," + n), e.push('"' + a.replace(/"/g, '""') + '"')
        }, n = function(e, t, r, n) {
            e.push(t + "," + r), e.push(1 == t ? '"' + n.replace(/"/g, '""') + '"' : n)
        }, function(e) {
            var t, a = [],
                i = ar(e["!ref"]),
                s = Array.isArray(e);
            r(a, "TABLE", 0, 1, "sheetjs"), r(a, "VECTORS", 0, i.e.r - i.s.r + 1, ""), r(a, "TUPLES", 0, i.e.c - i.s.c + 1, ""), r(a, "DATA", 0, 0, "");
            for (var o = i.s.r; o <= i.e.r; ++o) {
                n(a, -1, 0, "BOT");
                for (var l = i.s.c; l <= i.e.c; ++l) {
                    var c = tr({
                        r: o,
                        c: l
                    });
                    if (t = s ? (e[o] || [])[l] : e[c]) switch (t.t) {
                        case "n":
                            var f = t.w;
                            f || null == t.v || (f = t.v), null == f ? t.f && !t.F ? n(a, 1, 0, "=" + t.f) : n(a, 1, 0, "") : n(a, 0, f, "V");
                            break;
                        case "b":
                            n(a, 0, t.v ? 1 : 0, t.v ? "TRUE" : "FALSE");
                            break;
                        case "s":
                            n(a, 1, 0, isNaN(t.v) ? t.v : '="' + t.v + '"');
                            break;
                        case "d":
                            t.w || (t.w = L.format(t.z || L._table[14], Z(oe(t.v)))), n(a, 0, t.w, "V");
                            break;
                        default:
                            n(a, 1, 0, "")
                    } else n(a, 1, 0, "")
                }
            }
            return n(a, -1, 0, "EOD"), a.join("\r\n")
        });
        return {
            to_workbook: function(e, r) {
                return or(t(e, r), r)
            },
            to_sheet: t,
            from_sheet: a
        }
    }(),
    Ta = function() {
        function e(e) {
            return e.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n")
        }

        function t(e, t) {
            return cr(function(e, t) {
                for (var r = e.split("\n"), n = -1, a = -1, i = 0, s = []; i !== r.length; ++i) {
                    var o = r[i].trim().split(":");
                    if ("cell" === o[0]) {
                        var l = er(o[1]);
                        if (s.length <= l.r)
                            for (n = s.length; n <= l.r; ++n) s[n] || (s[n] = []);
                        switch (n = l.r, a = l.c, o[2]) {
                            case "t":
                                s[n][a] = o[3].replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
                                break;
                            case "v":
                                s[n][a] = +o[3];
                                break;
                            case "vtf":
                                var c = o[o.length - 1];
                            case "vtc":
                                "nl" === o[3] ? s[n][a] = !!+o[4] : s[n][a] = +o[4], "vtf" == o[2] && (s[n][a] = [s[n][a], c])
                        }
                    }
                }
                return t && t.sheetRows && (s = s.slice(0, t.sheetRows)), s
            }(e, t), t)
        }
        var r = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n"),
            n = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join("\n") + "\n",
            a = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join("\n"),
            i = "--SocialCalcSpreadsheetControlSave--";

        function s(t) {
            if (!t || !t["!ref"]) return "";
            for (var r, n = [], a = [], i = "", s = rr(t["!ref"]), o = Array.isArray(t), l = s.s.r; l <= s.e.r; ++l)
                for (var c = s.s.c; c <= s.e.c; ++c)
                    if (i = tr({
                            r: l,
                            c: c
                        }), (r = o ? (t[l] || [])[c] : t[i]) && null != r.v && "z" !== r.t) {
                        switch (a = ["cell", i, "t"], r.t) {
                            case "s":
                            case "str":
                                a.push(e(r.v));
                                break;
                            case "n":
                                r.f ? (a[2] = "vtf", a[3] = "n", a[4] = r.v, a[5] = e(r.f)) : (a[2] = "v", a[3] = r.v);
                                break;
                            case "b":
                                a[2] = "vt" + (r.f ? "f" : "c"), a[3] = "nl", a[4] = r.v ? "1" : "0", a[5] = e(r.f || (r.v ? "TRUE" : "FALSE"));
                                break;
                            case "d":
                                var f = Z(oe(r.v));
                                a[2] = "vtc", a[3] = "nd", a[4] = "" + f, a[5] = r.w || L.format(r.z || L._table[14], f);
                                break;
                            case "e":
                                continue
                        }
                        n.push(a.join(":"))
                    } return n.push("sheet:c:" + (s.e.c - s.s.c + 1) + ":r:" + (s.e.r - s.s.r + 1) + ":tvf:1"), n.push("valueformat:1:text-wiki"), n.join("\n")
        }
        return {
            to_workbook: function(e, r) {
                return or(t(e, r), r)
            },
            to_sheet: t,
            from_sheet: function(e) {
                return [r, n, a, n, s(e), i].join("\n")
            }
        }
    }(),
    Aa = function() {
        function e(e, t, r, n, a) {
            a.raw ? t[r][n] = e : "" === e || ("TRUE" === e ? t[r][n] = !0 : "FALSE" === e ? t[r][n] = !1 : isNaN(he(e)) ? isNaN(de(e).getDate()) ? t[r][n] = e : t[r][n] = oe(e) : t[r][n] = he(e))
        }
        var t = {
                44: ",",
                9: "\t",
                59: ";",
                124: "|"
            },
            r = {
                44: 3,
                9: 2,
                59: 1,
                124: 0
            };

        function n(e) {
            for (var n = {}, a = !1, i = 0, s = 0; i < e.length; ++i) 34 == (s = e.charCodeAt(i)) ? a = !a : !a && s in t && (n[s] = (n[s] || 0) + 1);
            for (i in s = [], n) Object.prototype.hasOwnProperty.call(n, i) && s.push([n[i], i]);
            if (!s.length)
                for (i in n = r) Object.prototype.hasOwnProperty.call(n, i) && s.push([n[i], i]);
            return s.sort((function(e, t) {
                return e[0] - t[0] || r[e[1]] - r[t[1]]
            })), t[s.pop()[1]] || 44
        }

        function a(e, t) {
            var r = t || {},
                a = "";
            var i = r.dense ? [] : {},
                s = {
                    s: {
                        c: 0,
                        r: 0
                    },
                    e: {
                        c: 0,
                        r: 0
                    }
                };
            "sep=" == e.slice(0, 4) ? 13 == e.charCodeAt(5) && 10 == e.charCodeAt(6) ? (a = e.charAt(4), e = e.slice(7)) : 13 == e.charCodeAt(5) || 10 == e.charCodeAt(5) ? (a = e.charAt(4), e = e.slice(6)) : a = n(e.slice(0, 1024)) : a = r && r.FS ? r.FS : n(e.slice(0, 1024));
            var o = 0,
                l = 0,
                c = 0,
                f = 0,
                h = 0,
                u = a.charCodeAt(0),
                d = !1,
                p = 0,
                m = e.charCodeAt(0);
            e = e.replace(/\r\n/gm, "\n");
            var g, v, E = null != r.dateNF ? (g = r.dateNF, v = (v = "number" == typeof g ? L._table[g] : g).replace(V, "(\\d+)"), new RegExp("^" + v + "$")) : null;

            function S() {
                var t = e.slice(f, h),
                    n = {};
                if ('"' == t.charAt(0) && '"' == t.charAt(t.length - 1) && (t = t.slice(1, -1).replace(/""/g, '"')), 0 === t.length) n.t = "z";
                else if (r.raw) n.t = "s", n.v = t;
                else if (0 === t.trim().length) n.t = "s", n.v = t;
                else if (61 == t.charCodeAt(0)) 34 == t.charCodeAt(1) && 34 == t.charCodeAt(t.length - 1) ? (n.t = "s", n.v = t.slice(2, -1).replace(/""/g, '"')) : 1 != t.length ? (n.t = "n", n.f = t.slice(1)) : (n.t = "s", n.v = t);
                else if ("TRUE" == t) n.t = "b", n.v = !0;
                else if ("FALSE" == t) n.t = "b", n.v = !1;
                else if (isNaN(c = he(t)))
                    if (!isNaN(de(t).getDate()) || E && t.match(E)) {
                        n.z = r.dateNF || L._table[14];
                        var a = 0;
                        E && t.match(E) && (t = function(e, t, r) {
                            var n = -1,
                                a = -1,
                                i = -1,
                                s = -1,
                                o = -1,
                                l = -1;
                            (t.match(V) || []).forEach((function(e, t) {
                                var c = parseInt(r[t + 1], 10);
                                switch (e.toLowerCase().charAt(0)) {
                                    case "y":
                                        n = c;
                                        break;
                                    case "d":
                                        i = c;
                                        break;
                                    case "h":
                                        s = c;
                                        break;
                                    case "s":
                                        l = c;
                                        break;
                                    case "m":
                                        s >= 0 ? o = c : a = c
                                }
                            })), l >= 0 && -1 == o && a >= 0 && (o = a, a = -1);
                            var c = ("" + (n >= 0 ? n : (new Date).getFullYear())).slice(-4) + "-" + ("00" + (a >= 1 ? a : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
                            7 == c.length && (c = "0" + c), 8 == c.length && (c = "20" + c);
                            var f = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2) + ":" + ("00" + (l >= 0 ? l : 0)).slice(-2);
                            return -1 == s && -1 == o && -1 == l ? c : -1 == n && -1 == a && -1 == i ? f : c + "T" + f
                        }(0, r.dateNF, t.match(E) || []), a = 1), r.cellDates ? (n.t = "d", n.v = oe(t, a)) : (n.t = "n", n.v = Z(oe(t, a))), !1 !== r.cellText && (n.w = L.format(n.z, n.v instanceof Date ? Z(n.v) : n.v)), r.cellNF || delete n.z
                    } else n.t = "s", n.v = t;
                else n.t = "n", !1 !== r.cellText && (n.w = t), n.v = c;
                if ("z" == n.t || (r.dense ? (i[o] || (i[o] = []), i[o][l] = n) : i[tr({
                        c: l,
                        r: o
                    })] = n), f = h + 1, m = e.charCodeAt(f), s.e.c < l && (s.e.c = l), s.e.r < o && (s.e.r = o), p == u) ++l;
                else if (l = 0, ++o, r.sheetRows && r.sheetRows <= o) return !0
            }
            e: for (; h < e.length; ++h) switch (p = e.charCodeAt(h)) {
                case 34:
                    34 === m && (d = !d);
                    break;
                case u:
                case 10:
                case 13:
                    if (!d && S()) break e
            }
            return h - f > 0 && S(), i["!ref"] = nr(s), i
        }

        function i(t, r) {
            return r && r.PRN ? r.FS || "sep=" == t.slice(0, 4) || t.indexOf("\t") >= 0 || t.indexOf(",") >= 0 || t.indexOf(";") >= 0 ? a(t, r) : cr(function(t, r) {
                var n = r || {},
                    a = [];
                if (!t || 0 === t.length) return a;
                for (var i = t.split(/[\r\n]/), s = i.length - 1; s >= 0 && 0 === i[s].length;) --s;
                for (var o = 10, l = 0, c = 0; c <= s; ++c) - 1 == (l = i[c].indexOf(" ")) ? l = i[c].length : l++, o = Math.max(o, l);
                for (c = 0; c <= s; ++c) {
                    a[c] = [];
                    var f = 0;
                    for (e(i[c].slice(0, o).trim(), a, c, f, n), f = 1; f <= (i[c].length - o) / 10 + 1; ++f) e(i[c].slice(o + 10 * (f - 1), o + 10 * f).trim(), a, c, f, n)
                }
                return n.sheetRows && (a = a.slice(0, n.sheetRows)), a
            }(t, r), r) : a(t, r)
        }

        function s(e, t) {
            var r = "",
                n = "string" == t.type ? [0, 0, 0, 0] : Al(e, t);
            switch (t.type) {
                case "base64":
                    r = y.decode(e);
                    break;
                case "binary":
                case "string":
                    r = e;
                    break;
                case "buffer":
                    r = 65001 == t.codepage ? e.toString("utf8") : t.codepage && void 0 !== b ? b.utils.decode(t.codepage, e) : T && c.isBuffer(e) ? e.toString("binary") : P(e);
                    break;
                case "array":
                    r = le(e);
                    break;
                default:
                    throw new Error("Unrecognized type " + t.type)
            }
            return 239 == n[0] && 187 == n[1] && 191 == n[2] ? r = Ve(r.slice(3)) : "string" != t.type && "buffer" != t.type && 65001 == t.codepage ? r = Ve(r) : "binary" == t.type && void 0 !== b && t.codepage && (r = b.utils.decode(t.codepage, b.utils.encode(28591, r))), "socialcalc:version:" == r.slice(0, 19) ? Ta.to_sheet("string" == t.type ? r : Ve(r), t) : i(r, t)
        }
        return {
            to_workbook: function(e, t) {
                return or(s(e, t), t)
            },
            to_sheet: s,
            from_sheet: function(e) {
                for (var t, r = [], n = ar(e["!ref"]), a = Array.isArray(e), i = n.s.r; i <= n.e.r; ++i) {
                    for (var s = [], o = n.s.c; o <= n.e.c; ++o) {
                        var l = tr({
                            r: i,
                            c: o
                        });
                        if ((t = a ? (e[i] || [])[o] : e[l]) && null != t.v) {
                            for (var c = (t.w || (sr(t), t.w) || "").slice(0, 10); c.length < 10;) c += " ";
                            s.push(c + (0 === o ? " " : ""))
                        } else s.push("          ")
                    }
                    r.push(s.join(""))
                }
                return r.join("\n")
            }
        }
    }();
var Ra = function() {
    function e(e, t, r) {
        if (e) {
            Vt(e, e.l || 0);
            for (var n = r.Enum || E; e.l < e.length;) {
                var a = e.read_shift(2),
                    i = n[a] || n[65535],
                    s = e.read_shift(2),
                    o = e.l + s,
                    l = i.f && i.f(e, s, r);
                if (e.l = o, t(l, i, a)) return
            }
        }
    }

    function t(t, r) {
        if (!t) return t;
        var n = r || {};
        var a = n.dense ? [] : {},
            i = "Sheet1",
            s = "",
            o = 0,
            l = {},
            c = [],
            f = [],
            h = {
                s: {
                    r: 0,
                    c: 0
                },
                e: {
                    r: 0,
                    c: 0
                }
            },
            u = n.sheetRows || 0;
        if (0 == t[2] && (8 == t[3] || 9 == t[3]) && t.length >= 16 && 5 == t[14] && 108 === t[15]) throw new Error("Unsupported Works 3 for Mac file");
        if (2 == t[2]) n.Enum = E, e(t, (function(e, t, r) {
            switch (r) {
                case 0:
                    n.vers = e, e >= 4096 && (n.qpro = !0);
                    break;
                case 6:
                    h = e;
                    break;
                case 204:
                    e && (s = e);
                    break;
                case 222:
                    s = e;
                    break;
                case 15:
                case 51:
                    n.qpro || (e[1].v = e[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                    14 == r && 112 == (112 & e[2]) && (15 & e[2]) > 1 && (15 & e[2]) < 15 && (e[1].z = n.dateNF || L._table[14], n.cellDates && (e[1].t = "d", e[1].v = ne(e[1].v))), n.qpro && e[3] > o && (a["!ref"] = nr(h), l[i] = a, c.push(i), a = n.dense ? [] : {}, h = {
                        s: {
                            r: 0,
                            c: 0
                        },
                        e: {
                            r: 0,
                            c: 0
                        }
                    }, o = e[3], i = s || "Sheet" + (o + 1), s = "");
                    var f = n.dense ? (a[e[0].r] || [])[e[0].c] : a[tr(e[0])];
                    if (f) {
                        f.t = e[1].t, f.v = e[1].v, null != e[1].z && (f.z = e[1].z), null != e[1].f && (f.f = e[1].f);
                        break
                    }
                    n.dense ? (a[e[0].r] || (a[e[0].r] = []), a[e[0].r][e[0].c] = e[1]) : a[tr(e[0])] = e[1]
            }
        }), n);
        else {
            if (26 != t[2] && 14 != t[2]) throw new Error("Unrecognized LOTUS BOF " + t[2]);
            n.Enum = S, 14 == t[2] && (n.qpro = !0, t.l = 0), e(t, (function(e, t, r) {
                switch (r) {
                    case 204:
                        i = e;
                        break;
                    case 22:
                        e[1].v = e[1].v.slice(1);
                    case 23:
                    case 24:
                    case 25:
                    case 37:
                    case 39:
                    case 40:
                        if (e[3] > o && (a["!ref"] = nr(h), l[i] = a, c.push(i), a = n.dense ? [] : {}, h = {
                                s: {
                                    r: 0,
                                    c: 0
                                },
                                e: {
                                    r: 0,
                                    c: 0
                                }
                            }, o = e[3], i = "Sheet" + (o + 1)), u > 0 && e[0].r >= u) break;
                        n.dense ? (a[e[0].r] || (a[e[0].r] = []), a[e[0].r][e[0].c] = e[1]) : a[tr(e[0])] = e[1], h.e.c < e[0].c && (h.e.c = e[0].c), h.e.r < e[0].r && (h.e.r = e[0].r);
                        break;
                    case 27:
                        e[14e3] && (f[e[14e3][0]] = e[14e3][1]);
                        break;
                    case 1537:
                        f[e[0]] = e[1], e[0] == o && (i = e[1])
                }
            }), n)
        }
        if (a["!ref"] = nr(h), l[s || i] = a, c.push(s || i), !f.length) return {
            SheetNames: c,
            Sheets: l
        };
        for (var d = {}, p = [], m = 0; m < f.length; ++m) l[c[m]] ? (p.push(f[m] || c[m]), d[f[m]] = l[f[m]] || l[c[m]]) : (p.push(f[m]), d[f[m]] = {
            "!ref": "A1"
        });
        return {
            SheetNames: p,
            Sheets: d
        }
    }

    function r(e, t, r) {
        var n = [{
            c: 0,
            r: 0
        }, {
            t: "n",
            v: 0
        }, 0, 0];
        return r.qpro && 20768 != r.vers ? (n[0].c = e.read_shift(1), n[3] = e.read_shift(1), n[0].r = e.read_shift(2), e.l += 2) : (n[2] = e.read_shift(1), n[0].c = e.read_shift(2), n[0].r = e.read_shift(2)), n
    }

    function n(e, t, n) {
        var a = e.l + t,
            i = r(e, 0, n);
        if (i[1].t = "s", 20768 == n.vers) {
            e.l++;
            var s = e.read_shift(1);
            return i[1].v = e.read_shift(s, "utf8"), i
        }
        return n.qpro && e.l++, i[1].v = e.read_shift(a - e.l, "cstr"), i
    }

    function a(e, t, r) {
        var n = Xt(7 + r.length);
        n.write_shift(1, 255), n.write_shift(2, t), n.write_shift(2, e), n.write_shift(1, 39);
        for (var a = 0; a < n.length; ++a) {
            var i = r.charCodeAt(a);
            n.write_shift(1, i >= 128 ? 95 : i)
        }
        return n.write_shift(1, 0), n
    }

    function i(e, t, r) {
        var n = Xt(7);
        return n.write_shift(1, 255), n.write_shift(2, t), n.write_shift(2, e), n.write_shift(2, r, "i"), n
    }

    function s(e, t, r) {
        var n = Xt(13);
        return n.write_shift(1, 255), n.write_shift(2, t), n.write_shift(2, e), n.write_shift(8, r, "f"), n
    }

    function o(e, t, r) {
        var n = 32768 & t;
        return t = (n ? e : 0) + ((t &= -32769) >= 8192 ? t - 16384 : t), (n ? "" : "$") + (r ? Zt(t) : qt(t))
    }
    var l = {
            51: ["FALSE", 0],
            52: ["TRUE", 0],
            70: ["LEN", 1],
            80: ["SUM", 69],
            81: ["AVERAGEA", 69],
            82: ["COUNTA", 69],
            83: ["MINA", 69],
            84: ["MAXA", 69],
            111: ["T", 1]
        },
        c = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];

    function f(e) {
        var t = [{
            c: 0,
            r: 0
        }, {
            t: "n",
            v: 0
        }, 0];
        return t[0].r = e.read_shift(2), t[3] = e[e.l++], t[0].c = e[e.l++], t
    }

    function h(e, t, r, n) {
        var a = Xt(6 + n.length);
        a.write_shift(2, e), a.write_shift(1, r), a.write_shift(1, t), a.write_shift(1, 39);
        for (var i = 0; i < n.length; ++i) {
            var s = n.charCodeAt(i);
            a.write_shift(1, s >= 128 ? 95 : s)
        }
        return a.write_shift(1, 0), a
    }

    function u(e, t) {
        var r = f(e),
            n = e.read_shift(4),
            a = e.read_shift(4),
            i = e.read_shift(2);
        if (65535 == i) return 0 === n && 3221225472 === a ? (r[1].t = "e", r[1].v = 15) : 0 === n && 3489660928 === a ? (r[1].t = "e", r[1].v = 42) : r[1].v = 0, r;
        var s = 32768 & i;
        return i = (32767 & i) - 16446, r[1].v = (1 - 2 * s) * (a * Math.pow(2, i + 32) + n * Math.pow(2, i)), r
    }

    function d(e, t, r, n) {
        var a = Xt(14);
        if (a.write_shift(2, e), a.write_shift(1, r), a.write_shift(1, t), 0 == n) return a.write_shift(4, 0), a.write_shift(4, 0), a.write_shift(2, 65535), a;
        var i, s = 0,
            o = 0,
            l = 0;
        return n < 0 && (s = 1, n = -n), o = 0 | Math.log2(n), 0 == (2147483648 & (l = (n /= Math.pow(2, o - 31)) >>> 0)) && (++o, l = (n /= 2) >>> 0), n -= l, l |= 2147483648, l >>>= 0, i = (n *= Math.pow(2, 32)) >>> 0, a.write_shift(4, i), a.write_shift(4, l), o += 16383 + (s ? 32768 : 0), a.write_shift(2, o), a
    }

    function p(e, t) {
        var r = f(e),
            n = e.read_shift(8, "f");
        return r[1].v = n, r
    }

    function m(e, t) {
        return 0 == e[e.l + t - 1] ? e.read_shift(t, "cstr") : ""
    }

    function g(e, t) {
        var r = Xt(5 + e.length);
        r.write_shift(2, 14e3), r.write_shift(2, t);
        for (var n = 0; n < e.length; ++n) {
            var a = e.charCodeAt(n);
            r[r.l++] = a > 127 ? 95 : a
        }
        return r[r.l++] = 0, r
    }
    var E = {
            0: {
                n: "BOF",
                f: An
            },
            1: {
                n: "EOF"
            },
            2: {
                n: "CALCMODE"
            },
            3: {
                n: "CALCORDER"
            },
            4: {
                n: "SPLIT"
            },
            5: {
                n: "SYNC"
            },
            6: {
                n: "RANGE",
                f: function(e, t, r) {
                    var n = {
                        s: {
                            c: 0,
                            r: 0
                        },
                        e: {
                            c: 0,
                            r: 0
                        }
                    };
                    return 8 == t && r.qpro ? (n.s.c = e.read_shift(1), e.l++, n.s.r = e.read_shift(2), n.e.c = e.read_shift(1), e.l++, n.e.r = e.read_shift(2), n) : (n.s.c = e.read_shift(2), n.s.r = e.read_shift(2), 12 == t && r.qpro && (e.l += 2), n.e.c = e.read_shift(2), n.e.r = e.read_shift(2), 12 == t && r.qpro && (e.l += 2), 65535 == n.s.c && (n.s.c = n.e.c = n.s.r = n.e.r = 0), n)
                }
            },
            7: {
                n: "WINDOW1"
            },
            8: {
                n: "COLW1"
            },
            9: {
                n: "WINTWO"
            },
            10: {
                n: "COLW2"
            },
            11: {
                n: "NAME"
            },
            12: {
                n: "BLANK"
            },
            13: {
                n: "INTEGER",
                f: function(e, t, n) {
                    var a = r(e, 0, n);
                    return a[1].v = e.read_shift(2, "i"), a
                }
            },
            14: {
                n: "NUMBER",
                f: function(e, t, n) {
                    var a = r(e, 0, n);
                    return a[1].v = e.read_shift(8, "f"), a
                }
            },
            15: {
                n: "LABEL",
                f: n
            },
            16: {
                n: "FORMULA",
                f: function(e, t, n) {
                    var a = e.l + t,
                        i = r(e, 0, n);
                    if (i[1].v = e.read_shift(8, "f"), n.qpro) e.l = a;
                    else {
                        var s = e.read_shift(2);
                        ! function(e, t) {
                            Vt(e, 0);
                            var r = [],
                                n = 0,
                                a = "",
                                i = "",
                                s = "",
                                f = "";
                            for (; e.l < e.length;) {
                                var h = e[e.l++];
                                switch (h) {
                                    case 0:
                                        r.push(e.read_shift(8, "f"));
                                        break;
                                    case 1:
                                        i = o(t[0].c, e.read_shift(2), !0), a = o(t[0].r, e.read_shift(2), !1), r.push(i + a);
                                        break;
                                    case 2:
                                        var u = o(t[0].c, e.read_shift(2), !0),
                                            d = o(t[0].r, e.read_shift(2), !1);
                                        i = o(t[0].c, e.read_shift(2), !0), a = o(t[0].r, e.read_shift(2), !1), r.push(u + d + ":" + i + a);
                                        break;
                                    case 3:
                                        if (e.l < e.length) return;
                                        break;
                                    case 4:
                                        r.push("(" + r.pop() + ")");
                                        break;
                                    case 5:
                                        r.push(e.read_shift(2));
                                        break;
                                    case 6:
                                        for (var p = ""; h = e[e.l++];) p += String.fromCharCode(h);
                                        r.push('"' + p.replace(/"/g, '""') + '"');
                                        break;
                                    case 8:
                                        r.push("-" + r.pop());
                                        break;
                                    case 23:
                                        r.push("+" + r.pop());
                                        break;
                                    case 22:
                                        r.push("NOT(" + r.pop() + ")");
                                        break;
                                    case 20:
                                    case 21:
                                        f = r.pop(), s = r.pop(), r.push(["AND", "OR"][h - 20] + "(" + s + "," + f + ")");
                                        break;
                                    default:
                                        if (h < 32 && c[h]) f = r.pop(), s = r.pop(), r.push(s + c[h] + f);
                                        else {
                                            if (!l[h]) return;
                                            if (69 == (n = l[h][1]) && (n = e[e.l++]), n > r.length) return;
                                            var m = r.slice(-n);
                                            r.length -= n, r.push(l[h][0] + "(" + m.join(",") + ")")
                                        }
                                }
                            }
                            1 == r.length && (t[1].f = "" + r[0])
                        }(e.slice(e.l, e.l + s), i), e.l += s
                    }
                    return i
                }
            },
            24: {
                n: "TABLE"
            },
            25: {
                n: "ORANGE"
            },
            26: {
                n: "PRANGE"
            },
            27: {
                n: "SRANGE"
            },
            28: {
                n: "FRANGE"
            },
            29: {
                n: "KRANGE1"
            },
            32: {
                n: "HRANGE"
            },
            35: {
                n: "KRANGE2"
            },
            36: {
                n: "PROTEC"
            },
            37: {
                n: "FOOTER"
            },
            38: {
                n: "HEADER"
            },
            39: {
                n: "SETUP"
            },
            40: {
                n: "MARGINS"
            },
            41: {
                n: "LABELFMT"
            },
            42: {
                n: "TITLES"
            },
            43: {
                n: "SHEETJS"
            },
            45: {
                n: "GRAPH"
            },
            46: {
                n: "NGRAPH"
            },
            47: {
                n: "CALCCOUNT"
            },
            48: {
                n: "UNFORMATTED"
            },
            49: {
                n: "CURSORW12"
            },
            50: {
                n: "WINDOW"
            },
            51: {
                n: "STRING",
                f: n
            },
            55: {
                n: "PASSWORD"
            },
            56: {
                n: "LOCKED"
            },
            60: {
                n: "QUERY"
            },
            61: {
                n: "QUERYNAME"
            },
            62: {
                n: "PRINT"
            },
            63: {
                n: "PRINTNAME"
            },
            64: {
                n: "GRAPH2"
            },
            65: {
                n: "GRAPHNAME"
            },
            66: {
                n: "ZOOM"
            },
            67: {
                n: "SYMSPLIT"
            },
            68: {
                n: "NSROWS"
            },
            69: {
                n: "NSCOLS"
            },
            70: {
                n: "RULER"
            },
            71: {
                n: "NNAME"
            },
            72: {
                n: "ACOMM"
            },
            73: {
                n: "AMACRO"
            },
            74: {
                n: "PARSE"
            },
            102: {
                n: "PRANGES??"
            },
            103: {
                n: "RRANGES??"
            },
            104: {
                n: "FNAME??"
            },
            105: {
                n: "MRANGES??"
            },
            204: {
                n: "SHEETNAMECS",
                f: m
            },
            222: {
                n: "SHEETNAMELP",
                f: function(e, t) {
                    var r = e[e.l++];
                    r > t - 1 && (r = t - 1);
                    for (var n = ""; n.length < r;) n += String.fromCharCode(e[e.l++]);
                    return n
                }
            },
            65535: {
                n: ""
            }
        },
        S = {
            0: {
                n: "BOF"
            },
            1: {
                n: "EOF"
            },
            2: {
                n: "PASSWORD"
            },
            3: {
                n: "CALCSET"
            },
            4: {
                n: "WINDOWSET"
            },
            5: {
                n: "SHEETCELLPTR"
            },
            6: {
                n: "SHEETLAYOUT"
            },
            7: {
                n: "COLUMNWIDTH"
            },
            8: {
                n: "HIDDENCOLUMN"
            },
            9: {
                n: "USERRANGE"
            },
            10: {
                n: "SYSTEMRANGE"
            },
            11: {
                n: "ZEROFORCE"
            },
            12: {
                n: "SORTKEYDIR"
            },
            13: {
                n: "FILESEAL"
            },
            14: {
                n: "DATAFILLNUMS"
            },
            15: {
                n: "PRINTMAIN"
            },
            16: {
                n: "PRINTSTRING"
            },
            17: {
                n: "GRAPHMAIN"
            },
            18: {
                n: "GRAPHSTRING"
            },
            19: {
                n: "??"
            },
            20: {
                n: "ERRCELL"
            },
            21: {
                n: "NACELL"
            },
            22: {
                n: "LABEL16",
                f: function(e, t) {
                    var r = f(e);
                    return r[1].t = "s", r[1].v = e.read_shift(t - 4, "cstr"), r
                }
            },
            23: {
                n: "NUMBER17",
                f: u
            },
            24: {
                n: "NUMBER18",
                f: function(e, t) {
                    var r = f(e);
                    r[1].v = e.read_shift(2);
                    var n = r[1].v >> 1;
                    if (1 & r[1].v) switch (7 & n) {
                        case 0:
                            n = 5e3 * (n >> 3);
                            break;
                        case 1:
                            n = 500 * (n >> 3);
                            break;
                        case 2:
                            n = (n >> 3) / 20;
                            break;
                        case 3:
                            n = (n >> 3) / 200;
                            break;
                        case 4:
                            n = (n >> 3) / 2e3;
                            break;
                        case 5:
                            n = (n >> 3) / 2e4;
                            break;
                        case 6:
                            n = (n >> 3) / 16;
                            break;
                        case 7:
                            n = (n >> 3) / 64
                    }
                    return r[1].v = n, r
                }
            },
            25: {
                n: "FORMULA19",
                f: function(e, t) {
                    var r = u(e);
                    return e.l += t - 14, r
                }
            },
            26: {
                n: "FORMULA1A"
            },
            27: {
                n: "XFORMAT",
                f: function(e, t) {
                    for (var r = {}, n = e.l + t; e.l < n;) {
                        var a = e.read_shift(2);
                        if (14e3 == a) {
                            for (r[a] = [0, ""], r[a][0] = e.read_shift(2); e[e.l];) r[a][1] += String.fromCharCode(e[e.l]), e.l++;
                            e.l++
                        }
                    }
                    return r
                }
            },
            28: {
                n: "DTLABELMISC"
            },
            29: {
                n: "DTLABELCELL"
            },
            30: {
                n: "GRAPHWINDOW"
            },
            31: {
                n: "CPA"
            },
            32: {
                n: "LPLAUTO"
            },
            33: {
                n: "QUERY"
            },
            34: {
                n: "HIDDENSHEET"
            },
            35: {
                n: "??"
            },
            37: {
                n: "NUMBER25",
                f: function(e, t) {
                    var r = f(e),
                        n = e.read_shift(4);
                    return r[1].v = n >> 6, r
                }
            },
            38: {
                n: "??"
            },
            39: {
                n: "NUMBER27",
                f: p
            },
            40: {
                n: "FORMULA28",
                f: function(e, t) {
                    var r = p(e);
                    return e.l += t - 10, r
                }
            },
            142: {
                n: "??"
            },
            147: {
                n: "??"
            },
            150: {
                n: "??"
            },
            151: {
                n: "??"
            },
            152: {
                n: "??"
            },
            153: {
                n: "??"
            },
            154: {
                n: "??"
            },
            155: {
                n: "??"
            },
            156: {
                n: "??"
            },
            163: {
                n: "??"
            },
            174: {
                n: "??"
            },
            175: {
                n: "??"
            },
            176: {
                n: "??"
            },
            177: {
                n: "??"
            },
            184: {
                n: "??"
            },
            185: {
                n: "??"
            },
            186: {
                n: "??"
            },
            187: {
                n: "??"
            },
            188: {
                n: "??"
            },
            195: {
                n: "??"
            },
            201: {
                n: "??"
            },
            204: {
                n: "SHEETNAMECS",
                f: m
            },
            205: {
                n: "??"
            },
            206: {
                n: "??"
            },
            207: {
                n: "??"
            },
            208: {
                n: "??"
            },
            256: {
                n: "??"
            },
            259: {
                n: "??"
            },
            260: {
                n: "??"
            },
            261: {
                n: "??"
            },
            262: {
                n: "??"
            },
            263: {
                n: "??"
            },
            265: {
                n: "??"
            },
            266: {
                n: "??"
            },
            267: {
                n: "??"
            },
            268: {
                n: "??"
            },
            270: {
                n: "??"
            },
            271: {
                n: "??"
            },
            384: {
                n: "??"
            },
            389: {
                n: "??"
            },
            390: {
                n: "??"
            },
            393: {
                n: "??"
            },
            396: {
                n: "??"
            },
            512: {
                n: "??"
            },
            514: {
                n: "??"
            },
            513: {
                n: "??"
            },
            516: {
                n: "??"
            },
            517: {
                n: "??"
            },
            640: {
                n: "??"
            },
            641: {
                n: "??"
            },
            642: {
                n: "??"
            },
            643: {
                n: "??"
            },
            644: {
                n: "??"
            },
            645: {
                n: "??"
            },
            646: {
                n: "??"
            },
            647: {
                n: "??"
            },
            648: {
                n: "??"
            },
            658: {
                n: "??"
            },
            659: {
                n: "??"
            },
            660: {
                n: "??"
            },
            661: {
                n: "??"
            },
            662: {
                n: "??"
            },
            665: {
                n: "??"
            },
            666: {
                n: "??"
            },
            768: {
                n: "??"
            },
            772: {
                n: "??"
            },
            1537: {
                n: "SHEETINFOQP",
                f: function(e, t, r) {
                    if (r.qpro && !(t < 21)) {
                        var n = e.read_shift(1);
                        e.l += 17;
                        e.read_shift(1);
                        return e.l += 2, [n, e.read_shift(t - 21, "cstr")]
                    }
                }
            },
            1600: {
                n: "??"
            },
            1602: {
                n: "??"
            },
            1793: {
                n: "??"
            },
            1794: {
                n: "??"
            },
            1795: {
                n: "??"
            },
            1796: {
                n: "??"
            },
            1920: {
                n: "??"
            },
            2048: {
                n: "??"
            },
            2049: {
                n: "??"
            },
            2052: {
                n: "??"
            },
            2688: {
                n: "??"
            },
            10998: {
                n: "??"
            },
            12849: {
                n: "??"
            },
            28233: {
                n: "??"
            },
            28484: {
                n: "??"
            },
            65535: {
                n: ""
            }
        };
    return {
        sheet_to_wk1: function(e, t) {
            var r = t || {};
            if (+r.codepage >= 0 && v(+r.codepage), "string" == r.type) throw new Error("Cannot write WK1 to JS string");
            var n, o, l = Gt(),
                c = ar(e["!ref"]),
                f = Array.isArray(e),
                h = [];
            al(l, 0, (n = 1030, (o = Xt(2)).write_shift(2, n), o)), al(l, 6, function(e) {
                var t = Xt(8);
                return t.write_shift(2, e.s.c), t.write_shift(2, e.s.r), t.write_shift(2, e.e.c), t.write_shift(2, e.e.r), t
            }(c));
            for (var u = Math.min(c.e.r, 8191), d = c.s.r; d <= u; ++d)
                for (var p = qt(d), m = c.s.c; m <= c.e.c; ++m) {
                    d === c.s.r && (h[m] = Zt(m));
                    var g = h[m] + p,
                        E = f ? (e[d] || [])[m] : e[g];
                    if (E && "z" != E.t)
                        if ("n" == E.t)(0 | E.v) == E.v && E.v >= -32768 && E.v <= 32767 ? al(l, 13, i(d, m, E.v)) : al(l, 14, s(d, m, E.v));
                        else al(l, 15, a(d, m, sr(E).slice(0, 239)))
                }
            return al(l, 1), l.end()
        },
        book_to_wk3: function(e, t) {
            var r = t || {};
            if (+r.codepage >= 0 && v(+r.codepage), "string" == r.type) throw new Error("Cannot write WK3 to JS string");
            var n = Gt();
            al(n, 0, function(e) {
                var t = Xt(26);
                t.write_shift(2, 4096), t.write_shift(2, 4), t.write_shift(4, 0);
                for (var r = 0, n = 0, a = 0, i = 0; i < e.SheetNames.length; ++i) {
                    var s = e.SheetNames[i],
                        o = e.Sheets[s];
                    if (o && o["!ref"]) {
                        ++a;
                        var l = rr(o["!ref"]);
                        r < l.e.r && (r = l.e.r), n < l.e.c && (n = l.e.c)
                    }
                }
                r > 8191 && (r = 8191);
                return t.write_shift(2, r), t.write_shift(1, a), t.write_shift(1, n), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(1, 1), t.write_shift(1, 2), t.write_shift(4, 0), t.write_shift(4, 0), t
            }(e));
            for (var a = 0, i = 0; a < e.SheetNames.length; ++a)(e.Sheets[e.SheetNames[a]] || {})["!ref"] && al(n, 27, g(e.SheetNames[a], i++));
            var s = 0;
            for (a = 0; a < e.SheetNames.length; ++a) {
                var o = e.Sheets[e.SheetNames[a]];
                if (o && o["!ref"]) {
                    for (var l = ar(o["!ref"]), c = Array.isArray(o), f = [], u = Math.min(l.e.r, 8191), p = l.s.r; p <= u; ++p)
                        for (var m = qt(p), E = l.s.c; E <= l.e.c; ++E) {
                            p === l.s.r && (f[E] = Zt(E));
                            var S = f[E] + m,
                                b = c ? (o[p] || [])[E] : o[S];
                            if (b && "z" != b.t)
                                if ("n" == b.t) al(n, 23, d(p, E, s, b.v));
                                else al(n, 22, h(p, E, s, sr(b).slice(0, 239)))
                        }++s
                }
            }
            return al(n, 1), n.end()
        },
        to_workbook: function(e, r) {
            switch (r.type) {
                case "base64":
                    return t(D(y.decode(e)), r);
                case "binary":
                    return t(D(e), r);
                case "buffer":
                case "array":
                    return t(e, r)
            }
            throw "Unsupported type " + r.type
        }
    }
}();
var xa = function() {
        var e = Ye("t"),
            t = Ye("rPr");

        function r(r) {
            var n = r.match(e);
            if (!n) return {
                t: "s",
                v: ""
            };
            var a = {
                    t: "s",
                    v: Oe(n[1])
                },
                i = r.match(t);
            return i && (a.s = function(e) {
                var t = {},
                    r = e.match(_e),
                    n = 0,
                    a = !1;
                if (r)
                    for (; n != r.length; ++n) {
                        var i = Te(r[n]);
                        switch (i[0].replace(/\w*:/g, "")) {
                            case "<condense":
                            case "<extend":
                                break;
                            case "<shadow":
                                if (!i.val) break;
                            case "<shadow>":
                            case "<shadow/>":
                                t.shadow = 1;
                                break;
                            case "</shadow>":
                                break;
                            case "<charset":
                                if ("1" == i.val) break;
                                t.cp = m[parseInt(i.val, 10)];
                                break;
                            case "<outline":
                                if (!i.val) break;
                            case "<outline>":
                            case "<outline/>":
                                t.outline = 1;
                                break;
                            case "</outline>":
                                break;
                            case "<rFont":
                                t.name = i.val;
                                break;
                            case "<sz":
                                t.sz = i.val;
                                break;
                            case "<strike":
                                if (!i.val) break;
                            case "<strike>":
                            case "<strike/>":
                                t.strike = 1;
                                break;
                            case "</strike>":
                                break;
                            case "<u":
                                if (!i.val) break;
                                switch (i.val) {
                                    case "double":
                                        t.uval = "double";
                                        break;
                                    case "singleAccounting":
                                        t.uval = "single-accounting";
                                        break;
                                    case "doubleAccounting":
                                        t.uval = "double-accounting"
                                }
                            case "<u>":
                            case "<u/>":
                                t.u = 1;
                                break;
                            case "</u>":
                                break;
                            case "<b":
                                if ("0" == i.val) break;
                            case "<b>":
                            case "<b/>":
                                t.b = 1;
                                break;
                            case "</b>":
                                break;
                            case "<i":
                                if ("0" == i.val) break;
                            case "<i>":
                            case "<i/>":
                                t.i = 1;
                                break;
                            case "</i>":
                                break;
                            case "<color":
                                i.rgb && (t.color = i.rgb.slice(2, 8));
                                break;
                            case "<color>":
                            case "<color/>":
                            case "</color>":
                                break;
                            case "<family":
                                t.family = i.val;
                                break;
                            case "<family>":
                            case "<family/>":
                            case "</family>":
                                break;
                            case "<vertAlign":
                                t.valign = i.val;
                                break;
                            case "<vertAlign>":
                            case "<vertAlign/>":
                            case "</vertAlign>":
                            case "<scheme":
                            case "<scheme>":
                            case "<scheme/>":
                            case "</scheme>":
                            case "<extLst":
                            case "<extLst>":
                            case "</extLst>":
                                break;
                            case "<ext":
                                a = !0;
                                break;
                            case "</ext>":
                                a = !1;
                                break;
                            default:
                                if (47 !== i[0].charCodeAt(1) && !a) throw new Error("Unrecognized rich format " + i[0])
                        }
                    }
                return t
            }(i[1])), a
        }
        var n = /<(?:\w+:)?r>/g,
            a = /<\/(?:\w+:)?r>/;
        return function(e) {
            return e.replace(n, "").split(a).map(r).filter((function(e) {
                return e.v
            }))
        }
    }(),
    Ia = function() {
        var e = /(\r\n|\n)/g;

        function t(t) {
            var r = [
                [], t.v, []
            ];
            return t.v ? (t.s && function(e, t, r) {
                var n = [];
                e.u && n.push("text-decoration: underline;"), e.uval && n.push("text-underline-style:" + e.uval + ";"), e.sz && n.push("font-size:" + e.sz + "pt;"), e.outline && n.push("text-effect: outline;"), e.shadow && n.push("text-shadow: auto;"), t.push('<span style="' + n.join("") + '">'), e.b && (t.push("<b>"), r.push("</b>")), e.i && (t.push("<i>"), r.push("</i>")), e.strike && (t.push("<s>"), r.push("</s>"));
                var a = e.valign || "";
                "superscript" == a || "super" == a ? a = "sup" : "subscript" == a && (a = "sub"), "" != a && (t.push("<" + a + ">"), r.push("</" + a + ">")), r.push("</span>")
            }(t.s, r[0], r[2]), r[0].join("") + r[1].replace(e, "<br/>") + r[2].join("")) : ""
        }
        return function(e) {
            return e.map(t).join("")
        }
    }(),
    Da = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
    Oa = /<(?:\w+:)?r>/,
    Pa = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;

function ka(e, t) {
    var r = !t || t.cellHTML,
        n = {};
    return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (n.t = Oe(Ve(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), n.r = Ve(e), r && (n.h = Le(n.t))) : e.match(Oa) && (n.r = Ve(e), n.t = Oe(Ve((e.replace(Pa, "").match(Da) || []).join("").replace(_e, ""))), r && (n.h = Ia(xa(n.r)))), n) : {
        t: ""
    }
}
Qr.SST = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
var Fa = /^\s|\s$|[\t\n\r]/;

function Na(e, t) {
    if (!t.bookSST) return "";
    var r = [Be];
    r[r.length] = Ze("sst", null, {
        xmlns: tt.main[0],
        count: e.Count,
        uniqueCount: e.Unique
    });
    for (var n = 0; n != e.length; ++n)
        if (null != e[n]) {
            var a = e[n],
                i = "<si>";
            a.r ? i += a.r : (i += "<t", a.t || (a.t = ""), a.t.match(Fa) && (i += ' xml:space="preserve"'), i += ">" + Fe(a.t) + "</t>"), i += "</si>", r[r.length] = i
        } return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("")
}
var Ma = function(e, t) {
    var r = !1;
    return null == t && (r = !0, t = Xt(15 + 4 * e.t.length)), t.write_shift(1, 0), ur(e.t, t), r ? t.slice(0, t.l) : t
};

function La(e) {
    var t = Gt();
    jt(t, "BrtBeginSst", function(e, t) {
        return t || (t = Xt(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
    }(e));
    for (var r = 0; r < e.length; ++r) jt(t, "BrtSSTItem", Ma(e[r]));
    return jt(t, "BrtEndSst"), t.end()
}

function Ua(e) {
    if (void 0 !== b) return b.utils.encode(u, e);
    for (var t = [], r = e.split(""), n = 0; n < r.length; ++n) t[n] = r[n].charCodeAt(0);
    return t
}

function Ha(e, t) {
    var r = {};
    return r.Major = e.read_shift(2), r.Minor = e.read_shift(2), t >= 4 && (e.l += t - 4), r
}

function Va(e, t) {
    var r = e.l + t,
        n = {};
    n.Flags = 63 & e.read_shift(4), e.l += 4, n.AlgID = e.read_shift(4);
    var a = !1;
    switch (n.AlgID) {
        case 26126:
        case 26127:
        case 26128:
            a = 36 == n.Flags;
            break;
        case 26625:
            a = 4 == n.Flags;
            break;
        case 0:
            a = 16 == n.Flags || 4 == n.Flags || 36 == n.Flags;
            break;
        default:
            throw "Unrecognized encryption algorithm: " + n.AlgID
    }
    if (!a) throw new Error("Encryption Flags/AlgID mismatch");
    return n.AlgIDHash = e.read_shift(4), n.KeySize = e.read_shift(4), n.ProviderType = e.read_shift(4), e.l += 8, n.CSPName = e.read_shift(r - e.l >> 1, "utf16le"), e.l = r, n
}

function Wa(e, t) {
    var r = {},
        n = e.l + t;
    return e.l += 4, r.Salt = e.slice(e.l, e.l + 16), e.l += 16, r.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), r.VerifierHash = e.slice(e.l, n), e.l = n, r
}

function Xa(e) {
    var t, r, n = 0,
        a = Ua(e),
        i = a.length + 1;
    for ((t = x(i))[0] = a.length, r = 1; r != i; ++r) t[r] = a[r - 1];
    for (r = i - 1; r >= 0; --r) n = ((0 == (16384 & n) ? 0 : 1) | n << 1 & 32767) ^ t[r];
    return 52811 ^ n
}
var Ga, ja, $a, za, Ya = (Ga = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], ja = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], $a = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], za = function(e, t) {
        return 255 & ((r = e ^ t) / 2 | 128 * r);
        var r
    }, function(e) {
        for (var t, r, n, a = Ua(e), i = function(e) {
                for (var t = ja[e.length - 1], r = 104, n = e.length - 1; n >= 0; --n)
                    for (var a = e[n], i = 0; 7 != i; ++i) 64 & a && (t ^= $a[r]), a *= 2, --r;
                return t
            }(a), s = a.length, o = x(16), l = 0; 16 != l; ++l) o[l] = 0;
        for (1 == (1 & s) && (t = i >> 8, o[s] = za(Ga[0], t), --s, t = 255 & i, r = a[a.length - 1], o[s] = za(r, t)); s > 0;) t = i >> 8, o[--s] = za(a[s], t), t = 255 & i, o[--s] = za(a[s], t);
        for (s = 15, n = 15 - a.length; n > 0;) t = i >> 8, o[s] = za(Ga[n], t), --n, t = 255 & i, o[--s] = za(a[s], t), --s, --n;
        return o
    }),
    Ka = function(e) {
        var t = 0,
            r = Ya(e);
        return function(e) {
            var n = function(e, t, r, n, a) {
                var i, s;
                for (a || (a = t), n || (n = Ya(e)), i = 0; i != t.length; ++i) s = t[i], s = 255 & ((s ^= n[r]) >> 5 | s << 3), a[i] = s, ++r;
                return [a, r, n]
            }("", e, t, r);
            return t = n[1], n[0]
        }
    };

function Ja(e, t, r) {
    var n = r || {};
    return n.Info = e.read_shift(2), e.l -= 2, 1 === n.Info ? n.Data = function(e) {
        var t = {},
            r = t.EncryptionVersionInfo = Ha(e, 4);
        if (1 != r.Major || 1 != r.Minor) throw "unrecognized version code " + r.Major + " : " + r.Minor;
        return t.Salt = e.read_shift(16), t.EncryptedVerifier = e.read_shift(16), t.EncryptedVerifierHash = e.read_shift(16), t
    }(e) : n.Data = function(e, t) {
        var r = {},
            n = r.EncryptionVersionInfo = Ha(e, 4);
        if (t -= 4, 2 != n.Minor) throw new Error("unrecognized minor version code: " + n.Minor);
        if (n.Major > 4 || n.Major < 2) throw new Error("unrecognized major version code: " + n.Major);
        r.Flags = e.read_shift(4), t -= 4;
        var a = e.read_shift(4);
        return t -= 4, r.EncryptionHeader = Va(e, a), t -= a, r.EncryptionVerifier = Wa(e, t), r
    }(e, t), n
}
var qa = function() {
    function e(e, r) {
        switch (r.type) {
            case "base64":
                return t(y.decode(e), r);
            case "binary":
                return t(e, r);
            case "buffer":
                return t(T && c.isBuffer(e) ? e.toString("binary") : P(e), r);
            case "array":
                return t(le(e), r)
        }
        throw new Error("Unrecognized type " + r.type)
    }

    function t(e, t) {
        var r = (t || {}).dense ? [] : {},
            n = e.match(/\\trowd.*?\\row\b/g);
        if (!n.length) throw new Error("RTF missing table");
        var a = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: n.length - 1
            }
        };
        return n.forEach((function(e, t) {
            Array.isArray(r) && (r[t] = []);
            for (var n, i = /\\\w+\b/g, s = 0, o = -1; n = i.exec(e);) {
                if ("\\cell" === n[0]) {
                    var l = e.slice(s, i.lastIndex - n[0].length);
                    if (" " == l[0] && (l = l.slice(1)), ++o, l.length) {
                        var c = {
                            v: l,
                            t: "s"
                        };
                        Array.isArray(r) ? r[t][o] = c : r[tr({
                            r: t,
                            c: o
                        })] = c
                    }
                }
                s = i.lastIndex
            }
            o > a.e.c && (a.e.c = o)
        })), r["!ref"] = nr(a), r
    }
    return {
        to_workbook: function(t, r) {
            return or(e(t, r), r)
        },
        to_sheet: e,
        from_sheet: function(e) {
            for (var t, r = ["{\\rtf1\\ansi"], n = ar(e["!ref"]), a = Array.isArray(e), i = n.s.r; i <= n.e.r; ++i) {
                r.push("\\trowd\\trautofit1");
                for (var s = n.s.c; s <= n.e.c; ++s) r.push("\\cellx" + (s + 1));
                for (r.push("\\pard\\intbl"), s = n.s.c; s <= n.e.c; ++s) {
                    var o = tr({
                        r: i,
                        c: s
                    });
                    (t = a ? (e[i] || [])[s] : e[o]) && (null != t.v || t.f && !t.F) && (r.push(" " + (t.w || (sr(t), t.w))), r.push("\\cell"))
                }
                r.push("\\pard\\intbl\\row")
            }
            return r.join("") + "}"
        }
    }
}();

function Qa(e) {
    for (var t = 0, r = 1; 3 != t; ++t) r = 256 * r + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
    return r.toString(16).toUpperCase().slice(1)
}

function Za(e, t) {
    if (0 === t) return e;
    var r = function(e) {
        var t = e[0] / 255,
            r = e[1] / 255,
            n = e[2] / 255,
            a = Math.max(t, r, n),
            i = Math.min(t, r, n),
            s = a - i;
        if (0 === s) return [0, 0, t];
        var o, l = 0,
            c = a + i;
        switch (o = s / (c > 1 ? 2 - c : c), a) {
            case t:
                l = ((r - n) / s + 6) % 6;
                break;
            case r:
                l = (n - t) / s + 2;
                break;
            case n:
                l = (t - r) / s + 4
        }
        return [l / 6, o, c / 2]
    }(function(e) {
        var t = e.slice("#" === e[0] ? 1 : 0).slice(0, 6);
        return [parseInt(t.slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16)]
    }(e));
    return r[2] = t < 0 ? r[2] * (1 + t) : 1 - (1 - r[2]) * (1 - t), Qa(function(e) {
        var t, r = e[0],
            n = e[1],
            a = e[2],
            i = 2 * n * (a < .5 ? a : 1 - a),
            s = a - i / 2,
            o = [s, s, s],
            l = 6 * r;
        if (0 !== n) switch (0 | l) {
            case 0:
            case 6:
                t = i * l, o[0] += i, o[1] += t;
                break;
            case 1:
                t = i * (2 - l), o[0] += t, o[1] += i;
                break;
            case 2:
                t = i * (l - 2), o[1] += i, o[2] += t;
                break;
            case 3:
                t = i * (4 - l), o[1] += t, o[2] += i;
                break;
            case 4:
                t = i * (l - 4), o[2] += i, o[0] += t;
                break;
            case 5:
                t = i * (6 - l), o[2] += t, o[0] += i
        }
        for (var c = 0; 3 != c; ++c) o[c] = Math.round(255 * o[c]);
        return o
    }(r))
}
var ei = 6;

function ti(e) {
    return Math.floor((e + Math.round(128 / ei) / 256) * ei)
}

function ri(e) {
    return Math.floor((e - 5) / ei * 100 + .5) / 100
}

function ni(e) {
    return Math.round((e * ei + 5) / ei * 256) / 256
}

function ai(e) {
    e.width ? (e.wpx = ti(e.width), e.wch = ri(e.wpx), e.MDW = ei) : e.wpx ? (e.wch = ri(e.wpx), e.width = ni(e.wch), e.MDW = ei) : "number" == typeof e.wch && (e.width = ni(e.wch), e.wpx = ti(e.width), e.MDW = ei), e.customWidth && delete e.customWidth
}

function ii(e) {
    return 96 * e / 96
}

function si(e) {
    return 96 * e / 96
}
var oi = ["numFmtId", "fillId", "fontId", "borderId", "xfId"],
    li = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
ci = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, fi = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, hi = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, ui = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, di = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
var ci, fi, hi, ui, di, pi = Ze("styleSheet", null, {
    xmlns: tt.main[0],
    "xmlns:vt": tt.vt
});

function mi(e, t) {
    var r, n = [Be, pi];
    return e.SSF && null != (r = function(e) {
        var t = ["<numFmts>"];
        return [
            [5, 8],
            [23, 26],
            [41, 44],
            [50, 392]
        ].forEach((function(r) {
            for (var n = r[0]; n <= r[1]; ++n) null != e[n] && (t[t.length] = Ze("numFmt", null, {
                numFmtId: n,
                formatCode: Fe(e[n])
            }))
        })), 1 === t.length ? "" : (t[t.length] = "</numFmts>", t[0] = Ze("numFmts", null, {
            count: t.length - 2
        }).replace("/>", ">"), t.join(""))
    }(e.SSF)) && (n[n.length] = r), n[n.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', n[n.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', n[n.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', n[n.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (r = function(e) {
        var t = [];
        return t[t.length] = Ze("cellXfs", null), e.forEach((function(e) {
            t[t.length] = Ze("xf", null, e)
        })), t[t.length] = "</cellXfs>", 2 === t.length ? "" : (t[0] = Ze("cellXfs", null, {
            count: t.length - 2
        }).replace("/>", ">"), t.join(""))
    }(t.cellXfs)) && (n[n.length] = r), n[n.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', n[n.length] = '<dxfs count="0"/>', n[n.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', n.length > 2 && (n[n.length] = "</styleSheet>", n[1] = n[1].replace("/>", ">")), n.join("")
}

function gi(e, t, r) {
    r || (r = Xt(6 + 4 * t.length)), r.write_shift(2, e), ur(t, r);
    var n = r.length > r.l ? r.slice(0, r.l) : r;
    return null == r.l && (r.l = r.length), n
}

function vi(e, t) {
    t || (t = Xt(153)), t.write_shift(2, 20 * e.sz),
        function(e, t) {
            t || (t = Xt(2));
            var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
            t.write_shift(1, r), t.write_shift(1, 0)
        }(e, t), t.write_shift(2, e.bold ? 700 : 400);
    var r = 0;
    "superscript" == e.vertAlign ? r = 1 : "subscript" == e.vertAlign && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), Fr(e.color, t);
    var n = 0;
    return "major" == e.scheme && (n = 1), "minor" == e.scheme && (n = 2), t.write_shift(1, n), ur(e.name, t), t.length > t.l ? t.slice(0, t.l) : t
}
Qr.STY = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
var Ei = J(["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"]),
    Si = Wt;

function bi(e, t) {
    t || (t = Xt(84));
    var r = Ei[e.patternType];
    null == r && (r = 40), t.write_shift(4, r);
    var n = 0;
    if (40 != r)
        for (Fr({
                auto: 1
            }, t), Fr({
                auto: 1
            }, t); n < 12; ++n) t.write_shift(4, 0);
    else {
        for (; n < 4; ++n) t.write_shift(4, 0);
        for (; n < 12; ++n) t.write_shift(4, 0)
    }
    return t.length > t.l ? t.slice(0, t.l) : t
}

function wi(e, t, r) {
    r || (r = Xt(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
    return r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r
}

function Bi(e, t) {
    return t || (t = Xt(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t
}
var Ci = Wt;

function _i(e) {
    jt(e, "BrtBeginBorders", fr(1)), jt(e, "BrtBorder", function(e, t) {
        return t || (t = Xt(51)), t.write_shift(1, 0), Bi(0, t), Bi(0, t), Bi(0, t), Bi(0, t), Bi(0, t), t.length > t.l ? t.slice(0, t.l) : t
    }()), jt(e, "BrtEndBorders")
}

function yi(e) {
    jt(e, "BrtBeginStyles", fr(1)), jt(e, "BrtStyle", function(e, t) {
        return t || (t = Xt(52)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, +e.builtinId), t.write_shift(1, 0), _r(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t
    }({
        xfId: 0,
        builtinId: 0,
        name: "Normal"
    })), jt(e, "BrtEndStyles")
}

function Ti(e) {
    jt(e, "BrtBeginTableStyles", function(e, t, r) {
        var n = Xt(2052);
        return n.write_shift(4, e), _r(t, n), _r(r, n), n.length > n.l ? n.slice(0, n.l) : n
    }(0, "TableStyleMedium9", "PivotStyleMedium4")), jt(e, "BrtEndTableStyles")
}

function Ai(e, t) {
    var r = Gt();
    return jt(r, "BrtBeginStyleSheet"),
        function(e, t) {
            if (t) {
                var r = 0;
                [
                    [5, 8],
                    [23, 26],
                    [41, 44],
                    [50, 392]
                ].forEach((function(e) {
                    for (var n = e[0]; n <= e[1]; ++n) null != t[n] && ++r
                })), 0 != r && (jt(e, "BrtBeginFmts", fr(r)), [
                    [5, 8],
                    [23, 26],
                    [41, 44],
                    [50, 392]
                ].forEach((function(r) {
                    for (var n = r[0]; n <= r[1]; ++n) null != t[n] && jt(e, "BrtFmt", gi(n, t[n]))
                })), jt(e, "BrtEndFmts"))
            }
        }(r, e.SSF),
        function(e) {
            jt(e, "BrtBeginFonts", fr(1)), jt(e, "BrtFont", vi({
                sz: 12,
                color: {
                    theme: 1
                },
                name: "Calibri",
                family: 2,
                scheme: "minor"
            })), jt(e, "BrtEndFonts")
        }(r),
        function(e) {
            jt(e, "BrtBeginFills", fr(2)), jt(e, "BrtFill", bi({
                patternType: "none"
            })), jt(e, "BrtFill", bi({
                patternType: "gray125"
            })), jt(e, "BrtEndFills")
        }(r), _i(r),
        function(e) {
            jt(e, "BrtBeginCellStyleXFs", fr(1)), jt(e, "BrtXF", wi({
                numFmtId: 0,
                fontId: 0,
                fillId: 0,
                borderId: 0
            }, 65535)), jt(e, "BrtEndCellStyleXFs")
        }(r),
        function(e, t) {
            jt(e, "BrtBeginCellXFs", fr(t.length)), t.forEach((function(t) {
                jt(e, "BrtXF", wi(t, 0))
            })), jt(e, "BrtEndCellXFs")
        }(r, t.cellXfs), yi(r),
        function(e) {
            jt(e, "BrtBeginDXFs", fr(0)), jt(e, "BrtEndDXFs")
        }(r), Ti(r), jt(r, "BrtEndStyleSheet"), r.end()
}
Qr.THEME = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
var Ri = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];

function xi(e, t, r) {
    t.themeElements.clrScheme = [];
    var n = {};
    (e[0].match(_e) || []).forEach((function(e) {
        var a = Te(e);
        switch (a[0]) {
            case "<a:clrScheme":
            case "</a:clrScheme>":
                break;
            case "<a:srgbClr":
                n.rgb = a.val;
                break;
            case "<a:sysClr":
                n.rgb = a.lastClr;
                break;
            case "<a:dk1>":
            case "</a:dk1>":
            case "<a:lt1>":
            case "</a:lt1>":
            case "<a:dk2>":
            case "</a:dk2>":
            case "<a:lt2>":
            case "</a:lt2>":
            case "<a:accent1>":
            case "</a:accent1>":
            case "<a:accent2>":
            case "</a:accent2>":
            case "<a:accent3>":
            case "</a:accent3>":
            case "<a:accent4>":
            case "</a:accent4>":
            case "<a:accent5>":
            case "</a:accent5>":
            case "<a:accent6>":
            case "</a:accent6>":
            case "<a:hlink>":
            case "</a:hlink>":
            case "<a:folHlink>":
            case "</a:folHlink>":
                "/" === a[0].charAt(1) ? (t.themeElements.clrScheme[Ri.indexOf(a[0])] = n, n = {}) : n.name = a[0].slice(3, a[0].length - 1);
                break;
            default:
                if (r && r.WTF) throw new Error("Unrecognized " + a[0] + " in clrScheme")
        }
    }))
}

function Ii() {}

function Di() {}
var Oi = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,
    Pi = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,
    ki = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
var Fi = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;

function Ni(e, t) {
    if (!e || 0 === e.length) return Ni(Mi());
    var r, n = {};
    if (!(r = e.match(Fi))) throw new Error("themeElements not found in theme");
    return function(e, t, r) {
        var n;
        t.themeElements = {}, [
            ["clrScheme", Oi, xi],
            ["fontScheme", Pi, Ii],
            ["fmtScheme", ki, Di]
        ].forEach((function(a) {
            if (!(n = e.match(a[1]))) throw new Error(a[0] + " not found in themeElements");
            a[2](n, t, r)
        }))
    }(r[0], n, t), n.raw = e, n
}

function Mi(e, t) {
    if (t && t.themeXLSX) return t.themeXLSX;
    if (e && "string" == typeof e.raw) return e.raw;
    var r = [Be];
    return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("")
}

function Li(e) {
    var t = {};
    switch (t.xclrType = e.read_shift(2), t.nTintShade = e.read_shift(2), t.xclrType) {
        case 0:
        case 4:
            e.l += 4;
            break;
        case 1:
            t.xclrValue = function(e, t) {
                return Wt(e, t)
            }(e, 4);
            break;
        case 2:
            t.xclrValue = Wn(e);
            break;
        case 3:
            t.xclrValue = function(e) {
                return e.read_shift(4)
            }(e)
    }
    return e.l += 8, t
}

function Ui(e) {
    var t = e.read_shift(2),
        r = e.read_shift(2) - 4,
        n = [t];
    switch (t) {
        case 4:
        case 5:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
            n[1] = Li(e);
            break;
        case 6:
            n[1] = function(e, t) {
                return Wt(e, t)
            }(e, r);
            break;
        case 14:
        case 15:
            n[1] = e.read_shift(1 === r ? 1 : 2);
            break;
        default:
            throw new Error("Unrecognized ExtProp type: " + t + " " + r)
    }
    return n
}
Qr.IMG = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", Qr.DRAW = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";
var Hi = 1024;

function Vi(e, t) {
    for (var r = [21600, 21600], n = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), a = [Ze("xml", null, {
            "xmlns:v": ot,
            "xmlns:o": rt,
            "xmlns:x": nt,
            "xmlns:mv": st
        }).replace(/\/>/, ">"), Ze("o:shapelayout", Ze("o:idmap", null, {
            "v:ext": "edit",
            data: e
        }), {
            "v:ext": "edit"
        }), Ze("v:shapetype", [Ze("v:stroke", null, {
            joinstyle: "miter"
        }), Ze("v:path", null, {
            gradientshapeok: "t",
            "o:connecttype": "rect"
        })].join(""), {
            id: "_x0000_t202",
            "o:spt": 202,
            coordsize: r.join(","),
            path: n
        })]; Hi < 1e3 * e;) Hi += 1e3;
    return t.forEach((function(e) {
        var t = er(e[0]),
            r = {
                color2: "#BEFF82",
                type: "gradient"
            };
        "gradient" == r.type && (r.angle = "-180");
        var n = "gradient" == r.type ? Ze("o:fill", null, {
                type: "gradientUnscaled",
                "v:ext": "view"
            }) : null,
            i = Ze("v:fill", n, r);
        ++Hi, a = a.concat(["<v:shape" + Qe({
            id: "_x0000_s" + Hi,
            type: "#_x0000_t202",
            style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""),
            fillcolor: "#ECFAD4",
            strokecolor: "#edeaa1"
        }) + ">", i, Ze("v:shadow", null, {
            on: "t",
            obscured: "t"
        }), Ze("v:path", null, {
            "o:connecttype": "none"
        }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", qe("x:Anchor", [t.c + 1, 0, t.r + 1, 0, t.c + 3, 20, t.r + 5, 20].join(",")), qe("x:AutoFill", "False"), qe("x:Row", String(t.r)), qe("x:Column", String(t.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"])
    })), a.push("</xml>"), a.join("")
}
Qr.CMNT = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
var Wi = Ze("comments", null, {
    xmlns: tt.main[0]
});

function Xi(e) {
    var t = [Be, Wi],
        r = [];
    return t.push("<authors>"), e.forEach((function(e) {
        e[1].forEach((function(e) {
            var n = Fe(e.a);
            r.indexOf(n) > -1 || (r.push(n), t.push("<author>" + n + "</author>"))
        }))
    })), t.push("</authors>"), t.push("<commentList>"), e.forEach((function(e) {
        e[1].forEach((function(n) {
            t.push('<comment ref="' + e[0] + '" authorId="' + r.indexOf(Fe(n.a)) + '"><text>'), t.push(qe("t", null == n.t ? "" : Fe(n.t))), t.push("</text></comment>")
        }))
    })), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("")
}
var Gi = hr;

function ji(e) {
    var t = Gt(),
        r = [];
    return jt(t, "BrtBeginComments"), jt(t, "BrtBeginCommentAuthors"), e.forEach((function(e) {
        e[1].forEach((function(e) {
            r.indexOf(e.a) > -1 || (r.push(e.a.slice(0, 54)), jt(t, "BrtCommentAuthor", function(e) {
                return ur(e.slice(0, 54))
            }(e.a)))
        }))
    })), jt(t, "BrtEndCommentAuthors"), jt(t, "BrtBeginCommentList"), e.forEach((function(e) {
        e[1].forEach((function(n) {
            n.iauthor = r.indexOf(n.a);
            var a = {
                s: er(e[0]),
                e: er(e[0])
            };
            jt(t, "BrtBeginComment", function(e, t) {
                return null == t && (t = Xt(36)), t.write_shift(4, e[1].iauthor), Or(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t
            }([a, n])), n.t && n.t.length > 0 && jt(t, "BrtCommentText", gr(n)), jt(t, "BrtEndComment"), delete n.iauthor
        }))
    })), jt(t, "BrtEndCommentList"), jt(t, "BrtEndComments"), t.end()
}
var $i = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
Qr.DS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet", Qr.MS = "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet";
var zi = function() {
        var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
            t = {
                r: 0,
                c: 0
            };

        function r(e, r, n, a) {
            var i = !1,
                s = !1;
            0 == n.length ? s = !0 : "[" == n.charAt(0) && (s = !0, n = n.slice(1, -1)), 0 == a.length ? i = !0 : "[" == a.charAt(0) && (i = !0, a = a.slice(1, -1));
            var o = n.length > 0 ? 0 | parseInt(n, 10) : 0,
                l = a.length > 0 ? 0 | parseInt(a, 10) : 0;
            return i ? l += t.c : --l, s ? o += t.r : --o, r + (i ? "" : "$") + Zt(l) + (s ? "" : "$") + qt(o)
        }
        return function(n, a) {
            return t = a, n.replace(e, r)
        }
    }(),
    Yi = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
    Ki = function(e, t) {
        return e.replace(Yi, (function(e, r, n, a, i, s) {
            var o = Qt(a) - (n ? 0 : t.c),
                l = Jt(s) - (i ? 0 : t.r);
            return r + "R" + (0 == l ? "" : i ? l + 1 : "[" + l + "]") + "C" + (0 == o ? "" : n ? o + 1 : "[" + o + "]")
        }))
    };

function Ji(e, t) {
    return e.replace(Yi, (function(e, r, n, a, i, s) {
        return r + ("$" == n ? n + a : Zt(Qt(a) + t.c)) + ("$" == i ? i + s : qt(Jt(s) + t.r))
    }))
}

function qi(e, t, r) {
    var n = rr(t).s,
        a = er(r);
    return Ji(e, {
        r: a.r - n.r,
        c: a.c - n.c
    })
}

function Qi(e) {
    return e.replace(/_xlfn\./g, "")
}

function Zi(e) {
    e.l += 1
}

function es(e, t) {
    var r = e.read_shift(1 == t ? 1 : 2);
    return [16383 & r, r >> 14 & 1, r >> 15 & 1]
}

function ts(e, t, r) {
    var n = 2;
    if (r) {
        if (r.biff >= 2 && r.biff <= 5) return rs(e);
        12 == r.biff && (n = 4)
    }
    var a = e.read_shift(n),
        i = e.read_shift(n),
        s = es(e, 2),
        o = es(e, 2);
    return {
        s: {
            r: a,
            c: s[0],
            cRel: s[1],
            rRel: s[2]
        },
        e: {
            r: i,
            c: o[0],
            cRel: o[1],
            rRel: o[2]
        }
    }
}

function rs(e) {
    var t = es(e, 2),
        r = es(e, 2),
        n = e.read_shift(1),
        a = e.read_shift(1);
    return {
        s: {
            r: t[0],
            c: n,
            cRel: t[1],
            rRel: t[2]
        },
        e: {
            r: r[0],
            c: a,
            cRel: r[1],
            rRel: r[2]
        }
    }
}

function ns(e, t, r) {
    if (r && r.biff >= 2 && r.biff <= 5) return function(e) {
        var t = es(e, 2),
            r = e.read_shift(1);
        return {
            r: t[0],
            c: r,
            cRel: t[1],
            rRel: t[2]
        }
    }(e);
    var n = e.read_shift(r && 12 == r.biff ? 4 : 2),
        a = es(e, 2);
    return {
        r: n,
        c: a[0],
        cRel: a[1],
        rRel: a[2]
    }
}

function as(e) {
    var t = e.read_shift(2),
        r = e.read_shift(2);
    return {
        r: t,
        c: 255 & r,
        fQuoted: !!(16384 & r),
        cRel: r >> 15,
        rRel: r >> 15
    }
}

function is(e) {
    return [e.read_shift(1), e.read_shift(1)]
}

function ss(e, t) {
    var r = [e.read_shift(1)];
    if (12 == t) switch (r[0]) {
        case 2:
            r[0] = 4;
            break;
        case 4:
            r[0] = 16;
            break;
        case 0:
            r[0] = 1;
            break;
        case 1:
            r[0] = 2
    }
    switch (r[0]) {
        case 4:
            r[1] = yn(e, 1) ? "TRUE" : "FALSE", 12 != t && (e.l += 7);
            break;
        case 37:
        case 16:
            r[1] = Gr[e[e.l]], e.l += 12 == t ? 4 : 8;
            break;
        case 0:
            e.l += 8;
            break;
        case 1:
            r[1] = Pr(e);
            break;
        case 2:
            r[1] = Nn(e, 0, {
                biff: t > 0 && t < 8 ? 2 : t
            });
            break;
        default:
            throw new Error("Bad SerAr: " + r[0])
    }
    return r
}

function os(e, t, r) {
    for (var n = e.read_shift(12 == r.biff ? 4 : 2), a = [], i = 0; i != n; ++i) a.push((12 == r.biff ? Dr : Yn)(e, 8));
    return a
}

function ls(e, t, r) {
    var n = 0,
        a = 0;
    12 == r.biff ? (n = e.read_shift(4), a = e.read_shift(4)) : (a = 1 + e.read_shift(1), n = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--n, 0 == --a && (a = 256));
    for (var i = 0, s = []; i != n && (s[i] = []); ++i)
        for (var o = 0; o != a; ++o) s[i][o] = ss(e, r.biff);
    return s
}

function cs(e, t, r) {
    return e.l += 2, [as(e)]
}

function fs(e) {
    return e.l += 6, []
}
var hs = cs,
    us = fs,
    ds = fs,
    ps = cs;

function ms(e) {
    return e.l += 2, [An(e), 1 & e.read_shift(2)]
}
var gs = cs,
    vs = ms,
    Es = fs,
    Ss = cs,
    bs = cs,
    ws = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
var Bs = {
        1: {
            n: "PtgExp",
            f: function(e, t, r) {
                return e.l++, r && 12 == r.biff ? [e.read_shift(4, "i"), 0] : [e.read_shift(2), e.read_shift(r && 2 == r.biff ? 1 : 2)]
            }
        },
        2: {
            n: "PtgTbl",
            f: Wt
        },
        3: {
            n: "PtgAdd",
            f: Zi
        },
        4: {
            n: "PtgSub",
            f: Zi
        },
        5: {
            n: "PtgMul",
            f: Zi
        },
        6: {
            n: "PtgDiv",
            f: Zi
        },
        7: {
            n: "PtgPower",
            f: Zi
        },
        8: {
            n: "PtgConcat",
            f: Zi
        },
        9: {
            n: "PtgLt",
            f: Zi
        },
        10: {
            n: "PtgLe",
            f: Zi
        },
        11: {
            n: "PtgEq",
            f: Zi
        },
        12: {
            n: "PtgGe",
            f: Zi
        },
        13: {
            n: "PtgGt",
            f: Zi
        },
        14: {
            n: "PtgNe",
            f: Zi
        },
        15: {
            n: "PtgIsect",
            f: Zi
        },
        16: {
            n: "PtgUnion",
            f: Zi
        },
        17: {
            n: "PtgRange",
            f: Zi
        },
        18: {
            n: "PtgUplus",
            f: Zi
        },
        19: {
            n: "PtgUminus",
            f: Zi
        },
        20: {
            n: "PtgPercent",
            f: Zi
        },
        21: {
            n: "PtgParen",
            f: Zi
        },
        22: {
            n: "PtgMissArg",
            f: Zi
        },
        23: {
            n: "PtgStr",
            f: function(e, t, r) {
                return e.l++, Dn(e, 0, r)
            }
        },
        26: {
            n: "PtgSheet",
            f: function(e, t, r) {
                return e.l += 5, e.l += 2, e.l += 2 == r.biff ? 1 : 4, ["PTGSHEET"]
            }
        },
        27: {
            n: "PtgEndSheet",
            f: function(e, t, r) {
                return e.l += 2 == r.biff ? 4 : 5, ["PTGENDSHEET"]
            }
        },
        28: {
            n: "PtgErr",
            f: function(e) {
                return e.l++, Gr[e.read_shift(1)]
            }
        },
        29: {
            n: "PtgBool",
            f: function(e) {
                return e.l++, 0 !== e.read_shift(1)
            }
        },
        30: {
            n: "PtgInt",
            f: function(e) {
                return e.l++, e.read_shift(2)
            }
        },
        31: {
            n: "PtgNum",
            f: function(e) {
                return e.l++, Pr(e)
            }
        },
        32: {
            n: "PtgArray",
            f: function(e, t, r) {
                var n = (96 & e[e.l++]) >> 5;
                return e.l += 2 == r.biff ? 6 : 12 == r.biff ? 14 : 7, [n]
            }
        },
        33: {
            n: "PtgFunc",
            f: function(e, t, r) {
                var n = (96 & e[e.l]) >> 5;
                e.l += 1;
                var a = e.read_shift(r && r.biff <= 3 ? 1 : 2);
                return [js[a], Gs[a], n]
            }
        },
        34: {
            n: "PtgFuncVar",
            f: function(e, t, r) {
                var n = e[e.l++],
                    a = e.read_shift(1),
                    i = r && r.biff <= 3 ? [88 == n ? -1 : 0, e.read_shift(1)] : function(e) {
                        return [e[e.l + 1] >> 7, 32767 & e.read_shift(2)]
                    }(e);
                return [a, (0 === i[0] ? Gs : Xs)[i[1]]]
            }
        },
        35: {
            n: "PtgName",
            f: function(e, t, r) {
                var n = e.read_shift(1) >>> 5 & 3,
                    a = !r || r.biff >= 8 ? 4 : 2,
                    i = e.read_shift(a);
                switch (r.biff) {
                    case 2:
                        e.l += 5;
                        break;
                    case 3:
                    case 4:
                        e.l += 8;
                        break;
                    case 5:
                        e.l += 12
                }
                return [n, 0, i]
            }
        },
        36: {
            n: "PtgRef",
            f: function(e, t, r) {
                var n = (96 & e[e.l]) >> 5;
                return e.l += 1, [n, ns(e, 0, r)]
            }
        },
        37: {
            n: "PtgArea",
            f: function(e, t, r) {
                return [(96 & e[e.l++]) >> 5, ts(e, r.biff >= 2 && r.biff, r)]
            }
        },
        38: {
            n: "PtgMemArea",
            f: function(e, t, r) {
                var n = e.read_shift(1) >>> 5 & 3;
                return e.l += r && 2 == r.biff ? 3 : 4, [n, e.read_shift(r && 2 == r.biff ? 1 : 2)]
            }
        },
        39: {
            n: "PtgMemErr",
            f: Wt
        },
        40: {
            n: "PtgMemNoMem",
            f: Wt
        },
        41: {
            n: "PtgMemFunc",
            f: function(e, t, r) {
                return [e.read_shift(1) >>> 5 & 3, e.read_shift(r && 2 == r.biff ? 1 : 2)]
            }
        },
        42: {
            n: "PtgRefErr",
            f: function(e, t, r) {
                var n = e.read_shift(1) >>> 5 & 3;
                return e.l += 4, r.biff < 8 && e.l--, 12 == r.biff && (e.l += 2), [n]
            }
        },
        43: {
            n: "PtgAreaErr",
            f: function(e, t, r) {
                var n = (96 & e[e.l++]) >> 5;
                return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [n]
            }
        },
        44: {
            n: "PtgRefN",
            f: function(e, t, r) {
                var n = (96 & e[e.l]) >> 5;
                e.l += 1;
                var a = function(e, t, r) {
                    var n = r && r.biff ? r.biff : 8;
                    if (n >= 2 && n <= 5) return function(e) {
                        var t = e.read_shift(2),
                            r = e.read_shift(1),
                            n = (32768 & t) >> 15,
                            a = (16384 & t) >> 14;
                        return t &= 16383, 1 == n && t >= 8192 && (t -= 16384), 1 == a && r >= 128 && (r -= 256), {
                            r: t,
                            c: r,
                            cRel: a,
                            rRel: n
                        }
                    }(e);
                    var a = e.read_shift(n >= 12 ? 4 : 2),
                        i = e.read_shift(2),
                        s = (16384 & i) >> 14,
                        o = (32768 & i) >> 15;
                    if (i &= 16383, 1 == o)
                        for (; a > 524287;) a -= 1048576;
                    if (1 == s)
                        for (; i > 8191;) i -= 16384;
                    return {
                        r: a,
                        c: i,
                        cRel: s,
                        rRel: o
                    }
                }(e, 0, r);
                return [n, a]
            }
        },
        45: {
            n: "PtgAreaN",
            f: function(e, t, r) {
                var n = (96 & e[e.l++]) >> 5,
                    a = function(e, t, r) {
                        if (r.biff < 8) return rs(e);
                        var n = e.read_shift(12 == r.biff ? 4 : 2),
                            a = e.read_shift(12 == r.biff ? 4 : 2),
                            i = es(e, 2),
                            s = es(e, 2);
                        return {
                            s: {
                                r: n,
                                c: i[0],
                                cRel: i[1],
                                rRel: i[2]
                            },
                            e: {
                                r: a,
                                c: s[0],
                                cRel: s[1],
                                rRel: s[2]
                            }
                        }
                    }(e, 0, r);
                return [n, a]
            }
        },
        46: {
            n: "PtgMemAreaN",
            f: function(e) {
                return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)]
            }
        },
        47: {
            n: "PtgMemNoMemN",
            f: function(e) {
                return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)]
            }
        },
        57: {
            n: "PtgNameX",
            f: function(e, t, r) {
                return 5 == r.biff ? function(e) {
                    var t = e.read_shift(1) >>> 5 & 3,
                        r = e.read_shift(2, "i");
                    e.l += 8;
                    var n = e.read_shift(2);
                    return e.l += 12, [t, r, n]
                }(e) : [e.read_shift(1) >>> 5 & 3, e.read_shift(2), e.read_shift(4)]
            }
        },
        58: {
            n: "PtgRef3d",
            f: function(e, t, r) {
                var n = (96 & e[e.l]) >> 5;
                e.l += 1;
                var a = e.read_shift(2);
                return r && 5 == r.biff && (e.l += 12), [n, a, ns(e, 0, r)]
            }
        },
        59: {
            n: "PtgArea3d",
            f: function(e, t, r) {
                var n = (96 & e[e.l++]) >> 5,
                    a = e.read_shift(2, "i");
                if (r) switch (r.biff) {
                    case 5:
                        e.l += 12, 6;
                        break;
                    case 12:
                        12
                }
                return [n, a, ts(e, 0, r)]
            }
        },
        60: {
            n: "PtgRefErr3d",
            f: function(e, t, r) {
                var n = (96 & e[e.l++]) >> 5,
                    a = e.read_shift(2),
                    i = 4;
                if (r) switch (r.biff) {
                    case 5:
                        i = 15;
                        break;
                    case 12:
                        i = 6
                }
                return e.l += i, [n, a]
            }
        },
        61: {
            n: "PtgAreaErr3d",
            f: function(e, t, r) {
                var n = (96 & e[e.l++]) >> 5,
                    a = e.read_shift(2),
                    i = 8;
                if (r) switch (r.biff) {
                    case 5:
                        e.l += 12, i = 6;
                        break;
                    case 12:
                        i = 12
                }
                return e.l += i, [n, a]
            }
        },
        255: {}
    },
    Cs = {
        64: 32,
        96: 32,
        65: 33,
        97: 33,
        66: 34,
        98: 34,
        67: 35,
        99: 35,
        68: 36,
        100: 36,
        69: 37,
        101: 37,
        70: 38,
        102: 38,
        71: 39,
        103: 39,
        72: 40,
        104: 40,
        73: 41,
        105: 41,
        74: 42,
        106: 42,
        75: 43,
        107: 43,
        76: 44,
        108: 44,
        77: 45,
        109: 45,
        78: 46,
        110: 46,
        79: 47,
        111: 47,
        88: 34,
        120: 34,
        89: 57,
        121: 57,
        90: 58,
        122: 58,
        91: 59,
        123: 59,
        92: 60,
        124: 60,
        93: 61,
        125: 61
    };
! function() {
    for (var e in Cs) Bs[e] = Bs[Cs[e]]
}();
var _s = {
        1: {
            n: "PtgElfLel",
            f: ms
        },
        2: {
            n: "PtgElfRw",
            f: Ss
        },
        3: {
            n: "PtgElfCol",
            f: hs
        },
        6: {
            n: "PtgElfRwV",
            f: bs
        },
        7: {
            n: "PtgElfColV",
            f: ps
        },
        10: {
            n: "PtgElfRadical",
            f: gs
        },
        11: {
            n: "PtgElfRadicalS",
            f: Es
        },
        13: {
            n: "PtgElfColS",
            f: us
        },
        15: {
            n: "PtgElfColSV",
            f: ds
        },
        16: {
            n: "PtgElfRadicalLel",
            f: vs
        },
        25: {
            n: "PtgList",
            f: function(e) {
                e.l += 2;
                var t = e.read_shift(2),
                    r = e.read_shift(2),
                    n = e.read_shift(4),
                    a = e.read_shift(2),
                    i = e.read_shift(2);
                return {
                    ixti: t,
                    coltype: 3 & r,
                    rt: ws[r >> 2 & 31],
                    idx: n,
                    c: a,
                    C: i
                }
            }
        },
        29: {
            n: "PtgSxName",
            f: function(e) {
                return e.l += 2, [e.read_shift(4)]
            }
        },
        255: {}
    },
    ys = {
        0: {
            n: "PtgAttrNoop",
            f: function(e) {
                return e.l += 4, [0, 0]
            }
        },
        1: {
            n: "PtgAttrSemi",
            f: function(e, t, r) {
                var n = 255 & e[e.l + 1] ? 1 : 0;
                return e.l += r && 2 == r.biff ? 3 : 4, [n]
            }
        },
        2: {
            n: "PtgAttrIf",
            f: function(e, t, r) {
                var n = 255 & e[e.l + 1] ? 1 : 0;
                return e.l += 2, [n, e.read_shift(r && 2 == r.biff ? 1 : 2)]
            }
        },
        4: {
            n: "PtgAttrChoose",
            f: function(e, t, r) {
                e.l += 2;
                for (var n = e.read_shift(r && 2 == r.biff ? 1 : 2), a = [], i = 0; i <= n; ++i) a.push(e.read_shift(r && 2 == r.biff ? 1 : 2));
                return a
            }
        },
        8: {
            n: "PtgAttrGoto",
            f: function(e, t, r) {
                var n = 255 & e[e.l + 1] ? 1 : 0;
                return e.l += 2, [n, e.read_shift(r && 2 == r.biff ? 1 : 2)]
            }
        },
        16: {
            n: "PtgAttrSum",
            f: function(e, t, r) {
                e.l += r && 2 == r.biff ? 3 : 4
            }
        },
        32: {
            n: "PtgAttrBaxcel",
            f: function(e) {
                var t = 1 & e[e.l + 1];
                return e.l += 4, [t, 1]
            }
        },
        64: {
            n: "PtgAttrSpace",
            f: function(e) {
                return e.read_shift(2), is(e)
            }
        },
        65: {
            n: "PtgAttrSpaceSemi",
            f: function(e) {
                return e.read_shift(2), is(e)
            }
        },
        128: {
            n: "PtgAttrIfError",
            f: function(e) {
                var t = 255 & e[e.l + 1] ? 1 : 0;
                return e.l += 2, [t, e.read_shift(2)]
            }
        },
        255: {}
    };

function Ts(e, t, r, n) {
    if (n.biff < 8) return Wt(e, t);
    for (var a = e.l + t, i = [], s = 0; s !== r.length; ++s) switch (r[s][0]) {
        case "PtgArray":
            r[s][1] = ls(e, 0, n), i.push(r[s][1]);
            break;
        case "PtgMemArea":
            r[s][2] = os(e, r[s][1], n), i.push(r[s][2]);
            break;
        case "PtgExp":
            n && 12 == n.biff && (r[s][1][1] = e.read_shift(4), i.push(r[s][1]));
            break;
        case "PtgList":
        case "PtgElfRadicalS":
        case "PtgElfColS":
        case "PtgElfColSV":
            throw "Unsupported " + r[s][0]
    }
    return 0 !== (t = a - e.l) && i.push(Wt(e, t)), i
}

function As(e, t, r) {
    for (var n, a, i = e.l + t, s = []; i != e.l;) t = i - e.l, a = e[e.l], n = Bs[a], 24 !== a && 25 !== a || (n = (24 === a ? _s : ys)[e[e.l + 1]]), n && n.f ? s.push([n.n, n.f(e, t, r)]) : Wt(e, t);
    return s
}

function Rs(e) {
    for (var t = [], r = 0; r < e.length; ++r) {
        for (var n = e[r], a = [], i = 0; i < n.length; ++i) {
            var s = n[i];
            if (s)
                if (2 === s[0]) a.push('"' + s[1].replace(/"/g, '""') + '"');
                else a.push(s[1]);
            else a.push("")
        }
        t.push(a.join(","))
    }
    return t.join(";")
}
ys[33] = ys[32];
var xs = {
        PtgAdd: "+",
        PtgConcat: "&",
        PtgDiv: "/",
        PtgEq: "=",
        PtgGe: ">=",
        PtgGt: ">",
        PtgLe: "<=",
        PtgLt: "<",
        PtgMul: "*",
        PtgNe: "<>",
        PtgPower: "^",
        PtgSub: "-"
    },
    Is = new RegExp(/[^\w\u4E00-\u9FFF\u3040-\u30FF]/);

function Ds(e, t, r) {
    if (!e) return "SH33TJSERR0";
    if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t];
    if (!e.XTI) return "SH33TJSERR6";
    var n = e.XTI[t];
    if (r.biff < 8) return t > 1e4 && (t -= 65536), t < 0 && (t = -t), 0 == t ? "" : e.XTI[t - 1];
    if (!n) return "SH33TJSERR1";
    var a = "";
    if (r.biff > 8) switch (e[n[0]][0]) {
        case 357:
            return a = -1 == n[1] ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];
        case 358:
            return null != r.SID ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
        default:
            return "SH33TJSSRC" + e[n[0]][0]
    }
    switch (e[n[0]][0][0]) {
        case 1025:
            return a = -1 == n[1] ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];
        case 14849:
            return e[n[0]].slice(1).map((function(e) {
                return e.Name
            })).join(";;");
        default:
            return e[n[0]][0][3] ? (a = -1 == n[1] ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", n[1] == n[2] ? a : a + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2"
    }
}

function Os(e, t, r) {
    var n = Ds(e, t, r);
    return "#REF" == n ? n : function(e, t) {
        if (!(e || t && t.biff <= 5 && t.biff >= 2)) throw new Error("empty sheet name");
        return Is.test(e) ? "'" + e + "'" : e
    }(n, r)
}

function Ps(e, t, r, n, a) {
    var i, s, o, l, c = a && a.biff || 8,
        f = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: 0
            }
        },
        h = [],
        u = 0,
        d = 0,
        p = "";
    if (!e[0] || !e[0][0]) return "";
    for (var m = -1, g = "", v = 0, E = e[0].length; v < E; ++v) {
        var S = e[0][v];
        switch (S[0]) {
            case "PtgUminus":
                h.push("-" + h.pop());
                break;
            case "PtgUplus":
                h.push("+" + h.pop());
                break;
            case "PtgPercent":
                h.push(h.pop() + "%");
                break;
            case "PtgAdd":
            case "PtgConcat":
            case "PtgDiv":
            case "PtgEq":
            case "PtgGe":
            case "PtgGt":
            case "PtgLe":
            case "PtgLt":
            case "PtgMul":
            case "PtgNe":
            case "PtgPower":
            case "PtgSub":
                if (i = h.pop(), s = h.pop(), m >= 0) {
                    switch (e[0][m][1][0]) {
                        case 0:
                            g = fe(" ", e[0][m][1][1]);
                            break;
                        case 1:
                            g = fe("\r", e[0][m][1][1]);
                            break;
                        default:
                            if (g = "", a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][m][1][0])
                    }
                    s += g, m = -1
                }
                h.push(s + xs[S[0]] + i);
                break;
            case "PtgIsect":
                i = h.pop(), s = h.pop(), h.push(s + " " + i);
                break;
            case "PtgUnion":
                i = h.pop(), s = h.pop(), h.push(s + "," + i);
                break;
            case "PtgRange":
                i = h.pop(), s = h.pop(), h.push(s + ":" + i);
                break;
            case "PtgAttrChoose":
            case "PtgAttrGoto":
            case "PtgAttrIf":
            case "PtgAttrIfError":
            case "PtgAttrBaxcel":
            case "PtgAttrSemi":
            case "PtgMemArea":
            case "PtgTbl":
            case "PtgMemErr":
            case "PtgMemAreaN":
            case "PtgMemNoMemN":
            case "PtgAttrNoop":
            case "PtgSheet":
            case "PtgEndSheet":
            case "PtgMemFunc":
            case "PtgMemNoMem":
                break;
            case "PtgRef":
                o = $t(S[1][1], f, a), h.push(Yt(o, c));
                break;
            case "PtgRefN":
                o = r ? $t(S[1][1], r, a) : S[1][1], h.push(Yt(o, c));
                break;
            case "PtgRef3d":
                u = S[1][1], o = $t(S[1][2], f, a);
                p = Os(n, u, a);
                h.push(p + "!" + Yt(o, c));
                break;
            case "PtgFunc":
            case "PtgFuncVar":
                var b = S[1][0],
                    w = S[1][1];
                b || (b = 0);
                var B = 0 == (b &= 127) ? [] : h.slice(-b);
                h.length -= b, "User" === w && (w = B.shift()), h.push(w + "(" + B.join(",") + ")");
                break;
            case "PtgBool":
                h.push(S[1] ? "TRUE" : "FALSE");
                break;
            case "PtgInt":
            case "PtgErr":
                h.push(S[1]);
                break;
            case "PtgNum":
                h.push(String(S[1]));
                break;
            case "PtgStr":
                h.push('"' + S[1].replace(/"/g, '""') + '"');
                break;
            case "PtgAreaN":
                l = zt(S[1][1], r ? {
                    s: r
                } : f, a), h.push(Kt(l, a));
                break;
            case "PtgArea":
                l = zt(S[1][1], f, a), h.push(Kt(l, a));
                break;
            case "PtgArea3d":
                u = S[1][1], l = S[1][2], p = Os(n, u, a), h.push(p + "!" + Kt(l, a));
                break;
            case "PtgAttrSum":
                h.push("SUM(" + h.pop() + ")");
                break;
            case "PtgName":
                d = S[1][2];
                var C = (n.names || [])[d - 1] || (n[0] || [])[d],
                    _ = C ? C.Name : "SH33TJSNAME" + String(d);
                _ && "_xlfn." == _.slice(0, 6) && (_ = _.slice(6)), h.push(_);
                break;
            case "PtgNameX":
                var y, T = S[1][1];
                if (d = S[1][2], !(a.biff <= 5)) {
                    var A = "";
                    if (14849 == ((n[T] || [])[0] || [])[0] || (1025 == ((n[T] || [])[0] || [])[0] ? n[T][d] && n[T][d].itab > 0 && (A = n.SheetNames[n[T][d].itab - 1] + "!") : A = n.SheetNames[d - 1] + "!"), n[T] && n[T][d]) A += n[T][d].Name;
                    else if (n[0] && n[0][d]) A += n[0][d].Name;
                    else {
                        var R = (Ds(n, T, a) || "").split(";;");
                        R[d - 1] ? A = R[d - 1] : A += "SH33TJSERRX"
                    }
                    h.push(A);
                    break
                }
                T < 0 && (T = -T), n[T] && (y = n[T][d]), y || (y = {
                    Name: "SH33TJSERRY"
                }), h.push(y.Name);
                break;
            case "PtgParen":
                var x = "(",
                    I = ")";
                if (m >= 0) {
                    switch (g = "", e[0][m][1][0]) {
                        case 2:
                            x = fe(" ", e[0][m][1][1]) + x;
                            break;
                        case 3:
                            x = fe("\r", e[0][m][1][1]) + x;
                            break;
                        case 4:
                            I = fe(" ", e[0][m][1][1]) + I;
                            break;
                        case 5:
                            I = fe("\r", e[0][m][1][1]) + I;
                            break;
                        default:
                            if (a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][m][1][0])
                    }
                    m = -1
                }
                h.push(x + h.pop() + I);
                break;
            case "PtgRefErr":
            case "PtgRefErr3d":
            case "PtgAreaErr":
            case "PtgAreaErr3d":
                h.push("#REF!");
                break;
            case "PtgExp":
                o = {
                    c: S[1][1],
                    r: S[1][0]
                };
                var D = {
                    c: r.c,
                    r: r.r
                };
                if (n.sharedf[tr(o)]) {
                    var O = n.sharedf[tr(o)];
                    h.push(Ps(O, f, D, n, a))
                } else {
                    var P = !1;
                    for (i = 0; i != n.arrayf.length; ++i)
                        if (s = n.arrayf[i], !(o.c < s[0].s.c || o.c > s[0].e.c || o.r < s[0].s.r || o.r > s[0].e.r)) {
                            h.push(Ps(s[1], f, D, n, a)), P = !0;
                            break
                        } P || h.push(S[1])
                }
                break;
            case "PtgArray":
                h.push("{" + Rs(S[1]) + "}");
                break;
            case "PtgAttrSpace":
            case "PtgAttrSpaceSemi":
                m = v;
                break;
            case "PtgMissArg":
                h.push("");
                break;
            case "PtgList":
                h.push("Table" + S[1].idx + "[#" + S[1].rt + "]");
                break;
            case "PtgElfCol":
            case "PtgElfColS":
            case "PtgElfColSV":
            case "PtgElfColV":
            case "PtgElfLel":
            case "PtgElfRadical":
            case "PtgElfRadicalLel":
            case "PtgElfRadicalS":
            case "PtgElfRw":
            case "PtgElfRwV":
                throw new Error("Unsupported ELFs");
            default:
                throw new Error("Unrecognized Formula Token: " + String(S))
        }
        if (3 != a.biff && m >= 0 && -1 == ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"].indexOf(e[0][v][0])) {
            var k = !0;
            switch ((S = e[0][m])[1][0]) {
                case 4:
                    k = !1;
                case 0:
                    g = fe(" ", S[1][1]);
                    break;
                case 5:
                    k = !1;
                case 1:
                    g = fe("\r", S[1][1]);
                    break;
                default:
                    if (g = "", a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + S[1][0])
            }
            h.push((k ? g : "") + h.pop() + (k ? "" : g)), m = -1
        }
    }
    if (h.length > 1 && a.WTF) throw new Error("bad formula stack");
    return h[0]
}

function ks(e, t, r) {
    var n, a = e.l + t,
        i = 2 == r.biff ? 1 : 2,
        s = e.read_shift(i);
    if (65535 == s) return [
        [], Wt(e, t - 2)
    ];
    var o = As(e, s, r);
    return t !== s + i && (n = Ts(e, t - s - i, o, r)), e.l = a, [o, n]
}

function Fs(e, t, r) {
    var n, a = e.l + t,
        i = e.read_shift(2),
        s = As(e, i, r);
    return 65535 == i ? [
        [], Wt(e, t - 2)
    ] : (t !== i + 2 && (n = Ts(e, a - i - 2, s, r)), [s, n])
}

function Ns(e, t, r) {
    var n = e.l + t,
        a = Gn(e);
    2 == r.biff && ++e.l;
    var i = function(e) {
            var t;
            if (65535 !== Ot(e, e.l + 6)) return [Pr(e), "n"];
            switch (e[e.l]) {
                case 0:
                    return e.l += 8, ["String", "s"];
                case 1:
                    return t = 1 === e[e.l + 2], e.l += 8, [t, "b"];
                case 2:
                    return t = e[e.l + 2], e.l += 8, [t, "e"];
                case 3:
                    return e.l += 8, ["", "s"]
            }
            return []
        }(e),
        s = e.read_shift(1);
    2 != r.biff && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
    var o = function(e, t, r) {
        var n, a = e.l + t,
            i = 2 == r.biff ? 1 : 2,
            s = e.read_shift(i);
        if (65535 == s) return [
            [], Wt(e, t - 2)
        ];
        var o = As(e, s, r);
        return t !== s + i && (n = Ts(e, t - s - i, o, r)), e.l = a, [o, n]
    }(e, n - e.l, r);
    return {
        cell: a,
        val: i[0],
        formula: o,
        shared: s >> 3 & 1,
        tt: i[1]
    }
}

function Ms(e, t, r, n, a) {
    var i = jn(t, r, a),
        s = function(e) {
            if (null == e) {
                var t = Xt(8);
                return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t
            }
            return kr("number" == typeof e ? e : 0)
        }(e.v),
        o = Xt(6);
    o.write_shift(2, 33), o.write_shift(4, 0);
    for (var l = Xt(e.bf.length), c = 0; c < e.bf.length; ++c) l[c] = e.bf[c];
    return F([i, s, o, l])
}

function Ls(e, t, r) {
    var n = e.read_shift(4),
        a = As(e, n, r),
        i = e.read_shift(4);
    return [a, i > 0 ? Ts(e, i, a, r) : null]
}
var Us = Ls,
    Hs = Ls,
    Vs = Ls,
    Ws = Ls,
    Xs = {
        0: "BEEP",
        1: "OPEN",
        2: "OPEN.LINKS",
        3: "CLOSE.ALL",
        4: "SAVE",
        5: "SAVE.AS",
        6: "FILE.DELETE",
        7: "PAGE.SETUP",
        8: "PRINT",
        9: "PRINTER.SETUP",
        10: "QUIT",
        11: "NEW.WINDOW",
        12: "ARRANGE.ALL",
        13: "WINDOW.SIZE",
        14: "WINDOW.MOVE",
        15: "FULL",
        16: "CLOSE",
        17: "RUN",
        22: "SET.PRINT.AREA",
        23: "SET.PRINT.TITLES",
        24: "SET.PAGE.BREAK",
        25: "REMOVE.PAGE.BREAK",
        26: "FONT",
        27: "DISPLAY",
        28: "PROTECT.DOCUMENT",
        29: "PRECISION",
        30: "A1.R1C1",
        31: "CALCULATE.NOW",
        32: "CALCULATION",
        34: "DATA.FIND",
        35: "EXTRACT",
        36: "DATA.DELETE",
        37: "SET.DATABASE",
        38: "SET.CRITERIA",
        39: "SORT",
        40: "DATA.SERIES",
        41: "TABLE",
        42: "FORMAT.NUMBER",
        43: "ALIGNMENT",
        44: "STYLE",
        45: "BORDER",
        46: "CELL.PROTECTION",
        47: "COLUMN.WIDTH",
        48: "UNDO",
        49: "CUT",
        50: "COPY",
        51: "PASTE",
        52: "CLEAR",
        53: "PASTE.SPECIAL",
        54: "EDIT.DELETE",
        55: "INSERT",
        56: "FILL.RIGHT",
        57: "FILL.DOWN",
        61: "DEFINE.NAME",
        62: "CREATE.NAMES",
        63: "FORMULA.GOTO",
        64: "FORMULA.FIND",
        65: "SELECT.LAST.CELL",
        66: "SHOW.ACTIVE.CELL",
        67: "GALLERY.AREA",
        68: "GALLERY.BAR",
        69: "GALLERY.COLUMN",
        70: "GALLERY.LINE",
        71: "GALLERY.PIE",
        72: "GALLERY.SCATTER",
        73: "COMBINATION",
        74: "PREFERRED",
        75: "ADD.OVERLAY",
        76: "GRIDLINES",
        77: "SET.PREFERRED",
        78: "AXES",
        79: "LEGEND",
        80: "ATTACH.TEXT",
        81: "ADD.ARROW",
        82: "SELECT.CHART",
        83: "SELECT.PLOT.AREA",
        84: "PATTERNS",
        85: "MAIN.CHART",
        86: "OVERLAY",
        87: "SCALE",
        88: "FORMAT.LEGEND",
        89: "FORMAT.TEXT",
        90: "EDIT.REPEAT",
        91: "PARSE",
        92: "JUSTIFY",
        93: "HIDE",
        94: "UNHIDE",
        95: "WORKSPACE",
        96: "FORMULA",
        97: "FORMULA.FILL",
        98: "FORMULA.ARRAY",
        99: "DATA.FIND.NEXT",
        100: "DATA.FIND.PREV",
        101: "FORMULA.FIND.NEXT",
        102: "FORMULA.FIND.PREV",
        103: "ACTIVATE",
        104: "ACTIVATE.NEXT",
        105: "ACTIVATE.PREV",
        106: "UNLOCKED.NEXT",
        107: "UNLOCKED.PREV",
        108: "COPY.PICTURE",
        109: "SELECT",
        110: "DELETE.NAME",
        111: "DELETE.FORMAT",
        112: "VLINE",
        113: "HLINE",
        114: "VPAGE",
        115: "HPAGE",
        116: "VSCROLL",
        117: "HSCROLL",
        118: "ALERT",
        119: "NEW",
        120: "CANCEL.COPY",
        121: "SHOW.CLIPBOARD",
        122: "MESSAGE",
        124: "PASTE.LINK",
        125: "APP.ACTIVATE",
        126: "DELETE.ARROW",
        127: "ROW.HEIGHT",
        128: "FORMAT.MOVE",
        129: "FORMAT.SIZE",
        130: "FORMULA.REPLACE",
        131: "SEND.KEYS",
        132: "SELECT.SPECIAL",
        133: "APPLY.NAMES",
        134: "REPLACE.FONT",
        135: "FREEZE.PANES",
        136: "SHOW.INFO",
        137: "SPLIT",
        138: "ON.WINDOW",
        139: "ON.DATA",
        140: "DISABLE.INPUT",
        142: "OUTLINE",
        143: "LIST.NAMES",
        144: "FILE.CLOSE",
        145: "SAVE.WORKBOOK",
        146: "DATA.FORM",
        147: "COPY.CHART",
        148: "ON.TIME",
        149: "WAIT",
        150: "FORMAT.FONT",
        151: "FILL.UP",
        152: "FILL.LEFT",
        153: "DELETE.OVERLAY",
        155: "SHORT.MENUS",
        159: "SET.UPDATE.STATUS",
        161: "COLOR.PALETTE",
        162: "DELETE.STYLE",
        163: "WINDOW.RESTORE",
        164: "WINDOW.MAXIMIZE",
        166: "CHANGE.LINK",
        167: "CALCULATE.DOCUMENT",
        168: "ON.KEY",
        169: "APP.RESTORE",
        170: "APP.MOVE",
        171: "APP.SIZE",
        172: "APP.MINIMIZE",
        173: "APP.MAXIMIZE",
        174: "BRING.TO.FRONT",
        175: "SEND.TO.BACK",
        185: "MAIN.CHART.TYPE",
        186: "OVERLAY.CHART.TYPE",
        187: "SELECT.END",
        188: "OPEN.MAIL",
        189: "SEND.MAIL",
        190: "STANDARD.FONT",
        191: "CONSOLIDATE",
        192: "SORT.SPECIAL",
        193: "GALLERY.3D.AREA",
        194: "GALLERY.3D.COLUMN",
        195: "GALLERY.3D.LINE",
        196: "GALLERY.3D.PIE",
        197: "VIEW.3D",
        198: "GOAL.SEEK",
        199: "WORKGROUP",
        200: "FILL.GROUP",
        201: "UPDATE.LINK",
        202: "PROMOTE",
        203: "DEMOTE",
        204: "SHOW.DETAIL",
        206: "UNGROUP",
        207: "OBJECT.PROPERTIES",
        208: "SAVE.NEW.OBJECT",
        209: "SHARE",
        210: "SHARE.NAME",
        211: "DUPLICATE",
        212: "APPLY.STYLE",
        213: "ASSIGN.TO.OBJECT",
        214: "OBJECT.PROTECTION",
        215: "HIDE.OBJECT",
        216: "SET.EXTRACT",
        217: "CREATE.PUBLISHER",
        218: "SUBSCRIBE.TO",
        219: "ATTRIBUTES",
        220: "SHOW.TOOLBAR",
        222: "PRINT.PREVIEW",
        223: "EDIT.COLOR",
        224: "SHOW.LEVELS",
        225: "FORMAT.MAIN",
        226: "FORMAT.OVERLAY",
        227: "ON.RECALC",
        228: "EDIT.SERIES",
        229: "DEFINE.STYLE",
        240: "LINE.PRINT",
        243: "ENTER.DATA",
        249: "GALLERY.RADAR",
        250: "MERGE.STYLES",
        251: "EDITION.OPTIONS",
        252: "PASTE.PICTURE",
        253: "PASTE.PICTURE.LINK",
        254: "SPELLING",
        256: "ZOOM",
        259: "INSERT.OBJECT",
        260: "WINDOW.MINIMIZE",
        265: "SOUND.NOTE",
        266: "SOUND.PLAY",
        267: "FORMAT.SHAPE",
        268: "EXTEND.POLYGON",
        269: "FORMAT.AUTO",
        272: "GALLERY.3D.BAR",
        273: "GALLERY.3D.SURFACE",
        274: "FILL.AUTO",
        276: "CUSTOMIZE.TOOLBAR",
        277: "ADD.TOOL",
        278: "EDIT.OBJECT",
        279: "ON.DOUBLECLICK",
        280: "ON.ENTRY",
        281: "WORKBOOK.ADD",
        282: "WORKBOOK.MOVE",
        283: "WORKBOOK.COPY",
        284: "WORKBOOK.OPTIONS",
        285: "SAVE.WORKSPACE",
        288: "CHART.WIZARD",
        289: "DELETE.TOOL",
        290: "MOVE.TOOL",
        291: "WORKBOOK.SELECT",
        292: "WORKBOOK.ACTIVATE",
        293: "ASSIGN.TO.TOOL",
        295: "COPY.TOOL",
        296: "RESET.TOOL",
        297: "CONSTRAIN.NUMERIC",
        298: "PASTE.TOOL",
        302: "WORKBOOK.NEW",
        305: "SCENARIO.CELLS",
        306: "SCENARIO.DELETE",
        307: "SCENARIO.ADD",
        308: "SCENARIO.EDIT",
        309: "SCENARIO.SHOW",
        310: "SCENARIO.SHOW.NEXT",
        311: "SCENARIO.SUMMARY",
        312: "PIVOT.TABLE.WIZARD",
        313: "PIVOT.FIELD.PROPERTIES",
        314: "PIVOT.FIELD",
        315: "PIVOT.ITEM",
        316: "PIVOT.ADD.FIELDS",
        318: "OPTIONS.CALCULATION",
        319: "OPTIONS.EDIT",
        320: "OPTIONS.VIEW",
        321: "ADDIN.MANAGER",
        322: "MENU.EDITOR",
        323: "ATTACH.TOOLBARS",
        324: "VBAActivate",
        325: "OPTIONS.CHART",
        328: "VBA.INSERT.FILE",
        330: "VBA.PROCEDURE.DEFINITION",
        336: "ROUTING.SLIP",
        338: "ROUTE.DOCUMENT",
        339: "MAIL.LOGON",
        342: "INSERT.PICTURE",
        343: "EDIT.TOOL",
        344: "GALLERY.DOUGHNUT",
        350: "CHART.TREND",
        352: "PIVOT.ITEM.PROPERTIES",
        354: "WORKBOOK.INSERT",
        355: "OPTIONS.TRANSITION",
        356: "OPTIONS.GENERAL",
        370: "FILTER.ADVANCED",
        373: "MAIL.ADD.MAILER",
        374: "MAIL.DELETE.MAILER",
        375: "MAIL.REPLY",
        376: "MAIL.REPLY.ALL",
        377: "MAIL.FORWARD",
        378: "MAIL.NEXT.LETTER",
        379: "DATA.LABEL",
        380: "INSERT.TITLE",
        381: "FONT.PROPERTIES",
        382: "MACRO.OPTIONS",
        383: "WORKBOOK.HIDE",
        384: "WORKBOOK.UNHIDE",
        385: "WORKBOOK.DELETE",
        386: "WORKBOOK.NAME",
        388: "GALLERY.CUSTOM",
        390: "ADD.CHART.AUTOFORMAT",
        391: "DELETE.CHART.AUTOFORMAT",
        392: "CHART.ADD.DATA",
        393: "AUTO.OUTLINE",
        394: "TAB.ORDER",
        395: "SHOW.DIALOG",
        396: "SELECT.ALL",
        397: "UNGROUP.SHEETS",
        398: "SUBTOTAL.CREATE",
        399: "SUBTOTAL.REMOVE",
        400: "RENAME.OBJECT",
        412: "WORKBOOK.SCROLL",
        413: "WORKBOOK.NEXT",
        414: "WORKBOOK.PREV",
        415: "WORKBOOK.TAB.SPLIT",
        416: "FULL.SCREEN",
        417: "WORKBOOK.PROTECT",
        420: "SCROLLBAR.PROPERTIES",
        421: "PIVOT.SHOW.PAGES",
        422: "TEXT.TO.COLUMNS",
        423: "FORMAT.CHARTTYPE",
        424: "LINK.FORMAT",
        425: "TRACER.DISPLAY",
        430: "TRACER.NAVIGATE",
        431: "TRACER.CLEAR",
        432: "TRACER.ERROR",
        433: "PIVOT.FIELD.GROUP",
        434: "PIVOT.FIELD.UNGROUP",
        435: "CHECKBOX.PROPERTIES",
        436: "LABEL.PROPERTIES",
        437: "LISTBOX.PROPERTIES",
        438: "EDITBOX.PROPERTIES",
        439: "PIVOT.REFRESH",
        440: "LINK.COMBO",
        441: "OPEN.TEXT",
        442: "HIDE.DIALOG",
        443: "SET.DIALOG.FOCUS",
        444: "ENABLE.OBJECT",
        445: "PUSHBUTTON.PROPERTIES",
        446: "SET.DIALOG.DEFAULT",
        447: "FILTER",
        448: "FILTER.SHOW.ALL",
        449: "CLEAR.OUTLINE",
        450: "FUNCTION.WIZARD",
        451: "ADD.LIST.ITEM",
        452: "SET.LIST.ITEM",
        453: "REMOVE.LIST.ITEM",
        454: "SELECT.LIST.ITEM",
        455: "SET.CONTROL.VALUE",
        456: "SAVE.COPY.AS",
        458: "OPTIONS.LISTS.ADD",
        459: "OPTIONS.LISTS.DELETE",
        460: "SERIES.AXES",
        461: "SERIES.X",
        462: "SERIES.Y",
        463: "ERRORBAR.X",
        464: "ERRORBAR.Y",
        465: "FORMAT.CHART",
        466: "SERIES.ORDER",
        467: "MAIL.LOGOFF",
        468: "CLEAR.ROUTING.SLIP",
        469: "APP.ACTIVATE.MICROSOFT",
        470: "MAIL.EDIT.MAILER",
        471: "ON.SHEET",
        472: "STANDARD.WIDTH",
        473: "SCENARIO.MERGE",
        474: "SUMMARY.INFO",
        475: "FIND.FILE",
        476: "ACTIVE.CELL.FONT",
        477: "ENABLE.TIPWIZARD",
        478: "VBA.MAKE.ADDIN",
        480: "INSERTDATATABLE",
        481: "WORKGROUP.OPTIONS",
        482: "MAIL.SEND.MAILER",
        485: "AUTOCORRECT",
        489: "POST.DOCUMENT",
        491: "PICKLIST",
        493: "VIEW.SHOW",
        494: "VIEW.DEFINE",
        495: "VIEW.DELETE",
        509: "SHEET.BACKGROUND",
        510: "INSERT.MAP.OBJECT",
        511: "OPTIONS.MENONO",
        517: "MSOCHECKS",
        518: "NORMAL",
        519: "LAYOUT",
        520: "RM.PRINT.AREA",
        521: "CLEAR.PRINT.AREA",
        522: "ADD.PRINT.AREA",
        523: "MOVE.BRK",
        545: "HIDECURR.NOTE",
        546: "HIDEALL.NOTES",
        547: "DELETE.NOTE",
        548: "TRAVERSE.NOTES",
        549: "ACTIVATE.NOTES",
        620: "PROTECT.REVISIONS",
        621: "UNPROTECT.REVISIONS",
        647: "OPTIONS.ME",
        653: "WEB.PUBLISH",
        667: "NEWWEBQUERY",
        673: "PIVOT.TABLE.CHART",
        753: "OPTIONS.SAVE",
        755: "OPTIONS.SPELL",
        808: "HIDEALL.INKANNOTS"
    },
    Gs = {
        0: "COUNT",
        1: "IF",
        2: "ISNA",
        3: "ISERROR",
        4: "SUM",
        5: "AVERAGE",
        6: "MIN",
        7: "MAX",
        8: "ROW",
        9: "COLUMN",
        10: "NA",
        11: "NPV",
        12: "STDEV",
        13: "DOLLAR",
        14: "FIXED",
        15: "SIN",
        16: "COS",
        17: "TAN",
        18: "ATAN",
        19: "PI",
        20: "SQRT",
        21: "EXP",
        22: "LN",
        23: "LOG10",
        24: "ABS",
        25: "INT",
        26: "SIGN",
        27: "ROUND",
        28: "LOOKUP",
        29: "INDEX",
        30: "REPT",
        31: "MID",
        32: "LEN",
        33: "VALUE",
        34: "TRUE",
        35: "FALSE",
        36: "AND",
        37: "OR",
        38: "NOT",
        39: "MOD",
        40: "DCOUNT",
        41: "DSUM",
        42: "DAVERAGE",
        43: "DMIN",
        44: "DMAX",
        45: "DSTDEV",
        46: "VAR",
        47: "DVAR",
        48: "TEXT",
        49: "LINEST",
        50: "TREND",
        51: "LOGEST",
        52: "GROWTH",
        53: "GOTO",
        54: "HALT",
        55: "RETURN",
        56: "PV",
        57: "FV",
        58: "NPER",
        59: "PMT",
        60: "RATE",
        61: "MIRR",
        62: "IRR",
        63: "RAND",
        64: "MATCH",
        65: "DATE",
        66: "TIME",
        67: "DAY",
        68: "MONTH",
        69: "YEAR",
        70: "WEEKDAY",
        71: "HOUR",
        72: "MINUTE",
        73: "SECOND",
        74: "NOW",
        75: "AREAS",
        76: "ROWS",
        77: "COLUMNS",
        78: "OFFSET",
        79: "ABSREF",
        80: "RELREF",
        81: "ARGUMENT",
        82: "SEARCH",
        83: "TRANSPOSE",
        84: "ERROR",
        85: "STEP",
        86: "TYPE",
        87: "ECHO",
        88: "SET.NAME",
        89: "CALLER",
        90: "DEREF",
        91: "WINDOWS",
        92: "SERIES",
        93: "DOCUMENTS",
        94: "ACTIVE.CELL",
        95: "SELECTION",
        96: "RESULT",
        97: "ATAN2",
        98: "ASIN",
        99: "ACOS",
        100: "CHOOSE",
        101: "HLOOKUP",
        102: "VLOOKUP",
        103: "LINKS",
        104: "INPUT",
        105: "ISREF",
        106: "GET.FORMULA",
        107: "GET.NAME",
        108: "SET.VALUE",
        109: "LOG",
        110: "EXEC",
        111: "CHAR",
        112: "LOWER",
        113: "UPPER",
        114: "PROPER",
        115: "LEFT",
        116: "RIGHT",
        117: "EXACT",
        118: "TRIM",
        119: "REPLACE",
        120: "SUBSTITUTE",
        121: "CODE",
        122: "NAMES",
        123: "DIRECTORY",
        124: "FIND",
        125: "CELL",
        126: "ISERR",
        127: "ISTEXT",
        128: "ISNUMBER",
        129: "ISBLANK",
        130: "T",
        131: "N",
        132: "FOPEN",
        133: "FCLOSE",
        134: "FSIZE",
        135: "FREADLN",
        136: "FREAD",
        137: "FWRITELN",
        138: "FWRITE",
        139: "FPOS",
        140: "DATEVALUE",
        141: "TIMEVALUE",
        142: "SLN",
        143: "SYD",
        144: "DDB",
        145: "GET.DEF",
        146: "REFTEXT",
        147: "TEXTREF",
        148: "INDIRECT",
        149: "REGISTER",
        150: "CALL",
        151: "ADD.BAR",
        152: "ADD.MENU",
        153: "ADD.COMMAND",
        154: "ENABLE.COMMAND",
        155: "CHECK.COMMAND",
        156: "RENAME.COMMAND",
        157: "SHOW.BAR",
        158: "DELETE.MENU",
        159: "DELETE.COMMAND",
        160: "GET.CHART.ITEM",
        161: "DIALOG.BOX",
        162: "CLEAN",
        163: "MDETERM",
        164: "MINVERSE",
        165: "MMULT",
        166: "FILES",
        167: "IPMT",
        168: "PPMT",
        169: "COUNTA",
        170: "CANCEL.KEY",
        171: "FOR",
        172: "WHILE",
        173: "BREAK",
        174: "NEXT",
        175: "INITIATE",
        176: "REQUEST",
        177: "POKE",
        178: "EXECUTE",
        179: "TERMINATE",
        180: "RESTART",
        181: "HELP",
        182: "GET.BAR",
        183: "PRODUCT",
        184: "FACT",
        185: "GET.CELL",
        186: "GET.WORKSPACE",
        187: "GET.WINDOW",
        188: "GET.DOCUMENT",
        189: "DPRODUCT",
        190: "ISNONTEXT",
        191: "GET.NOTE",
        192: "NOTE",
        193: "STDEVP",
        194: "VARP",
        195: "DSTDEVP",
        196: "DVARP",
        197: "TRUNC",
        198: "ISLOGICAL",
        199: "DCOUNTA",
        200: "DELETE.BAR",
        201: "UNREGISTER",
        204: "USDOLLAR",
        205: "FINDB",
        206: "SEARCHB",
        207: "REPLACEB",
        208: "LEFTB",
        209: "RIGHTB",
        210: "MIDB",
        211: "LENB",
        212: "ROUNDUP",
        213: "ROUNDDOWN",
        214: "ASC",
        215: "DBCS",
        216: "RANK",
        219: "ADDRESS",
        220: "DAYS360",
        221: "TODAY",
        222: "VDB",
        223: "ELSE",
        224: "ELSE.IF",
        225: "END.IF",
        226: "FOR.CELL",
        227: "MEDIAN",
        228: "SUMPRODUCT",
        229: "SINH",
        230: "COSH",
        231: "TANH",
        232: "ASINH",
        233: "ACOSH",
        234: "ATANH",
        235: "DGET",
        236: "CREATE.OBJECT",
        237: "VOLATILE",
        238: "LAST.ERROR",
        239: "CUSTOM.UNDO",
        240: "CUSTOM.REPEAT",
        241: "FORMULA.CONVERT",
        242: "GET.LINK.INFO",
        243: "TEXT.BOX",
        244: "INFO",
        245: "GROUP",
        246: "GET.OBJECT",
        247: "DB",
        248: "PAUSE",
        251: "RESUME",
        252: "FREQUENCY",
        253: "ADD.TOOLBAR",
        254: "DELETE.TOOLBAR",
        255: "User",
        256: "RESET.TOOLBAR",
        257: "EVALUATE",
        258: "GET.TOOLBAR",
        259: "GET.TOOL",
        260: "SPELLING.CHECK",
        261: "ERROR.TYPE",
        262: "APP.TITLE",
        263: "WINDOW.TITLE",
        264: "SAVE.TOOLBAR",
        265: "ENABLE.TOOL",
        266: "PRESS.TOOL",
        267: "REGISTER.ID",
        268: "GET.WORKBOOK",
        269: "AVEDEV",
        270: "BETADIST",
        271: "GAMMALN",
        272: "BETAINV",
        273: "BINOMDIST",
        274: "CHIDIST",
        275: "CHIINV",
        276: "COMBIN",
        277: "CONFIDENCE",
        278: "CRITBINOM",
        279: "EVEN",
        280: "EXPONDIST",
        281: "FDIST",
        282: "FINV",
        283: "FISHER",
        284: "FISHERINV",
        285: "FLOOR",
        286: "GAMMADIST",
        287: "GAMMAINV",
        288: "CEILING",
        289: "HYPGEOMDIST",
        290: "LOGNORMDIST",
        291: "LOGINV",
        292: "NEGBINOMDIST",
        293: "NORMDIST",
        294: "NORMSDIST",
        295: "NORMINV",
        296: "NORMSINV",
        297: "STANDARDIZE",
        298: "ODD",
        299: "PERMUT",
        300: "POISSON",
        301: "TDIST",
        302: "WEIBULL",
        303: "SUMXMY2",
        304: "SUMX2MY2",
        305: "SUMX2PY2",
        306: "CHITEST",
        307: "CORREL",
        308: "COVAR",
        309: "FORECAST",
        310: "FTEST",
        311: "INTERCEPT",
        312: "PEARSON",
        313: "RSQ",
        314: "STEYX",
        315: "SLOPE",
        316: "TTEST",
        317: "PROB",
        318: "DEVSQ",
        319: "GEOMEAN",
        320: "HARMEAN",
        321: "SUMSQ",
        322: "KURT",
        323: "SKEW",
        324: "ZTEST",
        325: "LARGE",
        326: "SMALL",
        327: "QUARTILE",
        328: "PERCENTILE",
        329: "PERCENTRANK",
        330: "MODE",
        331: "TRIMMEAN",
        332: "TINV",
        334: "MOVIE.COMMAND",
        335: "GET.MOVIE",
        336: "CONCATENATE",
        337: "POWER",
        338: "PIVOT.ADD.DATA",
        339: "GET.PIVOT.TABLE",
        340: "GET.PIVOT.FIELD",
        341: "GET.PIVOT.ITEM",
        342: "RADIANS",
        343: "DEGREES",
        344: "SUBTOTAL",
        345: "SUMIF",
        346: "COUNTIF",
        347: "COUNTBLANK",
        348: "SCENARIO.GET",
        349: "OPTIONS.LISTS.GET",
        350: "ISPMT",
        351: "DATEDIF",
        352: "DATESTRING",
        353: "NUMBERSTRING",
        354: "ROMAN",
        355: "OPEN.DIALOG",
        356: "SAVE.DIALOG",
        357: "VIEW.GET",
        358: "GETPIVOTDATA",
        359: "HYPERLINK",
        360: "PHONETIC",
        361: "AVERAGEA",
        362: "MAXA",
        363: "MINA",
        364: "STDEVPA",
        365: "VARPA",
        366: "STDEVA",
        367: "VARA",
        368: "BAHTTEXT",
        369: "THAIDAYOFWEEK",
        370: "THAIDIGIT",
        371: "THAIMONTHOFYEAR",
        372: "THAINUMSOUND",
        373: "THAINUMSTRING",
        374: "THAISTRINGLENGTH",
        375: "ISTHAIDIGIT",
        376: "ROUNDBAHTDOWN",
        377: "ROUNDBAHTUP",
        378: "THAIYEAR",
        379: "RTD",
        380: "CUBEVALUE",
        381: "CUBEMEMBER",
        382: "CUBEMEMBERPROPERTY",
        383: "CUBERANKEDMEMBER",
        384: "HEX2BIN",
        385: "HEX2DEC",
        386: "HEX2OCT",
        387: "DEC2BIN",
        388: "DEC2HEX",
        389: "DEC2OCT",
        390: "OCT2BIN",
        391: "OCT2HEX",
        392: "OCT2DEC",
        393: "BIN2DEC",
        394: "BIN2OCT",
        395: "BIN2HEX",
        396: "IMSUB",
        397: "IMDIV",
        398: "IMPOWER",
        399: "IMABS",
        400: "IMSQRT",
        401: "IMLN",
        402: "IMLOG2",
        403: "IMLOG10",
        404: "IMSIN",
        405: "IMCOS",
        406: "IMEXP",
        407: "IMARGUMENT",
        408: "IMCONJUGATE",
        409: "IMAGINARY",
        410: "IMREAL",
        411: "COMPLEX",
        412: "IMSUM",
        413: "IMPRODUCT",
        414: "SERIESSUM",
        415: "FACTDOUBLE",
        416: "SQRTPI",
        417: "QUOTIENT",
        418: "DELTA",
        419: "GESTEP",
        420: "ISEVEN",
        421: "ISODD",
        422: "MROUND",
        423: "ERF",
        424: "ERFC",
        425: "BESSELJ",
        426: "BESSELK",
        427: "BESSELY",
        428: "BESSELI",
        429: "XIRR",
        430: "XNPV",
        431: "PRICEMAT",
        432: "YIELDMAT",
        433: "INTRATE",
        434: "RECEIVED",
        435: "DISC",
        436: "PRICEDISC",
        437: "YIELDDISC",
        438: "TBILLEQ",
        439: "TBILLPRICE",
        440: "TBILLYIELD",
        441: "PRICE",
        442: "YIELD",
        443: "DOLLARDE",
        444: "DOLLARFR",
        445: "NOMINAL",
        446: "EFFECT",
        447: "CUMPRINC",
        448: "CUMIPMT",
        449: "EDATE",
        450: "EOMONTH",
        451: "YEARFRAC",
        452: "COUPDAYBS",
        453: "COUPDAYS",
        454: "COUPDAYSNC",
        455: "COUPNCD",
        456: "COUPNUM",
        457: "COUPPCD",
        458: "DURATION",
        459: "MDURATION",
        460: "ODDLPRICE",
        461: "ODDLYIELD",
        462: "ODDFPRICE",
        463: "ODDFYIELD",
        464: "RANDBETWEEN",
        465: "WEEKNUM",
        466: "AMORDEGRC",
        467: "AMORLINC",
        468: "CONVERT",
        724: "SHEETJS",
        469: "ACCRINT",
        470: "ACCRINTM",
        471: "WORKDAY",
        472: "NETWORKDAYS",
        473: "GCD",
        474: "MULTINOMIAL",
        475: "LCM",
        476: "FVSCHEDULE",
        477: "CUBEKPIMEMBER",
        478: "CUBESET",
        479: "CUBESETCOUNT",
        480: "IFERROR",
        481: "COUNTIFS",
        482: "SUMIFS",
        483: "AVERAGEIF",
        484: "AVERAGEIFS"
    },
    js = {
        2: 1,
        3: 1,
        10: 0,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 0,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 2,
        30: 2,
        31: 3,
        32: 1,
        33: 1,
        34: 0,
        35: 0,
        38: 1,
        39: 2,
        40: 3,
        41: 3,
        42: 3,
        43: 3,
        44: 3,
        45: 3,
        47: 3,
        48: 2,
        53: 1,
        61: 3,
        63: 0,
        65: 3,
        66: 3,
        67: 1,
        68: 1,
        69: 1,
        70: 1,
        71: 1,
        72: 1,
        73: 1,
        74: 0,
        75: 1,
        76: 1,
        77: 1,
        79: 2,
        80: 2,
        83: 1,
        85: 0,
        86: 1,
        89: 0,
        90: 1,
        94: 0,
        95: 0,
        97: 2,
        98: 1,
        99: 1,
        101: 3,
        102: 3,
        105: 1,
        106: 1,
        108: 2,
        111: 1,
        112: 1,
        113: 1,
        114: 1,
        117: 2,
        118: 1,
        119: 4,
        121: 1,
        126: 1,
        127: 1,
        128: 1,
        129: 1,
        130: 1,
        131: 1,
        133: 1,
        134: 1,
        135: 1,
        136: 2,
        137: 2,
        138: 2,
        140: 1,
        141: 1,
        142: 3,
        143: 4,
        144: 4,
        161: 1,
        162: 1,
        163: 1,
        164: 1,
        165: 2,
        172: 1,
        175: 2,
        176: 2,
        177: 3,
        178: 2,
        179: 1,
        184: 1,
        186: 1,
        189: 3,
        190: 1,
        195: 3,
        196: 3,
        197: 1,
        198: 1,
        199: 3,
        201: 1,
        207: 4,
        210: 3,
        211: 1,
        212: 2,
        213: 2,
        214: 1,
        215: 1,
        225: 0,
        229: 1,
        230: 1,
        231: 1,
        232: 1,
        233: 1,
        234: 1,
        235: 3,
        244: 1,
        247: 4,
        252: 2,
        257: 1,
        261: 1,
        271: 1,
        273: 4,
        274: 2,
        275: 2,
        276: 2,
        277: 3,
        278: 3,
        279: 1,
        280: 3,
        281: 3,
        282: 3,
        283: 1,
        284: 1,
        285: 2,
        286: 4,
        287: 3,
        288: 2,
        289: 4,
        290: 3,
        291: 3,
        292: 3,
        293: 4,
        294: 1,
        295: 3,
        296: 1,
        297: 3,
        298: 1,
        299: 2,
        300: 3,
        301: 3,
        302: 4,
        303: 2,
        304: 2,
        305: 2,
        306: 2,
        307: 2,
        308: 2,
        309: 3,
        310: 2,
        311: 2,
        312: 2,
        313: 2,
        314: 2,
        315: 2,
        316: 4,
        325: 2,
        326: 2,
        327: 2,
        328: 2,
        331: 2,
        332: 2,
        337: 2,
        342: 1,
        343: 1,
        346: 2,
        347: 1,
        350: 4,
        351: 3,
        352: 1,
        353: 2,
        360: 1,
        368: 1,
        369: 1,
        370: 1,
        371: 1,
        372: 1,
        373: 1,
        374: 1,
        375: 1,
        376: 1,
        377: 1,
        378: 1,
        382: 3,
        385: 1,
        392: 1,
        393: 1,
        396: 2,
        397: 2,
        398: 2,
        399: 1,
        400: 1,
        401: 1,
        402: 1,
        403: 1,
        404: 1,
        405: 1,
        406: 1,
        407: 1,
        408: 1,
        409: 1,
        410: 1,
        414: 4,
        415: 1,
        416: 1,
        417: 2,
        420: 1,
        421: 1,
        422: 2,
        424: 1,
        425: 2,
        426: 2,
        427: 2,
        428: 2,
        430: 3,
        438: 3,
        439: 3,
        440: 3,
        443: 2,
        444: 2,
        445: 2,
        446: 2,
        447: 6,
        448: 6,
        449: 2,
        450: 2,
        464: 2,
        468: 3,
        476: 2,
        479: 1,
        480: 2,
        65535: 0
    };

function $s(e) {
    return "of:" == e.slice(0, 3) && (e = e.slice(3)), 61 == e.charCodeAt(0) && 61 == (e = e.slice(1)).charCodeAt(0) && (e = e.slice(1)), (e = (e = (e = e.replace(/COM\.MICROSOFT\./g, "")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, (function(e, t) {
        return t.replace(/\./g, "")
    }))).replace(/\[.(#[A-Z]*[?!])\]/g, "$1")).replace(/[;~]/g, ",").replace(/\|/g, ";")
}

function zs(e) {
    var t = e.split(":");
    return [t[0].split(".")[0], t[0].split(".")[1] + (t.length > 1 ? ":" + (t[1].split(".")[1] || t[1].split(".")[0]) : "")]
}
var Ys = {},
    Ks = {};
Qr.WS = ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"];
var Js = "undefined" != typeof Map;

function qs(e, t, r) {
    var n = 0,
        a = e.length;
    if (r) {
        if (Js ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t))
            for (var i = Js ? r.get(t) : r[t]; n < i.length; ++n)
                if (e[i[n]].t === t) return e.Count++, i[n]
    } else
        for (; n < a; ++n)
            if (e[n].t === t) return e.Count++, n;
    return e[a] = {
        t: t
    }, e.Count++, e.Unique++, r && (Js ? (r.has(t) || r.set(t, []), r.get(t).push(a)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(a))), a
}

function Qs(e, t) {
    var r = {
            min: e + 1,
            max: e + 1
        },
        n = -1;
    return t.MDW && (ei = t.MDW), null != t.width ? r.customWidth = 1 : null != t.wpx ? n = ri(t.wpx) : null != t.wch && (n = t.wch), n > -1 ? (r.width = ni(n), r.customWidth = 1) : null != t.width && (r.width = t.width), t.hidden && (r.hidden = !0), null != t.level && (r.outlineLevel = r.level = t.level), r
}

function Zs(e, t) {
    if (e) {
        var r = [.7, .7, .75, .75, .3, .3];
        "xlml" == t && (r = [1, 1, 1, 1, .5, .5]), null == e.left && (e.left = r[0]), null == e.right && (e.right = r[1]), null == e.top && (e.top = r[2]), null == e.bottom && (e.bottom = r[3]), null == e.header && (e.header = r[4]), null == e.footer && (e.footer = r[5])
    }
}

function eo(e, t, r) {
    var n = r.revssf[null != t.z ? t.z : "General"],
        a = 60,
        i = e.length;
    if (null == n && r.ssf)
        for (; a < 392; ++a)
            if (null == r.ssf[a]) {
                L.load(t.z, a), r.ssf[a] = t.z, r.revssf[t.z] = n = a;
                break
            } for (a = 0; a != i; ++a)
        if (e[a].numFmtId === n) return a;
    return e[i] = {
        numFmtId: n,
        fontId: 0,
        fillId: 0,
        borderId: 0,
        xfId: 0,
        applyNumberFormat: 1
    }, i
}

function to(e, t, r, n, a, i) {
    try {
        n.cellNF && (e.z = L._table[t])
    } catch (e) {
        if (n.WTF) throw e
    }
    if ("z" !== e.t || n.cellStyles) {
        if ("d" === e.t && "string" == typeof e.v && (e.v = oe(e.v)), (!n || !1 !== n.cellText) && "z" !== e.t) try {
            if (null == L._table[t] && L.load(H[t] || "General", t), "e" === e.t) e.w = e.w || Gr[e.v];
            else if (0 === t)
                if ("n" === e.t)(0 | e.v) === e.v ? e.w = L._general_int(e.v) : e.w = L._general_num(e.v);
                else if ("d" === e.t) {
                var s = Z(e.v);
                e.w = (0 | s) === s ? L._general_int(s) : L._general_num(s)
            } else {
                if (void 0 === e.v) return "";
                e.w = L._general(e.v, Ks)
            } else "d" === e.t ? e.w = L.format(t, Z(e.v), Ks) : e.w = L.format(t, e.v, Ks)
        } catch (e) {
            if (n.WTF) throw e
        }
        if (n.cellStyles && null != r) try {
            e.s = i.Fills[r], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = Za(a.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), n.WTF && (e.s.fgColor.raw_rgb = a.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = Za(a.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), n.WTF && (e.s.bgColor.raw_rgb = a.themeElements.clrScheme[e.s.bgColor.theme].rgb))
        } catch (e) {
            if (n.WTF && i.Fills) throw e
        }
    }
}

function ro(e, t, r) {
    if (e && e["!ref"]) {
        var n = ar(e["!ref"]);
        if (n.e.c < n.s.c || n.e.r < n.s.r) throw new Error("Bad range (" + r + "): " + e["!ref"])
    }
}
var no = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"],
    ao = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];

function io(e, t, r, n) {
    if (void 0 === e.v && "string" != typeof e.f || "z" === e.t) return "";
    var a = "",
        i = e.t,
        s = e.v;
    if ("z" !== e.t) switch (e.t) {
        case "b":
            a = e.v ? "1" : "0";
            break;
        case "n":
            a = "" + e.v;
            break;
        case "e":
            a = Gr[e.v];
            break;
        case "d":
            n && n.cellDates ? a = oe(e.v, -1).toISOString() : ((e = ce(e)).t = "n", a = "" + (e.v = Z(oe(e.v)))), void 0 === e.z && (e.z = L._table[14]);
            break;
        default:
            a = e.v
    }
    var o = qe("v", Fe(a)),
        l = {
            r: t
        },
        c = eo(n.cellXfs, e, n);
    switch (0 !== c && (l.s = c), e.t) {
        case "n":
        case "z":
            break;
        case "d":
            l.t = "d";
            break;
        case "b":
            l.t = "b";
            break;
        case "e":
            l.t = "e";
            break;
        default:
            if (null == e.v) {
                delete e.t;
                break
            }
            if (e.v.length > 32767) throw new Error("Text length must not exceed 32767 characters");
            if (n && n.bookSST) {
                o = qe("v", "" + qs(n.Strings, e.v, n.revStrings)), l.t = "s";
                break
            }
            l.t = "str"
    }
    if (e.t != i && (e.t = i, e.v = s), "string" == typeof e.f && e.f) {
        var f = e.F && e.F.slice(0, t.length) == t ? {
            t: "array",
            ref: e.F
        } : null;
        o = Ze("f", Fe(e.f), f) + (null != e.v ? o : "")
    }
    return e.l && r["!links"].push([t, e.l]), e.c && r["!comments"].push([t, e.c]), Ze("c", o, l)
}
var so, oo, lo, co, fo, ho, uo;
so = /<(?:\w+:)?c[ \/>]/, oo = /<\/(?:\w+:)?row>/, lo = /r=["']([^"']*)["']/, co = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, fo = /ref=["']([^"']*)["']/, ho = Ye("v"), uo = Ye("f");
var po = Ze("worksheet", null, {
    xmlns: tt.main[0],
    "xmlns:r": tt.r
});

function mo(e, t, r, n) {
    var a, i = [Be, po],
        s = r.SheetNames[e],
        o = "",
        l = r.Sheets[s];
    null == l && (l = {});
    var c = l["!ref"] || "A1",
        f = ar(c);
    if (f.e.c > 16383 || f.e.r > 1048575) {
        if (t.WTF) throw new Error("Range " + c + " exceeds format limit A1:XFD1048576");
        f.e.c = Math.min(f.e.c, 16383), f.e.r = Math.min(f.e.c, 1048575), c = nr(f)
    }
    n || (n = {}), l["!comments"] = [];
    var h = [];
    ! function(e, t, r, n, a) {
        var i = !1,
            s = {},
            o = null;
        if ("xlsx" !== n.bookType && t.vbaraw) {
            var l = t.SheetNames[r];
            try {
                t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l)
            } catch (e) {}
            i = !0, s.codeName = We(Fe(l))
        }
        if (e && e["!outline"]) {
            var c = {
                summaryBelow: 1,
                summaryRight: 1
            };
            e["!outline"].above && (c.summaryBelow = 0), e["!outline"].left && (c.summaryRight = 0), o = (o || "") + Ze("outlinePr", null, c)
        }(i || o) && (a[a.length] = Ze("sheetPr", o, s))
    }(l, r, e, t, i), i[i.length] = Ze("dimension", null, {
        ref: c
    }), i[i.length] = function(e, t, r, n) {
        var a = {
            workbookViewId: "0"
        };
        return (((n || {}).Workbook || {}).Views || [])[0] && (a.rightToLeft = n.Workbook.Views[0].RTL ? "1" : "0"), Ze("sheetViews", Ze("sheetView", null, a), {})
    }(0, 0, 0, r), t.sheetFormat && (i[i.length] = Ze("sheetFormatPr", null, {
        defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
        baseColWidth: t.sheetFormat.baseColWidth || "10",
        outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
    })), null != l["!cols"] && l["!cols"].length > 0 && (i[i.length] = function(e, t) {
        for (var r, n = ["<cols>"], a = 0; a != t.length; ++a)(r = t[a]) && (n[n.length] = Ze("col", null, Qs(a, r)));
        return n[n.length] = "</cols>", n.join("")
    }(0, l["!cols"])), i[a = i.length] = "<sheetData/>", l["!links"] = [], null != l["!ref"] && (o = function(e, t, r, n) {
        var a, i, s = [],
            o = [],
            l = ar(e["!ref"]),
            c = "",
            f = "",
            h = [],
            u = 0,
            d = 0,
            p = e["!rows"],
            m = Array.isArray(e),
            g = {
                r: f
            },
            v = -1;
        for (d = l.s.c; d <= l.e.c; ++d) h[d] = Zt(d);
        for (u = l.s.r; u <= l.e.r; ++u) {
            for (o = [], f = qt(u), d = l.s.c; d <= l.e.c; ++d) {
                a = h[d] + f;
                var E = m ? (e[u] || [])[d] : e[a];
                void 0 !== E && null != (c = io(E, a, e, t)) && o.push(c)
            }(o.length > 0 || p && p[u]) && (g = {
                r: f
            }, p && p[u] && ((i = p[u]).hidden && (g.hidden = 1), v = -1, i.hpx ? v = ii(i.hpx) : i.hpt && (v = i.hpt), v > -1 && (g.ht = v, g.customHeight = 1), i.level && (g.outlineLevel = i.level)), s[s.length] = Ze("row", o.join(""), g))
        }
        if (p)
            for (; u < p.length; ++u) p && p[u] && (g = {
                r: u + 1
            }, (i = p[u]).hidden && (g.hidden = 1), v = -1, i.hpx ? v = ii(i.hpx) : i.hpt && (v = i.hpt), v > -1 && (g.ht = v, g.customHeight = 1), i.level && (g.outlineLevel = i.level), s[s.length] = Ze("row", "", g));
        return s.join("")
    }(l, t, 0, 0), o.length > 0 && (i[i.length] = o)), i.length > a + 1 && (i[i.length] = "</sheetData>", i[a] = i[a].replace("/>", ">")), l["!protect"] && (i[i.length] = function(e) {
        var t = {
            sheet: 1
        };
        return no.forEach((function(r) {
            null != e[r] && e[r] && (t[r] = "1")
        })), ao.forEach((function(r) {
            null == e[r] || e[r] || (t[r] = "0")
        })), e.password && (t.password = Xa(e.password).toString(16).toUpperCase()), Ze("sheetProtection", null, t)
    }(l["!protect"])), null != l["!autofilter"] && (i[i.length] = function(e, t, r, n) {
        var a = "string" == typeof e.ref ? e.ref : nr(e.ref);
        r.Workbook || (r.Workbook = {
            Sheets: []
        }), r.Workbook.Names || (r.Workbook.Names = []);
        var i = r.Workbook.Names,
            s = rr(a);
        s.s.r == s.e.r && (s.e.r = rr(t["!ref"]).e.r, a = nr(s));
        for (var o = 0; o < i.length; ++o) {
            var l = i[o];
            if ("_xlnm._FilterDatabase" == l.Name && l.Sheet == n) {
                l.Ref = "'" + r.SheetNames[n] + "'!" + a;
                break
            }
        }
        return o == i.length && i.push({
            Name: "_xlnm._FilterDatabase",
            Sheet: n,
            Ref: "'" + r.SheetNames[n] + "'!" + a
        }), Ze("autoFilter", null, {
            ref: a
        })
    }(l["!autofilter"], l, r, e)), null != l["!merges"] && l["!merges"].length > 0 && (i[i.length] = function(e) {
        if (0 === e.length) return "";
        for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r) t += '<mergeCell ref="' + nr(e[r]) + '"/>';
        return t + "</mergeCells>"
    }(l["!merges"]));
    var u, d, p = -1,
        m = -1;
    return l["!links"].length > 0 && (i[i.length] = "<hyperlinks>", l["!links"].forEach((function(e) {
        e[1].Target && (u = {
            ref: e[0]
        }, "#" != e[1].Target.charAt(0) && (m = nn(n, -1, Fe(e[1].Target).replace(/#.*$/, ""), Qr.HLINK), u["r:id"] = "rId" + m), (p = e[1].Target.indexOf("#")) > -1 && (u.location = Fe(e[1].Target.slice(p + 1))), e[1].Tooltip && (u.tooltip = Fe(e[1].Tooltip)), i[i.length] = Ze("hyperlink", null, u))
    })), i[i.length] = "</hyperlinks>"), delete l["!links"], null != l["!margins"] && (i[i.length] = (Zs(d = l["!margins"]), Ze("pageMargins", null, d))), t && !t.ignoreEC && null != t.ignoreEC || (i[i.length] = qe("ignoredErrors", Ze("ignoredError", null, {
        numberStoredAsText: 1,
        sqref: c
    }))), h.length > 0 && (m = nn(n, -1, "../drawings/drawing" + (e + 1) + ".xml", Qr.DRAW), i[i.length] = Ze("drawing", null, {
        "r:id": "rId" + m
    }), l["!drawing"] = h), l["!comments"].length > 0 && (m = nn(n, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Qr.VML), i[i.length] = Ze("legacyDrawing", null, {
        "r:id": "rId" + m
    }), l["!legacy"] = m), i.length > 1 && (i[i.length] = "</worksheet>", i[1] = i[1].replace("/>", ">")), i.join("")
}

function go(e, t, r, n) {
    var a = function(e, t, r) {
        var n = Xt(145),
            a = (r["!rows"] || [])[e] || {};
        n.write_shift(4, e), n.write_shift(4, 0);
        var i = 320;
        a.hpx ? i = 20 * ii(a.hpx) : a.hpt && (i = 20 * a.hpt), n.write_shift(2, i), n.write_shift(1, 0);
        var s = 0;
        a.level && (s |= a.level), a.hidden && (s |= 16), (a.hpx || a.hpt) && (s |= 32), n.write_shift(1, s), n.write_shift(1, 0);
        var o = 0,
            l = n.l;
        n.l += 4;
        for (var c = {
                r: e,
                c: 0
            }, f = 0; f < 16; ++f)
            if (!(t.s.c > f + 1 << 10 || t.e.c < f << 10)) {
                for (var h = -1, u = -1, d = f << 10; d < f + 1 << 10; ++d) c.c = d, (Array.isArray(r) ? (r[c.r] || [])[c.c] : r[tr(c)]) && (h < 0 && (h = d), u = d);
                h < 0 || (++o, n.write_shift(4, h), n.write_shift(4, u))
            } var p = n.l;
        return n.l = l, n.write_shift(4, o), n.l = p, n.length > n.l ? n.slice(0, n.l) : n
    }(n, r, t);
    (a.length > 17 || (t["!rows"] || [])[n]) && jt(e, "BrtRowHdr", a)
}
var vo = Dr,
    Eo = Or;

function So(e) {
    return [Sr(e), Pr(e), "n"]
}
var bo = Dr,
    wo = Or;
var Bo = ["left", "right", "top", "bottom", "header", "footer"];

function Co(e, t, r, n, a, i, s) {
    if (void 0 === t.v) return !1;
    var o = "";
    switch (t.t) {
        case "b":
            o = t.v ? "1" : "0";
            break;
        case "d":
            (t = ce(t)).z = t.z || L._table[14], t.v = Z(oe(t.v)), t.t = "n";
            break;
        case "n":
        case "e":
            o = "" + t.v;
            break;
        default:
            o = t.v
    }
    var l = {
        r: r,
        c: n
    };
    switch (l.s = eo(a.cellXfs, t, a), t.l && i["!links"].push([tr(l), t.l]), t.c && i["!comments"].push([tr(l), t.c]), t.t) {
        case "s":
        case "str":
            return a.bookSST ? (o = qs(a.Strings, t.v, a.revStrings), l.t = "s", l.v = o, s ? jt(e, "BrtShortIsst", function(e, t, r) {
                return null == r && (r = Xt(8)), br(t, r), r.write_shift(4, t.v), r
            }(0, l)) : jt(e, "BrtCellIsst", function(e, t, r) {
                return null == r && (r = Xt(12)), Er(t, r), r.write_shift(4, t.v), r
            }(0, l))) : (l.t = "str", s ? jt(e, "BrtShortSt", function(e, t, r) {
                return null == r && (r = Xt(8 + 4 * e.v.length)), br(t, r), ur(e.v, r), r.length > r.l ? r.slice(0, r.l) : r
            }(t, l)) : jt(e, "BrtCellSt", function(e, t, r) {
                return null == r && (r = Xt(12 + 4 * e.v.length)), Er(t, r), ur(e.v, r), r.length > r.l ? r.slice(0, r.l) : r
            }(t, l))), !0;
        case "n":
            return t.v == (0 | t.v) && t.v > -1e3 && t.v < 1e3 ? s ? jt(e, "BrtShortRk", function(e, t, r) {
                return null == r && (r = Xt(8)), br(t, r), xr(e.v, r), r
            }(t, l)) : jt(e, "BrtCellRk", function(e, t, r) {
                return null == r && (r = Xt(12)), Er(t, r), xr(e.v, r), r
            }(t, l)) : s ? jt(e, "BrtShortReal", function(e, t, r) {
                return null == r && (r = Xt(12)), br(t, r), kr(e.v, r), r
            }(t, l)) : jt(e, "BrtCellReal", function(e, t, r) {
                return null == r && (r = Xt(16)), Er(t, r), kr(e.v, r), r
            }(t, l)), !0;
        case "b":
            return l.t = "b", s ? jt(e, "BrtShortBool", function(e, t, r) {
                return null == r && (r = Xt(5)), br(t, r), r.write_shift(1, e.v ? 1 : 0), r
            }(t, l)) : jt(e, "BrtCellBool", function(e, t, r) {
                return null == r && (r = Xt(9)), Er(t, r), r.write_shift(1, e.v ? 1 : 0), r
            }(t, l)), !0;
        case "e":
            return l.t = "e", s ? jt(e, "BrtShortError", function(e, t, r) {
                return null == r && (r = Xt(8)), br(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r
            }(t, l)) : jt(e, "BrtCellError", function(e, t, r) {
                return null == r && (r = Xt(9)), Er(t, r), r.write_shift(1, e.v), r
            }(t, l)), !0
    }
    return s ? jt(e, "BrtShortBlank", function(e, t, r) {
        return null == r && (r = Xt(4)), br(t, r)
    }(0, l)) : jt(e, "BrtCellBlank", function(e, t, r) {
        return null == r && (r = Xt(8)), Er(t, r)
    }(0, l)), !0
}

function _o(e, t) {
    t && t["!merges"] && (jt(e, "BrtBeginMergeCells", function(e, t) {
        return null == t && (t = Xt(4)), t.write_shift(4, e), t
    }(t["!merges"].length)), t["!merges"].forEach((function(t) {
        jt(e, "BrtMergeCell", wo(t))
    })), jt(e, "BrtEndMergeCells"))
}

function yo(e, t) {
    t && t["!cols"] && (jt(e, "BrtBeginColInfos"), t["!cols"].forEach((function(t, r) {
        t && jt(e, "BrtColInfo", function(e, t, r) {
            null == r && (r = Xt(18));
            var n = Qs(e, t);
            r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, 256 * (n.width || 10)), r.write_shift(4, 0);
            var a = 0;
            return t.hidden && (a |= 1), "number" == typeof n.width && (a |= 2), t.level && (a |= t.level << 8), r.write_shift(2, a), r
        }(r, t))
    })), jt(e, "BrtEndColInfos"))
}

function To(e, t) {
    t && t["!ref"] && (jt(e, "BrtBeginCellIgnoreECs"), jt(e, "BrtCellIgnoreEC", function(e) {
        var t = Xt(24);
        return t.write_shift(4, 4), t.write_shift(4, 1), Or(e, t), t
    }(ar(t["!ref"]))), jt(e, "BrtEndCellIgnoreECs"))
}

function Ao(e, t, r) {
    t["!links"].forEach((function(t) {
        if (t[1].Target) {
            var n = nn(r, -1, t[1].Target.replace(/#.*$/, ""), Qr.HLINK);
            jt(e, "BrtHLink", function(e, t) {
                var r = Xt(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
                Or({
                    s: er(e[0]),
                    e: er(e[0])
                }, r), Ar("rId" + t, r);
                var n = e[1].Target.indexOf("#");
                return ur((-1 == n ? "" : e[1].Target.slice(n + 1)) || "", r), ur(e[1].Tooltip || "", r), ur("", r), r.slice(0, r.l)
            }(t, n))
        }
    })), delete t["!links"]
}

function Ro(e, t, r) {
    jt(e, "BrtBeginWsViews"), jt(e, "BrtBeginWsView", function(e, t, r) {
        null == r && (r = Xt(30));
        var n = 924;
        return (((t || {}).Views || [])[0] || {}).RTL && (n |= 32), r.write_shift(2, n), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r
    }(0, r)), jt(e, "BrtEndWsView"), jt(e, "BrtEndWsViews")
}

function xo(e, t) {
    t["!protect"] && jt(e, "BrtSheetProtection", function(e, t) {
        return null == t && (t = Xt(66)), t.write_shift(2, e.password ? Xa(e.password) : 0), t.write_shift(4, 1), [
            ["objects", !1],
            ["scenarios", !1],
            ["formatCells", !0],
            ["formatColumns", !0],
            ["formatRows", !0],
            ["insertColumns", !0],
            ["insertRows", !0],
            ["insertHyperlinks", !0],
            ["deleteColumns", !0],
            ["deleteRows", !0],
            ["selectLockedCells", !1],
            ["sort", !0],
            ["autoFilter", !0],
            ["pivotTables", !0],
            ["selectUnlockedCells", !1]
        ].forEach((function(r) {
            r[1] ? t.write_shift(4, null == e[r[0]] || e[r[0]] ? 0 : 1) : t.write_shift(4, null != e[r[0]] && e[r[0]] ? 0 : 1)
        })), t
    }(t["!protect"]))
}

function Io(e, t, r, n) {
    var a = Gt(),
        i = r.SheetNames[e],
        s = r.Sheets[i] || {},
        o = i;
    try {
        r && r.Workbook && (o = r.Workbook.Sheets[e].CodeName || o)
    } catch (e) {}
    var l = ar(s["!ref"] || "A1");
    if (l.e.c > 16383 || l.e.r > 1048575) {
        if (t.WTF) throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
        l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575)
    }
    return s["!links"] = [], s["!comments"] = [], jt(a, "BrtBeginSheet"), (r.vbaraw || s["!outline"]) && jt(a, "BrtWsProp", function(e, t, r) {
            null == r && (r = Xt(84 + 4 * e.length));
            var n = 192;
            t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
            for (var a = 1; a < 3; ++a) r.write_shift(1, 0);
            return Fr({
                auto: 1
            }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), Br(e, r), r.slice(0, r.l)
        }(o, s["!outline"])), jt(a, "BrtWsDim", Eo(l)), Ro(a, 0, r.Workbook), yo(a, s),
        function(e, t, r, n) {
            var a, i = ar(t["!ref"] || "A1"),
                s = "",
                o = [];
            jt(e, "BrtBeginSheetData");
            var l = Array.isArray(t),
                c = i.e.r;
            t["!rows"] && (c = Math.max(i.e.r, t["!rows"].length - 1));
            for (var f = i.s.r; f <= c; ++f) {
                s = qt(f), go(e, t, i, f);
                var h = !1;
                if (f <= i.e.r)
                    for (var u = i.s.c; u <= i.e.c; ++u) {
                        f === i.s.r && (o[u] = Zt(u)), a = o[u] + s;
                        var d = l ? (t[f] || [])[u] : t[a];
                        h = !!d && Co(e, d, f, u, n, t, h)
                    }
            }
            jt(e, "BrtEndSheetData")
        }(a, s, 0, t), xo(a, s),
        function(e, t, r, n) {
            if (t["!autofilter"]) {
                var a = t["!autofilter"],
                    i = "string" == typeof a.ref ? a.ref : nr(a.ref);
                r.Workbook || (r.Workbook = {
                    Sheets: []
                }), r.Workbook.Names || (r.Workbook.Names = []);
                var s = r.Workbook.Names,
                    o = rr(i);
                o.s.r == o.e.r && (o.e.r = rr(t["!ref"]).e.r, i = nr(o));
                for (var l = 0; l < s.length; ++l) {
                    var c = s[l];
                    if ("_xlnm._FilterDatabase" == c.Name && c.Sheet == n) {
                        c.Ref = "'" + r.SheetNames[n] + "'!" + i;
                        break
                    }
                }
                l == s.length && s.push({
                    Name: "_xlnm._FilterDatabase",
                    Sheet: n,
                    Ref: "'" + r.SheetNames[n] + "'!" + i
                }), jt(e, "BrtBeginAFilter", Or(ar(i))), jt(e, "BrtEndAFilter")
            }
        }(a, s, r, e), _o(a, s), Ao(a, s, n), s["!margins"] && jt(a, "BrtMargins", function(e, t) {
            return null == t && (t = Xt(48)), Zs(e), Bo.forEach((function(r) {
                kr(e[r], t)
            })), t
        }(s["!margins"])), t && !t.ignoreEC && null != t.ignoreEC || To(a, s),
        function(e, t, r, n) {
            if (t["!comments"].length > 0) {
                var a = nn(n, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", Qr.VML);
                jt(e, "BrtLegacyDrawing", Ar("rId" + a)), t["!legacy"] = a
            }
        }(a, s, e, n), jt(a, "BrtEndSheet"), a.end()
}
Qr.CHART = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart", Qr.CHARTEX = "http://schemas.microsoft.com/office/2014/relationships/chartEx", Qr.CS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet";
Ze("chartsheet", null, {
    xmlns: tt.main[0],
    "xmlns:r": tt.r
});
var Do = [
    ["allowRefreshQuery", !1, "bool"],
    ["autoCompressPictures", !0, "bool"],
    ["backupFile", !1, "bool"],
    ["checkCompatibility", !1, "bool"],
    ["CodeName", ""],
    ["date1904", !1, "bool"],
    ["defaultThemeVersion", 0, "int"],
    ["filterPrivacy", !1, "bool"],
    ["hidePivotFieldList", !1, "bool"],
    ["promptedSolutions", !1, "bool"],
    ["publishItems", !1, "bool"],
    ["refreshAllConnections", !1, "bool"],
    ["saveExternalLinkValues", !0, "bool"],
    ["showBorderUnselectedTables", !0, "bool"],
    ["showInkAnnotation", !0, "bool"],
    ["showObjects", "all"],
    ["showPivotChartFilter", !1, "bool"],
    ["updateLinks", "userSet"]
];
var Oo = "][*?/\\".split("");

function Po(e, t) {
    if (e.length > 31) {
        if (t) return !1;
        throw new Error("Sheet names cannot exceed 31 chars")
    }
    var r = !0;
    return Oo.forEach((function(n) {
        if (-1 != e.indexOf(n)) {
            if (!t) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
            r = !1
        }
    })), r
}

function ko(e) {
    if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
    if (!e.SheetNames.length) throw new Error("Workbook is empty");
    var t, r, n, a = e.Workbook && e.Workbook.Sheets || [];
    t = e.SheetNames, r = a, n = !!e.vbaraw, t.forEach((function(e, a) {
        Po(e);
        for (var i = 0; i < a; ++i)
            if (e == t[i]) throw new Error("Duplicate Sheet Name: " + e);
        if (n) {
            var s = r && r[a] && r[a].CodeName || e;
            if (95 == s.charCodeAt(0) && s.length > 22) throw new Error("Bad Code Name: Worksheet" + s)
        }
    }));
    for (var i = 0; i < e.SheetNames.length; ++i) ro(e.Sheets[e.SheetNames[i]], e.SheetNames[i], i)
}
var Fo = Ze("workbook", null, {
    xmlns: tt.main[0],
    "xmlns:r": tt.r
});

function No(e) {
    var t = [Be];
    t[t.length] = Fo;
    var r = e.Workbook && (e.Workbook.Names || []).length > 0,
        n = {
            codeName: "ThisWorkbook"
        };
    e.Workbook && e.Workbook.WBProps && (Do.forEach((function(t) {
        null != e.Workbook.WBProps[t[0]] && e.Workbook.WBProps[t[0]] != t[1] && (n[t[0]] = e.Workbook.WBProps[t[0]])
    })), e.Workbook.WBProps.CodeName && (n.codeName = e.Workbook.WBProps.CodeName, delete n.CodeName)), t[t.length] = Ze("workbookPr", null, n);
    var a = e.Workbook && e.Workbook.Sheets || [],
        i = 0;
    if (a && a[0] && a[0].Hidden) {
        for (t[t.length] = "<bookViews>", i = 0; i != e.SheetNames.length && a[i] && a[i].Hidden; ++i);
        i == e.SheetNames.length && (i = 0), t[t.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', t[t.length] = "</bookViews>"
    }
    for (t[t.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
        var s = {
            name: Fe(e.SheetNames[i].slice(0, 31))
        };
        if (s.sheetId = "" + (i + 1), s["r:id"] = "rId" + (i + 1), a[i]) switch (a[i].Hidden) {
            case 1:
                s.state = "hidden";
                break;
            case 2:
                s.state = "veryHidden"
        }
        t[t.length] = Ze("sheet", null, s)
    }
    return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach((function(e) {
        var r = {
            name: e.Name
        };
        e.Comment && (r.comment = e.Comment), null != e.Sheet && (r.localSheetId = "" + e.Sheet), e.Hidden && (r.hidden = "1"), e.Ref && (t[t.length] = Ze("definedName", Fe(e.Ref), r))
    })), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("")
}

function Mo(e, t) {
    return t || (t = Xt(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), Ar(e.strRelID, t), ur(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t
}

function Lo(e, t) {
    if (t.Workbook && t.Workbook.Sheets) {
        for (var r = t.Workbook.Sheets, n = 0, a = -1, i = -1; n < r.length; ++n) !r[n] || !r[n].Hidden && -1 == a ? a = n : 1 == r[n].Hidden && -1 == i && (i = n);
        i > a || (jt(e, "BrtBeginBookViews"), jt(e, "BrtBookView", function(e, t) {
            return t || (t = Xt(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e), t.write_shift(1, 120), t.length > t.l ? t.slice(0, t.l) : t
        }(a)), jt(e, "BrtEndBookViews"))
    }
}

function Uo(e, t) {
    var r = Gt();
    return jt(r, "BrtBeginBook"), jt(r, "BrtFileVersion", function(e, t) {
            t || (t = Xt(127));
            for (var r = 0; 4 != r; ++r) t.write_shift(4, 0);
            return ur("SheetJS", t), ur(f.version, t), ur(f.version, t), ur("7262", t), t.length > t.l ? t.slice(0, t.l) : t
        }()), jt(r, "BrtWbProp", function(e, t) {
            t || (t = Xt(72));
            var r = 0;
            return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), Br(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l)
        }(e.Workbook && e.Workbook.WBProps || null)), Lo(r, e),
        function(e, t) {
            jt(e, "BrtBeginBundleShs");
            for (var r = 0; r != t.SheetNames.length; ++r) jt(e, "BrtBundleSh", Mo({
                Hidden: t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0,
                iTabID: r + 1,
                strRelID: "rId" + (r + 1),
                name: t.SheetNames[r]
            }));
            jt(e, "BrtEndBundleShs")
        }(r, e), jt(r, "BrtEndBook"), r.end()
}

function Ho(e, t, r, n, a) {
    return (".bin" === t.slice(-4) ? Io : mo)(e, r, n, a)
}

function Vo(e, t, r) {
    return (".bin" === t.slice(-4) ? ji : Xi)(e, r)
}

function Wo(e) {
    if (T && c.isBuffer(e)) return e.toString("utf8");
    if ("string" == typeof e) return e;
    if ("undefined" != typeof Uint8Array && e instanceof Uint8Array) return Ve(P(k(e)));
    throw new Error("Bad input format: expected Buffer or string")
}
var Xo = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/gm;

function Go(e, t) {
    var r = [];
    return e.Props && r.push(function(e, t) {
        var r = [];
        return Y(vn).map((function(e) {
            for (var t = 0; t < ln.length; ++t)
                if (ln[t][1] == e) return ln[t];
            for (t = 0; t < un.length; ++t)
                if (un[t][1] == e) return un[t];
            throw e
        })).forEach((function(n) {
            if (null != e[n[1]]) {
                var a = t && t.Props && null != t.Props[n[1]] ? t.Props[n[1]] : e[n[1]];
                "date" === n[2] && (a = new Date(a).toISOString().replace(/\.\d*Z/, "Z")), "number" == typeof a ? a = String(a) : !0 === a || !1 === a ? a = a ? "1" : "0" : a instanceof Date && (a = new Date(a).toISOString().replace(/\.\d*Z/, "")), r.push(qe(vn[n[1]] || n[1], a))
            }
        })), Ze("DocumentProperties", r.join(""), {
            xmlns: rt
        })
    }(e.Props, t)), e.Custprops && r.push(function(e, t) {
        var r = ["Worksheets", "SheetNames"],
            n = "CustomDocumentProperties",
            a = [];
        return e && Y(e).forEach((function(t) {
            if (Object.prototype.hasOwnProperty.call(e, t)) {
                for (var n = 0; n < ln.length; ++n)
                    if (t == ln[n][1]) return;
                for (n = 0; n < un.length; ++n)
                    if (t == un[n][1]) return;
                for (n = 0; n < r.length; ++n)
                    if (t == r[n]) return;
                var i = e[t],
                    s = "string";
                "number" == typeof i ? (s = "float", i = String(i)) : !0 === i || !1 === i ? (s = "boolean", i = i ? "1" : "0") : i = String(i), a.push(Ze(Ne(t), i, {
                    "dt:dt": s
                }))
            }
        })), t && Y(t).forEach((function(r) {
            if (Object.prototype.hasOwnProperty.call(t, r) && (!e || !Object.prototype.hasOwnProperty.call(e, r))) {
                var n = t[r],
                    i = "string";
                "number" == typeof n ? (i = "float", n = String(n)) : !0 === n || !1 === n ? (i = "boolean", n = n ? "1" : "0") : n instanceof Date ? (i = "dateTime.tz", n = n.toISOString()) : n = String(n), a.push(Ze(Ne(r), n, {
                    "dt:dt": i
                }))
            }
        })), "<" + n + ' xmlns="' + rt + '">' + a.join("") + "</" + n + ">"
    }(e.Props, e.Custprops)), r.join("")
}

function jo(e) {
    return Ze("NamedRange", null, {
        "ss:Name": e.Name,
        "ss:RefersTo": "=" + Ki(e.Ref, {
            r: 0,
            c: 0
        })
    })
}

function $o(e, t, r, n, a, i, s) {
    if (!e || null == e.v && null == e.f) return "";
    var o = {};
    if (e.f && (o["ss:Formula"] = "=" + Fe(Ki(e.f, s))), e.F && e.F.slice(0, t.length) == t) {
        var l = er(e.F.slice(t.length + 1));
        o["ss:ArrayRange"] = "RC:R" + (l.r == s.r ? "" : "[" + (l.r - s.r) + "]") + "C" + (l.c == s.c ? "" : "[" + (l.c - s.c) + "]")
    }
    if (e.l && e.l.Target && (o["ss:HRef"] = Fe(e.l.Target), e.l.Tooltip && (o["x:HRefScreenTip"] = Fe(e.l.Tooltip))), r["!merges"])
        for (var c = r["!merges"], f = 0; f != c.length; ++f) c[f].s.c == s.c && c[f].s.r == s.r && (c[f].e.c > c[f].s.c && (o["ss:MergeAcross"] = c[f].e.c - c[f].s.c), c[f].e.r > c[f].s.r && (o["ss:MergeDown"] = c[f].e.r - c[f].s.r));
    var h = "",
        u = "";
    switch (e.t) {
        case "z":
            if (!n.sheetStubs) return "";
            break;
        case "n":
            h = "Number", u = String(e.v);
            break;
        case "b":
            h = "Boolean", u = e.v ? "1" : "0";
            break;
        case "e":
            h = "Error", u = Gr[e.v];
            break;
        case "d":
            h = "DateTime", u = new Date(e.v).toISOString(), null == e.z && (e.z = e.z || L._table[14]);
            break;
        case "s":
            h = "String", u = ((e.v || "") + "").replace(Pe, (function(e) {
                return De[e]
            })).replace(Me, (function(e) {
                return "&#x" + e.charCodeAt(0).toString(16).toUpperCase() + ";"
            }))
    }
    var d = eo(n.cellXfs, e, n);
    o["ss:StyleID"] = "s" + (21 + d), o["ss:Index"] = s.c + 1;
    var p = null != e.v ? u : "",
        m = "z" == e.t ? "" : '<Data ss:Type="' + h + '">' + p + "</Data>";
    return (e.c || []).length > 0 && (m += e.c.map((function(e) {
        var t = Ze("ss:Data", Ue(e.t || ""), {
            xmlns: "http://www.w3.org/TR/REC-html40"
        });
        return Ze("Comment", t, {
            "ss:Author": e.a
        })
    })).join("")), Ze("Cell", m, o)
}

function zo(e, t) {
    var r = '<Row ss:Index="' + (e + 1) + '"';
    return t && (t.hpt && !t.hpx && (t.hpx = si(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">"
}

function Yo(e, t, r) {
    var n = [],
        a = r.SheetNames[e],
        i = r.Sheets[a],
        s = i ? function(e, t, r, n) {
            if (!e) return "";
            if (!((n || {}).Workbook || {}).Names) return "";
            for (var a = n.Workbook.Names, i = [], s = 0; s < a.length; ++s) {
                var o = a[s];
                o.Sheet == r && (o.Name.match(/^_xlfn\./) || i.push(jo(o)))
            }
            return i.join("")
        }(i, 0, e, r) : "";
    return s.length > 0 && n.push("<Names>" + s + "</Names>"), s = i ? function(e, t, r, n) {
        if (!e["!ref"]) return "";
        var a = ar(e["!ref"]),
            i = e["!merges"] || [],
            s = 0,
            o = [];
        e["!cols"] && e["!cols"].forEach((function(e, t) {
            ai(e);
            var r = !!e.width,
                n = Qs(t, e),
                a = {
                    "ss:Index": t + 1
                };
            r && (a["ss:Width"] = ti(n.width)), e.hidden && (a["ss:Hidden"] = "1"), o.push(Ze("Column", null, a))
        }));
        for (var l = Array.isArray(e), c = a.s.r; c <= a.e.r; ++c) {
            for (var f = [zo(c, (e["!rows"] || [])[c])], h = a.s.c; h <= a.e.c; ++h) {
                var u = !1;
                for (s = 0; s != i.length; ++s)
                    if (!(i[s].s.c > h || i[s].s.r > c || i[s].e.c < h || i[s].e.r < c)) {
                        i[s].s.c == h && i[s].s.r == c || (u = !0);
                        break
                    } if (!u) {
                    var d = {
                            r: c,
                            c: h
                        },
                        p = tr(d),
                        m = l ? (e[c] || [])[h] : e[p];
                    f.push($o(m, p, e, t, 0, 0, d))
                }
            }
            f.push("</Row>"), f.length > 2 && o.push(f.join(""))
        }
        return o.join("")
    }(i, t) : "", s.length > 0 && n.push("<Table>" + s + "</Table>"), n.push(function(e, t, r, n) {
        if (!e) return "";
        var a = [];
        if (e["!margins"] && (a.push("<PageSetup>"), e["!margins"].header && a.push(Ze("Header", null, {
                "x:Margin": e["!margins"].header
            })), e["!margins"].footer && a.push(Ze("Footer", null, {
                "x:Margin": e["!margins"].footer
            })), a.push(Ze("PageMargins", null, {
                "x:Bottom": e["!margins"].bottom || "0.75",
                "x:Left": e["!margins"].left || "0.7",
                "x:Right": e["!margins"].right || "0.7",
                "x:Top": e["!margins"].top || "0.75"
            })), a.push("</PageSetup>")), n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
            if (n.Workbook.Sheets[r].Hidden) a.push(Ze("Visible", 1 == n.Workbook.Sheets[r].Hidden ? "SheetHidden" : "SheetVeryHidden", {}));
            else {
                for (var i = 0; i < r && (!n.Workbook.Sheets[i] || n.Workbook.Sheets[i].Hidden); ++i);
                i == r && a.push("<Selected/>")
            } return ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL && a.push("<DisplayRightToLeft/>"), e["!protect"] && (a.push(qe("ProtectContents", "True")), e["!protect"].objects && a.push(qe("ProtectObjects", "True")), e["!protect"].scenarios && a.push(qe("ProtectScenarios", "True")), null == e["!protect"].selectLockedCells || e["!protect"].selectLockedCells ? null == e["!protect"].selectUnlockedCells || e["!protect"].selectUnlockedCells || a.push(qe("EnableSelection", "UnlockedCells")) : a.push(qe("EnableSelection", "NoSelection")), [
            ["formatCells", "AllowFormatCells"],
            ["formatColumns", "AllowSizeCols"],
            ["formatRows", "AllowSizeRows"],
            ["insertColumns", "AllowInsertCols"],
            ["insertRows", "AllowInsertRows"],
            ["insertHyperlinks", "AllowInsertHyperlinks"],
            ["deleteColumns", "AllowDeleteCols"],
            ["deleteRows", "AllowDeleteRows"],
            ["sort", "AllowSort"],
            ["autoFilter", "AllowFilter"],
            ["pivotTables", "AllowUsePivotTables"]
        ].forEach((function(t) {
            e["!protect"][t[0]] && a.push("<" + t[1] + "/>")
        }))), 0 == a.length ? "" : Ze("WorksheetOptions", a.join(""), {
            xmlns: nt
        })
    }(i, 0, e, r)), n.join("")
}

function Ko(e, t) {
    t || (t = {}), e.SSF || (e.SSF = L.get_table()), e.SSF && (U(L), L.load_table(e.SSF), t.revssf = q(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], eo(t.cellXfs, {}, {
        revssf: {
            General: 0
        }
    }));
    var r = [];
    r.push(Go(e, t)), r.push(""), r.push(""), r.push("");
    for (var n = 0; n < e.SheetNames.length; ++n) r.push(Ze("Worksheet", Yo(n, t, e), {
        "ss:Name": Fe(e.SheetNames[n])
    }));
    return r[2] = function(e, t) {
        var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
        return t.cellXfs.forEach((function(e, t) {
            var n = [];
            n.push(Ze("NumberFormat", null, {
                "ss:Format": Fe(L._table[e.numFmtId])
            }));
            var a = {
                "ss:ID": "s" + (21 + t)
            };
            r.push(Ze("Style", n.join(""), a))
        })), Ze("Styles", r.join(""))
    }(0, t), r[3] = function(e) {
        if (!((e || {}).Workbook || {}).Names) return "";
        for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
            var a = t[n];
            null == a.Sheet && (a.Name.match(/^_xlfn\./) || r.push(jo(a)))
        }
        return Ze("Names", r.join(""))
    }(e), Be + Ze("Workbook", r.join(""), {
        xmlns: at,
        "xmlns:o": rt,
        "xmlns:x": nt,
        "xmlns:ss": at,
        "xmlns:dt": it,
        "xmlns:html": lt
    })
}
var Jo = "e0859ff2f94f6810ab9108002b27b3d9",
    qo = "02d5cdd59c2e1b10939708002b2cf9ae",
    Qo = "05d5cdd59c2e1b10939708002b2cf9ae";

function Zo(e, t) {
    var r = t || {},
        n = X.utils.cfb_new({
            root: "R"
        }),
        a = "/Workbook";
    switch (r.bookType || "xls") {
        case "xls":
            r.bookType = "biff8";
        case "xla":
            r.bookType || (r.bookType = "xla");
        case "biff8":
            a = "/Workbook", r.biff = 8;
            break;
        case "biff5":
            a = "/Book", r.biff = 5;
            break;
        default:
            throw new Error("invalid type " + r.bookType + " for XLS CFB")
    }
    return X.utils.cfb_add(n, a, dl(e, r)), 8 == r.biff && (e.Props || e.Custprops) && function(e, t) {
        var r, n = [],
            a = [],
            i = [],
            s = 0;
        if (e.Props)
            for (r = Y(e.Props), s = 0; s < r.length; ++s)(Object.prototype.hasOwnProperty.call(Lr, r[s]) ? n : Object.prototype.hasOwnProperty.call(Ur, r[s]) ? a : i).push([r[s], e.Props[r[s]]]);
        if (e.Custprops)
            for (r = Y(e.Custprops), s = 0; s < r.length; ++s) Object.prototype.hasOwnProperty.call(e.Props || {}, r[s]) || (Object.prototype.hasOwnProperty.call(Lr, r[s]) ? n : Object.prototype.hasOwnProperty.call(Ur, r[s]) ? a : i).push([r[s], e.Custprops[r[s]]]);
        var o = [];
        for (s = 0; s < i.length; ++s) bn.indexOf(i[s][0]) > -1 || null != i[s][1] && o.push(i[s]);
        a.length && X.utils.cfb_add(t, "/SummaryInformation", Cn(a, Jo, Ur, Mr)), (n.length || o.length) && X.utils.cfb_add(t, "/DocumentSummaryInformation", Cn(n, qo, Lr, Nr, o.length ? o : null, Qo))
    }(e, n), 8 == r.biff && e.vbaraw && function(e, t) {
        t.FullPaths.forEach((function(r, n) {
            if (0 != n) {
                var a = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
                "/" !== a.slice(-1) && X.utils.cfb_add(e, a, t.FileIndex[n].content)
            }
        }))
    }(n, X.read(e.vbaraw, {
        type: "string" == typeof e.vbaraw ? "binary" : "buffer"
    })), n
}
var el, tl = {
    0: {
        n: "BrtRowHdr",
        f: function(e, t) {
            var r = {},
                n = e.l + t;
            r.r = e.read_shift(4), e.l += 4;
            var a = e.read_shift(2);
            e.l += 1;
            var i = e.read_shift(1);
            return e.l = n, 7 & i && (r.level = 7 & i), 16 & i && (r.hidden = !0), 32 & i && (r.hpt = a / 20), r
        }
    },
    1: {
        n: "BrtCellBlank",
        f: function(e) {
            return [vr(e)]
        }
    },
    2: {
        n: "BrtCellRk",
        f: function(e) {
            return [vr(e), Rr(e), "n"]
        }
    },
    3: {
        n: "BrtCellError",
        f: function(e) {
            return [vr(e), e.read_shift(1), "e"]
        }
    },
    4: {
        n: "BrtCellBool",
        f: function(e) {
            return [vr(e), e.read_shift(1), "b"]
        }
    },
    5: {
        n: "BrtCellReal",
        f: function(e) {
            return [vr(e), Pr(e), "n"]
        }
    },
    6: {
        n: "BrtCellSt",
        f: function(e) {
            return [vr(e), hr(e), "str"]
        }
    },
    7: {
        n: "BrtCellIsst",
        f: function(e) {
            return [vr(e), e.read_shift(4), "s"]
        }
    },
    8: {
        n: "BrtFmlaString",
        f: function(e, t, r) {
            var n = e.l + t,
                a = vr(e);
            a.r = r["!row"];
            var i = [a, hr(e), "str"];
            if (r.cellFormula) {
                e.l += 2;
                var s = Hs(e, n - e.l, r);
                i[3] = Ps(s, 0, a, r.supbooks, r)
            } else e.l = n;
            return i
        }
    },
    9: {
        n: "BrtFmlaNum",
        f: function(e, t, r) {
            var n = e.l + t,
                a = vr(e);
            a.r = r["!row"];
            var i = [a, Pr(e), "n"];
            if (r.cellFormula) {
                e.l += 2;
                var s = Hs(e, n - e.l, r);
                i[3] = Ps(s, 0, a, r.supbooks, r)
            } else e.l = n;
            return i
        }
    },
    10: {
        n: "BrtFmlaBool",
        f: function(e, t, r) {
            var n = e.l + t,
                a = vr(e);
            a.r = r["!row"];
            var i = [a, e.read_shift(1), "b"];
            if (r.cellFormula) {
                e.l += 2;
                var s = Hs(e, n - e.l, r);
                i[3] = Ps(s, 0, a, r.supbooks, r)
            } else e.l = n;
            return i
        }
    },
    11: {
        n: "BrtFmlaError",
        f: function(e, t, r) {
            var n = e.l + t,
                a = vr(e);
            a.r = r["!row"];
            var i = [a, e.read_shift(1), "e"];
            if (r.cellFormula) {
                e.l += 2;
                var s = Hs(e, n - e.l, r);
                i[3] = Ps(s, 0, a, r.supbooks, r)
            } else e.l = n;
            return i
        }
    },
    12: {
        n: "BrtShortBlank",
        f: function(e) {
            return [Sr(e)]
        }
    },
    13: {
        n: "BrtShortRk",
        f: function(e) {
            return [Sr(e), Rr(e), "n"]
        }
    },
    14: {
        n: "BrtShortError",
        f: function(e) {
            return [Sr(e), e.read_shift(1), "e"]
        }
    },
    15: {
        n: "BrtShortBool",
        f: function(e) {
            return [Sr(e), e.read_shift(1), "b"]
        }
    },
    16: {
        n: "BrtShortReal",
        f: So
    },
    17: {
        n: "BrtShortSt",
        f: function(e) {
            return [Sr(e), hr(e), "str"]
        }
    },
    18: {
        n: "BrtShortIsst",
        f: function(e) {
            return [Sr(e), e.read_shift(4), "s"]
        }
    },
    19: {
        n: "BrtSSTItem",
        f: pr
    },
    20: {
        n: "BrtPCDIMissing"
    },
    21: {
        n: "BrtPCDINumber"
    },
    22: {
        n: "BrtPCDIBoolean"
    },
    23: {
        n: "BrtPCDIError"
    },
    24: {
        n: "BrtPCDIString"
    },
    25: {
        n: "BrtPCDIDatetime"
    },
    26: {
        n: "BrtPCDIIndex"
    },
    27: {
        n: "BrtPCDIAMissing"
    },
    28: {
        n: "BrtPCDIANumber"
    },
    29: {
        n: "BrtPCDIABoolean"
    },
    30: {
        n: "BrtPCDIAError"
    },
    31: {
        n: "BrtPCDIAString"
    },
    32: {
        n: "BrtPCDIADatetime"
    },
    33: {
        n: "BrtPCRRecord"
    },
    34: {
        n: "BrtPCRRecordDt"
    },
    35: {
        n: "BrtFRTBegin"
    },
    36: {
        n: "BrtFRTEnd"
    },
    37: {
        n: "BrtACBegin"
    },
    38: {
        n: "BrtACEnd"
    },
    39: {
        n: "BrtName",
        f: function(e, t, r) {
            var n = e.l + t;
            e.l += 4, e.l += 1;
            var a = e.read_shift(4),
                i = yr(e),
                s = Vs(e, 0, r),
                o = Cr(e);
            e.l = n;
            var l = {
                Name: i,
                Ptg: s
            };
            return a < 268435455 && (l.Sheet = a), o && (l.Comment = o), l
        }
    },
    40: {
        n: "BrtIndexRowBlock"
    },
    42: {
        n: "BrtIndexBlock"
    },
    43: {
        n: "BrtFont",
        f: function(e, t, r) {
            var n = {};
            n.sz = e.read_shift(2) / 20;
            var a = function(e) {
                var t = e.read_shift(1);
                return e.l++, {
                    fBold: 1 & t,
                    fItalic: 2 & t,
                    fUnderline: 4 & t,
                    fStrikeout: 8 & t,
                    fOutline: 16 & t,
                    fShadow: 32 & t,
                    fCondense: 64 & t,
                    fExtend: 128 & t
                }
            }(e);
            switch (a.fItalic && (n.italic = 1), a.fCondense && (n.condense = 1), a.fExtend && (n.extend = 1), a.fShadow && (n.shadow = 1), a.fOutline && (n.outline = 1), a.fStrikeout && (n.strike = 1), 700 === e.read_shift(2) && (n.bold = 1), e.read_shift(2)) {
                case 1:
                    n.vertAlign = "superscript";
                    break;
                case 2:
                    n.vertAlign = "subscript"
            }
            var i = e.read_shift(1);
            0 != i && (n.underline = i);
            var s = e.read_shift(1);
            s > 0 && (n.family = s);
            var o = e.read_shift(1);
            switch (o > 0 && (n.charset = o), e.l++, n.color = function(e) {
                    var t = {},
                        r = e.read_shift(1) >>> 1,
                        n = e.read_shift(1),
                        a = e.read_shift(2, "i"),
                        i = e.read_shift(1),
                        s = e.read_shift(1),
                        o = e.read_shift(1);
                    switch (e.l++, r) {
                        case 0:
                            t.auto = 1;
                            break;
                        case 1:
                            t.index = n;
                            var l = Xr[n];
                            l && (t.rgb = Qa(l));
                            break;
                        case 2:
                            t.rgb = Qa([i, s, o]);
                            break;
                        case 3:
                            t.theme = n
                    }
                    return 0 != a && (t.tint = a > 0 ? a / 32767 : a / 32768), t
                }(e), e.read_shift(1)) {
                case 1:
                    n.scheme = "major";
                    break;
                case 2:
                    n.scheme = "minor"
            }
            return n.name = hr(e), n
        }
    },
    44: {
        n: "BrtFmt",
        f: function(e, t) {
            return [e.read_shift(2), hr(e)]
        }
    },
    45: {
        n: "BrtFill",
        f: Si
    },
    46: {
        n: "BrtBorder",
        f: Ci
    },
    47: {
        n: "BrtXF",
        f: function(e, t) {
            var r = e.l + t,
                n = e.read_shift(2),
                a = e.read_shift(2);
            return e.l = r, {
                ixfe: n,
                numFmtId: a
            }
        }
    },
    48: {
        n: "BrtStyle"
    },
    49: {
        n: "BrtCellMeta"
    },
    50: {
        n: "BrtValueMeta"
    },
    51: {
        n: "BrtMdb"
    },
    52: {
        n: "BrtBeginFmd"
    },
    53: {
        n: "BrtEndFmd"
    },
    54: {
        n: "BrtBeginMdx"
    },
    55: {
        n: "BrtEndMdx"
    },
    56: {
        n: "BrtBeginMdxTuple"
    },
    57: {
        n: "BrtEndMdxTuple"
    },
    58: {
        n: "BrtMdxMbrIstr"
    },
    59: {
        n: "BrtStr"
    },
    60: {
        n: "BrtColInfo",
        f: Sa
    },
    62: {
        n: "BrtCellRString",
        f: function(e) {
            return [vr(e), pr(e), "is"]
        }
    },
    63: {
        n: "BrtCalcChainItem$",
        f: function(e) {
            var t = {};
            t.i = e.read_shift(4);
            var r = {};
            r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = tr(r);
            var n = e.read_shift(1);
            return 2 & n && (t.l = "1"), 8 & n && (t.a = "1"), t
        }
    },
    64: {
        n: "BrtDVal",
        f: function() {}
    },
    65: {
        n: "BrtSxvcellNum"
    },
    66: {
        n: "BrtSxvcellStr"
    },
    67: {
        n: "BrtSxvcellBool"
    },
    68: {
        n: "BrtSxvcellErr"
    },
    69: {
        n: "BrtSxvcellDate"
    },
    70: {
        n: "BrtSxvcellNil"
    },
    128: {
        n: "BrtFileVersion"
    },
    129: {
        n: "BrtBeginSheet"
    },
    130: {
        n: "BrtEndSheet"
    },
    131: {
        n: "BrtBeginBook",
        f: Wt,
        p: 0
    },
    132: {
        n: "BrtEndBook"
    },
    133: {
        n: "BrtBeginWsViews"
    },
    134: {
        n: "BrtEndWsViews"
    },
    135: {
        n: "BrtBeginBookViews"
    },
    136: {
        n: "BrtEndBookViews"
    },
    137: {
        n: "BrtBeginWsView",
        f: function(e) {
            var t = e.read_shift(2);
            return e.l += 28, {
                RTL: 32 & t
            }
        }
    },
    138: {
        n: "BrtEndWsView"
    },
    139: {
        n: "BrtBeginCsViews"
    },
    140: {
        n: "BrtEndCsViews"
    },
    141: {
        n: "BrtBeginCsView"
    },
    142: {
        n: "BrtEndCsView"
    },
    143: {
        n: "BrtBeginBundleShs"
    },
    144: {
        n: "BrtEndBundleShs"
    },
    145: {
        n: "BrtBeginSheetData"
    },
    146: {
        n: "BrtEndSheetData"
    },
    147: {
        n: "BrtWsProp",
        f: function(e, t) {
            var r = {},
                n = e[e.l];
            return ++e.l, r.above = !(64 & n), r.left = !(128 & n), e.l += 18, r.name = wr(e, t - 19), r
        }
    },
    148: {
        n: "BrtWsDim",
        f: vo,
        p: 16
    },
    151: {
        n: "BrtPane",
        f: function() {}
    },
    152: {
        n: "BrtSel"
    },
    153: {
        n: "BrtWbProp",
        f: function(e, t) {
            var r = {},
                n = e.read_shift(4);
            r.defaultThemeVersion = e.read_shift(4);
            var a = t > 8 ? hr(e) : "";
            return a.length > 0 && (r.CodeName = a), r.autoCompressPictures = !!(65536 & n), r.backupFile = !!(64 & n), r.checkCompatibility = !!(4096 & n), r.date1904 = !!(1 & n), r.filterPrivacy = !!(8 & n), r.hidePivotFieldList = !!(1024 & n), r.promptedSolutions = !!(16 & n), r.publishItems = !!(2048 & n), r.refreshAllConnections = !!(262144 & n), r.saveExternalLinkValues = !!(128 & n), r.showBorderUnselectedTables = !!(4 & n), r.showInkAnnotation = !!(32 & n), r.showObjects = ["all", "placeholders", "none"][n >> 13 & 3], r.showPivotChartFilter = !!(32768 & n), r.updateLinks = ["userSet", "never", "always"][n >> 8 & 3], r
        }
    },
    154: {
        n: "BrtWbFactoid"
    },
    155: {
        n: "BrtFileRecover"
    },
    156: {
        n: "BrtBundleSh",
        f: function(e, t) {
            var r = {};
            return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = Tr(e, t - 8), r.name = hr(e), r
        }
    },
    157: {
        n: "BrtCalcProp"
    },
    158: {
        n: "BrtBookView"
    },
    159: {
        n: "BrtBeginSst",
        f: function(e) {
            return [e.read_shift(4), e.read_shift(4)]
        }
    },
    160: {
        n: "BrtEndSst"
    },
    161: {
        n: "BrtBeginAFilter",
        f: Dr
    },
    162: {
        n: "BrtEndAFilter"
    },
    163: {
        n: "BrtBeginFilterColumn"
    },
    164: {
        n: "BrtEndFilterColumn"
    },
    165: {
        n: "BrtBeginFilters"
    },
    166: {
        n: "BrtEndFilters"
    },
    167: {
        n: "BrtFilter"
    },
    168: {
        n: "BrtColorFilter"
    },
    169: {
        n: "BrtIconFilter"
    },
    170: {
        n: "BrtTop10Filter"
    },
    171: {
        n: "BrtDynamicFilter"
    },
    172: {
        n: "BrtBeginCustomFilters"
    },
    173: {
        n: "BrtEndCustomFilters"
    },
    174: {
        n: "BrtCustomFilter"
    },
    175: {
        n: "BrtAFilterDateGroupItem"
    },
    176: {
        n: "BrtMergeCell",
        f: bo
    },
    177: {
        n: "BrtBeginMergeCells"
    },
    178: {
        n: "BrtEndMergeCells"
    },
    179: {
        n: "BrtBeginPivotCacheDef"
    },
    180: {
        n: "BrtEndPivotCacheDef"
    },
    181: {
        n: "BrtBeginPCDFields"
    },
    182: {
        n: "BrtEndPCDFields"
    },
    183: {
        n: "BrtBeginPCDField"
    },
    184: {
        n: "BrtEndPCDField"
    },
    185: {
        n: "BrtBeginPCDSource"
    },
    186: {
        n: "BrtEndPCDSource"
    },
    187: {
        n: "BrtBeginPCDSRange"
    },
    188: {
        n: "BrtEndPCDSRange"
    },
    189: {
        n: "BrtBeginPCDFAtbl"
    },
    190: {
        n: "BrtEndPCDFAtbl"
    },
    191: {
        n: "BrtBeginPCDIRun"
    },
    192: {
        n: "BrtEndPCDIRun"
    },
    193: {
        n: "BrtBeginPivotCacheRecords"
    },
    194: {
        n: "BrtEndPivotCacheRecords"
    },
    195: {
        n: "BrtBeginPCDHierarchies"
    },
    196: {
        n: "BrtEndPCDHierarchies"
    },
    197: {
        n: "BrtBeginPCDHierarchy"
    },
    198: {
        n: "BrtEndPCDHierarchy"
    },
    199: {
        n: "BrtBeginPCDHFieldsUsage"
    },
    200: {
        n: "BrtEndPCDHFieldsUsage"
    },
    201: {
        n: "BrtBeginExtConnection"
    },
    202: {
        n: "BrtEndExtConnection"
    },
    203: {
        n: "BrtBeginECDbProps"
    },
    204: {
        n: "BrtEndECDbProps"
    },
    205: {
        n: "BrtBeginECOlapProps"
    },
    206: {
        n: "BrtEndECOlapProps"
    },
    207: {
        n: "BrtBeginPCDSConsol"
    },
    208: {
        n: "BrtEndPCDSConsol"
    },
    209: {
        n: "BrtBeginPCDSCPages"
    },
    210: {
        n: "BrtEndPCDSCPages"
    },
    211: {
        n: "BrtBeginPCDSCPage"
    },
    212: {
        n: "BrtEndPCDSCPage"
    },
    213: {
        n: "BrtBeginPCDSCPItem"
    },
    214: {
        n: "BrtEndPCDSCPItem"
    },
    215: {
        n: "BrtBeginPCDSCSets"
    },
    216: {
        n: "BrtEndPCDSCSets"
    },
    217: {
        n: "BrtBeginPCDSCSet"
    },
    218: {
        n: "BrtEndPCDSCSet"
    },
    219: {
        n: "BrtBeginPCDFGroup"
    },
    220: {
        n: "BrtEndPCDFGroup"
    },
    221: {
        n: "BrtBeginPCDFGItems"
    },
    222: {
        n: "BrtEndPCDFGItems"
    },
    223: {
        n: "BrtBeginPCDFGRange"
    },
    224: {
        n: "BrtEndPCDFGRange"
    },
    225: {
        n: "BrtBeginPCDFGDiscrete"
    },
    226: {
        n: "BrtEndPCDFGDiscrete"
    },
    227: {
        n: "BrtBeginPCDSDTupleCache"
    },
    228: {
        n: "BrtEndPCDSDTupleCache"
    },
    229: {
        n: "BrtBeginPCDSDTCEntries"
    },
    230: {
        n: "BrtEndPCDSDTCEntries"
    },
    231: {
        n: "BrtBeginPCDSDTCEMembers"
    },
    232: {
        n: "BrtEndPCDSDTCEMembers"
    },
    233: {
        n: "BrtBeginPCDSDTCEMember"
    },
    234: {
        n: "BrtEndPCDSDTCEMember"
    },
    235: {
        n: "BrtBeginPCDSDTCQueries"
    },
    236: {
        n: "BrtEndPCDSDTCQueries"
    },
    237: {
        n: "BrtBeginPCDSDTCQuery"
    },
    238: {
        n: "BrtEndPCDSDTCQuery"
    },
    239: {
        n: "BrtBeginPCDSDTCSets"
    },
    240: {
        n: "BrtEndPCDSDTCSets"
    },
    241: {
        n: "BrtBeginPCDSDTCSet"
    },
    242: {
        n: "BrtEndPCDSDTCSet"
    },
    243: {
        n: "BrtBeginPCDCalcItems"
    },
    244: {
        n: "BrtEndPCDCalcItems"
    },
    245: {
        n: "BrtBeginPCDCalcItem"
    },
    246: {
        n: "BrtEndPCDCalcItem"
    },
    247: {
        n: "BrtBeginPRule"
    },
    248: {
        n: "BrtEndPRule"
    },
    249: {
        n: "BrtBeginPRFilters"
    },
    250: {
        n: "BrtEndPRFilters"
    },
    251: {
        n: "BrtBeginPRFilter"
    },
    252: {
        n: "BrtEndPRFilter"
    },
    253: {
        n: "BrtBeginPNames"
    },
    254: {
        n: "BrtEndPNames"
    },
    255: {
        n: "BrtBeginPName"
    },
    256: {
        n: "BrtEndPName"
    },
    257: {
        n: "BrtBeginPNPairs"
    },
    258: {
        n: "BrtEndPNPairs"
    },
    259: {
        n: "BrtBeginPNPair"
    },
    260: {
        n: "BrtEndPNPair"
    },
    261: {
        n: "BrtBeginECWebProps"
    },
    262: {
        n: "BrtEndECWebProps"
    },
    263: {
        n: "BrtBeginEcWpTables"
    },
    264: {
        n: "BrtEndECWPTables"
    },
    265: {
        n: "BrtBeginECParams"
    },
    266: {
        n: "BrtEndECParams"
    },
    267: {
        n: "BrtBeginECParam"
    },
    268: {
        n: "BrtEndECParam"
    },
    269: {
        n: "BrtBeginPCDKPIs"
    },
    270: {
        n: "BrtEndPCDKPIs"
    },
    271: {
        n: "BrtBeginPCDKPI"
    },
    272: {
        n: "BrtEndPCDKPI"
    },
    273: {
        n: "BrtBeginDims"
    },
    274: {
        n: "BrtEndDims"
    },
    275: {
        n: "BrtBeginDim"
    },
    276: {
        n: "BrtEndDim"
    },
    277: {
        n: "BrtIndexPartEnd"
    },
    278: {
        n: "BrtBeginStyleSheet"
    },
    279: {
        n: "BrtEndStyleSheet"
    },
    280: {
        n: "BrtBeginSXView"
    },
    281: {
        n: "BrtEndSXVI"
    },
    282: {
        n: "BrtBeginSXVI"
    },
    283: {
        n: "BrtBeginSXVIs"
    },
    284: {
        n: "BrtEndSXVIs"
    },
    285: {
        n: "BrtBeginSXVD"
    },
    286: {
        n: "BrtEndSXVD"
    },
    287: {
        n: "BrtBeginSXVDs"
    },
    288: {
        n: "BrtEndSXVDs"
    },
    289: {
        n: "BrtBeginSXPI"
    },
    290: {
        n: "BrtEndSXPI"
    },
    291: {
        n: "BrtBeginSXPIs"
    },
    292: {
        n: "BrtEndSXPIs"
    },
    293: {
        n: "BrtBeginSXDI"
    },
    294: {
        n: "BrtEndSXDI"
    },
    295: {
        n: "BrtBeginSXDIs"
    },
    296: {
        n: "BrtEndSXDIs"
    },
    297: {
        n: "BrtBeginSXLI"
    },
    298: {
        n: "BrtEndSXLI"
    },
    299: {
        n: "BrtBeginSXLIRws"
    },
    300: {
        n: "BrtEndSXLIRws"
    },
    301: {
        n: "BrtBeginSXLICols"
    },
    302: {
        n: "BrtEndSXLICols"
    },
    303: {
        n: "BrtBeginSXFormat"
    },
    304: {
        n: "BrtEndSXFormat"
    },
    305: {
        n: "BrtBeginSXFormats"
    },
    306: {
        n: "BrtEndSxFormats"
    },
    307: {
        n: "BrtBeginSxSelect"
    },
    308: {
        n: "BrtEndSxSelect"
    },
    309: {
        n: "BrtBeginISXVDRws"
    },
    310: {
        n: "BrtEndISXVDRws"
    },
    311: {
        n: "BrtBeginISXVDCols"
    },
    312: {
        n: "BrtEndISXVDCols"
    },
    313: {
        n: "BrtEndSXLocation"
    },
    314: {
        n: "BrtBeginSXLocation"
    },
    315: {
        n: "BrtEndSXView"
    },
    316: {
        n: "BrtBeginSXTHs"
    },
    317: {
        n: "BrtEndSXTHs"
    },
    318: {
        n: "BrtBeginSXTH"
    },
    319: {
        n: "BrtEndSXTH"
    },
    320: {
        n: "BrtBeginISXTHRws"
    },
    321: {
        n: "BrtEndISXTHRws"
    },
    322: {
        n: "BrtBeginISXTHCols"
    },
    323: {
        n: "BrtEndISXTHCols"
    },
    324: {
        n: "BrtBeginSXTDMPS"
    },
    325: {
        n: "BrtEndSXTDMPs"
    },
    326: {
        n: "BrtBeginSXTDMP"
    },
    327: {
        n: "BrtEndSXTDMP"
    },
    328: {
        n: "BrtBeginSXTHItems"
    },
    329: {
        n: "BrtEndSXTHItems"
    },
    330: {
        n: "BrtBeginSXTHItem"
    },
    331: {
        n: "BrtEndSXTHItem"
    },
    332: {
        n: "BrtBeginMetadata"
    },
    333: {
        n: "BrtEndMetadata"
    },
    334: {
        n: "BrtBeginEsmdtinfo"
    },
    335: {
        n: "BrtMdtinfo"
    },
    336: {
        n: "BrtEndEsmdtinfo"
    },
    337: {
        n: "BrtBeginEsmdb"
    },
    338: {
        n: "BrtEndEsmdb"
    },
    339: {
        n: "BrtBeginEsfmd"
    },
    340: {
        n: "BrtEndEsfmd"
    },
    341: {
        n: "BrtBeginSingleCells"
    },
    342: {
        n: "BrtEndSingleCells"
    },
    343: {
        n: "BrtBeginList"
    },
    344: {
        n: "BrtEndList"
    },
    345: {
        n: "BrtBeginListCols"
    },
    346: {
        n: "BrtEndListCols"
    },
    347: {
        n: "BrtBeginListCol"
    },
    348: {
        n: "BrtEndListCol"
    },
    349: {
        n: "BrtBeginListXmlCPr"
    },
    350: {
        n: "BrtEndListXmlCPr"
    },
    351: {
        n: "BrtListCCFmla"
    },
    352: {
        n: "BrtListTrFmla"
    },
    353: {
        n: "BrtBeginExternals"
    },
    354: {
        n: "BrtEndExternals"
    },
    355: {
        n: "BrtSupBookSrc",
        f: Tr
    },
    357: {
        n: "BrtSupSelf"
    },
    358: {
        n: "BrtSupSame"
    },
    359: {
        n: "BrtSupTabs"
    },
    360: {
        n: "BrtBeginSupBook"
    },
    361: {
        n: "BrtPlaceholderName"
    },
    362: {
        n: "BrtExternSheet",
        f: pa
    },
    363: {
        n: "BrtExternTableStart"
    },
    364: {
        n: "BrtExternTableEnd"
    },
    366: {
        n: "BrtExternRowHdr"
    },
    367: {
        n: "BrtExternCellBlank"
    },
    368: {
        n: "BrtExternCellReal"
    },
    369: {
        n: "BrtExternCellBool"
    },
    370: {
        n: "BrtExternCellError"
    },
    371: {
        n: "BrtExternCellString"
    },
    372: {
        n: "BrtBeginEsmdx"
    },
    373: {
        n: "BrtEndEsmdx"
    },
    374: {
        n: "BrtBeginMdxSet"
    },
    375: {
        n: "BrtEndMdxSet"
    },
    376: {
        n: "BrtBeginMdxMbrProp"
    },
    377: {
        n: "BrtEndMdxMbrProp"
    },
    378: {
        n: "BrtBeginMdxKPI"
    },
    379: {
        n: "BrtEndMdxKPI"
    },
    380: {
        n: "BrtBeginEsstr"
    },
    381: {
        n: "BrtEndEsstr"
    },
    382: {
        n: "BrtBeginPRFItem"
    },
    383: {
        n: "BrtEndPRFItem"
    },
    384: {
        n: "BrtBeginPivotCacheIDs"
    },
    385: {
        n: "BrtEndPivotCacheIDs"
    },
    386: {
        n: "BrtBeginPivotCacheID"
    },
    387: {
        n: "BrtEndPivotCacheID"
    },
    388: {
        n: "BrtBeginISXVIs"
    },
    389: {
        n: "BrtEndISXVIs"
    },
    390: {
        n: "BrtBeginColInfos"
    },
    391: {
        n: "BrtEndColInfos"
    },
    392: {
        n: "BrtBeginRwBrk"
    },
    393: {
        n: "BrtEndRwBrk"
    },
    394: {
        n: "BrtBeginColBrk"
    },
    395: {
        n: "BrtEndColBrk"
    },
    396: {
        n: "BrtBrk"
    },
    397: {
        n: "BrtUserBookView"
    },
    398: {
        n: "BrtInfo"
    },
    399: {
        n: "BrtCUsr"
    },
    400: {
        n: "BrtUsr"
    },
    401: {
        n: "BrtBeginUsers"
    },
    403: {
        n: "BrtEOF"
    },
    404: {
        n: "BrtUCR"
    },
    405: {
        n: "BrtRRInsDel"
    },
    406: {
        n: "BrtRREndInsDel"
    },
    407: {
        n: "BrtRRMove"
    },
    408: {
        n: "BrtRREndMove"
    },
    409: {
        n: "BrtRRChgCell"
    },
    410: {
        n: "BrtRREndChgCell"
    },
    411: {
        n: "BrtRRHeader"
    },
    412: {
        n: "BrtRRUserView"
    },
    413: {
        n: "BrtRRRenSheet"
    },
    414: {
        n: "BrtRRInsertSh"
    },
    415: {
        n: "BrtRRDefName"
    },
    416: {
        n: "BrtRRNote"
    },
    417: {
        n: "BrtRRConflict"
    },
    418: {
        n: "BrtRRTQSIF"
    },
    419: {
        n: "BrtRRFormat"
    },
    420: {
        n: "BrtRREndFormat"
    },
    421: {
        n: "BrtRRAutoFmt"
    },
    422: {
        n: "BrtBeginUserShViews"
    },
    423: {
        n: "BrtBeginUserShView"
    },
    424: {
        n: "BrtEndUserShView"
    },
    425: {
        n: "BrtEndUserShViews"
    },
    426: {
        n: "BrtArrFmla",
        f: function(e, t, r) {
            var n = e.l + t,
                a = Ir(e),
                i = e.read_shift(1),
                s = [a];
            if (s[2] = i, r.cellFormula) {
                var o = Us(e, n - e.l, r);
                s[1] = o
            } else e.l = n;
            return s
        }
    },
    427: {
        n: "BrtShrFmla",
        f: function(e, t, r) {
            var n = e.l + t,
                a = [Dr(e, 16)];
            if (r.cellFormula) {
                var i = Ws(e, n - e.l, r);
                a[1] = i, e.l = n
            } else e.l = n;
            return a
        }
    },
    428: {
        n: "BrtTable"
    },
    429: {
        n: "BrtBeginExtConnections"
    },
    430: {
        n: "BrtEndExtConnections"
    },
    431: {
        n: "BrtBeginPCDCalcMems"
    },
    432: {
        n: "BrtEndPCDCalcMems"
    },
    433: {
        n: "BrtBeginPCDCalcMem"
    },
    434: {
        n: "BrtEndPCDCalcMem"
    },
    435: {
        n: "BrtBeginPCDHGLevels"
    },
    436: {
        n: "BrtEndPCDHGLevels"
    },
    437: {
        n: "BrtBeginPCDHGLevel"
    },
    438: {
        n: "BrtEndPCDHGLevel"
    },
    439: {
        n: "BrtBeginPCDHGLGroups"
    },
    440: {
        n: "BrtEndPCDHGLGroups"
    },
    441: {
        n: "BrtBeginPCDHGLGroup"
    },
    442: {
        n: "BrtEndPCDHGLGroup"
    },
    443: {
        n: "BrtBeginPCDHGLGMembers"
    },
    444: {
        n: "BrtEndPCDHGLGMembers"
    },
    445: {
        n: "BrtBeginPCDHGLGMember"
    },
    446: {
        n: "BrtEndPCDHGLGMember"
    },
    447: {
        n: "BrtBeginQSI"
    },
    448: {
        n: "BrtEndQSI"
    },
    449: {
        n: "BrtBeginQSIR"
    },
    450: {
        n: "BrtEndQSIR"
    },
    451: {
        n: "BrtBeginDeletedNames"
    },
    452: {
        n: "BrtEndDeletedNames"
    },
    453: {
        n: "BrtBeginDeletedName"
    },
    454: {
        n: "BrtEndDeletedName"
    },
    455: {
        n: "BrtBeginQSIFs"
    },
    456: {
        n: "BrtEndQSIFs"
    },
    457: {
        n: "BrtBeginQSIF"
    },
    458: {
        n: "BrtEndQSIF"
    },
    459: {
        n: "BrtBeginAutoSortScope"
    },
    460: {
        n: "BrtEndAutoSortScope"
    },
    461: {
        n: "BrtBeginConditionalFormatting"
    },
    462: {
        n: "BrtEndConditionalFormatting"
    },
    463: {
        n: "BrtBeginCFRule"
    },
    464: {
        n: "BrtEndCFRule"
    },
    465: {
        n: "BrtBeginIconSet"
    },
    466: {
        n: "BrtEndIconSet"
    },
    467: {
        n: "BrtBeginDatabar"
    },
    468: {
        n: "BrtEndDatabar"
    },
    469: {
        n: "BrtBeginColorScale"
    },
    470: {
        n: "BrtEndColorScale"
    },
    471: {
        n: "BrtCFVO"
    },
    472: {
        n: "BrtExternValueMeta"
    },
    473: {
        n: "BrtBeginColorPalette"
    },
    474: {
        n: "BrtEndColorPalette"
    },
    475: {
        n: "BrtIndexedColor"
    },
    476: {
        n: "BrtMargins",
        f: function(e) {
            var t = {};
            return Bo.forEach((function(r) {
                t[r] = Pr(e)
            })), t
        }
    },
    477: {
        n: "BrtPrintOptions"
    },
    478: {
        n: "BrtPageSetup"
    },
    479: {
        n: "BrtBeginHeaderFooter"
    },
    480: {
        n: "BrtEndHeaderFooter"
    },
    481: {
        n: "BrtBeginSXCrtFormat"
    },
    482: {
        n: "BrtEndSXCrtFormat"
    },
    483: {
        n: "BrtBeginSXCrtFormats"
    },
    484: {
        n: "BrtEndSXCrtFormats"
    },
    485: {
        n: "BrtWsFmtInfo",
        f: function() {}
    },
    486: {
        n: "BrtBeginMgs"
    },
    487: {
        n: "BrtEndMGs"
    },
    488: {
        n: "BrtBeginMGMaps"
    },
    489: {
        n: "BrtEndMGMaps"
    },
    490: {
        n: "BrtBeginMG"
    },
    491: {
        n: "BrtEndMG"
    },
    492: {
        n: "BrtBeginMap"
    },
    493: {
        n: "BrtEndMap"
    },
    494: {
        n: "BrtHLink",
        f: function(e, t) {
            var r = e.l + t,
                n = Dr(e, 16),
                a = Cr(e),
                i = hr(e),
                s = hr(e),
                o = hr(e);
            e.l = r;
            var l = {
                rfx: n,
                relId: a,
                loc: i,
                display: o
            };
            return s && (l.Tooltip = s), l
        }
    },
    495: {
        n: "BrtBeginDCon"
    },
    496: {
        n: "BrtEndDCon"
    },
    497: {
        n: "BrtBeginDRefs"
    },
    498: {
        n: "BrtEndDRefs"
    },
    499: {
        n: "BrtDRef"
    },
    500: {
        n: "BrtBeginScenMan"
    },
    501: {
        n: "BrtEndScenMan"
    },
    502: {
        n: "BrtBeginSct"
    },
    503: {
        n: "BrtEndSct"
    },
    504: {
        n: "BrtSlc"
    },
    505: {
        n: "BrtBeginDXFs"
    },
    506: {
        n: "BrtEndDXFs"
    },
    507: {
        n: "BrtDXF"
    },
    508: {
        n: "BrtBeginTableStyles"
    },
    509: {
        n: "BrtEndTableStyles"
    },
    510: {
        n: "BrtBeginTableStyle"
    },
    511: {
        n: "BrtEndTableStyle"
    },
    512: {
        n: "BrtTableStyleElement"
    },
    513: {
        n: "BrtTableStyleClient"
    },
    514: {
        n: "BrtBeginVolDeps"
    },
    515: {
        n: "BrtEndVolDeps"
    },
    516: {
        n: "BrtBeginVolType"
    },
    517: {
        n: "BrtEndVolType"
    },
    518: {
        n: "BrtBeginVolMain"
    },
    519: {
        n: "BrtEndVolMain"
    },
    520: {
        n: "BrtBeginVolTopic"
    },
    521: {
        n: "BrtEndVolTopic"
    },
    522: {
        n: "BrtVolSubtopic"
    },
    523: {
        n: "BrtVolRef"
    },
    524: {
        n: "BrtVolNum"
    },
    525: {
        n: "BrtVolErr"
    },
    526: {
        n: "BrtVolStr"
    },
    527: {
        n: "BrtVolBool"
    },
    528: {
        n: "BrtBeginCalcChain$"
    },
    529: {
        n: "BrtEndCalcChain$"
    },
    530: {
        n: "BrtBeginSortState"
    },
    531: {
        n: "BrtEndSortState"
    },
    532: {
        n: "BrtBeginSortCond"
    },
    533: {
        n: "BrtEndSortCond"
    },
    534: {
        n: "BrtBookProtection"
    },
    535: {
        n: "BrtSheetProtection"
    },
    536: {
        n: "BrtRangeProtection"
    },
    537: {
        n: "BrtPhoneticInfo"
    },
    538: {
        n: "BrtBeginECTxtWiz"
    },
    539: {
        n: "BrtEndECTxtWiz"
    },
    540: {
        n: "BrtBeginECTWFldInfoLst"
    },
    541: {
        n: "BrtEndECTWFldInfoLst"
    },
    542: {
        n: "BrtBeginECTwFldInfo"
    },
    548: {
        n: "BrtFileSharing"
    },
    549: {
        n: "BrtOleSize"
    },
    550: {
        n: "BrtDrawing",
        f: Tr
    },
    551: {
        n: "BrtLegacyDrawing"
    },
    552: {
        n: "BrtLegacyDrawingHF"
    },
    553: {
        n: "BrtWebOpt"
    },
    554: {
        n: "BrtBeginWebPubItems"
    },
    555: {
        n: "BrtEndWebPubItems"
    },
    556: {
        n: "BrtBeginWebPubItem"
    },
    557: {
        n: "BrtEndWebPubItem"
    },
    558: {
        n: "BrtBeginSXCondFmt"
    },
    559: {
        n: "BrtEndSXCondFmt"
    },
    560: {
        n: "BrtBeginSXCondFmts"
    },
    561: {
        n: "BrtEndSXCondFmts"
    },
    562: {
        n: "BrtBkHim"
    },
    564: {
        n: "BrtColor"
    },
    565: {
        n: "BrtBeginIndexedColors"
    },
    566: {
        n: "BrtEndIndexedColors"
    },
    569: {
        n: "BrtBeginMRUColors"
    },
    570: {
        n: "BrtEndMRUColors"
    },
    572: {
        n: "BrtMRUColor"
    },
    573: {
        n: "BrtBeginDVals"
    },
    574: {
        n: "BrtEndDVals"
    },
    577: {
        n: "BrtSupNameStart"
    },
    578: {
        n: "BrtSupNameValueStart"
    },
    579: {
        n: "BrtSupNameValueEnd"
    },
    580: {
        n: "BrtSupNameNum"
    },
    581: {
        n: "BrtSupNameErr"
    },
    582: {
        n: "BrtSupNameSt"
    },
    583: {
        n: "BrtSupNameNil"
    },
    584: {
        n: "BrtSupNameBool"
    },
    585: {
        n: "BrtSupNameFmla"
    },
    586: {
        n: "BrtSupNameBits"
    },
    587: {
        n: "BrtSupNameEnd"
    },
    588: {
        n: "BrtEndSupBook"
    },
    589: {
        n: "BrtCellSmartTagProperty"
    },
    590: {
        n: "BrtBeginCellSmartTag"
    },
    591: {
        n: "BrtEndCellSmartTag"
    },
    592: {
        n: "BrtBeginCellSmartTags"
    },
    593: {
        n: "BrtEndCellSmartTags"
    },
    594: {
        n: "BrtBeginSmartTags"
    },
    595: {
        n: "BrtEndSmartTags"
    },
    596: {
        n: "BrtSmartTagType"
    },
    597: {
        n: "BrtBeginSmartTagTypes"
    },
    598: {
        n: "BrtEndSmartTagTypes"
    },
    599: {
        n: "BrtBeginSXFilters"
    },
    600: {
        n: "BrtEndSXFilters"
    },
    601: {
        n: "BrtBeginSXFILTER"
    },
    602: {
        n: "BrtEndSXFilter"
    },
    603: {
        n: "BrtBeginFills"
    },
    604: {
        n: "BrtEndFills"
    },
    605: {
        n: "BrtBeginCellWatches"
    },
    606: {
        n: "BrtEndCellWatches"
    },
    607: {
        n: "BrtCellWatch"
    },
    608: {
        n: "BrtBeginCRErrs"
    },
    609: {
        n: "BrtEndCRErrs"
    },
    610: {
        n: "BrtCrashRecErr"
    },
    611: {
        n: "BrtBeginFonts"
    },
    612: {
        n: "BrtEndFonts"
    },
    613: {
        n: "BrtBeginBorders"
    },
    614: {
        n: "BrtEndBorders"
    },
    615: {
        n: "BrtBeginFmts"
    },
    616: {
        n: "BrtEndFmts"
    },
    617: {
        n: "BrtBeginCellXFs"
    },
    618: {
        n: "BrtEndCellXFs"
    },
    619: {
        n: "BrtBeginStyles"
    },
    620: {
        n: "BrtEndStyles"
    },
    625: {
        n: "BrtBigName"
    },
    626: {
        n: "BrtBeginCellStyleXFs"
    },
    627: {
        n: "BrtEndCellStyleXFs"
    },
    628: {
        n: "BrtBeginComments"
    },
    629: {
        n: "BrtEndComments"
    },
    630: {
        n: "BrtBeginCommentAuthors"
    },
    631: {
        n: "BrtEndCommentAuthors"
    },
    632: {
        n: "BrtCommentAuthor",
        f: Gi
    },
    633: {
        n: "BrtBeginCommentList"
    },
    634: {
        n: "BrtEndCommentList"
    },
    635: {
        n: "BrtBeginComment",
        f: function(e) {
            var t = {};
            t.iauthor = e.read_shift(4);
            var r = Dr(e, 16);
            return t.rfx = r.s, t.ref = tr(r.s), e.l += 16, t
        }
    },
    636: {
        n: "BrtEndComment"
    },
    637: {
        n: "BrtCommentText",
        f: mr
    },
    638: {
        n: "BrtBeginOleObjects"
    },
    639: {
        n: "BrtOleObject"
    },
    640: {
        n: "BrtEndOleObjects"
    },
    641: {
        n: "BrtBeginSxrules"
    },
    642: {
        n: "BrtEndSxRules"
    },
    643: {
        n: "BrtBeginActiveXControls"
    },
    644: {
        n: "BrtActiveX"
    },
    645: {
        n: "BrtEndActiveXControls"
    },
    646: {
        n: "BrtBeginPCDSDTCEMembersSortBy"
    },
    648: {
        n: "BrtBeginCellIgnoreECs"
    },
    649: {
        n: "BrtCellIgnoreEC"
    },
    650: {
        n: "BrtEndCellIgnoreECs"
    },
    651: {
        n: "BrtCsProp",
        f: function(e, t) {
            return e.l += 10, {
                name: hr(e)
            }
        }
    },
    652: {
        n: "BrtCsPageSetup"
    },
    653: {
        n: "BrtBeginUserCsViews"
    },
    654: {
        n: "BrtEndUserCsViews"
    },
    655: {
        n: "BrtBeginUserCsView"
    },
    656: {
        n: "BrtEndUserCsView"
    },
    657: {
        n: "BrtBeginPcdSFCIEntries"
    },
    658: {
        n: "BrtEndPCDSFCIEntries"
    },
    659: {
        n: "BrtPCDSFCIEntry"
    },
    660: {
        n: "BrtBeginListParts"
    },
    661: {
        n: "BrtListPart"
    },
    662: {
        n: "BrtEndListParts"
    },
    663: {
        n: "BrtSheetCalcProp"
    },
    664: {
        n: "BrtBeginFnGroup"
    },
    665: {
        n: "BrtFnGroup"
    },
    666: {
        n: "BrtEndFnGroup"
    },
    667: {
        n: "BrtSupAddin"
    },
    668: {
        n: "BrtSXTDMPOrder"
    },
    669: {
        n: "BrtCsProtection"
    },
    671: {
        n: "BrtBeginWsSortMap"
    },
    672: {
        n: "BrtEndWsSortMap"
    },
    673: {
        n: "BrtBeginRRSort"
    },
    674: {
        n: "BrtEndRRSort"
    },
    675: {
        n: "BrtRRSortItem"
    },
    676: {
        n: "BrtFileSharingIso"
    },
    677: {
        n: "BrtBookProtectionIso"
    },
    678: {
        n: "BrtSheetProtectionIso"
    },
    679: {
        n: "BrtCsProtectionIso"
    },
    680: {
        n: "BrtRangeProtectionIso"
    },
    681: {
        n: "BrtDValList"
    },
    1024: {
        n: "BrtRwDescent"
    },
    1025: {
        n: "BrtKnownFonts"
    },
    1026: {
        n: "BrtBeginSXTupleSet"
    },
    1027: {
        n: "BrtEndSXTupleSet"
    },
    1028: {
        n: "BrtBeginSXTupleSetHeader"
    },
    1029: {
        n: "BrtEndSXTupleSetHeader"
    },
    1030: {
        n: "BrtSXTupleSetHeaderItem"
    },
    1031: {
        n: "BrtBeginSXTupleSetData"
    },
    1032: {
        n: "BrtEndSXTupleSetData"
    },
    1033: {
        n: "BrtBeginSXTupleSetRow"
    },
    1034: {
        n: "BrtEndSXTupleSetRow"
    },
    1035: {
        n: "BrtSXTupleSetRowItem"
    },
    1036: {
        n: "BrtNameExt"
    },
    1037: {
        n: "BrtPCDH14"
    },
    1038: {
        n: "BrtBeginPCDCalcMem14"
    },
    1039: {
        n: "BrtEndPCDCalcMem14"
    },
    1040: {
        n: "BrtSXTH14"
    },
    1041: {
        n: "BrtBeginSparklineGroup"
    },
    1042: {
        n: "BrtEndSparklineGroup"
    },
    1043: {
        n: "BrtSparkline"
    },
    1044: {
        n: "BrtSXDI14"
    },
    1045: {
        n: "BrtWsFmtInfoEx14"
    },
    1046: {
        n: "BrtBeginConditionalFormatting14"
    },
    1047: {
        n: "BrtEndConditionalFormatting14"
    },
    1048: {
        n: "BrtBeginCFRule14"
    },
    1049: {
        n: "BrtEndCFRule14"
    },
    1050: {
        n: "BrtCFVO14"
    },
    1051: {
        n: "BrtBeginDatabar14"
    },
    1052: {
        n: "BrtBeginIconSet14"
    },
    1053: {
        n: "BrtDVal14",
        f: function() {}
    },
    1054: {
        n: "BrtBeginDVals14"
    },
    1055: {
        n: "BrtColor14"
    },
    1056: {
        n: "BrtBeginSparklines"
    },
    1057: {
        n: "BrtEndSparklines"
    },
    1058: {
        n: "BrtBeginSparklineGroups"
    },
    1059: {
        n: "BrtEndSparklineGroups"
    },
    1061: {
        n: "BrtSXVD14"
    },
    1062: {
        n: "BrtBeginSXView14"
    },
    1063: {
        n: "BrtEndSXView14"
    },
    1064: {
        n: "BrtBeginSXView16"
    },
    1065: {
        n: "BrtEndSXView16"
    },
    1066: {
        n: "BrtBeginPCD14"
    },
    1067: {
        n: "BrtEndPCD14"
    },
    1068: {
        n: "BrtBeginExtConn14"
    },
    1069: {
        n: "BrtEndExtConn14"
    },
    1070: {
        n: "BrtBeginSlicerCacheIDs"
    },
    1071: {
        n: "BrtEndSlicerCacheIDs"
    },
    1072: {
        n: "BrtBeginSlicerCacheID"
    },
    1073: {
        n: "BrtEndSlicerCacheID"
    },
    1075: {
        n: "BrtBeginSlicerCache"
    },
    1076: {
        n: "BrtEndSlicerCache"
    },
    1077: {
        n: "BrtBeginSlicerCacheDef"
    },
    1078: {
        n: "BrtEndSlicerCacheDef"
    },
    1079: {
        n: "BrtBeginSlicersEx"
    },
    1080: {
        n: "BrtEndSlicersEx"
    },
    1081: {
        n: "BrtBeginSlicerEx"
    },
    1082: {
        n: "BrtEndSlicerEx"
    },
    1083: {
        n: "BrtBeginSlicer"
    },
    1084: {
        n: "BrtEndSlicer"
    },
    1085: {
        n: "BrtSlicerCachePivotTables"
    },
    1086: {
        n: "BrtBeginSlicerCacheOlapImpl"
    },
    1087: {
        n: "BrtEndSlicerCacheOlapImpl"
    },
    1088: {
        n: "BrtBeginSlicerCacheLevelsData"
    },
    1089: {
        n: "BrtEndSlicerCacheLevelsData"
    },
    1090: {
        n: "BrtBeginSlicerCacheLevelData"
    },
    1091: {
        n: "BrtEndSlicerCacheLevelData"
    },
    1092: {
        n: "BrtBeginSlicerCacheSiRanges"
    },
    1093: {
        n: "BrtEndSlicerCacheSiRanges"
    },
    1094: {
        n: "BrtBeginSlicerCacheSiRange"
    },
    1095: {
        n: "BrtEndSlicerCacheSiRange"
    },
    1096: {
        n: "BrtSlicerCacheOlapItem"
    },
    1097: {
        n: "BrtBeginSlicerCacheSelections"
    },
    1098: {
        n: "BrtSlicerCacheSelection"
    },
    1099: {
        n: "BrtEndSlicerCacheSelections"
    },
    1100: {
        n: "BrtBeginSlicerCacheNative"
    },
    1101: {
        n: "BrtEndSlicerCacheNative"
    },
    1102: {
        n: "BrtSlicerCacheNativeItem"
    },
    1103: {
        n: "BrtRangeProtection14"
    },
    1104: {
        n: "BrtRangeProtectionIso14"
    },
    1105: {
        n: "BrtCellIgnoreEC14"
    },
    1111: {
        n: "BrtList14"
    },
    1112: {
        n: "BrtCFIcon"
    },
    1113: {
        n: "BrtBeginSlicerCachesPivotCacheIDs"
    },
    1114: {
        n: "BrtEndSlicerCachesPivotCacheIDs"
    },
    1115: {
        n: "BrtBeginSlicers"
    },
    1116: {
        n: "BrtEndSlicers"
    },
    1117: {
        n: "BrtWbProp14"
    },
    1118: {
        n: "BrtBeginSXEdit"
    },
    1119: {
        n: "BrtEndSXEdit"
    },
    1120: {
        n: "BrtBeginSXEdits"
    },
    1121: {
        n: "BrtEndSXEdits"
    },
    1122: {
        n: "BrtBeginSXChange"
    },
    1123: {
        n: "BrtEndSXChange"
    },
    1124: {
        n: "BrtBeginSXChanges"
    },
    1125: {
        n: "BrtEndSXChanges"
    },
    1126: {
        n: "BrtSXTupleItems"
    },
    1128: {
        n: "BrtBeginSlicerStyle"
    },
    1129: {
        n: "BrtEndSlicerStyle"
    },
    1130: {
        n: "BrtSlicerStyleElement"
    },
    1131: {
        n: "BrtBeginStyleSheetExt14"
    },
    1132: {
        n: "BrtEndStyleSheetExt14"
    },
    1133: {
        n: "BrtBeginSlicerCachesPivotCacheID"
    },
    1134: {
        n: "BrtEndSlicerCachesPivotCacheID"
    },
    1135: {
        n: "BrtBeginConditionalFormattings"
    },
    1136: {
        n: "BrtEndConditionalFormattings"
    },
    1137: {
        n: "BrtBeginPCDCalcMemExt"
    },
    1138: {
        n: "BrtEndPCDCalcMemExt"
    },
    1139: {
        n: "BrtBeginPCDCalcMemsExt"
    },
    1140: {
        n: "BrtEndPCDCalcMemsExt"
    },
    1141: {
        n: "BrtPCDField14"
    },
    1142: {
        n: "BrtBeginSlicerStyles"
    },
    1143: {
        n: "BrtEndSlicerStyles"
    },
    1144: {
        n: "BrtBeginSlicerStyleElements"
    },
    1145: {
        n: "BrtEndSlicerStyleElements"
    },
    1146: {
        n: "BrtCFRuleExt"
    },
    1147: {
        n: "BrtBeginSXCondFmt14"
    },
    1148: {
        n: "BrtEndSXCondFmt14"
    },
    1149: {
        n: "BrtBeginSXCondFmts14"
    },
    1150: {
        n: "BrtEndSXCondFmts14"
    },
    1152: {
        n: "BrtBeginSortCond14"
    },
    1153: {
        n: "BrtEndSortCond14"
    },
    1154: {
        n: "BrtEndDVals14"
    },
    1155: {
        n: "BrtEndIconSet14"
    },
    1156: {
        n: "BrtEndDatabar14"
    },
    1157: {
        n: "BrtBeginColorScale14"
    },
    1158: {
        n: "BrtEndColorScale14"
    },
    1159: {
        n: "BrtBeginSxrules14"
    },
    1160: {
        n: "BrtEndSxrules14"
    },
    1161: {
        n: "BrtBeginPRule14"
    },
    1162: {
        n: "BrtEndPRule14"
    },
    1163: {
        n: "BrtBeginPRFilters14"
    },
    1164: {
        n: "BrtEndPRFilters14"
    },
    1165: {
        n: "BrtBeginPRFilter14"
    },
    1166: {
        n: "BrtEndPRFilter14"
    },
    1167: {
        n: "BrtBeginPRFItem14"
    },
    1168: {
        n: "BrtEndPRFItem14"
    },
    1169: {
        n: "BrtBeginCellIgnoreECs14"
    },
    1170: {
        n: "BrtEndCellIgnoreECs14"
    },
    1171: {
        n: "BrtDxf14"
    },
    1172: {
        n: "BrtBeginDxF14s"
    },
    1173: {
        n: "BrtEndDxf14s"
    },
    1177: {
        n: "BrtFilter14"
    },
    1178: {
        n: "BrtBeginCustomFilters14"
    },
    1180: {
        n: "BrtCustomFilter14"
    },
    1181: {
        n: "BrtIconFilter14"
    },
    1182: {
        n: "BrtPivotCacheConnectionName"
    },
    2048: {
        n: "BrtBeginDecoupledPivotCacheIDs"
    },
    2049: {
        n: "BrtEndDecoupledPivotCacheIDs"
    },
    2050: {
        n: "BrtDecoupledPivotCacheID"
    },
    2051: {
        n: "BrtBeginPivotTableRefs"
    },
    2052: {
        n: "BrtEndPivotTableRefs"
    },
    2053: {
        n: "BrtPivotTableRef"
    },
    2054: {
        n: "BrtSlicerCacheBookPivotTables"
    },
    2055: {
        n: "BrtBeginSxvcells"
    },
    2056: {
        n: "BrtEndSxvcells"
    },
    2057: {
        n: "BrtBeginSxRow"
    },
    2058: {
        n: "BrtEndSxRow"
    },
    2060: {
        n: "BrtPcdCalcMem15"
    },
    2067: {
        n: "BrtQsi15"
    },
    2068: {
        n: "BrtBeginWebExtensions"
    },
    2069: {
        n: "BrtEndWebExtensions"
    },
    2070: {
        n: "BrtWebExtension"
    },
    2071: {
        n: "BrtAbsPath15"
    },
    2072: {
        n: "BrtBeginPivotTableUISettings"
    },
    2073: {
        n: "BrtEndPivotTableUISettings"
    },
    2075: {
        n: "BrtTableSlicerCacheIDs"
    },
    2076: {
        n: "BrtTableSlicerCacheID"
    },
    2077: {
        n: "BrtBeginTableSlicerCache"
    },
    2078: {
        n: "BrtEndTableSlicerCache"
    },
    2079: {
        n: "BrtSxFilter15"
    },
    2080: {
        n: "BrtBeginTimelineCachePivotCacheIDs"
    },
    2081: {
        n: "BrtEndTimelineCachePivotCacheIDs"
    },
    2082: {
        n: "BrtTimelineCachePivotCacheID"
    },
    2083: {
        n: "BrtBeginTimelineCacheIDs"
    },
    2084: {
        n: "BrtEndTimelineCacheIDs"
    },
    2085: {
        n: "BrtBeginTimelineCacheID"
    },
    2086: {
        n: "BrtEndTimelineCacheID"
    },
    2087: {
        n: "BrtBeginTimelinesEx"
    },
    2088: {
        n: "BrtEndTimelinesEx"
    },
    2089: {
        n: "BrtBeginTimelineEx"
    },
    2090: {
        n: "BrtEndTimelineEx"
    },
    2091: {
        n: "BrtWorkBookPr15"
    },
    2092: {
        n: "BrtPCDH15"
    },
    2093: {
        n: "BrtBeginTimelineStyle"
    },
    2094: {
        n: "BrtEndTimelineStyle"
    },
    2095: {
        n: "BrtTimelineStyleElement"
    },
    2096: {
        n: "BrtBeginTimelineStylesheetExt15"
    },
    2097: {
        n: "BrtEndTimelineStylesheetExt15"
    },
    2098: {
        n: "BrtBeginTimelineStyles"
    },
    2099: {
        n: "BrtEndTimelineStyles"
    },
    2100: {
        n: "BrtBeginTimelineStyleElements"
    },
    2101: {
        n: "BrtEndTimelineStyleElements"
    },
    2102: {
        n: "BrtDxf15"
    },
    2103: {
        n: "BrtBeginDxfs15"
    },
    2104: {
        n: "brtEndDxfs15"
    },
    2105: {
        n: "BrtSlicerCacheHideItemsWithNoData"
    },
    2106: {
        n: "BrtBeginItemUniqueNames"
    },
    2107: {
        n: "BrtEndItemUniqueNames"
    },
    2108: {
        n: "BrtItemUniqueName"
    },
    2109: {
        n: "BrtBeginExtConn15"
    },
    2110: {
        n: "BrtEndExtConn15"
    },
    2111: {
        n: "BrtBeginOledbPr15"
    },
    2112: {
        n: "BrtEndOledbPr15"
    },
    2113: {
        n: "BrtBeginDataFeedPr15"
    },
    2114: {
        n: "BrtEndDataFeedPr15"
    },
    2115: {
        n: "BrtTextPr15"
    },
    2116: {
        n: "BrtRangePr15"
    },
    2117: {
        n: "BrtDbCommand15"
    },
    2118: {
        n: "BrtBeginDbTables15"
    },
    2119: {
        n: "BrtEndDbTables15"
    },
    2120: {
        n: "BrtDbTable15"
    },
    2121: {
        n: "BrtBeginDataModel"
    },
    2122: {
        n: "BrtEndDataModel"
    },
    2123: {
        n: "BrtBeginModelTables"
    },
    2124: {
        n: "BrtEndModelTables"
    },
    2125: {
        n: "BrtModelTable"
    },
    2126: {
        n: "BrtBeginModelRelationships"
    },
    2127: {
        n: "BrtEndModelRelationships"
    },
    2128: {
        n: "BrtModelRelationship"
    },
    2129: {
        n: "BrtBeginECTxtWiz15"
    },
    2130: {
        n: "BrtEndECTxtWiz15"
    },
    2131: {
        n: "BrtBeginECTWFldInfoLst15"
    },
    2132: {
        n: "BrtEndECTWFldInfoLst15"
    },
    2133: {
        n: "BrtBeginECTWFldInfo15"
    },
    2134: {
        n: "BrtFieldListActiveItem"
    },
    2135: {
        n: "BrtPivotCacheIdVersion"
    },
    2136: {
        n: "BrtSXDI15"
    },
    2137: {
        n: "BrtBeginModelTimeGroupings"
    },
    2138: {
        n: "BrtEndModelTimeGroupings"
    },
    2139: {
        n: "BrtBeginModelTimeGrouping"
    },
    2140: {
        n: "BrtEndModelTimeGrouping"
    },
    2141: {
        n: "BrtModelTimeGroupingCalcCol"
    },
    3072: {
        n: "BrtUid"
    },
    3073: {
        n: "BrtRevisionPtr"
    },
    5095: {
        n: "BrtBeginCalcFeatures"
    },
    5096: {
        n: "BrtEndCalcFeatures"
    },
    5097: {
        n: "BrtCalcFeature"
    },
    65535: {
        n: ""
    }
};
var rl = {
        6: {
            n: "Formula",
            f: Ns
        },
        10: {
            n: "EOF",
            f: _n
        },
        12: {
            n: "CalcCount",
            f: An
        },
        13: {
            n: "CalcMode",
            f: An
        },
        14: {
            n: "CalcPrecision",
            f: yn
        },
        15: {
            n: "CalcRefMode",
            f: yn
        },
        16: {
            n: "CalcDelta",
            f: Pr
        },
        17: {
            n: "CalcIter",
            f: yn
        },
        18: {
            n: "Protect",
            f: yn
        },
        19: {
            n: "Password",
            f: An
        },
        20: {
            n: "Header",
            f: fa
        },
        21: {
            n: "Footer",
            f: fa
        },
        23: {
            n: "ExternSheet",
            f: pa
        },
        24: {
            n: "Lbl",
            f: da
        },
        25: {
            n: "WinProtect",
            f: yn
        },
        26: {
            n: "VerticalPageBreaks"
        },
        27: {
            n: "HorizontalPageBreaks"
        },
        28: {
            n: "Note",
            f: function(e, t, r) {
                return function(e, t, r) {
                    if (!(r.biff < 8)) {
                        var n = e.read_shift(2),
                            a = e.read_shift(2),
                            i = e.read_shift(2),
                            s = e.read_shift(2),
                            o = Nn(e, 0, r);
                        return r.biff < 8 && e.read_shift(1), [{
                            r: n,
                            c: a
                        }, o, s, i]
                    }
                }(e, 0, r)
            }
        },
        29: {
            n: "Selection"
        },
        34: {
            n: "Date1904",
            f: yn
        },
        35: {
            n: "ExternName",
            f: ha
        },
        38: {
            n: "LeftMargin",
            f: Pr
        },
        39: {
            n: "RightMargin",
            f: Pr
        },
        40: {
            n: "TopMargin",
            f: Pr
        },
        41: {
            n: "BottomMargin",
            f: Pr
        },
        42: {
            n: "PrintRowCol",
            f: yn
        },
        43: {
            n: "PrintGrid",
            f: yn
        },
        47: {
            n: "FilePass",
            f: function(e, t, r) {
                var n = {
                    Type: r.biff >= 8 ? e.read_shift(2) : 0
                };
                return n.Type ? Ja(e, t - 2, n) : function(e, t, r, n) {
                    var a = {
                        key: An(e),
                        verificationBytes: An(e)
                    };
                    r.password && (a.verifier = Xa(r.password)), n.valid = a.verificationBytes === a.verifier, n.valid && (n.insitu = Ka(r.password))
                }(e, r.biff, r, n), n
            }
        },
        49: {
            n: "Font",
            f: function(e, t, r) {
                var n = {
                    dyHeight: e.read_shift(2),
                    fl: e.read_shift(2)
                };
                switch (r && r.biff || 8) {
                    case 2:
                        break;
                    case 3:
                    case 4:
                        e.l += 2;
                        break;
                    default:
                        e.l += 10
                }
                return n.name = Dn(e, 0, r), n
            }
        },
        51: {
            n: "PrintSize",
            f: An
        },
        60: {
            n: "Continue"
        },
        61: {
            n: "Window1",
            f: function(e) {
                return {
                    Pos: [e.read_shift(2), e.read_shift(2)],
                    Dim: [e.read_shift(2), e.read_shift(2)],
                    Flags: e.read_shift(2),
                    CurTab: e.read_shift(2),
                    FirstTab: e.read_shift(2),
                    Selected: e.read_shift(2),
                    TabRatio: e.read_shift(2)
                }
            }
        },
        64: {
            n: "Backup",
            f: yn
        },
        65: {
            n: "Pane",
            f: function() {}
        },
        66: {
            n: "CodePage",
            f: An
        },
        77: {
            n: "Pls"
        },
        80: {
            n: "DCon"
        },
        81: {
            n: "DConRef"
        },
        82: {
            n: "DConName"
        },
        85: {
            n: "DefColWidth",
            f: An
        },
        89: {
            n: "XCT"
        },
        90: {
            n: "CRN"
        },
        91: {
            n: "FileSharing"
        },
        92: {
            n: "WriteAccess",
            f: function(e, t, r) {
                if (r.enc) return e.l += t, "";
                var n = e.l,
                    a = Nn(e, 0, r);
                return e.read_shift(t + n - e.l), a
            }
        },
        93: {
            n: "Obj",
            f: function(e, t, r) {
                if (r && r.biff < 8) return function(e, t, r) {
                    e.l += 4;
                    var n = e.read_shift(2),
                        a = e.read_shift(2),
                        i = e.read_shift(2);
                    e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, t -= 36;
                    var s = [];
                    return s.push((ga[n] || Wt)(e, t, r)), {
                        cmo: [a, n, i],
                        ft: s
                    }
                }(e, t, r);
                var n = Qn(e),
                    a = function(e, t) {
                        for (var r = e.l + t, n = []; e.l < r;) {
                            var a = e.read_shift(2);
                            e.l -= 2;
                            try {
                                n.push(ea[a](e, r - e.l))
                            } catch (t) {
                                return e.l = r, n
                            }
                        }
                        return e.l != r && (e.l = r), n
                    }(e, t - 22, n[1]);
                return {
                    cmo: n,
                    ft: a
                }
            }
        },
        94: {
            n: "Uncalced"
        },
        95: {
            n: "CalcSaveRecalc",
            f: yn
        },
        96: {
            n: "Template"
        },
        97: {
            n: "Intl"
        },
        99: {
            n: "ObjProtect",
            f: yn
        },
        125: {
            n: "ColInfo",
            f: Sa
        },
        128: {
            n: "Guts",
            f: function(e) {
                e.l += 4;
                var t = [e.read_shift(2), e.read_shift(2)];
                if (0 !== t[0] && t[0]--, 0 !== t[1] && t[1]--, t[0] > 7 || t[1] > 7) throw new Error("Bad Gutters: " + t.join("|"));
                return t
            }
        },
        129: {
            n: "WsBool",
            f: function(e, t, r) {
                var n = r && 8 == r.biff || 2 == t ? e.read_shift(2) : (e.l += t, 0);
                return {
                    fDialog: 16 & n,
                    fBelow: 64 & n,
                    fRight: 128 & n
                }
            }
        },
        130: {
            n: "GridSet",
            f: An
        },
        131: {
            n: "HCenter",
            f: yn
        },
        132: {
            n: "VCenter",
            f: yn
        },
        133: {
            n: "BoundSheet8",
            f: function(e, t, r) {
                var n = e.read_shift(4),
                    a = 3 & e.read_shift(1),
                    i = e.read_shift(1);
                switch (i) {
                    case 0:
                        i = "Worksheet";
                        break;
                    case 1:
                        i = "Macrosheet";
                        break;
                    case 2:
                        i = "Chartsheet";
                        break;
                    case 6:
                        i = "VBAModule"
                }
                var s = Dn(e, 0, r);
                return 0 === s.length && (s = "Sheet1"), {
                    pos: n,
                    hs: a,
                    dt: i,
                    name: s
                }
            }
        },
        134: {
            n: "WriteProtect"
        },
        140: {
            n: "Country",
            f: function(e) {
                var t, r = [0, 0];
                return t = e.read_shift(2), r[0] = Hr[t] || t, t = e.read_shift(2), r[1] = Hr[t] || t, r
            }
        },
        141: {
            n: "HideObj",
            f: An
        },
        144: {
            n: "Sort"
        },
        146: {
            n: "Palette",
            f: function(e) {
                for (var t = e.read_shift(2), r = []; t-- > 0;) r.push(Xn(e));
                return r
            }
        },
        151: {
            n: "Sync"
        },
        152: {
            n: "LPr"
        },
        153: {
            n: "DxGCol"
        },
        154: {
            n: "FnGroupName"
        },
        155: {
            n: "FilterMode"
        },
        156: {
            n: "BuiltInFnGroupCount",
            f: An
        },
        157: {
            n: "AutoFilterInfo"
        },
        158: {
            n: "AutoFilter"
        },
        160: {
            n: "Scl",
            f: wa
        },
        161: {
            n: "Setup",
            f: function(e, t) {
                var r = {};
                return t < 32 || (e.l += 16, r.header = Pr(e), r.footer = Pr(e), e.l += 2), r
            }
        },
        174: {
            n: "ScenMan"
        },
        175: {
            n: "SCENARIO"
        },
        176: {
            n: "SxView"
        },
        177: {
            n: "Sxvd"
        },
        178: {
            n: "SXVI"
        },
        180: {
            n: "SxIvd"
        },
        181: {
            n: "SXLI"
        },
        182: {
            n: "SXPI"
        },
        184: {
            n: "DocRoute"
        },
        185: {
            n: "RecipName"
        },
        189: {
            n: "MulRk",
            f: function(e, t) {
                for (var r = e.l + t - 2, n = e.read_shift(2), a = e.read_shift(2), i = []; e.l < r;) i.push(zn(e));
                if (e.l !== r) throw new Error("MulRK read error");
                var s = e.read_shift(2);
                if (i.length != s - a + 1) throw new Error("MulRK length mismatch");
                return {
                    r: n,
                    c: a,
                    C: s,
                    rkrec: i
                }
            }
        },
        190: {
            n: "MulBlank",
            f: function(e, t) {
                for (var r = e.l + t - 2, n = e.read_shift(2), a = e.read_shift(2), i = []; e.l < r;) i.push(e.read_shift(2));
                if (e.l !== r) throw new Error("MulBlank read error");
                var s = e.read_shift(2);
                if (i.length != s - a + 1) throw new Error("MulBlank length mismatch");
                return {
                    r: n,
                    c: a,
                    C: s,
                    ixfe: i
                }
            }
        },
        193: {
            n: "Mms",
            f: _n
        },
        197: {
            n: "SXDI"
        },
        198: {
            n: "SXDB"
        },
        199: {
            n: "SXFDB"
        },
        200: {
            n: "SXDBB"
        },
        201: {
            n: "SXNum"
        },
        202: {
            n: "SxBool",
            f: yn
        },
        203: {
            n: "SxErr"
        },
        204: {
            n: "SXInt"
        },
        205: {
            n: "SXString"
        },
        206: {
            n: "SXDtr"
        },
        207: {
            n: "SxNil"
        },
        208: {
            n: "SXTbl"
        },
        209: {
            n: "SXTBRGIITM"
        },
        210: {
            n: "SxTbpg"
        },
        211: {
            n: "ObProj"
        },
        213: {
            n: "SXStreamID"
        },
        215: {
            n: "DBCell"
        },
        216: {
            n: "SXRng"
        },
        217: {
            n: "SxIsxoper"
        },
        218: {
            n: "BookBool",
            f: An
        },
        220: {
            n: "DbOrParamQry"
        },
        221: {
            n: "ScenarioProtect",
            f: yn
        },
        222: {
            n: "OleObjectSize"
        },
        224: {
            n: "XF",
            f: function(e, t, r) {
                var n = {};
                return n.ifnt = e.read_shift(2), n.numFmtId = e.read_shift(2), n.flags = e.read_shift(2), n.fStyle = n.flags >> 2 & 1, 6, n.data = function(e, t, r, n) {
                    var a = {},
                        i = e.read_shift(4),
                        s = e.read_shift(4),
                        o = e.read_shift(4),
                        l = e.read_shift(2);
                    return a.patternType = Vr[o >> 26], n.cellStyles ? (a.alc = 7 & i, a.fWrap = i >> 3 & 1, a.alcV = i >> 4 & 7, a.fJustLast = i >> 7 & 1, a.trot = i >> 8 & 255, a.cIndent = i >> 16 & 15, a.fShrinkToFit = i >> 20 & 1, a.iReadOrder = i >> 22 & 2, a.fAtrNum = i >> 26 & 1, a.fAtrFnt = i >> 27 & 1, a.fAtrAlc = i >> 28 & 1, a.fAtrBdr = i >> 29 & 1, a.fAtrPat = i >> 30 & 1, a.fAtrProt = i >> 31 & 1, a.dgLeft = 15 & s, a.dgRight = s >> 4 & 15, a.dgTop = s >> 8 & 15, a.dgBottom = s >> 12 & 15, a.icvLeft = s >> 16 & 127, a.icvRight = s >> 23 & 127, a.grbitDiag = s >> 30 & 3, a.icvTop = 127 & o, a.icvBottom = o >> 7 & 127, a.icvDiag = o >> 14 & 127, a.dgDiag = o >> 21 & 15, a.icvFore = 127 & l, a.icvBack = l >> 7 & 127, a.fsxButton = l >> 14 & 1, a) : a
                }(e, 0, n.fStyle, r), n
            }
        },
        225: {
            n: "InterfaceHdr",
            f: function(e, t) {
                return 0 === t || e.read_shift(2), 1200
            }
        },
        226: {
            n: "InterfaceEnd",
            f: _n
        },
        227: {
            n: "SXVS"
        },
        229: {
            n: "MergeCells",
            f: function(e, t) {
                for (var r = [], n = e.read_shift(2); n--;) r.push(Yn(e));
                return r
            }
        },
        233: {
            n: "BkHim"
        },
        235: {
            n: "MsoDrawingGroup"
        },
        236: {
            n: "MsoDrawing"
        },
        237: {
            n: "MsoDrawingSelection"
        },
        239: {
            n: "PhoneticInfo"
        },
        240: {
            n: "SxRule"
        },
        241: {
            n: "SXEx"
        },
        242: {
            n: "SxFilt"
        },
        244: {
            n: "SxDXF"
        },
        245: {
            n: "SxItm"
        },
        246: {
            n: "SxName"
        },
        247: {
            n: "SxSelect"
        },
        248: {
            n: "SXPair"
        },
        249: {
            n: "SxFmla"
        },
        251: {
            n: "SxFormat"
        },
        252: {
            n: "SST",
            f: function(e, t) {
                for (var r = e.l + t, n = e.read_shift(4), a = e.read_shift(4), i = [], s = 0; s != a && e.l < r; ++s) i.push(On(e));
                return i.Count = n, i.Unique = a, i
            }
        },
        253: {
            n: "LabelSst",
            f: function(e) {
                var t = Gn(e);
                return t.isst = e.read_shift(4), t
            }
        },
        255: {
            n: "ExtSST",
            f: function(e, t) {
                var r = {};
                return r.dsst = e.read_shift(2), e.l += t - 2, r
            }
        },
        256: {
            n: "SXVDEx"
        },
        259: {
            n: "SXFormula"
        },
        290: {
            n: "SXDBEx"
        },
        311: {
            n: "RRDInsDel"
        },
        312: {
            n: "RRDHead"
        },
        315: {
            n: "RRDChgCell"
        },
        317: {
            n: "RRTabId",
            f: xn
        },
        318: {
            n: "RRDRenSheet"
        },
        319: {
            n: "RRSort"
        },
        320: {
            n: "RRDMove"
        },
        330: {
            n: "RRFormat"
        },
        331: {
            n: "RRAutoFmt"
        },
        333: {
            n: "RRInsertSh"
        },
        334: {
            n: "RRDMoveBegin"
        },
        335: {
            n: "RRDMoveEnd"
        },
        336: {
            n: "RRDInsDelBegin"
        },
        337: {
            n: "RRDInsDelEnd"
        },
        338: {
            n: "RRDConflict"
        },
        339: {
            n: "RRDDefName"
        },
        340: {
            n: "RRDRstEtxp"
        },
        351: {
            n: "LRng"
        },
        352: {
            n: "UsesELFs",
            f: yn
        },
        353: {
            n: "DSF",
            f: _n
        },
        401: {
            n: "CUsr"
        },
        402: {
            n: "CbUsr"
        },
        403: {
            n: "UsrInfo"
        },
        404: {
            n: "UsrExcl"
        },
        405: {
            n: "FileLock"
        },
        406: {
            n: "RRDInfo"
        },
        407: {
            n: "BCUsrs"
        },
        408: {
            n: "UsrChk"
        },
        425: {
            n: "UserBView"
        },
        426: {
            n: "UserSViewBegin"
        },
        427: {
            n: "UserSViewEnd"
        },
        428: {
            n: "RRDUserView"
        },
        429: {
            n: "Qsi"
        },
        430: {
            n: "SupBook",
            f: function(e, t, r) {
                var n = e.l + t,
                    a = e.read_shift(2),
                    i = e.read_shift(2);
                if (r.sbcch = i, 1025 == i || 14849 == i) return [i, a];
                if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
                for (var s = kn(e, i), o = []; n > e.l;) o.push(Fn(e));
                return [i, a, s, o]
            }
        },
        431: {
            n: "Prot4Rev",
            f: yn
        },
        432: {
            n: "CondFmt"
        },
        433: {
            n: "CF"
        },
        434: {
            n: "DVal"
        },
        437: {
            n: "DConBin"
        },
        438: {
            n: "TxO",
            f: function(e, t, r) {
                var n = e.l,
                    a = "";
                try {
                    e.l += 4;
                    var i = (r.lastobj || {
                        cmo: [0, 0]
                    }).cmo[1]; - 1 == [0, 5, 7, 11, 12, 14].indexOf(i) ? e.l += 6 : function(e) {
                        var t = e.read_shift(1);
                        e.l++;
                        var r = e.read_shift(2);
                        return e.l += 2, [t, r]
                    }(e);
                    var s = e.read_shift(2);
                    e.read_shift(2), An(e);
                    var o = e.read_shift(2);
                    e.l += o;
                    for (var l = 1; l < e.lens.length - 1; ++l) {
                        if (e.l - n != e.lens[l]) throw new Error("TxO: bad continue record");
                        var c = e[e.l];
                        if ((a += kn(e, e.lens[l + 1] - e.lens[l] - 1)).length >= (c ? s : 2 * s)) break
                    }
                    if (a.length !== s && a.length !== 2 * s) throw new Error("cchText: " + s + " != " + a.length);
                    return e.l = n + t, {
                        t: a
                    }
                } catch (r) {
                    return e.l = n + t, {
                        t: a
                    }
                }
            }
        },
        439: {
            n: "RefreshAll",
            f: yn
        },
        440: {
            n: "HLink",
            f: function(e, t) {
                var r = Yn(e);
                e.l += 16;
                var n = function(e, t) {
                    var r = e.l + t,
                        n = e.read_shift(4);
                    if (2 !== n) throw new Error("Unrecognized streamVersion: " + n);
                    var a = e.read_shift(2);
                    e.l += 2;
                    var i, s, o, l, c, f, h = "";
                    16 & a && (i = Un(e, e.l)), 128 & a && (s = Un(e, e.l)), 257 == (257 & a) && (o = Un(e, e.l)), 1 == (257 & a) && (l = Ln(e, e.l)), 8 & a && (h = Un(e, e.l)), 32 & a && (c = e.read_shift(16)), 64 & a && (f = En(e)), e.l = r;
                    var u = s || o || l || "";
                    u && h && (u += "#" + h), u || (u = "#" + h), 2 & a && "/" == u.charAt(0) && "/" != u.charAt(1) && (u = "file://" + u);
                    var d = {
                        Target: u
                    };
                    return c && (d.guid = c), f && (d.time = f), i && (d.Tooltip = i), d
                }(e, t - 24);
                return [r, n]
            }
        },
        441: {
            n: "Lel"
        },
        442: {
            n: "CodeName",
            f: Fn
        },
        443: {
            n: "SXFDBType"
        },
        444: {
            n: "Prot4RevPass",
            f: An
        },
        445: {
            n: "ObNoMacros"
        },
        446: {
            n: "Dv"
        },
        448: {
            n: "Excel9File",
            f: _n
        },
        449: {
            n: "RecalcId",
            f: function(e) {
                return e.read_shift(2), e.read_shift(4)
            },
            r: 2
        },
        450: {
            n: "EntExU2",
            f: _n
        },
        512: {
            n: "Dimensions",
            f: oa
        },
        513: {
            n: "Blank",
            f: ba
        },
        515: {
            n: "Number",
            f: function(e, t, r) {
                r.biffguess && 2 == r.biff && (r.biff = 5);
                var n = Gn(e),
                    a = Pr(e);
                return n.val = a, n
            }
        },
        516: {
            n: "Label",
            f: function(e, t, r) {
                r.biffguess && 2 == r.biff && (r.biff = 5), e.l;
                var n = Gn(e);
                2 == r.biff && e.l++;
                var a = Fn(e, e.l, r);
                return n.val = a, n
            }
        },
        517: {
            n: "BoolErr",
            f: ca
        },
        519: {
            n: "String",
            f: Ba
        },
        520: {
            n: "Row",
            f: function(e) {
                var t = {};
                t.r = e.read_shift(2), t.c = e.read_shift(2), t.cnt = e.read_shift(2) - t.c;
                var r = e.read_shift(2);
                e.l += 4;
                var n = e.read_shift(1);
                return e.l += 3, 7 & n && (t.level = 7 & n), 32 & n && (t.hidden = !0), 64 & n && (t.hpt = r / 20), t
            }
        },
        523: {
            n: "Index"
        },
        545: {
            n: "Array",
            f: ma
        },
        549: {
            n: "DefaultRowHeight",
            f: aa
        },
        566: {
            n: "Table"
        },
        574: {
            n: "Window2",
            f: function(e, t, r) {
                return r && r.biff >= 2 && r.biff < 5 ? {} : {
                    RTL: 64 & e.read_shift(2)
                }
            }
        },
        638: {
            n: "RK",
            f: function(e) {
                var t = e.read_shift(2),
                    r = e.read_shift(2),
                    n = zn(e);
                return {
                    r: t,
                    c: r,
                    ixfe: n[0],
                    rknum: n[1]
                }
            }
        },
        659: {
            n: "Style"
        },
        1048: {
            n: "BigName"
        },
        1054: {
            n: "Format",
            f: function(e, t, r) {
                return [e.read_shift(2), Nn(e, 0, r)]
            }
        },
        1084: {
            n: "ContinueBigName"
        },
        1212: {
            n: "ShrFmla",
            f: function(e, t, r) {
                var n = Jn(e);
                e.l++;
                var a = e.read_shift(1);
                return [Fs(e, t -= 8, r), a, n]
            }
        },
        2048: {
            n: "HLinkTooltip",
            f: function(e, t) {
                e.read_shift(2);
                var r = Yn(e),
                    n = e.read_shift((t - 10) / 2, "dbcs-cont");
                return [r, n = n.replace(N, "")]
            }
        },
        2049: {
            n: "WebPub"
        },
        2050: {
            n: "QsiSXTag"
        },
        2051: {
            n: "DBQueryExt"
        },
        2052: {
            n: "ExtString"
        },
        2053: {
            n: "TxtQry"
        },
        2054: {
            n: "Qsir"
        },
        2055: {
            n: "Qsif"
        },
        2056: {
            n: "RRDTQSIF"
        },
        2057: {
            n: "BOF",
            f: ta
        },
        2058: {
            n: "OleDbConn"
        },
        2059: {
            n: "WOpt"
        },
        2060: {
            n: "SXViewEx"
        },
        2061: {
            n: "SXTH"
        },
        2062: {
            n: "SXPIEx"
        },
        2063: {
            n: "SXVDTEx"
        },
        2064: {
            n: "SXViewEx9"
        },
        2066: {
            n: "ContinueFrt"
        },
        2067: {
            n: "RealTimeData"
        },
        2128: {
            n: "ChartFrtInfo"
        },
        2129: {
            n: "FrtWrapper"
        },
        2130: {
            n: "StartBlock"
        },
        2131: {
            n: "EndBlock"
        },
        2132: {
            n: "StartObject"
        },
        2133: {
            n: "EndObject"
        },
        2134: {
            n: "CatLab"
        },
        2135: {
            n: "YMult"
        },
        2136: {
            n: "SXViewLink"
        },
        2137: {
            n: "PivotChartBits"
        },
        2138: {
            n: "FrtFontList"
        },
        2146: {
            n: "SheetExt"
        },
        2147: {
            n: "BookExt",
            r: 12
        },
        2148: {
            n: "SXAddl"
        },
        2149: {
            n: "CrErr"
        },
        2150: {
            n: "HFPicture"
        },
        2151: {
            n: "FeatHdr",
            f: _n
        },
        2152: {
            n: "Feat"
        },
        2154: {
            n: "DataLabExt"
        },
        2155: {
            n: "DataLabExtContents"
        },
        2156: {
            n: "CellWatch"
        },
        2161: {
            n: "FeatHdr11"
        },
        2162: {
            n: "Feature11"
        },
        2164: {
            n: "DropDownObjIds"
        },
        2165: {
            n: "ContinueFrt11"
        },
        2166: {
            n: "DConn"
        },
        2167: {
            n: "List12"
        },
        2168: {
            n: "Feature12"
        },
        2169: {
            n: "CondFmt12"
        },
        2170: {
            n: "CF12"
        },
        2171: {
            n: "CFEx"
        },
        2172: {
            n: "XFCRC",
            f: function(e) {
                e.l += 2;
                var t = {
                    cxfs: 0,
                    crc: 0
                };
                return t.cxfs = e.read_shift(2), t.crc = e.read_shift(4), t
            },
            r: 12
        },
        2173: {
            n: "XFExt",
            f: function(e, t) {
                e.l, e.l += 2;
                var r = e.read_shift(2);
                e.l += 2;
                for (var n = e.read_shift(2), a = []; n-- > 0;) a.push(Ui(e, e.l));
                return {
                    ixfe: r,
                    ext: a
                }
            },
            r: 12
        },
        2174: {
            n: "AutoFilter12"
        },
        2175: {
            n: "ContinueFrt12"
        },
        2180: {
            n: "MDTInfo"
        },
        2181: {
            n: "MDXStr"
        },
        2182: {
            n: "MDXTuple"
        },
        2183: {
            n: "MDXSet"
        },
        2184: {
            n: "MDXProp"
        },
        2185: {
            n: "MDXKPI"
        },
        2186: {
            n: "MDB"
        },
        2187: {
            n: "PLV"
        },
        2188: {
            n: "Compat12",
            f: yn,
            r: 12
        },
        2189: {
            n: "DXF"
        },
        2190: {
            n: "TableStyles",
            r: 12
        },
        2191: {
            n: "TableStyle"
        },
        2192: {
            n: "TableStyleElement"
        },
        2194: {
            n: "StyleExt"
        },
        2195: {
            n: "NamePublish"
        },
        2196: {
            n: "NameCmt",
            f: function(e, t, r) {
                if (!(r.biff < 8)) {
                    var n = e.read_shift(2),
                        a = e.read_shift(2);
                    return [kn(e, n, r), kn(e, a, r)]
                }
                e.l += t
            },
            r: 12
        },
        2197: {
            n: "SortData"
        },
        2198: {
            n: "Theme",
            f: function(e, t, r) {
                var n = e.l + t;
                if (124226 !== e.read_shift(4))
                    if (r.cellStyles) {
                        var a, i = e.slice(e.l);
                        e.l = n;
                        try {
                            a = we(i, {
                                type: "array"
                            })
                        } catch (e) {
                            return
                        }
                        var s = Ee(a, "theme/theme/theme1.xml", !0);
                        if (s) return Ni(s, r)
                    } else e.l = n
            },
            r: 12
        },
        2199: {
            n: "GUIDTypeLib"
        },
        2200: {
            n: "FnGrp12"
        },
        2201: {
            n: "NameFnGrp12"
        },
        2202: {
            n: "MTRSettings",
            f: function(e) {
                return [0 !== e.read_shift(4), 0 !== e.read_shift(4), e.read_shift(4)]
            },
            r: 12
        },
        2203: {
            n: "CompressPictures",
            f: _n
        },
        2204: {
            n: "HeaderFooter"
        },
        2205: {
            n: "CrtLayout12"
        },
        2206: {
            n: "CrtMlFrt"
        },
        2207: {
            n: "CrtMlFrtContinue"
        },
        2211: {
            n: "ForceFullCalculation",
            f: function(e) {
                var t = function(e) {
                    var t = e.read_shift(2),
                        r = e.read_shift(2);
                    return e.l += 8, {
                        type: t,
                        flags: r
                    }
                }(e);
                if (2211 != t.type) throw new Error("Invalid Future Record " + t.type);
                return 0 !== e.read_shift(4)
            }
        },
        2212: {
            n: "ShapePropsStream"
        },
        2213: {
            n: "TextPropsStream"
        },
        2214: {
            n: "RichTextStream"
        },
        2215: {
            n: "CrtLayout12A"
        },
        4097: {
            n: "Units"
        },
        4098: {
            n: "Chart"
        },
        4099: {
            n: "Series"
        },
        4102: {
            n: "DataFormat"
        },
        4103: {
            n: "LineFormat"
        },
        4105: {
            n: "MarkerFormat"
        },
        4106: {
            n: "AreaFormat"
        },
        4107: {
            n: "PieFormat"
        },
        4108: {
            n: "AttachedLabel"
        },
        4109: {
            n: "SeriesText"
        },
        4116: {
            n: "ChartFormat"
        },
        4117: {
            n: "Legend"
        },
        4118: {
            n: "SeriesList"
        },
        4119: {
            n: "Bar"
        },
        4120: {
            n: "Line"
        },
        4121: {
            n: "Pie"
        },
        4122: {
            n: "Area"
        },
        4123: {
            n: "Scatter"
        },
        4124: {
            n: "CrtLine"
        },
        4125: {
            n: "Axis"
        },
        4126: {
            n: "Tick"
        },
        4127: {
            n: "ValueRange"
        },
        4128: {
            n: "CatSerRange"
        },
        4129: {
            n: "AxisLine"
        },
        4130: {
            n: "CrtLink"
        },
        4132: {
            n: "DefaultText"
        },
        4133: {
            n: "Text"
        },
        4134: {
            n: "FontX",
            f: An
        },
        4135: {
            n: "ObjectLink"
        },
        4146: {
            n: "Frame"
        },
        4147: {
            n: "Begin"
        },
        4148: {
            n: "End"
        },
        4149: {
            n: "PlotArea"
        },
        4154: {
            n: "Chart3d"
        },
        4156: {
            n: "PicF"
        },
        4157: {
            n: "DropBar"
        },
        4158: {
            n: "Radar"
        },
        4159: {
            n: "Surf"
        },
        4160: {
            n: "RadarArea"
        },
        4161: {
            n: "AxisParent"
        },
        4163: {
            n: "LegendException"
        },
        4164: {
            n: "ShtProps",
            f: function(e, t, r) {
                var n = {
                    area: !1
                };
                if (5 != r.biff) return e.l += t, n;
                var a = e.read_shift(1);
                return e.l += 3, 16 & a && (n.area = !0), n
            }
        },
        4165: {
            n: "SerToCrt"
        },
        4166: {
            n: "AxesUsed"
        },
        4168: {
            n: "SBaseRef"
        },
        4170: {
            n: "SerParent"
        },
        4171: {
            n: "SerAuxTrend"
        },
        4174: {
            n: "IFmtRecord"
        },
        4175: {
            n: "Pos"
        },
        4176: {
            n: "AlRuns"
        },
        4177: {
            n: "BRAI"
        },
        4187: {
            n: "SerAuxErrBar"
        },
        4188: {
            n: "ClrtClient",
            f: function(e) {
                for (var t = e.read_shift(2), r = []; t-- > 0;) r.push(Xn(e));
                return r
            }
        },
        4189: {
            n: "SerFmt"
        },
        4191: {
            n: "Chart3DBarShape"
        },
        4192: {
            n: "Fbi"
        },
        4193: {
            n: "BopPop"
        },
        4194: {
            n: "AxcExt"
        },
        4195: {
            n: "Dat"
        },
        4196: {
            n: "PlotGrowth"
        },
        4197: {
            n: "SIIndex"
        },
        4198: {
            n: "GelFrame"
        },
        4199: {
            n: "BopPopCustom"
        },
        4200: {
            n: "Fbi2"
        },
        0: {
            n: "Dimensions",
            f: oa
        },
        1: {
            n: "BIFF2BLANK"
        },
        2: {
            n: "BIFF2INT",
            f: function(e) {
                var t = Gn(e);
                ++e.l;
                var r = e.read_shift(2);
                return t.t = "n", t.val = r, t
            }
        },
        3: {
            n: "BIFF2NUM",
            f: function(e) {
                var t = Gn(e);
                ++e.l;
                var r = Pr(e);
                return t.t = "n", t.val = r, t
            }
        },
        4: {
            n: "BIFF2STR",
            f: function(e, t, r) {
                r.biffguess && 5 == r.biff && (r.biff = 2);
                var n = Gn(e);
                ++e.l;
                var a = Nn(e, 0, r);
                return n.t = "str", n.val = a, n
            }
        },
        5: {
            n: "BoolErr",
            f: ca
        },
        7: {
            n: "String",
            f: function(e) {
                var t = e.read_shift(1);
                return 0 === t ? (e.l++, "") : e.read_shift(t, "sbcs-cont")
            }
        },
        8: {
            n: "BIFF2ROW"
        },
        9: {
            n: "BOF",
            f: ta
        },
        11: {
            n: "Index"
        },
        22: {
            n: "ExternCount",
            f: An
        },
        30: {
            n: "BIFF2FORMAT",
            f: sa
        },
        31: {
            n: "BIFF2FMTCNT"
        },
        32: {
            n: "BIFF2COLINFO"
        },
        33: {
            n: "Array",
            f: ma
        },
        36: {
            n: "COLWIDTH"
        },
        37: {
            n: "DefaultRowHeight",
            f: aa
        },
        50: {
            n: "BIFF2FONTXTRA",
            f: function(e, t) {
                e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += t - 13
            }
        },
        62: {
            n: "BIFF2WINDOW2"
        },
        52: {
            n: "DDEObjName"
        },
        67: {
            n: "BIFF2XF"
        },
        68: {
            n: "BIFF2XFINDEX",
            f: An
        },
        69: {
            n: "BIFF2FONTCLR"
        },
        86: {
            n: "BIFF4FMTCNT"
        },
        126: {
            n: "RK"
        },
        127: {
            n: "ImData",
            f: function(e) {
                var t = e.read_shift(2),
                    r = e.read_shift(2),
                    n = e.read_shift(4),
                    a = {
                        fmt: t,
                        env: r,
                        len: n,
                        data: e.slice(e.l, e.l + n)
                    };
                return e.l += n, a
            }
        },
        135: {
            n: "Addin"
        },
        136: {
            n: "Edg"
        },
        137: {
            n: "Pub"
        },
        145: {
            n: "Sub"
        },
        148: {
            n: "LHRecord"
        },
        149: {
            n: "LHNGraph"
        },
        150: {
            n: "Sound"
        },
        169: {
            n: "CoordList"
        },
        171: {
            n: "GCW"
        },
        188: {
            n: "ShrFmla"
        },
        191: {
            n: "ToolbarHdr"
        },
        192: {
            n: "ToolbarEnd"
        },
        194: {
            n: "AddMenu"
        },
        195: {
            n: "DelMenu"
        },
        214: {
            n: "RString",
            f: function(e, t, r) {
                var n = e.l + t,
                    a = Gn(e),
                    i = e.read_shift(2),
                    s = kn(e, i, r);
                return e.l = n, a.t = "str", a.val = s, a
            }
        },
        223: {
            n: "UDDesc"
        },
        234: {
            n: "TabIdConf"
        },
        354: {
            n: "XL5Modify"
        },
        421: {
            n: "FileSharing2"
        },
        518: {
            n: "Formula",
            f: Ns
        },
        521: {
            n: "BOF",
            f: ta
        },
        536: {
            n: "Lbl",
            f: da
        },
        547: {
            n: "ExternName",
            f: ha
        },
        561: {
            n: "Font"
        },
        579: {
            n: "BIFF3XF"
        },
        1030: {
            n: "Formula",
            f: Ns
        },
        1033: {
            n: "BOF",
            f: ta
        },
        1091: {
            n: "BIFF4XF"
        },
        2157: {
            n: "FeatInfo"
        },
        2163: {
            n: "FeatInfo11"
        },
        2177: {
            n: "SXAddl12"
        },
        2240: {
            n: "AutoWebPub"
        },
        2241: {
            n: "ListObj"
        },
        2242: {
            n: "ListField"
        },
        2243: {
            n: "ListDV"
        },
        2244: {
            n: "ListCondFmt"
        },
        2245: {
            n: "ListCF"
        },
        2246: {
            n: "FMQry"
        },
        2247: {
            n: "FMSQry"
        },
        2248: {
            n: "PLV"
        },
        2249: {
            n: "LnExt"
        },
        2250: {
            n: "MkrExt"
        },
        2251: {
            n: "CrtCoopt"
        },
        2262: {
            n: "FRTArchId$",
            r: 12
        },
        29282: {}
    },
    nl = K(rl, "n");

function al(e, t, r, n) {
    var a = "number" == typeof t ? t : +t || +nl[t];
    if (!isNaN(a)) {
        var i = n || (r || []).length || 0,
            s = e.next(4);
        s.write_shift(2, a), s.write_shift(2, i), i > 0 && xt(r) && e.push(r)
    }
}

function il(e, t, r) {
    return e || (e = Xt(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e
}

function sl(e, t, r, n) {
    if (null != t.v) switch (t.t) {
        case "d":
        case "n":
            var a = "d" == t.t ? Z(oe(t.v)) : t.v;
            return void(a == (0 | a) && a >= 0 && a < 65536 ? al(e, 2, (i = r, s = n, o = a, l = Xt(9), il(l, i, s), l.write_shift(2, o), l)) : al(e, 3, function(e, t, r) {
                var n = Xt(15);
                return il(n, e, t), n.write_shift(8, r, "f"), n
            }(r, n, a)));
        case "b":
        case "e":
            return void al(e, 5, function(e, t, r, n) {
                var a = Xt(9);
                return il(a, e, t), In(r, n || "b", a), a
            }(r, n, t.v, t.t));
        case "s":
        case "str":
            return void al(e, 4, function(e, t, r) {
                var n = Xt(8 + 2 * r.length);
                return il(n, e, t), n.write_shift(1, r.length), n.write_shift(r.length, r, "sbcs"), n.l < n.length ? n.slice(0, n.l) : n
            }(r, n, (t.v || "").slice(0, 255)))
    }
    var i, s, o, l;
    al(e, 1, il(null, r, n))
}

function ol(e, t) {
    var r = t || {};
    for (var n = Gt(), a = 0, i = 0; i < e.SheetNames.length; ++i) e.SheetNames[i] == r.sheet && (a = i);
    if (0 == a && r.sheet && e.SheetNames[0] != r.sheet) throw new Error("Sheet not found: " + r.sheet);
    return al(n, 4 == r.biff ? 1033 : 3 == r.biff ? 521 : 9, ra(0, 16, r)),
        function(e, t, r, n) {
            var a, i = Array.isArray(t),
                s = ar(t["!ref"] || "A1"),
                o = "",
                l = [];
            if (s.e.c > 255 || s.e.r > 16383) {
                if (n.WTF) throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
                s.e.c = Math.min(s.e.c, 255), s.e.r = Math.min(s.e.c, 16383), a = nr(s)
            }
            for (var c = s.s.r; c <= s.e.r; ++c) {
                o = qt(c);
                for (var f = s.s.c; f <= s.e.c; ++f) {
                    c === s.s.r && (l[f] = Zt(f)), a = l[f] + o;
                    var h = i ? (t[c] || [])[f] : t[a];
                    h && sl(e, h, c, f)
                }
            }
        }(n, e.Sheets[e.SheetNames[a]], 0, r), al(n, 10), n.end()
}

function ll(e, t, r) {
    al(e, "Font", function(e, t) {
        var r = e.name || "Arial",
            n = t && 5 == t.biff,
            a = Xt(n ? 15 + r.length : 16 + 2 * r.length);
        return a.write_shift(2, 20 * (e.sz || 12)), a.write_shift(4, 0), a.write_shift(2, 400), a.write_shift(4, 0), a.write_shift(2, 0), a.write_shift(1, r.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le"), a
    }({
        sz: 12,
        color: {
            theme: 1
        },
        name: "Arial",
        family: 2,
        scheme: "minor"
    }, r))
}

function cl(e, t, r) {
    if (t) {
        var n = 0;
        t.forEach((function(t, r) {
            ++n <= 256 && t && al(e, "ColInfo", function(e, t) {
                var r = Xt(12);
                r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, 256 * e.width), r.write_shift(2, 0);
                var n = 0;
                return e.hidden && (n |= 1), r.write_shift(1, n), n = e.level || 0, r.write_shift(1, n), r.write_shift(2, 0), r
            }(Qs(r, t), r))
        }))
    }
}

function fl(e, t, r, n, a) {
    var i = 16 + eo(a.cellXfs, t, a);
    if (null != t.v || t.bf)
        if (t.bf) al(e, "Formula", Ms(t, r, n, 0, i));
        else switch (t.t) {
            case "d":
            case "n":
                al(e, "Number", function(e, t, r, n) {
                    var a = Xt(14);
                    return jn(e, t, n, a), kr(r, a), a
                }(r, n, "d" == t.t ? Z(oe(t.v)) : t.v, i));
                break;
            case "b":
            case "e":
                al(e, 517, function(e, t, r, n, a, i) {
                    var s = Xt(8);
                    return jn(e, t, n, s), In(r, i, s), s
                }(r, n, t.v, i, 0, t.t));
                break;
            case "s":
            case "str":
                if (a.bookSST) al(e, "LabelSst", function(e, t, r, n) {
                    var a = Xt(10);
                    return jn(e, t, n, a), a.write_shift(4, r), a
                }(r, n, qs(a.Strings, t.v, a.revStrings), i));
                else al(e, "Label", function(e, t, r, n, a) {
                    var i = !a || 8 == a.biff,
                        s = Xt(+i + 8 + (1 + i) * r.length);
                    return jn(e, t, n, s), s.write_shift(2, r.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * r.length, r, i ? "utf16le" : "sbcs"), s
                }(r, n, (t.v || "").slice(0, 255), i, a));
                break;
            default:
                al(e, "Blank", jn(r, n, i))
        } else al(e, "Blank", jn(r, n, i))
}

function hl(e, t, r) {
    var n, a = Gt(),
        i = r.SheetNames[e],
        s = r.Sheets[i] || {},
        o = (r || {}).Workbook || {},
        l = (o.Sheets || [])[e] || {},
        c = Array.isArray(s),
        f = 8 == t.biff,
        h = "",
        u = [],
        d = ar(s["!ref"] || "A1"),
        p = f ? 65536 : 16384;
    if (d.e.c > 255 || d.e.r >= p) {
        if (t.WTF) throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:IV16384");
        d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.c, p - 1)
    }
    al(a, 2057, ra(0, 16, t)), al(a, "CalcMode", Rn(1)), al(a, "CalcCount", Rn(100)), al(a, "CalcRefMode", Tn(!0)), al(a, "CalcIter", Tn(!1)), al(a, "CalcDelta", kr(.001)), al(a, "CalcSaveRecalc", Tn(!0)), al(a, "PrintRowCol", Tn(!1)), al(a, "PrintGrid", Tn(!1)), al(a, "GridSet", Rn(1)), al(a, "Guts", function(e) {
        var t = Xt(8);
        return t.write_shift(4, 0), t.write_shift(2, e[0] ? e[0] + 1 : 0), t.write_shift(2, e[1] ? e[1] + 1 : 0), t
    }([0, 0])), al(a, "HCenter", Tn(!1)), al(a, "VCenter", Tn(!1)), f && cl(a, s["!cols"]), al(a, 512, function(e, t) {
        var r = 8 != t.biff && t.biff ? 2 : 4,
            n = Xt(2 * r + 6);
        return n.write_shift(r, e.s.r), n.write_shift(r, e.e.r + 1), n.write_shift(2, e.s.c), n.write_shift(2, e.e.c + 1), n.write_shift(2, 0), n
    }(d, t)), f && (s["!links"] = []);
    for (var m = d.s.r; m <= d.e.r; ++m) {
        h = qt(m);
        for (var g = d.s.c; g <= d.e.c; ++g) {
            m === d.s.r && (u[g] = Zt(g)), n = u[g] + h;
            var v = c ? (s[m] || [])[g] : s[n];
            v && (fl(a, v, m, g, t), f && v.l && s["!links"].push([n, v.l]))
        }
    }
    var E = l.CodeName || l.name || i;
    return f && al(a, "Window2", function(e) {
        var t = Xt(18),
            r = 1718;
        return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t
    }((o.Views || [])[0])), f && (s["!merges"] || []).length && al(a, "MergeCells", function(e) {
        var t = Xt(2 + 8 * e.length);
        t.write_shift(2, e.length);
        for (var r = 0; r < e.length; ++r) Kn(e[r], t);
        return t
    }(s["!merges"])), f && function(e, t) {
        for (var r = 0; r < t["!links"].length; ++r) {
            var n = t["!links"][r];
            al(e, "HLink", va(n)), n[1].Tooltip && al(e, "HLinkTooltip", Ea(n))
        }
        delete t["!links"]
    }(a, s), al(a, "CodeName", Mn(E)), f && function(e, t) {
        var r = Xt(19);
        r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), al(e, "FeatHdr", r), (r = Xt(39)).write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), Kn(ar(t["!ref"] || "A1"), r), r.write_shift(4, 4), al(e, "Feat", r)
    }(a, s), al(a, "EOF"), a.end()
}

function ul(e, t, r) {
    var n = Gt(),
        a = (e || {}).Workbook || {},
        i = a.Sheets || [],
        s = a.WBProps || {},
        o = 8 == r.biff,
        l = 5 == r.biff;
    (al(n, 2057, ra(0, 5, r)), "xla" == r.bookType && al(n, "Addin"), al(n, "InterfaceHdr", o ? Rn(1200) : null), al(n, "Mms", function(e, t) {
        t || (t = Xt(e));
        for (var r = 0; r < e; ++r) t.write_shift(1, 0);
        return t
    }(2)), l && al(n, "ToolbarHdr"), l && al(n, "ToolbarEnd"), al(n, "InterfaceEnd"), al(n, "WriteAccess", function(e, t) {
        var r = !t || 8 == t.biff,
            n = Xt(r ? 112 : 54);
        for (n.write_shift(8 == t.biff ? 2 : 1, 7), r && n.write_shift(1, 0), n.write_shift(4, 859007059), n.write_shift(4, 5458548 | (r ? 0 : 536870912)); n.l < n.length;) n.write_shift(1, r ? 0 : 32);
        return n
    }(0, r)), al(n, "CodePage", Rn(o ? 1200 : 1252)), o && al(n, "DSF", Rn(0)), o && al(n, "Excel9File"), al(n, "RRTabId", function(e) {
        for (var t = Xt(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1);
        return t
    }(e.SheetNames.length)), o && e.vbaraw && al(n, "ObProj"), o && e.vbaraw) && al(n, "CodeName", Mn(s.CodeName || "ThisWorkbook"));
    al(n, "BuiltInFnGroupCount", Rn(17)), al(n, "WinProtect", Tn(!1)), al(n, "Protect", Tn(!1)), al(n, "Password", Rn(0)), o && al(n, "Prot4Rev", Tn(!1)), o && al(n, "Prot4RevPass", Rn(0)), al(n, "Window1", function() {
            var e = Xt(18);
            return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e
        }()), al(n, "Backup", Tn(!1)), al(n, "HideObj", Rn(0)), al(n, "Date1904", Tn("true" == function(e) {
            return e.Workbook && e.Workbook.WBProps && He(e.Workbook.WBProps.date1904) ? "true" : "false"
        }(e))), al(n, "CalcPrecision", Tn(!0)), o && al(n, "RefreshAll", Tn(!1)), al(n, "BookBool", Rn(0)), ll(n, 0, r),
        function(e, t, r) {
            t && [
                [5, 8],
                [23, 26],
                [41, 44],
                [50, 392]
            ].forEach((function(n) {
                for (var a = n[0]; a <= n[1]; ++a) null != t[a] && al(e, "Format", ia(a, t[a], r))
            }))
        }(n, e.SSF, r),
        function(e, t) {
            for (var r = 0; r < 16; ++r) al(e, "XF", la({
                numFmtId: 0,
                style: !0
            }, 0, t));
            t.cellXfs.forEach((function(r) {
                al(e, "XF", la(r, 0, t))
            }))
        }(n, r), o && al(n, "UsesELFs", Tn(!1));
    var c = n.end(),
        f = Gt();
    o && al(f, "Country", function(e) {
        return e || (e = Xt(4)), e.write_shift(2, 1), e.write_shift(2, 1), e
    }()), o && r.Strings && function(e, t, r, n) {
        var a = n || (r || []).length || 0;
        if (a <= 8224) return al(e, t, r, a);
        var i = +t || +nl[t];
        if (!isNaN(i)) {
            for (var s = r.parts || [], o = 0, l = 0, c = 0; c + (s[o] || 8224) <= 8224;) c += s[o] || 8224, o++;
            var f = e.next(4);
            for (f.write_shift(2, i), f.write_shift(2, c), e.push(r.slice(l, l + c)), l += c; l < a;) {
                for ((f = e.next(4)).write_shift(2, 60), c = 0; c + (s[o] || 8224) <= 8224;) c += s[o] || 8224, o++;
                f.write_shift(2, c), e.push(r.slice(l, l + c)), l += c
            }
        }
    }(f, "SST", function(e, t) {
        var r = Xt(8);
        r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
        for (var n = [], a = 0; a < e.length; ++a) n[a] = Pn(e[a]);
        var i = F([r].concat(n));
        return i.parts = [r.length].concat(n.map((function(e) {
            return e.length
        }))), i
    }(r.Strings)), al(f, "EOF");
    var h = f.end(),
        u = Gt(),
        d = 0,
        p = 0;
    for (p = 0; p < e.SheetNames.length; ++p) d += (o ? 12 : 11) + (o ? 2 : 1) * e.SheetNames[p].length;
    var m = c.length + d + h.length;
    for (p = 0; p < e.SheetNames.length; ++p) {
        al(u, "BoundSheet8", na({
            pos: m,
            hs: (i[p] || {}).Hidden || 0,
            dt: 0,
            name: e.SheetNames[p]
        }, r)), m += t[p].length
    }
    var g = u.end();
    if (d != g.length) throw new Error("BS8 " + d + " != " + g.length);
    var v = [];
    return c.length && v.push(c), g.length && v.push(g), h.length && v.push(h), F(v)
}

function dl(e, t) {
    for (var r = 0; r <= e.SheetNames.length; ++r) {
        var n = e.Sheets[e.SheetNames[r]];
        if (n && n["!ref"]) rr(n["!ref"]).e.c > 255 && "undefined" != typeof console && console.error
    }
    var a = t || {};
    switch (a.biff || 2) {
        case 8:
        case 5:
            return function(e, t) {
                var r = t || {},
                    n = [];
                e && !e.SSF && (e.SSF = L.get_table()), e && e.SSF && (U(L), L.load_table(e.SSF), r.revssf = q(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, yl(r), r.cellXfs = [], eo(r.cellXfs, {}, {
                    revssf: {
                        General: 0
                    }
                }), e.Props || (e.Props = {});
                for (var a = 0; a < e.SheetNames.length; ++a) n[n.length] = hl(a, r, e);
                return n.unshift(ul(e, n, r)), F(n)
            }(e, t);
        case 4:
        case 3:
        case 2:
            return ol(e, t)
    }
    throw new Error("invalid type " + a.bookType + " for BIFF")
}
var pl = function() {
    function e(e, t) {
        var r = t || {};
        var n = r.dense ? [] : {},
            a = (e = e.replace(/<!--.*?-->/g, "")).match(/<table/i);
        if (!a) throw new Error("Invalid HTML: could not find <table>");
        var i = e.match(/<\/table/i),
            s = a.index,
            o = i && i.index || e.length,
            l = function(e, t, r) {
                if (pe || "string" == typeof t) return e.split(t);
                for (var n = e.split(t), a = [n[0]], i = 1; i < n.length; ++i) a.push(r), a.push(n[i]);
                return a
            }(e.slice(s, o), /(:?<tr[^>]*>)/i, "<tr>"),
            c = -1,
            f = 0,
            h = 0,
            u = 0,
            d = {
                s: {
                    r: 1e7,
                    c: 1e7
                },
                e: {
                    r: 0,
                    c: 0
                }
            },
            p = [];
        for (s = 0; s < l.length; ++s) {
            var m = l[s].trim(),
                g = m.slice(0, 3).toLowerCase();
            if ("<tr" != g) {
                if ("<td" == g || "<th" == g) {
                    var v = m.split(/<\/t[dh]>/i);
                    for (o = 0; o < v.length; ++o) {
                        var E = v[o].trim();
                        if (E.match(/<t[dh]/i)) {
                            for (var S = E, b = 0;
                                "<" == S.charAt(0) && (b = S.indexOf(">")) > -1;) S = S.slice(b + 1);
                            for (var w = 0; w < p.length; ++w) {
                                var B = p[w];
                                B.s.c == f && B.s.r < c && c <= B.e.r && (f = B.e.c + 1, w = -1)
                            }
                            var C = Te(E.slice(0, E.indexOf(">")));
                            u = C.colspan ? +C.colspan : 1, ((h = +C.rowspan) > 1 || u > 1) && p.push({
                                s: {
                                    r: c,
                                    c: f
                                },
                                e: {
                                    r: c + (h || 1) - 1,
                                    c: f + u - 1
                                }
                            });
                            var _ = C.t || C["data-t"] || "";
                            if (S.length) {
                                if (S = Ke(S), d.s.r > c && (d.s.r = c), d.e.r < c && (d.e.r = c), d.s.c > f && (d.s.c = f), d.e.c < f && (d.e.c = f), S.length) {
                                    var y = {
                                        t: "s",
                                        v: S
                                    };
                                    r.raw || !S.trim().length || "s" == _ || ("TRUE" === S ? y = {
                                        t: "b",
                                        v: !0
                                    } : "FALSE" === S ? y = {
                                        t: "b",
                                        v: !1
                                    } : isNaN(he(S)) ? isNaN(de(S).getDate()) || (y = {
                                        t: "d",
                                        v: oe(S)
                                    }, r.cellDates || (y = {
                                        t: "n",
                                        v: Z(y.v)
                                    }), y.z = r.dateNF || L._table[14]) : y = {
                                        t: "n",
                                        v: he(S)
                                    }), r.dense ? (n[c] || (n[c] = []), n[c][f] = y) : n[tr({
                                        r: c,
                                        c: f
                                    })] = y, f += u
                                }
                            } else f += u
                        }
                    }
                }
            } else {
                if (++c, r.sheetRows && r.sheetRows <= c) {
                    --c;
                    break
                }
                f = 0
            }
        }
        return n["!ref"] = nr(d), p.length && (n["!merges"] = p), n
    }

    function t(e, t, r, n) {
        for (var a = e["!merges"] || [], i = [], s = t.s.c; s <= t.e.c; ++s) {
            for (var o = 0, l = 0, c = 0; c < a.length; ++c)
                if (!(a[c].s.r > r || a[c].s.c > s || a[c].e.r < r || a[c].e.c < s)) {
                    if (a[c].s.r < r || a[c].s.c < s) {
                        o = -1;
                        break
                    }
                    o = a[c].e.r - a[c].s.r + 1, l = a[c].e.c - a[c].s.c + 1;
                    break
                } if (!(o < 0)) {
                var f = tr({
                        r: r,
                        c: s
                    }),
                    h = n.dense ? (e[r] || [])[s] : e[f],
                    u = h && null != h.v && (h.h || Le(h.w || (sr(h), h.w) || "")) || "",
                    d = {};
                o > 1 && (d.rowspan = o), l > 1 && (d.colspan = l), n.editable ? u = '<span contenteditable="true">' + u + "</span>" : h && (d["data-t"] = h && h.t || "z", null != h.v && (d["data-v"] = h.v), null != h.z && (d["data-z"] = h.z), h.l && "#" != (h.l.Target || "#").charAt(0) && (u = '<a href="' + h.l.Target + '">' + u + "</a>")), d.id = (n.id || "sjs") + "-" + f, i.push(Ze("td", u, d))
            }
        }
        return "<tr>" + i.join("") + "</tr>"
    }

    function r(e, t, r) {
        return [].join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">"
    }
    var n = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
        a = "</body></html>";
    return {
        to_workbook: function(t, r) {
            var n = t.match(/<table.*?>[\s\S]*?<\/table>/gi);
            if (!n || 0 == n.length) throw new Error("Invalid HTML: could not find <table>");
            if (1 == n.length) return or(e(n[0], r), r);
            var a = Zl.book_new();
            return n.forEach((function(t, n) {
                Zl.book_append_sheet(a, e(t, r), "Sheet" + (n + 1))
            })), a
        },
        to_sheet: e,
        _row: t,
        BEGIN: n,
        END: a,
        _preamble: r,
        from_sheet: function(e, i) {
            var s = i || {},
                o = null != s.header ? s.header : n,
                l = null != s.footer ? s.footer : a,
                c = [o],
                f = rr(e["!ref"]);
            s.dense = Array.isArray(e), c.push(r(0, 0, s));
            for (var h = f.s.r; h <= f.e.r; ++h) c.push(t(e, f, h, s));
            return c.push("</table>" + l), c.join("")
        }
    }
}();

function ml(e, t, r) {
    var n = r || {};
    var a = 0,
        i = 0;
    if (null != n.origin)
        if ("number" == typeof n.origin) a = n.origin;
        else {
            var s = "string" == typeof n.origin ? er(n.origin) : n.origin;
            a = s.r, i = s.c
        } var o = t.getElementsByTagName("tr"),
        l = Math.min(n.sheetRows || 1e7, o.length),
        c = {
            s: {
                r: 0,
                c: 0
            },
            e: {
                r: a,
                c: i
            }
        };
    if (e["!ref"]) {
        var f = rr(e["!ref"]);
        c.s.r = Math.min(c.s.r, f.s.r), c.s.c = Math.min(c.s.c, f.s.c), c.e.r = Math.max(c.e.r, f.e.r), c.e.c = Math.max(c.e.c, f.e.c), -1 == a && (c.e.r = a = f.e.r + 1)
    }
    var h = [],
        u = 0,
        d = e["!rows"] || (e["!rows"] = []),
        p = 0,
        m = 0,
        g = 0,
        v = 0,
        E = 0,
        S = 0;
    for (e["!cols"] || (e["!cols"] = []); p < o.length && m < l; ++p) {
        var b = o[p];
        if (vl(b)) {
            if (n.display) continue;
            d[m] = {
                hidden: !0
            }
        }
        var w = b.children;
        for (g = v = 0; g < w.length; ++g) {
            var B = w[g];
            if (!n.display || !vl(B)) {
                var C = B.hasAttribute("data-v") ? B.getAttribute("data-v") : B.hasAttribute("v") ? B.getAttribute("v") : Ke(B.innerHTML),
                    _ = B.getAttribute("data-z") || B.getAttribute("z");
                for (u = 0; u < h.length; ++u) {
                    var y = h[u];
                    y.s.c == v + i && y.s.r < m + a && m + a <= y.e.r && (v = y.e.c + 1 - i, u = -1)
                }
                S = +B.getAttribute("colspan") || 1, ((E = +B.getAttribute("rowspan") || 1) > 1 || S > 1) && h.push({
                    s: {
                        r: m + a,
                        c: v + i
                    },
                    e: {
                        r: m + a + (E || 1) - 1,
                        c: v + i + (S || 1) - 1
                    }
                });
                var T = {
                        t: "s",
                        v: C
                    },
                    A = B.getAttribute("data-t") || B.getAttribute("t") || "";
                null != C && (0 == C.length ? T.t = A || "z" : n.raw || 0 == C.trim().length || "s" == A || ("TRUE" === C ? T = {
                    t: "b",
                    v: !0
                } : "FALSE" === C ? T = {
                    t: "b",
                    v: !1
                } : isNaN(he(C)) ? isNaN(de(C).getDate()) || (T = {
                    t: "d",
                    v: oe(C)
                }, n.cellDates || (T = {
                    t: "n",
                    v: Z(T.v)
                }), T.z = n.dateNF || L._table[14]) : T = {
                    t: "n",
                    v: he(C)
                })), void 0 === T.z && null != _ && (T.z = _);
                var R = "",
                    x = B.getElementsByTagName("A");
                if (x && x.length)
                    for (var I = 0; I < x.length && (!x[I].hasAttribute("href") || "#" == (R = x[I].getAttribute("href")).charAt(0)); ++I);
                R && "#" != R.charAt(0) && (T.l = {
                    Target: R
                }), n.dense ? (e[m + a] || (e[m + a] = []), e[m + a][v + i] = T) : e[tr({
                    c: v + i,
                    r: m + a
                })] = T, c.e.c < v + i && (c.e.c = v + i), v += S
            }
        }++m
    }
    return h.length && (e["!merges"] = (e["!merges"] || []).concat(h)), c.e.r = Math.max(c.e.r, m - 1 + a), e["!ref"] = nr(c), m >= l && (e["!fullref"] = nr((c.e.r = o.length - p + m - 1 + a, c))), e
}

function gl(e, t) {
    return ml((t || {}).dense ? [] : {}, e, t)
}

function vl(e) {
    var t = "",
        r = function(e) {
            return e.ownerDocument.defaultView && "function" == typeof e.ownerDocument.defaultView.getComputedStyle ? e.ownerDocument.defaultView.getComputedStyle : "function" == typeof getComputedStyle ? getComputedStyle : null
        }(e);
    return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), "none" === t
}
var El;
El = {
    day: ["d", "dd"],
    month: ["m", "mm"],
    year: ["y", "yy"],
    hours: ["h", "hh"],
    minutes: ["m", "mm"],
    seconds: ["s", "ss"],
    "am-pm": ["A/P", "AM/PM"],
    "day-of-week": ["ddd", "dddd"],
    era: ["e", "ee"],
    quarter: ["\\Qm", 'm\\"th quarter"']
};
var Sl, bl, wl = function() {
        var e = ["<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>"].join(""),
            t = "<office:document-styles " + Qe({
                "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                "office:version": "1.2"
            }) + ">" + e + "</office:document-styles>";
        return function() {
            return Be + t
        }
    }(),
    Bl = (Sl = "          <table:table-cell />\n", bl = function(e, t, r) {
        var n = [];
        n.push('      <table:table table:name="' + Fe(t.SheetNames[r]) + '" table:style-name="ta1">\n');
        var a = 0,
            i = 0,
            s = rr(e["!ref"] || "A1"),
            o = e["!merges"] || [],
            l = 0,
            c = Array.isArray(e);
        if (e["!cols"])
            for (i = 0; i <= s.e.c; ++i) n.push("        <table:table-column" + (e["!cols"][i] ? ' table:style-name="co' + e["!cols"][i].ods + '"' : "") + "></table:table-column>\n");
        var f = "",
            h = e["!rows"] || [];
        for (a = 0; a < s.s.r; ++a) f = h[a] ? ' table:style-name="ro' + h[a].ods + '"' : "", n.push("        <table:table-row" + f + "></table:table-row>\n");
        for (; a <= s.e.r; ++a) {
            for (f = h[a] ? ' table:style-name="ro' + h[a].ods + '"' : "", n.push("        <table:table-row" + f + ">\n"), i = 0; i < s.s.c; ++i) n.push(Sl);
            for (; i <= s.e.c; ++i) {
                var u = !1,
                    d = {},
                    p = "";
                for (l = 0; l != o.length; ++l)
                    if (!(o[l].s.c > i || o[l].s.r > a || o[l].e.c < i || o[l].e.r < a)) {
                        o[l].s.c == i && o[l].s.r == a || (u = !0), d["table:number-columns-spanned"] = o[l].e.c - o[l].s.c + 1, d["table:number-rows-spanned"] = o[l].e.r - o[l].s.r + 1;
                        break
                    } if (u) n.push("          <table:covered-table-cell/>\n");
                else {
                    var m = tr({
                            r: a,
                            c: i
                        }),
                        g = c ? (e[a] || [])[i] : e[m];
                    if (g && g.f && (d["table:formula"] = Fe(("of:=" + g.f.replace(Yi, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":")).replace(/;/g, "|").replace(/,/g, ";")), g.F && g.F.slice(0, m.length) == m)) {
                        var v = rr(g.F);
                        d["table:number-matrix-columns-spanned"] = v.e.c - v.s.c + 1, d["table:number-matrix-rows-spanned"] = v.e.r - v.s.r + 1
                    }
                    if (g) {
                        switch (g.t) {
                            case "b":
                                p = g.v ? "TRUE" : "FALSE", d["office:value-type"] = "boolean", d["office:boolean-value"] = g.v ? "true" : "false";
                                break;
                            case "n":
                                p = g.w || String(g.v || 0), d["office:value-type"] = "float", d["office:value"] = g.v || 0;
                                break;
                            case "s":
                            case "str":
                                p = null == g.v ? "" : g.v, d["office:value-type"] = "string";
                                break;
                            case "d":
                                p = g.w || oe(g.v).toISOString(), d["office:value-type"] = "date", d["office:date-value"] = oe(g.v).toISOString(), d["table:style-name"] = "ce1";
                                break;
                            default:
                                n.push(Sl);
                                continue
                        }
                        var E = Fe(p).replace(/  +/g, (function(e) {
                            return '<text:s text:c="' + e.length + '"/>'
                        })).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
                        if (g.l && g.l.Target) {
                            var S = g.l.Target;
                            "#" == (S = "#" == S.charAt(0) ? "#" + S.slice(1).replace(/\./, "!") : S).charAt(0) || S.match(/^\w+:/) || (S = "../" + S), E = Ze("text:a", E, {
                                "xlink:href": S.replace(/&/g, "&amp;")
                            })
                        }
                        n.push("          " + Ze("table:table-cell", Ze("text:p", E, {}), d) + "\n")
                    } else n.push(Sl)
                }
            }
            n.push("        </table:table-row>\n")
        }
        return n.push("      </table:table>\n"), n.join("")
    }, function(e, t) {
        var r = [Be],
            n = Qe({
                "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
                "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
                "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
                "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
                "xmlns:math": "http://www.w3.org/1998/Math/MathML",
                "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
                "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
                "xmlns:ooo": "http://openoffice.org/2004/office",
                "xmlns:ooow": "http://openoffice.org/2004/writer",
                "xmlns:oooc": "http://openoffice.org/2004/calc",
                "xmlns:dom": "http://www.w3.org/2001/xml-events",
                "xmlns:xforms": "http://www.w3.org/2002/xforms",
                "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
                "xmlns:rpt": "http://openoffice.org/2005/report",
                "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
                "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
                "xmlns:tableooo": "http://openoffice.org/2009/table",
                "xmlns:drawooo": "http://openoffice.org/2010/draw",
                "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
                "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
                "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
                "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
                "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
                "office:version": "1.2"
            }),
            a = Qe({
                "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
                "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
            });
        "fods" == t.bookType ? (r.push("<office:document" + n + a + ">\n"), r.push(on().replace(/office:document-meta/g, "office:meta"))) : r.push("<office:document-content" + n + ">\n"),
            function(e, t) {
                e.push(" <office:automatic-styles>\n"), e.push('  <number:date-style style:name="N37" number:automatic-order="true">\n'), e.push('   <number:month number:style="long"/>\n'), e.push("   <number:text>/</number:text>\n"), e.push('   <number:day number:style="long"/>\n'), e.push("   <number:text>/</number:text>\n"), e.push("   <number:year/>\n"), e.push("  </number:date-style>\n");
                var r = 0;
                t.SheetNames.map((function(e) {
                    return t.Sheets[e]
                })).forEach((function(t) {
                    if (t && t["!cols"])
                        for (var n = 0; n < t["!cols"].length; ++n)
                            if (t["!cols"][n]) {
                                var a = t["!cols"][n];
                                if (null == a.width && null == a.wpx && null == a.wch) continue;
                                ai(a), a.ods = r;
                                var i = t["!cols"][n].wpx + "px";
                                e.push('  <style:style style:name="co' + r + '" style:family="table-column">\n'), e.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + i + '"/>\n'), e.push("  </style:style>\n"), ++r
                            }
                }));
                var n = 0;
                t.SheetNames.map((function(e) {
                    return t.Sheets[e]
                })).forEach((function(t) {
                    if (t && t["!rows"])
                        for (var r = 0; r < t["!rows"].length; ++r)
                            if (t["!rows"][r]) {
                                t["!rows"][r].ods = n;
                                var a = t["!rows"][r].hpx + "px";
                                e.push('  <style:style style:name="ro' + n + '" style:family="table-row">\n'), e.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + a + '"/>\n'), e.push("  </style:style>\n"), ++n
                            }
                })), e.push('  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">\n'), e.push('   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>\n'), e.push("  </style:style>\n"), e.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n'), e.push(" </office:automatic-styles>\n")
            }(r, e), r.push("  <office:body>\n"), r.push("    <office:spreadsheet>\n");
        for (var i = 0; i != e.SheetNames.length; ++i) r.push(bl(e.Sheets[e.SheetNames[i]], e, i));
        return r.push("    </office:spreadsheet>\n"), r.push("  </office:body>\n"), "fods" == t.bookType ? r.push("</office:document>") : r.push("</office:document-content>"), r.join("")
    });

function Cl(e, t) {
    if ("fods" == t.bookType) return Bl(e, t);
    var r = be(),
        n = "",
        a = [],
        i = [];
    return Se(r, n = "mimetype", "application/vnd.oasis.opendocument.spreadsheet"), Se(r, n = "content.xml", Bl(e, t)), a.push([n, "text/xml"]), i.push([n, "ContentFile"]), Se(r, n = "styles.xml", wl(e, t)), a.push([n, "text/xml"]), i.push([n, "StylesFile"]), Se(r, n = "meta.xml", Be + on()), a.push([n, "text/xml"]), i.push([n, "MetadataFile"]), Se(r, n = "manifest.rdf", function(e) {
        var t, r, n = [Be];
        n.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n');
        for (var a = 0; a != e.length; ++a) n.push(an(e[a][0], e[a][1])), n.push((t = "", r = e[a][0], ['  <rdf:Description rdf:about="' + t + '">\n', '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + r + '"/>\n', "  </rdf:Description>\n"].join("")));
        return n.push(an("", "Document", "pkg")), n.push("</rdf:RDF>"), n.join("")
    }(i)), a.push([n, "application/rdf+xml"]), Se(r, n = "META-INF/manifest.xml", function(e) {
        var t = [Be];
        t.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n'), t.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n');
        for (var r = 0; r < e.length; ++r) t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + '"/>\n');
        return t.push("</manifest:manifest>"), t.join("")
    }(a)), r
}
Object.defineProperty && function() {
    var e = Object.defineProperty,
        t = Object.getOwnPropertyDescriptor,
        r = Object.getOwnPropertyNames,
        n = Object.prototype.hasOwnProperty,
        a = function(a) {
            return function(i, s) {
                return a && a.get(i) || (s = function(a, i, s, o) {
                    if (i && "object" == typeof i || "function" == typeof i)
                        for (var l, c = r(i), f = 0, h = c.length; f < h; f++) l = c[f], n.call(a, l) || !s && "default" === l || e(a, l, {
                            get: function(e) {
                                return i[e]
                            }.bind(null, l),
                            enumerable: !(o = t(i, l)) || o.enumerable
                        });
                    return a
                }(e({}, "__esModule", {
                    value: !0
                }), i, 1), a && a.set(i, s), s)
            }
        }("undefined" != typeof WeakMap ? new WeakMap : 0),
        i = {};
    ! function(t, r) {
        for (var n in r) e(t, n, {
            get: r[n],
            enumerable: !0
        })
    }(i, {
        parse_numbers: function() {
            return E
        }
    });
    var s = function(e) {
            return new DataView(e.buffer, e.byteOffset, e.byteLength)
        },
        o = function(e) {
            return "undefined" != typeof TextDecoder ? (new TextDecoder).decode(e) : Ve(P(e))
        },
        l = function(e) {
            var t = e.reduce((function(e, t) {
                    return e + t.length
                }), 0),
                r = new Uint8Array(t),
                n = 0;
            return e.forEach((function(e) {
                r.set(e, n), n += e.length
            })), r
        },
        c = function(e) {
            return 16843009 * ((e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135) >>> 24
        };

    function f(e, t) {
        var r = t ? t[0] : 0,
            n = 127 & e[r];
        e: if (e[r++] >= 128) {
            if (n |= (127 & e[r]) << 7, e[r++] < 128) break e;
            if (n |= (127 & e[r]) << 14, e[r++] < 128) break e;
            if (n |= (127 & e[r]) << 21, e[r++] < 128) break e;
            if (n += (127 & e[r]) * Math.pow(2, 28), ++r, e[r++] < 128) break e;
            if (n += (127 & e[r]) * Math.pow(2, 35), ++r, e[r++] < 128) break e;
            if (n += (127 & e[r]) * Math.pow(2, 42), ++r, e[r++] < 128) break e
        }
        return t && (t[0] = r), n
    }

    function h(e) {
        var t = 0,
            r = 127 & e[t];
        e: if (e[t++] >= 128) {
            if (r |= (127 & e[t]) << 7, e[t++] < 128) break e;
            if (r |= (127 & e[t]) << 14, e[t++] < 128) break e;
            if (r |= (127 & e[t]) << 21, e[t++] < 128) break e;
            r |= (127 & e[t]) << 28
        }
        return r
    }

    function u(e) {
        for (var t = [], r = [0]; r[0] < e.length;) {
            var n, a = r[0],
                i = f(e, r),
                s = 7 & i,
                o = 0;
            if (0 == (i = Math.floor(i / 8))) break;
            switch (s) {
                case 0:
                    for (var l = r[0]; e[r[0]++] >= 128;);
                    n = e.slice(l, r[0]);
                    break;
                case 5:
                    o = 4, n = e.slice(r[0], r[0] + o), r[0] += o;
                    break;
                case 1:
                    o = 8, n = e.slice(r[0], r[0] + o), r[0] += o;
                    break;
                case 2:
                    o = f(e, r), n = e.slice(r[0], r[0] + o), r[0] += o;
                    break;
                default:
                    throw new Error("PB Type ".concat(s, " for Field ").concat(i, " at offset ").concat(a))
            }
            var c = {
                offset: a,
                data: n,
                type: s
            };
            null == t[i] ? t[i] = [c] : t[i].push(c)
        }
        return t
    }

    function d(e, t) {
        return e ? e.map((function(e) {
            var r;
            try {
                return t(e.data)
            } catch (t) {
                var n = null == (r = t.message) ? void 0 : r.match(/at offset (\d+)/);
                throw n && (t.message = t.message.replace(/at offset (\d+)/, "at offset " + (+n[1] + e.offset))), t
            }
        })) : []
    }

    function p(e, t) {
        if (0 != e) throw new Error("Unexpected Snappy chunk type ".concat(e));
        for (var r = [0], n = f(t, r), a = []; r[0] < t.length;) {
            var i = 3 & t[r[0]];
            if (0 != i) {
                var s = 0,
                    o = 0;
                if (1 == i ? (o = 4 + (t[r[0]] >> 2 & 7), s = (224 & t[r[0]++]) << 3, s |= t[r[0]++]) : (o = 1 + (t[r[0]++] >> 2), 2 == i ? (s = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (s = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), a = [l(a)], 0 == s) throw new Error("Invalid offset 0");
                if (s > a[0].length) throw new Error("Invalid offset beyond length");
                if (o >= s)
                    for (a.push(a[0].slice(-s)), o -= s; o >= a[a.length - 1].length;) a.push(a[a.length - 1]), o -= a[a.length - 1].length;
                a.push(a[0].slice(-s, -s + o))
            } else {
                var c = t[r[0]++] >> 2;
                if (c < 60) ++c;
                else {
                    var h = c - 59;
                    c = t[r[0]], h > 1 && (c |= t[r[0] + 1] << 8), h > 2 && (c |= t[r[0] + 2] << 16), h > 3 && (c |= t[r[0] + 3] << 24), c >>>= 0, c++, r[0] += h
                }
                a.push(t.slice(r[0], r[0] + c)), r[0] += c
            }
        }
        var u = l(a);
        if (u.length != n) throw new Error("Unexpected length: ".concat(u.length, " != ").concat(n));
        return u
    }

    function m(e, t, r) {
        var n, a = s(e),
            i = e[1],
            o = a.getUint32(8, !0),
            l = 12,
            c = -1,
            f = -1,
            h = NaN,
            u = NaN,
            d = new Date(2001, 0, 1);
        switch (1 & o && (h = function(e, t) {
                for (var r = (127 & e[t + 15]) << 7 | e[t + 14] >> 1, n = 1 & e[t + 14], a = t + 13; a >= t; --a) n = 256 * n + e[a];
                return (128 & e[t + 15] ? -n : n) * Math.pow(10, r - 6176)
            }(e, l), l += 16), 2 & o && (u = a.getFloat64(l, !0), l += 8), 4 & o && (d.setTime(d.getTime() + 1e3 * a.getFloat64(l, !0)), l += 8), 8 & o && (f = a.getUint32(l, !0), l += 4), 16 & o && (c = a.getUint32(l, !0), l += 4), i) {
            case 0:
                break;
            case 2:
            case 10:
                n = {
                    t: "n",
                    v: h
                };
                break;
            case 3:
                n = {
                    t: "s",
                    v: t[f]
                };
                break;
            case 5:
                n = {
                    t: "d",
                    v: d
                };
                break;
            case 6:
                n = {
                    t: "b",
                    v: u > 0
                };
                break;
            case 7:
                n = {
                    t: "n",
                    v: u
                };
                break;
            case 8:
                n = {
                    t: "e",
                    v: 0
                };
                break;
            case 9:
                if (!(c > -1)) throw new Error("Unsupported cell type ".concat(i, " : ").concat(31 & o, " : ").concat(e.slice(0, 4)));
                n = {
                    t: "s",
                    v: r[c]
                };
                break;
            default:
                throw new Error("Unsupported cell type ".concat(i, " : ").concat(31 & o, " : ").concat(e.slice(0, 4)))
        }
        return n
    }

    function g(e, t, r) {
        switch (e[0]) {
            case 3:
            case 4:
                return function(e, t, r) {
                    var n, a = s(e),
                        i = e[4 == e[0] ? 1 : 2],
                        o = a.getUint32(4, !0),
                        l = 12 + 4 * c(3470 & o),
                        f = -1,
                        h = -1,
                        u = NaN,
                        d = new Date(2001, 0, 1);
                    switch (512 & o && (f = a.getUint32(l, !0), l += 4), l += 4 * c(12288 & o), 16 & o && (h = a.getUint32(l, !0), l += 4), 32 & o && (u = a.getFloat64(l, !0), l += 8), 64 & o && (d.setTime(d.getTime() + 1e3 * a.getFloat64(l, !0)), l += 8), i) {
                        case 0:
                            break;
                        case 2:
                        case 7:
                            n = {
                                t: "n",
                                v: u
                            };
                            break;
                        case 3:
                            n = {
                                t: "s",
                                v: t[h]
                            };
                            break;
                        case 5:
                            n = {
                                t: "d",
                                v: d
                            };
                            break;
                        case 6:
                            n = {
                                t: "b",
                                v: u > 0
                            };
                            break;
                        case 8:
                            n = {
                                t: "e",
                                v: 0
                            };
                            break;
                        case 9:
                            if (f > -1) n = {
                                t: "s",
                                v: r[f]
                            };
                            else if (h > -1) n = {
                                t: "s",
                                v: t[h]
                            };
                            else {
                                if (isNaN(u)) throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
                                n = {
                                    t: "n",
                                    v: u
                                }
                            }
                            break;
                        default:
                            throw new Error("Unsupported cell type ".concat(e.slice(0, 4)))
                    }
                    return n
                }(e, t, r);
            case 5:
                return m(e, t, r);
            default:
                throw new Error("Unsupported payload version ".concat(e[0]))
        }
    }
    var v = function(e) {
        return "".concat(function(e) {
            var t = "";
            for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode((e - 1) % 26 + 65) + t;
            return t
        }(e.c)).concat(e.r + 1)
    };
    var E = function(e) {
        var t, r = [];
        if (e.FullPaths.forEach((function(e) {
                if (e.match(/\.iwpv2/)) throw new Error("Unsupported password protection")
            })), e.FileIndex.forEach((function(e) {
                if (e.name.match(/\.iwa$/)) {
                    var t, n;
                    try {
                        t = function(e) {
                            for (var t = [], r = 0; r < e.length;) {
                                var n = e[r++],
                                    a = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
                                r += 3, t.push(p(n, e.slice(r, r + a))), r += a
                            }
                            if (r !== e.length) throw new Error("data is not a valid framed stream!");
                            return l(t)
                        }(e.content)
                    } catch (e) {
                        return
                    }
                    try {
                        n = function(e) {
                            for (var t = [], r = [0]; r[0] < e.length;) {
                                var n = f(e, r),
                                    a = u(e.slice(r[0], r[0] + n));
                                r[0] += n;
                                var i = {
                                    id: h(a[1][0].data),
                                    messages: []
                                };
                                a[2].forEach((function(t) {
                                    var n = u(t.data),
                                        a = h(n[3][0].data);
                                    i.messages.push({
                                        meta: n,
                                        data: e.slice(r[0], r[0] + a)
                                    }), r[0] += a
                                })), t.push(i)
                            }
                            return t
                        }(t)
                    } catch (e) {
                        return
                    }
                    n.forEach((function(e) {
                        r[+e.id] = e.messages
                    }))
                }
            })), !r.length) throw new Error("File has no messages");
        if (r.forEach((function(e) {
                e.forEach((function(e) {
                    if (1 == h(e.meta[1][0].data) >>> 0) {
                        if (t) throw new Error("Document has multiple roots");
                        t = e
                    }
                }))
            })), !t) throw new Error("Cannot find Document root");
        return function(e, t) {
            var r = {
                Sheets: {},
                SheetNames: []
            };
            if (d(u(t.data)[1], S).forEach((function(t) {
                    e[t].forEach((function(t) {
                        if (2 == h(t.meta[1][0].data)) {
                            var n = function(e, t) {
                                var r, n = u(t.data),
                                    a = {
                                        name: (null == (r = n[1]) ? void 0 : r[0]) ? o(n[1][0].data) : "",
                                        sheets: []
                                    };
                                return d(n[2], S).forEach((function(t) {
                                    e[t].forEach((function(t) {
                                        6e3 == h(t.meta[1][0].data) && a.sheets.push(function(e, t) {
                                            var r = u(t.data),
                                                n = {
                                                    "!ref": "A1"
                                                },
                                                a = e[S(r[2][0].data)],
                                                i = h(a[0].meta[1][0].data);
                                            if (6001 != i) throw new Error("6000 unexpected reference to ".concat(i));
                                            return function(e, t, r) {
                                                var n, a = u(t.data),
                                                    i = {
                                                        s: {
                                                            r: 0,
                                                            c: 0
                                                        },
                                                        e: {
                                                            r: 0,
                                                            c: 0
                                                        }
                                                    };
                                                if (i.e.r = (h(a[6][0].data) >>> 0) - 1, i.e.r < 0) throw new Error("Invalid row varint ".concat(a[6][0].data));
                                                if (i.e.c = (h(a[7][0].data) >>> 0) - 1, i.e.c < 0) throw new Error("Invalid col varint ".concat(a[7][0].data));
                                                r["!ref"] = (s = i, v(s.s) + ":" + v(s.e));
                                                var s;
                                                var o = u(a[4][0].data),
                                                    l = b(e, e[S(o[4][0].data)][0]),
                                                    c = (null == (n = o[17]) ? void 0 : n[0]) ? b(e, e[S(o[17][0].data)][0]) : [],
                                                    f = u(o[3][0].data),
                                                    d = [];
                                                f[1].forEach((function(t) {
                                                    var r = u(t.data),
                                                        n = e[S(r[2][0].data)][0],
                                                        a = h(n.meta[1][0].data);
                                                    if (6002 != a) throw new Error("6001 unexpected reference to ".concat(a));
                                                    d.push({
                                                        id: h(r[1][0].data),
                                                        ref: B(e, n)
                                                    })
                                                })), d.forEach((function(e) {
                                                    e.ref.forEach((function(e, t) {
                                                        e.forEach((function(e, n) {
                                                            var a = v({
                                                                    r: t,
                                                                    c: n
                                                                }),
                                                                i = g(e, l, c);
                                                            i && (r[a] = i)
                                                        }))
                                                    }))
                                                }))
                                            }(e, a[0], n), n
                                        }(e, t))
                                    }))
                                })), a
                            }(e, t);
                            n.sheets.forEach((function(e) {
                                ! function(e, t, r) {
                                    if (r) {
                                        if (e.SheetNames.indexOf(r) > -1)
                                            for (n = 1; n < 9999; ++n)
                                                if (-1 == e.SheetNames.indexOf("".concat(r, "_").concat(n))) {
                                                    r = "".concat(r, "_").concat(n);
                                                    break
                                                }
                                    } else
                                        for (var n = 1; n < 9999 && -1 != e.SheetNames.indexOf(r = "Sheet ".concat(n)); ++n);
                                    e.SheetNames.push(r), e.Sheets[r] = t
                                }(r, e, n.name)
                            }))
                        }
                    }))
                })), 0 == r.SheetNames.length) throw new Error("Empty NUMBERS file");
            return r
        }(r, t)
    };

    function S(e) {
        return f(u(e)[1][0].data)
    }

    function b(e, t) {
        var r = u(t.data),
            n = h(r[1][0].data),
            a = r[3],
            i = [];
        return (a || []).forEach((function(t) {
            var r = u(t.data),
                a = h(r[1][0].data) >>> 0;
            switch (n) {
                case 1:
                    i[a] = o(r[3][0].data);
                    break;
                case 8:
                    var s = u(e[S(r[9][0].data)][0].data),
                        l = e[S(s[1][0].data)][0],
                        c = h(l.meta[1][0].data);
                    if (2001 != c) throw new Error("2000 unexpected reference to ".concat(c));
                    var f = u(l.data);
                    i[a] = f[3].map((function(e) {
                        return o(e.data)
                    })).join("")
            }
        })), i
    }

    function w(e) {
        for (var t, r, n, a, i, o, l, c, f, d, p = u(e), m = h(p[1][0].data) >>> 0, g = null == (r = null == (t = p[3]) ? void 0 : t[0]) ? void 0 : r.data, v = (null == (a = null == (n = p[4]) ? void 0 : n[0]) ? void 0 : a.data) && s(p[4][0].data), E = null == (o = null == (i = p[6]) ? void 0 : i[0]) ? void 0 : o.data, S = (null == (c = null == (l = p[7]) ? void 0 : l[0]) ? void 0 : c.data) && s(p[7][0].data), b = (null == (d = null == (f = p[8]) ? void 0 : f[0]) ? void 0 : d.data) && h(p[8][0].data) > 0 || !1 ? 4 : 1, w = [], B = 0, C = 0; C < v.byteLength / 2; ++C) E && S && (B = S.getUint16(2 * C, !0) * b) < E.length ? w[C] = E.subarray(B, S.getUint16(2 * C + 2, !0) * b) : g && v && (B = v.getUint16(2 * C, !0) * b) < g.length && (w[C] = g.subarray(B, v.getUint16(2 * C + 2, !0) * b));
        return {
            R: m,
            cells: w
        }
    }

    function B(e, t) {
        return d(u(t.data)[5], w).reduce((function(e, t) {
            return e[t.R] || (e[t.R] = []), t.cells.forEach((function(r, n) {
                if (e[t.R][n]) throw new Error("Duplicate cell r=".concat(t.R, " c=").concat(n));
                e[t.R][n] = r
            })), e
        }), [])
    }
    a(i)
}();

function _l(e) {
    return function(t) {
        for (var r = 0; r != e.length; ++r) {
            var n = e[r];
            void 0 === t[n[0]] && (t[n[0]] = n[1]), "n" === n[2] && (t[n[0]] = Number(t[n[0]]))
        }
    }
}
var yl = _l([
    ["cellDates", !1],
    ["bookSST", !1],
    ["bookType", "xlsx"],
    ["compression", !1],
    ["WTF", !1]
]);

function Tl(e, t) {
    return "ods" == t.bookType ? Cl(e, t) : function(e, t) {
        Hi = 1024, e && !e.SSF && (e.SSF = L.get_table());
        e && e.SSF && (U(L), L.load_table(e.SSF), t.revssf = q(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF);
        t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Js ? t.revStrings = new Map : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
        var r = "xlsb" == t.bookType ? "bin" : "xml",
            n = $i.indexOf(t.bookType) > -1,
            a = {
                workbooks: [],
                sheets: [],
                charts: [],
                dialogs: [],
                macros: [],
                rels: [],
                strs: [],
                comments: [],
                links: [],
                coreprops: [],
                extprops: [],
                custprops: [],
                themes: [],
                styles: [],
                calcchains: [],
                vba: [],
                drawings: [],
                TODO: [],
                xmlns: ""
            };
        yl(t = t || {});
        var i = be(),
            s = "",
            o = 0;
        t.cellXfs = [], eo(t.cellXfs, {}, {
            revssf: {
                General: 0
            }
        }), e.Props || (e.Props = {});
        if (Se(i, s = "docProps/core.xml", hn(e.Props, t)), a.coreprops.push(s), nn(t.rels, 2, s, Qr.CORE_PROPS), s = "docProps/app.xml", e.Props && e.Props.SheetNames);
        else if (e.Workbook && e.Workbook.Sheets) {
            for (var l = [], c = 0; c < e.SheetNames.length; ++c) 2 != (e.Workbook.Sheets[c] || {}).Hidden && l.push(e.SheetNames[c]);
            e.Props.SheetNames = l
        } else e.Props.SheetNames = e.SheetNames;
        e.Props.Worksheets = e.Props.SheetNames.length, Se(i, s, pn(e.Props)), a.extprops.push(s), nn(t.rels, 3, s, Qr.EXT_PROPS), e.Custprops !== e.Props && Y(e.Custprops || {}).length > 0 && (Se(i, s = "docProps/custom.xml", gn(e.Custprops)), a.custprops.push(s), nn(t.rels, 4, s, Qr.CUST_PROPS));
        for (o = 1; o <= e.SheetNames.length; ++o) {
            var f = {
                    "!id": {}
                },
                h = e.Sheets[e.SheetNames[o - 1]];
            (h || {})["!type"];
            if (Se(i, s = "xl/worksheets/sheet" + o + "." + r, Ho(o - 1, s, t, e, f)), a.sheets.push(s), nn(t.wbrels, -1, "worksheets/sheet" + o + "." + r, Qr.WS[0]), h) {
                var u = h["!comments"],
                    d = !1;
                if (u && u.length > 0) {
                    var p = "xl/comments" + o + "." + r;
                    Se(i, p, Vo(u, p, t)), a.comments.push(p), nn(f, -1, "../comments" + o + "." + r, Qr.CMNT), d = !0
                }
                h["!legacy"] && d && Se(i, "xl/drawings/vmlDrawing" + o + ".vml", Vi(o, h["!comments"])), delete h["!comments"], delete h["!legacy"]
            }
            f["!id"].rId1 && Se(i, Zr(s), tn(f))
        }
        null != t.Strings && t.Strings.length > 0 && (Se(i, s = "xl/sharedStrings." + r, function(e, t, r) {
            return (".bin" === t.slice(-4) ? La : Na)(e, r)
        }(t.Strings, s, t)), a.strs.push(s), nn(t.wbrels, -1, "sharedStrings." + r, Qr.SST));
        Se(i, s = "xl/workbook." + r, function(e, t, r) {
            return (".bin" === t.slice(-4) ? Uo : No)(e, r)
        }(e, s, t)), a.workbooks.push(s), nn(t.rels, 1, s, Qr.WB), Se(i, s = "xl/theme/theme1.xml", Mi(e.Themes, t)), a.themes.push(s), nn(t.wbrels, -1, "theme/theme1.xml", Qr.THEME), Se(i, s = "xl/styles." + r, function(e, t, r) {
            return (".bin" === t.slice(-4) ? Ai : mi)(e, r)
        }(e, s, t)), a.styles.push(s), nn(t.wbrels, -1, "styles." + r, Qr.STY), e.vbaraw && n && (Se(i, s = "xl/vbaProject.bin", e.vbaraw), a.vba.push(s), nn(t.wbrels, -1, "vbaProject.bin", Qr.VBA));
        return Se(i, "[Content_Types].xml", qr(a, t)), Se(i, "_rels/.rels", tn(t.rels)), Se(i, "xl/_rels/workbook." + r + ".rels", tn(t.wbrels)), delete t.revssf, delete t.ssf, i
    }(e, t)
}

function Al(e, t) {
    var r = "";
    switch ((t || {}).type || "base64") {
        case "buffer":
        case "array":
            return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
        case "base64":
            r = y.decode(e.slice(0, 12));
            break;
        case "binary":
            r = e;
            break;
        default:
            throw new Error("Unrecognized type " + (t && t.type || "undefined"))
    }
    return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)]
}

function Rl(e) {
    return function(t, r) {
        var n = 0;
        if (r.sheet && (n = "number" == typeof r.sheet ? r.sheet : t.SheetNames.indexOf(r.sheet), !t.SheetNames[n])) throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
        return e.from_sheet(t.Sheets[t.SheetNames[n]], r, t)
    }
}
var xl = Rl(pl),
    Il = Rl({
        from_sheet: Jl
    }),
    Dl = Rl(void 0 !== _a ? _a : {}),
    Ol = Rl(void 0 !== ya ? ya : {}),
    Pl = Rl(void 0 !== Aa ? Aa : {}),
    kl = Rl(void 0 !== qa ? qa : {}),
    Fl = Rl({
        from_sheet: ql
    }),
    Nl = Rl(void 0 !== Ca ? Ca : {}),
    Ml = Rl(void 0 !== Ta ? Ta : {}),
    Ll = Rl(void 0 !== Ra ? {
        from_sheet: Ra.sheet_to_wk1
    } : {});

function Ul(e, t) {
    switch (t.type) {
        case "base64":
        case "binary":
            break;
        case "buffer":
        case "array":
            t.type = "";
            break;
        case "file":
            return z(t.file, X.write(e, {
                type: T ? "buffer" : ""
            }));
        case "string":
            throw new Error("'string' output type invalid for '" + t.bookType + "' files");
        default:
            throw new Error("Unrecognized type " + t.type)
    }
    return X.write(e, t)
}

function Hl(e, t) {
    var r = {};
    if (t.compression && (r.compression = "DEFLATE"), t.password) r.type = T ? "nodebuffer" : "string";
    else switch (t.type) {
        case "base64":
            r.type = "base64";
            break;
        case "binary":
            r.type = "string";
            break;
        case "string":
            throw new Error("'string' output type invalid for '" + t.bookType + "' files");
        case "buffer":
        case "file":
            r.type = T ? "nodebuffer" : "string";
            break;
        default:
            throw new Error("Unrecognized type " + t.type)
    }
    var n = e.FullPaths ? X.write(e, {
        fileType: "zip",
        type: {
            nodebuffer: "buffer",
            string: "binary"
        } [r.type] || r.type,
        compression: !!t.compression
    }) : e.generate(r);
    if ("undefined" != typeof Deno && "string" == typeof n) {
        if ("binary" == t.type || "base64" == t.type) return n;
        n = new Uint8Array(O(n))
    }
    return t.password && "undefined" != typeof encrypt_agile ? Ul(encrypt_agile(n, t.password), t) : "file" === t.type ? z(t.file, n) : "string" == t.type ? Ve(n) : n
}

function Vl(e, t, r) {
    r || (r = "");
    var n = r + e;
    switch (t.type) {
        case "base64":
            return y.encode(We(n));
        case "binary":
            return We(n);
        case "string":
            return e;
        case "file":
            return z(t.file, n, "utf8");
        case "buffer":
            return T ? A(n, "utf8") : "undefined" != typeof TextEncoder ? (new TextEncoder).encode(n) : Vl(n, {
                type: "binary"
            }).split("").map((function(e) {
                return e.charCodeAt(0)
            }))
    }
    throw new Error("Unrecognized type " + t.type)
}

function Wl(e, t) {
    switch (t.type) {
        case "string":
        case "base64":
        case "binary":
            for (var r = "", n = 0; n < e.length; ++n) r += String.fromCharCode(e[n]);
            return "base64" == t.type ? y.encode(r) : "string" == t.type ? Ve(r) : r;
        case "file":
            return z(t.file, e);
        case "buffer":
            return e;
        default:
            throw new Error("Unrecognized type " + t.type)
    }
}

function Xl(e, t) {
    E(), ko(e);
    var r = ce(t || {});
    if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), "array" == r.type) {
        r.type = "binary";
        var n = Xl(e, r);
        return r.type = "array", O(n)
    }
    switch (r.bookType || "xlsb") {
        case "xml":
        case "xlml":
            return Vl(Ko(e, r), r);
        case "slk":
        case "sylk":
            return Vl(Dl(e, r), r);
        case "htm":
        case "html":
            return Vl(xl(e, r), r);
        case "txt":
            return function(e, t) {
                switch (t.type) {
                    case "base64":
                        return y.encode(e);
                    case "binary":
                    case "string":
                        return e;
                    case "file":
                        return z(t.file, e, "binary");
                    case "buffer":
                        return T ? A(e, "binary") : e.split("").map((function(e) {
                            return e.charCodeAt(0)
                        }))
                }
                throw new Error("Unrecognized type " + t.type)
            }(Fl(e, r), r);
        case "csv":
            return Vl(Il(e, r), r, "\ufeff");
        case "dif":
            return Vl(Ol(e, r), r);
        case "dbf":
            return Wl(Nl(e, r), r);
        case "prn":
            return Vl(Pl(e, r), r);
        case "rtf":
            return Vl(kl(e, r), r);
        case "eth":
            return Vl(Ml(e, r), r);
        case "fods":
            return Vl(Cl(e, r), r);
        case "wk1":
            return Wl(Ll(e, r), r);
        case "wk3":
            return Wl(Ra.book_to_wk3(e, r), r);
        case "biff2":
            r.biff || (r.biff = 2);
        case "biff3":
            r.biff || (r.biff = 3);
        case "biff4":
            return r.biff || (r.biff = 4), Wl(dl(e, r), r);
        case "biff5":
            r.biff || (r.biff = 5);
        case "biff8":
        case "xla":
        case "xls":
            return r.biff || (r.biff = 8),
                function(e, t) {
                    var r = t || {};
                    return Ul(Zo(e, r), r)
                }(e, r);
        case "xlsx":
        case "xlsm":
        case "xlam":
        case "xlsb":
        case "ods":
            return function(e, t) {
                var r = ce(t || {});
                return Hl(Tl(e, r), r)
            }(e, r);
        default:
            throw new Error("Unrecognized bookType |" + r.bookType + "|")
    }
}

function Gl(e) {
    if (!e.bookType) {
        var t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
        t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)), e.bookType = {
            xls: "biff8",
            htm: "html",
            slk: "sylk",
            socialcalc: "eth",
            Sh33tJS: "WTF"
        } [e.bookType] || e.bookType
    }
}

function jl(e, t, r) {
    var n = r || {};
    return n.type = "file", n.file = t, Gl(n), Xl(e, n)
}

function $l(e, t, r, n, a, i, s, o) {
    var l = qt(r),
        c = o.defval,
        f = o.raw || !Object.prototype.hasOwnProperty.call(o, "raw"),
        h = !0,
        u = 1 === a ? [] : {};
    if (1 !== a)
        if (Object.defineProperty) try {
            Object.defineProperty(u, "__rowNum__", {
                value: r,
                enumerable: !1
            })
        } catch (e) {
            u.__rowNum__ = r
        } else u.__rowNum__ = r;
    if (!s || e[r])
        for (var d = t.s.c; d <= t.e.c; ++d) {
            var p = s ? e[r][d] : e[n[d] + l];
            if (void 0 !== p && void 0 !== p.t) {
                var m = p.v;
                switch (p.t) {
                    case "z":
                        if (null == m) break;
                        continue;
                    case "e":
                        m = 0 == m ? null : void 0;
                        break;
                    case "s":
                    case "d":
                    case "b":
                    case "n":
                        break;
                    default:
                        throw new Error("unrecognized type " + p.t)
                }
                if (null != i[d]) {
                    if (null == m)
                        if ("e" == p.t && null === m) u[i[d]] = null;
                        else if (void 0 !== c) u[i[d]] = c;
                    else {
                        if (!f || null !== m) continue;
                        u[i[d]] = null
                    } else u[i[d]] = f || o.rawNumbers && "n" == p.t ? m : sr(p, m, o);
                    null != m && (h = !1)
                }
            } else {
                if (void 0 === c) continue;
                null != i[d] && (u[i[d]] = c)
            }
        }
    return {
        row: u,
        isempty: h
    }
}

function zl(e, t) {
    if (null == e || null == e["!ref"]) return [];
    var r = {
            t: "n",
            v: 0
        },
        n = 0,
        a = 1,
        i = [],
        s = 0,
        o = "",
        l = {
            s: {
                r: 0,
                c: 0
            },
            e: {
                r: 0,
                c: 0
            }
        },
        c = t || {},
        f = null != c.range ? c.range : e["!ref"];
    switch (1 === c.header ? n = 1 : "A" === c.header ? n = 2 : Array.isArray(c.header) ? n = 3 : null == c.header && (n = 0), typeof f) {
        case "string":
            l = ar(f);
            break;
        case "number":
            (l = ar(e["!ref"])).s.r = f;
            break;
        default:
            l = f
    }
    n > 0 && (a = 0);
    var h = qt(l.s.r),
        u = [],
        d = [],
        p = 0,
        m = 0,
        g = Array.isArray(e),
        v = l.s.r,
        E = 0,
        S = 0;
    for (g && !e[v] && (e[v] = []), E = l.s.c; E <= l.e.c; ++E) switch (u[E] = Zt(E), r = g ? e[v][E] : e[u[E] + h], n) {
        case 1:
            i[E] = E - l.s.c;
            break;
        case 2:
            i[E] = u[E];
            break;
        case 3:
            i[E] = c.header[E - l.s.c];
            break;
        default:
            for (null == r && (r = {
                    w: "__EMPTY",
                    t: "s"
                }), o = s = sr(r, null, c), m = 0, S = 0; S < i.length; ++S) i[S] == o && (o = s + "_" + ++m);
            i[E] = o
    }
    for (v = l.s.r + a; v <= l.e.r; ++v) {
        var b = $l(e, l, v, u, n, i, g, c);
        (!1 === b.isempty || (1 === n ? !1 !== c.blankrows : c.blankrows)) && (d[p++] = b.row)
    }
    return d.length = p, d
}
var Yl = /"/g;

function Kl(e, t, r, n, a, i, s, o) {
    for (var l = !0, c = [], f = "", h = qt(r), u = t.s.c; u <= t.e.c; ++u)
        if (n[u]) {
            var d = o.dense ? (e[r] || [])[u] : e[n[u] + h];
            if (null == d) f = "";
            else if (null != d.v) {
                l = !1, f = "" + (o.rawNumbers && "n" == d.t ? d.v : sr(d, null, o));
                for (var p = 0, m = 0; p !== f.length; ++p)
                    if ((m = f.charCodeAt(p)) === a || m === i || 34 === m || o.forceQuotes) {
                        f = '"' + f.replace(Yl, '""') + '"';
                        break
                    }
                "ID" == f && (f = '"ID"')
            } else null == d.f || d.F ? f = "" : (l = !1, (f = "=" + d.f).indexOf(",") >= 0 && (f = '"' + f.replace(Yl, '""') + '"'));
            c.push(f)
        } return !1 === o.blankrows && l ? null : c.join(s)
}

function Jl(e, t) {
    var r = [],
        n = null == t ? {} : t;
    if (null == e || null == e["!ref"]) return "";
    var a = ar(e["!ref"]),
        i = void 0 !== n.FS ? n.FS : ",",
        s = i.charCodeAt(0),
        o = void 0 !== n.RS ? n.RS : "\n",
        l = o.charCodeAt(0),
        c = new RegExp(("|" == i ? "\\|" : i) + "+$"),
        f = "",
        h = [];
    n.dense = Array.isArray(e);
    for (var u = n.skipHidden && e["!cols"] || [], d = n.skipHidden && e["!rows"] || [], p = a.s.c; p <= a.e.c; ++p)(u[p] || {}).hidden || (h[p] = Zt(p));
    for (var m = a.s.r; m <= a.e.r; ++m)(d[m] || {}).hidden || null != (f = Kl(e, a, m, h, s, l, i, n)) && (n.strip && (f = f.replace(c, "")), r.push(f + o));
    return delete n.dense, r.join("")
}

function ql(e, t) {
    t || (t = {}), t.FS = "\t", t.RS = "\n";
    var r = Jl(e, t);
    if (void 0 === b || "string" == t.type) return r;
    var n = b.utils.encode(1200, r, "str");
    return String.fromCharCode(255) + String.fromCharCode(254) + n
}

function Ql(e, t, r) {
    var n, a = r || {},
        i = +!a.skipHeader,
        s = e || {},
        o = 0,
        l = 0;
    if (s && null != a.origin)
        if ("number" == typeof a.origin) o = a.origin;
        else {
            var c = "string" == typeof a.origin ? er(a.origin) : a.origin;
            o = c.r, l = c.c
        } var f = {
        s: {
            c: 0,
            r: 0
        },
        e: {
            c: l,
            r: o + t.length - 1 + i
        }
    };
    if (s["!ref"]) {
        var h = ar(s["!ref"]);
        f.e.c = Math.max(f.e.c, h.e.c), f.e.r = Math.max(f.e.r, h.e.r), -1 == o && (o = h.e.r + 1, f.e.r = o + t.length - 1 + i)
    } else - 1 == o && (o = 0, f.e.r = t.length - 1 + i);
    var u = a.header || [],
        d = 0;
    t.forEach((function(e, t) {
        Y(e).forEach((function(r) {
            -1 == (d = u.indexOf(r)) && (u[d = u.length] = r);
            var c = e[r],
                f = "z",
                h = "",
                p = tr({
                    c: l + d,
                    r: o + t + i
                });
            n = Zl.sheet_get_cell(s, p), !c || "object" != typeof c || c instanceof Date ? ("number" == typeof c ? f = "n" : "boolean" == typeof c ? f = "b" : "string" == typeof c ? f = "s" : c instanceof Date ? (f = "d", a.cellDates || (f = "n", c = Z(c)), h = a.dateNF || L._table[14]) : null === c && a.nullError && (f = "e", c = 0), n ? (n.t = f, n.v = c, delete n.w, delete n.R, h && (n.z = h)) : s[p] = n = {
                t: f,
                v: c
            }, h && (n.z = h)) : s[p] = c
        }))
    })), f.e.c = Math.max(f.e.c, l + u.length - 1);
    var p = qt(o);
    if (i)
        for (d = 0; d < u.length; ++d) s[Zt(d + l) + p] = {
            t: "s",
            v: u[d]
        };
    return s["!ref"] = nr(f), s
}
var Zl = {
    encode_col: Zt,
    encode_row: qt,
    encode_cell: tr,
    encode_range: nr,
    decode_col: Qt,
    decode_row: Jt,
    split_cell: function(e) {
        return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",")
    },
    decode_cell: er,
    decode_range: rr,
    format_cell: sr,
    sheet_add_aoa: lr,
    sheet_add_json: Ql,
    sheet_add_dom: ml,
    aoa_to_sheet: cr,
    json_to_sheet: function(e, t) {
        return Ql(null, e, t)
    },
    table_to_sheet: gl,
    table_to_book: function(e, t) {
        return or(gl(e, t), t)
    },
    sheet_to_csv: Jl,
    sheet_to_txt: ql,
    sheet_to_json: zl,
    sheet_to_html: pl.from_sheet,
    sheet_to_formulae: function(e) {
        var t, r = "",
            n = "";
        if (null == e || null == e["!ref"]) return [];
        var a, i = ar(e["!ref"]),
            s = "",
            o = [],
            l = [],
            c = Array.isArray(e);
        for (a = i.s.c; a <= i.e.c; ++a) o[a] = Zt(a);
        for (var f = i.s.r; f <= i.e.r; ++f)
            for (s = qt(f), a = i.s.c; a <= i.e.c; ++a)
                if (r = o[a] + s, n = "", void 0 !== (t = c ? (e[f] || [])[a] : e[r])) {
                    if (null != t.F) {
                        if (r = t.F, !t.f) continue;
                        n = t.f, -1 == r.indexOf(":") && (r = r + ":" + r)
                    }
                    if (null != t.f) n = t.f;
                    else {
                        if ("z" == t.t) continue;
                        if ("n" == t.t && null != t.v) n = "" + t.v;
                        else if ("b" == t.t) n = t.v ? "TRUE" : "FALSE";
                        else if (void 0 !== t.w) n = "'" + t.w;
                        else {
                            if (void 0 === t.v) continue;
                            n = "s" == t.t ? "'" + t.v : "" + t.v
                        }
                    }
                    l[l.length] = r + "=" + n
                } return l
    },
    sheet_to_row_object_array: zl
};
! function(e) {
    function t(e, t, r) {
        return null != e[t] ? e[t] : e[t] = r
    }

    function r(e, t, n) {
        if ("string" == typeof t) {
            if (Array.isArray(e)) {
                var a = er(t);
                return e[a.r] || (e[a.r] = []), e[a.r][a.c] || (e[a.r][a.c] = {
                    t: "z"
                })
            }
            return e[t] || (e[t] = {
                t: "z"
            })
        }
        return r(e, tr("number" != typeof t ? t : {
            r: t,
            c: n || 0
        }))
    }
    e.consts = e.consts || {}, e.sheet_get_cell = r, e.book_new = function() {
        return {
            SheetNames: [],
            Sheets: {}
        }
    }, e.book_append_sheet = function(e, t, r) {
        if (!r)
            for (var n = 1; n <= 65535 && -1 != e.SheetNames.indexOf(r = "Sheet" + n); ++n, r = void 0);
        if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
        if (Po(r), e.SheetNames.indexOf(r) >= 0) throw new Error("Worksheet with name |" + r + "| already exists!");
        e.SheetNames.push(r), e.Sheets[r] = t
    }, e.book_set_sheet_visibility = function(e, r, n) {
        t(e, "Workbook", {}), t(e.Workbook, "Sheets", []);
        var a = function(e, t) {
            if ("number" == typeof t) {
                if (t >= 0 && e.SheetNames.length > t) return t;
                throw new Error("Cannot find sheet # " + t)
            }
            if ("string" == typeof t) {
                var r = e.SheetNames.indexOf(t);
                if (r > -1) return r;
                throw new Error("Cannot find sheet name |" + t + "|")
            }
            throw new Error("Cannot find sheet |" + t + "|")
        }(e, r);
        switch (t(e.Workbook.Sheets, a, {}), n) {
            case 0:
            case 1:
            case 2:
                break;
            default:
                throw new Error("Bad sheet visibility setting " + n)
        }
        e.Workbook.Sheets[a].Hidden = n
    }, [
        ["SHEET_VISIBLE", 0],
        ["SHEET_HIDDEN", 1],
        ["SHEET_VERY_HIDDEN", 2]
    ].forEach((function(t) {
        e.consts[t[0]] = t[1]
    })), e.cell_set_number_format = function(e, t) {
        return e.z = t, e
    }, e.cell_set_hyperlink = function(e, t, r) {
        return t ? (e.l = {
            Target: t
        }, r && (e.l.Tooltip = r)) : delete e.l, e
    }, e.cell_set_internal_link = function(t, r, n) {
        return e.cell_set_hyperlink(t, "#" + r, n)
    }, e.cell_add_comment = function(e, t, r) {
        e.c || (e.c = []), e.c.push({
            t: t,
            a: r || "SheetJS"
        })
    }, e.sheet_set_array_formula = function(e, t, n) {
        for (var a = "string" != typeof t ? t : ar(t), i = "string" == typeof t ? t : nr(t), s = a.s.r; s <= a.e.r; ++s)
            for (var o = a.s.c; o <= a.e.c; ++o) {
                var l = r(e, s, o);
                l.t = "n", l.F = i, delete l.v, s == a.s.r && o == a.s.c && (l.f = n)
            }
        return e
    }
}(Zl);
f.version;
var ec = i("epVyJ"),
    tc = i("bRhBe");
window.onload = async () => {
    try {
        const t = document.getElementById("ycs_opts_btn_cache"),
            r = document.getElementById("ycs_opts_btn_show_all_cache"),
            n = e => {
                const t = document.querySelectorAll('[type="button"]');
                for (const r of t) r.disabled = e
            },
            a = () => {
                ec.removeNodeList("#ycs_process_show_all_wrap");
                const e = document.createElement("div");
                return e.id = "ycs_process_show_all_wrap", e.className = "ycs_formation_cache_table ycs_process_event", e.innerHTML = '\n                    <p>Please wait! The table is being formed.</p>\n                    <p>Caches processed: <span class="ycs_opt_mark" id="ycs_f_current_cache">0</span> of <span class="ycs_opt_mark" id="ycs_f_all_cache"></span></p>\n                ', e
            },
            i = () => {
                ec.removeNodeList("#ycs_process_export_cache_wrap");
                const e = document.createElement("div");
                return e.id = "ycs_process_export_cache_wrap", e.className = "ycs_process_event", e.innerHTML = '\n                    <p>Please wait. Cached video comments are exported. Do not close this window. Comments are exported to the default browser download folder.</p>\n                    <p>Total video: <span id="ycs_process_total_video" class="ycs_opt_mark"></span></p>\n                    <p>Preparing a comments of cache from a video: <span id="ycs_process_now" class="ycs_opt_mark">0</span> of <span id="ycs_process_now_total" class="ycs_opt_mark"></span></p>\n                    <p>Saving files: <span class="ycs_opt_mark" id="ycs_count_save_files">0</span></p>\n                ', e
            },
            l = () => {
                ec.removeNodeList("#ycs_process_export_done_wrap");
                const e = document.createElement("div");
                return e.id = "ycs_process_export_done_wrap", e.innerHTML = '\n                    <div class="ycs_export_file_type_title ycs_export_done">\n                        <p>Comments have been exported! For <span class="ycs_opt_mark" id="ycs_done_count_video"></span> selected videos.</p>\n                        <p>Files saved: <span class="ycs_opt_mark" id="ycs_saved_files_count"></span></p>\n                        <p class="ycs_opt_mark" id="ycs_export_done_date"></p>\n                    </div>\n                ', e
            },
            c = () => {
                const e = document.getElementById("ycs_file_type_txt"),
                    t = document.getElementById("ycs_file_type_json"),
                    r = document.getElementById("ycs_file_type_xlsx");
                return {
                    typeTXT: (null == e ? void 0 : e.checked) || !1,
                    typeJSON: (null == t ? void 0 : t.checked) || !1,
                    typeXLSX: (null == r ? void 0 : r.checked) || !1
                }
            },
            f = () => {
                const e = document.getElementById("ycs_export_data_comments"),
                    t = document.getElementById("ycs_export_data_chat"),
                    r = document.getElementById("ycs_export_data_trvideo");
                return {
                    typeComments: (null == e ? void 0 : e.checked) || !1,
                    typeChat: (null == t ? void 0 : t.checked) || !1,
                    typeTrVideo: (null == r ? void 0 : r.checked) || !1
                }
            },
            h = e => {
                try {
                    if (0 === e.comments.length) return;
                    const t = ec.getCommentsHtmlText(e.comments);
                    return {
                        text: `\nYCS - YouTube Comment Search\n\nComments\nFile created by ${(new Date).toString()}\nVideo URL: ${e.url}\nTitle: ${e.titleVideo}\nTotal: ${t.count}\n${t.html}`,
                        length: t.count
                    }
                } catch (e) {}
            },
            u = e => {
                try {
                    if (0 === e.comments.length) return;
                    const G = {
                            urlVideo: null == e ? void 0 : e.url,
                            titleVideo: null == e ? void 0 : e.titleVideo,
                            videoId: null == e ? void 0 : e.videoId,
                            cachedDate: null == e ? void 0 : e.date,
                            totalComments: 0,
                            totalReplies: 0,
                            total: null == e ? void 0 : e.comments.length,
                            comments: []
                        },
                        j = new Map,
                        $ = new Set;
                    for (const w of e.comments) {
                        var t, r, n, a, i, s, o, l, c, f, h, u, d, p, m, g, v, E, S, b;
                        "C" === (null == w ? void 0 : w.typeComment) ? j.set(null == w || null === (t = w.commentRenderer) || void 0 === t ? void 0 : t.commentId, {
                            commentUrl: "youtube.com" + (ec.wrapTryCatch((() => w.commentRenderer.publishedTimeText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url)) || `/watch?v=${null==G?void 0:G.videoId}&lc=${null==w||null===(r=w.commentRenderer)||void 0===r?void 0:r.commentId}`),
                            author: {
                                nameAuthor: null == w || null === (n = w.commentRenderer) || void 0 === n || null === (a = n.authorText) || void 0 === a ? void 0 : a.simpleText,
                                authorIsChannelOwner: null == w || null === (i = w.commentRenderer) || void 0 === i ? void 0 : i.authorIsChannelOwner,
                                channel: "youtube.com" + ((null == w || null === (s = w.commentRenderer) || void 0 === s || null === (o = s.authorEndpoint) || void 0 === o || null === (l = o.browseEndpoint) || void 0 === l ? void 0 : l.canonicalBaseUrl) || (null == w || null === (c = w.commentRenderer) || void 0 === c || null === (f = c.authorEndpoint) || void 0 === f || null === (h = f.commandMetadata) || void 0 === h || null === (u = h.webCommandMetadata) || void 0 === u ? void 0 : u.url))
                            },
                            publishedTimeText: ec.wrapTryCatch((() => w.commentRenderer.publishedTimeText.runs[0].text)),
                            commentMessage: (null == w || null === (d = w.commentRenderer) || void 0 === d || null === (p = d.contentText) || void 0 === p ? void 0 : p.fullText) || (null == w || null === (m = w.commentRenderer) || void 0 === m ? void 0 : m.renderFullText),
                            totalLikes: (null == w || null === (g = w.commentRenderer) || void 0 === g || null === (v = g.voteCount) || void 0 === v ? void 0 : v.simpleText) || "0",
                            member: null == w || null === (E = w.commentRenderer) || void 0 === E || null === (S = E.sponsorCommentBadge) || void 0 === S || null === (b = S.sponsorCommentBadgeRenderer) || void 0 === b ? void 0 : b.tooltip,
                            commentReplies: {
                                replies: []
                            }
                        }): "R" === (null == w ? void 0 : w.typeComment) && $.add(w)
                    }
                    for (const e of $) {
                        var w, B;
                        const t = null == e || null === (w = e.originComment) || void 0 === w || null === (B = w.commentRenderer) || void 0 === B ? void 0 : B.commentId,
                            r = j.get(t);
                        if (r) {
                            var C, _, y, T, A, R, x, I, D, O, P, k, F, N, M, L, U, H, V, W, X;
                            const t = e;
                            null == r || null === (C = r.commentReplies) || void 0 === C || null === (_ = C.replies) || void 0 === _ || _.push({
                                commentUrl: "youtube.com" + (ec.wrapTryCatch((() => t.commentRenderer.publishedTimeText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url)) || `/watch?v=${null==G?void 0:G.videoId}&lc=${null==t||null===(y=t.commentRenderer)||void 0===y?void 0:y.commentId}`),
                                author: {
                                    nameAuthor: null == t || null === (T = t.commentRenderer) || void 0 === T || null === (A = T.authorText) || void 0 === A ? void 0 : A.simpleText,
                                    authorIsChannelOwner: null == t || null === (R = t.commentRenderer) || void 0 === R ? void 0 : R.authorIsChannelOwner,
                                    channel: "youtube.com" + ((null == t || null === (x = t.commentRenderer) || void 0 === x || null === (I = x.authorEndpoint) || void 0 === I || null === (D = I.browseEndpoint) || void 0 === D ? void 0 : D.canonicalBaseUrl) || (null == t || null === (O = t.commentRenderer) || void 0 === O || null === (P = O.authorEndpoint) || void 0 === P || null === (k = P.commandMetadata) || void 0 === k || null === (F = k.webCommandMetadata) || void 0 === F ? void 0 : F.url))
                                },
                                publishedTimeText: ec.wrapTryCatch((() => t.commentRenderer.publishedTimeText.runs[0].text)),
                                commentMessage: (null == t || null === (N = t.commentRenderer) || void 0 === N || null === (M = N.contentText) || void 0 === M ? void 0 : M.fullText) || (null == t || null === (L = t.commentRenderer) || void 0 === L ? void 0 : L.renderFullText),
                                totalLikes: (null == t || null === (U = t.commentRenderer) || void 0 === U || null === (H = U.voteCount) || void 0 === H ? void 0 : H.simpleText) || "0",
                                member: null == t || null === (V = t.commentRenderer) || void 0 === V || null === (W = V.sponsorCommentBadge) || void 0 === W || null === (X = W.sponsorCommentBadgeRenderer) || void 0 === X ? void 0 : X.tooltip
                            })
                        }
                    }
                    G.totalReplies = $.size, $.clear();
                    for (const [e, t] of j) G.comments.push(t), j.delete(e);
                    G.totalComments = G.comments.length, j.clear();
                    return {
                        json: JSON.stringify(G),
                        length: e.comments.length
                    }
                } catch (e) {}
            },
            d = e => {
                try {
                    const t = new Map(JSON.parse(null == e ? void 0 : e.commentsChat));
                    if (0 === t.size) return;
                    const r = ec.getCommentsChatHtmlText([...t.values()]);
                    return {
                        text: `\nYCS - YouTube Comment Search\n\nComments chat\nFile created by ${(new Date).toString()}\nVideo URL: ${e.url}\nTitle: ${e.titleVideo}\nTotal: ${r.count}\n${r.html}`,
                        length: r.count
                    }
                } catch (e) {}
            },
            p = e => {
                try {
                    const t = new Map(JSON.parse(e.commentsChat));
                    if (0 === t.size) return;
                    const r = {
                            urlVideo: null == e ? void 0 : e.url,
                            titleVideo: null == e ? void 0 : e.titleVideo,
                            videoId: null == e ? void 0 : e.videoId,
                            cachedDate: null == e ? void 0 : e.date,
                            total: 0,
                            commentsChat: []
                        },
                        n = e => {
                            try {
                                if (e && e.length > 0) {
                                    var t;
                                    let r;
                                    for (const n of e)
                                        if (null == n || null === (t = n.liveChatAuthorBadgeRenderer) || void 0 === t ? void 0 : t.customThumbnail) {
                                            r = n;
                                            break
                                        } if (r) return r
                                }
                            } catch (e) {}
                        };
                    for (const [e, a] of t) try {
                        const e = n(ec.wrapTryCatch((() => a.replayChatItemAction.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorBadges)));
                        r.commentsChat.push({
                            author: {
                                nameAuthor: ec.wrapTryCatch((() => a.replayChatItemAction.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorName.simpleText)),
                                channel: `youtube.com/channel/${ec.wrapTryCatch((()=>a.replayChatItemAction.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId))}`,
                                member: ec.wrapTryCatch((() => e.liveChatAuthorBadgeRenderer.tooltip)) || ec.wrapTryCatch((() => e.liveChatAuthorBadgeRenderer.accessibility.accessibilityData.label))
                            },
                            commentMessage: ec.wrapTryCatch((() => a.replayChatItemAction.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.message.fullText || a.replayChatItemAction.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.message.renderFullText)),
                            timestampUsec: ec.wrapTryCatch((() => a.replayChatItemAction.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.timestampUsec)),
                            timestampText: ec.wrapTryCatch((() => a.replayChatItemAction.actions[0].addChatItemAction.item.liveChatTextMessageRenderer.timestampText.simpleText))
                        })
                    } catch (e) {
                        continue
                    }
                    r.total = r.commentsChat.length;
                    return {
                        json: JSON.stringify(r),
                        length: r.total
                    }
                } catch (e) {}
            },
            m = e => {
                try {
                    const t = ec.getCommentsTrVideoHtmlText(ec.wrapTryCatch((() => e.commentsTrVideo.actions[0].updateEngagementPanelAction.content.transcriptRenderer.body.transcriptBodyRenderer.cueGroups)));
                    return {
                        text: `\nYCS - YouTube Comment Search\n\nTranscript video\nFile created by ${(new Date).toString()}\nVideo URL: ${e.url}\nTitle: ${e.titleVideo}\nTotal: ${t.count}\n${t.html}`,
                        length: t.count
                    }
                } catch (e) {}
            },
            g = e => {
                try {
                    var t, r;
                    if (0 === (null == e || null === (t = e.commentsTrVideo) || void 0 === t || null === (r = t.actions) || void 0 === r ? void 0 : r.length)) return;
                    const n = {
                            titleTrVideo: ec.wrapTryCatch((() => e.commentsTrVideo.actions[0].updateEngagementPanelAction.content.transcriptRenderer.footer.transcriptFooterRenderer.languageMenu.sortFilterSubMenuRenderer.subMenuItems[0].title)),
                            urlVideo: null == e ? void 0 : e.url,
                            titleVideo: null == e ? void 0 : e.titleVideo,
                            videoId: null == e ? void 0 : e.videoId,
                            cachedDate: null == e ? void 0 : e.date,
                            total: 0,
                            trVideo: []
                        },
                        a = ec.wrapTryCatch((() => e.commentsTrVideo.actions[0].updateEngagementPanelAction.content.transcriptRenderer.body.transcriptBodyRenderer.cueGroups));
                    for (const t of a) n.trVideo.push({
                        message: ec.wrapTryCatch((() => t.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer.cue.simpleText)),
                        formattedStartOffset: ec.wrapTryCatch((() => t.transcriptCueGroupRenderer.formattedStartOffset.simpleText)),
                        startOffsetMs: ec.wrapTryCatch((() => t.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer.startOffsetMs)),
                        durationMs: ec.wrapTryCatch((() => t.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer.durationMs)),
                        urlShare: `youtu.be/${null==e?void 0:e.videoId}?t=${ec.msToRoundSec(ec.wrapTryCatch((()=>t.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer.startOffsetMs)))||0}`
                    });
                    n.total = n.trVideo.length;
                    return {
                        json: JSON.stringify(n),
                        length: n.total
                    }
                } catch (e) {}
            },
            v = async (e, t, r) => {
                try {
                    ec.downloadFile(e, t, r), await ec.delayMs(300)
                } catch (e) {}
            }, E = async e => {
                try {
                    if ("string" != typeof e) return;
                    const t = await tc.idb;
                    return await t.delete("STORE_CACHE_YCS", e), !0
                } catch (e) {}
            }, S = async () => {
                try {
                    const e = await tc.idb,
                        t = new Map,
                        r = await e.count("STORE_CACHE_YCS");
                    let n = await e.transaction("STORE_CACHE_YCS").store.openCursor();
                    const i = document.getElementById("ycs_export_cache_main");
                    i.style.display = "none";
                    const s = a();
                    i.insertAdjacentElement("afterend", s);
                    const o = document.getElementById("ycs_f_all_cache"),
                        l = document.getElementById("ycs_f_current_cache");
                    o.textContent = r;
                    let c = 1;
                    for (; n;) t.set(n.key, {
                        title: n.value.body.titleVideo,
                        url: n.value.body.url,
                        date: n.value.body.date,
                        videoId: n.value.body.videoId
                    }), l.textContent = c, c += 1, n = await n.continue();
                    return s.remove(), i.style.display = "block", t
                } catch (e) {}
            }, b = async () => {
                try {
                    var e;
                    const t = await tc.idb,
                        r = await navigator.storage.estimate(),
                        n = document.getElementById("ycs_total_cache"),
                        a = document.getElementById("ycs_used_cache"),
                        i = document.getElementById("ycs_browser_av_storage"),
                        s = document.getElementById("ycs_quota_av_storage");
                    n.textContent = await t.count("STORE_CACHE_YCS") + "", a.textContent = ec.formatBytes((null == r || null === (e = r.usageDetails) || void 0 === e ? void 0 : e.indexedDB) || r.usage), i.textContent = (r.usage / r.quota * 100).toFixed(2) + "%", s.textContent = ec.formatBytes(r.quota)
                } catch (e) {}
            }, w = async () => {
                try {
                    const e = await tc.idb;
                    await e.clear("STORE_CACHE_YCS"), await b()
                } catch (e) {}
            };
        null == t || t.addEventListener("click", (async () => {
            try {
                n(!0), await w(), await b();
                document.getElementById("ycs_all_cache_table").style.display = "none", n(!1)
            } catch (e) {
                n(!1)
            }
        })), null == r || r.addEventListener("click", (async () => {
            try {
                n(!0), ec.removeNodeList("#ycs_process_export_done_wrap");
                const t = 10;
                b();
                const r = document.getElementsByClassName("ycs_selection_cache");
                for (const e of r) e.textContent = "";
                const a = document.getElementById("ycs_all_cache_table"),
                    w = await S();
                if (0 === w.size) return void n(!1);
                let B = Array.from(w.values());
                const C = new Map;
                for (const e of B) C.set(e.videoId, !1);
                const _ = () => {
                        const e = document.getElementsByName("ycs_all_cache_checkbox");
                        for (const t of e) {
                            const e = C.get(t.id);
                            t.checked = e
                        }
                    },
                    y = (e, t, r = 1) => {
                        const n = (e, t) => e.length <= t ? e : e.slice(0, t) + " ...";
                        t.textContent = "";
                        let a = r;
                        for (const r of e) try {
                            const e = r;
                            t.insertAdjacentHTML("beforeend", `\n                                    <tr class="ycs_${e.videoId}">\n                                        <td><div>${a++}</div></td>\n                                        <td><div title="${e.title}">${ec.wrapTryCatch((()=>n(e.title,118)))}</div></td>\n                                        <td><div><a href="${ec.wrapTryCatch((()=>e.url))}" target="_blank" rel="noopener noreferrer" title="${ec.wrapTryCatch((()=>e.url))}">${ec.wrapTryCatch((()=>n(e.url,100)))}</a></div></td>\n                                        <td><div>${ec.wrapTryCatch((()=>new Date(e.date).toUTCString()))}</div></td>\n                                        <td><div><input type="checkbox" name="ycs_all_cache_checkbox" id="${e.videoId}"></div></td>\n                                    </tr>\n                                `)
                        } catch (e) {}
                    },
                    T = document.getElementById("ycs_select_all_checkbox");
                T.checked = !1;
                const A = document.getElementById("ycs_all_cache_body_table");
                A.innerHTML = "";
                const R = document.getElementsByClassName("ycs_wrap_nav_pag");
                for (const e of R) e.remove();
                if (B.length > t) {
                    const e = ec.getPaginate(B.length, 1, t),
                        r = document.getElementById("ycs_pag_nav_current");
                    r.textContent = `(Pages: ${e.totalPages} - [${e.currentPage}])`;
                    const n = document.createElement("div");
                    n.className = "ycs_wrap_nav_pag", n.innerHTML = `\n                            <span class="ycs_btn_nav_pag" id="ycs_btn_pag_nav_prev">➖</span>\n                            <input type="text" name="Pagination" id="ycs_all_cache_table_pag" class="ycs_all_cache_tab_pag" value="${e.currentPage}">\n                            <span class="ycs_btn_nav_pag" id="ycs_btn_pag_nav_next">➕</span>\n                        `, a.appendChild(n);
                    const i = document.getElementById("ycs_btn_pag_nav_prev"),
                        s = document.getElementById("ycs_btn_pag_nav_next"),
                        o = document.getElementById("ycs_all_cache_table_pag");
                    i.onclick = () => {
                        const e = Number.parseInt(o.value) - 1;
                        e > 0 && (o.value = e, o.dispatchEvent(new Event("input")))
                    }, s.onclick = () => {
                        const t = Number.parseInt(o.value) + 1;
                        t <= e.totalPages && (o.value = t, o.dispatchEvent(new Event("input")))
                    }, o.oninput = e => {
                        const n = e.target;
                        if (ec.isNumeric(n.value) && Number.parseInt(n.value) > 0) {
                            const e = ec.getPaginate(B.length, Number.parseInt(n.value), t);
                            y(B.slice(e.startIndex, e.endIndex + 1), A, e.startIndex + 1), r.textContent = `(Pages: ${e.totalPages} - [${e.currentPage}])`, _()
                        }
                    }, y(B.slice(e.startIndex, e.endIndex + 1), A, e.startIndex + 1)
                } else y(B, A);
                a.style.display = "block";
                const x = e => {
                        try {
                            if (e.size >= 0) {
                                const t = [];
                                return e.forEach(((e, r) => {
                                    !0 === e && t.push({
                                        videoId: r,
                                        checked: e
                                    })
                                })), t
                            }
                        } catch (e) {}
                    },
                    I = () => {
                        const e = document.getElementsByClassName("ycs_selection_cache");
                        if (e.length > 0) {
                            const t = x(C);
                            if (t && t.length >= 0)
                                for (const r of e) r.textContent = `(${t.length})`
                        }
                    };
                T.onclick = e => {
                    const t = e.target;
                    !0 === t.checked ? (C.forEach(((e, t) => {
                        C.set(t, !0)
                    })), _(), I()) : !1 === t.checked && (C.forEach(((e, t) => {
                        C.set(t, !1)
                    })), _(), I())
                }, A.onclick = e => {
                    const t = e.target;
                    "ycs_all_cache_checkbox" === t.name && (C.set(t.id, t.checked), I())
                };
                const D = e => {
                        try {
                            const t = B.filter((t => t.videoId != e));
                            B = t, C.delete(e)
                        } catch (e) {}
                    },
                    O = e => {
                        try {
                            const t = document.getElementsByClassName("ycs_" + e);
                            for (const e of t) e.remove();
                            I()
                        } catch (e) {}
                    };
                document.getElementById("ycs_btn_export_sel_cache").onclick = async () => {
                    try {
                        const t = x(C);
                        if (!t) return;
                        if (0 === t.length) return;
                        const r = c();
                        if (!1 === r.typeJSON && !1 === r.typeTXT && !1 === r.typeXLSX) return;
                        const a = f();
                        if (!1 === a.typeComments && !1 === a.typeChat && !1 === a.typeTrVideo) return;
                        n(!0);
                        const E = await tc.idb;
                        ec.removeNodeList("#ycs_process_export_done_wrap");
                        const S = await E.count("STORE_CACHE_YCS"),
                            b = document.getElementById("ycs_export_cache_main"),
                            w = i();
                        b.style.display = "none", b.insertAdjacentElement("afterend", w);
                        const B = document.getElementById("ycs_process_now"),
                            _ = document.getElementById("ycs_process_now_total"),
                            y = document.getElementById("ycs_process_total_video"),
                            T = document.getElementById("ycs_count_save_files");
                        _.textContent = S, y.textContent = S;
                        const A = new(e(s))({
                            concurrency: 1
                        });
                        let R = 0;
                        A.on("next", (() => {
                            R += 1, T.textContent = R
                        }));
                        for (const [e, n] of t.entries())
                            if (n.checked) {
                                const t = await E.get("STORE_CACHE_YCS", n.videoId);
                                try {
                                    if (r.typeTXT) {
                                        if (null == a ? void 0 : a.typeComments) try {
                                            const e = h(t.body);
                                            if (e) {
                                                const r = t.body;
                                                A.add((async () => {
                                                    await v(e.text, `Comments, ${r.titleVideo} (${e.length}).txt`, "text/plain")
                                                }))
                                            }
                                        } catch (e) {}
                                        if (null == a ? void 0 : a.typeChat) try {
                                            const e = d(t.body);
                                            if (e) {
                                                const r = t.body;
                                                A.add((async () => {
                                                    await v(e.text, `Comments chat, ${r.titleVideo} (${e.length}).txt`, "text/plain")
                                                }))
                                            }
                                        } catch (e) {}
                                        if (null == a ? void 0 : a.typeTrVideo) try {
                                            const e = m(t.body);
                                            if (e) {
                                                const r = t.body;
                                                A.add((async () => {
                                                    await v(e.text, `Transcript video, ${r.titleVideo} (${e.length}).txt`, "text/plain")
                                                }))
                                            }
                                        } catch (e) {}
                                    }
                                } catch (e) {
                                    continue
                                }
                                try {
                                    if (r.typeJSON) {
                                        if (null == a ? void 0 : a.typeComments) try {
                                            const e = u(t.body);
                                            if (e) {
                                                const r = t.body;
                                                A.add((async () => {
                                                    await v(e.json, `Comments, ${r.titleVideo} (${e.length}).json`, "text/plain")
                                                }))
                                            }
                                        } catch (e) {}
                                        if (null == a ? void 0 : a.typeChat) try {
                                            const e = p(t.body);
                                            if (e) {
                                                const r = t.body;
                                                A.add((async () => {
                                                    await v(e.json, `Comments chat, ${r.titleVideo} (${e.length}).json`, "text/plain")
                                                }))
                                            }
                                        } catch (e) {}
                                        if (null == a ? void 0 : a.typeTrVideo) try {
                                            const e = g(t.body);
                                            if (e) {
                                                const r = t.body;
                                                A.add((async () => {
                                                    await v(e.json, `Transcript video, ${r.titleVideo} (${e.length}).json`, "text/plain")
                                                }))
                                            }
                                        } catch (e) {}
                                    }
                                } catch (e) {
                                    continue
                                }
                                try {
                                    if (r.typeXLSX) {
                                        if (null == a ? void 0 : a.typeComments) try {
                                            const e = u(t.body);
                                            if (e) {
                                                const r = t.body;
                                                A.add((() => {
                                                    const t = JSON.parse(e.json),
                                                        n = o.utils.book_new(),
                                                        a = `Report was created by ${(new Date).toUTCString()}`;
                                                    let i;
                                                    try {
                                                        i = o.utils.json_to_sheet([ec.getSheetDetails(t)]), o.utils.sheet_add_aoa(i, [
                                                            [a]
                                                        ], {
                                                            origin: "A5"
                                                        }), o.utils.book_append_sheet(n, i, "Details")
                                                    } catch (e) {}
                                                    try {
                                                        i = o.utils.json_to_sheet(ec.getSheetComments(t.comments)), o.utils.book_append_sheet(n, i, "Comments")
                                                    } catch (e) {}
                                                    try {
                                                        i = o.utils.json_to_sheet(ec.getSheetReplies(t.comments)), o.utils.book_append_sheet(n, i, "Replies")
                                                    } catch (e) {}
                                                    o.writeFile(n, `Comments, ${r.titleVideo} (${e.length}).xlsx`)
                                                }))
                                            }
                                        } catch (e) {}
                                        if (null == a ? void 0 : a.typeChat) try {
                                            const e = p(t.body);
                                            if (e) {
                                                const r = t.body;
                                                A.add((() => {
                                                    const t = JSON.parse(e.json),
                                                        n = o.utils.book_new(),
                                                        a = `Report was created by ${(new Date).toUTCString()}`;
                                                    let i;
                                                    try {
                                                        i = o.utils.json_to_sheet([ec.getSheetChatDetails(t)]), o.utils.sheet_add_aoa(i, [
                                                            [a]
                                                        ], {
                                                            origin: "A5"
                                                        }), o.utils.book_append_sheet(n, i, "Details")
                                                    } catch (e) {}
                                                    try {
                                                        i = o.utils.json_to_sheet(ec.getSheetChatComments(t)), o.utils.book_append_sheet(n, i, "Chat comments")
                                                    } catch (e) {}
                                                    o.writeFile(n, `Comments chat, ${r.titleVideo} (${e.length}).xlsx`)
                                                }))
                                            }
                                        } catch (e) {}
                                        if (null == a ? void 0 : a.typeTrVideo) try {
                                            const e = g(t.body);
                                            if (e) {
                                                const r = t.body;
                                                A.add((() => {
                                                    const t = JSON.parse(e.json),
                                                        n = o.utils.book_new(),
                                                        a = `Report was created by ${(new Date).toUTCString()}`;
                                                    let i;
                                                    try {
                                                        i = o.utils.json_to_sheet([ec.getSheetTrVideoDetails(t)]), o.utils.sheet_add_aoa(i, [
                                                            [a]
                                                        ], {
                                                            origin: "A5"
                                                        }), o.utils.book_append_sheet(n, i, "Details")
                                                    } catch (e) {}
                                                    try {
                                                        i = o.utils.json_to_sheet(ec.getSheetTrVideo(t)), o.utils.book_append_sheet(n, i, "Transcript video")
                                                    } catch (e) {}
                                                    o.writeFile(n, `Transcript video, ${r.titleVideo} (${e.length}).xlsx`)
                                                }))
                                            }
                                        } catch (e) {}
                                    }
                                } catch (e) {
                                    continue
                                }
                                B.textContent = e + 1 + ""
                            } await A.onIdle(), w.remove(), b.style.display = "block";
                        const I = l();
                        b.insertAdjacentElement("afterend", I);
                        const D = document.getElementById("ycs_export_done_date"),
                            O = document.getElementById("ycs_saved_files_count"),
                            P = document.getElementById("ycs_done_count_video");
                        D.textContent = (new Date).toUTCString(), O.textContent = R, P.textContent = B.textContent, n(!1)
                    } catch (e) {
                        n(!1)
                    }
                };
                document.getElementById("ycs_btn_remove_sel_cache").onclick = async () => {
                    try {
                        n(!0);
                        const e = x(C);
                        for (const t of e) t.checked && (await E(t.videoId), await b(), D(t.videoId), O(t.videoId));
                        if (e.length > 0) {
                            const e = document.getElementById("ycs_all_cache_table_pag");
                            e && (e.value = 1, e.dispatchEvent(new Event("input")))
                        }
                        n(!1)
                    } catch (e) {
                        n(!1)
                    }
                }, n(!1)
            } catch (e) {
                n(!1)
            }
        }));
        const B = async () => {
            try {
                ec.removeNodeList("#ycs_process_export_done_wrap");
                const t = await tc.idb,
                    r = await t.count("STORE_CACHE_YCS");
                if (0 === r) return;
                const n = c();
                if (!1 === n.typeJSON && !1 === n.typeTXT && !1 === n.typeXLSX) return;
                const a = f();
                if (!1 === a.typeComments && !1 === a.typeChat && !1 === a.typeTrVideo) return;
                let E = await t.transaction("STORE_CACHE_YCS").store.openCursor();
                const S = document.getElementById("ycs_export_cache_main"),
                    b = i();
                S.style.display = "none", S.insertAdjacentElement("afterend", b);
                const w = document.getElementById("ycs_process_now"),
                    B = document.getElementById("ycs_process_now_total"),
                    C = document.getElementById("ycs_process_total_video"),
                    _ = document.getElementById("ycs_count_save_files");
                B.textContent = r, C.textContent = r;
                const y = new(e(s))({
                    concurrency: 1
                });
                let T = 0;
                y.on("next", (() => {
                    T += 1, _.textContent = T
                }));
                let A = 1;
                for (; E;) {
                    try {
                        if (n.typeTXT) {
                            if (null == a ? void 0 : a.typeComments) try {
                                const e = h(E.value.body);
                                if (e) {
                                    const t = E.value.body;
                                    y.add((async () => {
                                        await v(e.text, `Comments, ${t.titleVideo} (${e.length}).txt`, "text/plain")
                                    }))
                                }
                            } catch (e) {}
                            if (null == a ? void 0 : a.typeChat) try {
                                const e = d(E.value.body);
                                if (e) {
                                    const t = E.value.body;
                                    y.add((async () => {
                                        await v(e.text, `Comments chat, ${t.titleVideo} (${e.length}).txt`, "text/plain")
                                    }))
                                }
                            } catch (e) {}
                            if (null == a ? void 0 : a.typeTrVideo) try {
                                const e = m(E.value.body);
                                if (e) {
                                    const t = E.value.body;
                                    y.add((async () => {
                                        await v(e.text, `Transcript video, ${t.titleVideo} (${e.length}).txt`, "text/plain")
                                    }))
                                }
                            } catch (e) {}
                        }
                    } catch (e) {
                        continue
                    }
                    try {
                        if (n.typeJSON) {
                            if (null == a ? void 0 : a.typeComments) try {
                                const e = u(E.value.body);
                                if (e) {
                                    const t = E.value.body;
                                    y.add((async () => {
                                        await v(e.json, `Comments, ${t.titleVideo} (${e.length}).json`, "text/plain")
                                    }))
                                }
                            } catch (e) {}
                            if (null == a ? void 0 : a.typeChat) try {
                                const e = p(E.value.body);
                                if (e) {
                                    const t = E.value.body;
                                    y.add((async () => {
                                        await v(e.json, `Comments chat, ${t.titleVideo} (${e.length}).json`, "text/plain")
                                    }))
                                }
                            } catch (e) {}
                            if (null == a ? void 0 : a.typeTrVideo) try {
                                const e = g(E.value.body);
                                if (e) {
                                    const t = E.value.body;
                                    y.add((async () => {
                                        await v(e.json, `Transcript video, ${t.titleVideo} (${e.length}).json`, "text/plain")
                                    }))
                                }
                            } catch (e) {}
                        }
                    } catch (e) {
                        continue
                    }
                    try {
                        if (n.typeXLSX) {
                            if (null == a ? void 0 : a.typeComments) try {
                                const e = u(E.value.body);
                                if (e) {
                                    const t = E.value.body;
                                    y.add((() => {
                                        const r = JSON.parse(e.json),
                                            n = o.utils.book_new(),
                                            a = `Report was created by ${(new Date).toUTCString()}`;
                                        let i;
                                        try {
                                            i = o.utils.json_to_sheet([ec.getSheetDetails(r)]), o.utils.sheet_add_aoa(i, [
                                                [a]
                                            ], {
                                                origin: "A5"
                                            }), o.utils.book_append_sheet(n, i, "Details")
                                        } catch (e) {}
                                        try {
                                            i = o.utils.json_to_sheet(ec.getSheetComments(r.comments)), o.utils.book_append_sheet(n, i, "Comments")
                                        } catch (e) {}
                                        try {
                                            i = o.utils.json_to_sheet(ec.getSheetReplies(r.comments)), o.utils.book_append_sheet(n, i, "Replies")
                                        } catch (e) {}
                                        o.writeFile(n, `Comments, ${t.titleVideo} (${e.length}).xlsx`)
                                    }))
                                }
                            } catch (e) {}
                            if (null == a ? void 0 : a.typeChat) try {
                                const e = p(E.value.body);
                                if (e) {
                                    const t = E.value.body;
                                    y.add((() => {
                                        const r = JSON.parse(e.json),
                                            n = o.utils.book_new(),
                                            a = `Report was created by ${(new Date).toUTCString()}`;
                                        let i;
                                        try {
                                            i = o.utils.json_to_sheet([ec.getSheetChatDetails(r)]), o.utils.sheet_add_aoa(i, [
                                                [a]
                                            ], {
                                                origin: "A5"
                                            }), o.utils.book_append_sheet(n, i, "Details")
                                        } catch (e) {}
                                        try {
                                            i = o.utils.json_to_sheet(ec.getSheetChatComments(r)), o.utils.book_append_sheet(n, i, "Chat comments")
                                        } catch (e) {}
                                        o.writeFile(n, `Comments chat, ${t.titleVideo} (${e.length}).xlsx`)
                                    }))
                                }
                            } catch (e) {}
                            if (null == a ? void 0 : a.typeTrVideo) try {
                                const e = g(E.value.body);
                                if (e) {
                                    const t = E.value.body;
                                    y.add((() => {
                                        const r = JSON.parse(e.json),
                                            n = o.utils.book_new(),
                                            a = `Report was created by ${(new Date).toUTCString()}`;
                                        let i;
                                        try {
                                            i = o.utils.json_to_sheet([ec.getSheetTrVideoDetails(r)]), o.utils.sheet_add_aoa(i, [
                                                [a]
                                            ], {
                                                origin: "A5"
                                            }), o.utils.book_append_sheet(n, i, "Details")
                                        } catch (e) {}
                                        try {
                                            i = o.utils.json_to_sheet(ec.getSheetTrVideo(r)), o.utils.book_append_sheet(n, i, "Transcript video")
                                        } catch (e) {}
                                        o.writeFile(n, `Transcript video, ${t.titleVideo} (${e.length}).xlsx`)
                                    }))
                                }
                            } catch (e) {}
                        }
                    } catch (e) {
                        continue
                    }
                    w.textContent = A, A += 1, E = await E.continue()
                }
                await y.onIdle(), b.remove(), S.style.display = "block";
                const R = l();
                S.insertAdjacentElement("afterend", R);
                const x = document.getElementById("ycs_export_done_date"),
                    I = document.getElementById("ycs_saved_files_count"),
                    D = document.getElementById("ycs_done_count_video");
                x.textContent = (new Date).toUTCString(), I.textContent = T, D.textContent = w.textContent
            } catch (e) {}
        };
        document.getElementById("ycs_opts_btn_export_all_cache").onclick = async () => {
            try {
                const e = await tc.idb;
                if (0 === await e.count("STORE_CACHE_YCS")) return;
                const t = c();
                if (!1 === t.typeJSON && !1 === t.typeTXT && !1 === t.typeXLSX) return;
                const r = f();
                if (!1 === r.typeComments && !1 === r.typeChat && !1 === r.typeTrVideo) return;
                n(!0), await B(), n(!1)
            } catch (e) {
                n(!1)
            }
        }, await b()
    } catch (e) {}
};