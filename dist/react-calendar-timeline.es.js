import { jsx as $, jsxs as $e } from "react/jsx-runtime";
import Z, { createElement as wt, useContext as xi, Component as ue, createRef as Si, PureComponent as Co } from "react";
import oe from "dayjs";
function Hn(a) {
  let i = 0,
    s = 0,
    c = !0;
  for (; a; )
    (!a.offsetParent &&
      a.tagName === "BODY" &&
      a.scrollLeft === 0 &&
      a.scrollTop === 0 &&
      (a = document.scrollingElement || a),
      (i += a.offsetLeft - (c ? 0 : a.scrollLeft) + a.clientLeft),
      (s += a.offsetTop - (c ? 0 : a.scrollTop) + a.clientTop),
      (a = a.offsetParent),
      (c = !1));
  return { x: i, y: s };
}
function Ct(a) {
  if (a === document.body || !a.parentNode) return { scrollLeft: 0, scrollTop: 0 };
  {
    const i = Ct(a.parentNode);
    return {
      scrollLeft: a.scrollLeft + i.scrollLeft,
      scrollTop: a.scrollTop + i.scrollTop,
    };
  }
}
function Et(a) {
  if (a === document.body || !a.offsetParent) return { offsetLeft: 0, offsetTop: 0 };
  {
    const i = Et(a.offsetParent);
    return {
      offsetLeft: a.offsetLeft + i.offsetLeft,
      offsetTop: a.offsetTop + i.offsetTop,
    };
  }
}
var me =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Re(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Pt = { exports: {} };
Pt.exports;
(function (a, i) {
  (function (s, c) {
    a.exports = c();
  })(me, function () {
    function s(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2
          ? s(Object(r), !0).forEach(function (n) {
              w(t, n, r[n]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
              });
      }
      return t;
    }
    function f(t) {
      return (
        (f =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        f(t)
      );
    }
    function d(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function m(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, C(n.key), n));
      }
    }
    function b(t, e, r) {
      return (e && m(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t);
    }
    function w(t, e, r) {
      return (
        (e = C(e)) in t
          ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
          : (t[e] = r),
        t
      );
    }
    function O(t, e) {
      if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function");
      ((t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e && I(t, e));
    }
    function k(t) {
      return (
        (k = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        k(t)
      );
    }
    function I(t, e) {
      return (
        (I = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (r, n) {
              return ((r.__proto__ = n), r);
            }),
        I(t, e)
      );
    }
    function T(t) {
      if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function E(t) {
      var e = (function () {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
        } catch {
          return !1;
        }
      })();
      return function () {
        var r,
          n = k(t);
        if (e) {
          var o = k(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return (function (l, u) {
          if (u && (typeof u == "object" || typeof u == "function")) return u;
          if (u !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return T(l);
        })(this, r);
      };
    }
    function P() {
      return (
        (P =
          typeof Reflect < "u" && Reflect.get
            ? Reflect.get.bind()
            : function (t, e, r) {
                var n = (function (l, u) {
                  for (; !Object.prototype.hasOwnProperty.call(l, u) && (l = k(l)) !== null; );
                  return l;
                })(t, e);
                if (n) {
                  var o = Object.getOwnPropertyDescriptor(n, e);
                  return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value;
                }
              }),
        P.apply(this, arguments)
      );
    }
    function C(t) {
      var e = (function (r, n) {
        if (typeof r != "object" || r === null) return r;
        var o = r[Symbol.toPrimitive];
        if (o !== void 0) {
          var l = o.call(r, n);
          if (typeof l != "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(r);
      })(t, "string");
      return typeof e == "symbol" ? e : e + "";
    }
    var D = function (t) {
        return !(!t || !t.Window) && t instanceof t.Window;
      },
      A = void 0,
      L = void 0;
    function K(t) {
      A = t;
      var e = t.document.createTextNode("");
      (e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), (L = t));
    }
    function B(t) {
      return D(t) ? t : (t.ownerDocument || t).defaultView || L.window;
    }
    typeof window < "u" && window && K(window);
    var V = function (t) {
        return !!t && f(t) === "object";
      },
      re = function (t) {
        return typeof t == "function";
      },
      x = {
        window: function (t) {
          return t === L || D(t);
        },
        docFrag: function (t) {
          return V(t) && t.nodeType === 11;
        },
        object: V,
        func: re,
        number: function (t) {
          return typeof t == "number";
        },
        bool: function (t) {
          return typeof t == "boolean";
        },
        string: function (t) {
          return typeof t == "string";
        },
        element: function (t) {
          if (!t || f(t) !== "object") return !1;
          var e = B(t) || L;
          return /object|function/.test(typeof Element > "u" ? "undefined" : f(Element))
            ? t instanceof Element || t instanceof e.Element
            : t.nodeType === 1 && typeof t.nodeName == "string";
        },
        plainObject: function (t) {
          return V(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString());
        },
        array: function (t) {
          return V(t) && t.length !== void 0 && re(t.splice);
        },
      };
    function Oe(t) {
      var e = t.interaction;
      if (e.prepared.name === "drag") {
        var r = e.prepared.axis;
        r === "x"
          ? ((e.coords.cur.page.y = e.coords.start.page.y),
            (e.coords.cur.client.y = e.coords.start.client.y),
            (e.coords.velocity.client.y = 0),
            (e.coords.velocity.page.y = 0))
          : r === "y" &&
            ((e.coords.cur.page.x = e.coords.start.page.x),
            (e.coords.cur.client.x = e.coords.start.client.x),
            (e.coords.velocity.client.x = 0),
            (e.coords.velocity.page.x = 0));
      }
    }
    function ae(t) {
      var e = t.iEvent,
        r = t.interaction;
      if (r.prepared.name === "drag") {
        var n = r.prepared.axis;
        if (n === "x" || n === "y") {
          var o = n === "x" ? "y" : "x";
          ((e.page[o] = r.coords.start.page[o]), (e.client[o] = r.coords.start.client[o]), (e.delta[o] = 0));
        }
      }
    }
    var it = {
        id: "actions/drag",
        install: function (t) {
          var e = t.actions,
            r = t.Interactable,
            n = t.defaults;
          ((r.prototype.draggable = it.draggable),
            (e.map.drag = it),
            (e.methodDict.drag = "draggable"),
            (n.actions.drag = it.defaults));
        },
        listeners: {
          "interactions:before-action-move": Oe,
          "interactions:action-resume": Oe,
          "interactions:action-move": ae,
          "auto-start:check": function (t) {
            var e = t.interaction,
              r = t.interactable,
              n = t.buttons,
              o = r.options.drag;
            if (
              o &&
              o.enabled &&
              (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || n & r.options.drag.mouseButtons)
            )
              return ((t.action = { name: "drag", axis: o.lockAxis === "start" ? o.startAxis : o.lockAxis }), !1);
          },
        },
        draggable: function (t) {
          return x.object(t)
            ? ((this.options.drag.enabled = t.enabled !== !1),
              this.setPerAction("drag", t),
              this.setOnEvents("drag", t),
              /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis),
              /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis),
              this)
            : x.bool(t)
              ? ((this.options.drag.enabled = t), this)
              : this.options.drag;
        },
        beforeMove: Oe,
        move: ae,
        defaults: { startAxis: "xy", lockAxis: "xy" },
        getCursor: function () {
          return "move";
        },
        filterEventType: function (t) {
          return t.search("drag") === 0;
        },
      },
      Nr = it,
      ie = {
        init: function (t) {
          var e = t;
          ((ie.document = e.document),
            (ie.DocumentFragment = e.DocumentFragment || ke),
            (ie.SVGElement = e.SVGElement || ke),
            (ie.SVGSVGElement = e.SVGSVGElement || ke),
            (ie.SVGElementInstance = e.SVGElementInstance || ke),
            (ie.Element = e.Element || ke),
            (ie.HTMLElement = e.HTMLElement || ie.Element),
            (ie.Event = e.Event),
            (ie.Touch = e.Touch || ke),
            (ie.PointerEvent = e.PointerEvent || e.MSPointerEvent));
        },
        document: null,
        DocumentFragment: null,
        SVGElement: null,
        SVGSVGElement: null,
        SVGElementInstance: null,
        Element: null,
        HTMLElement: null,
        Event: null,
        Touch: null,
        PointerEvent: null,
      };
    function ke() {}
    var Q = ie,
      se = {
        init: function (t) {
          var e = Q.Element,
            r = t.navigator || {};
          ((se.supportsTouch =
            "ontouchstart" in t || (x.func(t.DocumentTouch) && Q.document instanceof t.DocumentTouch)),
            (se.supportsPointerEvent = r.pointerEnabled !== !1 && !!Q.PointerEvent),
            (se.isIOS = /iP(hone|od|ad)/.test(r.platform)),
            (se.isIOS7 = /iP(hone|od|ad)/.test(r.platform) && /OS 7[^\d]/.test(r.appVersion)),
            (se.isIe9 = /MSIE 9/.test(r.userAgent)),
            (se.isOperaMobile = r.appName === "Opera" && se.supportsTouch && /Presto/.test(r.userAgent)),
            (se.prefixedMatchesSelector =
              "matches" in e.prototype
                ? "matches"
                : "webkitMatchesSelector" in e.prototype
                  ? "webkitMatchesSelector"
                  : "mozMatchesSelector" in e.prototype
                    ? "mozMatchesSelector"
                    : "oMatchesSelector" in e.prototype
                      ? "oMatchesSelector"
                      : "msMatchesSelector"),
            (se.pEventTypes = se.supportsPointerEvent
              ? Q.PointerEvent === t.MSPointerEvent
                ? {
                    up: "MSPointerUp",
                    down: "MSPointerDown",
                    over: "mouseover",
                    out: "mouseout",
                    move: "MSPointerMove",
                    cancel: "MSPointerCancel",
                  }
                : {
                    up: "pointerup",
                    down: "pointerdown",
                    over: "pointerover",
                    out: "pointerout",
                    move: "pointermove",
                    cancel: "pointercancel",
                  }
              : null),
            (se.wheelEvent = Q.document && "onmousewheel" in Q.document ? "mousewheel" : "wheel"));
        },
        supportsTouch: null,
        supportsPointerEvent: null,
        isIOS7: null,
        isIOS: null,
        isIe9: null,
        isOperaMobile: null,
        prefixedMatchesSelector: null,
        pEventTypes: null,
        wheelEvent: null,
      },
      le = se;
    function Ce(t, e) {
      if (t.contains) return t.contains(e);
      for (; e; ) {
        if (e === t) return !0;
        e = e.parentNode;
      }
      return !1;
    }
    function Ur(t, e) {
      for (; x.element(t); ) {
        if (be(t, e)) return t;
        t = pe(t);
      }
      return null;
    }
    function pe(t) {
      var e = t.parentNode;
      if (x.docFrag(e)) {
        for (; (e = e.host) && x.docFrag(e); );
        return e;
      }
      return e;
    }
    function be(t, e) {
      return (L !== A && (e = e.replace(/\/deep\//g, " ")), t[le.prefixedMatchesSelector](e));
    }
    var Ft = function (t) {
      return t.parentNode || t.host;
    };
    function Gr(t, e) {
      for (var r, n = [], o = t; (r = Ft(o)) && o !== e && r !== o.ownerDocument; ) (n.unshift(o), (o = r));
      return n;
    }
    function Nt(t, e, r) {
      for (; x.element(t); ) {
        if (be(t, e)) return !0;
        if ((t = pe(t)) === r) return be(t, e);
      }
      return !1;
    }
    function Yr(t) {
      return t.correspondingUseElement || t;
    }
    function Ut(t) {
      var e = t instanceof Q.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
      return (
        e && {
          left: e.left,
          right: e.right,
          top: e.top,
          bottom: e.bottom,
          width: e.width || e.right - e.left,
          height: e.height || e.bottom - e.top,
        }
      );
    }
    function Gt(t) {
      var e,
        r = Ut(t);
      if (!le.isIOS7 && r) {
        var n = {
          x: (e = (e = B(t)) || L).scrollX || e.document.documentElement.scrollLeft,
          y: e.scrollY || e.document.documentElement.scrollTop,
        };
        ((r.left += n.x), (r.right += n.x), (r.top += n.y), (r.bottom += n.y));
      }
      return r;
    }
    function Kr(t) {
      for (var e = []; t; ) (e.push(t), (t = pe(t)));
      return e;
    }
    function Xr(t) {
      return !!x.string(t) && (Q.document.querySelector(t), !0);
    }
    function H(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    }
    function Br(t, e, r) {
      return t === "parent" ? pe(r) : t === "self" ? e.getRect(r) : Ur(r, t);
    }
    function Ue(t, e, r, n) {
      var o = t;
      return (x.string(o) ? (o = Br(o, e, r)) : x.func(o) && (o = o.apply(void 0, n)), x.element(o) && (o = Gt(o)), o);
    }
    function st(t) {
      return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
    }
    function Yt(t) {
      return (
        !t ||
          ("x" in t && "y" in t) ||
          (((t = H({}, t)).x = t.left || 0),
          (t.y = t.top || 0),
          (t.width = t.width || (t.right || 0) - t.x),
          (t.height = t.height || (t.bottom || 0) - t.y)),
        t
      );
    }
    function ot(t, e, r) {
      (t.left && (e.left += r.x),
        t.right && (e.right += r.x),
        t.top && (e.top += r.y),
        t.bottom && (e.bottom += r.y),
        (e.width = e.right - e.left),
        (e.height = e.bottom - e.top));
    }
    function Ge(t, e, r) {
      var n = r && t.options[r];
      return st(Ue((n && n.origin) || t.options.origin, t, e, [t && e])) || { x: 0, y: 0 };
    }
    function Ee(t, e) {
      var r =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : function (h) {
                return !0;
              },
        n = arguments.length > 3 ? arguments[3] : void 0;
      if (((n = n || {}), x.string(t) && t.search(" ") !== -1 && (t = Vr(t)), x.array(t)))
        return (
          t.forEach(function (h) {
            return Ee(h, e, r, n);
          }),
          n
        );
      if ((x.object(t) && ((e = t), (t = "")), x.func(e) && r(t))) ((n[t] = n[t] || []), n[t].push(e));
      else if (x.array(e))
        for (var o = 0, l = e; o < l.length; o++) {
          var u = l[o];
          Ee(t, u, r, n);
        }
      else if (x.object(e))
        for (var p in e)
          Ee(
            Vr(p).map(function (h) {
              return "".concat(t).concat(h);
            }),
            e[p],
            r,
            n
          );
      return n;
    }
    function Vr(t) {
      return t.trim().split(/ +/);
    }
    var Ye = function (t, e) {
        return Math.sqrt(t * t + e * e);
      },
      ps = ["webkit", "moz"];
    function at(t, e) {
      t.__set || (t.__set = {});
      var r = function (o) {
        if (
          ps.some(function (l) {
            return o.indexOf(l) === 0;
          })
        )
          return 1;
        typeof t[o] != "function" &&
          o !== "__set" &&
          Object.defineProperty(t, o, {
            get: function () {
              return o in t.__set ? t.__set[o] : (t.__set[o] = e[o]);
            },
            set: function (l) {
              t.__set[o] = l;
            },
            configurable: !0,
          });
      };
      for (var n in e) r(n);
      return t;
    }
    function lt(t, e) {
      ((t.page = t.page || {}),
        (t.page.x = e.page.x),
        (t.page.y = e.page.y),
        (t.client = t.client || {}),
        (t.client.x = e.client.x),
        (t.client.y = e.client.y),
        (t.timeStamp = e.timeStamp));
    }
    function qr(t) {
      ((t.page.x = 0), (t.page.y = 0), (t.client.x = 0), (t.client.y = 0));
    }
    function Zr(t) {
      return t instanceof Q.Event || t instanceof Q.Touch;
    }
    function ct(t, e, r) {
      return ((t = t || "page"), ((r = r || {}).x = e[t + "X"]), (r.y = e[t + "Y"]), r);
    }
    function Jr(t, e) {
      return (
        (e = e || { x: 0, y: 0 }),
        le.isOperaMobile && Zr(t)
          ? (ct("screen", t, e), (e.x += window.scrollX), (e.y += window.scrollY))
          : ct("page", t, e),
        e
      );
    }
    function Ke(t) {
      return x.number(t.pointerId) ? t.pointerId : t.identifier;
    }
    function hs(t, e, r) {
      var n = e.length > 1 ? Qr(e) : e[0];
      (Jr(n, t.page),
        (function (o, l) {
          ((l = l || {}), le.isOperaMobile && Zr(o) ? ct("screen", o, l) : ct("client", o, l));
        })(n, t.client),
        (t.timeStamp = r));
    }
    function Kt(t) {
      var e = [];
      return (
        x.array(t)
          ? ((e[0] = t[0]), (e[1] = t[1]))
          : t.type === "touchend"
            ? t.touches.length === 1
              ? ((e[0] = t.touches[0]), (e[1] = t.changedTouches[0]))
              : t.touches.length === 0 && ((e[0] = t.changedTouches[0]), (e[1] = t.changedTouches[1]))
            : ((e[0] = t.touches[0]), (e[1] = t.touches[1])),
        e
      );
    }
    function Qr(t) {
      for (var e = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, r = 0; r < t.length; r++) {
        var n = t[r];
        for (var o in e) e[o] += n[o];
      }
      for (var l in e) e[l] /= t.length;
      return e;
    }
    function Xt(t) {
      if (!t.length) return null;
      var e = Kt(t),
        r = Math.min(e[0].pageX, e[1].pageX),
        n = Math.min(e[0].pageY, e[1].pageY),
        o = Math.max(e[0].pageX, e[1].pageX),
        l = Math.max(e[0].pageY, e[1].pageY);
      return { x: r, y: n, left: r, top: n, right: o, bottom: l, width: o - r, height: l - n };
    }
    function Bt(t, e) {
      var r = e + "X",
        n = e + "Y",
        o = Kt(t),
        l = o[0][r] - o[1][r],
        u = o[0][n] - o[1][n];
      return Ye(l, u);
    }
    function Vt(t, e) {
      var r = e + "X",
        n = e + "Y",
        o = Kt(t),
        l = o[1][r] - o[0][r],
        u = o[1][n] - o[0][n];
      return (180 * Math.atan2(u, l)) / Math.PI;
    }
    function en(t) {
      return x.string(t.pointerType)
        ? t.pointerType
        : x.number(t.pointerType)
          ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType]
          : /touch/.test(t.type || "") || t instanceof Q.Touch
            ? "touch"
            : "mouse";
    }
    function tn(t) {
      var e = x.func(t.composedPath) ? t.composedPath() : t.path;
      return [Yr(e ? e[0] : t.target), Yr(t.currentTarget)];
    }
    var ut = (function () {
      function t(e) {
        (d(this, t), (this.immediatePropagationStopped = !1), (this.propagationStopped = !1), (this._interaction = e));
      }
      return (
        b(t, [
          { key: "preventDefault", value: function () {} },
          {
            key: "stopPropagation",
            value: function () {
              this.propagationStopped = !0;
            },
          },
          {
            key: "stopImmediatePropagation",
            value: function () {
              this.immediatePropagationStopped = this.propagationStopped = !0;
            },
          },
        ]),
        t
      );
    })();
    Object.defineProperty(ut.prototype, "interaction", {
      get: function () {
        return this._interaction._proxy;
      },
      set: function () {},
    });
    var rn = function (t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          t.push(n);
        }
        return t;
      },
      nn = function (t) {
        return rn([], t);
      },
      Xe = function (t, e) {
        for (var r = 0; r < t.length; r++) if (e(t[r], r, t)) return r;
        return -1;
      },
      Be = function (t, e) {
        return t[Xe(t, e)];
      },
      ze = (function (t) {
        O(r, t);
        var e = E(r);
        function r(n, o, l) {
          var u;
          (d(this, r),
            ((u = e.call(this, o._interaction)).dropzone = void 0),
            (u.dragEvent = void 0),
            (u.relatedTarget = void 0),
            (u.draggable = void 0),
            (u.propagationStopped = !1),
            (u.immediatePropagationStopped = !1));
          var p = l === "dragleave" ? n.prev : n.cur,
            h = p.element,
            g = p.dropzone;
          return (
            (u.type = l),
            (u.target = h),
            (u.currentTarget = h),
            (u.dropzone = g),
            (u.dragEvent = o),
            (u.relatedTarget = o.target),
            (u.draggable = o.interactable),
            (u.timeStamp = o.timeStamp),
            u
          );
        }
        return (
          b(r, [
            {
              key: "reject",
              value: function () {
                var n = this,
                  o = this._interaction.dropState;
                if (
                  this.type === "dropactivate" ||
                  (this.dropzone && o.cur.dropzone === this.dropzone && o.cur.element === this.target)
                )
                  if (
                    ((o.prev.dropzone = this.dropzone),
                    (o.prev.element = this.target),
                    (o.rejected = !0),
                    (o.events.enter = null),
                    this.stopImmediatePropagation(),
                    this.type === "dropactivate")
                  ) {
                    var l = o.activeDrops,
                      u = Xe(l, function (h) {
                        var g = h.dropzone,
                          v = h.element;
                        return g === n.dropzone && v === n.target;
                      });
                    o.activeDrops.splice(u, 1);
                    var p = new r(o, this.dragEvent, "dropdeactivate");
                    ((p.dropzone = this.dropzone), (p.target = this.target), this.dropzone.fire(p));
                  } else this.dropzone.fire(new r(o, this.dragEvent, "dragleave"));
              },
            },
            { key: "preventDefault", value: function () {} },
            {
              key: "stopPropagation",
              value: function () {
                this.propagationStopped = !0;
              },
            },
            {
              key: "stopImmediatePropagation",
              value: function () {
                this.immediatePropagationStopped = this.propagationStopped = !0;
              },
            },
          ]),
          r
        );
      })(ut);
    function sn(t, e) {
      for (var r = 0, n = t.slice(); r < n.length; r++) {
        var o = n[r],
          l = o.dropzone,
          u = o.element;
        ((e.dropzone = l), (e.target = u), l.fire(e), (e.propagationStopped = e.immediatePropagationStopped = !1));
      }
    }
    function qt(t, e) {
      for (
        var r = (function (l, u) {
            for (var p = [], h = 0, g = l.interactables.list; h < g.length; h++) {
              var v = g[h];
              if (v.options.drop.enabled) {
                var y = v.options.drop.accept;
                if (
                  !(
                    (x.element(y) && y !== u) ||
                    (x.string(y) && !be(u, y)) ||
                    (x.func(y) && !y({ dropzone: v, draggableElement: u }))
                  )
                )
                  for (var S = 0, M = v.getAllElements(); S < M.length; S++) {
                    var _ = M[S];
                    _ !== u && p.push({ dropzone: v, element: _, rect: v.getRect(_) });
                  }
              }
            }
            return p;
          })(t, e),
          n = 0;
        n < r.length;
        n++
      ) {
        var o = r[n];
        o.rect = o.dropzone.getRect(o.element);
      }
      return r;
    }
    function on(t, e, r) {
      for (
        var n = t.dropState, o = t.interactable, l = t.element, u = [], p = 0, h = n.activeDrops;
        p < h.length;
        p++
      ) {
        var g = h[p],
          v = g.dropzone,
          y = g.element,
          S = g.rect,
          M = v.dropCheck(e, r, o, l, y, S);
        u.push(M ? y : null);
      }
      var _ = (function (R) {
        for (var j, z, W, U = [], X = 0; X < R.length; X++) {
          var F = R[X],
            G = R[j];
          if (F && X !== j)
            if (G) {
              var te = Ft(F),
                J = Ft(G);
              if (te !== F.ownerDocument)
                if (J !== F.ownerDocument)
                  if (te !== J) {
                    U = U.length ? U : Gr(G);
                    var ne = void 0;
                    if (G instanceof Q.HTMLElement && F instanceof Q.SVGElement && !(F instanceof Q.SVGSVGElement)) {
                      if (F === J) continue;
                      ne = F.ownerSVGElement;
                    } else ne = F;
                    for (var ce = Gr(ne, G.ownerDocument), fe = 0; ce[fe] && ce[fe] === U[fe]; ) fe++;
                    var yt = [ce[fe - 1], ce[fe], U[fe]];
                    if (yt[0])
                      for (var et = yt[0].lastChild; et; ) {
                        if (et === yt[1]) {
                          ((j = X), (U = ce));
                          break;
                        }
                        if (et === yt[2]) break;
                        et = et.previousSibling;
                      }
                  } else
                    ((W = G),
                      (parseInt(B((z = F)).getComputedStyle(z).zIndex, 10) || 0) >=
                        (parseInt(B(W).getComputedStyle(W).zIndex, 10) || 0) && (j = X));
                else j = X;
            } else j = X;
        }
        return j;
      })(u);
      return n.activeDrops[_] || null;
    }
    function Zt(t, e, r) {
      var n = t.dropState,
        o = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return (
        r.type === "dragstart" &&
          ((o.activate = new ze(n, r, "dropactivate")), (o.activate.target = null), (o.activate.dropzone = null)),
        r.type === "dragend" &&
          ((o.deactivate = new ze(n, r, "dropdeactivate")),
          (o.deactivate.target = null),
          (o.deactivate.dropzone = null)),
        n.rejected ||
          (n.cur.element !== n.prev.element &&
            (n.prev.dropzone &&
              ((o.leave = new ze(n, r, "dragleave")),
              (r.dragLeave = o.leave.target = n.prev.element),
              (r.prevDropzone = o.leave.dropzone = n.prev.dropzone)),
            n.cur.dropzone &&
              ((o.enter = new ze(n, r, "dragenter")), (r.dragEnter = n.cur.element), (r.dropzone = n.cur.dropzone))),
          r.type === "dragend" &&
            n.cur.dropzone &&
            ((o.drop = new ze(n, r, "drop")), (r.dropzone = n.cur.dropzone), (r.relatedTarget = n.cur.element)),
          r.type === "dragmove" &&
            n.cur.dropzone &&
            ((o.move = new ze(n, r, "dropmove")), (r.dropzone = n.cur.dropzone))),
        o
      );
    }
    function Jt(t, e) {
      var r = t.dropState,
        n = r.activeDrops,
        o = r.cur,
        l = r.prev;
      (e.leave && l.dropzone.fire(e.leave),
        e.enter && o.dropzone.fire(e.enter),
        e.move && o.dropzone.fire(e.move),
        e.drop && o.dropzone.fire(e.drop),
        e.deactivate && sn(n, e.deactivate),
        (r.prev.dropzone = o.dropzone),
        (r.prev.element = o.element));
    }
    function an(t, e) {
      var r = t.interaction,
        n = t.iEvent,
        o = t.event;
      if (n.type === "dragmove" || n.type === "dragend") {
        var l = r.dropState;
        e.dynamicDrop && (l.activeDrops = qt(e, r.element));
        var u = n,
          p = on(r, u, o);
        ((l.rejected = l.rejected && !!p && p.dropzone === l.cur.dropzone && p.element === l.cur.element),
          (l.cur.dropzone = p && p.dropzone),
          (l.cur.element = p && p.element),
          (l.events = Zt(r, 0, u)));
      }
    }
    var ln = {
        id: "actions/drop",
        install: function (t) {
          var e = t.actions,
            r = t.interactStatic,
            n = t.Interactable,
            o = t.defaults;
          (t.usePlugin(Nr),
            (n.prototype.dropzone = function (l) {
              return (function (u, p) {
                if (x.object(p)) {
                  if (((u.options.drop.enabled = p.enabled !== !1), p.listeners)) {
                    var h = Ee(p.listeners),
                      g = Object.keys(h).reduce(function (y, S) {
                        return (
                          (y[
                            /^(enter|leave)/.test(S)
                              ? "drag".concat(S)
                              : /^(activate|deactivate|move)/.test(S)
                                ? "drop".concat(S)
                                : S
                          ] = h[S]),
                          y
                        );
                      }, {}),
                      v = u.options.drop.listeners;
                    (v && u.off(v), u.on(g), (u.options.drop.listeners = g));
                  }
                  return (
                    x.func(p.ondrop) && u.on("drop", p.ondrop),
                    x.func(p.ondropactivate) && u.on("dropactivate", p.ondropactivate),
                    x.func(p.ondropdeactivate) && u.on("dropdeactivate", p.ondropdeactivate),
                    x.func(p.ondragenter) && u.on("dragenter", p.ondragenter),
                    x.func(p.ondragleave) && u.on("dragleave", p.ondragleave),
                    x.func(p.ondropmove) && u.on("dropmove", p.ondropmove),
                    /^(pointer|center)$/.test(p.overlap)
                      ? (u.options.drop.overlap = p.overlap)
                      : x.number(p.overlap) && (u.options.drop.overlap = Math.max(Math.min(1, p.overlap), 0)),
                    "accept" in p && (u.options.drop.accept = p.accept),
                    "checker" in p && (u.options.drop.checker = p.checker),
                    u
                  );
                }
                return x.bool(p) ? ((u.options.drop.enabled = p), u) : u.options.drop;
              })(this, l);
            }),
            (n.prototype.dropCheck = function (l, u, p, h, g, v) {
              return (function (y, S, M, _, R, j, z) {
                var W = !1;
                if (!(z = z || y.getRect(j)))
                  return !!y.options.drop.checker && y.options.drop.checker(S, M, W, y, j, _, R);
                var U = y.options.drop.overlap;
                if (U === "pointer") {
                  var X = Ge(_, R, "drag"),
                    F = Jr(S);
                  ((F.x += X.x), (F.y += X.y));
                  var G = F.x > z.left && F.x < z.right,
                    te = F.y > z.top && F.y < z.bottom;
                  W = G && te;
                }
                var J = _.getRect(R);
                if (J && U === "center") {
                  var ne = J.left + J.width / 2,
                    ce = J.top + J.height / 2;
                  W = ne >= z.left && ne <= z.right && ce >= z.top && ce <= z.bottom;
                }
                return (
                  J &&
                    x.number(U) &&
                    (W =
                      (Math.max(0, Math.min(z.right, J.right) - Math.max(z.left, J.left)) *
                        Math.max(0, Math.min(z.bottom, J.bottom) - Math.max(z.top, J.top))) /
                        (J.width * J.height) >=
                      U),
                  y.options.drop.checker && (W = y.options.drop.checker(S, M, W, y, j, _, R)),
                  W
                );
              })(this, l, u, p, h, g, v);
            }),
            (r.dynamicDrop = function (l) {
              return x.bool(l) ? ((t.dynamicDrop = l), r) : t.dynamicDrop;
            }),
            H(e.phaselessTypes, {
              dragenter: !0,
              dragleave: !0,
              dropactivate: !0,
              dropdeactivate: !0,
              dropmove: !0,
              drop: !0,
            }),
            (e.methodDict.drop = "dropzone"),
            (t.dynamicDrop = !1),
            (o.actions.drop = ln.defaults));
        },
        listeners: {
          "interactions:before-action-start": function (t) {
            var e = t.interaction;
            e.prepared.name === "drag" &&
              (e.dropState = {
                cur: { dropzone: null, element: null },
                prev: { dropzone: null, element: null },
                rejected: null,
                events: null,
                activeDrops: [],
              });
          },
          "interactions:after-action-start": function (t, e) {
            var r = t.interaction,
              n = (t.event, t.iEvent);
            if (r.prepared.name === "drag") {
              var o = r.dropState;
              ((o.activeDrops = []),
                (o.events = {}),
                (o.activeDrops = qt(e, r.element)),
                (o.events = Zt(r, 0, n)),
                o.events.activate &&
                  (sn(o.activeDrops, o.events.activate),
                  e.fire("actions/drop:start", { interaction: r, dragEvent: n })));
            }
          },
          "interactions:action-move": an,
          "interactions:after-action-move": function (t, e) {
            var r = t.interaction,
              n = t.iEvent;
            if (r.prepared.name === "drag") {
              var o = r.dropState;
              (Jt(r, o.events), e.fire("actions/drop:move", { interaction: r, dragEvent: n }), (o.events = {}));
            }
          },
          "interactions:action-end": function (t, e) {
            if (t.interaction.prepared.name === "drag") {
              var r = t.interaction,
                n = t.iEvent;
              (an(t, e), Jt(r, r.dropState.events), e.fire("actions/drop:end", { interaction: r, dragEvent: n }));
            }
          },
          "interactions:stop": function (t) {
            var e = t.interaction;
            if (e.prepared.name === "drag") {
              var r = e.dropState;
              r &&
                ((r.activeDrops = null),
                (r.events = null),
                (r.cur.dropzone = null),
                (r.cur.element = null),
                (r.prev.dropzone = null),
                (r.prev.element = null),
                (r.rejected = !1));
            }
          },
        },
        getActiveDrops: qt,
        getDrop: on,
        getDropEvents: Zt,
        fireDropEvents: Jt,
        filterEventType: function (t) {
          return t.search("drag") === 0 || t.search("drop") === 0;
        },
        defaults: { enabled: !1, accept: null, overlap: "pointer" },
      },
      ds = ln;
    function Qt(t) {
      var e = t.interaction,
        r = t.iEvent,
        n = t.phase;
      if (e.prepared.name === "gesture") {
        var o = e.pointers.map(function (g) {
            return g.pointer;
          }),
          l = n === "start",
          u = n === "end",
          p = e.interactable.options.deltaSource;
        if (((r.touches = [o[0], o[1]]), l))
          ((r.distance = Bt(o, p)),
            (r.box = Xt(o)),
            (r.scale = 1),
            (r.ds = 0),
            (r.angle = Vt(o, p)),
            (r.da = 0),
            (e.gesture.startDistance = r.distance),
            (e.gesture.startAngle = r.angle));
        else if (u || e.pointers.length < 2) {
          var h = e.prevEvent;
          ((r.distance = h.distance),
            (r.box = h.box),
            (r.scale = h.scale),
            (r.ds = 0),
            (r.angle = h.angle),
            (r.da = 0));
        } else
          ((r.distance = Bt(o, p)),
            (r.box = Xt(o)),
            (r.scale = r.distance / e.gesture.startDistance),
            (r.angle = Vt(o, p)),
            (r.ds = r.scale - e.gesture.scale),
            (r.da = r.angle - e.gesture.angle));
        ((e.gesture.distance = r.distance),
          (e.gesture.angle = r.angle),
          x.number(r.scale) && r.scale !== 1 / 0 && !isNaN(r.scale) && (e.gesture.scale = r.scale));
      }
    }
    var er = {
        id: "actions/gesture",
        before: ["actions/drag", "actions/resize"],
        install: function (t) {
          var e = t.actions,
            r = t.Interactable,
            n = t.defaults;
          ((r.prototype.gesturable = function (o) {
            return x.object(o)
              ? ((this.options.gesture.enabled = o.enabled !== !1),
                this.setPerAction("gesture", o),
                this.setOnEvents("gesture", o),
                this)
              : x.bool(o)
                ? ((this.options.gesture.enabled = o), this)
                : this.options.gesture;
          }),
            (e.map.gesture = er),
            (e.methodDict.gesture = "gesturable"),
            (n.actions.gesture = er.defaults));
        },
        listeners: {
          "interactions:action-start": Qt,
          "interactions:action-move": Qt,
          "interactions:action-end": Qt,
          "interactions:new": function (t) {
            t.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
          },
          "auto-start:check": function (t) {
            if (!(t.interaction.pointers.length < 2)) {
              var e = t.interactable.options.gesture;
              if (e && e.enabled) return ((t.action = { name: "gesture" }), !1);
            }
          },
        },
        defaults: {},
        getCursor: function () {
          return "";
        },
        filterEventType: function (t) {
          return t.search("gesture") === 0;
        },
      },
      fs = er;
    function vs(t, e, r, n, o, l, u) {
      if (!e) return !1;
      if (e === !0) {
        var p = x.number(l.width) ? l.width : l.right - l.left,
          h = x.number(l.height) ? l.height : l.bottom - l.top;
        if (
          ((u = Math.min(u, Math.abs((t === "left" || t === "right" ? p : h) / 2))),
          p < 0 && (t === "left" ? (t = "right") : t === "right" && (t = "left")),
          h < 0 && (t === "top" ? (t = "bottom") : t === "bottom" && (t = "top")),
          t === "left")
        ) {
          var g = p >= 0 ? l.left : l.right;
          return r.x < g + u;
        }
        if (t === "top") {
          var v = h >= 0 ? l.top : l.bottom;
          return r.y < v + u;
        }
        if (t === "right") return r.x > (p >= 0 ? l.right : l.left) - u;
        if (t === "bottom") return r.y > (h >= 0 ? l.bottom : l.top) - u;
      }
      return !!x.element(n) && (x.element(e) ? e === n : Nt(n, e, o));
    }
    function cn(t) {
      var e = t.iEvent,
        r = t.interaction;
      if (r.prepared.name === "resize" && r.resizeAxes) {
        var n = e;
        r.interactable.options.resize.square
          ? (r.resizeAxes === "y" ? (n.delta.x = n.delta.y) : (n.delta.y = n.delta.x), (n.axes = "xy"))
          : ((n.axes = r.resizeAxes), r.resizeAxes === "x" ? (n.delta.y = 0) : r.resizeAxes === "y" && (n.delta.x = 0));
      }
    }
    var he,
      Pe,
      de = {
        id: "actions/resize",
        before: ["actions/drag"],
        install: function (t) {
          var e = t.actions,
            r = t.browser,
            n = t.Interactable,
            o = t.defaults;
          ((de.cursors = (function (l) {
            return l.isIe9
              ? {
                  x: "e-resize",
                  y: "s-resize",
                  xy: "se-resize",
                  top: "n-resize",
                  left: "w-resize",
                  bottom: "s-resize",
                  right: "e-resize",
                  topleft: "se-resize",
                  bottomright: "se-resize",
                  topright: "ne-resize",
                  bottomleft: "ne-resize",
                }
              : {
                  x: "ew-resize",
                  y: "ns-resize",
                  xy: "nwse-resize",
                  top: "ns-resize",
                  left: "ew-resize",
                  bottom: "ns-resize",
                  right: "ew-resize",
                  topleft: "nwse-resize",
                  bottomright: "nwse-resize",
                  topright: "nesw-resize",
                  bottomleft: "nesw-resize",
                };
          })(r)),
            (de.defaultMargin = r.supportsTouch || r.supportsPointerEvent ? 20 : 10),
            (n.prototype.resizable = function (l) {
              return (function (u, p, h) {
                return x.object(p)
                  ? ((u.options.resize.enabled = p.enabled !== !1),
                    u.setPerAction("resize", p),
                    u.setOnEvents("resize", p),
                    x.string(p.axis) && /^x$|^y$|^xy$/.test(p.axis)
                      ? (u.options.resize.axis = p.axis)
                      : p.axis === null && (u.options.resize.axis = h.defaults.actions.resize.axis),
                    x.bool(p.preserveAspectRatio)
                      ? (u.options.resize.preserveAspectRatio = p.preserveAspectRatio)
                      : x.bool(p.square) && (u.options.resize.square = p.square),
                    u)
                  : x.bool(p)
                    ? ((u.options.resize.enabled = p), u)
                    : u.options.resize;
              })(this, l, t);
            }),
            (e.map.resize = de),
            (e.methodDict.resize = "resizable"),
            (o.actions.resize = de.defaults));
        },
        listeners: {
          "interactions:new": function (t) {
            t.interaction.resizeAxes = "xy";
          },
          "interactions:action-start": function (t) {
            ((function (e) {
              var r = e.iEvent,
                n = e.interaction;
              if (n.prepared.name === "resize" && n.prepared.edges) {
                var o = r,
                  l = n.rect;
                ((n._rects = {
                  start: H({}, l),
                  corrected: H({}, l),
                  previous: H({}, l),
                  delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 },
                }),
                  (o.edges = n.prepared.edges),
                  (o.rect = n._rects.corrected),
                  (o.deltaRect = n._rects.delta));
              }
            })(t),
              cn(t));
          },
          "interactions:action-move": function (t) {
            ((function (e) {
              var r = e.iEvent,
                n = e.interaction;
              if (n.prepared.name === "resize" && n.prepared.edges) {
                var o = r,
                  l = n.interactable.options.resize.invert,
                  u = l === "reposition" || l === "negate",
                  p = n.rect,
                  h = n._rects,
                  g = h.start,
                  v = h.corrected,
                  y = h.delta,
                  S = h.previous;
                if ((H(S, v), u)) {
                  if ((H(v, p), l === "reposition")) {
                    if (v.top > v.bottom) {
                      var M = v.top;
                      ((v.top = v.bottom), (v.bottom = M));
                    }
                    if (v.left > v.right) {
                      var _ = v.left;
                      ((v.left = v.right), (v.right = _));
                    }
                  }
                } else
                  ((v.top = Math.min(p.top, g.bottom)),
                    (v.bottom = Math.max(p.bottom, g.top)),
                    (v.left = Math.min(p.left, g.right)),
                    (v.right = Math.max(p.right, g.left)));
                for (var R in ((v.width = v.right - v.left), (v.height = v.bottom - v.top), v)) y[R] = v[R] - S[R];
                ((o.edges = n.prepared.edges), (o.rect = v), (o.deltaRect = y));
              }
            })(t),
              cn(t));
          },
          "interactions:action-end": function (t) {
            var e = t.iEvent,
              r = t.interaction;
            if (r.prepared.name === "resize" && r.prepared.edges) {
              var n = e;
              ((n.edges = r.prepared.edges), (n.rect = r._rects.corrected), (n.deltaRect = r._rects.delta));
            }
          },
          "auto-start:check": function (t) {
            var e = t.interaction,
              r = t.interactable,
              n = t.element,
              o = t.rect,
              l = t.buttons;
            if (o) {
              var u = H({}, e.coords.cur.page),
                p = r.options.resize;
              if (p && p.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || l & p.mouseButtons)) {
                if (x.object(p.edges)) {
                  var h = { left: !1, right: !1, top: !1, bottom: !1 };
                  for (var g in h)
                    h[g] = vs(g, p.edges[g], u, e._latestPointer.eventTarget, n, o, p.margin || de.defaultMargin);
                  ((h.left = h.left && !h.right),
                    (h.top = h.top && !h.bottom),
                    (h.left || h.right || h.top || h.bottom) && (t.action = { name: "resize", edges: h }));
                } else {
                  var v = p.axis !== "y" && u.x > o.right - de.defaultMargin,
                    y = p.axis !== "x" && u.y > o.bottom - de.defaultMargin;
                  (v || y) && (t.action = { name: "resize", axes: (v ? "x" : "") + (y ? "y" : "") });
                }
                return !t.action && void 0;
              }
            }
          },
        },
        defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" },
        cursors: null,
        getCursor: function (t) {
          var e = t.edges,
            r = t.axis,
            n = t.name,
            o = de.cursors,
            l = null;
          if (r) l = o[n + r];
          else if (e) {
            for (var u = "", p = 0, h = ["top", "bottom", "left", "right"]; p < h.length; p++) {
              var g = h[p];
              e[g] && (u += g);
            }
            l = o[u];
          }
          return l;
        },
        filterEventType: function (t) {
          return t.search("resize") === 0;
        },
        defaultMargin: null,
      },
      ms = de,
      gs = {
        id: "actions",
        install: function (t) {
          (t.usePlugin(fs), t.usePlugin(ms), t.usePlugin(Nr), t.usePlugin(ds));
        },
      },
      un = 0,
      ye = {
        request: function (t) {
          return he(t);
        },
        cancel: function (t) {
          return Pe(t);
        },
        init: function (t) {
          if (((he = t.requestAnimationFrame), (Pe = t.cancelAnimationFrame), !he))
            for (var e = ["ms", "moz", "webkit", "o"], r = 0; r < e.length; r++) {
              var n = e[r];
              ((he = t["".concat(n, "RequestAnimationFrame")]),
                (Pe = t["".concat(n, "CancelAnimationFrame")] || t["".concat(n, "CancelRequestAnimationFrame")]));
            }
          ((he = he && he.bind(t)),
            (Pe = Pe && Pe.bind(t)),
            he ||
              ((he = function (o) {
                var l = Date.now(),
                  u = Math.max(0, 16 - (l - un)),
                  p = t.setTimeout(function () {
                    o(l + u);
                  }, u);
                return ((un = l + u), p);
              }),
              (Pe = function (o) {
                return clearTimeout(o);
              })));
        },
      },
      N = {
        defaults: { enabled: !1, margin: 60, container: null, speed: 300 },
        now: Date.now,
        interaction: null,
        i: 0,
        x: 0,
        y: 0,
        isScrolling: !1,
        prevTime: 0,
        margin: 0,
        speed: 0,
        start: function (t) {
          ((N.isScrolling = !0),
            ye.cancel(N.i),
            (t.autoScroll = N),
            (N.interaction = t),
            (N.prevTime = N.now()),
            (N.i = ye.request(N.scroll)));
        },
        stop: function () {
          ((N.isScrolling = !1), N.interaction && (N.interaction.autoScroll = null), ye.cancel(N.i));
        },
        scroll: function () {
          var t = N.interaction,
            e = t.interactable,
            r = t.element,
            n = t.prepared.name,
            o = e.options[n].autoScroll,
            l = pn(o.container, e, r),
            u = N.now(),
            p = (u - N.prevTime) / 1e3,
            h = o.speed * p;
          if (h >= 1) {
            var g = { x: N.x * h, y: N.y * h };
            if (g.x || g.y) {
              var v = hn(l);
              x.window(l) ? l.scrollBy(g.x, g.y) : l && ((l.scrollLeft += g.x), (l.scrollTop += g.y));
              var y = hn(l),
                S = { x: y.x - v.x, y: y.y - v.y };
              (S.x || S.y) &&
                e.fire({ type: "autoscroll", target: r, interactable: e, delta: S, interaction: t, container: l });
            }
            N.prevTime = u;
          }
          N.isScrolling && (ye.cancel(N.i), (N.i = ye.request(N.scroll)));
        },
        check: function (t, e) {
          var r;
          return (r = t.options[e].autoScroll) == null ? void 0 : r.enabled;
        },
        onInteractionMove: function (t) {
          var e = t.interaction,
            r = t.pointer;
          if (e.interacting() && N.check(e.interactable, e.prepared.name))
            if (e.simulation) N.x = N.y = 0;
            else {
              var n,
                o,
                l,
                u,
                p = e.interactable,
                h = e.element,
                g = e.prepared.name,
                v = p.options[g].autoScroll,
                y = pn(v.container, p, h);
              if (x.window(y))
                ((u = r.clientX < N.margin),
                  (n = r.clientY < N.margin),
                  (o = r.clientX > y.innerWidth - N.margin),
                  (l = r.clientY > y.innerHeight - N.margin));
              else {
                var S = Ut(y);
                ((u = r.clientX < S.left + N.margin),
                  (n = r.clientY < S.top + N.margin),
                  (o = r.clientX > S.right - N.margin),
                  (l = r.clientY > S.bottom - N.margin));
              }
              ((N.x = o ? 1 : u ? -1 : 0),
                (N.y = l ? 1 : n ? -1 : 0),
                N.isScrolling || ((N.margin = v.margin), (N.speed = v.speed), N.start(e)));
            }
        },
      };
    function pn(t, e, r) {
      return (x.string(t) ? Br(t, e, r) : t) || B(r);
    }
    function hn(t) {
      return (x.window(t) && (t = window.document.body), { x: t.scrollLeft, y: t.scrollTop });
    }
    var bs = {
        id: "auto-scroll",
        install: function (t) {
          var e = t.defaults,
            r = t.actions;
          ((t.autoScroll = N),
            (N.now = function () {
              return t.now();
            }),
            (r.phaselessTypes.autoscroll = !0),
            (e.perAction.autoScroll = N.defaults));
        },
        listeners: {
          "interactions:new": function (t) {
            t.interaction.autoScroll = null;
          },
          "interactions:destroy": function (t) {
            ((t.interaction.autoScroll = null), N.stop(), N.interaction && (N.interaction = null));
          },
          "interactions:stop": N.stop,
          "interactions:action-move": function (t) {
            return N.onInteractionMove(t);
          },
        },
      },
      ys = bs;
    function Ve(t, e) {
      var r = !1;
      return function () {
        return (r || (L.console.warn(e), (r = !0)), t.apply(this, arguments));
      };
    }
    function tr(t, e) {
      return ((t.name = e.name), (t.axis = e.axis), (t.edges = e.edges), t);
    }
    function Ts(t) {
      return x.bool(t)
        ? ((this.options.styleCursor = t), this)
        : t === null
          ? (delete this.options.styleCursor, this)
          : this.options.styleCursor;
    }
    function ws(t) {
      return x.func(t)
        ? ((this.options.actionChecker = t), this)
        : t === null
          ? (delete this.options.actionChecker, this)
          : this.options.actionChecker;
    }
    var xs = {
      id: "auto-start/interactableMethods",
      install: function (t) {
        var e = t.Interactable;
        ((e.prototype.getAction = function (r, n, o, l) {
          var u = (function (p, h, g, v, y) {
            var S = p.getRect(v),
              M = h.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[h.button],
              _ = { action: null, interactable: p, interaction: g, element: v, rect: S, buttons: M };
            return (y.fire("auto-start:check", _), _.action);
          })(this, n, o, l, t);
          return this.options.actionChecker ? this.options.actionChecker(r, n, u, this, l, o) : u;
        }),
          (e.prototype.ignoreFrom = Ve(function (r) {
            return this._backCompatOption("ignoreFrom", r);
          }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).")),
          (e.prototype.allowFrom = Ve(function (r) {
            return this._backCompatOption("allowFrom", r);
          }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).")),
          (e.prototype.actionChecker = ws),
          (e.prototype.styleCursor = Ts));
      },
    };
    function dn(t, e, r, n, o) {
      return e.testIgnoreAllow(e.options[t.name], r, n) && e.options[t.name].enabled && pt(e, r, t, o) ? t : null;
    }
    function Ss(t, e, r, n, o, l, u) {
      for (var p = 0, h = n.length; p < h; p++) {
        var g = n[p],
          v = o[p],
          y = g.getAction(e, r, t, v);
        if (y) {
          var S = dn(y, g, v, l, u);
          if (S) return { action: S, interactable: g, element: v };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    function fn(t, e, r, n, o) {
      var l = [],
        u = [],
        p = n;
      function h(v) {
        (l.push(v), u.push(p));
      }
      for (; x.element(p); ) {
        ((l = []), (u = []), o.interactables.forEachMatch(p, h));
        var g = Ss(t, e, r, l, u, n, o);
        if (g.action && !g.interactable.options[g.action.name].manualStart) return g;
        p = pe(p);
      }
      return { action: null, interactable: null, element: null };
    }
    function vn(t, e, r) {
      var n = e.action,
        o = e.interactable,
        l = e.element;
      ((n = n || { name: null }),
        (t.interactable = o),
        (t.element = l),
        tr(t.prepared, n),
        (t.rect = o && n.name ? o.getRect(l) : null),
        gn(t, r),
        r.fire("autoStart:prepared", { interaction: t }));
    }
    function pt(t, e, r, n) {
      var o = t.options,
        l = o[r.name].max,
        u = o[r.name].maxPerElement,
        p = n.autoStart.maxInteractions,
        h = 0,
        g = 0,
        v = 0;
      if (!(l && u && p)) return !1;
      for (var y = 0, S = n.interactions.list; y < S.length; y++) {
        var M = S[y],
          _ = M.prepared.name;
        if (
          M.interacting() &&
          (++h >= p ||
            (M.interactable === t &&
              ((g += _ === r.name ? 1 : 0) >= l || (M.element === e && (v++, _ === r.name && v >= u)))))
        )
          return !1;
      }
      return p > 0;
    }
    function mn(t, e) {
      return x.number(t) ? ((e.autoStart.maxInteractions = t), this) : e.autoStart.maxInteractions;
    }
    function rr(t, e, r) {
      var n = r.autoStart.cursorElement;
      (n && n !== t && (n.style.cursor = ""),
        (t.ownerDocument.documentElement.style.cursor = e),
        (t.style.cursor = e),
        (r.autoStart.cursorElement = e ? t : null));
    }
    function gn(t, e) {
      var r = t.interactable,
        n = t.element,
        o = t.prepared;
      if (t.pointerType === "mouse" && r && r.options.styleCursor) {
        var l = "";
        if (o.name) {
          var u = r.options[o.name].cursorChecker;
          l = x.func(u) ? u(o, r, n, t._interacting) : e.actions.map[o.name].getCursor(o);
        }
        rr(t.element, l || "", e);
      } else e.autoStart.cursorElement && rr(e.autoStart.cursorElement, "", e);
    }
    var Os = {
        id: "auto-start/base",
        before: ["actions"],
        install: function (t) {
          var e = t.interactStatic,
            r = t.defaults;
          (t.usePlugin(xs),
            (r.base.actionChecker = null),
            (r.base.styleCursor = !0),
            H(r.perAction, {
              manualStart: !1,
              max: 1 / 0,
              maxPerElement: 1,
              allowFrom: null,
              ignoreFrom: null,
              mouseButtons: 1,
            }),
            (e.maxInteractions = function (n) {
              return mn(n, t);
            }),
            (t.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: pt, cursorElement: null }));
        },
        listeners: {
          "interactions:down": function (t, e) {
            var r = t.interaction,
              n = t.pointer,
              o = t.event,
              l = t.eventTarget;
            r.interacting() || vn(r, fn(r, n, o, l, e), e);
          },
          "interactions:move": function (t, e) {
            ((function (r, n) {
              var o = r.interaction,
                l = r.pointer,
                u = r.event,
                p = r.eventTarget;
              o.pointerType !== "mouse" || o.pointerIsDown || o.interacting() || vn(o, fn(o, l, u, p, n), n);
            })(t, e),
              (function (r, n) {
                var o = r.interaction;
                if (o.pointerIsDown && !o.interacting() && o.pointerWasMoved && o.prepared.name) {
                  n.fire("autoStart:before-start", r);
                  var l = o.interactable,
                    u = o.prepared.name;
                  u &&
                    l &&
                    (l.options[u].manualStart || !pt(l, o.element, o.prepared, n)
                      ? o.stop()
                      : (o.start(o.prepared, l, o.element), gn(o, n)));
                }
              })(t, e));
          },
          "interactions:stop": function (t, e) {
            var r = t.interaction,
              n = r.interactable;
            n && n.options.styleCursor && rr(r.element, "", e);
          },
        },
        maxInteractions: mn,
        withinInteractionLimit: pt,
        validateAction: dn,
      },
      nr = Os,
      Cs = {
        id: "auto-start/dragAxis",
        listeners: {
          "autoStart:before-start": function (t, e) {
            var r = t.interaction,
              n = t.eventTarget,
              o = t.dx,
              l = t.dy;
            if (r.prepared.name === "drag") {
              var u = Math.abs(o),
                p = Math.abs(l),
                h = r.interactable.options.drag,
                g = h.startAxis,
                v = u > p ? "x" : u < p ? "y" : "xy";
              if (
                ((r.prepared.axis = h.lockAxis === "start" ? v[0] : h.lockAxis), v !== "xy" && g !== "xy" && g !== v)
              ) {
                r.prepared.name = null;
                for (
                  var y = n,
                    S = function (_) {
                      if (_ !== r.interactable) {
                        var R = r.interactable.options.drag;
                        if (!R.manualStart && _.testIgnoreAllow(R, y, n)) {
                          var j = _.getAction(r.downPointer, r.downEvent, r, y);
                          if (
                            j &&
                            j.name === "drag" &&
                            (function (z, W) {
                              if (!W) return !1;
                              var U = W.options.drag.startAxis;
                              return z === "xy" || U === "xy" || U === z;
                            })(v, _) &&
                            nr.validateAction(j, _, y, n, e)
                          )
                            return _;
                        }
                      }
                    };
                  x.element(y);
                ) {
                  var M = e.interactables.forEachMatch(y, S);
                  if (M) {
                    ((r.prepared.name = "drag"), (r.interactable = M), (r.element = y));
                    break;
                  }
                  y = pe(y);
                }
              }
            }
          },
        },
      };
    function ir(t) {
      var e = t.prepared && t.prepared.name;
      if (!e) return null;
      var r = t.interactable.options;
      return r[e].hold || r[e].delay;
    }
    var Es = {
        id: "auto-start/hold",
        install: function (t) {
          var e = t.defaults;
          (t.usePlugin(nr), (e.perAction.hold = 0), (e.perAction.delay = 0));
        },
        listeners: {
          "interactions:new": function (t) {
            t.interaction.autoStartHoldTimer = null;
          },
          "autoStart:prepared": function (t) {
            var e = t.interaction,
              r = ir(e);
            r > 0 &&
              (e.autoStartHoldTimer = setTimeout(function () {
                e.start(e.prepared, e.interactable, e.element);
              }, r));
          },
          "interactions:move": function (t) {
            var e = t.interaction,
              r = t.duplicate;
            e.autoStartHoldTimer &&
              e.pointerWasMoved &&
              !r &&
              (clearTimeout(e.autoStartHoldTimer), (e.autoStartHoldTimer = null));
          },
          "autoStart:before-start": function (t) {
            var e = t.interaction;
            ir(e) > 0 && (e.prepared.name = null);
          },
        },
        getHoldDuration: ir,
      },
      Ps = Es,
      _s = {
        id: "auto-start",
        install: function (t) {
          (t.usePlugin(nr), t.usePlugin(Ps), t.usePlugin(Cs));
        },
      },
      Is = function (t) {
        return /^(always|never|auto)$/.test(t)
          ? ((this.options.preventDefault = t), this)
          : x.bool(t)
            ? ((this.options.preventDefault = t ? "always" : "never"), this)
            : this.options.preventDefault;
      };
    function Ms(t) {
      var e = t.interaction,
        r = t.event;
      e.interactable && e.interactable.checkAndPreventDefault(r);
    }
    var bn = {
      id: "core/interactablePreventDefault",
      install: function (t) {
        var e = t.Interactable;
        ((e.prototype.preventDefault = Is),
          (e.prototype.checkAndPreventDefault = function (r) {
            return (function (n, o, l) {
              var u = n.options.preventDefault;
              if (u !== "never")
                if (u !== "always") {
                  if (o.events.supportsPassive && /^touch(start|move)$/.test(l.type)) {
                    var p = B(l.target).document,
                      h = o.getDocOptions(p);
                    if (!h || !h.events || h.events.passive !== !1) return;
                  }
                  /^(mouse|pointer|touch)*(down|start)/i.test(l.type) ||
                    (x.element(l.target) &&
                      be(l.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *")) ||
                    l.preventDefault();
                } else l.preventDefault();
            })(this, t, r);
          }),
          t.interactions.docEvents.push({
            type: "dragstart",
            listener: function (r) {
              for (var n = 0, o = t.interactions.list; n < o.length; n++) {
                var l = o[n];
                if (l.element && (l.element === r.target || Ce(l.element, r.target)))
                  return void l.interactable.checkAndPreventDefault(r);
              }
            },
          }));
      },
      listeners: ["down", "move", "up", "cancel"].reduce(function (t, e) {
        return ((t["interactions:".concat(e)] = Ms), t);
      }, {}),
    };
    function ht(t, e) {
      if (e.phaselessTypes[t]) return !0;
      for (var r in e.map) if (t.indexOf(r) === 0 && t.substr(r.length) in e.phases) return !0;
      return !1;
    }
    function De(t) {
      var e = {};
      for (var r in t) {
        var n = t[r];
        x.plainObject(n) ? (e[r] = De(n)) : x.array(n) ? (e[r] = nn(n)) : (e[r] = n);
      }
      return e;
    }
    var sr = (function () {
      function t(e) {
        (d(this, t),
          (this.states = []),
          (this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }),
          (this.startDelta = void 0),
          (this.result = void 0),
          (this.endResult = void 0),
          (this.startEdges = void 0),
          (this.edges = void 0),
          (this.interaction = void 0),
          (this.interaction = e),
          (this.result = dt()),
          (this.edges = { left: !1, right: !1, top: !1, bottom: !1 }));
      }
      return (
        b(t, [
          {
            key: "start",
            value: function (e, r) {
              var n,
                o,
                l = e.phase,
                u = this.interaction,
                p = (function (g) {
                  var v = g.interactable.options[g.prepared.name],
                    y = v.modifiers;
                  return y && y.length
                    ? y
                    : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"]
                        .map(function (S) {
                          var M = v[S];
                          return M && M.enabled && { options: M, methods: M._methods };
                        })
                        .filter(function (S) {
                          return !!S;
                        });
                })(u);
              (this.prepareStates(p),
                (this.startEdges = H({}, u.edges)),
                (this.edges = H({}, this.startEdges)),
                (this.startOffset =
                  ((n = u.rect),
                  (o = r),
                  n
                    ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y }
                    : { left: 0, top: 0, right: 0, bottom: 0 })),
                (this.startDelta = { x: 0, y: 0 }));
              var h = this.fillArg({ phase: l, pageCoords: r, preEnd: !1 });
              return ((this.result = dt()), this.startAll(h), (this.result = this.setAll(h)));
            },
          },
          {
            key: "fillArg",
            value: function (e) {
              var r = this.interaction;
              return (
                (e.interaction = r),
                (e.interactable = r.interactable),
                (e.element = r.element),
                e.rect || (e.rect = r.rect),
                e.edges || (e.edges = this.startEdges),
                (e.startOffset = this.startOffset),
                e
              );
            },
          },
          {
            key: "startAll",
            value: function (e) {
              for (var r = 0, n = this.states; r < n.length; r++) {
                var o = n[r];
                o.methods.start && ((e.state = o), o.methods.start(e));
              }
            },
          },
          {
            key: "setAll",
            value: function (e) {
              var r = e.phase,
                n = e.preEnd,
                o = e.skipModifiers,
                l = e.rect,
                u = e.edges;
              ((e.coords = H({}, e.pageCoords)), (e.rect = H({}, l)), (e.edges = H({}, u)));
              for (var p = o ? this.states.slice(o) : this.states, h = dt(e.coords, e.rect), g = 0; g < p.length; g++) {
                var v,
                  y = p[g],
                  S = y.options,
                  M = H({}, e.coords),
                  _ = null;
                ((v = y.methods) != null &&
                  v.set &&
                  this.shouldDo(S, n, r) &&
                  ((e.state = y),
                  (_ = y.methods.set(e)),
                  ot(e.edges, e.rect, { x: e.coords.x - M.x, y: e.coords.y - M.y })),
                  h.eventProps.push(_));
              }
              (H(this.edges, e.edges),
                (h.delta.x = e.coords.x - e.pageCoords.x),
                (h.delta.y = e.coords.y - e.pageCoords.y),
                (h.rectDelta.left = e.rect.left - l.left),
                (h.rectDelta.right = e.rect.right - l.right),
                (h.rectDelta.top = e.rect.top - l.top),
                (h.rectDelta.bottom = e.rect.bottom - l.bottom));
              var R = this.result.coords,
                j = this.result.rect;
              if (R && j) {
                var z =
                  h.rect.left !== j.left ||
                  h.rect.right !== j.right ||
                  h.rect.top !== j.top ||
                  h.rect.bottom !== j.bottom;
                h.changed = z || R.x !== h.coords.x || R.y !== h.coords.y;
              }
              return h;
            },
          },
          {
            key: "applyToInteraction",
            value: function (e) {
              var r = this.interaction,
                n = e.phase,
                o = r.coords.cur,
                l = r.coords.start,
                u = this.result,
                p = this.startDelta,
                h = u.delta;
              n === "start" && H(this.startDelta, u.delta);
              for (
                var g = 0,
                  v = [
                    [l, p],
                    [o, h],
                  ];
                g < v.length;
                g++
              ) {
                var y = v[g],
                  S = y[0],
                  M = y[1];
                ((S.page.x += M.x), (S.page.y += M.y), (S.client.x += M.x), (S.client.y += M.y));
              }
              var _ = this.result.rectDelta,
                R = e.rect || r.rect;
              ((R.left += _.left),
                (R.right += _.right),
                (R.top += _.top),
                (R.bottom += _.bottom),
                (R.width = R.right - R.left),
                (R.height = R.bottom - R.top));
            },
          },
          {
            key: "setAndApply",
            value: function (e) {
              var r = this.interaction,
                n = e.phase,
                o = e.preEnd,
                l = e.skipModifiers,
                u = this.setAll(
                  this.fillArg({ preEnd: o, phase: n, pageCoords: e.modifiedCoords || r.coords.cur.page })
                );
              if (((this.result = u), !u.changed && (!l || l < this.states.length) && r.interacting())) return !1;
              if (e.modifiedCoords) {
                var p = r.coords.cur.page,
                  h = { x: e.modifiedCoords.x - p.x, y: e.modifiedCoords.y - p.y };
                ((u.coords.x += h.x), (u.coords.y += h.y), (u.delta.x += h.x), (u.delta.y += h.y));
              }
              this.applyToInteraction(e);
            },
          },
          {
            key: "beforeEnd",
            value: function (e) {
              var r = e.interaction,
                n = e.event,
                o = this.states;
              if (o && o.length) {
                for (var l = !1, u = 0; u < o.length; u++) {
                  var p = o[u];
                  e.state = p;
                  var h = p.options,
                    g = p.methods,
                    v = g.beforeEnd && g.beforeEnd(e);
                  if (v) return ((this.endResult = v), !1);
                  l = l || (!l && this.shouldDo(h, !0, e.phase, !0));
                }
                l && r.move({ event: n, preEnd: !0 });
              }
            },
          },
          {
            key: "stop",
            value: function (e) {
              var r = e.interaction;
              if (this.states && this.states.length) {
                var n = H({ states: this.states, interactable: r.interactable, element: r.element, rect: null }, e);
                this.fillArg(n);
                for (var o = 0, l = this.states; o < l.length; o++) {
                  var u = l[o];
                  ((n.state = u), u.methods.stop && u.methods.stop(n));
                }
                ((this.states = null), (this.endResult = null));
              }
            },
          },
          {
            key: "prepareStates",
            value: function (e) {
              this.states = [];
              for (var r = 0; r < e.length; r++) {
                var n = e[r],
                  o = n.options,
                  l = n.methods,
                  u = n.name;
                this.states.push({ options: o, methods: l, index: r, name: u });
              }
              return this.states;
            },
          },
          {
            key: "restoreInteractionCoords",
            value: function (e) {
              var r = e.interaction,
                n = r.coords,
                o = r.rect,
                l = r.modification;
              if (l.result) {
                for (
                  var u = l.startDelta,
                    p = l.result,
                    h = p.delta,
                    g = p.rectDelta,
                    v = 0,
                    y = [
                      [n.start, u],
                      [n.cur, h],
                    ];
                  v < y.length;
                  v++
                ) {
                  var S = y[v],
                    M = S[0],
                    _ = S[1];
                  ((M.page.x -= _.x), (M.page.y -= _.y), (M.client.x -= _.x), (M.client.y -= _.y));
                }
                ((o.left -= g.left), (o.right -= g.right), (o.top -= g.top), (o.bottom -= g.bottom));
              }
            },
          },
          {
            key: "shouldDo",
            value: function (e, r, n, o) {
              return !(
                !e ||
                e.enabled === !1 ||
                (o && !e.endOnly) ||
                (e.endOnly && !r) ||
                (n === "start" && !e.setStart)
              );
            },
          },
          {
            key: "copyFrom",
            value: function (e) {
              ((this.startOffset = e.startOffset),
                (this.startDelta = e.startDelta),
                (this.startEdges = e.startEdges),
                (this.edges = e.edges),
                (this.states = e.states.map(function (r) {
                  return De(r);
                })),
                (this.result = dt(H({}, e.result.coords), H({}, e.result.rect))));
            },
          },
          {
            key: "destroy",
            value: function () {
              for (var e in this) this[e] = null;
            },
          },
        ]),
        t
      );
    })();
    function dt(t, e) {
      return {
        rect: e,
        coords: t,
        delta: { x: 0, y: 0 },
        rectDelta: { left: 0, right: 0, top: 0, bottom: 0 },
        eventProps: [],
        changed: !0,
      };
    }
    function Te(t, e) {
      var r = t.defaults,
        n = { start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop },
        o = function (l) {
          var u = l || {};
          for (var p in ((u.enabled = u.enabled !== !1), r)) p in u || (u[p] = r[p]);
          var h = {
            options: u,
            methods: n,
            name: e,
            enable: function () {
              return ((u.enabled = !0), h);
            },
            disable: function () {
              return ((u.enabled = !1), h);
            },
          };
          return h;
        };
      return (e && typeof e == "string" && ((o._defaults = r), (o._methods = n)), o);
    }
    function qe(t) {
      var e = t.iEvent,
        r = t.interaction.modification.result;
      r && (e.modifiers = r.eventProps);
    }
    var Rs = {
        id: "modifiers/base",
        before: ["actions"],
        install: function (t) {
          t.defaults.perAction.modifiers = [];
        },
        listeners: {
          "interactions:new": function (t) {
            var e = t.interaction;
            e.modification = new sr(e);
          },
          "interactions:before-action-start": function (t) {
            var e = t.interaction,
              r = t.interaction.modification;
            (r.start(t, e.coords.start.page), (e.edges = r.edges), r.applyToInteraction(t));
          },
          "interactions:before-action-move": function (t) {
            var e = t.interaction,
              r = e.modification,
              n = r.setAndApply(t);
            return ((e.edges = r.edges), n);
          },
          "interactions:before-action-end": function (t) {
            var e = t.interaction,
              r = e.modification,
              n = r.beforeEnd(t);
            return ((e.edges = r.startEdges), n);
          },
          "interactions:action-start": qe,
          "interactions:action-move": qe,
          "interactions:action-end": qe,
          "interactions:after-action-start": function (t) {
            return t.interaction.modification.restoreInteractionCoords(t);
          },
          "interactions:after-action-move": function (t) {
            return t.interaction.modification.restoreInteractionCoords(t);
          },
          "interactions:stop": function (t) {
            return t.interaction.modification.stop(t);
          },
        },
      },
      yn = Rs,
      Tn = {
        base: { preventDefault: "auto", deltaSource: "page" },
        perAction: { enabled: !1, origin: { x: 0, y: 0 } },
        actions: {},
      },
      or = (function (t) {
        O(r, t);
        var e = E(r);
        function r(n, o, l, u, p, h, g) {
          var v;
          (d(this, r),
            ((v = e.call(this, n)).relatedTarget = null),
            (v.screenX = void 0),
            (v.screenY = void 0),
            (v.button = void 0),
            (v.buttons = void 0),
            (v.ctrlKey = void 0),
            (v.shiftKey = void 0),
            (v.altKey = void 0),
            (v.metaKey = void 0),
            (v.page = void 0),
            (v.client = void 0),
            (v.delta = void 0),
            (v.rect = void 0),
            (v.x0 = void 0),
            (v.y0 = void 0),
            (v.t0 = void 0),
            (v.dt = void 0),
            (v.duration = void 0),
            (v.clientX0 = void 0),
            (v.clientY0 = void 0),
            (v.velocity = void 0),
            (v.speed = void 0),
            (v.swipe = void 0),
            (v.axes = void 0),
            (v.preEnd = void 0),
            (p = p || n.element));
          var y = n.interactable,
            S = ((y && y.options) || Tn).deltaSource,
            M = Ge(y, p, l),
            _ = u === "start",
            R = u === "end",
            j = _ ? T(v) : n.prevEvent,
            z = _
              ? n.coords.start
              : R
                ? { page: j.page, client: j.client, timeStamp: n.coords.cur.timeStamp }
                : n.coords.cur;
          return (
            (v.page = H({}, z.page)),
            (v.client = H({}, z.client)),
            (v.rect = H({}, n.rect)),
            (v.timeStamp = z.timeStamp),
            R || ((v.page.x -= M.x), (v.page.y -= M.y), (v.client.x -= M.x), (v.client.y -= M.y)),
            (v.ctrlKey = o.ctrlKey),
            (v.altKey = o.altKey),
            (v.shiftKey = o.shiftKey),
            (v.metaKey = o.metaKey),
            (v.button = o.button),
            (v.buttons = o.buttons),
            (v.target = p),
            (v.currentTarget = p),
            (v.preEnd = h),
            (v.type = g || l + (u || "")),
            (v.interactable = y),
            (v.t0 = _ ? n.pointers[n.pointers.length - 1].downTime : j.t0),
            (v.x0 = n.coords.start.page.x - M.x),
            (v.y0 = n.coords.start.page.y - M.y),
            (v.clientX0 = n.coords.start.client.x - M.x),
            (v.clientY0 = n.coords.start.client.y - M.y),
            (v.delta = _ || R ? { x: 0, y: 0 } : { x: v[S].x - j[S].x, y: v[S].y - j[S].y }),
            (v.dt = n.coords.delta.timeStamp),
            (v.duration = v.timeStamp - v.t0),
            (v.velocity = H({}, n.coords.velocity[S])),
            (v.speed = Ye(v.velocity.x, v.velocity.y)),
            (v.swipe = R || u === "inertiastart" ? v.getSwipe() : null),
            v
          );
        }
        return (
          b(r, [
            {
              key: "getSwipe",
              value: function () {
                var n = this._interaction;
                if (n.prevEvent.speed < 600 || this.timeStamp - n.prevEvent.timeStamp > 150) return null;
                var o = (180 * Math.atan2(n.prevEvent.velocityY, n.prevEvent.velocityX)) / Math.PI;
                o < 0 && (o += 360);
                var l = 112.5 <= o && o < 247.5,
                  u = 202.5 <= o && o < 337.5;
                return {
                  up: u,
                  down: !u && 22.5 <= o && o < 157.5,
                  left: l,
                  right: !l && (292.5 <= o || o < 67.5),
                  angle: o,
                  speed: n.prevEvent.speed,
                  velocity: { x: n.prevEvent.velocityX, y: n.prevEvent.velocityY },
                };
              },
            },
            { key: "preventDefault", value: function () {} },
            {
              key: "stopImmediatePropagation",
              value: function () {
                this.immediatePropagationStopped = this.propagationStopped = !0;
              },
            },
            {
              key: "stopPropagation",
              value: function () {
                this.propagationStopped = !0;
              },
            },
          ]),
          r
        );
      })(ut);
    Object.defineProperties(or.prototype, {
      pageX: {
        get: function () {
          return this.page.x;
        },
        set: function (t) {
          this.page.x = t;
        },
      },
      pageY: {
        get: function () {
          return this.page.y;
        },
        set: function (t) {
          this.page.y = t;
        },
      },
      clientX: {
        get: function () {
          return this.client.x;
        },
        set: function (t) {
          this.client.x = t;
        },
      },
      clientY: {
        get: function () {
          return this.client.y;
        },
        set: function (t) {
          this.client.y = t;
        },
      },
      dx: {
        get: function () {
          return this.delta.x;
        },
        set: function (t) {
          this.delta.x = t;
        },
      },
      dy: {
        get: function () {
          return this.delta.y;
        },
        set: function (t) {
          this.delta.y = t;
        },
      },
      velocityX: {
        get: function () {
          return this.velocity.x;
        },
        set: function (t) {
          this.velocity.x = t;
        },
      },
      velocityY: {
        get: function () {
          return this.velocity.y;
        },
        set: function (t) {
          this.velocity.y = t;
        },
      },
    });
    var ks = b(function t(e, r, n, o, l) {
        (d(this, t),
          (this.id = void 0),
          (this.pointer = void 0),
          (this.event = void 0),
          (this.downTime = void 0),
          (this.downTarget = void 0),
          (this.id = e),
          (this.pointer = r),
          (this.event = n),
          (this.downTime = o),
          (this.downTarget = l));
      }),
      zs = (function (t) {
        return (
          (t.interactable = ""),
          (t.element = ""),
          (t.prepared = ""),
          (t.pointerIsDown = ""),
          (t.pointerWasMoved = ""),
          (t._proxy = ""),
          t
        );
      })({}),
      wn = (function (t) {
        return ((t.start = ""), (t.move = ""), (t.end = ""), (t.stop = ""), (t.interacting = ""), t);
      })({}),
      Ds = 0,
      $s = (function () {
        function t(e) {
          var r = this,
            n = e.pointerType,
            o = e.scopeFire;
          (d(this, t),
            (this.interactable = null),
            (this.element = null),
            (this.rect = null),
            (this._rects = void 0),
            (this.edges = null),
            (this._scopeFire = void 0),
            (this.prepared = { name: null, axis: null, edges: null }),
            (this.pointerType = void 0),
            (this.pointers = []),
            (this.downEvent = null),
            (this.downPointer = {}),
            (this._latestPointer = { pointer: null, event: null, eventTarget: null }),
            (this.prevEvent = null),
            (this.pointerIsDown = !1),
            (this.pointerWasMoved = !1),
            (this._interacting = !1),
            (this._ending = !1),
            (this._stopped = !0),
            (this._proxy = void 0),
            (this.simulation = null),
            (this.doMove = Ve(function (v) {
              this.move(v);
            }, "The interaction.doMove() method has been renamed to interaction.move()")),
            (this.coords = {
              start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 },
              prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 },
              cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 },
              delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 },
              velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 },
            }),
            (this._id = Ds++),
            (this._scopeFire = o),
            (this.pointerType = n));
          var l = this;
          this._proxy = {};
          var u = function (v) {
            Object.defineProperty(r._proxy, v, {
              get: function () {
                return l[v];
              },
            });
          };
          for (var p in zs) u(p);
          var h = function (v) {
            Object.defineProperty(r._proxy, v, {
              value: function () {
                return l[v].apply(l, arguments);
              },
            });
          };
          for (var g in wn) h(g);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return (
          b(t, [
            {
              key: "pointerMoveTolerance",
              get: function () {
                return 1;
              },
            },
            {
              key: "pointerDown",
              value: function (e, r, n) {
                var o = this.updatePointer(e, r, n, !0),
                  l = this.pointers[o];
                this._scopeFire("interactions:down", {
                  pointer: e,
                  event: r,
                  eventTarget: n,
                  pointerIndex: o,
                  pointerInfo: l,
                  type: "down",
                  interaction: this,
                });
              },
            },
            {
              key: "start",
              value: function (e, r, n) {
                return (
                  !(
                    this.interacting() ||
                    !this.pointerIsDown ||
                    this.pointers.length < (e.name === "gesture" ? 2 : 1) ||
                    !r.options[e.name].enabled
                  ) &&
                  (tr(this.prepared, e),
                  (this.interactable = r),
                  (this.element = n),
                  (this.rect = r.getRect(n)),
                  (this.edges = this.prepared.edges
                    ? H({}, this.prepared.edges)
                    : { left: !0, right: !0, top: !0, bottom: !0 }),
                  (this._stopped = !1),
                  (this._interacting =
                    this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped),
                  this._interacting)
                );
              },
            },
            {
              key: "pointerMove",
              value: function (e, r, n) {
                this.simulation ||
                  (this.modification && this.modification.endResult) ||
                  this.updatePointer(e, r, n, !1);
                var o,
                  l,
                  u =
                    this.coords.cur.page.x === this.coords.prev.page.x &&
                    this.coords.cur.page.y === this.coords.prev.page.y &&
                    this.coords.cur.client.x === this.coords.prev.client.x &&
                    this.coords.cur.client.y === this.coords.prev.client.y;
                this.pointerIsDown &&
                  !this.pointerWasMoved &&
                  ((o = this.coords.cur.client.x - this.coords.start.client.x),
                  (l = this.coords.cur.client.y - this.coords.start.client.y),
                  (this.pointerWasMoved = Ye(o, l) > this.pointerMoveTolerance));
                var p,
                  h,
                  g,
                  v = this.getPointerIndex(e),
                  y = {
                    pointer: e,
                    pointerIndex: v,
                    pointerInfo: this.pointers[v],
                    event: r,
                    type: "move",
                    eventTarget: n,
                    dx: o,
                    dy: l,
                    duplicate: u,
                    interaction: this,
                  };
                (u ||
                  ((p = this.coords.velocity),
                  (h = this.coords.delta),
                  (g = Math.max(h.timeStamp / 1e3, 1e-3)),
                  (p.page.x = h.page.x / g),
                  (p.page.y = h.page.y / g),
                  (p.client.x = h.client.x / g),
                  (p.client.y = h.client.y / g),
                  (p.timeStamp = g)),
                  this._scopeFire("interactions:move", y),
                  u ||
                    this.simulation ||
                    (this.interacting() && ((y.type = null), this.move(y)),
                    this.pointerWasMoved && lt(this.coords.prev, this.coords.cur)));
              },
            },
            {
              key: "move",
              value: function (e) {
                ((e && e.event) || qr(this.coords.delta),
                  ((e = H(
                    {
                      pointer: this._latestPointer.pointer,
                      event: this._latestPointer.event,
                      eventTarget: this._latestPointer.eventTarget,
                      interaction: this,
                    },
                    e || {}
                  )).phase = "move"),
                  this._doPhase(e));
              },
            },
            {
              key: "pointerUp",
              value: function (e, r, n, o) {
                var l = this.getPointerIndex(e);
                l === -1 && (l = this.updatePointer(e, r, n, !1));
                var u = /cancel$/i.test(r.type) ? "cancel" : "up";
                (this._scopeFire("interactions:".concat(u), {
                  pointer: e,
                  pointerIndex: l,
                  pointerInfo: this.pointers[l],
                  event: r,
                  eventTarget: n,
                  type: u,
                  curEventTarget: o,
                  interaction: this,
                }),
                  this.simulation || this.end(r),
                  this.removePointer(e, r));
              },
            },
            {
              key: "documentBlur",
              value: function (e) {
                (this.end(e), this._scopeFire("interactions:blur", { event: e, type: "blur", interaction: this }));
              },
            },
            {
              key: "end",
              value: function (e) {
                var r;
                ((this._ending = !0),
                  (e = e || this._latestPointer.event),
                  this.interacting() && (r = this._doPhase({ event: e, interaction: this, phase: "end" })),
                  (this._ending = !1),
                  r === !0 && this.stop());
              },
            },
            {
              key: "currentAction",
              value: function () {
                return this._interacting ? this.prepared.name : null;
              },
            },
            {
              key: "interacting",
              value: function () {
                return this._interacting;
              },
            },
            {
              key: "stop",
              value: function () {
                (this._scopeFire("interactions:stop", { interaction: this }),
                  (this.interactable = this.element = null),
                  (this._interacting = !1),
                  (this._stopped = !0),
                  (this.prepared.name = this.prevEvent = null));
              },
            },
            {
              key: "getPointerIndex",
              value: function (e) {
                var r = Ke(e);
                return this.pointerType === "mouse" || this.pointerType === "pen"
                  ? this.pointers.length - 1
                  : Xe(this.pointers, function (n) {
                      return n.id === r;
                    });
              },
            },
            {
              key: "getPointerInfo",
              value: function (e) {
                return this.pointers[this.getPointerIndex(e)];
              },
            },
            {
              key: "updatePointer",
              value: function (e, r, n, o) {
                var l,
                  u,
                  p,
                  h = Ke(e),
                  g = this.getPointerIndex(e),
                  v = this.pointers[g];
                return (
                  (o = o !== !1 && (o || /(down|start)$/i.test(r.type))),
                  v
                    ? (v.pointer = e)
                    : ((v = new ks(h, e, r, null, null)), (g = this.pointers.length), this.pointers.push(v)),
                  hs(
                    this.coords.cur,
                    this.pointers.map(function (y) {
                      return y.pointer;
                    }),
                    this._now()
                  ),
                  (l = this.coords.delta),
                  (u = this.coords.prev),
                  (p = this.coords.cur),
                  (l.page.x = p.page.x - u.page.x),
                  (l.page.y = p.page.y - u.page.y),
                  (l.client.x = p.client.x - u.client.x),
                  (l.client.y = p.client.y - u.client.y),
                  (l.timeStamp = p.timeStamp - u.timeStamp),
                  o &&
                    ((this.pointerIsDown = !0),
                    (v.downTime = this.coords.cur.timeStamp),
                    (v.downTarget = n),
                    at(this.downPointer, e),
                    this.interacting() ||
                      (lt(this.coords.start, this.coords.cur),
                      lt(this.coords.prev, this.coords.cur),
                      (this.downEvent = r),
                      (this.pointerWasMoved = !1))),
                  this._updateLatestPointer(e, r, n),
                  this._scopeFire("interactions:update-pointer", {
                    pointer: e,
                    event: r,
                    eventTarget: n,
                    down: o,
                    pointerInfo: v,
                    pointerIndex: g,
                    interaction: this,
                  }),
                  g
                );
              },
            },
            {
              key: "removePointer",
              value: function (e, r) {
                var n = this.getPointerIndex(e);
                if (n !== -1) {
                  var o = this.pointers[n];
                  (this._scopeFire("interactions:remove-pointer", {
                    pointer: e,
                    event: r,
                    eventTarget: null,
                    pointerIndex: n,
                    pointerInfo: o,
                    interaction: this,
                  }),
                    this.pointers.splice(n, 1),
                    (this.pointerIsDown = !1));
                }
              },
            },
            {
              key: "_updateLatestPointer",
              value: function (e, r, n) {
                ((this._latestPointer.pointer = e),
                  (this._latestPointer.event = r),
                  (this._latestPointer.eventTarget = n));
              },
            },
            {
              key: "destroy",
              value: function () {
                ((this._latestPointer.pointer = null),
                  (this._latestPointer.event = null),
                  (this._latestPointer.eventTarget = null));
              },
            },
            {
              key: "_createPreparedEvent",
              value: function (e, r, n, o) {
                return new or(this, e, this.prepared.name, r, this.element, n, o);
              },
            },
            {
              key: "_fireEvent",
              value: function (e) {
                var r;
                ((r = this.interactable) == null || r.fire(e),
                  (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e));
              },
            },
            {
              key: "_doPhase",
              value: function (e) {
                var r = e.event,
                  n = e.phase,
                  o = e.preEnd,
                  l = e.type,
                  u = this.rect;
                if (
                  (u &&
                    n === "move" &&
                    (ot(this.edges, u, this.coords.delta[this.interactable.options.deltaSource]),
                    (u.width = u.right - u.left),
                    (u.height = u.bottom - u.top)),
                  this._scopeFire("interactions:before-action-".concat(n), e) === !1)
                )
                  return !1;
                var p = (e.iEvent = this._createPreparedEvent(r, n, o, l));
                return (
                  this._scopeFire("interactions:action-".concat(n), e),
                  n === "start" && (this.prevEvent = p),
                  this._fireEvent(p),
                  this._scopeFire("interactions:after-action-".concat(n), e),
                  !0
                );
              },
            },
            {
              key: "_now",
              value: function () {
                return Date.now();
              },
            },
          ]),
          t
        );
      })();
    function xn(t) {
      Sn(t.interaction);
    }
    function Sn(t) {
      if (
        !(function (r) {
          return !(!r.offset.pending.x && !r.offset.pending.y);
        })(t)
      )
        return !1;
      var e = t.offset.pending;
      return (ar(t.coords.cur, e), ar(t.coords.delta, e), ot(t.edges, t.rect, e), (e.x = 0), (e.y = 0), !0);
    }
    function js(t) {
      var e = t.x,
        r = t.y;
      ((this.offset.pending.x += e),
        (this.offset.pending.y += r),
        (this.offset.total.x += e),
        (this.offset.total.y += r));
    }
    function ar(t, e) {
      var r = t.page,
        n = t.client,
        o = e.x,
        l = e.y;
      ((r.x += o), (r.y += l), (n.x += o), (n.y += l));
    }
    wn.offsetBy = "";
    var As = {
        id: "offset",
        before: ["modifiers", "pointer-events", "actions", "inertia"],
        install: function (t) {
          t.Interaction.prototype.offsetBy = js;
        },
        listeners: {
          "interactions:new": function (t) {
            t.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
          },
          "interactions:update-pointer": function (t) {
            return (function (e) {
              e.pointerIsDown && (ar(e.coords.cur, e.offset.total), (e.offset.pending.x = 0), (e.offset.pending.y = 0));
            })(t.interaction);
          },
          "interactions:before-action-start": xn,
          "interactions:before-action-move": xn,
          "interactions:before-action-end": function (t) {
            var e = t.interaction;
            if (Sn(e)) return (e.move({ offset: !0 }), e.end(), !1);
          },
          "interactions:stop": function (t) {
            var e = t.interaction;
            ((e.offset.total.x = 0), (e.offset.total.y = 0), (e.offset.pending.x = 0), (e.offset.pending.y = 0));
          },
        },
      },
      On = As,
      Ls = (function () {
        function t(e) {
          (d(this, t),
            (this.active = !1),
            (this.isModified = !1),
            (this.smoothEnd = !1),
            (this.allowResume = !1),
            (this.modification = void 0),
            (this.modifierCount = 0),
            (this.modifierArg = void 0),
            (this.startCoords = void 0),
            (this.t0 = 0),
            (this.v0 = 0),
            (this.te = 0),
            (this.targetOffset = void 0),
            (this.modifiedOffset = void 0),
            (this.currentOffset = void 0),
            (this.lambda_v0 = 0),
            (this.one_ve_v0 = 0),
            (this.timeout = void 0),
            (this.interaction = void 0),
            (this.interaction = e));
        }
        return (
          b(t, [
            {
              key: "start",
              value: function (e) {
                var r = this.interaction,
                  n = ft(r);
                if (!n || !n.enabled) return !1;
                var o = r.coords.velocity.client,
                  l = Ye(o.x, o.y),
                  u = this.modification || (this.modification = new sr(r));
                if (
                  (u.copyFrom(r.modification),
                  (this.t0 = r._now()),
                  (this.allowResume = n.allowResume),
                  (this.v0 = l),
                  (this.currentOffset = { x: 0, y: 0 }),
                  (this.startCoords = r.coords.cur.page),
                  (this.modifierArg = u.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" })),
                  this.t0 - r.coords.cur.timeStamp < 50 && l > n.minSpeed && l > n.endSpeed)
                )
                  this.startInertia();
                else {
                  if (((u.result = u.setAll(this.modifierArg)), !u.result.changed)) return !1;
                  this.startSmoothEnd();
                }
                return (
                  (r.modification.result.rect = null),
                  r.offsetBy(this.targetOffset),
                  r._doPhase({ interaction: r, event: e, phase: "inertiastart" }),
                  r.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }),
                  (r.modification.result.rect = null),
                  (this.active = !0),
                  (r.simulation = this),
                  !0
                );
              },
            },
            {
              key: "startInertia",
              value: function () {
                var e = this,
                  r = this.interaction.coords.velocity.client,
                  n = ft(this.interaction),
                  o = n.resistance,
                  l = -Math.log(n.endSpeed / this.v0) / o;
                ((this.targetOffset = { x: (r.x - l) / o, y: (r.y - l) / o }),
                  (this.te = l),
                  (this.lambda_v0 = o / this.v0),
                  (this.one_ve_v0 = 1 - n.endSpeed / this.v0));
                var u = this.modification,
                  p = this.modifierArg;
                ((p.pageCoords = {
                  x: this.startCoords.x + this.targetOffset.x,
                  y: this.startCoords.y + this.targetOffset.y,
                }),
                  (u.result = u.setAll(p)),
                  u.result.changed &&
                    ((this.isModified = !0),
                    (this.modifiedOffset = {
                      x: this.targetOffset.x + u.result.delta.x,
                      y: this.targetOffset.y + u.result.delta.y,
                    })),
                  this.onNextFrame(function () {
                    return e.inertiaTick();
                  }));
              },
            },
            {
              key: "startSmoothEnd",
              value: function () {
                var e = this;
                ((this.smoothEnd = !0),
                  (this.isModified = !0),
                  (this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }),
                  this.onNextFrame(function () {
                    return e.smoothEndTick();
                  }));
              },
            },
            {
              key: "onNextFrame",
              value: function (e) {
                var r = this;
                this.timeout = ye.request(function () {
                  r.active && e();
                });
              },
            },
            {
              key: "inertiaTick",
              value: function () {
                var e,
                  r,
                  n,
                  o,
                  l,
                  u,
                  p,
                  h = this,
                  g = this.interaction,
                  v = ft(g).resistance,
                  y = (g._now() - this.t0) / 1e3;
                if (y < this.te) {
                  var S,
                    M = 1 - (Math.exp(-v * y) - this.lambda_v0) / this.one_ve_v0;
                  this.isModified
                    ? ((e = 0),
                      (r = 0),
                      (n = this.targetOffset.x),
                      (o = this.targetOffset.y),
                      (l = this.modifiedOffset.x),
                      (u = this.modifiedOffset.y),
                      (S = { x: Cn((p = M), e, n, l), y: Cn(p, r, o, u) }))
                    : (S = { x: this.targetOffset.x * M, y: this.targetOffset.y * M });
                  var _ = { x: S.x - this.currentOffset.x, y: S.y - this.currentOffset.y };
                  ((this.currentOffset.x += _.x),
                    (this.currentOffset.y += _.y),
                    g.offsetBy(_),
                    g.move(),
                    this.onNextFrame(function () {
                      return h.inertiaTick();
                    }));
                } else
                  (g.offsetBy({
                    x: this.modifiedOffset.x - this.currentOffset.x,
                    y: this.modifiedOffset.y - this.currentOffset.y,
                  }),
                    this.end());
              },
            },
            {
              key: "smoothEndTick",
              value: function () {
                var e = this,
                  r = this.interaction,
                  n = r._now() - this.t0,
                  o = ft(r).smoothEndDuration;
                if (n < o) {
                  var l = { x: En(n, 0, this.targetOffset.x, o), y: En(n, 0, this.targetOffset.y, o) },
                    u = { x: l.x - this.currentOffset.x, y: l.y - this.currentOffset.y };
                  ((this.currentOffset.x += u.x),
                    (this.currentOffset.y += u.y),
                    r.offsetBy(u),
                    r.move({ skipModifiers: this.modifierCount }),
                    this.onNextFrame(function () {
                      return e.smoothEndTick();
                    }));
                } else
                  (r.offsetBy({
                    x: this.targetOffset.x - this.currentOffset.x,
                    y: this.targetOffset.y - this.currentOffset.y,
                  }),
                    this.end());
              },
            },
            {
              key: "resume",
              value: function (e) {
                var r = e.pointer,
                  n = e.event,
                  o = e.eventTarget,
                  l = this.interaction;
                (l.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }),
                  l.updatePointer(r, n, o, !0),
                  l._doPhase({ interaction: l, event: n, phase: "resume" }),
                  lt(l.coords.prev, l.coords.cur),
                  this.stop());
              },
            },
            {
              key: "end",
              value: function () {
                (this.interaction.move(), this.interaction.end(), this.stop());
              },
            },
            {
              key: "stop",
              value: function () {
                ((this.active = this.smoothEnd = !1), (this.interaction.simulation = null), ye.cancel(this.timeout));
              },
            },
          ]),
          t
        );
      })();
    function ft(t) {
      var e = t.interactable,
        r = t.prepared;
      return e && e.options && r.name && e.options[r.name].inertia;
    }
    var Ws = {
      id: "inertia",
      before: ["modifiers", "actions"],
      install: function (t) {
        var e = t.defaults;
        (t.usePlugin(On),
          t.usePlugin(yn),
          (t.actions.phases.inertiastart = !0),
          (t.actions.phases.resume = !0),
          (e.perAction.inertia = {
            enabled: !1,
            resistance: 10,
            minSpeed: 100,
            endSpeed: 10,
            allowResume: !0,
            smoothEndDuration: 300,
          }));
      },
      listeners: {
        "interactions:new": function (t) {
          var e = t.interaction;
          e.inertia = new Ls(e);
        },
        "interactions:before-action-end": function (t) {
          var e = t.interaction,
            r = t.event;
          return (!e._interacting || e.simulation || !e.inertia.start(r)) && null;
        },
        "interactions:down": function (t) {
          var e = t.interaction,
            r = t.eventTarget,
            n = e.inertia;
          if (n.active)
            for (var o = r; x.element(o); ) {
              if (o === e.element) {
                n.resume(t);
                break;
              }
              o = pe(o);
            }
        },
        "interactions:stop": function (t) {
          var e = t.interaction.inertia;
          e.active && e.stop();
        },
        "interactions:before-action-resume": function (t) {
          var e = t.interaction.modification;
          (e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t));
        },
        "interactions:before-action-inertiastart": function (t) {
          return t.interaction.modification.setAndApply(t);
        },
        "interactions:action-resume": qe,
        "interactions:action-inertiastart": qe,
        "interactions:after-action-inertiastart": function (t) {
          return t.interaction.modification.restoreInteractionCoords(t);
        },
        "interactions:after-action-resume": function (t) {
          return t.interaction.modification.restoreInteractionCoords(t);
        },
      },
    };
    function Cn(t, e, r, n) {
      var o = 1 - t;
      return o * o * e + 2 * o * t * r + t * t * n;
    }
    function En(t, e, r, n) {
      return -r * (t /= n) * (t - 2) + e;
    }
    var Hs = Ws;
    function Pn(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        if (t.immediatePropagationStopped) break;
        n(t);
      }
    }
    var _n = (function () {
        function t(e) {
          (d(this, t),
            (this.options = void 0),
            (this.types = {}),
            (this.propagationStopped = !1),
            (this.immediatePropagationStopped = !1),
            (this.global = void 0),
            (this.options = H({}, e || {})));
        }
        return (
          b(t, [
            {
              key: "fire",
              value: function (e) {
                var r,
                  n = this.global;
                ((r = this.types[e.type]) && Pn(e, r), !e.propagationStopped && n && (r = n[e.type]) && Pn(e, r));
              },
            },
            {
              key: "on",
              value: function (e, r) {
                var n = Ee(e, r);
                for (e in n) this.types[e] = rn(this.types[e] || [], n[e]);
              },
            },
            {
              key: "off",
              value: function (e, r) {
                var n = Ee(e, r);
                for (e in n) {
                  var o = this.types[e];
                  if (o && o.length)
                    for (var l = 0, u = n[e]; l < u.length; l++) {
                      var p = u[l],
                        h = o.indexOf(p);
                      h !== -1 && o.splice(h, 1);
                    }
                }
              },
            },
            {
              key: "getRect",
              value: function (e) {
                return null;
              },
            },
          ]),
          t
        );
      })(),
      Fs = (function () {
        function t(e) {
          (d(this, t),
            (this.currentTarget = void 0),
            (this.originalEvent = void 0),
            (this.type = void 0),
            (this.originalEvent = e),
            at(this, e));
        }
        return (
          b(t, [
            {
              key: "preventOriginalDefault",
              value: function () {
                this.originalEvent.preventDefault();
              },
            },
            {
              key: "stopPropagation",
              value: function () {
                this.originalEvent.stopPropagation();
              },
            },
            {
              key: "stopImmediatePropagation",
              value: function () {
                this.originalEvent.stopImmediatePropagation();
              },
            },
          ]),
          t
        );
      })();
    function Ze(t) {
      return x.object(t) ? { capture: !!t.capture, passive: !!t.passive } : { capture: !!t, passive: !1 };
    }
    function vt(t, e) {
      return (
        t === e ||
        (typeof t == "boolean"
          ? !!e.capture === t && !e.passive
          : !!t.capture == !!e.capture && !!t.passive == !!e.passive)
      );
    }
    var Ns = {
        id: "events",
        install: function (t) {
          var e,
            r = [],
            n = {},
            o = [],
            l = {
              add: u,
              remove: p,
              addDelegate: function (v, y, S, M, _) {
                var R = Ze(_);
                if (!n[S]) {
                  n[S] = [];
                  for (var j = 0; j < o.length; j++) {
                    var z = o[j];
                    (u(z, S, h), u(z, S, g, !0));
                  }
                }
                var W = n[S],
                  U = Be(W, function (X) {
                    return X.selector === v && X.context === y;
                  });
                (U || ((U = { selector: v, context: y, listeners: [] }), W.push(U)),
                  U.listeners.push({ func: M, options: R }));
              },
              removeDelegate: function (v, y, S, M, _) {
                var R,
                  j = Ze(_),
                  z = n[S],
                  W = !1;
                if (z)
                  for (R = z.length - 1; R >= 0; R--) {
                    var U = z[R];
                    if (U.selector === v && U.context === y) {
                      for (var X = U.listeners, F = X.length - 1; F >= 0; F--) {
                        var G = X[F];
                        if (G.func === M && vt(G.options, j)) {
                          (X.splice(F, 1), X.length || (z.splice(R, 1), p(y, S, h), p(y, S, g, !0)), (W = !0));
                          break;
                        }
                      }
                      if (W) break;
                    }
                  }
              },
              delegateListener: h,
              delegateUseCapture: g,
              delegatedEvents: n,
              documents: o,
              targets: r,
              supportsOptions: !1,
              supportsPassive: !1,
            };
          function u(v, y, S, M) {
            if (v.addEventListener) {
              var _ = Ze(M),
                R = Be(r, function (j) {
                  return j.eventTarget === v;
                });
              (R || ((R = { eventTarget: v, events: {} }), r.push(R)),
                R.events[y] || (R.events[y] = []),
                Be(R.events[y], function (j) {
                  return j.func === S && vt(j.options, _);
                }) ||
                  (v.addEventListener(y, S, l.supportsOptions ? _ : _.capture),
                  R.events[y].push({ func: S, options: _ })));
            }
          }
          function p(v, y, S, M) {
            if (v.addEventListener && v.removeEventListener) {
              var _ = Xe(r, function (te) {
                  return te.eventTarget === v;
                }),
                R = r[_];
              if (R && R.events)
                if (y !== "all") {
                  var j = !1,
                    z = R.events[y];
                  if (z) {
                    if (S === "all") {
                      for (var W = z.length - 1; W >= 0; W--) {
                        var U = z[W];
                        p(v, y, U.func, U.options);
                      }
                      return;
                    }
                    for (var X = Ze(M), F = 0; F < z.length; F++) {
                      var G = z[F];
                      if (G.func === S && vt(G.options, X)) {
                        (v.removeEventListener(y, S, l.supportsOptions ? X : X.capture),
                          z.splice(F, 1),
                          z.length === 0 && (delete R.events[y], (j = !0)));
                        break;
                      }
                    }
                  }
                  j && !Object.keys(R.events).length && r.splice(_, 1);
                } else for (y in R.events) R.events.hasOwnProperty(y) && p(v, y, "all");
            }
          }
          function h(v, y) {
            for (var S = Ze(y), M = new Fs(v), _ = n[v.type], R = tn(v)[0], j = R; x.element(j); ) {
              for (var z = 0; z < _.length; z++) {
                var W = _[z],
                  U = W.selector,
                  X = W.context;
                if (be(j, U) && Ce(X, R) && Ce(X, j)) {
                  var F = W.listeners;
                  M.currentTarget = j;
                  for (var G = 0; G < F.length; G++) {
                    var te = F[G];
                    vt(te.options, S) && te.func(M);
                  }
                }
              }
              j = pe(j);
            }
          }
          function g(v) {
            return h(v, !0);
          }
          return (
            (e = t.document) == null ||
              e.createElement("div").addEventListener("test", null, {
                get capture() {
                  return (l.supportsOptions = !0);
                },
                get passive() {
                  return (l.supportsPassive = !0);
                },
              }),
            (t.events = l),
            l
          );
        },
      },
      lr = {
        methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
        search: function (t) {
          for (var e = 0, r = lr.methodOrder; e < r.length; e++) {
            var n = r[e],
              o = lr[n](t);
            if (o) return o;
          }
          return null;
        },
        simulationResume: function (t) {
          var e = t.pointerType,
            r = t.eventType,
            n = t.eventTarget,
            o = t.scope;
          if (!/down|start/i.test(r)) return null;
          for (var l = 0, u = o.interactions.list; l < u.length; l++) {
            var p = u[l],
              h = n;
            if (p.simulation && p.simulation.allowResume && p.pointerType === e)
              for (; h; ) {
                if (h === p.element) return p;
                h = pe(h);
              }
          }
          return null;
        },
        mouseOrPen: function (t) {
          var e,
            r = t.pointerId,
            n = t.pointerType,
            o = t.eventType,
            l = t.scope;
          if (n !== "mouse" && n !== "pen") return null;
          for (var u = 0, p = l.interactions.list; u < p.length; u++) {
            var h = p[u];
            if (h.pointerType === n) {
              if (h.simulation && !In(h, r)) continue;
              if (h.interacting()) return h;
              e || (e = h);
            }
          }
          if (e) return e;
          for (var g = 0, v = l.interactions.list; g < v.length; g++) {
            var y = v[g];
            if (!(y.pointerType !== n || (/down/i.test(o) && y.simulation))) return y;
          }
          return null;
        },
        hasPointer: function (t) {
          for (var e = t.pointerId, r = 0, n = t.scope.interactions.list; r < n.length; r++) {
            var o = n[r];
            if (In(o, e)) return o;
          }
          return null;
        },
        idle: function (t) {
          for (var e = t.pointerType, r = 0, n = t.scope.interactions.list; r < n.length; r++) {
            var o = n[r];
            if (o.pointers.length === 1) {
              var l = o.interactable;
              if (l && (!l.options.gesture || !l.options.gesture.enabled)) continue;
            } else if (o.pointers.length >= 2) continue;
            if (!o.interacting() && e === o.pointerType) return o;
          }
          return null;
        },
      };
    function In(t, e) {
      return t.pointers.some(function (r) {
        return r.id === e;
      });
    }
    var Us = lr,
      cr = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Mn(t, e) {
      return function (r) {
        var n = e.interactions.list,
          o = en(r),
          l = tn(r),
          u = l[0],
          p = l[1],
          h = [];
        if (/^touch/.test(r.type)) {
          e.prevTouchTime = e.now();
          for (var g = 0, v = r.changedTouches; g < v.length; g++) {
            var y = v[g],
              S = {
                pointer: y,
                pointerId: Ke(y),
                pointerType: o,
                eventType: r.type,
                eventTarget: u,
                curEventTarget: p,
                scope: e,
              },
              M = Rn(S);
            h.push([S.pointer, S.eventTarget, S.curEventTarget, M]);
          }
        } else {
          var _ = !1;
          if (!le.supportsPointerEvent && /mouse/.test(r.type)) {
            for (var R = 0; R < n.length && !_; R++) _ = n[R].pointerType !== "mouse" && n[R].pointerIsDown;
            _ = _ || e.now() - e.prevTouchTime < 500 || r.timeStamp === 0;
          }
          if (!_) {
            var j = {
                pointer: r,
                pointerId: Ke(r),
                pointerType: o,
                eventType: r.type,
                curEventTarget: p,
                eventTarget: u,
                scope: e,
              },
              z = Rn(j);
            h.push([j.pointer, j.eventTarget, j.curEventTarget, z]);
          }
        }
        for (var W = 0; W < h.length; W++) {
          var U = h[W],
            X = U[0],
            F = U[1],
            G = U[2];
          U[3][t](X, r, F, G);
        }
      };
    }
    function Rn(t) {
      var e = t.pointerType,
        r = t.scope,
        n = { interaction: Us.search(t), searchDetails: t };
      return (r.fire("interactions:find", n), n.interaction || r.interactions.new({ pointerType: e }));
    }
    function ur(t, e) {
      var r = t.doc,
        n = t.scope,
        o = t.options,
        l = n.interactions.docEvents,
        u = n.events,
        p = u[e];
      for (var h in (n.browser.isIOS && !o.events && (o.events = { passive: !1 }), u.delegatedEvents))
        (p(r, h, u.delegateListener), p(r, h, u.delegateUseCapture, !0));
      for (var g = o && o.events, v = 0; v < l.length; v++) {
        var y = l[v];
        p(r, y.type, y.listener, g);
      }
    }
    var Gs = {
        id: "core/interactions",
        install: function (t) {
          for (var e = {}, r = 0; r < cr.length; r++) {
            var n = cr[r];
            e[n] = Mn(n, t);
          }
          var o,
            l = le.pEventTypes;
          function u() {
            for (var p = 0, h = t.interactions.list; p < h.length; p++) {
              var g = h[p];
              if (g.pointerIsDown && g.pointerType === "touch" && !g._interacting)
                for (
                  var v = function () {
                      var M = S[y];
                      t.documents.some(function (_) {
                        return Ce(_.doc, M.downTarget);
                      }) || g.removePointer(M.pointer, M.event);
                    },
                    y = 0,
                    S = g.pointers;
                  y < S.length;
                  y++
                )
                  v();
            }
          }
          ((o = Q.PointerEvent
            ? [
                { type: l.down, listener: u },
                { type: l.down, listener: e.pointerDown },
                { type: l.move, listener: e.pointerMove },
                { type: l.up, listener: e.pointerUp },
                { type: l.cancel, listener: e.pointerUp },
              ]
            : [
                { type: "mousedown", listener: e.pointerDown },
                { type: "mousemove", listener: e.pointerMove },
                { type: "mouseup", listener: e.pointerUp },
                { type: "touchstart", listener: u },
                { type: "touchstart", listener: e.pointerDown },
                { type: "touchmove", listener: e.pointerMove },
                { type: "touchend", listener: e.pointerUp },
                { type: "touchcancel", listener: e.pointerUp },
              ]).push({
            type: "blur",
            listener: function (p) {
              for (var h = 0, g = t.interactions.list; h < g.length; h++) g[h].documentBlur(p);
            },
          }),
            (t.prevTouchTime = 0),
            (t.Interaction = (function (p) {
              O(g, p);
              var h = E(g);
              function g() {
                return (d(this, g), h.apply(this, arguments));
              }
              return (
                b(g, [
                  {
                    key: "pointerMoveTolerance",
                    get: function () {
                      return t.interactions.pointerMoveTolerance;
                    },
                    set: function (v) {
                      t.interactions.pointerMoveTolerance = v;
                    },
                  },
                  {
                    key: "_now",
                    value: function () {
                      return t.now();
                    },
                  },
                ]),
                g
              );
            })($s)),
            (t.interactions = {
              list: [],
              new: function (p) {
                p.scopeFire = function (g, v) {
                  return t.fire(g, v);
                };
                var h = new t.Interaction(p);
                return (t.interactions.list.push(h), h);
              },
              listeners: e,
              docEvents: o,
              pointerMoveTolerance: 1,
            }),
            t.usePlugin(bn));
        },
        listeners: {
          "scope:add-document": function (t) {
            return ur(t, "add");
          },
          "scope:remove-document": function (t) {
            return ur(t, "remove");
          },
          "interactable:unset": function (t, e) {
            for (var r = t.interactable, n = e.interactions.list.length - 1; n >= 0; n--) {
              var o = e.interactions.list[n];
              o.interactable === r &&
                (o.stop(),
                e.fire("interactions:destroy", { interaction: o }),
                o.destroy(),
                e.interactions.list.length > 2 && e.interactions.list.splice(n, 1));
            }
          },
        },
        onDocSignal: ur,
        doOnInteractions: Mn,
        methodNames: cr,
      },
      Ys = Gs,
      we = (function (t) {
        return ((t[(t.On = 0)] = "On"), (t[(t.Off = 1)] = "Off"), t);
      })(we || {}),
      Ks = (function () {
        function t(e, r, n, o) {
          (d(this, t),
            (this.target = void 0),
            (this.options = void 0),
            (this._actions = void 0),
            (this.events = new _n()),
            (this._context = void 0),
            (this._win = void 0),
            (this._doc = void 0),
            (this._scopeEvents = void 0),
            (this._actions = r.actions),
            (this.target = e),
            (this._context = r.context || n),
            (this._win = B(Xr(e) ? this._context : e)),
            (this._doc = this._win.document),
            (this._scopeEvents = o),
            this.set(r));
        }
        return (
          b(t, [
            {
              key: "_defaults",
              get: function () {
                return { base: {}, perAction: {}, actions: {} };
              },
            },
            {
              key: "setOnEvents",
              value: function (e, r) {
                return (
                  x.func(r.onstart) && this.on("".concat(e, "start"), r.onstart),
                  x.func(r.onmove) && this.on("".concat(e, "move"), r.onmove),
                  x.func(r.onend) && this.on("".concat(e, "end"), r.onend),
                  x.func(r.oninertiastart) && this.on("".concat(e, "inertiastart"), r.oninertiastart),
                  this
                );
              },
            },
            {
              key: "updatePerActionListeners",
              value: function (e, r, n) {
                var o,
                  l = this,
                  u = (o = this._actions.map[e]) == null ? void 0 : o.filterEventType,
                  p = function (h) {
                    return (u == null || u(h)) && ht(h, l._actions);
                  };
                ((x.array(r) || x.object(r)) && this._onOff(we.Off, e, r, void 0, p),
                  (x.array(n) || x.object(n)) && this._onOff(we.On, e, n, void 0, p));
              },
            },
            {
              key: "setPerAction",
              value: function (e, r) {
                var n = this._defaults;
                for (var o in r) {
                  var l = o,
                    u = this.options[e],
                    p = r[l];
                  (l === "listeners" && this.updatePerActionListeners(e, u.listeners, p),
                    x.array(p)
                      ? (u[l] = nn(p))
                      : x.plainObject(p)
                        ? ((u[l] = H(u[l] || {}, De(p))),
                          x.object(n.perAction[l]) && "enabled" in n.perAction[l] && (u[l].enabled = p.enabled !== !1))
                        : x.bool(p) && x.object(n.perAction[l])
                          ? (u[l].enabled = p)
                          : (u[l] = p));
                }
              },
            },
            {
              key: "getRect",
              value: function (e) {
                return (
                  (e = e || (x.element(this.target) ? this.target : null)),
                  x.string(this.target) && (e = e || this._context.querySelector(this.target)),
                  Gt(e)
                );
              },
            },
            {
              key: "rectChecker",
              value: function (e) {
                var r = this;
                return x.func(e)
                  ? ((this.getRect = function (n) {
                      var o = H({}, e.apply(r, n));
                      return ("width" in o || ((o.width = o.right - o.left), (o.height = o.bottom - o.top)), o);
                    }),
                    this)
                  : e === null
                    ? (delete this.getRect, this)
                    : this.getRect;
              },
            },
            {
              key: "_backCompatOption",
              value: function (e, r) {
                if (Xr(r) || x.object(r)) {
                  for (var n in ((this.options[e] = r), this._actions.map)) this.options[n][e] = r;
                  return this;
                }
                return this.options[e];
              },
            },
            {
              key: "origin",
              value: function (e) {
                return this._backCompatOption("origin", e);
              },
            },
            {
              key: "deltaSource",
              value: function (e) {
                return e === "page" || e === "client"
                  ? ((this.options.deltaSource = e), this)
                  : this.options.deltaSource;
              },
            },
            {
              key: "getAllElements",
              value: function () {
                var e = this.target;
                return x.string(e)
                  ? Array.from(this._context.querySelectorAll(e))
                  : x.func(e) && e.getAllElements
                    ? e.getAllElements()
                    : x.element(e)
                      ? [e]
                      : [];
              },
            },
            {
              key: "context",
              value: function () {
                return this._context;
              },
            },
            {
              key: "inContext",
              value: function (e) {
                return this._context === e.ownerDocument || Ce(this._context, e);
              },
            },
            {
              key: "testIgnoreAllow",
              value: function (e, r, n) {
                return !this.testIgnore(e.ignoreFrom, r, n) && this.testAllow(e.allowFrom, r, n);
              },
            },
            {
              key: "testAllow",
              value: function (e, r, n) {
                return !e || (!!x.element(n) && (x.string(e) ? Nt(n, e, r) : !!x.element(e) && Ce(e, n)));
              },
            },
            {
              key: "testIgnore",
              value: function (e, r, n) {
                return !(!e || !x.element(n)) && (x.string(e) ? Nt(n, e, r) : !!x.element(e) && Ce(e, n));
              },
            },
            {
              key: "fire",
              value: function (e) {
                return (this.events.fire(e), this);
              },
            },
            {
              key: "_onOff",
              value: function (e, r, n, o, l) {
                x.object(r) && !x.array(r) && ((o = n), (n = null));
                var u = Ee(r, n, l);
                for (var p in u) {
                  p === "wheel" && (p = le.wheelEvent);
                  for (var h = 0, g = u[p]; h < g.length; h++) {
                    var v = g[h];
                    ht(p, this._actions)
                      ? this.events[e === we.On ? "on" : "off"](p, v)
                      : x.string(this.target)
                        ? this._scopeEvents[e === we.On ? "addDelegate" : "removeDelegate"](
                            this.target,
                            this._context,
                            p,
                            v,
                            o
                          )
                        : this._scopeEvents[e === we.On ? "add" : "remove"](this.target, p, v, o);
                  }
                }
                return this;
              },
            },
            {
              key: "on",
              value: function (e, r, n) {
                return this._onOff(we.On, e, r, n);
              },
            },
            {
              key: "off",
              value: function (e, r, n) {
                return this._onOff(we.Off, e, r, n);
              },
            },
            {
              key: "set",
              value: function (e) {
                var r = this._defaults;
                for (var n in (x.object(e) || (e = {}), (this.options = De(r.base)), this._actions.methodDict)) {
                  var o = n,
                    l = this._actions.methodDict[o];
                  ((this.options[o] = {}), this.setPerAction(o, H(H({}, r.perAction), r.actions[o])), this[l](e[o]));
                }
                for (var u in e) u !== "getRect" ? x.func(this[u]) && this[u](e[u]) : this.rectChecker(e.getRect);
                return this;
              },
            },
            {
              key: "unset",
              value: function () {
                if (x.string(this.target))
                  for (var e in this._scopeEvents.delegatedEvents)
                    for (var r = this._scopeEvents.delegatedEvents[e], n = r.length - 1; n >= 0; n--) {
                      var o = r[n],
                        l = o.selector,
                        u = o.context,
                        p = o.listeners;
                      l === this.target && u === this._context && r.splice(n, 1);
                      for (var h = p.length - 1; h >= 0; h--)
                        this._scopeEvents.removeDelegate(this.target, this._context, e, p[h][0], p[h][1]);
                    }
                else this._scopeEvents.remove(this.target, "all");
              },
            },
          ]),
          t
        );
      })(),
      Xs = (function () {
        function t(e) {
          var r = this;
          (d(this, t),
            (this.list = []),
            (this.selectorMap = {}),
            (this.scope = void 0),
            (this.scope = e),
            e.addListeners({
              "interactable:unset": function (n) {
                var o = n.interactable,
                  l = o.target,
                  u = x.string(l) ? r.selectorMap[l] : l[r.scope.id],
                  p = Xe(u, function (h) {
                    return h === o;
                  });
                u.splice(p, 1);
              },
            }));
        }
        return (
          b(t, [
            {
              key: "new",
              value: function (e, r) {
                r = H(r || {}, { actions: this.scope.actions });
                var n = new this.scope.Interactable(e, r, this.scope.document, this.scope.events);
                return (
                  this.scope.addDocument(n._doc),
                  this.list.push(n),
                  x.string(e)
                    ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(n))
                    : (n.target[this.scope.id] ||
                        Object.defineProperty(e, this.scope.id, { value: [], configurable: !0 }),
                      e[this.scope.id].push(n)),
                  this.scope.fire("interactable:new", { target: e, options: r, interactable: n, win: this.scope._win }),
                  n
                );
              },
            },
            {
              key: "getExisting",
              value: function (e, r) {
                var n = (r && r.context) || this.scope.document,
                  o = x.string(e),
                  l = o ? this.selectorMap[e] : e[this.scope.id];
                if (l)
                  return Be(l, function (u) {
                    return u._context === n && (o || u.inContext(e));
                  });
              },
            },
            {
              key: "forEachMatch",
              value: function (e, r) {
                for (var n = 0, o = this.list; n < o.length; n++) {
                  var l = o[n],
                    u = void 0;
                  if (
                    ((x.string(l.target) ? x.element(e) && be(e, l.target) : e === l.target) &&
                      l.inContext(e) &&
                      (u = r(l)),
                    u !== void 0)
                  )
                    return u;
                }
              },
            },
          ]),
          t
        );
      })(),
      Bs = (function () {
        function t() {
          var e = this;
          (d(this, t),
            (this.id = "__interact_scope_".concat(Math.floor(100 * Math.random()))),
            (this.isInitialized = !1),
            (this.listenerMaps = []),
            (this.browser = le),
            (this.defaults = De(Tn)),
            (this.Eventable = _n),
            (this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }),
            (this.interactStatic = (function (n) {
              var o = function l(u, p) {
                var h = n.interactables.getExisting(u, p);
                return (h || ((h = n.interactables.new(u, p)).events.global = l.globalEvents), h);
              };
              return (
                (o.getPointerAverage = Qr),
                (o.getTouchBBox = Xt),
                (o.getTouchDistance = Bt),
                (o.getTouchAngle = Vt),
                (o.getElementRect = Gt),
                (o.getElementClientRect = Ut),
                (o.matchesSelector = be),
                (o.closest = Ur),
                (o.globalEvents = {}),
                (o.version = "1.10.27"),
                (o.scope = n),
                (o.use = function (l, u) {
                  return (this.scope.usePlugin(l, u), this);
                }),
                (o.isSet = function (l, u) {
                  return !!this.scope.interactables.get(l, u && u.context);
                }),
                (o.on = Ve(function (l, u, p) {
                  if ((x.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), x.array(l))) {
                    for (var h = 0, g = l; h < g.length; h++) {
                      var v = g[h];
                      this.on(v, u, p);
                    }
                    return this;
                  }
                  if (x.object(l)) {
                    for (var y in l) this.on(y, l[y], u);
                    return this;
                  }
                  return (
                    ht(l, this.scope.actions)
                      ? this.globalEvents[l]
                        ? this.globalEvents[l].push(u)
                        : (this.globalEvents[l] = [u])
                      : this.scope.events.add(this.scope.document, l, u, { options: p }),
                    this
                  );
                }, "The interact.on() method is being deprecated")),
                (o.off = Ve(function (l, u, p) {
                  if ((x.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), x.array(l))) {
                    for (var h = 0, g = l; h < g.length; h++) {
                      var v = g[h];
                      this.off(v, u, p);
                    }
                    return this;
                  }
                  if (x.object(l)) {
                    for (var y in l) this.off(y, l[y], u);
                    return this;
                  }
                  var S;
                  return (
                    ht(l, this.scope.actions)
                      ? l in this.globalEvents &&
                        (S = this.globalEvents[l].indexOf(u)) !== -1 &&
                        this.globalEvents[l].splice(S, 1)
                      : this.scope.events.remove(this.scope.document, l, u, p),
                    this
                  );
                }, "The interact.off() method is being deprecated")),
                (o.debug = function () {
                  return this.scope;
                }),
                (o.supportsTouch = function () {
                  return le.supportsTouch;
                }),
                (o.supportsPointerEvent = function () {
                  return le.supportsPointerEvent;
                }),
                (o.stop = function () {
                  for (var l = 0, u = this.scope.interactions.list; l < u.length; l++) u[l].stop();
                  return this;
                }),
                (o.pointerMoveTolerance = function (l) {
                  return x.number(l)
                    ? ((this.scope.interactions.pointerMoveTolerance = l), this)
                    : this.scope.interactions.pointerMoveTolerance;
                }),
                (o.addDocument = function (l, u) {
                  this.scope.addDocument(l, u);
                }),
                (o.removeDocument = function (l) {
                  this.scope.removeDocument(l);
                }),
                o
              );
            })(this)),
            (this.InteractEvent = or),
            (this.Interactable = void 0),
            (this.interactables = new Xs(this)),
            (this._win = void 0),
            (this.document = void 0),
            (this.window = void 0),
            (this.documents = []),
            (this._plugins = { list: [], map: {} }),
            (this.onWindowUnload = function (n) {
              return e.removeDocument(n.target);
            }));
          var r = this;
          this.Interactable = (function (n) {
            O(l, n);
            var o = E(l);
            function l() {
              return (d(this, l), o.apply(this, arguments));
            }
            return (
              b(l, [
                {
                  key: "_defaults",
                  get: function () {
                    return r.defaults;
                  },
                },
                {
                  key: "set",
                  value: function (u) {
                    return (
                      P(k(l.prototype), "set", this).call(this, u),
                      r.fire("interactable:set", { options: u, interactable: this }),
                      this
                    );
                  },
                },
                {
                  key: "unset",
                  value: function () {
                    P(k(l.prototype), "unset", this).call(this);
                    var u = r.interactables.list.indexOf(this);
                    u < 0 || (r.interactables.list.splice(u, 1), r.fire("interactable:unset", { interactable: this }));
                  },
                },
              ]),
              l
            );
          })(Ks);
        }
        return (
          b(t, [
            {
              key: "addListeners",
              value: function (e, r) {
                this.listenerMaps.push({ id: r, map: e });
              },
            },
            {
              key: "fire",
              value: function (e, r) {
                for (var n = 0, o = this.listenerMaps; n < o.length; n++) {
                  var l = o[n].map[e];
                  if (l && l(r, this, e) === !1) return !1;
                }
              },
            },
            {
              key: "init",
              value: function (e) {
                return this.isInitialized
                  ? this
                  : (function (r, n) {
                      return (
                        (r.isInitialized = !0),
                        x.window(n) && K(n),
                        Q.init(n),
                        le.init(n),
                        ye.init(n),
                        (r.window = n),
                        (r.document = n.document),
                        r.usePlugin(Ys),
                        r.usePlugin(Ns),
                        r
                      );
                    })(this, e);
              },
            },
            {
              key: "pluginIsInstalled",
              value: function (e) {
                var r = e.id;
                return r ? !!this._plugins.map[r] : this._plugins.list.indexOf(e) !== -1;
              },
            },
            {
              key: "usePlugin",
              value: function (e, r) {
                if (!this.isInitialized) return this;
                if (this.pluginIsInstalled(e)) return this;
                if (
                  (e.id && (this._plugins.map[e.id] = e),
                  this._plugins.list.push(e),
                  e.install && e.install(this, r),
                  e.listeners && e.before)
                ) {
                  for (
                    var n = 0,
                      o = this.listenerMaps.length,
                      l = e.before.reduce(function (p, h) {
                        return ((p[h] = !0), (p[kn(h)] = !0), p);
                      }, {});
                    n < o;
                    n++
                  ) {
                    var u = this.listenerMaps[n].id;
                    if (u && (l[u] || l[kn(u)])) break;
                  }
                  this.listenerMaps.splice(n, 0, { id: e.id, map: e.listeners });
                } else e.listeners && this.listenerMaps.push({ id: e.id, map: e.listeners });
                return this;
              },
            },
            {
              key: "addDocument",
              value: function (e, r) {
                if (this.getDocIndex(e) !== -1) return !1;
                var n = B(e);
                ((r = r ? H({}, r) : {}),
                  this.documents.push({ doc: e, options: r }),
                  this.events.documents.push(e),
                  e !== this.document && this.events.add(n, "unload", this.onWindowUnload),
                  this.fire("scope:add-document", { doc: e, window: n, scope: this, options: r }));
              },
            },
            {
              key: "removeDocument",
              value: function (e) {
                var r = this.getDocIndex(e),
                  n = B(e),
                  o = this.documents[r].options;
                (this.events.remove(n, "unload", this.onWindowUnload),
                  this.documents.splice(r, 1),
                  this.events.documents.splice(r, 1),
                  this.fire("scope:remove-document", { doc: e, window: n, scope: this, options: o }));
              },
            },
            {
              key: "getDocIndex",
              value: function (e) {
                for (var r = 0; r < this.documents.length; r++) if (this.documents[r].doc === e) return r;
                return -1;
              },
            },
            {
              key: "getDocOptions",
              value: function (e) {
                var r = this.getDocIndex(e);
                return r === -1 ? null : this.documents[r].options;
              },
            },
            {
              key: "now",
              value: function () {
                return (this.window.Date || Date).now();
              },
            },
          ]),
          t
        );
      })();
    function kn(t) {
      return t && t.replace(/\/.*$/, "");
    }
    var zn = new Bs(),
      ee = zn.interactStatic,
      Vs = typeof globalThis < "u" ? globalThis : window;
    zn.init(Vs);
    var qs = Object.freeze({
        __proto__: null,
        edgeTarget: function () {},
        elements: function () {},
        grid: function (t) {
          var e = [
              ["x", "y"],
              ["left", "top"],
              ["right", "bottom"],
              ["width", "height"],
            ].filter(function (n) {
              var o = n[0],
                l = n[1];
              return o in t || l in t;
            }),
            r = function (n, o) {
              for (
                var l = t.range,
                  u = t.limits,
                  p = u === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : u,
                  h = t.offset,
                  g = h === void 0 ? { x: 0, y: 0 } : h,
                  v = { range: l, grid: t, x: null, y: null },
                  y = 0;
                y < e.length;
                y++
              ) {
                var S = e[y],
                  M = S[0],
                  _ = S[1],
                  R = Math.round((n - g.x) / t[M]),
                  j = Math.round((o - g.y) / t[_]);
                ((v[M] = Math.max(p.left, Math.min(p.right, R * t[M] + g.x))),
                  (v[_] = Math.max(p.top, Math.min(p.bottom, j * t[_] + g.y))));
              }
              return v;
            };
          return ((r.grid = t), (r.coordFields = e), r);
        },
      }),
      Zs = {
        id: "snappers",
        install: function (t) {
          var e = t.interactStatic;
          ((e.snappers = H(e.snappers || {}, qs)), (e.createSnapGrid = e.snappers.grid));
        },
      },
      Js = Zs,
      Qs = {
        start: function (t) {
          var e = t.state,
            r = t.rect,
            n = t.edges,
            o = t.pageCoords,
            l = e.options,
            u = l.ratio,
            p = l.enabled,
            h = e.options,
            g = h.equalDelta,
            v = h.modifiers;
          (u === "preserve" && (u = r.width / r.height),
            (e.startCoords = H({}, o)),
            (e.startRect = H({}, r)),
            (e.ratio = u),
            (e.equalDelta = g));
          var y = (e.linkedEdges = {
            top: n.top || (n.left && !n.bottom),
            left: n.left || (n.top && !n.right),
            bottom: n.bottom || (n.right && !n.top),
            right: n.right || (n.bottom && !n.left),
          });
          if (((e.xIsPrimaryAxis = !(!n.left && !n.right)), e.equalDelta)) {
            var S = (y.left ? 1 : -1) * (y.top ? 1 : -1);
            e.edgeSign = { x: S, y: S };
          } else e.edgeSign = { x: y.left ? -1 : 1, y: y.top ? -1 : 1 };
          if ((p !== !1 && H(n, y), v != null && v.length)) {
            var M = new sr(t.interaction);
            (M.copyFrom(t.interaction.modification), M.prepareStates(v), (e.subModification = M), M.startAll(c({}, t)));
          }
        },
        set: function (t) {
          var e = t.state,
            r = t.rect,
            n = t.coords,
            o = e.linkedEdges,
            l = H({}, n),
            u = e.equalDelta ? eo : to;
          if ((H(t.edges, o), u(e, e.xIsPrimaryAxis, n, r), !e.subModification)) return null;
          var p = H({}, r);
          ot(o, p, { x: n.x - l.x, y: n.y - l.y });
          var h = e.subModification.setAll(
              c(c({}, t), {}, { rect: p, edges: o, pageCoords: n, prevCoords: n, prevRect: p })
            ),
            g = h.delta;
          return (h.changed && (u(e, Math.abs(g.x) > Math.abs(g.y), h.coords, h.rect), H(n, h.coords)), h.eventProps);
        },
        defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 },
      };
    function eo(t, e, r) {
      var n = t.startCoords,
        o = t.edgeSign;
      e ? (r.y = n.y + (r.x - n.x) * o.y) : (r.x = n.x + (r.y - n.y) * o.x);
    }
    function to(t, e, r, n) {
      var o = t.startRect,
        l = t.startCoords,
        u = t.ratio,
        p = t.edgeSign;
      if (e) {
        var h = n.width / u;
        r.y = l.y + (h - o.height) * p.y;
      } else {
        var g = n.height * u;
        r.x = l.x + (g - o.width) * p.x;
      }
    }
    var ro = Te(Qs, "aspectRatio"),
      Dn = function () {};
    Dn._defaults = {};
    var mt = Dn;
    function _e(t, e, r) {
      return x.func(t) ? Ue(t, e.interactable, e.element, [r.x, r.y, e]) : Ue(t, e.interactable, e.element);
    }
    var gt = {
        start: function (t) {
          var e = t.rect,
            r = t.startOffset,
            n = t.state,
            o = t.interaction,
            l = t.pageCoords,
            u = n.options,
            p = u.elementRect,
            h = H({ left: 0, top: 0, right: 0, bottom: 0 }, u.offset || {});
          if (e && p) {
            var g = _e(u.restriction, o, l);
            if (g) {
              var v = g.right - g.left - e.width,
                y = g.bottom - g.top - e.height;
              (v < 0 && ((h.left += v), (h.right += v)), y < 0 && ((h.top += y), (h.bottom += y)));
            }
            ((h.left += r.left - e.width * p.left),
              (h.top += r.top - e.height * p.top),
              (h.right += r.right - e.width * (1 - p.right)),
              (h.bottom += r.bottom - e.height * (1 - p.bottom)));
          }
          n.offset = h;
        },
        set: function (t) {
          var e = t.coords,
            r = t.interaction,
            n = t.state,
            o = n.options,
            l = n.offset,
            u = _e(o.restriction, r, e);
          if (u) {
            var p = (function (h) {
              return (
                !h ||
                  ("left" in h && "top" in h) ||
                  (((h = H({}, h)).left = h.x || 0),
                  (h.top = h.y || 0),
                  (h.right = h.right || h.left + h.width),
                  (h.bottom = h.bottom || h.top + h.height)),
                h
              );
            })(u);
            ((e.x = Math.max(Math.min(p.right - l.right, e.x), p.left + l.left)),
              (e.y = Math.max(Math.min(p.bottom - l.bottom, e.y), p.top + l.top)));
          }
        },
        defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 },
      },
      no = Te(gt, "restrict"),
      $n = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 },
      jn = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function An(t, e) {
      for (var r = 0, n = ["top", "left", "bottom", "right"]; r < n.length; r++) {
        var o = n[r];
        o in t || (t[o] = e[o]);
      }
      return t;
    }
    var Je = {
        noInner: $n,
        noOuter: jn,
        start: function (t) {
          var e,
            r = t.interaction,
            n = t.startOffset,
            o = t.state,
            l = o.options;
          (l && (e = st(_e(l.offset, r, r.coords.start.page))),
            (e = e || { x: 0, y: 0 }),
            (o.offset = { top: e.y + n.top, left: e.x + n.left, bottom: e.y - n.bottom, right: e.x - n.right }));
        },
        set: function (t) {
          var e = t.coords,
            r = t.edges,
            n = t.interaction,
            o = t.state,
            l = o.offset,
            u = o.options;
          if (r) {
            var p = H({}, e),
              h = _e(u.inner, n, p) || {},
              g = _e(u.outer, n, p) || {};
            (An(h, $n),
              An(g, jn),
              r.top
                ? (e.y = Math.min(Math.max(g.top + l.top, p.y), h.top + l.top))
                : r.bottom && (e.y = Math.max(Math.min(g.bottom + l.bottom, p.y), h.bottom + l.bottom)),
              r.left
                ? (e.x = Math.min(Math.max(g.left + l.left, p.x), h.left + l.left))
                : r.right && (e.x = Math.max(Math.min(g.right + l.right, p.x), h.right + l.right)));
          }
        },
        defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 },
      },
      io = Te(Je, "restrictEdges"),
      so = H(
        {
          get elementRect() {
            return { top: 0, left: 0, bottom: 1, right: 1 };
          },
          set elementRect(t) {},
        },
        gt.defaults
      ),
      oo = Te({ start: gt.start, set: gt.set, defaults: so }, "restrictRect"),
      ao = { width: -1 / 0, height: -1 / 0 },
      lo = { width: 1 / 0, height: 1 / 0 },
      co = Te(
        {
          start: function (t) {
            return Je.start(t);
          },
          set: function (t) {
            var e = t.interaction,
              r = t.state,
              n = t.rect,
              o = t.edges,
              l = r.options;
            if (o) {
              var u = Yt(_e(l.min, e, t.coords)) || ao,
                p = Yt(_e(l.max, e, t.coords)) || lo;
              ((r.options = { endOnly: l.endOnly, inner: H({}, Je.noInner), outer: H({}, Je.noOuter) }),
                o.top
                  ? ((r.options.inner.top = n.bottom - u.height), (r.options.outer.top = n.bottom - p.height))
                  : o.bottom &&
                    ((r.options.inner.bottom = n.top + u.height), (r.options.outer.bottom = n.top + p.height)),
                o.left
                  ? ((r.options.inner.left = n.right - u.width), (r.options.outer.left = n.right - p.width))
                  : o.right && ((r.options.inner.right = n.left + u.width), (r.options.outer.right = n.left + p.width)),
                Je.set(t),
                (r.options = l));
            }
          },
          defaults: { min: null, max: null, endOnly: !1, enabled: !1 },
        },
        "restrictSize"
      ),
      pr = {
        start: function (t) {
          var e,
            r = t.interaction,
            n = t.interactable,
            o = t.element,
            l = t.rect,
            u = t.state,
            p = t.startOffset,
            h = u.options,
            g = h.offsetWithOrigin
              ? (function (S) {
                  var M = S.interaction.element,
                    _ = st(Ue(S.state.options.origin, null, null, [M])),
                    R = _ || Ge(S.interactable, M, S.interaction.prepared.name);
                  return R;
                })(t)
              : { x: 0, y: 0 };
          if (h.offset === "startCoords") e = { x: r.coords.start.page.x, y: r.coords.start.page.y };
          else {
            var v = Ue(h.offset, n, o, [r]);
            (((e = st(v) || { x: 0, y: 0 }).x += g.x), (e.y += g.y));
          }
          var y = h.relativePoints;
          u.offsets =
            l && y && y.length
              ? y.map(function (S, M) {
                  return {
                    index: M,
                    relativePoint: S,
                    x: p.left - l.width * S.x + e.x,
                    y: p.top - l.height * S.y + e.y,
                  };
                })
              : [{ index: 0, relativePoint: null, x: e.x, y: e.y }];
        },
        set: function (t) {
          var e = t.interaction,
            r = t.coords,
            n = t.state,
            o = n.options,
            l = n.offsets,
            u = Ge(e.interactable, e.element, e.prepared.name),
            p = H({}, r),
            h = [];
          o.offsetWithOrigin || ((p.x -= u.x), (p.y -= u.y));
          for (var g = 0, v = l; g < v.length; g++)
            for (var y = v[g], S = p.x - y.x, M = p.y - y.y, _ = 0, R = o.targets.length; _ < R; _++) {
              var j = o.targets[_],
                z = void 0;
              (z = x.func(j) ? j(S, M, e._proxy, y, _) : j) &&
                h.push({
                  x: (x.number(z.x) ? z.x : S) + y.x,
                  y: (x.number(z.y) ? z.y : M) + y.y,
                  range: x.number(z.range) ? z.range : o.range,
                  source: j,
                  index: _,
                  offset: y,
                });
            }
          for (
            var W = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, U = 0;
            U < h.length;
            U++
          ) {
            var X = h[U],
              F = X.range,
              G = X.x - p.x,
              te = X.y - p.y,
              J = Ye(G, te),
              ne = J <= F;
            (F === 1 / 0 && W.inRange && W.range !== 1 / 0 && (ne = !1),
              (W.target &&
                !(ne
                  ? W.inRange && F !== 1 / 0
                    ? J / F < W.distance / W.range
                    : (F === 1 / 0 && W.range !== 1 / 0) || J < W.distance
                  : !W.inRange && J < W.distance)) ||
                ((W.target = X), (W.distance = J), (W.range = F), (W.inRange = ne), (W.delta.x = G), (W.delta.y = te)));
          }
          return (W.inRange && ((r.x = W.target.x), (r.y = W.target.y)), (n.closest = W), W);
        },
        defaults: {
          range: 1 / 0,
          targets: null,
          offset: null,
          offsetWithOrigin: !0,
          origin: null,
          relativePoints: null,
          endOnly: !1,
          enabled: !1,
        },
      },
      uo = Te(pr, "snap"),
      bt = {
        start: function (t) {
          var e = t.state,
            r = t.edges,
            n = e.options;
          if (!r) return null;
          ((t.state = {
            options: {
              targets: null,
              relativePoints: [{ x: r.left ? 0 : 1, y: r.top ? 0 : 1 }],
              offset: n.offset || "self",
              origin: { x: 0, y: 0 },
              range: n.range,
            },
          }),
            (e.targetFields = e.targetFields || [
              ["width", "height"],
              ["x", "y"],
            ]),
            pr.start(t),
            (e.offsets = t.state.offsets),
            (t.state = e));
        },
        set: function (t) {
          var e = t.interaction,
            r = t.state,
            n = t.coords,
            o = r.options,
            l = r.offsets,
            u = { x: n.x - l[0].x, y: n.y - l[0].y };
          ((r.options = H({}, o)), (r.options.targets = []));
          for (var p = 0, h = o.targets || []; p < h.length; p++) {
            var g = h[p],
              v = void 0;
            if ((v = x.func(g) ? g(u.x, u.y, e) : g)) {
              for (var y = 0, S = r.targetFields; y < S.length; y++) {
                var M = S[y],
                  _ = M[0],
                  R = M[1];
                if (_ in v || R in v) {
                  ((v.x = v[_]), (v.y = v[R]));
                  break;
                }
              }
              r.options.targets.push(v);
            }
          }
          var j = pr.set(t);
          return ((r.options = o), j);
        },
        defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 },
      },
      po = Te(bt, "snapSize"),
      hr = {
        aspectRatio: ro,
        restrictEdges: io,
        restrict: no,
        restrictRect: oo,
        restrictSize: co,
        snapEdges: Te(
          {
            start: function (t) {
              var e = t.edges;
              return e
                ? ((t.state.targetFields = t.state.targetFields || [
                    [e.left ? "left" : "right", e.top ? "top" : "bottom"],
                  ]),
                  bt.start(t))
                : null;
            },
            set: bt.set,
            defaults: H(De(bt.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }),
          },
          "snapEdges"
        ),
        snap: uo,
        snapSize: po,
        spring: mt,
        avoid: mt,
        transform: mt,
        rubberband: mt,
      },
      ho = {
        id: "modifiers",
        install: function (t) {
          var e = t.interactStatic;
          for (var r in (t.usePlugin(yn), t.usePlugin(Js), (e.modifiers = hr), hr)) {
            var n = hr[r],
              o = n._defaults,
              l = n._methods;
            ((o._methods = l), (t.defaults.perAction[r] = o));
          }
        },
      },
      fo = ho,
      Ln = (function (t) {
        O(r, t);
        var e = E(r);
        function r(n, o, l, u, p, h) {
          var g;
          if (
            (d(this, r),
            at(T((g = e.call(this, p))), l),
            l !== o && at(T(g), o),
            (g.timeStamp = h),
            (g.originalEvent = l),
            (g.type = n),
            (g.pointerId = Ke(o)),
            (g.pointerType = en(o)),
            (g.target = u),
            (g.currentTarget = null),
            n === "tap")
          ) {
            var v = p.getPointerIndex(o);
            g.dt = g.timeStamp - p.pointers[v].downTime;
            var y = g.timeStamp - p.tapTime;
            g.double = !!p.prevTap && p.prevTap.type !== "doubletap" && p.prevTap.target === g.target && y < 500;
          } else n === "doubletap" && ((g.dt = o.timeStamp - p.tapTime), (g.double = !0));
          return g;
        }
        return (
          b(r, [
            {
              key: "_subtractOrigin",
              value: function (n) {
                var o = n.x,
                  l = n.y;
                return ((this.pageX -= o), (this.pageY -= l), (this.clientX -= o), (this.clientY -= l), this);
              },
            },
            {
              key: "_addOrigin",
              value: function (n) {
                var o = n.x,
                  l = n.y;
                return ((this.pageX += o), (this.pageY += l), (this.clientX += o), (this.clientY += l), this);
              },
            },
            {
              key: "preventDefault",
              value: function () {
                this.originalEvent.preventDefault();
              },
            },
          ]),
          r
        );
      })(ut),
      Qe = {
        id: "pointer-events/base",
        before: ["inertia", "modifiers", "auto-start", "actions"],
        install: function (t) {
          ((t.pointerEvents = Qe),
            (t.defaults.actions.pointerEvents = Qe.defaults),
            H(t.actions.phaselessTypes, Qe.types));
        },
        listeners: {
          "interactions:new": function (t) {
            var e = t.interaction;
            ((e.prevTap = null), (e.tapTime = 0));
          },
          "interactions:update-pointer": function (t) {
            var e = t.down,
              r = t.pointerInfo;
            (!e && r.hold) || (r.hold = { duration: 1 / 0, timeout: null });
          },
          "interactions:move": function (t, e) {
            var r = t.interaction,
              n = t.pointer,
              o = t.event,
              l = t.eventTarget;
            t.duplicate ||
              (r.pointerIsDown && !r.pointerWasMoved) ||
              (r.pointerIsDown && dr(t), xe({ interaction: r, pointer: n, event: o, eventTarget: l, type: "move" }, e));
          },
          "interactions:down": function (t, e) {
            ((function (r, n) {
              for (
                var o = r.interaction,
                  l = r.pointer,
                  u = r.event,
                  p = r.eventTarget,
                  h = r.pointerIndex,
                  g = o.pointers[h].hold,
                  v = Kr(p),
                  y = {
                    interaction: o,
                    pointer: l,
                    event: u,
                    eventTarget: p,
                    type: "hold",
                    targets: [],
                    path: v,
                    node: null,
                  },
                  S = 0;
                S < v.length;
                S++
              ) {
                var M = v[S];
                ((y.node = M), n.fire("pointerEvents:collect-targets", y));
              }
              if (y.targets.length) {
                for (var _ = 1 / 0, R = 0, j = y.targets; R < j.length; R++) {
                  var z = j[R].eventable.options.holdDuration;
                  z < _ && (_ = z);
                }
                ((g.duration = _),
                  (g.timeout = setTimeout(function () {
                    xe({ interaction: o, eventTarget: p, pointer: l, event: u, type: "hold" }, n);
                  }, _)));
              }
            })(t, e),
              xe(t, e));
          },
          "interactions:up": function (t, e) {
            (dr(t),
              xe(t, e),
              (function (r, n) {
                var o = r.interaction,
                  l = r.pointer,
                  u = r.event,
                  p = r.eventTarget;
                o.pointerWasMoved || xe({ interaction: o, eventTarget: p, pointer: l, event: u, type: "tap" }, n);
              })(t, e));
          },
          "interactions:cancel": function (t, e) {
            (dr(t), xe(t, e));
          },
        },
        PointerEvent: Ln,
        fire: xe,
        collectEventTargets: Wn,
        defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } },
        types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 },
      };
    function xe(t, e) {
      var r = t.interaction,
        n = t.pointer,
        o = t.event,
        l = t.eventTarget,
        u = t.type,
        p = t.targets,
        h = p === void 0 ? Wn(t, e) : p,
        g = new Ln(u, n, o, l, r, e.now());
      e.fire("pointerEvents:new", { pointerEvent: g });
      for (
        var v = { interaction: r, pointer: n, event: o, eventTarget: l, targets: h, type: u, pointerEvent: g }, y = 0;
        y < h.length;
        y++
      ) {
        var S = h[y];
        for (var M in S.props || {}) g[M] = S.props[M];
        var _ = Ge(S.eventable, S.node);
        if (
          (g._subtractOrigin(_),
          (g.eventable = S.eventable),
          (g.currentTarget = S.node),
          S.eventable.fire(g),
          g._addOrigin(_),
          g.immediatePropagationStopped ||
            (g.propagationStopped && y + 1 < h.length && h[y + 1].node !== g.currentTarget))
        )
          break;
      }
      if ((e.fire("pointerEvents:fired", v), u === "tap")) {
        var R = g.double ? xe({ interaction: r, pointer: n, event: o, eventTarget: l, type: "doubletap" }, e) : g;
        ((r.prevTap = R), (r.tapTime = R.timeStamp));
      }
      return g;
    }
    function Wn(t, e) {
      var r = t.interaction,
        n = t.pointer,
        o = t.event,
        l = t.eventTarget,
        u = t.type,
        p = r.getPointerIndex(n),
        h = r.pointers[p];
      if (u === "tap" && (r.pointerWasMoved || !h || h.downTarget !== l)) return [];
      for (
        var g = Kr(l),
          v = { interaction: r, pointer: n, event: o, eventTarget: l, type: u, path: g, targets: [], node: null },
          y = 0;
        y < g.length;
        y++
      ) {
        var S = g[y];
        ((v.node = S), e.fire("pointerEvents:collect-targets", v));
      }
      return (
        u === "hold" &&
          (v.targets = v.targets.filter(function (M) {
            var _, R;
            return (
              M.eventable.options.holdDuration ===
              ((_ = r.pointers[p]) == null || (R = _.hold) == null ? void 0 : R.duration)
            );
          })),
        v.targets
      );
    }
    function dr(t) {
      var e = t.interaction,
        r = t.pointerIndex,
        n = e.pointers[r].hold;
      n && n.timeout && (clearTimeout(n.timeout), (n.timeout = null));
    }
    var vo = Object.freeze({ __proto__: null, default: Qe });
    function mo(t) {
      var e = t.interaction;
      e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), (e.holdIntervalHandle = null));
    }
    var go = {
        id: "pointer-events/holdRepeat",
        install: function (t) {
          t.usePlugin(Qe);
          var e = t.pointerEvents;
          ((e.defaults.holdRepeatInterval = 0), (e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0));
        },
        listeners: ["move", "up", "cancel", "endall"].reduce(
          function (t, e) {
            return ((t["pointerEvents:".concat(e)] = mo), t);
          },
          {
            "pointerEvents:new": function (t) {
              var e = t.pointerEvent;
              e.type === "hold" && (e.count = (e.count || 0) + 1);
            },
            "pointerEvents:fired": function (t, e) {
              var r = t.interaction,
                n = t.pointerEvent,
                o = t.eventTarget,
                l = t.targets;
              if (n.type === "hold" && l.length) {
                var u = l[0].eventable.options.holdRepeatInterval;
                u <= 0 ||
                  (r.holdIntervalHandle = setTimeout(function () {
                    e.pointerEvents.fire({ interaction: r, eventTarget: o, type: "hold", pointer: n, event: n }, e);
                  }, u));
              }
            },
          }
        ),
      },
      bo = go,
      yo = {
        id: "pointer-events/interactableTargets",
        install: function (t) {
          var e = t.Interactable;
          e.prototype.pointerEvents = function (n) {
            return (H(this.events.options, n), this);
          };
          var r = e.prototype._backCompatOption;
          e.prototype._backCompatOption = function (n, o) {
            var l = r.call(this, n, o);
            return (l === this && (this.events.options[n] = o), l);
          };
        },
        listeners: {
          "pointerEvents:collect-targets": function (t, e) {
            var r = t.targets,
              n = t.node,
              o = t.type,
              l = t.eventTarget;
            e.interactables.forEachMatch(n, function (u) {
              var p = u.events,
                h = p.options;
              p.types[o] &&
                p.types[o].length &&
                u.testIgnoreAllow(h, n, l) &&
                r.push({ node: n, eventable: p, props: { interactable: u } });
            });
          },
          "interactable:new": function (t) {
            var e = t.interactable;
            e.events.getRect = function (r) {
              return e.getRect(r);
            };
          },
          "interactable:set": function (t, e) {
            var r = t.interactable,
              n = t.options;
            (H(r.events.options, e.pointerEvents.defaults), H(r.events.options, n.pointerEvents || {}));
          },
        },
      },
      To = yo,
      wo = {
        id: "pointer-events",
        install: function (t) {
          (t.usePlugin(vo), t.usePlugin(bo), t.usePlugin(To));
        },
      },
      xo = wo,
      So = {
        id: "reflow",
        install: function (t) {
          var e = t.Interactable;
          ((t.actions.phases.reflow = !0),
            (e.prototype.reflow = function (r) {
              return (function (n, o, l) {
                for (
                  var u = n.getAllElements(),
                    p = l.window.Promise,
                    h = p ? [] : null,
                    g = function () {
                      var y = u[v],
                        S = n.getRect(y);
                      if (!S) return 1;
                      var M,
                        _ = Be(l.interactions.list, function (z) {
                          return (
                            z.interacting() && z.interactable === n && z.element === y && z.prepared.name === o.name
                          );
                        });
                      if (_)
                        (_.move(),
                          h &&
                            (M =
                              _._reflowPromise ||
                              new p(function (z) {
                                _._reflowResolve = z;
                              })));
                      else {
                        var R = Yt(S),
                          j = /* @__PURE__ */ (function (z) {
                            return {
                              coords: z,
                              get page() {
                                return this.coords.page;
                              },
                              get client() {
                                return this.coords.client;
                              },
                              get timeStamp() {
                                return this.coords.timeStamp;
                              },
                              get pageX() {
                                return this.coords.page.x;
                              },
                              get pageY() {
                                return this.coords.page.y;
                              },
                              get clientX() {
                                return this.coords.client.x;
                              },
                              get clientY() {
                                return this.coords.client.y;
                              },
                              get pointerId() {
                                return this.coords.pointerId;
                              },
                              get target() {
                                return this.coords.target;
                              },
                              get type() {
                                return this.coords.type;
                              },
                              get pointerType() {
                                return this.coords.pointerType;
                              },
                              get buttons() {
                                return this.coords.buttons;
                              },
                              preventDefault: function () {},
                            };
                          })({ page: { x: R.x, y: R.y }, client: { x: R.x, y: R.y }, timeStamp: l.now() });
                        M = (function (z, W, U, X, F) {
                          var G = z.interactions.new({ pointerType: "reflow" }),
                            te = { interaction: G, event: F, pointer: F, eventTarget: U, phase: "reflow" };
                          ((G.interactable = W),
                            (G.element = U),
                            (G.prevEvent = F),
                            G.updatePointer(F, F, U, !0),
                            qr(G.coords.delta),
                            tr(G.prepared, X),
                            G._doPhase(te));
                          var J = z.window,
                            ne = J.Promise,
                            ce = ne
                              ? new ne(function (fe) {
                                  G._reflowResolve = fe;
                                })
                              : void 0;
                          return (
                            (G._reflowPromise = ce),
                            G.start(X, W, U),
                            G._interacting ? (G.move(te), G.end(F)) : (G.stop(), G._reflowResolve()),
                            G.removePointer(F, F),
                            ce
                          );
                        })(l, n, y, o, j);
                      }
                      h && h.push(M);
                    },
                    v = 0;
                  v < u.length && !g();
                  v++
                );
                return (
                  h &&
                  p.all(h).then(function () {
                    return n;
                  })
                );
              })(this, r, t);
            }));
        },
        listeners: {
          "interactions:stop": function (t, e) {
            var r = t.interaction;
            r.pointerType === "reflow" &&
              (r._reflowResolve && r._reflowResolve(),
              (function (n, o) {
                n.splice(n.indexOf(o), 1);
              })(e.interactions.list, r));
          },
        },
      },
      Oo = So;
    if (
      (ee.use(bn),
      ee.use(On),
      ee.use(xo),
      ee.use(Hs),
      ee.use(fo),
      ee.use(_s),
      ee.use(gs),
      ee.use(ys),
      ee.use(Oo),
      (ee.default = ee),
      f(a) === "object" && a)
    )
      try {
        a.exports = ee;
      } catch {}
    return ((ee.default = ee), ee);
  });
})(Pt, Pt.exports);
var Eo = Pt.exports;
const fr = /* @__PURE__ */ Re(Eo);
var Oi = { exports: {} };
(function (a, i) {
  (function (s, c) {
    a.exports = c();
  })(me, function () {
    var s = "minute",
      c = /[+-]\d\d(?::?\d\d)?/g,
      f = /([+-]|\d\d)/g;
    return function (d, m, b) {
      var w = m.prototype;
      ((b.utc = function (C) {
        var D = { date: C, utc: !0, args: arguments };
        return new m(D);
      }),
        (w.utc = function (C) {
          var D = b(this.toDate(), { locale: this.$L, utc: !0 });
          return C ? D.add(this.utcOffset(), s) : D;
        }),
        (w.local = function () {
          return b(this.toDate(), { locale: this.$L, utc: !1 });
        }));
      var O = w.parse;
      w.parse = function (C) {
        (C.utc && (this.$u = !0), this.$utils().u(C.$offset) || (this.$offset = C.$offset), O.call(this, C));
      };
      var k = w.init;
      w.init = function () {
        if (this.$u) {
          var C = this.$d;
          ((this.$y = C.getUTCFullYear()),
            (this.$M = C.getUTCMonth()),
            (this.$D = C.getUTCDate()),
            (this.$W = C.getUTCDay()),
            (this.$H = C.getUTCHours()),
            (this.$m = C.getUTCMinutes()),
            (this.$s = C.getUTCSeconds()),
            (this.$ms = C.getUTCMilliseconds()));
        } else k.call(this);
      };
      var I = w.utcOffset;
      w.utcOffset = function (C, D) {
        var A = this.$utils().u;
        if (A(C)) return this.$u ? 0 : A(this.$offset) ? I.call(this) : this.$offset;
        if (
          typeof C == "string" &&
          ((C = (function (V) {
            V === void 0 && (V = "");
            var re = V.match(c);
            if (!re) return null;
            var x = ("" + re[0]).match(f) || ["-", 0, 0],
              Oe = x[0],
              ae = 60 * +x[1] + +x[2];
            return ae === 0 ? 0 : Oe === "+" ? ae : -ae;
          })(C)),
          C === null)
        )
          return this;
        var L = Math.abs(C) <= 16 ? 60 * C : C;
        if (L === 0) return this.utc(D);
        var K = this.clone();
        if (D) return ((K.$offset = L), (K.$u = !1), K);
        var B = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return (((K = this.local().add(L + B, s)).$offset = L), (K.$x.$localOffset = B), K);
      };
      var T = w.format;
      ((w.format = function (C) {
        var D = C || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return T.call(this, D);
      }),
        (w.valueOf = function () {
          var C = this.$utils().u(this.$offset)
            ? 0
            : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * C;
        }),
        (w.isUTC = function () {
          return !!this.$u;
        }),
        (w.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (w.toString = function () {
          return this.toDate().toUTCString();
        }));
      var E = w.toDate;
      w.toDate = function (C) {
        return C === "s" && this.$offset ? b(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : E.call(this);
      };
      var P = w.diff;
      w.diff = function (C, D, A) {
        if (C && this.$u === C.$u) return P.call(this, C, D, A);
        var L = this.local(),
          K = b(C).local();
        return P.call(L, K, D, A);
      };
    };
  });
})(Oi);
var Po = Oi.exports;
const _o = /* @__PURE__ */ Re(Po);
function Io() {
  ((this.__data__ = []), (this.size = 0));
}
var Mo = Io;
function Ro(a, i) {
  return a === i || (a !== a && i !== i);
}
var Ci = Ro,
  ko = Ci;
function zo(a, i) {
  for (var s = a.length; s--; ) if (ko(a[s][0], i)) return s;
  return -1;
}
var zt = zo,
  Do = zt,
  $o = Array.prototype,
  jo = $o.splice;
function Ao(a) {
  var i = this.__data__,
    s = Do(i, a);
  if (s < 0) return !1;
  var c = i.length - 1;
  return (s == c ? i.pop() : jo.call(i, s, 1), --this.size, !0);
}
var Lo = Ao,
  Wo = zt;
function Ho(a) {
  var i = this.__data__,
    s = Wo(i, a);
  return s < 0 ? void 0 : i[s][1];
}
var Fo = Ho,
  No = zt;
function Uo(a) {
  return No(this.__data__, a) > -1;
}
var Go = Uo,
  Yo = zt;
function Ko(a, i) {
  var s = this.__data__,
    c = Yo(s, a);
  return (c < 0 ? (++this.size, s.push([a, i])) : (s[c][1] = i), this);
}
var Xo = Ko,
  Bo = Mo,
  Vo = Lo,
  qo = Fo,
  Zo = Go,
  Jo = Xo;
function Ae(a) {
  var i = -1,
    s = a == null ? 0 : a.length;
  for (this.clear(); ++i < s; ) {
    var c = a[i];
    this.set(c[0], c[1]);
  }
}
Ae.prototype.clear = Bo;
Ae.prototype.delete = Vo;
Ae.prototype.get = qo;
Ae.prototype.has = Zo;
Ae.prototype.set = Jo;
var Dt = Ae,
  Qo = Dt;
function ea() {
  ((this.__data__ = new Qo()), (this.size = 0));
}
var ta = ea;
function ra(a) {
  var i = this.__data__,
    s = i.delete(a);
  return ((this.size = i.size), s);
}
var na = ra;
function ia(a) {
  return this.__data__.get(a);
}
var sa = ia;
function oa(a) {
  return this.__data__.has(a);
}
var aa = oa,
  la = typeof me == "object" && me && me.Object === Object && me,
  Ei = la,
  ca = Ei,
  ua = typeof self == "object" && self && self.Object === Object && self,
  pa = ca || ua || Function("return this")(),
  ge = pa,
  ha = ge,
  da = ha.Symbol,
  Pr = da,
  Fn = Pr,
  Pi = Object.prototype,
  fa = Pi.hasOwnProperty,
  va = Pi.toString,
  tt = Fn ? Fn.toStringTag : void 0;
function ma(a) {
  var i = fa.call(a, tt),
    s = a[tt];
  try {
    a[tt] = void 0;
    var c = !0;
  } catch {}
  var f = va.call(a);
  return (c && (i ? (a[tt] = s) : delete a[tt]), f);
}
var ga = ma,
  ba = Object.prototype,
  ya = ba.toString;
function Ta(a) {
  return ya.call(a);
}
var wa = Ta,
  Nn = Pr,
  xa = ga,
  Sa = wa,
  Oa = "[object Null]",
  Ca = "[object Undefined]",
  Un = Nn ? Nn.toStringTag : void 0;
function Ea(a) {
  return a == null ? (a === void 0 ? Ca : Oa) : Un && Un in Object(a) ? xa(a) : Sa(a);
}
var $t = Ea;
function Pa(a) {
  var i = typeof a;
  return a != null && (i == "object" || i == "function");
}
var _i = Pa,
  _a = $t,
  Ia = _i,
  Ma = "[object AsyncFunction]",
  Ra = "[object Function]",
  ka = "[object GeneratorFunction]",
  za = "[object Proxy]";
function Da(a) {
  if (!Ia(a)) return !1;
  var i = _a(a);
  return i == Ra || i == ka || i == Ma || i == za;
}
var Ii = Da,
  $a = ge,
  ja = $a["__core-js_shared__"],
  Aa = ja,
  vr = Aa,
  Gn = (function () {
    var a = /[^.]+$/.exec((vr && vr.keys && vr.keys.IE_PROTO) || "");
    return a ? "Symbol(src)_1." + a : "";
  })();
function La(a) {
  return !!Gn && Gn in a;
}
var Wa = La,
  Ha = Function.prototype,
  Fa = Ha.toString;
function Na(a) {
  if (a != null) {
    try {
      return Fa.call(a);
    } catch {}
    try {
      return a + "";
    } catch {}
  }
  return "";
}
var Mi = Na,
  Ua = Ii,
  Ga = Wa,
  Ya = _i,
  Ka = Mi,
  Xa = /[\\^$.*+?()[\]{}|]/g,
  Ba = /^\[object .+?Constructor\]$/,
  Va = Function.prototype,
  qa = Object.prototype,
  Za = Va.toString,
  Ja = qa.hasOwnProperty,
  Qa = RegExp(
    "^" +
      Za.call(Ja)
        .replace(Xa, "\\$&")
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
      "$"
  );
function el(a) {
  if (!Ya(a) || Ga(a)) return !1;
  var i = Ua(a) ? Qa : Ba;
  return i.test(Ka(a));
}
var tl = el;
function rl(a, i) {
  return a == null ? void 0 : a[i];
}
var nl = rl,
  il = tl,
  sl = nl;
function ol(a, i) {
  var s = sl(a, i);
  return il(s) ? s : void 0;
}
var Le = ol,
  al = Le,
  ll = ge,
  cl = al(ll, "Map"),
  _r = cl,
  ul = Le,
  pl = ul(Object, "create"),
  jt = pl,
  Yn = jt;
function hl() {
  ((this.__data__ = Yn ? Yn(null) : {}), (this.size = 0));
}
var dl = hl;
function fl(a) {
  var i = this.has(a) && delete this.__data__[a];
  return ((this.size -= i ? 1 : 0), i);
}
var vl = fl,
  ml = jt,
  gl = "__lodash_hash_undefined__",
  bl = Object.prototype,
  yl = bl.hasOwnProperty;
function Tl(a) {
  var i = this.__data__;
  if (ml) {
    var s = i[a];
    return s === gl ? void 0 : s;
  }
  return yl.call(i, a) ? i[a] : void 0;
}
var wl = Tl,
  xl = jt,
  Sl = Object.prototype,
  Ol = Sl.hasOwnProperty;
function Cl(a) {
  var i = this.__data__;
  return xl ? i[a] !== void 0 : Ol.call(i, a);
}
var El = Cl,
  Pl = jt,
  _l = "__lodash_hash_undefined__";
function Il(a, i) {
  var s = this.__data__;
  return ((this.size += this.has(a) ? 0 : 1), (s[a] = Pl && i === void 0 ? _l : i), this);
}
var Ml = Il,
  Rl = dl,
  kl = vl,
  zl = wl,
  Dl = El,
  $l = Ml;
function We(a) {
  var i = -1,
    s = a == null ? 0 : a.length;
  for (this.clear(); ++i < s; ) {
    var c = a[i];
    this.set(c[0], c[1]);
  }
}
We.prototype.clear = Rl;
We.prototype.delete = kl;
We.prototype.get = zl;
We.prototype.has = Dl;
We.prototype.set = $l;
var jl = We,
  Kn = jl,
  Al = Dt,
  Ll = _r;
function Wl() {
  ((this.size = 0),
    (this.__data__ = {
      hash: new Kn(),
      map: new (Ll || Al)(),
      string: new Kn(),
    }));
}
var Hl = Wl;
function Fl(a) {
  var i = typeof a;
  return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? a !== "__proto__" : a === null;
}
var Nl = Fl,
  Ul = Nl;
function Gl(a, i) {
  var s = a.__data__;
  return Ul(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
}
var At = Gl,
  Yl = At;
function Kl(a) {
  var i = Yl(this, a).delete(a);
  return ((this.size -= i ? 1 : 0), i);
}
var Xl = Kl,
  Bl = At;
function Vl(a) {
  return Bl(this, a).get(a);
}
var ql = Vl,
  Zl = At;
function Jl(a) {
  return Zl(this, a).has(a);
}
var Ql = Jl,
  ec = At;
function tc(a, i) {
  var s = ec(this, a),
    c = s.size;
  return (s.set(a, i), (this.size += s.size == c ? 0 : 1), this);
}
var rc = tc,
  nc = Hl,
  ic = Xl,
  sc = ql,
  oc = Ql,
  ac = rc;
function He(a) {
  var i = -1,
    s = a == null ? 0 : a.length;
  for (this.clear(); ++i < s; ) {
    var c = a[i];
    this.set(c[0], c[1]);
  }
}
He.prototype.clear = nc;
He.prototype.delete = ic;
He.prototype.get = sc;
He.prototype.has = oc;
He.prototype.set = ac;
var Ri = He,
  lc = Dt,
  cc = _r,
  uc = Ri,
  pc = 200;
function hc(a, i) {
  var s = this.__data__;
  if (s instanceof lc) {
    var c = s.__data__;
    if (!cc || c.length < pc - 1) return (c.push([a, i]), (this.size = ++s.size), this);
    s = this.__data__ = new uc(c);
  }
  return (s.set(a, i), (this.size = s.size), this);
}
var dc = hc,
  fc = Dt,
  vc = ta,
  mc = na,
  gc = sa,
  bc = aa,
  yc = dc;
function Fe(a) {
  var i = (this.__data__ = new fc(a));
  this.size = i.size;
}
Fe.prototype.clear = vc;
Fe.prototype.delete = mc;
Fe.prototype.get = gc;
Fe.prototype.has = bc;
Fe.prototype.set = yc;
var Tc = Fe,
  wc = "__lodash_hash_undefined__";
function xc(a) {
  return (this.__data__.set(a, wc), this);
}
var Sc = xc;
function Oc(a) {
  return this.__data__.has(a);
}
var Cc = Oc,
  Ec = Ri,
  Pc = Sc,
  _c = Cc;
function _t(a) {
  var i = -1,
    s = a == null ? 0 : a.length;
  for (this.__data__ = new Ec(); ++i < s; ) this.add(a[i]);
}
_t.prototype.add = _t.prototype.push = Pc;
_t.prototype.has = _c;
var Ic = _t;
function Mc(a, i) {
  for (var s = -1, c = a == null ? 0 : a.length; ++s < c; ) if (i(a[s], s, a)) return !0;
  return !1;
}
var Rc = Mc;
function kc(a, i) {
  return a.has(i);
}
var zc = kc,
  Dc = Ic,
  $c = Rc,
  jc = zc,
  Ac = 1,
  Lc = 2;
function Wc(a, i, s, c, f, d) {
  var m = s & Ac,
    b = a.length,
    w = i.length;
  if (b != w && !(m && w > b)) return !1;
  var O = d.get(a),
    k = d.get(i);
  if (O && k) return O == i && k == a;
  var I = -1,
    T = !0,
    E = s & Lc ? new Dc() : void 0;
  for (d.set(a, i), d.set(i, a); ++I < b; ) {
    var P = a[I],
      C = i[I];
    if (c) var D = m ? c(C, P, I, i, a, d) : c(P, C, I, a, i, d);
    if (D !== void 0) {
      if (D) continue;
      T = !1;
      break;
    }
    if (E) {
      if (
        !$c(i, function (A, L) {
          if (!jc(E, L) && (P === A || f(P, A, s, c, d))) return E.push(L);
        })
      ) {
        T = !1;
        break;
      }
    } else if (!(P === C || f(P, C, s, c, d))) {
      T = !1;
      break;
    }
  }
  return (d.delete(a), d.delete(i), T);
}
var ki = Wc,
  Hc = ge,
  Fc = Hc.Uint8Array,
  Nc = Fc;
function Uc(a) {
  var i = -1,
    s = Array(a.size);
  return (
    a.forEach(function (c, f) {
      s[++i] = [f, c];
    }),
    s
  );
}
var Gc = Uc;
function Yc(a) {
  var i = -1,
    s = Array(a.size);
  return (
    a.forEach(function (c) {
      s[++i] = c;
    }),
    s
  );
}
var Kc = Yc,
  Xn = Pr,
  Bn = Nc,
  Xc = Ci,
  Bc = ki,
  Vc = Gc,
  qc = Kc,
  Zc = 1,
  Jc = 2,
  Qc = "[object Boolean]",
  eu = "[object Date]",
  tu = "[object Error]",
  ru = "[object Map]",
  nu = "[object Number]",
  iu = "[object RegExp]",
  su = "[object Set]",
  ou = "[object String]",
  au = "[object Symbol]",
  lu = "[object ArrayBuffer]",
  cu = "[object DataView]",
  Vn = Xn ? Xn.prototype : void 0,
  mr = Vn ? Vn.valueOf : void 0;
function uu(a, i, s, c, f, d, m) {
  switch (s) {
    case cu:
      if (a.byteLength != i.byteLength || a.byteOffset != i.byteOffset) return !1;
      ((a = a.buffer), (i = i.buffer));
    case lu:
      return !(a.byteLength != i.byteLength || !d(new Bn(a), new Bn(i)));
    case Qc:
    case eu:
    case nu:
      return Xc(+a, +i);
    case tu:
      return a.name == i.name && a.message == i.message;
    case iu:
    case ou:
      return a == i + "";
    case ru:
      var b = Vc;
    case su:
      var w = c & Zc;
      if ((b || (b = qc), a.size != i.size && !w)) return !1;
      var O = m.get(a);
      if (O) return O == i;
      ((c |= Jc), m.set(a, i));
      var k = Bc(b(a), b(i), c, f, d, m);
      return (m.delete(a), k);
    case au:
      if (mr) return mr.call(a) == mr.call(i);
  }
  return !1;
}
var pu = uu;
function hu(a, i) {
  for (var s = -1, c = i.length, f = a.length; ++s < c; ) a[f + s] = i[s];
  return a;
}
var du = hu,
  fu = Array.isArray,
  Ir = fu,
  vu = du,
  mu = Ir;
function gu(a, i, s) {
  var c = i(a);
  return mu(a) ? c : vu(c, s(a));
}
var bu = gu;
function yu(a, i) {
  for (var s = -1, c = a == null ? 0 : a.length, f = 0, d = []; ++s < c; ) {
    var m = a[s];
    i(m, s, a) && (d[f++] = m);
  }
  return d;
}
var Tu = yu;
function wu() {
  return [];
}
var xu = wu,
  Su = Tu,
  Ou = xu,
  Cu = Object.prototype,
  Eu = Cu.propertyIsEnumerable,
  qn = Object.getOwnPropertySymbols,
  Pu = qn
    ? function (a) {
        return a == null
          ? []
          : ((a = Object(a)),
            Su(qn(a), function (i) {
              return Eu.call(a, i);
            }));
      }
    : Ou,
  _u = Pu;
function Iu(a, i) {
  for (var s = -1, c = Array(a); ++s < a; ) c[s] = i(s);
  return c;
}
var Mu = Iu;
function Ru(a) {
  return a != null && typeof a == "object";
}
var Lt = Ru,
  ku = $t,
  zu = Lt,
  Du = "[object Arguments]";
function $u(a) {
  return zu(a) && ku(a) == Du;
}
var ju = $u,
  Zn = ju,
  Au = Lt,
  zi = Object.prototype,
  Lu = zi.hasOwnProperty,
  Wu = zi.propertyIsEnumerable,
  Hu = Zn(
    /* @__PURE__ */ (function () {
      return arguments;
    })()
  )
    ? Zn
    : function (a) {
        return Au(a) && Lu.call(a, "callee") && !Wu.call(a, "callee");
      },
  Fu = Hu,
  It = { exports: {} };
function Nu() {
  return !1;
}
var Uu = Nu;
It.exports;
(function (a, i) {
  var s = ge,
    c = Uu,
    f = i && !i.nodeType && i,
    d = f && !0 && a && !a.nodeType && a,
    m = d && d.exports === f,
    b = m ? s.Buffer : void 0,
    w = b ? b.isBuffer : void 0,
    O = w || c;
  a.exports = O;
})(It, It.exports);
var Di = It.exports,
  Gu = 9007199254740991,
  Yu = /^(?:0|[1-9]\d*)$/;
function Ku(a, i) {
  var s = typeof a;
  return ((i = i ?? Gu), !!i && (s == "number" || (s != "symbol" && Yu.test(a))) && a > -1 && a % 1 == 0 && a < i);
}
var Xu = Ku,
  Bu = 9007199254740991;
function Vu(a) {
  return typeof a == "number" && a > -1 && a % 1 == 0 && a <= Bu;
}
var $i = Vu,
  qu = $t,
  Zu = $i,
  Ju = Lt,
  Qu = "[object Arguments]",
  ep = "[object Array]",
  tp = "[object Boolean]",
  rp = "[object Date]",
  np = "[object Error]",
  ip = "[object Function]",
  sp = "[object Map]",
  op = "[object Number]",
  ap = "[object Object]",
  lp = "[object RegExp]",
  cp = "[object Set]",
  up = "[object String]",
  pp = "[object WeakMap]",
  hp = "[object ArrayBuffer]",
  dp = "[object DataView]",
  fp = "[object Float32Array]",
  vp = "[object Float64Array]",
  mp = "[object Int8Array]",
  gp = "[object Int16Array]",
  bp = "[object Int32Array]",
  yp = "[object Uint8Array]",
  Tp = "[object Uint8ClampedArray]",
  wp = "[object Uint16Array]",
  xp = "[object Uint32Array]",
  q = {};
q[fp] = q[vp] = q[mp] = q[gp] = q[bp] = q[yp] = q[Tp] = q[wp] = q[xp] = !0;
q[Qu] =
  q[ep] =
  q[hp] =
  q[tp] =
  q[dp] =
  q[rp] =
  q[np] =
  q[ip] =
  q[sp] =
  q[op] =
  q[ap] =
  q[lp] =
  q[cp] =
  q[up] =
  q[pp] =
    !1;
function Sp(a) {
  return Ju(a) && Zu(a.length) && !!q[qu(a)];
}
var Op = Sp;
function Cp(a) {
  return function (i) {
    return a(i);
  };
}
var Ep = Cp,
  Mt = { exports: {} };
Mt.exports;
(function (a, i) {
  var s = Ei,
    c = i && !i.nodeType && i,
    f = c && !0 && a && !a.nodeType && a,
    d = f && f.exports === c,
    m = d && s.process,
    b = (function () {
      try {
        var w = f && f.require && f.require("util").types;
        return w || (m && m.binding && m.binding("util"));
      } catch {}
    })();
  a.exports = b;
})(Mt, Mt.exports);
var Pp = Mt.exports,
  _p = Op,
  Ip = Ep,
  Jn = Pp,
  Qn = Jn && Jn.isTypedArray,
  Mp = Qn ? Ip(Qn) : _p,
  ji = Mp,
  Rp = Mu,
  kp = Fu,
  zp = Ir,
  Dp = Di,
  $p = Xu,
  jp = ji,
  Ap = Object.prototype,
  Lp = Ap.hasOwnProperty;
function Wp(a, i) {
  var s = zp(a),
    c = !s && kp(a),
    f = !s && !c && Dp(a),
    d = !s && !c && !f && jp(a),
    m = s || c || f || d,
    b = m ? Rp(a.length, String) : [],
    w = b.length;
  for (var O in a)
    (i || Lp.call(a, O)) &&
      !(
        m && // Safari 9 has enumerable `arguments.length` in strict mode.
        (O == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          (f && (O == "offset" || O == "parent")) || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          (d && (O == "buffer" || O == "byteLength" || O == "byteOffset")) || // Skip index properties.
          $p(O, w))
      ) &&
      b.push(O);
  return b;
}
var Hp = Wp,
  Fp = Object.prototype;
function Np(a) {
  var i = a && a.constructor,
    s = (typeof i == "function" && i.prototype) || Fp;
  return a === s;
}
var Up = Np;
function Gp(a, i) {
  return function (s) {
    return a(i(s));
  };
}
var Yp = Gp,
  Kp = Yp,
  Xp = Kp(Object.keys, Object),
  Bp = Xp,
  Vp = Up,
  qp = Bp,
  Zp = Object.prototype,
  Jp = Zp.hasOwnProperty;
function Qp(a) {
  if (!Vp(a)) return qp(a);
  var i = [];
  for (var s in Object(a)) Jp.call(a, s) && s != "constructor" && i.push(s);
  return i;
}
var eh = Qp,
  th = Ii,
  rh = $i;
function nh(a) {
  return a != null && rh(a.length) && !th(a);
}
var ih = nh,
  sh = Hp,
  oh = eh,
  ah = ih;
function lh(a) {
  return ah(a) ? sh(a) : oh(a);
}
var ch = lh,
  uh = bu,
  ph = _u,
  hh = ch;
function dh(a) {
  return uh(a, hh, ph);
}
var fh = dh,
  ei = fh,
  vh = 1,
  mh = Object.prototype,
  gh = mh.hasOwnProperty;
function bh(a, i, s, c, f, d) {
  var m = s & vh,
    b = ei(a),
    w = b.length,
    O = ei(i),
    k = O.length;
  if (w != k && !m) return !1;
  for (var I = w; I--; ) {
    var T = b[I];
    if (!(m ? T in i : gh.call(i, T))) return !1;
  }
  var E = d.get(a),
    P = d.get(i);
  if (E && P) return E == i && P == a;
  var C = !0;
  (d.set(a, i), d.set(i, a));
  for (var D = m; ++I < w; ) {
    T = b[I];
    var A = a[T],
      L = i[T];
    if (c) var K = m ? c(L, A, T, i, a, d) : c(A, L, T, a, i, d);
    if (!(K === void 0 ? A === L || f(A, L, s, c, d) : K)) {
      C = !1;
      break;
    }
    D || (D = T == "constructor");
  }
  if (C && !D) {
    var B = a.constructor,
      V = i.constructor;
    B != V &&
      "constructor" in a &&
      "constructor" in i &&
      !(typeof B == "function" && B instanceof B && typeof V == "function" && V instanceof V) &&
      (C = !1);
  }
  return (d.delete(a), d.delete(i), C);
}
var yh = bh,
  Th = Le,
  wh = ge,
  xh = Th(wh, "DataView"),
  Sh = xh,
  Oh = Le,
  Ch = ge,
  Eh = Oh(Ch, "Promise"),
  Ph = Eh,
  _h = Le,
  Ih = ge,
  Mh = _h(Ih, "Set"),
  Rh = Mh,
  kh = Le,
  zh = ge,
  Dh = kh(zh, "WeakMap"),
  $h = Dh,
  br = Sh,
  yr = _r,
  Tr = Ph,
  wr = Rh,
  xr = $h,
  Ai = $t,
  Ne = Mi,
  ti = "[object Map]",
  jh = "[object Object]",
  ri = "[object Promise]",
  ni = "[object Set]",
  ii = "[object WeakMap]",
  si = "[object DataView]",
  Ah = Ne(br),
  Lh = Ne(yr),
  Wh = Ne(Tr),
  Hh = Ne(wr),
  Fh = Ne(xr),
  Ie = Ai;
((br && Ie(new br(new ArrayBuffer(1))) != si) ||
  (yr && Ie(new yr()) != ti) ||
  (Tr && Ie(Tr.resolve()) != ri) ||
  (wr && Ie(new wr()) != ni) ||
  (xr && Ie(new xr()) != ii)) &&
  (Ie = function (a) {
    var i = Ai(a),
      s = i == jh ? a.constructor : void 0,
      c = s ? Ne(s) : "";
    if (c)
      switch (c) {
        case Ah:
          return si;
        case Lh:
          return ti;
        case Wh:
          return ri;
        case Hh:
          return ni;
        case Fh:
          return ii;
      }
    return i;
  });
var Nh = Ie,
  gr = Tc,
  Uh = ki,
  Gh = pu,
  Yh = yh,
  oi = Nh,
  ai = Ir,
  li = Di,
  Kh = ji,
  Xh = 1,
  ci = "[object Arguments]",
  ui = "[object Array]",
  Tt = "[object Object]",
  Bh = Object.prototype,
  pi = Bh.hasOwnProperty;
function Vh(a, i, s, c, f, d) {
  var m = ai(a),
    b = ai(i),
    w = m ? ui : oi(a),
    O = b ? ui : oi(i);
  ((w = w == ci ? Tt : w), (O = O == ci ? Tt : O));
  var k = w == Tt,
    I = O == Tt,
    T = w == O;
  if (T && li(a)) {
    if (!li(i)) return !1;
    ((m = !0), (k = !1));
  }
  if (T && !k) return (d || (d = new gr()), m || Kh(a) ? Uh(a, i, s, c, f, d) : Gh(a, i, w, s, c, f, d));
  if (!(s & Xh)) {
    var E = k && pi.call(a, "__wrapped__"),
      P = I && pi.call(i, "__wrapped__");
    if (E || P) {
      var C = E ? a.value() : a,
        D = P ? i.value() : i;
      return (d || (d = new gr()), f(C, D, s, c, d));
    }
  }
  return T ? (d || (d = new gr()), Yh(a, i, s, c, f, d)) : !1;
}
var qh = Vh,
  Zh = qh,
  hi = Lt;
function Li(a, i, s, c, f) {
  return a === i ? !0 : a == null || i == null || (!hi(a) && !hi(i)) ? a !== a && i !== i : Zh(a, i, s, c, Li, f);
}
var Jh = Li,
  Qh = Jh;
function ed(a, i) {
  return Qh(a, i);
}
var td = ed;
const Sr = /* @__PURE__ */ Re(td);
function Y(a, i) {
  return typeof a.get == "function" ? a.get(i) : a[i];
}
function di(a) {
  return typeof a.count == "function" ? a.count() : a.length;
}
function rt(a, i) {
  return di(a) === di(i) && a.every((s, c) => s === Y(i, c.toString()));
}
function rd(a, i) {
  const s = {};
  return (
    a.forEach((c) => {
      s[c[i]] = c;
    }),
    s
  );
}
function xt() {}
function Me(...a) {
  return (i, ...s) => {
    a.forEach((c) => c && c(i, ...s));
  };
}
function Wi({ item: a, itemContext: i, getItemProps: s, getResizeProps: c }) {
  const { left: f, right: d } = c(),
    { key: m, ref: b, ...w } = s(a.itemProps ?? {}),
    { useResizeHandle: O } = i;
  return wt(
    "div",
    { ...w, ref: b, key: `${m}-outer` },
    O ? wt("div", { ...f, key: `${m}-lr` }) : null,
    $(
      "div",
      { className: "rct-item-content", style: { maxHeight: `${i.dimensions.height}` }, children: i.title },
      `${m}-content`
    ),
    O ? wt("div", { ...d, key: `${m}-rr` }) : null
  );
}
function Rt(a, i, s) {
  return (i - a) / s;
}
function kt(a, i, s, c) {
  const f = s / (i - a);
  return (c - a) * f;
}
function Mr(a, i, s, c) {
  return ((i - a) / s) * c + a;
}
function Rr(a, i, s, c, f) {
  let d = oe(a).startOf(s);
  if (c[s] && c[s] > 1) {
    const m = d.get(s);
    d = d.set(s, m - (m % c[s]));
  }
  for (; d.valueOf() < i; ) {
    let m = oe(d)
      .add(c[s] || 1, s)
      .startOf(s);
    (m.valueOf() <= d.valueOf() && (m = m.add(c[s] || 1, s)), f(d, m), (d = m));
  }
}
const Or = 17;
function St(a, i, s, c = !0) {
  const f = c
    ? { second: 1e3, minute: 60, hour: 60, day: 24, week: 7, year: 52 }
    : { second: 1e3, minute: 60, hour: 60, day: 24, month: 30, year: 12 };
  let d = "year",
    m = a;
  return (
    Object.keys(f).some((b) => {
      const w = b;
      m = m / f[w];
      const O = s[w] ?? 1,
        k = m / O,
        I = O > 1 ? 3 * Or : Or,
        T = i / I;
      if (k < T) return ((d = b), !0);
    }),
    d
  );
}
const kr = {
    second: "minute",
    minute: "hour",
    hour: "day",
    day: "week",
    week: "year",
    month: "year",
    year: "year",
  },
  Hi = {
    second: "minute",
    minute: "hour",
    hour: "day",
    day: "month",
    week: "year",
    month: "year",
    year: "year",
  },
  nd = kr;
function zr(a, i = !0) {
  const s = i ? kr : Hi;
  if (!s[a]) throw new Error(`unit ${a} is not acceptable`);
  return s[a];
}
function Fi({
  itemTimeStart: a,
  itemTimeEnd: i,
  dragTime: s,
  isDragging: c,
  isResizing: f,
  resizingEdge: d,
  resizeTime: m,
}) {
  const b = i - a;
  return [c && s ? s : f && d === "left" && m ? m : a, c && s ? s + b : f && d === "right" && m ? m : i];
}
function Ni({ itemTimeStart: a, itemTimeEnd: i, canvasTimeStart: s, canvasTimeEnd: c, canvasWidth: f }) {
  const d = i - a,
    m = Math.max(a, s),
    b = Math.min(i, c),
    w = kt(s, c, f, m),
    k = kt(s, c, f, b) - w;
  return {
    left: w,
    width: Math.max(k, 3),
    collisionLeft: a,
    collisionWidth: d,
  };
}
function Dr(a, i) {
  const { groupIdKey: s } = i,
    c = {};
  for (let f = 0; f < a.length; f++)
    c[Y(a[f], s)] = {
      index: f,
      group: a[f],
    };
  return c;
}
function Ui(a, i) {
  var f, d;
  const s = {},
    c = Object.keys(i);
  for (let m = 0; m < c.length; m++) {
    const b = i[c[m]];
    s[m] = {
      index: b.index,
      group: b.group,
      items: [],
    };
  }
  for (let m = 0; m < a.length; m++)
    if (a[m].dimensions !== void 0 && ((f = a[m].dimensions) == null ? void 0 : f.order) !== void 0) {
      const b = s[((d = a[m].dimensions) == null ? void 0 : d.order.index) ?? 0];
      b && b.items.push(a[m]);
    }
  return s;
}
function $r(a, i, s, c) {
  const { itemTimeStartKey: f, itemTimeEndKey: d } = c;
  return a.filter((m) => {
    const b = oe(Y(m, f)).valueOf() <= s,
      w = oe(Y(m, d)).valueOf() >= i;
    return b && w;
  });
}
const id = 1e-3;
function Gi(a, i, s, c = id) {
  return (
    a.collisionLeft + c < i.collisionLeft + i.collisionWidth &&
    a.collisionLeft + a.collisionWidth - c > i.collisionLeft &&
    a.top - s + c < i.top + i.height &&
    a.top + a.height + s - c > i.top
  );
}
function Yi(a, i, s, c, f, d, m) {
  let b = c;
  const w = m ?? (a - i.dimensions.height) / 2;
  if (i.dimensions.stack && i.dimensions.top === null) {
    ((i.dimensions.top = f + w), (b = Math.max(b, a, i.dimensions.height + w * 2)));
    do {
      var O = null;
      for (let k = d - 1, I = 0; k >= I; k--) {
        const T = s[k];
        if (T.dimensions.top !== null && T.dimensions.stack && Gi(i.dimensions, T.dimensions, w)) {
          O = T;
          break;
        }
      }
      O != null &&
        ((i.dimensions.top =
          O.dimensions.top +
          O.dimensions.height /* backward compatibility where gap between items is 2 */ +
          w * (m !== void 0 ? 1 : 2)),
        (b = Math.max(b, i.dimensions.top + i.dimensions.height + w - f)));
    } while (O);
  }
  return {
    groupHeight: b,
    verticalMargin: w,
    itemTop: i.dimensions.top,
  };
}
function Ki(a, i, s, c, f) {
  var m, b;
  const d = f ?? (a - (((m = i.dimensions) == null ? void 0 : m.height) ?? 1)) / 2;
  return (
    i.dimensions &&
      i.dimensions.top === null &&
      ((i.dimensions.top = c + d), (s = Math.max(s, a, i.dimensions.height + d))),
    { groupHeight: s, verticalMargin: 0, itemTop: ((b = i.dimensions) == null ? void 0 : b.top) ?? 0 }
  );
}
function fi(a = []) {
  return a.reduce((i, s) => i + s, 0);
}
function Xi(a, i, s, c, f) {
  const d = [],
    m = [],
    b = Ui(a, i);
  for (const w in b) {
    const O = b[w],
      { items: k, group: I } = O,
      T = fi(d),
      E = I.stackItems !== void 0 ? I.stackItems : c,
      { groupHeight: P } = Bi(k, E, s, T, f);
    (m.push(T), I.height !== void 0 ? d.push(I.height) : d.push(Math.max(P, s)));
  }
  return {
    height: fi(d),
    groupHeights: d,
    groupTops: m,
  };
}
function Bi(a, i, s, c, f) {
  let d = 0,
    m = 0;
  for (let b = 0; b < a.length; b++) {
    const w = i ? Yi(s, a[b], a, d, c, b, f) : Ki(s, a[b], d, c, f);
    ((d = w.groupHeight), (m = w.verticalMargin));
  }
  return { groupHeight: d, verticalMargin: m };
}
function je(a, i, s, c, f, d, m, b, w, O, k, I, T, E, P, C) {
  const A = $r(a, c, f, d).map((x) =>
    qi({
      item: x,
      keys: d,
      draggingItem: O,
      resizingItem: k,
      dragTime: I,
      resizingEdge: T,
      resizeTime: E,
      groups: i,
      newGroupOrder: P,
    })
  );
  if (i.length === 0)
    return {
      dimensionItems: [],
      height: 0,
      groupHeights: [],
      groupTops: [],
    };
  const L = Dr(i, d),
    K = A.map((x) =>
      Vi({
        item: x,
        keys: d,
        canvasTimeStart: c,
        canvasTimeEnd: f,
        canvasWidth: s,
        groupOrders: L,
        lineHeight: m,
        itemHeightRatio: b,
        itemVerticalGap: C,
      })
    ).filter((x) => !!x),
    { height: B, groupHeights: V, groupTops: re } = Xi(K, L, m, w, C);
  return { dimensionItems: K, height: B, groupHeights: V, groupTops: re };
}
function ve(a, i) {
  return a * i;
}
function Vi({
  item: a,
  keys: i,
  canvasTimeStart: s,
  canvasTimeEnd: c,
  canvasWidth: f,
  groupOrders: d,
  lineHeight: m,
  itemHeightRatio: b,
  itemVerticalGap: w,
}) {
  const O = Y(a, i.itemIdKey),
    k = Ni({
      itemTimeStart: Y(a, i.itemTimeStartKey),
      itemTimeEnd: Y(a, i.itemTimeEndKey),
      canvasTimeStart: s,
      canvasTimeEnd: c,
      canvasWidth: f,
    });
  if (k)
    return (
      (k.top = null),
      (k.order = d[Y(a, i.itemGroupKey)]),
      (k.stack = !a.isOverlay),
      (k.height = (a.height || m) * (typeof w > "u" ? b : 1)),
      {
        id: O,
        dimensions: k,
      }
    );
}
function qi({
  item: a,
  keys: i,
  draggingItem: s,
  resizingItem: c,
  dragTime: f,
  resizingEdge: d,
  resizeTime: m,
  groups: b,
  newGroupOrder: w,
}) {
  if (!c && !s) return a;
  const O = Y(a, i.itemIdKey),
    k = O === s,
    I = O === c,
    [T, E] = Fi({
      itemTimeStart: Y(a, i.itemTimeStartKey),
      itemTimeEnd: Y(a, i.itemTimeEndKey),
      isDragging: k,
      isResizing: I,
      dragTime: f,
      resizingEdge: d,
      resizeTime: m,
    });
  return {
    ...a,
    [i.itemTimeStartKey]: T,
    [i.itemTimeEndKey]: E,
    [i.itemGroupKey]: k ? Y(b[w], i.groupIdKey) : Y(a, i.itemGroupKey),
  };
}
function jr(a, i, s) {
  const c = i - a,
    f = a - (c * (s - 1)) / 2,
    d = f + c * s;
  return [f, d];
}
function Cr(a, i, s, c, f, d, m) {
  const b = d.buffer,
    w = m.canvasTimeStart,
    O = m.canvasTimeEnd,
    k = m.visibleTimeEnd - m.visibleTimeStart,
    I = i - a,
    T = {
      ...m,
      visibleTimeStart: a,
      visibleTimeEnd: i,
    },
    E = k * (b - 1) * 0.25;
  if (I !== k || a <= w + E || i >= O - E || s) {
    const [C, D] = jr(a, i, b);
    ((T.canvasTimeStart = C), (T.canvasTimeEnd = D));
    const A = {
        ...m,
        ...T,
      },
      L = ve(A.width, d.buffer);
    Object.assign(
      T,
      je(
        c,
        f,
        L,
        A.canvasTimeStart,
        A.canvasTimeEnd,
        d.keys,
        d.lineHeight,
        d.itemHeightRatio,
        d.stackItems,
        A.draggingItem,
        A.resizingItem,
        A.dragTime,
        A.resizingEdge,
        A.resizeTime,
        A.newGroupOrder,
        d.itemVerticalGap
      )
    );
  }
  return T;
}
const Ef = /* @__PURE__ */ Object.freeze(
    /* @__PURE__ */ Object.defineProperty(
      {
        __proto__: null,
        NEXT_UNITS: nd,
        NEXT_UNITS_MONTHS: Hi,
        NEXT_UNITS_WEEKS: kr,
        calculateDimensions: Ni,
        calculateInteractionNewTimes: Fi,
        calculateScrollCanvas: Cr,
        calculateTimeForXPosition: Mr,
        calculateXPositionForTime: kt,
        collision: Gi,
        coordinateToTimeRatio: Rt,
        getCanvasBoundariesFromVisibleTime: jr,
        getCanvasWidth: ve,
        getGroupOrders: Dr,
        getGroupedItems: Ui,
        getItemDimensions: Vi,
        getItemWithInteractions: qi,
        getMinUnit: St,
        getNextUnit: zr,
        getVisibleItems: $r,
        groupNoStack: Ki,
        groupStack: Yi,
        iterateTimes: Rr,
        minCellWidth: Or,
        stackAll: Xi,
        stackGroup: Bi,
        stackTimelineItems: je,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  sd = {
    fontSize: 12,
    color: "white",
    cursor: "pointer",
    background: "#2196f3",
    borderTopWidth: "1px",
    borderBottomWidth: "1px",
    borderLeftWidth: "1px",
    borderRightWidth: "1px",
    borderStyle: "solid",
    borderColor: "#1a6fb3",
    zIndex: 80,
  },
  od = {
    zIndex: 82,
  },
  ad = {
    willChange: "left, top, width",
    cursor: "move",
  },
  ld = {
    borderLeftWidth: 3,
  },
  cd = {
    cursor: "w-resize",
  },
  ud = {
    borderRightWidth: "3px",
  },
  pd = {
    cursor: "e-resize",
  },
  hd = {
    position: "absolute",
    width: 24,
    maxWidth: "20%",
    minWidth: 2,
    height: "100%",
    top: 0,
    left: 0,
    cursor: "ew-resize",
    zIndex: 88,
  },
  dd = {
    position: "absolute",
    width: 24,
    maxWidth: "20%",
    minWidth: 2,
    height: "100%",
    top: 0,
    right: 0,
    cursor: "ew-resize",
    zIndex: 88,
  },
  fd = {
    getTimelineState: () => (console.warn('"getTimelineState" default func is being used'), {}),
    getLeftOffsetFromDate: () => (console.warn('"getLeftOffsetFromDate" default func is being used'), 0),
    getDateFromLeftOffsetPosition: () => (
      console.warn('"getDateFromLeftOffsetPosition" default func is being used'),
      0
    ),
    showPeriod: () => {
      console.warn('"showPeriod" default func is being used');
    },
  },
  Ar = Z.createContext(fd),
  { Consumer: vd, Provider: md } = Ar;
class gd extends Z.Component {
  constructor(i) {
    (super(i),
      Object.defineProperty(this, "getTimelineState", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          const {
            visibleTimeStart: s,
            visibleTimeEnd: c,
            canvasTimeStart: f,
            canvasTimeEnd: d,
            canvasWidth: m,
            timelineUnit: b,
            timelineWidth: w,
            useWeeks: O,
          } = this.props;
          return {
            visibleTimeStart: s,
            visibleTimeEnd: c,
            canvasTimeStart: f,
            canvasTimeEnd: d,
            canvasWidth: m,
            timelineUnit: b,
            timelineWidth: w,
            useWeeks: O,
          };
        },
      }),
      Object.defineProperty(this, "getLeftOffsetFromDate", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          const { canvasTimeStart: c, canvasTimeEnd: f, canvasWidth: d } = this.props;
          return kt(c, f, d, s);
        },
      }),
      Object.defineProperty(this, "getDateFromLeftOffsetPosition", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          const { canvasTimeStart: c, canvasTimeEnd: f, canvasWidth: d } = this.props;
          return Mr(c, f, d, s);
        },
      }),
      (this.state = {
        timelineContext: {
          getTimelineState: this.getTimelineState,
          getLeftOffsetFromDate: this.getLeftOffsetFromDate,
          getDateFromLeftOffsetPosition: this.getDateFromLeftOffsetPosition,
          showPeriod: this.props.showPeriod,
        },
      }));
  }
  render() {
    return $(md, { value: this.state.timelineContext, children: this.props.children });
  }
}
const Wt = vd,
  bd = () => xi(Ar);
