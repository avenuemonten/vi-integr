(self.webpackChunk = self.webpackChunk || []).push([
  [686],
  {
    340686: function (e, t, n) {
      var r,
        i,
        o,
        s = n(619755);
      (i = [n(619755)]),
        (r = function (e) {
          var t = (function () {
              if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
                var t = e.fn.select2.amd;
              var n, r, i;
              return (
                (t && t.requirejs) ||
                  (t ? (r = t) : (t = {}),
                  (function (e) {
                    var t,
                      o,
                      s,
                      a,
                      l = {},
                      c = {},
                      u = {},
                      d = {},
                      p = Object.prototype.hasOwnProperty,
                      h = [].slice,
                      f = /\.js$/;
                    function g(e, t) {
                      return p.call(e, t);
                    }
                    function m(e, t) {
                      var n,
                        r,
                        i,
                        o,
                        s,
                        a,
                        l,
                        c,
                        d,
                        p,
                        h,
                        g = t && t.split("/"),
                        m = u.map,
                        v = (m && m["*"]) || {};
                      if (e) {
                        for (
                          s = (e = e.split("/")).length - 1,
                            u.nodeIdCompat &&
                              f.test(e[s]) &&
                              (e[s] = e[s].replace(f, "")),
                            "." === e[0].charAt(0) &&
                              g &&
                              (e = g.slice(0, g.length - 1).concat(e)),
                            d = 0;
                          d < e.length;
                          d++
                        )
                          if ("." === (h = e[d])) e.splice(d, 1), (d -= 1);
                          else if (".." === h) {
                            if (
                              0 === d ||
                              (1 === d && ".." === e[2]) ||
                              ".." === e[d - 1]
                            )
                              continue;
                            d > 0 && (e.splice(d - 1, 2), (d -= 2));
                          }
                        e = e.join("/");
                      }
                      if ((g || v) && m) {
                        for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                          if (((r = n.slice(0, d).join("/")), g))
                            for (p = g.length; p > 0; p -= 1)
                              if (
                                (i = m[g.slice(0, p).join("/")]) &&
                                (i = i[r])
                              ) {
                                (o = i), (a = d);
                                break;
                              }
                          if (o) break;
                          !l && v && v[r] && ((l = v[r]), (c = d));
                        }
                        !o && l && ((o = l), (a = c)),
                          o && (n.splice(0, a, o), (e = n.join("/")));
                      }
                      return e;
                    }
                    function v(t, n) {
                      return function () {
                        var r = h.call(arguments, 0);
                        return (
                          "string" != typeof r[0] &&
                            1 === r.length &&
                            r.push(null),
                          o.apply(e, r.concat([t, n]))
                        );
                      };
                    }
                    function y(e) {
                      return function (t) {
                        return m(t, e);
                      };
                    }
                    function _(e) {
                      return function (t) {
                        l[e] = t;
                      };
                    }
                    function $(n) {
                      if (g(c, n)) {
                        var r = c[n];
                        delete c[n], (d[n] = !0), t.apply(e, r);
                      }
                      if (!g(l, n) && !g(d, n)) throw new Error("No " + n);
                      return l[n];
                    }
                    function w(e) {
                      var t,
                        n = e ? e.indexOf("!") : -1;
                      return (
                        n > -1 &&
                          ((t = e.substring(0, n)),
                          (e = e.substring(n + 1, e.length))),
                        [t, e]
                      );
                    }
                    function b(e) {
                      return e ? w(e) : [];
                    }
                    function A(e) {
                      return function () {
                        return (u && u.config && u.config[e]) || {};
                      };
                    }
                    (s = function (e, t) {
                      var n,
                        r = w(e),
                        i = r[0],
                        o = t[1];
                      return (
                        (e = r[1]),
                        i && (n = $((i = m(i, o)))),
                        i
                          ? (e =
                              n && n.normalize ? n.normalize(e, y(o)) : m(e, o))
                          : ((i = (r = w((e = m(e, o))))[0]),
                            (e = r[1]),
                            i && (n = $(i))),
                        {
                          f: i ? i + "!" + e : e,
                          n: e,
                          pr: i,
                          p: n,
                        }
                      );
                    }),
                      (a = {
                        require: function (e) {
                          return v(e);
                        },
                        exports: function (e) {
                          var t = l[e];
                          return void 0 !== t ? t : (l[e] = {});
                        },
                        module: function (e) {
                          return {
                            id: e,
                            uri: "",
                            exports: l[e],
                            config: A(e),
                          };
                        },
                      }),
                      (t = function (t, n, r, i) {
                        var o,
                          u,
                          p,
                          h,
                          f,
                          m,
                          y,
                          w = [],
                          A = typeof r;
                        if (
                          ((m = b((i = i || t))),
                          "undefined" === A || "function" === A)
                        ) {
                          for (
                            n =
                              !n.length && r.length
                                ? ["require", "exports", "module"]
                                : n,
                              f = 0;
                            f < n.length;
                            f += 1
                          )
                            if ("require" === (u = (h = s(n[f], m)).f))
                              w[f] = a.require(t);
                            else if ("exports" === u)
                              (w[f] = a.exports(t)), (y = !0);
                            else if ("module" === u) o = w[f] = a.module(t);
                            else if (g(l, u) || g(c, u) || g(d, u)) w[f] = $(u);
                            else {
                              if (!h.p) throw new Error(t + " missing " + u);
                              h.p.load(h.n, v(i, !0), _(u), {}), (w[f] = l[u]);
                            }
                          (p = r ? r.apply(l[t], w) : void 0),
                            t &&
                              (o && o.exports !== e && o.exports !== l[t]
                                ? (l[t] = o.exports)
                                : (p === e && y) || (l[t] = p));
                        } else t && (l[t] = r);
                      }),
                      (n =
                        r =
                        o =
                          function (n, r, i, l, c) {
                            if ("string" == typeof n)
                              return a[n] ? a[n](r) : $(s(n, b(r)).f);
                            if (!n.splice) {
                              if (((u = n).deps && o(u.deps, u.callback), !r))
                                return;
                              r.splice
                                ? ((n = r), (r = i), (i = null))
                                : (n = e);
                            }
                            return (
                              (r = r || function () {}),
                              "function" == typeof i && ((i = l), (l = c)),
                              l
                                ? t(e, n, r, i)
                                : setTimeout(function () {
                                    t(e, n, r, i);
                                  }, 4),
                              o
                            );
                          }),
                      (o.config = function (e) {
                        return o(e);
                      }),
                      (n._defined = l),
                      ((i = function (e, t, n) {
                        if ("string" != typeof e)
                          throw new Error(
                            "See almond README: incorrect module build, no module name"
                          );
                        t.splice || ((n = t), (t = [])),
                          g(l, e) || g(c, e) || (c[e] = [e, t, n]);
                      }).amd = {
                        jQuery: !0,
                      });
                  })(),
                  (t.requirejs = n),
                  (t.require = r),
                  (t.define = i)),
                t.define("almond", function () {}),
                t.define("jquery", [], function () {
                  var t = e || s;
                  return (
                    null == t &&
                      console &&
                      console.error &&
                      console.error(
                        "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
                      ),
                    t
                  );
                }),
                t.define("select2/utils", ["jquery"], function (e) {
                  var t = {};
                  function n(e) {
                    var t = e.prototype,
                      n = [];
                    for (var r in t)
                      "function" == typeof t[r] &&
                        "constructor" !== r &&
                        n.push(r);
                    return n;
                  }
                  (t.Extend = function (e, t) {
                    var n = {}.hasOwnProperty;
                    function r() {
                      this.constructor = e;
                    }
                    for (var i in t) n.call(t, i) && (e[i] = t[i]);
                    return (
                      (r.prototype = t.prototype),
                      (e.prototype = new r()),
                      (e.__super__ = t.prototype),
                      e
                    );
                  }),
                    (t.Decorate = function (e, t) {
                      var r = n(t),
                        i = n(e);
                      function o() {
                        var n = Array.prototype.unshift,
                          r = t.prototype.constructor.length,
                          i = e.prototype.constructor;
                        r > 0 &&
                          (n.call(arguments, e.prototype.constructor),
                          (i = t.prototype.constructor)),
                          i.apply(this, arguments);
                      }
                      function s() {
                        this.constructor = o;
                      }
                      (t.displayName = e.displayName), (o.prototype = new s());
                      for (var a = 0; a < i.length; a++) {
                        var l = i[a];
                        o.prototype[l] = e.prototype[l];
                      }
                      for (
                        var c = function (e) {
                            var n = function () {};
                            (e in o.prototype) && (n = o.prototype[e]);
                            var r = t.prototype[e];
                            return function () {
                              return (
                                Array.prototype.unshift.call(arguments, n),
                                r.apply(this, arguments)
                              );
                            };
                          },
                          u = 0;
                        u < r.length;
                        u++
                      ) {
                        var d = r[u];
                        o.prototype[d] = c(d);
                      }
                      return o;
                    });
                  var r = function () {
                    this.listeners = {};
                  };
                  (r.prototype.on = function (e, t) {
                    (this.listeners = this.listeners || {}),
                      e in this.listeners
                        ? this.listeners[e].push(t)
                        : (this.listeners[e] = [t]);
                  }),
                    (r.prototype.trigger = function (e) {
                      var t = Array.prototype.slice,
                        n = t.call(arguments, 1);
                      (this.listeners = this.listeners || {}),
                        null == n && (n = []),
                        0 === n.length && n.push({}),
                        (n[0]._type = e),
                        e in this.listeners &&
                          this.invoke(this.listeners[e], t.call(arguments, 1)),
                        "*" in this.listeners &&
                          this.invoke(this.listeners["*"], arguments);
                    }),
                    (r.prototype.invoke = function (e, t) {
                      for (var n = 0, r = e.length; n < r; n++)
                        e[n].apply(this, t);
                    }),
                    (t.Observable = r),
                    (t.generateChars = function (e) {
                      for (var t = "", n = 0; n < e; n++)
                        t += Math.floor(36 * Math.random()).toString(36);
                      return t;
                    }),
                    (t.bind = function (e, t) {
                      return function () {
                        e.apply(t, arguments);
                      };
                    }),
                    (t._convertData = function (e) {
                      for (var t in e) {
                        var n = t.split("-"),
                          r = e;
                        if (1 !== n.length) {
                          for (var i = 0; i < n.length; i++) {
                            var o = n[i];
                            (o =
                              o.substring(0, 1).toLowerCase() +
                              o.substring(1)) in r || (r[o] = {}),
                              i == n.length - 1 && (r[o] = e[t]),
                              (r = r[o]);
                          }
                          delete e[t];
                        }
                      }
                      return e;
                    }),
                    (t.hasScroll = function (t, n) {
                      var r = e(n),
                        i = n.style.overflowX,
                        o = n.style.overflowY;
                      return (
                        (i !== o || ("hidden" !== o && "visible" !== o)) &&
                        ("scroll" === i ||
                          "scroll" === o ||
                          r.innerHeight() < n.scrollHeight ||
                          r.innerWidth() < n.scrollWidth)
                      );
                    }),
                    (t.escapeMarkup = function (e) {
                      var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;",
                      };
                      return "string" != typeof e
                        ? e
                        : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                            return t[e];
                          });
                    }),
                    (t.appendMany = function (t, n) {
                      if ("1.7" === e.fn.jquery.substr(0, 3)) {
                        var r = e();
                        e.map(n, function (e) {
                          r = r.add(e);
                        }),
                          (n = r);
                      }
                      t.append(n);
                    }),
                    (t.__cache = {});
                  var i = 0;
                  return (
                    (t.GetUniqueElementId = function (e) {
                      var t = e.getAttribute("data-select2-id");
                      return (
                        null == t &&
                          (e.id
                            ? ((t = e.id), e.setAttribute("data-select2-id", t))
                            : (e.setAttribute("data-select2-id", ++i),
                              (t = i.toString()))),
                        t
                      );
                    }),
                    (t.StoreData = function (e, n, r) {
                      var i = t.GetUniqueElementId(e);
                      t.__cache[i] || (t.__cache[i] = {}),
                        (t.__cache[i][n] = r);
                    }),
                    (t.GetData = function (n, r) {
                      var i = t.GetUniqueElementId(n);
                      return r
                        ? t.__cache[i] && null != t.__cache[i][r]
                          ? t.__cache[i][r]
                          : e(n).data(r)
                        : t.__cache[i];
                    }),
                    (t.RemoveData = function (e) {
                      var n = t.GetUniqueElementId(e);
                      null != t.__cache[n] && delete t.__cache[n],
                        e.removeAttribute("data-select2-id");
                    }),
                    t
                  );
                }),
                t.define(
                  "select2/results",
                  ["jquery", "./utils"],
                  function (e, t) {
                    function n(e, t, r) {
                      (this.$element = e),
                        (this.data = r),
                        (this.options = t),
                        n.__super__.constructor.call(this);
                    }
                    return (
                      t.Extend(n, t.Observable),
                      (n.prototype.render = function () {
                        var t = e(
                          '<ul class="select2-results__options" role="listbox"></ul>'
                        );
                        return (
                          this.options.get("multiple") &&
                            t.attr("aria-multiselectable", "true"),
                          (this.$results = t),
                          t
                        );
                      }),
                      (n.prototype.clear = function () {
                        this.$results.empty();
                      }),
                      (n.prototype.displayMessage = function (t) {
                        var n = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var r = e(
                            '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                          ),
                          i = this.options.get("translations").get(t.message);
                        r.append(n(i(t.args))),
                          (r[0].className += " select2-results__message"),
                          this.$results.append(r);
                      }),
                      (n.prototype.hideMessages = function () {
                        this.$results
                          .find(".select2-results__message")
                          .remove();
                      }),
                      (n.prototype.append = function (e) {
                        this.hideLoading();
                        var t = [];
                        if (null != e.results && 0 !== e.results.length) {
                          e.results = this.sort(e.results);
                          for (var n = 0; n < e.results.length; n++) {
                            var r = e.results[n],
                              i = this.option(r);
                            t.push(i);
                          }
                          this.$results.append(t);
                        } else
                          0 === this.$results.children().length &&
                            this.trigger("results:message", {
                              message: "noResults",
                            });
                      }),
                      (n.prototype.position = function (e, t) {
                        t.find(".select2-results").append(e);
                      }),
                      (n.prototype.sort = function (e) {
                        return this.options.get("sorter")(e);
                      }),
                      (n.prototype.highlightFirstItem = function () {
                        var e = this.$results.find(
                            ".select2-results__option[aria-selected]"
                          ),
                          t = e.filter("[aria-selected=true]");
                        t.length > 0
                          ? t.first().trigger("mouseenter")
                          : e.first().trigger("mouseenter"),
                          this.ensureHighlightVisible();
                      }),
                      (n.prototype.setClasses = function () {
                        var n = this;
                        this.data.current(function (r) {
                          var i = e.map(r, function (e) {
                            return e.id.toString();
                          });
                          n.$results
                            .find(".select2-results__option[aria-selected]")
                            .each(function () {
                              var n = e(this),
                                r = t.GetData(this, "data"),
                                o = "" + r.id;
                              (null != r.element && r.element.selected) ||
                              (null == r.element && e.inArray(o, i) > -1)
                                ? n.attr("aria-selected", "true")
                                : n.attr("aria-selected", "false");
                            });
                        });
                      }),
                      (n.prototype.showLoading = function (e) {
                        this.hideLoading();
                        var t = {
                            disabled: !0,
                            loading: !0,
                            text: this.options
                              .get("translations")
                              .get("searching")(e),
                          },
                          n = this.option(t);
                        (n.className += " loading-results"),
                          this.$results.prepend(n);
                      }),
                      (n.prototype.hideLoading = function () {
                        this.$results.find(".loading-results").remove();
                      }),
                      (n.prototype.option = function (n) {
                        var r = document.createElement("li");
                        r.className = "select2-results__option";
                        var i = {
                            role: "option",
                            "aria-selected": "false",
                          },
                          o =
                            window.Element.prototype.matches ||
                            window.Element.prototype.msMatchesSelector ||
                            window.Element.prototype.webkitMatchesSelector;
                        for (var s in (((null != n.element &&
                          o.call(n.element, ":disabled")) ||
                          (null == n.element && n.disabled)) &&
                          (delete i["aria-selected"],
                          (i["aria-disabled"] = "true")),
                        null == n.id && delete i["aria-selected"],
                        null != n._resultId && (r.id = n._resultId),
                        n.title && (r.title = n.title),
                        n.children &&
                          ((i.role = "group"),
                          (i["aria-label"] = n.text),
                          delete i["aria-selected"]),
                        i)) {
                          var a = i[s];
                          r.setAttribute(s, a);
                        }
                        if (n.children) {
                          var l = e(r),
                            c = document.createElement("strong");
                          (c.className = "select2-results__group"),
                            e(c),
                            this.template(n, c);
                          for (var u = [], d = 0; d < n.children.length; d++) {
                            var p = n.children[d],
                              h = this.option(p);
                            u.push(h);
                          }
                          var f = e("<ul></ul>", {
                            class:
                              "select2-results__options select2-results__options--nested",
                          });
                          f.append(u), l.append(c), l.append(f);
                        } else this.template(n, r);
                        return t.StoreData(r, "data", n), r;
                      }),
                      (n.prototype.bind = function (n, r) {
                        var i = this,
                          o = n.id + "-results";
                        this.$results.attr("id", o),
                          n.on("results:all", function (e) {
                            i.clear(),
                              i.append(e.data),
                              n.isOpen() &&
                                (i.setClasses(), i.highlightFirstItem());
                          }),
                          n.on("results:append", function (e) {
                            i.append(e.data), n.isOpen() && i.setClasses();
                          }),
                          n.on("query", function (e) {
                            i.hideMessages(), i.showLoading(e);
                          }),
                          n.on("select", function () {
                            n.isOpen() &&
                              (i.setClasses(),
                              i.options.get("scrollAfterSelect") &&
                                i.highlightFirstItem());
                          }),
                          n.on("unselect", function () {
                            n.isOpen() &&
                              (i.setClasses(),
                              i.options.get("scrollAfterSelect") &&
                                i.highlightFirstItem());
                          }),
                          n.on("open", function () {
                            i.$results.attr("aria-expanded", "true"),
                              i.$results.attr("aria-hidden", "false"),
                              i.setClasses(),
                              i.ensureHighlightVisible();
                          }),
                          n.on("close", function () {
                            i.$results.attr("aria-expanded", "false"),
                              i.$results.attr("aria-hidden", "true"),
                              i.$results.removeAttr("aria-activedescendant");
                          }),
                          n.on("results:toggle", function () {
                            var e = i.getHighlightedResults();
                            0 !== e.length && e.trigger("mouseup");
                          }),
                          n.on("results:select", function () {
                            var e = i.getHighlightedResults();
                            if (0 !== e.length) {
                              var n = t.GetData(e[0], "data");
                              "true" == e.attr("aria-selected")
                                ? i.trigger("close", {})
                                : i.trigger("select", {
                                    data: n,
                                  });
                            }
                          }),
                          n.on("results:previous", function () {
                            var e = i.getHighlightedResults(),
                              t = i.$results.find("[aria-selected]"),
                              n = t.index(e);
                            if (!(n <= 0)) {
                              var r = n - 1;
                              0 === e.length && (r = 0);
                              var o = t.eq(r);
                              o.trigger("mouseenter");
                              var s = i.$results.offset().top,
                                a = o.offset().top,
                                l = i.$results.scrollTop() + (a - s);
                              0 === r
                                ? i.$results.scrollTop(0)
                                : a - s < 0 && i.$results.scrollTop(l);
                            }
                          }),
                          n.on("results:next", function () {
                            var e = i.getHighlightedResults(),
                              t = i.$results.find("[aria-selected]"),
                              n = t.index(e) + 1;
                            if (!(n >= t.length)) {
                              var r = t.eq(n);
                              r.trigger("mouseenter");
                              var o =
                                  i.$results.offset().top +
                                  i.$results.outerHeight(!1),
                                s = r.offset().top + r.outerHeight(!1),
                                a = i.$results.scrollTop() + s - o;
                              0 === n
                                ? i.$results.scrollTop(0)
                                : s > o && i.$results.scrollTop(a);
                            }
                          }),
                          n.on("results:focus", function (e) {
                            e.element.addClass(
                              "select2-results__option--highlighted"
                            );
                          }),
                          n.on("results:message", function (e) {
                            i.displayMessage(e);
                          }),
                          e.fn.mousewheel &&
                            this.$results.on("mousewheel", function (e) {
                              var t = i.$results.scrollTop(),
                                n =
                                  i.$results.get(0).scrollHeight - t + e.deltaY,
                                r = e.deltaY > 0 && t - e.deltaY <= 0,
                                o = e.deltaY < 0 && n <= i.$results.height();
                              r
                                ? (i.$results.scrollTop(0),
                                  e.preventDefault(),
                                  e.stopPropagation())
                                : o &&
                                  (i.$results.scrollTop(
                                    i.$results.get(0).scrollHeight -
                                      i.$results.height()
                                  ),
                                  e.preventDefault(),
                                  e.stopPropagation());
                            }),
                          this.$results.on(
                            "mouseup",
                            ".select2-results__option[aria-selected]",
                            function (n) {
                              var r = e(this),
                                o = t.GetData(this, "data");
                              "true" !== r.attr("aria-selected")
                                ? i.trigger("select", {
                                    originalEvent: n,
                                    data: o,
                                  })
                                : i.options.get("multiple")
                                ? i.trigger("unselect", {
                                    originalEvent: n,
                                    data: o,
                                  })
                                : i.trigger("close", {});
                            }
                          ),
                          this.$results.on(
                            "mouseenter",
                            ".select2-results__option[aria-selected]",
                            function (n) {
                              var r = t.GetData(this, "data");
                              i
                                .getHighlightedResults()
                                .removeClass(
                                  "select2-results__option--highlighted"
                                ),
                                i.trigger("results:focus", {
                                  data: r,
                                  element: e(this),
                                });
                            }
                          );
                      }),
                      (n.prototype.getHighlightedResults = function () {
                        return this.$results.find(
                          ".select2-results__option--highlighted"
                        );
                      }),
                      (n.prototype.destroy = function () {
                        this.$results.remove();
                      }),
                      (n.prototype.ensureHighlightVisible = function () {
                        var e = this.getHighlightedResults();
                        if (0 !== e.length) {
                          var t = this.$results
                              .find("[aria-selected]")
                              .index(e),
                            n = this.$results.offset().top,
                            r = e.offset().top,
                            i = this.$results.scrollTop() + (r - n),
                            o = r - n;
                          (i -= 2 * e.outerHeight(!1)),
                            t <= 2
                              ? this.$results.scrollTop(0)
                              : (o > this.$results.outerHeight() || o < 0) &&
                                this.$results.scrollTop(i);
                        }
                      }),
                      (n.prototype.template = function (t, n) {
                        var r = this.options.get("templateResult"),
                          i = this.options.get("escapeMarkup"),
                          o = r(t, n);
                        null == o
                          ? (n.style.display = "none")
                          : "string" == typeof o
                          ? (n.innerHTML = i(o))
                          : e(n).append(o);
                      }),
                      n
                    );
                  }
                ),
                t.define("select2/keys", [], function () {
                  return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46,
                  };
                }),
                t.define(
                  "select2/selection/base",
                  ["jquery", "../utils", "../keys"],
                  function (e, t, n) {
                    function r(e, t) {
                      (this.$element = e),
                        (this.options = t),
                        r.__super__.constructor.call(this);
                    }
                    return (
                      t.Extend(r, t.Observable),
                      (r.prototype.render = function () {
                        var n = e(
                          '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                        );
                        return (
                          (this._tabindex = 0),
                          null != t.GetData(this.$element[0], "old-tabindex")
                            ? (this._tabindex = t.GetData(
                                this.$element[0],
                                "old-tabindex"
                              ))
                            : null != this.$element.attr("tabindex") &&
                              (this._tabindex = this.$element.attr("tabindex")),
                          n.attr("title", this.$element.attr("title")),
                          n.attr("tabindex", this._tabindex),
                          n.attr("aria-disabled", "false"),
                          (this.$selection = n),
                          n
                        );
                      }),
                      (r.prototype.bind = function (e, t) {
                        var r = this,
                          i = e.id + "-results";
                        (this.container = e),
                          this.$selection.on("focus", function (e) {
                            r.trigger("focus", e);
                          }),
                          this.$selection.on("blur", function (e) {
                            r._handleBlur(e);
                          }),
                          this.$selection.on("keydown", function (e) {
                            r.trigger("keypress", e),
                              e.which === n.SPACE && e.preventDefault();
                          }),
                          e.on("results:focus", function (e) {
                            r.$selection.attr(
                              "aria-activedescendant",
                              e.data._resultId
                            );
                          }),
                          e.on("selection:update", function (e) {
                            r.update(e.data);
                          }),
                          e.on("open", function () {
                            r.$selection.attr("aria-expanded", "true"),
                              r.$selection.attr("aria-owns", i),
                              r._attachCloseHandler(e);
                          }),
                          e.on("close", function () {
                            r.$selection.attr("aria-expanded", "false"),
                              r.$selection.removeAttr("aria-activedescendant"),
                              r.$selection.removeAttr("aria-owns"),
                              r.$selection.trigger("focus"),
                              r._detachCloseHandler(e);
                          }),
                          e.on("enable", function () {
                            r.$selection.attr("tabindex", r._tabindex),
                              r.$selection.attr("aria-disabled", "false");
                          }),
                          e.on("disable", function () {
                            r.$selection.attr("tabindex", "-1"),
                              r.$selection.attr("aria-disabled", "true");
                          });
                      }),
                      (r.prototype._handleBlur = function (t) {
                        var n = this;
                        window.setTimeout(function () {
                          document.activeElement == n.$selection[0] ||
                            e.contains(
                              n.$selection[0],
                              document.activeElement
                            ) ||
                            n.trigger("blur", t);
                        }, 1);
                      }),
                      (r.prototype._attachCloseHandler = function (n) {
                        e(document.body).on(
                          "mousedown.select2." + n.id,
                          function (n) {
                            var r = e(n.target).closest(".select2");
                            e(".select2.select2-container--open").each(
                              function () {
                                this != r[0] &&
                                  t.GetData(this, "element").select2("close");
                              }
                            );
                          }
                        );
                      }),
                      (r.prototype._detachCloseHandler = function (t) {
                        e(document.body).off("mousedown.select2." + t.id);
                      }),
                      (r.prototype.position = function (e, t) {
                        t.find(".selection").append(e);
                      }),
                      (r.prototype.destroy = function () {
                        this._detachCloseHandler(this.container);
                      }),
                      (r.prototype.update = function (e) {
                        throw new Error(
                          "The `update` method must be defined in child classes."
                        );
                      }),
                      r
                    );
                  }
                ),
                t.define(
                  "select2/selection/single",
                  ["jquery", "./base", "../utils", "../keys"],
                  function (e, t, n, r) {
                    function i() {
                      i.__super__.constructor.apply(this, arguments);
                    }
                    return (
                      n.Extend(i, t),
                      (i.prototype.render = function () {
                        var e = i.__super__.render.call(this);
                        return (
                          e.addClass("select2-selection--single"),
                          e.html(
                            '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                          ),
                          e
                        );
                      }),
                      (i.prototype.bind = function (e, t) {
                        var n = this;
                        i.__super__.bind.apply(this, arguments);
                        var r = e.id + "-container";
                        this.$selection
                          .find(".select2-selection__rendered")
                          .attr("id", r)
                          .attr("role", "textbox")
                          .attr("aria-readonly", "true"),
                          this.$selection.attr("aria-labelledby", r),
                          this.$selection.on("mousedown", function (e) {
                            1 === e.which &&
                              n.trigger("toggle", {
                                originalEvent: e,
                              });
                          }),
                          this.$selection.on("focus", function (e) {}),
                          this.$selection.on("blur", function (e) {}),
                          e.on("focus", function (t) {
                            e.isOpen() || n.$selection.trigger("focus");
                          });
                      }),
                      (i.prototype.clear = function () {
                        var e = this.$selection.find(
                          ".select2-selection__rendered"
                        );
                        e.empty(), e.removeAttr("title");
                      }),
                      (i.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t));
                      }),
                      (i.prototype.selectionContainer = function () {
                        return e("<span></span>");
                      }),
                      (i.prototype.update = function (e) {
                        if (0 !== e.length) {
                          var t = e[0],
                            n = this.$selection.find(
                              ".select2-selection__rendered"
                            ),
                            r = this.display(t, n);
                          n.empty().append(r);
                          var i = t.title || t.text;
                          i ? n.attr("title", i) : n.removeAttr("title");
                        } else this.clear();
                      }),
                      i
                    );
                  }
                ),
                t.define(
                  "select2/selection/multiple",
                  ["jquery", "./base", "../utils"],
                  function (e, t, n) {
                    function r(e, t) {
                      r.__super__.constructor.apply(this, arguments);
                    }
                    return (
                      n.Extend(r, t),
                      (r.prototype.render = function () {
                        var e = r.__super__.render.call(this);
                        return (
                          e.addClass("select2-selection--multiple"),
                          e.html(
                            '<ul class="select2-selection__rendered"></ul>'
                          ),
                          e
                        );
                      }),
                      (r.prototype.bind = function (t, i) {
                        var o = this;
                        r.__super__.bind.apply(this, arguments),
                          this.$selection.on("click", function (e) {
                            o.trigger("toggle", {
                              originalEvent: e,
                            });
                          }),
                          this.$selection.on(
                            "click",
                            ".select2-selection__choice__remove",
                            function (t) {
                              if (!o.options.get("disabled")) {
                                var r = e(this).parent(),
                                  i = n.GetData(r[0], "data");
                                o.trigger("unselect", {
                                  originalEvent: t,
                                  data: i,
                                });
                              }
                            }
                          );
                      }),
                      (r.prototype.clear = function () {
                        var e = this.$selection.find(
                          ".select2-selection__rendered"
                        );
                        e.empty(), e.removeAttr("title");
                      }),
                      (r.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t));
                      }),
                      (r.prototype.selectionContainer = function () {
                        return e(
                          '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                        );
                      }),
                      (r.prototype.update = function (e) {
                        if ((this.clear(), 0 !== e.length)) {
                          for (var t = [], r = 0; r < e.length; r++) {
                            var i = e[r],
                              o = this.selectionContainer(),
                              s = this.display(i, o);
                            o.append(s);
                            var a = i.title || i.text;
                            a && o.attr("title", a),
                              n.StoreData(o[0], "data", i),
                              t.push(o);
                          }
                          var l = this.$selection.find(
                            ".select2-selection__rendered"
                          );
                          n.appendMany(l, t);
                        }
                      }),
                      r
                    );
                  }
                ),
                t.define(
                  "select2/selection/placeholder",
                  ["../utils"],
                  function (e) {
                    function t(e, t, n) {
                      (this.placeholder = this.normalizePlaceholder(
                        n.get("placeholder")
                      )),
                        e.call(this, t, n);
                    }
                    return (
                      (t.prototype.normalizePlaceholder = function (e, t) {
                        return (
                          "string" == typeof t &&
                            (t = {
                              id: "",
                              text: t,
                            }),
                          t
                        );
                      }),
                      (t.prototype.createPlaceholder = function (e, t) {
                        var n = this.selectionContainer();
                        return (
                          n.html(this.display(t)),
                          n
                            .addClass("select2-selection__placeholder")
                            .removeClass("select2-selection__choice"),
                          n
                        );
                      }),
                      (t.prototype.update = function (e, t) {
                        var n = 1 == t.length && t[0].id != this.placeholder.id;
                        if (t.length > 1 || n) return e.call(this, t);
                        this.clear();
                        var r = this.createPlaceholder(this.placeholder);
                        this.$selection
                          .find(".select2-selection__rendered")
                          .append(r);
                      }),
                      t
                    );
                  }
                ),
                t.define(
                  "select2/selection/allowClear",
                  ["jquery", "../keys", "../utils"],
                  function (e, t, n) {
                    function r() {}
                    return (
                      (r.prototype.bind = function (e, t, n) {
                        var r = this;
                        e.call(this, t, n),
                          null == this.placeholder &&
                            this.options.get("debug") &&
                            window.console &&
                            console.error &&
                            console.error(
                              "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                            ),
                          this.$selection.on(
                            "mousedown",
                            ".select2-selection__clear",
                            function (e) {
                              r._handleClear(e);
                            }
                          ),
                          t.on("keypress", function (e) {
                            r._handleKeyboardClear(e, t);
                          });
                      }),
                      (r.prototype._handleClear = function (e, t) {
                        if (!this.options.get("disabled")) {
                          var r = this.$selection.find(
                            ".select2-selection__clear"
                          );
                          if (0 !== r.length) {
                            t.stopPropagation();
                            var i = n.GetData(r[0], "data"),
                              o = this.$element.val();
                            this.$element.val(this.placeholder.id);
                            var s = {
                              data: i,
                            };
                            if ((this.trigger("clear", s), s.prevented))
                              this.$element.val(o);
                            else {
                              for (var a = 0; a < i.length; a++)
                                if (
                                  ((s = {
                                    data: i[a],
                                  }),
                                  this.trigger("unselect", s),
                                  s.prevented)
                                )
                                  return void this.$element.val(o);
                              this.$element.trigger("change"),
                                this.trigger("toggle", {});
                            }
                          }
                        }
                      }),
                      (r.prototype._handleKeyboardClear = function (e, n, r) {
                        r.isOpen() ||
                          (n.which != t.DELETE && n.which != t.BACKSPACE) ||
                          this._handleClear(n);
                      }),
                      (r.prototype.update = function (t, r) {
                        if (
                          (t.call(this, r),
                          !(
                            this.$selection.find(
                              ".select2-selection__placeholder"
                            ).length > 0 || 0 === r.length
                          ))
                        ) {
                          var i = this.options
                              .get("translations")
                              .get("removeAllItems"),
                            o = e(
                              '<span class="select2-selection__clear" title="' +
                                i() +
                                '">&times;</span>'
                            );
                          n.StoreData(o[0], "data", r),
                            this.$selection
                              .find(".select2-selection__rendered")
                              .prepend(o);
                        }
                      }),
                      r
                    );
                  }
                ),
                t.define(
                  "select2/selection/search",
                  ["jquery", "../utils", "../keys"],
                  function (e, t, n) {
                    function r(e, t, n) {
                      e.call(this, t, n);
                    }
                    return (
                      (r.prototype.render = function (t) {
                        var n = e(
                          '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>'
                        );
                        (this.$searchContainer = n),
                          (this.$search = n.find("input"));
                        var r = t.call(this);
                        return this._transferTabIndex(), r;
                      }),
                      (r.prototype.bind = function (e, r, i) {
                        var o = this,
                          s = r.id + "-results";
                        e.call(this, r, i),
                          r.on("open", function () {
                            o.$search.attr("aria-controls", s),
                              o.$search.trigger("focus");
                          }),
                          r.on("close", function () {
                            o.$search.val(""),
                              o.$search.removeAttr("aria-controls"),
                              o.$search.removeAttr("aria-activedescendant"),
                              o.$search.trigger("focus");
                          }),
                          r.on("enable", function () {
                            o.$search.prop("disabled", !1),
                              o._transferTabIndex();
                          }),
                          r.on("disable", function () {
                            o.$search.prop("disabled", !0);
                          }),
                          r.on("focus", function (e) {
                            o.$search.trigger("focus");
                          }),
                          r.on("results:focus", function (e) {
                            e.data._resultId
                              ? o.$search.attr(
                                  "aria-activedescendant",
                                  e.data._resultId
                                )
                              : o.$search.removeAttr("aria-activedescendant");
                          }),
                          this.$selection.on(
                            "focusin",
                            ".select2-search--inline",
                            function (e) {
                              o.trigger("focus", e);
                            }
                          ),
                          this.$selection.on(
                            "focusout",
                            ".select2-search--inline",
                            function (e) {
                              o._handleBlur(e);
                            }
                          ),
                          this.$selection.on(
                            "keydown",
                            ".select2-search--inline",
                            function (e) {
                              if (
                                (e.stopPropagation(),
                                o.trigger("keypress", e),
                                (o._keyUpPrevented = e.isDefaultPrevented()),
                                e.which === n.BACKSPACE &&
                                  "" === o.$search.val())
                              ) {
                                var r = o.$searchContainer.prev(
                                  ".select2-selection__choice"
                                );
                                if (r.length > 0) {
                                  var i = t.GetData(r[0], "data");
                                  o.searchRemoveChoice(i), e.preventDefault();
                                }
                              }
                            }
                          ),
                          this.$selection.on(
                            "click",
                            ".select2-search--inline",
                            function (e) {
                              o.$search.val() && e.stopPropagation();
                            }
                          );
                        var a = document.documentMode,
                          l = a && a <= 11;
                        this.$selection.on(
                          "input.searchcheck",
                          ".select2-search--inline",
                          function (e) {
                            l
                              ? o.$selection.off(
                                  "input.search input.searchcheck"
                                )
                              : o.$selection.off("keyup.search");
                          }
                        ),
                          this.$selection.on(
                            "keyup.search input.search",
                            ".select2-search--inline",
                            function (e) {
                              if (l && "input" === e.type)
                                o.$selection.off(
                                  "input.search input.searchcheck"
                                );
                              else {
                                var t = e.which;
                                t != n.SHIFT &&
                                  t != n.CTRL &&
                                  t != n.ALT &&
                                  t != n.TAB &&
                                  o.handleSearch(e);
                              }
                            }
                          );
                      }),
                      (r.prototype._transferTabIndex = function (e) {
                        this.$search.attr(
                          "tabindex",
                          this.$selection.attr("tabindex")
                        ),
                          this.$selection.attr("tabindex", "-1");
                      }),
                      (r.prototype.createPlaceholder = function (e, t) {
                        this.$search.attr("placeholder", t.text);
                      }),
                      (r.prototype.update = function (e, t) {
                        var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""),
                          e.call(this, t),
                          this.$selection
                            .find(".select2-selection__rendered")
                            .append(this.$searchContainer),
                          this.resizeSearch(),
                          n && this.$search.trigger("focus");
                      }),
                      (r.prototype.handleSearch = function () {
                        if ((this.resizeSearch(), !this._keyUpPrevented)) {
                          var e = this.$search.val();
                          this.trigger("query", {
                            term: e,
                          });
                        }
                        this._keyUpPrevented = !1;
                      }),
                      (r.prototype.searchRemoveChoice = function (e, t) {
                        this.trigger("unselect", {
                          data: t,
                        }),
                          this.$search.val(t.text),
                          this.handleSearch();
                      }),
                      (r.prototype.resizeSearch = function () {
                        this.$search.css("width", "25px");
                        var e = "";
                        (e =
                          "" !== this.$search.attr("placeholder")
                            ? this.$selection
                                .find(".select2-selection__rendered")
                                .width()
                            : 0.75 * (this.$search.val().length + 1) + "em"),
                          this.$search.css("width", e);
                      }),
                      r
                    );
                  }
                ),
                t.define(
                  "select2/selection/eventRelay",
                  ["jquery"],
                  function (e) {
                    function t() {}
                    return (
                      (t.prototype.bind = function (t, n, r) {
                        var i = this,
                          o = [
                            "open",
                            "opening",
                            "close",
                            "closing",
                            "select",
                            "selecting",
                            "unselect",
                            "unselecting",
                            "clear",
                            "clearing",
                          ],
                          s = [
                            "opening",
                            "closing",
                            "selecting",
                            "unselecting",
                            "clearing",
                          ];
                        t.call(this, n, r),
                          n.on("*", function (t, n) {
                            if (-1 !== e.inArray(t, o)) {
                              n = n || {};
                              var r = e.Event("select2:" + t, {
                                params: n,
                              });
                              i.$element.trigger(r),
                                -1 !== e.inArray(t, s) &&
                                  (n.prevented = r.isDefaultPrevented());
                            }
                          });
                      }),
                      t
                    );
                  }
                ),
                t.define(
                  "select2/translation",
                  ["jquery", "require"],
                  function (e, t) {
                    function n(e) {
                      this.dict = e || {};
                    }
                    return (
                      (n.prototype.all = function () {
                        return this.dict;
                      }),
                      (n.prototype.get = function (e) {
                        return this.dict[e];
                      }),
                      (n.prototype.extend = function (t) {
                        this.dict = e.extend({}, t.all(), this.dict);
                      }),
                      (n._cache = {}),
                      (n.loadPath = function (e) {
                        if (!(e in n._cache)) {
                          var r = t(e);
                          n._cache[e] = r;
                        }
                        return new n(n._cache[e]);
                      }),
                      n
                    );
                  }
                ),
                t.define("select2/diacritics", [], function () {
                  return {
                    "Ⓐ": "A",
                    Ａ: "A",
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ầ: "A",
                    Ấ: "A",
                    Ẫ: "A",
                    Ẩ: "A",
                    Ã: "A",
                    Ā: "A",
                    Ă: "A",
                    Ằ: "A",
                    Ắ: "A",
                    Ẵ: "A",
                    Ẳ: "A",
                    Ȧ: "A",
                    Ǡ: "A",
                    Ä: "A",
                    Ǟ: "A",
                    Ả: "A",
                    Å: "A",
                    Ǻ: "A",
                    Ǎ: "A",
                    Ȁ: "A",
                    Ȃ: "A",
                    Ạ: "A",
                    Ậ: "A",
                    Ặ: "A",
                    Ḁ: "A",
                    Ą: "A",
                    Ⱥ: "A",
                    Ɐ: "A",
                    Ꜳ: "AA",
                    Æ: "AE",
                    Ǽ: "AE",
                    Ǣ: "AE",
                    Ꜵ: "AO",
                    Ꜷ: "AU",
                    Ꜹ: "AV",
                    Ꜻ: "AV",
                    Ꜽ: "AY",
                    "Ⓑ": "B",
                    Ｂ: "B",
                    Ḃ: "B",
                    Ḅ: "B",
                    Ḇ: "B",
                    Ƀ: "B",
                    Ƃ: "B",
                    Ɓ: "B",
                    "Ⓒ": "C",
                    Ｃ: "C",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    Ç: "C",
                    Ḉ: "C",
                    Ƈ: "C",
                    Ȼ: "C",
                    Ꜿ: "C",
                    "Ⓓ": "D",
                    Ｄ: "D",
                    Ḋ: "D",
                    Ď: "D",
                    Ḍ: "D",
                    Ḑ: "D",
                    Ḓ: "D",
                    Ḏ: "D",
                    Đ: "D",
                    Ƌ: "D",
                    Ɗ: "D",
                    Ɖ: "D",
                    Ꝺ: "D",
                    Ǳ: "DZ",
                    Ǆ: "DZ",
                    ǲ: "Dz",
                    ǅ: "Dz",
                    "Ⓔ": "E",
                    Ｅ: "E",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ề: "E",
                    Ế: "E",
                    Ễ: "E",
                    Ể: "E",
                    Ẽ: "E",
                    Ē: "E",
                    Ḕ: "E",
                    Ḗ: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ë: "E",
                    Ẻ: "E",
                    Ě: "E",
                    Ȅ: "E",
                    Ȇ: "E",
                    Ẹ: "E",
                    Ệ: "E",
                    Ȩ: "E",
                    Ḝ: "E",
                    Ę: "E",
                    Ḙ: "E",
                    Ḛ: "E",
                    Ɛ: "E",
                    Ǝ: "E",
                    "Ⓕ": "F",
                    Ｆ: "F",
                    Ḟ: "F",
                    Ƒ: "F",
                    Ꝼ: "F",
                    "Ⓖ": "G",
                    Ｇ: "G",
                    Ǵ: "G",
                    Ĝ: "G",
                    Ḡ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ǧ: "G",
                    Ģ: "G",
                    Ǥ: "G",
                    Ɠ: "G",
                    Ꞡ: "G",
                    Ᵹ: "G",
                    Ꝿ: "G",
                    "Ⓗ": "H",
                    Ｈ: "H",
                    Ĥ: "H",
                    Ḣ: "H",
                    Ḧ: "H",
                    Ȟ: "H",
                    Ḥ: "H",
                    Ḩ: "H",
                    Ḫ: "H",
                    Ħ: "H",
                    Ⱨ: "H",
                    Ⱶ: "H",
                    Ɥ: "H",
                    "Ⓘ": "I",
                    Ｉ: "I",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    İ: "I",
                    Ï: "I",
                    Ḯ: "I",
                    Ỉ: "I",
                    Ǐ: "I",
                    Ȉ: "I",
                    Ȋ: "I",
                    Ị: "I",
                    Į: "I",
                    Ḭ: "I",
                    Ɨ: "I",
                    "Ⓙ": "J",
                    Ｊ: "J",
                    Ĵ: "J",
                    Ɉ: "J",
                    "Ⓚ": "K",
                    Ｋ: "K",
                    Ḱ: "K",
                    Ǩ: "K",
                    Ḳ: "K",
                    Ķ: "K",
                    Ḵ: "K",
                    Ƙ: "K",
                    Ⱪ: "K",
                    Ꝁ: "K",
                    Ꝃ: "K",
                    Ꝅ: "K",
                    Ꞣ: "K",
                    "Ⓛ": "L",
                    Ｌ: "L",
                    Ŀ: "L",
                    Ĺ: "L",
                    Ľ: "L",
                    Ḷ: "L",
                    Ḹ: "L",
                    Ļ: "L",
                    Ḽ: "L",
                    Ḻ: "L",
                    Ł: "L",
                    Ƚ: "L",
                    Ɫ: "L",
                    Ⱡ: "L",
                    Ꝉ: "L",
                    Ꝇ: "L",
                    Ꞁ: "L",
                    Ǉ: "LJ",
                    ǈ: "Lj",
                    "Ⓜ": "M",
                    Ｍ: "M",
                    Ḿ: "M",
                    Ṁ: "M",
                    Ṃ: "M",
                    Ɱ: "M",
                    Ɯ: "M",
                    "Ⓝ": "N",
                    Ｎ: "N",
                    Ǹ: "N",
                    Ń: "N",
                    Ñ: "N",
                    Ṅ: "N",
                    Ň: "N",
                    Ṇ: "N",
                    Ņ: "N",
                    Ṋ: "N",
                    Ṉ: "N",
                    Ƞ: "N",
                    Ɲ: "N",
                    Ꞑ: "N",
                    Ꞥ: "N",
                    Ǌ: "NJ",
                    ǋ: "Nj",
                    "Ⓞ": "O",
                    Ｏ: "O",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Ồ: "O",
                    Ố: "O",
                    Ỗ: "O",
                    Ổ: "O",
                    Õ: "O",
                    Ṍ: "O",
                    Ȭ: "O",
                    Ṏ: "O",
                    Ō: "O",
                    Ṑ: "O",
                    Ṓ: "O",
                    Ŏ: "O",
                    Ȯ: "O",
                    Ȱ: "O",
                    Ö: "O",
                    Ȫ: "O",
                    Ỏ: "O",
                    Ő: "O",
                    Ǒ: "O",
                    Ȍ: "O",
                    Ȏ: "O",
                    Ơ: "O",
                    Ờ: "O",
                    Ớ: "O",
                    Ỡ: "O",
                    Ở: "O",
                    Ợ: "O",
                    Ọ: "O",
                    Ộ: "O",
                    Ǫ: "O",
                    Ǭ: "O",
                    Ø: "O",
                    Ǿ: "O",
                    Ɔ: "O",
                    Ɵ: "O",
                    Ꝋ: "O",
                    Ꝍ: "O",
                    Œ: "OE",
                    Ƣ: "OI",
                    Ꝏ: "OO",
                    Ȣ: "OU",
                    "Ⓟ": "P",
                    Ｐ: "P",
                    Ṕ: "P",
                    Ṗ: "P",
                    Ƥ: "P",
                    Ᵽ: "P",
                    Ꝑ: "P",
                    Ꝓ: "P",
                    Ꝕ: "P",
                    "Ⓠ": "Q",
                    Ｑ: "Q",
                    Ꝗ: "Q",
                    Ꝙ: "Q",
                    Ɋ: "Q",
                    "Ⓡ": "R",
                    Ｒ: "R",
                    Ŕ: "R",
                    Ṙ: "R",
                    Ř: "R",
                    Ȑ: "R",
                    Ȓ: "R",
                    Ṛ: "R",
                    Ṝ: "R",
                    Ŗ: "R",
                    Ṟ: "R",
                    Ɍ: "R",
                    Ɽ: "R",
                    Ꝛ: "R",
                    Ꞧ: "R",
                    Ꞃ: "R",
                    "Ⓢ": "S",
                    Ｓ: "S",
                    ẞ: "S",
                    Ś: "S",
                    Ṥ: "S",
                    Ŝ: "S",
                    Ṡ: "S",
                    Š: "S",
                    Ṧ: "S",
                    Ṣ: "S",
                    Ṩ: "S",
                    Ș: "S",
                    Ş: "S",
                    Ȿ: "S",
                    Ꞩ: "S",
                    Ꞅ: "S",
                    "Ⓣ": "T",
                    Ｔ: "T",
                    Ṫ: "T",
                    Ť: "T",
                    Ṭ: "T",
                    Ț: "T",
                    Ţ: "T",
                    Ṱ: "T",
                    Ṯ: "T",
                    Ŧ: "T",
                    Ƭ: "T",
                    Ʈ: "T",
                    Ⱦ: "T",
                    Ꞇ: "T",
                    Ꜩ: "TZ",
                    "Ⓤ": "U",
                    Ｕ: "U",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ũ: "U",
                    Ṹ: "U",
                    Ū: "U",
                    Ṻ: "U",
                    Ŭ: "U",
                    Ü: "U",
                    Ǜ: "U",
                    Ǘ: "U",
                    Ǖ: "U",
                    Ǚ: "U",
                    Ủ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ǔ: "U",
                    Ȕ: "U",
                    Ȗ: "U",
                    Ư: "U",
                    Ừ: "U",
                    Ứ: "U",
                    Ữ: "U",
                    Ử: "U",
                    Ự: "U",
                    Ụ: "U",
                    Ṳ: "U",
                    Ų: "U",
                    Ṷ: "U",
                    Ṵ: "U",
                    Ʉ: "U",
                    "Ⓥ": "V",
                    Ｖ: "V",
                    Ṽ: "V",
                    Ṿ: "V",
                    Ʋ: "V",
                    Ꝟ: "V",
                    Ʌ: "V",
                    Ꝡ: "VY",
                    "Ⓦ": "W",
                    Ｗ: "W",
                    Ẁ: "W",
                    Ẃ: "W",
                    Ŵ: "W",
                    Ẇ: "W",
                    Ẅ: "W",
                    Ẉ: "W",
                    Ⱳ: "W",
                    "Ⓧ": "X",
                    Ｘ: "X",
                    Ẋ: "X",
                    Ẍ: "X",
                    "Ⓨ": "Y",
                    Ｙ: "Y",
                    Ỳ: "Y",
                    Ý: "Y",
                    Ŷ: "Y",
                    Ỹ: "Y",
                    Ȳ: "Y",
                    Ẏ: "Y",
                    Ÿ: "Y",
                    Ỷ: "Y",
                    Ỵ: "Y",
                    Ƴ: "Y",
                    Ɏ: "Y",
                    Ỿ: "Y",
                    "Ⓩ": "Z",
                    Ｚ: "Z",
                    Ź: "Z",
                    Ẑ: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    Ẓ: "Z",
                    Ẕ: "Z",
                    Ƶ: "Z",
                    Ȥ: "Z",
                    Ɀ: "Z",
                    Ⱬ: "Z",
                    Ꝣ: "Z",
                    "ⓐ": "a",
                    ａ: "a",
                    ẚ: "a",
                    à: "a",
                    á: "a",
                    â: "a",
                    ầ: "a",
                    ấ: "a",
                    ẫ: "a",
                    ẩ: "a",
                    ã: "a",
                    ā: "a",
                    ă: "a",
                    ằ: "a",
                    ắ: "a",
                    ẵ: "a",
                    ẳ: "a",
                    ȧ: "a",
                    ǡ: "a",
                    ä: "a",
                    ǟ: "a",
                    ả: "a",
                    å: "a",
                    ǻ: "a",
                    ǎ: "a",
                    ȁ: "a",
                    ȃ: "a",
                    ạ: "a",
                    ậ: "a",
                    ặ: "a",
                    ḁ: "a",
                    ą: "a",
                    ⱥ: "a",
                    ɐ: "a",
                    ꜳ: "aa",
                    æ: "ae",
                    ǽ: "ae",
                    ǣ: "ae",
                    ꜵ: "ao",
                    ꜷ: "au",
                    ꜹ: "av",
                    ꜻ: "av",
                    ꜽ: "ay",
                    "ⓑ": "b",
                    ｂ: "b",
                    ḃ: "b",
                    ḅ: "b",
                    ḇ: "b",
                    ƀ: "b",
                    ƃ: "b",
                    ɓ: "b",
                    "ⓒ": "c",
                    ｃ: "c",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    ç: "c",
                    ḉ: "c",
                    ƈ: "c",
                    ȼ: "c",
                    ꜿ: "c",
                    ↄ: "c",
                    "ⓓ": "d",
                    ｄ: "d",
                    ḋ: "d",
                    ď: "d",
                    ḍ: "d",
                    ḑ: "d",
                    ḓ: "d",
                    ḏ: "d",
                    đ: "d",
                    ƌ: "d",
                    ɖ: "d",
                    ɗ: "d",
                    ꝺ: "d",
                    ǳ: "dz",
                    ǆ: "dz",
                    "ⓔ": "e",
                    ｅ: "e",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ề: "e",
                    ế: "e",
                    ễ: "e",
                    ể: "e",
                    ẽ: "e",
                    ē: "e",
                    ḕ: "e",
                    ḗ: "e",
                    ĕ: "e",
                    ė: "e",
                    ë: "e",
                    ẻ: "e",
                    ě: "e",
                    ȅ: "e",
                    ȇ: "e",
                    ẹ: "e",
                    ệ: "e",
                    ȩ: "e",
                    ḝ: "e",
                    ę: "e",
                    ḙ: "e",
                    ḛ: "e",
                    ɇ: "e",
                    ɛ: "e",
                    ǝ: "e",
                    "ⓕ": "f",
                    ｆ: "f",
                    ḟ: "f",
                    ƒ: "f",
                    ꝼ: "f",
                    "ⓖ": "g",
                    ｇ: "g",
                    ǵ: "g",
                    ĝ: "g",
                    ḡ: "g",
                    ğ: "g",
                    ġ: "g",
                    ǧ: "g",
                    ģ: "g",
                    ǥ: "g",
                    ɠ: "g",
                    ꞡ: "g",
                    ᵹ: "g",
                    ꝿ: "g",
                    "ⓗ": "h",
                    ｈ: "h",
                    ĥ: "h",
                    ḣ: "h",
                    ḧ: "h",
                    ȟ: "h",
                    ḥ: "h",
                    ḩ: "h",
                    ḫ: "h",
                    ẖ: "h",
                    ħ: "h",
                    ⱨ: "h",
                    ⱶ: "h",
                    ɥ: "h",
                    ƕ: "hv",
                    "ⓘ": "i",
                    ｉ: "i",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    ï: "i",
                    ḯ: "i",
                    ỉ: "i",
                    ǐ: "i",
                    ȉ: "i",
                    ȋ: "i",
                    ị: "i",
                    į: "i",
                    ḭ: "i",
                    ɨ: "i",
                    ı: "i",
                    "ⓙ": "j",
                    ｊ: "j",
                    ĵ: "j",
                    ǰ: "j",
                    ɉ: "j",
                    "ⓚ": "k",
                    ｋ: "k",
                    ḱ: "k",
                    ǩ: "k",
                    ḳ: "k",
                    ķ: "k",
                    ḵ: "k",
                    ƙ: "k",
                    ⱪ: "k",
                    ꝁ: "k",
                    ꝃ: "k",
                    ꝅ: "k",
                    ꞣ: "k",
                    "ⓛ": "l",
                    ｌ: "l",
                    ŀ: "l",
                    ĺ: "l",
                    ľ: "l",
                    ḷ: "l",
                    ḹ: "l",
                    ļ: "l",
                    ḽ: "l",
                    ḻ: "l",
                    ſ: "l",
                    ł: "l",
                    ƚ: "l",
                    ɫ: "l",
                    ⱡ: "l",
                    ꝉ: "l",
                    ꞁ: "l",
                    ꝇ: "l",
                    ǉ: "lj",
                    "ⓜ": "m",
                    ｍ: "m",
                    ḿ: "m",
                    ṁ: "m",
                    ṃ: "m",
                    ɱ: "m",
                    ɯ: "m",
                    "ⓝ": "n",
                    ｎ: "n",
                    ǹ: "n",
                    ń: "n",
                    ñ: "n",
                    ṅ: "n",
                    ň: "n",
                    ṇ: "n",
                    ņ: "n",
                    ṋ: "n",
                    ṉ: "n",
                    ƞ: "n",
                    ɲ: "n",
                    ŉ: "n",
                    ꞑ: "n",
                    ꞥ: "n",
                    ǌ: "nj",
                    "ⓞ": "o",
                    ｏ: "o",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    ồ: "o",
                    ố: "o",
                    ỗ: "o",
                    ổ: "o",
                    õ: "o",
                    ṍ: "o",
                    ȭ: "o",
                    ṏ: "o",
                    ō: "o",
                    ṑ: "o",
                    ṓ: "o",
                    ŏ: "o",
                    ȯ: "o",
                    ȱ: "o",
                    ö: "o",
                    ȫ: "o",
                    ỏ: "o",
                    ő: "o",
                    ǒ: "o",
                    ȍ: "o",
                    ȏ: "o",
                    ơ: "o",
                    ờ: "o",
                    ớ: "o",
                    ỡ: "o",
                    ở: "o",
                    ợ: "o",
                    ọ: "o",
                    ộ: "o",
                    ǫ: "o",
                    ǭ: "o",
                    ø: "o",
                    ǿ: "o",
                    ɔ: "o",
                    ꝋ: "o",
                    ꝍ: "o",
                    ɵ: "o",
                    œ: "oe",
                    ƣ: "oi",
                    ȣ: "ou",
                    ꝏ: "oo",
                    "ⓟ": "p",
                    ｐ: "p",
                    ṕ: "p",
                    ṗ: "p",
                    ƥ: "p",
                    ᵽ: "p",
                    ꝑ: "p",
                    ꝓ: "p",
                    ꝕ: "p",
                    "ⓠ": "q",
                    ｑ: "q",
                    ɋ: "q",
                    ꝗ: "q",
                    ꝙ: "q",
                    "ⓡ": "r",
                    ｒ: "r",
                    ŕ: "r",
                    ṙ: "r",
                    ř: "r",
                    ȑ: "r",
                    ȓ: "r",
                    ṛ: "r",
                    ṝ: "r",
                    ŗ: "r",
                    ṟ: "r",
                    ɍ: "r",
                    ɽ: "r",
                    ꝛ: "r",
                    ꞧ: "r",
                    ꞃ: "r",
                    "ⓢ": "s",
                    ｓ: "s",
                    ß: "s",
                    ś: "s",
                    ṥ: "s",
                    ŝ: "s",
                    ṡ: "s",
                    š: "s",
                    ṧ: "s",
                    ṣ: "s",
                    ṩ: "s",
                    ș: "s",
                    ş: "s",
                    ȿ: "s",
                    ꞩ: "s",
                    ꞅ: "s",
                    ẛ: "s",
                    "ⓣ": "t",
                    ｔ: "t",
                    ṫ: "t",
                    ẗ: "t",
                    ť: "t",
                    ṭ: "t",
                    ț: "t",
                    ţ: "t",
                    ṱ: "t",
                    ṯ: "t",
                    ŧ: "t",
                    ƭ: "t",
                    ʈ: "t",
                    ⱦ: "t",
                    ꞇ: "t",
                    ꜩ: "tz",
                    "ⓤ": "u",
                    ｕ: "u",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ũ: "u",
                    ṹ: "u",
                    ū: "u",
                    ṻ: "u",
                    ŭ: "u",
                    ü: "u",
                    ǜ: "u",
                    ǘ: "u",
                    ǖ: "u",
                    ǚ: "u",
                    ủ: "u",
                    ů: "u",
                    ű: "u",
                    ǔ: "u",
                    ȕ: "u",
                    ȗ: "u",
                    ư: "u",
                    ừ: "u",
                    ứ: "u",
                    ữ: "u",
                    ử: "u",
                    ự: "u",
                    ụ: "u",
                    ṳ: "u",
                    ų: "u",
                    ṷ: "u",
                    ṵ: "u",
                    ʉ: "u",
                    "ⓥ": "v",
                    ｖ: "v",
                    ṽ: "v",
                    ṿ: "v",
                    ʋ: "v",
                    ꝟ: "v",
                    ʌ: "v",
                    ꝡ: "vy",
                    "ⓦ": "w",
                    ｗ: "w",
                    ẁ: "w",
                    ẃ: "w",
                    ŵ: "w",
                    ẇ: "w",
                    ẅ: "w",
                    ẘ: "w",
                    ẉ: "w",
                    ⱳ: "w",
                    "ⓧ": "x",
                    ｘ: "x",
                    ẋ: "x",
                    ẍ: "x",
                    "ⓨ": "y",
                    ｙ: "y",
                    ỳ: "y",
                    ý: "y",
                    ŷ: "y",
                    ỹ: "y",
                    ȳ: "y",
                    ẏ: "y",
                    ÿ: "y",
                    ỷ: "y",
                    ẙ: "y",
                    ỵ: "y",
                    ƴ: "y",
                    ɏ: "y",
                    ỿ: "y",
                    "ⓩ": "z",
                    ｚ: "z",
                    ź: "z",
                    ẑ: "z",
                    ż: "z",
                    ž: "z",
                    ẓ: "z",
                    ẕ: "z",
                    ƶ: "z",
                    ȥ: "z",
                    ɀ: "z",
                    ⱬ: "z",
                    ꝣ: "z",
                    Ά: "Α",
                    Έ: "Ε",
                    Ή: "Η",
                    Ί: "Ι",
                    Ϊ: "Ι",
                    Ό: "Ο",
                    Ύ: "Υ",
                    Ϋ: "Υ",
                    Ώ: "Ω",
                    ά: "α",
                    έ: "ε",
                    ή: "η",
                    ί: "ι",
                    ϊ: "ι",
                    ΐ: "ι",
                    ό: "ο",
                    ύ: "υ",
                    ϋ: "υ",
                    ΰ: "υ",
                    ώ: "ω",
                    ς: "σ",
                    "’": "'",
                  };
                }),
                t.define("select2/data/base", ["../utils"], function (e) {
                  function t(e, n) {
                    t.__super__.constructor.call(this);
                  }
                  return (
                    e.Extend(t, e.Observable),
                    (t.prototype.current = function (e) {
                      throw new Error(
                        "The `current` method must be defined in child classes."
                      );
                    }),
                    (t.prototype.query = function (e, t) {
                      throw new Error(
                        "The `query` method must be defined in child classes."
                      );
                    }),
                    (t.prototype.bind = function (e, t) {}),
                    (t.prototype.destroy = function () {}),
                    (t.prototype.generateResultId = function (t, n) {
                      var r = t.id + "-result-";
                      return (
                        (r += e.generateChars(4)),
                        null != n.id
                          ? (r += "-" + n.id.toString())
                          : (r += "-" + e.generateChars(4)),
                        r
                      );
                    }),
                    t
                  );
                }),
                t.define(
                  "select2/data/select",
                  ["./base", "../utils", "jquery"],
                  function (e, t, n) {
                    function r(e, t) {
                      (this.$element = e),
                        (this.options = t),
                        r.__super__.constructor.call(this);
                    }
                    return (
                      t.Extend(r, e),
                      (r.prototype.current = function (e) {
                        var t = [],
                          r = this;
                        this.$element.find(":selected").each(function () {
                          var e = n(this),
                            i = r.item(e);
                          t.push(i);
                        }),
                          e(t);
                      }),
                      (r.prototype.select = function (e) {
                        var t = this;
                        if (((e.selected = !0), n(e.element).is("option")))
                          return (
                            (e.element.selected = !0),
                            void this.$element.trigger("change")
                          );
                        if (this.$element.prop("multiple"))
                          this.current(function (r) {
                            var i = [];
                            (e = [e]).push.apply(e, r);
                            for (var o = 0; o < e.length; o++) {
                              var s = e[o].id;
                              -1 === n.inArray(s, i) && i.push(s);
                            }
                            t.$element.val(i), t.$element.trigger("change");
                          });
                        else {
                          var r = e.id;
                          this.$element.val(r), this.$element.trigger("change");
                        }
                      }),
                      (r.prototype.unselect = function (e) {
                        var t = this;
                        if (this.$element.prop("multiple")) {
                          if (((e.selected = !1), n(e.element).is("option")))
                            return (
                              (e.element.selected = !1),
                              void this.$element.trigger("change")
                            );
                          this.current(function (r) {
                            for (var i = [], o = 0; o < r.length; o++) {
                              var s = r[o].id;
                              s !== e.id && -1 === n.inArray(s, i) && i.push(s);
                            }
                            t.$element.val(i), t.$element.trigger("change");
                          });
                        }
                      }),
                      (r.prototype.bind = function (e, t) {
                        var n = this;
                        (this.container = e),
                          e.on("select", function (e) {
                            n.select(e.data);
                          }),
                          e.on("unselect", function (e) {
                            n.unselect(e.data);
                          });
                      }),
                      (r.prototype.destroy = function () {
                        this.$element.find("*").each(function () {
                          t.RemoveData(this);
                        });
                      }),
                      (r.prototype.query = function (e, t) {
                        var r = [],
                          i = this;
                        this.$element.children().each(function () {
                          var t = n(this);
                          if (t.is("option") || t.is("optgroup")) {
                            var o = i.item(t),
                              s = i.matches(e, o);
                            null !== s && r.push(s);
                          }
                        }),
                          t({
                            results: r,
                          });
                      }),
                      (r.prototype.addOptions = function (e) {
                        t.appendMany(this.$element, e);
                      }),
                      (r.prototype.option = function (e) {
                        var r;
                        e.children
                          ? ((r = document.createElement("optgroup")).label =
                              e.text)
                          : void 0 !==
                            (r = document.createElement("option")).textContent
                          ? (r.textContent = e.text)
                          : (r.innerText = e.text),
                          void 0 !== e.id && (r.value = e.id),
                          e.disabled && (r.disabled = !0),
                          e.selected && (r.selected = !0),
                          e.title && (r.title = e.title);
                        var i = n(r),
                          o = this._normalizeItem(e);
                        return (o.element = r), t.StoreData(r, "data", o), i;
                      }),
                      (r.prototype.item = function (e) {
                        var r = {};
                        if (null != (r = t.GetData(e[0], "data"))) return r;
                        if (e.is("option"))
                          r = {
                            id: e.val(),
                            text: e.text(),
                            disabled: e.prop("disabled"),
                            selected: e.prop("selected"),
                            title: e.prop("title"),
                          };
                        else if (e.is("optgroup")) {
                          r = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title"),
                          };
                          for (
                            var i = e.children("option"), o = [], s = 0;
                            s < i.length;
                            s++
                          ) {
                            var a = n(i[s]),
                              l = this.item(a);
                            o.push(l);
                          }
                          r.children = o;
                        }
                        return (
                          ((r = this._normalizeItem(r)).element = e[0]),
                          t.StoreData(e[0], "data", r),
                          r
                        );
                      }),
                      (r.prototype._normalizeItem = function (e) {
                        e !== Object(e) &&
                          (e = {
                            id: e,
                            text: e,
                          });
                        var t = {
                          selected: !1,
                          disabled: !1,
                        };
                        return (
                          null !=
                            (e = n.extend(
                              {},
                              {
                                text: "",
                              },
                              e
                            )).id && (e.id = e.id.toString()),
                          null != e.text && (e.text = e.text.toString()),
                          null == e._resultId &&
                            e.id &&
                            null != this.container &&
                            (e._resultId = this.generateResultId(
                              this.container,
                              e
                            )),
                          n.extend({}, t, e)
                        );
                      }),
                      (r.prototype.matches = function (e, t) {
                        return this.options.get("matcher")(e, t);
                      }),
                      r
                    );
                  }
                ),
                t.define(
                  "select2/data/array",
                  ["./select", "../utils", "jquery"],
                  function (e, t, n) {
                    function r(e, t) {
                      (this._dataToConvert = t.get("data") || []),
                        r.__super__.constructor.call(this, e, t);
                    }
                    return (
                      t.Extend(r, e),
                      (r.prototype.bind = function (e, t) {
                        r.__super__.bind.call(this, e, t),
                          this.addOptions(
                            this.convertToOptions(this._dataToConvert)
                          );
                      }),
                      (r.prototype.select = function (e) {
                        var t = this.$element
                          .find("option")
                          .filter(function (t, n) {
                            return n.value == e.id.toString();
                          });
                        0 === t.length &&
                          ((t = this.option(e)), this.addOptions(t)),
                          r.__super__.select.call(this, e);
                      }),
                      (r.prototype.convertToOptions = function (e) {
                        var r = this,
                          i = this.$element.find("option"),
                          o = i
                            .map(function () {
                              return r.item(n(this)).id;
                            })
                            .get(),
                          s = [];
                        function a(e) {
                          return function () {
                            return n(this).val() == e.id;
                          };
                        }
                        for (var l = 0; l < e.length; l++) {
                          var c = this._normalizeItem(e[l]);
                          if (n.inArray(c.id, o) >= 0) {
                            var u = i.filter(a(c)),
                              d = this.item(u),
                              p = n.extend(!0, {}, c, d),
                              h = this.option(p);
                            u.replaceWith(h);
                          } else {
                            var f = this.option(c);
                            if (c.children) {
                              var g = this.convertToOptions(c.children);
                              t.appendMany(f, g);
                            }
                            s.push(f);
                          }
                        }
                        return s;
                      }),
                      r
                    );
                  }
                ),
                t.define(
                  "select2/data/ajax",
                  ["./array", "../utils", "jquery"],
                  function (e, t, n) {
                    function r(e, t) {
                      (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                        null != this.ajaxOptions.processResults &&
                          (this.processResults =
                            this.ajaxOptions.processResults),
                        r.__super__.constructor.call(this, e, t);
                    }
                    return (
                      t.Extend(r, e),
                      (r.prototype._applyDefaults = function (e) {
                        var t = {
                          data: function (e) {
                            return n.extend({}, e, {
                              q: e.term,
                            });
                          },
                          transport: function (e, t, r) {
                            var i = n.ajax(e);
                            return i.then(t), i.fail(r), i;
                          },
                        };
                        return n.extend({}, t, e, !0);
                      }),
                      (r.prototype.processResults = function (e) {
                        return e;
                      }),
                      (r.prototype.query = function (e, t) {
                        var r = this;
                        null != this._request &&
                          (n.isFunction(this._request.abort) &&
                            this._request.abort(),
                          (this._request = null));
                        var i = n.extend(
                          {
                            type: "GET",
                          },
                          this.ajaxOptions
                        );
                        function o() {
                          var o = i.transport(
                            i,
                            function (i) {
                              var o = r.processResults(i, e);
                              r.options.get("debug") &&
                                window.console &&
                                console.error &&
                                ((o && o.results && n.isArray(o.results)) ||
                                  console.error(
                                    "Select2: The AJAX results did not return an array in the `results` key of the response."
                                  )),
                                t(o);
                            },
                            function () {
                              (!("status" in o) ||
                                (0 !== o.status && "0" !== o.status)) &&
                                r.trigger("results:message", {
                                  message: "errorLoading",
                                });
                            }
                          );
                          r._request = o;
                        }
                        "function" == typeof i.url &&
                          (i.url = i.url.call(this.$element, e)),
                          "function" == typeof i.data &&
                            (i.data = i.data.call(this.$element, e)),
                          this.ajaxOptions.delay && null != e.term
                            ? (this._queryTimeout &&
                                window.clearTimeout(this._queryTimeout),
                              (this._queryTimeout = window.setTimeout(
                                o,
                                this.ajaxOptions.delay
                              )))
                            : o();
                      }),
                      r
                    );
                  }
                ),
                t.define("select2/data/tags", ["jquery"], function (e) {
                  function t(t, n, r) {
                    var i = r.get("tags"),
                      o = r.get("createTag");
                    void 0 !== o && (this.createTag = o);
                    var s = r.get("insertTag");
                    if (
                      (void 0 !== s && (this.insertTag = s),
                      t.call(this, n, r),
                      e.isArray(i))
                    )
                      for (var a = 0; a < i.length; a++) {
                        var l = i[a],
                          c = this._normalizeItem(l),
                          u = this.option(c);
                        this.$element.append(u);
                      }
                  }
                  return (
                    (t.prototype.query = function (e, t, n) {
                      var r = this;
                      function i(e, o) {
                        for (var s = e.results, a = 0; a < s.length; a++) {
                          var l = s[a],
                            c =
                              null != l.children &&
                              !i(
                                {
                                  results: l.children,
                                },
                                !0
                              );
                          if (
                            (l.text || "").toUpperCase() ===
                              (t.term || "").toUpperCase() ||
                            c
                          )
                            return !o && ((e.data = s), void n(e));
                        }
                        if (o) return !0;
                        var u = r.createTag(t);
                        if (null != u) {
                          var d = r.option(u);
                          d.attr("data-select2-tag", !0),
                            r.addOptions([d]),
                            r.insertTag(s, u);
                        }
                        (e.results = s), n(e);
                      }
                      this._removeOldTags(),
                        null != t.term && null == t.page
                          ? e.call(this, t, i)
                          : e.call(this, t, n);
                    }),
                    (t.prototype.createTag = function (t, n) {
                      var r = e.trim(n.term);
                      return "" === r
                        ? null
                        : {
                            id: r,
                            text: r,
                          };
                    }),
                    (t.prototype.insertTag = function (e, t, n) {
                      t.unshift(n);
                    }),
                    (t.prototype._removeOldTags = function (t) {
                      this.$element
                        .find("option[data-select2-tag]")
                        .each(function () {
                          this.selected || e(this).remove();
                        });
                    }),
                    t
                  );
                }),
                t.define("select2/data/tokenizer", ["jquery"], function (e) {
                  function t(e, t, n) {
                    var r = n.get("tokenizer");
                    void 0 !== r && (this.tokenizer = r), e.call(this, t, n);
                  }
                  return (
                    (t.prototype.bind = function (e, t, n) {
                      e.call(this, t, n),
                        (this.$search =
                          t.dropdown.$search ||
                          t.selection.$search ||
                          n.find(".select2-search__field"));
                    }),
                    (t.prototype.query = function (t, n, r) {
                      var i = this;
                      function o(t) {
                        var n = i._normalizeItem(t);
                        if (
                          !i.$element.find("option").filter(function () {
                            return e(this).val() === n.id;
                          }).length
                        ) {
                          var r = i.option(n);
                          r.attr("data-select2-tag", !0),
                            i._removeOldTags(),
                            i.addOptions([r]);
                        }
                        s(n);
                      }
                      function s(e) {
                        i.trigger("select", {
                          data: e,
                        });
                      }
                      n.term = n.term || "";
                      var a = this.tokenizer(n, this.options, o);
                      a.term !== n.term &&
                        (this.$search.length &&
                          (this.$search.val(a.term),
                          this.$search.trigger("focus")),
                        (n.term = a.term)),
                        t.call(this, n, r);
                    }),
                    (t.prototype.tokenizer = function (t, n, r, i) {
                      for (
                        var o = r.get("tokenSeparators") || [],
                          s = n.term,
                          a = 0,
                          l =
                            this.createTag ||
                            function (e) {
                              return {
                                id: e.term,
                                text: e.term,
                              };
                            };
                        a < s.length;

                      ) {
                        var c = s[a];
                        if (-1 !== e.inArray(c, o)) {
                          var u = s.substr(0, a),
                            d = l(
                              e.extend({}, n, {
                                term: u,
                              })
                            );
                          null != d
                            ? (i(d), (s = s.substr(a + 1) || ""), (a = 0))
                            : a++;
                        } else a++;
                      }
                      return {
                        term: s,
                      };
                    }),
                    t
                  );
                }),
                t.define("select2/data/minimumInputLength", [], function () {
                  function e(e, t, n) {
                    (this.minimumInputLength = n.get("minimumInputLength")),
                      e.call(this, t, n);
                  }
                  return (
                    (e.prototype.query = function (e, t, n) {
                      (t.term = t.term || ""),
                        t.term.length < this.minimumInputLength
                          ? this.trigger("results:message", {
                              message: "inputTooShort",
                              args: {
                                minimum: this.minimumInputLength,
                                input: t.term,
                                params: t,
                              },
                            })
                          : e.call(this, t, n);
                    }),
                    e
                  );
                }),
                t.define("select2/data/maximumInputLength", [], function () {
                  function e(e, t, n) {
                    (this.maximumInputLength = n.get("maximumInputLength")),
                      e.call(this, t, n);
                  }
                  return (
                    (e.prototype.query = function (e, t, n) {
                      (t.term = t.term || ""),
                        this.maximumInputLength > 0 &&
                        t.term.length > this.maximumInputLength
                          ? this.trigger("results:message", {
                              message: "inputTooLong",
                              args: {
                                maximum: this.maximumInputLength,
                                input: t.term,
                                params: t,
                              },
                            })
                          : e.call(this, t, n);
                    }),
                    e
                  );
                }),
                t.define(
                  "select2/data/maximumSelectionLength",
                  [],
                  function () {
                    function e(e, t, n) {
                      (this.maximumSelectionLength = n.get(
                        "maximumSelectionLength"
                      )),
                        e.call(this, t, n);
                    }
                    return (
                      (e.prototype.bind = function (e, t, n) {
                        var r = this;
                        e.call(this, t, n),
                          t.on("select", function () {
                            r._checkIfMaximumSelected();
                          });
                      }),
                      (e.prototype.query = function (e, t, n) {
                        var r = this;
                        this._checkIfMaximumSelected(function () {
                          e.call(r, t, n);
                        });
                      }),
                      (e.prototype._checkIfMaximumSelected = function (e, t) {
                        var n = this;
                        this.current(function (e) {
                          var r = null != e ? e.length : 0;
                          n.maximumSelectionLength > 0 &&
                          r >= n.maximumSelectionLength
                            ? n.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                  maximum: n.maximumSelectionLength,
                                },
                              })
                            : t && t();
                        });
                      }),
                      e
                    );
                  }
                ),
                t.define(
                  "select2/dropdown",
                  ["jquery", "./utils"],
                  function (e, t) {
                    function n(e, t) {
                      (this.$element = e),
                        (this.options = t),
                        n.__super__.constructor.call(this);
                    }
                    return (
                      t.Extend(n, t.Observable),
                      (n.prototype.render = function () {
                        var t = e(
                          '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                        );
                        return (
                          t.attr("dir", this.options.get("dir")),
                          (this.$dropdown = t),
                          t
                        );
                      }),
                      (n.prototype.bind = function () {}),
                      (n.prototype.position = function (e, t) {}),
                      (n.prototype.destroy = function () {
                        this.$dropdown.remove();
                      }),
                      n
                    );
                  }
                ),
                t.define(
                  "select2/dropdown/search",
                  ["jquery", "../utils"],
                  function (e, t) {
                    function n() {}
                    return (
                      (n.prototype.render = function (t) {
                        var n = t.call(this),
                          r = e(
                            '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                          );
                        return (
                          (this.$searchContainer = r),
                          (this.$search = r.find("input")),
                          n.prepend(r),
                          n
                        );
                      }),
                      (n.prototype.bind = function (t, n, r) {
                        var i = this,
                          o = n.id + "-results";
                        t.call(this, n, r),
                          this.$search.on("keydown", function (e) {
                            i.trigger("keypress", e),
                              (i._keyUpPrevented = e.isDefaultPrevented());
                          }),
                          this.$search.on("input", function (t) {
                            e(this).off("keyup");
                          }),
                          this.$search.on("keyup input", function (e) {
                            i.handleSearch(e);
                          }),
                          n.on("open", function () {
                            i.$search.attr("tabindex", 0),
                              i.$search.attr("aria-controls", o),
                              i.$search.trigger("focus"),
                              window.setTimeout(function () {
                                i.$search.trigger("focus");
                              }, 0);
                          }),
                          n.on("close", function () {
                            i.$search.attr("tabindex", -1),
                              i.$search.removeAttr("aria-controls"),
                              i.$search.removeAttr("aria-activedescendant"),
                              i.$search.val(""),
                              i.$search.trigger("blur");
                          }),
                          n.on("focus", function () {
                            n.isOpen() || i.$search.trigger("focus");
                          }),
                          n.on("results:all", function (e) {
                            (null != e.query.term && "" !== e.query.term) ||
                              (i.showSearch(e)
                                ? i.$searchContainer.removeClass(
                                    "select2-search--hide"
                                  )
                                : i.$searchContainer.addClass(
                                    "select2-search--hide"
                                  ));
                          }),
                          n.on("results:focus", function (e) {
                            e.data._resultId
                              ? i.$search.attr(
                                  "aria-activedescendant",
                                  e.data._resultId
                                )
                              : i.$search.removeAttr("aria-activedescendant");
                          });
                      }),
                      (n.prototype.handleSearch = function (e) {
                        if (!this._keyUpPrevented) {
                          var t = this.$search.val();
                          this.trigger("query", {
                            term: t,
                          });
                        }
                        this._keyUpPrevented = !1;
                      }),
                      (n.prototype.showSearch = function (e, t) {
                        return !0;
                      }),
                      n
                    );
                  }
                ),
                t.define("select2/dropdown/hidePlaceholder", [], function () {
                  function e(e, t, n, r) {
                    (this.placeholder = this.normalizePlaceholder(
                      n.get("placeholder")
                    )),
                      e.call(this, t, n, r);
                  }
                  return (
                    (e.prototype.append = function (e, t) {
                      (t.results = this.removePlaceholder(t.results)),
                        e.call(this, t);
                    }),
                    (e.prototype.normalizePlaceholder = function (e, t) {
                      return (
                        "string" == typeof t &&
                          (t = {
                            id: "",
                            text: t,
                          }),
                        t
                      );
                    }),
                    (e.prototype.removePlaceholder = function (e, t) {
                      for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
                        var i = t[r];
                        this.placeholder.id === i.id && n.splice(r, 1);
                      }
                      return n;
                    }),
                    e
                  );
                }),
                t.define(
                  "select2/dropdown/infiniteScroll",
                  ["jquery"],
                  function (e) {
                    function t(e, t, n, r) {
                      (this.lastParams = {}),
                        e.call(this, t, n, r),
                        (this.$loadingMore = this.createLoadingMore()),
                        (this.loading = !1);
                    }
                    return (
                      (t.prototype.append = function (e, t) {
                        this.$loadingMore.remove(),
                          (this.loading = !1),
                          e.call(this, t),
                          this.showLoadingMore(t) &&
                            (this.$results.append(this.$loadingMore),
                            this.loadMoreIfNeeded());
                      }),
                      (t.prototype.bind = function (e, t, n) {
                        var r = this;
                        e.call(this, t, n),
                          t.on("query", function (e) {
                            (r.lastParams = e), (r.loading = !0);
                          }),
                          t.on("query:append", function (e) {
                            (r.lastParams = e), (r.loading = !0);
                          }),
                          this.$results.on(
                            "scroll",
                            this.loadMoreIfNeeded.bind(this)
                          );
                      }),
                      (t.prototype.loadMoreIfNeeded = function () {
                        var t = e.contains(
                          document.documentElement,
                          this.$loadingMore[0]
                        );
                        !this.loading &&
                          t &&
                          this.$results.offset().top +
                            this.$results.outerHeight(!1) +
                            50 >=
                            this.$loadingMore.offset().top +
                              this.$loadingMore.outerHeight(!1) &&
                          this.loadMore();
                      }),
                      (t.prototype.loadMore = function () {
                        this.loading = !0;
                        var t = e.extend(
                          {},
                          {
                            page: 1,
                          },
                          this.lastParams
                        );
                        t.page++, this.trigger("query:append", t);
                      }),
                      (t.prototype.showLoadingMore = function (e, t) {
                        return t.pagination && t.pagination.more;
                      }),
                      (t.prototype.createLoadingMore = function () {
                        var t = e(
                            '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                          ),
                          n = this.options
                            .get("translations")
                            .get("loadingMore");
                        return t.html(n(this.lastParams)), t;
                      }),
                      t
                    );
                  }
                ),
                t.define(
                  "select2/dropdown/attachBody",
                  ["jquery", "../utils"],
                  function (e, t) {
                    function n(t, n, r) {
                      (this.$dropdownParent = e(
                        r.get("dropdownParent") || document.body
                      )),
                        t.call(this, n, r);
                    }
                    return (
                      (n.prototype.bind = function (e, t, n) {
                        var r = this;
                        e.call(this, t, n),
                          t.on("open", function () {
                            r._showDropdown(),
                              r._attachPositioningHandler(t),
                              r._bindContainerResultHandlers(t);
                          }),
                          t.on("close", function () {
                            r._hideDropdown(), r._detachPositioningHandler(t);
                          }),
                          this.$dropdownContainer.on("mousedown", function (e) {
                            e.stopPropagation();
                          });
                      }),
                      (n.prototype.destroy = function (e) {
                        e.call(this), this.$dropdownContainer.remove();
                      }),
                      (n.prototype.position = function (e, t, n) {
                        t.attr("class", n.attr("class")),
                          t.removeClass("select2"),
                          t.addClass("select2-container--open"),
                          t.css({
                            position: "absolute",
                            top: -999999,
                          }),
                          (this.$container = n);
                      }),
                      (n.prototype.render = function (t) {
                        var n = e("<span></span>"),
                          r = t.call(this);
                        return n.append(r), (this.$dropdownContainer = n), n;
                      }),
                      (n.prototype._hideDropdown = function (e) {
                        this.$dropdownContainer.detach();
                      }),
                      (n.prototype._bindContainerResultHandlers = function (
                        e,
                        t
                      ) {
                        if (!this._containerResultsHandlersBound) {
                          var n = this;
                          t.on("results:all", function () {
                            n._positionDropdown(), n._resizeDropdown();
                          }),
                            t.on("results:append", function () {
                              n._positionDropdown(), n._resizeDropdown();
                            }),
                            t.on("results:message", function () {
                              n._positionDropdown(), n._resizeDropdown();
                            }),
                            t.on("select", function () {
                              n._positionDropdown(), n._resizeDropdown();
                            }),
                            t.on("unselect", function () {
                              n._positionDropdown(), n._resizeDropdown();
                            }),
                            (this._containerResultsHandlersBound = !0);
                        }
                      }),
                      (n.prototype._attachPositioningHandler = function (n, r) {
                        var i = this,
                          o = "scroll.select2." + r.id,
                          s = "resize.select2." + r.id,
                          a = "orientationchange.select2." + r.id,
                          l = this.$container.parents().filter(t.hasScroll);
                        l.each(function () {
                          t.StoreData(this, "select2-scroll-position", {
                            x: e(this).scrollLeft(),
                            y: e(this).scrollTop(),
                          });
                        }),
                          l.on(o, function (n) {
                            var r = t.GetData(this, "select2-scroll-position");
                            e(this).scrollTop(r.y);
                          }),
                          e(window).on(o + " " + s + " " + a, function (e) {
                            i._positionDropdown(), i._resizeDropdown();
                          });
                      }),
                      (n.prototype._detachPositioningHandler = function (n, r) {
                        var i = "scroll.select2." + r.id,
                          o = "resize.select2." + r.id,
                          s = "orientationchange.select2." + r.id;
                        this.$container.parents().filter(t.hasScroll).off(i),
                          e(window).off(i + " " + o + " " + s);
                      }),
                      (n.prototype._positionDropdown = function () {
                        var t = e(window),
                          n = this.$dropdown.hasClass(
                            "select2-dropdown--above"
                          ),
                          r = this.$dropdown.hasClass(
                            "select2-dropdown--below"
                          ),
                          i = null,
                          o = this.$container.offset();
                        o.bottom = o.top + this.$container.outerHeight(!1);
                        var s = {
                          height: this.$container.outerHeight(!1),
                        };
                        (s.top = o.top), (s.bottom = o.top + s.height);
                        var a = {
                            height: this.$dropdown.outerHeight(!1),
                          },
                          l = {
                            top: t.scrollTop(),
                            bottom: t.scrollTop() + t.height(),
                          },
                          c = l.top < o.top - a.height,
                          u = l.bottom > o.bottom + a.height,
                          d = {
                            left: o.left,
                            top: s.bottom,
                          },
                          p = this.$dropdownParent;
                        "static" === p.css("position") &&
                          (p = p.offsetParent());
                        var h = p.offset();
                        (d.top -= h.top),
                          (d.left -= h.left),
                          n || r || (i = "below"),
                          u || !c || n
                            ? !c && u && n && (i = "below")
                            : (i = "above"),
                          ("above" == i || (n && "below" !== i)) &&
                            (d.top = s.top - h.top - a.height),
                          null != i &&
                            (this.$dropdown
                              .removeClass(
                                "select2-dropdown--below select2-dropdown--above"
                              )
                              .addClass("select2-dropdown--" + i),
                            this.$container
                              .removeClass(
                                "select2-container--below select2-container--above"
                              )
                              .addClass("select2-container--" + i)),
                          this.$dropdownContainer.css(d);
                      }),
                      (n.prototype._resizeDropdown = function () {
                        var e = {
                          width: this.$container.outerWidth(!1) + "px",
                        };
                        this.options.get("dropdownAutoWidth") &&
                          ((e.minWidth = e.width),
                          (e.position = "relative"),
                          (e.width = "auto")),
                          this.$dropdown.css(e);
                      }),
                      (n.prototype._showDropdown = function (e) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent),
                          this._positionDropdown(),
                          this._resizeDropdown();
                      }),
                      n
                    );
                  }
                ),
                t.define(
                  "select2/dropdown/minimumResultsForSearch",
                  [],
                  function () {
                    function e(t) {
                      for (var n = 0, r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.children ? (n += e(i.children)) : n++;
                      }
                      return n;
                    }
                    function t(e, t, n, r) {
                      (this.minimumResultsForSearch = n.get(
                        "minimumResultsForSearch"
                      )),
                        this.minimumResultsForSearch < 0 &&
                          (this.minimumResultsForSearch = 1 / 0),
                        e.call(this, t, n, r);
                    }
                    return (
                      (t.prototype.showSearch = function (t, n) {
                        return (
                          !(e(n.data.results) < this.minimumResultsForSearch) &&
                          t.call(this, n)
                        );
                      }),
                      t
                    );
                  }
                ),
                t.define(
                  "select2/dropdown/selectOnClose",
                  ["../utils"],
                  function (e) {
                    function t() {}
                    return (
                      (t.prototype.bind = function (e, t, n) {
                        var r = this;
                        e.call(this, t, n),
                          t.on("close", function (e) {
                            r._handleSelectOnClose(e);
                          });
                      }),
                      (t.prototype._handleSelectOnClose = function (t, n) {
                        if (n && null != n.originalSelect2Event) {
                          var r = n.originalSelect2Event;
                          if ("select" === r._type || "unselect" === r._type)
                            return;
                        }
                        var i = this.getHighlightedResults();
                        if (!(i.length < 1)) {
                          var o = e.GetData(i[0], "data");
                          (null != o.element && o.element.selected) ||
                            (null == o.element && o.selected) ||
                            this.trigger("select", {
                              data: o,
                            });
                        }
                      }),
                      t
                    );
                  }
                ),
                t.define("select2/dropdown/closeOnSelect", [], function () {
                  function e() {}
                  return (
                    (e.prototype.bind = function (e, t, n) {
                      var r = this;
                      e.call(this, t, n),
                        t.on("select", function (e) {
                          r._selectTriggered(e);
                        }),
                        t.on("unselect", function (e) {
                          r._selectTriggered(e);
                        });
                    }),
                    (e.prototype._selectTriggered = function (e, t) {
                      var n = t.originalEvent;
                      (n && (n.ctrlKey || n.metaKey)) ||
                        this.trigger("close", {
                          originalEvent: n,
                          originalSelect2Event: t,
                        });
                    }),
                    e
                  );
                }),
                t.define("select2/i18n/en", [], function () {
                  return {
                    errorLoading: function () {
                      return "The results could not be loaded.";
                    },
                    inputTooLong: function (e) {
                      var t = e.input.length - e.maximum,
                        n = "Please delete " + t + " character";
                      return 1 != t && (n += "s"), n;
                    },
                    inputTooShort: function (e) {
                      return (
                        "Please enter " +
                        (e.minimum - e.input.length) +
                        " or more characters"
                      );
                    },
                    loadingMore: function () {
                      return "Loading more results…";
                    },
                    maximumSelected: function (e) {
                      var t = "You can only select " + e.maximum + " item";
                      return 1 != e.maximum && (t += "s"), t;
                    },
                    noResults: function () {
                      return "No results found";
                    },
                    searching: function () {
                      return "Searching…";
                    },
                    removeAllItems: function () {
                      return "Remove all items";
                    },
                  };
                }),
                t.define(
                  "select2/defaults",
                  [
                    "jquery",
                    "require",
                    "./results",
                    "./selection/single",
                    "./selection/multiple",
                    "./selection/placeholder",
                    "./selection/allowClear",
                    "./selection/search",
                    "./selection/eventRelay",
                    "./utils",
                    "./translation",
                    "./diacritics",
                    "./data/select",
                    "./data/array",
                    "./data/ajax",
                    "./data/tags",
                    "./data/tokenizer",
                    "./data/minimumInputLength",
                    "./data/maximumInputLength",
                    "./data/maximumSelectionLength",
                    "./dropdown",
                    "./dropdown/search",
                    "./dropdown/hidePlaceholder",
                    "./dropdown/infiniteScroll",
                    "./dropdown/attachBody",
                    "./dropdown/minimumResultsForSearch",
                    "./dropdown/selectOnClose",
                    "./dropdown/closeOnSelect",
                    "./i18n/en",
                  ],
                  function (
                    e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    g,
                    m,
                    v,
                    y,
                    _,
                    $,
                    w,
                    b,
                    A,
                    x,
                    D,
                    S,
                    E,
                    C
                  ) {
                    function O() {
                      this.reset();
                    }
                    return (
                      (O.prototype.apply = function (u) {
                        if (
                          null ==
                          (u = e.extend(!0, {}, this.defaults, u)).dataAdapter
                        ) {
                          if (
                            (null != u.ajax
                              ? (u.dataAdapter = f)
                              : null != u.data
                              ? (u.dataAdapter = h)
                              : (u.dataAdapter = p),
                            u.minimumInputLength > 0 &&
                              (u.dataAdapter = c.Decorate(u.dataAdapter, v)),
                            u.maximumInputLength > 0 &&
                              (u.dataAdapter = c.Decorate(u.dataAdapter, y)),
                            u.maximumSelectionLength > 0 &&
                              (u.dataAdapter = c.Decorate(u.dataAdapter, _)),
                            u.tags &&
                              (u.dataAdapter = c.Decorate(u.dataAdapter, g)),
                            (null == u.tokenSeparators &&
                              null == u.tokenizer) ||
                              (u.dataAdapter = c.Decorate(u.dataAdapter, m)),
                            null != u.query)
                          ) {
                            var d = t(u.amdBase + "compat/query");
                            u.dataAdapter = c.Decorate(u.dataAdapter, d);
                          }
                          if (null != u.initSelection) {
                            var C = t(u.amdBase + "compat/initSelection");
                            u.dataAdapter = c.Decorate(u.dataAdapter, C);
                          }
                        }
                        if (
                          (null == u.resultsAdapter &&
                            ((u.resultsAdapter = n),
                            null != u.ajax &&
                              (u.resultsAdapter = c.Decorate(
                                u.resultsAdapter,
                                A
                              )),
                            null != u.placeholder &&
                              (u.resultsAdapter = c.Decorate(
                                u.resultsAdapter,
                                b
                              )),
                            u.selectOnClose &&
                              (u.resultsAdapter = c.Decorate(
                                u.resultsAdapter,
                                S
                              ))),
                          null == u.dropdownAdapter)
                        ) {
                          if (u.multiple) u.dropdownAdapter = $;
                          else {
                            var O = c.Decorate($, w);
                            u.dropdownAdapter = O;
                          }
                          if (
                            (0 !== u.minimumResultsForSearch &&
                              (u.dropdownAdapter = c.Decorate(
                                u.dropdownAdapter,
                                D
                              )),
                            u.closeOnSelect &&
                              (u.dropdownAdapter = c.Decorate(
                                u.dropdownAdapter,
                                E
                              )),
                            null != u.dropdownCssClass ||
                              null != u.dropdownCss ||
                              null != u.adaptDropdownCssClass)
                          ) {
                            var T = t(u.amdBase + "compat/dropdownCss");
                            u.dropdownAdapter = c.Decorate(
                              u.dropdownAdapter,
                              T
                            );
                          }
                          u.dropdownAdapter = c.Decorate(u.dropdownAdapter, x);
                        }
                        if (null == u.selectionAdapter) {
                          if (
                            (u.multiple
                              ? (u.selectionAdapter = i)
                              : (u.selectionAdapter = r),
                            null != u.placeholder &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                o
                              )),
                            u.allowClear &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                s
                              )),
                            u.multiple &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                a
                              )),
                            null != u.containerCssClass ||
                              null != u.containerCss ||
                              null != u.adaptContainerCssClass)
                          ) {
                            var q = t(u.amdBase + "compat/containerCss");
                            u.selectionAdapter = c.Decorate(
                              u.selectionAdapter,
                              q
                            );
                          }
                          u.selectionAdapter = c.Decorate(
                            u.selectionAdapter,
                            l
                          );
                        }
                        (u.language = this._resolveLanguage(u.language)),
                          u.language.push("en");
                        for (var L = [], I = 0; I < u.language.length; I++) {
                          var k = u.language[I];
                          -1 === L.indexOf(k) && L.push(k);
                        }
                        return (
                          (u.language = L),
                          (u.translations = this._processTranslations(
                            u.language,
                            u.debug
                          )),
                          u
                        );
                      }),
                      (O.prototype.reset = function () {
                        function t(e) {
                          function t(e) {
                            return d[e] || e;
                          }
                          return e.replace(/[^\u0000-\u007E]/g, t);
                        }
                        function n(r, i) {
                          if ("" === e.trim(r.term)) return i;
                          if (i.children && i.children.length > 0) {
                            for (
                              var o = e.extend(!0, {}, i),
                                s = i.children.length - 1;
                              s >= 0;
                              s--
                            )
                              null == n(r, i.children[s]) &&
                                o.children.splice(s, 1);
                            return o.children.length > 0 ? o : n(r, o);
                          }
                          var a = t(i.text).toUpperCase(),
                            l = t(r.term).toUpperCase();
                          return a.indexOf(l) > -1 ? i : null;
                        }
                        this.defaults = {
                          amdBase: "./",
                          amdLanguageBase: "./i18n/",
                          closeOnSelect: !0,
                          debug: !1,
                          dropdownAutoWidth: !1,
                          escapeMarkup: c.escapeMarkup,
                          language: {},
                          matcher: n,
                          minimumInputLength: 0,
                          maximumInputLength: 0,
                          maximumSelectionLength: 0,
                          minimumResultsForSearch: 0,
                          selectOnClose: !1,
                          scrollAfterSelect: !1,
                          sorter: function (e) {
                            return e;
                          },
                          templateResult: function (e) {
                            return e.text;
                          },
                          templateSelection: function (e) {
                            return e.text;
                          },
                          theme: "default",
                          width: "resolve",
                        };
                      }),
                      (O.prototype.applyFromElement = function (e, t) {
                        var n = e.language,
                          r = this.defaults.language,
                          i = t.prop("lang"),
                          o = t.closest("[lang]").prop("lang"),
                          s = Array.prototype.concat.call(
                            this._resolveLanguage(i),
                            this._resolveLanguage(n),
                            this._resolveLanguage(r),
                            this._resolveLanguage(o)
                          );
                        return (e.language = s), e;
                      }),
                      (O.prototype._resolveLanguage = function (t) {
                        if (!t) return [];
                        if (e.isEmptyObject(t)) return [];
                        if (e.isPlainObject(t)) return [t];
                        var n;
                        n = e.isArray(t) ? t : [t];
                        for (var r = [], i = 0; i < n.length; i++)
                          if (
                            (r.push(n[i]),
                            "string" == typeof n[i] && n[i].indexOf("-") > 0)
                          ) {
                            var o = n[i].split("-")[0];
                            r.push(o);
                          }
                        return r;
                      }),
                      (O.prototype._processTranslations = function (t, n) {
                        for (var r = new u(), i = 0; i < t.length; i++) {
                          var o = new u(),
                            s = t[i];
                          if ("string" == typeof s)
                            try {
                              o = u.loadPath(s);
                            } catch (e) {
                              try {
                                (s = this.defaults.amdLanguageBase + s),
                                  (o = u.loadPath(s));
                              } catch (e) {
                                n &&
                                  window.console &&
                                  console.warn &&
                                  console.warn(
                                    'Select2: The language file for "' +
                                      s +
                                      '" could not be automatically loaded. A fallback will be used instead.'
                                  );
                              }
                            }
                          else o = e.isPlainObject(s) ? new u(s) : s;
                          r.extend(o);
                        }
                        return r;
                      }),
                      (O.prototype.set = function (t, n) {
                        var r = {};
                        r[e.camelCase(t)] = n;
                        var i = c._convertData(r);
                        e.extend(!0, this.defaults, i);
                      }),
                      new O()
                    );
                  }
                ),
                t.define(
                  "select2/options",
                  ["require", "jquery", "./defaults", "./utils"],
                  function (e, t, n, r) {
                    function i(t, i) {
                      if (
                        ((this.options = t),
                        null != i && this.fromElement(i),
                        null != i &&
                          (this.options = n.applyFromElement(this.options, i)),
                        (this.options = n.apply(this.options)),
                        i && i.is("input"))
                      ) {
                        var o = e(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = r.Decorate(
                          this.options.dataAdapter,
                          o
                        );
                      }
                    }
                    return (
                      (i.prototype.fromElement = function (e) {
                        var n = ["select2"];
                        null == this.options.multiple &&
                          (this.options.multiple = e.prop("multiple")),
                          null == this.options.disabled &&
                            (this.options.disabled = e.prop("disabled")),
                          null == this.options.dir &&
                            (e.prop("dir")
                              ? (this.options.dir = e.prop("dir"))
                              : e.closest("[dir]").prop("dir")
                              ? (this.options.dir = e
                                  .closest("[dir]")
                                  .prop("dir"))
                              : (this.options.dir = "ltr")),
                          e.prop("disabled", this.options.disabled),
                          e.prop("multiple", this.options.multiple),
                          r.GetData(e[0], "select2Tags") &&
                            (this.options.debug &&
                              window.console &&
                              console.warn &&
                              console.warn(
                                'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                              ),
                            r.StoreData(
                              e[0],
                              "data",
                              r.GetData(e[0], "select2Tags")
                            ),
                            r.StoreData(e[0], "tags", !0)),
                          r.GetData(e[0], "ajaxUrl") &&
                            (this.options.debug &&
                              window.console &&
                              console.warn &&
                              console.warn(
                                "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                              ),
                            e.attr("ajax--url", r.GetData(e[0], "ajaxUrl")),
                            r.StoreData(
                              e[0],
                              "ajax-Url",
                              r.GetData(e[0], "ajaxUrl")
                            ));
                        var i = {};
                        function o(e, t) {
                          return t.toUpperCase();
                        }
                        for (var s = 0; s < e[0].attributes.length; s++) {
                          var a = e[0].attributes[s].name,
                            l = "data-";
                          if (a.substr(0, l.length) == l) {
                            var c = a.substring(l.length),
                              u = r.GetData(e[0], c);
                            i[c.replace(/-([a-z])/g, o)] = u;
                          }
                        }
                        t.fn.jquery &&
                          "1." == t.fn.jquery.substr(0, 2) &&
                          e[0].dataset &&
                          (i = t.extend(!0, {}, e[0].dataset, i));
                        var d = t.extend(!0, {}, r.GetData(e[0]), i);
                        for (var p in (d = r._convertData(d)))
                          t.inArray(p, n) > -1 ||
                            (t.isPlainObject(this.options[p])
                              ? t.extend(this.options[p], d[p])
                              : (this.options[p] = d[p]));
                        return this;
                      }),
                      (i.prototype.get = function (e) {
                        return this.options[e];
                      }),
                      (i.prototype.set = function (e, t) {
                        this.options[e] = t;
                      }),
                      i
                    );
                  }
                ),
                t.define(
                  "select2/core",
                  ["jquery", "./options", "./utils", "./keys"],
                  function (e, t, n, r) {
                    var i = function (e, r) {
                      null != n.GetData(e[0], "select2") &&
                        n.GetData(e[0], "select2").destroy(),
                        (this.$element = e),
                        (this.id = this._generateId(e)),
                        (r = r || {}),
                        (this.options = new t(r, e)),
                        i.__super__.constructor.call(this);
                      var o = e.attr("tabindex") || 0;
                      n.StoreData(e[0], "old-tabindex", o),
                        e.attr("tabindex", "-1");
                      var s = this.options.get("dataAdapter");
                      this.dataAdapter = new s(e, this.options);
                      var a = this.render();
                      this._placeContainer(a);
                      var l = this.options.get("selectionAdapter");
                      (this.selection = new l(e, this.options)),
                        (this.$selection = this.selection.render()),
                        this.selection.position(this.$selection, a);
                      var c = this.options.get("dropdownAdapter");
                      (this.dropdown = new c(e, this.options)),
                        (this.$dropdown = this.dropdown.render()),
                        this.dropdown.position(this.$dropdown, a);
                      var u = this.options.get("resultsAdapter");
                      (this.results = new u(e, this.options, this.dataAdapter)),
                        (this.$results = this.results.render()),
                        this.results.position(this.$results, this.$dropdown);
                      var d = this;
                      this._bindAdapters(),
                        this._registerDomEvents(),
                        this._registerDataEvents(),
                        this._registerSelectionEvents(),
                        this._registerDropdownEvents(),
                        this._registerResultsEvents(),
                        this._registerEvents(),
                        this.dataAdapter.current(function (e) {
                          d.trigger("selection:update", {
                            data: e,
                          });
                        }),
                        e.addClass("select2-hidden-accessible"),
                        e.attr("aria-hidden", "true"),
                        this._syncAttributes(),
                        n.StoreData(e[0], "select2", this),
                        e.data("select2", this);
                    };
                    return (
                      n.Extend(i, n.Observable),
                      (i.prototype._generateId = function (e) {
                        return (
                          "select2-" +
                          (null != e.attr("id")
                            ? e.attr("id")
                            : null != e.attr("name")
                            ? e.attr("name") + "-" + n.generateChars(2)
                            : n.generateChars(4)
                          ).replace(/(:|\.|\[|\]|,)/g, "")
                        );
                      }),
                      (i.prototype._placeContainer = function (e) {
                        e.insertAfter(this.$element);
                        var t = this._resolveWidth(
                          this.$element,
                          this.options.get("width")
                        );
                        null != t && e.css("width", t);
                      }),
                      (i.prototype._resolveWidth = function (e, t) {
                        var n =
                          /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == t) {
                          var r = this._resolveWidth(e, "style");
                          return null != r
                            ? r
                            : this._resolveWidth(e, "element");
                        }
                        if ("element" == t) {
                          var i = e.outerWidth(!1);
                          return i <= 0 ? "auto" : i + "px";
                        }
                        if ("style" == t) {
                          var o = e.attr("style");
                          if ("string" != typeof o) return null;
                          for (
                            var s = o.split(";"), a = 0, l = s.length;
                            a < l;
                            a += 1
                          ) {
                            var c = s[a].replace(/\s/g, "").match(n);
                            if (null !== c && c.length >= 1) return c[1];
                          }
                          return null;
                        }
                        return "computedstyle" == t
                          ? window.getComputedStyle(e[0]).width
                          : t;
                      }),
                      (i.prototype._bindAdapters = function () {
                        this.dataAdapter.bind(this, this.$container),
                          this.selection.bind(this, this.$container),
                          this.dropdown.bind(this, this.$container),
                          this.results.bind(this, this.$container);
                      }),
                      (i.prototype._registerDomEvents = function () {
                        var t = this;
                        this.$element.on("change.select2", function () {
                          t.dataAdapter.current(function (e) {
                            t.trigger("selection:update", {
                              data: e,
                            });
                          });
                        }),
                          this.$element.on("focus.select2", function (e) {
                            t.trigger("focus", e);
                          }),
                          (this._syncA = n.bind(this._syncAttributes, this)),
                          (this._syncS = n.bind(this._syncSubtree, this)),
                          this.$element[0].attachEvent &&
                            this.$element[0].attachEvent(
                              "onpropertychange",
                              this._syncA
                            );
                        var r =
                          window.MutationObserver ||
                          window.WebKitMutationObserver ||
                          window.MozMutationObserver;
                        null != r
                          ? ((this._observer = new r(function (n) {
                              e.each(n, t._syncA), e.each(n, t._syncS);
                            })),
                            this._observer.observe(this.$element[0], {
                              attributes: !0,
                              childList: !0,
                              subtree: !1,
                            }))
                          : this.$element[0].addEventListener &&
                            (this.$element[0].addEventListener(
                              "DOMAttrModified",
                              t._syncA,
                              !1
                            ),
                            this.$element[0].addEventListener(
                              "DOMNodeInserted",
                              t._syncS,
                              !1
                            ),
                            this.$element[0].addEventListener(
                              "DOMNodeRemoved",
                              t._syncS,
                              !1
                            ));
                      }),
                      (i.prototype._registerDataEvents = function () {
                        var e = this;
                        this.dataAdapter.on("*", function (t, n) {
                          e.trigger(t, n);
                        });
                      }),
                      (i.prototype._registerSelectionEvents = function () {
                        var t = this,
                          n = ["toggle", "focus"];
                        this.selection.on("toggle", function () {
                          t.toggleDropdown();
                        }),
                          this.selection.on("focus", function (e) {
                            t.focus(e);
                          }),
                          this.selection.on("*", function (r, i) {
                            -1 === e.inArray(r, n) && t.trigger(r, i);
                          });
                      }),
                      (i.prototype._registerDropdownEvents = function () {
                        var e = this;
                        this.dropdown.on("*", function (t, n) {
                          e.trigger(t, n);
                        });
                      }),
                      (i.prototype._registerResultsEvents = function () {
                        var e = this;
                        this.results.on("*", function (t, n) {
                          e.trigger(t, n);
                        });
                      }),
                      (i.prototype._registerEvents = function () {
                        var e = this;
                        this.on("open", function () {
                          e.$container.addClass("select2-container--open");
                        }),
                          this.on("close", function () {
                            e.$container.removeClass("select2-container--open");
                          }),
                          this.on("enable", function () {
                            e.$container.removeClass(
                              "select2-container--disabled"
                            );
                          }),
                          this.on("disable", function () {
                            e.$container.addClass(
                              "select2-container--disabled"
                            );
                          }),
                          this.on("blur", function () {
                            e.$container.removeClass(
                              "select2-container--focus"
                            );
                          }),
                          this.on("query", function (t) {
                            e.isOpen() || e.trigger("open", {}),
                              this.dataAdapter.query(t, function (n) {
                                e.trigger("results:all", {
                                  data: n,
                                  query: t,
                                });
                              });
                          }),
                          this.on("query:append", function (t) {
                            this.dataAdapter.query(t, function (n) {
                              e.trigger("results:append", {
                                data: n,
                                query: t,
                              });
                            });
                          }),
                          this.on("keypress", function (t) {
                            var n = t.which;
                            e.isOpen()
                              ? n === r.ESC ||
                                n === r.TAB ||
                                (n === r.UP && t.altKey)
                                ? (e.close(), t.preventDefault())
                                : n === r.ENTER
                                ? (e.trigger("results:select", {}),
                                  t.preventDefault())
                                : n === r.SPACE && t.ctrlKey
                                ? (e.trigger("results:toggle", {}),
                                  t.preventDefault())
                                : n === r.UP
                                ? (e.trigger("results:previous", {}),
                                  t.preventDefault())
                                : n === r.DOWN &&
                                  (e.trigger("results:next", {}),
                                  t.preventDefault())
                              : (n === r.ENTER ||
                                  n === r.SPACE ||
                                  (n === r.DOWN && t.altKey)) &&
                                (e.open(), t.preventDefault());
                          });
                      }),
                      (i.prototype._syncAttributes = function () {
                        this.options.set(
                          "disabled",
                          this.$element.prop("disabled")
                        ),
                          this.options.get("disabled")
                            ? (this.isOpen() && this.close(),
                              this.trigger("disable", {}))
                            : this.trigger("enable", {});
                      }),
                      (i.prototype._syncSubtree = function (e, t) {
                        var n = !1,
                          r = this;
                        if (
                          !e ||
                          !e.target ||
                          "OPTION" === e.target.nodeName ||
                          "OPTGROUP" === e.target.nodeName
                        ) {
                          if (t)
                            if (t.addedNodes && t.addedNodes.length > 0)
                              for (var i = 0; i < t.addedNodes.length; i++)
                                t.addedNodes[i].selected && (n = !0);
                            else
                              t.removedNodes &&
                                t.removedNodes.length > 0 &&
                                (n = !0);
                          else n = !0;
                          n &&
                            this.dataAdapter.current(function (e) {
                              r.trigger("selection:update", {
                                data: e,
                              });
                            });
                        }
                      }),
                      (i.prototype.trigger = function (e, t) {
                        var n = i.__super__.trigger,
                          r = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting",
                            clear: "clearing",
                          };
                        if ((void 0 === t && (t = {}), e in r)) {
                          var o = r[e],
                            s = {
                              prevented: !1,
                              name: e,
                              args: t,
                            };
                          if ((n.call(this, o, s), s.prevented))
                            return void (t.prevented = !0);
                        }
                        n.call(this, e, t);
                      }),
                      (i.prototype.toggleDropdown = function () {
                        this.options.get("disabled") ||
                          (this.isOpen() ? this.close() : this.open());
                      }),
                      (i.prototype.open = function () {
                        this.isOpen() || this.trigger("query", {});
                      }),
                      (i.prototype.close = function () {
                        this.isOpen() && this.trigger("close", {});
                      }),
                      (i.prototype.isOpen = function () {
                        return this.$container.hasClass(
                          "select2-container--open"
                        );
                      }),
                      (i.prototype.hasFocus = function () {
                        return this.$container.hasClass(
                          "select2-container--focus"
                        );
                      }),
                      (i.prototype.focus = function (e) {
                        this.hasFocus() ||
                          (this.$container.addClass("select2-container--focus"),
                          this.trigger("focus", {}));
                      }),
                      (i.prototype.enable = function (e) {
                        this.options.get("debug") &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                          ),
                          (null != e && 0 !== e.length) || (e = [!0]);
                        var t = !e[0];
                        this.$element.prop("disabled", t);
                      }),
                      (i.prototype.data = function () {
                        this.options.get("debug") &&
                          arguments.length > 0 &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                          );
                        var e = [];
                        return (
                          this.dataAdapter.current(function (t) {
                            e = t;
                          }),
                          e
                        );
                      }),
                      (i.prototype.val = function (t) {
                        if (
                          (this.options.get("debug") &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                            ),
                          null == t || 0 === t.length)
                        )
                          return this.$element.val();
                        var n = t[0];
                        e.isArray(n) &&
                          (n = e.map(n, function (e) {
                            return e.toString();
                          })),
                          this.$element.val(n).trigger("change");
                      }),
                      (i.prototype.destroy = function () {
                        this.$container.remove(),
                          this.$element[0].detachEvent &&
                            this.$element[0].detachEvent(
                              "onpropertychange",
                              this._syncA
                            ),
                          null != this._observer
                            ? (this._observer.disconnect(),
                              (this._observer = null))
                            : this.$element[0].removeEventListener &&
                              (this.$element[0].removeEventListener(
                                "DOMAttrModified",
                                this._syncA,
                                !1
                              ),
                              this.$element[0].removeEventListener(
                                "DOMNodeInserted",
                                this._syncS,
                                !1
                              ),
                              this.$element[0].removeEventListener(
                                "DOMNodeRemoved",
                                this._syncS,
                                !1
                              )),
                          (this._syncA = null),
                          (this._syncS = null),
                          this.$element.off(".select2"),
                          this.$element.attr(
                            "tabindex",
                            n.GetData(this.$element[0], "old-tabindex")
                          ),
                          this.$element.removeClass(
                            "select2-hidden-accessible"
                          ),
                          this.$element.attr("aria-hidden", "false"),
                          n.RemoveData(this.$element[0]),
                          this.$element.removeData("select2"),
                          this.dataAdapter.destroy(),
                          this.selection.destroy(),
                          this.dropdown.destroy(),
                          this.results.destroy(),
                          (this.dataAdapter = null),
                          (this.selection = null),
                          (this.dropdown = null),
                          (this.results = null);
                      }),
                      (i.prototype.render = function () {
                        var t = e(
                          '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                        );
                        return (
                          t.attr("dir", this.options.get("dir")),
                          (this.$container = t),
                          this.$container.addClass(
                            "select2-container--" + this.options.get("theme")
                          ),
                          n.StoreData(t[0], "element", this.$element),
                          t
                        );
                      }),
                      i
                    );
                  }
                ),
                t.define("jquery-mousewheel", ["jquery"], function (e) {
                  return e;
                }),
                t.define(
                  "jquery.select2",
                  [
                    "jquery",
                    "jquery-mousewheel",
                    "./select2/core",
                    "./select2/defaults",
                    "./select2/utils",
                  ],
                  function (e, t, n, r, i) {
                    if (null == e.fn.select2) {
                      var o = ["open", "close", "destroy"];
                      e.fn.select2 = function (t) {
                        if ("object" == typeof (t = t || {}))
                          return (
                            this.each(function () {
                              var r = e.extend(!0, {}, t);
                              new n(e(this), r);
                            }),
                            this
                          );
                        if ("string" == typeof t) {
                          var r,
                            s = Array.prototype.slice.call(arguments, 1);
                          return (
                            this.each(function () {
                              var e = i.GetData(this, "select2");
                              null == e &&
                                window.console &&
                                console.error &&
                                console.error(
                                  "The select2('" +
                                    t +
                                    "') method was called on an element that is not using Select2."
                                ),
                                (r = e[t].apply(e, s));
                            }),
                            e.inArray(t, o) > -1 ? this : r
                          );
                        }
                        throw new Error("Invalid arguments for Select2: " + t);
                      };
                    }
                    return (
                      null == e.fn.select2.defaults &&
                        (e.fn.select2.defaults = r),
                      n
                    );
                  }
                ),
                {
                  define: t.define,
                  require: t.require,
                }
              );
            })(),
            n = t.require("jquery.select2");
          return (e.fn.select2.amd = t), n;
        }),
        void 0 === (o = "function" == typeof r ? r.apply(t, i) : r) ||
          (e.exports = o);
    },
  },
]);
