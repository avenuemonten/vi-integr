/*! For license information please see 2464.fc29f683.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [2464],
  {
    277193: function (e, t, i) {
      var n, r, o;
      !(function (s) {
        "use strict";
        (r = [i(619755)]),
          (n = function (e) {
            var t = "dmUploader",
              i = {
                PENDING: 0,
                UPLOADING: 1,
                COMPLETED: 2,
                FAILED: 3,
                CANCELLED: 4,
              },
              n = {
                auto: !0,
                queue: !0,
                dnd: !0,
                hookDocument: !0,
                multiple: !0,
                url: document.URL,
                method: "POST",
                extraData: {},
                headers: {},
                dataType: null,
                fieldName: "file",
                maxFileSize: 0,
                allowedTypes: "*",
                extFilter: null,
                onInit: function () {},
                onComplete: function () {},
                onFallbackMode: function () {},
                onNewFile: function () {},
                onBeforeUpload: function () {},
                onUploadProgress: function () {},
                onUploadSuccess: function () {},
                onUploadCanceled: function () {},
                onUploadError: function () {},
                onUploadComplete: function () {},
                onFileTypeError: function () {},
                onFileSizeError: function () {},
                onFileExtError: function () {},
                onDragEnter: function () {},
                onDragLeave: function () {},
                onDocumentDragEnter: function () {},
                onDocumentDragLeave: function () {},
              },
              r = function (e, t) {
                (this.data = e),
                  (this.widget = t),
                  (this.jqXHR = null),
                  (this.status = i.PENDING),
                  (this.id = Math.random().toString(36).substr(2));
              };
            (r.prototype.upload = function () {
              var t = this;
              if (!t.canUpload())
                return (
                  t.widget.queueRunning &&
                    t.status !== i.UPLOADING &&
                    t.widget.processQueue(),
                  !1
                );
              var n = new FormData();
              n.append(t.widget.settings.fieldName, t.data);
              var r = t.widget.settings.extraData;
              return (
                "function" == typeof r && (r = r.call(t.widget.element, t.id)),
                e.each(r, function (e, t) {
                  n.append(e, t);
                }),
                (t.status = i.UPLOADING),
                t.widget.activeFiles++,
                t.widget.settings.onBeforeUpload.call(t.widget.element, t.id),
                (t.jqXHR = e.ajax({
                  url: t.widget.settings.url,
                  type: t.widget.settings.method,
                  dataType: t.widget.settings.dataType,
                  data: n,
                  headers: t.widget.settings.headers,
                  cache: !1,
                  contentType: !1,
                  processData: !1,
                  forceSync: !1,
                  xhr: function () {
                    return t.getXhr();
                  },
                  success: function (e) {
                    t.onSuccess(e);
                  },
                  error: function (e, i, n) {
                    t.onError(e, i, n);
                  },
                  complete: function () {
                    t.onComplete();
                  },
                })),
                !0
              );
            }),
              (r.prototype.onSuccess = function (e) {
                (this.status = i.COMPLETED),
                  this.widget.settings.onUploadSuccess.call(
                    this.widget.element,
                    this.id,
                    e
                  );
              }),
              (r.prototype.onError = function (e, t, n) {
                this.status !== i.CANCELLED &&
                  ((this.status = i.FAILED),
                  this.widget.settings.onUploadError.call(
                    this.widget.element,
                    this.id,
                    e,
                    t,
                    n
                  ));
              }),
              (r.prototype.onComplete = function () {
                this.widget.activeFiles--,
                  this.status !== i.CANCELLED &&
                    this.widget.settings.onUploadComplete.call(
                      this.widget.element,
                      this.id
                    ),
                  this.widget.queueRunning
                    ? this.widget.processQueue()
                    : this.widget.settings.queue &&
                      0 === this.widget.activeFiles &&
                      this.widget.settings.onComplete.call(this.element);
              }),
              (r.prototype.getXhr = function () {
                var t = this,
                  i = e.ajaxSettings.xhr();
                return (
                  i.upload &&
                    i.upload.addEventListener(
                      "progress",
                      function (e) {
                        var i = 0,
                          n = e.loaded || e.position,
                          r = e.total || e.totalSize;
                        e.lengthComputable && (i = Math.ceil((n / r) * 100)),
                          t.widget.settings.onUploadProgress.call(
                            t.widget.element,
                            t.id,
                            i
                          );
                      },
                      !1
                    ),
                  i
                );
              }),
              (r.prototype.cancel = function (e) {
                e = void 0 !== e && e;
                var t = this.status;
                return (
                  !!(t === i.UPLOADING || (e && t === i.PENDING)) &&
                  ((this.status = i.CANCELLED),
                  this.widget.settings.onUploadCanceled.call(
                    this.widget.element,
                    this.id
                  ),
                  t === i.UPLOADING && this.jqXHR.abort(),
                  !0)
                );
              }),
              (r.prototype.canUpload = function () {
                return this.status === i.PENDING || this.status === i.FAILED;
              });
            var o = function (t, i) {
              return (
                (this.element = e(t)),
                (this.settings = e.extend({}, n, i)),
                this.checkSupport()
                  ? (this.init(), this)
                  : (e.error("Browser not supported by jQuery.dmUploader"),
                    this.settings.onFallbackMode.call(this.element),
                    !1)
              );
            };
            (o.prototype.checkSupport = function () {
              return (
                void 0 !== window.FormData &&
                !new RegExp(
                  "/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1.0|2.0|2.5|3.0))/"
                ).test(window.navigator.userAgent) &&
                !e('<input type="file" />').prop("disabled")
              );
            }),
              (o.prototype.init = function () {
                var i = this;
                (this.queue = []),
                  (this.queuePos = -1),
                  (this.queueRunning = !1),
                  (this.activeFiles = 0),
                  (this.draggingOver = 0),
                  (this.draggingOverDoc = 0);
                var n = i.element.is("input[type=file]")
                  ? i.element
                  : i.element.find("input[type=file]");
                return (
                  n.length > 0 &&
                    (n.prop("multiple", this.settings.multiple),
                    n.on("change." + t, function (t) {
                      var n = t.target && t.target.files;
                      n && n.length && (i.addFiles(n), e(this).val(""));
                    })),
                  this.settings.dnd && this.initDnD(),
                  0 !== n.length || this.settings.dnd
                    ? (this.settings.onInit.call(this.element), this)
                    : (e.error("Markup error found by jQuery.dmUploader"), null)
                );
              }),
              (o.prototype.initDnD = function () {
                var i = this;
                i.element.on("drop." + t, function (e) {
                  e.preventDefault(),
                    i.draggingOver > 0 &&
                      ((i.draggingOver = 0),
                      i.settings.onDragLeave.call(i.element));
                  var t = e.originalEvent && e.originalEvent.dataTransfer;
                  if (t && t.files && t.files.length) {
                    var n = [];
                    i.settings.multiple ? (n = t.files) : n.push(t.files[0]),
                      i.addFiles(n);
                  }
                }),
                  i.element.on("dragenter." + t, function (e) {
                    e.preventDefault(),
                      0 === i.draggingOver &&
                        i.settings.onDragEnter.call(i.element),
                      i.draggingOver++;
                  }),
                  i.element.on("dragleave." + t, function (e) {
                    e.preventDefault(),
                      i.draggingOver--,
                      0 === i.draggingOver &&
                        i.settings.onDragLeave.call(i.element);
                  }),
                  i.settings.hookDocument &&
                    (e(document)
                      .off("drop." + t)
                      .on("drop." + t, function (e) {
                        e.preventDefault(),
                          i.draggingOverDoc > 0 &&
                            ((i.draggingOverDoc = 0),
                            i.settings.onDocumentDragLeave.call(i.element));
                      }),
                    e(document)
                      .off("dragenter." + t)
                      .on("dragenter." + t, function (e) {
                        e.preventDefault(),
                          0 === i.draggingOverDoc &&
                            i.settings.onDocumentDragEnter.call(i.element),
                          i.draggingOverDoc++;
                      }),
                    e(document)
                      .off("dragleave." + t)
                      .on("dragleave." + t, function (e) {
                        e.preventDefault(),
                          i.draggingOverDoc--,
                          0 === i.draggingOverDoc &&
                            i.settings.onDocumentDragLeave.call(i.element);
                      }),
                    e(document)
                      .off("dragover." + t)
                      .on("dragover." + t, function (e) {
                        e.preventDefault();
                      }));
              }),
              (o.prototype.releaseEvents = function () {
                this.element.off("." + t),
                  this.element.find("input[type=file]").off("." + t),
                  this.settings.hookDocument && e(document).off("." + t);
              }),
              (o.prototype.validateFile = function (t) {
                if (
                  this.settings.maxFileSize > 0 &&
                  t.size > this.settings.maxFileSize
                )
                  return (
                    this.settings.onFileSizeError.call(this.element, t), !1
                  );
                if (
                  "*" !== this.settings.allowedTypes &&
                  !t.type.match(this.settings.allowedTypes)
                )
                  return (
                    this.settings.onFileTypeError.call(this.element, t), !1
                  );
                if (null !== this.settings.extFilter) {
                  var i = t.name.toLowerCase().split(".").pop();
                  if (e.inArray(i, this.settings.extFilter) < 0)
                    return (
                      this.settings.onFileExtError.call(this.element, t), !1
                    );
                }
                return new r(t, this);
              }),
              (o.prototype.addFiles = function (e) {
                for (var t = 0, i = 0; i < e.length; i++) {
                  var n = this.validateFile(e[i]);
                  if (n)
                    !1 !==
                      this.settings.onNewFile.call(
                        this.element,
                        n.id,
                        n.data
                      ) &&
                      (this.settings.auto && !this.settings.queue && n.upload(),
                      this.queue.push(n),
                      t++);
                }
                return (
                  0 === t ||
                    (this.settings.auto &&
                      this.settings.queue &&
                      !this.queueRunning &&
                      this.processQueue()),
                  this
                );
              }),
              (o.prototype.processQueue = function () {
                return (
                  this.queuePos++,
                  this.queuePos >= this.queue.length
                    ? (0 === this.activeFiles &&
                        this.settings.onComplete.call(this.element),
                      (this.queuePos = this.queue.length - 1),
                      (this.queueRunning = !1),
                      !1)
                    : ((this.queueRunning = !0),
                      this.queue[this.queuePos].upload())
                );
              }),
              (o.prototype.restartQueue = function () {
                (this.queuePos = -1),
                  (this.queueRunning = !1),
                  this.processQueue();
              }),
              (o.prototype.findById = function (e) {
                for (var t = !1, i = 0; i < this.queue.length; i++)
                  if (this.queue[i].id === e) {
                    t = this.queue[i];
                    break;
                  }
                return t;
              }),
              (o.prototype.cancelAll = function () {
                var e = this.queueRunning;
                this.queueRunning = !1;
                for (var t = 0; t < this.queue.length; t++)
                  this.queue[t].cancel();
                e && this.settings.onComplete.call(this.element);
              }),
              (o.prototype.startAll = function () {
                if (this.settings.queue) this.restartQueue();
                else
                  for (var e = 0; e < this.queue.length; e++)
                    this.queue[e].upload();
              }),
              (o.prototype.methods = {
                start: function (t) {
                  if (this.queueRunning) return !1;
                  var n = !1;
                  return void 0 === t || (n = this.findById(t))
                    ? n
                      ? (n.status === i.CANCELLED && (n.status = i.PENDING),
                        n.upload())
                      : (this.startAll(), !0)
                    : (e.error("File not found in jQuery.dmUploader"), !1);
                },
                cancel: function (t) {
                  var i = !1;
                  return void 0 === t || (i = this.findById(t))
                    ? i
                      ? i.cancel(!0)
                      : (this.cancelAll(), !0)
                    : (e.error("File not found in jQuery.dmUploader"), !1);
                },
                reset: function () {
                  return (
                    this.cancelAll(),
                    (this.queue = []),
                    (this.queuePos = -1),
                    (this.activeFiles = 0),
                    !0
                  );
                },
                destroy: function () {
                  this.cancelAll(),
                    this.releaseEvents(),
                    this.element.removeData(t);
                },
              }),
              (e.fn.dmUploader = function (i) {
                var n = arguments;
                if ("string" != typeof i)
                  return this.each(function () {
                    e.data(this, t) || e.data(this, t, new o(this, i));
                  });
                this.each(function () {
                  var r = e.data(this, t);
                  r instanceof o
                    ? "function" == typeof r.methods[i]
                      ? r.methods[i].apply(r, Array.prototype.slice.call(n, 1))
                      : e.error(
                          "Method " + i + " does not exist in jQuery.dmUploader"
                        )
                    : e.error("Unknown plugin data found by jQuery.dmUploader");
                });
              });
          }),
          void 0 === (o = "function" == typeof n ? n.apply(t, r) : n) ||
            (e.exports = o);
      })();
    },
    376453: function (e, t) {
      var i, n, r, o, s, a, u, c;
      this || window,
        (c = function () {
          !(function (e, t) {
            "use strict";
            function i(e, i, n) {
              if ("string" != typeof e)
                throw "invalid module definition, module id must be defined and be a string";
              if (i === t)
                throw "invalid module definition, dependencies must be specified";
              if (n === t)
                throw "invalid module definition, definition function must be specified";
              !(function (e, t) {
                for (var i, n = [], s = 0; s < e.length; ++s) {
                  if (!(i = o[e[s]] || r(e[s])))
                    throw "module definition dependecy not found: " + e[s];
                  n.push(i);
                }
                t.apply(null, n);
              })(i, function () {
                o[e] = n.apply(null, arguments);
              });
            }
            function n(e) {
              return !!o[e];
            }
            function r(t) {
              for (var i = e, n = t.split(/[.\/]/), r = 0; r < n.length; ++r) {
                if (!i[n[r]]) return;
                i = i[n[r]];
              }
              return i;
            }
            var o = {};
            i("moxie/core/utils/Basic", [], function () {
              function e(e) {
                return void 0 === e
                  ? "undefined"
                  : null === e
                  ? "null"
                  : e.nodeType
                  ? "node"
                  : {}.toString
                      .call(e)
                      .match(/\s([a-z|A-Z]+)/)[1]
                      .toLowerCase();
              }
              function t() {
                return n(!1, !1, arguments);
              }
              function i(i) {
                switch (e(i)) {
                  case "array":
                    return Array.prototype.slice.call(i);
                  case "object":
                    return t({}, i);
                }
                return i;
              }
              function n(t, s, a) {
                var u,
                  c = a[0];
                return (
                  r(a, function (a, l) {
                    l > 0 &&
                      r(a, function (r, a) {
                        var l = -1 !== o(e(r), ["array", "object"]);
                        return (
                          !!(r === u || (t && c[a] === u)) ||
                          (l && s && (r = i(r)),
                          void (e(c[a]) === e(r) && l
                            ? n(t, s, [c[a], r])
                            : (c[a] = r)))
                        );
                      });
                  }),
                  c
                );
              }
              function r(e, t) {
                var i, n, r, o;
                if (e) {
                  try {
                    i = e.length;
                  } catch (e) {
                    i = o;
                  }
                  if (i === o || "number" != typeof i) {
                    for (n in e)
                      if (e.hasOwnProperty(n) && !1 === t(e[n], n)) return;
                  } else for (r = 0; i > r; r++) if (!1 === t(e[r], r)) return;
                }
              }
              function o(e, t) {
                if (t) {
                  if (Array.prototype.indexOf)
                    return Array.prototype.indexOf.call(t, e);
                  for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                }
                return -1;
              }
              var s = (function () {
                var e = 0;
                return function (t) {
                  var i,
                    n = new Date().getTime().toString(32);
                  for (i = 0; 5 > i; i++)
                    n += Math.floor(65535 * Math.random()).toString(32);
                  return (t || "o_") + n + (e++).toString(32);
                };
              })();
              return {
                guid: s,
                typeOf: e,
                extend: t,
                extendIf: function () {
                  return n(!0, !1, arguments);
                },
                extendImmutable: function () {
                  return n(!1, !0, arguments);
                },
                extendImmutableIf: function () {
                  return n(!0, !0, arguments);
                },
                clone: function (t) {
                  switch (e(t)) {
                    case "array":
                      return n(!1, !0, [[], t]);
                    case "object":
                      return n(!1, !0, [{}, t]);
                    default:
                      return t;
                  }
                },
                inherit: function (e, t) {
                  function i() {
                    this.constructor = e;
                  }
                  for (var n in t)
                    ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                  return (
                    (i.prototype = t.prototype),
                    (e.prototype = new i()),
                    (e.parent = t.prototype),
                    e
                  );
                },
                each: r,
                isEmptyObj: function (t) {
                  var i;
                  if (!t || "object" !== e(t)) return !0;
                  for (i in t) return !1;
                  return !0;
                },
                inSeries: function (t, i) {
                  var n = t.length;
                  "function" !== e(i) && (i = function () {}),
                    (t && t.length) || i(),
                    (function r(o) {
                      "function" === e(t[o]) &&
                        t[o](function (e) {
                          ++o < n && !e ? r(o) : i(e);
                        });
                    })(0);
                },
                inParallel: function (e, t) {
                  var i = 0,
                    n = e.length,
                    o = new Array(n);
                  r(e, function (e, r) {
                    e(function (e) {
                      if (e) return t(e);
                      var s = [].slice.call(arguments);
                      s.shift(),
                        (o[r] = s),
                        ++i === n && (o.unshift(null), t.apply(this, o));
                    });
                  });
                },
                inArray: o,
                arrayDiff: function (t, i) {
                  var n = [];
                  for (var r in ("array" !== e(t) && (t = [t]),
                  "array" !== e(i) && (i = [i]),
                  t))
                    -1 === o(t[r], i) && n.push(t[r]);
                  return !!n.length && n;
                },
                arrayIntersect: function (e, t) {
                  var i = [];
                  return (
                    r(e, function (e) {
                      -1 !== o(e, t) && i.push(e);
                    }),
                    i.length ? i : null
                  );
                },
                toArray: function (e) {
                  var t,
                    i = [];
                  for (t = 0; t < e.length; t++) i[t] = e[t];
                  return i;
                },
                trim: function (e) {
                  return e
                    ? String.prototype.trim
                      ? String.prototype.trim.call(e)
                      : e.toString().replace(/^\s*/, "").replace(/\s*$/, "")
                    : e;
                },
                sprintf: function (e) {
                  var t = [].slice.call(arguments, 1);
                  return e.replace(/%([a-z])/g, function (e, i) {
                    var n = t.shift();
                    switch (i) {
                      case "s":
                        return n + "";
                      case "d":
                        return parseInt(n, 10);
                      case "f":
                        return parseFloat(n);
                      case "c":
                        return "";
                      default:
                        return n;
                    }
                  });
                },
                parseSizeStr: function (e) {
                  if ("string" != typeof e) return e;
                  var t,
                    i = {
                      t: 1099511627776,
                      g: 1073741824,
                      m: 1048576,
                      k: 1024,
                    };
                  return (
                    (t = (e = /^([0-9\.]+)([tmgk]?)$/.exec(
                      e.toLowerCase().replace(/[^0-9\.tmkg]/g, "")
                    ))[2]),
                    (e = +e[1]),
                    i.hasOwnProperty(t) && (e *= i[t]),
                    Math.floor(e)
                  );
                },
                delay: function (e, t) {
                  var i = this;
                  setTimeout(function () {
                    e.call(i);
                  }, t || 1);
                },
              };
            }),
              i("moxie/core/utils/Encode", [], function () {
                var e = function (e) {
                    return unescape(encodeURIComponent(e));
                  },
                  t = function (e) {
                    return decodeURIComponent(escape(e));
                  };
                return {
                  utf8_encode: e,
                  utf8_decode: t,
                  atob: function (e, i) {
                    if ("function" == typeof window.atob)
                      return i ? t(window.atob(e)) : window.atob(e);
                    var n,
                      r,
                      o,
                      s,
                      a,
                      u,
                      c,
                      l =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                      d = 0,
                      h = 0,
                      f = [];
                    if (!e) return e;
                    e += "";
                    do {
                      (n =
                        255 &
                        ((u =
                          (l.indexOf(e.charAt(d++)) << 18) |
                          (l.indexOf(e.charAt(d++)) << 12) |
                          ((s = l.indexOf(e.charAt(d++))) << 6) |
                          (a = l.indexOf(e.charAt(d++)))) >>
                          16)),
                        (r = 255 & (u >> 8)),
                        (o = 255 & u),
                        (f[h++] =
                          64 == s
                            ? String.fromCharCode(n)
                            : 64 == a
                            ? String.fromCharCode(n, r)
                            : String.fromCharCode(n, r, o));
                    } while (d < e.length);
                    return (c = f.join("")), i ? t(c) : c;
                  },
                  btoa: function (t, i) {
                    if ((i && (t = e(t)), "function" == typeof window.btoa))
                      return window.btoa(t);
                    var n,
                      r,
                      o,
                      s,
                      a,
                      u =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                      c = 0,
                      l = 0,
                      d = "",
                      h = [];
                    if (!t) return t;
                    do {
                      (n =
                        63 &
                        ((a =
                          (t.charCodeAt(c++) << 16) |
                          (t.charCodeAt(c++) << 8) |
                          t.charCodeAt(c++)) >>
                          18)),
                        (r = 63 & (a >> 12)),
                        (o = 63 & (a >> 6)),
                        (s = 63 & a),
                        (h[l++] =
                          u.charAt(n) +
                          u.charAt(r) +
                          u.charAt(o) +
                          u.charAt(s));
                    } while (c < t.length);
                    d = h.join("");
                    var f = t.length % 3;
                    return (f ? d.slice(0, f - 3) : d) + "===".slice(f || 3);
                  },
                };
              }),
              i(
                "moxie/core/utils/Env",
                ["moxie/core/utils/Basic"],
                function (e) {
                  var i = (function (e) {
                      var t = "function",
                        i = "object",
                        n = "name",
                        r = "version",
                        o = function (e, t) {
                          return (
                            -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                          );
                        },
                        s = {
                          rgx: function () {
                            for (
                              var n, r, o, s, a, u, c, l = 0, d = arguments;
                              l < d.length;
                              l += 2
                            ) {
                              var h = d[l],
                                f = d[l + 1];
                              if (void 0 === n)
                                for (s in ((n = {}), f))
                                  typeof (a = f[s]) === i
                                    ? (n[a[0]] = e)
                                    : (n[a] = e);
                              for (r = o = 0; r < h.length; r++)
                                if ((u = h[r].exec(this.getUA()))) {
                                  for (s = 0; s < f.length; s++)
                                    (c = u[++o]),
                                      typeof (a = f[s]) === i && a.length > 0
                                        ? 2 == a.length
                                          ? (n[a[0]] =
                                              typeof a[1] == t
                                                ? a[1].call(this, c)
                                                : a[1])
                                          : 3 == a.length
                                          ? (n[a[0]] =
                                              typeof a[1] !== t ||
                                              (a[1].exec && a[1].test)
                                                ? c
                                                  ? c.replace(a[1], a[2])
                                                  : e
                                                : c
                                                ? a[1].call(this, c, a[2])
                                                : e)
                                          : 4 == a.length &&
                                            (n[a[0]] = c
                                              ? a[3].call(
                                                  this,
                                                  c.replace(a[1], a[2])
                                                )
                                              : e)
                                        : (n[a] = c || e);
                                  break;
                                }
                              if (u) break;
                            }
                            return n;
                          },
                          str: function (t, n) {
                            for (var r in n)
                              if (typeof n[r] === i && n[r].length > 0) {
                                for (var s = 0; s < n[r].length; s++)
                                  if (o(n[r][s], t)) return "?" === r ? e : r;
                              } else if (o(n[r], t)) return "?" === r ? e : r;
                            return t;
                          },
                        },
                        a = {
                          browser: {
                            oldsafari: {
                              major: {
                                1: ["/8", "/1", "/3"],
                                2: "/4",
                                "?": "/",
                              },
                              version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/",
                              },
                            },
                          },
                          device: {
                            sprint: {
                              model: {
                                "Evo Shift 4G": "7373KT",
                              },
                              vendor: {
                                HTC: "APA",
                                Sprint: "Sprint",
                              },
                            },
                          },
                          os: {
                            windows: {
                              version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                RT: "ARM",
                              },
                            },
                          },
                        },
                        u = {
                          browser: [
                            [
                              /(opera\smini)\/([\w\.-]+)/i,
                              /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                              /(opera).+version\/([\w\.]+)/i,
                              /(opera)[\/\s]+([\w\.]+)/i,
                            ],
                            [n, r],
                            [/\s(opr)\/([\w\.]+)/i],
                            [[n, "Opera"], r],
                            [
                              /(kindle)\/([\w\.]+)/i,
                              /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                              /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                              /(?:ms|\()(ie)\s([\w\.]+)/i,
                              /(rekonq)\/([\w\.]+)*/i,
                              /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i,
                            ],
                            [n, r],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [[n, "IE"], r],
                            [/(edge)\/((\d+)?[\w\.]+)/i],
                            [n, r],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [[n, "Yandex"], r],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [[n, /_/g, " "], r],
                            [
                              /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                              /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i,
                            ],
                            [n, r],
                            [/(dolfin)\/([\w\.]+)/i],
                            [[n, "Dolphin"], r],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [[n, "Chrome"], r],
                            [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                            [r, [n, "MIUI Browser"]],
                            [
                              /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i,
                            ],
                            [r, [n, "Android Browser"]],
                            [/FBAV\/([\w\.]+);/i],
                            [r, [n, "Facebook"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [r, [n, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [r, n],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [n, [r, s.str, a.browser.oldsafari.version]],
                            [
                              /(konqueror)\/([\w\.]+)/i,
                              /(webkit|khtml)\/([\w\.]+)/i,
                            ],
                            [n, r],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [[n, "Netscape"], r],
                            [
                              /(swiftfox)/i,
                              /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                              /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                              /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,
                              /(links)\s\(([\w\.]+)/i,
                              /(gobrowser)\/?([\w\.]+)*/i,
                              /(ice\s?browser)\/v?([\w\._]+)/i,
                              /(mosaic)[\/\s]([\w\.]+)/i,
                            ],
                            [n, r],
                          ],
                          engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [r, [n, "EdgeHTML"]],
                            [
                              /(presto)\/([\w\.]+)/i,
                              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
                              /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                              /(icab)[\/\s]([23]\.[\d\.]+)/i,
                            ],
                            [n, r],
                            [/rv\:([\w\.]+).*(gecko)/i],
                            [r, n],
                          ],
                          os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [n, r],
                            [
                              /(windows)\snt\s6\.2;\s(arm)/i,
                              /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
                            ],
                            [n, [r, s.str, a.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                              [n, "Windows"],
                              [r, s.str, a.os.windows.version],
                            ],
                            [/\((bb)(10);/i],
                            [[n, "BlackBerry"], r],
                            [
                              /(blackberry)\w*\/?([\w\.]+)*/i,
                              /(tizen)[\/\s]([\w\.]+)/i,
                              /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                              /linux;.+(sailfish);/i,
                            ],
                            [n, r],
                            [
                              /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i,
                            ],
                            [[n, "Symbian"], r],
                            [/\((series40);/i],
                            [n],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [[n, "Firefox OS"], r],
                            [
                              /(nintendo|playstation)\s([wids3portablevu]+)/i,
                              /(mint)[\/\s\(]?(\w+)*/i,
                              /(mageia|vectorlinux)[;\s]/i,
                              /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
                              /(hurd|linux)\s?([\w\.]+)*/i,
                              /(gnu)\s?([\w\.]+)*/i,
                            ],
                            [n, r],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [[n, "Chromium OS"], r],
                            [/(sunos)\s?([\w\.]+\d)*/i],
                            [[n, "Solaris"], r],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                            [n, r],
                            [
                              /(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i,
                            ],
                            [
                              [n, "iOS"],
                              [r, /_/g, "."],
                            ],
                            [
                              /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
                              /(macintosh|mac(?=_powerpc)\s)/i,
                            ],
                            [
                              [n, "Mac OS"],
                              [r, /_/g, "."],
                            ],
                            [
                              /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,
                              /(haiku)\s(\w+)/i,
                              /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
                              /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                              /(unix)\s?([\w\.]+)*/i,
                            ],
                            [n, r],
                          ],
                        };
                      return function (e) {
                        var t =
                          e ||
                          (window &&
                          window.navigator &&
                          window.navigator.userAgent
                            ? window.navigator.userAgent
                            : "");
                        (this.getBrowser = function () {
                          return s.rgx.apply(this, u.browser);
                        }),
                          (this.getEngine = function () {
                            return s.rgx.apply(this, u.engine);
                          }),
                          (this.getOS = function () {
                            return s.rgx.apply(this, u.os);
                          }),
                          (this.getResult = function () {
                            return {
                              ua: this.getUA(),
                              browser: this.getBrowser(),
                              engine: this.getEngine(),
                              os: this.getOS(),
                            };
                          }),
                          (this.getUA = function () {
                            return t;
                          }),
                          (this.setUA = function (e) {
                            return (t = e), this;
                          }),
                          this.setUA(t);
                      };
                    })(),
                    n = (function () {
                      var i = {
                        access_global_ns: function () {
                          return !!window.moxie;
                        },
                        define_property: !1,
                        create_canvas: function () {
                          var e = document.createElement("canvas"),
                            t = !(!e.getContext || !e.getContext("2d"));
                          return (i.create_canvas = t), t;
                        },
                        return_response_type: function (t) {
                          try {
                            if (-1 !== e.inArray(t, ["", "text", "document"]))
                              return !0;
                            if (window.XMLHttpRequest) {
                              var i = new XMLHttpRequest();
                              if ((i.open("get", "/"), "responseType" in i))
                                return (
                                  (i.responseType = t), i.responseType === t
                                );
                            }
                          } catch (e) {}
                          return !1;
                        },
                        use_blob_uri: function () {
                          var e = window.URL;
                          return (
                            (i.use_blob_uri =
                              e &&
                              "createObjectURL" in e &&
                              "revokeObjectURL" in e &&
                              ("IE" !== o.browser ||
                                o.verComp(o.version, "11.0.46", ">="))),
                            i.use_blob_uri
                          );
                        },
                        use_data_uri: (function () {
                          var e = new Image();
                          return (
                            (e.onload = function () {
                              i.use_data_uri = 1 === e.width && 1 === e.height;
                            }),
                            setTimeout(function () {
                              e.src =
                                "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
                            }, 1),
                            !1
                          );
                        })(),
                        use_data_uri_over32kb: function () {
                          return (
                            i.use_data_uri &&
                            ("IE" !== o.browser || o.version >= 9)
                          );
                        },
                        use_data_uri_of: function (e) {
                          return (
                            (i.use_data_uri && 33e3 > e) ||
                            i.use_data_uri_over32kb()
                          );
                        },
                        use_fileinput: function () {
                          if (
                            navigator.userAgent.match(
                              /(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/
                            )
                          )
                            return !1;
                          var e = document.createElement("input");
                          return (
                            e.setAttribute("type", "file"),
                            (i.use_fileinput = !e.disabled)
                          );
                        },
                        use_webgl: function () {
                          var e,
                            n = document.createElement("canvas"),
                            r = null;
                          try {
                            r =
                              n.getContext("webgl") ||
                              n.getContext("experimental-webgl");
                          } catch (e) {}
                          return (
                            r || (r = null),
                            (e = !!r),
                            (i.use_webgl = e),
                            (n = t),
                            e
                          );
                        },
                      };
                      return function (t) {
                        var n = [].slice.call(arguments);
                        return (
                          n.shift(),
                          "function" === e.typeOf(i[t])
                            ? i[t].apply(this, n)
                            : !!i[t]
                        );
                      };
                    })(),
                    r = new i().getResult(),
                    o = {
                      can: n,
                      uaParser: i,
                      browser: r.browser.name,
                      version: r.browser.version,
                      os: r.os.name,
                      osVersion: r.os.version,
                      verComp: function (e, t, i) {
                        var n,
                          r = 0,
                          o = 0,
                          s = {
                            dev: -6,
                            alpha: -5,
                            a: -5,
                            beta: -4,
                            b: -4,
                            RC: -3,
                            rc: -3,
                            "#": -2,
                            p: 1,
                            pl: 1,
                          },
                          a = function (e) {
                            return (e = (e = ("" + e).replace(/[_\-+]/g, "."))
                              .replace(/([^.\d]+)/g, ".$1.")
                              .replace(/\.{2,}/g, ".")).length
                              ? e.split(".")
                              : [-8];
                          },
                          u = function (e) {
                            return e
                              ? isNaN(e)
                                ? s[e] || -7
                                : parseInt(e, 10)
                              : 0;
                          };
                        for (
                          e = a(e),
                            t = a(t),
                            n = Math.max(e.length, t.length),
                            r = 0;
                          n > r;
                          r++
                        )
                          if (e[r] != t[r]) {
                            if (
                              ((e[r] = u(e[r])), (t[r] = u(t[r])), e[r] < t[r])
                            ) {
                              o = -1;
                              break;
                            }
                            if (e[r] > t[r]) {
                              o = 1;
                              break;
                            }
                          }
                        if (!i) return o;
                        switch (i) {
                          case ">":
                          case "gt":
                            return o > 0;
                          case ">=":
                          case "ge":
                            return o >= 0;
                          case "<=":
                          case "le":
                            return 0 >= o;
                          case "==":
                          case "=":
                          case "eq":
                            return 0 === o;
                          case "<>":
                          case "!=":
                          case "ne":
                            return 0 !== o;
                          case "":
                          case "<":
                          case "lt":
                            return 0 > o;
                          default:
                            return null;
                        }
                      },
                      swf_url: "../flash/Moxie.swf",
                      xap_url: "../silverlight/Moxie.xap",
                      global_event_dispatcher:
                        "moxie.core.EventTarget.instance.dispatchEvent",
                    };
                  return (o.OS = o.os), o;
                }
              ),
              i(
                "moxie/core/Exceptions",
                ["moxie/core/utils/Basic"],
                function (e) {
                  function t(e, t) {
                    var i;
                    for (i in e) if (e[i] === t) return i;
                    return null;
                  }
                  return {
                    RuntimeError: (function () {
                      function i(e, i) {
                        (this.code = e),
                          (this.name = t(n, e)),
                          (this.message =
                            this.name + (i || ": RuntimeError " + this.code));
                      }
                      var n = {
                        NOT_INIT_ERR: 1,
                        EXCEPTION_ERR: 3,
                        NOT_SUPPORTED_ERR: 9,
                        JS_ERR: 4,
                      };
                      return e.extend(i, n), (i.prototype = Error.prototype), i;
                    })(),
                    OperationNotAllowedException: (function () {
                      function t(e) {
                        (this.code = e),
                          (this.name = "OperationNotAllowedException");
                      }
                      return (
                        e.extend(t, {
                          NOT_ALLOWED_ERR: 1,
                        }),
                        (t.prototype = Error.prototype),
                        t
                      );
                    })(),
                    ImageError: (function () {
                      function i(e) {
                        (this.code = e),
                          (this.name = t(n, e)),
                          (this.message =
                            this.name + ": ImageError " + this.code);
                      }
                      var n = {
                        WRONG_FORMAT: 1,
                        MAX_RESOLUTION_ERR: 2,
                        INVALID_META_ERR: 3,
                      };
                      return e.extend(i, n), (i.prototype = Error.prototype), i;
                    })(),
                    FileException: (function () {
                      function i(e) {
                        (this.code = e),
                          (this.name = t(n, e)),
                          (this.message =
                            this.name + ": FileException " + this.code);
                      }
                      var n = {
                        NOT_FOUND_ERR: 1,
                        SECURITY_ERR: 2,
                        ABORT_ERR: 3,
                        NOT_READABLE_ERR: 4,
                        ENCODING_ERR: 5,
                        NO_MODIFICATION_ALLOWED_ERR: 6,
                        INVALID_STATE_ERR: 7,
                        SYNTAX_ERR: 8,
                      };
                      return e.extend(i, n), (i.prototype = Error.prototype), i;
                    })(),
                    DOMException: (function () {
                      function i(e) {
                        (this.code = e),
                          (this.name = t(n, e)),
                          (this.message =
                            this.name + ": DOMException " + this.code);
                      }
                      var n = {
                        INDEX_SIZE_ERR: 1,
                        DOMSTRING_SIZE_ERR: 2,
                        HIERARCHY_REQUEST_ERR: 3,
                        WRONG_DOCUMENT_ERR: 4,
                        INVALID_CHARACTER_ERR: 5,
                        NO_DATA_ALLOWED_ERR: 6,
                        NO_MODIFICATION_ALLOWED_ERR: 7,
                        NOT_FOUND_ERR: 8,
                        NOT_SUPPORTED_ERR: 9,
                        INUSE_ATTRIBUTE_ERR: 10,
                        INVALID_STATE_ERR: 11,
                        SYNTAX_ERR: 12,
                        INVALID_MODIFICATION_ERR: 13,
                        NAMESPACE_ERR: 14,
                        INVALID_ACCESS_ERR: 15,
                        VALIDATION_ERR: 16,
                        TYPE_MISMATCH_ERR: 17,
                        SECURITY_ERR: 18,
                        NETWORK_ERR: 19,
                        ABORT_ERR: 20,
                        URL_MISMATCH_ERR: 21,
                        QUOTA_EXCEEDED_ERR: 22,
                        TIMEOUT_ERR: 23,
                        INVALID_NODE_TYPE_ERR: 24,
                        DATA_CLONE_ERR: 25,
                      };
                      return e.extend(i, n), (i.prototype = Error.prototype), i;
                    })(),
                    EventException: (function () {
                      function t(e) {
                        (this.code = e), (this.name = "EventException");
                      }
                      return (
                        e.extend(t, {
                          UNSPECIFIED_EVENT_TYPE_ERR: 0,
                        }),
                        (t.prototype = Error.prototype),
                        t
                      );
                    })(),
                  };
                }
              ),
              i("moxie/core/utils/Dom", ["moxie/core/utils/Env"], function (e) {
                var t = function (e, t) {
                  return (
                    !!e.className &&
                    new RegExp("(^|\\s+)" + t + "(\\s+|$)").test(e.className)
                  );
                };
                return {
                  get: function (e) {
                    return "string" != typeof e
                      ? e
                      : document.getElementById(e);
                  },
                  hasClass: t,
                  addClass: function (e, i) {
                    t(e, i) ||
                      (e.className = e.className
                        ? e.className.replace(/\s+$/, "") + " " + i
                        : i);
                  },
                  removeClass: function (e, t) {
                    if (e.className) {
                      var i = new RegExp("(^|\\s+)" + t + "(\\s+|$)");
                      e.className = e.className.replace(i, function (e, t, i) {
                        return " " === t && " " === i ? " " : "";
                      });
                    }
                  },
                  getStyle: function (e, t) {
                    return e.currentStyle
                      ? e.currentStyle[t]
                      : window.getComputedStyle
                      ? window.getComputedStyle(e, null)[t]
                      : void 0;
                  },
                  getPos: function (t, i) {
                    function n(e) {
                      var t,
                        i,
                        n = 0,
                        r = 0;
                      return (
                        e &&
                          ((i = e.getBoundingClientRect()),
                          (t =
                            "CSS1Compat" === c.compatMode
                              ? c.documentElement
                              : c.body),
                          (n = i.left + t.scrollLeft),
                          (r = i.top + t.scrollTop)),
                        {
                          x: n,
                          y: r,
                        }
                      );
                    }
                    var r,
                      o,
                      s,
                      a = 0,
                      u = 0,
                      c = document;
                    if (
                      ((i = i || c.body),
                      t &&
                        t.getBoundingClientRect &&
                        "IE" === e.browser &&
                        (!c.documentMode || c.documentMode < 8))
                    )
                      return (
                        (o = n(t)),
                        (s = n(i)),
                        {
                          x: o.x - s.x,
                          y: o.y - s.y,
                        }
                      );
                    for (r = t; r && r != i && r.nodeType; )
                      (a += r.offsetLeft || 0),
                        (u += r.offsetTop || 0),
                        (r = r.offsetParent);
                    for (r = t.parentNode; r && r != i && r.nodeType; )
                      (a -= r.scrollLeft || 0),
                        (u -= r.scrollTop || 0),
                        (r = r.parentNode);
                    return {
                      x: a,
                      y: u,
                    };
                  },
                  getSize: function (e) {
                    return {
                      w: e.offsetWidth || e.clientWidth,
                      h: e.offsetHeight || e.clientHeight,
                    };
                  },
                };
              }),
              i(
                "moxie/core/EventTarget",
                [
                  "moxie/core/utils/Env",
                  "moxie/core/Exceptions",
                  "moxie/core/utils/Basic",
                ],
                function (e, t, i) {
                  function n() {
                    this.uid = i.guid();
                  }
                  var r = {};
                  return (
                    i.extend(n.prototype, {
                      init: function () {
                        this.uid || (this.uid = i.guid("uid_"));
                      },
                      addEventListener: function (e, t, n, o) {
                        var s,
                          a = this;
                        return (
                          this.hasOwnProperty("uid") ||
                            (this.uid = i.guid("uid_")),
                          (e = i.trim(e)),
                          /\s/.test(e)
                            ? void i.each(e.split(/\s+/), function (e) {
                                a.addEventListener(e, t, n, o);
                              })
                            : ((e = e.toLowerCase()),
                              (n = parseInt(n, 10) || 0),
                              (s = (r[this.uid] && r[this.uid][e]) || []).push({
                                fn: t,
                                priority: n,
                                scope: o || this,
                              }),
                              r[this.uid] || (r[this.uid] = {}),
                              void (r[this.uid][e] = s))
                        );
                      },
                      hasEventListener: function (e) {
                        var t;
                        return (
                          e
                            ? ((e = e.toLowerCase()),
                              (t = r[this.uid] && r[this.uid][e]))
                            : (t = r[this.uid]),
                          t || !1
                        );
                      },
                      removeEventListener: function (e, t) {
                        var n,
                          o,
                          s = this;
                        if (((e = e.toLowerCase()), /\s/.test(e)))
                          i.each(e.split(/\s+/), function (e) {
                            s.removeEventListener(e, t);
                          });
                        else if ((n = r[this.uid] && r[this.uid][e])) {
                          if (t) {
                            for (o = n.length - 1; o >= 0; o--)
                              if (n[o].fn === t) {
                                n.splice(o, 1);
                                break;
                              }
                          } else n = [];
                          n.length ||
                            (delete r[this.uid][e],
                            i.isEmptyObj(r[this.uid]) && delete r[this.uid]);
                        }
                      },
                      removeAllEventListeners: function () {
                        r[this.uid] && delete r[this.uid];
                      },
                      dispatchEvent: function (e) {
                        var n,
                          o,
                          s,
                          a,
                          u,
                          c = {},
                          l = !0;
                        if ("string" !== i.typeOf(e)) {
                          if (((a = e), "string" !== i.typeOf(a.type)))
                            throw new t.EventException(
                              t.EventException.UNSPECIFIED_EVENT_TYPE_ERR
                            );
                          (e = a.type),
                            a.total !== u &&
                              a.loaded !== u &&
                              ((c.total = a.total), (c.loaded = a.loaded)),
                            (c.async = a.async || !1);
                        }
                        if (
                          (-1 !== e.indexOf("::")
                            ? (function (t) {
                                (n = t[0]), (e = t[1]);
                              })(e.split("::"))
                            : (n = this.uid),
                          (e = e.toLowerCase()),
                          (o = r[n] && r[n][e]))
                        ) {
                          o.sort(function (e, t) {
                            return t.priority - e.priority;
                          }),
                            (s = [].slice.call(arguments)).shift(),
                            (c.type = e),
                            s.unshift(c);
                          var d = [];
                          i.each(o, function (e) {
                            (s[0].target = e.scope),
                              c.async
                                ? d.push(function (t) {
                                    setTimeout(function () {
                                      t(!1 === e.fn.apply(e.scope, s));
                                    }, 1);
                                  })
                                : d.push(function (t) {
                                    t(!1 === e.fn.apply(e.scope, s));
                                  });
                          }),
                            d.length &&
                              i.inSeries(d, function (e) {
                                l = !e;
                              });
                        }
                        return l;
                      },
                      bindOnce: function (e, t, i, n) {
                        var r = this;
                        r.bind.call(
                          this,
                          e,
                          function i() {
                            return r.unbind(e, i), t.apply(this, arguments);
                          },
                          i,
                          n
                        );
                      },
                      bind: function () {
                        this.addEventListener.apply(this, arguments);
                      },
                      unbind: function () {
                        this.removeEventListener.apply(this, arguments);
                      },
                      unbindAll: function () {
                        this.removeAllEventListeners.apply(this, arguments);
                      },
                      trigger: function () {
                        return this.dispatchEvent.apply(this, arguments);
                      },
                      handleEventProps: function (e) {
                        var t = this;
                        this.bind(e.join(" "), function (e) {
                          var t = "on" + e.type.toLowerCase();
                          "function" === i.typeOf(this[t]) &&
                            this[t].apply(this, arguments);
                        }),
                          i.each(e, function (e) {
                            (e = "on" + e.toLowerCase(e)),
                              "undefined" === i.typeOf(t[e]) && (t[e] = null);
                          });
                      },
                    }),
                    (n.instance = new n()),
                    n
                  );
                }
              ),
              i(
                "moxie/runtime/Runtime",
                [
                  "moxie/core/utils/Env",
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Dom",
                  "moxie/core/EventTarget",
                ],
                function (e, t, i, n) {
                  function r(e, n, o, a, u) {
                    var c,
                      l = this,
                      d = t.guid(n + "_"),
                      h = u || "browser";
                    (e = e || {}),
                      (s[d] = this),
                      (o = t.extend(
                        {
                          access_binary: !1,
                          access_image_binary: !1,
                          display_media: !1,
                          do_cors: !1,
                          drag_and_drop: !1,
                          filter_by_extension: !0,
                          resize_image: !1,
                          report_upload_progress: !1,
                          return_response_headers: !1,
                          return_response_type: !1,
                          return_status_code: !0,
                          send_custom_headers: !1,
                          select_file: !1,
                          select_folder: !1,
                          select_multiple: !0,
                          send_binary_string: !1,
                          send_browser_cookies: !0,
                          send_multipart: !0,
                          slice_blob: !1,
                          stream_upload: !1,
                          summon_file_dialog: !1,
                          upload_filesize: !0,
                          use_http_method: !0,
                        },
                        o
                      )),
                      e.preferred_caps &&
                        (h = r.getMode(a, e.preferred_caps, h)),
                      (c = (function () {
                        var e = {};
                        return {
                          exec: function (t, i, n, r) {
                            return c[i] &&
                              (e[t] ||
                                (e[t] = {
                                  context: this,
                                  instance: new c[i](),
                                }),
                              e[t].instance[n])
                              ? e[t].instance[n].apply(this, r)
                              : void 0;
                          },
                          removeInstance: function (t) {
                            delete e[t];
                          },
                          removeAllInstances: function () {
                            var i = this;
                            t.each(e, function (e, n) {
                              "function" === t.typeOf(e.instance.destroy) &&
                                e.instance.destroy.call(e.context),
                                i.removeInstance(n);
                            });
                          },
                        };
                      })()),
                      t.extend(this, {
                        initialized: !1,
                        uid: d,
                        type: n,
                        mode: r.getMode(a, e.required_caps, h),
                        shimid: d + "_container",
                        clients: 0,
                        options: e,
                        can: function (e, i) {
                          var n = arguments[2] || o;
                          if (
                            ("string" === t.typeOf(e) &&
                              "undefined" === t.typeOf(i) &&
                              (e = r.parseCaps(e)),
                            "object" === t.typeOf(e))
                          ) {
                            for (var s in e)
                              if (!this.can(s, e[s], n)) return !1;
                            return !0;
                          }
                          return "function" === t.typeOf(n[e])
                            ? n[e].call(this, i)
                            : i === n[e];
                        },
                        getShimContainer: function () {
                          var e,
                            n = i.get(this.shimid);
                          return (
                            n ||
                              ((e =
                                i.get(this.options.container) || document.body),
                              ((n = document.createElement("div")).id =
                                this.shimid),
                              (n.className =
                                "moxie-shim moxie-shim-" + this.type),
                              t.extend(n.style, {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "1px",
                                height: "1px",
                                overflow: "hidden",
                              }),
                              e.appendChild(n),
                              (e = null)),
                            n
                          );
                        },
                        getShim: function () {
                          return c;
                        },
                        shimExec: function (e, t) {
                          var i = [].slice.call(arguments, 2);
                          return l.getShim().exec.call(this, this.uid, e, t, i);
                        },
                        exec: function (e, t) {
                          var i = [].slice.call(arguments, 2);
                          return l[e] && l[e][t]
                            ? l[e][t].apply(this, i)
                            : l.shimExec.apply(this, arguments);
                        },
                        destroy: function () {
                          if (l) {
                            var e = i.get(this.shimid);
                            e && e.parentNode.removeChild(e),
                              c && c.removeAllInstances(),
                              this.unbindAll(),
                              delete s[this.uid],
                              (this.uid = null),
                              (d = l = c = e = null);
                          }
                        },
                      }),
                      this.mode &&
                        e.required_caps &&
                        !this.can(e.required_caps) &&
                        (this.mode = !1);
                  }
                  var o = {},
                    s = {};
                  return (
                    (r.order = "html5,flash,silverlight,html4"),
                    (r.getRuntime = function (e) {
                      return !!s[e] && s[e];
                    }),
                    (r.addConstructor = function (e, t) {
                      (t.prototype = n.instance), (o[e] = t);
                    }),
                    (r.getConstructor = function (e) {
                      return o[e] || null;
                    }),
                    (r.getInfo = function (e) {
                      var t = r.getRuntime(e);
                      return t
                        ? {
                            uid: t.uid,
                            type: t.type,
                            mode: t.mode,
                            can: function () {
                              return t.can.apply(t, arguments);
                            },
                          }
                        : null;
                    }),
                    (r.parseCaps = function (e) {
                      var i = {};
                      return "string" !== t.typeOf(e)
                        ? e || {}
                        : (t.each(e.split(","), function (e) {
                            i[e] = !0;
                          }),
                          i);
                    }),
                    (r.can = function (e, t) {
                      var i,
                        n,
                        o = r.getConstructor(e);
                      return (
                        !!o &&
                        ((n = (i = new o({
                          required_caps: t,
                        })).mode),
                        i.destroy(),
                        !!n)
                      );
                    }),
                    (r.thatCan = function (e, t) {
                      var i = (t || r.order).split(/\s*,\s*/);
                      for (var n in i) if (r.can(i[n], e)) return i[n];
                      return null;
                    }),
                    (r.getMode = function (e, i, n) {
                      var r = null;
                      if (
                        ("undefined" === t.typeOf(n) && (n = "browser"),
                        i && !t.isEmptyObj(e))
                      ) {
                        if (
                          (t.each(i, function (i, n) {
                            if (e.hasOwnProperty(n)) {
                              var o = e[n](i);
                              if (("string" == typeof o && (o = [o]), r)) {
                                if (!(r = t.arrayIntersect(r, o)))
                                  return (r = !1);
                              } else r = o;
                            }
                          }),
                          r)
                        )
                          return -1 !== t.inArray(n, r) ? n : r[0];
                        if (!1 === r) return !1;
                      }
                      return n;
                    }),
                    (r.getGlobalEventTarget = function () {
                      if (
                        /^moxie\./.test(e.global_event_dispatcher) &&
                        !e.can("access_global_ns")
                      ) {
                        var i = t.guid("moxie_event_target_");
                        (window[i] = function (e, t) {
                          n.instance.dispatchEvent(e, t);
                        }),
                          (e.global_event_dispatcher = i);
                      }
                      return e.global_event_dispatcher;
                    }),
                    (r.capTrue = function () {
                      return !0;
                    }),
                    (r.capFalse = function () {
                      return !1;
                    }),
                    (r.capTest = function (e) {
                      return function () {
                        return !!e;
                      };
                    }),
                    r
                  );
                }
              ),
              i(
                "moxie/runtime/RuntimeClient",
                [
                  "moxie/core/utils/Env",
                  "moxie/core/Exceptions",
                  "moxie/core/utils/Basic",
                  "moxie/runtime/Runtime",
                ],
                function (e, t, i, n) {
                  return function () {
                    var e;
                    i.extend(this, {
                      connectRuntime: function (r) {
                        var o,
                          s = this;
                        if (
                          ("string" === i.typeOf(r)
                            ? (o = r)
                            : "string" === i.typeOf(r.ruid) && (o = r.ruid),
                          o)
                        ) {
                          if ((e = n.getRuntime(o)))
                            return (s.ruid = o), e.clients++, e;
                          throw new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR);
                        }
                        !(function i(o) {
                          var a, u;
                          return o.length
                            ? ((a = o.shift().toLowerCase()),
                              (u = n.getConstructor(a))
                                ? ((e = new u(r)).bind("Init", function () {
                                    (e.initialized = !0),
                                      setTimeout(function () {
                                        e.clients++,
                                          (s.ruid = e.uid),
                                          s.trigger("RuntimeInit", e);
                                      }, 1);
                                  }),
                                  e.bind("Error", function () {
                                    e.destroy(), i(o);
                                  }),
                                  e.bind("Exception", function (e, i) {
                                    var n =
                                      i.name +
                                      "(#" +
                                      i.code +
                                      ")" +
                                      (i.message ? ", from: " + i.message : "");
                                    s.trigger(
                                      "RuntimeError",
                                      new t.RuntimeError(
                                        t.RuntimeError.EXCEPTION_ERR,
                                        n
                                      )
                                    );
                                  }),
                                  e.mode
                                    ? void e.init()
                                    : void e.trigger("Error"))
                                : void i(o))
                            : (s.trigger(
                                "RuntimeError",
                                new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)
                              ),
                              void (e = null));
                        })((r.runtime_order || n.order).split(/\s*,\s*/));
                      },
                      disconnectRuntime: function () {
                        e && --e.clients <= 0 && e.destroy(), (e = null);
                      },
                      getRuntime: function () {
                        return e && e.uid ? e : (e = null);
                      },
                      exec: function () {
                        return e ? e.exec.apply(this, arguments) : null;
                      },
                      can: function (t) {
                        return !!e && e.can(t);
                      },
                    });
                  };
                }
              ),
              i(
                "moxie/file/Blob",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Encode",
                  "moxie/runtime/RuntimeClient",
                ],
                function (e, t, i) {
                  var n = {};
                  return function r(o, s) {
                    function a(t, i, o) {
                      var s,
                        a = n[this.uid];
                      return "string" === e.typeOf(a) && a.length
                        ? ((s = new r(null, {
                            type: o,
                            size: i - t,
                          })).detach(a.substr(t, s.size)),
                          s)
                        : null;
                    }
                    i.call(this),
                      o && this.connectRuntime(o),
                      s
                        ? "string" === e.typeOf(s) &&
                          (s = {
                            data: s,
                          })
                        : (s = {}),
                      e.extend(this, {
                        uid: s.uid || e.guid("uid_"),
                        ruid: o,
                        size: s.size || 0,
                        type: s.type || "",
                        slice: function (e, t, i) {
                          return this.isDetached()
                            ? a.apply(this, arguments)
                            : this.getRuntime().exec.call(
                                this,
                                "Blob",
                                "slice",
                                this.getSource(),
                                e,
                                t,
                                i
                              );
                        },
                        getSource: function () {
                          return n[this.uid] ? n[this.uid] : null;
                        },
                        detach: function (e) {
                          if (
                            (this.ruid &&
                              (this.getRuntime().exec.call(
                                this,
                                "Blob",
                                "destroy"
                              ),
                              this.disconnectRuntime(),
                              (this.ruid = null)),
                            "data:" == (e = e || "").substr(0, 5))
                          ) {
                            var i = e.indexOf(";base64,");
                            (this.type = e.substring(5, i)),
                              (e = t.atob(e.substring(i + 8)));
                          }
                          (this.size = e.length), (n[this.uid] = e);
                        },
                        isDetached: function () {
                          return (
                            !this.ruid && "string" === e.typeOf(n[this.uid])
                          );
                        },
                        destroy: function () {
                          this.detach(), delete n[this.uid];
                        },
                      }),
                      s.data ? this.detach(s.data) : (n[this.uid] = s);
                  };
                }
              ),
              i("moxie/core/I18n", ["moxie/core/utils/Basic"], function (e) {
                var t = {};
                return {
                  addI18n: function (i) {
                    return e.extend(t, i);
                  },
                  translate: function (e) {
                    return t[e] || e;
                  },
                  _: function (e) {
                    return this.translate(e);
                  },
                  sprintf: function (t) {
                    var i = [].slice.call(arguments, 1);
                    return t.replace(/%[a-z]/g, function () {
                      var t = i.shift();
                      return "undefined" !== e.typeOf(t) ? t : "";
                    });
                  },
                };
              }),
              i(
                "moxie/core/utils/Mime",
                ["moxie/core/utils/Basic", "moxie/core/I18n"],
                function (e, t) {
                  var i = {},
                    n = {},
                    r = function (e) {
                      var t,
                        r,
                        o,
                        s = e.split(/,/);
                      for (t = 0; t < s.length; t += 2) {
                        for (o = s[t + 1].split(/ /), r = 0; r < o.length; r++)
                          i[o[r]] = s[t];
                        n[s[t]] = o;
                      }
                    },
                    o = function (t) {
                      var i = [];
                      return (
                        e.each(t, function (t) {
                          if ("*" === (t = t.toLowerCase()))
                            return (i = []), !1;
                          var r = t.match(/^(\w+)\/(\*|\w+)$/);
                          r &&
                            ("*" === r[2]
                              ? e.each(n, function (e, t) {
                                  new RegExp("^" + r[1] + "/").test(t) &&
                                    [].push.apply(i, n[t]);
                                })
                              : n[t] && [].push.apply(i, n[t]));
                        }),
                        i
                      );
                    },
                    s = function (e) {
                      var t = e && e.match(/\.([^.]+)$/);
                      return t ? t[1].toLowerCase() : "";
                    };
                  return (
                    r(
                      "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb xlt xla,application/vnd.ms-powerpoint,ppt pps pot ppa,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe"
                    ),
                    {
                      mimes: i,
                      extensions: n,
                      addMimeType: r,
                      extList2mimes: function (t, i) {
                        var n,
                          r,
                          o,
                          s,
                          a = [];
                        for (r = 0; r < t.length; r++)
                          for (
                            n = t[r].extensions.toLowerCase().split(/\s*,\s*/),
                              o = 0;
                            o < n.length;
                            o++
                          ) {
                            if ("*" === n[o]) return [];
                            if (((s = a[n[o]]), i && /^\w+$/.test(n[o])))
                              a.push("." + n[o]);
                            else if (s && -1 === e.inArray(s, a)) a.push(s);
                            else if (!s) return [];
                          }
                        return a;
                      },
                      mimes2exts: o,
                      mimes2extList: function (i) {
                        var n = [],
                          r = [];
                        return (
                          "string" === e.typeOf(i) &&
                            (i = e.trim(i).split(/\s*,\s*/)),
                          (r = o(i)),
                          n.push({
                            title: t.translate("Files"),
                            extensions: r.length ? r.join(",") : "*",
                          }),
                          n
                        );
                      },
                      getFileExtension: s,
                      getFileMime: function (e) {
                        return i[s(e)] || "";
                      },
                    }
                  );
                }
              ),
              i(
                "moxie/file/FileInput",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Env",
                  "moxie/core/utils/Mime",
                  "moxie/core/utils/Dom",
                  "moxie/core/Exceptions",
                  "moxie/core/EventTarget",
                  "moxie/core/I18n",
                  "moxie/runtime/Runtime",
                  "moxie/runtime/RuntimeClient",
                ],
                function (e, t, i, n, r, o, s, a, u) {
                  function c(t) {
                    var o, c, d;
                    if (
                      (-1 !== e.inArray(e.typeOf(t), ["string", "node"]) &&
                        (t = {
                          browse_button: t,
                        }),
                      !(c = n.get(t.browse_button)))
                    )
                      throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);
                    (d = {
                      accept: [
                        {
                          title: s.translate("All Files"),
                          extensions: "*",
                        },
                      ],
                      multiple: !1,
                      required_caps: !1,
                      container: c.parentNode || document.body,
                    }),
                      "string" ==
                        typeof (t = e.extend({}, d, t)).required_caps &&
                        (t.required_caps = a.parseCaps(t.required_caps)),
                      "string" == typeof t.accept &&
                        (t.accept = i.mimes2extList(t.accept)),
                      (o = n.get(t.container)) || (o = document.body),
                      "static" === n.getStyle(o, "position") &&
                        (o.style.position = "relative"),
                      (o = c = null),
                      u.call(this),
                      e.extend(this, {
                        uid: e.guid("uid_"),
                        ruid: null,
                        shimid: null,
                        files: null,
                        init: function () {
                          var i = this;
                          i.bind("RuntimeInit", function (r, o) {
                            (i.ruid = o.uid),
                              (i.shimid = o.shimid),
                              i.bind(
                                "Ready",
                                function () {
                                  i.trigger("Refresh");
                                },
                                999
                              ),
                              i.bind("Refresh", function () {
                                var i, r, s, a, u;
                                (s = n.get(t.browse_button)),
                                  (a = n.get(o.shimid)),
                                  s &&
                                    ((i = n.getPos(s, n.get(t.container))),
                                    (r = n.getSize(s)),
                                    (u =
                                      parseInt(n.getStyle(s, "z-index"), 10) ||
                                      0),
                                    a &&
                                      e.extend(a.style, {
                                        top: i.y + "px",
                                        left: i.x + "px",
                                        width: r.w + "px",
                                        height: r.h + "px",
                                        zIndex: u + 1,
                                      })),
                                  (a = s = null);
                              }),
                              o.exec.call(i, "FileInput", "init", t);
                          }),
                            i.connectRuntime(
                              e.extend({}, t, {
                                required_caps: {
                                  select_file: !0,
                                },
                              })
                            );
                        },
                        getOption: function (e) {
                          return t[e];
                        },
                        setOption: function (e, n) {
                          if (t.hasOwnProperty(e)) {
                            var o = t[e];
                            switch (e) {
                              case "accept":
                                "string" == typeof n &&
                                  (n = i.mimes2extList(n));
                                break;
                              case "container":
                              case "required_caps":
                                throw new r.FileException(
                                  r.FileException.NO_MODIFICATION_ALLOWED_ERR
                                );
                            }
                            (t[e] = n),
                              this.exec("FileInput", "setOption", e, n),
                              this.trigger("OptionChanged", e, n, o);
                          }
                        },
                        disable: function (t) {
                          this.getRuntime() &&
                            this.exec(
                              "FileInput",
                              "disable",
                              "undefined" === e.typeOf(t) || t
                            );
                        },
                        refresh: function () {
                          this.trigger("Refresh");
                        },
                        destroy: function () {
                          var t = this.getRuntime();
                          t &&
                            (t.exec.call(this, "FileInput", "destroy"),
                            this.disconnectRuntime()),
                            "array" === e.typeOf(this.files) &&
                              e.each(this.files, function (e) {
                                e.destroy();
                              }),
                            (this.files = null),
                            this.unbindAll();
                        },
                      }),
                      this.handleEventProps(l);
                  }
                  var l = [
                    "ready",
                    "change",
                    "cancel",
                    "mouseenter",
                    "mouseleave",
                    "mousedown",
                    "mouseup",
                  ];
                  return (c.prototype = o.instance), c;
                }
              ),
              i(
                "moxie/file/File",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Mime",
                  "moxie/file/Blob",
                ],
                function (e, t, i) {
                  function n(n, r) {
                    var o;
                    if (
                      (r || (r = {}),
                      i.apply(this, arguments),
                      this.type || (this.type = t.getFileMime(r.name)),
                      r.name)
                    )
                      o = (o = r.name.replace(/\\/g, "/")).substr(
                        o.lastIndexOf("/") + 1
                      );
                    else if (this.type) {
                      var s = this.type.split("/")[0];
                      (o = e.guid(("" !== s ? s : "file") + "_")),
                        t.extensions[this.type] &&
                          (o += "." + t.extensions[this.type][0]);
                    }
                    e.extend(this, {
                      name: o || e.guid("file_"),
                      relativePath: "",
                      lastModifiedDate:
                        r.lastModifiedDate || new Date().toLocaleString(),
                    });
                  }
                  return (n.prototype = i.prototype), n;
                }
              ),
              i(
                "moxie/file/FileDrop",
                [
                  "moxie/core/I18n",
                  "moxie/core/utils/Dom",
                  "moxie/core/Exceptions",
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Env",
                  "moxie/file/File",
                  "moxie/runtime/RuntimeClient",
                  "moxie/core/EventTarget",
                  "moxie/core/utils/Mime",
                ],
                function (e, t, i, n, r, o, s, a, u) {
                  function c(i) {
                    var r,
                      o = this;
                    "string" == typeof i &&
                      (i = {
                        drop_zone: i,
                      }),
                      (r = {
                        accept: [
                          {
                            title: e.translate("All Files"),
                            extensions: "*",
                          },
                        ],
                        required_caps: {
                          drag_and_drop: !0,
                        },
                      }),
                      ((i =
                        "object" == typeof i
                          ? n.extend({}, r, i)
                          : r).container = t.get(i.drop_zone) || document.body),
                      "static" === t.getStyle(i.container, "position") &&
                        (i.container.style.position = "relative"),
                      "string" == typeof i.accept &&
                        (i.accept = u.mimes2extList(i.accept)),
                      s.call(o),
                      n.extend(o, {
                        uid: n.guid("uid_"),
                        ruid: null,
                        files: null,
                        init: function () {
                          o.bind("RuntimeInit", function (e, t) {
                            (o.ruid = t.uid),
                              t.exec.call(o, "FileDrop", "init", i),
                              o.dispatchEvent("ready");
                          }),
                            o.connectRuntime(i);
                        },
                        destroy: function () {
                          var e = this.getRuntime();
                          e &&
                            (e.exec.call(this, "FileDrop", "destroy"),
                            this.disconnectRuntime()),
                            (this.files = null),
                            this.unbindAll();
                        },
                      }),
                      this.handleEventProps(l);
                  }
                  var l = ["ready", "dragenter", "dragleave", "drop", "error"];
                  return (c.prototype = a.instance), c;
                }
              ),
              i(
                "moxie/file/FileReader",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Encode",
                  "moxie/core/Exceptions",
                  "moxie/core/EventTarget",
                  "moxie/file/Blob",
                  "moxie/runtime/RuntimeClient",
                ],
                function (e, t, i, n, r, o) {
                  function s() {
                    function n(e, n) {
                      if (
                        (this.trigger("loadstart"),
                        this.readyState === s.LOADING)
                      )
                        return (
                          this.trigger(
                            "error",
                            new i.DOMException(i.DOMException.INVALID_STATE_ERR)
                          ),
                          void this.trigger("loadend")
                        );
                      if (!(n instanceof r))
                        return (
                          this.trigger(
                            "error",
                            new i.DOMException(i.DOMException.NOT_FOUND_ERR)
                          ),
                          void this.trigger("loadend")
                        );
                      if (
                        ((this.result = null),
                        (this.readyState = s.LOADING),
                        n.isDetached())
                      ) {
                        var o = n.getSource();
                        switch (e) {
                          case "readAsText":
                          case "readAsBinaryString":
                            this.result = o;
                            break;
                          case "readAsDataURL":
                            this.result =
                              "data:" + n.type + ";base64," + t.btoa(o);
                        }
                        (this.readyState = s.DONE),
                          this.trigger("load"),
                          this.trigger("loadend");
                      } else
                        this.connectRuntime(n.ruid),
                          this.exec("FileReader", "read", e, n);
                    }
                    o.call(this),
                      e.extend(this, {
                        uid: e.guid("uid_"),
                        readyState: s.EMPTY,
                        result: null,
                        error: null,
                        readAsBinaryString: function (e) {
                          n.call(this, "readAsBinaryString", e);
                        },
                        readAsDataURL: function (e) {
                          n.call(this, "readAsDataURL", e);
                        },
                        readAsText: function (e) {
                          n.call(this, "readAsText", e);
                        },
                        abort: function () {
                          (this.result = null),
                            -1 ===
                              e.inArray(this.readyState, [s.EMPTY, s.DONE]) &&
                              (this.readyState === s.LOADING &&
                                (this.readyState = s.DONE),
                              this.exec("FileReader", "abort"),
                              this.trigger("abort"),
                              this.trigger("loadend"));
                        },
                        destroy: function () {
                          this.abort(),
                            this.exec("FileReader", "destroy"),
                            this.disconnectRuntime(),
                            this.unbindAll();
                        },
                      }),
                      this.handleEventProps(a),
                      this.bind(
                        "Error",
                        function (e, t) {
                          (this.readyState = s.DONE), (this.error = t);
                        },
                        999
                      ),
                      this.bind(
                        "Load",
                        function () {
                          this.readyState = s.DONE;
                        },
                        999
                      );
                  }
                  var a = [
                    "loadstart",
                    "progress",
                    "load",
                    "abort",
                    "error",
                    "loadend",
                  ];
                  return (
                    (s.EMPTY = 0),
                    (s.LOADING = 1),
                    (s.DONE = 2),
                    (s.prototype = n.instance),
                    s
                  );
                }
              ),
              i(
                "moxie/core/utils/Url",
                ["moxie/core/utils/Basic"],
                function (e) {
                  var t = function (i, n) {
                    var r,
                      o = [
                        "source",
                        "scheme",
                        "authority",
                        "userInfo",
                        "user",
                        "pass",
                        "host",
                        "port",
                        "relative",
                        "path",
                        "directory",
                        "file",
                        "query",
                        "fragment",
                      ],
                      s = o.length,
                      a = {},
                      u =
                        /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?(\[[\da-fA-F:]+\]|[^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/.exec(
                          i || ""
                        ),
                      c = /^\/\/\w/.test(i);
                    switch (e.typeOf(n)) {
                      case "undefined":
                        n = t(document.location.href, !1);
                        break;
                      case "string":
                        n = t(n, !1);
                    }
                    for (; s--; ) u[s] && (a[o[s]] = u[s]);
                    if (
                      ((r = !c && !a.scheme),
                      (c || r) && (a.scheme = n.scheme),
                      r)
                    ) {
                      (a.host = n.host), (a.port = n.port);
                      var l = "";
                      /^[^\/]/.test(a.path) &&
                        ((l = n.path),
                        (l = /\/[^\/]*\.[^\/]*$/.test(l)
                          ? l.replace(/\/[^\/]+$/, "/")
                          : l.replace(/\/?$/, "/"))),
                        (a.path = l + (a.path || ""));
                    }
                    return (
                      a.port ||
                        (a.port =
                          {
                            http: 80,
                            https: 443,
                          }[a.scheme] || 80),
                      (a.port = parseInt(a.port, 10)),
                      a.path || (a.path = "/"),
                      delete a.source,
                      a
                    );
                  };
                  return {
                    parseUrl: t,
                    resolveUrl: function (e) {
                      var i = "object" == typeof e ? e : t(e);
                      return (
                        i.scheme +
                        "://" +
                        i.host +
                        (i.port !==
                        {
                          http: 80,
                          https: 443,
                        }[i.scheme]
                          ? ":" + i.port
                          : "") +
                        i.path +
                        (i.query ? i.query : "")
                      );
                    },
                    hasSameOrigin: function (e) {
                      function i(e) {
                        return [e.scheme, e.host, e.port].join("/");
                      }
                      return (
                        "string" == typeof e && (e = t(e)), i(t()) === i(e)
                      );
                    },
                  };
                }
              ),
              i(
                "moxie/runtime/RuntimeTarget",
                [
                  "moxie/core/utils/Basic",
                  "moxie/runtime/RuntimeClient",
                  "moxie/core/EventTarget",
                ],
                function (e, t, i) {
                  function n() {
                    (this.uid = e.guid("uid_")),
                      t.call(this),
                      (this.destroy = function () {
                        this.disconnectRuntime(), this.unbindAll();
                      });
                  }
                  return (n.prototype = i.instance), n;
                }
              ),
              i(
                "moxie/file/FileReaderSync",
                [
                  "moxie/core/utils/Basic",
                  "moxie/runtime/RuntimeClient",
                  "moxie/core/utils/Encode",
                ],
                function (e, t, i) {
                  return function () {
                    function n(e, t) {
                      if (!t.isDetached()) {
                        var n = this.connectRuntime(t.ruid).exec.call(
                          this,
                          "FileReaderSync",
                          "read",
                          e,
                          t
                        );
                        return this.disconnectRuntime(), n;
                      }
                      var r = t.getSource();
                      switch (e) {
                        case "readAsBinaryString":
                          return r;
                        case "readAsDataURL":
                          return "data:" + t.type + ";base64," + i.btoa(r);
                        case "readAsText":
                          for (var o = "", s = 0, a = r.length; a > s; s++)
                            o += String.fromCharCode(r[s]);
                          return o;
                      }
                    }
                    t.call(this),
                      e.extend(this, {
                        uid: e.guid("uid_"),
                        readAsBinaryString: function (e) {
                          return n.call(this, "readAsBinaryString", e);
                        },
                        readAsDataURL: function (e) {
                          return n.call(this, "readAsDataURL", e);
                        },
                        readAsText: function (e) {
                          return n.call(this, "readAsText", e);
                        },
                      });
                  };
                }
              ),
              i(
                "moxie/xhr/FormData",
                [
                  "moxie/core/Exceptions",
                  "moxie/core/utils/Basic",
                  "moxie/file/Blob",
                ],
                function (e, t, i) {
                  return function () {
                    var e,
                      n = [];
                    t.extend(this, {
                      append: function (r, o) {
                        var s = this,
                          a = t.typeOf(o);
                        o instanceof i
                          ? (e = {
                              name: r,
                              value: o,
                            })
                          : "array" === a
                          ? ((r += "[]"),
                            t.each(o, function (e) {
                              s.append(r, e);
                            }))
                          : "object" === a
                          ? t.each(o, function (e, t) {
                              s.append(r + "[" + t + "]", e);
                            })
                          : "null" === a ||
                            "undefined" === a ||
                            ("number" === a && isNaN(o))
                          ? s.append(r, "false")
                          : n.push({
                              name: r,
                              value: o.toString(),
                            });
                      },
                      hasBlob: function () {
                        return !!this.getBlob();
                      },
                      getBlob: function () {
                        return (e && e.value) || null;
                      },
                      getBlobName: function () {
                        return (e && e.name) || null;
                      },
                      each: function (i) {
                        t.each(n, function (e) {
                          i(e.value, e.name);
                        }),
                          e && i(e.value, e.name);
                      },
                      destroy: function () {
                        (e = null), (n = []);
                      },
                    });
                  };
                }
              ),
              i(
                "moxie/xhr/XMLHttpRequest",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/Exceptions",
                  "moxie/core/EventTarget",
                  "moxie/core/utils/Encode",
                  "moxie/core/utils/Url",
                  "moxie/runtime/Runtime",
                  "moxie/runtime/RuntimeTarget",
                  "moxie/file/Blob",
                  "moxie/file/FileReaderSync",
                  "moxie/xhr/FormData",
                  "moxie/core/utils/Env",
                  "moxie/core/utils/Mime",
                ],
                function (e, t, i, n, r, o, s, a, u, c, l, d) {
                  function h() {
                    this.uid = e.guid("uid_");
                  }
                  function f() {
                    function i(e, t) {
                      return R.hasOwnProperty(e)
                        ? 1 === arguments.length
                          ? l.can("define_property")
                            ? R[e]
                            : b[e]
                          : void (l.can("define_property")
                              ? (R[e] = t)
                              : (b[e] = t))
                        : void 0;
                    }
                    function u(t) {
                      function n() {
                        E && (E.destroy(), (E = null)),
                          a.dispatchEvent("loadend"),
                          (a = null);
                      }
                      function r(r) {
                        E.bind("LoadStart", function (e) {
                          i("readyState", f.LOADING),
                            a.dispatchEvent("readystatechange"),
                            a.dispatchEvent(e),
                            C && a.upload.dispatchEvent(e);
                        }),
                          E.bind("Progress", function (e) {
                            i("readyState") !== f.LOADING &&
                              (i("readyState", f.LOADING),
                              a.dispatchEvent("readystatechange")),
                              a.dispatchEvent(e);
                          }),
                          E.bind("UploadProgress", function (e) {
                            C &&
                              a.upload.dispatchEvent({
                                type: "progress",
                                lengthComputable: !1,
                                total: e.total,
                                loaded: e.loaded,
                              });
                          }),
                          E.bind("Load", function (t) {
                            i("readyState", f.DONE),
                              i(
                                "status",
                                Number(
                                  r.exec.call(
                                    E,
                                    "XMLHttpRequest",
                                    "getStatus"
                                  ) || 0
                                )
                              ),
                              i("statusText", m[i("status")] || ""),
                              i(
                                "response",
                                r.exec.call(
                                  E,
                                  "XMLHttpRequest",
                                  "getResponse",
                                  i("responseType")
                                )
                              ),
                              ~e.inArray(i("responseType"), ["text", ""])
                                ? i("responseText", i("response"))
                                : "document" === i("responseType") &&
                                  i("responseXML", i("response")),
                              (P = r.exec.call(
                                E,
                                "XMLHttpRequest",
                                "getAllResponseHeaders"
                              )),
                              a.dispatchEvent("readystatechange"),
                              i("status") > 0
                                ? (C && a.upload.dispatchEvent(t),
                                  a.dispatchEvent(t))
                                : ((F = !0), a.dispatchEvent("error")),
                              n();
                          }),
                          E.bind("Abort", function (e) {
                            a.dispatchEvent(e), n();
                          }),
                          E.bind("Error", function (e) {
                            (F = !0),
                              i("readyState", f.DONE),
                              a.dispatchEvent("readystatechange"),
                              (N = !0),
                              a.dispatchEvent(e),
                              n();
                          }),
                          r.exec.call(
                            E,
                            "XMLHttpRequest",
                            "send",
                            {
                              url: v,
                              method: x,
                              async: I,
                              user: y,
                              password: w,
                              headers: A,
                              mimeType: S,
                              encoding: T,
                              responseType: a.responseType,
                              withCredentials: a.withCredentials,
                              options: M,
                            },
                            t
                          );
                      }
                      var a = this;
                      new Date().getTime(),
                        (E = new s()),
                        "string" == typeof M.required_caps &&
                          (M.required_caps = o.parseCaps(M.required_caps)),
                        (M.required_caps = e.extend({}, M.required_caps, {
                          return_response_type: a.responseType,
                        })),
                        t instanceof c && (M.required_caps.send_multipart = !0),
                        e.isEmptyObj(A) ||
                          (M.required_caps.send_custom_headers = !0),
                        L || (M.required_caps.do_cors = !0),
                        M.ruid
                          ? r(E.connectRuntime(M))
                          : (E.bind("RuntimeInit", function (e, t) {
                              r(t);
                            }),
                            E.bind("RuntimeError", function (e, t) {
                              a.dispatchEvent("RuntimeError", t);
                            }),
                            E.connectRuntime(M));
                    }
                    function g() {
                      i("responseText", ""),
                        i("responseXML", null),
                        i("response", null),
                        i("status", 0),
                        i("statusText", "");
                    }
                    var v,
                      x,
                      y,
                      w,
                      E,
                      _,
                      b = this,
                      R = {
                        timeout: 0,
                        readyState: f.UNSENT,
                        withCredentials: !1,
                        status: 0,
                        statusText: "",
                        responseType: "",
                        responseXML: null,
                        responseText: null,
                        response: null,
                      },
                      I = !0,
                      A = {},
                      T = null,
                      S = null,
                      O = !1,
                      D = !1,
                      C = !1,
                      N = !1,
                      F = !1,
                      L = !1,
                      M = {},
                      P = "";
                    e.extend(this, R, {
                      uid: e.guid("uid_"),
                      upload: new h(),
                      open: function (o, s, a, u, c) {
                        var l;
                        if (!o || !s)
                          throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        if (/[\u0100-\uffff]/.test(o) || n.utf8_encode(o) !== o)
                          throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        if (
                          (~e.inArray(o.toUpperCase(), [
                            "CONNECT",
                            "DELETE",
                            "GET",
                            "HEAD",
                            "OPTIONS",
                            "POST",
                            "PUT",
                            "TRACE",
                            "TRACK",
                          ]) && (x = o.toUpperCase()),
                          ~e.inArray(x, ["CONNECT", "TRACE", "TRACK"]))
                        )
                          throw new t.DOMException(t.DOMException.SECURITY_ERR);
                        if (
                          ((s = n.utf8_encode(s)),
                          (l = r.parseUrl(s)),
                          (L = r.hasSameOrigin(l)),
                          (v = r.resolveUrl(s)),
                          (u || c) && !L)
                        )
                          throw new t.DOMException(
                            t.DOMException.INVALID_ACCESS_ERR
                          );
                        if (
                          ((y = u || l.user),
                          (w = c || l.pass),
                          !1 === (I = a || !0) &&
                            (i("timeout") ||
                              i("withCredentials") ||
                              "" !== i("responseType")))
                        )
                          throw new t.DOMException(
                            t.DOMException.INVALID_ACCESS_ERR
                          );
                        (O = !I),
                          (D = !1),
                          (A = {}),
                          g.call(this),
                          i("readyState", f.OPENED),
                          this.dispatchEvent("readystatechange");
                      },
                      setRequestHeader: function (r, o) {
                        if (i("readyState") !== f.OPENED || D)
                          throw new t.DOMException(
                            t.DOMException.INVALID_STATE_ERR
                          );
                        if (/[\u0100-\uffff]/.test(r) || n.utf8_encode(r) !== r)
                          throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        return (
                          (r = e.trim(r).toLowerCase()),
                          !~e.inArray(r, [
                            "accept-charset",
                            "accept-encoding",
                            "access-control-request-headers",
                            "access-control-request-method",
                            "connection",
                            "content-length",
                            "cookie",
                            "cookie2",
                            "content-transfer-encoding",
                            "date",
                            "expect",
                            "host",
                            "keep-alive",
                            "origin",
                            "referer",
                            "te",
                            "trailer",
                            "transfer-encoding",
                            "upgrade",
                            "user-agent",
                            "via",
                          ]) &&
                            !/^(proxy\-|sec\-)/.test(r) &&
                            (A[r] ? (A[r] += ", " + o) : (A[r] = o), !0)
                        );
                      },
                      hasRequestHeader: function (e) {
                        return (e && A[e.toLowerCase()]) || !1;
                      },
                      getAllResponseHeaders: function () {
                        return P || "";
                      },
                      getResponseHeader: function (t) {
                        return (
                          (t = t.toLowerCase()),
                          F || ~e.inArray(t, ["set-cookie", "set-cookie2"])
                            ? null
                            : P &&
                              "" !== P &&
                              (_ ||
                                ((_ = {}),
                                e.each(P.split(/\r\n/), function (t) {
                                  var i = t.split(/:\s+/);
                                  2 === i.length &&
                                    ((i[0] = e.trim(i[0])),
                                    (_[i[0].toLowerCase()] = {
                                      header: i[0],
                                      value: e.trim(i[1]),
                                    }));
                                })),
                              _.hasOwnProperty(t))
                            ? _[t].header + ": " + _[t].value
                            : null
                        );
                      },
                      overrideMimeType: function (n) {
                        var r;
                        if (~e.inArray(i("readyState"), [f.LOADING, f.DONE]))
                          throw new t.DOMException(
                            t.DOMException.INVALID_STATE_ERR
                          );
                        if (
                          ((n = e.trim(n.toLowerCase())),
                          /;/.test(n) &&
                            (r = n.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) &&
                            ((n = r[1]), r[2] && r[2]),
                          !d.mimes[n])
                        )
                          throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                      },
                      send: function (i, r) {
                        if (
                          ((M =
                            "string" === e.typeOf(r)
                              ? {
                                  ruid: r,
                                }
                              : r || {}),
                          this.readyState !== f.OPENED || D)
                        )
                          throw new t.DOMException(
                            t.DOMException.INVALID_STATE_ERR
                          );
                        if (i instanceof a)
                          (M.ruid = i.ruid),
                            (S = i.type || "application/octet-stream");
                        else if (i instanceof c) {
                          if (i.hasBlob()) {
                            var o = i.getBlob();
                            (M.ruid = o.ruid),
                              (S = o.type || "application/octet-stream");
                          }
                        } else
                          "string" == typeof i &&
                            ((T = "UTF-8"),
                            (S = "text/plain;charset=UTF-8"),
                            (i = n.utf8_encode(i)));
                        this.withCredentials ||
                          (this.withCredentials =
                            M.required_caps &&
                            M.required_caps.send_browser_cookies &&
                            !L),
                          (C = !O && this.upload.hasEventListener()),
                          (F = !1),
                          (N = !i),
                          O || (D = !0),
                          u.call(this, i);
                      },
                      abort: function () {
                        if (
                          ((F = !0),
                          (O = !1),
                          ~e.inArray(i("readyState"), [
                            f.UNSENT,
                            f.OPENED,
                            f.DONE,
                          ]))
                        )
                          i("readyState", f.UNSENT);
                        else {
                          if ((i("readyState", f.DONE), (D = !1), !E))
                            throw new t.DOMException(
                              t.DOMException.INVALID_STATE_ERR
                            );
                          E.getRuntime().exec.call(
                            E,
                            "XMLHttpRequest",
                            "abort",
                            N
                          ),
                            (N = !0);
                        }
                      },
                      destroy: function () {
                        E &&
                          ("function" === e.typeOf(E.destroy) && E.destroy(),
                          (E = null)),
                          this.unbindAll(),
                          this.upload &&
                            (this.upload.unbindAll(), (this.upload = null));
                      },
                    }),
                      this.handleEventProps(p.concat(["readystatechange"])),
                      this.upload.handleEventProps(p);
                  }
                  var m = {
                    100: "Continue",
                    101: "Switching Protocols",
                    102: "Processing",
                    200: "OK",
                    201: "Created",
                    202: "Accepted",
                    203: "Non-Authoritative Information",
                    204: "No Content",
                    205: "Reset Content",
                    206: "Partial Content",
                    207: "Multi-Status",
                    226: "IM Used",
                    300: "Multiple Choices",
                    301: "Moved Permanently",
                    302: "Found",
                    303: "See Other",
                    304: "Not Modified",
                    305: "Use Proxy",
                    306: "Reserved",
                    307: "Temporary Redirect",
                    400: "Bad Request",
                    401: "Unauthorized",
                    402: "Payment Required",
                    403: "Forbidden",
                    404: "Not Found",
                    405: "Method Not Allowed",
                    406: "Not Acceptable",
                    407: "Proxy Authentication Required",
                    408: "Request Timeout",
                    409: "Conflict",
                    410: "Gone",
                    411: "Length Required",
                    412: "Precondition Failed",
                    413: "Request Entity Too Large",
                    414: "Request-URI Too Long",
                    415: "Unsupported Media Type",
                    416: "Requested Range Not Satisfiable",
                    417: "Expectation Failed",
                    422: "Unprocessable Entity",
                    423: "Locked",
                    424: "Failed Dependency",
                    426: "Upgrade Required",
                    500: "Internal Server Error",
                    501: "Not Implemented",
                    502: "Bad Gateway",
                    503: "Service Unavailable",
                    504: "Gateway Timeout",
                    505: "HTTP Version Not Supported",
                    506: "Variant Also Negotiates",
                    507: "Insufficient Storage",
                    510: "Not Extended",
                  };
                  h.prototype = i.instance;
                  var p = [
                    "loadstart",
                    "progress",
                    "abort",
                    "error",
                    "load",
                    "timeout",
                    "loadend",
                  ];
                  return (
                    (f.UNSENT = 0),
                    (f.OPENED = 1),
                    (f.HEADERS_RECEIVED = 2),
                    (f.LOADING = 3),
                    (f.DONE = 4),
                    (f.prototype = i.instance),
                    f
                  );
                }
              ),
              i(
                "moxie/runtime/Transporter",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Encode",
                  "moxie/runtime/RuntimeClient",
                  "moxie/core/EventTarget",
                ],
                function (e, t, i, n) {
                  function r() {
                    function n() {
                      (l = d = 0), (c = this.result = null);
                    }
                    function o(t, i) {
                      var n = this;
                      (u = i),
                        n.bind(
                          "TransportingProgress",
                          function (t) {
                            (d = t.loaded),
                              l > d &&
                                -1 === e.inArray(n.state, [r.IDLE, r.DONE]) &&
                                s.call(n);
                          },
                          999
                        ),
                        n.bind(
                          "TransportingComplete",
                          function () {
                            (d = l),
                              (n.state = r.DONE),
                              (c = null),
                              (n.result = u.exec.call(
                                n,
                                "Transporter",
                                "getAsBlob",
                                t || ""
                              ));
                          },
                          999
                        ),
                        (n.state = r.BUSY),
                        n.trigger("TransportingStarted"),
                        s.call(n);
                    }
                    function s() {
                      var e,
                        i = l - d;
                      h > i && (h = i),
                        (e = t.btoa(c.substr(d, h))),
                        u.exec.call(this, "Transporter", "receive", e, l);
                    }
                    var a, u, c, l, d, h;
                    i.call(this),
                      e.extend(this, {
                        uid: e.guid("uid_"),
                        state: r.IDLE,
                        result: null,
                        transport: function (t, i, r) {
                          var s = this;
                          if (
                            ((r = e.extend(
                              {
                                chunk_size: 204798,
                              },
                              r
                            )),
                            (a = r.chunk_size % 3) && (r.chunk_size += 3 - a),
                            (h = r.chunk_size),
                            n.call(this),
                            (c = t),
                            (l = t.length),
                            "string" === e.typeOf(r) || r.ruid)
                          )
                            o.call(s, i, this.connectRuntime(r));
                          else {
                            var u = function (e, t) {
                              s.unbind("RuntimeInit", u), o.call(s, i, t);
                            };
                            this.bind("RuntimeInit", u), this.connectRuntime(r);
                          }
                        },
                        abort: function () {
                          var e = this;
                          (e.state = r.IDLE),
                            u &&
                              (u.exec.call(e, "Transporter", "clear"),
                              e.trigger("TransportingAborted")),
                            n.call(e);
                        },
                        destroy: function () {
                          this.unbindAll(),
                            (u = null),
                            this.disconnectRuntime(),
                            n.call(this);
                        },
                      });
                  }
                  return (
                    (r.IDLE = 0),
                    (r.BUSY = 1),
                    (r.DONE = 2),
                    (r.prototype = n.instance),
                    r
                  );
                }
              ),
              i(
                "moxie/image/Image",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Dom",
                  "moxie/core/Exceptions",
                  "moxie/file/FileReaderSync",
                  "moxie/xhr/XMLHttpRequest",
                  "moxie/runtime/Runtime",
                  "moxie/runtime/RuntimeClient",
                  "moxie/runtime/Transporter",
                  "moxie/core/utils/Env",
                  "moxie/core/EventTarget",
                  "moxie/file/Blob",
                  "moxie/file/File",
                  "moxie/core/utils/Encode",
                ],
                function (e, t, i, n, r, o, s, a, u, c, l, d, h) {
                  function f() {
                    function n(e) {
                      try {
                        return (
                          e || (e = this.exec("Image", "getInfo")),
                          (this.size = e.size),
                          (this.width = e.width),
                          (this.height = e.height),
                          (this.type = e.type),
                          (this.meta = e.meta),
                          "" === this.name && (this.name = e.name),
                          !0
                        );
                      } catch (e) {
                        return this.trigger("error", e.code), !1;
                      }
                    }
                    function c(t) {
                      var n = e.typeOf(t);
                      try {
                        if (t instanceof f) {
                          if (!t.size)
                            throw new i.DOMException(
                              i.DOMException.INVALID_STATE_ERR
                            );
                          p.apply(this, arguments);
                        } else if (t instanceof l) {
                          if (!~e.inArray(t.type, ["image/jpeg", "image/png"]))
                            throw new i.ImageError(i.ImageError.WRONG_FORMAT);
                          g.apply(this, arguments);
                        } else if (-1 !== e.inArray(n, ["blob", "file"]))
                          c.call(this, new d(null, t), arguments[1]);
                        else if ("string" === n)
                          "data:" === t.substr(0, 5)
                            ? c.call(
                                this,
                                new l(null, {
                                  data: t,
                                }),
                                arguments[1]
                              )
                            : v.apply(this, arguments);
                        else {
                          if (
                            "node" !== n ||
                            "img" !== t.nodeName.toLowerCase()
                          )
                            throw new i.DOMException(
                              i.DOMException.TYPE_MISMATCH_ERR
                            );
                          c.call(this, t.src, arguments[1]);
                        }
                      } catch (e) {
                        this.trigger("error", e.code);
                      }
                    }
                    function p(t, i) {
                      var n = this.connectRuntime(t.ruid);
                      (this.ruid = n.uid),
                        n.exec.call(
                          this,
                          "Image",
                          "loadFromImage",
                          t,
                          "undefined" === e.typeOf(i) || i
                        );
                    }
                    function g(t, i) {
                      function n(e) {
                        (r.ruid = e.uid),
                          e.exec.call(r, "Image", "loadFromBlob", t);
                      }
                      var r = this;
                      (r.name = t.name || ""),
                        t.isDetached()
                          ? (this.bind("RuntimeInit", function (e, t) {
                              n(t);
                            }),
                            i &&
                              "string" == typeof i.required_caps &&
                              (i.required_caps = o.parseCaps(i.required_caps)),
                            this.connectRuntime(
                              e.extend(
                                {
                                  required_caps: {
                                    access_image_binary: !0,
                                    resize_image: !0,
                                  },
                                },
                                i
                              )
                            ))
                          : n(this.connectRuntime(t.ruid));
                    }
                    function v(e, t) {
                      var i,
                        n = this;
                      (i = new r()).open("get", e),
                        (i.responseType = "blob"),
                        (i.onprogress = function (e) {
                          n.trigger(e);
                        }),
                        (i.onload = function () {
                          g.call(n, i.response, !0);
                        }),
                        (i.onerror = function (e) {
                          n.trigger(e);
                        }),
                        (i.onloadend = function () {
                          i.destroy();
                        }),
                        i.bind("RuntimeError", function (e, t) {
                          n.trigger("RuntimeError", t);
                        }),
                        i.send(null, t);
                    }
                    s.call(this),
                      e.extend(this, {
                        uid: e.guid("uid_"),
                        ruid: null,
                        name: "",
                        size: 0,
                        width: 0,
                        height: 0,
                        type: "",
                        meta: {},
                        clone: function () {
                          this.load.apply(this, arguments);
                        },
                        load: function () {
                          c.apply(this, arguments);
                        },
                        resize: function (t) {
                          var n,
                            r,
                            o = this,
                            s = {
                              x: 0,
                              y: 0,
                              width: o.width,
                              height: o.height,
                            },
                            a = e.extendIf(
                              {
                                width: o.width,
                                height: o.height,
                                type: o.type || "image/jpeg",
                                quality: 90,
                                crop: !1,
                                fit: !0,
                                preserveHeaders: !0,
                                resample: "default",
                                multipass: !0,
                              },
                              t
                            );
                          try {
                            if (!o.size)
                              throw new i.DOMException(
                                i.DOMException.INVALID_STATE_ERR
                              );
                            if (
                              o.width > f.MAX_RESIZE_WIDTH ||
                              o.height > f.MAX_RESIZE_HEIGHT
                            )
                              throw new i.ImageError(
                                i.ImageError.MAX_RESOLUTION_ERR
                              );
                            if (
                              ((n =
                                (o.meta &&
                                  o.meta.tiff &&
                                  o.meta.tiff.Orientation) ||
                                1),
                              -1 !== e.inArray(n, [5, 6, 7, 8]))
                            ) {
                              var u = a.width;
                              (a.width = a.height), (a.height = u);
                            }
                            if (a.crop) {
                              switch (
                                ((r = Math.max(
                                  a.width / o.width,
                                  a.height / o.height
                                )),
                                t.fit
                                  ? ((s.width = Math.min(
                                      Math.ceil(a.width / r),
                                      o.width
                                    )),
                                    (s.height = Math.min(
                                      Math.ceil(a.height / r),
                                      o.height
                                    )),
                                    (r = a.width / s.width))
                                  : ((s.width = Math.min(a.width, o.width)),
                                    (s.height = Math.min(a.height, o.height)),
                                    (r = 1)),
                                "boolean" == typeof a.crop && (a.crop = "cc"),
                                a.crop.toLowerCase().replace(/_/, "-"))
                              ) {
                                case "rb":
                                case "right-bottom":
                                  (s.x = o.width - s.width),
                                    (s.y = o.height - s.height);
                                  break;
                                case "cb":
                                case "center-bottom":
                                  (s.x = Math.floor((o.width - s.width) / 2)),
                                    (s.y = o.height - s.height);
                                  break;
                                case "lb":
                                case "left-bottom":
                                  (s.x = 0), (s.y = o.height - s.height);
                                  break;
                                case "lt":
                                case "left-top":
                                  (s.x = 0), (s.y = 0);
                                  break;
                                case "ct":
                                case "center-top":
                                  (s.x = Math.floor((o.width - s.width) / 2)),
                                    (s.y = 0);
                                  break;
                                case "rt":
                                case "right-top":
                                  (s.x = o.width - s.width), (s.y = 0);
                                  break;
                                case "rc":
                                case "right-center":
                                case "right-middle":
                                  (s.x = o.width - s.width),
                                    (s.y = Math.floor(
                                      (o.height - s.height) / 2
                                    ));
                                  break;
                                case "lc":
                                case "left-center":
                                case "left-middle":
                                  (s.x = 0),
                                    (s.y = Math.floor(
                                      (o.height - s.height) / 2
                                    ));
                                  break;
                                default:
                                  (s.x = Math.floor((o.width - s.width) / 2)),
                                    (s.y = Math.floor(
                                      (o.height - s.height) / 2
                                    ));
                              }
                              (s.x = Math.max(s.x, 0)),
                                (s.y = Math.max(s.y, 0));
                            } else
                              (r = Math.min(
                                a.width / o.width,
                                a.height / o.height
                              )) > 1 &&
                                !a.fit &&
                                (r = 1);
                            this.exec("Image", "resize", s, r, a);
                          } catch (e) {
                            o.trigger("error", e.code);
                          }
                        },
                        downsize: function (t) {
                          var i,
                            n = {
                              width: this.width,
                              height: this.height,
                              type: this.type || "image/jpeg",
                              quality: 90,
                              crop: !1,
                              fit: !1,
                              preserveHeaders: !0,
                              resample: "default",
                            };
                          (i =
                            "object" == typeof t
                              ? e.extend(n, t)
                              : e.extend(n, {
                                  width: arguments[0],
                                  height: arguments[1],
                                  crop: arguments[2],
                                  preserveHeaders: arguments[3],
                                })),
                            this.resize(i);
                        },
                        crop: function (e, t, i) {
                          this.downsize(e, t, !0, i);
                        },
                        getAsCanvas: function () {
                          if (!u.can("create_canvas"))
                            throw new i.RuntimeError(
                              i.RuntimeError.NOT_SUPPORTED_ERR
                            );
                          return this.exec("Image", "getAsCanvas");
                        },
                        getAsBlob: function (e, t) {
                          if (!this.size)
                            throw new i.DOMException(
                              i.DOMException.INVALID_STATE_ERR
                            );
                          return this.exec(
                            "Image",
                            "getAsBlob",
                            e || "image/jpeg",
                            t || 90
                          );
                        },
                        getAsDataURL: function (e, t) {
                          if (!this.size)
                            throw new i.DOMException(
                              i.DOMException.INVALID_STATE_ERR
                            );
                          return this.exec(
                            "Image",
                            "getAsDataURL",
                            e || "image/jpeg",
                            t || 90
                          );
                        },
                        getAsBinaryString: function (e, t) {
                          var i = this.getAsDataURL(e, t);
                          return h.atob(i.substring(i.indexOf("base64,") + 7));
                        },
                        embed: function (n, r) {
                          function o(t, r) {
                            var o = this;
                            if (u.can("create_canvas")) {
                              var l = o.getAsCanvas();
                              if (l)
                                return (
                                  n.appendChild(l),
                                  (l = null),
                                  o.destroy(),
                                  void c.trigger("embedded")
                                );
                            }
                            var d = o.getAsDataURL(t, r);
                            if (!d)
                              throw new i.ImageError(i.ImageError.WRONG_FORMAT);
                            if (u.can("use_data_uri_of", d.length))
                              (n.innerHTML =
                                '<img src="' +
                                d +
                                '" width="' +
                                o.width +
                                '" height="' +
                                o.height +
                                '" alt="" />'),
                                o.destroy(),
                                c.trigger("embedded");
                            else {
                              var f = new a();
                              f.bind("TransportingComplete", function () {
                                (s = c.connectRuntime(this.result.ruid)),
                                  c.bind(
                                    "Embedded",
                                    function () {
                                      e.extend(s.getShimContainer().style, {
                                        top: "0px",
                                        left: "0px",
                                        width: o.width + "px",
                                        height: o.height + "px",
                                      }),
                                        (s = null);
                                    },
                                    999
                                  ),
                                  s.exec.call(
                                    c,
                                    "ImageView",
                                    "display",
                                    this.result.uid,
                                    width,
                                    height
                                  ),
                                  o.destroy();
                              }),
                                f.transport(
                                  h.atob(d.substring(d.indexOf("base64,") + 7)),
                                  t,
                                  {
                                    required_caps: {
                                      display_media: !0,
                                    },
                                    runtime_order: "flash,silverlight",
                                    container: n,
                                  }
                                );
                            }
                          }
                          var s,
                            c = this,
                            l = e.extend(
                              {
                                width: this.width,
                                height: this.height,
                                type: this.type || "image/jpeg",
                                quality: 90,
                                fit: !0,
                                resample: "nearest",
                              },
                              r
                            );
                          try {
                            if (!(n = t.get(n)))
                              throw new i.DOMException(
                                i.DOMException.INVALID_NODE_TYPE_ERR
                              );
                            if (!this.size)
                              throw new i.DOMException(
                                i.DOMException.INVALID_STATE_ERR
                              );
                            this.width > f.MAX_RESIZE_WIDTH ||
                              (this.height, f.MAX_RESIZE_HEIGHT);
                            var d = new f();
                            return (
                              d.bind("Resize", function () {
                                o.call(this, l.type, l.quality);
                              }),
                              d.bind("Load", function () {
                                this.downsize(l);
                              }),
                              this.meta.thumb &&
                              this.meta.thumb.width >= l.width &&
                              this.meta.thumb.height >= l.height
                                ? d.load(this.meta.thumb.data)
                                : d.clone(this, !1),
                              d
                            );
                          } catch (e) {
                            this.trigger("error", e.code);
                          }
                        },
                        destroy: function () {
                          this.ruid &&
                            (this.getRuntime().exec.call(
                              this,
                              "Image",
                              "destroy"
                            ),
                            this.disconnectRuntime()),
                            this.meta &&
                              this.meta.thumb &&
                              this.meta.thumb.data.destroy(),
                            this.unbindAll();
                        },
                      }),
                      this.handleEventProps(m),
                      this.bind(
                        "Load Resize",
                        function () {
                          return n.call(this);
                        },
                        999
                      );
                  }
                  var m = ["progress", "load", "error", "resize", "embedded"];
                  return (
                    (f.MAX_RESIZE_WIDTH = 8192),
                    (f.MAX_RESIZE_HEIGHT = 8192),
                    (f.prototype = c.instance),
                    f
                  );
                }
              ),
              i(
                "moxie/runtime/html5/Runtime",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/Exceptions",
                  "moxie/runtime/Runtime",
                  "moxie/core/utils/Env",
                ],
                function (e, t, i, r) {
                  var o = "html5",
                    s = {};
                  return (
                    i.addConstructor(o, function (t) {
                      var a = this,
                        u = i.capTest,
                        c = i.capTrue,
                        l = e.extend(
                          {
                            access_binary: u(
                              window.FileReader ||
                                (window.File && window.File.getAsDataURL)
                            ),
                            access_image_binary: function () {
                              return a.can("access_binary") && !!s.Image;
                            },
                            display_media: u(
                              (r.can("create_canvas") ||
                                r.can("use_data_uri_over32kb")) &&
                                n("moxie/image/Image")
                            ),
                            do_cors: u(
                              window.XMLHttpRequest &&
                                "withCredentials" in new XMLHttpRequest()
                            ),
                            drag_and_drop: u(
                              (function () {
                                var e = document.createElement("div");
                                return (
                                  ("draggable" in e ||
                                    ("ondragstart" in e && "ondrop" in e)) &&
                                  ("IE" !== r.browser ||
                                    r.verComp(r.version, 9, ">"))
                                );
                              })()
                            ),
                            filter_by_extension: u(
                              !(
                                ("Chrome" === r.browser &&
                                  r.verComp(r.version, 28, "<")) ||
                                ("IE" === r.browser &&
                                  r.verComp(r.version, 10, "<")) ||
                                ("Safari" === r.browser &&
                                  r.verComp(r.version, 7, "<")) ||
                                ("Firefox" === r.browser &&
                                  r.verComp(r.version, 37, "<"))
                              )
                            ),
                            return_response_headers: c,
                            return_response_type: function (e) {
                              return (
                                !("json" !== e || !window.JSON) ||
                                r.can("return_response_type", e)
                              );
                            },
                            return_status_code: c,
                            report_upload_progress: u(
                              window.XMLHttpRequest &&
                                new XMLHttpRequest().upload
                            ),
                            resize_image: function () {
                              return (
                                a.can("access_binary") && r.can("create_canvas")
                              );
                            },
                            select_file: function () {
                              return r.can("use_fileinput") && window.File;
                            },
                            select_folder: function () {
                              return (
                                a.can("select_file") &&
                                (("Chrome" === r.browser &&
                                  r.verComp(r.version, 21, ">=")) ||
                                  ("Firefox" === r.browser &&
                                    r.verComp(r.version, 42, ">=")))
                              );
                            },
                            select_multiple: function () {
                              return !(
                                !a.can("select_file") ||
                                ("Safari" === r.browser &&
                                  "Windows" === r.os) ||
                                ("iOS" === r.os &&
                                  r.verComp(r.osVersion, "7.0.0", ">") &&
                                  r.verComp(r.osVersion, "8.0.0", "<"))
                              );
                            },
                            send_binary_string: u(
                              window.XMLHttpRequest &&
                                (new XMLHttpRequest().sendAsBinary ||
                                  (window.Uint8Array && window.ArrayBuffer))
                            ),
                            send_custom_headers: u(window.XMLHttpRequest),
                            send_multipart: function () {
                              return (
                                !!(
                                  window.XMLHttpRequest &&
                                  new XMLHttpRequest().upload &&
                                  window.FormData
                                ) || a.can("send_binary_string")
                              );
                            },
                            slice_blob: u(
                              window.File &&
                                (File.prototype.mozSlice ||
                                  File.prototype.webkitSlice ||
                                  File.prototype.slice)
                            ),
                            stream_upload: function () {
                              return (
                                a.can("slice_blob") && a.can("send_multipart")
                              );
                            },
                            summon_file_dialog: function () {
                              return (
                                a.can("select_file") &&
                                !(
                                  ("Firefox" === r.browser &&
                                    r.verComp(r.version, 4, "<")) ||
                                  ("Opera" === r.browser &&
                                    r.verComp(r.version, 12, "<")) ||
                                  ("IE" === r.browser &&
                                    r.verComp(r.version, 10, "<"))
                                )
                              );
                            },
                            upload_filesize: c,
                            use_http_method: c,
                          },
                          arguments[2]
                        );
                      i.call(this, t, arguments[1] || o, l),
                        e.extend(this, {
                          init: function () {
                            this.trigger("Init");
                          },
                          destroy: (function (e) {
                            return function () {
                              e.call(a), (e = a = null);
                            };
                          })(this.destroy),
                        }),
                        e.extend(this.getShim(), s);
                    }),
                    s
                  );
                }
              ),
              i(
                "moxie/runtime/html5/file/Blob",
                ["moxie/runtime/html5/Runtime", "moxie/file/Blob"],
                function (e, t) {
                  return (e.Blob = function () {
                    function e(e, t, i) {
                      var n;
                      if (!window.File.prototype.slice)
                        return (n =
                          window.File.prototype.webkitSlice ||
                          window.File.prototype.mozSlice)
                          ? n.call(e, t, i)
                          : null;
                      try {
                        return e.slice(), e.slice(t, i);
                      } catch (n) {
                        return e.slice(t, i - t);
                      }
                    }
                    (this.slice = function () {
                      return new t(
                        this.getRuntime().uid,
                        e.apply(this, arguments)
                      );
                    }),
                      (this.destroy = function () {
                        this.getRuntime().getShim().removeInstance(this.uid);
                      });
                  });
                }
              ),
              i(
                "moxie/core/utils/Events",
                ["moxie/core/utils/Basic"],
                function (e) {
                  function t() {
                    this.returnValue = !1;
                  }
                  function i() {
                    this.cancelBubble = !0;
                  }
                  var n = {},
                    r = "moxie_" + e.guid(),
                    o = function (t, i, o) {
                      var s, a;
                      if (
                        ((i = i.toLowerCase()), t[r] && n[t[r]] && n[t[r]][i])
                      ) {
                        for (
                          var u = (s = n[t[r]][i]).length - 1;
                          u >= 0 &&
                          ((s[u].orig !== o && s[u].key !== o) ||
                            (t.removeEventListener
                              ? t.removeEventListener(i, s[u].func, !1)
                              : t.detachEvent &&
                                t.detachEvent("on" + i, s[u].func),
                            (s[u].orig = null),
                            (s[u].func = null),
                            s.splice(u, 1),
                            o === a));
                          u--
                        );
                        if (
                          (s.length || delete n[t[r]][i], e.isEmptyObj(n[t[r]]))
                        ) {
                          delete n[t[r]];
                          try {
                            delete t[r];
                          } catch (e) {
                            t[r] = a;
                          }
                        }
                      }
                    };
                  return {
                    addEvent: function (o, s, a, u) {
                      var c, l;
                      (s = s.toLowerCase()),
                        o.addEventListener
                          ? ((c = a), o.addEventListener(s, c, !1))
                          : o.attachEvent &&
                            ((c = function () {
                              var e = window.event;
                              e.target || (e.target = e.srcElement),
                                (e.preventDefault = t),
                                (e.stopPropagation = i),
                                a(e);
                            }),
                            o.attachEvent("on" + s, c)),
                        o[r] || (o[r] = e.guid()),
                        n.hasOwnProperty(o[r]) || (n[o[r]] = {}),
                        (l = n[o[r]]).hasOwnProperty(s) || (l[s] = []),
                        l[s].push({
                          func: c,
                          orig: a,
                          key: u,
                        });
                    },
                    removeEvent: o,
                    removeAllEvents: function (t, i) {
                      t &&
                        t[r] &&
                        e.each(n[t[r]], function (e, n) {
                          o(t, n, i);
                        });
                    },
                  };
                }
              ),
              i(
                "moxie/runtime/html5/file/FileInput",
                [
                  "moxie/runtime/html5/Runtime",
                  "moxie/file/File",
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Dom",
                  "moxie/core/utils/Events",
                  "moxie/core/utils/Mime",
                  "moxie/core/utils/Env",
                ],
                function (e, t, i, n, r, o, s) {
                  return (e.FileInput = function () {
                    var e, a;
                    i.extend(this, {
                      init: function (u) {
                        var c,
                          l,
                          d,
                          h,
                          f,
                          m,
                          p = this,
                          g = p.getRuntime();
                        (e = u),
                          (d = o.extList2mimes(
                            e.accept,
                            g.can("filter_by_extension")
                          )),
                          ((l = g.getShimContainer()).innerHTML =
                            '<input id="' +
                            g.uid +
                            '" type="file" style="font-size:999px;opacity:0;"' +
                            (e.multiple && g.can("select_multiple")
                              ? "multiple"
                              : "") +
                            (e.directory && g.can("select_folder")
                              ? "webkitdirectory directory"
                              : "") +
                            (d ? ' accept="' + d.join(",") + '"' : "") +
                            " />"),
                          (c = n.get(g.uid)),
                          i.extend(c.style, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }),
                          (h = n.get(e.browse_button)),
                          (a = n.getStyle(h, "z-index") || "auto"),
                          g.can("summon_file_dialog") &&
                            ("static" === n.getStyle(h, "position") &&
                              (h.style.position = "relative"),
                            r.addEvent(
                              h,
                              "click",
                              function (e) {
                                var t = n.get(g.uid);
                                t && !t.disabled && t.click(),
                                  e.preventDefault();
                              },
                              p.uid
                            ),
                            p.bind("Refresh", function () {
                              (f = parseInt(a, 10) || 1),
                                (n.get(e.browse_button).style.zIndex = f),
                                (this.getRuntime().getShimContainer().style.zIndex =
                                  f - 1);
                            })),
                          (m = g.can("summon_file_dialog") ? h : l),
                          r.addEvent(
                            m,
                            "mouseover",
                            function () {
                              p.trigger("mouseenter");
                            },
                            p.uid
                          ),
                          r.addEvent(
                            m,
                            "mouseout",
                            function () {
                              p.trigger("mouseleave");
                            },
                            p.uid
                          ),
                          r.addEvent(
                            m,
                            "mousedown",
                            function () {
                              p.trigger("mousedown");
                            },
                            p.uid
                          ),
                          r.addEvent(
                            n.get(e.container),
                            "mouseup",
                            function () {
                              p.trigger("mouseup");
                            },
                            p.uid
                          ),
                          (g.can("summon_file_dialog") ? c : h).setAttribute(
                            "tabindex",
                            -1
                          ),
                          (c.onchange = function n() {
                            if (
                              ((p.files = []),
                              i.each(this.files, function (i) {
                                var n = "";
                                return (
                                  !(!e.directory || "." != i.name) ||
                                  (i.webkitRelativePath &&
                                    (n =
                                      "/" +
                                      i.webkitRelativePath.replace(/^\//, "")),
                                  ((i = new t(g.uid, i)).relativePath = n),
                                  void p.files.push(i))
                                );
                              }),
                              "IE" !== s.browser && "IEMobile" !== s.browser)
                            )
                              this.value = "";
                            else {
                              var r = this.cloneNode(!0);
                              this.parentNode.replaceChild(r, this),
                                (r.onchange = n);
                            }
                            p.files.length && p.trigger("change");
                          }),
                          p.trigger({
                            type: "ready",
                            async: !0,
                          }),
                          (l = null);
                      },
                      setOption: function (e, t) {
                        var i = this.getRuntime(),
                          r = n.get(i.uid);
                        switch (e) {
                          case "accept":
                            if (t) {
                              var s =
                                t.mimes ||
                                o.extList2mimes(
                                  t,
                                  i.can("filter_by_extension")
                                );
                              r.setAttribute("accept", s.join(","));
                            } else r.removeAttribute("accept");
                            break;
                          case "directory":
                            t && i.can("select_folder")
                              ? (r.setAttribute("directory", ""),
                                r.setAttribute("webkitdirectory", ""))
                              : (r.removeAttribute("directory"),
                                r.removeAttribute("webkitdirectory"));
                            break;
                          case "multiple":
                            t && i.can("select_multiple")
                              ? r.setAttribute("multiple", "")
                              : r.removeAttribute("multiple");
                        }
                      },
                      disable: function (e) {
                        var t,
                          i = this.getRuntime();
                        (t = n.get(i.uid)) && (t.disabled = !!e);
                      },
                      destroy: function () {
                        var t = this.getRuntime(),
                          i = t.getShim(),
                          o = t.getShimContainer(),
                          s = e && n.get(e.container),
                          u = e && n.get(e.browse_button);
                        s && r.removeAllEvents(s, this.uid),
                          u &&
                            (r.removeAllEvents(u, this.uid),
                            (u.style.zIndex = a)),
                          o &&
                            (r.removeAllEvents(o, this.uid),
                            (o.innerHTML = "")),
                          i.removeInstance(this.uid),
                          (e = o = s = u = i = null);
                      },
                    });
                  });
                }
              ),
              i(
                "moxie/runtime/html5/file/FileDrop",
                [
                  "moxie/runtime/html5/Runtime",
                  "moxie/file/File",
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Dom",
                  "moxie/core/utils/Events",
                  "moxie/core/utils/Mime",
                ],
                function (e, t, i, n, r, o) {
                  return (e.FileDrop = function () {
                    function e(e) {
                      if (!e.dataTransfer || !e.dataTransfer.types) return !1;
                      var t = i.toArray(e.dataTransfer.types || []);
                      return (
                        -1 !== i.inArray("Files", t) ||
                        -1 !== i.inArray("public.file-url", t) ||
                        -1 !== i.inArray("application/x-moz-file", t)
                      );
                    }
                    function s(e, i) {
                      if (a(e)) {
                        var n = new t(l, e);
                        (n.relativePath = i || ""), d.push(n);
                      }
                    }
                    function a(e) {
                      if (!h.length) return !0;
                      var t = o.getFileExtension(e.name);
                      return !t || -1 !== i.inArray(t, h);
                    }
                    function u(e, t) {
                      var n = [];
                      i.each(e, function (e) {
                        n.push(function (t) {
                          !(function (e, t) {
                            e.isFile
                              ? e.file(
                                  function (i) {
                                    s(i, e.fullPath), t();
                                  },
                                  function () {
                                    t();
                                  }
                                )
                              : e.isDirectory
                              ? (function (e, t) {
                                  function i(e) {
                                    r.readEntries(function (t) {
                                      t.length
                                        ? ([].push.apply(n, t), i(e))
                                        : e();
                                    }, e);
                                  }
                                  var n = [],
                                    r = e.createReader();
                                  i(function () {
                                    u(n, t);
                                  });
                                })(e, t)
                              : t();
                          })(e, t);
                        });
                      }),
                        i.inSeries(n, function () {
                          t();
                        });
                    }
                    var c,
                      l,
                      d = [],
                      h = [];
                    i.extend(this, {
                      init: function (t) {
                        var n,
                          o = this;
                        (c = t),
                          (l = o.ruid),
                          (h = (function (e) {
                            for (var t = [], n = 0; n < e.length; n++)
                              [].push.apply(
                                t,
                                e[n].extensions.split(/\s*,\s*/)
                              );
                            return -1 === i.inArray("*", t) ? t : [];
                          })(c.accept)),
                          (n = c.container),
                          r.addEvent(
                            n,
                            "dragover",
                            function (t) {
                              e(t) &&
                                (t.preventDefault(),
                                (t.dataTransfer.dropEffect = "copy"));
                            },
                            o.uid
                          ),
                          r.addEvent(
                            n,
                            "drop",
                            function (t) {
                              e(t) &&
                                (t.preventDefault(),
                                (d = []),
                                t.dataTransfer.items &&
                                t.dataTransfer.items[0].webkitGetAsEntry
                                  ? (function (e, t) {
                                      var n = [];
                                      i.each(e, function (e) {
                                        var t = e.webkitGetAsEntry();
                                        t &&
                                          (t.isFile
                                            ? s(e.getAsFile(), t.fullPath)
                                            : n.push(t));
                                      }),
                                        n.length ? u(n, t) : t();
                                    })(t.dataTransfer.items, function () {
                                      (o.files = d), o.trigger("drop");
                                    })
                                  : (i.each(t.dataTransfer.files, function (e) {
                                      s(e);
                                    }),
                                    (o.files = d),
                                    o.trigger("drop")));
                            },
                            o.uid
                          ),
                          r.addEvent(
                            n,
                            "dragenter",
                            function () {
                              o.trigger("dragenter");
                            },
                            o.uid
                          ),
                          r.addEvent(
                            n,
                            "dragleave",
                            function () {
                              o.trigger("dragleave");
                            },
                            o.uid
                          );
                      },
                      destroy: function () {
                        r.removeAllEvents(c && n.get(c.container), this.uid),
                          (l = d = h = c = null),
                          this.getRuntime().getShim().removeInstance(this.uid);
                      },
                    });
                  });
                }
              ),
              i(
                "moxie/runtime/html5/file/FileReader",
                [
                  "moxie/runtime/html5/Runtime",
                  "moxie/core/utils/Encode",
                  "moxie/core/utils/Basic",
                ],
                function (e, t, i) {
                  return (e.FileReader = function () {
                    function e(e) {
                      return t.atob(e.substring(e.indexOf("base64,") + 7));
                    }
                    var n,
                      r = !1;
                    i.extend(this, {
                      read: function (t, o) {
                        var s = this;
                        (s.result = ""),
                          (n = new window.FileReader()).addEventListener(
                            "progress",
                            function (e) {
                              s.trigger(e);
                            }
                          ),
                          n.addEventListener("load", function (t) {
                            (s.result = r ? e(n.result) : n.result),
                              s.trigger(t);
                          }),
                          n.addEventListener("error", function (e) {
                            s.trigger(e, n.error);
                          }),
                          n.addEventListener("loadend", function (e) {
                            (n = null), s.trigger(e);
                          }),
                          "function" === i.typeOf(n[t])
                            ? ((r = !1), n[t](o.getSource()))
                            : "readAsBinaryString" === t &&
                              ((r = !0), n.readAsDataURL(o.getSource()));
                      },
                      abort: function () {
                        n && n.abort();
                      },
                      destroy: function () {
                        (n = null),
                          this.getRuntime().getShim().removeInstance(this.uid);
                      },
                    });
                  });
                }
              ),
              i(
                "moxie/runtime/html5/xhr/XMLHttpRequest",
                [
                  "moxie/runtime/html5/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Mime",
                  "moxie/core/utils/Url",
                  "moxie/file/File",
                  "moxie/file/Blob",
                  "moxie/xhr/FormData",
                  "moxie/core/Exceptions",
                  "moxie/core/utils/Env",
                ],
                function (e, t, i, n, r, o, s, a, u) {
                  return (e.XMLHttpRequest = function () {
                    function e(e, t) {
                      var i,
                        n,
                        r = this;
                      (i = t.getBlob().getSource()),
                        ((n = new window.FileReader()).onload = function () {
                          t.append(
                            t.getBlobName(),
                            new o(null, {
                              type: i.type,
                              data: n.result,
                            })
                          ),
                            h.send.call(r, e, t);
                        }),
                        n.readAsBinaryString(i);
                    }
                    function c(e) {
                      var t = "----moxieboundary" + new Date().getTime(),
                        i = "--",
                        n = "\r\n",
                        r = "";
                      if (!this.getRuntime().can("send_binary_string"))
                        throw new a.RuntimeError(
                          a.RuntimeError.NOT_SUPPORTED_ERR
                        );
                      return (
                        l.setRequestHeader(
                          "Content-Type",
                          "multipart/form-data; boundary=" + t
                        ),
                        e.each(function (e, s) {
                          r +=
                            e instanceof o
                              ? i +
                                t +
                                n +
                                'Content-Disposition: form-data; name="' +
                                s +
                                '"; filename="' +
                                unescape(encodeURIComponent(e.name || "blob")) +
                                '"\r\nContent-Type: ' +
                                (e.type || "application/octet-stream") +
                                n +
                                n +
                                e.getSource() +
                                n
                              : i +
                                t +
                                n +
                                'Content-Disposition: form-data; name="' +
                                s +
                                '"' +
                                n +
                                n +
                                unescape(encodeURIComponent(e)) +
                                n;
                        }),
                        (r += i + t + i + n)
                      );
                    }
                    var l,
                      d,
                      h = this;
                    t.extend(this, {
                      send: function (i, r) {
                        var a = this,
                          h =
                            "Mozilla" === u.browser &&
                            u.verComp(u.version, 4, ">=") &&
                            u.verComp(u.version, 7, "<"),
                          f = "Android Browser" === u.browser,
                          m = !1;
                        if (
                          ((d = i.url
                            .replace(/^.+?\/([\w\-\.]+)$/, "$1")
                            .toLowerCase()),
                          (l =
                            !window.XMLHttpRequest ||
                            ("IE" === u.browser && u.verComp(u.version, 8, "<"))
                              ? (function () {
                                  for (
                                    var e = [
                                        "Msxml2.XMLHTTP.6.0",
                                        "Microsoft.XMLHTTP",
                                      ],
                                      t = 0;
                                    t < e.length;
                                    t++
                                  )
                                    try {
                                      return new ActiveXObject(e[t]);
                                    } catch (e) {}
                                })()
                              : new window.XMLHttpRequest()),
                          l.open(i.method, i.url, i.async, i.user, i.password),
                          r instanceof o)
                        )
                          r.isDetached() && (m = !0), (r = r.getSource());
                        else if (r instanceof s) {
                          if (r.hasBlob())
                            if (r.getBlob().isDetached())
                              (r = c.call(a, r)), (m = !0);
                            else if (
                              (h || f) &&
                              "blob" === t.typeOf(r.getBlob().getSource()) &&
                              window.FileReader
                            )
                              return void e.call(a, i, r);
                          if (r instanceof s) {
                            var p = new window.FormData();
                            r.each(function (e, t) {
                              e instanceof o
                                ? p.append(t, e.getSource())
                                : p.append(t, e);
                            }),
                              (r = p);
                          }
                        }
                        l.upload
                          ? (i.withCredentials && (l.withCredentials = !0),
                            l.addEventListener("load", function (e) {
                              a.trigger(e);
                            }),
                            l.addEventListener("error", function (e) {
                              a.trigger(e);
                            }),
                            l.addEventListener("progress", function (e) {
                              a.trigger(e);
                            }),
                            l.upload.addEventListener("progress", function (e) {
                              a.trigger({
                                type: "UploadProgress",
                                loaded: e.loaded,
                                total: e.total,
                              });
                            }))
                          : (l.onreadystatechange = function () {
                              switch (l.readyState) {
                                case 1:
                                case 2:
                                  break;
                                case 3:
                                  var e, t;
                                  try {
                                    n.hasSameOrigin(i.url) &&
                                      (e =
                                        l.getResponseHeader("Content-Length") ||
                                        0),
                                      l.responseText &&
                                        (t = l.responseText.length);
                                  } catch (i) {
                                    e = t = 0;
                                  }
                                  a.trigger({
                                    type: "progress",
                                    lengthComputable: !!e,
                                    total: parseInt(e, 10),
                                    loaded: t,
                                  });
                                  break;
                                case 4:
                                  l.onreadystatechange = function () {};
                                  try {
                                    if (l.status >= 200 && l.status < 400) {
                                      a.trigger("load");
                                      break;
                                    }
                                  } catch (e) {}
                                  a.trigger("error");
                              }
                            }),
                          t.isEmptyObj(i.headers) ||
                            t.each(i.headers, function (e, t) {
                              l.setRequestHeader(t, e);
                            }),
                          "" !== i.responseType &&
                            "responseType" in l &&
                            (l.responseType =
                              "json" !== i.responseType ||
                              u.can("return_response_type", "json")
                                ? i.responseType
                                : "text"),
                          m
                            ? l.sendAsBinary
                              ? l.sendAsBinary(r)
                              : (function () {
                                  for (
                                    var e = new Uint8Array(r.length), t = 0;
                                    t < r.length;
                                    t++
                                  )
                                    e[t] = 255 & r.charCodeAt(t);
                                  l.send(e.buffer);
                                })()
                            : l.send(r),
                          a.trigger("loadstart");
                      },
                      getStatus: function () {
                        try {
                          if (l) return l.status;
                        } catch (e) {}
                        return 0;
                      },
                      getResponse: function (e) {
                        var t = this.getRuntime();
                        try {
                          switch (e) {
                            case "blob":
                              var n = new r(t.uid, l.response),
                                o = l.getResponseHeader("Content-Disposition");
                              if (o) {
                                var s = o.match(/filename=([\'\"'])([^\1]+)\1/);
                                s && (d = s[2]);
                              }
                              return (
                                (n.name = d),
                                n.type || (n.type = i.getFileMime(d)),
                                n
                              );
                            case "json":
                              return u.can("return_response_type", "json")
                                ? l.response
                                : 200 === l.status && window.JSON
                                ? JSON.parse(l.responseText)
                                : null;
                            case "document":
                              return (function (e) {
                                var t = e.responseXML,
                                  i = e.responseText;
                                return (
                                  "IE" === u.browser &&
                                    i &&
                                    t &&
                                    !t.documentElement &&
                                    /[^\/]+\/[^\+]+\+xml/.test(
                                      e.getResponseHeader("Content-Type")
                                    ) &&
                                    (((t = new window.ActiveXObject(
                                      "Microsoft.XMLDOM"
                                    )).async = !1),
                                    (t.validateOnParse = !1),
                                    t.loadXML(i)),
                                  t &&
                                  (("IE" === u.browser && 0 !== t.parseError) ||
                                    !t.documentElement ||
                                    "parsererror" === t.documentElement.tagName)
                                    ? null
                                    : t
                                );
                              })(l);
                            default:
                              return "" !== l.responseText
                                ? l.responseText
                                : null;
                          }
                        } catch (e) {
                          return null;
                        }
                      },
                      getAllResponseHeaders: function () {
                        try {
                          return l.getAllResponseHeaders();
                        } catch (e) {}
                        return "";
                      },
                      abort: function () {
                        l && l.abort();
                      },
                      destroy: function () {
                        (h = d = null),
                          this.getRuntime().getShim().removeInstance(this.uid);
                      },
                    });
                  });
                }
              ),
              i(
                "moxie/runtime/html5/utils/BinaryReader",
                ["moxie/core/utils/Basic"],
                function (e) {
                  function t(e) {
                    e instanceof ArrayBuffer
                      ? i.apply(this, arguments)
                      : n.apply(this, arguments);
                  }
                  function i(t) {
                    var i = new DataView(t);
                    e.extend(this, {
                      readByteAt: function (e) {
                        return i.getUint8(e);
                      },
                      writeByteAt: function (e, t) {
                        i.setUint8(e, t);
                      },
                      SEGMENT: function (e, n, r) {
                        switch (arguments.length) {
                          case 2:
                            return t.slice(e, e + n);
                          case 1:
                            return t.slice(e);
                          case 3:
                            if (
                              (null === r && (r = new ArrayBuffer()),
                              r instanceof ArrayBuffer)
                            ) {
                              var o = new Uint8Array(
                                this.length() - n + r.byteLength
                              );
                              e > 0 && o.set(new Uint8Array(t.slice(0, e)), 0),
                                o.set(new Uint8Array(r), e),
                                o.set(
                                  new Uint8Array(t.slice(e + n)),
                                  e + r.byteLength
                                ),
                                this.clear(),
                                (t = o.buffer),
                                (i = new DataView(t));
                              break;
                            }
                          default:
                            return t;
                        }
                      },
                      length: function () {
                        return t ? t.byteLength : 0;
                      },
                      clear: function () {
                        i = t = null;
                      },
                    });
                  }
                  function n(t) {
                    function i(e, i, n) {
                      (n = 3 === arguments.length ? n : t.length - i - 1),
                        (t = t.substr(0, i) + e + t.substr(n + i));
                    }
                    e.extend(this, {
                      readByteAt: function (e) {
                        return t.charCodeAt(e);
                      },
                      writeByteAt: function (e, t) {
                        i(String.fromCharCode(t), e, 1);
                      },
                      SEGMENT: function (e, n, r) {
                        switch (arguments.length) {
                          case 1:
                            return t.substr(e);
                          case 2:
                            return t.substr(e, n);
                          case 3:
                            i(null !== r ? r : "", e, n);
                            break;
                          default:
                            return t;
                        }
                      },
                      length: function () {
                        return t ? t.length : 0;
                      },
                      clear: function () {
                        t = null;
                      },
                    });
                  }
                  return (
                    e.extend(t.prototype, {
                      littleEndian: !1,
                      read: function (e, t) {
                        var i, n, r;
                        if (e + t > this.length())
                          throw new Error(
                            "You are trying to read outside the source boundaries."
                          );
                        for (
                          n = this.littleEndian ? 0 : -8 * (t - 1),
                            r = 0,
                            i = 0;
                          t > r;
                          r++
                        )
                          i |= this.readByteAt(e + r) << Math.abs(n + 8 * r);
                        return i;
                      },
                      write: function (e, t, i) {
                        var n, r;
                        if (e > this.length())
                          throw new Error(
                            "You are trying to write outside the source boundaries."
                          );
                        for (
                          n = this.littleEndian ? 0 : -8 * (i - 1), r = 0;
                          i > r;
                          r++
                        )
                          this.writeByteAt(
                            e + r,
                            255 & (t >> Math.abs(n + 8 * r))
                          );
                      },
                      BYTE: function (e) {
                        return this.read(e, 1);
                      },
                      SHORT: function (e) {
                        return this.read(e, 2);
                      },
                      LONG: function (e) {
                        return this.read(e, 4);
                      },
                      SLONG: function (e) {
                        var t = this.read(e, 4);
                        return t > 2147483647 ? t - 4294967296 : t;
                      },
                      CHAR: function (e) {
                        return String.fromCharCode(this.read(e, 1));
                      },
                      STRING: function (e, t) {
                        return this.asArray("CHAR", e, t).join("");
                      },
                      asArray: function (e, t, i) {
                        for (var n = [], r = 0; i > r; r++)
                          n[r] = this[e](t + r);
                        return n;
                      },
                    }),
                    t
                  );
                }
              ),
              i(
                "moxie/runtime/html5/image/JPEGHeaders",
                [
                  "moxie/runtime/html5/utils/BinaryReader",
                  "moxie/core/Exceptions",
                ],
                function (e, t) {
                  return function i(n) {
                    var r,
                      o,
                      s,
                      a = [],
                      u = 0;
                    if (65496 !== (r = new e(n)).SHORT(0))
                      throw (
                        (r.clear(), new t.ImageError(t.ImageError.WRONG_FORMAT))
                      );
                    for (o = 2; o <= r.length(); )
                      if ((s = r.SHORT(o)) >= 65488 && 65495 >= s) o += 2;
                      else {
                        if (65498 === s || 65497 === s) break;
                        (u = r.SHORT(o + 2) + 2),
                          s >= 65505 &&
                            65519 >= s &&
                            a.push({
                              hex: s,
                              name: "APP" + (15 & s),
                              start: o,
                              length: u,
                              segment: r.SEGMENT(o, u),
                            }),
                          (o += u);
                      }
                    return (
                      r.clear(),
                      {
                        headers: a,
                        restore: function (t) {
                          var i, n, r;
                          for (
                            r = new e(t),
                              o = 65504 == r.SHORT(2) ? 4 + r.SHORT(4) : 2,
                              n = 0,
                              i = a.length;
                            i > n;
                            n++
                          )
                            r.SEGMENT(o, 0, a[n].segment), (o += a[n].length);
                          return (t = r.SEGMENT()), r.clear(), t;
                        },
                        strip: function (t) {
                          var n, r, o, s;
                          for (
                            r = (o = new i(t)).headers,
                              o.purge(),
                              n = new e(t),
                              s = r.length;
                            s--;

                          )
                            n.SEGMENT(r[s].start, r[s].length, "");
                          return (t = n.SEGMENT()), n.clear(), t;
                        },
                        get: function (e) {
                          for (var t = [], i = 0, n = a.length; n > i; i++)
                            a[i].name === e.toUpperCase() &&
                              t.push(a[i].segment);
                          return t;
                        },
                        set: function (e, t) {
                          var i,
                            n,
                            r,
                            o = [];
                          for (
                            "string" == typeof t ? o.push(t) : (o = t),
                              i = n = 0,
                              r = a.length;
                            r > i &&
                            (a[i].name === e.toUpperCase() &&
                              ((a[i].segment = o[n]),
                              (a[i].length = o[n].length),
                              n++),
                            !(n >= o.length));
                            i++
                          );
                        },
                        purge: function () {
                          this.headers = a = [];
                        },
                      }
                    );
                  };
                }
              ),
              i(
                "moxie/runtime/html5/image/ExifParser",
                [
                  "moxie/core/utils/Basic",
                  "moxie/runtime/html5/utils/BinaryReader",
                  "moxie/core/Exceptions",
                ],
                function (e, i, n) {
                  function r(o) {
                    function s(i, r) {
                      var o,
                        s,
                        a,
                        u,
                        c,
                        h,
                        f,
                        m,
                        p = this,
                        g = [],
                        v = {},
                        x = {
                          1: "BYTE",
                          7: "UNDEFINED",
                          2: "ASCII",
                          3: "SHORT",
                          4: "LONG",
                          5: "RATIONAL",
                          9: "SLONG",
                          10: "SRATIONAL",
                        },
                        y = {
                          BYTE: 1,
                          UNDEFINED: 1,
                          ASCII: 1,
                          SHORT: 2,
                          LONG: 4,
                          RATIONAL: 8,
                          SLONG: 4,
                          SRATIONAL: 8,
                        };
                      for (o = p.SHORT(i), s = 0; o > s; s++)
                        if (
                          ((g = []),
                          (f = i + 2 + 12 * s),
                          (a = r[p.SHORT(f)]) !== t)
                        ) {
                          if (
                            ((u = x[p.SHORT((f += 2))]),
                            (c = p.LONG((f += 2))),
                            !(h = y[u]))
                          )
                            throw new n.ImageError(
                              n.ImageError.INVALID_META_ERR
                            );
                          if (
                            ((f += 4),
                            h * c > 4 && (f = p.LONG(f) + d.tiffHeader),
                            f + h * c >= this.length())
                          )
                            throw new n.ImageError(
                              n.ImageError.INVALID_META_ERR
                            );
                          "ASCII" !== u
                            ? ((g = p.asArray(u, f, c)),
                              (m = 1 == c ? g[0] : g),
                              (v[a] =
                                l.hasOwnProperty(a) && "object" != typeof m
                                  ? l[a][m]
                                  : m))
                            : (v[a] = e.trim(
                                p.STRING(f, c).replace(/\0$/, "")
                              ));
                        }
                      return v;
                    }
                    function a(e, t, i) {
                      var n,
                        r,
                        o,
                        s = 0;
                      if ("string" == typeof t) {
                        var a = c[e.toLowerCase()];
                        for (var u in a)
                          if (a[u] === t) {
                            t = u;
                            break;
                          }
                      }
                      (n = d[e.toLowerCase() + "IFD"]), (r = this.SHORT(n));
                      for (var l = 0; r > l; l++)
                        if (((o = n + 12 * l + 2), this.SHORT(o) == t)) {
                          s = o + 8;
                          break;
                        }
                      if (!s) return !1;
                      try {
                        this.write(s, i, 4);
                      } catch (e) {
                        return !1;
                      }
                      return !0;
                    }
                    var u, c, l, d, h, f;
                    if (
                      (i.call(this, o),
                      (c = {
                        tiff: {
                          274: "Orientation",
                          270: "ImageDescription",
                          271: "Make",
                          272: "Model",
                          305: "Software",
                          34665: "ExifIFDPointer",
                          34853: "GPSInfoIFDPointer",
                        },
                        exif: {
                          36864: "ExifVersion",
                          40961: "ColorSpace",
                          40962: "PixelXDimension",
                          40963: "PixelYDimension",
                          36867: "DateTimeOriginal",
                          33434: "ExposureTime",
                          33437: "FNumber",
                          34855: "ISOSpeedRatings",
                          37377: "ShutterSpeedValue",
                          37378: "ApertureValue",
                          37383: "MeteringMode",
                          37384: "LightSource",
                          37385: "Flash",
                          37386: "FocalLength",
                          41986: "ExposureMode",
                          41987: "WhiteBalance",
                          41990: "SceneCaptureType",
                          41988: "DigitalZoomRatio",
                          41992: "Contrast",
                          41993: "Saturation",
                          41994: "Sharpness",
                        },
                        gps: {
                          0: "GPSVersionID",
                          1: "GPSLatitudeRef",
                          2: "GPSLatitude",
                          3: "GPSLongitudeRef",
                          4: "GPSLongitude",
                        },
                        thumb: {
                          513: "JPEGInterchangeFormat",
                          514: "JPEGInterchangeFormatLength",
                        },
                      }),
                      (l = {
                        ColorSpace: {
                          1: "sRGB",
                          0: "Uncalibrated",
                        },
                        MeteringMode: {
                          0: "Unknown",
                          1: "Average",
                          2: "CenterWeightedAverage",
                          3: "Spot",
                          4: "MultiSpot",
                          5: "Pattern",
                          6: "Partial",
                          255: "Other",
                        },
                        LightSource: {
                          1: "Daylight",
                          2: "Fliorescent",
                          3: "Tungsten",
                          4: "Flash",
                          9: "Fine weather",
                          10: "Cloudy weather",
                          11: "Shade",
                          12: "Daylight fluorescent (D 5700 - 7100K)",
                          13: "Day white fluorescent (N 4600 -5400K)",
                          14: "Cool white fluorescent (W 3900 - 4500K)",
                          15: "White fluorescent (WW 3200 - 3700K)",
                          17: "Standard light A",
                          18: "Standard light B",
                          19: "Standard light C",
                          20: "D55",
                          21: "D65",
                          22: "D75",
                          23: "D50",
                          24: "ISO studio tungsten",
                          255: "Other",
                        },
                        Flash: {
                          0: "Flash did not fire",
                          1: "Flash fired",
                          5: "Strobe return light not detected",
                          7: "Strobe return light detected",
                          9: "Flash fired, compulsory flash mode",
                          13: "Flash fired, compulsory flash mode, return light not detected",
                          15: "Flash fired, compulsory flash mode, return light detected",
                          16: "Flash did not fire, compulsory flash mode",
                          24: "Flash did not fire, auto mode",
                          25: "Flash fired, auto mode",
                          29: "Flash fired, auto mode, return light not detected",
                          31: "Flash fired, auto mode, return light detected",
                          32: "No flash function",
                          65: "Flash fired, red-eye reduction mode",
                          69: "Flash fired, red-eye reduction mode, return light not detected",
                          71: "Flash fired, red-eye reduction mode, return light detected",
                          73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                          77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                          79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                          89: "Flash fired, auto mode, red-eye reduction mode",
                          93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                          95: "Flash fired, auto mode, return light detected, red-eye reduction mode",
                        },
                        ExposureMode: {
                          0: "Auto exposure",
                          1: "Manual exposure",
                          2: "Auto bracket",
                        },
                        WhiteBalance: {
                          0: "Auto white balance",
                          1: "Manual white balance",
                        },
                        SceneCaptureType: {
                          0: "Standard",
                          1: "Landscape",
                          2: "Portrait",
                          3: "Night scene",
                        },
                        Contrast: {
                          0: "Normal",
                          1: "Soft",
                          2: "Hard",
                        },
                        Saturation: {
                          0: "Normal",
                          1: "Low saturation",
                          2: "High saturation",
                        },
                        Sharpness: {
                          0: "Normal",
                          1: "Soft",
                          2: "Hard",
                        },
                        GPSLatitudeRef: {
                          N: "North latitude",
                          S: "South latitude",
                        },
                        GPSLongitudeRef: {
                          E: "East longitude",
                          W: "West longitude",
                        },
                      }),
                      (h = (d = {
                        tiffHeader: 10,
                      }).tiffHeader),
                      (u = {
                        clear: this.clear,
                      }),
                      e.extend(this, {
                        read: function () {
                          try {
                            return r.prototype.read.apply(this, arguments);
                          } catch (e) {
                            throw new n.ImageError(
                              n.ImageError.INVALID_META_ERR
                            );
                          }
                        },
                        write: function () {
                          try {
                            return r.prototype.write.apply(this, arguments);
                          } catch (e) {
                            throw new n.ImageError(
                              n.ImageError.INVALID_META_ERR
                            );
                          }
                        },
                        UNDEFINED: function () {
                          return this.BYTE.apply(this, arguments);
                        },
                        RATIONAL: function (e) {
                          return this.LONG(e) / this.LONG(e + 4);
                        },
                        SRATIONAL: function (e) {
                          return this.SLONG(e) / this.SLONG(e + 4);
                        },
                        ASCII: function (e) {
                          return this.CHAR(e);
                        },
                        TIFF: function () {
                          return f || null;
                        },
                        EXIF: function () {
                          var t = null;
                          if (d.exifIFD) {
                            try {
                              t = s.call(this, d.exifIFD, c.exif);
                            } catch (e) {
                              return null;
                            }
                            if (
                              t.ExifVersion &&
                              "array" === e.typeOf(t.ExifVersion)
                            ) {
                              for (
                                var i = 0, n = "";
                                i < t.ExifVersion.length;
                                i++
                              )
                                n += String.fromCharCode(t.ExifVersion[i]);
                              t.ExifVersion = n;
                            }
                          }
                          return t;
                        },
                        GPS: function () {
                          var t = null;
                          if (d.gpsIFD) {
                            try {
                              t = s.call(this, d.gpsIFD, c.gps);
                            } catch (e) {
                              return null;
                            }
                            t.GPSVersionID &&
                              "array" === e.typeOf(t.GPSVersionID) &&
                              (t.GPSVersionID = t.GPSVersionID.join("."));
                          }
                          return t;
                        },
                        thumb: function () {
                          if (d.IFD1)
                            try {
                              var e = s.call(this, d.IFD1, c.thumb);
                              if ("JPEGInterchangeFormat" in e)
                                return this.SEGMENT(
                                  d.tiffHeader + e.JPEGInterchangeFormat,
                                  e.JPEGInterchangeFormatLength
                                );
                            } catch (e) {}
                          return null;
                        },
                        setExif: function (e, t) {
                          return (
                            ("PixelXDimension" === e ||
                              "PixelYDimension" === e) &&
                            a.call(this, "exif", e, t)
                          );
                        },
                        clear: function () {
                          u.clear(), (o = c = l = f = d = u = null);
                        },
                      }),
                      65505 !== this.SHORT(0) ||
                        "EXIF\0" !== this.STRING(4, 5).toUpperCase())
                    )
                      throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                    if (
                      ((this.littleEndian = 18761 == this.SHORT(h)),
                      42 !== this.SHORT((h += 2)))
                    )
                      throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                    (d.IFD0 = d.tiffHeader + this.LONG((h += 2))),
                      "ExifIFDPointer" in (f = s.call(this, d.IFD0, c.tiff)) &&
                        ((d.exifIFD = d.tiffHeader + f.ExifIFDPointer),
                        delete f.ExifIFDPointer),
                      "GPSInfoIFDPointer" in f &&
                        ((d.gpsIFD = d.tiffHeader + f.GPSInfoIFDPointer),
                        delete f.GPSInfoIFDPointer),
                      e.isEmptyObj(f) && (f = null);
                    var m = this.LONG(d.IFD0 + 12 * this.SHORT(d.IFD0) + 2);
                    m && (d.IFD1 = d.tiffHeader + m);
                  }
                  return (r.prototype = i.prototype), r;
                }
              ),
              i(
                "moxie/runtime/html5/image/JPEG",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/Exceptions",
                  "moxie/runtime/html5/image/JPEGHeaders",
                  "moxie/runtime/html5/utils/BinaryReader",
                  "moxie/runtime/html5/image/ExifParser",
                ],
                function (e, t, i, n, r) {
                  return function (o) {
                    function s(e) {
                      var t,
                        i,
                        n = 0;
                      for (e || (e = u); n <= e.length(); ) {
                        if ((t = e.SHORT((n += 2))) >= 65472 && 65475 >= t)
                          return (
                            (n += 5),
                            {
                              height: e.SHORT(n),
                              width: e.SHORT((n += 2)),
                            }
                          );
                        (i = e.SHORT((n += 2))), (n += i - 2);
                      }
                      return null;
                    }
                    function a() {
                      l &&
                        c &&
                        u &&
                        (l.clear(),
                        c.purge(),
                        u.clear(),
                        (d = c = l = u = null));
                    }
                    var u, c, l, d;
                    if (65496 !== (u = new n(o)).SHORT(0))
                      throw new t.ImageError(t.ImageError.WRONG_FORMAT);
                    c = new i(o);
                    try {
                      l = new r(c.get("app1")[0]);
                    } catch (e) {}
                    (d = s.call(this)),
                      e.extend(this, {
                        type: "image/jpeg",
                        size: u.length(),
                        width: (d && d.width) || 0,
                        height: (d && d.height) || 0,
                        setExif: function (t, i) {
                          return (
                            !!l &&
                            ("object" === e.typeOf(t)
                              ? e.each(t, function (e, t) {
                                  l.setExif(t, e);
                                })
                              : l.setExif(t, i),
                            void c.set("app1", l.SEGMENT()))
                          );
                        },
                        writeHeaders: function () {
                          return arguments.length
                            ? c.restore(arguments[0])
                            : c.restore(o);
                        },
                        stripHeaders: function (e) {
                          return c.strip(e);
                        },
                        purge: function () {
                          a.call(this);
                        },
                      }),
                      l &&
                        (this.meta = {
                          tiff: l.TIFF(),
                          exif: l.EXIF(),
                          gps: l.GPS(),
                          thumb: (function () {
                            var e,
                              t,
                              i = l.thumb();
                            return i && ((t = s((e = new n(i)))), e.clear(), t)
                              ? ((t.data = i), t)
                              : null;
                          })(),
                        });
                  };
                }
              ),
              i(
                "moxie/runtime/html5/image/PNG",
                [
                  "moxie/core/Exceptions",
                  "moxie/core/utils/Basic",
                  "moxie/runtime/html5/utils/BinaryReader",
                ],
                function (e, t, i) {
                  return function (n) {
                    function r() {
                      s && (s.clear(), (n = a = s = null));
                    }
                    function o(e) {
                      var t;
                      return {
                        length: (t = s.LONG(e)),
                        type: s.STRING((e += 4), 4),
                        start: (e += 4),
                        CRC: s.LONG(e + t),
                      };
                    }
                    var s, a;
                    (s = new i(n)),
                      (function () {
                        var t = 0,
                          i = 0,
                          n = [35152, 20039, 3338, 6666];
                        for (i = 0; i < n.length; i++, t += 2)
                          if (n[i] != s.SHORT(t))
                            throw new e.ImageError(e.ImageError.WRONG_FORMAT);
                      })(),
                      (a = function () {
                        var e, t;
                        return "IHDR" == (e = o.call(this, 8)).type
                          ? ((t = e.start),
                            {
                              width: s.LONG(t),
                              height: s.LONG((t += 4)),
                            })
                          : null;
                      }.call(this)),
                      t.extend(this, {
                        type: "image/png",
                        size: s.length(),
                        width: a.width,
                        height: a.height,
                        purge: function () {
                          r.call(this);
                        },
                      }),
                      r.call(this);
                  };
                }
              ),
              i(
                "moxie/runtime/html5/image/ImageInfo",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/Exceptions",
                  "moxie/runtime/html5/image/JPEG",
                  "moxie/runtime/html5/image/PNG",
                ],
                function (e, t, i, n) {
                  return function (r) {
                    var o,
                      s = [i, n];
                    (o = (function () {
                      for (var e = 0; e < s.length; e++)
                        try {
                          return new s[e](r);
                        } catch (e) {}
                      throw new t.ImageError(t.ImageError.WRONG_FORMAT);
                    })()),
                      e.extend(this, {
                        type: "",
                        size: 0,
                        width: 0,
                        height: 0,
                        setExif: function () {},
                        writeHeaders: function (e) {
                          return e;
                        },
                        stripHeaders: function (e) {
                          return e;
                        },
                        purge: function () {
                          r = null;
                        },
                      }),
                      e.extend(this, o),
                      (this.purge = function () {
                        o.purge(), (o = null);
                      });
                  };
                }
              ),
              i("moxie/runtime/html5/image/ResizerCanvas", [], function () {
                return {
                  scale: function e(t, i, n) {
                    var r = t.width > t.height ? "width" : "height",
                      o = Math.round(t[r] * i),
                      s = !1;
                    "nearest" !== n &&
                      (0.5 > i || i > 2) &&
                      ((i = 0.5 > i ? 0.5 : 2), (s = !0));
                    var a = (function (e, t) {
                      var i = e.width,
                        n = e.height,
                        r = Math.round(i * t),
                        o = Math.round(n * t),
                        s = document.createElement("canvas");
                      return (
                        (s.width = r),
                        (s.height = o),
                        s.getContext("2d").drawImage(e, 0, 0, i, n, 0, 0, r, o),
                        (e = null),
                        s
                      );
                    })(t, i);
                    return s ? e(a, o / a[r], n) : a;
                  },
                };
              }),
              i(
                "moxie/runtime/html5/image/Image",
                [
                  "moxie/runtime/html5/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/core/Exceptions",
                  "moxie/core/utils/Encode",
                  "moxie/file/Blob",
                  "moxie/file/File",
                  "moxie/runtime/html5/image/ImageInfo",
                  "moxie/runtime/html5/image/ResizerCanvas",
                  "moxie/core/utils/Mime",
                  "moxie/core/utils/Env",
                ],
                function (e, t, i, n, r, o, s, a, u) {
                  return (e.Image = function () {
                    function e() {
                      if (!v && !p)
                        throw new i.ImageError(
                          i.DOMException.INVALID_STATE_ERR
                        );
                      return v || p;
                    }
                    function c() {
                      var t = e();
                      return "canvas" == t.nodeName.toLowerCase()
                        ? t
                        : (((v = document.createElement("canvas")).width =
                            t.width),
                          (v.height = t.height),
                          v.getContext("2d").drawImage(t, 0, 0),
                          v);
                    }
                    function l(e) {
                      return n.atob(e.substring(e.indexOf("base64,") + 7));
                    }
                    function d(e) {
                      var t = this;
                      ((p = new Image()).onerror = function () {
                        m.call(this),
                          t.trigger("error", i.ImageError.WRONG_FORMAT);
                      }),
                        (p.onload = function () {
                          t.trigger("load");
                        }),
                        (p.src =
                          "data:" == e.substr(0, 5)
                            ? e
                            : (function (e, t) {
                                return (
                                  "data:" + (t || "") + ";base64," + n.btoa(e)
                                );
                              })(e, y.type));
                    }
                    function h(e, t) {
                      var n,
                        r = this;
                      return window.FileReader
                        ? (((n = new FileReader()).onload = function () {
                            t.call(r, this.result);
                          }),
                          (n.onerror = function () {
                            r.trigger("error", i.ImageError.WRONG_FORMAT);
                          }),
                          void n.readAsDataURL(e))
                        : t.call(this, e.getAsDataURL());
                    }
                    function f(e, i) {
                      var n = Math.PI / 180,
                        r = document.createElement("canvas"),
                        o = r.getContext("2d"),
                        s = e.width,
                        a = e.height;
                      switch (
                        (t.inArray(i, [5, 6, 7, 8]) > -1
                          ? ((r.width = a), (r.height = s))
                          : ((r.width = s), (r.height = a)),
                        i)
                      ) {
                        case 2:
                          o.translate(s, 0), o.scale(-1, 1);
                          break;
                        case 3:
                          o.translate(s, a), o.rotate(180 * n);
                          break;
                        case 4:
                          o.translate(0, a), o.scale(1, -1);
                          break;
                        case 5:
                          o.rotate(90 * n), o.scale(1, -1);
                          break;
                        case 6:
                          o.rotate(90 * n), o.translate(0, -a);
                          break;
                        case 7:
                          o.rotate(90 * n), o.translate(s, -a), o.scale(-1, 1);
                          break;
                        case 8:
                          o.rotate(-90 * n), o.translate(-s, 0);
                      }
                      return o.drawImage(e, 0, 0, s, a), r;
                    }
                    function m() {
                      g && (g.purge(), (g = null)),
                        (x = p = v = y = null),
                        (E = !1);
                    }
                    var p,
                      g,
                      v,
                      x,
                      y,
                      w = this,
                      E = !1,
                      _ = !0;
                    t.extend(this, {
                      loadFromBlob: function (e) {
                        var t = this.getRuntime(),
                          n = !(arguments.length > 1) || arguments[1];
                        if (!t.can("access_binary"))
                          throw new i.RuntimeError(
                            i.RuntimeError.NOT_SUPPORTED_ERR
                          );
                        return (
                          (y = e),
                          e.isDetached()
                            ? ((x = e.getSource()), void d.call(this, x))
                            : void h.call(this, e.getSource(), function (e) {
                                n && (x = l(e)), d.call(this, e);
                              })
                        );
                      },
                      loadFromImage: function (e, t) {
                        (this.meta = e.meta),
                          (y = new o(null, {
                            name: e.name,
                            size: e.size,
                            type: e.type,
                          })),
                          d.call(
                            this,
                            t ? (x = e.getAsBinaryString()) : e.getAsDataURL()
                          );
                      },
                      getInfo: function () {
                        var t,
                          i = this.getRuntime();
                        return (
                          !g &&
                            x &&
                            i.can("access_image_binary") &&
                            (g = new s(x)),
                          (t = {
                            width: e().width || 0,
                            height: e().height || 0,
                            type: y.type || u.getFileMime(y.name),
                            size: (x && x.length) || y.size || 0,
                            name: y.name || "",
                            meta: null,
                          }),
                          _ &&
                            ((t.meta = (g && g.meta) || this.meta || {}),
                            !t.meta ||
                              !t.meta.thumb ||
                              t.meta.thumb.data instanceof r ||
                              (t.meta.thumb.data = new r(null, {
                                type: "image/jpeg",
                                data: t.meta.thumb.data,
                              }))),
                          t
                        );
                      },
                      resize: function (t, i, n) {
                        var r = document.createElement("canvas");
                        if (
                          ((r.width = t.width),
                          (r.height = t.height),
                          r
                            .getContext("2d")
                            .drawImage(
                              e(),
                              t.x,
                              t.y,
                              t.width,
                              t.height,
                              0,
                              0,
                              r.width,
                              r.height
                            ),
                          (v = a.scale(r, i)),
                          !(_ = n.preserveHeaders))
                        ) {
                          var o =
                            (this.meta &&
                              this.meta.tiff &&
                              this.meta.tiff.Orientation) ||
                            1;
                          v = f(v, o);
                        }
                        (this.width = v.width),
                          (this.height = v.height),
                          (E = !0),
                          this.trigger("Resize");
                      },
                      getAsCanvas: function () {
                        return v || (v = c()), (v.id = this.uid + "_canvas"), v;
                      },
                      getAsBlob: function (e, t) {
                        return e !== this.type
                          ? ((E = !0),
                            new o(null, {
                              name: y.name || "",
                              type: e,
                              data: w.getAsDataURL(e, t),
                            }))
                          : new o(null, {
                              name: y.name || "",
                              type: e,
                              data: w.getAsBinaryString(e, t),
                            });
                      },
                      getAsDataURL: function (e) {
                        var t = arguments[1] || 90;
                        if (!E) return p.src;
                        if ((c(), "image/jpeg" !== e))
                          return v.toDataURL("image/png");
                        try {
                          return v.toDataURL("image/jpeg", t / 100);
                        } catch (e) {
                          return v.toDataURL("image/jpeg");
                        }
                      },
                      getAsBinaryString: function (e, t) {
                        if (!E) return x || (x = l(w.getAsDataURL(e, t))), x;
                        if ("image/jpeg" !== e) x = l(w.getAsDataURL(e, t));
                        else {
                          var i;
                          t || (t = 90), c();
                          try {
                            i = v.toDataURL("image/jpeg", t / 100);
                          } catch (e) {
                            i = v.toDataURL("image/jpeg");
                          }
                          (x = l(i)),
                            g &&
                              ((x = g.stripHeaders(x)),
                              _ &&
                                (g.meta &&
                                  g.meta.exif &&
                                  g.setExif({
                                    PixelXDimension: this.width,
                                    PixelYDimension: this.height,
                                  }),
                                (x = g.writeHeaders(x))),
                              g.purge(),
                              (g = null));
                        }
                        return (E = !1), x;
                      },
                      destroy: function () {
                        (w = null),
                          m.call(this),
                          this.getRuntime().getShim().removeInstance(this.uid);
                      },
                    });
                  });
                }
              ),
              i(
                "moxie/runtime/flash/Runtime",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Env",
                  "moxie/core/utils/Dom",
                  "moxie/core/Exceptions",
                  "moxie/runtime/Runtime",
                ],
                function (e, t, i, r, o) {
                  function s(e) {
                    var n = i.get(e);
                    n &&
                      "OBJECT" == n.nodeName &&
                      ("IE" === t.browser
                        ? ((n.style.display = "none"),
                          (function t() {
                            4 == n.readyState
                              ? (function (e) {
                                  var t = i.get(e);
                                  if (t) {
                                    for (var n in t)
                                      "function" == typeof t[n] &&
                                        (t[n] = null);
                                    t.parentNode.removeChild(t);
                                  }
                                })(e)
                              : setTimeout(t, 10);
                          })())
                        : n.parentNode.removeChild(n));
                  }
                  var a = "flash",
                    u = {};
                  return (
                    o.addConstructor(a, function (c) {
                      var l,
                        d = this;
                      (c = e.extend(
                        {
                          swf_url: t.swf_url,
                        },
                        c
                      )),
                        o.call(
                          this,
                          c,
                          a,
                          {
                            access_binary: function (e) {
                              return e && "browser" === d.mode;
                            },
                            access_image_binary: function (e) {
                              return e && "browser" === d.mode;
                            },
                            display_media: o.capTest(n("moxie/image/Image")),
                            do_cors: o.capTrue,
                            drag_and_drop: !1,
                            report_upload_progress: function () {
                              return "client" === d.mode;
                            },
                            resize_image: o.capTrue,
                            return_response_headers: !1,
                            return_response_type: function (t) {
                              return (
                                !("json" !== t || !window.JSON) ||
                                !e.arrayDiff(t, ["", "text", "document"]) ||
                                "browser" === d.mode
                              );
                            },
                            return_status_code: function (t) {
                              return (
                                "browser" === d.mode ||
                                !e.arrayDiff(t, [200, 404])
                              );
                            },
                            select_file: o.capTrue,
                            select_multiple: o.capTrue,
                            send_binary_string: function (e) {
                              return e && "browser" === d.mode;
                            },
                            send_browser_cookies: function (e) {
                              return e && "browser" === d.mode;
                            },
                            send_custom_headers: function (e) {
                              return e && "browser" === d.mode;
                            },
                            send_multipart: o.capTrue,
                            slice_blob: function (e) {
                              return e && "browser" === d.mode;
                            },
                            stream_upload: function (e) {
                              return e && "browser" === d.mode;
                            },
                            summon_file_dialog: !1,
                            upload_filesize: function (t) {
                              return (
                                e.parseSizeStr(t) <= 2097152 ||
                                "client" === d.mode
                              );
                            },
                            use_http_method: function (t) {
                              return !e.arrayDiff(t, ["GET", "POST"]);
                            },
                          },
                          {
                            access_binary: function (e) {
                              return e ? "browser" : "client";
                            },
                            access_image_binary: function (e) {
                              return e ? "browser" : "client";
                            },
                            report_upload_progress: function (e) {
                              return e ? "browser" : "client";
                            },
                            return_response_type: function (t) {
                              return e.arrayDiff(t, [
                                "",
                                "text",
                                "json",
                                "document",
                              ])
                                ? "browser"
                                : ["client", "browser"];
                            },
                            return_status_code: function (t) {
                              return e.arrayDiff(t, [200, 404])
                                ? "browser"
                                : ["client", "browser"];
                            },
                            send_binary_string: function (e) {
                              return e ? "browser" : "client";
                            },
                            send_browser_cookies: function (e) {
                              return e ? "browser" : "client";
                            },
                            send_custom_headers: function (e) {
                              return e ? "browser" : "client";
                            },
                            slice_blob: function (e) {
                              return e ? "browser" : "client";
                            },
                            stream_upload: function (e) {
                              return e ? "client" : "browser";
                            },
                            upload_filesize: function (t) {
                              return e.parseSizeStr(t) >= 2097152
                                ? "client"
                                : "browser";
                            },
                          },
                          "client"
                        ),
                        (function () {
                          var e;
                          try {
                            e = (e = navigator.plugins["Shockwave Flash"])
                              .description;
                          } catch (t) {
                            try {
                              e = new ActiveXObject(
                                "ShockwaveFlash.ShockwaveFlash"
                              ).GetVariable("$version");
                            } catch (t) {
                              e = "0.0";
                            }
                          }
                          return (
                            (e = e.match(/\d+/g)), parseFloat(e[0] + "." + e[1])
                          );
                        })() < 11.3 && (this.mode = !1),
                        e.extend(
                          this,
                          {
                            getShim: function () {
                              return i.get(this.uid);
                            },
                            shimExec: function (e, t) {
                              var i = [].slice.call(arguments, 2);
                              return d.getShim().exec(this.uid, e, t, i);
                            },
                            init: function () {
                              var i, n, s;
                              (s = this.getShimContainer()),
                                e.extend(s.style, {
                                  position: "absolute",
                                  top: "-8px",
                                  left: "-8px",
                                  width: "9px",
                                  height: "9px",
                                  overflow: "hidden",
                                }),
                                (i =
                                  '<object id="' +
                                  this.uid +
                                  '" type="application/x-shockwave-flash" data="' +
                                  c.swf_url +
                                  '" '),
                                "IE" === t.browser &&
                                  (i +=
                                    'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),
                                (i +=
                                  'width="100%" height="100%" style="outline:0"><param name="movie" value="' +
                                  c.swf_url +
                                  '" /><param name="flashvars" value="uid=' +
                                  escape(this.uid) +
                                  "&target=" +
                                  o.getGlobalEventTarget() +
                                  '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>'),
                                "IE" === t.browser
                                  ? ((n = document.createElement("div")),
                                    s.appendChild(n),
                                    (n.outerHTML = i),
                                    (n = s = null))
                                  : (s.innerHTML = i),
                                (l = setTimeout(function () {
                                  d &&
                                    !d.initialized &&
                                    d.trigger(
                                      "Error",
                                      new r.RuntimeError(
                                        r.RuntimeError.NOT_INIT_ERR
                                      )
                                    );
                                }, 5e3));
                            },
                            destroy: (function (e) {
                              return function () {
                                s(d.uid),
                                  e.call(d),
                                  clearTimeout(l),
                                  (c = l = e = d = null);
                              };
                            })(this.destroy),
                          },
                          u
                        );
                    }),
                    u
                  );
                }
              ),
              i(
                "moxie/runtime/flash/file/Blob",
                ["moxie/runtime/flash/Runtime", "moxie/file/Blob"],
                function (e, t) {
                  var i = {
                    slice: function (e, i, n, r) {
                      var o = this.getRuntime();
                      return (
                        0 > i
                          ? (i = Math.max(e.size + i, 0))
                          : i > 0 && (i = Math.min(i, e.size)),
                        0 > n
                          ? (n = Math.max(e.size + n, 0))
                          : n > 0 && (n = Math.min(n, e.size)),
                        (e = o.shimExec.call(
                          this,
                          "Blob",
                          "slice",
                          i,
                          n,
                          r || ""
                        )) && (e = new t(o.uid, e)),
                        e
                      );
                    },
                  };
                  return (e.Blob = i);
                }
              ),
              i(
                "moxie/runtime/flash/file/FileInput",
                [
                  "moxie/runtime/flash/Runtime",
                  "moxie/file/File",
                  "moxie/core/utils/Dom",
                  "moxie/core/utils/Basic",
                ],
                function (e, t, i, n) {
                  var r = {
                    init: function (e) {
                      var r = this,
                        o = this.getRuntime(),
                        s = i.get(e.browse_button);
                      s && (s.setAttribute("tabindex", -1), (s = null)),
                        this.bind(
                          "Change",
                          function () {
                            var e = o.shimExec.call(r, "FileInput", "getFiles");
                            (r.files = []),
                              n.each(e, function (e) {
                                r.files.push(new t(o.uid, e));
                              });
                          },
                          999
                        ),
                        this.getRuntime().shimExec.call(
                          this,
                          "FileInput",
                          "init",
                          {
                            accept: e.accept,
                            multiple: e.multiple,
                          }
                        ),
                        this.trigger("ready");
                    },
                  };
                  return (e.FileInput = r);
                }
              ),
              i(
                "moxie/runtime/flash/file/FileReader",
                ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"],
                function (e, t) {
                  function i(e, i) {
                    switch (i) {
                      case "readAsText":
                        return t.atob(e, "utf8");
                      case "readAsBinaryString":
                        return t.atob(e);
                      case "readAsDataURL":
                        return e;
                    }
                    return null;
                  }
                  var n = {
                    read: function (e, t) {
                      var n = this;
                      return (
                        (n.result = ""),
                        "readAsDataURL" === e &&
                          (n.result = "data:" + (t.type || "") + ";base64,"),
                        n.bind(
                          "Progress",
                          function (t, r) {
                            r && (n.result += i(r, e));
                          },
                          999
                        ),
                        n
                          .getRuntime()
                          .shimExec.call(
                            this,
                            "FileReader",
                            "readAsBase64",
                            t.uid
                          )
                      );
                    },
                  };
                  return (e.FileReader = n);
                }
              ),
              i(
                "moxie/runtime/flash/file/FileReaderSync",
                ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"],
                function (e, t) {
                  function i(e, i) {
                    switch (i) {
                      case "readAsText":
                        return t.atob(e, "utf8");
                      case "readAsBinaryString":
                        return t.atob(e);
                      case "readAsDataURL":
                        return e;
                    }
                    return null;
                  }
                  var n = {
                    read: function (e, t) {
                      var n;
                      return (n = this.getRuntime().shimExec.call(
                        this,
                        "FileReaderSync",
                        "readAsBase64",
                        t.uid
                      ))
                        ? ("readAsDataURL" === e &&
                            (n = "data:" + (t.type || "") + ";base64," + n),
                          i(n, e, t.type))
                        : null;
                    },
                  };
                  return (e.FileReaderSync = n);
                }
              ),
              i(
                "moxie/runtime/flash/runtime/Transporter",
                ["moxie/runtime/flash/Runtime", "moxie/file/Blob"],
                function (e, t) {
                  var i = {
                    getAsBlob: function (e) {
                      var i = this.getRuntime(),
                        n = i.shimExec.call(
                          this,
                          "Transporter",
                          "getAsBlob",
                          e
                        );
                      return n ? new t(i.uid, n) : null;
                    },
                  };
                  return (e.Transporter = i);
                }
              ),
              i(
                "moxie/runtime/flash/xhr/XMLHttpRequest",
                [
                  "moxie/runtime/flash/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/file/Blob",
                  "moxie/file/File",
                  "moxie/file/FileReaderSync",
                  "moxie/runtime/flash/file/FileReaderSync",
                  "moxie/xhr/FormData",
                  "moxie/runtime/Transporter",
                  "moxie/runtime/flash/runtime/Transporter",
                ],
                function (e, t, i, n, r, o, s, a) {
                  var u = {
                    send: function (e, n) {
                      function r() {
                        (e.transport = d.mode),
                          d.shimExec.call(l, "XMLHttpRequest", "send", e, n);
                      }
                      function o(e, t) {
                        d.shimExec.call(
                          l,
                          "XMLHttpRequest",
                          "appendBlob",
                          e,
                          t.uid
                        ),
                          (n = null),
                          r();
                      }
                      function u(e, t) {
                        var i = new a();
                        i.bind("TransportingComplete", function () {
                          t(this.result);
                        }),
                          i.transport(e.getSource(), e.type, {
                            ruid: d.uid,
                          });
                      }
                      var c,
                        l = this,
                        d = l.getRuntime();
                      if (
                        (t.isEmptyObj(e.headers) ||
                          t.each(e.headers, function (e, t) {
                            d.shimExec.call(
                              l,
                              "XMLHttpRequest",
                              "setRequestHeader",
                              t,
                              e.toString()
                            );
                          }),
                        n instanceof s)
                      )
                        if (
                          (n.each(function (e, t) {
                            e instanceof i
                              ? (c = t)
                              : d.shimExec.call(
                                  l,
                                  "XMLHttpRequest",
                                  "append",
                                  t,
                                  e
                                );
                          }),
                          n.hasBlob())
                        ) {
                          var h = n.getBlob();
                          h.isDetached()
                            ? u(h, function (e) {
                                h.destroy(), o(c, e);
                              })
                            : o(c, h);
                        } else (n = null), r();
                      else
                        n instanceof i
                          ? n.isDetached()
                            ? u(n, function (e) {
                                n.destroy(), (n = e.uid), r();
                              })
                            : ((n = n.uid), r())
                          : r();
                    },
                    getResponse: function (e) {
                      var i,
                        o,
                        s = this.getRuntime();
                      if (
                        (o = s.shimExec.call(
                          this,
                          "XMLHttpRequest",
                          "getResponseAsBlob"
                        ))
                      ) {
                        if (((o = new n(s.uid, o)), "blob" === e)) return o;
                        try {
                          if (((i = new r()), ~t.inArray(e, ["", "text"])))
                            return i.readAsText(o);
                          if ("json" === e && window.JSON)
                            return JSON.parse(i.readAsText(o));
                        } finally {
                          o.destroy();
                        }
                      }
                      return null;
                    },
                    abort: function () {
                      this.getRuntime().shimExec.call(
                        this,
                        "XMLHttpRequest",
                        "abort"
                      ),
                        this.dispatchEvent("readystatechange"),
                        this.dispatchEvent("abort");
                    },
                  };
                  return (e.XMLHttpRequest = u);
                }
              ),
              i(
                "moxie/runtime/flash/image/Image",
                [
                  "moxie/runtime/flash/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/runtime/Transporter",
                  "moxie/file/Blob",
                  "moxie/file/FileReaderSync",
                ],
                function (e, t, i, n, r) {
                  var o = {
                    loadFromBlob: function (e) {
                      function t(e) {
                        r.shimExec.call(n, "Image", "loadFromBlob", e.uid),
                          (n = r = null);
                      }
                      var n = this,
                        r = n.getRuntime();
                      if (e.isDetached()) {
                        var o = new i();
                        o.bind("TransportingComplete", function () {
                          t(o.result.getSource());
                        }),
                          o.transport(e.getSource(), e.type, {
                            ruid: r.uid,
                          });
                      } else t(e.getSource());
                    },
                    loadFromImage: function (e) {
                      return this.getRuntime().shimExec.call(
                        this,
                        "Image",
                        "loadFromImage",
                        e.uid
                      );
                    },
                    getInfo: function () {
                      var e = this.getRuntime(),
                        t = e.shimExec.call(this, "Image", "getInfo");
                      return (
                        t.meta &&
                          t.meta.thumb &&
                          t.meta.thumb.data &&
                          !(e.meta.thumb.data instanceof n) &&
                          (t.meta.thumb.data = new n(e.uid, t.meta.thumb.data)),
                        t
                      );
                    },
                    getAsBlob: function (e, t) {
                      var i = this.getRuntime(),
                        r = i.shimExec.call(this, "Image", "getAsBlob", e, t);
                      return r ? new n(i.uid, r) : null;
                    },
                    getAsDataURL: function () {
                      var e = this.getRuntime().Image.getAsBlob.apply(
                        this,
                        arguments
                      );
                      return e ? new r().readAsDataURL(e) : null;
                    },
                  };
                  return (e.Image = o);
                }
              ),
              i(
                "moxie/runtime/silverlight/Runtime",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Env",
                  "moxie/core/utils/Dom",
                  "moxie/core/Exceptions",
                  "moxie/runtime/Runtime",
                ],
                function (e, t, i, r, o) {
                  var s = "silverlight",
                    a = {};
                  return (
                    o.addConstructor(s, function (u) {
                      var c,
                        l = this;
                      (u = e.extend(
                        {
                          xap_url: t.xap_url,
                        },
                        u
                      )),
                        o.call(
                          this,
                          u,
                          s,
                          {
                            access_binary: o.capTrue,
                            access_image_binary: o.capTrue,
                            display_media: o.capTest(n("moxie/image/Image")),
                            do_cors: o.capTrue,
                            drag_and_drop: !1,
                            report_upload_progress: o.capTrue,
                            resize_image: o.capTrue,
                            return_response_headers: function (e) {
                              return e && "client" === l.mode;
                            },
                            return_response_type: function (e) {
                              return "json" !== e || !!window.JSON;
                            },
                            return_status_code: function (t) {
                              return (
                                "client" === l.mode ||
                                !e.arrayDiff(t, [200, 404])
                              );
                            },
                            select_file: o.capTrue,
                            select_multiple: o.capTrue,
                            send_binary_string: o.capTrue,
                            send_browser_cookies: function (e) {
                              return e && "browser" === l.mode;
                            },
                            send_custom_headers: function (e) {
                              return e && "client" === l.mode;
                            },
                            send_multipart: o.capTrue,
                            slice_blob: o.capTrue,
                            stream_upload: !0,
                            summon_file_dialog: !1,
                            upload_filesize: o.capTrue,
                            use_http_method: function (t) {
                              return (
                                "client" === l.mode ||
                                !e.arrayDiff(t, ["GET", "POST"])
                              );
                            },
                          },
                          {
                            return_response_headers: function (e) {
                              return e ? "client" : "browser";
                            },
                            return_status_code: function (t) {
                              return e.arrayDiff(t, [200, 404])
                                ? "client"
                                : ["client", "browser"];
                            },
                            send_browser_cookies: function (e) {
                              return e ? "browser" : "client";
                            },
                            send_custom_headers: function (e) {
                              return e ? "client" : "browser";
                            },
                            use_http_method: function (t) {
                              return e.arrayDiff(t, ["GET", "POST"])
                                ? "client"
                                : ["client", "browser"];
                            },
                          }
                        ),
                        ((function (e) {
                          var t,
                            i,
                            n,
                            r,
                            o,
                            s = !1,
                            a = 0;
                          try {
                            try {
                              new ActiveXObject(
                                "AgControl.AgControl"
                              ).IsVersionSupported(e) && (s = !0);
                            } catch (c) {
                              var u = navigator.plugins["Silverlight Plug-In"];
                              if (u) {
                                for (
                                  "1.0.30226.2" === (t = u.description) &&
                                    (t = "2.0.30226.2"),
                                    i = t.split(".");
                                  i.length > 3;

                                )
                                  i.pop();
                                for (; i.length < 4; ) i.push(0);
                                for (n = e.split("."); n.length > 4; ) n.pop();
                                do {
                                  (r = parseInt(n[a], 10)),
                                    (o = parseInt(i[a], 10)),
                                    a++;
                                } while (a < n.length && r === o);
                                o >= r && !isNaN(r) && (s = !0);
                              }
                            }
                          } catch (e) {
                            s = !1;
                          }
                          return s;
                        })("2.0.31005.0") &&
                          "Opera" !== t.browser) ||
                          (this.mode = !1),
                        e.extend(
                          this,
                          {
                            getShim: function () {
                              return i.get(this.uid).content.Moxie;
                            },
                            shimExec: function (e, t) {
                              var i = [].slice.call(arguments, 2);
                              return l.getShim().exec(this.uid, e, t, i);
                            },
                            init: function () {
                              (this.getShimContainer().innerHTML =
                                '<object id="' +
                                this.uid +
                                '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' +
                                u.xap_url +
                                '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' +
                                this.uid +
                                ",target=" +
                                o.getGlobalEventTarget() +
                                '"/></object>'),
                                (c = setTimeout(
                                  function () {
                                    l &&
                                      !l.initialized &&
                                      l.trigger(
                                        "Error",
                                        new r.RuntimeError(
                                          r.RuntimeError.NOT_INIT_ERR
                                        )
                                      );
                                  },
                                  "Windows" !== t.OS ? 1e4 : 5e3
                                ));
                            },
                            destroy: (function (e) {
                              return function () {
                                e.call(l),
                                  clearTimeout(c),
                                  (u = c = e = l = null);
                              };
                            })(this.destroy),
                          },
                          a
                        );
                    }),
                    a
                  );
                }
              ),
              i(
                "moxie/runtime/silverlight/file/Blob",
                [
                  "moxie/runtime/silverlight/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/runtime/flash/file/Blob",
                ],
                function (e, t, i) {
                  return (e.Blob = t.extend({}, i));
                }
              ),
              i(
                "moxie/runtime/silverlight/file/FileInput",
                [
                  "moxie/runtime/silverlight/Runtime",
                  "moxie/file/File",
                  "moxie/core/utils/Dom",
                  "moxie/core/utils/Basic",
                ],
                function (e, t, i, n) {
                  function r(e) {
                    for (var t = "", i = 0; i < e.length; i++)
                      t +=
                        ("" !== t ? "|" : "") +
                        e[i].title +
                        " | *." +
                        e[i].extensions.replace(/,/g, ";*.");
                    return t;
                  }
                  var o = {
                    init: function (e) {
                      var o = this,
                        s = this.getRuntime(),
                        a = i.get(e.browse_button);
                      a && (a.setAttribute("tabindex", -1), (a = null)),
                        this.bind(
                          "Change",
                          function () {
                            var e = s.shimExec.call(o, "FileInput", "getFiles");
                            (o.files = []),
                              n.each(e, function (e) {
                                o.files.push(new t(s.uid, e));
                              });
                          },
                          999
                        ),
                        s.shimExec.call(
                          this,
                          "FileInput",
                          "init",
                          r(e.accept),
                          e.multiple
                        ),
                        this.trigger("ready");
                    },
                    setOption: function (e, t) {
                      "accept" == e && (t = r(t)),
                        this.getRuntime().shimExec.call(
                          this,
                          "FileInput",
                          "setOption",
                          e,
                          t
                        );
                    },
                  };
                  return (e.FileInput = o);
                }
              ),
              i(
                "moxie/runtime/silverlight/file/FileDrop",
                [
                  "moxie/runtime/silverlight/Runtime",
                  "moxie/core/utils/Dom",
                  "moxie/core/utils/Events",
                ],
                function (e, t, i) {
                  var n = {
                    init: function () {
                      var e,
                        n = this,
                        r = n.getRuntime();
                      return (
                        (e = r.getShimContainer()),
                        i.addEvent(
                          e,
                          "dragover",
                          function (e) {
                            e.preventDefault(),
                              e.stopPropagation(),
                              (e.dataTransfer.dropEffect = "copy");
                          },
                          n.uid
                        ),
                        i.addEvent(
                          e,
                          "dragenter",
                          function (e) {
                            e.preventDefault(),
                              t.get(r.uid).dragEnter(e) && e.stopPropagation();
                          },
                          n.uid
                        ),
                        i.addEvent(
                          e,
                          "drop",
                          function (e) {
                            e.preventDefault(),
                              t.get(r.uid).dragDrop(e) && e.stopPropagation();
                          },
                          n.uid
                        ),
                        r.shimExec.call(this, "FileDrop", "init")
                      );
                    },
                  };
                  return (e.FileDrop = n);
                }
              ),
              i(
                "moxie/runtime/silverlight/file/FileReader",
                [
                  "moxie/runtime/silverlight/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/runtime/flash/file/FileReader",
                ],
                function (e, t, i) {
                  return (e.FileReader = t.extend({}, i));
                }
              ),
              i(
                "moxie/runtime/silverlight/file/FileReaderSync",
                [
                  "moxie/runtime/silverlight/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/runtime/flash/file/FileReaderSync",
                ],
                function (e, t, i) {
                  return (e.FileReaderSync = t.extend({}, i));
                }
              ),
              i(
                "moxie/runtime/silverlight/runtime/Transporter",
                [
                  "moxie/runtime/silverlight/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/runtime/flash/runtime/Transporter",
                ],
                function (e, t, i) {
                  return (e.Transporter = t.extend({}, i));
                }
              ),
              i(
                "moxie/runtime/silverlight/xhr/XMLHttpRequest",
                [
                  "moxie/runtime/silverlight/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/runtime/flash/xhr/XMLHttpRequest",
                  "moxie/runtime/silverlight/file/FileReaderSync",
                  "moxie/runtime/silverlight/runtime/Transporter",
                ],
                function (e, t, i) {
                  return (e.XMLHttpRequest = t.extend({}, i));
                }
              ),
              i(
                "moxie/runtime/silverlight/image/Image",
                [
                  "moxie/runtime/silverlight/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/file/Blob",
                  "moxie/runtime/flash/image/Image",
                ],
                function (e, t, i, n) {
                  return (e.Image = t.extend({}, n, {
                    getInfo: function () {
                      var e = this.getRuntime(),
                        n = {
                          meta: {},
                        },
                        r = e.shimExec.call(this, "Image", "getInfo");
                      return (
                        r.meta &&
                          (t.each(
                            ["tiff", "exif", "gps", "thumb"],
                            function (e) {
                              var t,
                                i,
                                o,
                                s,
                                a = r.meta[e];
                              if (a && a.keys)
                                for (
                                  n.meta[e] = {}, i = 0, o = a.keys.length;
                                  o > i;
                                  i++
                                )
                                  (s = a[(t = a.keys[i])]) &&
                                    (/^(\d|[1-9]\d+)$/.test(s)
                                      ? (s = parseInt(s, 10))
                                      : /^\d*\.\d+$/.test(s) &&
                                        (s = parseFloat(s)),
                                    (n.meta[e][t] = s));
                            }
                          ),
                          n.meta &&
                            n.meta.thumb &&
                            n.meta.thumb.data &&
                            !(e.meta.thumb.data instanceof i) &&
                            (n.meta.thumb.data = new i(
                              e.uid,
                              n.meta.thumb.data
                            ))),
                        (n.width = parseInt(r.width, 10)),
                        (n.height = parseInt(r.height, 10)),
                        (n.size = parseInt(r.size, 10)),
                        (n.type = r.type),
                        (n.name = r.name),
                        n
                      );
                    },
                    resize: function (e, t, i) {
                      this.getRuntime().shimExec.call(
                        this,
                        "Image",
                        "resize",
                        e.x,
                        e.y,
                        e.width,
                        e.height,
                        t,
                        i.preserveHeaders,
                        i.resample
                      );
                    },
                  }));
                }
              ),
              i(
                "moxie/runtime/html4/Runtime",
                [
                  "moxie/core/utils/Basic",
                  "moxie/core/Exceptions",
                  "moxie/runtime/Runtime",
                  "moxie/core/utils/Env",
                ],
                function (e, t, i, r) {
                  var o = "html4",
                    s = {};
                  return (
                    i.addConstructor(o, function (t) {
                      var a = this,
                        u = i.capTest,
                        c = i.capTrue;
                      i.call(this, t, o, {
                        access_binary: u(
                          window.FileReader ||
                            (window.File && File.getAsDataURL)
                        ),
                        access_image_binary: !1,
                        display_media: u(
                          (r.can("create_canvas") ||
                            r.can("use_data_uri_over32kb")) &&
                            n("moxie/image/Image")
                        ),
                        do_cors: !1,
                        drag_and_drop: !1,
                        filter_by_extension: u(
                          !(
                            ("Chrome" === r.browser &&
                              r.verComp(r.version, 28, "<")) ||
                            ("IE" === r.browser &&
                              r.verComp(r.version, 10, "<")) ||
                            ("Safari" === r.browser &&
                              r.verComp(r.version, 7, "<")) ||
                            ("Firefox" === r.browser &&
                              r.verComp(r.version, 37, "<"))
                          )
                        ),
                        resize_image: function () {
                          return (
                            s.Image &&
                            a.can("access_binary") &&
                            r.can("create_canvas")
                          );
                        },
                        report_upload_progress: !1,
                        return_response_headers: !1,
                        return_response_type: function (t) {
                          return (
                            !("json" !== t || !window.JSON) ||
                            !!~e.inArray(t, ["text", "document", ""])
                          );
                        },
                        return_status_code: function (t) {
                          return !e.arrayDiff(t, [200, 404]);
                        },
                        select_file: function () {
                          return r.can("use_fileinput");
                        },
                        select_multiple: !1,
                        send_binary_string: !1,
                        send_custom_headers: !1,
                        send_multipart: !0,
                        slice_blob: !1,
                        stream_upload: function () {
                          return a.can("select_file");
                        },
                        summon_file_dialog: function () {
                          return (
                            a.can("select_file") &&
                            !(
                              ("Firefox" === r.browser &&
                                r.verComp(r.version, 4, "<")) ||
                              ("Opera" === r.browser &&
                                r.verComp(r.version, 12, "<")) ||
                              ("IE" === r.browser &&
                                r.verComp(r.version, 10, "<"))
                            )
                          );
                        },
                        upload_filesize: c,
                        use_http_method: function (t) {
                          return !e.arrayDiff(t, ["GET", "POST"]);
                        },
                      }),
                        e.extend(this, {
                          init: function () {
                            this.trigger("Init");
                          },
                          destroy: (function (e) {
                            return function () {
                              e.call(a), (e = a = null);
                            };
                          })(this.destroy),
                        }),
                        e.extend(this.getShim(), s);
                    }),
                    s
                  );
                }
              ),
              i(
                "moxie/runtime/html4/file/FileInput",
                [
                  "moxie/runtime/html4/Runtime",
                  "moxie/file/File",
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Dom",
                  "moxie/core/utils/Events",
                  "moxie/core/utils/Mime",
                  "moxie/core/utils/Env",
                ],
                function (e, t, i, n, r, o, s) {
                  return (e.FileInput = function () {
                    function e() {
                      var o,
                        c,
                        d,
                        h,
                        f,
                        m,
                        p = this,
                        g = p.getRuntime();
                      (m = i.guid("uid_")),
                        (o = g.getShimContainer()),
                        a &&
                          (d = n.get(a + "_form")) &&
                          (i.extend(d.style, {
                            top: "100%",
                          }),
                          d.firstChild.setAttribute("tabindex", -1)),
                        (h = document.createElement("form")).setAttribute(
                          "id",
                          m + "_form"
                        ),
                        h.setAttribute("method", "post"),
                        h.setAttribute("enctype", "multipart/form-data"),
                        h.setAttribute("encoding", "multipart/form-data"),
                        i.extend(h.style, {
                          overflow: "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }),
                        (f = document.createElement("input")).setAttribute(
                          "id",
                          m
                        ),
                        f.setAttribute("type", "file"),
                        f.setAttribute("accept", l.join(",")),
                        g.can("summon_file_dialog") &&
                          f.setAttribute("tabindex", -1),
                        i.extend(f.style, {
                          fontSize: "999px",
                          opacity: 0,
                        }),
                        h.appendChild(f),
                        o.appendChild(h),
                        i.extend(f.style, {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }),
                        "IE" === s.browser &&
                          s.verComp(s.version, 10, "<") &&
                          i.extend(f.style, {
                            filter:
                              "progid:DXImageTransform.Microsoft.Alpha(opacity=0)",
                          }),
                        (f.onchange = function () {
                          var i;
                          this.value &&
                            ((i = this.files
                              ? this.files[0]
                              : {
                                  name: this.value,
                                }),
                            (i = new t(g.uid, i)),
                            (this.onchange = function () {}),
                            e.call(p),
                            (p.files = [i]),
                            f.setAttribute("id", i.uid),
                            h.setAttribute("id", i.uid + "_form"),
                            p.trigger("change"),
                            (f = h = null));
                        }),
                        g.can("summon_file_dialog") &&
                          ((c = n.get(u.browse_button)),
                          r.removeEvent(c, "click", p.uid),
                          r.addEvent(
                            c,
                            "click",
                            function (e) {
                              f && !f.disabled && f.click(), e.preventDefault();
                            },
                            p.uid
                          )),
                        (a = m),
                        (o = d = c = null);
                    }
                    var a,
                      u,
                      c,
                      l = [];
                    i.extend(this, {
                      init: function (t) {
                        var i,
                          s = this,
                          a = s.getRuntime();
                        (u = t),
                          (l = o.extList2mimes(
                            t.accept,
                            a.can("filter_by_extension")
                          )),
                          (i = a.getShimContainer()),
                          (function () {
                            var e, o, l;
                            (e = n.get(t.browse_button)),
                              (c = n.getStyle(e, "z-index") || "auto"),
                              a.can("summon_file_dialog")
                                ? ("static" === n.getStyle(e, "position") &&
                                    (e.style.position = "relative"),
                                  s.bind("Refresh", function () {
                                    (o = parseInt(c, 10) || 1),
                                      (n.get(u.browse_button).style.zIndex = o),
                                      (this.getRuntime().getShimContainer().style.zIndex =
                                        o - 1);
                                  }))
                                : e.setAttribute("tabindex", -1),
                              (l = a.can("summon_file_dialog") ? e : i),
                              r.addEvent(
                                l,
                                "mouseover",
                                function () {
                                  s.trigger("mouseenter");
                                },
                                s.uid
                              ),
                              r.addEvent(
                                l,
                                "mouseout",
                                function () {
                                  s.trigger("mouseleave");
                                },
                                s.uid
                              ),
                              r.addEvent(
                                l,
                                "mousedown",
                                function () {
                                  s.trigger("mousedown");
                                },
                                s.uid
                              ),
                              r.addEvent(
                                n.get(t.container),
                                "mouseup",
                                function () {
                                  s.trigger("mouseup");
                                },
                                s.uid
                              ),
                              (e = null);
                          })(),
                          e.call(this),
                          (i = null),
                          s.trigger({
                            type: "ready",
                            async: !0,
                          });
                      },
                      setOption: function (e, t) {
                        var i,
                          r = this.getRuntime();
                        "accept" == e &&
                          (l =
                            t.mimes ||
                            o.extList2mimes(t, r.can("filter_by_extension"))),
                          (i = n.get(a)) &&
                            i.setAttribute("accept", l.join(","));
                      },
                      disable: function (e) {
                        var t;
                        (t = n.get(a)) && (t.disabled = !!e);
                      },
                      destroy: function () {
                        var e = this.getRuntime(),
                          t = e.getShim(),
                          i = e.getShimContainer(),
                          o = u && n.get(u.container),
                          s = u && n.get(u.browse_button);
                        o && r.removeAllEvents(o, this.uid),
                          s &&
                            (r.removeAllEvents(s, this.uid),
                            (s.style.zIndex = c)),
                          i &&
                            (r.removeAllEvents(i, this.uid),
                            (i.innerHTML = "")),
                          t.removeInstance(this.uid),
                          (a = l = u = i = o = s = t = null);
                      },
                    });
                  });
                }
              ),
              i(
                "moxie/runtime/html4/file/FileReader",
                [
                  "moxie/runtime/html4/Runtime",
                  "moxie/runtime/html5/file/FileReader",
                ],
                function (e, t) {
                  return (e.FileReader = t);
                }
              ),
              i(
                "moxie/runtime/html4/xhr/XMLHttpRequest",
                [
                  "moxie/runtime/html4/Runtime",
                  "moxie/core/utils/Basic",
                  "moxie/core/utils/Dom",
                  "moxie/core/utils/Url",
                  "moxie/core/Exceptions",
                  "moxie/core/utils/Events",
                  "moxie/file/Blob",
                  "moxie/xhr/FormData",
                ],
                function (e, t, i, n, r, o, s, a) {
                  return (e.XMLHttpRequest = function () {
                    function e(e) {
                      var t,
                        n,
                        r,
                        s,
                        a = this,
                        u = !1;
                      if (l) {
                        if (
                          ((t = l.id.replace(/_iframe$/, "")),
                          (n = i.get(t + "_form")))
                        ) {
                          for (
                            s = (r = n.getElementsByTagName("input")).length;
                            s--;

                          )
                            switch (r[s].getAttribute("type")) {
                              case "hidden":
                                r[s].parentNode.removeChild(r[s]);
                                break;
                              case "file":
                                u = !0;
                            }
                          (r = []),
                            u || n.parentNode.removeChild(n),
                            (n = null);
                        }
                        setTimeout(function () {
                          o.removeEvent(l, "load", a.uid),
                            l.parentNode && l.parentNode.removeChild(l);
                          var t = a.getRuntime().getShimContainer();
                          t.children.length || t.parentNode.removeChild(t),
                            (t = l = null),
                            e();
                        }, 1);
                      }
                    }
                    var u, c, l;
                    t.extend(this, {
                      send: function (d, h) {
                        var f,
                          m,
                          p,
                          g,
                          v = this,
                          x = v.getRuntime();
                        if (((u = c = null), h instanceof a && h.hasBlob())) {
                          if (
                            ((g = h.getBlob()),
                            (f = g.uid),
                            (p = i.get(f)),
                            !(m = i.get(f + "_form")))
                          )
                            throw new r.DOMException(
                              r.DOMException.NOT_FOUND_ERR
                            );
                        } else
                          (f = t.guid("uid_")),
                            (m = document.createElement("form")).setAttribute(
                              "id",
                              f + "_form"
                            ),
                            m.setAttribute("method", d.method),
                            m.setAttribute("enctype", "multipart/form-data"),
                            m.setAttribute("encoding", "multipart/form-data"),
                            x.getShimContainer().appendChild(m);
                        m.setAttribute("target", f + "_iframe"),
                          h instanceof a &&
                            h.each(function (e, i) {
                              if (e instanceof s)
                                p && p.setAttribute("name", i);
                              else {
                                var n = document.createElement("input");
                                t.extend(n, {
                                  type: "hidden",
                                  name: i,
                                  value: e,
                                }),
                                  p ? m.insertBefore(n, p) : m.appendChild(n);
                              }
                            }),
                          m.setAttribute("action", d.url),
                          (function () {
                            var i = x.getShimContainer() || document.body,
                              r = document.createElement("div");
                            (r.innerHTML =
                              '<iframe id="' +
                              f +
                              '_iframe" name="' +
                              f +
                              '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>'),
                              (l = r.firstChild),
                              i.appendChild(l),
                              o.addEvent(
                                l,
                                "load",
                                function () {
                                  var i;
                                  try {
                                    (i =
                                      l.contentWindow.document ||
                                      l.contentDocument ||
                                      window.frames[l.id].document),
                                      /^4(0[0-9]|1[0-7]|2[2346])\s/.test(
                                        i.title
                                      )
                                        ? (u = i.title.replace(
                                            /^(\d+).*$/,
                                            "$1"
                                          ))
                                        : ((u = 200),
                                          (c = t.trim(i.body.innerHTML)),
                                          v.trigger({
                                            type: "progress",
                                            loaded: c.length,
                                            total: c.length,
                                          }),
                                          g &&
                                            v.trigger({
                                              type: "uploadprogress",
                                              loaded: g.size || 1025,
                                              total: g.size || 1025,
                                            }));
                                  } catch (t) {
                                    if (!n.hasSameOrigin(d.url))
                                      return void e.call(v, function () {
                                        v.trigger("error");
                                      });
                                    u = 404;
                                  }
                                  e.call(v, function () {
                                    v.trigger("load");
                                  });
                                },
                                v.uid
                              );
                          })(),
                          m.submit(),
                          v.trigger("loadstart");
                      },
                      getStatus: function () {
                        return u;
                      },
                      getResponse: function (e) {
                        if (
                          "json" === e &&
                          "string" === t.typeOf(c) &&
                          window.JSON
                        )
                          try {
                            return JSON.parse(
                              c
                                .replace(/^\s*<pre[^>]*>/, "")
                                .replace(/<\/pre>\s*$/, "")
                            );
                          } catch (e) {
                            return null;
                          }
                        return c;
                      },
                      abort: function () {
                        var t = this;
                        l &&
                          l.contentWindow &&
                          (l.contentWindow.stop
                            ? l.contentWindow.stop()
                            : l.contentWindow.document.execCommand
                            ? l.contentWindow.document.execCommand("Stop")
                            : (l.src = "about:blank")),
                          e.call(this, function () {
                            t.dispatchEvent("abort");
                          });
                      },
                      destroy: function () {
                        this.getRuntime().getShim().removeInstance(this.uid);
                      },
                    });
                  });
                }
              ),
              i(
                "moxie/runtime/html4/image/Image",
                [
                  "moxie/runtime/html4/Runtime",
                  "moxie/runtime/html5/image/Image",
                ],
                function (e, t) {
                  return (e.Image = t);
                }
              ),
              (function (i) {
                for (var n = 0; n < i.length; n++) {
                  for (
                    var r = e, s = i[n], a = s.split(/[.\/]/), u = 0;
                    u < a.length - 1;
                    ++u
                  )
                    r[a[u]] === t && (r[a[u]] = {}), (r = r[a[u]]);
                  r[a[a.length - 1]] = o[s];
                }
              })([
                "moxie/core/utils/Basic",
                "moxie/core/utils/Encode",
                "moxie/core/utils/Env",
                "moxie/core/Exceptions",
                "moxie/core/utils/Dom",
                "moxie/core/EventTarget",
                "moxie/runtime/Runtime",
                "moxie/runtime/RuntimeClient",
                "moxie/file/Blob",
                "moxie/core/I18n",
                "moxie/core/utils/Mime",
                "moxie/file/FileInput",
                "moxie/file/File",
                "moxie/file/FileDrop",
                "moxie/file/FileReader",
                "moxie/core/utils/Url",
                "moxie/runtime/RuntimeTarget",
                "moxie/xhr/FormData",
                "moxie/xhr/XMLHttpRequest",
                "moxie/image/Image",
                "moxie/core/utils/Events",
                "moxie/runtime/html5/image/ResizerCanvas",
              ]);
          })(this);
        }),
        (i = []),
        (n = function () {
          var e = {};
          return c.apply(e, arguments), e.moxie;
        }),
        "function" == typeof n
          ? void 0 === (o = n.apply((r = {}), i)) && (o = r)
          : (o = n),
        (function (i, n) {
          (a = [o]),
            (s = function () {
              var e = {};
              return n.apply(e, arguments), e.plupload;
            }),
            void 0 === (u = "function" == typeof s ? s.apply(t, a) : s) ||
              (e.exports = u);
        })(this || window, function (e) {
          !(function (e, t, i) {
            function n(e) {
              function t(e, t, i) {
                var r = {
                  chunks: "slice_blob",
                  jpgresize: "send_binary_string",
                  pngresize: "send_binary_string",
                  progress: "report_upload_progress",
                  multi_selection: "select_multiple",
                  dragdrop: "drag_and_drop",
                  drop_element: "drag_and_drop",
                  headers: "send_custom_headers",
                  urlstream_upload: "send_binary_string",
                  canSendBinary: "send_binary",
                  triggerDialog: "summon_file_dialog",
                };
                r[e] ? (n[r[e]] = t) : i || (n[e] = t);
              }
              var i = e.required_features,
                n = {};
              return (
                "string" == typeof i
                  ? u.each(i.split(/\s*,\s*/), function (e) {
                      t(e, !0);
                    })
                  : "object" == typeof i
                  ? u.each(i, function (e, i) {
                      t(i, e);
                    })
                  : !0 === i &&
                    (e.chunk_size && e.chunk_size > 0 && (n.slice_blob = !0),
                    (u.isEmptyObj(e.resize) && !1 !== e.multipart) ||
                      (n.send_binary_string = !0),
                    e.http_method && (n.use_http_method = e.http_method),
                    u.each(e, function (e, i) {
                      t(i, !!e, !0);
                    })),
                n
              );
            }
            var r = window.setTimeout,
              o = {},
              s = t.core.utils,
              a = t.runtime.Runtime,
              u = {
                VERSION: "2.3.6",
                STOPPED: 1,
                STARTED: 2,
                QUEUED: 1,
                UPLOADING: 2,
                FAILED: 4,
                DONE: 5,
                GENERIC_ERROR: -100,
                HTTP_ERROR: -200,
                IO_ERROR: -300,
                SECURITY_ERROR: -400,
                INIT_ERROR: -500,
                FILE_SIZE_ERROR: -600,
                FILE_EXTENSION_ERROR: -601,
                FILE_DUPLICATE_ERROR: -602,
                IMAGE_FORMAT_ERROR: -700,
                MEMORY_ERROR: -701,
                IMAGE_DIMENSIONS_ERROR: -702,
                moxie: t,
                mimeTypes: s.Mime.mimes,
                ua: s.Env,
                typeOf: s.Basic.typeOf,
                extend: s.Basic.extend,
                guid: s.Basic.guid,
                getAll: function (e) {
                  var t,
                    i = [];
                  "array" !== u.typeOf(e) && (e = [e]);
                  for (var n = e.length; n--; ) (t = u.get(e[n])) && i.push(t);
                  return i.length ? i : null;
                },
                get: s.Dom.get,
                each: s.Basic.each,
                getPos: s.Dom.getPos,
                getSize: s.Dom.getSize,
                xmlEncode: function (e) {
                  var t = {
                    "<": "lt",
                    ">": "gt",
                    "&": "amp",
                    '"': "quot",
                    "'": "#39",
                  };
                  return e
                    ? ("" + e).replace(/[<>&\"\']/g, function (e) {
                        return t[e] ? "&" + t[e] + ";" : e;
                      })
                    : e;
                },
                toArray: s.Basic.toArray,
                inArray: s.Basic.inArray,
                inSeries: s.Basic.inSeries,
                addI18n: t.core.I18n.addI18n,
                translate: t.core.I18n.translate,
                sprintf: s.Basic.sprintf,
                isEmptyObj: s.Basic.isEmptyObj,
                hasClass: s.Dom.hasClass,
                addClass: s.Dom.addClass,
                removeClass: s.Dom.removeClass,
                getStyle: s.Dom.getStyle,
                addEvent: s.Events.addEvent,
                removeEvent: s.Events.removeEvent,
                removeAllEvents: s.Events.removeAllEvents,
                cleanName: function (e) {
                  var t, i;
                  for (
                    i = [
                      /[\300-\306]/g,
                      "A",
                      /[\340-\346]/g,
                      "a",
                      /\307/g,
                      "C",
                      /\347/g,
                      "c",
                      /[\310-\313]/g,
                      "E",
                      /[\350-\353]/g,
                      "e",
                      /[\314-\317]/g,
                      "I",
                      /[\354-\357]/g,
                      "i",
                      /\321/g,
                      "N",
                      /\361/g,
                      "n",
                      /[\322-\330]/g,
                      "O",
                      /[\362-\370]/g,
                      "o",
                      /[\331-\334]/g,
                      "U",
                      /[\371-\374]/g,
                      "u",
                    ],
                      t = 0;
                    t < i.length;
                    t += 2
                  )
                    e = e.replace(i[t], i[t + 1]);
                  return (e = e.replace(/\s+/g, "_")).replace(
                    /[^a-z0-9_\-\.]+/gi,
                    ""
                  );
                },
                buildUrl: function (e, t) {
                  var i = "";
                  return (
                    u.each(t, function (e, t) {
                      i +=
                        (i ? "&" : "") +
                        encodeURIComponent(t) +
                        "=" +
                        encodeURIComponent(e);
                    }),
                    i && (e += (e.indexOf("?") > 0 ? "&" : "?") + i),
                    e
                  );
                },
                formatSize: function (e) {
                  function t(e, t) {
                    return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
                  }
                  if (e === i || /\D/.test(e)) return u.translate("N/A");
                  var n = Math.pow(1024, 4);
                  return e > n
                    ? t(e / n, 1) + " " + u.translate("tb")
                    : e > (n /= 1024)
                    ? t(e / n, 1) + " " + u.translate("gb")
                    : e > (n /= 1024)
                    ? t(e / n, 1) + " " + u.translate("mb")
                    : e > 1024
                    ? Math.round(e / 1024) + " " + u.translate("kb")
                    : e + " " + u.translate("b");
                },
                parseSize: s.Basic.parseSizeStr,
                predictRuntime: function (e, t) {
                  var i, n;
                  return (
                    (i = new u.Uploader(e)),
                    (n = a.thatCan(
                      i.getOption().required_features,
                      t || e.runtimes
                    )),
                    i.destroy(),
                    n
                  );
                },
                addFileFilter: function (e, t) {
                  o[e] = t;
                },
              };
            u.addFileFilter("mime_types", function (e, t, i) {
              e.length && !e.regexp.test(t.name)
                ? (this.trigger("Error", {
                    code: u.FILE_EXTENSION_ERROR,
                    message: u.translate("File extension error."),
                    file: t,
                  }),
                  i(!1))
                : i(!0);
            }),
              u.addFileFilter("max_file_size", function (e, t, i) {
                (e = u.parseSize(e)),
                  undefined !== t.size && e && t.size > e
                    ? (this.trigger("Error", {
                        code: u.FILE_SIZE_ERROR,
                        message: u.translate("File size error."),
                        file: t,
                      }),
                      i(!1))
                    : i(!0);
              }),
              u.addFileFilter("prevent_duplicates", function (e, t, i) {
                if (e)
                  for (var n = this.files.length; n--; )
                    if (
                      t.name === this.files[n].name &&
                      t.size === this.files[n].size
                    )
                      return (
                        this.trigger("Error", {
                          code: u.FILE_DUPLICATE_ERROR,
                          message: u.translate("Duplicate file error."),
                          file: t,
                        }),
                        void i(!1)
                      );
                i(!0);
              }),
              u.addFileFilter("prevent_empty", function (e, t, n) {
                e && !t.size && t.size !== i
                  ? (this.trigger("Error", {
                      code: u.FILE_SIZE_ERROR,
                      message: u.translate("File size error."),
                      file: t,
                    }),
                    n(!1))
                  : n(!0);
              }),
              (u.Uploader = function (e) {
                function s() {
                  var e,
                    t,
                    i = 0;
                  if (this.state == u.STARTED) {
                    for (t = 0; t < O.length; t++)
                      e || O[t].status != u.QUEUED
                        ? i++
                        : ((e = O[t]),
                          this.trigger("BeforeUpload", e) &&
                            ((e.status = u.UPLOADING),
                            this.trigger("UploadFile", e)));
                    i == O.length &&
                      (this.state !== u.STOPPED &&
                        ((this.state = u.STOPPED),
                        this.trigger("StateChanged")),
                      this.trigger("UploadComplete", O));
                  }
                }
                function c(e) {
                  (e.percent =
                    e.size > 0 ? Math.ceil((e.loaded / e.size) * 100) : 100),
                    l();
                }
                function l() {
                  var e,
                    t,
                    n,
                    r = 0;
                  for (A.reset(), e = 0; e < O.length; e++)
                    (t = O[e]).size !== i
                      ? ((A.size += t.origSize),
                        (n = (t.loaded * t.origSize) / t.size),
                        (!t.completeTimestamp || t.completeTimestamp > I) &&
                          (r += n),
                        (A.loaded += n))
                      : (A.size = i),
                      t.status == u.DONE
                        ? A.uploaded++
                        : t.status == u.FAILED
                        ? A.failed++
                        : A.queued++;
                  A.size === i
                    ? (A.percent =
                        O.length > 0
                          ? Math.ceil((A.uploaded / O.length) * 100)
                          : 0)
                    : ((A.bytesPerSec = Math.ceil(
                        r / ((+new Date() - I || 1) / 1e3)
                      )),
                      (A.percent =
                        A.size > 0 ? Math.ceil((A.loaded / A.size) * 100) : 0));
                }
                function d() {
                  var e = C[0] || N[0];
                  return !!e && e.getRuntime().uid;
                }
                function h() {
                  this.bind("FilesAdded FilesRemoved", function (e) {
                    e.trigger("QueueChanged"), e.refresh();
                  }),
                    this.bind("CancelUpload", w),
                    this.bind("BeforeUpload", g),
                    this.bind("UploadFile", v),
                    this.bind("UploadProgress", x),
                    this.bind("StateChanged", y),
                    this.bind("QueueChanged", l),
                    this.bind("Error", _),
                    this.bind("FileUploaded", E),
                    this.bind("Destroy", b);
                }
                function f(e, i) {
                  var n = this,
                    r = 0,
                    o = [],
                    s = {
                      runtime_order: e.runtimes,
                      required_caps: e.required_features,
                      preferred_caps: D,
                      swf_url: e.flash_swf_url,
                      xap_url: e.silverlight_xap_url,
                    };
                  u.each(e.runtimes.split(/\s*,\s*/), function (t) {
                    e[t] && (s[t] = e[t]);
                  }),
                    e.browse_button &&
                      u.each(e.browse_button, function (i) {
                        o.push(function (o) {
                          var c = new t.file.FileInput(
                            u.extend({}, s, {
                              accept: e.filters.mime_types,
                              name: e.file_data_name,
                              multiple: e.multi_selection,
                              container: e.container,
                              browse_button: i,
                            })
                          );
                          (c.onready = function () {
                            var e = a.getInfo(this.ruid);
                            u.extend(n.features, {
                              chunks: e.can("slice_blob"),
                              multipart: e.can("send_multipart"),
                              multi_selection: e.can("select_multiple"),
                            }),
                              r++,
                              C.push(this),
                              o();
                          }),
                            (c.onchange = function () {
                              n.addFile(this.files);
                            }),
                            c.bind(
                              "mouseenter mouseleave mousedown mouseup",
                              function (t) {
                                F ||
                                  (e.browse_button_hover &&
                                    ("mouseenter" === t.type
                                      ? u.addClass(i, e.browse_button_hover)
                                      : "mouseleave" === t.type &&
                                        u.removeClass(
                                          i,
                                          e.browse_button_hover
                                        )),
                                  e.browse_button_active &&
                                    ("mousedown" === t.type
                                      ? u.addClass(i, e.browse_button_active)
                                      : "mouseup" === t.type &&
                                        u.removeClass(
                                          i,
                                          e.browse_button_active
                                        )));
                              }
                            ),
                            c.bind("mousedown", function () {
                              n.trigger("Browse");
                            }),
                            c.bind("error runtimeerror", function () {
                              (c = null), o();
                            }),
                            c.init();
                        });
                      }),
                    e.drop_element &&
                      u.each(e.drop_element, function (e) {
                        o.push(function (i) {
                          var o = new t.file.FileDrop(
                            u.extend({}, s, {
                              drop_zone: e,
                            })
                          );
                          (o.onready = function () {
                            var e = a.getInfo(this.ruid);
                            u.extend(n.features, {
                              chunks: e.can("slice_blob"),
                              multipart: e.can("send_multipart"),
                              dragdrop: e.can("drag_and_drop"),
                            }),
                              r++,
                              N.push(this),
                              i();
                          }),
                            (o.ondrop = function () {
                              n.addFile(this.files);
                            }),
                            o.bind("error runtimeerror", function () {
                              (o = null), i();
                            }),
                            o.init();
                        });
                      }),
                    u.inSeries(o, function () {
                      "function" == typeof i && i(r);
                    });
                }
                function m(e, n, r, o) {
                  var s = new t.image.Image();
                  try {
                    (s.onload = function () {
                      n.width > this.width &&
                      n.height > this.height &&
                      n.quality === i &&
                      n.preserve_headers &&
                      !n.crop
                        ? (this.destroy(), o(e))
                        : s.downsize(
                            n.width,
                            n.height,
                            n.crop,
                            n.preserve_headers
                          );
                    }),
                      (s.onresize = function () {
                        var t = this.getAsBlob(e.type, n.quality);
                        this.destroy(), o(t);
                      }),
                      s.bind("error runtimeerror", function () {
                        this.destroy(), o(e);
                      }),
                      s.load(e, r);
                  } catch (t) {
                    o(e);
                  }
                }
                function p(e, i, r) {
                  function o(e, i, n) {
                    var r = R[e];
                    switch (e) {
                      case "max_file_size":
                        "max_file_size" === e &&
                          (R.max_file_size = R.filters.max_file_size = i);
                        break;
                      case "chunk_size":
                        (i = u.parseSize(i)) &&
                          ((R[e] = i), (R.send_file_name = !0));
                        break;
                      case "multipart":
                        (R[e] = i), i || (R.send_file_name = !0);
                        break;
                      case "http_method":
                        R[e] = "PUT" === i.toUpperCase() ? "PUT" : "POST";
                        break;
                      case "unique_names":
                        (R[e] = i), i && (R.send_file_name = !0);
                        break;
                      case "filters":
                        "array" === u.typeOf(i) &&
                          (i = {
                            mime_types: i,
                          }),
                          n ? u.extend(R.filters, i) : (R.filters = i),
                          i.mime_types &&
                            ("string" === u.typeOf(i.mime_types) &&
                              (i.mime_types = t.core.utils.Mime.mimes2extList(
                                i.mime_types
                              )),
                            (i.mime_types.regexp = (function (e) {
                              var t = [];
                              return (
                                u.each(e, function (e) {
                                  u.each(e.extensions.split(/,/), function (e) {
                                    /^\s*\*\s*$/.test(e)
                                      ? t.push("\\.*")
                                      : t.push(
                                          "\\." +
                                            e.replace(
                                              new RegExp(
                                                "[" +
                                                  "/^$.*+?|()[]{}\\".replace(
                                                    /./g,
                                                    "\\$&"
                                                  ) +
                                                  "]",
                                                "g"
                                              ),
                                              "\\$&"
                                            )
                                        );
                                  });
                                }),
                                new RegExp("(" + t.join("|") + ")$", "i")
                              );
                            })(i.mime_types)),
                            (R.filters.mime_types = i.mime_types));
                        break;
                      case "resize":
                        R.resize =
                          !!i &&
                          u.extend(
                            {
                              preserve_headers: !0,
                              crop: !1,
                            },
                            i
                          );
                        break;
                      case "prevent_duplicates":
                        R.prevent_duplicates = R.filters.prevent_duplicates =
                          !!i;
                        break;
                      case "container":
                      case "browse_button":
                      case "drop_element":
                        i = "container" === e ? u.get(i) : u.getAll(i);
                      case "runtimes":
                      case "multi_selection":
                      case "flash_swf_url":
                      case "silverlight_xap_url":
                        (R[e] = i), n || (c = !0);
                        break;
                      default:
                        R[e] = i;
                    }
                    n || s.trigger("OptionChanged", e, i, r);
                  }
                  var s = this,
                    c = !1;
                  "object" == typeof e
                    ? u.each(e, function (e, t) {
                        o(t, e, r);
                      })
                    : o(e, i, r),
                    r
                      ? ((R.required_features = n(u.extend({}, R))),
                        (D = n(
                          u.extend({}, R, {
                            required_features: !0,
                          })
                        )))
                      : c &&
                        (s.trigger("Destroy"),
                        f.call(s, R, function (e) {
                          e
                            ? ((s.runtime = a.getInfo(d()).type),
                              s.trigger("Init", {
                                runtime: s.runtime,
                              }),
                              s.trigger("PostInit"))
                            : s.trigger("Error", {
                                code: u.INIT_ERROR,
                                message: u.translate("Init error."),
                              });
                        }));
                }
                function g(e, t) {
                  if (e.settings.unique_names) {
                    var i = t.name.match(/\.([^.]+)$/),
                      n = "part";
                    i && (n = i[1]), (t.target_name = t.id + "." + n);
                  }
                }
                function v(e, i) {
                  function n() {
                    d-- > 0
                      ? r(o, 1e3)
                      : ((i.loaded = f),
                        e.trigger("Error", {
                          code: u.HTTP_ERROR,
                          message: u.translate("HTTP Error."),
                          file: i,
                          response: T.responseText,
                          status: T.status,
                          responseHeaders: T.getAllResponseHeaders(),
                        }));
                  }
                  function o() {
                    var t,
                      n,
                      r = {};
                    i.status === u.UPLOADING &&
                      e.state !== u.STOPPED &&
                      (e.settings.send_file_name &&
                        (r.name = i.target_name || i.name),
                      l && h.chunks && a.size > l
                        ? ((n = Math.min(l, a.size - f)),
                          (t = a.slice(f, f + n)))
                        : ((n = a.size), (t = a)),
                      l &&
                        h.chunks &&
                        (e.settings.send_chunk_number
                          ? ((r.chunk = Math.ceil(f / l)),
                            (r.chunks = Math.ceil(a.size / l)))
                          : ((r.offset = f), (r.total = a.size))),
                      e.trigger("BeforeChunkUpload", i, r, t, f) && s(r, t, n));
                  }
                  function s(s, l, m) {
                    var g;
                    (T = new t.xhr.XMLHttpRequest()).upload &&
                      (T.upload.onprogress = function (t) {
                        (i.loaded = Math.min(i.size, f + t.loaded)),
                          e.trigger("UploadProgress", i);
                      }),
                      (T.onload = function () {
                        return T.status < 200 || T.status >= 400
                          ? void n()
                          : ((d = e.settings.max_retries),
                            m < a.size
                              ? (l.destroy(),
                                (f += m),
                                (i.loaded = Math.min(f, a.size)),
                                e.trigger("ChunkUploaded", i, {
                                  offset: i.loaded,
                                  total: a.size,
                                  response: T.responseText,
                                  status: T.status,
                                  responseHeaders: T.getAllResponseHeaders(),
                                }),
                                "Android Browser" === u.ua.browser &&
                                  e.trigger("UploadProgress", i))
                              : (i.loaded = i.size),
                            (l = g = null),
                            void (!f || f >= a.size
                              ? (i.size != i.origSize &&
                                  (a.destroy(), (a = null)),
                                e.trigger("UploadProgress", i),
                                (i.status = u.DONE),
                                (i.completeTimestamp = +new Date()),
                                e.trigger("FileUploaded", i, {
                                  response: T.responseText,
                                  status: T.status,
                                  responseHeaders: T.getAllResponseHeaders(),
                                }))
                              : r(o, 1)));
                      }),
                      (T.onerror = function () {
                        n();
                      }),
                      (T.onloadend = function () {
                        this.destroy();
                      }),
                      e.settings.multipart && h.multipart
                        ? (T.open(e.settings.http_method, c, !0),
                          u.each(e.settings.headers, function (e, t) {
                            T.setRequestHeader(t, e);
                          }),
                          (g = new t.xhr.FormData()),
                          u.each(
                            u.extend(s, e.settings.multipart_params),
                            function (e, t) {
                              g.append(t, e);
                            }
                          ),
                          g.append(e.settings.file_data_name, l),
                          T.send(g, p))
                        : ((c = u.buildUrl(
                            e.settings.url,
                            u.extend(s, e.settings.multipart_params)
                          )),
                          T.open(e.settings.http_method, c, !0),
                          u.each(e.settings.headers, function (e, t) {
                            T.setRequestHeader(t, e);
                          }),
                          T.hasRequestHeader("Content-Type") ||
                            T.setRequestHeader(
                              "Content-Type",
                              "application/octet-stream"
                            ),
                          T.send(l, p));
                  }
                  var a,
                    c = e.settings.url,
                    l = e.settings.chunk_size,
                    d = e.settings.max_retries,
                    h = e.features,
                    f = 0,
                    p = {
                      runtime_order: e.settings.runtimes,
                      required_caps: e.settings.required_features,
                      preferred_caps: D,
                      swf_url: e.settings.flash_swf_url,
                      xap_url: e.settings.silverlight_xap_url,
                    };
                  i.loaded &&
                    (f = i.loaded = l ? l * Math.floor(i.loaded / l) : 0),
                    (a = i.getSource()),
                    u.isEmptyObj(e.settings.resize) ||
                    -1 === u.inArray(a.type, ["image/jpeg", "image/png"])
                      ? o()
                      : m(a, e.settings.resize, p, function (e) {
                          (a = e), (i.size = e.size), o();
                        });
                }
                function x(e, t) {
                  c(t);
                }
                function y(e) {
                  if (e.state == u.STARTED) I = +new Date();
                  else if (e.state == u.STOPPED)
                    for (var t = e.files.length - 1; t >= 0; t--)
                      e.files[t].status == u.UPLOADING &&
                        ((e.files[t].status = u.QUEUED), l());
                }
                function w() {
                  T && T.abort();
                }
                function E(e) {
                  l(),
                    r(function () {
                      s.call(e);
                    }, 1);
                }
                function _(e, t) {
                  t.code === u.INIT_ERROR
                    ? e.destroy()
                    : t.code === u.HTTP_ERROR &&
                      ((t.file.status = u.FAILED),
                      (t.file.completeTimestamp = +new Date()),
                      c(t.file),
                      e.state == u.STARTED &&
                        (e.trigger("CancelUpload"),
                        r(function () {
                          s.call(e);
                        }, 1)));
                }
                function b(e) {
                  e.stop(),
                    u.each(O, function (e) {
                      e.destroy();
                    }),
                    (O = []),
                    C.length &&
                      (u.each(C, function (e) {
                        e.destroy();
                      }),
                      (C = [])),
                    N.length &&
                      (u.each(N, function (e) {
                        e.destroy();
                      }),
                      (N = [])),
                    (D = {}),
                    (F = !1),
                    (I = T = null),
                    A.reset();
                }
                var R,
                  I,
                  A,
                  T,
                  S = u.guid(),
                  O = [],
                  D = {},
                  C = [],
                  N = [],
                  F = !1;
                (R = {
                  chunk_size: 0,
                  file_data_name: "file",
                  filters: {
                    mime_types: [],
                    max_file_size: 0,
                    prevent_duplicates: !1,
                    prevent_empty: !0,
                  },
                  flash_swf_url: "js/Moxie.swf",
                  http_method: "POST",
                  max_retries: 0,
                  multipart: !0,
                  multi_selection: !0,
                  resize: !1,
                  runtimes: a.order,
                  send_file_name: !0,
                  send_chunk_number: !0,
                  silverlight_xap_url: "js/Moxie.xap",
                }),
                  p.call(this, e, null, !0),
                  (A = new u.QueueProgress()),
                  u.extend(this, {
                    id: S,
                    uid: S,
                    state: u.STOPPED,
                    features: {},
                    runtime: null,
                    files: O,
                    settings: R,
                    total: A,
                    init: function () {
                      var e,
                        t,
                        i = this;
                      return (
                        "function" == typeof (e = i.getOption("preinit"))
                          ? e(i)
                          : u.each(e, function (e, t) {
                              i.bind(t, e);
                            }),
                        h.call(i),
                        u.each(
                          ["container", "browse_button", "drop_element"],
                          function (e) {
                            return null === i.getOption(e)
                              ? ((t = {
                                  code: u.INIT_ERROR,
                                  message: u.sprintf(
                                    u.translate(
                                      "%s specified, but cannot be found."
                                    ),
                                    e
                                  ),
                                }),
                                !1)
                              : void 0;
                          }
                        ),
                        t
                          ? i.trigger("Error", t)
                          : R.browse_button || R.drop_element
                          ? void f.call(i, R, function (e) {
                              var t = i.getOption("init");
                              "function" == typeof t
                                ? t(i)
                                : u.each(t, function (e, t) {
                                    i.bind(t, e);
                                  }),
                                e
                                  ? ((i.runtime = a.getInfo(d()).type),
                                    i.trigger("Init", {
                                      runtime: i.runtime,
                                    }),
                                    i.trigger("PostInit"))
                                  : i.trigger("Error", {
                                      code: u.INIT_ERROR,
                                      message: u.translate("Init error."),
                                    });
                            })
                          : i.trigger("Error", {
                              code: u.INIT_ERROR,
                              message: u.translate(
                                "You must specify either browse_button or drop_element."
                              ),
                            })
                      );
                    },
                    setOption: function (e, t) {
                      p.call(this, e, t, !this.runtime);
                    },
                    getOption: function (e) {
                      return e ? R[e] : R;
                    },
                    refresh: function () {
                      C.length &&
                        u.each(C, function (e) {
                          e.trigger("Refresh");
                        }),
                        this.trigger("Refresh");
                    },
                    start: function () {
                      this.state != u.STARTED &&
                        ((this.state = u.STARTED),
                        this.trigger("StateChanged"),
                        s.call(this));
                    },
                    stop: function () {
                      this.state != u.STOPPED &&
                        ((this.state = u.STOPPED),
                        this.trigger("StateChanged"),
                        this.trigger("CancelUpload"));
                    },
                    disableBrowse: function () {
                      (F = arguments[0] === i || arguments[0]),
                        C.length &&
                          u.each(C, function (e) {
                            e.disable(F);
                          }),
                        this.trigger("DisableBrowse", F);
                    },
                    getFile: function (e) {
                      var t;
                      for (t = O.length - 1; t >= 0; t--)
                        if (O[t].id === e) return O[t];
                    },
                    addFile: function (e, i) {
                      function n(e, t) {
                        var i = [];
                        u.each(a.settings.filters, function (t, n) {
                          o[n] &&
                            i.push(function (i) {
                              o[n].call(a, t, e, function (e) {
                                i(!e);
                              });
                            });
                        }),
                          u.inSeries(i, t);
                      }
                      var s,
                        a = this,
                        c = [],
                        l = [];
                      (s = d()),
                        (function e(o) {
                          var d = u.typeOf(o);
                          if (o instanceof t.file.File) {
                            if (!o.ruid && !o.isDetached()) {
                              if (!s) return !1;
                              (o.ruid = s), o.connectRuntime(s);
                            }
                            e(new u.File(o));
                          } else
                            o instanceof t.file.Blob
                              ? (e(o.getSource()), o.destroy())
                              : o instanceof u.File
                              ? (i && (o.name = i),
                                c.push(function (e) {
                                  n(o, function (t) {
                                    t ||
                                      (O.push(o),
                                      l.push(o),
                                      a.trigger("FileFiltered", o)),
                                      r(e, 1);
                                  });
                                }))
                              : -1 !== u.inArray(d, ["file", "blob"])
                              ? e(new t.file.File(null, o))
                              : "node" === d && "filelist" === u.typeOf(o.files)
                              ? u.each(o.files, e)
                              : "array" === d && ((i = null), u.each(o, e));
                        })(e),
                        c.length &&
                          u.inSeries(c, function () {
                            l.length && a.trigger("FilesAdded", l);
                          });
                    },
                    removeFile: function (e) {
                      for (
                        var t = "string" == typeof e ? e : e.id,
                          i = O.length - 1;
                        i >= 0;
                        i--
                      )
                        if (O[i].id === t) return this.splice(i, 1)[0];
                    },
                    splice: function (e, t) {
                      var n = O.splice(e === i ? 0 : e, t === i ? O.length : t),
                        r = !1;
                      return (
                        this.state == u.STARTED &&
                          (u.each(n, function (e) {
                            return e.status === u.UPLOADING
                              ? ((r = !0), !1)
                              : void 0;
                          }),
                          r && this.stop()),
                        this.trigger("FilesRemoved", n),
                        u.each(n, function (e) {
                          e.destroy();
                        }),
                        r && this.start(),
                        n
                      );
                    },
                    dispatchEvent: function (e) {
                      var t, i;
                      if (
                        ((e = e.toLowerCase()), (t = this.hasEventListener(e)))
                      ) {
                        t.sort(function (e, t) {
                          return t.priority - e.priority;
                        }),
                          (i = [].slice.call(arguments)).shift(),
                          i.unshift(this);
                        for (var n = 0; n < t.length; n++)
                          if (!1 === t[n].fn.apply(t[n].scope, i)) return !1;
                      }
                      return !0;
                    },
                    bind: function (e, t, i, n) {
                      u.Uploader.prototype.bind.call(this, e, t, n, i);
                    },
                    destroy: function () {
                      this.trigger("Destroy"), (R = A = null), this.unbindAll();
                    },
                  });
              }),
              (u.Uploader.prototype = t.core.EventTarget.instance),
              (u.File = (function () {
                var e = {};
                return function (t) {
                  u.extend(this, {
                    id: u.guid(),
                    name: t.name || t.fileName,
                    type: t.type || "",
                    relativePath: t.relativePath || "",
                    size: t.fileSize || t.size,
                    origSize: t.fileSize || t.size,
                    loaded: 0,
                    percent: 0,
                    status: u.QUEUED,
                    lastModifiedDate:
                      t.lastModifiedDate || new Date().toLocaleString(),
                    completeTimestamp: 0,
                    getNative: function () {
                      var e = this.getSource().getSource();
                      return -1 !== u.inArray(u.typeOf(e), ["blob", "file"])
                        ? e
                        : null;
                    },
                    getSource: function () {
                      return e[this.id] ? e[this.id] : null;
                    },
                    destroy: function () {
                      var t = this.getSource();
                      t && (t.destroy(), delete e[this.id]);
                    },
                  }),
                    (e[this.id] = t);
                };
              })()),
              (u.QueueProgress = function () {
                var e = this;
                (e.size = 0),
                  (e.loaded = 0),
                  (e.uploaded = 0),
                  (e.failed = 0),
                  (e.queued = 0),
                  (e.percent = 0),
                  (e.bytesPerSec = 0),
                  (e.reset = function () {
                    e.size =
                      e.loaded =
                      e.uploaded =
                      e.failed =
                      e.queued =
                      e.percent =
                      e.bytesPerSec =
                        0;
                  });
              }),
              (e.plupload = u);
          })(this, e);
        });
    },
  },
]);