oe.extend(_o);
class Lr extends ue {
  get itemId() {
    return Y(this.props.item, this.props.keys.itemIdKey);
  }
  get itemTitle() {
    return Y(this.props.item, this.props.keys.itemTitleKey);
  }
  get itemDivTitle() {
    return this.props.keys.itemDivTitleKey ? Y(this.props.item, this.props.keys.itemDivTitleKey) : this.itemTitle;
  }
  get itemTimeStart() {
    return Y(this.props.item, this.props.keys.itemTimeStartKey);
  }
  get itemTimeEnd() {
    return Y(this.props.item, this.props.keys.itemTimeEndKey);
  }
  constructor(i) {
    (super(i),
      Object.defineProperty(this, "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          interactMounted: !1,
          dragging: !1,
          dragStart: null,
          preDragPosition: null,
          dragTime: null,
          dragGroupDelta: null,
          resizing: !1,
          resizeEdge: null,
          resizeStart: null,
          resizeTime: null,
        },
      }),
      Object.defineProperty(this, "itemRef", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Si(),
      }),
      Object.defineProperty(this, "dragLeft", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "dragRight", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "startedClicking", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "startedTouching", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "dragInProgress", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "resizeInProgress", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "currentResizeEdge", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "fireInteractEvent", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          var c;
          if (this.itemRef && this.itemRef.current) {
            const f = new CustomEvent("itemInteraction", {
              bubbles: !0,
              detail: {
                itemInteraction: s,
              },
            });
            (c = this.itemRef.current) == null || c.dispatchEvent(f);
          }
        },
      }),
      Object.defineProperty(this, "onMouseDown", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          this.state.interactMounted || (s.preventDefault(), (this.startedClicking = !0));
        },
      }),
      Object.defineProperty(this, "onMouseUp", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          !this.state.interactMounted &&
            this.startedClicking &&
            ((this.startedClicking = !1), this.actualClick(s, "click"));
        },
      }),
      Object.defineProperty(this, "onTouchStart", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          this.state.interactMounted || (s.preventDefault(), (this.startedTouching = !0));
        },
      }),
      Object.defineProperty(this, "onTouchEnd", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          !this.state.interactMounted &&
            this.startedTouching &&
            ((this.startedTouching = !1), this.actualClick(s, "touch"));
        },
      }),
      Object.defineProperty(this, "handleDoubleClick", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          (s.stopPropagation(), this.props.onItemDoubleClick && this.props.onItemDoubleClick(this.itemId, s));
        },
      }),
      Object.defineProperty(this, "handleContextMenu", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          this.props.onContextMenu &&
            (s.preventDefault(), s.stopPropagation(), this.props.onContextMenu(this.itemId, s));
        },
      }),
      Object.defineProperty(this, "getDragLeftRef", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => (this.dragLeft = s),
      }),
      Object.defineProperty(this, "getDragRightRef", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => (this.dragRight = s),
      }),
      Object.defineProperty(this, "getItemProps", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ({
          className: s,
          onMouseDown: c,
          onMouseUp: f,
          onTouchStart: d,
          onTouchEnd: m,
          onDoubleClick: b,
          onContextMenu: w,
          leftClassName: O,
          rightClassName: k,
          leftStyle: I,
          rightStyle: T,
          ...E
        } = {}) => {
          const P = "rct-item" + (this.props.item.className ? ` ${this.props.item.className}` : "");
          return {
            ...E,
            key: this.itemId,
            ref: this.itemRef,
            title: this.itemDivTitle,
            className: P + ` ${s || ""}`,
            onMouseDown: Me(this.onMouseDown, c),
            onMouseUp: Me(this.onMouseUp, f),
            onTouchStart: Me(this.onTouchStart, d),
            onTouchEnd: Me(this.onTouchEnd, m),
            onDoubleClick: Me(this.handleDoubleClick, b),
            onContextMenu: Me(this.handleContextMenu, w),
            style: Object.assign(
              {},
              this.getItemStyle({ leftClassName: O, rightClassName: k, leftStyle: I, rightStyle: T, ...E })
            ),
          };
        },
      }),
      Object.defineProperty(this, "getResizeProps", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s = {}) => {
          let c = "rct-item-handler rct-item-handler-left rct-item-handler-resize-left";
          s.leftClassName && (c += ` ${s.leftClassName}`);
          let f = "rct-item-handler rct-item-handler-right rct-item-handler-resize-right";
          return (
            s.rightClassName && (f += ` ${s.rightClassName}`),
            {
              left: {
                ref: this.getDragLeftRef,
                className: c,
                style: Object.assign({}, hd, s.leftStyle),
              },
              right: {
                ref: this.getDragRightRef,
                className: f,
                style: Object.assign({}, dd, s.rightStyle),
              },
            }
          );
        },
      }));
  }
  shouldComponentUpdate(i, s) {
    return !Sr(this.props, i) || !Sr(this.state, s);
  }
  getTimeRatio() {
    const { canvasTimeStart: i, canvasTimeEnd: s, canvasWidth: c } = this.props;
    return Rt(i, s, c);
  }
  dragTimeSnap(i, s) {
    const { dragSnap: c } = this.props;
    if (c) {
      const f = s ? oe().utcOffset() * 60 * 1e3 : 0;
      return Math.round(i / c) * c - (f % c);
    } else return i;
  }
  resizeTimeSnap(i) {
    const { dragSnap: s } = this.props;
    if (s) {
      const c = this.itemTimeEnd % s;
      return Math.round((i - c) / s) * s + c;
    } else return i;
  }
  dragTime(i) {
    const s = oe(this.itemTimeStart);
    return this.state.dragging ? this.dragTimeSnap(this.timeFor(i) + this.state.dragStart.offset, !0) : s.valueOf();
  }
  timeFor(i) {
    const s = Rt(this.props.canvasTimeStart, this.props.canvasTimeEnd, this.props.canvasWidth),
      c = Et(this.props.scrollRef).offsetLeft,
      f = Ct(this.props.scrollRef);
    return (i.pageX - c + f.scrollLeft + this.props.scrollOffset) * s + this.props.canvasTimeStart;
  }
  dragGroupDelta(i) {
    const { groupTops: s, order: c } = this.props;
    if (this.state.dragging) {
      if (!this.props.canChangeGroup) return 0;
      let f = 0;
      const d = Et(this.props.scrollRef).offsetTop,
        m = Ct(this.props.scrollRef);
      for (const b of Object.keys(s)) {
        const w = s[Number(b)];
        if (i.pageY - d + m.scrollTop > w) f = parseInt(b, 10) - c.index;
        else break;
      }
      return this.props.order.index + f < 0 ? 0 - this.props.order.index : f;
    } else return 0;
  }
  resizeTimeDelta(i, s) {
    const c = this.itemTimeEnd - this.itemTimeStart,
      f = this.dragTimeSnap((i.pageX - this.state.resizeStart) * this.getTimeRatio());
    return c + (s === "left" ? -f : f) < (this.props.dragSnap || 1e3)
      ? s === "left"
        ? c - (this.props.dragSnap || 1e3)
        : (this.props.dragSnap || 1e3) - c
      : f;
  }
  mountInteract() {
    const i = this.props.useResizeHandle ? ".rct-item-handler-resize-left" : !0,
      s = this.props.useResizeHandle ? ".rct-item-handler-resize-right" : !0;
    (fr(this.itemRef.current)
      .resizable({
        edges: {
          left: this.canResizeLeft() && i,
          right: this.canResizeRight() && s,
          top: !1,
          bottom: !1,
        },
        enabled: this.props.selected && (this.canResizeLeft() || this.canResizeRight()),
      })
      .draggable({
        enabled: this.props.selected && this.canMove(),
      })
      .styleCursor(!1)
      .on("dragstart", (c) => {
        if (this.props.selected) {
          this.dragInProgress = !0;
          const f = this.timeFor(c);
          this.setState({
            dragging: !0,
            dragStart: {
              x: c.pageX,
              y: c.pageY,
              offset: this.itemTimeStart - f,
            },
            preDragPosition: { x: c.target.offsetLeft, y: c.target.offsetTop },
            dragTime: this.itemTimeStart,
            dragGroupDelta: 0,
          });
        } else return !1;
      })
      .on("dragmove", (c) => {
        this.state.dragging &&
          this.setState((f) => {
            if (!this.dragInProgress) return { ...f };
            let d = this.dragTime(c);
            const m = this.dragGroupDelta(c);
            return (
              this.props.moveResizeValidator && (d = this.props.moveResizeValidator("move", this.props.item, d)),
              this.props.onDrag && this.props.onDrag(this.itemId, d, this.props.order.index + m),
              {
                dragTime: d,
                dragGroupDelta: m,
              }
            );
          });
      })
      .on("dragend", (c) => {
        if (this.state.dragging) {
          if (this.props.onDrop) {
            ((this.dragInProgress = !1), this.fireInteractEvent(!1));
            let f = this.dragTime(c);
            (this.props.moveResizeValidator && (f = this.props.moveResizeValidator("move", this.props.item, f)),
              this.props.onDrop(this.itemId, f, this.props.order.index + this.dragGroupDelta(c)));
          }
          this.setState({
            dragging: !1,
            dragStart: null,
            preDragPosition: null,
            dragTime: null,
            dragGroupDelta: null,
          });
        }
      })
      .on("resizestart", (c) => {
        if (this.props.selected)
          ((this.resizeInProgress = !0),
            (this.currentResizeEdge = null),
            this.setState({
              resizing: !0,
              resizeEdge: null,
              // we don't know yet
              resizeStart: c.pageX,
              resizeTime: 0,
            }));
        else return !1;
      })
      .on("resizemove", (c) => {
        if (this.resizeInProgress) {
          this.currentResizeEdge ||
            ((this.currentResizeEdge = c.deltaRect.left !== 0 ? "left" : "right"),
            this.setState({ resizeEdge: this.currentResizeEdge }));
          const f = this.currentResizeEdge;
          let d = this.resizeTimeSnap(this.timeFor(c));
          (this.props.moveResizeValidator && (d = this.props.moveResizeValidator("resize", this.props.item, d, f)),
            this.props.onResizing && this.props.onResizing(this.itemId, d, f),
            this.updateResizeLabel(d, f),
            this.setState({
              resizeTime: d,
            }));
        }
      })
      .on("resizeend", (c) => {
        if (this.resizeInProgress) {
          ((this.resizeInProgress = !1), this.fireInteractEvent(!1));
          const f = this.currentResizeEdge;
          this.currentResizeEdge = null;
          let d = this.resizeTimeSnap(this.timeFor(c));
          (this.props.moveResizeValidator && (d = this.props.moveResizeValidator("resize", this.props.item, d, f)),
            this.props.onResized && this.props.onResized(this.itemId, d, f, this.resizeTimeDelta(c, f)),
            this.resetResizeLabel(),
            this.setState({
              resizing: !1,
              resizeStart: null,
              resizeEdge: null,
              resizeTime: null,
            }));
        }
      })
      .on("tap", (c) => {
        this.actualClick(c, c.pointerType === "mouse" ? "click" : "touch");
      }),
      this.itemRef.current.addEventListener("pointerdown", () => {
        this.props.selected && this.fireInteractEvent(!0);
      }),
      this.itemRef.current.addEventListener("pointerup", () => {
        this.props.selected && this.fireInteractEvent(!1);
      }),
      this.setState({
        interactMounted: !0,
      }));
  }
  formatDuration(i) {
    const s = i / 36e5;
    if (s >= 1) return `${s.toFixed(1).replace(".", ",")} h`;
    const c = i / 6e4;
    return c >= 1 ? `${Math.round(c)} min` : `${Math.round(i / 1e3)} s`;
  }
  getOrCreateResizeOverlay() {
    const i = this.itemRef.current;
    let s = i.querySelector(".rct-resize-overlay");
    return (
      s ||
        ((s = document.createElement("div")),
        (s.className = "rct-resize-overlay"),
        (s.style.cssText =
          "position:absolute;inset:0;display:none;align-items:center;padding:0 6px;pointer-events:none;z-index:1;overflow:hidden;background:inherit;"),
        i.appendChild(s)),
      s
    );
  }
  updateResizeLabel(i, s) {
    const c = this.itemRef.current;
    if (!c) return;
    const f = s === "left" ? i : this.itemTimeStart,
      m = (s === "right" ? i : this.itemTimeEnd) - f,
      b = m > 0 && c.offsetWidth >= 50 ? this.formatDuration(m) : "",
      w = c.querySelector(".rct-item-duration");
    if (w) {
      w.textContent = b;
      return;
    }
    const O = this.getOrCreateResizeOverlay();
    ((O.textContent = b), (O.style.display = "flex"));
  }
  resetResizeLabel() {
    const i = this.itemRef.current;
    if (!i) return;
    const s = i.querySelector(".rct-item-duration");
    if (s) {
      const f = this.itemTimeEnd - this.itemTimeStart;
      s.textContent = f > 0 && i.offsetWidth >= 50 ? this.formatDuration(f) : "";
      return;
    }
    const c = i.querySelector(".rct-resize-overlay");
    c && (c.style.display = "none");
  }
  canResizeLeft(i = this.props) {
    var c;
    return !i.canResizeLeft || i.minResizeWidth === void 0
      ? !1
      : parseInt((c = i.dimensions.width) == null ? void 0 : c.toString(), 10) >= i.minResizeWidth;
  }
  canResizeRight(i = this.props) {
    var c;
    return !i.canResizeRight || i.minResizeWidth === void 0
      ? !1
      : parseInt((c = i.dimensions.width) == null ? void 0 : c.toString(), 10) >= i.minResizeWidth;
  }
  canMove(i = this.props) {
    return !!i.canMove;
  }
  componentDidUpdate(i) {
    let { interactMounted: s } = this.state;
    const c = i.selected && this.canMove(i),
      f = i.selected && this.canResizeLeft(i),
      d = i.selected && this.canResizeRight(i),
      m = this.props.selected && this.canMove(this.props),
      b = this.props.selected && this.canResizeLeft(this.props),
      w = this.props.selected && this.canResizeRight(this.props);
    if (this.itemRef && this.itemRef.current) {
      if ((this.props.selected && !s && (this.mountInteract(), (s = !0)), s && (f !== b || d !== w))) {
        const O = this.props.useResizeHandle ? this.dragLeft : !0,
          k = this.props.useResizeHandle ? this.dragRight : !0;
        fr(this.itemRef.current).resizable({
          enabled: b || w,
          edges: {
            top: !1,
            bottom: !1,
            left: b && O,
            right: w && k,
          },
        });
      }
      s && c !== m && fr(this.itemRef.current).draggable({ enabled: m });
    } else s = !1;
    s !== this.state.interactMounted &&
      this.setState({
        interactMounted: s,
      });
  }
  actualClick(i, s) {
    this.props.canSelect && this.props.onSelect && this.props.onSelect(this.itemId, s, i);
  }
  getItemStyle(i) {
    const s = this.props.dimensions,
      c = {
        position: "absolute",
        boxSizing: "border-box",
        left: `${s.left}px`,
        top: `${s.top}px`,
        width: `${s.width}px`,
        height: `${s.height}px`,
        lineHeight: `${s.height}px`,
      };
    return Object.assign(
      {},
      sd,
      this.props.selected ? od : {},
      this.props.selected && this.canMove(this.props) ? ad : {},
      this.props.selected && this.canResizeLeft(this.props) ? ld : {},
      this.props.selected && this.canResizeLeft(this.props) && this.state.resizing ? cd : {},
      this.props.selected && this.canResizeRight(this.props) ? ud : {},
      this.props.selected && this.canResizeRight(this.props) && this.state.resizing ? pd : {},
      i.style,
      c
    );
  }
  render() {
    if (typeof this.props.order > "u" || this.props.order === null) return null;
    const i = this.context,
      s = {
        dimensions: this.props.dimensions,
        useResizeHandle: !!this.props.useResizeHandle,
        title: this.itemTitle,
        canMove: this.canMove(this.props),
        canResizeLeft: this.canResizeLeft(this.props),
        canResizeRight: this.canResizeRight(this.props),
        selected: this.props.selected,
        dragging: this.state.dragging,
        dragStart: this.state.dragStart,
        dragTime: this.state.dragTime,
        dragGroupDelta: this.state.dragGroupDelta,
        resizing: this.state.resizing,
        resizeEdge: this.state.resizeEdge,
        resizeStart: this.state.resizeStart,
        resizeTime: this.state.resizeTime,
      };
    return this.props.itemRenderer
      ? this.props.itemRenderer({
          item: this.props.item,
          timelineContext: i,
          itemContext: s,
          getItemProps: this.getItemProps,
          getResizeProps: this.getResizeProps,
        })
      : Wi({
          item: this.props.item,
          itemContext: s,
          getItemProps: this.getItemProps,
          getResizeProps: this.getResizeProps,
        });
  }
}
Object.defineProperty(Lr, "defaultProps", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    selected: !1,
    itemRenderer: Wi,
  },
});
Object.defineProperty(Lr, "contextType", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: Ar,
});
function yd(a, i) {
  const s = Y(a, "canResize") !== void 0 ? Y(a, "canResize") : i;
  return s === "left" || s === "both";
}
function Td(a, i) {
  const s = Y(a, "canResize") !== void 0 ? Y(a, "canResize") : i;
  return s === "right" || s === "both" || s === !0;
}
class wd extends ue {
  shouldComponentUpdate(i) {
    return !(
      rt(i.groups, this.props.groups) &&
      rt(i.items, this.props.items) &&
      rt(i.dimensionItems, this.props.dimensionItems) &&
      i.keys === this.props.keys &&
      i.canvasTimeStart === this.props.canvasTimeStart &&
      i.canvasTimeEnd === this.props.canvasTimeEnd &&
      i.canvasWidth === this.props.canvasWidth &&
      i.selectedItem === this.props.selectedItem &&
      i.selected === this.props.selected &&
      i.dragSnap === this.props.dragSnap &&
      i.minResizeWidth === this.props.minResizeWidth &&
      i.canChangeGroup === this.props.canChangeGroup &&
      i.canMove === this.props.canMove &&
      i.canResize === this.props.canResize &&
      i.canSelect === this.props.canSelect
    );
  }
  isSelected(i, s) {
    if (this.props.selected) {
      const c = Y(i, s);
      return this.props.selected.includes(c);
    } else return this.props.selectedItem === Y(i, s);
  }
  getVisibleItems(i, s) {
    const { keys: c, items: f } = this.props;
    return $r(f, i, s, c);
  }
  render() {
    const { canvasTimeStart: i, canvasTimeEnd: s, dimensionItems: c, keys: f, groups: d } = this.props,
      { itemIdKey: m, itemGroupKey: b } = f,
      w = Dr(d, f),
      O = this.getVisibleItems(i, s),
      k = rd(c, "id");
    return $("div", {
      className: "rct-items",
      children: O.filter((I) => k[Y(I, m)]).map((I) =>
        $(
          Lr,
          {
            itemProps: I.itemProps,
            item: I,
            keys: this.props.keys,
            order: w[Y(I, b)],
            dimensions: k[Y(I, m)].dimensions,
            selected: this.isSelected(I, m),
            canChangeGroup: Y(I, "canChangeGroup") !== void 0 ? Y(I, "canChangeGroup") : this.props.canChangeGroup,
            canMove: Y(I, "canMove") !== void 0 ? Y(I, "canMove") : this.props.canMove,
            canResizeLeft: yd(I, this.props.canResize),
            canResizeRight: Td(I, this.props.canResize),
            canSelect: Y(I, "canSelect") !== void 0 ? Y(I, "canSelect") : this.props.canSelect,
            useResizeHandle: this.props.useResizeHandle,
            groupTops: this.props.groupTops,
            canvasTimeStart: this.props.canvasTimeStart,
            canvasTimeEnd: this.props.canvasTimeEnd,
            canvasWidth: this.props.canvasWidth,
            dragSnap: this.props.dragSnap,
            minResizeWidth: this.props.minResizeWidth,
            onResizing: this.props.itemResizing,
            onResized: this.props.itemResized,
            moveResizeValidator: this.props.moveResizeValidator,
            onDrag: this.props.itemDrag,
            onDrop: this.props.itemDrop,
            onItemDoubleClick: this.props.onItemDoubleClick,
            onContextMenu: this.props.onItemContextMenu,
            onSelect: this.props.itemSelect,
            itemRenderer: this.props.itemRenderer,
            scrollRef: this.props.scrollRef,
            scrollOffset: this.props.scrollOffset,
          },
          Y(I, m)
        )
      ),
    });
  }
}
class vi extends ue {
  shouldComponentUpdate(i) {
    return !(
      i.keys === this.props.keys &&
      i.width === this.props.width &&
      i.height === this.props.height &&
      rt(i.groups, this.props.groups) &&
      rt(i.groupHeights, this.props.groupHeights)
    );
  }
  renderGroupContent(i, s = !1, c, f) {
    return this.props.sidebarColumns
      ? $("div", {
          style: { display: "flex", width: "100%", height: "100%" },
          children: this.props.sidebarColumns.map((d) =>
            $(
              "div",
              {
                style: {
                  width: d.width,
                  minWidth: d.width,
                  height: "100%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 6,
                  boxSizing: "border-box",
                  borderRight: "1px solid #bbb",
                },
                children: d.renderCell ? d.renderCell(i) : i[d.id],
              },
              d.id
            )
          ),
        })
      : this.props.groupRenderer
        ? Z.createElement(this.props.groupRenderer, {
            group: i,
            isRightSidebar: s,
          })
        : Y(i, s ? f : c);
  }
  render() {
    const { width: i, groupHeights: s, height: c, isRightSidebar: f } = this.props,
      { groupIdKey: d, groupTitleKey: m, groupRightTitleKey: b } = this.props.keys,
      w = {
        width: `${i}px`,
        height: `${c}px`,
      },
      O = {
        width: `${i}px`,
      },
      k = this.props.groups.map((I, T) => {
        const E = {
          height: `${s[T]}px`,
          lineHeight: `${s[T]}px`,
        };
        return $(
          "div",
          {
            className: "rct-sidebar-row rct-sidebar-row-" + (T % 2 === 0 ? "even" : "odd"),
            style: E,
            children: this.renderGroupContent(I, f, m, b),
          },
          Y(I, d)
        );
      });
    return $("div", {
      className: "rct-sidebar" + (f ? " rct-sidebar-right" : ""),
      style: w,
      children: $("div", { style: O, children: k }),
    });
  }
}
class xd extends ue {
  shouldComponentUpdate(i) {
    return !(
      i.canvasTimeStart === this.props.canvasTimeStart &&
      i.canvasTimeEnd === this.props.canvasTimeEnd &&
      i.canvasWidth === this.props.canvasWidth &&
      i.lineCount === this.props.lineCount &&
      i.minUnit === this.props.minUnit &&
      i.timeSteps === this.props.timeSteps &&
      i.height === this.props.height &&
      i.verticalLineClassNamesForTime === this.props.verticalLineClassNamesForTime
    );
  }
  render() {
    const {
        canvasTimeStart: i,
        canvasTimeEnd: s,
        // canvasWidth,
        minUnit: c,
        timeSteps: f,
        height: d,
        verticalLineClassNamesForTime: m,
        getLeftOffsetFromDate: b,
      } = this.props,
      w = [];
    return (
      Rr(i, s, c, f, (O, k) => {
        const T = O.get(c === "day" ? "date" : c) === (c === "day" ? 1 : 0);
        let E = [];
        m &&
          (E = m(
            O.unix() * 1e3,
            // turn into ms, which is what verticalLineClassNamesForTime expects
            k.unix() * 1e3 - 1
          ));
        const P =
            "rct-vl" +
            (T ? " rct-vl-first" : "") +
            (c === "day" || c === "hour" || c === "minute" ? ` rct-day-${O.day()} ` : " ") +
            E.join(" "),
          C = b(O.valueOf()),
          D = b(k.valueOf());
        w.push(
          $(
            "div",
            {
              className: P,
              style: {
                pointerEvents: "none",
                top: "0px",
                left: `${C}px`,
                width: `${D - C}px`,
                height: `${d}px`,
              },
            },
            `line-${O.valueOf()}`
          )
        );
      }),
      $("div", { className: "rct-vertical-lines", children: w })
    );
  }
}
const Sd = ({ ...a }) =>
  $(Wt, { children: ({ getLeftOffsetFromDate: i }) => $(xd, { getLeftOffsetFromDate: i, ...a }) });
