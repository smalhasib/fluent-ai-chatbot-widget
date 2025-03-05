var Ea = Object.defineProperty;
var ya = (e, t, u) => t in e ? Ea(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u;
var Dn = (e, t, u) => ya(e, typeof t != "symbol" ? t + "" : t, u);
var Uo = Array.isArray, ka = Array.prototype.indexOf, or = Array.from, $o = Object.defineProperty, jn = Object.getOwnPropertyDescriptor, jo = Object.getOwnPropertyDescriptors, Ho = Object.getPrototypeOf;
const mt = () => {
};
function wa(e) {
  return e();
}
function Pu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const qe = 2, Go = 4, en = 8, ir = 16, at = 32, lu = 64, zu = 128, Ie = 256, qu = 512, Ae = 1024, Et = 2048, Dt = 4096, ot = 8192, tn = 16384, Aa = 32768, sr = 65536, Ca = 1 << 17, Sa = 1 << 19, Zo = 1 << 20, Uu = Symbol("$state"), Da = Symbol("legacy props"), Ta = Symbol("");
function Wo(e) {
  return e === this.v;
}
function Ko(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Vo(e) {
  return !Ko(e, this.v);
}
function Ra(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Na() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ma(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function La() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ut = !1;
function Ba() {
  Ut = !0;
}
const ar = 1, cr = 2, Jo = 4, Pa = 8, za = 16, qa = 2, Ua = 1, $a = 2, ja = Symbol();
function Yo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let re = null;
function Jr(e) {
  re = e;
}
function $t(e, t = !1, u) {
  re = {
    p: re,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Ut && !t && (re.l = {
    s: null,
    u: null,
    r1: [],
    r2: eu(!1)
  });
}
function jt(e) {
  const t = re;
  if (t !== null) {
    const i = t.e;
    if (i !== null) {
      var u = oe, n = ee;
      t.e = null;
      try {
        for (var r = 0; r < i.length; r++) {
          var o = i[r];
          xt(o.effect), _t(o.reaction), dr(o.fn);
        }
      } finally {
        xt(u), _t(n);
      }
    }
    re = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function fu() {
  return !Ut || re !== null && re.l === null;
}
function eu(e, t) {
  var u = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Wo,
    rv: 0,
    wv: 0
  };
  return u;
}
function Ha(e) {
  return /* @__PURE__ */ Xo(eu(e));
}
// @__NO_SIDE_EFFECTS__
function lr(e, t = !1) {
  var n;
  const u = eu(e);
  return t || (u.equals = Vo), Ut && re !== null && re.l !== null && ((n = re.l).s ?? (n.s = [])).push(u), u;
}
function Yt(e, t = !1) {
  return /* @__PURE__ */ Xo(/* @__PURE__ */ lr(e, t));
}
// @__NO_SIDE_EFFECTS__
function Xo(e) {
  return ee !== null && !ze && (ee.f & qe) !== 0 && (Ye === null ? nc([e]) : Ye.push(e)), e;
}
function Se(e, t) {
  return ee !== null && !ze && fu() && (ee.f & (qe | ir)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ye === null || !Ye.includes(e)) && La(), Hn(e, t);
}
function Hn(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = hi(), Qo(e, Et), fu() && oe !== null && (oe.f & Ae) !== 0 && (oe.f & (at | lu)) === 0 && (tt === null ? rc([e]) : tt.push(e))), t;
}
function Qo(e, t) {
  var u = e.reactions;
  if (u !== null)
    for (var n = fu(), r = u.length, o = 0; o < r; o++) {
      var i = u[o], s = i.f;
      (s & Et) === 0 && (!n && i === oe || (Ue(i, t), (s & (Ae | Ie)) !== 0 && ((s & qe) !== 0 ? Qo(
        /** @type {Derived} */
        i,
        Dt
      ) : an(
        /** @type {Effect} */
        i
      ))));
    }
}
let Ga = !1;
var Yr, ei, ti, ui;
function Za() {
  if (Yr === void 0) {
    Yr = window, ei = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    ti = jn(t, "firstChild").get, ui = jn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function fr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return ti.call(e);
}
// @__NO_SIDE_EFFECTS__
function un(e) {
  return ui.call(e);
}
function $(e, t) {
  return /* @__PURE__ */ Ct(e);
}
function tu(e, t) {
  {
    var u = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ct(
        /** @type {Node} */
        e
      )
    );
    return u instanceof Comment && u.data === "" ? /* @__PURE__ */ un(u) : u;
  }
}
function de(e, t = 1, u = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ un(n);
  return n;
}
function Wa(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  var t = qe | Et, u = ee !== null && (ee.f & qe) !== 0 ? (
    /** @type {Derived} */
    ee
  ) : null;
  return oe === null || u !== null && (u.f & Ie) !== 0 ? t |= Ie : oe.f |= Zo, {
    ctx: re,
    deps: null,
    effects: null,
    equals: Wo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: u ?? oe
  };
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  const t = /* @__PURE__ */ ut(e);
  return t.equals = Vo, t;
}
function ni(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var u = 0; u < t.length; u += 1)
      it(
        /** @type {Effect} */
        t[u]
      );
  }
}
function Ka(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & qe) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Va(e) {
  var t, u = oe;
  xt(Ka(e));
  try {
    ni(e), t = bi(e);
  } finally {
    xt(u);
  }
  return t;
}
function ri(e) {
  var t = Va(e), u = (pt || (e.f & Ie) !== 0) && e.deps !== null ? Dt : Ae;
  Ue(e, u), e.equals(t) || (e.v = t, e.wv = hi());
}
function oi(e) {
  oe === null && ee === null && Oa(), ee !== null && (ee.f & Ie) !== 0 && oe === null && Fa(), pr && Ra();
}
function Ja(e, t) {
  var u = t.last;
  u === null ? t.last = t.first = e : (u.next = e, e.prev = u, t.last = e);
}
function Ht(e, t, u, n = !0) {
  var r = (e & lu) !== 0, o = oe, i = {
    ctx: re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Et,
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
  if (u)
    try {
      sn(i), i.f |= Aa;
    } catch (c) {
      throw it(i), c;
    }
  else t !== null && an(i);
  var s = u && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Zo | zu)) === 0;
  if (!s && !r && n && (o !== null && Ja(i, o), ee !== null && (ee.f & qe) !== 0)) {
    var a = (
      /** @type {Derived} */
      ee
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function ii(e) {
  const t = Ht(en, null, !1);
  return Ue(t, Ae), t.teardown = e, t;
}
function uu(e) {
  oi();
  var t = oe !== null && (oe.f & at) !== 0 && re !== null && !re.m;
  if (t) {
    var u = (
      /** @type {ComponentContext} */
      re
    );
    (u.e ?? (u.e = [])).push({
      fn: e,
      effect: oe,
      reaction: ee
    });
  } else {
    var n = dr(e);
    return n;
  }
}
function Ya(e) {
  return oi(), du(e);
}
function Xa(e) {
  const t = Ht(lu, e, !0);
  return (u = {}) => new Promise((n) => {
    u.outro ? $u(t, () => {
      it(t), n(void 0);
    }) : (it(t), n(void 0));
  });
}
function dr(e) {
  return Ht(Go, e, !1);
}
function Qa(e, t) {
  var u = (
    /** @type {ComponentContextLegacy} */
    re
  ), n = { effect: null, ran: !1 };
  u.l.r1.push(n), n.effect = du(() => {
    e(), !n.ran && (n.ran = !0, Se(u.l.r2, !0), st(t));
  });
}
function ec() {
  var e = (
    /** @type {ComponentContextLegacy} */
    re
  );
  du(() => {
    if (F(e.l.r2)) {
      for (var t of e.l.r1) {
        var u = t.effect;
        (u.f & Ae) !== 0 && Ue(u, Dt), Gt(u) && sn(u), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function du(e) {
  return Ht(en, e, !0);
}
function Ke(e, t = [], u = ut) {
  const n = t.map(u);
  return nn(() => e(...n.map(F)));
}
function nn(e, t = 0) {
  return Ht(en | ir | t, e, !0);
}
function Pt(e, t = !0) {
  return Ht(en | at, e, !0, t);
}
function si(e) {
  var t = e.teardown;
  if (t !== null) {
    const u = pr, n = ee;
    Xr(!0), _t(null);
    try {
      t.call(null);
    } finally {
      Xr(u), _t(n);
    }
  }
}
function ai(e, t = !1) {
  var u = e.first;
  for (e.first = e.last = null; u !== null; ) {
    var n = u.next;
    it(u, t), u = n;
  }
}
function tc(e) {
  for (var t = e.first; t !== null; ) {
    var u = t.next;
    (t.f & at) === 0 && it(t), t = u;
  }
}
function it(e, t = !0) {
  var u = !1;
  if ((t || (e.f & Sa) !== 0) && e.nodes_start !== null) {
    for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
      var o = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ un(n)
      );
      n.remove(), n = o;
    }
    u = !0;
  }
  ai(e, t && !u), Wu(e, 0), Ue(e, tn);
  var i = e.transitions;
  if (i !== null)
    for (const a of i)
      a.stop();
  si(e);
  var s = e.parent;
  s !== null && s.first !== null && ci(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ci(e) {
  var t = e.parent, u = e.prev, n = e.next;
  u !== null && (u.next = n), n !== null && (n.prev = u), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = u));
}
function $u(e, t) {
  var u = [];
  hr(e, u, !0), li(u, () => {
    it(e), t && t();
  });
}
function li(e, t) {
  var u = e.length;
  if (u > 0) {
    var n = () => --u || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function hr(e, t, u) {
  if ((e.f & ot) === 0) {
    if (e.f ^= ot, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || u) && t.push(i);
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & sr) !== 0 || (n.f & at) !== 0;
      hr(n, t, o ? u : !1), n = r;
    }
  }
}
function ju(e) {
  fi(e, !0);
}
function fi(e, t) {
  if ((e.f & ot) !== 0) {
    e.f ^= ot, (e.f & Ae) === 0 && (e.f ^= Ae), Gt(e) && (Ue(e, Et), an(e));
    for (var u = e.first; u !== null; ) {
      var n = u.next, r = (u.f & sr) !== 0 || (u.f & at) !== 0;
      fi(u, r ? t : !1), u = n;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
let Hu = [];
function uc() {
  var e = Hu;
  Hu = [], Pu(e);
}
function rn(e) {
  Hu.length === 0 && queueMicrotask(uc), Hu.push(e);
}
let Fu = !1, Gn = !1, Gu = null, Ou = !1, pr = !1;
function Xr(e) {
  pr = e;
}
let Nu = [];
let ee = null, ze = !1;
function _t(e) {
  ee = e;
}
let oe = null;
function xt(e) {
  oe = e;
}
let Ye = null;
function nc(e) {
  Ye = e;
}
let Ce = null, Oe = 0, tt = null;
function rc(e) {
  tt = e;
}
let di = 1, Zu = 0, pt = !1;
function hi() {
  return ++di;
}
function Gt(e) {
  var d;
  var t = e.f;
  if ((t & Et) !== 0)
    return !0;
  if ((t & Dt) !== 0) {
    var u = e.deps, n = (t & Ie) !== 0;
    if (u !== null) {
      var r, o, i = (t & qu) !== 0, s = n && oe !== null && !pt, a = u.length;
      if (i || s) {
        var c = (
          /** @type {Derived} */
          e
        ), f = c.parent;
        for (r = 0; r < a; r++)
          o = u[r], (i || !((d = o == null ? void 0 : o.reactions) != null && d.includes(c))) && (o.reactions ?? (o.reactions = [])).push(c);
        i && (c.f ^= qu), s && f !== null && (f.f & Ie) === 0 && (c.f ^= Ie);
      }
      for (r = 0; r < a; r++)
        if (o = u[r], Gt(
          /** @type {Derived} */
          o
        ) && ri(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!n || oe !== null && !pt) && Ue(e, Ae);
  }
  return !1;
}
function oc(e, t) {
  for (var u = t; u !== null; ) {
    if ((u.f & zu) !== 0)
      try {
        u.fn(e);
        return;
      } catch {
        u.f ^= zu;
      }
    u = u.parent;
  }
  throw Fu = !1, e;
}
function ic(e) {
  return (e.f & tn) === 0 && (e.parent === null || (e.parent.f & zu) === 0);
}
function on(e, t, u, n) {
  if (Fu) {
    if (u === null && (Fu = !1), ic(t))
      throw e;
    return;
  }
  u !== null && (Fu = !0);
  {
    oc(e, t);
    return;
  }
}
function pi(e, t, u = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      (o.f & qe) !== 0 ? pi(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (u ? Ue(o, Et) : (o.f & Ae) !== 0 && Ue(o, Dt), an(
        /** @type {Effect} */
        o
      ));
    }
}
function bi(e) {
  var b;
  var t = Ce, u = Oe, n = tt, r = ee, o = pt, i = Ye, s = re, a = ze, c = e.f;
  Ce = /** @type {null | Value[]} */
  null, Oe = 0, tt = null, pt = (c & Ie) !== 0 && (ze || !Ou || ee === null), ee = (c & (at | lu)) === 0 ? e : null, Ye = null, Jr(e.ctx), ze = !1, Zu++;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), d = e.deps;
    if (Ce !== null) {
      var h;
      if (Wu(e, Oe), d !== null && Oe > 0)
        for (d.length = Oe + Ce.length, h = 0; h < Ce.length; h++)
          d[Oe + h] = Ce[h];
      else
        e.deps = d = Ce;
      if (!pt)
        for (h = Oe; h < d.length; h++)
          ((b = d[h]).reactions ?? (b.reactions = [])).push(e);
    } else d !== null && Oe < d.length && (Wu(e, Oe), d.length = Oe);
    if (fu() && tt !== null && !ze && d !== null && (e.f & (qe | Dt | Et)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      tt.length; h++)
        pi(
          tt[h],
          /** @type {Effect} */
          e
        );
    return r !== null && Zu++, f;
  } finally {
    Ce = t, Oe = u, tt = n, ee = r, pt = o, Ye = i, Jr(s), ze = a;
  }
}
function sc(e, t) {
  let u = t.reactions;
  if (u !== null) {
    var n = ka.call(u, e);
    if (n !== -1) {
      var r = u.length - 1;
      r === 0 ? u = t.reactions = null : (u[n] = u[r], u.pop());
    }
  }
  u === null && (t.f & qe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ce === null || !Ce.includes(t)) && (Ue(t, Dt), (t.f & (Ie | qu)) === 0 && (t.f ^= qu), ni(
    /** @type {Derived} **/
    t
  ), Wu(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Wu(e, t) {
  var u = e.deps;
  if (u !== null)
    for (var n = t; n < u.length; n++)
      sc(e, u[n]);
}
function sn(e) {
  var t = e.f;
  if ((t & tn) === 0) {
    Ue(e, Ae);
    var u = oe, n = re, r = Ou;
    oe = e, Ou = !0;
    try {
      (t & ir) !== 0 ? tc(e) : ai(e), si(e);
      var o = bi(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = di;
      var i = e.deps, s;
    } catch (a) {
      on(a, e, u, n || e.ctx);
    } finally {
      Ou = r, oe = u;
    }
  }
}
function ac() {
  try {
    Na();
  } catch (e) {
    if (Gu !== null)
      on(e, Gu, null);
    else
      throw e;
  }
}
function cc() {
  try {
    for (var e = 0; Nu.length > 0; ) {
      e++ > 1e3 && ac();
      var t = Nu, u = t.length;
      Nu = [];
      for (var n = 0; n < u; n++) {
        var r = t[n];
        (r.f & Ae) === 0 && (r.f ^= Ae);
        var o = fc(r);
        lc(o);
      }
    }
  } finally {
    Gn = !1, Gu = null;
  }
}
function lc(e) {
  var t = e.length;
  if (t !== 0)
    for (var u = 0; u < t; u++) {
      var n = e[u];
      if ((n.f & (tn | ot)) === 0)
        try {
          Gt(n) && (sn(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? ci(n) : n.fn = null));
        } catch (r) {
          on(r, n, null, n.ctx);
        }
    }
}
function an(e) {
  Gn || (Gn = !0, queueMicrotask(cc));
  for (var t = Gu = e; t.parent !== null; ) {
    t = t.parent;
    var u = t.f;
    if ((u & (lu | at)) !== 0) {
      if ((u & Ae) === 0) return;
      t.f ^= Ae;
    }
  }
  Nu.push(t);
}
function fc(e) {
  for (var t = [], u = e.first; u !== null; ) {
    var n = u.f, r = (n & at) !== 0, o = r && (n & Ae) !== 0;
    if (!o && (n & ot) === 0) {
      if ((n & Go) !== 0)
        t.push(u);
      else if (r)
        u.f ^= Ae;
      else {
        var i = ee;
        try {
          ee = u, Gt(u) && sn(u);
        } catch (c) {
          on(c, u, null, u.ctx);
        } finally {
          ee = i;
        }
      }
      var s = u.first;
      if (s !== null) {
        u = s;
        continue;
      }
    }
    var a = u.parent;
    for (u = u.next; u === null && a !== null; )
      u = a.next, a = a.parent;
  }
  return t;
}
function F(e) {
  var t = e.f, u = (t & qe) !== 0;
  if (ee !== null && !ze) {
    Ye !== null && Ye.includes(e) && Ia();
    var n = ee.deps;
    e.rv < Zu && (e.rv = Zu, Ce === null && n !== null && n[Oe] === e ? Oe++ : Ce === null ? Ce = [e] : (!pt || !Ce.includes(e)) && Ce.push(e));
  } else if (u && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), o = r.parent;
    o !== null && (o.f & Ie) === 0 && (r.f ^= Ie);
  }
  return u && (r = /** @type {Derived} */
  e, Gt(r) && ri(r)), e.v;
}
function st(e) {
  var t = ze;
  try {
    return ze = !0, e();
  } finally {
    ze = t;
  }
}
const dc = -7169;
function Ue(e, t) {
  e.f = e.f & dc | t;
}
function hc(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Uu in e)
      Zn(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const u = e[t];
        typeof u == "object" && u && Uu in u && Zn(u);
      }
  }
}
function Zn(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Zn(e[n], t);
      } catch {
      }
    const u = Ho(e);
    if (u !== Object.prototype && u !== Array.prototype && u !== Map.prototype && u !== Set.prototype && u !== Date.prototype) {
      const n = jo(u);
      for (let r in n) {
        const o = n[r].get;
        if (o)
          try {
            o.call(e);
          } catch {
          }
      }
    }
  }
}
const pc = ["touchstart", "touchmove"];
function bc(e) {
  return pc.includes(e);
}
let Qr = !1;
function gc() {
  Qr || (Qr = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const u of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = u.__on_r) == null || t.call(u);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function gi(e) {
  var t = ee, u = oe;
  _t(null), xt(null);
  try {
    return e();
  } finally {
    _t(t), xt(u);
  }
}
function mc(e, t, u, n = u) {
  e.addEventListener(t, () => gi(u));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), n(!0);
  } : e.__on_r = () => n(!0), gc();
}
const mi = /* @__PURE__ */ new Set(), Wn = /* @__PURE__ */ new Set();
function _c(e, t, u, n = {}) {
  function r(o) {
    if (n.capture || Qt.call(t, o), !o.cancelBubble)
      return gi(() => u == null ? void 0 : u.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? rn(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function nt(e, t, u, n, r) {
  var o = { capture: n, passive: r }, i = _c(e, t, u, o);
  (t === document.body || t === window || t === document) && ii(() => {
    t.removeEventListener(e, i, o);
  });
}
function _i(e) {
  for (var t = 0; t < e.length; t++)
    mi.add(e[t]);
  for (var u of Wn)
    u(e);
}
function Qt(e) {
  var _;
  var t = this, u = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, r = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], o = (
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
    $o(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || u;
      }
    });
    var f = ee, d = oe;
    _t(null), xt(null);
    try {
      for (var h, b = []; o !== null; ) {
        var l = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var g = o["__" + n];
          if (g !== void 0 && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (Uo(g)) {
              var [m, ...k] = g;
              m.apply(o, [e, ...k]);
            } else
              g.call(o, e);
        } catch (v) {
          h ? b.push(v) : h = v;
        }
        if (e.cancelBubble || l === t || l === null)
          break;
        o = l;
      }
      if (h) {
        for (let v of b)
          queueMicrotask(() => {
            throw v;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, _t(f), xt(d);
    }
  }
}
function br(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function nu(e, t) {
  var u = (
    /** @type {Effect} */
    oe
  );
  u.nodes_start === null && (u.nodes_start = e, u.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  var u = (t & Ua) !== 0, n = (t & $a) !== 0, r, o = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = br(o ? e : "<!>" + e), u || (r = /** @type {Node} */
    /* @__PURE__ */ Ct(r)));
    var i = (
      /** @type {TemplateNode} */
      n || ei ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (u) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(i)
      ), a = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      nu(s, a);
    } else
      nu(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function xc(e, t, u = "svg") {
  var n = !e.startsWith("<!>"), r = `<${u}>${n ? e : "<!>" + e}</${u}>`, o;
  return () => {
    if (!o) {
      var i = (
        /** @type {DocumentFragment} */
        br(r)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ Ct(i)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ Ct(s);
    }
    var a = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return nu(a, a), a;
  };
}
function gr() {
  var e = document.createDocumentFragment(), t = document.createComment(""), u = fr();
  return e.append(t, u), nu(t, u), e;
}
function Y(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function rt(e, t) {
  var u = t == null ? "" : typeof t == "object" ? t + "" : t;
  u !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = u, e.nodeValue = u + "");
}
function vc(e, t) {
  return Ec(e, t);
}
const Ft = /* @__PURE__ */ new Map();
function Ec(e, { target: t, anchor: u, props: n = {}, events: r, context: o, intro: i = !0 }) {
  Za();
  var s = /* @__PURE__ */ new Set(), a = (d) => {
    for (var h = 0; h < d.length; h++) {
      var b = d[h];
      if (!s.has(b)) {
        s.add(b);
        var l = bc(b);
        t.addEventListener(b, Qt, { passive: l });
        var g = Ft.get(b);
        g === void 0 ? (document.addEventListener(b, Qt, { passive: l }), Ft.set(b, 1)) : Ft.set(b, g + 1);
      }
    }
  };
  a(or(mi)), Wn.add(a);
  var c = void 0, f = Xa(() => {
    var d = u ?? t.appendChild(fr());
    return Pt(() => {
      if (o) {
        $t({});
        var h = (
          /** @type {ComponentContext} */
          re
        );
        h.c = o;
      }
      r && (n.$$events = r), c = e(d, n) || {}, o && jt();
    }), () => {
      var l;
      for (var h of s) {
        t.removeEventListener(h, Qt);
        var b = (
          /** @type {number} */
          Ft.get(h)
        );
        --b === 0 ? (document.removeEventListener(h, Qt), Ft.delete(h)) : Ft.set(h, b);
      }
      Wn.delete(a), d !== u && ((l = d.parentNode) == null || l.removeChild(d));
    };
  });
  return yc.set(c, f), c;
}
let yc = /* @__PURE__ */ new WeakMap();
function De(e, t, [u, n] = [0, 0]) {
  var r = e, o = null, i = null, s = ja, a = u > 0 ? sr : 0, c = !1;
  const f = (h, b = !0) => {
    c = !0, d(b, h);
  }, d = (h, b) => {
    s !== (s = h) && (s ? (o ? ju(o) : b && (o = Pt(() => b(r))), i && $u(i, () => {
      i = null;
    })) : (i ? ju(i) : b && (i = Pt(() => b(r, [u + 1, n]))), o && $u(o, () => {
      o = null;
    })));
  };
  nn(() => {
    c = !1, t(f), c || d(null, null);
  }, a);
}
function Mu(e, t) {
  return t;
}
function kc(e, t, u, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    hr(t[i].e, r, !0);
  var s = o > 0 && r.length === 0 && u !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      u.parentNode
    );
    Wa(a), a.append(
      /** @type {Element} */
      u
    ), n.clear(), ft(e, t[0].prev, t[o - 1].next);
  }
  li(r, () => {
    for (var c = 0; c < o; c++) {
      var f = t[c];
      s || (n.delete(f.k), ft(e, f.prev, f.next)), it(f.e, !s);
    }
  });
}
function It(e, t, u, n, r, o = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & Jo) !== 0;
  if (a) {
    var c = (
      /** @type {Element} */
      e
    );
    i = c.appendChild(fr());
  }
  var f = null, d = !1, h = /* @__PURE__ */ Bt(() => {
    var b = u();
    return Uo(b) ? b : b == null ? [] : or(b);
  });
  nn(() => {
    var b = F(h), l = b.length;
    d && l === 0 || (d = l === 0, wc(b, s, i, r, t, n, u), o !== null && (l === 0 ? f ? ju(f) : f = Pt(() => o(i)) : f !== null && $u(f, () => {
      f = null;
    })), F(h));
  });
}
function wc(e, t, u, n, r, o, i) {
  var G, U, j, pe;
  var s = (r & Pa) !== 0, a = (r & (ar | cr)) !== 0, c = e.length, f = t.items, d = t.first, h = d, b, l = null, g, m = [], k = [], _, v, E, w;
  if (s)
    for (w = 0; w < c; w += 1)
      _ = e[w], v = o(_, w), E = f.get(v), E !== void 0 && ((G = E.a) == null || G.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(E));
  for (w = 0; w < c; w += 1) {
    if (_ = e[w], v = o(_, w), E = f.get(v), E === void 0) {
      var A = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : u;
      l = Cc(
        A,
        t,
        l,
        l === null ? t.first : l.next,
        _,
        v,
        w,
        n,
        r,
        i
      ), f.set(v, l), m = [], k = [], h = l.next;
      continue;
    }
    if (a && Ac(E, _, w, r), (E.e.f & ot) !== 0 && (ju(E.e), s && ((U = E.a) == null || U.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(E))), E !== h) {
      if (b !== void 0 && b.has(E)) {
        if (m.length < k.length) {
          var T = k[0], N;
          l = T.prev;
          var W = m[0], V = m[m.length - 1];
          for (N = 0; N < m.length; N += 1)
            eo(m[N], T, u);
          for (N = 0; N < k.length; N += 1)
            b.delete(k[N]);
          ft(t, W.prev, V.next), ft(t, l, W), ft(t, V, T), h = T, l = V, w -= 1, m = [], k = [];
        } else
          b.delete(E), eo(E, h, u), ft(t, E.prev, E.next), ft(t, E, l === null ? t.first : l.next), ft(t, l, E), l = E;
        continue;
      }
      for (m = [], k = []; h !== null && h.k !== v; )
        (h.e.f & ot) === 0 && (b ?? (b = /* @__PURE__ */ new Set())).add(h), k.push(h), h = h.next;
      if (h === null)
        continue;
      E = h;
    }
    m.push(E), l = E, h = E.next;
  }
  if (h !== null || b !== void 0) {
    for (var Q = b === void 0 ? [] : or(b); h !== null; )
      (h.e.f & ot) === 0 && Q.push(h), h = h.next;
    var B = Q.length;
    if (B > 0) {
      var J = (r & Jo) !== 0 && c === 0 ? u : null;
      if (s) {
        for (w = 0; w < B; w += 1)
          (j = Q[w].a) == null || j.measure();
        for (w = 0; w < B; w += 1)
          (pe = Q[w].a) == null || pe.fix();
      }
      kc(t, Q, J, f);
    }
  }
  s && rn(() => {
    var H;
    if (g !== void 0)
      for (E of g)
        (H = E.a) == null || H.apply();
  }), oe.first = t.first && t.first.e, oe.last = l && l.e;
}
function Ac(e, t, u, n) {
  (n & ar) !== 0 && Hn(e.v, t), (n & cr) !== 0 ? Hn(
    /** @type {Value<number>} */
    e.i,
    u
  ) : e.i = u;
}
function Cc(e, t, u, n, r, o, i, s, a, c) {
  var f = (a & ar) !== 0, d = (a & za) === 0, h = f ? d ? /* @__PURE__ */ lr(r) : eu(r) : r, b = (a & cr) === 0 ? i : eu(i), l = {
    i: b,
    v: h,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: u,
    next: n
  };
  try {
    return l.e = Pt(() => s(e, h, b, c), Ga), l.e.prev = u && u.e, l.e.next = n && n.e, u === null ? t.first = l : (u.next = l, u.e.next = l.e), n !== null && (n.prev = l, n.e.prev = l.e), l;
  } finally {
  }
}
function eo(e, t, u) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : u, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : u, o = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); o !== n; ) {
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ un(o)
    );
    r.before(o), o = i;
  }
}
function ft(e, t, u) {
  t === null ? e.first = u : (t.next = u, t.e.next = u && u.e), u !== null && (u.prev = t, u.e.prev = t && t.e);
}
function xi(e, t, u, n, r) {
  var o = e, i = "", s;
  nn(() => {
    i !== (i = t() ?? "") && (s !== void 0 && (it(s), s = void 0), i !== "" && (s = Pt(() => {
      var a = i + "", c = br(a);
      nu(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ct(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), o.before(c);
    })));
  });
}
function hu(e, t) {
  rn(() => {
    var u = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      u.host ? (
        /** @type {ShadowRoot} */
        u
      ) : (
        /** @type {Document} */
        u.head ?? /** @type {Document} */
        u.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, n.appendChild(r);
    }
  });
}
function vi(e) {
  var t, u, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (u = vi(e[t])) && (n && (n += " "), n += u);
  } else for (u in e) e[u] && (n && (n += " "), n += u);
  return n;
}
function Sc() {
  for (var e, t, u = 0, n = "", r = arguments.length; u < r; u++) (e = arguments[u]) && (t = vi(e)) && (n && (n += " "), n += t);
  return n;
}
function Dc(e) {
  return typeof e == "object" ? Sc(e) : e ?? "";
}
function Tc(e, t, u) {
  var n = e == null ? "" : "" + e;
  return t && (n = n ? n + " " + t : t), n === "" ? null : n;
}
function bt(e, t, u, n, r, o) {
  var i = e.__className;
  if (i !== u) {
    var s = Tc(u, n);
    s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s), e.__className = u;
  }
  return o;
}
function Rc(e, t) {
  var u = e.__attributes ?? (e.__attributes = {});
  u.checked !== (u.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Ei(e, t, u, n) {
  var r = e.__attributes ?? (e.__attributes = {});
  r[t] !== (r[t] = u) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Ta] = u), u == null ? e.removeAttribute(t) : typeof u != "string" && Fc(e).includes(t) ? e[t] = u : e.setAttribute(t, u));
}
var to = /* @__PURE__ */ new Map();
function Fc(e) {
  var t = to.get(e.nodeName);
  if (t) return t;
  to.set(e.nodeName, t = []);
  for (var u, n = e, r = Element.prototype; r !== n; ) {
    u = jo(n);
    for (var o in u)
      u[o].set && t.push(o);
    n = Ho(n);
  }
  return t;
}
function Oc(e, t, u = t) {
  var n = fu();
  mc(e, "input", (r) => {
    var o = r ? e.defaultValue : e.value;
    if (o = Tn(e) ? Rn(o) : o, u(o), n && o !== (o = t())) {
      var i = e.selectionStart, s = e.selectionEnd;
      e.value = o ?? "", s !== null && (e.selectionStart = i, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  st(t) == null && e.value && u(Tn(e) ? Rn(e.value) : e.value), du(() => {
    var r = t();
    Tn(e) && r === Rn(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function Tn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Rn(e) {
  return e === "" ? null : +e;
}
function uo(e, t) {
  return e === t || (e == null ? void 0 : e[Uu]) === t;
}
function Kn(e = {}, t, u, n) {
  return dr(() => {
    var r, o;
    return du(() => {
      r = o, o = [], st(() => {
        e !== u(...o) && (t(e, ...o), r && uo(u(...r), e) && t(null, ...r));
      });
    }), () => {
      rn(() => {
        o && uo(u(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function mr(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    re
  ), u = t.l.u;
  if (!u) return;
  let n = () => hc(t.s);
  if (e) {
    let r = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ ut(() => {
      let s = !1;
      const a = t.s;
      for (const c in a)
        a[c] !== o[c] && (o[c] = a[c], s = !0);
      return s && r++, r;
    });
    n = () => F(i);
  }
  u.b.length && Ya(() => {
    no(t, n), Pu(u.b);
  }), uu(() => {
    const r = st(() => u.m.map(wa));
    return () => {
      for (const o of r)
        typeof o == "function" && o();
    };
  }), u.a.length && uu(() => {
    no(t, n), Pu(u.a);
  });
}
function no(e, t) {
  if (e.l.s)
    for (const u of e.l.s) F(u);
  t();
}
function _r(e, t, u) {
  if (e == null)
    return t(void 0), u && u(void 0), mt;
  const n = st(
    () => e.subscribe(
      t,
      // @ts-expect-error
      u
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Ot = [];
function Nc(e, t) {
  return {
    subscribe: xr(e, t).subscribe
  };
}
function xr(e, t = mt) {
  let u = null;
  const n = /* @__PURE__ */ new Set();
  function r(s) {
    if (Ko(e, s) && (e = s, u)) {
      const a = !Ot.length;
      for (const c of n)
        c[1](), Ot.push(c, e);
      if (a) {
        for (let c = 0; c < Ot.length; c += 2)
          Ot[c][0](Ot[c + 1]);
        Ot.length = 0;
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
    return n.add(c), n.size === 1 && (u = t(r, o) || mt), s(
      /** @type {T} */
      e
    ), () => {
      n.delete(c), n.size === 0 && u && (u(), u = null);
    };
  }
  return { set: r, update: o, subscribe: i };
}
function vr(e, t, u) {
  const n = !Array.isArray(e), r = n ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const o = t.length < 2;
  return Nc(u, (i, s) => {
    let a = !1;
    const c = [];
    let f = 0, d = mt;
    const h = () => {
      if (f)
        return;
      d();
      const l = t(n ? c[0] : c, i, s);
      o ? i(l) : d = typeof l == "function" ? l : mt;
    }, b = r.map(
      (l, g) => _r(
        l,
        (m) => {
          c[g] = m, f &= ~(1 << g), a && h();
        },
        () => {
          f |= 1 << g;
        }
      )
    );
    return a = !0, h(), function() {
      Pu(b), d(), a = !1;
    };
  });
}
function yi(e) {
  let t;
  return _r(e, (u) => t = u)(), t;
}
let Su = !1, Vn = Symbol();
function ru(e, t, u) {
  const n = u[t] ?? (u[t] = {
    store: null,
    source: /* @__PURE__ */ lr(void 0),
    unsubscribe: mt
  });
  if (n.store !== e && !(Vn in u))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = mt;
    else {
      var r = !0;
      n.unsubscribe = _r(e, (o) => {
        r ? n.source.v = o : Se(n.source, o);
      }), r = !1;
    }
  return e && Vn in u ? yi(e) : F(n.source);
}
function cn() {
  const e = {};
  function t() {
    ii(() => {
      for (var u in e)
        e[u].unsubscribe();
      $o(e, Vn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Mc(e, t, u) {
  return e.set(u), t;
}
function Ic(e) {
  var t = Su;
  try {
    return Su = !1, [e(), Su];
  } finally {
    Su = t;
  }
}
function Du(e, t, u, n) {
  var l;
  var r = !Ut || (u & qa) !== 0, o = !1, i;
  [i, o] = Ic(() => (
    /** @type {V} */
    e[t]
  ));
  var s = Uu in e || Da in e, a = (((l = jn(e, t)) == null ? void 0 : l.set) ?? (s && t in e && ((g) => e[t] = g))) || void 0, c = (
    /** @type {V} */
    n
  ), f = !0, d = () => (f && (f = !1, c = /** @type {V} */
  n), c);
  i === void 0 && n !== void 0 && (a && r && Ma(), i = d(), a && a(i));
  var h;
  if (r)
    h = () => {
      var g = (
        /** @type {V} */
        e[t]
      );
      return g === void 0 ? d() : (f = !0, g);
    };
  else {
    var b = /* @__PURE__ */ Bt(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    b.f |= Ca, h = () => {
      var g = F(b);
      return g !== void 0 && (c = /** @type {V} */
      void 0), g === void 0 ? c : g;
    };
  }
  return h;
}
function pu(e) {
  re === null && Yo(), Ut && re.l !== null ? Bc(re).m.push(e) : uu(() => {
    const t = st(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Lc(e) {
  re === null && Yo(), pu(() => () => st(e));
}
function Bc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const Pc = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Pc);
function ki(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: zc } = Object.prototype, { getPrototypeOf: Er } = Object, ln = /* @__PURE__ */ ((e) => (t) => {
  const u = zc.call(t);
  return e[u] || (e[u] = u.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), $e = (e) => (e = e.toLowerCase(), (t) => ln(t) === e), fn = (e) => (t) => typeof t === e, { isArray: Zt } = Array, ou = fn("undefined");
function qc(e) {
  return e !== null && !ou(e) && e.constructor !== null && !ou(e.constructor) && Ne(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wi = $e("ArrayBuffer");
function Uc(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wi(e.buffer), t;
}
const $c = fn("string"), Ne = fn("function"), Ai = fn("number"), dn = (e) => e !== null && typeof e == "object", jc = (e) => e === !0 || e === !1, Iu = (e) => {
  if (ln(e) !== "object")
    return !1;
  const t = Er(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Hc = $e("Date"), Gc = $e("File"), Zc = $e("Blob"), Wc = $e("FileList"), Kc = (e) => dn(e) && Ne(e.pipe), Vc = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ne(e.append) && ((t = ln(e)) === "formdata" || // detect form-data instance
  t === "object" && Ne(e.toString) && e.toString() === "[object FormData]"));
}, Jc = $e("URLSearchParams"), [Yc, Xc, Qc, e0] = ["ReadableStream", "Request", "Response", "Headers"].map($e), t0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function bu(e, t, { allOwnKeys: u = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), Zt(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    const o = u ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let s;
    for (n = 0; n < i; n++)
      s = o[n], t.call(null, e[s], s, e);
  }
}
function Ci(e, t) {
  t = t.toLowerCase();
  const u = Object.keys(e);
  let n = u.length, r;
  for (; n-- > 0; )
    if (r = u[n], t === r.toLowerCase())
      return r;
  return null;
}
const wt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Si = (e) => !ou(e) && e !== wt;
function Jn() {
  const { caseless: e } = Si(this) && this || {}, t = {}, u = (n, r) => {
    const o = e && Ci(t, r) || r;
    Iu(t[o]) && Iu(n) ? t[o] = Jn(t[o], n) : Iu(n) ? t[o] = Jn({}, n) : Zt(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && bu(arguments[n], u);
  return t;
}
const u0 = (e, t, u, { allOwnKeys: n } = {}) => (bu(t, (r, o) => {
  u && Ne(r) ? e[o] = ki(r, u) : e[o] = r;
}, { allOwnKeys: n }), e), n0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), r0 = (e, t, u, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), u && Object.assign(e.prototype, u);
}, o0 = (e, t, u, n) => {
  let r, o, i;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!n || n(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = u !== !1 && Er(e);
  } while (e && (!u || u(e, t)) && e !== Object.prototype);
  return t;
}, i0 = (e, t, u) => {
  e = String(e), (u === void 0 || u > e.length) && (u = e.length), u -= t.length;
  const n = e.indexOf(t, u);
  return n !== -1 && n === u;
}, s0 = (e) => {
  if (!e) return null;
  if (Zt(e)) return e;
  let t = e.length;
  if (!Ai(t)) return null;
  const u = new Array(t);
  for (; t-- > 0; )
    u[t] = e[t];
  return u;
}, a0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Er(Uint8Array)), c0 = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, l0 = (e, t) => {
  let u;
  const n = [];
  for (; (u = e.exec(t)) !== null; )
    n.push(u);
  return n;
}, f0 = $e("HTMLFormElement"), d0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(u, n, r) {
    return n.toUpperCase() + r;
  }
), ro = (({ hasOwnProperty: e }) => (t, u) => e.call(t, u))(Object.prototype), h0 = $e("RegExp"), Di = (e, t) => {
  const u = Object.getOwnPropertyDescriptors(e), n = {};
  bu(u, (r, o) => {
    let i;
    (i = t(r, o, e)) !== !1 && (n[o] = i || r);
  }), Object.defineProperties(e, n);
}, p0 = (e) => {
  Di(e, (t, u) => {
    if (Ne(e) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
      return !1;
    const n = e[u];
    if (Ne(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + u + "'");
      });
    }
  });
}, b0 = (e, t) => {
  const u = {}, n = (r) => {
    r.forEach((o) => {
      u[o] = !0;
    });
  };
  return Zt(e) ? n(e) : n(String(e).split(t)), u;
}, g0 = () => {
}, m0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function _0(e) {
  return !!(e && Ne(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const x0 = (e) => {
  const t = new Array(10), u = (n, r) => {
    if (dn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[r] = n;
        const o = Zt(n) ? [] : {};
        return bu(n, (i, s) => {
          const a = u(i, r + 1);
          !ou(a) && (o[s] = a);
        }), t[r] = void 0, o;
      }
    }
    return n;
  };
  return u(e, 0);
}, v0 = $e("AsyncFunction"), E0 = (e) => e && (dn(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), Ti = ((e, t) => e ? setImmediate : t ? ((u, n) => (wt.addEventListener("message", ({ source: r, data: o }) => {
  r === wt && o === u && n.length && n.shift()();
}, !1), (r) => {
  n.push(r), wt.postMessage(u, "*");
}))(`axios@${Math.random()}`, []) : (u) => setTimeout(u))(
  typeof setImmediate == "function",
  Ne(wt.postMessage)
), y0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(wt) : typeof process < "u" && process.nextTick || Ti, x = {
  isArray: Zt,
  isArrayBuffer: wi,
  isBuffer: qc,
  isFormData: Vc,
  isArrayBufferView: Uc,
  isString: $c,
  isNumber: Ai,
  isBoolean: jc,
  isObject: dn,
  isPlainObject: Iu,
  isReadableStream: Yc,
  isRequest: Xc,
  isResponse: Qc,
  isHeaders: e0,
  isUndefined: ou,
  isDate: Hc,
  isFile: Gc,
  isBlob: Zc,
  isRegExp: h0,
  isFunction: Ne,
  isStream: Kc,
  isURLSearchParams: Jc,
  isTypedArray: a0,
  isFileList: Wc,
  forEach: bu,
  merge: Jn,
  extend: u0,
  trim: t0,
  stripBOM: n0,
  inherits: r0,
  toFlatObject: o0,
  kindOf: ln,
  kindOfTest: $e,
  endsWith: i0,
  toArray: s0,
  forEachEntry: c0,
  matchAll: l0,
  isHTMLForm: f0,
  hasOwnProperty: ro,
  hasOwnProp: ro,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Di,
  freezeMethods: p0,
  toObjectSet: b0,
  toCamelCase: d0,
  noop: g0,
  toFiniteNumber: m0,
  findKey: Ci,
  global: wt,
  isContextDefined: Si,
  isSpecCompliantForm: _0,
  toJSONObject: x0,
  isAsyncFn: v0,
  isThenable: E0,
  setImmediate: Ti,
  asap: y0
};
function q(e, t, u, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), u && (this.config = u), n && (this.request = n), r && (this.response = r, this.status = r.status ? r.status : null);
}
x.inherits(q, Error, {
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
const Ri = q.prototype, Fi = {};
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
  Fi[e] = { value: e };
});
Object.defineProperties(q, Fi);
Object.defineProperty(Ri, "isAxiosError", { value: !0 });
q.from = (e, t, u, n, r, o) => {
  const i = Object.create(Ri);
  return x.toFlatObject(e, i, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), q.call(i, e.message, t, u, n, r), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const k0 = null;
function Yn(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function Oi(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function oo(e, t, u) {
  return e ? e.concat(t).map(function(r, o) {
    return r = Oi(r), !u && o ? "[" + r + "]" : r;
  }).join(u ? "." : "") : t;
}
function w0(e) {
  return x.isArray(e) && !e.some(Yn);
}
const A0 = x.toFlatObject(x, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function hn(e, t, u) {
  if (!x.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), u = x.toFlatObject(u, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !x.isUndefined(m[g]);
  });
  const n = u.metaTokens, r = u.visitor || f, o = u.dots, i = u.indexes, a = (u.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
  if (!x.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(l) {
    if (l === null) return "";
    if (x.isDate(l))
      return l.toISOString();
    if (!a && x.isBlob(l))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(l) || x.isTypedArray(l) ? a && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function f(l, g, m) {
    let k = l;
    if (l && !m && typeof l == "object") {
      if (x.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), l = JSON.stringify(l);
      else if (x.isArray(l) && w0(l) || (x.isFileList(l) || x.endsWith(g, "[]")) && (k = x.toArray(l)))
        return g = Oi(g), k.forEach(function(v, E) {
          !(x.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? oo([g], E, o) : i === null ? g : g + "[]",
            c(v)
          );
        }), !1;
    }
    return Yn(l) ? !0 : (t.append(oo(m, g, o), c(l)), !1);
  }
  const d = [], h = Object.assign(A0, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Yn
  });
  function b(l, g) {
    if (!x.isUndefined(l)) {
      if (d.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(l), x.forEach(l, function(k, _) {
        (!(x.isUndefined(k) || k === null) && r.call(
          t,
          k,
          x.isString(_) ? _.trim() : _,
          g,
          h
        )) === !0 && b(k, g ? g.concat(_) : [_]);
      }), d.pop();
    }
  }
  if (!x.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function io(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function yr(e, t) {
  this._pairs = [], e && hn(e, this, t);
}
const Ni = yr.prototype;
Ni.append = function(t, u) {
  this._pairs.push([t, u]);
};
Ni.toString = function(t) {
  const u = t ? function(n) {
    return t.call(this, n, io);
  } : io;
  return this._pairs.map(function(r) {
    return u(r[0]) + "=" + u(r[1]);
  }, "").join("&");
};
function C0(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Mi(e, t, u) {
  if (!t)
    return e;
  const n = u && u.encode || C0;
  x.isFunction(u) && (u = {
    serialize: u
  });
  const r = u && u.serialize;
  let o;
  if (r ? o = r(t, u) : o = x.isURLSearchParams(t) ? t.toString() : new yr(t, u).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class so {
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
  use(t, u, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: u,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    x.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Ii = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, S0 = typeof URLSearchParams < "u" ? URLSearchParams : yr, D0 = typeof FormData < "u" ? FormData : null, T0 = typeof Blob < "u" ? Blob : null, R0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: S0,
    FormData: D0,
    Blob: T0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, kr = typeof window < "u" && typeof document < "u", Xn = typeof navigator == "object" && navigator || void 0, F0 = kr && (!Xn || ["ReactNative", "NativeScript", "NS"].indexOf(Xn.product) < 0), O0 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", N0 = kr && window.location.href || "http://localhost", M0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: kr,
  hasStandardBrowserEnv: F0,
  hasStandardBrowserWebWorkerEnv: O0,
  navigator: Xn,
  origin: N0
}, Symbol.toStringTag, { value: "Module" })), we = {
  ...M0,
  ...R0
};
function I0(e, t) {
  return hn(e, new we.classes.URLSearchParams(), Object.assign({
    visitor: function(u, n, r, o) {
      return we.isNode && x.isBuffer(u) ? (this.append(n, u.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function L0(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function B0(e) {
  const t = {}, u = Object.keys(e);
  let n;
  const r = u.length;
  let o;
  for (n = 0; n < r; n++)
    o = u[n], t[o] = e[o];
  return t;
}
function Li(e) {
  function t(u, n, r, o) {
    let i = u[o++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), a = o >= u.length;
    return i = !i && x.isArray(r) ? r.length : i, a ? (x.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !s) : ((!r[i] || !x.isObject(r[i])) && (r[i] = []), t(u, n, r[i], o) && x.isArray(r[i]) && (r[i] = B0(r[i])), !s);
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const u = {};
    return x.forEachEntry(e, (n, r) => {
      t(L0(n), r, u, 0);
    }), u;
  }
  return null;
}
function P0(e, t, u) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (u || JSON.stringify)(e);
}
const gu = {
  transitional: Ii,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, u) {
    const n = u.getContentType() || "", r = n.indexOf("application/json") > -1, o = x.isObject(t);
    if (o && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))
      return r ? JSON.stringify(Li(t)) : t;
    if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t) || x.isReadableStream(t))
      return t;
    if (x.isArrayBufferView(t))
      return t.buffer;
    if (x.isURLSearchParams(t))
      return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return I0(t, this.formSerializer).toString();
      if ((s = x.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return hn(
          s ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return o || r ? (u.setContentType("application/json", !1), P0(t)) : t;
  }],
  transformResponse: [function(t) {
    const u = this.transitional || gu.transitional, n = u && u.forcedJSONParsing, r = this.responseType === "json";
    if (x.isResponse(t) || x.isReadableStream(t))
      return t;
    if (t && x.isString(t) && (n && !this.responseType || r)) {
      const i = !(u && u.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? q.from(s, q.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: we.classes.FormData,
    Blob: we.classes.Blob
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
  gu.headers[e] = {};
});
const z0 = x.toObjectSet([
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
]), q0 = (e) => {
  const t = {};
  let u, n, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), u = i.substring(0, r).trim().toLowerCase(), n = i.substring(r + 1).trim(), !(!u || t[u] && z0[u]) && (u === "set-cookie" ? t[u] ? t[u].push(n) : t[u] = [n] : t[u] = t[u] ? t[u] + ", " + n : n);
  }), t;
}, ao = Symbol("internals");
function Xt(e) {
  return e && String(e).trim().toLowerCase();
}
function Lu(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(Lu) : String(e);
}
function U0(e) {
  const t = /* @__PURE__ */ Object.create(null), u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = u.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const $0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Fn(e, t, u, n, r) {
  if (x.isFunction(n))
    return n.call(this, t, u);
  if (r && (t = u), !!x.isString(t)) {
    if (x.isString(n))
      return t.indexOf(n) !== -1;
    if (x.isRegExp(n))
      return n.test(t);
  }
}
function j0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, u, n) => u.toUpperCase() + n);
}
function H0(e, t) {
  const u = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + u, {
      value: function(r, o, i) {
        return this[n].call(this, t, r, o, i);
      },
      configurable: !0
    });
  });
}
let Te = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, u, n) {
    const r = this;
    function o(s, a, c) {
      const f = Xt(a);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = x.findKey(r, f);
      (!d || r[d] === void 0 || c === !0 || c === void 0 && r[d] !== !1) && (r[d || a] = Lu(s));
    }
    const i = (s, a) => x.forEach(s, (c, f) => o(c, f, a));
    if (x.isPlainObject(t) || t instanceof this.constructor)
      i(t, u);
    else if (x.isString(t) && (t = t.trim()) && !$0(t))
      i(q0(t), u);
    else if (x.isHeaders(t))
      for (const [s, a] of t.entries())
        o(a, s, n);
    else
      t != null && o(u, t, n);
    return this;
  }
  get(t, u) {
    if (t = Xt(t), t) {
      const n = x.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!u)
          return r;
        if (u === !0)
          return U0(r);
        if (x.isFunction(u))
          return u.call(this, r, n);
        if (x.isRegExp(u))
          return u.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, u) {
    if (t = Xt(t), t) {
      const n = x.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!u || Fn(this, this[n], n, u)));
    }
    return !1;
  }
  delete(t, u) {
    const n = this;
    let r = !1;
    function o(i) {
      if (i = Xt(i), i) {
        const s = x.findKey(n, i);
        s && (!u || Fn(n, n[s], s, u)) && (delete n[s], r = !0);
      }
    }
    return x.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const u = Object.keys(this);
    let n = u.length, r = !1;
    for (; n--; ) {
      const o = u[n];
      (!t || Fn(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const u = this, n = {};
    return x.forEach(this, (r, o) => {
      const i = x.findKey(n, o);
      if (i) {
        u[i] = Lu(r), delete u[o];
        return;
      }
      const s = t ? j0(o) : String(o).trim();
      s !== o && delete u[o], u[s] = Lu(r), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const u = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (n, r) => {
      n != null && n !== !1 && (u[r] = t && x.isArray(n) ? n.join(", ") : n);
    }), u;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, u]) => t + ": " + u).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...u) {
    const n = new this(t);
    return u.forEach((r) => n.set(r)), n;
  }
  static accessor(t) {
    const n = (this[ao] = this[ao] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(i) {
      const s = Xt(i);
      n[s] || (H0(r, i), n[s] = !0);
    }
    return x.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Te.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(Te.prototype, ({ value: e }, t) => {
  let u = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[u] = n;
    }
  };
});
x.freezeMethods(Te);
function On(e, t) {
  const u = this || gu, n = t || u, r = Te.from(n.headers);
  let o = n.data;
  return x.forEach(e, function(s) {
    o = s.call(u, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function Bi(e) {
  return !!(e && e.__CANCEL__);
}
function Wt(e, t, u) {
  q.call(this, e ?? "canceled", q.ERR_CANCELED, t, u), this.name = "CanceledError";
}
x.inherits(Wt, q, {
  __CANCEL__: !0
});
function Pi(e, t, u) {
  const n = u.config.validateStatus;
  !u.status || !n || n(u.status) ? e(u) : t(new q(
    "Request failed with status code " + u.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],
    u.config,
    u.request,
    u
  ));
}
function G0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Z0(e, t) {
  e = e || 10;
  const u = new Array(e), n = new Array(e);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const c = Date.now(), f = n[o];
    i || (i = c), u[r] = a, n[r] = c;
    let d = o, h = 0;
    for (; d !== r; )
      h += u[d++], d = d % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), c - i < t)
      return;
    const b = f && c - f;
    return b ? Math.round(h * 1e3 / b) : void 0;
  };
}
function W0(e, t) {
  let u = 0, n = 1e3 / t, r, o;
  const i = (c, f = Date.now()) => {
    u = f, r = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const f = Date.now(), d = f - u;
    d >= n ? i(c, f) : (r = c, o || (o = setTimeout(() => {
      o = null, i(r);
    }, n - d)));
  }, () => r && i(r)];
}
const Ku = (e, t, u = 3) => {
  let n = 0;
  const r = Z0(50, 250);
  return W0((o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - n, c = r(a), f = i <= s;
    n = i;
    const d = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && s && f ? (s - i) / c : void 0,
      event: o,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, u);
}, co = (e, t) => {
  const u = e != null;
  return [(n) => t[0]({
    lengthComputable: u,
    total: e,
    loaded: n
  }), t[1]];
}, lo = (e) => (...t) => x.asap(() => e(...t)), K0 = we.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (u) => (u = new URL(u, we.origin), e.protocol === u.protocol && e.host === u.host && (t || e.port === u.port)))(
  new URL(we.origin),
  we.navigator && /(msie|trident)/i.test(we.navigator.userAgent)
) : () => !0, V0 = we.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, u, n, r, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      x.isNumber(u) && i.push("expires=" + new Date(u).toGMTString()), x.isString(n) && i.push("path=" + n), x.isString(r) && i.push("domain=" + r), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function J0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Y0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function zi(e, t, u) {
  let n = !J0(t);
  return e && n || u == !1 ? Y0(e, t) : t;
}
const fo = (e) => e instanceof Te ? { ...e } : e;
function St(e, t) {
  t = t || {};
  const u = {};
  function n(c, f, d, h) {
    return x.isPlainObject(c) && x.isPlainObject(f) ? x.merge.call({ caseless: h }, c, f) : x.isPlainObject(f) ? x.merge({}, f) : x.isArray(f) ? f.slice() : f;
  }
  function r(c, f, d, h) {
    if (x.isUndefined(f)) {
      if (!x.isUndefined(c))
        return n(void 0, c, d, h);
    } else return n(c, f, d, h);
  }
  function o(c, f) {
    if (!x.isUndefined(f))
      return n(void 0, f);
  }
  function i(c, f) {
    if (x.isUndefined(f)) {
      if (!x.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, f);
  }
  function s(c, f, d) {
    if (d in t)
      return n(c, f);
    if (d in e)
      return n(void 0, c);
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
    headers: (c, f, d) => r(fo(c), fo(f), d, !0)
  };
  return x.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const d = a[f] || r, h = d(e[f], t[f], f);
    x.isUndefined(h) && d !== s || (u[f] = h);
  }), u;
}
const qi = (e) => {
  const t = St({}, e);
  let { data: u, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: o, headers: i, auth: s } = t;
  t.headers = i = Te.from(i), t.url = Mi(zi(t.baseURL, t.url), e.params, e.paramsSerializer), s && i.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let a;
  if (x.isFormData(u)) {
    if (we.hasStandardBrowserEnv || we.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((a = i.getContentType()) !== !1) {
      const [c, ...f] = a ? a.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...f].join("; "));
    }
  }
  if (we.hasStandardBrowserEnv && (n && x.isFunction(n) && (n = n(t)), n || n !== !1 && K0(t.url))) {
    const c = r && o && V0.read(o);
    c && i.set(r, c);
  }
  return t;
}, X0 = typeof XMLHttpRequest < "u", Q0 = X0 && function(e) {
  return new Promise(function(u, n) {
    const r = qi(e);
    let o = r.data;
    const i = Te.from(r.headers).normalize();
    let { responseType: s, onUploadProgress: a, onDownloadProgress: c } = r, f, d, h, b, l;
    function g() {
      b && b(), l && l(), r.cancelToken && r.cancelToken.unsubscribe(f), r.signal && r.signal.removeEventListener("abort", f);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function k() {
      if (!m)
        return;
      const v = Te.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), w = {
        data: !s || s === "text" || s === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: v,
        config: e,
        request: m
      };
      Pi(function(T) {
        u(T), g();
      }, function(T) {
        n(T), g();
      }, w), m = null;
    }
    "onloadend" in m ? m.onloadend = k : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(k);
    }, m.onabort = function() {
      m && (n(new q("Request aborted", q.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      n(new q("Network Error", q.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let E = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const w = r.transitional || Ii;
      r.timeoutErrorMessage && (E = r.timeoutErrorMessage), n(new q(
        E,
        w.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && x.forEach(i.toJSON(), function(E, w) {
      m.setRequestHeader(w, E);
    }), x.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), s && s !== "json" && (m.responseType = r.responseType), c && ([h, l] = Ku(c, !0), m.addEventListener("progress", h)), a && m.upload && ([d, b] = Ku(a), m.upload.addEventListener("progress", d), m.upload.addEventListener("loadend", b)), (r.cancelToken || r.signal) && (f = (v) => {
      m && (n(!v || v.type ? new Wt(null, e, m) : v), m.abort(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(f), r.signal && (r.signal.aborted ? f() : r.signal.addEventListener("abort", f)));
    const _ = G0(r.url);
    if (_ && we.protocols.indexOf(_) === -1) {
      n(new q("Unsupported protocol " + _ + ":", q.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(o || null);
  });
}, el = (e, t) => {
  const { length: u } = e = e ? e.filter(Boolean) : [];
  if (t || u) {
    let n = new AbortController(), r;
    const o = function(c) {
      if (!r) {
        r = !0, s();
        const f = c instanceof Error ? c : this.reason;
        n.abort(f instanceof q ? f : new Wt(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new q(`timeout ${t} of ms exceeded`, q.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: a } = n;
    return a.unsubscribe = () => x.asap(s), a;
  }
}, tl = function* (e, t) {
  let u = e.byteLength;
  if (u < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < u; )
    r = n + t, yield e.slice(n, r), n = r;
}, ul = async function* (e, t) {
  for await (const u of nl(e))
    yield* tl(u, t);
}, nl = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: u, value: n } = await t.read();
      if (u)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, ho = (e, t, u, n) => {
  const r = ul(e, t);
  let o = 0, i, s = (a) => {
    i || (i = !0, n && n(a));
  };
  return new ReadableStream({
    async pull(a) {
      try {
        const { done: c, value: f } = await r.next();
        if (c) {
          s(), a.close();
          return;
        }
        let d = f.byteLength;
        if (u) {
          let h = o += d;
          u(h);
        }
        a.enqueue(new Uint8Array(f));
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
}, pn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ui = pn && typeof ReadableStream == "function", rl = pn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), $i = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ol = Ui && $i(() => {
  let e = !1;
  const t = new Request(we.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), po = 64 * 1024, Qn = Ui && $i(() => x.isReadableStream(new Response("").body)), Vu = {
  stream: Qn && ((e) => e.body)
};
pn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Vu[t] && (Vu[t] = x.isFunction(e[t]) ? (u) => u[t]() : (u, n) => {
      throw new q(`Response type '${t}' is not supported`, q.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const il = async (e) => {
  if (e == null)
    return 0;
  if (x.isBlob(e))
    return e.size;
  if (x.isSpecCompliantForm(e))
    return (await new Request(we.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (x.isArrayBufferView(e) || x.isArrayBuffer(e))
    return e.byteLength;
  if (x.isURLSearchParams(e) && (e = e + ""), x.isString(e))
    return (await rl(e)).byteLength;
}, sl = async (e, t) => {
  const u = x.toFiniteNumber(e.getContentLength());
  return u ?? il(t);
}, al = pn && (async (e) => {
  let {
    url: t,
    method: u,
    data: n,
    signal: r,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: s,
    onUploadProgress: a,
    responseType: c,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: h
  } = qi(e);
  c = c ? (c + "").toLowerCase() : "text";
  let b = el([r, o && o.toAbortSignal()], i), l;
  const g = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let m;
  try {
    if (a && ol && u !== "get" && u !== "head" && (m = await sl(f, n)) !== 0) {
      let w = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), A;
      if (x.isFormData(n) && (A = w.headers.get("content-type")) && f.setContentType(A), w.body) {
        const [T, N] = co(
          m,
          Ku(lo(a))
        );
        n = ho(w.body, po, T, N);
      }
    }
    x.isString(d) || (d = d ? "include" : "omit");
    const k = "credentials" in Request.prototype;
    l = new Request(t, {
      ...h,
      signal: b,
      method: u.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: k ? d : void 0
    });
    let _ = await fetch(l);
    const v = Qn && (c === "stream" || c === "response");
    if (Qn && (s || v && g)) {
      const w = {};
      ["status", "statusText", "headers"].forEach((W) => {
        w[W] = _[W];
      });
      const A = x.toFiniteNumber(_.headers.get("content-length")), [T, N] = s && co(
        A,
        Ku(lo(s), !0)
      ) || [];
      _ = new Response(
        ho(_.body, po, T, () => {
          N && N(), g && g();
        }),
        w
      );
    }
    c = c || "text";
    let E = await Vu[x.findKey(Vu, c) || "text"](_, e);
    return !v && g && g(), await new Promise((w, A) => {
      Pi(w, A, {
        data: E,
        headers: Te.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: e,
        request: l
      });
    });
  } catch (k) {
    throw g && g(), k && k.name === "TypeError" && /fetch/i.test(k.message) ? Object.assign(
      new q("Network Error", q.ERR_NETWORK, e, l),
      {
        cause: k.cause || k
      }
    ) : q.from(k, k && k.code, e, l);
  }
}), er = {
  http: k0,
  xhr: Q0,
  fetch: al
};
x.forEach(er, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const bo = (e) => `- ${e}`, cl = (e) => x.isFunction(e) || e === null || e === !1, ji = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let u, n;
    const r = {};
    for (let o = 0; o < t; o++) {
      u = e[o];
      let i;
      if (n = u, !cl(u) && (n = er[(i = String(u)).toLowerCase()], n === void 0))
        throw new q(`Unknown adapter '${i}'`);
      if (n)
        break;
      r[i || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(r).map(
        ([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(bo).join(`
`) : " " + bo(o[0]) : "as no adapter specified";
      throw new q(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: er
};
function Nn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Wt(null, e);
}
function go(e) {
  return Nn(e), e.headers = Te.from(e.headers), e.data = On.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ji.getAdapter(e.adapter || gu.adapter)(e).then(function(n) {
    return Nn(e), n.data = On.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Te.from(n.headers), n;
  }, function(n) {
    return Bi(n) || (Nn(e), n && n.response && (n.response.data = On.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Te.from(n.response.headers))), Promise.reject(n);
  });
}
const Hi = "1.8.1", bn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  bn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const mo = {};
bn.transitional = function(t, u, n) {
  function r(o, i) {
    return "[Axios v" + Hi + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, s) => {
    if (t === !1)
      throw new q(
        r(i, " has been removed" + (u ? " in " + u : "")),
        q.ERR_DEPRECATED
      );
    return u && !mo[i] && (mo[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + u + " and will be removed in the near future"
      )
    )), t ? t(o, i, s) : !0;
  };
};
bn.spelling = function(t) {
  return (u, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function ll(e, t, u) {
  if (typeof e != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const o = n[r], i = t[o];
    if (i) {
      const s = e[o], a = s === void 0 || i(s, o, e);
      if (a !== !0)
        throw new q("option " + o + " must be " + a, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0)
      throw new q("Unknown option " + o, q.ERR_BAD_OPTION);
  }
}
const Bu = {
  assertOptions: ll,
  validators: bn
}, We = Bu.validators;
let At = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new so(),
      response: new so()
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
  async request(t, u) {
    try {
      return await this._request(t, u);
    } catch (n) {
      if (n instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, u) {
    typeof t == "string" ? (u = u || {}, u.url = t) : u = t || {}, u = St(this.defaults, u);
    const { transitional: n, paramsSerializer: r, headers: o } = u;
    n !== void 0 && Bu.assertOptions(n, {
      silentJSONParsing: We.transitional(We.boolean),
      forcedJSONParsing: We.transitional(We.boolean),
      clarifyTimeoutError: We.transitional(We.boolean)
    }, !1), r != null && (x.isFunction(r) ? u.paramsSerializer = {
      serialize: r
    } : Bu.assertOptions(r, {
      encode: We.function,
      serialize: We.function
    }, !0)), u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0), Bu.assertOptions(u, {
      baseUrl: We.spelling("baseURL"),
      withXsrfToken: We.spelling("withXSRFToken")
    }, !0), u.method = (u.method || this.defaults.method || "get").toLowerCase();
    let i = o && x.merge(
      o.common,
      o[u.method]
    );
    o && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (l) => {
        delete o[l];
      }
    ), u.headers = Te.concat(i, o);
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(u) === !1 || (a = a && g.synchronous, s.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let f, d = 0, h;
    if (!a) {
      const l = [go.bind(this), void 0];
      for (l.unshift.apply(l, s), l.push.apply(l, c), h = l.length, f = Promise.resolve(u); d < h; )
        f = f.then(l[d++], l[d++]);
      return f;
    }
    h = s.length;
    let b = u;
    for (d = 0; d < h; ) {
      const l = s[d++], g = s[d++];
      try {
        b = l(b);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      f = go.call(this, b);
    } catch (l) {
      return Promise.reject(l);
    }
    for (d = 0, h = c.length; d < h; )
      f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(t) {
    t = St(this.defaults, t);
    const u = zi(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Mi(u, t.params, t.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function(t) {
  At.prototype[t] = function(u, n) {
    return this.request(St(n || {}, {
      method: t,
      url: u,
      data: (n || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(t) {
  function u(n) {
    return function(o, i, s) {
      return this.request(St(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  At.prototype[t] = u(), At.prototype[t + "Form"] = u(!0);
});
let fl = class Gi {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let u;
    this.promise = new Promise(function(o) {
      u = o;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](r);
      n._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const i = new Promise((s) => {
        n.subscribe(s), o = s;
      }).then(r);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, t(function(o, i, s) {
      n.reason || (n.reason = new Wt(o, i, s), u(n.reason));
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
    const u = this._listeners.indexOf(t);
    u !== -1 && this._listeners.splice(u, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), u = (n) => {
      t.abort(n);
    };
    return this.subscribe(u), t.signal.unsubscribe = () => this.unsubscribe(u), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Gi(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function dl(e) {
  return function(u) {
    return e.apply(null, u);
  };
}
function hl(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const tr = {
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
Object.entries(tr).forEach(([e, t]) => {
  tr[t] = e;
});
function Zi(e) {
  const t = new At(e), u = ki(At.prototype.request, t);
  return x.extend(u, At.prototype, t, { allOwnKeys: !0 }), x.extend(u, t, null, { allOwnKeys: !0 }), u.create = function(r) {
    return Zi(St(e, r));
  }, u;
}
const he = Zi(gu);
he.Axios = At;
he.CanceledError = Wt;
he.CancelToken = fl;
he.isCancel = Bi;
he.VERSION = Hi;
he.toFormData = hn;
he.AxiosError = q;
he.Cancel = he.CanceledError;
he.all = function(t) {
  return Promise.all(t);
};
he.spread = dl;
he.isAxiosError = hl;
he.mergeConfig = St;
he.AxiosHeaders = Te;
he.formToJSON = (e) => Li(x.isHTMLForm(e) ? new FormData(e) : e);
he.getAdapter = ji.getAdapter;
he.HttpStatusCode = tr;
he.default = he;
const {
  Axios: Sh,
  AxiosError: Dh,
  CanceledError: Th,
  isCancel: Rh,
  CancelToken: Fh,
  VERSION: Oh,
  all: Nh,
  Cancel: Mh,
  isAxiosError: Ih,
  spread: Lh,
  toFormData: Bh,
  AxiosHeaders: Ph,
  HttpStatusCode: zh,
  formToJSON: qh,
  getAdapter: Uh,
  mergeConfig: $h
} = he, pl = {
  // Only enable logging in development
  apiBaseUrl: "https://fluent-ai-backend.support-ai.workers.dev/fluent-documents"
}, Mn = () => {
}, bl = {
  logRequest: Mn,
  logResponse: Mn,
  logError: Mn
}, Kt = he.create({
  baseURL: pl.apiBaseUrl,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
});
Kt.interceptors.request.use(
  (e) => {
    var t;
    return bl.logRequest(
      ((t = e.method) == null ? void 0 : t.toUpperCase()) || "UNKNOWN",
      e.url || "",
      e.data,
      e.params
    ), e;
  },
  (e) => Promise.reject(e)
);
Kt.interceptors.response.use(
  (e) => e,
  (e) => Promise.reject(e)
);
const _o = {};
function gl(e) {
  let t = _o[e];
  if (t)
    return t;
  t = _o[e] = [];
  for (let u = 0; u < 128; u++) {
    const n = String.fromCharCode(u);
    t.push(n);
  }
  for (let u = 0; u < e.length; u++) {
    const n = e.charCodeAt(u);
    t[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function zt(e, t) {
  typeof t != "string" && (t = zt.defaultChars);
  const u = gl(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(n) {
    let r = "";
    for (let o = 0, i = n.length; o < i; o += 3) {
      const s = parseInt(n.slice(o + 1, o + 3), 16);
      if (s < 128) {
        r += u[s];
        continue;
      }
      if ((s & 224) === 192 && o + 3 < i) {
        const a = parseInt(n.slice(o + 4, o + 6), 16);
        if ((a & 192) === 128) {
          const c = s << 6 & 1984 | a & 63;
          c < 128 ? r += "��" : r += String.fromCharCode(c), o += 3;
          continue;
        }
      }
      if ((s & 240) === 224 && o + 6 < i) {
        const a = parseInt(n.slice(o + 4, o + 6), 16), c = parseInt(n.slice(o + 7, o + 9), 16);
        if ((a & 192) === 128 && (c & 192) === 128) {
          const f = s << 12 & 61440 | a << 6 & 4032 | c & 63;
          f < 2048 || f >= 55296 && f <= 57343 ? r += "���" : r += String.fromCharCode(f), o += 6;
          continue;
        }
      }
      if ((s & 248) === 240 && o + 9 < i) {
        const a = parseInt(n.slice(o + 4, o + 6), 16), c = parseInt(n.slice(o + 7, o + 9), 16), f = parseInt(n.slice(o + 10, o + 12), 16);
        if ((a & 192) === 128 && (c & 192) === 128 && (f & 192) === 128) {
          let d = s << 18 & 1835008 | a << 12 & 258048 | c << 6 & 4032 | f & 63;
          d < 65536 || d > 1114111 ? r += "����" : (d -= 65536, r += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), o += 9;
          continue;
        }
      }
      r += "�";
    }
    return r;
  });
}
zt.defaultChars = ";/?:@&=+$,#";
zt.componentChars = "";
const xo = {};
function ml(e) {
  let t = xo[e];
  if (t)
    return t;
  t = xo[e] = [];
  for (let u = 0; u < 128; u++) {
    const n = String.fromCharCode(u);
    /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + u.toString(16).toUpperCase()).slice(-2));
  }
  for (let u = 0; u < e.length; u++)
    t[e.charCodeAt(u)] = e[u];
  return t;
}
function mu(e, t, u) {
  typeof t != "string" && (u = t, t = mu.defaultChars), typeof u > "u" && (u = !0);
  const n = ml(t);
  let r = "";
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e.charCodeAt(o);
    if (u && s === 37 && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) {
      r += e.slice(o, o + 3), o += 2;
      continue;
    }
    if (s < 128) {
      r += n[s];
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
mu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
mu.componentChars = "-_.!~*'()";
function wr(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function Ju() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const _l = /^([a-z0-9.+-]+:)/i, xl = /:[0-9]*$/, vl = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, El = ["<", ">", '"', "`", " ", "\r", `
`, "	"], yl = ["{", "}", "|", "\\", "^", "`"].concat(El), kl = ["'"].concat(yl), vo = ["%", "/", "?", ";", "#"].concat(kl), Eo = ["/", "?", "#"], wl = 255, yo = /^[+a-z0-9A-Z_-]{0,63}$/, Al = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, ko = {
  javascript: !0,
  "javascript:": !0
}, wo = {
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
function Ar(e, t) {
  if (e && e instanceof Ju) return e;
  const u = new Ju();
  return u.parse(e, t), u;
}
Ju.prototype.parse = function(e, t) {
  let u, n, r, o = e;
  if (o = o.trim(), !t && e.split("#").length === 1) {
    const c = vl.exec(o);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let i = _l.exec(o);
  if (i && (i = i[0], u = i.toLowerCase(), this.protocol = i, o = o.substr(i.length)), (t || i || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = o.substr(0, 2) === "//", r && !(i && ko[i]) && (o = o.substr(2), this.slashes = !0)), !ko[i] && (r || i && !wo[i])) {
    let c = -1;
    for (let l = 0; l < Eo.length; l++)
      n = o.indexOf(Eo[l]), n !== -1 && (c === -1 || n < c) && (c = n);
    let f, d;
    c === -1 ? d = o.lastIndexOf("@") : d = o.lastIndexOf("@", c), d !== -1 && (f = o.slice(0, d), o = o.slice(d + 1), this.auth = f), c = -1;
    for (let l = 0; l < vo.length; l++)
      n = o.indexOf(vo[l]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = o.length), o[c - 1] === ":" && c--;
    const h = o.slice(0, c);
    o = o.slice(c), this.parseHost(h), this.hostname = this.hostname || "";
    const b = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!b) {
      const l = this.hostname.split(/\./);
      for (let g = 0, m = l.length; g < m; g++) {
        const k = l[g];
        if (k && !k.match(yo)) {
          let _ = "";
          for (let v = 0, E = k.length; v < E; v++)
            k.charCodeAt(v) > 127 ? _ += "x" : _ += k[v];
          if (!_.match(yo)) {
            const v = l.slice(0, g), E = l.slice(g + 1), w = k.match(Al);
            w && (v.push(w[1]), E.unshift(w[2])), E.length && (o = E.join(".") + o), this.hostname = v.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > wl && (this.hostname = ""), b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = o.indexOf("#");
  s !== -1 && (this.hash = o.substr(s), o = o.slice(0, s));
  const a = o.indexOf("?");
  return a !== -1 && (this.search = o.substr(a), o = o.slice(0, a)), o && (this.pathname = o), wo[u] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Ju.prototype.parseHost = function(e) {
  let t = xl.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: zt,
  encode: mu,
  format: wr,
  parse: Ar
}, Symbol.toStringTag, { value: "Module" })), Wi = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Ki = /[\0-\x1F\x7F-\x9F]/, Sl = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Cr = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Vi = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, Ji = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Wi,
  Cc: Ki,
  Cf: Sl,
  P: Cr,
  S: Vi,
  Z: Ji
}, Symbol.toStringTag, { value: "Module" })), Tl = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Rl = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var In;
const Fl = /* @__PURE__ */ new Map([
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
]), Ol = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (In = String.fromCodePoint) !== null && In !== void 0 ? In : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Nl(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Fl.get(e)) !== null && t !== void 0 ? t : e;
}
var ve;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(ve || (ve = {}));
const Ml = 32;
var gt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(gt || (gt = {}));
function ur(e) {
  return e >= ve.ZERO && e <= ve.NINE;
}
function Il(e) {
  return e >= ve.UPPER_A && e <= ve.UPPER_F || e >= ve.LOWER_A && e <= ve.LOWER_F;
}
function Ll(e) {
  return e >= ve.UPPER_A && e <= ve.UPPER_Z || e >= ve.LOWER_A && e <= ve.LOWER_Z || ur(e);
}
function Bl(e) {
  return e === ve.EQUALS || Ll(e);
}
var xe;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(xe || (xe = {}));
var ht;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(ht || (ht = {}));
class Pl {
  constructor(t, u, n) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = n, this.state = xe.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ht.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = xe.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
  write(t, u) {
    switch (this.state) {
      case xe.EntityStart:
        return t.charCodeAt(u) === ve.NUM ? (this.state = xe.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = xe.NamedEntity, this.stateNamedEntity(t, u));
      case xe.NumericStart:
        return this.stateNumericStart(t, u);
      case xe.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case xe.NumericHex:
        return this.stateNumericHex(t, u);
      case xe.NamedEntity:
        return this.stateNamedEntity(t, u);
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
  stateNumericStart(t, u) {
    return u >= t.length ? -1 : (t.charCodeAt(u) | Ml) === ve.LOWER_X ? (this.state = xe.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = xe.NumericDecimal, this.stateNumericDecimal(t, u));
  }
  addToNumericResult(t, u, n, r) {
    if (u !== n) {
      const o = n - u;
      this.result = this.result * Math.pow(r, o) + parseInt(t.substr(u, o), r), this.consumed += o;
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
  stateNumericHex(t, u) {
    const n = u;
    for (; u < t.length; ) {
      const r = t.charCodeAt(u);
      if (ur(r) || Il(r))
        u += 1;
      else
        return this.addToNumericResult(t, n, u, 16), this.emitNumericEntity(r, 3);
    }
    return this.addToNumericResult(t, n, u, 16), -1;
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
  stateNumericDecimal(t, u) {
    const n = u;
    for (; u < t.length; ) {
      const r = t.charCodeAt(u);
      if (ur(r))
        u += 1;
      else
        return this.addToNumericResult(t, n, u, 10), this.emitNumericEntity(r, 2);
    }
    return this.addToNumericResult(t, n, u, 10), -1;
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
  emitNumericEntity(t, u) {
    var n;
    if (this.consumed <= u)
      return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === ve.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === ht.Strict)
      return 0;
    return this.emitCodePoint(Nl(this.result), this.consumed), this.errors && (t !== ve.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
  stateNamedEntity(t, u) {
    const { decodeTree: n } = this;
    let r = n[this.treeIndex], o = (r & gt.VALUE_LENGTH) >> 14;
    for (; u < t.length; u++, this.excess++) {
      const i = t.charCodeAt(u);
      if (this.treeIndex = zl(n, r, this.treeIndex + Math.max(1, o), i), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === ht.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        Bl(i)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], o = (r & gt.VALUE_LENGTH) >> 14, o !== 0) {
        if (i === ve.SEMI)
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
    const { result: u, decodeTree: n } = this, r = (n[u] & gt.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(u, r, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
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
  emitNamedEntityData(t, u, n) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(u === 1 ? r[t] & ~gt.VALUE_LENGTH : r[t + 1], n), u === 3 && this.emitCodePoint(r[t + 2], n), n;
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
      case xe.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== ht.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case xe.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case xe.NumericHex:
        return this.emitNumericEntity(0, 3);
      case xe.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case xe.EntityStart:
        return 0;
    }
  }
}
function Yi(e) {
  let t = "";
  const u = new Pl(e, (n) => t += Ol(n));
  return function(r, o) {
    let i = 0, s = 0;
    for (; (s = r.indexOf("&", s)) >= 0; ) {
      t += r.slice(i, s), u.startEntity(o);
      const c = u.write(
        r,
        // Skip the "&"
        s + 1
      );
      if (c < 0) {
        i = s + u.end();
        break;
      }
      i = s + c, s = c === 0 ? i + 1 : i;
    }
    const a = t + r.slice(i);
    return t = "", a;
  };
}
function zl(e, t, u, n) {
  const r = (t & gt.BRANCH_LENGTH) >> 7, o = t & gt.JUMP_TABLE;
  if (r === 0)
    return o !== 0 && n === o ? u : -1;
  if (o) {
    const a = n - o;
    return a < 0 || a >= r ? -1 : e[u + a] - 1;
  }
  let i = u, s = i + r - 1;
  for (; i <= s; ) {
    const a = i + s >>> 1, c = e[a];
    if (c < n)
      i = a + 1;
    else if (c > n)
      s = a - 1;
    else
      return e[a + r];
  }
  return -1;
}
const ql = Yi(Tl);
Yi(Rl);
function Xi(e, t = ht.Legacy) {
  return ql(e, t);
}
function Ul(e) {
  return Object.prototype.toString.call(e);
}
function Sr(e) {
  return Ul(e) === "[object String]";
}
const $l = Object.prototype.hasOwnProperty;
function jl(e, t) {
  return $l.call(e, t);
}
function gn(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    if (u) {
      if (typeof u != "object")
        throw new TypeError(u + "must be object");
      Object.keys(u).forEach(function(n) {
        e[n] = u[n];
      });
    }
  }), e;
}
function Qi(e, t, u) {
  return [].concat(e.slice(0, t), u, e.slice(t + 1));
}
function Dr(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function Yu(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), u = 56320 + (e & 1023);
    return String.fromCharCode(t, u);
  }
  return String.fromCharCode(e);
}
const es = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Hl = /&([a-z#][a-z0-9]{1,31});/gi, Gl = new RegExp(es.source + "|" + Hl.source, "gi"), Zl = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Wl(e, t) {
  if (t.charCodeAt(0) === 35 && Zl.test(t)) {
    const n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return Dr(n) ? Yu(n) : e;
  }
  const u = Xi(e);
  return u !== e ? u : e;
}
function Kl(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(es, "$1");
}
function qt(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(Gl, function(t, u, n) {
    return u || Wl(t, n);
  });
}
const Vl = /[&<>"]/, Jl = /[&<>"]/g, Yl = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Xl(e) {
  return Yl[e];
}
function vt(e) {
  return Vl.test(e) ? e.replace(Jl, Xl) : e;
}
const Ql = /[.?*+^$[\]\\(){}|-]/g;
function ef(e) {
  return e.replace(Ql, "\\$&");
}
function ne(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function iu(e) {
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
function su(e) {
  return Cr.test(e) || Vi.test(e);
}
function au(e) {
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
function mn(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const tf = { mdurl: Cl, ucmicro: Dl }, uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: Qi,
  assign: gn,
  escapeHtml: vt,
  escapeRE: ef,
  fromCodePoint: Yu,
  has: jl,
  isMdAsciiPunct: au,
  isPunctChar: su,
  isSpace: ne,
  isString: Sr,
  isValidEntityCode: Dr,
  isWhiteSpace: iu,
  lib: tf,
  normalizeReference: mn,
  unescapeAll: qt,
  unescapeMd: Kl
}, Symbol.toStringTag, { value: "Module" }));
function nf(e, t, u) {
  let n, r, o, i;
  const s = e.posMax, a = e.pos;
  for (e.pos = t + 1, n = 1; e.pos < s; ) {
    if (o = e.src.charCodeAt(e.pos), o === 93 && (n--, n === 0)) {
      r = !0;
      break;
    }
    if (i = e.pos, e.md.inline.skipToken(e), o === 91) {
      if (i === e.pos - 1)
        n++;
      else if (u)
        return e.pos = a, -1;
    }
  }
  let c = -1;
  return r && (c = e.pos), e.pos = a, c;
}
function rf(e, t, u) {
  let n, r = t;
  const o = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(r) === 60) {
    for (r++; r < u; ) {
      if (n = e.charCodeAt(r), n === 10 || n === 60)
        return o;
      if (n === 62)
        return o.pos = r + 1, o.str = qt(e.slice(t + 1, r)), o.ok = !0, o;
      if (n === 92 && r + 1 < u) {
        r += 2;
        continue;
      }
      r++;
    }
    return o;
  }
  let i = 0;
  for (; r < u && (n = e.charCodeAt(r), !(n === 32 || n < 32 || n === 127)); ) {
    if (n === 92 && r + 1 < u) {
      if (e.charCodeAt(r + 1) === 32)
        break;
      r += 2;
      continue;
    }
    if (n === 40 && (i++, i > 32))
      return o;
    if (n === 41) {
      if (i === 0)
        break;
      i--;
    }
    r++;
  }
  return t === r || i !== 0 || (o.str = qt(e.slice(t, r)), o.pos = r, o.ok = !0), o;
}
function of(e, t, u, n) {
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
  if (n)
    i.str = n.str, i.marker = n.marker;
  else {
    if (o >= u)
      return i;
    let s = e.charCodeAt(o);
    if (s !== 34 && s !== 39 && s !== 40)
      return i;
    t++, o++, s === 40 && (s = 41), i.marker = s;
  }
  for (; o < u; ) {
    if (r = e.charCodeAt(o), r === i.marker)
      return i.pos = o + 1, i.str += qt(e.slice(t, o)), i.ok = !0, i;
    if (r === 40 && i.marker === 41)
      return i;
    r === 92 && o + 1 < u && o++, o++;
  }
  return i.can_continue = !0, i.str += qt(e.slice(t, o)), i;
}
const sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: rf,
  parseLinkLabel: nf,
  parseLinkTitle: of
}, Symbol.toStringTag, { value: "Module" })), Xe = {};
Xe.code_inline = function(e, t, u, n, r) {
  const o = e[t];
  return "<code" + r.renderAttrs(o) + ">" + vt(o.content) + "</code>";
};
Xe.code_block = function(e, t, u, n, r) {
  const o = e[t];
  return "<pre" + r.renderAttrs(o) + "><code>" + vt(e[t].content) + `</code></pre>
`;
};
Xe.fence = function(e, t, u, n, r) {
  const o = e[t], i = o.info ? qt(o.info).trim() : "";
  let s = "", a = "";
  if (i) {
    const f = i.split(/(\s+)/g);
    s = f[0], a = f.slice(2).join("");
  }
  let c;
  if (u.highlight ? c = u.highlight(o.content, s, a) || vt(o.content) : c = vt(o.content), c.indexOf("<pre") === 0)
    return c + `
`;
  if (i) {
    const f = o.attrIndex("class"), d = o.attrs ? o.attrs.slice() : [];
    f < 0 ? d.push(["class", u.langPrefix + s]) : (d[f] = d[f].slice(), d[f][1] += " " + u.langPrefix + s);
    const h = {
      attrs: d
    };
    return `<pre><code${r.renderAttrs(h)}>${c}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(o)}>${c}</code></pre>
`;
};
Xe.image = function(e, t, u, n, r) {
  const o = e[t];
  return o.attrs[o.attrIndex("alt")][1] = r.renderInlineAsText(o.children, u, n), r.renderToken(e, t, u);
};
Xe.hardbreak = function(e, t, u) {
  return u.xhtmlOut ? `<br />
` : `<br>
`;
};
Xe.softbreak = function(e, t, u) {
  return u.breaks ? u.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Xe.text = function(e, t) {
  return vt(e[t].content);
};
Xe.html_block = function(e, t) {
  return e[t].content;
};
Xe.html_inline = function(e, t) {
  return e[t].content;
};
function Vt() {
  this.rules = gn({}, Xe);
}
Vt.prototype.renderAttrs = function(t) {
  let u, n, r;
  if (!t.attrs)
    return "";
  for (r = "", u = 0, n = t.attrs.length; u < n; u++)
    r += " " + vt(t.attrs[u][0]) + '="' + vt(t.attrs[u][1]) + '"';
  return r;
};
Vt.prototype.renderToken = function(t, u, n) {
  const r = t[u];
  let o = "";
  if (r.hidden)
    return "";
  r.block && r.nesting !== -1 && u && t[u - 1].hidden && (o += `
`), o += (r.nesting === -1 ? "</" : "<") + r.tag, o += this.renderAttrs(r), r.nesting === 0 && n.xhtmlOut && (o += " /");
  let i = !1;
  if (r.block && (i = !0, r.nesting === 1 && u + 1 < t.length)) {
    const s = t[u + 1];
    (s.type === "inline" || s.hidden || s.nesting === -1 && s.tag === r.tag) && (i = !1);
  }
  return o += i ? `>
` : ">", o;
};
Vt.prototype.renderInline = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    typeof r[s] < "u" ? n += r[s](e, o, t, u, this) : n += this.renderToken(e, o, t);
  }
  return n;
};
Vt.prototype.renderInlineAsText = function(e, t, u) {
  let n = "";
  for (let r = 0, o = e.length; r < o; r++)
    switch (e[r].type) {
      case "text":
        n += e[r].content;
        break;
      case "image":
        n += this.renderInlineAsText(e[r].children, t, u);
        break;
      case "html_inline":
      case "html_block":
        n += e[r].content;
        break;
      case "softbreak":
      case "hardbreak":
        n += `
`;
        break;
    }
  return n;
};
Vt.prototype.render = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    s === "inline" ? n += this.renderInline(e[o].children, t, u) : typeof r[s] < "u" ? n += r[s](e, o, t, u, this) : n += this.renderToken(e, o, t, u);
  }
  return n;
};
function Re() {
  this.__rules__ = [], this.__cache__ = null;
}
Re.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Re.prototype.__compile__ = function() {
  const e = this, t = [""];
  e.__rules__.forEach(function(u) {
    u.enabled && u.alt.forEach(function(n) {
      t.indexOf(n) < 0 && t.push(n);
    });
  }), e.__cache__ = {}, t.forEach(function(u) {
    e.__cache__[u] = [], e.__rules__.forEach(function(n) {
      n.enabled && (u && n.alt.indexOf(u) < 0 || e.__cache__[u].push(n.fn));
    });
  });
};
Re.prototype.at = function(e, t, u) {
  const n = this.__find__(e), r = u || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = t, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
Re.prototype.before = function(e, t, u, n) {
  const r = this.__find__(e), o = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r, 0, {
    name: t,
    enabled: !0,
    fn: u,
    alt: o.alt || []
  }), this.__cache__ = null;
};
Re.prototype.after = function(e, t, u, n) {
  const r = this.__find__(e), o = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r + 1, 0, {
    name: t,
    enabled: !0,
    fn: u,
    alt: o.alt || []
  }), this.__cache__ = null;
};
Re.prototype.push = function(e, t, u) {
  const n = u || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: n.alt || []
  }), this.__cache__ = null;
};
Re.prototype.enable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const u = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !0, u.push(n);
  }, this), this.__cache__ = null, u;
};
Re.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(u) {
    u.enabled = !1;
  }), this.enable(e, t);
};
Re.prototype.disable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const u = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !1, u.push(n);
  }, this), this.__cache__ = null, u;
};
Re.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function je(e, t, u) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = u, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
je.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const u = this.attrs;
  for (let n = 0, r = u.length; n < r; n++)
    if (u[n][0] === t)
      return n;
  return -1;
};
je.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
je.prototype.attrSet = function(t, u) {
  const n = this.attrIndex(t), r = [t, u];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
je.prototype.attrGet = function(t) {
  const u = this.attrIndex(t);
  let n = null;
  return u >= 0 && (n = this.attrs[u][1]), n;
};
je.prototype.attrJoin = function(t, u) {
  const n = this.attrIndex(t);
  n < 0 ? this.attrPush([t, u]) : this.attrs[n][1] = this.attrs[n][1] + " " + u;
};
function ts(e, t, u) {
  this.src = e, this.env = u, this.tokens = [], this.inlineMode = !1, this.md = t;
}
ts.prototype.Token = je;
const af = /\r\n?|\n/g, cf = /\0/g;
function lf(e) {
  let t;
  t = e.src.replace(af, `
`), t = t.replace(cf, "�"), e.src = t;
}
function ff(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function df(e) {
  const t = e.tokens;
  for (let u = 0, n = t.length; u < n; u++) {
    const r = t[u];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function hf(e) {
  return /^<a[>\s]/i.test(e);
}
function pf(e) {
  return /^<\/a\s*>/i.test(e);
}
function bf(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let u = 0, n = t.length; u < n; u++) {
      if (t[u].type !== "inline" || !e.md.linkify.pretest(t[u].content))
        continue;
      let r = t[u].children, o = 0;
      for (let i = r.length - 1; i >= 0; i--) {
        const s = r[i];
        if (s.type === "link_close") {
          for (i--; r[i].level !== s.level && r[i].type !== "link_open"; )
            i--;
          continue;
        }
        if (s.type === "html_inline" && (hf(s.content) && o > 0 && o--, pf(s.content) && o++), !(o > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const a = s.content;
          let c = e.md.linkify.match(a);
          const f = [];
          let d = s.level, h = 0;
          c.length > 0 && c[0].index === 0 && i > 0 && r[i - 1].type === "text_special" && (c = c.slice(1));
          for (let b = 0; b < c.length; b++) {
            const l = c[b].url, g = e.md.normalizeLink(l);
            if (!e.md.validateLink(g))
              continue;
            let m = c[b].text;
            c[b].schema ? c[b].schema === "mailto:" && !/^mailto:/i.test(m) ? m = e.md.normalizeLinkText("mailto:" + m).replace(/^mailto:/, "") : m = e.md.normalizeLinkText(m) : m = e.md.normalizeLinkText("http://" + m).replace(/^http:\/\//, "");
            const k = c[b].index;
            if (k > h) {
              const w = new e.Token("text", "", 0);
              w.content = a.slice(h, k), w.level = d, f.push(w);
            }
            const _ = new e.Token("link_open", "a", 1);
            _.attrs = [["href", g]], _.level = d++, _.markup = "linkify", _.info = "auto", f.push(_);
            const v = new e.Token("text", "", 0);
            v.content = m, v.level = d, f.push(v);
            const E = new e.Token("link_close", "a", -1);
            E.level = --d, E.markup = "linkify", E.info = "auto", f.push(E), h = c[b].lastIndex;
          }
          if (h < a.length) {
            const b = new e.Token("text", "", 0);
            b.content = a.slice(h), b.level = d, f.push(b);
          }
          t[u].children = r = Qi(r, i, f);
        }
      }
    }
}
const us = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, gf = /\((c|tm|r)\)/i, mf = /\((c|tm|r)\)/ig, _f = {
  c: "©",
  r: "®",
  tm: "™"
};
function xf(e, t) {
  return _f[t.toLowerCase()];
}
function vf(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && (n.content = n.content.replace(mf, xf)), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function Ef(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && us.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function yf(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (gf.test(e.tokens[t].content) && vf(e.tokens[t].children), us.test(e.tokens[t].content) && Ef(e.tokens[t].children));
}
const kf = /['"]/, Ao = /['"]/g, Co = "’";
function Tu(e, t, u) {
  return e.slice(0, t) + u + e.slice(t + 1);
}
function wf(e, t) {
  let u;
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r], i = e[r].level;
    for (u = n.length - 1; u >= 0 && !(n[u].level <= i); u--)
      ;
    if (n.length = u + 1, o.type !== "text")
      continue;
    let s = o.content, a = 0, c = s.length;
    e:
      for (; a < c; ) {
        Ao.lastIndex = a;
        const f = Ao.exec(s);
        if (!f)
          break;
        let d = !0, h = !0;
        a = f.index + 1;
        const b = f[0] === "'";
        let l = 32;
        if (f.index - 1 >= 0)
          l = s.charCodeAt(f.index - 1);
        else
          for (u = r - 1; u >= 0 && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u--)
            if (e[u].content) {
              l = e[u].content.charCodeAt(e[u].content.length - 1);
              break;
            }
        let g = 32;
        if (a < c)
          g = s.charCodeAt(a);
        else
          for (u = r + 1; u < e.length && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u++)
            if (e[u].content) {
              g = e[u].content.charCodeAt(0);
              break;
            }
        const m = au(l) || su(String.fromCharCode(l)), k = au(g) || su(String.fromCharCode(g)), _ = iu(l), v = iu(g);
        if (v ? d = !1 : k && (_ || m || (d = !1)), _ ? h = !1 : m && (v || k || (h = !1)), g === 34 && f[0] === '"' && l >= 48 && l <= 57 && (h = d = !1), d && h && (d = m, h = k), !d && !h) {
          b && (o.content = Tu(o.content, f.index, Co));
          continue;
        }
        if (h)
          for (u = n.length - 1; u >= 0; u--) {
            let E = n[u];
            if (n[u].level < i)
              break;
            if (E.single === b && n[u].level === i) {
              E = n[u];
              let w, A;
              b ? (w = t.md.options.quotes[2], A = t.md.options.quotes[3]) : (w = t.md.options.quotes[0], A = t.md.options.quotes[1]), o.content = Tu(o.content, f.index, A), e[E.token].content = Tu(
                e[E.token].content,
                E.pos,
                w
              ), a += A.length - 1, E.token === r && (a += w.length - 1), s = o.content, c = s.length, n.length = u;
              continue e;
            }
          }
        d ? n.push({
          token: r,
          pos: f.index,
          single: b,
          level: i
        }) : h && b && (o.content = Tu(o.content, f.index, Co));
      }
  }
}
function Af(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !kf.test(e.tokens[t].content) || wf(e.tokens[t].children, e);
}
function Cf(e) {
  let t, u;
  const n = e.tokens, r = n.length;
  for (let o = 0; o < r; o++) {
    if (n[o].type !== "inline") continue;
    const i = n[o].children, s = i.length;
    for (t = 0; t < s; t++)
      i[t].type === "text_special" && (i[t].type = "text");
    for (t = u = 0; t < s; t++)
      i[t].type === "text" && t + 1 < s && i[t + 1].type === "text" ? i[t + 1].content = i[t].content + i[t + 1].content : (t !== u && (i[u] = i[t]), u++);
    t !== u && (i.length = u);
  }
}
const Ln = [
  ["normalize", lf],
  ["block", ff],
  ["inline", df],
  ["linkify", bf],
  ["replacements", yf],
  ["smartquotes", Af],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Cf]
];
function Tr() {
  this.ruler = new Re();
  for (let e = 0; e < Ln.length; e++)
    this.ruler.push(Ln[e][0], Ln[e][1]);
}
Tr.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let u = 0, n = t.length; u < n; u++)
    t[u](e);
};
Tr.prototype.State = ts;
function Qe(e, t, u, n) {
  this.src = e, this.md = t, this.env = u, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let o = 0, i = 0, s = 0, a = 0, c = r.length, f = !1; i < c; i++) {
    const d = r.charCodeAt(i);
    if (!f)
      if (ne(d)) {
        s++, d === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        f = !0;
    (d === 10 || i === c - 1) && (d !== 10 && i++, this.bMarks.push(o), this.eMarks.push(i), this.tShift.push(s), this.sCount.push(a), this.bsCount.push(0), f = !1, s = 0, a = 0, o = i + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Qe.prototype.push = function(e, t, u) {
  const n = new je(e, t, u);
  return n.block = !0, u < 0 && this.level--, n.level = this.level, u > 0 && this.level++, this.tokens.push(n), n;
};
Qe.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
Qe.prototype.skipEmptyLines = function(t) {
  for (let u = this.lineMax; t < u && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
Qe.prototype.skipSpaces = function(t) {
  for (let u = this.src.length; t < u; t++) {
    const n = this.src.charCodeAt(t);
    if (!ne(n))
      break;
  }
  return t;
};
Qe.prototype.skipSpacesBack = function(t, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (!ne(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
Qe.prototype.skipChars = function(t, u) {
  for (let n = this.src.length; t < n && this.src.charCodeAt(t) === u; t++)
    ;
  return t;
};
Qe.prototype.skipCharsBack = function(t, u, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (u !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
Qe.prototype.getLines = function(t, u, n, r) {
  if (t >= u)
    return "";
  const o = new Array(u - t);
  for (let i = 0, s = t; s < u; s++, i++) {
    let a = 0;
    const c = this.bMarks[s];
    let f = c, d;
    for (s + 1 < u || r ? d = this.eMarks[s] + 1 : d = this.eMarks[s]; f < d && a < n; ) {
      const h = this.src.charCodeAt(f);
      if (ne(h))
        h === 9 ? a += 4 - (a + this.bsCount[s]) % 4 : a++;
      else if (f - c < this.tShift[s])
        a++;
      else
        break;
      f++;
    }
    a > n ? o[i] = new Array(a - n + 1).join(" ") + this.src.slice(f, d) : o[i] = this.src.slice(f, d);
  }
  return o.join("");
};
Qe.prototype.Token = je;
const Sf = 65536;
function Bn(e, t) {
  const u = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  return e.src.slice(u, n);
}
function So(e) {
  const t = [], u = e.length;
  let n = 0, r = e.charCodeAt(n), o = !1, i = 0, s = "";
  for (; n < u; )
    r === 124 && (o ? (s += e.substring(i, n - 1), i = n) : (t.push(s + e.substring(i, n)), s = "", i = n + 1)), o = r === 92, n++, r = e.charCodeAt(n);
  return t.push(s + e.substring(i)), t;
}
function Df(e, t, u, n) {
  if (t + 2 > u)
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
  if (s !== 124 && s !== 45 && s !== 58 && !ne(s) || i === 45 && ne(s))
    return !1;
  for (; o < e.eMarks[r]; ) {
    const E = e.src.charCodeAt(o);
    if (E !== 124 && E !== 45 && E !== 58 && !ne(E))
      return !1;
    o++;
  }
  let a = Bn(e, t + 1), c = a.split("|");
  const f = [];
  for (let E = 0; E < c.length; E++) {
    const w = c[E].trim();
    if (!w) {
      if (E === 0 || E === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(w))
      return !1;
    w.charCodeAt(w.length - 1) === 58 ? f.push(w.charCodeAt(0) === 58 ? "center" : "right") : w.charCodeAt(0) === 58 ? f.push("left") : f.push("");
  }
  if (a = Bn(e, t).trim(), a.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = So(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const d = c.length;
  if (d === 0 || d !== f.length)
    return !1;
  if (n)
    return !0;
  const h = e.parentType;
  e.parentType = "table";
  const b = e.md.block.ruler.getRules("blockquote"), l = e.push("table_open", "table", 1), g = [t, 0];
  l.map = g;
  const m = e.push("thead_open", "thead", 1);
  m.map = [t, t + 1];
  const k = e.push("tr_open", "tr", 1);
  k.map = [t, t + 1];
  for (let E = 0; E < c.length; E++) {
    const w = e.push("th_open", "th", 1);
    f[E] && (w.attrs = [["style", "text-align:" + f[E]]]);
    const A = e.push("inline", "", 0);
    A.content = c[E].trim(), A.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let _, v = 0;
  for (r = t + 2; r < u && !(e.sCount[r] < e.blkIndent); r++) {
    let E = !1;
    for (let A = 0, T = b.length; A < T; A++)
      if (b[A](e, r, u, !0)) {
        E = !0;
        break;
      }
    if (E || (a = Bn(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (c = So(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), v += d - c.length, v > Sf))
      break;
    if (r === t + 2) {
      const A = e.push("tbody_open", "tbody", 1);
      A.map = _ = [t + 2, 0];
    }
    const w = e.push("tr_open", "tr", 1);
    w.map = [r, r + 1];
    for (let A = 0; A < d; A++) {
      const T = e.push("td_open", "td", 1);
      f[A] && (T.attrs = [["style", "text-align:" + f[A]]]);
      const N = e.push("inline", "", 0);
      N.content = c[A] ? c[A].trim() : "", N.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return _ && (e.push("tbody_close", "tbody", -1), _[1] = r), e.push("table_close", "table", -1), g[1] = r, e.parentType = h, e.line = r, !0;
}
function Tf(e, t, u) {
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  let n = t + 1, r = n;
  for (; n < u; ) {
    if (e.isEmpty(n)) {
      n++;
      continue;
    }
    if (e.sCount[n] - e.blkIndent >= 4) {
      n++, r = n;
      continue;
    }
    break;
  }
  e.line = r;
  const o = e.push("code_block", "code", 0);
  return o.content = e.getLines(t, r, 4 + e.blkIndent, !1) + `
`, o.map = [t, e.line], !0;
}
function Rf(e, t, u, n) {
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
  const c = e.src.slice(s, r), f = e.src.slice(r, o);
  if (i === 96 && f.indexOf(String.fromCharCode(i)) >= 0)
    return !1;
  if (n)
    return !0;
  let d = t, h = !1;
  for (; d++, !(d >= u || (r = s = e.bMarks[d] + e.tShift[d], o = e.eMarks[d], r < o && e.sCount[d] < e.blkIndent)); )
    if (e.src.charCodeAt(r) === i && !(e.sCount[d] - e.blkIndent >= 4) && (r = e.skipChars(r, i), !(r - s < a) && (r = e.skipSpaces(r), !(r < o)))) {
      h = !0;
      break;
    }
  a = e.sCount[t], e.line = d + (h ? 1 : 0);
  const b = e.push("fence", "code", 0);
  return b.info = f, b.content = e.getLines(t + 1, d, a, !0), b.markup = c, b.map = [t, e.line], !0;
}
function Ff(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  const i = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62)
    return !1;
  if (n)
    return !0;
  const s = [], a = [], c = [], f = [], d = e.md.block.ruler.getRules("blockquote"), h = e.parentType;
  e.parentType = "blockquote";
  let b = !1, l;
  for (l = t; l < u; l++) {
    const v = e.sCount[l] < e.blkIndent;
    if (r = e.bMarks[l] + e.tShift[l], o = e.eMarks[l], r >= o)
      break;
    if (e.src.charCodeAt(r++) === 62 && !v) {
      let w = e.sCount[l] + 1, A, T;
      e.src.charCodeAt(r) === 32 ? (r++, w++, T = !1, A = !0) : e.src.charCodeAt(r) === 9 ? (A = !0, (e.bsCount[l] + w) % 4 === 3 ? (r++, w++, T = !1) : T = !0) : A = !1;
      let N = w;
      for (s.push(e.bMarks[l]), e.bMarks[l] = r; r < o; ) {
        const W = e.src.charCodeAt(r);
        if (ne(W))
          W === 9 ? N += 4 - (N + e.bsCount[l] + (T ? 1 : 0)) % 4 : N++;
        else
          break;
        r++;
      }
      b = r >= o, a.push(e.bsCount[l]), e.bsCount[l] = e.sCount[l] + 1 + (A ? 1 : 0), c.push(e.sCount[l]), e.sCount[l] = N - w, f.push(e.tShift[l]), e.tShift[l] = r - e.bMarks[l];
      continue;
    }
    if (b)
      break;
    let E = !1;
    for (let w = 0, A = d.length; w < A; w++)
      if (d[w](e, l, u, !0)) {
        E = !0;
        break;
      }
    if (E) {
      e.lineMax = l, e.blkIndent !== 0 && (s.push(e.bMarks[l]), a.push(e.bsCount[l]), f.push(e.tShift[l]), c.push(e.sCount[l]), e.sCount[l] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[l]), a.push(e.bsCount[l]), f.push(e.tShift[l]), c.push(e.sCount[l]), e.sCount[l] = -1;
  }
  const g = e.blkIndent;
  e.blkIndent = 0;
  const m = e.push("blockquote_open", "blockquote", 1);
  m.markup = ">";
  const k = [t, 0];
  m.map = k, e.md.block.tokenize(e, t, l);
  const _ = e.push("blockquote_close", "blockquote", -1);
  _.markup = ">", e.lineMax = i, e.parentType = h, k[1] = e.line;
  for (let v = 0; v < f.length; v++)
    e.bMarks[v + t] = s[v], e.tShift[v + t] = f[v], e.sCount[v + t] = c[v], e.bsCount[v + t] = a[v];
  return e.blkIndent = g, !0;
}
function Of(e, t, u, n) {
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
    if (c !== i && !ne(c))
      return !1;
    c === i && s++;
  }
  if (s < 3)
    return !1;
  if (n)
    return !0;
  e.line = t + 1;
  const a = e.push("hr", "hr", 0);
  return a.map = [t, e.line], a.markup = Array(s + 1).join(String.fromCharCode(i)), !0;
}
function Do(e, t) {
  const u = e.eMarks[t];
  let n = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < u) {
    const o = e.src.charCodeAt(n);
    if (!ne(o))
      return -1;
  }
  return n;
}
function To(e, t) {
  const u = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  let r = u;
  if (r + 1 >= n)
    return -1;
  let o = e.src.charCodeAt(r++);
  if (o < 48 || o > 57)
    return -1;
  for (; ; ) {
    if (r >= n)
      return -1;
    if (o = e.src.charCodeAt(r++), o >= 48 && o <= 57) {
      if (r - u >= 10)
        return -1;
      continue;
    }
    if (o === 41 || o === 46)
      break;
    return -1;
  }
  return r < n && (o = e.src.charCodeAt(r), !ne(o)) ? -1 : r;
}
function Nf(e, t) {
  const u = e.level + 2;
  for (let n = t + 2, r = e.tokens.length - 2; n < r; n++)
    e.tokens[n].level === u && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function Mf(e, t, u, n) {
  let r, o, i, s, a = t, c = !0;
  if (e.sCount[a] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[a] - e.listIndent >= 4 && e.sCount[a] < e.blkIndent)
    return !1;
  let f = !1;
  n && e.parentType === "paragraph" && e.sCount[a] >= e.blkIndent && (f = !0);
  let d, h, b;
  if ((b = To(e, a)) >= 0) {
    if (d = !0, i = e.bMarks[a] + e.tShift[a], h = Number(e.src.slice(i, b - 1)), f && h !== 1) return !1;
  } else if ((b = Do(e, a)) >= 0)
    d = !1;
  else
    return !1;
  if (f && e.skipSpaces(b) >= e.eMarks[a])
    return !1;
  if (n)
    return !0;
  const l = e.src.charCodeAt(b - 1), g = e.tokens.length;
  d ? (s = e.push("ordered_list_open", "ol", 1), h !== 1 && (s.attrs = [["start", h]])) : s = e.push("bullet_list_open", "ul", 1);
  const m = [a, 0];
  s.map = m, s.markup = String.fromCharCode(l);
  let k = !1;
  const _ = e.md.block.ruler.getRules("list"), v = e.parentType;
  for (e.parentType = "list"; a < u; ) {
    o = b, r = e.eMarks[a];
    const E = e.sCount[a] + b - (e.bMarks[a] + e.tShift[a]);
    let w = E;
    for (; o < r; ) {
      const U = e.src.charCodeAt(o);
      if (U === 9)
        w += 4 - (w + e.bsCount[a]) % 4;
      else if (U === 32)
        w++;
      else
        break;
      o++;
    }
    const A = o;
    let T;
    A >= r ? T = 1 : T = w - E, T > 4 && (T = 1);
    const N = E + T;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(l);
    const W = [a, 0];
    s.map = W, d && (s.info = e.src.slice(i, b - 1));
    const V = e.tight, Q = e.tShift[a], B = e.sCount[a], J = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = N, e.tight = !0, e.tShift[a] = A - e.bMarks[a], e.sCount[a] = w, A >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, u) : e.md.block.tokenize(e, a, u, !0), (!e.tight || k) && (c = !1), k = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = J, e.tShift[a] = Q, e.sCount[a] = B, e.tight = V, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(l), a = e.line, W[1] = a, a >= u || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let G = !1;
    for (let U = 0, j = _.length; U < j; U++)
      if (_[U](e, a, u, !0)) {
        G = !0;
        break;
      }
    if (G)
      break;
    if (d) {
      if (b = To(e, a), b < 0)
        break;
      i = e.bMarks[a] + e.tShift[a];
    } else if (b = Do(e, a), b < 0)
      break;
    if (l !== e.src.charCodeAt(b - 1))
      break;
  }
  return d ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(l), m[1] = a, e.line = a, e.parentType = v, c && Nf(e, g), !0;
}
function If(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t], i = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(_) {
    const v = e.lineMax;
    if (_ >= v || e.isEmpty(_))
      return null;
    let E = !1;
    if (e.sCount[_] - e.blkIndent > 3 && (E = !0), e.sCount[_] < 0 && (E = !0), !E) {
      const T = e.md.block.ruler.getRules("reference"), N = e.parentType;
      e.parentType = "reference";
      let W = !1;
      for (let V = 0, Q = T.length; V < Q; V++)
        if (T[V](e, _, v, !0)) {
          W = !0;
          break;
        }
      if (e.parentType = N, W)
        return null;
    }
    const w = e.bMarks[_] + e.tShift[_], A = e.eMarks[_];
    return e.src.slice(w, A + 1);
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
    } else if (!ne(_)) break;
  }
  const f = e.md.helpers.parseLinkDestination(a, r, o);
  if (!f.ok)
    return !1;
  const d = e.md.normalizeLink(f.str);
  if (!e.md.validateLink(d))
    return !1;
  r = f.pos;
  const h = r, b = i, l = r;
  for (; r < o; r++) {
    const _ = a.charCodeAt(r);
    if (_ === 10) {
      const v = s(i);
      v !== null && (a += v, o = a.length, i++);
    } else if (!ne(_)) break;
  }
  let g = e.md.helpers.parseLinkTitle(a, r, o);
  for (; g.can_continue; ) {
    const _ = s(i);
    if (_ === null) break;
    a += _, r = o, o = a.length, i++, g = e.md.helpers.parseLinkTitle(a, r, o, g);
  }
  let m;
  for (r < o && l !== r && g.ok ? (m = g.str, r = g.pos) : (m = "", r = h, i = b); r < o; ) {
    const _ = a.charCodeAt(r);
    if (!ne(_))
      break;
    r++;
  }
  if (r < o && a.charCodeAt(r) !== 10 && m)
    for (m = "", r = h, i = b; r < o; ) {
      const _ = a.charCodeAt(r);
      if (!ne(_))
        break;
      r++;
    }
  if (r < o && a.charCodeAt(r) !== 10)
    return !1;
  const k = mn(a.slice(1, c));
  return k ? (n || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[k] > "u" && (e.env.references[k] = { title: m, href: d }), e.line = i), !0) : !1;
}
const Lf = [
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
], Bf = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Pf = "[^\"'=<>`\\x00-\\x20]+", zf = "'[^']*'", qf = '"[^"]*"', Uf = "(?:" + Pf + "|" + zf + "|" + qf + ")", $f = "(?:\\s+" + Bf + "(?:\\s*=\\s*" + Uf + ")?)", ns = "<[A-Za-z][A-Za-z0-9\\-]*" + $f + "*\\s*\\/?>", rs = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", jf = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", Hf = "<[?][\\s\\S]*?[?]>", Gf = "<![A-Za-z][^>]*>", Zf = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Wf = new RegExp("^(?:" + ns + "|" + rs + "|" + jf + "|" + Hf + "|" + Gf + "|" + Zf + ")"), Kf = new RegExp("^(?:" + ns + "|" + rs + ")"), Nt = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Lf.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Kf.source + "\\s*$"), /^$/, !1]
];
function Vf(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let i = e.src.slice(r, o), s = 0;
  for (; s < Nt.length && !Nt[s][0].test(i); s++)
    ;
  if (s === Nt.length)
    return !1;
  if (n)
    return Nt[s][2];
  let a = t + 1;
  if (!Nt[s][1].test(i)) {
    for (; a < u && !(e.sCount[a] < e.blkIndent); a++)
      if (r = e.bMarks[a] + e.tShift[a], o = e.eMarks[a], i = e.src.slice(r, o), Nt[s][1].test(i)) {
        i.length !== 0 && a++;
        break;
      }
  }
  e.line = a;
  const c = e.push("html_block", "", 0);
  return c.map = [t, a], c.content = e.getLines(t, a, e.blkIndent, !0), !0;
}
function Jf(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let i = e.src.charCodeAt(r);
  if (i !== 35 || r >= o)
    return !1;
  let s = 1;
  for (i = e.src.charCodeAt(++r); i === 35 && r < o && s <= 6; )
    s++, i = e.src.charCodeAt(++r);
  if (s > 6 || r < o && !ne(i))
    return !1;
  if (n)
    return !0;
  o = e.skipSpacesBack(o, r);
  const a = e.skipCharsBack(o, 35, r);
  a > r && ne(e.src.charCodeAt(a - 1)) && (o = a), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(s), 1);
  c.markup = "########".slice(0, s), c.map = [t, e.line];
  const f = e.push("inline", "", 0);
  f.content = e.src.slice(r, o).trim(), f.map = [t, e.line], f.children = [];
  const d = e.push("heading_close", "h" + String(s), -1);
  return d.markup = "########".slice(0, s), !0;
}
function Yf(e, t, u) {
  const n = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const r = e.parentType;
  e.parentType = "paragraph";
  let o = 0, i, s = t + 1;
  for (; s < u && !e.isEmpty(s); s++) {
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
    let h = !1;
    for (let b = 0, l = n.length; b < l; b++)
      if (n[b](e, s, u, !0)) {
        h = !0;
        break;
      }
    if (h)
      break;
  }
  if (!o)
    return !1;
  const a = e.getLines(t, s, e.blkIndent, !1).trim();
  e.line = s + 1;
  const c = e.push("heading_open", "h" + String(o), 1);
  c.markup = String.fromCharCode(i), c.map = [t, e.line];
  const f = e.push("inline", "", 0);
  f.content = a, f.map = [t, e.line - 1], f.children = [];
  const d = e.push("heading_close", "h" + String(o), -1);
  return d.markup = String.fromCharCode(i), e.parentType = r, !0;
}
function Xf(e, t, u) {
  const n = e.md.block.ruler.getRules("paragraph"), r = e.parentType;
  let o = t + 1;
  for (e.parentType = "paragraph"; o < u && !e.isEmpty(o); o++) {
    if (e.sCount[o] - e.blkIndent > 3 || e.sCount[o] < 0)
      continue;
    let c = !1;
    for (let f = 0, d = n.length; f < d; f++)
      if (n[f](e, o, u, !0)) {
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
const Ru = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Df, ["paragraph", "reference"]],
  ["code", Tf],
  ["fence", Rf, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Ff, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Of, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Mf, ["paragraph", "reference", "blockquote"]],
  ["reference", If],
  ["html_block", Vf, ["paragraph", "reference", "blockquote"]],
  ["heading", Jf, ["paragraph", "reference", "blockquote"]],
  ["lheading", Yf],
  ["paragraph", Xf]
];
function _n() {
  this.ruler = new Re();
  for (let e = 0; e < Ru.length; e++)
    this.ruler.push(Ru[e][0], Ru[e][1], { alt: (Ru[e][2] || []).slice() });
}
_n.prototype.tokenize = function(e, t, u) {
  const n = this.ruler.getRules(""), r = n.length, o = e.md.options.maxNesting;
  let i = t, s = !1;
  for (; i < u && (e.line = i = e.skipEmptyLines(i), !(i >= u || e.sCount[i] < e.blkIndent)); ) {
    if (e.level >= o) {
      e.line = u;
      break;
    }
    const a = e.line;
    let c = !1;
    for (let f = 0; f < r; f++)
      if (c = n[f](e, i, u, !1), c) {
        if (a >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!c) throw new Error("none of the block rules matched");
    e.tight = !s, e.isEmpty(e.line - 1) && (s = !0), i = e.line, i < u && e.isEmpty(i) && (s = !0, i++, e.line = i);
  }
};
_n.prototype.parse = function(e, t, u, n) {
  if (!e)
    return;
  const r = new this.State(e, t, u, n);
  this.tokenize(r, r.line, r.lineMax);
};
_n.prototype.State = Qe;
function _u(e, t, u, n) {
  this.src = e, this.env = u, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
_u.prototype.pushPending = function() {
  const e = new je("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
_u.prototype.push = function(e, t, u) {
  this.pending && this.pushPending();
  const n = new je(e, t, u);
  let r = null;
  return u < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, u > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
_u.prototype.scanDelims = function(e, t) {
  const u = this.posMax, n = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let o = e;
  for (; o < u && this.src.charCodeAt(o) === n; )
    o++;
  const i = o - e, s = o < u ? this.src.charCodeAt(o) : 32, a = au(r) || su(String.fromCharCode(r)), c = au(s) || su(String.fromCharCode(s)), f = iu(r), d = iu(s), h = !d && (!c || f || a), b = !f && (!a || d || c);
  return { can_open: h && (t || !b || a), can_close: b && (t || !h || c), length: i };
};
_u.prototype.Token = je;
function Qf(e) {
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
function ed(e, t) {
  let u = e.pos;
  for (; u < e.posMax && !Qf(e.src.charCodeAt(u)); )
    u++;
  return u === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, u)), e.pos = u, !0);
}
const td = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function ud(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const u = e.pos, n = e.posMax;
  if (u + 3 > n || e.src.charCodeAt(u) !== 58 || e.src.charCodeAt(u + 1) !== 47 || e.src.charCodeAt(u + 2) !== 47) return !1;
  const r = e.pending.match(td);
  if (!r) return !1;
  const o = r[1], i = e.md.linkify.matchAtStart(e.src.slice(u - o.length));
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
    const f = e.push("text", "", 0);
    f.content = e.md.normalizeLinkText(s);
    const d = e.push("link_close", "a", -1);
    d.markup = "linkify", d.info = "auto";
  }
  return e.pos += s.length - o.length, !0;
}
function nd(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 10)
    return !1;
  const n = e.pending.length - 1, r = e.posMax;
  if (!t)
    if (n >= 0 && e.pending.charCodeAt(n) === 32)
      if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
        let o = n - 1;
        for (; o >= 1 && e.pending.charCodeAt(o - 1) === 32; ) o--;
        e.pending = e.pending.slice(0, o), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (u++; u < r && ne(e.src.charCodeAt(u)); )
    u++;
  return e.pos = u, !0;
}
const Rr = [];
for (let e = 0; e < 256; e++)
  Rr.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  Rr[e.charCodeAt(0)] = 1;
});
function rd(e, t) {
  let u = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(u) !== 92 || (u++, u >= n)) return !1;
  let r = e.src.charCodeAt(u);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), u++; u < n && (r = e.src.charCodeAt(u), !!ne(r)); )
      u++;
    return e.pos = u, !0;
  }
  let o = e.src[u];
  if (r >= 55296 && r <= 56319 && u + 1 < n) {
    const s = e.src.charCodeAt(u + 1);
    s >= 56320 && s <= 57343 && (o += e.src[u + 1], u++);
  }
  const i = "\\" + o;
  if (!t) {
    const s = e.push("text_special", "", 0);
    r < 256 && Rr[r] !== 0 ? s.content = o : s.content = i, s.markup = i, s.info = "escape";
  }
  return e.pos = u + 1, !0;
}
function od(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 96)
    return !1;
  const r = u;
  u++;
  const o = e.posMax;
  for (; u < o && e.src.charCodeAt(u) === 96; )
    u++;
  const i = e.src.slice(r, u), s = i.length;
  if (e.backticksScanned && (e.backticks[s] || 0) <= r)
    return t || (e.pending += i), e.pos += s, !0;
  let a = u, c;
  for (; (c = e.src.indexOf("`", a)) !== -1; ) {
    for (a = c + 1; a < o && e.src.charCodeAt(a) === 96; )
      a++;
    const f = a - c;
    if (f === s) {
      if (!t) {
        const d = e.push("code_inline", "code", 0);
        d.markup = i, d.content = e.src.slice(u, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = a, !0;
    }
    e.backticks[f] = c;
  }
  return e.backticksScanned = !0, t || (e.pending += i), e.pos += s, !0;
}
function id(e, t) {
  const u = e.pos, n = e.src.charCodeAt(u);
  if (t || n !== 126)
    return !1;
  const r = e.scanDelims(e.pos, !0);
  let o = r.length;
  const i = String.fromCharCode(n);
  if (o < 2)
    return !1;
  let s;
  o % 2 && (s = e.push("text", "", 0), s.content = i, o--);
  for (let a = 0; a < o; a += 2)
    s = e.push("text", "", 0), s.content = i + i, e.delimiters.push({
      marker: n,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
}
function Ro(e, t) {
  let u;
  const n = [], r = t.length;
  for (let o = 0; o < r; o++) {
    const i = t[o];
    if (i.marker !== 126 || i.end === -1)
      continue;
    const s = t[i.end];
    u = e.tokens[i.token], u.type = "s_open", u.tag = "s", u.nesting = 1, u.markup = "~~", u.content = "", u = e.tokens[s.token], u.type = "s_close", u.tag = "s", u.nesting = -1, u.markup = "~~", u.content = "", e.tokens[s.token - 1].type === "text" && e.tokens[s.token - 1].content === "~" && n.push(s.token - 1);
  }
  for (; n.length; ) {
    const o = n.pop();
    let i = o + 1;
    for (; i < e.tokens.length && e.tokens[i].type === "s_close"; )
      i++;
    i--, o !== i && (u = e.tokens[i], e.tokens[i] = e.tokens[o], e.tokens[o] = u);
  }
}
function sd(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  Ro(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && Ro(e, t[n].delimiters);
}
const os = {
  tokenize: id,
  postProcess: sd
};
function ad(e, t) {
  const u = e.pos, n = e.src.charCodeAt(u);
  if (t || n !== 95 && n !== 42)
    return !1;
  const r = e.scanDelims(e.pos, n === 42);
  for (let o = 0; o < r.length; o++) {
    const i = e.push("text", "", 0);
    i.content = String.fromCharCode(n), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: n,
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
function Fo(e, t) {
  const u = t.length;
  for (let n = u - 1; n >= 0; n--) {
    const r = t[n];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1)
      continue;
    const o = t[r.end], i = n > 0 && t[n - 1].end === r.end + 1 && // check that first two markers match and adjacent
    t[n - 1].marker === r.marker && t[n - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[r.end + 1].token === o.token + 1, s = String.fromCharCode(r.marker), a = e.tokens[r.token];
    a.type = i ? "strong_open" : "em_open", a.tag = i ? "strong" : "em", a.nesting = 1, a.markup = i ? s + s : s, a.content = "";
    const c = e.tokens[o.token];
    c.type = i ? "strong_close" : "em_close", c.tag = i ? "strong" : "em", c.nesting = -1, c.markup = i ? s + s : s, c.content = "", i && (e.tokens[t[n - 1].token].content = "", e.tokens[t[r.end + 1].token].content = "", n--);
  }
}
function cd(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  Fo(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && Fo(e, t[n].delimiters);
}
const is = {
  tokenize: ad,
  postProcess: cd
};
function ld(e, t) {
  let u, n, r, o, i = "", s = "", a = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const f = e.pos, d = e.posMax, h = e.pos + 1, b = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (b < 0)
    return !1;
  let l = b + 1;
  if (l < d && e.src.charCodeAt(l) === 40) {
    for (c = !1, l++; l < d && (u = e.src.charCodeAt(l), !(!ne(u) && u !== 10)); l++)
      ;
    if (l >= d)
      return !1;
    if (a = l, r = e.md.helpers.parseLinkDestination(e.src, l, e.posMax), r.ok) {
      for (i = e.md.normalizeLink(r.str), e.md.validateLink(i) ? l = r.pos : i = "", a = l; l < d && (u = e.src.charCodeAt(l), !(!ne(u) && u !== 10)); l++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, l, e.posMax), l < d && a !== l && r.ok)
        for (s = r.str, l = r.pos; l < d && (u = e.src.charCodeAt(l), !(!ne(u) && u !== 10)); l++)
          ;
    }
    (l >= d || e.src.charCodeAt(l) !== 41) && (c = !0), l++;
  }
  if (c) {
    if (typeof e.env.references > "u")
      return !1;
    if (l < d && e.src.charCodeAt(l) === 91 ? (a = l + 1, l = e.md.helpers.parseLinkLabel(e, l), l >= 0 ? n = e.src.slice(a, l++) : l = b + 1) : l = b + 1, n || (n = e.src.slice(h, b)), o = e.env.references[mn(n)], !o)
      return e.pos = f, !1;
    i = o.href, s = o.title;
  }
  if (!t) {
    e.pos = h, e.posMax = b;
    const g = e.push("link_open", "a", 1), m = [["href", i]];
    g.attrs = m, s && m.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = l, e.posMax = d, !0;
}
function fd(e, t) {
  let u, n, r, o, i, s, a, c, f = "";
  const d = e.pos, h = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const b = e.pos + 2, l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (l < 0)
    return !1;
  if (o = l + 1, o < h && e.src.charCodeAt(o) === 40) {
    for (o++; o < h && (u = e.src.charCodeAt(o), !(!ne(u) && u !== 10)); o++)
      ;
    if (o >= h)
      return !1;
    for (c = o, s = e.md.helpers.parseLinkDestination(e.src, o, e.posMax), s.ok && (f = e.md.normalizeLink(s.str), e.md.validateLink(f) ? o = s.pos : f = ""), c = o; o < h && (u = e.src.charCodeAt(o), !(!ne(u) && u !== 10)); o++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, o, e.posMax), o < h && c !== o && s.ok)
      for (a = s.str, o = s.pos; o < h && (u = e.src.charCodeAt(o), !(!ne(u) && u !== 10)); o++)
        ;
    else
      a = "";
    if (o >= h || e.src.charCodeAt(o) !== 41)
      return e.pos = d, !1;
    o++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (o < h && e.src.charCodeAt(o) === 91 ? (c = o + 1, o = e.md.helpers.parseLinkLabel(e, o), o >= 0 ? r = e.src.slice(c, o++) : o = l + 1) : o = l + 1, r || (r = e.src.slice(b, l)), i = e.env.references[mn(r)], !i)
      return e.pos = d, !1;
    f = i.href, a = i.title;
  }
  if (!t) {
    n = e.src.slice(b, l);
    const g = [];
    e.md.inline.parse(
      n,
      e.md,
      e.env,
      g
    );
    const m = e.push("image", "img", 0), k = [["src", f], ["alt", ""]];
    m.attrs = k, m.children = g, m.content = n, a && k.push(["title", a]);
  }
  return e.pos = o, e.posMax = h, !0;
}
const dd = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, hd = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function pd(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 60)
    return !1;
  const n = e.pos, r = e.posMax;
  for (; ; ) {
    if (++u >= r) return !1;
    const i = e.src.charCodeAt(u);
    if (i === 60) return !1;
    if (i === 62) break;
  }
  const o = e.src.slice(n + 1, u);
  if (hd.test(o)) {
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
  if (dd.test(o)) {
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
function bd(e) {
  return /^<a[>\s]/i.test(e);
}
function gd(e) {
  return /^<\/a\s*>/i.test(e);
}
function md(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function _d(e, t) {
  if (!e.md.options.html)
    return !1;
  const u = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= u)
    return !1;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !md(r))
    return !1;
  const o = e.src.slice(n).match(Wf);
  if (!o)
    return !1;
  if (!t) {
    const i = e.push("html_inline", "", 0);
    i.content = o[0], bd(i.content) && e.linkLevel++, gd(i.content) && e.linkLevel--;
  }
  return e.pos += o[0].length, !0;
}
const xd = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, vd = /^&([a-z][a-z0-9]{1,31});/i;
function Ed(e, t) {
  const u = e.pos, n = e.posMax;
  if (e.src.charCodeAt(u) !== 38 || u + 1 >= n) return !1;
  if (e.src.charCodeAt(u + 1) === 35) {
    const o = e.src.slice(u).match(xd);
    if (o) {
      if (!t) {
        const i = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), s = e.push("text_special", "", 0);
        s.content = Dr(i) ? Yu(i) : Yu(65533), s.markup = o[0], s.info = "entity";
      }
      return e.pos += o[0].length, !0;
    }
  } else {
    const o = e.src.slice(u).match(vd);
    if (o) {
      const i = Xi(o[0]);
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
function Oo(e) {
  const t = {}, u = e.length;
  if (!u) return;
  let n = 0, r = -2;
  const o = [];
  for (let i = 0; i < u; i++) {
    const s = e[i];
    if (o.push(0), (e[n].marker !== s.marker || r !== s.token - 1) && (n = i), r = s.token, s.length = s.length || 0, !s.close) continue;
    t.hasOwnProperty(s.marker) || (t[s.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = t[s.marker][(s.open ? 3 : 0) + s.length % 3];
    let c = n - o[n] - 1, f = c;
    for (; c > a; c -= o[c] + 1) {
      const d = e[c];
      if (d.marker === s.marker && d.open && d.end < 0) {
        let h = !1;
        if ((d.close || s.open) && (d.length + s.length) % 3 === 0 && (d.length % 3 !== 0 || s.length % 3 !== 0) && (h = !0), !h) {
          const b = c > 0 && !e[c - 1].open ? o[c - 1] + 1 : 0;
          o[i] = i - c + b, o[c] = b, s.open = !1, d.end = i, d.close = !1, f = -1, r = -2;
          break;
        }
      }
    }
    f !== -1 && (t[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = f);
  }
}
function yd(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  Oo(e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && Oo(t[n].delimiters);
}
function kd(e) {
  let t, u, n = 0;
  const r = e.tokens, o = e.tokens.length;
  for (t = u = 0; t < o; t++)
    r[t].nesting < 0 && n--, r[t].level = n, r[t].nesting > 0 && n++, r[t].type === "text" && t + 1 < o && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== u && (r[u] = r[t]), u++);
  t !== u && (r.length = u);
}
const Pn = [
  ["text", ed],
  ["linkify", ud],
  ["newline", nd],
  ["escape", rd],
  ["backticks", od],
  ["strikethrough", os.tokenize],
  ["emphasis", is.tokenize],
  ["link", ld],
  ["image", fd],
  ["autolink", pd],
  ["html_inline", _d],
  ["entity", Ed]
], zn = [
  ["balance_pairs", yd],
  ["strikethrough", os.postProcess],
  ["emphasis", is.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", kd]
];
function xu() {
  this.ruler = new Re();
  for (let e = 0; e < Pn.length; e++)
    this.ruler.push(Pn[e][0], Pn[e][1]);
  this.ruler2 = new Re();
  for (let e = 0; e < zn.length; e++)
    this.ruler2.push(zn[e][0], zn[e][1]);
}
xu.prototype.skipToken = function(e) {
  const t = e.pos, u = this.ruler.getRules(""), n = u.length, r = e.md.options.maxNesting, o = e.cache;
  if (typeof o[t] < "u") {
    e.pos = o[t];
    return;
  }
  let i = !1;
  if (e.level < r) {
    for (let s = 0; s < n; s++)
      if (e.level++, i = u[s](e, !0), e.level--, i) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  i || e.pos++, o[t] = e.pos;
};
xu.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), u = t.length, n = e.posMax, r = e.md.options.maxNesting;
  for (; e.pos < n; ) {
    const o = e.pos;
    let i = !1;
    if (e.level < r) {
      for (let s = 0; s < u; s++)
        if (i = t[s](e, !1), i) {
          if (o >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (i) {
      if (e.pos >= n)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
xu.prototype.parse = function(e, t, u, n) {
  const r = new this.State(e, t, u, n);
  this.tokenize(r);
  const o = this.ruler2.getRules(""), i = o.length;
  for (let s = 0; s < i; s++)
    o[s](r);
};
xu.prototype.State = _u;
function wd(e) {
  const t = {};
  e = e || {}, t.src_Any = Wi.source, t.src_Cc = Ki.source, t.src_Z = Ji.source, t.src_P = Cr.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const u = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + u + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + u + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + u + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + u + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function nr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    u && Object.keys(u).forEach(function(n) {
      e[n] = u[n];
    });
  }), e;
}
function xn(e) {
  return Object.prototype.toString.call(e);
}
function Ad(e) {
  return xn(e) === "[object String]";
}
function Cd(e) {
  return xn(e) === "[object Object]";
}
function Sd(e) {
  return xn(e) === "[object RegExp]";
}
function No(e) {
  return xn(e) === "[object Function]";
}
function Dd(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const ss = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Td(e) {
  return Object.keys(e || {}).reduce(function(t, u) {
    return t || ss.hasOwnProperty(u);
  }, !1);
}
const Rd = {
  "http:": {
    validate: function(e, t, u) {
      const n = e.slice(t);
      return u.re.http || (u.re.http = new RegExp(
        "^\\/\\/" + u.re.src_auth + u.re.src_host_port_strict + u.re.src_path,
        "i"
      )), u.re.http.test(n) ? n.match(u.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, t, u) {
      const n = e.slice(t);
      return u.re.no_http || (u.re.no_http = new RegExp(
        "^" + u.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + u.re.src_domain + ")\\.)+" + u.re.src_domain_root + ")" + u.re.src_port + u.re.src_host_terminator + u.re.src_path,
        "i"
      )), u.re.no_http.test(n) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : n.match(u.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, t, u) {
      const n = e.slice(t);
      return u.re.mailto || (u.re.mailto = new RegExp(
        "^" + u.re.src_email_name + "@" + u.re.src_host_strict,
        "i"
      )), u.re.mailto.test(n) ? n.match(u.re.mailto)[0].length : 0;
    }
  }
}, Fd = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Od = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function Nd(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function Md(e) {
  return function(t, u) {
    const n = t.slice(u);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function Mo() {
  return function(e, t) {
    t.normalize(e);
  };
}
function Xu(e) {
  const t = e.re = wd(e.__opts__), u = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || u.push(Fd), u.push(t.src_xn), t.src_tlds = u.join("|");
  function n(s) {
    return s.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(n(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(n(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(n(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(n(t.tpl_host_fuzzy_test), "i");
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
    if (e.__compiled__[s] = c, Cd(a)) {
      Sd(a.validate) ? c.validate = Md(a.validate) : No(a.validate) ? c.validate = a.validate : o(s, a), No(a.normalize) ? c.normalize = a.normalize : a.normalize ? o(s, a) : c.normalize = Mo();
      return;
    }
    if (Ad(a)) {
      r.push(s);
      return;
    }
    o(s, a);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: Mo() };
  const i = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(Dd).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), Nd(e);
}
function Id(e, t) {
  const u = e.__index__, n = e.__last_index__, r = e.__text_cache__.slice(u, n);
  this.schema = e.__schema__.toLowerCase(), this.index = u + t, this.lastIndex = n + t, this.raw = r, this.text = r, this.url = r;
}
function rr(e, t) {
  const u = new Id(e, t);
  return e.__compiled__[u.schema].normalize(u, e), u;
}
function Me(e, t) {
  if (!(this instanceof Me))
    return new Me(e, t);
  t || Td(e) && (t = e, e = {}), this.__opts__ = nr({}, ss, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = nr({}, Rd, e), this.__compiled__ = {}, this.__tlds__ = Od, this.__tlds_replaced__ = !1, this.re = {}, Xu(this);
}
Me.prototype.add = function(t, u) {
  return this.__schemas__[t] = u, Xu(this), this;
};
Me.prototype.set = function(t) {
  return this.__opts__ = nr(this.__opts__, t), this;
};
Me.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let u, n, r, o, i, s, a, c, f;
  if (this.re.schema_test.test(t)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (u = a.exec(t)) !== null; )
      if (o = this.testSchemaAt(t, u[2], a.lastIndex), o) {
        this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (n = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (f = t.indexOf("@"), f >= 0 && (r = t.match(this.re.email_fuzzy)) !== null && (i = r.index + r[1].length, s = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = s))), this.__index__ >= 0;
};
Me.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Me.prototype.testSchemaAt = function(t, u, n) {
  return this.__compiled__[u.toLowerCase()] ? this.__compiled__[u.toLowerCase()].validate(t, n, this) : 0;
};
Me.prototype.match = function(t) {
  const u = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (u.push(rr(this, n)), n = this.__last_index__);
  let r = n ? t.slice(n) : t;
  for (; this.test(r); )
    u.push(rr(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return u.length ? u : null;
};
Me.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const u = this.re.schema_at_start.exec(t);
  if (!u) return null;
  const n = this.testSchemaAt(t, u[2], u[0].length);
  return n ? (this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + n, rr(this, 0)) : null;
};
Me.prototype.tlds = function(t, u) {
  return t = Array.isArray(t) ? t : [t], u ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, r, o) {
    return n !== o[r - 1];
  }).reverse(), Xu(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, Xu(this), this);
};
Me.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Me.prototype.onCompile = function() {
};
const Lt = 2147483647, Ve = 36, Fr = 1, cu = 26, Ld = 38, Bd = 700, as = 72, cs = 128, ls = "-", Pd = /^xn--/, zd = /[^\0-\x7F]/, qd = /[\x2E\u3002\uFF0E\uFF61]/g, Ud = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, qn = Ve - Fr, Je = Math.floor, Un = String.fromCharCode;
function dt(e) {
  throw new RangeError(Ud[e]);
}
function $d(e, t) {
  const u = [];
  let n = e.length;
  for (; n--; )
    u[n] = t(e[n]);
  return u;
}
function fs(e, t) {
  const u = e.split("@");
  let n = "";
  u.length > 1 && (n = u[0] + "@", e = u[1]), e = e.replace(qd, ".");
  const r = e.split("."), o = $d(r, t).join(".");
  return n + o;
}
function ds(e) {
  const t = [];
  let u = 0;
  const n = e.length;
  for (; u < n; ) {
    const r = e.charCodeAt(u++);
    if (r >= 55296 && r <= 56319 && u < n) {
      const o = e.charCodeAt(u++);
      (o & 64512) == 56320 ? t.push(((r & 1023) << 10) + (o & 1023) + 65536) : (t.push(r), u--);
    } else
      t.push(r);
  }
  return t;
}
const jd = (e) => String.fromCodePoint(...e), Hd = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : Ve;
}, Io = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, hs = function(e, t, u) {
  let n = 0;
  for (e = u ? Je(e / Bd) : e >> 1, e += Je(e / t); e > qn * cu >> 1; n += Ve)
    e = Je(e / qn);
  return Je(n + (qn + 1) * e / (e + Ld));
}, ps = function(e) {
  const t = [], u = e.length;
  let n = 0, r = cs, o = as, i = e.lastIndexOf(ls);
  i < 0 && (i = 0);
  for (let s = 0; s < i; ++s)
    e.charCodeAt(s) >= 128 && dt("not-basic"), t.push(e.charCodeAt(s));
  for (let s = i > 0 ? i + 1 : 0; s < u; ) {
    const a = n;
    for (let f = 1, d = Ve; ; d += Ve) {
      s >= u && dt("invalid-input");
      const h = Hd(e.charCodeAt(s++));
      h >= Ve && dt("invalid-input"), h > Je((Lt - n) / f) && dt("overflow"), n += h * f;
      const b = d <= o ? Fr : d >= o + cu ? cu : d - o;
      if (h < b)
        break;
      const l = Ve - b;
      f > Je(Lt / l) && dt("overflow"), f *= l;
    }
    const c = t.length + 1;
    o = hs(n - a, c, a == 0), Je(n / c) > Lt - r && dt("overflow"), r += Je(n / c), n %= c, t.splice(n++, 0, r);
  }
  return String.fromCodePoint(...t);
}, bs = function(e) {
  const t = [];
  e = ds(e);
  const u = e.length;
  let n = cs, r = 0, o = as;
  for (const a of e)
    a < 128 && t.push(Un(a));
  const i = t.length;
  let s = i;
  for (i && t.push(ls); s < u; ) {
    let a = Lt;
    for (const f of e)
      f >= n && f < a && (a = f);
    const c = s + 1;
    a - n > Je((Lt - r) / c) && dt("overflow"), r += (a - n) * c, n = a;
    for (const f of e)
      if (f < n && ++r > Lt && dt("overflow"), f === n) {
        let d = r;
        for (let h = Ve; ; h += Ve) {
          const b = h <= o ? Fr : h >= o + cu ? cu : h - o;
          if (d < b)
            break;
          const l = d - b, g = Ve - b;
          t.push(
            Un(Io(b + l % g, 0))
          ), d = Je(l / g);
        }
        t.push(Un(Io(d, 0))), o = hs(r, c, s === i), r = 0, ++s;
      }
    ++r, ++n;
  }
  return t.join("");
}, Gd = function(e) {
  return fs(e, function(t) {
    return Pd.test(t) ? ps(t.slice(4).toLowerCase()) : t;
  });
}, Zd = function(e) {
  return fs(e, function(t) {
    return zd.test(t) ? "xn--" + bs(t) : t;
  });
}, gs = {
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
    decode: ds,
    encode: jd
  },
  decode: ps,
  encode: bs,
  toASCII: Zd,
  toUnicode: Gd
}, Wd = {
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
}, Kd = {
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
}, Vd = {
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
}, Jd = {
  default: Wd,
  zero: Kd,
  commonmark: Vd
}, Yd = /^(vbscript|javascript|file|data):/, Xd = /^data:image\/(gif|png|jpeg|webp);/;
function Qd(e) {
  const t = e.trim().toLowerCase();
  return Yd.test(t) ? Xd.test(t) : !0;
}
const ms = ["http:", "https:", "mailto:"];
function e1(e) {
  const t = Ar(e, !0);
  if (t.hostname && (!t.protocol || ms.indexOf(t.protocol) >= 0))
    try {
      t.hostname = gs.toASCII(t.hostname);
    } catch {
    }
  return mu(wr(t));
}
function t1(e) {
  const t = Ar(e, !0);
  if (t.hostname && (!t.protocol || ms.indexOf(t.protocol) >= 0))
    try {
      t.hostname = gs.toUnicode(t.hostname);
    } catch {
    }
  return zt(wr(t), zt.defaultChars + "%");
}
function Le(e, t) {
  if (!(this instanceof Le))
    return new Le(e, t);
  t || Sr(e) || (t = e || {}, e = "default"), this.inline = new xu(), this.block = new _n(), this.core = new Tr(), this.renderer = new Vt(), this.linkify = new Me(), this.validateLink = Qd, this.normalizeLink = e1, this.normalizeLinkText = t1, this.utils = uf, this.helpers = gn({}, sf), this.options = {}, this.configure(e), t && this.set(t);
}
Le.prototype.set = function(e) {
  return gn(this.options, e), this;
};
Le.prototype.configure = function(e) {
  const t = this;
  if (Sr(e)) {
    const u = e;
    if (e = Jd[u], !e)
      throw new Error('Wrong `markdown-it` preset "' + u + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(u) {
    e.components[u].rules && t[u].ruler.enableOnly(e.components[u].rules), e.components[u].rules2 && t[u].ruler2.enableOnly(e.components[u].rules2);
  }), this;
};
Le.prototype.enable = function(e, t) {
  let u = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    u = u.concat(this[r].ruler.enable(e, !0));
  }, this), u = u.concat(this.inline.ruler2.enable(e, !0));
  const n = e.filter(function(r) {
    return u.indexOf(r) < 0;
  });
  if (n.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
Le.prototype.disable = function(e, t) {
  let u = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    u = u.concat(this[r].ruler.disable(e, !0));
  }, this), u = u.concat(this.inline.ruler2.disable(e, !0));
  const n = e.filter(function(r) {
    return u.indexOf(r) < 0;
  });
  if (n.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
Le.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
Le.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const u = new this.core.State(e, this, t);
  return this.core.process(u), u.tokens;
};
Le.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
Le.prototype.parseInline = function(e, t) {
  const u = new this.core.State(e, this, t);
  return u.inlineMode = !0, this.core.process(u), u.tokens;
};
Le.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
function u1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $n, Lo;
function n1() {
  if (Lo) return $n;
  Lo = 1;
  function e(p) {
    return p instanceof Map ? p.clear = p.delete = p.set = function() {
      throw new Error("map is read-only");
    } : p instanceof Set && (p.add = p.clear = p.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(p), Object.getOwnPropertyNames(p).forEach((y) => {
      const S = p[y], P = typeof S;
      (P === "object" || P === "function") && !Object.isFrozen(S) && e(S);
    }), p;
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
  function u(p) {
    return p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(p, ...y) {
    const S = /* @__PURE__ */ Object.create(null);
    for (const P in p)
      S[P] = p[P];
    return y.forEach(function(P) {
      for (const le in P)
        S[le] = P[le];
    }), /** @type {T} */
    S;
  }
  const r = "</span>", o = (p) => !!p.scope, i = (p, { prefix: y }) => {
    if (p.startsWith("language:"))
      return p.replace("language:", "language-");
    if (p.includes(".")) {
      const S = p.split(".");
      return [
        `${y}${S.shift()}`,
        ...S.map((P, le) => `${P}${"_".repeat(le + 1)}`)
      ].join(" ");
    }
    return `${y}${p}`;
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
      this.buffer += u(y);
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
  const a = (p = {}) => {
    const y = { children: [] };
    return Object.assign(y, p), y;
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
      return typeof S == "string" ? y.addText(S) : S.children && (y.openNode(S), S.children.forEach((P) => this._walk(y, P)), y.closeNode(S)), y;
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
  class f extends c {
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
      const P = y.root;
      S && (P.scope = `language:${S}`), this.add(P);
    }
    toHTML() {
      return new s(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function d(p) {
    return p ? typeof p == "string" ? p : p.source : null;
  }
  function h(p) {
    return g("(?=", p, ")");
  }
  function b(p) {
    return g("(?:", p, ")*");
  }
  function l(p) {
    return g("(?:", p, ")?");
  }
  function g(...p) {
    return p.map((S) => d(S)).join("");
  }
  function m(p) {
    const y = p[p.length - 1];
    return typeof y == "object" && y.constructor === Object ? (p.splice(p.length - 1, 1), y) : {};
  }
  function k(...p) {
    return "(" + (m(p).capture ? "" : "?:") + p.map((P) => d(P)).join("|") + ")";
  }
  function _(p) {
    return new RegExp(p.toString() + "|").exec("").length - 1;
  }
  function v(p, y) {
    const S = p && p.exec(y);
    return S && S.index === 0;
  }
  const E = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function w(p, { joinWith: y }) {
    let S = 0;
    return p.map((P) => {
      S += 1;
      const le = S;
      let fe = d(P), O = "";
      for (; fe.length > 0; ) {
        const R = E.exec(fe);
        if (!R) {
          O += fe;
          break;
        }
        O += fe.substring(0, R.index), fe = fe.substring(R.index + R[0].length), R[0][0] === "\\" && R[1] ? O += "\\" + String(Number(R[1]) + le) : (O += R[0], R[0] === "(" && S++);
      }
      return O;
    }).map((P) => `(${P})`).join(y);
  }
  const A = /\b\B/, T = "[a-zA-Z]\\w*", N = "[a-zA-Z_]\\w*", W = "\\b\\d+(\\.\\d+)?", V = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Q = "\\b(0b[01]+)", B = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", J = (p = {}) => {
    const y = /^#![ ]*\//;
    return p.binary && (p.begin = g(
      y,
      /.*\b/,
      p.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: y,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (S, P) => {
        S.index !== 0 && P.ignoreMatch();
      }
    }, p);
  }, G = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, U = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [G]
  }, j = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [G]
  }, pe = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, H = function(p, y, S = {}) {
    const P = n(
      {
        scope: "comment",
        begin: p,
        end: y,
        contains: []
      },
      S
    );
    P.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const le = k(
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
    return P.contains.push(
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
          le,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), P;
  }, ae = H("//", "$"), ce = H("/\\*", "\\*/"), be = H("#", "$"), ye = {
    scope: "number",
    begin: W,
    relevance: 0
  }, He = {
    scope: "number",
    begin: V,
    relevance: 0
  }, Os = {
    scope: "number",
    begin: Q,
    relevance: 0
  }, Ns = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      G,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [G]
      }
    ]
  }, Ms = {
    scope: "title",
    begin: T,
    relevance: 0
  }, Is = {
    scope: "title",
    begin: N,
    relevance: 0
  }, Ls = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + N,
    relevance: 0
  };
  var vu = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: U,
    BACKSLASH_ESCAPE: G,
    BINARY_NUMBER_MODE: Os,
    BINARY_NUMBER_RE: Q,
    COMMENT: H,
    C_BLOCK_COMMENT_MODE: ce,
    C_LINE_COMMENT_MODE: ae,
    C_NUMBER_MODE: He,
    C_NUMBER_RE: V,
    END_SAME_AS_BEGIN: function(p) {
      return Object.assign(
        p,
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
    HASH_COMMENT_MODE: be,
    IDENT_RE: T,
    MATCH_NOTHING_RE: A,
    METHOD_GUARD: Ls,
    NUMBER_MODE: ye,
    NUMBER_RE: W,
    PHRASAL_WORDS_MODE: pe,
    QUOTE_STRING_MODE: j,
    REGEXP_MODE: Ns,
    RE_STARTERS_RE: B,
    SHEBANG: J,
    TITLE_MODE: Ms,
    UNDERSCORE_IDENT_RE: N,
    UNDERSCORE_TITLE_MODE: Is
  });
  function Bs(p, y) {
    p.input[p.index - 1] === "." && y.ignoreMatch();
  }
  function Ps(p, y) {
    p.className !== void 0 && (p.scope = p.className, delete p.className);
  }
  function zs(p, y) {
    y && p.beginKeywords && (p.begin = "\\b(" + p.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", p.__beforeBegin = Bs, p.keywords = p.keywords || p.beginKeywords, delete p.beginKeywords, p.relevance === void 0 && (p.relevance = 0));
  }
  function qs(p, y) {
    Array.isArray(p.illegal) && (p.illegal = k(...p.illegal));
  }
  function Us(p, y) {
    if (p.match) {
      if (p.begin || p.end) throw new Error("begin & end are not supported with match");
      p.begin = p.match, delete p.match;
    }
  }
  function $s(p, y) {
    p.relevance === void 0 && (p.relevance = 1);
  }
  const js = (p, y) => {
    if (!p.beforeMatch) return;
    if (p.starts) throw new Error("beforeMatch cannot be used with starts");
    const S = Object.assign({}, p);
    Object.keys(p).forEach((P) => {
      delete p[P];
    }), p.keywords = S.keywords, p.begin = g(S.beforeMatch, h(S.begin)), p.starts = {
      relevance: 0,
      contains: [
        Object.assign(S, { endsParent: !0 })
      ]
    }, p.relevance = 0, delete S.beforeMatch;
  }, Hs = [
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
  ], Gs = "keyword";
  function Mr(p, y, S = Gs) {
    const P = /* @__PURE__ */ Object.create(null);
    return typeof p == "string" ? le(S, p.split(" ")) : Array.isArray(p) ? le(S, p) : Object.keys(p).forEach(function(fe) {
      Object.assign(
        P,
        Mr(p[fe], y, fe)
      );
    }), P;
    function le(fe, O) {
      y && (O = O.map((R) => R.toLowerCase())), O.forEach(function(R) {
        const L = R.split("|");
        P[L[0]] = [fe, Zs(L[0], L[1])];
      });
    }
  }
  function Zs(p, y) {
    return y ? Number(y) : Ws(p) ? 0 : 1;
  }
  function Ws(p) {
    return Hs.includes(p.toLowerCase());
  }
  const Ir = {}, yt = (p) => {
    console.error(p);
  }, Lr = (p, ...y) => {
    console.log(`WARN: ${p}`, ...y);
  }, Tt = (p, y) => {
    Ir[`${p}/${y}`] || (console.log(`Deprecated as of ${p}. ${y}`), Ir[`${p}/${y}`] = !0);
  }, Eu = new Error();
  function Br(p, y, { key: S }) {
    let P = 0;
    const le = p[S], fe = {}, O = {};
    for (let R = 1; R <= y.length; R++)
      O[R + P] = le[R], fe[R + P] = !0, P += _(y[R - 1]);
    p[S] = O, p[S]._emit = fe, p[S]._multi = !0;
  }
  function Ks(p) {
    if (Array.isArray(p.begin)) {
      if (p.skip || p.excludeBegin || p.returnBegin)
        throw yt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Eu;
      if (typeof p.beginScope != "object" || p.beginScope === null)
        throw yt("beginScope must be object"), Eu;
      Br(p, p.begin, { key: "beginScope" }), p.begin = w(p.begin, { joinWith: "" });
    }
  }
  function Vs(p) {
    if (Array.isArray(p.end)) {
      if (p.skip || p.excludeEnd || p.returnEnd)
        throw yt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Eu;
      if (typeof p.endScope != "object" || p.endScope === null)
        throw yt("endScope must be object"), Eu;
      Br(p, p.end, { key: "endScope" }), p.end = w(p.end, { joinWith: "" });
    }
  }
  function Js(p) {
    p.scope && typeof p.scope == "object" && p.scope !== null && (p.beginScope = p.scope, delete p.scope);
  }
  function Ys(p) {
    Js(p), typeof p.beginScope == "string" && (p.beginScope = { _wrap: p.beginScope }), typeof p.endScope == "string" && (p.endScope = { _wrap: p.endScope }), Ks(p), Vs(p);
  }
  function Xs(p) {
    function y(O, R) {
      return new RegExp(
        d(O),
        "m" + (p.case_insensitive ? "i" : "") + (p.unicodeRegex ? "u" : "") + (R ? "g" : "")
      );
    }
    class S {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(R, L) {
        L.position = this.position++, this.matchIndexes[this.matchAt] = L, this.regexes.push([L, R]), this.matchAt += _(R) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const R = this.regexes.map((L) => L[1]);
        this.matcherRe = y(w(R, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(R) {
        this.matcherRe.lastIndex = this.lastIndex;
        const L = this.matcherRe.exec(R);
        if (!L)
          return null;
        const _e = L.findIndex((Jt, yn) => yn > 0 && Jt !== void 0), ge = this.matchIndexes[_e];
        return L.splice(0, _e), Object.assign(L, ge);
      }
    }
    class P {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(R) {
        if (this.multiRegexes[R]) return this.multiRegexes[R];
        const L = new S();
        return this.rules.slice(R).forEach(([_e, ge]) => L.addRule(_e, ge)), L.compile(), this.multiRegexes[R] = L, L;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(R, L) {
        this.rules.push([R, L]), L.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(R) {
        const L = this.getMatcher(this.regexIndex);
        L.lastIndex = this.lastIndex;
        let _e = L.exec(R);
        if (this.resumingScanAtSamePosition() && !(_e && _e.index === this.lastIndex)) {
          const ge = this.getMatcher(0);
          ge.lastIndex = this.lastIndex + 1, _e = ge.exec(R);
        }
        return _e && (this.regexIndex += _e.position + 1, this.regexIndex === this.count && this.considerAll()), _e;
      }
    }
    function le(O) {
      const R = new P();
      return O.contains.forEach((L) => R.addRule(L.begin, { rule: L, type: "begin" })), O.terminatorEnd && R.addRule(O.terminatorEnd, { type: "end" }), O.illegal && R.addRule(O.illegal, { type: "illegal" }), R;
    }
    function fe(O, R) {
      const L = (
        /** @type CompiledMode */
        O
      );
      if (O.isCompiled) return L;
      [
        Ps,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Us,
        Ys,
        js
      ].forEach((ge) => ge(O, R)), p.compilerExtensions.forEach((ge) => ge(O, R)), O.__beforeBegin = null, [
        zs,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        qs,
        // default to 1 relevance if not specified
        $s
      ].forEach((ge) => ge(O, R)), O.isCompiled = !0;
      let _e = null;
      return typeof O.keywords == "object" && O.keywords.$pattern && (O.keywords = Object.assign({}, O.keywords), _e = O.keywords.$pattern, delete O.keywords.$pattern), _e = _e || /\w+/, O.keywords && (O.keywords = Mr(O.keywords, p.case_insensitive)), L.keywordPatternRe = y(_e, !0), R && (O.begin || (O.begin = /\B|\b/), L.beginRe = y(L.begin), !O.end && !O.endsWithParent && (O.end = /\B|\b/), O.end && (L.endRe = y(L.end)), L.terminatorEnd = d(L.end) || "", O.endsWithParent && R.terminatorEnd && (L.terminatorEnd += (O.end ? "|" : "") + R.terminatorEnd)), O.illegal && (L.illegalRe = y(
        /** @type {RegExp | string} */
        O.illegal
      )), O.contains || (O.contains = []), O.contains = [].concat(...O.contains.map(function(ge) {
        return Qs(ge === "self" ? O : ge);
      })), O.contains.forEach(function(ge) {
        fe(
          /** @type Mode */
          ge,
          L
        );
      }), O.starts && fe(O.starts, R), L.matcher = le(L), L;
    }
    if (p.compilerExtensions || (p.compilerExtensions = []), p.contains && p.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return p.classNameAliases = n(p.classNameAliases || {}), fe(
      /** @type Mode */
      p
    );
  }
  function Pr(p) {
    return p ? p.endsWithParent || Pr(p.starts) : !1;
  }
  function Qs(p) {
    return p.variants && !p.cachedVariants && (p.cachedVariants = p.variants.map(function(y) {
      return n(p, { variants: null }, y);
    })), p.cachedVariants ? p.cachedVariants : Pr(p) ? n(p, { starts: p.starts ? n(p.starts) : null }) : Object.isFrozen(p) ? n(p) : p;
  }
  var ea = "11.11.1";
  class ta extends Error {
    constructor(y, S) {
      super(y), this.name = "HTMLInjectionError", this.html = S;
    }
  }
  const En = u, zr = n, qr = Symbol("nomatch"), ua = 7, Ur = function(p) {
    const y = /* @__PURE__ */ Object.create(null), S = /* @__PURE__ */ Object.create(null), P = [];
    let le = !0;
    const fe = "Could not find the language '{}', did you forget to load/include a language module?", O = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let R = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: f
    };
    function L(C) {
      return R.noHighlightRe.test(C);
    }
    function _e(C) {
      let I = C.className + " ";
      I += C.parentNode ? C.parentNode.className : "";
      const K = R.languageDetectRe.exec(I);
      if (K) {
        const te = ct(K[1]);
        return te || (Lr(fe.replace("{}", K[1])), Lr("Falling back to no-highlight mode for this block.", C)), te ? K[1] : "no-highlight";
      }
      return I.split(/\s+/).find((te) => L(te) || ct(te));
    }
    function ge(C, I, K) {
      let te = "", me = "";
      typeof I == "object" ? (te = C, K = I.ignoreIllegals, me = I.language) : (Tt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Tt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), me = C, te = I), K === void 0 && (K = !0);
      const Pe = {
        code: te,
        language: me
      };
      ku("before:highlight", Pe);
      const lt = Pe.result ? Pe.result : Jt(Pe.language, Pe.code, K);
      return lt.code = Pe.code, ku("after:highlight", lt), lt;
    }
    function Jt(C, I, K, te) {
      const me = /* @__PURE__ */ Object.create(null);
      function Pe(D, M) {
        return D.keywords[M];
      }
      function lt() {
        if (!z.keywords) {
          Ee.addText(ue);
          return;
        }
        let D = 0;
        z.keywordPatternRe.lastIndex = 0;
        let M = z.keywordPatternRe.exec(ue), Z = "";
        for (; M; ) {
          Z += ue.substring(D, M.index);
          const X = Ze.case_insensitive ? M[0].toLowerCase() : M[0], ke = Pe(z, X);
          if (ke) {
            const [et, xa] = ke;
            if (Ee.addText(Z), Z = "", me[X] = (me[X] || 0) + 1, me[X] <= ua && (Cu += xa), et.startsWith("_"))
              Z += M[0];
            else {
              const va = Ze.classNameAliases[et] || et;
              Ge(M[0], va);
            }
          } else
            Z += M[0];
          D = z.keywordPatternRe.lastIndex, M = z.keywordPatternRe.exec(ue);
        }
        Z += ue.substring(D), Ee.addText(Z);
      }
      function wu() {
        if (ue === "") return;
        let D = null;
        if (typeof z.subLanguage == "string") {
          if (!y[z.subLanguage]) {
            Ee.addText(ue);
            return;
          }
          D = Jt(z.subLanguage, ue, !0, Vr[z.subLanguage]), Vr[z.subLanguage] = /** @type {CompiledMode} */
          D._top;
        } else
          D = kn(ue, z.subLanguage.length ? z.subLanguage : null);
        z.relevance > 0 && (Cu += D.relevance), Ee.__addSublanguage(D._emitter, D.language);
      }
      function Fe() {
        z.subLanguage != null ? wu() : lt(), ue = "";
      }
      function Ge(D, M) {
        D !== "" && (Ee.startScope(M), Ee.addText(D), Ee.endScope());
      }
      function Gr(D, M) {
        let Z = 1;
        const X = M.length - 1;
        for (; Z <= X; ) {
          if (!D._emit[Z]) {
            Z++;
            continue;
          }
          const ke = Ze.classNameAliases[D[Z]] || D[Z], et = M[Z];
          ke ? Ge(et, ke) : (ue = et, lt(), ue = ""), Z++;
        }
      }
      function Zr(D, M) {
        return D.scope && typeof D.scope == "string" && Ee.openNode(Ze.classNameAliases[D.scope] || D.scope), D.beginScope && (D.beginScope._wrap ? (Ge(ue, Ze.classNameAliases[D.beginScope._wrap] || D.beginScope._wrap), ue = "") : D.beginScope._multi && (Gr(D.beginScope, M), ue = "")), z = Object.create(D, { parent: { value: z } }), z;
      }
      function Wr(D, M, Z) {
        let X = v(D.endRe, Z);
        if (X) {
          if (D["on:end"]) {
            const ke = new t(D);
            D["on:end"](M, ke), ke.isMatchIgnored && (X = !1);
          }
          if (X) {
            for (; D.endsParent && D.parent; )
              D = D.parent;
            return D;
          }
        }
        if (D.endsWithParent)
          return Wr(D.parent, M, Z);
      }
      function pa(D) {
        return z.matcher.regexIndex === 0 ? (ue += D[0], 1) : (Sn = !0, 0);
      }
      function ba(D) {
        const M = D[0], Z = D.rule, X = new t(Z), ke = [Z.__beforeBegin, Z["on:begin"]];
        for (const et of ke)
          if (et && (et(D, X), X.isMatchIgnored))
            return pa(M);
        return Z.skip ? ue += M : (Z.excludeBegin && (ue += M), Fe(), !Z.returnBegin && !Z.excludeBegin && (ue = M)), Zr(Z, D), Z.returnBegin ? 0 : M.length;
      }
      function ga(D) {
        const M = D[0], Z = I.substring(D.index), X = Wr(z, D, Z);
        if (!X)
          return qr;
        const ke = z;
        z.endScope && z.endScope._wrap ? (Fe(), Ge(M, z.endScope._wrap)) : z.endScope && z.endScope._multi ? (Fe(), Gr(z.endScope, D)) : ke.skip ? ue += M : (ke.returnEnd || ke.excludeEnd || (ue += M), Fe(), ke.excludeEnd && (ue = M));
        do
          z.scope && Ee.closeNode(), !z.skip && !z.subLanguage && (Cu += z.relevance), z = z.parent;
        while (z !== X.parent);
        return X.starts && Zr(X.starts, D), ke.returnEnd ? 0 : M.length;
      }
      function ma() {
        const D = [];
        for (let M = z; M !== Ze; M = M.parent)
          M.scope && D.unshift(M.scope);
        D.forEach((M) => Ee.openNode(M));
      }
      let Au = {};
      function Kr(D, M) {
        const Z = M && M[0];
        if (ue += D, Z == null)
          return Fe(), 0;
        if (Au.type === "begin" && M.type === "end" && Au.index === M.index && Z === "") {
          if (ue += I.slice(M.index, M.index + 1), !le) {
            const X = new Error(`0 width match regex (${C})`);
            throw X.languageName = C, X.badRule = Au.rule, X;
          }
          return 1;
        }
        if (Au = M, M.type === "begin")
          return ba(M);
        if (M.type === "illegal" && !K) {
          const X = new Error('Illegal lexeme "' + Z + '" for mode "' + (z.scope || "<unnamed>") + '"');
          throw X.mode = z, X;
        } else if (M.type === "end") {
          const X = ga(M);
          if (X !== qr)
            return X;
        }
        if (M.type === "illegal" && Z === "")
          return ue += `
`, 1;
        if (Cn > 1e5 && Cn > M.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return ue += Z, Z.length;
      }
      const Ze = ct(C);
      if (!Ze)
        throw yt(fe.replace("{}", C)), new Error('Unknown language: "' + C + '"');
      const _a = Xs(Ze);
      let An = "", z = te || _a;
      const Vr = {}, Ee = new R.__emitter(R);
      ma();
      let ue = "", Cu = 0, kt = 0, Cn = 0, Sn = !1;
      try {
        if (Ze.__emitTokens)
          Ze.__emitTokens(I, Ee);
        else {
          for (z.matcher.considerAll(); ; ) {
            Cn++, Sn ? Sn = !1 : z.matcher.considerAll(), z.matcher.lastIndex = kt;
            const D = z.matcher.exec(I);
            if (!D) break;
            const M = I.substring(kt, D.index), Z = Kr(M, D);
            kt = D.index + Z;
          }
          Kr(I.substring(kt));
        }
        return Ee.finalize(), An = Ee.toHTML(), {
          language: C,
          value: An,
          relevance: Cu,
          illegal: !1,
          _emitter: Ee,
          _top: z
        };
      } catch (D) {
        if (D.message && D.message.includes("Illegal"))
          return {
            language: C,
            value: En(I),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: D.message,
              index: kt,
              context: I.slice(kt - 100, kt + 100),
              mode: D.mode,
              resultSoFar: An
            },
            _emitter: Ee
          };
        if (le)
          return {
            language: C,
            value: En(I),
            illegal: !1,
            relevance: 0,
            errorRaised: D,
            _emitter: Ee,
            _top: z
          };
        throw D;
      }
    }
    function yn(C) {
      const I = {
        value: En(C),
        illegal: !1,
        relevance: 0,
        _top: O,
        _emitter: new R.__emitter(R)
      };
      return I._emitter.addText(C), I;
    }
    function kn(C, I) {
      I = I || R.languages || Object.keys(y);
      const K = yn(C), te = I.filter(ct).filter(Hr).map(
        (Fe) => Jt(Fe, C, !1)
      );
      te.unshift(K);
      const me = te.sort((Fe, Ge) => {
        if (Fe.relevance !== Ge.relevance) return Ge.relevance - Fe.relevance;
        if (Fe.language && Ge.language) {
          if (ct(Fe.language).supersetOf === Ge.language)
            return 1;
          if (ct(Ge.language).supersetOf === Fe.language)
            return -1;
        }
        return 0;
      }), [Pe, lt] = me, wu = Pe;
      return wu.secondBest = lt, wu;
    }
    function na(C, I, K) {
      const te = I && S[I] || K;
      C.classList.add("hljs"), C.classList.add(`language-${te}`);
    }
    function wn(C) {
      let I = null;
      const K = _e(C);
      if (L(K)) return;
      if (ku(
        "before:highlightElement",
        { el: C, language: K }
      ), C.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
        return;
      }
      if (C.children.length > 0 && (R.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), R.throwUnescapedHTML))
        throw new ta(
          "One of your code blocks includes unescaped HTML.",
          C.innerHTML
        );
      I = C;
      const te = I.textContent, me = K ? ge(te, { language: K, ignoreIllegals: !0 }) : kn(te);
      C.innerHTML = me.value, C.dataset.highlighted = "yes", na(C, K, me.language), C.result = {
        language: me.language,
        // TODO: remove with version 11.0
        re: me.relevance,
        relevance: me.relevance
      }, me.secondBest && (C.secondBest = {
        language: me.secondBest.language,
        relevance: me.secondBest.relevance
      }), ku("after:highlightElement", { el: C, result: me, text: te });
    }
    function ra(C) {
      R = zr(R, C);
    }
    const oa = () => {
      yu(), Tt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function ia() {
      yu(), Tt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let $r = !1;
    function yu() {
      function C() {
        yu();
      }
      if (document.readyState === "loading") {
        $r || window.addEventListener("DOMContentLoaded", C, !1), $r = !0;
        return;
      }
      document.querySelectorAll(R.cssSelector).forEach(wn);
    }
    function sa(C, I) {
      let K = null;
      try {
        K = I(p);
      } catch (te) {
        if (yt("Language definition for '{}' could not be registered.".replace("{}", C)), le)
          yt(te);
        else
          throw te;
        K = O;
      }
      K.name || (K.name = C), y[C] = K, K.rawDefinition = I.bind(null, p), K.aliases && jr(K.aliases, { languageName: C });
    }
    function aa(C) {
      delete y[C];
      for (const I of Object.keys(S))
        S[I] === C && delete S[I];
    }
    function ca() {
      return Object.keys(y);
    }
    function ct(C) {
      return C = (C || "").toLowerCase(), y[C] || y[S[C]];
    }
    function jr(C, { languageName: I }) {
      typeof C == "string" && (C = [C]), C.forEach((K) => {
        S[K.toLowerCase()] = I;
      });
    }
    function Hr(C) {
      const I = ct(C);
      return I && !I.disableAutodetect;
    }
    function la(C) {
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
    function fa(C) {
      la(C), P.push(C);
    }
    function da(C) {
      const I = P.indexOf(C);
      I !== -1 && P.splice(I, 1);
    }
    function ku(C, I) {
      const K = C;
      P.forEach(function(te) {
        te[K] && te[K](I);
      });
    }
    function ha(C) {
      return Tt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Tt("10.7.0", "Please use highlightElement now."), wn(C);
    }
    Object.assign(p, {
      highlight: ge,
      highlightAuto: kn,
      highlightAll: yu,
      highlightElement: wn,
      // TODO: Remove with v12 API
      highlightBlock: ha,
      configure: ra,
      initHighlighting: oa,
      initHighlightingOnLoad: ia,
      registerLanguage: sa,
      unregisterLanguage: aa,
      listLanguages: ca,
      getLanguage: ct,
      registerAliases: jr,
      autoDetection: Hr,
      inherit: zr,
      addPlugin: fa,
      removePlugin: da
    }), p.debugMode = function() {
      le = !1;
    }, p.safeMode = function() {
      le = !0;
    }, p.versionString = ea, p.regex = {
      concat: g,
      lookahead: h,
      either: k,
      optional: l,
      anyNumberOfTimes: b
    };
    for (const C in vu)
      typeof vu[C] == "object" && e(vu[C]);
    return Object.assign(p, vu), p;
  }, Rt = Ur({});
  return Rt.newInstance = () => Ur({}), $n = Rt, Rt.HighlightJS = Rt, Rt.default = Rt, $n;
}
var r1 = /* @__PURE__ */ n1();
const Be = /* @__PURE__ */ u1(r1), Bo = "[A-Za-z$_][0-9A-Za-z$_]*", o1 = [
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
], i1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], _s = [
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
], xs = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], vs = [
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
], s1 = [
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
], a1 = [].concat(
  vs,
  _s,
  xs
);
function c1(e) {
  const t = e.regex, u = (H, { after: ae }) => {
    const ce = "</" + H[0].slice(1);
    return H.input.indexOf(ce, ae) !== -1;
  }, n = Bo, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, ae) => {
      const ce = H[0].length + H.index, be = H.input[ce];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        be === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        be === ","
      ) {
        ae.ignoreMatch();
        return;
      }
      be === ">" && (u(H, { after: ce }) || ae.ignoreMatch());
      let ye;
      const He = H.input.substring(ce);
      if (ye = He.match(/^\s*=/)) {
        ae.ignoreMatch();
        return;
      }
      if ((ye = He.match(/^\s+extends\s+/)) && ye.index === 0) {
        ae.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: Bo,
    keyword: o1,
    literal: i1,
    built_in: a1,
    "variable.language": s1
  }, a = "[0-9](_?[0-9])*", c = `\\.(${a})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${f})\\b((${c})\\b|\\.)?|(${c})\\b` },
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
  }, h = {
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
        h
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
        h
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
        h
      ],
      subLanguage: "graphql"
    }
  }, m = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      h
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
                  begin: n + "(?=\\s*(-)|$)",
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
    d
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  h.contains = v.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(v)
  });
  const E = [].concat(_, h.contains), w = E.concat([
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
    contains: w
  }, T = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          n,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(n, "(", t.concat(/\./, n), ")*")
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
          n
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
        ..._s,
        ...xs
      ]
    }
  }, W = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, V = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          n,
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
  }, Q = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function B(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const J = {
    match: t.concat(
      /\b/,
      B([
        ...vs,
        "super",
        "import"
      ].map((H) => `${H}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, G = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, U = {
    match: [
      /get|set/,
      /\s+/,
      n,
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
  }, j = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", pe = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(j)
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
    exports: { PARAMS_CONTAINS: w, CLASS_REFERENCE: N },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      W,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      b,
      l,
      g,
      m,
      _,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      d,
      N,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      pe,
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
            begin: j,
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
                    contains: w
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
      V,
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
          e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      G,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + n,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [A]
      },
      J,
      Q,
      T,
      U,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
const Qu = "[A-Za-z$_][0-9A-Za-z$_]*", Es = [
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
], ys = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], ks = [
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
], ws = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], As = [
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
], Cs = [
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
], Ss = [].concat(
  As,
  ks,
  ws
);
function l1(e) {
  const t = e.regex, u = (H, { after: ae }) => {
    const ce = "</" + H[0].slice(1);
    return H.input.indexOf(ce, ae) !== -1;
  }, n = Qu, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, ae) => {
      const ce = H[0].length + H.index, be = H.input[ce];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        be === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        be === ","
      ) {
        ae.ignoreMatch();
        return;
      }
      be === ">" && (u(H, { after: ce }) || ae.ignoreMatch());
      let ye;
      const He = H.input.substring(ce);
      if (ye = He.match(/^\s*=/)) {
        ae.ignoreMatch();
        return;
      }
      if ((ye = He.match(/^\s+extends\s+/)) && ye.index === 0) {
        ae.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: Qu,
    keyword: Es,
    literal: ys,
    built_in: Ss,
    "variable.language": Cs
  }, a = "[0-9](_?[0-9])*", c = `\\.(${a})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${f})\\b((${c})\\b|\\.)?|(${c})\\b` },
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
  }, h = {
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
        h
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
        h
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
        h
      ],
      subLanguage: "graphql"
    }
  }, m = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      h
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
                  begin: n + "(?=\\s*(-)|$)",
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
    d
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  h.contains = v.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(v)
  });
  const E = [].concat(_, h.contains), w = E.concat([
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
    contains: w
  }, T = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          n,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(n, "(", t.concat(/\./, n), ")*")
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
          n
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
        ...ks,
        ...ws
      ]
    }
  }, W = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, V = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          n,
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
  }, Q = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function B(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const J = {
    match: t.concat(
      /\b/,
      B([
        ...As,
        "super",
        "import"
      ].map((H) => `${H}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, G = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, U = {
    match: [
      /get|set/,
      /\s+/,
      n,
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
  }, j = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", pe = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(j)
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
    exports: { PARAMS_CONTAINS: w, CLASS_REFERENCE: N },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      W,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      b,
      l,
      g,
      m,
      _,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      d,
      N,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      pe,
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
            begin: j,
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
                    contains: w
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
      V,
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
          e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      G,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + n,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [A]
      },
      J,
      Q,
      T,
      U,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function f1(e) {
  const t = e.regex, u = l1(e), n = Qu, r = [
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
    contains: [u.exports.CLASS_REFERENCE]
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
    $pattern: Qu,
    keyword: Es.concat(a),
    literal: ys,
    built_in: Ss.concat(r),
    "variable.language": Cs
  }, f = {
    className: "meta",
    begin: "@" + n
  }, d = (g, m, k) => {
    const _ = g.contains.findIndex((v) => v.label === m);
    if (_ === -1)
      throw new Error("can not find mode to replace");
    g.contains.splice(_, 1, k);
  };
  Object.assign(u.keywords, c), u.exports.PARAMS_CONTAINS.push(f);
  const h = u.contains.find((g) => g.scope === "attr"), b = Object.assign(
    {},
    h,
    { match: t.concat(n, t.lookahead(/\s*\?:/)) }
  );
  u.exports.PARAMS_CONTAINS.push([
    u.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    h,
    // highlight the params key
    b
    // Added for optional property assignment highlighting
  ]), u.contains = u.contains.concat([
    f,
    o,
    i,
    b
    // Added for optional property assignment highlighting
  ]), d(u, "shebang", e.SHEBANG()), d(u, "use_strict", s);
  const l = u.contains.find((g) => g.label === "func.def");
  return l.relevance = 0, Object.assign(u, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), u;
}
function d1(e) {
  const t = e.regex, u = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), n = [
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
    keyword: n,
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
  }, f = {
    begin: /\{\{/,
    relevance: 0
  }, d = {
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
          f,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          f,
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
          f,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          f,
          c
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, h = "[0-9](_?[0-9])*", b = `(\\b(${h}))?\\.(${h})|\\b(${h})\\.`, l = `\\b|${n.join("|")}`, g = {
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
        begin: `(\\b(${h})|(${b}))[eE][+-]?(${h})[jJ]?(?=${l})`
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
        begin: `\\b(${h})[jJ](?=${l})`
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
  }, k = {
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
          d,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return c.contains = [
    d,
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
      d,
      m,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          u
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [k]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              u,
              /\s*/,
              /\(\s*/,
              u,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              u
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
          k,
          d
        ]
      }
    ]
  };
}
function h1(e) {
  const t = e.regex, u = {}, n = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [u]
      }
      // default values
    ]
  };
  Object.assign(u, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      n
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
      u,
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
  }, f = {
    match: /\\'/
  }, d = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      u
    ]
  }, h = [
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
    binary: `(${h.join("|")})`,
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
  ], k = { match: /(\/[a-z._-]+)+/ }, _ = [
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
  ], w = [
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
        ...w
      ]
    },
    contains: [
      b,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      l,
      d,
      o,
      i,
      k,
      s,
      a,
      c,
      f,
      u
    ]
  };
}
function p1(e) {
  const t = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, u = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, n = [
    "true",
    "false",
    "null"
  ], r = {
    scope: "literal",
    beginKeywords: n.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: n
    },
    contains: [
      t,
      u,
      e.QUOTE_STRING_MODE,
      r,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
function Ds(e) {
  const t = e.regex, u = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), n = /[\p{L}0-9._:-]+/u, r = {
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
        begin: n,
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
            u,
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
            begin: u,
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
            u,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: u,
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
const b1 = (e) => ({
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
}), g1 = [
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
], m1 = [
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
], _1 = [
  ...g1,
  ...m1
], x1 = [
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
].sort().reverse(), v1 = [
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
].sort().reverse(), E1 = [
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
].sort().reverse(), y1 = [
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
function k1(e) {
  const t = e.regex, u = b1(e), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, r = "and or not only", o = /@-?\w[\w]*(-\w+)*/, i = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
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
      u.BLOCK_COMMENT,
      n,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      u.CSS_NUMBER_MODE,
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
      u.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + v1.join("|") + ")" },
          { begin: ":(:)?(" + E1.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      u.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + y1.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          u.BLOCK_COMMENT,
          u.HEXCOLOR,
          u.IMPORTANT,
          u.CSS_NUMBER_MODE,
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
          u.FUNCTION_DISPATCH
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
              attribute: x1.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...s,
              u.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + _1.join("|") + ")\\b"
      }
    ]
  };
}
function w1(e) {
  const t = e.regex, u = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, n = {
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
  }, f = {
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
  }, d = e.inherit(c, { contains: [] }), h = e.inherit(f, { contains: [] });
  c.contains.push(h), f.contains.push(d);
  let b = [
    u,
    a
  ];
  return [
    c,
    f,
    d,
    h
  ].forEach((k) => {
    k.contains = k.contains.concat(b);
  }), b = b.concat(c, f), {
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
      u,
      o,
      c,
      f,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: b,
        end: "$"
      },
      r,
      n,
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
function A1(e) {
  const t = e.regex, u = /(?![A-Za-z0-9])(?![$])/, n = t.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    u
  ), r = t.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    u
  ), o = t.concat(
    /[A-Z]+/,
    u
  ), i = {
    scope: "variable",
    match: "\\$+" + n
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
  }, c = e.inherit(e.APOS_STRING_MODE, { illegal: null }), f = e.inherit(e.QUOTE_STRING_MODE, {
    illegal: null,
    contains: e.QUOTE_STRING_MODE.contains.concat(a)
  }), d = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(a),
    "on:begin": (G, U) => {
      U.data._beginMatch = G[1] || G[2];
    },
    "on:end": (G, U) => {
      U.data._beginMatch !== G[1] && U.ignoreMatch();
    }
  }, h = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), b = `[ 	
]`, l = {
    scope: "string",
    variants: [
      f,
      c,
      d,
      h
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
  ], k = [
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
    keyword: k,
    literal: ((G) => {
      const U = [];
      return G.forEach((j) => {
        U.push(j), j.toLowerCase() === j ? U.push(j.toUpperCase()) : U.push(j.toLowerCase());
      }), U;
    })(m),
    built_in: _
  }, w = (G) => G.map((U) => U.replace(/\|\d+$/, "")), A = { variants: [
    {
      match: [
        /new/,
        t.concat(b, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", w(_).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, T = t.concat(n, "\\b(?!\\()"), N = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        T
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
        T
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
  ] }, W = {
    scope: "attr",
    match: t.concat(n, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, V = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: E,
    contains: [
      W,
      i,
      N,
      e.C_BLOCK_COMMENT_MODE,
      l,
      g,
      A
    ]
  }, Q = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", w(k).join("\\b|"), "|", w(_).join("\\b|"), "\\b)"),
      n,
      t.concat(b, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [V]
  };
  V.contains.push(Q);
  const B = [
    W,
    N,
    e.C_BLOCK_COMMENT_MODE,
    l,
    g,
    A
  ], J = {
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
          ...B
        ]
      },
      ...B,
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
      J,
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
      Q,
      N,
      {
        match: [
          /const/,
          /\s/,
          n
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
              J,
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
Be.registerLanguage("javascript", c1);
Be.registerLanguage("typescript", f1);
Be.registerLanguage("python", d1);
Be.registerLanguage("bash", h1);
Be.registerLanguage("json", p1);
Be.registerLanguage("xml", Ds);
Be.registerLanguage("html", Ds);
Be.registerLanguage("css", k1);
Be.registerLanguage("markdown", w1);
Be.registerLanguage("php", A1);
const Or = new Le({
  html: !0,
  linkify: !0,
  typographer: !0,
  highlight: function(e, t) {
    if (t && Be.getLanguage(t))
      try {
        return Be.highlight(e, { language: t }).value;
      } catch {
      }
    return "";
  }
});
Or.renderer.rules.fence = function(e, t, u, n, r) {
  const o = e[t];
  return `<pre><code class="hljs language-${o.info.trim()}">${o.content}</code></pre>`;
};
Or.renderer.rules.code_inline = function(e, t, u, n, r) {
  return `<code class="inline-code">${e[t].content}</code>`;
};
function Nr(e) {
  return Or.render(e);
}
const C1 = {
  messages: [],
  isLoading: !1,
  chats: [],
  currentChatId: null,
  showHistory: !1,
  selectedProducts: [],
  selectedDocType: "user-docs",
  error: null
}, ie = xr(C1);
vr(
  ie,
  (e) => e.chats.find((t) => t.id === e.currentChatId)
);
vr(
  ie,
  (e) => e.messages.map((t) => ({
    ...t,
    formattedMessage: t.role === "ai" ? Nr(t.message) : t.message
  }))
);
vr(ie, (e) => [...e.chats].sort(
  (t, u) => new Date(u.created_at).getTime() - new Date(t.created_at).getTime()
));
const vn = async (e, t) => {
  ie.update((u) => ({ ...u, isLoading: !0, error: null }));
  try {
    await e();
  } catch (u) {
    console.error(t, u), ie.update((n) => ({ ...n, error: t }));
  } finally {
    ie.update((u) => ({ ...u, isLoading: !1 }));
  }
}, Ts = async (e) => {
  await vn(async () => {
    const { data: t } = await Kt.get(`/chats/${e}`);
    t.chats && ie.update((u) => ({ ...u, chats: t.chats }));
  }, "Failed to load chats");
}, S1 = async (e) => {
  await vn(async () => {
    const { data: t } = await Kt.get(`/chat/${e}`);
    t.messages && ie.update((u) => ({
      ...u,
      messages: t.messages.map((n) => ({
        ...n,
        formattedMessage: n.role === "ai" ? Nr(n.message) : n.message
      }))
    }));
  }, "Failed to load messages");
}, D1 = async (e) => {
  ie.update((t) => ({ ...t, currentChatId: (e == null ? void 0 : e.id) || null })), e ? await S1(e.id) : Rs();
}, T1 = async (e) => {
  if (!e.trim()) return;
  const t = yi(ie);
  t.isLoading || await vn(async () => {
    const u = t.currentChatId || "", n = {
      id: Date.now().toString(),
      thread_id: u,
      role: "human",
      message: e,
      context: null,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    }, r = {
      id: "streaming",
      thread_id: u,
      role: "ai",
      message: "",
      formattedMessage: "",
      context: null,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    ie.update((a) => ({
      ...a,
      messages: [...a.messages, n, r]
    }));
    const o = localStorage.getItem("userId"), i = {
      message: e,
      doc_names: t.selectedProducts,
      doc_types: t.selectedDocType === "all" ? ["user-docs", "developer-docs"] : [t.selectedDocType],
      user_id: o,
      chat_id: u
    };
    if ((await Kt.post("/chat", i, {
      responseType: "text",
      headers: {
        Accept: "text/event-stream"
      },
      onDownloadProgress: (a) => {
        var d, h;
        const f = (((h = (d = a.event) == null ? void 0 : d.target) == null ? void 0 : h.responseText) || "").split(`
`);
        for (const b of f) {
          if (!b.trim() || !b.startsWith("data:")) continue;
          const l = b.replace("data:", "").trim();
          if (l)
            try {
              const g = JSON.parse(l);
              ie.update((m) => {
                const k = m.messages.find((_) => _.id === "streaming");
                if (!k) return m;
                if (typeof g == "string") {
                  const _ = k.message + g;
                  return {
                    ...m,
                    messages: m.messages.map(
                      (v) => v.id === "streaming" ? {
                        ...v,
                        message: _,
                        formattedMessage: Nr(_)
                      } : v
                    )
                  };
                } else {
                  if (Array.isArray(g))
                    return {
                      ...m,
                      messages: m.messages.map(
                        (_) => _.id === "streaming" ? {
                          ..._,
                          context: g.map((v) => ({
                            title: v.title,
                            website_url: v.website_url
                          }))
                        } : _
                      )
                    };
                  if ("chat_id" in g)
                    return m.currentChatId || Ts(o), m;
                  if ("done" in g && g.done)
                    return {
                      ...m,
                      messages: m.messages.map(
                        (_) => _.id === "streaming" ? { ..._, id: Date.now().toString() } : _
                      )
                    };
                }
                return m;
              });
            } catch (g) {
              if (console.error("Error parsing SSE data:", g), g instanceof Error && g.message !== "Error parsing SSE data:")
                throw g;
            }
        }
      }
    })).status !== 200)
      throw new Error("Failed to send message");
  }, "Failed to send message. Please try again.");
}, Rs = () => {
  ie.update((e) => ({
    ...e,
    messages: [],
    currentChatId: null
  }));
}, Mt = () => {
  ie.update((e) => ({
    ...e,
    showHistory: !e.showHistory
  }));
}, R1 = async (e) => {
  await vn(async () => {
    if ((await Kt.delete(`/chat/${e}`)).data.success)
      ie.update((u) => ({
        ...u,
        chats: u.chats.filter((n) => n.id !== e),
        messages: u.currentChatId === e ? [] : u.messages,
        currentChatId: u.currentChatId === e ? null : u.currentChatId
      }));
    else
      throw new Error("Failed to delete chat");
  }, "Failed to delete chat");
}, F1 = (e) => {
  ie.update((t) => t.selectedProducts.includes(e) ? t : {
    ...t,
    selectedProducts: [...t.selectedProducts, e]
  });
}, Po = (e) => {
  ie.update((t) => ({
    ...t,
    selectedProducts: t.selectedProducts.filter((u) => u !== e)
  }));
}, O1 = (e) => {
  ie.update((t) => ({
    ...t,
    selectedDocType: e
  }));
}, N1 = () => {
  ie.update((e) => ({
    ...e,
    selectedProducts: [],
    selectedDocType: "user-docs"
  }));
};
function M1() {
  const { subscribe: e, set: t } = xr({
    userId: null
  });
  function u() {
    const n = localStorage.getItem("userId");
    if (n)
      t({ userId: n });
    else {
      const r = crypto.randomUUID();
      localStorage.setItem("userId", r), t({ userId: r });
    }
  }
  return {
    subscribe: e,
    initializeUser: u
  };
}
const Fs = M1();
Ba();
var I1 = /* @__PURE__ */ se('<div class="loading-container svelte-l3n8oi"><div class="loading-content svelte-l3n8oi"><div class="loading-dots svelte-l3n8oi"><div class="dot dot-1 svelte-l3n8oi"></div> <div class="dot dot-2 svelte-l3n8oi"></div> <div class="dot dot-3 svelte-l3n8oi"></div></div> <p class="loading-text svelte-l3n8oi">Loading chat history...</p></div></div>'), L1 = /* @__PURE__ */ se('<div class="empty-state svelte-l3n8oi"><div class="empty-message svelte-l3n8oi">No chats found</div></div>'), B1 = /* @__PURE__ */ se('<div role="button" tabindex="0" class="chat-item svelte-l3n8oi"><div class="chat-item-content svelte-l3n8oi"><div class="chat-info svelte-l3n8oi"><h3 class="chat-title svelte-l3n8oi"> </h3> <p class="chat-date svelte-l3n8oi"> </p></div> <button type="button" class="delete-button svelte-l3n8oi" aria-label="Delete chat"><svg xmlns="http://www.w3.org/2000/svg" class="delete-icon svelte-l3n8oi" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" class="svelte-l3n8oi"></path></svg></button></div></div>'), P1 = /* @__PURE__ */ se('<div class="chat-list svelte-l3n8oi"><!></div>'), z1 = /* @__PURE__ */ se('<div class="history-container svelte-l3n8oi"><!></div>');
const q1 = {
  hash: "svelte-l3n8oi",
  code: `.history-container.svelte-l3n8oi {flex:1;display:flex;flex-direction:column;height:calc(100vh - 64px);background-color:white;}.loading-container.svelte-l3n8oi {flex:1;display:flex;align-items:center;justify-content:center;min-height:400px;}.loading-content.svelte-l3n8oi {display:flex;flex-direction:column;align-items:center;gap:0.75rem;}.loading-dots.svelte-l3n8oi {display:flex;gap:0.5rem;}.dot.svelte-l3n8oi {width:0.75rem;height:0.75rem;background-color:#2563eb; /* bg-blue-600 */border-radius:9999px; /* rounded-full */
    animation: svelte-l3n8oi-bounce 1s infinite;}.dot-1.svelte-l3n8oi {animation-delay:0s;}.dot-2.svelte-l3n8oi {animation-delay:0.2s;}.dot-3.svelte-l3n8oi {animation-delay:0.4s;}

  @keyframes svelte-l3n8oi-bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }.loading-text.svelte-l3n8oi {color:#6b7280; /* text-gray-500 */}.chat-list.svelte-l3n8oi {flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:0.5rem;}.empty-state.svelte-l3n8oi {display:flex;align-items:center;justify-content:center;min-height:400px;}.empty-message.svelte-l3n8oi {text-align:center;color:#6b7280; /* text-gray-500 */}.chat-item.svelte-l3n8oi {padding:1rem;background-color:#f9fafb; /* bg-gray-50 */border-radius:0.5rem; /* rounded-lg */cursor:pointer;transition:background-color 0.2s;}.chat-item.svelte-l3n8oi:hover {background-color:#f3f4f6; /* bg-gray-100 */}.chat-item-content.svelte-l3n8oi {display:flex;justify-content:space-between;align-items:flex-start;}.chat-info.svelte-l3n8oi {flex:1;}.chat-title.svelte-l3n8oi {font-weight:500;color:#111827; /* text-gray-900 */}.chat-date.svelte-l3n8oi {font-size:0.875rem;color:#6b7280; /* text-gray-500 */}.delete-button.svelte-l3n8oi {padding:0.25rem;color:#9ca3af; /* text-gray-400 */border-radius:9999px; /* rounded-full */background:transparent;border:none;cursor:pointer;}.delete-button.svelte-l3n8oi:hover {color:#ef4444; /* text-red-500 */background-color:#e5e7eb; /* bg-gray-200 */}.delete-icon.svelte-l3n8oi {width:1.25rem;height:1.25rem;}`
};
function U1(e, t) {
  $t(t, !1), hu(e, q1);
  const [u, n] = cn(), r = () => ru(Fs, "$userStore", u), o = () => ru(ie, "$chatStore", u);
  pu(() => {
    const l = r().userId;
    l && Ts(l);
  });
  function i(l) {
    D1(l), Mc(ie, st(o).showHistory = !1, st(o));
  }
  function s(l, g) {
    l.stopPropagation(), R1(g);
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
  mr();
  var f = z1(), d = $(f);
  {
    var h = (l) => {
      var g = I1();
      Y(l, g);
    }, b = (l) => {
      var g = P1(), m = $(g);
      {
        var k = (v) => {
          var E = L1();
          Y(v, E);
        }, _ = (v) => {
          var E = gr(), w = tu(E);
          It(w, 1, () => o().chats, (A) => A.id, (A, T) => {
            var N = B1(), W = $(N), V = $(W), Q = $(V), B = $(Q), J = de(Q, 2), G = $(J), U = de(V, 2);
            Ke(
              (j) => {
                rt(B, F(T).title), rt(G, j);
              },
              [
                () => a(F(T).created_at)
              ],
              Bt
            ), nt("click", U, (j) => s(j, F(T).id)), nt("click", N, () => i(F(T))), nt("keydown", N, (j) => c(j, () => i(F(T)))), Y(A, N);
          }), Y(v, E);
        };
        De(m, (v) => {
          o().chats.length === 0 ? v(k) : v(_, !1);
        });
      }
      Y(l, g);
    };
    De(d, (l) => {
      o().isLoading ? l(h) : l(b, !1);
    });
  }
  Y(e, f), jt(), n();
}
var $1 = /* @__PURE__ */ se("<span>U</span>"), j1 = /* @__PURE__ */ se("<span>B</span>"), H1 = /* @__PURE__ */ se('<div class="message-text svelte-4vjymg"> </div>'), G1 = /* @__PURE__ */ se('<div class="markdown-content"><!></div>'), Z1 = /* @__PURE__ */ se('<a target="_blank" rel="noopener noreferrer" class="source-link svelte-4vjymg"> </a>'), W1 = /* @__PURE__ */ se('<div class="context-links svelte-4vjymg"></div>'), K1 = /* @__PURE__ */ se('<div><div><div class="avatar svelte-4vjymg"><!></div> <div class="bubble-container svelte-4vjymg"><div><!></div> <!> <div> </div></div></div></div>');
const V1 = {
  hash: "svelte-4vjymg",
  code: `.message-container.svelte-4vjymg {display:flex;margin-bottom:1rem;}.user-message.svelte-4vjymg {justify-content:flex-end;}.bot-message.svelte-4vjymg {justify-content:flex-start;}.message-content.svelte-4vjymg {display:flex;align-items:flex-end;gap:0.5rem;}.user-content.svelte-4vjymg {flex-direction:row-reverse;}.bot-content.svelte-4vjymg {flex-direction:row;}.avatar.svelte-4vjymg {width:2rem;height:2rem;border-radius:50%;background-color:#3b82f6; /* bg-blue-500 */display:flex;align-items:center;justify-content:center;color:white;}.bubble-container.svelte-4vjymg {max-width:80%;}.message-bubble.svelte-4vjymg {padding:0.5rem 1rem;border-radius:1rem; /* rounded-2xl */}.user-bubble.svelte-4vjymg {background-color:#3b82f6; /* bg-blue-500 */color:white;}.bot-bubble.svelte-4vjymg {background-color:#f3f4f6; /* bg-gray-100 */color:#1f2937; /* text-gray-800 */}.message-text.svelte-4vjymg {white-space:pre-wrap;word-break:break-word;}.context-links.svelte-4vjymg {margin-top:0.5rem;display:flex;flex-direction:column;gap:0.25rem;}.source-link.svelte-4vjymg {display:block;font-size:0.875rem;color:#2563eb; /* text-blue-600 */text-decoration:none;}.source-link.svelte-4vjymg:hover {text-decoration:underline;}.timestamp.svelte-4vjymg {font-size:0.75rem;color:#6b7280; /* text-gray-500 */margin-top:0.25rem;}.user-timestamp.svelte-4vjymg {text-align:right;}.bot-timestamp.svelte-4vjymg {text-align:left;}

  /* Global styles for markdown content */.markdown-content {font-size:1rem;line-height:1.6;color:inherit;}.markdown-content p {margin-bottom:1rem;color:inherit;}.markdown-content pre {margin:1rem 0;padding:1rem;border-radius:0.5rem;background-color:#f8f9fa !important;overflow-x:auto;border:1px solid #e5e7eb;}.markdown-content code {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;}.markdown-content code.inline-code {background-color:#f3f4f6;padding:0.2rem 0.4rem;border-radius:0.25rem;font-size:0.875em;color:#dc2626;border:1px solid #e5e7eb;}`
};
function J1(e, t) {
  $t(t, !1), hu(e, V1);
  let u = Du(t, "content", 8), n = Du(t, "type", 8), r = Du(t, "timestamp", 8), o = Du(t, "context", 8, null);
  const i = (A) => A.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  mr();
  var s = K1(), a = $(s), c = $(a), f = $(c);
  {
    var d = (A) => {
      var T = $1();
      Y(A, T);
    }, h = (A) => {
      var T = j1();
      Y(A, T);
    };
    De(f, (A) => {
      n() === "user" ? A(d) : A(h, !1);
    });
  }
  var b = de(c, 2), l = $(b), g = $(l);
  {
    var m = (A) => {
      var T = H1(), N = $(T);
      Ke(() => rt(N, u())), Y(A, T);
    }, k = (A) => {
      var T = G1(), N = $(T);
      xi(N, u), Y(A, T);
    };
    De(g, (A) => {
      n() === "user" ? A(m) : A(k, !1);
    });
  }
  var _ = de(l, 2);
  {
    var v = (A) => {
      var T = W1();
      It(T, 5, o, Mu, (N, W) => {
        var V = Z1(), Q = $(V);
        Ke(() => {
          Ei(V, "href", F(W).website_url), rt(Q, F(W).title);
        }), Y(N, V);
      }), Y(A, T);
    };
    De(_, (A) => {
      o() && o().length > 0 && A(v);
    });
  }
  var E = de(_, 2), w = $(E);
  Ke(
    (A) => {
      bt(s, 1, `message-container ${(n() === "user" ? "user-message" : "bot-message") ?? ""}`, "svelte-4vjymg"), bt(a, 1, `message-content ${(n() === "user" ? "user-content" : "bot-content") ?? ""}`, "svelte-4vjymg"), bt(l, 1, `message-bubble ${(n() === "user" ? "user-bubble" : "bot-bubble") ?? ""}`, "svelte-4vjymg"), bt(E, 1, `timestamp ${(n() === "user" ? "user-timestamp" : "bot-timestamp") ?? ""}`, "svelte-4vjymg"), rt(w, A);
    },
    [() => i(r())],
    Bt
  ), Y(e, s), jt();
}
const zo = [
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
], qo = [
  { value: "all", label: "All Documentation" },
  { value: "user-docs", label: "User Documentation" },
  { value: "developer-docs", label: "Developer Documentation" }
];
var Y1 = /* @__PURE__ */ xc('<svg class="check-icon svelte-14bq72f" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), X1 = /* @__PURE__ */ se("<button> <!></button>"), Q1 = /* @__PURE__ */ se('<div class="dropdown-menu left svelte-14bq72f"><div class="dropdown-content svelte-14bq72f"></div></div>'), eh = /* @__PURE__ */ se('<div class="checkbox-item svelte-14bq72f"><label class="checkbox-label svelte-14bq72f"><input type="checkbox" class="checkbox svelte-14bq72f"> <span class="checkbox-text svelte-14bq72f"> </span></label></div>'), th = /* @__PURE__ */ se('<div class="dropdown-menu right svelte-14bq72f"><div class="dropdown-content product-list svelte-14bq72f"></div></div>'), uh = /* @__PURE__ */ se('<span class="tag svelte-14bq72f"> <button class="tag-remove svelte-14bq72f"><svg class="tag-icon svelte-14bq72f" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></span>'), nh = /* @__PURE__ */ se('<div class="tag-container svelte-14bq72f"></div>'), rh = /* @__PURE__ */ se('<div class="filter-container svelte-14bq72f"><div class="filter-wrapper svelte-14bq72f"><div class="dropdown-container svelte-14bq72f"><button class="filter-button svelte-14bq72f"><span> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div> <div class="dropdown-container svelte-14bq72f"><button class="filter-button svelte-14bq72f"><span>Select Products</span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div></div> <!></div>');
const oh = {
  hash: "svelte-14bq72f",
  code: `.filter-container.svelte-14bq72f {background-color:white;border-bottom:1px solid #e5e7eb; /* border-gray-200 */padding:0.5rem 1rem;}.filter-wrapper.svelte-14bq72f {display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;}.dropdown-container.svelte-14bq72f {position:relative;}.filter-button.svelte-14bq72f {display:flex;align-items:center;gap:0.5rem;padding:0.375rem 0.75rem;font-size:0.875rem;font-weight:500;color:#374151;background-color:#f3f4f6;border-radius:9999px;border:none;cursor:pointer;transition:background-color 0.2s;}.filter-button.svelte-14bq72f:hover {background-color:#e5e7eb; /* bg-gray-200 */}.dropdown-icon.svelte-14bq72f {width:1rem;height:1rem;transition:transform 0.2s;}.dropdown-icon.rotate.svelte-14bq72f {transform:rotate(180deg);}.dropdown-menu.svelte-14bq72f {position:absolute;top:calc(100% + 0.5rem);background-color:white;border-radius:0.5rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);border:1px solid #e5e7eb;z-index:99999;}.dropdown-menu.left.svelte-14bq72f {left:0;}.dropdown-menu.right.svelte-14bq72f {right:0;width:16rem;}.dropdown-content.svelte-14bq72f {padding:0.5rem;}.product-list.svelte-14bq72f {max-height:20rem;overflow-y:auto;}.dropdown-item.svelte-14bq72f {display:flex;align-items:center;width:100%;padding:0.5rem;text-align:left;font-size:0.875rem;color:#374151; /* text-gray-700 */border-radius:0.375rem;border:none;background:transparent;cursor:pointer;}.dropdown-item.svelte-14bq72f:hover {background-color:#f9fafb; /* bg-gray-50 */}.dropdown-item.selected.svelte-14bq72f {background-color:#eff6ff; /* bg-blue-50 */color:#1d4ed8; /* text-blue-700 */}.check-icon.svelte-14bq72f {width:1rem;height:1rem;margin-left:auto;}.checkbox-item.svelte-14bq72f {display:flex;align-items:center;padding:0.5rem;border-radius:0.375rem;}.checkbox-item.svelte-14bq72f:hover {background-color:#f9fafb; /* bg-gray-50 */}.checkbox-label.svelte-14bq72f {display:flex;align-items:center;gap:0.5rem;cursor:pointer;width:100%;}.checkbox.svelte-14bq72f {border-radius:0.25rem;border:1px solid #d1d5db; /* border-gray-300 */color:#2563eb; /* text-blue-600 */}.checkbox.svelte-14bq72f:focus {outline:none;box-shadow:0 0 0 2px rgba(59, 130, 246, 0.5); /* focus:ring-blue-500 */}.checkbox-text.svelte-14bq72f {font-size:0.875rem;color:#374151; /* text-gray-700 */}.tag-container.svelte-14bq72f {margin-top:0.5rem;display:flex;flex-wrap:wrap;gap:0.5rem;}.tag.svelte-14bq72f {display:inline-flex;align-items:center;gap:0.25rem;padding:0.25rem 0.5rem;border-radius:0.375rem;background-color:#eff6ff; /* bg-blue-50 */color:#2563eb; /* text-blue-600 */font-size:0.75rem;}.tag-remove.svelte-14bq72f {border:none;background:transparent;color:inherit;cursor:pointer;padding:0;}.tag-remove.svelte-14bq72f:hover {color:#1e40af; /* text-blue-800 */}.tag-icon.svelte-14bq72f {width:0.75rem;height:0.75rem;}`
};
function ih(e, t) {
  $t(t, !1), hu(e, oh);
  const [u, n] = cn(), r = () => ru(ie, "$chatStore", u), o = Yt();
  let i = Yt(!1), s = Yt(!1), a = Yt(), c = Yt();
  function f(B) {
    const J = B.target;
    F(a) && !F(a).contains(J) && Se(i, !1), F(c) && !F(c).contains(J) && Se(s, !1);
  }
  function d() {
    Se(i, !1), Se(s, !1);
  }
  pu(() => {
    document.addEventListener("click", f, !0);
    const B = document.querySelector("fluent-ai-chatbot");
    B && B.addEventListener("click-outside", d);
  }), Lc(() => {
    document.removeEventListener("click", f, !0);
    const B = document.querySelector("fluent-ai-chatbot");
    B && B.removeEventListener("click-outside", d);
  }), Qa(() => r(), () => {
    var B;
    Se(o, ((B = qo.find((J) => J.value === r().selectedDocType)) == null ? void 0 : B.label) || "Select Doc Type");
  }), ec(), mr();
  var h = rh(), b = $(h), l = $(b), g = $(l), m = $(g), k = $(m), _ = de(m, 2), v = de(g, 2);
  {
    var E = (B) => {
      var J = Q1(), G = $(J);
      It(G, 5, () => qo, Mu, (U, j) => {
        var pe = X1(), H = $(pe), ae = de(H);
        {
          var ce = (be) => {
            var ye = Y1();
            Y(be, ye);
          };
          De(ae, (be) => {
            r().selectedDocType === F(j).value && be(ce);
          });
        }
        Ke(() => {
          bt(pe, 1, `dropdown-item ${(r().selectedDocType === F(j).value ? "selected" : "") ?? ""}`, "svelte-14bq72f"), rt(H, `${F(j).label ?? ""} `);
        }), nt("click", pe, () => {
          O1(F(j).value), Se(s, !1);
        }), Y(U, pe);
      }), Y(B, J);
    };
    De(v, (B) => {
      F(s) && B(E);
    });
  }
  Kn(l, (B) => Se(c, B), () => F(c));
  var w = de(l, 2), A = $(w), T = de($(A), 2), N = de(A, 2);
  {
    var W = (B) => {
      var J = th(), G = $(J);
      It(G, 5, () => zo, Mu, (U, j) => {
        var pe = eh(), H = $(pe), ae = $(H), ce = de(ae, 2), be = $(ce);
        Ke(
          (ye) => {
            Rc(ae, ye), rt(be, F(j).label);
          },
          [
            () => r().selectedProducts.includes(F(j).value)
          ],
          Bt
        ), nt("change", ae, () => {
          r().selectedProducts.includes(F(j).value) ? Po(F(j).value) : F1(F(j).value);
        }), Y(U, pe);
      }), Y(B, J);
    };
    De(N, (B) => {
      F(i) && B(W);
    });
  }
  Kn(w, (B) => Se(a, B), () => F(a));
  var V = de(b, 2);
  {
    var Q = (B) => {
      var J = nh();
      It(J, 5, () => r().selectedProducts, Mu, (G, U) => {
        var j = gr();
        const pe = /* @__PURE__ */ Bt(() => zo.find((ce) => ce.value === F(U)));
        var H = tu(j);
        {
          var ae = (ce) => {
            var be = uh(), ye = $(be), He = de(ye);
            Ke(() => {
              rt(ye, `${F(pe).label ?? ""} `), Ei(He, "aria-label", `Remove ${F(pe).label ?? ""}`);
            }), nt("click", He, () => Po(F(U))), Y(ce, be);
          };
          De(H, (ce) => {
            F(pe) && ce(ae);
          });
        }
        Y(G, j);
      }), Y(B, J);
    };
    De(V, (B) => {
      r().selectedProducts.length > 0 && B(Q);
    });
  }
  Ke(() => {
    rt(k, F(o)), bt(_, 0, `dropdown-icon ${(F(s) ? "rotate" : "") ?? ""}`, "svelte-14bq72f"), bt(T, 0, `dropdown-icon ${(F(i) ? "rotate" : "") ?? ""}`, "svelte-14bq72f");
  }), nt("click", g, () => Se(s, !F(s))), nt("click", A, () => Se(i, !F(i))), Y(e, h), jt(), n();
}
var sh = /* @__PURE__ */ se('<div class="thinking svelte-qdlwx0"><span class="svelte-qdlwx0">Thinking</span> <span class="dots svelte-qdlwx0"><span class="dot dot-1 svelte-qdlwx0">.</span> <span class="dot dot-2 svelte-qdlwx0">.</span> <span class="dot dot-3 svelte-qdlwx0">.</span></span></div>'), ah = /* @__PURE__ */ se('<div class="prose typing-animation svelte-qdlwx0"><!></div>'), ch = /* @__PURE__ */ se('<div class="message-wrapper svelte-qdlwx0"><div class="message-content svelte-qdlwx0"><div class="avatar svelte-qdlwx0"><span class="svelte-qdlwx0">B</span></div> <div class="message-bubble svelte-qdlwx0"><!></div></div></div>'), lh = (e, t) => {
  e.key === "Enter" && !e.shiftKey && (e.preventDefault(), t());
}, fh = /* @__PURE__ */ se('<div class="chat-container svelte-qdlwx0"><div class="filter-container svelte-qdlwx0"><!></div> <div class="messages-container svelte-qdlwx0"></div> <form class="input-container svelte-qdlwx0"><input type="text" placeholder="Type your message..." class="message-input svelte-qdlwx0"></form></div>');
const dh = {
  hash: "svelte-qdlwx0",
  code: `.chat-container.svelte-qdlwx0 {height:100%;display:flex;flex-direction:column;}.filter-container.svelte-qdlwx0 {flex-shrink:0;}.messages-container.svelte-qdlwx0 {flex:1;overflow-y:auto;padding:1rem;background-color:#f9fafb; /* bg-gray-50 */display:flex;flex-direction:column;gap:1rem;}.message-wrapper.svelte-qdlwx0 {display:flex;justify-content:flex-start;width:100%;padding-right:1rem; /* Add padding to prevent text from touching edge */}.message-content.svelte-qdlwx0 {display:flex;gap:1rem;max-width:90%; /* Reduce from 95% to 90% to add more margin */}.avatar.svelte-qdlwx0 {width:2rem;height:2rem;border-radius:9999px; /* rounded-full */background-color:#3b82f6; /* bg-blue-500 */display:flex;align-items:center;justify-content:center;color:white;}.message-bubble.svelte-qdlwx0 {background-color:white;border:1px solid #e5e7eb; /* border-gray-200 */border-radius:0.5rem; /* rounded-lg */padding:1rem;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */word-wrap:break-word; /* Ensure text breaks properly */overflow-wrap:break-word; /* Modern browsers */width:100%; /* Ensure bubble takes full width of its container */max-width:100%; /* Limit width to prevent overflow */}.thinking.svelte-qdlwx0 {display:flex;align-items:center;gap:0.5rem;color:#111827; /* text-gray-900 */}.dots.svelte-qdlwx0 {display:flex;gap:0.25rem;}.dot.svelte-qdlwx0 {
    animation: svelte-qdlwx0-bounce 1s infinite;}.dot-1.svelte-qdlwx0 {animation-delay:0ms;}.dot-2.svelte-qdlwx0 {animation-delay:150ms;}.dot-3.svelte-qdlwx0 {animation-delay:300ms;}

  @keyframes svelte-qdlwx0-bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }.prose.svelte-qdlwx0 {font-size:0.875rem; /* prose-sm */max-width:100%; /* Ensure content doesn't overflow */overflow-wrap:break-word;}.input-container.svelte-qdlwx0 {flex-shrink:0;border-top:1px solid #e5e7eb; /* border-gray-200 */background-color:white;padding:1rem;width:100%;box-sizing:border-box;}.message-input.svelte-qdlwx0 {width:100%;padding:0.5rem 1rem;border:1px solid #e5e7eb; /* border-gray-200 */border-radius:0.5rem; /* rounded-lg */box-sizing:border-box;max-width:100%;}.message-input.svelte-qdlwx0:focus {outline:none;border-color:#3b82f6; /* border-blue-500 */}

  /* Typing animation */
  @keyframes svelte-qdlwx0-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }.typing-animation.svelte-qdlwx0 {
    animation: svelte-qdlwx0-typing 0.5s ease-in-out;}`
};
function hh(e, t) {
  $t(t, !0), hu(e, dh);
  const [u, n] = cn(), r = () => ru(ie, "$chatStore", u);
  let o = Ha(""), i, s = /* @__PURE__ */ ut(() => r().messages), a = /* @__PURE__ */ ut(() => r().isLoading);
  const c = () => {
    i && (i.scrollTop = i.scrollHeight);
  };
  uu(() => {
    F(s) && setTimeout(c, 100);
  }), pu(() => {
    c();
  }), uu(() => {
    c();
  });
  const f = async () => {
    if (!F(o).trim()) return;
    const k = F(o);
    Se(o, ""), await T1(k);
  };
  var d = fh(), h = $(d), b = $(h);
  ih(b, {});
  var l = de(h, 2);
  It(l, 21, () => F(s), (k) => k.id, (k, _) => {
    var v = gr(), E = tu(v);
    {
      var w = (T) => {
        var N = ch(), W = $(N), V = de($(W), 2), Q = $(V);
        {
          var B = (G) => {
            var U = sh();
            Y(G, U);
          }, J = (G) => {
            var U = ah(), j = $(U);
            xi(j, () => F(_).formattedMessage || F(_).message), Y(G, U);
          };
          De(Q, (G) => {
            F(_).message ? G(J, !1) : G(B);
          });
        }
        Y(T, N);
      }, A = (T) => {
        const N = /* @__PURE__ */ ut(() => F(_).formattedMessage || F(_).message), W = /* @__PURE__ */ ut(() => F(_).role === "human" ? "user" : "bot"), V = /* @__PURE__ */ ut(() => new Date(F(_).created_at));
        J1(T, {
          get content() {
            return F(N);
          },
          get type() {
            return F(W);
          },
          get timestamp() {
            return F(V);
          },
          get context() {
            return F(_).context;
          }
        });
      };
      De(E, (T) => {
        F(_).id === "streaming" ? T(w) : T(A, !1);
      });
    }
    Y(k, v);
  }), Kn(l, (k) => i = k, () => i);
  var g = de(l, 2), m = $(g);
  m.__keydown = [lh, f], Ke(() => m.disabled = F(a)), nt("submit", g, (k) => {
    k.preventDefault(), f();
  }), Oc(m, () => F(o), (k) => Se(o, k)), Y(e, d), jt(), n();
}
_i(["keydown"]);
var ph = /* @__PURE__ */ se('<div class="title svelte-114vtvh">History</div> <button class="icon-button svelte-114vtvh" aria-label="Close history"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-114vtvh" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>', 1), bh = /* @__PURE__ */ se('<div class="title svelte-114vtvh">Fluent ChatBot</div> <div class="button-group svelte-114vtvh"><button class="icon-button svelte-114vtvh" aria-label="Chat history"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-114vtvh" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg></button> <button class="icon-button svelte-114vtvh" aria-label="Refresh chat"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-114vtvh" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v4a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg></button></div>', 1), gh = /* @__PURE__ */ se('<main class="svelte-114vtvh"><header><!></header> <div class="content svelte-114vtvh"><!></div></main>');
const mh = {
  hash: "svelte-114vtvh",
  code: "main.svelte-114vtvh {height:100vh;display:flex;flex-direction:column;background-color:#f9fafb; /* gray-50 */overflow:hidden;}header.svelte-114vtvh {background-color:#2563eb; /* blue-600 */color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.history-header.svelte-114vtvh {background-color:#2563eb; /* blue-600 */color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.main-header.svelte-114vtvh {background-color:#2563eb; /* blue-600 */color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.title.svelte-114vtvh {font-size:1.5rem;font-weight:bold;}.button-group.svelte-114vtvh {margin-left:auto;display:flex;gap:0.5rem;}.icon-button.svelte-114vtvh {padding:0.5rem;border-radius:9999px;background:transparent;border:none;color:white;cursor:pointer;}.icon-button.svelte-114vtvh:hover {background-color:#1d4ed8; /* blue-700 */}button.svelte-114vtvh:last-child {margin-left:auto;}.icon.svelte-114vtvh {height:1.25rem;width:1.25rem;}.content.svelte-114vtvh {flex:1;overflow:hidden;}"
};
function _h(e, t) {
  $t(t, !0), hu(e, mh);
  const [u, n] = cn(), r = () => ru(ie, "$chatStore", u);
  let o = /* @__PURE__ */ ut(() => r().showHistory);
  pu(() => {
    Fs.initializeUser(), ie.update((g) => ({
      ...g,
      messages: [
        {
          id: Date.now().toString(),
          thread_id: "",
          role: "ai",
          message: "Hi, I'm Fluent ChatBot assistant, ask me anything about Fluent products",
          formattedMessage: "Hi, I'm Fluent ChatBot assistant, ask me anything about Fluent products",
          context: null,
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]
    }));
  });
  var i = gh(), s = $(i), a = $(s);
  {
    var c = (g) => {
      var m = ph(), k = de(tu(m), 2);
      k.__click = function(..._) {
        Mt == null || Mt.apply(this, _);
      }, Y(g, m);
    }, f = (g) => {
      var m = bh(), k = de(tu(m), 2), _ = $(k);
      _.__click = function(...E) {
        Mt == null || Mt.apply(this, E);
      };
      var v = de(_, 2);
      v.__click = () => {
        Rs(), N1(), ie.update((E) => ({
          ...E,
          messages: [
            {
              id: Date.now().toString(),
              thread_id: "",
              role: "ai",
              message: "Hi, I'm Fluent ChatBot assistant, ask me anything about Fluent products",
              formattedMessage: "Hi, I'm Fluent ChatBot assistant, ask me anything about Fluent products",
              context: null,
              created_at: (/* @__PURE__ */ new Date()).toISOString()
            }
          ]
        }));
      }, Y(g, m);
    };
    De(a, (g) => {
      F(o) ? g(c) : g(f, !1);
    });
  }
  var d = de(s, 2), h = $(d);
  {
    var b = (g) => {
      U1(g, {});
    }, l = (g) => {
      hh(g, {});
    };
    De(h, (g) => {
      F(o) ? g(b) : g(l, !1);
    });
  }
  Ke(() => bt(s, 1, Dc(F(o) ? "history-header" : "main-header"), "svelte-114vtvh")), Y(e, i), jt(), n();
}
_i(["click"]);
const xh = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-comment,.hljs-code,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}.markdown-content{font-size:1rem;line-height:1.6;color:#111827}.markdown-content p{margin-bottom:1rem;color:inherit}.markdown-content h1{font-size:2rem;font-weight:700;margin:2rem 0 1rem;color:inherit}.markdown-content h2{font-size:1.5rem;font-weight:600;margin:1.5rem 0 1rem;color:inherit}.markdown-content h3{font-size:1.25rem;font-weight:600;margin:1.25rem 0 .75rem;color:inherit}.markdown-content ul,.markdown-content ol{margin:1rem 0;padding-left:2rem;color:inherit}.markdown-content li{margin:.5rem 0}.markdown-content a{color:#2563eb;text-decoration:none;font-weight:500}.markdown-content a:hover{text-decoration:underline}.markdown-content blockquote{border-left:4px solid #e5e7eb;margin:1rem 0;padding:.5rem 1rem;color:#4b5563;background-color:#f9fafb}.markdown-content pre{margin:1rem 0;padding:1rem;border-radius:.5rem;background-color:#f8f9fa!important;overflow-x:auto;border:1px solid #e5e7eb}.markdown-content pre code{color:#374151!important;background:transparent!important}.markdown-content code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}.markdown-content code.inline-code{background-color:#f3f4f6;padding:.2rem .4rem;border-radius:.25rem;font-size:.875em;color:#dc2626;border:1px solid #e5e7eb}.markdown-content table{width:100%;margin:1rem 0;border-collapse:collapse}.markdown-content th,.markdown-content td{padding:.75rem;border:1px solid #e5e7eb;color:inherit}.markdown-content th{background-color:#f9fafb;font-weight:600;color:inherit}@media (prefers-color-scheme: dark){.markdown-content{color:#111827}.markdown-content blockquote{border-left-color:#e5e7eb;color:#4b5563;background-color:#f9fafb}.markdown-content code.inline-code{background-color:#f3f4f6;color:#dc2626;border-color:#e5e7eb}.markdown-content pre{background-color:#f8f9fa!important;border-color:#e5e7eb}.markdown-content pre code{color:#374151!important}.markdown-content th{background-color:#f9fafb}.markdown-content th,.markdown-content td{border-color:#e5e7eb}}html,body{height:100%;margin:0;overflow:hidden}`, vh = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-comment,.hljs-code,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}.markdown-content{font-size:1rem;line-height:1.6;color:#111827}.markdown-content p{margin-bottom:1rem;color:inherit}.markdown-content h1{font-size:2rem;font-weight:700;margin:2rem 0 1rem;color:inherit}.markdown-content h2{font-size:1.5rem;font-weight:600;margin:1.5rem 0 1rem;color:inherit}.markdown-content h3{font-size:1.25rem;font-weight:600;margin:1.25rem 0 .75rem;color:inherit}.markdown-content ul,.markdown-content ol{margin:1rem 0;padding-left:2rem;color:inherit}.markdown-content li{margin:.5rem 0}.markdown-content a{color:#2563eb;text-decoration:none;font-weight:500}.markdown-content a:hover{text-decoration:underline}.markdown-content blockquote{border-left:4px solid #e5e7eb;margin:1rem 0;padding:.5rem 1rem;color:#4b5563;background-color:#f9fafb}.markdown-content pre{margin:1rem 0;padding:1rem;border-radius:.5rem;background-color:#f8f9fa!important;overflow-x:auto;border:1px solid #e5e7eb}.markdown-content pre code{color:#374151!important;background:transparent!important}.markdown-content code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}.markdown-content code.inline-code{background-color:#f3f4f6;padding:.2rem .4rem;border-radius:.25rem;font-size:.875em;color:#dc2626;border:1px solid #e5e7eb}.markdown-content table{width:100%;margin:1rem 0;border-collapse:collapse}.markdown-content th,.markdown-content td{padding:.75rem;border:1px solid #e5e7eb;color:inherit}.markdown-content th{background-color:#f9fafb;font-weight:600;color:inherit}@media (prefers-color-scheme: dark){.markdown-content{color:#111827}.markdown-content blockquote{border-left-color:#e5e7eb;color:#4b5563;background-color:#f9fafb}.markdown-content code.inline-code{background-color:#f3f4f6;color:#dc2626;border-color:#e5e7eb}.markdown-content pre{background-color:#f8f9fa!important;border-color:#e5e7eb}.markdown-content pre code{color:#374151!important}.markdown-content th{background-color:#f9fafb}.markdown-content th,.markdown-content td{border-color:#e5e7eb}}`;
class Eh extends HTMLElement {
  constructor() {
    super();
    Dn(this, "clickHandler");
    Dn(this, "isOpen", !1);
    this.attachShadow({ mode: "open" }), this.clickHandler = this.handleClickOutside.bind(this);
  }
  handleClickOutside(u) {
    u.target, !u.composedPath().some(
      (o) => o === this || o instanceof HTMLElement && o.closest("fluent-ai-chatbot") === this
    ) && this.isOpen && this.toggleWidget();
  }
  toggleWidget() {
    var r, o;
    this.isOpen = !this.isOpen;
    const u = (r = this.shadowRoot) == null ? void 0 : r.querySelector("#fluent-ai-chatbot");
    u && (this.isOpen ? (u.style.display = "flex", setTimeout(() => {
      u.style.opacity = "1", u.style.transform = "translateY(0) scale(1)";
    }, 0)) : (u.style.opacity = "0", u.style.transform = "translateY(20px) scale(0.95)", setTimeout(() => {
      u.style.display = "none";
    }, 300)));
    const n = (o = this.shadowRoot) == null ? void 0 : o.querySelector("#chat-button");
    n && n.classList.toggle("active", this.isOpen);
  }
  connectedCallback() {
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
                    border-radius: 0.5rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    margin-bottom: 1rem;
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                    transform-origin: bottom right;
                    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
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

                ${xh}
                ${vh}
            `, this.shadowRoot.appendChild(u);
      const n = document.createElement("button");
      n.id = "chat-button", n.innerHTML = `
                <svg class="chat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <svg class="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            `, n.addEventListener("click", () => this.toggleWidget());
      const r = document.createElement("div");
      r.id = "fluent-ai-chatbot", this.shadowRoot.appendChild(r), this.shadowRoot.appendChild(n), vc(_h, {
        target: r
      }), document.addEventListener("click", this.clickHandler, !0);
    }
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.clickHandler, !0);
  }
}
customElements.define("fluent-ai-chatbot", Eh);
const yh = document.createElement("fluent-ai-chatbot");
document.body.appendChild(yh);
//# sourceMappingURL=fluent-ai-chatbot.js.map
