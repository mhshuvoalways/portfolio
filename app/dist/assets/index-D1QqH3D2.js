

(function () {
  const U = document.createElement("link").relList;
  if (U && U.supports && U.supports("modulepreload")) return;
  for (const Q of document.querySelectorAll('link[rel="modulepreload"]')) y(Q);
  new MutationObserver((Q) => {
    for (const J of Q)
      if (J.type === "childList")
        for (const dl of J.addedNodes)
          dl.tagName === "LINK" && dl.rel === "modulepreload" && y(dl);
  }).observe(document, { childList: !0, subtree: !0 });
  function G(Q) {
    const J = {};
    return (
      Q.integrity && (J.integrity = Q.integrity),
      Q.referrerPolicy && (J.referrerPolicy = Q.referrerPolicy),
      Q.crossOrigin === "use-credentials"
        ? (J.credentials = "include")
        : Q.crossOrigin === "anonymous"
        ? (J.credentials = "omit")
        : (J.credentials = "same-origin"),
      J
    );
  }
  function y(Q) {
    if (Q.ep) return;
    Q.ep = !0;
    const J = G(Q);
    fetch(Q.href, J);
  }
})();
var kf = { exports: {} },
  me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var k0;
function R1() {
  if (k0) return me;
  k0 = 1;
  var A = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.fragment");
  function G(y, Q, J) {
    var dl = null;
    if (
      (J !== void 0 && (dl = "" + J),
      Q.key !== void 0 && (dl = "" + Q.key),
      "key" in Q)
    ) {
      J = {};
      for (var P in Q) P !== "key" && (J[P] = Q[P]);
    } else J = Q;
    return (
      (Q = J.ref),
      { $$typeof: A, type: y, key: dl, ref: Q !== void 0 ? Q : null, props: J }
    );
  }
  return (me.Fragment = U), (me.jsx = G), (me.jsxs = G), me;
}
var F0;
function U1() {
  return F0 || ((F0 = 1), (kf.exports = R1())), kf.exports;
}
var D = U1(),
  Ff = { exports: {} },
  C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I0;
