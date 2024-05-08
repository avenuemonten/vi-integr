/*! For license information please see 2306.0c3842f1.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [2306],
  {
    42306: function (e, t, n) {
      var r, o;
      (r = function () {
        "use strict";
        var e = function () {
          o.log(
            2,
            "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene."
          );
        };
        (e.version = "2.0.7"),
          window.addEventListener("mousewheel", function () {});
        var t = "data-scrollmagic-pin-spacer";
        e.Controller = function (r) {
          var i,
            l,
            s = "ScrollMagic.Controller",
            a = "FORWARD",
            c = "REVERSE",
            u = "PAUSED",
            f = n.defaults,
            d = this,
            p = o.extend({}, f, r),
            g = [],
            h = !1,
            v = 0,
            m = u,
            w = !0,
            y = 0,
            S = !0,
            E = function () {
              for (var t in p)
                f.hasOwnProperty(t) ||
                  (P(2, 'WARNING: Unknown option "' + t + '"'), delete p[t]);
              if (
                ((p.container = o.get.elements(p.container)[0]), !p.container)
              )
                throw (
                  (P(
                    1,
                    "ERROR creating object " +
                      s +
                      ": No valid scroll container supplied"
                  ),
                  s + " init failed.")
                );
              (w =
                p.container === window ||
                p.container === document.body ||
                !document.body.contains(p.container)) && (p.container = window),
                (y = T()),
                p.container.addEventListener("resize", x),
                p.container.addEventListener("scroll", x);
              var n = parseInt(p.refreshInterval, 10);
              (p.refreshInterval = o.type.Number(n) ? n : f.refreshInterval),
                b(),
                P(3, "added new " + s + " controller (v" + e.version + ")");
            },
            b = function () {
              p.refreshInterval > 0 &&
                (l = window.setTimeout(z, p.refreshInterval));
            },
            R = function () {
              return p.vertical
                ? o.get.scrollTop(p.container)
                : o.get.scrollLeft(p.container);
            },
            T = function () {
              return p.vertical
                ? o.get.height(p.container)
                : o.get.width(p.container);
            },
            C = (this._setScrollPos = function (e) {
              p.vertical
                ? w
                  ? window.scrollTo(o.get.scrollLeft(), e)
                  : (p.container.scrollTop = e)
                : w
                ? window.scrollTo(e, o.get.scrollTop())
                : (p.container.scrollLeft = e);
            }),
            O = function () {
              if (S && h) {
                var e = o.type.Array(h) ? h : g.slice(0);
                h = !1;
                var t = v,
                  n = (v = d.scrollPos()) - t;
                0 !== n && (m = n > 0 ? a : c),
                  m === c && e.reverse(),
                  e.forEach(function (t, n) {
                    P(
                      3,
                      "updating Scene " +
                        (n + 1) +
                        "/" +
                        e.length +
                        " (" +
                        g.length +
                        " total)"
                    ),
                      t.update(!0);
                  }),
                  0 === e.length &&
                    p.loglevel >= 3 &&
                    P(3, "updating 0 Scenes (nothing added to controller)");
              }
            },
            F = function () {
              i = o.rAF(O);
            },
            x = function (e) {
              P(3, "event fired causing an update:", e.type),
                "resize" == e.type && ((y = T()), (m = u)),
                !0 !== h && ((h = !0), F());
            },
            z = function () {
              if (!w && y != T()) {
                var e;
                try {
                  e = new Event("resize", {
                    bubbles: !1,
                    cancelable: !1,
                  });
                } catch (t) {
                  (e = document.createEvent("Event")).initEvent(
                    "resize",
                    !1,
                    !1
                  );
                }
                p.container.dispatchEvent(e);
              }
              g.forEach(function (e, t) {
                e.refresh();
              }),
                b();
            },
            P = (this._log = function (e, t) {
              p.loglevel >= e &&
                (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"),
                o.log.apply(window, arguments));
            });
          this._options = p;
          var A = function (e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return (
              t.sort(function (e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
              }),
              t
            );
          };
          return (
            (this.addScene = function (t) {
              if (o.type.Array(t))
                t.forEach(function (e, t) {
                  d.addScene(e);
                });
              else if (t instanceof e.Scene) {
                if (t.controller() !== d) t.addTo(d);
                else if (g.indexOf(t) < 0) {
                  for (var n in (g.push(t),
                  (g = A(g)),
                  t.on("shift.controller_sort", function () {
                    g = A(g);
                  }),
                  p.globalSceneOptions))
                    t[n] && t[n].call(t, p.globalSceneOptions[n]);
                  P(3, "adding Scene (now " + g.length + " total)");
                }
              } else P(1, "ERROR: invalid argument supplied for '.addScene()'");
              return d;
            }),
            (this.removeScene = function (e) {
              if (o.type.Array(e))
                e.forEach(function (e, t) {
                  d.removeScene(e);
                });
              else {
                var t = g.indexOf(e);
                t > -1 &&
                  (e.off("shift.controller_sort"),
                  g.splice(t, 1),
                  P(3, "removing Scene (now " + g.length + " left)"),
                  e.remove());
              }
              return d;
            }),
            (this.updateScene = function (t, n) {
              return (
                o.type.Array(t)
                  ? t.forEach(function (e, t) {
                      d.updateScene(e, n);
                    })
                  : n
                  ? t.update(!0)
                  : !0 !== h &&
                    t instanceof e.Scene &&
                    (-1 == (h = h || []).indexOf(t) && h.push(t),
                    (h = A(h)),
                    F()),
                d
              );
            }),
            (this.update = function (e) {
              return (
                x({
                  type: "resize",
                }),
                e && O(),
                d
              );
            }),
            (this.scrollTo = function (n, r) {
              if (o.type.Number(n)) C.call(p.container, n, r);
              else if (n instanceof e.Scene)
                n.controller() === d
                  ? d.scrollTo(n.scrollOffset(), r)
                  : P(
                      2,
                      "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",
                      n
                    );
              else if (o.type.Function(n)) C = n;
              else {
                var i = o.get.elements(n)[0];
                if (i) {
                  for (; i.parentNode.hasAttribute(t); ) i = i.parentNode;
                  var l = p.vertical ? "top" : "left",
                    s = o.get.offset(p.container),
                    a = o.get.offset(i);
                  w || (s[l] -= d.scrollPos()), d.scrollTo(a[l] - s[l], r);
                } else
                  P(
                    2,
                    "scrollTo(): The supplied argument is invalid. Scroll cancelled.",
                    n
                  );
              }
              return d;
            }),
            (this.scrollPos = function (e) {
              return arguments.length
                ? (o.type.Function(e)
                    ? (R = e)
                    : P(
                        2,
                        "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."
                      ),
                  d)
                : R.call(d);
            }),
            (this.info = function (e) {
              var t = {
                size: y,
                vertical: p.vertical,
                scrollPos: v,
                scrollDirection: m,
                container: p.container,
                isDocument: w,
              };
              return arguments.length
                ? void 0 !== t[e]
                  ? t[e]
                  : void P(1, 'ERROR: option "' + e + '" is not available')
                : t;
            }),
            (this.loglevel = function (e) {
              return arguments.length
                ? (p.loglevel != e && (p.loglevel = e), d)
                : p.loglevel;
            }),
            (this.enabled = function (e) {
              return arguments.length
                ? (S != e && ((S = !!e), d.updateScene(g, !0)), d)
                : S;
            }),
            (this.destroy = function (e) {
              window.clearTimeout(l);
              for (var t = g.length; t--; ) g[t].destroy(e);
              return (
                p.container.removeEventListener("resize", x),
                p.container.removeEventListener("scroll", x),
                o.cAF(i),
                P(
                  3,
                  "destroyed " + s + " (reset: " + (e ? "true" : "false") + ")"
                ),
                null
              );
            }),
            E(),
            d
          );
        };
        var n = {
          defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100,
          },
        };
        (e.Controller.addOption = function (e, t) {
          n.defaults[e] = t;
        }),
          (e.Controller.extend = function (t) {
            var n = this;
            (e.Controller = function () {
              return (
                n.apply(this, arguments),
                (this.$super = o.extend({}, this)),
                t.apply(this, arguments) || this
              );
            }),
              o.extend(e.Controller, n),
              (e.Controller.prototype = n.prototype),
              (e.Controller.prototype.constructor = e.Controller);
          }),
          (e.Scene = function (n) {
            var i,
              l,
              s = "ScrollMagic.Scene",
              a = "BEFORE",
              c = "DURING",
              u = "AFTER",
              f = r.defaults,
              d = this,
              p = o.extend({}, f, n),
              g = a,
              h = 0,
              v = {
                start: 0,
                end: 0,
              },
              m = 0,
              w = !0,
              y = function () {
                for (var e in p)
                  f.hasOwnProperty(e) ||
                    (E(2, 'WARNING: Unknown option "' + e + '"'), delete p[e]);
                for (var t in f) A(t);
                z();
              },
              S = {};
            (this.on = function (e, t) {
              return (
                o.type.Function(t)
                  ? (e = e.trim().split(" ")).forEach(function (e) {
                      var n = e.split("."),
                        r = n[0],
                        o = n[1];
                      "*" != r &&
                        (S[r] || (S[r] = []),
                        S[r].push({
                          namespace: o || "",
                          callback: t,
                        }));
                    })
                  : E(
                      1,
                      "ERROR when calling '.on()': Supplied callback for '" +
                        e +
                        "' is not a valid function!"
                    ),
                d
              );
            }),
              (this.off = function (e, t) {
                return e
                  ? ((e = e.trim().split(" ")).forEach(function (e, n) {
                      var r = e.split("."),
                        o = r[0],
                        i = r[1] || "";
                      ("*" === o ? Object.keys(S) : [o]).forEach(function (e) {
                        for (var n = S[e] || [], r = n.length; r--; ) {
                          var o = n[r];
                          !o ||
                            (i !== o.namespace && "*" !== i) ||
                            (t && t != o.callback) ||
                            n.splice(r, 1);
                        }
                        n.length || delete S[e];
                      });
                    }),
                    d)
                  : (E(1, "ERROR: Invalid event name supplied."), d);
              }),
              (this.trigger = function (t, n) {
                if (t) {
                  var r = t.trim().split("."),
                    o = r[0],
                    i = r[1],
                    l = S[o];
                  E(3, "event fired:", o, n ? "->" : "", n || ""),
                    l &&
                      l.forEach(function (t, r) {
                        (i && i !== t.namespace) ||
                          t.callback.call(d, new e.Event(o, t.namespace, d, n));
                      });
                } else E(1, "ERROR: Invalid event name supplied.");
                return d;
              }),
              d
                .on("change.internal", function (e) {
                  "loglevel" !== e.what &&
                    "tweenChanges" !== e.what &&
                    ("triggerElement" === e.what
                      ? O()
                      : "reverse" === e.what && d.update());
                })
                .on("shift.internal", function (e) {
                  T(), d.update();
                });
            var E = (this._log = function (e, t) {
              p.loglevel >= e &&
                (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"),
                o.log.apply(window, arguments));
            });
            (this.addTo = function (t) {
              return (
                t instanceof e.Controller
                  ? l != t &&
                    (l && l.removeScene(d),
                    (l = t),
                    z(),
                    C(!0),
                    O(!0),
                    T(),
                    l.info("container").addEventListener("resize", F),
                    t.addScene(d),
                    d.trigger("add", {
                      controller: l,
                    }),
                    E(3, "added " + s + " to controller"),
                    d.update())
                  : E(
                      1,
                      "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"
                    ),
                d
              );
            }),
              (this.enabled = function (e) {
                return arguments.length
                  ? (w != e && ((w = !!e), d.update(!0)), d)
                  : w;
              }),
              (this.remove = function () {
                if (l) {
                  l.info("container").removeEventListener("resize", F);
                  var e = l;
                  (l = void 0),
                    e.removeScene(d),
                    d.trigger("remove"),
                    E(3, "removed " + s + " from controller");
                }
                return d;
              }),
              (this.destroy = function (e) {
                return (
                  d.trigger("destroy", {
                    reset: e,
                  }),
                  d.remove(),
                  d.off("*.*"),
                  E(
                    3,
                    "destroyed " +
                      s +
                      " (reset: " +
                      (e ? "true" : "false") +
                      ")"
                  ),
                  null
                );
              }),
              (this.update = function (e) {
                if (l)
                  if (e)
                    if (l.enabled() && w) {
                      var t,
                        n = l.info("scrollPos");
                      (t =
                        p.duration > 0
                          ? (n - v.start) / (v.end - v.start)
                          : n >= v.start
                          ? 1
                          : 0),
                        d.trigger("update", {
                          startPos: v.start,
                          endPos: v.end,
                          scrollPos: n,
                        }),
                        d.progress(t);
                    } else b && g === c && L(!0);
                  else l.updateScene(d, !1);
                return d;
              }),
              (this.refresh = function () {
                return C(), O(), d;
              }),
              (this.progress = function (e) {
                if (arguments.length) {
                  var t = !1,
                    n = g,
                    r = l ? l.info("scrollDirection") : "PAUSED",
                    o = p.reverse || e >= h;
                  if (
                    (0 === p.duration
                      ? ((t = h != e),
                        (g = 0 == (h = e < 1 && o ? 0 : 1) ? a : c))
                      : e < 0 && g !== a && o
                      ? ((h = 0), (g = a), (t = !0))
                      : e >= 0 && e < 1 && o
                      ? ((h = e), (g = c), (t = !0))
                      : e >= 1 && g !== u
                      ? ((h = 1), (g = u), (t = !0))
                      : g !== c || o || L(),
                    t)
                  ) {
                    var i = {
                        progress: h,
                        state: g,
                        scrollDirection: r,
                      },
                      s = g != n,
                      f = function (e) {
                        d.trigger(e, i);
                      };
                    s && n !== c && (f("enter"), f(n === a ? "start" : "end")),
                      f("progress"),
                      s &&
                        g !== c &&
                        (f(g === a ? "start" : "end"), f("leave"));
                  }
                  return d;
                }
                return h;
              });
            var b,
              R,
              T = function () {
                (v = {
                  start: m + p.offset,
                }),
                  l &&
                    p.triggerElement &&
                    (v.start -= l.info("size") * p.triggerHook),
                  (v.end = v.start + p.duration);
              },
              C = function (e) {
                if (i) {
                  var t = "duration";
                  P(t, i.call(d)) &&
                    !e &&
                    (d.trigger("change", {
                      what: t,
                      newval: p[t],
                    }),
                    d.trigger("shift", {
                      reason: t,
                    }));
                }
              },
              O = function (e) {
                var n = 0,
                  r = p.triggerElement;
                if (l && (r || m > 0)) {
                  if (r)
                    if (r.parentNode) {
                      for (
                        var i = l.info(),
                          s = o.get.offset(i.container),
                          a = i.vertical ? "top" : "left";
                        r.parentNode.hasAttribute(t);

                      )
                        r = r.parentNode;
                      var c = o.get.offset(r);
                      i.isDocument || (s[a] -= l.scrollPos()),
                        (n = c[a] - s[a]);
                    } else
                      E(
                        2,
                        "WARNING: triggerElement was removed from DOM and will be reset to",
                        void 0
                      ),
                        d.triggerElement(void 0);
                  var u = n != m;
                  (m = n),
                    u &&
                      !e &&
                      d.trigger("shift", {
                        reason: "triggerElementPosition",
                      });
                }
              },
              F = function (e) {
                p.triggerHook > 0 &&
                  d.trigger("shift", {
                    reason: "containerResize",
                  });
              },
              x = o.extend(r.validate, {
                duration: function (e) {
                  if (o.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                    var t = parseFloat(e) / 100;
                    e = function () {
                      return l ? l.info("size") * t : 0;
                    };
                  }
                  if (o.type.Function(e)) {
                    i = e;
                    try {
                      e = parseFloat(i.call(d));
                    } catch (t) {
                      e = -1;
                    }
                  }
                  if (((e = parseFloat(e)), !o.type.Number(e) || e < 0))
                    throw i
                      ? ((i = void 0),
                        [
                          'Invalid return value of supplied function for option "duration":',
                          e,
                        ])
                      : ['Invalid value for option "duration":', e];
                  return e;
                },
              }),
              z = function (e) {
                (e = arguments.length ? [e] : Object.keys(x)).forEach(function (
                  e,
                  t
                ) {
                  var n;
                  if (x[e])
                    try {
                      n = x[e](p[e]);
                    } catch (t) {
                      n = f[e];
                      var r = o.type.String(t) ? [t] : t;
                      o.type.Array(r)
                        ? ((r[0] = "ERROR: " + r[0]),
                          r.unshift(1),
                          E.apply(this, r))
                        : E(
                            1,
                            "ERROR: Problem executing validation callback for option '" +
                              e +
                              "':",
                            t.message
                          );
                    } finally {
                      p[e] = n;
                    }
                });
              },
              P = function (e, t) {
                var n = !1,
                  r = p[e];
                return p[e] != t && ((p[e] = t), z(e), (n = r != p[e])), n;
              },
              A = function (e) {
                d[e] ||
                  (d[e] = function (t) {
                    return arguments.length
                      ? ("duration" === e && (i = void 0),
                        P(e, t) &&
                          (d.trigger("change", {
                            what: e,
                            newval: p[e],
                          }),
                          r.shifts.indexOf(e) > -1 &&
                            d.trigger("shift", {
                              reason: e,
                            })),
                        d)
                      : p[e];
                  });
              };
            (this.controller = function () {
              return l;
            }),
              (this.state = function () {
                return g;
              }),
              (this.scrollOffset = function () {
                return v.start;
              }),
              (this.triggerPosition = function () {
                var e = p.offset;
                return (
                  l &&
                    (p.triggerElement
                      ? (e += m)
                      : (e += l.info("size") * d.triggerHook())),
                  e
                );
              }),
              d
                .on("shift.internal", function (e) {
                  var t = "duration" === e.reason;
                  ((g === u && t) || (g === c && 0 === p.duration)) && L(),
                    t && N();
                })
                .on("progress.internal", function (e) {
                  L();
                })
                .on("add.internal", function (e) {
                  N();
                })
                .on("destroy.internal", function (e) {
                  d.removePin(e.reset);
                });
            var L = function (e) {
                if (b && l) {
                  var t = l.info(),
                    n = R.spacer.firstChild;
                  if (e || g !== c) {
                    var r = {
                        position: R.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0,
                      },
                      i = o.css(n, "position") != r.position;
                    R.pushFollowers
                      ? p.duration > 0 &&
                        ((g === u &&
                          0 === parseFloat(o.css(R.spacer, "padding-top"))) ||
                          (g === a &&
                            0 ===
                              parseFloat(o.css(R.spacer, "padding-bottom")))) &&
                        (i = !0)
                      : (r[t.vertical ? "top" : "left"] = p.duration * h),
                      o.css(n, r),
                      i && N();
                  } else {
                    "fixed" != o.css(n, "position") &&
                      (o.css(n, {
                        position: "fixed",
                      }),
                      N());
                    var s = o.get.offset(R.spacer, !0),
                      f =
                        p.reverse || 0 === p.duration
                          ? t.scrollPos - v.start
                          : Math.round(h * p.duration * 10) / 10;
                    (s[t.vertical ? "top" : "left"] += f),
                      o.css(R.spacer.firstChild, {
                        top: s.top,
                        left: s.left,
                      });
                  }
                }
              },
              N = function () {
                if (b && l && R.inFlow) {
                  var e = g === c,
                    t = l.info("vertical"),
                    n = R.spacer.firstChild,
                    r = o.isMarginCollapseType(o.css(R.spacer, "display")),
                    i = {};
                  R.relSize.width || R.relSize.autoFullWidth
                    ? e
                      ? o.css(b, {
                          width: o.get.width(R.spacer),
                        })
                      : o.css(b, {
                          width: "100%",
                        })
                    : ((i["min-width"] = o.get.width(t ? b : n, !0, !0)),
                      (i.width = e ? i["min-width"] : "auto")),
                    R.relSize.height
                      ? e
                        ? o.css(b, {
                            height:
                              o.get.height(R.spacer) -
                              (R.pushFollowers ? p.duration : 0),
                          })
                        : o.css(b, {
                            height: "100%",
                          })
                      : ((i["min-height"] = o.get.height(t ? n : b, !0, !r)),
                        (i.height = e ? i["min-height"] : "auto")),
                    R.pushFollowers &&
                      ((i["padding" + (t ? "Top" : "Left")] = p.duration * h),
                      (i["padding" + (t ? "Bottom" : "Right")] =
                        p.duration * (1 - h))),
                    o.css(R.spacer, i);
                }
              },
              I = function () {
                l && b && g === c && !l.info("isDocument") && L();
              },
              _ = function () {
                l &&
                  b &&
                  g === c &&
                  (((R.relSize.width || R.relSize.autoFullWidth) &&
                    o.get.width(window) != o.get.width(R.spacer.parentNode)) ||
                    (R.relSize.height &&
                      o.get.height(window) !=
                        o.get.height(R.spacer.parentNode))) &&
                  N();
              },
              k = function (e) {
                l &&
                  b &&
                  g === c &&
                  !l.info("isDocument") &&
                  (e.preventDefault(),
                  l._setScrollPos(
                    l.info("scrollPos") -
                      ((e.wheelDelta ||
                        e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) /
                        3 || 30 * -e.detail)
                  ));
              };
            (this.setPin = function (e, n) {
              var r = {
                  pushFollowers: !0,
                  spacerClass: "scrollmagic-pin-spacer",
                },
                i = n && n.hasOwnProperty("pushFollowers");
              if (((n = o.extend({}, r, n)), !(e = o.get.elements(e)[0])))
                return (
                  E(
                    1,
                    "ERROR calling method 'setPin()': Invalid pin element supplied."
                  ),
                  d
                );
              if ("fixed" === o.css(e, "position"))
                return (
                  E(
                    1,
                    "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."
                  ),
                  d
                );
              if (b) {
                if (b === e) return d;
                d.removePin();
              }
              var l = (b = e).parentNode.style.display,
                s = [
                  "top",
                  "left",
                  "bottom",
                  "right",
                  "margin",
                  "marginLeft",
                  "marginRight",
                  "marginTop",
                  "marginBottom",
                ];
              b.parentNode.style.display = "none";
              var a = "absolute" != o.css(b, "position"),
                c = o.css(b, s.concat(["display"])),
                u = o.css(b, ["width", "height"]);
              (b.parentNode.style.display = l),
                !a &&
                  n.pushFollowers &&
                  (E(
                    2,
                    "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."
                  ),
                  (n.pushFollowers = !1)),
                window.setTimeout(function () {
                  b &&
                    0 === p.duration &&
                    i &&
                    n.pushFollowers &&
                    E(
                      2,
                      "WARNING: pushFollowers =",
                      !0,
                      "has no effect, when scene duration is 0."
                    );
                }, 0);
              var f = b.parentNode.insertBefore(
                  document.createElement("div"),
                  b
                ),
                g = o.extend(c, {
                  position: a ? "relative" : "absolute",
                  boxSizing: "content-box",
                  mozBoxSizing: "content-box",
                  webkitBoxSizing: "content-box",
                });
              if (
                (a || o.extend(g, o.css(b, ["width", "height"])),
                o.css(f, g),
                f.setAttribute(t, ""),
                o.addClass(f, n.spacerClass),
                (R = {
                  spacer: f,
                  relSize: {
                    width: "%" === u.width.slice(-1),
                    height: "%" === u.height.slice(-1),
                    autoFullWidth:
                      "auto" === u.width &&
                      a &&
                      o.isMarginCollapseType(c.display),
                  },
                  pushFollowers: n.pushFollowers,
                  inFlow: a,
                }),
                !b.___origStyle)
              ) {
                b.___origStyle = {};
                var h = b.style;
                s.concat([
                  "width",
                  "height",
                  "position",
                  "boxSizing",
                  "mozBoxSizing",
                  "webkitBoxSizing",
                ]).forEach(function (e) {
                  b.___origStyle[e] = h[e] || "";
                });
              }
              return (
                R.relSize.width &&
                  o.css(f, {
                    width: u.width,
                  }),
                R.relSize.height &&
                  o.css(f, {
                    height: u.height,
                  }),
                f.appendChild(b),
                o.css(b, {
                  position: a ? "relative" : "absolute",
                  margin: "auto",
                  top: "auto",
                  left: "auto",
                  bottom: "auto",
                  right: "auto",
                }),
                (R.relSize.width || R.relSize.autoFullWidth) &&
                  o.css(b, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box",
                  }),
                window.addEventListener("scroll", I),
                window.addEventListener("resize", I),
                window.addEventListener("resize", _),
                b.addEventListener("mousewheel", k),
                b.addEventListener("DOMMouseScroll", k),
                E(3, "added pin"),
                L(),
                d
              );
            }),
              (this.removePin = function (e) {
                if (b) {
                  if ((g === c && L(!0), e || !l)) {
                    var n = R.spacer.firstChild;
                    if (n.hasAttribute(t)) {
                      var r = R.spacer.style,
                        i = {};
                      [
                        "margin",
                        "marginLeft",
                        "marginRight",
                        "marginTop",
                        "marginBottom",
                      ].forEach(function (e) {
                        i[e] = r[e] || "";
                      }),
                        o.css(n, i);
                    }
                    R.spacer.parentNode.insertBefore(n, R.spacer),
                      R.spacer.parentNode.removeChild(R.spacer),
                      b.parentNode.hasAttribute(t) ||
                        (o.css(b, b.___origStyle), delete b.___origStyle);
                  }
                  window.removeEventListener("scroll", I),
                    window.removeEventListener("resize", I),
                    window.removeEventListener("resize", _),
                    b.removeEventListener("mousewheel", k),
                    b.removeEventListener("DOMMouseScroll", k),
                    (b = void 0),
                    E(3, "removed pin (reset: " + (e ? "true" : "false") + ")");
                }
                return d;
              });
            var M,
              D = [];
            return (
              d.on("destroy.internal", function (e) {
                d.removeClassToggle(e.reset);
              }),
              (this.setClassToggle = function (e, t) {
                var n = o.get.elements(e);
                return 0 !== n.length && o.type.String(t)
                  ? (D.length > 0 && d.removeClassToggle(),
                    (M = t),
                    (D = n),
                    d.on(
                      "enter.internal_class leave.internal_class",
                      function (e) {
                        var t = "enter" === e.type ? o.addClass : o.removeClass;
                        D.forEach(function (e, n) {
                          t(e, M);
                        });
                      }
                    ),
                    d)
                  : (E(
                      1,
                      "ERROR calling method 'setClassToggle()': Invalid " +
                        (0 === n.length ? "element" : "classes") +
                        " supplied."
                    ),
                    d);
              }),
              (this.removeClassToggle = function (e) {
                return (
                  e &&
                    D.forEach(function (e, t) {
                      o.removeClass(e, M);
                    }),
                  d.off("start.internal_class end.internal_class"),
                  (M = void 0),
                  (D = []),
                  d
                );
              }),
              y(),
              d
            );
          });
        var r = {
          defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: 0.5,
            reverse: !0,
            loglevel: 2,
          },
          validate: {
            offset: function (e) {
              if (((e = parseFloat(e)), !o.type.Number(e)))
                throw ['Invalid value for option "offset":', e];
              return e;
            },
            triggerElement: function (e) {
              if ((e = e || void 0)) {
                var t = o.get.elements(e)[0];
                if (!t || !t.parentNode)
                  throw [
                    'Element defined in option "triggerElement" was not found:',
                    e,
                  ];
                e = t;
              }
              return e;
            },
            triggerHook: function (e) {
              var t = {
                onCenter: 0.5,
                onEnter: 1,
                onLeave: 0,
              };
              if (o.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
              else {
                if (!(e in t))
                  throw ['Invalid value for option "triggerHook": ', e];
                e = t[e];
              }
              return e;
            },
            reverse: function (e) {
              return !!e;
            },
            loglevel: function (e) {
              if (((e = parseInt(e)), !o.type.Number(e) || e < 0 || e > 3))
                throw ['Invalid value for option "loglevel":', e];
              return e;
            },
          },
          shifts: ["duration", "offset", "triggerHook"],
        };
        (e.Scene.addOption = function (t, n, o, i) {
          t in r.defaults
            ? e._util.log(
                1,
                "[static] ScrollMagic.Scene -> Cannot add Scene option '" +
                  t +
                  "', because it already exists."
              )
            : ((r.defaults[t] = n), (r.validate[t] = o), i && r.shifts.push(t));
        }),
          (e.Scene.extend = function (t) {
            var n = this;
            (e.Scene = function () {
              return (
                n.apply(this, arguments),
                (this.$super = o.extend({}, this)),
                t.apply(this, arguments) || this
              );
            }),
              o.extend(e.Scene, n),
              (e.Scene.prototype = n.prototype),
              (e.Scene.prototype.constructor = e.Scene);
          }),
          (e.Event = function (e, t, n, r) {
            for (var o in (r = r || {})) this[o] = r[o];
            return (
              (this.type = e),
              (this.target = this.currentTarget = n),
              (this.namespace = t || ""),
              (this.timeStamp = this.timestamp = Date.now()),
              this
            );
          });
        var o = (e._util = (function (e) {
          var t,
            n = {},
            r = function (e) {
              return parseFloat(e) || 0;
            },
            o = function (t) {
              return t.currentStyle ? t.currentStyle : e.getComputedStyle(t);
            },
            i = function (t, n, i, l) {
              if ((n = n === document ? e : n) === e) l = !1;
              else if (!g.DomElement(n)) return 0;
              t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
              var s =
                (i
                  ? n["offset" + t] || n["outer" + t]
                  : n["client" + t] || n["inner" + t]) || 0;
              if (i && l) {
                var a = o(n);
                s +=
                  "Height" === t
                    ? r(a.marginTop) + r(a.marginBottom)
                    : r(a.marginLeft) + r(a.marginRight);
              }
              return s;
            },
            l = function (e) {
              return e
                .replace(/^[^a-z]+([a-z])/g, "$1")
                .replace(/-([a-z])/g, function (e) {
                  return e[1].toUpperCase();
                });
            };
          (n.extend = function (e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)
              if (arguments[t])
                for (var n in arguments[t])
                  arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e;
          }),
            (n.isMarginCollapseType = function (e) {
              return (
                ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(
                  e
                ) > -1
              );
            });
          var s = 0,
            a = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            u = e.cancelAnimationFrame;
          for (t = 0; !c && t < a.length; ++t)
            (c = e[a[t] + "RequestAnimationFrame"]),
              (u =
                e[a[t] + "CancelAnimationFrame"] ||
                e[a[t] + "CancelRequestAnimationFrame"]);
          c ||
            (c = function (t) {
              var n = new Date().getTime(),
                r = Math.max(0, 16 - (n - s)),
                o = e.setTimeout(function () {
                  t(n + r);
                }, r);
              return (s = n + r), o;
            }),
            u ||
              (u = function (t) {
                e.clearTimeout(t);
              }),
            (n.rAF = c.bind(e)),
            (n.cAF = u.bind(e));
          var f = ["error", "warn", "log"],
            d = e.console || {};
          for (d.log = d.log || function () {}, t = 0; t < f.length; t++) {
            var p = f[t];
            d[p] || (d[p] = d.log);
          }
          n.log = function (e) {
            (e > f.length || e <= 0) && (e = f.length);
            var t = new Date(),
              n =
                ("0" + t.getHours()).slice(-2) +
                ":" +
                ("0" + t.getMinutes()).slice(-2) +
                ":" +
                ("0" + t.getSeconds()).slice(-2) +
                ":" +
                ("00" + t.getMilliseconds()).slice(-3),
              r = f[e - 1],
              o = Array.prototype.splice.call(arguments, 1),
              i = Function.prototype.bind.call(d[r], d);
            o.unshift(n), i.apply(d, o);
          };
          var g = (n.type = function (e) {
            return Object.prototype.toString
              .call(e)
              .replace(/^\[object (.+)\]$/, "$1")
              .toLowerCase();
          });
          (g.String = function (e) {
            return "string" === g(e);
          }),
            (g.Function = function (e) {
              return "function" === g(e);
            }),
            (g.Array = function (e) {
              return Array.isArray(e);
            }),
            (g.Number = function (e) {
              return !g.Array(e) && e - parseFloat(e) + 1 >= 0;
            }),
            (g.DomElement = function (e) {
              return "object" == typeof HTMLElement ||
                "function" == typeof HTMLElement
                ? e instanceof HTMLElement || e instanceof SVGElement
                : e &&
                    "object" == typeof e &&
                    null !== e &&
                    1 === e.nodeType &&
                    "string" == typeof e.nodeName;
            });
          var h = (n.get = {});
          return (
            (h.elements = function (t) {
              var n = [];
              if (g.String(t))
                try {
                  t = document.querySelectorAll(t);
                } catch (e) {
                  return n;
                }
              if ("nodelist" === g(t) || g.Array(t) || t instanceof NodeList)
                for (var r = 0, o = (n.length = t.length); r < o; r++) {
                  var i = t[r];
                  n[r] = g.DomElement(i) ? i : h.elements(i);
                }
              else (g.DomElement(t) || t === document || t === e) && (n = [t]);
              return n;
            }),
            (h.scrollTop = function (t) {
              return t && "number" == typeof t.scrollTop
                ? t.scrollTop
                : e.pageYOffset || 0;
            }),
            (h.scrollLeft = function (t) {
              return t && "number" == typeof t.scrollLeft
                ? t.scrollLeft
                : e.pageXOffset || 0;
            }),
            (h.width = function (e, t, n) {
              return i("width", e, t, n);
            }),
            (h.height = function (e, t, n) {
              return i("height", e, t, n);
            }),
            (h.offset = function (e, t) {
              var n = {
                top: 0,
                left: 0,
              };
              if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                (n.top = r.top),
                  (n.left = r.left),
                  t || ((n.top += h.scrollTop()), (n.left += h.scrollLeft()));
              }
              return n;
            }),
            (n.addClass = function (e, t) {
              t &&
                (e.classList ? e.classList.add(t) : (e.className += " " + t));
            }),
            (n.removeClass = function (e, t) {
              t &&
                (e.classList
                  ? e.classList.remove(t)
                  : (e.className = e.className.replace(
                      new RegExp(
                        "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                        "gi"
                      ),
                      " "
                    )));
            }),
            (n.css = function (e, t) {
              if (g.String(t)) return o(e)[l(t)];
              if (g.Array(t)) {
                var n = {},
                  r = o(e);
                return (
                  t.forEach(function (e, t) {
                    n[e] = r[l(e)];
                  }),
                  n
                );
              }
              for (var i in t) {
                var s = t[i];
                s == parseFloat(s) && (s += "px"), (e.style[l(i)] = s);
              }
            }),
            n
          );
        })(window || {}));
        return (
          (e.Scene.prototype.addIndicators = function () {
            return (
              e._util.log(
                1,
                "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"
              ),
              this
            );
          }),
          (e.Scene.prototype.removeIndicators = function () {
            return (
              e._util.log(
                1,
                "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"
              ),
              this
            );
          }),
          (e.Scene.prototype.setTween = function () {
            return (
              e._util.log(
                1,
                "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"
              ),
              this
            );
          }),
          (e.Scene.prototype.removeTween = function () {
            return (
              e._util.log(
                1,
                "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"
              ),
              this
            );
          }),
          (e.Scene.prototype.setVelocity = function () {
            return (
              e._util.log(
                1,
                "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"
              ),
              this
            );
          }),
          (e.Scene.prototype.removeVelocity = function () {
            return (
              e._util.log(
                1,
                "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"
              ),
              this
            );
          }),
          e
        );
      }),
        void 0 === (o = "function" == typeof r ? r.call(t, n, t, e) : r) ||
          (e.exports = o);
    },
  },
]);
