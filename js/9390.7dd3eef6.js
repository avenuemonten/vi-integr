(self.webpackChunk = self.webpackChunk || []).push([
  [9390],
  {
    893231: function (e, t, i) {
      var n,
        o = i(619755);
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var n,
                o,
                a,
                l,
                s = [],
                r = !0,
                c = !1;
              try {
                if (((a = (i = i.call(e)).next), 0 === t)) {
                  if (Object(i) !== i) return;
                  r = !1;
                } else
                  for (
                    ;
                    !(r = (n = a.call(i)).done) &&
                    (s.push(n.value), s.length !== t);
                    r = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !r &&
                    null != i.return &&
                    ((l = i.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return l(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return l(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      ((n = o).fn.lendingCalculator = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          i = n(this),
          o = (n.fn.lendingCalculator.options = n.extend(
            {},
            n.fn.lendingCalculator.options,
            e
          ));
        function l(e) {
          if (null == e) return "";
          var t = !1;
          return (
            e.length > 0 && "-" == e[0] && (t = !0),
            (e = (e = e
              .replace(/[^\d,.]*/g, "")
              .replace(/([,.])[,.]+/g, "$1")
              .replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, "$1")).replace(
              ",",
              "."
            )),
            (e = t ? "-" + e : e)
          );
        }
        function s(e, t) {
          var i = {};
          e.forEach(function (e) {
            var t = e.input,
              n = parseFloat(r(t));
            (isNaN(n) || "" == n) && (n = null != e.value ? e.value : ""),
              (i[e.code] = n);
          }),
            (i = n.fn.lendingCalculator.paramVals(i)),
            t.forEach(function (e) {
              for (
                var t = "",
                  o = e.math_round || 0,
                  l = e.formula,
                  s = 0,
                  r = Object.entries(i);
                s < r.length;
                s++
              ) {
                var d = a(r[s], 2),
                  h = d[0],
                  u = d[1];
                l = l.replaceAll("{" + h + "}", "(" + u + ")");
              }
              try {
                t = window.eval(l);
              } catch (e) {
                t = NaN;
              }
              (e.value = isNaN(t)
                ? ""
                : n.fn.lendingCalculator.formatingNumber(t.toFixed(o))),
                c(
                  (e = n.fn.lendingCalculator.endCalculation(e, i)).output,
                  e.value
                );
            });
        }
        function r(e) {
          var t, i;
          if (
            (["SELECT", "INPUT", "TEXTAREA"].includes(n(e).prop("nodeName"))
              ? "string" == typeof (t = n(e).val()) &&
                t.length > 30 &&
                (t = t.substring(0, 30))
              : (t = n(e).text()),
            Array.isArray(t))
          )
            0 != t.length &&
              ((i = 0),
              t.forEach(function (e) {
                i += parseFloat(l(e));
              }));
          else {
            var o = n(e).attr("min"),
              a = n(e).attr("max");
            (o = null != o ? parseFloat(l(o)) : void 0),
              (a = null != a ? parseFloat(l(a)) : void 0),
              "" != t &&
                ((i = l(t)),
                null != a && "-" != i && parseFloat(i) > a
                  ? (i = a)
                  : null != o && "-" != i && parseFloat(i) < o && (i = o));
          }
          return i;
        }
        function c(e, t) {
          ["SELECT", "INPUT", "TEXTAREA"].includes(n(e).prop("nodeName"))
            ? n(e).val(t)
            : n(e).text(t);
        }
        null != o.id &&
          (icHelper.loaderSpin(i),
          n
            .ajax({
              method: "GET",
              url: Routing.generate("lending_calculator_data", {
                id: o.id,
              }),
              dataType: "json",
            })
            .done(function (e) {
              0 != (e = JSON.parse(e)).code
                ? icHelper.showModalAlert(e.message)
                : (function (e) {
                    var o = n(e.calc_template),
                      a = e.param || [],
                      l = e.result || [];
                    n(o)
                      .find("[data-param]")
                      .each(function (e, t) {
                        l.forEach(function (e) {
                          n(t).data("param") == e.code &&
                            (n(t).addClass("param_result"), (e.output = t));
                        }),
                          a.forEach(function (e) {
                            n(t).data("param") == e.code &&
                              (["INPUT", "TEXTAREA"].includes(
                                n(t).prop("nodeName")
                              )
                                ? n(t).on("input", function (e) {
                                    var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1],
                                      i = r(this);
                                    c(
                                      this,
                                      n.fn.lendingCalculator.formatingNumber(i)
                                    ),
                                      t || s(a, l);
                                  })
                                : n(t).on("change", function (e) {
                                    (arguments.length > 1 &&
                                      void 0 !== arguments[1] &&
                                      arguments[1]) ||
                                      s(a, l);
                                  }),
                              (e.input = t));
                          });
                      }),
                      n(i).on("callCalculation", function (e) {
                        a.forEach(function (e) {
                          n(e.input).trigger("input", [!0]),
                            n(e.input).trigger("change", [!0]);
                        }),
                          s(a, l);
                      }),
                      n(i).html(o),
                      "function" == typeof t &&
                        ((e.param = a), (e.result = l), t.call(this, i, e));
                  })(e.data);
            })
            .fail(function (e, t, i) {
              icHelper.showModalAlert("Произошла ошибка загрузки калькулятора");
            })
            .always(function () {
              icHelper.removeLoader();
            }));
      }),
        (n.fn.lendingCalculator.options = {
          id: null,
          delimiter: ",",
        }),
        (n.fn.lendingCalculator.paramVals = function (e) {
          return e;
        }),
        (n.fn.lendingCalculator.endCalculation = function (e, t) {
          return e;
        }),
        (n.fn.lendingCalculator.formatingNumber = function (e) {
          var t = n.fn.lendingCalculator.options.delimiter;
          if ("-" != e && isNaN(e)) return "";
          (e = (e += "").replace(".", t)),
            (x = e.split(t)),
            (x1 = x[0]),
            (x2 = x.length > 1 ? t + x[1] : "");
          for (var i = /(\d+)(\d{3})/; i.test(x1); )
            x1 = x1.replace(i, "$1 $2");
          return x1 + x2;
        });
    },
    868490: function (e, t, i) {
      var n = i(619755);
      n(function () {
        (n.fn.measureServiceModal = function (e) {
          var t = n(this),
            i = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 16,
                t = "";
              for (; t.length < e; )
                t += Math.random().toString(36).substring(2);
              return "." + t.substring(0, e);
            })();
          n.extend(n.fn.measureServiceModal.params, e, {
            modalSelector: i,
          }),
            n.fn.measureServiceModal.params.measure &&
              (!(function () {
                var e = n(n.fn.measureServiceModal.modalTemplate),
                  t = n.fn.measureServiceModal.params;
                e.addClass(t.modalSelector.slice(1)),
                  t.hideTitle
                    ? e.find(".modal-header").remove()
                    : t.modalTitle && e.find(".modal-title").text(t.modalTitle);
                n("body").append(e);
              })(),
              t.on("click", function (e) {
                e.preventDefault();
                var t = n.fn.measureServiceModal.params,
                  i = n(document).find(t.modalSelector);
                icHelper.loaderSpin(),
                  n
                    .ajax({
                      method: "POST",
                      url: Routing.generate("measureServiceModal", {
                        guid: t.measure,
                      }),
                      data: {
                        appendCss: t.pathStyleMeasure,
                      },
                    })
                    .done(function (e) {
                      icHelper.removeLoader(),
                        i.find(".measure-content").html(e),
                        i.modal("show");
                    })
                    .fail(function (e, t, i) {
                      icHelper.showModalAlert(
                        "Произошла ошибка загрузки формы заявки"
                      ),
                        icHelper.removeLoader();
                    });
              }));
        }),
          (n.fn.measureServiceModal.params = {
            measure: "",
            modalSelector: "",
            hideTitle: !1,
            modalTitle: "Заявка на получение поддержки",
            pathStyleMeasure: "/common/measure_modal.css",
          }),
          (n.fn.measureServiceModal.modalTemplate =
            '<div class="modal fade modal800 measure-service-modal" role="dialog" aria-labelledby="exampleModalLabel" aria-modal="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-close-body" data-dismiss="modal"><i class="material-icons">close</i></div><div class="modal-header"><h5 class="modal-title"></h5></div><div class="modal-body"><div class="measure-content"></div><div class="modal-bottom"><div class="modal_text_bottom2" id="bootomInforErr"><span class="fwb">Внимание:</span> при возникновении технических неполадок, просьба сообщить об ошибке в службу поддержки на электронную почту <a href="mailto:support@i.moscow">support@i.moscow</a>. Пожалуйста, прикрепите к сообщению фото и видеозапись экрана, а также ИНН компании для увеличения скорости обработки запроса.</div></div></div></div></div></div>');
      });
    },
    763279: function (e, t, i) {
      "use strict";
      i.d(t, {
        DS: function () {
          return P;
        },
        cv: function () {
          return H;
        },
      });
      var n,
        o = "3.7.2",
        a = o,
        l = "function" == typeof atob,
        s = "function" == typeof btoa,
        r = "function" == typeof Buffer,
        c = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
        d = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
        h = Array.prototype.slice.call(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        ),
        u =
          ((n = {}),
          h.forEach(function (e, t) {
            return (n[e] = t);
          }),
          n),
        p =
          /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
        f = String.fromCharCode.bind(String),
        m =
          "function" == typeof Uint8Array.from
            ? Uint8Array.from.bind(Uint8Array)
            : function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function (e) {
                        return e;
                      };
                return new Uint8Array(Array.prototype.slice.call(e, 0).map(t));
              },
        v = function (e) {
          return e.replace(/=/g, "").replace(/[+\/]/g, function (e) {
            return "+" == e ? "-" : "_";
          });
        },
        _ = function (e) {
          return e.replace(/[^A-Za-z0-9\+\/]/g, "");
        },
        g = function (e) {
          for (
            var t, i, n, o, a = "", l = e.length % 3, s = 0;
            s < e.length;

          ) {
            if (
              (i = e.charCodeAt(s++)) > 255 ||
              (n = e.charCodeAt(s++)) > 255 ||
              (o = e.charCodeAt(s++)) > 255
            )
              throw new TypeError("invalid character found");
            a +=
              h[((t = (i << 16) | (n << 8) | o) >> 18) & 63] +
              h[(t >> 12) & 63] +
              h[(t >> 6) & 63] +
              h[63 & t];
          }
          return l ? a.slice(0, l - 3) + "===".substring(l) : a;
        },
        b = s
          ? function (e) {
              return btoa(e);
            }
          : r
          ? function (e) {
              return Buffer.from(e, "binary").toString("base64");
            }
          : g,
        w = r
          ? function (e) {
              return Buffer.from(e).toString("base64");
            }
          : function (e) {
              for (var t = [], i = 0, n = e.length; i < n; i += 4096)
                t.push(f.apply(null, e.subarray(i, i + 4096)));
              return b(t.join(""));
            },
        k = function (e) {
          return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            ? v(w(e))
            : w(e);
        },
        y = function (e) {
          if (e.length < 2)
            return (t = e.charCodeAt(0)) < 128
              ? e
              : t < 2048
              ? f(192 | (t >>> 6)) + f(128 | (63 & t))
              : f(224 | ((t >>> 12) & 15)) +
                f(128 | ((t >>> 6) & 63)) +
                f(128 | (63 & t));
          var t =
            65536 +
            1024 * (e.charCodeAt(0) - 55296) +
            (e.charCodeAt(1) - 56320);
          return (
            f(240 | ((t >>> 18) & 7)) +
            f(128 | ((t >>> 12) & 63)) +
            f(128 | ((t >>> 6) & 63)) +
            f(128 | (63 & t))
          );
        },
        C = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        x = function (e) {
          return e.replace(C, y);
        },
        S = r
          ? function (e) {
              return Buffer.from(e, "utf8").toString("base64");
            }
          : d
          ? function (e) {
              return w(d.encode(e));
            }
          : function (e) {
              return b(x(e));
            },
        H = function (e) {
          return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            ? v(S(e))
            : S(e);
        },
        j = function (e) {
          return H(e, !0);
        },
        T =
          /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
        A = function (e) {
          switch (e.length) {
            case 4:
              var t =
                (((7 & e.charCodeAt(0)) << 18) |
                  ((63 & e.charCodeAt(1)) << 12) |
                  ((63 & e.charCodeAt(2)) << 6) |
                  (63 & e.charCodeAt(3))) -
                65536;
              return f(55296 + (t >>> 10)) + f(56320 + (1023 & t));
            case 3:
              return f(
                ((15 & e.charCodeAt(0)) << 12) |
                  ((63 & e.charCodeAt(1)) << 6) |
                  (63 & e.charCodeAt(2))
              );
            default:
              return f(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
          }
        },
        M = function (e) {
          return e.replace(T, A);
        },
        E = function (e) {
          if (((e = e.replace(/\s+/g, "")), !p.test(e)))
            throw new TypeError("malformed base64.");
          e += "==".slice(2 - (3 & e.length));
          for (var t, i, n, o = "", a = 0; a < e.length; )
            (t =
              (u[e.charAt(a++)] << 18) |
              (u[e.charAt(a++)] << 12) |
              ((i = u[e.charAt(a++)]) << 6) |
              (n = u[e.charAt(a++)])),
              (o +=
                64 === i
                  ? f((t >> 16) & 255)
                  : 64 === n
                  ? f((t >> 16) & 255, (t >> 8) & 255)
                  : f((t >> 16) & 255, (t >> 8) & 255, 255 & t));
          return o;
        },
        L = l
          ? function (e) {
              return atob(_(e));
            }
          : r
          ? function (e) {
              return Buffer.from(e, "base64").toString("binary");
            }
          : E,
        O = r
          ? function (e) {
              return m(Buffer.from(e, "base64"));
            }
          : function (e) {
              return m(L(e), function (e) {
                return e.charCodeAt(0);
              });
            },
        R = function (e) {
          return O(F(e));
        },
        z = r
          ? function (e) {
              return Buffer.from(e, "base64").toString("utf8");
            }
          : c
          ? function (e) {
              return c.decode(O(e));
            }
          : function (e) {
              return M(L(e));
            },
        F = function (e) {
          return _(
            e.replace(/[-_]/g, function (e) {
              return "-" == e ? "+" : "/";
            })
          );
        },
        B = function (e) {
          return z(F(e));
        },
        D = function (e) {
          return {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          };
        },
        N = function () {
          var e = function (e, t) {
            return Object.defineProperty(String.prototype, e, D(t));
          };
          e("fromBase64", function () {
            return B(this);
          }),
            e("toBase64", function (e) {
              return H(this, e);
            }),
            e("toBase64URI", function () {
              return H(this, !0);
            }),
            e("toBase64URL", function () {
              return H(this, !0);
            }),
            e("toUint8Array", function () {
              return R(this);
            });
        },
        I = function () {
          var e = function (e, t) {
            return Object.defineProperty(Uint8Array.prototype, e, D(t));
          };
          e("toBase64", function (e) {
            return k(this, e);
          }),
            e("toBase64URI", function () {
              return k(this, !0);
            }),
            e("toBase64URL", function () {
              return k(this, !0);
            });
        },
        P = {
          version: o,
          VERSION: a,
          atob: L,
          atobPolyfill: E,
          btoa: b,
          btoaPolyfill: g,
          fromBase64: B,
          toBase64: H,
          encode: H,
          encodeURI: j,
          encodeURL: j,
          utob: x,
          btou: M,
          decode: B,
          isValid: function (e) {
            if ("string" != typeof e) return !1;
            var t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
            return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
          },
          fromUint8Array: k,
          toUint8Array: R,
          extendString: N,
          extendUint8Array: I,
          extendBuiltins: function () {
            N(), I();
          },
        };
    },
    239390: function (e, t, i) {
      "use strict";
      i.r(t);
      var n,
        o,
        a = i(168794),
        l = i(763279),
        s = i(619755),
        r = i(619755),
        c = i(42306),
        d = i(211248);
      function h(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var n,
                o,
                a,
                l,
                s = [],
                r = !0,
                c = !1;
              try {
                if (((a = (i = i.call(e)).next), 0 === t)) {
                  if (Object(i) !== i) return;
                  r = !1;
                } else
                  for (
                    ;
                    !(r = (n = a.call(i)).done) &&
                    (s.push(n.value), s.length !== t);
                    r = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !r &&
                    null != i.return &&
                    ((l = i.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          p(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return f(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          p(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        if (e) {
          if ("string" == typeof e) return f(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i
              ? Array.from(e)
              : "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? f(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function m(e) {
        return (
          (m =
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
          m(e)
        );
      }
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = s(window);
        if (s('.tab[data-attrclass=".indexFiz"]').hasClass("active"))
          if (e) {
            var i = s.parseJSON(
                s(".indexFiz .button-info-" + e + " .main-kv-info")
                  .data()
                  .sizes.replaceAll("'", '"')
              ),
              n = s("#main-kv-big-id .div_fon");
            if (t.width() >= 768 && t.width() <= 991)
              (o = i.tablet).height || (o.height = i.desktop.height),
                s(n).attr(
                  "style",
                  "right: " +
                    o.imageRight +
                    "; top: " +
                    o.imageBottom +
                    "; height: " +
                    o.imageSize +
                    ";"
                );
            else if (t.width() < 768) {
              (o = i.mobile).height || (o.height = i.desktop.height),
                s(n).attr(
                  "style",
                  "left: " +
                    o.imageRight +
                    "; top: " +
                    o.imageBottom +
                    "; height: " +
                    o.imageSize +
                    ";"
                );
            } else if (t.width() > 991) {
              var o = i.desktop;
              s(n).attr(
                "style",
                "left: " +
                  o.imageRight +
                  "; bottom: " +
                  o.imageBottom +
                  "; height: " +
                  o.imageSize +
                  ";"
              );
            }
          } else
            s(".indexFiz .main-kv-info").each(function () {
              var e = s(this).data().index,
                i = s.parseJSON(
                  s(".indexFiz .button-info-" + e + " .main-kv-info")
                    .data()
                    .sizes.replaceAll("'", '"')
                ),
                n = s(".indexFiz .button-info-" + e + " .main-kv-mid .kv_icon");
              if (t.width() >= 768 && t.width() <= 991)
                (o = i.tablet).height || (o.height = i.desktop.height),
                  s(n).attr(
                    "style",
                    "right: " +
                      o.imageRight +
                      "; top: " +
                      o.imageBottom +
                      "; height: " +
                      o.imageSize +
                      ";"
                  );
              else if (t.width() < 768) {
                (o = i.mobile).height || (o.height = i.desktop.height),
                  s(n).attr(
                    "style",
                    "left: " +
                      o.imageRight +
                      "; top: " +
                      o.imageBottom +
                      "; height: " +
                      o.imageSize +
                      ";"
                  );
              } else if (t.width() > 991) {
                var o = i.desktop;
                s(n).attr(
                  "style",
                  "left: " +
                    o.imageRight +
                    "; bottom: " +
                    o.imageBottom +
                    "; height: " +
                    o.imageSize +
                    ";"
                );
              }
            });
        else if (s(".main-kv-big").length && s(".main-kv-big").data("index")) {
          var a = s(".main-kv-big").data().index;
          (i = s.parseJSON(
            s(".indexUr .button-info-" + a + " .main-kv-info")
              .data()
              .sizes.replaceAll("'", '"')
          )),
            (n = s(".main-kv-big .div_fon"));
          if (t.width() >= 768 && t.width() <= 991)
            (o = i.tablet).height || (o.height = i.desktop.height),
              s(n).attr(
                "style",
                "right: " +
                  o.imageRight +
                  "; top: " +
                  o.imageBottom +
                  "; height: " +
                  o.imageSize +
                  ";"
              );
          else if (t.width() < 768) {
            (o = i.mobile).height || (o.height = i.desktop.height),
              s(n).attr(
                "style",
                "left: " +
                  o.imageRight +
                  "; top: " +
                  o.imageBottom +
                  "; height: " +
                  o.imageSize +
                  ";"
              );
          } else if (t.width() > 991) {
            o = i.desktop;
            s(n).attr(
              "style",
              "left: " +
                o.imageRight +
                "; bottom: " +
                o.imageBottom +
                "; height: " +
                o.imageSize +
                ";"
            );
          }
        }
        var l = ".kv_icon[data-sizes]";
        s(l).length &&
          s(l).each(function () {
            var e = s.parseJSON(s(this).data().sizes.replaceAll("'", '"'));
            if (t.width() >= 767 && t.width() <= 991)
              (i = e.tablet).height || (i.height = e.desktop.height),
                s(this).attr(
                  "style",
                  "right: " +
                    i.right +
                    "; bottom: " +
                    i.bottom +
                    "; height: " +
                    i.height +
                    ";"
                );
            else if (t.width() < 767) {
              (i = e.mobile).height || (i.height = e.desktop.height),
                s(this).attr(
                  "style",
                  "right: " +
                    i.right +
                    "; bottom: " +
                    i.bottom +
                    "; height: " +
                    i.height +
                    ";"
                );
            } else if (t.width() > 991) {
              var i = e.desktop;
              s(this).attr(
                "style",
                "right: " +
                  i.right +
                  "; bottom: " +
                  i.bottom +
                  "; height: " +
                  i.height +
                  ";"
              );
            }
          });
      }
      i(231394),
        i(893231),
        i(868490),
        (s.ajaxQ =
          ((n = 0),
          (o = {}),
          s(document).ajaxSend(function (e, t) {
            (t._id = ++n), (o[t._id] = t);
          }),
          s(document).ajaxComplete(function (e, t) {
            delete o[t._id];
          }),
          {
            abortAll: function () {
              var e = [];
              return (
                s.each(o, function (t, i) {
                  e.push(i._id), i.abort();
                }),
                e
              );
            },
          })),
        (window.icHelper = {
          base64encodeObject: function (e) {
            return l.DS.encode(JSON.stringify(e));
          },
          makeid: function (e) {
            for (
              var t = "",
                i =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                n = 0;
              n < e;
              n++
            )
              t += i.charAt(Math.floor(62 * Math.random()));
            return t;
          },
          pluralForm: function (e, t) {
            var i = Math.abs(e) % 100,
              n = i % 10;
            return i > 10 && i < 20
              ? t[2]
              : n > 1 && n < 5
              ? t[1]
              : 1 === n
              ? t[0]
              : t[2];
          },
          md5: (function (e) {
            function t(t) {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(function (e) {
            return md5(e);
          }),
          setHash: function (e, t) {
            if (history.pushState) {
              var i,
                n = location.pathname + location.search,
                o = new RegExp("([?&])" + e + "=.*?(&|$)", "i"),
                a = -1 !== n.indexOf("?") ? "&" : "?";
              (i = n.match(o)
                ? n.replace(o, "$1" + e + "=" + t + "$2")
                : n + a + e + "=" + t),
                window.history.pushState(
                  {
                    path: i,
                  },
                  "",
                  i
                );
            }
          },
          copyToClipboard: function (e) {
            var t = document.createElement("textarea");
            t.setAttribute("style", 'width="0";heigth="0";'),
              document.body.appendChild(t),
              (t.value = e),
              t.select(),
              document.execCommand("copy"),
              document.body.removeChild(t);
          },
          jqElemIsEmpty: function (e) {
            return !s.trim(e.html());
          },
          validateEmail: function (e) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
              String(e)
            );
          },
          noFollowLInk: function () {
            s(
              'a[href^="http"], div[style^="background-image: url(http"], img[src^="http"]'
            ).each(function (e, t) {
              if ("DIV" == t.nodeName) {
                var i = s(t)
                  .css("background-image")
                  .replace('url("', "")
                  .replace('")', "");
                i.startsWith("https://rpp.mos.ru/") ||
                  i.startsWith("https://i.moscow/") ||
                  s(t).attr("rel", "nofollow");
              } else if ("A" == t.nodeName) {
                var n = s(t).attr("src"),
                  o = s(t).attr("href");
                ((!n ||
                  n.startsWith("https://rpp.mos.ru/") ||
                  n.startsWith("https://i.moscow/")) &&
                  (!o ||
                    o.startsWith("https://rpp.mos.ru/") ||
                    o.startsWith("https://i.moscow/"))) ||
                  s(t).attr("rel", "nofollow");
              } else if ("IMG" == t.nodeName) {
                var a = s(t).attr("src");
                a.startsWith("https://rpp.mos.ru/") ||
                  a.startsWith("https://i.moscow/") ||
                  s(t).attr("rel", "nofollow");
              }
            });
          },
          guid: function () {
            var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            function t() {
              return Math.floor(65536 * (1 + Math.random()))
                .toString(16)
                .substring(1);
            }
            var i =
              t() +
              t() +
              "-" +
              t() +
              "-" +
              t() +
              "-" +
              t() +
              "-" +
              t() +
              t() +
              t();
            return e ? i : i.replace(/\-/gi, "");
          },
          makeAndDownloadFile: function (e, t, i) {
            i = i || "text/plain;charset=utf-8";
            var n = new Blob([e], {
              type: i,
            });
            if (window.navigator.msSaveOrOpenBlob)
              window.navigator.msSaveOrOpenBlob(n, t);
            else {
              var o = document.createElement("a"),
                a = URL.createObjectURL(n);
              (o.href = a),
                (o.download = t),
                document.body.appendChild(o),
                o.click(),
                setTimeout(function () {
                  document.body.removeChild(o), window.URL.revokeObjectURL(a);
                }, 0);
            }
          },
          downloadFileByLink: function (e, t, i) {
            var n = new XMLHttpRequest();
            n.open("GET", e, !0),
              (n.responseType = "blob"),
              (n.onreadystatechange = function () {
                n.readyState < 4 ||
                  (200 !== n.status &&
                    ("function" == typeof i
                      ? i(n.response)
                      : icHelper.showModalAlert("Ошибка получения файла")),
                  4 === n.readyState &&
                    "function" == typeof t &&
                    (t(n.response), (n = null)));
              }),
              n.send(null);
          },
          signInfo: function (e, t) {
            s.post(Routing.generate("fullSignInfo"), {
              sign: e,
            })
              .done(function (e) {
                t.html(e);
              })
              .fail(function () {})
              .always(function () {
                icHelper.removeLoader();
              });
          },
          showModal: function (e, t, i, n, o, a, l) {
            return (
              null != e &&
              (null == t && (t = ""),
              null == i && (i = "#siteModal"),
              0 !== s(i).length &&
                (s(i).find("#modalTitle").html(t),
                s(i).find("#modalBody").html(e),
                null != n &&
                  (s(i).addClass(n),
                  s(i).on("hidden.bs.modal", function () {
                    s(i).removeClass(n);
                  })),
                s(i).on("shown.bs.modal", function () {
                  if (
                    (setTimeout(function () {
                      s('.modal input[data-toggle="tooltip"]').length &&
                        (s('.modal input[data-toggle="tooltip"]').each(
                          function () {
                            s(this).wrap(
                              '<div data-toggle="tooltip" title="' +
                                s(this).attr("title") +
                                '"></div>'
                            ),
                              s(this).attr({
                                "data-toggle": "",
                                title: "",
                              });
                          }
                        ),
                        s('.modal *[data-toggle="tooltip"]').tooltip()),
                        s(".modal-tooltip").length &&
                          s(".modal-tooltip").tooltip({
                            template:
                              '<div class="tooltip tooltip_big tooltip_big2 tb2mod" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                            html: !0,
                            offset: 1e3,
                          }),
                        s(".modal .datepicker_js").length &&
                          icHelper.initSandartCalendar(".modal .datepicker_js"),
                        s(".counter_textare").length && icHelper.textLength();
                    }, 300),
                    s(".modal.show .mod_content_scroll").length &&
                      (s(".modal.show .mod_content_scroll").css(
                        "height",
                        s(window).height() -
                          s(".modal.show .modal-header").outerHeight() -
                          s(".modal.show .modal_btn").outerHeight() -
                          40
                      ),
                      icHelper.mcustomScroll(".modal .mod_content_scroll"),
                      s(".modal.show .mod_content_scroll").removeClass("op0")),
                    icHelper.mcustomScroll(".modal .scrollbar_js"),
                    icHelper.selectJs(".modal select.form-control"),
                    s(".mask_js").length && icHelper.maskJs(),
                    s(".modal.show .gal_modal_foto_js").length)
                  ) {
                    var e = 0;
                    s(".modal.show .gal_modal_foto_js").attr("data-number") &&
                      (e = Number(
                        s(".modal.show .gal_modal_foto_js").attr("data-number")
                      )),
                      s(".modal.show .gal_modal_foto_js").slick({
                        lazyLoad: "anticipated",
                        infinite: !0,
                        dots: !1,
                        arrows: !0,
                        slidesToShow: 1,
                        initialSlide: e,
                        adaptiveHeight: !0,
                        prevArrow:
                          '<button type="button" class="slick-prev"><i class="material-icons">navigate_before</i></button>',
                        nextArrow:
                          '<button type="button" class="slick-next"><i class="material-icons">navigate_next</i></button>',
                      }),
                      s(".modal.show .gal_modal_foto_js").removeClass("op0"),
                      s(".modal.show .gal_modal_foto_js").on(
                        "lazyLoaded",
                        function () {
                          s(this)
                            .find(".slick-list")
                            .css(
                              "height",
                              s(this).find(".slick-active").height()
                            );
                        }
                      );
                  }
                }),
                "function" == typeof o &&
                  (s(i).unbind("show.bs.modal.nbs"),
                  s(i).on("show.bs.modal.nbs", o)),
                "function" == typeof l &&
                  (s(i).off("hide.bs.modal", l),
                  s(i).on("hide.bs.modal", function () {
                    l(), s(i).off("hide.bs.modal");
                  })),
                void 0 !== a && s(i).modal(a),
                void s(i).modal("show")))
            );
          },
          hideModal: function (e) {
            var t,
              i =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
            (t = s(e ? "#" + e : ".modal")).length &&
              (i || t.removeClass("fade"),
              t.modal("hide"),
              i || t.addClass("fade"));
          },
          showModalAlertOpen: function () {
            s("#siteModalAlert").on("show.bs.modal", function () {
              s("#siteModalAlert .modal-dialog").removeAttr("style"),
                s("#siteModal").hasClass("show") &&
                  s("#siteModal").outerWidth() < 750 &&
                  s("#siteModalAlert .modal-dialog").css(
                    "margin-left",
                    s("#siteModal .modal-dialog").css("margin-left")
                  );
            });
          },
          showModalAlert: function (e, t, i, n) {
            void 0 === e && (e = ""),
              s("#siteModalAlert").find("#modalTitleAlert").html(e),
              void 0 === t ||
                s("#siteModalAlert").find("#modalBodyAlert").html(t),
              void 0 !== i &&
                (s("#siteModalAlert").addClass(i),
                s("#siteModalAlert").on("hidden.bs.modal", function () {
                  s("#siteModalAlert").removeClass(i),
                    setTimeout(function () {
                      s("body").removeClass("modal-open");
                    }, 100);
                })),
              void 0 !== n && s(modalId).modal(n),
              s("#siteModalAlert").modal();
          },
          hideModalAlert: function () {
            s("#siteModalAlert").modal("hide");
          },
          showModalAlertRedirectOnClose: function (e, t, i, n) {
            void 0 === e && (e = ""),
              s("#siteModalAlert").find("#modalTitleAlert").html(e),
              null == t
                ? s("#siteModalAlert")
                    .find("#modalBodyAlert")
                    .html(
                      s("<div/>")
                        .addClass("modal_btn")
                        .append(
                          s("<button/>")
                            .attr({
                              type: "button",
                            })
                            .addClass("btn2-light btn")
                            .text("Закрыть")
                            .click(function () {
                              s("#siteModalAlert").hide(),
                                i
                                  ? "back" === i
                                    ? history.back()
                                    : (window.location.href = i)
                                  : window.location.reload();
                            })
                        )
                    )
                : s("#siteModalAlert").find("#modalBodyAlert").html(t),
              null != n &&
                (s("#siteModalAlert").on("hidden.bs.modal", function () {
                  s("#siteModalAlert").removeClass(n);
                }),
                s("#siteModalAlert").on("show.bs.modal", function () {
                  s("#siteModalAlert").addClass(n);
                })),
              s("#siteModalAlert").modal(),
              s("#siteModalAlert").on("hide.bs.modal", function (e) {
                i
                  ? "back" === i
                    ? history.back()
                    : (window.location.href = i)
                  : window.location.reload();
              });
          },
          showModalConfirm: function (e, t, i, n, o) {
            var a =
              !(arguments.length > 5 && void 0 !== arguments[5]) ||
              arguments[5];
            void 0 === n &&
              (n =
                '<div class="modal_btn modal_btn_alert btn_center"><button class="btn btn2-light btn-no">Нет</button><button class="btn btn-grad btn-yes">Да</button></div>'),
              icHelper.showModalAlert(e, n, o),
              a &&
                s("#siteModalAlert").on("hidden.bs.modal", function () {
                  null != i && "function" == typeof i && i();
                }),
              s(".btn-yes").click(function () {
                s("#siteModalAlert").off("hidden.bs.modal"),
                  s("#siteModal").off("hidden.bs.modal"),
                  s("#siteModalAlert").modal("hide"),
                  s("#siteModal").modal("hide"),
                  t();
              }),
              s(".btn-no").click(function () {
                null != i && "function" == typeof i && i(),
                  s("#siteModalAlert").modal("hide");
              });
          },
          slidMaket: function (e, t) {
            if (void 0 !== s(e).attr("data-mob")) {
              if (s(e).attr("data-mob") > 0) {
                if (s(window).width() >= s(e).attr("data-mob"))
                  return (
                    s(e).hasClass("slick-initialized") && s(e).slick("unslick"),
                    !1
                  );
              } else if (
                s(window).width() <= +s(e).attr("data-mob").replace("-", "")
              )
                return (
                  s(e).hasClass("slick-initialized") && s(e).slick("unslick"),
                  !1
                );
              if (s(e).hasClass("slick-initialized")) return !1;
            }
            var i;
            (i = void 0 !== s(e).attr("data-infinite")),
              void 0 === t &&
                (void 0 === (t = s(e).attr("data-toshow")) ||
                  (t = +s(e).attr("data-toshow")));
            var n, o;
            s(".blokcheyn_slick");
            (s(e).parent().hasClass("slide_btn_js") &&
              (s(e).on("init", function (e, t, i, n) {
                var o = t.slideCount;
                s(this).closest(".slide_btn_js").find(".num_max_js").text(o);
              }),
              s(e).on("init reInit afterChange", function (e, t, i, n) {
                var o = (i || 0) + 1;
                s(this).closest(".slide_btn_js").find(".num_el_js").text(o);
              }),
              s(document).on("click", ".next_prev_js", function () {
                s(e).slick("slickPrev");
              }),
              s(document).on("click", ".next_btn_js", function () {
                s(e).slick("slickNext");
              })),
            void 0 === t)
              ? ((t =
                  s(".profile_cont").length &&
                  s(e).width() <
                    3 * s(e).children("div").children("*").outerWidth() + 30
                    ? 2
                    : 3),
                s(e).slick({
                  dots: !0,
                  variableWidth: !0,
                  infinite: i,
                  slidesToShow: t,
                  slidesToScroll: t,
                  prevArrow:
                    '<button type="button" class="slick-prev"><i class="material-icons">navigate_before</i></button>',
                  nextArrow:
                    '<button type="button" class="slick-next"><i class="material-icons">navigate_next</i></button>',
                  responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        variableWidth: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ],
                }))
              : ((n = void 0 === s(e).attr("data-variableWidth")),
                (o = 1 == t),
                s(e).slick({
                  dots: !0,
                  infinite: i,
                  variableWidth: n,
                  adaptiveHeight: o,
                  slidesToShow: t,
                  slidesToScroll: t,
                  prevArrow:
                    '<button type="button" class="slick-prev"><i class="material-icons">navigate_before</i></button>',
                  nextArrow:
                    '<button type="button" class="slick-next"><i class="material-icons">navigate_next</i></button>',
                  responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        variableWidth: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ],
                }));
            s(e).hasClass("over_hid") && s(e).removeClass("over_hid");
          },
          slidTwoNav: function (e) {
            s(".slider-for").length &&
              (s(".slider-for").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: !0,
                fade: !0,
                dots: !0,
                asNavFor: ".slider-nav",
                prevArrow:
                  '<button type="button" class="slick-prev"><i class="material-icons">navigate_before</i></button>',
                nextArrow:
                  '<button type="button" class="slick-next"><i class="material-icons">navigate_next</i></button>',
              }),
              s(".slider-nav").slick({
                slidesToShow: 8,
                slidesToScroll: 1,
                asNavFor: ".slider-for",
                variableWidth: !0,
                dots: !1,
                arrows: !1,
                focusOnSelect: !0,
              }));
          },
          slidTag: function (e) {
            s(e).slick({
              dots: !1,
              infinite: !1,
              variableWidth: !0,
              slidesToScroll: 5,
              slidesToShow: 5,
              prevArrow:
                '<button type="button" class="slick-prev"><i class="material-icons">navigate_before</i></button>',
              nextArrow:
                '<button type="button" class="slick-next"><i class="material-icons">navigate_next</i></button>',
            });
          },
          slidTagOne: function (e) {
            s(".slide_tabs_js").length &&
              (s(".slide_tabs_js").on("init", function (e, t, i) {
                var n = s(".slide_tabs_js"),
                  o = 0;
                s(".slide_tabs_js .slick-track > div").each(function () {
                  o += s(this).width();
                }),
                  o > n.width() && n.removeClass("arrow_not_right");
              }),
              s(".slide_tabs_js").slick({
                dots: !1,
                infinite: !1,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: !0,
                prevArrow:
                  '<button type="button" class="slick-prev"><i class="material-icons">navigate_before</i></button><div class="slick_ten"></div>',
                nextArrow:
                  '<button type="button" class="slick-next"><i class="material-icons">navigate_next</i></button><div class="slick_ten"></div>',
              }),
              s(".slide_tabs_js").on("afterChange", function (e, t, i, n) {
                var o = s(".slide_tabs_js"),
                  a = 0;
                s(".slide_tabs_js .slick-track > div").each(function () {
                  a += s(this).width();
                }),
                  a < o.width() - o.find(".slick-track").position().left
                    ? (o.addClass("arrow_not_right"),
                      o.addClass("current_slide_last"))
                    : o.removeClass("arrow_not_right"),
                  "0" == i && o.removeClass("current_slide_last");
              }),
              s(document).on("click", ".nav_sl .nav-link", function () {
                s(this)
                  .closest(".slick-slide")
                  .siblings()
                  .find("a")
                  .removeClass("active");
              }));
          },
          notElementList: function (e, t, i, n) {
            if ("object" === m(e)) var o = e;
            else o = s(e);
            if (void 0 === t) t = "";
            if (void 0 === i)
              i =
                "К сожалению, по вашему запросу ничего не найдено.<br> Попробуйте изменить запрос";
            if (void 0 === n) n = "/build/img/message_not_ico.svg";
            o.html(
              '<div class="not_date_center ' +
                t +
                '">                <div class="not_date2">                    <div class="dt1">                        <img src="' +
                n +
                '">                    </div>                    <div class="dt2">' +
                i +
                "</div>                </div>            </div>"
            );
          },
          companyForExchange: function (e) {
            var t,
              i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = e.parents("form");
            (t = i
              ? window.location.href.split("?")[0]
              : window.location.href.split("?")[0] + "?" + n.serialize()),
              icHelper.loaderSpin(void 0, "content"),
              icHelper.iasFormSendAjax(n, function (e) {
                s("#content").html(e),
                  window.history.pushState({}, "", t),
                  icHelper.removeLoader();
              });
          },
          patentsSearch: function (e) {
            var t = e.parents("form");
            icHelper.loaderSpin(void 0, "search"),
              icHelper.iasFormSendAjax(t, function (e) {
                s("#search_content").html(e),
                  s("#search_content .patent_list").length ||
                    icHelper.notElementList("#search_content"),
                  icHelper.removeLoader();
              });
          },
          productsSearch: function (e) {
            var t = e.parents("form");
            icHelper.loaderSpin(void 0, "search");
            var i =
              Routing.generate("marketProductions") +
              "?" +
              t.serialize() +
              "&" +
              Math.random(100);
            icHelper.iasFormSendAjax(t, function (e) {
              s("#buttonBlock").removeClass("d-none"),
                s("#search_content").html(e),
                window.history.pushState(
                  {
                    market: {},
                  },
                  "",
                  i
                ),
                icHelper.removeLoader();
            });
          },
          beforeLoadMore: function (e, t) {
            e.attr("disabled", !0),
              t && (e.addClass("btn-ico btn-ico-remove"), e.append("<i></i>")),
              e.find(".btn_svg_loader28").length ||
                e
                  .find("i")
                  .after(
                    '<svg  class="btn_svg_loader btn_svg_loader28" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#c8c8c8"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18" stroke="#16FF00"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>'
                  ),
              e.find("i").hide();
          },
          beforeLoad: function (e) {
            e.addClass("btn-ico btn-ico-remove disabled_btn"),
              e.append("<i></i>"),
              e
                .find("i")
                .after(
                  '<svg  class="btn_svg_loader btn_svg_loader28" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#f5db1b"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>'
                ),
              e.find("i").hide();
          },
          afterLoadMore: function (e, t, i) {
            t && e.before(t),
              e.find(".btn_svg_loader").remove(),
              e.hasClass("btn-ico-remove") &&
                e.removeClass("btn-ico btn-ico-remove"),
              e.find("i").show(),
              s(t).data("showmore") || void 0 !== i
                ? e.attr("disabled", !1)
                : e.hide(),
              icHelper.tooltipJs();
          },
          btnTopScroll: function () {
            s(".btn_top_scroll_js").length &&
              (s(window).scroll(function () {
                var e = s(this).scrollTop(),
                  t = s(".btn_top_scroll_js");
                e > 60 ? t.addClass("active_sc") : t.removeClass("active_sc");
              }),
              s(document).on("click", ".btn_top_scroll_js", function () {
                s("html, body").animate(
                  {
                    scrollTop: 0,
                  },
                  500
                );
              }));
          },
          maskJs: function (e, t, i) {
            return (
              (void 0 !== e || 0 !== (e = s(".mask_js")).length) &&
              0 !== e.length &&
              (void 0 === t && (t = e.attr("data-mask")),
              void 0 === i &&
                void 0 === (i = e.attr("placeholder")) &&
                (i = ""),
              void e.mask(t, {
                placeholder: i,
              }))
            );
          },
          FormSendAjaxJsonResponse: function (e, t, i) {
            var n = null,
              o = s(e).find('[type="submit"]').add("#send_base_request_form");
            o.length || icHelper.loaderSpin(),
              o.length &&
                o.hasClass("submit_loader_js") &&
                (o.hasClass(".btn-ico")
                  ? icHelper.beforeLoadMore(o)
                  : icHelper.beforeLoadMore(o, !0)),
              "GET" === s(e).attr("method").toUpperCase()
                ? (n = e.serialize())
                : "POST" === s(e).attr("method").toUpperCase() &&
                  (n = new FormData(e)),
              s
                .ajax({
                  method: s(e).attr("method"),
                  global: !0,
                  url: s(e).attr("action"),
                  data: n,
                  processData: !1,
                  contentType: !1,
                })
                .done(function (e, i, n) {
                  o.length &&
                    202 !== n.status &&
                    (o.removeAttr("disabled"),
                    s(".modal.show").length &&
                      icHelper.afterLoadMore(o, "", !0)),
                    "function" == typeof t ? t(e) : window.location.reload(),
                    icHelper.selectJs(),
                    icHelper.etpGpbInit(),
                    o.length || icHelper.removeLoader();
                })
                .fail(function (t, i, n) {
                  "object" ===
                    ("undefined" == typeof grecaptcha
                      ? "undefined"
                      : m(grecaptcha)) && grecaptcha.reset(),
                    s(".invalid-feedback.d-block").remove(),
                    s([document.documentElement, document.body]).animate(
                      {
                        scrollTop: s(e).offset().top - 100,
                      },
                      100
                    ),
                    s(".invalid-feedback.d-block").remove();
                  var o = t.responseJSON.fields,
                    a = t.responseJSON.global;
                  for (var l in o)
                    "SELECT" === s("#" + l).prop("tagName")
                      ? s("#" + l)
                          .parent()
                          .append(
                            s("<span/>")
                              .addClass("invalid-feedback d-block")
                              .append(
                                s("<span/>")
                                  .addClass("d-block")
                                  .append(
                                    s("<span/>")
                                      .addClass("form-error-message")
                                      .text(o[l])
                                  )
                              )
                          )
                      : "INPUT" === s("#" + l).prop("tagName") &&
                        "checkbox" === s("#" + l).prop("type")
                      ? s("#" + l)
                          .parent()
                          .parent()
                          .append(
                            s("<span/>")
                              .addClass("invalid-feedback d-block")
                              .append(
                                s("<span/>")
                                  .addClass("d-block")
                                  .append(
                                    s("<span/>")
                                      .addClass("form-error-message")
                                      .text(o[l])
                                  )
                              )
                          )
                      : ("DIV" === s("#" + l).prop("tagName") &&
                          "Требуется подписать файл" === o[l] &&
                          (s("#" + l)
                            .parent()
                            .find(".plUploadSign")
                            .show(),
                          s("#" + l)
                            .parent()
                            .find(".plUploadSign")
                            .parent()
                            .show()),
                        s("#" + l).after(
                          s("<span/>")
                            .addClass("invalid-feedback d-block")
                            .append(
                              s("<span/>")
                                .addClass("d-block")
                                .append(
                                  s("<span/>")
                                    .addClass("form-error-message")
                                    .text(o[l])
                                )
                            )
                        ));
                  for (var r in a)
                    s(e)
                      .find(".form-group")
                      .first()
                      .before(
                        s("<span/>")
                          .addClass("invalid-feedback d-block")
                          .append(
                            s("<span/>")
                              .addClass("d-block")
                              .append(
                                s("<span/>")
                                  .addClass("form-error-message")
                                  .text(a[r])
                              )
                          )
                          .append(s("<br/>"))
                          .append(s("<br/>"))
                      );
                });
          },
          iasFormSendAjax: function (e, t, i) {
            var n =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              o = arguments.length > 4 ? arguments[4] : void 0,
              l =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : [],
              r = null,
              c = s(e).find('[type="submit"]').add("#send_base_request_form"),
              d = "#request_for_resident";
            if (
              (c.attr("disabled", "disabled"),
              c.length ||
                -1 !==
                  window.location.href.indexOf("investicionnaya-upakovka") ||
                icHelper.loaderSpin(),
              c.length &&
                c.hasClass("submit_loader_js") &&
                (c.hasClass(".btn-ico")
                  ? icHelper.beforeLoadMore(c)
                  : icHelper.beforeLoadMore(c, !0)),
              "GET" === s(e).attr("method").toUpperCase()
                ? (r = e.serialize())
                : "POST" === s(e).attr("method").toUpperCase() &&
                  (r = new FormData(e)),
              l.photo)
            ) {
              var h = s(e).attr("name") + "[file][]",
                u = l.photo;
              for (var p in u) r.append(h, u[p]);
            }
            s.ajax({
              method: s(e).attr("method"),
              global: !0,
              url: s(e).attr("action"),
              data: r,
              processData: !1,
              contentType: !1,
            })
              .done(function (n, o, l) {
                if (
                  (c.length &&
                    202 !== l.status &&
                    (c.removeAttr("disabled"),
                    s(".modal.show").length &&
                      icHelper.afterLoadMore(c, "", !0)),
                  (202 !== l.status && 200 !== l.status) ||
                    ("function" == typeof t ? t(n) : window.location.reload()),
                  "ulk_ajax_form" !== s(e).attr("id") &&
                    "person_ajax_form" !== s(e).attr("id"))
                ) {
                  if (
                    (400 === l.status && "function" == typeof i && i(n),
                    206 === l.status)
                  ) {
                    var r = JSON.parse(n),
                      h = r.route,
                      u = r.title,
                      p = r.form_name;
                    s.get(h).done(function (e) {
                      icHelper.showModal(
                        e,
                        u,
                        void 0,
                        "modal800 modal_accordion"
                      ),
                        p && (0, a.initDropZone)(p);
                    });
                  }
                  s(d).length > 0 &&
                    (s(d).text("Вы подали заявку"),
                    s(d).attr("disabled", !0),
                    s(d).find("i").remove()),
                    icHelper.selectJs(),
                    icHelper.etpGpbInit(),
                    c.length || icHelper.removeLoader();
                }
              })
              .fail(function (t, a, r) {
                if (
                  (c.length &&
                    (c.removeAttr("disabled"),
                    s(".modal.show").length &&
                      icHelper.afterLoadMore(c, "", !0)),
                  400 === t.status)
                )
                  "/investicionnaya-upakovka" !== window.location.pathname &&
                    "/profile" !== window.location.pathname &&
                    !0 !== l.jsonBadRequest &&
                    s(e).parent().html(t.responseText),
                    "person" === s(e).attr("name") &&
                      "/profile" === window.location.pathname &&
                      s(e).parent().html(t.responseText),
                    "user_info_update" === s(e).attr("name") &&
                      "/cabinet" === window.location.pathname &&
                      s("#user_info_update_about")
                        .parent()
                        .find(".counter_textare_num .sp1")
                        .text(s("#user_info_update_about").val().length),
                    icHelper.selectJs(),
                    icHelper.etpGpbInit(),
                    "function" == typeof i && i(t, s(e));
                else if (403 === t.status)
                  icHelper.showModalAlert("", t.responseText);
                else if (503 === t.status) {
                  "function" == typeof o
                    ? o(t)
                    : (icHelper.showModalAlert(
                        "Ошибка выполнения запроса, попробуйте повторить запрос позднее.",
                        '<div class="text-center"><button onclick="icHelper.hideModal(\'siteModalAlert\');" type="button" class="btn-light btn">Закрыть</button></div>'
                      ),
                      console.log(t.responseText));
                } else "function" == typeof n && n(t, s(e));
                window.icHelper.removeLoader(),
                  c.length || icHelper.removeLoader();
              });
          },
          etpGpbInit: function () {
            s(".etpformfield").length &&
              s(".etpformfield").each(function () {
                if (s(this).val()) {
                  var e = '[data-nameform="' + s(this).data("child") + '"]';
                  s(e).val()
                    ? s(e).removeAttr("disabled")
                    : s(this).trigger("change");
                }
              });
          },
          loaderSpin: function (e, t) {
            s('*[data-toggle="tooltip"]').tooltip("hide");
            var i = "";
            void 0 === e && (e = "body"),
              "body" === e && (i = "pos_fixed"),
              void 0 === t
                ? s(e).append(
                    '<div class="loader_all ' +
                      i +
                      '"><svg class="svg_loader_ico" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#c8c8c8"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18" stroke="#16FF00"><animateTransform attributeName="transform"  type="rotate"  from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg><div class="loader-progress"></div></div>'
                  )
                : s(e).append(
                    '<div class="loader_all loader_search ' +
                      i +
                      '"><div class="loader_search_icon_pos"><svg class="svg_loader_search" width="40" height="40" fill="#FFFFFF"><use xlink:href="/svg/all-icons2.svg#search"></use></svg><svg class="svg_loader_ico" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="1"><circle stroke-opacity=".6" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18" stroke="#16FF00"><animateTransform attributeName="transform"  type="rotate"  from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg><div class="loader_text h4fs"></div></div></div>'
                  );
          },
          removeLoader: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = ".loader_all";
            s(".animation_height").length
              ? setTimeout(function () {
                  s(e + " " + t).remove();
                }, 500)
              : s(e + " " + t).remove(),
              icHelper.tooltipJs();
          },
          selectJs: function (e) {
            function t(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "выбрано",
                i = arguments.length > 2 ? arguments[2] : void 0,
                n = s(e),
                o = n.next(),
                a = n.next(".select2").find("li"),
                l = i;
              l || (l = o.find(".select2-selection__choice").length),
                o.removeClass("selected_change"),
                n.hasClass("select_multiple") &&
                  o.find(".text_append2").html(""),
                a.each(function () {
                  s(this).outerWidth();
                }),
                l > 0 &&
                  (o.addClass("selected_change"),
                  n.hasClass("select_multiple") &&
                    o
                      .find(".text_append2")
                      .html(
                        ""
                          .concat(t, ' <span class="color_blue fwb">')
                          .concat(
                            l,
                            '</span><span class="select2-selection__clear2">×</span>'
                          )
                      ),
                  s(".select2-selection__clear2").on("click", function () {
                    n.val([]).trigger("change");
                  }));
            }
            function i(e) {
              return e.id
                ? s('<span class="text_select">' + e.text + "</span>").on({
                    mouseenter: function () {},
                    mouseleave: function () {},
                  })
                : e.text;
            }
            s.fn.select2.amd.define(
              "SearchableSingleSelection",
              [
                "select2/utils",
                "select2/selection/single",
                "select2/selection/eventRelay",
                "select2/dropdown/search",
                "select2/selection/placeholder",
                "select2/selection/allowClear",
              ],
              function (e, t, i, n, o, a) {
                var l = e.Decorate(t, n);
                (l = e.Decorate(l, i)),
                  (l = e.Decorate(l, o)),
                  ((l = e.Decorate(l, a)).prototype.render = function () {
                    var e = n.prototype.render.call(this, t.prototype.render);
                    return (
                      this.$searchContainer.hide(),
                      this.$element
                        .siblings(".select2")
                        .find(".selection")
                        .prepend(this.$searchContainer),
                      e
                    );
                  });
                var s = l.prototype.bind;
                return (
                  (l.prototype.bind = function (e) {
                    var t = this;
                    s.apply(this, arguments),
                      e.on("open", function () {
                        t.$selection.hide(), t.$searchContainer.show();
                      }),
                      e.on("close", function () {
                        t.$searchContainer.hide(), t.$selection.show();
                      });
                  }),
                  l
                );
              }
            ),
              s.fn.select2.amd.define(
                "UnsearchableDropdown",
                [
                  "select2/utils",
                  "select2/dropdown",
                  "select2/dropdown/attachBody",
                  "select2/dropdown/closeOnSelect",
                ],
                function (e, t, i, n) {
                  var o = e.Decorate(t, i);
                  return (o = e.Decorate(o, n));
                }
              ),
              void 0 === e && (e = ".select_js"),
              s(e).each(function () {
                var e = s(this),
                  n = 0;
                if (!e.hasClass("select2-hidden-accessible")) {
                  if (
                    "undefined" !== e.attr("data-class") &&
                    void 0 !== e.attr("data-class")
                  )
                    var o =
                      "default select2-dropdown-op0 " + e.attr("data-class");
                  else o = "default select2-dropdown-op0";
                  if (
                    "undefined" !== e.attr("data-placeholder") &&
                    void 0 !== e.attr("data-placeholder")
                  )
                    var a = e.attr("data-placeholder"),
                      l = !0;
                  else if (
                    "undefined" !== e.attr("placeholder") &&
                    void 0 !== e.attr("placeholder")
                  )
                    (a = e.attr("placeholder")), (l = !0);
                  else
                    (a = {
                      id: "-1",
                      text: "Выберите из списка",
                    }),
                      (l = !1);
                  if (
                    "undefined" !== e.attr("data-dropdownparent") &&
                    void 0 !== e.attr("data-dropdownparent")
                  )
                    var r = s(e.attr("data-dropdownparent"));
                  else r = s("body");
                  "undefined" !== e.attr("data-minimuminputlength") &&
                    (n = e.attr("data-minimuminputlength"));
                  try {
                    if (
                      e.is("#roomTypesRentFilter") ||
                      e.is("#districtRentFilter") ||
                      e.is("#roomsSortType") ||
                      e.is("#coWorkqingWorkPlaceFormat") ||
                      e.is("#coworkingAdditionalService")
                    )
                      e.attr("multiple")
                        ? e.select2({
                            templateResult: i,
                            placeholder: a,
                            allowClear: l,
                            minimumResultsForSearch: 4,
                            theme: o,
                            closeOnSelect: !1,
                            minimumInputLength: n,
                          })
                        : e.select2({
                            templateResult: i,
                            placeholder: a,
                            allowClear: l,
                            minimumResultsForSearch: 4,
                            theme: o,
                            closeOnSelect: !1,
                            selectionAdapter: s.fn.select2.amd.require(
                              "SearchableSingleSelection"
                            ),
                            dropdownAdapter: s.fn.select2.amd.require(
                              "UnsearchableDropdown"
                            ),
                            minimumInputLength: n,
                          });
                    else if (
                      e.attr("multiple") ||
                      ("undefined" !== e.attr("data-not-search") &&
                        void 0 !== e.attr("data-not-search"))
                    ) {
                      var c = !0;
                      e.attr("multiple") &&
                        s(e.hasClass("closeOnSelect_js")) &&
                        (c = !1),
                        e.select2({
                          templateResult: i,
                          placeholder: a,
                          allowClear: !1,
                          minimumResultsForSearch: 4,
                          theme: o,
                          closeOnSelect: c,
                          maximumSelectionLength: e.hasClass(
                            "select_js_limited"
                          )
                            ? e.attr("data-optionsLimit")
                            : void 0,
                          language: {
                            maximumSelected: function (e) {
                              return (
                                "Вы можете выбрать не более " +
                                e.maximum +
                                " элементов"
                              );
                            },
                          },
                          minimumInputLength: n,
                        });
                    } else
                      e.select2({
                        templateResult: i,
                        templateSelection: i,
                        placeholder: a,
                        allowClear: l,
                        minimumResultsForSearch: 4,
                        theme: o,
                        selectionAdapter: s.fn.select2.amd.require(
                          "SearchableSingleSelection"
                        ),
                        dropdownAdapter: s.fn.select2.amd.require(
                          "UnsearchableDropdown"
                        ),
                        minimumInputLength: n,
                        dropdownParent: r,
                      });
                    e.next().find(".select2-selection__clear").length &&
                      e
                        .next()
                        .find(".select2-selection__clear")
                        .attr("title", "Удалить");
                  } catch (e) {}
                  if (
                    (e.hasClass("label_true") &&
                      (e
                        .next(".select2")
                        .find(".select2-selection")
                        .addClass("select2_flex"),
                      e
                        .next(".select2")
                        .find(".select2-selection")
                        .prepend(
                          '<span class="select_label">' +
                            e.attr("data-label") +
                            '<span class="text_append"></span></span>'
                        )),
                    e.is("[multiple]"))
                  ) {
                    var d = e.next().find(".select2-search__field");
                    0 === d.val().length &&
                      setTimeout(function () {
                        d.css("width", "100%");
                      }, 300),
                      d.attr("placeholder") ||
                        setTimeout(function () {
                          d.css("width", "0.75rem");
                        }, 300);
                  }
                  e.hasClass("select_multiple") &&
                    (e
                      .next(".select2")
                      .find(".select2-selection")
                      .addClass("select2_flex"),
                    e
                      .next(".select2")
                      .find(".select2-selection")
                      .prepend(
                        '<span class="text_append text_append2"></span>'
                      ),
                    t(e)),
                    e.prop("disabled") &&
                      e.prop("title") &&
                      (e
                        .next(".select2")
                        .find(".select2-selection")
                        .attr("data-toogle", "tooltip"),
                      e.next(".select2").find(".select2-selection").tooltip()),
                    e.next(".select2").find(".select2-selection__rendered")
                      .length &&
                      void 0 !==
                        e
                          .next(".select2")
                          .find(".select2-selection__rendered")
                          .attr("title") &&
                      e
                        .next(".select2")
                        .find(".select2-selection__rendered")
                        .attr(
                          "title",
                          e
                            .next(".select2")
                            .find(".select2-selection__rendered")
                            .attr("title")
                            .replace(/(<([^>]+)>)/gi, "")
                        );
                }
              }),
              s(e).on("select2:open", function (e) {
                var t = s(this),
                  i = t.parent().find(".select2-search__field");
                t.attr("data-template-class") &&
                  s(
                    ".select2-container--open .select2-results__options"
                  ).addClass(t.attr("data-template-class")),
                  s(".select2-container--open.select2-dropdown-op0").addClass(
                    "select2-dropdown-op1"
                  ),
                  setTimeout(function () {
                    s(".select2-container--open.select2-dropdown-op0").addClass(
                      "select2-dropdown-op1"
                    );
                  }, 100),
                  t.attr("placeholder2") &&
                    i.attr("placeholder", t.attr("placeholder2")),
                  i.on("input", function () {
                    "" !== s(this).val() && s(".select2-dropdown").show();
                  }),
                  t.hasClass("no-container")
                    ? "" === i.val() && s(".select2-dropdown").hide()
                    : (t.hasClass("chosen_on_top") &&
                        (s(".select2-results__options").css("opacity", "0"),
                        icHelper.loaderSpin(".select2-results")),
                      setTimeout(function () {
                        s(
                          ".select2-results .select2-results__options"
                        ).outerHeight() >= 300 &&
                          (s(
                            ".select2-results ul.select2-results__options"
                          ).unbind("mousewheel"),
                          0 === s(".scroll_style").length &&
                            s(
                              '.select2-results ul.select2-results__options[role="listbox"]'
                            ).wrap('<div class="scroll_style"></div>'),
                          t.hasClass("chosen_on_top") &&
                            !s(".select2-dropdown").hasClass(
                              "select2-dropdown--chosentop"
                            ) &&
                            (icHelper.removeLoader(),
                            s(".select2-results__options").css("opacity", "1"),
                            s(".select2-dropdown").addClass(
                              "select2-dropdown--chosentop"
                            ),
                            s(
                              ".select2-dropdown--chosentop .select2-results__options"
                            ).before(
                              s("<ul>", {
                                class: "select2-clone--holder",
                              })
                            ),
                            s(
                              ".select2-results__option[aria-selected='true']"
                            ).each(function () {
                              s("<li>", {
                                class:
                                  "select2-clone--item " +
                                  s(this).attr("class"),
                                text: s(this).text(),
                                id: "clone_" + s(this).attr("data-select2-id"),
                              }).appendTo(".select2-clone--holder"),
                                s("<span>", {
                                  class: "clone-ico--delete",
                                })
                                  .html(
                                    '<svg class="svg-icon hov1" width="17" height="17"><use xlink:href="/svg/all-icons.svg#close2"></use></svg>'
                                  )
                                  .appendTo(
                                    s(
                                      "#clone_" +
                                        s(this).attr("data-select2-id")
                                    )
                                  );
                            })),
                          s(window).width() < 768
                            ? s(".scroll_style").addClass("overflow-auto")
                            : s(".scroll_style").mCustomScrollbar({
                                mouseWheel: !0,
                                advanced: {
                                  updateOnContentResize: !0,
                                },
                              }));
                      }, 300)),
                  t.attr("multiple") &&
                    !s(this).hasClass("no_chb") &&
                    s(".select2-results__option[role=option]")
                      .closest(".select2-container--default")
                      .addClass("select2-container-checkbox"),
                  s(".filter_rent_js").length &&
                    !s(".modal.show").length &&
                    s(".select2-results__option[role=option]").addClass(
                      "select2-results__option--checkbox"
                    );
              }),
              s(document).on(
                "click",
                ".select2-dropdown--chosentop .select2-results__option",
                function () {
                  var t = s(e);
                  0 === s("#clone_" + s(this).attr("data-select2-id")).length
                    ? (s("<li>", {
                        class: "select2-clone--item " + s(this).attr("class"),
                        text: s(this).text(),
                        id: "clone_" + s(this).attr("data-select2-id"),
                      })
                        .removeClass("select2-results__option")
                        .appendTo(".select2-clone--holder"),
                      s("<span>", {
                        class: "clone-ico--delete",
                      })
                        .html(
                          '<svg class="svg-icon hov1" width="17" height="17"><use xlink:href="/svg/all-icons.svg#close2"></use></svg>'
                        )
                        .appendTo(
                          s("#clone_" + s(this).attr("data-select2-id"))
                        ),
                      t.find("option").eq(s(this).index()).prop("selected", !0))
                    : (s("#clone_" + s(this).attr("data-select2-id")).remove(),
                      t
                        .find("option")
                        .eq(s(this).index())
                        .prop("selected", !1));
                }
              ),
              s(document).on(
                "click",
                ".select2-clone--holder .select2-clone--item",
                function () {
                  var e = s(
                    ".select2-dropdown--chosentop [data-select2-id='" +
                      s(this).attr("id").split("clone_").pop() +
                      "']"
                  );
                  e.attr("aria-selected", "false");
                  var t,
                    i = e.index(),
                    n = s(".chosen_on_top + .select2-container--open").prev();
                  0 ===
                    s(".chosen_on_top + .select2-container--open")
                      .prev()
                      .find("option:first")
                      .text().length && (i += 1),
                    (t = s(".chosen_on_top + .select2-container--open")
                      .prev()
                      .find("option")
                      .eq(i)
                      .val());
                  var o = r.grep(n.val(), function (e) {
                    return e && e !== t;
                  });
                  n.val(o),
                    setTimeout(function () {
                      n.change();
                    }, 100),
                    s(this).remove();
                }
              ),
              s(e).on("select2:closing", function (e) {
                s(".select2-container--open.select2-dropdown-op0").removeClass(
                  "select2-dropdown-op1"
                ),
                  s(".scroll_style.mCustomScrollbar").length &&
                    s(".scroll_style.mCustomScrollbar").mCustomScrollbar(
                      "destroy"
                    ),
                  s(this).hasClass("chosen_on_top") &&
                    s(".select2-dropdown").hasClass(
                      "select2-dropdown--chosentop"
                    ) &&
                    (s(".select2-dropdown").removeClass(
                      "select2-dropdown--chosentop"
                    ),
                    s(".select2-clone--holder").detach());
              }),
              s(e).on("select2:select", function () {
                var e = s(this);
                e.hasClass("silent_clear") &&
                  0 === e.siblings(".select2-siletnclear--button").length &&
                  e
                    .parent()
                    .addClass("pos_rel")
                    .append(
                      s("<button>", {
                        class: "select2-siletnclear--button",
                        "data-target": e.attr("id"),
                        click: function () {
                          e.val("").trigger("change"), s(this).remove();
                        },
                        text: "×",
                      })
                    );
              }),
              s(document).on("change", e, function (e) {
                var i = s(this),
                  n = i.parent().find("select").first(),
                  o = i.next(),
                  a = o.find(".select2-selection__choice").length,
                  l = i.attr("data-text") || "выбрано";
                o.find(".select2-selection__rendered").attr("title");
                if (
                  ((n.val() && n.val().length > 0) || a > 0
                    ? t(i, l, a)
                    : (o.removeClass("selected_change"),
                      i.hasClass("select_multiple") &&
                        o.find(".text_append2").html("")),
                  i.hasClass("select_multiple_js"))
                ) {
                  var r,
                    c = i.next().find(".select2-selection__rendered"),
                    d = c.find(".select2-selection__choice"),
                    h = c.width() - 38,
                    u = 0,
                    p = +d.length,
                    f = !1;
                  i.hasClass("marker_number") && (f = !0),
                    d.removeClass("d-none"),
                    d.each(function (e) {
                      (u = u + s(this).outerWidth() + 5),
                        c.find("d-none").removeClass("d-none"),
                        h < u
                          ? (s(this).addClass("d-none"),
                            (r = c.find(
                              ".select2-selection__choice.d-none"
                            ).length),
                            c.find(".select2-selection_dop_el").length
                              ? c
                                  .find(".select2-selection_dop_el")
                                  .html("+" + r)
                              : f
                              ? c
                                  .find(".select2-search")
                                  .before(
                                    '<li class="select2-selection_dop_el">' +
                                      r +
                                      "</li>"
                                  )
                              : c
                                  .find(".select2-search")
                                  .before(
                                    '<li class="select2-selection_dop_el">+' +
                                      r +
                                      "</li>"
                                  ))
                          : p - 1 == e &&
                            c.find("select2-selection_dop_el").remove();
                    });
                }
                o.find(".select2-selection__clear").length &&
                  o.find(".select2-selection__clear").attr("title", "Удалить");
              }),
              s(document).on("click", ".select_clear", function () {
                s(this).siblings("select").val(null).trigger("change");
              });
          },
          animateTopAutchOpen: function () {
            s(".autch_dropdown_menu_inner").length &&
              s(".autch_dropdown_menu").css(
                "height",
                s(".autch_dropdown_menu_inner").height()
              );
          },
          fonHeight: function () {
            if (
              (s("#fon_lk").length &&
                (s("#panel_lk").length &&
                  s(".particles_bg").height(
                    s("#panel_lk").outerHeight() / 2 +
                      s("#panel_lk").offset().top
                  ),
                s("#panel_lk2").length &&
                  s(".particles_bg").height(
                    170 + s("#panel_lk2").offset().top
                  )),
              s("#fon_main0").length &&
                s(".particles_bg").height(s("#fon_main0").offset().top),
              s("#fon_main").length &&
                s(window).width() >= 768 &&
                s(".particles_bg").height(25 + s("#fon_main").offset().top),
              s("#fon_main2").length &&
                s(window).width() < 768 &&
                s(".particles_bg").height(25 + s("#fon_main2").offset().top),
              s("#fon_second").length &&
                s(".particles_bg").height(
                  s("#fon_second").height() + s("#fon_second").offset().top + 72
                ),
              s("#fon_second2").length)
            ) {
              var e = 0;
              s(".fon_second_mob").length &&
                s(window).width() < 768 &&
                (e = +s(".fon_second_mob").attr("data-heightmob")),
                document.getElementById("manage_intellectual_property1") &&
                  (e +=
                    document.querySelectorAll(
                      ".manage_intellectual_property"
                    )[0].offsetHeight / 2),
                s(".particles_bg").height(
                  s("#fon_second2").outerHeight() +
                    s("#fon_second2").offset().top +
                    e
                );
            }
            if (s("#fon_second3").length) {
              e = 70;
              s(".pl_tehnologii").length &&
                (e = +s(".pl_tehnologii .img_over").height() / 2),
                s(".dop_height_js").length &&
                  (e = +s(".dop_height_js").outerHeight() / 2),
                s(".particles_bg").height(
                  s("#fon_second3").outerHeight() +
                    s("#fon_second3").offset().top +
                    e
                );
            }
            s(".particles_bg").removeClass("op0");
          },
          collapseText: function () {
            s(".collapse_div_js").on("hidden.bs.collapse", function () {
              var e = s('.collapse_btn_js[href="#' + s(this).attr("id") + '"]');
              e.find(".sp_text").html(e.attr("data-text1")),
                e.removeClass("collaps_open");
            }),
              s(".collapse_div_js").on("shown.bs.collapse", function () {
                var e = s(
                  '.collapse_btn_js[href="#' + s(this).attr("id") + '"]'
                );
                e.find(".sp_text").html(e.attr("data-text2")),
                  e.addClass("collaps_open");
              });
          },
          logoProcent: function () {
            if (s(".circle_logo").length) {
              var e = {
                color: "#ec4647",
              };
              if ((t = s(".circle_logo").attr("data-value")) >= 0.4 && t < 0.9)
                e = {
                  color: "#f2ce73",
                };
              else if (t >= 0.9)
                e = {
                  color: "#00b55c",
                };
              s(".circle_logo").circleProgress({
                fill: e,
                thickness: 4,
                startAngle: -1.5,
              });
            }
            if (s(".circle_pp").length) {
              var t = s(".circle_pp").attr("data-value");
              e = {
                color: "#EC4647",
              };
              s(".circle_pp").circleProgress({
                emptyFill: "rgba(0, 0, 0, .0)",
                fill: e,
                thickness: 4,
                startAngle: -1.57,
              });
            }
          },
          numberAnimation: function (e) {
            if (void 0 === e) var t = s(".num_anim");
            else t = s(e);
            (s(".num_anim").length || t.length) &&
              t.each(function (e) {
                var t = s(this),
                  i = s(this).text(),
                  n = !0;
                parseFloat(s(this).text()) != s(this).text()
                  ? t.removeClass("num_anim")
                  : (s(window).scrollTop() >
                      t.offset().top - s(window).height() &&
                      n &&
                      ((n = !1),
                      s({
                        numberValue: 0,
                      }).animate(
                        {
                          numberValue: i,
                        },
                        {
                          duration: 1e3,
                          easing: "linear",
                          step: function (e) {
                            t.html(Math.ceil(e));
                          },
                        }
                      )),
                    s(window).scroll(function () {
                      s(window).scrollTop() >
                        t.offset().top - s(window).height() &&
                        n &&
                        ((n = !1),
                        s({
                          numberValue: 0,
                        }).animate(
                          {
                            numberValue: i,
                          },
                          {
                            duration: 1200,
                            easing: "linear",
                            step: function (e) {
                              t.html(Math.ceil(e));
                            },
                          }
                        ));
                    }));
              });
          },
          blockAnimation: function () {
            if (
              (s(".block_animate").length &&
                s(".block_animate").each(function (e) {
                  var t = s(this),
                    i = new c.Controller();
                  new c.Scene({
                    triggerElement: t[0],
                    triggerHook: 1,
                    duration: "150%",
                    offset: 50,
                  })
                    .setClassToggle(t[0], "visible")
                    .addTo(i);
                }),
              s(".blokcheyn_all").length)
            ) {
              s(".blokcheyn_menu a").each(function (e) {
                var t = s(this),
                  i = s(s(this).attr("href")),
                  n = (i.outerHeight(), new c.Controller());
                new c.Scene({
                  triggerElement: i[0],
                })
                  .addTo(n)
                  .on("progress", function (e) {
                    t.addClass("active"),
                      t.hasClass("blokcheyn_ml2")
                        ? (t
                            .closest(".blokcheyn_menu_child")
                            .parent()
                            .find(".blokcheyn_ml1")
                            .addClass("active"),
                          t.parent().siblings().find("a").removeClass("active"),
                          t
                            .closest(".blokcheyn_menu_child")
                            .parent()
                            .siblings()
                            .find(".blokcheyn_ml1")
                            .removeClass("active"))
                        : (t
                            .parent()
                            .siblings()
                            .find(".blokcheyn_ml1")
                            .removeClass("active"),
                          t
                            .parent()
                            .find(".blokcheyn_ml2")
                            .removeClass("active"));
                  });
              });
              var e = new c.Controller();
              new c.Scene({
                triggerElement: ".blokcheyn_rating_wrap",
              })
                .reverse(!1)
                .addTo(e)
                .on("enter", function (e) {
                  s(".blokcheyn_rating").addClass("active"),
                    s(".blokcheyn_rating .dt").each(function (e) {
                      var t = s(this);
                      setTimeout(function () {
                        s(".div_zvezda_big").addClass("active"),
                          s(".blokcheyn_rating_row .div_el")
                            .eq(e)
                            .addClass("active"),
                          t.addClass("active active_last"),
                          setTimeout(function () {
                            var i;
                            t.removeClass("active_last"),
                              (i = e < 4 ? 3 + e / 3.2 : e),
                              s(".div_zvezda_big .div_img1").css(
                                "height",
                                (100 / 12) * i + "%"
                              ),
                              s(".div_zvezda_big .div_num").text(
                                +s(".div_zvezda_big .div_num").text() +
                                  +s(".blokcheyn_rating .dt")
                                    .eq(e)
                                    .find(".div_tit")
                                    .text()
                                    .replace("+", "")
                              ),
                              s(".div_zvezda_big").removeClass("active");
                          }, 500);
                      }, 1e3 * e);
                    });
                });
            }
          },
          blockAnimation2: function () {
            ((s(window).width() >= 768 &&
              s(".sidebar_js").length &&
              !s(".sidebar991").length) ||
              (s(window).width() > 991 && s(".sidebar991").length)) &&
              s(".sidebar_js").theiaStickySidebar({
                additionalMarginTop: 10,
              });
          },
          blockAnimationPosition: function () {
            s(".animate_div").length &&
              s(".animate_div").each(function (e) {
                var t = s(this),
                  i = new c.Controller(),
                  n = 1;
                s(this).hasClass("animate_triger") &&
                  s(this).hasClass("animate_triger") &&
                  t.outerHeight() < document.documentElement.clientHeight &&
                  (n =
                    1 -
                    t.outerHeight() / document.documentElement.clientHeight),
                  new c.Scene({
                    triggerElement: t[0],
                    triggerHook: n,
                    offset: 50,
                  })
                    .setClassToggle(t[0], "animate")
                    .reverse(!1)
                    .addTo(i);
              });
          },
          addClassScroll: function () {
            u(document.querySelectorAll(".anim_scroll_js")).map(function (e) {
              var t = e.getAttribute("data-position")
                  ? e.getAttribute("data-position")
                  : "bottom",
                i =
                  !!e.getAttribute("data-loop") && e.getAttribute("data-loop"),
                n = e.getAttribute("data-top")
                  ? +e.getAttribute("data-top")
                  : 0;
              "top" != t && (n = document.documentElement.clientHeight - n),
                window.addEventListener("scroll", function () {
                  e.getBoundingClientRect().top + window.pageYOffset <
                  window.pageYOffset + n
                    ? e.classList.add("is_intersecting")
                    : i && e.classList.remove("is_intersecting");
                });
            });
          },
          cookie: {
            getCookie: function (e) {
              var t = document.cookie.match(
                new RegExp(
                  "(?:^|; )" +
                    e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                    "=([^;]*)"
                )
              );
              return t ? decodeURIComponent(t[1]) : void 0;
            },
            setCookie: function (e, t, i) {
              var n = (i = i || {}).expires;
              if ("number" == typeof n && n) {
                var o = new Date();
                o.setTime(o.getTime() + 1e3 * n), (n = i.expires = o);
              }
              n && n.toUTCString && (i.expires = n.toUTCString());
              var a = e + "=" + (t = encodeURIComponent(t));
              for (var l in i) {
                a += "; " + l;
                var s = i[l];
                !0 !== s && (a += "=" + s);
              }
              document.cookie = a;
            },
            deleteCookie: function (e) {
              icHelper.cookie.setCookie(e, "", {
                expires: -1,
              });
            },
          },
          getProfileInfo: function (e) {
            s.ajax({
              url: Routing.generate("profileInfo"),
              global: !0,
              method: "POST",
            }).done(function (t) {
              "function" == typeof e && e(t);
            });
          },
          textLength: function () {
            var e = ".text_length";
            s(e).length &&
              (s(e).each(function (t) {
                var i = s(this),
                  n = i.val().length;
                s(e).hasClass("text_length2") &&
                  (n = i.attr("data-max") - i.val().length),
                  i.closest(".counter_textare").find(".sp1").text(n);
              }),
              s(document).on(
                "keypress input blur paste",
                ".text_length",
                function () {
                  var t = s(this),
                    i = t.attr("data-max"),
                    n = t.val().length;
                  if (
                    (s(e).hasClass("text_length2") &&
                      ((i = 0), (n = t.attr("data-max") - t.val().length)),
                    t.closest(".counter_textare").find(".sp1").text(n),
                    s(e).hasClass("text_length2") && (n = -n),
                    !(n < i))
                  ) {
                    t.closest(".counter_textare").addClass("red_num");
                    var o = t.val().substring(0, i);
                    return t.val(o), !1;
                  }
                  t.closest(".counter_textare").removeClass("red_num");
                }
              )),
              s(".input_length").length &&
                (s(".input_length").each(function () {
                  var e = s(this),
                    t = +e.css("max-width").replace("px", ""),
                    i = e.val().length;
                  e.attr("data-mw", t),
                    t < 8.6 * i
                      ? e.addClass("max_width_inp")
                      : e.removeClass("max_width_inp");
                }),
                s(document).on(
                  "keypress input blur paste",
                  ".input_length",
                  function () {
                    var e = s(this);
                    +e.attr("data-mw") < 8.6 * e.val().length
                      ? e.addClass("max_width_inp")
                      : e.removeClass("max_width_inp");
                  }
                ));
          },
          navbarMenu: function () {
            s(document).on("click", ".close_js", function () {
              s(this).closest(".close_hide").remove();
            });
          },
          fix_button0: function () {
            s(".modal.show .modal_scroll_js").length &&
            s(".modal.show .modal-dialog").outerHeight() +
              2 * parseInt(s(".modal.show > .modal-dialog").css("margin-top")) >
              s(window).height()
              ? setTimeout(function () {
                  s(".modal.show").addClass("fix_btn_modal");
                  var e = 0;
                  s(".modal.show .modal_title").length &&
                    (e += s(".modal.show .modal_title").outerHeight()),
                    s(".modal.show .modal_scroll_js_h1").length &&
                      (e += s(".modal.show .modal_scroll_js_h1").outerHeight()),
                    s(".modal.show .modal_scroll_js").css(
                      "height",
                      s(window).height() -
                        s(".modal.show .modal-header").outerHeight() -
                        30 -
                        180 -
                        e
                    ),
                    s(".modal.show .modal_scroll_js").mCustomScrollbar({
                      advanced: {
                        updateOnContentResize: !0,
                      },
                    }),
                    s(".modal.show .modal_scroll_js").removeClass("op0");
                }, 300)
              : s(".modal.show .modal_scroll_js").length &&
                s(".modal.show .modal_scroll_js").removeClass("op0");
          },
          fix_button_start0: function () {
            icHelper.fix_button0(),
              s(".modal").on("shown.bs.modal", function () {
                icHelper.fix_button0();
              }),
              s(".modal").on("hidden.bs.modal", function () {
                s(".modal").removeClass("fix_btn_modal"),
                  s(".modal .modal_scroll_js").length &&
                    (s(".modal .modal_scroll_js").mCustomScrollbar("destroy"),
                    s(".modal .modal_scroll_js").addClass("op0"),
                    s(".modal .modal_scroll_js").attr("style", ""));
              });
          },
          fix_button: function () {
            if (s(".modal.show").length && s(".modal.show .modal_btn").length) {
              var e = s(".modal.show").height(),
                t = s(".modal.show > .modal-dialog").height(),
                i = parseInt(
                  s(".modal.show > .modal-dialog").css("margin-bottom")
                ),
                n = s(".modal.show").scrollTop();
              e < t + i
                ? t - n - e + 10 < 0
                  ? s(".modal.show").removeClass("mbfp")
                  : s(".modal.show").addClass("mbfp")
                : s(".modal.show").removeClass("mbfp");
            }
          },
          fix_button_start: function () {
            icHelper.fix_button(),
              s(".modal.show").scroll(function () {
                icHelper.fix_button();
              }),
              s(".modal").on("shown.bs.modal", function () {
                icHelper.fix_button();
              }),
              s(".modal").on("hidden.bs.modal", function () {
                s(".modal").removeClass("mbfp");
              });
          },
          mcustomScroll: function (e) {
            if (void 0 === e) {
              if (
                ((e = ".scrollbar_js:not(.mCustomScrollbar)"),
                s(window).width() < 768)
              )
                return s(e).addClass("overflow-auto"), !1;
              if (s(window).width() < 991 && s(e).hasClass("notscroll991"))
                return s(e).removeClass("overflow-auto"), !1;
            }
            var t = !1;
            "true" == s(e).attr("data-hide") && (t = !0),
              s(e).mCustomScrollbar({
                mouseWheel: !0,
                autoHideScrollbar: t,
                callbacks: {
                  onInit: function () {
                    s(this).hasClass("scrollbar_ten") &&
                      s(this).addClass("ten_right");
                  },
                  onScrollStart: function () {
                    s(this).hasClass("scrollbar_ten") &&
                      s(this).addClass("ten_left ten_right");
                  },
                  onTotalScroll: function () {
                    s(this).hasClass("scrollbar_ten") &&
                      s(this).removeClass("ten_right");
                  },
                  onTotalScrollBack: function () {
                    s(this).hasClass("scrollbar_ten") &&
                      s(this).removeClass("ten_left");
                  },
                },
                advanced: {
                  updateOnContentResize: !0,
                },
              });
          },
          mcustomScrollResize: function () {
            s(".notscroll991").length &&
              (s(window).width() < 991
                ? (s(".notscroll991").removeClass("overflow-auto"),
                  s(".notscroll991.mCustomScrollbar").mCustomScrollbar(
                    "destroy"
                  ))
                : s(".notscroll991").hasClass("mCustomScrollbar") ||
                  (s(".notscroll991").addClass("overflow-auto"),
                  icHelper.mcustomScroll(".notscroll991")));
          },
          headnavbar: function () {
            var e = 0;
            s(window).scroll(function () {
              var t = s(this).scrollTop(),
                i = s(".site_header").height();
              i > 90 && (i = 90),
                t > i
                  ? s("body").addClass("hide_menu")
                  : s("body").removeClass("hide_menu"),
                e > t && s("body").removeClass("hide_menu"),
                (e = t),
                s(".header_gradient_scroll").length &&
                  (t > 150
                    ? s("body").removeClass("header_gradient")
                    : s("body").addClass("header_gradient"));
            }),
              s(".header_gradient").length &&
                s("body").addClass("header_gradient_scroll");
          },
          showVideoClick: function () {
            s(".show_video_js").click(function () {
              return (
                s("#siteModalVideo").modal("show"),
                s("#video_cluster").trigger("play"),
                s("#siteModalVideo").on("hide.bs.modal", function (e) {
                  s("#video_cluster").trigger("pause");
                }),
                !1
              );
            });
          },
          tooltipJs: function () {
            var e = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
            s('.tooltip_not_767[data-toggle="tooltip"]').length &&
              e &&
              s('.tooltip_not_767[data-toggle="tooltip"]').removeAttr(
                "data-toggle"
              ),
              s(window).width() < 991
                ? (s('[data-toggle="tooltip"]').tooltip({
                    template:
                      '<div class="tooltip tooltip_st" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                    placement: "auto",
                  }),
                  s('[data-toggle="custom"]').tooltip({
                    template:
                      '<div class="tooltip tooltip_st" role="tooltip"><div class="arrow"></div><div class="tooltip-inner customArea"></div></div>',
                    html: !0,
                    placement: "auto",
                  }),
                  s('[data-toggle="tooltipBig"]').tooltip({
                    template:
                      '<div class="tooltip tooltip_big" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                    placement: "auto",
                  }),
                  s('[data-toggle="tooltipBig2"]').tooltip({
                    template:
                      '<div class="tooltip tooltip_big tooltip_big2" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                    placement: "auto",
                  }))
                : (s('[data-toggle="tooltip"]').tooltip({
                    template:
                      '<div class="tooltip tooltip_st" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                  }),
                  s('[data-toggle="custom"]').tooltip({
                    template:
                      '<div class="tooltip tooltip_st" role="tooltip"><div class="arrow"></div><div class="tooltip-inner customArea"></div></div>',
                    html: !0,
                  }),
                  s('[data-toggle="tooltipBig"]').tooltip({
                    template:
                      '<div class="tooltip tooltip_big" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                  }),
                  s('[data-toggle="tooltipBig2"]').tooltip({
                    template:
                      '<div class="tooltip tooltip_big tooltip_big2" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                  }),
                  s('[data-toggle="tooltipBig4"]').tooltip({
                    template:
                      '<div class="tooltip tooltip_big tooltip_big4" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                  }));
          },
          tooltipHideModal: function () {
            s(".modal").on("show.bs.modal", function () {
              s('*[data-toggle="tooltip"]').tooltip("hide");
            }),
              s(document).on(
                "click",
                '.nav-item[data-toggle="tooltip"] a',
                function () {
                  s(this).parent("li").tooltip("hide");
                }
              );
          },
          dropdownTableTdFilter: function () {
            s(document).on(
              "click",
              ".dropdown_select_table_js > li",
              function () {
                var e = s(this).attr("data-num"),
                  t = s(this).closest(".dropdown_select_table_js");
                if (
                  (s(this).toggleClass("active"),
                  s(this)
                    .closest(".select_table_js")
                    .toggleClass("none_stolbick" + e),
                  t.hasClass("dropdown_select_cont_js"))
                ) {
                  var i = t.attr("data-cont"),
                    n = [];
                  t.find("li").each(function (e) {
                    s(this).hasClass("active") ||
                      n.push(s(this).attr("data-num"));
                  }),
                    s(this).closest(i).attr("data-hide-el", n);
                }
              }
            );
          },
          rangeDpopdawn: function () {
            s(".slider-range:not(.ui-slider)").each(function () {
              var e = s(this),
                t = e.closest(".dropdown"),
                i = [];
              i.push(e.attr("data-min")),
                i.push(e.attr("data-max")),
                e.slider({
                  range: !0,
                  min: +i[0],
                  max: +i[1],
                  values: i,
                  slide: function (e, i) {
                    t
                      .find(".ui-slider-range + .ui-slider-handle")
                      .html(
                        '<span class="handle_num">' + i.values[0] + "</span>"
                      ),
                      t
                        .find(".ui-slider-handle:last-child")
                        .html(
                          '<span class="handle_num">' + i.values[1] + "</span>"
                        );
                  },
                }),
                t
                  .find(".ui-slider-range + .ui-slider-handle")
                  .html('<span class="handle_num">' + i[0] + "</span>"),
                t
                  .find(".ui-slider-handle:last-child")
                  .html('<span class="handle_num">' + i[1] + "</span>");
            });
          },
          rangeDpopdawnBtn: function () {
            s(document).on("click", ".range_clear_js", function () {
              var e = s(this).closest(".dropdown"),
                t = [];
              t.push(e.find(".slider-range").attr("data-min")),
                t.push(e.find(".slider-range").attr("data-max")),
                e.find(".sp_placeholder").removeClass("d-none"),
                e.find(".sp_text").text(""),
                e.find(".range_inp1").val(+t[0]),
                e.find(".range_inp2").val(+t[1]),
                e
                  .find(".ui-slider-range + .ui-slider-handle")
                  .html('<span class="handle_num">' + t[0] + "</span>"),
                e
                  .find(".ui-slider-handle:last-child")
                  .html('<span class="handle_num">' + t[1] + "</span>"),
                e.find(".slider-range").slider("values", t),
                e.find(".dropdown-range").click();
            }),
              s(document).on("click", ".range_submit_js", function () {
                var e = s(this).closest(".dropdown");
                e.find(".sp_placeholder").addClass("d-none"),
                  e
                    .find(".sp_text")
                    .text(
                      e.find(".ui-slider-range + .ui-slider-handle").text() +
                        " - " +
                        e.find(".ui-slider-handle:last-child").text()
                    ),
                  e
                    .find(".range_inp1")
                    .val(
                      +e.find(".ui-slider-range + .ui-slider-handle").text()
                    ),
                  e
                    .find(".range_inp2")
                    .val(+e.find(".ui-slider-handle:last-child").text()),
                  e.find(".dropdown-range").click();
              });
          },
          dropdowNotClose: function () {
            s(document).on("click", ".dropdown-menu.keepopen", function (e) {
              e.stopPropagation();
            });
          },
          filterDisabled: function () {
            s(document).on("click", ".close_filter_js", function (e) {
              s(this).closest(".filter_blue").length;
              var t = s(this).closest(".filter_all");
              t.find(".div_radiogr").length &&
                !t
                  .find(".div_radiogr label:first-child input")
                  .prop("checked") &&
                t.find(".div_radiogr label:first-child input").click(),
                t.find(".form-control").length &&
                  t.find(".form-control").each(function () {
                    s(this).val("");
                  }),
                t.find(".select_js").length &&
                  s(".select_js").val(null).trigger("change"),
                t.find(".dropdown-range .sp_placeholder.d-none").length &&
                  t.find(".range_clear_js").click();
            });
          },
          filterChange: function () {
            s(".filter_block").length &&
              (s(".filter_block .select_js").on(
                "select2:closing",
                function (e) {
                  icHelper.quantityFilterChange(
                    s(this).closest(".filter_block")
                  );
                }
              ),
              s(document).on(
                "click",
                ".filter_block .close_filter_js, .filter_block .range_clear_js, .filter_block .range_submit_js, .filter_block .div_radiogr input",
                function (e) {
                  icHelper.quantityFilterChange(
                    s(this).closest(".filter_block")
                  );
                }
              ));
          },
          quantityFilterChange: function (e) {
            var t = 0;
            if (e.find(".select2-selection__clear").length)
              t = e.find(".select2-selection__clear").length;
            e.find(".range_mod").length &&
              e.find(".range_mod .sp_placeholder").hasClass("d-none") &&
              (t += e.find(".range_mod .sp_placeholder.d-none").length),
              e.find(".div_radiogr").length &&
                e.find(".div_radiogr").each(function () {
                  s(this).find("label:first-child input").prop("checked") ||
                    (t += 1);
                });
            var i = s(
              '.filter_block_a[href="#' + e.attr("id") + '"] .filter_block_num'
            );
            0 == t
              ? i.addClass("d-none")
              : (i.text(t), i.removeClass("d-none"));
          },
          clickInputAppend: function () {
            s(document).on(
              "click",
              "div.input-group .input-group-append",
              function (e) {
                s(this).closest(".input-group").find("input").focus();
              }
            );
          },
          cangeFileAdd: function () {
            s(document).on(
              "change",
              ".custom-file2 .custom-file-input",
              function (e) {
                var t = this;
                if ("" !== s(this).val()) {
                  if (s(this).data().fileext) {
                    var i = !0;
                    if (
                      (Array.from(this.files).forEach(function (e) {
                        icHelper.checkFileExt(e, s(t).data().fileext) ||
                          (i = !1);
                      }),
                      !i)
                    )
                      return;
                  }
                  var n = e.target.files,
                    o = s(this).closest(".custom-file2"),
                    a = "";
                  o.next("small").length && (o = o.next("small")),
                    s(this).data("target") &&
                      "" != s(this).attr("data-target") &&
                      ((o = s(s(this).attr("data-target"))),
                      (a = s(this).attr("data-target"))),
                    o.hasClass("custom-file2-podpis")
                      ? (o.find(".div_file_add").addClass("cf_active"),
                        o.find(".file_el").remove(),
                        s.each(n, function (e, t) {
                          o.find(".file_complite2").prepend(
                            '<div class="file_el file_el2"><div class="file_td1"><div class="file_ico"><i class="material-icons">subject</i></div></div><div class="file_td2"><div class="file_tit"><span class="f_t">' +
                              t.name.split(".").shift() +
                              ' </span><a class="help-ico" data-title="После создания контракта документ должен быть подписан обеими сторонами" data-toggle="tooltip"></a></div><div class="file_size">3.2 Mb</div></div><div class="file_td3"><div class="btn_type2 delite_file_podpis" data-target="' +
                              a +
                              '"><div class="btn_ico"><i class="material-icons">close</i></div></div></div></div>'
                          );
                        }))
                      : (o.next(".file_el").remove(),
                        s.each(n, function (e, t) {
                          o.after(
                            '<div class="file_el"><div class="file_td1"><div class="file_ico"><i class="material-icons">subject</i></div></div><div class="file_td2"><div class="file_tit">' +
                              t.name.split(".").shift() +
                              '</div><span class="file_text1">' +
                              t.name.split(".").pop() +
                              '</span></div><div class="file_td2 file_td2_del"><span class="delete_file krug_del" data-target="' +
                              a +
                              '"><i class="material-icons">clear</i></span></div></div>'
                          );
                        }));
                }
              }
            ),
              s(document).on("click", ".delete_file", function (e) {
                var t = s(this).attr("data-target");
                "" != t
                  ? s('.custom-file-input[data-target="' + t + '"]')
                      .val("")
                      .change()
                  : (s(this)
                      .parents(".form-group")
                      .find(".custom-file-input")
                      .val("")
                      .change(),
                    s(this)
                      .parents(".fileinput-text-js")
                      .find("#request_comment_file")
                      .val("")
                      .change()),
                  s(this).parents(".file_el").remove();
              }),
              s(document).on("click", ".delite_file_podpis", function (e) {
                var t = s(this).attr("data-target");
                "" != t
                  ? s('.custom-file-input[data-target="' + t + '"]')
                      .val("")
                      .change()
                  : s(this)
                      .closest(".custom-file2-podpis")
                      .find(".custom-file-input")
                      .val("")
                      .change(),
                  s(this).closest(".cf_active").removeClass("cf_active");
              }),
              s(document).on("change", ".file_table_js", function (e) {
                if ("" !== s(this).val()) {
                  var t = e.target.files,
                    i = s(this).closest(".fileinput-button"),
                    n = i.parent().prev();
                  i.addClass("d-none"),
                    i.parent().parent().addClass("active"),
                    i.next().hasClass("delete_file2")
                      ? i.next().removeClass("d-none")
                      : i.after(
                          '<button class="btn btn2-light delete_file2">Удалить</button>'
                        ),
                    s.each(t, function (e, t) {
                      n.html(
                        '<div class="file_el"><div class="file_td1"><div class="file_ico"><i class="material-icons">subject</i></div></div><div class="file_td2"><div class="file_tit">' +
                          t.name.split(".").shift() +
                          '</div><span class="file_text1">' +
                          t.name.split(".").pop() +
                          "</span></div></div>"
                      );
                    });
                }
              }),
              s(document).on("click", ".delete_file2", function (e) {
                var t = s(this);
                t.addClass("d-none"),
                  t.parent().parent().removeClass("active"),
                  t.parent().find(".fileinput-button").removeClass("d-none"),
                  t.parent().find(".custom-file-input").val(""),
                  t.parent().prev().html("");
              });
          },
          fotoGalery: function () {
            if (s(".foto_wrap").length) {
              s(".foto_wrap").css("width", s(".foto_wrap").width());
              var e = s(".slider_foto_for"),
                t = 4;
              e.slick({
                draggable: !1,
                arrows: !1,
                autoplay: !1,
              }),
                s(".slider_foto_nav").hasClass("slider_foto_nav1") && (t = 5),
                s(".slider_foto_nav").slick({
                  slidesToShow: t,
                  slidesToScroll: t,
                  infinite: !1,
                  vertical: !0,
                  prevArrow:
                    '<button type="button" class="slick-prev"><i class="material-icons">keyboard_arrow_up</i></button>',
                  nextArrow:
                    '<button type="button" class="slick-next"><i class="material-icons">keyboard_arrow_down</i></button>',
                }),
                s(".foto_wrap").removeClass("op0");
              var i = s(".slider_foto_nav .div_item");
              e.on("beforeChange", function (e, t, n, o) {
                i.removeClass("active")
                  .filter("[data-count='" + o + "']")
                  .addClass("active");
              }),
                i.on("click", function () {
                  var t = s(this).data("count");
                  e.slick("slickGoTo", t);
                }),
                s(document).on("click", "#slider_add", function () {
                  s(this).closest(".not_arrows").removeClass("not_arrows");
                }),
                s(window).on("resize", function () {
                  s(".foto_wrap").css("width", "auto"),
                    s(".foto_wrap").css("width", s(".foto_wrap").width());
                });
            }
          },
          slickModalGal: function () {
            s(".slick_modal_list") &&
              (s("#modal_gal_slick").length ||
                setTimeout(function () {
                  s(".slick_modal_list").prepend(
                    '<div id="modal_gal_slick" class="d-none"><div class="slider_two_div gal_modal_foto_js2 op0" data-number="0"><div class="slide_stand slide2 slider-for slider-for-mod"></div><div class="slide_stand slider-nav slider-nav-mod"></div></div></div>'
                  ),
                    (s(".slick_modal_list").hasClass("slick-initialized")
                      ? s(
                          ".slick_modal_list .slick-slide:not(.slick-cloned) .slick_modal"
                        )
                      : s(".slick_modal_list .slick_modal")
                    ).each(function () {
                      var e = s(this).attr("href");
                      s("#modal_gal_slick .slider-for-mod").append(
                        '<div><div class="div_img"><img src="' +
                          e +
                          '"></div></div>'
                      ),
                        s("#modal_gal_slick .slider-nav-mod").append(
                          '<div><div class="div_img"><img src="' +
                            e +
                            '"></div></div>'
                        );
                    });
                }, 600),
              s("#siteModal").on("shown.bs.modal", function () {
                if (s(".modal.show .gal_modal_foto_js2").length) {
                  var e = 0;
                  s(".modal.show .gal_modal_foto_js2").attr("data-number") &&
                    (e = Number(
                      s(".modal.show .gal_modal_foto_js2").attr("data-number")
                    )),
                    s("#siteModal .slider-for-mod").length &&
                      (s("#siteModal .slider-for-mod")
                        .not(".slick-initialized")
                        .slick({
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          adaptiveHeight: !0,
                          fade: !0,
                          dots: !1,
                          asNavFor: "#siteModal .slider-nav-mod",
                          initialSlide: e,
                          infinite: !0,
                          prevArrow:
                            '<button type="button" class="slick-prev"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_before"></use></svg></button>',
                          nextArrow:
                            '<button type="button" class="slick-next"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_next"></use></svg></button>',
                          responsive: [
                            {
                              breakpoint: 767,
                              settings: {
                                arrows: !1,
                              },
                            },
                          ],
                        }),
                      s("#siteModal .slider-nav-mod")
                        .not(".slick-initialized")
                        .slick({
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          asNavFor: "#siteModal .slider-for-mod",
                          variableWidth: !0,
                          initialSlide: e,
                          dots: !1,
                          arrows: !1,
                          focusOnSelect: !0,
                          infinite: !1,
                          centerMode: !0,
                        })),
                    setTimeout(function () {
                      s(".modal  .slider-for-mod").slick("setPosition"),
                        s(".modal.show .gal_modal_foto_js2").removeClass("op0");
                    }, 150);
                }
              }),
              s(document).on("click", ".slick_modal", function (e) {
                e.preventDefault(),
                  s("#modal_gal_slick")
                    .find(".gal_modal_foto_js2")
                    .attr("data-number", s(this).attr("data-number")),
                  icHelper.showModal(
                    s("#modal_gal_slick").html(),
                    void 0,
                    void 0,
                    "slider_two_modal"
                  );
              }));
          },
          grid4col: function () {
            if (s(".grid4col_js").length) {
              var e = s(".grid4col_js > .pag1a"),
                t = s(".grid4col_js > .pag1b"),
                i = s("#grid4col_cont"),
                n = i.parent();
              s(window).width() < 991
                ? n.hasClass("pag1a") || e.prepend(i)
                : n.hasClass("pag1b") || t.prepend(i);
            }
          },
          navTabsSelect: function (e) {
            e.closest(".nav-tabs-radio").toggleClass("nav-tabs-radio-show");
          },
          profilePunctLoader: function () {
            s(document).on(
              "click",
              ".profile_menu .profile_punct",
              function () {
                s(".profile_menu .ico-menu img").removeClass("op0"),
                  icHelper.removeLoader(),
                  s(this).find("img").addClass("op0"),
                  icHelper.loaderSpin(s(this).find(".ico-menu"));
              }
            );
          },
          profileRightMenu: function () {
            s(".profile_body .profile_menu_select_dropdown").length &&
              s(window).width() <= 991 &&
              (s(".profile_menu_select_dropdown").html(
                s(".profile_menu").html()
              ),
              s("#profile_menu_select_img").attr(
                "src",
                s(".profile_menu .profile_punct.active img").attr("src")
              ),
              s(".profile_menu_select_wrap").removeClass("op0"));
          },
          checkPosition: function (e) {
            var t = s(e),
              i = t.offset(),
              n = i.top,
              o = i.left,
              a = t.width(),
              l = t.height(),
              r = s(document).scrollTop(),
              c = s(document).scrollLeft(),
              d = s(window).width(),
              h = s(window).height();
            return o >= c && o + a <= d + c && n >= r && n + l <= h + r;
          },
          searchReset: function () {
            s(".search_js").length &&
              "" !== s(".search_js .form-control").val() &&
              s(".search_js .btn-close").removeClass("d-none"),
              s(document).on("input", ".search_js .form-control", function (e) {
                "" !== s(this).val()
                  ? s(this).siblings(".btn-close").removeClass("d-none")
                  : s(this).siblings(".btn-close").addClass("d-none");
              });
          },
          getParam: function (e) {
            if (void 0 === e) return null;
            var t = window.location.href;
            return new URL(t).searchParams.get(e);
          },
          btnCollapsFocus: function () {
            s(".collaps_focus_js .collapse").on(
              "shown.bs.collapse",
              function () {
                var e = s(window).scrollTop();
                if ((t = s(this).closest(".card").offset().top) < e)
                  var t = t - s(".site_header").outerHeight();
                s("html").animate(
                  {
                    scrollTop: t,
                  },
                  500
                );
              }
            );
          },
          profileBodyClass: function () {
            s(".profile_cont").length &&
              (s("body").addClass("profile_body"),
              s("html").addClass("profile_html")),
              s("body").hasClass("profile_body") &&
                s(window).width() <= 767 &&
                (s(".hc_dt4 .menu_levl2").prepend(s("#accordion_prof_menu")),
                s(".hc_dt4 .menu_levl2").prepend(
                  '<div class="menu_el menu_el_dropdown open_div">Личный кабинет <span class="menu_el_dropdown_str"><svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 1L7.13604 7.36396L0.772078 1" stroke="#383B4A"></path></svg></span></div>'
                ),
                s(document).on("click", ".menu_el_dropdown", function () {
                  s(this).toggleClass("open_div"), s(this).next().slideToggle();
                }));
          },
          profileMeta: function () {
            s(".profile_cont").length &&
              (s(window).width() <= 992
                ? (s('meta[name="viewport"]').remove(),
                  s("head").prepend(
                    '<meta name="viewport" content="width=320, initial-scale=1, maximum-scale=1">'
                  ))
                : s("head").prepend(
                    '<meta name="viewport" content="width=device-width, initial-scale=1">'
                  ));
          },
          autoHeight: function (e, t) {
            e.scrollTop > 0 && (e.style.height = e.scrollHeight + "px"),
              "" == e.value && (e.style.height = t + "rem");
          },
          inframeMessage: function () {
            if (s("#inframe_height").length) {
              var e = function (e) {
                s("#inframe_height").css("height", e.data.height);
              };
              window.addEventListener
                ? window.addEventListener("message", e)
                : window.attachEvent("onmessage", e);
            }
          },
          uploadYml: function (e) {
            var t = 3e6;
            e.dmUploader({
              url: Routing.generate("parseyml"),
              multiple: !1,
              maxFileSize: t,
              extFilter: ["xml", "yml"],
              onBeforeUpload: function () {
                icHelper.loaderSpin();
              },
              onUploadProgress: function (e, t) {},
              onUploadSuccess: function (e, t) {
                icHelper.removeLoader(), s("#yml-parse-result").html(t);
              },
              onUploadError: function (e, t, i, n) {
                icHelper.removeLoader(),
                  500 === t.status
                    ? alert("Ошибка, невалидный yml файл")
                    : alert(t.responseJSON.message);
              },
              onFileTypeError: function (e) {
                icHelper.removeLoader(), alert("Неверный формат файла");
              },
              onFileSizeError: function (e) {
                icHelper.removeLoader(),
                  alert(
                    "Вы пытаетесь загрузить файла размером " +
                      e.size +
                      " байт. Максимальный размер файла - " +
                      t
                  );
              },
              onFileExtError: function (e) {
                icHelper.removeLoader(),
                  alert('Разрешенные тип файлов - "xml"');
              },
            });
          },
          selectMultyPlaceholder: function () {
            s(".sel-mul-pl").removeClass("sel-mul-pl");
          },
          selectInputTag: function (e) {
            void 0 === e && (e = ".select_tag_js"),
              s(e).each(function () {
                var e,
                  t = s(this),
                  i = "";
                t.addClass("d-none"),
                  t.find("optgroup").length && (e = "form_tag_optgroup"),
                  t.find("option").each(function (e) {
                    var t = s(this),
                      n = t.attr("value"),
                      o = "";
                    t.prop("selected") && (o = "selected"),
                      "" !== t.text() &&
                        (i =
                          i +
                          '<span data-element="' +
                          n +
                          '" class="tag_input ' +
                          o +
                          '">' +
                          t.text() +
                          "</span>"),
                      t.next("optgroup").length &&
                        (i =
                          i +
                          '<div class="form_tag_child"><div class="form_tag_tit">' +
                          t.next("optgroup").attr("label") +
                          '</div><div class="">'),
                      t.parent("optgroup").length &&
                        !t.next("option").length &&
                        (i += "</div></div>");
                  });
                var n =
                  '<div class="form_tag_in form_tag_js ' +
                  e +
                  '">' +
                  i +
                  "</div>";
                s(this).siblings(".form_tag_in").length
                  ? s(this).siblings(".form_tag_in").replaceWith(n)
                  : t.before(n);
              }),
              s(".form_tag_js .tag_input").on("click", function (e) {
                var t = s(this),
                  i = t.closest(".form_tag_js").next("select");
                if (
                  (i.length < 1 &&
                    (i = t.parents(".form_tag_js").first().next("select")),
                  0 === i.length &&
                    (i = t.closest(".param-field").find("select")),
                  i.prop("multiple") ||
                    t
                      .closest(".form_tag_js")
                      .find(".tag_input")
                      .removeClass("selected"),
                  t.toggleClass("selected"),
                  t.hasClass("selected"))
                ) {
                  i.find('option[value="' + t.attr("data-element") + '"]').prop(
                    "selected",
                    !0
                  );
                  var n = i.val();
                  s.isArray(n) && (n.push(t.data().element), i.val(n)),
                    i.change();
                } else i.find('option[value="' + t.attr("data-element") + '"]').prop("selected", !1), i.change();
              });
          },
          calendarHtml: function () {
            setTimeout(function () {
              s(".daterangepicker.show-calendar td").each(function () {
                s(this).html(
                  '<span class="day_cal_bef"><span class="day_cal">' +
                    s(this).text() +
                    "</span></span>"
                );
              });
            }, 100);
          },
          daterangepickerHtml: function () {
            s(".data_rangpic_js").on("show.daterangepicker", function (e, t) {
              icHelper.calendarHtml();
            }),
              s(document).on(
                "click",
                ".prev.available, .next.available",
                function () {
                  icHelper.calendarHtml();
                }
              ),
              s(document).on("click", ".day_cal_bef", function () {
                s(this).closest("td").mousedown(), icHelper.calendarHtml();
              }),
              s(document).on("change", ".hourselect", function () {
                icHelper.calendarHtml();
              }),
              s(document).on("change", ".minuteselect", function () {
                icHelper.calendarHtml();
              });
          },
          btnTabClick: function () {
            s(document).on("click", ".btn_tab_js", function (e) {
              e.preventDefault();
              var t = s(this).attr("data-id");
              s('[data-toggle="tab"][href="' + t + '"]').tab("show");
            });
          },
          sortTable: function () {
            s(".sort_table_js").length &&
              s(".sort_table_js").tablesorter({
                theme: "blue",
                headerTemplate: "{content} {icon}",
                cssChildRow: "tablesorter-childRow",
              });
          },
          rightCheckAll: function () {
            s(document).on("click", ".check_all", function () {
              var e = s(this),
                t = e.closest(".form-check").parent(),
                i = e.prop("checked");
              t.find(".form-check").each(function () {
                s(this).find(".check_one").prop("checked", i);
              });
            }),
              s(document).on("change", ".check_one", function () {
                var e = s(this).closest(".form-check").parent(),
                  t = !0;
                e.find(".check_one").each(function () {
                  s(this).prop("checked") || (t = !1);
                }),
                  e.find(".check_all").prop("checked", t);
              });
          },
          checkAllNew: function () {
            s(document).on("change", ".check1_all_js", function () {
              var e = s(this),
                t = e.closest(".check1_wrap_js"),
                i = e.prop("checked");
              t.find(".check1_one_js").each(function () {
                s(this).prop("checked", i), s(this).trigger("change");
              });
            }),
              s(document).on("change", ".check1_one_js", function () {
                var e = s(this).closest(".check1_wrap_js"),
                  t = !0;
                e.find(".check1_one_js").each(function () {
                  s(this).prop("checked") || (t = !1);
                }),
                  e.find(".check1_all_js").prop("checked", t);
              });
          },
          checkboxElDisabled: function () {
            s(document).on(
              "change",
              ".check_el_js .form-check-input",
              function () {
                var e = s(this),
                  t = e.parents(".check_el_js").find(".form-control");
                e.prop("checked")
                  ? (t.removeAttr("disabled"),
                    e.parents(".row").hasClass("required-block") &&
                      t.attr("required", "required"))
                  : (t.attr("disabled", "disabled"), t.removeAttr("required"));
              }
            );
          },
          calendarSelectFun: function () {
            if (window.location.href.indexOf("calculator") > -1) {
              var e = [
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
              ];
              if (s(".ui-datepicker-month option").length < 12)
                for (var t = 0; t < 12; t++)
                  s('option:contains("' + e[t] + '")').length ||
                    s(".ui-datepicker-month").append(
                      "<option disabled>" + e[t] + "</option>"
                    );
            }
            s("select.ui-datepicker-month:not(.select2-hidden-accessible)")
              .length &&
              s(
                "select.ui-datepicker-month:not(.select2-hidden-accessible)"
              ).addClass("ui-datepicker-select-js"),
              s("select.ui-datepicker-year:not(.select2-hidden-accessible)")
                .length &&
                s(
                  "select.ui-datepicker-year:not(.select2-hidden-accessible)"
                ).addClass("ui-datepicker-select-js"),
              s(
                ".ui-datepicker-select-js:not(.select2-hidden-accessible)"
              ).select2({
                minimumResultsForSearch: 40,
                theme: "select_calendar",
              }),
              s(".ui-datepicker-select-js").on("select2:open", function (e) {
                setTimeout(function () {
                  s(".select2-results ul.select2-results__options").unbind(
                    "mousewheel"
                  ),
                    0 === s(".scroll_style").length &&
                      s(
                        '.select2-results ul.select2-results__options[role="listbox"]'
                      ).wrap('<div class="scroll_style"></div>'),
                    s(window).width() < 768
                      ? s(".scroll_style").addClass("overflow-auto")
                      : s(".scroll_style").mCustomScrollbar({
                          mouseWheel: !0,
                          advanced: {
                            updateOnContentResize: !0,
                          },
                        });
                }, 10);
              });
          },
          initSandartCalendar: function (e, t) {
            void 0 === e && (e = ".datepicker_js");
            var i = {
              dateFormat: "dd.mm.yy",
              beforeShow: function (e, t) {
                t.dpDiv.addClass("op0"),
                  t.dpDiv.removeClass("pos_top pos_bottom"),
                  setTimeout(function () {
                    e.getBoundingClientRect().top + pageYOffset >
                    +t.dpDiv.css("top").replace("px", "")
                      ? t.dpDiv.addClass("pos_top")
                      : t.dpDiv.addClass("pos_bottom"),
                      t.dpDiv.removeClass("op0"),
                      icHelper.calendarSelectFun(),
                      s("body > .ui-datepicker .ui-datepicker-title select")
                        .length
                        ? s("body > .ui-datepicker").addClass("calendar_yaer")
                        : s("body > .ui-datepicker").removeClass(
                            "calendar_yaer"
                          );
                  }, 100);
              },
              onChangeMonthYear: function () {
                setTimeout(function () {
                  icHelper.calendarSelectFun();
                }, 0);
              },
              showButtonPanel: !1,
              gotoCurrent: !1,
              showOtherMonths: !0,
              selectOtherMonths: !0,
            };
            t && (i = s.extend(i, t));
            var n = new Date(s(e).attr("min"));
            n && (i.minDate = n);
            var o = s(e).attr("maxDate");
            o && (i.maxDate = o),
              (s.datepicker.regional.ru = {
                closeText: "Закрыть",
                prevText: "Предыдущий месяц",
                nextText: "Следующий месяц",
                currentText: "Сегодня",
                monthNames: [
                  "Январь,",
                  "Февраль,",
                  "Март,",
                  "Апрель,",
                  "Май,",
                  "Июнь,",
                  "Июль,",
                  "Август,",
                  "Сентябрь,",
                  "Октябрь,",
                  "Ноябрь,",
                  "Декабрь,",
                ],
                monthNamesShort: [
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
                dayNames: [
                  "воскресенье",
                  "понедельник",
                  "вторник",
                  "среда",
                  "четверг",
                  "пятница",
                  "суббота",
                ],
                dayNamesShort: [
                  "вск",
                  "пнд",
                  "втр",
                  "срд",
                  "чтв",
                  "птн",
                  "сбт",
                ],
                dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                weekHeader: "Нед",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: "",
              }),
              s.datepicker.setDefaults(s.datepicker.regional.ru),
              s(e).datepicker(i),
              s(document).on("click", ".ui-corner-all", function (e) {
                icHelper.calendarSelectFun();
              });
          },
          initEventCalendar: function (e, t, i) {
            var n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : [],
              o = [];
            function a(e) {
              var t = new Date(e),
                i = "" + (t.getMonth() + 1),
                n = "" + t.getDate(),
                o = t.getFullYear();
              return (
                i.length < 2 && (i = "0" + i),
                n.length < 2 && (n = "0" + n),
                [n, i, o].join(".")
              );
            }
            s("#close_" + e + "_info").on("click", function () {
              s(this)
                .parent("#" + e + "_info")
                .removeClass("active");
            }),
              s(document).on("click", function (t) {
                s(t.target).closest(".cal_info").length ||
                  (s("#" + e + "_info").removeClass("active"),
                  s("#" + e + " .ui-state-active").removeClass(
                    "ui-state-active"
                  ));
              }),
              (s.datepicker.regional.ru = {
                closeText: "Закрыть",
                prevText: "Предыдущий месяц",
                nextText: "Следующий месяц",
                currentText: "Сегодня",
                monthNames: [
                  "Январь,",
                  "Февраль,",
                  "Март,",
                  "Апрель,",
                  "Май,",
                  "Июнь,",
                  "Июль,",
                  "Август,",
                  "Сентябрь,",
                  "Октябрь,",
                  "Ноябрь,",
                  "Декабрь,",
                ],
                monthNamesShort: [
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
                dayNames: [
                  "воскресенье",
                  "понедельник",
                  "вторник",
                  "среда",
                  "четверг",
                  "пятница",
                  "суббота",
                ],
                dayNamesShort: [
                  "вск",
                  "пнд",
                  "втр",
                  "срд",
                  "чтв",
                  "птн",
                  "сбт",
                ],
                dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                weekHeader: "Нед",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: "",
              }),
              s.datepicker.setDefaults(s.datepicker.regional.ru),
              s("#" + e).datepicker({
                dateFormat: "dd.mm.yy",
                showButtonPanel: !1,
                gotoCurrent: !1,
                showOtherMonths: !0,
                selectOtherMonths: !0,
                beforeShowDay: function (e) {
                  return [!1];
                },
              }),
              s("#event_calendar_loader").length &&
                setTimeout(function () {
                  s("#event_calendar_loader").remove(),
                    s("#event_calendar_cont").removeClass("d-none");
                }, 300),
              s
                .ajax({
                  method: "GET",
                  global: !0,
                  url:
                    void 0 !== n.listFilter
                      ? Routing.generate(t, n.listFilter)
                      : Routing.generate(t),
                  async: !1,
                  dataType: "json",
                })
                .done(function (t) {
                  (o = t), s("#" + e).datepicker("destroy");
                })
                .fail(function () {
                  console.log("fail");
                });
            if (o.length) {
              var l,
                r,
                c = s.datepicker._updateDatepicker;
              (s.datepicker._updateDatepicker = function (e) {
                c.call(this, e);
                var t = this._get(e, "afterShow");
                t && t.apply(e.input ? e.input[0] : null);
              }),
                (r = (l = o.slice(-1)[0].split("."))[1] - 1) < 0 && (r = 0),
                "eventDatesList" === t
                  ? new Date(l[2], r, l[0])
                  : new Date(l[2], r, l[0]),
                (r = (l = o[0].split("."))[1] - 1) < 0 && (r = 0),
                "eventDatesList" === t
                  ? new Date(l[2], r, l[0])
                  : new Date(l[2], r, l[0]);
            } else new Date().getMonth() - 1, new Date().getMonth() + 1;
            var d = new Date().getFullYear();
            s("#" + e)
              .datepicker({
                dateFormat: "dd.mm.yy",
                beforeShowDay: function (e) {
                  return s.inArray(a(e), n.data) > -1
                    ? [!0, "Highlighted", a(e)]
                    : (function (e) {
                        var t = parseInt(e.getMonth()) + 1;
                        t = t < 10 ? "0" + t : t;
                        for (
                          var i = ("0" + e.getDate()).slice(-2),
                            n = e.getFullYear(),
                            a = 0;
                          a < o.length;
                          a++
                        )
                          if (-1 !== s.inArray(i + "." + t + "." + n, o))
                            return [!0, "", ""];
                        return [!1, "", ""];
                      })(e);
                },
                minDate: "01.01." + (d - 1),
                maxDate: "01.01." + (d + 1),
                afterShow: function () {
                  s("#" + e + " .ui-state-active").removeClass(
                    "ui-state-active"
                  );
                },
                showButtonPanel: !1,
                gotoCurrent: !1,
                showOtherMonths: !0,
                selectOtherMonths: !0,
                onSelect: function (t) {
                  !(function (e, t, i) {
                    var n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [];
                    icHelper.loaderSpin("#" + i);
                    var o = void 0 !== n.listFilter ? n.listFilter : {};
                    (o.date = e),
                      s
                        .ajax({
                          method: "GET",
                          global: !0,
                          url: Routing.generate(t),
                          data: o,
                          dataType: "json",
                        })
                        .done(function (t) {
                          if (t.length) {
                            var o =
                              "<div class='" +
                              (void 0 !== n.listFilter
                                ? "item_event_calendar_col_business_program"
                                : "item_event_calendar_col") +
                              "'><div class='item_event_calendar_col_td1'>" +
                              t.length +
                              " " +
                              (function (e, t, i, n) {
                                var o = Math.abs(e);
                                if ((o %= 100) >= 5 && o <= 20) return n;
                                if (1 === (o %= 10)) return t;
                                if (o >= 2 && o <= 4) return i;
                                return n;
                              })(
                                t.length,
                                "мероприятие",
                                "мероприятия",
                                "мероприятий"
                              ) +
                              "</div><div class='item_event_calendar_col_td2'>" +
                              e +
                              "</div></div>";
                            for (var a in t) {
                              var l = t[a].eventGuid
                                ? t[a].eventGuid
                                : t[a].guid;
                              (o += "<div class='item_event_calendar_info'>"),
                                null != m(n.version) && 2 === n.versionApi
                                  ? void 0 !== m(t[a].postUrl) && t[a].postUrl
                                    ? (o +=
                                        "<a href='/event/" +
                                        t[a].postUrl +
                                        "' class='event_calendar_title'>" +
                                        t[a].name +
                                        "</a>")
                                    : (o +=
                                        "<a href='/event/" +
                                        l +
                                        "' class='event_calendar_title'>" +
                                        t[a].name +
                                        "</a>")
                                  : (o +=
                                      "<a href='/event_old/" +
                                      l +
                                      "' class='event_calendar_title'>" +
                                      t[a].name +
                                      "</a>"),
                                (o += "</div>");
                            }
                            s("#" + i + "_info").addClass("active"),
                              s("#content_" + i + "_info").html(o);
                          } else icHelper.showModal('<h3 style="text-align:center">Мероприятия отсутствуют</h3><div class="modal_btn"><button data-dismiss="modal" class="btn btn2-light modal_show">Ок</button></div>', '<div class="img_center div_ico" style="width:100%"><img style="border-radius: 100%; padding: 10px; box-shadow: 0 0.4rem 2rem rgb(0 46 69 / 10%);" src="/build/img/ico54_world.svg" alt=""></div>'), icHelper.initEventCalendar("event_calendar", "userEventDatesList", "userEventListOnDate");
                          icHelper.removeLoader();
                        })
                        .fail(function () {
                          console.log("fail");
                        });
                  })(t, i, e, n);
                },
              })
              .ready(function () {
                s("#" + e + " .ui-state-active").removeClass("ui-state-active");
              });
          },
          getUrlVar: function () {
            var e = [],
              t = [],
              i = [];
            if ("" === (e = window.location.search.substr(1).split("&"))[0])
              return !1;
            for (var n = 0; n < e.length; n++)
              i[(t = e[n].split("="))[0]] = t[1];
            return i;
          },
          initProfileEventCalendar: function (e, t, i) {
            s(document).on("click", "#clanendar_left_btn", function (e) {
              s('a[href="#profile-tab5"]').tab("show"),
                s("html, body").animate(
                  {
                    scrollTop: 0,
                  },
                  500
                );
            }),
              s(document).on("click", function (t) {
                s(t.target).closest(".cal_info").length ||
                  (s("#" + e + "_info").removeClass("active"),
                  s("#" + e + " .ui-state-active").removeClass(
                    "ui-state-active"
                  ));
              });
            var n = [],
              o = [],
              a = [
                "Января",
                "Февраля",
                "Марта",
                "Апреля",
                "Мая",
                "Июня",
                "Июля",
                "Августа",
                "Сентября",
                "Октября",
                "Ноября",
                "Декабря",
              ];
            (s.datepicker.regional.ru = {
              closeText: "Закрыть",
              prevText: "Предыдущий месяц",
              nextText: "Следующий месяц",
              currentText: "Сегодня",
              monthNames: [
                "Январь,",
                "Февраль,",
                "Март,",
                "Апрель,",
                "Май,",
                "Июнь,",
                "Июль,",
                "Август,",
                "Сентябрь,",
                "Октябрь,",
                "Ноябрь,",
                "Декабрь,",
              ],
              monthNamesShort: [
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
              dayNames: [
                "воскресенье",
                "понедельник",
                "вторник",
                "среда",
                "четверг",
                "пятница",
                "суббота",
              ],
              dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
              dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
              weekHeader: "Нед",
              dateFormat: "dd.mm.yy",
              firstDay: 1,
              isRTL: !1,
              showMonthAfterYear: !1,
              yearSuffix: "",
            }),
              s
                .ajax({
                  method: "GET",
                  global: !0,
                  url: Routing.generate(t, {
                    full: 1,
                    getMeasures: !0,
                  }),
                  async: !1,
                  dataType: "json",
                })
                .done(function (e) {
                  for (var t in e) {
                    "start" === e[t].position && 0,
                      -1 === s.inArray(e[t].date, n) && n.push(e[t].date);
                    var i = {};
                    o[e[t].date] || (o[e[t].date] = []),
                      (i.event_id = e[t].event_id),
                      (i.title = e[t].title),
                      (i.start = e[t].start),
                      e[t].start !== e[t].end && (i.end = e[t].end),
                      (i.position = e[t].position),
                      (i.count_day = e[t].count_day),
                      (i.count_prev = e[t].count_prev),
                      (i.count_next = e[t].count_next),
                      (i.time = e[t].time),
                      (i.past = e[t].past),
                      o[e[t].date].push(i);
                  }
                })
                .fail(function () {
                  console.log("fail");
                });
            if (
              (s.datepicker.setDefaults(s.datepicker.regional.ru), n.length)
            ) {
              var l = s.datepicker._updateDatepicker;
              (s.datepicker._updateDatepicker = function (e) {
                l.call(this, e);
                var t = this._get(e, "afterShow");
                t && t.apply(e.input ? e.input[0] : null);
              }),
                n[0].split(".")[1] - 1 < 0 && 0,
                n.slice(-1)[0].split(".")[1] - 1 < 0 && 0;
            }
            var r = s("#" + e)
              .datepicker({
                dateFormat: "dd.mm.yy",
                beforeShowDay: function (e) {
                  var t = parseInt(e.getMonth()) + 1;
                  t = t < 10 ? "0" + t : t;
                  for (
                    var i = ("0" + e.getDate()).slice(-2),
                      o = e.getFullYear(),
                      a = 0;
                    a < n.length;
                    a++
                  )
                    if (-1 != s.inArray(i + "." + t + "." + o, n)) return [!0];
                  return [!1];
                },
                minDate: null,
                maxDate: null,
                afterShow: function () {},
                showButtonPanel: !1,
                gotoCurrent: !1,
                showOtherMonths: !0,
                selectOtherMonths: !0,
                dayNamesMin: [
                  "Воскресенье",
                  "Понедельник",
                  "Вторник",
                  "Среда",
                  "Четверг",
                  "Пятница",
                  "Суббота",
                ],
                onSelect: function (e, t) {
                  c(t);
                },
                onChangeMonthYear: function (e, t, i) {
                  c(i);
                },
                beforeShow: function (e, t) {
                  c(t);
                },
              })
              .ready(function () {
                s("#" + e + " .ui-state-active").removeClass("ui-state-active");
              })
              .on("mouseenter", ".event_cl", function () {
                s(this).click();
              });
            function c(t) {
              setTimeout(function () {
                var t = s("#" + e + " .ui-datepicker td > *").length;
                s("#" + e + " .ui-datepicker td > *").each(function (i, l) {
                  var r = s(this).parent("td"),
                    c = ("0" + s(this).text()).slice(-2),
                    d = r.data("month") + 1,
                    h =
                      c +
                      "." +
                      (d = d < 10 ? "0" + d : d) +
                      "." +
                      r.data("year"),
                    u = s.inArray(h, n);
                  if (-1 !== u) {
                    s(this).off("click");
                    var p = n[u],
                      f = "";
                    if (o[p]) {
                      for (var m in o[p]) {
                        var v = m - 0 + 1,
                          _ = (r.prev(), !1);
                        1 === o[p][m].count_day && (_ = !0),
                          (f +=
                            '<a class="event_cl level_' +
                            v +
                            '" href="/event/' +
                            o[p][m].event_id +
                            '" data-count_next="' +
                            o[p][m].count_next +
                            '" data-count_prev="' +
                            o[p][m].count_prev +
                            '" data-count_day="' +
                            o[p][m].count_day +
                            '" data-time="' +
                            o[p][m].time +
                            '" data-past="' +
                            o[p][m].past +
                            "\" data-data='" +
                            JSON.stringify(o[p][m]).replace("'", "") +
                            '\'><i class="event_cl_time">' +
                            (_ ? o[p][m].time : "") +
                            "</i> " +
                            o[p][m].title +
                            "</a>");
                      }
                      if (m >= 3 && "undefined" != typeof hideClass)
                        hideClass, hideClass, hide;
                    }
                    r.append('<span class="events_day">' + f + "</span>");
                  }
                  t === i + 1 &&
                    (s(".event_cl").on("click", function () {
                      var t = s(this).data("data"),
                        i = s(this);
                      return (
                        s
                          .ajax({
                            method: "GET",
                            global: !0,
                            url: Routing.generate("userEventShow", {
                              event_id: t.event_id,
                            }),
                            async: !1,
                            dataType: "json",
                          })
                          .done(function (t) {
                            var n = "";
                            if (
                              (s(".event_cal").css("z-index", 0),
                              (n +=
                                '<div class="event_item event_item_prof event_cal_one">'),
                              (n += '<div class="div_date_title">'),
                              (n += '<div class="div_date">'),
                              t.dateend && t.dateend !== t.datebegin)
                            ) {
                              var o = t.dateend.split("."),
                                l = o[0],
                                r = o[1],
                                c = (h = t.datebegin.split("."))[0],
                                d = h[1];
                              n +=
                                '<span class="dt1 start"><div class="div_num">' +
                                c +
                                '</div><div class="div_mon">' +
                                s.datepicker.regional.ru.monthNamesShort[
                                  d - 1
                                ] +
                                '</div></span><span class="dt2">-</span><span class="dt3 end"><div class="div_num">' +
                                l +
                                '</div><div class="div_mon">' +
                                s.datepicker.regional.ru.monthNamesShort[
                                  r - 1
                                ] +
                                "</div>";
                            } else {
                              var h;
                              (c = (h = t.datebegin.split("."))[0]), (d = h[1]);
                              n +=
                                '<div class="dt1 not_end"><div class="div_num">' +
                                c +
                                '</div></div><div class="dt4"><div class="div_time">&nbsp;</div><div class="div_mon">' +
                                a[d - 1] +
                                "</div></div>";
                            }
                            n += "</div>";
                            var u = "event";
                            if (
                              (t.measure && (u = "measure-supports-card"),
                              (n +=
                                '<div class="div_title"><a target="_blank" href="/' +
                                u +
                                "/" +
                                t.id +
                                '">' +
                                t.title +
                                "</a>"),
                              t.imageUrl &&
                                (n +=
                                  '<span class="div_title_img"><span class="div_title_img_in"><img src="' +
                                  t.imageUrl +
                                  '"></span></span>'),
                              (n += "</div></div>"),
                              t.measure ||
                                (n +=
                                  '<a data-title="Удалить" data-toggle="tooltip" class="btn_icons delete_event" data-id="' +
                                  t.id +
                                  '"><i class="obj_icon"><svg class="svg-icon" width="24" height="15"><use xlink:href="/svg/all-icons.svg#delete"></use></svg></i></a>'),
                              t.email || t.address || t.contact || t.sourceLink)
                            ) {
                              if (((n += '<div class="div_info">'), t.email)) {
                                var p = JSON.parse(t.email)[0];
                                n +=
                                  '<div class="obj_el wnot"><i class="obj_icon"><svg class="svg-icon" width="16" height="12"><use xlink:href="/svg/all-icons.svg#email"></use></svg></i><a href="mailto:' +
                                  p +
                                  '">' +
                                  p +
                                  "</a></div>";
                              }
                              if (t.sourceLink)
                                n +=
                                  '<div class="obj_el wnot"><i class="obj_icon"><svg class="svg-icon" width="18" height="18"><use xlink:href="/svg/all-icons.svg#computer"></use></svg></i><a href="site" target="_blank" class="text-break">' +
                                  JSON.parse(t.sourceLink)[0] +
                                  "</a></div>";
                              if (
                                (t.address &&
                                  (n +=
                                    '<div class="obj_el fwb wnot"><i class="obj_icon"><svg class="svg-icon stroke_black" width="18" height="22.3"><use xlink:href="/svg/all-icons.svg#cont_adres"></use></svg></i><span>' +
                                    t.address +
                                    "</span></div>"),
                                t.contact)
                              )
                                n +=
                                  '<div class="obj_el wnot"><i class="obj_icon"><svg class="svg-icon" width="16" height="16"><use xlink:href="/svg/all-icons.svg#phone"></use></svg></i><a href="">' +
                                  JSON.parse(t.contact)[0] +
                                  "</a></div>";
                              n += "</div>";
                            }
                            (n += "</div>"),
                              s("#content_" + e + "_info").html(n),
                              s("#" + e + "_info").addClass("active");
                            var f = i.offset().top + i.height() + 12,
                              m =
                                i.parents("td").offset().left +
                                +i.outerWidth() -
                                s("#" + e + "_info").outerWidth();
                            s("#" + e + "_info").offset({
                              top: f,
                              left: m,
                            });
                          }),
                        !1
                      );
                    }),
                    s(".more_events").on("click", function (t) {
                      var i = s(this).data("data"),
                        n = "";
                      s.each(i, function (e, t) {
                        if (
                          ((n += '<div class="event_item event_item_other">'),
                          (n += '<div class="div_date_title">'),
                          (n += '<div class="div_date">'),
                          t.end)
                        ) {
                          var i = t.end.split("."),
                            o = i[0],
                            l = i[1],
                            r = (d = t.start.split("."))[0],
                            c = d[1];
                          n +=
                            '<span class="dt1 start"><div class="div_num">' +
                            r +
                            '</div><div class="div_mon">' +
                            s.datepicker.regional.ru.monthNamesShort[c - 1] +
                            '</div></span><span class="dt2">-</span><span class="dt3 end"><div class="div_num">' +
                            o +
                            '</div><div class="div_mon">' +
                            s.datepicker.regional.ru.monthNamesShort[l - 1] +
                            "</div>";
                        } else {
                          var d;
                          (r = (d = t.start.split("."))[0]), (c = d[1]);
                          n +=
                            '<div class="dt1 not_end"><div class="div_num">' +
                            r +
                            '</div></div><div class="dt4"><div class="div_time">' +
                            t.time +
                            '</div><div class="div_mon">' +
                            a[c - 1] +
                            "</div></div>";
                        }
                        (n += "</div>"),
                          (n +=
                            '<div class="div_title"><a target="_blank" href="/event/' +
                            t.event_id +
                            '">' +
                            t.title +
                            "</a></div>"),
                          (n += "</div>"),
                          (n +=
                            '<a data-title="Удалить" data-toggle="tooltip" class="btn_icons delete_event" data-id="' +
                            t.event_id +
                            '"><i class="obj_icon"><svg class="svg-icon" width="24" height="15"><use xlink:href="/svg/all-icons.svg#delete"></use></svg></i></a>'),
                          (n += "</div>");
                      }),
                        s("#content_" + e + "_info").html(n),
                        s("#" + e + "_info").addClass("active");
                      var o =
                          s(this).parents("td").offset().top +
                          s(this).parents("td").height(),
                        l =
                          s(this).parents("td").offset().left +
                          +s(this).parents("td").outerWidth() -
                          s("#" + e + "_info").outerWidth();
                      return (
                        s("#" + e + "_info").offset({
                          top: o,
                          left: l,
                        }),
                        !1
                      );
                    }));
                });
              }, 0);
            }
            c(s.datepicker._getInst(r[0])),
              s(document).on("click", ".delete_event", function () {
                var e = s(this).data("id");
                return (
                  icHelper.showModalAlert(
                    "Вы действительно хотите удалить мероприятие из календаря?",
                    '<div class="text-center"><button class="btn btn2-light btn-yes okDelEv" data-id="' +
                      e +
                      '">Да</button> <button class="btn btn-grad btn-no">Нет</button></div>'
                  ),
                  s("#siteModalAlert .okDelEv").off(),
                  s("#siteModalAlert .btn-no").off(),
                  !1
                );
              }),
              s(document).on("click", "#siteModalAlert .okDelEv", function () {
                if (void 0 === s(this).data("id")) return !1;
                s
                  .ajax({
                    method: "GET",
                    global: !0,
                    url: Routing.generate(i, {
                      event_id: s(this).data("id"),
                    }),
                    async: !1,
                    dataType: "json",
                  })
                  .done(function (e) {
                    s("#event_calendar_maxi").datepicker("destroy"),
                      s("#event_calendar_maxi").children().off(),
                      s("#event_calendar_maxi").html(""),
                      s("#event_calendar_maxi_info")
                        .removeAttr("style")
                        .removeClass("active"),
                      icHelper.initProfileEventCalendar(
                        "event_calendar_maxi",
                        "userEventDatesList",
                        "eventOutCalendar"
                      );
                  })
                  .fail(function () {
                    console.log("fail");
                  }),
                  icHelper.hideModal("siteModalAlert");
              }),
              s(document).on("click", "#siteModalAlert .btn-no", function () {
                icHelper.hideModal("siteModalAlert");
              });
          },
          sortFlex: function () {
            if (s(".sort_flex_js").length && s(window).width() >= 768) {
              var e = 0,
                t = 0,
                i = "col-lg-";
              s(window).width() <= 991 && (i = "col-md-"),
                s(".sort_flex_js > div").each(function (n) {
                  var o = s(this),
                    a = +o.attr("class").replace(i, "");
                  if ((e <= 12 && (e += a), 12 == e)) e = 0;
                  else if (e > 12)
                    if (s(".after_element").length) {
                      if (a == t)
                        return (
                          s(".after_element").before(o),
                          void s(".after_element").removeClass("after_element")
                        );
                    } else o.addClass("after_element"), (t = 12 - (e - a));
                });
            }
          },
          dropdownSearch: function () {
            s(document).on("input", "#search_by_string_string", function () {
              var e = "#search_by_string_string",
                t = s
                  .trim(
                    s(e)
                      .val()
                      .replace(/\sили\s/g, ";")
                      .replace(/\sи\s/g, ";")
                  )
                  .split(";"),
                i = !0;
              for (var n in t)
                t[n] &&
                  "string" == typeof t[n] &&
                  t[n].replace(/\s/g, "").length < 3 &&
                  (i = !1);
              i &&
                s(e).parent().find(".invalid-feedback").length &&
                s(e).parent().find(".invalid-feedback").remove();
            }),
              s("#search_top_form").on("submit", function () {
                var e = "#search_by_string_string",
                  t = s
                    .trim(
                      s(e)
                        .val()
                        .replace(/\sили\s/g, ";")
                        .replace(/\sи\s/g, ";")
                    )
                    .split(";"),
                  i = !0;
                for (var n in t)
                  t[n] &&
                  "string" == typeof t[n] &&
                  t[n].replace(/\s/g, "").length < 3
                    ? (i = !1)
                    : t[n] || (i = !1);
                if (!i) {
                  if (!s(e).parent().find(".invalid-feedback").length) {
                    var o = icHelper.createError("Введите минимум три символа");
                    s(e).after(o);
                  }
                  return !1;
                }
                s(e).parent().find(".invalid-feedback").remove();
                s(".search_btn").addClass("sb_loader"),
                  s(".search_btn").html(
                    '<svg  class="btn_svg_loader btn_svg_loader28" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#c8c8c8"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18" stroke="#16FF00"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>'
                  );
              });
          },
          visitPage: function (e, t) {},
          arrayIntersect: function (e, t) {
            return s.grep(e, function (e) {
              return s.inArray(e, t) > -1;
            });
          },
          buildChoiceGroups: function () {
            setTimeout(function () {
              s(".select2-results__group").each(function () {
                s(this).wrap('<div class="select_group_tit"></div>'),
                  s(this).before(
                    '<div class="toggleBtn select_group_btn"></div>'
                  ),
                  s(this).closest("li").find('li[aria-selected="false"]')
                    .length || s(this).addClass("activ_group");
              });
            }, 100);
          },
          buildChoiceGroupsTab: function () {
            s(
              ".select2-container.select2-container--open .select2-dropdown"
            ).addClass("op0"),
              setTimeout(function () {
                var e = 0;
                if (s("#roomTypesRentFilter").length) {
                  var t = s("#roomTypesRentFilter").val();
                  t.length && -1 !== s.inArray("6510", t) && (e = 2);
                }
                s(".select2-results__group").length
                  ? s(".select2-results__group").each(function (t) {
                      if (s(this).closest("ul").hasClass("tab-content")) {
                        if (
                          !s(".nav-link[href='#tab_select" + t + "']").length
                        ) {
                          var i =
                            '<li class="nav-item" role="presentation">\n    <a class="nav-link" data-toggle="tab" href="#tab_select' +
                            t +
                            '" role="tab" aria-selected="false">' +
                            s(this).text() +
                            "</a>\n  </li>";
                          s(this)
                            .closest(".select2-results")
                            .find(".nav-tabs")
                            .append(i);
                        }
                        t === e
                          ? (s(
                              '.nav-link[href="#tab_select' + t + '"]'
                            ).click(),
                            s(this)
                              .closest("li")
                              .addClass("tab-pane fade show active"))
                          : s(this).closest("li").addClass("tab-pane fade");
                      } else {
                        s(this).closest("ul").addClass("tab-content");
                        var n =
                          '<ul class="nav nav-tabs" id="myTab" role="tablist">\n  <li class="nav-item" role="presentation">\n    <a class="nav-link active" data-toggle="tab" href="#tab_select' +
                          t +
                          '" role="tab" aria-selected="true">' +
                          s(this).text() +
                          "</a>\n  </li>\n</ul>";
                        s(this)
                          .closest(".select2-results")
                          .addClass("select2_results_tab"),
                          s(this)
                            .closest(".select2-dropdown")
                            .addClass("w-auto"),
                          s(this).closest(".select2-results").prepend(n),
                          s(this)
                            .closest("li")
                            .addClass("tab-pane fade show active");
                      }
                      s(this).addClass("d-none"),
                        s(this)
                          .closest("li")
                          .attr("id", "tab_select" + t),
                        s(this).next().addClass("d-flex"),
                        s(this).next().attr("style", "flex-direction: column");
                      var o = s(this).next().find("li");
                      o.on("click", function () {
                        o.attr("style", "order: 0"),
                          "true" === s(this).attr("aria-selected") &&
                            s(this).attr("style", "order: -1");
                      });
                    })
                  : (s(".select2-results__options")
                      .addClass("d-flex")
                      .attr("style", "flex-direction: column"),
                    s(".select2-results__options")
                      .find("li")
                      .each(function (e) {
                        s(this).on("click", function () {
                          s(".select2-results__options:visible")
                            .find('li:not([aria-selected="true"])')
                            .attr("style", "order: 0"),
                            "true" === s(this).attr("aria-selected") &&
                              s(this).attr("style", "order: -1");
                        });
                      }));
                s(
                  ".select2-container.select2-container--open .select2-dropdown"
                ).removeClass("op0");
              }, 100);
          },
          buildChoiceGroupsTabClick: function () {
            s(document).on(
              "click",
              ".select2_results_tab .nav-link",
              function () {
                s(s(this).attr("href")).siblings().removeClass("show active");
              }
            );
          },
          autchMdAdd: function () {
            s(window).width() < 992 &&
              s(document).on("click", ".autch_add_md_js", function (e) {
                e.preventDefault(),
                  icHelper.showModalAlert(
                    '<div class="tam_img"><img src="/build/img/hack_cont3_2.svg" width="80"></div><div class="tam_tit">Для добавления кабинета юридического лица воспользуйтесь версией сайта для ПК и УКЭП</div>',
                    '<div class="modal_btn"><button data-dismiss="modal" class="btn btn-grad">Понятно</button></div>',
                    "autch_add_md_modal"
                  );
              });
          },
          collapsText: function () {
            s(document).on("click", ".add_collaps_text", function () {
              s(this)
                .closest(".add_collaps_wrap")
                .addClass("add_collaps_block");
            }),
              s(document).on("click", ".add_collaps_text2", function () {
                s(this)
                  .closest(".add_collaps_wrap")
                  .removeClass("add_collaps_block");
              });
          },
          checkboxText: function () {
            s(document).on("click", ".checkbox_text_js input", function () {
              s(this).prop("checked")
                ? s(this).closest(".checkbox_text_js").addClass("active")
                : s(this).closest(".checkbox_text_js").removeClass("active");
            });
          },
          checkboxTable: function () {
            s(document).on("change", ".check_one_js", function () {
              var e = s(this),
                t = s(".panel_favorite"),
                i = e.closest(".check_wrap_js"),
                n = e.closest("tr");
              if (
                (e.prop("checked") || i.find(".check_one_js:checked").length
                  ? (t
                      .find(".panel_chislo")
                      .text(i.find(".check_one_js:checked").length),
                    t.addClass("active"))
                  : t.removeClass("active"),
                e.prop("checked"))
              )
                n.addClass("active"), n.prependTo(n.parent());
              else {
                n.removeClass("active");
                var o = +n.attr("data-order") + 1;
                s('[data-order="' + o + '"]').is(".active")
                  ? n
                      .siblings(".active")
                      .eq(n.parent().find(".active").length)
                      .after(n)
                  : n.siblings('[data-order="' + o + '"]').before(n);
              }
              e.prop("checked") &&
              i.find(".check_one_js:checked").length ==
                i.find(".check_one_js").length
                ? i.find(".check_all_js").prop("checked", !0)
                : i.find(".check_all_js").prop("checked", !1);
            }),
              s(document).on("click", ".check_all_js", function () {
                var e = s(this),
                  t = s(".panel_favorite"),
                  i = e.closest(".check_wrap_js");
                e.prop("checked")
                  ? (i.find(".check_one_js").prop("checked", !0),
                    t
                      .find(".panel_chislo")
                      .text(i.find(".check_one_js").length),
                    t.addClass("active"))
                  : (t.removeClass("active"),
                    i.find(".check_one_js").prop("checked", !1));
              });
          },
          modalVideo: function () {
            s(document).on("click", ".video_js", function () {
              return (
                s("#siteModalVideo").modal("show"),
                s("#video_cluster").trigger("play"),
                s("#siteModalVideo").on("hide.bs.modal", function (e) {
                  s("#video_cluster").trigger("pause");
                }),
                !1
              );
            });
          },
          filterMob: function () {
            s(document).on("click", ".btn_filter_mob_js", function () {
              return s("body").addClass("filter_open"), !1;
            }),
              s(document).on("click", ".close_mob", function () {
                return s("body").removeClass("filter_open"), !1;
              });
          },
          collapseEl: function () {
            s(document).on("click", ".collapse_js", function () {
              return (
                s(this).toggleClass("active"),
                s(s(this).attr("data-href")).toggleClass(
                  s(this).attr("data-class")
                ),
                !1
              );
            });
          },
          checkAllCheckbox: function () {
            s(document).on(
              "change",
              ".checkbox_check_all_js .form-check-first",
              function () {
                var e = s(this),
                  t = e.prop("checked");
                e.closest(".checkbox_check_all_js")
                  .find(".form-check-input")
                  .prop("checked", t);
              }
            ),
              s(document).on(
                "change",
                ".form-check-child-none .form-check-first",
                function () {
                  s(this).next().click();
                }
              );
          },
          fancyboxAll: function () {
            var e = ".fan_gal_js";
            s(e).length &&
              s(e).fancybox({
                padding: 0,
                transitionIn: "none",
                transitionOut: "none",
                type: "image",
                changeFade: 0,
                tpl: {
                  closeBtn:
                    '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i class="material-icons">close</i></a>',
                  next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><i class="material-icons">navigate_next</i></a>',
                  prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><i class="material-icons">navigate_before</i></a>',
                },
              });
          },
          bytesToSize: function (e) {
            if (0 == e) return "0 Byte";
            var t = parseInt(Math.floor(Math.log(e) / Math.log(1024)));
            return (
              Math.round(e / Math.pow(1024, t), 2) +
              " " +
              ["Bytes", "KB", "MB", "GB", "TB"][t]
            );
          },
          checkFileSize: function (e, t) {
            return (
              !(e.size > t) || (alert("Превышен максимальный размер файла"), !1)
            );
          },
          checkFileExt: function (e, t) {
            var i = e.name.split(".").pop().toLowerCase();
            return (
              !!t.split(";").includes(i) ||
              (alert("Недопустимый формат файла"), !1)
            );
          },
          checkFilesCount: function (e) {
            var t = s(e).data().maxfilecount ? s(e).data().maxfilecount : 1;
            return e.files.length > t
              ? (alert("Превышено максимальное число файлов"), !1)
              : t;
          },
          resizeTextarea: function (e) {
            null == e && (e = ".texarea_js"),
              s(e).length &&
                (s(e).each(function () {
                  var e = s(this);
                  e.attr("data-height", e.outerHeight());
                }),
                s(document).on("input", e, function () {
                  var e = s(this);
                  e.attr("data-height");
                  "" == e.val()
                    ? e.removeAttr("style")
                    : setTimeout(function () {
                        e.css("height", "auto"),
                          e.css("height", e[0].scrollHeight),
                          console.log(e[0].scrollHeight);
                      }, 0);
                }));
          },
          toggleIco: function () {
            s(document).on(
              "click",
              '.btn_collaps .sp_ico[data-toggle="collapse"]',
              function () {
                s(this)
                  .closest(".btn_collaps")
                  .attr("aria-expanded", s(this).attr("aria-expanded"));
              }
            );
          },
          initDiagramMapPage: function (e, t, i, n) {
            var o = "center",
              a = "top",
              l = "vertical",
              r = 290,
              c = 0,
              d = "17px",
              h = ["120", "120"],
              u = "250",
              p = "174",
              f = 70,
              m = 95,
              v = 306;
            if ((s(window).width(), s(window).width(), s(window).width() < 991))
              (o = "left"),
                (a = "bottom"),
                (l = "horizontal"),
                (r = 0),
                (c = -5),
                (d = "15px"),
                (h = ["75", "125"]),
                (u = "265"),
                (p = "170"),
                (f = 0),
                (m = 0),
                (v = 300);
            s("#" + e).css("height", 41 * (t.length + 1) + +u),
              Highcharts.chart(e, {
                chart: {
                  type: "pie",
                  plotBackgroundColor: null,
                  plotBorderWidth: 0,
                  plotShadow: !1,
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  margin: [0, 0, 0, 50],
                  style: {
                    fontFamily: "TTFirs",
                  },
                },
                title: {
                  text: null,
                  align: "center",
                  verticalAlign: "middle",
                  y: f,
                  x: m,
                  style: {
                    fontSize: "74px",
                    color: "#000000",
                    fontWeight: "bold",
                  },
                },
                tooltip: {
                  pointFormat: "<b>{point.percentage:.1f}%</b>",
                },
                credits: {
                  enabled: !1,
                },
                legend: {
                  align: o,
                  verticalAlign: a,
                  layout: l,
                  y: r,
                  x: c,
                  itemWidth: v,
                  itemMarginTop: 0,
                  itemMarginBottom: 20,
                  navigation: {
                    enabled: !1,
                  },
                  symbolHeight: 14,
                  symbolWidth: 14,
                  symbolRadius: 8,
                  symbolPadding: 12,
                  itemStyle: {
                    fontSize: d,
                    fontWeight: "normal",
                  },
                },
                accessibility: {
                  point: {
                    valueSuffix: "%",
                  },
                },
                navigation: {
                  buttonOptions: {
                    enabled: !1,
                  },
                },
                plotOptions: {
                  pie: {
                    innerSize: p,
                    animation: !1,
                    dataLabels: {
                      format: "{point.percentage:.0f}%",
                      rotation: 0,
                      enabled: !0,
                      padding: 0,
                      connectorPadding: 0,
                      distance: -20,
                      style: {
                        fontWeight: "bold",
                        color: "white",
                        textOutline: "",
                        fontSize: "10px",
                      },
                      filter: {
                        property: "percentage",
                        operator: ">",
                        value: 1,
                      },
                    },
                    showInLegend: !0,
                    startAngle: 0,
                    endAngle: 360,
                    center: h,
                    size: u,
                    point: {
                      events: {
                        legendItemClick: function () {
                          return !1;
                        },
                        mouseOver: function () {
                          this.graphic.attr({
                            r: this.shapeArgs.r + 10,
                            "stroke-width": 2,
                            "stroke-opacity": "70%",
                          });
                        },
                        mouseOut: function () {
                          this.graphic.attr({
                            r: this.shapeArgs.r,
                            "stroke-width": 1,
                            "stroke-opacity": "0%",
                          });
                        },
                      },
                    },
                    allowPointSelect: !1,
                    states: {
                      inactive: {
                        opacity: 1,
                      },
                      hover: {
                        brightness: 0,
                        lineWidth: 0,
                        halo: {
                          size: 0,
                        },
                      },
                    },
                  },
                },
                series: [
                  {
                    colors: i,
                    data: t,
                  },
                ],
              }),
              s(".highcharts-a11y-proxy-button").css("cursor", "unset");
          },
          num2str: function (e, t) {
            var i = e,
              n = (e = Math.abs(e) % 100) % 10;
            return e > 10 && e < 20
              ? i + " " + t[2]
              : n > 1 && n < 5
              ? i + " " + t[1]
              : 1 === n
              ? i + " " + t[0]
              : i + " " + t[2];
          },
          getQueryParam: function (e) {
            return (e = new RegExp(
              "[?&]" + encodeURIComponent(e) + "=([^&]*)"
            ).exec(location.search))
              ? decodeURIComponent(e[1])
              : "";
          },
          vhMobile: function () {
            if (s(window).width() < 1024) {
              var e = 0.01 * window.innerHeight;
              document.documentElement.style.setProperty(
                "--vh",
                "".concat(e, "px")
              ),
                window.addEventListener("resize", function () {
                  (e = 0.01 * window.innerHeight),
                    document.documentElement.style.setProperty(
                      "--vh",
                      "".concat(e, "px")
                    );
                });
            }
          },
          collapseGroupOptions: function (e) {},
          stageStickyMd: function () {
            if (s(".stage_sticky_md_js").length) {
              var e = s(".stage_sticky_md_js").offset().top;
              s(window).scroll(function () {
                s(window).width() < 768 &&
                  (s(window).scrollTop() > e
                    ? s(".stage_sticky_md_js").addClass("block_nav")
                    : s(".stage_sticky_md_js").removeClass("block_nav"));
              });
            }
          },
          webpReplacement: function () {
            var e = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
            self.createImageBitmap &&
              !e &&
              (s(".webp_js").length &&
                s(".webp_js").each(function () {
                  var e;
                  s(this).attr("href") && (e = "href"),
                    s(this).attr("xlink:href") && (e = "xlink:href");
                  var t = s(this)
                    .attr(e)
                    .replace(/\.\w{1,5}$/, ".webp");
                  s(this).attr(e, t);
                }),
              s(".webp2_js").length &&
                s(".webp2_js").each(function () {
                  var e = s(this).attr("url-webp");
                  s(this).attr("href", e);
                }),
              s(".webp3_js").length &&
                s(".webp3_js").each(function () {
                  var e = s(this).attr("url-webp");
                  s(this).attr("src", e).removeAttr("url-webp");
                }),
              s("body").addClass("imgWebp"));
          },
          imgDPR: function (e) {
            u(document.querySelectorAll(e)).map(function (e) {
              var t,
                i = e.getAttribute("url-dpr1"),
                n = e.getAttribute("url-dpr2");
              (t = window.devicePixelRatio >= 2 ? n || i : i || n) &&
                (e.style.backgroundImage = "url(" + t + ")");
            });
          },
          gSelectBuild: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3,
              i = s(void 0 === e ? ".gSelect" : e),
              n = i.find(".gSelect-toggle"),
              o = i.find(".gSelect-menu"),
              a = o.find("ul"),
              l = i.find("[data-gid]"),
              r = i.find("[data-selected]");
            s("<span>", {
              class: "gSelect-noresult",
              text: "Ничего не найдено",
            }).appendTo(o.children());
            if (i.find(".clone-container").length) return !0;
            if (
              (l.each(function () {
                var e = s(this).parents(".gSelect-list").length;
                s(this).next().length > 0 &&
                  s(this).attr({
                    "data-select_lvl": e,
                  });
              }),
              s("<span>", {
                class: "gSelect-opener",
                click: function () {
                  s(this).parent().parent().toggleClass("open");
                },
              }).appendTo(s("[data-select_lvl]")),
              a.addClass("gSelect-list"),
              o.children().children().addClass("gSelect-mainlist"),
              !i.is("[data-nosearch]"))
            )
              var c = s("<input>", {
                class: "gSelect-search",
                placeholder: "Введите не менее " + t + "-х символов...",
                keyup: function () {
                  var e = s(this).val().toLowerCase();
                  if (e.length > t - 1) {
                    a.children().each(function () {
                      s(this).text().toLowerCase().indexOf(e) > -1
                        ? s(this).attr("data-searched", !0)
                        : s(this).attr("data-searched", !1);
                    }),
                      a.find("li").is(":visible")
                        ? a.removeClass("no-res")
                        : a.addClass("no-res"),
                      0 == a.children("li").data("searched") &&
                        a
                          .find('li[data-searched="false"]')
                          .parents(".gSelect-list:not(.gSelect-mainlist)")
                          .parent()
                          .removeClass("open"),
                      a
                        .find('li[data-searched="true"]')
                        .parents(".gSelect-list:not(.gSelect-mainlist)")
                        .parent()
                        .addClass("open");
                    var i = a
                      .find("[data-selected]")
                      .clone(!1)
                      .each(function () {
                        return s("<span>", {
                          "data-gid": s(this).attr("data-gid"),
                          "data-selected": "",
                        }).html(s(this).html());
                      });
                    h.empty(), h.append(i), h.show();
                  } else
                    a.find("li").removeAttr("data-searched"),
                      a.removeClass("no-res"),
                      h.hide();
                },
                focus: function () {
                  0 === s(this).val().length &&
                    a.find("li").removeAttr("data-searched"),
                    s(this).select();
                },
              });
            if (!i.is("[data-nosearch]"))
              if (i.is("[data-sil]")) {
                var d = s("<div>", {
                  class: "div_search",
                }).prependTo(o);
                c.prependTo(d);
              } else c.appendTo(n);
            var h = s("<div>", {
              class: "clone-container",
            });
            if (
              (i.is("[data-nosearch]") || c.parent().after(h),
              i.is("[data-multig]"))
            ) {
              i.find('span[data-select_lvl="0"]').each(function () {
                s(this).parent().find("span[data-selected]").length !==
                  s(this).parent().find("span[data-gid]").length - 1 ||
                  s(this).is("[data-selected]") ||
                  s(this).attr("data-selected", "");
              }),
                i.find("[data-selected]").each(function () {
                  var e = s(this);
                  e.closest(".gSelect")
                    .find(".gSelect-toggle")
                    .prepend(
                      s("<span>", {
                        "data-mselected_id": e.attr("data-gid"),
                        text: e.text(),
                      })
                    );
                }),
                r.parents("ul").parent().toggleClass("open");
              var u = s("<span>", {
                class: "gSelect-counter",
                text: "",
              });
              i.find(".gSelect-placeholder").after(u),
                n.find("[data-mselected_id]").length > 1
                  ? i
                      .find(u)
                      .text("+" + (n.find("[data-mselected_id]").length - 1))
                  : i.find(u).text("");
            } else {
              if (!(r.length < 2))
                return console.error("Только один выбранный"), !1;
              r.closest(".gSelect")
                .find(".gSelect-toggle span")
                .attr("data-selected_id", r.data("gid"))
                .text(r.text());
            }
            i.find(".gSelect-list [data-gid]").on("click", function (e) {
              if (s(".gSelect-opener").is(e.target)) return !1;
              var t,
                n = s(this).attr("data-gid");
              if (
                (s(this).closest(".gSelect").is("[data-multig]")
                  ? (s(this)
                      .closest(".gSelect")
                      .find(".gSelect-toggle [data-mselected_id]")
                      .each(function () {
                        s(this).attr("data-mselected_id") == n && (t = !0);
                      }),
                    t
                      ? s(this).next("ul").length
                        ? (s(this).removeAttr("data-selected"),
                          s(this)
                            .next()
                            .find("li span[data-gid]")
                            .each(function () {
                              s(
                                '[data-mselected_id="' +
                                  s(this).attr("data-gid") +
                                  '"]'
                              ).remove();
                            }),
                          s('[data-mselected_id="' + n + '"]').remove())
                        : (s(this)
                            .closest(".gSelect")
                            .find(".gSelect-toggle")
                            .children(
                              '[data-mselected_id="' +
                                s(this).attr("data-gid") +
                                '"]'
                            )
                            .remove(),
                          s(this).removeAttr("data-selected"))
                      : s(this).next("ul").length
                      ? (s(this).attr("data-selected", ""),
                        s(this)
                          .next()
                          .find("li span[data-gid]")
                          .each(function () {
                            s(this).attr("data-selected", ""),
                              0 ==
                                s(
                                  '[data-mselected_id="' +
                                    s(this).attr("data-gid") +
                                    '"]'
                                ).length &&
                                s("<span>", {
                                  "data-mselected_id": s(this).attr("data-gid"),
                                  text: s(this).text(),
                                }).prependTo(
                                  s(this)
                                    .closest(".gSelect")
                                    .find(".gSelect-toggle")
                                );
                          }),
                        s("<span>", {
                          "data-mselected_id": n,
                          text: s(this).text(),
                        }).prependTo(
                          s(this).closest(".gSelect").find(".gSelect-toggle")
                        ))
                      : (0 ==
                          s(
                            '[data-mselected_id="' +
                              s(this).attr("data-gid") +
                              '"]'
                          ).length &&
                          s("<span>", {
                            "data-mselected_id": s(this).attr("data-gid"),
                            text: s(this).text(),
                          }).prependTo(
                            s(this).closest(".gSelect").find(".gSelect-toggle")
                          ),
                        s(this).attr("data-selected", "")))
                  : s(this).closest(".gSelect").is("[data-po]") &&
                    s(this).is("[data-select_lvl]")
                  ? s(this).parent().toggleClass("open")
                  : (s(this)
                      .closest(".gSelect")
                      .find(".gSelect-toggle")
                      .children("span")
                      .attr("data-selected_id", n)
                      .text(s(this).text()),
                    l.removeAttr("data-selected"),
                    s(this).attr("data-selected", ""),
                    i.removeClass("show")),
                s(this).closest(".gSelect").is("[data-multig]") &&
                  (s(this)
                    .closest(".gSelect-list")
                    .children()
                    .children("[data-gid]").length ==
                  s(this)
                    .closest(".gSelect-list")
                    .children()
                    .children("[data-selected]").length
                    ? (s(this)
                        .closest(".gSelect-list")
                        .prev()
                        .attr("data-selected", ""),
                      s(this)
                        .closest(".gSelect")
                        .find(".gSelect-toggle")
                        .prepend(
                          s("<span>", {
                            "data-mselected_id": s(this)
                              .closest(".gSelect-list")
                              .prev()
                              .attr("data-gid"),
                            text: s(this)
                              .closest(".gSelect-list")
                              .prev()
                              .text(),
                          })
                        ))
                    : (s(this)
                        .closest(".gSelect-list")
                        .prev()
                        .removeAttr("data-selected"),
                      s(
                        '[data-mselected_id="' +
                          s(this)
                            .closest(".gSelect-list")
                            .prev()
                            .attr("data-gid") +
                          '"]'
                      ).remove())),
                !i.is("[data-noclone]"))
              ) {
                var o = s(this).closest(".gSelect").find(".gSelect-search");
                if (o.length && o.val().length > 2)
                  if (s(".clone-container span").is('[data-gid="' + n + '"]'))
                    s(".clone-container")
                      .find('[data-gid="' + n + '"]')
                      .remove();
                  else {
                    var a = s("<span>", {
                      "data-gid": s(this).attr("data-gid"),
                      "data-selected": "",
                    }).html(s(this).clone(!1).html());
                    h.append(a);
                  }
              }
              var r = s(this).parents(".gSelect"),
                c = r.find(".gSelect-counter"),
                d = r.find(".gSelect-toggle");
              d.find("[data-mselected_id]").length > 1
                ? c.text("+" + (d.find("[data-mselected_id]").length - 1))
                : c && c.text("");
            }),
              n.on("click", function (e) {
                s(this).children(":not(.gSelect-placeholder)").is(e.target) ||
                  (s(this).parent().toggleClass("show"),
                  s(this).closest("gSelect").is(":not([data-nosearch])") &&
                    c.focus());
              }),
              i.find(".clone-container [data-gid]").on("click", function () {
                s(
                  '.gSelect-list [data-gid="' + s(this).attr("data-gid") + '"]'
                ).removeAttr("data-selected"),
                  s(
                    '.gSelect-toggle [data-mselected_id="' +
                      s(this).attr("data-gid") +
                      '"]'
                  ).remove(),
                  s(".gSelect-toggle [data-mselected_id]").length > 1
                    ? s(".gSelect-toggle .gSelect-counter").text(
                        "+" +
                          (s(".gSelect-toggle [data-mselected_id]").length - 1)
                      )
                    : s(".gSelect-toggle .gSelect-counter").text(""),
                  s(this).remove();
              }),
              s(document).on("mousedown", function (e) {
                i.is(e.target) ||
                  0 !== i.has(e.target).length ||
                  i.removeClass("show");
              }),
              i.find(".gSelect-holder").mCustomScrollbar();
          },
          createError: function (e) {
            return (
              '<span class="invalid-feedback d-block"><span class="d-block"><span class="form-error-message">' +
              e +
              "</span></span></span>"
            );
          },
          createError2: function (e) {
            return (
              '<div role="alert" class="invalid-feedback invalid-feedback-new"><div class="ifn1"><svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1.5 3.21519V11.2532H0.5V3.21519H1.5Z"/>\n<path d="M1.5 0.81012V1.81012H0.5V0.81012H1.5Z"/>\n</svg>\n</div><div class="ifn2">' +
              e +
              "</div></div>"
            );
          },
          scrollTo: function (e) {
            var t = s(e);
            if (0 === t.length) return !1;
            var i = t.offset().top - 30,
              n = s(window).scrollTop(),
              o = s("#siteModal:visible").length ? "#siteModal" : "html";
            n > i && (i -= +s(".site_header").height()),
              s(o).animate(
                {
                  scrollTop: i,
                },
                500
              );
          },
          showValidation: function (e, t) {
            console.log("jqXHR", e);
            e.responseJSON.fields, e.responseJSON.global;
            s(".invalid-feedback.d-block").remove(),
              s("#siteModal").animate(
                {
                  scrollTop:
                    s("#siteModal").scrollTop() +
                    s(".invalid-feedback.d-block").first().offset().top -
                    s(".invalid-feedback.d-block").first().height() / 2 -
                    250,
                },
                500
              );
          },
          sendYM: function (e, t) {
            "undefined" != typeof ym &&
              (ym(
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 55621495,
                "reachGoal",
                e
              ),
              t && "function" == typeof t && t());
          },
          elem_in_visible_area: function (e) {
            var t = e,
              i = (t.height(), t.offset().top),
              n = i + t.height(),
              o = s(window).scrollTop();
            return o + s(window).height() > i && n > o;
          },
          isNumberKey: function (e) {
            var t = e.which ? e.which : e.keyCode;
            return !(t > 31 && (t < 48 || t > 57));
          },
          changeColor: function (e) {
            var t = document.querySelector('meta[name="theme-color"]'),
              i = document.querySelector(
                'meta[name="msapplication-navbutton-color"]'
              ),
              n = document.querySelector(
                'meta[name="apple-mobile-web-app-status-bar-style"]'
              );
            t && t.setAttribute("content", e),
              i && i.setAttribute("content", e),
              n && n.setAttribute("content", e);
          },
          changeColorAll: function () {
            var e = document.querySelector("body").classList;
            e.contains("transparent_theme") &&
              window.icHelper.changeColor("#211E42"),
              e.contains("header_gradient") &&
                window.icHelper.changeColor("#2EA4D5"),
              e.contains("academy") && window.icHelper.changeColor("#372b4a");
          },
        }),
        (window.Cluster = {
          acceptInvite: function (e, t) {
            var i = ".cluster_invite_accept",
              n = s(".request_list_el.active").data().id,
              o =
                '<div class="text-left">Подтвердите присоединение<br>к межотраслевому кластеру</div><div class="text-left text_pod">' +
                s(".dropdown_top_user .name_company").first().text() +
                " уполномочивает " +
                s("#show-request .request_comp .div_text1").first().text() +
                " взаимодействовать с Фондом и третьими лицами, по вопросу подачи заявки на присвоение статуса межотраслевого кластера данному сообществу.</div>";
            icHelper.beforeLoadMore(s(i), !0),
              icHelper.showModalConfirm(
                o,
                function () {
                  s.ajax({
                    method: "GET",
                    global: !0,
                    url: Routing.generate("accept_invite", {
                      cluster: e,
                      member: t,
                      request: n,
                    }),
                  })
                    .done(function (e, t, n) {
                      s("#modalBodyAlert").html(""),
                        icHelper.showModalAlert("Заявка успешно принята"),
                        icHelper.afterLoadMore(s(i)),
                        s(i).attr("disabled", !0),
                        s(i).text("Заявка принята"),
                        s(i).removeClass("btn-ico"),
                        s(".cluster_invite_decline").remove(),
                        s(".cluster_invite_decline_start").remove(),
                        s(".request_list_el.active:visible").trigger("click"),
                        icHelper.removeLoader();
                    })
                    .fail(function (e, t, n) {
                      icHelper.afterLoadMore(s(i)),
                        icHelper.showModalAlert("Произошла ошибка");
                    });
                },
                function () {
                  icHelper.afterLoadMore(s(i), null, !0);
                }
              );
          },
          declineInvite: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "От участия отказываюсь.",
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n = "",
              o = ".cluster_invite_decline",
              a = ".decline_comment_area",
              l = ".cluster_invite_back";
            icHelper.beforeLoadMore(s(o), !0),
              (n = t ? s(t).val() : s(".request_list_el.active").data().id),
              s(a).length > 0 && (e = s(a).val()),
              s(".cluster_invite_accept").remove(),
              s
                .ajax({
                  method: "GET",
                  global: !0,
                  url: Routing.generate("decline_invite", {
                    request: n,
                    msg: e,
                  }),
                })
                .done(function (e, t, n) {
                  s("#modalBodyAlert").length > 0 &&
                    s("#modalBodyAlert").html(""),
                    icHelper.showModalAlert(
                      "Заявка успешно отклонена",
                      '<div class="text-center"><a href="#" class="btn btn-ico btn-primary profile_punct" data-dismiss="modal">Закрыть<i class="material-icons">chevron_right</i></a></div>'
                    ),
                    icHelper.afterLoadMore(s(o)),
                    s(o).length > 0 &&
                      (s(o).attr("disabled", !0),
                      s(o).text("Заявка отклонена"),
                      s(o).removeClass("btn-ico")),
                    s(a).length > 0 && s(a).hide(),
                    s(l).length > 0 && s(l).hide(),
                    "function" == typeof i && i(),
                    s(".request_list_el.active:visible").trigger("click"),
                    icHelper.removeLoader();
                })
                .fail(function (e, t, i) {
                  icHelper.showModalAlert("Произошла ошибка"),
                    icHelper.afterLoadMore(s(o));
                });
          },
          acceptRequest: function (e, t) {
            var i = ".cluster_invite_accept",
              n = s(".request_list_el.active").data().id;
            icHelper.beforeLoadMore(s(i), !0),
              s
                .ajax({
                  method: "GET",
                  global: !0,
                  url: Routing.generate("accept_request", {
                    cluster: e,
                    member: t,
                    request: n,
                  }),
                })
                .done(function (e, t, n) {
                  icHelper.showModalAlert("Заявка успешно принята"),
                    icHelper.afterLoadMore(s(i)),
                    s(i).attr("disabled", !0),
                    s(i).text("Заявка принята"),
                    s(i).removeClass("btn-ico"),
                    s(".cluster_invite_decline").remove(),
                    s(".cluster_invite_decline_start").remove(),
                    s(".request_list_el.active:visible").trigger("click"),
                    icHelper.removeLoader();
                })
                .fail(function (e, t, n) {
                  icHelper.showModalAlert("Произошла ошибка"),
                    icHelper.afterLoadMore(s(i));
                });
          },
          acceptProject: function (e) {
            var t = ".accept_project";
            icHelper.beforeLoadMore(s(t), !0),
              s
                .ajax({
                  method: "GET",
                  global: !0,
                  url: Routing.generate("accept_cluster_project", {
                    guid: e,
                  }),
                })
                .done(function (e, i, n) {
                  icHelper.showModal("Подтверждено"), s(t).hide();
                })
                .fail(function (e, i, n) {
                  icHelper.showModalAlert("Произошла ошибка"),
                    icHelper.afterLoadMore(s(t));
                });
          },
        }),
        document.getElementsByClassName("profile_cont").length &&
          document.getElementsByClassName("second_page")[0] &&
          document
            .getElementsByClassName("second_page")[0]
            .classList.add("profile_body profile_body_new"),
        s(document).ready(function () {
          if (
            (document.getElementsByClassName("profile_fix_menu").length > 0 &&
              document.getElementsByClassName("profile_body_new").length > 0 &&
              document
                .getElementsByClassName("profile_body_new")[0]
                .classList.add("profile_body_menu"),
            -1 !==
              window.location.href.indexOf("admin/app/fond-fondpurchases/"))
          ) {
            s(".media_file_type .checkbox").hide();
            var e = s(".help-block").text().split(" ");
            s(".fileinput-text").each(function (t) {
              s(this).text(e[t]);
            }),
              s(".help-block").hide();
          }
          s(window).on("resize", function () {
            v();
          }),
            v();
        }),
        s(window).on("load", function () {
          icHelper.fotoGalery();
        }),
        s(document).ready(function () {
          icHelper.noFollowLInk(),
            s(".slide_js:not(.slick-initialized)").length &&
              s(".slide_js:not(.slick-initialized)").each(function (e) {
                s(this).addClass("slide_js_or_new_" + e),
                  icHelper.slidMaket(".slide_js_or_new_" + e);
              }),
            s(".slider_tag_js:not(.slick-initialized)").length &&
              s(".slider_tag_js:not(.slick-initialized)").each(function (e) {
                s(this).addClass("slide_tag_js_or_one_more_new_" + e),
                  icHelper.slidTag(".slide_tag_js_or_one_more_new_" + e),
                  s(".slide_tag_js_or_one_more_new_" + e).removeClass("op0");
              }),
            s(".mask_js").length && icHelper.maskJs(),
            s(document).on("mousedown", function (e) {
              var t = s(".inner_range, .square_toggle");
              t.is(e.target) ||
                0 !== t.has(e.target).length ||
                t.removeClass("show");
            }),
            s(".auto_height_js").length &&
              s(".auto_height_js").each(function (e) {
                s(this).on("keyup", function (e) {
                  window.icHelper.autoHeight(this, 9);
                });
              }),
            ("ontouchstart" in window || navigator.msMaxTouchPoints > 0) &&
              s("body").addClass("touch_body"),
            s(document).on("click", ".square_toggle", function (e) {
              e.preventDefault();
              var t = s(this);
              t.next().hasClass("show")
                ? (t.next().removeClass("show"), t.removeClass("show"))
                : (s(".inner_range").removeClass("show"),
                  t.next().addClass("show"),
                  t.addClass("show"));
            }),
            s(".scrollto").click(function (e) {
              if ((e.preventDefault(), s(s(this).attr("href")).length)) {
                var t = s(window).scrollTop(),
                  i = s(s(this).attr("href")),
                  n = i.offset().top;
                if (
                  (n < t
                    ? (n -= s(".site_header").outerHeight())
                    : document.documentElement.clientHeight !=
                        window.innerHeight &&
                      s(window).width() < 768 &&
                      (n -= 50),
                  s(this).hasClass("scrollto_center"))
                ) {
                  var o = i.outerHeight();
                  document.documentElement.clientHeight > o &&
                    (n -= (document.documentElement.clientHeight - o) / 2);
                }
                s("html, body").animate(
                  {
                    scrollTop: n,
                  },
                  500
                );
              }
            }),
            u(document.querySelectorAll(".scrollto_js")).map(function (e) {
              var t;
              null !== (t = e.getAttribute("href")) &&
                void 0 !== t &&
                t.includes("#") &&
                e.addEventListener("click", function (t) {
                  t.preventDefault();
                  var i =
                    document
                      .getElementById(e.getAttribute("href").replace("#", ""))
                      .getBoundingClientRect().top + window.pageYOffset;
                  e.getAttribute("data-offset") &&
                    (i += +e.getAttribute("data-offset"));
                  var n = document.querySelector(".site_header"),
                    o = document.querySelector(".menu_site_fix");
                  i < window.scrollY &&
                    n &&
                    ((i -= n.offsetHeight), o && (i -= o.offsetHeight)),
                    window.scrollTo({
                      top: i,
                      behavior: "smooth",
                    });
                });
            }),
            icHelper.selectJs(),
            s(document).on("click", ".modal_inner_js", function () {
              s(this).hasClass("modal_gal_js") &&
                s(s(this).attr("data-cont"))
                  .find(".gal_modal_foto_js")
                  .attr("data-number", s(this).attr("data-number"));
              var e = s(s(this).attr("data-cont")).html();
              if (s(this).find(".div_tit").length)
                var t = s(this).find(".div_tit").text();
              else t = s(this).attr("data-title");
              if (s(this).attr("data-class"))
                var i = s(this).attr("data-class");
              else i = void 0;
              if (s(this).attr("data-idmodal"))
                var n = s(this).attr("data-idmodal");
              else n = void 0;
              icHelper.showModal(e, t, n, i);
            }),
            s("#fix_right_m").length &&
              s(window).width() > 768 &&
              s(window).scroll(function () {
                var e = s(this).scrollTop();
                if (s("#fix_right_point").length)
                  var t = s("#fix_right_point").offset().top;
                else t = s("#fix_right_m").offset().top;
                e > t
                  ? (s(".ul_right_menu").addClass("fix_top"),
                    s(".ul_right_menu").css(
                      "width",
                      s("#fix_right_m").width() + 15
                    ))
                  : (s(".ul_right_menu").removeClass("fix_top"),
                    s(".ul_right_menu").css("width", "100%")),
                  s("#fix_right_m .fix_top li").each(function (t, i) {
                    var n = s(this).find("a").attr("href");
                    if (s(n).length) {
                      var o = s(n).offset().top;
                      if (
                        s(
                          s("#fix_right_m .fix_top li:last-child")
                            .find("a")
                            .attr("href")
                        ).length
                      ) {
                        var a = s(
                          s("#fix_right_m .fix_top li:last-child")
                            .find("a")
                            .attr("href")
                        ).offset().top;
                        if (e > a - window.innerHeight + 100)
                          return (
                            s("#fix_right_m li").removeClass("active"),
                            s("#fix_right_m .fix_top li:last-child").addClass(
                              "active"
                            ),
                            !1
                          );
                      }
                      if (e < o - window.innerHeight + 100)
                        return (
                          s("#fix_right_m li").removeClass("active"),
                          s(this).prev().addClass("active"),
                          !1
                        );
                    }
                  }),
                  s("body").outerHeight() -
                    s(this).scrollTop() -
                    s(window).height() >
                  s(".footer_div").height()
                    ? s(".ul_right_menu").removeClass("fix_bot")
                    : s(".ul_right_menu").addClass("fix_bot");
              }),
            (function () {
              s(".all_warning_alert").length && s("body").addClass("warning_y");
              s(".all_warning_alert").length &&
                (s(".all_warning_alert").width() <
                s(".all_warning_alert .aw_text").outerWidth()
                  ? "ontouchstart" in document.documentElement
                    ? s(".all_warning_alert").marquee({
                        duration: 2e4,
                        duplicated: !0,
                      })
                    : s(".all_warning_alert").marquee({
                        duration: 2e4,
                        duplicated: !0,
                        pauseOnHover: !0,
                      })
                  : s(".all_warning_alert .aw_line_last").addClass("d-none"));
            })(),
            icHelper.headnavbar(),
            icHelper.showVideoClick(),
            icHelper.tooltipJs(),
            icHelper.fonHeight(),
            icHelper.logoProcent(),
            icHelper.numberAnimation(),
            icHelper.blockAnimation(),
            icHelper.blockAnimation2(),
            icHelper.textLength(),
            icHelper.navbarMenu(),
            icHelper.blockAnimationPosition(),
            icHelper.fix_button_start0(),
            icHelper.mcustomScroll(),
            icHelper.tooltipHideModal(),
            icHelper.showModalAlertOpen(),
            icHelper.rangeDpopdawn(),
            icHelper.rangeDpopdawnBtn(),
            icHelper.dropdowNotClose(),
            icHelper.filterDisabled(),
            icHelper.cangeFileAdd(),
            icHelper.clickInputAppend(),
            icHelper.filterChange(),
            icHelper.searchReset(),
            icHelper.btnCollapsFocus(),
            icHelper.profileBodyClass(),
            icHelper.selectMultyPlaceholder(),
            icHelper.selectInputTag(),
            icHelper.daterangepickerHtml(),
            icHelper.btnTabClick(),
            icHelper.sortTable(),
            icHelper.rightCheckAll(),
            icHelper.checkAllNew(),
            icHelper.checkboxElDisabled(),
            icHelper.initSandartCalendar(),
            icHelper.visitPage(),
            icHelper.collapseText(),
            icHelper.slidTagOne(),
            icHelper.sortFlex(),
            icHelper.dropdownSearch(),
            icHelper.collapsText(),
            icHelper.checkboxText(),
            icHelper.checkboxTable(),
            setTimeout(function () {
              icHelper.slidTwoNav();
            }, 300),
            icHelper.modalVideo(),
            icHelper.filterMob(),
            icHelper.collapseEl(),
            icHelper.checkAllCheckbox(),
            icHelper.fancyboxAll(),
            icHelper.resizeTextarea(),
            icHelper.toggleIco(),
            icHelper.btnTopScroll(),
            icHelper.vhMobile(),
            icHelper.collapseGroupOptions(),
            icHelper.gSelectBuild(),
            icHelper.inframeMessage(),
            icHelper.dropdownTableTdFilter(),
            icHelper.buildChoiceGroupsTabClick(),
            icHelper.autchMdAdd(),
            icHelper.slickModalGal(),
            icHelper.grid4col(),
            icHelper.profileRightMenu(),
            icHelper.profilePunctLoader(),
            icHelper.stageStickyMd(),
            icHelper.webpReplacement(),
            icHelper.imgDPR(".dpr_js"),
            icHelper.addClassScroll(),
            s(".modal").on("hidden.bs.modal", function (e) {
              s(".modal.show").length &&
                !s("body").hasClass("modal-open") &&
                s("body").addClass("modal-open");
            }),
            s(document).on(
              "click",
              '.modal-backdrop, .modal-close-body, *[data-dismiss="modal"]',
              function () {
                setTimeout(function () {
                  s(".modal.show").length &&
                    !s("body").hasClass("modal-open") &&
                    s("body").addClass("modal-open");
                }, 500);
              }
            ),
            s(document).on("click", ".modal-backdrop, .btn-no", function () {
              setTimeout(function () {
                s(".modal.show").length &&
                  !s("body").hasClass("modal-open") &&
                  s("body").addClass("modal-open");
              }, 500);
            }),
            s(".request-in-cluster-button").on("click", function () {
              var e = Routing.generate("requestInCluster"),
                t = s(this).data().company;
              icHelper.loaderSpin(),
                s
                  .ajax({
                    method: "POST",
                    url: e,
                    global: !0,
                    data: {
                      company: t,
                    },
                  })
                  .done(function (e) {
                    icHelper.removeLoader(),
                      icHelper.showModal(e, "Стать участником кластера");
                  })
                  .fail(function (e) {
                    icHelper.removeLoader(),
                      401 === e.status
                        ? icHelper.showModalAlert(
                            "Ошибка",
                            "Доступно только авторизованному пользователю"
                          )
                        : 403 === e.status
                        ? icHelper.showModalAlert("Ошибка", "Доступ запрещен")
                        : icHelper.showModalAlert(
                            "Ошибка",
                            "Произошла ошибка, попробуйте позже"
                          );
                  });
            }),
            s(document).on("click", "#requestToUnpublish", function () {
              var e = s(this).data("id");
              s.get(
                Routing.generate("request_to_unpublish_project", {
                  projectId: e,
                })
              ).done(function (e) {
                icHelper.showModalAlert("Ваш запрос отправлен менеджеру фонда");
              });
            }),
            s(document).on("click", ".company_rent_patent", function () {
              var e = s("#companyId").data("companyid"),
                t = s(this).data("eid");
              s.get(
                Routing.generate("ajax_request_company_patent", {
                  guid: t,
                  companyid: e,
                })
              ).done(function (e) {
                icHelper.showModal(
                  e,
                  "Заявка на приобретение прав",
                  void 0,
                  "modal800"
                );
              });
            }),
            s(document).on("click", ".company_rent_platform", function () {
              s.get(Routing.generate("ajax_request_company_platform", {})).done(
                function (e) {
                  icHelper.showModal(
                    e,
                    "Заявка на пилотирование продукта",
                    void 0,
                    "modal800"
                  );
                }
              );
            }),
            s(document).on("click", "#company_rent_service", function () {
              var e = s(this).data("companyid"),
                t = s(this).data("eid");
              s.ajax({
                url: Routing.generate("ajax_request_company_service"),
                global: !0,
                method: "POST",
                data: {
                  guid: t,
                  companyid: e,
                },
              })
                .done(function (e) {
                  icHelper.showModal(e, "Заказать услугу", void 0, "modal800");
                })
                .fail(function () {});
            }),
            s(document).on("click", "#request_for_resident", function () {
              var e = s(this).data("target"),
                t = s(this).data("item");
              return (
                icHelper.beforeLoadMore(s(this)),
                s
                  .ajax({
                    url: Routing.generate("ajax_request_resident", {
                      id: t,
                    }),
                    global: !0,
                    method: "POST",
                    data: {
                      company_to: e,
                    },
                  })
                  .done(function (e) {
                    icHelper.showModal(
                      e,
                      "Заявка на присоединение к межотраслевому кластеру",
                      void 0,
                      "modal800"
                    ),
                      icHelper.afterLoadMore(s(this));
                  })
                  .fail(function () {
                    console.log("error for showModal"),
                      icHelper.afterLoadMore(s(this));
                  }),
                !1
              );
            }),
            s(document).on("click", "#company_buy_product", function () {
              var e = s(this).data("companyid"),
                t = s(this).data("eid");
              s.ajax({
                url: Routing.generate("ajax_request_company_product"),
                global: !0,
                method: "POST",
                data: {
                  guid: t,
                  companyid: e,
                },
              })
                .done(function (e) {
                  icHelper.showModal(e, "Купить продукцию", void 0, "modal800");
                })
                .fail(function () {});
            }),
            s(document).on("submit", "#request_in_cluster_form", function (e) {
              e.preventDefault(),
                s(this).find(":input:disabled").removeAttr("disabled");
              var t = s(this).attr("action"),
                i = s(this).serialize();
              icHelper.loaderSpin(),
                icHelper.hideModal(),
                setTimeout(function () {
                  s.ajax({
                    method: "POST",
                    global: !0,
                    url: t,
                    data: i,
                  })
                    .done(function (e) {
                      icHelper.removeLoader(),
                        icHelper.showModal(e, ""),
                        s("#request-in-cluster").remove();
                    })
                    .fail(function (e) {
                      icHelper.removeLoader(),
                        icHelper.showModalAlert(
                          "Ошибка",
                          "Произошла ошибка, попробуйте позже"
                        );
                    });
                }, 200);
            }),
            s(document).on("click", ".tabs_investor .div_a", function (e) {
              var t = s(e.target).data("content");
              s(".tabs_investor .div_a").removeClass("active"),
                s(this).addClass("active"),
                s
                  .get(
                    Routing.generate("ajax_request_set_widget_needs", {
                      type: t,
                    })
                  )
                  .done(function (e) {
                    s(".main_content").html(e);
                  });
            }),
            s(document).on("click", ".legal-only, .no-access", function (e) {
              e.preventDefault(), showNoAccessModal();
            }),
            s(document).on("click", ".no-lk", function () {
              var e = Routing.generate("connect_sudir_start", {
                onlyX509: 1,
              });
              /i\.moscow/gm.test(window.location.href);
              var t =
                '    <div id="lkModAutch2">\n        <div class="autch_lk_mes">\n            <div class="div_tit">\n                <div class="dt1">\n                    <img src="/build/img/autch_mos_mes_exclamation_point.svg">\n                </div>\n                <div class="dt2">Личный кабинет доступен\n                    только для юридических лиц</div>\n            </div>\n            <div class="div_text">\n                <p>Вы авторизовались как физическое лицо <span class="sp_bg_blue">без привязки\n                        к организации.</span> Чтобы получить доступ в личный кабинет юридического лица, <span class="sp_bg_blue">необходимо получить права доступа\n                        в качестве доверенного лица.</span></p>\n                <p>Для этого руководителю организации <span class="sp_bg_blue">необходимо пройти регистрацию с использованием электронной цифровой подписи (УКЭП)</span> и добавить своих сотрудников в список <span class="sp_bg_blue">доверенных лиц.</span></p>\n            </div>\n            <div class="div_btn">\n                <a href="' +
                e +
                '" class="btn btn-grad">\n                    Авторизоваться с УКЭП\n                </a>\n            </div>\n        </div>\n    </div>';
              icHelper.showModalAlert("", t);
            }),
            s(document).on("click", "#products-search-button", function (e) {
              e.preventDefault(), icHelper.productsSearch(s(this));
            }),
            s(document).on("click", "#patents-search-button", function (e) {
              e.preventDefault(), icHelper.patentsSearch(s(this));
            }),
            s(document).on("change", ".filter_patent", function () {
              icHelper.patentsSearch(s(this));
            }),
            s(document).on("keydown", "#filter_patents_date", function (e) {
              if (13 === e.which) {
                s(this)
                  .val()
                  .match(
                    /(19|20)\d\d-((0[1-9]|1[012])-(0[1-9]|[12]\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)/
                  ) && icHelper.patentsSearch(s(this));
              }
            }),
            s(document).on("click", "#products-search-button", function (e) {
              e.preventDefault(), icHelper.patentsSearch(s(this));
            }),
            s(document).on("keydown", "#patents-search-input", function (e) {
              13 === e.which && icHelper.patentsSearch(s(this));
            }),
            s(document).on("change", "#patentsBranchFilter", function () {
              var e = s("#patentsBranchFilter").val();
              s.get(
                Routing.generate("patentsList", {
                  update: !0,
                  searchRequest: "",
                  branch: e,
                })
              ).done(function (e) {
                s("#search_content").html(e);
              });
            }),
            s(document).on("click", ".span_a", function () {
              var e = s(this).data("sorttype");
              icHelper.loaderSpin(void 0, "search"),
                s
                  .get(
                    Routing.generate("patentsList", {
                      update: !0,
                      sortType: e,
                    })
                  )
                  .done(function (e) {
                    icHelper.removeLoader(), s("#search_content").html(e);
                  });
            }),
            s(document).on(
              "click",
              ".cluster_invite_decline_start",
              function () {
                s(".decline_comment").show(),
                  s(this).hide(),
                  s(".cluster_invite_accept").hide();
              }
            ),
            s(document).on("click", ".cluster_invite_back", function () {
              s(".decline_comment").hide(),
                s(this).show(),
                s(".cluster_invite_accept").show(),
                s(".cluster_invite_decline_start").show();
            }),
            s(document).on(
              "input",
              ".decline_comment_disabled_js .decline_comment_area",
              function () {
                "" != s(this).val()
                  ? s(this)
                      .closest(".decline_comment_disabled_js")
                      .find(".cluster_invite_decline")
                      .removeAttr("disabled")
                  : s(this)
                      .closest(".decline_comment_disabled_js")
                      .find(".cluster_invite_decline")
                      .attr("disabled", "disabled");
              }
            ),
            s("a:not(.newWindow)").attr("target", "_self"),
            window.location.href.indexOf("profile/rent") > -1 &&
              s.active < 1 &&
              setTimeout(function () {
                icHelper.removeLoader();
              }, 500),
            s(document).on("click", ".showPreRegModal", function () {
              icHelper.loaderSpin(),
                s
                  .ajax({
                    method: "GET",
                    url: Routing.generate("measureSupportRequest", {
                      id: "bdc929e2fdb24839b70f31426021b2c5",
                    }),
                    global: !0,
                  })
                  .done(function (e) {
                    icHelper.removeLoader(),
                      icHelper.showModal(e, "Стать участником кластера");
                  })
                  .fail(function (e) {
                    icHelper.removeLoader(),
                      401 === e.status
                        ? icHelper.showModalAlert(
                            "Ошибка",
                            "Доступно только авторизованному пользователю"
                          )
                        : 403 === e.status
                        ? icHelper.showModalAlert("Ошибка", "Доступ запрещен")
                        : icHelper.showModalAlert(
                            "Ошибка",
                            "Произошла ошибка, попробуйте позже"
                          );
                  });
            });
        }),
        s(window).bind("resize", function () {
          icHelper.calendarHtml(),
            icHelper.fonHeight(),
            icHelper.mcustomScrollResize(),
            icHelper.profileRightMenu(),
            s(".slide_js[data-mob]").length &&
              setTimeout(function () {
                s(".slide_js").each(function (e) {
                  void 0 !== s(this).attr("data-mob") &&
                    icHelper.slidMaket(".slide_js_or_new_" + e);
                });
              }, 500);
        }),
        s(window).bind("load", function () {
          icHelper.fonHeight(),
            s(".op0_loader").length &&
              s(".op0_loader").removeClass("op0_loader"),
            icHelper2.videoDuration();
        }),
        s(window).bind("load resize", function () {
          !(function () {
            if (s(".council_div_js").length && s(window).width() < 1300) {
              var e = s(window).width() / 1400;
              console.log(e),
                s(".council_div_js").css({
                  transform: "scale(" + e + ")",
                  "transform-origin": "left top",
                });
            }
          })(),
            icHelper.grid4col();
        }),
        (window.defaultRequestDone = function () {
          icHelper.hideModal(),
            icHelper.showModalAlert(
              "Ваша заявка отправлена",
              '<div class="modal_btn"><button onclick="icHelper.hideModal();" type="button" class="btn btn2-light">Закрыть</button></div>'
            );
        }),
        (window.showNoAccessModal = function () {
          var e = Routing.generate("connect_sudir_start", {
            onlyX509: 1,
          });
          /i\.moscow/gm.test(window.location.href),
            s
              .ajax({
                method: "POST",
                global: !0,
                url: Routing.generate("getUserTrusteeCompanies"),
                success: function (t) {
                  var i = "";
                  (i =
                    (t = JSON.parse(t)) && !r.isEmptyObject(t)
                      ? '    <div id="lkModAutch2">\n        <div class="autch_lk_mes">\n            <div class="div_tit">\n                <div class="dt1">\n                    <img src="/build/img/autch_mos_mes_exclamation_point.svg">\n                </div>\n                <div class="dt2">Функционал доступен только <br>                     для юридических лиц</div>\n            </div>\n            <div class="div_text">\n                Чтобы воспользоваться данным функционалом вам необходимо перейти в личный кабинет юридической компании, доверенным лицом которой вы являетесь.</div>\n            <div class="div_btn">\n                <a href="' +
                        e +
                        '" class="btn btn-grad">\n                    Авторизоваться с УКЭП\n                </a>\n            </div>\n        </div>\n    </div>'
                      : '    <div id="lkModAutch2">\n        <div class="autch_lk_mes">\n            <div class="div_tit">\n                <div class="dt1">\n                    <img src="/build/img/autch_mos_mes_exclamation_point.svg">\n                </div>\n                <div class="dt2">Функционал доступен только <br>                     для юридических лиц</div>\n            </div>\n            <div class="div_text">\n                <p>Вы авторизовались как физическое лицо <span class="sp_bg_blue">без привязки <br>                        к организации.</span> Чтобы воспользоваться данным функционалом, <span class="sp_bg_blue">необходимо зарегистрироваться как юридическое лицо.</span></p>\n                <p>Для этого руководителю организации необходимо <span class="sp_bg_blue">пройти регистрацию с использованием электронной цифровой подписи (УКЭП)</span> и добавить своих сотрудников в список <span class="sp_bg_blue">доверенных лиц.</span></p>\n            </div>\n            <div class="div_btn">\n                <a href="' +
                        e +
                        '" class="btn btn-grad">\n                    Авторизоваться с УКЭП\n                </a>\n            </div>\n        </div>\n    </div>'),
                    icHelper.showModalAlert("", i, "modal560");
                },
              })
              .always(function () {
                icHelper.removeLoader();
              });
        }),
        (window.icHelper2 = {
          slidMaket: function (e, t) {
            if (void 0 !== s(e).attr("data-mob")) {
              if (s(e).attr("data-mob") > 0) {
                if (s(window).width() >= s(e).attr("data-mob"))
                  return (
                    s(e).hasClass("slick-initialized") && s(e).slick("unslick"),
                    !1
                  );
              } else if (
                s(window).width() <= +s(e).attr("data-mob").replace("-", "")
              )
                return (
                  s(e).hasClass("slick-initialized") && s(e).slick("unslick"),
                  !1
                );
              if (s(e).hasClass("slick-initialized")) return !1;
            }
            s(e).slick({
              dots: !0,
              slidesToShow: 3,
              slidesToScroll: 3,
              variableWidth: !0,
              prevArrow:
                '<button type="button" class="slick-prev"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_before"></use></svg></button>',
              nextArrow:
                '<button type="button" class="slick-next"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_next"></use></svg></button>',
              responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    variableWidth: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ],
            });
          },
          slidMain: function (e) {
            var t,
              i,
              n = s(e + " .main_cont1_slide:not(.slick-initialized)"),
              o = 0;
            n.on("init", function (t, i, n, a) {
              if (
                s(
                  e + ' .main_cont1_slide [data-slick-index="0"] .div_el'
                ).hasClass("color_navigation")
              ) {
                var l = s(
                  e + ' .main_cont1_slide [data-slick-index="0"] .div_el'
                ).attr("data-stroke");
                s(e + " .main_cont1 .slick-arrow").each(function () {
                  s(this).find("svg").css("stroke", l);
                }),
                  s(e + " .main_cont1 .slick-dots li").each(function () {
                    s(this).find("button").css("background", l);
                  });
              }
              setInterval(function () {
                o += 100;
              }, 100);
            }),
              n.slick({
                dots: !0,
                variableWidth: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 8e3,
                appendArrows: n.closest(".main_cont1").find(".div_navigation"),
                appendDots: n.closest(".main_cont1").find(".div_navigation"),
                prevArrow:
                  '<button type="button" class="slick-prev" onclick="ym(55621495,\'reachGoal\',\'Слайдер влево\');"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_before"></use></svg></button>',
                nextArrow:
                  '<button type="button" class="slick-next" onclick="ym(55621495,\'reachGoal\',\'Слайдер вправо\');"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_next"></use></svg></button>',
                customPaging: function (e, t) {
                  return '<button type="button" role="tab"></button><svg class="svg_loader" width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle class="cir1" cx="50" cy="50" r="35"/><circle class="cir2" cx="50" cy="50" r="35"/></svg>';
                },
              }),
              n.on("beforeChange", function (t, n, a, l) {
                (o = 0), clearTimeout(i);
                var r = s(e + " [data-slick-index=" + l + "] .div_el");
                if (r.hasClass("color_navigation")) {
                  var c = r.attr("data-stroke");
                  s(e + " .main_cont1 .slick-arrow").each(function () {
                    s(this).find("svg").css("stroke", c);
                  }),
                    s(e + " .main_cont1 .slick-dots li").each(function () {
                      s(this).find("button").css("background", c);
                    });
                } else
                  s(e + " .main_cont1 .slick-arrow").each(function () {
                    s(this).find("svg").removeAttr("style");
                  }),
                    s(e + " .main_cont1 .slick-dots li").each(function () {
                      s(this).find("button").removeAttr("style");
                    });
              }),
              s(window).width() < 1200 &&
                ("ontouchstart" in window || navigator.msMaxTouchPoints > 0) &&
                n
                  .mouseenter(function () {
                    clearTimeout(i), (t = 8e3 - o);
                  })
                  .mouseleave(function () {
                    i = setTimeout(function () {
                      n.slick("slickNext");
                    }, t);
                  });
          },
          slidMain2: function (e) {
            var t,
              i,
              n = s(e + ":not(.slick-initialized)"),
              o = 0;
            n.on("init", function (t, i, n, a) {
              if (
                s(e + ' [data-slick-index="0"] .div_el').hasClass(
                  "color_navigation"
                )
              ) {
                var l = s(e + ' [data-slick-index="0"] .div_el').attr(
                  "data-stroke"
                );
                s(e + " .slick-arrow").each(function () {
                  s(this).find("svg").css("stroke", l);
                }),
                  s(".button_click_admin_js").on("mousedown", function () {
                    icHelper.loaderSpin(),
                      s(this).find(".divBtn_admin_js").click();
                  });
              }
              setInterval(function () {
                o += 100;
              }, 100);
            }),
              n.slick({
                dots: !0,
                arrows: !0,
                variableWidth: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 8e3,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                appendArrows: n.parent().find(".slid_btn"),
                responsive: [
                  {
                    breakpoint: 1700,
                    settings: {
                      swipe: !1,
                    },
                  },
                  {
                    breakpoint: 991,
                    settings: {
                      swipe: !0,
                    },
                  },
                ],
              }),
              n.on("beforeChange", function (t, n, a, l) {
                (o = 0), clearTimeout(i);
                var r = s(e + " [data-slick-index=" + l + "] .div_el");
                if (r.hasClass("color_navigation")) r.attr("data-stroke");
                else
                  s(e + " .slick-dots li").each(function () {
                    s(this).find("button").removeAttr("style");
                  });
              }),
              s(window).width() > 1200 &&
                !("ontouchstart" in window || navigator.msMaxTouchPoints > 0) &&
                n
                  .mouseenter(function () {
                    clearTimeout(i), (t = 8e3 - o);
                  })
                  .mouseleave(function () {
                    i = setTimeout(function () {
                      n.slick("slickNext");
                    }, t);
                  });
          },
          slideNew: function (e) {
            if (void 0 !== s(e).attr("data-mob")) {
              if (s(e).attr("data-mob") > 0) {
                if (s(window).width() >= s(e).attr("data-mob"))
                  return (
                    s(e).hasClass("slick-initialized") && s(e).slick("unslick"),
                    !1
                  );
              } else if (
                s(window).width() <= +s(e).attr("data-mob").replace("-", "")
              )
                return (
                  s(e).hasClass("slick-initialized") && s(e).slick("unslick"),
                  !1
                );
              if (s(e).hasClass("slick-initialized")) return !1;
            }
            s('<div class="append_arrows slide_navigation"></div>').insertAfter(
              s(e)
            );
            var t = !1;
            if ((s(e).hasClass("slide2_loader") && (t = !0), !s(e).length))
              return !1;
            if (
              (s(e).slick({
                dots: !0,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !0,
                autoplay: t,
                autoplaySpeed: 4e3,
                prevArrow:
                  '<button type="button" class="slick-prev"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_before"></use></svg></button>',
                nextArrow:
                  '<button type="button" class="slick-next"><svg class="svg-icon" width="31" height="18"><use xlink:href="/svg/all-icons2.svg#navigate_next"></use></svg></button>',
                customPaging: function (e, t) {
                  return '<button type="button" role="tab"></button><svg class="svg_loader svg_loader_none" width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle class="cir1" cx="50" cy="50" r="35"/><circle class="cir2" cx="50" cy="50" r="35"/></svg>';
                },
                responsive: [
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      appendArrows: s(e).next(".append_arrows"),
                      appendDots: s(e).next(".append_arrows"),
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      adaptiveHeight: !0,
                      appendArrows: s(e).next(".append_arrows"),
                      appendDots: s(e).next(".append_arrows"),
                    },
                  },
                ],
              }),
              s(window).width() < 768 &&
                0 ===
                  s(e).next(".append_arrows").find(".slick-dots_mobile")
                    .length &&
                s(e)
                  .next()
                  .find(".slick-dots")
                  .wrap('<div class="slick-dots_mobile"></div>'),
              s(e).hasClass("slide2_loader"))
            ) {
              var i;
              s(e).on("beforeChange", function (e, t, n, o) {
                0, clearTimeout(i);
              }),
                s(e).on("init", function (e, t, i, n) {
                  setInterval(function () {
                    100;
                  }, 100);
                });
            }
            s(e).on("afterChange", function (e, t) {
              s(this)
                .next()
                .find(".slick-dots")
                .css(
                  "transform",
                  "translateX(-" +
                    s(this).slick("slickCurrentSlide") *
                      s(this)
                        .next()
                        .find(".slick-dots_mobile .slick-dots .slick-active")
                        .outerWidth() *
                      1.4 +
                    "px)"
                );
            });
          },
          mainCardShow: function () {
            s(document).on("click", ".main-kv", function () {
              var e = s(this).find(".main-kv-info"),
                t = e.attr("onmouseover"),
                i = e.attr("onmouseout"),
                n = e.data().index;
              s("#main-kv-big-id").html(s(this).find(".main-kv-info").html()),
                s(".main-kv-big, .main-cont-kv").addClass("active"),
                s(".main-kv-big").attr("onmouseover", t),
                s(".main-kv-big").attr("onmouseout", i),
                s(".main-kv-big").data("index", n),
                v(n),
                s(".main-kv-big").css("background", s(this).css("background"));
              var o = s(".main-kv-big").css("background").split(" ");
              s.each(o, function (e, t) {
                if (s(window).width() > 991) {
                  var i = o.indexOf("80%"),
                    n = o.indexOf("91%,"),
                    a = o.indexOf("50%)");
                  (o[i] = "0%"), (o[n] = "120%,"), (o[a] = "30%)");
                  var l = o.indexOf("105%"),
                    r = o.indexOf("90%,"),
                    c = o.indexOf("-12%,"),
                    d = o.indexOf("39%)");
                  (o[l] = "0%"),
                    (o[r] = "120%,"),
                    (o[c] = "-20%,"),
                    (o[d] = "35%)");
                } else if (
                  s(window).width() <= 991 &&
                  s(window).width() >= 768
                ) {
                  var h = o.indexOf("80%"),
                    u = o.indexOf("91%,"),
                    p = o.indexOf("-12%,"),
                    f = o.indexOf("50%)");
                  (o[h] = "95%"),
                    (o[u] = "11%,"),
                    (o[p] = "-10%,"),
                    (o[f] = "32%)");
                  var m = o.indexOf("90%"),
                    v = o.indexOf("35%,"),
                    _ = o.indexOf("-23%,"),
                    g = o.indexOf("39%)");
                  (o[m] = "95%"),
                    (o[v] = "11%,"),
                    (o[_] = "-10%,"),
                    (o[g] = "32%)");
                } else if (s(window).width() <= 767) {
                  var b = o.indexOf("80%"),
                    w = o.indexOf("91%,"),
                    k = o.indexOf("10%,"),
                    y = o.indexOf("50%)");
                  (o[b] = "100%"),
                    (o[w] = "12%,"),
                    (o[k] = "-13%,"),
                    (o[y] = "30%)");
                  var C = o.indexOf("95%"),
                    x = o.indexOf("90%,"),
                    S = o.indexOf("-12%,"),
                    H = o.indexOf("39%)");
                  (o[C] = "100%"),
                    (o[x] = "12%,"),
                    (o[S] = "-50%,"),
                    (o[H] = "32%)");
                }
              });
              var a = o.join(" ");
              s(".main-kv-big").css("background", a);
            }),
              s(document).on("click", ".main-kv-close", function () {
                s(".main-kv-big").addClass("active_not"),
                  setTimeout(function () {
                    s(".main-kv-big").removeClass("active_not");
                  }, 0),
                  setTimeout(function () {
                    s(".main-cont-kv").removeClass("active");
                  }, 0),
                  setTimeout(function () {
                    s(".main-kv-big").removeClass("active");
                  }, 30);
              });
          },
          openPlImg: function () {
            s(document).on("click", ".touch_body .pl_img_js", function () {
              s(this).toggleClass("active");
            });
          },
          adaptivTransform: function () {
            var e = document.getElementsByTagName("html")[0];
            if (
              s(".site_body").length &&
              s(window).outerWidth() > 991 &&
              s(window).outerWidth() < 1290
            ) {
              var t = (e.clientWidth / 1290) * 10;
              e.style.fontSize = t + "px";
            } else e.style.fontSize = "";
          },
          mainTab: function () {
            if (
              (s(document).on("click", ".tab_main_js", function (e) {
                e.preventDefault();
                var t = s(this).parent().data().activecolor,
                  i = s(this).parent().data().notactivecolor;
                s("html, body").animate(
                  {
                    scrollTop: 0,
                  },
                  300
                ),
                  (s(".main-kv-big.active").length ||
                    s(".main-cont-kv.active").length) &&
                    s(".main-kv-big, .main-cont-kv").removeClass("active"),
                  s(".main-cont1-tab .div_active").removeClass(
                    "not_transition"
                  );
                var n = s(this).data("attrclass"),
                  o = ".indexFiz" == n ? "/?fizicheskim-licam" : "/";
                s('a[data-attrclass="' + n + '"]')
                  .siblings()
                  .removeClass("active"),
                  s('a[data-attrclass="' + n + '"]').addClass("active"),
                  s(n).siblings().removeClass("show active"),
                  s(n).tab("show"),
                  s(n + " #main-cont1-sl2").slick("setPosition"),
                  s(".main-cont").length && history.pushState(null, null, o),
                  icHelper2.mainTabWidth(),
                  t
                    ? s(this).css("color", t)
                    : s(".main-cont1-tab .tab.tab_main_js.active").css(
                        "color",
                        s(".main-cont1-tab").data().activecolor
                      ),
                  i
                    ? s(this).siblings(".tab_main_js").css("color", i)
                    : s(".main-cont1-tab .tab.tab_main_js:not(.active)").css(
                        "color",
                        s(".main-cont1-tab").data().notactivecolor
                      );
              }),
              icHelper2.mainTabWidth(),
              "" ==
                new URLSearchParams(window.location.search).get(
                  "fizicheskim-licam"
                ) || window.location.href.includes("/cabinet"))
            ) {
              s('a[data-attrclass=".indexFiz"]').click();
            }
            s(".menu_op_js").removeClass("op0");
          },
          headerTab: function () {
            s(document).on("click", ".tab_header_js", function () {
              s(document).find(".tab_header_js.active").removeClass("active"),
                s(this).addClass("active"),
                s(document)
                  .find(".site_header .tab-pane.show.active")
                  .removeClass("show active"),
                s(document)
                  .find(".site_header .tab-pane" + s(this).data("attrclass"))
                  .addClass("show active");
            });
          },
          mainTabWidth: function () {
            s(".main-cont1-tab").length &&
              s(".main-cont1-tab .div_active").css(
                "width",
                s(".main-cont1-tab .active").outerWidth()
              );
          },
          menuTop: function () {
            s(".msf_dt").each(function () {
              var e = s(this),
                t = e.position().left,
                i = s(".msf_cont").outerWidth();
              i - t < 680 &&
                e.find(".msf_hover").css("margin-left", i - t - 680);
            });
          },
          tabProgressBar: function () {
            s(".nav_loader_js").addClass("nav_loader_active");
            var e, t, i, n;
            function o() {
              e = setInterval(function () {
                (n = s(".pane_loader_js.show .nav-link.active").index()),
                  (t = s(".pane_loader_js.show .nav-link")),
                  (i = t.length - 1),
                  n == i ? (n = 0) : (n += 1),
                  t.eq(n).click();
              }, 15e3);
            }
            s(".nav_loader_js .nav-link").each(function () {
              s(this).append(
                '<div class="line_loader"><div class="line_loader_inner"></div></div>'
              );
            }),
              o(),
              s(document).on("click", ".pane_loader_js .nav-link", function () {
                clearInterval(e), o();
              }),
              s(".nav_child1 .nav-link").on("show.bs.tab", function (t) {
                clearInterval(e), o();
              });
          },
          tabProgressBar2: function () {
            s(".nav_loader2_js2").addClass("nav_loader_active");
            var e, t, i, n, o, a, l;
            function r() {
              e = setInterval(function () {
                (a = s(".pane_loader_js2.show .nav-link.active").index()),
                  (l = s(".nav_loader1_js2 .nav-link.active").index()),
                  (t = s(".pane_loader_js2.show .nav-link")),
                  (i = s(".nav_loader1_js2 .nav-link")),
                  (n = t.length - 1),
                  (o = i.length - 1),
                  a == n
                    ? ((a = 0), l == o ? (l = 0) : (l += 1), i.eq(l).click())
                    : (a += 1),
                  t.eq(a).click();
              }, 15e3);
            }
            s(".nav_loader2_js2 .nav-link").each(function () {
              s(this).append(
                '<div class="line_loader"><div class="line_loader_inner"></div></div>'
              );
            }),
              r(),
              s(document).on(
                "click",
                ".pane_loader_js2 .nav-link",
                function () {
                  clearInterval(e), r();
                }
              ),
              s(".nav_loader1_js2 .nav-link").on("show.bs.tab", function (t) {
                clearInterval(e), r();
              });
          },
          progressBarAndCircle: function () {
            s(document).on(
              "click",
              ".pane_loader_and_circle_js .nav-link",
              function () {
                s(".pane_loader_and_circle_js .info_cards-holder")
                  .removeClass("info_lvl1")
                  .removeClass("info_lvl2")
                  .removeClass("info_lvl3")
                  .removeClass("info_lvl4"),
                  s(".pane_loader_and_circle_js .info_cards-holder").addClass(
                    "info_lvl" + (s(this).index() + 1)
                  );
              }
            );
          },
          searchTop: function () {
            if (s("#myTab_star .line_before").length) {
              var e = s("#myTab_star .active"),
                t = s("#myTab_star .line_before"),
                i = e.outerWidth(),
                n = e.position().left;
              t.css("width", i),
                t.css("left", n),
                s(window).width() < 768 &&
                  setTimeout(function () {
                    s("#myTab_star")
                      .closest(".nav_child1_wrap")
                      .animate(
                        {
                          scrollLeft: s("#myTab_star .active").position().left,
                        },
                        300
                      );
                  }, 300),
                s('#myTab_star a[data-toggle="tab"]').on(
                  "show.bs.tab",
                  function (e) {
                    var t = s(this),
                      i = s("#myTab_star .line_before"),
                      n = t.outerWidth(),
                      o = t.position().left;
                    i.css("width", n),
                      i.css("left", o),
                      s(window).width() < 768 &&
                        setTimeout(function () {
                          s("#myTab_star")
                            .closest(".nav_child1_wrap")
                            .animate(
                              {
                                scrollLeft: s("#myTab_star .active").position()
                                  .left,
                              },
                              300
                            );
                        }, 300);
                  }
                ),
                s("#myTab_star").on("scroll", function () {
                  t.addClass("not_tarnsition"),
                    t.css("left", s("#myTab_star .active").position().left),
                    t.removeClass("not_tarnsition");
                });
            }
          },
          notifTop: function () {
            var e = s(".dropD_holder");
            s(document).on("click", ".header_dropD_ico_js", function () {
              s(this).parent().toggleClass("active");
            }),
              s(document).on("mousedown", function (t) {
                e.is(t.target) ||
                  0 !== e.has(t.target).length ||
                  s(".header_dropD_ico_js").is(t.target) ||
                  0 !== s(".header_dropD_ico_js").has(t.target).length ||
                  e.parent().removeClass("active");
              }),
              s(document).on("mouseenter", ".hc_dt4", function () {
                e.parent().removeClass("active");
              });
          },
          mobMenu: function () {
            s(".site_header").length &&
              s(document).on("click", ".menu_btn_js", function () {
                s("body").toggleClass("menu_mob_show");
              });
          },
          mobMenu2: function () {
            s(".site_header").length &&
              (s(document).on("click", ".menu_btn2_js", function () {
                s("body").toggleClass("menu_mob2_show");
              }),
              s(document).on("click", ".mp_back1_js", function () {
                s("body").removeClass("mp_autch_show");
              }),
              s(document).on(
                "click",
                "body:not(.mp_autch_show) .mp_user .autch_el_active",
                function () {
                  s("body").addClass("mp_autch_show");
                }
              ),
              s(".mp_menu_js").html(
                s(".site_header_profile .header_cont_dt1").html()
              ),
              s(document).on(
                "click",
                ".mp_menu_js .menu_el_dropdown",
                function () {
                  s(this)
                    .closest(".menu_levl2_el")
                    .siblings()
                    .removeClass("active"),
                    s(this).closest(".menu_levl2_el").toggleClass("active"),
                    s("body").toggleClass("menu_mob2_url");
                }
              ),
              s(document).on("click", ".header_search_ico_js", function () {
                s(".div_search_absolute").removeClass("d-md-none"),
                  s("#search_by_string_string").trigger("click"),
                  (s("body").hasClass("transparent_theme") ||
                    s("body").hasClass("header_gradient")) &&
                    s(".header_search_ico_js").addClass("d-md-none"),
                  s("#close_btn_serchUp").on("click", function () {
                    s(".div_search_absolute").addClass("d-md-none"),
                      (s("body").hasClass("transparent_theme") ||
                        s("body").hasClass("header_gradient")) &&
                        s(".header_search_ico_js").removeClass("d-md-none");
                  }),
                  s("#search_by_string_string").focus(),
                  setTimeout(function () {
                    s(".search_result_js")
                      .closest(".top-search")
                      .find(".search_result_js")
                      .removeClass("d-none");
                  }, 0);
              }));
          },
          toogleSrollWidtHeader: function (e) {
            1 ==
            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
              ? s(e).css("padding-right", icHelper2.scrollbarWidth() + "px")
              : s(e).css("padding-right", "");
          },
          scrollbarWidth: function () {
            var e = s(
                '<div style="width:50px; height:50px; overflow:scroll; position:absolute; top:0; left:0; opacity: 0;"><div style="height:100px;"></div></div>'
              ).appendTo("body"),
              t = s(e).outerWidth(),
              i = s("div", e).innerWidth();
            return s(e).remove(), t - i;
          },
          mobShowBtnContent: function () {
            s(".mob_cont_show").length &&
              s(".mob_cont_show_inner").outerHeight() >
                s(".mob_cont_show").outerHeight() &&
              (s(".mob_cont_show").addClass("mob_cont_show_close"),
              s(".mob_cont_show").append(
                '<button type="button" class="btn btn-light mob_cont_show_btn mob_cont_show_btn_js">Развернуть</button>'
              ),
              s(document).on("click", ".mob_cont_show_btn_js", function () {
                s(".mob_cont_show").addClass("mob_cont_show_open");
              }));
          },
          videoModal: function () {
            s("#siteModalVideoAll").on("shown.bs.modal", function (e) {
              s("#video_cluster").trigger("play");
            }),
              s("#siteModalVideoAll").on("hide.bs.modal", function (e) {
                s("#video_cluster").trigger("pause");
              }),
              s(".show_video_o_js").click(function () {
                return s("#siteModalVideoAll").modal("show"), !1;
              });
          },
          videoStudyModal: function () {
            s("#modal_study1").on("shown.bs.modal", function (e) {
              s("#video_study1").trigger("play");
            }),
              s("#modal_study1").on("hide.bs.modal", function (e) {
                s("#video_study1").trigger("pause");
              }),
              s("#modal_study2").on("shown.bs.modal", function (e) {
                s("#video_study2").trigger("play");
              }),
              s("#modal_study2").on("hide.bs.modal", function (e) {
                s("#video_study2").trigger("pause");
              }),
              s("#modal_study3").on("shown.bs.modal", function (e) {
                s("#video_study3").trigger("play");
              }),
              s("#modal_study3").on("hide.bs.modal", function (e) {
                s("#video_study3").trigger("pause");
              }),
              s("#modal_study4").on("shown.bs.modal", function (e) {
                s("#video_study4").trigger("play");
              }),
              s("#modal_study4").on("hide.bs.modal", function (e) {
                s("#video_study4").trigger("pause");
              }),
              s("#modal_study5").on("shown.bs.modal", function (e) {
                s("#video_study5").trigger("play");
              }),
              s("#modal_study5").on("hide.bs.modal", function (e) {
                s("#video_study5").trigger("pause");
              }),
              s("#modal_study6").on("shown.bs.modal", function (e) {
                s("#video_study6").trigger("play");
              }),
              s("#modal_study6").on("hide.bs.modal", function (e) {
                s("#video_study6").trigger("pause");
              });
          },
          videoModalHtml: function () {
            s("#siteModalVideoAllHtml").on("shown.bs.modal", function (e) {
              s("#siteModalVideoAllHtml video").trigger("play");
            }),
              s("#siteModalVideoAllHtml").on("hide.bs.modal", function (e) {
                s("#siteModalVideoAllHtml video").trigger("pause");
              }),
              s(document).on("click", ".show_video_o_js2", function (e) {
                return (
                  s("#siteModalVideoAllHtml").length ||
                    s("body").append(
                      '<div class="modal fade modal_new site_video" id="siteModalVideoAllHtml" role="dialog">\n                            <div class="modal-dialog" role="document">\n                                <div class="modal-content">\n                                    <div>\n                                        <div class="modal-close-body" data-dismiss="modal"><i class="material-icons">close</i></div>\n                                    </div>\n                                    <div class="video_cont"></div>\n                                </div>\n                            </div>\n                        </div>'
                    ),
                  s("#siteModalVideoAllHtml .video_cont").html(
                    s(s(this).attr("data-cont")).html()
                  ),
                  s("#siteModalVideoAllHtml").modal("show"),
                  s("#siteModalVideoAllHtml").on("hide.bs.modal", function (e) {
                    s("#siteModalVideoAllHtml .video_cont iframe").length &&
                      s("#siteModalVideoAllHtml .video_cont iframe").attr(
                        "src",
                        ""
                      );
                  }),
                  !1
                );
              });
          },
          videoDuration: function () {
            var e = s(".duration_video");
            e.length &&
              e.each(function (e) {
                var t = s(this).attr("data-target"),
                  i = window.document.querySelector(t).duration;
                if (!Number.isNaN(i) && Number.isFinite(i)) {
                  var n = Math.round(i) % 60,
                    o = n % 60;
                  s(this).html(
                    (Math.floor(n / 60) < 10 ? "0" : "") +
                      Math.floor(n / 60) +
                      ":" +
                      (o < 10 ? "0" : "") +
                      o
                  );
                }
              });
          },
          filterShowMd: function () {
            s(document).on("click", ".filter_md_btn", function (e) {
              s(this).closest(".filter_md").toggleClass("filter_md_open");
            });
          },
          placeholderAdaptive: function () {
            s(window).width() < 768 &&
              s(".form-control[placeholder320]").length &&
              s(".form-control[placeholder320]").each(function () {
                s(this).attr("placeholder", s(this).attr("placeholder320"));
              }),
              s(window).width() < 992 &&
                s(".form-control[placeholder768]").length &&
                s(".form-control[placeholder768]").each(function () {
                  s(this).attr("placeholder", s(this).attr("placeholder768"));
                });
          },
          tabShowb: function () {
            s(document).on(
              "click",
              ".tab_href_js:not([disabled])",
              function (e) {
                var t = s(this),
                  i = t.attr("href");
                if (
                  (e.preventDefault(),
                  t
                    .closest(".tab_href_wrap_js")
                    .find(".tab_href_js")
                    .removeClass("active"),
                  t.addClass("active"),
                  s(i).siblings().removeClass("show"),
                  s(i).siblings().removeClass("active"),
                  s(i).addClass("active"),
                  s(i).addClass("show"),
                  null != t.attr("data-guid") &&
                    0 == s(i).find(".completed-stage-info").length &&
                    !s(i).hasClass("loading-in-process"))
                ) {
                  var n = t.attr("data-guid"),
                    o = window.location.href.split("/"),
                    a = o[o.length - 1];
                  s(i).addClass("loading-in-process"),
                    icHelper.loaderSpin(i, void 0);
                  var l = "";
                  (l = t.hasClass("tech_contest_tab")
                    ? "techcontest_completed_stage"
                    : t.hasClass("novator_tab")
                    ? "novator_completed_stage"
                    : t.hasClass("ventureacademy_tab")
                    ? "ventureacademy_completed_stage"
                    : "accelerator_completed_stage"),
                    s
                      .post(
                        Routing.generate(l, {
                          requestGuid: a,
                          stageGuid: n,
                        })
                      )
                      .done(function (e) {
                        s(i).find(".exp_ct").replaceWith(e);
                      })
                      .fail(function () {
                        icHelper.showModalAlert("Произошла ошибка");
                      })
                      .always(function () {
                        icHelper.removeLoader(),
                          s(i).removeClass("loading-in-process");
                      });
                }
              }
            );
          },
          fillStars: function () {
            s(".rate .dt").hover(
              function () {
                s(this).addClass("highlited"),
                  s(this).prevAll(".rate .dt").addClass("highlited");
              },
              function () {
                s(this).removeClass("highlited"),
                  s(this).prevAll(".rate .dt").removeClass("highlited");
              }
            ),
              s(document).on(
                "click",
                ".rate .dt:not(.rate-disabled)",
                function () {
                  s(".rate .dt").removeClass("active"),
                    s(this).addClass("active"),
                    s(this).prevAll(".rate .dt").addClass("active");
                }
              );
          },
          contentAreaPb: function () {
            s("#content_area_pb0").length &&
              s("body").addClass("body_content_pb0");
          },
          mainTabCont: function () {
            s(".tab-content-fon").length &&
              s(".tab-content-ch1 > .tab-pane").each(function () {
                var e,
                  t,
                  i = s(this);
                s(window).width() < 768
                  ? i.find(".tab-content-ch2 > .tab-pane").each(function () {
                      (e = s(this)),
                        (t = e.attr("id")),
                        e.insertAfter(s('.nav-link[href="#' + t + '"]'));
                    })
                  : i
                      .find(".main_cont4_nav > .dt1 .tab-pane")
                      .each(function () {
                        (e = s(this)),
                          i.find(".tab-content-ch2").append(e),
                          e.hasClass("show") &&
                            s('.nav-link[href="#' + t + '"]').removeClass(
                              "active_mob"
                            );
                      });
              });
          },
          faTopSelect: function () {
            s(document).on("change", ".fa_top_select_js", function () {
              s(this)
                .closest(".filter_area")
                .find(".fa_top .fa_top_el")
                .eq(s(this).val() - 1)
                .hasClass("active") ||
                s(this)
                  .closest(".filter_area")
                  .find(".fa_top .fa_top_el")
                  .eq(s(this).val() - 1)
                  .click();
            });
          },
          tabSlick: function () {
            s(".tab_slick_js .nav-link").on("shown.bs.tab", function () {
              s(".tab-pane.active .slide2_js").slick("setPosition");
            });
          },
          typeRange: function () {
            s(".type_range_js:not(.ui-slider)").length &&
              s(".type_range_js:not(.ui-slider)").each(function (e) {
                s(this).addClass("type_range_or_new_" + e);
                var t = s(".type_range_or_new_" + e),
                  i = s(t.attr("data-inp")),
                  n = +i.attr("value"),
                  o = +i.attr("step"),
                  a = +i.attr("min"),
                  l = +i.attr("max");
                t.slider({
                  range: "min",
                  min: a,
                  max: l,
                  values: n,
                  step: o,
                  slide: function (e, t) {
                    i.val(t.value);
                  },
                }),
                  t.slider("value", i.val().replace(",", ".")),
                  s(document).on("input", t.attr("data-inp"), function () {
                    t.slider("value", s(this).val());
                  });
              });
          },
          brokenImg: function () {
            s(".broken_img_js").length &&
              (s(".broken_img_js .div_img").length &&
                s(".broken_img_js .div_img").each(function () {
                  var e = s(this),
                    t = e
                      .css("background-image")
                      .replace('url("', "")
                      .replace('")', ""),
                    i = new Image();
                  "none" != t &&
                    ((i.onerror = function () {
                      e.addClass("not_img"), e.attr("style", "");
                    }),
                    (i.src = t));
                }),
              s(".broken_img_js .div_img_js").length &&
                s(".broken_img_js .div_img_js").each(function () {
                  var e = s(this),
                    t = e
                      .css("background-image")
                      .replace('url("', "")
                      .replace('")', ""),
                    i = new Image();
                  "none" != t &&
                    ((i.onerror = function () {
                      e.addClass("not_img"), e.attr("style", "");
                    }),
                    (i.src = t));
                }),
              s(".broken_img_js img").length &&
                s(".broken_img_js img").each(function () {
                  var e = s(this),
                    t = e.attr("src").replace('"', ""),
                    i = new Image();
                  (i.onerror = function () {
                    e.parent().addClass("not_img"), e.hide();
                  }),
                    (i.src = t);
                }));
          },
          cookieCheck: function () {
            localStorage.getItem("cookie_id_user") ||
              s(".cookie_modal").removeClass("d-none"),
              s("#completedCookie").on("click", function () {
                localStorage.setItem("cookie_id_user", "1"),
                  s(".cookie_modal").addClass("d-none");
              });
          },
          listRowDesc: function () {
            var e = document.querySelectorAll(".tab_description_row .div_card"),
              t = document.getElementById("as5Content");
            function i(e) {
              var i;
              e &&
                t &&
                ((i = document.querySelectorAll(".activeAs5")).length > 0 &&
                  i.forEach(function (e) {
                    e.classList.remove("activeAs5");
                  }),
                e.classList.add("activeAs5"),
                (t.innerHTML = e
                  .querySelector("[data-title]")
                  .getAttribute("data-title")));
            }
            e.length > 0 &&
              (e.forEach(function (e) {
                e.addEventListener("click", function () {
                  i(e);
                });
              }),
              i(e[0]));
          },
          lottieAll: function (e, t) {
            var i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              n =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              o = arguments.length > 4 ? arguments[4] : void 0,
              a = d.loadAnimation({
                container: document.getElementById(e),
                renderer: "svg",
                loop: i,
                autoplay: n,
                path: t,
              });
            !n &&
              o &&
              s(window).scroll(function () {
                s(this).scrollTop() > o &&
                  !document.getElementById(e).classList.contains("active_a") &&
                  (a.play(),
                  document.getElementById(e).classList.add("active_a"));
              });
          },
          navigationContainerTopScroll: function () {
            s(document).scroll(function () {
              s(window).scrollTop() >= s("#top_block_point").height() / 1
                ? (s("#navigation_site").addClass("sticky_navigation"),
                  s("body").hasClass("hide_menu")
                    ? s("#navigation_site").removeClass("top_addMenu")
                    : s("#navigation_site").addClass("top_addMenu"))
                : s("#navigation_site").removeClass("sticky_navigation");
            });
          },
          menuScrollActive: function () {
            var e = document.querySelectorAll(".observer_scroll_js");
            u(e).map(function (e) {
              !(function (e) {
                var t = {
                  rootMargin: "0px 0px 0px 0px",
                  threshold: 0.2,
                };
                e.getAttribute("data-options") &&
                  (t = e.getAttribute("options"));
                var i = document.getElementById(
                    e.getAttribute("href").replace("#", "")
                  ),
                  n = new IntersectionObserver(function (t, i) {
                    t[0].isIntersecting &&
                      (document.querySelector(".observer_scroll_js.active") &&
                        document
                          .querySelector(".observer_scroll_js.active")
                          .classList.remove("active"),
                      e.classList.add("active"));
                  }, t);
                i && n.observe(i);
              })(e);
            });
          },
          fixBlock: function () {
            var e = document.getElementById("menuFixWrap"),
              t = document.getElementById("menuFix");
            if (e) {
              var i = e.getBoundingClientRect().top + window.pageYOffset;
              (e.style.height = e.offsetHeight + "px"),
                window.addEventListener("load", function (t) {
                  (i = e.getBoundingClientRect().top + window.pageYOffset),
                    (e.style.height = e.offsetHeight + "px");
                }),
                window.addEventListener("scroll", function () {
                  i <= window.scrollY
                    ? t.classList.add("menu-fix")
                    : t.classList.remove("menu-fix");
                });
            }
          },
        }),
        s(document).on("click", "a.needConfirmAction", function () {
          if (!s(this).data("question")) return !0;
          var e = s(this).data("question"),
            t = s(this).attr("href");
          return (
            icHelper.showModalConfirm(e, function () {
              icHelper.loaderSpin(), window.location.replace(t);
            }),
            !1
          );
        }),
        s(document).ready(function () {
          icHelper2.adaptivTransform(),
            s(".header-menu1").length &&
              (icHelper2.mainTab(), icHelper2.headerTab()),
            s(".menu_site_fix").length && icHelper2.menuTop(),
            s(".main_cont1_slide").length &&
              icHelper2.slidMain(".tab-content-main"),
            s("#main-cont1-sl2").length &&
              icHelper2.slidMain2("#main-cont1-sl2"),
            icHelper2.mainCardShow(),
            icHelper2.openPlImg(),
            s(".slide_js2:not(.slick-initialized)").length &&
              s(".slide_js2:not(.slick-initialized)").each(function (e) {
                s(this).addClass("slide_js2_or_new_" + e),
                  icHelper2.slidMaket(".slide_js2_or_new_" + e);
              }),
            s(".main_cont4 .nav_loader_js").length &&
              s(window).scroll(function () {
                s(this).scrollTop() >
                  s(".main_cont4 .nav_loader_js").offset().top -
                    document.documentElement.clientHeight / 2 &&
                  !s(".nav_loader_js").hasClass("nav_loader_active") &&
                  s(window).width() > 768 &&
                  icHelper2.tabProgressBar();
              }),
            s(".nav_loader1_js2").length &&
              s(window).scroll(function () {
                s(this).scrollTop() >
                  s(".nav_loader1_js2").offset().top -
                    document.documentElement.clientHeight / 2 &&
                  !s(".nav_loader1_js2").hasClass("nav_loader_active") &&
                  s(window).width() > 768 &&
                  icHelper2.tabProgressBar2();
              }),
            s(".slide2_js:not(.slick-initialized)").length &&
              s(".slide2_js:not(.slick-initialized)").each(function (e) {
                s(this).addClass("slide2_js_or_new_" + e),
                  icHelper2.slideNew(".slide2_js_or_new_" + e);
              }),
            s(document).on("click", ".main_cont4_nav .nav-link", function () {
              s(window).width() < 768 && s(this).toggleClass("active_mob");
            }),
            icHelper2.searchTop(),
            icHelper2.mobMenu(),
            icHelper2.mobMenu2(),
            icHelper2.mobShowBtnContent(),
            icHelper2.videoModal(),
            icHelper2.videoStudyModal(),
            icHelper2.videoModalHtml(),
            icHelper2.tabShowb(),
            icHelper2.fillStars(),
            icHelper2.contentAreaPb(),
            icHelper2.typeRange(),
            icHelper2.notifTop(),
            icHelper2.filterShowMd(),
            icHelper2.placeholderAdaptive(),
            icHelper2.progressBarAndCircle(),
            icHelper2.faTopSelect(),
            icHelper2.tabSlick(),
            icHelper2.brokenImg(),
            icHelper2.cookieCheck(),
            icHelper2.listRowDesc(),
            icHelper2.navigationContainerTopScroll(),
            icHelper2.menuScrollActive(),
            icHelper2.fixBlock(),
            s(document).on("click", ".measureInvestStatus", function () {
              var e = s(this).data().status;
              s(".measureInvestStatus").removeClass("active"),
                s(this).addClass("active"),
                icHelper.loaderSpin(),
                s
                  .ajax({
                    url: Routing.generate("investupakovka_profile", {
                      status: e,
                    }),
                    global: !0,
                    method: "POST",
                  })
                  .done(function (e) {
                    s(".requests_list_wrap").html(e);
                  })
                  .always(function () {
                    window.history.pushState(
                      {},
                      document.title,
                      location.origin + location.pathname
                    ),
                      icHelper.removeLoader();
                  });
            }),
            s(document).on(
              "click",
              ".profileCluster_searchPartners",
              function () {
                var e = s(this).parent().find("input").val(),
                  t = Routing.generate("partnersSearch", {
                    searchText: e,
                  });
                window.location.href = t;
              }
            ),
            s(document).on(
              "keypress",
              ".profileCluster_searchPartnersInput",
              function (e) {
                if (13 === e.which) {
                  var t = s(this).parent().find("input").val(),
                    i = Routing.generate("partnersSearch", {
                      searchText: t,
                    });
                  window.location.href = i;
                }
              }
            ),
            s("#mainEvents").length &&
              (s(window).width() < 768 &&
                s("#mainEventsBlockMob").append(s("#mainEventsBlock")),
              s
                .ajax({
                  method: "GET",
                  global: !0,
                  url: Routing.generate("mainEvents"),
                  async: !0,
                })
                .done(function (e) {
                  s("#mainEvents").html(e),
                    icHelper2.slideNew("#main-cont1-sl1");
                })
                .fail(function () {
                  console.log("fail");
                })
                .always(function () {
                  s("#mainEvents").removeClass("grey_loader"),
                    icHelper.tooltipJs();
                }));
        }),
        s(document).ready(function () {
          if (s(".patent_list").length) {
            if (s(".s_size").length && s(".p_size").length)
              for (
                var e = s(".patent_list"),
                  t = e.find(".s_size"),
                  i = e.find(".p_size"),
                  n = 0;
                n < e.length;
                n++
              )
                s(i[n]).height() + 2 === s(t[n]).height() &&
                  (i[n].removeAttribute("data-toggle"),
                  i[n].removeAttribute("data-original-title"));
            if (s(".s_size1").length && s(".p_size1").length)
              for (
                var o = s(".patent_list"),
                  a = o.find(".s_size1"),
                  l = o.find(".p_size1"),
                  r = 0;
                r < o.length;
                r++
              )
                Math.round(s(l[r]).width()) === Math.round(s(a[r]).width()) &&
                  (l[r].removeAttribute("data-toggle"),
                  l[r].removeAttribute("data-original-title"));
            if (s(".s_size2").length && s(".p_size2").length)
              for (
                var c = s(".patent_list"),
                  d = c.find(".s_size2"),
                  h = c.find(".p_size2"),
                  u = 0;
                u < c.length;
                u++
              )
                Math.round(s(h[u]).width()) === Math.round(s(d[u]).width()) &&
                  (h[u].removeAttribute("data-toggle"),
                  h[u].removeAttribute("data-original-title"));
          }
        }),
        s(document).ready(function () {
          if (document.getElementsByClassName("allPatents active").length) {
            if (s(".s_size").length && s(".p_size").length)
              for (
                var e = s(".patent_list"),
                  t = e.find(".s_size"),
                  i = e.find(".p_size"),
                  n = 0;
                n < e.length;
                n++
              )
                s(i[n]).height() + 2 === s(t[n]).height() &&
                  (i[n].removeAttribute("data-toggle"),
                  i[n].removeAttribute("data-original-title"));
            if (s(".s_size1").length && s(".p_size1").length)
              for (
                var o = s(".patent_list"),
                  a = o.find(".s_size1"),
                  l = o.find(".p_size1"),
                  r = 0;
                r < o.length;
                r++
              )
                Math.round(s(l[r]).width()) === Math.round(s(a[r]).width()) &&
                  (l[r].removeAttribute("data-toggle"),
                  l[r].removeAttribute("data-original-title"));
            if (s(".s_size2").length && s(".p_size2").length)
              for (
                var c = s(".patent_list"),
                  d = c.find(".s_size2"),
                  h = c.find(".p_size2"),
                  u = 0;
                u < c.length;
                u++
              )
                Math.round(s(h[u]).width()) === Math.round(s(d[u]).width()) &&
                  (h[u].removeAttribute("data-toggle"),
                  h[u].removeAttribute("data-original-title"));
          }
        }),
        s(window).bind("load resize", function () {
          icHelper2.adaptivTransform(),
            icHelper2.mainTabCont(),
            icHelper2.mainTabWidth();
        }),
        s(document).ready(function () {
          localStorage.getItem("cookie_id_user") ||
            s(".cookie_modal").removeClass("d-none"),
            s("#completedCookie").on("click", function () {
              localStorage.setItem("cookie_id_user", "1"),
                s(".cookie_modal").addClass("d-none");
            });
        }),
        s(document).ready(function () {
          var e = ".search_tooltip",
            t = ".main-cont-search",
            i = ".search_all_js",
            n = ".btn-search",
            o = ".btn-remove",
            a = ".search_result_js",
            l = ".close_btn_search_result",
            r = ".words_block",
            c = ".hint_key_word",
            d = ".block_result",
            u = ".result_group",
            p = ".help_title",
            f = ".more_search_result",
            m = ".moreSearchResult",
            v = [],
            _ = void 0,
            g = "undefined" != typeof searchParams ? searchParams : {},
            b = g.topSearchKeyWords,
            w = g.placeholders;
          if (0 != s(i).length) {
            var k = "";
            b.length > 0 &&
              (b.forEach(function (e) {
                k +=
                  '<span class="' +
                  c.slice(1) +
                  '" data-word="' +
                  e +
                  '">' +
                  e +
                  "</span>";
              }),
              (k =
                '<div class="' +
                r.slice(1) +
                '"><div class="hsr_tit">Что можно найти</div>' +
                k +
                "</div>")),
              s(i).after(
                '<div class="search_result ' +
                  a.slice(1) +
                  ' d-none"><button class="btn btn-close ' +
                  l.slice(1) +
                  '"><svg class="svg-icon" width="20" height="20"><use xlink:href="/svg/all-icons.svg#close2"></use></svg></button>' +
                  k +
                  '<div class="' +
                  d.slice(1) +
                  '"></div></div>'
              ),
              s(document).on("click", l, function () {
                s(this).closest(t).find(a).addClass("d-none");
              }),
              s(document).on("focus", i, function () {
                s(t + " " + a).addClass("d-none"),
                  (0 != b.length || s(this).val().length > 2) &&
                    s(this).closest(t).find(a).removeClass("d-none");
              }),
              s(document).on("click", function (i) {
                0 == s(i.target).closest(e).length &&
                  0 == s(i.target).closest(t).length &&
                  s(a).addClass("d-none"),
                  0 != s(i.target).closest(e).length ||
                    s(i.target).hasClass(p.slice(1)) ||
                    s(e).remove();
              }),
              s(document).on("click", t + " " + p, function () {
                s(this).tooltip("show");
              }),
              s(document).on("click", o, function () {
                var e = s(this).closest(t).find(i);
                e.val(""),
                  e.trigger("input"),
                  setTimeout(function () {
                    e.trigger("focus");
                  }, 100);
              }),
              s(document).on("input", i, function () {
                var e = s(this),
                  i = e.closest(t),
                  a = e.val().trim();
                if (
                  (0 != a.length
                    ? (i.find(n).addClass(o.slice(1)),
                      i
                        .find(n + " svg")
                        .html(
                          '<use xlink:href="/svg/all-icons.svg#close2"></use>'
                        ))
                    : (i.find(n).removeClass(o.slice(1)),
                      i
                        .find(n + " svg")
                        .html(
                          '<use xlink:href="/svg/all-icons2.svg#search"></use>'
                        )),
                  a.length < 3)
                )
                  C(e, []);
                else {
                  if (a.length > 50) return (a = a.slice(0, 50)), void e.val(a);
                  s.ajaxQ.abortAll(),
                    y(e, a, "services", !0),
                    g.searchCompany && y(e, a, "companies");
                }
              }),
              s(document).on("click", a + " a", function () {
                var e = s(this).data();
                1 == e.service &&
                  s.ajax({
                    url: Routing.generate("following_service", {
                      id: e.id,
                    }),
                    method: "GET",
                  });
              }),
              s(document).on("click", c, function () {
                var e = s(this);
                setTimeout(function () {
                  e.closest(t).find(i).val(e.data("word")).trigger("input");
                }, 50);
              }),
              s(document).on("click", m, function () {
                s(this).hide(), s(this).closest(u).find(f).show();
              }),
              w.length > 0 &&
                (function (e) {
                  s(i).each(function (t, i) {
                    setTimeout(S, 1e4, i, e);
                  });
                })(w);
          }
          function y(e, n, o) {
            var a =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              l = Routing.generate("main_search", {
                type: o,
              });
            s.ajax({
              url: l,
              method: "GET",
              data: {
                search: n,
              },
            })
              .done(function (o, l, s) {
                n == e.closest(t).find(i).val().trim() &&
                  C(
                    e,
                    o.data,
                    "Ничего не найдено, попробуйте изменить запрос",
                    a
                  );
              })
              .fail(function (o, a, l) {
                "abort" != a &&
                  n == e.closest(t).find(i).val().trim() &&
                  C(e, [], "Ошибка поиска");
              });
          }
          function C(i, n) {
            var o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "",
              l =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              c = i.closest(t),
              f = (function (t) {
                var i =
                    "<div class='tooltip " +
                    e.slice(1) +
                    "' role='tooltip'><div class='arrow'></div><div class='tooltip-inner'></div></div>",
                  n = "";
                return (
                  t.forEach(function (e) {
                    var t = !1,
                      o = e.options.order || 0;
                    if (
                      ((!e.tabs && 0 == e.result.length) ||
                        !0 === e.options.hideTitle ||
                        (n += '<div class="hsr_tit">' + e.name + "</div>"),
                      0 != e.result.length)
                    ) {
                      var a = h(x(e.result, n, t, e.options), 2);
                      (n = a[0]), (t = a[1]);
                    } else if (e.tabs) {
                      for (
                        var l = "", s = 0, r = Object.entries(e.tabs);
                        s < r.length;
                        s++
                      ) {
                        var c = h(r[s], 2),
                          d = (c[0], c[1]);
                        if (0 != d.data.length) {
                          var f = d.name;
                          d.options &&
                            d.options.icoTitle &&
                            (f =
                              '<div class="img_title">' +
                              d.options.icoTitle +
                              "</div>" +
                              f),
                            d.options &&
                              d.options.help &&
                              (f =
                                f +
                                '<span class="help-ico ' +
                                p.slice(1) +
                                '" data-template="' +
                                i +
                                '" data-html="true" data-trigger="manual" tabindex="0" data-toggle="tooltip" data-original-title="' +
                                d.options.help +
                                '"></span>');
                          var v = '<div class="hsr_tit">' + f + "</div>",
                            _ = h(x(d.data, v, t, e.options), 2);
                          (v = _[0]),
                            (t = _[1]),
                            (l += '<div class="tab_result">' + v + "</div>");
                        }
                      }
                      n += '<div class="tabs_result">' + l + "</div>";
                    }
                    t &&
                      (n +=
                        '<div class="btn btn-light ' +
                        m.slice(1) +
                        ' btn_more_search">Больше результатов</div>'),
                      (n =
                        '<div class="' +
                        u.slice(1) +
                        '" data-order="' +
                        o +
                        '" data-group="' +
                        e.name +
                        '">' +
                        n +
                        "</div>");
                  }),
                  n
                );
              })(n);
            if (0 != n.length) {
              var w = [];
              0 == c.find(u).length && c.find(d).empty(),
                s(f).each(function (e, t) {
                  c.find(u).each(function (e, i) {
                    s(t).data("group") == s(i).data("group") &&
                      (s(t).html() ? s(i).html(s(t).html()) : s(i).remove(),
                      w.push(s(t).data("group")));
                  });
                }),
                s(f).each(function (e, t) {
                  s(t).html() &&
                    -1 == s.inArray(s(t).data("group"), w) &&
                    c.find(d).append(s(t));
                });
              var k = c
                .find(u)
                .toArray()
                .sort(function (e, t) {
                  return s(e).data("order") > s(t).data("order") ? 1 : -1;
                });
              c.find(d).append(k);
            }
            var y = 0 == c.find(u).length || 0 == n.length;
            y
              ? ((f = o ? '<div class="hsr_el">' + o + "</div>" : ""),
                c.find(r).removeClass("d-none"),
                f || 0 != b.length
                  ? (c.find(d).html(f), c.find(a).removeClass("d-none"))
                  : (c.find(d).empty(), c.find(a).addClass("d-none")))
              : (c.find(r).addClass("d-none"), c.find(a).removeClass("d-none")),
              (function (e, t, i) {
                var n = !0;
                i || clearTimeout(_),
                  !t ||
                    e.length < 4 ||
                    !i ||
                    ((e = e.toLowerCase().trim()),
                    v.forEach(function (t) {
                      -1 != e.indexOf(t.text) && clearTimeout(t.timeout),
                        -1 != t.text.indexOf(e) && (n = !1);
                    }),
                    n &&
                      ((_ = setTimeout(function () {
                        s.ajax({
                          url: Routing.generate("search_key_word"),
                          method: "POST",
                          data: {
                            search: e,
                            _token: g._token,
                          },
                        });
                      }, 1e3)),
                      v.push({
                        timeout: _,
                        text: e,
                      })));
              })(i.val(), l, y),
              s(a + ' [data-toggle="tooltip"]').tooltip();
          }
          function x(e, t, i, n) {
            var o = n.limitView || 0,
              a = n.itemIcon
                ? '<div class="icon_item_res">' + n.itemIcon + "</div>"
                : "",
              l = "";
            return (
              e.forEach(function (e, n) {
                var s = e.service || !1,
                  r =
                    '<div class="hsr_el">' +
                    a +
                    '<a href="' +
                    e.url +
                    '" target="_self" data-service="' +
                    s +
                    '" data-id="' +
                    e.id +
                    '">' +
                    e.name +
                    "</a></div>";
                n + 1 > o && 0 != o ? ((l += r), (i = !0)) : (t += r);
              }),
              l &&
                (t +=
                  '<div class="' +
                  f.slice(1) +
                  '" style="display: none">' +
                  l +
                  "</div>"),
              [t, i]
            );
          }
          function S(e, t) {
            if (
              (s(e).attr("placeholder", s(e).attr("placeholder").slice(0, -1)),
              0 != s(e).attr("placeholder").length)
            )
              setTimeout(S, 40, e, t);
            else {
              var i = t[Math.floor(Math.random() * t.length)].keyWord.split("");
              setTimeout(H, 40, e, i, t);
            }
          }
          function H(e, t, i) {
            s(e).attr("placeholder", s(e).attr("placeholder") + t.shift()),
              0 != t.length
                ? setTimeout(H, 40, e, t, i)
                : setTimeout(S, 1e4, e, i);
          }
        }),
        s(document).ready(function () {
          s(document).on("click", "[modal-video]", function (e) {
            e.preventDefault();
            var t = s(this).data();
            if (null != t.source) {
              var i =
                  null != t.source.match(/.mp4$/i)
                    ? 'type="video/mp4" codecs="avc1.42E01E, mp4a.40.2"'
                    : "",
                n =
                  null != t.after
                    ? '<div class="after_content_video">' + t.after + "</div>"
                    : "",
                o =
                  null != t.before
                    ? '<div class="before_content_video">' + t.before + "</div>"
                    : "",
                a = 1 == t.autoplay ? "autoplay" : "";
              icHelper.showModal(
                o +
                  "<video controls " +
                  a +
                  '><source src="' +
                  t.source +
                  '" ' +
                  i +
                  "></video>" +
                  n,
                t.title,
                null,
                "modal_video modal1000",
                null,
                null,
                function (e) {
                  setTimeout(function () {
                    s(".modal_video video").remove();
                  }, 300);
                }
              ),
                null != t.title
                  ? s(".modal_video .modal-header").removeClass("d-none")
                  : s(".modal_video .modal-header").addClass("d-none");
            }
          }),
            setTimeout(function () {
              s(document).on("scroll", function () {
                s(".animUpCounter:not(.animUpComplite)").each(function () {
                  if (
                    !(
                      s(this).offset().top + 70 >
                      s(window).height() + s(document).scrollTop()
                    )
                  ) {
                    var e,
                      t,
                      i,
                      n = s(this),
                      o = n.data("duration") || 2e3,
                      a = n.text(),
                      l = a.match(/(^\d+)?([.,])(\d+)|(^\d+)/m),
                      r = n.width() + "px";
                    if (
                      (n.css({
                        "min-width": r,
                        opacity: "1",
                      }),
                      n.addClass("animUpComplite"),
                      (e = l[1] || l[0] || !1),
                      (t = l[2] || !1),
                      (i = l[3] || !1),
                      !1 !== e)
                    ) {
                      !1 !== t && (e += "."), !1 !== i && (e += i);
                      var c = Number(e) / 20;
                      try {
                        n.prop("Counter", 0).animate(
                          {
                            Counter: 20,
                          },
                          {
                            easing: "swing",
                            duration: o,
                            step: function (e) {
                              var o = c * e;
                              (o =
                                !1 !== i ? o.toFixed(i.length) : o.toFixed(0)),
                                (o += ""),
                                !1 !== t && (o = o.replace(".", t)),
                                n.text(o);
                            },
                            complete: function () {
                              n.text(a), n.css("min-width", "");
                            },
                          }
                        );
                      } catch (e) {
                        n.text(a), n.css("min-width", "");
                      }
                    }
                  }
                });
              }),
                s(document).trigger("scroll");
            }, 300),
            s(document).on("click", ".btn_helpful", function (e) {
              e.preventDefault(),
                s(s(this).data("target")).trigger("click"),
                s(".feedback_page").addClass("show_textarea"),
                s(".btn_helpful").removeClass("btn-grad"),
                s(this).addClass("btn-grad"),
                s(".feedback_page").find("textarea").trigger("focus");
            }),
            s(document).on("submit", ".form_fb_page", function (e) {
              e.preventDefault(),
                icHelper.loaderSpin(),
                s(".feedback_page_errors").hide();
              icHelper.iasFormSendAjax(
                this,
                function (e) {
                  icHelper.removeLoader(),
                    "success" != e
                      ? s(".feedback_page").html(s(e).html())
                      : s(".feedback_page")
                          .removeClass("show_textarea")
                          .addClass("show_final");
                },
                null,
                function (e, t) {
                  if ((icHelper.removeLoader(), e.responseJSON)) {
                    var i = e.responseJSON.captcha,
                      n = e.responseJSON.msg;
                    icHelper.showModalAlert(n),
                      t.find("#support_service_captcha_captcha_input").val(""),
                      t.find("#support_service_captcha_captcha_uid").val(i.uid),
                      t.find("#captcha_image").attr("src", i.img);
                  } else
                    e.responseText &&
                      icHelper.showModalAlertRedirectOnClose(
                        e.responseText,
                        null,
                        location.href
                      );
                }
              );
            });
        }),
        document.addEventListener("DOMContentLoaded", function () {
          window.innerWidth < 375 &&
            document.getElementById("viewport375") &&
            (document.getElementsByTagName("meta").viewport.content =
              "width=375px");
        }),
        s(window).bind("load", function () {
          s(".slick-slider.slick-initialized").length > 0 &&
            s(".slick-slider.slick-initialized").slick("slickSetOption", {
              touchThreshold: 75,
            });
        }),
        document.addEventListener("DOMContentLoaded", function () {
          window.icHelper.changeColorAll();
        });
    },
    231394: function (e, t, i) {
      var n;
      !(function (o) {
        "use strict";
        function a(e, t) {
          var i = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (i >> 16)) << 16) | (65535 & i);
        }
        function l(e, t, i, n, o, l) {
          return a(((l = a(a(t, e), a(n, l))) << o) | (l >>> (32 - o)), i);
        }
        function s(e, t, i, n, o, a, s) {
          return l((t & i) | (~t & n), e, t, o, a, s);
        }
        function r(e, t, i, n, o, a, s) {
          return l((t & n) | (i & ~n), e, t, o, a, s);
        }
        function c(e, t, i, n, o, a, s) {
          return l(t ^ i ^ n, e, t, o, a, s);
        }
        function d(e, t, i, n, o, a, s) {
          return l(i ^ (t | ~n), e, t, o, a, s);
        }
        function h(e, t) {
          var i, n, o, l;
          (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
          for (
            var h = 1732584193,
              u = -271733879,
              p = -1732584194,
              f = 271733878,
              m = 0;
            m < e.length;
            m += 16
          )
            (h = s((i = h), (n = u), (o = p), (l = f), e[m], 7, -680876936)),
              (f = s(f, h, u, p, e[m + 1], 12, -389564586)),
              (p = s(p, f, h, u, e[m + 2], 17, 606105819)),
              (u = s(u, p, f, h, e[m + 3], 22, -1044525330)),
              (h = s(h, u, p, f, e[m + 4], 7, -176418897)),
              (f = s(f, h, u, p, e[m + 5], 12, 1200080426)),
              (p = s(p, f, h, u, e[m + 6], 17, -1473231341)),
              (u = s(u, p, f, h, e[m + 7], 22, -45705983)),
              (h = s(h, u, p, f, e[m + 8], 7, 1770035416)),
              (f = s(f, h, u, p, e[m + 9], 12, -1958414417)),
              (p = s(p, f, h, u, e[m + 10], 17, -42063)),
              (u = s(u, p, f, h, e[m + 11], 22, -1990404162)),
              (h = s(h, u, p, f, e[m + 12], 7, 1804603682)),
              (f = s(f, h, u, p, e[m + 13], 12, -40341101)),
              (p = s(p, f, h, u, e[m + 14], 17, -1502002290)),
              (h = r(
                h,
                (u = s(u, p, f, h, e[m + 15], 22, 1236535329)),
                p,
                f,
                e[m + 1],
                5,
                -165796510
              )),
              (f = r(f, h, u, p, e[m + 6], 9, -1069501632)),
              (p = r(p, f, h, u, e[m + 11], 14, 643717713)),
              (u = r(u, p, f, h, e[m], 20, -373897302)),
              (h = r(h, u, p, f, e[m + 5], 5, -701558691)),
              (f = r(f, h, u, p, e[m + 10], 9, 38016083)),
              (p = r(p, f, h, u, e[m + 15], 14, -660478335)),
              (u = r(u, p, f, h, e[m + 4], 20, -405537848)),
              (h = r(h, u, p, f, e[m + 9], 5, 568446438)),
              (f = r(f, h, u, p, e[m + 14], 9, -1019803690)),
              (p = r(p, f, h, u, e[m + 3], 14, -187363961)),
              (u = r(u, p, f, h, e[m + 8], 20, 1163531501)),
              (h = r(h, u, p, f, e[m + 13], 5, -1444681467)),
              (f = r(f, h, u, p, e[m + 2], 9, -51403784)),
              (p = r(p, f, h, u, e[m + 7], 14, 1735328473)),
              (h = c(
                h,
                (u = r(u, p, f, h, e[m + 12], 20, -1926607734)),
                p,
                f,
                e[m + 5],
                4,
                -378558
              )),
              (f = c(f, h, u, p, e[m + 8], 11, -2022574463)),
              (p = c(p, f, h, u, e[m + 11], 16, 1839030562)),
              (u = c(u, p, f, h, e[m + 14], 23, -35309556)),
              (h = c(h, u, p, f, e[m + 1], 4, -1530992060)),
              (f = c(f, h, u, p, e[m + 4], 11, 1272893353)),
              (p = c(p, f, h, u, e[m + 7], 16, -155497632)),
              (u = c(u, p, f, h, e[m + 10], 23, -1094730640)),
              (h = c(h, u, p, f, e[m + 13], 4, 681279174)),
              (f = c(f, h, u, p, e[m], 11, -358537222)),
              (p = c(p, f, h, u, e[m + 3], 16, -722521979)),
              (u = c(u, p, f, h, e[m + 6], 23, 76029189)),
              (h = c(h, u, p, f, e[m + 9], 4, -640364487)),
              (f = c(f, h, u, p, e[m + 12], 11, -421815835)),
              (p = c(p, f, h, u, e[m + 15], 16, 530742520)),
              (h = d(
                h,
                (u = c(u, p, f, h, e[m + 2], 23, -995338651)),
                p,
                f,
                e[m],
                6,
                -198630844
              )),
              (f = d(f, h, u, p, e[m + 7], 10, 1126891415)),
              (p = d(p, f, h, u, e[m + 14], 15, -1416354905)),
              (u = d(u, p, f, h, e[m + 5], 21, -57434055)),
              (h = d(h, u, p, f, e[m + 12], 6, 1700485571)),
              (f = d(f, h, u, p, e[m + 3], 10, -1894986606)),
              (p = d(p, f, h, u, e[m + 10], 15, -1051523)),
              (u = d(u, p, f, h, e[m + 1], 21, -2054922799)),
              (h = d(h, u, p, f, e[m + 8], 6, 1873313359)),
              (f = d(f, h, u, p, e[m + 15], 10, -30611744)),
              (p = d(p, f, h, u, e[m + 6], 15, -1560198380)),
              (u = d(u, p, f, h, e[m + 13], 21, 1309151649)),
              (h = d(h, u, p, f, e[m + 4], 6, -145523070)),
              (f = d(f, h, u, p, e[m + 11], 10, -1120210379)),
              (p = d(p, f, h, u, e[m + 2], 15, 718787259)),
              (u = d(u, p, f, h, e[m + 9], 21, -343485551)),
              (h = a(h, i)),
              (u = a(u, n)),
              (p = a(p, o)),
              (f = a(f, l));
          return [h, u, p, f];
        }
        function u(e) {
          for (var t = "", i = 32 * e.length, n = 0; n < i; n += 8)
            t += String.fromCharCode((e[n >> 5] >>> n % 32) & 255);
          return t;
        }
        function p(e) {
          var t = [];
          for (t[(e.length >> 2) - 1] = void 0, n = 0; n < t.length; n += 1)
            t[n] = 0;
          for (var i = 8 * e.length, n = 0; n < i; n += 8)
            t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
          return t;
        }
        function f(e) {
          for (
            var t, i = "0123456789abcdef", n = "", o = 0;
            o < e.length;
            o += 1
          )
            (t = e.charCodeAt(o)),
              (n += i.charAt((t >>> 4) & 15) + i.charAt(15 & t));
          return n;
        }
        function m(e) {
          return unescape(encodeURIComponent(e));
        }
        function v(e) {
          return u(h(p((e = m(e))), 8 * e.length));
        }
        function _(e, t) {
          return (function (e, t) {
            var i,
              n = p(e),
              o = [],
              a = [];
            for (
              o[15] = a[15] = void 0,
                16 < n.length && (n = h(n, 8 * e.length)),
                i = 0;
              i < 16;
              i += 1
            )
              (o[i] = 909522486 ^ n[i]), (a[i] = 1549556828 ^ n[i]);
            return (
              (t = h(o.concat(p(t)), 512 + 8 * t.length)),
              u(h(a.concat(t), 640))
            );
          })(m(e), m(t));
        }
        function g(e, t, i) {
          return t ? (i ? _(t, e) : f(_(t, e))) : i ? v(e) : f(v(e));
        }
        void 0 ===
          (n = function () {
            return g;
          }.call(t, i, t, e)) || (e.exports = n);
      })();
    },
  },
]);