class Od extends ue {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "handleMouseDown", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (i) => {
          this.originClickX = i.clientX;
        },
      }),
      Object.defineProperty(this, "handleMouseUp", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (i) => {
          this.props.clickTolerance !== void 0 &&
            this.originClickX !== null &&
            Math.abs(this.originClickX - i.clientX) > this.props.clickTolerance &&
            (this.cancelClick = !0);
        },
      }),
      Object.defineProperty(this, "handleClick", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (i) => {
          (this.cancelClick || this.props.onClick(i), (this.cancelClick = !1), (this.originClickX = null));
        },
      }),
      Object.defineProperty(this, "originClickX", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "cancelClick", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }));
  }
  render() {
    const i = Z.Children.only(this.props.children);
    return Z.cloneElement(i, {
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onClick: this.handleClick,
    });
  }
}
class Cd extends ue {
  render() {
    const {
      onContextMenu: i,
      onDoubleClick: s,
      isEvenRow: c,
      style: f,
      onClick: d,
      clickTolerance: m,
      horizontalLineClassNamesForGroup: b,
      group: w,
    } = this.props;
    let O = [];
    return (
      b && (O = b(w)),
      $(Od, {
        clickTolerance: m,
        onClick: d,
        children: $("div", {
          onContextMenu: i,
          onDoubleClick: s,
          className: (c ? "rct-hl-even " : "rct-hl-odd ") + (O ? O.join(" ") : ""),
          style: f,
        }),
      })
    );
  }
}
class Ed extends ue {
  shouldComponentUpdate(i) {
    return !(
      i.canvasWidth === this.props.canvasWidth &&
      i.lineCount === this.props.lineCount &&
      i.groupHeights === this.props.groupHeights &&
      i.groups === this.props.groups
    );
  }
  render() {
    const {
        canvasWidth: i,
        lineCount: s,
        groupHeights: c,
        onRowClick: f,
        onRowDoubleClick: d,
        clickTolerance: m,
        groups: b,
        horizontalLineClassNamesForGroup: w,
        onRowContextClick: O,
      } = this.props,
      k = [];
    for (let I = 0; I < s; I++)
      k.push(
        $(
          Cd,
          {
            clickTolerance: m,
            onContextMenu: (T) => O(T, I),
            onClick: (T) => f(T, I),
            onDoubleClick: (T) => d(T, I),
            isEvenRow: I % 2 === 0,
            group: b[I],
            horizontalLineClassNamesForGroup: w,
            style: {
              width: `${i}px`,
              height: `${c[I]}px`,
            },
          },
          `horizontal-line-${I}`
        )
      );
    return $("div", { className: "rct-horizontal-lines", children: k });
  }
}
class Pd extends ue {
  constructor(i) {
    (super(i),
      Object.defineProperty(this, "scrollComponentRef", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Si(),
      }),
      Object.defineProperty(this, "dragLastPosition", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "lastTouchDistance", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "singleTouchStart", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "lastSingleTouch", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "isItemInteraction", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(this, "rafId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "pendingScrollOffset", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "scheduleScroll", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          ((this.pendingScrollOffset = s),
            this.rafId === null &&
              (this.rafId = requestAnimationFrame(() => {
                ((this.rafId = null),
                  this.pendingScrollOffset !== null &&
                    (this.props.onScroll(this.pendingScrollOffset), (this.pendingScrollOffset = null)));
              })));
        },
      }),
      Object.defineProperty(this, "handlePointerStart", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          s.pointerType === "touch" ? this.handleTouchStart(s) : s.pointerType === "mouse" && this.handleMouseDown(s);
        },
      }),
      Object.defineProperty(this, "handlePointerMove", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          s.pointerType === "touch" ? this.handleTouchMove(s) : s.pointerType === "mouse" && this.handleMouseMove(s);
        },
      }),
      Object.defineProperty(this, "handlePointerEnd", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          s.pointerType === "touch" ? this.handleTouchEnd() : s.pointerType === "mouse" && this.handleMouseUp();
        },
      }),
      Object.defineProperty(this, "normalizeWheelDelta", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          let c = s.deltaY || s.deltaX;
          s.deltaMode === 1 ? (c *= 15) : s.deltaMode === 2 && (c *= 800);
          const f = 120;
          return Math.max(-f, Math.min(f, c));
        },
      }),
      Object.defineProperty(this, "handleWheel", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          if (s.ctrlKey || s.metaKey || s.altKey) {
            s.preventDefault();
            const c = Hn(s.currentTarget),
              f = s.clientX - c.x,
              d = s.ctrlKey ? 10 : s.metaKey ? 3 : 1,
              m = this.normalizeWheelDelta(s);
            this.props.onWheelZoom(d, f, m);
          } else if (s.shiftKey) {
            s.preventDefault();
            const c = this.normalizeWheelDelta(s);
            this.scheduleScroll(this.props.scrollOffset + c);
          } else {
            const c = s.deltaX;
            c !== 0 &&
              Math.abs(c) > Math.abs(s.deltaY) &&
              (s.preventDefault(), this.scheduleScroll(this.props.scrollOffset + c));
          }
        },
      }),
      Object.defineProperty(this, "handleMouseDown", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          s.button === 0 && !this.isItemInteraction && (this.dragLastPosition = s.pageX);
        },
      }),
      Object.defineProperty(this, "handleMouseMove", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          this.dragLastPosition !== null &&
            (this.state.isDragging || this.setState({ isDragging: !0 }),
            this.scheduleScroll(this.props.scrollOffset + this.dragLastPosition - s.pageX),
            (this.dragLastPosition = s.pageX));
        },
      }),
      Object.defineProperty(this, "handleMouseUp", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          ((this.dragLastPosition = null),
            this.setState({
              isDragging: !1,
            }));
        },
      }),
      Object.defineProperty(this, "handlePointerLeave", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          s.pointerType === "mouse" &&
            ((this.dragLastPosition = null),
            this.setState({
              isDragging: !1,
            }));
        },
      }),
      Object.defineProperty(this, "handleTouchStart", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          s.isPrimary
            ? (s.preventDefault(),
              (this.lastTouchDistance = null),
              (this.singleTouchStart = { x: s.clientX, y: s.clientY, screenY: window.scrollY }),
              (this.lastSingleTouch = { x: s.clientX, y: s.clientY, screenY: window.scrollY }))
            : (s.preventDefault(),
              (this.lastTouchDistance = Math.abs(s.clientX - this.singleTouchStart.x)),
              (this.singleTouchStart = null),
              (this.lastSingleTouch = null));
        },
      }),
      Object.defineProperty(this, "handleTouchMove", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          const { width: c, onZoom: f } = this.props;
          if (this.isItemInteraction) {
            s.preventDefault();
            return;
          }
          if (this.lastTouchDistance && !s.isPrimary) {
            s.preventDefault();
            const d = Math.abs(s.clientX - this.singleTouchStart.x),
              m = Hn(s.currentTarget),
              b = (s.clientX + this.singleTouchStart.x) / 2 - m.x;
            d !== 0 &&
              this.lastTouchDistance !== 0 &&
              (f(this.lastTouchDistance / d, b / c), (this.lastTouchDistance = d));
          } else if (this.lastSingleTouch && s.isPrimary) {
            s.preventDefault();
            const d = s.clientX,
              m = s.clientY,
              b = d - this.lastSingleTouch.x,
              w = d - this.singleTouchStart.x,
              O = m - this.singleTouchStart.y;
            this.lastSingleTouch = { x: d, y: m, screenY: window.pageYOffset };
            const k = Math.abs(w) * 3 > Math.abs(O),
              I = Math.abs(O) * 3 > Math.abs(w);
            (b !== 0 && k && this.scheduleScroll(this.props.scrollOffset - b),
              I && window.scrollTo(window.scrollX, this.singleTouchStart.screenY - O));
          }
        },
      }),
      Object.defineProperty(this, "handleTouchEnd", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          (this.lastTouchDistance && (this.lastTouchDistance = null),
            this.lastSingleTouch && ((this.lastSingleTouch = null), (this.singleTouchStart = null)));
        },
      }),
      Object.defineProperty(this, "handleItemInteract", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          this.isItemInteraction = s.detail.itemInteraction;
        },
      }),
      (this.state = {
        isDragging: !1,
      }));
  }
  componentDidMount() {
    this.scrollComponentRef.current &&
      (this.props.scrollRef(this.scrollComponentRef.current),
      this.scrollComponentRef.current.addEventListener("wheel", this.handleWheel, { passive: !1 }),
      this.scrollComponentRef.current.addEventListener("itemInteraction", this.handleItemInteract),
      this.scrollComponentRef.current.addEventListener("pointerdown", this.handlePointerStart, { passive: !1 }),
      this.scrollComponentRef.current.addEventListener("pointermove", this.handlePointerMove, { passive: !1 }),
      this.scrollComponentRef.current.addEventListener("pointerup", this.handlePointerEnd),
      this.scrollComponentRef.current.addEventListener("pointerleave", this.handlePointerLeave));
  }
  componentWillUnmount() {
    (this.rafId !== null && cancelAnimationFrame(this.rafId),
      this.scrollComponentRef.current &&
        (this.scrollComponentRef.current.removeEventListener("wheel", this.handleWheel),
        this.scrollComponentRef.current.removeEventListener("itemInteraction", this.handleItemInteract),
        this.scrollComponentRef.current.removeEventListener("pointerdown", this.handlePointerStart),
        this.scrollComponentRef.current.removeEventListener("pointermove", this.handlePointerMove),
        this.scrollComponentRef.current.removeEventListener("pointerup", this.handlePointerEnd),
        this.scrollComponentRef.current.removeEventListener("pointerleave", this.handlePointerLeave)));
  }
  render() {
    const { width: i, height: s, children: c, scrollOffset: f } = this.props,
      { isDragging: d } = this.state,
      m = {
        width: `${i}px`,
        height: `${s}px`,
        cursor: d ? "move" : "default",
        position: "relative",
        overflow: "hidden",
      };
    return $("div", {
      ref: this.scrollComponentRef,
      "data-testid": "scroll-element",
      className: "rct-scroll",
      style: m,
      children: $("div", { style: { transform: `translateX(${-f}px)`, height: "100%" }, children: c }),
    });
  }
}
const _d = {
    subscribeToMouseOver: () => (console.warn('"subscribeToMouseOver" default func is being used'), () => {}),
  },
  { Consumer: Id, Provider: Md } = Z.createContext(_d),
  Rd = Md,
  kd = Id,
  zd = {
    markers: [],
    subscribeMarker: () => (
      console.warn("default subscribe marker used"),
      {
        unsubscribe: xt,
        getMarker: xt,
      }
    ),
    updateMarker: () => (console.warn("default subscribe marker used"), xt),
  },
  { Consumer: Dd, Provider: $d } = Z.createContext(zd);
