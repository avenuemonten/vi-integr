/*! For license information please see 8413.3a7110a7.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [8413],
  {
    43734: function (e, t, i) {
      !(function (e, t, i) {
        "use strict";
        function n(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function s(e, t, i) {
          return t && n(e.prototype, t), i && n(e, i), e;
        }
        function a(e, t, i) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = i),
            e
          );
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                a(e, t, i[t]);
              });
          }
          return e;
        }
        function r(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = t);
        }
        (t = t && t.hasOwnProperty("default") ? t.default : t),
          (i = i && i.hasOwnProperty("default") ? i.default : i);
        var l = "transitionend",
          c = 1e6,
          d = 1e3;
        function u(e) {
          return {}.toString
            .call(e)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase();
        }
        function h() {
          return {
            bindType: l,
            delegateType: l,
            handle: function (e) {
              if (t(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            },
          };
        }
        function p(e) {
          var i = this,
            n = !1;
          return (
            t(this).one(m.TRANSITION_END, function () {
              n = !0;
            }),
            setTimeout(function () {
              n || m.triggerTransitionEnd(i);
            }, e),
            this
          );
        }
        function f() {
          (t.fn.emulateTransitionEnd = p),
            (t.event.special[m.TRANSITION_END] = h());
        }
        var m = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (e) {
            do {
              e += ~~(Math.random() * c);
            } while (document.getElementById(e));
            return e;
          },
          getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
              var i = e.getAttribute("href");
              t = i && "#" !== i ? i.trim() : "";
            }
            try {
              return document.querySelector(t) ? t : null;
            } catch (e) {
              return null;
            }
          },
          getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var i = t(e).css("transition-duration"),
              n = t(e).css("transition-delay"),
              s = parseFloat(i),
              a = parseFloat(n);
            return s || a
              ? ((i = i.split(",")[0]),
                (n = n.split(",")[0]),
                (parseFloat(i) + parseFloat(n)) * d)
              : 0;
          },
          reflow: function (e) {
            return e.offsetHeight;
          },
          triggerTransitionEnd: function (e) {
            t(e).trigger(l);
          },
          supportsTransitionEnd: function () {
            return Boolean(l);
          },
          isElement: function (e) {
            return (e[0] || e).nodeType;
          },
          typeCheckConfig: function (e, t, i) {
            for (var n in i)
              if (Object.prototype.hasOwnProperty.call(i, n)) {
                var s = i[n],
                  a = t[n],
                  o = a && m.isElement(a) ? "element" : u(a);
                if (!new RegExp(s).test(o))
                  throw new Error(
                    e.toUpperCase() +
                      ': Option "' +
                      n +
                      '" provided type "' +
                      o +
                      '" but expected type "' +
                      s +
                      '".'
                  );
              }
          },
          findShadowRoot: function (e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
              var t = e.getRootNode();
              return t instanceof ShadowRoot ? t : null;
            }
            return e instanceof ShadowRoot
              ? e
              : e.parentNode
              ? m.findShadowRoot(e.parentNode)
              : null;
          },
        };
        f();
        var g = "alert",
          v = "4.3.1",
          _ = "bs.alert",
          y = "." + _,
          b = ".data-api",
          w = t.fn[g],
          S = {
            DISMISS: '[data-dismiss="alert"]',
          },
          k = {
            CLOSE: "close" + y,
            CLOSED: "closed" + y,
            CLICK_DATA_API: "click" + y + b,
          },
          C = {
            ALERT: "alert",
            FADE: "fade",
            SHOW: "show",
          },
          x = (function () {
            function e(e) {
              this._element = e;
            }
            var i = e.prototype;
            return (
              (i.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)),
                  this._triggerCloseEvent(t).isDefaultPrevented() ||
                    this._removeElement(t);
              }),
              (i.dispose = function () {
                t.removeData(this._element, _), (this._element = null);
              }),
              (i._getRootElement = function (e) {
                var i = m.getSelectorFromElement(e),
                  n = !1;
                return (
                  i && (n = document.querySelector(i)),
                  n || (n = t(e).closest("." + C.ALERT)[0]),
                  n
                );
              }),
              (i._triggerCloseEvent = function (e) {
                var i = t.Event(k.CLOSE);
                return t(e).trigger(i), i;
              }),
              (i._removeElement = function (e) {
                var i = this;
                if ((t(e).removeClass(C.SHOW), t(e).hasClass(C.FADE))) {
                  var n = m.getTransitionDurationFromElement(e);
                  t(e)
                    .one(m.TRANSITION_END, function (t) {
                      return i._destroyElement(e, t);
                    })
                    .emulateTransitionEnd(n);
                } else this._destroyElement(e);
              }),
              (i._destroyElement = function (e) {
                t(e).detach().trigger(k.CLOSED).remove();
              }),
              (e._jQueryInterface = function (i) {
                return this.each(function () {
                  var n = t(this),
                    s = n.data(_);
                  s || ((s = new e(this)), n.data(_, s)),
                    "close" === i && s[i](this);
                });
              }),
              (e._handleDismiss = function (e) {
                return function (t) {
                  t && t.preventDefault(), e.close(this);
                };
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return v;
                  },
                },
              ]),
              e
            );
          })();
        t(document).on(k.CLICK_DATA_API, S.DISMISS, x._handleDismiss(new x())),
          (t.fn[g] = x._jQueryInterface),
          (t.fn[g].Constructor = x),
          (t.fn[g].noConflict = function () {
            return (t.fn[g] = w), x._jQueryInterface;
          });
        var T = "button",
          D = "4.3.1",
          E = "bs.button",
          I = "." + E,
          A = ".data-api",
          O = t.fn[T],
          M = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus",
          },
          N = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: 'input:not([type="hidden"])',
            ACTIVE: ".active",
            BUTTON: ".btn",
          },
          L = {
            CLICK_DATA_API: "click" + I + A,
            FOCUS_BLUR_DATA_API: "focus" + I + A + " blur" + I + A,
          },
          P = (function () {
            function e(e) {
              this._element = e;
            }
            var i = e.prototype;
            return (
              (i.toggle = function () {
                var e = !0,
                  i = !0,
                  n = t(this._element).closest(N.DATA_TOGGLE)[0];
                if (n) {
                  var s = this._element.querySelector(N.INPUT);
                  if (s) {
                    if ("radio" === s.type)
                      if (
                        s.checked &&
                        this._element.classList.contains(M.ACTIVE)
                      )
                        e = !1;
                      else {
                        var a = n.querySelector(N.ACTIVE);
                        a && t(a).removeClass(M.ACTIVE);
                      }
                    if (e) {
                      if (
                        s.hasAttribute("disabled") ||
                        n.hasAttribute("disabled") ||
                        s.classList.contains("disabled") ||
                        n.classList.contains("disabled")
                      )
                        return;
                      (s.checked = !this._element.classList.contains(M.ACTIVE)),
                        t(s).trigger("change");
                    }
                    s.focus(), (i = !1);
                  }
                }
                i &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !this._element.classList.contains(M.ACTIVE)
                  ),
                  e && t(this._element).toggleClass(M.ACTIVE);
              }),
              (i.dispose = function () {
                t.removeData(this._element, E), (this._element = null);
              }),
              (e._jQueryInterface = function (i) {
                return this.each(function () {
                  var n = t(this).data(E);
                  n || ((n = new e(this)), t(this).data(E, n)),
                    "toggle" === i && n[i]();
                });
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return D;
                  },
                },
              ]),
              e
            );
          })();
        t(document)
          .on(L.CLICK_DATA_API, N.DATA_TOGGLE_CARROT, function (e) {
            e.preventDefault();
            var i = e.target;
            t(i).hasClass(M.BUTTON) || (i = t(i).closest(N.BUTTON)),
              P._jQueryInterface.call(t(i), "toggle");
          })
          .on(L.FOCUS_BLUR_DATA_API, N.DATA_TOGGLE_CARROT, function (e) {
            var i = t(e.target).closest(N.BUTTON)[0];
            t(i).toggleClass(M.FOCUS, /^focus(in)?$/.test(e.type));
          }),
          (t.fn[T] = P._jQueryInterface),
          (t.fn[T].Constructor = P),
          (t.fn[T].noConflict = function () {
            return (t.fn[T] = O), P._jQueryInterface;
          });
        var R = "carousel",
          H = "4.3.1",
          $ = "bs.carousel",
          W = "." + $,
          F = ".data-api",
          j = t.fn[R],
          B = 37,
          z = 39,
          q = 500,
          U = 40,
          V = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
          },
          Y = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
          },
          K = {
            NEXT: "next",
            PREV: "prev",
            LEFT: "left",
            RIGHT: "right",
          },
          G = {
            SLIDE: "slide" + W,
            SLID: "slid" + W,
            KEYDOWN: "keydown" + W,
            MOUSEENTER: "mouseenter" + W,
            MOUSELEAVE: "mouseleave" + W,
            TOUCHSTART: "touchstart" + W,
            TOUCHMOVE: "touchmove" + W,
            TOUCHEND: "touchend" + W,
            POINTERDOWN: "pointerdown" + W,
            POINTERUP: "pointerup" + W,
            DRAG_START: "dragstart" + W,
            LOAD_DATA_API: "load" + W + F,
            CLICK_DATA_API: "click" + W + F,
          },
          X = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "carousel-item-right",
            LEFT: "carousel-item-left",
            NEXT: "carousel-item-next",
            PREV: "carousel-item-prev",
            ITEM: "carousel-item",
            POINTER_EVENT: "pointer-event",
          },
          Q = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]',
          },
          J = {
            TOUCH: "touch",
            PEN: "pen",
          },
          Z = (function () {
            function e(e, t) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(t)),
                (this._element = e),
                (this._indicatorsElement = this._element.querySelector(
                  Q.INDICATORS
                )),
                (this._touchSupported =
                  "ontouchstart" in document.documentElement ||
                  navigator.maxTouchPoints > 0),
                (this._pointerEvent = Boolean(
                  window.PointerEvent || window.MSPointerEvent
                )),
                this._addEventListeners();
            }
            var i = e.prototype;
            return (
              (i.next = function () {
                this._isSliding || this._slide(K.NEXT);
              }),
              (i.nextWhenVisible = function () {
                !document.hidden &&
                  t(this._element).is(":visible") &&
                  "hidden" !== t(this._element).css("visibility") &&
                  this.next();
              }),
              (i.prev = function () {
                this._isSliding || this._slide(K.PREV);
              }),
              (i.pause = function (e) {
                e || (this._isPaused = !0),
                  this._element.querySelector(Q.NEXT_PREV) &&
                    (m.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (i.cycle = function (e) {
                e || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (i.to = function (e) {
                var i = this;
                this._activeElement = this._element.querySelector(
                  Q.ACTIVE_ITEM
                );
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding)
                    t(this._element).one(G.SLID, function () {
                      return i.to(e);
                    });
                  else {
                    if (n === e) return this.pause(), void this.cycle();
                    var s = e > n ? K.NEXT : K.PREV;
                    this._slide(s, this._items[e]);
                  }
              }),
              (i.dispose = function () {
                t(this._element).off(W),
                  t.removeData(this._element, $),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (i._getConfig = function (e) {
                return (e = o({}, V, e)), m.typeCheckConfig(R, e, Y), e;
              }),
              (i._handleSwipe = function () {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= U)) {
                  var t = e / this.touchDeltaX;
                  t > 0 && this.prev(), t < 0 && this.next();
                }
              }),
              (i._addEventListeners = function () {
                var e = this;
                this._config.keyboard &&
                  t(this._element).on(G.KEYDOWN, function (t) {
                    return e._keydown(t);
                  }),
                  "hover" === this._config.pause &&
                    t(this._element)
                      .on(G.MOUSEENTER, function (t) {
                        return e.pause(t);
                      })
                      .on(G.MOUSELEAVE, function (t) {
                        return e.cycle(t);
                      }),
                  this._config.touch && this._addTouchEventListeners();
              }),
              (i._addTouchEventListeners = function () {
                var e = this;
                if (this._touchSupported) {
                  var i = function (t) {
                      e._pointerEvent &&
                      J[t.originalEvent.pointerType.toUpperCase()]
                        ? (e.touchStartX = t.originalEvent.clientX)
                        : e._pointerEvent ||
                          (e.touchStartX = t.originalEvent.touches[0].clientX);
                    },
                    n = function (t) {
                      t.originalEvent.touches &&
                      t.originalEvent.touches.length > 1
                        ? (e.touchDeltaX = 0)
                        : (e.touchDeltaX =
                            t.originalEvent.touches[0].clientX - e.touchStartX);
                    },
                    s = function (t) {
                      e._pointerEvent &&
                        J[t.originalEvent.pointerType.toUpperCase()] &&
                        (e.touchDeltaX =
                          t.originalEvent.clientX - e.touchStartX),
                        e._handleSwipe(),
                        "hover" === e._config.pause &&
                          (e.pause(),
                          e.touchTimeout && clearTimeout(e.touchTimeout),
                          (e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t);
                          }, q + e._config.interval)));
                    };
                  t(this._element.querySelectorAll(Q.ITEM_IMG)).on(
                    G.DRAG_START,
                    function (e) {
                      return e.preventDefault();
                    }
                  ),
                    this._pointerEvent
                      ? (t(this._element).on(G.POINTERDOWN, function (e) {
                          return i(e);
                        }),
                        t(this._element).on(G.POINTERUP, function (e) {
                          return s(e);
                        }),
                        this._element.classList.add(X.POINTER_EVENT))
                      : (t(this._element).on(G.TOUCHSTART, function (e) {
                          return i(e);
                        }),
                        t(this._element).on(G.TOUCHMOVE, function (e) {
                          return n(e);
                        }),
                        t(this._element).on(G.TOUCHEND, function (e) {
                          return s(e);
                        }));
                }
              }),
              (i._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName))
                  switch (e.which) {
                    case B:
                      e.preventDefault(), this.prev();
                      break;
                    case z:
                      e.preventDefault(), this.next();
                  }
              }),
              (i._getItemIndex = function (e) {
                return (
                  (this._items =
                    e && e.parentNode
                      ? [].slice.call(e.parentNode.querySelectorAll(Q.ITEM))
                      : []),
                  this._items.indexOf(e)
                );
              }),
              (i._getItemByDirection = function (e, t) {
                var i = e === K.NEXT,
                  n = e === K.PREV,
                  s = this._getItemIndex(t),
                  a = this._items.length - 1;
                if (((n && 0 === s) || (i && s === a)) && !this._config.wrap)
                  return t;
                var o = (s + (e === K.PREV ? -1 : 1)) % this._items.length;
                return -1 === o
                  ? this._items[this._items.length - 1]
                  : this._items[o];
              }),
              (i._triggerSlideEvent = function (e, i) {
                var n = this._getItemIndex(e),
                  s = this._getItemIndex(
                    this._element.querySelector(Q.ACTIVE_ITEM)
                  ),
                  a = t.Event(G.SLIDE, {
                    relatedTarget: e,
                    direction: i,
                    from: s,
                    to: n,
                  });
                return t(this._element).trigger(a), a;
              }),
              (i._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                  var i = [].slice.call(
                    this._indicatorsElement.querySelectorAll(Q.ACTIVE)
                  );
                  t(i).removeClass(X.ACTIVE);
                  var n =
                    this._indicatorsElement.children[this._getItemIndex(e)];
                  n && t(n).addClass(X.ACTIVE);
                }
              }),
              (i._slide = function (e, i) {
                var n,
                  s,
                  a,
                  o = this,
                  r = this._element.querySelector(Q.ACTIVE_ITEM),
                  l = this._getItemIndex(r),
                  c = i || (r && this._getItemByDirection(e, r)),
                  d = this._getItemIndex(c),
                  u = Boolean(this._interval);
                if (
                  (e === K.NEXT
                    ? ((n = X.LEFT), (s = X.NEXT), (a = K.LEFT))
                    : ((n = X.RIGHT), (s = X.PREV), (a = K.RIGHT)),
                  c && t(c).hasClass(X.ACTIVE))
                )
                  this._isSliding = !1;
                else if (
                  !this._triggerSlideEvent(c, a).isDefaultPrevented() &&
                  r &&
                  c
                ) {
                  (this._isSliding = !0),
                    u && this.pause(),
                    this._setActiveIndicatorElement(c);
                  var h = t.Event(G.SLID, {
                    relatedTarget: c,
                    direction: a,
                    from: l,
                    to: d,
                  });
                  if (t(this._element).hasClass(X.SLIDE)) {
                    t(c).addClass(s),
                      m.reflow(c),
                      t(r).addClass(n),
                      t(c).addClass(n);
                    var p = parseInt(c.getAttribute("data-interval"), 10);
                    p
                      ? ((this._config.defaultInterval =
                          this._config.defaultInterval ||
                          this._config.interval),
                        (this._config.interval = p))
                      : (this._config.interval =
                          this._config.defaultInterval ||
                          this._config.interval);
                    var f = m.getTransitionDurationFromElement(r);
                    t(r)
                      .one(m.TRANSITION_END, function () {
                        t(c)
                          .removeClass(n + " " + s)
                          .addClass(X.ACTIVE),
                          t(r).removeClass(X.ACTIVE + " " + s + " " + n),
                          (o._isSliding = !1),
                          setTimeout(function () {
                            return t(o._element).trigger(h);
                          }, 0);
                      })
                      .emulateTransitionEnd(f);
                  } else
                    t(r).removeClass(X.ACTIVE),
                      t(c).addClass(X.ACTIVE),
                      (this._isSliding = !1),
                      t(this._element).trigger(h);
                  u && this.cycle();
                }
              }),
              (e._jQueryInterface = function (i) {
                return this.each(function () {
                  var n = t(this).data($),
                    s = o({}, V, t(this).data());
                  "object" == typeof i && (s = o({}, s, i));
                  var a = "string" == typeof i ? i : s.slide;
                  if (
                    (n || ((n = new e(this, s)), t(this).data($, n)),
                    "number" == typeof i)
                  )
                    n.to(i);
                  else if ("string" == typeof a) {
                    if (void 0 === n[a])
                      throw new TypeError('No method named "' + a + '"');
                    n[a]();
                  } else s.interval && s.ride && (n.pause(), n.cycle());
                });
              }),
              (e._dataApiClickHandler = function (i) {
                var n = m.getSelectorFromElement(this);
                if (n) {
                  var s = t(n)[0];
                  if (s && t(s).hasClass(X.CAROUSEL)) {
                    var a = o({}, t(s).data(), t(this).data()),
                      r = this.getAttribute("data-slide-to");
                    r && (a.interval = !1),
                      e._jQueryInterface.call(t(s), a),
                      r && t(s).data($).to(r),
                      i.preventDefault();
                  }
                }
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return H;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return V;
                  },
                },
              ]),
              e
            );
          })();
        t(document).on(G.CLICK_DATA_API, Q.DATA_SLIDE, Z._dataApiClickHandler),
          t(window).on(G.LOAD_DATA_API, function () {
            for (
              var e = [].slice.call(document.querySelectorAll(Q.DATA_RIDE)),
                i = 0,
                n = e.length;
              i < n;
              i++
            ) {
              var s = t(e[i]);
              Z._jQueryInterface.call(s, s.data());
            }
          }),
          (t.fn[R] = Z._jQueryInterface),
          (t.fn[R].Constructor = Z),
          (t.fn[R].noConflict = function () {
            return (t.fn[R] = j), Z._jQueryInterface;
          });
        var ee = "collapse",
          te = "4.3.1",
          ie = "bs.collapse",
          ne = "." + ie,
          se = ".data-api",
          ae = t.fn[ee],
          oe = {
            toggle: !0,
            parent: "",
          },
          re = {
            toggle: "boolean",
            parent: "(string|element)",
          },
          le = {
            SHOW: "show" + ne,
            SHOWN: "shown" + ne,
            HIDE: "hide" + ne,
            HIDDEN: "hidden" + ne,
            CLICK_DATA_API: "click" + ne + se,
          },
          ce = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed",
          },
          de = {
            WIDTH: "width",
            HEIGHT: "height",
          },
          ue = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]',
          },
          he = (function () {
            function e(e, t) {
              (this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(t)),
                (this._triggerArray = [].slice.call(
                  document.querySelectorAll(
                    '[data-toggle="collapse"][href="#' +
                      e.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      e.id +
                      '"]'
                  )
                ));
              for (
                var i = [].slice.call(
                    document.querySelectorAll(ue.DATA_TOGGLE)
                  ),
                  n = 0,
                  s = i.length;
                n < s;
                n++
              ) {
                var a = i[n],
                  o = m.getSelectorFromElement(a),
                  r = [].slice
                    .call(document.querySelectorAll(o))
                    .filter(function (t) {
                      return t === e;
                    });
                null !== o &&
                  r.length > 0 &&
                  ((this._selector = o), this._triggerArray.push(a));
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var i = e.prototype;
            return (
              (i.toggle = function () {
                t(this._element).hasClass(ce.SHOW) ? this.hide() : this.show();
              }),
              (i.show = function () {
                var i,
                  n,
                  s = this;
                if (
                  !(
                    this._isTransitioning ||
                    t(this._element).hasClass(ce.SHOW) ||
                    (this._parent &&
                      0 ===
                        (i = [].slice
                          .call(this._parent.querySelectorAll(ue.ACTIVES))
                          .filter(function (e) {
                            return "string" == typeof s._config.parent
                              ? e.getAttribute("data-parent") ===
                                  s._config.parent
                              : e.classList.contains(ce.COLLAPSE);
                          })).length &&
                      (i = null),
                    i &&
                      (n = t(i).not(this._selector).data(ie)) &&
                      n._isTransitioning)
                  )
                ) {
                  var a = t.Event(le.SHOW);
                  if ((t(this._element).trigger(a), !a.isDefaultPrevented())) {
                    i &&
                      (e._jQueryInterface.call(
                        t(i).not(this._selector),
                        "hide"
                      ),
                      n || t(i).data(ie, null));
                    var o = this._getDimension();
                    t(this._element)
                      .removeClass(ce.COLLAPSE)
                      .addClass(ce.COLLAPSING),
                      (this._element.style[o] = 0),
                      this._triggerArray.length &&
                        t(this._triggerArray)
                          .removeClass(ce.COLLAPSED)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var r = function () {
                        t(s._element)
                          .removeClass(ce.COLLAPSING)
                          .addClass(ce.COLLAPSE)
                          .addClass(ce.SHOW),
                          (s._element.style[o] = ""),
                          s.setTransitioning(!1),
                          t(s._element).trigger(le.SHOWN);
                      },
                      l = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                      c = m.getTransitionDurationFromElement(this._element);
                    t(this._element)
                      .one(m.TRANSITION_END, r)
                      .emulateTransitionEnd(c),
                      (this._element.style[o] = this._element[l] + "px");
                  }
                }
              }),
              (i.hide = function () {
                var e = this;
                if (
                  !this._isTransitioning &&
                  t(this._element).hasClass(ce.SHOW)
                ) {
                  var i = t.Event(le.HIDE);
                  if ((t(this._element).trigger(i), !i.isDefaultPrevented())) {
                    var n = this._getDimension();
                    (this._element.style[n] =
                      this._element.getBoundingClientRect()[n] + "px"),
                      m.reflow(this._element),
                      t(this._element)
                        .addClass(ce.COLLAPSING)
                        .removeClass(ce.COLLAPSE)
                        .removeClass(ce.SHOW);
                    var s = this._triggerArray.length;
                    if (s > 0)
                      for (var a = 0; a < s; a++) {
                        var o = this._triggerArray[a],
                          r = m.getSelectorFromElement(o);
                        null !== r &&
                          (t(
                            [].slice.call(document.querySelectorAll(r))
                          ).hasClass(ce.SHOW) ||
                            t(o)
                              .addClass(ce.COLLAPSED)
                              .attr("aria-expanded", !1));
                      }
                    this.setTransitioning(!0);
                    var l = function () {
                      e.setTransitioning(!1),
                        t(e._element)
                          .removeClass(ce.COLLAPSING)
                          .addClass(ce.COLLAPSE)
                          .trigger(le.HIDDEN);
                    };
                    this._element.style[n] = "";
                    var c = m.getTransitionDurationFromElement(this._element);
                    t(this._element)
                      .one(m.TRANSITION_END, l)
                      .emulateTransitionEnd(c);
                  }
                }
              }),
              (i.setTransitioning = function (e) {
                this._isTransitioning = e;
              }),
              (i.dispose = function () {
                t.removeData(this._element, ie),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (i._getConfig = function (e) {
                return (
                  ((e = o({}, oe, e)).toggle = Boolean(e.toggle)),
                  m.typeCheckConfig(ee, e, re),
                  e
                );
              }),
              (i._getDimension = function () {
                return t(this._element).hasClass(de.WIDTH)
                  ? de.WIDTH
                  : de.HEIGHT;
              }),
              (i._getParent = function () {
                var i,
                  n = this;
                m.isElement(this._config.parent)
                  ? ((i = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (i = this._config.parent[0]))
                  : (i = document.querySelector(this._config.parent));
                var s =
                    '[data-toggle="collapse"][data-parent="' +
                    this._config.parent +
                    '"]',
                  a = [].slice.call(i.querySelectorAll(s));
                return (
                  t(a).each(function (t, i) {
                    n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [
                      i,
                    ]);
                  }),
                  i
                );
              }),
              (i._addAriaAndCollapsedClass = function (e, i) {
                var n = t(e).hasClass(ce.SHOW);
                i.length &&
                  t(i).toggleClass(ce.COLLAPSED, !n).attr("aria-expanded", n);
              }),
              (e._getTargetFromElement = function (e) {
                var t = m.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null;
              }),
              (e._jQueryInterface = function (i) {
                return this.each(function () {
                  var n = t(this),
                    s = n.data(ie),
                    a = o({}, oe, n.data(), "object" == typeof i && i ? i : {});
                  if (
                    (!s && a.toggle && /show|hide/.test(i) && (a.toggle = !1),
                    s || ((s = new e(this, a)), n.data(ie, s)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === s[i])
                      throw new TypeError('No method named "' + i + '"');
                    s[i]();
                  }
                });
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return te;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return oe;
                  },
                },
              ]),
              e
            );
          })();
        t(document).on(le.CLICK_DATA_API, ue.DATA_TOGGLE, function (e) {
          "A" === e.currentTarget.tagName && e.preventDefault();
          var i = t(this),
            n = m.getSelectorFromElement(this),
            s = [].slice.call(document.querySelectorAll(n));
          t(s).each(function () {
            var e = t(this),
              n = e.data(ie) ? "toggle" : i.data();
            he._jQueryInterface.call(e, n);
          });
        }),
          (t.fn[ee] = he._jQueryInterface),
          (t.fn[ee].Constructor = he),
          (t.fn[ee].noConflict = function () {
            return (t.fn[ee] = ae), he._jQueryInterface;
          });
        var pe = "dropdown",
          fe = "4.3.1",
          me = "bs.dropdown",
          ge = "." + me,
          ve = ".data-api",
          _e = t.fn[pe],
          ye = 27,
          be = 32,
          we = 9,
          Se = 38,
          ke = 40,
          Ce = 3,
          xe = new RegExp(Se + "|" + ke + "|" + ye),
          Te = {
            HIDE: "hide" + ge,
            HIDDEN: "hidden" + ge,
            SHOW: "show" + ge,
            SHOWN: "shown" + ge,
            CLICK: "click" + ge,
            CLICK_DATA_API: "click" + ge + ve,
            KEYDOWN_DATA_API: "keydown" + ge + ve,
            KEYUP_DATA_API: "keyup" + ge + ve,
          },
          De = {
            DISABLED: "disabled",
            SHOW: "show",
            DROPUP: "dropup",
            DROPRIGHT: "dropright",
            DROPLEFT: "dropleft",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            POSITION_STATIC: "position-static",
          },
          Ee = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            MENU: ".dropdown-menu",
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS:
              ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          },
          Ie = {
            TOP: "top-start",
            TOPEND: "top-end",
            BOTTOM: "bottom-start",
            BOTTOMEND: "bottom-end",
            RIGHT: "right-start",
            RIGHTEND: "right-end",
            LEFT: "left-start",
            LEFTEND: "left-end",
          },
          Ae = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
          },
          Oe = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
          },
          Me = (function () {
            function e(e, t) {
              (this._element = e),
                (this._popper = null),
                (this._config = this._getConfig(t)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar()),
                this._addEventListeners();
            }
            var n = e.prototype;
            return (
              (n.toggle = function () {
                if (
                  !this._element.disabled &&
                  !t(this._element).hasClass(De.DISABLED)
                ) {
                  var n = e._getParentFromElement(this._element),
                    s = t(this._menu).hasClass(De.SHOW);
                  if ((e._clearMenus(), !s)) {
                    var a = {
                        relatedTarget: this._element,
                      },
                      o = t.Event(Te.SHOW, a);
                    if ((t(n).trigger(o), !o.isDefaultPrevented())) {
                      if (!this._inNavbar) {
                        if (void 0 === i)
                          throw new TypeError(
                            "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                          );
                        var r = this._element;
                        "parent" === this._config.reference
                          ? (r = n)
                          : m.isElement(this._config.reference) &&
                            ((r = this._config.reference),
                            void 0 !== this._config.reference.jquery &&
                              (r = this._config.reference[0])),
                          "scrollParent" !== this._config.boundary &&
                            t(n).addClass(De.POSITION_STATIC),
                          (this._popper = new i(
                            r,
                            this._menu,
                            this._getPopperConfig()
                          ));
                      }
                      "ontouchstart" in document.documentElement &&
                        0 === t(n).closest(Ee.NAVBAR_NAV).length &&
                        t(document.body)
                          .children()
                          .on("mouseover", null, t.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        t(this._menu).toggleClass(De.SHOW),
                        t(n).toggleClass(De.SHOW).trigger(t.Event(Te.SHOWN, a));
                    }
                  }
                }
              }),
              (n.show = function () {
                if (
                  !(
                    this._element.disabled ||
                    t(this._element).hasClass(De.DISABLED) ||
                    t(this._menu).hasClass(De.SHOW)
                  )
                ) {
                  var i = {
                      relatedTarget: this._element,
                    },
                    n = t.Event(Te.SHOW, i),
                    s = e._getParentFromElement(this._element);
                  t(s).trigger(n),
                    n.isDefaultPrevented() ||
                      (t(this._menu).toggleClass(De.SHOW),
                      t(s).toggleClass(De.SHOW).trigger(t.Event(Te.SHOWN, i)));
                }
              }),
              (n.hide = function () {
                if (
                  !this._element.disabled &&
                  !t(this._element).hasClass(De.DISABLED) &&
                  t(this._menu).hasClass(De.SHOW)
                ) {
                  var i = {
                      relatedTarget: this._element,
                    },
                    n = t.Event(Te.HIDE, i),
                    s = e._getParentFromElement(this._element);
                  t(s).trigger(n),
                    n.isDefaultPrevented() ||
                      (t(this._menu).toggleClass(De.SHOW),
                      t(s).toggleClass(De.SHOW).trigger(t.Event(Te.HIDDEN, i)));
                }
              }),
              (n.dispose = function () {
                t.removeData(this._element, me),
                  t(this._element).off(ge),
                  (this._element = null),
                  (this._menu = null),
                  null !== this._popper &&
                    (this._popper.destroy(), (this._popper = null));
              }),
              (n.update = function () {
                (this._inNavbar = this._detectNavbar()),
                  null !== this._popper && this._popper.scheduleUpdate();
              }),
              (n._addEventListeners = function () {
                var e = this;
                t(this._element).on(Te.CLICK, function (t) {
                  t.preventDefault(), t.stopPropagation(), e.toggle();
                });
              }),
              (n._getConfig = function (e) {
                return (
                  (e = o(
                    {},
                    this.constructor.Default,
                    t(this._element).data(),
                    e
                  )),
                  m.typeCheckConfig(pe, e, this.constructor.DefaultType),
                  e
                );
              }),
              (n._getMenuElement = function () {
                if (!this._menu) {
                  var t = e._getParentFromElement(this._element);
                  t && (this._menu = t.querySelector(Ee.MENU));
                }
                return this._menu;
              }),
              (n._getPlacement = function () {
                var e = t(this._element.parentNode),
                  i = Ie.BOTTOM;
                return (
                  e.hasClass(De.DROPUP)
                    ? ((i = Ie.TOP),
                      t(this._menu).hasClass(De.MENURIGHT) && (i = Ie.TOPEND))
                    : e.hasClass(De.DROPRIGHT)
                    ? (i = Ie.RIGHT)
                    : e.hasClass(De.DROPLEFT)
                    ? (i = Ie.LEFT)
                    : t(this._menu).hasClass(De.MENURIGHT) &&
                      (i = Ie.BOTTOMEND),
                  i
                );
              }),
              (n._detectNavbar = function () {
                return t(this._element).closest(".navbar").length > 0;
              }),
              (n._getOffset = function () {
                var e = this,
                  t = {};
                return (
                  "function" == typeof this._config.offset
                    ? (t.fn = function (t) {
                        return (
                          (t.offsets = o(
                            {},
                            t.offsets,
                            e._config.offset(t.offsets, e._element) || {}
                          )),
                          t
                        );
                      })
                    : (t.offset = this._config.offset),
                  t
                );
              }),
              (n._getPopperConfig = function () {
                var e = {
                  placement: this._getPlacement(),
                  modifiers: {
                    offset: this._getOffset(),
                    flip: {
                      enabled: this._config.flip,
                    },
                    preventOverflow: {
                      boundariesElement: this._config.boundary,
                    },
                  },
                };
                return (
                  "static" === this._config.display &&
                    (e.modifiers.applyStyle = {
                      enabled: !1,
                    }),
                  e
                );
              }),
              (e._jQueryInterface = function (i) {
                return this.each(function () {
                  var n = t(this).data(me);
                  if (
                    (n ||
                      ((n = new e(this, "object" == typeof i ? i : null)),
                      t(this).data(me, n)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === n[i])
                      throw new TypeError('No method named "' + i + '"');
                    n[i]();
                  }
                });
              }),
              (e._clearMenus = function (i) {
                if (
                  !i ||
                  (i.which !== Ce && ("keyup" !== i.type || i.which === we))
                )
                  for (
                    var n = [].slice.call(
                        document.querySelectorAll(Ee.DATA_TOGGLE)
                      ),
                      s = 0,
                      a = n.length;
                    s < a;
                    s++
                  ) {
                    var o = e._getParentFromElement(n[s]),
                      r = t(n[s]).data(me),
                      l = {
                        relatedTarget: n[s],
                      };
                    if ((i && "click" === i.type && (l.clickEvent = i), r)) {
                      var c = r._menu;
                      if (
                        t(o).hasClass(De.SHOW) &&
                        !(
                          i &&
                          (("click" === i.type &&
                            /input|textarea/i.test(i.target.tagName)) ||
                            ("keyup" === i.type && i.which === we)) &&
                          t.contains(o, i.target)
                        )
                      ) {
                        var d = t.Event(Te.HIDE, l);
                        t(o).trigger(d),
                          d.isDefaultPrevented() ||
                            ("ontouchstart" in document.documentElement &&
                              t(document.body)
                                .children()
                                .off("mouseover", null, t.noop),
                            n[s].setAttribute("aria-expanded", "false"),
                            t(c).removeClass(De.SHOW),
                            t(o)
                              .removeClass(De.SHOW)
                              .trigger(t.Event(Te.HIDDEN, l)));
                      }
                    }
                  }
              }),
              (e._getParentFromElement = function (e) {
                var t,
                  i = m.getSelectorFromElement(e);
                return i && (t = document.querySelector(i)), t || e.parentNode;
              }),
              (e._dataApiKeydownHandler = function (i) {
                if (
                  !(/input|textarea/i.test(i.target.tagName)
                    ? i.which === be ||
                      (i.which !== ye &&
                        ((i.which !== ke && i.which !== Se) ||
                          t(i.target).closest(Ee.MENU).length))
                    : !xe.test(i.which)) &&
                  (i.preventDefault(),
                  i.stopPropagation(),
                  !this.disabled && !t(this).hasClass(De.DISABLED))
                ) {
                  var n = e._getParentFromElement(this),
                    s = t(n).hasClass(De.SHOW);
                  if (s && (!s || (i.which !== ye && i.which !== be))) {
                    var a = [].slice.call(n.querySelectorAll(Ee.VISIBLE_ITEMS));
                    if (0 !== a.length) {
                      var o = a.indexOf(i.target);
                      i.which === Se && o > 0 && o--,
                        i.which === ke && o < a.length - 1 && o++,
                        o < 0 && (o = 0),
                        a[o].focus();
                    }
                  } else {
                    if (i.which === ye) {
                      var r = n.querySelector(Ee.DATA_TOGGLE);
                      t(r).trigger("focus");
                    }
                    t(this).trigger("click");
                  }
                }
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return fe;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return Ae;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return Oe;
                  },
                },
              ]),
              e
            );
          })();
        t(document)
          .on(Te.KEYDOWN_DATA_API, Ee.DATA_TOGGLE, Me._dataApiKeydownHandler)
          .on(Te.KEYDOWN_DATA_API, Ee.MENU, Me._dataApiKeydownHandler)
          .on(Te.CLICK_DATA_API + " " + Te.KEYUP_DATA_API, Me._clearMenus)
          .on(Te.CLICK_DATA_API, Ee.DATA_TOGGLE, function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              Me._jQueryInterface.call(t(this), "toggle");
          })
          .on(Te.CLICK_DATA_API, Ee.FORM_CHILD, function (e) {
            e.stopPropagation();
          }),
          (t.fn[pe] = Me._jQueryInterface),
          (t.fn[pe].Constructor = Me),
          (t.fn[pe].noConflict = function () {
            return (t.fn[pe] = _e), Me._jQueryInterface;
          });
        var Ne = "modal",
          Le = "4.3.1",
          Pe = "bs.modal",
          Re = "." + Pe,
          He = ".data-api",
          $e = t.fn[Ne],
          We = 27,
          Fe = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0,
          },
          je = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
          },
          Be = {
            HIDE: "hide" + Re,
            HIDDEN: "hidden" + Re,
            SHOW: "show" + Re,
            SHOWN: "shown" + Re,
            FOCUSIN: "focusin" + Re,
            RESIZE: "resize" + Re,
            CLICK_DISMISS: "click.dismiss" + Re,
            KEYDOWN_DISMISS: "keydown.dismiss" + Re,
            MOUSEUP_DISMISS: "mouseup.dismiss" + Re,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + Re,
            CLICK_DATA_API: "click" + Re + He,
          },
          ze = {
            SCROLLABLE: "modal-dialog-scrollable",
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            SHOW: "show",
          },
          qe = {
            DIALOG: ".modal-dialog",
            MODAL_BODY: ".modal-body",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
          },
          Ue = (function () {
            function e(e, t) {
              (this._config = this._getConfig(t)),
                (this._element = e),
                (this._dialog = e.querySelector(qe.DIALOG)),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollbarWidth = 0);
            }
            var i = e.prototype;
            return (
              (i.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e);
              }),
              (i.show = function (e) {
                var i = this;
                if (!this._isShown && !this._isTransitioning) {
                  t(this._element).hasClass(ze.FADE) &&
                    (this._isTransitioning = !0);
                  var n = t.Event(Be.SHOW, {
                    relatedTarget: e,
                  });
                  t(this._element).trigger(n),
                    this._isShown ||
                      n.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(this._element).on(
                        Be.CLICK_DISMISS,
                        qe.DATA_DISMISS,
                        function (e) {
                          return i.hide(e);
                        }
                      ),
                      t(this._dialog).on(Be.MOUSEDOWN_DISMISS, function () {
                        t(i._element).one(Be.MOUSEUP_DISMISS, function (e) {
                          t(e.target).is(i._element) &&
                            (i._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function () {
                        return i._showElement(e);
                      }));
                }
              }),
              (i.hide = function (e) {
                var i = this;
                if (
                  (e && e.preventDefault(),
                  this._isShown && !this._isTransitioning)
                ) {
                  var n = t.Event(Be.HIDE);
                  if (
                    (t(this._element).trigger(n),
                    this._isShown && !n.isDefaultPrevented())
                  ) {
                    this._isShown = !1;
                    var s = t(this._element).hasClass(ze.FADE);
                    if (
                      (s && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(document).off(Be.FOCUSIN),
                      t(this._element).removeClass(ze.SHOW),
                      t(this._element).off(Be.CLICK_DISMISS),
                      t(this._dialog).off(Be.MOUSEDOWN_DISMISS),
                      s)
                    ) {
                      var a = m.getTransitionDurationFromElement(this._element);
                      t(this._element)
                        .one(m.TRANSITION_END, function (e) {
                          return i._hideModal(e);
                        })
                        .emulateTransitionEnd(a);
                    } else this._hideModal();
                  }
                }
              }),
              (i.dispose = function () {
                [window, this._element, this._dialog].forEach(function (e) {
                  return t(e).off(Re);
                }),
                  t(document).off(Be.FOCUSIN),
                  t.removeData(this._element, Pe),
                  (this._config = null),
                  (this._element = null),
                  (this._dialog = null),
                  (this._backdrop = null),
                  (this._isShown = null),
                  (this._isBodyOverflowing = null),
                  (this._ignoreBackdropClick = null),
                  (this._isTransitioning = null),
                  (this._scrollbarWidth = null);
              }),
              (i.handleUpdate = function () {
                this._adjustDialog();
              }),
              (i._getConfig = function (e) {
                return (e = o({}, Fe, e)), m.typeCheckConfig(Ne, e, je), e;
              }),
              (i._showElement = function (e) {
                var i = this,
                  n = t(this._element).hasClass(ze.FADE);
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                  document.body.appendChild(this._element),
                  (this._element.style.display = "block"),
                  this._element.removeAttribute("aria-hidden"),
                  this._element.setAttribute("aria-modal", !0),
                  t(this._dialog).hasClass(ze.SCROLLABLE)
                    ? (this._dialog.querySelector(qe.MODAL_BODY).scrollTop = 0)
                    : (this._element.scrollTop = 0),
                  n && m.reflow(this._element),
                  t(this._element).addClass(ze.SHOW),
                  this._config.focus && this._enforceFocus();
                var s = t.Event(Be.SHOWN, {
                    relatedTarget: e,
                  }),
                  a = function () {
                    i._config.focus && i._element.focus(),
                      (i._isTransitioning = !1),
                      t(i._element).trigger(s);
                  };
                if (n) {
                  var o = m.getTransitionDurationFromElement(this._dialog);
                  t(this._dialog)
                    .one(m.TRANSITION_END, a)
                    .emulateTransitionEnd(o);
                } else a();
              }),
              (i._enforceFocus = function () {
                var e = this;
                t(document)
                  .off(Be.FOCUSIN)
                  .on(Be.FOCUSIN, function (i) {
                    document !== i.target &&
                      e._element !== i.target &&
                      0 === t(e._element).has(i.target).length &&
                      e._element.focus();
                  });
              }),
              (i._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard
                  ? t(this._element).on(Be.KEYDOWN_DISMISS, function (t) {
                      t.which === We && (t.preventDefault(), e.hide());
                    })
                  : this._isShown || t(this._element).off(Be.KEYDOWN_DISMISS);
              }),
              (i._setResizeEvent = function () {
                var e = this;
                this._isShown
                  ? t(window).on(Be.RESIZE, function (t) {
                      return e.handleUpdate(t);
                    })
                  : t(window).off(Be.RESIZE);
              }),
              (i._hideModal = function () {
                var e = this;
                (this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  (this._isTransitioning = !1),
                  this._showBackdrop(function () {
                    t(document.body).removeClass(ze.OPEN),
                      e._resetAdjustments(),
                      e._resetScrollbar(),
                      t(e._element).trigger(Be.HIDDEN);
                  });
              }),
              (i._removeBackdrop = function () {
                this._backdrop &&
                  (t(this._backdrop).remove(), (this._backdrop = null));
              }),
              (i._showBackdrop = function (e) {
                var i = this,
                  n = t(this._element).hasClass(ze.FADE) ? ze.FADE : "";
                if (this._isShown && this._config.backdrop) {
                  if (
                    ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = ze.BACKDROP),
                    n && this._backdrop.classList.add(n),
                    t(this._backdrop).appendTo(document.body),
                    t(this._element).on(Be.CLICK_DISMISS, function (e) {
                      i._ignoreBackdropClick
                        ? (i._ignoreBackdropClick = !1)
                        : e.target === e.currentTarget &&
                          ("static" === i._config.backdrop
                            ? i._element.focus()
                            : i.hide());
                    }),
                    n && m.reflow(this._backdrop),
                    t(this._backdrop).addClass(ze.SHOW),
                    !e)
                  )
                    return;
                  if (!n) return void e();
                  var s = m.getTransitionDurationFromElement(this._backdrop);
                  t(this._backdrop)
                    .one(m.TRANSITION_END, e)
                    .emulateTransitionEnd(s);
                } else if (!this._isShown && this._backdrop) {
                  t(this._backdrop).removeClass(ze.SHOW);
                  var a = function () {
                    i._removeBackdrop(), e && e();
                  };
                  if (t(this._element).hasClass(ze.FADE)) {
                    var o = m.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop)
                      .one(m.TRANSITION_END, a)
                      .emulateTransitionEnd(o);
                  } else a();
                } else e && e();
              }),
              (i._adjustDialog = function () {
                var e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight;
                !this._isBodyOverflowing &&
                  e &&
                  (this._element.style.paddingLeft =
                    this._scrollbarWidth + "px"),
                  this._isBodyOverflowing &&
                    !e &&
                    (this._element.style.paddingRight =
                      this._scrollbarWidth + "px");
              }),
              (i._resetAdjustments = function () {
                (this._element.style.paddingLeft = ""),
                  (this._element.style.paddingRight = "");
              }),
              (i._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                (this._isBodyOverflowing =
                  e.left + e.right < window.innerWidth),
                  (this._scrollbarWidth = this._getScrollbarWidth());
              }),
              (i._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                  var i = [].slice.call(
                      document.querySelectorAll(qe.FIXED_CONTENT)
                    ),
                    n = [].slice.call(
                      document.querySelectorAll(qe.STICKY_CONTENT)
                    );
                  t(i).each(function (i, n) {
                    var s = n.style.paddingRight,
                      a = t(n).css("padding-right");
                    t(n)
                      .data("padding-right", s)
                      .css(
                        "padding-right",
                        parseFloat(a) + e._scrollbarWidth + "px"
                      );
                  }),
                    t(n).each(function (i, n) {
                      var s = n.style.marginRight,
                        a = t(n).css("margin-right");
                      t(n)
                        .data("margin-right", s)
                        .css(
                          "margin-right",
                          parseFloat(a) - e._scrollbarWidth + "px"
                        );
                    });
                  var s = document.body.style.paddingRight,
                    a = t(document.body).css("padding-right");
                  t(document.body)
                    .data("padding-right", s)
                    .css(
                      "padding-right",
                      parseFloat(a) + this._scrollbarWidth + "px"
                    );
                }
                t(document.body).addClass(ze.OPEN);
              }),
              (i._resetScrollbar = function () {
                var e = [].slice.call(
                  document.querySelectorAll(qe.FIXED_CONTENT)
                );
                t(e).each(function (e, i) {
                  var n = t(i).data("padding-right");
                  t(i).removeData("padding-right"),
                    (i.style.paddingRight = n || "");
                });
                var i = [].slice.call(
                  document.querySelectorAll("" + qe.STICKY_CONTENT)
                );
                t(i).each(function (e, i) {
                  var n = t(i).data("margin-right");
                  void 0 !== n &&
                    t(i).css("margin-right", n).removeData("margin-right");
                });
                var n = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"),
                  (document.body.style.paddingRight = n || "");
              }),
              (i._getScrollbarWidth = function () {
                var e = document.createElement("div");
                (e.className = ze.SCROLLBAR_MEASURER),
                  document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t;
              }),
              (e._jQueryInterface = function (i, n) {
                return this.each(function () {
                  var s = t(this).data(Pe),
                    a = o(
                      {},
                      Fe,
                      t(this).data(),
                      "object" == typeof i && i ? i : {}
                    );
                  if (
                    (s || ((s = new e(this, a)), t(this).data(Pe, s)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === s[i])
                      throw new TypeError('No method named "' + i + '"');
                    s[i](n);
                  } else a.show && s.show(n);
                });
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return Le;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return Fe;
                  },
                },
              ]),
              e
            );
          })();
        t(document).on(Be.CLICK_DATA_API, qe.DATA_TOGGLE, function (e) {
          var i,
            n = this,
            s = m.getSelectorFromElement(this);
          s && (i = document.querySelector(s));
          var a = t(i).data(Pe) ? "toggle" : o({}, t(i).data(), t(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            e.preventDefault();
          var r = t(i).one(Be.SHOW, function (e) {
            e.isDefaultPrevented() ||
              r.one(Be.HIDDEN, function () {
                t(n).is(":visible") && n.focus();
              });
          });
          Ue._jQueryInterface.call(t(i), a, this);
        }),
          (t.fn[Ne] = Ue._jQueryInterface),
          (t.fn[Ne].Constructor = Ue),
          (t.fn[Ne].noConflict = function () {
            return (t.fn[Ne] = $e), Ue._jQueryInterface;
          });
        var Ve = [
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
          ],
          Ye = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
          },
          Ke = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
          Ge =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
        function Xe(e, t) {
          var i = e.nodeName.toLowerCase();
          if (-1 !== t.indexOf(i))
            return (
              -1 === Ve.indexOf(i) ||
              Boolean(e.nodeValue.match(Ke) || e.nodeValue.match(Ge))
            );
          for (
            var n = t.filter(function (e) {
                return e instanceof RegExp;
              }),
              s = 0,
              a = n.length;
            s < a;
            s++
          )
            if (i.match(n[s])) return !0;
          return !1;
        }
        function Qe(e, t, i) {
          if (0 === e.length) return e;
          if (i && "function" == typeof i) return i(e);
          for (
            var n = new window.DOMParser().parseFromString(e, "text/html"),
              s = Object.keys(t),
              a = [].slice.call(n.body.querySelectorAll("*")),
              o = function (e, i) {
                var n = a[e],
                  o = n.nodeName.toLowerCase();
                if (-1 === s.indexOf(n.nodeName.toLowerCase()))
                  return n.parentNode.removeChild(n), "continue";
                var r = [].slice.call(n.attributes),
                  l = [].concat(t["*"] || [], t[o] || []);
                r.forEach(function (e) {
                  Xe(e, l) || n.removeAttribute(e.nodeName);
                });
              },
              r = 0,
              l = a.length;
            r < l;
            r++
          )
            o(r, l);
          return n.body.innerHTML;
        }
        var Je = "tooltip",
          Ze = "4.3.1",
          et = "bs.tooltip",
          tt = "." + et,
          it = t.fn[Je],
          nt = "bs-tooltip",
          st = new RegExp("(^|\\s)" + nt + "\\S+", "g"),
          at = ["sanitize", "whiteList", "sanitizeFn"],
          ot = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
          },
          rt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
          },
          lt = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Ye,
          },
          ct = {
            SHOW: "show",
            OUT: "out",
          },
          dt = {
            HIDE: "hide" + tt,
            HIDDEN: "hidden" + tt,
            SHOW: "show" + tt,
            SHOWN: "shown" + tt,
            INSERTED: "inserted" + tt,
            CLICK: "click" + tt,
            FOCUSIN: "focusin" + tt,
            FOCUSOUT: "focusout" + tt,
            MOUSEENTER: "mouseenter" + tt,
            MOUSELEAVE: "mouseleave" + tt,
          },
          ut = {
            FADE: "fade",
            SHOW: "show",
          },
          ht = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner",
            ARROW: ".arrow",
          },
          pt = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual",
          },
          ft = (function () {
            function e(e, t) {
              if (void 0 === i)
                throw new TypeError(
                  "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                );
              (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this.element = e),
                (this.config = this._getConfig(t)),
                (this.tip = null),
                this._setListeners();
            }
            var n = e.prototype;
            return (
              (n.enable = function () {
                this._isEnabled = !0;
              }),
              (n.disable = function () {
                this._isEnabled = !1;
              }),
              (n.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
              }),
              (n.toggle = function (e) {
                if (this._isEnabled)
                  if (e) {
                    var i = this.constructor.DATA_KEY,
                      n = t(e.currentTarget).data(i);
                    n ||
                      ((n = new this.constructor(
                        e.currentTarget,
                        this._getDelegateConfig()
                      )),
                      t(e.currentTarget).data(i, n)),
                      (n._activeTrigger.click = !n._activeTrigger.click),
                      n._isWithActiveTrigger()
                        ? n._enter(null, n)
                        : n._leave(null, n);
                  } else {
                    if (t(this.getTipElement()).hasClass(ut.SHOW))
                      return void this._leave(null, this);
                    this._enter(null, this);
                  }
              }),
              (n.dispose = function () {
                clearTimeout(this._timeout),
                  t.removeData(this.element, this.constructor.DATA_KEY),
                  t(this.element).off(this.constructor.EVENT_KEY),
                  t(this.element).closest(".modal").off("hide.bs.modal"),
                  this.tip && t(this.tip).remove(),
                  (this._isEnabled = null),
                  (this._timeout = null),
                  (this._hoverState = null),
                  (this._activeTrigger = null),
                  null !== this._popper && this._popper.destroy(),
                  (this._popper = null),
                  (this.element = null),
                  (this.config = null),
                  (this.tip = null);
              }),
              (n.show = function () {
                var e = this;
                if ("none" === t(this.element).css("display"))
                  throw new Error("Please use show on visible elements");
                var n = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  t(this.element).trigger(n);
                  var s = m.findShadowRoot(this.element),
                    a = t.contains(
                      null !== s
                        ? s
                        : this.element.ownerDocument.documentElement,
                      this.element
                    );
                  if (n.isDefaultPrevented() || !a) return;
                  var o = this.getTipElement(),
                    r = m.getUID(this.constructor.NAME);
                  o.setAttribute("id", r),
                    this.element.setAttribute("aria-describedby", r),
                    this.setContent(),
                    this.config.animation && t(o).addClass(ut.FADE);
                  var l =
                      "function" == typeof this.config.placement
                        ? this.config.placement.call(this, o, this.element)
                        : this.config.placement,
                    c = this._getAttachment(l);
                  this.addAttachmentClass(c);
                  var d = this._getContainer();
                  t(o).data(this.constructor.DATA_KEY, this),
                    t.contains(
                      this.element.ownerDocument.documentElement,
                      this.tip
                    ) || t(o).appendTo(d),
                    t(this.element).trigger(this.constructor.Event.INSERTED),
                    (this._popper = new i(this.element, o, {
                      placement: c,
                      modifiers: {
                        offset: this._getOffset(),
                        flip: {
                          behavior: this.config.fallbackPlacement,
                        },
                        arrow: {
                          element: ht.ARROW,
                        },
                        preventOverflow: {
                          boundariesElement: this.config.boundary,
                        },
                      },
                      onCreate: function (t) {
                        t.originalPlacement !== t.placement &&
                          e._handlePopperPlacementChange(t);
                      },
                      onUpdate: function (t) {
                        return e._handlePopperPlacementChange(t);
                      },
                    })),
                    t(o).addClass(ut.SHOW),
                    "ontouchstart" in document.documentElement &&
                      t(document.body).children().on("mouseover", null, t.noop);
                  var u = function () {
                    e.config.animation && e._fixTransition();
                    var i = e._hoverState;
                    (e._hoverState = null),
                      t(e.element).trigger(e.constructor.Event.SHOWN),
                      i === ct.OUT && e._leave(null, e);
                  };
                  if (t(this.tip).hasClass(ut.FADE)) {
                    var h = m.getTransitionDurationFromElement(this.tip);
                    t(this.tip)
                      .one(m.TRANSITION_END, u)
                      .emulateTransitionEnd(h);
                  } else u();
                }
              }),
              (n.hide = function (e) {
                var i = this,
                  n = this.getTipElement(),
                  s = t.Event(this.constructor.Event.HIDE),
                  a = function () {
                    i._hoverState !== ct.SHOW &&
                      n.parentNode &&
                      n.parentNode.removeChild(n),
                      i._cleanTipClass(),
                      i.element.removeAttribute("aria-describedby"),
                      t(i.element).trigger(i.constructor.Event.HIDDEN),
                      null !== i._popper && i._popper.destroy(),
                      e && e();
                  };
                if ((t(this.element).trigger(s), !s.isDefaultPrevented())) {
                  if (
                    (t(n).removeClass(ut.SHOW),
                    "ontouchstart" in document.documentElement &&
                      t(document.body)
                        .children()
                        .off("mouseover", null, t.noop),
                    (this._activeTrigger[pt.CLICK] = !1),
                    (this._activeTrigger[pt.FOCUS] = !1),
                    (this._activeTrigger[pt.HOVER] = !1),
                    t(this.tip).hasClass(ut.FADE))
                  ) {
                    var o = m.getTransitionDurationFromElement(n);
                    t(n).one(m.TRANSITION_END, a).emulateTransitionEnd(o);
                  } else a();
                  this._hoverState = "";
                }
              }),
              (n.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
              }),
              (n.isWithContent = function () {
                return Boolean(this.getTitle());
              }),
              (n.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass(nt + "-" + e);
              }),
              (n.getTipElement = function () {
                return (
                  (this.tip = this.tip || t(this.config.template)[0]), this.tip
                );
              }),
              (n.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(
                  t(e.querySelectorAll(ht.TOOLTIP_INNER)),
                  this.getTitle()
                ),
                  t(e).removeClass(ut.FADE + " " + ut.SHOW);
              }),
              (n.setElementContent = function (e, i) {
                "object" != typeof i || (!i.nodeType && !i.jquery)
                  ? this.config.html
                    ? (this.config.sanitize &&
                        (i = Qe(
                          i,
                          this.config.whiteList,
                          this.config.sanitizeFn
                        )),
                      e.html(i))
                    : e.text(i)
                  : this.config.html
                  ? t(i).parent().is(e) || e.empty().append(i)
                  : e.text(t(i).text());
              }),
              (n.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return (
                  e ||
                    (e =
                      "function" == typeof this.config.title
                        ? this.config.title.call(this.element)
                        : this.config.title),
                  e
                );
              }),
              (n._getOffset = function () {
                var e = this,
                  t = {};
                return (
                  "function" == typeof this.config.offset
                    ? (t.fn = function (t) {
                        return (
                          (t.offsets = o(
                            {},
                            t.offsets,
                            e.config.offset(t.offsets, e.element) || {}
                          )),
                          t
                        );
                      })
                    : (t.offset = this.config.offset),
                  t
                );
              }),
              (n._getContainer = function () {
                return !1 === this.config.container
                  ? document.body
                  : m.isElement(this.config.container)
                  ? t(this.config.container)
                  : t(document).find(this.config.container);
              }),
              (n._getAttachment = function (e) {
                return rt[e.toUpperCase()];
              }),
              (n._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (i) {
                  if ("click" === i)
                    t(e.element).on(
                      e.constructor.Event.CLICK,
                      e.config.selector,
                      function (t) {
                        return e.toggle(t);
                      }
                    );
                  else if (i !== pt.MANUAL) {
                    var n =
                        i === pt.HOVER
                          ? e.constructor.Event.MOUSEENTER
                          : e.constructor.Event.FOCUSIN,
                      s =
                        i === pt.HOVER
                          ? e.constructor.Event.MOUSELEAVE
                          : e.constructor.Event.FOCUSOUT;
                    t(e.element)
                      .on(n, e.config.selector, function (t) {
                        return e._enter(t);
                      })
                      .on(s, e.config.selector, function (t) {
                        return e._leave(t);
                      });
                  }
                }),
                  t(this.element)
                    .closest(".modal")
                    .on("hide.bs.modal", function () {
                      e.element && e.hide();
                    }),
                  this.config.selector
                    ? (this.config = o({}, this.config, {
                        trigger: "manual",
                        selector: "",
                      }))
                    : this._fixTitle();
              }),
              (n._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) &&
                  (this.element.setAttribute(
                    "data-original-title",
                    this.element.getAttribute("title") || ""
                  ),
                  this.element.setAttribute("title", ""));
              }),
              (n._enter = function (e, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || t(e.currentTarget).data(n)) ||
                  ((i = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(n, i)),
                  e &&
                    (i._activeTrigger[
                      "focusin" === e.type ? pt.FOCUS : pt.HOVER
                    ] = !0),
                  t(i.getTipElement()).hasClass(ut.SHOW) ||
                  i._hoverState === ct.SHOW
                    ? (i._hoverState = ct.SHOW)
                    : (clearTimeout(i._timeout),
                      (i._hoverState = ct.SHOW),
                      i.config.delay && i.config.delay.show
                        ? (i._timeout = setTimeout(function () {
                            i._hoverState === ct.SHOW && i.show();
                          }, i.config.delay.show))
                        : i.show());
              }),
              (n._leave = function (e, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || t(e.currentTarget).data(n)) ||
                  ((i = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(n, i)),
                  e &&
                    (i._activeTrigger[
                      "focusout" === e.type ? pt.FOCUS : pt.HOVER
                    ] = !1),
                  i._isWithActiveTrigger() ||
                    (clearTimeout(i._timeout),
                    (i._hoverState = ct.OUT),
                    i.config.delay && i.config.delay.hide
                      ? (i._timeout = setTimeout(function () {
                          i._hoverState === ct.OUT && i.hide();
                        }, i.config.delay.hide))
                      : i.hide());
              }),
              (n._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger)
                  if (this._activeTrigger[e]) return !0;
                return !1;
              }),
              (n._getConfig = function (e) {
                var i = t(this.element).data();
                return (
                  Object.keys(i).forEach(function (e) {
                    -1 !== at.indexOf(e) && delete i[e];
                  }),
                  "number" ==
                    typeof (e = o(
                      {},
                      this.constructor.Default,
                      i,
                      "object" == typeof e && e ? e : {}
                    )).delay &&
                    (e.delay = {
                      show: e.delay,
                      hide: e.delay,
                    }),
                  "number" == typeof e.title && (e.title = e.title.toString()),
                  "number" == typeof e.content &&
                    (e.content = e.content.toString()),
                  m.typeCheckConfig(Je, e, this.constructor.DefaultType),
                  e.sanitize &&
                    (e.template = Qe(e.template, e.whiteList, e.sanitizeFn)),
                  e
                );
              }),
              (n._getDelegateConfig = function () {
                var e = {};
                if (this.config)
                  for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] &&
                      (e[t] = this.config[t]);
                return e;
              }),
              (n._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                  i = e.attr("class").match(st);
                null !== i && i.length && e.removeClass(i.join(""));
              }),
              (n._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                (this.tip = t.popper),
                  this._cleanTipClass(),
                  this.addAttachmentClass(this._getAttachment(e.placement));
              }),
              (n._fixTransition = function () {
                var e = this.getTipElement(),
                  i = this.config.animation;
                null === e.getAttribute("x-placement") &&
                  (t(e).removeClass(ut.FADE),
                  (this.config.animation = !1),
                  this.hide(),
                  this.show(),
                  (this.config.animation = i));
              }),
              (e._jQueryInterface = function (i) {
                return this.each(function () {
                  var n = t(this).data(et),
                    s = "object" == typeof i && i;
                  if (
                    (n || !/dispose|hide/.test(i)) &&
                    (n || ((n = new e(this, s)), t(this).data(et, n)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === n[i])
                      throw new TypeError('No method named "' + i + '"');
                    n[i]();
                  }
                });
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return Ze;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return lt;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return Je;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return et;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return dt;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return tt;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return ot;
                  },
                },
              ]),
              e
            );
          })();
        (t.fn[Je] = ft._jQueryInterface),
          (t.fn[Je].Constructor = ft),
          (t.fn[Je].noConflict = function () {
            return (t.fn[Je] = it), ft._jQueryInterface;
          });
        var mt = "popover",
          gt = "4.3.1",
          vt = "bs.popover",
          _t = "." + vt,
          yt = t.fn[mt],
          bt = "bs-popover",
          wt = new RegExp("(^|\\s)" + bt + "\\S+", "g"),
          St = o({}, ft.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
              '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          }),
          kt = o({}, ft.DefaultType, {
            content: "(string|element|function)",
          }),
          Ct = {
            FADE: "fade",
            SHOW: "show",
          },
          xt = {
            TITLE: ".popover-header",
            CONTENT: ".popover-body",
          },
          Tt = {
            HIDE: "hide" + _t,
            HIDDEN: "hidden" + _t,
            SHOW: "show" + _t,
            SHOWN: "shown" + _t,
            INSERTED: "inserted" + _t,
            CLICK: "click" + _t,
            FOCUSIN: "focusin" + _t,
            FOCUSOUT: "focusout" + _t,
            MOUSEENTER: "mouseenter" + _t,
            MOUSELEAVE: "mouseleave" + _t,
          },
          Dt = (function (e) {
            function i() {
              return e.apply(this, arguments) || this;
            }
            r(i, e);
            var n = i.prototype;
            return (
              (n.isWithContent = function () {
                return this.getTitle() || this._getContent();
              }),
              (n.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass(bt + "-" + e);
              }),
              (n.getTipElement = function () {
                return (
                  (this.tip = this.tip || t(this.config.template)[0]), this.tip
                );
              }),
              (n.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(xt.TITLE), this.getTitle());
                var i = this._getContent();
                "function" == typeof i && (i = i.call(this.element)),
                  this.setElementContent(e.find(xt.CONTENT), i),
                  e.removeClass(Ct.FADE + " " + Ct.SHOW);
              }),
              (n._getContent = function () {
                return (
                  this.element.getAttribute("data-content") ||
                  this.config.content
                );
              }),
              (n._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                  i = e.attr("class").match(wt);
                null !== i && i.length > 0 && e.removeClass(i.join(""));
              }),
              (i._jQueryInterface = function (e) {
                return this.each(function () {
                  var n = t(this).data(vt),
                    s = "object" == typeof e ? e : null;
                  if (
                    (n || !/dispose|hide/.test(e)) &&
                    (n || ((n = new i(this, s)), t(this).data(vt, n)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }),
              s(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return gt;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return St;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return mt;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return vt;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return Tt;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return _t;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return kt;
                  },
                },
              ]),
              i
            );
          })(ft);
        (t.fn[mt] = Dt._jQueryInterface),
          (t.fn[mt].Constructor = Dt),
          (t.fn[mt].noConflict = function () {
            return (t.fn[mt] = yt), Dt._jQueryInterface;
          });
        var Et = "scrollspy",
          It = "4.3.1",
          At = "bs.scrollspy",
          Ot = "." + At,
          Mt = ".data-api",
          Nt = t.fn[Et],
          Lt = {
            offset: 10,
            method: "auto",
            target: "",
          },
          Pt = {
            offset: "number",
            method: "string",
            target: "(string|element)",
          },
          Rt = {
            ACTIVATE: "activate" + Ot,
            SCROLL: "scroll" + Ot,
            LOAD_DATA_API: "load" + Ot + Mt,
          },
          Ht = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
          },
          $t = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle",
          },
          Wt = {
            OFFSET: "offset",
            POSITION: "position",
          },
          Ft = (function () {
            function e(e, i) {
              var n = this;
              (this._element = e),
                (this._scrollElement = "BODY" === e.tagName ? window : e),
                (this._config = this._getConfig(i)),
                (this._selector =
                  this._config.target +
                  " " +
                  $t.NAV_LINKS +
                  "," +
                  this._config.target +
                  " " +
                  $t.LIST_ITEMS +
                  "," +
                  this._config.target +
                  " " +
                  $t.DROPDOWN_ITEMS),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                t(this._scrollElement).on(Rt.SCROLL, function (e) {
                  return n._process(e);
                }),
                this.refresh(),
                this._process();
            }
            var i = e.prototype;
            return (
              (i.refresh = function () {
                var e = this,
                  i =
                    this._scrollElement === this._scrollElement.window
                      ? Wt.OFFSET
                      : Wt.POSITION,
                  n = "auto" === this._config.method ? i : this._config.method,
                  s = n === Wt.POSITION ? this._getScrollTop() : 0;
                (this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight()),
                  [].slice
                    .call(document.querySelectorAll(this._selector))
                    .map(function (e) {
                      var i,
                        a = m.getSelectorFromElement(e);
                      if ((a && (i = document.querySelector(a)), i)) {
                        var o = i.getBoundingClientRect();
                        if (o.width || o.height) return [t(i)[n]().top + s, a];
                      }
                      return null;
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .sort(function (e, t) {
                      return e[0] - t[0];
                    })
                    .forEach(function (t) {
                      e._offsets.push(t[0]), e._targets.push(t[1]);
                    });
              }),
              (i.dispose = function () {
                t.removeData(this._element, At),
                  t(this._scrollElement).off(Ot),
                  (this._element = null),
                  (this._scrollElement = null),
                  (this._config = null),
                  (this._selector = null),
                  (this._offsets = null),
                  (this._targets = null),
                  (this._activeTarget = null),
                  (this._scrollHeight = null);
              }),
              (i._getConfig = function (e) {
                if (
                  "string" !=
                  typeof (e = o({}, Lt, "object" == typeof e && e ? e : {}))
                    .target
                ) {
                  var i = t(e.target).attr("id");
                  i || ((i = m.getUID(Et)), t(e.target).attr("id", i)),
                    (e.target = "#" + i);
                }
                return m.typeCheckConfig(Et, e, Pt), e;
              }),
              (i._getScrollTop = function () {
                return this._scrollElement === window
                  ? this._scrollElement.pageYOffset
                  : this._scrollElement.scrollTop;
              }),
              (i._getScrollHeight = function () {
                return (
                  this._scrollElement.scrollHeight ||
                  Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  )
                );
              }),
              (i._getOffsetHeight = function () {
                return this._scrollElement === window
                  ? window.innerHeight
                  : this._scrollElement.getBoundingClientRect().height;
              }),
              (i._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  i = this._config.offset + t - this._getOffsetHeight();
                if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
                  var n = this._targets[this._targets.length - 1];
                  this._activeTarget !== n && this._activate(n);
                } else {
                  if (
                    this._activeTarget &&
                    e < this._offsets[0] &&
                    this._offsets[0] > 0
                  )
                    return (this._activeTarget = null), void this._clear();
                  for (var s = this._offsets.length; s--; )
                    this._activeTarget !== this._targets[s] &&
                      e >= this._offsets[s] &&
                      (void 0 === this._offsets[s + 1] ||
                        e < this._offsets[s + 1]) &&
                      this._activate(this._targets[s]);
                }
              }),
              (i._activate = function (e) {
                (this._activeTarget = e), this._clear();
                var i = this._selector.split(",").map(function (t) {
                    return (
                      t +
                      '[data-target="' +
                      e +
                      '"],' +
                      t +
                      '[href="' +
                      e +
                      '"]'
                    );
                  }),
                  n = t([].slice.call(document.querySelectorAll(i.join(","))));
                n.hasClass(Ht.DROPDOWN_ITEM)
                  ? (n
                      .closest($t.DROPDOWN)
                      .find($t.DROPDOWN_TOGGLE)
                      .addClass(Ht.ACTIVE),
                    n.addClass(Ht.ACTIVE))
                  : (n.addClass(Ht.ACTIVE),
                    n
                      .parents($t.NAV_LIST_GROUP)
                      .prev($t.NAV_LINKS + ", " + $t.LIST_ITEMS)
                      .addClass(Ht.ACTIVE),
                    n
                      .parents($t.NAV_LIST_GROUP)
                      .prev($t.NAV_ITEMS)
                      .children($t.NAV_LINKS)
                      .addClass(Ht.ACTIVE)),
                  t(this._scrollElement).trigger(Rt.ACTIVATE, {
                    relatedTarget: e,
                  });
              }),
              (i._clear = function () {
                [].slice
                  .call(document.querySelectorAll(this._selector))
                  .filter(function (e) {
                    return e.classList.contains(Ht.ACTIVE);
                  })
                  .forEach(function (e) {
                    return e.classList.remove(Ht.ACTIVE);
                  });
              }),
              (e._jQueryInterface = function (i) {
                return this.each(function () {
                  var n = t(this).data(At);
                  if (
                    (n ||
                      ((n = new e(this, "object" == typeof i && i)),
                      t(this).data(At, n)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === n[i])
                      throw new TypeError('No method named "' + i + '"');
                    n[i]();
                  }
                });
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return It;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return Lt;
                  },
                },
              ]),
              e
            );
          })();
        t(window).on(Rt.LOAD_DATA_API, function () {
          for (
            var e = [].slice.call(document.querySelectorAll($t.DATA_SPY)),
              i = e.length;
            i--;

          ) {
            var n = t(e[i]);
            Ft._jQueryInterface.call(n, n.data());
          }
        }),
          (t.fn[Et] = Ft._jQueryInterface),
          (t.fn[Et].Constructor = Ft),
          (t.fn[Et].noConflict = function () {
            return (t.fn[Et] = Nt), Ft._jQueryInterface;
          });
        var jt = "tab",
          Bt = "4.3.1",
          zt = "bs.tab",
          qt = "." + zt,
          Ut = ".data-api",
          Vt = t.fn[jt],
          Yt = {
            HIDE: "hide" + qt,
            HIDDEN: "hidden" + qt,
            SHOW: "show" + qt,
            SHOWN: "shown" + qt,
            CLICK_DATA_API: "click" + qt + Ut,
          },
          Kt = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            DISABLED: "disabled",
            FADE: "fade",
            SHOW: "show",
          },
          Gt = {
            DROPDOWN: ".dropdown",
            NAV_LIST_GROUP: ".nav, .list-group",
            ACTIVE: ".active",
            ACTIVE_UL: "> li > .active",
            DATA_TOGGLE:
              '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
          },
          Xt = (function () {
            function e(e) {
              this._element = e;
            }
            var i = e.prototype;
            return (
              (i.show = function () {
                var e = this;
                if (
                  !(
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                      t(this._element).hasClass(Kt.ACTIVE)) ||
                    t(this._element).hasClass(Kt.DISABLED)
                  )
                ) {
                  var i,
                    n,
                    s = t(this._element).closest(Gt.NAV_LIST_GROUP)[0],
                    a = m.getSelectorFromElement(this._element);
                  if (s) {
                    var o =
                      "UL" === s.nodeName || "OL" === s.nodeName
                        ? Gt.ACTIVE_UL
                        : Gt.ACTIVE;
                    n = (n = t.makeArray(t(s).find(o)))[n.length - 1];
                  }
                  var r = t.Event(Yt.HIDE, {
                      relatedTarget: this._element,
                    }),
                    l = t.Event(Yt.SHOW, {
                      relatedTarget: n,
                    });
                  if (
                    (n && t(n).trigger(r),
                    t(this._element).trigger(l),
                    !l.isDefaultPrevented() && !r.isDefaultPrevented())
                  ) {
                    a && (i = document.querySelector(a)),
                      this._activate(this._element, s);
                    var c = function () {
                      var i = t.Event(Yt.HIDDEN, {
                          relatedTarget: e._element,
                        }),
                        s = t.Event(Yt.SHOWN, {
                          relatedTarget: n,
                        });
                      t(n).trigger(i), t(e._element).trigger(s);
                    };
                    i ? this._activate(i, i.parentNode, c) : c();
                  }
                }
              }),
              (i.dispose = function () {
                t.removeData(this._element, zt), (this._element = null);
              }),
              (i._activate = function (e, i, n) {
                var s = this,
                  a = (
                    !i || ("UL" !== i.nodeName && "OL" !== i.nodeName)
                      ? t(i).children(Gt.ACTIVE)
                      : t(i).find(Gt.ACTIVE_UL)
                  )[0],
                  o = n && a && t(a).hasClass(Kt.FADE),
                  r = function () {
                    return s._transitionComplete(e, a, n);
                  };
                if (a && o) {
                  var l = m.getTransitionDurationFromElement(a);
                  t(a)
                    .removeClass(Kt.SHOW)
                    .one(m.TRANSITION_END, r)
                    .emulateTransitionEnd(l);
                } else r();
              }),
              (i._transitionComplete = function (e, i, n) {
                if (i) {
                  t(i).removeClass(Kt.ACTIVE);
                  var s = t(i.parentNode).find(Gt.DROPDOWN_ACTIVE_CHILD)[0];
                  s && t(s).removeClass(Kt.ACTIVE),
                    "tab" === i.getAttribute("role") &&
                      i.setAttribute("aria-selected", !1);
                }
                if (
                  (t(e).addClass(Kt.ACTIVE),
                  "tab" === e.getAttribute("role") &&
                    e.setAttribute("aria-selected", !0),
                  m.reflow(e),
                  e.classList.contains(Kt.FADE) && e.classList.add(Kt.SHOW),
                  e.parentNode && t(e.parentNode).hasClass(Kt.DROPDOWN_MENU))
                ) {
                  var a = t(e).closest(Gt.DROPDOWN)[0];
                  if (a) {
                    var o = [].slice.call(
                      a.querySelectorAll(Gt.DROPDOWN_TOGGLE)
                    );
                    t(o).addClass(Kt.ACTIVE);
                  }
                  e.setAttribute("aria-expanded", !0);
                }
                n && n();
              }),
              (e._jQueryInterface = function (i) {
                return this.each(function () {
                  var n = t(this),
                    s = n.data(zt);
                  if (
                    (s || ((s = new e(this)), n.data(zt, s)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === s[i])
                      throw new TypeError('No method named "' + i + '"');
                    s[i]();
                  }
                });
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return Bt;
                  },
                },
              ]),
              e
            );
          })();
        t(document).on(Yt.CLICK_DATA_API, Gt.DATA_TOGGLE, function (e) {
          e.preventDefault(), Xt._jQueryInterface.call(t(this), "show");
        }),
          (t.fn[jt] = Xt._jQueryInterface),
          (t.fn[jt].Constructor = Xt),
          (t.fn[jt].noConflict = function () {
            return (t.fn[jt] = Vt), Xt._jQueryInterface;
          });
        var Qt = "toast",
          Jt = "4.3.1",
          Zt = "bs.toast",
          ei = "." + Zt,
          ti = t.fn[Qt],
          ii = {
            CLICK_DISMISS: "click.dismiss" + ei,
            HIDE: "hide" + ei,
            HIDDEN: "hidden" + ei,
            SHOW: "show" + ei,
            SHOWN: "shown" + ei,
          },
          ni = {
            FADE: "fade",
            HIDE: "hide",
            SHOW: "show",
            SHOWING: "showing",
          },
          si = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number",
          },
          ai = {
            animation: !0,
            autohide: !0,
            delay: 500,
          },
          oi = {
            DATA_DISMISS: '[data-dismiss="toast"]',
          },
          ri = (function () {
            function e(e, t) {
              (this._element = e),
                (this._config = this._getConfig(t)),
                (this._timeout = null),
                this._setListeners();
            }
            var i = e.prototype;
            return (
              (i.show = function () {
                var e = this;
                t(this._element).trigger(ii.SHOW),
                  this._config.animation &&
                    this._element.classList.add(ni.FADE);
                var i = function () {
                  e._element.classList.remove(ni.SHOWING),
                    e._element.classList.add(ni.SHOW),
                    t(e._element).trigger(ii.SHOWN),
                    e._config.autohide && e.hide();
                };
                if (
                  (this._element.classList.remove(ni.HIDE),
                  this._element.classList.add(ni.SHOWING),
                  this._config.animation)
                ) {
                  var n = m.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(m.TRANSITION_END, i)
                    .emulateTransitionEnd(n);
                } else i();
              }),
              (i.hide = function (e) {
                var i = this;
                this._element.classList.contains(ni.SHOW) &&
                  (t(this._element).trigger(ii.HIDE),
                  e
                    ? this._close()
                    : (this._timeout = setTimeout(function () {
                        i._close();
                      }, this._config.delay)));
              }),
              (i.dispose = function () {
                clearTimeout(this._timeout),
                  (this._timeout = null),
                  this._element.classList.contains(ni.SHOW) &&
                    this._element.classList.remove(ni.SHOW),
                  t(this._element).off(ii.CLICK_DISMISS),
                  t.removeData(this._element, Zt),
                  (this._element = null),
                  (this._config = null);
              }),
              (i._getConfig = function (e) {
                return (
                  (e = o(
                    {},
                    ai,
                    t(this._element).data(),
                    "object" == typeof e && e ? e : {}
                  )),
                  m.typeCheckConfig(Qt, e, this.constructor.DefaultType),
                  e
                );
              }),
              (i._setListeners = function () {
                var e = this;
                t(this._element).on(
                  ii.CLICK_DISMISS,
                  oi.DATA_DISMISS,
                  function () {
                    return e.hide(!0);
                  }
                );
              }),
              (i._close = function () {
                var e = this,
                  i = function () {
                    e._element.classList.add(ni.HIDE),
                      t(e._element).trigger(ii.HIDDEN);
                  };
                if (
                  (this._element.classList.remove(ni.SHOW),
                  this._config.animation)
                ) {
                  var n = m.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(m.TRANSITION_END, i)
                    .emulateTransitionEnd(n);
                } else i();
              }),
              (e._jQueryInterface = function (i) {
                return this.each(function () {
                  var n = t(this),
                    s = n.data(Zt);
                  if (
                    (s ||
                      ((s = new e(this, "object" == typeof i && i)),
                      n.data(Zt, s)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === s[i])
                      throw new TypeError('No method named "' + i + '"');
                    s[i](this);
                  }
                });
              }),
              s(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return Jt;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return si;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return ai;
                  },
                },
              ]),
              e
            );
          })();
        (t.fn[Qt] = ri._jQueryInterface),
          (t.fn[Qt].Constructor = ri),
          (t.fn[Qt].noConflict = function () {
            return (t.fn[Qt] = ti), ri._jQueryInterface;
          }),
          (function () {
            if (void 0 === t)
              throw new TypeError(
                "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
              );
            var e = t.fn.jquery.split(" ")[0].split("."),
              i = 1,
              n = 2,
              s = 9,
              a = 1,
              o = 4;
            if (
              (e[0] < n && e[1] < s) ||
              (e[0] === i && e[1] === s && e[2] < a) ||
              e[0] >= o
            )
              throw new Error(
                "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
              );
          })(),
          (e.Util = m),
          (e.Alert = x),
          (e.Button = P),
          (e.Carousel = Z),
          (e.Collapse = he),
          (e.Dropdown = Me),
          (e.Modal = Ue),
          (e.Popover = Dt),
          (e.Scrollspy = Ft),
          (e.Tab = Xt),
          (e.Toast = ri),
          (e.Tooltip = ft),
          Object.defineProperty(e, "__esModule", {
            value: !0,
          });
      })(t, i(619755), i(928981));
    },
    262988: function (e, t, i) {
      var n = i(661755),
        s = i(726665).each;
      function a(e, t) {
        (this.query = e),
          (this.isUnconditional = t),
          (this.handlers = []),
          (this.mql = window.matchMedia(e));
        var i = this;
        (this.listener = function (e) {
          (i.mql = e.currentTarget || e), i.assess();
        }),
          this.mql.addListener(this.listener);
      }
      (a.prototype = {
        constuctor: a,
        addHandler: function (e) {
          var t = new n(e);
          this.handlers.push(t), this.matches() && t.on();
        },
        removeHandler: function (e) {
          var t = this.handlers;
          s(t, function (i, n) {
            if (i.equals(e)) return i.destroy(), !t.splice(n, 1);
          });
        },
        matches: function () {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function () {
          s(this.handlers, function (e) {
            e.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function () {
          var e = this.matches() ? "on" : "off";
          s(this.handlers, function (t) {
            t[e]();
          });
        },
      }),
        (e.exports = a);
    },
    38177: function (e, t, i) {
      var n = i(262988),
        s = i(726665),
        a = s.each,
        o = s.isFunction,
        r = s.isArray;
      function l() {
        if (!window.matchMedia)
          throw new Error(
            "matchMedia not present, legacy browsers require a polyfill"
          );
        (this.queries = {}),
          (this.browserIsIncapable = !window.matchMedia("only all").matches);
      }
      (l.prototype = {
        constructor: l,
        register: function (e, t, i) {
          var s = this.queries,
            l = i && this.browserIsIncapable;
          return (
            s[e] || (s[e] = new n(e, l)),
            o(t) &&
              (t = {
                match: t,
              }),
            r(t) || (t = [t]),
            a(t, function (t) {
              o(t) &&
                (t = {
                  match: t,
                }),
                s[e].addHandler(t);
            }),
            this
          );
        },
        unregister: function (e, t) {
          var i = this.queries[e];
          return (
            i && (t ? i.removeHandler(t) : (i.clear(), delete this.queries[e])),
            this
          );
        },
      }),
        (e.exports = l);
    },
    661755: function (e) {
      function t(e) {
        (this.options = e), !e.deferSetup && this.setup();
      }
      (t.prototype = {
        constructor: t,
        setup: function () {
          this.options.setup && this.options.setup(), (this.initialised = !0);
        },
        on: function () {
          !this.initialised && this.setup(),
            this.options.match && this.options.match();
        },
        off: function () {
          this.options.unmatch && this.options.unmatch();
        },
        destroy: function () {
          this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function (e) {
          return this.options === e || this.options.match === e;
        },
      }),
        (e.exports = t);
    },
    726665: function (e) {
      e.exports = {
        isFunction: function (e) {
          return "function" == typeof e;
        },
        isArray: function (e) {
          return "[object Array]" === Object.prototype.toString.apply(e);
        },
        each: function (e, t) {
          for (var i = 0, n = e.length; i < n && !1 !== t(e[i], i); i++);
        },
      };
    },
    324974: function (e, t, i) {
      var n = i(38177);
      e.exports = new n();
    },
    288249: function (e, t, i) {
      var n, s, a;
      (s = [i(619755)]),
        (n = function (e) {
          function t(e) {
            this.init(e);
          }
          (t.prototype = {
            value: 0,
            size: 100,
            startAngle: -Math.PI,
            thickness: "auto",
            fill: {
              gradient: ["#3aeabb", "#fdd250"],
            },
            emptyFill: "rgba(0, 0, 0, .1)",
            animation: {
              duration: 1200,
              easing: "circleProgressEasing",
            },
            animationStartValue: 0,
            reverse: !1,
            lineCap: "butt",
            insertMode: "prepend",
            constructor: t,
            el: null,
            canvas: null,
            ctx: null,
            radius: 0,
            arcFill: null,
            lastFrameValue: 0,
            init: function (t) {
              e.extend(this, t),
                (this.radius = this.size / 2),
                this.initWidget(),
                this.initFill(),
                this.draw(),
                this.el.trigger("circle-inited");
            },
            initWidget: function () {
              this.canvas ||
                (this.canvas = e("<canvas>")[
                  "prepend" == this.insertMode ? "prependTo" : "appendTo"
                ](this.el)[0]);
              var t = this.canvas;
              if (
                ((t.width = this.size),
                (t.height = this.size),
                (this.ctx = t.getContext("2d")),
                window.devicePixelRatio > 1)
              ) {
                var i = window.devicePixelRatio;
                (t.style.width = t.style.height = this.size + "px"),
                  (t.width = t.height = this.size * i),
                  this.ctx.scale(i, i);
              }
            },
            initFill: function () {
              function t() {
                var t = e("<canvas>")[0];
                (t.width = n.size),
                  (t.height = n.size),
                  t.getContext("2d").drawImage(i, 0, 0, o, o),
                  (n.arcFill = n.ctx.createPattern(t, "no-repeat")),
                  n.drawFrame(n.lastFrameValue);
              }
              var i,
                n = this,
                s = this.fill,
                a = this.ctx,
                o = this.size;
              if (!s) throw Error("The fill is not specified!");
              if (
                ("string" == typeof s &&
                  (s = {
                    color: s,
                  }),
                s.color && (this.arcFill = s.color),
                s.gradient)
              ) {
                var r = s.gradient;
                if (1 == r.length) this.arcFill = r[0];
                else if (r.length > 1) {
                  for (
                    var l = s.gradientAngle || 0,
                      c = s.gradientDirection || [
                        (o / 2) * (1 - Math.cos(l)),
                        (o / 2) * (1 + Math.sin(l)),
                        (o / 2) * (1 + Math.cos(l)),
                        (o / 2) * (1 - Math.sin(l)),
                      ],
                      d = a.createLinearGradient.apply(a, c),
                      u = 0;
                    u < r.length;
                    u++
                  ) {
                    var h = r[u],
                      p = u / (r.length - 1);
                    e.isArray(h) && ((p = h[1]), (h = h[0])),
                      d.addColorStop(p, h);
                  }
                  this.arcFill = d;
                }
              }
              s.image &&
                (s.image instanceof Image
                  ? (i = s.image)
                  : ((i = new Image()).src = s.image),
                i.complete ? t() : (i.onload = t));
            },
            draw: function () {
              this.animation
                ? this.drawAnimated(this.value)
                : this.drawFrame(this.value);
            },
            drawFrame: function (e) {
              (this.lastFrameValue = e),
                this.ctx.clearRect(0, 0, this.size, this.size),
                this.drawEmptyArc(e),
                this.drawArc(e);
            },
            drawArc: function (e) {
              if (0 !== e) {
                var t = this.ctx,
                  i = this.radius,
                  n = this.getThickness(),
                  s = this.startAngle;
                t.save(),
                  t.beginPath(),
                  this.reverse
                    ? t.arc(i, i, i - n / 2, s - 2 * Math.PI * e, s)
                    : t.arc(i, i, i - n / 2, s, s + 2 * Math.PI * e),
                  (t.lineWidth = n),
                  (t.lineCap = this.lineCap),
                  (t.strokeStyle = this.arcFill),
                  t.stroke(),
                  t.restore();
              }
            },
            drawEmptyArc: function (e) {
              var t = this.ctx,
                i = this.radius,
                n = this.getThickness(),
                s = this.startAngle;
              e < 1 &&
                (t.save(),
                t.beginPath(),
                e <= 0
                  ? t.arc(i, i, i - n / 2, 0, 2 * Math.PI)
                  : this.reverse
                  ? t.arc(i, i, i - n / 2, s, s - 2 * Math.PI * e)
                  : t.arc(i, i, i - n / 2, s + 2 * Math.PI * e, s),
                (t.lineWidth = n),
                (t.strokeStyle = this.emptyFill),
                t.stroke(),
                t.restore());
            },
            drawAnimated: function (t) {
              var i = this,
                n = this.el,
                s = e(this.canvas);
              s.stop(!0, !1),
                n.trigger("circle-animation-start"),
                s
                  .css({
                    animationProgress: 0,
                  })
                  .animate(
                    {
                      animationProgress: 1,
                    },
                    e.extend({}, this.animation, {
                      step: function (e) {
                        var s = i.animationStartValue * (1 - e) + t * e;
                        i.drawFrame(s),
                          n.trigger("circle-animation-progress", [e, s]);
                      },
                    })
                  )
                  .promise()
                  .always(function () {
                    n.trigger("circle-animation-end");
                  });
            },
            getThickness: function () {
              return e.isNumeric(this.thickness)
                ? this.thickness
                : this.size / 14;
            },
            getValue: function () {
              return this.value;
            },
            setValue: function (e) {
              this.animation &&
                (this.animationStartValue = this.lastFrameValue),
                (this.value = e),
                this.draw();
            },
          }),
            (e.circleProgress = {
              defaults: t.prototype,
            }),
            (e.easing.circleProgressEasing = function (e) {
              return e < 0.5
                ? 0.5 * (e *= 2) * e * e
                : 1 - 0.5 * (e = 2 - 2 * e) * e * e;
            }),
            (e.fn.circleProgress = function (i, n) {
              var s = "circle-progress",
                a = this.data(s);
              if ("widget" == i) {
                if (!a)
                  throw Error(
                    'Calling "widget" method on not initialized instance is forbidden'
                  );
                return a.canvas;
              }
              if ("value" == i) {
                if (!a)
                  throw Error(
                    'Calling "value" method on not initialized instance is forbidden'
                  );
                if (void 0 === n) return a.getValue();
                var o = arguments[1];
                return this.each(function () {
                  e(this).data(s).setValue(o);
                });
              }
              return this.each(function () {
                var n = e(this),
                  a = n.data(s),
                  o = e.isPlainObject(i) ? i : {};
                if (a) a.init(o);
                else {
                  var r = e.extend({}, n.data());
                  "string" == typeof r.fill && (r.fill = JSON.parse(r.fill)),
                    "string" == typeof r.animation &&
                      (r.animation = JSON.parse(r.animation)),
                    ((o = e.extend(r, o)).el = n),
                    (a = new t(o)),
                    n.data(s, a);
                }
              });
            });
        }),
        void 0 === (a = "function" == typeof n ? n.apply(t, s) : n) ||
          (e.exports = a);
    },
    281545: function (e, t, i) {
      var n, s, a;
      (s = [i(619755)]),
        void 0 ===
          (a =
            "function" ==
            typeof (n = function (e) {
              var t,
                i = navigator.userAgent,
                n = /iphone/i.test(i),
                s = /chrome/i.test(i),
                a = /android/i.test(i);
              (e.mask = {
                definitions: {
                  9: "[0-9]",
                  a: "[A-Za-z]",
                  "*": "[A-Za-z0-9]",
                },
                autoclear: !0,
                dataName: "rawMaskFn",
                placeholder: "_",
              }),
                e.fn.extend({
                  caret: function (e, t) {
                    var i;
                    if (
                      0 !== this.length &&
                      !this.is(":hidden") &&
                      this.get(0) === document.activeElement
                    )
                      return "number" == typeof e
                        ? ((t = "number" == typeof t ? t : e),
                          this.each(function () {
                            this.setSelectionRange
                              ? this.setSelectionRange(e, t)
                              : this.createTextRange &&
                                ((i = this.createTextRange()).collapse(!0),
                                i.moveEnd("character", t),
                                i.moveStart("character", e),
                                i.select());
                          }))
                        : (this[0].setSelectionRange
                            ? ((e = this[0].selectionStart),
                              (t = this[0].selectionEnd))
                            : document.selection &&
                              document.selection.createRange &&
                              ((i = document.selection.createRange()),
                              (e =
                                0 - i.duplicate().moveStart("character", -1e5)),
                              (t = e + i.text.length)),
                          {
                            begin: e,
                            end: t,
                          });
                  },
                  unmask: function () {
                    return this.trigger("unmask");
                  },
                  mask: function (i, o) {
                    var r, l, c, d, u, h, p;
                    if (!i && this.length > 0) {
                      var f = e(this[0]).data(e.mask.dataName);
                      return f ? f() : void 0;
                    }
                    return (
                      (o = e.extend(
                        {
                          autoclear: e.mask.autoclear,
                          placeholder: e.mask.placeholder,
                          completed: null,
                        },
                        o
                      )),
                      (r = e.mask.definitions),
                      (l = []),
                      (c = h = i.length),
                      (d = null),
                      (i = String(i)),
                      e.each(i.split(""), function (e, t) {
                        "?" == t
                          ? (h--, (c = e))
                          : r[t]
                          ? (l.push(new RegExp(r[t])),
                            null === d && (d = l.length - 1),
                            e < c && (u = l.length - 1))
                          : l.push(null);
                      }),
                      this.trigger("unmask").each(function () {
                        var f = e(this),
                          m = e.map(i.split(""), function (e, t) {
                            if ("?" != e) return r[e] ? y(t) : e;
                          }),
                          g = m.join(""),
                          v = f.val();
                        function _() {
                          if (o.completed) {
                            for (var e = d; e <= u; e++)
                              if (l[e] && m[e] === y(e)) return;
                            o.completed.call(f);
                          }
                        }
                        function y(e) {
                          return e < o.placeholder.length
                            ? o.placeholder.charAt(e)
                            : o.placeholder.charAt(0);
                        }
                        function b(e) {
                          for (; ++e < h && !l[e]; );
                          return e;
                        }
                        function w(e) {
                          for (; --e >= 0 && !l[e]; );
                          return e;
                        }
                        function S(e, t) {
                          var i, n;
                          if (!(e < 0)) {
                            for (i = e, n = b(t); i < h; i++)
                              if (l[i]) {
                                if (!(n < h && l[i].test(m[n]))) break;
                                (m[i] = m[n]), (m[n] = y(n)), (n = b(n));
                              }
                            I(), f.caret(Math.max(d, e));
                          }
                        }
                        function k(e) {
                          var t, i, n, s;
                          for (t = e, i = y(e); t < h; t++)
                            if (l[t]) {
                              if (
                                ((n = b(t)),
                                (s = m[t]),
                                (m[t] = i),
                                !(n < h && l[n].test(s)))
                              )
                                break;
                              i = s;
                            }
                        }
                        function C(e) {
                          var t = f.val(),
                            i = f.caret();
                          if (p && p.length && p.length > t.length) {
                            for (A(!0); i.begin > 0 && !l[i.begin - 1]; )
                              i.begin--;
                            if (0 === i.begin)
                              for (; i.begin < d && !l[i.begin]; ) i.begin++;
                            f.caret(i.begin, i.begin);
                          } else {
                            A(!0);
                            var n = t.charAt(i.begin);
                            i.begin < h &&
                              (l[i.begin] || i.begin++,
                              l[i.begin].test(n) && i.begin++),
                              f.caret(i.begin, i.begin);
                          }
                          _();
                        }
                        function x(e) {
                          A(), f.val() != v && f.change();
                        }
                        function T(e) {
                          if (!f.prop("readonly")) {
                            var t,
                              i,
                              s,
                              a = e.which || e.keyCode;
                            (p = f.val()),
                              8 === a || 46 === a || (n && 127 === a)
                                ? ((i = (t = f.caret()).begin),
                                  (s = t.end) - i == 0 &&
                                    ((i = 46 !== a ? w(i) : (s = b(i - 1))),
                                    (s = 46 === a ? b(s) : s)),
                                  E(i, s),
                                  S(i, s - 1),
                                  e.preventDefault())
                                : 13 === a
                                ? x.call(this, e)
                                : 27 === a &&
                                  (f.val(v),
                                  f.caret(0, A()),
                                  e.preventDefault());
                          }
                        }
                        function D(t) {
                          if (!f.prop("readonly")) {
                            var i,
                              n,
                              s,
                              o = t.which || t.keyCode,
                              r = f.caret();
                            t.ctrlKey ||
                              t.altKey ||
                              t.metaKey ||
                              o < 32 ||
                              !o ||
                              13 === o ||
                              (r.end - r.begin != 0 &&
                                (E(r.begin, r.end), S(r.begin, r.end - 1)),
                              (i = b(r.begin - 1)) < h &&
                                ((n = String.fromCharCode(o)), l[i].test(n)) &&
                                (k(i),
                                (m[i] = n),
                                I(),
                                (s = b(i)),
                                a
                                  ? setTimeout(function () {
                                      e.proxy(e.fn.caret, f, s)();
                                    }, 0)
                                  : f.caret(s),
                                r.begin <= u && _()),
                              t.preventDefault());
                          }
                        }
                        function E(e, t) {
                          var i;
                          for (i = e; i < t && i < h; i++)
                            l[i] && (m[i] = y(i));
                        }
                        function I() {
                          f.val(m.join(""));
                        }
                        function A(e) {
                          var t,
                            i,
                            n,
                            s = f.val(),
                            a = -1;
                          for (t = 0, n = 0; t < h; t++)
                            if (l[t]) {
                              for (m[t] = y(t); n++ < s.length; )
                                if (((i = s.charAt(n - 1)), l[t].test(i))) {
                                  (m[t] = i), (a = t);
                                  break;
                                }
                              if (n > s.length) {
                                E(t + 1, h);
                                break;
                              }
                            } else
                              m[t] === s.charAt(n) && n++, t < c && (a = t);
                          return (
                            e
                              ? I()
                              : a + 1 < c
                              ? o.autoclear || m.join("") === g
                                ? (f.val() && f.val(""), E(0, h))
                                : I()
                              : (I(), f.val(f.val().substring(0, a + 1))),
                            c ? t : d
                          );
                        }
                        f.data(e.mask.dataName, function () {
                          return e
                            .map(m, function (e, t) {
                              return l[t] && e != y(t) ? e : null;
                            })
                            .join("");
                        }),
                          f
                            .one("unmask", function () {
                              f.off(".mask").removeData(e.mask.dataName);
                            })
                            .on("focus.mask", function () {
                              var e;
                              f.prop("readonly") ||
                                (clearTimeout(t),
                                (v = f.val()),
                                (e = A()),
                                (t = setTimeout(function () {
                                  f.get(0) === document.activeElement &&
                                    (I(),
                                    e == i.replace("?", "").length
                                      ? f.caret(0, e)
                                      : f.caret(e));
                                }, 10)));
                            })
                            .on("blur.mask", x)
                            .on("keydown.mask", T)
                            .on("keypress.mask", D)
                            .on("input.mask paste.mask", function () {
                              f.prop("readonly") ||
                                setTimeout(function () {
                                  var e = A(!0);
                                  f.caret(e), _();
                                }, 0);
                            }),
                          s && a && f.off("input.mask").on("input.mask", C),
                          A();
                      })
                    );
                  },
                });
            })
              ? n.apply(t, s)
              : n) || (e.exports = a);
    },
    250450: function (e, t, i) {
      var n, s, a;
      (s = [i(619755)]),
        (n = function (e) {
          var t,
            i,
            n = [
              "wheel",
              "mousewheel",
              "DOMMouseScroll",
              "MozMousePixelScroll",
            ],
            s =
              "onwheel" in document || document.documentMode >= 9
                ? ["wheel"]
                : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            a = Array.prototype.slice;
          if (e.event.fixHooks)
            for (var o = n.length; o; )
              e.event.fixHooks[n[--o]] = e.event.mouseHooks;
          var r = (e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
              if (this.addEventListener)
                for (var t = s.length; t; )
                  this.addEventListener(s[--t], l, !1);
              else this.onmousewheel = l;
              e.data(this, "mousewheel-line-height", r.getLineHeight(this)),
                e.data(this, "mousewheel-page-height", r.getPageHeight(this));
            },
            teardown: function () {
              if (this.removeEventListener)
                for (var t = s.length; t; )
                  this.removeEventListener(s[--t], l, !1);
              else this.onmousewheel = null;
              e.removeData(this, "mousewheel-line-height"),
                e.removeData(this, "mousewheel-page-height");
            },
            getLineHeight: function (t) {
              var i = e(t),
                n = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
              return (
                n.length || (n = e("body")),
                parseInt(n.css("fontSize"), 10) ||
                  parseInt(i.css("fontSize"), 10) ||
                  16
              );
            },
            getPageHeight: function (t) {
              return e(t).height();
            },
            settings: {
              adjustOldDeltas: !0,
              normalizeOffset: !0,
            },
          });
          function l(n) {
            var s = n || window.event,
              o = a.call(arguments, 1),
              l = 0,
              u = 0,
              h = 0,
              p = 0,
              f = 0,
              m = 0;
            if (
              (((n = e.event.fix(s)).type = "mousewheel"),
              "detail" in s && (h = -1 * s.detail),
              "wheelDelta" in s && (h = s.wheelDelta),
              "wheelDeltaY" in s && (h = s.wheelDeltaY),
              "wheelDeltaX" in s && (u = -1 * s.wheelDeltaX),
              "axis" in s &&
                s.axis === s.HORIZONTAL_AXIS &&
                ((u = -1 * h), (h = 0)),
              (l = 0 === h ? u : h),
              "deltaY" in s && (l = h = -1 * s.deltaY),
              "deltaX" in s && ((u = s.deltaX), 0 === h && (l = -1 * u)),
              0 !== h || 0 !== u)
            ) {
              if (1 === s.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                (l *= g), (h *= g), (u *= g);
              } else if (2 === s.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                (l *= v), (h *= v), (u *= v);
              }
              if (
                ((p = Math.max(Math.abs(h), Math.abs(u))),
                (!i || p < i) && ((i = p), d(s, p) && (i /= 40)),
                d(s, p) && ((l /= 40), (u /= 40), (h /= 40)),
                (l = Math[l >= 1 ? "floor" : "ceil"](l / i)),
                (u = Math[u >= 1 ? "floor" : "ceil"](u / i)),
                (h = Math[h >= 1 ? "floor" : "ceil"](h / i)),
                r.settings.normalizeOffset && this.getBoundingClientRect)
              ) {
                var _ = this.getBoundingClientRect();
                (f = n.clientX - _.left), (m = n.clientY - _.top);
              }
              return (
                (n.deltaX = u),
                (n.deltaY = h),
                (n.deltaFactor = i),
                (n.offsetX = f),
                (n.offsetY = m),
                (n.deltaMode = 0),
                o.unshift(n, l, u, h),
                t && clearTimeout(t),
                (t = setTimeout(c, 200)),
                (e.event.dispatch || e.event.handle).apply(this, o)
              );
            }
          }
          function c() {
            i = null;
          }
          function d(e, t) {
            return (
              r.settings.adjustOldDeltas &&
              "mousewheel" === e.type &&
              t % 120 == 0
            );
          }
          e.fn.extend({
            mousewheel: function (e) {
              return e
                ? this.bind("mousewheel", e)
                : this.trigger("mousewheel");
            },
            unmousewheel: function (e) {
              return this.unbind("mousewheel", e);
            },
          });
        }),
        void 0 === (a = "function" == typeof n ? n.apply(t, s) : n) ||
          (e.exports = a);
    },
    902549: function (e, t, i) {
      var n, s, a;
      (s = [i(619755)]),
        (n = function (e) {
          (e.ui = e.ui || {}), (e.ui.version = "1.12.1");
          var t = 0,
            i = Array.prototype.slice;
          (e.cleanData = (function (t) {
            return function (i) {
              var n, s, a;
              for (a = 0; null != (s = i[a]); a++)
                try {
                  (n = e._data(s, "events")) &&
                    n.remove &&
                    e(s).triggerHandler("remove");
                } catch (e) {}
              t(i);
            };
          })(e.cleanData)),
            (e.widget = function (t, i, n) {
              var s,
                a,
                o,
                r = {},
                l = t.split(".")[0],
                c = l + "-" + (t = t.split(".")[1]);
              return (
                n || ((n = i), (i = e.Widget)),
                e.isArray(n) && (n = e.extend.apply(null, [{}].concat(n))),
                (e.expr[":"][c.toLowerCase()] = function (t) {
                  return !!e.data(t, c);
                }),
                (e[l] = e[l] || {}),
                (s = e[l][t]),
                (a = e[l][t] =
                  function (e, t) {
                    return this._createWidget
                      ? void (arguments.length && this._createWidget(e, t))
                      : new a(e, t);
                  }),
                e.extend(a, s, {
                  version: n.version,
                  _proto: e.extend({}, n),
                  _childConstructors: [],
                }),
                ((o = new i()).options = e.widget.extend({}, o.options)),
                e.each(n, function (t, n) {
                  return e.isFunction(n)
                    ? void (r[t] = (function () {
                        function e() {
                          return i.prototype[t].apply(this, arguments);
                        }
                        function s(e) {
                          return i.prototype[t].apply(this, e);
                        }
                        return function () {
                          var t,
                            i = this._super,
                            a = this._superApply;
                          return (
                            (this._super = e),
                            (this._superApply = s),
                            (t = n.apply(this, arguments)),
                            (this._super = i),
                            (this._superApply = a),
                            t
                          );
                        };
                      })())
                    : void (r[t] = n);
                }),
                (a.prototype = e.widget.extend(
                  o,
                  {
                    widgetEventPrefix: (s && o.widgetEventPrefix) || t,
                  },
                  r,
                  {
                    constructor: a,
                    namespace: l,
                    widgetName: t,
                    widgetFullName: c,
                  }
                )),
                s
                  ? (e.each(s._childConstructors, function (t, i) {
                      var n = i.prototype;
                      e.widget(n.namespace + "." + n.widgetName, a, i._proto);
                    }),
                    delete s._childConstructors)
                  : i._childConstructors.push(a),
                e.widget.bridge(t, a),
                a
              );
            }),
            (e.widget.extend = function (t) {
              for (
                var n, s, a = i.call(arguments, 1), o = 0, r = a.length;
                r > o;
                o++
              )
                for (n in a[o])
                  (s = a[o][n]),
                    a[o].hasOwnProperty(n) &&
                      void 0 !== s &&
                      (t[n] = e.isPlainObject(s)
                        ? e.isPlainObject(t[n])
                          ? e.widget.extend({}, t[n], s)
                          : e.widget.extend({}, s)
                        : s);
              return t;
            }),
            (e.widget.bridge = function (t, n) {
              var s = n.prototype.widgetFullName || t;
              e.fn[t] = function (a) {
                var o = "string" == typeof a,
                  r = i.call(arguments, 1),
                  l = this;
                return (
                  o
                    ? this.length || "instance" !== a
                      ? this.each(function () {
                          var i,
                            n = e.data(this, s);
                          return "instance" === a
                            ? ((l = n), !1)
                            : n
                            ? e.isFunction(n[a]) && "_" !== a.charAt(0)
                              ? (i = n[a].apply(n, r)) !== n && void 0 !== i
                                ? ((l =
                                    i && i.jquery ? l.pushStack(i.get()) : i),
                                  !1)
                                : void 0
                              : e.error(
                                  "no such method '" +
                                    a +
                                    "' for " +
                                    t +
                                    " widget instance"
                                )
                            : e.error(
                                "cannot call methods on " +
                                  t +
                                  " prior to initialization; attempted to call method '" +
                                  a +
                                  "'"
                              );
                        })
                      : (l = void 0)
                    : (r.length &&
                        (a = e.widget.extend.apply(null, [a].concat(r))),
                      this.each(function () {
                        var t = e.data(this, s);
                        t
                          ? (t.option(a || {}), t._init && t._init())
                          : e.data(this, s, new n(a, this));
                      })),
                  l
                );
              };
            }),
            (e.Widget = function () {}),
            (e.Widget._childConstructors = []),
            (e.Widget.prototype = {
              widgetName: "widget",
              widgetEventPrefix: "",
              defaultElement: "<div>",
              options: {
                classes: {},
                disabled: !1,
                create: null,
              },
              _createWidget: function (i, n) {
                (n = e(n || this.defaultElement || this)[0]),
                  (this.element = e(n)),
                  (this.uuid = t++),
                  (this.eventNamespace = "." + this.widgetName + this.uuid),
                  (this.bindings = e()),
                  (this.hoverable = e()),
                  (this.focusable = e()),
                  (this.classesElementLookup = {}),
                  n !== this &&
                    (e.data(n, this.widgetFullName, this),
                    this._on(!0, this.element, {
                      remove: function (e) {
                        e.target === n && this.destroy();
                      },
                    }),
                    (this.document = e(
                      n.style ? n.ownerDocument : n.document || n
                    )),
                    (this.window = e(
                      this.document[0].defaultView ||
                        this.document[0].parentWindow
                    ))),
                  (this.options = e.widget.extend(
                    {},
                    this.options,
                    this._getCreateOptions(),
                    i
                  )),
                  this._create(),
                  this.options.disabled &&
                    this._setOptionDisabled(this.options.disabled),
                  this._trigger("create", null, this._getCreateEventData()),
                  this._init();
              },
              _getCreateOptions: function () {
                return {};
              },
              _getCreateEventData: e.noop,
              _create: e.noop,
              _init: e.noop,
              destroy: function () {
                var t = this;
                this._destroy(),
                  e.each(this.classesElementLookup, function (e, i) {
                    t._removeClass(i, e);
                  }),
                  this.element
                    .off(this.eventNamespace)
                    .removeData(this.widgetFullName),
                  this.widget()
                    .off(this.eventNamespace)
                    .removeAttr("aria-disabled"),
                  this.bindings.off(this.eventNamespace);
              },
              _destroy: e.noop,
              widget: function () {
                return this.element;
              },
              option: function (t, i) {
                var n,
                  s,
                  a,
                  o = t;
                if (0 === arguments.length)
                  return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                  if (
                    ((o = {}), (n = t.split(".")), (t = n.shift()), n.length)
                  ) {
                    for (
                      s = o[t] = e.widget.extend({}, this.options[t]), a = 0;
                      n.length - 1 > a;
                      a++
                    )
                      (s[n[a]] = s[n[a]] || {}), (s = s[n[a]]);
                    if (((t = n.pop()), 1 === arguments.length))
                      return void 0 === s[t] ? null : s[t];
                    s[t] = i;
                  } else {
                    if (1 === arguments.length)
                      return void 0 === this.options[t]
                        ? null
                        : this.options[t];
                    o[t] = i;
                  }
                return this._setOptions(o), this;
              },
              _setOptions: function (e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this;
              },
              _setOption: function (e, t) {
                return (
                  "classes" === e && this._setOptionClasses(t),
                  (this.options[e] = t),
                  "disabled" === e && this._setOptionDisabled(t),
                  this
                );
              },
              _setOptionClasses: function (t) {
                var i, n, s;
                for (i in t)
                  (s = this.classesElementLookup[i]),
                    t[i] !== this.options.classes[i] &&
                      s &&
                      s.length &&
                      ((n = e(s.get())),
                      this._removeClass(s, i),
                      n.addClass(
                        this._classes({
                          element: n,
                          keys: i,
                          classes: t,
                          add: !0,
                        })
                      ));
              },
              _setOptionDisabled: function (e) {
                this._toggleClass(
                  this.widget(),
                  this.widgetFullName + "-disabled",
                  null,
                  !!e
                ),
                  e &&
                    (this._removeClass(this.hoverable, null, "ui-state-hover"),
                    this._removeClass(this.focusable, null, "ui-state-focus"));
              },
              enable: function () {
                return this._setOptions({
                  disabled: !1,
                });
              },
              disable: function () {
                return this._setOptions({
                  disabled: !0,
                });
              },
              _classes: function (t) {
                function i(i, a) {
                  var o, r;
                  for (r = 0; i.length > r; r++)
                    (o = s.classesElementLookup[i[r]] || e()),
                      (o = t.add
                        ? e(e.unique(o.get().concat(t.element.get())))
                        : e(o.not(t.element).get())),
                      (s.classesElementLookup[i[r]] = o),
                      n.push(i[r]),
                      a && t.classes[i[r]] && n.push(t.classes[i[r]]);
                }
                var n = [],
                  s = this;
                return (
                  (t = e.extend(
                    {
                      element: this.element,
                      classes: this.options.classes || {},
                    },
                    t
                  )),
                  this._on(t.element, {
                    remove: "_untrackClassesElement",
                  }),
                  t.keys && i(t.keys.match(/\S+/g) || [], !0),
                  t.extra && i(t.extra.match(/\S+/g) || []),
                  n.join(" ")
                );
              },
              _untrackClassesElement: function (t) {
                var i = this;
                e.each(i.classesElementLookup, function (n, s) {
                  -1 !== e.inArray(t.target, s) &&
                    (i.classesElementLookup[n] = e(s.not(t.target).get()));
                });
              },
              _removeClass: function (e, t, i) {
                return this._toggleClass(e, t, i, !1);
              },
              _addClass: function (e, t, i) {
                return this._toggleClass(e, t, i, !0);
              },
              _toggleClass: function (e, t, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof e || null === e,
                  a = {
                    extra: s ? t : i,
                    keys: s ? e : t,
                    element: s ? this.element : e,
                    add: n,
                  };
                return a.element.toggleClass(this._classes(a), n), this;
              },
              _on: function (t, i, n) {
                var s,
                  a = this;
                "boolean" != typeof t && ((n = i), (i = t), (t = !1)),
                  n
                    ? ((i = s = e(i)), (this.bindings = this.bindings.add(i)))
                    : ((n = i), (i = this.element), (s = this.widget())),
                  e.each(n, function (n, o) {
                    function r() {
                      return t ||
                        (!0 !== a.options.disabled &&
                          !e(this).hasClass("ui-state-disabled"))
                        ? ("string" == typeof o ? a[o] : o).apply(a, arguments)
                        : void 0;
                    }
                    "string" != typeof o &&
                      (r.guid = o.guid = o.guid || r.guid || e.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                      c = l[1] + a.eventNamespace,
                      d = l[2];
                    d ? s.on(c, d, r) : i.on(c, r);
                  });
              },
              _off: function (t, i) {
                (i =
                  (i || "").split(" ").join(this.eventNamespace + " ") +
                  this.eventNamespace),
                  t.off(i).off(i),
                  (this.bindings = e(this.bindings.not(t).get())),
                  (this.focusable = e(this.focusable.not(t).get())),
                  (this.hoverable = e(this.hoverable.not(t).get()));
              },
              _delay: function (e, t) {
                function i() {
                  return ("string" == typeof e ? n[e] : e).apply(n, arguments);
                }
                var n = this;
                return setTimeout(i, t || 0);
              },
              _hoverable: function (t) {
                (this.hoverable = this.hoverable.add(t)),
                  this._on(t, {
                    mouseenter: function (t) {
                      this._addClass(
                        e(t.currentTarget),
                        null,
                        "ui-state-hover"
                      );
                    },
                    mouseleave: function (t) {
                      this._removeClass(
                        e(t.currentTarget),
                        null,
                        "ui-state-hover"
                      );
                    },
                  });
              },
              _focusable: function (t) {
                (this.focusable = this.focusable.add(t)),
                  this._on(t, {
                    focusin: function (t) {
                      this._addClass(
                        e(t.currentTarget),
                        null,
                        "ui-state-focus"
                      );
                    },
                    focusout: function (t) {
                      this._removeClass(
                        e(t.currentTarget),
                        null,
                        "ui-state-focus"
                      );
                    },
                  });
              },
              _trigger: function (t, i, n) {
                var s,
                  a,
                  o = this.options[t];
                if (
                  ((n = n || {}),
                  ((i = e.Event(i)).type = (
                    t === this.widgetEventPrefix
                      ? t
                      : this.widgetEventPrefix + t
                  ).toLowerCase()),
                  (i.target = this.element[0]),
                  (a = i.originalEvent))
                )
                  for (s in a) s in i || (i[s] = a[s]);
                return (
                  this.element.trigger(i, n),
                  !(
                    (e.isFunction(o) &&
                      !1 === o.apply(this.element[0], [i].concat(n))) ||
                    i.isDefaultPrevented()
                  )
                );
              },
            }),
            e.each(
              {
                show: "fadeIn",
                hide: "fadeOut",
              },
              function (t, i) {
                e.Widget.prototype["_" + t] = function (n, s, a) {
                  "string" == typeof s &&
                    (s = {
                      effect: s,
                    });
                  var o,
                    r = s
                      ? !0 === s || "number" == typeof s
                        ? i
                        : s.effect || i
                      : t;
                  "number" == typeof (s = s || {}) &&
                    (s = {
                      duration: s,
                    }),
                    (o = !e.isEmptyObject(s)),
                    (s.complete = a),
                    s.delay && n.delay(s.delay),
                    o && e.effects && e.effects.effect[r]
                      ? n[t](s)
                      : r !== t && n[r]
                      ? n[r](s.duration, s.easing, a)
                      : n.queue(function (i) {
                          e(this)[t](), a && a.call(n[0]), i();
                        });
                };
              }
            ),
            e.widget,
            (e.ui.keyCode = {
              BACKSPACE: 8,
              COMMA: 188,
              DELETE: 46,
              DOWN: 40,
              END: 35,
              ENTER: 13,
              ESCAPE: 27,
              HOME: 36,
              LEFT: 37,
              PAGE_DOWN: 34,
              PAGE_UP: 33,
              PERIOD: 190,
              RIGHT: 39,
              SPACE: 32,
              TAB: 9,
              UP: 38,
            }),
            (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
          var n = !1;
          e(document).on("mouseup", function () {
            n = !1;
          }),
            e.widget("ui.mouse", {
              version: "1.12.1",
              options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0,
              },
              _mouseInit: function () {
                var t = this;
                this.element
                  .on("mousedown." + this.widgetName, function (e) {
                    return t._mouseDown(e);
                  })
                  .on("click." + this.widgetName, function (i) {
                    return !0 ===
                      e.data(i.target, t.widgetName + ".preventClickEvent")
                      ? (e.removeData(
                          i.target,
                          t.widgetName + ".preventClickEvent"
                        ),
                        i.stopImmediatePropagation(),
                        !1)
                      : void 0;
                  }),
                  (this.started = !1);
              },
              _mouseDestroy: function () {
                this.element.off("." + this.widgetName),
                  this._mouseMoveDelegate &&
                    this.document
                      .off(
                        "mousemove." + this.widgetName,
                        this._mouseMoveDelegate
                      )
                      .off("mouseup." + this.widgetName, this._mouseUpDelegate);
              },
              _mouseDown: function (t) {
                if (!n) {
                  (this._mouseMoved = !1),
                    this._mouseStarted && this._mouseUp(t),
                    (this._mouseDownEvent = t);
                  var i = this,
                    s = 1 === t.which,
                    a =
                      !(
                        "string" != typeof this.options.cancel ||
                        !t.target.nodeName
                      ) && e(t.target).closest(this.options.cancel).length;
                  return !(
                    s &&
                    !a &&
                    this._mouseCapture(t) &&
                    ((this.mouseDelayMet = !this.options.delay),
                    this.mouseDelayMet ||
                      (this._mouseDelayTimer = setTimeout(function () {
                        i.mouseDelayMet = !0;
                      }, this.options.delay)),
                    this._mouseDistanceMet(t) &&
                    this._mouseDelayMet(t) &&
                    ((this._mouseStarted = !1 !== this._mouseStart(t)),
                    !this._mouseStarted)
                      ? (t.preventDefault(), 0)
                      : (!0 ===
                          e.data(
                            t.target,
                            this.widgetName + ".preventClickEvent"
                          ) &&
                          e.removeData(
                            t.target,
                            this.widgetName + ".preventClickEvent"
                          ),
                        (this._mouseMoveDelegate = function (e) {
                          return i._mouseMove(e);
                        }),
                        (this._mouseUpDelegate = function (e) {
                          return i._mouseUp(e);
                        }),
                        this.document
                          .on(
                            "mousemove." + this.widgetName,
                            this._mouseMoveDelegate
                          )
                          .on(
                            "mouseup." + this.widgetName,
                            this._mouseUpDelegate
                          ),
                        t.preventDefault(),
                        (n = !0),
                        0))
                  );
                }
              },
              _mouseMove: function (t) {
                if (this._mouseMoved) {
                  if (
                    e.ui.ie &&
                    (!document.documentMode || 9 > document.documentMode) &&
                    !t.button
                  )
                    return this._mouseUp(t);
                  if (!t.which)
                    if (
                      t.originalEvent.altKey ||
                      t.originalEvent.ctrlKey ||
                      t.originalEvent.metaKey ||
                      t.originalEvent.shiftKey
                    )
                      this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(t);
                }
                return (
                  (t.which || t.button) && (this._mouseMoved = !0),
                  this._mouseStarted
                    ? (this._mouseDrag(t), t.preventDefault())
                    : (this._mouseDistanceMet(t) &&
                        this._mouseDelayMet(t) &&
                        ((this._mouseStarted =
                          !1 !== this._mouseStart(this._mouseDownEvent, t)),
                        this._mouseStarted
                          ? this._mouseDrag(t)
                          : this._mouseUp(t)),
                      !this._mouseStarted)
                );
              },
              _mouseUp: function (t) {
                this.document
                  .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
                  .off("mouseup." + this.widgetName, this._mouseUpDelegate),
                  this._mouseStarted &&
                    ((this._mouseStarted = !1),
                    t.target === this._mouseDownEvent.target &&
                      e.data(
                        t.target,
                        this.widgetName + ".preventClickEvent",
                        !0
                      ),
                    this._mouseStop(t)),
                  this._mouseDelayTimer &&
                    (clearTimeout(this._mouseDelayTimer),
                    delete this._mouseDelayTimer),
                  (this.ignoreMissingWhich = !1),
                  (n = !1),
                  t.preventDefault();
              },
              _mouseDistanceMet: function (e) {
                return (
                  Math.max(
                    Math.abs(this._mouseDownEvent.pageX - e.pageX),
                    Math.abs(this._mouseDownEvent.pageY - e.pageY)
                  ) >= this.options.distance
                );
              },
              _mouseDelayMet: function () {
                return this.mouseDelayMet;
              },
              _mouseStart: function () {},
              _mouseDrag: function () {},
              _mouseStop: function () {},
              _mouseCapture: function () {
                return !0;
              },
            }),
            e.widget("ui.slider", e.ui.mouse, {
              version: "1.12.1",
              widgetEventPrefix: "slide",
              options: {
                animate: !1,
                classes: {
                  "ui-slider": "ui-corner-all",
                  "ui-slider-handle": "ui-corner-all",
                  "ui-slider-range": "ui-corner-all ui-widget-header",
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null,
              },
              numPages: 5,
              _create: function () {
                (this._keySliding = !1),
                  (this._mouseSliding = !1),
                  (this._animateOff = !0),
                  (this._handleIndex = null),
                  this._detectOrientation(),
                  this._mouseInit(),
                  this._calculateNewMax(),
                  this._addClass(
                    "ui-slider ui-slider-" + this.orientation,
                    "ui-widget ui-widget-content"
                  ),
                  this._refresh(),
                  (this._animateOff = !1);
              },
              _refresh: function () {
                this._createRange(),
                  this._createHandles(),
                  this._setupEvents(),
                  this._refreshValue();
              },
              _createHandles: function () {
                var t,
                  i,
                  n = this.options,
                  s = this.element.find(".ui-slider-handle"),
                  a = "<span tabindex='0'></span>",
                  o = [];
                for (
                  i = (n.values && n.values.length) || 1,
                    s.length > i && (s.slice(i).remove(), (s = s.slice(0, i))),
                    t = s.length;
                  i > t;
                  t++
                )
                  o.push(a);
                (this.handles = s.add(e(o.join("")).appendTo(this.element))),
                  this._addClass(
                    this.handles,
                    "ui-slider-handle",
                    "ui-state-default"
                  ),
                  (this.handle = this.handles.eq(0)),
                  this.handles.each(function (t) {
                    e(this)
                      .data("ui-slider-handle-index", t)
                      .attr("tabIndex", 0);
                  });
              },
              _createRange: function () {
                var t = this.options;
                t.range
                  ? (!0 === t.range &&
                      (t.values
                        ? t.values.length && 2 !== t.values.length
                          ? (t.values = [t.values[0], t.values[0]])
                          : e.isArray(t.values) &&
                            (t.values = t.values.slice(0))
                        : (t.values = [this._valueMin(), this._valueMin()])),
                    this.range && this.range.length
                      ? (this._removeClass(
                          this.range,
                          "ui-slider-range-min ui-slider-range-max"
                        ),
                        this.range.css({
                          left: "",
                          bottom: "",
                        }))
                      : ((this.range = e("<div>").appendTo(this.element)),
                        this._addClass(this.range, "ui-slider-range")),
                    ("min" === t.range || "max" === t.range) &&
                      this._addClass(this.range, "ui-slider-range-" + t.range))
                  : (this.range && this.range.remove(), (this.range = null));
              },
              _setupEvents: function () {
                this._off(this.handles),
                  this._on(this.handles, this._handleEvents),
                  this._hoverable(this.handles),
                  this._focusable(this.handles);
              },
              _destroy: function () {
                this.handles.remove(),
                  this.range && this.range.remove(),
                  this._mouseDestroy();
              },
              _mouseCapture: function (t) {
                var i,
                  n,
                  s,
                  a,
                  o,
                  r,
                  l,
                  c = this,
                  d = this.options;
                return (
                  !d.disabled &&
                  ((this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                  }),
                  (this.elementOffset = this.element.offset()),
                  (i = {
                    x: t.pageX,
                    y: t.pageY,
                  }),
                  (n = this._normValueFromMouse(i)),
                  (s = this._valueMax() - this._valueMin() + 1),
                  this.handles.each(function (t) {
                    var i = Math.abs(n - c.values(t));
                    (s > i ||
                      (s === i &&
                        (t === c._lastChangedValue ||
                          c.values(t) === d.min))) &&
                      ((s = i), (a = e(this)), (o = t));
                  }),
                  !1 !== this._start(t, o) &&
                    ((this._mouseSliding = !0),
                    (this._handleIndex = o),
                    this._addClass(a, null, "ui-state-active"),
                    a.trigger("focus"),
                    (r = a.offset()),
                    (l = !e(t.target)
                      .parents()
                      .addBack()
                      .is(".ui-slider-handle")),
                    (this._clickOffset = l
                      ? {
                          left: 0,
                          top: 0,
                        }
                      : {
                          left: t.pageX - r.left - a.width() / 2,
                          top:
                            t.pageY -
                            r.top -
                            a.height() / 2 -
                            (parseInt(a.css("borderTopWidth"), 10) || 0) -
                            (parseInt(a.css("borderBottomWidth"), 10) || 0) +
                            (parseInt(a.css("marginTop"), 10) || 0),
                        }),
                    this.handles.hasClass("ui-state-hover") ||
                      this._slide(t, o, n),
                    (this._animateOff = !0),
                    !0))
                );
              },
              _mouseStart: function () {
                return !0;
              },
              _mouseDrag: function (e) {
                var t = {
                    x: e.pageX,
                    y: e.pageY,
                  },
                  i = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, i), !1;
              },
              _mouseStop: function (e) {
                return (
                  this._removeClass(this.handles, null, "ui-state-active"),
                  (this._mouseSliding = !1),
                  this._stop(e, this._handleIndex),
                  this._change(e, this._handleIndex),
                  (this._handleIndex = null),
                  (this._clickOffset = null),
                  (this._animateOff = !1),
                  !1
                );
              },
              _detectOrientation: function () {
                this.orientation =
                  "vertical" === this.options.orientation
                    ? "vertical"
                    : "horizontal";
              },
              _normValueFromMouse: function (e) {
                var t, i, n, s, a;
                return (
                  "horizontal" === this.orientation
                    ? ((t = this.elementSize.width),
                      (i =
                        e.x -
                        this.elementOffset.left -
                        (this._clickOffset ? this._clickOffset.left : 0)))
                    : ((t = this.elementSize.height),
                      (i =
                        e.y -
                        this.elementOffset.top -
                        (this._clickOffset ? this._clickOffset.top : 0))),
                  (n = i / t) > 1 && (n = 1),
                  0 > n && (n = 0),
                  "vertical" === this.orientation && (n = 1 - n),
                  (s = this._valueMax() - this._valueMin()),
                  (a = this._valueMin() + n * s),
                  this._trimAlignValue(a)
                );
              },
              _uiHash: function (e, t, i) {
                var n = {
                  handle: this.handles[e],
                  handleIndex: e,
                  value: void 0 !== t ? t : this.value(),
                };
                return (
                  this._hasMultipleValues() &&
                    ((n.value = void 0 !== t ? t : this.values(e)),
                    (n.values = i || this.values())),
                  n
                );
              },
              _hasMultipleValues: function () {
                return this.options.values && this.options.values.length;
              },
              _start: function (e, t) {
                return this._trigger("start", e, this._uiHash(t));
              },
              _slide: function (e, t, i) {
                var n,
                  s = this.value(),
                  a = this.values();
                this._hasMultipleValues() &&
                  ((n = this.values(t ? 0 : 1)),
                  (s = this.values(t)),
                  2 === this.options.values.length &&
                    !0 === this.options.range &&
                    (i = 0 === t ? Math.min(n, i) : Math.max(n, i)),
                  (a[t] = i)),
                  i !== s &&
                    !1 !== this._trigger("slide", e, this._uiHash(t, i, a)) &&
                    (this._hasMultipleValues()
                      ? this.values(t, i)
                      : this.value(i));
              },
              _stop: function (e, t) {
                this._trigger("stop", e, this._uiHash(t));
              },
              _change: function (e, t) {
                this._keySliding ||
                  this._mouseSliding ||
                  ((this._lastChangedValue = t),
                  this._trigger("change", e, this._uiHash(t)));
              },
              value: function (e) {
                return arguments.length
                  ? ((this.options.value = this._trimAlignValue(e)),
                    this._refreshValue(),
                    void this._change(null, 0))
                  : this._value();
              },
              values: function (t, i) {
                var n, s, a;
                if (arguments.length > 1)
                  return (
                    (this.options.values[t] = this._trimAlignValue(i)),
                    this._refreshValue(),
                    void this._change(null, t)
                  );
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0]))
                  return this._hasMultipleValues()
                    ? this._values(t)
                    : this.value();
                for (
                  n = this.options.values, s = arguments[0], a = 0;
                  n.length > a;
                  a += 1
                )
                  (n[a] = this._trimAlignValue(s[a])), this._change(null, a);
                this._refreshValue();
              },
              _setOption: function (t, i) {
                var n,
                  s = 0;
                switch (
                  ("range" === t &&
                    !0 === this.options.range &&
                    ("min" === i
                      ? ((this.options.value = this._values(0)),
                        (this.options.values = null))
                      : "max" === i &&
                        ((this.options.value = this._values(
                          this.options.values.length - 1
                        )),
                        (this.options.values = null))),
                  e.isArray(this.options.values) &&
                    (s = this.options.values.length),
                  this._super(t, i),
                  t)
                ) {
                  case "orientation":
                    this._detectOrientation(),
                      this._removeClass(
                        "ui-slider-horizontal ui-slider-vertical"
                      )._addClass("ui-slider-" + this.orientation),
                      this._refreshValue(),
                      this.options.range && this._refreshRange(i),
                      this.handles.css(
                        "horizontal" === i ? "bottom" : "left",
                        ""
                      );
                    break;
                  case "value":
                    (this._animateOff = !0),
                      this._refreshValue(),
                      this._change(null, 0),
                      (this._animateOff = !1);
                    break;
                  case "values":
                    for (
                      this._animateOff = !0, this._refreshValue(), n = s - 1;
                      n >= 0;
                      n--
                    )
                      this._change(null, n);
                    this._animateOff = !1;
                    break;
                  case "step":
                  case "min":
                  case "max":
                    (this._animateOff = !0),
                      this._calculateNewMax(),
                      this._refreshValue(),
                      (this._animateOff = !1);
                    break;
                  case "range":
                    (this._animateOff = !0),
                      this._refresh(),
                      (this._animateOff = !1);
                }
              },
              _setOptionDisabled: function (e) {
                this._super(e),
                  this._toggleClass(null, "ui-state-disabled", !!e);
              },
              _value: function () {
                var e = this.options.value;
                return this._trimAlignValue(e);
              },
              _values: function (e) {
                var t, i, n;
                if (arguments.length)
                  return (t = this.options.values[e]), this._trimAlignValue(t);
                if (this._hasMultipleValues()) {
                  for (
                    i = this.options.values.slice(), n = 0;
                    i.length > n;
                    n += 1
                  )
                    i[n] = this._trimAlignValue(i[n]);
                  return i;
                }
                return [];
              },
              _trimAlignValue: function (e) {
                if (this._valueMin() >= e) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                  i = (e - this._valueMin()) % t,
                  n = e - i;
                return (
                  2 * Math.abs(i) >= t && (n += i > 0 ? t : -t),
                  parseFloat(n.toFixed(5))
                );
              },
              _calculateNewMax: function () {
                var e = this.options.max,
                  t = this._valueMin(),
                  i = this.options.step;
                (e = Math.round((e - t) / i) * i + t) > this.options.max &&
                  (e -= i),
                  (this.max = parseFloat(e.toFixed(this._precision())));
              },
              _precision: function () {
                var e = this._precisionOf(this.options.step);
                return (
                  null !== this.options.min &&
                    (e = Math.max(e, this._precisionOf(this.options.min))),
                  e
                );
              },
              _precisionOf: function (e) {
                var t = "" + e,
                  i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1;
              },
              _valueMin: function () {
                return this.options.min;
              },
              _valueMax: function () {
                return this.max;
              },
              _refreshRange: function (e) {
                "vertical" === e &&
                  this.range.css({
                    width: "",
                    left: "",
                  }),
                  "horizontal" === e &&
                    this.range.css({
                      height: "",
                      bottom: "",
                    });
              },
              _refreshValue: function () {
                var t,
                  i,
                  n,
                  s,
                  a,
                  o = this.options.range,
                  r = this.options,
                  l = this,
                  c = !this._animateOff && r.animate,
                  d = {};
                this._hasMultipleValues()
                  ? this.handles.each(function (n) {
                      (i =
                        ((l.values(n) - l._valueMin()) /
                          (l._valueMax() - l._valueMin())) *
                        100),
                        (d["horizontal" === l.orientation ? "left" : "bottom"] =
                          i + "%"),
                        e(this).stop(1, 1)[c ? "animate" : "css"](d, r.animate),
                        !0 === l.options.range &&
                          ("horizontal" === l.orientation
                            ? (0 === n &&
                                l.range.stop(1, 1)[c ? "animate" : "css"](
                                  {
                                    left: i + "%",
                                  },
                                  r.animate
                                ),
                              1 === n &&
                                l.range[c ? "animate" : "css"](
                                  {
                                    width: i - t + "%",
                                  },
                                  {
                                    queue: !1,
                                    duration: r.animate,
                                  }
                                ))
                            : (0 === n &&
                                l.range.stop(1, 1)[c ? "animate" : "css"](
                                  {
                                    bottom: i + "%",
                                  },
                                  r.animate
                                ),
                              1 === n &&
                                l.range[c ? "animate" : "css"](
                                  {
                                    height: i - t + "%",
                                  },
                                  {
                                    queue: !1,
                                    duration: r.animate,
                                  }
                                ))),
                        (t = i);
                    })
                  : ((n = this.value()),
                    (s = this._valueMin()),
                    (a = this._valueMax()),
                    (i = a !== s ? ((n - s) / (a - s)) * 100 : 0),
                    (d["horizontal" === this.orientation ? "left" : "bottom"] =
                      i + "%"),
                    this.handle.stop(1, 1)[c ? "animate" : "css"](d, r.animate),
                    "min" === o &&
                      "horizontal" === this.orientation &&
                      this.range.stop(1, 1)[c ? "animate" : "css"](
                        {
                          width: i + "%",
                        },
                        r.animate
                      ),
                    "max" === o &&
                      "horizontal" === this.orientation &&
                      this.range.stop(1, 1)[c ? "animate" : "css"](
                        {
                          width: 100 - i + "%",
                        },
                        r.animate
                      ),
                    "min" === o &&
                      "vertical" === this.orientation &&
                      this.range.stop(1, 1)[c ? "animate" : "css"](
                        {
                          height: i + "%",
                        },
                        r.animate
                      ),
                    "max" === o &&
                      "vertical" === this.orientation &&
                      this.range.stop(1, 1)[c ? "animate" : "css"](
                        {
                          height: 100 - i + "%",
                        },
                        r.animate
                      ));
              },
              _handleEvents: {
                keydown: function (t) {
                  var i,
                    n,
                    s,
                    a = e(t.target).data("ui-slider-handle-index");
                  switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                      if (
                        (t.preventDefault(),
                        !this._keySliding &&
                          ((this._keySliding = !0),
                          this._addClass(e(t.target), null, "ui-state-active"),
                          !1 === this._start(t, a)))
                      )
                        return;
                  }
                  switch (
                    ((s = this.options.step),
                    (i = n =
                      this._hasMultipleValues()
                        ? this.values(a)
                        : this.value()),
                    t.keyCode)
                  ) {
                    case e.ui.keyCode.HOME:
                      n = this._valueMin();
                      break;
                    case e.ui.keyCode.END:
                      n = this._valueMax();
                      break;
                    case e.ui.keyCode.PAGE_UP:
                      n = this._trimAlignValue(
                        i +
                          (this._valueMax() - this._valueMin()) / this.numPages
                      );
                      break;
                    case e.ui.keyCode.PAGE_DOWN:
                      n = this._trimAlignValue(
                        i -
                          (this._valueMax() - this._valueMin()) / this.numPages
                      );
                      break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                      if (i === this._valueMax()) return;
                      n = this._trimAlignValue(i + s);
                      break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                      if (i === this._valueMin()) return;
                      n = this._trimAlignValue(i - s);
                  }
                  this._slide(t, a, n);
                },
                keyup: function (t) {
                  var i = e(t.target).data("ui-slider-handle-index");
                  this._keySliding &&
                    ((this._keySliding = !1),
                    this._stop(t, i),
                    this._change(t, i),
                    this._removeClass(e(t.target), null, "ui-state-active"));
                },
              },
            });
        }),
        void 0 === (a = "function" == typeof n ? n.apply(t, s) : n) ||
          (e.exports = a);
    },
    605510: function (e, t, i) {
      !(function (e) {
        function t(e, t) {
          if (!(e.originalEvent.touches.length > 1)) {
            e.preventDefault();
            var i = e.originalEvent.changedTouches[0],
              n = document.createEvent("MouseEvents");
            n.initMouseEvent(
              t,
              !0,
              !0,
              window,
              1,
              i.screenX,
              i.screenY,
              i.clientX,
              i.clientY,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            ),
              e.target.dispatchEvent(n);
          }
        }
        if (((e.support.touch = "ontouchend" in document), e.support.touch)) {
          var i,
            n = e.ui.mouse.prototype,
            s = n._mouseInit,
            a = n._mouseDestroy;
          (n._touchStart = function (e) {
            !i &&
              this._mouseCapture(e.originalEvent.changedTouches[0]) &&
              ((i = !0),
              (this._touchMoved = !1),
              t(e, "mouseover"),
              t(e, "mousemove"),
              t(e, "mousedown"));
          }),
            (n._touchMove = function (e) {
              i && ((this._touchMoved = !0), t(e, "mousemove"));
            }),
            (n._touchEnd = function (e) {
              i &&
                (t(e, "mouseup"),
                t(e, "mouseout"),
                this._touchMoved || t(e, "click"),
                (i = !1));
            }),
            (n._mouseInit = function () {
              var t = this;
              t.element.bind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd"),
              }),
                s.call(t);
            }),
            (n._mouseDestroy = function () {
              var t = this;
              t.element.unbind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd"),
              }),
                a.call(t);
            });
        }
      })(i(619755));
    },
    117053: function (e, t, i) {
      var n, s, a;
      (s = [i(619755), i(785592)]),
        void 0 ===
          (a =
            "function" ==
            typeof (n = function (e) {
              return (e.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
              });
            })
              ? n.apply(t, s)
              : n) || (e.exports = a);
    },
    785592: function (e, t, i) {
      var n, s, a;
      (s = [i(619755)]),
        void 0 ===
          (a =
            "function" ==
            typeof (n = function (e) {
              return (e.ui = e.ui || {}), (e.ui.version = "1.12.1");
            })
              ? n.apply(t, s)
              : n) || (e.exports = a);
    },
    484414: function (e, t, i) {
      var n, s, a;
      (s = [i(619755), i(785592), i(117053)]),
        (n = function (e) {
          var t;
          function i(e) {
            for (var t, i; e.length && e[0] !== document; ) {
              if (
                ("absolute" === (t = e.css("position")) ||
                  "relative" === t ||
                  "fixed" === t) &&
                ((i = parseInt(e.css("zIndex"), 10)), !isNaN(i) && 0 !== i)
              )
                return i;
              e = e.parent();
            }
            return 0;
          }
          function n() {
            (this._curInst = null),
              (this._keyEvent = !1),
              (this._disabledInputs = []),
              (this._datepickerShowing = !1),
              (this._inDialog = !1),
              (this._mainDivId = "ui-datepicker-div"),
              (this._inlineClass = "ui-datepicker-inline"),
              (this._appendClass = "ui-datepicker-append"),
              (this._triggerClass = "ui-datepicker-trigger"),
              (this._dialogClass = "ui-datepicker-dialog"),
              (this._disableClass = "ui-datepicker-disabled"),
              (this._unselectableClass = "ui-datepicker-unselectable"),
              (this._currentClass = "ui-datepicker-current-day"),
              (this._dayOverClass = "ui-datepicker-days-cell-over"),
              (this.regional = []),
              (this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                monthNamesShort: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                dayNames: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                dayNamesShort: [
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                ],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: "",
              }),
              (this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1,
              }),
              e.extend(this._defaults, this.regional[""]),
              (this.regional.en = e.extend(!0, {}, this.regional[""])),
              (this.regional["en-US"] = e.extend(!0, {}, this.regional.en)),
              (this.dpDiv = s(
                e(
                  "<div id='" +
                    this._mainDivId +
                    "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              ));
          }
          function s(t) {
            var i =
              "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t
              .on("mouseout", i, function () {
                e(this).removeClass("ui-state-hover"),
                  -1 !== this.className.indexOf("ui-datepicker-prev") &&
                    e(this).removeClass("ui-datepicker-prev-hover"),
                  -1 !== this.className.indexOf("ui-datepicker-next") &&
                    e(this).removeClass("ui-datepicker-next-hover");
              })
              .on("mouseover", i, a);
          }
          function a() {
            e.datepicker._isDisabledDatepicker(
              t.inline ? t.dpDiv.parent()[0] : t.input[0]
            ) ||
              (e(this)
                .parents(".ui-datepicker-calendar")
                .find("a")
                .removeClass("ui-state-hover"),
              e(this).addClass("ui-state-hover"),
              -1 !== this.className.indexOf("ui-datepicker-prev") &&
                e(this).addClass("ui-datepicker-prev-hover"),
              -1 !== this.className.indexOf("ui-datepicker-next") &&
                e(this).addClass("ui-datepicker-next-hover"));
          }
          function o(t, i) {
            for (var n in (e.extend(t, i), i)) null == i[n] && (t[n] = i[n]);
            return t;
          }
          return (
            e.extend(e.ui, {
              datepicker: {
                version: "1.12.1",
              },
            }),
            e.extend(n.prototype, {
              markerClassName: "hasDatepicker",
              maxRows: 4,
              _widgetDatepicker: function () {
                return this.dpDiv;
              },
              setDefaults: function (e) {
                return o(this._defaults, e || {}), this;
              },
              _attachDatepicker: function (t, i) {
                var n, s, a;
                (s = "div" === (n = t.nodeName.toLowerCase()) || "span" === n),
                  t.id || ((this.uuid += 1), (t.id = "dp" + this.uuid)),
                  ((a = this._newInst(e(t), s)).settings = e.extend(
                    {},
                    i || {}
                  )),
                  "input" === n
                    ? this._connectDatepicker(t, a)
                    : s && this._inlineDatepicker(t, a);
              },
              _newInst: function (t, i) {
                return {
                  id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                  input: t,
                  selectedDay: 0,
                  selectedMonth: 0,
                  selectedYear: 0,
                  drawMonth: 0,
                  drawYear: 0,
                  inline: i,
                  dpDiv: i
                    ? s(
                        e(
                          "<div class='" +
                            this._inlineClass +
                            " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                        )
                      )
                    : this.dpDiv,
                };
              },
              _connectDatepicker: function (t, i) {
                var n = e(t);
                (i.append = e([])),
                  (i.trigger = e([])),
                  n.hasClass(this.markerClassName) ||
                    (this._attachments(n, i),
                    n
                      .addClass(this.markerClassName)
                      .on("keydown", this._doKeyDown)
                      .on("keypress", this._doKeyPress)
                      .on("keyup", this._doKeyUp),
                    this._autoSize(i),
                    e.data(t, "datepicker", i),
                    i.settings.disabled && this._disableDatepicker(t));
              },
              _attachments: function (t, i) {
                var n,
                  s,
                  a,
                  o = this._get(i, "appendText"),
                  r = this._get(i, "isRTL");
                i.append && i.append.remove(),
                  o &&
                    ((i.append = e(
                      "<span class='" + this._appendClass + "'>" + o + "</span>"
                    )),
                    t[r ? "before" : "after"](i.append)),
                  t.off("focus", this._showDatepicker),
                  i.trigger && i.trigger.remove(),
                  ("focus" !== (n = this._get(i, "showOn")) && "both" !== n) ||
                    t.on("focus", this._showDatepicker),
                  ("button" !== n && "both" !== n) ||
                    ((s = this._get(i, "buttonText")),
                    (a = this._get(i, "buttonImage")),
                    (i.trigger = e(
                      this._get(i, "buttonImageOnly")
                        ? e("<img/>").addClass(this._triggerClass).attr({
                            src: a,
                            alt: s,
                            title: s,
                          })
                        : e("<button type='button'></button>")
                            .addClass(this._triggerClass)
                            .html(
                              a
                                ? e("<img/>").attr({
                                    src: a,
                                    alt: s,
                                    title: s,
                                  })
                                : s
                            )
                    )),
                    t[r ? "before" : "after"](i.trigger),
                    i.trigger.on("click", function () {
                      return (
                        e.datepicker._datepickerShowing &&
                        e.datepicker._lastInput === t[0]
                          ? e.datepicker._hideDatepicker()
                          : e.datepicker._datepickerShowing &&
                            e.datepicker._lastInput !== t[0]
                          ? (e.datepicker._hideDatepicker(),
                            e.datepicker._showDatepicker(t[0]))
                          : e.datepicker._showDatepicker(t[0]),
                        !1
                      );
                    }));
              },
              _autoSize: function (e) {
                if (this._get(e, "autoSize") && !e.inline) {
                  var t,
                    i,
                    n,
                    s,
                    a = new Date(2009, 11, 20),
                    o = this._get(e, "dateFormat");
                  o.match(/[DM]/) &&
                    ((t = function (e) {
                      for (i = 0, n = 0, s = 0; s < e.length; s++)
                        e[s].length > i && ((i = e[s].length), (n = s));
                      return n;
                    }),
                    a.setMonth(
                      t(
                        this._get(
                          e,
                          o.match(/MM/) ? "monthNames" : "monthNamesShort"
                        )
                      )
                    ),
                    a.setDate(
                      t(
                        this._get(
                          e,
                          o.match(/DD/) ? "dayNames" : "dayNamesShort"
                        )
                      ) +
                        20 -
                        a.getDay()
                    )),
                    e.input.attr("size", this._formatDate(e, a).length);
                }
              },
              _inlineDatepicker: function (t, i) {
                var n = e(t);
                n.hasClass(this.markerClassName) ||
                  (n.addClass(this.markerClassName).append(i.dpDiv),
                  e.data(t, "datepicker", i),
                  this._setDate(i, this._getDefaultDate(i), !0),
                  this._updateDatepicker(i),
                  this._updateAlternate(i),
                  i.settings.disabled && this._disableDatepicker(t),
                  i.dpDiv.css("display", "block"));
              },
              _dialogDatepicker: function (t, i, n, s, a) {
                var r,
                  l,
                  c,
                  d,
                  u,
                  h = this._dialogInst;
                return (
                  h ||
                    ((this.uuid += 1),
                    (r = "dp" + this.uuid),
                    (this._dialogInput = e(
                      "<input type='text' id='" +
                        r +
                        "' style='position: absolute; top: -100px; width: 0px;'/>"
                    )),
                    this._dialogInput.on("keydown", this._doKeyDown),
                    e("body").append(this._dialogInput),
                    ((h = this._dialogInst =
                      this._newInst(this._dialogInput, !1)).settings = {}),
                    e.data(this._dialogInput[0], "datepicker", h)),
                  o(h.settings, s || {}),
                  (i =
                    i && i.constructor === Date ? this._formatDate(h, i) : i),
                  this._dialogInput.val(i),
                  (this._pos = a ? (a.length ? a : [a.pageX, a.pageY]) : null),
                  this._pos ||
                    ((l = document.documentElement.clientWidth),
                    (c = document.documentElement.clientHeight),
                    (d =
                      document.documentElement.scrollLeft ||
                      document.body.scrollLeft),
                    (u =
                      document.documentElement.scrollTop ||
                      document.body.scrollTop),
                    (this._pos = [l / 2 - 100 + d, c / 2 - 150 + u])),
                  this._dialogInput
                    .css("left", this._pos[0] + 20 + "px")
                    .css("top", this._pos[1] + "px"),
                  (h.settings.onSelect = n),
                  (this._inDialog = !0),
                  this.dpDiv.addClass(this._dialogClass),
                  this._showDatepicker(this._dialogInput[0]),
                  e.blockUI && e.blockUI(this.dpDiv),
                  e.data(this._dialogInput[0], "datepicker", h),
                  this
                );
              },
              _destroyDatepicker: function (i) {
                var n,
                  s = e(i),
                  a = e.data(i, "datepicker");
                s.hasClass(this.markerClassName) &&
                  ((n = i.nodeName.toLowerCase()),
                  e.removeData(i, "datepicker"),
                  "input" === n
                    ? (a.append.remove(),
                      a.trigger.remove(),
                      s
                        .removeClass(this.markerClassName)
                        .off("focus", this._showDatepicker)
                        .off("keydown", this._doKeyDown)
                        .off("keypress", this._doKeyPress)
                        .off("keyup", this._doKeyUp))
                    : ("div" !== n && "span" !== n) ||
                      s.removeClass(this.markerClassName).empty(),
                  t === a && (t = null));
              },
              _enableDatepicker: function (t) {
                var i,
                  n,
                  s = e(t),
                  a = e.data(t, "datepicker");
                s.hasClass(this.markerClassName) &&
                  ("input" === (i = t.nodeName.toLowerCase())
                    ? ((t.disabled = !1),
                      a.trigger
                        .filter("button")
                        .each(function () {
                          this.disabled = !1;
                        })
                        .end()
                        .filter("img")
                        .css({
                          opacity: "1.0",
                          cursor: "",
                        }))
                    : ("div" !== i && "span" !== i) ||
                      ((n = s.children("." + this._inlineClass))
                        .children()
                        .removeClass("ui-state-disabled"),
                      n
                        .find(
                          "select.ui-datepicker-month, select.ui-datepicker-year"
                        )
                        .prop("disabled", !1)),
                  (this._disabledInputs = e.map(
                    this._disabledInputs,
                    function (e) {
                      return e === t ? null : e;
                    }
                  )));
              },
              _disableDatepicker: function (t) {
                var i,
                  n,
                  s = e(t),
                  a = e.data(t, "datepicker");
                s.hasClass(this.markerClassName) &&
                  ("input" === (i = t.nodeName.toLowerCase())
                    ? ((t.disabled = !0),
                      a.trigger
                        .filter("button")
                        .each(function () {
                          this.disabled = !0;
                        })
                        .end()
                        .filter("img")
                        .css({
                          opacity: "0.5",
                          cursor: "default",
                        }))
                    : ("div" !== i && "span" !== i) ||
                      ((n = s.children("." + this._inlineClass))
                        .children()
                        .addClass("ui-state-disabled"),
                      n
                        .find(
                          "select.ui-datepicker-month, select.ui-datepicker-year"
                        )
                        .prop("disabled", !0)),
                  (this._disabledInputs = e.map(
                    this._disabledInputs,
                    function (e) {
                      return e === t ? null : e;
                    }
                  )),
                  (this._disabledInputs[this._disabledInputs.length] = t));
              },
              _isDisabledDatepicker: function (e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                  if (this._disabledInputs[t] === e) return !0;
                return !1;
              },
              _getInst: function (t) {
                try {
                  return e.data(t, "datepicker");
                } catch (e) {
                  throw "Missing instance data for this datepicker";
                }
              },
              _optionDatepicker: function (t, i, n) {
                var s,
                  a,
                  r,
                  l,
                  c = this._getInst(t);
                if (2 === arguments.length && "string" == typeof i)
                  return "defaults" === i
                    ? e.extend({}, e.datepicker._defaults)
                    : c
                    ? "all" === i
                      ? e.extend({}, c.settings)
                      : this._get(c, i)
                    : null;
                (s = i || {}),
                  "string" == typeof i && ((s = {})[i] = n),
                  c &&
                    (this._curInst === c && this._hideDatepicker(),
                    (a = this._getDateDatepicker(t, !0)),
                    (r = this._getMinMaxDate(c, "min")),
                    (l = this._getMinMaxDate(c, "max")),
                    o(c.settings, s),
                    null !== r &&
                      void 0 !== s.dateFormat &&
                      void 0 === s.minDate &&
                      (c.settings.minDate = this._formatDate(c, r)),
                    null !== l &&
                      void 0 !== s.dateFormat &&
                      void 0 === s.maxDate &&
                      (c.settings.maxDate = this._formatDate(c, l)),
                    "disabled" in s &&
                      (s.disabled
                        ? this._disableDatepicker(t)
                        : this._enableDatepicker(t)),
                    this._attachments(e(t), c),
                    this._autoSize(c),
                    this._setDate(c, a),
                    this._updateAlternate(c),
                    this._updateDatepicker(c));
              },
              _changeDatepicker: function (e, t, i) {
                this._optionDatepicker(e, t, i);
              },
              _refreshDatepicker: function (e) {
                var t = this._getInst(e);
                t && this._updateDatepicker(t);
              },
              _setDateDatepicker: function (e, t) {
                var i = this._getInst(e);
                i &&
                  (this._setDate(i, t),
                  this._updateDatepicker(i),
                  this._updateAlternate(i));
              },
              _getDateDatepicker: function (e, t) {
                var i = this._getInst(e);
                return (
                  i && !i.inline && this._setDateFromField(i, t),
                  i ? this._getDate(i) : null
                );
              },
              _doKeyDown: function (t) {
                var i,
                  n,
                  s,
                  a = e.datepicker._getInst(t.target),
                  o = !0,
                  r = a.dpDiv.is(".ui-datepicker-rtl");
                if (((a._keyEvent = !0), e.datepicker._datepickerShowing))
                  switch (t.keyCode) {
                    case 9:
                      e.datepicker._hideDatepicker(), (o = !1);
                      break;
                    case 13:
                      return (
                        (s = e(
                          "td." +
                            e.datepicker._dayOverClass +
                            ":not(." +
                            e.datepicker._currentClass +
                            ")",
                          a.dpDiv
                        ))[0] &&
                          e.datepicker._selectDay(
                            t.target,
                            a.selectedMonth,
                            a.selectedYear,
                            s[0]
                          ),
                        (i = e.datepicker._get(a, "onSelect"))
                          ? ((n = e.datepicker._formatDate(a)),
                            i.apply(a.input ? a.input[0] : null, [n, a]))
                          : e.datepicker._hideDatepicker(),
                        !1
                      );
                    case 27:
                      e.datepicker._hideDatepicker();
                      break;
                    case 33:
                      e.datepicker._adjustDate(
                        t.target,
                        t.ctrlKey
                          ? -e.datepicker._get(a, "stepBigMonths")
                          : -e.datepicker._get(a, "stepMonths"),
                        "M"
                      );
                      break;
                    case 34:
                      e.datepicker._adjustDate(
                        t.target,
                        t.ctrlKey
                          ? +e.datepicker._get(a, "stepBigMonths")
                          : +e.datepicker._get(a, "stepMonths"),
                        "M"
                      );
                      break;
                    case 35:
                      (t.ctrlKey || t.metaKey) &&
                        e.datepicker._clearDate(t.target),
                        (o = t.ctrlKey || t.metaKey);
                      break;
                    case 36:
                      (t.ctrlKey || t.metaKey) &&
                        e.datepicker._gotoToday(t.target),
                        (o = t.ctrlKey || t.metaKey);
                      break;
                    case 37:
                      (t.ctrlKey || t.metaKey) &&
                        e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"),
                        (o = t.ctrlKey || t.metaKey),
                        t.originalEvent.altKey &&
                          e.datepicker._adjustDate(
                            t.target,
                            t.ctrlKey
                              ? -e.datepicker._get(a, "stepBigMonths")
                              : -e.datepicker._get(a, "stepMonths"),
                            "M"
                          );
                      break;
                    case 38:
                      (t.ctrlKey || t.metaKey) &&
                        e.datepicker._adjustDate(t.target, -7, "D"),
                        (o = t.ctrlKey || t.metaKey);
                      break;
                    case 39:
                      (t.ctrlKey || t.metaKey) &&
                        e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"),
                        (o = t.ctrlKey || t.metaKey),
                        t.originalEvent.altKey &&
                          e.datepicker._adjustDate(
                            t.target,
                            t.ctrlKey
                              ? +e.datepicker._get(a, "stepBigMonths")
                              : +e.datepicker._get(a, "stepMonths"),
                            "M"
                          );
                      break;
                    case 40:
                      (t.ctrlKey || t.metaKey) &&
                        e.datepicker._adjustDate(t.target, 7, "D"),
                        (o = t.ctrlKey || t.metaKey);
                      break;
                    default:
                      o = !1;
                  }
                else
                  36 === t.keyCode && t.ctrlKey
                    ? e.datepicker._showDatepicker(this)
                    : (o = !1);
                o && (t.preventDefault(), t.stopPropagation());
              },
              _doKeyPress: function (t) {
                var i,
                  n,
                  s = e.datepicker._getInst(t.target);
                if (e.datepicker._get(s, "constrainInput"))
                  return (
                    (i = e.datepicker._possibleChars(
                      e.datepicker._get(s, "dateFormat")
                    )),
                    (n = String.fromCharCode(
                      null == t.charCode ? t.keyCode : t.charCode
                    )),
                    t.ctrlKey || t.metaKey || n < " " || !i || i.indexOf(n) > -1
                  );
              },
              _doKeyUp: function (t) {
                var i = e.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal)
                  try {
                    e.datepicker.parseDate(
                      e.datepicker._get(i, "dateFormat"),
                      i.input ? i.input.val() : null,
                      e.datepicker._getFormatConfig(i)
                    ) &&
                      (e.datepicker._setDateFromField(i),
                      e.datepicker._updateAlternate(i),
                      e.datepicker._updateDatepicker(i));
                  } catch (e) {}
                return !0;
              },
              _showDatepicker: function (t) {
                var n, s, a, r, l, c, d;
                "input" !== (t = t.target || t).nodeName.toLowerCase() &&
                  (t = e("input", t.parentNode)[0]),
                  e.datepicker._isDisabledDatepicker(t) ||
                    e.datepicker._lastInput === t ||
                    ((n = e.datepicker._getInst(t)),
                    e.datepicker._curInst &&
                      e.datepicker._curInst !== n &&
                      (e.datepicker._curInst.dpDiv.stop(!0, !0),
                      n &&
                        e.datepicker._datepickerShowing &&
                        e.datepicker._hideDatepicker(
                          e.datepicker._curInst.input[0]
                        )),
                    !1 !==
                      (a = (s = e.datepicker._get(n, "beforeShow"))
                        ? s.apply(t, [t, n])
                        : {}) &&
                      (o(n.settings, a),
                      (n.lastVal = null),
                      (e.datepicker._lastInput = t),
                      e.datepicker._setDateFromField(n),
                      e.datepicker._inDialog && (t.value = ""),
                      e.datepicker._pos ||
                        ((e.datepicker._pos = e.datepicker._findPos(t)),
                        (e.datepicker._pos[1] += t.offsetHeight)),
                      (r = !1),
                      e(t)
                        .parents()
                        .each(function () {
                          return !(r |= "fixed" === e(this).css("position"));
                        }),
                      (l = {
                        left: e.datepicker._pos[0],
                        top: e.datepicker._pos[1],
                      }),
                      (e.datepicker._pos = null),
                      n.dpDiv.empty(),
                      n.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px",
                      }),
                      e.datepicker._updateDatepicker(n),
                      (l = e.datepicker._checkOffset(n, l, r)),
                      n.dpDiv.css({
                        position:
                          e.datepicker._inDialog && e.blockUI
                            ? "static"
                            : r
                            ? "fixed"
                            : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px",
                      }),
                      n.inline ||
                        ((c = e.datepicker._get(n, "showAnim")),
                        (d = e.datepicker._get(n, "duration")),
                        n.dpDiv.css("z-index", i(e(t)) + 1),
                        (e.datepicker._datepickerShowing = !0),
                        e.effects && e.effects.effect[c]
                          ? n.dpDiv.show(
                              c,
                              e.datepicker._get(n, "showOptions"),
                              d
                            )
                          : n.dpDiv[c || "show"](c ? d : null),
                        e.datepicker._shouldFocusInput(n) &&
                          n.input.trigger("focus"),
                        (e.datepicker._curInst = n))));
              },
              _updateDatepicker: function (i) {
                (this.maxRows = 4),
                  (t = i),
                  i.dpDiv.empty().append(this._generateHTML(i)),
                  this._attachHandlers(i);
                var n,
                  s = this._getNumberOfMonths(i),
                  o = s[1],
                  r = 17,
                  l = i.dpDiv.find("." + this._dayOverClass + " a");
                l.length > 0 && a.apply(l.get(0)),
                  i.dpDiv
                    .removeClass(
                      "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
                    )
                    .width(""),
                  o > 1 &&
                    i.dpDiv
                      .addClass("ui-datepicker-multi-" + o)
                      .css("width", r * o + "em"),
                  i.dpDiv[
                    (1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"
                  ]("ui-datepicker-multi"),
                  i.dpDiv[(this._get(i, "isRTL") ? "add" : "remove") + "Class"](
                    "ui-datepicker-rtl"
                  ),
                  i === e.datepicker._curInst &&
                    e.datepicker._datepickerShowing &&
                    e.datepicker._shouldFocusInput(i) &&
                    i.input.trigger("focus"),
                  i.yearshtml &&
                    ((n = i.yearshtml),
                    setTimeout(function () {
                      n === i.yearshtml &&
                        i.yearshtml &&
                        i.dpDiv
                          .find("select.ui-datepicker-year:first")
                          .replaceWith(i.yearshtml),
                        (n = i.yearshtml = null);
                    }, 0));
              },
              _shouldFocusInput: function (e) {
                return (
                  e.input &&
                  e.input.is(":visible") &&
                  !e.input.is(":disabled") &&
                  !e.input.is(":focus")
                );
              },
              _checkOffset: function (t, i, n) {
                var s = t.dpDiv.outerWidth(),
                  a = t.dpDiv.outerHeight(),
                  o = t.input ? t.input.outerWidth() : 0,
                  r = t.input ? t.input.outerHeight() : 0,
                  l =
                    document.documentElement.clientWidth +
                    (n ? 0 : e(document).scrollLeft()),
                  c =
                    document.documentElement.clientHeight +
                    (n ? 0 : e(document).scrollTop());
                return (
                  (i.left -= this._get(t, "isRTL") ? s - o : 0),
                  (i.left -=
                    n && i.left === t.input.offset().left
                      ? e(document).scrollLeft()
                      : 0),
                  (i.top -=
                    n && i.top === t.input.offset().top + r
                      ? e(document).scrollTop()
                      : 0),
                  (i.left -= Math.min(
                    i.left,
                    i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0
                  )),
                  (i.top -= Math.min(
                    i.top,
                    i.top + a > c && c > a ? Math.abs(a + r) : 0
                  )),
                  i
                );
              },
              _findPos: function (t) {
                for (
                  var i, n = this._getInst(t), s = this._get(n, "isRTL");
                  t &&
                  ("hidden" === t.type ||
                    1 !== t.nodeType ||
                    e.expr.filters.hidden(t));

                )
                  t = t[s ? "previousSibling" : "nextSibling"];
                return [(i = e(t).offset()).left, i.top];
              },
              _hideDatepicker: function (t) {
                var i,
                  n,
                  s,
                  a,
                  o = this._curInst;
                !o ||
                  (t && o !== e.data(t, "datepicker")) ||
                  (this._datepickerShowing &&
                    ((i = this._get(o, "showAnim")),
                    (n = this._get(o, "duration")),
                    (s = function () {
                      e.datepicker._tidyDialog(o);
                    }),
                    e.effects && (e.effects.effect[i] || e.effects[i])
                      ? o.dpDiv.hide(
                          i,
                          e.datepicker._get(o, "showOptions"),
                          n,
                          s
                        )
                      : o.dpDiv[
                          "slideDown" === i
                            ? "slideUp"
                            : "fadeIn" === i
                            ? "fadeOut"
                            : "hide"
                        ](i ? n : null, s),
                    i || s(),
                    (this._datepickerShowing = !1),
                    (a = this._get(o, "onClose")) &&
                      a.apply(o.input ? o.input[0] : null, [
                        o.input ? o.input.val() : "",
                        o,
                      ]),
                    (this._lastInput = null),
                    this._inDialog &&
                      (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px",
                      }),
                      e.blockUI &&
                        (e.unblockUI(), e("body").append(this.dpDiv))),
                    (this._inDialog = !1)));
              },
              _tidyDialog: function (e) {
                e.dpDiv
                  .removeClass(this._dialogClass)
                  .off(".ui-datepicker-calendar");
              },
              _checkExternalClick: function (t) {
                if (e.datepicker._curInst) {
                  var i = e(t.target),
                    n = e.datepicker._getInst(i[0]);
                  ((i[0].id === e.datepicker._mainDivId ||
                    0 !== i.parents("#" + e.datepicker._mainDivId).length ||
                    i.hasClass(e.datepicker.markerClassName) ||
                    i.closest("." + e.datepicker._triggerClass).length ||
                    !e.datepicker._datepickerShowing ||
                    (e.datepicker._inDialog && e.blockUI)) &&
                    (!i.hasClass(e.datepicker.markerClassName) ||
                      e.datepicker._curInst === n)) ||
                    e.datepicker._hideDatepicker();
                }
              },
              _adjustDate: function (t, i, n) {
                var s = e(t),
                  a = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) ||
                  (this._adjustInstDate(
                    a,
                    i + ("M" === n ? this._get(a, "showCurrentAtPos") : 0),
                    n
                  ),
                  this._updateDatepicker(a));
              },
              _gotoToday: function (t) {
                var i,
                  n = e(t),
                  s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay
                  ? ((s.selectedDay = s.currentDay),
                    (s.drawMonth = s.selectedMonth = s.currentMonth),
                    (s.drawYear = s.selectedYear = s.currentYear))
                  : ((i = new Date()),
                    (s.selectedDay = i.getDate()),
                    (s.drawMonth = s.selectedMonth = i.getMonth()),
                    (s.drawYear = s.selectedYear = i.getFullYear())),
                  this._notifyChange(s),
                  this._adjustDate(n);
              },
              _selectMonthYear: function (t, i, n) {
                var s = e(t),
                  a = this._getInst(s[0]);
                (a["selected" + ("M" === n ? "Month" : "Year")] = a[
                  "draw" + ("M" === n ? "Month" : "Year")
                ] =
                  parseInt(i.options[i.selectedIndex].value, 10)),
                  this._notifyChange(a),
                  this._adjustDate(s);
              },
              _selectDay: function (t, i, n, s) {
                var a,
                  o = e(t);
                e(s).hasClass(this._unselectableClass) ||
                  this._isDisabledDatepicker(o[0]) ||
                  (((a = this._getInst(o[0])).selectedDay = a.currentDay =
                    e("a", s).html()),
                  (a.selectedMonth = a.currentMonth = i),
                  (a.selectedYear = a.currentYear = n),
                  this._selectDate(
                    t,
                    this._formatDate(
                      a,
                      a.currentDay,
                      a.currentMonth,
                      a.currentYear
                    )
                  ));
              },
              _clearDate: function (t) {
                var i = e(t);
                this._selectDate(i, "");
              },
              _selectDate: function (t, i) {
                var n,
                  s = e(t),
                  a = this._getInst(s[0]);
                (i = null != i ? i : this._formatDate(a)),
                  a.input && a.input.val(i),
                  this._updateAlternate(a),
                  (n = this._get(a, "onSelect"))
                    ? n.apply(a.input ? a.input[0] : null, [i, a])
                    : a.input && a.input.trigger("change"),
                  a.inline
                    ? this._updateDatepicker(a)
                    : (this._hideDatepicker(),
                      (this._lastInput = a.input[0]),
                      "object" != typeof a.input[0] && a.input.trigger("focus"),
                      (this._lastInput = null));
              },
              _updateAlternate: function (t) {
                var i,
                  n,
                  s,
                  a = this._get(t, "altField");
                a &&
                  ((i =
                    this._get(t, "altFormat") || this._get(t, "dateFormat")),
                  (n = this._getDate(t)),
                  (s = this.formatDate(i, n, this._getFormatConfig(t))),
                  e(a).val(s));
              },
              noWeekends: function (e) {
                var t = e.getDay();
                return [t > 0 && t < 6, ""];
              },
              iso8601Week: function (e) {
                var t,
                  i = new Date(e.getTime());
                return (
                  i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
                  (t = i.getTime()),
                  i.setMonth(0),
                  i.setDate(1),
                  Math.floor(Math.round((t - i) / 864e5) / 7) + 1
                );
              },
              parseDate: function (t, i, n) {
                if (null == t || null == i) throw "Invalid arguments";
                if ("" === (i = "object" == typeof i ? i.toString() : i + ""))
                  return null;
                var s,
                  a,
                  o,
                  r,
                  l = 0,
                  c =
                    (n ? n.shortYearCutoff : null) ||
                    this._defaults.shortYearCutoff,
                  d =
                    "string" != typeof c
                      ? c
                      : (new Date().getFullYear() % 100) + parseInt(c, 10),
                  u =
                    (n ? n.dayNamesShort : null) ||
                    this._defaults.dayNamesShort,
                  h = (n ? n.dayNames : null) || this._defaults.dayNames,
                  p =
                    (n ? n.monthNamesShort : null) ||
                    this._defaults.monthNamesShort,
                  f = (n ? n.monthNames : null) || this._defaults.monthNames,
                  m = -1,
                  g = -1,
                  v = -1,
                  _ = -1,
                  y = !1,
                  b = function (e) {
                    var i = s + 1 < t.length && t.charAt(s + 1) === e;
                    return i && s++, i;
                  },
                  w = function (e) {
                    var t = b(e),
                      n =
                        "@" === e
                          ? 14
                          : "!" === e
                          ? 20
                          : "y" === e && t
                          ? 4
                          : "o" === e
                          ? 3
                          : 2,
                      s = new RegExp(
                        "^\\d{" + ("y" === e ? n : 1) + "," + n + "}"
                      ),
                      a = i.substring(l).match(s);
                    if (!a) throw "Missing number at position " + l;
                    return (l += a[0].length), parseInt(a[0], 10);
                  },
                  S = function (t, n, s) {
                    var a = -1,
                      o = e
                        .map(b(t) ? s : n, function (e, t) {
                          return [[t, e]];
                        })
                        .sort(function (e, t) {
                          return -(e[1].length - t[1].length);
                        });
                    if (
                      (e.each(o, function (e, t) {
                        var n = t[1];
                        if (
                          i.substr(l, n.length).toLowerCase() ===
                          n.toLowerCase()
                        )
                          return (a = t[0]), (l += n.length), !1;
                      }),
                      -1 !== a)
                    )
                      return a + 1;
                    throw "Unknown name at position " + l;
                  },
                  k = function () {
                    if (i.charAt(l) !== t.charAt(s))
                      throw "Unexpected literal at position " + l;
                    l++;
                  };
                for (s = 0; s < t.length; s++)
                  if (y) "'" !== t.charAt(s) || b("'") ? k() : (y = !1);
                  else
                    switch (t.charAt(s)) {
                      case "d":
                        v = w("d");
                        break;
                      case "D":
                        S("D", u, h);
                        break;
                      case "o":
                        _ = w("o");
                        break;
                      case "m":
                        g = w("m");
                        break;
                      case "M":
                        g = S("M", p, f);
                        break;
                      case "y":
                        m = w("y");
                        break;
                      case "@":
                        (m = (r = new Date(w("@"))).getFullYear()),
                          (g = r.getMonth() + 1),
                          (v = r.getDate());
                        break;
                      case "!":
                        (m = (r = new Date(
                          (w("!") - this._ticksTo1970) / 1e4
                        )).getFullYear()),
                          (g = r.getMonth() + 1),
                          (v = r.getDate());
                        break;
                      case "'":
                        b("'") ? k() : (y = !0);
                        break;
                      default:
                        k();
                    }
                if (l < i.length && ((o = i.substr(l)), !/^\s+/.test(o)))
                  throw "Extra/unparsed characters found in date: " + o;
                if (
                  (-1 === m
                    ? (m = new Date().getFullYear())
                    : m < 100 &&
                      (m +=
                        new Date().getFullYear() -
                        (new Date().getFullYear() % 100) +
                        (m <= d ? 0 : -100)),
                  _ > -1)
                )
                  for (
                    g = 1, v = _;
                    !(v <= (a = this._getDaysInMonth(m, g - 1)));

                  )
                    g++, (v -= a);
                if (
                  (r = this._daylightSavingAdjust(
                    new Date(m, g - 1, v)
                  )).getFullYear() !== m ||
                  r.getMonth() + 1 !== g ||
                  r.getDate() !== v
                )
                  throw "Invalid date";
                return r;
              },
              ATOM: "yy-mm-dd",
              COOKIE: "D, dd M yy",
              ISO_8601: "yy-mm-dd",
              RFC_822: "D, d M y",
              RFC_850: "DD, dd-M-y",
              RFC_1036: "D, d M y",
              RFC_1123: "D, d M yy",
              RFC_2822: "D, d M yy",
              RSS: "D, d M y",
              TICKS: "!",
              TIMESTAMP: "@",
              W3C: "yy-mm-dd",
              _ticksTo1970:
                24 *
                (718685 +
                  Math.floor(492.5) -
                  Math.floor(19.7) +
                  Math.floor(4.925)) *
                60 *
                60 *
                1e7,
              formatDate: function (e, t, i) {
                if (!t) return "";
                var n,
                  s =
                    (i ? i.dayNamesShort : null) ||
                    this._defaults.dayNamesShort,
                  a = (i ? i.dayNames : null) || this._defaults.dayNames,
                  o =
                    (i ? i.monthNamesShort : null) ||
                    this._defaults.monthNamesShort,
                  r = (i ? i.monthNames : null) || this._defaults.monthNames,
                  l = function (t) {
                    var i = n + 1 < e.length && e.charAt(n + 1) === t;
                    return i && n++, i;
                  },
                  c = function (e, t, i) {
                    var n = "" + t;
                    if (l(e)) for (; n.length < i; ) n = "0" + n;
                    return n;
                  },
                  d = function (e, t, i, n) {
                    return l(e) ? n[t] : i[t];
                  },
                  u = "",
                  h = !1;
                if (t)
                  for (n = 0; n < e.length; n++)
                    if (h)
                      "'" !== e.charAt(n) || l("'")
                        ? (u += e.charAt(n))
                        : (h = !1);
                    else
                      switch (e.charAt(n)) {
                        case "d":
                          u += c("d", t.getDate(), 2);
                          break;
                        case "D":
                          u += d("D", t.getDay(), s, a);
                          break;
                        case "o":
                          u += c(
                            "o",
                            Math.round(
                              (new Date(
                                t.getFullYear(),
                                t.getMonth(),
                                t.getDate()
                              ).getTime() -
                                new Date(t.getFullYear(), 0, 0).getTime()) /
                                864e5
                            ),
                            3
                          );
                          break;
                        case "m":
                          u += c("m", t.getMonth() + 1, 2);
                          break;
                        case "M":
                          u += d("M", t.getMonth(), o, r);
                          break;
                        case "y":
                          u += l("y")
                            ? t.getFullYear()
                            : (t.getFullYear() % 100 < 10 ? "0" : "") +
                              (t.getFullYear() % 100);
                          break;
                        case "@":
                          u += t.getTime();
                          break;
                        case "!":
                          u += 1e4 * t.getTime() + this._ticksTo1970;
                          break;
                        case "'":
                          l("'") ? (u += "'") : (h = !0);
                          break;
                        default:
                          u += e.charAt(n);
                      }
                return u;
              },
              _possibleChars: function (e) {
                var t,
                  i = "",
                  n = !1,
                  s = function (i) {
                    var n = t + 1 < e.length && e.charAt(t + 1) === i;
                    return n && t++, n;
                  };
                for (t = 0; t < e.length; t++)
                  if (n)
                    "'" !== e.charAt(t) || s("'")
                      ? (i += e.charAt(t))
                      : (n = !1);
                  else
                    switch (e.charAt(t)) {
                      case "d":
                      case "m":
                      case "y":
                      case "@":
                        i += "0123456789";
                        break;
                      case "D":
                      case "M":
                        return null;
                      case "'":
                        s("'") ? (i += "'") : (n = !0);
                        break;
                      default:
                        i += e.charAt(t);
                    }
                return i;
              },
              _get: function (e, t) {
                return void 0 !== e.settings[t]
                  ? e.settings[t]
                  : this._defaults[t];
              },
              _setDateFromField: function (e, t) {
                if (e.input.val() !== e.lastVal) {
                  var i = this._get(e, "dateFormat"),
                    n = (e.lastVal = e.input ? e.input.val() : null),
                    s = this._getDefaultDate(e),
                    a = s,
                    o = this._getFormatConfig(e);
                  try {
                    a = this.parseDate(i, n, o) || s;
                  } catch (e) {
                    n = t ? "" : n;
                  }
                  (e.selectedDay = a.getDate()),
                    (e.drawMonth = e.selectedMonth = a.getMonth()),
                    (e.drawYear = e.selectedYear = a.getFullYear()),
                    (e.currentDay = n ? a.getDate() : 0),
                    (e.currentMonth = n ? a.getMonth() : 0),
                    (e.currentYear = n ? a.getFullYear() : 0),
                    this._adjustInstDate(e);
                }
              },
              _getDefaultDate: function (e) {
                return this._restrictMinMax(
                  e,
                  this._determineDate(
                    e,
                    this._get(e, "defaultDate"),
                    new Date()
                  )
                );
              },
              _determineDate: function (t, i, n) {
                var s = function (e) {
                    var t = new Date();
                    return t.setDate(t.getDate() + e), t;
                  },
                  a = function (i) {
                    try {
                      return e.datepicker.parseDate(
                        e.datepicker._get(t, "dateFormat"),
                        i,
                        e.datepicker._getFormatConfig(t)
                      );
                    } catch (e) {}
                    for (
                      var n =
                          (i.toLowerCase().match(/^c/)
                            ? e.datepicker._getDate(t)
                            : null) || new Date(),
                        s = n.getFullYear(),
                        a = n.getMonth(),
                        o = n.getDate(),
                        r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        l = r.exec(i);
                      l;

                    ) {
                      switch (l[2] || "d") {
                        case "d":
                        case "D":
                          o += parseInt(l[1], 10);
                          break;
                        case "w":
                        case "W":
                          o += 7 * parseInt(l[1], 10);
                          break;
                        case "m":
                        case "M":
                          (a += parseInt(l[1], 10)),
                            (o = Math.min(
                              o,
                              e.datepicker._getDaysInMonth(s, a)
                            ));
                          break;
                        case "y":
                        case "Y":
                          (s += parseInt(l[1], 10)),
                            (o = Math.min(
                              o,
                              e.datepicker._getDaysInMonth(s, a)
                            ));
                      }
                      l = r.exec(i);
                    }
                    return new Date(s, a, o);
                  },
                  o =
                    null == i || "" === i
                      ? n
                      : "string" == typeof i
                      ? a(i)
                      : "number" == typeof i
                      ? isNaN(i)
                        ? n
                        : s(i)
                      : new Date(i.getTime());
                return (
                  (o = o && "Invalid Date" === o.toString() ? n : o) &&
                    (o.setHours(0),
                    o.setMinutes(0),
                    o.setSeconds(0),
                    o.setMilliseconds(0)),
                  this._daylightSavingAdjust(o)
                );
              },
              _daylightSavingAdjust: function (e) {
                return e
                  ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)
                  : null;
              },
              _setDate: function (e, t, i) {
                var n = !t,
                  s = e.selectedMonth,
                  a = e.selectedYear,
                  o = this._restrictMinMax(
                    e,
                    this._determineDate(e, t, new Date())
                  );
                (e.selectedDay = e.currentDay = o.getDate()),
                  (e.drawMonth =
                    e.selectedMonth =
                    e.currentMonth =
                      o.getMonth()),
                  (e.drawYear =
                    e.selectedYear =
                    e.currentYear =
                      o.getFullYear()),
                  (s === e.selectedMonth && a === e.selectedYear) ||
                    i ||
                    this._notifyChange(e),
                  this._adjustInstDate(e),
                  e.input && e.input.val(n ? "" : this._formatDate(e));
              },
              _getDate: function (e) {
                return !e.currentYear || (e.input && "" === e.input.val())
                  ? null
                  : this._daylightSavingAdjust(
                      new Date(e.currentYear, e.currentMonth, e.currentDay)
                    );
              },
              _attachHandlers: function (t) {
                var i = this._get(t, "stepMonths"),
                  n = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function () {
                  var t = {
                    prev: function () {
                      e.datepicker._adjustDate(n, -i, "M");
                    },
                    next: function () {
                      e.datepicker._adjustDate(n, +i, "M");
                    },
                    hide: function () {
                      e.datepicker._hideDatepicker();
                    },
                    today: function () {
                      e.datepicker._gotoToday(n);
                    },
                    selectDay: function () {
                      return (
                        e.datepicker._selectDay(
                          n,
                          +this.getAttribute("data-month"),
                          +this.getAttribute("data-year"),
                          this
                        ),
                        !1
                      );
                    },
                    selectMonth: function () {
                      return e.datepicker._selectMonthYear(n, this, "M"), !1;
                    },
                    selectYear: function () {
                      return e.datepicker._selectMonthYear(n, this, "Y"), !1;
                    },
                  };
                  e(this).on(
                    this.getAttribute("data-event"),
                    t[this.getAttribute("data-handler")]
                  );
                });
              },
              _generateHTML: function (e) {
                var t,
                  i,
                  n,
                  s,
                  a,
                  o,
                  r,
                  l,
                  c,
                  d,
                  u,
                  h,
                  p,
                  f,
                  m,
                  g,
                  v,
                  _,
                  y,
                  b,
                  w,
                  S,
                  k,
                  C,
                  x,
                  T,
                  D,
                  E,
                  I,
                  A,
                  O,
                  M,
                  N,
                  L,
                  P,
                  R,
                  H,
                  $,
                  W,
                  F = new Date(),
                  j = this._daylightSavingAdjust(
                    new Date(F.getFullYear(), F.getMonth(), F.getDate())
                  ),
                  B = this._get(e, "isRTL"),
                  z = this._get(e, "showButtonPanel"),
                  q = this._get(e, "hideIfNoPrevNext"),
                  U = this._get(e, "navigationAsDateFormat"),
                  V = this._getNumberOfMonths(e),
                  Y = this._get(e, "showCurrentAtPos"),
                  K = this._get(e, "stepMonths"),
                  G = 1 !== V[0] || 1 !== V[1],
                  X = this._daylightSavingAdjust(
                    e.currentDay
                      ? new Date(e.currentYear, e.currentMonth, e.currentDay)
                      : new Date(9999, 9, 9)
                  ),
                  Q = this._getMinMaxDate(e, "min"),
                  J = this._getMinMaxDate(e, "max"),
                  Z = e.drawMonth - Y,
                  ee = e.drawYear;
                if ((Z < 0 && ((Z += 12), ee--), J))
                  for (
                    t = this._daylightSavingAdjust(
                      new Date(
                        J.getFullYear(),
                        J.getMonth() - V[0] * V[1] + 1,
                        J.getDate()
                      )
                    ),
                      t = Q && t < Q ? Q : t;
                    this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;

                  )
                    --Z < 0 && ((Z = 11), ee--);
                for (
                  e.drawMonth = Z,
                    e.drawYear = ee,
                    i = this._get(e, "prevText"),
                    i = U
                      ? this.formatDate(
                          i,
                          this._daylightSavingAdjust(new Date(ee, Z - K, 1)),
                          this._getFormatConfig(e)
                        )
                      : i,
                    n = this._canAdjustMonth(e, -1, ee, Z)
                      ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                        i +
                        "'><span class='ui-icon ui-icon-circle-triangle-" +
                        (B ? "e" : "w") +
                        "'>" +
                        i +
                        "</span></a>"
                      : q
                      ? ""
                      : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                        i +
                        "'><span class='ui-icon ui-icon-circle-triangle-" +
                        (B ? "e" : "w") +
                        "'>" +
                        i +
                        "</span></a>",
                    s = this._get(e, "nextText"),
                    s = U
                      ? this.formatDate(
                          s,
                          this._daylightSavingAdjust(new Date(ee, Z + K, 1)),
                          this._getFormatConfig(e)
                        )
                      : s,
                    a = this._canAdjustMonth(e, 1, ee, Z)
                      ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                        s +
                        "'><span class='ui-icon ui-icon-circle-triangle-" +
                        (B ? "w" : "e") +
                        "'>" +
                        s +
                        "</span></a>"
                      : q
                      ? ""
                      : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                        s +
                        "'><span class='ui-icon ui-icon-circle-triangle-" +
                        (B ? "w" : "e") +
                        "'>" +
                        s +
                        "</span></a>",
                    o = this._get(e, "currentText"),
                    r = this._get(e, "gotoCurrent") && e.currentDay ? X : j,
                    o = U ? this.formatDate(o, r, this._getFormatConfig(e)) : o,
                    l = e.inline
                      ? ""
                      : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                        this._get(e, "closeText") +
                        "</button>",
                    c = z
                      ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                        (B ? l : "") +
                        (this._isInRange(e, r)
                          ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                            o +
                            "</button>"
                          : "") +
                        (B ? "" : l) +
                        "</div>"
                      : "",
                    d = parseInt(this._get(e, "firstDay"), 10),
                    d = isNaN(d) ? 0 : d,
                    u = this._get(e, "showWeek"),
                    h = this._get(e, "dayNames"),
                    p = this._get(e, "dayNamesMin"),
                    f = this._get(e, "monthNames"),
                    m = this._get(e, "monthNamesShort"),
                    g = this._get(e, "beforeShowDay"),
                    v = this._get(e, "showOtherMonths"),
                    _ = this._get(e, "selectOtherMonths"),
                    y = this._getDefaultDate(e),
                    b = "",
                    S = 0;
                  S < V[0];
                  S++
                ) {
                  for (k = "", this.maxRows = 4, C = 0; C < V[1]; C++) {
                    if (
                      ((x = this._daylightSavingAdjust(
                        new Date(ee, Z, e.selectedDay)
                      )),
                      (T = " ui-corner-all"),
                      (D = ""),
                      G)
                    ) {
                      if (((D += "<div class='ui-datepicker-group"), V[1] > 1))
                        switch (C) {
                          case 0:
                            (D += " ui-datepicker-group-first"),
                              (T = " ui-corner-" + (B ? "right" : "left"));
                            break;
                          case V[1] - 1:
                            (D += " ui-datepicker-group-last"),
                              (T = " ui-corner-" + (B ? "left" : "right"));
                            break;
                          default:
                            (D += " ui-datepicker-group-middle"), (T = "");
                        }
                      D += "'>";
                    }
                    for (
                      D +=
                        "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                        T +
                        "'>" +
                        (/all|left/.test(T) && 0 === S ? (B ? a : n) : "") +
                        (/all|right/.test(T) && 0 === S ? (B ? n : a) : "") +
                        this._generateMonthYearHeader(
                          e,
                          Z,
                          ee,
                          Q,
                          J,
                          S > 0 || C > 0,
                          f,
                          m
                        ) +
                        "</div><table class='ui-datepicker-calendar'><thead><tr>",
                        E = u
                          ? "<th class='ui-datepicker-week-col'>" +
                            this._get(e, "weekHeader") +
                            "</th>"
                          : "",
                        w = 0;
                      w < 7;
                      w++
                    )
                      E +=
                        "<th scope='col'" +
                        ((w + d + 6) % 7 >= 5
                          ? " class='ui-datepicker-week-end'"
                          : "") +
                        "><span title='" +
                        h[(I = (w + d) % 7)] +
                        "'>" +
                        p[I] +
                        "</span></th>";
                    for (
                      D += E + "</tr></thead><tbody>",
                        A = this._getDaysInMonth(ee, Z),
                        ee === e.selectedYear &&
                          Z === e.selectedMonth &&
                          (e.selectedDay = Math.min(e.selectedDay, A)),
                        O = (this._getFirstDayOfMonth(ee, Z) - d + 7) % 7,
                        M = Math.ceil((O + A) / 7),
                        N = G && this.maxRows > M ? this.maxRows : M,
                        this.maxRows = N,
                        L = this._daylightSavingAdjust(new Date(ee, Z, 1 - O)),
                        P = 0;
                      P < N;
                      P++
                    ) {
                      for (
                        D += "<tr>",
                          R = u
                            ? "<td class='ui-datepicker-week-col'>" +
                              this._get(e, "calculateWeek")(L) +
                              "</td>"
                            : "",
                          w = 0;
                        w < 7;
                        w++
                      )
                        (H = g
                          ? g.apply(e.input ? e.input[0] : null, [L])
                          : [!0, ""]),
                          (W =
                            (($ = L.getMonth() !== Z) && !_) ||
                            !H[0] ||
                            (Q && L < Q) ||
                            (J && L > J)),
                          (R +=
                            "<td class='" +
                            ((w + d + 6) % 7 >= 5
                              ? " ui-datepicker-week-end"
                              : "") +
                            ($ ? " ui-datepicker-other-month" : "") +
                            ((L.getTime() === x.getTime() &&
                              Z === e.selectedMonth &&
                              e._keyEvent) ||
                            (y.getTime() === L.getTime() &&
                              y.getTime() === x.getTime())
                              ? " " + this._dayOverClass
                              : "") +
                            (W
                              ? " " +
                                this._unselectableClass +
                                " ui-state-disabled"
                              : "") +
                            ($ && !v
                              ? ""
                              : " " +
                                H[1] +
                                (L.getTime() === X.getTime()
                                  ? " " + this._currentClass
                                  : "") +
                                (L.getTime() === j.getTime()
                                  ? " ui-datepicker-today"
                                  : "")) +
                            "'" +
                            (($ && !v) || !H[2]
                              ? ""
                              : " title='" +
                                H[2].replace(/'/g, "&#39;") +
                                "'") +
                            (W
                              ? ""
                              : " data-handler='selectDay' data-event='click' data-month='" +
                                L.getMonth() +
                                "' data-year='" +
                                L.getFullYear() +
                                "'") +
                            ">" +
                            ($ && !v
                              ? "&#xa0;"
                              : W
                              ? "<span class='ui-state-default'>" +
                                L.getDate() +
                                "</span>"
                              : "<a class='ui-state-default" +
                                (L.getTime() === j.getTime()
                                  ? " ui-state-highlight"
                                  : "") +
                                (L.getTime() === X.getTime()
                                  ? " ui-state-active"
                                  : "") +
                                ($ ? " ui-priority-secondary" : "") +
                                "' href='#'>" +
                                L.getDate() +
                                "</a>") +
                            "</td>"),
                          L.setDate(L.getDate() + 1),
                          (L = this._daylightSavingAdjust(L));
                      D += R + "</tr>";
                    }
                    ++Z > 11 && ((Z = 0), ee++),
                      (k += D +=
                        "</tbody></table>" +
                        (G
                          ? "</div>" +
                            (V[0] > 0 && C === V[1] - 1
                              ? "<div class='ui-datepicker-row-break'></div>"
                              : "")
                          : ""));
                  }
                  b += k;
                }
                return (b += c), (e._keyEvent = !1), b;
              },
              _generateMonthYearHeader: function (e, t, i, n, s, a, o, r) {
                var l,
                  c,
                  d,
                  u,
                  h,
                  p,
                  f,
                  m,
                  g = this._get(e, "changeMonth"),
                  v = this._get(e, "changeYear"),
                  _ = this._get(e, "showMonthAfterYear"),
                  y = "<div class='ui-datepicker-title'>",
                  b = "";
                if (a || !g)
                  b += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
                else {
                  for (
                    l = n && n.getFullYear() === i,
                      c = s && s.getFullYear() === i,
                      b +=
                        "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                      d = 0;
                    d < 12;
                    d++
                  )
                    (!l || d >= n.getMonth()) &&
                      (!c || d <= s.getMonth()) &&
                      (b +=
                        "<option value='" +
                        d +
                        "'" +
                        (d === t ? " selected='selected'" : "") +
                        ">" +
                        r[d] +
                        "</option>");
                  b += "</select>";
                }
                if (
                  (_ || (y += b + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)
                )
                  if (((e.yearshtml = ""), a || !v))
                    y += "<span class='ui-datepicker-year'>" + i + "</span>";
                  else {
                    for (
                      u = this._get(e, "yearRange").split(":"),
                        h = new Date().getFullYear(),
                        p = function (e) {
                          var t = e.match(/c[+\-].*/)
                            ? i + parseInt(e.substring(1), 10)
                            : e.match(/[+\-].*/)
                            ? h + parseInt(e, 10)
                            : parseInt(e, 10);
                          return isNaN(t) ? h : t;
                        },
                        f = p(u[0]),
                        m = Math.max(f, p(u[1] || "")),
                        f = n ? Math.max(f, n.getFullYear()) : f,
                        m = s ? Math.min(m, s.getFullYear()) : m,
                        e.yearshtml +=
                          "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                      f <= m;
                      f++
                    )
                      e.yearshtml +=
                        "<option value='" +
                        f +
                        "'" +
                        (f === i ? " selected='selected'" : "") +
                        ">" +
                        f +
                        "</option>";
                    (e.yearshtml += "</select>"),
                      (y += e.yearshtml),
                      (e.yearshtml = null);
                  }
                return (
                  (y += this._get(e, "yearSuffix")),
                  _ && (y += (!a && g && v ? "" : "&#xa0;") + b),
                  (y += "</div>")
                );
              },
              _adjustInstDate: function (e, t, i) {
                var n = e.selectedYear + ("Y" === i ? t : 0),
                  s = e.selectedMonth + ("M" === i ? t : 0),
                  a =
                    Math.min(e.selectedDay, this._getDaysInMonth(n, s)) +
                    ("D" === i ? t : 0),
                  o = this._restrictMinMax(
                    e,
                    this._daylightSavingAdjust(new Date(n, s, a))
                  );
                (e.selectedDay = o.getDate()),
                  (e.drawMonth = e.selectedMonth = o.getMonth()),
                  (e.drawYear = e.selectedYear = o.getFullYear()),
                  ("M" !== i && "Y" !== i) || this._notifyChange(e);
              },
              _restrictMinMax: function (e, t) {
                var i = this._getMinMaxDate(e, "min"),
                  n = this._getMinMaxDate(e, "max"),
                  s = i && t < i ? i : t;
                return n && s > n ? n : s;
              },
              _notifyChange: function (e) {
                var t = this._get(e, "onChangeMonthYear");
                t &&
                  t.apply(e.input ? e.input[0] : null, [
                    e.selectedYear,
                    e.selectedMonth + 1,
                    e,
                  ]);
              },
              _getNumberOfMonths: function (e) {
                var t = this._get(e, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
              },
              _getMinMaxDate: function (e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null);
              },
              _getDaysInMonth: function (e, t) {
                return (
                  32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
                );
              },
              _getFirstDayOfMonth: function (e, t) {
                return new Date(e, t, 1).getDay();
              },
              _canAdjustMonth: function (e, t, i, n) {
                var s = this._getNumberOfMonths(e),
                  a = this._daylightSavingAdjust(
                    new Date(i, n + (t < 0 ? t : s[0] * s[1]), 1)
                  );
                return (
                  t < 0 &&
                    a.setDate(
                      this._getDaysInMonth(a.getFullYear(), a.getMonth())
                    ),
                  this._isInRange(e, a)
                );
              },
              _isInRange: function (e, t) {
                var i,
                  n,
                  s = this._getMinMaxDate(e, "min"),
                  a = this._getMinMaxDate(e, "max"),
                  o = null,
                  r = null,
                  l = this._get(e, "yearRange");
                return (
                  l &&
                    ((i = l.split(":")),
                    (n = new Date().getFullYear()),
                    (o = parseInt(i[0], 10)),
                    (r = parseInt(i[1], 10)),
                    i[0].match(/[+\-].*/) && (o += n),
                    i[1].match(/[+\-].*/) && (r += n)),
                  (!s || t.getTime() >= s.getTime()) &&
                    (!a || t.getTime() <= a.getTime()) &&
                    (!o || t.getFullYear() >= o) &&
                    (!r || t.getFullYear() <= r)
                );
              },
              _getFormatConfig: function (e) {
                var t = this._get(e, "shortYearCutoff");
                return {
                  shortYearCutoff: (t =
                    "string" != typeof t
                      ? t
                      : (new Date().getFullYear() % 100) + parseInt(t, 10)),
                  dayNamesShort: this._get(e, "dayNamesShort"),
                  dayNames: this._get(e, "dayNames"),
                  monthNamesShort: this._get(e, "monthNamesShort"),
                  monthNames: this._get(e, "monthNames"),
                };
              },
              _formatDate: function (e, t, i, n) {
                t ||
                  ((e.currentDay = e.selectedDay),
                  (e.currentMonth = e.selectedMonth),
                  (e.currentYear = e.selectedYear));
                var s = t
                  ? "object" == typeof t
                    ? t
                    : this._daylightSavingAdjust(new Date(n, i, t))
                  : this._daylightSavingAdjust(
                      new Date(e.currentYear, e.currentMonth, e.currentDay)
                    );
                return this.formatDate(
                  this._get(e, "dateFormat"),
                  s,
                  this._getFormatConfig(e)
                );
              },
            }),
            (e.fn.datepicker = function (t) {
              if (!this.length) return this;
              e.datepicker.initialized ||
                (e(document).on("mousedown", e.datepicker._checkExternalClick),
                (e.datepicker.initialized = !0)),
                0 === e("#" + e.datepicker._mainDivId).length &&
                  e("body").append(e.datepicker.dpDiv);
              var i = Array.prototype.slice.call(arguments, 1);
              return "string" != typeof t ||
                ("isDisabled" !== t && "getDate" !== t && "widget" !== t)
                ? "option" === t &&
                  2 === arguments.length &&
                  "string" == typeof arguments[1]
                  ? e.datepicker["_" + t + "Datepicker"].apply(
                      e.datepicker,
                      [this[0]].concat(i)
                    )
                  : this.each(function () {
                      "string" == typeof t
                        ? e.datepicker["_" + t + "Datepicker"].apply(
                            e.datepicker,
                            [this].concat(i)
                          )
                        : e.datepicker._attachDatepicker(this, t);
                    })
                : e.datepicker["_" + t + "Datepicker"].apply(
                    e.datepicker,
                    [this[0]].concat(i)
                  );
            }),
            (e.datepicker = new n()),
            (e.datepicker.initialized = !1),
            (e.datepicker.uuid = new Date().getTime()),
            (e.datepicker.version = "1.12.1"),
            e.datepicker
          );
        }),
        void 0 === (a = "function" == typeof n ? n.apply(t, s) : n) ||
          (e.exports = a);
    },
    785003: function (e, t, i) {
      var n,
        s = i(619755);
      ((n = s).fn.marquee = function (e) {
        return this.each(function () {
          var t,
            i,
            s = n.extend({}, n.fn.marquee.defaults, e),
            a = n(this),
            o = 3,
            r = "animation-play-state",
            l = !1,
            c = function (e, t, i) {
              for (
                var n = ["webkit", "moz", "MS", "o", ""], s = 0;
                s < n.length;
                s++
              )
                n[s] || (t = t.toLowerCase()),
                  e.addEventListener(n[s] + t, i, !1);
            },
            d = {
              pause: function () {
                l && s.allowCss3Support
                  ? t.css(r, "paused")
                  : n.fn.pause && t.pause(),
                  a.data("runningStatus", "paused"),
                  a.trigger("paused");
              },
              resume: function () {
                l && s.allowCss3Support
                  ? t.css(r, "running")
                  : n.fn.resume && t.resume(),
                  a.data("runningStatus", "resumed"),
                  a.trigger("resumed");
              },
              toggle: function () {
                d["resumed" == a.data("runningStatus") ? "pause" : "resume"]();
              },
              destroy: function () {
                clearTimeout(a.timer),
                  a.find("*").addBack().unbind(),
                  a.html(a.find(".js-marquee:first").html());
              },
            };
          if ("string" == typeof e)
            n.isFunction(d[e]) &&
              (t || (t = a.find(".js-marquee-wrapper")),
              !0 === a.data("css3AnimationIsSupported") && (l = !0),
              d[e]());
          else {
            var u;
            n.each(s, function (e, t) {
              if (void 0 !== (u = a.attr("data-" + e))) {
                switch (u) {
                  case "true":
                    u = !0;
                    break;
                  case "false":
                    u = !1;
                }
                s[e] = u;
              }
            }),
              s.speed &&
                (s.duration = (parseInt(a.width(), 10) / s.speed) * 1e3);
            var h = "up" == s.direction || "down" == s.direction;
            (s.gap = s.duplicated ? parseInt(s.gap) : 0),
              a.wrapInner('<div class="js-marquee"></div>');
            var p = a.find(".js-marquee").css({
              "margin-right": s.gap,
              float: "left",
            });
            if (
              (s.duplicated && p.clone(!0).appendTo(a),
              a.wrapInner(
                '<div style="width:100000px" class="js-marquee-wrapper"></div>'
              ),
              (t = a.find(".js-marquee-wrapper")),
              h)
            ) {
              var f = a.height();
              t.removeAttr("style"),
                a.height(f),
                a.find(".js-marquee").css({
                  float: "none",
                  "margin-bottom": s.gap,
                  "margin-right": 0,
                }),
                s.duplicated &&
                  a.find(".js-marquee:last").css({
                    "margin-bottom": 0,
                  });
              var m = a.find(".js-marquee:first").height() + s.gap;
              s.startVisible && !s.duplicated
                ? ((s._completeDuration =
                    ((parseInt(m, 10) + parseInt(f, 10)) / parseInt(f, 10)) *
                    s.duration),
                  (s.duration *= parseInt(m, 10) / parseInt(f, 10)))
                : (s.duration *=
                    (parseInt(m, 10) + parseInt(f, 10)) / parseInt(f, 10));
            } else {
              var g = a.find(".js-marquee:first").width() + s.gap,
                v = a.width();
              s.startVisible && !s.duplicated
                ? ((s._completeDuration =
                    ((parseInt(g, 10) + parseInt(v, 10)) / parseInt(v, 10)) *
                    s.duration),
                  (s.duration *= parseInt(g, 10) / parseInt(v, 10)))
                : (s.duration *=
                    (parseInt(g, 10) + parseInt(v, 10)) / parseInt(v, 10));
            }
            if ((s.duplicated && (s.duration /= 2), s.allowCss3Support)) {
              p = document.body || document.createElement("div");
              var _ = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
                y = ["Webkit", "Moz", "O", "ms", "Khtml"],
                b = "animation",
                w = "",
                S = "";
              if (
                (p.style.animation && ((S = "@keyframes " + _ + " "), (l = !0)),
                !1 === l)
              )
                for (var k = 0; k < y.length; k++)
                  if (void 0 !== p.style[y[k] + "AnimationName"]) {
                    (p = "-" + y[k].toLowerCase() + "-"),
                      (b = p + b),
                      (r = p + r),
                      (S = "@" + p + "keyframes " + _ + " "),
                      (l = !0);
                    break;
                  }
              l &&
                ((w =
                  _ +
                  " " +
                  s.duration / 1e3 +
                  "s " +
                  s.delayBeforeStart / 1e3 +
                  "s infinite " +
                  s.css3easing),
                a.data("css3AnimationIsSupported", !0));
            }
            var C = function () {
                t.css(
                  "transform",
                  "translateY(" +
                    ("up" == s.direction ? f + "px" : "-" + m + "px") +
                    ")"
                );
              },
              x = function () {
                t.css(
                  "transform",
                  "translateX(" +
                    ("left" == s.direction ? v + "px" : "-" + g + "px") +
                    ")"
                );
              };
            s.duplicated
              ? (h
                  ? s.startVisible
                    ? t.css("transform", "translateY(0)")
                    : t.css(
                        "transform",
                        "translateY(" +
                          ("up" == s.direction
                            ? f + "px"
                            : "-" + (2 * m - s.gap) + "px") +
                          ")"
                      )
                  : s.startVisible
                  ? t.css("transform", "translateX(0)")
                  : t.css(
                      "transform",
                      "translateX(" +
                        ("left" == s.direction
                          ? v + "px"
                          : "-" + (2 * g - s.gap) + "px") +
                        ")"
                    ),
                s.startVisible || (o = 1))
              : s.startVisible
              ? (o = 2)
              : h
              ? C()
              : x();
            var T = function () {
              if (
                (s.duplicated &&
                  (1 === o
                    ? ((s._originalDuration = s.duration),
                      (s.duration = h
                        ? "up" == s.direction
                          ? s.duration + f / (m / s.duration)
                          : 2 * s.duration
                        : "left" == s.direction
                        ? s.duration + v / (g / s.duration)
                        : 2 * s.duration),
                      w &&
                        (w =
                          _ +
                          " " +
                          s.duration / 1e3 +
                          "s " +
                          s.delayBeforeStart / 1e3 +
                          "s " +
                          s.css3easing),
                      o++)
                    : 2 === o &&
                      ((s.duration = s._originalDuration),
                      w &&
                        ((_ += "0"),
                        (S = n.trim(S) + "0 "),
                        (w =
                          _ +
                          " " +
                          s.duration / 1e3 +
                          "s 0s infinite " +
                          s.css3easing)),
                      o++)),
                h
                  ? s.duplicated
                    ? (2 < o &&
                        t.css(
                          "transform",
                          "translateY(" +
                            ("up" == s.direction ? 0 : "-" + m + "px") +
                            ")"
                        ),
                      (i = {
                        transform:
                          "translateY(" +
                          ("up" == s.direction ? "-" + m + "px" : 0) +
                          ")",
                      }))
                    : s.startVisible
                    ? 2 === o
                      ? (w &&
                          (w =
                            _ +
                            " " +
                            s.duration / 1e3 +
                            "s " +
                            s.delayBeforeStart / 1e3 +
                            "s " +
                            s.css3easing),
                        (i = {
                          transform:
                            "translateY(" +
                            ("up" == s.direction ? "-" + m + "px" : f + "px") +
                            ")",
                        }),
                        o++)
                      : 3 === o &&
                        ((s.duration = s._completeDuration),
                        w &&
                          ((_ += "0"),
                          (S = n.trim(S) + "0 "),
                          (w =
                            _ +
                            " " +
                            s.duration / 1e3 +
                            "s 0s infinite " +
                            s.css3easing)),
                        C())
                    : (C(),
                      (i = {
                        transform:
                          "translateY(" +
                          ("up" == s.direction
                            ? "-" + t.height() + "px"
                            : f + "px") +
                          ")",
                      }))
                  : s.duplicated
                  ? (2 < o &&
                      t.css(
                        "transform",
                        "translateX(" +
                          ("left" == s.direction ? 0 : "-" + g + "px") +
                          ")"
                      ),
                    (i = {
                      transform:
                        "translateX(" +
                        ("left" == s.direction ? "-" + g + "px" : 0) +
                        ")",
                    }))
                  : s.startVisible
                  ? 2 === o
                    ? (w &&
                        (w =
                          _ +
                          " " +
                          s.duration / 1e3 +
                          "s " +
                          s.delayBeforeStart / 1e3 +
                          "s " +
                          s.css3easing),
                      (i = {
                        transform:
                          "translateX(" +
                          ("left" == s.direction ? "-" + g + "px" : v + "px") +
                          ")",
                      }),
                      o++)
                    : 3 === o &&
                      ((s.duration = s._completeDuration),
                      w &&
                        ((_ += "0"),
                        (S = n.trim(S) + "0 "),
                        (w =
                          _ +
                          " " +
                          s.duration / 1e3 +
                          "s 0s infinite " +
                          s.css3easing)),
                      x())
                  : (x(),
                    (i = {
                      transform:
                        "translateX(" +
                        ("left" == s.direction ? "-" + g + "px" : v + "px") +
                        ")",
                    })),
                a.trigger("beforeStarting"),
                l)
              ) {
                t.css(b, w);
                var e =
                    S +
                    " { 100%  " +
                    (function (e) {
                      var t,
                        i = [];
                      for (t in e)
                        e.hasOwnProperty(t) && i.push(t + ":" + e[t]);
                      return i.push(), "{" + i.join(",") + "}";
                    })(i) +
                    "}",
                  r = t.find("style");
                0 !== r.length
                  ? r.filter(":last").html(e)
                  : n("head").append("<style>" + e + "</style>"),
                  c(t[0], "AnimationIteration", function () {
                    a.trigger("finished");
                  }),
                  c(t[0], "AnimationEnd", function () {
                    T(), a.trigger("finished");
                  });
              } else
                t.animate(i, s.duration, s.easing, function () {
                  a.trigger("finished"),
                    s.pauseOnCycle
                      ? (a.timer = setTimeout(T, s.delayBeforeStart))
                      : T();
                });
              a.data("runningStatus", "resumed");
            };
            a.bind("pause", d.pause),
              a.bind("resume", d.resume),
              s.pauseOnHover &&
                (a.bind("mouseenter", d.pause), a.bind("mouseleave", d.resume)),
              l && s.allowCss3Support
                ? T()
                : (a.timer = setTimeout(T, s.delayBeforeStart));
          }
        });
      }),
        (n.fn.marquee.defaults = {
          allowCss3Support: !0,
          css3easing: "linear",
          easing: "linear",
          delayBeforeStart: 1e3,
          direction: "left",
          duplicated: !1,
          duration: 5e3,
          gap: 20,
          pauseOnCycle: !1,
          pauseOnHover: !1,
          startVisible: !1,
        });
    },
    837892: function (e, t, i) {
      "use strict";
      e.exports = function (e) {
        e.initConfig({
          pkg: i(766621),
          uglify: {
            options: {
              banner:
                '/*\n    <%= pkg.description %>\n    Copyright (c) 2007 - <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)\n    Version: <%= pkg.version %>\n*/\n',
            },
            dev: {
              options: {
                beautify: !0,
                mangle: !1,
              },
              files: {
                "dist/jquery.maskedinput.js": ["src/jquery.maskedinput.js"],
              },
            },
            min: {
              files: {
                "dist/jquery.maskedinput.min.js": ["src/jquery.maskedinput.js"],
              },
            },
          },
          jasmine: {
            full: {
              src: "src/**/*.js",
              options: {
                specs: "spec/*[S|s]pec.js",
                vendor: [
                  "spec/lib/matchers.js",
                  "spec/lib/jasmine-species/jasmine-grammar.js",
                  "spec/lib/setup.js",
                  "lib/jquery-1.9.0.min.js",
                  "spec/lib/jquery.keymasher.js",
                ],
              },
            },
          },
          nugetpack: {
            dist: {
              src: "jquery.maskedinput.nuspec",
              dest: "dist/",
            },
          },
        }),
          e.loadNpmTasks("grunt-contrib-jasmine"),
          e.loadNpmTasks("grunt-contrib-uglify"),
          e.loadNpmTasks("grunt-nuget"),
          e.registerTask("test", ["jasmine"]),
          e.registerTask("pack", ["default", "nugetpack"]),
          e.registerTask("default", ["test", "uglify"]);
      };
    },
    109186: function (e, t, i) {
      var n = i(619755);
      !(function (e, t, i) {
        "use strict";
        var s = !1,
          a = "",
          o = "scheletrone",
          r = [
            "lorem",
            "ipsum",
            "dolor",
            "sit",
            "amet,",
            "consectetur",
            "adipiscing",
            "elit",
            "ut",
            "aliquam,",
            "purus",
            "sit",
            "amet",
            "luctus",
            "venenatis,",
            "lectus",
            "magna",
            "fringilla",
            "urna,",
            "porttitor",
            "rhoncus",
            "dolor",
            "purus",
            "non",
            "enim",
            "praesent",
            "elementum",
            "facilisis",
            "leo,",
            "vel",
            "fringilla",
            "est",
            "ullamcorper",
            "eget",
            "nulla",
            "facilisi",
            "etiam",
            "dignissim",
            "diam",
            "quis",
            "enim",
            "lobortis",
            "scelerisque",
            "fermentum",
            "dui",
            "faucibus",
            "in",
            "ornare",
            "quam",
            "viverra",
            "orci",
            "sagittis",
            "eu",
            "volutpat",
            "odio",
            "facilisis",
            "mauris",
            "sit",
            "amet",
            "massa",
            "vitae",
            "tortor",
            "condimentum",
            "lacinia",
            "quis",
            "vel",
            "eros",
            "donec",
            "ac",
            "odio",
            "tempor",
            "orci",
            "dapibus",
            "ultrices",
            "in",
            "iaculis",
            "nunc",
            "sed",
            "augue",
            "lacus,",
            "viverra",
            "vitae",
            "congue",
            "eu,",
            "consequat",
            "ac",
            "felis",
            "donec",
            "et",
            "odio",
            "pellentesque",
            "diam",
            "volutpat",
            "commodo",
            "sed",
            "egestas",
            "egestas",
            "fringilla",
            "phasellus",
            "faucibus",
            "scelerisque",
            "eleifend",
            "donec",
            "pretium",
            "vulputate",
            "sapien",
            "nec",
            "sagittis",
            "aliquam",
            "malesuada",
            "bibendum",
            "arcu",
            "vitae",
            "elementum",
            "curabitur",
            "vitae",
            "nunc",
            "sed",
            "velit",
            "dignissim",
            "sodales",
            "ut",
            "eu",
            "sem",
            "integer",
            "vitae",
            "justo",
            "eget",
            "magna",
            "fermentum",
            "iaculis",
            "eu",
            "non",
            "diam",
            "phasellus",
            "vestibulum",
            "lorem",
            "sed",
            "risus",
            "ultricies",
            "tristique",
            "nulla",
            "aliquet",
            "enim",
            "tortor,",
            "at",
            "auctor",
            "urna",
            "nunc",
            "id",
            "cursus",
            "metus",
            "aliquam",
            "eleifend",
            "mi",
            "in",
            "nulla",
            "posuere",
            "sollicitudin",
            "aliquam",
            "ultrices",
            "sagittis",
            "orci,",
            "a",
            "scelerisque",
            "purus",
            "semper",
            "eget",
            "duis",
            "at",
            "tellus",
            "at",
            "urna",
            "condimentum",
            "mattis",
            "pellentesque",
            "id",
            "nibh",
            "tortor,",
            "id",
            "aliquet",
            "lectus",
            "proin",
            "nibh",
            "nisl,",
            "condimentum",
            "id",
            "venenatis",
            "a,",
            "condimentum",
            "vitae",
            "sapien",
            "pellentesque",
            "habitant",
            "morbi",
            "tristique",
            "senectus",
            "et",
            "netus",
            "et",
            "malesuada",
            "fames",
            "ac",
            "turpis",
            "egestas",
            "sed",
            "tempus,",
            "urna",
            "et",
            "pharetra",
            "pharetra,",
            "massa",
            "massa",
            "ultricies",
            "mi,",
            "quis",
            "hendrerit",
            "dolor",
            "magna",
            "eget",
            "est",
            "lorem",
            "ipsum",
            "dolor",
            "sit",
            "amet,",
            "consectetur",
            "adipiscing",
            "elit",
            "pellentesque",
            "habitant",
            "morbi",
            "tristique",
            "senectus",
            "et",
            "netus",
            "et",
            "malesuada",
            "fames",
            "ac",
            "turpis",
            "egestas",
            "integer",
            "eget",
            "aliquet",
            "nibh",
            "praesent",
            "tristique",
            "magna",
            "sit",
            "amet",
            "purus",
            "gravida",
            "quis",
            "blandit",
            "turpis",
            "cursus",
            "in",
            "hac",
            "habitasse",
            "platea",
            "dictumst",
            "quisque",
            "sagittis,",
            "purus",
            "sit",
            "amet",
            "volutpat",
            "consequat,",
            "mauris",
            "nunc",
            "congue",
            "nisi,",
            "vitae",
            "suscipit",
            "tellus",
            "mauris",
            "a",
            "diam",
            "maecenas",
            "sed",
            "enim",
            "ut",
            "sem",
            "viverra",
            "aliquet",
            "eget",
            "sit",
            "amet",
            "tellus",
            "cras",
            "adipiscing",
            "enim",
            "eu",
            "turpis",
            "egestas",
            "pretium",
            "aenean",
            "pharetra,",
            "magna",
            "ac",
            "placerat",
            "vestibulum,",
            "lectus",
            "mauris",
            "ultrices",
            "eros,",
            "in",
            "cursus",
            "turpis",
            "massa",
            "tincidunt",
            "dui",
            "ut",
            "ornare",
            "lectus",
            "sit",
            "amet",
            "est",
            "placerat",
            "in",
            "egestas",
            "erat",
            "imperdiet",
            "sed",
            "euismod",
            "nisi",
            "porta",
            "lorem",
            "mollis",
            "aliquam",
            "ut",
            "porttitor",
            "leo",
            "a",
            "diam",
            "sollicitudin",
            "tempor",
            "id",
            "eu",
            "nisl",
            "nunc",
            "mi",
            "ipsum,",
            "faucibus",
            "vitae",
            "aliquet",
            "nec,",
            "ullamcorper",
            "sit",
            "amet",
            "risus",
            "nullam",
            "eget",
            "felis",
            "eget",
            "nunc",
            "lobortis",
            "mattis",
            "aliquam",
            "faucibus",
            "purus",
            "in",
            "massa",
            "tempor",
            "nec",
            "feugiat",
            "nisl",
            "pretium",
            "fusce",
            "id",
            "velit",
            "ut",
            "tortor",
            "pretium",
            "viverra",
            "suspendisse",
            "potenti",
            "nullam",
            "ac",
            "tortor",
            "vitae",
            "purus",
            "faucibus",
            "ornare",
            "suspendisse",
            "sed",
            "nisi",
            "lacus,",
            "sed",
            "viverra",
            "tellus",
            "in",
            "hac",
            "habitasse",
            "platea",
            "dictumst",
            "vestibulum",
            "rhoncus",
            "est",
            "pellentesque",
            "elit",
            "ullamcorper",
            "dignissim",
            "cras",
            "tincidunt",
            "lobortis",
            "feugiat",
            "vivamus",
            "at",
            "augue",
            "eget",
            "arcu",
            "dictum",
            "varius",
            "duis",
            "at",
            "consectetur",
            "lorem",
            "donec",
            "massa",
            "sapien,",
            "faucibus",
            "et",
            "molestie",
            "ac,",
            "feugiat",
            "sed",
            "lectus",
            "vestibulum",
            "mattis",
            "ullamcorper",
            "velit",
            "sed",
            "ullamcorper",
            "morbi",
            "tincidunt",
            "ornare",
            "massa,",
            "eget",
            "egestas",
            "purus",
            "viverra",
            "accumsan",
            "in",
            "nisl",
            "nisi,",
            "scelerisque",
            "eu",
            "ultrices",
            "vitae,",
            "auctor",
            "eu",
            "augue",
            "ut",
            "lectus",
            "arcu,",
            "bibendum",
            "at",
            "varius",
            "vel,",
            "pharetra",
            "vel",
            "turpis",
            "nunc",
            "eget",
            "lorem",
            "dolor,",
            "sed",
            "viverra",
            "ipsum",
            "nunc",
            "aliquet",
            "bibendum",
            "enim,",
            "facilisis",
            "gravida",
            "neque",
            "convallis",
            "a",
            "cras",
            "semper",
            "auctor",
            "neque,",
            "vitae",
            "tempus",
            "quam",
            "pellentesque",
            "nec",
            "nam",
            "aliquam",
            "sem",
            "et",
            "tortor",
            "consequat",
            "id",
            "porta",
            "nibh",
            "venenatis",
            "cras",
            "sed",
            "felis",
            "eget",
            "velit",
            "aliquet",
            "sagittis",
            "id",
            "consectetur",
            "purus",
            "ut",
            "faucibus",
            "pulvinar",
            "elementum",
            "integer",
            "enim",
            "neque,",
            "volutpat",
            "ac",
            "tincidunt",
            "vitae,",
            "semper",
            "quis",
            "lectus",
            "nulla",
            "at",
            "volutpat",
            "diam",
            "ut",
            "venenatis",
            "tellus",
            "in",
            "metus",
            "vulputate",
            "eu",
            "scelerisque",
            "felis",
            "imperdiet",
            "proin",
            "fermentum",
            "leo",
            "vel",
            "orci",
            "porta",
            "non",
            "pulvinar",
            "neque",
            "laoreet",
            "suspendisse",
            "interdum",
            "consectetur",
            "libero,",
            "id",
            "faucibus",
            "nisl",
            "tincidunt",
            "eget",
            "nullam",
            "non",
            "nisi",
            "est,",
            "sit",
            "amet",
            "facilisis",
            "magna",
            "etiam",
            "tempor,",
            "orci",
            "eu",
            "lobortis",
            "elementum,",
            "nibh",
            "tellus",
            "molestie",
            "nunc,",
            "non",
            "blandit",
            "massa",
            "enim",
            "nec",
            "dui",
            "nunc",
            "mattis",
            "enim",
            "ut",
            "tellus",
            "elementum",
            "sagittis",
            "vitae",
            "et",
            "leo",
            "duis",
            "ut",
            "diam",
            "quam",
            "nulla",
            "porttitor",
            "massa",
            "id",
            "neque",
            "aliquam",
            "vestibulum",
            "morbi",
            "blandit",
            "cursus",
            "risus,",
            "at",
            "ultrices",
            "mi",
            "tempus",
            "imperdiet",
            "nulla",
            "malesuada",
            "pellentesque",
            "elit",
            "eget",
            "gravida",
            "cum",
            "sociis",
            "natoque",
            "penatibus",
            "et",
            "magnis",
            "dis",
            "parturient",
            "montes,",
            "nascetur",
            "ridiculus",
            "mus",
            "mauris",
            "vitae",
            "ultricies",
            "leo",
            "integer",
            "malesuada",
            "nunc",
            "vel",
            "risus",
            "commodo",
            "viverra",
            "maecenas",
            "accumsan,",
            "lacus",
            "vel",
            "facilisis",
            "volutpat,",
            "est",
            "velit",
            "egestas",
            "dui,",
            "id",
            "ornare",
            "arcu",
            "odio",
            "ut",
            "sem",
            "nulla",
            "pharetra",
            "diam",
            "sit",
            "amet",
            "nisl",
            "suscipit",
            "adipiscing",
            "bibendum",
            "est",
            "ultricies",
            "integer",
            "quis",
            "auctor",
            "elit",
            "sed",
            "vulputate",
            "mi",
            "sit",
            "amet",
            "mauris",
            "commodo",
            "quis",
            "imperdiet",
            "massa",
            "tincidunt",
            "nunc",
            "pulvinar",
            "sapien",
            "et",
            "ligula",
            "ullamcorper",
            "malesuada",
            "proin",
            "libero",
            "nunc,",
            "consequat",
            "interdum",
            "varius",
            "sit",
            "amet,",
            "mattis",
            "vulputate",
            "enim",
            "nulla",
            "aliquet",
            "porttitor",
            "lacus,",
            "luctus",
            "accumsan",
            "tortor",
            "posuere",
            "ac",
            "ut",
            "consequat",
            "semper",
            "viverra",
            "nam",
            "libero",
            "justo,",
            "laoreet",
            "sit",
            "amet",
            "cursus",
            "sit",
            "amet,",
            "dictum",
            "sit",
            "amet",
            "justo",
            "donec",
            "enim",
            "diam,",
            "vulputate",
            "ut",
            "pharetra",
            "sit",
            "amet,",
            "aliquam",
            "id",
            "diam",
            "maecenas",
            "ultricies",
            "mi",
            "eget",
            "mauris",
            "pharetra",
            "et",
            "ultrices",
            "neque",
            "ornare",
            "aenean",
            "euismod",
            "elementum",
            "nisi,",
            "quis",
            "eleifend",
            "quam",
            "adipiscing",
            "vitae",
            "proin",
            "sagittis,",
            "nisl",
            "rhoncus",
            "mattis",
            "rhoncus,",
            "urna",
            "neque",
            "viverra",
            "justo,",
            "nec",
            "ultrices",
            "dui",
            "sapien",
            "eget",
            "mi",
            "proin",
            "sed",
            "libero",
            "enim,",
            "sed",
            "faucibus",
            "turpis",
            "in",
            "eu",
            "mi",
            "bibendum",
            "neque",
            "egestas",
            "congue",
            "quisque",
            "egestas",
            "diam",
            "in",
            "arcu",
            "cursus",
            "euismod",
            "quis",
            "viverra",
            "nibh",
            "cras",
            "pulvinar",
            "mattis",
            "nunc,",
            "sed",
            "blandit",
            "libero",
            "volutpat",
            "sed",
            "cras",
            "ornare",
            "arcu",
            "dui",
            "vivamus",
            "arcu",
            "felis,",
            "bibendum",
            "ut",
            "tristique",
            "et,",
            "egestas",
            "quis",
            "ipsum",
            "suspendisse",
            "ultrices",
            "gravida",
            "dictum",
            "fusce",
            "ut",
            "placerat",
            "orci",
            "nulla",
            "pellentesque",
            "dignissim",
            "enim,",
            "sit",
            "amet",
            "venenatis",
            "urna",
            "cursus",
            "eget",
            "nunc",
            "scelerisque",
            "viverra",
            "mauris,",
            "in",
            "aliquam",
            "sem",
            "fringilla",
            "ut",
            "morbi",
            "tincidunt",
            "augue",
            "interdum",
            "velit",
            "euismod",
            "in",
            "pellentesque",
            "massa",
            "placerat",
            "duis",
            "ultricies",
            "lacus",
            "sed",
            "turpis",
            "tincidunt",
            "id",
            "aliquet",
            "risus",
            "feugiat",
            "in",
            "ante",
            "metus,",
            "dictum",
            "at",
            "tempor",
            "commodo,",
            "ullamcorper",
            "a",
            "lacus",
            "vestibulum",
            "sed",
            "arcu",
            "non",
            "odio",
            "euismod",
            "lacinia",
            "at",
            "quis",
            "risus",
            "sed",
            "vulputate",
            "odio",
            "ut",
            "enim",
            "blandit",
            "volutpat",
            "maecenas",
            "volutpat",
            "blandit",
            "aliquam",
            "etiam",
            "erat",
            "velit,",
            "scelerisque",
            "in",
            "dictum",
            "non,",
            "consectetur",
            "a",
            "erat",
            "nam",
            "at",
            "lectus",
            "urna",
            "duis",
            "convallis",
            "convallis",
            "tellus,",
            "id",
            "interdum",
            "velit",
            "laoreet",
            "id",
            "donec",
            "ultrices",
            "tincidunt",
            "arcu,",
            "non",
            "sodales",
            "neque",
            "sodales",
            "ut",
            "etiam",
            "sit",
            "amet",
            "nisl",
            "purus,",
            "in",
            "mollis",
            "nunc",
            "sed",
            "id",
            "semper",
            "risus",
            "in",
            "hendrerit",
            "gravida",
            "rutrum",
            "quisque",
            "non",
            "tellus",
            "orci,",
            "ac",
            "auctor",
            "augue",
            "mauris",
            "augue",
            "neque,",
            "gravida",
            "in",
            "fermentum",
            "et,",
            "sollicitudin",
            "ac",
            "orci",
            "phasellus",
            "egestas",
            "tellus",
            "rutrum",
            "tellus",
            "pellentesque",
            "eu",
            "tincidunt",
            "tortor",
            "aliquam",
            "nulla",
            "facilisi",
            "cras",
            "fermentum,",
            "odio",
            "eu",
            "feugiat",
            "pretium,",
            "nibh",
            "ipsum",
            "consequat",
            "nisl,",
            "vel",
            "pretium",
            "lectus",
            "quam",
            "id",
            "leo",
            "in",
            "vitae",
            "turpis",
            "massa",
            "sed",
            "elementum",
            "tempus",
            "egestas",
            "sed",
            "sed",
            "risus",
            "pretium",
            "quam",
            "vulputate",
            "dignissim",
            "suspendisse",
            "in",
            "est",
            "ante",
            "in",
            "nibh",
            "mauris,",
            "cursus",
            "mattis",
            "molestie",
            "a,",
            "iaculis",
            "at",
            "erat",
            "pellentesque",
            "adipiscing",
            "commodo",
            "elit,",
            "at",
            "imperdiet",
            "dui",
            "accumsan",
            "sit",
            "amet",
            "nulla",
            "facilisi",
            "morbi",
            "tempus",
            "iaculis",
            "urna,",
            "id",
            "volutpat",
            "lacus",
            "laoreet",
            "non",
            "curabitur",
            "gravida",
            "arcu",
            "ac",
            "tortor",
            "dignissim",
            "convallis",
            "aenean",
            "et",
            "tortor",
            "at",
            "risus",
            "viverra",
            "adipiscing",
            "at",
            "in",
            "tellus",
            "integer",
            "feugiat",
            "scelerisque",
            "varius",
            "morbi",
            "enim",
            "nunc,",
            "faucibus",
            "a",
            "pellentesque",
            "sit",
            "amet,",
            "porttitor",
            "eget",
            "dolor",
            "morbi",
            "non",
            "arcu",
            "risus,",
            "quis",
            "varius",
            "quam",
            "quisque",
            "id",
            "diam",
            "vel",
            "quam",
            "elementum",
            "pulvinar",
            "etiam",
            "non",
            "quam",
            "lacus",
            "suspendisse",
            "faucibus",
            "interdum",
            "posuere",
            "lorem",
            "ipsum",
            "dolor",
            "sit",
            "amet,",
            "consectetur",
            "adipiscing",
            "elit",
            "duis",
            "tristique",
            "sollicitudin",
            "nibh",
            "sit",
            "amet",
            "commodo",
            "nulla",
            "facilisi",
            "nullam",
            "vehicula",
            "ipsum",
            "a",
            "arcu",
            "cursus",
            "vitae",
            "congue",
            "mauris",
            "rhoncus",
            "aenean",
            "vel",
            "elit",
            "scelerisque",
            "mauris",
            "pellentesque",
            "pulvinar",
            "pellentesque",
            "habitant",
            "morbi",
            "tristique",
            "senectus",
            "et",
            "netus",
            "et",
            "malesuada",
            "fames",
            "ac",
            "turpis",
            "egestas",
            "maecenas",
            "pharetra",
            "convallis",
            "posuere",
            "morbi",
            "leo",
            "urna,",
            "molestie",
            "at",
            "elementum",
            "eu,",
            "facilisis",
            "sed",
            "odio",
            "morbi",
            "quis",
            "commodo",
            "odio",
            "aenean",
            "sed",
            "adipiscing",
            "diam",
            "donec",
            "adipiscing",
            "tristique",
            "risus",
            "nec",
            "feugiat",
            "in",
            "fermentum",
            "posuere",
            "urna",
            "nec",
            "tincidunt",
            "praesent",
            "semper",
            "feugiat",
            "nibh",
            "sed",
            "pulvinar",
            "proin",
            "gravida",
            "hendrerit",
            "lectus",
            "a",
            "molestie",
          ],
          l = "plugin_" + o,
          c = {
            url: "",
            ajaxData: {},
            debug: {
              log: !1,
              latency: 0,
            },
            maskText: !1,
            skelParentText: !1,
            removeIframe: !1,
            backgroundImage: !0,
            replaceImageWith: "",
            incache: !1,
            onComplete: function () {
              u("default onComplete() event");
            },
          },
          d = function (t, i) {
            (a = e(t).attr("id")),
              (this.element = e(t)),
              (this.options = e.extend({}, c, i)),
              (s = this.options.debug.log),
              (this.element = t),
              (this.$container = e(t)),
              this.init();
          },
          u = function (e) {
            s && console.log(e);
          },
          h = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
          },
          p = function (e) {
            var t = h(0, r.length - 1);
            return e + " " + r[t];
          };
        (d.prototype = {
          init: function () {
            var t = this.element,
              i = this;
            u(this),
              this.options.removeIframe && n("html").find("iframe").remove(),
              this.options.incache &&
                (u(this.getCache()),
                (this.element.innerHTML = this.getCache())),
              e(t)
                .find("*")
                .each(function (t) {
                  e(this)
                    .contents()
                    .filter(function () {
                      return 3 === this.nodeType;
                    })
                    .each(function () {
                      if ("" != this.nodeValue.trim()) {
                        if (
                          (u(this, "-- " + this.nodeValue.trim() + "--"),
                          i.options.maskText)
                        ) {
                          var t = (function (e, t) {
                            for (
                              var i = h(0, r.length - e - 1),
                                n = r
                                  .slice(i, i + e)
                                  .join(" ")
                                  .replace(/[\.\,]/g, "");
                              t - n.length > 0;

                            )
                              n = p(n);
                            return n;
                          })(
                            this.nodeValue
                              .trim()
                              .replace(/(^\s*)|(\s*$)/gi, "")
                              .replace(/[ ]{2,}/gi, " ")
                              .replace(/\n /, "\n")
                              .split(" ").length,
                            this.nodeValue.trim().length
                          );
                          this.nodeValue = t;
                        }
                        if (i.options.skelParentText) {
                          var n = e(this).parent().css({
                            "background-color": "#ccc",
                          });
                          u(this, n);
                        }
                        return this;
                      }
                      this.remove();
                    })
                    .wrap("<div class='nodeType3' ></div>")
                    .end();
                }),
              e(t)
                .find("*")
                .each(function (t) {
                  var n = !0;
                  if (
                    (i.options.backgroundImage ||
                      (function (t, i) {
                        var n = e(i).css("background-image");
                        n = (n = /^url\((['"]?)(.*)\1\)$/.exec(n)) ? n[2] : "";
                        var s = e(i).css("background");
                        (s = (s = /^url\((['"]?)(.*)\1\)$/.exec(s))
                          ? s[2]
                          : ""),
                          console.log(this),
                          ("" == n && "" == s) ||
                            e(i).replaceWith(
                              "<div class='pending_el " +
                                t +
                                "' style='width:" +
                                e(i).width() +
                                "px;height:" +
                                e(i).height() +
                                "px;'></div>"
                            );
                      })(i.options.replaceImageWith, this),
                    e(this).css("color", "#ccc"),
                    0 == e(this).children().length)
                  ) {
                    if ((e(this).is("BR") && (n = !1), e(this).is("IMG"))) {
                      var s = this.width,
                        a = this.height,
                        o =
                          "<div class='pending_el " +
                          i.options.replaceImageWith +
                          " ' style='width:" +
                          s +
                          "px;height:" +
                          a +
                          "px;)'></div>";
                      e(this).replaceWith(o), (n = !1);
                    }
                    n && e(this).addClass("pending_el ");
                  }
                }),
              "" != this.options.url && (u("prova"), this.retrieveData()),
              this.options.onComplete &&
                "function" == typeof this.options.onComplete &&
                this.options.onComplete();
          },
          retrieveData: function () {
            var t = this;
            this.options.debug.latency > 0
              ? setTimeout(function () {
                  e.ajax({
                    url: t.options.url,
                    dataType: "html",
                    data: t.options.ajaxData,
                    success: function (n) {
                      if (
                        (u(t.options.debug.log, "obj.element " + t.element),
                        e(t.element).html("").append(n),
                        t.options.incache)
                      ) {
                        u(t.options.debug.log, "setcache");
                        var s = (function (t) {
                          u("_retrieveOnlyToCache"), u(t);
                          var n = i.createElement("div");
                          return (
                            (n.innerHTML = t),
                            e(n)
                              .children()
                              .each(function (t) {
                                u("a"),
                                  u(e(this).data("scheletrone")),
                                  e(this).data("scheletrone") ||
                                    e(this).remove();
                              }),
                            console.log(n.innerHTML),
                            n.innerHTML
                          );
                        })(n);
                        t.setCache(s);
                      }
                    },
                  });
                }, t.options.debug.latency)
              : e.ajax({
                  url: t.options.url,
                  dataType: "html",
                  data: t.options.ajaxData,
                  success: function (e) {
                    u(t.options.debug.log, t), t.element.html("").append(e);
                  },
                });
          },
          stopLoader: function () {
            e(this.element).html("");
          },
          setCache: function (e) {
            if (t.localStorage) {
              var i = t.location.pathname,
                n = i.substring(i.lastIndexOf("/") + 1);
              t.localStorage.setItem(n + "-div-" + a + "-skeleton:", e);
            }
          },
          getCache: function () {
            if (t.localStorage) {
              var e = t.location.pathname,
                i = e.substring(e.lastIndexOf("/") + 1);
              return t.localStorage.getItem(i + "-div-" + a + "-skeleton:");
            }
            return !1;
          },
        }),
          (e.fn[o] = function (t) {
            var i;
            if (void 0 === t || "object" == typeof t)
              return this.each(function () {
                e.data(this, l) || e.data(this, l, new d(this, t)),
                  "function" == typeof (i = e(this).data(l)).init && i.init();
              });
            if ("string" == typeof t) {
              var n,
                s = arguments[0],
                a = Array.prototype.slice.call(arguments, 1);
              return (
                this.each(function () {
                  var i = e(this).data(l);
                  e.data(this, l) && "function" == typeof e.data(this, l)[s]
                    ? (n = e.data(this, l)[s].apply(i, a))
                    : console.info(
                        "Method " + t + " does not exist on jQuery." + o
                      );
                }),
                void 0 !== n ? n : this
              );
            }
            console.info("Method " + t + " does not exist on jQuery." + o);
          });
      })(n, window, document);
    },
    381232: function (e, t, i) {
      var n, s, a;
      (s = [i(619755)]),
        (n = function (t) {
          var n, s, a, o, r;
          (n = function () {
            var e,
              i = "mCustomScrollbar",
              n = "mCS",
              s = ".mCustomScrollbar",
              a = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                  enable: !0,
                  scrollAmount: "auto",
                  axis: "y",
                  deltaFactor: "auto",
                  disableOver: [
                    "select",
                    "option",
                    "keygen",
                    "datalist",
                    "textarea",
                  ],
                },
                scrollButtons: {
                  scrollType: "stepless",
                  scrollAmount: "auto",
                },
                keyboard: {
                  enable: !0,
                  scrollType: "stepless",
                  scrollAmount: "auto",
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                  autoScrollOnFocus:
                    "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                  updateOnContentResize: !0,
                  updateOnImageLoad: "auto",
                  autoUpdateTimeout: 60,
                },
                theme: "light",
                callbacks: {
                  onTotalScrollOffset: 0,
                  onTotalScrollBackOffset: 0,
                  alwaysTriggerOffsets: !0,
                },
              },
              o = 0,
              r = {},
              l = window.attachEvent && !window.addEventListener ? 1 : 0,
              c = !1,
              d = [
                "mCSB_dragger_onDrag",
                "mCSB_scrollTools_onDrag",
                "mCS_img_loaded",
                "mCS_disabled",
                "mCS_destroyed",
                "mCS_no_scrollbar",
                "mCS-autoHide",
                "mCS-dir-rtl",
                "mCS_no_scrollbar_y",
                "mCS_no_scrollbar_x",
                "mCS_y_hidden",
                "mCS_x_hidden",
                "mCSB_draggerContainer",
                "mCSB_buttonUp",
                "mCSB_buttonDown",
                "mCSB_buttonLeft",
                "mCSB_buttonRight",
              ],
              u = {
                init: function (e) {
                  e = t.extend(!0, {}, a, e);
                  var i = h.call(this);
                  if (e.live) {
                    var l = e.liveSelector || this.selector || s,
                      c = t(l);
                    if ("off" === e.live) return void f(l);
                    r[l] = setTimeout(function () {
                      c.mCustomScrollbar(e),
                        "once" === e.live && c.length && f(l);
                    }, 500);
                  } else f(l);
                  return (
                    (e.setWidth = e.set_width ? e.set_width : e.setWidth),
                    (e.setHeight = e.set_height ? e.set_height : e.setHeight),
                    (e.axis = e.horizontalScroll ? "x" : m(e.axis)),
                    (e.scrollInertia =
                      e.scrollInertia > 0 && e.scrollInertia < 17
                        ? 17
                        : e.scrollInertia),
                    "object" != typeof e.mouseWheel &&
                      1 == e.mouseWheel &&
                      (e.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1,
                      }),
                    (e.mouseWheel.scrollAmount = e.mouseWheelPixels
                      ? e.mouseWheelPixels
                      : e.mouseWheel.scrollAmount),
                    (e.mouseWheel.normalizeDelta = e.advanced
                      .normalizeMouseWheelDelta
                      ? e.advanced.normalizeMouseWheelDelta
                      : e.mouseWheel.normalizeDelta),
                    (e.scrollButtons.scrollType = g(
                      e.scrollButtons.scrollType
                    )),
                    p(e),
                    t(i).each(function () {
                      var i = t(this);
                      if (!i.data(n)) {
                        i.data(n, {
                          idx: ++o,
                          opt: e,
                          scrollRatio: {
                            y: null,
                            x: null,
                          },
                          overflowed: null,
                          contentReset: {
                            y: null,
                            x: null,
                          },
                          bindEvents: !1,
                          tweenRunning: !1,
                          sequential: {},
                          langDir: i.css("direction"),
                          cbOffsets: null,
                          trigger: null,
                          poll: {
                            size: {
                              o: 0,
                              n: 0,
                            },
                            img: {
                              o: 0,
                              n: 0,
                            },
                            change: {
                              o: 0,
                              n: 0,
                            },
                          },
                        });
                        var s = i.data(n),
                          a = s.opt,
                          r = i.data("mcs-axis"),
                          l = i.data("mcs-scrollbar-position"),
                          c = i.data("mcs-theme");
                        r && (a.axis = r),
                          l && (a.scrollbarPosition = l),
                          c && ((a.theme = c), p(a)),
                          v.call(this),
                          s &&
                            a.callbacks.onCreate &&
                            "function" == typeof a.callbacks.onCreate &&
                            a.callbacks.onCreate.call(this),
                          t(
                            "#mCSB_" +
                              s.idx +
                              "_container img:not(." +
                              d[2] +
                              ")"
                          ).addClass(d[2]),
                          u.update.call(null, i);
                      }
                    })
                  );
                },
                update: function (e, i) {
                  var s = e || h.call(this);
                  return t(s).each(function () {
                    var e = t(this);
                    if (e.data(n)) {
                      var s = e.data(n),
                        a = s.opt,
                        o = t("#mCSB_" + s.idx + "_container"),
                        r = t("#mCSB_" + s.idx),
                        l = [
                          t("#mCSB_" + s.idx + "_dragger_vertical"),
                          t("#mCSB_" + s.idx + "_dragger_horizontal"),
                        ];
                      if (!o.length) return;
                      s.tweenRunning && K(e),
                        i &&
                          s &&
                          a.callbacks.onBeforeUpdate &&
                          "function" == typeof a.callbacks.onBeforeUpdate &&
                          a.callbacks.onBeforeUpdate.call(this),
                        e.hasClass(d[3]) && e.removeClass(d[3]),
                        e.hasClass(d[4]) && e.removeClass(d[4]),
                        r.css("max-height", "none"),
                        r.height() !== e.height() &&
                          r.css("max-height", e.height()),
                        y.call(this),
                        "y" === a.axis ||
                          a.advanced.autoExpandHorizontalScroll ||
                          o.css("width", _(o)),
                        (s.overflowed = C.call(this)),
                        E.call(this),
                        a.autoDraggerLength && w.call(this),
                        S.call(this),
                        T.call(this);
                      var c = [
                        Math.abs(o[0].offsetTop),
                        Math.abs(o[0].offsetLeft),
                      ];
                      "x" !== a.axis &&
                        (s.overflowed[0]
                          ? l[0].height() > l[0].parent().height()
                            ? x.call(this)
                            : (G(e, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none",
                              }),
                              (s.contentReset.y = null))
                          : (x.call(this),
                            "y" === a.axis
                              ? D.call(this)
                              : "yx" === a.axis &&
                                s.overflowed[1] &&
                                G(e, c[1].toString(), {
                                  dir: "x",
                                  dur: 0,
                                  overwrite: "none",
                                }))),
                        "y" !== a.axis &&
                          (s.overflowed[1]
                            ? l[1].width() > l[1].parent().width()
                              ? x.call(this)
                              : (G(e, c[1].toString(), {
                                  dir: "x",
                                  dur: 0,
                                  overwrite: "none",
                                }),
                                (s.contentReset.x = null))
                            : (x.call(this),
                              "x" === a.axis
                                ? D.call(this)
                                : "yx" === a.axis &&
                                  s.overflowed[0] &&
                                  G(e, c[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none",
                                  }))),
                        i &&
                          s &&
                          (2 === i &&
                          a.callbacks.onImageLoad &&
                          "function" == typeof a.callbacks.onImageLoad
                            ? a.callbacks.onImageLoad.call(this)
                            : 3 === i &&
                              a.callbacks.onSelectorChange &&
                              "function" == typeof a.callbacks.onSelectorChange
                            ? a.callbacks.onSelectorChange.call(this)
                            : a.callbacks.onUpdate &&
                              "function" == typeof a.callbacks.onUpdate &&
                              a.callbacks.onUpdate.call(this)),
                        V.call(this);
                    }
                  });
                },
                scrollTo: function (e, i) {
                  if (void 0 !== e && null != e) {
                    var s = h.call(this);
                    return t(s).each(function () {
                      var s = t(this);
                      if (s.data(n)) {
                        var a = s.data(n),
                          o = a.opt,
                          r = {
                            trigger: "external",
                            scrollInertia: o.scrollInertia,
                            scrollEasing: "mcsEaseInOut",
                            moveDragger: !1,
                            timeout: 60,
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0,
                          },
                          l = t.extend(!0, {}, r, i),
                          c = q.call(this, e),
                          d =
                            l.scrollInertia > 0 && l.scrollInertia < 17
                              ? 17
                              : l.scrollInertia;
                        (c[0] = U.call(this, c[0], "y")),
                          (c[1] = U.call(this, c[1], "x")),
                          l.moveDragger &&
                            ((c[0] *= a.scrollRatio.y),
                            (c[1] *= a.scrollRatio.x)),
                          (l.dur = se() ? 0 : d),
                          setTimeout(function () {
                            null !== c[0] &&
                              void 0 !== c[0] &&
                              "x" !== o.axis &&
                              a.overflowed[0] &&
                              ((l.dir = "y"),
                              (l.overwrite = "all"),
                              G(s, c[0].toString(), l)),
                              null !== c[1] &&
                                void 0 !== c[1] &&
                                "y" !== o.axis &&
                                a.overflowed[1] &&
                                ((l.dir = "x"),
                                (l.overwrite = "none"),
                                G(s, c[1].toString(), l));
                          }, l.timeout);
                      }
                    });
                  }
                },
                stop: function () {
                  var e = h.call(this);
                  return t(e).each(function () {
                    var e = t(this);
                    e.data(n) && K(e);
                  });
                },
                disable: function (e) {
                  var i = h.call(this);
                  return t(i).each(function () {
                    var i = t(this);
                    i.data(n) &&
                      (i.data(n),
                      V.call(this, "remove"),
                      D.call(this),
                      e && x.call(this),
                      E.call(this, !0),
                      i.addClass(d[3]));
                  });
                },
                destroy: function () {
                  var e = h.call(this);
                  return t(e).each(function () {
                    var s = t(this);
                    if (s.data(n)) {
                      var a = s.data(n),
                        o = a.opt,
                        r = t("#mCSB_" + a.idx),
                        l = t("#mCSB_" + a.idx + "_container"),
                        c = t(".mCSB_" + a.idx + "_scrollbar");
                      o.live && f(o.liveSelector || t(e).selector),
                        V.call(this, "remove"),
                        D.call(this),
                        x.call(this),
                        s.removeData(n),
                        Z(this, "mcs"),
                        c.remove(),
                        l.find("img." + d[2]).removeClass(d[2]),
                        r.replaceWith(l.contents()),
                        s
                          .removeClass(
                            i +
                              " _" +
                              n +
                              "_" +
                              a.idx +
                              " " +
                              d[6] +
                              " " +
                              d[7] +
                              " " +
                              d[5] +
                              " " +
                              d[3]
                          )
                          .addClass(d[4]);
                    }
                  });
                },
              },
              h = function () {
                return "object" != typeof t(this) || t(this).length < 1
                  ? s
                  : this;
              },
              p = function (e) {
                var i = [
                    "rounded",
                    "rounded-dark",
                    "rounded-dots",
                    "rounded-dots-dark",
                  ],
                  n = [
                    "rounded-dots",
                    "rounded-dots-dark",
                    "3d",
                    "3d-dark",
                    "3d-thick",
                    "3d-thick-dark",
                    "inset",
                    "inset-dark",
                    "inset-2",
                    "inset-2-dark",
                    "inset-3",
                    "inset-3-dark",
                  ],
                  s = ["minimal", "minimal-dark"],
                  a = ["minimal", "minimal-dark"],
                  o = ["minimal", "minimal-dark"];
                (e.autoDraggerLength =
                  !(t.inArray(e.theme, i) > -1) && e.autoDraggerLength),
                  (e.autoExpandScrollbar =
                    !(t.inArray(e.theme, n) > -1) && e.autoExpandScrollbar),
                  (e.scrollButtons.enable =
                    !(t.inArray(e.theme, s) > -1) && e.scrollButtons.enable),
                  (e.autoHideScrollbar =
                    t.inArray(e.theme, a) > -1 || e.autoHideScrollbar),
                  (e.scrollbarPosition =
                    t.inArray(e.theme, o) > -1
                      ? "outside"
                      : e.scrollbarPosition);
              },
              f = function (e) {
                r[e] && (clearTimeout(r[e]), Z(r, e));
              },
              m = function (e) {
                return "yx" === e || "xy" === e || "auto" === e
                  ? "yx"
                  : "x" === e || "horizontal" === e
                  ? "x"
                  : "y";
              },
              g = function (e) {
                return "stepped" === e ||
                  "pixels" === e ||
                  "step" === e ||
                  "click" === e
                  ? "stepped"
                  : "stepless";
              },
              v = function () {
                var e = t(this),
                  s = e.data(n),
                  a = s.opt,
                  o = a.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                  r = [
                    "<div id='mCSB_" +
                      s.idx +
                      "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
                      s.idx +
                      "_scrollbar mCS-" +
                      a.theme +
                      " mCSB_scrollTools_vertical" +
                      o +
                      "'><div class='" +
                      d[12] +
                      "'><div id='mCSB_" +
                      s.idx +
                      "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                    "<div id='mCSB_" +
                      s.idx +
                      "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
                      s.idx +
                      "_scrollbar mCS-" +
                      a.theme +
                      " mCSB_scrollTools_horizontal" +
                      o +
                      "'><div class='" +
                      d[12] +
                      "'><div id='mCSB_" +
                      s.idx +
                      "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                  ],
                  l =
                    "yx" === a.axis
                      ? "mCSB_vertical_horizontal"
                      : "x" === a.axis
                      ? "mCSB_horizontal"
                      : "mCSB_vertical",
                  c =
                    "yx" === a.axis
                      ? r[0] + r[1]
                      : "x" === a.axis
                      ? r[1]
                      : r[0],
                  u =
                    "yx" === a.axis
                      ? "<div id='mCSB_" +
                        s.idx +
                        "_container_wrapper' class='mCSB_container_wrapper' />"
                      : "",
                  h = a.autoHideScrollbar ? " " + d[6] : "",
                  p = "x" !== a.axis && "rtl" === s.langDir ? " " + d[7] : "";
                a.setWidth && e.css("width", a.setWidth),
                  a.setHeight && e.css("height", a.setHeight),
                  (a.setLeft =
                    "y" !== a.axis && "rtl" === s.langDir
                      ? "989999px"
                      : a.setLeft),
                  e
                    .addClass(i + " _" + n + "_" + s.idx + h + p)
                    .wrapInner(
                      "<div id='mCSB_" +
                        s.idx +
                        "' class='mCustomScrollBox mCS-" +
                        a.theme +
                        " " +
                        l +
                        "'><div id='mCSB_" +
                        s.idx +
                        "_container' class='mCSB_container' style='position:relative; top:" +
                        a.setTop +
                        "; left:" +
                        a.setLeft +
                        ";' dir='" +
                        s.langDir +
                        "' /></div>"
                    );
                var f = t("#mCSB_" + s.idx),
                  m = t("#mCSB_" + s.idx + "_container");
                "y" === a.axis ||
                  a.advanced.autoExpandHorizontalScroll ||
                  m.css("width", _(m)),
                  "outside" === a.scrollbarPosition
                    ? ("static" === e.css("position") &&
                        e.css("position", "relative"),
                      e.css("overflow", "visible"),
                      f.addClass("mCSB_outside").after(c))
                    : (f.addClass("mCSB_inside").append(c), m.wrap(u)),
                  b.call(this);
                var g = [
                  t("#mCSB_" + s.idx + "_dragger_vertical"),
                  t("#mCSB_" + s.idx + "_dragger_horizontal"),
                ];
                g[0].css("min-height", g[0].height()),
                  g[1].css("min-width", g[1].width());
              },
              _ = function (e) {
                var i = [
                    e[0].scrollWidth,
                    Math.max.apply(
                      Math,
                      e
                        .children()
                        .map(function () {
                          return t(this).outerWidth(!0);
                        })
                        .get()
                    ),
                  ],
                  n = e.parent().width();
                return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%";
              },
              y = function () {
                var e = t(this).data(n),
                  i = e.opt,
                  s = t("#mCSB_" + e.idx + "_container");
                if (i.advanced.autoExpandHorizontalScroll && "y" !== i.axis) {
                  s.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll",
                  });
                  var a = Math.ceil(s[0].scrollWidth);
                  3 === i.advanced.autoExpandHorizontalScroll ||
                  (2 !== i.advanced.autoExpandHorizontalScroll &&
                    a > s.parent().width())
                    ? s.css({
                        width: a,
                        "min-width": "100%",
                        "overflow-x": "inherit",
                      })
                    : s
                        .css({
                          "overflow-x": "inherit",
                          position: "absolute",
                        })
                        .wrap(
                          "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                        )
                        .css({
                          width:
                            Math.ceil(
                              s[0].getBoundingClientRect().right + 0.4
                            ) - Math.floor(s[0].getBoundingClientRect().left),
                          "min-width": "100%",
                          position: "relative",
                        })
                        .unwrap();
                }
              },
              b = function () {
                var e = t(this).data(n),
                  i = e.opt,
                  s = t(".mCSB_" + e.idx + "_scrollbar:first"),
                  a = ie(i.scrollButtons.tabindex)
                    ? "tabindex='" + i.scrollButtons.tabindex + "'"
                    : "",
                  o = [
                    "<a href='#' class='" + d[13] + "' " + a + " />",
                    "<a href='#' class='" + d[14] + "' " + a + " />",
                    "<a href='#' class='" + d[15] + "' " + a + " />",
                    "<a href='#' class='" + d[16] + "' " + a + " />",
                  ],
                  r = [
                    "x" === i.axis ? o[2] : o[0],
                    "x" === i.axis ? o[3] : o[1],
                    o[2],
                    o[3],
                  ];
                i.scrollButtons.enable &&
                  s
                    .prepend(r[0])
                    .append(r[1])
                    .next(".mCSB_scrollTools")
                    .prepend(r[2])
                    .append(r[3]);
              },
              w = function () {
                var e = t(this).data(n),
                  i = t("#mCSB_" + e.idx),
                  s = t("#mCSB_" + e.idx + "_container"),
                  a = [
                    t("#mCSB_" + e.idx + "_dragger_vertical"),
                    t("#mCSB_" + e.idx + "_dragger_horizontal"),
                  ],
                  o = [
                    i.height() / s.outerHeight(!1),
                    i.width() / s.outerWidth(!1),
                  ],
                  r = [
                    parseInt(a[0].css("min-height")),
                    Math.round(o[0] * a[0].parent().height()),
                    parseInt(a[1].css("min-width")),
                    Math.round(o[1] * a[1].parent().width()),
                  ],
                  c = l && r[1] < r[0] ? r[0] : r[1],
                  d = l && r[3] < r[2] ? r[2] : r[3];
                a[0]
                  .css({
                    height: c,
                    "max-height": a[0].parent().height() - 10,
                  })
                  .find(".mCSB_dragger_bar")
                  .css({
                    "line-height": r[0] + "px",
                  }),
                  a[1].css({
                    width: d,
                    "max-width": a[1].parent().width() - 10,
                  });
              },
              S = function () {
                var e = t(this).data(n),
                  i = t("#mCSB_" + e.idx),
                  s = t("#mCSB_" + e.idx + "_container"),
                  a = [
                    t("#mCSB_" + e.idx + "_dragger_vertical"),
                    t("#mCSB_" + e.idx + "_dragger_horizontal"),
                  ],
                  o = [
                    s.outerHeight(!1) - i.height(),
                    s.outerWidth(!1) - i.width(),
                  ],
                  r = [
                    o[0] / (a[0].parent().height() - a[0].height()),
                    o[1] / (a[1].parent().width() - a[1].width()),
                  ];
                e.scrollRatio = {
                  y: r[0],
                  x: r[1],
                };
              },
              k = function (e, t, i) {
                var n = i ? d[0] + "_expanded" : "",
                  s = e.closest(".mCSB_scrollTools");
                "active" === t
                  ? (e.toggleClass(d[0] + " " + n),
                    s.toggleClass(d[1]),
                    (e[0]._draggable = e[0]._draggable ? 0 : 1))
                  : e[0]._draggable ||
                    ("hide" === t
                      ? (e.removeClass(d[0]), s.removeClass(d[1]))
                      : (e.addClass(d[0]), s.addClass(d[1])));
              },
              C = function () {
                var e = t(this).data(n),
                  i = t("#mCSB_" + e.idx),
                  s = t("#mCSB_" + e.idx + "_container"),
                  a = null == e.overflowed ? s.height() : s.outerHeight(!1),
                  o = null == e.overflowed ? s.width() : s.outerWidth(!1),
                  r = s[0].scrollHeight,
                  l = s[0].scrollWidth;
                return (
                  r > a && (a = r),
                  l > o && (o = l),
                  [a > i.height(), o > i.width()]
                );
              },
              x = function () {
                var e = t(this),
                  i = e.data(n),
                  s = i.opt,
                  a = t("#mCSB_" + i.idx),
                  o = t("#mCSB_" + i.idx + "_container"),
                  r = [
                    t("#mCSB_" + i.idx + "_dragger_vertical"),
                    t("#mCSB_" + i.idx + "_dragger_horizontal"),
                  ];
                if (
                  (K(e),
                  (("x" !== s.axis && !i.overflowed[0]) ||
                    ("y" === s.axis && i.overflowed[0])) &&
                    (r[0].add(o).css("top", 0), G(e, "_resetY")),
                  ("y" !== s.axis && !i.overflowed[1]) ||
                    ("x" === s.axis && i.overflowed[1]))
                ) {
                  var l = (dx = 0);
                  "rtl" === i.langDir &&
                    ((l = a.width() - o.outerWidth(!1)),
                    (dx = Math.abs(l / i.scrollRatio.x))),
                    o.css("left", l),
                    r[1].css("left", dx),
                    G(e, "_resetX");
                }
              },
              T = function () {
                var e = t(this),
                  i = e.data(n),
                  s = i.opt;
                if (!i.bindEvents) {
                  if (
                    (A.call(this),
                    s.contentTouchScroll && O.call(this),
                    M.call(this),
                    s.mouseWheel.enable)
                  ) {
                    function a() {
                      o = setTimeout(function () {
                        t.event.special.mousewheel
                          ? (clearTimeout(o), N.call(e[0]))
                          : a();
                      }, 100);
                    }
                    var o;
                    a();
                  }
                  $.call(this),
                    F.call(this),
                    s.advanced.autoScrollOnFocus && W.call(this),
                    s.scrollButtons.enable && j.call(this),
                    s.keyboard.enable && B.call(this),
                    (i.bindEvents = !0);
                }
              },
              D = function () {
                var e = t(this),
                  i = e.data(n),
                  s = i.opt,
                  a = n + "_" + i.idx,
                  o = ".mCSB_" + i.idx + "_scrollbar",
                  r = t(
                    "#mCSB_" +
                      i.idx +
                      ",#mCSB_" +
                      i.idx +
                      "_container,#mCSB_" +
                      i.idx +
                      "_container_wrapper," +
                      o +
                      " ." +
                      d[12] +
                      ",#mCSB_" +
                      i.idx +
                      "_dragger_vertical,#mCSB_" +
                      i.idx +
                      "_dragger_horizontal," +
                      o +
                      ">a"
                  ),
                  l = t("#mCSB_" + i.idx + "_container");
                s.advanced.releaseDraggableSelectors &&
                  r.add(t(s.advanced.releaseDraggableSelectors)),
                  s.advanced.extraDraggableSelectors &&
                    r.add(t(s.advanced.extraDraggableSelectors)),
                  i.bindEvents &&
                    (t(document)
                      .add(t(!P() || top.document))
                      .unbind("." + a),
                    r.each(function () {
                      t(this).unbind("." + a);
                    }),
                    clearTimeout(e[0]._focusTimeout),
                    Z(e[0], "_focusTimeout"),
                    clearTimeout(i.sequential.step),
                    Z(i.sequential, "step"),
                    clearTimeout(l[0].onCompleteTimeout),
                    Z(l[0], "onCompleteTimeout"),
                    (i.bindEvents = !1));
              },
              E = function (e) {
                var i = t(this),
                  s = i.data(n),
                  a = s.opt,
                  o = t("#mCSB_" + s.idx + "_container_wrapper"),
                  r = o.length ? o : t("#mCSB_" + s.idx + "_container"),
                  l = [
                    t("#mCSB_" + s.idx + "_scrollbar_vertical"),
                    t("#mCSB_" + s.idx + "_scrollbar_horizontal"),
                  ],
                  c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                "x" !== a.axis &&
                  (s.overflowed[0] && !e
                    ? (l[0]
                        .add(c[0])
                        .add(l[0].children("a"))
                        .css("display", "block"),
                      r.removeClass(d[8] + " " + d[10]))
                    : (a.alwaysShowScrollbar
                        ? (2 !== a.alwaysShowScrollbar &&
                            c[0].css("display", "none"),
                          r.removeClass(d[10]))
                        : (l[0].css("display", "none"), r.addClass(d[10])),
                      r.addClass(d[8]))),
                  "y" !== a.axis &&
                    (s.overflowed[1] && !e
                      ? (l[1]
                          .add(c[1])
                          .add(l[1].children("a"))
                          .css("display", "block"),
                        r.removeClass(d[9] + " " + d[11]))
                      : (a.alwaysShowScrollbar
                          ? (2 !== a.alwaysShowScrollbar &&
                              c[1].css("display", "none"),
                            r.removeClass(d[11]))
                          : (l[1].css("display", "none"), r.addClass(d[11])),
                        r.addClass(d[9]))),
                  s.overflowed[0] || s.overflowed[1]
                    ? i.removeClass(d[5])
                    : i.addClass(d[5]);
              },
              I = function (e) {
                var i = e.type,
                  n =
                    e.target.ownerDocument !== document && null !== frameElement
                      ? [
                          t(frameElement).offset().top,
                          t(frameElement).offset().left,
                        ]
                      : null,
                  s =
                    P() &&
                    e.target.ownerDocument !== top.document &&
                    null !== frameElement
                      ? [
                          t(e.view.frameElement).offset().top,
                          t(e.view.frameElement).offset().left,
                        ]
                      : [0, 0];
                switch (i) {
                  case "pointerdown":
                  case "MSPointerDown":
                  case "pointermove":
                  case "MSPointerMove":
                  case "pointerup":
                  case "MSPointerUp":
                    return n
                      ? [
                          e.originalEvent.pageY - n[0] + s[0],
                          e.originalEvent.pageX - n[1] + s[1],
                          !1,
                        ]
                      : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                  case "touchstart":
                  case "touchmove":
                  case "touchend":
                    var a =
                        e.originalEvent.touches[0] ||
                        e.originalEvent.changedTouches[0],
                      o =
                        e.originalEvent.touches.length ||
                        e.originalEvent.changedTouches.length;
                    return e.target.ownerDocument !== document
                      ? [a.screenY, a.screenX, o > 1]
                      : [a.pageY, a.pageX, o > 1];
                  default:
                    return n
                      ? [e.pageY - n[0] + s[0], e.pageX - n[1] + s[1], !1]
                      : [e.pageY, e.pageX, !1];
                }
              },
              A = function () {
                var e,
                  i,
                  s,
                  a = t(this),
                  o = a.data(n),
                  r = o.opt,
                  d = n + "_" + o.idx,
                  u = [
                    "mCSB_" + o.idx + "_dragger_vertical",
                    "mCSB_" + o.idx + "_dragger_horizontal",
                  ],
                  h = t("#mCSB_" + o.idx + "_container"),
                  p = t("#" + u[0] + ",#" + u[1]),
                  f = r.advanced.releaseDraggableSelectors
                    ? p.add(t(r.advanced.releaseDraggableSelectors))
                    : p,
                  m = r.advanced.extraDraggableSelectors
                    ? t(!P() || top.document).add(
                        t(r.advanced.extraDraggableSelectors)
                      )
                    : t(!P() || top.document);
                function g(t, i, n, s) {
                  if (
                    ((h[0].idleTimer = r.scrollInertia < 233 ? 250 : 0),
                    e.attr("id") === u[1])
                  )
                    var l = "x",
                      c = (e[0].offsetLeft - i + s) * o.scrollRatio.x;
                  else
                    (l = "y"), (c = (e[0].offsetTop - t + n) * o.scrollRatio.y);
                  G(a, c.toString(), {
                    dir: l,
                    drag: !0,
                  });
                }
                p
                  .bind("contextmenu." + d, function (e) {
                    e.preventDefault();
                  })
                  .bind(
                    "mousedown." +
                      d +
                      " touchstart." +
                      d +
                      " pointerdown." +
                      d +
                      " MSPointerDown." +
                      d,
                    function (n) {
                      if (
                        (n.stopImmediatePropagation(),
                        n.preventDefault(),
                        ee(n))
                      ) {
                        (c = !0),
                          l &&
                            (document.onselectstart = function () {
                              return !1;
                            }),
                          R.call(h, !1),
                          K(a);
                        var o = (e = t(this)).offset(),
                          d = I(n)[0] - o.top,
                          u = I(n)[1] - o.left,
                          p = e.height() + o.top,
                          f = e.width() + o.left;
                        d < p && d > 0 && u < f && u > 0 && ((i = d), (s = u)),
                          k(e, "active", r.autoExpandScrollbar);
                      }
                    }
                  )
                  .bind("touchmove." + d, function (t) {
                    t.stopImmediatePropagation(), t.preventDefault();
                    var n = e.offset(),
                      a = I(t)[0] - n.top,
                      o = I(t)[1] - n.left;
                    g(i, s, a, o);
                  }),
                  t(document)
                    .add(m)
                    .bind(
                      "mousemove." +
                        d +
                        " pointermove." +
                        d +
                        " MSPointerMove." +
                        d,
                      function (t) {
                        if (e) {
                          var n = e.offset(),
                            a = I(t)[0] - n.top,
                            o = I(t)[1] - n.left;
                          if (i === a && s === o) return;
                          g(i, s, a, o);
                        }
                      }
                    )
                    .add(f)
                    .bind(
                      "mouseup." +
                        d +
                        " touchend." +
                        d +
                        " pointerup." +
                        d +
                        " MSPointerUp." +
                        d,
                      function (t) {
                        e &&
                          (k(e, "active", r.autoExpandScrollbar), (e = null)),
                          (c = !1),
                          l && (document.onselectstart = null),
                          R.call(h, !0);
                      }
                    );
              },
              O = function () {
                var i,
                  s,
                  a,
                  o,
                  r,
                  l,
                  d,
                  u,
                  h,
                  p,
                  f,
                  m,
                  g,
                  v,
                  _ = t(this),
                  y = _.data(n),
                  b = y.opt,
                  w = n + "_" + y.idx,
                  S = t("#mCSB_" + y.idx),
                  k = t("#mCSB_" + y.idx + "_container"),
                  C = [
                    t("#mCSB_" + y.idx + "_dragger_vertical"),
                    t("#mCSB_" + y.idx + "_dragger_horizontal"),
                  ],
                  x = [],
                  T = [],
                  D = 0,
                  E = "yx" === b.axis ? "none" : "all",
                  A = [],
                  O = k.find("iframe"),
                  M = [
                    "touchstart." +
                      w +
                      " pointerdown." +
                      w +
                      " MSPointerDown." +
                      w,
                    "touchmove." +
                      w +
                      " pointermove." +
                      w +
                      " MSPointerMove." +
                      w,
                    "touchend." + w + " pointerup." + w + " MSPointerUp." + w,
                  ],
                  N =
                    void 0 !== document.body.style.touchAction &&
                    "" !== document.body.style.touchAction;
                function L(t) {
                  if (!te(t) || c || I(t)[2]) e = 0;
                  else {
                    (e = 1),
                      (g = 0),
                      (v = 0),
                      (i = 1),
                      _.removeClass("mCS_touch_action");
                    var n = k.offset();
                    (s = I(t)[0] - n.top),
                      (a = I(t)[1] - n.left),
                      (A = [I(t)[0], I(t)[1]]);
                  }
                }
                function R(e) {
                  if (
                    te(e) &&
                    !c &&
                    !I(e)[2] &&
                    (b.documentTouchScroll || e.preventDefault(),
                    e.stopImmediatePropagation(),
                    (!v || g) && i)
                  ) {
                    d = Q();
                    var t = S.offset(),
                      n = I(e)[0] - t.top,
                      o = I(e)[1] - t.left,
                      r = "mcsLinearOut";
                    if (
                      (x.push(n),
                      T.push(o),
                      (A[2] = Math.abs(I(e)[0] - A[0])),
                      (A[3] = Math.abs(I(e)[1] - A[1])),
                      y.overflowed[0])
                    )
                      var l = C[0].parent().height() - C[0].height(),
                        u =
                          s - n > 0 &&
                          n - s > -l * y.scrollRatio.y &&
                          (2 * A[3] < A[2] || "yx" === b.axis);
                    if (y.overflowed[1])
                      var h = C[1].parent().width() - C[1].width(),
                        p =
                          a - o > 0 &&
                          o - a > -h * y.scrollRatio.x &&
                          (2 * A[2] < A[3] || "yx" === b.axis);
                    u || p
                      ? (N || e.preventDefault(), (g = 1))
                      : ((v = 1), _.addClass("mCS_touch_action")),
                      N && e.preventDefault(),
                      (f =
                        "yx" === b.axis
                          ? [s - n, a - o]
                          : "x" === b.axis
                          ? [null, a - o]
                          : [s - n, null]),
                      (k[0].idleTimer = 250),
                      y.overflowed[0] && F(f[0], D, r, "y", "all", !0),
                      y.overflowed[1] && F(f[1], D, r, "x", E, !0);
                  }
                }
                function H(t) {
                  if (!te(t) || c || I(t)[2]) e = 0;
                  else {
                    (e = 1), t.stopImmediatePropagation(), K(_), (l = Q());
                    var i = S.offset();
                    (o = I(t)[0] - i.top),
                      (r = I(t)[1] - i.left),
                      (x = []),
                      (T = []);
                  }
                }
                function $(e) {
                  if (te(e) && !c && !I(e)[2]) {
                    (i = 0),
                      e.stopImmediatePropagation(),
                      (g = 0),
                      (v = 0),
                      (u = Q());
                    var t = S.offset(),
                      n = I(e)[0] - t.top,
                      s = I(e)[1] - t.left;
                    if (!(u - d > 30)) {
                      var a = "mcsEaseOut",
                        _ = (p = 1e3 / (u - l)) < 2.5,
                        w = _ ? [x[x.length - 2], T[T.length - 2]] : [0, 0];
                      h = _ ? [n - w[0], s - w[1]] : [n - o, s - r];
                      var C = [Math.abs(h[0]), Math.abs(h[1])];
                      p = _ ? [Math.abs(h[0] / 4), Math.abs(h[1] / 4)] : [p, p];
                      var D = [
                        Math.abs(k[0].offsetTop) - h[0] * W(C[0] / p[0], p[0]),
                        Math.abs(k[0].offsetLeft) - h[1] * W(C[1] / p[1], p[1]),
                      ];
                      (f =
                        "yx" === b.axis
                          ? [D[0], D[1]]
                          : "x" === b.axis
                          ? [null, D[1]]
                          : [D[0], null]),
                        (m = [
                          4 * C[0] + b.scrollInertia,
                          4 * C[1] + b.scrollInertia,
                        ]);
                      var A = parseInt(b.contentTouchScroll) || 0;
                      (f[0] = C[0] > A ? f[0] : 0),
                        (f[1] = C[1] > A ? f[1] : 0),
                        y.overflowed[0] && F(f[0], m[0], a, "y", E, !1),
                        y.overflowed[1] && F(f[1], m[1], a, "x", E, !1);
                    }
                  }
                }
                function W(e, t) {
                  var i = [1.5 * t, 2 * t, t / 1.5, t / 2];
                  return e > 90
                    ? t > 4
                      ? i[0]
                      : i[3]
                    : e > 60
                    ? t > 3
                      ? i[3]
                      : i[2]
                    : e > 30
                    ? t > 8
                      ? i[1]
                      : t > 6
                      ? i[0]
                      : t > 4
                      ? t
                      : i[2]
                    : t > 8
                    ? t
                    : i[3];
                }
                function F(e, t, i, n, s, a) {
                  e &&
                    G(_, e.toString(), {
                      dur: t,
                      scrollEasing: i,
                      dir: n,
                      overwrite: s,
                      drag: a,
                    });
                }
                k
                  .bind(M[0], function (e) {
                    L(e);
                  })
                  .bind(M[1], function (e) {
                    R(e);
                  }),
                  S.bind(M[0], function (e) {
                    H(e);
                  }).bind(M[2], function (e) {
                    $(e);
                  }),
                  O.length &&
                    O.each(function () {
                      t(this).bind("load", function () {
                        P(this) &&
                          t(this.contentDocument || this.contentWindow.document)
                            .bind(M[0], function (e) {
                              L(e), H(e);
                            })
                            .bind(M[1], function (e) {
                              R(e);
                            })
                            .bind(M[2], function (e) {
                              $(e);
                            });
                      });
                    });
              },
              M = function () {
                var i,
                  s = t(this),
                  a = s.data(n),
                  o = a.opt,
                  r = a.sequential,
                  l = n + "_" + a.idx,
                  d = t("#mCSB_" + a.idx + "_container"),
                  u = d.parent();
                function h() {
                  return window.getSelection
                    ? window.getSelection().toString()
                    : document.selection && "Control" != document.selection.type
                    ? document.selection.createRange().text
                    : 0;
                }
                function p(e, t, n) {
                  (r.type = n && i ? "stepped" : "stepless"),
                    (r.scrollAmount = 10),
                    z(s, e, t, "mcsLinearOut", n ? 60 : null);
                }
                d.bind("mousedown." + l, function (t) {
                  e || i || ((i = 1), (c = !0));
                })
                  .add(document)
                  .bind("mousemove." + l, function (t) {
                    if (!e && i && h()) {
                      var n = d.offset(),
                        s = I(t)[0] - n.top + d[0].offsetTop,
                        l = I(t)[1] - n.left + d[0].offsetLeft;
                      s > 0 && s < u.height() && l > 0 && l < u.width()
                        ? r.step && p("off", null, "stepped")
                        : ("x" !== o.axis &&
                            a.overflowed[0] &&
                            (s < 0
                              ? p("on", 38)
                              : s > u.height() && p("on", 40)),
                          "y" !== o.axis &&
                            a.overflowed[1] &&
                            (l < 0
                              ? p("on", 37)
                              : l > u.width() && p("on", 39)));
                    }
                  })
                  .bind("mouseup." + l + " dragend." + l, function (t) {
                    e || (i && ((i = 0), p("off", null)), (c = !1));
                  });
              },
              N = function () {
                if (t(this).data(n)) {
                  var e = t(this),
                    i = e.data(n),
                    s = i.opt,
                    a = n + "_" + i.idx,
                    o = t("#mCSB_" + i.idx),
                    r = [
                      t("#mCSB_" + i.idx + "_dragger_vertical"),
                      t("#mCSB_" + i.idx + "_dragger_horizontal"),
                    ],
                    c = t("#mCSB_" + i.idx + "_container").find("iframe");
                  c.length &&
                    c.each(function () {
                      t(this).bind("load", function () {
                        P(this) &&
                          t(
                            this.contentDocument || this.contentWindow.document
                          ).bind("mousewheel." + a, function (e, t) {
                            d(e, t);
                          });
                      });
                    }),
                    o.bind("mousewheel." + a, function (e, t) {
                      d(e, t);
                    });
                }
                function d(n, a) {
                  if ((K(e), !H(e, n.target))) {
                    var c =
                        "auto" !== s.mouseWheel.deltaFactor
                          ? parseInt(s.mouseWheel.deltaFactor)
                          : l && n.deltaFactor < 100
                          ? 100
                          : n.deltaFactor || 100,
                      d = s.scrollInertia;
                    if ("x" === s.axis || "x" === s.mouseWheel.axis)
                      var u = "x",
                        h = [
                          Math.round(c * i.scrollRatio.x),
                          parseInt(s.mouseWheel.scrollAmount),
                        ],
                        p =
                          "auto" !== s.mouseWheel.scrollAmount
                            ? h[1]
                            : h[0] >= o.width()
                            ? 0.9 * o.width()
                            : h[0],
                        f = Math.abs(
                          t("#mCSB_" + i.idx + "_container")[0].offsetLeft
                        ),
                        m = r[1][0].offsetLeft,
                        g = r[1].parent().width() - r[1].width(),
                        v =
                          "y" === s.mouseWheel.axis ? n.deltaY || a : n.deltaX;
                    else
                      (u = "y"),
                        (h = [
                          Math.round(c * i.scrollRatio.y),
                          parseInt(s.mouseWheel.scrollAmount),
                        ]),
                        (p =
                          "auto" !== s.mouseWheel.scrollAmount
                            ? h[1]
                            : h[0] >= o.height()
                            ? 0.9 * o.height()
                            : h[0]),
                        (f = Math.abs(
                          t("#mCSB_" + i.idx + "_container")[0].offsetTop
                        )),
                        (m = r[0][0].offsetTop),
                        (g = r[0].parent().height() - r[0].height()),
                        (v = n.deltaY || a);
                    ("y" === u && !i.overflowed[0]) ||
                      ("x" === u && !i.overflowed[1]) ||
                      ((s.mouseWheel.invert ||
                        n.webkitDirectionInvertedFromDevice) &&
                        (v = -v),
                      s.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1),
                      ((v > 0 && 0 !== m) ||
                        (v < 0 && m !== g) ||
                        s.mouseWheel.preventDefault) &&
                        (n.stopImmediatePropagation(), n.preventDefault()),
                      n.deltaFactor < 5 &&
                        !s.mouseWheel.normalizeDelta &&
                        ((p = n.deltaFactor), (d = 17)),
                      G(e, (f - v * p).toString(), {
                        dir: u,
                        dur: d,
                      }));
                  }
                }
              },
              L = new Object(),
              P = function (e) {
                var i = !1,
                  n = !1,
                  s = null;
                if (
                  (void 0 === e
                    ? (n = "#empty")
                    : void 0 !== t(e).attr("id") && (n = t(e).attr("id")),
                  !1 !== n && void 0 !== L[n])
                )
                  return L[n];
                if (e) {
                  try {
                    s = (e.contentDocument || e.contentWindow.document).body
                      .innerHTML;
                  } catch (e) {}
                  i = null !== s;
                } else {
                  try {
                    s = top.document.body.innerHTML;
                  } catch (e) {}
                  i = null !== s;
                }
                return !1 !== n && (L[n] = i), i;
              },
              R = function (e) {
                var t = this.find("iframe");
                if (t.length) {
                  var i = e ? "auto" : "none";
                  t.css("pointer-events", i);
                }
              },
              H = function (e, i) {
                var s = i.nodeName.toLowerCase(),
                  a = e.data(n).opt.mouseWheel.disableOver,
                  o = ["select", "textarea"];
                return (
                  t.inArray(s, a) > -1 &&
                  !(t.inArray(s, o) > -1 && !t(i).is(":focus"))
                );
              },
              $ = function () {
                var e,
                  i = t(this),
                  s = i.data(n),
                  a = n + "_" + s.idx,
                  o = t("#mCSB_" + s.idx + "_container"),
                  r = o.parent();
                t(".mCSB_" + s.idx + "_scrollbar ." + d[12])
                  .bind(
                    "mousedown." +
                      a +
                      " touchstart." +
                      a +
                      " pointerdown." +
                      a +
                      " MSPointerDown." +
                      a,
                    function (i) {
                      (c = !0), t(i.target).hasClass("mCSB_dragger") || (e = 1);
                    }
                  )
                  .bind(
                    "touchend." + a + " pointerup." + a + " MSPointerUp." + a,
                    function (e) {
                      c = !1;
                    }
                  )
                  .bind("click." + a, function (n) {
                    if (
                      e &&
                      ((e = 0),
                      t(n.target).hasClass(d[12]) ||
                        t(n.target).hasClass("mCSB_draggerRail"))
                    ) {
                      K(i);
                      var a = t(this),
                        l = a.find(".mCSB_dragger");
                      if (a.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!s.overflowed[1]) return;
                        var c = "x",
                          u = n.pageX > l.offset().left ? -1 : 1,
                          h = Math.abs(o[0].offsetLeft) - u * (0.9 * r.width());
                      } else {
                        if (!s.overflowed[0]) return;
                        (c = "y"),
                          (u = n.pageY > l.offset().top ? -1 : 1),
                          (h =
                            Math.abs(o[0].offsetTop) - u * (0.9 * r.height()));
                      }
                      G(i, h.toString(), {
                        dir: c,
                        scrollEasing: "mcsEaseInOut",
                      });
                    }
                  });
              },
              W = function () {
                var e = t(this),
                  i = e.data(n),
                  s = i.opt,
                  a = n + "_" + i.idx,
                  o = t("#mCSB_" + i.idx + "_container"),
                  r = o.parent();
                o.bind("focusin." + a, function (i) {
                  var n = t(document.activeElement),
                    a = o.find(".mCustomScrollBox").length,
                    l = 0;
                  n.is(s.advanced.autoScrollOnFocus) &&
                    (K(e),
                    clearTimeout(e[0]._focusTimeout),
                    (e[0]._focusTimer = a ? (l + 17) * a : 0),
                    (e[0]._focusTimeout = setTimeout(function () {
                      var t = [ne(n)[0], ne(n)[1]],
                        i = [o[0].offsetTop, o[0].offsetLeft],
                        a = [
                          i[0] + t[0] >= 0 &&
                            i[0] + t[0] < r.height() - n.outerHeight(!1),
                          i[1] + t[1] >= 0 &&
                            i[0] + t[1] < r.width() - n.outerWidth(!1),
                        ],
                        c = "yx" !== s.axis || a[0] || a[1] ? "all" : "none";
                      "x" === s.axis ||
                        a[0] ||
                        G(e, t[0].toString(), {
                          dir: "y",
                          scrollEasing: "mcsEaseInOut",
                          overwrite: c,
                          dur: l,
                        }),
                        "y" === s.axis ||
                          a[1] ||
                          G(e, t[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: l,
                          });
                    }, e[0]._focusTimer)));
                });
              },
              F = function () {
                var e = t(this).data(n),
                  i = n + "_" + e.idx,
                  s = t("#mCSB_" + e.idx + "_container").parent();
                s.bind("scroll." + i, function (i) {
                  (0 === s.scrollTop() && 0 === s.scrollLeft()) ||
                    t(".mCSB_" + e.idx + "_scrollbar").css(
                      "visibility",
                      "hidden"
                    );
                });
              },
              j = function () {
                var e = t(this),
                  i = e.data(n),
                  s = i.opt,
                  a = i.sequential,
                  o = n + "_" + i.idx,
                  r = ".mCSB_" + i.idx + "_scrollbar";
                t(r + ">a")
                  .bind("contextmenu." + o, function (e) {
                    e.preventDefault();
                  })
                  .bind(
                    "mousedown." +
                      o +
                      " touchstart." +
                      o +
                      " pointerdown." +
                      o +
                      " MSPointerDown." +
                      o +
                      " mouseup." +
                      o +
                      " touchend." +
                      o +
                      " pointerup." +
                      o +
                      " MSPointerUp." +
                      o +
                      " mouseout." +
                      o +
                      " pointerout." +
                      o +
                      " MSPointerOut." +
                      o +
                      " click." +
                      o,
                    function (n) {
                      if ((n.preventDefault(), ee(n))) {
                        var o = t(this).attr("class");
                        switch (
                          ((a.type = s.scrollButtons.scrollType), n.type)
                        ) {
                          case "mousedown":
                          case "touchstart":
                          case "pointerdown":
                          case "MSPointerDown":
                            if ("stepped" === a.type) return;
                            (c = !0), (i.tweenRunning = !1), r("on", o);
                            break;
                          case "mouseup":
                          case "touchend":
                          case "pointerup":
                          case "MSPointerUp":
                          case "mouseout":
                          case "pointerout":
                          case "MSPointerOut":
                            if ("stepped" === a.type) return;
                            (c = !1), a.dir && r("off", o);
                            break;
                          case "click":
                            if ("stepped" !== a.type || i.tweenRunning) return;
                            r("on", o);
                        }
                      }
                      function r(t, i) {
                        (a.scrollAmount = s.scrollButtons.scrollAmount),
                          z(e, t, i);
                      }
                    }
                  );
              },
              B = function () {
                var e = t(this),
                  i = e.data(n),
                  s = i.opt,
                  a = i.sequential,
                  o = n + "_" + i.idx,
                  r = t("#mCSB_" + i.idx),
                  l = t("#mCSB_" + i.idx + "_container"),
                  c = l.parent(),
                  d =
                    "input,textarea,select,datalist,keygen,[contenteditable='true']",
                  u = l.find("iframe"),
                  h = ["blur." + o + " keydown." + o + " keyup." + o];
                function p(n) {
                  switch (n.type) {
                    case "blur":
                      i.tweenRunning && a.dir && f("off", null);
                      break;
                    case "keydown":
                    case "keyup":
                      var o = n.keyCode ? n.keyCode : n.which,
                        r = "on";
                      if (
                        ("x" !== s.axis && (38 === o || 40 === o)) ||
                        ("y" !== s.axis && (37 === o || 39 === o))
                      ) {
                        if (
                          ((38 === o || 40 === o) && !i.overflowed[0]) ||
                          ((37 === o || 39 === o) && !i.overflowed[1])
                        )
                          return;
                        "keyup" === n.type && (r = "off"),
                          t(document.activeElement).is(d) ||
                            (n.preventDefault(),
                            n.stopImmediatePropagation(),
                            f(r, o));
                      } else if (33 === o || 34 === o) {
                        if (
                          ((i.overflowed[0] || i.overflowed[1]) &&
                            (n.preventDefault(), n.stopImmediatePropagation()),
                          "keyup" === n.type)
                        ) {
                          K(e);
                          var u = 34 === o ? -1 : 1;
                          if (
                            "x" === s.axis ||
                            ("yx" === s.axis &&
                              i.overflowed[1] &&
                              !i.overflowed[0])
                          )
                            var h = "x",
                              p =
                                Math.abs(l[0].offsetLeft) -
                                u * (0.9 * c.width());
                          else
                            (h = "y"),
                              (p =
                                Math.abs(l[0].offsetTop) -
                                u * (0.9 * c.height()));
                          G(e, p.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut",
                          });
                        }
                      } else
                        (35 !== o && 36 !== o) ||
                          t(document.activeElement).is(d) ||
                          ((i.overflowed[0] || i.overflowed[1]) &&
                            (n.preventDefault(), n.stopImmediatePropagation()),
                          "keyup" !== n.type) ||
                          ("x" === s.axis ||
                          ("yx" === s.axis &&
                            i.overflowed[1] &&
                            !i.overflowed[0])
                            ? ((h = "x"),
                              (p =
                                35 === o
                                  ? Math.abs(c.width() - l.outerWidth(!1))
                                  : 0))
                            : ((h = "y"),
                              (p =
                                35 === o
                                  ? Math.abs(c.height() - l.outerHeight(!1))
                                  : 0)),
                          G(e, p.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut",
                          }));
                  }
                  function f(t, n) {
                    (a.type = s.keyboard.scrollType),
                      (a.scrollAmount = s.keyboard.scrollAmount),
                      ("stepped" === a.type && i.tweenRunning) || z(e, t, n);
                  }
                }
                u.length &&
                  u.each(function () {
                    t(this).bind("load", function () {
                      P(this) &&
                        t(
                          this.contentDocument || this.contentWindow.document
                        ).bind(h[0], function (e) {
                          p(e);
                        });
                    });
                  }),
                  r.attr("tabindex", "0").bind(h[0], function (e) {
                    p(e);
                  });
              },
              z = function (e, i, s, a, o) {
                var r = e.data(n),
                  l = r.opt,
                  c = r.sequential,
                  u = t("#mCSB_" + r.idx + "_container"),
                  h = "stepped" === c.type,
                  p = l.scrollInertia < 26 ? 26 : l.scrollInertia,
                  f = l.scrollInertia < 1 ? 17 : l.scrollInertia;
                switch (i) {
                  case "on":
                    if (
                      ((c.dir = [
                        s === d[16] || s === d[15] || 39 === s || 37 === s
                          ? "x"
                          : "y",
                        s === d[13] || s === d[15] || 38 === s || 37 === s
                          ? -1
                          : 1,
                      ]),
                      K(e),
                      ie(s) && "stepped" === c.type)
                    )
                      return;
                    m(h);
                    break;
                  case "off":
                    g(), (h || (r.tweenRunning && c.dir)) && m(!0);
                }
                function m(t) {
                  l.snapAmount &&
                    (c.scrollAmount =
                      l.snapAmount instanceof Array
                        ? "x" === c.dir[0]
                          ? l.snapAmount[1]
                          : l.snapAmount[0]
                        : l.snapAmount);
                  var i = "stepped" !== c.type,
                    n = o || (t ? (i ? p / 1.5 : f) : 1e3 / 60),
                    s = t ? (i ? 7.5 : 40) : 2.5,
                    d = [Math.abs(u[0].offsetTop), Math.abs(u[0].offsetLeft)],
                    h = [
                      r.scrollRatio.y > 10 ? 10 : r.scrollRatio.y,
                      r.scrollRatio.x > 10 ? 10 : r.scrollRatio.x,
                    ],
                    g =
                      "x" === c.dir[0]
                        ? d[1] + c.dir[1] * (h[1] * s)
                        : d[0] + c.dir[1] * (h[0] * s),
                    v =
                      "x" === c.dir[0]
                        ? d[1] + c.dir[1] * parseInt(c.scrollAmount)
                        : d[0] + c.dir[1] * parseInt(c.scrollAmount),
                    _ = "auto" !== c.scrollAmount ? v : g,
                    y =
                      a ||
                      (t ? (i ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear"),
                    b = !!t;
                  t && n < 17 && (_ = "x" === c.dir[0] ? d[1] : d[0]),
                    G(e, _.toString(), {
                      dir: c.dir[0],
                      scrollEasing: y,
                      dur: n,
                      onComplete: b,
                    }),
                    t
                      ? (c.dir = !1)
                      : (clearTimeout(c.step),
                        (c.step = setTimeout(function () {
                          m();
                        }, n)));
                }
                function g() {
                  clearTimeout(c.step), Z(c, "step"), K(e);
                }
              },
              q = function (e) {
                var i = t(this).data(n).opt,
                  s = [];
                return (
                  "function" == typeof e && (e = e()),
                  e instanceof Array
                    ? (s =
                        e.length > 1
                          ? [e[0], e[1]]
                          : "x" === i.axis
                          ? [null, e[0]]
                          : [e[0], null])
                    : ((s[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e),
                      (s[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e)),
                  "function" == typeof s[0] && (s[0] = s[0]()),
                  "function" == typeof s[1] && (s[1] = s[1]()),
                  s
                );
              },
              U = function (e, i) {
                if (null != e && void 0 !== e) {
                  var s = t(this),
                    a = s.data(n),
                    o = a.opt,
                    r = t("#mCSB_" + a.idx + "_container"),
                    l = r.parent(),
                    c = typeof e;
                  i || (i = "x" === o.axis ? "x" : "y");
                  var d =
                      "x" === i
                        ? r.outerWidth(!1) - l.width()
                        : r.outerHeight(!1) - l.height(),
                    h = "x" === i ? r[0].offsetLeft : r[0].offsetTop,
                    p = "x" === i ? "left" : "top";
                  switch (c) {
                    case "function":
                      return e();
                    case "object":
                      if (!(m = e.jquery ? e : t(e)).length) return;
                      return "x" === i ? ne(m)[1] : ne(m)[0];
                    case "string":
                    case "number":
                      if (ie(e)) return Math.abs(e);
                      if (-1 !== e.indexOf("%"))
                        return Math.abs((d * parseInt(e)) / 100);
                      if (-1 !== e.indexOf("-="))
                        return Math.abs(h - parseInt(e.split("-=")[1]));
                      if (-1 !== e.indexOf("+=")) {
                        var f = h + parseInt(e.split("+=")[1]);
                        return f >= 0 ? 0 : Math.abs(f);
                      }
                      if (-1 !== e.indexOf("px") && ie(e.split("px")[0]))
                        return Math.abs(e.split("px")[0]);
                      if ("top" === e || "left" === e) return 0;
                      if ("bottom" === e)
                        return Math.abs(l.height() - r.outerHeight(!1));
                      if ("right" === e)
                        return Math.abs(l.width() - r.outerWidth(!1));
                      if ("first" === e || "last" === e) {
                        var m = r.find(":" + e);
                        return "x" === i ? ne(m)[1] : ne(m)[0];
                      }
                      return t(e).length
                        ? "x" === i
                          ? ne(t(e))[1]
                          : ne(t(e))[0]
                        : (r.css(p, e), void u.update.call(null, s[0]));
                  }
                }
              },
              V = function (e) {
                var i = t(this),
                  s = i.data(n),
                  a = s.opt,
                  o = t("#mCSB_" + s.idx + "_container");
                if (e)
                  return (
                    clearTimeout(o[0].autoUpdate), void Z(o[0], "autoUpdate")
                  );
                function r() {
                  clearTimeout(o[0].autoUpdate),
                    0 !== i.parents("html").length
                      ? (o[0].autoUpdate = setTimeout(function () {
                          return a.advanced.updateOnSelectorChange &&
                            ((s.poll.change.n = c()),
                            s.poll.change.n !== s.poll.change.o)
                            ? ((s.poll.change.o = s.poll.change.n), void h(3))
                            : a.advanced.updateOnContentResize &&
                              ((s.poll.size.n =
                                i[0].scrollHeight +
                                i[0].scrollWidth +
                                o[0].offsetHeight +
                                i[0].offsetHeight +
                                i[0].offsetWidth),
                              s.poll.size.n !== s.poll.size.o)
                            ? ((s.poll.size.o = s.poll.size.n), void h(1))
                            : !a.advanced.updateOnImageLoad ||
                              ("auto" === a.advanced.updateOnImageLoad &&
                                "y" === a.axis) ||
                              ((s.poll.img.n = o.find("img").length),
                              s.poll.img.n === s.poll.img.o)
                            ? void (
                                (a.advanced.updateOnSelectorChange ||
                                  a.advanced.updateOnContentResize ||
                                  a.advanced.updateOnImageLoad) &&
                                r()
                              )
                            : ((s.poll.img.o = s.poll.img.n),
                              void o.find("img").each(function () {
                                l(this);
                              }));
                        }, a.advanced.autoUpdateTimeout))
                      : (i = null);
                }
                function l(e) {
                  if (t(e).hasClass(d[2])) h();
                  else {
                    var i = new Image();
                    (i.onload = n(i, s)), (i.src = e.src);
                  }
                  function n(e, t) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  }
                  function s() {
                    (this.onload = null), t(e).addClass(d[2]), h(2);
                  }
                }
                function c() {
                  !0 === a.advanced.updateOnSelectorChange &&
                    (a.advanced.updateOnSelectorChange = "*");
                  var e = 0,
                    t = o.find(a.advanced.updateOnSelectorChange);
                  return (
                    a.advanced.updateOnSelectorChange &&
                      t.length > 0 &&
                      t.each(function () {
                        e += this.offsetHeight + this.offsetWidth;
                      }),
                    e
                  );
                }
                function h(e) {
                  clearTimeout(o[0].autoUpdate), u.update.call(null, i[0], e);
                }
                r();
              },
              Y = function (e, t, i) {
                return Math.round(e / t) * t - i;
              },
              K = function (e) {
                var i = e.data(n);
                t(
                  "#mCSB_" +
                    i.idx +
                    "_container,#mCSB_" +
                    i.idx +
                    "_container_wrapper,#mCSB_" +
                    i.idx +
                    "_dragger_vertical,#mCSB_" +
                    i.idx +
                    "_dragger_horizontal"
                ).each(function () {
                  J.call(this);
                });
              },
              G = function (e, i, s) {
                var a = e.data(n),
                  o = a.opt,
                  r = {
                    trigger: "internal",
                    dir: "y",
                    scrollEasing: "mcsEaseOut",
                    drag: !1,
                    dur: o.scrollInertia,
                    overwrite: "all",
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0,
                  },
                  l = [(s = t.extend(r, s)).dur, s.drag ? 0 : s.dur],
                  c = t("#mCSB_" + a.idx),
                  d = t("#mCSB_" + a.idx + "_container"),
                  u = d.parent(),
                  h = o.callbacks.onTotalScrollOffset
                    ? q.call(e, o.callbacks.onTotalScrollOffset)
                    : [0, 0],
                  p = o.callbacks.onTotalScrollBackOffset
                    ? q.call(e, o.callbacks.onTotalScrollBackOffset)
                    : [0, 0];
                if (
                  ((a.trigger = s.trigger),
                  (0 === u.scrollTop() && 0 === u.scrollLeft()) ||
                    (t(".mCSB_" + a.idx + "_scrollbar").css(
                      "visibility",
                      "visible"
                    ),
                    u.scrollTop(0).scrollLeft(0)),
                  "_resetY" !== i ||
                    a.contentReset.y ||
                    (x("onOverflowYNone") &&
                      o.callbacks.onOverflowYNone.call(e[0]),
                    (a.contentReset.y = 1)),
                  "_resetX" !== i ||
                    a.contentReset.x ||
                    (x("onOverflowXNone") &&
                      o.callbacks.onOverflowXNone.call(e[0]),
                    (a.contentReset.x = 1)),
                  "_resetY" !== i && "_resetX" !== i)
                ) {
                  if (
                    ((!a.contentReset.y && e[0].mcs) ||
                      !a.overflowed[0] ||
                      (x("onOverflowY") && o.callbacks.onOverflowY.call(e[0]),
                      (a.contentReset.x = null)),
                    (!a.contentReset.x && e[0].mcs) ||
                      !a.overflowed[1] ||
                      (x("onOverflowX") && o.callbacks.onOverflowX.call(e[0]),
                      (a.contentReset.x = null)),
                    o.snapAmount)
                  ) {
                    var f =
                      o.snapAmount instanceof Array
                        ? "x" === s.dir
                          ? o.snapAmount[1]
                          : o.snapAmount[0]
                        : o.snapAmount;
                    i = Y(i, f, o.snapOffset);
                  }
                  switch (s.dir) {
                    case "x":
                      var m = t("#mCSB_" + a.idx + "_dragger_horizontal"),
                        g = "left",
                        v = d[0].offsetLeft,
                        _ = [
                          c.width() - d.outerWidth(!1),
                          m.parent().width() - m.width(),
                        ],
                        y = [i, 0 === i ? 0 : i / a.scrollRatio.x],
                        b = h[1],
                        w = p[1],
                        S = b > 0 ? b / a.scrollRatio.x : 0,
                        C = w > 0 ? w / a.scrollRatio.x : 0;
                      break;
                    case "y":
                      (m = t("#mCSB_" + a.idx + "_dragger_vertical")),
                        (g = "top"),
                        (v = d[0].offsetTop),
                        (_ = [
                          c.height() - d.outerHeight(!1),
                          m.parent().height() - m.height(),
                        ]),
                        (y = [i, 0 === i ? 0 : i / a.scrollRatio.y]),
                        (b = h[0]),
                        (w = p[0]),
                        (S = b > 0 ? b / a.scrollRatio.y : 0),
                        (C = w > 0 ? w / a.scrollRatio.y : 0);
                  }
                  y[1] < 0 || (0 === y[0] && 0 === y[1])
                    ? (y = [0, 0])
                    : y[1] >= _[1]
                    ? (y = [_[0], _[1]])
                    : (y[0] = -y[0]),
                    e[0].mcs ||
                      (D(), x("onInit") && o.callbacks.onInit.call(e[0])),
                    clearTimeout(d[0].onCompleteTimeout),
                    X(m[0], g, Math.round(y[1]), l[1], s.scrollEasing),
                    (!a.tweenRunning &&
                      ((0 === v && y[0] >= 0) ||
                        (v === _[0] && y[0] <= _[0]))) ||
                      X(
                        d[0],
                        g,
                        Math.round(y[0]),
                        l[0],
                        s.scrollEasing,
                        s.overwrite,
                        {
                          onStart: function () {
                            s.callbacks &&
                              s.onStart &&
                              !a.tweenRunning &&
                              (x("onScrollStart") &&
                                (D(), o.callbacks.onScrollStart.call(e[0])),
                              (a.tweenRunning = !0),
                              k(m),
                              (a.cbOffsets = T()));
                          },
                          onUpdate: function () {
                            s.callbacks &&
                              s.onUpdate &&
                              x("whileScrolling") &&
                              (D(), o.callbacks.whileScrolling.call(e[0]));
                          },
                          onComplete: function () {
                            if (s.callbacks && s.onComplete) {
                              "yx" === o.axis &&
                                clearTimeout(d[0].onCompleteTimeout);
                              var t = d[0].idleTimer || 0;
                              d[0].onCompleteTimeout = setTimeout(function () {
                                x("onScroll") &&
                                  (D(), o.callbacks.onScroll.call(e[0])),
                                  x("onTotalScroll") &&
                                    y[1] >= _[1] - S &&
                                    a.cbOffsets[0] &&
                                    (D(), o.callbacks.onTotalScroll.call(e[0])),
                                  x("onTotalScrollBack") &&
                                    y[1] <= C &&
                                    a.cbOffsets[1] &&
                                    (D(),
                                    o.callbacks.onTotalScrollBack.call(e[0])),
                                  (a.tweenRunning = !1),
                                  (d[0].idleTimer = 0),
                                  k(m, "hide");
                              }, t);
                            }
                          },
                        }
                      );
                }
                function x(e) {
                  return (
                    a && o.callbacks[e] && "function" == typeof o.callbacks[e]
                  );
                }
                function T() {
                  return [
                    o.callbacks.alwaysTriggerOffsets || v >= _[0] + b,
                    o.callbacks.alwaysTriggerOffsets || v <= -w,
                  ];
                }
                function D() {
                  var t = [d[0].offsetTop, d[0].offsetLeft],
                    i = [m[0].offsetTop, m[0].offsetLeft],
                    n = [d.outerHeight(!1), d.outerWidth(!1)],
                    a = [c.height(), c.width()];
                  e[0].mcs = {
                    content: d,
                    top: t[0],
                    left: t[1],
                    draggerTop: i[0],
                    draggerLeft: i[1],
                    topPct: Math.round(
                      (100 * Math.abs(t[0])) / (Math.abs(n[0]) - a[0])
                    ),
                    leftPct: Math.round(
                      (100 * Math.abs(t[1])) / (Math.abs(n[1]) - a[1])
                    ),
                    direction: s.dir,
                  };
                }
              },
              X = function (e, t, i, n, s, a, o) {
                e._mTween ||
                  (e._mTween = {
                    top: {},
                    left: {},
                  });
                var r,
                  l,
                  c = (o = o || {}).onStart || function () {},
                  d = o.onUpdate || function () {},
                  u = o.onComplete || function () {},
                  h = Q(),
                  p = 0,
                  f = e.offsetTop,
                  m = e.style,
                  g = e._mTween[t];
                "left" === t && (f = e.offsetLeft);
                var v = i - f;
                function _() {
                  g.stop ||
                    (p || c.call(),
                    (p = Q() - h),
                    y(),
                    p >= g.time &&
                      ((g.time = p > g.time ? p + r - (p - g.time) : p + r - 1),
                      g.time < p + 1 && (g.time = p + 1)),
                    g.time < n ? (g.id = l(_)) : u.call());
                }
                function y() {
                  n > 0
                    ? ((g.currVal = S(g.time, f, v, n, s)),
                      (m[t] = Math.round(g.currVal) + "px"))
                    : (m[t] = i + "px"),
                    d.call();
                }
                function b() {
                  (r = 1e3 / 60),
                    (g.time = p + r),
                    (l = window.requestAnimationFrame
                      ? window.requestAnimationFrame
                      : function (e) {
                          return y(), setTimeout(e, 0.01);
                        }),
                    (g.id = l(_));
                }
                function w() {
                  null != g.id &&
                    (window.requestAnimationFrame
                      ? window.cancelAnimationFrame(g.id)
                      : clearTimeout(g.id),
                    (g.id = null));
                }
                function S(e, t, i, n, s) {
                  switch (s) {
                    case "linear":
                    case "mcsLinear":
                      return (i * e) / n + t;
                    case "mcsLinearOut":
                      return (e /= n), e--, i * Math.sqrt(1 - e * e) + t;
                    case "easeInOutSmooth":
                      return (e /= n / 2) < 1
                        ? (i / 2) * e * e + t
                        : (-i / 2) * (--e * (e - 2) - 1) + t;
                    case "easeInOutStrong":
                      return (e /= n / 2) < 1
                        ? (i / 2) * Math.pow(2, 10 * (e - 1)) + t
                        : (e--, (i / 2) * (2 - Math.pow(2, -10 * e)) + t);
                    case "easeInOut":
                    case "mcsEaseInOut":
                      return (e /= n / 2) < 1
                        ? (i / 2) * e * e * e + t
                        : (i / 2) * ((e -= 2) * e * e + 2) + t;
                    case "easeOutSmooth":
                      return (e /= n), -i * (--e * e * e * e - 1) + t;
                    case "easeOutStrong":
                      return i * (1 - Math.pow(2, (-10 * e) / n)) + t;
                    default:
                      var a = (e /= n) * e,
                        o = a * e;
                      return (
                        t +
                        i *
                          (0.499999999999997 * o * a +
                            -2.5 * a * a +
                            5.5 * o +
                            -6.5 * a +
                            4 * e)
                      );
                  }
                }
                (g.stop = 0), "none" !== a && w(), b();
              },
              Q = function () {
                return window.performance && window.performance.now
                  ? window.performance.now()
                  : window.performance && window.performance.webkitNow
                  ? window.performance.webkitNow()
                  : Date.now
                  ? Date.now()
                  : new Date().getTime();
              },
              J = function () {
                var e = this;
                e._mTween ||
                  (e._mTween = {
                    top: {},
                    left: {},
                  });
                for (var t = ["top", "left"], i = 0; i < t.length; i++) {
                  var n = t[i];
                  e._mTween[n].id &&
                    (window.requestAnimationFrame
                      ? window.cancelAnimationFrame(e._mTween[n].id)
                      : clearTimeout(e._mTween[n].id),
                    (e._mTween[n].id = null),
                    (e._mTween[n].stop = 1));
                }
              },
              Z = function (e, t) {
                try {
                  delete e[t];
                } catch (i) {
                  e[t] = null;
                }
              },
              ee = function (e) {
                return !(e.which && 1 !== e.which);
              },
              te = function (e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t);
              },
              ie = function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
              },
              ne = function (e) {
                var t = e.parents(".mCSB_container");
                return [
                  e.offset().top - t.offset().top,
                  e.offset().left - t.offset().left,
                ];
              },
              se = function () {
                var e = t();
                return !!e && document[e];
                function t() {
                  var e = ["webkit", "moz", "ms", "o"];
                  if ("hidden" in document) return "hidden";
                  for (var t = 0; t < e.length; t++)
                    if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                  return null;
                }
              };
            (t.fn[i] = function (e) {
              return u[e]
                ? u[e].apply(this, Array.prototype.slice.call(arguments, 1))
                : "object" != typeof e && e
                ? void t.error("Method " + e + " does not exist")
                : u.init.apply(this, arguments);
            }),
              (t[i] = function (e) {
                return u[e]
                  ? u[e].apply(this, Array.prototype.slice.call(arguments, 1))
                  : "object" != typeof e && e
                  ? void t.error("Method " + e + " does not exist")
                  : u.init.apply(this, arguments);
              }),
              (t[i].defaults = a),
              (window[i] = !0),
              t(window).bind("load", function () {
                t(s)[i](),
                  t.extend(t.expr[":"], {
                    mcsInView:
                      t.expr[":"].mcsInView ||
                      function (e) {
                        var i,
                          n,
                          s = t(e),
                          a = s.parents(".mCSB_container");
                        if (a.length)
                          return (
                            (i = a.parent()),
                            (n = [a[0].offsetTop, a[0].offsetLeft])[0] +
                              ne(s)[0] >=
                              0 &&
                              n[0] + ne(s)[0] <
                                i.height() - s.outerHeight(!1) &&
                              n[1] + ne(s)[1] >= 0 &&
                              n[1] + ne(s)[1] < i.width() - s.outerWidth(!1)
                          );
                      },
                    mcsInSight:
                      t.expr[":"].mcsInSight ||
                      function (e, i, n) {
                        var s,
                          a,
                          o,
                          r,
                          l = t(e),
                          c = l.parents(".mCSB_container"),
                          d =
                            "exact" === n[3]
                              ? [
                                  [1, 0],
                                  [1, 0],
                                ]
                              : [
                                  [0.9, 0.1],
                                  [0.6, 0.4],
                                ];
                        if (c.length)
                          return (
                            (s = [l.outerHeight(!1), l.outerWidth(!1)]),
                            (o = [
                              c[0].offsetTop + ne(l)[0],
                              c[0].offsetLeft + ne(l)[1],
                            ]),
                            (a = [
                              c.parent()[0].offsetHeight,
                              c.parent()[0].offsetWidth,
                            ]),
                            (r = [
                              s[0] < a[0] ? d[0] : d[1],
                              s[1] < a[1] ? d[0] : d[1],
                            ]),
                            o[0] - a[0] * r[0][0] < 0 &&
                              o[0] + s[0] - a[0] * r[0][1] >= 0 &&
                              o[1] - a[1] * r[1][0] < 0 &&
                              o[1] + s[1] - a[1] * r[1][1] >= 0
                          );
                      },
                    mcsOverflow:
                      t.expr[":"].mcsOverflow ||
                      function (e) {
                        var i = t(e).data(n);
                        if (i) return i.overflowed[0] || i.overflowed[1];
                      },
                  });
              });
          }),
            (s = i.amdO),
            (a = e.exports),
            (o = "https:" == document.location.protocol ? "https:" : "http:"),
            (r =
              "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"),
            s ||
              (a
                ? i(250450)(t)
                : t.event.special.mousewheel ||
                  t("head").append(
                    decodeURI(
                      "%3Cscript src=" + o + "//" + r + "%3E%3C/script%3E"
                    )
                  )),
            n();
        }),
        void 0 === (a = "function" == typeof n ? n.apply(t, s) : n) ||
          (e.exports = a);
    },
    760191: function (e, t, i) {
      "use strict";
      i.r(t);
    },
    87688: function (e, t, i) {
      "use strict";
      i.r(t);
    },
    787388: function () {
      var e = function (e, n) {
        var s = document.querySelector("#" + e + " > .particles-js-canvas-el");
        this.pJS = {
          canvas: {
            el: s,
            w: s.offsetWidth,
            h: s.offsetHeight,
          },
          particles: {
            number: {
              value: 400,
              density: {
                enable: !0,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ff0000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: !1,
              anim: {
                enable: !1,
                speed: 2,
                opacity_min: 0,
                sync: !1,
              },
            },
            size: {
              value: 20,
              random: !1,
              anim: {
                enable: !1,
                speed: 20,
                size_min: 0,
                sync: !1,
              },
            },
            line_linked: {
              enable: !0,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 2,
              direction: "none",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: {
                enable: !1,
                rotateX: 3e3,
                rotateY: 3e3,
              },
            },
            array: [],
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: !0,
                mode: "grab",
              },
              onclick: {
                enable: !0,
                mode: "push",
              },
              resize: !0,
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 80,
                duration: 0.4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
            mouse: {},
          },
          retina_detect: !1,
          fn: {
            interact: {},
            modes: {},
            vendors: {},
          },
          tmp: {},
        };
        var a = this.pJS;
        n && Object.deepExtend(a, n),
          (a.tmp.obj = {
            size_value: a.particles.size.value,
            size_anim_speed: a.particles.size.anim.speed,
            move_speed: a.particles.move.speed,
            line_linked_distance: a.particles.line_linked.distance,
            line_linked_width: a.particles.line_linked.width,
            mode_grab_distance: a.interactivity.modes.grab.distance,
            mode_bubble_distance: a.interactivity.modes.bubble.distance,
            mode_bubble_size: a.interactivity.modes.bubble.size,
            mode_repulse_distance: a.interactivity.modes.repulse.distance,
          }),
          (a.fn.retinaInit = function () {
            a.retina_detect && window.devicePixelRatio > 1
              ? ((a.canvas.pxratio = window.devicePixelRatio),
                (a.tmp.retina = !0))
              : ((a.canvas.pxratio = 1), (a.tmp.retina = !1)),
              (a.canvas.w = a.canvas.el.offsetWidth * a.canvas.pxratio),
              (a.canvas.h = a.canvas.el.offsetHeight * a.canvas.pxratio),
              (a.particles.size.value =
                a.tmp.obj.size_value * a.canvas.pxratio),
              (a.particles.size.anim.speed =
                a.tmp.obj.size_anim_speed * a.canvas.pxratio),
              (a.particles.move.speed =
                a.tmp.obj.move_speed * a.canvas.pxratio),
              (a.particles.line_linked.distance =
                a.tmp.obj.line_linked_distance * a.canvas.pxratio),
              (a.interactivity.modes.grab.distance =
                a.tmp.obj.mode_grab_distance * a.canvas.pxratio),
              (a.interactivity.modes.bubble.distance =
                a.tmp.obj.mode_bubble_distance * a.canvas.pxratio),
              (a.particles.line_linked.width =
                a.tmp.obj.line_linked_width * a.canvas.pxratio),
              (a.interactivity.modes.bubble.size =
                a.tmp.obj.mode_bubble_size * a.canvas.pxratio),
              (a.interactivity.modes.repulse.distance =
                a.tmp.obj.mode_repulse_distance * a.canvas.pxratio);
          }),
          (a.fn.canvasInit = function () {
            a.canvas.ctx = a.canvas.el.getContext("2d");
          }),
          (a.fn.canvasSize = function () {
            (a.canvas.el.width = a.canvas.w),
              (a.canvas.el.height = a.canvas.h),
              a &&
                a.interactivity.events.resize &&
                window.addEventListener("resize", function () {
                  (a.canvas.w = a.canvas.el.offsetWidth),
                    (a.canvas.h = a.canvas.el.offsetHeight),
                    a.tmp.retina &&
                      ((a.canvas.w *= a.canvas.pxratio),
                      (a.canvas.h *= a.canvas.pxratio)),
                    (a.canvas.el.width = a.canvas.w),
                    (a.canvas.el.height = a.canvas.h),
                    a.particles.move.enable ||
                      (a.fn.particlesEmpty(),
                      a.fn.particlesCreate(),
                      a.fn.particlesDraw(),
                      a.fn.vendors.densityAutoParticles()),
                    a.fn.vendors.densityAutoParticles();
                });
          }),
          (a.fn.canvasPaint = function () {
            a.canvas.ctx.fillRect(0, 0, a.canvas.w, a.canvas.h);
          }),
          (a.fn.canvasClear = function () {
            a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h);
          }),
          (a.fn.particle = function (e, i, n) {
            if (
              ((this.radius =
                (a.particles.size.random ? Math.random() : 1) *
                a.particles.size.value),
              a.particles.size.anim.enable &&
                ((this.size_status = !1),
                (this.vs = a.particles.size.anim.speed / 100),
                a.particles.size.anim.sync ||
                  (this.vs = this.vs * Math.random())),
              (this.x = n ? n.x : Math.random() * a.canvas.w),
              (this.y = n ? n.y : Math.random() * a.canvas.h),
              this.x > a.canvas.w - 2 * this.radius
                ? (this.x = this.x - this.radius)
                : this.x < 2 * this.radius && (this.x = this.x + this.radius),
              this.y > a.canvas.h - 2 * this.radius
                ? (this.y = this.y - this.radius)
                : this.y < 2 * this.radius && (this.y = this.y + this.radius),
              a.particles.move.bounce && a.fn.vendors.checkOverlap(this, n),
              (this.color = {}),
              "object" == typeof e.value)
            )
              if (e.value instanceof Array) {
                var s =
                  e.value[
                    Math.floor(Math.random() * a.particles.color.value.length)
                  ];
                this.color.rgb = t(s);
              } else
                null != e.value.r &&
                  null != e.value.g &&
                  null != e.value.b &&
                  (this.color.rgb = {
                    r: e.value.r,
                    g: e.value.g,
                    b: e.value.b,
                  }),
                  null != e.value.h &&
                    null != e.value.s &&
                    null != e.value.l &&
                    (this.color.hsl = {
                      h: e.value.h,
                      s: e.value.s,
                      l: e.value.l,
                    });
            else
              "random" == e.value
                ? (this.color.rgb = {
                    r: Math.floor(256 * Math.random()) + 0,
                    g: Math.floor(256 * Math.random()) + 0,
                    b: Math.floor(256 * Math.random()) + 0,
                  })
                : "string" == typeof e.value &&
                  ((this.color = e), (this.color.rgb = t(this.color.value)));
            (this.opacity =
              (a.particles.opacity.random ? Math.random() : 1) *
              a.particles.opacity.value),
              a.particles.opacity.anim.enable &&
                ((this.opacity_status = !1),
                (this.vo = a.particles.opacity.anim.speed / 100),
                a.particles.opacity.anim.sync ||
                  (this.vo = this.vo * Math.random()));
            var o = {};
            switch (a.particles.move.direction) {
              case "top":
                o = {
                  x: 0,
                  y: -1,
                };
                break;
              case "top-right":
                o = {
                  x: 0.5,
                  y: -0.5,
                };
                break;
              case "right":
                o = {
                  x: 1,
                  y: -0,
                };
                break;
              case "bottom-right":
                o = {
                  x: 0.5,
                  y: 0.5,
                };
                break;
              case "bottom":
                o = {
                  x: 0,
                  y: 1,
                };
                break;
              case "bottom-left":
                o = {
                  x: -0.5,
                  y: 1,
                };
                break;
              case "left":
                o = {
                  x: -1,
                  y: 0,
                };
                break;
              case "top-left":
                o = {
                  x: -0.5,
                  y: -0.5,
                };
                break;
              default:
                o = {
                  x: 0,
                  y: 0,
                };
            }
            a.particles.move.straight
              ? ((this.vx = o.x),
                (this.vy = o.y),
                a.particles.move.random &&
                  ((this.vx = this.vx * Math.random()),
                  (this.vy = this.vy * Math.random())))
              : ((this.vx = o.x + Math.random() - 0.5),
                (this.vy = o.y + Math.random() - 0.5)),
              (this.vx_i = this.vx),
              (this.vy_i = this.vy);
            var r = a.particles.shape.type;
            if ("object" == typeof r) {
              if (r instanceof Array) {
                var l = r[Math.floor(Math.random() * r.length)];
                this.shape = l;
              }
            } else this.shape = r;
            if ("image" == this.shape) {
              var c = a.particles.shape;
              (this.img = {
                src: c.image.src,
                ratio: c.image.width / c.image.height,
              }),
                this.img.ratio || (this.img.ratio = 1),
                "svg" == a.tmp.img_type &&
                  null != a.tmp.source_svg &&
                  (a.fn.vendors.createSvgImg(this),
                  a.tmp.pushing && (this.img.loaded = !1));
            }
          }),
          (a.fn.particle.prototype.draw = function () {
            var e = this;
            if (null != e.radius_bubble) var t = e.radius_bubble;
            else t = e.radius;
            if (null != e.opacity_bubble) var i = e.opacity_bubble;
            else i = e.opacity;
            if (e.color.rgb)
              var n =
                "rgba(" +
                e.color.rgb.r +
                "," +
                e.color.rgb.g +
                "," +
                e.color.rgb.b +
                "," +
                i +
                ")";
            else
              n =
                "hsla(" +
                e.color.hsl.h +
                "," +
                e.color.hsl.s +
                "%," +
                e.color.hsl.l +
                "%," +
                i +
                ")";
            switch (
              ((a.canvas.ctx.fillStyle = n), a.canvas.ctx.beginPath(), e.shape)
            ) {
              case "circle":
                a.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                break;
              case "edge":
                a.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                break;
              case "triangle":
                a.fn.vendors.drawShape(
                  a.canvas.ctx,
                  e.x - t,
                  e.y + t / 1.66,
                  2 * t,
                  3,
                  2
                );
                break;
              case "polygon":
                a.fn.vendors.drawShape(
                  a.canvas.ctx,
                  e.x - t / (a.particles.shape.polygon.nb_sides / 3.5),
                  e.y - t / 0.76,
                  (2.66 * t) / (a.particles.shape.polygon.nb_sides / 3),
                  a.particles.shape.polygon.nb_sides,
                  1
                );
                break;
              case "star":
                a.fn.vendors.drawShape(
                  a.canvas.ctx,
                  e.x - (2 * t) / (a.particles.shape.polygon.nb_sides / 4),
                  e.y - t / 1.52,
                  (2 * t * 2.66) / (a.particles.shape.polygon.nb_sides / 3),
                  a.particles.shape.polygon.nb_sides,
                  2
                );
                break;
              case "image":
                if ("svg" == a.tmp.img_type) var s = e.img.obj;
                else s = a.tmp.img_obj;
                s &&
                  a.canvas.ctx.drawImage(
                    s,
                    e.x - t,
                    e.y - t,
                    2 * t,
                    (2 * t) / e.img.ratio
                  );
            }
            a.canvas.ctx.closePath(),
              a.particles.shape.stroke.width > 0 &&
                ((a.canvas.ctx.strokeStyle = a.particles.shape.stroke.color),
                (a.canvas.ctx.lineWidth = a.particles.shape.stroke.width),
                a.canvas.ctx.stroke()),
              a.canvas.ctx.fill();
          }),
          (a.fn.particlesCreate = function () {
            for (var e = 0; e < a.particles.number.value; e++)
              a.particles.array.push(
                new a.fn.particle(a.particles.color, a.particles.opacity.value)
              );
          }),
          (a.fn.particlesUpdate = function () {
            for (var e = 0; e < a.particles.array.length; e++) {
              var t = a.particles.array[e];
              if (a.particles.move.enable) {
                var n = a.particles.move.speed / 2;
                (t.x += t.vx * n), (t.y += t.vy * n);
              }
              if (
                (a.particles.opacity.anim.enable &&
                  (1 == t.opacity_status
                    ? (t.opacity >= a.particles.opacity.value &&
                        (t.opacity_status = !1),
                      (t.opacity += t.vo))
                    : (t.opacity <= a.particles.opacity.anim.opacity_min &&
                        (t.opacity_status = !0),
                      (t.opacity -= t.vo)),
                  t.opacity < 0 && (t.opacity = 0)),
                a.particles.size.anim.enable &&
                  (1 == t.size_status
                    ? (t.radius >= a.particles.size.value &&
                        (t.size_status = !1),
                      (t.radius += t.vs))
                    : (t.radius <= a.particles.size.anim.size_min &&
                        (t.size_status = !0),
                      (t.radius -= t.vs)),
                  t.radius < 0 && (t.radius = 0)),
                "bounce" == a.particles.move.out_mode)
              )
                var s = {
                  x_left: t.radius,
                  x_right: a.canvas.w,
                  y_top: t.radius,
                  y_bottom: a.canvas.h,
                };
              else
                s = {
                  x_left: -t.radius,
                  x_right: a.canvas.w + t.radius,
                  y_top: -t.radius,
                  y_bottom: a.canvas.h + t.radius,
                };
              if (
                (t.x - t.radius > a.canvas.w
                  ? ((t.x = s.x_left), (t.y = Math.random() * a.canvas.h))
                  : t.x + t.radius < 0 &&
                    ((t.x = s.x_right), (t.y = Math.random() * a.canvas.h)),
                t.y - t.radius > a.canvas.h
                  ? ((t.y = s.y_top), (t.x = Math.random() * a.canvas.w))
                  : t.y + t.radius < 0 &&
                    ((t.y = s.y_bottom), (t.x = Math.random() * a.canvas.w)),
                "bounce" === a.particles.move.out_mode)
              )
                (t.x + t.radius > a.canvas.w || t.x - t.radius < 0) &&
                  (t.vx = -t.vx),
                  (t.y + t.radius > a.canvas.h || t.y - t.radius < 0) &&
                    (t.vy = -t.vy);
              if (
                (i("grab", a.interactivity.events.onhover.mode) &&
                  a.fn.modes.grabParticle(t),
                (i("bubble", a.interactivity.events.onhover.mode) ||
                  i("bubble", a.interactivity.events.onclick.mode)) &&
                  a.fn.modes.bubbleParticle(t),
                (i("repulse", a.interactivity.events.onhover.mode) ||
                  i("repulse", a.interactivity.events.onclick.mode)) &&
                  a.fn.modes.repulseParticle(t),
                a.particles.line_linked.enable ||
                  a.particles.move.attract.enable)
              )
                for (var o = e + 1; o < a.particles.array.length; o++) {
                  var r = a.particles.array[o];
                  a.particles.line_linked.enable &&
                    a.fn.interact.linkParticles(t, r),
                    a.particles.move.attract.enable &&
                      a.fn.interact.attractParticles(t, r),
                    a.particles.move.bounce &&
                      a.fn.interact.bounceParticles(t, r);
                }
            }
          }),
          (a.fn.particlesDraw = function () {
            a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h),
              a.fn.particlesUpdate();
            for (var e = 0; e < a.particles.array.length; e++) {
              a.particles.array[e].draw();
            }
          }),
          (a.fn.particlesEmpty = function () {
            a.particles.array = [];
          }),
          (a.fn.particlesRefresh = function () {
            cancelRequestAnimFrame(a.fn.checkAnimFrame),
              cancelRequestAnimFrame(a.fn.drawAnimFrame),
              (a.tmp.source_svg = void 0),
              (a.tmp.img_obj = void 0),
              (a.tmp.count_svg = 0),
              a.fn.particlesEmpty(),
              a.fn.canvasClear(),
              a.fn.vendors.start();
          }),
          (a.fn.interact.linkParticles = function (e, t) {
            var i = e.x - t.x,
              n = e.y - t.y,
              s = Math.sqrt(i * i + n * n);
            if (s <= a.particles.line_linked.distance) {
              var o =
                a.particles.line_linked.opacity -
                s /
                  (1 / a.particles.line_linked.opacity) /
                  a.particles.line_linked.distance;
              if (o > 0) {
                var r = a.particles.line_linked.color_rgb_line;
                (a.canvas.ctx.strokeStyle =
                  "rgba(" + r.r + "," + r.g + "," + r.b + "," + o + ")"),
                  (a.canvas.ctx.lineWidth = a.particles.line_linked.width),
                  a.canvas.ctx.beginPath(),
                  a.canvas.ctx.moveTo(e.x, e.y),
                  a.canvas.ctx.lineTo(t.x, t.y),
                  a.canvas.ctx.stroke(),
                  a.canvas.ctx.closePath();
              }
            }
          }),
          (a.fn.interact.attractParticles = function (e, t) {
            var i = e.x - t.x,
              n = e.y - t.y;
            if (Math.sqrt(i * i + n * n) <= a.particles.line_linked.distance) {
              var s = i / (1e3 * a.particles.move.attract.rotateX),
                o = n / (1e3 * a.particles.move.attract.rotateY);
              (e.vx -= s), (e.vy -= o), (t.vx += s), (t.vy += o);
            }
          }),
          (a.fn.interact.bounceParticles = function (e, t) {
            var i = e.x - t.x,
              n = e.y - t.y;
            Math.sqrt(i * i + n * n) <= e.radius + t.radius &&
              ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
          }),
          (a.fn.modes.pushParticles = function (e, t) {
            a.tmp.pushing = !0;
            for (var i = 0; i < e; i++)
              a.particles.array.push(
                new a.fn.particle(
                  a.particles.color,
                  a.particles.opacity.value,
                  {
                    x: t ? t.pos_x : Math.random() * a.canvas.w,
                    y: t ? t.pos_y : Math.random() * a.canvas.h,
                  }
                )
              ),
                i == e - 1 &&
                  (a.particles.move.enable || a.fn.particlesDraw(),
                  (a.tmp.pushing = !1));
          }),
          (a.fn.modes.removeParticles = function (e) {
            a.particles.array.splice(0, e),
              a.particles.move.enable || a.fn.particlesDraw();
          }),
          (a.fn.modes.bubbleParticle = function (e) {
            if (
              a.interactivity.events.onhover.enable &&
              i("bubble", a.interactivity.events.onhover.mode)
            ) {
              var t = e.x - a.interactivity.mouse.pos_x,
                n = e.y - a.interactivity.mouse.pos_y,
                s =
                  1 -
                  (d = Math.sqrt(t * t + n * n)) /
                    a.interactivity.modes.bubble.distance;
              function o() {
                (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
              }
              if (d <= a.interactivity.modes.bubble.distance) {
                if (s >= 0 && "mousemove" == a.interactivity.status) {
                  if (
                    a.interactivity.modes.bubble.size != a.particles.size.value
                  )
                    if (
                      a.interactivity.modes.bubble.size > a.particles.size.value
                    ) {
                      (l = e.radius + a.interactivity.modes.bubble.size * s) >=
                        0 && (e.radius_bubble = l);
                    } else {
                      var r = e.radius - a.interactivity.modes.bubble.size,
                        l = e.radius - r * s;
                      e.radius_bubble = l > 0 ? l : 0;
                    }
                  var c;
                  if (
                    a.interactivity.modes.bubble.opacity !=
                    a.particles.opacity.value
                  )
                    if (
                      a.interactivity.modes.bubble.opacity >
                      a.particles.opacity.value
                    )
                      (c = a.interactivity.modes.bubble.opacity * s) >
                        e.opacity &&
                        c <= a.interactivity.modes.bubble.opacity &&
                        (e.opacity_bubble = c);
                    else
                      (c =
                        e.opacity -
                        (a.particles.opacity.value -
                          a.interactivity.modes.bubble.opacity) *
                          s) < e.opacity &&
                        c >= a.interactivity.modes.bubble.opacity &&
                        (e.opacity_bubble = c);
                }
              } else o();
              "mouseleave" == a.interactivity.status && o();
            } else if (
              a.interactivity.events.onclick.enable &&
              i("bubble", a.interactivity.events.onclick.mode)
            ) {
              if (a.tmp.bubble_clicking) {
                (t = e.x - a.interactivity.mouse.click_pos_x),
                  (n = e.y - a.interactivity.mouse.click_pos_y);
                var d = Math.sqrt(t * t + n * n),
                  u =
                    (new Date().getTime() - a.interactivity.mouse.click_time) /
                    1e3;
                u > a.interactivity.modes.bubble.duration &&
                  (a.tmp.bubble_duration_end = !0),
                  u > 2 * a.interactivity.modes.bubble.duration &&
                    ((a.tmp.bubble_clicking = !1),
                    (a.tmp.bubble_duration_end = !1));
              }
              function h(t, i, n, s, o) {
                if (t != i)
                  if (a.tmp.bubble_duration_end)
                    null != n &&
                      ((l =
                        t +
                        (t -
                          (s -
                            (u * (s - t)) /
                              a.interactivity.modes.bubble.duration))),
                      "size" == o && (e.radius_bubble = l),
                      "opacity" == o && (e.opacity_bubble = l));
                  else if (d <= a.interactivity.modes.bubble.distance) {
                    if (null != n) var r = n;
                    else r = s;
                    if (r != t) {
                      var l =
                        s -
                        (u * (s - t)) / a.interactivity.modes.bubble.duration;
                      "size" == o && (e.radius_bubble = l),
                        "opacity" == o && (e.opacity_bubble = l);
                    }
                  } else
                    "size" == o && (e.radius_bubble = void 0),
                      "opacity" == o && (e.opacity_bubble = void 0);
              }
              a.tmp.bubble_clicking &&
                (h(
                  a.interactivity.modes.bubble.size,
                  a.particles.size.value,
                  e.radius_bubble,
                  e.radius,
                  "size"
                ),
                h(
                  a.interactivity.modes.bubble.opacity,
                  a.particles.opacity.value,
                  e.opacity_bubble,
                  e.opacity,
                  "opacity"
                ));
            }
          }),
          (a.fn.modes.repulseParticle = function (e) {
            if (
              a.interactivity.events.onhover.enable &&
              i("repulse", a.interactivity.events.onhover.mode) &&
              "mousemove" == a.interactivity.status
            ) {
              var t = e.x - a.interactivity.mouse.pos_x,
                n = e.y - a.interactivity.mouse.pos_y,
                s = Math.sqrt(t * t + n * n),
                o = {
                  x: t / s,
                  y: n / s,
                },
                r = a.interactivity.modes.repulse.distance,
                l =
                  ((f = (1 / r) * (-1 * Math.pow(s / r, 2) + 1) * r * 100),
                  (m = 0),
                  (g = 50),
                  Math.min(Math.max(f, m), g)),
                c = {
                  x: e.x + o.x * l,
                  y: e.y + o.y * l,
                };
              "bounce" == a.particles.move.out_mode
                ? (c.x - e.radius > 0 &&
                    c.x + e.radius < a.canvas.w &&
                    (e.x = c.x),
                  c.y - e.radius > 0 &&
                    c.y + e.radius < a.canvas.h &&
                    (e.y = c.y))
                : ((e.x = c.x), (e.y = c.y));
            } else if (
              a.interactivity.events.onclick.enable &&
              i("repulse", a.interactivity.events.onclick.mode)
            )
              if (
                (a.tmp.repulse_finish ||
                  (a.tmp.repulse_count++,
                  a.tmp.repulse_count == a.particles.array.length &&
                    (a.tmp.repulse_finish = !0)),
                a.tmp.repulse_clicking)
              ) {
                r = Math.pow(a.interactivity.modes.repulse.distance / 6, 3);
                var d = a.interactivity.mouse.click_pos_x - e.x,
                  u = a.interactivity.mouse.click_pos_y - e.y,
                  h = d * d + u * u,
                  p = (-r / h) * 1;
                h <= r &&
                  (function () {
                    var t = Math.atan2(u, d);
                    if (
                      ((e.vx = p * Math.cos(t)),
                      (e.vy = p * Math.sin(t)),
                      "bounce" == a.particles.move.out_mode)
                    ) {
                      var i = {
                        x: e.x + e.vx,
                        y: e.y + e.vy,
                      };
                      (i.x + e.radius > a.canvas.w || i.x - e.radius < 0) &&
                        (e.vx = -e.vx),
                        (i.y + e.radius > a.canvas.h || i.y - e.radius < 0) &&
                          (e.vy = -e.vy);
                    }
                  })();
              } else
                0 == a.tmp.repulse_clicking &&
                  ((e.vx = e.vx_i), (e.vy = e.vy_i));
            var f, m, g;
          }),
          (a.fn.modes.grabParticle = function (e) {
            if (
              a.interactivity.events.onhover.enable &&
              "mousemove" == a.interactivity.status
            ) {
              var t = e.x - a.interactivity.mouse.pos_x,
                i = e.y - a.interactivity.mouse.pos_y,
                n = Math.sqrt(t * t + i * i);
              if (n <= a.interactivity.modes.grab.distance) {
                var s =
                  a.interactivity.modes.grab.line_linked.opacity -
                  n /
                    (1 / a.interactivity.modes.grab.line_linked.opacity) /
                    a.interactivity.modes.grab.distance;
                if (s > 0) {
                  var o = a.particles.line_linked.color_rgb_line;
                  (a.canvas.ctx.strokeStyle =
                    "rgba(" + o.r + "," + o.g + "," + o.b + "," + s + ")"),
                    (a.canvas.ctx.lineWidth = a.particles.line_linked.width),
                    a.canvas.ctx.beginPath(),
                    a.canvas.ctx.moveTo(e.x, e.y),
                    a.canvas.ctx.lineTo(
                      a.interactivity.mouse.pos_x,
                      a.interactivity.mouse.pos_y
                    ),
                    a.canvas.ctx.stroke(),
                    a.canvas.ctx.closePath();
                }
              }
            }
          }),
          (a.fn.vendors.eventsListeners = function () {
            "window" == a.interactivity.detect_on
              ? (a.interactivity.el = window)
              : (a.interactivity.el = a.canvas.el),
              (a.interactivity.events.onhover.enable ||
                a.interactivity.events.onclick.enable) &&
                (a.interactivity.el.addEventListener("mousemove", function (e) {
                  if (a.interactivity.el == window)
                    var t = e.clientX,
                      i = e.clientY;
                  else
                    (t = e.offsetX || e.clientX), (i = e.offsetY || e.clientY);
                  (a.interactivity.mouse.pos_x = t),
                    (a.interactivity.mouse.pos_y = i),
                    a.tmp.retina &&
                      ((a.interactivity.mouse.pos_x *= a.canvas.pxratio),
                      (a.interactivity.mouse.pos_y *= a.canvas.pxratio)),
                    (a.interactivity.status = "mousemove");
                }),
                a.interactivity.el.addEventListener("mouseleave", function (e) {
                  (a.interactivity.mouse.pos_x = null),
                    (a.interactivity.mouse.pos_y = null),
                    (a.interactivity.status = "mouseleave");
                })),
              a.interactivity.events.onclick.enable &&
                a.interactivity.el.addEventListener("click", function () {
                  if (
                    ((a.interactivity.mouse.click_pos_x =
                      a.interactivity.mouse.pos_x),
                    (a.interactivity.mouse.click_pos_y =
                      a.interactivity.mouse.pos_y),
                    (a.interactivity.mouse.click_time = new Date().getTime()),
                    a.interactivity.events.onclick.enable)
                  )
                    switch (a.interactivity.events.onclick.mode) {
                      case "push":
                        a.particles.move.enable ||
                        1 == a.interactivity.modes.push.particles_nb
                          ? a.fn.modes.pushParticles(
                              a.interactivity.modes.push.particles_nb,
                              a.interactivity.mouse
                            )
                          : a.interactivity.modes.push.particles_nb > 1 &&
                            a.fn.modes.pushParticles(
                              a.interactivity.modes.push.particles_nb
                            );
                        break;
                      case "remove":
                        a.fn.modes.removeParticles(
                          a.interactivity.modes.remove.particles_nb
                        );
                        break;
                      case "bubble":
                        a.tmp.bubble_clicking = !0;
                        break;
                      case "repulse":
                        (a.tmp.repulse_clicking = !0),
                          (a.tmp.repulse_count = 0),
                          (a.tmp.repulse_finish = !1),
                          setTimeout(function () {
                            a.tmp.repulse_clicking = !1;
                          }, 1e3 * a.interactivity.modes.repulse.duration);
                    }
                });
          }),
          (a.fn.vendors.densityAutoParticles = function () {
            if (a.particles.number.density.enable) {
              var e = (a.canvas.el.width * a.canvas.el.height) / 1e3;
              a.tmp.retina && (e /= 2 * a.canvas.pxratio);
              var t =
                  (e * a.particles.number.value) /
                  a.particles.number.density.value_area,
                i = a.particles.array.length - t;
              i < 0
                ? a.fn.modes.pushParticles(Math.abs(i))
                : a.fn.modes.removeParticles(i);
            }
          }),
          (a.fn.vendors.checkOverlap = function (e, t) {
            for (var i = 0; i < a.particles.array.length; i++) {
              var n = a.particles.array[i],
                s = e.x - n.x,
                o = e.y - n.y;
              Math.sqrt(s * s + o * o) <= e.radius + n.radius &&
                ((e.x = t ? t.x : Math.random() * a.canvas.w),
                (e.y = t ? t.y : Math.random() * a.canvas.h),
                a.fn.vendors.checkOverlap(e));
            }
          }),
          (a.fn.vendors.createSvgImg = function (e) {
            var t = a.tmp.source_svg.replace(
                /#([0-9A-F]{3,6})/gi,
                function (t, i, n, s) {
                  if (e.color.rgb)
                    var a =
                      "rgba(" +
                      e.color.rgb.r +
                      "," +
                      e.color.rgb.g +
                      "," +
                      e.color.rgb.b +
                      "," +
                      e.opacity +
                      ")";
                  else
                    a =
                      "hsla(" +
                      e.color.hsl.h +
                      "," +
                      e.color.hsl.s +
                      "%," +
                      e.color.hsl.l +
                      "%," +
                      e.opacity +
                      ")";
                  return a;
                }
              ),
              i = new Blob([t], {
                type: "image/svg+xml;charset=utf-8",
              }),
              n = window.URL || window.webkitURL || window,
              s = n.createObjectURL(i),
              o = new Image();
            o.addEventListener("load", function () {
              (e.img.obj = o),
                (e.img.loaded = !0),
                n.revokeObjectURL(s),
                a.tmp.count_svg++;
            }),
              (o.src = s);
          }),
          (a.fn.vendors.destroypJS = function () {
            cancelAnimationFrame(a.fn.drawAnimFrame),
              s.remove(),
              (pJSDom = null);
          }),
          (a.fn.vendors.drawShape = function (e, t, i, n, s, a) {
            var o = s * a,
              r = s / a,
              l = (180 * (r - 2)) / r,
              c = Math.PI - (Math.PI * l) / 180;
            e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
            for (var d = 0; d < o; d++)
              e.lineTo(n, 0), e.translate(n, 0), e.rotate(c);
            e.fill(), e.restore();
          }),
          (a.fn.vendors.exportImg = function () {
            window.open(a.canvas.el.toDataURL("image/png"), "_blank");
          }),
          (a.fn.vendors.loadImg = function (e) {
            if (((a.tmp.img_error = void 0), "" != a.particles.shape.image.src))
              if ("svg" == e) {
                var t = new XMLHttpRequest();
                t.open("GET", a.particles.shape.image.src),
                  (t.onreadystatechange = function (e) {
                    4 == t.readyState &&
                      (200 == t.status
                        ? ((a.tmp.source_svg = e.currentTarget.response),
                          a.fn.vendors.checkBeforeDraw())
                        : (console.log("Error pJS - Image not found"),
                          (a.tmp.img_error = !0)));
                  }),
                  t.send();
              } else {
                var i = new Image();
                i.addEventListener("load", function () {
                  (a.tmp.img_obj = i), a.fn.vendors.checkBeforeDraw();
                }),
                  (i.src = a.particles.shape.image.src);
              }
            else
              console.log("Error pJS - No image.src"), (a.tmp.img_error = !0);
          }),
          (a.fn.vendors.draw = function () {
            "image" == a.particles.shape.type
              ? "svg" == a.tmp.img_type
                ? a.tmp.count_svg >= a.particles.number.value
                  ? (a.fn.particlesDraw(),
                    a.particles.move.enable
                      ? (a.fn.drawAnimFrame = requestAnimFrame(
                          a.fn.vendors.draw
                        ))
                      : cancelRequestAnimFrame(a.fn.drawAnimFrame))
                  : a.tmp.img_error ||
                    (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
                : null != a.tmp.img_obj
                ? (a.fn.particlesDraw(),
                  a.particles.move.enable
                    ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
                    : cancelRequestAnimFrame(a.fn.drawAnimFrame))
                : a.tmp.img_error ||
                  (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
              : (a.fn.particlesDraw(),
                a.particles.move.enable
                  ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
                  : cancelRequestAnimFrame(a.fn.drawAnimFrame));
          }),
          (a.fn.vendors.checkBeforeDraw = function () {
            "image" == a.particles.shape.type
              ? "svg" == a.tmp.img_type && null == a.tmp.source_svg
                ? (a.tmp.checkAnimFrame = requestAnimFrame(check))
                : (cancelRequestAnimFrame(a.tmp.checkAnimFrame),
                  a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw()))
              : (a.fn.vendors.init(), a.fn.vendors.draw());
          }),
          (a.fn.vendors.init = function () {
            a.fn.retinaInit(),
              a.fn.canvasInit(),
              a.fn.canvasSize(),
              a.fn.canvasPaint(),
              a.fn.particlesCreate(),
              a.fn.vendors.densityAutoParticles(),
              (a.particles.line_linked.color_rgb_line = t(
                a.particles.line_linked.color
              ));
          }),
          (a.fn.vendors.start = function () {
            i("image", a.particles.shape.type)
              ? ((a.tmp.img_type = a.particles.shape.image.src.substr(
                  a.particles.shape.image.src.length - 3
                )),
                a.fn.vendors.loadImg(a.tmp.img_type))
              : a.fn.vendors.checkBeforeDraw();
          }),
          a.fn.vendors.eventsListeners(),
          a.fn.vendors.start();
      };
      function t(e) {
        e = e.replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
          function (e, t, i, n) {
            return t + t + i + i + n + n;
          }
        );
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t
          ? {
              r: parseInt(t[1], 16),
              g: parseInt(t[2], 16),
              b: parseInt(t[3], 16),
            }
          : null;
      }
      function i(e, t) {
        return t.indexOf(e) > -1;
      }
      (Object.deepExtend = function (e, t) {
        for (var i in t)
          t[i] && t[i].constructor && t[i].constructor === Object
            ? ((e[i] = e[i] || {}), arguments.callee(e[i], t[i]))
            : (e[i] = t[i]);
        return e;
      }),
        (window.requestAnimFrame =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (e) {
            window.setTimeout(e, 1e3 / 60);
          }),
        (window.cancelRequestAnimFrame =
          window.cancelAnimationFrame ||
          window.webkitCancelRequestAnimationFrame ||
          window.mozCancelRequestAnimationFrame ||
          window.oCancelRequestAnimationFrame ||
          window.msCancelRequestAnimationFrame ||
          clearTimeout),
        (window.pJSDom = []),
        (window.particlesJS = function (t, i) {
          "string" != typeof t && ((i = t), (t = "particles-js")),
            t || (t = "particles-js");
          var n = document.getElementById(t),
            s = "particles-js-canvas-el",
            a = n.getElementsByClassName(s);
          if (a.length) for (; a.length > 0; ) n.removeChild(a[0]);
          var o = document.createElement("canvas");
          (o.className = s),
            (o.style.width = "100%"),
            (o.style.height = "100%"),
            null != document.getElementById(t).appendChild(o) &&
              pJSDom.push(new e(t, i));
        }),
        (window.particlesJS.load = function (e, t, i) {
          var n = new XMLHttpRequest();
          n.open("GET", t),
            (n.onreadystatechange = function (t) {
              if (4 == n.readyState)
                if (200 == n.status) {
                  var s = JSON.parse(t.currentTarget.response);
                  window.particlesJS(e, s), i && i();
                } else
                  console.log("Error pJS - XMLHttpRequest status: " + n.status),
                    console.log("Error pJS - File config not found");
            }),
            n.send();
        });
    },
    928981: function (e, t, i) {
      "use strict";
      i.r(t);
      for (
        var n = "undefined" != typeof window && "undefined" != typeof document,
          s = ["Edge", "Trident", "Firefox"],
          a = 0,
          o = 0;
        o < s.length;
        o += 1
      )
        if (n && navigator.userAgent.indexOf(s[o]) >= 0) {
          a = 1;
          break;
        }
      var r =
        n && window.Promise
          ? function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  window.Promise.resolve().then(function () {
                    (t = !1), e();
                  }));
              };
            }
          : function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  setTimeout(function () {
                    (t = !1), e();
                  }, a));
              };
            };
      function l(e) {
        return e && "[object Function]" === {}.toString.call(e);
      }
      function c(e, t) {
        if (1 !== e.nodeType) return [];
        var i = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? i[t] : i;
      }
      function d(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
      }
      function u(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;
          case "#document":
            return e.body;
        }
        var t = c(e),
          i = t.overflow,
          n = t.overflowX,
          s = t.overflowY;
        return /(auto|scroll|overlay)/.test(i + s + n) ? e : u(d(e));
      }
      var h = n && !(!window.MSInputMethodContext || !document.documentMode),
        p = n && /MSIE 10/.test(navigator.userAgent);
      function f(e) {
        return 11 === e ? h : 10 === e ? p : h || p;
      }
      function m(e) {
        if (!e) return document.documentElement;
        for (
          var t = f(10) ? document.body : null, i = e.offsetParent || null;
          i === t && e.nextElementSibling;

        )
          i = (e = e.nextElementSibling).offsetParent;
        var n = i && i.nodeName;
        return n && "BODY" !== n && "HTML" !== n
          ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) &&
            "static" === c(i, "position")
            ? m(i)
            : i
          : e
          ? e.ownerDocument.documentElement
          : document.documentElement;
      }
      function g(e) {
        return null !== e.parentNode ? g(e.parentNode) : e;
      }
      function v(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
          return document.documentElement;
        var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          n = i ? e : t,
          s = i ? t : e,
          a = document.createRange();
        a.setStart(n, 0), a.setEnd(s, 0);
        var o,
          r,
          l = a.commonAncestorContainer;
        if ((e !== l && t !== l) || n.contains(s))
          return "BODY" === (r = (o = l).nodeName) ||
            ("HTML" !== r && m(o.firstElementChild) !== o)
            ? m(l)
            : l;
        var c = g(e);
        return c.host ? v(c.host, t) : v(e, g(t).host);
      }
      function _(e) {
        var t =
            "top" ===
            (arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "top")
              ? "scrollTop"
              : "scrollLeft",
          i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
          var n = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || n)[t];
        }
        return e[t];
      }
      function y(e, t) {
        var i = "x" === t ? "Left" : "Top",
          n = "Left" === i ? "Right" : "Bottom";
        return (
          parseFloat(e["border" + i + "Width"], 10) +
          parseFloat(e["border" + n + "Width"], 10)
        );
      }
      function b(e, t, i, n) {
        return Math.max(
          t["offset" + e],
          t["scroll" + e],
          i["client" + e],
          i["offset" + e],
          i["scroll" + e],
          f(10)
            ? parseInt(i["offset" + e]) +
                parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) +
                parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")])
            : 0
        );
      }
      function w(e) {
        var t = e.body,
          i = e.documentElement,
          n = f(10) && getComputedStyle(i);
        return {
          height: b("Height", t, i, n),
          width: b("Width", t, i, n),
        };
      }
      var S = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
          };
        })(),
        k = function (e, t, i) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = i),
            e
          );
        },
        C =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          };
      function x(e) {
        return C({}, e, {
          right: e.left + e.width,
          bottom: e.top + e.height,
        });
      }
      function T(e) {
        var t = {};
        try {
          if (f(10)) {
            t = e.getBoundingClientRect();
            var i = _(e, "top"),
              n = _(e, "left");
            (t.top += i), (t.left += n), (t.bottom += i), (t.right += n);
          } else t = e.getBoundingClientRect();
        } catch (e) {}
        var s = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top,
          },
          a = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
          o = a.width || e.clientWidth || s.right - s.left,
          r = a.height || e.clientHeight || s.bottom - s.top,
          l = e.offsetWidth - o,
          d = e.offsetHeight - r;
        if (l || d) {
          var u = c(e);
          (l -= y(u, "x")), (d -= y(u, "y")), (s.width -= l), (s.height -= d);
        }
        return x(s);
      }
      function D(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = f(10),
          s = "HTML" === t.nodeName,
          a = T(e),
          o = T(t),
          r = u(e),
          l = c(t),
          d = parseFloat(l.borderTopWidth, 10),
          h = parseFloat(l.borderLeftWidth, 10);
        i &&
          s &&
          ((o.top = Math.max(o.top, 0)), (o.left = Math.max(o.left, 0)));
        var p = x({
          top: a.top - o.top - d,
          left: a.left - o.left - h,
          width: a.width,
          height: a.height,
        });
        if (((p.marginTop = 0), (p.marginLeft = 0), !n && s)) {
          var m = parseFloat(l.marginTop, 10),
            g = parseFloat(l.marginLeft, 10);
          (p.top -= d - m),
            (p.bottom -= d - m),
            (p.left -= h - g),
            (p.right -= h - g),
            (p.marginTop = m),
            (p.marginLeft = g);
        }
        return (
          (n && !i ? t.contains(r) : t === r && "BODY" !== r.nodeName) &&
            (p = (function (e, t) {
              var i =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                n = _(t, "top"),
                s = _(t, "left"),
                a = i ? -1 : 1;
              return (
                (e.top += n * a),
                (e.bottom += n * a),
                (e.left += s * a),
                (e.right += s * a),
                e
              );
            })(p, t)),
          p
        );
      }
      function E(e) {
        var t = e.nodeName;
        if ("BODY" === t || "HTML" === t) return !1;
        if ("fixed" === c(e, "position")) return !0;
        var i = d(e);
        return !!i && E(i);
      }
      function I(e) {
        if (!e || !e.parentElement || f()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === c(t, "transform"); )
          t = t.parentElement;
        return t || document.documentElement;
      }
      function A(e, t, i, n) {
        var s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          a = {
            top: 0,
            left: 0,
          },
          o = s ? I(e) : v(e, t);
        if ("viewport" === n)
          a = (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i = e.ownerDocument.documentElement,
              n = D(e, i),
              s = Math.max(i.clientWidth, window.innerWidth || 0),
              a = Math.max(i.clientHeight, window.innerHeight || 0),
              o = t ? 0 : _(i),
              r = t ? 0 : _(i, "left");
            return x({
              top: o - n.top + n.marginTop,
              left: r - n.left + n.marginLeft,
              width: s,
              height: a,
            });
          })(o, s);
        else {
          var r = void 0;
          "scrollParent" === n
            ? "BODY" === (r = u(d(t))).nodeName &&
              (r = e.ownerDocument.documentElement)
            : (r = "window" === n ? e.ownerDocument.documentElement : n);
          var l = D(r, o, s);
          if ("HTML" !== r.nodeName || E(o)) a = l;
          else {
            var c = w(e.ownerDocument),
              h = c.height,
              p = c.width;
            (a.top += l.top - l.marginTop),
              (a.bottom = h + l.top),
              (a.left += l.left - l.marginLeft),
              (a.right = p + l.left);
          }
        }
        var f = "number" == typeof (i = i || 0);
        return (
          (a.left += f ? i : i.left || 0),
          (a.top += f ? i : i.top || 0),
          (a.right -= f ? i : i.right || 0),
          (a.bottom -= f ? i : i.bottom || 0),
          a
        );
      }
      function O(e, t, i, n, s) {
        var a =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var o = A(i, n, a, s),
          r = {
            top: {
              width: o.width,
              height: t.top - o.top,
            },
            right: {
              width: o.right - t.right,
              height: o.height,
            },
            bottom: {
              width: o.width,
              height: o.bottom - t.bottom,
            },
            left: {
              width: t.left - o.left,
              height: o.height,
            },
          },
          l = Object.keys(r)
            .map(function (e) {
              return C(
                {
                  key: e,
                },
                r[e],
                {
                  area: ((t = r[e]), t.width * t.height),
                }
              );
              var t;
            })
            .sort(function (e, t) {
              return t.area - e.area;
            }),
          c = l.filter(function (e) {
            var t = e.width,
              n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight;
          }),
          d = c.length > 0 ? c[0].key : l[0].key,
          u = e.split("-")[1];
        return d + (u ? "-" + u : "");
      }
      function M(e, t, i) {
        var n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return D(i, n ? I(t) : v(t, i), n);
      }
      function N(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
          i = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          n = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
          width: e.offsetWidth + n,
          height: e.offsetHeight + i,
        };
      }
      function L(e) {
        var t = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom",
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
          return t[e];
        });
      }
      function P(e, t, i) {
        i = i.split("-")[0];
        var n = N(e),
          s = {
            width: n.width,
            height: n.height,
          },
          a = -1 !== ["right", "left"].indexOf(i),
          o = a ? "top" : "left",
          r = a ? "left" : "top",
          l = a ? "height" : "width",
          c = a ? "width" : "height";
        return (
          (s[o] = t[o] + t[l] / 2 - n[l] / 2),
          (s[r] = i === r ? t[r] - n[c] : t[L(r)]),
          s
        );
      }
      function R(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
      }
      function H(e, t, i) {
        return (
          (void 0 === i
            ? e
            : e.slice(
                0,
                (function (e, t, i) {
                  if (Array.prototype.findIndex)
                    return e.findIndex(function (e) {
                      return e[t] === i;
                    });
                  var n = R(e, function (e) {
                    return e[t] === i;
                  });
                  return e.indexOf(n);
                })(e, "name", i)
              )
          ).forEach(function (e) {
            e.function &&
              console.warn(
                "`modifier.function` is deprecated, use `modifier.fn`!"
              );
            var i = e.function || e.fn;
            e.enabled &&
              l(i) &&
              ((t.offsets.popper = x(t.offsets.popper)),
              (t.offsets.reference = x(t.offsets.reference)),
              (t = i(t, e)));
          }),
          t
        );
      }
      function $() {
        if (!this.state.isDestroyed) {
          var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {},
          };
          (e.offsets.reference = M(
            this.state,
            this.popper,
            this.reference,
            this.options.positionFixed
          )),
            (e.placement = O(
              this.options.placement,
              e.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding
            )),
            (e.originalPlacement = e.placement),
            (e.positionFixed = this.options.positionFixed),
            (e.offsets.popper = P(
              this.popper,
              e.offsets.reference,
              e.placement
            )),
            (e.offsets.popper.position = this.options.positionFixed
              ? "fixed"
              : "absolute"),
            (e = H(this.modifiers, e)),
            this.state.isCreated
              ? this.options.onUpdate(e)
              : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
      }
      function W(e, t) {
        return e.some(function (e) {
          var i = e.name;
          return e.enabled && i === t;
        });
      }
      function F(e) {
        for (
          var t = [!1, "ms", "Webkit", "Moz", "O"],
            i = e.charAt(0).toUpperCase() + e.slice(1),
            n = 0;
          n < t.length;
          n++
        ) {
          var s = t[n],
            a = s ? "" + s + i : e;
          if (void 0 !== document.body.style[a]) return a;
        }
        return null;
      }
      function j() {
        return (
          (this.state.isDestroyed = !0),
          W(this.modifiers, "applyStyle") &&
            (this.popper.removeAttribute("x-placement"),
            (this.popper.style.position = ""),
            (this.popper.style.top = ""),
            (this.popper.style.left = ""),
            (this.popper.style.right = ""),
            (this.popper.style.bottom = ""),
            (this.popper.style.willChange = ""),
            (this.popper.style[F("transform")] = "")),
          this.disableEventListeners(),
          this.options.removeOnDestroy &&
            this.popper.parentNode.removeChild(this.popper),
          this
        );
      }
      function B(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
      }
      function z(e, t, i, n) {
        var s = "BODY" === e.nodeName,
          a = s ? e.ownerDocument.defaultView : e;
        a.addEventListener(t, i, {
          passive: !0,
        }),
          s || z(u(a.parentNode), t, i, n),
          n.push(a);
      }
      function q(e, t, i, n) {
        (i.updateBound = n),
          B(e).addEventListener("resize", i.updateBound, {
            passive: !0,
          });
        var s = u(e);
        return (
          z(s, "scroll", i.updateBound, i.scrollParents),
          (i.scrollElement = s),
          (i.eventsEnabled = !0),
          i
        );
      }
      function U() {
        this.state.eventsEnabled ||
          (this.state = q(
            this.reference,
            this.options,
            this.state,
            this.scheduleUpdate
          ));
      }
      function V() {
        var e, t;
        this.state.eventsEnabled &&
          (cancelAnimationFrame(this.scheduleUpdate),
          (this.state =
            ((e = this.reference),
            (t = this.state),
            B(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
              e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t)));
      }
      function Y(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
      }
      function K(e, t) {
        Object.keys(t).forEach(function (i) {
          var n = "";
          -1 !==
            ["width", "height", "top", "right", "bottom", "left"].indexOf(i) &&
            Y(t[i]) &&
            (n = "px"),
            (e.style[i] = t[i] + n);
        });
      }
      var G = n && /Firefox/i.test(navigator.userAgent);
      function X(e, t, i) {
        var n = R(e, function (e) {
            return e.name === t;
          }),
          s =
            !!n &&
            e.some(function (e) {
              return e.name === i && e.enabled && e.order < n.order;
            });
        if (!s) {
          var a = "`" + t + "`",
            o = "`" + i + "`";
          console.warn(
            o +
              " modifier is required by " +
              a +
              " modifier in order to work, be sure to include it before " +
              a +
              "!"
          );
        }
        return s;
      }
      var Q = [
          "auto-start",
          "auto",
          "auto-end",
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
        J = Q.slice(3);
      function Z(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = J.indexOf(e),
          n = J.slice(i + 1).concat(J.slice(0, i));
        return t ? n.reverse() : n;
      }
      var ee = "flip",
        te = "clockwise",
        ie = "counterclockwise";
      function ne(e, t, i, n) {
        var s = [0, 0],
          a = -1 !== ["right", "left"].indexOf(n),
          o = e.split(/(\+|\-)/).map(function (e) {
            return e.trim();
          }),
          r = o.indexOf(
            R(o, function (e) {
              return -1 !== e.search(/,|\s/);
            })
          );
        o[r] &&
          -1 === o[r].indexOf(",") &&
          console.warn(
            "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
          );
        var l = /\s*,\s*|\s+/,
          c =
            -1 !== r
              ? [
                  o.slice(0, r).concat([o[r].split(l)[0]]),
                  [o[r].split(l)[1]].concat(o.slice(r + 1)),
                ]
              : [o];
        return (
          (c = c.map(function (e, n) {
            var s = (1 === n ? !a : a) ? "height" : "width",
              o = !1;
            return e
              .reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                  ? ((e[e.length - 1] = t), (o = !0), e)
                  : o
                  ? ((e[e.length - 1] += t), (o = !1), e)
                  : e.concat(t);
              }, [])
              .map(function (e) {
                return (function (e, t, i, n) {
                  var s = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                    a = +s[1],
                    o = s[2];
                  if (!a) return e;
                  if (0 === o.indexOf("%")) {
                    return (x("%p" === o ? i : n)[t] / 100) * a;
                  }
                  if ("vh" === o || "vw" === o)
                    return (
                      (("vh" === o
                        ? Math.max(
                            document.documentElement.clientHeight,
                            window.innerHeight || 0
                          )
                        : Math.max(
                            document.documentElement.clientWidth,
                            window.innerWidth || 0
                          )) /
                        100) *
                      a
                    );
                  return a;
                })(e, s, t, i);
              });
          })),
          c.forEach(function (e, t) {
            e.forEach(function (i, n) {
              Y(i) && (s[t] += i * ("-" === e[n - 1] ? -1 : 1));
            });
          }),
          s
        );
      }
      var se = {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                i = t.split("-")[0],
                n = t.split("-")[1];
              if (n) {
                var s = e.offsets,
                  a = s.reference,
                  o = s.popper,
                  r = -1 !== ["bottom", "top"].indexOf(i),
                  l = r ? "left" : "top",
                  c = r ? "width" : "height",
                  d = {
                    start: k({}, l, a[l]),
                    end: k({}, l, a[l] + a[c] - o[c]),
                  };
                e.offsets.popper = C({}, o, d[n]);
              }
              return e;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (e, t) {
              var i = t.offset,
                n = e.placement,
                s = e.offsets,
                a = s.popper,
                o = s.reference,
                r = n.split("-")[0],
                l = void 0;
              return (
                (l = Y(+i) ? [+i, 0] : ne(i, a, o, r)),
                "left" === r
                  ? ((a.top += l[0]), (a.left -= l[1]))
                  : "right" === r
                  ? ((a.top += l[0]), (a.left += l[1]))
                  : "top" === r
                  ? ((a.left += l[0]), (a.top -= l[1]))
                  : "bottom" === r && ((a.left += l[0]), (a.top += l[1])),
                (e.popper = a),
                e
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var i = t.boundariesElement || m(e.instance.popper);
              e.instance.reference === i && (i = m(i));
              var n = F("transform"),
                s = e.instance.popper.style,
                a = s.top,
                o = s.left,
                r = s[n];
              (s.top = ""), (s.left = ""), (s[n] = "");
              var l = A(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                i,
                e.positionFixed
              );
              (s.top = a), (s.left = o), (s[n] = r), (t.boundaries = l);
              var c = t.priority,
                d = e.offsets.popper,
                u = {
                  primary: function (e) {
                    var i = d[e];
                    return (
                      d[e] < l[e] &&
                        !t.escapeWithReference &&
                        (i = Math.max(d[e], l[e])),
                      k({}, e, i)
                    );
                  },
                  secondary: function (e) {
                    var i = "right" === e ? "left" : "top",
                      n = d[i];
                    return (
                      d[e] > l[e] &&
                        !t.escapeWithReference &&
                        (n = Math.min(
                          d[i],
                          l[e] - ("right" === e ? d.width : d.height)
                        )),
                      k({}, i, n)
                    );
                  },
                };
              return (
                c.forEach(function (e) {
                  var t =
                    -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                  d = C({}, d, u[t](e));
                }),
                (e.offsets.popper = d),
                e
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                i = t.popper,
                n = t.reference,
                s = e.placement.split("-")[0],
                a = Math.floor,
                o = -1 !== ["top", "bottom"].indexOf(s),
                r = o ? "right" : "bottom",
                l = o ? "left" : "top",
                c = o ? "width" : "height";
              return (
                i[r] < a(n[l]) && (e.offsets.popper[l] = a(n[l]) - i[c]),
                i[l] > a(n[r]) && (e.offsets.popper[l] = a(n[r])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, t) {
              var i;
              if (!X(e.instance.modifiers, "arrow", "keepTogether")) return e;
              var n = t.element;
              if ("string" == typeof n) {
                if (!(n = e.instance.popper.querySelector(n))) return e;
              } else if (!e.instance.popper.contains(n))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  e
                );
              var s = e.placement.split("-")[0],
                a = e.offsets,
                o = a.popper,
                r = a.reference,
                l = -1 !== ["left", "right"].indexOf(s),
                d = l ? "height" : "width",
                u = l ? "Top" : "Left",
                h = u.toLowerCase(),
                p = l ? "left" : "top",
                f = l ? "bottom" : "right",
                m = N(n)[d];
              r[f] - m < o[h] && (e.offsets.popper[h] -= o[h] - (r[f] - m)),
                r[h] + m > o[f] && (e.offsets.popper[h] += r[h] + m - o[f]),
                (e.offsets.popper = x(e.offsets.popper));
              var g = r[h] + r[d] / 2 - m / 2,
                v = c(e.instance.popper),
                _ = parseFloat(v["margin" + u], 10),
                y = parseFloat(v["border" + u + "Width"], 10),
                b = g - e.offsets.popper[h] - _ - y;
              return (
                (b = Math.max(Math.min(o[d] - m, b), 0)),
                (e.arrowElement = n),
                (e.offsets.arrow =
                  (k((i = {}), h, Math.round(b)), k(i, p, ""), i)),
                e
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (W(e.instance.modifiers, "inner")) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var i = A(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  t.boundariesElement,
                  e.positionFixed
                ),
                n = e.placement.split("-")[0],
                s = L(n),
                a = e.placement.split("-")[1] || "",
                o = [];
              switch (t.behavior) {
                case ee:
                  o = [n, s];
                  break;
                case te:
                  o = Z(n);
                  break;
                case ie:
                  o = Z(n, !0);
                  break;
                default:
                  o = t.behavior;
              }
              return (
                o.forEach(function (r, l) {
                  if (n !== r || o.length === l + 1) return e;
                  (n = e.placement.split("-")[0]), (s = L(n));
                  var c = e.offsets.popper,
                    d = e.offsets.reference,
                    u = Math.floor,
                    h =
                      ("left" === n && u(c.right) > u(d.left)) ||
                      ("right" === n && u(c.left) < u(d.right)) ||
                      ("top" === n && u(c.bottom) > u(d.top)) ||
                      ("bottom" === n && u(c.top) < u(d.bottom)),
                    p = u(c.left) < u(i.left),
                    f = u(c.right) > u(i.right),
                    m = u(c.top) < u(i.top),
                    g = u(c.bottom) > u(i.bottom),
                    v =
                      ("left" === n && p) ||
                      ("right" === n && f) ||
                      ("top" === n && m) ||
                      ("bottom" === n && g),
                    _ = -1 !== ["top", "bottom"].indexOf(n),
                    y =
                      !!t.flipVariations &&
                      ((_ && "start" === a && p) ||
                        (_ && "end" === a && f) ||
                        (!_ && "start" === a && m) ||
                        (!_ && "end" === a && g)),
                    b =
                      !!t.flipVariationsByContent &&
                      ((_ && "start" === a && f) ||
                        (_ && "end" === a && p) ||
                        (!_ && "start" === a && g) ||
                        (!_ && "end" === a && m)),
                    w = y || b;
                  (h || v || w) &&
                    ((e.flipped = !0),
                    (h || v) && (n = o[l + 1]),
                    w &&
                      (a = (function (e) {
                        return "end" === e
                          ? "start"
                          : "start" === e
                          ? "end"
                          : e;
                      })(a)),
                    (e.placement = n + (a ? "-" + a : "")),
                    (e.offsets.popper = C(
                      {},
                      e.offsets.popper,
                      P(e.instance.popper, e.offsets.reference, e.placement)
                    )),
                    (e = H(e.instance.modifiers, e, "flip")));
                }),
                e
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                i = t.split("-")[0],
                n = e.offsets,
                s = n.popper,
                a = n.reference,
                o = -1 !== ["left", "right"].indexOf(i),
                r = -1 === ["top", "left"].indexOf(i);
              return (
                (s[o ? "left" : "top"] =
                  a[i] - (r ? s[o ? "width" : "height"] : 0)),
                (e.placement = L(t)),
                (e.offsets.popper = x(s)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!X(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                i = R(e.instance.modifiers, function (e) {
                  return "preventOverflow" === e.name;
                }).boundaries;
              if (
                t.bottom < i.top ||
                t.left > i.right ||
                t.top > i.bottom ||
                t.right < i.left
              ) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
              }
              return e;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var i = t.x,
                n = t.y,
                s = e.offsets.popper,
                a = R(e.instance.modifiers, function (e) {
                  return "applyStyle" === e.name;
                }).gpuAcceleration;
              void 0 !== a &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var o = void 0 !== a ? a : t.gpuAcceleration,
                r = m(e.instance.popper),
                l = T(r),
                c = {
                  position: s.position,
                },
                d = (function (e, t) {
                  var i = e.offsets,
                    n = i.popper,
                    s = i.reference,
                    a = Math.round,
                    o = Math.floor,
                    r = function (e) {
                      return e;
                    },
                    l = a(s.width),
                    c = a(n.width),
                    d = -1 !== ["left", "right"].indexOf(e.placement),
                    u = -1 !== e.placement.indexOf("-"),
                    h = t ? (d || u || l % 2 == c % 2 ? a : o) : r,
                    p = t ? a : r;
                  return {
                    left: h(
                      l % 2 == 1 && c % 2 == 1 && !u && t ? n.left - 1 : n.left
                    ),
                    top: p(n.top),
                    bottom: p(n.bottom),
                    right: h(n.right),
                  };
                })(e, window.devicePixelRatio < 2 || !G),
                u = "bottom" === i ? "top" : "bottom",
                h = "right" === n ? "left" : "right",
                p = F("transform"),
                f = void 0,
                g = void 0;
              if (
                ((g =
                  "bottom" === u
                    ? "HTML" === r.nodeName
                      ? -r.clientHeight + d.bottom
                      : -l.height + d.bottom
                    : d.top),
                (f =
                  "right" === h
                    ? "HTML" === r.nodeName
                      ? -r.clientWidth + d.right
                      : -l.width + d.right
                    : d.left),
                o && p)
              )
                (c[p] = "translate3d(" + f + "px, " + g + "px, 0)"),
                  (c[u] = 0),
                  (c[h] = 0),
                  (c.willChange = "transform");
              else {
                var v = "bottom" === u ? -1 : 1,
                  _ = "right" === h ? -1 : 1;
                (c[u] = g * v), (c[h] = f * _), (c.willChange = u + ", " + h);
              }
              var y = {
                "x-placement": e.placement,
              };
              return (
                (e.attributes = C({}, y, e.attributes)),
                (e.styles = C({}, c, e.styles)),
                (e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              var t, i;
              return (
                K(e.instance.popper, e.styles),
                (t = e.instance.popper),
                (i = e.attributes),
                Object.keys(i).forEach(function (e) {
                  !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e);
                }),
                e.arrowElement &&
                  Object.keys(e.arrowStyles).length &&
                  K(e.arrowElement, e.arrowStyles),
                e
              );
            },
            onLoad: function (e, t, i, n, s) {
              var a = M(s, t, e, i.positionFixed),
                o = O(
                  i.placement,
                  a,
                  t,
                  e,
                  i.modifiers.flip.boundariesElement,
                  i.modifiers.flip.padding
                );
              return (
                t.setAttribute("x-placement", o),
                K(t, {
                  position: i.positionFixed ? "fixed" : "absolute",
                }),
                i
              );
            },
            gpuAcceleration: void 0,
          },
        },
        ae = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: se,
        },
        oe = (function () {
          function e(t, i) {
            var n = this,
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.scheduleUpdate = function () {
                return requestAnimationFrame(n.update);
              }),
              (this.update = r(this.update.bind(this))),
              (this.options = C({}, e.Defaults, s)),
              (this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: [],
              }),
              (this.reference = t && t.jquery ? t[0] : t),
              (this.popper = i && i.jquery ? i[0] : i),
              (this.options.modifiers = {}),
              Object.keys(C({}, e.Defaults.modifiers, s.modifiers)).forEach(
                function (t) {
                  n.options.modifiers[t] = C(
                    {},
                    e.Defaults.modifiers[t] || {},
                    s.modifiers ? s.modifiers[t] : {}
                  );
                }
              ),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function (e) {
                  return C(
                    {
                      name: e,
                    },
                    n.options.modifiers[e]
                  );
                })
                .sort(function (e, t) {
                  return e.order - t.order;
                })),
              this.modifiers.forEach(function (e) {
                e.enabled &&
                  l(e.onLoad) &&
                  e.onLoad(n.reference, n.popper, n.options, e, n.state);
              }),
              this.update();
            var a = this.options.eventsEnabled;
            a && this.enableEventListeners(), (this.state.eventsEnabled = a);
          }
          return (
            S(e, [
              {
                key: "update",
                value: function () {
                  return $.call(this);
                },
              },
              {
                key: "destroy",
                value: function () {
                  return j.call(this);
                },
              },
              {
                key: "enableEventListeners",
                value: function () {
                  return U.call(this);
                },
              },
              {
                key: "disableEventListeners",
                value: function () {
                  return V.call(this);
                },
              },
            ]),
            e
          );
        })();
      (oe.Utils = ("undefined" != typeof window ? window : i.g).PopperUtils),
        (oe.placements = Q),
        (oe.Defaults = ae),
        (t.default = oe);
    },
    611339: function (e, t, i) {
      var n = i(619755);
      !(function () {
        if (n && n.fn && n.fn.select2 && n.fn.select2.amd)
          var e = n.fn.select2.amd;
        e.define("select2/i18n/ru", [], function () {
          function e(e, t, i, n) {
            return (e % 10 < 5 && e % 10 > 0 && e % 100 < 5) || e % 100 > 20
              ? e % 10 > 1
                ? i
                : t
              : n;
          }
          return {
            errorLoading: function () {
              return "Невозможно загрузить результаты";
            },
            inputTooLong: function (t) {
              var i = t.input.length - t.maximum,
                n = "Пожалуйста, введите на " + i + " символ";
              return (n += e(i, "", "a", "ов")) + " меньше";
            },
            inputTooShort: function (t) {
              var i = t.minimum - t.input.length;
              return (
                "Пожалуйста, введите ещё хотя бы " +
                i +
                " символ" +
                e(i, "", "a", "ов")
              );
            },
            loadingMore: function () {
              return "Загрузка данных…";
            },
            maximumSelected: function (t) {
              return (
                "Вы можете выбрать не более " +
                t.maximum +
                " элемент" +
                e(t.maximum, "", "a", "ов")
              );
            },
            noResults: function () {
              return "Совпадений не найдено";
            },
            searching: function () {
              return "Поиск…";
            },
            removeAllItems: function () {
              return "Удалить все элементы";
            },
          };
        }),
          e.define,
          e.require;
      })();
    },
    129154: function (e, t, i) {
      var n, s, a;
      !(function (o) {
        "use strict";
        (s = [i(619755)]),
          (n = function (e) {
            var t = window.Slick || {};
            ((t = (function () {
              var t = 0;
              function i(i, n) {
                var s,
                  a = this;
                (a.defaults = {
                  accessibility: !0,
                  adaptiveHeight: !1,
                  appendArrows: e(i),
                  appendDots: e(i),
                  arrows: !0,
                  asNavFor: null,
                  prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                  nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                  autoplay: !1,
                  autoplaySpeed: 3e3,
                  centerMode: !1,
                  centerPadding: "50px",
                  cssEase: "ease",
                  customPaging: function (t, i) {
                    return e('<button type="button" />').text(i + 1);
                  },
                  dots: !1,
                  dotsClass: "slick-dots",
                  draggable: !0,
                  easing: "linear",
                  edgeFriction: 0.35,
                  fade: !1,
                  focusOnSelect: !1,
                  focusOnChange: !1,
                  infinite: !0,
                  initialSlide: 0,
                  lazyLoad: "ondemand",
                  mobileFirst: !1,
                  pauseOnHover: !0,
                  pauseOnFocus: !0,
                  pauseOnDotsHover: !1,
                  respondTo: "window",
                  responsive: null,
                  rows: 1,
                  rtl: !1,
                  slide: "",
                  slidesPerRow: 1,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 500,
                  swipe: !0,
                  swipeToSlide: !1,
                  touchMove: !0,
                  touchThreshold: 5,
                  useCSS: !0,
                  useTransform: !0,
                  variableWidth: !1,
                  vertical: !1,
                  verticalSwiping: !1,
                  waitForAnimate: !0,
                  zIndex: 1e3,
                }),
                  (a.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                  }),
                  e.extend(a, a.initials),
                  (a.activeBreakpoint = null),
                  (a.animType = null),
                  (a.animProp = null),
                  (a.breakpoints = []),
                  (a.breakpointSettings = []),
                  (a.cssTransitions = !1),
                  (a.focussed = !1),
                  (a.interrupted = !1),
                  (a.hidden = "hidden"),
                  (a.paused = !0),
                  (a.positionProp = null),
                  (a.respondTo = null),
                  (a.rowCount = 1),
                  (a.shouldClick = !0),
                  (a.$slider = e(i)),
                  (a.$slidesCache = null),
                  (a.transformType = null),
                  (a.transitionType = null),
                  (a.visibilityChange = "visibilitychange"),
                  (a.windowWidth = 0),
                  (a.windowTimer = null),
                  (s = e(i).data("slick") || {}),
                  (a.options = e.extend({}, a.defaults, n, s)),
                  (a.currentSlide = a.options.initialSlide),
                  (a.originalSettings = a.options),
                  void 0 !== document.mozHidden
                    ? ((a.hidden = "mozHidden"),
                      (a.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((a.hidden = "webkitHidden"),
                      (a.visibilityChange = "webkitvisibilitychange")),
                  (a.autoPlay = e.proxy(a.autoPlay, a)),
                  (a.autoPlayClear = e.proxy(a.autoPlayClear, a)),
                  (a.autoPlayIterator = e.proxy(a.autoPlayIterator, a)),
                  (a.changeSlide = e.proxy(a.changeSlide, a)),
                  (a.clickHandler = e.proxy(a.clickHandler, a)),
                  (a.selectHandler = e.proxy(a.selectHandler, a)),
                  (a.setPosition = e.proxy(a.setPosition, a)),
                  (a.swipeHandler = e.proxy(a.swipeHandler, a)),
                  (a.dragHandler = e.proxy(a.dragHandler, a)),
                  (a.keyHandler = e.proxy(a.keyHandler, a)),
                  (a.instanceUid = t++),
                  (a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                  a.registerBreakpoints(),
                  a.init(!0);
              }
              return i;
            })()).prototype.activateADA = function () {
              this.$slideTrack
                .find(".slick-active")
                .attr({
                  "aria-hidden": "false",
                })
                .find("a, input, button, select")
                .attr({
                  tabindex: "0",
                });
            }),
              (t.prototype.addSlide = t.prototype.slickAdd =
                function (t, i, n) {
                  var s = this;
                  if ("boolean" == typeof i) (n = i), (i = null);
                  else if (i < 0 || i >= s.slideCount) return !1;
                  s.unload(),
                    "number" == typeof i
                      ? 0 === i && 0 === s.$slides.length
                        ? e(t).appendTo(s.$slideTrack)
                        : n
                        ? e(t).insertBefore(s.$slides.eq(i))
                        : e(t).insertAfter(s.$slides.eq(i))
                      : !0 === n
                      ? e(t).prependTo(s.$slideTrack)
                      : e(t).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (t, i) {
                      e(i).attr("data-slick-index", t);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
                }),
              (t.prototype.animateHeight = function () {
                var e = this;
                if (
                  1 === e.options.slidesToShow &&
                  !0 === e.options.adaptiveHeight &&
                  !1 === e.options.vertical
                ) {
                  var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                  e.$list.animate(
                    {
                      height: t,
                    },
                    e.options.speed
                  );
                }
              }),
              (t.prototype.animateSlide = function (t, i) {
                var n = {},
                  s = this;
                s.animateHeight(),
                  !0 === s.options.rtl && !1 === s.options.vertical && (t = -t),
                  !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                      ? s.$slideTrack.animate(
                          {
                            left: t,
                          },
                          s.options.speed,
                          s.options.easing,
                          i
                        )
                      : s.$slideTrack.animate(
                          {
                            top: t,
                          },
                          s.options.speed,
                          s.options.easing,
                          i
                        )
                    : !1 === s.cssTransitions
                    ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                      e({
                        animStart: s.currentLeft,
                      }).animate(
                        {
                          animStart: t,
                        },
                        {
                          duration: s.options.speed,
                          easing: s.options.easing,
                          step: function (e) {
                            (e = Math.ceil(e)),
                              !1 === s.options.vertical
                                ? ((n[s.animType] =
                                    "translate(" + e + "px, 0px)"),
                                  s.$slideTrack.css(n))
                                : ((n[s.animType] =
                                    "translate(0px," + e + "px)"),
                                  s.$slideTrack.css(n));
                          },
                          complete: function () {
                            i && i.call();
                          },
                        }
                      ))
                    : (s.applyTransition(),
                      (t = Math.ceil(t)),
                      !1 === s.options.vertical
                        ? (n[s.animType] = "translate3d(" + t + "px, 0px, 0px)")
                        : (n[s.animType] = "translate3d(0px," + t + "px, 0px)"),
                      s.$slideTrack.css(n),
                      i &&
                        setTimeout(function () {
                          s.disableTransition(), i.call();
                        }, s.options.speed));
              }),
              (t.prototype.getNavTarget = function () {
                var t = this,
                  i = t.options.asNavFor;
                return i && null !== i && (i = e(i).not(t.$slider)), i;
              }),
              (t.prototype.asNavFor = function (t) {
                var i = this.getNavTarget();
                null !== i &&
                  "object" == typeof i &&
                  i.each(function () {
                    var i = e(this).slick("getSlick");
                    i.unslicked || i.slideHandler(t, !0);
                  });
              }),
              (t.prototype.applyTransition = function (e) {
                var t = this,
                  i = {};
                !1 === t.options.fade
                  ? (i[t.transitionType] =
                      t.transformType +
                      " " +
                      t.options.speed +
                      "ms " +
                      t.options.cssEase)
                  : (i[t.transitionType] =
                      "opacity " + t.options.speed + "ms " + t.options.cssEase),
                  !1 === t.options.fade
                    ? t.$slideTrack.css(i)
                    : t.$slides.eq(e).css(i);
              }),
              (t.prototype.autoPlay = function () {
                var e = this;
                e.autoPlayClear(),
                  e.slideCount > e.options.slidesToShow &&
                    (e.autoPlayTimer = setInterval(
                      e.autoPlayIterator,
                      e.options.autoplaySpeed
                    ));
              }),
              (t.prototype.autoPlayClear = function () {
                var e = this;
                e.autoPlayTimer && clearInterval(e.autoPlayTimer);
              }),
              (t.prototype.autoPlayIterator = function () {
                var e = this,
                  t = e.currentSlide + e.options.slidesToScroll;
                e.paused ||
                  e.interrupted ||
                  e.focussed ||
                  (!1 === e.options.infinite &&
                    (1 === e.direction &&
                    e.currentSlide + 1 === e.slideCount - 1
                      ? (e.direction = 0)
                      : 0 === e.direction &&
                        ((t = e.currentSlide - e.options.slidesToScroll),
                        e.currentSlide - 1 == 0 && (e.direction = 1))),
                  e.slideHandler(t));
              }),
              (t.prototype.buildArrows = function () {
                var t = this;
                !0 === t.options.arrows &&
                  ((t.$prevArrow = e(t.options.prevArrow).addClass(
                    "slick-arrow"
                  )),
                  (t.$nextArrow = e(t.options.nextArrow).addClass(
                    "slick-arrow"
                  )),
                  t.slideCount > t.options.slidesToShow
                    ? (t.$prevArrow
                        .removeClass("slick-hidden")
                        .removeAttr("aria-hidden tabindex"),
                      t.$nextArrow
                        .removeClass("slick-hidden")
                        .removeAttr("aria-hidden tabindex"),
                      t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.prependTo(t.options.appendArrows),
                      t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.appendTo(t.options.appendArrows),
                      !0 !== t.options.infinite &&
                        t.$prevArrow
                          .addClass("slick-disabled")
                          .attr("aria-disabled", "true"))
                    : t.$prevArrow
                        .add(t.$nextArrow)
                        .addClass("slick-hidden")
                        .attr({
                          "aria-disabled": "true",
                          tabindex: "-1",
                        }));
              }),
              (t.prototype.buildDots = function () {
                var t,
                  i,
                  n = this;
                if (
                  !0 === n.options.dots &&
                  n.slideCount > n.options.slidesToShow
                ) {
                  for (
                    n.$slider.addClass("slick-dotted"),
                      i = e("<ul />").addClass(n.options.dotsClass),
                      t = 0;
                    t <= n.getDotCount();
                    t += 1
                  )
                    i.append(
                      e("<li />").append(
                        n.options.customPaging.call(this, n, t)
                      )
                    );
                  (n.$dots = i.appendTo(n.options.appendDots)),
                    n.$dots.find("li").first().addClass("slick-active");
                }
              }),
              (t.prototype.buildOut = function () {
                var t = this;
                (t.$slides = t.$slider
                  .children(t.options.slide + ":not(.slick-cloned)")
                  .addClass("slick-slide")),
                  (t.slideCount = t.$slides.length),
                  t.$slides.each(function (t, i) {
                    e(i)
                      .attr("data-slick-index", t)
                      .data("originalStyling", e(i).attr("style") || "");
                  }),
                  t.$slider.addClass("slick-slider"),
                  (t.$slideTrack =
                    0 === t.slideCount
                      ? e('<div class="slick-track"/>').appendTo(t.$slider)
                      : t.$slides
                          .wrapAll('<div class="slick-track"/>')
                          .parent()),
                  (t.$list = t.$slideTrack
                    .wrap('<div class="slick-list"/>')
                    .parent()),
                  t.$slideTrack.css("opacity", 0),
                  (!0 !== t.options.centerMode &&
                    !0 !== t.options.swipeToSlide) ||
                    (t.options.slidesToScroll = 1),
                  e("img[data-lazy]", t.$slider)
                    .not("[src]")
                    .addClass("slick-loading"),
                  t.setupInfinite(),
                  t.buildArrows(),
                  t.buildDots(),
                  t.updateDots(),
                  t.setSlideClasses(
                    "number" == typeof t.currentSlide ? t.currentSlide : 0
                  ),
                  !0 === t.options.draggable && t.$list.addClass("draggable");
              }),
              (t.prototype.buildRows = function () {
                var e,
                  t,
                  i,
                  n,
                  s,
                  a,
                  o,
                  r = this;
                if (
                  ((n = document.createDocumentFragment()),
                  (a = r.$slider.children()),
                  r.options.rows > 0)
                ) {
                  for (
                    o = r.options.slidesPerRow * r.options.rows,
                      s = Math.ceil(a.length / o),
                      e = 0;
                    e < s;
                    e++
                  ) {
                    var l = document.createElement("div");
                    for (t = 0; t < r.options.rows; t++) {
                      var c = document.createElement("div");
                      for (i = 0; i < r.options.slidesPerRow; i++) {
                        var d = e * o + (t * r.options.slidesPerRow + i);
                        a.get(d) && c.appendChild(a.get(d));
                      }
                      l.appendChild(c);
                    }
                    n.appendChild(l);
                  }
                  r.$slider.empty().append(n),
                    r.$slider
                      .children()
                      .children()
                      .children()
                      .css({
                        width: 100 / r.options.slidesPerRow + "%",
                        display: "inline-block",
                      });
                }
              }),
              (t.prototype.checkResponsive = function (t, i) {
                var n,
                  s,
                  a,
                  o = this,
                  r = !1,
                  l = o.$slider.width(),
                  c = window.innerWidth || e(window).width();
                if (
                  ("window" === o.respondTo
                    ? (a = c)
                    : "slider" === o.respondTo
                    ? (a = l)
                    : "min" === o.respondTo && (a = Math.min(c, l)),
                  o.options.responsive &&
                    o.options.responsive.length &&
                    null !== o.options.responsive)
                ) {
                  for (n in ((s = null), o.breakpoints))
                    o.breakpoints.hasOwnProperty(n) &&
                      (!1 === o.originalSettings.mobileFirst
                        ? a < o.breakpoints[n] && (s = o.breakpoints[n])
                        : a > o.breakpoints[n] && (s = o.breakpoints[n]));
                  null !== s
                    ? null !== o.activeBreakpoint
                      ? (s !== o.activeBreakpoint || i) &&
                        ((o.activeBreakpoint = s),
                        "unslick" === o.breakpointSettings[s]
                          ? o.unslick(s)
                          : ((o.options = e.extend(
                              {},
                              o.originalSettings,
                              o.breakpointSettings[s]
                            )),
                            !0 === t &&
                              (o.currentSlide = o.options.initialSlide),
                            o.refresh(t)),
                        (r = s))
                      : ((o.activeBreakpoint = s),
                        "unslick" === o.breakpointSettings[s]
                          ? o.unslick(s)
                          : ((o.options = e.extend(
                              {},
                              o.originalSettings,
                              o.breakpointSettings[s]
                            )),
                            !0 === t &&
                              (o.currentSlide = o.options.initialSlide),
                            o.refresh(t)),
                        (r = s))
                    : null !== o.activeBreakpoint &&
                      ((o.activeBreakpoint = null),
                      (o.options = o.originalSettings),
                      !0 === t && (o.currentSlide = o.options.initialSlide),
                      o.refresh(t),
                      (r = s)),
                    t || !1 === r || o.$slider.trigger("breakpoint", [o, r]);
                }
              }),
              (t.prototype.changeSlide = function (t, i) {
                var n,
                  s,
                  a = this,
                  o = e(t.currentTarget);
                switch (
                  (o.is("a") && t.preventDefault(),
                  o.is("li") || (o = o.closest("li")),
                  (n =
                    a.slideCount % a.options.slidesToScroll != 0
                      ? 0
                      : (a.slideCount - a.currentSlide) %
                        a.options.slidesToScroll),
                  t.data.message)
                ) {
                  case "previous":
                    (s =
                      0 === n
                        ? a.options.slidesToScroll
                        : a.options.slidesToShow - n),
                      a.slideCount > a.options.slidesToShow &&
                        a.slideHandler(a.currentSlide - s, !1, i);
                    break;
                  case "next":
                    (s = 0 === n ? a.options.slidesToScroll : n),
                      a.slideCount > a.options.slidesToShow &&
                        a.slideHandler(a.currentSlide + s, !1, i);
                    break;
                  case "index":
                    var r =
                      0 === t.data.index
                        ? 0
                        : t.data.index || o.index() * a.options.slidesToScroll;
                    a.slideHandler(a.checkNavigable(r), !1, i),
                      o.children().trigger("focus");
                    break;
                  default:
                    return;
                }
              }),
              (t.prototype.checkNavigable = function (e) {
                var t, i;
                if (
                  ((i = 0), e > (t = this.getNavigableIndexes())[t.length - 1])
                )
                  e = t[t.length - 1];
                else
                  for (var n in t) {
                    if (e < t[n]) {
                      e = i;
                      break;
                    }
                    i = t[n];
                  }
                return e;
              }),
              (t.prototype.cleanUpEvents = function () {
                var t = this;
                t.options.dots &&
                  null !== t.$dots &&
                  (e("li", t.$dots)
                    .off("click.slick", t.changeSlide)
                    .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                    .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                  !0 === t.options.accessibility &&
                    t.$dots.off("keydown.slick", t.keyHandler)),
                  t.$slider.off("focus.slick blur.slick"),
                  !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow &&
                      t.$prevArrow.off("click.slick", t.changeSlide),
                    t.$nextArrow &&
                      t.$nextArrow.off("click.slick", t.changeSlide),
                    !0 === t.options.accessibility &&
                      (t.$prevArrow &&
                        t.$prevArrow.off("keydown.slick", t.keyHandler),
                      t.$nextArrow &&
                        t.$nextArrow.off("keydown.slick", t.keyHandler))),
                  t.$list.off(
                    "touchstart.slick mousedown.slick",
                    t.swipeHandler
                  ),
                  t.$list.off(
                    "touchmove.slick mousemove.slick",
                    t.swipeHandler
                  ),
                  t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                  t.$list.off(
                    "touchcancel.slick mouseleave.slick",
                    t.swipeHandler
                  ),
                  t.$list.off("click.slick", t.clickHandler),
                  e(document).off(t.visibilityChange, t.visibility),
                  t.cleanUpSlideEvents(),
                  !0 === t.options.accessibility &&
                    t.$list.off("keydown.slick", t.keyHandler),
                  !0 === t.options.focusOnSelect &&
                    e(t.$slideTrack)
                      .children()
                      .off("click.slick", t.selectHandler),
                  e(window).off(
                    "orientationchange.slick.slick-" + t.instanceUid,
                    t.orientationChange
                  ),
                  e(window).off(
                    "resize.slick.slick-" + t.instanceUid,
                    t.resize
                  ),
                  e("[draggable!=true]", t.$slideTrack).off(
                    "dragstart",
                    t.preventDefault
                  ),
                  e(window).off(
                    "load.slick.slick-" + t.instanceUid,
                    t.setPosition
                  );
              }),
              (t.prototype.cleanUpSlideEvents = function () {
                var t = this;
                t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                  t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
              }),
              (t.prototype.cleanUpRows = function () {
                var e,
                  t = this;
                t.options.rows > 0 &&
                  ((e = t.$slides.children().children()).removeAttr("style"),
                  t.$slider.empty().append(e));
              }),
              (t.prototype.clickHandler = function (e) {
                !1 === this.shouldClick &&
                  (e.stopImmediatePropagation(),
                  e.stopPropagation(),
                  e.preventDefault());
              }),
              (t.prototype.destroy = function (t) {
                var i = this;
                i.autoPlayClear(),
                  (i.touchObject = {}),
                  i.cleanUpEvents(),
                  e(".slick-cloned", i.$slider).detach(),
                  i.$dots && i.$dots.remove(),
                  i.$prevArrow &&
                    i.$prevArrow.length &&
                    (i.$prevArrow
                      .removeClass("slick-disabled slick-arrow slick-hidden")
                      .removeAttr("aria-hidden aria-disabled tabindex")
                      .css("display", ""),
                    i.htmlExpr.test(i.options.prevArrow) &&
                      i.$prevArrow.remove()),
                  i.$nextArrow &&
                    i.$nextArrow.length &&
                    (i.$nextArrow
                      .removeClass("slick-disabled slick-arrow slick-hidden")
                      .removeAttr("aria-hidden aria-disabled tabindex")
                      .css("display", ""),
                    i.htmlExpr.test(i.options.nextArrow) &&
                      i.$nextArrow.remove()),
                  i.$slides &&
                    (i.$slides
                      .removeClass(
                        "slick-slide slick-active slick-center slick-visible slick-current"
                      )
                      .removeAttr("aria-hidden")
                      .removeAttr("data-slick-index")
                      .each(function () {
                        e(this).attr("style", e(this).data("originalStyling"));
                      }),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.detach(),
                    i.$list.detach(),
                    i.$slider.append(i.$slides)),
                  i.cleanUpRows(),
                  i.$slider.removeClass("slick-slider"),
                  i.$slider.removeClass("slick-initialized"),
                  i.$slider.removeClass("slick-dotted"),
                  (i.unslicked = !0),
                  t || i.$slider.trigger("destroy", [i]);
              }),
              (t.prototype.disableTransition = function (e) {
                var t = this,
                  i = {};
                (i[t.transitionType] = ""),
                  !1 === t.options.fade
                    ? t.$slideTrack.css(i)
                    : t.$slides.eq(e).css(i);
              }),
              (t.prototype.fadeSlide = function (e, t) {
                var i = this;
                !1 === i.cssTransitions
                  ? (i.$slides.eq(e).css({
                      zIndex: i.options.zIndex,
                    }),
                    i.$slides.eq(e).animate(
                      {
                        opacity: 1,
                      },
                      i.options.speed,
                      i.options.easing,
                      t
                    ))
                  : (i.applyTransition(e),
                    i.$slides.eq(e).css({
                      opacity: 1,
                      zIndex: i.options.zIndex,
                    }),
                    t &&
                      setTimeout(function () {
                        i.disableTransition(e), t.call();
                      }, i.options.speed));
              }),
              (t.prototype.fadeSlideOut = function (e) {
                var t = this;
                !1 === t.cssTransitions
                  ? t.$slides.eq(e).animate(
                      {
                        opacity: 0,
                        zIndex: t.options.zIndex - 2,
                      },
                      t.options.speed,
                      t.options.easing
                    )
                  : (t.applyTransition(e),
                    t.$slides.eq(e).css({
                      opacity: 0,
                      zIndex: t.options.zIndex - 2,
                    }));
              }),
              (t.prototype.filterSlides = t.prototype.slickFilter =
                function (e) {
                  var t = this;
                  null !== e &&
                    ((t.$slidesCache = t.$slides),
                    t.unload(),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                    t.reinit());
                }),
              (t.prototype.focusHandler = function () {
                var t = this;
                t.$slider
                  .off("focus.slick blur.slick")
                  .on("focus.slick blur.slick", "*", function (i) {
                    i.stopImmediatePropagation();
                    var n = e(this);
                    setTimeout(function () {
                      t.options.pauseOnFocus &&
                        ((t.focussed = n.is(":focus")), t.autoPlay());
                    }, 0);
                  });
              }),
              (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
                function () {
                  return this.currentSlide;
                }),
              (t.prototype.getDotCount = function () {
                var e = this,
                  t = 0,
                  i = 0,
                  n = 0;
                if (!0 === e.options.infinite)
                  if (e.slideCount <= e.options.slidesToShow) ++n;
                  else
                    for (; t < e.slideCount; )
                      ++n,
                        (t = i + e.options.slidesToScroll),
                        (i +=
                          e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
                else if (!0 === e.options.centerMode) n = e.slideCount;
                else if (e.options.asNavFor)
                  for (; t < e.slideCount; )
                    ++n,
                      (t = i + e.options.slidesToScroll),
                      (i +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                          ? e.options.slidesToScroll
                          : e.options.slidesToShow);
                else
                  n =
                    1 +
                    Math.ceil(
                      (e.slideCount - e.options.slidesToShow) /
                        e.options.slidesToScroll
                    );
                return n - 1;
              }),
              (t.prototype.getLeft = function (e) {
                var t,
                  i,
                  n,
                  s,
                  a = this,
                  o = 0;
                return (
                  (a.slideOffset = 0),
                  (i = a.$slides.first().outerHeight(!0)),
                  !0 === a.options.infinite
                    ? (a.slideCount > a.options.slidesToShow &&
                        ((a.slideOffset =
                          a.slideWidth * a.options.slidesToShow * -1),
                        (s = -1),
                        !0 === a.options.vertical &&
                          !0 === a.options.centerMode &&
                          (2 === a.options.slidesToShow
                            ? (s = -1.5)
                            : 1 === a.options.slidesToShow && (s = -2)),
                        (o = i * a.options.slidesToShow * s)),
                      a.slideCount % a.options.slidesToScroll != 0 &&
                        e + a.options.slidesToScroll > a.slideCount &&
                        a.slideCount > a.options.slidesToShow &&
                        (e > a.slideCount
                          ? ((a.slideOffset =
                              (a.options.slidesToShow - (e - a.slideCount)) *
                              a.slideWidth *
                              -1),
                            (o =
                              (a.options.slidesToShow - (e - a.slideCount)) *
                              i *
                              -1))
                          : ((a.slideOffset =
                              (a.slideCount % a.options.slidesToScroll) *
                              a.slideWidth *
                              -1),
                            (o =
                              (a.slideCount % a.options.slidesToScroll) *
                              i *
                              -1))))
                    : e + a.options.slidesToShow > a.slideCount &&
                      ((a.slideOffset =
                        (e + a.options.slidesToShow - a.slideCount) *
                        a.slideWidth),
                      (o = (e + a.options.slidesToShow - a.slideCount) * i)),
                  a.slideCount <= a.options.slidesToShow &&
                    ((a.slideOffset = 0), (o = 0)),
                  !0 === a.options.centerMode &&
                  a.slideCount <= a.options.slidesToShow
                    ? (a.slideOffset =
                        (a.slideWidth * Math.floor(a.options.slidesToShow)) /
                          2 -
                        (a.slideWidth * a.slideCount) / 2)
                    : !0 === a.options.centerMode && !0 === a.options.infinite
                    ? (a.slideOffset +=
                        a.slideWidth * Math.floor(a.options.slidesToShow / 2) -
                        a.slideWidth)
                    : !0 === a.options.centerMode &&
                      ((a.slideOffset = 0),
                      (a.slideOffset +=
                        a.slideWidth * Math.floor(a.options.slidesToShow / 2))),
                  (t =
                    !1 === a.options.vertical
                      ? e * a.slideWidth * -1 + a.slideOffset
                      : e * i * -1 + o),
                  !0 === a.options.variableWidth &&
                    ((n =
                      a.slideCount <= a.options.slidesToShow ||
                      !1 === a.options.infinite
                        ? a.$slideTrack.children(".slick-slide").eq(e)
                        : a.$slideTrack
                            .children(".slick-slide")
                            .eq(e + a.options.slidesToShow)),
                    (t =
                      !0 === a.options.rtl
                        ? n[0]
                          ? -1 *
                            (a.$slideTrack.width() -
                              n[0].offsetLeft -
                              n.width())
                          : 0
                        : n[0]
                        ? -1 * n[0].offsetLeft
                        : 0),
                    !0 === a.options.centerMode &&
                      ((n =
                        a.slideCount <= a.options.slidesToShow ||
                        !1 === a.options.infinite
                          ? a.$slideTrack.children(".slick-slide").eq(e)
                          : a.$slideTrack
                              .children(".slick-slide")
                              .eq(e + a.options.slidesToShow + 1)),
                      (t =
                        !0 === a.options.rtl
                          ? n[0]
                            ? -1 *
                              (a.$slideTrack.width() -
                                n[0].offsetLeft -
                                n.width())
                            : 0
                          : n[0]
                          ? -1 * n[0].offsetLeft
                          : 0),
                      (t += (a.$list.width() - n.outerWidth()) / 2))),
                  t
                );
              }),
              (t.prototype.getOption = t.prototype.slickGetOption =
                function (e) {
                  return this.options[e];
                }),
              (t.prototype.getNavigableIndexes = function () {
                var e,
                  t = this,
                  i = 0,
                  n = 0,
                  s = [];
                for (
                  !1 === t.options.infinite
                    ? (e = t.slideCount)
                    : ((i = -1 * t.options.slidesToScroll),
                      (n = -1 * t.options.slidesToScroll),
                      (e = 2 * t.slideCount));
                  i < e;

                )
                  s.push(i),
                    (i = n + t.options.slidesToScroll),
                    (n +=
                      t.options.slidesToScroll <= t.options.slidesToShow
                        ? t.options.slidesToScroll
                        : t.options.slidesToShow);
                return s;
              }),
              (t.prototype.getSlick = function () {
                return this;
              }),
              (t.prototype.getSlideCount = function () {
                var t,
                  i,
                  n = this;
                return (
                  (i =
                    !0 === n.options.centerMode
                      ? n.slideWidth * Math.floor(n.options.slidesToShow / 2)
                      : 0),
                  !0 === n.options.swipeToSlide
                    ? (n.$slideTrack.find(".slick-slide").each(function (s, a) {
                        if (
                          a.offsetLeft - i + e(a).outerWidth() / 2 >
                          -1 * n.swipeLeft
                        )
                          return (t = a), !1;
                      }),
                      Math.abs(
                        e(t).attr("data-slick-index") - n.currentSlide
                      ) || 1)
                    : n.options.slidesToScroll
                );
              }),
              (t.prototype.goTo = t.prototype.slickGoTo =
                function (e, t) {
                  this.changeSlide(
                    {
                      data: {
                        message: "index",
                        index: parseInt(e),
                      },
                    },
                    t
                  );
                }),
              (t.prototype.init = function (t) {
                var i = this;
                e(i.$slider).hasClass("slick-initialized") ||
                  (e(i.$slider).addClass("slick-initialized"),
                  i.buildRows(),
                  i.buildOut(),
                  i.setProps(),
                  i.startLoad(),
                  i.loadSlider(),
                  i.initializeEvents(),
                  i.updateArrows(),
                  i.updateDots(),
                  i.checkResponsive(!0),
                  i.focusHandler()),
                  t && i.$slider.trigger("init", [i]),
                  !0 === i.options.accessibility && i.initADA(),
                  i.options.autoplay && ((i.paused = !1), i.autoPlay());
              }),
              (t.prototype.initADA = function () {
                var t = this,
                  i = Math.ceil(t.slideCount / t.options.slidesToShow),
                  n = t.getNavigableIndexes().filter(function (e) {
                    return e >= 0 && e < t.slideCount;
                  });
                t.$slides
                  .add(t.$slideTrack.find(".slick-cloned"))
                  .attr({
                    "aria-hidden": "true",
                    tabindex: "-1",
                  })
                  .find("a, input, button, select")
                  .attr({
                    tabindex: "-1",
                  }),
                  null !== t.$dots &&
                    (t.$slides
                      .not(t.$slideTrack.find(".slick-cloned"))
                      .each(function (i) {
                        var s = n.indexOf(i);
                        if (
                          (e(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + t.instanceUid + i,
                            tabindex: -1,
                          }),
                          -1 !== s)
                        ) {
                          var a = "slick-slide-control" + t.instanceUid + s;
                          e("#" + a).length &&
                            e(this).attr({
                              "aria-describedby": a,
                            });
                        }
                      }),
                    t.$dots
                      .attr("role", "tablist")
                      .find("li")
                      .each(function (s) {
                        var a = n[s];
                        e(this).attr({
                          role: "presentation",
                        }),
                          e(this)
                            .find("button")
                            .first()
                            .attr({
                              role: "tab",
                              id: "slick-slide-control" + t.instanceUid + s,
                              "aria-controls":
                                "slick-slide" + t.instanceUid + a,
                              "aria-label": s + 1 + " of " + i,
                              "aria-selected": null,
                              tabindex: "-1",
                            });
                      })
                      .eq(t.currentSlide)
                      .find("button")
                      .attr({
                        "aria-selected": "true",
                        tabindex: "0",
                      })
                      .end());
                for (
                  var s = t.currentSlide, a = s + t.options.slidesToShow;
                  s < a;
                  s++
                )
                  t.options.focusOnChange
                    ? t.$slides.eq(s).attr({
                        tabindex: "0",
                      })
                    : t.$slides.eq(s).removeAttr("tabindex");
                t.activateADA();
              }),
              (t.prototype.initArrowEvents = function () {
                var e = this;
                !0 === e.options.arrows &&
                  e.slideCount > e.options.slidesToShow &&
                  (e.$prevArrow.off("click.slick").on(
                    "click.slick",
                    {
                      message: "previous",
                    },
                    e.changeSlide
                  ),
                  e.$nextArrow.off("click.slick").on(
                    "click.slick",
                    {
                      message: "next",
                    },
                    e.changeSlide
                  ),
                  !0 === e.options.accessibility &&
                    (e.$prevArrow.on("keydown.slick", e.keyHandler),
                    e.$nextArrow.on("keydown.slick", e.keyHandler)));
              }),
              (t.prototype.initDotEvents = function () {
                var t = this;
                !0 === t.options.dots &&
                  t.slideCount > t.options.slidesToShow &&
                  (e("li", t.$dots).on(
                    "click.slick",
                    {
                      message: "index",
                    },
                    t.changeSlide
                  ),
                  !0 === t.options.accessibility &&
                    t.$dots.on("keydown.slick", t.keyHandler)),
                  !0 === t.options.dots &&
                    !0 === t.options.pauseOnDotsHover &&
                    t.slideCount > t.options.slidesToShow &&
                    e("li", t.$dots)
                      .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                      .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
              }),
              (t.prototype.initSlideEvents = function () {
                var t = this;
                t.options.pauseOnHover &&
                  (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                  t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
              }),
              (t.prototype.initializeEvents = function () {
                var t = this;
                t.initArrowEvents(),
                  t.initDotEvents(),
                  t.initSlideEvents(),
                  t.$list.on(
                    "touchstart.slick mousedown.slick",
                    {
                      action: "start",
                    },
                    t.swipeHandler
                  ),
                  t.$list.on(
                    "touchmove.slick mousemove.slick",
                    {
                      action: "move",
                    },
                    t.swipeHandler
                  ),
                  t.$list.on(
                    "touchend.slick mouseup.slick",
                    {
                      action: "end",
                    },
                    t.swipeHandler
                  ),
                  t.$list.on(
                    "touchcancel.slick mouseleave.slick",
                    {
                      action: "end",
                    },
                    t.swipeHandler
                  ),
                  t.$list.on("click.slick", t.clickHandler),
                  e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                  !0 === t.options.accessibility &&
                    t.$list.on("keydown.slick", t.keyHandler),
                  !0 === t.options.focusOnSelect &&
                    e(t.$slideTrack)
                      .children()
                      .on("click.slick", t.selectHandler),
                  e(window).on(
                    "orientationchange.slick.slick-" + t.instanceUid,
                    e.proxy(t.orientationChange, t)
                  ),
                  e(window).on(
                    "resize.slick.slick-" + t.instanceUid,
                    e.proxy(t.resize, t)
                  ),
                  e("[draggable!=true]", t.$slideTrack).on(
                    "dragstart",
                    t.preventDefault
                  ),
                  e(window).on(
                    "load.slick.slick-" + t.instanceUid,
                    t.setPosition
                  ),
                  e(t.setPosition);
              }),
              (t.prototype.initUI = function () {
                var e = this;
                !0 === e.options.arrows &&
                  e.slideCount > e.options.slidesToShow &&
                  (e.$prevArrow.show(), e.$nextArrow.show()),
                  !0 === e.options.dots &&
                    e.slideCount > e.options.slidesToShow &&
                    e.$dots.show();
              }),
              (t.prototype.keyHandler = function (e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                  (37 === e.keyCode && !0 === t.options.accessibility
                    ? t.changeSlide({
                        data: {
                          message: !0 === t.options.rtl ? "next" : "previous",
                        },
                      })
                    : 39 === e.keyCode &&
                      !0 === t.options.accessibility &&
                      t.changeSlide({
                        data: {
                          message: !0 === t.options.rtl ? "previous" : "next",
                        },
                      }));
              }),
              (t.prototype.lazyLoad = function () {
                var t,
                  i,
                  n,
                  s = this;
                function a(t) {
                  e("img[data-lazy]", t).each(function () {
                    var t = e(this),
                      i = e(this).attr("data-lazy"),
                      n = e(this).attr("data-srcset"),
                      a =
                        e(this).attr("data-sizes") ||
                        s.$slider.attr("data-sizes"),
                      o = document.createElement("img");
                    (o.onload = function () {
                      t.animate(
                        {
                          opacity: 0,
                        },
                        100,
                        function () {
                          n && (t.attr("srcset", n), a && t.attr("sizes", a)),
                            t.attr("src", i).animate(
                              {
                                opacity: 1,
                              },
                              200,
                              function () {
                                t.removeAttr(
                                  "data-lazy data-srcset data-sizes"
                                ).removeClass("slick-loading");
                              }
                            ),
                            s.$slider.trigger("lazyLoaded", [s, t, i]);
                        }
                      );
                    }),
                      (o.onerror = function () {
                        t
                          .removeAttr("data-lazy")
                          .removeClass("slick-loading")
                          .addClass("slick-lazyload-error"),
                          s.$slider.trigger("lazyLoadError", [s, t, i]);
                      }),
                      (o.src = i);
                  });
                }
                if (
                  (!0 === s.options.centerMode
                    ? !0 === s.options.infinite
                      ? (n =
                          (i =
                            s.currentSlide + (s.options.slidesToShow / 2 + 1)) +
                          s.options.slidesToShow +
                          2)
                      : ((i = Math.max(
                          0,
                          s.currentSlide - (s.options.slidesToShow / 2 + 1)
                        )),
                        (n =
                          s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
                    : ((i = s.options.infinite
                        ? s.options.slidesToShow + s.currentSlide
                        : s.currentSlide),
                      (n = Math.ceil(i + s.options.slidesToShow)),
                      !0 === s.options.fade &&
                        (i > 0 && i--, n <= s.slideCount && n++)),
                  (t = s.$slider.find(".slick-slide").slice(i, n)),
                  "anticipated" === s.options.lazyLoad)
                )
                  for (
                    var o = i - 1,
                      r = n,
                      l = s.$slider.find(".slick-slide"),
                      c = 0;
                    c < s.options.slidesToScroll;
                    c++
                  )
                    o < 0 && (o = s.slideCount - 1),
                      (t = (t = t.add(l.eq(o))).add(l.eq(r))),
                      o--,
                      r++;
                a(t),
                  s.slideCount <= s.options.slidesToShow
                    ? a(s.$slider.find(".slick-slide"))
                    : s.currentSlide >= s.slideCount - s.options.slidesToShow
                    ? a(
                        s.$slider
                          .find(".slick-cloned")
                          .slice(0, s.options.slidesToShow)
                      )
                    : 0 === s.currentSlide &&
                      a(
                        s.$slider
                          .find(".slick-cloned")
                          .slice(-1 * s.options.slidesToShow)
                      );
              }),
              (t.prototype.loadSlider = function () {
                var e = this;
                e.setPosition(),
                  e.$slideTrack.css({
                    opacity: 1,
                  }),
                  e.$slider.removeClass("slick-loading"),
                  e.initUI(),
                  "progressive" === e.options.lazyLoad &&
                    e.progressiveLazyLoad();
              }),
              (t.prototype.next = t.prototype.slickNext =
                function () {
                  this.changeSlide({
                    data: {
                      message: "next",
                    },
                  });
                }),
              (t.prototype.orientationChange = function () {
                var e = this;
                e.checkResponsive(), e.setPosition();
              }),
              (t.prototype.pause = t.prototype.slickPause =
                function () {
                  var e = this;
                  e.autoPlayClear(), (e.paused = !0);
                }),
              (t.prototype.play = t.prototype.slickPlay =
                function () {
                  var e = this;
                  e.autoPlay(),
                    (e.options.autoplay = !0),
                    (e.paused = !1),
                    (e.focussed = !1),
                    (e.interrupted = !1);
                }),
              (t.prototype.postSlide = function (t) {
                var i = this;
                i.unslicked ||
                  (i.$slider.trigger("afterChange", [i, t]),
                  (i.animating = !1),
                  i.slideCount > i.options.slidesToShow && i.setPosition(),
                  (i.swipeLeft = null),
                  i.options.autoplay && i.autoPlay(),
                  !0 === i.options.accessibility &&
                    (i.initADA(),
                    i.options.focusOnChange &&
                      e(i.$slides.get(i.currentSlide))
                        .attr("tabindex", 0)
                        .focus()));
              }),
              (t.prototype.prev = t.prototype.slickPrev =
                function () {
                  this.changeSlide({
                    data: {
                      message: "previous",
                    },
                  });
                }),
              (t.prototype.preventDefault = function (e) {
                e.preventDefault();
              }),
              (t.prototype.progressiveLazyLoad = function (t) {
                t = t || 1;
                var i,
                  n,
                  s,
                  a,
                  o,
                  r = this,
                  l = e("img[data-lazy]", r.$slider);
                l.length
                  ? ((i = l.first()),
                    (n = i.attr("data-lazy")),
                    (s = i.attr("data-srcset")),
                    (a = i.attr("data-sizes") || r.$slider.attr("data-sizes")),
                    ((o = document.createElement("img")).onload = function () {
                      s && (i.attr("srcset", s), a && i.attr("sizes", a)),
                        i
                          .attr("src", n)
                          .removeAttr("data-lazy data-srcset data-sizes")
                          .removeClass("slick-loading"),
                        !0 === r.options.adaptiveHeight && r.setPosition(),
                        r.$slider.trigger("lazyLoaded", [r, i, n]),
                        r.progressiveLazyLoad();
                    }),
                    (o.onerror = function () {
                      t < 3
                        ? setTimeout(function () {
                            r.progressiveLazyLoad(t + 1);
                          }, 500)
                        : (i
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                          r.$slider.trigger("lazyLoadError", [r, i, n]),
                          r.progressiveLazyLoad());
                    }),
                    (o.src = n))
                  : r.$slider.trigger("allImagesLoaded", [r]);
              }),
              (t.prototype.refresh = function (t) {
                var i,
                  n,
                  s = this;
                (n = s.slideCount - s.options.slidesToShow),
                  !s.options.infinite &&
                    s.currentSlide > n &&
                    (s.currentSlide = n),
                  s.slideCount <= s.options.slidesToShow &&
                    (s.currentSlide = 0),
                  (i = s.currentSlide),
                  s.destroy(!0),
                  e.extend(s, s.initials, {
                    currentSlide: i,
                  }),
                  s.init(),
                  t ||
                    s.changeSlide(
                      {
                        data: {
                          message: "index",
                          index: i,
                        },
                      },
                      !1
                    );
              }),
              (t.prototype.registerBreakpoints = function () {
                var t,
                  i,
                  n,
                  s = this,
                  a = s.options.responsive || null;
                if ("array" === e.type(a) && a.length) {
                  for (t in ((s.respondTo = s.options.respondTo || "window"),
                  a))
                    if (((n = s.breakpoints.length - 1), a.hasOwnProperty(t))) {
                      for (i = a[t].breakpoint; n >= 0; )
                        s.breakpoints[n] &&
                          s.breakpoints[n] === i &&
                          s.breakpoints.splice(n, 1),
                          n--;
                      s.breakpoints.push(i),
                        (s.breakpointSettings[i] = a[t].settings);
                    }
                  s.breakpoints.sort(function (e, t) {
                    return s.options.mobileFirst ? e - t : t - e;
                  });
                }
              }),
              (t.prototype.reinit = function () {
                var t = this;
                (t.$slides = t.$slideTrack
                  .children(t.options.slide)
                  .addClass("slick-slide")),
                  (t.slideCount = t.$slides.length),
                  t.currentSlide >= t.slideCount &&
                    0 !== t.currentSlide &&
                    (t.currentSlide =
                      t.currentSlide - t.options.slidesToScroll),
                  t.slideCount <= t.options.slidesToShow &&
                    (t.currentSlide = 0),
                  t.registerBreakpoints(),
                  t.setProps(),
                  t.setupInfinite(),
                  t.buildArrows(),
                  t.updateArrows(),
                  t.initArrowEvents(),
                  t.buildDots(),
                  t.updateDots(),
                  t.initDotEvents(),
                  t.cleanUpSlideEvents(),
                  t.initSlideEvents(),
                  t.checkResponsive(!1, !0),
                  !0 === t.options.focusOnSelect &&
                    e(t.$slideTrack)
                      .children()
                      .on("click.slick", t.selectHandler),
                  t.setSlideClasses(
                    "number" == typeof t.currentSlide ? t.currentSlide : 0
                  ),
                  t.setPosition(),
                  t.focusHandler(),
                  (t.paused = !t.options.autoplay),
                  t.autoPlay(),
                  t.$slider.trigger("reInit", [t]);
              }),
              (t.prototype.resize = function () {
                var t = this;
                e(window).width() !== t.windowWidth &&
                  (clearTimeout(t.windowDelay),
                  (t.windowDelay = window.setTimeout(function () {
                    (t.windowWidth = e(window).width()),
                      t.checkResponsive(),
                      t.unslicked || t.setPosition();
                  }, 50)));
              }),
              (t.prototype.removeSlide = t.prototype.slickRemove =
                function (e, t, i) {
                  var n = this;
                  if (
                    ((e =
                      "boolean" == typeof e
                        ? !0 === (t = e)
                          ? 0
                          : n.slideCount - 1
                        : !0 === t
                        ? --e
                        : e),
                    n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
                  )
                    return !1;
                  n.unload(),
                    !0 === i
                      ? n.$slideTrack.children().remove()
                      : n.$slideTrack
                          .children(this.options.slide)
                          .eq(e)
                          .remove(),
                    (n.$slides = n.$slideTrack.children(this.options.slide)),
                    n.$slideTrack.children(this.options.slide).detach(),
                    n.$slideTrack.append(n.$slides),
                    (n.$slidesCache = n.$slides),
                    n.reinit();
                }),
              (t.prototype.setCSS = function (e) {
                var t,
                  i,
                  n = this,
                  s = {};
                !0 === n.options.rtl && (e = -e),
                  (t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
                  (i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
                  (s[n.positionProp] = e),
                  !1 === n.transformsEnabled
                    ? n.$slideTrack.css(s)
                    : ((s = {}),
                      !1 === n.cssTransitions
                        ? ((s[n.animType] = "translate(" + t + ", " + i + ")"),
                          n.$slideTrack.css(s))
                        : ((s[n.animType] =
                            "translate3d(" + t + ", " + i + ", 0px)"),
                          n.$slideTrack.css(s)));
              }),
              (t.prototype.setDimensions = function () {
                var e = this;
                !1 === e.options.vertical
                  ? !0 === e.options.centerMode &&
                    e.$list.css({
                      padding: "0px " + e.options.centerPadding,
                    })
                  : (e.$list.height(
                      e.$slides.first().outerHeight(!0) * e.options.slidesToShow
                    ),
                    !0 === e.options.centerMode &&
                      e.$list.css({
                        padding: e.options.centerPadding + " 0px",
                      })),
                  (e.listWidth = e.$list.width()),
                  (e.listHeight = e.$list.height()),
                  !1 === e.options.vertical && !1 === e.options.variableWidth
                    ? ((e.slideWidth = Math.ceil(
                        e.listWidth / e.options.slidesToShow
                      )),
                      e.$slideTrack.width(
                        Math.ceil(
                          e.slideWidth *
                            e.$slideTrack.children(".slick-slide").length
                        )
                      ))
                    : !0 === e.options.variableWidth
                    ? e.$slideTrack.width(5e3 * e.slideCount)
                    : ((e.slideWidth = Math.ceil(e.listWidth)),
                      e.$slideTrack.height(
                        Math.ceil(
                          e.$slides.first().outerHeight(!0) *
                            e.$slideTrack.children(".slick-slide").length
                        )
                      ));
                var t =
                  e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                !1 === e.options.variableWidth &&
                  e.$slideTrack
                    .children(".slick-slide")
                    .width(e.slideWidth - t);
              }),
              (t.prototype.setFade = function () {
                var t,
                  i = this;
                i.$slides.each(function (n, s) {
                  (t = i.slideWidth * n * -1),
                    !0 === i.options.rtl
                      ? e(s).css({
                          position: "relative",
                          right: t,
                          top: 0,
                          zIndex: i.options.zIndex - 2,
                          opacity: 0,
                        })
                      : e(s).css({
                          position: "relative",
                          left: t,
                          top: 0,
                          zIndex: i.options.zIndex - 2,
                          opacity: 0,
                        });
                }),
                  i.$slides.eq(i.currentSlide).css({
                    zIndex: i.options.zIndex - 1,
                    opacity: 1,
                  });
              }),
              (t.prototype.setHeight = function () {
                var e = this;
                if (
                  1 === e.options.slidesToShow &&
                  !0 === e.options.adaptiveHeight &&
                  !1 === e.options.vertical
                ) {
                  var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                  e.$list.css("height", t);
                }
              }),
              (t.prototype.setOption = t.prototype.slickSetOption =
                function () {
                  var t,
                    i,
                    n,
                    s,
                    a,
                    o = this,
                    r = !1;
                  if (
                    ("object" === e.type(arguments[0])
                      ? ((n = arguments[0]),
                        (r = arguments[1]),
                        (a = "multiple"))
                      : "string" === e.type(arguments[0]) &&
                        ((n = arguments[0]),
                        (s = arguments[1]),
                        (r = arguments[2]),
                        "responsive" === arguments[0] &&
                        "array" === e.type(arguments[1])
                          ? (a = "responsive")
                          : void 0 !== arguments[1] && (a = "single")),
                    "single" === a)
                  )
                    o.options[n] = s;
                  else if ("multiple" === a)
                    e.each(n, function (e, t) {
                      o.options[e] = t;
                    });
                  else if ("responsive" === a)
                    for (i in s)
                      if ("array" !== e.type(o.options.responsive))
                        o.options.responsive = [s[i]];
                      else {
                        for (t = o.options.responsive.length - 1; t >= 0; )
                          o.options.responsive[t].breakpoint ===
                            s[i].breakpoint &&
                            o.options.responsive.splice(t, 1),
                            t--;
                        o.options.responsive.push(s[i]);
                      }
                  r && (o.unload(), o.reinit());
                }),
              (t.prototype.setPosition = function () {
                var e = this;
                e.setDimensions(),
                  e.setHeight(),
                  !1 === e.options.fade
                    ? e.setCSS(e.getLeft(e.currentSlide))
                    : e.setFade(),
                  e.$slider.trigger("setPosition", [e]);
              }),
              (t.prototype.setProps = function () {
                var e = this,
                  t = document.body.style;
                (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                  "top" === e.positionProp
                    ? e.$slider.addClass("slick-vertical")
                    : e.$slider.removeClass("slick-vertical"),
                  (void 0 === t.WebkitTransition &&
                    void 0 === t.MozTransition &&
                    void 0 === t.msTransition) ||
                    (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                  e.options.fade &&
                    ("number" == typeof e.options.zIndex
                      ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                      : (e.options.zIndex = e.defaults.zIndex)),
                  void 0 !== t.OTransform &&
                    ((e.animType = "OTransform"),
                    (e.transformType = "-o-transform"),
                    (e.transitionType = "OTransition"),
                    void 0 === t.perspectiveProperty &&
                      void 0 === t.webkitPerspective &&
                      (e.animType = !1)),
                  void 0 !== t.MozTransform &&
                    ((e.animType = "MozTransform"),
                    (e.transformType = "-moz-transform"),
                    (e.transitionType = "MozTransition"),
                    void 0 === t.perspectiveProperty &&
                      void 0 === t.MozPerspective &&
                      (e.animType = !1)),
                  void 0 !== t.webkitTransform &&
                    ((e.animType = "webkitTransform"),
                    (e.transformType = "-webkit-transform"),
                    (e.transitionType = "webkitTransition"),
                    void 0 === t.perspectiveProperty &&
                      void 0 === t.webkitPerspective &&
                      (e.animType = !1)),
                  void 0 !== t.msTransform &&
                    ((e.animType = "msTransform"),
                    (e.transformType = "-ms-transform"),
                    (e.transitionType = "msTransition"),
                    void 0 === t.msTransform && (e.animType = !1)),
                  void 0 !== t.transform &&
                    !1 !== e.animType &&
                    ((e.animType = "transform"),
                    (e.transformType = "transform"),
                    (e.transitionType = "transition")),
                  (e.transformsEnabled =
                    e.options.useTransform &&
                    null !== e.animType &&
                    !1 !== e.animType);
              }),
              (t.prototype.setSlideClasses = function (e) {
                var t,
                  i,
                  n,
                  s,
                  a = this;
                if (
                  ((i = a.$slider
                    .find(".slick-slide")
                    .removeClass("slick-active slick-center slick-current")
                    .attr("aria-hidden", "true")),
                  a.$slides.eq(e).addClass("slick-current"),
                  !0 === a.options.centerMode)
                ) {
                  var o = a.options.slidesToShow % 2 == 0 ? 1 : 0;
                  (t = Math.floor(a.options.slidesToShow / 2)),
                    !0 === a.options.infinite &&
                      (e >= t && e <= a.slideCount - 1 - t
                        ? a.$slides
                            .slice(e - t + o, e + t + 1)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")
                        : ((n = a.options.slidesToShow + e),
                          i
                            .slice(n - t + 1 + o, n + t + 2)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")),
                      0 === e
                        ? i
                            .eq(i.length - 1 - a.options.slidesToShow)
                            .addClass("slick-center")
                        : e === a.slideCount - 1 &&
                          i
                            .eq(a.options.slidesToShow)
                            .addClass("slick-center")),
                    a.$slides.eq(e).addClass("slick-center");
                } else
                  e >= 0 && e <= a.slideCount - a.options.slidesToShow
                    ? a.$slides
                        .slice(e, e + a.options.slidesToShow)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")
                    : i.length <= a.options.slidesToShow
                    ? i.addClass("slick-active").attr("aria-hidden", "false")
                    : ((s = a.slideCount % a.options.slidesToShow),
                      (n =
                        !0 === a.options.infinite
                          ? a.options.slidesToShow + e
                          : e),
                      a.options.slidesToShow == a.options.slidesToScroll &&
                      a.slideCount - e < a.options.slidesToShow
                        ? i
                            .slice(n - (a.options.slidesToShow - s), n + s)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")
                        : i
                            .slice(n, n + a.options.slidesToShow)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false"));
                ("ondemand" !== a.options.lazyLoad &&
                  "anticipated" !== a.options.lazyLoad) ||
                  a.lazyLoad();
              }),
              (t.prototype.setupInfinite = function () {
                var t,
                  i,
                  n,
                  s = this;
                if (
                  (!0 === s.options.fade && (s.options.centerMode = !1),
                  !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((i = null), s.slideCount > s.options.slidesToShow))
                ) {
                  for (
                    n =
                      !0 === s.options.centerMode
                        ? s.options.slidesToShow + 1
                        : s.options.slidesToShow,
                      t = s.slideCount;
                    t > s.slideCount - n;
                    t -= 1
                  )
                    (i = t - 1),
                      e(s.$slides[i])
                        .clone(!0)
                        .attr("id", "")
                        .attr("data-slick-index", i - s.slideCount)
                        .prependTo(s.$slideTrack)
                        .addClass("slick-cloned");
                  for (t = 0; t < n + s.slideCount; t += 1)
                    (i = t),
                      e(s.$slides[i])
                        .clone(!0)
                        .attr("id", "")
                        .attr("data-slick-index", i + s.slideCount)
                        .appendTo(s.$slideTrack)
                        .addClass("slick-cloned");
                  s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                      e(this).attr("id", "");
                    });
                }
              }),
              (t.prototype.interrupt = function (e) {
                var t = this;
                e || t.autoPlay(), (t.interrupted = e);
              }),
              (t.prototype.selectHandler = function (t) {
                var i = this,
                  n = e(t.target).is(".slick-slide")
                    ? e(t.target)
                    : e(t.target).parents(".slick-slide"),
                  s = parseInt(n.attr("data-slick-index"));
                s || (s = 0),
                  i.slideCount <= i.options.slidesToShow
                    ? i.slideHandler(s, !1, !0)
                    : i.slideHandler(s);
              }),
              (t.prototype.slideHandler = function (e, t, i) {
                var n,
                  s,
                  a,
                  o,
                  r,
                  l = null,
                  c = this;
                if (
                  ((t = t || !1),
                  !(
                    (!0 === c.animating && !0 === c.options.waitForAnimate) ||
                    (!0 === c.options.fade && c.currentSlide === e)
                  ))
                )
                  if (
                    (!1 === t && c.asNavFor(e),
                    (n = e),
                    (l = c.getLeft(n)),
                    (o = c.getLeft(c.currentSlide)),
                    (c.currentLeft = null === c.swipeLeft ? o : c.swipeLeft),
                    !1 === c.options.infinite &&
                      !1 === c.options.centerMode &&
                      (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                  )
                    !1 === c.options.fade &&
                      ((n = c.currentSlide),
                      !0 !== i && c.slideCount > c.options.slidesToShow
                        ? c.animateSlide(o, function () {
                            c.postSlide(n);
                          })
                        : c.postSlide(n));
                  else if (
                    !1 === c.options.infinite &&
                    !0 === c.options.centerMode &&
                    (e < 0 || e > c.slideCount - c.options.slidesToScroll)
                  )
                    !1 === c.options.fade &&
                      ((n = c.currentSlide),
                      !0 !== i && c.slideCount > c.options.slidesToShow
                        ? c.animateSlide(o, function () {
                            c.postSlide(n);
                          })
                        : c.postSlide(n));
                  else {
                    if (
                      (c.options.autoplay && clearInterval(c.autoPlayTimer),
                      (s =
                        n < 0
                          ? c.slideCount % c.options.slidesToScroll != 0
                            ? c.slideCount -
                              (c.slideCount % c.options.slidesToScroll)
                            : c.slideCount + n
                          : n >= c.slideCount
                          ? c.slideCount % c.options.slidesToScroll != 0
                            ? 0
                            : n - c.slideCount
                          : n),
                      (c.animating = !0),
                      c.$slider.trigger("beforeChange", [c, c.currentSlide, s]),
                      (a = c.currentSlide),
                      (c.currentSlide = s),
                      c.setSlideClasses(c.currentSlide),
                      c.options.asNavFor &&
                        (r = (r = c.getNavTarget()).slick("getSlick"))
                          .slideCount <= r.options.slidesToShow &&
                        r.setSlideClasses(c.currentSlide),
                      c.updateDots(),
                      c.updateArrows(),
                      !0 === c.options.fade)
                    )
                      return (
                        !0 !== i
                          ? (c.fadeSlideOut(a),
                            c.fadeSlide(s, function () {
                              c.postSlide(s);
                            }))
                          : c.postSlide(s),
                        void c.animateHeight()
                      );
                    !0 !== i && c.slideCount > c.options.slidesToShow
                      ? c.animateSlide(l, function () {
                          c.postSlide(s);
                        })
                      : c.postSlide(s);
                  }
              }),
              (t.prototype.startLoad = function () {
                var e = this;
                !0 === e.options.arrows &&
                  e.slideCount > e.options.slidesToShow &&
                  (e.$prevArrow.hide(), e.$nextArrow.hide()),
                  !0 === e.options.dots &&
                    e.slideCount > e.options.slidesToShow &&
                    e.$dots.hide(),
                  e.$slider.addClass("slick-loading");
              }),
              (t.prototype.swipeDirection = function () {
                var e,
                  t,
                  i,
                  n,
                  s = this;
                return (
                  (e = s.touchObject.startX - s.touchObject.curX),
                  (t = s.touchObject.startY - s.touchObject.curY),
                  (i = Math.atan2(t, e)),
                  (n = Math.round((180 * i) / Math.PI)) < 0 &&
                    (n = 360 - Math.abs(n)),
                  (n <= 45 && n >= 0) || (n <= 360 && n >= 315)
                    ? !1 === s.options.rtl
                      ? "left"
                      : "right"
                    : n >= 135 && n <= 225
                    ? !1 === s.options.rtl
                      ? "right"
                      : "left"
                    : !0 === s.options.verticalSwiping
                    ? n >= 35 && n <= 135
                      ? "down"
                      : "up"
                    : "vertical"
                );
              }),
              (t.prototype.swipeEnd = function (e) {
                var t,
                  i,
                  n = this;
                if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
                  return (n.scrolling = !1), !1;
                if (
                  ((n.interrupted = !1),
                  (n.shouldClick = !(n.touchObject.swipeLength > 10)),
                  void 0 === n.touchObject.curX)
                )
                  return !1;
                if (
                  (!0 === n.touchObject.edgeHit &&
                    n.$slider.trigger("edge", [n, n.swipeDirection()]),
                  n.touchObject.swipeLength >= n.touchObject.minSwipe)
                ) {
                  switch ((i = n.swipeDirection())) {
                    case "left":
                    case "down":
                      (t = n.options.swipeToSlide
                        ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                        : n.currentSlide + n.getSlideCount()),
                        (n.currentDirection = 0);
                      break;
                    case "right":
                    case "up":
                      (t = n.options.swipeToSlide
                        ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                        : n.currentSlide - n.getSlideCount()),
                        (n.currentDirection = 1);
                  }
                  "vertical" != i &&
                    (n.slideHandler(t),
                    (n.touchObject = {}),
                    n.$slider.trigger("swipe", [n, i]));
                } else
                  n.touchObject.startX !== n.touchObject.curX &&
                    (n.slideHandler(n.currentSlide), (n.touchObject = {}));
              }),
              (t.prototype.swipeHandler = function (e) {
                var t = this;
                if (
                  !(
                    !1 === t.options.swipe ||
                    ("ontouchend" in document && !1 === t.options.swipe) ||
                    (!1 === t.options.draggable &&
                      -1 !== e.type.indexOf("mouse"))
                  )
                )
                  switch (
                    ((t.touchObject.fingerCount =
                      e.originalEvent && void 0 !== e.originalEvent.touches
                        ? e.originalEvent.touches.length
                        : 1),
                    (t.touchObject.minSwipe =
                      t.listWidth / t.options.touchThreshold),
                    !0 === t.options.verticalSwiping &&
                      (t.touchObject.minSwipe =
                        t.listHeight / t.options.touchThreshold),
                    e.data.action)
                  ) {
                    case "start":
                      t.swipeStart(e);
                      break;
                    case "move":
                      t.swipeMove(e);
                      break;
                    case "end":
                      t.swipeEnd(e);
                  }
              }),
              (t.prototype.swipeMove = function (e) {
                var t,
                  i,
                  n,
                  s,
                  a,
                  o,
                  r = this;
                return (
                  (a =
                    void 0 !== e.originalEvent
                      ? e.originalEvent.touches
                      : null),
                  !(!r.dragging || r.scrolling || (a && 1 !== a.length)) &&
                    ((t = r.getLeft(r.currentSlide)),
                    (r.touchObject.curX =
                      void 0 !== a ? a[0].pageX : e.clientX),
                    (r.touchObject.curY =
                      void 0 !== a ? a[0].pageY : e.clientY),
                    (r.touchObject.swipeLength = Math.round(
                      Math.sqrt(
                        Math.pow(r.touchObject.curX - r.touchObject.startX, 2)
                      )
                    )),
                    (o = Math.round(
                      Math.sqrt(
                        Math.pow(r.touchObject.curY - r.touchObject.startY, 2)
                      )
                    )),
                    !r.options.verticalSwiping && !r.swiping && o > 4
                      ? ((r.scrolling = !0), !1)
                      : (!0 === r.options.verticalSwiping &&
                          (r.touchObject.swipeLength = o),
                        (i = r.swipeDirection()),
                        void 0 !== e.originalEvent &&
                          r.touchObject.swipeLength > 4 &&
                          ((r.swiping = !0), e.preventDefault()),
                        (s =
                          (!1 === r.options.rtl ? 1 : -1) *
                          (r.touchObject.curX > r.touchObject.startX ? 1 : -1)),
                        !0 === r.options.verticalSwiping &&
                          (s =
                            r.touchObject.curY > r.touchObject.startY ? 1 : -1),
                        (n = r.touchObject.swipeLength),
                        (r.touchObject.edgeHit = !1),
                        !1 === r.options.infinite &&
                          ((0 === r.currentSlide && "right" === i) ||
                            (r.currentSlide >= r.getDotCount() &&
                              "left" === i)) &&
                          ((n =
                            r.touchObject.swipeLength * r.options.edgeFriction),
                          (r.touchObject.edgeHit = !0)),
                        !1 === r.options.vertical
                          ? (r.swipeLeft = t + n * s)
                          : (r.swipeLeft =
                              t + n * (r.$list.height() / r.listWidth) * s),
                        !0 === r.options.verticalSwiping &&
                          (r.swipeLeft = t + n * s),
                        !0 !== r.options.fade &&
                          !1 !== r.options.touchMove &&
                          (!0 === r.animating
                            ? ((r.swipeLeft = null), !1)
                            : void r.setCSS(r.swipeLeft))))
                );
              }),
              (t.prototype.swipeStart = function (e) {
                var t,
                  i = this;
                if (
                  ((i.interrupted = !0),
                  1 !== i.touchObject.fingerCount ||
                    i.slideCount <= i.options.slidesToShow)
                )
                  return (i.touchObject = {}), !1;
                void 0 !== e.originalEvent &&
                  void 0 !== e.originalEvent.touches &&
                  (t = e.originalEvent.touches[0]),
                  (i.touchObject.startX = i.touchObject.curX =
                    void 0 !== t ? t.pageX : e.clientX),
                  (i.touchObject.startY = i.touchObject.curY =
                    void 0 !== t ? t.pageY : e.clientY),
                  (i.dragging = !0);
              }),
              (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
                function () {
                  var e = this;
                  null !== e.$slidesCache &&
                    (e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.appendTo(e.$slideTrack),
                    e.reinit());
                }),
              (t.prototype.unload = function () {
                var t = this;
                e(".slick-cloned", t.$slider).remove(),
                  t.$dots && t.$dots.remove(),
                  t.$prevArrow &&
                    t.htmlExpr.test(t.options.prevArrow) &&
                    t.$prevArrow.remove(),
                  t.$nextArrow &&
                    t.htmlExpr.test(t.options.nextArrow) &&
                    t.$nextArrow.remove(),
                  t.$slides
                    .removeClass(
                      "slick-slide slick-active slick-visible slick-current"
                    )
                    .attr("aria-hidden", "true")
                    .css("width", "");
              }),
              (t.prototype.unslick = function (e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]), t.destroy();
              }),
              (t.prototype.updateArrows = function () {
                var e = this;
                Math.floor(e.options.slidesToShow / 2),
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    !e.options.infinite &&
                    (e.$prevArrow
                      .removeClass("slick-disabled")
                      .attr("aria-disabled", "false"),
                    e.$nextArrow
                      .removeClass("slick-disabled")
                      .attr("aria-disabled", "false"),
                    0 === e.currentSlide
                      ? (e.$prevArrow
                          .addClass("slick-disabled")
                          .attr("aria-disabled", "true"),
                        e.$nextArrow
                          .removeClass("slick-disabled")
                          .attr("aria-disabled", "false"))
                      : ((e.currentSlide >=
                          e.slideCount - e.options.slidesToShow &&
                          !1 === e.options.centerMode) ||
                          (e.currentSlide >= e.slideCount - 1 &&
                            !0 === e.options.centerMode)) &&
                        (e.$nextArrow
                          .addClass("slick-disabled")
                          .attr("aria-disabled", "true"),
                        e.$prevArrow
                          .removeClass("slick-disabled")
                          .attr("aria-disabled", "false")));
              }),
              (t.prototype.updateDots = function () {
                var e = this;
                null !== e.$dots &&
                  (e.$dots.find("li").removeClass("slick-active").end(),
                  e.$dots
                    .find("li")
                    .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                    .addClass("slick-active"));
              }),
              (t.prototype.visibility = function () {
                var e = this;
                e.options.autoplay &&
                  (document[e.hidden]
                    ? (e.interrupted = !0)
                    : (e.interrupted = !1));
              }),
              (e.fn.slick = function () {
                var e,
                  i,
                  n = this,
                  s = arguments[0],
                  a = Array.prototype.slice.call(arguments, 1),
                  o = n.length;
                for (e = 0; e < o; e++)
                  if (
                    ("object" == typeof s || void 0 === s
                      ? (n[e].slick = new t(n[e], s))
                      : (i = n[e].slick[s].apply(n[e].slick, a)),
                    void 0 !== i)
                  )
                    return i;
                return n;
              });
          }),
          void 0 === (a = "function" == typeof n ? n.apply(t, s) : n) ||
            (e.exports = a);
      })();
    },
    616231: function (e, t, i) {
      var n, s, a;
      (s = [i(619755)]),
        (n = function (e) {
          return (
            (function (e) {
              "use strict";
              var t = (e.tablesorter = {
                version: "2.31.1",
                parsers: [],
                widgets: [],
                defaults: {
                  theme: "default",
                  widthFixed: !1,
                  showProcessing: !1,
                  headerTemplate: "{content}",
                  onRenderTemplate: null,
                  onRenderHeader: null,
                  cancelSelection: !0,
                  tabIndex: !0,
                  dateFormat: "mmddyyyy",
                  sortMultiSortKey: "shiftKey",
                  sortResetKey: "ctrlKey",
                  usNumberFormat: !0,
                  delayInit: !1,
                  serverSideSorting: !1,
                  resort: !0,
                  headers: {},
                  ignoreCase: !0,
                  sortForce: null,
                  sortList: [],
                  sortAppend: null,
                  sortStable: !1,
                  sortInitialOrder: "asc",
                  sortLocaleCompare: !1,
                  sortReset: !1,
                  sortRestart: !1,
                  emptyTo: "bottom",
                  stringTo: "max",
                  duplicateSpan: !0,
                  textExtraction: "basic",
                  textAttribute: "data-text",
                  textSorter: null,
                  numberSorter: null,
                  initWidgets: !0,
                  widgetClass: "widget-{name}",
                  widgets: [],
                  widgetOptions: {
                    zebra: ["even", "odd"],
                  },
                  initialized: null,
                  tableClass: "",
                  cssAsc: "",
                  cssDesc: "",
                  cssNone: "",
                  cssHeader: "",
                  cssHeaderRow: "",
                  cssProcessing: "",
                  cssChildRow: "tablesorter-childRow",
                  cssInfoBlock: "tablesorter-infoOnly",
                  cssNoSort: "tablesorter-noSort",
                  cssIgnoreRow: "tablesorter-ignoreRow",
                  cssIcon: "tablesorter-icon",
                  cssIconNone: "",
                  cssIconAsc: "",
                  cssIconDesc: "",
                  cssIconDisabled: "",
                  pointerClick: "click",
                  pointerDown: "mousedown",
                  pointerUp: "mouseup",
                  selectorHeaders: "> thead th, > thead td",
                  selectorSort: "th, td",
                  selectorRemove: ".remove-me",
                  debug: !1,
                  headerList: [],
                  empties: {},
                  strings: {},
                  parsers: [],
                  globalize: 0,
                  imgAttr: 0,
                },
                css: {
                  table: "tablesorter",
                  cssHasChild: "tablesorter-hasChildRow",
                  childRow: "tablesorter-childRow",
                  colgroup: "tablesorter-colgroup",
                  header: "tablesorter-header",
                  headerRow: "tablesorter-headerRow",
                  headerIn: "tablesorter-header-inner",
                  icon: "tablesorter-icon",
                  processing: "tablesorter-processing",
                  sortAsc: "tablesorter-headerAsc",
                  sortDesc: "tablesorter-headerDesc",
                  sortNone: "tablesorter-headerUnSorted",
                },
                language: {
                  sortAsc: "Ascending sort applied, ",
                  sortDesc: "Descending sort applied, ",
                  sortNone: "No sort applied, ",
                  sortDisabled: "sorting is disabled",
                  nextAsc: "activate to apply an ascending sort",
                  nextDesc: "activate to apply a descending sort",
                  nextNone: "activate to remove the sort",
                },
                regex: {
                  templateContent: /\{content\}/g,
                  templateIcon: /\{icon\}/g,
                  templateName: /\{name\}/i,
                  spaces: /\s+/g,
                  nonWord: /\W/g,
                  formElements: /(input|select|button|textarea)/i,
                  chunk:
                    /(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                  chunks: /(^\\0|\\0$)/,
                  hex: /^0x[0-9a-f]+$/i,
                  comma: /,/g,
                  digitNonUS: /[\s|\.]/g,
                  digitNegativeTest: /^\s*\([.\d]+\)/,
                  digitNegativeReplace: /^\s*\(([.\d]+)\)/,
                  digitTest: /^[\-+(]?\d+[)]?$/,
                  digitReplace: /[,.'"\s]/g,
                },
                string: {
                  max: 1,
                  min: -1,
                  emptymin: 1,
                  emptymax: -1,
                  zero: 0,
                  none: 0,
                  null: 0,
                  top: !0,
                  bottom: !1,
                },
                keyCodes: {
                  enter: 13,
                },
                dates: {},
                instanceMethods: {},
                setup: function (i, n) {
                  if (
                    i &&
                    i.tHead &&
                    0 !== i.tBodies.length &&
                    !0 !== i.hasInitialized
                  ) {
                    var s,
                      a = "",
                      o = e(i),
                      r = e.metadata;
                    (i.hasInitialized = !1),
                      (i.isProcessing = !0),
                      (i.config = n),
                      e.data(i, "tablesorter", n),
                      t.debug(n, "core") &&
                        (console[console.group ? "group" : "log"](
                          "Initializing tablesorter v" + t.version
                        ),
                        e.data(i, "startoveralltimer", new Date())),
                      (n.supportsDataObject =
                        (((s = e.fn.jquery.split("."))[0] = parseInt(s[0], 10)),
                        1 < s[0] || (1 === s[0] && 4 <= parseInt(s[1], 10)))),
                      (n.emptyTo = n.emptyTo.toLowerCase()),
                      (n.stringTo = n.stringTo.toLowerCase()),
                      (n.last = {
                        sortList: [],
                        clickedIndex: -1,
                      }),
                      /tablesorter\-/.test(o.attr("class")) ||
                        (a = "" !== n.theme ? " tablesorter-" + n.theme : ""),
                      n.namespace
                        ? (n.namespace =
                            "." + n.namespace.replace(t.regex.nonWord, ""))
                        : (n.namespace =
                            ".tablesorter" +
                            Math.random().toString(16).slice(2)),
                      (n.table = i),
                      (n.$table = o
                        .addClass(
                          t.css.table +
                            " " +
                            n.tableClass +
                            a +
                            " " +
                            n.namespace.slice(1)
                        )
                        .attr("role", "grid")),
                      (n.$headers = o.find(n.selectorHeaders)),
                      n.$table.children().children("tr").attr("role", "row"),
                      (n.$tbodies = o
                        .children("tbody:not(." + n.cssInfoBlock + ")")
                        .attr({
                          "aria-live": "polite",
                          "aria-relevant": "all",
                        })),
                      n.$table.children("caption").length &&
                        ((a = n.$table.children("caption")[0]).id ||
                          (a.id = n.namespace.slice(1) + "caption"),
                        n.$table.attr("aria-labelledby", a.id)),
                      (n.widgetInit = {}),
                      (n.textExtraction =
                        n.$table.attr("data-text-extraction") ||
                        n.textExtraction ||
                        "basic"),
                      t.buildHeaders(n),
                      t.fixColumnWidth(i),
                      t.addWidgetFromClass(i),
                      t.applyWidgetOptions(i),
                      t.setupParsers(n),
                      (n.totalRows = 0),
                      n.debug && t.validateOptions(n),
                      n.delayInit || t.buildCache(n),
                      t.bindEvents(i, n.$headers, !0),
                      t.bindMethods(n),
                      n.supportsDataObject && void 0 !== o.data().sortlist
                        ? (n.sortList = o.data().sortlist)
                        : r &&
                          o.metadata() &&
                          o.metadata().sortlist &&
                          (n.sortList = o.metadata().sortlist),
                      t.applyWidget(i, !0),
                      0 < n.sortList.length
                        ? ((n.last.sortList = n.sortList),
                          t.sortOn(n, n.sortList, {}, !n.initWidgets))
                        : (t.setHeadersCss(n),
                          n.initWidgets && t.applyWidget(i, !1)),
                      n.showProcessing &&
                        o
                          .unbind(
                            "sortBegin" + n.namespace + " sortEnd" + n.namespace
                          )
                          .bind(
                            "sortBegin" +
                              n.namespace +
                              " sortEnd" +
                              n.namespace,
                            function (e) {
                              clearTimeout(n.timerProcessing),
                                t.isProcessing(i),
                                "sortBegin" === e.type &&
                                  (n.timerProcessing = setTimeout(function () {
                                    t.isProcessing(i, !0);
                                  }, 500));
                            }
                          ),
                      (i.hasInitialized = !0),
                      (i.isProcessing = !1),
                      t.debug(n, "core") &&
                        (console.log(
                          "Overall initialization time:" +
                            t.benchmark(e.data(i, "startoveralltimer"))
                        ),
                        t.debug(n, "core") &&
                          console.groupEnd &&
                          console.groupEnd()),
                      o.triggerHandler("tablesorter-initialized", i),
                      "function" == typeof n.initialized && n.initialized(i);
                  } else
                    t.debug(n, "core") &&
                      (i.hasInitialized
                        ? console.warn(
                            "Stopping initialization. Tablesorter has already been initialized"
                          )
                        : console.error(
                            "Stopping initialization! No table, thead or tbody",
                            i
                          ));
                },
                bindMethods: function (i) {
                  var n = i.$table,
                    s = i.namespace,
                    a =
                      "sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave "
                        .split(" ")
                        .join(s + " ");
                  n.unbind(a.replace(t.regex.spaces, " "))
                    .bind("sortReset" + s, function (e, i) {
                      e.stopPropagation(),
                        t.sortReset(this.config, function (e) {
                          e.isApplyingWidgets
                            ? setTimeout(function () {
                                t.applyWidget(e, "", i);
                              }, 100)
                            : t.applyWidget(e, "", i);
                        });
                    })
                    .bind("updateAll" + s, function (e, i, n) {
                      e.stopPropagation(), t.updateAll(this.config, i, n);
                    })
                    .bind("update" + s + " updateRows" + s, function (e, i, n) {
                      e.stopPropagation(), t.update(this.config, i, n);
                    })
                    .bind("updateHeaders" + s, function (e, i) {
                      e.stopPropagation(), t.updateHeaders(this.config, i);
                    })
                    .bind("updateCell" + s, function (e, i, n, s) {
                      e.stopPropagation(), t.updateCell(this.config, i, n, s);
                    })
                    .bind("addRows" + s, function (e, i, n, s) {
                      e.stopPropagation(), t.addRows(this.config, i, n, s);
                    })
                    .bind("updateComplete" + s, function () {
                      this.isUpdating = !1;
                    })
                    .bind("sorton" + s, function (e, i, n, s) {
                      e.stopPropagation(), t.sortOn(this.config, i, n, s);
                    })
                    .bind("appendCache" + s, function (i, n, s) {
                      i.stopPropagation(),
                        t.appendCache(this.config, s),
                        e.isFunction(n) && n(this);
                    })
                    .bind("updateCache" + s, function (e, i, n) {
                      e.stopPropagation(), t.updateCache(this.config, i, n);
                    })
                    .bind("applyWidgetId" + s, function (e, i) {
                      e.stopPropagation(), t.applyWidgetId(this, i);
                    })
                    .bind("applyWidgets" + s, function (e, i) {
                      e.stopPropagation(), t.applyWidget(this, !1, i);
                    })
                    .bind("refreshWidgets" + s, function (e, i, n) {
                      e.stopPropagation(), t.refreshWidgets(this, i, n);
                    })
                    .bind("removeWidget" + s, function (e, i, n) {
                      e.stopPropagation(), t.removeWidget(this, i, n);
                    })
                    .bind("destroy" + s, function (e, i, n) {
                      e.stopPropagation(), t.destroy(this, i, n);
                    })
                    .bind("resetToLoadState" + s, function (n) {
                      n.stopPropagation(), t.removeWidget(this, !0, !1);
                      var s = e.extend(!0, {}, i.originalSettings);
                      ((i = e.extend(!0, {}, t.defaults, s)).originalSettings =
                        s),
                        (this.hasInitialized = !1),
                        t.setup(this, i);
                    });
                },
                bindEvents: function (i, n, s) {
                  var a,
                    o = (i = e(i)[0]).config,
                    r = o.namespace,
                    l = null;
                  !0 !== s &&
                    (n.addClass(r.slice(1) + "_extra_headers"),
                    (a = t.getClosest(n, "table")).length &&
                      "TABLE" === a[0].nodeName &&
                      a[0] !== i &&
                      e(a[0]).addClass(r.slice(1) + "_extra_table")),
                    (a = (
                      o.pointerDown +
                      " " +
                      o.pointerUp +
                      " " +
                      o.pointerClick +
                      " sort keyup "
                    )
                      .replace(t.regex.spaces, " ")
                      .split(" ")
                      .join(r + " ")),
                    n
                      .find(o.selectorSort)
                      .add(n.filter(o.selectorSort))
                      .unbind(a)
                      .bind(a, function (i, n) {
                        var s,
                          a,
                          r,
                          c = e(i.target),
                          d = " " + i.type + " ";
                        if (
                          !(
                            (1 !== (i.which || i.button) &&
                              !d.match(
                                " " + o.pointerClick + " | sort | keyup "
                              )) ||
                            (" keyup " === d && i.which !== t.keyCodes.enter) ||
                            (d.match(" " + o.pointerClick + " ") &&
                              void 0 !== i.which) ||
                            (d.match(" " + o.pointerUp + " ") &&
                              l !== i.target &&
                              !0 !== n)
                          )
                        ) {
                          if (d.match(" " + o.pointerDown + " "))
                            return (
                              (l = i.target),
                              void (
                                "1" === (r = c.jquery.split("."))[0] &&
                                r[1] < 4 &&
                                i.preventDefault()
                              )
                            );
                          if (
                            ((l = null),
                            (s = t.getClosest(e(this), "." + t.css.header)),
                            t.regex.formElements.test(i.target.nodeName) ||
                              c.hasClass(o.cssNoSort) ||
                              0 < c.parents("." + o.cssNoSort).length ||
                              s.hasClass("sorter-false") ||
                              0 < c.parents("button").length)
                          )
                            return !o.cancelSelection;
                          o.delayInit &&
                            t.isEmptyObject(o.cache) &&
                            t.buildCache(o),
                            (o.last.clickedIndex =
                              s.attr("data-column") || s.index()),
                            (a = o.$headerIndexed[o.last.clickedIndex][0]) &&
                              !a.sortDisabled &&
                              t.initSort(o, a, i);
                        }
                      }),
                    o.cancelSelection &&
                      n.attr("unselectable", "on").bind("selectstart", !1).css({
                        "user-select": "none",
                        MozUserSelect: "none",
                      });
                },
                buildHeaders: function (i) {
                  var n, s, a, o;
                  for (
                    i.headerList = [],
                      i.headerContent = [],
                      i.sortVars = [],
                      t.debug(i, "core") && (a = new Date()),
                      i.columns = t.computeColumnIndex(
                        i.$table.children("thead, tfoot").children("tr")
                      ),
                      s = i.cssIcon
                        ? '<i class="' +
                          (i.cssIcon === t.css.icon
                            ? t.css.icon
                            : i.cssIcon + " " + t.css.icon) +
                          '"></i>'
                        : "",
                      i.$headers = e(
                        e.map(
                          i.$table.find(i.selectorHeaders),
                          function (n, a) {
                            var o,
                              r,
                              l,
                              c,
                              d,
                              u = e(n);
                            if (!t.getClosest(u, "tr").hasClass(i.cssIgnoreRow))
                              return (
                                /(th|td)/i.test(n.nodeName) ||
                                  ((d = t.getClosest(u, "th, td")),
                                  u.attr("data-column", d.attr("data-column"))),
                                (o = t.getColumnData(
                                  i.table,
                                  i.headers,
                                  a,
                                  !0
                                )),
                                (i.headerContent[a] = u.html()),
                                "" === i.headerTemplate ||
                                  u.find("." + t.css.headerIn).length ||
                                  ((c = i.headerTemplate
                                    .replace(t.regex.templateContent, u.html())
                                    .replace(
                                      t.regex.templateIcon,
                                      u.find("." + t.css.icon).length ? "" : s
                                    )),
                                  i.onRenderTemplate &&
                                    (r = i.onRenderTemplate.apply(u, [a, c])) &&
                                    "string" == typeof r &&
                                    (c = r),
                                  u.html(
                                    '<div class="' +
                                      t.css.headerIn +
                                      '">' +
                                      c +
                                      "</div>"
                                  )),
                                i.onRenderHeader &&
                                  i.onRenderHeader.apply(u, [a, i, i.$table]),
                                (l = parseInt(u.attr("data-column"), 10)),
                                (n.column = l),
                                (d = t.getOrder(
                                  t.getData(u, o, "sortInitialOrder") ||
                                    i.sortInitialOrder
                                )),
                                (i.sortVars[l] = {
                                  count: -1,
                                  order: d
                                    ? i.sortReset
                                      ? [1, 0, 2]
                                      : [1, 0]
                                    : i.sortReset
                                    ? [0, 1, 2]
                                    : [0, 1],
                                  lockedOrder: !1,
                                  sortedBy: "",
                                }),
                                void 0 !==
                                  (d = t.getData(u, o, "lockedOrder") || !1) &&
                                  !1 !== d &&
                                  ((i.sortVars[l].lockedOrder = !0),
                                  (i.sortVars[l].order = t.getOrder(d)
                                    ? [1, 1]
                                    : [0, 0])),
                                (i.headerList[a] = n),
                                u.addClass(t.css.header + " " + i.cssHeader),
                                t
                                  .getClosest(u, "tr")
                                  .addClass(
                                    t.css.headerRow + " " + i.cssHeaderRow
                                  )
                                  .attr("role", "row"),
                                i.tabIndex && u.attr("tabindex", 0),
                                n
                              );
                          }
                        )
                      ),
                      i.$headerIndexed = [],
                      o = 0;
                    o < i.columns;
                    o++
                  )
                    t.isEmptyObject(i.sortVars[o]) && (i.sortVars[o] = {}),
                      (n = i.$headers.filter('[data-column="' + o + '"]')),
                      (i.$headerIndexed[o] = n.length
                        ? n.not(".sorter-false").length
                          ? n.not(".sorter-false").filter(":last")
                          : n.filter(":last")
                        : e());
                  i.$table.find(i.selectorHeaders).attr({
                    scope: "col",
                    role: "columnheader",
                  }),
                    t.updateHeader(i),
                    t.debug(i, "core") &&
                      (console.log("Built headers:" + t.benchmark(a)),
                      console.log(i.$headers));
                },
                addInstanceMethods: function (i) {
                  e.extend(t.instanceMethods, i);
                },
                setupParsers: function (e, i) {
                  var n,
                    s,
                    a,
                    o,
                    r,
                    l,
                    c,
                    d,
                    u,
                    h,
                    p,
                    f,
                    m,
                    g,
                    v = e.table,
                    _ = 0,
                    y = t.debug(e, "core"),
                    b = {};
                  if (
                    ((e.$tbodies = e.$table.children(
                      "tbody:not(." + e.cssInfoBlock + ")"
                    )),
                    0 === (g = (m = void 0 === i ? e.$tbodies : i).length))
                  )
                    return y
                      ? console.warn(
                          "Warning: *Empty table!* Not building a parser cache"
                        )
                      : "";
                  for (
                    y &&
                      ((f = new Date()),
                      console[console.group ? "group" : "log"](
                        "Detecting parsers for each column"
                      )),
                      s = {
                        extractors: [],
                        parsers: [],
                      };
                    _ < g;

                  ) {
                    if ((n = m[_].rows).length)
                      for (r = 0, o = e.columns, l = 0; l < o; l++) {
                        if (
                          (c = e.$headerIndexed[r]) &&
                          c.length &&
                          ((d = t.getColumnData(v, e.headers, r)),
                          (p = t.getParserById(t.getData(c, d, "extractor"))),
                          (h = t.getParserById(t.getData(c, d, "sorter"))),
                          (u = "false" === t.getData(c, d, "parser")),
                          (e.empties[r] = (
                            t.getData(c, d, "empty") ||
                            e.emptyTo ||
                            (e.emptyToBottom ? "bottom" : "top")
                          ).toLowerCase()),
                          (e.strings[r] = (
                            t.getData(c, d, "string") ||
                            e.stringTo ||
                            "max"
                          ).toLowerCase()),
                          u && (h = t.getParserById("no-parser")),
                          p || (p = !1),
                          h || (h = t.detectParserForColumn(e, n, -1, r)),
                          y &&
                            (b["(" + r + ") " + c.text()] = {
                              parser: h.id,
                              extractor: p ? p.id : "none",
                              string: e.strings[r],
                              empty: e.empties[r],
                            }),
                          (s.parsers[r] = h),
                          (s.extractors[r] = p),
                          0 < (a = c[0].colSpan - 1))
                        )
                          for (r += a, o += a; 0 < a + 1; )
                            (s.parsers[r - a] = h),
                              (s.extractors[r - a] = p),
                              a--;
                        r++;
                      }
                    _ += s.parsers.length ? g : 1;
                  }
                  y &&
                    (t.isEmptyObject(b)
                      ? console.warn("  No parsers detected!")
                      : console[console.table ? "table" : "log"](b),
                    console.log("Completed detecting parsers" + t.benchmark(f)),
                    console.groupEnd && console.groupEnd()),
                    (e.parsers = s.parsers),
                    (e.extractors = s.extractors);
                },
                addParser: function (e) {
                  var i,
                    n = t.parsers.length,
                    s = !0;
                  for (i = 0; i < n; i++)
                    t.parsers[i].id.toLowerCase() === e.id.toLowerCase() &&
                      (s = !1);
                  s && (t.parsers[t.parsers.length] = e);
                },
                getParserById: function (e) {
                  if ("false" == e) return !1;
                  var i,
                    n = t.parsers.length;
                  for (i = 0; i < n; i++)
                    if (
                      t.parsers[i].id.toLowerCase() ===
                      e.toString().toLowerCase()
                    )
                      return t.parsers[i];
                  return !1;
                },
                detectParserForColumn: function (i, n, s, a) {
                  for (
                    var o,
                      r,
                      l,
                      c = t.parsers.length,
                      d = !1,
                      u = "",
                      h = t.debug(i, "core"),
                      p = !0;
                    "" === u && p;

                  )
                    (l = n[++s]) && s < 50
                      ? l.className.indexOf(t.cssIgnoreRow) < 0 &&
                        ((d = n[s].cells[a]),
                        (u = t.getElementText(i, d, a)),
                        (r = e(d)),
                        h &&
                          console.log(
                            "Checking if value was empty on row " +
                              s +
                              ", column: " +
                              a +
                              ': "' +
                              u +
                              '"'
                          ))
                      : (p = !1);
                  for (; 0 <= --c; )
                    if (
                      (o = t.parsers[c]) &&
                      "text" !== o.id &&
                      o.is &&
                      o.is(u, i.table, d, r)
                    )
                      return o;
                  return t.getParserById("text");
                },
                getElementText: function (i, n, s) {
                  if (!n) return "";
                  var a,
                    o = i.textExtraction || "",
                    r = n.jquery ? n : e(n);
                  return "string" == typeof o
                    ? "basic" === o && void 0 !== (a = r.attr(i.textAttribute))
                      ? e.trim(a)
                      : e.trim(n.textContent || r.text())
                    : "function" == typeof o
                    ? e.trim(o(r[0], i.table, s))
                    : "function" == typeof (a = t.getColumnData(i.table, o, s))
                    ? e.trim(a(r[0], i.table, s))
                    : e.trim(r[0].textContent || r.text());
                },
                getParsedText: function (e, i, n, s) {
                  void 0 === s && (s = t.getElementText(e, i, n));
                  var a = "" + s,
                    o = e.parsers[n],
                    r = e.extractors[n];
                  return (
                    o &&
                      (r &&
                        "function" == typeof r.format &&
                        (s = r.format(s, e.table, i, n)),
                      (a =
                        "no-parser" === o.id
                          ? ""
                          : o.format("" + s, e.table, i, n)),
                      e.ignoreCase &&
                        "string" == typeof a &&
                        (a = a.toLowerCase())),
                    a
                  );
                },
                buildCache: function (i, n, s) {
                  var a,
                    o,
                    r,
                    l,
                    c,
                    d,
                    u,
                    h,
                    p,
                    f,
                    m,
                    g,
                    v,
                    _,
                    y,
                    b,
                    w,
                    S,
                    k,
                    C,
                    x,
                    T,
                    D = i.table,
                    E = i.parsers,
                    I = t.debug(i, "core");
                  if (
                    ((i.$tbodies = i.$table.children(
                      "tbody:not(." + i.cssInfoBlock + ")"
                    )),
                    (u = void 0 === s ? i.$tbodies : s),
                    (i.cache = {}),
                    (i.totalRows = 0),
                    !E)
                  )
                    return I
                      ? console.warn(
                          "Warning: *Empty table!* Not building a cache"
                        )
                      : "";
                  for (
                    I && (g = new Date()),
                      i.showProcessing && t.isProcessing(D, !0),
                      d = 0;
                    d < u.length;
                    d++
                  ) {
                    for (
                      b = [],
                        a = i.cache[d] =
                          {
                            normalized: [],
                          },
                        v = (u[d] && u[d].rows.length) || 0,
                        l = 0;
                      l < v;
                      ++l
                    )
                      if (
                        ((_ = {
                          child: [],
                          raw: [],
                        }),
                        (p = []),
                        !(h = e(u[d].rows[l])).hasClass(
                          i.selectorRemove.slice(1)
                        ))
                      )
                        if (h.hasClass(i.cssChildRow) && 0 !== l)
                          for (
                            x = a.normalized.length - 1,
                              (y = a.normalized[x][i.columns]).$row =
                                y.$row.add(h),
                              h.prev().hasClass(i.cssChildRow) ||
                                h.prev().addClass(t.css.cssHasChild),
                              f = h.children("th, td"),
                              x = y.child.length,
                              y.child[x] = [],
                              S = 0,
                              C = i.columns,
                              c = 0;
                            c < C;
                            c++
                          )
                            (m = f[c]) &&
                              ((y.child[x][c] = t.getParsedText(i, m, c)),
                              0 < (w = f[c].colSpan - 1) &&
                                ((S += w), (C += w))),
                              S++;
                        else {
                          for (
                            _.$row = h,
                              _.order = l,
                              S = 0,
                              C = i.columns,
                              c = 0;
                            c < C;
                            ++c
                          ) {
                            if (
                              (m = h[0].cells[c]) &&
                              S < i.columns &&
                              (!(k = void 0 !== E[S]) &&
                                I &&
                                console.warn(
                                  "No parser found for row: " +
                                    l +
                                    ", column: " +
                                    c +
                                    '; cell containing: "' +
                                    e(m).text() +
                                    '"; does it have a header?'
                                ),
                              (o = t.getElementText(i, m, S)),
                              (_.raw[S] = o),
                              (r = t.getParsedText(i, m, S, o)),
                              (p[S] = r),
                              k &&
                                "numeric" === (E[S].type || "").toLowerCase() &&
                                (b[S] = Math.max(Math.abs(r) || 0, b[S] || 0)),
                              0 < (w = m.colSpan - 1))
                            ) {
                              for (T = 0; T <= w; )
                                (r =
                                  i.duplicateSpan || 0 === T
                                    ? o
                                    : ("string" != typeof i.textExtraction &&
                                        t.getElementText(i, m, S + T)) ||
                                      ""),
                                  (_.raw[S + T] = r),
                                  (p[S + T] = r),
                                  T++;
                              (S += w), (C += w);
                            }
                            S++;
                          }
                          (p[i.columns] = _),
                            (a.normalized[a.normalized.length] = p);
                        }
                    (a.colMax = b), (i.totalRows += a.normalized.length);
                  }
                  if ((i.showProcessing && t.isProcessing(D), I)) {
                    for (
                      x = Math.min(5, i.cache[0].normalized.length),
                        console[console.group ? "group" : "log"](
                          "Building cache for " +
                            i.totalRows +
                            " rows (showing " +
                            x +
                            " rows in log) and " +
                            i.columns +
                            " columns" +
                            t.benchmark(g)
                        ),
                        o = {},
                        c = 0;
                      c < i.columns;
                      c++
                    )
                      for (S = 0; S < x; S++)
                        o["row: " + S] || (o["row: " + S] = {}),
                          (o["row: " + S][i.$headerIndexed[c].text()] =
                            i.cache[0].normalized[S][c]);
                    console[console.table ? "table" : "log"](o),
                      console.groupEnd && console.groupEnd();
                  }
                  e.isFunction(n) && n(D);
                },
                getColumnText: function (i, n, s, a) {
                  var o,
                    r,
                    l,
                    c,
                    d,
                    u,
                    h,
                    p,
                    f,
                    m,
                    g = "function" == typeof s,
                    v = "all" === n,
                    _ = {
                      raw: [],
                      parsed: [],
                      $cell: [],
                    },
                    y = (i = e(i)[0]).config;
                  if (!t.isEmptyObject(y)) {
                    for (d = y.$tbodies.length, o = 0; o < d; o++)
                      for (
                        u = (l = y.cache[o].normalized).length, r = 0;
                        r < u;
                        r++
                      )
                        (c = l[r]),
                          (a && !c[y.columns].$row.is(a)) ||
                            ((m = !0),
                            (p = v ? c.slice(0, y.columns) : c[n]),
                            (c = c[y.columns]),
                            (h = v ? c.raw : c.raw[n]),
                            (f = v
                              ? c.$row.children()
                              : c.$row.children().eq(n)),
                            g &&
                              (m = s({
                                tbodyIndex: o,
                                rowIndex: r,
                                parsed: p,
                                raw: h,
                                $row: c.$row,
                                $cell: f,
                              })),
                            !1 !== m &&
                              ((_.parsed[_.parsed.length] = p),
                              (_.raw[_.raw.length] = h),
                              (_.$cell[_.$cell.length] = f)));
                    return _;
                  }
                  t.debug(y, "core") &&
                    console.warn(
                      "No cache found - aborting getColumnText function!"
                    );
                },
                setHeadersCss: function (i) {
                  var n,
                    s,
                    a = i.sortList,
                    o = a.length,
                    r = t.css.sortNone + " " + i.cssNone,
                    l = [
                      t.css.sortAsc + " " + i.cssAsc,
                      t.css.sortDesc + " " + i.cssDesc,
                    ],
                    c = [i.cssIconAsc, i.cssIconDesc, i.cssIconNone],
                    d = ["ascending", "descending"],
                    u = function (e, i) {
                      e.removeClass(r)
                        .addClass(l[i])
                        .attr("aria-sort", d[i])
                        .find("." + t.css.icon)
                        .removeClass(c[2])
                        .addClass(c[i]);
                    },
                    h = i.$table
                      .find("tfoot tr")
                      .children("td, th")
                      .add(e(i.namespace + "_extra_headers"))
                      .removeClass(l.join(" ")),
                    p = i.$headers
                      .add(e("thead " + i.namespace + "_extra_headers"))
                      .removeClass(l.join(" "))
                      .addClass(r)
                      .attr("aria-sort", "none")
                      .find("." + t.css.icon)
                      .removeClass(c.join(" "))
                      .end();
                  for (
                    p
                      .not(".sorter-false")
                      .find("." + t.css.icon)
                      .addClass(c[2]),
                      i.cssIconDisabled &&
                        p
                          .filter(".sorter-false")
                          .find("." + t.css.icon)
                          .addClass(i.cssIconDisabled),
                      n = 0;
                    n < o;
                    n++
                  )
                    if (2 !== a[n][1]) {
                      if (
                        (p = (p = i.$headers.filter(function (e) {
                          for (
                            var n = !0,
                              s = i.$headers.eq(e),
                              a = parseInt(s.attr("data-column"), 10),
                              o = a + t.getClosest(s, "th, td")[0].colSpan;
                            a < o;
                            a++
                          )
                            n =
                              !!n &&
                              (n || -1 < t.isValueInArray(a, i.sortList));
                          return n;
                        }))
                          .not(".sorter-false")
                          .filter(
                            '[data-column="' +
                              a[n][0] +
                              '"]' +
                              (1 === o ? ":last" : "")
                          )).length
                      )
                        for (s = 0; s < p.length; s++)
                          p[s].sortDisabled || u(p.eq(s), a[n][1]);
                      h.length &&
                        u(h.filter('[data-column="' + a[n][0] + '"]'), a[n][1]);
                    }
                  for (o = i.$headers.length, n = 0; n < o; n++)
                    t.setColumnAriaLabel(i, i.$headers.eq(n));
                },
                getClosest: function (t, i) {
                  return e.fn.closest
                    ? t.closest(i)
                    : t.is(i)
                    ? t
                    : t.parents(i).filter(":first");
                },
                setColumnAriaLabel: function (i, n, s) {
                  if (n.length) {
                    var a = parseInt(n.attr("data-column"), 10),
                      o = i.sortVars[a],
                      r = n.hasClass(t.css.sortAsc)
                        ? "sortAsc"
                        : n.hasClass(t.css.sortDesc)
                        ? "sortDesc"
                        : "sortNone",
                      l = e.trim(n.text()) + ": " + t.language[r];
                    n.hasClass("sorter-false") || !1 === s
                      ? (l += t.language.sortDisabled)
                      : ((r = (o.count + 1) % o.order.length),
                        (s = o.order[r]),
                        (l +=
                          t.language[
                            0 === s
                              ? "nextAsc"
                              : 1 === s
                              ? "nextDesc"
                              : "nextNone"
                          ])),
                      n.attr("aria-label", l),
                      o.sortedBy
                        ? n.attr("data-sortedBy", o.sortedBy)
                        : n.removeAttr("data-sortedBy");
                  }
                },
                updateHeader: function (e) {
                  var i,
                    n,
                    s,
                    a,
                    o = e.table,
                    r = e.$headers.length;
                  for (i = 0; i < r; i++)
                    (s = e.$headers.eq(i)),
                      (a = t.getColumnData(o, e.headers, i, !0)),
                      (n =
                        "false" === t.getData(s, a, "sorter") ||
                        "false" === t.getData(s, a, "parser")),
                      t.setColumnSort(e, s, n);
                },
                setColumnSort: function (e, t, i) {
                  var n = e.table.id;
                  (t[0].sortDisabled = i),
                    t[i ? "addClass" : "removeClass"]("sorter-false").attr(
                      "aria-disabled",
                      "" + i
                    ),
                    e.tabIndex &&
                      (i ? t.removeAttr("tabindex") : t.attr("tabindex", "0")),
                    n &&
                      (i
                        ? t.removeAttr("aria-controls")
                        : t.attr("aria-controls", n));
                },
                updateHeaderSortCount: function (i, n) {
                  var s,
                    a,
                    o,
                    r,
                    l,
                    c,
                    d,
                    u,
                    h = n || i.sortList,
                    p = h.length;
                  for (i.sortList = [], r = 0; r < p; r++)
                    if (((d = h[r]), (s = parseInt(d[0], 10)) < i.columns)) {
                      switch (
                        (i.sortVars[s].order ||
                          ((u = t.getOrder(i.sortInitialOrder)
                            ? i.sortReset
                              ? [1, 0, 2]
                              : [1, 0]
                            : i.sortReset
                            ? [0, 1, 2]
                            : [0, 1]),
                          (i.sortVars[s].order = u),
                          (i.sortVars[s].count = 0)),
                        (u = i.sortVars[s].order),
                        (a = (a = ("" + d[1]).match(/^(1|d|s|o|n)/))
                          ? a[0]
                          : ""))
                      ) {
                        case "1":
                        case "d":
                          a = 1;
                          break;
                        case "s":
                          a = l || 0;
                          break;
                        case "o":
                          a =
                            0 === (c = u[(l || 0) % u.length])
                              ? 1
                              : 1 === c
                              ? 0
                              : 2;
                          break;
                        case "n":
                          a = u[++i.sortVars[s].count % u.length];
                          break;
                        default:
                          a = 0;
                      }
                      (l = 0 === r ? a : l),
                        (o = [s, parseInt(a, 10) || 0]),
                        (i.sortList[i.sortList.length] = o),
                        (a = e.inArray(o[1], u)),
                        (i.sortVars[s].count = 0 <= a ? a : o[1] % u.length);
                    }
                },
                updateAll: function (e, i, n) {
                  var s = e.table;
                  (s.isUpdating = !0),
                    t.refreshWidgets(s, !0, !0),
                    t.buildHeaders(e),
                    t.bindEvents(s, e.$headers, !0),
                    t.bindMethods(e),
                    t.commonUpdate(e, i, n);
                },
                update: function (e, i, n) {
                  (e.table.isUpdating = !0),
                    t.updateHeader(e),
                    t.commonUpdate(e, i, n);
                },
                updateHeaders: function (e, i) {
                  (e.table.isUpdating = !0),
                    t.buildHeaders(e),
                    t.bindEvents(e.table, e.$headers, !0),
                    t.resortComplete(e, i);
                },
                updateCell: function (i, n, s, a) {
                  if (e(n).closest("tr").hasClass(i.cssChildRow))
                    console.warn(
                      'Tablesorter Warning! "updateCell" for child row content has been disabled, use "update" instead'
                    );
                  else {
                    if (t.isEmptyObject(i.cache))
                      return t.updateHeader(i), void t.commonUpdate(i, s, a);
                    (i.table.isUpdating = !0),
                      i.$table.find(i.selectorRemove).remove();
                    var o,
                      r,
                      l,
                      c,
                      d,
                      u,
                      h = i.$tbodies,
                      p = e(n),
                      f = h.index(t.getClosest(p, "tbody")),
                      m = i.cache[f],
                      g = t.getClosest(p, "tr");
                    if (((n = p[0]), h.length && 0 <= f)) {
                      if (
                        ((l = h
                          .eq(f)
                          .find("tr")
                          .not("." + i.cssChildRow)
                          .index(g)),
                        (d = m.normalized[l]),
                        (u = g[0].cells.length) !== i.columns)
                      )
                        for (o = !1, r = c = 0; r < u; r++)
                          o || g[0].cells[r] === n
                            ? (o = !0)
                            : (c += g[0].cells[r].colSpan);
                      else c = p.index();
                      (o = t.getElementText(i, n, c)),
                        (d[i.columns].raw[c] = o),
                        (o = t.getParsedText(i, n, c, o)),
                        (d[c] = o),
                        "numeric" === (i.parsers[c].type || "").toLowerCase() &&
                          (m.colMax[c] = Math.max(
                            Math.abs(o) || 0,
                            m.colMax[c] || 0
                          )),
                        !1 !== (o = "undefined" !== s ? s : i.resort)
                          ? t.checkResort(i, o, a)
                          : t.resortComplete(i, a);
                    } else
                      t.debug(i, "core") &&
                        console.error(
                          "updateCell aborted, tbody missing or not within the indicated table"
                        ),
                        (i.table.isUpdating = !1);
                  }
                },
                addRows: function (i, n, s, a) {
                  var o,
                    r,
                    l,
                    c,
                    d,
                    u,
                    h,
                    p,
                    f,
                    m,
                    g,
                    v,
                    _,
                    y =
                      "string" == typeof n &&
                      1 === i.$tbodies.length &&
                      /<tr/.test(n || ""),
                    b = i.table;
                  if (y) (n = e(n)), i.$tbodies.append(n);
                  else if (
                    !(
                      n &&
                      n instanceof e &&
                      t.getClosest(n, "table")[0] === i.table
                    )
                  )
                    return (
                      t.debug(i, "core") &&
                        console.error(
                          "addRows method requires (1) a jQuery selector reference to rows that have already been added to the table, or (2) row HTML string to be added to a table with only one tbody"
                        ),
                      !1
                    );
                  if (((b.isUpdating = !0), t.isEmptyObject(i.cache)))
                    t.updateHeader(i), t.commonUpdate(i, s, a);
                  else {
                    for (
                      d = n.filter("tr").attr("role", "row").length,
                        l = i.$tbodies.index(
                          n.parents("tbody").filter(":first")
                        ),
                        (i.parsers && i.parsers.length) || t.setupParsers(i),
                        c = 0;
                      c < d;
                      c++
                    ) {
                      for (
                        f = 0,
                          h = n[c].cells.length,
                          p = i.cache[l].normalized.length,
                          g = [],
                          m = {
                            child: [],
                            raw: [],
                            $row: n.eq(c),
                            order: p,
                          },
                          u = 0;
                        u < h;
                        u++
                      )
                        (v = n[c].cells[u]),
                          (o = t.getElementText(i, v, f)),
                          (m.raw[f] = o),
                          (r = t.getParsedText(i, v, f, o)),
                          (g[f] = r),
                          "numeric" ===
                            (i.parsers[f].type || "").toLowerCase() &&
                            (i.cache[l].colMax[f] = Math.max(
                              Math.abs(r) || 0,
                              i.cache[l].colMax[f] || 0
                            )),
                          0 < (_ = v.colSpan - 1) && (f += _),
                          f++;
                      (g[i.columns] = m), (i.cache[l].normalized[p] = g);
                    }
                    t.checkResort(i, s, a);
                  }
                },
                updateCache: function (e, i, n) {
                  (e.parsers && e.parsers.length) || t.setupParsers(e, n),
                    t.buildCache(e, i, n);
                },
                appendCache: function (e, i) {
                  var n,
                    s,
                    a,
                    o,
                    r,
                    l,
                    c,
                    d = e.table,
                    u = e.$tbodies,
                    h = [],
                    p = e.cache;
                  if (t.isEmptyObject(p))
                    return e.appender
                      ? e.appender(d, h)
                      : d.isUpdating
                      ? e.$table.triggerHandler("updateComplete", d)
                      : "";
                  for (
                    t.debug(e, "core") && (c = new Date()), l = 0;
                    l < u.length;
                    l++
                  )
                    if ((a = u.eq(l)).length) {
                      for (
                        o = t.processTbody(d, a, !0),
                          s = (n = p[l].normalized).length,
                          r = 0;
                        r < s;
                        r++
                      )
                        (h[h.length] = n[r][e.columns].$row),
                          (e.appender &&
                            (!e.pager || e.pager.removeRows || e.pager.ajax)) ||
                            o.append(n[r][e.columns].$row);
                      t.processTbody(d, o, !1);
                    }
                  e.appender && e.appender(d, h),
                    t.debug(e, "core") &&
                      console.log("Rebuilt table" + t.benchmark(c)),
                    i || e.appender || t.applyWidget(d),
                    d.isUpdating &&
                      e.$table.triggerHandler("updateComplete", d);
                },
                commonUpdate: function (e, i, n) {
                  e.$table.find(e.selectorRemove).remove(),
                    t.setupParsers(e),
                    t.buildCache(e),
                    t.checkResort(e, i, n);
                },
                initSort: function (i, n, s) {
                  if (i.table.isUpdating)
                    return setTimeout(function () {
                      t.initSort(i, n, s);
                    }, 50);
                  var a,
                    o,
                    r,
                    l,
                    c,
                    d,
                    u,
                    h = !s[i.sortMultiSortKey],
                    p = i.table,
                    f = i.$headers.length,
                    m = t.getClosest(e(n), "th, td"),
                    g = parseInt(m.attr("data-column"), 10),
                    v = "mouseup" === s.type ? "user" : s.type,
                    _ = i.sortVars[g].order;
                  if (
                    ((m = m[0]),
                    i.$table.triggerHandler("sortStart", p),
                    (d = (i.sortVars[g].count + 1) % _.length),
                    (i.sortVars[g].count = s[i.sortResetKey] ? 2 : d),
                    i.sortRestart)
                  )
                    for (r = 0; r < f; r++)
                      (u = i.$headers.eq(r)),
                        g !== (d = parseInt(u.attr("data-column"), 10)) &&
                          (h || u.hasClass(t.css.sortNone)) &&
                          (i.sortVars[d].count = -1);
                  if (h) {
                    if (
                      (e.each(i.sortVars, function (e) {
                        i.sortVars[e].sortedBy = "";
                      }),
                      (i.sortList = []),
                      (i.last.sortList = []),
                      null !== i.sortForce)
                    )
                      for (a = i.sortForce, o = 0; o < a.length; o++)
                        a[o][0] !== g &&
                          ((i.sortList[i.sortList.length] = a[o]),
                          (i.sortVars[a[o][0]].sortedBy = "sortForce"));
                    if (
                      (l = _[i.sortVars[g].count]) < 2 &&
                      ((i.sortList[i.sortList.length] = [g, l]),
                      (i.sortVars[g].sortedBy = v),
                      1 < m.colSpan)
                    )
                      for (o = 1; o < m.colSpan; o++)
                        (i.sortList[i.sortList.length] = [g + o, l]),
                          (i.sortVars[g + o].count = e.inArray(l, _)),
                          (i.sortVars[g + o].sortedBy = v);
                  } else if (
                    ((i.sortList = e.extend([], i.last.sortList)),
                    0 <= t.isValueInArray(g, i.sortList))
                  )
                    for (
                      i.sortVars[g].sortedBy = v, o = 0;
                      o < i.sortList.length;
                      o++
                    )
                      (d = i.sortList[o])[0] === g &&
                        ((d[1] = _[i.sortVars[g].count]),
                        2 === d[1] &&
                          (i.sortList.splice(o, 1),
                          (i.sortVars[g].count = -1)));
                  else if (
                    ((l = _[i.sortVars[g].count]),
                    (i.sortVars[g].sortedBy = v),
                    l < 2 &&
                      ((i.sortList[i.sortList.length] = [g, l]), 1 < m.colSpan))
                  )
                    for (o = 1; o < m.colSpan; o++)
                      (i.sortList[i.sortList.length] = [g + o, l]),
                        (i.sortVars[g + o].count = e.inArray(l, _)),
                        (i.sortVars[g + o].sortedBy = v);
                  if (
                    ((i.last.sortList = e.extend([], i.sortList)),
                    i.sortList.length &&
                      i.sortAppend &&
                      ((a = e.isArray(i.sortAppend)
                        ? i.sortAppend
                        : i.sortAppend[i.sortList[0][0]]),
                      !t.isEmptyObject(a)))
                  )
                    for (o = 0; o < a.length; o++)
                      if (
                        a[o][0] !== g &&
                        t.isValueInArray(a[o][0], i.sortList) < 0
                      ) {
                        if ((c = ("" + (l = a[o][1])).match(/^(a|d|s|o|n)/)))
                          switch (((d = i.sortList[0][1]), c[0])) {
                            case "d":
                              l = 1;
                              break;
                            case "s":
                              l = d;
                              break;
                            case "o":
                              l = 0 === d ? 1 : 0;
                              break;
                            case "n":
                              l = (d + 1) % _.length;
                              break;
                            default:
                              l = 0;
                          }
                        (i.sortList[i.sortList.length] = [a[o][0], l]),
                          (i.sortVars[a[o][0]].sortedBy = "sortAppend");
                      }
                  i.$table.triggerHandler("sortBegin", p),
                    setTimeout(function () {
                      t.setHeadersCss(i),
                        t.multisort(i),
                        t.appendCache(i),
                        i.$table.triggerHandler("sortBeforeEnd", p),
                        i.$table.triggerHandler("sortEnd", p);
                    }, 1);
                },
                multisort: function (e) {
                  var i,
                    n,
                    s,
                    a,
                    o = e.table,
                    r = [],
                    l = 0,
                    c = e.textSorter || "",
                    d = e.sortList,
                    u = d.length,
                    h = e.$tbodies.length;
                  if (!e.serverSideSorting && !t.isEmptyObject(e.cache)) {
                    if (
                      (t.debug(e, "core") && (n = new Date()),
                      "object" == typeof c)
                    )
                      for (s = e.columns; s--; )
                        "function" == typeof (a = t.getColumnData(o, c, s)) &&
                          (r[s] = a);
                    for (i = 0; i < h; i++)
                      (s = e.cache[i].colMax),
                        e.cache[i].normalized.sort(function (i, n) {
                          var a, h, p, f, m, g, v;
                          for (a = 0; a < u; a++) {
                            if (
                              ((p = d[a][0]),
                              (f = d[a][1]),
                              (l = 0 === f),
                              e.sortStable && i[p] === n[p] && 1 === u)
                            )
                              return i[e.columns].order - n[e.columns].order;
                            if (
                              (m =
                                (h = /n/i.test(t.getSortType(e.parsers, p))) &&
                                e.strings[p]
                                  ? ((h =
                                      "boolean" == typeof t.string[e.strings[p]]
                                        ? (l ? 1 : -1) *
                                          (t.string[e.strings[p]] ? -1 : 1)
                                        : (e.strings[p] &&
                                            t.string[e.strings[p]]) ||
                                          0),
                                    e.numberSorter
                                      ? e.numberSorter(i[p], n[p], l, s[p], o)
                                      : t["sortNumeric" + (l ? "Asc" : "Desc")](
                                          i[p],
                                          n[p],
                                          h,
                                          s[p],
                                          p,
                                          e
                                        ))
                                  : ((g = l ? i : n),
                                    (v = l ? n : i),
                                    "function" == typeof c
                                      ? c(g[p], v[p], l, p, o)
                                      : "function" == typeof r[p]
                                      ? r[p](g[p], v[p], l, p, o)
                                      : t["sortNatural" + (l ? "Asc" : "Desc")](
                                          i[p] || "",
                                          n[p] || "",
                                          p,
                                          e
                                        )))
                            )
                              return m;
                          }
                          return i[e.columns].order - n[e.columns].order;
                        });
                    t.debug(e, "core") &&
                      console.log(
                        "Applying sort " + d.toString() + t.benchmark(n)
                      );
                  }
                },
                resortComplete: function (t, i) {
                  t.table.isUpdating &&
                    t.$table.triggerHandler("updateComplete", t.table),
                    e.isFunction(i) && i(t.table);
                },
                checkResort: function (i, n, s) {
                  var a = e.isArray(n) ? n : i.sortList;
                  !1 === (void 0 === n ? i.resort : n) ||
                  i.serverSideSorting ||
                  i.table.isProcessing
                    ? (t.resortComplete(i, s), t.applyWidget(i.table, !1))
                    : a.length
                    ? t.sortOn(
                        i,
                        a,
                        function () {
                          t.resortComplete(i, s);
                        },
                        !0
                      )
                    : t.sortReset(i, function () {
                        t.resortComplete(i, s), t.applyWidget(i.table, !1);
                      });
                },
                sortOn: function (i, n, s, a) {
                  var o,
                    r = i.table;
                  for (
                    i.$table.triggerHandler("sortStart", r), o = 0;
                    o < i.columns;
                    o++
                  )
                    i.sortVars[o].sortedBy =
                      -1 < t.isValueInArray(o, n) ? "sorton" : "";
                  t.updateHeaderSortCount(i, n),
                    t.setHeadersCss(i),
                    i.delayInit && t.isEmptyObject(i.cache) && t.buildCache(i),
                    i.$table.triggerHandler("sortBegin", r),
                    t.multisort(i),
                    t.appendCache(i, a),
                    i.$table.triggerHandler("sortBeforeEnd", r),
                    i.$table.triggerHandler("sortEnd", r),
                    t.applyWidget(r),
                    e.isFunction(s) && s(r);
                },
                sortReset: function (i, n) {
                  var s;
                  for (i.sortList = [], s = 0; s < i.columns; s++)
                    (i.sortVars[s].count = -1), (i.sortVars[s].sortedBy = "");
                  t.setHeadersCss(i),
                    t.multisort(i),
                    t.appendCache(i),
                    e.isFunction(n) && n(i.table);
                },
                getSortType: function (e, t) {
                  return (e && e[t] && e[t].type) || "";
                },
                getOrder: function (e) {
                  return /^d/i.test(e) || 1 === e;
                },
                sortNatural: function (e, i) {
                  if (e === i) return 0;
                  (e = (e || "").toString()), (i = (i || "").toString());
                  var n,
                    s,
                    a,
                    o,
                    r,
                    l,
                    c = t.regex;
                  if (c.hex.test(i)) {
                    if (
                      (n = parseInt(e.match(c.hex), 16)) <
                      (s = parseInt(i.match(c.hex), 16))
                    )
                      return -1;
                    if (s < n) return 1;
                  }
                  for (
                    n = e
                      .replace(c.chunk, "\\0$1\\0")
                      .replace(c.chunks, "")
                      .split("\\0"),
                      s = i
                        .replace(c.chunk, "\\0$1\\0")
                        .replace(c.chunks, "")
                        .split("\\0"),
                      l = Math.max(n.length, s.length),
                      r = 0;
                    r < l;
                    r++
                  ) {
                    if (
                      ((a = isNaN(n[r]) ? n[r] || 0 : parseFloat(n[r]) || 0),
                      (o = isNaN(s[r]) ? s[r] || 0 : parseFloat(s[r]) || 0),
                      isNaN(a) !== isNaN(o))
                    )
                      return isNaN(a) ? 1 : -1;
                    if ((typeof a != typeof o && ((a += ""), (o += "")), a < o))
                      return -1;
                    if (o < a) return 1;
                  }
                  return 0;
                },
                sortNaturalAsc: function (e, i, n, s) {
                  if (e === i) return 0;
                  var a = t.string[s.empties[n] || s.emptyTo];
                  return "" === e && 0 !== a
                    ? "boolean" == typeof a
                      ? a
                        ? -1
                        : 1
                      : -a || -1
                    : "" === i && 0 !== a
                    ? "boolean" == typeof a
                      ? a
                        ? 1
                        : -1
                      : a || 1
                    : t.sortNatural(e, i);
                },
                sortNaturalDesc: function (e, i, n, s) {
                  if (e === i) return 0;
                  var a = t.string[s.empties[n] || s.emptyTo];
                  return "" === e && 0 !== a
                    ? "boolean" == typeof a
                      ? a
                        ? -1
                        : 1
                      : a || 1
                    : "" === i && 0 !== a
                    ? "boolean" == typeof a
                      ? a
                        ? 1
                        : -1
                      : -a || -1
                    : t.sortNatural(i, e);
                },
                sortText: function (e, t) {
                  return t < e ? 1 : e < t ? -1 : 0;
                },
                getTextValue: function (e, t, i) {
                  if (i) {
                    var n,
                      s = e ? e.length : 0,
                      a = i + t;
                    for (n = 0; n < s; n++) a += e.charCodeAt(n);
                    return t * a;
                  }
                  return 0;
                },
                sortNumericAsc: function (e, i, n, s, a, o) {
                  if (e === i) return 0;
                  var r = t.string[o.empties[a] || o.emptyTo];
                  return "" === e && 0 !== r
                    ? "boolean" == typeof r
                      ? r
                        ? -1
                        : 1
                      : -r || -1
                    : "" === i && 0 !== r
                    ? "boolean" == typeof r
                      ? r
                        ? 1
                        : -1
                      : r || 1
                    : (isNaN(e) && (e = t.getTextValue(e, n, s)),
                      isNaN(i) && (i = t.getTextValue(i, n, s)),
                      e - i);
                },
                sortNumericDesc: function (e, i, n, s, a, o) {
                  if (e === i) return 0;
                  var r = t.string[o.empties[a] || o.emptyTo];
                  return "" === e && 0 !== r
                    ? "boolean" == typeof r
                      ? r
                        ? -1
                        : 1
                      : r || 1
                    : "" === i && 0 !== r
                    ? "boolean" == typeof r
                      ? r
                        ? 1
                        : -1
                      : -r || -1
                    : (isNaN(e) && (e = t.getTextValue(e, n, s)),
                      isNaN(i) && (i = t.getTextValue(i, n, s)),
                      i - e);
                },
                sortNumeric: function (e, t) {
                  return e - t;
                },
                addWidget: function (e) {
                  e.id &&
                    !t.isEmptyObject(t.getWidgetById(e.id)) &&
                    console.warn(
                      '"' + e.id + '" widget was loaded more than once!'
                    ),
                    (t.widgets[t.widgets.length] = e);
                },
                hasWidget: function (t, i) {
                  return (
                    ((t = e(t)).length &&
                      t[0].config &&
                      t[0].config.widgetInit[i]) ||
                    !1
                  );
                },
                getWidgetById: function (e) {
                  var i,
                    n,
                    s = t.widgets.length;
                  for (i = 0; i < s; i++)
                    if (
                      (n = t.widgets[i]) &&
                      n.id &&
                      n.id.toLowerCase() === e.toLowerCase()
                    )
                      return n;
                },
                applyWidgetOptions: function (i) {
                  var n,
                    s,
                    a,
                    o = i.config,
                    r = o.widgets.length;
                  if (r)
                    for (n = 0; n < r; n++)
                      (s = t.getWidgetById(o.widgets[n])) &&
                        s.options &&
                        ((a = e.extend(!0, {}, s.options)),
                        (o.widgetOptions = e.extend(!0, a, o.widgetOptions)),
                        e.extend(!0, t.defaults.widgetOptions, s.options));
                },
                addWidgetFromClass: function (e) {
                  var i,
                    n,
                    s = e.config,
                    a =
                      "^" +
                      s.widgetClass.replace(t.regex.templateName, "(\\S+)+") +
                      "$",
                    o = new RegExp(a, "g"),
                    r = (e.className || "").split(t.regex.spaces);
                  if (r.length)
                    for (i = r.length, n = 0; n < i; n++)
                      r[n].match(o) &&
                        (s.widgets[s.widgets.length] = r[n].replace(o, "$1"));
                },
                applyWidgetId: function (i, n, s) {
                  var a,
                    o,
                    r,
                    l = (i = e(i)[0]).config,
                    c = l.widgetOptions,
                    d = t.debug(l, "core"),
                    u = t.getWidgetById(n);
                  u &&
                    ((r = u.id),
                    (a = !1),
                    e.inArray(r, l.widgets) < 0 &&
                      (l.widgets[l.widgets.length] = r),
                    d && (o = new Date()),
                    (!s && l.widgetInit[r]) ||
                      ((l.widgetInit[r] = !0),
                      i.hasInitialized && t.applyWidgetOptions(i),
                      "function" == typeof u.init &&
                        ((a = !0),
                        d &&
                          console[console.group ? "group" : "log"](
                            "Initializing " + r + " widget"
                          ),
                        u.init(i, u, l, c))),
                    s ||
                      "function" != typeof u.format ||
                      ((a = !0),
                      d &&
                        console[console.group ? "group" : "log"](
                          "Updating " + r + " widget"
                        ),
                      u.format(i, l, c, !1)),
                    d &&
                      a &&
                      (console.log(
                        "Completed " +
                          (s ? "initializing " : "applying ") +
                          r +
                          " widget" +
                          t.benchmark(o)
                      ),
                      console.groupEnd && console.groupEnd()));
                },
                applyWidget: function (i, n, s) {
                  var a,
                    o,
                    r,
                    l,
                    c,
                    d = (i = e(i)[0]).config,
                    u = t.debug(d, "core"),
                    h = [];
                  if (
                    !1 === n ||
                    !i.hasInitialized ||
                    (!i.isApplyingWidgets && !i.isUpdating)
                  ) {
                    if (
                      (u && (c = new Date()),
                      t.addWidgetFromClass(i),
                      clearTimeout(d.timerReady),
                      d.widgets.length)
                    ) {
                      for (
                        i.isApplyingWidgets = !0,
                          d.widgets = e.grep(d.widgets, function (t, i) {
                            return e.inArray(t, d.widgets) === i;
                          }),
                          o = (r = d.widgets || []).length,
                          a = 0;
                        a < o;
                        a++
                      )
                        (l = t.getWidgetById(r[a])) && l.id
                          ? (l.priority || (l.priority = 10), (h[a] = l))
                          : u &&
                            console.warn(
                              '"' +
                                r[a] +
                                '" was enabled, but the widget code has not been loaded!'
                            );
                      for (
                        h.sort(function (e, t) {
                          return e.priority < t.priority
                            ? -1
                            : e.priority === t.priority
                            ? 0
                            : 1;
                        }),
                          o = h.length,
                          u &&
                            console[console.group ? "group" : "log"](
                              "Start " +
                                (n ? "initializing" : "applying") +
                                " widgets"
                            ),
                          a = 0;
                        a < o;
                        a++
                      )
                        (l = h[a]) && l.id && t.applyWidgetId(i, l.id, n);
                      u && console.groupEnd && console.groupEnd();
                    }
                    d.timerReady = setTimeout(function () {
                      (i.isApplyingWidgets = !1),
                        e.data(i, "lastWidgetApplication", new Date()),
                        d.$table.triggerHandler("tablesorter-ready"),
                        n || "function" != typeof s || s(i),
                        u &&
                          ((l = d.widgets.length),
                          console.log(
                            "Completed " +
                              (!0 === n ? "initializing " : "applying ") +
                              l +
                              " widget" +
                              (1 !== l ? "s" : "") +
                              t.benchmark(c)
                          ));
                    }, 10);
                  }
                },
                removeWidget: function (i, n, s) {
                  var a,
                    o,
                    r,
                    l,
                    c = (i = e(i)[0]).config;
                  if (!0 === n)
                    for (n = [], l = t.widgets.length, r = 0; r < l; r++)
                      (o = t.widgets[r]) && o.id && (n[n.length] = o.id);
                  else
                    n = (e.isArray(n) ? n.join(",") : n || "")
                      .toLowerCase()
                      .split(/[\s,]+/);
                  for (l = n.length, a = 0; a < l; a++)
                    (o = t.getWidgetById(n[a])),
                      0 <= (r = e.inArray(n[a], c.widgets)) &&
                        !0 !== s &&
                        c.widgets.splice(r, 1),
                      o &&
                        o.remove &&
                        (t.debug(c, "core") &&
                          console.log(
                            (s ? "Refreshing" : "Removing") +
                              ' "' +
                              n[a] +
                              '" widget'
                          ),
                        o.remove(i, c, c.widgetOptions, s),
                        (c.widgetInit[n[a]] = !1));
                  c.$table.triggerHandler("widgetRemoveEnd", i);
                },
                refreshWidgets: function (i, n, s) {
                  var a,
                    o,
                    r = (i = e(i)[0]).config.widgets,
                    l = t.widgets,
                    c = l.length,
                    d = [],
                    u = function (t) {
                      e(t).triggerHandler("refreshComplete");
                    };
                  for (a = 0; a < c; a++)
                    (o = l[a]) &&
                      o.id &&
                      (n || e.inArray(o.id, r) < 0) &&
                      (d[d.length] = o.id);
                  t.removeWidget(i, d.join(","), !0),
                    !0 !== s
                      ? (t.applyWidget(i, n || !1, u),
                        n && t.applyWidget(i, !1, u))
                      : u(i);
                },
                benchmark: function (e) {
                  return " (" + (new Date().getTime() - e.getTime()) + " ms)";
                },
                log: function () {
                  console.log(arguments);
                },
                debug: function (e, t) {
                  return (
                    e &&
                    (!0 === e.debug ||
                      ("string" == typeof e.debug && -1 < e.debug.indexOf(t)))
                  );
                },
                isEmptyObject: function (e) {
                  for (var t in e) return !1;
                  return !0;
                },
                isValueInArray: function (e, t) {
                  var i,
                    n = (t && t.length) || 0;
                  for (i = 0; i < n; i++) if (t[i][0] === e) return i;
                  return -1;
                },
                formatFloat: function (i, n) {
                  return "string" != typeof i || "" === i
                    ? i
                    : ((i = (
                        n && n.config
                          ? !1 !== n.config.usNumberFormat
                          : void 0 === n || n
                      )
                        ? i.replace(t.regex.comma, "")
                        : i
                            .replace(t.regex.digitNonUS, "")
                            .replace(t.regex.comma, ".")),
                      t.regex.digitNegativeTest.test(i) &&
                        (i = i.replace(t.regex.digitNegativeReplace, "-$1")),
                      (s = parseFloat(i)),
                      isNaN(s) ? e.trim(i) : s);
                  var s;
                },
                isDigit: function (e) {
                  return isNaN(e)
                    ? t.regex.digitTest.test(
                        e.toString().replace(t.regex.digitReplace, "")
                      )
                    : "" !== e;
                },
                computeColumnIndex: function (i, n) {
                  var s,
                    a,
                    o,
                    r,
                    l,
                    c,
                    d,
                    u,
                    h,
                    p,
                    f = (n && n.columns) || 0,
                    m = [],
                    g = new Array(f);
                  for (s = 0; s < i.length; s++)
                    for (c = i[s].cells, a = 0; a < c.length; a++) {
                      for (
                        d = s,
                          u = (l = c[a]).rowSpan || 1,
                          h = l.colSpan || 1,
                          void 0 === m[d] && (m[d] = []),
                          o = 0;
                        o < m[d].length + 1;
                        o++
                      )
                        if (void 0 === m[d][o]) {
                          p = o;
                          break;
                        }
                      for (
                        (f && l.cellIndex === p) ||
                          (l.setAttribute
                            ? l.setAttribute("data-column", p)
                            : e(l).attr("data-column", p)),
                          o = d;
                        o < d + u;
                        o++
                      )
                        for (
                          void 0 === m[o] && (m[o] = []), g = m[o], r = p;
                          r < p + h;
                          r++
                        )
                          g[r] = "x";
                    }
                  return t.checkColumnCount(i, m, g.length), g.length;
                },
                checkColumnCount: function (e, t, i) {
                  var n,
                    s,
                    a = !0,
                    o = [];
                  for (n = 0; n < t.length; n++)
                    if (t[n] && ((s = t[n].length), t[n].length !== i)) {
                      a = !1;
                      break;
                    }
                  a ||
                    (e.each(function (e, t) {
                      var i = t.parentElement.nodeName;
                      o.indexOf(i) < 0 && o.push(i);
                    }),
                    console.error(
                      "Invalid or incorrect number of columns in the " +
                        o.join(" or ") +
                        "; expected " +
                        i +
                        ", but found " +
                        s +
                        " columns"
                    ));
                },
                fixColumnWidth: function (i) {
                  var n,
                    s,
                    a,
                    o,
                    r,
                    l = (i = e(i)[0]).config,
                    c = l.$table.children("colgroup");
                  if (
                    (c.length && c.hasClass(t.css.colgroup) && c.remove(),
                    l.widthFixed && 0 === l.$table.children("colgroup").length)
                  ) {
                    for (
                      c = e('<colgroup class="' + t.css.colgroup + '">'),
                        n = l.$table.width(),
                        o = (a = l.$tbodies
                          .find("tr:first")
                          .children(":visible")).length,
                        r = 0;
                      r < o;
                      r++
                    )
                      (s =
                        parseInt((a.eq(r).width() / n) * 1e3, 10) / 10 + "%"),
                        c.append(e("<col>").css("width", s));
                    l.$table.prepend(c);
                  }
                },
                getData: function (t, i, n) {
                  var s,
                    a,
                    o = "",
                    r = e(t);
                  return r.length
                    ? ((s = !!e.metadata && r.metadata()),
                      (a = " " + (r.attr("class") || "")),
                      void 0 !== r.data(n) || void 0 !== r.data(n.toLowerCase())
                        ? (o += r.data(n) || r.data(n.toLowerCase()))
                        : s && void 0 !== s[n]
                        ? (o += s[n])
                        : i && void 0 !== i[n]
                        ? (o += i[n])
                        : " " !== a &&
                          a.match(" " + n + "-") &&
                          (o =
                            a.match(new RegExp("\\s" + n + "-([\\w-]+)"))[1] ||
                            ""),
                      e.trim(o))
                    : "";
                },
                getColumnData: function (t, i, n, s, a) {
                  if ("object" != typeof i || null === i) return i;
                  var o,
                    r = (t = e(t)[0]).config,
                    l = a || r.$headers,
                    c =
                      (r.$headerIndexed && r.$headerIndexed[n]) ||
                      l.find('[data-column="' + n + '"]:last');
                  if (void 0 !== i[n]) return s ? i[n] : i[l.index(c)];
                  for (o in i)
                    if (
                      "string" == typeof o &&
                      c.filter(o).add(c.find(o)).length
                    )
                      return i[o];
                },
                isProcessing: function (i, n, s) {
                  var a = (i = e(i))[0].config,
                    o = s || i.find("." + t.css.header);
                  n
                    ? (void 0 !== s &&
                        0 < a.sortList.length &&
                        (o = o.filter(function () {
                          return (
                            !this.sortDisabled &&
                            0 <=
                              t.isValueInArray(
                                parseFloat(e(this).attr("data-column")),
                                a.sortList
                              )
                          );
                        })),
                      i
                        .add(o)
                        .addClass(t.css.processing + " " + a.cssProcessing))
                    : i
                        .add(o)
                        .removeClass(t.css.processing + " " + a.cssProcessing);
                },
                processTbody: function (t, i, n) {
                  if (((t = e(t)[0]), n))
                    return (
                      (t.isProcessing = !0),
                      i.before('<colgroup class="tablesorter-savemyplace"/>'),
                      e.fn.detach ? i.detach() : i.remove()
                    );
                  var s = e(t).find("colgroup.tablesorter-savemyplace");
                  i.insertAfter(s), s.remove(), (t.isProcessing = !1);
                },
                clearTableBody: function (t) {
                  e(t)[0].config.$tbodies.children().detach();
                },
                characterEquivalents: {
                  a: "áàâãäąå",
                  A: "ÁÀÂÃÄĄÅ",
                  c: "çćč",
                  C: "ÇĆČ",
                  e: "éèêëěę",
                  E: "ÉÈÊËĚĘ",
                  i: "íìİîïı",
                  I: "ÍÌİÎÏ",
                  o: "óòôõöō",
                  O: "ÓÒÔÕÖŌ",
                  ss: "ß",
                  SS: "ẞ",
                  u: "úùûüů",
                  U: "ÚÙÛÜŮ",
                },
                replaceAccents: function (e) {
                  var i,
                    n = "[",
                    s = t.characterEquivalents;
                  if (!t.characterRegex) {
                    for (i in ((t.characterRegexArray = {}), s))
                      "string" == typeof i &&
                        ((n += s[i]),
                        (t.characterRegexArray[i] = new RegExp(
                          "[" + s[i] + "]",
                          "g"
                        )));
                    t.characterRegex = new RegExp(n + "]");
                  }
                  if (t.characterRegex.test(e))
                    for (i in s)
                      "string" == typeof i &&
                        (e = e.replace(t.characterRegexArray[i], i));
                  return e;
                },
                validateOptions: function (i) {
                  var n,
                    s,
                    a,
                    o,
                    r = "headers sortForce sortList sortAppend widgets".split(
                      " "
                    ),
                    l = i.originalSettings;
                  if (l) {
                    for (n in (t.debug(i, "core") && (o = new Date()), l))
                      if ("undefined" == (a = typeof t.defaults[n]))
                        console.warn(
                          'Tablesorter Warning! "table.config.' +
                            n +
                            '" option not recognized'
                        );
                      else if ("object" === a)
                        for (s in l[n])
                          (a = t.defaults[n] && typeof t.defaults[n][s]),
                            e.inArray(n, r) < 0 &&
                              "undefined" === a &&
                              console.warn(
                                'Tablesorter Warning! "table.config.' +
                                  n +
                                  "." +
                                  s +
                                  '" option not recognized'
                              );
                    t.debug(i, "core") &&
                      console.log("validate options time:" + t.benchmark(o));
                  }
                },
                restoreHeaders: function (i) {
                  var n,
                    s,
                    a = e(i)[0].config,
                    o = a.$table.find(a.selectorHeaders),
                    r = o.length;
                  for (n = 0; n < r; n++)
                    (s = o.eq(n)).find("." + t.css.headerIn).length &&
                      s.html(a.headerContent[n]);
                },
                destroy: function (i, n, s) {
                  if ((i = e(i)[0]).hasInitialized) {
                    t.removeWidget(i, !0, !1);
                    var a,
                      o = e(i),
                      r = i.config,
                      l = o.find("thead:first"),
                      c = l
                        .find("tr." + t.css.headerRow)
                        .removeClass(t.css.headerRow + " " + r.cssHeaderRow),
                      d = o.find("tfoot:first > tr").children("th, td");
                    !1 === n &&
                      0 <= e.inArray("uitheme", r.widgets) &&
                      (o.triggerHandler("applyWidgetId", ["uitheme"]),
                      o.triggerHandler("applyWidgetId", ["zebra"])),
                      l.find("tr").not(c).remove(),
                      (a =
                        "sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave " +
                        "keypress sortBegin sortEnd resetToLoadState "
                          .split(" ")
                          .join(r.namespace + " ")),
                      o
                        .removeData("tablesorter")
                        .unbind(a.replace(t.regex.spaces, " ")),
                      r.$headers
                        .add(d)
                        .removeClass(
                          [
                            t.css.header,
                            r.cssHeader,
                            r.cssAsc,
                            r.cssDesc,
                            t.css.sortAsc,
                            t.css.sortDesc,
                            t.css.sortNone,
                          ].join(" ")
                        )
                        .removeAttr("data-column")
                        .removeAttr("aria-label")
                        .attr("aria-disabled", "true"),
                      c.find(r.selectorSort).unbind(
                        "mousedown mouseup keypress "
                          .split(" ")
                          .join(r.namespace + " ")
                          .replace(t.regex.spaces, " ")
                      ),
                      t.restoreHeaders(i),
                      o.toggleClass(
                        t.css.table +
                          " " +
                          r.tableClass +
                          " tablesorter-" +
                          r.theme,
                        !1 === n
                      ),
                      o.removeClass(r.namespace.slice(1)),
                      (i.hasInitialized = !1),
                      delete i.config.cache,
                      "function" == typeof s && s(i),
                      t.debug(r, "core") &&
                        console.log("tablesorter has been removed");
                  }
                },
              });
              (e.fn.tablesorter = function (i) {
                return this.each(function () {
                  var n = e.extend(!0, {}, t.defaults, i, t.instanceMethods);
                  (n.originalSettings = i),
                    !this.hasInitialized &&
                    t.buildTable &&
                    "TABLE" !== this.nodeName
                      ? t.buildTable(this, n)
                      : t.setup(this, n);
                });
              }),
                (window.console && window.console.log) ||
                  ((t.logs = []),
                  (console = {}),
                  (console.log =
                    console.warn =
                    console.error =
                    console.table =
                      function () {
                        var e = 1 < arguments.length ? arguments : arguments[0];
                        t.logs[t.logs.length] = {
                          date: Date.now(),
                          log: e,
                        };
                      })),
                t.addParser({
                  id: "no-parser",
                  is: function () {
                    return !1;
                  },
                  format: function () {
                    return "";
                  },
                  type: "text",
                }),
                t.addParser({
                  id: "text",
                  is: function () {
                    return !0;
                  },
                  format: function (i, n) {
                    var s = n.config;
                    return (
                      i &&
                        ((i = e.trim(s.ignoreCase ? i.toLocaleLowerCase() : i)),
                        (i = s.sortLocaleCompare ? t.replaceAccents(i) : i)),
                      i
                    );
                  },
                  type: "text",
                }),
                (t.regex.nondigit = /[^\w,. \-()]/g),
                t.addParser({
                  id: "digit",
                  is: function (e) {
                    return t.isDigit(e);
                  },
                  format: function (i, n) {
                    var s = t.formatFloat(
                      (i || "").replace(t.regex.nondigit, ""),
                      n
                    );
                    return i && "number" == typeof s
                      ? s
                      : i
                      ? e.trim(
                          i && n.config.ignoreCase ? i.toLocaleLowerCase() : i
                        )
                      : i;
                  },
                  type: "numeric",
                }),
                (t.regex.currencyReplace = /[+\-,. ]/g),
                (t.regex.currencyTest =
                  /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/),
                t.addParser({
                  id: "currency",
                  is: function (e) {
                    return (
                      (e = (e || "").replace(t.regex.currencyReplace, "")),
                      t.regex.currencyTest.test(e)
                    );
                  },
                  format: function (i, n) {
                    var s = t.formatFloat(
                      (i || "").replace(t.regex.nondigit, ""),
                      n
                    );
                    return i && "number" == typeof s
                      ? s
                      : i
                      ? e.trim(
                          i && n.config.ignoreCase ? i.toLocaleLowerCase() : i
                        )
                      : i;
                  },
                  type: "numeric",
                }),
                (t.regex.urlProtocolTest = /^(https?|ftp|file):\/\//),
                (t.regex.urlProtocolReplace = /(https?|ftp|file):\/\/(www\.)?/),
                t.addParser({
                  id: "url",
                  is: function (e) {
                    return t.regex.urlProtocolTest.test(e);
                  },
                  format: function (i) {
                    return i
                      ? e.trim(i.replace(t.regex.urlProtocolReplace, ""))
                      : i;
                  },
                  type: "text",
                }),
                (t.regex.dash = /-/g),
                (t.regex.isoDate = /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/),
                t.addParser({
                  id: "isoDate",
                  is: function (e) {
                    return t.regex.isoDate.test(e);
                  },
                  format: function (e) {
                    var i = e ? new Date(e.replace(t.regex.dash, "/")) : e;
                    return i instanceof Date && isFinite(i) ? i.getTime() : e;
                  },
                  type: "numeric",
                }),
                (t.regex.percent = /%/g),
                (t.regex.percentTest = /(\d\s*?%|%\s*?\d)/),
                t.addParser({
                  id: "percent",
                  is: function (e) {
                    return t.regex.percentTest.test(e) && e.length < 15;
                  },
                  format: function (e, i) {
                    return e
                      ? t.formatFloat(e.replace(t.regex.percent, ""), i)
                      : e;
                  },
                  type: "numeric",
                }),
                t.addParser({
                  id: "image",
                  is: function (e, t, i, n) {
                    return 0 < n.find("img").length;
                  },
                  format: function (t, i, n) {
                    return (
                      e(n)
                        .find("img")
                        .attr(i.config.imgAttr || "alt") || t
                    );
                  },
                  parsed: !0,
                  type: "text",
                }),
                (t.regex.dateReplace = /(\S)([AP]M)$/i),
                (t.regex.usLongDateTest1 =
                  /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i),
                (t.regex.usLongDateTest2 = /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i),
                t.addParser({
                  id: "usLongDate",
                  is: function (e) {
                    return (
                      t.regex.usLongDateTest1.test(e) ||
                      t.regex.usLongDateTest2.test(e)
                    );
                  },
                  format: function (e) {
                    var i = e
                      ? new Date(e.replace(t.regex.dateReplace, "$1 $2"))
                      : e;
                    return i instanceof Date && isFinite(i) ? i.getTime() : e;
                  },
                  type: "numeric",
                }),
                (t.regex.shortDateTest =
                  /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/),
                (t.regex.shortDateReplace = /[\-.,]/g),
                (t.regex.shortDateXXY =
                  /(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/),
                (t.regex.shortDateYMD =
                  /(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/),
                (t.convertFormat = function (e, i) {
                  (e = (e || "")
                    .replace(t.regex.spaces, " ")
                    .replace(t.regex.shortDateReplace, "/")),
                    "mmddyyyy" === i
                      ? (e = e.replace(t.regex.shortDateXXY, "$3/$1/$2"))
                      : "ddmmyyyy" === i
                      ? (e = e.replace(t.regex.shortDateXXY, "$3/$2/$1"))
                      : "yyyymmdd" === i &&
                        (e = e.replace(t.regex.shortDateYMD, "$1/$2/$3"));
                  var n = new Date(e);
                  return n instanceof Date && isFinite(n) ? n.getTime() : "";
                }),
                t.addParser({
                  id: "shortDate",
                  is: function (e) {
                    return (
                      (e = (e || "")
                        .replace(t.regex.spaces, " ")
                        .replace(t.regex.shortDateReplace, "/")),
                      t.regex.shortDateTest.test(e)
                    );
                  },
                  format: function (e, i, n, s) {
                    if (e) {
                      var a = i.config,
                        o = a.$headerIndexed[s],
                        r =
                          (o.length && o.data("dateFormat")) ||
                          t.getData(
                            o,
                            t.getColumnData(i, a.headers, s),
                            "dateFormat"
                          ) ||
                          a.dateFormat;
                      return (
                        o.length && o.data("dateFormat", r),
                        t.convertFormat(e, r) || e
                      );
                    }
                    return e;
                  },
                  type: "numeric",
                }),
                (t.regex.timeTest =
                  /^(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i),
                (t.regex.timeMatch =
                  /(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i),
                t.addParser({
                  id: "time",
                  is: function (e) {
                    return t.regex.timeTest.test(e);
                  },
                  format: function (e) {
                    var i = (e || "").match(t.regex.timeMatch),
                      n = new Date(e),
                      s = e && (null !== i ? i[0] : "00:00 AM"),
                      a = s
                        ? new Date(
                            "2000/01/01 " +
                              s.replace(t.regex.dateReplace, "$1 $2")
                          )
                        : s;
                    return a instanceof Date && isFinite(a)
                      ? n instanceof Date && isFinite(n) && n.getTime()
                        ? parseFloat(a.getTime() + "." + n.getTime())
                        : a.getTime()
                      : e;
                  },
                  type: "numeric",
                }),
                t.addParser({
                  id: "metadata",
                  is: function () {
                    return !1;
                  },
                  format: function (t, i, n) {
                    var s = i.config,
                      a = s.parserMetadataName
                        ? s.parserMetadataName
                        : "sortValue";
                    return e(n).metadata()[a];
                  },
                  type: "numeric",
                }),
                t.addWidget({
                  id: "zebra",
                  priority: 90,
                  format: function (t, i, n) {
                    var s,
                      a,
                      o,
                      r,
                      l,
                      c,
                      d,
                      u = new RegExp(i.cssChildRow, "i"),
                      h = i.$tbodies.add(
                        e(i.namespace + "_extra_table").children(
                          "tbody:not(." + i.cssInfoBlock + ")"
                        )
                      );
                    for (l = 0; l < h.length; l++)
                      for (
                        o = 0,
                          d = (s = h
                            .eq(l)
                            .children("tr:visible")
                            .not(i.selectorRemove)).length,
                          c = 0;
                        c < d;
                        c++
                      )
                        (a = s.eq(c)),
                          u.test(a[0].className) || o++,
                          (r = o % 2 == 0),
                          a
                            .removeClass(n.zebra[r ? 1 : 0])
                            .addClass(n.zebra[r ? 0 : 1]);
                  },
                  remove: function (e, i, n, s) {
                    if (!s) {
                      var a,
                        o,
                        r = i.$tbodies,
                        l = (n.zebra || ["even", "odd"]).join(" ");
                      for (a = 0; a < r.length; a++)
                        (o = t.processTbody(e, r.eq(a), !0))
                          .children()
                          .removeClass(l),
                          t.processTbody(e, o, !1);
                    }
                  },
                });
            })(e),
            e.tablesorter
          );
        }),
        void 0 === (a = "function" == typeof n ? n.apply(t, s) : n) ||
          (e.exports = a);
    },
    482818: function (e, t, i) {
      var n,
        s = i(619755);
      ((n = function (e, t) {
        function i() {
          var e, t;
          (this.q = []),
            (this.add = function (e) {
              this.q.push(e);
            }),
            (this.call = function () {
              for (e = 0, t = this.q.length; e < t; e++) this.q[e].call();
            });
        }
        function a(e, t) {
          if (e.resizedAttached) {
            if (e.resizedAttached) return void e.resizedAttached.add(t);
          } else (e.resizedAttached = new i()), e.resizedAttached.add(t);
          (e.resizeSensor = document.createElement("div")),
            (e.resizeSensor.className = "resize-sensor");
          var n =
              "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
            s = "position: absolute; left: 0; top: 0; transition: 0s;";
          (e.resizeSensor.style.cssText = n),
            (e.resizeSensor.innerHTML =
              '<div class="resize-sensor-expand" style="' +
              n +
              '"><div style="' +
              s +
              '"></div></div><div class="resize-sensor-shrink" style="' +
              n +
              '"><div style="' +
              s +
              ' width: 200%; height: 200%"></div></div>'),
            e.appendChild(e.resizeSensor),
            {
              fixed: 1,
              absolute: 1,
            }[
              (function (e, t) {
                return e.currentStyle
                  ? e.currentStyle[t]
                  : window.getComputedStyle
                  ? window.getComputedStyle(e, null).getPropertyValue(t)
                  : e.style[t];
              })(e, "position")
            ] || (e.style.position = "relative");
          var a,
            o,
            r = e.resizeSensor.childNodes[0],
            l = r.childNodes[0],
            c = e.resizeSensor.childNodes[1],
            d =
              (c.childNodes[0],
              function () {
                (l.style.width = r.offsetWidth + 10 + "px"),
                  (l.style.height = r.offsetHeight + 10 + "px"),
                  (r.scrollLeft = r.scrollWidth),
                  (r.scrollTop = r.scrollHeight),
                  (c.scrollLeft = c.scrollWidth),
                  (c.scrollTop = c.scrollHeight),
                  (a = e.offsetWidth),
                  (o = e.offsetHeight);
              });
          d();
          var u = function (e, t, i) {
              e.attachEvent
                ? e.attachEvent("on" + t, i)
                : e.addEventListener(t, i);
            },
            h = function () {
              (e.offsetWidth == a && e.offsetHeight == o) ||
                (e.resizedAttached && e.resizedAttached.call()),
                d();
            };
          u(r, "scroll", h), u(c, "scroll", h);
        }
        var o = Object.prototype.toString.call(e),
          r =
            "[object Array]" === o ||
            "[object NodeList]" === o ||
            "[object HTMLCollection]" === o ||
            (void 0 !== s && e instanceof s) ||
            ("undefined" != typeof Elements && e instanceof Elements);
        if (r) for (var l = 0, c = e.length; l < c; l++) a(e[l], t);
        else a(e, t);
        this.detach = function () {
          if (r) for (var t = 0, i = e.length; t < i; t++) n.detach(e[t]);
          else n.detach(e);
        };
      }).detach = function (e) {
        e.resizeSensor &&
          (e.removeChild(e.resizeSensor),
          delete e.resizeSensor,
          delete e.resizedAttached);
      }),
        void 0 !== e.exports ? (e.exports = n) : (window.ResizeSensor = n);
    },
    531586: function (e, t, i) {
      var n,
        s = i(619755);
      (n = s).fn.theiaStickySidebar = function (e) {
        function t(e, t) {
          return (
            !0 === e.initialized ||
            (!(n("body").width() < e.minWidth) &&
              ((function (e, t) {
                e.initialized = !0;
                var s = n("#theia-sticky-sidebar-stylesheet-" + e.namespace);
                0 === s.length &&
                  n("head").append(
                    n(
                      '<style id="theia-sticky-sidebar-stylesheet-' +
                        e.namespace +
                        '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
                    )
                  ),
                  t.each(function () {
                    function t() {
                      (a.fixedScrollTop = 0),
                        a.sidebar.css({
                          "min-height": "1px",
                        }),
                        a.stickySidebar.css({
                          position: "static",
                          width: "",
                          transform: "none",
                        });
                    }
                    function s(e) {
                      var t = e.height();
                      return (
                        e.children().each(function () {
                          t = Math.max(t, n(this).height());
                        }),
                        t
                      );
                    }
                    var a = {};
                    if (
                      ((a.sidebar = n(this)),
                      (a.options = e || {}),
                      (a.container = n(a.options.containerSelector)),
                      0 == a.container.length &&
                        (a.container = a.sidebar.parent()),
                      a.sidebar.parents().css("-webkit-transform", "none"),
                      a.sidebar.css({
                        position: a.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box",
                      }),
                      (a.stickySidebar = a.sidebar.find(".theiaStickySidebar")),
                      0 == a.stickySidebar.length)
                    ) {
                      var o =
                        /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                      a.sidebar
                        .find("script")
                        .filter(function (e, t) {
                          return 0 === t.type.length || t.type.match(o);
                        })
                        .remove(),
                        (a.stickySidebar = n("<div>")
                          .addClass("theiaStickySidebar")
                          .append(a.sidebar.children())),
                        a.sidebar.append(a.stickySidebar);
                    }
                    (a.marginBottom = parseInt(a.sidebar.css("margin-bottom"))),
                      (a.paddingTop = parseInt(a.sidebar.css("padding-top"))),
                      (a.paddingBottom = parseInt(
                        a.sidebar.css("padding-bottom")
                      ));
                    var r = a.stickySidebar.offset().top,
                      l = a.stickySidebar.outerHeight();
                    a.stickySidebar.css("padding-top", 1),
                      a.stickySidebar.css("padding-bottom", 1),
                      (r -= a.stickySidebar.offset().top),
                      (l = a.stickySidebar.outerHeight() - l - r),
                      0 == r
                        ? (a.stickySidebar.css("padding-top", 0),
                          (a.stickySidebarPaddingTop = 0))
                        : (a.stickySidebarPaddingTop = 1),
                      0 == l
                        ? (a.stickySidebar.css("padding-bottom", 0),
                          (a.stickySidebarPaddingBottom = 0))
                        : (a.stickySidebarPaddingBottom = 1),
                      (a.previousScrollTop = null),
                      (a.fixedScrollTop = 0),
                      t(),
                      (a.onScroll = function (a) {
                        if (a.stickySidebar.is(":visible")) {
                          if (n("body").width() < a.options.minWidth)
                            return void t();
                          if (
                            a.options.disableOnResponsiveLayouts &&
                            a.sidebar.outerWidth(
                              "none" == a.sidebar.css("float")
                            ) +
                              50 >
                              a.container.width()
                          )
                            return void t();
                          var o = n(document).scrollTop(),
                            r = "static";
                          if (
                            o >=
                            a.sidebar.offset().top +
                              (a.paddingTop - a.options.additionalMarginTop)
                          ) {
                            var l,
                              c = a.paddingTop + e.additionalMarginTop,
                              d =
                                a.paddingBottom +
                                a.marginBottom +
                                e.additionalMarginBottom,
                              u = a.sidebar.offset().top,
                              h = a.sidebar.offset().top + s(a.container),
                              p = 0 + e.additionalMarginTop;
                            l =
                              a.stickySidebar.outerHeight() + c + d <
                              n(window).height()
                                ? p + a.stickySidebar.outerHeight()
                                : n(window).height() -
                                  a.marginBottom -
                                  a.paddingBottom -
                                  e.additionalMarginBottom;
                            var f = u - o + a.paddingTop,
                              m = h - o - a.paddingBottom - a.marginBottom,
                              g = a.stickySidebar.offset().top - o,
                              v = a.previousScrollTop - o;
                            "fixed" == a.stickySidebar.css("position") &&
                              "modern" == a.options.sidebarBehavior &&
                              (g += v),
                              "stick-to-top" == a.options.sidebarBehavior &&
                                (g = e.additionalMarginTop),
                              "stick-to-bottom" == a.options.sidebarBehavior &&
                                (g = l - a.stickySidebar.outerHeight()),
                              (g =
                                v > 0
                                  ? Math.min(g, p)
                                  : Math.max(
                                      g,
                                      l - a.stickySidebar.outerHeight()
                                    )),
                              (g = Math.max(g, f)),
                              (g = Math.min(
                                g,
                                m - a.stickySidebar.outerHeight()
                              ));
                            var _ =
                              a.container.height() ==
                              a.stickySidebar.outerHeight();
                            r =
                              (!_ && g == p) ||
                              (!_ && g == l - a.stickySidebar.outerHeight())
                                ? "fixed"
                                : o +
                                    g -
                                    a.sidebar.offset().top -
                                    a.paddingTop <=
                                  e.additionalMarginTop
                                ? "static"
                                : "absolute";
                          }
                          if ("fixed" == r) {
                            var y = n(document).scrollLeft();
                            a.stickySidebar.css({
                              position: "fixed",
                              width: i(a.stickySidebar) + "px",
                              transform: "translateY(" + g + "px)",
                              left:
                                a.sidebar.offset().left +
                                parseInt(a.sidebar.css("padding-left")) -
                                y +
                                "px",
                              top: "0px",
                            });
                          } else if ("absolute" == r) {
                            var b = {};
                            "absolute" != a.stickySidebar.css("position") &&
                              ((b.position = "absolute"),
                              (b.transform =
                                "translateY(" +
                                (o +
                                  g -
                                  a.sidebar.offset().top -
                                  a.stickySidebarPaddingTop -
                                  a.stickySidebarPaddingBottom) +
                                "px)"),
                              (b.top = "0px")),
                              (b.width = i(a.stickySidebar) + "px"),
                              (b.left = ""),
                              a.stickySidebar.css(b);
                          } else "static" == r && t();
                          "static" != r &&
                            1 == a.options.updateSidebarHeight &&
                            a.sidebar.css({
                              "min-height":
                                a.stickySidebar.outerHeight() +
                                a.stickySidebar.offset().top -
                                a.sidebar.offset().top +
                                a.paddingBottom,
                            }),
                            (a.previousScrollTop = o);
                        }
                      }),
                      a.onScroll(a),
                      n(document).on(
                        "scroll." + a.options.namespace,
                        (function (e) {
                          return function () {
                            e.onScroll(e);
                          };
                        })(a)
                      ),
                      n(window).on(
                        "resize." + a.options.namespace,
                        (function (e) {
                          return function () {
                            e.stickySidebar.css({
                              position: "static",
                            }),
                              e.onScroll(e);
                          };
                        })(a)
                      ),
                      "undefined" != typeof ResizeSensor &&
                        new ResizeSensor(
                          a.stickySidebar[0],
                          (function (e) {
                            return function () {
                              e.onScroll(e);
                            };
                          })(a)
                        );
                  });
              })(e, t),
              !0))
          );
        }
        function i(e) {
          var t;
          try {
            t = e[0].getBoundingClientRect().width;
          } catch (e) {}
          return void 0 === t && (t = e.width()), t;
        }
        return (
          ((e = n.extend(
            {
              containerSelector: "",
              additionalMarginTop: 0,
              additionalMarginBottom: 0,
              updateSidebarHeight: !0,
              minWidth: 0,
              disableOnResponsiveLayouts: !0,
              sidebarBehavior: "modern",
              defaultPosition: "relative",
              namespace: "TSS",
            },
            e
          )).additionalMarginTop = parseInt(e.additionalMarginTop) || 0),
          (e.additionalMarginBottom = parseInt(e.additionalMarginBottom) || 0),
          (function (e, i) {
            t(e, i) ||
              (console.log(
                "TSS: Body width smaller than options.minWidth. Init is delayed."
              ),
              n(document).on(
                "scroll." + e.namespace,
                (function (e, i) {
                  return function (s) {
                    t(e, i) && n(this).unbind(s);
                  };
                })(e, i)
              ),
              n(window).on(
                "resize." + e.namespace,
                (function (e, i) {
                  return function (s) {
                    t(e, i) && n(this).unbind(s);
                  };
                })(e, i)
              ));
          })(e, this),
          this
        );
      };
    },
    384463: function (e, t, i) {
      "use strict";
      function n(e) {
        var t,
          i,
          n,
          a,
          o,
          r,
          l = Object.create(null);
        if (((this[d] = l), e))
          if ("string" == typeof e)
            for (
              "?" === e.charAt(0) && (e = e.slice(1)),
                o = 0,
                r = (a = e.split("&")).length;
              o < r;
              o++
            )
              -1 < (t = (n = a[o]).indexOf("="))
                ? h(l, p(n.slice(0, t)), p(n.slice(t + 1)))
                : n.length && h(l, p(n), "");
          else if (s(e))
            for (o = 0, r = e.length; o < r; o++) h(l, (n = e[o])[0], n[1]);
          else if (e.forEach) e.forEach(u, l);
          else for (i in e) h(l, i, e[i]);
      }
      var s = Array.isArray,
        a = n.prototype,
        o = /[!'\(\)~]|%20|%00/g,
        r = /\+/g,
        l = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        },
        c = function (e) {
          return l[e];
        },
        d = "__URLSearchParams__:" + Math.random();
      function u(e, t) {
        h(this, t, e);
      }
      function h(e, t, i) {
        var n = s(i) ? i.join(",") : i;
        t in e ? e[t].push(n) : (e[t] = [n]);
      }
      function p(e) {
        return decodeURIComponent(e.replace(r, " "));
      }
      function f(e) {
        return encodeURIComponent(e).replace(o, c);
      }
      (a.append = function (e, t) {
        h(this[d], e, t);
      }),
        (a.delete = function (e) {
          delete this[d][e];
        }),
        (a.get = function (e) {
          var t = this[d];
          return e in t ? t[e][0] : null;
        }),
        (a.getAll = function (e) {
          var t = this[d];
          return e in t ? t[e].slice(0) : [];
        }),
        (a.has = function (e) {
          return e in this[d];
        }),
        (a.set = function (e, t) {
          this[d][e] = ["" + t];
        }),
        (a.forEach = function (e, t) {
          var i = this[d];
          Object.getOwnPropertyNames(i).forEach(function (n) {
            i[n].forEach(function (i) {
              e.call(t, i, n, this);
            }, this);
          }, this);
        }),
        (a.toJSON = function () {
          return {};
        }),
        (a.toString = function () {
          var e,
            t,
            i,
            n,
            s = this[d],
            a = [];
          for (t in s)
            for (i = f(t), e = 0, n = s[t]; e < n.length; e++)
              a.push(i + "=" + f(n[e]));
          return a.join("&");
        }),
        (function (e) {
          var t = (function () {
            try {
              return !!Symbol.iterator;
            } catch (e) {
              return !1;
            }
          })();
          "forEach" in e ||
            (e.forEach = function (e, t) {
              var i = Object.create(null);
              this.toString()
                .replace(/=[\s\S]*?(?:&|$)/g, "=")
                .split("=")
                .forEach(function (n) {
                  n.length &&
                    !(n in i) &&
                    (i[n] = this.getAll(n)).forEach(function (i) {
                      e.call(t, i, n, this);
                    }, this);
                }, this);
            }),
            "keys" in e ||
              (e.keys = function () {
                var e = [];
                this.forEach(function (t, i) {
                  e.push(i);
                });
                var i = {
                  next: function () {
                    var t = e.shift();
                    return {
                      done: void 0 === t,
                      value: t,
                    };
                  },
                };
                return (
                  t &&
                    (i[Symbol.iterator] = function () {
                      return i;
                    }),
                  i
                );
              }),
            "values" in e ||
              (e.values = function () {
                var e = [];
                this.forEach(function (t) {
                  e.push(t);
                });
                var i = {
                  next: function () {
                    var t = e.shift();
                    return {
                      done: void 0 === t,
                      value: t,
                    };
                  },
                };
                return (
                  t &&
                    (i[Symbol.iterator] = function () {
                      return i;
                    }),
                  i
                );
              }),
            "entries" in e ||
              (e.entries = function () {
                var e = [];
                this.forEach(function (t, i) {
                  e.push([i, t]);
                });
                var i = {
                  next: function () {
                    var t = e.shift();
                    return {
                      done: void 0 === t,
                      value: t,
                    };
                  },
                };
                return (
                  t &&
                    (i[Symbol.iterator] = function () {
                      return i;
                    }),
                  i
                );
              }),
            t && !(Symbol.iterator in e) && (e[Symbol.iterator] = e.entries),
            "sort" in e ||
              (e.sort = function () {
                for (
                  var e,
                    t,
                    i,
                    n = this.entries(),
                    s = n.next(),
                    a = s.done,
                    o = [],
                    r = Object.create(null);
                  !a;

                )
                  (t = (i = s.value)[0]),
                    o.push(t),
                    t in r || (r[t] = []),
                    r[t].push(i[1]),
                    (a = (s = n.next()).done);
                for (o.sort(), e = 0; e < o.length; e++) this.delete(o[e]);
                for (e = 0; e < o.length; e++)
                  (t = o[e]), this.append(t, r[t].shift());
              });
        })((n = e.exports = i.g.URLSearchParams || n).prototype);
    },
    766621: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"jquery.maskedinput","version":"1.4.1","author":"Josh Bush (digitalbush.com)","description":"jQuery Masked Input Plugin","devDependencies":{"grunt":"0.4.x","grunt-contrib-jasmine":"0.5.x","grunt-contrib-uglify":"0.2.x","grunt-contrib-watch":"0.5.x","grunt-nuget":"^0.1.4"},"scripts":{"test":"grunt test"},"main":"gruntfile.js","repository":{"type":"git","url":"git+https://github.com/excellalabs/jquery.maskedinput.git"},"keywords":["jQuery","Masked","Input","Plugin"],"license":"MIT","bugs":{"url":"https://github.com/excellalabs/jquery.maskedinput/issues"},"homepage":"https://github.com/excellalabs/jquery.maskedinput#readme"}'
      );
    },
  },
]);
