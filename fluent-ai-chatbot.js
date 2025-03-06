var Ca = Object.defineProperty;
var Sa = (e, t, n) => t in e ? Ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Lu = (e, t, n) => Sa(e, typeof t != "symbol" ? t + "" : t, n);
var pr = Array.isArray, Da = Array.prototype.indexOf, br = Array.from, Qo = Object.defineProperty, Xu = Object.getOwnPropertyDescriptor, ei = Object.getOwnPropertyDescriptors, ti = Object.getPrototypeOf;
const mt = () => {
};
function Ta(e) {
  return e();
}
function Hn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const He = 2, ni = 4, su = 8, gr = 16, at = 32, bn = 64, Gn = 128, Pe = 256, Zn = 512, Ce = 1024, kt = 2048, Ft = 4096, it = 8192, au = 16384, Ra = 32768, mr = 65536, Fa = 1 << 17, Oa = 1 << 19, ui = 1 << 20, Wn = Symbol("$state"), Na = Symbol("legacy props"), Ma = Symbol("");
function ri(e) {
  return e === this.v;
}
function oi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ii(e) {
  return !oi(e, this.v);
}
function Ia(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function La() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ba(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function za(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ja() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Zt = !1;
function qa() {
  Zt = !0;
}
const _r = 1, xr = 2, si = 4, $a = 8, Ha = 16, Ga = 2, Za = 1, Wa = 2, Ka = Symbol();
function Va(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ce = null;
function oo(e) {
  ce = e;
}
function Wt(e, t = !1, n) {
  ce = {
    p: ce,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Zt && !t && (ce.l = {
    s: null,
    u: null,
    r1: [],
    r2: rn(!1)
  });
}
function Kt(e) {
  const t = ce;
  if (t !== null) {
    const i = t.e;
    if (i !== null) {
      var n = ae, u = ne;
      t.e = null;
      try {
        for (var r = 0; r < i.length; r++) {
          var o = i[r];
          xt(o.effect), _t(o.reaction), kr(o.fn);
        }
      } finally {
        xt(n), _t(u);
      }
    }
    ce = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function gn() {
  return !Zt || ce !== null && ce.l === null;
}
function rn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ri,
    rv: 0,
    wv: 0
  };
  return n;
}
function Ja(e) {
  return /* @__PURE__ */ ai(rn(e));
}
// @__NO_SIDE_EFFECTS__
function vr(e, t = !1) {
  var u;
  const n = rn(e);
  return t || (n.equals = ii), Zt && ce !== null && ce.l !== null && ((u = ce.l).s ?? (u.s = [])).push(n), n;
}
function Mt(e, t = !1) {
  return /* @__PURE__ */ ai(/* @__PURE__ */ vr(e, t));
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  return ne !== null && !$e && (ne.f & He) !== 0 && (Qe === null ? cc([e]) : Qe.push(e)), e;
}
function ke(e, t) {
  return ne !== null && !$e && gn() && (ne.f & (He | gr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Qe === null || !Qe.includes(e)) && Ua(), Qu(e, t);
}
function Qu(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = yi(), ci(e, kt), gn() && ae !== null && (ae.f & Ce) !== 0 && (ae.f & (at | bn)) === 0 && (ut === null ? lc([e]) : ut.push(e))), t;
}
function ci(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var u = gn(), r = n.length, o = 0; o < r; o++) {
      var i = n[o], s = i.f;
      (s & kt) === 0 && (!u && i === ae || (Ge(i, t), (s & (Ce | Pe)) !== 0 && ((s & He) !== 0 ? ci(
        /** @type {Derived} */
        i,
        Ft
      ) : pu(
        /** @type {Effect} */
        i
      ))));
    }
}
let Ya = !1;
var io, li, di, fi;
function Xa() {
  if (io === void 0) {
    io = window, li = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    di = Xu(t, "firstChild").get, fi = Xu(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Er(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return di.call(e);
}
// @__NO_SIDE_EFFECTS__
function cu(e) {
  return fi.call(e);
}
function H(e, t) {
  return /* @__PURE__ */ Tt(e);
}
function on(e, t) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Tt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ cu(n) : n;
  }
}
function le(e, t = 1, n = !1) {
  let u = e;
  for (; t--; )
    u = /** @type {TemplateNode} */
    /* @__PURE__ */ cu(u);
  return u;
}
function Qa(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  var t = He | kt, n = ne !== null && (ne.f & He) !== 0 ? (
    /** @type {Derived} */
    ne
  ) : null;
  return ae === null || n !== null && (n.f & Pe) !== 0 ? t |= Pe : ae.f |= ui, {
    ctx: ce,
    deps: null,
    effects: null,
    equals: ri,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? ae
  };
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  const t = /* @__PURE__ */ pt(e);
  return t.equals = ii, t;
}
function hi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      st(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ec(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & He) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function tc(e) {
  var t, n = ae;
  xt(ec(e));
  try {
    hi(e), t = Ai(e);
  } finally {
    xt(n);
  }
  return t;
}
function pi(e) {
  var t = tc(e), n = (bt || (e.f & Pe) !== 0) && e.deps !== null ? Ft : Ce;
  Ge(e, n), e.equals(t) || (e.v = t, e.wv = yi());
}
function bi(e) {
  ae === null && ne === null && Ba(), ne !== null && (ne.f & Pe) !== 0 && ae === null && La(), wr && Ia();
}
function nc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Vt(e, t, n, u = !0) {
  var r = (e & bn) !== 0, o = ae, i = {
    ctx: ce,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | kt,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r ? null : o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      hu(i), i.f |= Ra;
    } catch (c) {
      throw st(i), c;
    }
  else t !== null && pu(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (ui | Gn)) === 0;
  if (!s && !r && u && (o !== null && nc(i, o), ne !== null && (ne.f & He) !== 0)) {
    var a = (
      /** @type {Derived} */
      ne
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function gi(e) {
  const t = Vt(su, null, !1);
  return Ge(t, Ce), t.teardown = e, t;
}
function sn(e) {
  bi();
  var t = ae !== null && (ae.f & at) !== 0 && ce !== null && !ce.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      ce
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: ae,
      reaction: ne
    });
  } else {
    var u = kr(e);
    return u;
  }
}
function uc(e) {
  return bi(), mn(e);
}
function rc(e) {
  const t = Vt(bn, e, !0);
  return (n = {}) => new Promise((u) => {
    n.outro ? Kn(t, () => {
      st(t), u(void 0);
    }) : (st(t), u(void 0));
  });
}
function kr(e) {
  return Vt(ni, e, !1);
}
function oc(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    ce
  ), u = { effect: null, ran: !1 };
  n.l.r1.push(u), u.effect = mn(() => {
    e(), !u.ran && (u.ran = !0, ke(n.l.r2, !0), vt(t));
  });
}
function ic() {
  var e = (
    /** @type {ComponentContextLegacy} */
    ce
  );
  mn(() => {
    if (T(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Ce) !== 0 && Ge(n, Ft), Jt(n) && hu(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function mn(e) {
  return Vt(su, e, !0);
}
function Be(e, t = [], n = pt) {
  const u = t.map(n);
  return lu(() => e(...u.map(T)));
}
function lu(e, t = 0) {
  return Vt(su | gr | t, e, !0);
}
function $t(e, t = !0) {
  return Vt(su | at, e, !0, t);
}
function mi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = wr, u = ne;
    so(!0), _t(null);
    try {
      t.call(null);
    } finally {
      so(n), _t(u);
    }
  }
}
function _i(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var u = n.next;
    st(n, t), n = u;
  }
}
function sc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & at) === 0 && st(t), t = n;
  }
}
function st(e, t = !0) {
  var n = !1;
  if ((t || (e.f & Oa) !== 0) && e.nodes_start !== null) {
    for (var u = e.nodes_start, r = e.nodes_end; u !== null; ) {
      var o = u === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ cu(u)
      );
      u.remove(), u = o;
    }
    n = !0;
  }
  _i(e, t && !n), Qn(e, 0), Ge(e, au);
  var i = e.transitions;
  if (i !== null)
    for (const a of i)
      a.stop();
  mi(e);
  var s = e.parent;
  s !== null && s.first !== null && xi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function xi(e) {
  var t = e.parent, n = e.prev, u = e.next;
  n !== null && (n.next = u), u !== null && (u.prev = n), t !== null && (t.first === e && (t.first = u), t.last === e && (t.last = n));
}
function Kn(e, t) {
  var n = [];
  yr(e, n, !0), vi(n, () => {
    st(e), t && t();
  });
}
function vi(e, t) {
  var n = e.length;
  if (n > 0) {
    var u = () => --n || t();
    for (var r of e)
      r.out(u);
  } else
    t();
}
function yr(e, t, n) {
  if ((e.f & it) === 0) {
    if (e.f ^= it, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var u = e.first; u !== null; ) {
      var r = u.next, o = (u.f & mr) !== 0 || (u.f & at) !== 0;
      yr(u, t, o ? n : !1), u = r;
    }
  }
}
function Vn(e) {
  Ei(e, !0);
}
function Ei(e, t) {
  if ((e.f & it) !== 0) {
    e.f ^= it, (e.f & Ce) === 0 && (e.f ^= Ce), Jt(e) && (Ge(e, kt), pu(e));
    for (var n = e.first; n !== null; ) {
      var u = n.next, r = (n.f & mr) !== 0 || (n.f & at) !== 0;
      Ei(n, r ? t : !1), n = u;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
let Jn = [];
function ac() {
  var e = Jn;
  Jn = [], Hn(e);
}
function du(e) {
  Jn.length === 0 && queueMicrotask(ac), Jn.push(e);
}
let Bn = !1, er = !1, Yn = null, Pn = !1, wr = !1;
function so(e) {
  wr = e;
}
let zn = [];
let ne = null, $e = !1;
function _t(e) {
  ne = e;
}
let ae = null;
function xt(e) {
  ae = e;
}
let Qe = null;
function cc(e) {
  Qe = e;
}
let Te = null, Me = 0, ut = null;
function lc(e) {
  ut = e;
}
let ki = 1, Xn = 0, bt = !1;
function yi() {
  return ++ki;
}
function Jt(e) {
  var f;
  var t = e.f;
  if ((t & kt) !== 0)
    return !0;
  if ((t & Ft) !== 0) {
    var n = e.deps, u = (t & Pe) !== 0;
    if (n !== null) {
      var r, o, i = (t & Zn) !== 0, s = u && ae !== null && !bt, a = n.length;
      if (i || s) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (r = 0; r < a; r++)
          o = n[r], (i || !((f = o == null ? void 0 : o.reactions) != null && f.includes(c))) && (o.reactions ?? (o.reactions = [])).push(c);
        i && (c.f ^= Zn), s && d !== null && (d.f & Pe) === 0 && (c.f ^= Pe);
      }
      for (r = 0; r < a; r++)
        if (o = n[r], Jt(
          /** @type {Derived} */
          o
        ) && pi(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!u || ae !== null && !bt) && Ge(e, Ce);
  }
  return !1;
}
function dc(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & Gn) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Gn;
      }
    n = n.parent;
  }
  throw Bn = !1, e;
}
function fc(e) {
  return (e.f & au) === 0 && (e.parent === null || (e.parent.f & Gn) === 0);
}
function fu(e, t, n, u) {
  if (Bn) {
    if (n === null && (Bn = !1), fc(t))
      throw e;
    return;
  }
  n !== null && (Bn = !0);
  {
    dc(e, t);
    return;
  }
}
function wi(e, t, n = !0) {
  var u = e.reactions;
  if (u !== null)
    for (var r = 0; r < u.length; r++) {
      var o = u[r];
      (o.f & He) !== 0 ? wi(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (n ? Ge(o, kt) : (o.f & Ce) !== 0 && Ge(o, Ft), pu(
        /** @type {Effect} */
        o
      ));
    }
}
function Ai(e) {
  var b;
  var t = Te, n = Me, u = ut, r = ne, o = bt, i = Qe, s = ce, a = $e, c = e.f;
  Te = /** @type {null | Value[]} */
  null, Me = 0, ut = null, bt = (c & Pe) !== 0 && ($e || !Pn || ne === null), ne = (c & (at | bn)) === 0 ? e : null, Qe = null, oo(e.ctx), $e = !1, Xn++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Te !== null) {
      var p;
      if (Qn(e, Me), f !== null && Me > 0)
        for (f.length = Me + Te.length, p = 0; p < Te.length; p++)
          f[Me + p] = Te[p];
      else
        e.deps = f = Te;
      if (!bt)
        for (p = Me; p < f.length; p++)
          ((b = f[p]).reactions ?? (b.reactions = [])).push(e);
    } else f !== null && Me < f.length && (Qn(e, Me), f.length = Me);
    if (gn() && ut !== null && !$e && f !== null && (e.f & (He | Ft | kt)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      ut.length; p++)
        wi(
          ut[p],
          /** @type {Effect} */
          e
        );
    return r !== null && Xn++, d;
  } finally {
    Te = t, Me = n, ut = u, ne = r, bt = o, Qe = i, oo(s), $e = a;
  }
}
function hc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var u = Da.call(n, e);
    if (u !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[u] = n[r], n.pop());
    }
  }
  n === null && (t.f & He) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Te === null || !Te.includes(t)) && (Ge(t, Ft), (t.f & (Pe | Zn)) === 0 && (t.f ^= Zn), hi(
    /** @type {Derived} **/
    t
  ), Qn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Qn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var u = t; u < n.length; u++)
      hc(e, n[u]);
}
function hu(e) {
  var t = e.f;
  if ((t & au) === 0) {
    Ge(e, Ce);
    var n = ae, u = ce, r = Pn;
    ae = e, Pn = !0;
    try {
      (t & gr) !== 0 ? sc(e) : _i(e), mi(e);
      var o = Ai(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ki;
      var i = e.deps, s;
    } catch (a) {
      fu(a, e, n, u || e.ctx);
    } finally {
      Pn = r, ae = n;
    }
  }
}
function pc() {
  try {
    Pa();
  } catch (e) {
    if (Yn !== null)
      fu(e, Yn, null);
    else
      throw e;
  }
}
function bc() {
  try {
    for (var e = 0; zn.length > 0; ) {
      e++ > 1e3 && pc();
      var t = zn, n = t.length;
      zn = [];
      for (var u = 0; u < n; u++) {
        var r = t[u];
        (r.f & Ce) === 0 && (r.f ^= Ce);
        var o = mc(r);
        gc(o);
      }
    }
  } finally {
    er = !1, Yn = null;
  }
}
function gc(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var u = e[n];
      if ((u.f & (au | it)) === 0)
        try {
          Jt(u) && (hu(u), u.deps === null && u.first === null && u.nodes_start === null && (u.teardown === null ? xi(u) : u.fn = null));
        } catch (r) {
          fu(r, u, null, u.ctx);
        }
    }
}
function pu(e) {
  er || (er = !0, queueMicrotask(bc));
  for (var t = Yn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (bn | at)) !== 0) {
      if ((n & Ce) === 0) return;
      t.f ^= Ce;
    }
  }
  zn.push(t);
}
function mc(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var u = n.f, r = (u & at) !== 0, o = r && (u & Ce) !== 0;
    if (!o && (u & it) === 0) {
      if ((u & ni) !== 0)
        t.push(n);
      else if (r)
        n.f ^= Ce;
      else {
        var i = ne;
        try {
          ne = n, Jt(n) && hu(n);
        } catch (c) {
          fu(c, n, null, n.ctx);
        } finally {
          ne = i;
        }
      }
      var s = n.first;
      if (s !== null) {
        n = s;
        continue;
      }
    }
    var a = n.parent;
    for (n = n.next; n === null && a !== null; )
      n = a.next, a = a.parent;
  }
  return t;
}
function T(e) {
  var t = e.f, n = (t & He) !== 0;
  if (ne !== null && !$e) {
    Qe !== null && Qe.includes(e) && ja();
    var u = ne.deps;
    e.rv < Xn && (e.rv = Xn, Te === null && u !== null && u[Me] === e ? Me++ : Te === null ? Te = [e] : (!bt || !Te.includes(e)) && Te.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), o = r.parent;
    o !== null && (o.f & Pe) === 0 && (r.f ^= Pe);
  }
  return n && (r = /** @type {Derived} */
  e, Jt(r) && pi(r)), e.v;
}
function vt(e) {
  var t = $e;
  try {
    return $e = !0, e();
  } finally {
    $e = t;
  }
}
const _c = -7169;
function Ge(e, t) {
  e.f = e.f & _c | t;
}
function xc(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      tr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && tr(n);
      }
  }
}
function tr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let u in e)
      try {
        tr(e[u], t);
      } catch {
      }
    const n = ti(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const u = ei(n);
      for (let r in u) {
        const o = u[r].get;
        if (o)
          try {
            o.call(e);
          } catch {
          }
      }
    }
  }
}
const vc = ["touchstart", "touchmove"];
function Ec(e) {
  return vc.includes(e);
}
let ao = !1;
function kc() {
  ao || (ao = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Ci(e) {
  var t = ne, n = ae;
  _t(null), xt(null);
  try {
    return e();
  } finally {
    _t(t), xt(n);
  }
}
function yc(e, t, n, u = n) {
  e.addEventListener(t, () => Ci(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), u(!0);
  } : e.__on_r = () => u(!0), kc();
}
const Si = /* @__PURE__ */ new Set(), nr = /* @__PURE__ */ new Set();
function wc(e, t, n, u = {}) {
  function r(o) {
    if (u.capture || un.call(t, o), !o.cancelBubble)
      return Ci(() => n == null ? void 0 : n.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? du(() => {
    t.addEventListener(e, r, u);
  }) : t.addEventListener(e, r, u), r;
}
function De(e, t, n, u, r) {
  var o = { capture: u, passive: r }, i = wc(e, t, n, o);
  (t === document.body || t === window || t === document) && gi(() => {
    t.removeEventListener(e, i, o);
  });
}
function Di(e) {
  for (var t = 0; t < e.length; t++)
    Si.add(e[t]);
  for (var n of nr)
    n(e);
}
function un(e) {
  var _;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), u = e.type, r = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], o = (
    /** @type {null | Element} */
    r[0] || e.target
  ), i = 0, s = e.__root;
  if (s) {
    var a = r.indexOf(s);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = r.indexOf(t);
    if (c === -1)
      return;
    a <= c && (i = a);
  }
  if (o = /** @type {Element} */
  r[i] || e.target, o !== t) {
    Qo(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || n;
      }
    });
    var d = ne, f = ae;
    _t(null), xt(null);
    try {
      for (var p, b = []; o !== null; ) {
        var l = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var g = o["__" + u];
          if (g !== void 0 && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (pr(g)) {
              var [m, ...w] = g;
              m.apply(o, [e, ...w]);
            } else
              g.call(o, e);
        } catch (v) {
          p ? b.push(v) : p = v;
        }
        if (e.cancelBubble || l === t || l === null)
          break;
        o = l;
      }
      if (p) {
        for (let v of b)
          queueMicrotask(() => {
            throw v;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, _t(d), xt(f);
    }
  }
}
function Ar(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function an(e, t) {
  var n = (
    /** @type {Effect} */
    ae
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ue(e, t) {
  var n = (t & Za) !== 0, u = (t & Wa) !== 0, r, o = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Ar(o ? e : "<!>" + e), n || (r = /** @type {Node} */
    /* @__PURE__ */ Tt(r)));
    var i = (
      /** @type {TemplateNode} */
      u || li ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Tt(i)
      ), a = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      an(s, a);
    } else
      an(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function Ac(e, t, n = "svg") {
  var u = !e.startsWith("<!>"), r = `<${n}>${u ? e : "<!>" + e}</${n}>`, o;
  return () => {
    if (!o) {
      var i = (
        /** @type {DocumentFragment} */
        Ar(r)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ Tt(i)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ Tt(s);
    }
    var a = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return an(a, a), a;
  };
}
function Cr() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Er();
  return e.append(t, n), an(t, n), e;
}
function Q(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function rt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Cc(e, t) {
  return Sc(e, t);
}
const It = /* @__PURE__ */ new Map();
function Sc(e, { target: t, anchor: n, props: u = {}, events: r, context: o, intro: i = !0 }) {
  Xa();
  var s = /* @__PURE__ */ new Set(), a = (f) => {
    for (var p = 0; p < f.length; p++) {
      var b = f[p];
      if (!s.has(b)) {
        s.add(b);
        var l = Ec(b);
        t.addEventListener(b, un, { passive: l });
        var g = It.get(b);
        g === void 0 ? (document.addEventListener(b, un, { passive: l }), It.set(b, 1)) : It.set(b, g + 1);
      }
    }
  };
  a(br(Si)), nr.add(a);
  var c = void 0, d = rc(() => {
    var f = n ?? t.appendChild(Er());
    return $t(() => {
      if (o) {
        Wt({});
        var p = (
          /** @type {ComponentContext} */
          ce
        );
        p.c = o;
      }
      r && (u.$$events = r), c = e(f, u) || {}, o && Kt();
    }), () => {
      var l;
      for (var p of s) {
        t.removeEventListener(p, un);
        var b = (
          /** @type {number} */
          It.get(p)
        );
        --b === 0 ? (document.removeEventListener(p, un), It.delete(p)) : It.set(p, b);
      }
      nr.delete(a), f !== n && ((l = f.parentNode) == null || l.removeChild(f));
    };
  });
  return Dc.set(c, d), c;
}
let Dc = /* @__PURE__ */ new WeakMap();
function we(e, t, [n, u] = [0, 0]) {
  var r = e, o = null, i = null, s = Ka, a = n > 0 ? mr : 0, c = !1;
  const d = (p, b = !0) => {
    c = !0, f(b, p);
  }, f = (p, b) => {
    s !== (s = p) && (s ? (o ? Vn(o) : b && (o = $t(() => b(r))), i && Kn(i, () => {
      i = null;
    })) : (i ? Vn(i) : b && (i = $t(() => b(r, [n + 1, u]))), o && Kn(o, () => {
      o = null;
    })));
  };
  lu(() => {
    c = !1, t(d), c || f(null, null);
  }, a);
}
function jn(e, t) {
  return t;
}
function Tc(e, t, n, u) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    yr(t[i].e, r, !0);
  var s = o > 0 && r.length === 0 && n !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Qa(a), a.append(
      /** @type {Element} */
      n
    ), u.clear(), dt(e, t[0].prev, t[o - 1].next);
  }
  vi(r, () => {
    for (var c = 0; c < o; c++) {
      var d = t[c];
      s || (u.delete(d.k), dt(e, d.prev, d.next)), st(d.e, !s);
    }
  });
}
function jt(e, t, n, u, r, o = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & si) !== 0;
  if (a) {
    var c = (
      /** @type {Element} */
      e
    );
    i = c.appendChild(Er());
  }
  var d = null, f = !1, p = /* @__PURE__ */ qt(() => {
    var b = n();
    return pr(b) ? b : b == null ? [] : br(b);
  });
  lu(() => {
    var b = T(p), l = b.length;
    f && l === 0 || (f = l === 0, Rc(b, s, i, r, t, u, n), o !== null && (l === 0 ? d ? Vn(d) : d = $t(() => o(i)) : d !== null && Kn(d, () => {
      d = null;
    })), T(p));
  });
}
function Rc(e, t, n, u, r, o, i) {
  var B, z, W, ve;
  var s = (r & $a) !== 0, a = (r & (_r | xr)) !== 0, c = e.length, d = t.items, f = t.first, p = f, b, l = null, g, m = [], w = [], _, v, E, k;
  if (s)
    for (k = 0; k < c; k += 1)
      _ = e[k], v = o(_, k), E = d.get(v), E !== void 0 && ((B = E.a) == null || B.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(E));
  for (k = 0; k < c; k += 1) {
    if (_ = e[k], v = o(_, k), E = d.get(v), E === void 0) {
      var A = p ? (
        /** @type {TemplateNode} */
        p.e.nodes_start
      ) : n;
      l = Oc(
        A,
        t,
        l,
        l === null ? t.first : l.next,
        _,
        v,
        k,
        u,
        r,
        i
      ), d.set(v, l), m = [], w = [], p = l.next;
      continue;
    }
    if (a && Fc(E, _, k, r), (E.e.f & it) !== 0 && (Vn(E.e), s && ((z = E.a) == null || z.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(E))), E !== p) {
      if (b !== void 0 && b.has(E)) {
        if (m.length < w.length) {
          var R = w[0], N;
          l = R.prev;
          var J = m[0], L = m[m.length - 1];
          for (N = 0; N < m.length; N += 1)
            co(m[N], R, n);
          for (N = 0; N < w.length; N += 1)
            b.delete(w[N]);
          dt(t, J.prev, L.next), dt(t, l, J), dt(t, L, R), p = R, l = L, k -= 1, m = [], w = [];
        } else
          b.delete(E), co(E, p, n), dt(t, E.prev, E.next), dt(t, E, l === null ? t.first : l.next), dt(t, l, E), l = E;
        continue;
      }
      for (m = [], w = []; p !== null && p.k !== v; )
        (p.e.f & it) === 0 && (b ?? (b = /* @__PURE__ */ new Set())).add(p), w.push(p), p = p.next;
      if (p === null)
        continue;
      E = p;
    }
    m.push(E), l = E, p = E.next;
  }
  if (p !== null || b !== void 0) {
    for (var P = b === void 0 ? [] : br(b); p !== null; )
      (p.e.f & it) === 0 && P.push(p), p = p.next;
    var Y = P.length;
    if (Y > 0) {
      var K = (r & si) !== 0 && c === 0 ? n : null;
      if (s) {
        for (k = 0; k < Y; k += 1)
          (W = P[k].a) == null || W.measure();
        for (k = 0; k < Y; k += 1)
          (ve = P[k].a) == null || ve.fix();
      }
      Tc(t, P, K, d);
    }
  }
  s && du(() => {
    var q;
    if (g !== void 0)
      for (E of g)
        (q = E.a) == null || q.apply();
  }), ae.first = t.first && t.first.e, ae.last = l && l.e;
}
function Fc(e, t, n, u) {
  (u & _r) !== 0 && Qu(e.v, t), (u & xr) !== 0 ? Qu(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Oc(e, t, n, u, r, o, i, s, a, c) {
  var d = (a & _r) !== 0, f = (a & Ha) === 0, p = d ? f ? /* @__PURE__ */ vr(r) : rn(r) : r, b = (a & xr) === 0 ? i : rn(i), l = {
    i: b,
    v: p,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: u
  };
  try {
    return l.e = $t(() => s(e, p, b, c), Ya), l.e.prev = n && n.e, l.e.next = u && u.e, n === null ? t.first = l : (n.next = l, n.e.next = l.e), u !== null && (u.prev = l, u.e.prev = l.e), l;
  } finally {
  }
}
function co(e, t, n) {
  for (var u = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, o = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); o !== u; ) {
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ cu(o)
    );
    r.before(o), o = i;
  }
}
function dt(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ti(e, t, n, u, r) {
  var o = e, i = "", s;
  lu(() => {
    i !== (i = t() ?? "") && (s !== void 0 && (st(s), s = void 0), i !== "" && (s = $t(() => {
      var a = i + "", c = Ar(a);
      an(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Tt(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), o.before(c);
    })));
  });
}
function _n(e, t) {
  du(() => {
    var n = e.getRootNode(), u = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!u.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, u.appendChild(r);
    }
  });
}
function Ri(e) {
  var t, n, u = "";
  if (typeof e == "string" || typeof e == "number") u += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Ri(e[t])) && (u && (u += " "), u += n);
  } else for (n in e) e[n] && (u && (u += " "), u += n);
  return u;
}
function Nc() {
  for (var e, t, n = 0, u = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Ri(e)) && (u && (u += " "), u += t);
  return u;
}
function Mc(e) {
  return typeof e == "object" ? Nc(e) : e ?? "";
}
function Ic(e, t, n) {
  var u = e == null ? "" : "" + e;
  return t && (u = u ? u + " " + t : t), u === "" ? null : u;
}
function ot(e, t, n, u, r, o) {
  var i = e.__className;
  if (i !== n) {
    var s = Ic(n, u);
    s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s), e.__className = n;
  }
  return o;
}
function Lc(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function zt(e, t, n, u) {
  var r = e.__attributes ?? (e.__attributes = {});
  r[t] !== (r[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Ma] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Bc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
var lo = /* @__PURE__ */ new Map();
function Bc(e) {
  var t = lo.get(e.nodeName);
  if (t) return t;
  lo.set(e.nodeName, t = []);
  for (var n, u = e, r = Element.prototype; r !== u; ) {
    n = ei(u);
    for (var o in n)
      n[o].set && t.push(o);
    u = ti(u);
  }
  return t;
}
function Pc(e, t, n = t) {
  var u = gn();
  yc(e, "input", (r) => {
    var o = r ? e.defaultValue : e.value;
    if (o = Bu(e) ? Pu(o) : o, n(o), u && o !== (o = t())) {
      var i = e.selectionStart, s = e.selectionEnd;
      e.value = o ?? "", s !== null && (e.selectionStart = i, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  vt(t) == null && e.value && n(Bu(e) ? Pu(e.value) : e.value), mn(() => {
    var r = t();
    Bu(e) && r === Pu(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function Bu(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Pu(e) {
  return e === "" ? null : +e;
}
function fo(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function ur(e = {}, t, n, u) {
  return kr(() => {
    var r, o;
    return mn(() => {
      r = o, o = [], vt(() => {
        e !== n(...o) && (t(e, ...o), r && fo(n(...r), e) && t(null, ...r));
      });
    }), () => {
      du(() => {
        o && fo(n(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function qe(e) {
  return function(...t) {
    var n = (
      /** @type {Event} */
      t[0]
    );
    return n.stopPropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function Sr(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ce
  ), n = t.l.u;
  if (!n) return;
  let u = () => xc(t.s);
  if (e) {
    let r = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ pt(() => {
      let s = !1;
      const a = t.s;
      for (const c in a)
        a[c] !== o[c] && (o[c] = a[c], s = !0);
      return s && r++, r;
    });
    u = () => T(i);
  }
  n.b.length && uc(() => {
    ho(t, u), Hn(n.b);
  }), sn(() => {
    const r = vt(() => n.m.map(Ta));
    return () => {
      for (const o of r)
        typeof o == "function" && o();
    };
  }), n.a.length && sn(() => {
    ho(t, u), Hn(n.a);
  });
}
function ho(e, t) {
  if (e.l.s)
    for (const n of e.l.s) T(n);
  t();
}
function On(e, t) {
  var o;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (o = e.$$events) == null ? void 0 : o[t.type]
  ), u = pr(n) ? n.slice() : n == null ? [] : [n];
  for (var r of u)
    r.call(this, t);
}
function Dr(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), mt;
  const u = vt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return u.unsubscribe ? () => u.unsubscribe() : u;
}
const Lt = [];
function zc(e, t) {
  return {
    subscribe: Tr(e, t).subscribe
  };
}
function Tr(e, t = mt) {
  let n = null;
  const u = /* @__PURE__ */ new Set();
  function r(s) {
    if (oi(e, s) && (e = s, n)) {
      const a = !Lt.length;
      for (const c of u)
        c[1](), Lt.push(c, e);
      if (a) {
        for (let c = 0; c < Lt.length; c += 2)
          Lt[c][0](Lt[c + 1]);
        Lt.length = 0;
      }
    }
  }
  function o(s) {
    r(s(
      /** @type {T} */
      e
    ));
  }
  function i(s, a = mt) {
    const c = [s, a];
    return u.add(c), u.size === 1 && (n = t(r, o) || mt), s(
      /** @type {T} */
      e
    ), () => {
      u.delete(c), u.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: o, subscribe: i };
}
function Rr(e, t, n) {
  const u = !Array.isArray(e), r = u ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const o = t.length < 2;
  return zc(n, (i, s) => {
    let a = !1;
    const c = [];
    let d = 0, f = mt;
    const p = () => {
      if (d)
        return;
      f();
      const l = t(u ? c[0] : c, i, s);
      o ? i(l) : f = typeof l == "function" ? l : mt;
    }, b = r.map(
      (l, g) => Dr(
        l,
        (m) => {
          c[g] = m, d &= ~(1 << g), a && p();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return a = !0, p(), function() {
      Hn(b), f(), a = !1;
    };
  });
}
function Fi(e) {
  let t;
  return Dr(e, (n) => t = n)(), t;
}
let Nn = !1, rr = Symbol();
function cn(e, t, n) {
  const u = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ vr(void 0),
    unsubscribe: mt
  });
  if (u.store !== e && !(rr in n))
    if (u.unsubscribe(), u.store = e ?? null, e == null)
      u.source.v = void 0, u.unsubscribe = mt;
    else {
      var r = !0;
      u.unsubscribe = Dr(e, (o) => {
        r ? u.source.v = o : ke(u.source, o);
      }), r = !1;
    }
  return e && rr in n ? Fi(e) : T(u.source);
}
function bu() {
  const e = {};
  function t() {
    gi(() => {
      for (var n in e)
        e[n].unsubscribe();
      Qo(e, rr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function jc(e, t, n) {
  return e.set(n), t;
}
function Uc(e) {
  var t = Nn;
  try {
    return Nn = !1, [e(), Nn];
  } finally {
    Nn = t;
  }
}
function Mn(e, t, n, u) {
  var l;
  var r = !Zt || (n & Ga) !== 0, o = !1, i;
  [i, o] = Uc(() => (
    /** @type {V} */
    e[t]
  ));
  var s = Wn in e || Na in e, a = (((l = Xu(e, t)) == null ? void 0 : l.set) ?? (s && t in e && ((g) => e[t] = g))) || void 0, c = (
    /** @type {V} */
    u
  ), d = !0, f = () => (d && (d = !1, c = /** @type {V} */
  u), c);
  i === void 0 && u !== void 0 && (a && r && za(), i = f(), a && a(i));
  var p;
  if (r)
    p = () => {
      var g = (
        /** @type {V} */
        e[t]
      );
      return g === void 0 ? f() : (d = !0, g);
    };
  else {
    var b = /* @__PURE__ */ qt(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    b.f |= Fa, p = () => {
      var g = T(b);
      return g !== void 0 && (c = /** @type {V} */
      void 0), g === void 0 ? c : g;
    };
  }
  return p;
}
function gu(e) {
  ce === null && Va(), Zt && ce.l !== null ? qc(ce).m.push(e) : sn(() => {
    const t = vt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function qc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const $c = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($c);
function Oi(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Hc } = Object.prototype, { getPrototypeOf: Fr } = Object, mu = /* @__PURE__ */ ((e) => (t) => {
  const n = Hc.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ze = (e) => (e = e.toLowerCase(), (t) => mu(t) === e), _u = (e) => (t) => typeof t === e, { isArray: Yt } = Array, ln = _u("undefined");
function Gc(e) {
  return e !== null && !ln(e) && e.constructor !== null && !ln(e.constructor) && Ie(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ni = Ze("ArrayBuffer");
function Zc(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ni(e.buffer), t;
}
const Wc = _u("string"), Ie = _u("function"), Mi = _u("number"), xu = (e) => e !== null && typeof e == "object", Kc = (e) => e === !0 || e === !1, Un = (e) => {
  if (mu(e) !== "object")
    return !1;
  const t = Fr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Vc = Ze("Date"), Jc = Ze("File"), Yc = Ze("Blob"), Xc = Ze("FileList"), Qc = (e) => xu(e) && Ie(e.pipe), e0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ie(e.append) && ((t = mu(e)) === "formdata" || // detect form-data instance
  t === "object" && Ie(e.toString) && e.toString() === "[object FormData]"));
}, t0 = Ze("URLSearchParams"), [n0, u0, r0, o0] = ["ReadableStream", "Request", "Response", "Headers"].map(Ze), i0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let u, r;
  if (typeof e != "object" && (e = [e]), Yt(e))
    for (u = 0, r = e.length; u < r; u++)
      t.call(null, e[u], u, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let s;
    for (u = 0; u < i; u++)
      s = o[u], t.call(null, e[s], s, e);
  }
}
function Ii(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let u = n.length, r;
  for (; u-- > 0; )
    if (r = n[u], t === r.toLowerCase())
      return r;
  return null;
}
const St = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Li = (e) => !ln(e) && e !== St;
function or() {
  const { caseless: e } = Li(this) && this || {}, t = {}, n = (u, r) => {
    const o = e && Ii(t, r) || r;
    Un(t[o]) && Un(u) ? t[o] = or(t[o], u) : Un(u) ? t[o] = or({}, u) : Yt(u) ? t[o] = u.slice() : t[o] = u;
  };
  for (let u = 0, r = arguments.length; u < r; u++)
    arguments[u] && xn(arguments[u], n);
  return t;
}
const s0 = (e, t, n, { allOwnKeys: u } = {}) => (xn(t, (r, o) => {
  n && Ie(r) ? e[o] = Oi(r, n) : e[o] = r;
}, { allOwnKeys: u }), e), a0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), c0 = (e, t, n, u) => {
  e.prototype = Object.create(t.prototype, u), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, l0 = (e, t, n, u) => {
  let r, o, i;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!u || u(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = n !== !1 && Fr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, d0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const u = e.indexOf(t, n);
  return u !== -1 && u === n;
}, f0 = (e) => {
  if (!e) return null;
  if (Yt(e)) return e;
  let t = e.length;
  if (!Mi(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, h0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Fr(Uint8Array)), p0 = (e, t) => {
  const u = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = u.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, b0 = (e, t) => {
  let n;
  const u = [];
  for (; (n = e.exec(t)) !== null; )
    u.push(n);
  return u;
}, g0 = Ze("HTMLFormElement"), m0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, u, r) {
    return u.toUpperCase() + r;
  }
), po = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), _0 = Ze("RegExp"), Bi = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), u = {};
  xn(n, (r, o) => {
    let i;
    (i = t(r, o, e)) !== !1 && (u[o] = i || r);
  }), Object.defineProperties(e, u);
}, x0 = (e) => {
  Bi(e, (t, n) => {
    if (Ie(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const u = e[n];
    if (Ie(u)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, v0 = (e, t) => {
  const n = {}, u = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return Yt(e) ? u(e) : u(String(e).split(t)), n;
}, E0 = () => {
}, k0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function y0(e) {
  return !!(e && Ie(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const w0 = (e) => {
  const t = new Array(10), n = (u, r) => {
    if (xu(u)) {
      if (t.indexOf(u) >= 0)
        return;
      if (!("toJSON" in u)) {
        t[r] = u;
        const o = Yt(u) ? [] : {};
        return xn(u, (i, s) => {
          const a = n(i, r + 1);
          !ln(a) && (o[s] = a);
        }), t[r] = void 0, o;
      }
    }
    return u;
  };
  return n(e, 0);
}, A0 = Ze("AsyncFunction"), C0 = (e) => e && (xu(e) || Ie(e)) && Ie(e.then) && Ie(e.catch), Pi = ((e, t) => e ? setImmediate : t ? ((n, u) => (St.addEventListener("message", ({ source: r, data: o }) => {
  r === St && o === n && u.length && u.shift()();
}, !1), (r) => {
  u.push(r), St.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ie(St.postMessage)
), S0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(St) : typeof process < "u" && process.nextTick || Pi, x = {
  isArray: Yt,
  isArrayBuffer: Ni,
  isBuffer: Gc,
  isFormData: e0,
  isArrayBufferView: Zc,
  isString: Wc,
  isNumber: Mi,
  isBoolean: Kc,
  isObject: xu,
  isPlainObject: Un,
  isReadableStream: n0,
  isRequest: u0,
  isResponse: r0,
  isHeaders: o0,
  isUndefined: ln,
  isDate: Vc,
  isFile: Jc,
  isBlob: Yc,
  isRegExp: _0,
  isFunction: Ie,
  isStream: Qc,
  isURLSearchParams: t0,
  isTypedArray: h0,
  isFileList: Xc,
  forEach: xn,
  merge: or,
  extend: s0,
  trim: i0,
  stripBOM: a0,
  inherits: c0,
  toFlatObject: l0,
  kindOf: mu,
  kindOfTest: Ze,
  endsWith: d0,
  toArray: f0,
  forEachEntry: p0,
  matchAll: b0,
  isHTMLForm: g0,
  hasOwnProperty: po,
  hasOwnProp: po,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Bi,
  freezeMethods: x0,
  toObjectSet: v0,
  toCamelCase: m0,
  noop: E0,
  toFiniteNumber: k0,
  findKey: Ii,
  global: St,
  isContextDefined: Li,
  isSpecCompliantForm: y0,
  toJSONObject: w0,
  isAsyncFn: A0,
  isThenable: C0,
  setImmediate: Pi,
  asap: S0
};
function G(e, t, n, u, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), u && (this.request = u), r && (this.response = r, this.status = r.status ? r.status : null);
}
x.inherits(G, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const zi = G.prototype, ji = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ji[e] = { value: e };
});
Object.defineProperties(G, ji);
Object.defineProperty(zi, "isAxiosError", { value: !0 });
G.from = (e, t, n, u, r, o) => {
  const i = Object.create(zi);
  return x.toFlatObject(e, i, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), G.call(i, e.message, t, n, u, r), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const D0 = null;
function ir(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function Ui(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function bo(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = Ui(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function T0(e) {
  return x.isArray(e) && !e.some(ir);
}
const R0 = x.toFlatObject(x, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function vu(e, t, n) {
  if (!x.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = x.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !x.isUndefined(m[g]);
  });
  const u = n.metaTokens, r = n.visitor || d, o = n.dots, i = n.indexes, a = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
  if (!x.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(l) {
    if (l === null) return "";
    if (x.isDate(l))
      return l.toISOString();
    if (!a && x.isBlob(l))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(l) || x.isTypedArray(l) ? a && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function d(l, g, m) {
    let w = l;
    if (l && !m && typeof l == "object") {
      if (x.endsWith(g, "{}"))
        g = u ? g : g.slice(0, -2), l = JSON.stringify(l);
      else if (x.isArray(l) && T0(l) || (x.isFileList(l) || x.endsWith(g, "[]")) && (w = x.toArray(l)))
        return g = Ui(g), w.forEach(function(v, E) {
          !(x.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? bo([g], E, o) : i === null ? g : g + "[]",
            c(v)
          );
        }), !1;
    }
    return ir(l) ? !0 : (t.append(bo(m, g, o), c(l)), !1);
  }
  const f = [], p = Object.assign(R0, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: ir
  });
  function b(l, g) {
    if (!x.isUndefined(l)) {
      if (f.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(l), x.forEach(l, function(w, _) {
        (!(x.isUndefined(w) || w === null) && r.call(
          t,
          w,
          x.isString(_) ? _.trim() : _,
          g,
          p
        )) === !0 && b(w, g ? g.concat(_) : [_]);
      }), f.pop();
    }
  }
  if (!x.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function go(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(u) {
    return t[u];
  });
}
function Or(e, t) {
  this._pairs = [], e && vu(e, this, t);
}
const qi = Or.prototype;
qi.append = function(t, n) {
  this._pairs.push([t, n]);
};
qi.toString = function(t) {
  const n = t ? function(u) {
    return t.call(this, u, go);
  } : go;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function F0(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $i(e, t, n) {
  if (!t)
    return e;
  const u = n && n.encode || F0;
  x.isFunction(n) && (n = {
    serialize: n
  });
  const r = n && n.serialize;
  let o;
  if (r ? o = r(t, n) : o = x.isURLSearchParams(t) ? t.toString() : new Or(t, n).toString(u), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class mo {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, u) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: u ? u.synchronous : !1,
      runWhen: u ? u.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    x.forEach(this.handlers, function(u) {
      u !== null && t(u);
    });
  }
}
const Hi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, O0 = typeof URLSearchParams < "u" ? URLSearchParams : Or, N0 = typeof FormData < "u" ? FormData : null, M0 = typeof Blob < "u" ? Blob : null, I0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: O0,
    FormData: N0,
    Blob: M0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Nr = typeof window < "u" && typeof document < "u", sr = typeof navigator == "object" && navigator || void 0, L0 = Nr && (!sr || ["ReactNative", "NativeScript", "NS"].indexOf(sr.product) < 0), B0 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", P0 = Nr && window.location.href || "http://localhost", z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Nr,
  hasStandardBrowserEnv: L0,
  hasStandardBrowserWebWorkerEnv: B0,
  navigator: sr,
  origin: P0
}, Symbol.toStringTag, { value: "Module" })), Ae = {
  ...z0,
  ...I0
};
function j0(e, t) {
  return vu(e, new Ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, u, r, o) {
      return Ae.isNode && x.isBuffer(n) ? (this.append(u, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function U0(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function q0(e) {
  const t = {}, n = Object.keys(e);
  let u;
  const r = n.length;
  let o;
  for (u = 0; u < r; u++)
    o = n[u], t[o] = e[o];
  return t;
}
function Gi(e) {
  function t(n, u, r, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), a = o >= n.length;
    return i = !i && x.isArray(r) ? r.length : i, a ? (x.hasOwnProp(r, i) ? r[i] = [r[i], u] : r[i] = u, !s) : ((!r[i] || !x.isObject(r[i])) && (r[i] = []), t(n, u, r[i], o) && x.isArray(r[i]) && (r[i] = q0(r[i])), !s);
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return x.forEachEntry(e, (u, r) => {
      t(U0(u), r, n, 0);
    }), n;
  }
  return null;
}
function $0(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (u) {
      if (u.name !== "SyntaxError")
        throw u;
    }
  return (n || JSON.stringify)(e);
}
const vn = {
  transitional: Hi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const u = n.getContentType() || "", r = u.indexOf("application/json") > -1, o = x.isObject(t);
    if (o && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))
      return r ? JSON.stringify(Gi(t)) : t;
    if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t) || x.isReadableStream(t))
      return t;
    if (x.isArrayBufferView(t))
      return t.buffer;
    if (x.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (u.indexOf("application/x-www-form-urlencoded") > -1)
        return j0(t, this.formSerializer).toString();
      if ((s = x.isFileList(t)) || u.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return vu(
          s ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return o || r ? (n.setContentType("application/json", !1), $0(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || vn.transitional, u = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (x.isResponse(t) || x.isReadableStream(t))
      return t;
    if (t && x.isString(t) && (u && !this.responseType || r)) {
      const i = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? G.from(s, G.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ae.classes.FormData,
    Blob: Ae.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  vn.headers[e] = {};
});
const H0 = x.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), G0 = (e) => {
  const t = {};
  let n, u, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), u = i.substring(r + 1).trim(), !(!n || t[n] && H0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(u) : t[n] = [u] : t[n] = t[n] ? t[n] + ", " + u : u);
  }), t;
}, _o = Symbol("internals");
function nn(e) {
  return e && String(e).trim().toLowerCase();
}
function qn(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(qn) : String(e);
}
function Z0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = n.exec(e); )
    t[u[1]] = u[2];
  return t;
}
const W0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function zu(e, t, n, u, r) {
  if (x.isFunction(u))
    return u.call(this, t, n);
  if (r && (t = n), !!x.isString(t)) {
    if (x.isString(u))
      return t.indexOf(u) !== -1;
    if (x.isRegExp(u))
      return u.test(t);
  }
}
function K0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, u) => n.toUpperCase() + u);
}
function V0(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(e, u + n, {
      value: function(r, o, i) {
        return this[u].call(this, t, r, o, i);
      },
      configurable: !0
    });
  });
}
let Re = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, u) {
    const r = this;
    function o(s, a, c) {
      const d = nn(a);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = x.findKey(r, d);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = qn(s));
    }
    const i = (s, a) => x.forEach(s, (c, d) => o(c, d, a));
    if (x.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (x.isString(t) && (t = t.trim()) && !W0(t))
      i(G0(t), n);
    else if (x.isHeaders(t))
      for (const [s, a] of t.entries())
        o(a, s, u);
    else
      t != null && o(n, t, u);
    return this;
  }
  get(t, n) {
    if (t = nn(t), t) {
      const u = x.findKey(this, t);
      if (u) {
        const r = this[u];
        if (!n)
          return r;
        if (n === !0)
          return Z0(r);
        if (x.isFunction(n))
          return n.call(this, r, u);
        if (x.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = nn(t), t) {
      const u = x.findKey(this, t);
      return !!(u && this[u] !== void 0 && (!n || zu(this, this[u], u, n)));
    }
    return !1;
  }
  delete(t, n) {
    const u = this;
    let r = !1;
    function o(i) {
      if (i = nn(i), i) {
        const s = x.findKey(u, i);
        s && (!n || zu(u, u[s], s, n)) && (delete u[s], r = !0);
      }
    }
    return x.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let u = n.length, r = !1;
    for (; u--; ) {
      const o = n[u];
      (!t || zu(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, u = {};
    return x.forEach(this, (r, o) => {
      const i = x.findKey(u, o);
      if (i) {
        n[i] = qn(r), delete n[o];
        return;
      }
      const s = t ? K0(o) : String(o).trim();
      s !== o && delete n[o], n[s] = qn(r), u[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (u, r) => {
      u != null && u !== !1 && (n[r] = t && x.isArray(u) ? u.join(", ") : u);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const u = new this(t);
    return n.forEach((r) => u.set(r)), u;
  }
  static accessor(t) {
    const u = (this[_o] = this[_o] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(i) {
      const s = nn(i);
      u[s] || (V0(r, i), u[s] = !0);
    }
    return x.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(Re.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(u) {
      this[n] = u;
    }
  };
});
x.freezeMethods(Re);
function ju(e, t) {
  const n = this || vn, u = t || n, r = Re.from(u.headers);
  let o = u.data;
  return x.forEach(e, function(s) {
    o = s.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function Zi(e) {
  return !!(e && e.__CANCEL__);
}
function Xt(e, t, n) {
  G.call(this, e ?? "canceled", G.ERR_CANCELED, t, n), this.name = "CanceledError";
}
x.inherits(Xt, G, {
  __CANCEL__: !0
});
function Wi(e, t, n) {
  const u = n.config.validateStatus;
  !n.status || !u || u(n.status) ? e(n) : t(new G(
    "Request failed with status code " + n.status,
    [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function J0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Y0(e, t) {
  e = e || 10;
  const n = new Array(e), u = new Array(e);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const c = Date.now(), d = u[o];
    i || (i = c), n[r] = a, u[r] = c;
    let f = o, p = 0;
    for (; f !== r; )
      p += n[f++], f = f % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), c - i < t)
      return;
    const b = d && c - d;
    return b ? Math.round(p * 1e3 / b) : void 0;
  };
}
function X0(e, t) {
  let n = 0, u = 1e3 / t, r, o;
  const i = (c, d = Date.now()) => {
    n = d, r = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const d = Date.now(), f = d - n;
    f >= u ? i(c, d) : (r = c, o || (o = setTimeout(() => {
      o = null, i(r);
    }, u - f)));
  }, () => r && i(r)];
}
const eu = (e, t, n = 3) => {
  let u = 0;
  const r = Y0(50, 250);
  return X0((o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - u, c = r(a), d = i <= s;
    u = i;
    const f = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && s && d ? (s - i) / c : void 0,
      event: o,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, xo = (e, t) => {
  const n = e != null;
  return [(u) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: u
  }), t[1]];
}, vo = (e) => (...t) => x.asap(() => e(...t)), Q0 = Ae.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ae.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ae.origin),
  Ae.navigator && /(msie|trident)/i.test(Ae.navigator.userAgent)
) : () => !0, el = Ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, u, r, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      x.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), x.isString(u) && i.push("path=" + u), x.isString(r) && i.push("domain=" + r), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function tl(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function nl(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ki(e, t, n) {
  let u = !tl(t);
  return e && u || n == !1 ? nl(e, t) : t;
}
const Eo = (e) => e instanceof Re ? { ...e } : e;
function Rt(e, t) {
  t = t || {};
  const n = {};
  function u(c, d, f, p) {
    return x.isPlainObject(c) && x.isPlainObject(d) ? x.merge.call({ caseless: p }, c, d) : x.isPlainObject(d) ? x.merge({}, d) : x.isArray(d) ? d.slice() : d;
  }
  function r(c, d, f, p) {
    if (x.isUndefined(d)) {
      if (!x.isUndefined(c))
        return u(void 0, c, f, p);
    } else return u(c, d, f, p);
  }
  function o(c, d) {
    if (!x.isUndefined(d))
      return u(void 0, d);
  }
  function i(c, d) {
    if (x.isUndefined(d)) {
      if (!x.isUndefined(c))
        return u(void 0, c);
    } else return u(void 0, d);
  }
  function s(c, d, f) {
    if (f in t)
      return u(c, d);
    if (f in e)
      return u(void 0, c);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (c, d, f) => r(Eo(c), Eo(d), f, !0)
  };
  return x.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = a[d] || r, p = f(e[d], t[d], d);
    x.isUndefined(p) && f !== s || (n[d] = p);
  }), n;
}
const Vi = (e) => {
  const t = Rt({}, e);
  let { data: n, withXSRFToken: u, xsrfHeaderName: r, xsrfCookieName: o, headers: i, auth: s } = t;
  t.headers = i = Re.from(i), t.url = $i(Ki(t.baseURL, t.url), e.params, e.paramsSerializer), s && i.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let a;
  if (x.isFormData(n)) {
    if (Ae.hasStandardBrowserEnv || Ae.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((a = i.getContentType()) !== !1) {
      const [c, ...d] = a ? a.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...d].join("; "));
    }
  }
  if (Ae.hasStandardBrowserEnv && (u && x.isFunction(u) && (u = u(t)), u || u !== !1 && Q0(t.url))) {
    const c = r && o && el.read(o);
    c && i.set(r, c);
  }
  return t;
}, ul = typeof XMLHttpRequest < "u", rl = ul && function(e) {
  return new Promise(function(n, u) {
    const r = Vi(e);
    let o = r.data;
    const i = Re.from(r.headers).normalize();
    let { responseType: s, onUploadProgress: a, onDownloadProgress: c } = r, d, f, p, b, l;
    function g() {
      b && b(), l && l(), r.cancelToken && r.cancelToken.unsubscribe(d), r.signal && r.signal.removeEventListener("abort", d);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function w() {
      if (!m)
        return;
      const v = Re.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), k = {
        data: !s || s === "text" || s === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: v,
        config: e,
        request: m
      };
      Wi(function(R) {
        n(R), g();
      }, function(R) {
        u(R), g();
      }, k), m = null;
    }
    "onloadend" in m ? m.onloadend = w : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, m.onabort = function() {
      m && (u(new G("Request aborted", G.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      u(new G("Network Error", G.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let E = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const k = r.transitional || Hi;
      r.timeoutErrorMessage && (E = r.timeoutErrorMessage), u(new G(
        E,
        k.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && x.forEach(i.toJSON(), function(E, k) {
      m.setRequestHeader(k, E);
    }), x.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), s && s !== "json" && (m.responseType = r.responseType), c && ([p, l] = eu(c, !0), m.addEventListener("progress", p)), a && m.upload && ([f, b] = eu(a), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", b)), (r.cancelToken || r.signal) && (d = (v) => {
      m && (u(!v || v.type ? new Xt(null, e, m) : v), m.abort(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(d), r.signal && (r.signal.aborted ? d() : r.signal.addEventListener("abort", d)));
    const _ = J0(r.url);
    if (_ && Ae.protocols.indexOf(_) === -1) {
      u(new G("Unsupported protocol " + _ + ":", G.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(o || null);
  });
}, ol = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let u = new AbortController(), r;
    const o = function(c) {
      if (!r) {
        r = !0, s();
        const d = c instanceof Error ? c : this.reason;
        u.abort(d instanceof G ? d : new Xt(d instanceof Error ? d.message : d));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new G(`timeout ${t} of ms exceeded`, G.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: a } = u;
    return a.unsubscribe = () => x.asap(s), a;
  }
}, il = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let u = 0, r;
  for (; u < n; )
    r = u + t, yield e.slice(u, r), u = r;
}, sl = async function* (e, t) {
  for await (const n of al(e))
    yield* il(n, t);
}, al = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: u } = await t.read();
      if (n)
        break;
      yield u;
    }
  } finally {
    await t.cancel();
  }
}, ko = (e, t, n, u) => {
  const r = sl(e, t);
  let o = 0, i, s = (a) => {
    i || (i = !0, u && u(a));
  };
  return new ReadableStream({
    async pull(a) {
      try {
        const { done: c, value: d } = await r.next();
        if (c) {
          s(), a.close();
          return;
        }
        let f = d.byteLength;
        if (n) {
          let p = o += f;
          n(p);
        }
        a.enqueue(new Uint8Array(d));
      } catch (c) {
        throw s(c), c;
      }
    },
    cancel(a) {
      return s(a), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Eu = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ji = Eu && typeof ReadableStream == "function", cl = Eu && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Yi = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ll = Ji && Yi(() => {
  let e = !1;
  const t = new Request(Ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), yo = 64 * 1024, ar = Ji && Yi(() => x.isReadableStream(new Response("").body)), tu = {
  stream: ar && ((e) => e.body)
};
Eu && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !tu[t] && (tu[t] = x.isFunction(e[t]) ? (n) => n[t]() : (n, u) => {
      throw new G(`Response type '${t}' is not supported`, G.ERR_NOT_SUPPORT, u);
    });
  });
})(new Response());
const dl = async (e) => {
  if (e == null)
    return 0;
  if (x.isBlob(e))
    return e.size;
  if (x.isSpecCompliantForm(e))
    return (await new Request(Ae.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (x.isArrayBufferView(e) || x.isArrayBuffer(e))
    return e.byteLength;
  if (x.isURLSearchParams(e) && (e = e + ""), x.isString(e))
    return (await cl(e)).byteLength;
}, fl = async (e, t) => {
  const n = x.toFiniteNumber(e.getContentLength());
  return n ?? dl(t);
}, hl = Eu && (async (e) => {
  let {
    url: t,
    method: n,
    data: u,
    signal: r,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: s,
    onUploadProgress: a,
    responseType: c,
    headers: d,
    withCredentials: f = "same-origin",
    fetchOptions: p
  } = Vi(e);
  c = c ? (c + "").toLowerCase() : "text";
  let b = ol([r, o && o.toAbortSignal()], i), l;
  const g = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let m;
  try {
    if (a && ll && n !== "get" && n !== "head" && (m = await fl(d, u)) !== 0) {
      let k = new Request(t, {
        method: "POST",
        body: u,
        duplex: "half"
      }), A;
      if (x.isFormData(u) && (A = k.headers.get("content-type")) && d.setContentType(A), k.body) {
        const [R, N] = xo(
          m,
          eu(vo(a))
        );
        u = ko(k.body, yo, R, N);
      }
    }
    x.isString(f) || (f = f ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    l = new Request(t, {
      ...p,
      signal: b,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: u,
      duplex: "half",
      credentials: w ? f : void 0
    });
    let _ = await fetch(l);
    const v = ar && (c === "stream" || c === "response");
    if (ar && (s || v && g)) {
      const k = {};
      ["status", "statusText", "headers"].forEach((J) => {
        k[J] = _[J];
      });
      const A = x.toFiniteNumber(_.headers.get("content-length")), [R, N] = s && xo(
        A,
        eu(vo(s), !0)
      ) || [];
      _ = new Response(
        ko(_.body, yo, R, () => {
          N && N(), g && g();
        }),
        k
      );
    }
    c = c || "text";
    let E = await tu[x.findKey(tu, c) || "text"](_, e);
    return !v && g && g(), await new Promise((k, A) => {
      Wi(k, A, {
        data: E,
        headers: Re.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: e,
        request: l
      });
    });
  } catch (w) {
    throw g && g(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new G("Network Error", G.ERR_NETWORK, e, l),
      {
        cause: w.cause || w
      }
    ) : G.from(w, w && w.code, e, l);
  }
}), cr = {
  http: D0,
  xhr: rl,
  fetch: hl
};
x.forEach(cr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const wo = (e) => `- ${e}`, pl = (e) => x.isFunction(e) || e === null || e === !1, Xi = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, u;
    const r = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (u = n, !pl(n) && (u = cr[(i = String(n)).toLowerCase()], u === void 0))
        throw new G(`Unknown adapter '${i}'`);
      if (u)
        break;
      r[i || "#" + o] = u;
    }
    if (!u) {
      const o = Object.entries(r).map(
        ([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(wo).join(`
`) : " " + wo(o[0]) : "as no adapter specified";
      throw new G(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return u;
  },
  adapters: cr
};
function Uu(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Xt(null, e);
}
function Ao(e) {
  return Uu(e), e.headers = Re.from(e.headers), e.data = ju.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Xi.getAdapter(e.adapter || vn.adapter)(e).then(function(u) {
    return Uu(e), u.data = ju.call(
      e,
      e.transformResponse,
      u
    ), u.headers = Re.from(u.headers), u;
  }, function(u) {
    return Zi(u) || (Uu(e), u && u.response && (u.response.data = ju.call(
      e,
      e.transformResponse,
      u.response
    ), u.response.headers = Re.from(u.response.headers))), Promise.reject(u);
  });
}
const Qi = "1.8.1", ku = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ku[e] = function(u) {
    return typeof u === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Co = {};
ku.transitional = function(t, n, u) {
  function r(o, i) {
    return "[Axios v" + Qi + "] Transitional option '" + o + "'" + i + (u ? ". " + u : "");
  }
  return (o, i, s) => {
    if (t === !1)
      throw new G(
        r(i, " has been removed" + (n ? " in " + n : "")),
        G.ERR_DEPRECATED
      );
    return n && !Co[i] && (Co[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, s) : !0;
  };
};
ku.spelling = function(t) {
  return (n, u) => (console.warn(`${u} is likely a misspelling of ${t}`), !0);
};
function bl(e, t, n) {
  if (typeof e != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(e);
  let r = u.length;
  for (; r-- > 0; ) {
    const o = u[r], i = t[o];
    if (i) {
      const s = e[o], a = s === void 0 || i(s, o, e);
      if (a !== !0)
        throw new G("option " + o + " must be " + a, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new G("Unknown option " + o, G.ERR_BAD_OPTION);
  }
}
const $n = {
  assertOptions: bl,
  validators: ku
}, Je = $n.validators;
let Dt = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new mo(),
      response: new mo()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (u) {
      if (u instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          u.stack ? o && !String(u.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (u.stack += `
` + o) : u.stack = o;
        } catch {
        }
      }
      throw u;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Rt(this.defaults, n);
    const { transitional: u, paramsSerializer: r, headers: o } = n;
    u !== void 0 && $n.assertOptions(u, {
      silentJSONParsing: Je.transitional(Je.boolean),
      forcedJSONParsing: Je.transitional(Je.boolean),
      clarifyTimeoutError: Je.transitional(Je.boolean)
    }, !1), r != null && (x.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : $n.assertOptions(r, {
      encode: Je.function,
      serialize: Je.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), $n.assertOptions(n, {
      baseUrl: Je.spelling("baseURL"),
      withXsrfToken: Je.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && x.merge(
      o.common,
      o[n.method]
    );
    o && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (l) => {
        delete o[l];
      }
    ), n.headers = Re.concat(i, o);
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (a = a && g.synchronous, s.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let d, f = 0, p;
    if (!a) {
      const l = [Ao.bind(this), void 0];
      for (l.unshift.apply(l, s), l.push.apply(l, c), p = l.length, d = Promise.resolve(n); f < p; )
        d = d.then(l[f++], l[f++]);
      return d;
    }
    p = s.length;
    let b = n;
    for (f = 0; f < p; ) {
      const l = s[f++], g = s[f++];
      try {
        b = l(b);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      d = Ao.call(this, b);
    } catch (l) {
      return Promise.reject(l);
    }
    for (f = 0, p = c.length; f < p; )
      d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = Rt(this.defaults, t);
    const n = Ki(t.baseURL, t.url, t.allowAbsoluteUrls);
    return $i(n, t.params, t.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function(t) {
  Dt.prototype[t] = function(n, u) {
    return this.request(Rt(u || {}, {
      method: t,
      url: n,
      data: (u || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(t) {
  function n(u) {
    return function(o, i, s) {
      return this.request(Rt(s || {}, {
        method: t,
        headers: u ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Dt.prototype[t] = n(), Dt.prototype[t + "Form"] = n(!0);
});
let gl = class es {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const u = this;
    this.promise.then((r) => {
      if (!u._listeners) return;
      let o = u._listeners.length;
      for (; o-- > 0; )
        u._listeners[o](r);
      u._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const i = new Promise((s) => {
        u.subscribe(s), o = s;
      }).then(r);
      return i.cancel = function() {
        u.unsubscribe(o);
      }, i;
    }, t(function(o, i, s) {
      u.reason || (u.reason = new Xt(o, i, s), n(u.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (u) => {
      t.abort(u);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new es(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function ml(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function _l(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const lr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(lr).forEach(([e, t]) => {
  lr[t] = e;
});
function ts(e) {
  const t = new Dt(e), n = Oi(Dt.prototype.request, t);
  return x.extend(n, Dt.prototype, t, { allOwnKeys: !0 }), x.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return ts(Rt(e, r));
  }, n;
}
const he = ts(vn);
he.Axios = Dt;
he.CanceledError = Xt;
he.CancelToken = gl;
he.isCancel = Zi;
he.VERSION = Qi;
he.toFormData = vu;
he.AxiosError = G;
he.Cancel = he.CanceledError;
he.all = function(t) {
  return Promise.all(t);
};
he.spread = ml;
he.isAxiosError = _l;
he.mergeConfig = Rt;
he.AxiosHeaders = Re;
he.formToJSON = (e) => Gi(x.isHTMLForm(e) ? new FormData(e) : e);
he.getAdapter = Xi.getAdapter;
he.HttpStatusCode = lr;
he.default = he;
const {
  Axios: Fh,
  AxiosError: Oh,
  CanceledError: Nh,
  isCancel: Mh,
  CancelToken: Ih,
  VERSION: Lh,
  all: Bh,
  Cancel: Ph,
  isAxiosError: zh,
  spread: jh,
  toFormData: Uh,
  AxiosHeaders: qh,
  HttpStatusCode: $h,
  formToJSON: Hh,
  getAdapter: Gh,
  mergeConfig: Zh
} = he, xl = {
  // Only enable logging in development
  apiBaseUrl: "https://fluent-ai-backend.support-ai.workers.dev/fluent-documents"
}, qu = () => {
}, vl = {
  logRequest: qu,
  logResponse: qu,
  logError: qu
}, Qt = he.create({
  baseURL: xl.apiBaseUrl,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
});
Qt.interceptors.request.use(
  (e) => {
    var t;
    return vl.logRequest(
      ((t = e.method) == null ? void 0 : t.toUpperCase()) || "UNKNOWN",
      e.url || "",
      e.data,
      e.params
    ), e;
  },
  (e) => Promise.reject(e)
);
Qt.interceptors.response.use(
  (e) => e,
  (e) => Promise.reject(e)
);
const So = {};
function El(e) {
  let t = So[e];
  if (t)
    return t;
  t = So[e] = [];
  for (let n = 0; n < 128; n++) {
    const u = String.fromCharCode(n);
    t.push(u);
  }
  for (let n = 0; n < e.length; n++) {
    const u = e.charCodeAt(n);
    t[u] = "%" + ("0" + u.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function Ht(e, t) {
  typeof t != "string" && (t = Ht.defaultChars);
  const n = El(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(u) {
    let r = "";
    for (let o = 0, i = u.length; o < i; o += 3) {
      const s = parseInt(u.slice(o + 1, o + 3), 16);
      if (s < 128) {
        r += n[s];
        continue;
      }
      if ((s & 224) === 192 && o + 3 < i) {
        const a = parseInt(u.slice(o + 4, o + 6), 16);
        if ((a & 192) === 128) {
          const c = s << 6 & 1984 | a & 63;
          c < 128 ? r += "��" : r += String.fromCharCode(c), o += 3;
          continue;
        }
      }
      if ((s & 240) === 224 && o + 6 < i) {
        const a = parseInt(u.slice(o + 4, o + 6), 16), c = parseInt(u.slice(o + 7, o + 9), 16);
        if ((a & 192) === 128 && (c & 192) === 128) {
          const d = s << 12 & 61440 | a << 6 & 4032 | c & 63;
          d < 2048 || d >= 55296 && d <= 57343 ? r += "���" : r += String.fromCharCode(d), o += 6;
          continue;
        }
      }
      if ((s & 248) === 240 && o + 9 < i) {
        const a = parseInt(u.slice(o + 4, o + 6), 16), c = parseInt(u.slice(o + 7, o + 9), 16), d = parseInt(u.slice(o + 10, o + 12), 16);
        if ((a & 192) === 128 && (c & 192) === 128 && (d & 192) === 128) {
          let f = s << 18 & 1835008 | a << 12 & 258048 | c << 6 & 4032 | d & 63;
          f < 65536 || f > 1114111 ? r += "����" : (f -= 65536, r += String.fromCharCode(55296 + (f >> 10), 56320 + (f & 1023))), o += 9;
          continue;
        }
      }
      r += "�";
    }
    return r;
  });
}
Ht.defaultChars = ";/?:@&=+$,#";
Ht.componentChars = "";
const Do = {};
function kl(e) {
  let t = Do[e];
  if (t)
    return t;
  t = Do[e] = [];
  for (let n = 0; n < 128; n++) {
    const u = String.fromCharCode(n);
    /^[0-9a-z]$/i.test(u) ? t.push(u) : t.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  }
  for (let n = 0; n < e.length; n++)
    t[e.charCodeAt(n)] = e[n];
  return t;
}
function En(e, t, n) {
  typeof t != "string" && (n = t, t = En.defaultChars), typeof n > "u" && (n = !0);
  const u = kl(t);
  let r = "";
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e.charCodeAt(o);
    if (n && s === 37 && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) {
      r += e.slice(o, o + 3), o += 2;
      continue;
    }
    if (s < 128) {
      r += u[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && o + 1 < i) {
        const a = e.charCodeAt(o + 1);
        if (a >= 56320 && a <= 57343) {
          r += encodeURIComponent(e[o] + e[o + 1]), o++;
          continue;
        }
      }
      r += "%EF%BF%BD";
      continue;
    }
    r += encodeURIComponent(e[o]);
  }
  return r;
}
En.defaultChars = ";/?:@&=+$,-_.!~*'()#";
En.componentChars = "-_.!~*'()";
function Mr(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function nu() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const yl = /^([a-z0-9.+-]+:)/i, wl = /:[0-9]*$/, Al = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Cl = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Sl = ["{", "}", "|", "\\", "^", "`"].concat(Cl), Dl = ["'"].concat(Sl), To = ["%", "/", "?", ";", "#"].concat(Dl), Ro = ["/", "?", "#"], Tl = 255, Fo = /^[+a-z0-9A-Z_-]{0,63}$/, Rl = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Oo = {
  javascript: !0,
  "javascript:": !0
}, No = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function Ir(e, t) {
  if (e && e instanceof nu) return e;
  const n = new nu();
  return n.parse(e, t), n;
}
nu.prototype.parse = function(e, t) {
  let n, u, r, o = e;
  if (o = o.trim(), !t && e.split("#").length === 1) {
    const c = Al.exec(o);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let i = yl.exec(o);
  if (i && (i = i[0], n = i.toLowerCase(), this.protocol = i, o = o.substr(i.length)), (t || i || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = o.substr(0, 2) === "//", r && !(i && Oo[i]) && (o = o.substr(2), this.slashes = !0)), !Oo[i] && (r || i && !No[i])) {
    let c = -1;
    for (let l = 0; l < Ro.length; l++)
      u = o.indexOf(Ro[l]), u !== -1 && (c === -1 || u < c) && (c = u);
    let d, f;
    c === -1 ? f = o.lastIndexOf("@") : f = o.lastIndexOf("@", c), f !== -1 && (d = o.slice(0, f), o = o.slice(f + 1), this.auth = d), c = -1;
    for (let l = 0; l < To.length; l++)
      u = o.indexOf(To[l]), u !== -1 && (c === -1 || u < c) && (c = u);
    c === -1 && (c = o.length), o[c - 1] === ":" && c--;
    const p = o.slice(0, c);
    o = o.slice(c), this.parseHost(p), this.hostname = this.hostname || "";
    const b = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!b) {
      const l = this.hostname.split(/\./);
      for (let g = 0, m = l.length; g < m; g++) {
        const w = l[g];
        if (w && !w.match(Fo)) {
          let _ = "";
          for (let v = 0, E = w.length; v < E; v++)
            w.charCodeAt(v) > 127 ? _ += "x" : _ += w[v];
          if (!_.match(Fo)) {
            const v = l.slice(0, g), E = l.slice(g + 1), k = w.match(Rl);
            k && (v.push(k[1]), E.unshift(k[2])), E.length && (o = E.join(".") + o), this.hostname = v.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Tl && (this.hostname = ""), b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = o.indexOf("#");
  s !== -1 && (this.hash = o.substr(s), o = o.slice(0, s));
  const a = o.indexOf("?");
  return a !== -1 && (this.search = o.substr(a), o = o.slice(0, a)), o && (this.pathname = o), No[n] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
nu.prototype.parseHost = function(e) {
  let t = wl.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Ht,
  encode: En,
  format: Mr,
  parse: Ir
}, Symbol.toStringTag, { value: "Module" })), ns = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, us = /[\0-\x1F\x7F-\x9F]/, Ol = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Lr = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, rs = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, os = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: ns,
  Cc: us,
  Cf: Ol,
  P: Lr,
  S: rs,
  Z: os
}, Symbol.toStringTag, { value: "Module" })), Ml = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Il = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var $u;
const Ll = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Bl = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  ($u = String.fromCodePoint) !== null && $u !== void 0 ? $u : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Pl(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Ll.get(e)) !== null && t !== void 0 ? t : e;
}
var xe;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(xe || (xe = {}));
const zl = 32;
var gt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(gt || (gt = {}));
function dr(e) {
  return e >= xe.ZERO && e <= xe.NINE;
}
function jl(e) {
  return e >= xe.UPPER_A && e <= xe.UPPER_F || e >= xe.LOWER_A && e <= xe.LOWER_F;
}
function Ul(e) {
  return e >= xe.UPPER_A && e <= xe.UPPER_Z || e >= xe.LOWER_A && e <= xe.LOWER_Z || dr(e);
}
function ql(e) {
  return e === xe.EQUALS || Ul(e);
}
var _e;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(_e || (_e = {}));
var ht;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(ht || (ht = {}));
class $l {
  constructor(t, n, u) {
    this.decodeTree = t, this.emitCodePoint = n, this.errors = u, this.state = _e.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ht.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = _e.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, n) {
    switch (this.state) {
      case _e.EntityStart:
        return t.charCodeAt(n) === xe.NUM ? (this.state = _e.NumericStart, this.consumed += 1, this.stateNumericStart(t, n + 1)) : (this.state = _e.NamedEntity, this.stateNamedEntity(t, n));
      case _e.NumericStart:
        return this.stateNumericStart(t, n);
      case _e.NumericDecimal:
        return this.stateNumericDecimal(t, n);
      case _e.NumericHex:
        return this.stateNumericHex(t, n);
      case _e.NamedEntity:
        return this.stateNamedEntity(t, n);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, n) {
    return n >= t.length ? -1 : (t.charCodeAt(n) | zl) === xe.LOWER_X ? (this.state = _e.NumericHex, this.consumed += 1, this.stateNumericHex(t, n + 1)) : (this.state = _e.NumericDecimal, this.stateNumericDecimal(t, n));
  }
  addToNumericResult(t, n, u, r) {
    if (n !== u) {
      const o = u - n;
      this.result = this.result * Math.pow(r, o) + parseInt(t.substr(n, o), r), this.consumed += o;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, n) {
    const u = n;
    for (; n < t.length; ) {
      const r = t.charCodeAt(n);
      if (dr(r) || jl(r))
        n += 1;
      else
        return this.addToNumericResult(t, u, n, 16), this.emitNumericEntity(r, 3);
    }
    return this.addToNumericResult(t, u, n, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, n) {
    const u = n;
    for (; n < t.length; ) {
      const r = t.charCodeAt(n);
      if (dr(r))
        n += 1;
      else
        return this.addToNumericResult(t, u, n, 10), this.emitNumericEntity(r, 2);
    }
    return this.addToNumericResult(t, u, n, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, n) {
    var u;
    if (this.consumed <= n)
      return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === xe.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === ht.Strict)
      return 0;
    return this.emitCodePoint(Pl(this.result), this.consumed), this.errors && (t !== xe.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, n) {
    const { decodeTree: u } = this;
    let r = u[this.treeIndex], o = (r & gt.VALUE_LENGTH) >> 14;
    for (; n < t.length; n++, this.excess++) {
      const i = t.charCodeAt(n);
      if (this.treeIndex = Hl(u, r, this.treeIndex + Math.max(1, o), i), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === ht.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        ql(i)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = u[this.treeIndex], o = (r & gt.VALUE_LENGTH) >> 14, o !== 0) {
        if (i === xe.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== ht.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: n, decodeTree: u } = this, r = (u[n] & gt.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(n, r, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, n, u) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(n === 1 ? r[t] & ~gt.VALUE_LENGTH : r[t + 1], u), n === 3 && this.emitCodePoint(r[t + 2], u), u;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case _e.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== ht.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case _e.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case _e.NumericHex:
        return this.emitNumericEntity(0, 3);
      case _e.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case _e.EntityStart:
        return 0;
    }
  }
}
function is(e) {
  let t = "";
  const n = new $l(e, (u) => t += Bl(u));
  return function(r, o) {
    let i = 0, s = 0;
    for (; (s = r.indexOf("&", s)) >= 0; ) {
      t += r.slice(i, s), n.startEntity(o);
      const c = n.write(
        r,
        // Skip the "&"
        s + 1
      );
      if (c < 0) {
        i = s + n.end();
        break;
      }
      i = s + c, s = c === 0 ? i + 1 : i;
    }
    const a = t + r.slice(i);
    return t = "", a;
  };
}
function Hl(e, t, n, u) {
  const r = (t & gt.BRANCH_LENGTH) >> 7, o = t & gt.JUMP_TABLE;
  if (r === 0)
    return o !== 0 && u === o ? n : -1;
  if (o) {
    const a = u - o;
    return a < 0 || a >= r ? -1 : e[n + a] - 1;
  }
  let i = n, s = i + r - 1;
  for (; i <= s; ) {
    const a = i + s >>> 1, c = e[a];
    if (c < u)
      i = a + 1;
    else if (c > u)
      s = a - 1;
    else
      return e[a + r];
  }
  return -1;
}
const Gl = is(Ml);
is(Il);
function ss(e, t = ht.Legacy) {
  return Gl(e, t);
}
function Zl(e) {
  return Object.prototype.toString.call(e);
}
function Br(e) {
  return Zl(e) === "[object String]";
}
const Wl = Object.prototype.hasOwnProperty;
function Kl(e, t) {
  return Wl.call(e, t);
}
function yu(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    if (n) {
      if (typeof n != "object")
        throw new TypeError(n + "must be object");
      Object.keys(n).forEach(function(u) {
        e[u] = n[u];
      });
    }
  }), e;
}
function as(e, t, n) {
  return [].concat(e.slice(0, t), n, e.slice(t + 1));
}
function Pr(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function uu(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), n = 56320 + (e & 1023);
    return String.fromCharCode(t, n);
  }
  return String.fromCharCode(e);
}
const cs = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Vl = /&([a-z#][a-z0-9]{1,31});/gi, Jl = new RegExp(cs.source + "|" + Vl.source, "gi"), Yl = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Xl(e, t) {
  if (t.charCodeAt(0) === 35 && Yl.test(t)) {
    const u = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return Pr(u) ? uu(u) : e;
  }
  const n = ss(e);
  return n !== e ? n : e;
}
function Ql(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(cs, "$1");
}
function Gt(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(Jl, function(t, n, u) {
    return n || Xl(t, u);
  });
}
const ed = /[&<>"]/, td = /[&<>"]/g, nd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function ud(e) {
  return nd[e];
}
function Et(e) {
  return ed.test(e) ? e.replace(td, ud) : e;
}
const rd = /[.?*+^$[\]\\(){}|-]/g;
function od(e) {
  return e.replace(rd, "\\$&");
}
function se(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function dn(e) {
  if (e >= 8192 && e <= 8202)
    return !0;
  switch (e) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function fn(e) {
  return Lr.test(e) || rs.test(e);
}
function hn(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function wu(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const id = { mdurl: Fl, ucmicro: Nl }, sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: as,
  assign: yu,
  escapeHtml: Et,
  escapeRE: od,
  fromCodePoint: uu,
  has: Kl,
  isMdAsciiPunct: hn,
  isPunctChar: fn,
  isSpace: se,
  isString: Br,
  isValidEntityCode: Pr,
  isWhiteSpace: dn,
  lib: id,
  normalizeReference: wu,
  unescapeAll: Gt,
  unescapeMd: Ql
}, Symbol.toStringTag, { value: "Module" }));
function ad(e, t, n) {
  let u, r, o, i;
  const s = e.posMax, a = e.pos;
  for (e.pos = t + 1, u = 1; e.pos < s; ) {
    if (o = e.src.charCodeAt(e.pos), o === 93 && (u--, u === 0)) {
      r = !0;
      break;
    }
    if (i = e.pos, e.md.inline.skipToken(e), o === 91) {
      if (i === e.pos - 1)
        u++;
      else if (n)
        return e.pos = a, -1;
    }
  }
  let c = -1;
  return r && (c = e.pos), e.pos = a, c;
}
function cd(e, t, n) {
  let u, r = t;
  const o = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(r) === 60) {
    for (r++; r < n; ) {
      if (u = e.charCodeAt(r), u === 10 || u === 60)
        return o;
      if (u === 62)
        return o.pos = r + 1, o.str = Gt(e.slice(t + 1, r)), o.ok = !0, o;
      if (u === 92 && r + 1 < n) {
        r += 2;
        continue;
      }
      r++;
    }
    return o;
  }
  let i = 0;
  for (; r < n && (u = e.charCodeAt(r), !(u === 32 || u < 32 || u === 127)); ) {
    if (u === 92 && r + 1 < n) {
      if (e.charCodeAt(r + 1) === 32)
        break;
      r += 2;
      continue;
    }
    if (u === 40 && (i++, i > 32))
      return o;
    if (u === 41) {
      if (i === 0)
        break;
      i--;
    }
    r++;
  }
  return t === r || i !== 0 || (o.str = Gt(e.slice(t, r)), o.pos = r, o.ok = !0), o;
}
function ld(e, t, n, u) {
  let r, o = t;
  const i = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (u)
    i.str = u.str, i.marker = u.marker;
  else {
    if (o >= n)
      return i;
    let s = e.charCodeAt(o);
    if (s !== 34 && s !== 39 && s !== 40)
      return i;
    t++, o++, s === 40 && (s = 41), i.marker = s;
  }
  for (; o < n; ) {
    if (r = e.charCodeAt(o), r === i.marker)
      return i.pos = o + 1, i.str += Gt(e.slice(t, o)), i.ok = !0, i;
    if (r === 40 && i.marker === 41)
      return i;
    r === 92 && o + 1 < n && o++, o++;
  }
  return i.can_continue = !0, i.str += Gt(e.slice(t, o)), i;
}
const dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: cd,
  parseLinkLabel: ad,
  parseLinkTitle: ld
}, Symbol.toStringTag, { value: "Module" })), et = {};
et.code_inline = function(e, t, n, u, r) {
  const o = e[t];
  return "<code" + r.renderAttrs(o) + ">" + Et(o.content) + "</code>";
};
et.code_block = function(e, t, n, u, r) {
  const o = e[t];
  return "<pre" + r.renderAttrs(o) + "><code>" + Et(e[t].content) + `</code></pre>
`;
};
et.fence = function(e, t, n, u, r) {
  const o = e[t], i = o.info ? Gt(o.info).trim() : "";
  let s = "", a = "";
  if (i) {
    const d = i.split(/(\s+)/g);
    s = d[0], a = d.slice(2).join("");
  }
  let c;
  if (n.highlight ? c = n.highlight(o.content, s, a) || Et(o.content) : c = Et(o.content), c.indexOf("<pre") === 0)
    return c + `
`;
  if (i) {
    const d = o.attrIndex("class"), f = o.attrs ? o.attrs.slice() : [];
    d < 0 ? f.push(["class", n.langPrefix + s]) : (f[d] = f[d].slice(), f[d][1] += " " + n.langPrefix + s);
    const p = {
      attrs: f
    };
    return `<pre><code${r.renderAttrs(p)}>${c}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(o)}>${c}</code></pre>
`;
};
et.image = function(e, t, n, u, r) {
  const o = e[t];
  return o.attrs[o.attrIndex("alt")][1] = r.renderInlineAsText(o.children, n, u), r.renderToken(e, t, n);
};
et.hardbreak = function(e, t, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
et.softbreak = function(e, t, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
et.text = function(e, t) {
  return Et(e[t].content);
};
et.html_block = function(e, t) {
  return e[t].content;
};
et.html_inline = function(e, t) {
  return e[t].content;
};
function en() {
  this.rules = yu({}, et);
}
en.prototype.renderAttrs = function(t) {
  let n, u, r;
  if (!t.attrs)
    return "";
  for (r = "", n = 0, u = t.attrs.length; n < u; n++)
    r += " " + Et(t.attrs[n][0]) + '="' + Et(t.attrs[n][1]) + '"';
  return r;
};
en.prototype.renderToken = function(t, n, u) {
  const r = t[n];
  let o = "";
  if (r.hidden)
    return "";
  r.block && r.nesting !== -1 && n && t[n - 1].hidden && (o += `
`), o += (r.nesting === -1 ? "</" : "<") + r.tag, o += this.renderAttrs(r), r.nesting === 0 && u.xhtmlOut && (o += " /");
  let i = !1;
  if (r.block && (i = !0, r.nesting === 1 && n + 1 < t.length)) {
    const s = t[n + 1];
    (s.type === "inline" || s.hidden || s.nesting === -1 && s.tag === r.tag) && (i = !1);
  }
  return o += i ? `>
` : ">", o;
};
en.prototype.renderInline = function(e, t, n) {
  let u = "";
  const r = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    typeof r[s] < "u" ? u += r[s](e, o, t, n, this) : u += this.renderToken(e, o, t);
  }
  return u;
};
en.prototype.renderInlineAsText = function(e, t, n) {
  let u = "";
  for (let r = 0, o = e.length; r < o; r++)
    switch (e[r].type) {
      case "text":
        u += e[r].content;
        break;
      case "image":
        u += this.renderInlineAsText(e[r].children, t, n);
        break;
      case "html_inline":
      case "html_block":
        u += e[r].content;
        break;
      case "softbreak":
      case "hardbreak":
        u += `
`;
        break;
    }
  return u;
};
en.prototype.render = function(e, t, n) {
  let u = "";
  const r = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    s === "inline" ? u += this.renderInline(e[o].children, t, n) : typeof r[s] < "u" ? u += r[s](e, o, t, n, this) : u += this.renderToken(e, o, t, n);
  }
  return u;
};
function Fe() {
  this.__rules__ = [], this.__cache__ = null;
}
Fe.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Fe.prototype.__compile__ = function() {
  const e = this, t = [""];
  e.__rules__.forEach(function(n) {
    n.enabled && n.alt.forEach(function(u) {
      t.indexOf(u) < 0 && t.push(u);
    });
  }), e.__cache__ = {}, t.forEach(function(n) {
    e.__cache__[n] = [], e.__rules__.forEach(function(u) {
      u.enabled && (n && u.alt.indexOf(n) < 0 || e.__cache__[n].push(u.fn));
    });
  });
};
Fe.prototype.at = function(e, t, n) {
  const u = this.__find__(e), r = n || {};
  if (u === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[u].fn = t, this.__rules__[u].alt = r.alt || [], this.__cache__ = null;
};
Fe.prototype.before = function(e, t, n, u) {
  const r = this.__find__(e), o = u || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r, 0, {
    name: t,
    enabled: !0,
    fn: n,
    alt: o.alt || []
  }), this.__cache__ = null;
};
Fe.prototype.after = function(e, t, n, u) {
  const r = this.__find__(e), o = u || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r + 1, 0, {
    name: t,
    enabled: !0,
    fn: n,
    alt: o.alt || []
  }), this.__cache__ = null;
};
Fe.prototype.push = function(e, t, n) {
  const u = n || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: u.alt || []
  }), this.__cache__ = null;
};
Fe.prototype.enable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const n = [];
  return e.forEach(function(u) {
    const r = this.__find__(u);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + u);
    }
    this.__rules__[r].enabled = !0, n.push(u);
  }, this), this.__cache__ = null, n;
};
Fe.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(e, t);
};
Fe.prototype.disable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const n = [];
  return e.forEach(function(u) {
    const r = this.__find__(u);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + u);
    }
    this.__rules__[r].enabled = !1, n.push(u);
  }, this), this.__cache__ = null, n;
};
Fe.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function We(e, t, n) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
We.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const n = this.attrs;
  for (let u = 0, r = n.length; u < r; u++)
    if (n[u][0] === t)
      return u;
  return -1;
};
We.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
We.prototype.attrSet = function(t, n) {
  const u = this.attrIndex(t), r = [t, n];
  u < 0 ? this.attrPush(r) : this.attrs[u] = r;
};
We.prototype.attrGet = function(t) {
  const n = this.attrIndex(t);
  let u = null;
  return n >= 0 && (u = this.attrs[n][1]), u;
};
We.prototype.attrJoin = function(t, n) {
  const u = this.attrIndex(t);
  u < 0 ? this.attrPush([t, n]) : this.attrs[u][1] = this.attrs[u][1] + " " + n;
};
function ls(e, t, n) {
  this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t;
}
ls.prototype.Token = We;
const fd = /\r\n?|\n/g, hd = /\0/g;
function pd(e) {
  let t;
  t = e.src.replace(fd, `
`), t = t.replace(hd, "�"), e.src = t;
}
function bd(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function gd(e) {
  const t = e.tokens;
  for (let n = 0, u = t.length; n < u; n++) {
    const r = t[n];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function md(e) {
  return /^<a[>\s]/i.test(e);
}
function _d(e) {
  return /^<\/a\s*>/i.test(e);
}
function xd(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let n = 0, u = t.length; n < u; n++) {
      if (t[n].type !== "inline" || !e.md.linkify.pretest(t[n].content))
        continue;
      let r = t[n].children, o = 0;
      for (let i = r.length - 1; i >= 0; i--) {
        const s = r[i];
        if (s.type === "link_close") {
          for (i--; r[i].level !== s.level && r[i].type !== "link_open"; )
            i--;
          continue;
        }
        if (s.type === "html_inline" && (md(s.content) && o > 0 && o--, _d(s.content) && o++), !(o > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const a = s.content;
          let c = e.md.linkify.match(a);
          const d = [];
          let f = s.level, p = 0;
          c.length > 0 && c[0].index === 0 && i > 0 && r[i - 1].type === "text_special" && (c = c.slice(1));
          for (let b = 0; b < c.length; b++) {
            const l = c[b].url, g = e.md.normalizeLink(l);
            if (!e.md.validateLink(g))
              continue;
            let m = c[b].text;
            c[b].schema ? c[b].schema === "mailto:" && !/^mailto:/i.test(m) ? m = e.md.normalizeLinkText("mailto:" + m).replace(/^mailto:/, "") : m = e.md.normalizeLinkText(m) : m = e.md.normalizeLinkText("http://" + m).replace(/^http:\/\//, "");
            const w = c[b].index;
            if (w > p) {
              const k = new e.Token("text", "", 0);
              k.content = a.slice(p, w), k.level = f, d.push(k);
            }
            const _ = new e.Token("link_open", "a", 1);
            _.attrs = [["href", g]], _.level = f++, _.markup = "linkify", _.info = "auto", d.push(_);
            const v = new e.Token("text", "", 0);
            v.content = m, v.level = f, d.push(v);
            const E = new e.Token("link_close", "a", -1);
            E.level = --f, E.markup = "linkify", E.info = "auto", d.push(E), p = c[b].lastIndex;
          }
          if (p < a.length) {
            const b = new e.Token("text", "", 0);
            b.content = a.slice(p), b.level = f, d.push(b);
          }
          t[n].children = r = as(r, i, d);
        }
      }
    }
}
const ds = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, vd = /\((c|tm|r)\)/i, Ed = /\((c|tm|r)\)/ig, kd = {
  c: "©",
  r: "®",
  tm: "™"
};
function yd(e, t) {
  return kd[t.toLowerCase()];
}
function wd(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const u = e[n];
    u.type === "text" && !t && (u.content = u.content.replace(Ed, yd)), u.type === "link_open" && u.info === "auto" && t--, u.type === "link_close" && u.info === "auto" && t++;
  }
}
function Ad(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const u = e[n];
    u.type === "text" && !t && ds.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && t--, u.type === "link_close" && u.info === "auto" && t++;
  }
}
function Cd(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (vd.test(e.tokens[t].content) && wd(e.tokens[t].children), ds.test(e.tokens[t].content) && Ad(e.tokens[t].children));
}
const Sd = /['"]/, Mo = /['"]/g, Io = "’";
function In(e, t, n) {
  return e.slice(0, t) + n + e.slice(t + 1);
}
function Dd(e, t) {
  let n;
  const u = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r], i = e[r].level;
    for (n = u.length - 1; n >= 0 && !(u[n].level <= i); n--)
      ;
    if (u.length = n + 1, o.type !== "text")
      continue;
    let s = o.content, a = 0, c = s.length;
    e:
      for (; a < c; ) {
        Mo.lastIndex = a;
        const d = Mo.exec(s);
        if (!d)
          break;
        let f = !0, p = !0;
        a = d.index + 1;
        const b = d[0] === "'";
        let l = 32;
        if (d.index - 1 >= 0)
          l = s.charCodeAt(d.index - 1);
        else
          for (n = r - 1; n >= 0 && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n--)
            if (e[n].content) {
              l = e[n].content.charCodeAt(e[n].content.length - 1);
              break;
            }
        let g = 32;
        if (a < c)
          g = s.charCodeAt(a);
        else
          for (n = r + 1; n < e.length && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n++)
            if (e[n].content) {
              g = e[n].content.charCodeAt(0);
              break;
            }
        const m = hn(l) || fn(String.fromCharCode(l)), w = hn(g) || fn(String.fromCharCode(g)), _ = dn(l), v = dn(g);
        if (v ? f = !1 : w && (_ || m || (f = !1)), _ ? p = !1 : m && (v || w || (p = !1)), g === 34 && d[0] === '"' && l >= 48 && l <= 57 && (p = f = !1), f && p && (f = m, p = w), !f && !p) {
          b && (o.content = In(o.content, d.index, Io));
          continue;
        }
        if (p)
          for (n = u.length - 1; n >= 0; n--) {
            let E = u[n];
            if (u[n].level < i)
              break;
            if (E.single === b && u[n].level === i) {
              E = u[n];
              let k, A;
              b ? (k = t.md.options.quotes[2], A = t.md.options.quotes[3]) : (k = t.md.options.quotes[0], A = t.md.options.quotes[1]), o.content = In(o.content, d.index, A), e[E.token].content = In(
                e[E.token].content,
                E.pos,
                k
              ), a += A.length - 1, E.token === r && (a += k.length - 1), s = o.content, c = s.length, u.length = n;
              continue e;
            }
          }
        f ? u.push({
          token: r,
          pos: d.index,
          single: b,
          level: i
        }) : p && b && (o.content = In(o.content, d.index, Io));
      }
  }
}
function Td(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !Sd.test(e.tokens[t].content) || Dd(e.tokens[t].children, e);
}
function Rd(e) {
  let t, n;
  const u = e.tokens, r = u.length;
  for (let o = 0; o < r; o++) {
    if (u[o].type !== "inline") continue;
    const i = u[o].children, s = i.length;
    for (t = 0; t < s; t++)
      i[t].type === "text_special" && (i[t].type = "text");
    for (t = n = 0; t < s; t++)
      i[t].type === "text" && t + 1 < s && i[t + 1].type === "text" ? i[t + 1].content = i[t].content + i[t + 1].content : (t !== n && (i[n] = i[t]), n++);
    t !== n && (i.length = n);
  }
}
const Hu = [
  ["normalize", pd],
  ["block", bd],
  ["inline", gd],
  ["linkify", xd],
  ["replacements", Cd],
  ["smartquotes", Td],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Rd]
];
function zr() {
  this.ruler = new Fe();
  for (let e = 0; e < Hu.length; e++)
    this.ruler.push(Hu[e][0], Hu[e][1]);
}
zr.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let n = 0, u = t.length; n < u; n++)
    t[n](e);
};
zr.prototype.State = ls;
function tt(e, t, n, u) {
  this.src = e, this.md = t, this.env = n, this.tokens = u, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let o = 0, i = 0, s = 0, a = 0, c = r.length, d = !1; i < c; i++) {
    const f = r.charCodeAt(i);
    if (!d)
      if (se(f)) {
        s++, f === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        d = !0;
    (f === 10 || i === c - 1) && (f !== 10 && i++, this.bMarks.push(o), this.eMarks.push(i), this.tShift.push(s), this.sCount.push(a), this.bsCount.push(0), d = !1, s = 0, a = 0, o = i + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
tt.prototype.push = function(e, t, n) {
  const u = new We(e, t, n);
  return u.block = !0, n < 0 && this.level--, u.level = this.level, n > 0 && this.level++, this.tokens.push(u), u;
};
tt.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
tt.prototype.skipEmptyLines = function(t) {
  for (let n = this.lineMax; t < n && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
tt.prototype.skipSpaces = function(t) {
  for (let n = this.src.length; t < n; t++) {
    const u = this.src.charCodeAt(t);
    if (!se(u))
      break;
  }
  return t;
};
tt.prototype.skipSpacesBack = function(t, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (!se(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
tt.prototype.skipChars = function(t, n) {
  for (let u = this.src.length; t < u && this.src.charCodeAt(t) === n; t++)
    ;
  return t;
};
tt.prototype.skipCharsBack = function(t, n, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (n !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
tt.prototype.getLines = function(t, n, u, r) {
  if (t >= n)
    return "";
  const o = new Array(n - t);
  for (let i = 0, s = t; s < n; s++, i++) {
    let a = 0;
    const c = this.bMarks[s];
    let d = c, f;
    for (s + 1 < n || r ? f = this.eMarks[s] + 1 : f = this.eMarks[s]; d < f && a < u; ) {
      const p = this.src.charCodeAt(d);
      if (se(p))
        p === 9 ? a += 4 - (a + this.bsCount[s]) % 4 : a++;
      else if (d - c < this.tShift[s])
        a++;
      else
        break;
      d++;
    }
    a > u ? o[i] = new Array(a - u + 1).join(" ") + this.src.slice(d, f) : o[i] = this.src.slice(d, f);
  }
  return o.join("");
};
tt.prototype.Token = We;
const Fd = 65536;
function Gu(e, t) {
  const n = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  return e.src.slice(n, u);
}
function Lo(e) {
  const t = [], n = e.length;
  let u = 0, r = e.charCodeAt(u), o = !1, i = 0, s = "";
  for (; u < n; )
    r === 124 && (o ? (s += e.substring(i, u - 1), i = u) : (t.push(s + e.substring(i, u)), s = "", i = u + 1)), o = r === 92, u++, r = e.charCodeAt(u);
  return t.push(s + e.substring(i)), t;
}
function Od(e, t, n, u) {
  if (t + 2 > n)
    return !1;
  let r = t + 1;
  if (e.sCount[r] < e.blkIndent || e.sCount[r] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[r] + e.tShift[r];
  if (o >= e.eMarks[r])
    return !1;
  const i = e.src.charCodeAt(o++);
  if (i !== 124 && i !== 45 && i !== 58 || o >= e.eMarks[r])
    return !1;
  const s = e.src.charCodeAt(o++);
  if (s !== 124 && s !== 45 && s !== 58 && !se(s) || i === 45 && se(s))
    return !1;
  for (; o < e.eMarks[r]; ) {
    const E = e.src.charCodeAt(o);
    if (E !== 124 && E !== 45 && E !== 58 && !se(E))
      return !1;
    o++;
  }
  let a = Gu(e, t + 1), c = a.split("|");
  const d = [];
  for (let E = 0; E < c.length; E++) {
    const k = c[E].trim();
    if (!k) {
      if (E === 0 || E === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(k))
      return !1;
    k.charCodeAt(k.length - 1) === 58 ? d.push(k.charCodeAt(0) === 58 ? "center" : "right") : k.charCodeAt(0) === 58 ? d.push("left") : d.push("");
  }
  if (a = Gu(e, t).trim(), a.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = Lo(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const f = c.length;
  if (f === 0 || f !== d.length)
    return !1;
  if (u)
    return !0;
  const p = e.parentType;
  e.parentType = "table";
  const b = e.md.block.ruler.getRules("blockquote"), l = e.push("table_open", "table", 1), g = [t, 0];
  l.map = g;
  const m = e.push("thead_open", "thead", 1);
  m.map = [t, t + 1];
  const w = e.push("tr_open", "tr", 1);
  w.map = [t, t + 1];
  for (let E = 0; E < c.length; E++) {
    const k = e.push("th_open", "th", 1);
    d[E] && (k.attrs = [["style", "text-align:" + d[E]]]);
    const A = e.push("inline", "", 0);
    A.content = c[E].trim(), A.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let _, v = 0;
  for (r = t + 2; r < n && !(e.sCount[r] < e.blkIndent); r++) {
    let E = !1;
    for (let A = 0, R = b.length; A < R; A++)
      if (b[A](e, r, n, !0)) {
        E = !0;
        break;
      }
    if (E || (a = Gu(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (c = Lo(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), v += f - c.length, v > Fd))
      break;
    if (r === t + 2) {
      const A = e.push("tbody_open", "tbody", 1);
      A.map = _ = [t + 2, 0];
    }
    const k = e.push("tr_open", "tr", 1);
    k.map = [r, r + 1];
    for (let A = 0; A < f; A++) {
      const R = e.push("td_open", "td", 1);
      d[A] && (R.attrs = [["style", "text-align:" + d[A]]]);
      const N = e.push("inline", "", 0);
      N.content = c[A] ? c[A].trim() : "", N.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return _ && (e.push("tbody_close", "tbody", -1), _[1] = r), e.push("table_close", "table", -1), g[1] = r, e.parentType = p, e.line = r, !0;
}
function Nd(e, t, n) {
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  let u = t + 1, r = u;
  for (; u < n; ) {
    if (e.isEmpty(u)) {
      u++;
      continue;
    }
    if (e.sCount[u] - e.blkIndent >= 4) {
      u++, r = u;
      continue;
    }
    break;
  }
  e.line = r;
  const o = e.push("code_block", "code", 0);
  return o.content = e.getLines(t, r, 4 + e.blkIndent, !1) + `
`, o.map = [t, e.line], !0;
}
function Md(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || r + 3 > o)
    return !1;
  const i = e.src.charCodeAt(r);
  if (i !== 126 && i !== 96)
    return !1;
  let s = r;
  r = e.skipChars(r, i);
  let a = r - s;
  if (a < 3)
    return !1;
  const c = e.src.slice(s, r), d = e.src.slice(r, o);
  if (i === 96 && d.indexOf(String.fromCharCode(i)) >= 0)
    return !1;
  if (u)
    return !0;
  let f = t, p = !1;
  for (; f++, !(f >= n || (r = s = e.bMarks[f] + e.tShift[f], o = e.eMarks[f], r < o && e.sCount[f] < e.blkIndent)); )
    if (e.src.charCodeAt(r) === i && !(e.sCount[f] - e.blkIndent >= 4) && (r = e.skipChars(r, i), !(r - s < a) && (r = e.skipSpaces(r), !(r < o)))) {
      p = !0;
      break;
    }
  a = e.sCount[t], e.line = f + (p ? 1 : 0);
  const b = e.push("fence", "code", 0);
  return b.info = d, b.content = e.getLines(t + 1, f, a, !0), b.markup = c, b.map = [t, e.line], !0;
}
function Id(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  const i = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62)
    return !1;
  if (u)
    return !0;
  const s = [], a = [], c = [], d = [], f = e.md.block.ruler.getRules("blockquote"), p = e.parentType;
  e.parentType = "blockquote";
  let b = !1, l;
  for (l = t; l < n; l++) {
    const v = e.sCount[l] < e.blkIndent;
    if (r = e.bMarks[l] + e.tShift[l], o = e.eMarks[l], r >= o)
      break;
    if (e.src.charCodeAt(r++) === 62 && !v) {
      let k = e.sCount[l] + 1, A, R;
      e.src.charCodeAt(r) === 32 ? (r++, k++, R = !1, A = !0) : e.src.charCodeAt(r) === 9 ? (A = !0, (e.bsCount[l] + k) % 4 === 3 ? (r++, k++, R = !1) : R = !0) : A = !1;
      let N = k;
      for (s.push(e.bMarks[l]), e.bMarks[l] = r; r < o; ) {
        const J = e.src.charCodeAt(r);
        if (se(J))
          J === 9 ? N += 4 - (N + e.bsCount[l] + (R ? 1 : 0)) % 4 : N++;
        else
          break;
        r++;
      }
      b = r >= o, a.push(e.bsCount[l]), e.bsCount[l] = e.sCount[l] + 1 + (A ? 1 : 0), c.push(e.sCount[l]), e.sCount[l] = N - k, d.push(e.tShift[l]), e.tShift[l] = r - e.bMarks[l];
      continue;
    }
    if (b)
      break;
    let E = !1;
    for (let k = 0, A = f.length; k < A; k++)
      if (f[k](e, l, n, !0)) {
        E = !0;
        break;
      }
    if (E) {
      e.lineMax = l, e.blkIndent !== 0 && (s.push(e.bMarks[l]), a.push(e.bsCount[l]), d.push(e.tShift[l]), c.push(e.sCount[l]), e.sCount[l] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[l]), a.push(e.bsCount[l]), d.push(e.tShift[l]), c.push(e.sCount[l]), e.sCount[l] = -1;
  }
  const g = e.blkIndent;
  e.blkIndent = 0;
  const m = e.push("blockquote_open", "blockquote", 1);
  m.markup = ">";
  const w = [t, 0];
  m.map = w, e.md.block.tokenize(e, t, l);
  const _ = e.push("blockquote_close", "blockquote", -1);
  _.markup = ">", e.lineMax = i, e.parentType = p, w[1] = e.line;
  for (let v = 0; v < d.length; v++)
    e.bMarks[v + t] = s[v], e.tShift[v + t] = d[v], e.sCount[v + t] = c[v], e.bsCount[v + t] = a[v];
  return e.blkIndent = g, !0;
}
function Ld(e, t, n, u) {
  const r = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[t] + e.tShift[t];
  const i = e.src.charCodeAt(o++);
  if (i !== 42 && i !== 45 && i !== 95)
    return !1;
  let s = 1;
  for (; o < r; ) {
    const c = e.src.charCodeAt(o++);
    if (c !== i && !se(c))
      return !1;
    c === i && s++;
  }
  if (s < 3)
    return !1;
  if (u)
    return !0;
  e.line = t + 1;
  const a = e.push("hr", "hr", 0);
  return a.map = [t, e.line], a.markup = Array(s + 1).join(String.fromCharCode(i)), !0;
}
function Bo(e, t) {
  const n = e.eMarks[t];
  let u = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(u++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (u < n) {
    const o = e.src.charCodeAt(u);
    if (!se(o))
      return -1;
  }
  return u;
}
function Po(e, t) {
  const n = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  let r = n;
  if (r + 1 >= u)
    return -1;
  let o = e.src.charCodeAt(r++);
  if (o < 48 || o > 57)
    return -1;
  for (; ; ) {
    if (r >= u)
      return -1;
    if (o = e.src.charCodeAt(r++), o >= 48 && o <= 57) {
      if (r - n >= 10)
        return -1;
      continue;
    }
    if (o === 41 || o === 46)
      break;
    return -1;
  }
  return r < u && (o = e.src.charCodeAt(r), !se(o)) ? -1 : r;
}
function Bd(e, t) {
  const n = e.level + 2;
  for (let u = t + 2, r = e.tokens.length - 2; u < r; u++)
    e.tokens[u].level === n && e.tokens[u].type === "paragraph_open" && (e.tokens[u + 2].hidden = !0, e.tokens[u].hidden = !0, u += 2);
}
function Pd(e, t, n, u) {
  let r, o, i, s, a = t, c = !0;
  if (e.sCount[a] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[a] - e.listIndent >= 4 && e.sCount[a] < e.blkIndent)
    return !1;
  let d = !1;
  u && e.parentType === "paragraph" && e.sCount[a] >= e.blkIndent && (d = !0);
  let f, p, b;
  if ((b = Po(e, a)) >= 0) {
    if (f = !0, i = e.bMarks[a] + e.tShift[a], p = Number(e.src.slice(i, b - 1)), d && p !== 1) return !1;
  } else if ((b = Bo(e, a)) >= 0)
    f = !1;
  else
    return !1;
  if (d && e.skipSpaces(b) >= e.eMarks[a])
    return !1;
  if (u)
    return !0;
  const l = e.src.charCodeAt(b - 1), g = e.tokens.length;
  f ? (s = e.push("ordered_list_open", "ol", 1), p !== 1 && (s.attrs = [["start", p]])) : s = e.push("bullet_list_open", "ul", 1);
  const m = [a, 0];
  s.map = m, s.markup = String.fromCharCode(l);
  let w = !1;
  const _ = e.md.block.ruler.getRules("list"), v = e.parentType;
  for (e.parentType = "list"; a < n; ) {
    o = b, r = e.eMarks[a];
    const E = e.sCount[a] + b - (e.bMarks[a] + e.tShift[a]);
    let k = E;
    for (; o < r; ) {
      const z = e.src.charCodeAt(o);
      if (z === 9)
        k += 4 - (k + e.bsCount[a]) % 4;
      else if (z === 32)
        k++;
      else
        break;
      o++;
    }
    const A = o;
    let R;
    A >= r ? R = 1 : R = k - E, R > 4 && (R = 1);
    const N = E + R;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(l);
    const J = [a, 0];
    s.map = J, f && (s.info = e.src.slice(i, b - 1));
    const L = e.tight, P = e.tShift[a], Y = e.sCount[a], K = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = N, e.tight = !0, e.tShift[a] = A - e.bMarks[a], e.sCount[a] = k, A >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, a, n, !0), (!e.tight || w) && (c = !1), w = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = K, e.tShift[a] = P, e.sCount[a] = Y, e.tight = L, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(l), a = e.line, J[1] = a, a >= n || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let B = !1;
    for (let z = 0, W = _.length; z < W; z++)
      if (_[z](e, a, n, !0)) {
        B = !0;
        break;
      }
    if (B)
      break;
    if (f) {
      if (b = Po(e, a), b < 0)
        break;
      i = e.bMarks[a] + e.tShift[a];
    } else if (b = Bo(e, a), b < 0)
      break;
    if (l !== e.src.charCodeAt(b - 1))
      break;
  }
  return f ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(l), m[1] = a, e.line = a, e.parentType = v, c && Bd(e, g), !0;
}
function zd(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t], i = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(_) {
    const v = e.lineMax;
    if (_ >= v || e.isEmpty(_))
      return null;
    let E = !1;
    if (e.sCount[_] - e.blkIndent > 3 && (E = !0), e.sCount[_] < 0 && (E = !0), !E) {
      const R = e.md.block.ruler.getRules("reference"), N = e.parentType;
      e.parentType = "reference";
      let J = !1;
      for (let L = 0, P = R.length; L < P; L++)
        if (R[L](e, _, v, !0)) {
          J = !0;
          break;
        }
      if (e.parentType = N, J)
        return null;
    }
    const k = e.bMarks[_] + e.tShift[_], A = e.eMarks[_];
    return e.src.slice(k, A + 1);
  }
  let a = e.src.slice(r, o + 1);
  o = a.length;
  let c = -1;
  for (r = 1; r < o; r++) {
    const _ = a.charCodeAt(r);
    if (_ === 91)
      return !1;
    if (_ === 93) {
      c = r;
      break;
    } else if (_ === 10) {
      const v = s(i);
      v !== null && (a += v, o = a.length, i++);
    } else if (_ === 92 && (r++, r < o && a.charCodeAt(r) === 10)) {
      const v = s(i);
      v !== null && (a += v, o = a.length, i++);
    }
  }
  if (c < 0 || a.charCodeAt(c + 1) !== 58)
    return !1;
  for (r = c + 2; r < o; r++) {
    const _ = a.charCodeAt(r);
    if (_ === 10) {
      const v = s(i);
      v !== null && (a += v, o = a.length, i++);
    } else if (!se(_)) break;
  }
  const d = e.md.helpers.parseLinkDestination(a, r, o);
  if (!d.ok)
    return !1;
  const f = e.md.normalizeLink(d.str);
  if (!e.md.validateLink(f))
    return !1;
  r = d.pos;
  const p = r, b = i, l = r;
  for (; r < o; r++) {
    const _ = a.charCodeAt(r);
    if (_ === 10) {
      const v = s(i);
      v !== null && (a += v, o = a.length, i++);
    } else if (!se(_)) break;
  }
  let g = e.md.helpers.parseLinkTitle(a, r, o);
  for (; g.can_continue; ) {
    const _ = s(i);
    if (_ === null) break;
    a += _, r = o, o = a.length, i++, g = e.md.helpers.parseLinkTitle(a, r, o, g);
  }
  let m;
  for (r < o && l !== r && g.ok ? (m = g.str, r = g.pos) : (m = "", r = p, i = b); r < o; ) {
    const _ = a.charCodeAt(r);
    if (!se(_))
      break;
    r++;
  }
  if (r < o && a.charCodeAt(r) !== 10 && m)
    for (m = "", r = p, i = b; r < o; ) {
      const _ = a.charCodeAt(r);
      if (!se(_))
        break;
      r++;
    }
  if (r < o && a.charCodeAt(r) !== 10)
    return !1;
  const w = wu(a.slice(1, c));
  return w ? (u || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[w] > "u" && (e.env.references[w] = { title: m, href: f }), e.line = i), !0) : !1;
}
const jd = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Ud = "[a-zA-Z_:][a-zA-Z0-9:._-]*", qd = "[^\"'=<>`\\x00-\\x20]+", $d = "'[^']*'", Hd = '"[^"]*"', Gd = "(?:" + qd + "|" + $d + "|" + Hd + ")", Zd = "(?:\\s+" + Ud + "(?:\\s*=\\s*" + Gd + ")?)", fs = "<[A-Za-z][A-Za-z0-9\\-]*" + Zd + "*\\s*\\/?>", hs = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Wd = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", Kd = "<[?][\\s\\S]*?[?]>", Vd = "<![A-Za-z][^>]*>", Jd = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Yd = new RegExp("^(?:" + fs + "|" + hs + "|" + Wd + "|" + Kd + "|" + Vd + "|" + Jd + ")"), Xd = new RegExp("^(?:" + fs + "|" + hs + ")"), Bt = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + jd.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Xd.source + "\\s*$"), /^$/, !1]
];
function Qd(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let i = e.src.slice(r, o), s = 0;
  for (; s < Bt.length && !Bt[s][0].test(i); s++)
    ;
  if (s === Bt.length)
    return !1;
  if (u)
    return Bt[s][2];
  let a = t + 1;
  if (!Bt[s][1].test(i)) {
    for (; a < n && !(e.sCount[a] < e.blkIndent); a++)
      if (r = e.bMarks[a] + e.tShift[a], o = e.eMarks[a], i = e.src.slice(r, o), Bt[s][1].test(i)) {
        i.length !== 0 && a++;
        break;
      }
  }
  e.line = a;
  const c = e.push("html_block", "", 0);
  return c.map = [t, a], c.content = e.getLines(t, a, e.blkIndent, !0), !0;
}
function ef(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let i = e.src.charCodeAt(r);
  if (i !== 35 || r >= o)
    return !1;
  let s = 1;
  for (i = e.src.charCodeAt(++r); i === 35 && r < o && s <= 6; )
    s++, i = e.src.charCodeAt(++r);
  if (s > 6 || r < o && !se(i))
    return !1;
  if (u)
    return !0;
  o = e.skipSpacesBack(o, r);
  const a = e.skipCharsBack(o, 35, r);
  a > r && se(e.src.charCodeAt(a - 1)) && (o = a), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(s), 1);
  c.markup = "########".slice(0, s), c.map = [t, e.line];
  const d = e.push("inline", "", 0);
  d.content = e.src.slice(r, o).trim(), d.map = [t, e.line], d.children = [];
  const f = e.push("heading_close", "h" + String(s), -1);
  return f.markup = "########".slice(0, s), !0;
}
function tf(e, t, n) {
  const u = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const r = e.parentType;
  e.parentType = "paragraph";
  let o = 0, i, s = t + 1;
  for (; s < n && !e.isEmpty(s); s++) {
    if (e.sCount[s] - e.blkIndent > 3)
      continue;
    if (e.sCount[s] >= e.blkIndent) {
      let b = e.bMarks[s] + e.tShift[s];
      const l = e.eMarks[s];
      if (b < l && (i = e.src.charCodeAt(b), (i === 45 || i === 61) && (b = e.skipChars(b, i), b = e.skipSpaces(b), b >= l))) {
        o = i === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[s] < 0)
      continue;
    let p = !1;
    for (let b = 0, l = u.length; b < l; b++)
      if (u[b](e, s, n, !0)) {
        p = !0;
        break;
      }
    if (p)
      break;
  }
  if (!o)
    return !1;
  const a = e.getLines(t, s, e.blkIndent, !1).trim();
  e.line = s + 1;
  const c = e.push("heading_open", "h" + String(o), 1);
  c.markup = String.fromCharCode(i), c.map = [t, e.line];
  const d = e.push("inline", "", 0);
  d.content = a, d.map = [t, e.line - 1], d.children = [];
  const f = e.push("heading_close", "h" + String(o), -1);
  return f.markup = String.fromCharCode(i), e.parentType = r, !0;
}
function nf(e, t, n) {
  const u = e.md.block.ruler.getRules("paragraph"), r = e.parentType;
  let o = t + 1;
  for (e.parentType = "paragraph"; o < n && !e.isEmpty(o); o++) {
    if (e.sCount[o] - e.blkIndent > 3 || e.sCount[o] < 0)
      continue;
    let c = !1;
    for (let d = 0, f = u.length; d < f; d++)
      if (u[d](e, o, n, !0)) {
        c = !0;
        break;
      }
    if (c)
      break;
  }
  const i = e.getLines(t, o, e.blkIndent, !1).trim();
  e.line = o;
  const s = e.push("paragraph_open", "p", 1);
  s.map = [t, e.line];
  const a = e.push("inline", "", 0);
  return a.content = i, a.map = [t, e.line], a.children = [], e.push("paragraph_close", "p", -1), e.parentType = r, !0;
}
const Ln = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Od, ["paragraph", "reference"]],
  ["code", Nd],
  ["fence", Md, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Id, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Ld, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Pd, ["paragraph", "reference", "blockquote"]],
  ["reference", zd],
  ["html_block", Qd, ["paragraph", "reference", "blockquote"]],
  ["heading", ef, ["paragraph", "reference", "blockquote"]],
  ["lheading", tf],
  ["paragraph", nf]
];
function Au() {
  this.ruler = new Fe();
  for (let e = 0; e < Ln.length; e++)
    this.ruler.push(Ln[e][0], Ln[e][1], { alt: (Ln[e][2] || []).slice() });
}
Au.prototype.tokenize = function(e, t, n) {
  const u = this.ruler.getRules(""), r = u.length, o = e.md.options.maxNesting;
  let i = t, s = !1;
  for (; i < n && (e.line = i = e.skipEmptyLines(i), !(i >= n || e.sCount[i] < e.blkIndent)); ) {
    if (e.level >= o) {
      e.line = n;
      break;
    }
    const a = e.line;
    let c = !1;
    for (let d = 0; d < r; d++)
      if (c = u[d](e, i, n, !1), c) {
        if (a >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!c) throw new Error("none of the block rules matched");
    e.tight = !s, e.isEmpty(e.line - 1) && (s = !0), i = e.line, i < n && e.isEmpty(i) && (s = !0, i++, e.line = i);
  }
};
Au.prototype.parse = function(e, t, n, u) {
  if (!e)
    return;
  const r = new this.State(e, t, n, u);
  this.tokenize(r, r.line, r.lineMax);
};
Au.prototype.State = tt;
function kn(e, t, n, u) {
  this.src = e, this.env = n, this.md = t, this.tokens = u, this.tokens_meta = Array(u.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
kn.prototype.pushPending = function() {
  const e = new We("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
kn.prototype.push = function(e, t, n) {
  this.pending && this.pushPending();
  const u = new We(e, t, n);
  let r = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), u.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(u), this.tokens_meta.push(r), u;
};
kn.prototype.scanDelims = function(e, t) {
  const n = this.posMax, u = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let o = e;
  for (; o < n && this.src.charCodeAt(o) === u; )
    o++;
  const i = o - e, s = o < n ? this.src.charCodeAt(o) : 32, a = hn(r) || fn(String.fromCharCode(r)), c = hn(s) || fn(String.fromCharCode(s)), d = dn(r), f = dn(s), p = !f && (!c || d || a), b = !d && (!a || f || c);
  return { can_open: p && (t || !b || a), can_close: b && (t || !p || c), length: i };
};
kn.prototype.Token = We;
function uf(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function rf(e, t) {
  let n = e.pos;
  for (; n < e.posMax && !uf(e.src.charCodeAt(n)); )
    n++;
  return n === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0);
}
const of = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function sf(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const n = e.pos, u = e.posMax;
  if (n + 3 > u || e.src.charCodeAt(n) !== 58 || e.src.charCodeAt(n + 1) !== 47 || e.src.charCodeAt(n + 2) !== 47) return !1;
  const r = e.pending.match(of);
  if (!r) return !1;
  const o = r[1], i = e.md.linkify.matchAtStart(e.src.slice(n - o.length));
  if (!i) return !1;
  let s = i.url;
  if (s.length <= o.length) return !1;
  s = s.replace(/\*+$/, "");
  const a = e.md.normalizeLink(s);
  if (!e.md.validateLink(a)) return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -o.length);
    const c = e.push("link_open", "a", 1);
    c.attrs = [["href", a]], c.markup = "linkify", c.info = "auto";
    const d = e.push("text", "", 0);
    d.content = e.md.normalizeLinkText(s);
    const f = e.push("link_close", "a", -1);
    f.markup = "linkify", f.info = "auto";
  }
  return e.pos += s.length - o.length, !0;
}
function af(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 10)
    return !1;
  const u = e.pending.length - 1, r = e.posMax;
  if (!t)
    if (u >= 0 && e.pending.charCodeAt(u) === 32)
      if (u >= 1 && e.pending.charCodeAt(u - 1) === 32) {
        let o = u - 1;
        for (; o >= 1 && e.pending.charCodeAt(o - 1) === 32; ) o--;
        e.pending = e.pending.slice(0, o), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (n++; n < r && se(e.src.charCodeAt(n)); )
    n++;
  return e.pos = n, !0;
}
const jr = [];
for (let e = 0; e < 256; e++)
  jr.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  jr[e.charCodeAt(0)] = 1;
});
function cf(e, t) {
  let n = e.pos;
  const u = e.posMax;
  if (e.src.charCodeAt(n) !== 92 || (n++, n >= u)) return !1;
  let r = e.src.charCodeAt(n);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), n++; n < u && (r = e.src.charCodeAt(n), !!se(r)); )
      n++;
    return e.pos = n, !0;
  }
  let o = e.src[n];
  if (r >= 55296 && r <= 56319 && n + 1 < u) {
    const s = e.src.charCodeAt(n + 1);
    s >= 56320 && s <= 57343 && (o += e.src[n + 1], n++);
  }
  const i = "\\" + o;
  if (!t) {
    const s = e.push("text_special", "", 0);
    r < 256 && jr[r] !== 0 ? s.content = o : s.content = i, s.markup = i, s.info = "escape";
  }
  return e.pos = n + 1, !0;
}
function lf(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 96)
    return !1;
  const r = n;
  n++;
  const o = e.posMax;
  for (; n < o && e.src.charCodeAt(n) === 96; )
    n++;
  const i = e.src.slice(r, n), s = i.length;
  if (e.backticksScanned && (e.backticks[s] || 0) <= r)
    return t || (e.pending += i), e.pos += s, !0;
  let a = n, c;
  for (; (c = e.src.indexOf("`", a)) !== -1; ) {
    for (a = c + 1; a < o && e.src.charCodeAt(a) === 96; )
      a++;
    const d = a - c;
    if (d === s) {
      if (!t) {
        const f = e.push("code_inline", "code", 0);
        f.markup = i, f.content = e.src.slice(n, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = a, !0;
    }
    e.backticks[d] = c;
  }
  return e.backticksScanned = !0, t || (e.pending += i), e.pos += s, !0;
}
function df(e, t) {
  const n = e.pos, u = e.src.charCodeAt(n);
  if (t || u !== 126)
    return !1;
  const r = e.scanDelims(e.pos, !0);
  let o = r.length;
  const i = String.fromCharCode(u);
  if (o < 2)
    return !1;
  let s;
  o % 2 && (s = e.push("text", "", 0), s.content = i, o--);
  for (let a = 0; a < o; a += 2)
    s = e.push("text", "", 0), s.content = i + i, e.delimiters.push({
      marker: u,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
}
function zo(e, t) {
  let n;
  const u = [], r = t.length;
  for (let o = 0; o < r; o++) {
    const i = t[o];
    if (i.marker !== 126 || i.end === -1)
      continue;
    const s = t[i.end];
    n = e.tokens[i.token], n.type = "s_open", n.tag = "s", n.nesting = 1, n.markup = "~~", n.content = "", n = e.tokens[s.token], n.type = "s_close", n.tag = "s", n.nesting = -1, n.markup = "~~", n.content = "", e.tokens[s.token - 1].type === "text" && e.tokens[s.token - 1].content === "~" && u.push(s.token - 1);
  }
  for (; u.length; ) {
    const o = u.pop();
    let i = o + 1;
    for (; i < e.tokens.length && e.tokens[i].type === "s_close"; )
      i++;
    i--, o !== i && (n = e.tokens[i], e.tokens[i] = e.tokens[o], e.tokens[o] = n);
  }
}
function ff(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  zo(e, e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && zo(e, t[u].delimiters);
}
const ps = {
  tokenize: df,
  postProcess: ff
};
function hf(e, t) {
  const n = e.pos, u = e.src.charCodeAt(n);
  if (t || u !== 95 && u !== 42)
    return !1;
  const r = e.scanDelims(e.pos, u === 42);
  for (let o = 0; o < r.length; o++) {
    const i = e.push("text", "", 0);
    i.content = String.fromCharCode(u), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: u,
      // Total length of these series of delimiters.
      //
      length: r.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: r.can_open,
      close: r.can_close
    });
  }
  return e.pos += r.length, !0;
}
function jo(e, t) {
  const n = t.length;
  for (let u = n - 1; u >= 0; u--) {
    const r = t[u];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1)
      continue;
    const o = t[r.end], i = u > 0 && t[u - 1].end === r.end + 1 && // check that first two markers match and adjacent
    t[u - 1].marker === r.marker && t[u - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[r.end + 1].token === o.token + 1, s = String.fromCharCode(r.marker), a = e.tokens[r.token];
    a.type = i ? "strong_open" : "em_open", a.tag = i ? "strong" : "em", a.nesting = 1, a.markup = i ? s + s : s, a.content = "";
    const c = e.tokens[o.token];
    c.type = i ? "strong_close" : "em_close", c.tag = i ? "strong" : "em", c.nesting = -1, c.markup = i ? s + s : s, c.content = "", i && (e.tokens[t[u - 1].token].content = "", e.tokens[t[r.end + 1].token].content = "", u--);
  }
}
function pf(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  jo(e, e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && jo(e, t[u].delimiters);
}
const bs = {
  tokenize: hf,
  postProcess: pf
};
function bf(e, t) {
  let n, u, r, o, i = "", s = "", a = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const d = e.pos, f = e.posMax, p = e.pos + 1, b = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (b < 0)
    return !1;
  let l = b + 1;
  if (l < f && e.src.charCodeAt(l) === 40) {
    for (c = !1, l++; l < f && (n = e.src.charCodeAt(l), !(!se(n) && n !== 10)); l++)
      ;
    if (l >= f)
      return !1;
    if (a = l, r = e.md.helpers.parseLinkDestination(e.src, l, e.posMax), r.ok) {
      for (i = e.md.normalizeLink(r.str), e.md.validateLink(i) ? l = r.pos : i = "", a = l; l < f && (n = e.src.charCodeAt(l), !(!se(n) && n !== 10)); l++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, l, e.posMax), l < f && a !== l && r.ok)
        for (s = r.str, l = r.pos; l < f && (n = e.src.charCodeAt(l), !(!se(n) && n !== 10)); l++)
          ;
    }
    (l >= f || e.src.charCodeAt(l) !== 41) && (c = !0), l++;
  }
  if (c) {
    if (typeof e.env.references > "u")
      return !1;
    if (l < f && e.src.charCodeAt(l) === 91 ? (a = l + 1, l = e.md.helpers.parseLinkLabel(e, l), l >= 0 ? u = e.src.slice(a, l++) : l = b + 1) : l = b + 1, u || (u = e.src.slice(p, b)), o = e.env.references[wu(u)], !o)
      return e.pos = d, !1;
    i = o.href, s = o.title;
  }
  if (!t) {
    e.pos = p, e.posMax = b;
    const g = e.push("link_open", "a", 1), m = [["href", i]];
    g.attrs = m, s && m.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = l, e.posMax = f, !0;
}
function gf(e, t) {
  let n, u, r, o, i, s, a, c, d = "";
  const f = e.pos, p = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const b = e.pos + 2, l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (l < 0)
    return !1;
  if (o = l + 1, o < p && e.src.charCodeAt(o) === 40) {
    for (o++; o < p && (n = e.src.charCodeAt(o), !(!se(n) && n !== 10)); o++)
      ;
    if (o >= p)
      return !1;
    for (c = o, s = e.md.helpers.parseLinkDestination(e.src, o, e.posMax), s.ok && (d = e.md.normalizeLink(s.str), e.md.validateLink(d) ? o = s.pos : d = ""), c = o; o < p && (n = e.src.charCodeAt(o), !(!se(n) && n !== 10)); o++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, o, e.posMax), o < p && c !== o && s.ok)
      for (a = s.str, o = s.pos; o < p && (n = e.src.charCodeAt(o), !(!se(n) && n !== 10)); o++)
        ;
    else
      a = "";
    if (o >= p || e.src.charCodeAt(o) !== 41)
      return e.pos = f, !1;
    o++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (o < p && e.src.charCodeAt(o) === 91 ? (c = o + 1, o = e.md.helpers.parseLinkLabel(e, o), o >= 0 ? r = e.src.slice(c, o++) : o = l + 1) : o = l + 1, r || (r = e.src.slice(b, l)), i = e.env.references[wu(r)], !i)
      return e.pos = f, !1;
    d = i.href, a = i.title;
  }
  if (!t) {
    u = e.src.slice(b, l);
    const g = [];
    e.md.inline.parse(
      u,
      e.md,
      e.env,
      g
    );
    const m = e.push("image", "img", 0), w = [["src", d], ["alt", ""]];
    m.attrs = w, m.children = g, m.content = u, a && w.push(["title", a]);
  }
  return e.pos = o, e.posMax = p, !0;
}
const mf = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, _f = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function xf(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 60)
    return !1;
  const u = e.pos, r = e.posMax;
  for (; ; ) {
    if (++n >= r) return !1;
    const i = e.src.charCodeAt(n);
    if (i === 60) return !1;
    if (i === 62) break;
  }
  const o = e.src.slice(u + 1, n);
  if (_f.test(o)) {
    const i = e.md.normalizeLink(o);
    if (!e.md.validateLink(i))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto";
      const a = e.push("text", "", 0);
      a.content = e.md.normalizeLinkText(o);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  if (mf.test(o)) {
    const i = e.md.normalizeLink("mailto:" + o);
    if (!e.md.validateLink(i))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto";
      const a = e.push("text", "", 0);
      a.content = e.md.normalizeLinkText(o);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  return !1;
}
function vf(e) {
  return /^<a[>\s]/i.test(e);
}
function Ef(e) {
  return /^<\/a\s*>/i.test(e);
}
function kf(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function yf(e, t) {
  if (!e.md.options.html)
    return !1;
  const n = e.posMax, u = e.pos;
  if (e.src.charCodeAt(u) !== 60 || u + 2 >= n)
    return !1;
  const r = e.src.charCodeAt(u + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !kf(r))
    return !1;
  const o = e.src.slice(u).match(Yd);
  if (!o)
    return !1;
  if (!t) {
    const i = e.push("html_inline", "", 0);
    i.content = o[0], vf(i.content) && e.linkLevel++, Ef(i.content) && e.linkLevel--;
  }
  return e.pos += o[0].length, !0;
}
const wf = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, Af = /^&([a-z][a-z0-9]{1,31});/i;
function Cf(e, t) {
  const n = e.pos, u = e.posMax;
  if (e.src.charCodeAt(n) !== 38 || n + 1 >= u) return !1;
  if (e.src.charCodeAt(n + 1) === 35) {
    const o = e.src.slice(n).match(wf);
    if (o) {
      if (!t) {
        const i = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), s = e.push("text_special", "", 0);
        s.content = Pr(i) ? uu(i) : uu(65533), s.markup = o[0], s.info = "entity";
      }
      return e.pos += o[0].length, !0;
    }
  } else {
    const o = e.src.slice(n).match(Af);
    if (o) {
      const i = ss(o[0]);
      if (i !== o[0]) {
        if (!t) {
          const s = e.push("text_special", "", 0);
          s.content = i, s.markup = o[0], s.info = "entity";
        }
        return e.pos += o[0].length, !0;
      }
    }
  }
  return !1;
}
function Uo(e) {
  const t = {}, n = e.length;
  if (!n) return;
  let u = 0, r = -2;
  const o = [];
  for (let i = 0; i < n; i++) {
    const s = e[i];
    if (o.push(0), (e[u].marker !== s.marker || r !== s.token - 1) && (u = i), r = s.token, s.length = s.length || 0, !s.close) continue;
    t.hasOwnProperty(s.marker) || (t[s.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = t[s.marker][(s.open ? 3 : 0) + s.length % 3];
    let c = u - o[u] - 1, d = c;
    for (; c > a; c -= o[c] + 1) {
      const f = e[c];
      if (f.marker === s.marker && f.open && f.end < 0) {
        let p = !1;
        if ((f.close || s.open) && (f.length + s.length) % 3 === 0 && (f.length % 3 !== 0 || s.length % 3 !== 0) && (p = !0), !p) {
          const b = c > 0 && !e[c - 1].open ? o[c - 1] + 1 : 0;
          o[i] = i - c + b, o[c] = b, s.open = !1, f.end = i, f.close = !1, d = -1, r = -2;
          break;
        }
      }
    }
    d !== -1 && (t[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = d);
  }
}
function Sf(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  Uo(e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && Uo(t[u].delimiters);
}
function Df(e) {
  let t, n, u = 0;
  const r = e.tokens, o = e.tokens.length;
  for (t = n = 0; t < o; t++)
    r[t].nesting < 0 && u--, r[t].level = u, r[t].nesting > 0 && u++, r[t].type === "text" && t + 1 < o && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== n && (r[n] = r[t]), n++);
  t !== n && (r.length = n);
}
const Zu = [
  ["text", rf],
  ["linkify", sf],
  ["newline", af],
  ["escape", cf],
  ["backticks", lf],
  ["strikethrough", ps.tokenize],
  ["emphasis", bs.tokenize],
  ["link", bf],
  ["image", gf],
  ["autolink", xf],
  ["html_inline", yf],
  ["entity", Cf]
], Wu = [
  ["balance_pairs", Sf],
  ["strikethrough", ps.postProcess],
  ["emphasis", bs.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", Df]
];
function yn() {
  this.ruler = new Fe();
  for (let e = 0; e < Zu.length; e++)
    this.ruler.push(Zu[e][0], Zu[e][1]);
  this.ruler2 = new Fe();
  for (let e = 0; e < Wu.length; e++)
    this.ruler2.push(Wu[e][0], Wu[e][1]);
}
yn.prototype.skipToken = function(e) {
  const t = e.pos, n = this.ruler.getRules(""), u = n.length, r = e.md.options.maxNesting, o = e.cache;
  if (typeof o[t] < "u") {
    e.pos = o[t];
    return;
  }
  let i = !1;
  if (e.level < r) {
    for (let s = 0; s < u; s++)
      if (e.level++, i = n[s](e, !0), e.level--, i) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  i || e.pos++, o[t] = e.pos;
};
yn.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), n = t.length, u = e.posMax, r = e.md.options.maxNesting;
  for (; e.pos < u; ) {
    const o = e.pos;
    let i = !1;
    if (e.level < r) {
      for (let s = 0; s < n; s++)
        if (i = t[s](e, !1), i) {
          if (o >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (i) {
      if (e.pos >= u)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
yn.prototype.parse = function(e, t, n, u) {
  const r = new this.State(e, t, n, u);
  this.tokenize(r);
  const o = this.ruler2.getRules(""), i = o.length;
  for (let s = 0; s < i; s++)
    o[s](r);
};
yn.prototype.State = kn;
function Tf(e) {
  const t = {};
  e = e || {}, t.src_Any = ns.source, t.src_Cc = us.source, t.src_Z = os.source, t.src_P = Lr.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const n = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function fr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    n && Object.keys(n).forEach(function(u) {
      e[u] = n[u];
    });
  }), e;
}
function Cu(e) {
  return Object.prototype.toString.call(e);
}
function Rf(e) {
  return Cu(e) === "[object String]";
}
function Ff(e) {
  return Cu(e) === "[object Object]";
}
function Of(e) {
  return Cu(e) === "[object RegExp]";
}
function qo(e) {
  return Cu(e) === "[object Function]";
}
function Nf(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const gs = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Mf(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t || gs.hasOwnProperty(n);
  }, !1);
}
const If = {
  "http:": {
    validate: function(e, t, n) {
      const u = e.slice(t);
      return n.re.http || (n.re.http = new RegExp(
        "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
        "i"
      )), n.re.http.test(u) ? u.match(n.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, t, n) {
      const u = e.slice(t);
      return n.re.no_http || (n.re.no_http = new RegExp(
        "^" + n.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,
        "i"
      )), n.re.no_http.test(u) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : u.match(n.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, t, n) {
      const u = e.slice(t);
      return n.re.mailto || (n.re.mailto = new RegExp(
        "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
        "i"
      )), n.re.mailto.test(u) ? u.match(n.re.mailto)[0].length : 0;
    }
  }
}, Lf = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Bf = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function Pf(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function zf(e) {
  return function(t, n) {
    const u = t.slice(n);
    return e.test(u) ? u.match(e)[0].length : 0;
  };
}
function $o() {
  return function(e, t) {
    t.normalize(e);
  };
}
function ru(e) {
  const t = e.re = Tf(e.__opts__), n = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || n.push(Lf), n.push(t.src_xn), t.src_tlds = n.join("|");
  function u(s) {
    return s.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(u(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(u(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(u(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(u(t.tpl_host_fuzzy_test), "i");
  const r = [];
  e.__compiled__ = {};
  function o(s, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + s + '": ' + a);
  }
  Object.keys(e.__schemas__).forEach(function(s) {
    const a = e.__schemas__[s];
    if (a === null)
      return;
    const c = { validate: null, link: null };
    if (e.__compiled__[s] = c, Ff(a)) {
      Of(a.validate) ? c.validate = zf(a.validate) : qo(a.validate) ? c.validate = a.validate : o(s, a), qo(a.normalize) ? c.normalize = a.normalize : a.normalize ? o(s, a) : c.normalize = $o();
      return;
    }
    if (Rf(a)) {
      r.push(s);
      return;
    }
    o(s, a);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: $o() };
  const i = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(Nf).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), Pf(e);
}
function jf(e, t) {
  const n = e.__index__, u = e.__last_index__, r = e.__text_cache__.slice(n, u);
  this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = u + t, this.raw = r, this.text = r, this.url = r;
}
function hr(e, t) {
  const n = new jf(e, t);
  return e.__compiled__[n.schema].normalize(n, e), n;
}
function Le(e, t) {
  if (!(this instanceof Le))
    return new Le(e, t);
  t || Mf(e) && (t = e, e = {}), this.__opts__ = fr({}, gs, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = fr({}, If, e), this.__compiled__ = {}, this.__tlds__ = Bf, this.__tlds_replaced__ = !1, this.re = {}, ru(this);
}
Le.prototype.add = function(t, n) {
  return this.__schemas__[t] = n, ru(this), this;
};
Le.prototype.set = function(t) {
  return this.__opts__ = fr(this.__opts__, t), this;
};
Le.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let n, u, r, o, i, s, a, c, d;
  if (this.re.schema_test.test(t)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (n = a.exec(t)) !== null; )
      if (o = this.testSchemaAt(t, n[2], a.lastIndex), o) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (u = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = u.index + u[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = u.index + u[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (d = t.indexOf("@"), d >= 0 && (r = t.match(this.re.email_fuzzy)) !== null && (i = r.index + r[1].length, s = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = s))), this.__index__ >= 0;
};
Le.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Le.prototype.testSchemaAt = function(t, n, u) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(t, u, this) : 0;
};
Le.prototype.match = function(t) {
  const n = [];
  let u = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (n.push(hr(this, u)), u = this.__last_index__);
  let r = u ? t.slice(u) : t;
  for (; this.test(r); )
    n.push(hr(this, u)), r = r.slice(this.__last_index__), u += this.__last_index__;
  return n.length ? n : null;
};
Le.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const n = this.re.schema_at_start.exec(t);
  if (!n) return null;
  const u = this.testSchemaAt(t, n[2], n[0].length);
  return u ? (this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + u, hr(this, 0)) : null;
};
Le.prototype.tlds = function(t, n) {
  return t = Array.isArray(t) ? t : [t], n ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(u, r, o) {
    return u !== o[r - 1];
  }).reverse(), ru(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, ru(this), this);
};
Le.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Le.prototype.onCompile = function() {
};
const Ut = 2147483647, Ye = 36, Ur = 1, pn = 26, Uf = 38, qf = 700, ms = 72, _s = 128, xs = "-", $f = /^xn--/, Hf = /[^\0-\x7F]/, Gf = /[\x2E\u3002\uFF0E\uFF61]/g, Zf = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Ku = Ye - Ur, Xe = Math.floor, Vu = String.fromCharCode;
function ft(e) {
  throw new RangeError(Zf[e]);
}
function Wf(e, t) {
  const n = [];
  let u = e.length;
  for (; u--; )
    n[u] = t(e[u]);
  return n;
}
function vs(e, t) {
  const n = e.split("@");
  let u = "";
  n.length > 1 && (u = n[0] + "@", e = n[1]), e = e.replace(Gf, ".");
  const r = e.split("."), o = Wf(r, t).join(".");
  return u + o;
}
function Es(e) {
  const t = [];
  let n = 0;
  const u = e.length;
  for (; n < u; ) {
    const r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < u) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((r & 1023) << 10) + (o & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
const Kf = (e) => String.fromCodePoint(...e), Vf = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : Ye;
}, Ho = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, ks = function(e, t, n) {
  let u = 0;
  for (e = n ? Xe(e / qf) : e >> 1, e += Xe(e / t); e > Ku * pn >> 1; u += Ye)
    e = Xe(e / Ku);
  return Xe(u + (Ku + 1) * e / (e + Uf));
}, ys = function(e) {
  const t = [], n = e.length;
  let u = 0, r = _s, o = ms, i = e.lastIndexOf(xs);
  i < 0 && (i = 0);
  for (let s = 0; s < i; ++s)
    e.charCodeAt(s) >= 128 && ft("not-basic"), t.push(e.charCodeAt(s));
  for (let s = i > 0 ? i + 1 : 0; s < n; ) {
    const a = u;
    for (let d = 1, f = Ye; ; f += Ye) {
      s >= n && ft("invalid-input");
      const p = Vf(e.charCodeAt(s++));
      p >= Ye && ft("invalid-input"), p > Xe((Ut - u) / d) && ft("overflow"), u += p * d;
      const b = f <= o ? Ur : f >= o + pn ? pn : f - o;
      if (p < b)
        break;
      const l = Ye - b;
      d > Xe(Ut / l) && ft("overflow"), d *= l;
    }
    const c = t.length + 1;
    o = ks(u - a, c, a == 0), Xe(u / c) > Ut - r && ft("overflow"), r += Xe(u / c), u %= c, t.splice(u++, 0, r);
  }
  return String.fromCodePoint(...t);
}, ws = function(e) {
  const t = [];
  e = Es(e);
  const n = e.length;
  let u = _s, r = 0, o = ms;
  for (const a of e)
    a < 128 && t.push(Vu(a));
  const i = t.length;
  let s = i;
  for (i && t.push(xs); s < n; ) {
    let a = Ut;
    for (const d of e)
      d >= u && d < a && (a = d);
    const c = s + 1;
    a - u > Xe((Ut - r) / c) && ft("overflow"), r += (a - u) * c, u = a;
    for (const d of e)
      if (d < u && ++r > Ut && ft("overflow"), d === u) {
        let f = r;
        for (let p = Ye; ; p += Ye) {
          const b = p <= o ? Ur : p >= o + pn ? pn : p - o;
          if (f < b)
            break;
          const l = f - b, g = Ye - b;
          t.push(
            Vu(Ho(b + l % g, 0))
          ), f = Xe(l / g);
        }
        t.push(Vu(Ho(f, 0))), o = ks(r, c, s === i), r = 0, ++s;
      }
    ++r, ++u;
  }
  return t.join("");
}, Jf = function(e) {
  return vs(e, function(t) {
    return $f.test(t) ? ys(t.slice(4).toLowerCase()) : t;
  });
}, Yf = function(e) {
  return vs(e, function(t) {
    return Hf.test(t) ? "xn--" + ws(t) : t;
  });
}, As = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Es,
    encode: Kf
  },
  decode: ys,
  encode: ws,
  toASCII: Yf,
  toUnicode: Jf
}, Xf = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Qf = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, e1 = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, t1 = {
  default: Xf,
  zero: Qf,
  commonmark: e1
}, n1 = /^(vbscript|javascript|file|data):/, u1 = /^data:image\/(gif|png|jpeg|webp);/;
function r1(e) {
  const t = e.trim().toLowerCase();
  return n1.test(t) ? u1.test(t) : !0;
}
const Cs = ["http:", "https:", "mailto:"];
function o1(e) {
  const t = Ir(e, !0);
  if (t.hostname && (!t.protocol || Cs.indexOf(t.protocol) >= 0))
    try {
      t.hostname = As.toASCII(t.hostname);
    } catch {
    }
  return En(Mr(t));
}
function i1(e) {
  const t = Ir(e, !0);
  if (t.hostname && (!t.protocol || Cs.indexOf(t.protocol) >= 0))
    try {
      t.hostname = As.toUnicode(t.hostname);
    } catch {
    }
  return Ht(Mr(t), Ht.defaultChars + "%");
}
function ze(e, t) {
  if (!(this instanceof ze))
    return new ze(e, t);
  t || Br(e) || (t = e || {}, e = "default"), this.inline = new yn(), this.block = new Au(), this.core = new zr(), this.renderer = new en(), this.linkify = new Le(), this.validateLink = r1, this.normalizeLink = o1, this.normalizeLinkText = i1, this.utils = sd, this.helpers = yu({}, dd), this.options = {}, this.configure(e), t && this.set(t);
}
ze.prototype.set = function(e) {
  return yu(this.options, e), this;
};
ze.prototype.configure = function(e) {
  const t = this;
  if (Br(e)) {
    const n = e;
    if (e = t1[n], !e)
      throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(n) {
    e.components[n].rules && t[n].ruler.enableOnly(e.components[n].rules), e.components[n].rules2 && t[n].ruler2.enableOnly(e.components[n].rules2);
  }), this;
};
ze.prototype.enable = function(e, t) {
  let n = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    n = n.concat(this[r].ruler.enable(e, !0));
  }, this), n = n.concat(this.inline.ruler2.enable(e, !0));
  const u = e.filter(function(r) {
    return n.indexOf(r) < 0;
  });
  if (u.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + u);
  return this;
};
ze.prototype.disable = function(e, t) {
  let n = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    n = n.concat(this[r].ruler.disable(e, !0));
  }, this), n = n.concat(this.inline.ruler2.disable(e, !0));
  const u = e.filter(function(r) {
    return n.indexOf(r) < 0;
  });
  if (u.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + u);
  return this;
};
ze.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
ze.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const n = new this.core.State(e, this, t);
  return this.core.process(n), n.tokens;
};
ze.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
ze.prototype.parseInline = function(e, t) {
  const n = new this.core.State(e, this, t);
  return n.inlineMode = !0, this.core.process(n), n.tokens;
};
ze.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
function s1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ju, Go;
function a1() {
  if (Go) return Ju;
  Go = 1;
  function e(h) {
    return h instanceof Map ? h.clear = h.delete = h.set = function() {
      throw new Error("map is read-only");
    } : h instanceof Set && (h.add = h.clear = h.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(h), Object.getOwnPropertyNames(h).forEach((y) => {
      const S = h[y], U = typeof S;
      (U === "object" || U === "function") && !Object.isFrozen(S) && e(S);
    }), h;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(y) {
      y.data === void 0 && (y.data = {}), this.data = y.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(h) {
    return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function u(h, ...y) {
    const S = /* @__PURE__ */ Object.create(null);
    for (const U in h)
      S[U] = h[U];
    return y.forEach(function(U) {
      for (const de in U)
        S[de] = U[de];
    }), /** @type {T} */
    S;
  }
  const r = "</span>", o = (h) => !!h.scope, i = (h, { prefix: y }) => {
    if (h.startsWith("language:"))
      return h.replace("language:", "language-");
    if (h.includes(".")) {
      const S = h.split(".");
      return [
        `${y}${S.shift()}`,
        ...S.map((U, de) => `${U}${"_".repeat(de + 1)}`)
      ].join(" ");
    }
    return `${y}${h}`;
  };
  class s {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(y, S) {
      this.buffer = "", this.classPrefix = S.classPrefix, y.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(y) {
      this.buffer += n(y);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(y) {
      if (!o(y)) return;
      const S = i(
        y.scope,
        { prefix: this.classPrefix }
      );
      this.span(S);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(y) {
      o(y) && (this.buffer += r);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(y) {
      this.buffer += `<span class="${y}">`;
    }
  }
  const a = (h = {}) => {
    const y = { children: [] };
    return Object.assign(y, h), y;
  };
  class c {
    constructor() {
      this.rootNode = a(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(y) {
      this.top.children.push(y);
    }
    /** @param {string} scope */
    openNode(y) {
      const S = a({ scope: y });
      this.add(S), this.stack.push(S);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(y) {
      return this.constructor._walk(y, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(y, S) {
      return typeof S == "string" ? y.addText(S) : S.children && (y.openNode(S), S.children.forEach((U) => this._walk(y, U)), y.closeNode(S)), y;
    }
    /**
     * @param {Node} node
     */
    static _collapse(y) {
      typeof y != "string" && y.children && (y.children.every((S) => typeof S == "string") ? y.children = [y.children.join("")] : y.children.forEach((S) => {
        c._collapse(S);
      }));
    }
  }
  class d extends c {
    /**
     * @param {*} options
     */
    constructor(y) {
      super(), this.options = y;
    }
    /**
     * @param {string} text
     */
    addText(y) {
      y !== "" && this.add(y);
    }
    /** @param {string} scope */
    startScope(y) {
      this.openNode(y);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(y, S) {
      const U = y.root;
      S && (U.scope = `language:${S}`), this.add(U);
    }
    toHTML() {
      return new s(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(h) {
    return h ? typeof h == "string" ? h : h.source : null;
  }
  function p(h) {
    return g("(?=", h, ")");
  }
  function b(h) {
    return g("(?:", h, ")*");
  }
  function l(h) {
    return g("(?:", h, ")?");
  }
  function g(...h) {
    return h.map((S) => f(S)).join("");
  }
  function m(h) {
    const y = h[h.length - 1];
    return typeof y == "object" && y.constructor === Object ? (h.splice(h.length - 1, 1), y) : {};
  }
  function w(...h) {
    return "(" + (m(h).capture ? "" : "?:") + h.map((U) => f(U)).join("|") + ")";
  }
  function _(h) {
    return new RegExp(h.toString() + "|").exec("").length - 1;
  }
  function v(h, y) {
    const S = h && h.exec(y);
    return S && S.index === 0;
  }
  const E = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function k(h, { joinWith: y }) {
    let S = 0;
    return h.map((U) => {
      S += 1;
      const de = S;
      let fe = f(U), O = "";
      for (; fe.length > 0; ) {
        const F = E.exec(fe);
        if (!F) {
          O += fe;
          break;
        }
        O += fe.substring(0, F.index), fe = fe.substring(F.index + F[0].length), F[0][0] === "\\" && F[1] ? O += "\\" + String(Number(F[1]) + de) : (O += F[0], F[0] === "(" && S++);
      }
      return O;
    }).map((U) => `(${U})`).join(y);
  }
  const A = /\b\B/, R = "[a-zA-Z]\\w*", N = "[a-zA-Z_]\\w*", J = "\\b\\d+(\\.\\d+)?", L = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", P = "\\b(0b[01]+)", Y = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", K = (h = {}) => {
    const y = /^#![ ]*\//;
    return h.binary && (h.begin = g(
      y,
      /.*\b/,
      h.binary,
      /\b.*/
    )), u({
      scope: "meta",
      begin: y,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (S, U) => {
        S.index !== 0 && U.ignoreMatch();
      }
    }, h);
  }, B = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, z = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [B]
  }, W = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [B]
  }, ve = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, q = function(h, y, S = {}) {
    const U = u(
      {
        scope: "comment",
        begin: h,
        end: y,
        contains: []
      },
      S
    );
    U.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const de = w(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return U.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: g(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          de,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), U;
  }, X = q("//", "$"), ee = q("/\\*", "\\*/"), pe = q("#", "$"), Oe = {
    scope: "number",
    begin: J,
    relevance: 0
  }, Se = {
    scope: "number",
    begin: L,
    relevance: 0
  }, yt = {
    scope: "number",
    begin: P,
    relevance: 0
  }, Du = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      B,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [B]
      }
    ]
  }, wt = {
    scope: "title",
    begin: R,
    relevance: 0
  }, wn = {
    scope: "title",
    begin: N,
    relevance: 0
  }, Us = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + N,
    relevance: 0
  };
  var An = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: z,
    BACKSLASH_ESCAPE: B,
    BINARY_NUMBER_MODE: yt,
    BINARY_NUMBER_RE: P,
    COMMENT: q,
    C_BLOCK_COMMENT_MODE: ee,
    C_LINE_COMMENT_MODE: X,
    C_NUMBER_MODE: Se,
    C_NUMBER_RE: L,
    END_SAME_AS_BEGIN: function(h) {
      return Object.assign(
        h,
        {
          /** @type {ModeCallback} */
          "on:begin": (y, S) => {
            S.data._beginMatch = y[1];
          },
          /** @type {ModeCallback} */
          "on:end": (y, S) => {
            S.data._beginMatch !== y[1] && S.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: pe,
    IDENT_RE: R,
    MATCH_NOTHING_RE: A,
    METHOD_GUARD: Us,
    NUMBER_MODE: Oe,
    NUMBER_RE: J,
    PHRASAL_WORDS_MODE: ve,
    QUOTE_STRING_MODE: W,
    REGEXP_MODE: Du,
    RE_STARTERS_RE: Y,
    SHEBANG: K,
    TITLE_MODE: wt,
    UNDERSCORE_IDENT_RE: N,
    UNDERSCORE_TITLE_MODE: wn
  });
  function qs(h, y) {
    h.input[h.index - 1] === "." && y.ignoreMatch();
  }
  function $s(h, y) {
    h.className !== void 0 && (h.scope = h.className, delete h.className);
  }
  function Hs(h, y) {
    y && h.beginKeywords && (h.begin = "\\b(" + h.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", h.__beforeBegin = qs, h.keywords = h.keywords || h.beginKeywords, delete h.beginKeywords, h.relevance === void 0 && (h.relevance = 0));
  }
  function Gs(h, y) {
    Array.isArray(h.illegal) && (h.illegal = w(...h.illegal));
  }
  function Zs(h, y) {
    if (h.match) {
      if (h.begin || h.end) throw new Error("begin & end are not supported with match");
      h.begin = h.match, delete h.match;
    }
  }
  function Ws(h, y) {
    h.relevance === void 0 && (h.relevance = 1);
  }
  const Ks = (h, y) => {
    if (!h.beforeMatch) return;
    if (h.starts) throw new Error("beforeMatch cannot be used with starts");
    const S = Object.assign({}, h);
    Object.keys(h).forEach((U) => {
      delete h[U];
    }), h.keywords = S.keywords, h.begin = g(S.beforeMatch, p(S.begin)), h.starts = {
      relevance: 0,
      contains: [
        Object.assign(S, { endsParent: !0 })
      ]
    }, h.relevance = 0, delete S.beforeMatch;
  }, Vs = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], Js = "keyword";
  function $r(h, y, S = Js) {
    const U = /* @__PURE__ */ Object.create(null);
    return typeof h == "string" ? de(S, h.split(" ")) : Array.isArray(h) ? de(S, h) : Object.keys(h).forEach(function(fe) {
      Object.assign(
        U,
        $r(h[fe], y, fe)
      );
    }), U;
    function de(fe, O) {
      y && (O = O.map((F) => F.toLowerCase())), O.forEach(function(F) {
        const j = F.split("|");
        U[j[0]] = [fe, Ys(j[0], j[1])];
      });
    }
  }
  function Ys(h, y) {
    return y ? Number(y) : Xs(h) ? 0 : 1;
  }
  function Xs(h) {
    return Vs.includes(h.toLowerCase());
  }
  const Hr = {}, At = (h) => {
    console.error(h);
  }, Gr = (h, ...y) => {
    console.log(`WARN: ${h}`, ...y);
  }, Ot = (h, y) => {
    Hr[`${h}/${y}`] || (console.log(`Deprecated as of ${h}. ${y}`), Hr[`${h}/${y}`] = !0);
  }, Cn = new Error();
  function Zr(h, y, { key: S }) {
    let U = 0;
    const de = h[S], fe = {}, O = {};
    for (let F = 1; F <= y.length; F++)
      O[F + U] = de[F], fe[F + U] = !0, U += _(y[F - 1]);
    h[S] = O, h[S]._emit = fe, h[S]._multi = !0;
  }
  function Qs(h) {
    if (Array.isArray(h.begin)) {
      if (h.skip || h.excludeBegin || h.returnBegin)
        throw At("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Cn;
      if (typeof h.beginScope != "object" || h.beginScope === null)
        throw At("beginScope must be object"), Cn;
      Zr(h, h.begin, { key: "beginScope" }), h.begin = k(h.begin, { joinWith: "" });
    }
  }
  function ea(h) {
    if (Array.isArray(h.end)) {
      if (h.skip || h.excludeEnd || h.returnEnd)
        throw At("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Cn;
      if (typeof h.endScope != "object" || h.endScope === null)
        throw At("endScope must be object"), Cn;
      Zr(h, h.end, { key: "endScope" }), h.end = k(h.end, { joinWith: "" });
    }
  }
  function ta(h) {
    h.scope && typeof h.scope == "object" && h.scope !== null && (h.beginScope = h.scope, delete h.scope);
  }
  function na(h) {
    ta(h), typeof h.beginScope == "string" && (h.beginScope = { _wrap: h.beginScope }), typeof h.endScope == "string" && (h.endScope = { _wrap: h.endScope }), Qs(h), ea(h);
  }
  function ua(h) {
    function y(O, F) {
      return new RegExp(
        f(O),
        "m" + (h.case_insensitive ? "i" : "") + (h.unicodeRegex ? "u" : "") + (F ? "g" : "")
      );
    }
    class S {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(F, j) {
        j.position = this.position++, this.matchIndexes[this.matchAt] = j, this.regexes.push([j, F]), this.matchAt += _(F) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const F = this.regexes.map((j) => j[1]);
        this.matcherRe = y(k(F, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(F) {
        this.matcherRe.lastIndex = this.lastIndex;
        const j = this.matcherRe.exec(F);
        if (!j)
          return null;
        const me = j.findIndex((tn, Ru) => Ru > 0 && tn !== void 0), be = this.matchIndexes[me];
        return j.splice(0, me), Object.assign(j, be);
      }
    }
    class U {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(F) {
        if (this.multiRegexes[F]) return this.multiRegexes[F];
        const j = new S();
        return this.rules.slice(F).forEach(([me, be]) => j.addRule(me, be)), j.compile(), this.multiRegexes[F] = j, j;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(F, j) {
        this.rules.push([F, j]), j.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(F) {
        const j = this.getMatcher(this.regexIndex);
        j.lastIndex = this.lastIndex;
        let me = j.exec(F);
        if (this.resumingScanAtSamePosition() && !(me && me.index === this.lastIndex)) {
          const be = this.getMatcher(0);
          be.lastIndex = this.lastIndex + 1, me = be.exec(F);
        }
        return me && (this.regexIndex += me.position + 1, this.regexIndex === this.count && this.considerAll()), me;
      }
    }
    function de(O) {
      const F = new U();
      return O.contains.forEach((j) => F.addRule(j.begin, { rule: j, type: "begin" })), O.terminatorEnd && F.addRule(O.terminatorEnd, { type: "end" }), O.illegal && F.addRule(O.illegal, { type: "illegal" }), F;
    }
    function fe(O, F) {
      const j = (
        /** @type CompiledMode */
        O
      );
      if (O.isCompiled) return j;
      [
        $s,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Zs,
        na,
        Ks
      ].forEach((be) => be(O, F)), h.compilerExtensions.forEach((be) => be(O, F)), O.__beforeBegin = null, [
        Hs,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Gs,
        // default to 1 relevance if not specified
        Ws
      ].forEach((be) => be(O, F)), O.isCompiled = !0;
      let me = null;
      return typeof O.keywords == "object" && O.keywords.$pattern && (O.keywords = Object.assign({}, O.keywords), me = O.keywords.$pattern, delete O.keywords.$pattern), me = me || /\w+/, O.keywords && (O.keywords = $r(O.keywords, h.case_insensitive)), j.keywordPatternRe = y(me, !0), F && (O.begin || (O.begin = /\B|\b/), j.beginRe = y(j.begin), !O.end && !O.endsWithParent && (O.end = /\B|\b/), O.end && (j.endRe = y(j.end)), j.terminatorEnd = f(j.end) || "", O.endsWithParent && F.terminatorEnd && (j.terminatorEnd += (O.end ? "|" : "") + F.terminatorEnd)), O.illegal && (j.illegalRe = y(
        /** @type {RegExp | string} */
        O.illegal
      )), O.contains || (O.contains = []), O.contains = [].concat(...O.contains.map(function(be) {
        return ra(be === "self" ? O : be);
      })), O.contains.forEach(function(be) {
        fe(
          /** @type Mode */
          be,
          j
        );
      }), O.starts && fe(O.starts, F), j.matcher = de(j), j;
    }
    if (h.compilerExtensions || (h.compilerExtensions = []), h.contains && h.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return h.classNameAliases = u(h.classNameAliases || {}), fe(
      /** @type Mode */
      h
    );
  }
  function Wr(h) {
    return h ? h.endsWithParent || Wr(h.starts) : !1;
  }
  function ra(h) {
    return h.variants && !h.cachedVariants && (h.cachedVariants = h.variants.map(function(y) {
      return u(h, { variants: null }, y);
    })), h.cachedVariants ? h.cachedVariants : Wr(h) ? u(h, { starts: h.starts ? u(h.starts) : null }) : Object.isFrozen(h) ? u(h) : h;
  }
  var oa = "11.11.1";
  class ia extends Error {
    constructor(y, S) {
      super(y), this.name = "HTMLInjectionError", this.html = S;
    }
  }
  const Tu = n, Kr = u, Vr = Symbol("nomatch"), sa = 7, Jr = function(h) {
    const y = /* @__PURE__ */ Object.create(null), S = /* @__PURE__ */ Object.create(null), U = [];
    let de = !0;
    const fe = "Could not find the language '{}', did you forget to load/include a language module?", O = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let F = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: d
    };
    function j(C) {
      return F.noHighlightRe.test(C);
    }
    function me(C) {
      let I = C.className + " ";
      I += C.parentNode ? C.parentNode.className : "";
      const V = F.languageDetectRe.exec(I);
      if (V) {
        const oe = ct(V[1]);
        return oe || (Gr(fe.replace("{}", V[1])), Gr("Falling back to no-highlight mode for this block.", C)), oe ? V[1] : "no-highlight";
      }
      return I.split(/\s+/).find((oe) => j(oe) || ct(oe));
    }
    function be(C, I, V) {
      let oe = "", ge = "";
      typeof I == "object" ? (oe = C, V = I.ignoreIllegals, ge = I.language) : (Ot("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Ot("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), ge = C, oe = I), V === void 0 && (V = !0);
      const Ue = {
        code: oe,
        language: ge
      };
      Dn("before:highlight", Ue);
      const lt = Ue.result ? Ue.result : tn(Ue.language, Ue.code, V);
      return lt.code = Ue.code, Dn("after:highlight", lt), lt;
    }
    function tn(C, I, V, oe) {
      const ge = /* @__PURE__ */ Object.create(null);
      function Ue(D, M) {
        return D.keywords[M];
      }
      function lt() {
        if (!$.keywords) {
          Ee.addText(ie);
          return;
        }
        let D = 0;
        $.keywordPatternRe.lastIndex = 0;
        let M = $.keywordPatternRe.exec(ie), Z = "";
        for (; M; ) {
          Z += ie.substring(D, M.index);
          const te = Ve.case_insensitive ? M[0].toLowerCase() : M[0], ye = Ue($, te);
          if (ye) {
            const [nt, wa] = ye;
            if (Ee.addText(Z), Z = "", ge[te] = (ge[te] || 0) + 1, ge[te] <= sa && (Fn += wa), nt.startsWith("_"))
              Z += M[0];
            else {
              const Aa = Ve.classNameAliases[nt] || nt;
              Ke(M[0], Aa);
            }
          } else
            Z += M[0];
          D = $.keywordPatternRe.lastIndex, M = $.keywordPatternRe.exec(ie);
        }
        Z += ie.substring(D), Ee.addText(Z);
      }
      function Tn() {
        if (ie === "") return;
        let D = null;
        if (typeof $.subLanguage == "string") {
          if (!y[$.subLanguage]) {
            Ee.addText(ie);
            return;
          }
          D = tn($.subLanguage, ie, !0, ro[$.subLanguage]), ro[$.subLanguage] = /** @type {CompiledMode} */
          D._top;
        } else
          D = Fu(ie, $.subLanguage.length ? $.subLanguage : null);
        $.relevance > 0 && (Fn += D.relevance), Ee.__addSublanguage(D._emitter, D.language);
      }
      function Ne() {
        $.subLanguage != null ? Tn() : lt(), ie = "";
      }
      function Ke(D, M) {
        D !== "" && (Ee.startScope(M), Ee.addText(D), Ee.endScope());
      }
      function eo(D, M) {
        let Z = 1;
        const te = M.length - 1;
        for (; Z <= te; ) {
          if (!D._emit[Z]) {
            Z++;
            continue;
          }
          const ye = Ve.classNameAliases[D[Z]] || D[Z], nt = M[Z];
          ye ? Ke(nt, ye) : (ie = nt, lt(), ie = ""), Z++;
        }
      }
      function to(D, M) {
        return D.scope && typeof D.scope == "string" && Ee.openNode(Ve.classNameAliases[D.scope] || D.scope), D.beginScope && (D.beginScope._wrap ? (Ke(ie, Ve.classNameAliases[D.beginScope._wrap] || D.beginScope._wrap), ie = "") : D.beginScope._multi && (eo(D.beginScope, M), ie = "")), $ = Object.create(D, { parent: { value: $ } }), $;
      }
      function no(D, M, Z) {
        let te = v(D.endRe, Z);
        if (te) {
          if (D["on:end"]) {
            const ye = new t(D);
            D["on:end"](M, ye), ye.isMatchIgnored && (te = !1);
          }
          if (te) {
            for (; D.endsParent && D.parent; )
              D = D.parent;
            return D;
          }
        }
        if (D.endsWithParent)
          return no(D.parent, M, Z);
      }
      function xa(D) {
        return $.matcher.regexIndex === 0 ? (ie += D[0], 1) : (Iu = !0, 0);
      }
      function va(D) {
        const M = D[0], Z = D.rule, te = new t(Z), ye = [Z.__beforeBegin, Z["on:begin"]];
        for (const nt of ye)
          if (nt && (nt(D, te), te.isMatchIgnored))
            return xa(M);
        return Z.skip ? ie += M : (Z.excludeBegin && (ie += M), Ne(), !Z.returnBegin && !Z.excludeBegin && (ie = M)), to(Z, D), Z.returnBegin ? 0 : M.length;
      }
      function Ea(D) {
        const M = D[0], Z = I.substring(D.index), te = no($, D, Z);
        if (!te)
          return Vr;
        const ye = $;
        $.endScope && $.endScope._wrap ? (Ne(), Ke(M, $.endScope._wrap)) : $.endScope && $.endScope._multi ? (Ne(), eo($.endScope, D)) : ye.skip ? ie += M : (ye.returnEnd || ye.excludeEnd || (ie += M), Ne(), ye.excludeEnd && (ie = M));
        do
          $.scope && Ee.closeNode(), !$.skip && !$.subLanguage && (Fn += $.relevance), $ = $.parent;
        while ($ !== te.parent);
        return te.starts && to(te.starts, D), ye.returnEnd ? 0 : M.length;
      }
      function ka() {
        const D = [];
        for (let M = $; M !== Ve; M = M.parent)
          M.scope && D.unshift(M.scope);
        D.forEach((M) => Ee.openNode(M));
      }
      let Rn = {};
      function uo(D, M) {
        const Z = M && M[0];
        if (ie += D, Z == null)
          return Ne(), 0;
        if (Rn.type === "begin" && M.type === "end" && Rn.index === M.index && Z === "") {
          if (ie += I.slice(M.index, M.index + 1), !de) {
            const te = new Error(`0 width match regex (${C})`);
            throw te.languageName = C, te.badRule = Rn.rule, te;
          }
          return 1;
        }
        if (Rn = M, M.type === "begin")
          return va(M);
        if (M.type === "illegal" && !V) {
          const te = new Error('Illegal lexeme "' + Z + '" for mode "' + ($.scope || "<unnamed>") + '"');
          throw te.mode = $, te;
        } else if (M.type === "end") {
          const te = Ea(M);
          if (te !== Vr)
            return te;
        }
        if (M.type === "illegal" && Z === "")
          return ie += `
`, 1;
        if (Mu > 1e5 && Mu > M.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return ie += Z, Z.length;
      }
      const Ve = ct(C);
      if (!Ve)
        throw At(fe.replace("{}", C)), new Error('Unknown language: "' + C + '"');
      const ya = ua(Ve);
      let Nu = "", $ = oe || ya;
      const ro = {}, Ee = new F.__emitter(F);
      ka();
      let ie = "", Fn = 0, Ct = 0, Mu = 0, Iu = !1;
      try {
        if (Ve.__emitTokens)
          Ve.__emitTokens(I, Ee);
        else {
          for ($.matcher.considerAll(); ; ) {
            Mu++, Iu ? Iu = !1 : $.matcher.considerAll(), $.matcher.lastIndex = Ct;
            const D = $.matcher.exec(I);
            if (!D) break;
            const M = I.substring(Ct, D.index), Z = uo(M, D);
            Ct = D.index + Z;
          }
          uo(I.substring(Ct));
        }
        return Ee.finalize(), Nu = Ee.toHTML(), {
          language: C,
          value: Nu,
          relevance: Fn,
          illegal: !1,
          _emitter: Ee,
          _top: $
        };
      } catch (D) {
        if (D.message && D.message.includes("Illegal"))
          return {
            language: C,
            value: Tu(I),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: D.message,
              index: Ct,
              context: I.slice(Ct - 100, Ct + 100),
              mode: D.mode,
              resultSoFar: Nu
            },
            _emitter: Ee
          };
        if (de)
          return {
            language: C,
            value: Tu(I),
            illegal: !1,
            relevance: 0,
            errorRaised: D,
            _emitter: Ee,
            _top: $
          };
        throw D;
      }
    }
    function Ru(C) {
      const I = {
        value: Tu(C),
        illegal: !1,
        relevance: 0,
        _top: O,
        _emitter: new F.__emitter(F)
      };
      return I._emitter.addText(C), I;
    }
    function Fu(C, I) {
      I = I || F.languages || Object.keys(y);
      const V = Ru(C), oe = I.filter(ct).filter(Qr).map(
        (Ne) => tn(Ne, C, !1)
      );
      oe.unshift(V);
      const ge = oe.sort((Ne, Ke) => {
        if (Ne.relevance !== Ke.relevance) return Ke.relevance - Ne.relevance;
        if (Ne.language && Ke.language) {
          if (ct(Ne.language).supersetOf === Ke.language)
            return 1;
          if (ct(Ke.language).supersetOf === Ne.language)
            return -1;
        }
        return 0;
      }), [Ue, lt] = ge, Tn = Ue;
      return Tn.secondBest = lt, Tn;
    }
    function aa(C, I, V) {
      const oe = I && S[I] || V;
      C.classList.add("hljs"), C.classList.add(`language-${oe}`);
    }
    function Ou(C) {
      let I = null;
      const V = me(C);
      if (j(V)) return;
      if (Dn(
        "before:highlightElement",
        { el: C, language: V }
      ), C.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
        return;
      }
      if (C.children.length > 0 && (F.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), F.throwUnescapedHTML))
        throw new ia(
          "One of your code blocks includes unescaped HTML.",
          C.innerHTML
        );
      I = C;
      const oe = I.textContent, ge = V ? be(oe, { language: V, ignoreIllegals: !0 }) : Fu(oe);
      C.innerHTML = ge.value, C.dataset.highlighted = "yes", aa(C, V, ge.language), C.result = {
        language: ge.language,
        // TODO: remove with version 11.0
        re: ge.relevance,
        relevance: ge.relevance
      }, ge.secondBest && (C.secondBest = {
        language: ge.secondBest.language,
        relevance: ge.secondBest.relevance
      }), Dn("after:highlightElement", { el: C, result: ge, text: oe });
    }
    function ca(C) {
      F = Kr(F, C);
    }
    const la = () => {
      Sn(), Ot("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function da() {
      Sn(), Ot("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Yr = !1;
    function Sn() {
      function C() {
        Sn();
      }
      if (document.readyState === "loading") {
        Yr || window.addEventListener("DOMContentLoaded", C, !1), Yr = !0;
        return;
      }
      document.querySelectorAll(F.cssSelector).forEach(Ou);
    }
    function fa(C, I) {
      let V = null;
      try {
        V = I(h);
      } catch (oe) {
        if (At("Language definition for '{}' could not be registered.".replace("{}", C)), de)
          At(oe);
        else
          throw oe;
        V = O;
      }
      V.name || (V.name = C), y[C] = V, V.rawDefinition = I.bind(null, h), V.aliases && Xr(V.aliases, { languageName: C });
    }
    function ha(C) {
      delete y[C];
      for (const I of Object.keys(S))
        S[I] === C && delete S[I];
    }
    function pa() {
      return Object.keys(y);
    }
    function ct(C) {
      return C = (C || "").toLowerCase(), y[C] || y[S[C]];
    }
    function Xr(C, { languageName: I }) {
      typeof C == "string" && (C = [C]), C.forEach((V) => {
        S[V.toLowerCase()] = I;
      });
    }
    function Qr(C) {
      const I = ct(C);
      return I && !I.disableAutodetect;
    }
    function ba(C) {
      C["before:highlightBlock"] && !C["before:highlightElement"] && (C["before:highlightElement"] = (I) => {
        C["before:highlightBlock"](
          Object.assign({ block: I.el }, I)
        );
      }), C["after:highlightBlock"] && !C["after:highlightElement"] && (C["after:highlightElement"] = (I) => {
        C["after:highlightBlock"](
          Object.assign({ block: I.el }, I)
        );
      });
    }
    function ga(C) {
      ba(C), U.push(C);
    }
    function ma(C) {
      const I = U.indexOf(C);
      I !== -1 && U.splice(I, 1);
    }
    function Dn(C, I) {
      const V = C;
      U.forEach(function(oe) {
        oe[V] && oe[V](I);
      });
    }
    function _a(C) {
      return Ot("10.7.0", "highlightBlock will be removed entirely in v12.0"), Ot("10.7.0", "Please use highlightElement now."), Ou(C);
    }
    Object.assign(h, {
      highlight: be,
      highlightAuto: Fu,
      highlightAll: Sn,
      highlightElement: Ou,
      // TODO: Remove with v12 API
      highlightBlock: _a,
      configure: ca,
      initHighlighting: la,
      initHighlightingOnLoad: da,
      registerLanguage: fa,
      unregisterLanguage: ha,
      listLanguages: pa,
      getLanguage: ct,
      registerAliases: Xr,
      autoDetection: Qr,
      inherit: Kr,
      addPlugin: ga,
      removePlugin: ma
    }), h.debugMode = function() {
      de = !1;
    }, h.safeMode = function() {
      de = !0;
    }, h.versionString = oa, h.regex = {
      concat: g,
      lookahead: p,
      either: w,
      optional: l,
      anyNumberOfTimes: b
    };
    for (const C in An)
      typeof An[C] == "object" && e(An[C]);
    return Object.assign(h, An), h;
  }, Nt = Jr({});
  return Nt.newInstance = () => Jr({}), Ju = Nt, Nt.HighlightJS = Nt, Nt.default = Nt, Ju;
}
var c1 = /* @__PURE__ */ a1();
const je = /* @__PURE__ */ s1(c1), Zo = "[A-Za-z$_][0-9A-Za-z$_]*", l1 = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], d1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Ss = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Ds = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Ts = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], f1 = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], h1 = [].concat(
  Ts,
  Ss,
  Ds
);
function p1(e) {
  const t = e.regex, n = (q, { after: X }) => {
    const ee = "</" + q[0].slice(1);
    return q.input.indexOf(ee, X) !== -1;
  }, u = Zo, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (q, X) => {
      const ee = q[0].length + q.index, pe = q.input[ee];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        pe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        pe === ","
      ) {
        X.ignoreMatch();
        return;
      }
      pe === ">" && (n(q, { after: ee }) || X.ignoreMatch());
      let Oe;
      const Se = q.input.substring(ee);
      if (Oe = Se.match(/^\s*=/)) {
        X.ignoreMatch();
        return;
      }
      if ((Oe = Se.match(/^\s+extends\s+/)) && Oe.index === 0) {
        X.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: Zo,
    keyword: l1,
    literal: d1,
    built_in: h1,
    "variable.language": f1
  }, a = "[0-9](_?[0-9])*", c = `\\.(${a})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${d})\\b((${c})\\b|\\.)?|(${c})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, b = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, l = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, m = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, _ = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: u + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, v = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    b,
    l,
    g,
    m,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = v.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(v)
  });
  const E = [].concat(_, p.contains), k = E.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(E)
    }
  ]), A = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: k
  }, R = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          u,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(u, "(", t.concat(/\./, u), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          u
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, N = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Ss,
        ...Ds
      ]
    }
  }, J = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, L = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          u,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [A],
    illegal: /%/
  }, P = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function Y(q) {
    return t.concat("(?!", q.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      Y([
        ...Ts,
        "super",
        "import"
      ].map((q) => `${q}\\s*\\(`)),
      u,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, B = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(u, /(?![0-9A-Za-z$_(])/)
    )),
    end: u,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, z = {
    match: [
      /get|set/,
      /\s+/,
      u,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      A
    ]
  }, W = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", ve = {
    match: [
      /const|var|let/,
      /\s+/,
      u,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(W)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      A
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: k, CLASS_REFERENCE: N },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      J,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      b,
      l,
      g,
      m,
      _,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      N,
      {
        scope: "attr",
        match: u + t.lookahead(":"),
        relevance: 0
      },
      ve,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          _,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: W,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: k
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: r.begin, end: r.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      L,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          A,
          e.inherit(e.TITLE_MODE, { begin: u, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      B,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + u,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [A]
      },
      K,
      P,
      R,
      z,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
const ou = "[A-Za-z$_][0-9A-Za-z$_]*", Rs = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Fs = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Os = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Ns = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Ms = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Is = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Ls = [].concat(
  Ms,
  Os,
  Ns
);
function b1(e) {
  const t = e.regex, n = (q, { after: X }) => {
    const ee = "</" + q[0].slice(1);
    return q.input.indexOf(ee, X) !== -1;
  }, u = ou, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (q, X) => {
      const ee = q[0].length + q.index, pe = q.input[ee];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        pe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        pe === ","
      ) {
        X.ignoreMatch();
        return;
      }
      pe === ">" && (n(q, { after: ee }) || X.ignoreMatch());
      let Oe;
      const Se = q.input.substring(ee);
      if (Oe = Se.match(/^\s*=/)) {
        X.ignoreMatch();
        return;
      }
      if ((Oe = Se.match(/^\s+extends\s+/)) && Oe.index === 0) {
        X.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: ou,
    keyword: Rs,
    literal: Fs,
    built_in: Ls,
    "variable.language": Is
  }, a = "[0-9](_?[0-9])*", c = `\\.(${a})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${d})\\b((${c})\\b|\\.)?|(${c})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, b = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, l = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, m = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, _ = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: u + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, v = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    b,
    l,
    g,
    m,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = v.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(v)
  });
  const E = [].concat(_, p.contains), k = E.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(E)
    }
  ]), A = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: k
  }, R = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          u,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(u, "(", t.concat(/\./, u), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          u
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, N = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Os,
        ...Ns
      ]
    }
  }, J = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, L = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          u,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [A],
    illegal: /%/
  }, P = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function Y(q) {
    return t.concat("(?!", q.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      Y([
        ...Ms,
        "super",
        "import"
      ].map((q) => `${q}\\s*\\(`)),
      u,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, B = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(u, /(?![0-9A-Za-z$_(])/)
    )),
    end: u,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, z = {
    match: [
      /get|set/,
      /\s+/,
      u,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      A
    ]
  }, W = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", ve = {
    match: [
      /const|var|let/,
      /\s+/,
      u,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(W)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      A
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: k, CLASS_REFERENCE: N },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      J,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      b,
      l,
      g,
      m,
      _,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      N,
      {
        scope: "attr",
        match: u + t.lookahead(":"),
        relevance: 0
      },
      ve,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          _,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: W,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: k
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: r.begin, end: r.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      L,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          A,
          e.inherit(e.TITLE_MODE, { begin: u, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      B,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + u,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [A]
      },
      K,
      P,
      R,
      z,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function g1(e) {
  const t = e.regex, n = b1(e), u = ou, r = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], o = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, i = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: r
    },
    contains: [n.exports.CLASS_REFERENCE]
  }, s = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, a = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], c = {
    $pattern: ou,
    keyword: Rs.concat(a),
    literal: Fs,
    built_in: Ls.concat(r),
    "variable.language": Is
  }, d = {
    className: "meta",
    begin: "@" + u
  }, f = (g, m, w) => {
    const _ = g.contains.findIndex((v) => v.label === m);
    if (_ === -1)
      throw new Error("can not find mode to replace");
    g.contains.splice(_, 1, w);
  };
  Object.assign(n.keywords, c), n.exports.PARAMS_CONTAINS.push(d);
  const p = n.contains.find((g) => g.scope === "attr"), b = Object.assign(
    {},
    p,
    { match: t.concat(u, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    p,
    // highlight the params key
    b
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    d,
    o,
    i,
    b
    // Added for optional property assignment highlighting
  ]), f(n, "shebang", e.SHEBANG()), f(n, "use_strict", s);
  const l = n.contains.find((g) => g.label === "func.def");
  return l.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
function m1(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), u = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], s = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: u,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, a = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, c = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: s,
    illegal: /#/
  }, d = {
    begin: /\{\{/,
    relevance: 0
  }, f = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          d,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          d,
          c
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          c
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, p = "[0-9](_?[0-9])*", b = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`, l = `\\b|${u.join("|")}`, g = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${p})|(${b}))[eE][+-]?(${p})[jJ]?(?=${l})`
      },
      {
        begin: `(${b})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${l})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${l})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${l})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${l})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${p})[jJ](?=${l})`
      }
    ]
  }, m = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: s,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, w = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: s,
        contains: [
          "self",
          a,
          g,
          f,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return c.contains = [
    f,
    g,
    a
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: s,
    illegal: /(<\/|\?)|=>/,
    contains: [
      a,
      g,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      f,
      m,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [w]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          g,
          w,
          f
        ]
      }
    ]
  };
}
function _1(e) {
  const t = e.regex, n = {}, u = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      u
    ]
  });
  const r = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, o = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), i = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, s = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      r
    ]
  };
  r.contains.push(s);
  const a = {
    match: /\\"/
  }, c = {
    className: "string",
    begin: /'/,
    end: /'/
  }, d = {
    match: /\\'/
  }, f = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, p = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], b = e.SHEBANG({
    binary: `(${p.join("|")})`,
    relevance: 10
  }), l = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, g = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], m = [
    "true",
    "false"
  ], w = { match: /(\/[a-z._-]+)+/ }, _ = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], v = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], E = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], k = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: g,
      literal: m,
      built_in: [
        ..._,
        ...v,
        // Shell modifiers
        "set",
        "shopt",
        ...E,
        ...k
      ]
    },
    contains: [
      b,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      l,
      f,
      o,
      i,
      w,
      s,
      a,
      c,
      d,
      n
    ]
  };
}
function x1(e) {
  const t = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, n = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, u = [
    "true",
    "false",
    "null"
  ], r = {
    scope: "literal",
    beginKeywords: u.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: u
    },
    contains: [
      t,
      n,
      e.QUOTE_STRING_MODE,
      r,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
function Bs(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), u = /[\p{L}0-9._:-]+/u, r = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, o = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, i = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), s = e.inherit(e.APOS_STRING_MODE, { className: "string" }), a = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), c = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: u,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [r]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [r]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          a,
          s,
          i,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  o,
                  i,
                  a,
                  s
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      r,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              a
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [c],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [c],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: c
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const v1 = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), E1 = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], k1 = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], y1 = [
  ...E1,
  ...k1
], w1 = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), A1 = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), C1 = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), S1 = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
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
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function D1(e) {
  const t = e.regex, n = v1(e), u = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, r = "and or not only", o = /@-?\w[\w]*(-\w+)*/, i = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      n.BLOCK_COMMENT,
      u,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      n.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + i,
        relevance: 0
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + A1.join("|") + ")" },
          { begin: ":(:)?(" + C1.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + S1.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...s,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...s,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          n.FUNCTION_DISPATCH
        ]
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: o
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: r,
              attribute: w1.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...s,
              n.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + y1.join("|") + ")\\b"
      }
    ]
  };
}
function T1(e) {
  const t = e.regex, n = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, u = {
    begin: "^[-\\*]{3,}",
    end: "$"
  }, r = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      { begin: "`.+?`" },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  }, o = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: !0
  }, i = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: !0,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: !0
      }
    ]
  }, s = /[A-Za-z][A-Za-z0-9+.-]*/, a = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: t.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: !0,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/
      },
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: !0,
        returnEnd: !0
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: !0,
        excludeEnd: !0
      }
    ]
  }, c = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      },
      {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }
    ]
  }, d = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?![*\s])/,
        end: /\*/
      },
      {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }
    ]
  }, f = e.inherit(c, { contains: [] }), p = e.inherit(d, { contains: [] });
  c.contains.push(p), d.contains.push(f);
  let b = [
    n,
    a
  ];
  return [
    c,
    d,
    f,
    p
  ].forEach((w) => {
    w.contains = w.contains.concat(b);
  }), b = b.concat(c, d), {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: b
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: b
              }
            ]
          }
        ]
      },
      n,
      o,
      c,
      d,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: b,
        end: "$"
      },
      r,
      u,
      a,
      i,
      {
        //https://spec.commonmark.org/0.31.2/#entity-references
        scope: "literal",
        match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
      }
    ]
  };
}
function R1(e) {
  const t = e.regex, n = /(?![A-Za-z0-9])(?![$])/, u = t.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    n
  ), r = t.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    n
  ), o = t.concat(
    /[A-Z]+/,
    n
  ), i = {
    scope: "variable",
    match: "\\$+" + u
  }, s = {
    scope: "meta",
    variants: [
      { begin: /<\?php/, relevance: 10 },
      // boost for obvious PHP
      { begin: /<\?=/ },
      // less relevant per PSR-1 which says not to use short-tags
      { begin: /<\?/, relevance: 0.1 },
      { begin: /\?>/ }
      // end php tag
    ]
  }, a = {
    scope: "subst",
    variants: [
      { begin: /\$\w+/ },
      {
        begin: /\{\$/,
        end: /\}/
      }
    ]
  }, c = e.inherit(e.APOS_STRING_MODE, { illegal: null }), d = e.inherit(e.QUOTE_STRING_MODE, {
    illegal: null,
    contains: e.QUOTE_STRING_MODE.contains.concat(a)
  }), f = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(a),
    "on:begin": (B, z) => {
      z.data._beginMatch = B[1] || B[2];
    },
    "on:end": (B, z) => {
      z.data._beginMatch !== B[1] && z.ignoreMatch();
    }
  }, p = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), b = `[ 	
]`, l = {
    scope: "string",
    variants: [
      d,
      c,
      f,
      p
    ]
  }, g = {
    scope: "number",
    variants: [
      { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
      // Binary w/ underscore support
      { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
      // Octals w/ underscore support
      { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
      // Hex w/ underscore support
      // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
      { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
    ],
    relevance: 0
  }, m = [
    "false",
    "null",
    "true"
  ], w = [
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    "__CLASS__",
    "__DIR__",
    "__FILE__",
    "__FUNCTION__",
    "__COMPILER_HALT_OFFSET__",
    "__LINE__",
    "__METHOD__",
    "__NAMESPACE__",
    "__TRAIT__",
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    "die",
    "echo",
    "exit",
    "include",
    "include_once",
    "print",
    "require",
    "require_once",
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    "array",
    "abstract",
    "and",
    "as",
    "binary",
    "bool",
    "boolean",
    "break",
    "callable",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "do",
    "double",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "enum",
    "eval",
    "extends",
    "final",
    "finally",
    "float",
    "for",
    "foreach",
    "from",
    "global",
    "goto",
    "if",
    "implements",
    "instanceof",
    "insteadof",
    "int",
    "integer",
    "interface",
    "isset",
    "iterable",
    "list",
    "match|0",
    "mixed",
    "new",
    "never",
    "object",
    "or",
    "private",
    "protected",
    "public",
    "readonly",
    "real",
    "return",
    "string",
    "switch",
    "throw",
    "trait",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield"
  ], _ = [
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    "Error|0",
    "AppendIterator",
    "ArgumentCountError",
    "ArithmeticError",
    "ArrayIterator",
    "ArrayObject",
    "AssertionError",
    "BadFunctionCallException",
    "BadMethodCallException",
    "CachingIterator",
    "CallbackFilterIterator",
    "CompileError",
    "Countable",
    "DirectoryIterator",
    "DivisionByZeroError",
    "DomainException",
    "EmptyIterator",
    "ErrorException",
    "Exception",
    "FilesystemIterator",
    "FilterIterator",
    "GlobIterator",
    "InfiniteIterator",
    "InvalidArgumentException",
    "IteratorIterator",
    "LengthException",
    "LimitIterator",
    "LogicException",
    "MultipleIterator",
    "NoRewindIterator",
    "OutOfBoundsException",
    "OutOfRangeException",
    "OuterIterator",
    "OverflowException",
    "ParentIterator",
    "ParseError",
    "RangeException",
    "RecursiveArrayIterator",
    "RecursiveCachingIterator",
    "RecursiveCallbackFilterIterator",
    "RecursiveDirectoryIterator",
    "RecursiveFilterIterator",
    "RecursiveIterator",
    "RecursiveIteratorIterator",
    "RecursiveRegexIterator",
    "RecursiveTreeIterator",
    "RegexIterator",
    "RuntimeException",
    "SeekableIterator",
    "SplDoublyLinkedList",
    "SplFileInfo",
    "SplFileObject",
    "SplFixedArray",
    "SplHeap",
    "SplMaxHeap",
    "SplMinHeap",
    "SplObjectStorage",
    "SplObserver",
    "SplPriorityQueue",
    "SplQueue",
    "SplStack",
    "SplSubject",
    "SplTempFileObject",
    "TypeError",
    "UnderflowException",
    "UnexpectedValueException",
    "UnhandledMatchError",
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    "ArrayAccess",
    "BackedEnum",
    "Closure",
    "Fiber",
    "Generator",
    "Iterator",
    "IteratorAggregate",
    "Serializable",
    "Stringable",
    "Throwable",
    "Traversable",
    "UnitEnum",
    "WeakReference",
    "WeakMap",
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    "Directory",
    "__PHP_Incomplete_Class",
    "parent",
    "php_user_filter",
    "self",
    "static",
    "stdClass"
  ], E = {
    keyword: w,
    literal: ((B) => {
      const z = [];
      return B.forEach((W) => {
        z.push(W), W.toLowerCase() === W ? z.push(W.toUpperCase()) : z.push(W.toLowerCase());
      }), z;
    })(m),
    built_in: _
  }, k = (B) => B.map((z) => z.replace(/\|\d+$/, "")), A = { variants: [
    {
      match: [
        /new/,
        t.concat(b, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", k(_).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, R = t.concat(u, "\\b(?!\\()"), N = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        R
      ],
      scope: { 2: "variable.constant" }
    },
    {
      match: [
        /::/,
        /class/
      ],
      scope: { 2: "variable.language" }
    },
    {
      match: [
        r,
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        R
      ],
      scope: {
        1: "title.class",
        3: "variable.constant"
      }
    },
    {
      match: [
        r,
        t.concat(
          "::",
          t.lookahead(/(?!class\b)/)
        )
      ],
      scope: { 1: "title.class" }
    },
    {
      match: [
        r,
        /::/,
        /class/
      ],
      scope: {
        1: "title.class",
        3: "variable.language"
      }
    }
  ] }, J = {
    scope: "attr",
    match: t.concat(u, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, L = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: E,
    contains: [
      J,
      i,
      N,
      e.C_BLOCK_COMMENT_MODE,
      l,
      g,
      A
    ]
  }, P = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", k(w).join("\\b|"), "|", k(_).join("\\b|"), "\\b)"),
      u,
      t.concat(b, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [L]
  };
  L.contains.push(P);
  const Y = [
    J,
    N,
    e.C_BLOCK_COMMENT_MODE,
    l,
    g,
    A
  ], K = {
    begin: t.concat(
      /#\[\s*\\?/,
      t.either(
        r,
        o
      )
    ),
    beginScope: "meta",
    end: /]/,
    endScope: "meta",
    keywords: {
      literal: m,
      keyword: [
        "new",
        "array"
      ]
    },
    contains: [
      {
        begin: /\[/,
        end: /]/,
        keywords: {
          literal: m,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...Y
        ]
      },
      ...Y,
      {
        scope: "meta",
        variants: [
          { match: r },
          { match: o }
        ]
      }
    ]
  };
  return {
    case_insensitive: !1,
    keywords: E,
    contains: [
      K,
      e.HASH_COMMENT_MODE,
      e.COMMENT("//", "$"),
      e.COMMENT(
        "/\\*",
        "\\*/",
        { contains: [
          {
            scope: "doctag",
            match: "@[A-Za-z]+"
          }
        ] }
      ),
      {
        match: /__halt_compiler\(\);/,
        keywords: "__halt_compiler",
        starts: {
          scope: "comment",
          end: e.MATCH_NOTHING_RE,
          contains: [
            {
              match: /\?>/,
              scope: "meta",
              endsParent: !0
            }
          ]
        }
      },
      s,
      {
        scope: "variable.language",
        match: /\$this\b/
      },
      i,
      P,
      N,
      {
        match: [
          /const/,
          /\s/,
          u
        ],
        scope: {
          1: "keyword",
          3: "variable.constant"
        }
      },
      A,
      {
        scope: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [
          { beginKeywords: "use" },
          e.UNDERSCORE_TITLE_MODE,
          {
            begin: "=>",
            // No markup, just a relevance booster
            endsParent: !0
          },
          {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: E,
            contains: [
              "self",
              K,
              i,
              N,
              e.C_BLOCK_COMMENT_MODE,
              l,
              g
            ]
          }
        ]
      },
      {
        scope: "class",
        variants: [
          {
            beginKeywords: "enum",
            illegal: /[($"]/
          },
          {
            beginKeywords: "class interface trait",
            illegal: /[:($"]/
          }
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [
          { beginKeywords: "extends implements" },
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      // both use and namespace still use "old style" rules (vs multi-match)
      // because the namespace name can include `\` and we still want each
      // element to be treated as its own *individual* title
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [
          // TODO: title.function vs title.class
          {
            match: /\b(as|const|function)\b/,
            scope: "keyword"
          },
          // TODO: could be title.class or title.function
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      l,
      g
    ]
  };
}
je.registerLanguage("javascript", p1);
je.registerLanguage("typescript", g1);
je.registerLanguage("python", m1);
je.registerLanguage("bash", _1);
je.registerLanguage("json", x1);
je.registerLanguage("xml", Bs);
je.registerLanguage("html", Bs);
je.registerLanguage("css", D1);
je.registerLanguage("markdown", T1);
je.registerLanguage("php", R1);
const qr = new ze({
  html: !0,
  linkify: !0,
  typographer: !0,
  highlight: function(e, t) {
    if (t && je.getLanguage(t))
      try {
        return je.highlight(e, { language: t }).value;
      } catch {
      }
    return "";
  }
});
qr.renderer.rules.fence = function(e, t, n, u, r) {
  const o = e[t];
  return `<pre><code class="hljs language-${o.info.trim()}">${o.content}</code></pre>`;
};
qr.renderer.rules.code_inline = function(e, t, n, u, r) {
  return `<code class="inline-code">${e[t].content}</code>`;
};
function iu(e) {
  return qr.render(e);
}
const F1 = {
  messages: [],
  isLoading: !1,
  chats: [],
  currentChatId: null,
  showHistory: !1,
  selectedProducts: [],
  selectedDocType: "user-docs",
  error: null
}, re = Tr(F1);
Rr(
  re,
  (e) => e.chats.find((t) => t.id === e.currentChatId)
);
Rr(
  re,
  (e) => e.messages.map((t) => ({
    ...t,
    message: t.role === "ai" ? iu(t.message) : t.message
  }))
);
Rr(re, (e) => [...e.chats].sort(
  (t, n) => new Date(n.created_at).getTime() - new Date(t.created_at).getTime()
));
const Su = async (e, t) => {
  re.update((n) => ({ ...n, isLoading: !0, error: null }));
  try {
    await e();
  } catch (n) {
    console.error(t, n), re.update((u) => ({ ...u, error: t }));
  } finally {
    re.update((n) => ({ ...n, isLoading: !1 }));
  }
}, Ps = async (e) => {
  await Su(async () => {
    const { data: t } = await Qt.get(`/chats/${e}`);
    t.chats && re.update((n) => ({ ...n, chats: t.chats }));
  }, "Failed to load chats");
}, O1 = async (e) => {
  await Su(async () => {
    const { data: t } = await Qt.get(`/chat/${e}`);
    t.messages && re.update((n) => ({
      ...n,
      messages: t.messages.map((u) => ({
        ...u,
        message: u.role === "ai" ? iu(u.message) : u.message
      }))
    }));
  }, "Failed to load messages");
}, N1 = async (e) => {
  re.update((t) => ({ ...t, currentChatId: (e == null ? void 0 : e.id) || null })), e ? await O1(e.id) : zs();
}, M1 = async (e) => {
  if (!e.trim()) return;
  const t = Fi(re);
  t.isLoading || await Su(async () => {
    const n = t.currentChatId || "", u = {
      id: Date.now().toString(),
      chat_id: n,
      role: "human",
      message: e,
      context: null,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    }, r = {
      id: "streaming",
      chat_id: n,
      role: "ai",
      message: "",
      context: null,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    re.update((d) => ({
      ...d,
      messages: [...d.messages, u, r]
    }));
    const o = localStorage.getItem("userId"), i = {
      message: e,
      doc_names: t.selectedProducts,
      doc_types: t.selectedDocType === "all" ? ["user-docs", "developer-docs"] : [t.selectedDocType],
      user_id: o,
      chat_id: n
    };
    let s = "", a = "";
    if ((await Qt.post("/chat", i, {
      responseType: "text",
      headers: {
        Accept: "text/event-stream"
      },
      onDownloadProgress: (d) => {
        var l, g;
        const f = ((g = (l = d.event) == null ? void 0 : l.target) == null ? void 0 : g.responseText) || "";
        if (!f || f === s) return;
        const p = f.slice(s.length);
        s = f;
        const b = p.split(`
`);
        for (const m of b) {
          if (!m.trim() || !m.startsWith("data:")) continue;
          const w = m.replace("data:", "").trim();
          if (w)
            try {
              const _ = JSON.parse(w);
              re.update((v) => {
                const E = v.messages.find((k) => k.id === "streaming");
                if (!E) return v;
                if (Array.isArray(_))
                  return {
                    ...v,
                    messages: v.messages.map(
                      (k) => k.id === "streaming" ? {
                        ...k,
                        context: _.map((A) => ({
                          id: A.id,
                          title: A.title,
                          website_url: A.website_url
                        }))
                      } : k
                    )
                  };
                if (typeof _ == "string")
                  return a += _, {
                    ...v,
                    messages: v.messages.map(
                      (k) => k.id === "streaming" ? {
                        ...k,
                        message: iu(a)
                      } : k
                    )
                  };
                if ("chat_id" in _)
                  return v.currentChatId || Ps(o), v;
                if ("done" in _ && _.done) {
                  const k = {
                    id: Date.now().toString(),
                    chat_id: n,
                    role: "ai",
                    message: iu(a),
                    context: E.context,
                    created_at: (/* @__PURE__ */ new Date()).toISOString()
                  };
                  return {
                    ...v,
                    messages: v.messages.map(
                      (A) => A.id === "streaming" ? k : A
                    )
                  };
                }
                if ("error" in _)
                  throw new Error(_.error);
                return v;
              });
            } catch (_) {
              if (console.error("Error parsing SSE data:", _), _ instanceof Error && _.message !== "Error parsing SSE data:")
                throw _;
            }
        }
      }
    })).status !== 200)
      throw new Error("Failed to send message");
  }, "Failed to send message. Please try again.");
}, zs = () => {
  re.update((e) => ({
    ...e,
    messages: [],
    currentChatId: null
  }));
}, Pt = () => {
  re.update((e) => ({
    ...e,
    showHistory: !e.showHistory
  }));
}, I1 = async (e) => {
  await Su(async () => {
    if ((await Qt.delete(`/chat/${e}`)).data.success)
      re.update((n) => ({
        ...n,
        chats: n.chats.filter((u) => u.id !== e),
        messages: n.currentChatId === e ? [] : n.messages,
        currentChatId: n.currentChatId === e ? null : n.currentChatId
      }));
    else
      throw new Error("Failed to delete chat");
  }, "Failed to delete chat");
}, Wo = (e) => {
  re.update((t) => t.selectedProducts.includes(e) ? t : {
    ...t,
    selectedProducts: [...t.selectedProducts, e]
  });
}, Yu = (e) => {
  re.update((t) => ({
    ...t,
    selectedProducts: t.selectedProducts.filter((n) => n !== e)
  }));
}, Ko = (e) => {
  re.update((t) => ({
    ...t,
    selectedProducts: e
  }));
}, Vo = (e) => {
  re.update((t) => ({
    ...t,
    selectedDocType: e
  }));
}, L1 = () => {
  re.update((e) => ({
    ...e,
    selectedProducts: [],
    selectedDocType: "user-docs"
  }));
};
function B1() {
  const { subscribe: e, set: t } = Tr({
    userId: null
  });
  function n() {
    const u = localStorage.getItem("userId");
    if (u)
      t({ userId: u });
    else {
      const r = crypto.randomUUID();
      localStorage.setItem("userId", r), t({ userId: r });
    }
  }
  return {
    subscribe: e,
    initializeUser: n
  };
}
const js = B1();
qa();
var P1 = /* @__PURE__ */ ue('<div class="loading-container svelte-1bjcpcn"><div class="loading-content svelte-1bjcpcn"><div class="loading-dots svelte-1bjcpcn"><div class="dot dot-1 svelte-1bjcpcn"></div> <div class="dot dot-2 svelte-1bjcpcn"></div> <div class="dot dot-3 svelte-1bjcpcn"></div></div> <p class="loading-text svelte-1bjcpcn">Loading chat history...</p></div></div>'), z1 = /* @__PURE__ */ ue('<div class="empty-state svelte-1bjcpcn"><div class="empty-message svelte-1bjcpcn">No chats found</div></div>'), j1 = /* @__PURE__ */ ue('<div role="button" tabindex="0" class="chat-item svelte-1bjcpcn"><div class="chat-item-content svelte-1bjcpcn"><div class="chat-info svelte-1bjcpcn"><h3 class="chat-title svelte-1bjcpcn"> </h3> <p class="chat-date svelte-1bjcpcn"> </p></div> <button type="button" class="delete-button svelte-1bjcpcn" aria-label="Delete chat"><svg xmlns="http://www.w3.org/2000/svg" class="delete-icon svelte-1bjcpcn" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" class="svelte-1bjcpcn"></path></svg></button></div></div>'), U1 = /* @__PURE__ */ ue('<div class="chat-list svelte-1bjcpcn"><!></div>'), q1 = /* @__PURE__ */ ue('<div class="history-container svelte-1bjcpcn"><!></div>');
const $1 = {
  hash: "svelte-1bjcpcn",
  code: `.history-container.svelte-1bjcpcn {flex:1;display:flex;flex-direction:column;height:calc(100vh - 64px);background-color:white;}.loading-container.svelte-1bjcpcn {flex:1;display:flex;align-items:center;justify-content:center;min-height:400px;}.loading-content.svelte-1bjcpcn {display:flex;flex-direction:column;align-items:center;gap:0.75rem;}.loading-dots.svelte-1bjcpcn {display:flex;gap:0.5rem;}.dot.svelte-1bjcpcn {width:0.75rem;height:0.75rem;background-color:#2563eb; /* bg-blue-600 */border-radius:9999px; /* rounded-full */
    animation: svelte-1bjcpcn-bounce 1s infinite;}.dot-1.svelte-1bjcpcn {animation-delay:0s;}.dot-2.svelte-1bjcpcn {animation-delay:0.2s;}.dot-3.svelte-1bjcpcn {animation-delay:0.4s;}

  @keyframes svelte-1bjcpcn-bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }.loading-text.svelte-1bjcpcn {color:#6b7280; /* text-gray-500 */}.chat-list.svelte-1bjcpcn {flex:1;overflow-y:auto;padding:1.25rem;display:flex;flex-direction:column;gap:0.75rem;background-color:#f9fafb;}.empty-state.svelte-1bjcpcn {display:flex;align-items:center;justify-content:center;min-height:400px;color:#6b7280;font-size:0.95rem;}.empty-message.svelte-1bjcpcn {text-align:center;padding:2rem;background-color:white;border-radius:1rem;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);border:1px solid #e5e7eb;}.chat-item.svelte-1bjcpcn {padding:1.25rem;background-color:white;border:1px solid #e5e7eb;border-radius:0.75rem;cursor:pointer;transition:all 0.2s ease;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);}.chat-item.svelte-1bjcpcn:hover {background-color:#f8fafc;border-color:#d1d5db;transform:translateY(-1px);box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);}.chat-item-content.svelte-1bjcpcn {display:flex;justify-content:space-between;align-items:center;gap:1rem;}.chat-info.svelte-1bjcpcn {flex:1;min-width:0; /* Ensure text truncation works */}.chat-title.svelte-1bjcpcn {font-weight:600;color:#1f2937;margin:0 0 0.25rem 0;font-size:0.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.chat-date.svelte-1bjcpcn {font-size:0.8rem;color:#6b7280;margin:0;}.delete-button.svelte-1bjcpcn {padding:0.5rem;color:#9ca3af;border-radius:9999px;background:transparent;border:none;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;justify-content:center;}.delete-button.svelte-1bjcpcn:hover {color:#ef4444;background-color:#fee2e2;}.delete-icon.svelte-1bjcpcn {width:1.25rem;height:1.25rem;}`
};
function H1(e, t) {
  Wt(t, !1), _n(e, $1);
  const [n, u] = bu(), r = () => cn(js, "$userStore", n), o = () => cn(re, "$chatStore", n);
  gu(() => {
    const l = r().userId;
    l && Ps(l);
  });
  function i(l) {
    N1(l), jc(re, vt(o).showHistory = !1, vt(o));
  }
  function s(l, g) {
    l.stopPropagation(), I1(g);
  }
  function a(l) {
    return new Date(l).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    });
  }
  function c(l, g) {
    (l.key === "Enter" || l.key === " ") && (l.preventDefault(), g());
  }
  Sr();
  var d = q1(), f = H(d);
  {
    var p = (l) => {
      var g = P1();
      Q(l, g);
    }, b = (l) => {
      var g = U1(), m = H(g);
      {
        var w = (v) => {
          var E = z1();
          Q(v, E);
        }, _ = (v) => {
          var E = Cr(), k = on(E);
          jt(k, 1, () => o().chats, (A) => A.id, (A, R) => {
            var N = j1(), J = H(N), L = H(J), P = H(L), Y = H(P), K = le(P, 2), B = H(K), z = le(L, 2);
            Be(
              (W) => {
                rt(Y, T(R).title), rt(B, W);
              },
              [
                () => a(T(R).created_at)
              ],
              qt
            ), De("click", z, (W) => s(W, T(R).id)), De("click", N, () => i(T(R))), De("keydown", N, (W) => c(W, () => i(T(R)))), Q(A, N);
          }), Q(v, E);
        };
        we(m, (v) => {
          o().chats.length === 0 ? v(w) : v(_, !1);
        });
      }
      Q(l, g);
    };
    we(f, (l) => {
      o().isLoading ? l(p) : l(b, !1);
    });
  }
  Q(e, d), Kt(), u();
}
var G1 = /* @__PURE__ */ ue("<span>U</span>"), Z1 = /* @__PURE__ */ ue("<span>B</span>"), W1 = /* @__PURE__ */ ue('<div class="message-text svelte-1vcdwqo"> </div>'), K1 = /* @__PURE__ */ ue('<div class="markdown-content"><!></div>'), V1 = /* @__PURE__ */ ue('<a target="_blank" rel="noopener noreferrer" class="source-link svelte-1vcdwqo"><svg class="link-icon svelte-1vcdwqo" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> </a>'), J1 = /* @__PURE__ */ ue('<div class="context-links svelte-1vcdwqo"><div class="context-label svelte-1vcdwqo">Sources:</div> <!></div>'), Y1 = /* @__PURE__ */ ue('<div><div><div class="avatar svelte-1vcdwqo"><!></div> <div class="bubble-container svelte-1vcdwqo"><div><!></div> <!> <div> </div></div></div></div>');
const X1 = {
  hash: "svelte-1vcdwqo",
  code: `.message-container.svelte-1vcdwqo {display:flex;margin-bottom:1rem;padding:0 0.5rem;}.user-message.svelte-1vcdwqo {justify-content:flex-end;}.bot-message.svelte-1vcdwqo {justify-content:flex-start;}.message-content.svelte-1vcdwqo {display:flex;align-items:flex-start;gap:0.5rem;max-width:85%;}.user-content.svelte-1vcdwqo {flex-direction:row-reverse;}.bot-content.svelte-1vcdwqo {flex-direction:row;}.avatar.svelte-1vcdwqo {width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;flex-shrink:0;}.user-message.svelte-1vcdwqo .avatar:where(.svelte-1vcdwqo) {background-color:#3b82f6; /* bg-blue-500 */}.bot-message.svelte-1vcdwqo .avatar:where(.svelte-1vcdwqo) {background-color:#10b981; /* bg-emerald-500 */}.bubble-container.svelte-1vcdwqo {max-width:100%;}.message-bubble.svelte-1vcdwqo {padding:0.625rem 1rem;border-radius:1.25rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);position:relative;line-height:1.5;display:flex;flex-direction:column;}.user-bubble.svelte-1vcdwqo {background-color:#3b82f6; /* bg-blue-500 */color:white;border-top-right-radius:0.25rem;}.bot-bubble.svelte-1vcdwqo {background-color:#ffffff; /* white */color:#1f2937; /* text-gray-800 */border-top-left-radius:0.25rem;border:1px solid #e5e7eb; /* border-gray-200 */}.message-text.svelte-1vcdwqo {white-space:pre-wrap;word-break:break-word;font-size:0.95rem;margin:0;padding:0;}.context-links.svelte-1vcdwqo {margin-top:0.5rem;padding-top:0.5rem;border-top:1px solid rgba(0, 0, 0, 0.05);}.context-label.svelte-1vcdwqo {font-size:0.75rem;color:#6b7280; /* text-gray-500 */margin-bottom:0.5rem;font-weight:500;}.source-link.svelte-1vcdwqo {display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;color:#2563eb; /* text-blue-600 */text-decoration:none;padding:0.25rem 0;transition:color 0.2s;}.source-link.svelte-1vcdwqo:hover {color:#1d4ed8; /* text-blue-700 */}.link-icon.svelte-1vcdwqo {width:1rem;height:1rem;}.timestamp.svelte-1vcdwqo {font-size:0.75rem;color:#6b7280; /* text-gray-500 */margin-top:0.25rem;}.user-timestamp.svelte-1vcdwqo {text-align:right;}.bot-timestamp.svelte-1vcdwqo {text-align:left;}

  /* Global styles for markdown content */.markdown-content {font-size:0.95rem;line-height:1.5;color:inherit;}.markdown-content p {margin:0;color:inherit;}.markdown-content p + p {margin-top:1rem;}.markdown-content pre {margin:0.75rem 0;padding:1rem;border-radius:0.5rem;background-color:#f8fafc !important;overflow-x:auto;border:1px solid #e5e7eb;}.markdown-content pre code {color:#1f2937; /* text-gray-800 */font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;}.markdown-content code {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;}.markdown-content code.inline-code {background-color:#f3f4f6;padding:0.2rem 0.4rem;border-radius:0.25rem;font-size:0.875em;color:#dc2626;border:1px solid #e5e7eb;}.markdown-content ul,
  .markdown-content ol {margin:0.75rem 0;padding-left:1.5rem;}.markdown-content li {margin-bottom:0.5rem;}.markdown-content a {color:#2563eb;text-decoration:none;}.markdown-content a:hover {text-decoration:underline;}.markdown-content blockquote {margin:0.75rem 0;padding-left:1rem;border-left:4px solid #e5e7eb;color:#6b7280;}`
};
function Q1(e, t) {
  Wt(t, !1), _n(e, X1);
  let n = Mn(t, "content", 8), u = Mn(t, "type", 8), r = Mn(t, "timestamp", 8), o = Mn(t, "context", 8, null);
  const i = (A) => A.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  Sr();
  var s = Y1(), a = H(s), c = H(a), d = H(c);
  {
    var f = (A) => {
      var R = G1();
      Q(A, R);
    }, p = (A) => {
      var R = Z1();
      Q(A, R);
    };
    we(d, (A) => {
      u() === "user" ? A(f) : A(p, !1);
    });
  }
  var b = le(c, 2), l = H(b), g = H(l);
  {
    var m = (A) => {
      var R = W1(), N = H(R);
      Be(() => rt(N, n())), Q(A, R);
    }, w = (A) => {
      var R = K1(), N = H(R);
      Ti(N, n), Q(A, R);
    };
    we(g, (A) => {
      u() === "user" ? A(m) : A(w, !1);
    });
  }
  var _ = le(l, 2);
  {
    var v = (A) => {
      var R = J1(), N = le(H(R), 2);
      jt(N, 1, o, jn, (J, L) => {
        var P = V1(), Y = le(H(P));
        Be(() => {
          zt(P, "href", T(L).website_url), rt(Y, ` ${T(L).title ?? ""}`);
        }), Q(J, P);
      }), Q(A, R);
    };
    we(_, (A) => {
      o() && o().length > 0 && A(v);
    });
  }
  var E = le(_, 2), k = H(E);
  Be(
    (A) => {
      ot(s, 1, `message-container ${(u() === "user" ? "user-message" : "bot-message") ?? ""}`, "svelte-1vcdwqo"), ot(a, 1, `message-content ${(u() === "user" ? "user-content" : "bot-content") ?? ""}`, "svelte-1vcdwqo"), ot(l, 1, `message-bubble ${(u() === "user" ? "user-bubble" : "bot-bubble") ?? ""}`, "svelte-1vcdwqo"), ot(E, 1, `timestamp ${(u() === "user" ? "user-timestamp" : "bot-timestamp") ?? ""}`, "svelte-1vcdwqo"), rt(k, A);
    },
    [() => i(r())],
    qt
  ), Q(e, s), Kt();
}
const Jo = [
  { value: "fluentboards", label: "Fluent Boards" },
  { value: "fluentcrm", label: "Fluent CRM" },
  { value: "fluentforms", label: "Fluent Forms" },
  { value: "fluentbooking", label: "Fluent Booking" },
  { value: "fluentsupport", label: "Fluent Support" },
  { value: "fluentsmtp", label: "Fluent SMTP" },
  { value: "fluentcommunity", label: "Fluent Community" },
  { value: "ninjatables", label: "Ninja Tables" },
  { value: "paymattic", label: "Paymattic" },
  { value: "wpsocialninja", label: "WP Social Ninja" },
  { value: "wpmanageninja", label: "WP Manage Ninja" }
], Yo = [
  { value: "all", label: "All Documentation" },
  { value: "user-docs", label: "User Documentation" },
  { value: "developer-docs", label: "Developer Documentation" }
];
var eh = /* @__PURE__ */ Ac('<svg class="check-icon svelte-1rao7f8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), th = /* @__PURE__ */ ue('<button role="option"> <!></button>'), nh = /* @__PURE__ */ ue('<div class="dropdown-menu left svelte-1rao7f8" role="listbox" aria-label="Document type options" tabindex="0"><div class="dropdown-content svelte-1rao7f8"></div></div>'), uh = /* @__PURE__ */ ue('<button role="option"><div class="checkbox-label svelte-1rao7f8"><input type="checkbox" class="checkbox svelte-1rao7f8" readonly=""> <span class="checkbox-text svelte-1rao7f8"> </span></div></button>'), rh = /* @__PURE__ */ ue('<div class="dropdown-menu right svelte-1rao7f8" role="listbox" aria-label="Product selection options" tabindex="0"><div class="dropdown-content product-list svelte-1rao7f8"></div></div>'), oh = /* @__PURE__ */ ue('<div class="dropdown-container svelte-1rao7f8"><button class="filter-button svelte-1rao7f8" aria-haspopup="true"><span>Select Products</span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div>'), ih = /* @__PURE__ */ ue('<button class="tag-remove svelte-1rao7f8"><svg class="tag-icon svelte-1rao7f8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'), sh = /* @__PURE__ */ ue('<span class="tag svelte-1rao7f8" role="listitem"> <!></span>'), ah = /* @__PURE__ */ ue('<div class="tag-container svelte-1rao7f8" role="list"></div>'), ch = /* @__PURE__ */ ue('<div class="filter-container svelte-1rao7f8"><div class="filter-wrapper svelte-1rao7f8"><div class="dropdown-container svelte-1rao7f8"><button class="filter-button svelte-1rao7f8"><span> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div> <!></div> <!></div>');
const lh = {
  hash: "svelte-1rao7f8",
  code: `.filter-container.svelte-1rao7f8 {background-color:white;border-bottom:1px solid #e5e7eb; /* border-gray-200 */padding:0.5rem 1rem;}.filter-wrapper.svelte-1rao7f8 {display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;}.dropdown-container.svelte-1rao7f8 {position:relative;}.filter-button.svelte-1rao7f8 {display:flex;align-items:center;gap:0.5rem;padding:0.375rem 0.75rem;font-size:0.875rem;font-weight:500;color:#374151;background-color:#f3f4f6;border-radius:9999px;border:none;cursor:pointer;transition:background-color 0.2s;}.filter-button.svelte-1rao7f8:hover {background-color:#e5e7eb; /* bg-gray-200 */}.dropdown-icon.svelte-1rao7f8 {width:1rem;height:1rem;transition:transform 0.2s;}.dropdown-icon.rotate.svelte-1rao7f8 {transform:rotate(180deg);}.dropdown-menu.svelte-1rao7f8 {position:absolute;top:calc(100% + 0.5rem);background-color:white;border-radius:0.5rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);border:1px solid #e5e7eb;z-index:99999;min-width:200px;outline:none;}.dropdown-menu.svelte-1rao7f8:focus {outline:2px solid #2563eb;outline-offset:2px;}.dropdown-menu.left.svelte-1rao7f8 {left:0;}.dropdown-menu.right.svelte-1rao7f8 {right:0;width:16rem;}.dropdown-content.svelte-1rao7f8 {padding:0.5rem;max-height:300px;overflow-y:auto;}.product-list.svelte-1rao7f8 {max-height:20rem;overflow-y:auto;}.checkbox-item.svelte-1rao7f8 {display:flex;align-items:center;padding:0.5rem;border-radius:0.375rem;cursor:pointer;transition:all 0.2s;width:100%;border:none;background:transparent;text-align:left;}.checkbox-item.svelte-1rao7f8:hover {background-color:#f9fafb;}.checkbox-item.svelte-1rao7f8:focus {outline:2px solid #3b82f6;outline-offset:2px;}.checkbox-label.svelte-1rao7f8 {display:flex;align-items:center;gap:0.5rem;width:100%;user-select:none;}.checkbox.svelte-1rao7f8 {width:1rem;height:1rem;border-radius:0.25rem;border:2px solid #d1d5db;margin:0;transition:all 0.2s;position:relative;background-color:white;appearance:none;-webkit-appearance:none;cursor:pointer;}.checkbox.svelte-1rao7f8:checked {background-color:#3b82f6;border-color:#3b82f6;background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");background-size:140% 140%;background-position:center;background-repeat:no-repeat;}.checkbox.svelte-1rao7f8:hover {border-color:#3b82f6;}.checkbox.svelte-1rao7f8:focus {outline:2px solid #3b82f6;outline-offset:2px;}.checkbox-text.svelte-1rao7f8 {font-size:0.875rem;color:#374151;}.tag-container.svelte-1rao7f8 {margin-top:0.5rem;display:flex;flex-wrap:wrap;gap:0.5rem;padding:0.25rem 0;}.tag.svelte-1rao7f8 {display:inline-flex;align-items:center;gap:0.25rem;padding:0.25rem 0.5rem;border-radius:0.375rem;background-color:#eff6ff;color:#2563eb;font-size:0.75rem;line-height:1;transition:all 0.2s;}.tag.svelte-1rao7f8:hover {background-color:#dbeafe;}.tag-remove.svelte-1rao7f8 {display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;color:inherit;cursor:pointer;padding:0;width:1rem;height:1rem;transition:color 0.2s;}.tag-remove.svelte-1rao7f8:hover {color:#1e40af;}.tag-icon.svelte-1rao7f8 {width:0.75rem;height:0.75rem;flex-shrink:0;}.dropdown-item.svelte-1rao7f8 {display:flex;align-items:center;width:100%;padding:0.5rem;text-align:left;font-size:0.875rem;color:#374151;border-radius:0.375rem;border:none;background:transparent;cursor:pointer;}.dropdown-item.svelte-1rao7f8:hover {background-color:#f9fafb;}.dropdown-item.selected.svelte-1rao7f8 {background-color:#eff6ff;color:#1d4ed8;}.dropdown-item.svelte-1rao7f8:focus {outline:2px solid #2563eb;outline-offset:2px;}.check-icon.svelte-1rao7f8 {width:1rem;height:1rem;margin-left:auto;}`
};
function dh(e, t) {
  Wt(t, !1), _n(e, lh);
  const [n, u] = bu(), r = () => cn(re, "$chatStore", n), o = Mt();
  let i = Mt(!1), s = Mt(!1), a = Mt(), c = Mt(), d = Mt(!1);
  function f(L) {
    const P = L.target;
    T(a) && !T(a).contains(P) && ke(i, !1), T(c) && !T(c).contains(P) && ke(s, !1);
  }
  function p() {
    ke(i, !1), ke(s, !1);
  }
  gu(() => {
    const L = document.querySelector("fluent-ai-chatbot");
    if (L) {
      const P = (K) => {
        const B = K.detail.docNames;
        Array.isArray(B) && B.length > 0 && (ke(d, !0), Ko(B));
      }, Y = L.getAttribute("doc-names");
      if (Y)
        try {
          const K = JSON.parse(Y);
          Array.isArray(K) && K.length > 0 && (ke(d, !0), Ko(K));
        } catch (K) {
          console.error("Invalid doc-names format:", K);
        }
      return L.addEventListener("doc-names-changed", P), document.addEventListener("click", f, !0), L.addEventListener("click-outside", p), () => {
        L.removeEventListener("doc-names-changed", P), L.removeEventListener("click-outside", p), document.removeEventListener("click", f, !0);
      };
    }
  }), oc(() => r(), () => {
    var L;
    ke(o, ((L = Yo.find((P) => P.value === r().selectedDocType)) == null ? void 0 : L.label) || "Select Doc Type");
  }), ic(), Sr();
  var b = ch(), l = H(b), g = H(l), m = H(g), w = H(m), _ = H(w), v = le(w, 2), E = le(m, 2);
  {
    var k = (L) => {
      var P = nh(), Y = H(P);
      jt(Y, 5, () => Yo, jn, (K, B) => {
        var z = th(), W = H(z), ve = le(W);
        {
          var q = (X) => {
            var ee = eh();
            Q(X, ee);
          };
          we(ve, (X) => {
            r().selectedDocType === T(B).value && X(q);
          });
        }
        Be(() => {
          ot(z, 1, `dropdown-item ${(r().selectedDocType === T(B).value ? "selected" : "") ?? ""}`, "svelte-1rao7f8"), zt(z, "aria-selected", r().selectedDocType === T(B).value), rt(W, `${T(B).label ?? ""} `);
        }), De("click", z, qe(() => {
          Vo(T(B).value), ke(s, !1);
        })), De("keydown", z, qe((X) => {
          (X.key === "Enter" || X.key === " ") && (X.preventDefault(), Vo(T(B).value), ke(s, !1));
        })), Q(K, z);
      }), De("click", P, qe(function(K) {
        On.call(this, t, K);
      })), De("keydown", P, qe(function(K) {
        On.call(this, t, K);
      })), Q(L, P);
    };
    we(E, (L) => {
      T(s) && L(k);
    });
  }
  ur(g, (L) => ke(c, L), () => T(c));
  var A = le(g, 2);
  {
    var R = (L) => {
      var P = oh(), Y = H(P), K = le(H(Y), 2), B = le(Y, 2);
      {
        var z = (W) => {
          var ve = rh(), q = H(ve);
          jt(q, 5, () => Jo, jn, (X, ee) => {
            var pe = uh(), Oe = H(pe), Se = H(Oe), yt = le(Se, 2), Du = H(yt);
            Be(
              (wt, wn) => {
                ot(pe, 1, `checkbox-item ${wt ?? ""}`, "svelte-1rao7f8"), zt(pe, "aria-selected", wn), Lc(Se, wn), zt(Se, "aria-label", T(ee).label), rt(Du, T(ee).label);
              },
              [
                () => r().selectedProducts.includes(T(ee).value) ? "selected" : "",
                () => r().selectedProducts.includes(T(ee).value)
              ],
              qt
            ), De("click", pe, qe(() => {
              r().selectedProducts.includes(T(ee).value) ? Yu(T(ee).value) : Wo(T(ee).value);
            })), De("keydown", pe, qe((wt) => {
              (wt.key === "Enter" || wt.key === " ") && (wt.preventDefault(), r().selectedProducts.includes(T(ee).value) ? Yu(T(ee).value) : Wo(T(ee).value));
            })), Q(X, pe);
          }), De("click", ve, qe(function(X) {
            On.call(this, t, X);
          })), De("keydown", ve, qe(function(X) {
            On.call(this, t, X);
          })), Q(W, ve);
        };
        we(B, (W) => {
          T(i) && W(z);
        });
      }
      ur(P, (W) => ke(a, W), () => T(a)), Be(() => {
        zt(Y, "aria-expanded", T(i)), ot(K, 0, `dropdown-icon ${(T(i) ? "rotate" : "") ?? ""}`, "svelte-1rao7f8");
      }), De("click", Y, qe(() => {
        ke(i, !T(i));
      })), Q(L, P);
    };
    we(A, (L) => {
      T(d) || L(R);
    });
  }
  var N = le(l, 2);
  {
    var J = (L) => {
      var P = ah();
      jt(P, 5, () => r().selectedProducts, jn, (Y, K) => {
        var B = Cr();
        const z = /* @__PURE__ */ qt(() => Jo.find((q) => q.value === T(K)));
        var W = on(B);
        {
          var ve = (q) => {
            var X = sh(), ee = H(X), pe = le(ee);
            {
              var Oe = (Se) => {
                var yt = ih();
                Be(() => zt(yt, "aria-label", `Remove ${T(z).label ?? ""}`)), De("click", yt, qe(() => Yu(T(K)))), Q(Se, yt);
              };
              we(pe, (Se) => {
                T(d) || Se(Oe);
              });
            }
            Be(() => rt(ee, `${T(z).label ?? ""} `)), Q(q, X);
          };
          we(W, (q) => {
            T(z) && q(ve);
          });
        }
        Q(Y, B);
      }), Q(L, P);
    };
    we(N, (L) => {
      r().selectedProducts.length > 0 && L(J);
    });
  }
  Be(() => {
    rt(_, T(o)), ot(v, 0, `dropdown-icon ${(T(s) ? "rotate" : "") ?? ""}`, "svelte-1rao7f8");
  }), De("click", m, qe(() => ke(s, !T(s)))), Q(e, b), Kt(), u();
}
var fh = /* @__PURE__ */ ue('<div class="thinking svelte-jo0xtl"><span class="svelte-jo0xtl">Thinking</span> <span class="dots svelte-jo0xtl"><span class="dot dot-1 svelte-jo0xtl">.</span> <span class="dot dot-2 svelte-jo0xtl">.</span> <span class="dot dot-3 svelte-jo0xtl">.</span></span></div>'), hh = /* @__PURE__ */ ue('<div class="prose typing-animation svelte-jo0xtl"><!></div>'), ph = /* @__PURE__ */ ue('<div class="message-wrapper svelte-jo0xtl"><div class="message-content svelte-jo0xtl"><div class="avatar bot-avatar svelte-jo0xtl"><span class="svelte-jo0xtl">B</span></div> <div class="message-bubble svelte-jo0xtl"><!></div></div></div>'), bh = (e, t) => {
  e.key === "Enter" && !e.shiftKey && (e.preventDefault(), t());
}, gh = /* @__PURE__ */ ue('<div class="chat-container svelte-jo0xtl"><div class="filter-container svelte-jo0xtl"><!></div> <div class="messages-container svelte-jo0xtl"></div> <form class="input-container svelte-jo0xtl"><input type="text" placeholder="Type your message..." class="message-input svelte-jo0xtl"></form></div>');
const mh = {
  hash: "svelte-jo0xtl",
  code: `.chat-container.svelte-jo0xtl {height:100%;display:flex;flex-direction:column;}.filter-container.svelte-jo0xtl {flex-shrink:0;}.messages-container.svelte-jo0xtl {flex:1;overflow-y:auto;padding:1rem;background-color:#f9fafb; /* bg-gray-50 */display:flex;flex-direction:column;gap:1rem;}.message-wrapper.svelte-jo0xtl {display:flex;justify-content:flex-start;width:100%;padding-right:1rem; /* Add padding to prevent text from touching edge */}.message-content.svelte-jo0xtl {display:flex;gap:1rem;max-width:90%; /* Reduce from 95% to 90% to add more margin */}.avatar.svelte-jo0xtl {width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;flex-shrink:0;}.bot-avatar.svelte-jo0xtl {background-color:#10b981; /* bg-emerald-500 */}.message-bubble.svelte-jo0xtl {background-color:white;border:1px solid #e5e7eb; /* border-gray-200 */border-radius:0.5rem; /* rounded-lg */padding:1rem;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */word-wrap:break-word; /* Ensure text breaks properly */overflow-wrap:break-word; /* Modern browsers */width:100%; /* Ensure bubble takes full width of its container */max-width:100%; /* Limit width to prevent overflow */}.thinking.svelte-jo0xtl {display:flex;align-items:center;gap:0.5rem;color:#111827; /* text-gray-900 */}.dots.svelte-jo0xtl {display:flex;gap:0.25rem;}.dot.svelte-jo0xtl {
    animation: svelte-jo0xtl-bounce 1s infinite;}.dot-1.svelte-jo0xtl {animation-delay:0ms;}.dot-2.svelte-jo0xtl {animation-delay:150ms;}.dot-3.svelte-jo0xtl {animation-delay:300ms;}

  @keyframes svelte-jo0xtl-bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }.prose.svelte-jo0xtl {font-size:0.875rem; /* prose-sm */max-width:100%; /* Ensure content doesn't overflow */overflow-wrap:break-word;}.input-container.svelte-jo0xtl {flex-shrink:0;border-top:1px solid #e5e7eb; /* border-gray-200 */background-color:white;padding:1rem;width:100%;box-sizing:border-box;}.message-input.svelte-jo0xtl {width:100%;padding:0.5rem 1rem;border:1px solid #e5e7eb; /* border-gray-200 */border-radius:0.5rem; /* rounded-lg */box-sizing:border-box;max-width:100%;}.message-input.svelte-jo0xtl:focus {outline:none;border-color:#3b82f6; /* border-blue-500 */}

  /* Typing animation */
  @keyframes svelte-jo0xtl-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }.typing-animation.svelte-jo0xtl {
    animation: svelte-jo0xtl-typing 0.5s ease-in-out;}`
};
function _h(e, t) {
  Wt(t, !0), _n(e, mh);
  const [n, u] = bu(), r = () => cn(re, "$chatStore", n);
  let o = Ja(""), i, s = /* @__PURE__ */ pt(() => r().messages), a = /* @__PURE__ */ pt(() => r().isLoading);
  const c = () => {
    i && (i.scrollTop = i.scrollHeight);
  };
  sn(() => {
    T(s) && setTimeout(c, 100);
  }), gu(() => {
    c();
  }), sn(() => {
    c();
  });
  const d = async () => {
    if (!T(o).trim()) return;
    const w = T(o);
    ke(o, ""), await M1(w);
  };
  var f = gh(), p = H(f), b = H(p);
  dh(b, {});
  var l = le(p, 2);
  jt(l, 21, () => T(s), (w) => w.id, (w, _) => {
    var v = Cr(), E = on(v);
    {
      var k = (R) => {
        var N = ph(), J = H(N), L = le(H(J), 2), P = H(L);
        {
          var Y = (B) => {
            var z = fh();
            Q(B, z);
          }, K = (B) => {
            var z = hh(), W = H(z);
            Ti(W, () => T(_).message), Q(B, z);
          };
          we(P, (B) => {
            T(_).message ? B(K, !1) : B(Y);
          });
        }
        Q(R, N);
      }, A = (R) => {
        const N = /* @__PURE__ */ pt(() => T(_).role === "human" ? "user" : "bot"), J = /* @__PURE__ */ pt(() => new Date(T(_).created_at));
        Q1(R, {
          get content() {
            return T(_).message;
          },
          get type() {
            return T(N);
          },
          get timestamp() {
            return T(J);
          },
          get context() {
            return T(_).context;
          }
        });
      };
      we(E, (R) => {
        T(_).id === "streaming" ? R(k) : R(A, !1);
      });
    }
    Q(w, v);
  }), ur(l, (w) => i = w, () => i);
  var g = le(l, 2), m = H(g);
  m.__keydown = [bh, d], Be(() => m.disabled = T(a)), De("submit", g, (w) => {
    w.preventDefault(), d();
  }), Pc(m, () => T(o), (w) => ke(o, w)), Q(e, f), Kt(), u();
}
Di(["keydown"]);
var xh = /* @__PURE__ */ ue('<div class="title svelte-114vtvh">History</div> <button class="icon-button svelte-114vtvh" aria-label="Close history"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-114vtvh" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>', 1), vh = /* @__PURE__ */ ue('<div class="title svelte-114vtvh">Fluent ChatBot</div> <div class="button-group svelte-114vtvh"><button class="icon-button svelte-114vtvh" aria-label="Chat history"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-114vtvh" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg></button> <button class="icon-button svelte-114vtvh" aria-label="Refresh chat"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-114vtvh" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v4a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg></button></div>', 1), Eh = /* @__PURE__ */ ue('<main class="svelte-114vtvh"><header><!></header> <div class="content svelte-114vtvh"><!></div></main>');
const kh = {
  hash: "svelte-114vtvh",
  code: "main.svelte-114vtvh {height:100vh;display:flex;flex-direction:column;background-color:#f9fafb; /* gray-50 */overflow:hidden;}header.svelte-114vtvh {background-color:#2563eb; /* blue-600 */color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.history-header.svelte-114vtvh {background-color:#2563eb; /* blue-600 */color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.main-header.svelte-114vtvh {background-color:#2563eb; /* blue-600 */color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.title.svelte-114vtvh {font-size:1.5rem;font-weight:bold;}.button-group.svelte-114vtvh {margin-left:auto;display:flex;gap:0.5rem;}.icon-button.svelte-114vtvh {padding:0.5rem;border-radius:9999px;background:transparent;border:none;color:white;cursor:pointer;}.icon-button.svelte-114vtvh:hover {background-color:#1d4ed8; /* blue-700 */}button.svelte-114vtvh:last-child {margin-left:auto;}.icon.svelte-114vtvh {height:1.25rem;width:1.25rem;}.content.svelte-114vtvh {flex:1;overflow:hidden;}"
};
function yh(e, t) {
  Wt(t, !0), _n(e, kh);
  const [n, u] = bu(), r = () => cn(re, "$chatStore", n);
  let o = /* @__PURE__ */ pt(() => r().showHistory);
  gu(() => {
    js.initializeUser(), re.update((g) => ({
      ...g,
      messages: [
        {
          id: Date.now().toString(),
          chat_id: "",
          role: "ai",
          message: "Hi, I'm Fluent ChatBot assistant, ask me anything about Fluent products",
          formattedMessage: "Hi, I'm Fluent ChatBot assistant, ask me anything about Fluent products",
          context: null,
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]
    }));
  });
  var i = Eh(), s = H(i), a = H(s);
  {
    var c = (g) => {
      var m = xh(), w = le(on(m), 2);
      w.__click = function(..._) {
        Pt == null || Pt.apply(this, _);
      }, Q(g, m);
    }, d = (g) => {
      var m = vh(), w = le(on(m), 2), _ = H(w);
      _.__click = function(...E) {
        Pt == null || Pt.apply(this, E);
      };
      var v = le(_, 2);
      v.__click = () => {
        zs(), L1(), re.update((E) => ({
          ...E,
          messages: [
            {
              id: Date.now().toString(),
              chat_id: "",
              role: "ai",
              message: "Hi, I'm Fluent ChatBot assistant, ask me anything about Fluent products",
              formattedMessage: "Hi, I'm Fluent ChatBot assistant, ask me anything about Fluent products",
              context: null,
              created_at: (/* @__PURE__ */ new Date()).toISOString()
            }
          ]
        }));
      }, Q(g, m);
    };
    we(a, (g) => {
      T(o) ? g(c) : g(d, !1);
    });
  }
  var f = le(s, 2), p = H(f);
  {
    var b = (g) => {
      H1(g, {});
    }, l = (g) => {
      _h(g, {});
    };
    we(p, (g) => {
      T(o) ? g(b) : g(l, !1);
    });
  }
  Be(() => ot(s, 1, Mc(T(o) ? "history-header" : "main-header"), "svelte-114vtvh")), Q(e, i), Kt(), u();
}
Di(["click"]);
const wh = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-comment,.hljs-code,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}.markdown-content{font-size:1rem;line-height:1.6;color:#111827}.markdown-content p{margin-bottom:1rem;color:inherit}.markdown-content h1{font-size:2rem;font-weight:700;margin:2rem 0 1rem;color:inherit}.markdown-content h2{font-size:1.5rem;font-weight:600;margin:1.5rem 0 1rem;color:inherit}.markdown-content h3{font-size:1.25rem;font-weight:600;margin:1.25rem 0 .75rem;color:inherit}.markdown-content ul,.markdown-content ol{margin:1rem 0;padding-left:2rem;color:inherit}.markdown-content li{margin:.5rem 0}.markdown-content a{color:#2563eb;text-decoration:none;font-weight:500}.markdown-content a:hover{text-decoration:underline}.markdown-content blockquote{border-left:4px solid #e5e7eb;margin:1rem 0;padding:.5rem 1rem;color:#4b5563;background-color:#f9fafb}.markdown-content pre{margin:1rem 0;padding:1rem;border-radius:.5rem;background-color:#f8f9fa!important;overflow-x:auto;border:1px solid #e5e7eb}.markdown-content pre code{color:#374151!important;background:transparent!important}.markdown-content code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}.markdown-content code.inline-code{background-color:#f3f4f6;padding:.2rem .4rem;border-radius:.25rem;font-size:.875em;color:#dc2626;border:1px solid #e5e7eb}.markdown-content table{width:100%;margin:1rem 0;border-collapse:collapse}.markdown-content th,.markdown-content td{padding:.75rem;border:1px solid #e5e7eb;color:inherit}.markdown-content th{background-color:#f9fafb;font-weight:600;color:inherit}@media (prefers-color-scheme: dark){.markdown-content{color:#111827}.markdown-content blockquote{border-left-color:#e5e7eb;color:#4b5563;background-color:#f9fafb}.markdown-content code.inline-code{background-color:#f3f4f6;color:#dc2626;border-color:#e5e7eb}.markdown-content pre{background-color:#f8f9fa!important;border-color:#e5e7eb}.markdown-content pre code{color:#374151!important}.markdown-content th{background-color:#f9fafb}.markdown-content th,.markdown-content td{border-color:#e5e7eb}}html,body{height:100%;margin:0;overflow:hidden}`, Ah = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-comment,.hljs-code,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}.markdown-content{font-size:1rem;line-height:1.6;color:#111827}.markdown-content p{margin-bottom:1rem;color:inherit}.markdown-content h1{font-size:2rem;font-weight:700;margin:2rem 0 1rem;color:inherit}.markdown-content h2{font-size:1.5rem;font-weight:600;margin:1.5rem 0 1rem;color:inherit}.markdown-content h3{font-size:1.25rem;font-weight:600;margin:1.25rem 0 .75rem;color:inherit}.markdown-content ul,.markdown-content ol{margin:1rem 0;padding-left:2rem;color:inherit}.markdown-content li{margin:.5rem 0}.markdown-content a{color:#2563eb;text-decoration:none;font-weight:500}.markdown-content a:hover{text-decoration:underline}.markdown-content blockquote{border-left:4px solid #e5e7eb;margin:1rem 0;padding:.5rem 1rem;color:#4b5563;background-color:#f9fafb}.markdown-content pre{margin:1rem 0;padding:1rem;border-radius:.5rem;background-color:#f8f9fa!important;overflow-x:auto;border:1px solid #e5e7eb}.markdown-content pre code{color:#374151!important;background:transparent!important}.markdown-content code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}.markdown-content code.inline-code{background-color:#f3f4f6;padding:.2rem .4rem;border-radius:.25rem;font-size:.875em;color:#dc2626;border:1px solid #e5e7eb}.markdown-content table{width:100%;margin:1rem 0;border-collapse:collapse}.markdown-content th,.markdown-content td{padding:.75rem;border:1px solid #e5e7eb;color:inherit}.markdown-content th{background-color:#f9fafb;font-weight:600;color:inherit}@media (prefers-color-scheme: dark){.markdown-content{color:#111827}.markdown-content blockquote{border-left-color:#e5e7eb;color:#4b5563;background-color:#f9fafb}.markdown-content code.inline-code{background-color:#f3f4f6;color:#dc2626;border-color:#e5e7eb}.markdown-content pre{background-color:#f8f9fa!important;border-color:#e5e7eb}.markdown-content pre code{color:#374151!important}.markdown-content th{background-color:#f9fafb}.markdown-content th,.markdown-content td{border-color:#e5e7eb}}`;
class Ch extends HTMLElement {
  constructor() {
    super();
    Lu(this, "clickHandler");
    Lu(this, "isOpen", !1);
    this.attachShadow({ mode: "open" }), this.clickHandler = this.handleClickOutside.bind(this);
  }
  static get observedAttributes() {
    return ["doc-names"];
  }
  attributeChangedCallback(n, u, r) {
    if (n === "doc-names" && r !== u)
      try {
        const o = JSON.parse(r);
        Array.isArray(o) && this.dispatchEvent(new CustomEvent("doc-names-changed", {
          detail: { docNames: o },
          composed: !0,
          bubbles: !0
        }));
      } catch (o) {
        console.error("Invalid doc-names format:", o);
      }
  }
  handleClickOutside(n) {
    n.target, !n.composedPath().some(
      (o) => o === this || o instanceof HTMLElement && o.closest("fluent-ai-chatbot") === this
    ) && this.isOpen && (this.toggleWidget(), this.dispatchEvent(new CustomEvent("click-outside", {
      composed: !0,
      bubbles: !0
    })));
  }
  toggleWidget() {
    var r, o;
    this.isOpen = !this.isOpen;
    const n = (r = this.shadowRoot) == null ? void 0 : r.querySelector("#fluent-ai-chatbot");
    n && (this.isOpen ? (n.style.display = "flex", setTimeout(() => {
      n.style.opacity = "1", n.style.transform = "translateY(0) scale(1)";
    }, 0)) : (n.style.opacity = "0", n.style.transform = "translateY(20px) scale(0.95)", setTimeout(() => {
      n.style.display = "none";
    }, 300)));
    const u = (o = this.shadowRoot) == null ? void 0 : o.querySelector("#chat-button");
    u && u.classList.toggle("active", this.isOpen);
  }
  connectedCallback() {
    const n = this.getAttribute("doc-names");
    if (n)
      try {
        const u = JSON.parse(n);
        Array.isArray(u) && this.dispatchEvent(new CustomEvent("doc-names-changed", {
          detail: { docNames: u },
          composed: !0,
          bubbles: !0
        }));
      } catch (u) {
        console.error("Invalid doc-names format:", u);
      }
    if (this.shadowRoot) {
      const u = document.createElement("style");
      u.textContent = `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                
                :host {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 9999;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }

                #chat-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 3.5rem;
                    height: 3.5rem;
                    padding: 0;
                    background-color: #2563eb;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    transition: all 0.2s ease;
                    z-index: 10000;
                }

                #chat-button:hover {
                    background-color: #1d4ed8;
                    transform: translateY(-1px);
                }

                #chat-button.active {
                    background-color: #1e40af;
                }

                #chat-button .chat-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                    transition: transform 0.3s ease;
                    display: block;
                }

                #chat-button .close-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                    display: none;
                }

                #chat-button.active .chat-icon {
                    display: none;
                }

                #chat-button.active .close-icon {
                    display: block;
                }

                #fluent-ai-chatbot {
                    width: 400px;
                    height: 600px;
                    max-height: calc(100vh - 100px);
                    overflow: visible;
                    display: none;
                    flex-direction: column;
                    position: relative;
                    background: white;
                    border-radius: 1rem;
                    box-shadow: 
                        rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
                        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                    margin-bottom: 1rem;
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                    transform-origin: bottom right;
                    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                    overflow: hidden;
                }

                /* Ensure header has rounded top corners */
                :host ::slotted(header) {
                    border-top-left-radius: 1rem;
                    border-top-right-radius: 1rem;
                }

                /* Ensure the filter container has proper styling */
                :host ::slotted(.filter-container) {
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    background: white;
                }

                /* Add subtle border to the widget */
                #fluent-ai-chatbot::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 1rem;
                    pointer-events: none;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }

                /* Ensure dropdowns are visible */
                :host ::slotted(*) {
                    position: relative;
                }

                /* Ensure dropdowns are visible in shadow DOM */
                :host ::slotted(.dropdown-menu) {
                    position: absolute;
                    z-index: 99999;
                }

                ${wh}
                ${Ah}
            `, this.shadowRoot.appendChild(u);
      const r = document.createElement("button");
      r.id = "chat-button", r.innerHTML = `
                <svg class="chat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <svg class="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            `, r.addEventListener("click", () => this.toggleWidget());
      const o = document.createElement("div");
      o.id = "fluent-ai-chatbot", this.shadowRoot.appendChild(o), this.shadowRoot.appendChild(r), Cc(yh, {
        target: o
      }), document.addEventListener("click", this.clickHandler, !0);
    }
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.clickHandler, !0);
  }
}
customElements.define("fluent-ai-chatbot", Ch);
const Xo = () => {
  if (!document.querySelector("fluent-ai-chatbot")) {
    const e = document.createElement("fluent-ai-chatbot");
    document.body.appendChild(e);
  }
};
document.readyState === "complete" || document.readyState === "interactive" ? Xo() : document.addEventListener("DOMContentLoaded", Xo);
//# sourceMappingURL=fluent-ai-chatbot.js.map