let mi = 0;
const jd = () => ((mi += 1), mi + 1);
class Ad extends Z.Component {
  constructor(i) {
    (super(i),
      Object.defineProperty(this, "handleSubscribeToMarker", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => (
          (s = {
            ...s,
            // REVIEW: in the event that we accept id to be passed to the Marker components, this line would override those
            id: jd(),
          }),
          this.setState((c) => ({
            markers: [...c.markers, s],
          })),
          {
            unsubscribe: () => {
              this.setState((c) => ({
                markers: c.markers.filter((f) => f.id !== s.id),
              }));
            },
            getMarker: () => s,
          }
        ),
      }),
      Object.defineProperty(this, "handleUpdateMarker", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (s) => {
          const c = this.state.markers.findIndex((f) => f.id === s.id);
          c < 0 ||
            this.setState((f) => ({
              markers: [...f.markers.slice(0, c), s, ...f.markers.slice(c + 1)],
            }));
        },
      }),
      (this.state = {
        markers: [],
        subscribeMarker: this.handleSubscribeToMarker,
        updateMarker: this.handleUpdateMarker,
      }));
  }
  render() {
    return $($d, { value: this.state, children: this.props.children });
  }
}
const Ht = Dd;
var Se;
(function (a) {
  ((a.Today = "Today"), (a.Custom = "Custom"), (a.Cursor = "Cursor"));
})(Se || (Se = {}));
const Ld = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "2px",
    backgroundColor: "black",
    // by default, pointer events (specifically click) will
    // "pass through".  This is added so that CursorMarker
    // will not get in the way of canvas click
    pointerEvents: "none",
  },
  Wr = (a) => ({
    ...Ld,
    left: a,
  }),
  Hr = (a) =>
    function ({ styles: s }) {
      return $("div", { style: s, "data-testid": a });
    },
  Wd = Hr("default-today-line");