function x1() {
  if (I0) return C;
  I0 = 1;
  var A = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.portal"),
    G = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    J = Symbol.for("react.consumer"),
    dl = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    R = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    N = Symbol.for("react.lazy"),
    nl = Symbol.iterator;
  function il(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (nl && s[nl]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var jl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Bl = Object.assign,
    dt = {};
  function Gl(s, p, O) {
    (this.props = s),
      (this.context = p),
      (this.refs = dt),
      (this.updater = O || jl);
  }
  (Gl.prototype.isReactComponent = {}),
    (Gl.prototype.setState = function (s, p) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, p, "setState");
    }),
    (Gl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function da() {}
  da.prototype = Gl.prototype;
  function zt(s, p, O) {
    (this.props = s),
      (this.context = p),
      (this.refs = dt),
      (this.updater = O || jl);
  }
  var Rl = (zt.prototype = new da());
  (Rl.constructor = zt), Bl(Rl, Gl.prototype), (Rl.isPureReactComponent = !0);
  var vt = Array.isArray,
    $ = { H: null, A: null, T: null, S: null, V: null },
    Ll = Object.prototype.hasOwnProperty;
  function Kl(s, p, O, z, H, k) {
    return (
      (O = k.ref),
      { $$typeof: A, type: s, key: p, ref: O !== void 0 ? O : null, props: k }
    );
  }
  function wl(s, p) {
    return Kl(s.type, p, void 0, void 0, void 0, s.props);
  }
  function gt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === A;
  }
  function Ha(s) {
    var p = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (O) {
        return p[O];
      })
    );
  }
  var _t = /\/+/g;
  function Ul(s, p) {
    return typeof s == "object" && s !== null && s.key != null
      ? Ha("" + s.key)
      : p.toString(36);
  }
  function va() {}
  function ya(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(va, va)
            : ((s.status = "pending"),
              s.then(
                function (p) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = p));
                },
                function (p) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = p));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function xl(s, p, O, z, H) {
    var k = typeof s;
    (k === "undefined" || k === "boolean") && (s = null);
    var X = !1;
    if (s === null) X = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case A:
            case U:
              X = !0;
              break;
            case N:
              return (X = s._init), xl(X(s._payload), p, O, z, H);
          }
      }
    if (X)
      return (
        (H = H(s)),
        (X = z === "" ? "." + Ul(s, 0) : z),
        vt(H)
          ? ((O = ""),
            X != null && (O = X.replace(_t, "$&/") + "/"),
            xl(H, p, O, "", function (Ct) {
              return Ct;
            }))
          : H != null &&
            (gt(H) &&
              (H = wl(
                H,
                O +
                  (H.key == null || (s && s.key === H.key)
                    ? ""
                    : ("" + H.key).replace(_t, "$&/") + "/") +
                  X
              )),
            p.push(H)),
        1
      );
    X = 0;
    var Jl = z === "" ? "." : z + ":";
    if (vt(s))
      for (var ol = 0; ol < s.length; ol++)
        (z = s[ol]), (k = Jl + Ul(z, ol)), (X += xl(z, p, O, k, H));
    else if (((ol = il(s)), typeof ol == "function"))
      for (s = ol.call(s), ol = 0; !(z = s.next()).done; )
        (z = z.value), (k = Jl + Ul(z, ol++)), (X += xl(z, p, O, k, H));
    else if (k === "object") {
      if (typeof s.then == "function") return xl(ya(s), p, O, z, H);
      throw (
        ((p = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (p === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : p) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return X;
  }
  function b(s, p, O) {
    if (s == null) return s;
    var z = [],
      H = 0;
    return (
      xl(s, z, "", "", function (k) {
        return p.call(O, k, H++);
      }),
      z
    );
  }
  function _(s) {
    if (s._status === -1) {
      var p = s._result;
      (p = p()),
        p.then(
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = O));
          },
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = O));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = p));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var B =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var p = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(p)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function cl() {}
  return (
    (C.Children = {
      map: b,
      forEach: function (s, p, O) {
        b(
          s,
          function () {
            p.apply(this, arguments);
          },
          O
        );
      },
      count: function (s) {
        var p = 0;
        return (
          b(s, function () {
            p++;
          }),
          p
        );
      },
      toArray: function (s) {
        return (
          b(s, function (p) {
            return p;
          }) || []
        );
      },
      only: function (s) {
        if (!gt(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (C.Component = Gl),
    (C.Fragment = G),
    (C.Profiler = Q),
    (C.PureComponent = zt),
    (C.StrictMode = y),
    (C.Suspense = R),
    (C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (C.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return $.H.useMemoCache(s);
      },
    }),
    (C.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (C.cloneElement = function (s, p, O) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var z = Bl({}, s.props),
        H = s.key,
        k = void 0;
      if (p != null)
        for (X in (p.ref !== void 0 && (k = void 0),
        p.key !== void 0 && (H = "" + p.key),
        p))
          !Ll.call(p, X) ||
            X === "key" ||
            X === "__self" ||
            X === "__source" ||
            (X === "ref" && p.ref === void 0) ||
            (z[X] = p[X]);
      var X = arguments.length - 2;
      if (X === 1) z.children = O;
      else if (1 < X) {
        for (var Jl = Array(X), ol = 0; ol < X; ol++)
          Jl[ol] = arguments[ol + 2];
        z.children = Jl;
      }
      return Kl(s.type, H, void 0, void 0, k, z);
    }),
    (C.createContext = function (s) {
      return (
        (s = {
          $$typeof: dl,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: J, _context: s }),
        s
      );
    }),
    (C.createElement = function (s, p, O) {
      var z,
        H = {},
        k = null;
      if (p != null)
        for (z in (p.key !== void 0 && (k = "" + p.key), p))
          Ll.call(p, z) &&
            z !== "key" &&
            z !== "__self" &&
            z !== "__source" &&
            (H[z] = p[z]);
      var X = arguments.length - 2;
      if (X === 1) H.children = O;
      else if (1 < X) {
        for (var Jl = Array(X), ol = 0; ol < X; ol++)
          Jl[ol] = arguments[ol + 2];
        H.children = Jl;
      }
      if (s && s.defaultProps)
        for (z in ((X = s.defaultProps), X)) H[z] === void 0 && (H[z] = X[z]);
      return Kl(s, k, void 0, void 0, null, H);
    }),
    (C.createRef = function () {
      return { current: null };
    }),
    (C.forwardRef = function (s) {
      return { $$typeof: P, render: s };
    }),
    (C.isValidElement = gt),
    (C.lazy = function (s) {
      return { $$typeof: N, _payload: { _status: -1, _result: s }, _init: _ };
    }),
    (C.memo = function (s, p) {
      return { $$typeof: E, type: s, compare: p === void 0 ? null : p };
    }),
    (C.startTransition = function (s) {
      var p = $.T,
        O = {};
      $.T = O;
      try {
        var z = s(),
          H = $.S;
        H !== null && H(O, z),
          typeof z == "object" &&
            z !== null &&
            typeof z.then == "function" &&
            z.then(cl, B);
      } catch (k) {
        B(k);
      } finally {
        $.T = p;
      }
    }),
    (C.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (C.use = function (s) {
      return $.H.use(s);
    }),
    (C.useActionState = function (s, p, O) {
      return $.H.useActionState(s, p, O);
    }),
    (C.useCallback = function (s, p) {
      return $.H.useCallback(s, p);
    }),
    (C.useContext = function (s) {
      return $.H.useContext(s);
    }),
    (C.useDebugValue = function () {}),
    (C.useDeferredValue = function (s, p) {
      return $.H.useDeferredValue(s, p);
    }),
    (C.useEffect = function (s, p, O) {
      var z = $.H;
      if (typeof O == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return z.useEffect(s, p);
    }),
    (C.useId = function () {
      return $.H.useId();
    }),
    (C.useImperativeHandle = function (s, p, O) {
      return $.H.useImperativeHandle(s, p, O);
    }),
    (C.useInsertionEffect = function (s, p) {
      return $.H.useInsertionEffect(s, p);
    }),
    (C.useLayoutEffect = function (s, p) {
      return $.H.useLayoutEffect(s, p);
    }),
    (C.useMemo = function (s, p) {
      return $.H.useMemo(s, p);
    }),
    (C.useOptimistic = function (s, p) {
      return $.H.useOptimistic(s, p);
    }),
    (C.useReducer = function (s, p, O) {
      return $.H.useReducer(s, p, O);
    }),
    (C.useRef = function (s) {
      return $.H.useRef(s);
    }),
    (C.useState = function (s) {
      return $.H.useState(s);
    }),
    (C.useSyncExternalStore = function (s, p, O) {
      return $.H.useSyncExternalStore(s, p, O);
    }),
    (C.useTransition = function () {
      return $.H.useTransition();
    }),
    (C.version = "19.1.0"),
    C
  );
}
var P0;
function ai() {
  return P0 || ((P0 = 1), (Ff.exports = x1())), Ff.exports;
}
var W = ai(),
  If = { exports: {} },
  ge = {},
  Pf = { exports: {} },
  li = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr;
function N1() {
  return (
    lr ||
      ((lr = 1),
      (function (A) {
        function U(b, _) {
          var B = b.length;
          b.push(_);
          l: for (; 0 < B; ) {
            var cl = (B - 1) >>> 1,
              s = b[cl];
            if (0 < Q(s, _)) (b[cl] = _), (b[B] = s), (B = cl);
            else break l;
          }
        }
        function G(b) {
          return b.length === 0 ? null : b[0];
        }
        function y(b) {
          if (b.length === 0) return null;
          var _ = b[0],
            B = b.pop();
          if (B !== _) {
            b[0] = B;
            l: for (var cl = 0, s = b.length, p = s >>> 1; cl < p; ) {
              var O = 2 * (cl + 1) - 1,
                z = b[O],
                H = O + 1,
                k = b[H];
              if (0 > Q(z, B))
                H < s && 0 > Q(k, z)
                  ? ((b[cl] = k), (b[H] = B), (cl = H))
                  : ((b[cl] = z), (b[O] = B), (cl = O));
              else if (H < s && 0 > Q(k, B)) (b[cl] = k), (b[H] = B), (cl = H);
              else break l;
            }
          }
          return _;
        }
        function Q(b, _) {
          var B = b.sortIndex - _.sortIndex;
          return B !== 0 ? B : b.id - _.id;
        }
        if (
          ((A.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var J = performance;
          A.unstable_now = function () {
            return J.now();
          };
        } else {
          var dl = Date,
            P = dl.now();
          A.unstable_now = function () {
            return dl.now() - P;
          };
        }
        var R = [],
          E = [],
          N = 1,
          nl = null,
          il = 3,
          jl = !1,
          Bl = !1,
          dt = !1,
          Gl = !1,
          da = typeof setTimeout == "function" ? setTimeout : null,
          zt = typeof clearTimeout == "function" ? clearTimeout : null,
          Rl = typeof setImmediate < "u" ? setImmediate : null;
        function vt(b) {
          for (var _ = G(E); _ !== null; ) {
            if (_.callback === null) y(E);
            else if (_.startTime <= b)
              y(E), (_.sortIndex = _.expirationTime), U(R, _);
            else break;
            _ = G(E);
          }
        }
        function $(b) {
          if (((dt = !1), vt(b), !Bl))
            if (G(R) !== null) (Bl = !0), Ll || ((Ll = !0), Ul());
            else {
              var _ = G(E);
              _ !== null && xl($, _.startTime - b);
            }
        }
        var Ll = !1,
          Kl = -1,
          wl = 5,
          gt = -1;
        function Ha() {
          return Gl ? !0 : !(A.unstable_now() - gt < wl);
        }
        function _t() {
          if (((Gl = !1), Ll)) {
            var b = A.unstable_now();
            gt = b;
            var _ = !0;
            try {
              l: {
                (Bl = !1), dt && ((dt = !1), zt(Kl), (Kl = -1)), (jl = !0);
                var B = il;
                try {
                  t: {
                    for (
                      vt(b), nl = G(R);
                      nl !== null && !(nl.expirationTime > b && Ha());

                    ) {
                      var cl = nl.callback;
                      if (typeof cl == "function") {
                        (nl.callback = null), (il = nl.priorityLevel);
                        var s = cl(nl.expirationTime <= b);
                        if (((b = A.unstable_now()), typeof s == "function")) {
                          (nl.callback = s), vt(b), (_ = !0);
                          break t;
                        }
                        nl === G(R) && y(R), vt(b);
                      } else y(R);
                      nl = G(R);
                    }
                    if (nl !== null) _ = !0;
                    else {
                      var p = G(E);
                      p !== null && xl($, p.startTime - b), (_ = !1);
                    }
                  }
                  break l;
                } finally {
                  (nl = null), (il = B), (jl = !1);
                }
                _ = void 0;
              }
            } finally {
              _ ? Ul() : (Ll = !1);
            }
          }
        }
        var Ul;
        if (typeof Rl == "function")
          Ul = function () {
            Rl(_t);
          };
        else if (typeof MessageChannel < "u") {
          var va = new MessageChannel(),
            ya = va.port2;
          (va.port1.onmessage = _t),
            (Ul = function () {
              ya.postMessage(null);
            });
        } else
          Ul = function () {
            da(_t, 0);
          };
        function xl(b, _) {
          Kl = da(function () {
            b(A.unstable_now());
          }, _);
        }
        (A.unstable_IdlePriority = 5),
          (A.unstable_ImmediatePriority = 1),
          (A.unstable_LowPriority = 4),
          (A.unstable_NormalPriority = 3),
          (A.unstable_Profiling = null),
          (A.unstable_UserBlockingPriority = 2),
          (A.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (A.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (wl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (A.unstable_getCurrentPriorityLevel = function () {
            return il;
          }),
          (A.unstable_next = function (b) {
            switch (il) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = il;
            }
            var B = il;
            il = _;
            try {
              return b();
            } finally {
              il = B;
            }
          }),
          (A.unstable_requestPaint = function () {
            Gl = !0;
          }),
          (A.unstable_runWithPriority = function (b, _) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var B = il;
            il = b;
            try {
              return _();
            } finally {
              il = B;
            }
          }),
          (A.unstable_scheduleCallback = function (b, _, B) {
            var cl = A.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? cl + B : cl))
                : (B = cl),
              b)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = B + s),
              (b = {
                id: N++,
                callback: _,
                priorityLevel: b,
                startTime: B,
                expirationTime: s,
                sortIndex: -1,
              }),
              B > cl
                ? ((b.sortIndex = B),
                  U(E, b),
                  G(R) === null &&
                    b === G(E) &&
                    (dt ? (zt(Kl), (Kl = -1)) : (dt = !0), xl($, B - cl)))
                : ((b.sortIndex = s),
                  U(R, b),
                  Bl || jl || ((Bl = !0), Ll || ((Ll = !0), Ul()))),
              b
            );
          }),
          (A.unstable_shouldYield = Ha),
          (A.unstable_wrapCallback = function (b) {
            var _ = il;
            return function () {
              var B = il;
              il = _;
              try {
                return b.apply(this, arguments);
              } finally {
                il = B;
              }
            };
          });
      })(li)),
    li
  );
}
var tr;
function H1() {
  return tr || ((tr = 1), (Pf.exports = N1())), Pf.exports;
}
var ti = { exports: {} },
  ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar;
function q1() {
  if (ar) return ql;
  ar = 1;
  var A = ai();
  function U(R) {
    var E = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        E += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return (
      "Minified React error #" +
      R +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function G() {}
  var y = {
      d: {
        f: G,
        r: function () {
          throw Error(U(522));
        },
        D: G,
        C: G,
        L: G,
        m: G,
        X: G,
        S: G,
        M: G,
      },
      p: 0,
      findDOMNode: null,
    },
    Q = Symbol.for("react.portal");
  function J(R, E, N) {
    var nl =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: nl == null ? null : "" + nl,
      children: R,
      containerInfo: E,
      implementation: N,
    };
  }
  var dl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function P(R, E) {
    if (R === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y),
    (ql.createPortal = function (R, E) {
      var N =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(U(299));
      return J(R, E, null, N);
    }),
    (ql.flushSync = function (R) {
      var E = dl.T,
        N = y.p;
      try {
        if (((dl.T = null), (y.p = 2), R)) return R();
      } finally {
        (dl.T = E), (y.p = N), y.d.f();
      }
    }),
    (ql.preconnect = function (R, E) {
      typeof R == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        y.d.C(R, E));
    }),
    (ql.prefetchDNS = function (R) {
      typeof R == "string" && y.d.D(R);
    }),
    (ql.preinit = function (R, E) {
      if (typeof R == "string" && E && typeof E.as == "string") {
        var N = E.as,
          nl = P(N, E.crossOrigin),
          il = typeof E.integrity == "string" ? E.integrity : void 0,
          jl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        N === "style"
          ? y.d.S(R, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: nl,
              integrity: il,
              fetchPriority: jl,
            })
          : N === "script" &&
            y.d.X(R, {
              crossOrigin: nl,
              integrity: il,
              fetchPriority: jl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (ql.preinitModule = function (R, E) {
      if (typeof R == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var N = P(E.as, E.crossOrigin);
            y.d.M(R, {
              crossOrigin: N,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && y.d.M(R);
    }),
    (ql.preload = function (R, E) {
      if (
        typeof R == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var N = E.as,
          nl = P(N, E.crossOrigin);
        y.d.L(R, N, {
          crossOrigin: nl,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (ql.preloadModule = function (R, E) {
      if (typeof R == "string")
        if (E) {
          var N = P(E.as, E.crossOrigin);
          y.d.m(R, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: N,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else y.d.m(R);
    }),
    (ql.requestFormReset = function (R) {
      y.d.r(R);
    }),
    (ql.unstable_batchedUpdates = function (R, E) {
      return R(E);
    }),
    (ql.useFormState = function (R, E, N) {
      return dl.H.useFormState(R, E, N);
    }),
    (ql.useFormStatus = function () {
      return dl.H.useHostTransitionStatus();
    }),
    (ql.version = "19.1.0"),
    ql
  );
}
var ur;
function j1() {
  if (ur) return ti.exports;
  ur = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (U) {
        console.error(U);
      }
  }
  return A(), (ti.exports = q1()), ti.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var er;
function B1() {
  if (er) return ge;
  er = 1;
  var A = H1(),
    U = ai(),
    G = j1();
  function y(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Q(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function J(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function P(l) {
    if (J(l) !== l) throw Error(y(188));
  }
  function R(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = J(l)), t === null)) throw Error(y(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return P(e), l;
          if (n === u) return P(e), t;
          n = n.sibling;
        }
        throw Error(y(188));
      }
      if (a.return !== u.return) (a = e), (u = n);
      else {
        for (var c = !1, f = e.child; f; ) {
          if (f === a) {
            (c = !0), (a = e), (u = n);
            break;
          }
          if (f === u) {
            (c = !0), (u = e), (a = n);
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === a) {
              (c = !0), (a = n), (u = e);
              break;
            }
            if (f === u) {
              (c = !0), (u = n), (a = e);
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(y(189));
        }
      }
      if (a.alternate !== u) throw Error(y(190));
    }
    if (a.tag !== 3) throw Error(y(188));
    return a.stateNode.current === a ? l : t;
  }
  function E(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = E(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var N = Object.assign,
    nl = Symbol.for("react.element"),
    il = Symbol.for("react.transitional.element"),
    jl = Symbol.for("react.portal"),
    Bl = Symbol.for("react.fragment"),
    dt = Symbol.for("react.strict_mode"),
    Gl = Symbol.for("react.profiler"),
    da = Symbol.for("react.provider"),
    zt = Symbol.for("react.consumer"),
    Rl = Symbol.for("react.context"),
    vt = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    Ll = Symbol.for("react.suspense_list"),
    Kl = Symbol.for("react.memo"),
    wl = Symbol.for("react.lazy"),
    gt = Symbol.for("react.activity"),
    Ha = Symbol.for("react.memo_cache_sentinel"),
    _t = Symbol.iterator;
  function Ul(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (_t && l[_t]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var va = Symbol.for("react.client.reference");
  function ya(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === va ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case Gl:
        return "Profiler";
      case dt:
        return "StrictMode";
      case $:
        return "Suspense";
      case Ll:
        return "SuspenseList";
      case gt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Rl:
          return (l.displayName || "Context") + ".Provider";
        case zt:
          return (l._context.displayName || "Context") + ".Consumer";
        case vt:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Kl:
          return (
            (t = l.displayName || null), t !== null ? t : ya(l.type) || "Memo"
          );
        case wl:
          (t = l._payload), (l = l._init);
          try {
            return ya(l(t));
          } catch {}
      }
    return null;
  }
  var xl = Array.isArray,
    b = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    cl = [],
    s = -1;
  function p(l) {
    return { current: l };
  }
  function O(l) {
    0 > s || ((l.current = cl[s]), (cl[s] = null), s--);
  }
  function z(l, t) {
    s++, (cl[s] = l.current), (l.current = t);
  }
  var H = p(null),
    k = p(null),
    X = p(null),
    Jl = p(null);
  function ol(l, t) {
    switch ((z(X, t), z(k, l), z(H, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? z0(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = z0(t)), (l = _0(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    O(H), z(H, l);
  }
  function Ct() {
    O(H), O(k), O(X);
  }
  function qn(l) {
    l.memoizedState !== null && z(Jl, l);
    var t = H.current,
      a = _0(t, l.type);
    t !== a && (z(k, l), z(H, a));
  }
  function be(l) {
    k.current === l && (O(H), O(k)),
      Jl.current === l && (O(Jl), (re._currentValue = B));
  }
  var jn = Object.prototype.hasOwnProperty,
    Bn = A.unstable_scheduleCallback,
    Yn = A.unstable_cancelCallback,
    fr = A.unstable_shouldYield,
    ir = A.unstable_requestPaint,
    bt = A.unstable_now,
    sr = A.unstable_getCurrentPriorityLevel,
    ui = A.unstable_ImmediatePriority,
    ei = A.unstable_UserBlockingPriority,
    Se = A.unstable_NormalPriority,
    or = A.unstable_LowPriority,
    ni = A.unstable_IdlePriority,
    rr = A.log,
    dr = A.unstable_setDisableYieldValue,
    Su = null,
    Wl = null;
  function Zt(l) {
    if (
      (typeof rr == "function" && dr(l),
      Wl && typeof Wl.setStrictMode == "function")
    )
      try {
        Wl.setStrictMode(Su, l);
      } catch {}
  }
  var $l = Math.clz32 ? Math.clz32 : hr,
    vr = Math.log,
    yr = Math.LN2;
  function hr(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((vr(l) / yr) | 0)) | 0;
  }
  var Te = 256,
    Ee = 4194304;
  function ha(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function pe(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var f = u & 134217727;
    return (
      f !== 0
        ? ((u = f & ~n),
          u !== 0
            ? (e = ha(u))
            : ((c &= f),
              c !== 0
                ? (e = ha(c))
                : a || ((a = f & ~l), a !== 0 && (e = ha(a)))))
        : ((f = u & ~n),
          f !== 0
            ? (e = ha(f))
            : c !== 0
            ? (e = ha(c))
            : a || ((a = u & ~l), a !== 0 && (e = ha(a)))),
      e === 0
        ? 0
        : t !== 0 &&
          t !== e &&
          (t & n) === 0 &&
          ((n = e & -e),
          (a = t & -t),
          n >= a || (n === 32 && (a & 4194048) !== 0))
        ? t
        : e
    );
  }
  function Tu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function mr(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ci() {
    var l = Te;
    return (Te <<= 1), (Te & 4194048) === 0 && (Te = 256), l;
  }
  function fi() {
    var l = Ee;
    return (Ee <<= 1), (Ee & 62914560) === 0 && (Ee = 4194304), l;
  }
  function Gn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Eu(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function gr(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var f = l.entanglements,
      i = l.expirationTimes,
      v = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var g = 31 - $l(a),
        T = 1 << g;
      (f[g] = 0), (i[g] = -1);
      var h = v[g];
      if (h !== null)
        for (v[g] = null, g = 0; g < h.length; g++) {
          var m = h[g];
          m !== null && (m.lane &= -536870913);
        }
      a &= ~T;
    }
    u !== 0 && ii(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function ii(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var u = 31 - $l(t);
    (l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 4194090));
  }
  function si(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - $l(a),
        e = 1 << u;
      (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
    }
  }
  function Xn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Qn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function oi() {
    var l = _.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : L0(l.type));
  }
  function br(l, t) {
    var a = _.p;
    try {
      return (_.p = l), t();
    } finally {
      _.p = a;
    }
  }
  var Vt = Math.random().toString(36).slice(2),
    Nl = "__reactFiber$" + Vt,
    Xl = "__reactProps$" + Vt,
    qa = "__reactContainer$" + Vt,
    Cn = "__reactEvents$" + Vt,
    Sr = "__reactListeners$" + Vt,
    Tr = "__reactHandles$" + Vt,
    ri = "__reactResources$" + Vt,
    pu = "__reactMarker$" + Vt;
  function Zn(l) {
    delete l[Nl], delete l[Xl], delete l[Cn], delete l[Sr], delete l[Tr];
  }
  function ja(l) {
    var t = l[Nl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[qa] || a[Nl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = R0(l); l !== null; ) {
            if ((a = l[Nl])) return a;
            l = R0(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function Ba(l) {
    if ((l = l[Nl] || l[qa])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Au(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(y(33));
  }
  function Ya(l) {
    var t = l[ri];
    return (
      t ||
        (t = l[ri] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function pl(l) {
    l[pu] = !0;
  }
  var di = new Set(),
    vi = {};
  function ma(l, t) {
    Ga(l, t), Ga(l + "Capture", t);
  }
  function Ga(l, t) {
    for (vi[l] = t, l = 0; l < t.length; l++) di.add(t[l]);
  }
  var Er = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    yi = {},
    hi = {};
  function pr(l) {
    return jn.call(hi, l)
      ? !0
      : jn.call(yi, l)
      ? !1
      : Er.test(l)
      ? (hi[l] = !0)
      : ((yi[l] = !0), !1);
  }
  function Ae(l, t, a) {
    if (pr(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function ze(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ot(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  var Vn, mi;
  function Xa(l) {
    if (Vn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (Vn = (t && t[1]) || ""),
          (mi =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Vn +
      l +
      mi
    );
  }
  var Ln = !1;
  function Kn(l, t) {
    if (!l || Ln) return "";
    Ln = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (m) {
                  var h = m;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (m) {
                  h = m;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                h = m;
              }
              (T = l()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (m) {
            if (m && h && typeof m.stack == "string") return [m.stack, h.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        f = n[1];
      if (c && f) {
        var i = c.split(`
`),
          v = f.split(`
`);
        for (
          e = u = 0;
          u < i.length && !i[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; e < v.length && !v[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === i.length || e === v.length)
          for (
            u = i.length - 1, e = v.length - 1;
            1 <= u && 0 <= e && i[u] !== v[e];

          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== v[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || i[u] !== v[e])) {
                  var g =
                    `
` + i[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (Ln = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? Xa(a) : "";
  }
  function Ar(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Xa(l.type);
      case 16:
        return Xa("Lazy");
      case 13:
        return Xa("Suspense");
      case 19:
        return Xa("SuspenseList");
      case 0:
      case 15:
        return Kn(l.type, !1);
      case 11:
        return Kn(l.type.render, !1);
      case 1:
        return Kn(l.type, !0);
      case 31:
        return Xa("Activity");
      default:
        return "";
    }
  }
  function gi(l) {
    try {
      var t = "";
      do (t += Ar(l)), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ut(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function bi(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function zr(l) {
    var t = bi(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      u = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var e = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            (u = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (c) {
            u = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function _e(l) {
    l._valueTracker || (l._valueTracker = zr(l));
  }
  function Si(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = bi(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Oe(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var _r = /[\n"\\]/g;
  function et(l) {
    return l.replace(_r, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function wn(l, t, a, u, e, n, c, f) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ut(t))
          : l.value !== "" + ut(t) && (l.value = "" + ut(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? Jn(l, c, ut(t))
        : a != null
        ? Jn(l, c, ut(a))
        : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + ut(f))
        : l.removeAttribute("name");
  }
  function Ti(l, t, a, u, e, n, c, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + ut(a) : ""),
        (t = t != null ? "" + ut(t) : a),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = f ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function Jn(l, t, a) {
    (t === "number" && Oe(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Qa(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        (e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ut(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          (l[e].selected = !0), u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ei(l, t, a) {
    if (
      t != null &&
      ((t = "" + ut(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ut(a) : "";
  }
  function pi(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(y(92));
        if (xl(u)) {
          if (1 < u.length) throw Error(y(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (t = a);
    }
    (a = ut(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u);
  }
  function Ca(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Or = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ai(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : u
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || Or.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function zi(l, t, a) {
    if (t != null && typeof t != "object") throw Error(y(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
            ? (l.cssFloat = "")
            : (l[u] = ""));
      for (var e in t)
        (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Ai(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && Ai(l, n, t[n]);
  }
  function Wn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Mr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Dr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Me(l) {
    return Dr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var $n = null;
  function kn(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Za = null,
    Va = null;
  function _i(l) {
    var t = Ba(l);
    if (t && (l = t.stateNode)) {
      var a = l[Xl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (wn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + et("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Xl] || null;
                if (!e) throw Error(y(90));
                wn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (u = a[t]), u.form === l.form && Si(u);
          }
          break l;
        case "textarea":
          Ei(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && Qa(l, !!a.multiple, t, !1);
      }
    }
  }
  var Fn = !1;
  function Oi(l, t, a) {
    if (Fn) return l(t, a);
    Fn = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((Fn = !1),
        (Za !== null || Va !== null) &&
          (vn(), Za && ((t = Za), (l = Va), (Va = Za = null), _i(t), l)))
      )
        for (t = 0; t < l.length; t++) _i(l[t]);
    }
  }
  function zu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Xl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(y(231, t, typeof a));
    return a;
  }
  var Mt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    In = !1;
  if (Mt)
    try {
      var _u = {};
      Object.defineProperty(_u, "passive", {
        get: function () {
          In = !0;
        },
      }),
        window.addEventListener("test", _u, _u),
        window.removeEventListener("test", _u, _u);
    } catch {
      In = !1;
    }
  var Lt = null,
    Pn = null,
    De = null;
  function Mi() {
    if (De) return De;
    var l,
      t = Pn,
      a = t.length,
      u,
      e = "value" in Lt ? Lt.value : Lt.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++);
    return (De = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function Re(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ue() {
    return !0;
  }
  function Di() {
    return !1;
  }
  function Ql(l) {
    function t(a, u, e, n, c) {
      (this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var f in l)
        l.hasOwnProperty(f) && ((a = l[f]), (this[f] = a ? a(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ue
          : Di),
        (this.isPropagationStopped = Di),
        this
      );
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Ue));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Ue));
        },
        persist: function () {},
        isPersistent: Ue,
      }),
      t
    );
  }
  var ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xe = Ql(ga),
    Ou = N({}, ga, { view: 0, detail: 0 }),
    Rr = Ql(Ou),
    lc,
    tc,
    Mu,
    Ne = N({}, Ou, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: uc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Mu &&
              (Mu && l.type === "mousemove"
                ? ((lc = l.screenX - Mu.screenX), (tc = l.screenY - Mu.screenY))
                : (tc = lc = 0),
              (Mu = l)),
            lc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : tc;
      },
    }),
    Ri = Ql(Ne),
    Ur = N({}, Ne, { dataTransfer: 0 }),
    xr = Ql(Ur),
    Nr = N({}, Ou, { relatedTarget: 0 }),
    ac = Ql(Nr),
    Hr = N({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qr = Ql(Hr),
    jr = N({}, ga, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Br = Ql(jr),
    Yr = N({}, ga, { data: 0 }),
    Ui = Ql(Yr),
    Gr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Xr = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Qr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Cr(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Qr[l])
      ? !!t[l]
      : !1;
  }
  function uc() {
    return Cr;
  }
  var Zr = N({}, Ou, {
      key: function (l) {
        if (l.key) {
          var t = Gr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Re(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Xr[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: uc,
      charCode: function (l) {
        return l.type === "keypress" ? Re(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Re(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    Vr = Ql(Zr),
    Lr = N({}, Ne, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xi = Ql(Lr),
    Kr = N({}, Ou, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uc,
    }),
    wr = Ql(Kr),
    Jr = N({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wr = Ql(Jr),
    $r = N({}, Ne, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    kr = Ql($r),
    Fr = N({}, ga, { newState: 0, oldState: 0 }),
    Ir = Ql(Fr),
    Pr = [9, 13, 27, 32],
    ec = Mt && "CompositionEvent" in window,
    Du = null;
  Mt && "documentMode" in document && (Du = document.documentMode);
  var ld = Mt && "TextEvent" in window && !Du,
    Ni = Mt && (!ec || (Du && 8 < Du && 11 >= Du)),
    Hi = " ",
    qi = !1;
  function ji(l, t) {
    switch (l) {
      case "keyup":
        return Pr.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bi(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var La = !1;
  function td(l, t) {
    switch (l) {
      case "compositionend":
        return Bi(t);
      case "keypress":
        return t.which !== 32 ? null : ((qi = !0), Hi);
      case "textInput":
        return (l = t.data), l === Hi && qi ? null : l;
      default:
        return null;
    }
  }
  function ad(l, t) {
    if (La)
      return l === "compositionend" || (!ec && ji(l, t))
        ? ((l = Mi()), (De = Pn = Lt = null), (La = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ni && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ud = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Yi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!ud[l.type] : t === "textarea";
  }
  function Gi(l, t, a, u) {
    Za ? (Va ? Va.push(u) : (Va = [u])) : (Za = u),
      (t = Sn(t, "onChange")),
      0 < t.length &&
        ((a = new xe("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t }));
  }
  var Ru = null,
    Uu = null;
  function ed(l) {
    S0(l, 0);
  }
  function He(l) {
    var t = Au(l);
    if (Si(t)) return l;
  }
  function Xi(l, t) {
    if (l === "change") return t;
  }
  var Qi = !1;
  if (Mt) {
    var nc;
    if (Mt) {
      var cc = "oninput" in document;
      if (!cc) {
        var Ci = document.createElement("div");
        Ci.setAttribute("oninput", "return;"),
          (cc = typeof Ci.oninput == "function");
      }
      nc = cc;
    } else nc = !1;
    Qi = nc && (!document.documentMode || 9 < document.documentMode);
  }
  function Zi() {
    Ru && (Ru.detachEvent("onpropertychange", Vi), (Uu = Ru = null));
  }
  function Vi(l) {
    if (l.propertyName === "value" && He(Uu)) {
      var t = [];
      Gi(t, Uu, l, kn(l)), Oi(ed, t);
    }
  }
  function nd(l, t, a) {
    l === "focusin"
      ? (Zi(), (Ru = t), (Uu = a), Ru.attachEvent("onpropertychange", Vi))
      : l === "focusout" && Zi();
  }
  function cd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return He(Uu);
  }
  function fd(l, t) {
    if (l === "click") return He(t);
  }
  function id(l, t) {
    if (l === "input" || l === "change") return He(t);
  }
  function sd(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var kl = typeof Object.is == "function" ? Object.is : sd;
  function xu(l, t) {
    if (kl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!jn.call(t, e) || !kl(l[e], t[e])) return !1;
    }
    return !0;
  }
  function Li(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ki(l, t) {
    var a = Li(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Li(a);
    }
  }
  function wi(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? wi(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ji(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Oe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Oe(l.document);
    }
    return t;
  }
  function fc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var od = Mt && "documentMode" in document && 11 >= document.documentMode,
    Ka = null,
    ic = null,
    Nu = null,
    sc = !1;
  function Wi(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    sc ||
      Ka == null ||
      Ka !== Oe(u) ||
      ((u = Ka),
      "selectionStart" in u && fc(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Nu && xu(Nu, u)) ||
        ((Nu = u),
        (u = Sn(ic, "onSelect")),
        0 < u.length &&
          ((t = new xe("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = Ka))));
  }
  function ba(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var wa = {
      animationend: ba("Animation", "AnimationEnd"),
      animationiteration: ba("Animation", "AnimationIteration"),
      animationstart: ba("Animation", "AnimationStart"),
      transitionrun: ba("Transition", "TransitionRun"),
      transitionstart: ba("Transition", "TransitionStart"),
      transitioncancel: ba("Transition", "TransitionCancel"),
      transitionend: ba("Transition", "TransitionEnd"),
    },
    oc = {},
    $i = {};
  Mt &&
    (($i = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wa.animationend.animation,
      delete wa.animationiteration.animation,
      delete wa.animationstart.animation),
    "TransitionEvent" in window || delete wa.transitionend.transition);
  function Sa(l) {
    if (oc[l]) return oc[l];
    if (!wa[l]) return l;
    var t = wa[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in $i) return (oc[l] = t[a]);
    return l;
  }
  var ki = Sa("animationend"),
    Fi = Sa("animationiteration"),
    Ii = Sa("animationstart"),
    rd = Sa("transitionrun"),
    dd = Sa("transitionstart"),
    vd = Sa("transitioncancel"),
    Pi = Sa("transitionend"),
    ls = new Map(),
    rc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  rc.push("scrollEnd");
  function yt(l, t) {
    ls.set(l, t), ma(t, [l]);
  }
  var ts = new WeakMap();
  function nt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = ts.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: gi(t) }), ts.set(l, t), t);
    }
    return { value: l, source: t, stack: gi(t) };
  }
  var ct = [],
    Ja = 0,
    dc = 0;
  function qe() {
    for (var l = Ja, t = (dc = Ja = 0); t < l; ) {
      var a = ct[t];
      ct[t++] = null;
      var u = ct[t];
      ct[t++] = null;
      var e = ct[t];
      ct[t++] = null;
      var n = ct[t];
      if (((ct[t++] = null), u !== null && e !== null)) {
        var c = u.pending;
        c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
          (u.pending = e);
      }
      n !== 0 && as(a, e, n);
    }
  }
  function je(l, t, a, u) {
    (ct[Ja++] = l),
      (ct[Ja++] = t),
      (ct[Ja++] = a),
      (ct[Ja++] = u),
      (dc |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u);
  }
  function vc(l, t, a, u) {
    return je(l, t, a, u), Be(l);
  }
  function Wa(l, t) {
    return je(l, null, null, t), Be(l);
  }
  function as(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - $l(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Be(l) {
    if (50 < ue) throw ((ue = 0), (Tf = null), Error(y(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var $a = {};
  function yd(l, t, a, u) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Fl(l, t, a, u) {
    return new yd(l, t, a, u);
  }
  function yc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Dt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = Fl(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function us(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Ye(l, t, a, u, e, n) {
    var c = 0;
    if (((u = l), typeof l == "function")) yc(l) && (c = 1);
    else if (typeof l == "string")
      c = m1(l, a, H.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case gt:
          return (l = Fl(31, a, t, e)), (l.elementType = gt), (l.lanes = n), l;
        case Bl:
          return Ta(a.children, e, n, t);
        case dt:
          (c = 8), (e |= 24);
          break;
        case Gl:
          return (
            (l = Fl(12, a, t, e | 2)), (l.elementType = Gl), (l.lanes = n), l
          );
        case $:
          return (l = Fl(13, a, t, e)), (l.elementType = $), (l.lanes = n), l;
        case Ll:
          return (l = Fl(19, a, t, e)), (l.elementType = Ll), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case da:
              case Rl:
                c = 10;
                break l;
              case zt:
                c = 9;
                break l;
              case vt:
                c = 11;
                break l;
              case Kl:
                c = 14;
                break l;
              case wl:
                (c = 16), (u = null);
                break l;
            }
          (c = 29),
            (a = Error(y(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (t = Fl(c, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
    );
  }
  function Ta(l, t, a, u) {
    return (l = Fl(7, l, u, t)), (l.lanes = a), l;
  }
  function hc(l, t, a) {
    return (l = Fl(6, l, null, t)), (l.lanes = a), l;
  }
  function mc(l, t, a) {
    return (
      (t = Fl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var ka = [],
    Fa = 0,
    Ge = null,
    Xe = 0,
    ft = [],
    it = 0,
    Ea = null,
    Rt = 1,
    Ut = "";
  function pa(l, t) {
    (ka[Fa++] = Xe), (ka[Fa++] = Ge), (Ge = l), (Xe = t);
  }
  function es(l, t, a) {
    (ft[it++] = Rt), (ft[it++] = Ut), (ft[it++] = Ea), (Ea = l);
    var u = Rt;
    l = Ut;
    var e = 32 - $l(u) - 1;
    (u &= ~(1 << e)), (a += 1);
    var n = 32 - $l(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      (n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (e -= c),
        (Rt = (1 << (32 - $l(t) + e)) | (a << e) | u),
        (Ut = n + l);
    } else (Rt = (1 << n) | (a << e) | u), (Ut = l);
  }
  function gc(l) {
    l.return !== null && (pa(l, 1), es(l, 1, 0));
  }
  function bc(l) {
    for (; l === Ge; )
      (Ge = ka[--Fa]), (ka[Fa] = null), (Xe = ka[--Fa]), (ka[Fa] = null);
    for (; l === Ea; )
      (Ea = ft[--it]),
        (ft[it] = null),
        (Ut = ft[--it]),
        (ft[it] = null),
        (Rt = ft[--it]),
        (ft[it] = null);
  }
  var Yl = null,
    yl = null,
    I = !1,
    Aa = null,
    St = !1,
    Sc = Error(y(519));
  function za(l) {
    var t = Error(y(418, ""));
    throw (ju(nt(t, l)), Sc);
  }
  function ns(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Nl] = l), (t[Xl] = u), a)) {
      case "dialog":
        K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++) K(ne[a], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        K("invalid", t),
          Ti(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0
          ),
          _e(t);
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), pi(t, u.value, u.defaultValue, u.children), _e(t);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      A0(t.textContent, a)
        ? (u.popover != null && (K("beforetoggle", t), K("toggle", t)),
          u.onScroll != null && K("scroll", t),
          u.onScrollEnd != null && K("scrollend", t),
          u.onClick != null && (t.onclick = Tn),
          (t = !0))
        : (t = !1),
      t || za(l);
  }
  function cs(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 5:
        case 13:
          St = !1;
          return;
        case 27:
        case 3:
          St = !0;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function Hu(l) {
    if (l !== Yl) return !1;
    if (!I) return cs(l), (I = !0), !1;
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Bf(l.type, l.memoizedProps))),
        (a = !a)),
      a && yl && za(l),
      cs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(y(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                yl = mt(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        yl = null;
      }
    } else
      t === 27
        ? ((t = yl), ca(l.type) ? ((l = Qf), (Qf = null), (yl = l)) : (yl = t))
        : (yl = Yl ? mt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function qu() {
    (yl = Yl = null), (I = !1);
  }
  function fs() {
    var l = Aa;
    return (
      l !== null &&
        (Vl === null ? (Vl = l) : Vl.push.apply(Vl, l), (Aa = null)),
      l
    );
  }
  function ju(l) {
    Aa === null ? (Aa = [l]) : Aa.push(l);
  }
  var Tc = p(null),
    _a = null,
    xt = null;
  function Kt(l, t, a) {
    z(Tc, t._currentValue), (t._currentValue = a);
  }
  function Nt(l) {
    (l._currentValue = Tc.current), O(Tc);
  }
  function Ec(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function pc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (f.context === t[i]) {
              (n.lanes |= a),
                (f = n.alternate),
                f !== null && (f.lanes |= a),
                Ec(n.return, a, l),
                u || (c = null);
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(y(341));
        (c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          Ec(c, a, l),
          (c = null);
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            (e.return = c.return), (c = e);
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function Bu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(y(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = e.type;
          kl(e.pendingProps.value, c.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (e === Jl.current) {
        if (((c = e.alternate), c === null)) throw Error(y(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(re) : (l = [re]));
      }
      e = e.return;
    }
    l !== null && pc(t, l, a, u), (t.flags |= 262144);
  }
  function Qe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!kl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Oa(l) {
    (_a = l),
      (xt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Hl(l) {
    return is(_a, l);
  }
  function Ce(l, t) {
    return _a === null && Oa(l), is(l, t);
  }
  function is(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), xt === null)) {
      if (l === null) throw Error(y(308));
      (xt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else xt = xt.next = t;
    return a;
  }
  var hd =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    md = A.unstable_scheduleCallback,
    gd = A.unstable_NormalPriority,
    Tl = {
      $$typeof: Rl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ac() {
    return { controller: new hd(), data: new Map(), refCount: 0 };
  }
  function Yu(l) {
    l.refCount--,
      l.refCount === 0 &&
        md(gd, function () {
          l.controller.abort();
        });
  }
  var Gu = null,
    zc = 0,
    Ia = 0,
    Pa = null;
  function bd(l, t) {
    if (Gu === null) {
      var a = (Gu = []);
      (zc = 0),
        (Ia = Mf()),
        (Pa = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return zc++, t.then(ss, ss), t;
  }
  function ss() {
    if (--zc === 0 && Gu !== null) {
      Pa !== null && (Pa.status = "fulfilled");
      var l = Gu;
      (Gu = null), (Ia = 0), (Pa = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Sd(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          (u.status = "fulfilled"), (u.value = t);
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        }
      ),
      u
    );
  }
  var os = b.S;
  b.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      bd(l, t),
      os !== null && os(l, t);
  };
  var Ma = p(null);
  function _c() {
    var l = Ma.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Ze(l, t) {
    t === null ? z(Ma, Ma.current) : z(Ma, t.pool);
  }
  function rs() {
    var l = _c();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var Xu = Error(y(460)),
    ds = Error(y(474)),
    Ve = Error(y(542)),
    Oc = { then: function () {} };
  function vs(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Le() {}
  function ys(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Le, Le), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), ms(l), l);
      default:
        if (typeof t.status == "string") t.then(Le, Le);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(y(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = u);
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = u);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), ms(l), l);
        }
        throw ((Qu = t), Xu);
    }
  }
  var Qu = null;
  function hs() {
    if (Qu === null) throw Error(y(459));
    var l = Qu;
    return (Qu = null), l;
  }
  function ms(l) {
    if (l === Xu || l === Ve) throw Error(y(483));
  }
  var wt = !1;
  function Mc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Dc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function Jt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (ll & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Be(l)),
        as(l, null, a),
        t
      );
    }
    return je(l, u, t, a), Be(l);
  }
  function Cu(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), si(l, a);
    }
  }
  function Rc(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = c) : (n = n.next = c), (a = a.next);
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var Uc = !1;
  function Zu() {
    if (Uc) {
      var l = Pa;
      if (l !== null) throw l;
    }
  }
  function Vu(l, t, a, u) {
    Uc = !1;
    var e = l.updateQueue;
    wt = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var i = f,
        v = i.next;
      (i.next = null), c === null ? (n = v) : (c.next = v), (c = i);
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (f = g.lastBaseUpdate),
        f !== c &&
          (f === null ? (g.firstBaseUpdate = v) : (f.next = v),
          (g.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var T = e.baseState;
      (c = 0), (g = v = i = null), (f = n);
      do {
        var h = f.lane & -536870913,
          m = h !== f.lane;
        if (m ? (w & h) === h : (u & h) === h) {
          h !== 0 && h === Ia && (Uc = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var Y = l,
              q = f;
            h = t;
            var el = a;
            switch (q.tag) {
              case 1:
                if (((Y = q.payload), typeof Y == "function")) {
                  T = Y.call(el, T, h);
                  break l;
                }
                T = Y;
                break l;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = q.payload),
                  (h = typeof Y == "function" ? Y.call(el, T, h) : Y),
                  h == null)
                )
                  break l;
                T = N({}, T, h);
                break l;
              case 2:
                wt = !0;
            }
          }
          (h = f.callback),
            h !== null &&
              ((l.flags |= 64),
              m && (l.flags |= 8192),
              (m = e.callbacks),
              m === null ? (e.callbacks = [h]) : m.push(h));
        } else
          (m = {
            lane: h,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            g === null ? ((v = g = m), (i = T)) : (g = g.next = m),
            (c |= h);
        if (((f = f.next), f === null)) {
          if (((f = e.shared.pending), f === null)) break;
          (m = f),
            (f = m.next),
            (m.next = null),
            (e.lastBaseUpdate = m),
            (e.shared.pending = null);
        }
      } while (!0);
      g === null && (i = T),
        (e.baseState = i),
        (e.firstBaseUpdate = v),
        (e.lastBaseUpdate = g),
        n === null && (e.shared.lanes = 0),
        (aa |= c),
        (l.lanes = c),
        (l.memoizedState = T);
    }
  }
  function gs(l, t) {
    if (typeof l != "function") throw Error(y(191, l));
    l.call(t);
  }
  function bs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) gs(a[l], t);
  }
  var lu = p(null),
    Ke = p(0);
  function Ss(l, t) {
    (l = Xt), z(Ke, l), z(lu, t), (Xt = l | t.baseLanes);
  }
  function xc() {
    z(Ke, Xt), z(lu, lu.current);
  }
  function Nc() {
    (Xt = Ke.current), O(lu), O(Ke);
  }
  var $t = 0,
    Z = null,
    al = null,
    bl = null,
    we = !1,
    tu = !1,
    Da = !1,
    Je = 0,
    Lu = 0,
    au = null,
    Td = 0;
  function ml() {
    throw Error(y(321));
  }
  function Hc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!kl(l[a], t[a])) return !1;
    return !0;
  }
  function qc(l, t, a, u, e, n) {
    return (
      ($t = n),
      (Z = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? ao : uo),
      (Da = !1),
      (n = a(u, e)),
      (Da = !1),
      tu && (n = Es(t, a, u, e)),
      Ts(l),
      n
    );
  }
  function Ts(l) {
    b.H = Pe;
    var t = al !== null && al.next !== null;
    if ((($t = 0), (bl = al = Z = null), (we = !1), (Lu = 0), (au = null), t))
      throw Error(y(300));
    l === null ||
      Al ||
      ((l = l.dependencies), l !== null && Qe(l) && (Al = !0));
  }
  function Es(l, t, a, u) {
    Z = l;
    var e = 0;
    do {
      if ((tu && (au = null), (Lu = 0), (tu = !1), 25 <= e))
        throw Error(y(301));
      if (((e += 1), (bl = al = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (b.H = Md), (n = t(a, u));
    } while (tu);
    return n;
  }
  function Ed() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ku(t) : t),
      (l = l.useState()[0]),
      (al !== null ? al.memoizedState : null) !== l && (Z.flags |= 1024),
      t
    );
  }
  function jc() {
    var l = Je !== 0;
    return (Je = 0), l;
  }
  function Bc(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Yc(l) {
    if (we) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      we = !1;
    }
    ($t = 0), (bl = al = Z = null), (tu = !1), (Lu = Je = 0), (au = null);
  }
  function Cl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return bl === null ? (Z.memoizedState = bl = l) : (bl = bl.next = l), bl;
  }
  function Sl() {
    if (al === null) {
      var l = Z.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = al.next;
    var t = bl === null ? Z.memoizedState : bl.next;
    if (t !== null) (bl = t), (al = l);
    else {
      if (l === null)
        throw Z.alternate === null ? Error(y(467)) : Error(y(310));
      (al = l),
        (l = {
          memoizedState: al.memoizedState,
          baseState: al.baseState,
          baseQueue: al.baseQueue,
          queue: al.queue,
          next: null,
        }),
        bl === null ? (Z.memoizedState = bl = l) : (bl = bl.next = l);
    }
    return bl;
  }
  function Gc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ku(l) {
    var t = Lu;
    return (
      (Lu += 1),
      au === null && (au = []),
      (l = ys(au, l, t)),
      (t = Z),
      (bl === null ? t.memoizedState : bl.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? ao : uo)),
      l
    );
  }
  function We(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ku(l);
      if (l.$$typeof === Rl) return Hl(l);
    }
    throw Error(y(438, String(l)));
  }
  function Xc(l) {
    var t = null,
      a = Z.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = Z.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Gc()), (Z.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Ha;
    return t.index++, a;
  }
  function Ht(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = Sl();
    return Qc(t, al, l);
  }
  function Qc(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(y(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        (e.next = n.next), (n.next = c);
      }
      (t.baseQueue = e = n), (u.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var f = (c = null),
        i = null,
        v = t,
        g = !1;
      do {
        var T = v.lane & -536870913;
        if (T !== v.lane ? (w & T) === T : ($t & T) === T) {
          var h = v.revertLane;
          if (h === 0)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              T === Ia && (g = !0);
          else if (($t & h) === h) {
            (v = v.next), h === Ia && (g = !0);
            continue;
          } else
            (T = {
              lane: 0,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              i === null ? ((f = i = T), (c = n)) : (i = i.next = T),
              (Z.lanes |= h),
              (aa |= h);
          (T = v.action),
            Da && a(n, T),
            (n = v.hasEagerState ? v.eagerState : a(n, T));
        } else
          (h = {
            lane: T,
            revertLane: v.revertLane,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            i === null ? ((f = i = h), (c = n)) : (i = i.next = h),
            (Z.lanes |= T),
            (aa |= T);
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (i === null ? (c = n) : (i.next = f),
        !kl(n, l.memoizedState) && ((Al = !0), g && ((a = Pa), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = i),
        (u.lastRenderedState = n);
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Cc(l) {
    var t = Sl(),
      a = t.queue;
    if (a === null) throw Error(y(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = (e = e.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== e);
      kl(n, t.memoizedState) || (Al = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, u];
  }
  function ps(l, t, a) {
    var u = Z,
      e = Sl(),
      n = I;
    if (n) {
      if (a === void 0) throw Error(y(407));
      a = a();
    } else a = t();
    var c = !kl((al || e).memoizedState, a);
    c && ((e.memoizedState = a), (Al = !0)), (e = e.queue);
    var f = _s.bind(null, u, e, l);
    if (
      (wu(2048, 8, f, [l]),
      e.getSnapshot !== t || c || (bl !== null && bl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        uu(9, ke(), zs.bind(null, u, e, a, t), null),
        sl === null)
      )
        throw Error(y(349));
      n || ($t & 124) !== 0 || As(u, t, a);
    }
    return a;
  }
  function As(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = Z.updateQueue),
      t === null
        ? ((t = Gc()), (Z.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function zs(l, t, a, u) {
    (t.value = a), (t.getSnapshot = u), Os(t) && Ms(l);
  }
  function _s(l, t, a) {
    return a(function () {
      Os(t) && Ms(l);
    });
  }
  function Os(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !kl(l, a);
    } catch {
      return !0;
    }
  }
  function Ms(l) {
    var t = Wa(l, 2);
    t !== null && at(t, l, 2);
  }
  function Zc(l) {
    var t = Cl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Da)) {
        Zt(!0);
        try {
          a();
        } finally {
          Zt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ht,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Ds(l, t, a, u) {
    return (l.baseState = a), Qc(l, al, typeof u == "function" ? u : Ht);
  }
  function pd(l, t, a, u, e) {
    if (Ie(l)) throw Error(y(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      b.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Rs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function Rs(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = b.T,
        c = {};
      b.T = c;
      try {
        var f = a(e, u),
          i = b.S;
        i !== null && i(c, f), Us(l, t, f);
      } catch (v) {
        Vc(l, t, v);
      } finally {
        b.T = n;
      }
    } else
      try {
        (n = a(e, u)), Us(l, t, n);
      } catch (v) {
        Vc(l, t, v);
      }
  }
  function Us(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            xs(l, t, u);
          },
          function (u) {
            return Vc(l, t, u);
          }
        )
      : xs(l, t, a);
  }
  function xs(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      Ns(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Rs(l, a)));
  }
  function Vc(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do (t.status = "rejected"), (t.reason = a), Ns(t), (t = t.next);
      while (t !== u);
    }
    l.action = null;
  }
  function Ns(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Hs(l, t) {
    return t;
  }
  function qs(l, t) {
    if (I) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var u = Z;
          if (I) {
            if (yl) {
              t: {
                for (var e = yl, n = St; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = mt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (yl = mt(e.nextSibling)), (u = e.data === "F!");
                break l;
              }
            }
            za(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Cl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hs,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = Ps.bind(null, Z, u)),
      (u.dispatch = a),
      (u = Zc(!1)),
      (n = Wc.bind(null, Z, !1, u.queue)),
      (u = Cl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = pd.bind(null, Z, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function js(l) {
    var t = Sl();
    return Bs(t, al, l);
  }
  function Bs(l, t, a) {
    if (
      ((t = Qc(l, t, Hs)[0]),
      (l = $e(Ht)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = Ku(t);
      } catch (c) {
        throw c === Xu ? Ve : c;
      }
    else u = t;
    t = Sl();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((Z.flags |= 2048), uu(9, ke(), Ad.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function Ad(l, t) {
    l.action = t;
  }
  function Ys(l) {
    var t = Sl(),
      a = al;
    if (a !== null) return Bs(t, a, l);
    Sl(), (t = t.memoizedState), (a = Sl());
    var u = a.queue.dispatch;
    return (a.memoizedState = l), [t, u, !1];
  }
  function uu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = Z.updateQueue),
      t === null && ((t = Gc()), (Z.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function ke() {
    return { destroy: void 0, resource: void 0 };
  }
  function Gs() {
    return Sl().memoizedState;
  }
  function Fe(l, t, a, u) {
    var e = Cl();
    (u = u === void 0 ? null : u),
      (Z.flags |= l),
      (e.memoizedState = uu(1 | t, ke(), a, u));
  }
  function wu(l, t, a, u) {
    var e = Sl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    al !== null && u !== null && Hc(u, al.memoizedState.deps)
      ? (e.memoizedState = uu(t, n, a, u))
      : ((Z.flags |= l), (e.memoizedState = uu(1 | t, n, a, u)));
  }
  function Xs(l, t) {
    Fe(8390656, 8, l, t);
  }
  function Qs(l, t) {
    wu(2048, 8, l, t);
  }
  function Cs(l, t) {
    return wu(4, 2, l, t);
  }
  function Zs(l, t) {
    return wu(4, 4, l, t);
  }
  function Vs(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Ls(l, t, a) {
    (a = a != null ? a.concat([l]) : null), wu(4, 4, Vs.bind(null, t, l), a);
  }
  function Lc() {}
  function Ks(l, t) {
    var a = Sl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Hc(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function ws(l, t) {
    var a = Sl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Hc(t, u[1])) return u[0];
    if (((u = l()), Da)) {
      Zt(!0);
      try {
        l();
      } finally {
        Zt(!1);
      }
    }
    return (a.memoizedState = [u, t]), u;
  }
  function Kc(l, t, a) {
    return a === void 0 || ($t & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = ko()), (Z.lanes |= l), (aa |= l), a);
  }
  function Js(l, t, a, u) {
    return kl(a, t)
      ? a
      : lu.current !== null
      ? ((l = Kc(l, a, u)), kl(l, t) || (Al = !0), l)
      : ($t & 42) === 0
      ? ((Al = !0), (l.memoizedState = a))
      : ((l = ko()), (Z.lanes |= l), (aa |= l), t);
  }
  function Ws(l, t, a, u, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var c = b.T,
      f = {};
    (b.T = f), Wc(l, !1, t, a);
    try {
      var i = e(),
        v = b.S;
      if (
        (v !== null && v(f, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var g = Sd(i, u);
        Ju(l, t, g, tt(l));
      } else Ju(l, t, u, tt(l));
    } catch (T) {
      Ju(l, t, { then: function () {}, status: "rejected", reason: T }, tt());
    } finally {
      (_.p = n), (b.T = c);
    }
  }
  function zd() {}
  function wc(l, t, a, u) {
    if (l.tag !== 5) throw Error(y(476));
    var e = $s(l).queue;
    Ws(
      l,
      e,
      t,
      B,
      a === null
        ? zd
        : function () {
            return ks(l), a(u);
          }
    );
  }
  function $s(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ht,
        lastRenderedState: B,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ht,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function ks(l) {
    var t = $s(l).next.queue;
    Ju(l, t, {}, tt());
  }
  function Jc() {
    return Hl(re);
  }
  function Fs() {
    return Sl().memoizedState;
  }
  function Is() {
    return Sl().memoizedState;
  }
  function _d(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = tt();
          l = Jt(a);
          var u = Wt(t, l, a);
          u !== null && (at(u, t, a), Cu(u, t, a)),
            (t = { cache: Ac() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Od(l, t, a) {
    var u = tt();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ie(l)
        ? lo(t, a)
        : ((a = vc(l, t, a, u)), a !== null && (at(a, l, u), to(a, t, u)));
  }
  function Ps(l, t, a) {
    var u = tt();
    Ju(l, t, a, u);
  }
  function Ju(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ie(l)) lo(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            f = n(c, a);
          if (((e.hasEagerState = !0), (e.eagerState = f), kl(f, c)))
            return je(l, t, e, 0), sl === null && qe(), !1;
        } catch {
        } finally {
        }
      if (((a = vc(l, t, e, u)), a !== null))
        return at(a, l, u), to(a, t, u), !0;
    }
    return !1;
  }
  function Wc(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Mf(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ie(l))
    ) {
      if (t) throw Error(y(479));
    } else (t = vc(l, a, u, 2)), t !== null && at(t, l, 2);
  }
  function Ie(l) {
    var t = l.alternate;
    return l === Z || (t !== null && t === Z);
  }
  function lo(l, t) {
    tu = we = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function to(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), si(l, a);
    }
  }
  var Pe = {
      readContext: Hl,
      use: We,
      useCallback: ml,
      useContext: ml,
      useEffect: ml,
      useImperativeHandle: ml,
      useLayoutEffect: ml,
      useInsertionEffect: ml,
      useMemo: ml,
      useReducer: ml,
      useRef: ml,
      useState: ml,
      useDebugValue: ml,
      useDeferredValue: ml,
      useTransition: ml,
      useSyncExternalStore: ml,
      useId: ml,
      useHostTransitionStatus: ml,
      useFormState: ml,
      useActionState: ml,
      useOptimistic: ml,
      useMemoCache: ml,
      useCacheRefresh: ml,
    },
    ao = {
      readContext: Hl,
      use: We,
      useCallback: function (l, t) {
        return (Cl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Hl,
      useEffect: Xs,
      useImperativeHandle: function (l, t, a) {
        (a = a != null ? a.concat([l]) : null),
          Fe(4194308, 4, Vs.bind(null, t, l), a);
      },
      useLayoutEffect: function (l, t) {
        return Fe(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Fe(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Cl();
        t = t === void 0 ? null : t;
        var u = l();
        if (Da) {
          Zt(!0);
          try {
            l();
          } finally {
            Zt(!1);
          }
        }
        return (a.memoizedState = [u, t]), u;
      },
      useReducer: function (l, t, a) {
        var u = Cl();
        if (a !== void 0) {
          var e = a(t);
          if (Da) {
            Zt(!0);
            try {
              a(t);
            } finally {
              Zt(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = Od.bind(null, Z, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Cl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = Zc(l);
        var t = l.queue,
          a = Ps.bind(null, Z, t);
        return (t.dispatch = a), [l.memoizedState, a];
      },
      useDebugValue: Lc,
      useDeferredValue: function (l, t) {
        var a = Cl();
        return Kc(a, l, t);
      },
      useTransition: function () {
        var l = Zc(!1);
        return (
          (l = Ws.bind(null, Z, l.queue, !0, !1)),
          (Cl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = Z,
          e = Cl();
        if (I) {
          if (a === void 0) throw Error(y(407));
          a = a();
        } else {
          if (((a = t()), sl === null)) throw Error(y(349));
          (w & 124) !== 0 || As(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          Xs(_s.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          uu(9, ke(), zs.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Cl(),
          t = sl.identifierPrefix;
        if (I) {
          var a = Ut,
            u = Rt;
          (a = (u & ~(1 << (32 - $l(u) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = Je++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»");
        } else (a = Td++), (t = "«" + t + "r" + a.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: Jc,
      useFormState: qs,
      useActionState: qs,
      useOptimistic: function (l) {
        var t = Cl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a), (t = Wc.bind(null, Z, !0, a)), (a.dispatch = t), [l, t]
        );
      },
      useMemoCache: Xc,
      useCacheRefresh: function () {
        return (Cl().memoizedState = _d.bind(null, Z));
      },
    },
    uo = {
      readContext: Hl,
      use: We,
      useCallback: Ks,
      useContext: Hl,
      useEffect: Qs,
      useImperativeHandle: Ls,
      useInsertionEffect: Cs,
      useLayoutEffect: Zs,
      useMemo: ws,
      useReducer: $e,
      useRef: Gs,
      useState: function () {
        return $e(Ht);
      },
      useDebugValue: Lc,
      useDeferredValue: function (l, t) {
        var a = Sl();
        return Js(a, al.memoizedState, l, t);
      },
      useTransition: function () {
        var l = $e(Ht)[0],
          t = Sl().memoizedState;
        return [typeof l == "boolean" ? l : Ku(l), t];
      },
      useSyncExternalStore: ps,
      useId: Fs,
      useHostTransitionStatus: Jc,
      useFormState: js,
      useActionState: js,
      useOptimistic: function (l, t) {
        var a = Sl();
        return Ds(a, al, l, t);
      },
      useMemoCache: Xc,
      useCacheRefresh: Is,
    },
    Md = {
      readContext: Hl,
      use: We,
      useCallback: Ks,
      useContext: Hl,
      useEffect: Qs,
      useImperativeHandle: Ls,
      useInsertionEffect: Cs,
      useLayoutEffect: Zs,
      useMemo: ws,
      useReducer: Cc,
      useRef: Gs,
      useState: function () {
        return Cc(Ht);
      },
      useDebugValue: Lc,
      useDeferredValue: function (l, t) {
        var a = Sl();
        return al === null ? Kc(a, l, t) : Js(a, al.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Cc(Ht)[0],
          t = Sl().memoizedState;
        return [typeof l == "boolean" ? l : Ku(l), t];
      },
      useSyncExternalStore: ps,
      useId: Fs,
      useHostTransitionStatus: Jc,
      useFormState: Ys,
      useActionState: Ys,
      useOptimistic: function (l, t) {
        var a = Sl();
        return al !== null
          ? Ds(a, al, l, t)
          : ((a.baseState = l), [l, a.queue.dispatch]);
      },
      useMemoCache: Xc,
      useCacheRefresh: Is,
    },
    eu = null,
    Wu = 0;
  function ln(l) {
    var t = Wu;
    return (Wu += 1), eu === null && (eu = []), ys(eu, l, t);
  }
  function $u(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function tn(l, t) {
    throw t.$$typeof === nl
      ? Error(y(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          y(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function eo(l) {
    var t = l._init;
    return t(l._payload);
  }
  function no(l) {
    function t(r, o) {
      if (l) {
        var d = r.deletions;
        d === null ? ((r.deletions = [o]), (r.flags |= 16)) : d.push(o);
      }
    }
    function a(r, o) {
      if (!l) return null;
      for (; o !== null; ) t(r, o), (o = o.sibling);
      return null;
    }
    function u(r) {
      for (var o = new Map(); r !== null; )
        r.key !== null ? o.set(r.key, r) : o.set(r.index, r), (r = r.sibling);
      return o;
    }
    function e(r, o) {
      return (r = Dt(r, o)), (r.index = 0), (r.sibling = null), r;
    }
    function n(r, o, d) {
      return (
        (r.index = d),
        l
          ? ((d = r.alternate),
            d !== null
              ? ((d = d.index), d < o ? ((r.flags |= 67108866), o) : d)
              : ((r.flags |= 67108866), o))
          : ((r.flags |= 1048576), o)
      );
    }
    function c(r) {
      return l && r.alternate === null && (r.flags |= 67108866), r;
    }
    function f(r, o, d, S) {
      return o === null || o.tag !== 6
        ? ((o = hc(d, r.mode, S)), (o.return = r), o)
        : ((o = e(o, d)), (o.return = r), o);
    }
    function i(r, o, d, S) {
      var M = d.type;
      return M === Bl
        ? g(r, o, d.props.children, S, d.key)
        : o !== null &&
          (o.elementType === M ||
            (typeof M == "object" &&
              M !== null &&
              M.$$typeof === wl &&
              eo(M) === o.type))
        ? ((o = e(o, d.props)), $u(o, d), (o.return = r), o)
        : ((o = Ye(d.type, d.key, d.props, null, r.mode, S)),
          $u(o, d),
          (o.return = r),
          o);
    }
    function v(r, o, d, S) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== d.containerInfo ||
        o.stateNode.implementation !== d.implementation
        ? ((o = mc(d, r.mode, S)), (o.return = r), o)
        : ((o = e(o, d.children || [])), (o.return = r), o);
    }
    function g(r, o, d, S, M) {
      return o === null || o.tag !== 7
        ? ((o = Ta(d, r.mode, S, M)), (o.return = r), o)
        : ((o = e(o, d)), (o.return = r), o);
    }
    function T(r, o, d) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (o = hc("" + o, r.mode, d)), (o.return = r), o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case il:
            return (
              (d = Ye(o.type, o.key, o.props, null, r.mode, d)),
              $u(d, o),
              (d.return = r),
              d
            );
          case jl:
            return (o = mc(o, r.mode, d)), (o.return = r), o;
          case wl:
            var S = o._init;
            return (o = S(o._payload)), T(r, o, d);
        }
        if (xl(o) || Ul(o))
          return (o = Ta(o, r.mode, d, null)), (o.return = r), o;
        if (typeof o.then == "function") return T(r, ln(o), d);
        if (o.$$typeof === Rl) return T(r, Ce(r, o), d);
        tn(r, o);
      }
      return null;
    }
    function h(r, o, d, S) {
      var M = o !== null ? o.key : null;
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return M !== null ? null : f(r, o, "" + d, S);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case il:
            return d.key === M ? i(r, o, d, S) : null;
          case jl:
            return d.key === M ? v(r, o, d, S) : null;
          case wl:
            return (M = d._init), (d = M(d._payload)), h(r, o, d, S);
        }
        if (xl(d) || Ul(d)) return M !== null ? null : g(r, o, d, S, null);
        if (typeof d.then == "function") return h(r, o, ln(d), S);
        if (d.$$typeof === Rl) return h(r, o, Ce(r, d), S);
        tn(r, d);
      }
      return null;
    }
    function m(r, o, d, S, M) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return (r = r.get(d) || null), f(o, r, "" + S, M);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case il:
            return (
              (r = r.get(S.key === null ? d : S.key) || null), i(o, r, S, M)
            );
          case jl:
            return (
              (r = r.get(S.key === null ? d : S.key) || null), v(o, r, S, M)
            );
          case wl:
            var V = S._init;
            return (S = V(S._payload)), m(r, o, d, S, M);
        }
        if (xl(S) || Ul(S)) return (r = r.get(d) || null), g(o, r, S, M, null);
        if (typeof S.then == "function") return m(r, o, d, ln(S), M);
        if (S.$$typeof === Rl) return m(r, o, d, Ce(o, S), M);
        tn(o, S);
      }
      return null;
    }
    function Y(r, o, d, S) {
      for (
        var M = null, V = null, x = o, j = (o = 0), _l = null;
        x !== null && j < d.length;
        j++
      ) {
        x.index > j ? ((_l = x), (x = null)) : (_l = x.sibling);
        var F = h(r, x, d[j], S);
        if (F === null) {
          x === null && (x = _l);
          break;
        }
        l && x && F.alternate === null && t(r, x),
          (o = n(F, o, j)),
          V === null ? (M = F) : (V.sibling = F),
          (V = F),
          (x = _l);
      }
      if (j === d.length) return a(r, x), I && pa(r, j), M;
      if (x === null) {
        for (; j < d.length; j++)
          (x = T(r, d[j], S)),
            x !== null &&
              ((o = n(x, o, j)),
              V === null ? (M = x) : (V.sibling = x),
              (V = x));
        return I && pa(r, j), M;
      }
      for (x = u(x); j < d.length; j++)
        (_l = m(x, r, j, d[j], S)),
          _l !== null &&
            (l &&
              _l.alternate !== null &&
              x.delete(_l.key === null ? j : _l.key),
            (o = n(_l, o, j)),
            V === null ? (M = _l) : (V.sibling = _l),
            (V = _l));
      return (
        l &&
          x.forEach(function (ra) {
            return t(r, ra);
          }),
        I && pa(r, j),
        M
      );
    }
    function q(r, o, d, S) {
      if (d == null) throw Error(y(151));
      for (
        var M = null, V = null, x = o, j = (o = 0), _l = null, F = d.next();
        x !== null && !F.done;
        j++, F = d.next()
      ) {
        x.index > j ? ((_l = x), (x = null)) : (_l = x.sibling);
        var ra = h(r, x, F.value, S);
        if (ra === null) {
          x === null && (x = _l);
          break;
        }
        l && x && ra.alternate === null && t(r, x),
          (o = n(ra, o, j)),
          V === null ? (M = ra) : (V.sibling = ra),
          (V = ra),
          (x = _l);
      }
      if (F.done) return a(r, x), I && pa(r, j), M;
      if (x === null) {
        for (; !F.done; j++, F = d.next())
          (F = T(r, F.value, S)),
            F !== null &&
              ((o = n(F, o, j)),
              V === null ? (M = F) : (V.sibling = F),
              (V = F));
        return I && pa(r, j), M;
      }
      for (x = u(x); !F.done; j++, F = d.next())
        (F = m(x, r, j, F.value, S)),
          F !== null &&
            (l && F.alternate !== null && x.delete(F.key === null ? j : F.key),
            (o = n(F, o, j)),
            V === null ? (M = F) : (V.sibling = F),
            (V = F));
      return (
        l &&
          x.forEach(function (D1) {
            return t(r, D1);
          }),
        I && pa(r, j),
        M
      );
    }
    function el(r, o, d, S) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Bl &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case il:
            l: {
              for (var M = d.key; o !== null; ) {
                if (o.key === M) {
                  if (((M = d.type), M === Bl)) {
                    if (o.tag === 7) {
                      a(r, o.sibling),
                        (S = e(o, d.props.children)),
                        (S.return = r),
                        (r = S);
                      break l;
                    }
                  } else if (
                    o.elementType === M ||
                    (typeof M == "object" &&
                      M !== null &&
                      M.$$typeof === wl &&
                      eo(M) === o.type)
                  ) {
                    a(r, o.sibling),
                      (S = e(o, d.props)),
                      $u(S, d),
                      (S.return = r),
                      (r = S);
                    break l;
                  }
                  a(r, o);
                  break;
                } else t(r, o);
                o = o.sibling;
              }
              d.type === Bl
                ? ((S = Ta(d.props.children, r.mode, S, d.key)),
                  (S.return = r),
                  (r = S))
                : ((S = Ye(d.type, d.key, d.props, null, r.mode, S)),
                  $u(S, d),
                  (S.return = r),
                  (r = S));
            }
            return c(r);
          case jl:
            l: {
              for (M = d.key; o !== null; ) {
                if (o.key === M)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === d.containerInfo &&
                    o.stateNode.implementation === d.implementation
                  ) {
                    a(r, o.sibling),
                      (S = e(o, d.children || [])),
                      (S.return = r),
                      (r = S);
                    break l;
                  } else {
                    a(r, o);
                    break;
                  }
                else t(r, o);
                o = o.sibling;
              }
              (S = mc(d, r.mode, S)), (S.return = r), (r = S);
            }
            return c(r);
          case wl:
            return (M = d._init), (d = M(d._payload)), el(r, o, d, S);
        }
        if (xl(d)) return Y(r, o, d, S);
        if (Ul(d)) {
          if (((M = Ul(d)), typeof M != "function")) throw Error(y(150));
          return (d = M.call(d)), q(r, o, d, S);
        }
        if (typeof d.then == "function") return el(r, o, ln(d), S);
        if (d.$$typeof === Rl) return el(r, o, Ce(r, d), S);
        tn(r, d);
      }
      return (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
        ? ((d = "" + d),
          o !== null && o.tag === 6
            ? (a(r, o.sibling), (S = e(o, d)), (S.return = r), (r = S))
            : (a(r, o), (S = hc(d, r.mode, S)), (S.return = r), (r = S)),
          c(r))
        : a(r, o);
    }
    return function (r, o, d, S) {
      try {
        Wu = 0;
        var M = el(r, o, d, S);
        return (eu = null), M;
      } catch (x) {
        if (x === Xu || x === Ve) throw x;
        var V = Fl(29, x, null, r.mode);
        return (V.lanes = S), (V.return = r), V;
      } finally {
      }
    };
  }
  var nu = no(!0),
    co = no(!1),
    st = p(null),
    Tt = null;
  function kt(l) {
    var t = l.alternate;
    z(El, El.current & 1),
      z(st, l),
      Tt === null &&
        (t === null || lu.current !== null || t.memoizedState !== null) &&
        (Tt = l);
  }
  function fo(l) {
    if (l.tag === 22) {
      if ((z(El, El.current), z(st, l), Tt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Tt = l);
      }
    } else Ft();
  }
  function Ft() {
    z(El, El.current), z(st, st.current);
  }
  function qt(l) {
    O(st), Tt === l && (Tt = null), O(El);
  }
  var El = p(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Xf(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function $c(l, t, a, u) {
    (t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : N({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var kc = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = tt(),
        e = Jt(u);
      (e.payload = t),
        a != null && (e.callback = a),
        (t = Wt(l, e, u)),
        t !== null && (at(t, l, u), Cu(t, l, u));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = tt(),
        e = Jt(u);
      (e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = Wt(l, e, u)),
        t !== null && (at(t, l, u), Cu(t, l, u));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = tt(),
        u = Jt(a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Wt(l, u, a)),
        t !== null && (at(t, l, a), Cu(t, l, a));
    },
  };
  function io(l, t, a, u, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !xu(a, u) || !xu(e, n)
        : !0
    );
  }
  function so(l, t, a, u) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && kc.enqueueReplaceState(t, t.state, null);
  }
  function Ra(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = N({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var un =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function oo(l) {
    un(l);
  }
  function ro(l) {
    console.error(l);
  }
  function vo(l) {
    un(l);
  }
  function en(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function yo(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Fc(l, t, a) {
    return (
      (a = Jt(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        en(l, t);
      }),
      a
    );
  }
  function ho(l) {
    return (l = Jt(l)), (l.tag = 3), l;
  }
  function mo(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          yo(t, a, u);
        });
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        yo(t, a, u),
          typeof e != "function" &&
            (ua === null ? (ua = new Set([this])) : ua.add(this));
        var f = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function Dd(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Bu(t, a, e, !0),
        (a = st.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Tt === null ? pf() : a.alternate === null && hl === 0 && (hl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === Oc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  zf(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === Oc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  zf(l, u, e)),
              !1
            );
        }
        throw Error(y(435, a.tag));
      }
      return zf(l, u, e), pf(), !1;
    }
    if (I)
      return (
        (t = st.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Sc && ((l = Error(y(422), { cause: u })), ju(nt(l, a))))
          : (u !== Sc && ((t = Error(y(423), { cause: u })), ju(nt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = nt(u, a)),
            (e = Fc(l.stateNode, u, e)),
            Rc(l, e),
            hl !== 4 && (hl = 2)),
        !1
      );
    var n = Error(y(520), { cause: u });
    if (
      ((n = nt(n, a)),
      ae === null ? (ae = [n]) : ae.push(n),
      hl !== 4 && (hl = 2),
      t === null)
    )
      return !0;
    (u = nt(u, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = Fc(a.stateNode, u, l)),
            Rc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ua === null || !ua.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = ho(e)),
              mo(e, l, a, u),
              Rc(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var go = Error(y(461)),
    Al = !1;
  function Ol(l, t, a, u) {
    t.child = l === null ? co(t, null, a, u) : nu(t, l.child, a, u);
  }
  function bo(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var f in u) f !== "ref" && (c[f] = u[f]);
    } else c = u;
    return (
      Oa(t),
      (u = qc(l, t, a, c, n, e)),
      (f = jc()),
      l !== null && !Al
        ? (Bc(l, t, e), jt(l, t, e))
        : (I && f && gc(t), (t.flags |= 1), Ol(l, t, u, e), t.child)
    );
  }
  function So(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !yc(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), To(l, t, n, u, e))
        : ((l = Ye(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !nf(l, e))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : xu), a(c, u) && l.ref === t.ref)
      )
        return jt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Dt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function To(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (xu(n, u) && l.ref === t.ref)
        if (((Al = !1), (t.pendingProps = u = n), nf(l, e)))
          (l.flags & 131072) !== 0 && (Al = !0);
        else return (t.lanes = l.lanes), jt(l, t, e);
    }
    return Ic(l, t, a, u, e);
  }
  function Eo(l, t, a) {
    var u = t.pendingProps,
      e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((u = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~u;
        } else (t.childLanes = 0), (t.child = null);
        return po(l, t, u, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ze(t, n !== null ? n.cachePool : null),
          n !== null ? Ss(t, n) : xc(),
          fo(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          po(l, t, n !== null ? n.baseLanes | a : a, a)
        );
    } else
      n !== null
        ? (Ze(t, n.cachePool), Ss(t, n), Ft(), (t.memoizedState = null))
        : (l !== null && Ze(t, null), xc(), Ft());
    return Ol(l, t, e, a), t.child;
  }
  function po(l, t, a, u) {
    var e = _c();
    return (
      (e = e === null ? null : { parent: Tl._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: a, cachePool: e }),
      l !== null && Ze(t, null),
      xc(),
      fo(t),
      l !== null && Bu(l, t, u, !0),
      null
    );
  }
  function nn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(y(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Ic(l, t, a, u, e) {
    return (
      Oa(t),
      (a = qc(l, t, a, u, void 0, e)),
      (u = jc()),
      l !== null && !Al
        ? (Bc(l, t, e), jt(l, t, e))
        : (I && u && gc(t), (t.flags |= 1), Ol(l, t, a, e), t.child)
    );
  }
  function Ao(l, t, a, u, e, n) {
    return (
      Oa(t),
      (t.updateQueue = null),
      (a = Es(t, u, a, e)),
      Ts(l),
      (u = jc()),
      l !== null && !Al
        ? (Bc(l, t, n), jt(l, t, n))
        : (I && u && gc(t), (t.flags |= 1), Ol(l, t, a, n), t.child)
    );
  }
  function zo(l, t, a, u, e) {
    if ((Oa(t), t.stateNode === null)) {
      var n = $a,
        c = a.contextType;
      typeof c == "object" && c !== null && (n = Hl(c)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = kc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Mc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? Hl(c) : $a),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && ($c(t, a, c, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && kc.enqueueReplaceState(n, n.state, null),
          Vu(t, u, n, e),
          Zu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0);
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        i = Ra(a, f);
      n.props = i;
      var v = n.context,
        g = a.contextType;
      (c = $a), typeof g == "object" && g !== null && (c = Hl(g));
      var T = a.getDerivedStateFromProps;
      (g =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || v !== c) && so(t, n, u, c)),
        (wt = !1);
      var h = t.memoizedState;
      (n.state = h),
        Vu(t, u, n, e),
        Zu(),
        (v = t.memoizedState),
        f || h !== v || wt
          ? (typeof T == "function" && ($c(t, a, T, u), (v = t.memoizedState)),
            (i = wt || io(t, a, i, u, h, v, c))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = v)),
            (n.props = u),
            (n.state = v),
            (n.context = c),
            (u = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (n = t.stateNode),
        Dc(l, t),
        (c = t.memoizedProps),
        (g = Ra(a, c)),
        (n.props = g),
        (T = t.pendingProps),
        (h = n.context),
        (v = a.contextType),
        (i = $a),
        typeof v == "object" && v !== null && (i = Hl(v)),
        (f = a.getDerivedStateFromProps),
        (v =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== T || h !== i) && so(t, n, u, i)),
        (wt = !1),
        (h = t.memoizedState),
        (n.state = h),
        Vu(t, u, n, e),
        Zu();
      var m = t.memoizedState;
      c !== T ||
      h !== m ||
      wt ||
      (l !== null && l.dependencies !== null && Qe(l.dependencies))
        ? (typeof f == "function" && ($c(t, a, f, u), (m = t.memoizedState)),
          (g =
            wt ||
            io(t, a, g, u, h, m, i) ||
            (l !== null && l.dependencies !== null && Qe(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, m, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, m, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = m)),
          (n.props = u),
          (n.state = m),
          (n.context = i),
          (u = g))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      nn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = nu(t, l.child, null, e)),
              (t.child = nu(t, null, a, e)))
            : Ol(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = jt(l, t, e)),
      l
    );
  }
  function _o(l, t, a, u) {
    return qu(), (t.flags |= 256), Ol(l, t, a, u), t.child;
  }
  var Pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function lf(l) {
    return { baseLanes: l, cachePool: rs() };
  }
  function tf(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= ot), l;
  }
  function Oo(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (El.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (I) {
        if ((e ? kt(t) : Ft(), I)) {
          var f = yl,
            i;
          if ((i = f)) {
            l: {
              for (i = f, f = St; i.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break l;
                }
                if (((i = mt(i.nextSibling)), i === null)) {
                  f = null;
                  break l;
                }
              }
              f = i;
            }
            f !== null
              ? ((t.memoizedState = {
                  dehydrated: f,
                  treeContext: Ea !== null ? { id: Rt, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Fl(18, null, null, 0)),
                (i.stateNode = f),
                (i.return = t),
                (t.child = i),
                (Yl = t),
                (yl = null),
                (i = !0))
              : (i = !1);
          }
          i || za(t);
        }
        if (
          ((f = t.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return Xf(f) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        qt(t);
      }
      return (
        (f = u.children),
        (u = u.fallback),
        e
          ? (Ft(),
            (e = t.mode),
            (f = cn({ mode: "hidden", children: f }, e)),
            (u = Ta(u, e, a, null)),
            (f.return = t),
            (u.return = t),
            (f.sibling = u),
            (t.child = f),
            (e = t.child),
            (e.memoizedState = lf(a)),
            (e.childLanes = tf(l, c, a)),
            (t.memoizedState = Pc),
            u)
          : (kt(t), af(t, f))
      );
    }
    if (
      ((i = l.memoizedState), i !== null && ((f = i.dehydrated), f !== null))
    ) {
      if (n)
        t.flags & 256
          ? (kt(t), (t.flags &= -257), (t = uf(l, t, a)))
          : t.memoizedState !== null
          ? (Ft(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (Ft(),
            (e = u.fallback),
            (f = t.mode),
            (u = cn({ mode: "visible", children: u.children }, f)),
            (e = Ta(e, f, a, null)),
            (e.flags |= 2),
            (u.return = t),
            (e.return = t),
            (u.sibling = e),
            (t.child = u),
            nu(t, l.child, null, a),
            (u = t.child),
            (u.memoizedState = lf(a)),
            (u.childLanes = tf(l, c, a)),
            (t.memoizedState = Pc),
            (t = e));
      else if ((kt(t), Xf(f))) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var v = c.dgst;
        (c = v),
          (u = Error(y(419))),
          (u.stack = ""),
          (u.digest = c),
          ju({ value: u, source: null, stack: null }),
          (t = uf(l, t, a));
      } else if (
        (Al || Bu(l, t, a, !1), (c = (a & l.childLanes) !== 0), Al || c)
      ) {
        if (
          ((c = sl),
          c !== null &&
            ((u = a & -a),
            (u = (u & 42) !== 0 ? 1 : Xn(u)),
            (u = (u & (c.suspendedLanes | a)) !== 0 ? 0 : u),
            u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), Wa(l, u), at(c, l, u), go);
        f.data === "$?" || pf(), (t = uf(l, t, a));
      } else
        f.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (yl = mt(f.nextSibling)),
            (Yl = t),
            (I = !0),
            (Aa = null),
            (St = !1),
            l !== null &&
              ((ft[it++] = Rt),
              (ft[it++] = Ut),
              (ft[it++] = Ea),
              (Rt = l.id),
              (Ut = l.overflow),
              (Ea = t)),
            (t = af(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (Ft(),
        (e = u.fallback),
        (f = t.mode),
        (i = l.child),
        (v = i.sibling),
        (u = Dt(i, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = i.subtreeFlags & 65011712),
        v !== null ? (e = Dt(v, e)) : ((e = Ta(e, f, a, null)), (e.flags |= 2)),
        (e.return = t),
        (u.return = t),
        (u.sibling = e),
        (t.child = u),
        (u = e),
        (e = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = lf(a))
          : ((i = f.cachePool),
            i !== null
              ? ((v = Tl._currentValue),
                (i = i.parent !== v ? { parent: v, pool: v } : i))
              : (i = rs()),
            (f = { baseLanes: f.baseLanes | a, cachePool: i })),
        (e.memoizedState = f),
        (e.childLanes = tf(l, c, a)),
        (t.memoizedState = Pc),
        u)
      : (kt(t),
        (a = l.child),
        (l = a.sibling),
        (a = Dt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function af(l, t) {
    return (
      (t = cn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function cn(l, t) {
    return (
      (l = Fl(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function uf(l, t, a) {
    return (
      nu(t, l.child, null, a),
      (l = af(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Mo(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Ec(l.return, t, a);
  }
  function ef(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = u),
        (n.tail = a),
        (n.tailMode = e));
  }
  function Do(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    if ((Ol(l, t, u.children, a), (u = El.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Mo(l, a, t);
          else if (l.tag === 19) Mo(l, a, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      u &= 1;
    }
    switch ((z(El, u), e)) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          (l = a.alternate),
            l !== null && an(l) === null && (e = a),
            (a = a.sibling);
        (a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          ef(t, !1, e, a, n);
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && an(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = a), (a = e), (e = l);
        }
        ef(t, !0, a, null, n);
        break;
      case "together":
        ef(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function jt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (aa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((Bu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(y(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Dt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = Dt(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function nf(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Qe(l)));
  }
  function Rd(l, t, a) {
    switch (t.tag) {
      case 3:
        ol(t, t.stateNode.containerInfo),
          Kt(t, Tl, l.memoizedState.cache),
          qu();
        break;
      case 27:
      case 5:
        qn(t);
        break;
      case 4:
        ol(t, t.stateNode.containerInfo);
        break;
      case 10:
        Kt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (kt(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? Oo(l, t, a)
            : (kt(t), (l = jt(l, t, a)), l !== null ? l.sibling : null);
        kt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (Bu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Do(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          z(El, El.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Eo(l, t, a);
      case 24:
        Kt(t, Tl, l.memoizedState.cache);
    }
    return jt(l, t, a);
  }
  function Ro(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Al = !0;
      else {
        if (!nf(l, a) && (t.flags & 128) === 0) return (Al = !1), Rd(l, t, a);
        Al = (l.flags & 131072) !== 0;
      }
    else (Al = !1), I && (t.flags & 1048576) !== 0 && es(t, Xe, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType,
            e = u._init;
          if (((u = e(u._payload)), (t.type = u), typeof u == "function"))
            yc(u)
              ? ((l = Ra(u, l)), (t.tag = 1), (t = zo(null, t, u, l, a)))
              : ((t.tag = 0), (t = Ic(null, t, u, l, a)));
          else {
            if (u != null) {
              if (((e = u.$$typeof), e === vt)) {
                (t.tag = 11), (t = bo(null, t, u, l, a));
                break l;
              } else if (e === Kl) {
                (t.tag = 14), (t = So(null, t, u, l, a));
                break l;
              }
            }
            throw ((t = ya(u) || u), Error(y(306, t, "")));
          }
        }
        return t;
      case 0:
        return Ic(l, t, t.type, t.pendingProps, a);
      case 1:
        return (u = t.type), (e = Ra(u, t.pendingProps)), zo(l, t, u, e, a);
      case 3:
        l: {
          if ((ol(t, t.stateNode.containerInfo), l === null))
            throw Error(y(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          (e = n.element), Dc(l, t), Vu(t, u, null, a);
          var c = t.memoizedState;
          if (
            ((u = c.cache),
            Kt(t, Tl, u),
            u !== n.cache && pc(t, [Tl], a, !0),
            Zu(),
            (u = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = _o(l, t, u, a);
              break l;
            } else if (u !== e) {
              (e = nt(Error(y(424)), t)), ju(e), (t = _o(l, t, u, a));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                yl = mt(l.firstChild),
                  Yl = t,
                  I = !0,
                  Aa = null,
                  St = !0,
                  a = co(t, null, u, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((qu(), u === e)) {
              t = jt(l, t, a);
              break l;
            }
            Ol(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          nn(l, t),
          l === null
            ? (a = H0(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : I ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = En(X.current).createElement(a)),
                (u[Nl] = t),
                (u[Xl] = l),
                Dl(u, a, l),
                pl(u),
                (t.stateNode = u))
            : (t.memoizedState = H0(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          qn(t),
          l === null &&
            I &&
            ((u = t.stateNode = U0(t.type, t.pendingProps, X.current)),
            (Yl = t),
            (St = !0),
            (e = yl),
            ca(t.type) ? ((Qf = e), (yl = mt(u.firstChild))) : (yl = e)),
          Ol(l, t, t.pendingProps.children, a),
          nn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            I &&
            ((e = u = yl) &&
              ((u = u1(u, t.type, t.pendingProps, St)),
              u !== null
                ? ((t.stateNode = u),
                  (Yl = t),
                  (yl = mt(u.firstChild)),
                  (St = !1),
                  (e = !0))
                : (e = !1)),
            e || za(t)),
          qn(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Bf(e, n) ? (u = null) : c !== null && Bf(e, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = qc(l, t, Ed, null, null, a)), (re._currentValue = e)),
          nn(l, t),
          Ol(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            I &&
            ((l = a = yl) &&
              ((a = e1(a, t.pendingProps, St)),
              a !== null
                ? ((t.stateNode = a), (Yl = t), (yl = null), (l = !0))
                : (l = !1)),
            l || za(t)),
          null
        );
      case 13:
        return Oo(l, t, a);
      case 4:
        return (
          ol(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = nu(t, null, u, a)) : Ol(l, t, u, a),
          t.child
        );
      case 11:
        return bo(l, t, t.type, t.pendingProps, a);
      case 7:
        return Ol(l, t, t.pendingProps, a), t.child;
      case 8:
        return Ol(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Ol(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (u = t.pendingProps),
          Kt(t, t.type, u.value),
          Ol(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Oa(t),
          (e = Hl(e)),
          (u = u(e)),
          (t.flags |= 1),
          Ol(l, t, u, a),
          t.child
        );
      case 14:
        return So(l, t, t.type, t.pendingProps, a);
      case 15:
        return To(l, t, t.type, t.pendingProps, a);
      case 19:
        return Do(l, t, a);
      case 31:
        return (
          (u = t.pendingProps),
          (a = t.mode),
          (u = { mode: u.mode, children: u.children }),
          l === null
            ? ((a = cn(u, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = Dt(l.child, u)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return Eo(l, t, a);
      case 24:
        return (
          Oa(t),
          (u = Hl(Tl)),
          l === null
            ? ((e = _c()),
              e === null &&
                ((e = sl),
                (n = Ac()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              Mc(t),
              Kt(t, Tl, e))
            : ((l.lanes & a) !== 0 && (Dc(l, t), Vu(t, null, null, a), Zu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  Kt(t, Tl, u))
                : ((u = n.cache),
                  Kt(t, Tl, u),
                  u !== e.cache && pc(t, [Tl], a, !0))),
          Ol(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(y(156, t.tag));
  }
  function Bt(l) {
    l.flags |= 4;
  }
  function Uo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !G0(t))) {
      if (
        ((t = st.current),
        t !== null &&
          ((w & 4194048) === w
            ? Tt !== null
            : ((w & 62914560) !== w && (w & 536870912) === 0) || t !== Tt))
      )
        throw ((Qu = Oc), ds);
      l.flags |= 8192;
    }
  }
  function fn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? fi() : 536870912), (l.lanes |= t), (su |= t));
  }
  function ku(l, t) {
    if (!I)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= u), (l.childLanes = a), t;
  }
  function Ud(l, t, a) {
    var u = t.pendingProps;
    switch ((bc(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vl(t), null;
      case 1:
        return vl(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Nt(Tl),
          Ct(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (Hu(t)
              ? Bt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), fs())),
          vl(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (Bt(t),
              a !== null ? (vl(t), Uo(t, a)) : (vl(t), (t.flags &= -16777217)))
            : a
            ? a !== l.memoizedState
              ? (Bt(t), vl(t), Uo(t, a))
              : (vl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== u && Bt(t), vl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        be(t), (a = X.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== u && Bt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(y(166));
            return vl(t), null;
          }
          (l = H.current),
            Hu(t) ? ns(t) : ((l = U0(e, u, a)), (t.stateNode = l), Bt(t));
        }
        return vl(t), null;
      case 5:
        if ((be(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Bt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(y(166));
            return vl(t), null;
          }
          if (((l = H.current), Hu(t))) ns(t);
          else {
            switch (((e = En(X.current)), l)) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (l = e.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof u.is == "string"
                        ? e.createElement("select", { is: u.is })
                        : e.createElement("select")),
                      u.multiple
                        ? (l.multiple = !0)
                        : u.size && (l.size = u.size);
                    break;
                  default:
                    l =
                      typeof u.is == "string"
                        ? e.createElement(a, { is: u.is })
                        : e.createElement(a);
                }
            }
            (l[Nl] = t), (l[Xl] = u);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((Dl(l, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Bt(t);
          }
        }
        return vl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Bt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(y(166));
          if (((l = X.current), Hu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Yl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            (l[Nl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                A0(l.nodeValue, a)
              )),
              l || za(t);
          } else (l = En(l).createTextNode(u)), (l[Nl] = t), (t.stateNode = l);
        }
        return vl(t), null;
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = Hu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(y(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(y(317));
              e[Nl] = t;
            } else
              qu(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            vl(t), (e = !1);
          } else
            (e = fs()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0);
          if (!e) return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        if ((qt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
        if (
          ((a = u !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          (u = t.child),
            (e = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (n = u.memoizedState.cachePool.pool),
            n !== e && (u.flags |= 2048);
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          fn(t, t.updateQueue),
          vl(t),
          null
        );
      case 4:
        return Ct(), l === null && xf(t.stateNode.containerInfo), vl(t), null;
      case 10:
        return Nt(t.type), vl(t), null;
      case 19:
        if ((O(El), (e = t.memoizedState), e === null)) return vl(t), null;
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) ku(e, !1);
          else {
            if (hl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = an(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ku(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      fn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    us(a, l), (a = a.sibling);
                  return z(El, (El.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              bt() > rn &&
              ((t.flags |= 128), (u = !0), ku(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = an(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                fn(t, l),
                ku(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !I)
              )
                return vl(t), null;
            } else
              2 * bt() - e.renderingStartTime > rn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), ku(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = bt()),
            (t.sibling = null),
            (l = El.current),
            z(El, u ? (l & 1) | 2 : l & 1),
            t)
          : (vl(t), null);
      case 22:
      case 23:
        return (
          qt(t),
          Nc(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : vl(t),
          (a = t.updateQueue),
          a !== null && fn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && O(Ma),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Nt(Tl),
          vl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, t.tag));
  }
  function xd(l, t) {
    switch ((bc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nt(Tl),
          Ct(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 13:
        if (
          (qt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(y(340));
          qu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return O(El), null;
      case 4:
        return Ct(), null;
      case 10:
        return Nt(t.type), null;
      case 22:
      case 23:
        return (
          qt(t),
          Nc(),
          l !== null && O(Ma),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Nt(Tl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xo(l, t) {
    switch ((bc(t), t.tag)) {
      case 3:
        Nt(Tl), Ct();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        Ct();
        break;
      case 13:
        qt(t);
        break;
      case 19:
        O(El);
        break;
      case 10:
        Nt(t.type);
        break;
      case 22:
      case 23:
        qt(t), Nc(), l !== null && O(Ma);
        break;
      case 24:
        Nt(Tl);
    }
  }
  function Fu(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              c = a.inst;
            (u = n()), (c.destroy = u);
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      fl(t, t.return, f);
    }
  }
  function It(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              f = c.destroy;
            if (f !== void 0) {
              (c.destroy = void 0), (e = t);
              var i = a,
                v = f;
              try {
                v();
              } catch (g) {
                fl(e, i, g);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      fl(t, t.return, g);
    }
  }
  function No(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        bs(t, a);
      } catch (u) {
        fl(l, l.return, u);
      }
    }
  }
  function Ho(l, t, a) {
    (a.props = Ra(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      fl(l, t, u);
    }
  }
  function Iu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      fl(l, t, e);
    }
  }
  function Et(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          fl(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          fl(l, t, e);
        }
      else a.current = null;
  }
  function qo(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      fl(l, l.return, e);
    }
  }
  function cf(l, t, a) {
    try {
      var u = l.stateNode;
      Id(u, l.type, a, t), (u[Xl] = t);
    } catch (e) {
      fl(l, l.return, e);
    }
  }
  function jo(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ca(l.type)) ||
      l.tag === 4
    );
  }
  function ff(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || jo(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && ca(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function sf(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Tn));
    else if (
      u !== 4 &&
      (u === 27 && ca(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (sf(l, t, a), l = l.sibling; l !== null; )
        sf(l, t, a), (l = l.sibling);
  }
  function sn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (
      u !== 4 &&
      (u === 27 && ca(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (sn(l, t, a), l = l.sibling; l !== null; )
        sn(l, t, a), (l = l.sibling);
  }
  function Bo(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Dl(t, u, a), (t[Nl] = l), (t[Xl] = a);
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  var Yt = !1,
    gl = !1,
    of = !1,
    Yo = typeof WeakSet == "function" ? WeakSet : Set,
    zl = null;
  function Nd(l, t) {
    if (((l = l.containerInfo), (qf = Mn), (l = Ji(l)), fc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              f = -1,
              i = -1,
              v = 0,
              g = 0,
              T = l,
              h = null;
            t: for (;;) {
              for (
                var m;
                T !== a || (e !== 0 && T.nodeType !== 3) || (f = c + e),
                  T !== n || (u !== 0 && T.nodeType !== 3) || (i = c + u),
                  T.nodeType === 3 && (c += T.nodeValue.length),
                  (m = T.firstChild) !== null;

              )
                (h = T), (T = m);
              for (;;) {
                if (T === l) break t;
                if (
                  (h === a && ++v === e && (f = c),
                  h === n && ++g === u && (i = c),
                  (m = T.nextSibling) !== null)
                )
                  break;
                (T = h), (h = T.parentNode);
              }
              T = m;
            }
            a = f === -1 || i === -1 ? null : { start: f, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      jf = { focusedElem: l, selectionRange: a }, Mn = !1, zl = t;
      zl !== null;

    )
      if (
        ((t = zl), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (zl = l);
      else
        for (; zl !== null; ) {
          switch (((t = zl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode);
                try {
                  var Y = Ra(a.type, e, a.elementType === a.type);
                  (l = u.getSnapshotBeforeUpdate(Y, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l);
                } catch (q) {
                  fl(a, a.return, q);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Gf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Gf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(y(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (zl = l);
            break;
          }
          zl = t.return;
        }
  }
  function Go(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pt(l, a), u & 4 && Fu(5, a);
        break;
      case 1:
        if ((Pt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              fl(a, a.return, c);
            }
          else {
            var e = Ra(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              fl(a, a.return, c);
            }
          }
        u & 64 && No(a), u & 512 && Iu(a, a.return);
        break;
      case 3:
        if ((Pt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            bs(l, t);
          } catch (c) {
            fl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Bo(a);
      case 26:
      case 5:
        Pt(l, a), t === null && u & 4 && qo(a), u & 512 && Iu(a, a.return);
        break;
      case 12:
        Pt(l, a);
        break;
      case 13:
        Pt(l, a),
          u & 4 && Co(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = Cd.bind(null, a)), n1(l, a))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Yt), !u)) {
          (t = (t !== null && t.memoizedState !== null) || gl), (e = Yt);
          var n = gl;
          (Yt = u),
            (gl = t) && !n ? la(l, a, (a.subtreeFlags & 8772) !== 0) : Pt(l, a),
            (Yt = e),
            (gl = n);
        }
        break;
      case 30:
        break;
      default:
        Pt(l, a);
    }
  }
  function Xo(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Xo(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Zn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var rl = null,
    Zl = !1;
  function Gt(l, t, a) {
    for (a = a.child; a !== null; ) Qo(l, t, a), (a = a.sibling);
  }
  function Qo(l, t, a) {
    if (Wl && typeof Wl.onCommitFiberUnmount == "function")
      try {
        Wl.onCommitFiberUnmount(Su, a);
      } catch {}
    switch (a.tag) {
      case 26:
        gl || Et(a, t),
          Gt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        gl || Et(a, t);
        var u = rl,
          e = Zl;
        ca(a.type) && ((rl = a.stateNode), (Zl = !1)),
          Gt(l, t, a),
          fe(a.stateNode),
          (rl = u),
          (Zl = e);
        break;
      case 5:
        gl || Et(a, t);
      case 6:
        if (
          ((u = rl),
          (e = Zl),
          (rl = null),
          Gt(l, t, a),
          (rl = u),
          (Zl = e),
          rl !== null)
        )
          if (Zl)
            try {
              (rl.nodeType === 9
                ? rl.body
                : rl.nodeName === "HTML"
                ? rl.ownerDocument.body
                : rl
              ).removeChild(a.stateNode);
            } catch (n) {
              fl(a, t, n);
            }
          else
            try {
              rl.removeChild(a.stateNode);
            } catch (n) {
              fl(a, t, n);
            }
        break;
      case 18:
        rl !== null &&
          (Zl
            ? ((l = rl),
              D0(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                a.stateNode
              ),
              he(l))
            : D0(rl, a.stateNode));
        break;
      case 4:
        (u = rl),
          (e = Zl),
          (rl = a.stateNode.containerInfo),
          (Zl = !0),
          Gt(l, t, a),
          (rl = u),
          (Zl = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        gl || It(2, a, t), gl || It(4, a, t), Gt(l, t, a);
        break;
      case 1:
        gl ||
          (Et(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && Ho(a, t, u)),
          Gt(l, t, a);
        break;
      case 21:
        Gt(l, t, a);
        break;
      case 22:
        (gl = (u = gl) || a.memoizedState !== null), Gt(l, t, a), (gl = u);
        break;
      default:
        Gt(l, t, a);
    }
  }
  function Co(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        he(l);
      } catch (a) {
        fl(t, t.return, a);
      }
  }
  function Hd(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Yo()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Yo()),
          t
        );
      default:
        throw Error(y(435, l.tag));
    }
  }
  function rf(l, t) {
    var a = Hd(l);
    t.forEach(function (u) {
      var e = Zd.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function Il(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          c = t,
          f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (ca(f.type)) {
                (rl = f.stateNode), (Zl = !1);
                break l;
              }
              break;
            case 5:
              (rl = f.stateNode), (Zl = !1);
              break l;
            case 3:
            case 4:
              (rl = f.stateNode.containerInfo), (Zl = !0);
              break l;
          }
          f = f.return;
        }
        if (rl === null) throw Error(y(160));
        Qo(n, c, e),
          (rl = null),
          (Zl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Zo(t, l), (t = t.sibling);
  }
  var ht = null;
  function Zo(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Il(t, l),
          Pl(l),
          u & 4 && (It(3, l, l.return), Fu(3, l), It(5, l, l.return));
        break;
      case 1:
        Il(t, l),
          Pl(l),
          u & 512 && (gl || a === null || Et(a, a.return)),
          u & 64 &&
            Yt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var e = ht;
        if (
          (Il(t, l),
          Pl(l),
          u & 512 && (gl || a === null || Et(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  (u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (u) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[pu] ||
                          n[Nl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Dl(n, u, a),
                        (n[Nl] = l),
                        pl(n),
                        (u = n);
                      break l;
                    case "link":
                      var c = B0("link", "href", e).get(u + (a.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Dl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = B0("meta", "content", e).get(
                          u + (a.content || "")
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Dl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(y(468, u));
                  }
                  (n[Nl] = l), pl(n), (u = n);
                }
                l.stateNode = u;
              } else Y0(e, l.type, l.stateNode);
            else l.stateNode = j0(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? Y0(e, l.type, l.stateNode)
                  : j0(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                cf(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Il(t, l),
          Pl(l),
          u & 512 && (gl || a === null || Et(a, a.return)),
          a !== null && u & 4 && cf(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (Il(t, l),
          Pl(l),
          u & 512 && (gl || a === null || Et(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Ca(e, "");
          } catch (m) {
            fl(l, l.return, m);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), cf(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (of = !0);
        break;
      case 6:
        if ((Il(t, l), Pl(l), u & 4)) {
          if (l.stateNode === null) throw Error(y(162));
          (u = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = u;
          } catch (m) {
            fl(l, l.return, m);
          }
        }
        break;
      case 3:
        if (
          ((zn = null),
          (e = ht),
          (ht = pn(t.containerInfo)),
          Il(t, l),
          (ht = e),
          Pl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            he(t.containerInfo);
          } catch (m) {
            fl(l, l.return, m);
          }
        of && ((of = !1), Vo(l));
        break;
      case 4:
        (u = ht),
          (ht = pn(l.stateNode.containerInfo)),
          Il(t, l),
          Pl(l),
          (ht = u);
        break;
      case 12:
        Il(t, l), Pl(l);
        break;
      case 13:
        Il(t, l),
          Pl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (gf = bt()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), rf(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null,
          v = Yt,
          g = gl;
        if (
          ((Yt = v || e),
          (gl = g || i),
          Il(t, l),
          (gl = g),
          (Yt = v),
          Pl(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || i || Yt || gl || Ua(l)),
              a = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (((n = i.stateNode), e))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    f = i.stateNode;
                    var T = i.memoizedProps.style,
                      h =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    f.style.display =
                      h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (m) {
                  fl(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  fl(i, i.return, m);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), rf(l, a))));
        break;
      case 19:
        Il(t, l),
          Pl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), rf(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Il(t, l), Pl(l);
    }
  }
  function Pl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (jo(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(y(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = ff(l);
            sn(l, n, e);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Ca(c, ""), (a.flags &= -33));
            var f = ff(l);
            sn(l, f, c);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo,
              v = ff(l);
            sf(l, v, i);
            break;
          default:
            throw Error(y(161));
        }
      } catch (g) {
        fl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Vo(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Vo(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Pt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Go(l, t.alternate, t), (t = t.sibling);
  }
  function Ua(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          It(4, t, t.return), Ua(t);
          break;
        case 1:
          Et(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Ho(t, t.return, a),
            Ua(t);
          break;
        case 27:
          fe(t.stateNode);
        case 26:
        case 5:
          Et(t, t.return), Ua(t);
          break;
        case 22:
          t.memoizedState === null && Ua(t);
          break;
        case 30:
          Ua(t);
          break;
        default:
          Ua(t);
      }
      l = l.sibling;
    }
  }
  function la(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          la(e, n, a), Fu(4, n);
          break;
        case 1:
          if (
            (la(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (v) {
              fl(u, u.return, v);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var f = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  gs(i[e], f);
            } catch (v) {
              fl(u, u.return, v);
            }
          }
          a && c & 64 && No(n), Iu(n, n.return);
          break;
        case 27:
          Bo(n);
        case 26:
        case 5:
          la(e, n, a), a && u === null && c & 4 && qo(n), Iu(n, n.return);
          break;
        case 12:
          la(e, n, a);
          break;
        case 13:
          la(e, n, a), a && c & 4 && Co(e, n);
          break;
        case 22:
          n.memoizedState === null && la(e, n, a), Iu(n, n.return);
          break;
        case 30:
          break;
        default:
          la(e, n, a);
      }
      t = t.sibling;
    }
  }
  function df(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Yu(a));
  }
  function vf(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Yu(l));
  }
  function pt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Lo(l, t, a, u), (t = t.sibling);
  }
  function Lo(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pt(l, t, a, u), e & 2048 && Fu(9, t);
        break;
      case 1:
        pt(l, t, a, u);
        break;
      case 3:
        pt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Yu(l)));
        break;
      case 12:
        if (e & 2048) {
          pt(l, t, a, u), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              c = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (i) {
            fl(t, t.return, i);
          }
        } else pt(l, t, a, u);
        break;
      case 13:
        pt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? pt(l, t, a, u)
              : Pu(l, t)
            : n._visibility & 2
            ? pt(l, t, a, u)
            : ((n._visibility |= 2),
              cu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && df(c, t);
        break;
      case 24:
        pt(l, t, a, u), e & 2048 && vf(t.alternate, t);
        break;
      default:
        pt(l, t, a, u);
    }
  }
  function cu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        c = t,
        f = a,
        i = u,
        v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          cu(n, c, f, i, e), Fu(8, c);
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          c.memoizedState !== null
            ? g._visibility & 2
              ? cu(n, c, f, i, e)
              : Pu(n, c)
            : ((g._visibility |= 2), cu(n, c, f, i, e)),
            e && v & 2048 && df(c.alternate, c);
          break;
        case 24:
          cu(n, c, f, i, e), e && v & 2048 && vf(c.alternate, c);
          break;
        default:
          cu(n, c, f, i, e);
      }
      t = t.sibling;
    }
  }
  function Pu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            Pu(a, u), e & 2048 && df(u.alternate, u);
            break;
          case 24:
            Pu(a, u), e & 2048 && vf(u.alternate, u);
            break;
          default:
            Pu(a, u);
        }
        t = t.sibling;
      }
  }
  var le = 8192;
  function fu(l) {
    if (l.subtreeFlags & le)
      for (l = l.child; l !== null; ) Ko(l), (l = l.sibling);
  }
  function Ko(l) {
    switch (l.tag) {
      case 26:
        fu(l),
          l.flags & le &&
            l.memoizedState !== null &&
            b1(ht, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        fu(l);
        break;
      case 3:
      case 4:
        var t = ht;
        (ht = pn(l.stateNode.containerInfo)), fu(l), (ht = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = le), (le = 16777216), fu(l), (le = t))
            : fu(l));
        break;
      default:
        fu(l);
    }
  }
  function wo(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function te(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (zl = u), Wo(u, l);
        }
      wo(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Jo(l), (l = l.sibling);
  }
  function Jo(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && It(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), on(l))
          : te(l);
        break;
      default:
        te(l);
    }
  }
  function on(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (zl = u), Wo(u, l);
        }
      wo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          It(8, t, t.return), on(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), on(t));
          break;
        default:
          on(t);
      }
      l = l.sibling;
    }
  }
  function Wo(l, t) {
    for (; zl !== null; ) {
      var a = zl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          It(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Yu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (zl = u);
      else
        l: for (a = l; zl !== null; ) {
          u = zl;
          var e = u.sibling,
            n = u.return;
          if ((Xo(u), u === a)) {
            zl = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (zl = e);
            break l;
          }
          zl = n;
        }
    }
  }
  var qd = {
      getCacheForType: function (l) {
        var t = Hl(Tl),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    jd = typeof WeakMap == "function" ? WeakMap : Map,
    ll = 0,
    sl = null,
    L = null,
    w = 0,
    tl = 0,
    lt = null,
    ta = !1,
    iu = !1,
    yf = !1,
    Xt = 0,
    hl = 0,
    aa = 0,
    xa = 0,
    hf = 0,
    ot = 0,
    su = 0,
    ae = null,
    Vl = null,
    mf = !1,
    gf = 0,
    rn = 1 / 0,
    dn = null,
    ua = null,
    Ml = 0,
    ea = null,
    ou = null,
    ru = 0,
    bf = 0,
    Sf = null,
    $o = null,
    ue = 0,
    Tf = null;
  function tt() {
    if ((ll & 2) !== 0 && w !== 0) return w & -w;
    if (b.T !== null) {
      var l = Ia;
      return l !== 0 ? l : Mf();
    }
    return oi();
  }
  function ko() {
    ot === 0 && (ot = (w & 536870912) === 0 || I ? ci() : 536870912);
    var l = st.current;
    return l !== null && (l.flags |= 32), ot;
  }
  function at(l, t, a) {
    ((l === sl && (tl === 2 || tl === 9)) || l.cancelPendingCommit !== null) &&
      (du(l, 0), na(l, w, ot, !1)),
      Eu(l, a),
      ((ll & 2) === 0 || l !== sl) &&
        (l === sl &&
          ((ll & 2) === 0 && (xa |= a), hl === 4 && na(l, w, ot, !1)),
        At(l));
  }
  function Fo(l, t, a) {
    if ((ll & 6) !== 0) throw Error(y(327));
    var u = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Tu(l, t),
      e = u ? Gd(l, t) : Af(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        iu && !u && na(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !Bd(a))) {
          (e = Af(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              e = ae;
              var i = f.current.memoizedState.isDehydrated;
              if ((i && (du(f, c).flags |= 256), (c = Af(f, c, !1)), c !== 2)) {
                if (yf && !i) {
                  (f.errorRecoveryDisabledLanes |= n), (xa |= n), (e = 4);
                  break l;
                }
                (n = Vl),
                  (Vl = e),
                  n !== null && (Vl === null ? (Vl = n) : Vl.push.apply(Vl, n));
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          du(l, 0), na(l, t, 0, !0);
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              na(u, t, ot, !ta);
              break l;
            case 2:
              Vl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((t & 62914560) === t && ((e = gf + 300 - bt()), 10 < e)) {
            if ((na(u, t, ot, !ta), pe(u, 0, !0) !== 0)) break l;
            u.timeoutHandle = O0(
              Io.bind(null, u, a, Vl, dn, mf, t, ot, xa, su, ta, n, 2, -0, 0),
              e
            );
            break l;
          }
          Io(u, a, Vl, dn, mf, t, ot, xa, su, ta, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    At(l);
  }
  function Io(l, t, a, u, e, n, c, f, i, v, g, T, h, m) {
    if (
      ((l.timeoutHandle = -1),
      (T = t.subtreeFlags),
      (T & 8192 || (T & 16785408) === 16785408) &&
        ((oe = { stylesheets: null, count: 0, unsuspend: g1 }),
        Ko(t),
        (T = S1()),
        T !== null))
    ) {
      (l.cancelPendingCommit = T(
        n0.bind(null, l, t, n, a, u, e, c, f, i, g, 1, h, m)
      )),
        na(l, n, c, !v);
      return;
    }
    n0(l, t, n, a, u, e, c, f, i);
  }
  function Bd(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!kl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function na(l, t, a, u) {
    (t &= ~hf),
      (t &= ~xa),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - $l(e),
        c = 1 << n;
      (u[n] = -1), (e &= ~c);
    }
    a !== 0 && ii(l, a, t);
  }
  function vn() {
    return (ll & 6) === 0 ? (ee(0), !1) : !0;
  }
  function Ef() {
    if (L !== null) {
      if (tl === 0) var l = L.return;
      else (l = L), (xt = _a = null), Yc(l), (eu = null), (Wu = 0), (l = L);
      for (; l !== null; ) xo(l.alternate, l), (l = l.return);
      L = null;
    }
  }
  function du(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), l1(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      Ef(),
      (sl = l),
      (L = a = Dt(l.current, null)),
      (w = t),
      (tl = 0),
      (lt = null),
      (ta = !1),
      (iu = Tu(l, t)),
      (yf = !1),
      (su = ot = hf = xa = aa = hl = 0),
      (Vl = ae = null),
      (mf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - $l(u),
          n = 1 << e;
        (t |= l[e]), (u &= ~n);
      }
    return (Xt = t), qe(), a;
  }
  function Po(l, t) {
    (Z = null),
      (b.H = Pe),
      t === Xu || t === Ve
        ? ((t = hs()), (tl = 3))
        : t === ds
        ? ((t = hs()), (tl = 4))
        : (tl =
            t === go
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (lt = t),
      L === null && ((hl = 1), en(l, nt(t, l.current)));
  }
  function l0() {
    var l = b.H;
    return (b.H = Pe), l === null ? Pe : l;
  }
  function t0() {
    var l = b.A;
    return (b.A = qd), l;
  }
  function pf() {
    (hl = 4),
      ta || ((w & 4194048) !== w && st.current !== null) || (iu = !0),
      ((aa & 134217727) === 0 && (xa & 134217727) === 0) ||
        sl === null ||
        na(sl, w, ot, !1);
  }
  function Af(l, t, a) {
    var u = ll;
    ll |= 2;
    var e = l0(),
      n = t0();
    (sl !== l || w !== t) && ((dn = null), du(l, t)), (t = !1);
    var c = hl;
    l: do
      try {
        if (tl !== 0 && L !== null) {
          var f = L,
            i = lt;
          switch (tl) {
            case 8:
              Ef(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              st.current === null && (t = !0);
              var v = tl;
              if (((tl = 0), (lt = null), vu(l, f, i, v), a && iu)) {
                c = 0;
                break l;
              }
              break;
            default:
              (v = tl), (tl = 0), (lt = null), vu(l, f, i, v);
          }
        }
        Yd(), (c = hl);
        break;
      } catch (g) {
        Po(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (xt = _a = null),
      (ll = u),
      (b.H = e),
      (b.A = n),
      L === null && ((sl = null), (w = 0), qe()),
      c
    );
  }
  function Yd() {
    for (; L !== null; ) a0(L);
  }
  function Gd(l, t) {
    var a = ll;
    ll |= 2;
    var u = l0(),
      e = t0();
    sl !== l || w !== t
      ? ((dn = null), (rn = bt() + 500), du(l, t))
      : (iu = Tu(l, t));
    l: do
      try {
        if (tl !== 0 && L !== null) {
          t = L;
          var n = lt;
          t: switch (tl) {
            case 1:
              (tl = 0), (lt = null), vu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (vs(n)) {
                (tl = 0), (lt = null), u0(t);
                break;
              }
              (t = function () {
                (tl !== 2 && tl !== 9) || sl !== l || (tl = 7), At(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              vs(n)
                ? ((tl = 0), (lt = null), u0(t))
                : ((tl = 0), (lt = null), vu(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (L.tag) {
                case 26:
                  c = L.memoizedState;
                case 5:
                case 27:
                  var f = L;
                  if (!c || G0(c)) {
                    (tl = 0), (lt = null);
                    var i = f.sibling;
                    if (i !== null) L = i;
                    else {
                      var v = f.return;
                      v !== null ? ((L = v), yn(v)) : (L = null);
                    }
                    break t;
                  }
              }
              (tl = 0), (lt = null), vu(l, t, n, 5);
              break;
            case 6:
              (tl = 0), (lt = null), vu(l, t, n, 6);
              break;
            case 8:
              Ef(), (hl = 6);
              break l;
            default:
              throw Error(y(462));
          }
        }
        Xd();
        break;
      } catch (g) {
        Po(l, g);
      }
    while (!0);
    return (
      (xt = _a = null),
      (b.H = u),
      (b.A = e),
      (ll = a),
      L !== null ? 0 : ((sl = null), (w = 0), qe(), hl)
    );
  }
  function Xd() {
    for (; L !== null && !fr(); ) a0(L);
  }
  function a0(l) {
    var t = Ro(l.alternate, l, Xt);
    (l.memoizedProps = l.pendingProps), t === null ? yn(l) : (L = t);
  }
  function u0(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ao(a, t, t.pendingProps, t.type, void 0, w);
        break;
      case 11:
        t = Ao(a, t, t.pendingProps, t.type.render, t.ref, w);
        break;
      case 5:
        Yc(t);
      default:
        xo(a, t), (t = L = us(t, Xt)), (t = Ro(a, t, Xt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? yn(l) : (L = t);
  }
  function vu(l, t, a, u) {
    (xt = _a = null), Yc(t), (eu = null), (Wu = 0);
    var e = t.return;
    try {
      if (Dd(l, e, t, a, w)) {
        (hl = 1), en(l, nt(a, l.current)), (L = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((L = e), n);
      (hl = 1), en(l, nt(a, l.current)), (L = null);
      return;
    }
    t.flags & 32768
      ? (I || u === 1
          ? (l = !0)
          : iu || (w & 536870912) !== 0
          ? (l = !1)
          : ((ta = l = !0),
            (u === 2 || u === 9 || u === 3 || u === 6) &&
              ((u = st.current),
              u !== null && u.tag === 13 && (u.flags |= 16384))),
        e0(t, l))
      : yn(t);
  }
  function yn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        e0(t, ta);
        return;
      }
      l = t.return;
      var a = Ud(t.alternate, t, Xt);
      if (a !== null) {
        L = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        L = t;
        return;
      }
      L = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function e0(l, t) {
    do {
      var a = xd(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (L = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        L = l;
        return;
      }
      L = l = a;
    } while (l !== null);
    (hl = 6), (L = null);
  }
  function n0(l, t, a, u, e, n, c, f, i) {
    l.cancelPendingCommit = null;
    do hn();
    while (Ml !== 0);
    if ((ll & 6) !== 0) throw Error(y(327));
    if (t !== null) {
      if (t === l.current) throw Error(y(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= dc),
        gr(l, a, n, c, f, i),
        l === sl && ((L = sl = null), (w = 0)),
        (ou = t),
        (ea = l),
        (ru = a),
        (bf = n),
        (Sf = e),
        ($o = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            Vd(Se, function () {
              return o0(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = b.T), (b.T = null), (e = _.p), (_.p = 2), (c = ll), (ll |= 4);
        try {
          Nd(l, t, a);
        } finally {
          (ll = c), (_.p = e), (b.T = u);
        }
      }
      (Ml = 1), c0(), f0(), i0();
    }
  }
  function c0() {
    if (Ml === 1) {
      Ml = 0;
      var l = ea,
        t = ou,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = b.T), (b.T = null);
        var u = _.p;
        _.p = 2;
        var e = ll;
        ll |= 4;
        try {
          Zo(t, l);
          var n = jf,
            c = Ji(l.containerInfo),
            f = n.focusedElem,
            i = n.selectionRange;
          if (
            c !== f &&
            f &&
            f.ownerDocument &&
            wi(f.ownerDocument.documentElement, f)
          ) {
            if (i !== null && fc(f)) {
              var v = i.start,
                g = i.end;
              if ((g === void 0 && (g = v), "selectionStart" in f))
                (f.selectionStart = v),
                  (f.selectionEnd = Math.min(g, f.value.length));
              else {
                var T = f.ownerDocument || document,
                  h = (T && T.defaultView) || window;
                if (h.getSelection) {
                  var m = h.getSelection(),
                    Y = f.textContent.length,
                    q = Math.min(i.start, Y),
                    el = i.end === void 0 ? q : Math.min(i.end, Y);
                  !m.extend && q > el && ((c = el), (el = q), (q = c));
                  var r = Ki(f, q),
                    o = Ki(f, el);
                  if (
                    r &&
                    o &&
                    (m.rangeCount !== 1 ||
                      m.anchorNode !== r.node ||
                      m.anchorOffset !== r.offset ||
                      m.focusNode !== o.node ||
                      m.focusOffset !== o.offset)
                  ) {
                    var d = T.createRange();
                    d.setStart(r.node, r.offset),
                      m.removeAllRanges(),
                      q > el
                        ? (m.addRange(d), m.extend(o.node, o.offset))
                        : (d.setEnd(o.node, o.offset), m.addRange(d));
                  }
                }
              }
            }
            for (T = [], m = f; (m = m.parentNode); )
              m.nodeType === 1 &&
                T.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < T.length;
              f++
            ) {
              var S = T[f];
              (S.element.scrollLeft = S.left), (S.element.scrollTop = S.top);
            }
          }
          (Mn = !!qf), (jf = qf = null);
        } finally {
          (ll = e), (_.p = u), (b.T = a);
        }
      }
      (l.current = t), (Ml = 2);
    }
  }
  function f0() {
    if (Ml === 2) {
      Ml = 0;
      var l = ea,
        t = ou,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = b.T), (b.T = null);
        var u = _.p;
        _.p = 2;
        var e = ll;
        ll |= 4;
        try {
          Go(l, t.alternate, t);
        } finally {
          (ll = e), (_.p = u), (b.T = a);
        }
      }
      Ml = 3;
    }
  }
  function i0() {
    if (Ml === 4 || Ml === 3) {
      (Ml = 0), ir();
      var l = ea,
        t = ou,
        a = ru,
        u = $o;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ml = 5)
        : ((Ml = 0), (ou = ea = null), s0(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (ua = null),
        Qn(a),
        (t = t.stateNode),
        Wl && typeof Wl.onCommitFiberRoot == "function")
      )
        try {
          Wl.onCommitFiberRoot(Su, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        (t = b.T), (e = _.p), (_.p = 2), (b.T = null);
        try {
          for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
            var f = u[c];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          (b.T = t), (_.p = e);
        }
      }
      (ru & 3) !== 0 && hn(),
        At(l),
        (e = l.pendingLanes),
        (a & 4194090) !== 0 && (e & 42) !== 0
          ? l === Tf
            ? ue++
            : ((ue = 0), (Tf = l))
          : (ue = 0),
        ee(0);
    }
  }
  function s0(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Yu(t)));
  }
  function hn(l) {
    return c0(), f0(), i0(), o0();
  }
  function o0() {
    if (Ml !== 5) return !1;
    var l = ea,
      t = bf;
    bf = 0;
    var a = Qn(ru),
      u = b.T,
      e = _.p;
    try {
      (_.p = 32 > a ? 32 : a), (b.T = null), (a = Sf), (Sf = null);
      var n = ea,
        c = ru;
      if (((Ml = 0), (ou = ea = null), (ru = 0), (ll & 6) !== 0))
        throw Error(y(331));
      var f = ll;
      if (
        ((ll |= 4),
        Jo(n.current),
        Lo(n, n.current, c, a),
        (ll = f),
        ee(0, !1),
        Wl && typeof Wl.onPostCommitFiberRoot == "function")
      )
        try {
          Wl.onPostCommitFiberRoot(Su, n);
        } catch {}
      return !0;
    } finally {
      (_.p = e), (b.T = u), s0(l, t);
    }
  }
  function r0(l, t, a) {
    (t = nt(a, t)),
      (t = Fc(l.stateNode, t, 2)),
      (l = Wt(l, t, 2)),
      l !== null && (Eu(l, 2), At(l));
  }
  function fl(l, t, a) {
    if (l.tag === 3) r0(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          r0(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ua === null || !ua.has(u)))
          ) {
            (l = nt(a, l)),
              (a = ho(2)),
              (u = Wt(t, a, 2)),
              u !== null && (mo(a, u, t, l), Eu(u, 2), At(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function zf(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new jd();
      var e = new Set();
      u.set(t, e);
    } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
    e.has(a) ||
      ((yf = !0), e.add(a), (l = Qd.bind(null, l, t, a)), t.then(l, l));
  }
  function Qd(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      sl === l &&
        (w & a) === a &&
        (hl === 4 || (hl === 3 && (w & 62914560) === w && 300 > bt() - gf)
          ? (ll & 2) === 0 && du(l, 0)
          : (hf |= a),
        su === w && (su = 0)),
      At(l);
  }
  function d0(l, t) {
    t === 0 && (t = fi()), (l = Wa(l, t)), l !== null && (Eu(l, t), At(l));
  }
  function Cd(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), d0(l, a);
  }
  function Zd(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    u !== null && u.delete(t), d0(l, a);
  }
  function Vd(l, t) {
    return Bn(l, t);
  }
  var mn = null,
    yu = null,
    _f = !1,
    gn = !1,
    Of = !1,
    Na = 0;
  function At(l) {
    l !== yu &&
      l.next === null &&
      (yu === null ? (mn = yu = l) : (yu = yu.next = l)),
      (gn = !0),
      _f || ((_f = !0), Kd());
  }
  function ee(l, t) {
    if (!Of && gn) {
      Of = !0;
      do
        for (var a = !1, u = mn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                f = u.pingedLanes;
              (n = (1 << (31 - $l(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), m0(u, n));
          } else
            (n = w),
              (n = pe(
                u,
                u === sl ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Tu(u, n) || ((a = !0), m0(u, n));
          u = u.next;
        }
      while (a);
      Of = !1;
    }
  }
  function Ld() {
    v0();
  }
  function v0() {
    gn = _f = !1;
    var l = 0;
    Na !== 0 && (Pd() && (l = Na), (Na = 0));
    for (var t = bt(), a = null, u = mn; u !== null; ) {
      var e = u.next,
        n = y0(u, t);
      n === 0
        ? ((u.next = null),
          a === null ? (mn = e) : (a.next = e),
          e === null && (yu = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (gn = !0)),
        (u = e);
    }
    ee(l);
  }
  function y0(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - $l(n),
        f = 1 << c,
        i = e[c];
      i === -1
        ? ((f & a) === 0 || (f & u) !== 0) && (e[c] = mr(f, t))
        : i <= t && (l.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((t = sl),
      (a = w),
      (a = pe(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (tl === 2 || tl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && Yn(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Tu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Yn(u), Qn(a))) {
        case 2:
        case 8:
          a = ei;
          break;
        case 32:
          a = Se;
          break;
        case 268435456:
          a = ni;
          break;
        default:
          a = Se;
      }
      return (
        (u = h0.bind(null, l)),
        (a = Bn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && Yn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function h0(l, t) {
    if (Ml !== 0 && Ml !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var a = l.callbackNode;
    if (hn() && l.callbackNode !== a) return null;
    var u = w;
    return (
      (u = pe(
        l,
        l === sl ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      u === 0
        ? null
        : (Fo(l, u, t),
          y0(l, bt()),
          l.callbackNode != null && l.callbackNode === a
            ? h0.bind(null, l)
            : null)
    );
  }
  function m0(l, t) {
    if (hn()) return null;
    Fo(l, t, !0);
  }
  function Kd() {
    t1(function () {
      (ll & 6) !== 0 ? Bn(ui, Ld) : v0();
    });
  }
  function Mf() {
    return Na === 0 && (Na = ci()), Na;
  }
  function g0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Me("" + l);
  }
  function b0(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function wd(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = g0((e[Xl] || null).action),
        c = u.submitter;
      c &&
        ((t = (t = c[Xl] || null)
          ? g0(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var f = new xe("action", "action", null, u, e);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Na !== 0) {
                  var i = c ? b0(e, c) : new FormData(e);
                  wc(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (i = c ? b0(e, c) : new FormData(e)),
                  wc(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Df = 0; Df < rc.length; Df++) {
    var Rf = rc[Df],
      Jd = Rf.toLowerCase(),
      Wd = Rf[0].toUpperCase() + Rf.slice(1);
    yt(Jd, "on" + Wd);
  }
  yt(ki, "onAnimationEnd"),
    yt(Fi, "onAnimationIteration"),
    yt(Ii, "onAnimationStart"),
    yt("dblclick", "onDoubleClick"),
    yt("focusin", "onFocus"),
    yt("focusout", "onBlur"),
    yt(rd, "onTransitionRun"),
    yt(dd, "onTransitionStart"),
    yt(vd, "onTransitionCancel"),
    yt(Pi, "onTransitionEnd"),
    Ga("onMouseEnter", ["mouseout", "mouseover"]),
    Ga("onMouseLeave", ["mouseout", "mouseover"]),
    Ga("onPointerEnter", ["pointerout", "pointerover"]),
    Ga("onPointerLeave", ["pointerout", "pointerover"]),
    ma(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ma(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ma(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ma(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ma(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ne =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    $d = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ne)
    );
  function S0(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var f = u[c],
              i = f.instance,
              v = f.currentTarget;
            if (((f = f.listener), i !== n && e.isPropagationStopped()))
              break l;
            (n = f), (e.currentTarget = v);
            try {
              n(e);
            } catch (g) {
              un(g);
            }
            (e.currentTarget = null), (n = i);
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((f = u[c]),
              (i = f.instance),
              (v = f.currentTarget),
              (f = f.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            (n = f), (e.currentTarget = v);
            try {
              n(e);
            } catch (g) {
              un(g);
            }
            (e.currentTarget = null), (n = i);
          }
      }
    }
  }
  function K(l, t) {
    var a = t[Cn];
    a === void 0 && (a = t[Cn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (T0(t, l, 2, !1), a.add(u));
  }
  function Uf(l, t, a) {
    var u = 0;
    t && (u |= 4), T0(a, l, u, t);
  }
  var bn = "_reactListening" + Math.random().toString(36).slice(2);
  function xf(l) {
    if (!l[bn]) {
      (l[bn] = !0),
        di.forEach(function (a) {
          a !== "selectionchange" && ($d.has(a) || Uf(a, !1, l), Uf(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[bn] || ((t[bn] = !0), Uf("selectionchange", !1, t));
    }
  }
  function T0(l, t, a, u) {
    switch (L0(t)) {
      case 2:
        var e = p1;
        break;
      case 8:
        e = A1;
        break;
      default:
        e = Kf;
    }
    (a = e.bind(null, t, a, l)),
      (e = void 0),
      !In ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
        ? l.addEventListener(t, a, { passive: e })
        : l.addEventListener(t, a, !1);
  }
  function Nf(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = ja(f)), c === null)) return;
            if (((i = c.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              u = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    Oi(function () {
      var v = n,
        g = kn(a),
        T = [];
      l: {
        var h = ls.get(l);
        if (h !== void 0) {
          var m = xe,
            Y = l;
          switch (l) {
            case "keypress":
              if (Re(a) === 0) break l;
            case "keydown":
            case "keyup":
              m = Vr;
              break;
            case "focusin":
              (Y = "focus"), (m = ac);
              break;
            case "focusout":
              (Y = "blur"), (m = ac);
              break;
            case "beforeblur":
            case "afterblur":
              m = ac;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Ri;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = xr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = wr;
              break;
            case ki:
            case Fi:
            case Ii:
              m = qr;
              break;
            case Pi:
              m = Wr;
              break;
            case "scroll":
            case "scrollend":
              m = Rr;
              break;
            case "wheel":
              m = kr;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Br;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = xi;
              break;
            case "toggle":
            case "beforetoggle":
              m = Ir;
          }
          var q = (t & 4) !== 0,
            el = !q && (l === "scroll" || l === "scrollend"),
            r = q ? (h !== null ? h + "Capture" : null) : h;
          q = [];
          for (var o = v, d; o !== null; ) {
            var S = o;
            if (
              ((d = S.stateNode),
              (S = S.tag),
              (S !== 5 && S !== 26 && S !== 27) ||
                d === null ||
                r === null ||
                ((S = zu(o, r)), S != null && q.push(ce(o, S, d))),
              el)
            )
              break;
            o = o.return;
          }
          0 < q.length &&
            ((h = new m(h, Y, null, a, g)), T.push({ event: h, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((h = l === "mouseover" || l === "pointerover"),
            (m = l === "mouseout" || l === "pointerout"),
            h &&
              a !== $n &&
              (Y = a.relatedTarget || a.fromElement) &&
              (ja(Y) || Y[qa]))
          )
            break l;
          if (
            (m || h) &&
            ((h =
              g.window === g
                ? g
                : (h = g.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            m
              ? ((Y = a.relatedTarget || a.toElement),
                (m = v),
                (Y = Y ? ja(Y) : null),
                Y !== null &&
                  ((el = J(Y)),
                  (q = Y.tag),
                  Y !== el || (q !== 5 && q !== 27 && q !== 6)) &&
                  (Y = null))
              : ((m = null), (Y = v)),
            m !== Y)
          ) {
            if (
              ((q = Ri),
              (S = "onMouseLeave"),
              (r = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((q = xi),
                (S = "onPointerLeave"),
                (r = "onPointerEnter"),
                (o = "pointer")),
              (el = m == null ? h : Au(m)),
              (d = Y == null ? h : Au(Y)),
              (h = new q(S, o + "leave", m, a, g)),
              (h.target = el),
              (h.relatedTarget = d),
              (S = null),
              ja(g) === v &&
                ((q = new q(r, o + "enter", Y, a, g)),
                (q.target = d),
                (q.relatedTarget = el),
                (S = q)),
              (el = S),
              m && Y)
            )
              t: {
                for (q = m, r = Y, o = 0, d = q; d; d = hu(d)) o++;
                for (d = 0, S = r; S; S = hu(S)) d++;
                for (; 0 < o - d; ) (q = hu(q)), o--;
                for (; 0 < d - o; ) (r = hu(r)), d--;
                for (; o--; ) {
                  if (q === r || (r !== null && q === r.alternate)) break t;
                  (q = hu(q)), (r = hu(r));
                }
                q = null;
              }
            else q = null;
            m !== null && E0(T, h, m, q, !1),
              Y !== null && el !== null && E0(T, el, Y, q, !0);
          }
        }
        l: {
          if (
            ((h = v ? Au(v) : window),
            (m = h.nodeName && h.nodeName.toLowerCase()),
            m === "select" || (m === "input" && h.type === "file"))
          )
            var M = Xi;
          else if (Yi(h))
            if (Qi) M = id;
            else {
              M = cd;
              var V = nd;
            }
          else
            (m = h.nodeName),
              !m ||
              m.toLowerCase() !== "input" ||
              (h.type !== "checkbox" && h.type !== "radio")
                ? v && Wn(v.elementType) && (M = Xi)
                : (M = fd);
          if (M && (M = M(l, v))) {
            Gi(T, M, a, g);
            break l;
          }
          V && V(l, h, v),
            l === "focusout" &&
              v &&
              h.type === "number" &&
              v.memoizedProps.value != null &&
              Jn(h, "number", h.value);
        }
        switch (((V = v ? Au(v) : window), l)) {
          case "focusin":
            (Yi(V) || V.contentEditable === "true") &&
              ((Ka = V), (ic = v), (Nu = null));
            break;
          case "focusout":
            Nu = ic = Ka = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (sc = !1), Wi(T, a, g);
            break;
          case "selectionchange":
            if (od) break;
          case "keydown":
          case "keyup":
            Wi(T, a, g);
        }
        var x;
        if (ec)
          l: {
            switch (l) {
              case "compositionstart":
                var j = "onCompositionStart";
                break l;
              case "compositionend":
                j = "onCompositionEnd";
                break l;
              case "compositionupdate":
                j = "onCompositionUpdate";
                break l;
            }
            j = void 0;
          }
        else
          La
            ? ji(l, a) && (j = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (j = "onCompositionStart");
        j &&
          (Ni &&
            a.locale !== "ko" &&
            (La || j !== "onCompositionStart"
              ? j === "onCompositionEnd" && La && (x = Mi())
              : ((Lt = g),
                (Pn = "value" in Lt ? Lt.value : Lt.textContent),
                (La = !0))),
          (V = Sn(v, j)),
          0 < V.length &&
            ((j = new Ui(j, l, null, a, g)),
            T.push({ event: j, listeners: V }),
            x ? (j.data = x) : ((x = Bi(a)), x !== null && (j.data = x)))),
          (x = ld ? td(l, a) : ad(l, a)) &&
            ((j = Sn(v, "onBeforeInput")),
            0 < j.length &&
              ((V = new Ui("onBeforeInput", "beforeinput", null, a, g)),
              T.push({ event: V, listeners: j }),
              (V.data = x))),
          wd(T, l, v, a, g);
      }
      S0(T, t);
    });
  }
  function ce(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Sn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = zu(l, a)),
          e != null && u.unshift(ce(l, e, n)),
          (e = zu(l, t)),
          e != null && u.push(ce(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function hu(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function E0(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u; ) {
      var f = a,
        i = f.alternate,
        v = f.stateNode;
      if (((f = f.tag), i !== null && i === u)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        v === null ||
        ((i = v),
        e
          ? ((v = zu(a, n)), v != null && c.unshift(ce(a, v, i)))
          : e || ((v = zu(a, n)), v != null && c.push(ce(a, v, i)))),
        (a = a.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var kd = /\r\n?/g,
    Fd = /\u0000|\uFFFD/g;
  function p0(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        kd,
        `
`
      )
      .replace(Fd, "");
  }
  function A0(l, t) {
    return (t = p0(t)), p0(l) === t;
  }
  function Tn() {}
  function ul(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || Ca(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            Ca(l, "" + u);
        break;
      case "className":
        ze(l, "class", u);
        break;
      case "tabIndex":
        ze(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ze(l, a, u);
        break;
      case "style":
        zi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          ze(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (u = Me("" + u)), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && ul(l, t, "name", e.name, e, null),
                ul(l, t, "formEncType", e.formEncType, e, null),
                ul(l, t, "formMethod", e.formMethod, e, null),
                ul(l, t, "formTarget", e.formTarget, e, null))
              : (ul(l, t, "encType", e.encType, e, null),
                ul(l, t, "method", e.method, e, null),
                ul(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (u = Me("" + u)), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Tn);
        break;
      case "onScroll":
        u != null && K("scroll", l);
        break;
      case "onScrollEnd":
        u != null && K("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(y(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(y(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = Me("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
            u != null &&
            typeof u != "function" &&
            typeof u != "symbol"
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        K("beforetoggle", l), K("toggle", l), Ae(l, "popover", u);
        break;
      case "xlinkActuate":
        Ot(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Ot(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Ot(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Ot(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Ot(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Ot(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Ot(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Ot(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Ot(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Ae(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Mr.get(a) || a), Ae(l, a, u));
    }
  }
  function Hf(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        zi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(y(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(y(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? Ca(l, u)
          : (typeof u == "number" || typeof u == "bigint") && Ca(l, "" + u);
        break;
      case "onScroll":
        u != null && K("scroll", l);
        break;
      case "onScrollEnd":
        u != null && K("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Tn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!vi.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Xl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e);
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
              ? l.setAttribute(a, "")
              : Ae(l, a, u);
          }
    }
  }
  function Dl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        K("error", l), K("load", l);
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(y(137, t));
                default:
                  ul(l, t, n, c, a, null);
              }
          }
        e && ul(l, t, "srcSet", a.srcSet, a, null),
          u && ul(l, t, "src", a.src, a, null);
        return;
      case "input":
        K("invalid", l);
        var f = (n = c = e = null),
          i = null,
          v = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  c = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  v = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  f = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(y(137, t));
                  break;
                default:
                  ul(l, t, u, g, a, null);
              }
          }
        Ti(l, n, f, i, v, c, e, !1), _e(l);
        return;
      case "select":
        K("invalid", l), (u = c = n = null);
        for (e in a)
          if (a.hasOwnProperty(e) && ((f = a[e]), f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                u = f;
              default:
                ul(l, t, e, f, a, null);
            }
        (t = n),
          (a = c),
          (l.multiple = !!u),
          t != null ? Qa(l, !!u, t, !1) : a != null && Qa(l, !!u, a, !0);
        return;
      case "textarea":
        K("invalid", l), (n = e = u = null);
        for (c in a)
          if (a.hasOwnProperty(c) && ((f = a[c]), f != null))
            switch (c) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(y(91));
                break;
              default:
                ul(l, t, c, f, a, null);
            }
        pi(l, u, e, n), _e(l);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && ((u = a[i]), u != null))
            switch (i) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                ul(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++) K(ne[u], l);
        break;
      case "image":
        K("error", l), K("load", l);
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", l), K("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && ((u = a[v]), u != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(137, t));
              default:
                ul(l, t, v, u, a, null);
            }
        return;
      default:
        if (Wn(t)) {
          for (g in a)
            a.hasOwnProperty(g) &&
              ((u = a[g]), u !== void 0 && Hf(l, t, g, u, a, void 0));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && ((u = a[f]), u != null && ul(l, t, f, u, a, null));
  }
  function Id(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          c = null,
          f = null,
          i = null,
          v = null,
          g = null;
        for (m in a) {
          var T = a[m];
          if (a.hasOwnProperty(m) && T != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                u.hasOwnProperty(m) || ul(l, t, m, null, u, T);
            }
        }
        for (var h in u) {
          var m = u[h];
          if (((T = a[h]), u.hasOwnProperty(h) && (m != null || T != null)))
            switch (h) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                v = m;
                break;
              case "defaultChecked":
                g = m;
                break;
              case "value":
                c = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(y(137, t));
                break;
              default:
                m !== T && ul(l, t, h, m, u, T);
            }
        }
        wn(l, c, f, i, v, g, n, e);
        return;
      case "select":
        m = c = f = h = null;
        for (n in a)
          if (((i = a[n]), a.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                u.hasOwnProperty(n) || ul(l, t, n, null, u, i);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (i = a[e]),
            u.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== i && ul(l, t, e, n, u, i);
            }
        (t = f),
          (a = c),
          (u = m),
          h != null
            ? Qa(l, !!a, h, !1)
            : !!u != !!a &&
              (t != null ? Qa(l, !!a, t, !0) : Qa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        m = h = null;
        for (f in a)
          if (
            ((e = a[f]),
            a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, f, null, u, e);
            }
        for (c in u)
          if (
            ((e = u[c]),
            (n = a[c]),
            u.hasOwnProperty(c) && (e != null || n != null))
          )
            switch (c) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(y(91));
                break;
              default:
                e !== n && ul(l, t, c, e, u, n);
            }
        Ei(l, h, m);
        return;
      case "option":
        for (var Y in a)
          if (
            ((h = a[Y]),
            a.hasOwnProperty(Y) && h != null && !u.hasOwnProperty(Y))
          )
            switch (Y) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ul(l, t, Y, null, u, h);
            }
        for (i in u)
          if (
            ((h = u[i]),
            (m = a[i]),
            u.hasOwnProperty(i) && h !== m && (h != null || m != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                ul(l, t, i, h, u, m);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in a)
          (h = a[q]),
            a.hasOwnProperty(q) &&
              h != null &&
              !u.hasOwnProperty(q) &&
              ul(l, t, q, null, u, h);
        for (v in u)
          if (
            ((h = u[v]),
            (m = a[v]),
            u.hasOwnProperty(v) && h !== m && (h != null || m != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(y(137, t));
                break;
              default:
                ul(l, t, v, h, u, m);
            }
        return;
      default:
        if (Wn(t)) {
          for (var el in a)
            (h = a[el]),
              a.hasOwnProperty(el) &&
                h !== void 0 &&
                !u.hasOwnProperty(el) &&
                Hf(l, t, el, void 0, u, h);
          for (g in u)
            (h = u[g]),
              (m = a[g]),
              !u.hasOwnProperty(g) ||
                h === m ||
                (h === void 0 && m === void 0) ||
                Hf(l, t, g, h, u, m);
          return;
        }
    }
    for (var r in a)
      (h = a[r]),
        a.hasOwnProperty(r) &&
          h != null &&
          !u.hasOwnProperty(r) &&
          ul(l, t, r, null, u, h);
    for (T in u)
      (h = u[T]),
        (m = a[T]),
        !u.hasOwnProperty(T) ||
          h === m ||
          (h == null && m == null) ||
          ul(l, t, T, h, u, m);
  }
  var qf = null,
    jf = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function z0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _0(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Bf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Yf = null;
  function Pd() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Yf
        ? !1
        : ((Yf = l), !0)
      : ((Yf = null), !1);
  }
  var O0 = typeof setTimeout == "function" ? setTimeout : void 0,
    l1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    M0 = typeof Promise == "function" ? Promise : void 0,
    t1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof M0 < "u"
        ? function (l) {
            return M0.resolve(null).then(l).catch(a1);
          }
        : O0;
  function a1(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ca(l) {
    return l === "head";
  }
  function D0(l, t) {
    var a = t,
      u = 0,
      e = 0;
    do {
      var n = a.nextSibling;
      if ((l.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$")) {
          if (0 < u && 8 > u) {
            a = u;
            var c = l.ownerDocument;
            if ((a & 1 && fe(c.documentElement), a & 2 && fe(c.body), a & 4))
              for (a = c.head, fe(a), c = a.firstChild; c; ) {
                var f = c.nextSibling,
                  i = c.nodeName;
                c[pu] ||
                  i === "SCRIPT" ||
                  i === "STYLE" ||
                  (i === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(c),
                  (c = f);
              }
          }
          if (e === 0) {
            l.removeChild(n), he(t);
            return;
          }
          e--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? e++
            : (u = a.charCodeAt(0) - 48);
      else u = 0;
      a = n;
    } while (a);
    he(t);
  }
  function Gf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Gf(a), Zn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function u1(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[pu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = mt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function e1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = mt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Xf(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function n1(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete") t();
    else {
      var u = function () {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u);
    }
  }
  function mt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Qf = null;
  function R0(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function U0(l, t, a) {
    switch (((t = En(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(y(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(y(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(y(454));
        return l;
      default:
        throw Error(y(451));
    }
  }
  function fe(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Zn(l);
  }
  var rt = new Map(),
    x0 = new Set();
  function pn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Qt = _.d;
  _.d = { f: c1, r: f1, D: i1, C: s1, L: o1, m: r1, X: v1, S: d1, M: y1 };
  function c1() {
    var l = Qt.f(),
      t = vn();
    return l || t;
  }
  function f1(l) {
    var t = Ba(l);
    t !== null && t.tag === 5 && t.type === "form" ? ks(t) : Qt.r(l);
  }
  var mu = typeof document > "u" ? null : document;
  function N0(l, t, a) {
    var u = mu;
    if (u && typeof t == "string" && t) {
      var e = et(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        x0.has(e) ||
          (x0.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Dl(t, "link", l),
            pl(t),
            u.head.appendChild(t)));
    }
  }
  function i1(l) {
    Qt.D(l), N0("dns-prefetch", l, null);
  }
  function s1(l, t) {
    Qt.C(l, t), N0("preconnect", l, t);
  }
  function o1(l, t, a) {
    Qt.L(l, t, a);
    var u = mu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + et(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + et(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + et(a.imageSizes) + '"]'))
        : (e += '[href="' + et(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = gu(l);
          break;
        case "script":
          n = bu(l);
      }
      rt.has(n) ||
        ((l = N(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        rt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(ie(n))) ||
          (t === "script" && u.querySelector(se(n))) ||
          ((t = u.createElement("link")),
          Dl(t, "link", l),
          pl(t),
          u.head.appendChild(t)));
    }
  }
  function r1(l, t) {
    Qt.m(l, t);
    var a = mu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + et(u) + '"][href="' + et(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = bu(l);
      }
      if (
        !rt.has(n) &&
        ((l = N({ rel: "modulepreload", href: l }, t)),
        rt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(se(n))) return;
        }
        (u = a.createElement("link")),
          Dl(u, "link", l),
          pl(u),
          a.head.appendChild(u);
      }
    }
  }
  function d1(l, t, a) {
    Qt.S(l, t, a);
    var u = mu;
    if (u && l) {
      var e = Ya(u).hoistableStyles,
        n = gu(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = u.querySelector(ie(n)))) f.loading = 5;
        else {
          (l = N({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = rt.get(n)) && Cf(l, a);
          var i = (c = u.createElement("link"));
          pl(i),
            Dl(i, "link", l),
            (i._p = new Promise(function (v, g) {
              (i.onload = v), (i.onerror = g);
            })),
            i.addEventListener("load", function () {
              f.loading |= 1;
            }),
            i.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            An(c, t, u);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: f }),
          e.set(n, c);
      }
    }
  }
  function v1(l, t) {
    Qt.X(l, t);
    var a = mu;
    if (a && l) {
      var u = Ya(a).hoistableScripts,
        e = bu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(se(e))),
        n ||
          ((l = N({ src: l, async: !0 }, t)),
          (t = rt.get(e)) && Zf(l, t),
          (n = a.createElement("script")),
          pl(n),
          Dl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function y1(l, t) {
    Qt.M(l, t);
    var a = mu;
    if (a && l) {
      var u = Ya(a).hoistableScripts,
        e = bu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(se(e))),
        n ||
          ((l = N({ src: l, async: !0, type: "module" }, t)),
          (t = rt.get(e)) && Zf(l, t),
          (n = a.createElement("script")),
          pl(n),
          Dl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function H0(l, t, a, u) {
    var e = (e = X.current) ? pn(e) : null;
    if (!e) throw Error(y(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = gu(a.href)),
            (a = Ya(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = gu(a.href);
          var n = Ya(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(ie(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              rt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                rt.set(l, a),
                n || h1(e, l, a, c.state))),
            t && u === null)
          )
            throw Error(y(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(y(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = bu(a)),
              (a = Ya(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(y(444, l));
    }
  }
  function gu(l) {
    return 'href="' + et(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function q0(l) {
    return N({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function h1(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Dl(t, "link", a),
        pl(t),
        l.head.appendChild(t));
  }
  function bu(l) {
    return '[src="' + et(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function j0(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + et(a.href) + '"]');
          if (u) return (t.instance = u), pl(u), u;
          var e = N({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            pl(u),
            Dl(u, "style", e),
            An(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = gu(a.href);
          var n = l.querySelector(ie(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), pl(n), n;
          (u = q0(a)),
            (e = rt.get(e)) && Cf(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            pl(n);
          var c = n;
          return (
            (c._p = new Promise(function (f, i) {
              (c.onload = f), (c.onerror = i);
            })),
            Dl(n, "link", u),
            (t.state.loading |= 4),
            An(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = bu(a.src)),
            (e = l.querySelector(se(n)))
              ? ((t.instance = e), pl(e), e)
              : ((u = a),
                (e = rt.get(n)) && ((u = N({}, a)), Zf(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                pl(e),
                Dl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(y(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), An(u, a.precedence, l));
    return t.instance;
  }
  function An(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        c = 0;
      c < u.length;
      c++
    ) {
      var f = u[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Cf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Zf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var zn = null;
  function B0(l, t, a) {
    if (zn === null) {
      var u = new Map(),
        e = (zn = new Map());
      e.set(a, u);
    } else (e = zn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[pu] ||
          n[Nl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = u.get(c);
        f ? f.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function Y0(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function m1(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function G0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var oe = null;
  function g1() {}
  function b1(l, t, a) {
    if (oe === null) throw Error(y(475));
    var u = oe;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var e = gu(a.href),
          n = l.querySelector(ie(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (u.count++, (u = _n.bind(u)), l.then(u, u)),
            (t.state.loading |= 4),
            (t.instance = n),
            pl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = q0(a)),
          (e = rt.get(e)) && Cf(a, e),
          (n = n.createElement("link")),
          pl(n);
        var c = n;
        (c._p = new Promise(function (f, i) {
          (c.onload = f), (c.onerror = i);
        })),
          Dl(n, "link", a),
          (t.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (u.count++,
          (t = _n.bind(u)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function S1() {
    if (oe === null) throw Error(y(475));
    var l = oe;
    return (
      l.stylesheets && l.count === 0 && Vf(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Vf(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function _n() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Vf(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var On = null;
  function Vf(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (On = new Map()),
        t.forEach(T1, l),
        (On = null),
        _n.call(l));
  }
  function T1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = On.get(l);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), On.set(l, a);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (u = c));
        }
        u && a.set(null, u);
      }
      (e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = a.get(c) || u),
        n === u && a.set(null, e),
        a.set(c, e),
        this.count++,
        (u = _n.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var re = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function E1(l, t, a, u, e, n, c, f) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Gn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gn(0)),
      (this.hiddenUpdates = Gn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function X0(l, t, a, u, e, n, c, f, i, v, g, T) {
    return (
      (l = new E1(l, t, a, c, f, i, v, T)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = Fl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Ac()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      Mc(n),
      l
    );
  }
  function Q0(l) {
    return l ? ((l = $a), l) : $a;
  }
  function C0(l, t, a, u, e, n) {
    (e = Q0(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = Jt(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = Wt(l, u, t)),
      a !== null && (at(a, l, t), Cu(a, l, t));
  }
  function Z0(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Lf(l, t) {
    Z0(l, t), (l = l.alternate) && Z0(l, t);
  }
  function V0(l) {
    if (l.tag === 13) {
      var t = Wa(l, 67108864);
      t !== null && at(t, l, 67108864), Lf(l, 67108864);
    }
  }
  var Mn = !0;
  function p1(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      (_.p = 2), Kf(l, t, a, u);
    } finally {
      (_.p = n), (b.T = e);
    }
  }
  function A1(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      (_.p = 8), Kf(l, t, a, u);
    } finally {
      (_.p = n), (b.T = e);
    }
  }
  function Kf(l, t, a, u) {
    if (Mn) {
      var e = wf(u);
      if (e === null) Nf(l, t, u, Dn, a), K0(l, u);
      else if (_1(e, l, t, a, u)) u.stopPropagation();
      else if ((K0(l, u), t & 4 && -1 < z1.indexOf(l))) {
        for (; e !== null; ) {
          var n = Ba(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = ha(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var i = 1 << (31 - $l(c));
                      (f.entanglements[1] |= i), (c &= ~i);
                    }
                    At(n), (ll & 6) === 0 && ((rn = bt() + 500), ee(0));
                  }
                }
                break;
              case 13:
                (f = Wa(n, 2)), f !== null && at(f, n, 2), vn(), Lf(n, 2);
            }
          if (((n = wf(u)), n === null && Nf(l, t, u, Dn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Nf(l, t, u, null, a);
    }
  }
  function wf(l) {
    return (l = kn(l)), Jf(l);
  }
  var Dn = null;
  function Jf(l) {
    if (((Dn = null), (l = ja(l)), l !== null)) {
      var t = J(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = dl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Dn = l), null;
  }
  function L0(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (sr()) {
          case ui:
            return 2;
          case ei:
            return 8;
          case Se:
          case or:
            return 32;
          case ni:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wf = !1,
    fa = null,
    ia = null,
    sa = null,
    de = new Map(),
    ve = new Map(),
    oa = [],
    z1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function K0(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        fa = null;
        break;
      case "dragenter":
      case "dragleave":
        ia = null;
        break;
      case "mouseover":
      case "mouseout":
        sa = null;
        break;
      case "pointerover":
      case "pointerout":
        de.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ve.delete(t.pointerId);
    }
  }
  function ye(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Ba(t)), t !== null && V0(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function _1(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return (fa = ye(fa, l, t, a, u, e)), !0;
      case "dragenter":
        return (ia = ye(ia, l, t, a, u, e)), !0;
      case "mouseover":
        return (sa = ye(sa, l, t, a, u, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return de.set(n, ye(de.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), ve.set(n, ye(ve.get(n) || null, l, t, a, u, e)), !0
        );
    }
    return !1;
  }
  function w0(l) {
    var t = ja(l.target);
    if (t !== null) {
      var a = J(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = dl(a)), t !== null)) {
            (l.blockedOn = t),
              br(l.priority, function () {
                if (a.tag === 13) {
                  var u = tt();
                  u = Xn(u);
                  var e = Wa(a, u);
                  e !== null && at(e, a, u), Lf(a, u);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = wf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ($n = u), a.target.dispatchEvent(u), ($n = null);
      } else return (t = Ba(a)), t !== null && V0(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function J0(l, t, a) {
    Rn(l) && a.delete(t);
  }
  function O1() {
    (Wf = !1),
      fa !== null && Rn(fa) && (fa = null),
      ia !== null && Rn(ia) && (ia = null),
      sa !== null && Rn(sa) && (sa = null),
      de.forEach(J0),
      ve.forEach(J0);
  }
  function Un(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      Wf ||
        ((Wf = !0),
        A.unstable_scheduleCallback(A.unstable_NormalPriority, O1)));
  }
  var xn = null;
  function W0(l) {
    xn !== l &&
      ((xn = l),
      A.unstable_scheduleCallback(A.unstable_NormalPriority, function () {
        xn === l && (xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (Jf(u || a) === null) continue;
            break;
          }
          var n = Ba(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            wc(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function he(l) {
    function t(i) {
      return Un(i, l);
    }
    fa !== null && Un(fa, l),
      ia !== null && Un(ia, l),
      sa !== null && Un(sa, l),
      de.forEach(t),
      ve.forEach(t);
    for (var a = 0; a < oa.length; a++) {
      var u = oa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < oa.length && ((a = oa[0]), a.blockedOn === null); )
      w0(a), a.blockedOn === null && oa.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          c = e[Xl] || null;
        if (typeof n == "function") c || W0(a);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Xl] || null))) f = c.formAction;
            else if (Jf(e) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? (a[u + 1] = f) : (a.splice(u, 3), (u -= 3)),
            W0(a);
        }
      }
  }
  function $f(l) {
    this._internalRoot = l;
  }
  (Nn.prototype.render = $f.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(y(409));
      var a = t.current,
        u = tt();
      C0(a, u, l, t, null, null);
    }),
    (Nn.prototype.unmount = $f.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          C0(l.current, 2, null, l, null, null), vn(), (t[qa] = null);
        }
      });
  function Nn(l) {
    this._internalRoot = l;
  }
  Nn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = oi();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < oa.length && t !== 0 && t < oa[a].priority; a++);
      oa.splice(a, 0, l), a === 0 && w0(l);
    }
  };
  var $0 = U.version;
  if ($0 !== "19.1.0") throw Error(y(527, $0, "19.1.0"));
  _.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(y(188))
        : ((l = Object.keys(l).join(",")), Error(y(268, l)));
    return (
      (l = R(t)),
      (l = l !== null ? E(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var M1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hn.isDisabled && Hn.supportsFiber)
      try {
        (Su = Hn.inject(M1)), (Wl = Hn);
      } catch {}
  }
  return (
    (ge.createRoot = function (l, t) {
      if (!Q(l)) throw Error(y(299));
      var a = !1,
        u = "",
        e = oo,
        n = ro,
        c = vo,
        f = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (f = t.unstable_transitionCallbacks)),
        (t = X0(l, 1, !1, null, null, a, u, e, n, c, f, null)),
        (l[qa] = t.current),
        xf(l),
        new $f(t)
      );
    }),
    (ge.hydrateRoot = function (l, t, a) {
      if (!Q(l)) throw Error(y(299));
      var u = !1,
        e = "",
        n = oo,
        c = ro,
        f = vo,
        i = null,
        v = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (f = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (i = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (v = a.formState)),
        (t = X0(l, 1, !0, t, a ?? null, u, e, n, c, f, i, v)),
        (t.context = Q0(null)),
        (a = t.current),
        (u = tt()),
        (u = Xn(u)),
        (e = Jt(u)),
        (e.callback = null),
        Wt(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Eu(t, a),
        At(t),
        (l[qa] = t.current),
        xf(l),
        new Nn(t)
      );
    }),
    (ge.version = "19.1.0"),
    ge
  );
}
var nr;
function Y1() {
  if (nr) return If.exports;
  nr = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (U) {
        console.error(U);
      }
  }
  return A(), (If.exports = B1()), If.exports;
}
var G1 = Y1();
function X1({ title: A, titleId: U, ...G }, y) {
  return W.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: y,
        "aria-labelledby": U,
      },
      G
    ),
    A ? W.createElement("title", { id: U }, A) : null,
    W.createElement("path", {
      fillRule: "evenodd",
      d: "M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z",
      clipRule: "evenodd",
    })
  );
}
const Q1 = W.forwardRef(X1);
function C1({ title: A, titleId: U, ...G }, y) {
  return W.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: y,
        "aria-labelledby": U,
      },
      G
    ),
    A ? W.createElement("title", { id: U }, A) : null,
    W.createElement("path", {
      d: "M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z",
    })
  );
}
const Z1 = W.forwardRef(C1);
function V1({ title: A, titleId: U, ...G }, y) {
  return W.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: y,
        "aria-labelledby": U,
      },
      G
    ),
    A ? W.createElement("title", { id: U }, A) : null,
    W.createElement("path", {
      d: "M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z",
    })
  );
}
const cr = W.forwardRef(V1);
function L1({ title: A, titleId: U, ...G }, y) {
  return W.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: y,
        "aria-labelledby": U,
      },
      G
    ),
    A ? W.createElement("title", { id: U }, A) : null,
    W.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
    })
  );
}
const K1 = W.forwardRef(L1);
function w1({ title: A, titleId: U, ...G }, y) {
  return W.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: y,
        "aria-labelledby": U,
      },
      G
    ),
    A ? W.createElement("title", { id: U }, A) : null,
    W.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    })
  );
}
const J1 = W.forwardRef(w1);
function W1({ title: A, titleId: U, ...G }, y) {
  return W.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: y,
        "aria-labelledby": U,
      },
      G
    ),
    A ? W.createElement("title", { id: U }, A) : null,
    W.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5",
    })
  );
}
const $1 = W.forwardRef(W1),
  k1 = () =>
    D.jsx("div", {
      class: "chat-bubble",
      children: D.jsxs("div", {
        class: "typing",
        children: [
          D.jsx("div", { class: "dot" }),
          D.jsx("div", { class: "dot" }),
          D.jsx("div", { class: "dot" }),
        ],
      }),
    }),
  F1 = {
    welcome: {
      message:
        "👋 Hi there! I'm your helpful assistant. How can I help you today?",
      options: [
        { label: "Tell me about your features", nextId: "features" },
        { label: "I need technical support", nextId: "support" },
        { label: "Pricing information", nextId: "pricing" },
      ],
    },
    features: {
      message: "We offer several powerful features:",
      options: [
        { label: "AI-powered suggestions", nextId: "ai_features" },
        { label: "Team collaboration", nextId: "collaboration" },
        { label: "Go back", nextId: "welcome" },
      ],
    },
    ai_features: {
      message:
        "Our AI features include predictive analytics, smart content recommendations, and automated workflows that help you work more efficiently.",
      options: [
        { label: "Tell me more", nextId: "ai_details" },
        { label: "Go back to features", nextId: "features" },
      ],
    },
    ai_details: {
      message:
        "Our advanced AI is trained on industry-specific data to provide contextual recommendations tailored to your business needs. It learns from your team's actions to become more accurate over time.",
      options: [
        { label: "Sounds great! What about pricing?", nextId: "pricing" },
        { label: "Return to main menu", nextId: "welcome" },
      ],
    },
    collaboration: {
      message:
        "Our collaboration tools let your team work together seamlessly with real-time editing, commenting, and task management all in one place.",
      options: [
        { label: "How does it compare to competitors?", nextId: "comparison" },
        { label: "Return to features", nextId: "features" },
      ],
    },
    comparison: {
      message:
        "Unlike our competitors, we offer unlimited team members on all plans, better security features, and our AI assistant is included at no extra cost.",
      options: [
        { label: "Tell me about pricing", nextId: "pricing" },
        { label: "Return to main menu", nextId: "welcome" },
      ],
    },
    support: {
      message:
        "I'd be happy to help with technical support. What issue are you experiencing?",
      options: [
        { label: "Login issues", nextId: "login_help" },
        { label: "Performance problems", nextId: "performance" },
        { label: "Integration questions", nextId: "integration" },
      ],
    },
    login_help: {
      message:
        "For login issues, try clearing your browser cache and cookies. If the problem persists, check if your account has been activated or reset your password through the login page.",
      options: [
        { label: "Still having problems", nextId: "contact_support" },
        { label: "Return to support options", nextId: "support" },
      ],
    },
    performance: {
      message:
        "Performance issues can often be resolved by updating your browser, checking your internet connection, or reducing the number of open applications.",
      options: [
        { label: "Need more help", nextId: "contact_support" },
        { label: "Return to support options", nextId: "support" },
      ],
    },
    integration: {
      message:
        "Our platform integrates with over 100 popular tools including Slack, Google Workspace, and Microsoft 365. What specific integration are you interested in?",
      options: [
        { label: "CRM integrations", nextId: "crm_integration" },
        { label: "Return to support options", nextId: "support" },
      ],
    },
    crm_integration: {
      message:
        "We integrate with major CRMs like Salesforce, HubSpot, and Zoho. For custom CRM integrations, our API documentation provides everything you need.",
      options: [
        { label: "Return to main menu", nextId: "welcome" },
        { label: "Contact sales for help", nextId: "contact_sales" },
      ],
    },
    contact_support: {
      message:
        "I'll connect you with our support team. Please write your question below and a support agent will get back to you within 24 hours.",
      options: [{ label: "Return to main menu", nextId: "welcome" }],
    },
    contact_sales: {
      message:
        "Our sales team is ready to help with your specific needs. Please leave your contact information below and someone will reach out shortly.",
      options: [{ label: "Return to main menu", nextId: "welcome" }],
    },
    pricing: {
      message:
        "We offer three plans: Starter ($10/month), Professional ($25/month), and Enterprise (custom pricing). All plans include our core features with different usage limits.",
      options: [
        { label: "Tell me about the Starter plan", nextId: "starter_plan" },
        { label: "Tell me about the Professional plan", nextId: "pro_plan" },
        {
          label: "Tell me about the Enterprise plan",
          nextId: "enterprise_plan",
        },
      ],
    },
    starter_plan: {
      message:
        "The Starter plan at $10/month includes basic features for individuals and small teams: 5GB storage, 10 projects, and basic AI assistance.",
      options: [
        { label: "What about Professional?", nextId: "pro_plan" },
        { label: "Return to pricing", nextId: "pricing" },
        { label: "Return to main menu", nextId: "welcome" },
      ],
    },
    pro_plan: {
      message:
        "The Professional plan at $25/month includes 50GB storage, unlimited projects, priority support, and advanced AI features for growing teams.",
      options: [
        { label: "What about Enterprise?", nextId: "enterprise_plan" },
        { label: "Return to pricing", nextId: "pricing" },
        { label: "Return to main menu", nextId: "welcome" },
      ],
    },
    enterprise_plan: {
      message:
        "The Enterprise plan offers unlimited storage, dedicated support, custom integrations, advanced security, and organization-wide controls. Contact us for custom pricing.",
      options: [
        { label: "Contact sales", nextId: "contact_sales" },
        { label: "Return to pricing", nextId: "pricing" },
        { label: "Return to main menu", nextId: "welcome" },
      ],
    },
  },
  I1 = ({ chatHistory: A, setChatHistory: U }) => {
    const [G, y] = W.useState(!1),
      Q = W.useRef(null);
    W.useEffect(() => {
      var P;
      (P = Q.current) == null || P.scrollIntoView({ behavior: "smooth" });
    }, []);
    const J = (P) => {
      U((R) => [...R, { type: "user", message: P.label }]),
        y(!0),
        setTimeout(() => {
          U((R) => [...R, { type: "bot", stepId: P.nextId }]), y(!1);
        }, 700);
    };
    W.useEffect(() => {
      var P;
      (P = Q.current) == null || P.scrollIntoView({ behavior: "smooth" });
    }, []);
    const dl = (P, R) => {
      if (P.type === "bot") {
        const E = F1[P.stepId];
        return D.jsxs(
          "div",
          {
            className: "flex gap-x-2 mt-4",
            children: [
              D.jsx("div", {
                className: "w-7",
                children: D.jsx("img", {
                  src: "/images/logo.svg",
                  className: " bg-primary rounded-full p-1",
                }),
              }),
              D.jsxs("div", {
                className: "space-y-2 w-full",
                children: [
                  D.jsx("p", {
                    className: "bg-white rounded-xl p-4 shadow-md max-w-md",
                    children: E.message,
                  }),
                  D.jsx("div", {
                    className: "flex flex-wrap gap-1",
                    children:
                      !G &&
                      E.options.map((N, nl) =>
                        D.jsx(
                          "button",
                          {
                            onClick: () => J(N),
                            className:
                              "bg-white border border-primary text-secondary rounded-lg p-2 shadow-md hover:scale-102 transition-transform cursor-pointer text-sm",
                            children: N.label,
                          },
                          nl
                        )
                      ),
                  }),
                ],
              }),
            ],
          },
          R
        );
      } else
        return D.jsx(
          "div",
          {
            className: "flex justify-end mt-4",
            children: D.jsx("p", {
              className:
                "bg-primary text-white rounded-xl p-3 shadow-md max-w-md",
              children: P.message,
            }),
          },
          R
        );
    };
    return D.jsx("div", {
      className: "pb-20",
      children: D.jsxs("div", {
        className: "mt-4 overflow-y-scroll h-[calc(100vh-450px)]",
        children: [
          A.map((P, R) => dl(P, R)),
          G && D.jsx(k1, {}),
          D.jsx("div", { ref: Q }),
        ],
      }),
    });
  },
  P1 = () => {
    const [A, U] = W.useState(!1);
    return D.jsxs("div", {
      className: `bg-white rounded-xl flex items-center justify-between pr-2.5 border-2 transition-colors ${
        A ? "border-primary" : "border-white"
      }`,
      children: [
        D.jsx("input", {
          type: "text",
          className: "w-full p-2.5 outline-0",
          placeholder: "Chat with AI agent",
          onFocus: () => U(!0),
          onBlur: () => U(!1),
        }),
        D.jsx($1, { className: "w-6" }),
      ],
    });
  },
  lv = ({ setIsOpen: A, setHomeChat: U }) => {
    const [G, y] = W.useState([{ type: "bot", stepId: "welcome" }]);
    return D.jsxs("div", {
      className: "relative",
      children: [
        D.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            D.jsxs("div", {
              className: "flex items-center gap-x-4",
              children: [
                D.jsx(Q1, {
                  title: "Back to home",
                  className:
                    "w-7 cursor-pointer hover:bg-primary/50 p-1 transition rounded-full",
                  onClick: () => U("home"),
                }),
                D.jsx(K1, {
                  title: "Reset chat",
                  className:
                    "w-7 cursor-pointer hover:bg-primary/50 p-1 transition rounded-full",
                  onClick: () => y([{ type: "bot", stepId: "welcome" }]),
                }),
              ],
            }),
            D.jsx(cr, {
              title: "Minimize chat",
              className:
                "w-7 cursor-pointer hover:bg-primary/50 p-1 transition rounded-full",
              onClick: () => A(!1),
            }),
          ],
        }),
        D.jsx(I1, { chatHistory: G, setChatHistory: y }),
        D.jsxs("div", {
          className: "absolute bottom-0 w-full",
          children: [
            D.jsx(P1, {}),
            D.jsxs("div", {
              className:
                "flex items-center justify-center gap-x-1 text-xs mt-2",
              children: [
                D.jsx("p", { className: "font-thin", children: "Powered by " }),
                D.jsx("img", {
                  src: "/images/logo-black.svg",
                  className: "w-4",
                }),
                D.jsx("strong", { children: "Chatbot" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  tv = ({ setIsOpen: A, setHomeChat: U }) =>
    D.jsxs(D.Fragment, {
      children: [
        D.jsx(cr, {
          className:
            "w-7 ml-auto cursor-pointer hover:bg-primary/50 p-1 transition rounded-full",
          onClick: () => A(!1),
        }),
        D.jsx("img", { src: "/images/logo-black.svg", className: "w-14" }),
        D.jsxs("h2", {
          className: "text-4xl font-bold mt-4",
          children: ["How can we ", D.jsx("br", {}), " help you today? 👋"],
        }),
        D.jsxs("div", {
          className: "bg-white p-4 rounded-xl mt-10",
          children: [
            D.jsxs("div", {
              className: "flex items-center gap-x-2",
              children: [
                D.jsx("div", {
                  children: D.jsx("img", {
                    src: "/images/logo.svg",
                    className: "w-8 bg-primary rounded-full p-1.5",
                  }),
                }),
                D.jsxs("div", {
                  children: [
                    D.jsx("p", {
                      className: "font-light",
                      children: "Chatbot",
                    }),
                    D.jsx("p", {
                      children: "Let me know if you have any questions!",
                    }),
                  ],
                }),
              ],
            }),
            D.jsx("button", {
              className:
                "bg-primary rounded-md w-full mt-2 p-2 font-semibold text-white hover:bg-primary/90 transition cursor-pointer outline-0",
              onClick: () => U("chat"),
              children: "Chat with us",
            }),
          ],
        }),
        D.jsxs("div", {
          className:
            "bg-white p-2 rounded-3xl mt-16 flex justify-around items-center",
          children: [
            D.jsxs("div", {
              className:
                "opacity-70 hover:opacity-100 transition cursor-pointer",
              onClick: () => U("home"),
              children: [
                D.jsx(Z1, { className: "w-8" }),
                D.jsx("p", { children: "Home" }),
              ],
            }),
            D.jsxs("div", {
              className:
                "opacity-70 hover:opacity-100 transition cursor-pointer",
              onClick: () => U("chat"),
              children: [
                D.jsx(J1, { className: "w-8" }),
                D.jsx("p", { children: "Contact" }),
              ],
            }),
          ],
        }),
      ],
    }),
  av = ({ isOpen: A, setIsOpen: U }) => {
    const [G, y] = W.useState("home");
    return D.jsx("div", {
      className: `
          fixed bottom-4 right-4 z-[9999] w-96 p-4 rounded-xl bg-gradient-to-b from-primary/10 to-secondary/10 shadow-2xl transition-all duration-500
          ${
            A
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `,
      children:
        G === "home"
          ? D.jsx(tv, { setIsOpen: U, setHomeChat: y })
          : D.jsx(lv, { setIsOpen: U, setHomeChat: y }),
    });
  },
  uv = () => {
    const [A, U] = W.useState(!1);
    return D.jsxs(D.Fragment, {
      children: [
        D.jsx("img", {
          src: "images/logo.svg",
          className: `
            fixed bottom-4 right-4 z-[9999] size-14 p-4 rounded-full bg-primary hover:bg-secondary shadow-2xl cursor-pointer transition-all duration-500 
              ${
                A
                  ? "opacity-0 translate-y-4 pointer-events-none"
                  : "opacity-100 translate-y-0"
              }
            `,
          onClick: () => U(!0),
        }),
        D.jsx(av, { isOpen: A, setIsOpen: U }),
      ],
    });
  };
G1.createRoot(document.getElementById("root")).render(
  D.jsx(W.StrictMode, { children: D.jsx(uv, {}) })
);
