// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var S, d, O, x, R, W, U = {}, $ = [], Y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(t, e) {
    for(var n in e)t[n] = e[n];
    return t;
}
function V(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
}
function Z(t, e, n) {
    var r1, l1, _, s1 = {};
    for(_ in e)_ == "key" ? r1 = e[_] : _ == "ref" ? l1 = e[_] : s1[_] = e[_];
    if (arguments.length > 2 && (s1.children = arguments.length > 3 ? S.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for(_ in t.defaultProps)s1[_] === void 0 && (s1[_] = t.defaultProps[_]);
    return P(t, s1, r1, l1, null);
}
function P(t, e, n, r2, l2) {
    var _ = {
        type: t,
        props: e,
        key: n,
        ref: r2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: l2 ?? ++O
    };
    return l2 == null && d.vnode != null && d.vnode(_), _;
}
function N(t) {
    return t.children;
}
function E(t, e) {
    this.props = t, this.context = e;
}
function C(t, e) {
    if (e == null) return t.__ ? C(t.__, t.__.__k.indexOf(t) + 1) : null;
    for(var n; e < t.__k.length; e++)if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
    return typeof t.type == "function" ? C(t) : null;
}
function j(t) {
    var e, n;
    if ((t = t.__) != null && t.__c != null) {
        for(t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)if ((n = t.__k[e]) != null && n.__e != null) {
            t.__e = t.__c.base = n.__e;
            break;
        }
        return j(t);
    }
}
function L(t) {
    (!t.__d && (t.__d = !0) && x.push(t) && !D.__r++ || W !== d.debounceRendering) && ((W = d.debounceRendering) || R)(D);
}
function D() {
    for(var t; D.__r = x.length;)t = x.sort(function(e, n) {
        return e.__v.__b - n.__v.__b;
    }), x = [], t.some(function(e) {
        var n, r3, l3, _, s2, u;
        e.__d && (s2 = (_ = (n = e).__v).__e, (u = n.__P) && (r3 = [], (l3 = k({}, _)).__v = _.__v + 1, M(u, _, l3, n.__n, u.ownerSVGElement !== void 0, _.__h != null ? [
            s2
        ] : null, r3, s2 ?? C(_), _.__h), J(r3, _), _.__e != s2 && j(_)));
    });
}
function z(t, e, n, r4, l4, _, s3, u, p2, a2) {
    var o, h1, c1, i1, f, b2, v1, y1 = r4 && r4.__k || $, m1 = y1.length;
    for(n.__k = [], o = 0; o < e.length; o++)if ((i1 = n.__k[o] = (i1 = e[o]) == null || typeof i1 == "boolean" ? null : typeof i1 == "string" || typeof i1 == "number" || typeof i1 == "bigint" ? P(null, i1, null, null, i1) : Array.isArray(i1) ? P(N, {
        children: i1
    }, null, null, null) : i1.__b > 0 ? P(i1.type, i1.props, i1.key, null, i1.__v) : i1) != null) {
        if (i1.__ = n, i1.__b = n.__b + 1, (c1 = y1[o]) === null || c1 && i1.key == c1.key && i1.type === c1.type) y1[o] = void 0;
        else for(h1 = 0; h1 < m1; h1++){
            if ((c1 = y1[h1]) && i1.key == c1.key && i1.type === c1.type) {
                y1[h1] = void 0;
                break;
            }
            c1 = null;
        }
        M(t, i1, c1 = c1 || U, l4, _, s3, u, p2, a2), f = i1.__e, (h1 = i1.ref) && c1.ref != h1 && (v1 || (v1 = []), c1.ref && v1.push(c1.ref, null, i1), v1.push(h1, i1.__c || f, i1)), f != null ? (b2 == null && (b2 = f), typeof i1.type == "function" && i1.__k === c1.__k ? i1.__d = p2 = G(i1, p2, t) : p2 = q(t, i1, c1, y1, f, p2), typeof n.type == "function" && (n.__d = p2)) : p2 && c1.__e == p2 && p2.parentNode != t && (p2 = C(c1));
    }
    for(n.__e = b2, o = m1; o--;)y1[o] != null && (typeof n.type == "function" && y1[o].__e != null && y1[o].__e == n.__d && (n.__d = C(r4, o + 1)), Q(y1[o], y1[o]));
    if (v1) for(o = 0; o < v1.length; o++)K(v1[o], v1[++o], v1[++o]);
}
function G(t, e, n) {
    for(var r5, l5 = t.__k, _ = 0; l5 && _ < l5.length; _++)(r5 = l5[_]) && (r5.__ = t, e = typeof r5.type == "function" ? G(r5, e, n) : q(n, r5, r5, l5, r5.__e, e));
    return e;
}
function q(t, e, n, r6, l6, _) {
    var s4, u, p3;
    if (e.__d !== void 0) s4 = e.__d, e.__d = void 0;
    else if (n == null || l6 != _ || l6.parentNode == null) e: if (_ == null || _.parentNode !== t) t.appendChild(l6), s4 = null;
    else {
        for(u = _, p3 = 0; (u = u.nextSibling) && p3 < r6.length; p3 += 2)if (u == l6) break e;
        t.insertBefore(l6, _), s4 = _;
    }
    return s4 !== void 0 ? s4 : l6.nextSibling;
}
function te(t, e, n, r7, l7) {
    var _;
    for(_ in n)_ === "children" || _ === "key" || _ in e || T(t, _, null, n[_], r7);
    for(_ in e)l7 && typeof e[_] != "function" || _ === "children" || _ === "key" || _ === "value" || _ === "checked" || n[_] === e[_] || T(t, _, e[_], n[_], r7);
}
function F(t, e, n) {
    e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Y.test(e) ? n : n + "px";
}
function T(t, e, n, r8, l8) {
    var _;
    e: if (e === "style") if (typeof n == "string") t.style.cssText = n;
    else {
        if (typeof r8 == "string" && (t.style.cssText = r8 = ""), r8) for(e in r8)n && e in n || F(t.style, e, "");
        if (n) for(e in n)r8 && n[e] === r8[e] || F(t.style, e, n[e]);
    }
    else if (e[0] === "o" && e[1] === "n") _ = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + _] = n, n ? r8 || t.addEventListener(e, _ ? I : H, _) : t.removeEventListener(e, _ ? I : H, _);
    else if (e !== "dangerouslySetInnerHTML") {
        if (l8) e = e.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t) try {
            t[e] = n ?? "";
            break e;
        } catch  {}
        typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
}
function H(t) {
    this.l[t.type + !1](d.event ? d.event(t) : t);
}
function I(t) {
    this.l[t.type + !0](d.event ? d.event(t) : t);
}
function M(t, e, n, r9, l9, _, s5, u, p4) {
    var a3, o, h2, c2, i2, f, b3, v2, y2, m2, w, g1 = e.type;
    if (e.constructor !== void 0) return null;
    n.__h != null && (p4 = n.__h, u = e.__e = n.__e, e.__h = null, _ = [
        u
    ]), (a3 = d.__b) && a3(e);
    try {
        e: if (typeof g1 == "function") {
            if (v2 = e.props, y2 = (a3 = g1.contextType) && r9[a3.__c], m2 = a3 ? y2 ? y2.props.value : a3.__ : r9, n.__c ? b3 = (o = e.__c = n.__c).__ = o.__E : ("prototype" in g1 && g1.prototype.render ? e.__c = o = new g1(v2, m2) : (e.__c = o = new E(v2, m2), o.constructor = g1, o.render = _e), y2 && y2.sub(o), o.props = v2, o.state || (o.state = {}), o.context = m2, o.__n = r9, h2 = o.__d = !0, o.__h = []), o.__s == null && (o.__s = o.state), g1.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = k({}, o.__s)), k(o.__s, g1.getDerivedStateFromProps(v2, o.__s))), c2 = o.props, i2 = o.state, h2) g1.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), o.componentDidMount != null && o.__h.push(o.componentDidMount);
            else {
                if (g1.getDerivedStateFromProps == null && v2 !== c2 && o.componentWillReceiveProps != null && o.componentWillReceiveProps(v2, m2), !o.__e && o.shouldComponentUpdate != null && o.shouldComponentUpdate(v2, o.__s, m2) === !1 || e.__v === n.__v) {
                    o.props = v2, o.state = o.__s, e.__v !== n.__v && (o.__d = !1), o.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(A1) {
                        A1 && (A1.__ = e);
                    }), o.__h.length && s5.push(o);
                    break e;
                }
                o.componentWillUpdate != null && o.componentWillUpdate(v2, o.__s, m2), o.componentDidUpdate != null && o.__h.push(function() {
                    o.componentDidUpdate(c2, i2, f);
                });
            }
            o.context = m2, o.props = v2, o.state = o.__s, (a3 = d.__r) && a3(e), o.__d = !1, o.__v = e, o.__P = t, a3 = o.render(o.props, o.state, o.context), o.state = o.__s, o.getChildContext != null && (r9 = k(k({}, r9), o.getChildContext())), h2 || o.getSnapshotBeforeUpdate == null || (f = o.getSnapshotBeforeUpdate(c2, i2)), w = a3 != null && a3.type === N && a3.key == null ? a3.props.children : a3, z(t, Array.isArray(w) ? w : [
                w
            ], e, n, r9, l9, _, s5, u, p4), o.base = e.__e, e.__h = null, o.__h.length && s5.push(o), b3 && (o.__E = o.__ = null), o.__e = !1;
        } else _ == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ne(n.__e, e, n, r9, l9, _, s5, p4);
        (a3 = d.diffed) && a3(e);
    } catch (A2) {
        e.__v = null, (p4 || _ != null) && (e.__e = u, e.__h = !!p4, _[_.indexOf(u)] = null), d.__e(A2, e, n);
    }
}
function J(t, e) {
    d.__c && d.__c(e, t), t.some(function(n) {
        try {
            t = n.__h, n.__h = [], t.some(function(r10) {
                r10.call(n);
            });
        } catch (r11) {
            d.__e(r11, n.__v);
        }
    });
}
function ne(t, e, n, r12, l10, _, s6, u) {
    var p5, a4, o, h3 = n.props, c3 = e.props, i3 = e.type, f = 0;
    if (i3 === "svg" && (l10 = !0), _ != null) {
        for(; f < _.length; f++)if ((p5 = _[f]) && "setAttribute" in p5 == !!i3 && (i3 ? p5.localName === i3 : p5.nodeType === 3)) {
            t = p5, _[f] = null;
            break;
        }
    }
    if (t == null) {
        if (i3 === null) return document.createTextNode(c3);
        t = l10 ? document.createElementNS("http://www.w3.org/2000/svg", i3) : document.createElement(i3, c3.is && c3), _ = null, u = !1;
    }
    if (i3 === null) h3 === c3 || u && t.data === c3 || (t.data = c3);
    else {
        if (_ = _ && S.call(t.childNodes), a4 = (h3 = n.props || U).dangerouslySetInnerHTML, o = c3.dangerouslySetInnerHTML, !u) {
            if (_ != null) for(h3 = {}, f = 0; f < t.attributes.length; f++)h3[t.attributes[f].name] = t.attributes[f].value;
            (o || a4) && (o && (a4 && o.__html == a4.__html || o.__html === t.innerHTML) || (t.innerHTML = o && o.__html || ""));
        }
        if (te(t, c3, h3, l10, u), o) e.__k = [];
        else if (f = e.props.children, z(t, Array.isArray(f) ? f : [
            f
        ], e, n, r12, l10 && i3 !== "foreignObject", _, s6, _ ? _[0] : n.__k && C(n, 0), u), _ != null) for(f = _.length; f--;)_[f] != null && V(_[f]);
        u || ("value" in c3 && (f = c3.value) !== void 0 && (f !== t.value || i3 === "progress" && !f || i3 === "option" && f !== h3.value) && T(t, "value", f, h3.value, !1), "checked" in c3 && (f = c3.checked) !== void 0 && f !== t.checked && T(t, "checked", f, h3.checked, !1));
    }
    return t;
}
function K(t, e, n) {
    try {
        typeof t == "function" ? t(e) : t.current = e;
    } catch (r13) {
        d.__e(r13, n);
    }
}
function Q(t, e, n) {
    var r14, l11;
    if (d.unmount && d.unmount(t), (r14 = t.ref) && (r14.current && r14.current !== t.__e || K(r14, null, e)), (r14 = t.__c) != null) {
        if (r14.componentWillUnmount) try {
            r14.componentWillUnmount();
        } catch (_) {
            d.__e(_, e);
        }
        r14.base = r14.__P = null;
    }
    if (r14 = t.__k) for(l11 = 0; l11 < r14.length; l11++)r14[l11] && Q(r14[l11], e, typeof t.type != "function");
    n || t.__e == null || V(t.__e), t.__e = t.__d = void 0;
}
function _e(t, e, n) {
    return this.constructor(t, n);
}
function oe(t, e, n) {
    var r15, l12, _;
    d.__ && d.__(t, e), l12 = (r15 = typeof n == "function") ? null : n && n.__k || e.__k, _ = [], M(e, t = (!r15 && n || e).__k = Z(N, null, [
        t
    ]), l12 || U, U, e.ownerSVGElement !== void 0, !r15 && n ? [
        n
    ] : l12 ? null : e.firstChild ? S.call(e.childNodes) : null, _, !r15 && n ? n : l12 ? l12.__e : e.firstChild, r15), J(_, t);
}
S = $.slice, d = {
    __e: function(t, e) {
        for(var n, r16, l13; e = e.__;)if ((n = e.__c) && !n.__) try {
            if ((r16 = n.constructor) && r16.getDerivedStateFromError != null && (n.setState(r16.getDerivedStateFromError(t)), l13 = n.__d), n.componentDidCatch != null && (n.componentDidCatch(t), l13 = n.__d), l13) return n.__E = n;
        } catch (_) {
            t = _;
        }
        throw t;
    }
}, O = 0, E.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof t == "function" && (t = t(k({}, n), this.props)), t && k(n, t), t != null && this.__v && (e && this.__h.push(e), L(this));
}, E.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), L(this));
}, E.prototype.render = N, x = [], R = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, D.__r = 0, 0;
var a = function(p6, f, c4, n) {
    var l14;
    f[0] = 0;
    for(var u = 1; u < f.length; u++){
        var g2 = f[u++], o = f[u] ? (f[0] |= g2 ? 1 : 2, c4[f[u++]]) : f[++u];
        g2 === 3 ? n[0] = o : g2 === 4 ? n[1] = Object.assign(n[1] || {}, o) : g2 === 5 ? (n[1] = n[1] || {})[f[++u]] = o : g2 === 6 ? n[1][f[++u]] += o + "" : g2 ? (l14 = p6.apply(o, a(p6, o, c4, [
            "",
            null
        ])), n.push(l14), o[0] ? f[0] |= 2 : (f[u - 2] = 0, f[u] = l14)) : n.push(o);
    }
    return n;
}, M1 = new Map;
function b(p7) {
    var f = M1.get(this);
    return f || (f = new Map, M1.set(this, f)), (f = a(this, f.get(p7) || (f.set(p7, f = function(c5) {
        for(var n, l15, u = 1, g3 = "", o = "", i4 = [
            0
        ], s7 = function(v3) {
            u === 1 && (v3 || (g3 = g3.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? i4.push(0, v3, g3) : u === 3 && (v3 || g3) ? (i4.push(3, v3, g3), u = 2) : u === 2 && g3 === "..." && v3 ? i4.push(4, v3, 0) : u === 2 && g3 && !v3 ? i4.push(5, 0, !0, g3) : u >= 5 && ((g3 || !v3 && u === 5) && (i4.push(u, 0, g3, l15), u = 6), v3 && (i4.push(u, v3, 0, l15), u = 6)), g3 = "";
        }, t = 0; t < c5.length; t++){
            t && (u === 1 && s7(), s7(t));
            for(var w = 0; w < c5[t].length; w++)n = c5[t][w], u === 1 ? n === "<" ? (s7(), i4 = [
                i4
            ], u = 3) : g3 += n : u === 4 ? g3 === "--" && n === ">" ? (u = 1, g3 = "") : g3 = n + g3[0] : o ? n === o ? o = "" : g3 += n : n === '"' || n === "'" ? o = n : n === ">" ? (s7(), u = 1) : u && (n === "=" ? (u = 5, l15 = g3, g3 = "") : n === "/" && (u < 5 || c5[t][w + 1] === ">") ? (s7(), u === 3 && (i4 = i4[0]), u = i4, (i4 = i4[0]).push(2, 0, u), u = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (s7(), u = 2) : g3 += n), u === 3 && g3 === "!--" && (u = 4, i4 = i4[0]);
        }
        return s7(), i4;
    }(p7)), f), arguments, [])).length > 1 ? f : f[0];
}
var p = b.bind(Z);
var c, r, m, i = 0, b1 = [], l = d.__b, H1 = d.__r, p1 = d.diffed, d1 = d.__c, y = d.unmount;
function a1(_, n) {
    d.__h && d.__h(r, _, i || n), i = 0;
    var t = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return _ >= t.__.length && t.__.push({}), t.__[_];
}
function F1(_) {
    return i = 1, q1(A, _);
}
function q1(_, n, t) {
    var u = a1(c++, 2);
    return u.t = _, u.__c || (u.__ = [
        t ? t(n) : A(void 0, n),
        function(o) {
            var f = u.t(u.__[0], o);
            u.__[0] !== f && (u.__ = [
                f,
                u.__[1]
            ], u.__c.setState({}));
        }
    ], u.__c = r), u.__;
}
function T1(_, n) {
    var t = a1(c++, 3);
    !d.__s && v(t.__H, n) && (t.__ = _, t.__H = n, r.__H.__h.push(t));
}
function g(_, n) {
    var t = a1(c++, 7);
    return v(t.__H, n) && (t.__ = _(), t.__H = n, t.__h = _), t.__;
}
function R1(_, n) {
    return i = 8, g(function() {
        return _;
    }, n);
}
function x1() {
    for(var _; _ = b1.shift();)if (_.__P) try {
        _.__H.__h.forEach(s), _.__H.__h.forEach(h), _.__H.__h = [];
    } catch (n) {
        _.__H.__h = [], d.__e(n, _.__v);
    }
}
d.__b = function(_) {
    r = null, l && l(_);
}, d.__r = function(_) {
    H1 && H1(_), c = 0;
    var n = (r = _.__c).__H;
    n && (n.__h.forEach(s), n.__h.forEach(h), n.__h = []);
}, d.diffed = function(_) {
    p1 && p1(_);
    var n = _.__c;
    n && n.__H && n.__H.__h.length && (b1.push(n) !== 1 && m === d.requestAnimationFrame || ((m = d.requestAnimationFrame) || function(t) {
        var u, o = function() {
            clearTimeout(f), E1 && cancelAnimationFrame(u), setTimeout(t);
        }, f = setTimeout(o, 100);
        E1 && (u = requestAnimationFrame(o));
    })(x1)), r = null;
}, d.__c = function(_, n) {
    n.some(function(t) {
        try {
            t.__h.forEach(s), t.__h = t.__h.filter(function(u) {
                return !u.__ || h(u);
            });
        } catch (u) {
            n.some(function(o) {
                o.__h && (o.__h = []);
            }), n = [], d.__e(u, t.__v);
        }
    }), d1 && d1(_, n);
}, d.unmount = function(_) {
    y && y(_);
    var n, t = _.__c;
    t && t.__H && (t.__H.__.forEach(function(u) {
        try {
            s(u);
        } catch (o) {
            n = o;
        }
    }), n && d.__e(n, t.__v));
};
var E1 = typeof requestAnimationFrame == "function";
function s(_) {
    var n = r, t = _.__c;
    typeof t == "function" && (_.__c = void 0, t()), r = n;
}
function h(_) {
    var n = r;
    _.__c = _.__(), r = n;
}
function v(_, n) {
    return !_ || _.length !== n.length || n.some(function(t, u) {
        return t !== _[u];
    });
}
function A(_, n) {
    return typeof n == "function" ? n(_) : n;
}
const DefaultIntervalSettings = {
    work: 60,
    rest: 5,
    repeat: 4
};
const useInput = (initialValue)=>{
    const [value1, setValue] = F1(initialValue);
    const onInput = R1((e)=>{
        const { value  } = e.target;
        setValue(parseInt(value, 10));
    }, [
        initialValue,
        setValue
    ]);
    return [
        value1,
        onInput
    ];
};
const range = (length)=>Array.from({
        length
    }, (_, i5)=>i5
    )
;
const Settings = ({ settings , onSave  })=>{
    const [work, setWork] = useInput(settings.work);
    const [rest, setRest] = useInput(settings.rest);
    const [repeat, setRepeat] = useInput(settings.repeat);
    const onGo = R1(()=>onSave({
            work,
            rest,
            repeat
        })
    , [
        work,
        rest,
        repeat,
        onSave, 
    ]);
    return p`
    <section class="fld-col flg-2">
      <label for="work">Work ${work} second(s)</label>
      <input type="range" id="work" min="1" max="300" step="1" value=${work} onInput=${setWork} />
    </section>

    <section class="fld-col flg-2">
      <label for="rest">Rest ${rest} second(s)</label>
      <input type="range" id="rest" min="0" max="300" step="1" value=${rest} onInput=${setRest}  />
    </section>

    <section class="fld-col flg-2">
      <label for="repeats">Repeat ${repeat} time(s).</label>
      <input type="range" id="repeats" min="0" max="10" step="1" value=${repeat} onInput=${setRepeat} />
    </section>

    <button onClick=${onGo}>Go!</button>`;
};
const Timer = ({ settings , onCancel  })=>{
    const plan = g(()=>range((settings.repeat + 1) * 2).map((n)=>n % 2 === 0 ? settings.work : settings.rest
        )
    , [
        settings
    ]);
    const [index, setIndex] = F1(0);
    const [time, setTime] = F1(plan[index]);
    const currentState = index % 2 === 0 ? "Work" : "Rest";
    if (index >= plan.length) {
        onCancel();
    }
    if (time < 0) {
        setIndex((i6)=>i6 + 1
        );
        setTime(plan[index + 1]);
    }
    T1(()=>{
        const handle = setInterval(()=>{
            setTime((t)=>t - 1
            );
        }, 1000);
        return ()=>clearInterval(handle)
        ;
    }, [
        setTime
    ]);
    return p`
  <section class="fld-col flg-4">
    <h2>${currentState}</h2>
    <h1>${time}</h1>
    <p>Index ${index} Length ${plan.length} Time ${time}</p>
    <button onClick=${onCancel}>Cancel!</button>
  </section>`;
};
const Interval = ()=>{
    const [settings, setSettings] = F1(DefaultIntervalSettings);
    const [run, setRun] = F1(false);
    const onSave = R1((s8)=>{
        setSettings(s8);
        setRun(true);
    }, []);
    const onCancel = R1(()=>{
        setRun(false);
    }, []);
    return run ? p`<${Timer} settings=${settings} onCancel=${onCancel} />` : p`<${Settings} settings=${settings} onSave=${onSave} /`;
};
oe(p`<${Interval} />`, document.body);