let Zi = class extends Z.Component {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          date: Date.now(),
        },
      }),
      Object.defineProperty(this, "intervalToken", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }));
  }
  componentDidMount() {
    this.intervalToken = this.createIntervalUpdater(this.props.interval);
  }
  componentDidUpdate(i) {
    i.interval !== this.props.interval &&
      (clearInterval(this.intervalToken), (this.intervalToken = this.createIntervalUpdater(this.props.interval)));
  }
  createIntervalUpdater(i) {
    return setInterval(() => {
      this.setState({
        date: Date.now(),
        // FIXME: use date utils pass in as props
      });
    }, i);
  }
  componentWillUnmount() {
    clearInterval(this.intervalToken);
  }
  render() {
    const { date: i } = this.state,
      s = this.props.getLeftOffsetFromDate(i),
      c = Wr(s);
    return this.props.renderer({ styles: c, date: i });
  }
};
Object.defineProperty(Zi, "defaultProps", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    renderer: Wd,
  },
});
const Hd = Hr("default-customer-marker-id");
let Ji = class extends Z.Component {
  render() {
    const { date: i } = this.props,
      s = this.props.getLeftOffsetFromDate(i),
      c = Wr(s);
    return this.props.renderer({ styles: c, date: i });
  }
};
Object.defineProperty(Ji, "defaultProps", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    renderer: Hd,
  },
});
const Fd = Hr("default-cursor-marker");
let Qi = class extends Z.Component {
  constructor(i) {
    (super(i),
      Object.defineProperty(this, "handleCanvasMouseOver", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ({ leftOffset: s, date: c, isCursorOverCanvas: f }) => {
          this.setState({
            leftOffset: s,
            date: c,
            isShowingCursor: f,
          });
        },
      }),
      Object.defineProperty(this, "unsubscribe", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.state = {
        leftOffset: 0,
        date: 0,
        isShowingCursor: !1,
      }));
  }
  componentDidMount() {
    this.unsubscribe = this.props.subscribeToCanvasMouseOver(this.handleCanvasMouseOver);
  }
  componentWillUnmount() {
    this.unsubscribe && (this.unsubscribe(), (this.unsubscribe = void 0));
  }
  render() {
    const { isShowingCursor: i, leftOffset: s, date: c } = this.state;
    if (!i) return null;
    const f = Wr(s);
    return this.props.renderer ? this.props.renderer({ styles: f, date: c }) : null;
  }
};
Object.defineProperty(Qi, "defaultProps", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    renderer: Fd,
  },
});
const es = (a) => $(kd, { children: ({ subscribeToMouseOver: i }) => $(Qi, { subscribeToCanvasMouseOver: i, ...a }) });
es.displayName = "CursorMarkerWrapper";
const Nd = () =>
    $(Wt, {
      children: ({ getLeftOffsetFromDate: a, getTimelineState: i }) =>
        $(Ht, {
          children: ({ markers: s }) => {
            const c = i();
            return s.map((f) => {
              switch (f.type) {
                case Se.Today:
                  return /* @__PURE__ */ new Date().valueOf() >= c.canvasTimeStart &&
                    /* @__PURE__ */ new Date().valueOf() <= c.canvasTimeEnd
                    ? $(Zi, { getLeftOffsetFromDate: a, renderer: f.renderer, interval: f.interval }, f.id)
                    : null;
                case Se.Custom:
                  return f.date >= c.canvasTimeStart && f.date <= c.canvasTimeEnd
                    ? $(Ji, { renderer: f.renderer, date: f.date, getLeftOffsetFromDate: a }, f.id)
                    : null;
                case Se.Cursor:
                  return $(es, { renderer: f.renderer, getLeftOffsetFromDate: a }, f.id);
                default:
                  return null;
              }
            });
          },
        }),
    }),
  Ud = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };
