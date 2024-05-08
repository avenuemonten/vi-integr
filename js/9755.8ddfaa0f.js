/*! For license information please see 9755.8ddfaa0f.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [9755],
  {
    619755: function (e, t) {
      var n;
      !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (r, i) {
        "use strict";
        var o = [],
          a = r.document,
          s = Object.getPrototypeOf,
          u = o.slice,
          l = o.concat,
          c = o.push,
          f = o.indexOf,
          p = {},
          d = p.toString,
          h = p.hasOwnProperty,
          g = h.toString,
          v = g.call(Object),
          y = {},
          m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
          },
          x = function (e) {
            return null != e && e === e.window;
          },
          b = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0,
          };
        function w(e, t, n) {
          var r,
            i,
            o = (n = n || a).createElement("script");
          if (((o.text = e), t))
            for (r in b)
              (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                o.setAttribute(r, i);
          n.head.appendChild(o).parentNode.removeChild(o);
        }
        function T(e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? p[d.call(e)] || "object"
            : typeof e;
        }
        var C = "3.4.1",
          E = function (e, t) {
            return new E.fn.init(e, t);
          },
          k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function S(e) {
          var t = !!e && "length" in e && e.length,
            n = T(e);
          return (
            !m(e) &&
            !x(e) &&
            ("array" === n ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        (E.fn = E.prototype =
          {
            jquery: C,
            constructor: E,
            length: 0,
            toArray: function () {
              return u.call(this);
            },
            get: function (e) {
              return null == e
                ? u.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = E.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return E.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                E.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(u.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: c,
            sort: o.sort,
            splice: o.splice,
          }),
          (E.extend = E.fn.extend =
            function () {
              var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
              for (
                "boolean" == typeof a &&
                  ((l = a), (a = arguments[s] || {}), s++),
                  "object" == typeof a || m(a) || (a = {}),
                  s === u && ((a = this), s--);
                s < u;
                s++
              )
                if (null != (e = arguments[s]))
                  for (t in e)
                    (r = e[t]),
                      "__proto__" !== t &&
                        a !== r &&
                        (l &&
                        r &&
                        (E.isPlainObject(r) || (i = Array.isArray(r)))
                          ? ((n = a[t]),
                            (o =
                              i && !Array.isArray(n)
                                ? []
                                : i || E.isPlainObject(n)
                                ? n
                                : {}),
                            (i = !1),
                            (a[t] = E.extend(l, o, r)))
                          : void 0 !== r && (a[t] = r));
              return a;
            }),
          E.extend({
            expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return (
                !(!e || "[object Object]" !== d.call(e)) &&
                (!(t = s(e)) ||
                  ("function" ==
                    typeof (n = h.call(t, "constructor") && t.constructor) &&
                    g.call(n) === v))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t) {
              w(e, {
                nonce: t && t.nonce,
              });
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (S(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            trim: function (e) {
              return null == e ? "" : (e + "").replace(k, "");
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (S(Object(e))
                    ? E.merge(n, "string" == typeof e ? [e] : e)
                    : c.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : f.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
              return (e.length = i), e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                i,
                o = 0,
                a = [];
              if (S(e))
                for (r = e.length; o < r; o++)
                  null != (i = t(e[o], o, n)) && a.push(i);
              else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
              return l.apply([], a);
            },
            guid: 1,
            support: y,
          }),
          "function" == typeof Symbol &&
            (E.fn[Symbol.iterator] = o[Symbol.iterator]),
          E.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              p["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var N = (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            y,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ue(),
            k = ue(),
            S = ue(),
            N = ue(),
            A = function (e, t) {
              return e === t && (f = !0), 0;
            },
            D = {}.hasOwnProperty,
            j = [],
            L = j.pop,
            q = j.push,
            H = j.push,
            O = j.slice,
            P = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            R =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W =
              "\\[" +
              M +
              "*(" +
              I +
              ")(?:" +
              M +
              "*([*^$|!~]?=)" +
              M +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              M +
              "*\\]",
            $ =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              W +
              ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp(
              "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
              "g"
            ),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + W),
              PSEUDO: new RegExp("^" + $),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  M +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  M +
                  "*(?:([+-]|)" +
                  M +
                  "*(\\d+)|))" +
                  M +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + R + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  M +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  M +
                  "*((?:-\\d)?\\d*)" +
                  M +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)",
              "ig"
            ),
            ne = function (e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            oe = function () {
              p();
            },
            ae = be(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              {
                dir: "parentNode",
                next: "legend",
              }
            );
          try {
            H.apply((j = O.call(w.childNodes)), w.childNodes),
              j[w.childNodes.length].nodeType;
          } catch (e) {
            H = {
              apply: j.length
                ? function (e, t) {
                    q.apply(e, O.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, r, i) {
            var o,
              s,
              l,
              c,
              f,
              h,
              y,
              m = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
            )
              return r;
            if (
              !i &&
              ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
            ) {
              if (11 !== T && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === T) {
                    if (!(l = t.getElementById(o))) return r;
                    if (l.id === o) return r.push(l), r;
                  } else if (
                    m &&
                    (l = m.getElementById(o)) &&
                    x(t, l) &&
                    l.id === o
                  )
                    return r.push(l), r;
                } else {
                  if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return H.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !N[e + " "] &&
                (!v || !v.test(e)) &&
                (1 !== T || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((y = e), (m = t), 1 === T && U.test(e))) {
                  for (
                    (c = t.getAttribute("id"))
                      ? (c = c.replace(re, ie))
                      : t.setAttribute("id", (c = b)),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = "#" + c + " " + xe(h[s]);
                  (y = h.join(",")),
                    (m = (ee.test(e) && ye(t.parentNode)) || t);
                }
                try {
                  return H.apply(r, m.querySelectorAll(y)), r;
                } catch (t) {
                  N(e, !0);
                } finally {
                  c === b && t.removeAttribute("id");
                }
              }
            }
            return u(e.replace(B, "$1"), t, r, i);
          }
          function ue() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function le(e) {
            return (e[b] = !0), e;
          }
          function ce(e) {
            var t = d.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ve(e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (o = se.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !Y.test(t || (n && n.nodeName) || "HTML");
            }),
          (p = se.setDocument =
            function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : w;
              return a !== d && 9 === a.nodeType && a.documentElement
                ? ((h = (d = a).documentElement),
                  (g = !o(d)),
                  w !== d &&
                    (i = d.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", oe, !1)
                      : i.attachEvent && i.attachEvent("onunload", oe)),
                  (n.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(d.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = K.test(d.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (h.appendChild(e).id = b),
                      !d.getElementsByName || !d.getElementsByName(b).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (y = []),
                  (v = []),
                  (n.qsa = K.test(d.querySelectorAll)) &&
                    (ce(function (e) {
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        b +
                        "'></a><select id='" +
                        b +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + M + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + M + "*(?:value|" + R + ")"),
                        e.querySelectorAll("[id~=" + b + "-]").length ||
                          v.push("~="),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + b + "+*").length ||
                          v.push(".#.+[+~]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = d.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + M + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = K.test(
                    (m =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = m.call(e, "*")),
                        m.call(e, "[s!='']:x"),
                        y.push("!=", $);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (y = y.length && new RegExp(y.join("|"))),
                  (t = K.test(h.compareDocumentPosition)),
                  (x =
                    t || K.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (A = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e === d || (e.ownerDocument === w && x(w, e))
                              ? -1
                              : t === d || (t.ownerDocument === w && x(w, t))
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!i || !o)
                          return e === d
                            ? -1
                            : t === d
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : c
                            ? P(c, e) - P(c, t)
                            : 0;
                        if (i === o) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[r] === s[r]; ) r++;
                        return r
                          ? pe(a[r], s[r])
                          : a[r] === w
                          ? -1
                          : s[r] === w
                          ? 1
                          : 0;
                      }),
                  d)
                : d;
            }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== d && p(e),
              n.matchesSelector &&
                g &&
                !N[t + " "] &&
                (!y || !y.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var r = m.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                N(t, !0);
              }
            return se(t, d, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && D.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(re, ie);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(A),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = se.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
          (r = se.selectors =
            {
              cacheLength: 50,
              createPseudo: le,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": {
                  dir: "parentNode",
                  first: !0,
                },
                " ": {
                  dir: "parentNode",
                },
                "+": {
                  dir: "previousSibling",
                  first: !0,
                },
                "~": {
                  dir: "previousSibling",
                },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          X.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = E[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                      E(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = se.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          f,
                          p,
                          d,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          y = s && t.nodeName.toLowerCase(),
                          m = !u && !s,
                          x = !1;
                        if (v) {
                          if (o) {
                            for (; g; ) {
                              for (p = t; (p = p[g]); )
                                if (
                                  s
                                    ? p.nodeName.toLowerCase() === y
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && m)
                          ) {
                            for (
                              x =
                                (d =
                                  (l =
                                    (c =
                                      (f = (p = v)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]) && l[2],
                                p = d && v.childNodes[d];
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++x && p === t) {
                                c[e] = [T, d, x];
                                break;
                              }
                          } else if (
                            (m &&
                              (x = d =
                                (l =
                                  (c =
                                    (f = (p = t)[b] || (p[b] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && l[1]),
                            !1 === x)
                          )
                            for (
                              ;
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                              ((s
                                ? p.nodeName.toLowerCase() !== y
                                : 1 !== p.nodeType) ||
                                !++x ||
                                (m &&
                                  ((c =
                                    (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                    (f[p.uniqueID] = {}))[e] = [T, x]),
                                p !== t));

                            );
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      se.error("unsupported pseudo: " + e);
                  return i[b]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; )
                              e[(r = P(e, o[a]))] = !(n[r] = o[a]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    r = s(e.replace(B, "$1"));
                  return r[b]
                    ? le(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: le(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: le(function (e) {
                  return (
                    V.test(e || "") || se.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return J.test(e.nodeName);
                },
                input: function (e) {
                  return Q.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ve(function () {
                  return [0];
                }),
                last: ve(function (e, t) {
                  return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ve(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }),
          (r.pseudos.nth = r.pseudos.eq),
          {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
          }))
            r.pseudos[t] = de(t);
          for (t in {
            submit: !0,
            reset: !0,
          })
            r.pseudos[t] = he(t);
          function me() {}
          function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function be(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = C++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    p = [T, s];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((c =
                            (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((l = c[o]) && l[0] === T && l[1] === s)
                            return (p[2] = l[2]);
                          if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
          }
          function Ce(e, t, n, r, i, o) {
            return (
              r && !r[b] && (r = Ce(r)),
              i && !i[b] && (i = Ce(i, o)),
              le(function (o, a, s, u) {
                var l,
                  c,
                  f,
                  p = [],
                  d = [],
                  h = a.length,
                  g =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!o && t) ? g : Te(g, p, e, s, u),
                  y = n ? (i || (o ? e : h || r) ? [] : a) : v;
                if ((n && n(v, y, s, u), r))
                  for (l = Te(y, d), r(l, [], s, u), c = l.length; c--; )
                    (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (l = [], c = y.length; c--; )
                        (f = y[c]) && l.push((v[c] = f));
                      i(null, (y = []), l, u);
                    }
                    for (c = y.length; c--; )
                      (f = y[c]) &&
                        (l = i ? P(o, f) : p[c]) > -1 &&
                        (o[l] = !(a[l] = f));
                  }
                } else (y = Te(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, u) : H.apply(a, y);
              })
            );
          }
          function Ee(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                u = a ? 1 : 0,
                c = be(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = be(
                  function (e) {
                    return P(t, e) > -1;
                  },
                  s,
                  !0
                ),
                p = [
                  function (e, n, r) {
                    var i =
                      (!a && (r || n !== l)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              u < o;
              u++
            )
              if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                  for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                  return Ce(
                    u > 1 && we(p),
                    u > 1 &&
                      xe(
                        e.slice(0, u - 1).concat({
                          value: " " === e[u - 2].type ? "*" : "",
                        })
                      ).replace(B, "$1"),
                    n,
                    u < i && Ee(e.slice(u, i)),
                    i < o && Ee((e = e.slice(i))),
                    i < o && xe(e)
                  );
                }
                p.push(n);
              }
            return we(p);
          }
          return (
            (me.prototype = r.filters = r.pseudos),
            (r.setFilters = new me()),
            (a = se.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s; ) {
                  for (a in ((n && !(i = _.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                  (n = !1),
                  (i = z.exec(s)) &&
                    ((n = i.shift()),
                    o.push({
                      value: n,
                      type: i[0].replace(B, " "),
                    }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(i = G[a].exec(s)) ||
                      (l[a] && !(i = l[a](i))) ||
                      ((n = i.shift()),
                      o.push({
                        value: n,
                        type: a,
                        matches: i,
                      }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : k(e, u).slice(0);
              }),
            (s = se.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  s = S[e + " "];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                  (s = S(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, a, s, u, c) {
                          var f,
                            h,
                            v,
                            y = 0,
                            m = "0",
                            x = o && [],
                            b = [],
                            w = l,
                            C = o || (i && r.find.TAG("*", c)),
                            E = (T += null == w ? 1 : Math.random() || 0.1),
                            k = C.length;
                          for (
                            c && (l = a === d || a || c);
                            m !== k && null != (f = C[m]);
                            m++
                          ) {
                            if (i && f) {
                              for (
                                h = 0,
                                  a ||
                                    f.ownerDocument === d ||
                                    (p(f), (s = !g));
                                (v = e[h++]);

                              )
                                if (v(f, a || d, s)) {
                                  u.push(f);
                                  break;
                                }
                              c && (T = E);
                            }
                            n && ((f = !v && f) && y--, o && x.push(f));
                          }
                          if (((y += m), n && m !== y)) {
                            for (h = 0; (v = t[h++]); ) v(x, b, a, s);
                            if (o) {
                              if (y > 0)
                                for (; m--; )
                                  x[m] || b[m] || (b[m] = L.call(u));
                              b = Te(b);
                            }
                            H.apply(u, b),
                              c &&
                                !o &&
                                b.length > 0 &&
                                y + t.length > 1 &&
                                se.uniqueSort(u);
                          }
                          return c && ((T = E), (l = w)), x;
                        };
                      return n ? le(o) : o;
                    })(o, i)
                  )),
                    (s.selector = e);
                }
                return s;
              }),
            (u = se.select =
              function (e, t, n, i) {
                var o,
                  u,
                  l,
                  c,
                  f,
                  p = "function" == typeof e && e,
                  d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                  if (
                    (u = d[0] = d[0].slice(0)).length > 2 &&
                    "ID" === (l = u[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    p && (t = t.parentNode),
                      (e = e.slice(u.shift().value.length));
                  }
                  for (
                    o = G.needsContext.test(e) ? 0 : u.length;
                    o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (f = r.find[c]) &&
                      (i = f(
                        l.matches[0].replace(te, ne),
                        (ee.test(u[0].type) && ye(t.parentNode)) || t
                      ))
                    ) {
                      if ((u.splice(o, 1), !(e = i.length && xe(u))))
                        return H.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (p || s(e, d))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && ye(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = b.split("").sort(A).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(R, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(r);
        (E.find = N),
          (E.expr = N.selectors),
          (E.expr[":"] = E.expr.pseudos),
          (E.uniqueSort = E.unique = N.uniqueSort),
          (E.text = N.getText),
          (E.isXMLDoc = N.isXML),
          (E.contains = N.contains),
          (E.escapeSelector = N.escape);
        var A = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && E(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          D = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          j = E.expr.match.needsContext;
        function L(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var q =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function H(e, t, n) {
          return m(t)
            ? E.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? E.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? E.grep(e, function (e) {
                return f.call(t, e) > -1 !== n;
              })
            : E.filter(t, e, n);
        }
        (E.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? E.find.matchesSelector(r, e)
                ? [r]
                : []
              : E.find.matches(
                  e,
                  E.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          E.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ("string" != typeof e)
                return this.pushStack(
                  E(e).filter(function () {
                    for (t = 0; t < r; t++)
                      if (E.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++)
                E.find(e, i[t], n);
              return r > 1 ? E.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(H(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(H(this, e || [], !0));
            },
            is: function (e) {
              return !!H(
                this,
                "string" == typeof e && j.test(e) ? E(e) : e || [],
                !1
              ).length;
            },
          });
        var O,
          P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((E.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || O), "string" == typeof e)) {
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : P.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof E ? t[0] : t),
                E.merge(
                  this,
                  E.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : a,
                    !0
                  )
                ),
                q.test(r[1]) && E.isPlainObject(t))
              )
                for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (i = a.getElementById(r[2])) &&
                ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(E)
            : E.makeArray(e, this);
        }).prototype = E.fn),
          (O = E(a));
        var R = /^(?:parents|prev(?:Until|All))/,
          M = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0,
          };
        function I(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        E.fn.extend({
          has: function (e) {
            var t = E(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && E(e);
            if (!j.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a
                      ? a.index(n) > -1
                      : 1 === n.nodeType && E.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? f.call(E(e), this[0])
                : f.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          E.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return A(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return A(e, "parentNode", n);
              },
              next: function (e) {
                return I(e, "nextSibling");
              },
              prev: function (e) {
                return I(e, "previousSibling");
              },
              nextAll: function (e) {
                return A(e, "nextSibling");
              },
              prevAll: function (e) {
                return A(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return A(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return A(e, "previousSibling", n);
              },
              siblings: function (e) {
                return D((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return D(e.firstChild);
              },
              contents: function (e) {
                return void 0 !== e.contentDocument
                  ? e.contentDocument
                  : (L(e, "template") && (e = e.content || e),
                    E.merge([], e.childNodes));
              },
            },
            function (e, t) {
              E.fn[e] = function (n, r) {
                var i = E.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" == typeof r && (i = E.filter(r, i)),
                  this.length > 1 &&
                    (M[e] || E.uniqueSort(i), R.test(e) && i.reverse()),
                  this.pushStack(i)
                );
              };
            }
          );
        var W = /[^\x20\t\r\n\f]+/g;
        function $(e) {
          return e;
        }
        function F(e) {
          throw e;
        }
        function B(e, t, n, r) {
          var i;
          try {
            e && m((i = e.promise))
              ? i.call(e).done(t).fail(n)
              : e && m((i = e.then))
              ? i.call(e, t, n)
              : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (E.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                  var t = {};
                  return (
                    E.each(e.match(W) || [], function (e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : E.extend({}, e);
          var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
              for (i = i || e.once, r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length; )
                  !1 === o[s].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((s = o.length), (n = !1));
              e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
              add: function () {
                return (
                  o &&
                    (n && !t && ((s = o.length - 1), a.push(n)),
                    (function t(n) {
                      E.each(n, function (n, r) {
                        m(r)
                          ? (e.unique && l.has(r)) || o.push(r)
                          : r && r.length && "string" !== T(r) && t(r);
                      });
                    })(arguments),
                    n && !t && u()),
                  this
                );
              },
              remove: function () {
                return (
                  E.each(arguments, function (e, t) {
                    for (var n; (n = E.inArray(t, o, n)) > -1; )
                      o.splice(n, 1), n <= s && s--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? E.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function () {
                return o && (o = []), this;
              },
              disable: function () {
                return (i = a = []), (o = n = ""), this;
              },
              disabled: function () {
                return !o;
              },
              lock: function () {
                return (i = a = []), n || t || (o = n = ""), this;
              },
              locked: function () {
                return !!i;
              },
              fireWith: function (e, n) {
                return (
                  i ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    a.push(n),
                    t || u()),
                  this
                );
              },
              fire: function () {
                return l.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return l;
        }),
          E.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    E.Callbacks("memory"),
                    E.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    E.Callbacks("once memory"),
                    E.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    E.Callbacks("once memory"),
                    E.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                n = "pending",
                i = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return i.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return E.Deferred(function (n) {
                      E.each(t, function (t, r) {
                        var i = m(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && m(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, n, i) {
                    var o = 0;
                    function a(e, t, n, i) {
                      return function () {
                        var s = this,
                          u = arguments,
                          l = function () {
                            var r, l;
                            if (!(e < o)) {
                              if ((r = n.apply(s, u)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (l =
                                r &&
                                ("object" == typeof r ||
                                  "function" == typeof r) &&
                                r.then),
                                m(l)
                                  ? i
                                    ? l.call(r, a(o, t, $, i), a(o, t, F, i))
                                    : (o++,
                                      l.call(
                                        r,
                                        a(o, t, $, i),
                                        a(o, t, F, i),
                                        a(o, t, $, t.notifyWith)
                                      ))
                                  : (n !== $ && ((s = void 0), (u = [r])),
                                    (i || t.resolveWith)(s, u));
                            }
                          },
                          c = i
                            ? l
                            : function () {
                                try {
                                  l();
                                } catch (r) {
                                  E.Deferred.exceptionHook &&
                                    E.Deferred.exceptionHook(r, c.stackTrace),
                                    e + 1 >= o &&
                                      (n !== F && ((s = void 0), (u = [r])),
                                      t.rejectWith(s, u));
                                }
                              };
                        e
                          ? c()
                          : (E.Deferred.getStackHook &&
                              (c.stackTrace = E.Deferred.getStackHook()),
                            r.setTimeout(c));
                      };
                    }
                    return E.Deferred(function (r) {
                      t[0][3].add(a(0, r, m(i) ? i : $, r.notifyWith)),
                        t[1][3].add(a(0, r, m(e) ? e : $)),
                        t[2][3].add(a(0, r, m(n) ? n : F));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? E.extend(e, i) : i;
                  },
                },
                o = {};
              return (
                E.each(t, function (e, r) {
                  var a = r[2],
                    s = r[5];
                  (i[r[1]] = a.add),
                    s &&
                      a.add(
                        function () {
                          n = s;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    a.add(r[3].fire),
                    (o[r[0]] = function () {
                      return (
                        o[r[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (o[r[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                e && e.call(o, o),
                o
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                i = u.call(arguments),
                o = E.Deferred(),
                a = function (e) {
                  return function (n) {
                    (r[e] = this),
                      (i[e] = arguments.length > 1 ? u.call(arguments) : n),
                      --t || o.resolveWith(r, i);
                  };
                };
              if (
                t <= 1 &&
                (B(e, o.done(a(n)).resolve, o.reject, !t),
                "pending" === o.state() || m(i[n] && i[n].then))
              )
                return o.then();
              for (; n--; ) B(i[n], a(n), o.reject);
              return o.promise();
            },
          });
        var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (E.Deferred.exceptionHook = function (e, t) {
          r.console &&
            r.console.warn &&
            e &&
            _.test(e.name) &&
            r.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (E.readyException = function (e) {
            r.setTimeout(function () {
              throw e;
            });
          });
        var z = E.Deferred();
        function U() {
          a.removeEventListener("DOMContentLoaded", U),
            r.removeEventListener("load", U),
            E.ready();
        }
        (E.fn.ready = function (e) {
          return (
            z.then(e).catch(function (e) {
              E.readyException(e);
            }),
            this
          );
        }),
          E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --E.readyWait : E.isReady) ||
                ((E.isReady = !0),
                (!0 !== e && --E.readyWait > 0) || z.resolveWith(a, [E]));
            },
          }),
          (E.ready.then = z.then),
          "complete" === a.readyState ||
          ("loading" !== a.readyState && !a.documentElement.doScroll)
            ? r.setTimeout(E.ready)
            : (a.addEventListener("DOMContentLoaded", U),
              r.addEventListener("load", U));
        var X = function (e, t, n, r, i, o, a) {
            var s = 0,
              u = e.length,
              l = null == n;
            if ("object" === T(n))
              for (s in ((i = !0), n)) X(e, t, s, n[s], !0, o, a);
            else if (
              void 0 !== r &&
              ((i = !0),
              m(r) || (a = !0),
              l &&
                (a
                  ? (t.call(e, r), (t = null))
                  : ((l = t),
                    (t = function (e, t, n) {
                      return l.call(E(e), n);
                    }))),
              t)
            )
              for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
          },
          V = /^-ms-/,
          G = /-([a-z])/g;
        function Y(e, t) {
          return t.toUpperCase();
        }
        function Q(e) {
          return e.replace(V, "ms-").replace(G, Y);
        }
        var J = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function K() {
          this.expando = E.expando + K.uid++;
        }
        (K.uid = 1),
          (K.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  J(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              );
            },
            set: function (e, t, n) {
              var r,
                i = this.cache(e);
              if ("string" == typeof t) i[Q(t)] = n;
              else for (r in t) i[Q(r)] = t[r];
              return i;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][Q(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(Q)
                    : (t = Q(t)) in r
                    ? [t]
                    : t.match(W) || []).length;
                  for (; n--; ) delete r[t[n]];
                }
                (void 0 === t || E.isEmptyObject(r)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !E.isEmptyObject(t);
            },
          });
        var Z = new K(),
          ee = new K(),
          te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ne = /[A-Z]/g;
        function re(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = "data-" + t.replace(ne, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(r)))
            ) {
              try {
                n = (function (e) {
                  return (
                    "true" === e ||
                    ("false" !== e &&
                      ("null" === e
                        ? null
                        : e === +e + ""
                        ? +e
                        : te.test(e)
                        ? JSON.parse(e)
                        : e))
                  );
                })(n);
              } catch (e) {}
              ee.set(e, t, n);
            } else n = void 0;
          return n;
        }
        E.extend({
          hasData: function (e) {
            return ee.hasData(e) || Z.hasData(e);
          },
          data: function (e, t, n) {
            return ee.access(e, t, n);
          },
          removeData: function (e, t) {
            ee.remove(e, t);
          },
          _data: function (e, t, n) {
            return Z.access(e, t, n);
          },
          _removeData: function (e, t) {
            Z.remove(e, t);
          },
        }),
          E.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((i = ee.get(o)),
                  1 === o.nodeType && !Z.get(o, "hasDataAttrs"))
                ) {
                  for (n = a.length; n--; )
                    a[n] &&
                      0 === (r = a[n].name).indexOf("data-") &&
                      ((r = Q(r.slice(5))), re(o, r, i[r]));
                  Z.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" == typeof e
                ? this.each(function () {
                    ee.set(this, e);
                  })
                : X(
                    this,
                    function (t) {
                      var n;
                      if (o && void 0 === t)
                        return void 0 !== (n = ee.get(o, e)) ||
                          void 0 !== (n = re(o, e))
                          ? n
                          : void 0;
                      this.each(function () {
                        ee.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                ee.remove(this, e);
              });
            },
          }),
          E.extend({
            queue: function (e, t, n) {
              var r;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (r = Z.get(e, t)),
                  n &&
                    (!r || Array.isArray(n)
                      ? (r = Z.access(e, t, E.makeArray(n)))
                      : r.push(n)),
                  r || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    e,
                    function () {
                      E.dequeue(e, t);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                Z.get(e, n) ||
                Z.access(e, n, {
                  empty: E.Callbacks("once memory").add(function () {
                    Z.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          E.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? E.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = E.queue(this, e, t);
                      E._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          E.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                E.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = E.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                a--;

              )
                (n = Z.get(o[a], e + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(s));
              return s(), i.promise(t);
            },
          });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
          ae = ["Top", "Right", "Bottom", "Left"],
          se = a.documentElement,
          ue = function (e) {
            return E.contains(e.ownerDocument, e);
          },
          le = {
            composed: !0,
          };
        se.getRootNode &&
          (ue = function (e) {
            return (
              E.contains(e.ownerDocument, e) ||
              e.getRootNode(le) === e.ownerDocument
            );
          });
        var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ue(e) &&
                "none" === E.css(e, "display"))
            );
          },
          fe = function (e, t, n, r) {
            var i,
              o,
              a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
            return i;
          };
        function pe(e, t, n, r) {
          var i,
            o,
            a = 20,
            s = r
              ? function () {
                  return r.cur();
                }
              : function () {
                  return E.css(e, t, "");
                },
            u = s(),
            l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
            c =
              e.nodeType &&
              (E.cssNumber[t] || ("px" !== l && +u)) &&
              oe.exec(E.css(e, t));
          if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--; )
              E.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                (c /= o);
            (c *= 2), E.style(e, t, c + l), (n = n || []);
          }
          return (
            n &&
              ((c = +c || +u || 0),
              (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
          );
        }
        var de = {};
        function he(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = de[r];
          return (
            i ||
            ((t = n.body.appendChild(n.createElement(r))),
            (i = E.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            (de[r] = i),
            i)
          );
        }
        function ge(e, t) {
          for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
              ((n = r.style.display),
              t
                ? ("none" === n &&
                    ((i[o] = Z.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                  "" === r.style.display && ce(r) && (i[o] = he(r)))
                : "none" !== n && ((i[o] = "none"), Z.set(r, "display", n)));
          for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
          return e;
        }
        E.fn.extend({
          show: function () {
            return ge(this, !0);
          },
          hide: function () {
            return ge(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  ce(this) ? E(this).show() : E(this).hide();
                });
          },
        });
        var ve = /^(?:checkbox|radio)$/i,
          ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          me = /^$|^module$|\/(?:java|ecma)script/i,
          xe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
        function be(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && L(e, t)) ? E.merge([e], n) : n
          );
        }
        function we(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
        }
        (xe.optgroup = xe.option),
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
          (xe.th = xe.td);
        var Te,
          Ce,
          Ee = /<|&#?\w+;/;
        function ke(e, t, n, r, i) {
          for (
            var o,
              a,
              s,
              u,
              l,
              c,
              f = t.createDocumentFragment(),
              p = [],
              d = 0,
              h = e.length;
            d < h;
            d++
          )
            if ((o = e[d]) || 0 === o)
              if ("object" === T(o)) E.merge(p, o.nodeType ? [o] : o);
              else if (Ee.test(o)) {
                for (
                  a = a || f.appendChild(t.createElement("div")),
                    s = (ye.exec(o) || ["", ""])[1].toLowerCase(),
                    u = xe[s] || xe._default,
                    a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                    c = u[0];
                  c--;

                )
                  a = a.lastChild;
                E.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
              } else p.push(t.createTextNode(o));
          for (f.textContent = "", d = 0; (o = p[d++]); )
            if (r && E.inArray(o, r) > -1) i && i.push(o);
            else if (
              ((l = ue(o)), (a = be(f.appendChild(o), "script")), l && we(a), n)
            )
              for (c = 0; (o = a[c++]); ) me.test(o.type || "") && n.push(o);
          return f;
        }
        (Te = a.createDocumentFragment().appendChild(a.createElement("div"))),
          (Ce = a.createElement("input")).setAttribute("type", "radio"),
          Ce.setAttribute("checked", "checked"),
          Ce.setAttribute("name", "t"),
          Te.appendChild(Ce),
          (y.checkClone = Te.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (Te.innerHTML = "<textarea>x</textarea>"),
          (y.noCloneChecked = !!Te.cloneNode(!0).lastChild.defaultValue);
        var Se = /^key/,
          Ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ae = /^([^.]*)(?:\.(.+)|)/;
        function De() {
          return !0;
        }
        function je() {
          return !1;
        }
        function Le(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return a.activeElement;
                } catch (e) {}
              })()) ==
            ("focus" === t)
          );
        }
        function qe(e, t, n, r, i, o) {
          var a, s;
          if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
              qe(e, s, n, r, t[s], o);
            return e;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = void 0))
              : null == i &&
                ("string" == typeof n
                  ? ((i = r), (r = void 0))
                  : ((i = r), (r = n), (n = void 0))),
            !1 === i)
          )
            i = je;
          else if (!i) return e;
          return (
            1 === o &&
              ((a = i),
              (i = function (e) {
                return E().off(e), a.apply(this, arguments);
              }),
              (i.guid = a.guid || (a.guid = E.guid++))),
            e.each(function () {
              E.event.add(this, t, i, r, n);
            })
          );
        }
        function He(e, t, n) {
          n
            ? (Z.set(e, t, !1),
              E.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var r,
                    i,
                    o = Z.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (o.length)
                      (E.event.special[t] || {}).delegateType &&
                        e.stopPropagation();
                    else if (
                      ((o = u.call(arguments)),
                      Z.set(this, t, o),
                      (r = n(this, t)),
                      this[t](),
                      o !== (i = Z.get(this, t)) || r
                        ? Z.set(this, t, !1)
                        : (i = {}),
                      o !== i)
                    )
                      return (
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        i.value
                      );
                  } else
                    o.length &&
                      (Z.set(this, t, {
                        value: E.event.trigger(
                          E.extend(o[0], E.Event.prototype),
                          o.slice(1),
                          this
                        ),
                      }),
                      e.stopImmediatePropagation());
                },
              }))
            : void 0 === Z.get(e, t) && E.event.add(e, t, De);
        }
        (E.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = Z.get(e);
            if (v)
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                  i && E.find.matchesSelector(se, i),
                  n.guid || (n.guid = E.guid++),
                  (u = v.events) || (u = v.events = {}),
                  (a = v.handle) ||
                    (a = v.handle =
                      function (t) {
                        return void 0 !== E && E.event.triggered !== t.type
                          ? E.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  l = (t = (t || "").match(W) || [""]).length;
                l--;

              )
                (d = g = (s = Ae.exec(t[l]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  d &&
                    ((f = E.event.special[d] || {}),
                    (d = (i ? f.delegateType : f.bindType) || d),
                    (f = E.event.special[d] || {}),
                    (c = E.extend(
                      {
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join("."),
                      },
                      o
                    )),
                    (p = u[d]) ||
                      (((p = u[d] = []).delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                        (e.addEventListener && e.addEventListener(d, a))),
                    f.add &&
                      (f.add.call(e, c),
                      c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    (E.event.global[d] = !0));
          },
          remove: function (e, t, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = Z.hasData(e) && Z.get(e);
            if (v && (u = v.events)) {
              for (l = (t = (t || "").match(W) || [""]).length; l--; )
                if (
                  ((d = g = (s = Ae.exec(t[l]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  d)
                ) {
                  for (
                    f = E.event.special[d] || {},
                      p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                      s =
                        s[2] &&
                        new RegExp(
                          "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      a = o = p.length;
                    o--;

                  )
                    (c = p[o]),
                      (!i && g !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (s && !s.test(c.namespace)) ||
                        (r &&
                          r !== c.selector &&
                          ("**" !== r || !c.selector)) ||
                        (p.splice(o, 1),
                        c.selector && p.delegateCount--,
                        f.remove && f.remove.call(e, c));
                  a &&
                    !p.length &&
                    ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                      E.removeEvent(e, d, v.handle),
                    delete u[d]);
                } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
              E.isEmptyObject(u) && Z.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s = E.event.fix(e),
              u = new Array(arguments.length),
              l = (Z.get(this, "events") || {})[s.type] || [],
              c = E.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++)
              u[t] = arguments[t];
            if (
              ((s.delegateTarget = this),
              !c.preDispatch || !1 !== c.preDispatch.call(this, s))
            ) {
              for (
                a = E.event.handlers.call(this, s, l), t = 0;
                (i = a[t++]) && !s.isPropagationStopped();

              )
                for (
                  s.currentTarget = i.elem, n = 0;
                  (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

                )
                  (s.rnamespace &&
                    !1 !== o.namespace &&
                    !s.rnamespace.test(o.namespace)) ||
                    ((s.handleObj = o),
                    (s.data = o.data),
                    void 0 !==
                      (r = (
                        (E.event.special[o.origType] || {}).handle || o.handler
                      ).apply(i.elem, u)) &&
                      !1 === (s.result = r) &&
                      (s.preventDefault(), s.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s = [],
              u = t.delegateCount,
              l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (
                  1 === l.nodeType &&
                  ("click" !== e.type || !0 !== l.disabled)
                ) {
                  for (o = [], a = {}, n = 0; n < u; n++)
                    void 0 === a[(i = (r = t[n]).selector + " ")] &&
                      (a[i] = r.needsContext
                        ? E(i, this).index(l) > -1
                        : E.find(i, this, null, [l]).length),
                      a[i] && o.push(r);
                  o.length &&
                    s.push({
                      elem: l,
                      handlers: o,
                    });
                }
            return (
              (l = this),
              u < t.length &&
                s.push({
                  elem: l,
                  handlers: t.slice(u),
                }),
              s
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(E.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: m(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (e) {
            return e[E.expando] ? e : new E.Event(e);
          },
          special: {
            load: {
              noBubble: !0,
            },
            click: {
              setup: function (e) {
                var t = this || e;
                return (
                  ve.test(t.type) &&
                    t.click &&
                    L(t, "input") &&
                    He(t, "click", De),
                  !1
                );
              },
              trigger: function (e) {
                var t = this || e;
                return (
                  ve.test(t.type) && t.click && L(t, "input") && He(t, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (ve.test(t.type) &&
                    t.click &&
                    L(t, "input") &&
                    Z.get(t, "click")) ||
                  L(t, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (E.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (E.Event = function (e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? De
                    : je),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && E.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[E.expando] = !0);
          }),
          (E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: je,
            isPropagationStopped: je,
            isImmediatePropagationStopped: je,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = De),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = De),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = De),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          E.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (e) {
                var t = e.button;
                return null == e.which && Se.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== t && Ne.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                    ? 3
                    : 4 & t
                    ? 2
                    : 0
                  : e.which;
              },
            },
            E.event.addProp
          ),
          E.each(
            {
              focus: "focusin",
              blur: "focusout",
            },
            function (e, t) {
              E.event.special[e] = {
                setup: function () {
                  return He(this, e, Le), !1;
                },
                trigger: function () {
                  return He(this, e), !0;
                },
                delegateType: t,
              };
            }
          ),
          E.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              E.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = e.relatedTarget,
                    i = e.handleObj;
                  return (
                    (r && (r === this || E.contains(this, r))) ||
                      ((e.type = i.origType),
                      (n = i.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          E.fn.extend({
            on: function (e, t, n, r) {
              return qe(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return qe(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  E(e.delegateTarget).off(
                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = je),
                this.each(function () {
                  E.event.remove(this, e, n, t);
                })
              );
            },
          });
        var Oe =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          Pe = /<script|<style|<link/i,
          Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Ie(e, t) {
          return (
            (L(e, "table") &&
              L(11 !== t.nodeType ? t : t.firstChild, "tr") &&
              E(e).children("tbody")[0]) ||
            e
          );
        }
        function We(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function $e(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function Fe(e, t) {
          var n, r, i, o, a, s, u, l;
          if (1 === t.nodeType) {
            if (
              Z.hasData(e) &&
              ((o = Z.access(e)), (a = Z.set(t, o)), (l = o.events))
            )
              for (i in (delete a.handle, (a.events = {}), l))
                for (n = 0, r = l[i].length; n < r; n++)
                  E.event.add(t, i, l[i][n]);
            ee.hasData(e) &&
              ((s = ee.access(e)), (u = E.extend({}, s)), ee.set(t, u));
          }
        }
        function Be(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && ve.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function _e(e, t, n, r) {
          t = l.apply([], t);
          var i,
            o,
            a,
            s,
            u,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = m(h);
          if (
            g ||
            (p > 1 && "string" == typeof h && !y.checkClone && Re.test(h))
          )
            return e.each(function (i) {
              var o = e.eq(i);
              g && (t[0] = h.call(this, i, o.html())), _e(o, t, n, r);
            });
          if (
            p &&
            ((o = (i = ke(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
          ) {
            for (s = (a = E.map(be(i, "script"), We)).length; f < p; f++)
              (u = i),
                f !== d &&
                  ((u = E.clone(u, !0, !0)), s && E.merge(a, be(u, "script"))),
                n.call(e[f], u, f);
            if (s)
              for (
                c = a[a.length - 1].ownerDocument, E.map(a, $e), f = 0;
                f < s;
                f++
              )
                (u = a[f]),
                  me.test(u.type || "") &&
                    !Z.access(u, "globalEval") &&
                    E.contains(c, u) &&
                    (u.src && "module" !== (u.type || "").toLowerCase()
                      ? E._evalUrl &&
                        !u.noModule &&
                        E._evalUrl(u.src, {
                          nonce: u.nonce || u.getAttribute("nonce"),
                        })
                      : w(u.textContent.replace(Me, ""), u, c));
          }
          return e;
        }
        function ze(e, t, n) {
          for (
            var r, i = t ? E.filter(t, e) : e, o = 0;
            null != (r = i[o]);
            o++
          )
            n || 1 !== r.nodeType || E.cleanData(be(r)),
              r.parentNode &&
                (n && ue(r) && we(be(r, "script")),
                r.parentNode.removeChild(r));
          return e;
        }
        E.extend({
          htmlPrefilter: function (e) {
            return e.replace(Oe, "<$1></$2>");
          },
          clone: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s = e.cloneNode(!0),
              u = ue(e);
            if (
              !(
                y.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                E.isXMLDoc(e)
              )
            )
              for (a = be(s), r = 0, i = (o = be(e)).length; r < i; r++)
                Be(o[r], a[r]);
            if (t)
              if (n)
                for (
                  o = o || be(e), a = a || be(s), r = 0, i = o.length;
                  r < i;
                  r++
                )
                  Fe(o[r], a[r]);
              else Fe(e, s);
            return (
              (a = be(s, "script")).length > 0 && we(a, !u && be(e, "script")),
              s
            );
          },
          cleanData: function (e) {
            for (
              var t, n, r, i = E.event.special, o = 0;
              void 0 !== (n = e[o]);
              o++
            )
              if (J(n)) {
                if ((t = n[Z.expando])) {
                  if (t.events)
                    for (r in t.events)
                      i[r]
                        ? E.event.remove(n, r)
                        : E.removeEvent(n, r, t.handle);
                  n[Z.expando] = void 0;
                }
                n[ee.expando] && (n[ee.expando] = void 0);
              }
          },
        }),
          E.fn.extend({
            detach: function (e) {
              return ze(this, e, !0);
            },
            remove: function (e) {
              return ze(this, e);
            },
            text: function (e) {
              return X(
                this,
                function (e) {
                  return void 0 === e
                    ? E.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return _e(this, arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Ie(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return _e(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = Ie(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return _e(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return _e(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (E.cleanData(be(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return E.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return X(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !Pe.test(e) &&
                    !xe[(ye.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = E.htmlPrefilter(e);
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (E.cleanData(be(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return _e(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  E.inArray(this, e) < 0 &&
                    (E.cleanData(be(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          E.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              E.fn[e] = function (e) {
                for (
                  var n, r = [], i = E(e), o = i.length - 1, a = 0;
                  a <= o;
                  a++
                )
                  (n = a === o ? this : this.clone(!0)),
                    E(i[a])[t](n),
                    c.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var Ue = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
          Xe = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = r), t.getComputedStyle(e);
          },
          Ve = new RegExp(ae.join("|"), "i");
        function Ge(e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.style;
          return (
            (n = n || Xe(e)) &&
              ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                ue(e) ||
                (a = E.style(e, t)),
              !y.pixelBoxStyles() &&
                Ue.test(a) &&
                Ve.test(t) &&
                ((r = s.width),
                (i = s.minWidth),
                (o = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = r),
                (s.minWidth = i),
                (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
          );
        }
        function Ye(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (c) {
              (l.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (c.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                se.appendChild(l).appendChild(c);
              var e = r.getComputedStyle(c);
              (n = "1%" !== e.top),
                (u = 12 === t(e.marginLeft)),
                (c.style.right = "60%"),
                (s = 36 === t(e.right)),
                (i = 36 === t(e.width)),
                (c.style.position = "absolute"),
                (o = 12 === t(c.offsetWidth / 3)),
                se.removeChild(l),
                (c = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            i,
            o,
            s,
            u,
            l = a.createElement("div"),
            c = a.createElement("div");
          c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === c.style.backgroundClip),
            E.extend(y, {
              boxSizingReliable: function () {
                return e(), i;
              },
              pixelBoxStyles: function () {
                return e(), s;
              },
              pixelPosition: function () {
                return e(), n;
              },
              reliableMarginLeft: function () {
                return e(), u;
              },
              scrollboxSize: function () {
                return e(), o;
              },
            }));
        })();
        var Qe = ["Webkit", "Moz", "ms"],
          Je = a.createElement("div").style,
          Ke = {};
        function Ze(e) {
          var t = E.cssProps[e] || Ke[e];
          return (
            t ||
            (e in Je
              ? e
              : (Ke[e] =
                  (function (e) {
                    for (
                      var t = e[0].toUpperCase() + e.slice(1), n = Qe.length;
                      n--;

                    )
                      if ((e = Qe[n] + t) in Je) return e;
                  })(e) || e))
          );
        }
        var et = /^(none|table(?!-c[ea]).+)/,
          tt = /^--/,
          nt = {
            position: "absolute",
            visibility: "hidden",
            display: "block",
          },
          rt = {
            letterSpacing: "0",
            fontWeight: "400",
          };
        function it(e, t, n) {
          var r = oe.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function ot(e, t, n, r, i, o) {
          var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; a < 4; a += 2)
            "margin" === n && (u += E.css(e, n + ae[a], !0, i)),
              r
                ? ("content" === n && (u -= E.css(e, "padding" + ae[a], !0, i)),
                  "margin" !== n &&
                    (u -= E.css(e, "border" + ae[a] + "Width", !0, i)))
                : ((u += E.css(e, "padding" + ae[a], !0, i)),
                  "padding" !== n
                    ? (u += E.css(e, "border" + ae[a] + "Width", !0, i))
                    : (s += E.css(e, "border" + ae[a] + "Width", !0, i)));
          return (
            !r &&
              o >= 0 &&
              (u +=
                Math.max(
                  0,
                  Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      o -
                      u -
                      s -
                      0.5
                  )
                ) || 0),
            u
          );
        }
        function at(e, t, n) {
          var r = Xe(e),
            i =
              (!y.boxSizingReliable() || n) &&
              "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Ge(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
          if (Ue.test(a)) {
            if (!n) return a;
            a = "auto";
          }
          return (
            ((!y.boxSizingReliable() && i) ||
              "auto" === a ||
              (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
              e.getClientRects().length &&
              ((i = "border-box" === E.css(e, "boxSizing", !1, r)),
              (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) +
              ot(e, t, n || (i ? "border" : "content"), o, r, a) +
              "px"
          );
        }
        function st(e, t, n, r, i) {
          return new st.prototype.init(e, t, n, r, i);
        }
        E.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ge(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                a,
                s = Q(t),
                u = tt.test(t),
                l = e.style;
              if (
                (u || (t = Ze(s)),
                (a = E.cssHooks[t] || E.cssHooks[s]),
                void 0 === n)
              )
                return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                  ? i
                  : l[t];
              "string" === (o = typeof n) &&
                (i = oe.exec(n)) &&
                i[1] &&
                ((n = pe(e, t, i)), (o = "number")),
                null != n &&
                  n == n &&
                  ("number" !== o ||
                    u ||
                    (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
                  y.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                    (u ? l.setProperty(t, n) : (l[t] = n)));
            }
          },
          css: function (e, t, n, r) {
            var i,
              o,
              a,
              s = Q(t);
            return (
              tt.test(t) || (t = Ze(s)),
              (a = E.cssHooks[t] || E.cssHooks[s]) &&
                "get" in a &&
                (i = a.get(e, !0, n)),
              void 0 === i && (i = Ge(e, t, r)),
              "normal" === i && t in rt && (i = rt[t]),
              "" === n || n
                ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                : i
            );
          },
        }),
          E.each(["height", "width"], function (e, t) {
            E.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !et.test(E.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? at(e, t, r)
                    : fe(e, nt, function () {
                        return at(e, t, r);
                      });
              },
              set: function (e, n, r) {
                var i,
                  o = Xe(e),
                  a = !y.scrollboxSize() && "absolute" === o.position,
                  s = (a || r) && "border-box" === E.css(e, "boxSizing", !1, o),
                  u = r ? ot(e, t, r, s, o) : 0;
                return (
                  s &&
                    a &&
                    (u -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(o[t]) -
                        ot(e, t, "border", !1, o) -
                        0.5
                    )),
                  u &&
                    (i = oe.exec(n)) &&
                    "px" !== (i[3] || "px") &&
                    ((e.style[t] = n), (n = E.css(e, t))),
                  it(0, n, u)
                );
              },
            };
          }),
          (E.cssHooks.marginLeft = Ye(y.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Ge(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    fe(
                      e,
                      {
                        marginLeft: 0,
                      },
                      function () {
                        return e.getBoundingClientRect().left;
                      }
                    )) + "px"
              );
          })),
          E.each(
            {
              margin: "",
              padding: "",
              border: "Width",
            },
            function (e, t) {
              (E.cssHooks[e + t] = {
                expand: function (n) {
                  for (
                    var r = 0,
                      i = {},
                      o = "string" == typeof n ? n.split(" ") : [n];
                    r < 4;
                    r++
                  )
                    i[e + ae[r] + t] = o[r] || o[r - 2] || o[0];
                  return i;
                },
              }),
                "margin" !== e && (E.cssHooks[e + t].set = it);
            }
          ),
          E.fn.extend({
            css: function (e, t) {
              return X(
                this,
                function (e, t, n) {
                  var r,
                    i,
                    o = {},
                    a = 0;
                  if (Array.isArray(t)) {
                    for (r = Xe(e), i = t.length; a < i; a++)
                      o[t[a]] = E.css(e, t[a], !1, r);
                    return o;
                  }
                  return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (E.Tween = st),
          (st.prototype = {
            constructor: st,
            init: function (e, t, n, r, i, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = i || E.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (E.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = st.propHooks[this.prop];
              return e && e.get ? e.get(this) : st.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = st.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t =
                      E.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : st.propHooks._default.set(this),
                this
              );
            },
          }),
          (st.prototype.init.prototype = st.prototype),
          (st.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                E.fx.step[e.prop]
                  ? E.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!E.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : E.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (st.propHooks.scrollTop = st.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (E.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (E.fx = st.prototype.init),
          (E.fx.step = {});
        var ut,
          lt,
          ct = /^(?:toggle|show|hide)$/,
          ft = /queueHooks$/;
        function pt() {
          lt &&
            (!1 === a.hidden && r.requestAnimationFrame
              ? r.requestAnimationFrame(pt)
              : r.setTimeout(pt, E.fx.interval),
            E.fx.tick());
        }
        function dt() {
          return (
            r.setTimeout(function () {
              ut = void 0;
            }),
            (ut = Date.now())
          );
        }
        function ht(e, t) {
          var n,
            r = 0,
            i = {
              height: e,
            };
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ae[r])] = i["padding" + n] = e;
          return t && (i.opacity = i.width = e), i;
        }
        function gt(e, t, n) {
          for (
            var r,
              i = (vt.tweeners[t] || []).concat(vt.tweeners["*"]),
              o = 0,
              a = i.length;
            o < a;
            o++
          )
            if ((r = i[o].call(n, t, e))) return r;
        }
        function vt(e, t, n) {
          var r,
            i,
            o = 0,
            a = vt.prefilters.length,
            s = E.Deferred().always(function () {
              delete u.elem;
            }),
            u = function () {
              if (i) return !1;
              for (
                var t = ut || dt(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  r = 1 - (n / l.duration || 0),
                  o = 0,
                  a = l.tweens.length;
                o < a;
                o++
              )
                l.tweens[o].run(r);
              return (
                s.notifyWith(e, [l, r, n]),
                r < 1 && a
                  ? n
                  : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
              );
            },
            l = s.promise({
              elem: e,
              props: E.extend({}, t),
              opts: E.extend(
                !0,
                {
                  specialEasing: {},
                  easing: E.easing._default,
                },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: ut || dt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = E.Tween(
                  e,
                  l.opts,
                  t,
                  n,
                  l.opts.specialEasing[t] || l.opts.easing
                );
                return l.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return (
                  t
                    ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                    : s.rejectWith(e, [l, t]),
                  this
                );
              },
            }),
            c = l.props;
          for (
            !(function (e, t) {
              var n, r, i, o, a;
              for (n in e)
                if (
                  ((i = t[(r = Q(n))]),
                  (o = e[n]),
                  Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                  n !== r && ((e[r] = o), delete e[n]),
                  (a = E.cssHooks[r]) && ("expand" in a))
                )
                  for (n in ((o = a.expand(o)), delete e[r], o))
                    (n in e) || ((e[n] = o[n]), (t[n] = i));
                else t[r] = i;
            })(c, l.opts.specialEasing);
            o < a;
            o++
          )
            if ((r = vt.prefilters[o].call(l, e, c, l.opts)))
              return (
                m(r.stop) &&
                  (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            E.map(c, gt, l),
            m(l.opts.start) && l.opts.start.call(e, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            E.fx.timer(
              E.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue,
              })
            ),
            l
          );
        }
        (E.Animation = E.extend(vt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return pe(n.elem, e, oe.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(W));
            for (var n, r = 0, i = e.length; r < i; r++)
              (n = e[r]),
                (vt.tweeners[n] = vt.tweeners[n] || []),
                vt.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ce(e),
                v = Z.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (a = E._queueHooks(e, "fx")).unqueued &&
                  ((a.unqueued = 0),
                  (s = a.empty.fire),
                  (a.empty.fire = function () {
                    a.unqueued || s();
                  })),
                a.unqueued++,
                p.always(function () {
                  p.always(function () {
                    a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                  });
                })),
              t))
                if (((i = t[r]), ct.test(i))) {
                  if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (g ? "hide" : "show"))
                  ) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0;
                  }
                  d[r] = (v && v[r]) || E.style(e, r);
                }
              if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (l = v && v.display) && (l = Z.get(e, "display")),
                  "none" === (c = E.css(e, "display")) &&
                    (l
                      ? (c = l)
                      : (ge([e], !0),
                        (l = e.style.display || l),
                        (c = E.css(e, "display")),
                        ge([e]))),
                  ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === E.css(e, "float") &&
                    (u ||
                      (p.done(function () {
                        h.display = l;
                      }),
                      null == l &&
                        ((c = h.display), (l = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                  ((h.overflow = "hidden"),
                  p.always(function () {
                    (h.overflow = n.overflow[0]),
                      (h.overflowX = n.overflow[1]),
                      (h.overflowY = n.overflow[2]);
                  })),
                (u = !1),
                d))
                  u ||
                    (v
                      ? "hidden" in v && (g = v.hidden)
                      : (v = Z.access(e, "fxshow", {
                          display: l,
                        })),
                    o && (v.hidden = !g),
                    g && ge([e], !0),
                    p.done(function () {
                      for (r in (g || ge([e]), Z.remove(e, "fxshow"), d))
                        E.style(e, r, d[r]);
                    })),
                    (u = gt(g ? v[r] : 0, r, p)),
                    r in v ||
                      ((v[r] = u.start),
                      g && ((u.end = u.start), (u.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
          },
        })),
          (E.speed = function (e, t, n) {
            var r =
              e && "object" == typeof e
                ? E.extend({}, e)
                : {
                    complete: n || (!n && t) || (m(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !m(t) && t),
                  };
            return (
              E.fx.off
                ? (r.duration = 0)
                : "number" != typeof r.duration &&
                  (r.duration in E.fx.speeds
                    ? (r.duration = E.fx.speeds[r.duration])
                    : (r.duration = E.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                m(r.old) && r.old.call(this),
                  r.queue && E.dequeue(this, r.queue);
              }),
              r
            );
          }),
          E.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(ce).css("opacity", 0).show().end().animate(
                {
                  opacity: t,
                },
                e,
                n,
                r
              );
            },
            animate: function (e, t, n, r) {
              var i = E.isEmptyObject(e),
                o = E.speed(t, n, r),
                a = function () {
                  var t = vt(this, E.extend({}, e), o);
                  (i || Z.get(this, "finish")) && t.stop(!0);
                };
              return (
                (a.finish = a),
                i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
              );
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    i = null != e && e + "queueHooks",
                    o = E.timers,
                    a = Z.get(this);
                  if (i) a[i] && a[i].stop && r(a[i]);
                  else for (i in a) a[i] && a[i].stop && ft.test(i) && r(a[i]);
                  for (i = o.length; i--; )
                    o[i].elem !== this ||
                      (null != e && o[i].queue !== e) ||
                      (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                  (!t && n) || E.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = Z.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = E.timers,
                    a = r ? r.length : 0;
                  for (
                    n.finish = !0,
                      E.queue(this, e, []),
                      i && i.stop && i.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this &&
                      o[t].queue === e &&
                      (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          E.each(["toggle", "show", "hide"], function (e, t) {
            var n = E.fn[t];
            E.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(ht(t, !0), e, r, i);
            };
          }),
          E.each(
            {
              slideDown: ht("show"),
              slideUp: ht("hide"),
              slideToggle: ht("toggle"),
              fadeIn: {
                opacity: "show",
              },
              fadeOut: {
                opacity: "hide",
              },
              fadeToggle: {
                opacity: "toggle",
              },
            },
            function (e, t) {
              E.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (E.timers = []),
          (E.fx.tick = function () {
            var e,
              t = 0,
              n = E.timers;
            for (ut = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), (ut = void 0);
          }),
          (E.fx.timer = function (e) {
            E.timers.push(e), E.fx.start();
          }),
          (E.fx.interval = 13),
          (E.fx.start = function () {
            lt || ((lt = !0), pt());
          }),
          (E.fx.stop = function () {
            lt = null;
          }),
          (E.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400,
          }),
          (E.fn.delay = function (e, t) {
            return (
              (e = (E.fx && E.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var i = r.setTimeout(t, e);
                n.stop = function () {
                  r.clearTimeout(i);
                };
              })
            );
          }),
          (function () {
            var e = a.createElement("input"),
              t = a
                .createElement("select")
                .appendChild(a.createElement("option"));
            (e.type = "checkbox"),
              (y.checkOn = "" !== e.value),
              (y.optSelected = t.selected),
              ((e = a.createElement("input")).value = "t"),
              (e.type = "radio"),
              (y.radioValue = "t" === e.value);
          })();
        var yt,
          mt = E.expr.attrHandle;
        E.fn.extend({
          attr: function (e, t) {
            return X(this, E.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              E.removeAttr(this, e);
            });
          },
        }),
          E.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute
                  ? E.prop(e, t, n)
                  : ((1 === o && E.isXMLDoc(e)) ||
                      (i =
                        E.attrHooks[t.toLowerCase()] ||
                        (E.expr.match.bool.test(t) ? yt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void E.removeAttr(e, t)
                        : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : null == (r = E.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!y.radioValue && "radio" === t && L(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(W);
              if (i && 1 === e.nodeType)
                for (; (n = i[r++]); ) e.removeAttribute(n);
            },
          }),
          (yt = {
            set: function (e, t, n) {
              return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = mt[t] || E.find.attr;
            mt[t] = function (e, t, r) {
              var i,
                o,
                a = t.toLowerCase();
              return (
                r ||
                  ((o = mt[a]),
                  (mt[a] = i),
                  (i = null != n(e, t, r) ? a : null),
                  (mt[a] = o)),
                i
              );
            };
          });
        var xt = /^(?:input|select|textarea|button)$/i,
          bt = /^(?:a|area)$/i;
        function wt(e) {
          return (e.match(W) || []).join(" ");
        }
        function Tt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function Ct(e) {
          return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(W)) || [];
        }
        E.fn.extend({
          prop: function (e, t) {
            return X(this, E.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[E.propFix[e] || e];
            });
          },
        }),
          E.extend({
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && E.isXMLDoc(e)) ||
                    ((t = E.propFix[t] || t), (i = E.propHooks[t])),
                  void 0 !== n
                    ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = E.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : xt.test(e.nodeName) || (bt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: {
              for: "htmlFor",
              class: "className",
            },
          }),
          y.optSelected ||
            (E.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          E.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              E.propFix[this.toLowerCase()] = this;
            }
          ),
          E.fn.extend({
            addClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
              if (m(e))
                return this.each(function (t) {
                  E(this).addClass(e.call(this, t, Tt(this)));
                });
              if ((t = Ct(e)).length)
                for (; (n = this[u++]); )
                  if (
                    ((i = Tt(n)), (r = 1 === n.nodeType && " " + wt(i) + " "))
                  ) {
                    for (a = 0; (o = t[a++]); )
                      r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (s = wt(r)) && n.setAttribute("class", s);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
              if (m(e))
                return this.each(function (t) {
                  E(this).removeClass(e.call(this, t, Tt(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = Ct(e)).length)
                for (; (n = this[u++]); )
                  if (
                    ((i = Tt(n)), (r = 1 === n.nodeType && " " + wt(i) + " "))
                  ) {
                    for (a = 0; (o = t[a++]); )
                      for (; r.indexOf(" " + o + " ") > -1; )
                        r = r.replace(" " + o + " ", " ");
                    i !== (s = wt(r)) && n.setAttribute("class", s);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : m(e)
                ? this.each(function (n) {
                    E(this).toggleClass(e.call(this, n, Tt(this), t), t);
                  })
                : this.each(function () {
                    var t, i, o, a;
                    if (r)
                      for (i = 0, o = E(this), a = Ct(e); (t = a[i++]); )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = Tt(this)) && Z.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : Z.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); )
                if (1 === n.nodeType && (" " + wt(Tt(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var Et = /\r/g;
        E.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = m(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, E(this).val()) : e)
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = E.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      E.valHooks[this.type] ||
                      E.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, i, "value")) ||
                      (this.value = i));
                }))
              : i
              ? (t =
                  E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(i, "value"))
                ? n
                : "string" == typeof (n = i.value)
                ? n.replace(Et, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          E.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = E.find.attr(e, "value");
                  return null != t ? t : wt(E.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    a = "select-one" === e.type,
                    s = a ? null : [],
                    u = a ? o + 1 : i.length;
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                    if (
                      ((n = i[r]).selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))
                    ) {
                      if (((t = E(n).val()), a)) return t;
                      s.push(t);
                    }
                  return s;
                },
                set: function (e, t) {
                  for (
                    var n, r, i = e.options, o = E.makeArray(t), a = i.length;
                    a--;

                  )
                    ((r = i[a]).selected =
                      E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          E.each(["radio", "checkbox"], function () {
            (E.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = E.inArray(E(e).val(), t) > -1);
              },
            }),
              y.checkOn ||
                (E.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (y.focusin = "onfocusin" in r);
        var kt = /^(?:focusinfocus|focusoutblur)$/,
          St = function (e) {
            e.stopPropagation();
          };
        E.extend(E.event, {
          trigger: function (e, t, n, i) {
            var o,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              g = [n || a],
              v = h.call(e, "type") ? e.type : e,
              y = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((s = d = u = n = n || a),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !kt.test(v + E.event.triggered) &&
                (v.indexOf(".") > -1 &&
                  ((y = v.split(".")), (v = y.shift()), y.sort()),
                (c = v.indexOf(":") < 0 && "on" + v),
                ((e = e[E.expando]
                  ? e
                  : new E.Event(v, "object" == typeof e && e)).isTrigger = i
                  ? 2
                  : 3),
                (e.namespace = y.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : E.makeArray(t, [e])),
                (p = E.event.special[v] || {}),
                i || !p.trigger || !1 !== p.trigger.apply(n, t)))
            ) {
              if (!i && !p.noBubble && !x(n)) {
                for (
                  l = p.delegateType || v, kt.test(l + v) || (s = s.parentNode);
                  s;
                  s = s.parentNode
                )
                  g.push(s), (u = s);
                u === (n.ownerDocument || a) &&
                  g.push(u.defaultView || u.parentWindow || r);
              }
              for (o = 0; (s = g[o++]) && !e.isPropagationStopped(); )
                (d = s),
                  (e.type = o > 1 ? l : p.bindType || v),
                  (f =
                    (Z.get(s, "events") || {})[e.type] && Z.get(s, "handle")) &&
                    f.apply(s, t),
                  (f = c && s[c]) &&
                    f.apply &&
                    J(s) &&
                    ((e.result = f.apply(s, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = v),
                i ||
                  e.isDefaultPrevented() ||
                  (p._default && !1 !== p._default.apply(g.pop(), t)) ||
                  !J(n) ||
                  (c &&
                    m(n[v]) &&
                    !x(n) &&
                    ((u = n[c]) && (n[c] = null),
                    (E.event.triggered = v),
                    e.isPropagationStopped() && d.addEventListener(v, St),
                    n[v](),
                    e.isPropagationStopped() && d.removeEventListener(v, St),
                    (E.event.triggered = void 0),
                    u && (n[c] = u))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = E.extend(new E.Event(), n, {
              type: e,
              isSimulated: !0,
            });
            E.event.trigger(r, null, t);
          },
        }),
          E.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                E.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return E.event.trigger(e, t, n, !0);
            },
          }),
          y.focusin ||
            E.each(
              {
                focus: "focusin",
                blur: "focusout",
              },
              function (e, t) {
                var n = function (e) {
                  E.event.simulate(t, e.target, E.event.fix(e));
                };
                E.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this,
                      i = Z.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      Z.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this,
                      i = Z.access(r, t) - 1;
                    i
                      ? Z.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), Z.remove(r, t));
                  },
                };
              }
            );
        var Nt = r.location,
          At = Date.now(),
          Dt = /\?/;
        E.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new r.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName("parsererror").length) ||
              E.error("Invalid XML: " + e),
            t
          );
        };
        var jt = /\[\]$/,
          Lt = /\r?\n/g,
          qt = /^(?:submit|button|image|reset|file)$/i,
          Ht = /^(?:input|select|textarea|keygen)/i;
        function Ot(e, t, n, r) {
          var i;
          if (Array.isArray(t))
            E.each(t, function (t, i) {
              n || jt.test(e)
                ? r(e, i)
                : Ot(
                    e +
                      "[" +
                      ("object" == typeof i && null != i ? t : "") +
                      "]",
                    i,
                    n,
                    r
                  );
            });
          else if (n || "object" !== T(t)) r(e, t);
          else for (i in t) Ot(e + "[" + i + "]", t[i], n, r);
        }
        (E.param = function (e, t) {
          var n,
            r = [],
            i = function (e, t) {
              var n = m(t) ? t() : t;
              r[r.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
            E.each(e, function () {
              i(this.name, this.value);
            });
          else for (n in e) Ot(n, e[n], t, i);
          return r.join("&");
        }),
          E.fn.extend({
            serialize: function () {
              return E.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !E(this).is(":disabled") &&
                    Ht.test(this.nodeName) &&
                    !qt.test(e) &&
                    (this.checked || !ve.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = E(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? E.map(n, function (e) {
                        return {
                          name: t.name,
                          value: e.replace(Lt, "\r\n"),
                        };
                      })
                    : {
                        name: t.name,
                        value: n.replace(Lt, "\r\n"),
                      };
                })
                .get();
            },
          });
        var Pt = /%20/g,
          Rt = /#.*$/,
          Mt = /([?&])_=[^&]*/,
          It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Wt = /^(?:GET|HEAD)$/,
          $t = /^\/\//,
          Ft = {},
          Bt = {},
          _t = "*/".concat("*"),
          zt = a.createElement("a");
        function Ut(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              i = 0,
              o = t.toLowerCase().match(W) || [];
            if (m(n))
              for (; (r = o[i++]); )
                "+" === r[0]
                  ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n);
          };
        }
        function Xt(e, t, n, r) {
          var i = {},
            o = e === Bt;
          function a(s) {
            var u;
            return (
              (i[s] = !0),
              E.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l]
                  ? o
                    ? !(u = l)
                    : void 0
                  : (t.dataTypes.unshift(l), a(l), !1);
              }),
              u
            );
          }
          return a(t.dataTypes[0]) || (!i["*"] && a("*"));
        }
        function Vt(e, t) {
          var n,
            r,
            i = E.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          return r && E.extend(!0, e, r), e;
        }
        (zt.href = Nt.href),
          E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Nt.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Nt.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/,
              },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML,
              },
              flatOptions: {
                url: !0,
                context: !0,
              },
            },
            ajaxSetup: function (e, t) {
              return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e);
            },
            ajaxPrefilter: Ut(Ft),
            ajaxTransport: Ut(Bt),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var n,
                i,
                o,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = E.ajaxSetup({}, t),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? E(g) : E.event,
                y = E.Deferred(),
                m = E.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                w = {},
                T = "canceled",
                C = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (c) {
                      if (!s)
                        for (s = {}; (t = It.exec(o)); )
                          s[t[1].toLowerCase() + " "] = (
                            s[t[1].toLowerCase() + " "] || []
                          ).concat(t[2]);
                      t = s[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return c ? o : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == c &&
                        ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                        (b[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == c && (h.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (c) C.always(e[C.status]);
                      else for (t in e) x[t] = [x[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || T;
                    return n && n.abort(t), k(0, t), this;
                  },
                };
              if (
                (y.promise(C),
                (h.url = ((e || h.url || Nt.href) + "").replace(
                  $t,
                  Nt.protocol + "//"
                )),
                (h.type = t.method || t.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(W) || [
                  "",
                ]),
                null == h.crossDomain)
              ) {
                l = a.createElement("a");
                try {
                  (l.href = h.url),
                    (l.href = l.href),
                    (h.crossDomain =
                      zt.protocol + "//" + zt.host !=
                      l.protocol + "//" + l.host);
                } catch (e) {
                  h.crossDomain = !0;
                }
              }
              if (
                (h.data &&
                  h.processData &&
                  "string" != typeof h.data &&
                  (h.data = E.param(h.data, h.traditional)),
                Xt(Ft, h, t, C),
                c)
              )
                return C;
              for (p in ((f = E.event && h.global) &&
                0 == E.active++ &&
                E.event.trigger("ajaxStart"),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Wt.test(h.type)),
              (i = h.url.replace(Rt, "")),
              h.hasContent
                ? h.data &&
                  h.processData &&
                  0 ===
                    (h.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (h.data = h.data.replace(Pt, "+"))
                : ((d = h.url.slice(i.length)),
                  h.data &&
                    (h.processData || "string" == typeof h.data) &&
                    ((i += (Dt.test(i) ? "&" : "?") + h.data), delete h.data),
                  !1 === h.cache &&
                    ((i = i.replace(Mt, "$1")),
                    (d = (Dt.test(i) ? "&" : "?") + "_=" + At++ + d)),
                  (h.url = i + d)),
              h.ifModified &&
                (E.lastModified[i] &&
                  C.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                E.etag[i] && C.setRequestHeader("If-None-Match", E.etag[i])),
              ((h.data && h.hasContent && !1 !== h.contentType) ||
                t.contentType) &&
                C.setRequestHeader("Content-Type", h.contentType),
              C.setRequestHeader(
                "Accept",
                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                  ? h.accepts[h.dataTypes[0]] +
                      ("*" !== h.dataTypes[0] ? ", " + _t + "; q=0.01" : "")
                  : h.accepts["*"]
              ),
              h.headers))
                C.setRequestHeader(p, h.headers[p]);
              if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c))
                return C.abort();
              if (
                ((T = "abort"),
                m.add(h.complete),
                C.done(h.success),
                C.fail(h.error),
                (n = Xt(Bt, h, t, C)))
              ) {
                if (((C.readyState = 1), f && v.trigger("ajaxSend", [C, h]), c))
                  return C;
                h.async &&
                  h.timeout > 0 &&
                  (u = r.setTimeout(function () {
                    C.abort("timeout");
                  }, h.timeout));
                try {
                  (c = !1), n.send(b, k);
                } catch (e) {
                  if (c) throw e;
                  k(-1, e);
                }
              } else k(-1, "No Transport");
              function k(e, t, a, s) {
                var l,
                  p,
                  d,
                  b,
                  w,
                  T = t;
                c ||
                  ((c = !0),
                  u && r.clearTimeout(u),
                  (n = void 0),
                  (o = s || ""),
                  (C.readyState = e > 0 ? 4 : 0),
                  (l = (e >= 200 && e < 300) || 304 === e),
                  a &&
                    (b = (function (e, t, n) {
                      for (
                        var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];

                      )
                        u.shift(),
                          void 0 === r &&
                            (r =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (r)
                        for (i in s)
                          if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break;
                          }
                      if (u[0] in n) o = u[0];
                      else {
                        for (i in n) {
                          if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break;
                          }
                          a || (a = i);
                        }
                        o = o || a;
                      }
                      if (o) return o !== u[0] && u.unshift(o), n[o];
                    })(h, C, a)),
                  (b = (function (e, t, n, r) {
                    var i,
                      o,
                      a,
                      s,
                      u,
                      l = {},
                      c = e.dataTypes.slice();
                    if (c[1])
                      for (a in e.converters)
                        l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                      if (
                        (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (u = o),
                        (o = c.shift()))
                      )
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                          if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                              if (
                                (s = i.split(" "))[1] === o &&
                                (a = l[u + " " + s[0]] || l["* " + s[0]])
                              ) {
                                !0 === a
                                  ? (a = l[i])
                                  : !0 !== l[i] &&
                                    ((o = s[0]), c.unshift(s[1]));
                                break;
                              }
                          if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else
                              try {
                                t = a(t);
                              } catch (e) {
                                return {
                                  state: "parsererror",
                                  error: a
                                    ? e
                                    : "No conversion from " + u + " to " + o,
                                };
                              }
                        }
                    return {
                      state: "success",
                      data: t,
                    };
                  })(h, b, C, l)),
                  l
                    ? (h.ifModified &&
                        ((w = C.getResponseHeader("Last-Modified")) &&
                          (E.lastModified[i] = w),
                        (w = C.getResponseHeader("etag")) && (E.etag[i] = w)),
                      204 === e || "HEAD" === h.type
                        ? (T = "nocontent")
                        : 304 === e
                        ? (T = "notmodified")
                        : ((T = b.state), (p = b.data), (l = !(d = b.error))))
                    : ((d = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                  (C.status = e),
                  (C.statusText = (t || T) + ""),
                  l ? y.resolveWith(g, [p, T, C]) : y.rejectWith(g, [C, T, d]),
                  C.statusCode(x),
                  (x = void 0),
                  f &&
                    v.trigger(l ? "ajaxSuccess" : "ajaxError", [
                      C,
                      h,
                      l ? p : d,
                    ]),
                  m.fireWith(g, [C, T]),
                  f &&
                    (v.trigger("ajaxComplete", [C, h]),
                    --E.active || E.event.trigger("ajaxStop")));
              }
              return C;
            },
            getJSON: function (e, t, n) {
              return E.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return E.get(e, void 0, t, "script");
            },
          }),
          E.each(["get", "post"], function (e, t) {
            E[t] = function (e, n, r, i) {
              return (
                m(n) && ((i = i || r), (r = n), (n = void 0)),
                E.ajax(
                  E.extend(
                    {
                      url: e,
                      type: t,
                      dataType: i,
                      data: n,
                      success: r,
                    },
                    E.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          (E._evalUrl = function (e, t) {
            return E.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: {
                "text script": function () {},
              },
              dataFilter: function (e) {
                E.globalEval(e, t);
              },
            });
          }),
          E.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (m(e) && (e = e.call(this[0])),
                  (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return m(e)
                ? this.each(function (t) {
                    E(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = E(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = m(e);
              return this.each(function (n) {
                E(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    E(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (E.expr.pseudos.hidden = function (e) {
            return !E.expr.pseudos.visible(e);
          }),
          (E.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (E.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest();
            } catch (e) {}
          });
        var Gt = {
            0: 200,
            1223: 204,
          },
          Yt = E.ajaxSettings.xhr();
        (y.cors = !!Yt && "withCredentials" in Yt),
          (y.ajax = Yt = !!Yt),
          E.ajaxTransport(function (e) {
            var t, n;
            if (y.cors || (Yt && !e.crossDomain))
              return {
                send: function (i, o) {
                  var a,
                    s = e.xhr();
                  if (
                    (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                  for (a in (e.mimeType &&
                    s.overrideMimeType &&
                    s.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest"),
                  i))
                    s.setRequestHeader(a, i[a]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t =
                          n =
                          s.onload =
                          s.onerror =
                          s.onabort =
                          s.ontimeout =
                          s.onreadystatechange =
                            null),
                        "abort" === e
                          ? s.abort()
                          : "error" === e
                          ? "number" != typeof s.status
                            ? o(0, "error")
                            : o(s.status, s.statusText)
                          : o(
                              Gt[s.status] || s.status,
                              s.statusText,
                              "text" !== (s.responseType || "text") ||
                                "string" != typeof s.responseText
                                ? {
                                    binary: s.response,
                                  }
                                : {
                                    text: s.responseText,
                                  },
                              s.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (s.onload = t()),
                    (n = s.onerror = s.ontimeout = t("error")),
                    void 0 !== s.onabort
                      ? (s.onabort = n)
                      : (s.onreadystatechange = function () {
                          4 === s.readyState &&
                            r.setTimeout(function () {
                              t && n();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    s.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          E.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          E.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: {
              script: /\b(?:java|ecma)script\b/,
            },
            converters: {
              "text script": function (e) {
                return E.globalEval(e), e;
              },
            },
          }),
          E.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          E.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (r, i) {
                  (t = E("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({
                      charset: e.scriptCharset,
                      src: e.url,
                    })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(),
                          (n = null),
                          e && i("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    a.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Qt,
          Jt = [],
          Kt = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Jt.pop() || E.expando + "_" + At++;
            return (this[e] = !0), e;
          },
        }),
          E.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
              o,
              a,
              s =
                !1 !== e.jsonp &&
                (Kt.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Kt.test(e.data) &&
                    "data");
            if (s || "jsonp" === e.dataTypes[0])
              return (
                (i = e.jsonpCallback =
                  m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                s
                  ? (e[s] = e[s].replace(Kt, "$1" + i))
                  : !1 !== e.jsonp &&
                    (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                (e.converters["script json"] = function () {
                  return a || E.error(i + " was not called"), a[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = r[i]),
                (r[i] = function () {
                  a = arguments;
                }),
                n.always(function () {
                  void 0 === o ? E(r).removeProp(i) : (r[i] = o),
                    e[i] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(i)),
                    a && m(o) && o(a[0]),
                    (a = o = void 0);
                }),
                "script"
              );
          }),
          (y.createHTMLDocument =
            (((Qt = a.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === Qt.childNodes.length)),
          (E.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (y.createHTMLDocument
                    ? (((r = (t =
                        a.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = a.location.href),
                      t.head.appendChild(r))
                    : (t = a)),
                (o = !n && []),
                (i = q.exec(e))
                  ? [t.createElement(i[1])]
                  : ((i = ke([e], t, o)),
                    o && o.length && E(o).remove(),
                    E.merge([], i.childNodes)));
            var r, i, o;
          }),
          (E.fn.load = function (e, t, n) {
            var r,
              i,
              o,
              a = this,
              s = e.indexOf(" ");
            return (
              s > -1 && ((r = wt(e.slice(s))), (e = e.slice(0, s))),
              m(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (i = "POST"),
              a.length > 0 &&
                E.ajax({
                  url: e,
                  type: i || "GET",
                  dataType: "html",
                  data: t,
                })
                  .done(function (e) {
                    (o = arguments),
                      a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        a.each(function () {
                          n.apply(this, o || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          E.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              E.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          (E.expr.pseudos.animated = function (e) {
            return E.grep(E.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (E.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l = E.css(e, "position"),
                c = E(e),
                f = {};
              "static" === l && (e.style.position = "relative"),
                (s = c.offset()),
                (o = E.css(e, "top")),
                (u = E.css(e, "left")),
                ("absolute" === l || "fixed" === l) &&
                (o + u).indexOf("auto") > -1
                  ? ((a = (r = c.position()).top), (i = r.left))
                  : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                m(t) && (t = t.call(e, n, E.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                "using" in t ? t.using.call(e, f) : c.css(f);
            },
          }),
          E.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      E.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : {
                      top: 0,
                      left: 0,
                    }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = {
                    top: 0,
                    left: 0,
                  };
                if ("fixed" === E.css(r, "position"))
                  t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === E.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((i = E(e).offset()).top += E.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (i.left += E.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - i.top - E.css(r, "marginTop", !0),
                  left: t.left - i.left - E.css(r, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === E.css(e, "position");

                )
                  e = e.offsetParent;
                return e || se;
              });
            },
          }),
          E.each(
            {
              scrollLeft: "pageXOffset",
              scrollTop: "pageYOffset",
            },
            function (e, t) {
              var n = "pageYOffset" === t;
              E.fn[e] = function (r) {
                return X(
                  this,
                  function (e, r, i) {
                    var o;
                    if (
                      (x(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                      void 0 === i)
                    )
                      return o ? o[t] : e[r];
                    o
                      ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                      : (e[r] = i);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }
          ),
          E.each(["top", "left"], function (e, t) {
            E.cssHooks[t] = Ye(y.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = Ge(e, t)), Ue.test(n) ? E(e).position()[t] + "px" : n
                );
            });
          }),
          E.each(
            {
              Height: "height",
              Width: "width",
            },
            function (e, t) {
              E.each(
                {
                  padding: "inner" + e,
                  content: t,
                  "": "outer" + e,
                },
                function (n, r) {
                  E.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return X(
                      this,
                      function (t, n, i) {
                        var o;
                        return x(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === i
                          ? E.css(t, n, s)
                          : E.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a
                    );
                  };
                }
              );
            }
          ),
          E.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              E.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          ),
          E.fn.extend({
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          E.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
          }),
          (E.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (r = u.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, r.concat(u.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || E.guid++),
                i
              );
          }),
          (E.holdReady = function (e) {
            e ? E.readyWait++ : E.ready(!0);
          }),
          (E.isArray = Array.isArray),
          (E.parseJSON = JSON.parse),
          (E.nodeName = L),
          (E.isFunction = m),
          (E.isWindow = x),
          (E.camelCase = Q),
          (E.type = T),
          (E.now = Date.now),
          (E.isNumeric = function (e) {
            var t = E.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          void 0 ===
            (n = function () {
              return E;
            }.apply(t, [])) || (e.exports = n);
        var Zt = r.jQuery,
          en = r.$;
        return (
          (E.noConflict = function (e) {
            return (
              r.$ === E && (r.$ = en), e && r.jQuery === E && (r.jQuery = Zt), E
            );
          }),
          i || (r.jQuery = r.$ = E),
          E
        );
      });
    },
  },
]);
