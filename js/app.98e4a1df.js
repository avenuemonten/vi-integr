/*! For license information please see app.98e4a1df.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [2143, 3965, 7206],
  {
    840479: function (e, t, s) {
      "use strict";
      var o = s(60643),
        n = s.n(o);
      s(182575);
      s(87688), s(760191), s(177754), s(369894);
      var a = s(619755);
      (window.$ = a),
        s(837892),
        (window.Blitzsc = s(133204)),
        (window.mustache = s(500466)),
        s(239390),
        s(43734),
        s(340686),
        s(611339),
        s(928981),
        s(129154),
        s(250450),
        s(381232),
        s(787388),
        s(785003),
        s(288249),
        s(482818),
        s(531586),
        s(902549),
        s(605510),
        s(616231),
        s(418633),
        s(401047),
        s(281545),
        s(858566),
        s(127307),
        s(109186),
        s(115986),
        s(84641),
        s(795579),
        s(908215),
        s(996960),
        s(593571),
        s(519670),
        s(468581),
        s(484414),
        s(384463);
      var i = s(324974);
      window.enquire = i;
      var r = s(625805);
      (window.Routing = n()),
        n().setRoutingData(r),
        (window.ajxq = []),
        (window.companyFiles = []);
    },
    593571: function (e, t, s) {
      var o = s(619755),
        n = s(619755);
      !(function (e) {
        e.fn.successStoriesSlider = function (t) {
          var s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            o = e(this),
            n = "boolean" == typeof t.mainPage && t.mainPage,
            a =
              void 0 !== t.titleText
                ? t.titleText
                : 'Узнайте, какими проектами поддержки <div class="d-none d-md-block"></div> <span class="text_lin">уже воспользовались</span> участники МИК',
            i = "boolean" == typeof t.hideTitle && t.hideTitle,
            r = "number" == typeof t.timeCache ? t.timeCache : 3600,
            l = e('[data-attrclass=".indexFiz"].active').length > 0;
          r *= 1e3;
          var c = {
              titleTemplate:
                '<div class="main-cont-title main-cont-title-md"><h2>{{{titleText}}}</h2><div class="dt_right"><a href="/story" class="a_ico a_ico_wh fw500 nowrap">Смотреть все проекты</a></div></div>',
              itemSliderTemplate:
                '<div><div class="pl_img pl_img_js"><div class="div_img" style="background-image: url({{photo}});">{{#category}}<div class="div_tag"><div class="tag_oval">{{category}}</div></div>{{/category}}</div><h3 class="div_tit">{{companyName}}</h3><div class="div_num"><div class="sp1">{{sumContract}}</div><div class="sp2">{{sumCost}}</div></div><div class="div_num_text">{{result}}</div><div class="div_hover"><div class="div_tit h3fs">{{companyName}}</div><div class="div_text h3fs">{{measureSupportRecieved}}</div><div class="div_btn"><a href="{{linkStory}}" class="a_ico">Подробнее</a></div><div class="div_num"><div class="sp1">{{sumContract}}</div><div class="sp2">{{sumCost}}</div></div><div class="div_num_text">{{result}}</div></div></div></div>',
              sliderTemplate:
                '<div class="succesStoriesSlider_js slide2_js slide2 slide_shadow2 slide2_arrows">{{{items}}}</div>',
            },
            u = d({
              method: "get",
              phyz: l,
            });
          function d(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : void 0,
              s = e.method,
              o = e.phyz ? "fl" : "ul";
            if ("get" == s) {
              var a = JSON.parse(
                localStorage.getItem("successStoriesSliderData_" + n + o)
              );
              return null == a || Date.now() - a.date > r ? null : a.data;
            }
            if ("set" == s && null != t)
              return (
                localStorage.setItem(
                  "successStoriesSliderData_" + n,
                  JSON.stringify({
                    data: t,
                    date: Date.now(),
                  })
                ),
                t
              );
          }
          function h() {
            var t,
              n = "",
              r = "";
            (t = i
              ? ""
              : mustache.render(c.titleTemplate, {
                  titleText: a,
                })),
              e.each(u, function (e, t) {
                n += mustache.render(c.itemSliderTemplate, {
                  photo: t.photo,
                  companyName: t.companyName,
                  result: t.result,
                  sumContract: t.sumContract,
                  sumCost: t.sumCost,
                  measureSupportRecieved: t.measureSupportRecieved,
                  linkStory:
                    null !== t.slug
                      ? Routing.generate("getSuccessStory", {
                          url: t.slug,
                        })
                      : Routing.generate("getSuccessStory", {
                          url: "project" + t.id,
                        }),
                  category: t.category,
                });
              }),
              n &&
                ((r = mustache.render(c.sliderTemplate, {
                  items: n,
                })),
                o.html(t + r),
                window.innerWidth > 991
                  ? (function (e, t) {
                      var s = document.querySelector(e);
                      s.classList.add("successStoriesSlider");
                      var o = s.querySelectorAll(t),
                        n = document.createElement("div"),
                        a = document.createElement("div");
                      a.classList.add("slide_scroll_wrapper"),
                        n.append(a),
                        s.append(n),
                        o.forEach(function (e) {
                          a.appendChild(e);
                        }),
                        a.after(a.cloneNode(!0));
                      var i =
                        (6 *
                          (o = s.querySelectorAll(
                            ".slide_scroll_wrapper > div"
                          )).length) /
                        2;
                      n
                        .querySelectorAll(".slide_scroll_wrapper")
                        .forEach(function (e) {
                          console.log(i + "s"),
                            (e.style["animation-duration"] = i + "s");
                        }),
                        m(3, o),
                        window.addEventListener("resize", function () {
                          window.innerWidth < 768
                            ? m(1, o)
                            : window.innerWidth < 992
                            ? m(2, o)
                            : m(3, o);
                        });
                    })(
                      ".succesStoriesSlider_js",
                      ".succesStoriesSlider_js > div"
                    )
                  : e(".succesStoriesSlider_js").slick({
                      dots: !1,
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: !0,
                      autoplay: 2e3,
                      autoplaySpeed: 4e3,
                      touchThreshold: 75,
                      prevArrow:
                        '<button type="button" class="slick-prev"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_before"></use></svg></button>',
                      nextArrow:
                        '<button type="button" class="slick-next"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_next"></use></svg></button>',
                      arrows: !0,
                      responsive: [
                        {
                          breakpoint: 991,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: !0,
                            arrows: !1,
                            autoplay: !0,
                            speed: 1e3,
                            autoplaySpeed: 5e3,
                            infinite: !0,
                            cssEase: "ease",
                          },
                        },
                        {
                          breakpoint: 767,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: !1,
                            dots: !0,
                            arrows: !1,
                            autoplay: !0,
                            speed: 1e3,
                            autoplaySpeed: 5e3,
                            infinite: !0,
                            cssEase: "ease",
                          },
                        },
                      ],
                    })),
              "function" == typeof s && s.call(this);
          }
          function m(e, t) {
            var s =
              document.querySelector(".succesStoriesSlider_js").offsetWidth / e;
            t.forEach(function (e) {
              e.style.width = s + "px";
            });
          }
          null == u
            ? e
                .ajax({
                  method: "GET",
                  global: !0,
                  url: Routing.generate("successStorySliderData"),
                  data: {
                    mainPage: n,
                    phyz: l,
                  },
                  dataType: "json",
                })
                .done(function (e) {
                  (u = d(
                    {
                      method: "set",
                    },
                    e
                  )),
                    h();
                })
            : h();
        };
      })(o),
        n(document).ready(function () {
          n(document).on(
            "click",
            '[data-attrclass=".indexFiz"], [data-attrclass=".indexUr"]',
            function () {
              n("#successStoriesSliderContainer").successStoriesSlider({
                mainPage: !0,
              });
            }
          );
        });
    },
    671942: function (e, t, s) {
      var o, n, a, i;
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      (e = s.nmd(e)),
        (i = function () {
          return (function () {
            "use strict";
            var e = {
                d: function (t, s) {
                  for (var o in s)
                    e.o(s, o) &&
                      !e.o(t, o) &&
                      Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: s[o],
                      });
                },
                o: function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                },
              },
              t = {};
            e.d(t, {
              default: function () {
                return me;
              },
            });
            var s = "days",
              o = "months",
              n = "years",
              a = "changeViewDate",
              i = "changeCurrentView",
              l = "changeFocusDate",
              c = "changeSelectedDate",
              u = "changeTime",
              d = "changeLastSelectedDate",
              h = "selectDate",
              m = "unselectDate",
              f = {
                classes: "",
                inline: !1,
                locale: {
                  days: [
                    "Воскресенье",
                    "Понедельник",
                    "Вторник",
                    "Среда",
                    "Четверг",
                    "Пятница",
                    "Суббота",
                  ],
                  daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
                  daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                  months: [
                    "Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь",
                  ],
                  monthsShort: [
                    "Янв",
                    "Фев",
                    "Мар",
                    "Апр",
                    "Май",
                    "Июн",
                    "Июл",
                    "Авг",
                    "Сен",
                    "Окт",
                    "Ноя",
                    "Дек",
                  ],
                  today: "Сегодня",
                  clear: "Очистить",
                  dateFormat: "dd.MM.yyyy",
                  timeFormat: "HH:mm",
                  firstDay: 1,
                },
                startDate: new Date(),
                firstDay: "",
                weekends: [6, 0],
                dateFormat: "",
                altField: "",
                altFieldDateFormat: "T",
                toggleSelected: !0,
                keyboardNav: !0,
                selectedDates: !1,
                container: "",
                isMobile: !1,
                visible: !1,
                position: "bottom left",
                offset: 12,
                view: s,
                minView: s,
                showOtherMonths: !0,
                selectOtherMonths: !0,
                moveToOtherMonthsOnSelect: !0,
                showOtherYears: !0,
                selectOtherYears: !0,
                moveToOtherYearsOnSelect: !0,
                minDate: "",
                maxDate: "",
                disableNavWhenOutOfRange: !0,
                multipleDates: !1,
                multipleDatesSeparator: ", ",
                range: !1,
                dynamicRange: !0,
                buttons: !1,
                monthsField: "monthsShort",
                showEvent: "focus",
                autoClose: !1,
                prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
                nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
                navTitles: {
                  days: "MMMM, <i>yyyy</i>",
                  months: "yyyy",
                  years: "yyyy1 - yyyy2",
                },
                timepicker: !1,
                onlyTimepicker: !1,
                dateTimeSeparator: " ",
                timeFormat: "",
                minHours: 0,
                maxHours: 24,
                minMinutes: 0,
                maxMinutes: 59,
                hoursStep: 1,
                minutesStep: 1,
                onSelect: !1,
                onChangeViewDate: !1,
                onChangeView: !1,
                onRenderCell: !1,
                onShow: !1,
                onHide: !1,
              };
            function p(e, t, s) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = s),
                e
              );
            }
            function v(e) {
              return (
                (v =
                  "function" == typeof Symbol && "symbol" == r(Symbol.iterator)
                    ? function (e) {
                        return r(e);
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : r(e);
                      }),
                v(e)
              );
            }
            function k(e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                  var s =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != s) {
                    var o,
                      n,
                      a = [],
                      i = !0,
                      r = !1;
                    try {
                      for (
                        s = s.call(e);
                        !(i = (o = s.next()).done) &&
                        (a.push(o.value), !t || a.length !== t);
                        i = !0
                      );
                    } catch (e) {
                      (r = !0), (n = e);
                    } finally {
                      try {
                        i || null == s.return || s.return();
                      } finally {
                        if (r) throw n;
                      }
                    }
                    return a;
                  }
                })(e, t) ||
                g(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function g(e, t) {
              if (e) {
                if ("string" == typeof e) return b(e, t);
                var s = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === s && e.constructor && (s = e.constructor.name),
                  "Map" === s || "Set" === s
                    ? Array.from(e)
                    : "Arguments" === s ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                    ? b(e, t)
                    : void 0
                );
              }
            }
            function b(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var s = 0, o = new Array(t); s < t; s++) o[s] = e[s];
              return o;
            }
            function x(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : document;
              return "string" == typeof e ? t.querySelector(e) : e;
            }
            function _() {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                s = t.tagName,
                o = void 0 === s ? "div" : s,
                n = t.className,
                a = void 0 === n ? "" : n,
                i = t.innerHtml,
                r = void 0 === i ? "" : i,
                l = t.id,
                c = void 0 === l ? "" : l,
                u = t.attrs,
                d = void 0 === u ? {} : u,
                h = document.createElement(o);
              if (
                (a &&
                  (e = h.classList).add.apply(
                    e,
                    (function (e) {
                      return (
                        (function (e) {
                          if (Array.isArray(e)) return b(e);
                        })(e) ||
                        (function (e) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != e[Symbol.iterator]) ||
                            null != e["@@iterator"]
                          )
                            return Array.from(e);
                        })(e) ||
                        g(e) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()
                      );
                    })(a.split(" "))
                  ),
                c && (h.id = c),
                r && (h.innerHTML = r),
                d)
              )
                for (var m in d) h.setAttribute(m, d[m]);
              return h;
            }
            function y(e, t) {
              for (var s = 0, o = Object.entries(t); s < o.length; s++) {
                var n = k(o[s], 2),
                  a = n[0],
                  i = n[1];
                e.setAttribute(a, i);
              }
              return e;
            }
            function q(e) {
              return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
            }
            function w(e) {
              var t = e.getHours(),
                s = t % 12 == 0 ? 12 : t % 12;
              return {
                year: e.getFullYear(),
                month: e.getMonth(),
                fullMonth:
                  e.getMonth() + 1 < 10
                    ? "0" + (e.getMonth() + 1)
                    : e.getMonth() + 1,
                date: e.getDate(),
                fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                day: e.getDay(),
                hours: t,
                fullHours: j(t),
                hours12: s,
                fullHours12: j(s),
                minutes: e.getMinutes(),
                fullMinutes:
                  e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
              };
            }
            function j(e) {
              return e < 10 ? "0" + e : e;
            }
            function S(e) {
              var t = 10 * Math.floor(e.getFullYear() / 10);
              return [t, t + 9];
            }
            function C() {
              for (
                var e = [], t = arguments.length, s = new Array(t), o = 0;
                o < t;
                o++
              )
                s[o] = arguments[o];
              return (
                s.forEach(function (t) {
                  if ("object" === v(t)) for (var s in t) t[s] && e.push(s);
                  else t && e.push(t);
                }),
                e.join(" ")
              );
            }
            function D(e, t) {
              var a,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : s;
              if (!e || !t) return !1;
              var r = w(e),
                l = w(t);
              return (p(
                (a = {}),
                s,
                r.date === l.date && r.month === l.month && r.year === l.year
              ),
              p(a, o, r.month === l.month && r.year === l.year),
              p(a, n, r.year === l.year),
              a)[i];
            }
            function F(e, t, s) {
              var o = M(e, !1).getTime(),
                n = M(t, !1).getTime();
              return s ? o >= n : o > n;
            }
            function A(e, t) {
              return !F(e, t, !0);
            }
            function M(e) {
              var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                s = new Date(e.getTime());
              return (
                "boolean" != typeof t ||
                  t ||
                  (function (e) {
                    e.setHours(0, 0, 0, 0);
                  })(s),
                s
              );
            }
            function T(e, t, s) {
              e.length
                ? e.forEach(function (e) {
                    e.addEventListener(t, s);
                  })
                : e.addEventListener(t, s);
            }
            function I(e, t) {
              return (
                !(!e || e === document || e instanceof DocumentFragment) &&
                (e.matches(t) ? e : I(e.parentNode, t))
              );
            }
            function P(e, t, s) {
              return e > s ? s : e < t ? t : e;
            }
            function E(e) {
              for (
                var t = arguments.length,
                  s = new Array(t > 1 ? t - 1 : 0),
                  o = 1;
                o < t;
                o++
              )
                s[o - 1] = arguments[o];
              return (
                s
                  .filter(function (e) {
                    return e;
                  })
                  .forEach(function (t) {
                    for (var s = 0, o = Object.entries(t); s < o.length; s++) {
                      var n = k(o[s], 2),
                        a = n[0],
                        i = n[1];
                      if (void 0 !== i && "[object Object]" === i.toString()) {
                        var r = void 0 !== e[a] ? e[a].toString() : void 0,
                          l = i.toString(),
                          c = Array.isArray(i) ? [] : {};
                        (e[a] = e[a] ? (r !== l ? c : e[a]) : c), E(e[a], i);
                      } else e[a] = i;
                    }
                  }),
                e
              );
            }
            function O(e) {
              var t = e;
              return (
                e instanceof Date || (t = new Date(e)),
                isNaN(t.getTime()) &&
                  (console.log(
                    'Unable to convert value "'.concat(e, '" to Date object')
                  ),
                  (t = !1)),
                t
              );
            }
            function H(e) {
              var t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
              return new RegExp(
                "(^|>|" + t + ")(" + e + ")($|<|" + t + ")",
                "g"
              );
            }
            function R(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var s = 0, o = new Array(t); s < t; s++) o[s] = e[s];
              return o;
            }
            function z(e, t, s) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = s),
                e
              );
            }
            var L,
              $ = (function () {
                function e() {
                  var t = this,
                    s =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    o = s.type,
                    n = s.date,
                    a = s.dp,
                    i = s.opts,
                    r = s.body;
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    z(this, "focus", function () {
                      t.$cell.classList.add("-focus-"), (t.focused = !0);
                    }),
                    z(this, "removeFocus", function () {
                      t.$cell.classList.remove("-focus-"), (t.focused = !1);
                    }),
                    z(this, "select", function () {
                      t.$cell.classList.add("-selected-"), (t.selected = !0);
                    }),
                    z(this, "removeSelect", function () {
                      t.$cell.classList.remove(
                        "-selected-",
                        "-range-from-",
                        "-range-to-"
                      ),
                        (t.selected = !1);
                    }),
                    z(this, "onChangeSelectedDate", function () {
                      t.isDisabled ||
                        (t._handleSelectedStatus(),
                        t.opts.range && t._handleRangeStatus());
                    }),
                    z(this, "onChangeFocusDate", function (e) {
                      if (e) {
                        var s = D(e, t.date, t.type);
                        s ? t.focus() : !s && t.focused && t.removeFocus(),
                          t.opts.range && t._handleRangeStatus();
                      } else t.focused && t.removeFocus();
                    }),
                    z(this, "render", function () {
                      return (
                        (t.$cell.innerHTML = t._getHtml()),
                        (t.$cell.adpCell = t),
                        t.$cell
                      );
                    }),
                    (this.type = o),
                    (this.singleType = this.type.slice(0, -1)),
                    (this.date = n),
                    (this.dp = a),
                    (this.opts = i),
                    (this.body = r),
                    (this.customData = !1),
                    this.init();
                }
                var t;
                return (
                  (t = [
                    {
                      key: "init",
                      value: function () {
                        var e = this.opts,
                          t = e.range,
                          s = e.onRenderCell;
                        s &&
                          (this.customData = s({
                            date: this.date,
                            cellType: this.singleType,
                            datepicker: this.dp,
                          })),
                          this._createElement(),
                          this._bindDatepickerEvents(),
                          this._handleInitialFocusStatus(),
                          this.dp.hasSelectedDates &&
                            (this._handleSelectedStatus(),
                            t && this._handleRangeStatus());
                      },
                    },
                    {
                      key: "_bindDatepickerEvents",
                      value: function () {
                        this.dp.on(c, this.onChangeSelectedDate),
                          this.dp.on(l, this.onChangeFocusDate);
                      },
                    },
                    {
                      key: "unbindDatepickerEvents",
                      value: function () {
                        this.dp.off(c, this.onChangeSelectedDate),
                          this.dp.off(l, this.onChangeFocusDate);
                      },
                    },
                    {
                      key: "_createElement",
                      value: function () {
                        var e = w(this.date),
                          t = e.year,
                          s = e.month,
                          o = e.date;
                        this.$cell = _({
                          className: this._getClassName(),
                          attrs: {
                            "data-year": t,
                            "data-month": s,
                            "data-date": o,
                          },
                        });
                      },
                    },
                    {
                      key: "_getClassName",
                      value: function () {
                        var e,
                          t,
                          a = new Date(),
                          i = this.opts,
                          r = i.selectOtherMonths,
                          l = i.selectOtherYears,
                          c = this.dp,
                          u = c.minDate,
                          d = c.maxDate,
                          h = w(this.date).day,
                          m = this._isOutOfMinMaxRange(),
                          f =
                            null === (e = this.customData) || void 0 === e
                              ? void 0
                              : e.disabled,
                          p = C(
                            "air-datepicker-cell",
                            "-".concat(this.singleType, "-"),
                            {
                              "-current-": D(a, this.date, this.type),
                              "-min-date-": u && D(u, this.date, this.type),
                              "-max-date-": d && D(d, this.date, this.type),
                            }
                          ),
                          v = "";
                        switch (this.type) {
                          case s:
                            v = C({
                              "-weekend-": this.dp.isWeekend(h),
                              "-other-month-": this.isOtherMonth,
                              "-disabled-": (this.isOtherMonth && !r) || m || f,
                            });
                            break;
                          case o:
                            v = C({
                              "-disabled-": m || f,
                            });
                            break;
                          case n:
                            v = C({
                              "-other-decade-": this.isOtherDecade,
                              "-disabled-":
                                m || (this.isOtherDecade && !l) || f,
                            });
                        }
                        return C(
                          p,
                          v,
                          null === (t = this.customData) || void 0 === t
                            ? void 0
                            : t.classes
                        );
                      },
                    },
                    {
                      key: "_getHtml",
                      value: function () {
                        var e,
                          t = w(this.date),
                          a = t.year,
                          i = t.month,
                          r = t.date,
                          l = this.opts,
                          c = l.showOtherMonths,
                          u = l.showOtherYears;
                        if (
                          null !== (e = this.customData) &&
                          void 0 !== e &&
                          e.html
                        )
                          return this.customData.html;
                        switch (this.type) {
                          case s:
                            return !c && this.isOtherMonth ? "" : r;
                          case o:
                            return this.dp.locale[this.opts.monthsField][i];
                          case n:
                            return !u && this.isOtherDecade ? "" : a;
                        }
                      },
                    },
                    {
                      key: "_isOutOfMinMaxRange",
                      value: function () {
                        var e = this.dp,
                          t = e.minDate,
                          o = e.maxDate,
                          a = this.type,
                          i = w(this.date),
                          r = i.month,
                          l = i.year,
                          c = i.date,
                          u = a === s,
                          d = a === n,
                          h =
                            !!t &&
                            new Date(
                              l,
                              d ? t.getMonth() : r,
                              u ? c : t.getDate()
                            ),
                          m =
                            !!o &&
                            new Date(
                              l,
                              d ? o.getMonth() : r,
                              u ? c : o.getDate()
                            );
                        return t && o
                          ? A(h, t) || F(m, o)
                          : t
                          ? A(h, t)
                          : o
                          ? F(m, o)
                          : void 0;
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.unbindDatepickerEvents();
                      },
                    },
                    {
                      key: "_handleRangeStatus",
                      value: function () {
                        var e,
                          t,
                          s,
                          o,
                          n,
                          a = this.dp,
                          i = a.rangeDateFrom,
                          r = a.rangeDateTo,
                          l = C({
                            "-in-range-":
                              i &&
                              r &&
                              ((e = this.date),
                              (t = i),
                              (s = r),
                              F(e, t) && A(e, s)),
                            "-range-from-": i && D(this.date, i, this.type),
                            "-range-to-": r && D(this.date, r, this.type),
                          });
                        this.$cell.classList.remove(
                          "-range-from-",
                          "-range-to-",
                          "-in-range-"
                        ),
                          l &&
                            (o = this.$cell.classList).add.apply(
                              o,
                              (function (e) {
                                if (Array.isArray(e)) return R(e);
                              })((n = l.split(" "))) ||
                                (function (e) {
                                  if (
                                    ("undefined" != typeof Symbol &&
                                      null != e[Symbol.iterator]) ||
                                    null != e["@@iterator"]
                                  )
                                    return Array.from(e);
                                })(n) ||
                                (function (e, t) {
                                  if (e) {
                                    if ("string" == typeof e) return R(e, t);
                                    var s = Object.prototype.toString
                                      .call(e)
                                      .slice(8, -1);
                                    return (
                                      "Object" === s &&
                                        e.constructor &&
                                        (s = e.constructor.name),
                                      "Map" === s || "Set" === s
                                        ? Array.from(e)
                                        : "Arguments" === s ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                            s
                                          )
                                        ? R(e, t)
                                        : void 0
                                    );
                                  }
                                })(n) ||
                                (function () {
                                  throw new TypeError(
                                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                  );
                                })()
                            );
                      },
                    },
                    {
                      key: "_handleSelectedStatus",
                      value: function () {
                        var e = this.dp._checkIfDateIsSelected(
                          this.date,
                          this.type
                        );
                        e
                          ? this.select()
                          : !e && this.selected && this.removeSelect();
                      },
                    },
                    {
                      key: "_handleInitialFocusStatus",
                      value: function () {
                        D(this.dp.focusDate, this.date, this.type) &&
                          this.focus();
                      },
                    },
                    {
                      key: "isDisabled",
                      get: function () {
                        return this.$cell.matches(".-disabled-");
                      },
                    },
                    {
                      key: "isOtherMonth",
                      get: function () {
                        return this.dp.isOtherMonth(this.date);
                      },
                    },
                    {
                      key: "isOtherDecade",
                      get: function () {
                        return this.dp.isOtherDecade(this.date);
                      },
                    },
                  ]) &&
                    (function (e, t) {
                      for (var s = 0; s < t.length; s++) {
                        var o = t[s];
                        (o.enumerable = o.enumerable || !1),
                          (o.configurable = !0),
                          "value" in o && (o.writable = !0),
                          Object.defineProperty(e, o.key, o);
                      }
                    })(e.prototype, t),
                  e
                );
              })();
            function N(e, t, s) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = s),
                e
              );
            }
            var B =
                (N(
                  (L = {}),
                  s,
                  '<div class="air-datepicker-body--day-names"></div>' +
                    '<div class="air-datepicker-body--cells -'.concat(
                      s,
                      '-"></div>'
                    )
                ),
                N(
                  L,
                  o,
                  '<div class="air-datepicker-body--cells -'.concat(
                    o,
                    '-"></div>'
                  )
                ),
                N(
                  L,
                  n,
                  '<div class="air-datepicker-body--cells -'.concat(
                    n,
                    '-"></div>'
                  )
                ),
                L),
              G = (function () {
                function e(t) {
                  var a = this,
                    i = t.dp,
                    r = t.type,
                    l = t.opts;
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    N(this, "handleClick", function (e) {
                      var t = I(e.target, ".air-datepicker-cell");
                      if (t) {
                        var s = t.adpCell;
                        if (!s.isDisabled)
                          if (a.dp.isMinViewReached) {
                            var o = a.dp._checkIfDateIsSelected(s.date, s.type);
                            o
                              ? a.dp._handleAlreadySelectedDates(o, s.date)
                              : a.dp.selectDate(s.date);
                          } else a.dp.down();
                      }
                    }),
                    N(this, "onChangeCurrentView", function (e) {
                      e !== a.type ? a.hide() : (a.show(), a.render());
                    }),
                    N(this, "onMouseOverCell", function (e) {
                      var t = I(e.target, ".air-datepicker-cell");
                      a.dp.setFocusDate(!!t && t.adpCell.date);
                    }),
                    N(this, "onMouseOutCell", function () {
                      a.dp.setFocusDate(!1);
                    }),
                    N(this, "onClickCell", function (e) {
                      a.handleClick(e);
                    }),
                    N(this, "onMouseDown", function (e) {
                      a.pressed = !0;
                      var t = I(e.target, ".air-datepicker-cell"),
                        s = t && t.adpCell;
                      D(s.date, a.dp.rangeDateFrom) &&
                        (a.rangeFromFocused = !0),
                        D(s.date, a.dp.rangeDateTo) && (a.rangeToFocused = !0);
                    }),
                    N(this, "onMouseMove", function (e) {
                      if (a.pressed && a.dp.isMinViewReached) {
                        e.preventDefault();
                        var t = I(e.target, ".air-datepicker-cell"),
                          s = t && t.adpCell,
                          o = a.dp,
                          n = o.selectedDates,
                          i = o.rangeDateTo,
                          r = o.rangeDateFrom;
                        if (s && !s.isDisabled) {
                          var l = s.date;
                          if (2 === n.length) {
                            if (a.rangeFromFocused && !F(l, i)) {
                              var c = w(r),
                                u = c.hours,
                                d = c.minutes;
                              l.setHours(u),
                                l.setMinutes(d),
                                (a.dp.rangeDateFrom = l),
                                a.dp.replaceDate(r, l);
                            }
                            if (a.rangeToFocused && !A(l, r)) {
                              var h = w(i),
                                m = h.hours,
                                f = h.minutes;
                              l.setHours(m),
                                l.setMinutes(f),
                                (a.dp.rangeDateTo = l),
                                a.dp.replaceDate(i, l);
                            }
                          }
                        }
                      }
                    }),
                    N(this, "onMouseUp", function () {
                      (a.pressed = !1),
                        (a.rangeFromFocused = !1),
                        (a.rangeToFocused = !1);
                    }),
                    N(this, "onChangeViewDate", function (e, t) {
                      if (a.isVisible) {
                        var i = S(e),
                          r = S(t);
                        switch (a.dp.currentView) {
                          case s:
                            if (D(e, t, o)) return;
                            break;
                          case o:
                            if (D(e, t, n)) return;
                            break;
                          case n:
                            if (i[0] === r[0] && i[1] === r[1]) return;
                        }
                        a.render();
                      }
                    }),
                    N(this, "render", function () {
                      a.destroyCells(),
                        a._generateCells(),
                        a.cells.forEach(function (e) {
                          a.$cells.appendChild(e.render());
                        });
                    }),
                    (this.dp = i),
                    (this.type = r),
                    (this.opts = l),
                    (this.cells = []),
                    (this.$el = ""),
                    (this.pressed = !1),
                    (this.isVisible = !0),
                    this.init();
                }
                var t;
                return (
                  (t = [
                    {
                      key: "init",
                      value: function () {
                        this._buildBaseHtml(),
                          this.type === s && this.renderDayNames(),
                          this.render(),
                          this._bindEvents(),
                          this._bindDatepickerEvents();
                      },
                    },
                    {
                      key: "_bindEvents",
                      value: function () {
                        var e = this.opts,
                          t = e.range,
                          s = e.dynamicRange;
                        T(this.$el, "mouseover", this.onMouseOverCell),
                          T(this.$el, "mouseout", this.onMouseOutCell),
                          T(this.$el, "click", this.onClickCell),
                          t &&
                            s &&
                            (T(this.$el, "mousedown", this.onMouseDown),
                            T(this.$el, "mousemove", this.onMouseMove),
                            T(window.document, "mouseup", this.onMouseUp));
                      },
                    },
                    {
                      key: "_bindDatepickerEvents",
                      value: function () {
                        this.dp.on(a, this.onChangeViewDate),
                          this.dp.on(i, this.onChangeCurrentView);
                      },
                    },
                    {
                      key: "_buildBaseHtml",
                      value: function () {
                        (this.$el = _({
                          className: "air-datepicker-body -".concat(
                            this.type,
                            "-"
                          ),
                          innerHtml: B[this.type],
                        })),
                          (this.$names = x(
                            ".air-datepicker-body--day-names",
                            this.$el
                          )),
                          (this.$cells = x(
                            ".air-datepicker-body--cells",
                            this.$el
                          ));
                      },
                    },
                    {
                      key: "_getDayNamesHtml",
                      value: function () {
                        for (
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : this.dp.locale.firstDay,
                            t = "",
                            s = this.dp.isWeekend,
                            o = e,
                            n = 0;
                          n < 7;

                        ) {
                          var a = o % 7,
                            i = C(
                              "air-datepicker-body--day-name",
                              N({}, "-weekend-", s(a))
                            ),
                            r = this.dp.locale.daysMin[a];
                          (t += '<div class="'
                            .concat(i, '">')
                            .concat(r, "</div>")),
                            n++,
                            o++;
                        }
                        return t;
                      },
                    },
                    {
                      key: "_getDaysCells",
                      value: function () {
                        var e = this.dp,
                          t = e.viewDate,
                          s = e.locale.firstDay,
                          o = q(t),
                          n = w(t),
                          a = n.year,
                          i = n.month,
                          r = new Date(a, i, 1),
                          l = new Date(a, i, o),
                          c = r.getDay() - s,
                          u = 6 - l.getDay() + s;
                        u = u > 6 ? u - 7 : u;
                        for (
                          var d = (function (e, t) {
                              var s = w(e),
                                o = s.year,
                                n = s.month,
                                a = s.date;
                              return new Date(o, n, a - t);
                            })(r, (c = c < 0 ? c + 7 : c)),
                            h = o + c + u,
                            m = d.getDate(),
                            f = w(d),
                            p = f.year,
                            v = f.month,
                            k = 0;
                          k < h;

                        ) {
                          var g = new Date(p, v, m + k);
                          this._generateCell(g), k++;
                        }
                      },
                    },
                    {
                      key: "_generateCell",
                      value: function (e) {
                        var t = this.type,
                          s = this.dp,
                          o = this.opts,
                          n = new $({
                            type: t,
                            dp: s,
                            opts: o,
                            date: e,
                            body: this,
                          });
                        return this.cells.push(n), n;
                      },
                    },
                    {
                      key: "_generateDayCells",
                      value: function () {
                        this._getDaysCells();
                      },
                    },
                    {
                      key: "_generateMonthCells",
                      value: function () {
                        for (
                          var e = this.dp.parsedViewDate.year, t = 0;
                          t < 12;

                        )
                          this.cells.push(this._generateCell(new Date(e, t))),
                            t++;
                      },
                    },
                    {
                      key: "_generateYearCells",
                      value: function () {
                        for (
                          var e = S(this.dp.viewDate),
                            t = e[0] - 1,
                            s = e[1] + 1,
                            o = t;
                          o <= s;

                        )
                          this.cells.push(this._generateCell(new Date(o, 0))),
                            o++;
                      },
                    },
                    {
                      key: "renderDayNames",
                      value: function () {
                        this.$names.innerHTML = this._getDayNamesHtml();
                      },
                    },
                    {
                      key: "_generateCells",
                      value: function () {
                        switch (this.type) {
                          case s:
                            this._generateDayCells();
                            break;
                          case o:
                            this._generateMonthCells();
                            break;
                          case n:
                            this._generateYearCells();
                        }
                      },
                    },
                    {
                      key: "show",
                      value: function () {
                        (this.isVisible = !0),
                          this.$el.classList.remove("-hidden-");
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        (this.isVisible = !1),
                          this.$el.classList.add("-hidden-");
                      },
                    },
                    {
                      key: "destroyCells",
                      value: function () {
                        this.cells.forEach(function (e) {
                          return e.destroy();
                        }),
                          (this.cells = []),
                          (this.$cells.innerHTML = "");
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.destroyCells(),
                          this.dp.off(a, this.onChangeViewDate),
                          this.dp.off(i, this.onChangeCurrentView);
                      },
                    },
                  ]),
                  t &&
                    (function (e, t) {
                      for (var s = 0; s < t.length; s++) {
                        var o = t[s];
                        (o.enumerable = o.enumerable || !1),
                          (o.configurable = !0),
                          "value" in o && (o.writable = !0),
                          Object.defineProperty(e, o.key, o);
                      }
                    })(e.prototype, t),
                  e
                );
              })();
            function V(e, t, s) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = s),
                e
              );
            }
            var U = (function () {
                function e(t) {
                  var s = this,
                    o = t.dp,
                    n = t.opts;
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    V(this, "onClickNav", function (e) {
                      var t = I(e.target, ".air-datepicker-nav--action");
                      if (t) {
                        var o = t.dataset.action;
                        s.dp[o]();
                      }
                    }),
                    V(this, "onChangeViewDate", function () {
                      s.render(), s._resetNavStatus(), s.handleNavStatus();
                    }),
                    V(this, "onChangeCurrentView", function () {
                      s.render(), s._resetNavStatus(), s.handleNavStatus();
                    }),
                    V(this, "onClickNavTitle", function () {
                      s.dp.isFinalView || s.dp.up();
                    }),
                    V(this, "update", function () {
                      var e = s.opts,
                        t = e.prevHtml,
                        o = e.nextHtml;
                      (s.$prev.innerHTML = t),
                        (s.$next.innerHTML = o),
                        s._resetNavStatus(),
                        s.render(),
                        s.handleNavStatus();
                    }),
                    V(this, "renderDelay", function () {
                      setTimeout(s.render);
                    }),
                    V(this, "render", function () {
                      (s.$title.innerHTML = s._getTitle()),
                        (function (e, t) {
                          for (var s in t)
                            t[s] ? e.classList.add(s) : e.classList.remove(s);
                        })(s.$title, {
                          "-disabled-": s.dp.isFinalView,
                        });
                    }),
                    (this.dp = o),
                    (this.opts = n),
                    this.init();
                }
                var t;
                return (
                  (t = [
                    {
                      key: "init",
                      value: function () {
                        this._createElement(),
                          this._buildBaseHtml(),
                          this._defineDOM(),
                          this.render(),
                          this.handleNavStatus(),
                          this._bindEvents(),
                          this._bindDatepickerEvents();
                      },
                    },
                    {
                      key: "_defineDOM",
                      value: function () {
                        (this.$title = x(
                          ".air-datepicker-nav--title",
                          this.$el
                        )),
                          (this.$prev = x('[data-action="prev"]', this.$el)),
                          (this.$next = x('[data-action="next"]', this.$el));
                      },
                    },
                    {
                      key: "_bindEvents",
                      value: function () {
                        this.$el.addEventListener("click", this.onClickNav),
                          this.$title.addEventListener(
                            "click",
                            this.onClickNavTitle
                          );
                      },
                    },
                    {
                      key: "_bindDatepickerEvents",
                      value: function () {
                        this.dp.on(a, this.onChangeViewDate),
                          this.dp.on(i, this.onChangeCurrentView),
                          this.isNavIsFunction &&
                            (this.dp.on(c, this.renderDelay),
                            this.dp.opts.timepicker &&
                              this.dp.on(u, this.render));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.dp.off(a, this.onChangeViewDate),
                          this.dp.off(i, this.onChangeCurrentView),
                          this.isNavIsFunction &&
                            (this.dp.off(c, this.renderDelay),
                            this.dp.opts.timepicker &&
                              this.dp.off(u, this.render));
                      },
                    },
                    {
                      key: "_createElement",
                      value: function () {
                        this.$el = _({
                          tagName: "nav",
                          className: "air-datepicker-nav",
                        });
                      },
                    },
                    {
                      key: "_getTitle",
                      value: function () {
                        var e = this.dp,
                          t = this.opts.navTitles[e.currentView];
                        return "function" == typeof t
                          ? t(e)
                          : e.formatDate(e.viewDate, t);
                      },
                    },
                    {
                      key: "handleNavStatus",
                      value: function () {
                        var e = this.opts.disableNavWhenOutOfRange,
                          t = this.dp,
                          a = t.minDate,
                          i = t.maxDate;
                        if ((a || i) && e) {
                          var r = this.dp.parsedViewDate,
                            l = r.year,
                            c = r.month,
                            u = !!a && w(a),
                            d = !!i && w(i);
                          switch (this.dp.currentView) {
                            case s:
                              a &&
                                u.month >= c &&
                                u.year >= l &&
                                this._disableNav("prev"),
                                i &&
                                  d.month <= c &&
                                  d.year <= l &&
                                  this._disableNav("next");
                              break;
                            case o:
                              a && u.year >= l && this._disableNav("prev"),
                                i && d.year <= l && this._disableNav("next");
                              break;
                            case n:
                              var h = S(this.dp.viewDate);
                              a && u.year >= h[0] && this._disableNav("prev"),
                                i && d.year <= h[1] && this._disableNav("next");
                          }
                        }
                      },
                    },
                    {
                      key: "_disableNav",
                      value: function (e) {
                        x('[data-action="' + e + '"]', this.$el).classList.add(
                          "-disabled-"
                        );
                      },
                    },
                    {
                      key: "_resetNavStatus",
                      value: function () {
                        !(function (e) {
                          for (
                            var t = arguments.length,
                              s = new Array(t > 1 ? t - 1 : 0),
                              o = 1;
                            o < t;
                            o++
                          )
                            s[o - 1] = arguments[o];
                          var n;
                          e.length
                            ? e.forEach(function (e) {
                                var t;
                                (t = e.classList).remove.apply(t, s);
                              })
                            : (n = e.classList).remove.apply(n, s);
                        })(
                          this.$el.querySelectorAll(
                            ".air-datepicker-nav--action"
                          ),
                          "-disabled-"
                        );
                      },
                    },
                    {
                      key: "_buildBaseHtml",
                      value: function () {
                        var e = this.opts,
                          t = e.prevHtml,
                          s = e.nextHtml;
                        this.$el.innerHTML =
                          '<div class="air-datepicker-nav--action" data-action="prev">'.concat(
                            t,
                            "</div>"
                          ) +
                          '<div class="air-datepicker-nav--title"></div>' +
                          '<div class="air-datepicker-nav--action" data-action="next">'.concat(
                            s,
                            "</div>"
                          );
                      },
                    },
                    {
                      key: "isNavIsFunction",
                      get: function () {
                        var e = this.opts.navTitles;
                        return Object.keys(e).find(function (t) {
                          return "function" == typeof e[t];
                        });
                      },
                    },
                  ]),
                  t &&
                    (function (e, t) {
                      for (var s = 0; s < t.length; s++) {
                        var o = t[s];
                        (o.enumerable = o.enumerable || !1),
                          (o.configurable = !0),
                          "value" in o && (o.writable = !0),
                          Object.defineProperty(e, o.key, o);
                      }
                    })(e.prototype, t),
                  e
                );
              })(),
              K = {
                today: {
                  content: function (e) {
                    return e.locale.today;
                  },
                  onClick: function (e) {
                    return e.setViewDate(new Date());
                  },
                },
                clear: {
                  content: function (e) {
                    return e.locale.clear;
                  },
                  onClick: function (e) {
                    return e.clear();
                  },
                },
              },
              J = (function () {
                function e(t) {
                  var s = t.dp,
                    o = t.opts;
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.dp = s),
                    (this.opts = o),
                    this.init();
                }
                var t;
                return (
                  (t = [
                    {
                      key: "init",
                      value: function () {
                        this.createElement(), this.render();
                      },
                    },
                    {
                      key: "createElement",
                      value: function () {
                        this.$el = _({
                          className: "air-datepicker-buttons",
                        });
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.$el.parentNode.removeChild(this.$el);
                      },
                    },
                    {
                      key: "clearHtml",
                      value: function () {
                        return (this.$el.innerHTML = ""), this;
                      },
                    },
                    {
                      key: "generateButtons",
                      value: function () {
                        var e = this,
                          t = this.opts.buttons;
                        Array.isArray(t) || (t = [t]),
                          t.forEach(function (t) {
                            var s = t;
                            "string" == typeof t && K[t] && (s = K[t]);
                            var o = e.createButton(s);
                            s.onClick && e.attachEventToButton(o, s.onClick),
                              e.$el.appendChild(o);
                          });
                      },
                    },
                    {
                      key: "attachEventToButton",
                      value: function (e, t) {
                        var s = this;
                        e.addEventListener("click", function () {
                          t(s.dp);
                        });
                      },
                    },
                    {
                      key: "createButton",
                      value: function (e) {
                        var t = e.content,
                          s = e.className,
                          o = e.tagName,
                          n = void 0 === o ? "button" : o,
                          a = e.attrs,
                          i = void 0 === a ? {} : a,
                          r = "function" == typeof t ? t(this.dp) : t;
                        return _({
                          tagName: n,
                          innerHtml: "<span tabindex='-1'>".concat(
                            r,
                            "</span>"
                          ),
                          className: C("air-datepicker-button", s),
                          attrs: i,
                        });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        this.generateButtons();
                      },
                    },
                  ]) &&
                    (function (e, t) {
                      for (var s = 0; s < t.length; s++) {
                        var o = t[s];
                        (o.enumerable = o.enumerable || !1),
                          (o.configurable = !0),
                          "value" in o && (o.writable = !0),
                          Object.defineProperty(e, o.key, o);
                      }
                    })(e.prototype, t),
                  e
                );
              })();
            function Y(e, t, s) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = s),
                e
              );
            }
            var W = (function () {
              function e() {
                var t = this,
                  s =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  o = s.opts,
                  n = s.dp;
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  Y(this, "toggleTimepickerIsActive", function (e) {
                    t.dp.timepickerIsActive = e;
                  }),
                  Y(this, "onChangeSelectedDate", function (e) {
                    var s = e.date,
                      o = e.updateTime,
                      n = void 0 !== o && o;
                    s &&
                      (t.setMinMaxTime(s),
                      t.setCurrentTime(!!n && s),
                      t.addTimeToDate(s));
                  }),
                  Y(this, "onChangeLastSelectedDate", function (e) {
                    e && (t.setTime(e), t.render());
                  }),
                  Y(this, "onChangeInputRange", function (e) {
                    var s = e.target,
                      o = s.getAttribute("name");
                    (t[o] = s.value),
                      t.updateText(),
                      t.dp.trigger(u, {
                        hours: t.hours,
                        minutes: t.minutes,
                      });
                  }),
                  Y(this, "onMouseEnterLeave", function (e) {
                    var s = e.target.getAttribute("name"),
                      o = t.$minutesText;
                    "hours" === s && (o = t.$hoursText),
                      o.classList.toggle("-focus-");
                  }),
                  Y(this, "onFocus", function () {
                    t.toggleTimepickerIsActive(!0);
                  }),
                  Y(this, "onBlur", function () {
                    t.toggleTimepickerIsActive(!1);
                  }),
                  (this.opts = o),
                  (this.dp = n);
                var a = this.dp.locale.timeFormat;
                a && (a.match(H("h")) || a.match(H("hh"))) && (this.ampm = !0),
                  this.init();
              }
              var t;
              return (
                (t = [
                  {
                    key: "init",
                    value: function () {
                      this.setTime(
                        this.dp.lastSelectedDate || this.dp.viewDate
                      ),
                        this.createElement(),
                        this.buildHtml(),
                        this.defineDOM(),
                        this.render(),
                        this.bindDatepickerEvents(),
                        this.bindDOMEvents();
                    },
                  },
                  {
                    key: "bindDatepickerEvents",
                    value: function () {
                      this.dp.on(c, this.onChangeSelectedDate),
                        this.dp.on(d, this.onChangeLastSelectedDate);
                    },
                  },
                  {
                    key: "bindDOMEvents",
                    value: function () {
                      var e = "input";
                      navigator.userAgent.match(/trident/gi) && (e = "change"),
                        T(this.$ranges, e, this.onChangeInputRange),
                        T(this.$ranges, "mouseenter", this.onMouseEnterLeave),
                        T(this.$ranges, "mouseleave", this.onMouseEnterLeave),
                        T(this.$ranges, "focus", this.onFocus),
                        T(this.$ranges, "blur", this.onBlur);
                    },
                  },
                  {
                    key: "createElement",
                    value: function () {
                      this.$el = _({
                        className: C("air-datepicker-time", {
                          "-am-pm-": this.dp.ampm,
                        }),
                      });
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.dp.off(c, this.onChangeSelectedDate),
                        this.dp.off(d, this.onChangeLastSelectedDate),
                        this.$el.parentNode.removeChild(this.$el);
                    },
                  },
                  {
                    key: "buildHtml",
                    value: function () {
                      var e = this.ampm,
                        t = this.hours,
                        s = this.displayHours,
                        o = this.minutes,
                        n = this.minHours,
                        a = this.minMinutes,
                        i = this.maxHours,
                        r = this.maxMinutes,
                        l = this.dayPeriod,
                        c = this.opts,
                        u = c.hoursStep,
                        d = c.minutesStep;
                      this.$el.innerHTML =
                        '<div class="air-datepicker-time--current">' +
                        '   <span class="air-datepicker-time--current-hours">'.concat(
                          j(s),
                          "</span>"
                        ) +
                        '   <span class="air-datepicker-time--current-colon">:</span>' +
                        '   <span class="air-datepicker-time--current-minutes">'.concat(
                          j(o),
                          "</span>"
                        ) +
                        "   ".concat(
                          e
                            ? "<span class='air-datepicker-time--current-ampm'>".concat(
                                l,
                                "</span>"
                              )
                            : ""
                        ) +
                        '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' +
                        '      <input type="range" name="hours" value="'
                          .concat(t, '" min="')
                          .concat(n, '" max="')
                          .concat(i, '" step="')
                          .concat(u, '"/>') +
                        '   </div>   <div class="air-datepicker-time--row">' +
                        '      <input type="range" name="minutes" value="'
                          .concat(o, '" min="')
                          .concat(a, '" max="')
                          .concat(r, '" step="')
                          .concat(d, '"/>') +
                        "   </div></div>";
                    },
                  },
                  {
                    key: "defineDOM",
                    value: function () {
                      var e = this,
                        t = function (t) {
                          return x(t, e.$el);
                        };
                      (this.$ranges =
                        this.$el.querySelectorAll('[type="range"]')),
                        (this.$hours = t('[name="hours"]')),
                        (this.$minutes = t('[name="minutes"]')),
                        (this.$hoursText = t(
                          ".air-datepicker-time--current-hours"
                        )),
                        (this.$minutesText = t(
                          ".air-datepicker-time--current-minutes"
                        )),
                        (this.$ampm = t(".air-datepicker-time--current-ampm"));
                    },
                  },
                  {
                    key: "setTime",
                    value: function (e) {
                      this.setMinMaxTime(e), this.setCurrentTime(e);
                    },
                  },
                  {
                    key: "addTimeToDate",
                    value: function (e) {
                      e && (e.setHours(this.hours), e.setMinutes(this.minutes));
                    },
                  },
                  {
                    key: "setMinMaxTime",
                    value: function (e) {
                      if ((this.setMinMaxTimeFromOptions(), e)) {
                        var t = this.dp,
                          s = t.minDate,
                          o = t.maxDate;
                        s && D(e, s) && this.setMinTimeFromMinDate(s),
                          o && D(e, o) && this.setMaxTimeFromMaxDate(o);
                      }
                    },
                  },
                  {
                    key: "setCurrentTime",
                    value: function (e) {
                      var t = e ? w(e) : this,
                        s = t.hours,
                        o = t.minutes;
                      (this.hours = P(s, this.minHours, this.maxHours)),
                        (this.minutes = P(o, this.minMinutes, this.maxMinutes));
                    },
                  },
                  {
                    key: "setMinMaxTimeFromOptions",
                    value: function () {
                      var e = this.opts,
                        t = e.minHours,
                        s = e.minMinutes,
                        o = e.maxHours,
                        n = e.maxMinutes;
                      (this.minHours = P(t, 0, 23)),
                        (this.minMinutes = P(s, 0, 59)),
                        (this.maxHours = P(o, 0, 23)),
                        (this.maxMinutes = P(n, 0, 59));
                    },
                  },
                  {
                    key: "setMinTimeFromMinDate",
                    value: function (e) {
                      var t = this.dp.lastSelectedDate;
                      (this.minHours = e.getHours()),
                        t && t.getHours() > e.getHours()
                          ? (this.minMinutes = this.opts.minMinutes)
                          : (this.minMinutes = e.getMinutes());
                    },
                  },
                  {
                    key: "setMaxTimeFromMaxDate",
                    value: function (e) {
                      var t = this.dp.lastSelectedDate;
                      (this.maxHours = e.getHours()),
                        t && t.getHours() < e.getHours()
                          ? (this.maxMinutes = this.opts.maxMinutes)
                          : (this.maxMinutes = e.getMinutes());
                    },
                  },
                  {
                    key: "getDayPeriod",
                    value: function (e, t) {
                      var s = e,
                        o = Number(e);
                      e instanceof Date && ((s = w(e)), (o = Number(s.hours)));
                      var n = "am";
                      if (t || this.ampm) {
                        switch (!0) {
                          case 12 === o:
                          case o > 11:
                            n = "pm";
                        }
                        o = o % 12 == 0 ? 12 : o % 12;
                      }
                      return {
                        hours: o,
                        dayPeriod: n,
                      };
                    },
                  },
                  {
                    key: "updateSliders",
                    value: function () {
                      (y(this.$hours, {
                        min: this.minHours,
                        max: this.maxHours,
                      }).value = this.hours),
                        (y(this.$minutes, {
                          min: this.minMinutes,
                          max: this.maxMinutes,
                        }).value = this.minutes);
                    },
                  },
                  {
                    key: "updateText",
                    value: function () {
                      (this.$hoursText.innerHTML = j(this.displayHours)),
                        (this.$minutesText.innerHTML = j(this.minutes)),
                        this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
                    },
                  },
                  {
                    key: "hours",
                    get: function () {
                      return this._hours;
                    },
                    set: function (e) {
                      this._hours = e;
                      var t = this.getDayPeriod(e),
                        s = t.hours,
                        o = t.dayPeriod;
                      (this.displayHours = s), (this.dayPeriod = o);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      this.updateSliders(), this.updateText();
                    },
                  },
                ]) &&
                  (function (e, t) {
                    for (var s = 0; s < t.length; s++) {
                      var o = t[s];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  })(e.prototype, t),
                e
              );
            })();
            function X(e, t) {
              if (e) {
                if ("string" == typeof e) return Q(e, t);
                var s = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === s && e.constructor && (s = e.constructor.name),
                  "Map" === s || "Set" === s
                    ? Array.from(e)
                    : "Arguments" === s ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                    ? Q(e, t)
                    : void 0
                );
              }
            }
            function Q(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var s = 0, o = new Array(t); s < t; s++) o[s] = e[s];
              return o;
            }
            function Z(e, t, s) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = s),
                e
              );
            }
            var ee = (function () {
                function e(t) {
                  var s = this,
                    o = t.dp,
                    n = t.opts;
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    Z(this, "pressedKeys", new Set()),
                    Z(
                      this,
                      "hotKeys",
                      new Map([
                        [
                          [
                            ["Control", "ArrowRight"],
                            ["Control", "ArrowUp"],
                          ],
                          function (e) {
                            return e.month++;
                          },
                        ],
                        [
                          [
                            ["Control", "ArrowLeft"],
                            ["Control", "ArrowDown"],
                          ],
                          function (e) {
                            return e.month--;
                          },
                        ],
                        [
                          [
                            ["Shift", "ArrowRight"],
                            ["Shift", "ArrowUp"],
                          ],
                          function (e) {
                            return e.year++;
                          },
                        ],
                        [
                          [
                            ["Shift", "ArrowLeft"],
                            ["Shift", "ArrowDown"],
                          ],
                          function (e) {
                            return e.year--;
                          },
                        ],
                        [
                          [
                            ["Alt", "ArrowRight"],
                            ["Alt", "ArrowUp"],
                          ],
                          function (e) {
                            return (e.year += 10);
                          },
                        ],
                        [
                          [
                            ["Alt", "ArrowLeft"],
                            ["Alt", "ArrowDown"],
                          ],
                          function (e) {
                            return (e.year -= 10);
                          },
                        ],
                        [
                          ["Control", "Shift", "ArrowUp"],
                          function (e, t) {
                            return t.up();
                          },
                        ],
                      ])
                    ),
                    Z(this, "handleHotKey", function (e) {
                      var t = s.hotKeys.get(e),
                        o = w(s.getInitialFocusDate());
                      t(o, s.dp);
                      var n = o.year,
                        a = o.month,
                        i = o.date,
                        r = q(new Date(n, a));
                      r < i && (i = r);
                      var l = s.dp.getClampedDate(new Date(n, a, i));
                      s.dp.setFocusDate(l, {
                        viewDateTransition: !0,
                      });
                    }),
                    Z(this, "isHotKeyPressed", function () {
                      var e,
                        t = !1,
                        o = s.pressedKeys.size,
                        n = function (e) {
                          return s.pressedKeys.has(e);
                        },
                        a = (function (e, t) {
                          var s =
                            ("undefined" != typeof Symbol &&
                              e[Symbol.iterator]) ||
                            e["@@iterator"];
                          if (!s) {
                            if (Array.isArray(e) || (s = X(e))) {
                              s && (e = s);
                              var o = 0,
                                n = function () {};
                              return {
                                s: n,
                                n: function () {
                                  return o >= e.length
                                    ? {
                                        done: !0,
                                      }
                                    : {
                                        done: !1,
                                        value: e[o++],
                                      };
                                },
                                e: function (e) {
                                  throw e;
                                },
                                f: n,
                              };
                            }
                            throw new TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          }
                          var a,
                            i = !0,
                            r = !1;
                          return {
                            s: function () {
                              s = s.call(e);
                            },
                            n: function () {
                              var e = s.next();
                              return (i = e.done), e;
                            },
                            e: function (e) {
                              (r = !0), (a = e);
                            },
                            f: function () {
                              try {
                                i || null == s.return || s.return();
                              } finally {
                                if (r) throw a;
                              }
                            },
                          };
                        })(s.hotKeys);
                      try {
                        var i = function () {
                          var s,
                            a = ((s = e.value),
                            (function (e) {
                              if (Array.isArray(e)) return e;
                            })(s) ||
                              (function (e, t) {
                                var s =
                                  null == e
                                    ? null
                                    : ("undefined" != typeof Symbol &&
                                        e[Symbol.iterator]) ||
                                      e["@@iterator"];
                                if (null != s) {
                                  var o,
                                    n,
                                    a = [],
                                    i = !0,
                                    r = !1;
                                  try {
                                    for (
                                      s = s.call(e);
                                      !(i = (o = s.next()).done) &&
                                      (a.push(o.value), 1 !== a.length);
                                      i = !0
                                    );
                                  } catch (e) {
                                    (r = !0), (n = e);
                                  } finally {
                                    try {
                                      i || null == s.return || s.return();
                                    } finally {
                                      if (r) throw n;
                                    }
                                  }
                                  return a;
                                }
                              })(s) ||
                              X(s, 1) ||
                              (function () {
                                throw new TypeError(
                                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })())[0];
                          if (t) return "break";
                          if (Array.isArray(a[0]))
                            a.forEach(function (e) {
                              t || o !== e.length || (t = e.every(n) && a);
                            });
                          else {
                            if (o !== a.length) return "continue";
                            t = a.every(n) && a;
                          }
                        };
                        for (a.s(); !(e = a.n()).done && "break" !== i(); );
                      } catch (e) {
                        a.e(e);
                      } finally {
                        a.f();
                      }
                      return t;
                    }),
                    Z(this, "isArrow", function (e) {
                      return e >= 37 && e <= 40;
                    }),
                    Z(this, "onKeyDown", function (e) {
                      var t = e.key,
                        o = e.which,
                        n = s.dp,
                        a = s.dp.focusDate,
                        i = s.opts;
                      s.registerKey(t);
                      var r = s.isHotKeyPressed();
                      if (r) return e.preventDefault(), void s.handleHotKey(r);
                      if (s.isArrow(o))
                        return e.preventDefault(), void s.focusNextCell(t);
                      if ("Enter" === t) {
                        if (n.currentView !== i.minView) return void n.down();
                        if (a) {
                          var l = n._checkIfDateIsSelected(a);
                          return void (l
                            ? n._handleAlreadySelectedDates(l, a)
                            : n.selectDate(a));
                        }
                      }
                      "Escape" === t && s.dp.hide();
                    }),
                    Z(this, "onKeyUp", function (e) {
                      s.removeKey(e.key);
                    }),
                    (this.dp = o),
                    (this.opts = n),
                    this.init();
                }
                var t;
                return (
                  (t = [
                    {
                      key: "init",
                      value: function () {
                        this.bindKeyboardEvents();
                      },
                    },
                    {
                      key: "bindKeyboardEvents",
                      value: function () {
                        var e = this.dp.$el;
                        e.addEventListener("keydown", this.onKeyDown),
                          e.addEventListener("keyup", this.onKeyUp);
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        var e = this.dp.$el;
                        e.removeEventListener("keydown", this.onKeyDown),
                          e.removeEventListener("keyup", this.onKeyUp),
                          (this.hotKeys = null),
                          (this.pressedKeys = null);
                      },
                    },
                    {
                      key: "getInitialFocusDate",
                      value: function () {
                        var e = this.dp,
                          t = e.focusDate,
                          a = e.currentView,
                          i = e.selectedDates,
                          r = e.parsedViewDate,
                          l = r.year,
                          c = r.month,
                          u = t || i[i.length - 1];
                        if (!u)
                          switch (a) {
                            case s:
                              u = new Date(l, c, new Date().getDate());
                              break;
                            case o:
                              u = new Date(l, c, 1);
                              break;
                            case n:
                              u = new Date(l, 0, 1);
                          }
                        return u;
                      },
                    },
                    {
                      key: "focusNextCell",
                      value: function (e) {
                        var t = this.getInitialFocusDate(),
                          a = this.dp.currentView,
                          i = s,
                          r = o,
                          l = n,
                          c = w(t),
                          u = c.year,
                          d = c.month,
                          h = c.date;
                        switch (e) {
                          case "ArrowLeft":
                            a === i && (h -= 1),
                              a === r && (d -= 1),
                              a === l && (u -= 1);
                            break;
                          case "ArrowUp":
                            a === i && (h -= 7),
                              a === r && (d -= 3),
                              a === l && (u -= 4);
                            break;
                          case "ArrowRight":
                            a === i && (h += 1),
                              a === r && (d += 1),
                              a === l && (u += 1);
                            break;
                          case "ArrowDown":
                            a === i && (h += 7),
                              a === r && (d += 3),
                              a === l && (u += 4);
                        }
                        var m = this.dp.getClampedDate(new Date(u, d, h));
                        this.dp.setFocusDate(m, {
                          viewDateTransition: !0,
                        });
                      },
                    },
                    {
                      key: "registerKey",
                      value: function (e) {
                        this.pressedKeys.add(e);
                      },
                    },
                    {
                      key: "removeKey",
                      value: function (e) {
                        this.pressedKeys.delete(e);
                      },
                    },
                  ]) &&
                    (function (e, t) {
                      for (var s = 0; s < t.length; s++) {
                        var o = t[s];
                        (o.enumerable = o.enumerable || !1),
                          (o.configurable = !0),
                          "value" in o && (o.writable = !0),
                          Object.defineProperty(e, o.key, o);
                      }
                    })(e.prototype, t),
                  e
                );
              })(),
              te = {
                on: function (e, t) {
                  this.__events || (this.__events = {}),
                    this.__events[e]
                      ? this.__events[e].push(t)
                      : (this.__events[e] = [t]);
                },
                off: function (e, t) {
                  this.__events &&
                    this.__events[e] &&
                    (this.__events[e] = this.__events[e].filter(function (e) {
                      return e !== t;
                    }));
                },
                removeAllEvents: function () {
                  this.__events = {};
                },
                trigger: function (e) {
                  for (
                    var t = arguments.length,
                      s = new Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    s[o - 1] = arguments[o];
                  this.__events &&
                    this.__events[e] &&
                    this.__events[e].forEach(function (e) {
                      e.apply(void 0, s);
                    });
                },
              };
            function se(e) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return ae(e);
                })(e) ||
                (function (e) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(e) ||
                ne(e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function oe(e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                  var s =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != s) {
                    var o,
                      n,
                      a = [],
                      i = !0,
                      r = !1;
                    try {
                      for (
                        s = s.call(e);
                        !(i = (o = s.next()).done) &&
                        (a.push(o.value), !t || a.length !== t);
                        i = !0
                      );
                    } catch (e) {
                      (r = !0), (n = e);
                    } finally {
                      try {
                        i || null == s.return || s.return();
                      } finally {
                        if (r) throw n;
                      }
                    }
                    return a;
                  }
                })(e, t) ||
                ne(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function ne(e, t) {
              if (e) {
                if ("string" == typeof e) return ae(e, t);
                var s = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === s && e.constructor && (s = e.constructor.name),
                  "Map" === s || "Set" === s
                    ? Array.from(e)
                    : "Arguments" === s ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                    ? ae(e, t)
                    : void 0
                );
              }
            }
            function ae(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var s = 0, o = new Array(t); s < t; s++) o[s] = e[s];
              return o;
            }
            function ie(e, t) {
              for (var s = 0; s < t.length; s++) {
                var o = t[s];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            function re(e, t, s) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = s),
                e
              );
            }
            var le,
              ce = "",
              ue = "",
              de = "",
              he = !1,
              me = (function () {
                function e(t, r) {
                  var c = this;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                    re(this, "viewIndexes", [s, o, n]),
                    re(this, "next", function () {
                      var e = c.parsedViewDate,
                        t = e.year,
                        a = e.month;
                      switch (c.currentView) {
                        case s:
                          c.setViewDate(new Date(t, a + 1, 1));
                          break;
                        case o:
                          c.setViewDate(new Date(t + 1, a, 1));
                          break;
                        case n:
                          c.setViewDate(new Date(t + 10, 0, 1));
                      }
                    }),
                    re(this, "prev", function () {
                      var e = c.parsedViewDate,
                        t = e.year,
                        a = e.month;
                      switch (c.currentView) {
                        case s:
                          c.setViewDate(new Date(t, a - 1, 1));
                          break;
                        case o:
                          c.setViewDate(new Date(t - 1, a, 1));
                          break;
                        case n:
                          c.setViewDate(new Date(t - 10, 0, 1));
                      }
                    }),
                    re(this, "_finishHide", function () {
                      (c.hideAnimation = !1),
                        c._destroyComponents(),
                        c.$container.removeChild(c.$datepicker);
                    }),
                    re(this, "setPosition", function (e) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      if ("function" != typeof (e = e || c.opts.position)) {
                        var s,
                          o,
                          n = c.opts.isMobile,
                          a = c.$el.getBoundingClientRect(),
                          i = c.$el.getBoundingClientRect(),
                          r = c.$datepicker.offsetParent,
                          l = c.$el.offsetParent,
                          u = c.$datepicker.getBoundingClientRect(),
                          d = e.split(" "),
                          h = window.scrollY,
                          m = window.scrollX,
                          f = c.opts.offset,
                          p = d[0],
                          v = d[1];
                        if (n)
                          c.$datepicker.style.cssText = "left: 50%; top: 50%";
                        else {
                          if (
                            (r === l &&
                              r !== document.body &&
                              ((i = {
                                top: c.$el.offsetTop,
                                left: c.$el.offsetLeft,
                                width: a.width,
                                height: c.$el.offsetHeight,
                              }),
                              (h = 0),
                              (m = 0)),
                            r !== l && r !== document.body)
                          ) {
                            var k = r.getBoundingClientRect();
                            (i = {
                              top: a.top - k.top,
                              left: a.left - k.left,
                              width: a.width,
                              height: a.height,
                            }),
                              (h = 0),
                              (m = 0);
                          }
                          switch (p) {
                            case "top":
                              s = i.top - u.height - f;
                              break;
                            case "right":
                              o = i.left + i.width + f;
                              break;
                            case "bottom":
                              s = i.top + i.height + f;
                              break;
                            case "left":
                              o = i.left - u.width - f;
                          }
                          switch (v) {
                            case "top":
                              s = i.top;
                              break;
                            case "right":
                              o = i.left + i.width - u.width;
                              break;
                            case "bottom":
                              s = i.top + i.height - u.height;
                              break;
                            case "left":
                              o = i.left;
                              break;
                            case "center":
                              /left|right/.test(p)
                                ? (s = i.top + i.height / 2 - u.height / 2)
                                : (o = i.left + i.width / 2 - u.width / 2);
                          }
                          c.$datepicker.style.cssText = "left: "
                            .concat(o + m, "px; top: ")
                            .concat(s + h, "px");
                        }
                      } else
                        c.customHide = e({
                          $datepicker: c.$datepicker,
                          $target: c.$el,
                          $pointer: c.$pointer,
                          isViewChange: t,
                          done: c._finishHide,
                        });
                    }),
                    re(this, "_setInputValue", function () {
                      var e = c.opts,
                        t = c.$altField,
                        s = c.locale.dateFormat,
                        o = e.altFieldDateFormat;
                      e.altField && t && (t.value = c._getInputValue(o)),
                        (c.$el.value = c._getInputValue(s));
                    }),
                    re(this, "_getInputValue", function (e) {
                      var t = c.selectedDates,
                        s = c.opts,
                        o = s.multipleDates,
                        n = s.multipleDatesSeparator;
                      if (!t.length) return "";
                      var a = "function" == typeof e,
                        i = a
                          ? e(o ? t : t[0])
                          : t.map(function (t) {
                              return c.formatDate(t, e);
                            });
                      return a ? i : i.join(n);
                    }),
                    re(this, "_checkIfDateIsSelected", function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : s,
                        o = !1;
                      return (
                        c.selectedDates.some(function (s) {
                          var n = D(e, s, t);
                          return (o = n && s), n;
                        }),
                        o
                      );
                    }),
                    re(this, "_scheduleCallAfterTransition", function (e) {
                      c._cancelScheduledCall(),
                        e && e(!1),
                        (c._onTransitionEnd = function () {
                          e && e(!0);
                        }),
                        c.$datepicker.addEventListener(
                          "transitionend",
                          c._onTransitionEnd,
                          {
                            once: !0,
                          }
                        );
                    }),
                    re(this, "_cancelScheduledCall", function () {
                      c.$datepicker.removeEventListener(
                        "transitionend",
                        c._onTransitionEnd
                      );
                    }),
                    re(this, "setViewDate", function (e) {
                      if ((e = O(e)) instanceof Date && !D(e, c.viewDate)) {
                        var t = c.viewDate;
                        c.viewDate = e;
                        var s = c.opts.onChangeViewDate;
                        if (s) {
                          var o = c.parsedViewDate;
                          s({
                            month: o.month,
                            year: o.year,
                            decade: c.curDecade,
                          });
                        }
                        c.trigger(a, e, t);
                      }
                    }),
                    re(this, "setFocusDate", function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      (!e || (e = O(e)) instanceof Date) &&
                        ((c.focusDate = e),
                        c.opts.range && e && c._handleRangeOnFocus(),
                        c.trigger(l, e, t));
                    }),
                    re(this, "setCurrentView", function (e) {
                      if (c.viewIndexes.includes(e)) {
                        if (
                          ((c.currentView = e),
                          c.elIsInput && c.visible && c.setPosition(void 0, !0),
                          c.trigger(i, e),
                          !c.views[e])
                        ) {
                          var t = (c.views[e] = new G({
                            dp: c,
                            opts: c.opts,
                            type: e,
                          }));
                          c.$content.appendChild(t.$el);
                        }
                        c.opts.onChangeView && c.opts.onChangeView(e);
                      }
                    }),
                    re(this, "_updateLastSelectedDate", function (e) {
                      (c.lastSelectedDate = e), c.trigger(d, e);
                    }),
                    re(this, "destroy", function () {
                      var e = c.opts,
                        t = e.showEvent,
                        s = e.isMobile,
                        o = c.$datepicker.parentNode;
                      o && o.removeChild(c.$datepicker),
                        c.$el.removeEventListener(t, c._onFocus),
                        c.$el.removeEventListener("blur", c._onBlur),
                        s && c._removeMobileAttributes(),
                        c.keyboardNav && c.keyboardNav.destroy(),
                        (c.views = null),
                        (c.nav = null),
                        (c.$datepicker = null),
                        (c.opts = null),
                        (c.$customContainer = null),
                        (c.viewDate = null),
                        (c.focusDate = null),
                        (c.selectedDates = null),
                        (c.rangeDateFrom = null),
                        (c.rangeDateTo = null);
                    }),
                    re(this, "update", function (e) {
                      var t = E({}, c.opts);
                      E(c.opts, e);
                      var o = c.opts,
                        n = o.timepicker,
                        a = o.buttons,
                        i = o.range,
                        r = o.selectedDates,
                        l = o.isMobile,
                        u = c.visible || c.treatAsInline;
                      c._createMinMaxDates(),
                        c._limitViewDateByMaxMinDates(),
                        c._handleLocale(),
                        !t.selectedDates && r && c.selectDate(r),
                        e.view && c.setCurrentView(e.view),
                        c._setInputValue(),
                        t.range && !i
                          ? ((c.rangeDateTo = !1), (c.rangeDateFrom = !1))
                          : !t.range &&
                            i &&
                            c.selectedDates.length &&
                            ((c.rangeDateFrom = c.selectedDates[0]),
                            (c.rangeDateTo = c.selectedDates[1])),
                        t.timepicker && !n
                          ? (u && c.timepicker.destroy(),
                            (c.timepicker = !1),
                            c.$timepicker.parentNode.removeChild(c.$timepicker))
                          : !t.timepicker && n && c._addTimepicker(),
                        !t.buttons && a
                          ? c._addButtons()
                          : t.buttons && !a
                          ? (c.buttons.destroy(),
                            c.$buttons.parentNode.removeChild(c.$buttons))
                          : u &&
                            t.buttons &&
                            a &&
                            c.buttons.clearHtml().render(),
                        !t.isMobile && l
                          ? (c.treatAsInline || de || c._createMobileOverlay(),
                            c._addMobileAttributes())
                          : t.isMobile && !l && c._removeMobileAttributes(),
                        u &&
                          (c.nav.update(),
                          c.views[c.currentView].render(),
                          c.currentView === s &&
                            c.views[c.currentView].renderDayNames());
                    }),
                    re(this, "isOtherMonth", function (e) {
                      return w(e).month !== c.parsedViewDate.month;
                    }),
                    re(this, "isOtherYear", function (e) {
                      return w(e).year !== c.parsedViewDate.year;
                    }),
                    re(this, "isOtherDecade", function (e) {
                      var t = w(e).year,
                        s = oe(S(c.viewDate), 2),
                        o = s[0],
                        n = s[1];
                      return t < o || t > n;
                    }),
                    re(this, "_onChangeSelectedDate", function (e) {
                      var t = e.silent;
                      setTimeout(function () {
                        c._setInputValue(),
                          c.opts.onSelect && !t && c._triggerOnSelect();
                      });
                    }),
                    re(this, "_onChangeFocusedDate", function (e) {
                      var t = (
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {}
                      ).viewDateTransition;
                      if (e) {
                        var s = !1;
                        t &&
                          (s =
                            c.isOtherMonth(e) ||
                            c.isOtherYear(e) ||
                            c.isOtherDecade(e)),
                          s && c.setViewDate(e);
                      }
                    }),
                    re(this, "_onChangeTime", function (e) {
                      var t = e.hours,
                        s = e.minutes,
                        o = new Date(),
                        n = c.lastSelectedDate,
                        a = c.opts.onSelect,
                        i = n;
                      n || (i = o);
                      var r = c.getCell(i),
                        l = r && r.adpCell;
                      (l && l.isDisabled) ||
                        (i.setHours(t),
                        i.setMinutes(s),
                        n
                          ? (c._setInputValue(), a && c._triggerOnSelect())
                          : c.selectDate(i));
                    }),
                    re(this, "_onFocus", function (e) {
                      c.visible || c.show();
                    }),
                    re(this, "_onBlur", function (e) {
                      c.inFocus || !c.visible || c.opts.isMobile || c.hide();
                    }),
                    re(this, "_onMouseDown", function (e) {
                      c.inFocus = !0;
                    }),
                    re(this, "_onMouseUp", function (e) {
                      (c.inFocus = !1), c.$el.focus();
                    }),
                    re(this, "_onClickOverlay", function () {
                      c.visible && c.hide();
                    }),
                    re(this, "isWeekend", function (e) {
                      return c.opts.weekends.includes(e);
                    }),
                    re(this, "getClampedDate", function (e) {
                      var t = c.minDate,
                        s = c.maxDate,
                        o = e;
                      return (
                        s && F(e, s) ? (o = s) : t && A(e, t) && (o = t), o
                      );
                    }),
                    (this.$el = x(t)),
                    this.$el)
                  ) {
                    (this.$datepicker = _({
                      className: "air-datepicker",
                    })),
                      (this.opts = E({}, f, r)),
                      (this.$customContainer =
                        !!this.opts.container && x(this.opts.container)),
                      (this.$altField = x(this.opts.altField || !1)),
                      ce || (ce = x("body"));
                    var u = this.opts,
                      h = u.view;
                    u.startDate || (this.opts.startDate = new Date()),
                      "INPUT" === this.$el.nodeName && (this.elIsInput = !0),
                      (this.inited = !1),
                      (this.visible = !1),
                      (this.viewDate = O(this.opts.startDate)),
                      (this.focusDate = !1),
                      (this.initialReadonly =
                        this.$el.getAttribute("readonly")),
                      (this.customHide = !1),
                      (this.currentView = h),
                      (this.selectedDates = []),
                      (this.views = {}),
                      (this.keys = []),
                      (this.rangeDateFrom = ""),
                      (this.rangeDateTo = ""),
                      (this.timepickerIsActive = !1),
                      (this.treatAsInline =
                        this.opts.inline || !this.elIsInput),
                      this.init();
                  }
                }
                var t, r, p;
                return (
                  (t = e),
                  (r = [
                    {
                      key: "init",
                      value: function () {
                        var t,
                          s = this.opts,
                          o = this.treatAsInline,
                          n = this.opts,
                          a = n.inline,
                          i = n.isMobile,
                          r = n.selectedDates,
                          l = n.keyboardNav,
                          c = n.onlyTimepicker;
                        he ||
                          a ||
                          !this.elIsInput ||
                          ((t = e.defaultContainerId),
                          (he = !0),
                          (ue = _({
                            className: t,
                            id: t,
                          })),
                          ce.appendChild(ue)),
                          !i || de || o || this._createMobileOverlay(),
                          this._handleLocale(),
                          this._bindSubEvents(),
                          this._createMinMaxDates(),
                          this._limitViewDateByMaxMinDates(),
                          this.elIsInput &&
                            (a || this._bindEvents(),
                            l &&
                              !c &&
                              (this.keyboardNav = new ee({
                                dp: this,
                                opts: s,
                              }))),
                          r &&
                            this.selectDate(r, {
                              silent: !0,
                            }),
                          this.opts.visible && !o && this.show(),
                          o && this._createComponents();
                      },
                    },
                    {
                      key: "_createMobileOverlay",
                      value: function () {
                        (de = _({
                          className: "air-datepicker-overlay",
                        })),
                          ue.appendChild(de);
                      },
                    },
                    {
                      key: "_createComponents",
                      value: function () {
                        var e,
                          t = this.opts,
                          s = this.treatAsInline,
                          o = this.opts,
                          n = o.inline,
                          a = o.buttons,
                          i = o.timepicker,
                          r = o.position,
                          l = o.classes,
                          c = o.onlyTimepicker,
                          u = o.isMobile;
                        this._buildBaseHtml(),
                          this.elIsInput && (n || this._setPositionClasses(r)),
                          (!n && this.elIsInput) ||
                            this.$datepicker.classList.add("-inline-"),
                          l &&
                            (e = this.$datepicker.classList).add.apply(
                              e,
                              se(l.split(" "))
                            ),
                          c &&
                            this.$datepicker.classList.add("-only-timepicker-"),
                          u && !s && this._addMobileAttributes(),
                          (this.views[this.currentView] = new G({
                            dp: this,
                            type: this.currentView,
                            opts: t,
                          })),
                          (this.nav = new U({
                            dp: this,
                            opts: t,
                          })),
                          i && this._addTimepicker(),
                          a && this._addButtons(),
                          this.$content.appendChild(
                            this.views[this.currentView].$el
                          ),
                          this.$nav.appendChild(this.nav.$el);
                      },
                    },
                    {
                      key: "_destroyComponents",
                      value: function () {
                        for (var e in this.views) this.views[e].destroy();
                        (this.views = {}),
                          this.nav.destroy(),
                          this.timepicker && this.timepicker.destroy();
                      },
                    },
                    {
                      key: "_addMobileAttributes",
                      value: function () {
                        de.addEventListener("click", this._onClickOverlay),
                          this.$datepicker.classList.add("-is-mobile-"),
                          this.$el.setAttribute("readonly", !0);
                      },
                    },
                    {
                      key: "_removeMobileAttributes",
                      value: function () {
                        de.removeEventListener("click", this._onClickOverlay),
                          this.$datepicker.classList.remove("-is-mobile-"),
                          this.initialReadonly ||
                            "" === this.initialReadonly ||
                            this.$el.removeAttribute("readonly");
                      },
                    },
                    {
                      key: "_createMinMaxDates",
                      value: function () {
                        var e = this.opts,
                          t = e.minDate,
                          s = e.maxDate;
                        (this.minDate = !!t && O(t)),
                          (this.maxDate = !!s && O(s));
                      },
                    },
                    {
                      key: "_addTimepicker",
                      value: function () {
                        (this.$timepicker = _({
                          className: "air-datepicker--time",
                        })),
                          this.$datepicker.appendChild(this.$timepicker),
                          (this.timepicker = new W({
                            dp: this,
                            opts: this.opts,
                          })),
                          this.$timepicker.appendChild(this.timepicker.$el);
                      },
                    },
                    {
                      key: "_addButtons",
                      value: function () {
                        (this.$buttons = _({
                          className: "air-datepicker--buttons",
                        })),
                          this.$datepicker.appendChild(this.$buttons),
                          (this.buttons = new J({
                            dp: this,
                            opts: this.opts,
                          })),
                          this.$buttons.appendChild(this.buttons.$el);
                      },
                    },
                    {
                      key: "_bindSubEvents",
                      value: function () {
                        this.on(c, this._onChangeSelectedDate),
                          this.on(l, this._onChangeFocusedDate),
                          this.on(u, this._onChangeTime);
                      },
                    },
                    {
                      key: "_buildBaseHtml",
                      value: function () {
                        var e,
                          t,
                          s = this.opts.inline;
                        this.elIsInput
                          ? s
                            ? ((e = this.$datepicker),
                              (t = this.$el).parentNode.insertBefore(
                                e,
                                t.nextSibling
                              ))
                            : this.$container.appendChild(this.$datepicker)
                          : this.$el.appendChild(this.$datepicker),
                          (this.$datepicker.innerHTML =
                            '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>'),
                          (this.$content = x(
                            ".air-datepicker--content",
                            this.$datepicker
                          )),
                          (this.$pointer = x(
                            ".air-datepicker--pointer",
                            this.$datepicker
                          )),
                          (this.$nav = x(
                            ".air-datepicker--navigation",
                            this.$datepicker
                          ));
                      },
                    },
                    {
                      key: "_handleLocale",
                      value: function () {
                        var e,
                          t = this.opts,
                          s = t.locale,
                          o = t.dateFormat,
                          n = t.firstDay,
                          a = t.timepicker,
                          i = t.onlyTimepicker,
                          r = t.timeFormat,
                          l = t.dateTimeSeparator;
                        (this.locale =
                          ((e = s), JSON.parse(JSON.stringify(e)))),
                          o && (this.locale.dateFormat = o),
                          void 0 !== r &&
                            "" !== r &&
                            (this.locale.timeFormat = r);
                        var c = this.locale.timeFormat;
                        if (
                          ("" !== n && (this.locale.firstDay = n),
                          a && "function" != typeof o)
                        ) {
                          var u = c ? l : "";
                          this.locale.dateFormat = [
                            this.locale.dateFormat,
                            c || "",
                          ].join(u);
                        }
                        i && (this.locale.dateFormat = this.locale.timeFormat);
                      },
                    },
                    {
                      key: "_setPositionClasses",
                      value: function (e) {
                        var t;
                        if ("function" != typeof e) {
                          var s = (e = e.split(" "))[0],
                            o = e[1],
                            n = "air-datepicker -"
                              .concat(s, "-")
                              .concat(o, "- -from-")
                              .concat(s, "-");
                          (t = this.$datepicker.classList).add.apply(
                            t,
                            se(n.split(" "))
                          );
                        } else
                          this.$datepicker.classList.add("-custom-position-");
                      },
                    },
                    {
                      key: "_bindEvents",
                      value: function () {
                        this.$el.addEventListener(
                          this.opts.showEvent,
                          this._onFocus
                        ),
                          this.$el.addEventListener("blur", this._onBlur),
                          this.$datepicker.addEventListener(
                            "mousedown",
                            this._onMouseDown
                          ),
                          this.$datepicker.addEventListener(
                            "mouseup",
                            this._onMouseUp
                          );
                      },
                    },
                    {
                      key: "_limitViewDateByMaxMinDates",
                      value: function () {
                        var e = this.viewDate,
                          t = this.minDate,
                          s = this.maxDate;
                        s && F(e, s) && this.setViewDate(s),
                          t && A(e, t) && this.setViewDate(t);
                      },
                    },
                    {
                      key: "formatDate",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : this.viewDate,
                          s = arguments.length > 1 ? arguments[1] : void 0;
                        if ((t = O(t)) instanceof Date) {
                          var o = s,
                            n = this.locale,
                            a = w(t),
                            i = S(t),
                            r = e.replacer,
                            l = "am";
                          this.opts.timepicker &&
                            this.timepicker &&
                            (l = this.timepicker.getDayPeriod(t).dayPeriod);
                          for (
                            var c = {
                                T: t.getTime(),
                                m: a.minutes,
                                mm: a.fullMinutes,
                                h: a.hours12,
                                hh: a.fullHours12,
                                H: a.hours,
                                HH: a.fullHours,
                                aa: l,
                                AA: l.toUpperCase(),
                                E: n.daysShort[a.day],
                                EEEE: n.days[a.day],
                                d: a.date,
                                dd: a.fullDate,
                                M: a.month + 1,
                                MM: a.fullMonth,
                                MMM: n.monthsShort[a.month],
                                MMMM: n.months[a.month],
                                yy: a.year.toString().slice(-2),
                                yyyy: a.year,
                                yyyy1: i[0],
                                yyyy2: i[1],
                              },
                              u = 0,
                              d = Object.entries(c);
                            u < d.length;
                            u++
                          ) {
                            var h = oe(d[u], 2),
                              m = h[0],
                              f = h[1];
                            o = r(o, H(m), f);
                          }
                          return o;
                        }
                      },
                    },
                    {
                      key: "down",
                      value: function (e) {
                        this._handleUpDownActions(e, "down");
                      },
                    },
                    {
                      key: "up",
                      value: function (e) {
                        this._handleUpDownActions(e, "up");
                      },
                    },
                    {
                      key: "selectDate",
                      value: function (e) {
                        var t,
                          o = this,
                          a =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          i = this.currentView,
                          r = this.parsedViewDate,
                          l = this.selectedDates,
                          u = a.updateTime,
                          d = this.opts,
                          m = d.moveToOtherMonthsOnSelect,
                          f = d.moveToOtherYearsOnSelect,
                          p = d.multipleDates,
                          v = d.range,
                          k = d.autoClose,
                          g = l.length;
                        if (Array.isArray(e))
                          return (
                            e.forEach(function (e) {
                              o.selectDate(e, a);
                            }),
                            new Promise(function (e) {
                              setTimeout(e);
                            })
                          );
                        if ((e = O(e)) instanceof Date) {
                          if (
                            (i === s &&
                              e.getMonth() !== r.month &&
                              m &&
                              (t = new Date(e.getFullYear(), e.getMonth(), 1)),
                            i === n &&
                              e.getFullYear() !== r.year &&
                              f &&
                              (t = new Date(e.getFullYear(), 0, 1)),
                            t && this.setViewDate(t),
                            p && !v)
                          ) {
                            if (g === p) return;
                            this._checkIfDateIsSelected(e) || l.push(e);
                          } else if (v)
                            switch (g) {
                              case 1:
                                l.push(e),
                                  this.rangeDateTo || (this.rangeDateTo = e),
                                  F(this.rangeDateFrom, this.rangeDateTo) &&
                                    ((this.rangeDateTo = this.rangeDateFrom),
                                    (this.rangeDateFrom = e)),
                                  (this.selectedDates = [
                                    this.rangeDateFrom,
                                    this.rangeDateTo,
                                  ]);
                                break;
                              case 2:
                                (this.selectedDates = [e]),
                                  (this.rangeDateFrom = e),
                                  (this.rangeDateTo = "");
                                break;
                              default:
                                (this.selectedDates = [e]),
                                  (this.rangeDateFrom = e);
                            }
                          else this.selectedDates = [e];
                          return (
                            this.trigger(c, {
                              action: h,
                              silent: null == a ? void 0 : a.silent,
                              date: e,
                              updateTime: u,
                            }),
                            this._updateLastSelectedDate(e),
                            k &&
                              !this.timepickerIsActive &&
                              this.visible &&
                              (p || v
                                ? v && 2 === g && this.hide()
                                : this.hide()),
                            new Promise(function (e) {
                              setTimeout(e);
                            })
                          );
                        }
                      },
                    },
                    {
                      key: "unselectDate",
                      value: function (e) {
                        var t = this,
                          s = this.selectedDates,
                          o = this;
                        if ((e = O(e)) instanceof Date)
                          return s.some(function (n, a) {
                            if (D(n, e))
                              return (
                                s.splice(a, 1),
                                o.selectedDates.length
                                  ? o._updateLastSelectedDate(
                                      o.selectedDates[
                                        o.selectedDates.length - 1
                                      ]
                                    )
                                  : ((o.rangeDateFrom = ""),
                                    (o.rangeDateTo = ""),
                                    o._updateLastSelectedDate(!1)),
                                t.trigger(c, {
                                  action: m,
                                  date: e,
                                }),
                                !0
                              );
                          });
                      },
                    },
                    {
                      key: "replaceDate",
                      value: function (e, t) {
                        var s = this,
                          o = this.selectedDates.find(function (t) {
                            return D(t, e, s.currentView);
                          }),
                          n = this.selectedDates.indexOf(o);
                        n < 0 ||
                          D(this.selectedDates[n], t, this.currentView) ||
                          ((this.selectedDates[n] = t),
                          this.trigger(c, {
                            action: h,
                            date: t,
                            updateTime: !0,
                          }),
                          this._updateLastSelectedDate(t));
                      },
                    },
                    {
                      key: "clear",
                      value: function () {
                        (this.selectedDates = []),
                          (this.rangeDateFrom = !1),
                          (this.rangeDateTo = !1),
                          this.trigger(c, {
                            action: m,
                          });
                      },
                    },
                    {
                      key: "show",
                      value: function () {
                        var e = this.opts,
                          t = e.onShow,
                          s = e.isMobile;
                        this._cancelScheduledCall(),
                          this.visible ||
                            this.hideAnimation ||
                            this._createComponents(),
                          this.setPosition(this.opts.position),
                          this.$datepicker.classList.add("-active-"),
                          (this.visible = !0),
                          t && this._scheduleCallAfterTransition(t),
                          s && de.classList.add("-active-");
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        var e = this,
                          t = this.opts,
                          s = t.onHide,
                          o = t.isMobile,
                          n = this._hasTransition();
                        (this.visible = !1),
                          (this.hideAnimation = !0),
                          this.$datepicker.classList.remove("-active-"),
                          this.customHide && this.customHide(),
                          this.elIsInput && this.$el.blur(),
                          this._scheduleCallAfterTransition(function (t) {
                            !e.customHide &&
                              ((t && n) || (!t && !n)) &&
                              e._finishHide(),
                              s && s(t);
                          }),
                          o && de.classList.remove("-active-");
                      },
                    },
                    {
                      key: "_triggerOnSelect",
                      value: function () {
                        var e = this,
                          t = [],
                          s = [],
                          o = this,
                          n = o.selectedDates,
                          a = o.locale,
                          i = o.opts,
                          r = i.onSelect,
                          l = i.multipleDates,
                          c = "function" == typeof a.dateFormat;
                        n.length &&
                          ((t = n.map(M)),
                          (s = c
                            ? l
                              ? a.dateFormat(t)
                              : t.map(function (e) {
                                  return a.dateFormat(e);
                                })
                            : t.map(function (t) {
                                return e.formatDate(t, a.dateFormat);
                              }))),
                          r({
                            date: l ? t : t[0],
                            formattedDate: l ? s : s[0],
                            datepicker: o,
                          });
                      },
                    },
                    {
                      key: "_handleAlreadySelectedDates",
                      value: function (e, t) {
                        var s = this.opts,
                          o = s.range,
                          n = s.toggleSelected;
                        o
                          ? n
                            ? this.unselectDate(t)
                            : 2 !== this.selectedDates.length &&
                              this.selectDate(t)
                          : n && this.unselectDate(t),
                          n || this._updateLastSelectedDate(e);
                      },
                    },
                    {
                      key: "_handleUpDownActions",
                      value: function (e, t) {
                        if (
                          (e = O(
                            e || this.focusDate || this.viewDate
                          )) instanceof Date
                        ) {
                          var s =
                            "up" === t
                              ? this.viewIndex + 1
                              : this.viewIndex - 1;
                          s > 2 && (s = 2),
                            s < 0 && (s = 0),
                            this.setViewDate(
                              new Date(e.getFullYear(), e.getMonth(), 1)
                            ),
                            this.setCurrentView(this.viewIndexes[s]);
                        }
                      },
                    },
                    {
                      key: "_handleRangeOnFocus",
                      value: function () {
                        1 === this.selectedDates.length &&
                          (F(this.selectedDates[0], this.focusDate)
                            ? ((this.rangeDateTo = this.selectedDates[0]),
                              (this.rangeDateFrom = this.focusDate))
                            : ((this.rangeDateTo = this.focusDate),
                              (this.rangeDateFrom = this.selectedDates[0])));
                      },
                    },
                    {
                      key: "getCell",
                      value: function (e) {
                        var t,
                          s =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "day";
                        if ((i = O(e)) instanceof Date) {
                          var o = w(i),
                            n = o.year,
                            a = o.month,
                            i = o.date,
                            r = '[data-year="'.concat(n, '"]'),
                            l = '[data-month="'.concat(a, '"]'),
                            c = '[data-date="'.concat(i, '"]'),
                            u =
                              (re(
                                (t = {}),
                                "day",
                                "".concat(r).concat(l).concat(c)
                              ),
                              re(t, "month", "".concat(r).concat(l)),
                              re(t, "year", "".concat(r)),
                              t);
                          return this.views[this.currentView].$el.querySelector(
                            u[s]
                          );
                        }
                      },
                    },
                    {
                      key: "_hasTransition",
                      value: function () {
                        return (
                          window
                            .getComputedStyle(this.$datepicker)
                            .getPropertyValue("transition-duration")
                            .split(", ")
                            .reduce(function (e, t) {
                              return parseFloat(t) + e;
                            }, 0) > 0
                        );
                      },
                    },
                    {
                      key: "parsedViewDate",
                      get: function () {
                        return w(this.viewDate);
                      },
                    },
                    {
                      key: "curDecade",
                      get: function () {
                        return S(this.viewDate);
                      },
                    },
                    {
                      key: "viewIndex",
                      get: function () {
                        return this.viewIndexes.indexOf(this.currentView);
                      },
                    },
                    {
                      key: "isFinalView",
                      get: function () {
                        return this.currentView === n;
                      },
                    },
                    {
                      key: "hasSelectedDates",
                      get: function () {
                        return this.selectedDates.length > 0;
                      },
                    },
                    {
                      key: "isMinViewReached",
                      get: function () {
                        return (
                          this.currentView === this.opts.minView ||
                          this.currentView === s
                        );
                      },
                    },
                    {
                      key: "$container",
                      get: function () {
                        return this.$customContainer || ue;
                      },
                    },
                  ]),
                  (p = [
                    {
                      key: "replacer",
                      value: function (e, t, s) {
                        return e.replace(t, function (e, t, o, n) {
                          return t + s + n;
                        });
                      },
                    },
                  ]),
                  r && ie(t.prototype, r),
                  p && ie(t, p),
                  e
                );
              })();
            return (
              re(me, "defaults", f),
              re(me, "version", "3.1.0"),
              re(me, "defaultContainerId", "air-datepicker-global-container"),
              (le = me.prototype),
              Object.assign(le, te),
              t.default
            );
          })();
        }),
        "object" == r(t) && "object" == r(e)
          ? (e.exports = i())
          : ((n = []),
            void 0 === (a = "function" == typeof (o = i) ? o.apply(t, n) : o) ||
              (e.exports = a));
    },
    519670: function (e, t, s) {
      var o = s(619755);
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      var a = s(619755),
        i = s(182575).JsEventListener,
        r = "show-re-auth-modal",
        l = "disable-show-re-auth-modal";
      function c(e, t, s) {
        var o = a("#modal_re_auth_content").html();
        window.icHelper.showModal(
          o.replace("__message__", e).replace("__type_message__", t),
          void 0,
          void 0,
          "modal-img modal-img-reauthorization",
          void 0,
          void 0,
          s
        ),
          (document.cookie =
            r + "-is=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
          (document.cookie =
            r + "-message=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
          (document.cookie =
            r +
            "-type_message=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
      }
      function u(e) {
        var t = "; ".concat(document.cookie).split("; ".concat(e, "="));
        if (2 === t.length)
          return decodeURIComponent(t.pop().split(";").shift());
      }
      function d(e) {
        window.location.href = e;
      }
      function h(e) {
        if ("object" === n(e) && void 0 !== n(e.model) && "JsEvent" === e.model)
          return e;
        try {
          var t = JSON.parse(e);
          return void 0 !== n(t.model) && "JsEvent" === t.model && t;
        } catch (t) {
          return console.log(n(e)), !1;
        }
      }
      (o.authAjax = function (e) {
        a.ajax({
          url: Routing.generate("api_access_check_path"),
          method: "POST",
          data: {
            info_url: e.url,
          },
          success: function (t) {
            var s = h(t);
            !1 !== s
              ? (window.icHelper.removeLoader(),
                i.handleEvent(s).then(function (t) {
                  window.icHelper.removeLoader(),
                    "auth_auto_change" === t.type && "true" === u(r + "-is")
                      ? c(
                          u(r + "-message"),
                          u(r + "-type_message"),
                          function () {
                            window.icHelper.loaderSpin(),
                              a.ajax(e).then(function () {
                                window.icHelper.removeLoader();
                              });
                          }
                        )
                      : (window.icHelper.loaderSpin(),
                        a.ajax(e).then(function () {
                          window.icHelper.removeLoader();
                        }));
                }))
              : (window.icHelper.loaderSpin(),
                a.ajax(e).then(function () {
                  window.icHelper.removeLoader();
                }));
          },
          error: function (e, t, s) {},
        });
      }),
        a(function () {
          a(document).on("click", ".ajaxChangeCompany", function (e) {
            window.icHelper.loaderSpin(),
              e.preventDefault(),
              e.stopPropagation();
            var t = a(this).attr("data-company"),
              s = a(this).attr("data-type");
            a.ajax({
              type: "POST",
              url: Routing.generate("api_auth_change_user_company"),
              data: JSON.stringify({
                c: t,
                ct: s,
              }),
              success: function (e) {
                var t = new Event("reload_auth_info");
                document.dispatchEvent(t),
                  a("body").trigger("changeCompanyEvent");
              },
              contentType: "application/json",
              dataType: "json",
            });
          }),
            a(document).on("changeCompanyEvent", "body", function (e) {
              console.log(e), d(a(this).attr("data-after_change_auth"));
            }),
            a(document).on("change", "#re-auth-mod-disable", function (e) {
              var t;
              this.checked
                ? ((t = new Date()).setMonth(t.getMonth() + 2),
                  (document.cookie =
                    l + "=true; expires=" + t.toUTCString() + "; path=/"))
                : (document.cookie = l + "=false; path=/");
            }),
            a(document).on("click", ".chkAccUri", function (e) {
              e.preventDefault(), e.stopPropagation();
              var t = a(this).attr("href");
              window.icHelper.loaderSpin(),
                a.ajax({
                  url: Routing.generate("api_access_check_path"),
                  method: "POST",
                  data: {
                    info_url: t,
                  },
                  success: function (e) {
                    var s = h(e);
                    !1 !== s
                      ? (window.icHelper.removeLoader(),
                        i.handleEvent(s).then(
                          function (e) {
                            d(t);
                          },
                          function (e) {}
                        ))
                      : (window.icHelper.loaderSpin(), d(t));
                  },
                  error: function (e) {
                    var s = h(e);
                    !1 !== s
                      ? (window.icHelper.removeLoader(),
                        i.handleEvent(s).then(function () {
                          d(t);
                        }))
                      : (window.icHelper.loaderSpin(), d(t));
                  },
                });
            });
        }),
        document.addEventListener("DOMContentLoaded", function () {
          "true" === u(r + "-is") &&
            c(u(r + "-message"), u(r + "-type_message"));
        });
    },
    182575: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          JsEventListener: function () {
            return a;
          },
        });
      var o = s(619755),
        n = s.n(o),
        a = {
          handleEvent: function (e) {
            return new Promise(function (t, s) {
              switch (e.type) {
                case "go_url":
                case "ajax_call":
                  break;
                case "redirect":
                case "auth_required":
                  window.location.href = e.show_url;
                  break;
                case "change_auth":
                  (function (e) {
                    return new Promise(function (t, s) {
                      icHelper.removeLoader(),
                        n()("body").attr("data-after_change_auth", e.show_url),
                        void 0 !== e.data.companyList &&
                          (1 === e.data.companyList.length
                            ? n()
                                .post(
                                  Routing.generate(
                                    "api_auth_change_user_company"
                                  ),
                                  {
                                    company: e.data.companyList[0].id,
                                  }
                                )
                                .done(function () {
                                  t(!0);
                                })
                            : e.data.companyList.length > 1
                            ? n().ajax({
                                type: "POST",
                                url: Routing.generate("api_auth_ch_user_tpl"),
                                data: JSON.stringify({
                                  cl: e.data.companyList,
                                }),
                                success: function (e) {
                                  icHelper.showModal(
                                    e.template,
                                    void 0,
                                    void 0,
                                    "modal-reload"
                                  );
                                },
                                contentType: "application/json",
                                dataType: "json",
                              })
                            : (window.icHelper.loaderSpin(),
                              n().ajax({
                                type: "POST",
                                url: Routing.generate(
                                  "api_auth_change_user_company_phys"
                                ),
                                success: function (e) {
                                  t(!0);
                                },
                                contentType: "application/json",
                                dataType: "json",
                              })));
                    });
                  })(e).then(function () {
                    return t(e);
                  });
                  break;
                case "auth_auto_change":
                  var o = new Event("reload_auth_info");
                  document.dispatchEvent(o),
                    (function (e) {
                      return new Promise(function (t, s) {
                        "true" !==
                          (function (e) {
                            var t = "; "
                              .concat(document.cookie)
                              .split("; ".concat(e, "="));
                            if (2 === t.length)
                              return t.pop().split(";").shift();
                          })("disable-show-re-auth-modal") &&
                          ((document.cookie =
                            "show-re-auth-modal-is=true; path=/"),
                          (document.cookie =
                            "show-re-auth-modal-message=" +
                            encodeURIComponent(e.message) +
                            "; path=/"),
                          (document.cookie =
                            "show-re-auth-modal-type_message=" +
                            encodeURIComponent(e.type_message) +
                            "; path=/")),
                          t(!0);
                      });
                    })(e).then(function () {
                      return t(e);
                    });
                  break;
                case "show_message":
                  (function (e) {
                    return new Promise(function (t, s) {
                      var o = e.message,
                        a = void 0;
                      "ul_only" === e.sub &&
                        ((o = n()("#modal_need_ul_auth_contents").html()),
                        (a = "modal-img modal-img-reauthorization")),
                        window.icHelper.showModal(
                          o,
                          e.name,
                          null,
                          a,
                          null,
                          null,
                          function () {
                            t(e);
                          }
                        );
                    });
                  })(e).then(function (e) {
                    e.is_error ? s(e) : t(e);
                  });
                  break;
                default:
                  t(!0);
              }
            });
          },
        };
    },
    996960: function () {
      window.yametrika = {
        goal: function (e, t, s) {
          "undefined" != typeof ym
            ? void 0 !== s
              ? ym(e, "reachGoal", t, s)
              : ym(e, "reachGoal", t)
            : console.log(
                "ym is undefined, called: " + e + " ym called params:",
                t,
                void 0 !== s ? s : {}
              );
        },
      };
    },
    133204: function (e, t) {
      var s, o, n, a;
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      (a = function (e) {
        var t,
          s,
          o,
          n = "pomekhchngaooffdadfjnghfkaeipoba",
          a =
            ((s = navigator.userAgent),
            (o =
              s.match(
                /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
              ) || []),
            /trident/i.test(o[1])
              ? "IE " + ((t = /\brv[ :]+(\d+)/g.exec(s) || [])[1] || "")
              : "Chrome" === o[1] &&
                null !== (t = s.match(/\b(OPR|Edge)\/(\d+)/))
              ? t.slice(1).join(" ").replace("OPR", "Opera")
              : ((o = o[2]
                  ? [o[1], o[2]]
                  : [navigator.appName, navigator.appVersion, "-?"]),
                null !== (t = s.match(/version\/(\d+)/i)) &&
                  o.splice(1, 1, t[1]),
                o));
        function i() {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              arguments[0].apply(e);
              break;
            default:
              var t = Array.prototype.slice.call(arguments, 1);
              arguments[0].apply(e, t);
          }
        }
        e.createFactory = function (t, s, o, r) {
          var l = c(r);
          if (r && 4 != l.length)
            throw (
              (console.error(
                "The specified plugin's version (" +
                  r +
                  ") has incorrect format. Example of the correct format: '1.0.0.0'"
              ),
              "plugin_wrong_version")
            );
          return "Chrome" === a[0] ||
            ("Firefox" === a[0] && parseInt(a[1].split(".")[0]) >= 52)
            ? function (t, r) {
                var l = e.plugin;
                if (l) i(t, l);
                else {
                  var c = !1,
                    d = !1,
                    h = "blitzsc_fwcb",
                    m =
                      "https://identityblitz.ru/products/smart-card-plugin/files/blitz_smart_card_plugin-1.1.10-an+fx.xpi",
                    f = "sha1:DA80BDDE3922C28A8A93F1F0A790FA111449CA03";
                  -1 !==
                  document.documentElement.className.indexOf(
                    "BlitzScPluginAdapter"
                  )
                    ? (k(t, r),
                      window.postMessage(
                        {
                          firebreath: "Reaxoft",
                          callback: h,
                        },
                        "*"
                      ))
                    : "Chrome" === a[0]
                    ? i(
                        r,
                        "chrome_extension_not_available",
                        "https://chrome.google.com/webstore/detail/" + n,
                        g
                      )
                    : i(
                        r,
                        "firefox_extension_not_available",
                        "https://addons.mozilla.org/ru/firefox/addon/blitz-smart-card-plugin-add-on/",
                        g,
                        m,
                        b
                      );
                }
                function p(e, t, o) {
                  new (0, window.FireWyrmJS)(e).create(s, {}).then(
                    function (e) {
                      u(e, t, o);
                    },
                    function (e) {
                      i(o, "plugin_not_available", e), console.error(e);
                    }
                  );
                }
                function v(e) {
                  return function (t, n) {
                    var a = "blitzsc_fwcb_wait_wyrmhole_check";
                    function i() {
                      e.create(void 0, s, o).then(
                        function (e) {
                          (d = !0), p(e, t, n);
                        },
                        function (e) {
                          setTimeout(window[a], 3e3);
                        }
                      );
                    }
                    (window[a] = function () {
                      d || i();
                    }),
                      i();
                  };
                }
                function k(e, t) {
                  window[h] = function (n) {
                    c = !0;
                    var a = n.wyrmhole;
                    a.create(void 0, s, o).then(
                      function (s) {
                        (d = !0), p(s, e, t);
                      },
                      function (s) {
                        i(t, "plugin_not_available", s, v(a, e, t)),
                          console.error("Error instantiating the wyrmhole:", s);
                      }
                    );
                  };
                }
                function g(e, t) {
                  var s = "blitzsc_fwcb_check";
                  (window[s] = function () {
                    c ||
                      (window.postMessage(
                        {
                          firebreath: "Reaxoft",
                          callback: h,
                        },
                        "*"
                      ),
                      setTimeout(window[s], 3e3));
                  }),
                    k(e, t),
                    window.postMessage(
                      {
                        firebreath: "Reaxoft",
                        callback: h,
                      },
                      "*"
                    ),
                    setTimeout(window[s], 3e3);
                }
                function b() {
                  var e = {
                    BlitzScPluginAdapter: {
                      URL: m,
                      Hash: f,
                      toString: function () {
                        return this.URL;
                      },
                    },
                  };
                  InstallTrigger.install(e);
                }
              }
            : function (o, n) {
                var a = e.plugin;
                function r() {
                  if (!(a = document.getElementById("blitzScPlugin"))) {
                    var e = document.createElement("object");
                    e.setAttribute("id", "blitzScPlugin"),
                      e.setAttribute("type", s),
                      e.setAttribute("height", 0),
                      e.setAttribute("width", 0),
                      document.body.appendChild(e),
                      (a = document.getElementById("blitzScPlugin"));
                  }
                }
                function l(e, t) {
                  function s() {
                    "valid" in (a = document.getElementById("blitzScPlugin"))
                      ? u(a, e, t)
                      : setTimeout(s, 3e3);
                  }
                  s();
                }
                function c(e) {
                  if (!navigator || !navigator.plugins) return !1;
                  for (var t = 0; t < navigator.plugins.length; t++)
                    if (-1 != navigator.plugins[t].name.indexOf(e)) return !0;
                  return !1;
                }
                function d(e, s) {
                  function o() {
                    if ((r(), "valid" in a)) u(a, e, s);
                    else {
                      var n = navigator && navigator.plugins;
                      n && navigator.plugins.refresh(),
                        n && c(t)
                          ? i(s, "plugin_not_allowed", "", l)
                          : (a.parentNode.removeChild(a), setTimeout(o, 3e3));
                    }
                  }
                  o();
                }
                a
                  ? i(o, a)
                  : (r(),
                    "valid" in a
                      ? u(a, o, n)
                      : c(t)
                      ? i(n, "plugin_not_allowed", "", l)
                      : (a.parentNode.removeChild(a),
                        i(n, "plugin_not_available", "", d)));
              };
          function c(e) {
            for (
              var t = null != e ? e.split(".") : [], s = [], o = 0;
              o < t.length;
              o++
            )
              s.push(parseInt(t[o]));
            return s;
          }
          function u(t, s, o) {
            function n(e) {
              i(o, "plugin_not_valid", e), console.error(e);
            }
            function a() {
              (e.plugin = t), i(s, t);
            }
            t.valid.then(function (e) {
              e
                ? r
                  ? t.version.then(function (e) {
                      for (var t = c(e), s = !0, n = 0; n < t.length; n++) {
                        if (t[n] > l[n]) {
                          s = !0;
                          break;
                        }
                        if (t[n] < l[n]) {
                          s = !1;
                          break;
                        }
                      }
                      s ? a() : i(o, "plugin_old_version", e);
                    }, n)
                  : a()
                : i(o, "plugin_not_valid");
            }, n);
          }
        };
      }),
        "object" === i(t) && t && "string" != typeof t.nodeName
          ? a(t)
          : ((o = [t]),
            void 0 === (n = "function" == typeof (s = a) ? s.apply(t, o) : s) ||
              (e.exports = n));
    },
    858566: function (e, t, s) {
      var o = s(619755);
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      function a(e, t) {
        for (var s = 0; s < t.length; s++) {
          var o = t[s];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, r(o.key), o);
        }
      }
      function i(e, t, s) {
        return (
          (t = r(t)) in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function r(e) {
        var t = (function (e, t) {
          if ("object" !== n(e) || null === e) return e;
          var s = e[Symbol.toPrimitive];
          if (void 0 !== s) {
            var o = s.call(e, t || "default");
            if ("object" !== n(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === n(t) ? t : String(t);
      }
      window.SignPluginBlitz = (function () {
        "use strict";
        function e(t, s, o, a) {
          var r, l;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            i(
              this,
              "processingTemplate",
              '<div id="processing" class="media sign_loader {{#warn}}sign_loader_error{{/warn}}"><div class="media-body"><div class="loader_all"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#c8c8c8"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18" stroke="#16FF00"><animateTransform attributeName="transform"  type="rotate"  from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg><div class="loader-progress"></div></div><h4 class="media-heading {{#warn}}text-danger{{/warn}}">{{{ title }}}</h4><p>{{{ msg }}}</p></div></div>'
            ),
            i(
              this,
              "errorTemplate",
              '<p class="text-danger">{{{ error }}}</p> {{#msg}}<p>{{{ msg }}}</p>{{/msg}}'
            ),
            i(
              this,
              "certsTemplate",
              '<div class="sign_tit2">Нажмите на сертификат ключа проверки электронной подписи</div><div class="list-group sign_list_group">{{#certs}}<a id="{{ id }}" href="#" class="sign_company list-group-item {{#expired}}list-group-item-danger disabled{{/expired}} {{^expired}}list-group-item-success{{/expired}}"><h4 class="list-group-item-heading">{{ subject.CN }}</h4>{{#subject.emailAddress}}<div class="sign_company_text1">{{ subject.emailAddress }}</div>{{/subject.emailAddress}}<div class="sign_company_text1">{{#subject.SN}}{{ subject.SN }}{{/subject.SN}}{{#subject.GN}} {{ subject.GN }}{{/subject.GN}}</div><div class="sign_company_text2"><span class="sct_sp1">Кем выдан:</span><span class="sct_sp2">{{ issuer.CN }}</span></div>{{#expired}}<div class="text-warning">Просрочен</div>{{/expired}}</a>{{/certs}}</div><div class="sign_refresh_div"><div id="refresh" class="btn_icons btn_icons3"><span>Обновить</span><i class="obj_icon"></i></div></div>'
            ),
            i(
              this,
              "blitzscMsgs",
              ((l = {
                "blitzsc.err.signFailed":
                  "Произошла ошибка при попытке подписать данные на выбранном сертификате.",
                "blitzsc.err.initPKCS11":
                  "Ошибка инициализации модуля работы с токенами. Обратитесь в техническую поддержку. Ошибка: {0}.",
                "blitzsc.err.chrome_extension_not_available":
                  "blitzsc.err.chrome_extension_not_available",
                "blitzsc.err.canceledByUser": "Операция отменена.",
                "blitzsc.status.waitingActivationPlugin.msg":
                  "Ожидание активации плагина.",
                "blitzsc.status.sending.title":
                  "Обработка электронной подписи.",
                "blitzsc.err.plugin_not_available":
                  "blitzsc.err.plugin_not_available",
                "blitzsc.status.waitingExtension.title":
                  "Для работы со средством электронной подписи активируйте или установите <a href=\"{0}\" target=\"_blank\" style=\"color:#337ab7\">расширение для Chrome</a>. Примечание: если демо-страница открыта с файловой системы, то убедитесь, что у расширения 'Blitz plugin adapter' стоит галочка 'Разрешить открывать файлы по ссылкам' ('Allow access to file URLs').",
                "blitzsc.status.waitingFirefoxExtension.title":
                  'Для работы со средством электронной подписи активируйте или установите <a href="{0}" onclick="return installFirefoxExtention(event);" style="color:#337ab7">расширение для Firefox</a>.',
                "blitzsc.status.interaction.title": "Пожалуйста, подождите",
                "blitzsc.err.getCertsForSign":
                  "Ошибка получения списка сертификатов. Обратитесь в техническую поддержку. Ошибка: {0}.",
                "blitzsc.msg.again": "Повторить",
                "blitzsc.err.plugin_not_allowed":
                  "blitzsc.err.plugin_not_allowed",
                "blitzsc.status.waitingPlugin.title":
                  'Плагин не установлен или используется старая версия плагина. Для работы со средством электронной подписи установите актуальную версию плагина: <a href="https://login.mos.ru/public/plugin.html" style="color:#337ab7">Скачать</a>.',
                "blitzsc.err.common":
                  "Произошла ошибка при обращении к плагину.",
                "blitzsc.err.plugin_old_version":
                  'У Вас установлена старая версия плагина. Пожалуйста, установите новую версию плагина: <a href="https://login.mos.ru/public/plugin.html" style="color:#337ab7">Скачать</a>.',
                "blitzsc.status.waitingExtension.msg":
                  "Ожидание установки расширения.",
                "blitzsc.err.noModules":
                  "В системе не установлено ни одного модуля для работы со средством электронной подписи или они работают некорректно.",
                "blitzsc.status.waitingCerts.msg":
                  "Поиск сертификатов на подключенных средствах электронной подписи.",
                "blitzsc.status.waitingActivationPlugin.title":
                  "Плагин заблокирован, пожалуйста, активируйте плагин.",
                "blitzsc.status.waitingCerts.title":
                  "Подсоедините средство электронной подписи к компьютеру",
                "blitzsc.err.plugin_not_valid":
                  "Плагин работает некорректно. Переустановите плагин или обратитесь в техническую поддержку.",
                "blitzsc.err.noCertsForSign":
                  "Подсоедините средство электронной подписи к комьютеру.",
                "blitzsc.status.interaction.msg":
                  "Идет обращение к средству электронной подписи...",
                "blitzsc.status.waitingPlugin.msg":
                  "Ожидание установки плагина.",
                "blitzsc.err.attemptsIsExceeded":
                  "Убедитесь, что вы выбрали корректный сертификат. Будьте внимательны, большое количество неуспешных попыток ввода пин-кода может привести к блокировке средства электронной подписи.",
                "blitzsc.err.cryptokiUsageConflict":
                  "Невозможно получить доступ к средству электронной подписи. Вероятно, оно используется другим приложением. Проверьте настройки криптопровайдера (например, ViPNet CSP) или обратитесь в службу технической поддержки.",
              }),
              function (e) {
                var t;
                if ("object" == n(e)) {
                  for (var s = 0; s < e.length && l[e[s]] !== r; s++);
                  t = l[e[s]] || e[0];
                } else t = l[e] !== r ? l[e] : e;
                for (s = 1; s < arguments.length; s++)
                  t = t.replace("{" + (s - 1) + "}", arguments[s]);
                return t;
              })
            ),
            (this.container = t),
            (this.file = s),
            (this.callbackSuccess = o),
            (this.callbackFail = a);
        }
        var t, s, r;
        return (
          (t = e),
          (s = [
            {
              key: "init",
              value: function () {
                return "object" !==
                  ("undefined" == typeof mustache ? "undefined" : n(mustache))
                  ? (console.error("Необходимо инициализировать mustache"),
                    void (
                      "function" == typeof this.callbackFail &&
                      this.callbackFail()
                    ))
                  : "object" !==
                    ("undefined" == typeof Blitzsc ? "undefined" : n(Blitzsc))
                  ? (console.error("Необходимо инициализировать Blitzsc"),
                    void (
                      "function" == typeof this.callbackFail &&
                      this.callbackFail()
                    ))
                  : (mustache.parse(this.processingTemplate),
                    mustache.parse(this.errorTemplate),
                    mustache.parse(this.certsTemplate),
                    (this.pFactory = Blitzsc.createFactory(
                      "Blitz Smart Card Plugin",
                      "application/x-blitz-sc-plugin",
                      "ru.reaxoft.firewyrmhost",
                      "1.6.0.0"
                    )),
                    this.showProcessing(
                      this.blitzscMsgs("blitzsc.status.interaction.title"),
                      this.blitzscMsgs("blitzsc.status.interaction.msg"),
                      !1
                    ),
                    void this.pFactory(
                      this.successFactory.bind(this),
                      this.failFactory.bind(this)
                    ));
              },
            },
            {
              key: "showProcessing",
              value: function (e, t, s) {
                var n = {
                  title: e,
                  msg: t,
                };
                s && (n.warn = s);
                var a = o(mustache.render(this.processingTemplate, n));
                this.container.html(a);
              },
            },
            {
              key: "retain",
              value: function (e) {
                "function" == typeof e.retain && e.retain();
              },
            },
            {
              key: "extractErrorMessage",
              value: function (e) {
                var t;
                switch (n(e)) {
                  case "string":
                    t = e;
                    break;
                  case "object":
                    t = e && e.message ? e.message : "unknown";
                    break;
                  default:
                    t = "unknown";
                }
                return t;
              },
            },
            {
              key: "showError",
              value: function (e, t) {
                var s = {
                  error: e,
                  msg: t,
                };
                this.container.html(mustache.render(this.errorTemplate, s)),
                  "function" == typeof this.callbackFail &&
                    this.callbackFail(s);
              },
            },
            {
              key: "showCommonError",
              value: function (e) {
                this.showError(this.blitzscMsgs("blitzsc.err.common")),
                  console.error(e);
              },
            },
            {
              key: "sign",
              value: function (e, t, s) {
                var n = this;
                this.showProcessing(
                  this.blitzscMsgs("blitzsc.status.interaction.title"),
                  this.blitzscMsgs("blitzsc.status.interaction.msg")
                ),
                  t[s].cert.start_signing(!1, 3).then(function (e) {
                    u.retain(e), (window.signer = e);
                    var t =
                      '<div id="fileSigningProgress" class="sign_line_proc" style="display:none"><div class="sign_tit2">Подписание файл' +
                      ("[object Array]" ===
                      Object.prototype.toString.call(u.file)
                        ? "ов"
                        : "а") +
                      ':</div><div class="progress"><div style="width:0%" class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div></div>';
                    u.container.append(t),
                      o("#processing").length && o("#processing").hide();
                    var s = u.container.find("#fileSigningProgress"),
                      n = s.find(".progress-bar");
                    if (
                      (s.show(),
                      Date.now(),
                      "[object Array]" ===
                        Object.prototype.toString.call(u.file))
                    ) {
                      console.log(u.file);
                      var d = [],
                        h = [];
                      for (var m in u.file) d.push(m);
                      !(function e(t) {
                        if (t in d) {
                          var s = d[t];
                          "[object String]" ===
                          Object.prototype.toString.call(u.file[s])
                            ? icHelper.downloadFileByLink(u.file[s], o)
                            : o(u.file[s]);
                        } else
                          setTimeout(function () {
                            a(h);
                          }, 1e3);
                        function o(o) {
                          l(
                            o,
                            function (e, t, s, o) {
                              var a = new Uint8Array(e),
                                i = btoa(c(a));
                              window.signer
                                .add_data_in_base64(i)
                                .then(function (e) {
                                  var a = Math.round((s / o) * 100);
                                  n.width(a + "%"), t();
                                });
                            },
                            function () {
                              n.width("100%"),
                                window.signer.finish().then(function (o) {
                                  (h[s] = o), e(t + 1);
                                }, r);
                            }
                          );
                        }
                      })(0);
                    } else
                      l(
                        u.file,
                        function (t, s, o, a) {
                          var i = new Uint8Array(t),
                            r = btoa(c(i));
                          e.add_data_in_base64(r).then(function (e) {
                            var t = Math.round((o / a) * 100);
                            n.width(t + "%"), s();
                          });
                        },
                        function () {
                          n.width("100%");
                          var t = e.finish();
                          e.free(), t.then(i, r);
                        }
                      );
                  }, r);
                var a = function (e) {
                    n.container.html(""),
                      "function" == typeof n.callbackSuccess &&
                        n.callbackSuccess({
                          signatures: e,
                          sertData: t[s],
                          files: n.file,
                        }),
                      window.signer.free();
                  },
                  i = function (a) {
                    console.log(a), n.container.html("");
                    var i = o("#signatureBlock"),
                      r = o("#repeat-sign");
                    "function" == typeof n.callbackSuccess &&
                      n.callbackSuccess({
                        signature: a,
                        sertData: t[s],
                        file: n.file,
                      }),
                      r.off("click"),
                      r.on("click", function () {
                        i.hide(), n.renderCerts(e, t);
                      }),
                      i.show();
                  },
                  r = function (e) {
                    console.log(e);
                    var t = n.extractErrorMessage(e),
                      s = null;
                    switch (t.split(":")[0]) {
                      case "1":
                        s = "blitzsc.err.canceledByUser";
                        break;
                      case "290":
                        s = "blitzsc.err.cryptokiUsageConflict";
                        break;
                      default:
                        s = "blitzsc.err.signFailed";
                    }
                    n.showError(n.blitzscMsgs(s), ""), console.error(t);
                  },
                  l = function (e, t, s) {
                    var o = e.size,
                      a = 1048576,
                      i = 0,
                      r = null,
                      l = function (l) {
                        if (null != l.target.error)
                          return (
                            console.error("Read error: " + l.target.error),
                            void n.showError(
                              "Ошибка чтения файла: " + l.target.error
                            )
                          );
                        t(
                          l.target.result,
                          function () {
                            (i += l.target.result.byteLength) >= o
                              ? s()
                              : r(i, a, e);
                          },
                          i,
                          o
                        );
                      };
                    (r = function (e, t, s) {
                      var o,
                        n = new FileReader();
                      s.slice
                        ? (o = s.slice(e, t + e))
                        : s.webkitSlice
                        ? (o = s.webkitSlice(e, t + e))
                        : s.mozSlice && (o = s.mozSlice(e, t + e)),
                        (n.onload = l),
                        n.readAsArrayBuffer(o);
                    })(i, a, e);
                  },
                  c = function (e) {
                    for (var t = [], s = 0; s < e.length; s += 32768)
                      t.push(
                        String.fromCharCode.apply(
                          null,
                          e.subarray(s, s + 32768)
                        )
                      );
                    return t.join("");
                  },
                  u = this;
              },
            },
            {
              key: "renderCerts",
              value: function (e, t) {
                for (
                  var s = this,
                    n = this,
                    a = {
                      certs: [],
                    },
                    i = o("#last-cert-sn").val(),
                    r = 0;
                  r < t.length;
                  ++r
                ) {
                  this.retain(t[r].cert);
                  var l = t[r].info;
                  JSON.stringify(l),
                    (l.expired = new Date(l.not_after) < new Date()),
                    (l.id = r),
                    l.sn === i ? a.certs.unshift(l) : a.certs.push(l);
                }
                var c = o(mustache.render(this.certsTemplate, a));
                c.find("a").click(function (s) {
                  s.preventDefault(), n.sign(e, t, o(this).attr("id"));
                }),
                  c.find("#refresh").click(function (t) {
                    t.preventDefault(),
                      s.showProcessing(
                        s.blitzscMsgs("blitzsc.status.interaction.title"),
                        s.blitzscMsgs("blitzsc.status.interaction.msg")
                      ),
                      s.showCerts(e);
                  }),
                  this.container.html(c);
              },
            },
            {
              key: "showCerts",
              value: function (e) {
                var t = this;
                this.showProcessing(
                  this.blitzscMsgs("blitzsc.status.interaction.title"),
                  this.blitzscMsgs("blitzsc.status.interaction.msg")
                ),
                  e.getCertsForSign(!0).then(
                    function (s) {
                      if (void 0 === s || 0 === s.length)
                        return (
                          t.showProcessing(
                            t.blitzscMsgs("blitzsc.status.waitingCerts.title"),
                            t.blitzscMsgs("blitzsc.status.waitingCerts.msg"),
                            !0
                          ),
                          void setTimeout(function () {
                            return t.showCerts(e);
                          }, 2e3)
                        );
                      for (
                        var o = [],
                          n = s.length,
                          a = !1,
                          i = function () {
                            0 == --n && ((a = !0), t.renderCerts(e, o));
                          },
                          r = function (e) {
                            return (
                              t.retain(e),
                              function (t) {
                                o.push({
                                  cert: e,
                                  info: t,
                                }),
                                  i();
                              }
                            );
                          },
                          l = function (e) {
                            i(), console.error(e);
                          },
                          c = 0;
                        c < s.length;
                        ++c
                      )
                        s[c].full_info.then(r(s[c]), l);
                      setTimeout(function () {
                        a ||
                          t.showCommonError(
                            "waiting certificate full info timeout"
                          );
                      }, 1e4);
                    },
                    function (e) {
                      t.showError(
                        t.blitzscMsgs(
                          "blitzsc.err.getCertsForSign",
                          t.extractErrorMessage(e)
                        )
                      ),
                        console.error(e);
                    }
                  );
              },
            },
            {
              key: "_successFactory",
              value: function (e) {
                var t = this;
                this.showProcessing(
                  this.blitzscMsgs("blitzsc.status.interaction.title"),
                  this.blitzscMsgs("blitzsc.status.interaction.msg")
                ),
                  e
                    .initPKCS11([
                      "capi:Crypto-Pro GOST R 34.10-2001 Cryptographic Service Provider,1:Crypto-Pro GOST R 34.10-2012 Strong Cryptographic Service Provider,1:Infotecs Cryptographic Service Provider,1:Signal-COM GOST R 34.10-2012 (512) Cryptographic Provider,1:Signal-COM CPGOST Cryptographic Provider,1:Signal-COM GOST R 34.10-2012 (256) Cryptographic Provider,1",
                      "Aladdin R.D. Unified JaCarta",
                      "ISBC ESMART",
                      "SafeNet",
                    ])
                    .then(
                      function (e) {
                        t.retain(e),
                          e.modules().then(function (s) {
                            for (var o = !1, n = 0; n < s.length; ++n)
                              o = o || s[n].enable;
                            o
                              ? t.showCerts(e)
                              : t.showError(
                                  t.blitzscMsgs("blitzsc.err.noModules")
                                );
                          }, t.showCommonError);
                      },
                      function (e) {
                        t.showError(
                          t.blitzscMsgs(
                            "blitzsc.err.initPKCS11",
                            t.extractErrorMessage(e)
                          )
                        ),
                          console.error(e);
                      }
                    );
              },
            },
            {
              key: "successFactory",
              value: function (e) {
                (window.signMode = "file"),
                  this.container.html(""),
                  this._successFactory(e);
              },
            },
            {
              key: "failFactory",
              value: function (e) {
                var t,
                  s = arguments,
                  o = "blitzsc.err.";
                switch (e) {
                  case "plugin_not_available":
                    (t = this.blitzscMsgs("blitzsc.status.waitingPlugin.msg")),
                      this.showProcessing(
                        this.blitzscMsgs("blitzsc.status.waitingPlugin.title"),
                        t,
                        !0
                      ),
                      (0, arguments[2])(
                        this.successFactory.bind(this),
                        this.failFactory.bind(this)
                      );
                    break;
                  case "plugin_not_allowed":
                    (t = this.blitzscMsgs(
                      "blitzsc.status.waitingActivationPlugin.msg"
                    )),
                      this.showProcessing(
                        this.blitzscMsgs(
                          "blitzsc.status.waitingActivationPlugin.title"
                        ),
                        t,
                        !0
                      ),
                      (0, arguments[2])(
                        this.successFactory.bind(this),
                        this.failFactory.bind(this)
                      );
                    break;
                  case "plugin_not_valid":
                    (t = this.blitzscMsgs(
                      o + e,
                      this.extractErrorMessage(arguments[1])
                    )),
                      this.showError(t);
                    break;
                  case "chrome_extension_not_available":
                    (t = this.blitzscMsgs(
                      "blitzsc.status.waitingExtension.msg"
                    )),
                      this.showProcessing(
                        this.blitzscMsgs(
                          "blitzsc.status.waitingExtension.title",
                          this.extractErrorMessage(arguments[1])
                        ),
                        t,
                        !0
                      ),
                      (0, arguments[2])(
                        this.successFactory.bind(this),
                        this.failFactory.bind(this)
                      );
                    break;
                  case "firefox_extension_not_available":
                    (t = this.blitzscMsgs(
                      "blitzsc.status.waitingExtension.msg"
                    )),
                      (window.installFirefoxExtention = function (e) {
                        for (var t = e.target; void 0 === t.href; )
                          t = t.parentNode;
                        return s[4](), !1;
                      }),
                      this.showProcessing(
                        this.blitzscMsgs(
                          "blitzsc.status.waitingFirefoxExtension.title",
                          arguments[3]
                        ),
                        t,
                        !0
                      ),
                      (0, arguments[2])(
                        this.successFactory.bind(this),
                        this.failFactory.bind(this)
                      );
                    break;
                  case "plugin_old_version":
                    var n =
                        "<button id='again' type='button' class='btn btn-primary'><span class='glyphicon glyphicon-repeat' aria-hidden='true'></span> " +
                        _self.blitzscMsgs("blitzsc.msg.again") +
                        "</button>",
                      a = this.blitzscMsgs(o + e);
                    (t = a.split(":")[0]), this.showError(a, n);
                    break;
                  default:
                    console.error(e),
                      (t = this.blitzscMsgs(o + "plugin_not_valid")),
                      this.showError(t);
                }
              },
            },
          ]),
          s && a(t.prototype, s),
          r && a(t, r),
          Object.defineProperty(t, "prototype", {
            writable: !1,
          }),
          e
        );
      })();
    },
    127307: function (e, t, s) {
      "use strict";
      s.r(t);
      s(168794);
      var o = s(619755);
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      o(document).ready(function () {
        Contract.initFormEvent(),
          "#add" == location.hash &&
            (Contract.showFormAddContract(), (location.hash = ""));
      }),
        (window.Contract = {
          tplFoundCompany:
            '{{#data}}<li class=" select_companu_li" onclick="Contract.choiceFoundCompany({{ id }}, \'{{ name }}\', \'{{ logo }}\', {{ kpp }});"><div class="obj_pl obj_pl4"><div class="dt1"><div class="img_background {{^logo}}not_img{{/logo}}" {{#logo}}style="background-image: url(\'{{ logo}}\')"{{/logo}}></div></div><div class="dt2"><div class="div_tit">{{ name }}</div></div></div></li>{{/data}}{{^data}}<li>Ничего не найдено</li>{{/data}}',
          tplLoaderForFoundCompany:
            '<div class="not_text_dropdown text-center"><svg width="24" height="24" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#ec4647"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="1"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform"  type="rotate"  from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg></div>',
          searchCompanyByInnNow: !1,
          eventInnInput: function () {
            var e = o(".contract-inn__input-field");
            e.off("keyup"), e.on("keyup", this.keyUpEventInnField);
          },
          eventInnSearchBtn: function () {
            var e = o(".search-company-by-inn");
            e.off("click"), e.on("click", this.searchByInn);
          },
          showFormAddContract: function (e) {
            icHelper.loaderSpin();
            var t = {};
            void 0 !== e && (t.offerId = e),
              o
                .ajax({
                  method: "POST",
                  global: !0,
                  url: Routing.generate("addContract"),
                  data: t,
                })
                .done(function (e, t, s) {
                  icHelper.removeLoader(),
                    icHelper.showModal(
                      e,
                      "Создать новый контракт",
                      void 0,
                      "modal800 modal800_contract"
                    ),
                    Contract.initFormEvent();
                })
                .fail(function (e) {
                  icHelper.removeLoader(),
                    401 === e.status
                      ? icHelper.showModalAlert(
                          "Доступно только авторизованному пользователю"
                        )
                      : icHelper.showModalAlert(
                          "Произошла ошибка, попробуйте позже"
                        ),
                    Contract.eventInnInput(),
                    Contract.eventInnSearchBtn();
                });
          },
          initFormEvent: function () {
            Contract.eventInnInput(),
              Contract.eventInnSearchBtn(),
              Contract.memberEvent(),
              icHelper.mcustomScroll(".modal .scrollbar_js");
            var e = o('[name="contract_add"]'),
              t = e.find("input, textarea");
            e.find('[type="submit"]').attr("disabled", "disabled"),
              t.on("keyup change", Contract.validate.bind(window, e)),
              Contract.buttonSignEvent(e),
              Contract.makeDateInput();
          },
          validate: function (e) {
            var t = e.find("[required]"),
              s = e.find('[type="submit"]'),
              n = e.find('[type="radio"]'),
              a = e.find(".status-member"),
              i = !0;
            t.each(function (e, t) {
              Contract.checkField(t) || (i = !1);
            });
            n.filter(function () {
              return o(this).prop("checked");
            });
            var r = a.filter(function () {
              if ("" !== o(this).val()) return o(this);
            });
            i && 2 === r.length
              ? s.removeAttr("disabled")
              : s.attr("disabled", "disabled");
          },
          checkField: function (e) {
            return "" !== o(e).val();
          },
          showFormAddContractWithFile: function (e) {
            o.ajax({
              method: "POST",
              global: !0,
              url: Routing.generate("addContractWithFile", {
                id: e,
              }),
            })
              .done(function (e, t, s) {
                icHelper.showModal(e, "Создание контакта"),
                  Contract.eventInnInput(),
                  Contract.eventInnSearchBtn();
              })
              .fail(function (e) {
                401 === e.status
                  ? icHelper.showModalAlert(
                      "Доступно только авторизованному пользователю"
                    )
                  : icHelper.showModalAlert(
                      "Произошла ошибка, попробуйте позже"
                    ),
                  Contract.eventInnInput(),
                  Contract.eventInnSearchBtn();
              });
          },
          keyUpEventInnField: function () {
            var e = o("#text-search-inn"),
              t = o(this);
            t.val(t.val().replace(new RegExp("[^0-9]", "g"), "")),
              10 === t.val().length || 12 === t.val().length
                ? Contract.searchCompanyByInnNow ||
                  ((Contract.searchCompanyByInnNow = !0),
                  t.attr("disabled", "disabled"),
                  Contract.searchByInn(o(this)))
                : (t.removeAttr("disabled"), e.remove());
          },
          searchByInn: function (e) {
            var t = e.closest(".label_line_wrap"),
              s = t.find(".company-search-result"),
              n = o("#found-company-by-inn"),
              a = t.find(".select_list"),
              i = function e(t) {
                0 === o(t.target).closest(".select_list").length &&
                  (o(document).off("click", e),
                  a.removeClass("d-block"),
                  n.empty());
              };
            n.html(Contract.tplLoaderForFoundCompany),
              a.addClass("d-block"),
              o(document).off("click", i),
              o(document).on("click", i),
              o
                .ajax({
                  dataType: "json",
                  type: "POST",
                  url: Routing.generate("contractSearchCompanyByInn"),
                  data: {
                    inn: e.val(),
                  },
                })
                .done(function (t) {
                  e.removeAttr("disabled"),
                    t &&
                      (t.length > 0
                        ? Contract.showFoundCompanyByInn(n, t)
                        : n.empty()),
                    o("#text-search-inn").remove(),
                    (Contract.searchCompanyByInnNow = !1);
                })
                .fail(function () {
                  n.empty(),
                    e.removeAttr("disabled"),
                    s.parent().addClass("d-none"),
                    o("#text-search-inn").text("Компания не найдена"),
                    (Contract.searchCompanyByInnNow = !1);
                });
          },
          showFoundCompanyByInn: function (e, t) {
            if (!e || !t) return !1;
            mustache.parse(this.tplFoundCompany),
              e.html(
                mustache.render(this.tplFoundCompany, {
                  data: t,
                })
              );
          },
          choiceFoundCompany: function (e, t, s, n) {
            var a = o("#found-company-by-inn"),
              i = a.closest(".label_line_wrap"),
              r = i.find(".company-search-result"),
              l = r.find(".cnpLogo").closest(".request_img"),
              c = i.find(".contract-kpp__input-field");
            i.find(".select_list").removeClass("d-block"),
              a.empty(),
              i.find(".contract-member__company-input").val(e),
              r.find(".cnpLogo").attr("src", s),
              s ? l.removeClass("not_img") : l.addClass("not_img"),
              r.find(".cnpName").text(t),
              r.parent().removeClass("d-none"),
              n ? c.val(n) : c.val("");
          },
          showFormEditContract: function (e) {
            o.ajax({
              method: "POST",
              global: !0,
              url: Routing.generate("editContract", {
                id: e,
              }),
            })
              .done(function (e, t, s) {
                icHelper.showModal(
                  e,
                  "Редактирование контракта",
                  void 0,
                  "modal800"
                ),
                  Contract.initFormEvent();
              })
              .fail(function (e) {
                401 === e.status
                  ? icHelper.showModalAlert(
                      "Доступно только авторизованному пользователю"
                    )
                  : 404 === e.status
                  ? icHelper.showModalAlert("Контракт не найден")
                  : icHelper.showModalAlert(
                      "Произошла ошибка, попробуйте позже"
                    ),
                  Contract.eventInnInput(),
                  Contract.eventInnSearchBtn();
              });
          },
          showFormCreateContractFromRequest: function (e) {
            o.ajax({
              method: "POST",
              global: !0,
              url: Routing.generate("createContractFromRequest", {
                id: e,
              }),
            })
              .done(function (e, t, s) {
                icHelper.showModal(e, "Создание контракта", void 0, "modal800"),
                  Contract.initFormEvent();
              })
              .fail(function (e) {
                401 === e.status
                  ? icHelper.showModalAlert(
                      "Доступно только авторизованному пользователю"
                    )
                  : 404 === e.status
                  ? icHelper.showModalAlert("Контракт не найден")
                  : icHelper.showModalAlert(
                      "Произошла ошибка, попробуйте позже"
                    ),
                  Contract.eventInnInput(),
                  Contract.eventInnSearchBtn();
              });
          },
          deleteContract: function (e) {
            e &&
              icHelper.showModalConfirm(
                "Вы действительно хотите удалить контракт?",
                Contract.showFormDeleteContract.bind(window, e)
              );
          },
          showFormDeleteContract: function (e) {
            o.ajax({
              method: "POST",
              global: !0,
              url: Routing.generate("deleteContract", {
                id: e,
              }),
            })
              .done(function (e, t, s) {
                icHelper.showModalAlert(
                  "Контракт удален",
                  '<div class="text-center"><button onclick="icHelper.hideModal(); Contract.backToContractList();" type="button" class="btn-light btn">Закрыть</button></div>'
                ),
                  Contract.eventInnInput(),
                  Contract.eventInnSearchBtn();
              })
              .fail(function (e) {
                401 === e.status
                  ? icHelper.showModalAlert(
                      "Доступно только авторизованному пользователю"
                    )
                  : 404 === e.status
                  ? icHelper.showModalAlert("Контракт не наден")
                  : icHelper.showModalAlert(
                      "Произошла ошибка, попробуйте позже"
                    ),
                  Contract.eventInnInput(),
                  Contract.eventInnSearchBtn();
              });
          },
          backToContractList: function () {
            window.location = Routing.generate("contracts");
          },
          closeContract: function (e) {
            icHelper.showModalConfirm(
              "Вы действительно хотите закрыть контракт?",
              Contract.sendRequestCloseContract.bind(window, e)
            );
          },
          sendRequestCloseContract: function (e) {
            e &&
              o
                .ajax({
                  method: "POST",
                  global: !0,
                  url: Routing.generate("closeContract", {
                    id: e,
                  }),
                })
                .done(function (e, t, s) {
                  icHelper.showModalAlert(
                    "Контракт закрыт",
                    '<div class="text-center"><button onclick="icHelper.hideModal(); location.reload();" type="button" class="btn-light btn">Закрыть</button></div>'
                  ),
                    Contract.eventInnInput(),
                    Contract.eventInnSearchBtn();
                })
                .fail(function (e) {
                  401 === e.status
                    ? icHelper.showModalAlert(
                        "Доступно только авторизованному пользователю"
                      )
                    : 404 === e.status
                    ? icHelper.showModalAlert("Контракт не наден")
                    : icHelper.showModalAlert(
                        "Произошла ошибка, попробуйте позже"
                      ),
                    Contract.eventInnInput(),
                    Contract.eventInnSearchBtn();
                });
          },
          showFormAddSign: function (e, t) {
            o.ajax({
              method: "POST",
              global: !0,
              url: Routing.generate("addSign", {
                contractid: e,
                fileid: t,
              }),
            })
              .done(function (e, t, s) {
                icHelper.showModal(e, "Подписать файл", void 0, "modal800"),
                  Contract.eventInnInput(),
                  Contract.eventInnSearchBtn();
              })
              .fail(function (e) {
                401 === e.status
                  ? icHelper.showModalAlert(
                      "Доступно только авторизованному пользователю"
                    )
                  : 404 === e.status
                  ? icHelper.showModalAlert("Договор не найден")
                  : icHelper.showModalAlert(
                      "Произошла ошибка, попробуйте позже"
                    ),
                  Contract.eventInnInput(),
                  Contract.eventInnSearchBtn();
              });
          },
          showSecondFormSignFile: function (e, t, s) {
            icHelper.downloadFileByLink(
              e,
              this.buildSecondFormSignFile.bind(this, t, s)
            );
          },
          buildSecondFormSignFile: function (e, t, s) {
            icHelper.loaderSpin();
            icHelper.showModal(
              '<div id="sign-cont"></div>',
              "Подписание файла",
              void 0,
              "modal800",
              this.doSecondSign.bind(this, e, t, s)
            );
          },
          doSecondSign: function (e, t, s) {
            icHelper.removeLoader();
            var n = o("#sign-cont");
            "function" == typeof SignPluginBlitz &&
              n.length &&
              s &&
              new SignPluginBlitz(
                n,
                s,
                this.secondSignFile.bind(this, e, t),
                this.signFail
              ).init();
          },
          secondSignFile: function (e, t, s) {
            icHelper.loaderSpin("#siteModal .modal-content"),
              o
                .ajax({
                  method: "POST",
                  global: !0,
                  url: Routing.generate("addSecondSign", {
                    contractid: e,
                    fileid: t,
                  }),
                  data: {
                    sign: s.signature,
                  },
                })
                .done(function (e, t, s) {
                  icHelper.removeLoader(),
                    202 === s.status
                      ? (icHelper.hideModal(),
                        icHelper.showModalAlertRedirectOnClose(
                          '<div class="not_date_center file_podpis_success">\n                    <div class="not_date2">\n                        <div class="dt1">\n                            <img src="/build/img/file_podpis_success.svg">\n                        </div>\n                        <div class="dt2a">Файл успешно подписан</div>\n                    </div>\n                </div>',
                          null,
                          window.location.href
                        ))
                      : o("#sign-cont").html(e);
                })
                .fail(function (e) {
                  icHelper.hideModal(),
                    icHelper.removeLoader(),
                    401 === e.status
                      ? icHelper.showModalAlertRedirectOnClose(
                          "Доступно только авторизованному пользователю",
                          null,
                          window.location.href
                        )
                      : 404 === e.status
                      ? icHelper.showModalAlertRedirectOnClose(
                          "Файл не найден",
                          null,
                          window.location.href
                        )
                      : icHelper.showModalAlertRedirectOnClose(
                          "Произошла ошибка, попробуйте позже",
                          null,
                          window.location.href
                        );
                });
          },
          addFileField: function (e) {
            var t = o(e).closest("form").find(".contract-file-cont"),
              s = t
                .find('[data-type="0"]')
                .add('.file_tit[data-type="0"]').length,
              n = t.find(".select2-selection__rendered"),
              a = !1;
            n.length && -1 !== n.text().indexOf("Договор") && (a = !0);
            0 !== s || a
              ? this.addFileFieldHtml(t)
              : this.addFileFieldHtml(t, !0);
          },
          addFileFieldHtml: function (e, t) {
            if (0 !== e.length) {
              var s = e.children().length,
                o =
                  '<div class="form-group form_file_row" id="contract_add_file_' +
                  (s + 1) +
                  '"><label class="">' +
                  (t ? "Файл" : "Закрывающий документ " + s) +
                  ':</label><div class="custom-file2 custom-file2-podpis select100p"><div  class="dop_select"><label class="" for="contract_add_file_' +
                  s +
                  '_type">Тип документа</label><select id="contract_add_file_' +
                  s +
                  '_type" name="contract_add[file][' +
                  s +
                  '][type]" class="form-control"><option value="0" ' +
                  (t ? "" : "disabled") +
                  '>Договор</option><option value="1"><span class="select_sb"><span class="sp1">Акт (по форме приложения к договору)</span><span class="sp2"> 2 подписанта</span></span></option><option value="2"><span class="select_sb"><span class="sp1">Акт (бух.отчетность)</span><span class="sp2"> 2 подписанта</span></span></option><option value="3"><span class="select_sb"><span class="sp1">Счёт (бух отчетность)</span><span class="sp2"> подписывает поставщик</span></span></option><option value="4"><span class="select_sb"><span class="sp1">Счёт-фактура (бух отчетность)</span><span class="sp2"> подписывает поставщик</span></span></option><option value="5"><span class="select_sb"><span class="sp1">Доверенность</span><span class="sp2"> подписывает поставщик</span></span></option><option value="6">Другое</option></select></div><div class="dropzone dropzone-podpis dropzone-podpis2 dropzone_ico_file2 ">\n            <div class="div_file_add_new div_file_add div_file_add_h1">\n                   <div class="fileinput-button2">\n                         <div class="fileinput-ico"></div>\n                         <div class="fileinput-text">Добавить файл</div>\n                     </div>                    <span class="file_abs"><input type="file" id="contract_add_file_' +
                  s +
                  '_file" name="contract_add[file][' +
                  s +
                  '][file]" btntype="1" nametext="Прикрепить файл" class="custom-file-input" data-fileext="doc;docx;pdf"></span>\n                <div class="file_complite file_complite2">\n                    <div class="dt_btn">\n                    </div>\n                </div>\n            </div>\n</div><div class="d-none"><input type="hidden" id="contract_add_file_' +
                  s +
                  '_fileName" name="contract_add[file][' +
                  s +
                  '][fileName]" value=""><input type="hidden" id="contract_add_file_' +
                  s +
                  '_filePath" name="contract_add[file][' +
                  s +
                  '][filePath]" value=""><input type="hidden" class="sign-for-file" id="contract_add_file_' +
                  s +
                  '_sign" name="contract_add[file][' +
                  s +
                  '][sign]" value=""></div></div></div>';
              e.append(o),
                e
                  .find("#contract_add_file_" + (s + 1) + ' option[value="1"]')
                  .text(
                    '<span class="select_sb"><span class="sp1">Акт (по форме приложения к договору)</span><span class="sp2"> 2 подписанта</span></span>'
                  ),
                e
                  .find("#contract_add_file_" + (s + 1) + ' option[value="2"]')
                  .text(
                    '<span class="select_sb"><span class="sp1">Акт (бух.отчетность)</span><span class="sp2"> 2 подписанта</span></span>'
                  ),
                e
                  .find("#contract_add_file_" + (s + 1) + ' option[value="3"]')
                  .text(
                    '<span class="select_sb"><span class="sp1">Счёт (бух отчетность)</span><span class="sp2"> подписывает поставщик</span></span>'
                  ),
                e
                  .find("#contract_add_file_" + (s + 1) + ' option[value="4"]')
                  .text(
                    '<span class="select_sb"><span class="sp1">Счёт-фактура (бух отчетность)</span><span class="sp2"> подписывает поставщик</span></span>'
                  ),
                e
                  .find("#contract_add_file_" + (s + 1) + ' option[value="5"]')
                  .text(
                    '<span class="select_sb"><span class="sp1">Доверенность</span><span class="sp2"> подписывает поставщик</span></span>'
                  ),
                e.find("select").addClass("select_file_js"),
                icHelper.selectJs(".select_file_js"),
                this.buttonSignEvent(e.closest("form"));
            }
          },
          removeFileBtn: function (e, t) {
            icHelper.showModalConfirm(
              "Вы действительно хотите удалить файл из контракта?",
              Contract.removeFileFromContract.bind(window, e, t)
            );
          },
          removeFileFromContract: function (e, t) {
            var s =
              '<div class="text-center"><button onclick="icHelper.hideModal(\'siteModalAlert\');" type="button" class="btn-light btn">Закрыть</button></div>';
            o.ajax({
              method: "POST",
              global: !0,
              url: Routing.generate("removeFileFromContract"),
              data: {
                filePath: t,
              },
            })
              .done(function (t, o, n) {
                icHelper.showModalAlert("Файл удален", s),
                  Contract.removeFileField(e);
              })
              .fail(function (e) {
                401 === e.status
                  ? icHelper.showModalAlert(
                      "Доступно только авторизованному пользователю",
                      s
                    )
                  : 403 === e.status
                  ? icHelper.showModalAlert("Доступ запрещен", s)
                  : 404 === e.status
                  ? icHelper.showModalAlert("Файл не найден", s)
                  : icHelper.showModalAlert(
                      "Произошла ошибка, попробуйте позже",
                      s
                    );
              });
          },
          removeFileField: function (e) {
            o(e).closest(".form_file_row").remove(),
              o(e).closest(".contract_file_wrap").remove();
          },
          addClosingDoc: function (e) {
            o.ajax({
              method: "POST",
              global: !0,
              url: Routing.generate("addFileForContract", {
                id: e,
              }),
            })
              .done(function (e, t, s) {
                icHelper.showModal(
                  e,
                  "Добавление документа к контракту",
                  void 0,
                  "modal800"
                );
                var n = o('[name="contract_file"]');
                Contract.buttonSignEvent(n);
              })
              .fail(function (e) {
                401 === e.status
                  ? icHelper.showModalAlert(
                      "Доступно только авторизованному пользователю"
                    )
                  : 404 === e.status
                  ? icHelper.showModalAlert("Договор не найден")
                  : icHelper.showModalAlert(
                      "Произошла ошибка, попробуйте позже"
                    );
              });
          },
          addClosingDocFail: function () {
            var e = o("#form_contract-file");
            e.length > 0 && Contract.buttonSignEvent(e);
          },
          buttonSignEvent: function (e) {
            var t = e.find('[type="file"]');
            t.off("change.contracts"),
              t.on("change.contracts", function () {
                1 === this.files.length &&
                  "object" ===
                    ("undefined" == typeof Blitzsc
                      ? "undefined"
                      : n(Blitzsc)) &&
                  "object" ===
                    ("undefined" == typeof mustache
                      ? "undefined"
                      : n(mustache)) &&
                  o(this)
                    .closest(".form_file_row")
                    .find(".dt_btn")
                    .html(
                      '<div class="sign-cont"><button type="button" class="btn btn-light" onclick="Contract.doSign(event)">Подписать</button></div>'
                    );
              });
          },
          buttonSignEventDropzone: function (e, t) {
            var s = this;
            e.find(".sign-cont").remove();
            if (
              t &&
              "object" ===
                ("undefined" == typeof Blitzsc ? "undefined" : n(Blitzsc)) &&
              "object" ===
                ("undefined" == typeof mustache ? "undefined" : n(mustache))
            ) {
              e.find(".dt_btn").html(
                '<div class="sign-cont"><button id="button-sign-from-dropzone" class="btn btn-blue" type="button">Подписать</button></div>'
              );
              var a = o("#button-sign-from-dropzone");
              a.off("click"),
                a.on("click", function () {
                  var e = o("#contract_file"),
                    n = e.find(".sign-cont");
                  "function" == typeof SignPluginBlitz &&
                    n.length &&
                    t &&
                    (e.find(".cf_active").addClass("cf_active2"),
                    new SignPluginBlitz(
                      n,
                      t,
                      s.signSuccess.bind(window, e),
                      s.signFail
                    ).init());
                });
            }
          },
          doSign: function (e) {
            var t = o(e.currentTarget).closest(".form_file_row"),
              s = t.find(".sign-cont"),
              n = t.find('[type="file"]')[0].files[0];
            "function" == typeof SignPluginBlitz &&
              (t.find(".cf_active").addClass("cf_active2"),
              new SignPluginBlitz(
                s,
                n,
                this.signSuccess.bind(window, t),
                this.signFail
              ).init());
          },
          signSuccess: function (e, t) {
            var s = e.find(".sign-for-file");
            e.find(".cf_active").removeClass("cf_active2"),
              e
                .find(".dt_btn")
                .html(
                  '<div class="file_status_podpis"><img src="/build/img/pensil_circle.svg">Подписано</div>'
                ),
              s.val(t.signature);
          },
          signFail: function () {
            icHelper.showModalAlert(
              "Ошибка подписания файла",
              '<div class="text-center"><button data-dismiss="modal" type="button" class="btn-light btn">Закрыть</button></div>'
            );
          },
          signInfo: function (e) {
            var t = o(e),
              s = Routing.generate("contractGetSingByMember", {
                contract: t.data("contractid"),
                member: t.data("memberid"),
                file: t.data("fileid"),
              });
            icHelper.loaderSpin(),
              o
                .get(s)
                .done(function (e) {
                  o("#modalTitle").text("Информация о подписи"),
                    icHelper.signInfo(e, o("#siteModal").find(".modal-body")),
                    setTimeout(function () {
                      o("#siteModal").modal("show");
                    }, 300);
                })
                .fail(function () {
                  icHelper.showModalAlert(
                    "Ошибка",
                    "Не удалось получить инормацию о подписи"
                  );
                })
                .always(function () {
                  icHelper.removeLoader();
                });
          },
          memberEvent: function () {
            var e = o("select", ".status-member"),
              t = o("#contract_add_member_0_status"),
              s = o("#contract_add_member_1_status");
            e.off("change"),
              t.on("change", function () {
                "1" === o(this).val()
                  ? s.val("0")
                  : "0" === o(this).val() && s.val("1");
              });
          },
          userDebitor: function (e) {
            if (0 == e.debitoruser) {
              icHelper.hideModal("siteModal"),
                icHelper.showModalAlert(
                  "Обращаем ваше внимание",
                  'Для формирования заявки на факторинг вашему контрагенту необходимо авторизоваться на платформе<br><br><div class="text-center"><a href="" onclick="location.reload();" class="btn btn-ico btn-primary profile_punct">Понятно<i class="material-icons">chevron_right</i></a></div>'
                );
            } else location.reload();
          },
          searchContract: function (e) {
            var t = o(e).find("#search-input");
            icHelper.setHash("q", t.val()), location.reload();
          },
          returnListPage: function () {
            location = Routing.generate("contracts");
          },
          makeDateInput: function () {
            o("[type=date]").each(function (e, t) {
              "date" !== o(t).prop("type") &&
                o(t).prop("id") &&
                o("#" + o(t).prop("id")).datepicker({
                  altFormat: "dd.mm.yy",
                  dateFormat: "yy-mm-dd",
                  beforeShow: function (e, t) {
                    t.dpDiv.addClass("op0"),
                      t.dpDiv.removeClass("pos_top pos_bottom"),
                      setTimeout(function () {
                        e.getBoundingClientRect().top + pageYOffset >
                        +t.dpDiv.css("top").replace("px", "")
                          ? t.dpDiv.addClass("pos_top")
                          : t.dpDiv.addClass("pos_bottom"),
                          t.dpDiv.removeClass("op0");
                      }, 100);
                  },
                  showButtonPanel: !1,
                  gotoCurrent: !1,
                  showOtherMonths: !0,
                  selectOtherMonths: !0,
                });
            });
          },
        });
    },
    115986: function (e, t, s) {
      var o = s(619755);
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      window.customDropzone = {
        fileTpl:
          '<div class="btn_type2 dz-remove" onclick="customDropzone.removeFile(this);"><div class="btn_text">Очистить</div><div class="btn_ico"><i class="material-icons">close</i></div></div>{{#files}}<div class="dz-details file_el_del file_el_del2"><div class="dt1"><div class="file_el file_el2"><div class="file_td1"><div class="file_ico"><i class="material-icons">subject</i></div></div><div class="file_td2"><div class="file_tit dz-filename">{{{name}}}</div><span class="file_text1">{{{ext}}}, {{{size}}}</span></div></div></div></div>{{/files}}',
        handleFile: function (e) {
          var t = e.files,
            s = o(e).closest(".dropzone-custom-file").find(".dz-file-preview");
          if (
            (this.showCover(e),
            t.length > 0 &&
              "object" ===
                ("undefined" == typeof mustache ? "undefined" : n(mustache)))
          ) {
            s.html("");
            var a = {
                files: [],
              },
              i = o(e).data().fileext,
              r = o(e).data().maxfilesize;
            if (!icHelper.checkFilesCount(e)) return o(e).val(""), !1;
            for (var l = 0; l < t.length; l++) {
              var c = t[l];
              if (i && !icHelper.checkFileExt(c, i)) return o(e).val(""), !1;
              if (r && !icHelper.checkFileSize(c, r)) return o(e).val(""), !1;
              var u = c.name.split("."),
                d = u.pop(),
                h = u.join(".");
              a.files.push({
                name: h,
                ext: d,
                size: icHelper.bytesToSize(c.size),
              });
            }
            a.files.length &&
              (mustache.parse(this.fileTpl),
              s.append(mustache.render(this.fileTpl, a)));
          }
        },
        removeFile: function (e) {
          var t = o(e).closest(".dropzone-custom-file");
          t.find(".dz-file-preview").html(""),
            t.find('[type="file"]').val(""),
            o(e).remove();
        },
        showCover: function (e) {
          if (e.files && e.files[0]) {
            var t = new FileReader();
            (t.onload = function (e) {
              o(".cover_holder img").attr("src", e.target.result);
            }),
              t.readAsDataURL(e.files[0]),
              o(".cover_holder .btn_edit").removeClass("d-none");
          }
        },
      };
    },
    795579: function (e, t, s) {
      "use strict";
      s.r(t);
      var o = s(454090),
        n = s.n(o),
        a = s(671942),
        i = s.n(a)();
      s(619755)(function (e) {
        e("#siteModal").on("shown.bs.modal", function () {
          s();
        }),
          e("body").on("needMask", function () {
            s();
          });
        var t = new (n())("+9 (999) 999-9999", {
          clearMaskOnLostFocus: !0,
        });
        function s() {
          t.mask(".phone_form_field"),
            e(".inn_form_field").mask("9999999999?99"),
            e(".kpp_form_field").mask("999999999"),
            e(".snils_form_field").mask("999-999-999 99"),
            e('[data-inputfiltertype="filter1305406"]').mask("99 99"),
            e('[data-inputfiltertype="filter1305407"]').mask("999999"),
            n()("email").mask(".email_form_field"),
            n()().mask(document.querySelectorAll("input")),
            new i(".mask1305413", {
              view: "months",
              minView: "months",
              dateFormat: "01.MM.yyyy",
            }),
            new i(".mask1305414", {
              view: "months",
              minView: "months",
              dateFormat: function (e) {
                var t = e.getMonth() + 1;
                return (
                  t < 10 && (t = "0" + t),
                  (function (e, t) {
                    var s = new Date(e, t + 1, 0);
                    return 1 === s.getDate().toString().length
                      ? "0" + s.getDate().toString()
                      : s.getDate().toString();
                  })(e.getFullYear(), e.getMonth()) +
                    "." +
                    t +
                    "." +
                    e.getFullYear()
                );
              },
            });
        }
        function o() {
          switch (e(this).data("inputfiltertype")) {
            case "filter1305411":
              e(this).val(
                e(this)
                  .val()
                  .replace(/[^\d]+/g, "")
              );
              break;
            case "filter1305412":
              e(this).val(
                e(this)
                  .val()
                  .replace(/([^a-zA-Zа-яА-Я])+/g, "")
              );
              break;
            case "filter1305411_real":
              e(this).val(
                e(this)
                  .val()
                  .replace(/^(\d+\,?\d{0,2}).*/g, "$1")
              );
          }
          if ("removeStartNol" === e(this).data("innerfilter"))
            e(this).val().length > 1 &&
              e(this).val(e(this).val().replace(/^0+/g, ""));
        }
        s(),
          e(document).on("keyup", '[data-inputfilter="1"]', o),
          e(document).on("keydown", '[data-inputfilter="1"]', o),
          e(document).on("blur", '[data-inputfilter="1"]', function () {
            if ("filter1305411_real" === e(this).data("inputfiltertype"))
              e(this).val(
                e(this)
                  .val()
                  .replace(/^(\d+)(\,\d{2})?.*/g, "$1$2")
              );
          });
      });
    },
    468581: function (e, t, s) {
      var o = s(619755);
      document.addEventListener("reload_auth_info", function () {
        var e = 0;
        o("#user_header_info_container").addClass("grey_loader"),
          (function t() {
            o.ajax({
              url: Routing.generate("api_auth_header_user_info_template"),
              type: "POST",
              success: function (e) {
                o("#user_header_info_container")
                  .html(e)
                  .removeClass("grey_loader");
              },
              error: function (s, o, n) {
                console.log("User info load error:", o), e < 3 && (e++, t());
              },
            });
          })();
      });
    },
    908215: function (e, t, s) {
      var o = s(619755);
      o(document).ready(function () {
        window.Notifications = n;
      }),
        o(document).on("change", ".btn-notifications-subscribe0", function (e) {
          var t = o(this).attr("data-id");
          o("#" + t + ".btn-notifications-subscribe0").prop("checked")
            ? Notifications.subscribeMeasure(t)
            : Notifications.unSubscribeMeasure(t);
        });
      var n = {
        subscribeMeasure: function (e) {
          var t = o(".btn-notifications-subscribe"),
            s = e;
          icHelper.loaderSpin(),
            o
              .ajax({
                method: "POST",
                url: Routing.generate("measure-supports-subscribe", {
                  guid: e,
                }),
              })
              .done(function (e, s, o) {
                icHelper.removeLoader(),
                  200 === o.status &&
                    (t.toggleClass("d-none"),
                    icHelper.showModalAlert("Подписка создана"));
              })
              .fail(function (e) {
                icHelper.removeLoader(),
                  400 === e.status ||
                  401 === e.status ||
                  403 === e.status ||
                  404 === e.status
                    ? icHelper.showModalAlert(e.responseText)
                    : icHelper.showModalAlert(
                        "Произошла ошибка, попробуйте позже"
                      ),
                  o("#" + s + ".btn-notifications-subscribe0").prop(
                    "checked"
                  ) ||
                    o("#" + s + ".btn-notifications-subscribe0").prop(
                      "checked",
                      !0
                    );
              });
        },
        unSubscribeMeasure: function (e) {
          var t = o(".btn-notifications-subscribe"),
            s = e;
          icHelper.loaderSpin(),
            o
              .ajax({
                method: "POST",
                url: Routing.generate("measure-supports-unsubscribe", {
                  guid: e,
                }),
              })
              .done(function (e, s, o) {
                icHelper.removeLoader(),
                  200 === o.status &&
                    (t.toggleClass("d-none"),
                    icHelper.showModalAlert("Подписка отменена"));
              })
              .fail(function (e) {
                icHelper.removeLoader(),
                  400 === e.status ||
                  401 === e.status ||
                  403 === e.status ||
                  404 === e.status
                    ? icHelper.showModalAlert(e.responseText)
                    : icHelper.showModalAlert(
                        "Произошла ошибка, попробуйте позже"
                      ),
                  o("#" + s + ".btn-notifications-subscribe0").prop(
                    "checked"
                  ) &&
                    o("#" + s + ".btn-notifications-subscribe0").prop(
                      "checked",
                      !1
                    );
              });
        },
        markNotAsRead: function (e, t) {
          var s = o(e);
          o.ajax({
            method: "POST",
            url: Routing.generate("notification-read", {
              guid: t,
            }),
          })
            .done(function (e, n, a) {
              if (200 === a.status) {
                s.removeAttr("onclick"),
                  s.removeClass("text-success"),
                  o(".note-" + t)
                    .find(".text-success")
                    .removeClass("text-success");
                var i = o(".count-not-read-notifications");
                if (i.length > 0) {
                  var r = o("#count-not-read-notifications").text(),
                    l = --r;
                  l < 1 &&
                    (i.hide(),
                    o("#notification-all").tab("show"),
                    o("#notifications-not-read").fadeOut()),
                    i.text(l);
                }
              }
            })
            .fail(function (e) {
              icHelper.removeLoader(),
                400 === e.status ||
                401 === e.status ||
                403 === e.status ||
                404 === e.status
                  ? icHelper.showModalAlert(e.responseText)
                  : icHelper.showModalAlert(
                      "Произошла ошибка, попробуйте позже"
                    );
            });
        },
        markAllNotAsRead: function () {
          o.ajax({
            method: "POST",
            url: Routing.generate("notification-read-all"),
          })
            .done(function (e, t, s) {
              if (200 === s.status) {
                var n = o(".count-not-read-notifications"),
                  a = o(".note-item").find(".text-success");
                a.length > 0 &&
                  a.each(function (e, t) {
                    o(t).removeClass("text-success"),
                      o(t).removeAttr("onclick");
                  }),
                  n.hide(),
                  n.text(0),
                  o("#notification-all").tab("show"),
                  o("#notifications-not-read").fadeOut();
              }
            })
            .fail(function (e) {
              400 === e.status ||
              401 === e.status ||
              403 === e.status ||
              404 === e.status
                ? icHelper.showModalAlert(e.responseText)
                : icHelper.showModalAlert("Произошла ошибка, попробуйте позже");
            });
        },
      };
    },
    418633: function (e, t, s) {
      var o = s(619755);
      o(document).on("click", "#buildRequestInClusterForm", function () {
        var e = o(this).closest("form"),
          t = new FormData(e[0]);
        icHelper.beforeLoad(o(this)),
          o
            .ajax({
              method: "POST",
              global: !0,
              url: Routing.generate("requestInClusterBuild"),
              data: t,
              dataType: "json",
              processData: !1,
              contentType: !1,
            })
            .done(function (e) {
              o
                .ajax({
                  method: "POST",
                  global: !0,
                  url: Routing.generate("requestInClusterSignMethods"),
                })
                .done(function (e) {
                  o("#requestInClusterSignHolder").html(e);
                })
                .fail(function (e) {
                  icHelper.showModalAlert("Ошибка", e.responseText);
                }),
                o("#formLockerRequestIncluster").css("display", "flex"),
                o("#requestInClGenFiles").empty(),
                o("#requestInClGenFiles").append(
                  o("<a/>")
                    .attr("href", e.xml)
                    .text("Скачать XML файл заявки")
                    .addClass("text-under color_a")
                ),
                o("#requestInClGenFiles").append(o("<br/>")),
                o("#requestInClGenFiles").append(
                  o("<a/>")
                    .attr("href", e.pdf)
                    .text("Скачать PDF файл заявки")
                    .addClass("text-under color_a")
                ),
                o("#requestInClGenFiles").append(
                  o('<div class="measure_mh"></div>')
                ),
                o("#buildRequestInClusterForm").hide(),
                o("#requestOnlineSign").show(),
                o("#signInfoText").show();
            })
            .fail(function (t) {
              400 === t.status
                ? o(e).parent().html(t.responseText)
                : 422 === t.status &&
                  icHelper.showModalAlert("Ошибка", t.responseText);
            })
            .always(function () {
              icHelper.afterLoadMore(o(this));
            });
      }),
        o(document).on("click", "#requestClusterContEdit", function () {
          o("#formLockerRequestIncluster").css("display", "none"),
            o("#requestInClGenFiles").empty(),
            o("#buildRequestInClusterForm").show(),
            o("#requestOnlineSign").hide(),
            o("#signInfoText").hide();
        }),
        o(document).on("click", "#signRequestInClusterForm", function () {
          o.ajax({
            method: "POST",
            global: !0,
            url: Routing.generate("requestInClusterSignMethods"),
          })
            .done(function (e) {
              o("#requestInClusterSignHolder").html(e);
            })
            .fail(function (e) {
              icHelper.showModalAlert("Ошибка", e.responseText);
            });
        }),
        o(document).on("click", "#requestAttachSign", function () {
          o("#reqClSignUploader").trigger("click");
        }),
        o(document).on("change", "#reqClSignUploader", function () {
          var e = o(this)[0].files[0],
            t = new FileReader(),
            s = o(this).data("drfid");
          t.addEventListener("loadend", function (e) {
            var t = e.srcElement.result;
            o("#requestInClusterSignHolder").empty(),
              o
                .ajax({
                  method: "POST",
                  global: !0,
                  data: {
                    sign: t,
                  },
                  url: Routing.generate("requestInClusterSignXml", {
                    requestDraft: s,
                  }),
                })
                .done(function (e) {
                  o("#requestInClusterSignHolder").append(
                    '<div class="podpis_file_modal timeline_not_line">\n    <div class="timeline_el">\n        <div class="div_ico_wrap">\n            <div class="div_ico">\n                <svg class="svg-icon" width="14" height="10">\n                    <use xlink:href="/svg/all-icons2.svg#done"></use>\n                </svg>\n            </div>\n        </div>\n        <div class="div_name">            Файл успешно подписан        </div>\n    </div>\n</div>'
                  ),
                    o("#requestOnlineSign").hide(),
                    o("#requestInClusterSubmitBtn").show();
                })
                .fail(function (e) {
                  o("#requestInClusterSignHolder").append(
                    o("<div/>")
                      .attr("role", "alert")
                      .addClass("alert alert-danger")
                      .text(
                        "Во время подписания заявки возникла ошибка, попробуйте позднее."
                      )
                  );
                });
          }),
            t.readAsText(e);
        }),
        o(document).on("click", "#requestOnlineSign", function () {
          var e,
            t,
            s,
            n = o("#signaRIC").data("drfid");
          (e = Routing.generate("requestInClusterGetXmlFile", {
            requestDraft: n,
          })),
            (t = function (e) {
              new SignPluginBlitz(
                o("#signaRIC"),
                e,
                function (e) {
                  o("#requestInClusterSignHolder").empty(),
                    o
                      .ajax({
                        method: "POST",
                        global: !0,
                        data: {
                          sign: e.signature,
                        },
                        url: Routing.generate("requestInClusterSignXml", {
                          requestDraft: n,
                        }),
                      })
                      .done(function (e) {
                        o("#requestInClusterSignHolder").append(
                          o("<div/>")
                            .attr("role", "alert")
                            .addClass("alert alert-success")
                            .text("Файл успешно подписан")
                        ),
                          o("#requestOnlineSign").hide(),
                          o("#requestInClusterSubmitBtn").show();
                      })
                      .fail(function (e) {
                        o("#requestInClusterSignHolder").append(
                          o("<div/>")
                            .attr("role", "alert")
                            .addClass("alert alert-danger")
                            .text(
                              "Во время подписания заявки возникла ошибка, попробуйте позднее."
                            )
                        );
                      });
                },
                function () {
                  o("#requestInClusterSignHolder").append(
                    o("<div/>")
                      .attr("role", "alert")
                      .addClass("alert alert-danger")
                      .text(
                        "Во время подписания заявки возникла ошибка, попробуйте позднее."
                      )
                  );
                }
              ).init();
            }),
            (s = new XMLHttpRequest()).open("GET", e, !0),
            (s.responseType = "blob"),
            (s.onreadystatechange = function () {
              4 == s.readyState && t && t(s.response);
            }),
            s.send(null);
        }),
        (window.formRequestSuccess = function () {
          icHelper.hideModal(),
            o("#request-in-cluster").hide(),
            icHelper.showModalAlert(
              "Ваша заявка отправлена",
              '<div class="text-center"><button onclick="icHelper.hideModal();" type="button" class="btn2-light btn">Закрыть</button></div>'
            );
        });
    },
    84641: function (e, t, s) {
      var o = s(619755);
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      window.severalCustomDropzone = {
        fileTpl:
          '{{#files}}<div class="exchange-file"><div class="dt1"><div class="file_el file_el2"><div class="file_td1"><div class="file_ico"><i class="material-icons">subject</i></div></div><div class="file_td2"><div class="file_tit dz-filename">{{{name}}}</div><span class="file_text1">{{{ext}}}, {{{size}}}</span></div></div></div><div class="btn_type2 dz-remove" onclick="severalCustomDropzone.removeFile(this, \'{{{input}}}\');"><button id="" class="btn btn-close dz-remove"><svg class="svg-icon" width="16" height="16"><use xlink:href="/svg/all-icons.svg#close2"></use></svg></button></div></div>{{/files}}',
        handleFile: function (e) {
          var t = e.files,
            s = o(e).closest(".several-dropzone-custom-file"),
            a = o(e).closest(".file-row"),
            i = s.find(".dz-file-preview"),
            r = o(e).data().maxfilecount ? o(e).data().maxfilecount : 1;
          if (
            1 === t.length &&
            "object" ===
              ("undefined" == typeof mustache ? "undefined" : n(mustache))
          ) {
            var l = {
                files: [],
              },
              c = o(e).data().fileext,
              u = o(e).data().maxfilesize,
              d = t[0];
            if (c && !icHelper.checkFileExt(d, c)) return o(e).val(""), !1;
            if (u && !icHelper.checkFileSize(d, u)) return o(e).val(""), !1;
            var h = d.name.split("."),
              m = h.pop(),
              f = h.join(".");
            l.files.push({
              input: o(e).attr("id"),
              name: f,
              ext: m,
              size: icHelper.bytesToSize(d.size),
            }),
              l.files.length &&
                (mustache.parse(this.fileTpl),
                i.append(mustache.render(this.fileTpl, l)),
                a.addClass("d-none")),
              s.find(".exchange-file").length < r && this.addBlock(s);
          }
        },
        addBlock: function (e) {
          e.find("[type=file]").each(function (e, t) {
            if ("" === o(t).val())
              return o(t).closest(".file-row").removeClass("d-none"), !1;
          });
        },
        removeFile: function (e, t) {
          var s = o(e).closest(".several-dropzone-custom-file"),
            n = s.find(".exchange-file").length,
            a = o("#" + t),
            i = a.data().maxfilecount ? a.data().maxfilecount : 1;
          a.val(""),
            o(e).closest(".exchange-file").remove(),
            n === i
              ? a.closest(".file-row").removeClass("d-none")
              : 0 === s.find(".file-row:not(.d-none)").length &&
                this.addBlock(s);
        },
        showCover: function (e) {
          if (e.files && e.files[0]) {
            var t = new FileReader();
            (t.onload = function (e) {
              o(".cover_holder img").attr("src", e.target.result);
            }),
              t.readAsDataURL(e.files[0]),
              o(".cover_holder .btn_edit").removeClass("d-none");
          }
        },
      };
    },
    401047: function (e, t, s) {
      var o = s(619755);
      if ("undefined" != typeof wsData && wsData.success) {
        var n = wsData.wsaddress,
          a = WS.connect(n);
        a.on("socket/connect", function (e) {
          o(".toast").toast({
            autohide: !1,
          }),
            console.log("Successfully Connected!");
          var t = wsData.notifications_room;
          o(document).on("click", ".company_rent_inv", function () {
            var t = wsData.notifications_room;
            e.publish("app/chat/" + t, "wanna talk to you");
          }),
            e.subscribe("app/chat/" + t, function (e, t) {
              var s = JSON.parse(t.msg),
                n =
                  "mes_" +
                  Math.round(new Date().getTime() / 1e3) +
                  Math.round(1e5 * Math.random()),
                a = o("<div/>", {
                  class: "pushEventMsg toast",
                  id: n,
                  "data-autohide": !1,
                }),
                i = o("<div/>", {
                  class: "pushEventMsgTitle toast-header",
                });
              s.hasOwnProperty("title") &&
                s.title &&
                i.append(
                  o("<strong/>", {
                    class: "mr-auto",
                    text: s.title,
                  })
                ),
                i.append(
                  o("<button/>", {
                    class: "ml-2 mb-1 close",
                    "data-dismiss": "toast",
                    "aria-label": "Close",
                  }).append(
                    o("<span>", {
                      "aria-hidden": !0,
                    }).html("&times;")
                  )
                ),
                a.append(i);
              var r = o("<div/>", {
                class: "pushEventMsgBody toast-body",
              });
              if (
                (s.hasOwnProperty("imageLink") &&
                  s.imageLink &&
                  r.append(
                    o("<img/>", {
                      src: s.imageLink,
                      class: "pushEventMsgImg",
                      width: 100,
                      height: 100,
                    })
                  ),
                s.hasOwnProperty("name") &&
                  s.name &&
                  r.append(
                    o("<div>", {
                      class: "pushEventMsgAddr",
                      text: s.name,
                    })
                  ),
                s.hasOwnProperty("body") &&
                  s.body &&
                  r
                    .append(
                      o("<div>", {
                        class: "pushEventMsgBody",
                      })
                    )
                    .html(s.body),
                s.hasOwnProperty("url") && s.url)
              ) {
                var l = s.url;
                s.hasOwnProperty("urlTitle") && s.urlTitle && (l = s.urlTitle),
                  r.append(
                    o("<div>", {
                      class: "pushEventMsgUrlHolder",
                    }).append(
                      o("<a/>", {
                        href: s.url,
                        text: l,
                      })
                    )
                  );
              }
              a.append(r), o("#pushHolder").append(a), o("#" + n).toast("show");
            });
        }),
          a.on("socket/disconnect", function (e) {
            console.log(
              "Disconnected for " + e.reason + " with code " + e.code
            );
          });
      }
      o(document).on("click", ".pushEventMsgHide", function () {
        o(this).parents(".pushEventMsg").remove();
      });
    },
    60643: function (e, t) {
      var s, o, n, a;
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      (a = (function () {
        "use strict";
        function e(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var t =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var o in s)
                  Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
              }
              return e;
            },
          s =
            "function" == typeof Symbol && "symbol" == i(Symbol.iterator)
              ? function (e) {
                  return i(e);
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : i(e);
                },
          o = (function () {
            function e(e, t) {
              for (var s = 0; s < t.length; s++) {
                var o = t[s];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, s, o) {
              return s && e(t.prototype, s), o && e(t, o), t;
            };
          })(),
          n = (function () {
            function n(t, s) {
              e(this, n),
                (this.context_ = t || {
                  base_url: "",
                  prefix: "",
                  host: "",
                  port: "",
                  scheme: "",
                }),
                this.setRoutes(s || {});
            }
            return (
              o(
                n,
                [
                  {
                    key: "setRoutingData",
                    value: function (e) {
                      this.setBaseUrl(e.base_url),
                        this.setRoutes(e.routes),
                        "prefix" in e && this.setPrefix(e.prefix),
                        "port" in e && this.setPort(e.port),
                        this.setHost(e.host),
                        this.setScheme(e.scheme);
                    },
                  },
                  {
                    key: "setRoutes",
                    value: function (e) {
                      this.routes_ = Object.freeze(e);
                    },
                  },
                  {
                    key: "getRoutes",
                    value: function () {
                      return this.routes_;
                    },
                  },
                  {
                    key: "setBaseUrl",
                    value: function (e) {
                      this.context_.base_url = e;
                    },
                  },
                  {
                    key: "getBaseUrl",
                    value: function () {
                      return this.context_.base_url;
                    },
                  },
                  {
                    key: "setPrefix",
                    value: function (e) {
                      this.context_.prefix = e;
                    },
                  },
                  {
                    key: "setScheme",
                    value: function (e) {
                      this.context_.scheme = e;
                    },
                  },
                  {
                    key: "getScheme",
                    value: function () {
                      return this.context_.scheme;
                    },
                  },
                  {
                    key: "setHost",
                    value: function (e) {
                      this.context_.host = e;
                    },
                  },
                  {
                    key: "getHost",
                    value: function () {
                      return this.context_.host;
                    },
                  },
                  {
                    key: "setPort",
                    value: function (e) {
                      this.context_.port = e;
                    },
                  },
                  {
                    key: "getPort",
                    value: function () {
                      return this.context_.port;
                    },
                  },
                  {
                    key: "buildQueryParams",
                    value: function (e, t, o) {
                      var n = this,
                        a = void 0,
                        i = new RegExp(/\[\]$/);
                      if (t instanceof Array)
                        t.forEach(function (t, a) {
                          i.test(e)
                            ? o(e, t)
                            : n.buildQueryParams(
                                e +
                                  "[" +
                                  ("object" ===
                                  (void 0 === t ? "undefined" : s(t))
                                    ? a
                                    : "") +
                                  "]",
                                t,
                                o
                              );
                        });
                      else if ("object" === (void 0 === t ? "undefined" : s(t)))
                        for (a in t)
                          this.buildQueryParams(e + "[" + a + "]", t[a], o);
                      else o(e, t);
                    },
                  },
                  {
                    key: "getRoute",
                    value: function (e) {
                      var t = this.context_.prefix + e;
                      if (t in this.routes_) e = t;
                      else if (!(e in this.routes_))
                        throw new Error(
                          'The route "' + e + '" does not exist.'
                        );
                      return this.routes_[e];
                    },
                  },
                  {
                    key: "generate",
                    value: function (e, s) {
                      var o =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        n = this.getRoute(e),
                        a = s || {},
                        i = t({}, a),
                        r = "",
                        l = !0,
                        c = "",
                        u =
                          void 0 === this.getPort() || null === this.getPort()
                            ? ""
                            : this.getPort();
                      if (
                        (n.tokens.forEach(function (t) {
                          if ("text" === t[0])
                            return (r = t[1] + r), void (l = !1);
                          if ("variable" !== t[0])
                            throw new Error(
                              'The token type "' + t[0] + '" is not supported.'
                            );
                          var s = n.defaults && t[3] in n.defaults;
                          if (
                            !1 === l ||
                            !s ||
                            (t[3] in a && a[t[3]] != n.defaults[t[3]])
                          ) {
                            var o = void 0;
                            if (t[3] in a) (o = a[t[3]]), delete i[t[3]];
                            else {
                              if (!s) {
                                if (l) return;
                                throw new Error(
                                  'The route "' +
                                    e +
                                    '" requires the parameter "' +
                                    t[3] +
                                    '".'
                                );
                              }
                              o = n.defaults[t[3]];
                            }
                            if ((!0 !== o && !1 !== o && "" !== o) || !l) {
                              var c = encodeURIComponent(o).replace(
                                /%2F/g,
                                "/"
                              );
                              "null" === c && null === o && (c = ""),
                                (r = t[1] + c + r);
                            }
                            l = !1;
                          } else s && t[3] in i && delete i[t[3]];
                        }),
                        "" === r && (r = "/"),
                        n.hosttokens.forEach(function (e) {
                          var t = void 0;
                          return "text" === e[0]
                            ? void (c = e[1] + c)
                            : void (
                                "variable" === e[0] &&
                                (e[3] in a
                                  ? ((t = a[e[3]]), delete i[e[3]])
                                  : n.defaults &&
                                    e[3] in n.defaults &&
                                    (t = n.defaults[e[3]]),
                                (c = e[1] + t + c))
                              );
                        }),
                        (r = this.context_.base_url + r),
                        n.requirements &&
                        "_scheme" in n.requirements &&
                        this.getScheme() != n.requirements._scheme
                          ? (r =
                              n.requirements._scheme +
                              "://" +
                              (c || this.getHost()) +
                              r)
                          : void 0 !== n.schemes &&
                            void 0 !== n.schemes[0] &&
                            this.getScheme() !== n.schemes[0]
                          ? (r =
                              n.schemes[0] + "://" + (c || this.getHost()) + r)
                          : c &&
                            this.getHost() !== c + ("" === u ? "" : ":" + u)
                          ? (r =
                              this.getScheme() +
                              "://" +
                              c +
                              ("" === u ? "" : ":" + u) +
                              r)
                          : !0 === o &&
                            (r = this.getScheme() + "://" + this.getHost() + r),
                        Object.keys(i).length > 0)
                      ) {
                        var d = void 0,
                          h = [],
                          m = function (e, t) {
                            (t =
                              null === (t = "function" == typeof t ? t() : t)
                                ? ""
                                : t),
                              h.push(
                                encodeURIComponent(e) +
                                  "=" +
                                  encodeURIComponent(t)
                              );
                          };
                        for (d in i) this.buildQueryParams(d, i[d], m);
                        r = r + "?" + h.join("&").replace(/%20/g, "+");
                      }
                      return r;
                    },
                  },
                ],
                [
                  {
                    key: "getInstance",
                    value: function () {
                      return a;
                    },
                  },
                  {
                    key: "setData",
                    value: function (e) {
                      n.getInstance().setRoutingData(e);
                    },
                  },
                ]
              ),
              n
            );
          })();
        n.Route, n.Context;
        var a = new n();
        return {
          Router: n,
          Routing: a,
        };
      })()),
        (o = []),
        (s = a.Routing),
        void 0 === (n = "function" == typeof s ? s.apply(t, o) : s) ||
          (e.exports = n);
    },
    177754: function (e, t, s) {
      "use strict";
      s.r(t);
    },
    369894: function (e, t, s) {
      "use strict";
      s.r(t);
    },
    625805: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"base_url":"","routes":{"technology_competition":{"tokens":[["text","/technology_competition"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"technology_competition-cn":{"tokens":[["text","/technology_competition-cn"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"investicionnaya-upakovka-redirect":{"tokens":[["text","/investicionnaya-exspertise"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"investicionnaya-upakovka":{"tokens":[["text","/investicionnaya-exspertise/old"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"AccelerationRequestsForm":{"tokens":[["text","/measure-supports/acceleration-requests"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"get_bank_info":{"tokens":[["text","/ajax/getBankInfo"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"get_bank_info_by_bik":{"tokens":[["text","/ajax/ajax/get-bank-info-by-bik"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"burse-profile-list":{"tokens":[["text","/profile/burse"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"burse-profile-single":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/burse/single"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"burse-profile-download":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/burse/download"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxBusinessPartners":{"tokens":[["text","/ajax/dp/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxBusinessPartnersInCategory":{"tokens":[["text","/ajax/dp/in_category"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getAjaxSlides":{"tokens":[["text","/ajax/slides"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxTemplate":{"tokens":[["text","/ajax/dp/template/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"businnes_partner":{"tokens":[["text","/"],["variable","/","[^/]++","guid"],["text","/dp"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"clustersList":{"tokens":[["text","/clusters/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_set_widget_needs":{"tokens":[["text","/clusters/ajax/request/setwidgetneeds"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_profile_favorite_clusters":{"tokens":[["variable","/","[^/]++","page"],["variable","/","[^/]++","type"],["text","/clusters/ajax/profile/favorite_clusters"]],"defaults":{"type":928,"page":1},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_products_info_id":{"tokens":[["variable","/","[^/]++","id"],["text","/company/products/info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_service_info_id":{"tokens":[["variable","/","[^/]++","id"],["text","/company/service/info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cluster_member_download":{"tokens":[["text","/cluster_member/download/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_documents_list":{"tokens":[["variable","/","[^/]++","id"],["text","/company/documents/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_documents_list_by_type":{"tokens":[["variable","/","[^/]++","id"],["text","/company/documents/listbytype"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_registry_block":{"tokens":[["variable","/","[^/]++","pagesize"],["variable","/","[^/]++","page"],["text","/company/registry_block"]],"defaults":{"page":"1","pagesize":"10"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_registry_download":{"tokens":[["text","/company/registry_block_download"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyDocumentsList":{"tokens":[["text","/profile/documents/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyDocumentsForm":{"tokens":[["variable","/","[^/]++","type"],["text","/profile/documents/form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyDeleteDocument":{"tokens":[["variable","/","[^/]++","doc"],["text","/profile/documents/delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company-email-list":{"tokens":[["text","/profile/comany-email/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company-email-save":{"tokens":[["variable","/","[^/]++","guid"],["variable","/","[^/]++","type"],["text","/ajax/comany-email/save"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"company-email-add":{"tokens":[["text","/ajax/comany-email/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"company-email-remove":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/comany-email/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"company-contact-email-remove":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/comany-email-contact/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"company-contact-email-add":{"tokens":[["text","/ajax/comany-email-contact/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"company-email-send-code":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/comany-email/send-code"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"profile_all_requests":{"tokens":[["text","/profile/all_requests"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_list_requests":{"tokens":[["text","/profil/list_requests"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"request_list_status":{"tokens":[["text","/"],["variable","/","[^/]++","page"],["variable","/","[^/]++","status"],["text","/profile/request_list_status"]],"defaults":{"status":1,"page":1},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"request_list_waiting":{"tokens":[["text","/"],["variable","/","[^/]++","page"],["variable","/","[^/]++","waiting"],["text","/profile/request_list_waiting"]],"defaults":{"waiting":"true","page":1},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_subrequest_count":{"tokens":[["text","/company/sub_request/count"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measure_request_list":{"tokens":[["variable","/","[^/]++","page"],["text","/profile/measure_request_list"]],"defaults":{"page":1},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"my_services_list":{"tokens":[["variable","/","[^/]++","page"],["text","/profile/my_services_list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_single_request":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/single_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_company_platform":{"tokens":[["text","/ajax/request/company/platform"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_company_needs":{"tokens":[["text","/ajax/request/company/needs"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_company_lic":{"tokens":[["text","/ajax/request/company/lic"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_company_project":{"tokens":[["text","/ajax/request/company/project"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_company_patent":{"tokens":[["text","/ajax/request/company/patent"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_company_equip":{"tokens":[["text","/ajax/request/company/equip"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_company_service":{"tokens":[["text","/ajax/request/company/service"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_project_industrial_partner":{"tokens":[["text","/ajax/request/project/industrialpartner"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_project_investor":{"tokens":[["text","/ajax/request/project/investor"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_company_investor":{"tokens":[["text","/ajax/request/company/investor"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_company_object":{"tokens":[["text","/ajax/request/company/object"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"set_comment_is_showed":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/request/company/showedcomment"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"ajax_request_company_product":{"tokens":[["text","/ajax/request/company/product"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_getCompany":{"tokens":[["text","/ajax/request/get_company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"biznes-protiv-covid-19":{"tokens":[["text","/biznes-protiv-covid-19"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"contractExchange":{"tokens":[["text","/contract_exchange/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"contractExchange_negotiation":{"tokens":[["text","/contract_exchange_negotiation"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-request-list-noauth":{"tokens":[["text","/contract_exchange/accreditation/request/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-request-create-noauth":{"tokens":[["variable","/","[^/]++","type"],["text","/contract_exchange/accreditation/request/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-category-noauth":{"tokens":[["text","/contract_exchange/exchange/category"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"create-exchange-no-auth":{"tokens":[["variable","/","[^/]++","type"],["text","/contract_exchange/exchange/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"contracts":{"tokens":[["text","/profile/contracts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"showContract":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/contract"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"addFileForContract":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/contract/addfile"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"signContractInBrowser":{"tokens":[["text","/profile/contracts/sign/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"signCrypto":{"tokens":[["text","/profile/contracts/sign2"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"addContractPage":{"tokens":[["text","/profile/contracts/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"addContract":{"tokens":[["text","/ajax/contracts/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"addContractWithFile":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/contracts/addwithfile"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"createContractFromRequest":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/contracts/all_request/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST","GET"],"schemes":[]},"editContract":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/contracts/edit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"deleteContract":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/contracts/delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"closeContract":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/contracts/close"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"addSign":{"tokens":[["text","/add"],["variable","/","[^/]++","fileid"],["text","/sign"],["variable","/","[^/]++","contractid"],["text","/ajax/contracts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"addSecondSign":{"tokens":[["text","/add"],["variable","/","[^/]++","fileid"],["text","/secondsign"],["variable","/","[^/]++","contractid"],["text","/ajax/contracts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"getSign":{"tokens":[["variable","/","[^/]++","fileid"],["text","/get"],["variable","/","[^/]++","memberid"],["text","/sign"],["variable","/","[^/]++","contractid"],["text","/ajax/contracts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"removeFileFromContract":{"tokens":[["text","/ajax/contracts/file/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"contractGetSingByMember":{"tokens":[["text","/"],["variable","/","[^/]++","file"],["variable","/","[^/]++","member"],["text","/sign_by_member"],["variable","/","[^/]++","contract"],["text","/ajax/contracts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"contractSearchCompanyByInn":{"tokens":[["text","/ajax/contract/search_company_by_inn"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"expcovid-reestr":{"tokens":[["variable","/","[^/]++","participant"],["text","/expcovid-reestr"]],"defaults":{"participant":"participant"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"expcovid-reestr-foodcourt":{"tokens":[["text","/expcovid-reestr-foodcourt"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"decisionByPurposeList":{"tokens":[["variable","/","[^/]++","purpose"],["text","/ajax/admin/decision_by_purpose_list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"localizeRemoteFileUrl":{"tokens":[["variable","/","[^/]++","url"],["text","/filestore/localize"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyDocumentsDownload":{"tokens":[["variable","/","[^/]++","id"],["text","/filestore/get"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"DownloadFromStore":{"tokens":[["variable","/","[^/]++","id"],["text","/filestore/fromstore/get"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"iasCompanySearch":{"tokens":[["text","/ajax/forms/ias/company/autocomplete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringSupplyFullDownload":{"tokens":[["variable","/","[^/]++","supplyItem"],["text","/registry/download/supply"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"fullSignInfo":{"tokens":[["text","/tools/sign/info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"sonata_media_download":{"tokens":[["variable","/","[^/]++","format"],["variable","/","[^/]++","id"],["text","/media/download"]],"defaults":{"format":"reference"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"modal_trustee_list_content":{"tokens":[["text","/modals/trusteeList"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"supprt_send_error":{"tokens":[["text","/support/senderror"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"training":{"tokens":[["text","/cabine/study"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physical_Innoacademy":{"tokens":[["text","/cabinet/inno_academy"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"study_course":{"tokens":[["variable","/","[^/]++","id"],["text","/cabine/study/course"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"innoacademy_course":{"tokens":[["variable","/","[^/]++","id"],["text","/cabinet/inno_academy/course"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"physicalPersonVentureAcademy":{"tokens":[["text","/cabinet/ventureacademy"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"venture_course":{"tokens":[["variable","/","[^/]++","id"],["text","/cabinet/venture/course"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"listVenturePractice":{"tokens":[["text","/cabinet/ventureacademy/practice/list/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"business_program_old":{"tokens":[["text","/education/business_program_old"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"business_program_course":{"tokens":[["variable","/","[^/]++","id"],["text","/education/business_program"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"physical_investupakovka":{"tokens":[["text","/cabinet/invest_upakovka"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"investupakovka_profile":{"tokens":[["text","/profile/invest_upakovka"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"investupakovka_course":{"tokens":[["variable","/","[^/]++","id"],["text","/cabinet/invest_upakovka/course"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"profile_investupakovka_course":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/invest_upakovka/course"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getIpStudyVideoBlockAjax":{"tokens":[["variable","/","[^/]++","courseGuid"],["text","/ipstudy/ajax/course/video-block"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}"},"hosttokens":[],"methods":[],"schemes":[]},"eventsListV2":{"tokens":[["text","/events"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventsListAjaxV2":{"tokens":[["text","/events_v2/ajax/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"singleEventV2":{"tokens":[["variable","/","[^/]++","id"],["text","/event"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventDatesListV2":{"tokens":[["text","/events_date_v2"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventListOnDateV2":{"tokens":[["text","/events_on_date_v2"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registrationFormAsyncV2":{"tokens":[["variable","/","[^/]++","eventGuid"],["text","/event/ajax/form"]],"defaults":[],"requirements":{"measureGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"eventsCalendarList":{"tokens":[["variable","/","[^/]++","year"],["text","/event/calendar"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventsCalendarListAjax":{"tokens":[["text","/events/calendar/ajax"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventsPdf":{"tokens":[["text","/download/events.pdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventsPluginVerstkaV2":{"tokens":[["text","/events/ajax/plugin_templates_v2"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"mainEvents":{"tokens":[["text","/ajax/main/events"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"business_program":{"tokens":[["text","/education/business_program"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"setEventToFavouritesAjax":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","eventGuid"],["text","/events/ajax/set-favourites"]],"defaults":[],"requirements":{"eventGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"exchange":{"tokens":[["text","/profile/exchange/category"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"create-exchange":{"tokens":[["variable","/","[^/]++","express"],["variable","/","[^/]++","type"],["text","/profile/exchange/create"]],"defaults":{"express":"null"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"clone-exchange":{"tokens":[["variable","/","[^/]++","id"],["text","/exchange/clone"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"pdf-exchange-form":{"tokens":[["text","/ajax/exchange/form/pdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-exchange-list":{"tokens":[["text","/profile/exchange"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-niokr-list":{"tokens":[["text","/profile/niokr"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-exchange-show":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/exchange/single"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-niokr-show":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/niokr/single"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cabinet-exchange-show":{"tokens":[["variable","/","[^/]++","id"],["text","/cabinet/exchange/single"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-exchange-show-recommended":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/exchange/single-recommended"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-niokr-show-recommended":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/niokr/single-recommended"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-exchange-show-accreditation":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/exchange/single-accreditation"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-niokr-show-accreditation":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/niokr/single-accreditation"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-exchange-remove":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/exchange/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"profile-exchange-remove-group":{"tokens":[["text","/profile/exchange/remove-group"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"profile-exchange-end-search":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/exchange/end-search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"pdf-exchange":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange/show/pdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"pdf-accreditation":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange-accreditation/pdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"add-favorite-exchange":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange/favorite/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"remove-favorite-exchange":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange/favorite/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"remove-exchange-file":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange/files/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"remove-exchange-accreditation-file":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange-accreditation/files/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-make-offer":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange/make-offer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-offer-list":{"tokens":[["text","/profile/offer/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-offer-get-comments":{"tokens":[["variable","/","[^/]++","offer"],["text","/profile/offer/get-comments"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-offer-show":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/offer/show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-offer-niokr-show":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/offerNiokr/show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cabinet-offer-show":{"tokens":[["variable","/","[^/]++","id"],["text","/cabinet/offer/show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-offer-accept":{"tokens":[["variable","/","[^/]++","offer"],["text","/ajax/offer/accept"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-offer-reject":{"tokens":[["variable","/","[^/]++","actionComment"],["variable","/","[^/]++","offer"],["text","/ajax/offer/reject"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-showed-offers":{"tokens":[["text","/ajax/exchange/showed-offers"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-request-list":{"tokens":[["text","/profile/accreditation/request/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-niokr-request-list":{"tokens":[["text","/profile/accreditation/niokr/request/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-request-create":{"tokens":[["variable","/","[^/]++","type"],["text","/accreditation/request/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-niokr-request-create":{"tokens":[["variable","/","[^/]++","type"],["text","/accreditation/niokr/request/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-request-edit":{"tokens":[["variable","/","[^/]++","id"],["text","/accreditation/request/edit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-niokr-request-edit":{"tokens":[["variable","/","[^/]++","id"],["text","/accreditation-niokr/request/edit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-publish":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange/publish"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-publish":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/accreditation/publish"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accepted-exchange-unpublish":{"tokens":[["variable","/","\\\\d+","id"],["text","/ajax/exchange/accepted/unpublish"]],"defaults":[],"requirements":{"id":"\\\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"accreditation-unpublish":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/accreditation/unpublish"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-publish-group":{"tokens":[["text","/ajax/exchange/publish-group"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"exchange-unpublish-group":{"tokens":[["text","/ajax/exchange/unpublish-group"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"exchange-poll":{"tokens":[["variable","/","[^/]++","poll"],["variable","/","[^/]++","id"],["text","/ajax/exchange/poll"]],"defaults":{"poll":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-offer-comment-show":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange/offer-comment-show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditaion-equip":{"tokens":[["text","/ajax/exchange/equip"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-equip-add":{"tokens":[["text","/ajax/exchange/addequip"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-set-showed":{"tokens":[["text","/ajax/exchange/set-accreditation-showed"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cabinet-exchange-list":{"tokens":[["text","/cabinet/exchange"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-offer-affirm-data":{"tokens":[["variable","/","[^/]++","offer"],["text","/ajax/exchange-offer-affirm-data"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-offer-affirm-data-accept":{"tokens":[["variable","/","[^/]++","offerData"],["text","/ajax/exchange-offer-affirm-data/accept"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-offer-affirm-data-reject":{"tokens":[["variable","/","[^/]++","offerData"],["text","/ajax/exchange-offer-affirm-data/reject"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-resume-search-offer":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange-resume-search-offer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-make-reply":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange/make-reply"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-replay-show":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/replay/show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-replay-niokr-show":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/replay-niokr/show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-replay-comment-show":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/exchange/replay-comment-show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-replay-get-comments":{"tokens":[["variable","/","[^/]++","replay"],["text","/profile/replay/get-comments"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-manufacturer":{"tokens":[["variable","/","[^/]++","createdone"],["variable","/","[^/]++","exchange"],["text","/profile/exchange/manufacturer"]],"defaults":{"createdone":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-info-manufacturer":{"tokens":[["variable","/","[^/]++","accr"],["variable","/","[^/]++","company"],["text","/ajax/exchange/manufacturer/info"]],"defaults":{"accr":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-notification-manufacturer":{"tokens":[["variable","/","[^/]++","exchange"],["variable","/","[^/]++","company"],["text","/ajax/exchange/manufacturer/notification"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"replayActionComment":{"tokens":[["variable","/","[^/]++","actionComment"],["variable","/","[^/]++","value"],["variable","/","[^/]++","replay"],["text","/ajax/exchange/replay/action"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cabinet-replay-show":{"tokens":[["variable","/","[^/]++","id"],["text","/cabinet/replay/show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"express-accreditation-request-create":{"tokens":[["variable","/","[^/]++","type"],["text","/accreditation/express/request/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"niokr-manufacturer":{"tokens":[["variable","/","[^/]++","createdone"],["variable","/","[^/]++","exchange"],["text","/profile/niokr/manufacturer"]],"defaults":{"createdone":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cabinet-niokr-list":{"tokens":[["text","/cabinet/niokr"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physic-exchange-manufacturer":{"tokens":[["variable","/","[^/]++","createdone"],["variable","/","[^/]++","exchange"],["text","/cabinet/manufacturer"]],"defaults":{"createdone":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"loadCommentsFormWithDataOffer":{"tokens":[["variable","/","[^/]++","offer"],["text","/ajax/exchange/offer/load_comments_form_with_data"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"loadCommentsFormWithDataReplay":{"tokens":[["variable","/","[^/]++","replay"],["text","/ajax/exchange/replay/load_comments_form_with_data"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-accreditation-remove":{"tokens":[["variable","/","[^/]++","id"],["text","/exchange/accreditation/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"getOfferCommentsFromList":{"tokens":[["variable","/","[^/]++","offer"],["text","/profile/offer/get-list-comments"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getReplayCommentsFromList":{"tokens":[["variable","/","[^/]++","replay"],["text","/profile/replay/get-list-comments"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accreditation-measure-create":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/accreditation/measure/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-exchange-redirect":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/exchange/redirect"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringListRequest":{"tokens":[["text","/profile/factoring/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRequestNotificationView":{"tokens":[["variable","/","[^/]++","factoringRequest"],["text","/profile/factoring/show/notification"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRequestView":{"tokens":[["variable","/","[^/]++","factoringRequest"],["text","/profile/factoring/show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringContractSignatureDownload":{"tokens":[["variable","/","[^/]++","who"],["variable","/","[^/]++","factoringRequest"],["text","/profile/factoring/download_factoring_signature"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringNotificationDownload":{"tokens":[["variable","/","[^/]++","factoringRequest"],["text","/profile/factoring/download_factoring_notification"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringContractDownload":{"tokens":[["variable","/","[^/]++","factoringRequest"],["text","/profile/factoring/download_factoring_contract"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"downloadFactoringRegistryPDF":{"tokens":[["text","/pdf"],["variable","/","[^/]++","registry"],["text","/profile/factoring/download_factoring_registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"downloadFactoringRegistryJSON":{"tokens":[["text","/json"],["variable","/","[^/]++","registry"],["text","/profile/factoring/download_factoring_registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"downloadRegistrySignature":{"tokens":[["variable","/","[^/]++","who"],["variable","/","[^/]++","registry"],["text","/profile/factoring/download_factoring_registry_sign"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRequestOffersList":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/factoring/offers"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRequestOffers":{"tokens":[["variable","/","[^/]++","offer"],["variable","/","[^/]++","id"],["text","/profile/factoring/offer/accapt"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cancelFactoringRequest":{"tokens":[["text","/"],["variable","/","[^/]++","factoringRequest"],["text","/profile/factoring/cancel/request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profileFactoringForm":{"tokens":[["text","/profile/factoring/form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profileFactoringFormValidation":{"tokens":[["variable","/","[^/]++","step"],["text","/profile/factoring/validation"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoring_signDocumentWindow":{"tokens":[["variable","/","[^/]++","document"],["text","/profile/factoring/document/sign/window"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoring_signDocument_add_sign":{"tokens":[["variable","/","[^/]++","document"],["text","/profile/factoring/document/sign/document"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoring_cancelDocumentForm":{"tokens":[["variable","/","[^/]++","document"],["text","/profile/factoring/document/cancel/form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profileFactoringFormContractData":{"tokens":[["variable","/","[^/]++","contract"],["text","/profile/factoring/contract/info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringCreateSupplyRegistry":{"tokens":[["variable","/","[^/]++","factoringRequest"],["text","/profile/factoring/registry/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRegistryFullDownload":{"tokens":[["variable","/","[^/]++","registry"],["text","/profile/factoring/registry/full/download"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRemoveSupplyRegistryFull":{"tokens":[["variable","/","[^/]++","registry"],["text","/profile/factoring/registry/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringSignSupplyRegistry":{"tokens":[["variable","/","[^/]++","registry"],["text","/profile/factoring/registry/sign"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringSignSupplyFile":{"tokens":[["variable","/","[^/]++","supplyFile"],["text","/profile/factoring/registry/supply/file/sign"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRemoveSupplyRegistry":{"tokens":[["variable","/","[^/]++","supply"],["text","/supply/remove"],["variable","/","[^/]++","registry"],["text","/profile/factoring/registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registrySupplyAdd":{"tokens":[["text","/supply/add"],["variable","/","[^/]++","registry"],["text","/profile/factoring/registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registrySupplyValidate":{"tokens":[["variable","/","[^/]++","supply"],["text","/profile/factoring/registry/supply/validate"]],"defaults":{"supply":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registryContent":{"tokens":[["text","/content"],["variable","/","[^/]++","registry"],["text","/profile/factoring/registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"supplyDocumentsForm":{"tokens":[["text","/profile/factoring/registry/supply/fileForm"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"FactoringEarlyDocList":{"tokens":[["variable","/","[^/]++","target"],["variable","/","[^/]++","type"],["text","/contract/documents"],["variable","/","[^/]++","fRequest"],["text","/profile/factoring/request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registrySupplySave":{"tokens":[["text","/supply/save"],["variable","/","[^/]++","registry"],["text","/profile/factoring/registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registryEditSupplyItem":{"tokens":[["text","/editForm"],["variable","/","[^/]++","supply"],["text","/profile/factoring/registry/supply"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registrySupplyCount":{"tokens":[["text","/supply/count"],["variable","/","[^/]++","registry"],["text","/profile/factoring/registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRegistrySend":{"tokens":[["text","/send/factoring"],["variable","/","[^/]++","registry"],["text","/profile/factoring/registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRegistryPublic":{"tokens":[["text","/public"],["variable","/","[^/]++","registry"],["text","/profile/factoring/registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"factoringRegistryCancel":{"tokens":[["text","/cancel"],["variable","/","[^/]++","registry"],["text","/profile/factoring/registry"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"loadBlockFavorite":{"tokens":[["variable","/","[^/]++","type"],["text","/load_block_favorite"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"loadRentFavoriteBlock":{"tokens":[["variable","/","[^/]++","page"],["text","/load_rent_favorite"]],"defaults":{"page":1},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"forumRequest":{"tokens":[["text","/podacha-zayavki-na-uchastie-v-forume"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"frontendErrorLog":{"tokens":[["text","/frontend_error_log"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"futureTechList":{"tokens":[["text","/future_tech"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"auth_with_elk":{"tokens":[["text","/auth_with_elk"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"auth_IAS":{"tokens":[["text","/auth_ias"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyInfo":{"tokens":[["variable","/","[^/]++","section"],["variable","/","[0-9]+","id"],["text","/company"]],"defaults":{"section":"none"},"requirements":{"id":"[0-9]+"},"hosttokens":[],"methods":[],"schemes":[]},"companyInfoPdf":{"tokens":[["variable","/","[0-9]+","id"],["text","/company/pdf"]],"defaults":[],"requirements":{"id":"[0-9]+"},"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyProducts":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_products"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxRecomendedPartners":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_recomended_partners"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyCompetition":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_competition"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyBuilds":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_builds"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyEquips":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_equips"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyNeeds":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_needs"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyBuys":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_buys"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyObjects":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_objects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxProductsAll":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/products_all"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyNeedsAll":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_needs_all"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyCompetitionAll":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_competition_all"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyProjects":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxEquipsAll":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_equips_all"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyEmployee":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_employee"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyCommunications":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_communications"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyMessages":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_messages"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyFin":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_fin"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyBuysCustomer":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_buys_customer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxCompanyBuysSupplier":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company_buys_supplier"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"parseyml":{"tokens":[["text","/ajax/parseyml"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"downloadyml":{"tokens":[["variable","/","[^/]++","companyId"],["text","/downloadyml"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyEquipShow":{"tokens":[["variable","/","[^/]++","id"],["text","/equip_show"],["variable","/","[^/]++","companyid"],["text","/company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyProductShow":{"tokens":[["variable","/","[^/]++","id"],["text","/company/product_show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyPatentShow":{"tokens":[["variable","/","[^/]++","patentId"],["variable","/","[^/]++","companyId"],["text","/company/patent_show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyLicenseShow":{"tokens":[["variable","/",".+","licenseId"],["variable","/","[^/]++","companyId"],["text","/company/license_show"]],"defaults":[],"requirements":{"licenseId":".+"},"hosttokens":[],"methods":[],"schemes":[]},"company_single_buy":{"tokens":[["variable","/","[^/]++","id"],["text","/buy"],["variable","/","[^/]++","companyid"],["text","/company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyNeedsInfo":{"tokens":[["variable","/","[^/]++","id"],["text","/needs"],["variable","/","[^/]++","company"],["text","/company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"requestForSubCluster":{"tokens":[["text","/request_for_subcluster/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getClusterProjects":{"tokens":[["variable","/","[^/]++","guid"],["text","/get_cluster_projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"park":{"tokens":[["variable","/","[^/]++","id"],["text","/park"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_residents_platform":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/residents/platform"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_coworking":{"tokens":[["text","/ajax/request/coworking"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_resident":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/request/resident"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"delete_cluster":{"tokens":[["variable","/","[^/]++","id"],["text","/cluster/delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accept_invite":{"tokens":[["variable","/","[^/]++","request"],["variable","/","[^/]++","member"],["variable","/","[^/]++","cluster"],["text","/cluster/invite/accept"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"decline_invite":{"tokens":[["variable","/","[^/]++","request"],["text","/cluster/invite/decline"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accept_request":{"tokens":[["variable","/","[^/]++","request"],["variable","/","[^/]++","member"],["variable","/","[^/]++","cluster"],["text","/cluster/request/accept"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"super_creation":{"tokens":[["variable","/","[^/]++","guid"],["text","/cluster/super_creation"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"intersectoral_clusters":{"tokens":[["text","/ajax/intersectoral_clusters/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxInviteClusterMembers":{"tokens":[["variable","/","[0-9a-f]{32}","guid"],["text","/ajax/invite_cluster_members"]],"defaults":[],"requirements":{"guid":"[0-9a-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"karta-innovacionnyh-resheniy-data":{"tokens":[["text","/innovationmap-data"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getFormForInnovacionnyeResheniy":{"tokens":[["variable","/","[^/]++","type"],["text","/getformforinnovacionnyeresheniy"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"premisesrentnew-form":{"tokens":[["text","/premisesrentnew/form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"kreditovanie-rid-form":{"tokens":[["text","/iprights-secured-loan/form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registration-rights-ria-form":{"tokens":[["text","/registration_rights_ria/form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registration-rights-ria-form2":{"tokens":[["text","/registration_rights_ria/form2"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"patentexchange":{"tokens":[["text","/patent_exchange_page"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"techno_park_list":{"tokens":[["text","/ajax/techpark-list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"settind-trusted-persons":{"tokens":[["text","/settind_trusted_persons"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"mic3years":{"tokens":[["text","/mic-3-years"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"platformslkstat":{"tokens":[["text","/platforms_lk_stat"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"statica_nkotov":{"tokens":[["text","/statica_nkotov"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"novator2023":{"tokens":[["text","/novator2023_maket"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"statica1":{"tokens":[["text","/statica1"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"maketYlisitsin":{"tokens":[["text","/maket_ylisitsin"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_novator24":{"tokens":[["text","/ajax/novator24"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"modalReload":{"tokens":[["text","/modalReload"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"partner_organizations":{"tokens":[["text","/partner_organizations"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"technologyservicesexchange1":{"tokens":[["text","/technology_services_exchange1"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"technologyservicesexchange2":{"tokens":[["text","/technology_services_exchange2"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"technologyservicesexchange3":{"tokens":[["text","/technology_services_exchange3"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"idea":{"tokens":[["text","/idea"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_idea_objects":{"tokens":[["text","/ajax/idea/objects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_idea_search":{"tokens":[["text","/ajax/idea/search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxEditLendingContentLog":{"tokens":[["text","/admin_lending_edit_content_log/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxEditLendingContentLogCount":{"tokens":[["text","/admin_lending_edit_content_log_count/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"lending_calculator_data":{"tokens":[["variable","/","[^/]++","id"],["text","/lending-calculator-data"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"average_salaries":{"tokens":[["text","/ajax/average-salaries"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"innovation_products":{"tokens":[["text","/ajax/innovation-products"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"innovation_products_filters":{"tokens":[["text","/ajax/innovation-products-filters"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"update_org":{"tokens":[["text","/lk/update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"local_auth_register_api":{"tokens":[["text","/register_api"],["variable","/","ru|en","_locale"],["text","/auth"]],"defaults":{"_locale":"ru"},"requirements":{"_locale":"ru|en"},"hosttokens":[],"methods":[],"schemes":[]},"local_auth_login_api":{"tokens":[["text","/login_api"],["variable","/","ru|en","_locale"],["text","/auth"]],"defaults":{"_locale":"ru"},"requirements":{"_locale":"ru|en"},"hosttokens":[],"methods":[],"schemes":[]},"local_auth_forgot":{"tokens":[["text","/forgot"],["variable","/","ru|en","_locale"],["text","/auth"]],"defaults":{"_locale":"ru"},"requirements":{"_locale":"ru|en"},"hosttokens":[],"methods":[],"schemes":[]},"local_auth_forgotApi":{"tokens":[["text","/forgot_api"],["variable","/","ru|en","_locale"],["text","/auth"]],"defaults":{"_locale":"ru"},"requirements":{"_locale":"ru|en"},"hosttokens":[],"methods":[],"schemes":[]},"local_auth_forgot_complete_api":{"tokens":[["text","/forgot_complete_api"],["variable","/","ru|en","_locale"],["text","/auth"]],"defaults":{"_locale":"ru"},"requirements":{"_locale":"ru|en"},"hosttokens":[],"methods":[],"schemes":[]},"visitToPage":{"tokens":[["text","/ajax/visit_to_page"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"sendReleaseNote":{"tokens":[["text","/send_release_note"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"map":{"tokens":[["text","/map"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"mapPartner":{"tokens":[["text","/mappartner"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"map_cluster_member_filter":{"tokens":[["variable","/","[^/]++","type"],["text","/map/ajax/member/filter"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"innoObjectsList":{"tokens":[["text","/innoobjectslist"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"innoObjectsDots":{"tokens":[["text","/innoobjectsdots"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"innoObjectsTable":{"tokens":[["text","/innoobjectstable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"loadDataToCard":{"tokens":[["variable","/","[^/]++","id"],["text","/loaddatatocard"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"loadPartners":{"tokens":[["text","/loadpartners"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"loadMembers":{"tokens":[["text","/loadmembers"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"marketProductions":{"tokens":[["text","/market_productions"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exportMarket":{"tokens":[["text","/export_market"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"categoryProduction":{"tokens":[["variable","/","[^/]++","name"],["text","/product_category"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"init-navigator":{"tokens":[["text","/navigator/init"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"init-navigator-for-header":{"tokens":[["text","/navigator/init-for-header"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_measure_before_form":{"tokens":[["variable","/","[0-9A-Fa-f]{32}(?:\\\\_drf)?","measureId"],["text","/ajax/measure/before_form"]],"defaults":[],"requirements":{"measureId":"[0-9A-Fa-f]{32}(\\\\_drf)?"},"hosttokens":[],"methods":[],"schemes":[]},"profileMeasureSingleRequest":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/measure_single_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_item_request":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/item_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"iframeMeasureSingleRequest":{"tokens":[["variable","/","[^/]++","id"],["text","/iframe/measure_single_sub_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profileMeasureSingleMessages":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/profile/measure_single_messages"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profileMeasureSingleStage":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/profile/measure_single_stage_data"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"responseIasRequestInfo":{"tokens":[["text","/fields"],["variable","/","[^/]++","measureRequestId"],["text","/measure-supports/responseIas/request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureSearch":{"tokens":[["text","/measure-supports/search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureSubRequest":{"tokens":[["variable","/","[^/]++","subRequestId"],["variable","/","[^/]++","measureId"],["text","/measure-sub_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureInitiator":{"tokens":[["variable","/","[^/]++","id"],["text","/measure-supports/initiator"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measure_custom_exp_ii":{"tokens":[["text","/measure-supports/custom/exp_ii"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measure_skip_field_check":{"tokens":[["variable","/","[^/]++","field"],["variable","/","[^/]++","measure"],["text","/measure-supports/check/skip"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measure_field_error_showed":{"tokens":[["variable","/","[^/]++","field"],["variable","/","[^/]++","measure"],["text","/measure-supports/check/errorshowed"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureSupportRecreateDraft":{"tokens":[["text","/"],["variable","/","[^/]++","id"],["variable","/","[^/]++","measure"],["text","/measure-supports/recreatedraft"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureSupportValidationStep":{"tokens":[["variable","/","[^/]++","step"],["variable","/","[^/]++","id"],["text","/measure-supports/validate"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureSupportSaveDraft":{"tokens":[["variable","/","[^/]++","id"],["text","/measure-supports/savedraft"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureSiteFormPage":{"tokens":[["variable","/","[^/]++","measureId"],["text","/measure-supports/site/form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureSupportRequest":{"tokens":[["variable","/","[^/]++","id"],["text","/measure-supports/request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureSupportsCard":{"tokens":[["variable","/","[^/]++","id"],["text","/measure-supports-card"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"deleteDraftMeasureService":{"tokens":[["variable","/","[^/]++","id"],["text","/delete_messure_sevise"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getMeasureSupportsPurposes":{"tokens":[["variable","/","[^/]++","id"],["text","/get-measure-supports-purposes"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getMeasureSupportsDecisions":{"tokens":[["variable","/","[^/]++","purposeid"],["variable","/","[^/]++","typeid"],["text","/get-measure-supports-decisions"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getMeasureBuildedXml":{"tokens":[["variable","/","[^/]++","xml"],["text","/measure/builded/xml"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"getMeasureBuildedPdf":{"tokens":[["variable","/","[^/]++","pdf"],["text","/measure/builded/pdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"getMeasureBuildedPilotPdf":{"tokens":[["variable","/","[^/]++","pdf"],["text","/measure/builded/pilotpdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"buildMeasureRequestData":{"tokens":[["variable","/","[^/]++","measureId"],["text","/measure/build/requestflies"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"measureMakeSignForRppBuilded":{"tokens":[["variable","/","[^/]++","guid"],["text","/measure/builded/sign/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"maesureSignXmlOnlineMethod":{"tokens":[["variable","/","[^/]++","xml"],["text","/measure/xml/sign/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"maesureSignPdfOnlineMethod":{"tokens":[["variable","/","[^/]++","pdf"],["text","/measure/pdf/sign/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"maesureSignPilotPdfOnlineMethod":{"tokens":[["variable","/","[^/]++","pdf"],["text","/measure/pilotpdf/sign/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"iframeMeasure":{"tokens":[["variable","/","[^/]++","measureId"],["text","/iframe/measure"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"get_measure_ajax":{"tokens":[["variable","/","[^/]++","guid"],["text","/get_measure_ajax"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"starthub_moscow_request":{"tokens":[["text","/starthub_moscow/request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"MeasureBuildTemplateDocument":{"tokens":[["variable","/","[0-9abcdef]{32}","template"],["text","/measure/templates/builddocument"]],"defaults":[],"requirements":{"template":"[0-9abcdef]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"MeasureTemplateValidateCode":{"tokens":[["variable","/","[\\\\d]{6}","code"],["variable","/","[A-Fa-f0-9]{64}","hash"],["text","/measure/templates/validate"]],"defaults":[],"requirements":{"hash":"[A-Fa-f0-9]{64}","code":"[\\\\d]{6}"},"hosttokens":[],"methods":[],"schemes":[]},"MeasureTemplateSendCode":{"tokens":[["variable","/","[A-Fa-f0-9]{64}","hash"],["text","/measure/templates/sendcode"]],"defaults":[],"requirements":{"hash":"[A-Fa-f0-9]{64}"},"hosttokens":[],"methods":[],"schemes":[]},"ajaxrequestsnew":{"tokens":[["text","/profile/ajax_requests_new"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"intc_expertiza":{"tokens":[["text","/intc-expertiza"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureBundleGetForm":{"tokens":[["variable","/","[^/]++","id"],["text","/measure/bundle/getform"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"measureGoLk":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/measure/service/go/lk"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"measureSearchByFilters":{"tokens":[["text","/measure-supports/search-by-filters"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getFormSearchByFilters":{"tokens":[["text","/ajax/admin/measure-supports/get-form-search-by-filters"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measureServiceModal":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/measure-service-modal"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"needs_new_ajax":{"tokens":[["text","/needs/new_ajax"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"needs_import_search":{"tokens":[["text","/needs/needs_import/search/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"newsList":{"tokens":[["variable","/","\\\\d+","page"],["text","/news"]],"defaults":{"page":1},"requirements":{"page":"\\\\d+"},"hosttokens":[],"methods":[],"schemes":[]},"eventsList":{"tokens":[["text","/events_old"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventsPluginVerstka":{"tokens":[["text","/events/ajax/plugin_templates"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventsListAjax":{"tokens":[["text","/events/ajax/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventsFiltersAjax":{"tokens":[["text","/events/ajax/filters"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"singleEvent":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","id"],["text","/event_old"]],"defaults":[],"requirements":{"id":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"registrationFormAsync":{"tokens":[["variable","/","[^/]++","eventGuid"],["text","/event_old/ajax/form"]],"defaults":[],"requirements":{"measureGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"eventRegistrationAsync":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","measureGuid"],["text","/event/ajax/register"]],"defaults":[],"requirements":{"measureGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":["POST"],"schemes":[]},"eventDatesList":{"tokens":[["text","/events_date"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventListOnDate":{"tokens":[["text","/events_on_date"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventInCalendar":{"tokens":[["text","/events_in_calendar"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"eventOutCalendar":{"tokens":[["text","/events_out_calendar"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxEventsFenix":{"tokens":[["text","/ajax/events_fenix"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"notifications":{"tokens":[["text","/notifications"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measure-supports-subscribe":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/notifications/measure-supports/subscribe"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"measure-supports-unsubscribe":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/notifications/measure-supports/unsubscribe"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"notification-read":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/notifications/read"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"notification-read-all":{"tokens":[["text","/ajax/notifications/read-all"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"object_detail":{"tokens":[["variable","/","\\\\d+","id"],["text","/infrastructure/object/detail"]],"defaults":[],"requirements":{"id":"\\\\d+"},"hosttokens":[],"methods":[],"schemes":[]},"menu_ajax":{"tokens":[["variable","/","\\\\w+","name"],["variable","/","\\\\d+","id"],["text","/infrastructure/object/detail"]],"defaults":[],"requirements":{"id":"\\\\d+","name":"\\\\w+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"join_factoring_form":{"tokens":[["text","/forms/factoring/join"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"main_search":{"tokens":[["variable","/","services|companies","type"],["text","/ajax/main-search"]],"defaults":[],"requirements":{"type":"services|companies"},"hosttokens":[],"methods":[],"schemes":[]},"search_key_word":{"tokens":[["text","/ajax/search-key-word"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"following_service":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/following-service"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"page_about":{"tokens":[["text","/o-klastere"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"knowledgebase_old":{"tokens":[["text","/knowledgebase_old"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exchange-patents":{"tokens":[["text","/profile/exchange_patents"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile-cluster":{"tokens":[["text","/profile/cluster"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cabinet_cluster":{"tokens":[["text","/cabinet/cluster"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"setUserInformed":{"tokens":[["text","/set_user_informed"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"knowledgebase":{"tokens":[["variable","/","index|instructions|medias|events|glossary|answers|regulation-docs|links|consultations","page"],["text","/ip/knowledgebase"]],"defaults":{"page":"index"},"requirements":{"page":"index|instructions|medias|events|glossary|answers|regulation-docs|links|consultations"},"hosttokens":[],"methods":[],"schemes":[]},"knowledgebase_instruction":{"tokens":[["variable","/","[^/]++","id"],["text","/ip/knowledgebase/instructions"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"knowledgebase_selection":{"tokens":[["variable","/","[^/]++","id"],["text","/ip/knowledgebase/selections"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rutube_video":{"tokens":[["variable","/","[^/]++","id"],["text","/rutube-video"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"navigator-count-services":{"tokens":[["text","/ajax/patent_attorney/navigator/count-services"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registration-rights-ria":{"tokens":[["text","/registration_rights_ria"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"patent-services-show":{"tokens":[["variable","/","[^/]++","guid"],["text","/patent-services/show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"patentsList":{"tokens":[["text","/patents"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"singlePatent":{"tokens":[["variable","/","[^/]++","id"],["text","/patents"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_to_patent":{"tokens":[["text","/ajax/request/to/patent"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"patents_search":{"tokens":[["text","/patents_search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getMpc":{"tokens":[["variable","/","[^/]++","text"],["text","/get_mpc"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"person":{"tokens":[["text","/ajax/person"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"personUpdate":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/person/update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"personDelete":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/person/delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicalPersonProfile":{"tokens":[["text","/cabine"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"userInfoUpdate":{"tokens":[["text","/ajax/user_info_update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicCompetenceAdd":{"tokens":[["text","/ajax/phycis/competence/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicCompetenceUpdate":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/phycis/competence/update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"userInfoRemove":{"tokens":[["variable","/","[^/]++","type"],["variable","/","[^/]++","id"],["text","/ajax/userinforemove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicContactRemove":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/phycis/contact/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicEducationRemove":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/phycis/education/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicExperiencesRemove":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/phycis/experiences/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicCompetenceDelete":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/phycis/competence/delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicalPersonProjects":{"tokens":[["text","/cabinet/projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicalPersonNovator":{"tokens":[["text","/cabinet/novator"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicalPersonNovatorRequest":{"tokens":[["text","/cabinet/novator/request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"saveNovatorRequestDraft":{"tokens":[["text","/cabinet/novator/request/savedraft"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"novator_timeline":{"tokens":[["variable","/","[^/]++","guid"],["text","/cabinet/novator/request/timeline"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"novator_completed_stage":{"tokens":[["variable","/","[^/]++","stageGuid"],["variable","/","[^/]++","requestGuid"],["text","/profile/completed-novator-stage-info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ventureacademy_timeline":{"tokens":[["variable","/","[^/]++","guid"],["text","/cabinet/ventureacademy/request/timeline"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ventureacademy_completed_stage":{"tokens":[["variable","/","[^/]++","stageGuid"],["variable","/","[^/]++","requestGuid"],["text","/profile/completed-ventureacademy-stage-info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicalPersonInnoAcademy":{"tokens":[["text","/cabinet/innoacademy"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"physicalPersonRent":{"tokens":[["text","/cabinet/rent"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cabinet_list_requests":{"tokens":[["text","/cabine/list_requests"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cabinetMeasureSingleRequest":{"tokens":[["variable","/","[^/]++","id"],["text","/cabinet/measure_single_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"platforms":{"tokens":[["text","/platforms"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"platforms123":{"tokens":[["text","/platforms123"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"platforms_new":{"tokens":[["text","/platforms_new_page09"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"platforms_search":{"tokens":[["variable","/","[^/]++","type"],["text","/platforms/search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"show_platform":{"tokens":[["variable","/","[^/]++","id"],["text","/platforms/show"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"pilotProduct":{"tokens":[["text","/platforms/pilot/product"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"saveDraftPilotProduct":{"tokens":[["text","/platforms/pilot/product/savedraft"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"platformsContentBlockLanding":{"tokens":[["text","/platforms/content_block_landing/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"platformsCountStatistic":{"tokens":[["text","/platforms/count_statistic/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"platformsCountStatisticJson":{"tokens":[["text","/platforms/count_statistic_json/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"saveDraftPlatformAdd":{"tokens":[["text","/platforms/add/savedraft"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"deleteDraft":{"tokens":[["text","/platforms/delete/savedraft"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profilePlatforms":{"tokens":[["text","/profile/platforms/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"filterPlatforms":{"tokens":[["variable","/","[^/]++","page"],["text","/ajax/filter/platforms"]],"defaults":{"page":"1"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"filterPilotSolution":{"tokens":[["variable","/","[^/]++","page"],["text","/ajax/filter/pilost_solution"]],"defaults":{"page":"1"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"myProfile":{"tokens":[["text","/profil"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profilePersons":{"tokens":[["text","/profile/ajax/persosn"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profileAjaxFinancial":{"tokens":[["text","/profile/ajax/financial"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"reestr_suplier":{"tokens":[["variable","/","[^/]++","number"],["variable","/","[^/]++","type"],["text","/profile/supreester"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"suplier_add":{"tokens":[["text","/ajax/suplier/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"suplier_remove":{"tokens":[["text","/ajax/suplier/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"profile_products":{"tokens":[["text","/profile/products"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_product_info":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/products"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_services_info":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/services"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_room_info":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/room"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_partners":{"tokens":[["text","/profile/partners"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_technology_patents":{"tokens":[["text","/profile/ip"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rid_catalog":{"tokens":[["text","/profile/ip/catalog"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rid_draft_create":{"tokens":[["text","/ajax/profile/rid-draft/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rid_draft_edit":{"tokens":[["text","/edit"],["variable","/","[^/]++","id"],["text","/ajax/profile/rid-draft"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"check_double_file":{"tokens":[["variable","/","[^/]++","hashFile"],["text","/ajax/profile/check-double-file"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rid_draft_remove":{"tokens":[["text","/ajax/profile/rid-draft/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rid_draft_register":{"tokens":[["text","/ajax/profile/rid-draft/register"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"intellectualproperties_object":{"tokens":[["variable","/","[^/]++","objID"],["variable","/","[^/]++","channelID"],["text","/profile/intellectual-properties"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"intellectualproperties_object_edit":{"tokens":[["variable","/","[^/]++","objID"],["variable","/","[^/]++","channelID"],["text","/ajax/profile/intellectual-properties/edit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rid_collection_create":{"tokens":[["text","/ajax/profile/rid-collection/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rid_collection_remove":{"tokens":[["text","/remove"],["variable","/","[^/]++","id"],["text","/ajax/profile/rid-collection"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rid_collection_edit":{"tokens":[["text","/edit"],["variable","/","[^/]++","id"],["text","/ajax/profile/rid-collection"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_single_technology":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/technology"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_single_license":{"tokens":[["variable","/",".+","id"],["text","/profile/license"]],"defaults":[],"requirements":{"id":".+"},"hosttokens":[],"methods":[],"schemes":[]},"profile_single_patent":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/patent"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_rent":{"tokens":[["text","/profile/rent"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rentDeleteRoom":{"tokens":[["variable","/","[^/]++","id"],["text","/delete_room"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_single_project":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/project"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_needs":{"tokens":[["text","/profile/needs"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_buys":{"tokens":[["text","/profile/buys"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_measureRequest":{"tokens":[["text","/profile/measure_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_equips":{"tokens":[["text","/profile/equips"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_services":{"tokens":[["text","/profil/services"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_objects":{"tokens":[["text","/profile/objects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"coworking_add_popup":{"tokens":[["text","/ajax/profile/objects/show_coworking_add_popup"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyObjectAdd":{"tokens":[["text","/profile/oii_add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"objectResidentDelete":{"tokens":[["variable","/","[^/]++","residentId"],["text","/ajax/profile/company/object_resident_delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyObjectDelete":{"tokens":[["variable","/","[^/]++","objectId"],["text","/ajax/profile/company/object_delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyObjectSetStatus":{"tokens":[["variable","/","[^/]++","statusId"],["variable","/","[^/]++","objectId"],["text","/ajax/profile/company/set_object_status"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_coworking_space_add":{"tokens":[["text","/ajax/profile/objects/coworking_space_add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyCoworkingSpaceEdit":{"tokens":[["variable","/","[^/]++","spaceId"],["text","/ajax/profile/company/coworking_space_edit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyCoworkingSpaceDelete":{"tokens":[["variable","/","[^/]++","spaceId"],["text","/ajax/profile/company/coworking_space_delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"objectRoomDelete":{"tokens":[["variable","/","[^/]++","roomId"],["variable","/","[^/]++","objectId"],["text","/ajax/profile/object_room_delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"objectEquipmentDelete":{"tokens":[["variable","/","[^/]++","equipmentId"],["variable","/","[^/]++","objectId"],["text","/ajax/profile/object_equipment_delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"objectAccreditationDelete":{"tokens":[["variable","/","[^/]++","accreditationId"],["text","/ajax/profile/object_accreditation_delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_project_add":{"tokens":[["text","/profile/project_add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cluster_project_add":{"tokens":[["variable","/","[^/]++","guid"],["text","/intersectorial_clusters/cluster_project_add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"request_to_unpublish_project":{"tokens":[["text","/ajax/unpublish/project"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"productAdd":{"tokens":[["text","/profile/product_add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getAttributesByCode":{"tokens":[["variable","/","[^/]++","code"],["text","/profile/burse_attributes"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getAttributeItems":{"tokens":[["variable","/","[^/]++","code"],["text","/profile/attribute_items"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"productUpdate":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/product_update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"equipServiceUpdate":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/equip_service_update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"productDeleteMarket":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/product_delete_market"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"productDelete":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/product_delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"equipDelete":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/equip_delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"productionPhotoUpdate":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/product_photo_update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_contactsAdd":{"tokens":[["text","/contacts_add"],["variable","/","[^/]++","id"],["text","/ajax/company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_contactAdd":{"tokens":[["text","/contact_add"],["variable","/","[^/]++","id"],["text","/ajax/company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_contactEdit":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company/contact/edit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_contactDelete":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/company/contact/delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_updateDescription":{"tokens":[["text","/update_description"],["variable","/","[^/]++","id"],["text","/ajax/company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_updateActualAddress":{"tokens":[["text","/update_actual_address"],["variable","/","[^/]++","id"],["text","/ajax/company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"upload_company_logo":{"tokens":[["text","/ajax/files/logo_upload"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyEquipAdd":{"tokens":[["text","/ajax/profile/company/equip_add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"equipServicesAdd":{"tokens":[["variable","/","0|1","afterEquip"],["variable","/","[^/]++","equipId"],["text","/ajax/profile/company/equip_services_add"]],"defaults":{"afterEquip":0},"requirements":{"afterEquip":"0|1"},"hosttokens":[],"methods":[],"schemes":[]},"companyEquipUpdate":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/profile/company/equip_update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companybuildAdd":{"tokens":[["text","/ajax/profile/company/build_add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companybuildUpdate":{"tokens":[["variable","/","[^/]++","guid"],["text","/ajax/profile/company/build_update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companybuildDelete":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/profile/company/build_delete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyNeedAdd":{"tokens":[["text","/ajax/profile/company/need_add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyNeedUpdate":{"tokens":[["variable","/","[^/]++","id"],["text","/need_update"],["variable","/","[^/]++","company"],["text","/ajax/profile/company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"addCompanyToFavorites":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/profile/company/add_to_favorite"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"removeCompanyFromFavorites":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/profile/company/remove_from_favorite"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"companyFavoriteList":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/profile/company/favorite_list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"addCompanyCompetence":{"tokens":[["text","/ajax/profile/company/add_company_competence/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"updateCompanyCompetence":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/profile/company/update_company_competence"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"deleteCompanyCompetence":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/profile/company/delete_company_competence"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"deleteCompanyNeeds":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/profile/company/delete_company_needs"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profileInfo":{"tokens":[["text","/ajax/profile-info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"upload_project_logo":{"tokens":[["text","/ajax/files/project_logo_upload"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"lk-search":{"tokens":[["text","/ajax/lk-search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"negotiation_yamarket":{"tokens":[["text","/negotiation_yamarket"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_needs_info":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/needs"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"zayavka_na_faktoring":{"tokens":[["text","/profile/zayavka-na-faktoring"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"event_add":{"tokens":[["text","/event_add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"userEventDatesList":{"tokens":[["text","/user_events_date"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"userEventListOnDate":{"tokens":[["text","/user_events_on_date"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profileEventCalendar":{"tokens":[["text","/profile/ajax/event_calendar"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profileModerationItems":{"tokens":[["text","/profile/ajax/moderation_items"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"Moderation":{"tokens":[["variable","/","[^/]++","code"],["variable","/","[^/]++","id"],["text","/profile/ajax/moderation"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"userEventShow":{"tokens":[["text","/profile/ajax/user_event"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"sendToSuppliersPortal":{"tokens":[["variable","/","[^/]++","tpl"],["text","/send_to_suppliers_portal"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"parnterInformed":{"tokens":[["text","/profile/ajax/partner_informed"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"preRegisterInformed":{"tokens":[["text","/profile/ajax/pre_register_informed"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"checkRole":{"tokens":[["variable","/","[^/]++","role"],["text","/profile/check_role"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getRecommendationsAjax":{"tokens":[["text","/profile/ajax/get_recommendations"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ymlToYandex":{"tokens":[["text","/profile/yml_to_yandex"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"unpublish":{"tokens":[["variable","/","[^/]++","methodPost"],["variable","/","[^/]++","methodGet"],["variable","/","[^/]++","guid"],["text","/profile/unpublish"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"publish":{"tokens":[["variable","/","[^/]++","methodPost"],["variable","/","[^/]++","methodGet"],["variable","/","[^/]++","guid"],["text","/profile/publish"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"confirmCompanyData":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/confirm_company_data"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getPlugin1CFile":{"tokens":[["text","/profile/get1cplugin"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_clusters":{"tokens":[["text","/profile/clusters"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_favorite_add":{"tokens":[["variable","/","[^/]++","guid"],["variable","/","[^/]++","action"],["variable","/","[^/]++","entity"],["variable","/","[^/]++","type"],["text","/ajax/profile/favorite_add"]],"defaults":{"guid":null,"action":"true"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_accelerator":{"tokens":[["text","/profile/accelerator"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accelerator_timeline":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/accelerator-timeline"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accelerator_completed_stage":{"tokens":[["variable","/","[^/]++","stageGuid"],["variable","/","[^/]++","requestGuid"],["text","/profile/completed-acceleration-stage-info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_techcontests":{"tokens":[["text","/profile/tech_contests"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"techcontest_timeline":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/tech-contest-timeline"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"techcontest_completed_stage":{"tokens":[["variable","/","[^/]++","stageGuid"],["variable","/","[^/]++","requestGuid"],["text","/profile/completed-techcontest-stage-info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"questionnaire":{"tokens":[["text","/profile/questionnaire"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getQuestionnaireForm":{"tokens":[["text","/profile/get_questionnaire_form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"questionnaireFormConfirm":{"tokens":[["text","/profile/questionnaire-form_confirm"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"questionnaireLog":{"tokens":[["text","/profile/questionnaire/log"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"questionnaireXlsExport":{"tokens":[["text","/profile/questionnaire/xls_export"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"remove_platform":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/remove_platform"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"serviceall":{"tokens":[["text","/profile/serviceall"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"mainlknew":{"tokens":[["text","/profil/main_lk"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"coworking":{"tokens":[["text","/profile/coworking"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"selected_coworkings":{"tokens":[["text","/profile/ajax/selected_coworkings"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"im_complex":{"tokens":[["text","/profile/property_complex"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"room_rent":{"tokens":[["text","/profile/room_rent"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"selected_rooms_rent":{"tokens":[["text","/profile/ajax/selected_rooms"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"devprogramms":{"tokens":[["text","/profile/development_programms"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getUserTrusteeCompanies":{"tokens":[["text","/profile/getUserTrusteeCompanies"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"save_menu_items":{"tokens":[["text","/profile/save_menu_items"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"techcontest_profile":{"tokens":[["text","/profile/techcontest"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"techcontest_track":{"tokens":[["text","/profile/techcontest-timeline/id"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"marketplace_profile":{"tokens":[["text","/profile/marketplace"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"marketplace_profile_export":{"tokens":[["text","/profile/marketplace/export"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"marketplace_profile_card":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/marketplace"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"venture-investitions-requests":{"tokens":[["text","/profile/venture-investitions-requests"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajaxProfileDocuments":{"tokens":[["text","/ajax/profile/documents"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_study_course":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/study/course"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"uploadXmlIas":{"tokens":[["text","/profile/ext/ajax/upload1c_xml"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"projectList":{"tokens":[["text","/projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"singleProject":{"tokens":[["variable","/","[^/]++","id"],["text","/projects"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"projectInitiators":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/project/initiators"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"applyProjectInviteRequest":{"tokens":[["variable","/","[^/]++","reqid"],["text","/request"],["variable","/","[^/]++","code"],["text","/ajax/request/apply"],["variable","/","[^/]++","id"],["text","/projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"declineProjectInviteRequest":{"tokens":[["variable","/","[^/]++","reqid"],["text","/request"],["variable","/","[^/]++","code"],["text","/ajax/request/decline"],["variable","/","[^/]++","id"],["text","/projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getTypesForBranch":{"tokens":[["variable","/","[^/]++","branchid"],["text","/ajax/project/get_types_for_branch"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getNeedsFilters":{"tokens":[["text","/ajax/project_get_needs"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getBranchFilters":{"tokens":[["text","/ajax/project/get/branches"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_project_edit_ias":{"tokens":[["variable","/","[^/]++","guid"],["text","/user/projects/edit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_project_form_submit_ias":{"tokens":[["variable","/","[^/]++","guid"],["text","/profile/projects/form/submit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"accept_cluster_project":{"tokens":[["variable","/","[^/]++","guid"],["text","/accept_cluster_project"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_project_ajax_company_search":{"tokens":[["variable","/","[^/]++","search"],["text","/profile/projects/ajax/company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_project_media_list":{"tokens":[["text","/media/list"],["variable","/","[^/]++","guid"],["text","/profile/projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_project_cover_upload":{"tokens":[["text","/profile/projects/cover/upload"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_project_cover_remove":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/profile/projects/cover/remove"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"profile_project_media_upload":{"tokens":[["text","/profile/projects/media/upload"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"profile_project_media_remove":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/profile/projects/media/remove"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":["GET"],"schemes":[]},"site_company_project_list":{"tokens":[["text","/company/projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"site_company_project_importozameshchenie":{"tokens":[["variable","/","[^/]++","type"],["text","/company/projects/importozameshchenie"]],"defaults":{"type":null},"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"profile_company_project_close_need":{"tokens":[["text","/close"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/profile/projects/needs"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"profile_company_project_open_need":{"tokens":[["text","/open"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/profile/projects/needs"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"profile_company_project_simpleclose_need":{"tokens":[["text","/simpleclose"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/profile/projects/needs"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"profile_company_project_delete_need":{"tokens":[["text","/delete"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/profile/projects/needs"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":["GET"],"schemes":[]},"profile_company_project_edit_need":{"tokens":[["text","/edit"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/profile/projects/needs"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"site_company_project_single":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/company/projects"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":["GET"],"schemes":[]},"profile_company_project_list":{"tokens":[["text","/user/company/projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"company_project_join_request":{"tokens":[["text","/join_request"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/company/projects"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"company_project_decline_join_request":{"tokens":[["variable","/","[^/]++","requestId"],["text","/decline_request"],["variable","/","[^/]++","guid"],["text","/company/projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"company_project_apply_join_request":{"tokens":[["variable","/","[^/]++","cid"],["text","/company"],["variable","/","[^/]++","requestId"],["text","/apply_request"],["variable","/","[^/]++","guid"],["text","/company/projects"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_company_project_remove":{"tokens":[["text","/remove"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/user/company/projects"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":["POST"],"schemes":[]},"profile_company_project_pdf":{"tokens":[["text","/pdf"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/company/projects"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":["GET"],"schemes":[]},"profile_company_project_disable":{"tokens":[["text","/disable"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/user/company/projects"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":["GET"],"schemes":[]},"profile_company_project_enable":{"tokens":[["text","/enable"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/user/company/projects"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":["GET"],"schemes":[]},"proekty-i-potrebnosti":{"tokens":[["text","/proekty-i-potrebnosti"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"pdf-project":{"tokens":[["text","/ajax/project/pdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"listVentureQuiz":{"tokens":[["variable","/","[^/]++","completed"],["text","/cabinet/ventureacademy/quiz/list"]],"defaults":{"completed":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"answerActionQuiz":{"tokens":[["variable","/","[^/]++","group"],["variable","/","[^/]++","answer"],["variable","/","[^/]++","question"],["variable","/","[^/]++","quiz"],["text","/ajax/quiz/answer/action"]],"defaults":{"group":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"quizGroupIndex":{"tokens":[["variable","/","[^/]++","completed"],["variable","/","[^/]++","quizGroup"],["text","/cabinet/quiz/group"]],"defaults":{"completed":null},"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"quizItemIndex":{"tokens":[["variable","/","[^/]++","quiz"],["variable","/","[^/]++","quizGroup"],["text","/cabinet/quiz/item"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"quizItemIndexUl":{"tokens":[["variable","/","[0-9a-fA-F]{8}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{12}","quiz"],["variable","/","[0-9a-fA-F]{8}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{12}","quizGroup"],["text","/profile/quiz/item"]],"defaults":[],"requirements":{"quizGroup":"[0-9a-fA-F]{8}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{12}","quiz":"[0-9a-fA-F]{8}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{4}\\\\b-[0-9a-fA-F]{12}"},"hosttokens":[],"methods":[],"schemes":[]},"quizGroupByTechNameIndex":{"tokens":[["variable","/","[^/]++","techName"],["text","/cabinet/quiz/tn/group"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"quizGroupInfoDiagramm":{"tokens":[["variable","/","[^/]++","quizGroup"],["text","/cabinet/quiz/group/diagram"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"vash-reyting":{"tokens":[["text","/vash-reyting"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"etpgpb_refs":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/forms/refs/etpgpb"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"okpd2search":{"tokens":[["text","/ajax/forms/refs/okpd2/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"searchCompanyByInnOgrn":{"tokens":[["text","/ajax/forms/refs/ajax/search_company_by_inn_ogrn"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"searchCompanyById":{"tokens":[["text","/ajax/forms/refs/ajax/search_company_by_id"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getEquipmentType":{"tokens":[["variable","/","[^/]++","id"],["text","/ajax/forms/refs/ajax/get_equipment_type"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"validate_reg-step_1":{"tokens":[["text","/ajax/registration/validation/1"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registrationHelper":{"tokens":[["text","/registration_helper"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registrationHelperComplete":{"tokens":[["text","/registration_helper_complete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registrationHelperSkip":{"tokens":[["text","/registration_helper_skip"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rentIndex":{"tokens":[["text","/rent"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rentRoom":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","id"],["text","/room"]],"defaults":[],"requirements":{"id":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"rentAddRoom":{"tokens":[["text","/add_room"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"rentEditRoom":{"tokens":[["variable","/","[^/]++","id"],["variable","/","[^/]++","company"],["text","/edit_room"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"deletePhoto":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","id"],["text","/delete_photo"]],"defaults":[],"requirements":{"id":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getAddress":{"tokens":[["text","/get_address"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_contact_company":{"tokens":[["text","/ajax/request/contact_company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exemption_room":{"tokens":[["text","/ajax/request/exemption_room"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_request_room_contacts":{"tokens":[["text","/ajax/request/room_contacts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"coworkingsRentLanding":{"tokens":[["text","/kovorkingi-v-moskve"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"leaveRequest":{"tokens":[["text","/leave-request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"personalManager":{"tokens":[["text","/personal-manager"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getLandingData":{"tokens":[["text","/getLandingData"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getCountRoomsLandingData":{"tokens":[["text","/getCountRoomsLandingData"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getFiltersLandingData":{"tokens":[["text","/getFiltersLandingData"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getDistrictsLandingData":{"tokens":[["text","/getDistrictsLandingData"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"loadRoomInfo":{"tokens":[["text","/rent/loadRoomInfo"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profile_rooms_favorite":{"tokens":[["variable","/","[^/]++","page"],["text","/profile/rooms/favorite"]],"defaults":{"page":"1"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"request_import_change_search":{"tokens":[["variable","/","[^/]++","page"],["text","/request_import_change_search"]],"defaults":{"page":1},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"showInfoTrusteeRIC":{"tokens":[["text","/ajax/request-in-cluster-trustee-info"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"requestInCluster":{"tokens":[["text","/ajax/request-in-cluster"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"requestInClusterBuild":{"tokens":[["text","/ajax/request-in-cluster/build"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"requestInClusterSignMethods":{"tokens":[["text","/ajax/request-in-cluster/sign/methods"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"requestInClusterSignXml":{"tokens":[["variable","/","[^/]++","requestDraft"],["text","/ajax/request-in-cluster/sign/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"requestInClusterSignOnline":{"tokens":[["text","/ajax/request-in-cluster/sign/online"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"requestInClusterSignDesctop":{"tokens":[["text","/ajax/request-in-cluster/sign/desktop"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"requestInClusterGetXmlFile":{"tokens":[["variable","/","[^/]++","requestDraft"],["text","/ajax/request-in-cluster/xml"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"requestInClusterGetPdfFile":{"tokens":[["variable","/","[^/]++","requestDraft"],["text","/ajax/request-in-cluster/pdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"searchProducts":{"tokens":[["text","/search_products"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"searchOnSite":{"tokens":[["variable","/","[^/]++","str"],["variable","/","[^/]++","block"],["text","/search_on_site"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"searchRooms":{"tokens":[["variable","/","[^/]++","page"],["variable","/","[^/]++","text"],["text","/search_rooms"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"searchPatents":{"tokens":[["variable","/","[^/]++","page"],["variable","/","[^/]++","text"],["text","/search-patents"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"searchOnMap":{"tokens":[["variable","/","[^/]++","page"],["variable","/","[^/]++","text"],["text","/search_on_map"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"searchMeasures":{"tokens":[["variable","/","[^/]++","page"],["variable","/","[^/]++","text"],["text","/search-measures"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"searchPartners":{"tokens":[["variable","/","[^/]++","text"],["text","/search_partners"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"search3":{"tokens":[["text","/search3"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"partnersSearch":{"tokens":[["text","/search_partners"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"saveSearchRequest":{"tokens":[["variable","/","[^/]++","name"],["text","/save_search_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getSearchRequest":{"tokens":[["text","/get_search_request/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"deleteSearchRequest":{"tokens":[["variable","/","[^/]++","id"],["text","/delete_search_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"updateSearchRequest":{"tokens":[["variable","/","[^/]++","name"],["variable","/","[^/]++","id"],["text","/update_search_request"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"exportXls":{"tokens":[["variable","/","[^/]++","text"],["variable","/","[^/]++","tabName"],["text","/export_xls"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_service_support":{"tokens":[["text","/ajax/service-support"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_service_support_submit":{"tokens":[["text","/ajax/service-support/submit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ajax_service_support_quiz_submit":{"tokens":[["text","/ajax/service-support/quiz/submit"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"supportservice":{"tokens":[["text","/support-service"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"supportform":{"tokens":[["text","/support-form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"connect_sk_start":{"tokens":[["text","/connect/sk"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"innovationmap_catalog":{"tokens":[["variable","/","[^/]++","categoryMain"],["text","/innovationmap/catalog"]],"defaults":{"categoryMain":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"innovationmap_production":{"tokens":[["variable","/","[^/]++","id"],["text","/catalog/product"],["variable","/","innovationmap|fenix","type"]],"defaults":{"type":"innovationmap"},"requirements":{"type":"innovationmap|fenix"},"hosttokens":[],"methods":[],"schemes":[]},"innovationmap_mistake":{"tokens":[["text","/innovationmap/mistake"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getCitySolutionListPluginAjax":{"tokens":[["text","/ajax/city-solutions-plugin/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"getCitySolutionFilters":{"tokens":[["text","/ajax/city-solutions-filters/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"getCitySolutionCatalog":{"tokens":[["text","/urban/catalog/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"getCitySolutionItem":{"tokens":[["text","/"],["variable","/","[0-9]{1,9}","id"],["text","/urban"]],"defaults":[],"requirements":{"id":"[0-9]{1,9}"},"hosttokens":[],"methods":["GET"],"schemes":[]},"static_first_page":{"tokens":[["text","/static_first_page_address"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"subsidies_form":{"tokens":[["text","/measure-supports/subsidies"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"subsidiesForm":{"tokens":[["text","/ajax/subsidies/form"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"postSubsidiesForm":{"tokens":[["text","/ajax/subsidies/postForm"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"successStoriesAjaxFilters":{"tokens":[["text","/sussess_stories/ajax/filters"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"successStoriesListAjax":{"tokens":[["text","/sussess_stories/ajax/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getSuccessStory":{"tokens":[["variable","/","[^/]++","url"],["text","/story"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"successStoriesConsultationForm":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/success_stories/ajax/consultation_form"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"successStoriesAjaxMeasureRequest":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","measureGuid"],["text","/success_stories/ajax/measure_request"]],"defaults":[],"requirements":{"measureGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":["POST"],"schemes":[]},"successStoriesPluginTemplate":{"tokens":[["text","/sussess_stories/ajax/plugin_template"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"successStorySliderData":{"tokens":[["text","/success_stories/ajax/slider_data"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"successStoryMaket":{"tokens":[["text","/success_stories/maket"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"sudir_trustee_append_route":{"tokens":[["text","/auth/sudir/trustee/append"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"sudir_trustee_list_x509":{"tokens":[["text","/auth/sudir/trustee/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"connect_sudir_start":{"tokens":[["text","/connect/sudir"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"registration_mosru":{"tokens":[["text","/ajax/registration/mosru"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"confirm_contact_mosru":{"tokens":[["variable","/","[^/]++","user"],["variable","/","[^/]++","contact"],["variable","/","[^/]++","context"],["text","/ajax/confirm_contact/mosru"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"resend_contact_confirm":{"tokens":[["text","/"],["variable","/","[^/]++","contact"],["variable","/","[^/]++","context"],["text","/ajax/confirm_contact/resend"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"cabinet_teams":{"tokens":[["variable","/","all|captain|member","type"],["text","/cabinet/lct/teams"]],"defaults":{"type":"all"},"requirements":{"type":"all|captain|member"},"hosttokens":[],"methods":[],"schemes":[]},"cabinet_team_card":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","id"],["text","/cabinet/teams/card"]],"defaults":[],"requirements":{"id":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"profile_team_card":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","id"],["text","/profile/teams/card"]],"defaults":[],"requirements":{"id":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"cabinet_team_card_edit":{"tokens":[["text","/edit"],["variable","/","[0-9A-Fa-f]{32}","id"],["text","/cabinet/teams/card"]],"defaults":[],"requirements":{"id":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"modal_select_project":{"tokens":[["text","/projects"],["variable","/","[0-9A-Fa-f]{32}","idTeam"],["text","/teams/ajax/card"]],"defaults":[],"requirements":{"idTeam":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"teams_remove":{"tokens":[["text","/remove"],["variable","/","[0-9A-Fa-f]{32}","id"],["text","/teams/ajax/card"]],"defaults":[],"requirements":{"id":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"team_create":{"tokens":[["text","/teams/ajax/card/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"upload_croppie_teams_logo":{"tokens":[["text","/teams/ajax/logo_upload_for_croppie"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"team_member_delete":{"tokens":[["text","/delete"],["variable","/","[0-9A-Fa-f]{32}","idMember"],["text","/member"],["variable","/","[0-9A-Fa-f]{32}","idTeam"],["text","/teams/ajax"]],"defaults":[],"requirements":{"idTeam":"[0-9A-Fa-f]{32}","idMember":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"team_edit_captain":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","idNewCaptain"],["text","/captain"],["variable","/","[0-9A-Fa-f]{32}","idTeam"],["text","/teams/ajax"]],"defaults":[],"requirements":{"idTeam":"[0-9A-Fa-f]{32}","idNewCaptain":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"teams_invitation_link_click":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","uniqLink"],["text","/teams/join"]],"defaults":[],"requirements":{"uniqLink":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"teams_invitation_link_follow":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","uniqLink"],["text","/teams/ajax/join"]],"defaults":[],"requirements":{"uniqLink":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"teams_invitation_link_create":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","teamGuid"],["text","/teams/ajax/make_invite_link"]],"defaults":[],"requirements":{"teamGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"teams_invitation_link_update":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","teamGuid"],["text","/teams/ajax/update_invite_link"]],"defaults":[],"requirements":{"teamGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"teams_invitation_link_switch_activity":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","teamGuid"],["text","/teams/ajax/switch_invite_link"]],"defaults":[],"requirements":{"teamGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"teamsMeasureRequestFormAsync":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","taskGuid"],["variable","/","[0-9A-Fa-f]{32}","teamGuid"],["text","/teams/measure-request-form/async"]],"defaults":[],"requirements":{"teamGuid":"[0-9A-Fa-f]{32}","taskGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"teamMeasureRequestAddAsync":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","measureGuid"],["text","/teams/measure-request-add/async"]],"defaults":[],"requirements":{"measureGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getTeamsMeasureRequests":{"tokens":[["text","/ajax/measure-requests/"],["variable","/","[0-9A-Fa-f]{32}","teamGuid"],["text","/teams"]],"defaults":[],"requirements":{"teamGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getHackatonLctItemUnauth":{"tokens":[["text","/"],["variable","/","[0-9A-Fa-f]{32}","hackatonGuid"],["text","/lct/hackatons"]],"defaults":[],"requirements":{"hackatonGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getHackatonLctItemWithLangUnauth":{"tokens":[["text","/"],["variable","/","[^/]++","language"],["variable","/","[0-9A-Fa-f]{32}","hackatonGuid"],["text","/lct/hackatons"]],"defaults":[],"requirements":{"hackatonGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getHackatonLctItem":{"tokens":[["text","/"],["variable","/","[0-9A-Fa-f]{32}","hackatonGuid"],["text","/cabinet/lct/hackatons"]],"defaults":[],"requirements":{"hackatonGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getHackatonLctItemWithLang":{"tokens":[["text","/"],["variable","/","[^/]++","language"],["variable","/","[0-9A-Fa-f]{32}","hackatonGuid"],["text","/cabinet/lct/hackatons"]],"defaults":[],"requirements":{"hackatonGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getHackatonLcts":{"tokens":[["text","/cabinet/lct/hackatons"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getHackatonsListAjax":{"tokens":[["text","/lct/ajax/hackatons"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getHackatonLctsAjax":{"tokens":[["text","/lct/ajax/hackaton-lcts/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getHackatonItemAjax":{"tokens":[["variable","/","[^/]++","lang"],["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/lct/ajax/hackaton"]],"defaults":{"lang":"ru"},"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getHackatonsListPluginMustacheTemplate":{"tokens":[["text","/lct/ajax/hackatons-mustache"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getLtcProfile":{"tokens":[["text","/cabinet/lct/profile/my-teams"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"addOrUpdateLtcProfile":{"tokens":[["text","/cabinet/lct/profile"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"postLctProfile":{"tokens":[["text","/ltc/profile/ajax/post/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ltcCommandAdd":{"tokens":[["variable","/","[^/]++","guid"],["text","/cabinet/lct/command/add"]],"defaults":{"guid":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ltcCard":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/cabinet/lct/command"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"ltcAssignCapitain":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","memberGuid"],["variable","/","[0-9A-Fa-f]{32}","teamGuid"],["text","/cabinet/lct/ajax/assign_captain"]],"defaults":[],"requirements":{"teamGuid":"[0-9A-Fa-f]{32}","memberGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"profilesShowcaseOld":{"tokens":[["text","/cabinet/lct/profiles-showcase"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"profilesShowcase":{"tokens":[["text","/cabinet/lct/showcase"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"inviteToTeamInShowcase":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","invitedMemberGuid"],["text","/cabinet/lct/ajax/invite-in-showcase"]],"defaults":[],"requirements":{"invitedMemberGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"viewLtcProfile":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","guid"],["text","/cabinet/ltc/profile"]],"defaults":[],"requirements":{"guid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"teamsShowcase":{"tokens":[["text","/cabinet/lct/teams-showcase"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"requestToJoinTeam":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","teamGuid"],["variable","/","[0-9A-Fa-f]{32}","profileGuid"],["text","/cabinet/lct/ajax/join"]],"defaults":[],"requirements":{"teamGuid":"[0-9A-Fa-f]{32}","profileGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"ajaxUpdateTeam":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","teamGuid"],["text","/cabinet/lct/ajax/team-update"]],"defaults":[],"requirements":{"teamGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"taskFavoritesAjax":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","taskGuid"],["text","/lct/ajax/task-favorites-switch"]],"defaults":[],"requirements":{"taskGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getStagesAjax":{"tokens":[["variable","/","[0-9]{7}","regionId"],["text","/lct/ajax/stages"]],"defaults":[],"requirements":{"regionId":"[0-9]{7}"},"hosttokens":[],"methods":[],"schemes":[]},"getSolutionMeasureRequestFormAjax":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","taskGuid"],["text","/lct/ajax/solution-form"]],"defaults":[],"requirements":{"taskGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getSolutionRejectAjax":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","taskGuid"],["text","/lct/ajax/solution-reject"]],"defaults":[],"requirements":{"taskGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getLctNews":{"tokens":[["text","/cabinet/lct/news/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getLctNewsItem":{"tokens":[["variable","/","[0-9A-Fa-f]{32}","newsGuid"],["text","/cabinet/lct/news"]],"defaults":[],"requirements":{"newsGuid":"[0-9A-Fa-f]{32}"},"hosttokens":[],"methods":[],"schemes":[]},"getPdfCertificate":{"tokens":[["text","/lct/pdf/download"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getPdfDiplom":{"tokens":[["text","/lct/pdf/downloadDiplom"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"getPdfDiplom1":{"tokens":[["text","/lct/pdf/downloadDiplom1"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"unlinkTaskFromTeam":{"tokens":[["text","/lct/ajax/unlink_task/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"CME_Bot":{"tokens":[["text","/bot/cme"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"mosRuVaccination":{"tokens":[["text","/covid/vaccination"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"test_dbrain":{"tokens":[["text","/test/del/supser"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ulk_add_trustee":{"tokens":[["text","/profile/ulk/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ulk_remove_trustee":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/ulk/remove"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ulk_update_trustee":{"tokens":[["variable","/","[^/]++","id"],["text","/profile/ulk/update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ventures":{"tokens":[["text","/ventures"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"venture":{"tokens":[["variable","/","[^/]++","id"],["text","/venture"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"venturesList":{"tokens":[["text","/ventures_list/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ventureCompaniesList":{"tokens":[["text","/ventures_companies_list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ventureInnoObjectList":{"tokens":[["text","/ventures_inno_object_list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"venture_club":{"tokens":[["text","/venture_club"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"venture-investitions":{"tokens":[["text","/venture-investitions"],["variable","/","[^/]++","profile"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_access_check_path":{"tokens":[["text","/api/access/path"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_auth_get_current_user":{"tokens":[["text","/api/auth/current_user"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"api_auth_ch_user_tpl":{"tokens":[["text","/api/auth/change_user_company_template"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"api_auth_header_user_info_template":{"tokens":[["text","/api/auth/header_user_info_template"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"api_auth_change_user_company":{"tokens":[["text","/api/auth/change_user_company"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"api_dictionary_get_phone_mask":{"tokens":[["variable","/","[^/]++","id"],["text","/api/api/dictionary/phone_mask"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"api_dictionary_city_search_by_country":{"tokens":[["variable","/","[^/]++","id"],["text","/city_search_by_country"],["variable","/","[^/]++","_locale"],["text","/api/api/dictionary"]],"defaults":{"_locale":[]},"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"api_dictionary_city_by_country":{"tokens":[["variable","/","[^/]++","id"],["text","/city_by_country"],["variable","/","[^/]++","_locale"],["text","/api/api/dictionary"]],"defaults":{"_locale":[]},"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"https"}'
      );
    },
  },
  function (e) {
    e.O(0, [9755, 4090, 1248, 466, 686, 2306, 8413, 8794, 9390], function () {
      return (t = 840479), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