class Gd extends Z.Component {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "handleMouseMove", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (i) => {
          var s;
          if (this.subscription !== null) {
            const { pageX: c } = i,
              { left: f } = ((s = this.containerEl.current) == null ? void 0 : s.getBoundingClientRect()) ?? {
                left: 0,
              },
              d = c - f,
              m = this.props.getDateFromLeftOffsetPosition(d);
            this.subscription({
              leftOffset: d,
              date: m,
              isCursorOverCanvas: !0,
            });
          }
        },
      }),
      Object.defineProperty(this, "handleMouseLeave", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          this.subscription !== null && this.subscription({ leftOffset: 0, date: 0, isCursorOverCanvas: !1 });
        },
      }),
      Object.defineProperty(this, "handleMouseMoveSubscribe", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (i) => (
          (this.subscription = i),
          () => {
            this.subscription = null;
          }
        ),
      }),
      Object.defineProperty(this, "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          subscribeToMouseOver: this.handleMouseMoveSubscribe,
        },
      }),
      Object.defineProperty(this, "containerEl", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Z.createRef(),
      }),
      Object.defineProperty(this, "subscription", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }));
  }
  render() {
    return $(Rd, {
      value: this.state,
      children: $e("div", {
        style: Ud,
        onMouseMove: this.handleMouseMove,
        onMouseLeave: this.handleMouseLeave,
        ref: this.containerEl,
        children: [$(Nd, {}), this.props.children],
      }),
    });
  }
}
const Yd = (a) =>
    $(Wt, { children: ({ getDateFromLeftOffsetPosition: i }) => $(Gd, { getDateFromLeftOffsetPosition: i, ...a }) }),
  nt = /* @__PURE__ */ new WeakMap();
