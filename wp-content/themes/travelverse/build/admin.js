(() => {
  "use strict";
  var e = {
      338: (e, t, r) => {
        var o = r(795);
        (t.H = o.createRoot), o.hydrateRoot;
      },
      795: (e) => {
        e.exports = window.ReactDOM;
      },
    },
    t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var a = (t[o] = { exports: {} });
    return e[o](a, a.exports, r), a.exports;
  }
  (r.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      var e;
      r.g.importScripts && (e = r.g.location + "");
      var t = r.g.document;
      if (
        !e &&
        t &&
        (t.currentScript &&
          "SCRIPT" === t.currentScript.tagName.toUpperCase() &&
          (e = t.currentScript.src),
        !e)
      ) {
        var o = t.getElementsByTagName("script");
        if (o.length)
          for (var n = o.length - 1; n > -1 && (!e || !/^http(s?):/.test(e)); )
            e = o[n--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = e);
    })();
  const o = window.React;
  var n = r(338);
  const a = window.wp.i18n,
    l = {
      globe: () =>
        (0, o.createElement)(
          "svg",
          {
            width: "21",
            height: "20",
            viewBox: "0 0 21 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          (0, o.createElement)("path", {
            d: "M10.5004 18.3333C15.1028 18.3333 18.8337 14.6024 18.8337 9.99999C18.8337 5.39762 15.1028 1.66666 10.5004 1.66666C5.89801 1.66666 2.16705 5.39762 2.16705 9.99999C2.16705 14.6024 5.89801 18.3333 10.5004 18.3333Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          (0, o.createElement)("path", {
            d: "M2.16705 10H18.8337",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          (0, o.createElement)("path", {
            d: "M10.5004 1.66666C12.5848 3.94862 13.7693 6.91002 13.8337 9.99999C13.7693 13.09 12.5848 16.0514 10.5004 18.3333C8.41599 16.0514 7.23143 13.09 7.16705 9.99999C7.23143 6.91002 8.41599 3.94862 10.5004 1.66666V1.66666Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        ),
      youtube: () =>
        (0, o.createElement)(
          "svg",
          {
            width: "21",
            height: "20",
            viewBox: "0 0 21 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          (0, o.createElement)("path", {
            d: "M19.5857 5.41971C19.3676 4.59853 18.725 3.95179 17.9091 3.73232C16.4303 3.3335 10.5004 3.3335 10.5004 3.3335C10.5004 3.3335 4.57055 3.3335 3.0917 3.73232C2.27583 3.95183 1.63326 4.59853 1.41517 5.41971C1.01892 6.90815 1.01892 10.0136 1.01892 10.0136C1.01892 10.0136 1.01892 13.1191 1.41517 14.6076C1.63326 15.4287 2.27583 16.0485 3.0917 16.268C4.57055 16.6668 10.5004 16.6668 10.5004 16.6668C10.5004 16.6668 16.4303 16.6668 17.9091 16.268C18.725 16.0485 19.3676 15.4287 19.5857 14.6076C19.9819 13.1191 19.9819 10.0136 19.9819 10.0136C19.9819 10.0136 19.9819 6.90815 19.5857 5.41971ZM8.561 12.8332V7.19409L13.5172 10.0137L8.561 12.8332Z",
            fill: "currentColor",
          })
        ),
      headphone: () =>
        (0, o.createElement)(
          "svg",
          {
            width: "21",
            height: "20",
            viewBox: "0 0 21 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          (0, o.createElement)("path", {
            d: "M3.00037 15V10C3.00037 8.01088 3.79054 6.10322 5.19707 4.6967C6.60359 3.29018 8.51124 2.5 10.5004 2.5C12.4895 2.5 14.3971 3.29018 15.8037 4.6967C17.2102 6.10322 18.0004 8.01088 18.0004 10V15",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          (0, o.createElement)("path", {
            d: "M18.0004 15.8337C18.0004 16.2757 17.8248 16.6996 17.5122 17.0122C17.1996 17.3247 16.7757 17.5003 16.3337 17.5003H15.5004C15.0583 17.5003 14.6344 17.3247 14.3219 17.0122C14.0093 16.6996 13.8337 16.2757 13.8337 15.8337V13.3337C13.8337 12.8916 14.0093 12.4677 14.3219 12.1551C14.6344 11.8426 15.0583 11.667 15.5004 11.667H18.0004V15.8337ZM3.00037 15.8337C3.00037 16.2757 3.17596 16.6996 3.48852 17.0122C3.80108 17.3247 4.22501 17.5003 4.66703 17.5003H5.50037C5.94239 17.5003 6.36632 17.3247 6.67888 17.0122C6.99144 16.6996 7.16703 16.2757 7.16703 15.8337V13.3337C7.16703 12.8916 6.99144 12.4677 6.67888 12.1551C6.36632 11.8426 5.94239 11.667 5.50037 11.667H3.00037V15.8337Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        ),
      note: () =>
        (0, o.createElement)(
          "svg",
          {
            width: "21",
            height: "20",
            viewBox: "0 0 21 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          (0, o.createElement)("path", {
            d: "M3.83374 1.6665H11.3337L17.1671 7.49984V18.3332H3.83374V1.6665Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          (0, o.createElement)("path", {
            d: "M11.3337 1.6665V7.49984H17.1671",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          (0, o.createElement)("path", {
            d: "M7.16699 11.6665H13.8337",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
          }),
          (0, o.createElement)("path", {
            d: "M7.16699 15H10.5003",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
          })
        ),
      mic: () =>
        (0, o.createElement)(
          "svg",
          {
            width: "23",
            height: "20",
            viewBox: "0 0 23 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          (0, o.createElement)("path", {
            d: "M21.7504 7.22188V1.25039C21.7504 0.908594 21.4777 0 20.5008 0H20.5004C20.2222 0 19.9461 0.0929688 19.7199 0.274219L16.3984 2.93164C14.7301 4.26523 12.6355 5 10.5004 5H3.00037C1.61951 5 0.500366 6.11914 0.500366 7.5V11.25C0.500366 12.6309 1.61951 13.75 3.00037 13.75L2.98162 15C2.98162 16.5535 3.34334 18.0215 3.98005 19.3336C4.18279 19.7512 4.62537 20 5.08943 20H9.24099C10.2586 20 10.8695 18.8344 10.2527 18.025C9.61209 17.1844 9.23123 16.1359 9.23123 15C9.23123 14.566 9.29451 14.1488 9.40349 13.75H10.5004C12.6355 13.75 14.7301 14.4848 16.398 15.8184L19.7195 18.4758C19.941 18.6531 20.2162 18.7498 20.5 18.75C21.4734 18.75 21.75 17.8602 21.75 17.5V11.5285C22.4941 11.0953 23 10.2984 23 9.37539C23.0004 8.45195 22.4945 7.65508 21.7504 7.22188ZM5.48982 18.125C5.06951 17.1309 4.85662 16.0816 4.85662 15C4.85662 14.4445 4.9238 14.0102 4.95818 13.75H7.49373C7.41209 14.168 7.35623 14.5863 7.35623 15C7.35623 16.1023 7.61326 17.1641 8.10662 18.125H5.48982ZM9.87537 11.875H3.00037C2.65583 11.875 2.37537 11.5945 2.37537 11.25V7.5C2.37537 7.15547 2.65583 6.875 3.00037 6.875H9.87537V11.875ZM19.8754 16.1992L17.5691 14.3539C15.8972 13.0172 13.8664 12.191 11.7504 11.9535V6.79648C13.8664 6.55898 15.8972 5.73281 17.5695 4.3957L19.8754 2.55078V16.1992Z",
            fill: "currentColor",
          })
        ),
      warning: () =>
        (0, o.createElement)(
          "svg",
          {
            width: "22",
            height: "19",
            viewBox: "0 0 22 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          (0, o.createElement)("path", {
            d: "M0 19L11 0L22 19H0ZM11 16C11.2833 16 11.5208 15.9042 11.7125 15.7125C11.9042 15.5208 12 15.2833 12 15C12 14.7167 11.9042 14.4792 11.7125 14.2875C11.5208 14.0958 11.2833 14 11 14C10.7167 14 10.4792 14.0958 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15C10 15.2833 10.0958 15.5208 10.2875 15.7125C10.4792 15.9042 10.7167 16 11 16ZM10 13H12V8H10V13Z",
            fill: "#F2983E",
          })
        ),
      cross: () =>
        (0, o.createElement)(
          "svg",
          {
            width: "26",
            height: "27",
            viewBox: "0 0 26 27",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          (0, o.createElement)("path", {
            d: "M22.75 3.34946L3.25 23.4461",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
          }),
          (0, o.createElement)("path", {
            d: "M3.25 3.34946L22.75 23.4461",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
          })
        ),
      loading: () =>
        (0, o.createElement)(
          "svg",
          {
            className: "svg-travelverse",
            width: "15",
            height: "15",
            viewBox: "0 0 100 100",
          },
          (0, o.createElement)(
            "g",
            { transform: "translate(50,50)" },
            (0, o.createElement)(
              "g",
              { transform: "scale(1)" },
              (0, o.createElement)("circle", {
                cx: "0",
                cy: "0",
                r: "50",
                fill: "#687c93",
              }),
              (0, o.createElement)(
                "circle",
                {
                  cx: "0",
                  cy: "-26",
                  r: "12",
                  fill: "#ffffff",
                  transform: "rotate(161.634)",
                },
                (0, o.createElement)("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  calcMode: "linear",
                  values: "0 0 0;360 0 0",
                  keyTimes: "0;1",
                  dur: "1s",
                  begin: "0s",
                  repeatCount: "indefinite",
                })
              )
            )
          )
        ),
    },
    s = ({ icon: e }) => {
      const t = l[e];
      return (t && (0, o.createElement)(t, null)) || null;
    };
  function i(e) {
    var t,
      r,
      o = "";
    if ("string" == typeof e || "number" == typeof e) o += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var n = e.length;
        for (t = 0; t < n; t++)
          e[t] && (r = i(e[t])) && (o && (o += " "), (o += r));
      } else for (r in e) e[r] && (o && (o += " "), (o += r));
    return o;
  }
  window.wp.element;
  var c = "-";
  function d(e) {
    var t = (function (e) {
        var t = e.theme,
          r = e.prefix,
          o = { nextPart: new Map(), validators: [] },
          n = (function (e, t) {
            return t
              ? e.map(function (e) {
                  return [
                    e[0],
                    e[1].map(function (e) {
                      return "string" == typeof e
                        ? t + e
                        : "object" == typeof e
                        ? Object.fromEntries(
                            Object.entries(e).map(function (e) {
                              var r = e[0],
                                o = e[1];
                              return [t + r, o];
                            })
                          )
                        : e;
                    }),
                  ];
                })
              : e;
          })(Object.entries(e.classGroups), r);
        return (
          n.forEach(function (e) {
            var r = e[0];
            p(e[1], o, r, t);
          }),
          o
        );
      })(e),
      r = e.conflictingClassGroups,
      o = e.conflictingClassGroupModifiers,
      n = void 0 === o ? {} : o;
    return {
      getClassGroupId: function (e) {
        var r = e.split(c);
        return (
          "" === r[0] && 1 !== r.length && r.shift(),
          u(r, t) ||
            (function (e) {
              if (m.test(e)) {
                var t = m.exec(e)[1],
                  r = t?.substring(0, t.indexOf(":"));
                if (r) return "arbitrary.." + r;
              }
            })(e)
        );
      },
      getConflictingClassGroupIds: function (e, t) {
        var o = r[e] || [];
        return t && n[e] ? [].concat(o, n[e]) : o;
      },
    };
  }
  function u(e, t) {
    if (0 === e.length) return t.classGroupId;
    var r = e[0],
      o = t.nextPart.get(r),
      n = o ? u(e.slice(1), o) : void 0;
    if (n) return n;
    if (0 !== t.validators.length) {
      var a = e.join(c);
      return t.validators.find(function (e) {
        return (0, e.validator)(a);
      })?.classGroupId;
    }
  }
  var m = /^\[(.+)\]$/;
  function p(e, t, r, o) {
    e.forEach(function (e) {
      if ("string" != typeof e) {
        if ("function" == typeof e)
          return e.isThemeGetter
            ? void p(e(o), t, r, o)
            : void t.validators.push({ validator: e, classGroupId: r });
        Object.entries(e).forEach(function (e) {
          var n = e[0];
          p(e[1], f(t, n), r, o);
        });
      } else ("" === e ? t : f(t, e)).classGroupId = r;
    });
  }
  function f(e, t) {
    var r = e;
    return (
      t.split(c).forEach(function (e) {
        r.nextPart.has(e) ||
          r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(e));
      }),
      r
    );
  }
  function b(e) {
    if (e < 1) return { get: function () {}, set: function () {} };
    var t = 0,
      r = new Map(),
      o = new Map();
    function n(n, a) {
      r.set(n, a), ++t > e && ((t = 0), (o = r), (r = new Map()));
    }
    return {
      get: function (e) {
        var t = r.get(e);
        return void 0 !== t
          ? t
          : void 0 !== (t = o.get(e))
          ? (n(e, t), t)
          : void 0;
      },
      set: function (e, t) {
        r.has(e) ? r.set(e, t) : n(e, t);
      },
    };
  }
  var v = "!";
  function g(e) {
    var t = e.separator || ":",
      r = 1 === t.length,
      o = t[0],
      n = t.length;
    return function (e) {
      for (var a, l = [], s = 0, i = 0, c = 0; c < e.length; c++) {
        var d = e[c];
        if (0 === s) {
          if (d === o && (r || e.slice(c, c + n) === t)) {
            l.push(e.slice(i, c)), (i = c + n);
            continue;
          }
          if ("/" === d) {
            a = c;
            continue;
          }
        }
        "[" === d ? s++ : "]" === d && s--;
      }
      var u = 0 === l.length ? e : e.substring(i),
        m = u.startsWith(v);
      return {
        modifiers: l,
        hasImportantModifier: m,
        baseClassName: m ? u.substring(1) : u,
        maybePostfixModifierPosition: a && a > i ? a - i : void 0,
      };
    };
  }
  var h = /\s+/;
  function x() {
    for (var e, t, r = 0, o = ""; r < arguments.length; )
      (e = arguments[r++]) && (t = w(e)) && (o && (o += " "), (o += t));
    return o;
  }
  function w(e) {
    if ("string" == typeof e) return e;
    for (var t, r = "", o = 0; o < e.length; o++)
      e[o] && (t = w(e[o])) && (r && (r += " "), (r += t));
    return r;
  }
  function y() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    var o,
      n,
      a,
      l = function (e) {
        var r = t[0],
          i = t.slice(1).reduce(function (e, t) {
            return t(e);
          }, r());
        return (
          (o = (function (e) {
            return { cache: b(e.cacheSize), splitModifiers: g(e), ...d(e) };
          })(i)),
          (n = o.cache.get),
          (a = o.cache.set),
          (l = s),
          s(e)
        );
      };
    function s(e) {
      var t = n(e);
      if (t) return t;
      var r = (function (e, t) {
        var r = t.splitModifiers,
          o = t.getClassGroupId,
          n = t.getConflictingClassGroupIds,
          a = new Set();
        return e
          .trim()
          .split(h)
          .map(function (e) {
            var t = r(e),
              n = t.modifiers,
              a = t.hasImportantModifier,
              l = t.baseClassName,
              s = t.maybePostfixModifierPosition,
              i = o(s ? l.substring(0, s) : l),
              c = Boolean(s);
            if (!i) {
              if (!s) return { isTailwindClass: !1, originalClassName: e };
              if (!(i = o(l)))
                return { isTailwindClass: !1, originalClassName: e };
              c = !1;
            }
            var d = (function (e) {
              if (e.length <= 1) return e;
              var t = [],
                r = [];
              return (
                e.forEach(function (e) {
                  "[" === e[0]
                    ? (t.push.apply(t, r.sort().concat([e])), (r = []))
                    : r.push(e);
                }),
                t.push.apply(t, r.sort()),
                t
              );
            })(n).join(":");
            return {
              isTailwindClass: !0,
              modifierId: a ? d + v : d,
              classGroupId: i,
              originalClassName: e,
              hasPostfixModifier: c,
            };
          })
          .reverse()
          .filter(function (e) {
            if (!e.isTailwindClass) return !0;
            var t = e.modifierId,
              r = e.classGroupId,
              o = e.hasPostfixModifier,
              l = t + r;
            return (
              !a.has(l) &&
              (a.add(l),
              n(r, o).forEach(function (e) {
                return a.add(t + e);
              }),
              !0)
            );
          })
          .reverse()
          .map(function (e) {
            return e.originalClassName;
          })
          .join(" ");
      })(e, o);
      return a(e, r), r;
    }
    return function () {
      return l(x.apply(null, arguments));
    };
  }
  function _(e) {
    var t = function (t) {
      return t[e] || [];
    };
    return (t.isThemeGetter = !0), t;
  }
  var E = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    k = /^\d+\/\d+$/,
    C = new Set(["px", "full", "screen"]),
    N = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    z =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    M = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  function j(e) {
    return W(e) || C.has(e) || k.test(e) || L(e);
  }
  function L(e) {
    return U(e, "length", $);
  }
  function T(e) {
    return U(e, "size", B);
  }
  function V(e) {
    return U(e, "position", B);
  }
  function S(e) {
    return U(e, "url", D);
  }
  function P(e) {
    return U(e, "number", W);
  }
  function W(e) {
    return !Number.isNaN(Number(e));
  }
  function H(e) {
    return e.endsWith("%") && W(e.slice(0, -1));
  }
  function I(e) {
    return A(e) || U(e, "number", A);
  }
  function G(e) {
    return E.test(e);
  }
  function F() {
    return !0;
  }
  function R(e) {
    return N.test(e);
  }
  function Z(e) {
    return U(e, "", O);
  }
  function U(e, t, r) {
    var o = E.exec(e);
    return !!o && (o[1] ? o[1] === t : r(o[2]));
  }
  function $(e) {
    return z.test(e);
  }
  function B() {
    return !1;
  }
  function D(e) {
    return e.startsWith("url(");
  }
  function A(e) {
    return Number.isInteger(Number(e));
  }
  function O(e) {
    return M.test(e);
  }
  function q() {
    var e = _("colors"),
      t = _("spacing"),
      r = _("blur"),
      o = _("brightness"),
      n = _("borderColor"),
      a = _("borderRadius"),
      l = _("borderSpacing"),
      s = _("borderWidth"),
      i = _("contrast"),
      c = _("grayscale"),
      d = _("hueRotate"),
      u = _("invert"),
      m = _("gap"),
      p = _("gradientColorStops"),
      f = _("gradientColorStopPositions"),
      b = _("inset"),
      v = _("margin"),
      g = _("opacity"),
      h = _("padding"),
      x = _("saturate"),
      w = _("scale"),
      y = _("sepia"),
      E = _("skew"),
      k = _("space"),
      C = _("translate"),
      N = function () {
        return ["auto", G, t];
      },
      z = function () {
        return [G, t];
      },
      M = function () {
        return ["", j];
      },
      U = function () {
        return ["auto", W, G];
      },
      $ = function () {
        return ["", "0", G];
      },
      B = function () {
        return [W, P];
      },
      D = function () {
        return [W, G];
      };
    return {
      cacheSize: 500,
      theme: {
        colors: [F],
        spacing: [j],
        blur: ["none", "", R, G],
        brightness: B(),
        borderColor: [e],
        borderRadius: ["none", "", "full", R, G],
        borderSpacing: z(),
        borderWidth: M(),
        contrast: B(),
        grayscale: $(),
        hueRotate: D(),
        invert: $(),
        gap: z(),
        gradientColorStops: [e],
        gradientColorStopPositions: [H, L],
        inset: N(),
        margin: N(),
        opacity: B(),
        padding: z(),
        saturate: B(),
        scale: B(),
        sepia: $(),
        skew: D(),
        space: z(),
        translate: z(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", G] }],
        container: ["container"],
        columns: [{ columns: [R] }],
        "break-after": [
          {
            "break-after": [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
          },
        ],
        "break-before": [
          {
            "break-before": [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
          },
        ],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none"] }],
        clear: [{ clear: ["left", "right", "both", "none"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [
          {
            object: [].concat(
              [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
              ],
              [G]
            ),
          },
        ],
        overflow: [
          { overflow: ["auto", "hidden", "clip", "visible", "scroll"] },
        ],
        "overflow-x": [
          { "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] },
        ],
        "overflow-y": [
          { "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] },
        ],
        overscroll: [{ overscroll: ["auto", "contain", "none"] }],
        "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
        "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [b] }],
        "inset-x": [{ "inset-x": [b] }],
        "inset-y": [{ "inset-y": [b] }],
        start: [{ start: [b] }],
        end: [{ end: [b] }],
        top: [{ top: [b] }],
        right: [{ right: [b] }],
        bottom: [{ bottom: [b] }],
        left: [{ left: [b] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", I] }],
        basis: [{ basis: N() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", G] }],
        grow: [{ grow: $() }],
        shrink: [{ shrink: $() }],
        order: [{ order: ["first", "last", "none", I] }],
        "grid-cols": [{ "grid-cols": [F] }],
        "col-start-end": [{ col: ["auto", { span: ["full", I] }, G] }],
        "col-start": [{ "col-start": U() }],
        "col-end": [{ "col-end": U() }],
        "grid-rows": [{ "grid-rows": [F] }],
        "row-start-end": [{ row: ["auto", { span: [I] }, G] }],
        "row-start": [{ "row-start": U() }],
        "row-end": [{ "row-end": U() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [
          {
            justify: ["normal"].concat([
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ]),
          },
        ],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [
          {
            content: ["normal"].concat(
              [
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
              ],
              ["baseline"]
            ),
          },
        ],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [
          {
            "place-content": [].concat(
              [
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
              ],
              ["baseline"]
            ),
          },
        ],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [v] }],
        mx: [{ mx: [v] }],
        my: [{ my: [v] }],
        ms: [{ ms: [v] }],
        me: [{ me: [v] }],
        mt: [{ mt: [v] }],
        mr: [{ mr: [v] }],
        mb: [{ mb: [v] }],
        ml: [{ ml: [v] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", G, t] }],
        "min-w": [{ "min-w": ["min", "max", "fit", G, j] }],
        "max-w": [
          {
            "max-w": [
              "0",
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [R] },
              R,
              G,
            ],
          },
        ],
        h: [{ h: [G, t, "auto", "min", "max", "fit"] }],
        "min-h": [{ "min-h": ["min", "max", "fit", G, j] }],
        "max-h": [{ "max-h": [G, t, "min", "max", "fit"] }],
        "font-size": [{ text: ["base", R, L] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              P,
            ],
          },
        ],
        "font-family": [{ font: [F] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              G,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", W, P] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              G,
              j,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", G] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [
          {
            decoration: [].concat(
              ["solid", "dashed", "dotted", "double", "none"],
              ["wavy"]
            ),
          },
        ],
        "text-decoration-thickness": [{ decoration: ["auto", "from-font", j] }],
        "underline-offset": [{ "underline-offset": ["auto", G, j] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        indent: [{ indent: z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              G,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [
          {
            bg: [].concat(
              [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
              ],
              [V]
            ),
          },
        ],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", T] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              S,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [f] }],
        "gradient-via-pos": [{ via: [f] }],
        "gradient-to-pos": [{ to: [f] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [a] }],
        "rounded-s": [{ "rounded-s": [a] }],
        "rounded-e": [{ "rounded-e": [a] }],
        "rounded-t": [{ "rounded-t": [a] }],
        "rounded-r": [{ "rounded-r": [a] }],
        "rounded-b": [{ "rounded-b": [a] }],
        "rounded-l": [{ "rounded-l": [a] }],
        "rounded-ss": [{ "rounded-ss": [a] }],
        "rounded-se": [{ "rounded-se": [a] }],
        "rounded-ee": [{ "rounded-ee": [a] }],
        "rounded-es": [{ "rounded-es": [a] }],
        "rounded-tl": [{ "rounded-tl": [a] }],
        "rounded-tr": [{ "rounded-tr": [a] }],
        "rounded-br": [{ "rounded-br": [a] }],
        "rounded-bl": [{ "rounded-bl": [a] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [
          {
            border: [].concat(
              ["solid", "dashed", "dotted", "double", "none"],
              ["hidden"]
            ),
          },
        ],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [
          { divide: ["solid", "dashed", "dotted", "double", "none"] },
        ],
        "border-color": [{ border: [n] }],
        "border-color-x": [{ "border-x": [n] }],
        "border-color-y": [{ "border-y": [n] }],
        "border-color-t": [{ "border-t": [n] }],
        "border-color-r": [{ "border-r": [n] }],
        "border-color-b": [{ "border-b": [n] }],
        "border-color-l": [{ "border-l": [n] }],
        "divide-color": [{ divide: [n] }],
        "outline-style": [
          {
            outline: [""].concat([
              "solid",
              "dashed",
              "dotted",
              "double",
              "none",
            ]),
          },
        ],
        "outline-offset": [{ "outline-offset": [G, j] }],
        "outline-w": [{ outline: [j] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: M() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [j] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", R, Z] }],
        "shadow-color": [{ shadow: [F] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [
          {
            "mix-blend": [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
              "plus-lighter",
            ],
          },
        ],
        "bg-blend": [
          {
            "bg-blend": [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
              "plus-lighter",
            ],
          },
        ],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [o] }],
        contrast: [{ contrast: [i] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", R, G] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [u] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [y] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [o] }],
        "backdrop-contrast": [{ "backdrop-contrast": [i] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [u] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [y] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [l] }],
        "border-spacing-x": [{ "border-spacing-x": [l] }],
        "border-spacing-y": [{ "border-spacing-y": [l] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              G,
            ],
          },
        ],
        duration: [{ duration: D() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
        delay: [{ delay: D() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", G] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [w] }],
        "scale-x": [{ "scale-x": [w] }],
        "scale-y": [{ "scale-y": [w] }],
        rotate: [{ rotate: [I, G] }],
        "translate-x": [{ "translate-x": [C] }],
        "translate-y": [{ "translate-y": [C] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              G,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: ["appearance-none"],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": z() }],
        "scroll-mx": [{ "scroll-mx": z() }],
        "scroll-my": [{ "scroll-my": z() }],
        "scroll-ms": [{ "scroll-ms": z() }],
        "scroll-me": [{ "scroll-me": z() }],
        "scroll-mt": [{ "scroll-mt": z() }],
        "scroll-mr": [{ "scroll-mr": z() }],
        "scroll-mb": [{ "scroll-mb": z() }],
        "scroll-ml": [{ "scroll-ml": z() }],
        "scroll-p": [{ "scroll-p": z() }],
        "scroll-px": [{ "scroll-px": z() }],
        "scroll-py": [{ "scroll-py": z() }],
        "scroll-ps": [{ "scroll-ps": z() }],
        "scroll-pe": [{ "scroll-pe": z() }],
        "scroll-pt": [{ "scroll-pt": z() }],
        "scroll-pr": [{ "scroll-pr": z() }],
        "scroll-pb": [{ "scroll-pb": z() }],
        "scroll-pl": [{ "scroll-pl": z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "pinch-zoom",
              "manipulation",
              { pan: ["x", "left", "right", "y", "up", "down"] },
            ],
          },
        ],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", G] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [j, P] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  }
  var Y = y(q);
  function Q(...e) {
    return Y(
      (function () {
        for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)
          (e = arguments[r]) && (t = i(e)) && (o && (o += " "), (o += t));
        return o;
      })(e)
    );
  }
  const J = ({ className: e, ...t }) => {
      let r;
      const [n, a] = (0, o.useState)(!1);
      return (0, o.createElement)(
        "div",
        {
          className: "relative inline-flex",
          onMouseEnter: function () {
            r = setTimeout(() => {
              a(!0);
            }, t.delay || 300);
          },
          onMouseLeave: function () {
            clearInterval(r), a(!1);
          },
        },
        t.children,
        n &&
          (0, o.createElement)(
            "div",
            {
              className: Q(
                `tooltip absolute rounded left-[-25%] py-2 px-3 bg-font-color text-xm z-50 shadow-sm top-[120%] w-max content-[''] before:absolute before:h-0 before:w-0 before:pointer-events-none before:ml-[calc(6px*-1)] before:border-[6px] before:border-transparent before:bottom-full before:border-b-font-color ${t.direction}`,
                e
              ),
            },
            (0, o.createElement)(
              "p",
              { className: "text-white max-w-[220px] text-center" },
              t.content
            )
          )
      );
    },
    K = r.p + "images/logo.0cb3ef30.png",
    X = window.wp.hooks,
    ee = [
      {
        url: "https://wptravelengine.com/wordpress-travel-themes/travelverse/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=theme_demo",
        icon: "globe",
        tooltip: (0, a.__)("Website", "travelverse"),
      },
      {
        url: "https://www.youtube.com/channel/UCbDXKWvJPgLo9scofaMc2vQ",
        icon: "youtube",
        tooltip: (0, a.__)("YouTube", "travelverse"),
      },
      {
        url: "https://wptravelengine.com/support/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=support",
        icon: "headphone",
        tooltip: (0, a.__)("Support", "travelverse"),
      },
      {
        url: "https://docs.wptravelengine.com/article/travelverse/travelverse/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=documentation",
        icon: "note",
        tooltip: (0, a.__)("Docs", "travelverse"),
      },
    ],
    te = function () {
      return (0, o.createElement)(
        o.Fragment,
        null,
        (0, o.createElement)(
          "nav",
          { className: "py-6 shadow-md bg-white" },
          (0, o.createElement)(
            "div",
            {
              className:
                "container flex justify-between items-center pl-7 pr-6 2xl:pl-0 2xl:pr-0",
            },
            (0, o.createElement)("img", { src: K }),
            (0, o.createElement)(
              "ul",
              { className: "flex gap-3 items-center" },
              (0, o.createElement)(
                "div",
                { className: "mb-1.5 pr-4 border-r text-lg" },
                travelverse_dashboard.ThemeVersion
              ),
              ee.map(({ url: e, icon: t, tooltip: r }, n) =>
                (0, o.createElement)(
                  "li",
                  { key: n, className: "logo-wrap" },
                  (0, o.createElement)(
                    J,
                    { content: r, direction: "center" },
                    (0, o.createElement)(
                      "a",
                      {
                        href: e,
                        target: "_blank",
                        className:
                          "p-3 border border-primary-accent inline-block rounded-full duration-200 hover:bg-primary-accent hover:text-primary-color hover:border-primary-color",
                      },
                      (0, o.createElement)(s, { icon: t, key: n })
                    )
                  )
                )
              ),
              (0, X.applyFilters)("travelverse_icons_tab", null)
            )
          )
        )
      );
    },
    re = r.p + "images/welcometotravelverse.41775e62.png",
    oe = () =>
      (0, o.createElement)(
        "div",
        {
          className:
            "flex p-14 rounded-md box-shadow-one gap-10 bg-white flex-col lg:flex-row",
        },
        (0, o.createElement)(
          "div",
          { className: "flex flex-1 flex-col items-start justify-center" },
          (0, o.createElement)(
            "h3",
            { className: "font-semibold text-3xl mb-4" },
            (0, a.__)("Welcome to TravelVerse", "travelverse")
          ),
          (0, o.createElement)(
            "p",
            { className: "text-base leading-7 font-normal mb-8" },
            (0, a.__)(
              "TravelVerse is a free FSE (Full Site Editing) travel agency WordPress theme to create travel and tour booking websites. It is powered by the Travel Primakara plugin, the most popular travel booking plugin. You can use the TravelVerse theme to create websites such as travel agencies, tour operators, trekking, city tours, rafting, jungle safari, or anything travel-related. The theme is fully responsive, SEO-ready, and Speed-optimized, so you are ahead of the game. Furthermore, TravelVerse allows you to customize your site with various blocks & patterns. Additionally, TravelVerse is WooCommerce compatible, as well as RTL and translation-ready.",
              "travelverse"
            )
          ),
          (0, o.createElement)(
            "div",
            { className: "flex gap-4" },
            (0, o.createElement)(
              "a",
              {
                href: travelverse_dashboard.siteEditor,
                className: "btn-primary",
              },
              (0, a.__)("Customize Your Website", "travelverse")
            )
          )
        ),
        (0, o.createElement)(
          "div",
          { className: "rounded flex-1" },
          (0, o.createElement)("img", {
            src: re,
            alt: (0, a.__)("TravelVerse welcome image", "travelverse"),
          })
        )
      ),
    ne = ({ title: e, children: t }) =>
      (0, o.createElement)(
        "div",
        {
          className:
            "flex p-8 gap-2 rounded-md flex-col box-shadow-one bg-white",
        },
        (0, o.createElement)("h4", { className: "text-xl font-semibold" }, e),
        t
      ),
    ae = () =>
      (0, o.createElement)(
        o.Fragment,
        null,
        (0, X.applyFilters)("travelverse_license_activation_placeholder", null),
        !travelverse_dashboard.proActivated &&
          (0, o.createElement)(
            "div",
            {
              className:
                "flex p-6 rounded-md box-shadow-one items-center gap-[234px] gradient-background flex-col lg:flex-row",
            },
            (0, o.createElement)(
              "div",
              { className: "flex flex-col gap-2 items-start justify-center" },
              (0, o.createElement)(
                "h3",
                { className: "font-semibold text-xl text-white" },
                (0, a.__)("Upgrade to Pro", "travelverse")
              ),
              (0, o.createElement)(
                "p",
                { className: "text-base leading-7 font-normal text-white" },
                (0, a.__)(
                  "With the Pro version, you get access to more customization, advanced add-ons, additional customization for headers, blogs and single posts along with many other advanced features.",
                  "travelverse"
                )
              )
            ),
            (0, o.createElement)(
              "div",
              { className: "rounded shrink-0 grow " },
              (0, o.createElement)(
                "a",
                {
                  href: "https://wptravelengine.com/pattern-engine/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=upgrade_pattern_engine",
                  target: "_blank",
                  className: "btn-secondary",
                },
                (0, a.__)("Upgrade Now", "travelverse")
              )
            )
          )
      ),
    le = ({ className: e, href: t, children: r }) =>
      (0, o.createElement)(
        "a",
        {
          href: t,
          target: "_blank",
          className: `text-sm font-medium text-heading-color underline decoration-primary-color inline-flex items-center transition-[gap] gap-2 ease-in duration-200 hover:underline hover:text-primary-color ${e}`,
        },
        r
      ),
    se = [
      {
        title: (0, a.__)("Documentation", "travelverse"),
        content: (0, a.__)(
          "Explore our detailed and beginner-friendly documentation to set up your site step-by-step.",
          "travelverse"
        ),
        link: (0, o.createElement)(
          le,
          {
            href: "https://docs.wptravelengine.com/article/travelverse/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=documentation",
          },
          (0, a.__)("Explore Documentation", "travelverse")
        ),
      },
      {
        title: (0, a.__)("Support", "travelverse"),
        content: (0, a.__)(
          "Need any help? Reach out to our support team for quick assistance with our theme.",
          "travelverse"
        ),
        link: (0, o.createElement)(
          le,
          {
            href: "https://wptravelengine.com/support/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=support",
          },
          (0, a.__)("Contact Support Team", "travelverse")
        ),
      },
    ],
    ie = r.p + "images/freePro.c2d3dbe2.png",
    ce = ({ className: e, href: t, children: r }) =>
      (0, o.createElement)(
        "a",
        {
          href: t,
          target: "_blank",
          className: `text-sm font-medium text-heading-color underline inline-flex items-center transition-[gap] gap-2 ease-in duration-200 hover:underline hover:text-primary-color ${e}`,
        },
        r
      ),
    de = [
      {
        title: (0, a.__)("Upgrade to Pro", "travelverse"),
        content: (0, a.__)(
          "With the Pro version, you can change the look and feel of your website in seconds. You can change color, choose from background patterns, and change the fonts with ease.",
          "travelverse"
        ),
        link: (0, o.createElement)(
          ce,
          {
            href: "https://wptravelengine.com/pattern-engine/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=upgrade_pattern_engine",
          },
          (0, a.__)("Learn More About Pro Version", "travelverse")
        ),
      },
      {
        title: (0, a.__)("Documentation", "travelverse"),
        content: (0, a.__)(
          "Explore our detailed and beginner-friendly documentation to set up your site step-by-step.",
          "travelverse"
        ),
        link: (0, o.createElement)(
          ce,
          {
            href: "https://docs.wptravelengine.com/article/travelverse/travelverse/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=documentation",
          },
          (0, a.__)("Explore Documentation", "travelverse")
        ),
      },
      {
        title: (0, a.__)("Support", "travelverse"),
        content: (0, a.__)(
          "Need any help? Reach out to our support team for quick assistance with our theme.",
          "travelverse"
        ),
        link: (0, o.createElement)(
          ce,
          {
            href: "https://wptravelengine.com/support/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=support",
          },
          (0, a.__)("Contact Support Team", "travelverse")
        ),
      },
    ],
    ue = r.p + "images/settings.22fd8260.jpg";
  function me({ imageSrc: e, className: t, link: r, message: n }) {
    return (0, o.createElement)(
      "div",
      {
        className: Q(
          "flex items-center p-4 justify-center relative w-full min-h-[292px] after:absolute after:w-full after:h-full after:bg-white after:opacity-60 after:top-0 after:z-[1]",
          t
        ),
      },
      (0, o.createElement)("img", {
        src: e,
        alt: "travelverse upgrade image",
        className: "absolute left-0 top-0 block max-w-full w-full h-full",
      }),
      (0, o.createElement)(
        "div",
        {
          className:
            "z-[2] p-4 relative mx-auto flex space-x-4 rounded bg-[#fff5eb] box-shadow text-center items-center border border-[#E3B98E]",
        },
        (0, o.createElement)(s, { icon: "warning" }),
        (0, o.createElement)("p", { className: "text-base" }, n),
        (0, o.createElement)(
          "a",
          {
            className:
              "text-sm font-semibold whitespace-nowrap text-primary-color inline-flex items-center gap-2 hover:text-primary-color group transition ease-in duration-200 underline-offset-2 underline hover:no-underline",
            href: r,
            target: "_blank",
          },
          (0, a.__)("Upgrade Now", "travelverse"),
          (0, o.createElement)(s, { icon: "arrow" })
        )
      )
    );
  }
  const pe = r.p + "images/starter.662185c3.jpg",
    fe = [
      {
        label: (0, a.__)("Dashboard", "TravelVerse"),
        content: () =>
          (0, o.createElement)(
            "div",
            { className: "container pl-7 pr-6 2xl:pl-0 2xl:pr-0" },
            (0, o.createElement)(
              "div",
              { className: "gap-8 flex flex-col" },
              (0, o.createElement)(oe, null),
              (0, o.createElement)(ae, null),
              (0, o.createElement)(
                "div",
                { className: "flex gap-10 mb-10" },
                se.map(({ title: e, content: t, link: r }, n) =>
                  (0, o.createElement)(
                    ne,
                    { key: n, title: e },
                    (0, o.createElement)(
                      "p",
                      { className: "text-sm leading-6" },
                      t
                    ),
                    r || null
                  )
                )
              )
            )
          ),
      },
      {
        label: (0, a.__)("Starter Sites", "TravelVerse"),
        content: function () {
          const [e, t] = (0, o.useState)(null);
          return (0, o.createElement)(
            "div",
            { className: "container pl-7 pr-6 2xl:pl-0 2xl:pr-0" },
            (0, o.createElement)(
              "div",
              { className: "flex py-8 gap-10 flex-col lg:flex-row" },
              (0, o.createElement)(
                "div",
                {
                  className:
                    "flex flex-1 flex-col gap-8 items-center justify-center",
                },
                (0, o.createElement)("img", {
                  src: pe,
                  alt: "travelverse starter image",
                }),
                (0, o.createElement)(
                  "div",
                  { className: "text-center" },
                  (0, o.createElement)(
                    "p",
                    { className: "text-lg font-semibold mb-3" },
                    (0, a.__)(
                      "TravelVerse is a feature-rich WordPress block theme designed to harness the full potential of the Gutenberg block editor.",
                      "travelverse"
                    )
                  ),
                  (0, o.createElement)(
                    "span",
                    {
                      className:
                        "text-base rounded px-2 py-1 bg-primary-accent-2 border border-border-color",
                    },
                    (0, o.createElement)(
                      "span",
                      { className: "font-semibold" },
                      (0, a.__)("Note:", "travelverse")
                    ),
                    " ",
                    (0, a.__)(
                      'Upon clicking this button, the "Demo Importer Plus" plugin will be installed and activated from the WordPress repository.',
                      "travelverse"
                    )
                  )
                ),
                (0, o.createElement)(
                  "div",
                  { className: "flex gap-4 items-center" },
                  travelverse_dashboard.starterTemplates &&
                    (0, o.createElement)(
                      "a",
                      {
                        className: "activate-button btn-primary",
                        href: travelverse_dashboard.starterURL,
                      },
                      travelverse_dashboard.starterLabel
                    ),
                  !travelverse_dashboard.starterTemplates &&
                    (0, o.createElement)(
                      o.Fragment,
                      null,
                      (0, o.createElement)(
                        "a",
                        {
                          className: "activate-button btn-primary",
                          onClick: () => {
                            return (
                              t(!0),
                              (e = new FormData()).append(
                                "action",
                                "travelverse_get_install_starter"
                              ),
                              e.append(
                                "security",
                                travelverse_dashboard.ajax_nonce
                              ),
                              e.append("status", travelverse_dashboard.status),
                              void jQuery
                                .ajax({
                                  method: "POST",
                                  url: travelverse_dashboard.ajaxUrl,
                                  data: e,
                                  contentType: !1,
                                  processData: !1,
                                })
                                .done(function (e) {
                                  e.success &&
                                    location.replace(
                                      travelverse_dashboard.starterURL
                                    );
                                })
                                .fail(function (e) {
                                  console.log(e);
                                })
                            );
                            var e;
                          },
                          variant: "primary",
                        },
                        travelverse_dashboard.starterLabel
                      ),
                      e && (0, o.createElement)(s, { icon: "loading" })
                    )
                )
              )
            )
          );
        },
      },
      {
        label: (0, a.__)("Free Vs Pro", "TravelVerse"),
        content: function () {
          return (0, o.createElement)(
            "div",
            { class: "container" },
            (0, o.createElement)(
              "div",
              { class: "flex box-shadow flex-col lg:flex-row gap-8" },
              (0, o.createElement)(
                "div",
                { class: "flex-1" },
                (0, o.createElement)("img", {
                  className: "w-full",
                  src: ie,
                  alt: (0, a.__)(
                    "TravelVerse free vs pro image",
                    "TravelVerse"
                  ),
                }),
                !travelverse_dashboard.proActivated &&
                  (0, o.createElement)(
                    "div",
                    {
                      className:
                        "flex p-6 rounded-md mt-5 box-shadow-one items-center gap-[100px] gradient-background flex-col lg:flex-row mb-10",
                    },
                    (0, o.createElement)(
                      "div",
                      {
                        className:
                          "flex flex-col gap-2 items-start justify-center",
                      },
                      (0, o.createElement)(
                        "h3",
                        { className: "font-semibold text-xl text-white" },
                        (0, a.__)("Upgrade to Pro", "travelverse")
                      ),
                      (0, o.createElement)(
                        "p",
                        { className: "text-sm font-normal text-white" },
                        (0, a.__)(
                          "With the Pro version, you get access to more customization, advanced add-ons, additional customization for headers, blogs and single posts along with many other advanced features.",
                          "travelverse"
                        )
                      )
                    ),
                    (0, o.createElement)(
                      "div",
                      { className: "rounded shrink-0 grow " },
                      (0, o.createElement)(
                        "a",
                        {
                          href: "https://wptravelengine.com/pattern-engin/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=upgrade_pattern_engine",
                          target: "_blank",
                          className: "btn-secondary",
                        },
                        (0, a.__)("Upgrade Now", "travelverse")
                      )
                    )
                  )
              ),
              (0, o.createElement)(
                "aside",
                { class: "rounded lg:w-1/3" },
                (0, o.createElement)(
                  "div",
                  { className: "flex flex-col gap-8" },
                  de.map(({ title: e, content: t, link: r }, n) =>
                    (0, o.createElement)(
                      ne,
                      { key: n, title: e },
                      (0, o.createElement)(
                        "p",
                        { className: "text-sm leading-6" },
                        t
                      ),
                      r || null
                    )
                  )
                )
              )
            )
          );
        },
      },
      {
        label: (0, a.__)("Settings", "TravelVerse"),
        content: () =>
          (0, o.createElement)(
            o.Fragment,
            null,
            (0, X.applyFilters)("travelverse_settings_pages", null),
            !travelverse_dashboard.proActivated &&
              (0, o.createElement)(
                "div",
                { className: "container pl-7 pr-6 2xl:pl-0 2xl:pr-0" },
                (0, o.createElement)(me, {
                  imageSrc: ue,
                  link: "https://wptravelengine.com/pattern-engine/?utm_source=travelverse&utm_medium=dashboard&utm_campaign=upgrade_pattern_engine",
                  className: "min-h-[360px]",
                  message: (0, a.__)(
                    "Upgrade to premium to access all the features.",
                    "travelverse"
                  ),
                })
              )
          ),
      },
    ];
  function be() {
    const [e, t] = (0, o.useState)(0),
      r = fe[e].content;
    return (
      (0, o.useEffect)(() => {
        const e = window.location.hash,
          r = parseInt(e.replace("#", ""), 10);
        !isNaN(r) && r >= 0 && r < fe.length && t(r);
      }, []),
      (0, o.createElement)(
        o.Fragment,
        null,
        (0, o.createElement)(
          "div",
          { className: "container" },
          (0, o.createElement)(
            "aside",
            { className: "py-8" },
            (0, o.createElement)(
              "nav",
              { className: "flex border-b" },
              fe.map(({ label: r, icon: n }, a) =>
                (0, o.createElement)(
                  "button",
                  {
                    onClick: () =>
                      (function (e) {
                        t(e), (window.location.hash = `#${e}`);
                      })(a),
                    className: `p-3 text-left text-lg inline-flex items-center gap-8 hover:text-primary-color relative ${
                      e === a &&
                      "border-primary-color border-border-radius text-primary-color nav-border font-semibold"
                    }`,
                    key: a,
                    type: "button",
                  },
                  r
                )
              )
            )
          )
        ),
        (0, o.createElement)(
          "div",
          { className: "flex-1" },
          (0, o.createElement)(r, null)
        )
      )
    );
  }
  travelverse_dashboard.proActivated &&
    (function (e) {
      for (let t = 0; t < e.length; t++)
        if ("Free Vs Pro" === e[t].label) {
          e.splice(t, 1);
          break;
        }
    })(fe);
  (0, n.H)(document.getElementById("travelverse-dashboard")).render(
    (0, o.createElement)(
      o.StrictMode,
      null,
      (0, o.createElement)(function () {
        return (0,
        o.createElement)("div", null, (0, o.createElement)(te, null), (0, o.createElement)(be, null));
      }, null)
    )
  );
})();