function Kd(a, i) {
  if ((nt.has(a) && ts(a), i && typeof ResizeObserver < "u")) {
    const s = new ResizeObserver((c) => {
      var b;
      const f = c[0];
      if (!f) return;
      const d = (b = f.borderBoxSize) == null ? void 0 : b[0],
        m = Math.round(d ? d.inlineSize : f.contentRect.width);
      a.resize(void 0, m);
    });
    (s.observe(i, { box: "border-box" }), nt.set(a, { observer: s, windowListener: null }));
  } else {
    const s = () => a.resize();
    (window.addEventListener("resize", s), nt.set(a, { observer: null, windowListener: s }));
  }
}
function ts(a) {
  const i = nt.get(a);
  i &&
    (i.observer && i.observer.disconnect(),
    i.windowListener && window.removeEventListener("resize", i.windowListener),
    nt.delete(a));
}
const gi = { addListener: Kd, removeListener: ts },
  Xd = {
    groupIdKey: "id",
    groupTitleKey: "title",
    groupRightTitleKey: "rightTitle",
    groupLabelKey: "title",
    itemIdKey: "id",
    itemTitleKey: "title",
    itemDivTitleKey: "title",
    itemGroupKey: "group",
    itemTimeStartKey: "start_time",
    itemTimeEndKey: "end_time",
  },
  Bd = {
    second: 1,
    minute: 1,
    hour: 1,
    day: 1,
    week: 1,
    month: 1,
    year: 1,
  },
  Vd = {
    year: {
      long: "YYYY",
      mediumLong: "YYYY",
      medium: "YYYY",
      short: "YY",
    },
    month: {
      long: "MMMM YYYY",
      mediumLong: "MMMM",
      medium: "MMMM",
      short: "MM/YY",
    },
    week: {
      long: "[S]w",
      mediumLong: "[S]w",
      medium: "[S]w",
      short: "[S]w",
    },
    day: {
      long: "dddd, LL",
      mediumLong: "dddd, LL",
      medium: "dd D",
      short: "D",
    },
    hour: {
      long: "dddd, LL, HH:00",
      mediumLong: "L, HH:00",
      medium: "HH:00",
      short: "HH",
    },
    minute: {
      long: "HH:mm",
      mediumLong: "HH:mm",
      medium: "HH:mm",
      short: "mm",
    },
    second: {
      long: "mm:ss",
      mediumLong: "mm:ss",
      medium: "mm:ss",
      short: "ss",
    },
  },
  qd = {
    registerScroll: () => (console.warn("default registerScroll header used"), xt),
    rightSidebarWidth: 0,
    leftSidebarWidth: 150,
    timeSteps: { second: 1, minute: 1, hour: 1, day: 1, week: 1, month: 1, year: 1 },
    scrollOffset: 0,
    sidebarColumns: void 0,
  },
  rs = Z.createContext(qd);
class Zd extends Z.Component {
  render() {
    const i = {
      rightSidebarWidth: this.props.rightSidebarWidth,
      leftSidebarWidth: this.props.leftSidebarWidth,
      timeSteps: this.props.timeSteps,
      registerScroll: this.props.registerScroll,
      scrollOffset: this.props.scrollOffset,
      sidebarColumns: this.props.sidebarColumns,
    };
    return $(rs.Provider, { value: i, children: this.props.children });
  }
}
const Jd = rs,
  Fr = () => xi(Jd);
var ns = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function (a) {
  (function () {
    var i = {}.hasOwnProperty;
    function s() {
      for (var d = "", m = 0; m < arguments.length; m++) {
        var b = arguments[m];
        b && (d = f(d, c(b)));
      }
      return d;
    }
    function c(d) {
      if (typeof d == "string" || typeof d == "number") return d;
      if (typeof d != "object") return "";
      if (Array.isArray(d)) return s.apply(null, d);
      if (d.toString !== Object.prototype.toString && !d.toString.toString().includes("[native code]"))
        return d.toString();
      var m = "";
      for (var b in d) i.call(d, b) && d[b] && (m = f(m, b));
      return m;
    }
    function f(d, m) {
      return m ? (d ? d + " " + m : d + m) : d;
    }
    a.exports ? ((s.default = s), (a.exports = s)) : (window.classNames = s);
  })();
})(ns);
var Qd = ns.exports;
const bi = /* @__PURE__ */ Re(Qd),
  ef = "left",
  is = "right";
class tf extends Co {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "getRootProps", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (i = {}) => {
          const { style: s } = i,
            c = this.props.variant === is ? this.props.rightSidebarWidth : this.props.leftSidebarWidth;
          return {
            style: {
              color: (s == null ? void 0 : s.color) ?? "#fff",
              ...s,
              width: c,
            },
          };
        },
      }),
      Object.defineProperty(this, "getStateAndHelpers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => ({
          getRootProps: this.getRootProps,
          data: this.props.headerData,
        }),
      }));
  }
  render() {
    var f;
    const { sidebarColumns: i } = this.props;
    if (i != null && i.length) {
      const d = this.getRootProps();
      return $("div", {
        "data-testid": "sidebarHeader",
        ...d,
        style: { ...d.style, display: "flex", alignItems: "stretch", padding: 0 },
        children: i.map((m) =>
          $(
            "div",
            {
              style: {
                width: m.width,
                minWidth: m.width,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                borderRight: "1px solid rgba(255,255,255,0.3)",
                boxSizing: "border-box",
                overflow: "hidden",
                padding: "0 4px",
              },
              children: m.title,
            },
            m.id
          )
        ),
      });
    }
    const s = this.getStateAndHelpers(),
      c = this.props.children;
    return typeof c == "function" && (f = c.prototype) != null && f.isReactComponent ? $(c, { ...s }) : c(s);
  }
}
const rf = ({ getRootProps: a }) => $("div", { "data-testid": "sidebarHeader", ...a() }),
  Ot = (a) => {
    const { children: i, variant: s = ef, headerData: c } = a,
      { leftSidebarWidth: f, rightSidebarWidth: d, sidebarColumns: m } = Fr();
    return $(tf, {
      leftSidebarWidth: f,
      rightSidebarWidth: d,
      variant: s,
      headerData: c,
      sidebarColumns: m,
      children: i || rf,
    });
  };
Ot.secretKey = "SidebarHeader";
class nf extends Z.Component {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "getRootStyle", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => ({
          ...this.props.style,
          display: "flex",
          width: "100%",
        }),
      }),
      Object.defineProperty(this, "getCalendarHeaderStyle", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          const { leftSidebarWidth: i, rightSidebarWidth: s, calendarHeaderStyle: c } = this.props;
          return {
            ...c,
            overflow: "hidden",
            width: `calc(100% - ${i + s}px)`,
          };
        },
      }),
      Object.defineProperty(this, "isSidebarHeader", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (i) => (i.type === void 0 ? !1 : i.type.secretKey === Ot.secretKey),
      }));
  }
  render() {
    let i, s;
    const c = [],
      f = Array.isArray(this.props.children) ? this.props.children.filter((d) => d) : [this.props.children];
    return (
      Z.Children.map(f, (d) => {
        var m;
        this.isSidebarHeader(d)
          ? ((m = d == null ? void 0 : d.props) == null ? void 0 : m.variant) === is
            ? (i = d)
            : (s = d)
          : c.push(d);
      }),
      s || (s = $(Ot, {})),
      !i && this.props.rightSidebarWidth && (i = $(Ot, { variant: "right" })),
      $e("div", {
        "data-testid": "headerRootDiv",
        style: this.getRootStyle(),
        className: bi("rct-header-root", this.props.className),
        children: [
          s,
          $("div", {
            ref: this.props.registerScroll,
            style: this.getCalendarHeaderStyle(),
            className: bi("rct-calendar-header", this.props.calendarHeaderClassName),
            "data-testid": "headerContainer",
            children: $("div", { style: { transform: `translateX(${-this.props.scrollOffset}px)` }, children: c }),
          }),
          i,
        ],
      })
    );
  }
}
const Er = ({ children: a, style: i, className: s, calendarHeaderStyle: c, calendarHeaderClassName: f }) => {
  const { leftSidebarWidth: d, rightSidebarWidth: m, registerScroll: b, scrollOffset: w } = Fr();
  return $(nf, {
    leftSidebarWidth: d,
    rightSidebarWidth: m,
    registerScroll: b,
    scrollOffset: w,
    style: i,
    className: s,
    calendarHeaderStyle: c,
    calendarHeaderClassName: f,
    children: a,
  });
};
Er.secretKey = "TimelineHeaders";
class ss extends Z.Component {
  constructor(i) {
    (super(i),
      Object.defineProperty(this, "getHeaderIntervals", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ({ canvasTimeStart: w, canvasTimeEnd: O, unit: k, timeSteps: I, getLeftOffsetFromDate: T }) => {
          const E = [];
          return (
            Rr(w, O, k, I, (P, C) => {
              const D = T(P.valueOf()),
                L = T(C.valueOf()) - D;
              E.push({
                startTime: P,
                endTime: C,
                labelWidth: L,
                left: D,
              });
            }),
            E
          );
        },
      }),
      Object.defineProperty(this, "getRootProps", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (w = {}) => {
          const { style: O } = w;
          return {
            style: Object.assign({}, O || {}, {
              position: "relative",
              width: this.props.canvasWidth,
              height: this.props.height,
            }),
          };
        },
      }),
      Object.defineProperty(this, "getIntervalProps", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (w = {}) => {
          const { interval: O, style: k } = w;
          if (!O) throw new Error("you should provide interval to the prop getter");
          const { startTime: I, labelWidth: T, left: E } = O;
          return {
            style: {
              ...k,
              left: E,
              width: T,
              position: "absolute",
            },
            key: `label-${I.valueOf()}`,
          };
        },
      }),
      Object.defineProperty(this, "getStateAndHelpers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          const {
            canvasTimeStart: w,
            canvasTimeEnd: O,
            timelineWidth: k,
            visibleTimeStart: I,
            visibleTimeEnd: T,
            unit: E,
            showPeriod: P,
            headerData: C,
          } = this.props;
          return {
            timelineContext: {
              timelineWidth: k,
              visibleTimeStart: I,
              visibleTimeEnd: T,
              canvasTimeStart: w,
              canvasTimeEnd: O,
            },
            headerContext: {
              unit: E,
              intervals: this.state.intervals,
            },
            getRootProps: this.getRootProps,
            getIntervalProps: this.getIntervalProps,
            showPeriod: P,
            data: C,
          };
        },
      }));
    const { canvasTimeStart: s, canvasTimeEnd: c, unit: f, timeSteps: d, getLeftOffsetFromDate: m } = i,
      b = this.getHeaderIntervals({
        canvasTimeStart: s,
        canvasTimeEnd: c,
        unit: f,
        timeSteps: d,
        getLeftOffsetFromDate: m,
      });
    this.state = {
      intervals: b,
    };
  }
  /*shouldComponentUpdate(nextProps: CustomHeaderProps<Data>) {
    if (
      nextProps.canvasTimeStart !== this.props.canvasTimeStart ||
      nextProps.canvasTimeEnd !== this.props.canvasTimeEnd ||
      nextProps.canvasWidth !== this.props.canvasWidth ||
      nextProps.unit !== this.props.unit ||
      nextProps.timeSteps !== this.props.timeSteps ||
      nextProps.showPeriod !== this.props.showPeriod ||
      nextProps.children !== this.props.children ||
      nextProps.headerData !== this.props.headerData
    ) {
      return true
    }
    return false
  }*/
  componentDidUpdate(i) {
    if (!Sr(i, this.props)) {
      const { canvasTimeStart: s, canvasTimeEnd: c, unit: f, timeSteps: d, getLeftOffsetFromDate: m } = this.props,
        b = this.getHeaderIntervals({
          canvasTimeStart: s,
          canvasTimeEnd: c,
          unit: f,
          timeSteps: d,
          getLeftOffsetFromDate: m,
        });
      this.setState({ intervals: b });
    }
  }
  render() {
    var c;
    const i = this.getStateAndHelpers(),
      s = this.props.children;
    return typeof s == "function" && (c = s.prototype) != null && c.isReactComponent ? $(s, { ...i }) : s(i);
  }
}
Object.defineProperty(ss, "defaultProps", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    height: 30,
  },
});
function sf({ children: a, unit: i, headerData: s, height: c }) {
  const { getTimelineState: f, showPeriod: d, getLeftOffsetFromDate: m } = bd(),
    b = f(),
    { timeSteps: w } = Fr();
  return $(ss, {
    children: a,
    timeSteps: w,
    showPeriod: d,
    unit: i || b.timelineUnit,
    ...b,
    headerData: s,
    getLeftOffsetFromDate: m,
    height: c,
  });
}
var yi =
  Number.isNaN ||
  function (i) {
    return typeof i == "number" && i !== i;
  };
function of(a, i) {
  return !!(a === i || (yi(a) && yi(i)));
}
function af(a, i) {
  if (a.length !== i.length) return !1;
  for (var s = 0; s < a.length; s++) if (!of(a[s], i[s])) return !1;
  return !0;
}
function Ti(a, i) {
  i === void 0 && (i = af);
  var s = null;
  function c() {
    for (var f = [], d = 0; d < arguments.length; d++) f[d] = arguments[d];
    if (s && s.lastThis === this && i(f, s.lastArgs)) return s.lastResult;
    var m = a.apply(this, f);
    return (
      (s = {
        lastResult: m,
        lastArgs: f,
        lastThis: this,
      }),
      m
    );
  }
  return (
    (c.clear = function () {
      s = null;
    }),
    c
  );
}
class lf extends Z.PureComponent {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "onIntervalClick", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          const { primaryHeader: i, interval: s, unit: c, showPeriod: f } = this.props;
          if (i) {
            const d = zr(c),
              m = s.startTime.clone().startOf(d),
              b = s.startTime.clone().endOf(d);
            f(m, b);
          } else f(s.startTime, s.endTime);
        },
      }),
      Object.defineProperty(this, "getIntervalProps", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (i = {}) => ({
          ...this.props.getIntervalProps({
            interval: this.props.interval,
            ...i,
          }),
          onClick: Me(this.onIntervalClick, i.onClick),
        }),
      }));
  }
  render() {
    var w;
    const { intervalText: i, interval: s, intervalRenderer: c, headerData: f } = this.props,
      d = c;
    if (d) {
      const O = {
        getIntervalProps: this.getIntervalProps,
        intervalContext: {
          interval: s,
          intervalText: i,
        },
        data: f,
      };
      return typeof d == "function" && (w = d.prototype) != null && w.isReactComponent ? $(d, { ...O }) : d(O);
    }
    const { key: m, ...b } = this.getIntervalProps();
    return wt(
      "div",
      {
        "data-testid": "dateHeaderInterval",
        ...b,
        key: m,
        className: `rct-dateHeader ${this.props.primaryHeader ? "rct-dateHeader-primary" : ""}`,
      },
      $("span", { children: i })
    );
  }
}
function cf({
  headerContext: { intervals: a, unit: i },
  getRootProps: s,
  getIntervalProps: c,
  showPeriod: f,
  data: { style: d, intervalRenderer: m, className: b, getLabelFormat: w, unitProp: O, headerData: k },
}) {
  return $("div", {
    "data-testid": "dateHeader",
    className: b,
    ...s({ style: d }),
    children: a.map((I) => {
      const T = w([I.startTime, I.endTime], i, I.labelWidth);
      return $(
        lf,
        {
          unit: i,
          interval: I,
          showPeriod: f,
          intervalText: T,
          primaryHeader: O === "primaryHeader",
          getIntervalProps: c,
          intervalRenderer: m,
          headerData: k,
        },
        `label-${I.startTime.valueOf()}`
      );
    }),
  });
}
class uf extends Z.Component {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "getHeaderUnit", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () =>
          this.props.unit === "primaryHeader"
            ? zr(this.props.timelineUnit, this.props.useWeeks)
            : this.props.unit
              ? this.props.unit
              : this.props.timelineUnit,
      }),
      Object.defineProperty(this, "getRootStyle", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ti((i) => ({
          height: 30,
          ...i,
        })),
      }),
      Object.defineProperty(this, "getLabelFormat", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (i, s, c) => {
          const { labelFormat: f } = this.props;
          if (typeof f == "string") return i[0].format(f);
          if (typeof f == "function") return f(i, s, c);
          throw new Error("labelFormat should be function or string");
        },
      }),
      Object.defineProperty(this, "getHeaderData", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ti((i, s, c, f, d, m) => ({
          intervalRenderer: i,
          style: s,
          className: c,
          getLabelFormat: f,
          unitProp: d,
          headerData: m,
        })),
      }));
  }
  render() {
    const i = this.getHeaderUnit(),
      { height: s } = this.props;
    return $(sf, {
      children: cf,
      unit: i,
      height: s,
      headerData: this.getHeaderData(
        this.props.intervalRenderer,
        this.getRootStyle(this.props.style),
        this.props.className,
        this.getLabelFormat,
        this.props.unit,
        this.props.headerData
      ),
    });
  }
}
function wi({ labelFormat: a, unit: i, style: s, className: c, intervalRenderer: f, headerData: d, height: m }) {
  return $(Wt, {
    children: ({ getTimelineState: b }) => {
      const w = b();
      return $(uf, {
        timelineUnit: w.timelineUnit,
        useWeeks: w.useWeeks,
        unit: i,
        labelFormat: a || pf,
        style: s,
        className: c,
        intervalRenderer: f,
        headerData: d,
        height: m,
      });
    },
  });
}
const pf = ([a], i, s = 150, c = Vd) => {
  let f;
  return (
    s >= 150 ? (f = c[i].long) : s >= 100 ? (f = c[i].mediumLong) : s >= 50 ? (f = c[i].medium) : (f = c[i].short),
    a.format(f)
  );
};
var os = { exports: {} };
(function (a, i) {
  (function (s, c) {
    a.exports = c();
  })(me, function () {
    var s = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    };
    return function (c, f, d) {
      var m = f.prototype,
        b = m.format;
      ((d.en.formats = s),
        (m.format = function (w) {
          w === void 0 && (w = "YYYY-MM-DDTHH:mm:ssZ");
          var O = this.$locale().formats,
            k = (function (I, T) {
              return I.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (E, P, C) {
                var D = C && C.toUpperCase();
                return (
                  P ||
                  T[C] ||
                  s[C] ||
                  T[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (A, L, K) {
                    return L || K.slice(1);
                  })
                );
              });
            })(w, O === void 0 ? {} : O);
          return b.call(this, k);
        }));
    };
  });
})(os);
var hf = os.exports;
const df = /* @__PURE__ */ Re(hf);
var as = { exports: {} };
(function (a, i) {
  (function (s, c) {
    a.exports = c();
  })(me, function () {
    return function (s, c) {
      var f = c.prototype,
        d = f.format;
      f.format = function (m) {
        var b = this,
          w = this.$locale();
        if (!this.isValid()) return d.bind(this)(m);
        var O = this.$utils(),
          k = (m || "YYYY-MM-DDTHH:mm:ssZ").replace(
            /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
            function (I) {
              switch (I) {
                case "Q":
                  return Math.ceil((b.$M + 1) / 3);
                case "Do":
                  return w.ordinal(b.$D);
                case "gggg":
                  return b.weekYear();
                case "GGGG":
                  return b.isoWeekYear();
                case "wo":
                  return w.ordinal(b.week(), "W");
                case "w":
                case "ww":
                  return O.s(b.week(), I === "w" ? 1 : 2, "0");
                case "W":
                case "WW":
                  return O.s(b.isoWeek(), I === "W" ? 1 : 2, "0");
                case "k":
                case "kk":
                  return O.s(String(b.$H === 0 ? 24 : b.$H), I === "k" ? 1 : 2, "0");
                case "X":
                  return Math.floor(b.$d.getTime() / 1e3);
                case "x":
                  return b.$d.getTime();
                case "z":
                  return "[" + b.offsetName() + "]";
                case "zzz":
                  return "[" + b.offsetName("long") + "]";
                default:
                  return I;
              }
            }
          );
        return d.bind(this)(k);
      };
    };
  });
})(as);
var ff = as.exports;
const vf = /* @__PURE__ */ Re(ff);
var ls = { exports: {} };
(function (a, i) {
  (function (s, c) {
    a.exports = c();
  })(me, function () {
    var s = "week",
      c = "year";
    return function (f, d, m) {
      var b = d.prototype;
      ((b.week = function (w) {
        if ((w === void 0 && (w = null), w !== null)) return this.add(7 * (w - this.week()), "day");
        var O = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var k = m(this).startOf(c).add(1, c).date(O),
            I = m(this).endOf(s);
          if (k.isBefore(I)) return 1;
        }
        var T = m(this).startOf(c).date(O).startOf(s).subtract(1, "millisecond"),
          E = this.diff(T, s, !0);
        return E < 0 ? m(this).startOf("week").week() : Math.ceil(E);
      }),
        (b.weeks = function (w) {
          return (w === void 0 && (w = null), this.week(w));
        }));
    };
  });
})(ls);
var mf = ls.exports;
const gf = /* @__PURE__ */ Re(mf);
oe.extend(df);
oe.extend(vf);
oe.extend(gf);
class cs extends ue {
  getEffectiveSidebarWidth(i = this.props) {
    var s;
    return (s = i.sidebarColumns) != null && s.length
      ? i.sidebarColumns.reduce((c, f) => c + f.width, 0)
      : i.sidebarWidth;
  }
  constructor(i) {
    (super(i),
      Object.defineProperty(this, "getTimelineContext", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          const { width: T, visibleTimeStart: E, visibleTimeEnd: P, canvasTimeStart: C, canvasTimeEnd: D } = this.state,
            A = P - E,
            L = ve(T, this.props.buffer),
            K = this.props.useWeeks,
            B = St(A, T, this.props.timeSteps, K);
          return {
            canvasWidth: L,
            timelineUnit: B,
            timelineWidth: T,
            visibleTimeStart: E,
            visibleTimeEnd: P,
            canvasTimeStart: C,
            canvasTimeEnd: D,
            useWeeks: K,
          };
        },
      }),
      Object.defineProperty(this, "getTimelineUnit", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          const { width: T, visibleTimeStart: E, visibleTimeEnd: P } = this.state,
            { timeSteps: C } = this.props,
            D = P - E;
          return St(D, T, C, this.props.useWeeks);
        },
      }),
      Object.defineProperty(this, "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "scrollComponent", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "scrollHeaderRef", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "getScrollOffset", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          const { width: T, visibleTimeStart: E, canvasTimeStart: P, visibleTimeEnd: C } = this.state,
            D = C - E;
          return Math.round((T * (E - P)) / D);
        },
      }),
      Object.defineProperty(this, "resize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T = this.props, E) => {
          var B;
          E === void 0 &&
            (E = Math.round(((B = this.container.current) == null ? void 0 : B.getBoundingClientRect().width) ?? 0));
          const P = Math.round(E - this.getEffectiveSidebarWidth(T) - T.rightSidebarWidth);
          if (P === this.state.width && this.scrollComponent) return;
          const C = ve(P, T.buffer),
            {
              dimensionItems: D,
              height: A,
              groupHeights: L,
              groupTops: K,
            } = je(
              T.items,
              T.groups,
              C,
              this.state.canvasTimeStart,
              this.state.canvasTimeEnd,
              T.keys,
              T.lineHeight,
              T.itemHeightRatio,
              T.stackItems,
              this.state.draggingItem,
              this.state.resizingItem,
              this.state.dragTime,
              this.state.resizingEdge,
              this.state.resizeTime,
              this.state.newGroupOrder,
              T.itemVerticalGap
            );
          this.setState({
            width: P,
            dimensionItems: D,
            height: A,
            groupHeights: L,
            groupTops: K,
          });
        },
      }),
      Object.defineProperty(this, "onScroll", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T) => {
          var A, L;
          const E = this.state.width,
            P = this.state.canvasTimeStart,
            C = this.state.visibleTimeEnd - this.state.visibleTimeStart,
            D = P + (C * T) / E;
          (this.state.visibleTimeStart !== D || this.state.visibleTimeEnd !== D + C) &&
            ((L = (A = this.props).onTimeChange) == null ||
              L.call(A, D, D + C, this.updateScrollCanvas, this.getTimelineUnit()));
        },
      }),
      Object.defineProperty(this, "updateScrollCanvas", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E, P = !1, C = this.props.items, D = this.props.groups) => {
          this.setState(Cr(T, E, P, C, D, this.props, this.state));
        },
      }),
      Object.defineProperty(this, "handleWheelZoom", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E, P) => {
          const C = P > 0 ? 1 + (T * P) / 500 : 1 / (1 + (T * P * -1) / 500);
          this.changeZoom(C, E / this.state.width);
        },
      }),
      Object.defineProperty(this, "changeZoom", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E = 0.5) => {
          const { minZoom: P, maxZoom: C } = this.props,
            D = this.state.visibleTimeEnd - this.state.visibleTimeStart,
            A = Math.min(Math.max(Math.round(D * T), P), C),
            L = Math.round(this.state.visibleTimeStart + (D - A) * E);
          this.props.onTimeChange && this.props.onTimeChange(L, L + A, this.updateScrollCanvas, this.getTimelineUnit());
        },
      }),
      Object.defineProperty(this, "showPeriod", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E) => {
          var A, L;
          const P = T.valueOf(),
            D = E.valueOf() - P;
          D < this.props.minZoom ||
            (L = (A = this.props).onTimeChange) == null ||
            L.call(A, P, P + D, this.updateScrollCanvas, this.getTimelineUnit());
        },
      }),
      Object.defineProperty(this, "selectItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E, P) => {
          if (this.isItemSelected(T) || (this.props.itemTouchSendsClick && E === "touch")) {
            if (T && this.props.onItemClick) {
              const C = this.timeFromItemEvent(P);
              this.props.onItemClick(T, P, C);
            }
          } else if ((this.setState({ selectedItem: T }), T && this.props.onItemSelect)) {
            const C = this.timeFromItemEvent(P);
            this.props.onItemSelect(T, P, C);
          } else T === null && this.props.onItemDeselect && this.props.onItemDeselect(P);
        },
      }),
      Object.defineProperty(this, "doubleClickItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E) => {
          if (this.props.onItemDoubleClick) {
            const P = this.timeFromItemEvent(E);
            this.props.onItemDoubleClick(T, E, P);
          }
        },
      }),
      Object.defineProperty(this, "contextMenuClickItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E) => {
          if (this.props.onItemContextMenu) {
            const P = this.timeFromItemEvent(E);
            this.props.onItemContextMenu(T, E, P);
          }
        },
      }),
      Object.defineProperty(this, "getTimeFromRowClickEvent", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T) => {
          const { dragSnap: E, buffer: P } = this.props,
            { width: C, canvasTimeStart: D, canvasTimeEnd: A } = this.state,
            { offsetX: L } = T.nativeEvent;
          let K = Mr(D, A, ve(C, P), L);
          return ((K = Math.floor(K / E) * E), K);
        },
      }),
      Object.defineProperty(this, "timeFromItemEvent", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T) => {
          const { width: E, visibleTimeStart: P, visibleTimeEnd: C } = this.state,
            D = this.props.dragSnap,
            A = this.scrollComponent,
            { left: L } = A.getBoundingClientRect(),
            B = (T.clientX - L) / E,
            V = C - P,
            re = B * V;
          let x = Math.round(P + re);
          return ((x = Math.floor(x / D) * D), x);
        },
      }),
      Object.defineProperty(this, "dragItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E, P) => {
          const C = this.props.groups[P],
            D = this.props.keys;
          (this.setState({
            draggingItem: T,
            dragTime: E,
            newGroupOrder: P,
            dragGroupTitle: C ? Y(C, D.groupLabelKey) : "",
          }),
            this.updatingItem({
              eventType: "move",
              itemId: T,
              time: E,
              newGroupOrder: P,
            }));
        },
      }),
      Object.defineProperty(this, "dropItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E, P) => {
          (this.setState({ draggingItem: null, dragTime: null, dragGroupTitle: null }),
            this.props.onItemMove && this.props.onItemMove(T, E, P));
        },
      }),
      Object.defineProperty(this, "resizingItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E, P) => {
          (this.setState({
            resizingItem: T,
            resizingEdge: P,
            resizeTime: E,
          }),
            this.updatingItem({
              eventType: "resize",
              itemId: T,
              time: E,
              edge: P || void 0,
            }));
        },
      }),
      Object.defineProperty(this, "resizedItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E, P, C) => {
          (this.setState({ resizingItem: null, resizingEdge: null, resizeTime: null }),
            this.props.onItemResize && C !== 0 && this.props.onItemResize(T, E, P));
        },
      }),
      Object.defineProperty(this, "updatingItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ({ eventType: T, itemId: E, time: P, edge: C, newGroupOrder: D }) => {
          this.props.onItemDrag &&
            (T === "move"
              ? this.props.onItemDrag({
                  eventType: T,
                  itemId: E,
                  time: P,
                  newGroupOrder: D,
                })
              : this.props.onItemDrag({
                  eventType: T,
                  itemId: E,
                  time: P,
                  edge: C,
                }));
        },
      }),
      Object.defineProperty(this, "handleRowClick", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E) => {
          if ((this.hasSelectedItem() && this.selectItem(null, "click", T), this.props.onCanvasClick == null)) return;
          const P = this.getTimeFromRowClickEvent(T),
            C = Y(this.props.groups[E], this.props.keys.groupIdKey);
          this.props.onCanvasClick(C, P, T);
        },
      }),
      Object.defineProperty(this, "handleRowDoubleClick", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E) => {
          if (this.props.onCanvasDoubleClick == null) return;
          const P = this.getTimeFromRowClickEvent(T),
            C = Y(this.props.groups[E], this.props.keys.groupIdKey);
          this.props.onCanvasDoubleClick(C, P, T);
        },
      }),
      Object.defineProperty(this, "handleScrollContextMenu", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E) => {
          if (this.props.onCanvasContextMenu == null) return;
          const P = this.getTimeFromRowClickEvent(T),
            C = Y(this.props.groups[E], this.props.keys.groupIdKey);
          this.props.onCanvasContextMenu && (T.preventDefault(), this.props.onCanvasContextMenu(C, P, T));
        },
      }),
      Object.defineProperty(this, "handleHeaderRef", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T) => {
          ((this.scrollHeaderRef = T), this.props.headerRef && this.props.headerRef(T));
        },
      }),
      Object.defineProperty(this, "isTimelineHeader", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T) => (T.type === void 0 ? !1 : T.type.secretKey === Er.secretKey),
      }),
      Object.defineProperty(this, "renderHeaders", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          if (this.props.children) {
            let T;
            if (
              (Z.Children.map(this.props.children, (E) => {
                this.isTimelineHeader(E) && (T = E);
              }),
              T)
            )
              return T;
          }
          return $e(Er, { children: [$(wi, { unit: "primaryHeader" }), $(wi, {})] });
        },
      }),
      Object.defineProperty(this, "getScrollElementRef", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T) => {
          (this.props.scrollRef && this.props.scrollRef(T), (this.scrollComponent = T));
        },
      }),
      Object.defineProperty(this, "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Z.createRef(),
      }),
      Object.defineProperty(this, "getBoundingClientRect", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => this.scrollComponent.getBoundingClientRect(),
      }),
      Object.defineProperty(this, "calculateDropCoordinatesToTimeAndGroup", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (T, E) => {
          const P = ve(this.state.width, this.props.buffer),
            C = Rt(this.state.canvasTimeStart, this.state.canvasTimeEnd, P),
            D = Et(this.scrollComponent).offsetLeft,
            A = Ct(this.scrollComponent),
            L = (T - D + A.scrollLeft + this.getScrollOffset()) * C + this.state.canvasTimeStart;
          let K = 0;
          for (const V of this.state.groupTops)
            if (E > Number(V)) K = this.state.groupTops.indexOf(V);
            else break;
          if (!this.props.dragSnap) return { time: L, groupIndex: K };
          const B = oe().utcOffset() * 60 * 1e3;
          return {
            time: Math.round(L / this.props.dragSnap) * this.props.dragSnap - (B % this.props.dragSnap),
            groupIndex: K,
          };
        },
      }),
      (this.getSelected = this.getSelected.bind(this)),
      (this.hasSelectedItem = this.hasSelectedItem.bind(this)),
      (this.isItemSelected = this.isItemSelected.bind(this)));
    let s = null,
      c = null;
    if (this.props.defaultTimeStart && this.props.defaultTimeEnd)
      ((s = this.props.defaultTimeStart), (c = this.props.defaultTimeEnd));
    else if (this.props.visibleTimeStart && this.props.visibleTimeEnd)
      ((s = this.props.visibleTimeStart), (c = this.props.visibleTimeEnd));
    else
      throw new Error(
        'You must provide either "defaultTimeStart" and "defaultTimeEnd" or "visibleTimeStart" and "visibleTimeEnd" to initialize the Timeline'
      );
    const [f, d] = jr(s, c, i.buffer),
      m = {
        width: 1e3,
        visibleTimeStart: s,
        visibleTimeEnd: c,
        canvasTimeStart: f,
        canvasTimeEnd: d,
        selectedItem: null,
        dragTime: null,
        dragGroupTitle: null,
        resizeTime: null,
        resizingItem: null,
        resizingEdge: null,
        newGroupOrder: 0,
        //CHECK
      },
      b = ve(m.width, i.buffer),
      {
        dimensionItems: w,
        height: O,
        groupHeights: k,
        groupTops: I,
      } = je(
        i.items,
        i.groups,
        b,
        m.canvasTimeStart,
        m.canvasTimeEnd,
        i.keys,
        i.lineHeight,
        i.itemHeightRatio,
        i.stackItems,
        m.draggingItem,
        m.resizingItem,
        m.dragTime,
        m.resizingEdge,
        m.resizeTime,
        m.newGroupOrder,
        i.itemVerticalGap
      );
    ((m.dimensionItems = w), (m.height = O), (m.groupHeights = k), (m.groupTops = I), (this.state = m));
  }
  componentDidMount() {
    (this.resize(this.props), gi.addListener(this, this.container.current));
  }
  componentWillUnmount() {
    gi.removeListener(this);
  }
  static getDerivedStateFromProps(i, s) {
    const { visibleTimeStart: c, visibleTimeEnd: f, items: d, groups: m } = i,
      b = { items: d, groups: m },
      w = d !== s.items || m !== s.groups;
    if (c && f) Object.assign(b, Cr(c, f, w, d, m, i, s));
    else if (w) {
      const O = ve(s.width, i.buffer);
      Object.assign(
        b,
        je(
          d,
          m,
          O,
          s.canvasTimeStart,
          s.canvasTimeEnd,
          i.keys,
          i.lineHeight,
          i.itemHeightRatio,
          i.stackItems,
          s.draggingItem,
          s.resizingItem,
          s.dragTime,
          s.resizingEdge,
          s.resizeTime,
          s.newGroupOrder,
          i.itemVerticalGap
        )
      );
    }
    return b;
  }
  componentDidUpdate(i, s) {
    const c = this.state.visibleTimeEnd - this.state.visibleTimeStart,
      f = s.visibleTimeEnd - s.visibleTimeStart;
    (this.props.onZoom && c !== f && this.props.onZoom(this.getTimelineContext(), this.getTimelineUnit()),
      this.props.onBoundsChange &&
        this.state.canvasTimeStart !== s.canvasTimeStart &&
        this.props.onBoundsChange(this.state.canvasTimeStart, this.state.canvasTimeStart + c * 3));
  }
  columns(i, s, c, f, d, m) {
    var b;
    return $(Sd, {
      canvasTimeStart: i,
      canvasTimeEnd: s,
      canvasWidth: c,
      lineCount: ((b = this.props.groups) == null ? void 0 : b.length) || 0,
      minUnit: f,
      timeSteps: d,
      height: m,
      verticalLineClassNamesForTime: this.props.verticalLineClassNamesForTime,
    });
  }
  rows(i, s, c) {
    var f;
    return $(Ed, {
      groups: c,
      canvasWidth: i,
      lineCount: ((f = this.props.groups) == null ? void 0 : f.length) || 0,
      groupHeights: s,
      clickTolerance: this.props.clickTolerance,
      onRowClick: this.handleRowClick,
      onRowDoubleClick: this.handleRowDoubleClick,
      horizontalLineClassNamesForGroup: this.props.horizontalLineClassNamesForGroup,
      onRowContextClick: this.handleScrollContextMenu,
    });
  }
  items({ canvasTimeStart: i, canvasTimeEnd: s, canvasWidth: c, dimensionItems: f, groupTops: d, scrollOffset: m }) {
    return $(wd, {
      canvasTimeStart: i,
      canvasTimeEnd: s,
      canvasWidth: c,
      dimensionItems: f,
      groupTops: d,
      items: this.props.items,
      groups: this.props.groups,
      keys: this.props.keys,
      selectedItem: this.state.selectedItem || void 0,
      dragSnap: this.props.dragSnap,
      minResizeWidth: this.props.minResizeWidth,
      canChangeGroup: this.props.canChangeGroup,
      canMove: this.props.canMove,
      canResize: this.props.canResize,
      useResizeHandle: this.props.useResizeHandle,
      canSelect: this.props.canSelect,
      moveResizeValidator: this.props.moveResizeValidator,
      itemSelect: this.selectItem,
      itemDrag: this.dragItem,
      itemDrop: this.dropItem,
      onItemDoubleClick: this.doubleClickItem,
      onItemContextMenu: this.props.onItemContextMenu ? this.contextMenuClickItem : void 0,
      itemResizing: this.resizingItem,
      itemResized: this.resizedItem,
      itemRenderer: this.props.itemRenderer,
      selected: this.props.selected,
      scrollRef: this.scrollComponent,
      scrollOffset: m,
    });
  }
  sidebar(i, s) {
    const c = this.getEffectiveSidebarWidth();
    return (
      c > 0 &&
      $(vi, {
        groups: this.props.groups,
        groupRenderer: this.props.groupRenderer,
        keys: this.props.keys,
        width: c,
        groupHeights: s,
        height: i,
        sidebarColumns: this.props.sidebarColumns,
      })
    );
  }
  rightSidebar(i, s) {
    const { rightSidebarWidth: c } = this.props;
    return (
      c &&
      $(vi, {
        groups: this.props.groups,
        keys: this.props.keys,
        groupRenderer: this.props.groupRenderer,
        isRightSidebar: !0,
        width: c,
        groupHeights: s,
        height: i,
      })
    );
  }
  childrenWithProps(i, s, c, f, d, m, b, w, O, k, I) {
    if (!this.props.children) return null;
    const T = Array.isArray(this.props.children) ? this.props.children.filter((P) => P) : [this.props.children],
      E = {
        canvasTimeStart: i,
        canvasTimeEnd: s,
        canvasWidth: c,
        visibleTimeStart: w,
        visibleTimeEnd: O,
        dimensionItems: f,
        items: this.props.items,
        groups: this.props.groups,
        keys: this.props.keys,
        groupHeights: d,
        groupTops: m,
        selected: this.getSelected(),
        height: b,
        minUnit: k,
        timeSteps: I,
      };
    return Z.Children.map(T, (P) => (this.isTimelineHeader(P) ? null : Z.cloneElement(P, E)));
  }
  getSelected() {
    return this.state.selectedItem && !this.props.selected ? [this.state.selectedItem] : this.props.selected || [];
  }
  hasSelectedItem() {
    return Array.isArray(this.props.selected) ? this.props.selected.length > 0 : !!this.state.selectedItem;
  }
  isItemSelected(i) {
    return this.getSelected().some((c) => c === i);
  }
  render() {
    const { items: i, groups: s, rightSidebarWidth: c, timeSteps: f, traditionalZoom: d, buffer: m } = this.props,
      b = this.getEffectiveSidebarWidth(),
      {
        draggingItem: w,
        resizingItem: O,
        width: k,
        visibleTimeStart: I,
        visibleTimeEnd: T,
        canvasTimeStart: E,
        canvasTimeEnd: P,
      } = this.state,
      C = this.getScrollOffset();
    let { dimensionItems: D, height: A, groupHeights: L, groupTops: K } = this.state;
    const B = T - I,
      V = ve(k, m),
      re = St(B, k, f, this.props.useWeeks);
    if (!!w || !!O) {
      const ae = je(
        i,
        s,
        V,
        this.state.canvasTimeStart,
        this.state.canvasTimeEnd,
        this.props.keys,
        this.props.lineHeight,
        this.props.itemHeightRatio,
        this.props.stackItems,
        this.state.draggingItem,
        this.state.resizingItem,
        this.state.dragTime,
        this.state.resizingEdge,
        this.state.resizeTime,
        this.state.newGroupOrder,
        this.props.itemVerticalGap
      );
      ((D = ae.dimensionItems), (A = ae.height), (L = ae.groupHeights), (K = ae.groupTops));
    }
    const Oe = {
      height: `${A}px`,
    };
    return $(gd, {
      visibleTimeStart: I,
      visibleTimeEnd: T,
      canvasTimeStart: E,
      canvasTimeEnd: P,
      canvasWidth: V,
      showPeriod: this.showPeriod,
      timelineUnit: re,
      timelineWidth: this.state.width,
      useWeeks: this.props.useWeeks,
      children: $(Ad, {
        children: $(Zd, {
          registerScroll: this.handleHeaderRef,
          timeSteps: f,
          leftSidebarWidth: b,
          rightSidebarWidth: this.props.rightSidebarWidth,
          scrollOffset: C,
          sidebarColumns: this.props.sidebarColumns,
          children: $e("div", {
            style: this.props.style,
            ref: this.container,
            className: `react-calendar-timeline ${this.props.className}`,
            children: [
              this.renderHeaders(),
              $e("div", {
                style: Oe,
                className: "rct-outer",
                children: [
                  b > 0 ? this.sidebar(A, L) : null,
                  $(Pd, {
                    scrollRef: this.getScrollElementRef,
                    width: k,
                    height: A,
                    onZoom: this.changeZoom,
                    onWheelZoom: this.handleWheelZoom,
                    traditionalZoom: !!d,
                    onScroll: this.onScroll,
                    scrollOffset: C,
                    children: $e(Yd, {
                      children: [
                        this.columns(E, P, V, re, f, A),
                        this.rows(V, L, s),
                        this.items({
                          canvasTimeStart: E,
                          canvasTimeEnd: P,
                          canvasWidth: V,
                          dimensionItems: D,
                          groupTops: K,
                          scrollOffset: C,
                        }),
                        this.childrenWithProps(E, P, V, D, L, K, A, I, T, re, f),
                      ],
                    }),
                  }),
                  c > 0 ? this.rightSidebar(A, L) : null,
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }
}
Object.defineProperty(cs, "setDayjsLocale", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: oe.locale,
});
Object.defineProperty(cs, "defaultProps", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    sidebarWidth: 150,
    rightSidebarWidth: 0,
    dragSnap: 1e3 * 60 * 15,
    // 15min
    minResizeWidth: 20,
    lineHeight: 30,
    itemHeightRatio: 0.65,
    buffer: 3,
    minZoom: 60 * 60 * 1e3,
    // 1 hour
    maxZoom: 5 * 365.24 * 86400 * 1e3,
    // 5 years
    clickTolerance: 3,
    // how many pixels can we drag for it to be still considered a click?
    canChangeGroup: !0,
    canMove: !0,
    canResize: "right",
    useResizeHandle: !1,
    canSelect: !0,
    stackItems: !1,
    traditionalZoom: !1,
    horizontalLineClassNamesForGroup: null,
    onItemMove: null,
    onItemResize: null,
    onItemClick: null,
    onItemSelect: null,
    onItemDeselect: null,
    onItemDrag: null,
    onCanvasClick: null,
    onItemDoubleClick: null,
    onItemContextMenu: null,
    onZoom: null,
    verticalLineClassNamesForTime: null,
    moveResizeValidator: null,
    dayBackground: null,
    defaultTimeStart: null,
    defaultTimeEnd: null,
    itemTouchSendsClick: !1,
    style: {},
    className: "",
    keys: Xd,
    timeSteps: Bd,
    useWeeks: !0,
    headerRef: () => {},
    scrollRef: () => {},
    // if you pass in visibleTimeStart and visibleTimeEnd, you must also pass onTimeChange(visibleTimeStart, visibleTimeEnd),
    // which needs to update the props visibleTimeStart and visibleTimeEnd to the ones passed
    visibleTimeStart: null,
    visibleTimeEnd: null,
    onTimeChange: function (a, i, s) {
      s(a, i);
    },
    // called when the canvas area of the calendar changes
    onBoundsChange: null,
    children: null,
    selected: null,
  },
});
const Mf = (a) => a.children || null;
class us extends Z.Component {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "unsubscribe", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "getMarker", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }));
  }
  componentDidMount() {
    const { unsubscribe: i, getMarker: s } = this.props.subscribeMarker({
      type: Se.Today,
      renderer: this.props.children,
      interval: this.props.interval,
    });
    ((this.unsubscribe = i), (this.getMarker = s));
  }
  componentWillUnmount() {
    this.unsubscribe != null && (this.unsubscribe(), (this.unsubscribe = null));
  }
  componentDidUpdate(i) {
    if (i.interval !== this.props.interval && this.getMarker) {
      const s = this.getMarker();
      this.props.updateMarker({
        ...s,
        interval: this.props.interval,
      });
    }
  }
  render() {
    return null;
  }
}
Object.defineProperty(us, "defaultProps", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    interval: 1e3 * 10,
    // default to ten seconds
  },
});
const bf = (a) =>
  $(Ht, {
    children: ({ subscribeMarker: i, updateMarker: s }) => $(us, { subscribeMarker: i, updateMarker: s, ...a }),
  });
bf.displayName = "TodayMarkerWrapper";
class yf extends ue {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "unsubscribe", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }),
      Object.defineProperty(this, "getMarker", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }));
  }
  componentDidUpdate(i) {
    if (i.date !== this.props.date && this.getMarker) {
      const s = this.getMarker();
      this.props.updateMarker({ ...s, date: this.props.date });
    }
  }
  componentDidMount() {
    const { unsubscribe: i, getMarker: s } = this.props.subscribeMarker({
      type: Se.Custom,
      renderer: this.props.children,
      date: this.props.date,
    });
    ((this.unsubscribe = i), (this.getMarker = s));
  }
  componentWillUnmount() {
    this.unsubscribe != null && (this.unsubscribe(), (this.unsubscribe = null));
  }
  render() {
    return null;
  }
}
const Tf = (a) =>
  $(Ht, {
    children: ({ subscribeMarker: i, updateMarker: s }) => $(yf, { subscribeMarker: i, updateMarker: s, ...a }),
  });
Tf.displayName = "CustomMarkerWrapper";
class wf extends ue {
  constructor() {
    (super(...arguments),
      Object.defineProperty(this, "unsubscribe", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      }));
  }
  componentDidMount() {
    const { unsubscribe: i } = this.props.subscribeMarker({
      type: Se.Cursor,
      renderer: this.props.children,
    });
    this.unsubscribe = i;
  }
  componentWillUnmount() {
    this.unsubscribe != null && (this.unsubscribe(), (this.unsubscribe = null));
  }
  render() {
    return null;
  }
}
const xf = (a) => $(Ht, { children: ({ subscribeMarker: i }) => $(wf, { subscribeMarker: i, ...a }) });
xf.displayName = "CursorMarkerWrapper";
export {
  xf as CursorMarker,
  sf as CustomHeader,
  Tf as CustomMarker,
  wi as DateHeader,
  Cd as GroupRow,
  wd as RowItems,
  Ot as SidebarHeader,
  cs as Timeline,
  Er as TimelineHeaders,
  Mf as TimelineMarkers,
  bf as TodayMarker,
  Ef as calendarUtils,
  cs as default,
};
//# sourceMappingURL=react-calendar-timeline.es.js.map
