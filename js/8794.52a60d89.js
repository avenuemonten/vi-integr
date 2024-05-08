"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [8794],
  {
    127523: function (e, t, n) {
      e = n.nmd(e);
      var i,
        o = n(619755);
      function a(e) {
        return (
          (a =
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
          a(e)
        );
      }
      var r = !1,
        s = function e(t) {
          return t instanceof e
            ? t
            : this instanceof e
            ? void (this.EXIFwrapped = t)
            : new e(t);
        };
      e.exports && (t = e.exports = s), (t.EXIF = s);
      var l = (s.Tags = {
          36864: "ExifVersion",
          40960: "FlashpixVersion",
          40961: "ColorSpace",
          40962: "PixelXDimension",
          40963: "PixelYDimension",
          37121: "ComponentsConfiguration",
          37122: "CompressedBitsPerPixel",
          37500: "MakerNote",
          37510: "UserComment",
          40964: "RelatedSoundFile",
          36867: "DateTimeOriginal",
          36868: "DateTimeDigitized",
          37520: "SubsecTime",
          37521: "SubsecTimeOriginal",
          37522: "SubsecTimeDigitized",
          33434: "ExposureTime",
          33437: "FNumber",
          34850: "ExposureProgram",
          34852: "SpectralSensitivity",
          34855: "ISOSpeedRatings",
          34856: "OECF",
          37377: "ShutterSpeedValue",
          37378: "ApertureValue",
          37379: "BrightnessValue",
          37380: "ExposureBias",
          37381: "MaxApertureValue",
          37382: "SubjectDistance",
          37383: "MeteringMode",
          37384: "LightSource",
          37385: "Flash",
          37396: "SubjectArea",
          37386: "FocalLength",
          41483: "FlashEnergy",
          41484: "SpatialFrequencyResponse",
          41486: "FocalPlaneXResolution",
          41487: "FocalPlaneYResolution",
          41488: "FocalPlaneResolutionUnit",
          41492: "SubjectLocation",
          41493: "ExposureIndex",
          41495: "SensingMethod",
          41728: "FileSource",
          41729: "SceneType",
          41730: "CFAPattern",
          41985: "CustomRendered",
          41986: "ExposureMode",
          41987: "WhiteBalance",
          41988: "DigitalZoomRation",
          41989: "FocalLengthIn35mmFilm",
          41990: "SceneCaptureType",
          41991: "GainControl",
          41992: "Contrast",
          41993: "Saturation",
          41994: "Sharpness",
          41995: "DeviceSettingDescription",
          41996: "SubjectDistanceRange",
          40965: "InteroperabilityIFDPointer",
          42016: "ImageUniqueID",
        }),
        c = (s.TiffTags = {
          256: "ImageWidth",
          257: "ImageHeight",
          34665: "ExifIFDPointer",
          34853: "GPSInfoIFDPointer",
          40965: "InteroperabilityIFDPointer",
          258: "BitsPerSample",
          259: "Compression",
          262: "PhotometricInterpretation",
          274: "Orientation",
          277: "SamplesPerPixel",
          284: "PlanarConfiguration",
          530: "YCbCrSubSampling",
          531: "YCbCrPositioning",
          282: "XResolution",
          283: "YResolution",
          296: "ResolutionUnit",
          273: "StripOffsets",
          278: "RowsPerStrip",
          279: "StripByteCounts",
          513: "JPEGInterchangeFormat",
          514: "JPEGInterchangeFormatLength",
          301: "TransferFunction",
          318: "WhitePoint",
          319: "PrimaryChromaticities",
          529: "YCbCrCoefficients",
          532: "ReferenceBlackWhite",
          306: "DateTime",
          270: "ImageDescription",
          271: "Make",
          272: "Model",
          305: "Software",
          315: "Artist",
          33432: "Copyright",
        }),
        d = (s.GPSTags = {
          0: "GPSVersionID",
          1: "GPSLatitudeRef",
          2: "GPSLatitude",
          3: "GPSLongitudeRef",
          4: "GPSLongitude",
          5: "GPSAltitudeRef",
          6: "GPSAltitude",
          7: "GPSTimeStamp",
          8: "GPSSatellites",
          9: "GPSStatus",
          10: "GPSMeasureMode",
          11: "GPSDOP",
          12: "GPSSpeedRef",
          13: "GPSSpeed",
          14: "GPSTrackRef",
          15: "GPSTrack",
          16: "GPSImgDirectionRef",
          17: "GPSImgDirection",
          18: "GPSMapDatum",
          19: "GPSDestLatitudeRef",
          20: "GPSDestLatitude",
          21: "GPSDestLongitudeRef",
          22: "GPSDestLongitude",
          23: "GPSDestBearingRef",
          24: "GPSDestBearing",
          25: "GPSDestDistanceRef",
          26: "GPSDestDistance",
          27: "GPSProcessingMethod",
          28: "GPSAreaInformation",
          29: "GPSDateStamp",
          30: "GPSDifferential",
        }),
        u = (s.IFD1Tags = {
          256: "ImageWidth",
          257: "ImageHeight",
          258: "BitsPerSample",
          259: "Compression",
          262: "PhotometricInterpretation",
          273: "StripOffsets",
          274: "Orientation",
          277: "SamplesPerPixel",
          278: "RowsPerStrip",
          279: "StripByteCounts",
          282: "XResolution",
          283: "YResolution",
          284: "PlanarConfiguration",
          296: "ResolutionUnit",
          513: "JpegIFOffset",
          514: "JpegIFByteCount",
          529: "YCbCrCoefficients",
          530: "YCbCrSubSampling",
          531: "YCbCrPositioning",
          532: "ReferenceBlackWhite",
        }),
        p = (s.StringValues = {
          ExposureProgram: {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode",
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
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
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
          SensingMethod: {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor",
          },
          SceneCaptureType: {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night scene",
          },
          SceneType: {
            1: "Directly photographed",
          },
          CustomRendered: {
            0: "Normal process",
            1: "Custom process",
          },
          WhiteBalance: {
            0: "Auto white balance",
            1: "Manual white balance",
          },
          GainControl: {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down",
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
          SubjectDistanceRange: {
            0: "Unknown",
            1: "Macro",
            2: "Close view",
            3: "Distant view",
          },
          FileSource: {
            3: "DSC",
          },
          Components: {
            0: "",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B",
          },
        });
      function f(e) {
        return !!e.exifdata;
      }
      function h(e, t) {
        function n(n) {
          var i = m(n);
          e.exifdata = i || {};
          var o = (function (e) {
            var t = new DataView(e);
            r && console.log("Got file of length " + e.byteLength);
            if (255 != t.getUint8(0) || 216 != t.getUint8(1))
              return r && console.log("Not a valid JPEG"), !1;
            var n = 2,
              i = e.byteLength,
              o = function (e, t) {
                return (
                  56 === e.getUint8(t) &&
                  66 === e.getUint8(t + 1) &&
                  73 === e.getUint8(t + 2) &&
                  77 === e.getUint8(t + 3) &&
                  4 === e.getUint8(t + 4) &&
                  4 === e.getUint8(t + 5)
                );
              };
            for (; n < i; ) {
              if (o(t, n)) {
                var a = t.getUint8(n + 7);
                return (
                  a % 2 != 0 && (a += 1),
                  0 === a && (a = 4),
                  v(e, n + 8 + a, t.getUint16(n + 6 + a))
                );
              }
              n++;
            }
          })(n);
          if (((e.iptcdata = o || {}), s.isXmpEnabled)) {
            var a = (function (e) {
              if (!("DOMParser" in self)) return;
              var t = new DataView(e);
              r && console.log("Got file of length " + e.byteLength);
              if (255 != t.getUint8(0) || 216 != t.getUint8(1))
                return r && console.log("Not a valid JPEG"), !1;
              var n = 2,
                i = e.byteLength,
                o = new DOMParser();
              for (; n < i - 4; ) {
                if ("http" == y(t, n, 4)) {
                  var a = n - 1,
                    s = t.getUint16(n - 2) - 1,
                    l = y(t, a, s),
                    c = l.indexOf("xmpmeta>") + 8,
                    d =
                      (l = l.substring(l.indexOf("<x:xmpmeta"), c)).indexOf(
                        "x:xmpmeta"
                      ) + 10;
                  return (
                    (l =
                      l.slice(0, d) +
                      'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' +
                      l.slice(d)),
                    C(o.parseFromString(l, "text/xml"))
                  );
                }
                n++;
              }
            })(n);
            e.xmpdata = a || {};
          }
          t && t.call(e);
        }
        if (e.src)
          if (/^data\:/i.test(e.src))
            n(
              (function (e, t) {
                (t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || ""),
                  (e = e.replace(/^data\:([^\;]+)\;base64,/gim, ""));
                for (
                  var n = atob(e),
                    i = n.length,
                    o = new ArrayBuffer(i),
                    a = new Uint8Array(o),
                    r = 0;
                  r < i;
                  r++
                )
                  a[r] = n.charCodeAt(r);
                return o;
              })(e.src)
            );
          else if (/^blob\:/i.test(e.src)) {
            ((o = new FileReader()).onload = function (e) {
              n(e.target.result);
            }),
              (function (e, t) {
                var n = new XMLHttpRequest();
                n.open("GET", e, !0),
                  (n.responseType = "blob"),
                  (n.onload = function (e) {
                    (200 != this.status && 0 !== this.status) ||
                      t(this.response);
                  }),
                  n.send();
              })(e.src, function (e) {
                o.readAsArrayBuffer(e);
              });
          } else {
            var i = new XMLHttpRequest();
            (i.onload = function () {
              if (200 != this.status && 0 !== this.status)
                throw "Could not load image";
              n(i.response), (i = null);
            }),
              i.open("GET", e.src, !0),
              (i.responseType = "arraybuffer"),
              i.send(null);
          }
        else if (
          self.FileReader &&
          (e instanceof self.Blob || e instanceof self.File)
        ) {
          var o;
          ((o = new FileReader()).onload = function (e) {
            r &&
              console.log("Got file of length " + e.target.result.byteLength),
              n(e.target.result);
          }),
            o.readAsArrayBuffer(e);
        }
      }
      function m(e) {
        var t = new DataView(e);
        if (
          (r && console.log("Got file of length " + e.byteLength),
          255 != t.getUint8(0) || 216 != t.getUint8(1))
        )
          return r && console.log("Not a valid JPEG"), !1;
        for (var n, i = 2, o = e.byteLength; i < o; ) {
          if (255 != t.getUint8(i))
            return (
              r &&
                console.log(
                  "Not a valid marker at offset " +
                    i +
                    ", found: " +
                    t.getUint8(i)
                ),
              !1
            );
          if (((n = t.getUint8(i + 1)), r && console.log(n), 225 == n))
            return (
              r && console.log("Found 0xFFE1 marker"),
              k(t, i + 4, t.getUint16(i + 2))
            );
          i += 2 + t.getUint16(i + 2);
        }
      }
      var g = {
        120: "caption",
        110: "credit",
        25: "keywords",
        55: "dateCreated",
        80: "byline",
        85: "bylineTitle",
        122: "captionWriter",
        105: "headline",
        116: "copyright",
        15: "category",
      };
      function v(e, t, n) {
        for (var i, o, a, r, s = new DataView(e), l = {}, c = t; c < t + n; )
          28 === s.getUint8(c) &&
            2 === s.getUint8(c + 1) &&
            (r = s.getUint8(c + 2)) in g &&
            ((a = s.getInt16(c + 3)) + 5,
            (o = g[r]),
            (i = y(s, c + 5, a)),
            l.hasOwnProperty(o)
              ? l[o] instanceof Array
                ? l[o].push(i)
                : (l[o] = [l[o], i])
              : (l[o] = i)),
            c++;
        return l;
      }
      function _(e, t, n, i, o) {
        var a,
          s,
          l,
          c = e.getUint16(n, !o),
          d = {};
        for (l = 0; l < c; l++)
          (a = n + 12 * l + 2),
            !(s = i[e.getUint16(a, !o)]) &&
              r &&
              console.log("Unknown tag: " + e.getUint16(a, !o)),
            (d[s] = b(e, a, t, n, o));
        return d;
      }
      function b(e, t, n, i, o) {
        var a,
          r,
          s,
          l,
          c,
          d,
          u = e.getUint16(t + 2, !o),
          p = e.getUint32(t + 4, !o),
          f = e.getUint32(t + 8, !o) + n;
        switch (u) {
          case 1:
          case 7:
            if (1 == p) return e.getUint8(t + 8, !o);
            for (a = p > 4 ? f : t + 8, r = [], l = 0; l < p; l++)
              r[l] = e.getUint8(a + l);
            return r;
          case 2:
            return y(e, (a = p > 4 ? f : t + 8), p - 1);
          case 3:
            if (1 == p) return e.getUint16(t + 8, !o);
            for (a = p > 2 ? f : t + 8, r = [], l = 0; l < p; l++)
              r[l] = e.getUint16(a + 2 * l, !o);
            return r;
          case 4:
            if (1 == p) return e.getUint32(t + 8, !o);
            for (r = [], l = 0; l < p; l++) r[l] = e.getUint32(f + 4 * l, !o);
            return r;
          case 5:
            if (1 == p)
              return (
                (c = e.getUint32(f, !o)),
                (d = e.getUint32(f + 4, !o)),
                ((s = new Number(c / d)).numerator = c),
                (s.denominator = d),
                s
              );
            for (r = [], l = 0; l < p; l++)
              (c = e.getUint32(f + 8 * l, !o)),
                (d = e.getUint32(f + 4 + 8 * l, !o)),
                (r[l] = new Number(c / d)),
                (r[l].numerator = c),
                (r[l].denominator = d);
            return r;
          case 9:
            if (1 == p) return e.getInt32(t + 8, !o);
            for (r = [], l = 0; l < p; l++) r[l] = e.getInt32(f + 4 * l, !o);
            return r;
          case 10:
            if (1 == p) return e.getInt32(f, !o) / e.getInt32(f + 4, !o);
            for (r = [], l = 0; l < p; l++)
              r[l] = e.getInt32(f + 8 * l, !o) / e.getInt32(f + 4 + 8 * l, !o);
            return r;
        }
      }
      function y(e, t, n) {
        for (var i = "", o = t; o < t + n; o++)
          i += String.fromCharCode(e.getUint8(o));
        return i;
      }
      function k(e, t) {
        if ("Exif" != y(e, t, 4))
          return r && console.log("Not valid EXIF data! " + y(e, t, 4)), !1;
        var n,
          i,
          o,
          a,
          s,
          f = t + 6;
        if (18761 == e.getUint16(f)) n = !1;
        else {
          if (19789 != e.getUint16(f))
            return (
              r && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1
            );
          n = !0;
        }
        if (42 != e.getUint16(f + 2, !n))
          return r && console.log("Not valid TIFF data! (no 0x002A)"), !1;
        var h = e.getUint32(f + 4, !n);
        if (h < 8)
          return (
            r &&
              console.log(
                "Not valid TIFF data! (First offset less than 8)",
                e.getUint32(f + 4, !n)
              ),
            !1
          );
        if ((i = _(e, f, f + h, c, n)).ExifIFDPointer)
          for (o in (a = _(e, f, f + i.ExifIFDPointer, l, n))) {
            switch (o) {
              case "LightSource":
              case "Flash":
              case "MeteringMode":
              case "ExposureProgram":
              case "SensingMethod":
              case "SceneCaptureType":
              case "SceneType":
              case "CustomRendered":
              case "WhiteBalance":
              case "GainControl":
              case "Contrast":
              case "Saturation":
              case "Sharpness":
              case "SubjectDistanceRange":
              case "FileSource":
                a[o] = p[o][a[o]];
                break;
              case "ExifVersion":
              case "FlashpixVersion":
                a[o] = String.fromCharCode(a[o][0], a[o][1], a[o][2], a[o][3]);
                break;
              case "ComponentsConfiguration":
                a[o] =
                  p.Components[a[o][0]] +
                  p.Components[a[o][1]] +
                  p.Components[a[o][2]] +
                  p.Components[a[o][3]];
            }
            i[o] = a[o];
          }
        if (i.GPSInfoIFDPointer)
          for (o in (s = _(e, f, f + i.GPSInfoIFDPointer, d, n))) {
            if ("GPSVersionID" === o)
              s[o] = s[o][0] + "." + s[o][1] + "." + s[o][2] + "." + s[o][3];
            i[o] = s[o];
          }
        return (
          (i.thumbnail = (function (e, t, n, i) {
            var o = (function (e, t, n) {
              var i = e.getUint16(t, !n);
              return e.getUint32(t + 2 + 12 * i, !n);
            })(e, t + n, i);
            if (!o) return {};
            if (o > e.byteLength) return {};
            var a = _(e, t, t + o, u, i);
            if (a.Compression)
              switch (a.Compression) {
                case 6:
                  if (a.JpegIFOffset && a.JpegIFByteCount) {
                    var r = t + a.JpegIFOffset,
                      s = a.JpegIFByteCount;
                    a.blob = new Blob([new Uint8Array(e.buffer, r, s)], {
                      type: "image/jpeg",
                    });
                  }
                  break;
                case 1:
                  console.log(
                    "Thumbnail image format is TIFF, which is not implemented."
                  );
                  break;
                default:
                  console.log(
                    "Unknown thumbnail image format '%s'",
                    a.Compression
                  );
              }
            else
              2 == a.PhotometricInterpretation &&
                console.log(
                  "Thumbnail image format is RGB, which is not implemented."
                );
            return a;
          })(e, f, h, n)),
          i
        );
      }
      function w(e) {
        var t = {};
        if (1 == e.nodeType) {
          if (e.attributes.length > 0) {
            t["@attributes"] = {};
            for (var n = 0; n < e.attributes.length; n++) {
              var i = e.attributes.item(n);
              t["@attributes"][i.nodeName] = i.nodeValue;
            }
          }
        } else if (3 == e.nodeType) return e.nodeValue;
        if (e.hasChildNodes())
          for (var o = 0; o < e.childNodes.length; o++) {
            var a = e.childNodes.item(o),
              r = a.nodeName;
            if (null == t[r]) t[r] = w(a);
            else {
              if (null == t[r].push) {
                var s = t[r];
                (t[r] = []), t[r].push(s);
              }
              t[r].push(w(a));
            }
          }
        return t;
      }
      function C(e) {
        try {
          var t = {};
          if (e.children.length > 0)
            for (var n = 0; n < e.children.length; n++) {
              var i = e.children.item(n),
                o = i.attributes;
              for (var a in o) {
                var r = o[a],
                  s = r.nodeName,
                  l = r.nodeValue;
                void 0 !== s && (t[s] = l);
              }
              var c = i.nodeName;
              if (void 0 === t[c]) t[c] = w(i);
              else {
                if (void 0 === t[c].push) {
                  var d = t[c];
                  (t[c] = []), t[c].push(d);
                }
                t[c].push(w(i));
              }
            }
          else t = e.textContent;
          return t;
        } catch (e) {
          console.log(e.message);
        }
      }
      (s.enableXmp = function () {
        s.isXmpEnabled = !0;
      }),
        (s.disableXmp = function () {
          s.isXmpEnabled = !1;
        }),
        (s.getData = function (e, t) {
          return (
            !(
              ((self.Image && e instanceof self.Image) ||
                (self.HTMLImageElement &&
                  e instanceof self.HTMLImageElement)) &&
              !e.complete
            ) && (f(e) ? t && t.call(e) : h(e, t), !0)
          );
        }),
        (s.getTag = function (e, t) {
          if (f(e)) return e.exifdata[t];
        }),
        (s.getIptcTag = function (e, t) {
          if (f(e)) return e.iptcdata[t];
        }),
        (s.getAllTags = function (e) {
          if (!f(e)) return {};
          var t,
            n = e.exifdata,
            i = {};
          for (t in n) n.hasOwnProperty(t) && (i[t] = n[t]);
          return i;
        }),
        (s.getAllIptcTags = function (e) {
          if (!f(e)) return {};
          var t,
            n = e.iptcdata,
            i = {};
          for (t in n) n.hasOwnProperty(t) && (i[t] = n[t]);
          return i;
        }),
        (s.pretty = function (e) {
          if (!f(e)) return "";
          var t,
            n = e.exifdata,
            i = "";
          for (t in n)
            n.hasOwnProperty(t) &&
              ("object" == a(n[t])
                ? n[t] instanceof Number
                  ? (i +=
                      t +
                      " : " +
                      n[t] +
                      " [" +
                      n[t].numerator +
                      "/" +
                      n[t].denominator +
                      "]\r\n")
                  : (i += t + " : [" + n[t].length + " values]\r\n")
                : (i += t + " : " + n[t] + "\r\n"));
          return i;
        }),
        (s.readFromBinaryFile = function (e) {
          return m(e);
        }),
        void 0 ===
          (i = function () {
            return s;
          }.apply(t, [])) || (e.exports = i);
      var x = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
      function S(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== a(t) && "function" != typeof t) ? e : t;
      }
      function F(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var M = (function () {
          function e() {
            F(this, e);
          }
          return (
            x(e, [
              {
                key: "on",
                value: function (e, t) {
                  return (
                    (this._callbacks = this._callbacks || {}),
                    this._callbacks[e] || (this._callbacks[e] = []),
                    this._callbacks[e].push(t),
                    this
                  );
                },
              },
              {
                key: "emit",
                value: function (e) {
                  this._callbacks = this._callbacks || {};
                  var t = this._callbacks[e];
                  if (t) {
                    for (
                      var n = arguments.length,
                        i = Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      i[o - 1] = arguments[o];
                    for (var a = 0, r = (r = t); ; ) {
                      if (a >= r.length) break;
                      r[a++].apply(this, i);
                    }
                  }
                  return this;
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  if (!this._callbacks || 0 === arguments.length)
                    return (this._callbacks = {}), this;
                  var n = this._callbacks[e];
                  if (!n) return this;
                  if (1 === arguments.length)
                    return delete this._callbacks[e], this;
                  for (var i = 0; i < n.length; i++) {
                    if (n[i] === t) {
                      n.splice(i, 1);
                      break;
                    }
                  }
                  return this;
                },
              },
            ]),
            e
          );
        })(),
        H = (function (e) {
          function t(e, n) {
            F(this, t);
            var i,
              o = S(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
              a = void 0;
            if (
              ((o.element = e),
              (o.version = t.version),
              (o.defaultOptions.previewTemplate =
                o.defaultOptions.previewTemplate.replace(/\n*/g, "")),
              (o.clickableElements = []),
              (o.listeners = []),
              (o.files = []),
              "string" == typeof o.element &&
                (o.element = document.querySelector(o.element)),
              !o.element || null == o.element.nodeType)
            )
              throw new Error("Invalid dropzone element.");
            if (o.element.dropzone)
              throw new Error("Dropzone already attached.");
            t.instances.push(o), (o.element.dropzone = o);
            var r,
              s = null != (i = t.optionsForElement(o.element)) ? i : {};
            if (
              ((o.options = t.extend(
                {},
                o.defaultOptions,
                s,
                null != n ? n : {}
              )),
              o.options.forceFallback || !t.isBrowserSupported())
            )
              return (r = o.options.fallback.call(o)), S(o, r);
            if (
              (null == o.options.url &&
                (o.options.url = o.element.getAttribute("action")),
              !o.options.url)
            )
              throw new Error("No URL provided.");
            if (o.options.acceptedFiles && o.options.acceptedMimeTypes)
              throw new Error(
                "You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."
              );
            if (o.options.uploadMultiple && o.options.chunking)
              throw new Error(
                "You cannot set both: uploadMultiple and chunking."
              );
            return (
              o.options.acceptedMimeTypes &&
                ((o.options.acceptedFiles = o.options.acceptedMimeTypes),
                delete o.options.acceptedMimeTypes),
              null != o.options.renameFilename &&
                (o.options.renameFile = function (e) {
                  return o.options.renameFilename.call(o, e.name, e);
                }),
              (o.options.method = o.options.method.toUpperCase()),
              (a = o.getExistingFallback()) &&
                a.parentNode &&
                a.parentNode.removeChild(a),
              !1 !== o.options.previewsContainer &&
                (o.options.previewsContainer
                  ? (o.previewsContainer = t.getElement(
                      o.options.previewsContainer,
                      "previewsContainer"
                    ))
                  : (o.previewsContainer = o.element)),
              o.options.clickable &&
                (!0 === o.options.clickable
                  ? (o.clickableElements = [o.element])
                  : (o.clickableElements = t.getElements(
                      o.options.clickable,
                      "clickable"
                    ))),
              o.init(),
              o
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    a(t)
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            x(t, null, [
              {
                key: "initClass",
                value: function () {
                  (this.prototype.Emitter = M),
                    (this.prototype.events = [
                      "drop",
                      "dragstart",
                      "dragend",
                      "dragenter",
                      "dragover",
                      "dragleave",
                      "addedfile",
                      "addedfiles",
                      "removedfile",
                      "thumbnail",
                      "error",
                      "errormultiple",
                      "processing",
                      "processingmultiple",
                      "uploadprogress",
                      "totaluploadprogress",
                      "sending",
                      "sendingmultiple",
                      "success",
                      "successmultiple",
                      "canceled",
                      "canceledmultiple",
                      "complete",
                      "completemultiple",
                      "reset",
                      "maxfilesexceeded",
                      "maxfilesreached",
                      "queuecomplete",
                    ]),
                    (this.prototype.defaultOptions = {
                      url: null,
                      method: "post",
                      withCredentials: !1,
                      timeout: 3e4,
                      parallelUploads: 2,
                      uploadMultiple: !1,
                      chunking: !1,
                      forceChunking: !1,
                      chunkSize: 2e6,
                      parallelChunkUploads: !1,
                      retryChunks: !1,
                      retryChunksLimit: 3,
                      maxFilesize: 256,
                      paramName: "file",
                      createImageThumbnails: !0,
                      maxThumbnailFilesize: 10,
                      thumbnailWidth: 120,
                      thumbnailHeight: 120,
                      thumbnailMethod: "crop",
                      resizeWidth: null,
                      resizeHeight: null,
                      resizeMimeType: null,
                      resizeQuality: 0.8,
                      resizeMethod: "contain",
                      filesizeBase: 1e3,
                      maxFiles: null,
                      headers: null,
                      clickable: !0,
                      ignoreHiddenFiles: !0,
                      acceptedFiles: null,
                      acceptedMimeTypes: null,
                      autoProcessQueue: !0,
                      autoQueue: !0,
                      addRemoveLinks: !1,
                      previewsContainer: null,
                      hiddenInputContainer: "body",
                      capture: null,
                      renameFilename: null,
                      renameFile: null,
                      forceFallback: !1,
                      dictDefaultMessage: "Drop files here to upload",
                      dictFallbackMessage:
                        "Your browser does not support drag'n'drop file uploads.",
                      dictFallbackText:
                        "Please use the fallback form below to upload your files like in the olden days.",
                      dictFileTooBig:
                        "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                      dictInvalidFileType:
                        "You can't upload files of this type.",
                      dictResponseError:
                        "Server responded with {{statusCode}} code.",
                      dictCancelUpload: "Cancel upload",
                      dictUploadCanceled: "Upload canceled.",
                      dictCancelUploadConfirmation:
                        "Are you sure you want to cancel this upload?",
                      dictRemoveFile: "Remove file",
                      dictRemoveFileConfirmation: null,
                      dictMaxFilesExceeded:
                        "You can not upload any more files.",
                      dictFileSizeUnits: {
                        tb: "TB",
                        gb: "GB",
                        mb: "MB",
                        kb: "KB",
                        b: "b",
                      },
                      init: function () {},
                      params: function (e, t, n) {
                        if (n)
                          return {
                            dzuuid: n.file.upload.uuid,
                            dzchunkindex: n.index,
                            dztotalfilesize: n.file.size,
                            dzchunksize: this.options.chunkSize,
                            dztotalchunkcount: n.file.upload.totalChunkCount,
                            dzchunkbyteoffset: n.index * this.options.chunkSize,
                          };
                      },
                      accept: function (e, t) {
                        return t();
                      },
                      chunksUploaded: function (e, t) {
                        t();
                      },
                      fallback: function () {
                        var e = void 0;
                        this.element.className =
                          this.element.className + " dz-browser-not-supported";
                        for (
                          var n = 0,
                            i = (i = this.element.getElementsByTagName("div"));
                          ;

                        ) {
                          if (n >= i.length) break;
                          var o = i[n++];
                          if (/(^| )dz-message($| )/.test(o.className)) {
                            (e = o), (o.className = "dz-message");
                            break;
                          }
                        }
                        e ||
                          ((e = t.createElement(
                            '<div class="dz-message"><span></span></div>'
                          )),
                          this.element.appendChild(e));
                        var a = e.getElementsByTagName("span")[0];
                        return (
                          a &&
                            (null != a.textContent
                              ? (a.textContent =
                                  this.options.dictFallbackMessage)
                              : null != a.innerText &&
                                (a.innerText =
                                  this.options.dictFallbackMessage)),
                          this.element.appendChild(this.getFallbackForm())
                        );
                      },
                      resize: function (e, t, n, i) {
                        var o = {
                            srcX: 0,
                            srcY: 0,
                            srcWidth: e.width,
                            srcHeight: e.height,
                          },
                          a = e.width / e.height;
                        null == t && null == n
                          ? ((t = o.srcWidth), (n = o.srcHeight))
                          : null == t
                          ? (t = n * a)
                          : null == n && (n = t / a);
                        var r =
                          (t = Math.min(t, o.srcWidth)) /
                          (n = Math.min(n, o.srcHeight));
                        if (o.srcWidth > t || o.srcHeight > n)
                          if ("crop" === i)
                            a > r
                              ? ((o.srcHeight = e.height),
                                (o.srcWidth = o.srcHeight * r))
                              : ((o.srcWidth = e.width),
                                (o.srcHeight = o.srcWidth / r));
                          else {
                            if ("contain" !== i)
                              throw new Error(
                                "Unknown resizeMethod '" + i + "'"
                              );
                            a > r ? (n = t / a) : (t = n * a);
                          }
                        return (
                          (o.srcX = (e.width - o.srcWidth) / 2),
                          (o.srcY = (e.height - o.srcHeight) / 2),
                          (o.trgWidth = t),
                          (o.trgHeight = n),
                          o
                        );
                      },
                      transformFile: function (e, t) {
                        return (this.options.resizeWidth ||
                          this.options.resizeHeight) &&
                          e.type.match(/image.*/)
                          ? this.resizeImage(
                              e,
                              this.options.resizeWidth,
                              this.options.resizeHeight,
                              this.options.resizeMethod,
                              t
                            )
                          : t(e);
                      },
                      previewTemplate:
                        '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                      drop: function (e) {
                        return this.element.classList.remove("dz-drag-hover");
                      },
                      dragstart: function (e) {},
                      dragend: function (e) {
                        return this.element.classList.remove("dz-drag-hover");
                      },
                      dragenter: function (e) {
                        return this.element.classList.add("dz-drag-hover");
                      },
                      dragover: function (e) {
                        return this.element.classList.add("dz-drag-hover");
                      },
                      dragleave: function (e) {
                        return this.element.classList.remove("dz-drag-hover");
                      },
                      paste: function (e) {},
                      reset: function () {
                        return this.element.classList.remove("dz-started");
                      },
                      addedfile: function (e) {
                        var n = this;
                        if (
                          (this.element === this.previewsContainer &&
                            this.element.classList.add("dz-started"),
                          this.previewsContainer)
                        ) {
                          (e.previewElement = t.createElement(
                            this.options.previewTemplate.trim()
                          )),
                            (e.previewTemplate = e.previewElement),
                            this.previewsContainer.appendChild(
                              e.previewElement
                            );
                          for (
                            var i = 0,
                              o = (o =
                                e.previewElement.querySelectorAll(
                                  "[data-dz-name]"
                                ));
                            ;

                          ) {
                            if (i >= o.length) break;
                            var a = o[i++];
                            a.textContent = e.name;
                          }
                          for (
                            var r = 0,
                              s = (s =
                                e.previewElement.querySelectorAll(
                                  "[data-dz-size]"
                                ));
                            !(r >= s.length);

                          )
                            (a = s[r++]).innerHTML = this.filesize(e.size);
                          this.options.addRemoveLinks &&
                            ((e._removeLink = t.createElement(
                              '<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' +
                                this.options.dictRemoveFile +
                                "</a>"
                            )),
                            e.previewElement.appendChild(e._removeLink));
                          for (
                            var l = function (i) {
                                return (
                                  i.preventDefault(),
                                  i.stopPropagation(),
                                  e.status === t.UPLOADING
                                    ? t.confirm(
                                        n.options.dictCancelUploadConfirmation,
                                        function () {
                                          return n.removeFile(e);
                                        }
                                      )
                                    : n.options.dictRemoveFileConfirmation
                                    ? t.confirm(
                                        n.options.dictRemoveFileConfirmation,
                                        function () {
                                          return n.removeFile(e);
                                        }
                                      )
                                    : n.removeFile(e)
                                );
                              },
                              c = 0,
                              d = (d =
                                e.previewElement.querySelectorAll(
                                  "[data-dz-remove]"
                                ));
                            ;

                          ) {
                            if (c >= d.length) break;
                            d[c++].addEventListener("click", l);
                          }
                        }
                      },
                      removedfile: function (e) {
                        return (
                          null != e.previewElement &&
                            null != e.previewElement.parentNode &&
                            e.previewElement.parentNode.removeChild(
                              e.previewElement
                            ),
                          this._updateMaxFilesReachedClass()
                        );
                      },
                      thumbnail: function (e, t) {
                        if (e.previewElement) {
                          e.previewElement.classList.remove("dz-file-preview");
                          for (
                            var n = 0,
                              i = (i = e.previewElement.querySelectorAll(
                                "[data-dz-thumbnail]"
                              ));
                            ;

                          ) {
                            if (n >= i.length) break;
                            var o = i[n++];
                            (o.alt = e.name), (o.src = t);
                          }
                          return setTimeout(function () {
                            return e.previewElement.classList.add(
                              "dz-image-preview"
                            );
                          }, 1);
                        }
                      },
                      error: function (e, t) {
                        if (e.previewElement) {
                          e.previewElement.classList.add("dz-error"),
                            "String" != typeof t && t.error && (t = t.error);
                          for (
                            var n = 0,
                              i = (i = e.previewElement.querySelectorAll(
                                "[data-dz-errormessage]"
                              ));
                            ;

                          ) {
                            if (n >= i.length) break;
                            i[n++].textContent = t;
                          }
                        }
                      },
                      errormultiple: function () {},
                      processing: function (e) {
                        if (
                          e.previewElement &&
                          (e.previewElement.classList.add("dz-processing"),
                          e._removeLink)
                        )
                          return (e._removeLink.innerHTML =
                            this.options.dictCancelUpload);
                      },
                      processingmultiple: function () {},
                      uploadprogress: function (e, t, n) {
                        if (e.previewElement)
                          for (
                            var i = 0,
                              o = (o = e.previewElement.querySelectorAll(
                                "[data-dz-uploadprogress]"
                              ));
                            ;

                          ) {
                            if (i >= o.length) break;
                            var a = o[i++];
                            "PROGRESS" === a.nodeName
                              ? (a.value = t)
                              : (a.style.width = t + "%");
                          }
                      },
                      totaluploadprogress: function () {},
                      sending: function () {},
                      sendingmultiple: function () {},
                      success: function (e) {
                        if (e.previewElement)
                          return e.previewElement.classList.add("dz-success");
                      },
                      successmultiple: function () {},
                      canceled: function (e) {
                        return this.emit(
                          "error",
                          e,
                          this.options.dictUploadCanceled
                        );
                      },
                      canceledmultiple: function () {},
                      complete: function (e) {
                        if (
                          (e._removeLink &&
                            (e._removeLink.innerHTML =
                              this.options.dictRemoveFile),
                          e.previewElement)
                        )
                          return e.previewElement.classList.add("dz-complete");
                      },
                      completemultiple: function () {},
                      maxfilesexceeded: function () {},
                      maxfilesreached: function () {},
                      queuecomplete: function () {},
                      addedfiles: function () {},
                    }),
                    (this.prototype._thumbnailQueue = []),
                    (this.prototype._processingThumbnail = !1);
                },
              },
              {
                key: "extend",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = Array(t > 1 ? t - 1 : 0),
                      i = 1;
                    i < t;
                    i++
                  )
                    n[i - 1] = arguments[i];
                  for (var o = 0, a = (a = n); ; ) {
                    if (o >= a.length) break;
                    var r = a[o++];
                    for (var s in r) {
                      var l = r[s];
                      e[s] = l;
                    }
                  }
                  return e;
                },
              },
            ]),
            x(
              t,
              [
                {
                  key: "getAcceptedFiles",
                  value: function () {
                    return this.files
                      .filter(function (e) {
                        return e.accepted;
                      })
                      .map(function (e) {
                        return e;
                      });
                  },
                },
                {
                  key: "getRejectedFiles",
                  value: function () {
                    return this.files
                      .filter(function (e) {
                        return !e.accepted;
                      })
                      .map(function (e) {
                        return e;
                      });
                  },
                },
                {
                  key: "getFilesWithStatus",
                  value: function (e) {
                    return this.files
                      .filter(function (t) {
                        return t.status === e;
                      })
                      .map(function (e) {
                        return e;
                      });
                  },
                },
                {
                  key: "getQueuedFiles",
                  value: function () {
                    return this.getFilesWithStatus(t.QUEUED);
                  },
                },
                {
                  key: "getUploadingFiles",
                  value: function () {
                    return this.getFilesWithStatus(t.UPLOADING);
                  },
                },
                {
                  key: "getAddedFiles",
                  value: function () {
                    return this.getFilesWithStatus(t.ADDED);
                  },
                },
                {
                  key: "getActiveFiles",
                  value: function () {
                    return this.files
                      .filter(function (e) {
                        return (
                          e.status === t.UPLOADING || e.status === t.QUEUED
                        );
                      })
                      .map(function (e) {
                        return e;
                      });
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    if (
                      ("form" === this.element.tagName &&
                        this.element.setAttribute(
                          "enctype",
                          "multipart/form-data"
                        ),
                      this.element.classList.contains("dropzone") &&
                        !this.element.querySelector(".dz-message") &&
                        this.element.appendChild(
                          t.createElement(
                            '<div class="dz-default dz-message"><span>' +
                              this.options.dictDefaultMessage +
                              "</span></div>"
                          )
                        ),
                      this.clickableElements.length)
                    ) {
                      !(function n() {
                        return (
                          e.hiddenFileInput &&
                            e.hiddenFileInput.parentNode.removeChild(
                              e.hiddenFileInput
                            ),
                          (e.hiddenFileInput = document.createElement("input")),
                          e.hiddenFileInput.setAttribute("type", "file"),
                          (null === e.options.maxFiles ||
                            e.options.maxFiles > 1) &&
                            e.hiddenFileInput.setAttribute(
                              "multiple",
                              "multiple"
                            ),
                          (e.hiddenFileInput.className = "dz-hidden-input"),
                          null !== e.options.acceptedFiles &&
                            e.hiddenFileInput.setAttribute(
                              "accept",
                              e.options.acceptedFiles
                            ),
                          null !== e.options.capture &&
                            e.hiddenFileInput.setAttribute(
                              "capture",
                              e.options.capture
                            ),
                          (e.hiddenFileInput.style.visibility = "hidden"),
                          (e.hiddenFileInput.style.position = "absolute"),
                          (e.hiddenFileInput.style.top = "0"),
                          (e.hiddenFileInput.style.left = "0"),
                          (e.hiddenFileInput.style.height = "0"),
                          (e.hiddenFileInput.style.width = "0"),
                          t
                            .getElement(
                              e.options.hiddenInputContainer,
                              "hiddenInputContainer"
                            )
                            .appendChild(e.hiddenFileInput),
                          e.hiddenFileInput.addEventListener(
                            "change",
                            function () {
                              var t = e.hiddenFileInput.files;
                              if (t.length)
                                for (var i = 0, o = (o = t); ; ) {
                                  if (i >= o.length) break;
                                  var a = o[i++];
                                  e.addFile(a);
                                }
                              return e.emit("addedfiles", t), n();
                            }
                          )
                        );
                      })();
                    }
                    this.URL =
                      null !== window.URL ? window.URL : window.webkitURL;
                    for (var n = 0, i = (i = this.events); ; ) {
                      if (n >= i.length) break;
                      var o = i[n++];
                      this.on(o, this.options[o]);
                    }
                    this.on("uploadprogress", function () {
                      return e.updateTotalUploadProgress();
                    }),
                      this.on("removedfile", function () {
                        return e.updateTotalUploadProgress();
                      }),
                      this.on("canceled", function (t) {
                        return e.emit("complete", t);
                      }),
                      this.on("complete", function (t) {
                        if (
                          0 === e.getAddedFiles().length &&
                          0 === e.getUploadingFiles().length &&
                          0 === e.getQueuedFiles().length
                        )
                          return setTimeout(function () {
                            return e.emit("queuecomplete");
                          }, 0);
                      });
                    var a = function (e) {
                      return (
                        e.stopPropagation(),
                        e.preventDefault
                          ? e.preventDefault()
                          : (e.returnValue = !1)
                      );
                    };
                    return (
                      (this.listeners = [
                        {
                          element: this.element,
                          events: {
                            dragstart: function (t) {
                              return e.emit("dragstart", t);
                            },
                            dragenter: function (t) {
                              return a(t), e.emit("dragenter", t);
                            },
                            dragover: function (t) {
                              var n = void 0;
                              try {
                                n = t.dataTransfer.effectAllowed;
                              } catch (e) {}
                              return (
                                (t.dataTransfer.dropEffect =
                                  "move" === n || "linkMove" === n
                                    ? "move"
                                    : "copy"),
                                a(t),
                                e.emit("dragover", t)
                              );
                            },
                            dragleave: function (t) {
                              return e.emit("dragleave", t);
                            },
                            drop: function (t) {
                              return a(t), e.drop(t);
                            },
                            dragend: function (t) {
                              return e.emit("dragend", t);
                            },
                          },
                        },
                      ]),
                      this.clickableElements.forEach(function (n) {
                        return e.listeners.push({
                          element: n,
                          events: {
                            click: function (i) {
                              return (
                                (n !== e.element ||
                                  i.target === e.element ||
                                  t.elementInside(
                                    i.target,
                                    e.element.querySelector(".dz-message")
                                  )) &&
                                  e.hiddenFileInput.click(),
                                !0
                              );
                            },
                          },
                        });
                      }),
                      this.enable(),
                      this.options.init.call(this)
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return (
                      this.disable(),
                      this.removeAllFiles(!0),
                      (null != this.hiddenFileInput
                        ? this.hiddenFileInput.parentNode
                        : void 0) &&
                        (this.hiddenFileInput.parentNode.removeChild(
                          this.hiddenFileInput
                        ),
                        (this.hiddenFileInput = null)),
                      delete this.element.dropzone,
                      t.instances.splice(t.instances.indexOf(this), 1)
                    );
                  },
                },
                {
                  key: "updateTotalUploadProgress",
                  value: function () {
                    var e = void 0,
                      t = 0,
                      n = 0;
                    if (this.getActiveFiles().length) {
                      for (var i = 0, o = (o = this.getActiveFiles()); ; ) {
                        if (i >= o.length) break;
                        var a = o[i++];
                        (t += a.upload.bytesSent), (n += a.upload.total);
                      }
                      e = (100 * t) / n;
                    } else e = 100;
                    return this.emit("totaluploadprogress", e, n, t);
                  },
                },
                {
                  key: "_getParamName",
                  value: function (e) {
                    return "function" == typeof this.options.paramName
                      ? this.options.paramName(e)
                      : this.options.paramName +
                          (this.options.uploadMultiple ? "[" + e + "]" : "");
                  },
                },
                {
                  key: "_renameFile",
                  value: function (e) {
                    return "function" != typeof this.options.renameFile
                      ? e.name
                      : this.options.renameFile(e);
                  },
                },
                {
                  key: "getFallbackForm",
                  value: function () {
                    var e,
                      n = void 0;
                    if ((e = this.getExistingFallback())) return e;
                    var i = '<div class="dz-fallback">';
                    this.options.dictFallbackText &&
                      (i += "<p>" + this.options.dictFallbackText + "</p>"),
                      (i +=
                        '<input type="file" name="' +
                        this._getParamName(0) +
                        '" ' +
                        (this.options.uploadMultiple
                          ? 'multiple="multiple"'
                          : void 0) +
                        ' /><input type="submit" value="Upload!"></div>');
                    var o = t.createElement(i);
                    return (
                      "FORM" !== this.element.tagName
                        ? (n = t.createElement(
                            '<form action="' +
                              this.options.url +
                              '" enctype="multipart/form-data" method="' +
                              this.options.method +
                              '"></form>'
                          )).appendChild(o)
                        : (this.element.setAttribute(
                            "enctype",
                            "multipart/form-data"
                          ),
                          this.element.setAttribute(
                            "method",
                            this.options.method
                          )),
                      null != n ? n : o
                    );
                  },
                },
                {
                  key: "getExistingFallback",
                  value: function () {
                    for (
                      var e = function (e) {
                          for (var t = 0, n = (n = e); ; ) {
                            if (t >= n.length) break;
                            var i = n[t++];
                            if (/(^| )fallback($| )/.test(i.className))
                              return i;
                          }
                        },
                        t = ["div", "form"],
                        n = 0;
                      n < t.length;
                      n++
                    ) {
                      var i,
                        o = t[n];
                      if ((i = e(this.element.getElementsByTagName(o))))
                        return i;
                    }
                  },
                },
                {
                  key: "setupEventListeners",
                  value: function () {
                    return this.listeners.map(function (e) {
                      return (function () {
                        var t = [];
                        for (var n in e.events) {
                          var i = e.events[n];
                          t.push(e.element.addEventListener(n, i, !1));
                        }
                        return t;
                      })();
                    });
                  },
                },
                {
                  key: "removeEventListeners",
                  value: function () {
                    return this.listeners.map(function (e) {
                      return (function () {
                        var t = [];
                        for (var n in e.events) {
                          var i = e.events[n];
                          t.push(e.element.removeEventListener(n, i, !1));
                        }
                        return t;
                      })();
                    });
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var e = this;
                    return (
                      this.clickableElements.forEach(function (e) {
                        return e.classList.remove("dz-clickable");
                      }),
                      this.removeEventListeners(),
                      (this.disabled = !0),
                      this.files.map(function (t) {
                        return e.cancelUpload(t);
                      })
                    );
                  },
                },
                {
                  key: "enable",
                  value: function () {
                    return (
                      delete this.disabled,
                      this.clickableElements.forEach(function (e) {
                        return e.classList.add("dz-clickable");
                      }),
                      this.setupEventListeners()
                    );
                  },
                },
                {
                  key: "filesize",
                  value: function (e) {
                    var t = 0,
                      n = "b";
                    if (e > 0) {
                      for (
                        var i = ["tb", "gb", "mb", "kb", "b"], o = 0;
                        o < i.length;
                        o++
                      ) {
                        var a = i[o];
                        if (
                          e >=
                          Math.pow(this.options.filesizeBase, 4 - o) / 10
                        ) {
                          (t = e / Math.pow(this.options.filesizeBase, 4 - o)),
                            (n = a);
                          break;
                        }
                      }
                      t = Math.round(10 * t) / 10;
                    }
                    return (
                      "<strong>" +
                      t +
                      "</strong> " +
                      this.options.dictFileSizeUnits[n]
                    );
                  },
                },
                {
                  key: "_updateMaxFilesReachedClass",
                  value: function () {
                    return null != this.options.maxFiles &&
                      this.getAcceptedFiles().length >= this.options.maxFiles
                      ? (this.getAcceptedFiles().length ===
                          this.options.maxFiles &&
                          this.emit("maxfilesreached", this.files),
                        this.element.classList.add("dz-max-files-reached"))
                      : this.element.classList.remove("dz-max-files-reached");
                  },
                },
                {
                  key: "drop",
                  value: function (e) {
                    if (e.dataTransfer) {
                      this.emit("drop", e);
                      for (
                        var t = [], n = 0;
                        n < e.dataTransfer.files.length;
                        n++
                      )
                        t[n] = e.dataTransfer.files[n];
                      if ((this.emit("addedfiles", t), t.length)) {
                        var i = e.dataTransfer.items;
                        i && i.length && null != i[0].webkitGetAsEntry
                          ? this._addFilesFromItems(i)
                          : this.handleFiles(t);
                      }
                    }
                  },
                },
                {
                  key: "paste",
                  value: function (e) {
                    if (
                      null !=
                      ((t = null != e ? e.clipboardData : void 0),
                      (n = function (e) {
                        return e.items;
                      }),
                      null != t ? n(t) : void 0)
                    ) {
                      var t, n;
                      this.emit("paste", e);
                      var i = e.clipboardData.items;
                      return i.length ? this._addFilesFromItems(i) : void 0;
                    }
                  },
                },
                {
                  key: "handleFiles",
                  value: function (e) {
                    for (var t = 0, n = (n = e); ; ) {
                      if (t >= n.length) break;
                      var i = n[t++];
                      this.addFile(i);
                    }
                  },
                },
                {
                  key: "_addFilesFromItems",
                  value: function (e) {
                    var t = this;
                    return (function () {
                      for (var n = [], i = 0, o = (o = e); ; ) {
                        if (i >= o.length) break;
                        var a,
                          r = o[i++];
                        null != r.webkitGetAsEntry && (a = r.webkitGetAsEntry())
                          ? a.isFile
                            ? n.push(t.addFile(r.getAsFile()))
                            : a.isDirectory
                            ? n.push(t._addFilesFromDirectory(a, a.name))
                            : n.push(void 0)
                          : null != r.getAsFile &&
                            (null == r.kind || "file" === r.kind)
                          ? n.push(t.addFile(r.getAsFile()))
                          : n.push(void 0);
                      }
                      return n;
                    })();
                  },
                },
                {
                  key: "_addFilesFromDirectory",
                  value: function (e, t) {
                    var n = this,
                      i = e.createReader(),
                      o = function (e) {
                        return (
                          (t = console),
                          (n = "log"),
                          (i = function (t) {
                            return t.log(e);
                          }),
                          null != t && "function" == typeof t[n]
                            ? i(t, n)
                            : void 0
                        );
                        var t, n, i;
                      };
                    return (function e() {
                      return i.readEntries(function (i) {
                        if (i.length > 0) {
                          for (var o = 0, a = (a = i); ; ) {
                            if (o >= a.length) break;
                            var r = a[o++];
                            r.isFile
                              ? r.file(function (e) {
                                  if (
                                    !n.options.ignoreHiddenFiles ||
                                    "." !== e.name.substring(0, 1)
                                  )
                                    return (
                                      (e.fullPath = t + "/" + e.name),
                                      n.addFile(e)
                                    );
                                })
                              : r.isDirectory &&
                                n._addFilesFromDirectory(r, t + "/" + r.name);
                          }
                          e();
                        }
                        return null;
                      }, o);
                    })();
                  },
                },
                {
                  key: "accept",
                  value: function (e, n) {
                    return this.options.maxFilesize &&
                      e.size > 1024 * this.options.maxFilesize * 1024
                      ? n(
                          this.options.dictFileTooBig
                            .replace(
                              "{{filesize}}",
                              Math.round(e.size / 1024 / 10.24) / 100
                            )
                            .replace(
                              "{{maxFilesize}}",
                              this.options.maxFilesize
                            )
                        )
                      : t.isValidFile(e, this.options.acceptedFiles)
                      ? null != this.options.maxFiles &&
                        this.getAcceptedFiles().length >= this.options.maxFiles
                        ? (n(
                            this.options.dictMaxFilesExceeded.replace(
                              "{{maxFiles}}",
                              this.options.maxFiles
                            )
                          ),
                          this.emit("maxfilesexceeded", e))
                        : this.options.accept.call(this, e, n)
                      : n(this.options.dictInvalidFileType);
                  },
                },
                {
                  key: "addFile",
                  value: function (e) {
                    var n = this;
                    return (
                      (e.upload = {
                        uuid: t.uuidv4(),
                        progress: 0,
                        total: e.size,
                        bytesSent: 0,
                        filename: this._renameFile(e),
                        chunked:
                          this.options.chunking &&
                          (this.options.forceChunking ||
                            e.size > this.options.chunkSize),
                        totalChunkCount: Math.ceil(
                          e.size / this.options.chunkSize
                        ),
                      }),
                      this.files.push(e),
                      (e.status = t.ADDED),
                      this.emit("addedfile", e),
                      this._enqueueThumbnail(e),
                      this.accept(e, function (t) {
                        return (
                          t
                            ? ((e.accepted = !1), n._errorProcessing([e], t))
                            : ((e.accepted = !0),
                              n.options.autoQueue && n.enqueueFile(e)),
                          n._updateMaxFilesReachedClass()
                        );
                      })
                    );
                  },
                },
                {
                  key: "enqueueFiles",
                  value: function (e) {
                    for (var t = 0, n = (n = e); ; ) {
                      if (t >= n.length) break;
                      var i = n[t++];
                      this.enqueueFile(i);
                    }
                    return null;
                  },
                },
                {
                  key: "enqueueFile",
                  value: function (e) {
                    var n = this;
                    if (e.status !== t.ADDED || !0 !== e.accepted)
                      throw new Error(
                        "This file can't be queued because it has already been processed or was rejected."
                      );
                    if (((e.status = t.QUEUED), this.options.autoProcessQueue))
                      return setTimeout(function () {
                        return n.processQueue();
                      }, 0);
                  },
                },
                {
                  key: "_enqueueThumbnail",
                  value: function (e) {
                    var t = this;
                    if (
                      this.options.createImageThumbnails &&
                      e.type.match(/image.*/) &&
                      e.size <= 1024 * this.options.maxThumbnailFilesize * 1024
                    )
                      return (
                        this._thumbnailQueue.push(e),
                        setTimeout(function () {
                          return t._processThumbnailQueue();
                        }, 0)
                      );
                  },
                },
                {
                  key: "_processThumbnailQueue",
                  value: function () {
                    var e = this;
                    if (
                      !this._processingThumbnail &&
                      0 !== this._thumbnailQueue.length
                    ) {
                      this._processingThumbnail = !0;
                      var t = this._thumbnailQueue.shift();
                      return this.createThumbnail(
                        t,
                        this.options.thumbnailWidth,
                        this.options.thumbnailHeight,
                        this.options.thumbnailMethod,
                        !0,
                        function (n) {
                          return (
                            e.emit("thumbnail", t, n),
                            (e._processingThumbnail = !1),
                            e._processThumbnailQueue()
                          );
                        }
                      );
                    }
                  },
                },
                {
                  key: "removeFile",
                  value: function (e) {
                    if (
                      (e.status === t.UPLOADING && this.cancelUpload(e),
                      (this.files = E(this.files, e)),
                      this.emit("removedfile", e),
                      0 === this.files.length)
                    )
                      return this.emit("reset");
                  },
                },
                {
                  key: "removeAllFiles",
                  value: function (e) {
                    null == e && (e = !1);
                    for (var n = 0, i = (i = this.files.slice()); ; ) {
                      if (n >= i.length) break;
                      var o = i[n++];
                      (o.status !== t.UPLOADING || e) && this.removeFile(o);
                    }
                    return null;
                  },
                },
                {
                  key: "resizeImage",
                  value: function (e, n, i, o, a) {
                    var r = this;
                    return this.createThumbnail(
                      e,
                      n,
                      i,
                      o,
                      !0,
                      function (n, i) {
                        if (null == i) return a(e);
                        var o = r.options.resizeMimeType;
                        null == o && (o = e.type);
                        var s = i.toDataURL(o, r.options.resizeQuality);
                        return (
                          ("image/jpeg" !== o && "image/jpg" !== o) ||
                            (s = R.restore(e.dataURL, s)),
                          a(t.dataURItoBlob(s))
                        );
                      }
                    );
                  },
                },
                {
                  key: "createThumbnail",
                  value: function (e, t, n, i, o, a) {
                    var r = this,
                      s = new FileReader();
                    return (
                      (s.onload = function () {
                        if (
                          ((e.dataURL = s.result), "image/svg+xml" !== e.type)
                        )
                          return r.createThumbnailFromUrl(e, t, n, i, o, a);
                        null != a && a(s.result);
                      }),
                      s.readAsDataURL(e)
                    );
                  },
                },
                {
                  key: "createThumbnailFromUrl",
                  value: function (e, t, n, i, o, a, r) {
                    var l = this,
                      c = document.createElement("img");
                    return (
                      r && (c.crossOrigin = r),
                      (c.onload = function () {
                        var r = !1;
                        void 0 !== s &&
                          s.getData(c, function () {
                            switch (parseInt(s.getTag(this, "Orientation"))) {
                              case 2:
                                r = !0;
                                break;
                              case 3:
                                180;
                                break;
                              case 4:
                                180, (r = !0);
                                break;
                              case 5:
                                270, (r = !0);
                                break;
                              case 6:
                                270;
                                break;
                              case 7:
                                90, (r = !0);
                                break;
                              case 8:
                                90;
                            }
                          });
                        var d = function (e) {
                          return e(1);
                        };
                        return (
                          null != s &&
                            o &&
                            (d = function (e) {
                              return s.getData(c, function () {
                                return e(s.getTag(this, "Orientation"));
                              });
                            }),
                          d(function (o) {
                            var s, d, u, p;
                            (e.width = c.width), (e.height = c.height);
                            var f = l.options.resize.call(l, e, t, n, i),
                              h = document.createElement("canvas"),
                              m = h.getContext("2d");
                            switch (
                              ((h.width = f.trgWidth),
                              (h.height = f.trgHeight),
                              o > 4 &&
                                ((h.width = f.trgHeight),
                                (h.height = f.trgWidth)),
                              o)
                            ) {
                              case 2:
                                m.translate(h.width, 0), m.scale(-1, 1);
                                break;
                              case 3:
                                m.translate(h.width, h.height),
                                  m.rotate(Math.PI);
                                break;
                              case 4:
                                m.translate(0, h.height), m.scale(1, -1);
                                break;
                              case 5:
                                m.rotate(0.5 * Math.PI), m.scale(1, -1);
                                break;
                              case 6:
                                m.rotate(0.5 * Math.PI),
                                  m.translate(0, -h.width);
                                break;
                              case 7:
                                m.rotate(0.5 * Math.PI),
                                  m.translate(h.height, -h.width),
                                  m.scale(-1, 1);
                                break;
                              case 8:
                                m.rotate(-0.5 * Math.PI),
                                  m.translate(-h.height, 0);
                            }
                            I(
                              m,
                              c,
                              null != (s = f.srcX) ? s : 0,
                              null != (d = f.srcY) ? d : 0,
                              f.srcWidth,
                              f.srcHeight,
                              null != (u = f.trgX) ? u : 0,
                              null != (p = f.trgY) ? p : 0,
                              f.trgWidth,
                              f.trgHeight,
                              o,
                              r
                            );
                            var g = h.toDataURL("image/png");
                            if (null != a) return a(g, h);
                          })
                        );
                      }),
                      null != a && (c.onerror = a),
                      (c.src = e.dataURL)
                    );
                  },
                },
                {
                  key: "processQueue",
                  value: function () {
                    var e = this.options.parallelUploads,
                      t = this.getUploadingFiles().length,
                      n = t;
                    if (!(t >= e)) {
                      var i = this.getQueuedFiles();
                      if (i.length > 0) {
                        if (this.options.uploadMultiple)
                          return this.processFiles(i.slice(0, e - t));
                        for (; n < e; ) {
                          if (!i.length) return;
                          this.processFile(i.shift()), n++;
                        }
                      }
                    }
                  },
                },
                {
                  key: "processFile",
                  value: function (e) {
                    return this.processFiles([e]);
                  },
                },
                {
                  key: "processFiles",
                  value: function (e) {
                    for (var n = 0, i = (i = e); ; ) {
                      if (n >= i.length) break;
                      var o = i[n++];
                      (o.processing = !0),
                        (o.status = t.UPLOADING),
                        this.emit("processing", o);
                    }
                    return (
                      this.options.uploadMultiple &&
                        this.emit("processingmultiple", e),
                      this.uploadFiles(e)
                    );
                  },
                },
                {
                  key: "_getFilesWithXhr",
                  value: function (e) {
                    return this.files
                      .filter(function (t) {
                        return t.xhr === e;
                      })
                      .map(function (e) {
                        return e;
                      });
                  },
                },
                {
                  key: "cancelUpload",
                  value: function (e) {
                    if (e.status === t.UPLOADING) {
                      for (
                        var n = this._getFilesWithXhr(e.xhr),
                          i = 0,
                          o = (o = n);
                        ;

                      ) {
                        if (i >= o.length) break;
                        o[i++].status = t.CANCELED;
                      }
                      void 0 !== e.xhr && e.xhr.abort();
                      for (var a = 0, r = (r = n); ; ) {
                        if (a >= r.length) break;
                        var s = r[a++];
                        this.emit("canceled", s);
                      }
                      this.options.uploadMultiple &&
                        this.emit("canceledmultiple", n);
                    } else
                      (e.status !== t.ADDED && e.status !== t.QUEUED) ||
                        ((e.status = t.CANCELED),
                        this.emit("canceled", e),
                        this.options.uploadMultiple &&
                          this.emit("canceledmultiple", [e]));
                    if (this.options.autoProcessQueue)
                      return this.processQueue();
                  },
                },
                {
                  key: "resolveOption",
                  value: function (e) {
                    if ("function" == typeof e) {
                      for (
                        var t = arguments.length,
                          n = Array(t > 1 ? t - 1 : 0),
                          i = 1;
                        i < t;
                        i++
                      )
                        n[i - 1] = arguments[i];
                      return e.apply(this, n);
                    }
                    return e;
                  },
                },
                {
                  key: "uploadFile",
                  value: function (e) {
                    return this.uploadFiles([e]);
                  },
                },
                {
                  key: "uploadFiles",
                  value: function (e) {
                    var n = this;
                    this._transformFiles(e, function (i) {
                      if (e[0].upload.chunked) {
                        var o = e[0],
                          a = i[0];
                        o.upload.chunks = [];
                        var r = function () {
                          for (var i = 0; void 0 !== o.upload.chunks[i]; ) i++;
                          if (!(i >= o.upload.totalChunkCount)) {
                            0;
                            var r = i * n.options.chunkSize,
                              s = Math.min(r + n.options.chunkSize, o.size),
                              l = {
                                name: n._getParamName(0),
                                data: a.webkitSlice
                                  ? a.webkitSlice(r, s)
                                  : a.slice(r, s),
                                filename: o.upload.filename,
                                chunkIndex: i,
                              };
                            (o.upload.chunks[i] = {
                              file: o,
                              index: i,
                              dataBlock: l,
                              status: t.UPLOADING,
                              progress: 0,
                              retries: 0,
                            }),
                              n._uploadData(e, [l]);
                          }
                        };
                        if (
                          ((o.upload.finishedChunkUpload = function (i) {
                            var a = !0;
                            (i.status = t.SUCCESS),
                              (i.dataBlock = null),
                              (i.xhr = null);
                            for (var s = 0; s < o.upload.totalChunkCount; s++) {
                              if (void 0 === o.upload.chunks[s]) return r();
                              o.upload.chunks[s].status !== t.SUCCESS &&
                                (a = !1);
                            }
                            a &&
                              n.options.chunksUploaded(o, function () {
                                n._finished(e, "", null);
                              });
                          }),
                          n.options.parallelChunkUploads)
                        )
                          for (var s = 0; s < o.upload.totalChunkCount; s++)
                            r();
                        else r();
                      } else {
                        for (var l = [], c = 0; c < e.length; c++)
                          l[c] = {
                            name: n._getParamName(c),
                            data: i[c],
                            filename: e[c].upload.filename,
                          };
                        n._uploadData(e, l);
                      }
                    });
                  },
                },
                {
                  key: "_getChunk",
                  value: function (e, t) {
                    for (var n = 0; n < e.upload.totalChunkCount; n++)
                      if (
                        void 0 !== e.upload.chunks[n] &&
                        e.upload.chunks[n].xhr === t
                      )
                        return e.upload.chunks[n];
                  },
                },
                {
                  key: "_uploadData",
                  value: function (e, n) {
                    for (
                      var i = this,
                        o = new XMLHttpRequest(),
                        a = 0,
                        r = (r = e);
                      ;

                    ) {
                      if (a >= r.length) break;
                      r[a++].xhr = o;
                    }
                    e[0].upload.chunked &&
                      (e[0].upload.chunks[n[0].chunkIndex].xhr = o);
                    var s = this.resolveOption(this.options.method, e),
                      l = this.resolveOption(this.options.url, e);
                    o.open(s, l, !0),
                      (o.timeout = this.resolveOption(this.options.timeout, e)),
                      (o.withCredentials = !!this.options.withCredentials),
                      (o.onload = function (t) {
                        i._finishedUploading(e, o, t);
                      }),
                      (o.onerror = function () {
                        i._handleUploadError(e, o);
                      }),
                      ((null != o.upload ? o.upload : o).onprogress = function (
                        t
                      ) {
                        return i._updateFilesUploadProgress(e, o, t);
                      });
                    var c = {
                      Accept: "application/json",
                      "Cache-Control": "no-cache",
                      "X-Requested-With": "XMLHttpRequest",
                    };
                    for (var d in (this.options.headers &&
                      t.extend(c, this.options.headers),
                    c)) {
                      var u = c[d];
                      u && o.setRequestHeader(d, u);
                    }
                    var p = new FormData();
                    if (this.options.params) {
                      var f = this.options.params;
                      for (var h in ("function" == typeof f &&
                        (f = f.call(
                          this,
                          e,
                          o,
                          e[0].upload.chunked ? this._getChunk(e[0], o) : null
                        )),
                      f)) {
                        var m = f[h];
                        p.append(h, m);
                      }
                    }
                    for (var g = 0, v = (v = e); ; ) {
                      if (g >= v.length) break;
                      var _ = v[g++];
                      this.emit("sending", _, o, p);
                    }
                    this.options.uploadMultiple &&
                      this.emit("sendingmultiple", e, o, p),
                      this._addFormElementData(p);
                    for (var b = 0; b < n.length; b++) {
                      var y = n[b];
                      p.append(y.name, y.data, y.filename);
                    }
                    this.submitRequest(o, p, e);
                  },
                },
                {
                  key: "_transformFiles",
                  value: function (e, t) {
                    for (
                      var n = this,
                        i = [],
                        o = 0,
                        a = function (a) {
                          n.options.transformFile.call(n, e[a], function (n) {
                            (i[a] = n), ++o === e.length && t(i);
                          });
                        },
                        r = 0;
                      r < e.length;
                      r++
                    )
                      a(r);
                  },
                },
                {
                  key: "_addFormElementData",
                  value: function (e) {
                    if ("FORM" === this.element.tagName)
                      for (
                        var t = 0,
                          n = (n = this.element.querySelectorAll(
                            "input, textarea, select, button"
                          ));
                        ;

                      ) {
                        if (t >= n.length) break;
                        var i = n[t++],
                          o = i.getAttribute("name"),
                          a = i.getAttribute("type");
                        if ((a && (a = a.toLowerCase()), null != o))
                          if (
                            "SELECT" === i.tagName &&
                            i.hasAttribute("multiple")
                          )
                            for (var r = 0, s = (s = i.options); ; ) {
                              if (r >= s.length) break;
                              var l = s[r++];
                              l.selected && e.append(o, l.value);
                            }
                          else
                            (!a ||
                              ("checkbox" !== a && "radio" !== a) ||
                              i.checked) &&
                              e.append(o, i.value);
                      }
                  },
                },
                {
                  key: "_updateFilesUploadProgress",
                  value: function (e, t, n) {
                    var i = void 0;
                    if (void 0 !== n) {
                      if (
                        ((i = (100 * n.loaded) / n.total), e[0].upload.chunked)
                      ) {
                        var o = e[0],
                          a = this._getChunk(o, t);
                        (a.progress = i),
                          (a.total = n.total),
                          (a.bytesSent = n.loaded);
                        (o.upload.progress = 0),
                          (o.upload.total = 0),
                          (o.upload.bytesSent = 0);
                        for (var r = 0; r < o.upload.totalChunkCount; r++)
                          void 0 !== o.upload.chunks[r] &&
                            void 0 !== o.upload.chunks[r].progress &&
                            ((o.upload.progress += o.upload.chunks[r].progress),
                            (o.upload.total += o.upload.chunks[r].total),
                            (o.upload.bytesSent +=
                              o.upload.chunks[r].bytesSent));
                        o.upload.progress =
                          o.upload.progress / o.upload.totalChunkCount;
                      } else
                        for (var s = 0, l = (l = e); ; ) {
                          if (s >= l.length) break;
                          var c = l[s++];
                          (c.upload.progress = i),
                            (c.upload.total = n.total),
                            (c.upload.bytesSent = n.loaded);
                        }
                      for (var d = 0, u = (u = e); ; ) {
                        if (d >= u.length) break;
                        var p = u[d++];
                        this.emit(
                          "uploadprogress",
                          p,
                          p.upload.progress,
                          p.upload.bytesSent
                        );
                      }
                    } else {
                      var f = !0;
                      i = 100;
                      for (var h = 0, m = (m = e); ; ) {
                        if (h >= m.length) break;
                        var g = m[h++];
                        (100 === g.upload.progress &&
                          g.upload.bytesSent === g.upload.total) ||
                          (f = !1),
                          (g.upload.progress = i),
                          (g.upload.bytesSent = g.upload.total);
                      }
                      if (f) return;
                      for (var v = 0, _ = (_ = e); ; ) {
                        if (v >= _.length) break;
                        var b = _[v++];
                        this.emit("uploadprogress", b, i, b.upload.bytesSent);
                      }
                    }
                  },
                },
                {
                  key: "_finishedUploading",
                  value: function (e, n, i) {
                    var o = void 0;
                    if (e[0].status !== t.CANCELED && 4 === n.readyState) {
                      if (
                        "arraybuffer" !== n.responseType &&
                        "blob" !== n.responseType &&
                        ((o = n.responseText),
                        n.getResponseHeader("content-type") &&
                          ~n
                            .getResponseHeader("content-type")
                            .indexOf("application/json"))
                      )
                        try {
                          o = JSON.parse(o);
                        } catch (e) {
                          (i = e), (o = "Invalid JSON response from server.");
                        }
                      this._updateFilesUploadProgress(e),
                        200 <= n.status && n.status < 300
                          ? e[0].upload.chunked
                            ? e[0].upload.finishedChunkUpload(
                                this._getChunk(e[0], n)
                              )
                            : this._finished(e, o, i)
                          : this._handleUploadError(e, n, o);
                    }
                  },
                },
                {
                  key: "_handleUploadError",
                  value: function (e, n, i) {
                    if (e[0].status !== t.CANCELED) {
                      if (e[0].upload.chunked && this.options.retryChunks) {
                        var o = this._getChunk(e[0], n);
                        if (o.retries++ < this.options.retryChunksLimit)
                          return void this._uploadData(e, [o.dataBlock]);
                        console.warn(
                          "Retried this chunk too often. Giving up."
                        );
                      }
                      for (var a = 0, r = (r = e); ; ) {
                        if (a >= r.length) break;
                        r[a++];
                        this._errorProcessing(
                          e,
                          i ||
                            this.options.dictResponseError.replace(
                              "{{statusCode}}",
                              n.status
                            ),
                          n
                        );
                      }
                    }
                  },
                },
                {
                  key: "submitRequest",
                  value: function (e, t, n) {
                    e.send(t);
                  },
                },
                {
                  key: "_finished",
                  value: function (e, n, i) {
                    for (var o = 0, a = (a = e); ; ) {
                      if (o >= a.length) break;
                      var r = a[o++];
                      (r.status = t.SUCCESS),
                        this.emit("success", r, n, i),
                        this.emit("complete", r);
                    }
                    if (
                      (this.options.uploadMultiple &&
                        (this.emit("successmultiple", e, n, i),
                        this.emit("completemultiple", e)),
                      this.options.autoProcessQueue)
                    )
                      return this.processQueue();
                  },
                },
                {
                  key: "_errorProcessing",
                  value: function (e, n, i) {
                    for (var o = 0, a = (a = e); ; ) {
                      if (o >= a.length) break;
                      var r = a[o++];
                      (r.status = t.ERROR),
                        this.emit("error", r, n, i),
                        this.emit("complete", r);
                    }
                    if (
                      (this.options.uploadMultiple &&
                        (this.emit("errormultiple", e, n, i),
                        this.emit("completemultiple", e)),
                      this.options.autoProcessQueue)
                    )
                      return this.processQueue();
                  },
                },
              ],
              [
                {
                  key: "uuidv4",
                  value: function () {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                      /[xy]/g,
                      function (e) {
                        var t = (16 * Math.random()) | 0;
                        return ("x" === e ? t : (3 & t) | 8).toString(16);
                      }
                    );
                  },
                },
              ]
            ),
            t
          );
        })(M);
      H.initClass(),
        (H.version = "5.5.0"),
        (H.options = {}),
        (H.optionsForElement = function (e) {
          return e.getAttribute("id")
            ? H.options[A(e.getAttribute("id"))]
            : void 0;
        }),
        (H.instances = []),
        (H.forElement = function (e) {
          if (
            ("string" == typeof e && (e = document.querySelector(e)),
            null == (null != e ? e.dropzone : void 0))
          )
            throw new Error(
              "No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."
            );
          return e.dropzone;
        }),
        (H.autoDiscover = !0),
        (H.discover = function () {
          var e = void 0;
          if (document.querySelectorAll)
            e = document.querySelectorAll(".dropzone");
          else {
            e = [];
            var t = function (t) {
              return (function () {
                for (var n = [], i = 0, o = (o = t); ; ) {
                  if (i >= o.length) break;
                  var a = o[i++];
                  /(^| )dropzone($| )/.test(a.className)
                    ? n.push(e.push(a))
                    : n.push(void 0);
                }
                return n;
              })();
            };
            t(document.getElementsByTagName("div")),
              t(document.getElementsByTagName("form"));
          }
          return (function () {
            for (var t = [], n = 0, i = (i = e); ; ) {
              if (n >= i.length) break;
              var o = i[n++];
              !1 !== H.optionsForElement(o) ? t.push(new H(o)) : t.push(void 0);
            }
            return t;
          })();
        }),
        (H.blacklistedBrowsers = [
          /opera.*(Macintosh|Windows Phone).*version\/12/i,
        ]),
        (H.isBrowserSupported = function () {
          var e = !0;
          if (
            window.File &&
            window.FileReader &&
            window.FileList &&
            window.Blob &&
            window.FormData &&
            document.querySelector
          )
            if ("classList" in document.createElement("a"))
              for (var t = 0, n = (n = H.blacklistedBrowsers); ; ) {
                if (t >= n.length) break;
                n[t++].test(navigator.userAgent) && (e = !1);
              }
            else e = !1;
          else e = !1;
          return e;
        }),
        (H.dataURItoBlob = function (e) {
          for (
            var t = atob(e.split(",")[1]),
              n = e.split(",")[0].split(":")[1].split(";")[0],
              i = new ArrayBuffer(t.length),
              o = new Uint8Array(i),
              a = 0,
              r = t.length,
              s = 0 <= r;
            s ? a <= r : a >= r;
            s ? a++ : a--
          )
            o[a] = t.charCodeAt(a);
          return new Blob([i], {
            type: n,
          });
        });
      var E = function (e, t) {
          return e
            .filter(function (e) {
              return e !== t;
            })
            .map(function (e) {
              return e;
            });
        },
        A = function (e) {
          return e.replace(/[\-_](\w)/g, function (e) {
            return e.charAt(1).toUpperCase();
          });
        };
      (H.createElement = function (e) {
        var t = document.createElement("div");
        return (t.innerHTML = e), t.childNodes[0];
      }),
        (H.elementInside = function (e, t) {
          if (e === t) return !0;
          for (; (e = e.parentNode); ) if (e === t) return !0;
          return !1;
        }),
        (H.getElement = function (e, t) {
          var n = void 0;
          if (
            ("string" == typeof e
              ? (n = document.querySelector(e))
              : null != e.nodeType && (n = e),
            null == n)
          )
            throw new Error(
              "Invalid `" +
                t +
                "` option provided. Please provide a CSS selector or a plain HTML element."
            );
          return n;
        }),
        (H.getElements = function (e, t) {
          var n = void 0,
            i = void 0;
          if (e instanceof Array) {
            i = [];
            try {
              for (var o = 0, a = (a = e); !(o >= a.length); )
                (n = a[o++]), i.push(this.getElement(n, t));
            } catch (e) {
              i = null;
            }
          } else if ("string" == typeof e) {
            i = [];
            for (
              var r = 0, s = (s = document.querySelectorAll(e));
              !(r >= s.length);

            )
              (n = s[r++]), i.push(n);
          } else null != e.nodeType && (i = [e]);
          if (null == i || !i.length)
            throw new Error(
              "Invalid `" +
                t +
                "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."
            );
          return i;
        }),
        (H.confirm = function (e, t, n) {
          return window.confirm(e) ? t() : null != n ? n() : void 0;
        }),
        (H.isValidFile = function (e, t) {
          if (!t) return !0;
          t = t.split(",");
          for (
            var n = e.type, i = n.replace(/\/.*$/, ""), o = 0, a = (a = t);
            ;

          ) {
            if (o >= a.length) break;
            var r = a[o++];
            if ("." === (r = r.trim()).charAt(0)) {
              if (
                -1 !==
                e.name
                  .toLowerCase()
                  .indexOf(r.toLowerCase(), e.name.length - r.length)
              )
                return !0;
            } else if (/\/\*$/.test(r)) {
              if (i === r.replace(/\/.*$/, "")) return !0;
            } else if (n === r) return !0;
          }
          return !1;
        }),
        null != o &&
          (o.fn.dropzone = function (e) {
            return this.each(function () {
              return new H(this, e);
            });
          }),
        null !== e ? (e.exports = H) : (window.Dropzone = H),
        (H.ADDED = "added"),
        (H.QUEUED = "queued"),
        (H.ACCEPTED = H.QUEUED),
        (H.UPLOADING = "uploading"),
        (H.PROCESSING = H.UPLOADING),
        (H.CANCELED = "canceled"),
        (H.ERROR = "error"),
        (H.SUCCESS = "success");
      var I = function (e, t, n, i, o, a, r, s, l, c, d, u) {
          var p = (function (e) {
            e.naturalWidth;
            var t = e.naturalHeight,
              n = document.createElement("canvas");
            (n.width = 1), (n.height = t);
            var i = n.getContext("2d");
            i.drawImage(e, 0, 0);
            for (
              var o = i.getImageData(1, 0, 1, t).data, a = 0, r = t, s = t;
              s > a;

            )
              0 === o[4 * (s - 1) + 3] ? (r = s) : (a = s), (s = (r + a) >> 1);
            var l = s / t;
            return 0 === l ? 1 : l;
          })(t);
          return (
            (c /= p),
            e.translate(r + l / 2, s + c / 2),
            u && e.scale(-1, 1),
            e.rotate((-d * Math.PI) / 180),
            (r = -l / 2),
            (s = -c / 2),
            e.drawImage(t, n, i, o, a, r, s, l, c / p)
          );
        },
        R = (function () {
          function e() {
            F(this, e);
          }
          return (
            x(e, null, [
              {
                key: "initClass",
                value: function () {
                  this.KEY_STR =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                },
              },
              {
                key: "encode64",
                value: function (e) {
                  for (
                    var t = "",
                      n = void 0,
                      i = void 0,
                      o = "",
                      a = void 0,
                      r = void 0,
                      s = void 0,
                      l = "",
                      c = 0;
                    (a = (n = e[c++]) >> 2),
                      (r = ((3 & n) << 4) | ((i = e[c++]) >> 4)),
                      (s = ((15 & i) << 2) | ((o = e[c++]) >> 6)),
                      (l = 63 & o),
                      isNaN(i) ? (s = l = 64) : isNaN(o) && (l = 64),
                      (t =
                        t +
                        this.KEY_STR.charAt(a) +
                        this.KEY_STR.charAt(r) +
                        this.KEY_STR.charAt(s) +
                        this.KEY_STR.charAt(l)),
                      (n = i = o = ""),
                      (a = r = s = l = ""),
                      c < e.length;

                  );
                  return t;
                },
              },
              {
                key: "restore",
                value: function (e, t) {
                  if (!e.match("data:image/jpeg;base64,")) return t;
                  var n = this.decode64(
                      e.replace("data:image/jpeg;base64,", "")
                    ),
                    i = this.slice2Segments(n),
                    o = this.exifManipulation(t, i);
                  return "data:image/jpeg;base64," + this.encode64(o);
                },
              },
              {
                key: "exifManipulation",
                value: function (e, t) {
                  var n = this.getExifArray(t),
                    i = this.insertExif(e, n);
                  return new Uint8Array(i);
                },
              },
              {
                key: "getExifArray",
                value: function (e) {
                  for (var t = void 0, n = 0; n < e.length; ) {
                    if ((255 === (t = e[n])[0]) & (225 === t[1])) return t;
                    n++;
                  }
                  return [];
                },
              },
              {
                key: "insertExif",
                value: function (e, t) {
                  var n = e.replace("data:image/jpeg;base64,", ""),
                    i = this.decode64(n),
                    o = i.indexOf(255, 3),
                    a = i.slice(0, o),
                    r = i.slice(o),
                    s = a;
                  return (s = (s = s.concat(t)).concat(r));
                },
              },
              {
                key: "slice2Segments",
                value: function (e) {
                  for (var t = 0, n = []; ; ) {
                    if ((255 === e[t]) & (218 === e[t + 1])) break;
                    if ((255 === e[t]) & (216 === e[t + 1])) t += 2;
                    else {
                      var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
                        o = e.slice(t, i);
                      n.push(o), (t = i);
                    }
                    if (t > e.length) break;
                  }
                  return n;
                },
              },
              {
                key: "decode64",
                value: function (e) {
                  var t = void 0,
                    n = void 0,
                    i = "",
                    o = void 0,
                    a = void 0,
                    r = "",
                    s = 0,
                    l = [];
                  for (
                    /[^A-Za-z0-9\+\/\=]/g.exec(e) &&
                      console.warn(
                        "There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."
                      ),
                      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                    (t =
                      (this.KEY_STR.indexOf(e.charAt(s++)) << 2) |
                      ((o = this.KEY_STR.indexOf(e.charAt(s++))) >> 4)),
                      (n =
                        ((15 & o) << 4) |
                        ((a = this.KEY_STR.indexOf(e.charAt(s++))) >> 2)),
                      (i =
                        ((3 & a) << 6) |
                        (r = this.KEY_STR.indexOf(e.charAt(s++)))),
                      l.push(t),
                      64 !== a && l.push(n),
                      64 !== r && l.push(i),
                      (t = n = i = ""),
                      (o = a = r = ""),
                      s < e.length;

                  );
                  return l;
                },
              },
            ]),
            e
          );
        })();
      R.initClass();
      (H._autoDiscoverFunction = function () {
        if (H.autoDiscover) return H.discover();
      }),
        (function (e, t) {
          var n = !1,
            i = !0,
            o = e.document,
            a = o.documentElement,
            r = o.addEventListener ? "addEventListener" : "attachEvent",
            s = o.addEventListener ? "removeEventListener" : "detachEvent",
            l = o.addEventListener ? "" : "on",
            c = function i(a) {
              if ("readystatechange" !== a.type || "complete" === o.readyState)
                return (
                  ("load" === a.type ? e : o)[s](l + a.type, i, !1),
                  !n && (n = !0) ? t.call(e, a.type || a) : void 0
                );
            };
          if ("complete" !== o.readyState) {
            if (o.createEventObject && a.doScroll) {
              try {
                i = !e.frameElement;
              } catch (e) {}
              i &&
                (function e() {
                  try {
                    a.doScroll("left");
                  } catch (t) {
                    return void setTimeout(e, 50);
                  }
                  return c("poll");
                })();
            }
            o[r](l + "DOMContentLoaded", c, !1),
              o[r](l + "readystatechange", c, !1),
              e[r](l + "load", c, !1);
          }
        })(window, H._autoDiscoverFunction);
    },
    168794: function (e, t, n) {
      n.r(t),
        n.d(t, {
          afterLoadMore: function () {
            return _;
          },
          beforeLoadMore: function () {
            return c;
          },
          collapseGroupOptions: function () {
            return b;
          },
          getEquipmentType: function () {
            return k;
          },
          initDropZone: function () {
            return l;
          },
          uuidv4: function () {
            return w;
          },
        });
      var i = n(619755),
        o = n(619755);
      function a(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return r(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[i++],
                    };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          s = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (l = !0), (a = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (l) throw a;
            }
          },
        };
      }
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function s(e) {
        return (
          (s =
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
          s(e)
        );
      }
      function l(e) {
        var t,
          o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          d = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          u = "image/jpeg, image/png",
          p = 3,
          f = 3,
          h = ".dropzone",
          m = ".dz-upload",
          g = "image",
          v = !0;
        if (
          (c &&
            (c.acceptedFiles && (u = c.acceptedFiles),
            c.maxFilesize && (p = c.maxFilesize),
            c.maxFiles && (f = c.maxFiles),
            c.blockName && (h = c.blockName),
            c.clickable && (m = c.clickable),
            c.typeFile && (g = c.typeFile),
            void 0 !== c.reInitForm && (v = c.reInitForm)),
          i((t = 'form[name="' + e + '"]')).length > 0)
        ) {
          var _ = n(127523);
          return (
            (_.autoDiscover = !1),
            new _(h, {
              url: i(t).attr("action"),
              maxFiles: f,
              acceptedFiles: u,
              maxFilesize: p,
              addRemoveLinks: !1,
              dictDefaultMessage: "",
              previewTemplate: i(".dz-preview.dz-file-preview").html(),
              autoProcessQueue: !1,
              uploadMultiple: !0,
              clickable: m,
              parallelUploads: 5,
              hiddenInputContainer: (c && c.hiddenInputContainer) || "body",
              init: function () {
                var n = this;
                function u() {
                  i(n)[0].dropzone || l(e, o, r, c, d);
                }
                function f(e) {
                  i(n.element).find(".dz-message").text(e);
                }
                v &&
                  (i(t).off(),
                  i(document).off("submit", t),
                  i(t).on("submit", function (e) {
                    e.preventDefault(),
                      i(".modal.show").length
                        ? icHelper.beforeLoadMore(
                            i(".modal.show").find('.btn[type="submit"]'),
                            !0
                          )
                        : icHelper.loaderSpin(),
                      n.getQueuedFiles().length > 0
                        ? n.processQueue()
                        : icHelper.iasFormSendAjax(i(t)[0], o, u, r, d);
                  })),
                  n.on("addedfile", function (o) {
                    i(t).find(".dropzone-podpis2.dz-started").length &&
                      (i(t).find(".div_file_add").addClass("cf_active"),
                      i(t)
                        .find(".file_tit")
                        .html(i(t).find(".dz-filename").text()));
                    var a = _.createElement(
                      '<div class="btn_type2 dz-remove">\n<div class="btn_ico"><i class="material-icons">close</i></div>\n</div>'
                    );
                    _.createElement(
                      '<span class="file_text1">' + o.size + "</span>"
                    );
                    a.addEventListener("click", function (e) {
                      e.preventDefault(),
                        e.stopPropagation(),
                        n.removeFile(o),
                        f("");
                    }),
                      o.previewElement.appendChild(a),
                      f(""),
                      "contract_file" === e &&
                        "object" ===
                          ("undefined" == typeof Contract
                            ? "undefined"
                            : s(Contract)) &&
                        Contract.buttonSignEventDropzone(
                          i('[name="contract_file"]'),
                          o
                        );
                  }),
                  n.on("sending", function (e, n, o) {
                    if ("GET" === i(t).attr("method").toUpperCase()) {
                      var r = i(t).serializeArray();
                      i.each(r, function (e, t) {
                        -1 === i.inArray(t.value, o.getAll(t.name)) &&
                          o.append(t.name, t.value);
                      });
                    } else if ("POST" === i(t).attr("method").toUpperCase()) {
                      var s,
                        l = a(new FormData(i(t)[0]).entries());
                      try {
                        for (l.s(); !(s = l.n()).done; ) {
                          var c = s.value;
                          o.set(c[0], c[1]),
                            c[0].includes("_file_") &&
                              o.set(
                                c[0],
                                i('[name="' + c[0] + '"]')[0].files[0]
                              );
                        }
                      } catch (e) {
                        l.e(e);
                      } finally {
                        l.f();
                      }
                    }
                  }),
                  n.on("maxfilesexceeded", function (e) {
                    n.removeFile(e),
                      f(
                        "document" === g
                          ? "Превышено максимальное количество загружаемых документов."
                          : "Превышено максимальное количество загружаемых изображений."
                      );
                  }),
                  n.on("success", function (e, t, a) {
                    if ((n.removeAllFiles(), 206 === a.target.status)) {
                      var r = JSON.parse(t),
                        s = r.route,
                        c = r.title,
                        d = r.form_name;
                      i.get(s).done(function (e) {
                        icHelper.showModal(
                          e,
                          c,
                          void 0,
                          "modal800 modal_accordion"
                        ),
                          d && l(d);
                      });
                    } else "function" == typeof o ? o(t, a) : location.reload();
                    icHelper.removeLoader();
                  }),
                  n.on("error", function (e, o, a) {
                    n.removeFile(e),
                      a &&
                        400 === a.status &&
                        (i(t).parent().html(a.responseText),
                        icHelper.selectJs(),
                        icHelper.etpGpbInit(),
                        u(),
                        icHelper.removeLoader()),
                      a &&
                        500 === a.status &&
                        (icHelper.removeLoader(),
                        icHelper.showModalAlert(
                          "Произошла ошибка, попробуйте позже"
                        )),
                      "function" == typeof r && r(o);
                    var s = "";
                    ("image/png" === e.type) | ("image/jpeg" === e.type)
                      ? e.size > 1048576 * p &&
                        (s =
                          "Превышен максимальный размер загружаемого изображения. Максимальный размер файла - " +
                          p +
                          "Мб.")
                      : (s =
                          "Неправильный формат файла (допустимые форматы .jpg, .png)"),
                      f(s);
                  });
              },
            })
          );
        }
      }
      function c(e) {
        e.addClass("disabled_btn"),
          e.attr("disabled", !0),
          e.hasClass("btn-ico")
            ? e.addClass("btn-ico-remove2")
            : e.addClass("btn-ico"),
          e.addClass("btn-ico-remove"),
          e.append("<i></i>"),
          e
            .find("i")
            .after(
              '<svg  class="btn_svg_loader" width="28" height="28" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>'
            ),
          e.find("i").remove();
      }
      function d() {
        "1200302" === i("#service_add_serviceType").val()
          ? (i("#service_category_add").removeClass("d-none"),
            i(".add-service-equip-select").show(),
            "" === i("#service_add_category").val()
              ? (i(".attribute_li").remove(),
                i("#attributesBurseAdd").addClass("d-none"))
              : i("#attributesBurseAdd").removeClass("d-none"))
          : (i("#service_add_category").val(null).trigger("change"),
            i("#service_category_add").addClass("d-none"),
            i(".add-service-equip-select").hide(),
            i(".attribute_li").remove(),
            i(".pole_group_add").remove());
      }
      function u() {
        var e = i("#category-fields-list").data("widget-counter"),
          t = i("#service_add_category").val(),
          n = [];
        i
          .get(
            Routing.generate("getAttributesByCode", {
              code: t,
            })
          )
          .done(function (t) {
            if (!t.length)
              return i("#attributesBurseAdd").addClass("d-none"), !1;
            n = JSON.parse(t);
            for (var o = 0; o < e; o++) {
              var a = i("#service_add_attributes_" + o + "_id"),
                r = i("#service_add_attributes_" + o + "_value"),
                s = i("#service_add_attributes_" + o + "_selectValue");
              "" != s.val()
                ? (r.closest(".form-group").hide(),
                  s.closest(".form-group").show())
                : (r.closest(".form-group").show(),
                  s.closest(".form-group").hide()),
                f(a, o, n);
            }
            p(n);
          }),
          i(document).on("click", ".remove_attribute_service", function () {
            v(i(this).closest("li"));
          });
      }
      function p(e) {
        var t = i("#category-fields-list").data("widget-counter");
        e.attributes.length <= t
          ? i(".add-another-collection-widget").hide()
          : i(".add-another-collection-widget").show();
        for (var n = [], o = 0; o < t; o++) {
          var a = i(
            "#service_add_attributes_" + o + "_id option:selected"
          ).val();
          a && n.push(a);
        }
        for (
          var r = function () {
              var t = i("#service_add_attributes_" + s + "_id"),
                o = i(
                  "#service_add_attributes_" + s + "_id option:selected"
                ).val();
              t.find("option").remove(),
                e.attributes.forEach(function (e) {
                  var a;
                  (parseInt(o) != e.id && -1 != i.inArray(String(e.id), n)) ||
                    ((a =
                      parseInt(o) == e.id
                        ? new Option(e.name, e.id, !0, !0)
                        : new Option(e.name, e.id)),
                    t.append(a));
                });
            },
            s = 0;
          s < t;
          s++
        )
          r();
      }
      function f(e, t, n) {
        e.off(),
          e.on("change", function (e) {
            var o = i(this).val();
            i("#service_add_attributes_" + t + "_selectValue").prop(
              "disabled",
              !0
            ),
              p(n),
              i
                .get(
                  Routing.generate("getAttributeItems", {
                    code: o,
                  })
                )
                .done(function (e) {
                  h(JSON.parse(e), t, n);
                });
          });
      }
      function h(e, t, n) {
        var o = i("#service_add_attributes_" + t + "_value"),
          a = i("#service_add_attributes_" + t + "_selectValue");
        e.length
          ? (a.find("option").remove(),
            e.forEach(function (e) {
              var t = new Option(e.name, e.name);
              a.append(t);
            }),
            f(i("#service_add_attributes_" + t + "_id"), t, n),
            a.prop("disabled", !1).closest(".form-group").show(),
            o.prop("disabled", !0).prop("required", !1),
            o.closest(".form-group").hide())
          : (a.hide().find("option").remove(),
            a.closest(".form-group").hide(),
            a.prop("disabled", !0),
            o.prop("disabled", !1).prop("required", !0),
            o.closest(".form-group").show());
      }
      function m() {
        i(".add-another-collection-widget").click(function (e) {
          var t = o(o(this).attr("data-list-selector")),
            n = t.data("widget-counter") || t.children().length,
            a = t.attr("data-prototype");
          a = a.replace(/__name__/g, n);
          var r = n;
          n++, t.data("widget-counter", n);
          var s = o(t.attr("data-widget-tags")).html(a);
          s.appendTo(t), g(s);
          var l = i("#service_add_category").val(),
            c = i("#service_add_attributes_" + r + "_id");
          i("#service_add_attributes_" + r + "_value")
            .closest(".form-group")
            .hide(),
            i("#service_add_attributes_" + r + "_selectValue")
              .closest(".form-group")
              .hide(),
            i
              .get(
                Routing.generate("getAttributesByCode", {
                  code: l,
                })
              )
              .done(function (e) {
                var t = JSON.parse(e);
                c.find("option").remove(),
                  t.attributes.length <= n &&
                    i(".add-another-collection-widget").hide(),
                  p(t);
                var o = i(
                  "#service_add_attributes_" + r + "_id option:selected"
                ).val();
                i.get(
                  Routing.generate("getAttributeItems", {
                    code: o,
                  })
                ).done(function (e) {
                  h(JSON.parse(e), r, t);
                });
              }),
            icHelper.selectJs(
              o(this).attr("data-list-selector") +
                " select:not(.select2-hidden-accessible)"
            );
        });
      }
      function g(e) {
        var t = i(
          '<div class="btn_type2">\n        <div class="btn_text">Удалить</div>\n        <div class="btn_ico"><i class="material-icons">close</i></div>\n    </div>'
        );
        e.append(t),
          t.on("click", function (t) {
            v(e);
          });
      }
      function v(e) {
        e.remove();
        var t = i("#service_add_category").val();
        i.get(
          Routing.generate("getAttributesByCode", {
            code: t,
          })
        ).done(function (e) {
          var t = JSON.parse(e),
            n = i("#category-fields-list").data("widget-counter");
          n--,
            i("#category-fields-list").data("widget-counter", n),
            t.attributes.length > n &&
              i(".add-another-collection-widget").show(),
            p(t);
        });
      }
      function _(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        e.find(".btn_svg_loader").remove(),
          e.removeClass("disabled_btn"),
          e.removeClass("btn-ico-remove"),
          e.hasClass("btn-ico-remove2")
            ? e.removeClass("btn-ico-remove2")
            : e.removeClass("btn-ico"),
          e.find("i").show(),
          t &&
            (n ? i(n).append(t) : e.before(t),
            i(t).data("showmore") || e.hide()),
          e.attr("disabled", !1);
      }
      function b(e) {
        var t = {};
        i(document).off(
          "click",
          ".select2-container--open .select2-results__group"
        ),
          i(document).on(
            "click",
            ".select2-container--open .select2-results__group",
            function () {
              i(this).siblings().toggle(), i(this).toggleClass("srg_active");
              var e = i(this).closest(".select2-results__options").attr("id"),
                n = i(".select2-results__group").index(this);
              t[e][n] = !t[e][n];
            }
          ),
          i("#" + e).select2({
            allowClear: !0,
            selectionAdapter: i.fn.select2.amd.require(
              "SearchableSingleSelection"
            ),
            dropdownAdapter: i.fn.select2.amd.require("UnsearchableDropdown"),
          }),
          i(document).on("select2:opening", "#" + e, function () {
            i(".select2-dropdown--below").css("opacity", 0),
              setTimeout(function () {
                var e = i(".select2-container--open .select2-results__group"),
                  n = i(".select2-results__options").attr("id");
                t[n] || (t[n] = {}),
                  i.each(e, function (e, o) {
                    (t[n][e] = t[n][e] || !1),
                      t[n][e] ? i(o).siblings().show() : i(o).siblings().hide();
                  }),
                  i(".select2-dropdown--below").css("opacity", 1);
              }, 10);
          }),
          i(document).on("input", "#select2-search__field", function () {
            i(document).on("input", ".select2-search__field", function () {
              i(".select2-dropdown--below").css("opacity", 0),
                setTimeout(function () {
                  var e = i(".select2-container--open .select2-results__group"),
                    n = i(".select2-results__options").attr("id");
                  t[n] || (t[n] = {}),
                    i.each(e, function (e, o) {
                      (t[n][e] = t[n][e] || !1),
                        t[n][e]
                          ? i(o).siblings().show()
                          : i(o).siblings().hide();
                    }),
                    i(".select2-dropdown--below").css("opacity", 1);
                }, 10);
            });
          });
      }
      function y() {
        i(".product_char option").attr("disabled", !1),
          i(".product_char").each(function () {
            var e = i(this).val();
            i('option[value="' + e + '"]').attr("disabled", !0),
              i(this)
                .find('option[value="' + e + '"]')
                .attr("disabled", !1);
          });
      }
      function k(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = parseInt(i(t).data().index),
          a = "",
          r = i(t).data().child,
          s = '[data-index="' + parseInt(o + 1) + '"]',
          l = i(t).attr("name"),
          c = "";
        if (
          ((l.length < 1 || "undefined" === l) && (l = i(s).attr("name")),
          1 === o && r)
        ) {
          for (var d in r)
            if (r[d]) {
              var u = 'option[value="' + d + '"]',
                p = i(u).text();
              i(u).text(p + " +");
            }
          i(t).data().child = null;
        }
        if ("" !== e && e)
          i(t)
            .siblings("span.select2")
            .last()
            .after(
              '<div class="pt10 text-center">\n                        <img class="svg_loader typeLoader" src="/build/img/loader_red.svg">\n                    </div>'
            ),
            i.ajax({
              async: !0,
              global: !0,
              url: Routing.generate("getEquipmentType", {
                id: e,
              }),
              success: function (r) {
                var d = JSON.parse(r);
                if (
                  ((a = d.data), (r = d.select), !(Object.keys(r).length > 1))
                )
                  return (
                    i(s + " + span.select2").remove(),
                    i(s).remove(),
                    i(t).attr("name", l),
                    void i(".typeLoader").remove()
                  );
                if (
                  ((c = (function (e, t, n) {
                    var i =
                      '<select name="' +
                      e +
                      '" class="select_js equipmentSelect" data-index="' +
                      n +
                      '">';
                    for (var o in t)
                      i += '<option value="' + t[o] + '">' + o + "</option>";
                    return i + "</select>";
                  })(l, r, o + 1)),
                  i(s).length > 0)
                ) {
                  var u = i(s + " option")[1];
                  if (!(i(u).val() && i(u).val().indexOf(e) < 0))
                    return void i(".typeLoader").remove();
                  i(s + " + span.select2").remove(),
                    i(s).remove(),
                    i(t).attr("name", l);
                }
                for (var p in (i(t).siblings("span.select2").last().after(c),
                i(t).attr("name", ""),
                n &&
                  (n.length - e.length == 4
                    ? (i(s).val(n), i(t).val(e), k(n.slice(0, -2), i(s)[0], n))
                    : (i(s).val(n), i(t).val(e))),
                a))
                  if (a[p]) {
                    var f = 'option[value="' + p + '"]',
                      h = i(f).text();
                    i(f).text(h + " +");
                  }
                i(s).change(),
                  i(t).change(),
                  icHelper.selectJs(),
                  i(".typeLoader").remove();
              },
            });
        else if ("" === e || null === e || "null" === e) {
          var f = '[data-index="' + parseInt(o + 2) + '"]';
          i(s + " + span.select2").remove(),
            i(s).remove(),
            i(t).attr("name", l),
            i(f).length > 0 &&
              (i(f + " + span.select2").remove(), i(f).remove()),
            i(".typeLoader").remove();
        }
      }
      function w() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          }
        );
      }
      function C() {
        d(),
          i("#service_add_serviceType").on("change", function () {
            d();
          }),
          i("#service_add_category").on("change", function () {
            var e = i(this).val();
            i(".add-another-collection-widget").off("click"),
              i("#category-fields-list > li").remove(),
              i("#category-fields-list").data("widget-counter", 0),
              e.length &&
                i
                  .get(
                    Routing.generate("getAttributesByCode", {
                      code: e,
                    })
                  )
                  .done(function (e) {
                    if (!e.length)
                      return i("#attributesBurseAdd").addClass("d-none"), !1;
                    i("#attributesBurseAdd").removeClass("d-none"),
                      i(".add-another-collection-widget").click(function (t) {
                        var n = JSON.parse(e),
                          a = o(o(this).attr("data-list-selector")),
                          r = a.data("widget-counter") || a.children().length,
                          s = r,
                          l = a.attr("data-prototype");
                        (l = l.replace(/__name__/g, r)),
                          r++,
                          a.data("widget-counter", r);
                        var c = o(a.attr("data-widget-tags")).html(l);
                        c.appendTo(a),
                          g(c),
                          p(n),
                          n.attributes.length <= r &&
                            i(".add-another-collection-widget").hide();
                        var d = i("#service_add_attributes_" + s + "_id");
                        i
                          .get(
                            Routing.generate("getAttributeItems", {
                              code: d.val(),
                            })
                          )
                          .done(function (e) {
                            h(JSON.parse(e), s, n);
                          }),
                          setTimeout(function () {
                            icHelper.selectJs("#category-fields-list select");
                          }, 300);
                      }),
                      i("#attributesBurseAdd").removeClass("d-none");
                  });
          }),
          i(".equipment-list-select").change();
      }
      var x = ".lk-search-input",
        S = ".recommendations",
        F = ".recommendations_not",
        M = "#siteModalVideo";
      function H() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {
                  page: 1,
                },
          t = ".projectsContainer",
          n = i(".projectBranchSelect").val().toString(),
          o = i(".needsTypeSelect").val().toString(),
          a = i('[name="progTopFilter"]:checked'),
          r = a.length && a.data().part ? a.data().part : "projects",
          s = i(".projectsInput").val(),
          l = i('a[href="#pn_my"]').hasClass("active")
            ? "profile_company_project_list"
            : "site_company_project_list",
          c = e.needPage ? e.needPage : 1,
          d = i("#hashtags").val();
        i(t).length
          ? i("#pn_my .needsContainer").hide()
          : (t = ".physycContainer"),
          i(t).length ||
            ((t = ".projectsContainer2"), i("#pn_my .needsContainer").show()),
          icHelper.loaderSpin(),
          i
            .ajax({
              url: Routing.generate(l),
              global: !0,
              method: "GET",
              data: {
                branch: n,
                part: r,
                type: o,
                search: s,
                page: e.page,
                needPage: c,
                text: s,
                tag: d,
              },
            })
            .done(function (e) {
              e.content ? i(t).html(e.content) : i(t).html(e),
                i(".pagination a").removeAttr("href"),
                i(".page, .previous, .next").on("click", function () {
                  var e = i(this).find("a").data().pagenum,
                    t = i('input[data-part="needs"]').parent(),
                    n = 1;
                  t.length && t.hasClass("active") && ((n = e), (e = 1)),
                    H({
                      page: e,
                      needPage: n,
                    });
                });
            })
            .always(function () {
              icHelper.removeLoader();
            });
      }
      function E() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = ".cluster_container",
          n = i(".specializationSelect").val(),
          o = i(".findClusterInput").val(),
          a = i(".clustersStatus.active").data().status,
          r = !0;
        i(".findCluster").hasClass("active") && ((a = 7604), (r = !1)),
          icHelper.loaderSpin(t),
          i
            .ajax({
              url: Routing.generate("profile_clusters"),
              global: !0,
              method: "POST",
              data: {
                specialization: n,
                text: o,
                status: a,
                company: r,
                page: e,
              },
            })
            .done(function (e) {
              i(t).html(e);
            })
            .fail(function (e, n, o) {
              503 == e.status && i(t).html(e.responseText), console.log(e);
            })
            .always(function () {
              icHelper.removeLoader();
            });
      }
      function A() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = "#companyProductsContainer",
          n = i(".servicesStatus.active").data().status;
        icHelper.loaderSpin(t),
          i
            .ajax({
              url: Routing.generate("profile_services"),
              global: !0,
              method: "POST",
              data: {
                status: n,
                page: e,
              },
            })
            .done(function (e) {
              i(t).html(e);
            })
            .always(function () {
              icHelper.removeLoader();
            });
      }
      function I() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = "#companyProductsContainer",
          n = i(".equipsStatus.active").data().status;
        icHelper.loaderSpin(t),
          i
            .ajax({
              url: Routing.generate("profile_equips"),
              global: !0,
              method: "POST",
              data: {
                status: n,
                eqPage: e,
              },
            })
            .done(function (e) {
              i(t).html(e);
            })
            .always(function () {
              icHelper.removeLoader();
            });
      }
      function R(e, t) {
        var n = i("input.chooseItem:checked"),
          o = i(t).parents(".card-body").find(".choosedCount"),
          a = parseInt(o.find("span.mainCount").find("span").text()),
          r = i(t).data().get,
          s = i(t).data().post;
        icHelper.showModalConfirm("Подтвердить изменение", function () {
          icHelper.loaderSpin(),
            n.each(function () {
              var t = i(this).data().guid;
              t &&
                i
                  .get(
                    Routing.generate(e, {
                      guid: t,
                      methodGet: r,
                      methodPost: s,
                    })
                  )
                  .done(function (e) {
                    0 === (a -= 1) && window.location.reload();
                  })
                  .fail(function () {
                    return (
                      icHelper.removeLoader(),
                      icHelper.showModalAlert(
                        "Ошибка",
                        "Ошибка сервера, попробуйте позднее."
                      ),
                      !1
                    );
                  });
            });
        });
      }
      function P() {
        var e = i(".covidInfo").data();
        i.get(
          Routing.generate("iframeMeasure", {
            measureId: "916d28cc20c8457da876f517aaad960d",
          })
        ).done(function (t) {
          var n = i(t),
            o = n.find("#measure_support_request_LastName");
          o.attr("placeholder", "Фамилия");
          var a = n.find("#measure_support_request_FirstName");
          a.attr("placeholder", "Имя");
          var r = n.find("#measure_support_request_MiddleName");
          r.attr("placeholder", "Отчество");
          var s = n.find("#measure_support_request_Inn");
          s.attr("placeholder", "ИНН организации");
          var l = n.find("#measure_support_request_Email");
          l.attr("placeholder", "Email");
          var c = n.find("#measure_support_request_p79755");
          n.find(".covidLastName").append(o),
            n.find(".covidFirstName").append(a),
            n.find(".covidMiddleName").append(r),
            n.find(".covidFormInn").append(s),
            n.find(".covidFormEmail").append(l),
            n.find(".covidFormConfirm > span").first().before(c),
            i("#siteModal").removeClass(
              "digital_badges_modal2 modal_alert modal_event_back_call modal800"
            ),
            icHelper.showModal(
              n,
              "Ваш пропуск был аннулирован, так как данные Федеральной налоговой службы и Пенсионного Фонда не подтверждают Вашу занятость в указанной Вами компании",
              null,
              "digital_badges_modal"
            ),
            i("#measure_support_request > .form-group").hide();
          var d = i("#measure_support_request_p59448")[0];
          return (
            i(".measureFile").append(
              '<div class="fileinput-button2 fileinput-button2-not"></div>'
            ),
            i(".measureFile .fileinput-button2").html(d),
            i(".measureFile .fileinput-button2 input").after(
              '<div class="fileinput-text btn btn-light">\n                        <span class="sp1"><i class="material-icons">attach_file</i></span><span class="sp2">Выберите файл</span>\n                    </div>'
            ),
            i("label[for]").each(function () {
              var t = i(this).text();
              "ИНН" === t
                ? i("#" + i(this).attr("for")).val(e.inn)
                : "Номер документа, удостоверяющего личность (серия и номер слитно без пробелов)" ===
                    t && i("#" + i(this).attr("for")).val(e.passport);
            }),
            icHelper.removeLoader(),
            !1
          );
        });
      }
      function T() {
        i("#siteModal").removeClass("digital_badges_modal2"),
          i("#siteModal").removeClass("modal_alert");
      }
      function L(e) {
        var t = !1;
        i("#" + e)
          .find("input, select, textarea")
          .each(function () {
            (!this.checkValidity() ||
              (i(this).attr("required") && !i(this).val())) &&
              (t = !0);
          }),
          t
            ? i("#" + e)
                .find("button[type='submit']")
                .attr("disabled", !0)
            : i("#" + e)
                .find("button[type='submit']")
                .attr("disabled", !1);
      }
      function D() {
        var e = i(".contacts_add-btn");
        e.off("click"),
          e.on("click", function () {
            i("#form_contacts_add").hasClass("disabled") ||
              z(i("#" + i(this).data().container));
          });
      }
      function z(e) {
        var t = e.data().prototype,
          n = e.data("widget-counter") || e.children().length - 1;
        e.data("widget-counter", ++n),
          (t = t.replace(/__name__/g, n)),
          e.append(t),
          U(e.find("[type=text]"));
      }
      function q() {
        i("#form_contacts_add")
          .find("[data-prototype]")
          .each(function () {
            var e = i(this);
            0 === e.children().length && z(e);
          }),
          i("#form_contacts_add [type=text]").each(function () {
            U(i(this));
          });
      }
      function U(e) {
        if ("contacts_add_actual_address" !== i(e).attr("id")) {
          var t = e,
            n = i("<div/>", {
              class: "remove_input remove_input_abs dt2",
            }),
            o = i("<div/>", {
              class: "btn_type2",
            }),
            a = i("<div/>", {
              class: "btn_ico btn_ico2",
            });
          i("<i/>", {
            class: "material-icons",
            text: "close",
          }).appendTo(a);
          o.appendTo(n), a.appendTo(o), t.after(n);
        }
      }
      function N() {
        ymaps.ready(function () {
          new ymaps.SuggestView("contacts_add_actual_address");
          var e,
            t,
            n = "#contacts_add_actual_address";
          function o() {
            var o = i(n).val();
            ymaps.geocode(o).then(
              function (o) {
                var r,
                  s,
                  l = o.geoObjects.get(0);
                if (l)
                  switch (
                    l.properties.get(
                      "metaDataProperty.GeocoderMetaData.precision"
                    )
                  ) {
                    case "exact":
                      break;
                    case "near":
                      (r = "Неточный адрес, требуется уточнение"),
                        (s = "Уточните номер дома");
                      break;
                    case "street":
                      (r = "Неполный адрес, требуется уточнение"),
                        (s = "Уточните номер дома");
                      break;
                    default:
                      (r = "Неточный адрес, требуется уточнение"),
                        (s = "Уточните адрес");
                  }
                else (r = "Адрес не найден"), (s = "Уточните адрес");
                r
                  ? (i(".invalid-feedback").length &&
                      i(".invalid-feedback").remove(),
                    (function (e) {
                      var t = icHelper.createError(e);
                      i("#map").append(t);
                    })(r),
                    a(s))
                  : (i(".invalid-feedback").remove(),
                    (function (o) {
                      i(n).removeClass("input_error"),
                        i("#errorAddress").css("display", "none");
                      var r = i("#map"),
                        s = o.properties.get("boundedBy"),
                        l = ymaps.util.bounds.getCenterAndZoom(s, [
                          r.width(),
                          r.height(),
                        ]),
                        c = [o.getCountry(), o.getAddressLine()].join(", "),
                        d = [
                          o.getThoroughfare(),
                          o.getPremiseNumber(),
                          o.getPremise(),
                        ].join(" ");
                      (l.controls = []),
                        (l.zoom = 15),
                        i("#mapAddressContainer").removeClass("d-none"),
                        (u = l),
                        (p = d),
                        t
                          ? (t.setCenter(u.center, u.zoom),
                            e.geometry.setCoordinates(u.center),
                            e.properties.set({
                              iconCaption: p,
                              balloonContent: p,
                            }))
                          : ((t = new ymaps.Map("map", u, {
                              suppressMapOpenBlock: !0,
                            })).controls.remove("geolocationControl"),
                            t.controls.remove("searchControl"),
                            t.controls.remove("trafficControl"),
                            t.controls.remove("typeSelector"),
                            t.controls.remove("fullscreenControl"),
                            t.controls.remove("rulerControl"),
                            (e = new ymaps.Placemark(
                              t.getCenter(),
                              {
                                iconCaption: p,
                                balloonContent: p,
                              },
                              {
                                preset: "islands#redDotIconWithCaption",
                              }
                            )),
                            t.geoObjects.add(e)),
                        a(c);
                      var u, p;
                    })(l));
              },
              function (e) {
                console.log(e);
              }
            );
          }
          function a(e) {
            i("#messageHeader").text("Данные получены:"), i("#message").text(e);
          }
          i(n).off("change"),
            i(n).off("keypress"),
            i(n).bind("change", function (e) {
              e.preventDefault(), o();
            }),
            i(n).on("input", function (e) {
              e.preventDefault(), o();
            }),
            i(n).on("keypress", function (e) {
              13 === e.which && (e.preventDefault(), o());
            }),
            i(n).val() && o();
        });
      }
      i(document).ready(function () {
        var e, t, n, o, a, r, s, d, p, f, h;
        function g() {
          icHelper.showModalAlert(
            "Ошибка выполнения запроса, попробуйте повторить запрос позднее.",
            '<div class="text-center"><button onclick="icHelper.hideModal(\'siteModalAlert\');" type="button" class="btn-light btn">Закрыть</button></div>'
          );
        }
        function v(e) {
          if (400 === e.status) {
            for (var t in e.responseJSON.fields)
              i("#" + t).after(
                i("<span/>")
                  .addClass("invalid-feedback d-block")
                  .append(
                    i("<span/>")
                      .addClass("d-block")
                      .append(
                        i("<span/>")
                          .addClass("form-error-message")
                          .text(e.responseJSON.fields[t])
                      )
                  )
              );
            for (var t in e.responseJSON.files)
              i("div[data-id='" + t + "']").html(
                i("<span/>")
                  .addClass("invalid-feedback d-block")
                  .append(
                    i("<span/>")
                      .addClass("d-block")
                      .append(
                        i("<span/>")
                          .addClass("form-error-message")
                          .text(e.responseJSON.files[t])
                      )
                  )
              );
          }
        }
        (i(".subRequestStatisticCount").length > 0 ||
          1 === i("#new-requests-count").length) &&
          ((url = Routing.generate("company_subrequest_count")),
          i.get(url).done(function (e) {
            (e = JSON.parse(e)),
              i.each(e, function (e, t) {
                var n = 0;
                if ("requestsAcceleration" === e || "techContests" === e) {
                  if (t > 0) {
                    i('.subRequestStatisticCount[data-type="' + e + '"]')
                      .html(t)
                      .removeClass("d-none");
                    var o = i("#serviceCountContainer"),
                      a = parseInt(o.text()),
                      r = (a = isNaN(a) ? 0 : a) + parseInt(t);
                    o.text(r), o.removeClass("d-none");
                  }
                } else if (
                  (t > 0 &&
                    ((n += t),
                    i('.subRequestStatisticCount[data-type="' + e + '"]').html(
                      '<span class="ico-sp new-in-requests new-requests">' +
                        t +
                        "</span>"
                    )),
                  n > 0)
                ) {
                  var s = parseInt(i("#new-requests-count").text()),
                    l = (s = isNaN(s) ? 0 : s) + n;
                  i("#new-requests-count").text(l),
                    i("#new-requests-count").removeClass("d-none");
                }
              });
          })),
          i(document).on(
            "click",
            ".add-another-collection-widget",
            function (e) {
              if (!i("#product_add_Attributes").length) return !1;
              var t = i("#product_add_Attributes").data().prototype,
                n = i(".characteristic"),
                o = 1 + i(".pole_group_add").length;
              if (i("#product_add_Attributes_0").length > 0)
                for (
                  o += i("#product_add_Attributes > .form-group").length - 1;
                  i("#product_add_Attributes_" + o).length > 0;

                )
                  o += 1;
              (t = (t = t.replace(/__M_NUM__/g, o)).replace(/__name__/g, o)),
                i("<div class='pole_group_add' />").html(t).appendTo(n),
                i("#product_add_Attributes").length > 0 && y(),
                icHelper.selectJs();
            }
          ),
          i(document).on("click", ".remove_attribute_service", function () {
            i(this).closest(".attribute_li").remove();
          }),
          i(document).on("click", ".add-service-equip-select", function () {
            var e = i(i(this).attr("data-list-selector")),
              t = e.data("widget-counter") || e.children().length,
              n = e.attr("data-prototype");
            (n =
              "<div class='pole_group_add'>" +
              n.replace(/__name__/g, t) +
              '<div class="btn_type2 remove_equipment_service mt-4">\n<div class="btn_text">Удалить</div>\n<div class="btn_ico"><i class="material-icons">close</i></div>\n</div></div>'),
              e.data("widget-counter", ++t);
            var o = i(n);
            i(".equipment-list-select").each(function () {
              var e = i(this).val();
              e &&
                o
                  .find("select")
                  .find("option[value=" + e + "]")
                  .attr("disabled", "disabled");
            }),
              i(o).appendTo(e),
              icHelper.selectJs();
          }),
          i(document).on("click", ".remove_equipment_service", function () {
            var e = i(this).parents(".pole_group_add").find("select").val();
            i(this)
              .parents(".pole_group_add")
              .siblings(".pole_group_add")
              .find("select")
              .each(function () {
                e &&
                  i(this)
                    .find("option[value=" + e + "]")
                    .removeAttr("disabled");
              }),
              i(this).parents(".pole_group_add").remove();
          }),
          i(document).on("change", ".equipment-list-select", function () {
            var e = i(this).data("val"),
              t = i(this).val();
            i(this).data("val", t),
              i(this)
                .parents(".pole_group_add")
                .siblings(".pole_group_add")
                .find("select")
                .each(function () {
                  e &&
                    i(this)
                      .find("option[value=" + e + "]")
                      .removeAttr("disabled"),
                    t &&
                      i(this)
                        .find("option[value=" + t + "]")
                        .attr("disabled", "disabled");
                });
          }),
          (e = "#invests input"),
          (t = "#invests"),
          (n = "#investmentType .select2-container"),
          (o = "#investmentType select"),
          (a = "#investmentType"),
          (r = "#additionalNeeds input"),
          (s = "#additionalNeeds"),
          (d = "#areas input"),
          (p = "#areas"),
          (f = 'label[for="company_needs_form_areas"]'),
          (h = "#ContactPersBlock"),
          i("#company_needs_form_phone").mask("+7 (999) 999-9999"),
          i(document).on(
            "DOMSubtreeModified",
            "#select2-company_needs_form_Type-container",
            function () {
              switch (i(this).attr("title")) {
                case "Инвестиции":
                  i(t).show(),
                    i(e).prop("required", !0).prop("disabled", !1),
                    i(a).show(),
                    i(o).prop("required", !0).prop("disabled", !1),
                    i(n).css("width", "600px"),
                    i(d).prop("required", !1).prop("disabled", !0),
                    i(p).hide();
                  break;
                case "Помещения":
                  i(t).hide(),
                    i(e).prop("required", !1).prop("disabled", !0),
                    i(d).prop("required", !0).prop("disabled", !1),
                    i(p).show(),
                    i(f).length && i(f).addClass("required"),
                    i(a).hide(),
                    i(o).prop("required", !1).prop("disabled", !0),
                    i(s).hide(),
                    i(r).prop("required", !1).prop("disabled", !0);
                  break;
                default:
                  i(t).hide(),
                    i(e).prop("required", !1).prop("disabled", !0),
                    i(d).prop("required", !1).prop("disabled", !0),
                    i(p).hide(),
                    i(a).hide(),
                    i(o).prop("required", !1).prop("disabled", !0),
                    i(s).hide(),
                    i(r).prop("required", !1).prop("disabled", !0);
              }
              i(h).is(":visible")
                ? i("#company_needs_form_Type").val() ||
                  (i(h).hide(),
                  i(h)
                    .find(".ContactPers")
                    .prop("required", !1)
                    .prop("disabled", !0),
                  i(h)
                    .find(".ContactPers")
                    .parents(".form-group")
                    .find("label")
                    .removeClass("required"))
                : (i(h).show(),
                  i(h)
                    .find(".ContactPers")
                    .prop("required", !0)
                    .prop("disabled", !1),
                  i(h)
                    .find(".ContactPers")
                    .parents(".form-group")
                    .find("label")
                    .addClass("required"));
            }
          ),
          i(document).on("DOMSubtreeModified", n, function () {
            var e = !1;
            i(
              "#investmentType .select2-selection ul.select2-selection__rendered li"
            ).each(function () {
              "Другое" === i(this).attr("title") && (e = !0);
            }),
              e
                ? (i(s).show(), i(r).prop("required", !0).prop("disabled", !1))
                : (i(s).hide(), i(r).prop("required", !1).prop("disabled", !0));
          }),
          i(document).on("click", "#company_needs_form_save", function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              i(".invalid-feedback").remove();
            var t = "#company_needs_form_invests[required]",
              n = "#company_needs_form_areas[required]",
              o =
                !(i(t).length > 0) || i.isNumeric(i(t).val().replace(",", ".")),
              a =
                !(i(n).length > 0) || i.isNumeric(i(n).val().replace(",", "."));
            if (!o || !a) {
              var r = icHelper.createError("Значение не допустимо");
              return o ? i(n).after(r) : i(t).after(r), !1;
            }
            if (a) {
              var s = parseFloat(i(n).val());
              i(n).val(s.toFixed(2));
            } else o && ((s = parseFloat(i(t).val())), i(t).val(s.toFixed(2)));
            i(this).addClass("btn-ico"),
              i(this).html(i(this).text() + "<i></i>"),
              i(this).attr("disabled", !0),
              icHelper.beforeLoadMore(i(this)),
              i("#needsForm").submit();
          }),
          i(document).on("click", "#addNewChar", function () {
            var e = i(".characteristic").clone();
            i(this).before(e[0]),
              setTimeout(function () {
                i('.modal *[data-toggle="tooltip"]').tooltip();
              }, 300);
          }),
          i("#showMoreSimilar").click(function () {
            var e = i(".similar-page:hidden").first(),
              t = i(this);
            e.data("showmore") || t.hide(), e.show();
          }),
          i(".showMoreProducts").click(function () {
            var e =
                i("#Products-content")
                  .find(".product-page")
                  .last()
                  .data("page") + 1,
              t = i(this).parents(".YML-content").length ? "yml" : "list",
              n = Routing.generate("profile_products", {
                page: e,
                parent: t,
                searchText: i(x).val(),
              }),
              o = i(this);
            c(o),
              i.get(n).done(function (e) {
                _(o, e), icHelper.selectJs();
              });
          }),
          i("#showMoreCenters").click(function () {
            var e =
                i("#centersContainer").find(".objects-page").last().data()
                  .page + 1,
              t = Routing.generate("profile_objects", {
                page: e,
                type: "centers",
              }),
              n = this;
            c(i(n)),
              i.get(t).done(function (e) {
                _(i(n), e, "#centersContainer");
              });
          }),
          i("#showMoreCoworkings").click(function () {
            var e =
                i("#coworkingContainer").find(".objects-page").last().data()
                  .page + 1,
              t = Routing.generate("profile_objects", {
                page: e,
                type: "coworkings",
              }),
              n = this;
            c(i(n)),
              i.get(t).done(function (e) {
                _(i(n), e, "#coworkingContainer");
              });
          }),
          i(document).on("click", ".showMoreInCat", function () {
            var e = i(this)
                .siblings(".oii-cat-objects")
                .find(".prof_pl_object")
                .parent(".d-none"),
              t = i(this).data("showcount"),
              n = e.length ? e.length - t : 0;
            e.length &&
              e.each(function (e) {
                e < t && i(this).removeClass("d-none");
              }),
              n <= 0 && i(this).hide();
          }),
          i("#showMoreCTE").click(function () {
            var e = i(".product-page").last().data("page") + 1,
              t = Routing.generate("profile_products", {
                page: e,
                searchText: i(x).val(),
                type: "CTE",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreServices").click(function () {
            var e = i(".product-page").last().data("page") + 1,
              t = Routing.generate("profile_services", {
                page: e,
                searchText: i(x).val(),
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i(document).on(
            "change",
            "#measure_services_form_claimType",
            function (e) {
              e.preventDefault();
              var t = i(this).closest("form");
              icHelper.iasFormSendAjax(t, function (e) {
                i("#measureServicesContainer").html(e),
                  i(e).data("showmore")
                    ? i("#showMoreMyServicesMeasure").show()
                    : i("#showMoreMyServicesMeasure").hide();
              });
            }
          ),
          i(document).on("change", "#services_filter_claimType", function (e) {
            e.preventDefault();
            var t = i(this).closest("form");
            icHelper.iasFormSendAjax(t, function (e) {
              i(e).data("showmore")
                ? i("#showMoreMyServicesMeasure").show()
                : i("#showMoreMyServicesMeasure").hide(),
                i("#servicesContainer").html(e);
            });
          }),
          i("#showMoreMyServicesMeasure").click(function () {
            var e = i('form[name = "services_filter"]').serialize(),
              t = i(".service-page").last().data("page") + 1,
              n =
                Routing.generate("my_services_list", {
                  page: t,
                }) +
                "?" +
                e,
              o = i(this);
            c(o),
              i.get(n).done(function (e) {
                _(o, e, i("#servicesContainer"));
              });
          }),
          i("#myServicesProfileLi").on("click", function (e) {
            var t = i(this);
            if ("1" != t.attr("data-load")) return !0;
            icHelper.loaderSpin(),
              (url = Routing.generate("my_services_list", {
                page: 1,
              }));
            var n = i("#showMoreMyServicesMeasure");
            i.get(url)
              .done(function (e) {
                t.attr("data-load", "0"),
                  icHelper.removeLoader(),
                  _(n, e, i("#servicesContainer")),
                  n.removeClass("d-none");
              })
              .fail(function () {
                icHelper.removeLoader(),
                  icHelper.showModalAlert(
                    "Произошла ошибка, попробуйте позднее."
                  );
              });
          }),
          i("#measureProfileLi").on("click", function () {
            if ("1" != i(this).attr("data-load")) return !0;
            icHelper.loaderSpin(),
              (url = Routing.generate("measure_request_list", {
                page: 1,
              }));
            var e = i("#showMoreMeasures");
            i.get(url).done(function (t) {
              i("#measureProfileLi").attr("data-load", "0"),
                icHelper.removeLoader(),
                _(e, t, i("#measureServicesContainer")),
                e.removeClass("d-none");
            });
          }),
          i("#showMoreMeasures").click(function () {
            var e = i('form[name = "_measure_services_form"]').serialize(),
              t = i(".measure-page").last().data("page") + 1,
              n =
                Routing.generate("measure_request_list", {
                  page: t,
                }) +
                "?" +
                e,
              o = i(this);
            c(o),
              i.get(n).done(function (e) {
                _(o, e, i("#measureServicesContainer"));
              });
          }),
          i("#showMoreTech").click(function () {
            var e = i(".tech-page").last().data("page") + 1,
              t = Routing.generate("profile_technology_patents", {
                page: e,
                part: "techs",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e, "#companyProductsContainer");
              });
          }),
          i("#showMoreRequests").click(function () {
            var e = i(".measure-page").last().data("page") + 1,
              t = Routing.generate("profile_measureRequest", {
                spage: e,
                part: "requests",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i(document).on("click", "#showMoreAccelerations", function () {
            var e = i(this).data("page"),
              t = i(".acceleratorStatus.active").data().status,
              n = Routing.generate("profile_accelerator", {
                page: e,
                status: t,
              }),
              o = i(this);
            c(o),
              i.get(n).done(function (t) {
                i(t).data().showmore && (o.data().page = e + 1),
                  _(o, t),
                  o.remove();
              });
          }),
          i("#showMoreContests").click(function () {
            var e = i(this).data("page"),
              t = Routing.generate("profile_techcontests", {
                page: e,
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (t) {
                i(t).data().showmore && (n.data().page = e + 1), _(n, t);
              });
          }),
          i("#showMoreFavs").click(function () {
            var e = i(".favorite-page").last().data("page") + 1,
              t = Routing.generate("profile_partners", {
                fPage: e,
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showNeedsMore").click(function () {
            var e = i(".needs-page").last().data("page") + 1,
              t = Routing.generate("profile_needs", {
                needspage: e,
                part: "needs",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showProjMore").click(function () {
            var e = i(".proj-page").last().data("page") + 1,
              t = Routing.generate("profile_needs", {
                projpage: e,
                part: "projects",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e), icHelper.tooltipJs();
              });
          }),
          i(document).on("click", "#showMoreIasProjects", function () {
            var e = i(this).data("page") + 1,
              t = i(this).data().physical
                ? "physicalPersonProjects"
                : "profile_company_project_list",
              n = Routing.generate(t, {
                page: e,
              }),
              o = i(this);
            c(o),
              i.get(n).done(function (t) {
                i(t).data().showmore && (o.data().page = e),
                  _(o, t),
                  o.remove(),
                  icHelper.tooltipJs();
              });
          }),
          i(document).on("click", "#showMoreOtherRooms", function () {
            var e = i(".otherRooms-page").last().data("page") + 1,
              t = Routing.generate("profile_rent", {
                otherRoomsPage: e,
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreBusinessRooms").click(function () {
            var e = i(".businessRooms-page").last().data("page") + 1,
              t = Routing.generate("profile_rent", {
                businessRoomsPage: e,
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreBuysC").click(function () {
            var e = i(".buysc-page").last().data("page") + 1,
              t = Routing.generate("profile_buys", {
                cpage: e,
                part: "c",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreBuysPPC").click(function () {
            var e = i(".ppc-page").last().data("page") + 1,
              t = Routing.generate("profile_buys", {
                cpage: e,
                part: "ppc",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreBuysPPS").click(function () {
            var e = i(".pps-page").last().data("page") + 1,
              t = Routing.generate("profile_buys", {
                cpage: e,
                part: "pps",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreBuysS").click(function () {
            var e = i(".buyss-page").last().data("page") + 1,
              t = Routing.generate("profile_buys", {
                spage: e,
                part: "s",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreBuysEaist").click(function () {
            var e = i(".eaist-page").last().data("page") + 1,
              t = Routing.generate("profile_buys", {
                epage: e,
                part: "eaist",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreBuysGpb").click(function () {
            var e = i(".buysgpb-page").last().data("page") + 1,
              t = Routing.generate("profile_buys", {
                gpage: e,
                part: "gpb",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreBuysFz44s").click(function () {
            var e = i(".fz44s-page").last().data("page") + 1,
              t = Routing.generate("profile_buys", {
                fzspage: e,
                part: "fz44s",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreBuysFz44c").click(function () {
            var e = i(".fz44c-page").last().data("page") + 1,
              t = Routing.generate("profile_buys", {
                fzcpage: e,
                part: "fz44c",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreEquips").click(function () {
            var e = i(".eq-page").last().data("page") + 1,
              t = Routing.generate("profile_equips", {
                eqPage: e,
                type: "equips",
                searchText: i(x).val(),
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i("#showMoreProdServices").click(function () {
            var e = i(".prodServices-page").last().data("page") + 1,
              t = Routing.generate("profile_equips", {
                prodServicesPage: e,
                type: "prodServices",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i(document).on("click", "#showMoreLicense", function () {
            var e = i(".lic-page").last().data("page") + 1,
              t = Routing.generate("profile_technology_patents", {
                pageLicense: e,
                part: "licenses",
              }),
              n = i(this);
            c(n),
              i.get(t).done(function (e) {
                _(n, e);
              });
          }),
          i(document).on("click", "#showMorePatents", function () {
            var e = i(this)
                .parent()
                .find(".patents-page")
                .first()
                .data("search"),
              t =
                i(this).parent().find(".patents-page").last().data("page") + 1;
            if (e)
              var n = i("#lk-search-input").val(),
                o = Routing.generate("profile_technology_patents", {
                  pagePatents: t,
                  part: "patents",
                  searchText: n,
                });
            else
              o = Routing.generate("profile_technology_patents", {
                pagePatents: t,
                part: "patents",
              });
            var a = i(this);
            c(a),
              i.get(o).done(function (e) {
                _(a, e);
              });
          }),
          i(document).on("click", "#showMoreRids", function () {
            var e = i(this).data("page") + 1,
              t = i(this);
            c(t),
              i
                .get(
                  Routing.generate("exchange-patents", {
                    page: e,
                  })
                )
                .done(function (n) {
                  _(t, n), i(t).data("page", e);
                });
          }),
          i(document).on("click", "#deleteCompanyRoom", function () {
            var e = i(this).data("roomid"),
              t = "btn-close-modal",
              n = i(this).parents(".card0"),
              o = n.find(".span_chislo"),
              a = "#rentCount",
              r = n.find(".card-body > button"),
              s = (n.find(".card-body > div"), n.find(".content-block")),
              l =
                '<div class="modal_btn btn_center"><a href="' +
                Routing.generate("profile_rent") +
                '" class="btn btn-grad ' +
                t +
                '">Закрыть</a></div>',
              c = i(o).text();
            return (
              icHelper.showModalConfirm(
                "Вы действительно хотите удалить помещение?",
                function () {
                  i(document).on("click", "." + t, function () {
                    i("#siteModalAlert").modal("hide");
                  }),
                    icHelper.loaderSpin(),
                    i
                      .get(
                        Routing.generate("rentDeleteRoom", {
                          id: e,
                          type: s.hasClass("otherRooms-page")
                            ? "other"
                            : "business",
                        })
                      )
                      .done(function (e) {
                        s.remove(),
                          i(r).attr("disabled", !1),
                          i(r).css("display", "block"),
                          i(o).text(c - 1),
                          i(a).text(i(a).text() - 1),
                          i(".form_big.accordion_profile").remove(),
                          i("#pjax-container").append(e);
                        var n =
                          '<div class="modal_btn btn_center"><a href="#" onclick="icHelper.hideModal()" class="btn btn-grad ' +
                          t +
                          '">Закрыть</a></div>';
                        icHelper.showModalAlert("Помещение успешно удалено", n),
                          icHelper.removeLoader();
                      })
                      .fail(function (e, t, n) {
                        icHelper.showModalAlert(
                          "Возникла ошибка при удалении",
                          l
                        ),
                          icHelper.removeLoader();
                      });
                }
              ),
              !1
            );
          }),
          i(document).on(
            "click",
            "#delate_competance_company, #deleteUserCompetence",
            function () {
              var e = i(this).data("itemid");
              return (
                icHelper.showModalConfirm(
                  "Вы действительно хотите удалить данную компетенцию?",
                  function () {
                    icHelper.loaderSpin(),
                      i
                        .get(
                          Routing.generate("deleteCompanyCompetence", {
                            id: e,
                          })
                        )
                        .done(function (e) {
                          window.location.reload();
                        })
                        .always(function (e, t, n) {
                          icHelper.removeLoader();
                        });
                  }
                ),
                !1
              );
            }
          ),
          i(document).on("click", "#delate_needs_company", function () {
            var e = i(this).data("itemid"),
              t = i("#needsCount"),
              n = t.text();
            return (
              icHelper.showModalConfirm(
                "Вы действительно хотите удалить данную потребность?",
                function () {
                  i.get(
                    Routing.generate("deleteCompanyNeeds", {
                      id: e,
                    })
                  )
                    .done(function (e, o, a) {
                      t.text(n - 1);
                      var r = i("#profileInfoPart3");
                      if (!r.length) {
                        return (
                          icHelper.showModalAlert(
                            "Удалено",
                            '<div class="text-center"><button class="btn btn-primary">Закрыть</button></div>'
                          ),
                          (window.location.href = Routing.generate(
                            "profile_company_project_list"
                          )),
                          !1
                        );
                      }
                      r.html(e);
                    })
                    .fail(function (e, t, n) {
                      alert("во время удаления произошла ошибка");
                    });
                }
              ),
              !1
            );
          }),
          i(document).on("click", "#deleteFromFavorites", function () {
            var e = i(this).data("favid"),
              t = i(this);
            return (
              icHelper.showModalConfirm(
                "Вы действительно хотите удалить данную компанию из избранного?",
                function () {
                  i.get(
                    Routing.generate("removeCompanyFromFavorites", {
                      id: e,
                    })
                  )
                    .done(function (e, n, o) {
                      var a = i(".span_chislo.fav").text();
                      (a = a - 0 - 1), i(".span_chislo.fav").text(a);
                      var r = Routing.generate("profile_partners", {
                          fPage: 1,
                        }),
                        s = t.parents(".favorite-page").next("#showMoreFavs");
                      c(s),
                        i.get(r).done(function (e) {
                          t
                            .parents(".card-body")
                            .find(".favorite-page")
                            .remove(),
                            _(s, e);
                        });
                    })
                    .fail(function (e, t, n) {});
                }
              ),
              !1
            );
          }),
          i(document).on("click", "#push-to-yandex", function (e) {
            return (
              e.preventDefault(),
              i
                .get(
                  Routing.generate("negotiation_yamarket", {
                    id: i("#companyId").data("companyid"),
                  })
                )
                .done(function (e) {
                  icHelper.showModal(e, "Заявка в Я.Маркет");
                }),
              !1
            );
          }),
          i(document).on("click", "#ya_market_submit", function () {
            var e =
              11 ===
              i("#ya_market_phone")
                .val()
                .replace(/\+|\(|\)|\-|\s/g, "").length;
            if (
              (i(
                'form[name="ya_market"] [required]:not(#ya_market_phone)'
              ).each(function () {
                var e = i(this).val();
                if (
                  (!e || 0 === e.length) &&
                  i(this).parent().find(".invalid-feedback").length < 1
                ) {
                  var t = icHelper.createError("Поле не заполнено");
                  i(this).after(t);
                } else e && e.length > 0 && i(this).parent().find(".invalid-feedback").length > 0 && i(this).parent().find(".invalid-feedback").remove();
              }),
              !e)
            ) {
              if (
                i("#ya_market_phone").parent().find(".invalid-feedback")
                  .length < 1
              ) {
                var t = icHelper.createError("Поле не заполнено");
                i("#ya_market_phone").after(t);
              }
              return !1;
            }
            i("#ya_market_phone").parent().find(".invalid-feedback").length >
              0 &&
              i("#ya_market_phone").parent().find(".invalid-feedback").remove();
          }),
          i(document).on("focus", "#ya_market_phone", function () {
            i(this).mask("+7(999) 999-9999");
          }),
          i(document).on("click", "#companyAddProduct", function (e) {
            e.preventDefault();
            return (
              icHelper.showModal(
                '<div class="modal_two_produkt_dowland">\n            <div class="two_produkt_dowland">\n                <div class="two_produkt_pl dt1">\n                    <div class="div_tit">Добавить с помощью Портала поставщиков</div>\n                    <div class="div_text">Загрузите продукты вашей компании с помощью классификатора Портала поставщиков (<a class="" href="https://zakupki.mos.ru/">zakupki.mos.ru</a>). В дальнейшем вы сможете опубликовать добавленные продукты и на Портале поставщиков</div>\n                    <div class="div_btn">\n                        <a href="/send_to_suppliers_portal/1" class="btn btn-primary">Добавить</a>\n                    </div>\n                </div>\n<div class="two_produkt_pl dt2">\n                    <div class="div_tit">Добавить только на <a class="" href="https://i.moscow/">i.moscow</a></div>\n                    <div class="div_btn">\n                        <button class="btn btn-primary companyAddProductOnSIte">Добавить</button>\n                </div>\n            </div>\n            </div>\n        </div>',
                "",
                void 0,
                "modal_center modal800 modal_not_header modal_not_header2 modal_marketplace"
              ),
              !1
            );
          }),
          i(document).on("click", ".companyAddProductOnSIte", function (e) {
            e.preventDefault();
            var t = i(this);
            icHelper.beforeLoadMore(t),
              i
                .get(
                  Routing.generate("productAdd", {
                    id: i("#userCompanyHolder").data("usercompany"),
                  })
                )
                .done(function (e) {
                  icHelper.showModal(
                    e,
                    "Добавление новой продукции",
                    void 0,
                    "modal800 modal_accordion"
                  ),
                    i(".modal.show").removeClass(
                      "modal_center modal_not_header modal_not_header2"
                    ),
                    l("product_add"),
                    setTimeout(function () {
                      i('form[name="product_add"] #product_add_save').attr(
                        "type",
                        ""
                      ),
                        icHelper.selectJs(".modal.show select");
                    }, 500);
                });
          }),
          i(document).on("click", "#companyAddService", function (e) {
            e.preventDefault(),
              i
                .get(
                  Routing.generate("productAdd", {
                    id: i("#companyId").data("companyid"),
                    type: "service",
                  })
                )
                .done(function (e) {
                  icHelper.showModal(
                    e,
                    " Добавление новой услуги",
                    void 0,
                    "modal800 modal_service_support modal_addproduct"
                  );
                  var t = l("service_add", !1, function () {
                    C(), u(), m();
                  });
                  C(),
                    i('form[name="service_add"]').off("submit"),
                    i('form[name="service_add"]').on("submit", function (e) {
                      if (
                        (e.preventDefault(e),
                        !i("#service_add_serviceType").val())
                      ) {
                        if (!i(this).find(".invalid-feedback").length) {
                          var n = icHelper.createError("Заполните это поле.");
                          i("#service_add_serviceType").after(n);
                        }
                        return !1;
                      }
                      icHelper.iasFormSendAjax(
                        i(this)[0],
                        null,
                        null,
                        null,
                        null,
                        {
                          photo: t.getQueuedFiles(),
                        }
                      );
                    }),
                    i("#service_add_serviceType").on("change", function () {
                      i(this).val() && i(".invalid-feedback").remove();
                    });
                });
          }),
          i(document).on("click", ".editService", function (e) {
            e.preventDefault();
            var t = i(this).data("itemid");
            i.get(
              Routing.generate("productUpdate", {
                guid: t,
                type: "service",
              })
            ).done(function (e) {
              icHelper.showModal(e, "Редактирование услуги"),
                icHelper.etpGpbInit(),
                l("service_add", !1, function () {
                  C(), m(), u();
                }),
                C(),
                m(),
                u();
            });
          }),
          i(document).on("click", ".editEquipService", function (e) {
            e.preventDefault();
            var t = i(this).data("itemid");
            i(this).data("equipid");
            i.get(
              Routing.generate("equipServiceUpdate", {
                guid: t,
              })
            ).done(function (e) {
              icHelper.showModal(e, "Редактирование услуги"),
                l("equipment_services_add");
            });
          }),
          i(document).on(
            "click",
            "#companyAddCompetance, #companyAddCompetence",
            function () {
              var e = i("#companyId").data("companyid"),
                t = i(this);
              return (
                icHelper.beforeLoadMore(t),
                i
                  .get(
                    Routing.generate("addCompanyCompetence", {
                      id: e,
                    })
                  )
                  .done(function (e) {
                    var n = "#company_competance_Name";
                    icHelper.showModal(e, "Добавление компетенции"),
                      icHelper.afterLoadMore(t, "", !0),
                      i(".counter_textare_num .sp1").text(i(n).val().length),
                      i(document).on(
                        "keyup keypress blur change",
                        n,
                        function () {
                          var e = i(this).val().length;
                          if (
                            (i(".counter_textare_num .sp1").text(
                              i(this).val().length
                            ),
                            e > 255)
                          )
                            return !1;
                        }
                      );
                  }),
                !1
              );
            }
          ),
          i(document).on("change", "#company_needs_form_Type", function () {
            var e = "#company_needs_form_investmentType";
            "1008491" === i(this).val()
              ? (i(e).prop("required", !0),
                i('[for="company_needs_form_investmentType"]').addClass(
                  "required"
                ))
              : i(e).prop("required", !1);
          }),
          i(document).on(
            "change",
            "#company_needs_form_investmentType",
            function () {
              var e = "#company_needs_form_invests";
              "Другое" === i(this).val()
                ? (i(e).prop("required", !0),
                  i('[for="company_needs_form_invests"]').addClass("required"))
                : i(e).prop("required", !1);
            }
          ),
          i(document).on("click", "#companyNeedAdd", function () {
            return (
              i
                .get(
                  Routing.generate("companyNeedAdd", {
                    id: i("#lk-companyID").data("id"),
                  })
                )
                .done(function (e) {
                  icHelper.showModal(e, "Добавление потребности");
                }),
              !1
            );
          }),
          i(document).on("click", "#step_form_skip", function () {
            var e = i(this).data("message");
            e &&
              icHelper.showModalAlertRedirectOnClose(
                e,
                null,
                window.location.href
              );
          }),
          i(document).on("click", "#companyAddEquip", function () {
            icHelper.loaderSpin();
            var e = i(this).data("id") || "";
            return (
              i
                .get(
                  Routing.generate("companyEquipAdd", {
                    id: i("#companyId").data("companyid"),
                    serviceId: e,
                  })
                )
                .done(function (e) {
                  icHelper.removeLoader(),
                    icHelper.showModal(
                      e,
                      "Добавление оборудования",
                      void 0,
                      "modal800 modal_accordion"
                    ),
                    l("equipment_form"),
                    icHelper.gSelectBuild("#gSel_equipAdd"),
                    i(document).on("click", ".activeEquipType", function () {
                      var e = i(this).data().gid;
                      i("#equipment_form_Type").val(e);
                    }),
                    i(document).on(
                      "submit",
                      'form[name="equipment_form"]',
                      function (e) {
                        var t = i("#equipment_form_Type").val(),
                          n = i("#equipment_form_Type")
                            .parent()
                            .find(".invalid-feedback").length;
                        if (!t) {
                          if ((e.preventDefault(), i.ajaxQ.abortAll(), !n)) {
                            var o = icHelper.createError("Заполните это поле.");
                            i("#equipment_form_Type")
                              .parent()
                              .find(".gSelect")
                              .after(o);
                          }
                          return !1;
                        }
                        if (
                          i(".req_file").length &&
                          i(".dz-details").length <= 1
                        )
                          return (
                            e.preventDefault(),
                            i.ajaxQ.abortAll(),
                            i(".dz-message").html(
                              icHelper.createError("Загрузите изображение.")
                            ),
                            !1
                          );
                      }
                    );
                })
                .fail(function () {
                  icHelper.removeLoader();
                }),
              !1
            );
          }),
          i(document).on("click", "#equipServicesAdd", function () {
            var e = i(this).data("id");
            return (
              i
                .get(
                  Routing.generate("equipServicesAdd", {
                    equipId: e,
                  })
                )
                .done(function (e) {
                  icHelper.showModal(
                    e,
                    "Добавление услуги оборудования",
                    void 0,
                    "modal800 modal_accordion"
                  ),
                    l("equipment_services_add");
                }),
              !1
            );
          }),
          i(document).on("submit", 'form[name="equipment_form"]', function (e) {
            "#equipment_form_Type".val() || e.preventDefault();
          }),
          i(document).on("click", "#showCoworkingAddPopup", function (e) {
            return (
              e.stopPropagation(),
              i.get(Routing.generate("coworking_add_popup")).done(function (e) {
                icHelper.showModal(
                  e,
                  "Добавьте свой коворкинг на i.moscow и сдавайте ваши пространства",
                  void 0,
                  "modal800 modal_center modal_center2 modal_center_head"
                );
              }),
              !1
            );
          }),
          i(document).on("click", "#companyObjectDelete", function (e) {
            e.preventDefault();
            var t = i(this).data("itemid");
            return (
              icHelper.showModalConfirm(
                "Вы действительно хотите удалить данный объект?",
                function () {
                  icHelper.loaderSpin(),
                    i
                      .get(
                        Routing.generate("companyObjectDelete", {
                          objectId: t,
                        })
                      )
                      .done(function (e) {
                        icHelper.removeLoader(),
                          i("#modalBodyAlert").html(""),
                          icHelper.showModalAlert("Объект успешно удален"),
                          window.location.reload();
                      })
                      .fail(function () {
                        icHelper.removeLoader(),
                          i("#modalBodyAlert").html(""),
                          icHelper.showModalAlert(
                            "Произошла ошибка при удалении объекта"
                          );
                      });
                }
              ),
              !1
            );
          }),
          i(document).on("click", ".setCompanyObjectStatus", function (e) {
            e.preventDefault();
            var t = i(this).attr("data-objectId"),
              n = i(this).attr("data-objectStatus"),
              o =
                7604 == n
                  ? "опубликован"
                  : 7606 == n
                  ? "снят с публикации"
                  : "изменен";
            return (
              icHelper.loaderSpin(),
              i
                .get(
                  Routing.generate("companyObjectSetStatus", {
                    objectId: t,
                    statusId: n,
                  })
                )
                .done(function (e) {
                  icHelper.removeLoader(),
                    i("#modalBodyAlert").html(""),
                    icHelper.showModalAlert("Объект успешно " + o),
                    window.location.reload();
                })
                .fail(function () {
                  icHelper.removeLoader(),
                    i("#modalBodyAlert").html(""),
                    icHelper.showModalAlert("Произошла ошибка");
                })
                .always(function () {}),
              !1
            );
          }),
          i(document).on("click", ".companyDeleteCoworkingSpace", function (e) {
            e.preventDefault();
            var t = i(this).data("guid"),
              n = i(this);
            return (
              icHelper.showModalConfirm(
                "Вы действительно хотите удалить данное пространство?",
                function () {
                  icHelper.loaderSpin(),
                    i
                      .get(
                        Routing.generate("companyCoworkingSpaceDelete", {
                          spaceId: t,
                        })
                      )
                      .done(function (e) {
                        icHelper.removeLoader(),
                          i("#modalBodyAlert").html(""),
                          icHelper.showModalAlert(
                            "Пространство успешно удалено"
                          ),
                          n.parents(".space-preview").remove();
                      })
                      .fail(function () {
                        icHelper.removeLoader(),
                          i("#modalBodyAlert").html(""),
                          icHelper.showModalAlert(
                            "Произошла ошибка при удалении пространства"
                          );
                      });
                }
              ),
              !1
            );
          }),
          i(document).on("keypress", ".only-numbers", function (e) {
            var t = e.which ? e.which : e.keyCode;
            return !(t > 31 && (t < 48 || t > 57) && 46 !== t && 44 !== t);
          }),
          i(document).on("click", ".toggleBtn", function () {
            i(this).parent().toggleClass("collaps_btn"),
              i(this).closest("li").find("ul").toggle();
          }),
          i(document).on("click", "#request-promo-btn", function (e) {
            e.stopPropagation();
            var t = Routing.generate("requestInCluster", {
                membered: "member",
              }),
              n = i("#userCompanyHolder").data().usercompany;
            icHelper.loaderSpin(),
              i
                .ajax({
                  method: "POST",
                  global: !0,
                  url: t,
                  data: {
                    company: n,
                  },
                })
                .done(function (e) {
                  icHelper.showModal(
                    e,
                    "Стать участником кластера",
                    void 0,
                    "modal_member_cluster"
                  );
                })
                .fail(function (e) {})
                .always(function () {
                  icHelper.removeLoader();
                });
          }),
          i(document).on("click", "#edit_need_company", function () {
            var e = i(this).data("itemid");
            return (
              i
                .get(
                  Routing.generate("companyNeedUpdate", {
                    id: e,
                    company: i("#lk-companyID").data("id"),
                  })
                )
                .done(function (e) {
                  icHelper.showModal(e, "Редактирование потребности"),
                    icHelper.etpGpbInit();
                }),
              !1
            );
          }),
          i(document).on(
            "click",
            "#update_competance_company, #editUserCompetence",
            function () {
              var e = i(this).data("itemid")
                ? i(this).data("itemid")
                : i.trim(
                    i(this).parents(".div_el.div_edit.btn").first().text()
                  );
              return (
                i
                  .get(
                    Routing.generate("updateCompanyCompetence", {
                      id: e,
                    })
                  )
                  .done(function (e) {
                    var t = "#company_competance_Name";
                    icHelper.showModal(e, "Редактирование компетенции"),
                      i(".counter_textare_num .sp1").text(i(t).val().length),
                      i(document).on(
                        "keyup keypress blur change",
                        t,
                        function () {
                          var e = i(this).val().length;
                          if (
                            (i(".counter_textare_num .sp1").text(
                              i(this).val().length
                            ),
                            e > 255)
                          )
                            return !1;
                        }
                      );
                  }),
                !1
              );
            }
          ),
          i(document).on(
            "click",
            ".add-another-collection-widget-user-info",
            function (e) {
              var t = i(i(this).attr("data-list-selector")),
                n = t.attr("data-prototype"),
                o = t.data().class,
                a = i("." + o).length + 1,
                r = "";
              (r =
                ("#user_info_update_userExperience" ===
                  i(this).attr("data-list-selector")) |
                ("#user_info_update_userEducation" ===
                  i(this).attr("data-list-selector"))
                  ? '<button class="removeField">Удалить</button>'
                  : '<button class="removeField"><svg class="svg-icon" width="12" height="13"><use xlink:href="/svg/all-icons.svg#delete"></use></svg></button>'),
                ("#user_info_update_userExperience" ===
                  i(this).attr("data-list-selector")) |
                  ("#user_info_update_userEducation" ===
                    i(this).attr("data-list-selector")) &&
                  (n =
                    "<div class='form-group'><div id=\"user_info_update_" +
                    o +
                    "_" +
                    a +
                    '" class="' +
                    o +
                    '">' +
                    i(n).html() +
                    "</div>"),
                (n = n.replace(/__name__/g, a));
              var s = i("<div class='pole_group_add' />").html(n + r),
                l = s.find(".type-physical-contact");
              if (l.length > 0) {
                var c = l.data().typeid;
                l.find(".input-type-id").val(c);
              }
              s.appendTo(t),
                ("userExperience" !== o && "userEducation" !== o) ||
                  i('[name="user_info_update[' + o + "][" + a + '][id]"]').val(
                    w()
                  ),
                icHelper.selectJs(),
                icHelper.daterangepickerHtml();
            }
          ),
          i(document).on("change", ".product_char", function () {
            var e = i(this).val(),
              t = 0;
            e
              ? (i(".invalid-feedback").remove(),
                i(".product_char").each(function () {
                  if (e === i(this).val() && (t += 1) > 1)
                    return i(this).val(""), i(this).trigger("change"), !1;
                }))
              : i(this)
                  .parents(".form-group")
                  .first()
                  .parents(".form-group")
                  .first()
                  .remove();
            y();
          }),
          i(document).on("input", ".product_char_value", function () {
            i(this).val() && i(".invalid-feedback").remove();
          }),
          i(document).on(
            "click",
            'form[name="product_add"] #product_add_save',
            function () {
              var e = !0;
              return (
                i('form[name="product_add"] [required]').each(function () {
                  if (!i(this).val()) {
                    if (i(this).hasClass("product_char_value")) {
                      var t = i(this).parents(".pole_group_add").first();
                      if (!t.find("select").val()) return t.remove(), !0;
                    }
                    if (i(this).parent().find(".invalid-feedback").length < 1) {
                      var n = icHelper.createError("Необходимо заполнить поле");
                      i(this).after(n);
                    }
                    return (e = !1), !1;
                  }
                  i(this).parent().find(".invalid-feedback").length > 0 &&
                    i(this).parent().find(".invalid-feedback").remove();
                }),
                e && i('form[name="product_add"]').submit(),
                !1
              );
            }
          ),
          i(document).on("click", ".editProduction", function (e) {
            e.preventDefault();
            var t = i(this).data("itemid");
            return (
              i
                .get(
                  Routing.generate("productUpdate", {
                    guid: t,
                  })
                )
                .done(function (e) {
                  icHelper.showModal(
                    e,
                    "Редактирование продукции",
                    void 0,
                    "modal800 modal_accordion"
                  ),
                    icHelper.etpGpbInit(),
                    l("product_add"),
                    setTimeout(function () {
                      i('form[name="product_add"] #product_add_save').attr(
                        "type",
                        ""
                      );
                    }, 500);
                }),
              !1
            );
          }),
          i(document).on("click", ".deleteProduction", function () {
            var e = i(this).data("itemid"),
              t = i(this).data("type"),
              n = i(this).data("equipid"),
              o = i(this).parents(".card0"),
              a = i(this);
            return (
              icHelper.showModalConfirm("Подтвердить удаление", function () {
                icHelper.loaderSpin(),
                  i
                    .get(
                      Routing.generate("productDelete", {
                        guid: e,
                        equipid: n,
                        type: t,
                      })
                    )
                    .done(function (e) {
                      if (!o.length) {
                        return (
                          i("#modalBodyAlert").html(""),
                          icHelper.showModalAlert(
                            "Удалено",
                            '<div class="text-center"><a href="#" class="btn btn-ico btn-primary profile_punct" data-dismiss="modal">Закрыть<i class="material-icons">chevron_right</i></a></div>'
                          ),
                          (window.location.href = "/profile/services/"),
                          !1
                        );
                      }
                      var n = i(e).data();
                      n &&
                        1 !== n.showmore &&
                        !t &&
                        i("#showMoreProducts").css("display", "none");
                      var r = o.find(".span_chislo").last(),
                        s = r.text();
                      o.find(".animation_height").remove(),
                        o.find("#companyProductsContainer").html(e),
                        r.html(""),
                        r.text(s - 1),
                        s - 1 > 9
                          ? (i("#showMoreProducts").css("display", "block"),
                            i("#showMoreServices").css("display", "block"))
                          : s - 1 > 3 &&
                            i("#showMoreServices").css("display", "block"),
                        a.parents(".col-md-4").length > 0
                          ? a.parents(".col-md-4").remove()
                          : a.parents(".col-md-12").length > 0 &&
                            a.parents(".col-md-12").remove(),
                        icHelper.removeLoader();
                    });
              }),
              !1
            );
          }),
          i(document).on("click", ".deleteProductionMarket", function () {
            var e = i(this).data("itemid"),
              t = i(this);
            return (
              icHelper.showModalConfirm("Подтвердить удаление", function () {
                icHelper.loaderSpin(),
                  i
                    .get(
                      Routing.generate("productDeleteMarket", {
                        guid: e,
                      })
                    )
                    .done(function (e) {
                      "ok" === e &&
                        (t.closest(".plstan_el").remove(),
                        icHelper.showModalAlert(
                          "Продукция удалена.",
                          '<div class="modal_btn btn_center"><a href="#" onclick="icHelper.hideModal()" class="btn btn-grad ">Закрыть</a></div>'
                        ));
                    })
                    .always(function () {
                      icHelper.removeLoader();
                    })
                    .fail(function () {
                      i("#modalBodyAlert").html(""),
                        icHelper.showModalAlert(
                          "Произошла ошибка, попробуйте позже"
                        );
                    });
              }),
              !1
            );
          }),
          i(document).on("click", "#deleteEquip", function () {
            var e = i(this).data("itemid"),
              t = i(this);
            return (
              icHelper.showModalConfirm("Подтвердить удаление", function () {
                icHelper.loaderSpin(),
                  i
                    .get(
                      Routing.generate("equipDelete", {
                        guid: e,
                        confirm: !0,
                      }) +
                        "&r=" +
                        Math.random()
                    )
                    .done(function (e) {
                      if (t.hasClass("single-equip-page-delete"))
                        window.location.href =
                          Routing.generate("profile_equips");
                      else if (t.hasClass("single-service-page-delete"))
                        window.location.reload();
                      else {
                        var n = i("#eqCount").text();
                        i("#eqCount").text(n - 1),
                          i(".eq-page").remove(),
                          i("#companyProductsContainer").append(e),
                          n <= 4
                            ? i("#showMoreEquips").css("display", "none")
                            : i("#showMoreEquips").css("display", "block");
                      }
                    })
                    .always(function () {
                      icHelper.removeLoader();
                    });
              }),
              !1
            );
          }),
          i(document).on("click", "#companyEquipUpdate", function () {
            icHelper.loaderSpin();
            var e = i(this).data("itemid");
            return (
              i
                .get(
                  Routing.generate("companyEquipUpdate", {
                    guid: e,
                  })
                )
                .done(function (e) {
                  icHelper.removeLoader(),
                    icHelper.showModal(
                      e,
                      "Редактирование оборудования",
                      void 0,
                      "modal800 modal_accordion"
                    ),
                    l("equipment_form"),
                    icHelper.gSelectBuild("#gSel_equipAdd"),
                    i(document).on("click", ".activeEquipType", function () {
                      var e = i(this).data().gid;
                      i("#equipment_form_Type").val(e);
                    });
                })
                .fail(function () {
                  icHelper.removeLoader();
                }),
              !1
            );
          }),
          i(document).on("click", "#editCompanyBuild", function () {
            var e = i(this).data("buildid");
            return (
              i
                .get(
                  Routing.generate("companybuildUpdate", {
                    guid: e,
                  })
                )
                .done(function (e) {
                  icHelper.showModal(e, "Редактирование здания"),
                    l("building_form");
                }),
              !1
            );
          }),
          i(document).on(
            "click",
            "#updateCompanyDescriptionButton",
            function () {
              return (
                i
                  .get(
                    Routing.generate("company_updateDescription", {
                      id: i("#companyId").data("companyid"),
                    })
                  )
                  .done(function (e) {
                    icHelper.showModal(e, "Обновление описания компании"),
                      i(document).off("click", "#company_description_save"),
                      i(document).on(
                        "click",
                        "#company_description_save",
                        function () {
                          icHelper.beforeLoadMore(i(this), !0),
                            i('form[name="company_description"]').submit();
                        }
                      );
                  }),
                !1
              );
            }
          ),
          i(document).on("click", "#editCompanyActualAddress", function () {
            var e = i(this);
            return (
              icHelper.beforeLoadMore(e),
              i
                .get(
                  Routing.generate("company_updateActualAddress", {
                    id: i("#companyId").data("companyid"),
                  })
                )
                .done(function (t) {
                  icHelper.showModal(t, "Обновление фактического адреса"),
                    icHelper.afterLoadMore(e, "", !0);
                }),
              !1
            );
          }),
          i(document).on("click", ".findCompany", function (e) {
            e.stopPropagation();
            var t = i(this).closest(".suggests_list"),
              n = i(this).attr("value");
            i(this)
              .parents(".suggests_list")
              .siblings(".userExperienceCompany")
              .val(n),
              t.removeClass("suggests_open"),
              t.hide();
          }),
          i(document).click(function () {
            i("form[name='user_info_update'] .suggests_wrap").removeClass(
              "suggests_open"
            );
          }),
          i(document).on("click", "#addContactCompany", function () {
            var e = i(this);
            return (
              icHelper.beforeLoadMore(e),
              i
                .get(
                  Routing.generate("company_contactAdd", {
                    id: i("#companyId").data("companyid"),
                  })
                )
                .done(function (t) {
                  icHelper.showModal(t, "Добавление нового контакта"),
                    icHelper.afterLoadMore(e, "", !0);
                }),
              !1
            );
          }),
          i(document).on("click", "#addContactsCompany", function () {
            var e = i(this);
            return (
              icHelper.beforeLoadMore(e),
              i
                .get(
                  Routing.generate("company_contactsAdd", {
                    id: i("#companyId").data("companyid"),
                  })
                )
                .done(function (e) {
                  icHelper.showModal(
                    e,
                    "Информация о компании",
                    "#siteModal",
                    "modal800",
                    q
                  ),
                    D(),
                    N();
                })
                .always(function () {
                  icHelper.afterLoadMore(e, "", !0);
                }),
              !1
            );
          }),
          i(document).on("click", "#addContactsCompanyDop", function () {
            var e = i(this);
            return (
              icHelper.beforeLoadMore(e),
              i
                .get(
                  Routing.generate("company_contactsAdd", {
                    id: i("#companyId").data("companyid"),
                  })
                )
                .done(function (e) {
                  icHelper.showModal(
                    e,
                    "Информация о компании",
                    "#siteModal",
                    "modal800",
                    q
                  ),
                    D(),
                    N();
                })
                .always(function () {
                  icHelper.afterLoadMore(e, "", !0);
                }),
              !1
            );
          }),
          i(document).on("click", "#deleteCompanyContact", function () {
            var e = i(this).data("contactid");
            return (
              icHelper.showModalConfirm(
                "Вы действительно хотите удалить данный контакт?",
                function () {
                  i.get(
                    Routing.generate("company_contactDelete", {
                      id: e,
                    })
                  )
                    .done(function (e, t, n) {
                      202 === n.status && window.location.reload();
                    })
                    .fail(function (e, t, n) {});
                }
              ),
              !1
            );
          }),
          i(document).on("click", "#editCompanyContact", function () {
            var e = i(this).data("contactid"),
              t = i(this);
            return (
              icHelper.beforeLoadMore(t),
              i
                .get(
                  Routing.generate("company_contactEdit", {
                    id: e,
                  })
                )
                .done(function (e) {
                  icHelper.showModal(e, "Редактирование контакта"),
                    icHelper.afterLoadMore(t, "", !0);
                }),
              !1
            );
          }),
          i(document).on("click", "#request-in-cluster-already", function () {
            icHelper.showModal(
              '<p>Вы уже являетесь участником кластера</p><div class="modal_btn"><button type="button" class="btn btn-grad" data-dismiss="modal">Понятно</button></div>',
              "Стать участником кластера",
              void 0,
              "modal_member_cluster modal_center modal_text_center modal_member_cluster2"
            );
          }),
          i("#request-in-cluster-in-moderation").on("click", function () {
            icHelper.showModal(
              '<p>Ваша заявка принята и находится на модерации</p><div class="modal_btn"><button type="button" class="btn btn-grad" data-dismiss="modal">Понятно</button></div>',
              "Стать участником кластера",
              void 0,
              "modal_member_cluster modal_center modal_text_center modal_member_cluster2"
            );
          }),
          i("#request-in-cluster-ch-trustee").on("click", function () {
            var e = Routing.generate("showInfoTrusteeRIC");
            i.ajax({
              method: "GET",
              global: !0,
              url: e,
            })
              .done(function (e) {
                icHelper.showModal(
                  e,
                  "Стать участником кластера",
                  void 0,
                  "modal_member_cluster"
                );
              })
              .fail(function (e) {
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
          i("#request-in-cluster").on("click", function () {
            var e = Routing.generate("requestInCluster"),
              t = i(this).data().company,
              n = i(this);
            icHelper.beforeLoadMore(n),
              i
                .ajax({
                  method: "POST",
                  global: !0,
                  url: e,
                  data: {
                    company: t,
                  },
                })
                .done(function (e) {
                  icHelper.showModal(
                    e,
                    "Стать участником кластера",
                    void 0,
                    "modal_member_cluster"
                  ),
                    icHelper.afterLoadMore(n, "", !0);
                })
                .fail(function (e) {
                  icHelper.afterLoadMore(n, "", !0),
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
          i(document).on("submit", "#request_in_cluster_form", function (e) {
            e.preventDefault(),
              i(this).find(":input:disabled").removeAttr("disabled");
            var t = i(this).attr("action"),
              n = i(this).serialize();
            icHelper.loaderSpin(),
              icHelper.hideModal(),
              setTimeout(function () {
                i.ajax({
                  method: "POST",
                  global: !0,
                  url: t,
                  data: n,
                })
                  .done(function (e) {
                    icHelper.removeLoader(),
                      icHelper.showModal(e, ""),
                      i("#request-in-cluster").remove();
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
          i(document).on("click", ".photoDelete", function () {
            var e = i(this).data().photo,
              t = i(this);
            i.ajax({
              type: "post",
              url: Routing.generate("deletePhoto", {
                id: e,
              }),
              global: !0,
              data: i("form").serialize(),
              success: function (e) {
                t.closest(".file_el_del").remove(),
                  icHelper.showModalAlert("Фото успешно удалено");
              },
              error: function (e) {
                icHelper.showModalAlert(
                  "Во время удаления фото возникла ошибка"
                );
              },
            });
          }),
          i(document).on("keyup", "#needsForm input,textarea", function () {
            L("needsForm");
          }),
          i(document).on("change", "#needsForm", function (e) {
            L("needsForm");
          }),
          i(document).on("click", ".deleteClusterBtn", function () {
            var e = i(this).data().guid,
              t =
                '<div class="close_modal text-center"><a href="' +
                Routing.generate("profile_clusters") +
                '" class="btn btn-ico btn-primary profile_punct">Закрыть<i class="material-icons">chevron_right</i></a></div>',
              n = "Удалено",
              o = i(this).parents(".pl_communities").first();
            icHelper.loaderSpin(o),
              i
                .ajax({
                  method: "POST",
                  global: !0,
                  url: Routing.generate("delete_cluster", {
                    id: e,
                  }),
                  processData: !1,
                  contentType: !1,
                })
                .done(function (e, a, r) {
                  o.remove(),
                    i(".span_chislo").text(i(".pl_communities").length),
                    icHelper.removeLoader(),
                    icHelper.showModalAlert(n, t);
                })
                .fail(function (e, i, o) {
                  (n = "Во время удаления произошла ошибка"),
                    icHelper.removeLoader(),
                    icHelper.showModalAlert(n, t);
                });
          }),
          i(document).on("click", ".management:not(body)", function () {
            i(this).addClass("active"),
              i(".findCluster").removeClass("active"),
              E();
          }),
          i(document).on("click", ".allClusters, .findCluster", function () {
            var e = i(".pl_communities").length;
            i(".pl_communities:not(.owner)").show(),
              i(".span_chislo").text(e),
              i(this).addClass("active"),
              i(".management").removeClass("active");
          }),
          i(document).on("click", ".findClusterBtn", function () {
            E();
          }),
          i(document).on("click", ".clustersStatus", function () {
            E();
          }),
          i(document).on("click", ".servicesStatus", function () {
            A();
          }),
          i(document).on("click", ".equipsStatus", function () {
            I();
          }),
          i(document).on("click", ".findCluster", function () {
            E(),
              i(".management_filter").removeClass("d-none"),
              i(".findcluster_filter_profile ul.nav").addClass("d-none");
          }),
          i(document).on(
            "keydown",
            "#modalBody .covidPassportInput",
            function (e) {
              if (32 === e.which) return !1;
              13 === e.which &&
                i("#modalBody .covidPassportBtn").trigger("click");
            }
          ),
          i(document).on("keydown", "#modalBody .covidInn", function (e) {
            if (32 === e.which) return !1;
            13 === e.which && i("#modalBody .covidInnBtn").trigger("click");
          }),
          i(document).on("click", ".covidByPassport", function () {
            icHelper.showModal(
              i("#digital_pass2").html(),
              "Введите серию и номер документа,<br> удостоверяющего личность, без пробелов",
              void 0,
              "digital_badges_modal digital_badges_modal2 modal_alert"
            );
          }),
          i(document).on("click", "#modalBody .covidPassportBtn", function () {
            var e = i("#modalBody .covidPassportInput").val(),
              t = i("#modalBody .covidPersonalInfoConfirm").prop("checked");
            e && t
              ? (i(".covidInfo").data("passport", e),
                icHelper.loaderSpin(),
                i.ajax({
                  type: "get",
                  global: !0,
                  url: Routing.generate("covidByPassport", {
                    passport: e,
                  }),
                  success: function (e) {
                    e &&
                      ((e = JSON.parse(e)),
                      T(),
                      e.data
                        ? (P(), i(".covidInfo").data("passportResult", 1))
                        : (icHelper.showModal(
                            i("#digital_pass3").html(),
                            "Введите ИНН компании,<br> в которой Вы работаете",
                            void 0,
                            "digital_badges_modal digital_badges_modal2 modal_alert"
                          ),
                          i(".covidInfo").data("passportResult", 4),
                          icHelper.removeLoader()));
                  },
                  error: function (e) {},
                }))
              : alert(
                  "Необходимо заполнить:" +
                    (e ? "" : "номер документа") +
                    (t ? "" : ", согласие")
                );
          }),
          i(document).on("click", "#modalBody .covidInnBtn", function () {
            var e = i("#modalBody .covidInn").val(),
              t = i("#modalBody .covidPersonalInfoConfirm").prop("checked");
            e && t
              ? (i(".covidInfo").data("inn", e),
                icHelper.loaderSpin(),
                i.ajax({
                  type: "get",
                  global: !0,
                  url: Routing.generate("covidCompanyInfo", {
                    inn: e,
                  }),
                  success: function (e) {
                    var t = 1 === i(".covidInfo").data().passportResult;
                    (e = JSON.parse(e))
                      ? (T(),
                        t
                          ? e.whiteList
                            ? P()
                            : icHelper.showModal(
                                i("#digital_pass6").html(),
                                "Ваш пропуск был аннулирован, так как данные Федеральной налоговой службы и Пенсионного Фонда не подтверждают Вашу занятость в указанной Вами компании",
                                void 0,
                                "digital_badges_modal"
                              )
                          : (!e.blackList && !e.notAllowToWork) ||
                            e.whiteList ||
                            e.allowToWork
                          ? icHelper.showModal(
                              i("#digital_pass4").html(),
                              "Вам необходимо перейти на<br><a href='https://nedoma.mos.ru/'>nedoma.mos.ru</a> и оформить новый<br>цифровой пропуск для работающего",
                              void 0,
                              "digital_badges_modal digital_badges_modal2 modal_alert"
                            )
                          : icHelper.showModal(
                              i("#digital_pass5").html(),
                              "Для получения Вами цифрового пропуска,<br> руководителю (или кадровой службе)<br>Вашей организации необходимо подать<br> списки сотрудников по ссылке<br> <a href='https://i.moscow/covid'>i.moscow/covid</a>",
                              void 0,
                              "digital_badges_modal digital_badges_modal2 modal_alert"
                            ))
                      : icHelper.showModal(
                          i("#digital_pass5").html(),
                          "Для получения Вами цифрового пропуска,<br> руководителю (или кадровой службе)<br>Вашей организации необходимо подать<br> списки сотрудников по ссылке<br> <a href='https://i.moscow/covid'>i.moscow/covid</a>",
                          void 0,
                          "digital_badges_modal digital_badges_modal2 modal_alert"
                        ),
                      icHelper.removeLoader();
                  },
                  error: function (e) {},
                }))
              : alert(
                  "Необходимо заполнить:" +
                    (e ? "" : "ИНН") +
                    (t ? "" : ", согласие")
                );
          }),
          i(document).on(
            "keyup keypress blur change",
            "#measure_support_request_Inn",
            function () {
              i(this).val(
                i(this)
                  .val()
                  .replace(/[^0-9]/g, "")
              );
              var e = i(this).val();
              if (e && e.length > 11) return !1;
            }
          ),
          i(document).on("click", ".submitCovidMeasure", function () {
            i("label[for]").each(function () {
              var e = i(this).text();
              "Фамилия" === e ||
                "Имя" === e ||
                "Отчество" === e ||
                ("Телефон" === e &&
                  i("#" + i(this).attr("for")).val("+7 (123) 123-4567"));
            }),
              i("#modalBody #measure_support_request_p79755").prop("checked") &&
                (icHelper.loaderSpin(),
                i("#measure_support_request").submit(),
                i(this).attr("disabled", !0));
          }),
          i(document).on(
            "input",
            "#measure_support_request_p59448",
            function () {
              var e = i(this).val().replace("C:\\fakepath\\", ""),
                t = i(this)[0].files[0].type,
                n = i(this)[0].files[0].size;
              -1 ==
              [
                "image/jpeg",
                "image/pjpeg",
                "image/png",
                "application/pdf",
                "application/zip",
                "application/gzip",
                "application/x-rar-compressed",
              ].indexOf(t)
                ? (icHelper.showModalAlert(
                    "Допустимы только форматы PDF, PNG, JPG, JPEG, ZIP, RAR"
                  ),
                  i(this).val(null),
                  i(".fileinput-button2-pod").html(""))
                : n > 10485760
                ? (icHelper.showModalAlert(
                    "Допустимый максимальный размер файла 10 MБ"
                  ),
                  i(this).val(null),
                  i(".fileinput-button2-pod").html(""))
                : (i(".fileinput-button2-pod").remove(),
                  i(this).parent().addClass("active"),
                  i(this)
                    .parent()
                    .after(
                      '<div class="fileinput-button2-pod">' + e + "</div>"
                    ));
            }
          ),
          i(document).on("keypress", ".covidInn", function (e) {
            return !(i(this).val().length > 11);
          }),
          i(document).on("click", ".closeModal", function () {
            i("#siteModal").removeClass("digital_badges_modal2"),
              i("#siteModal").removeClass("modal_alert"),
              i(".modal-backdrop.fade.show").remove(),
              i("body").removeClass("modal-open");
          }),
          i(document).on("click", ".sendToSuppliersPortalBtn", function () {
            icHelper.showModalAlert(
              '<div class="tam_tit">Для размещения продукции на Портале Поставщиков вы&nbsp;будете перенаправлены на сайт <span class="color_red">zakupki.mos.ru</span></div><div class="text_pod tam_text">Если у вас еще нет личного кабинета на портале, он будет<br> создан автоматически. Чтобы предложить цену на размещаемую продукцию<br> на Портале Поставщиков, вам потребуется ваша электронная подпись.</div>',
              '<div class="close_modal text-center"><a href="https://old.zakupki.mos.ru/#/offers/my" class="btn btn-default btn2-light">Перейти</a></div>',
              "modal_alert_w1"
            );
          }),
          setTimeout(function () {
            i(S).length > 0 &&
              i(S).each(function (e) {
                var t = i(this),
                  n = t.data().type,
                  o = Routing.generate("getRecommendationsAjax", {
                    type: n,
                  });
                t.scheletrone({
                  onComplete: function () {
                    t.addClass("pending_wrap");
                  },
                }),
                  i
                    .ajax({
                      method: "GET",
                      global: !0,
                      url: o,
                    })
                    .done(function (o) {
                      t.removeClass("pending_wrap"),
                        t.scheletrone("stopLoader"),
                        o.trim() ||
                          (t.addClass("d-none"),
                          i(F).length && i(F).removeClass("d-none")),
                        !o.trim() &&
                          i(".recom_head").length &&
                          i(".recom_head").hide(),
                        t.html(o),
                        "product_for_company" === n ||
                        "patents_for_self" === n ||
                        "patents_for_company" === n ||
                        "measure_support" === n ||
                        "room_for_company" === n
                          ? t.find(".slide2_js:not(.slick-initialized)")
                              .length &&
                            t
                              .find(".slide2_js:not(.slick-initialized)")
                              .each(function (t) {
                                i(this).addClass("slide2_js_or_new_" + e),
                                  icHelper2.slideNew(".slide2_js_or_new_" + e);
                              })
                          : icHelper.mcustomScroll();
                    })
                    .fail(function () {
                      t.removeClass("pending_wrap"),
                        t.scheletrone("stopLoader"),
                        t.addClass("d-none"),
                        i(F).length && i(F).removeClass("d-none"),
                        i(".recom_head").length && i(".recom_head").hide();
                    });
              });
          }, 250),
          i(document).on(
            "click",
            "#form_contacts_add .remove_input",
            function () {
              i("#form_contacts_add").hasClass("disabled") ||
                i(this)
                  .parent(".form-group")
                  .parents(".form-group")
                  .first()
                  .remove();
            }
          ),
          i(document).on("click", "#contacts_add_save", function (e) {
            e.preventDefault();
            var t = i(this).parents("form").first(),
              n = t.find("[required]"),
              o = !0;
            n.each(function () {
              var t = i(this).parent().find(".invalid-feedback");
              if (!i(this).val()) {
                e.preventDefault();
                var n = icHelper.createError("Заполните поле");
                return (
                  t.length || i(this).after(n),
                  icHelper.scrollTo(this),
                  (o = !1),
                  !1
                );
              }
              t.length && t.remove();
            }),
              o &&
                (icHelper.beforeLoadMore(i(this), !0),
                icHelper.iasFormSendAjax(t[0], null, v, g, g));
          }),
          i(M).on("hide.bs.modal", function (e) {
            var t = i(this).data().target;
            i(t).trigger("pause");
          }),
          i(M).on("show.bs.modal", function (e) {
            var t = i(this).data().target;
            i(t).trigger("play");
          }),
          i(document).on(
            "click",
            ".about_partners, .about_products, .about_services",
            function () {
              return i(M).modal("show"), !1;
            }
          ),
          i(document).on(
            "click",
            'form[name="person"] [type="submit"]',
            function () {
              var e = i("#person_phone");
              if (!e.val()) {
                var t = icHelper.createError("Заполните это поле");
                return (
                  e.parent().find(".invalid-feedback").length || e.after(t), !1
                );
              }
              e.parent().find(".invalid-feedback").length &&
                e.parent().find(".invalid-feedback").remove();
            }
          ),
          i(document).on("click", ".chooseItem", function () {
            var e = i(".counterContainer"),
              t = e.find(".choosedCount"),
              n = i(this).parents(".col-md-4").length
                ? ".col-md-4"
                : i(this).parents(".col-md-12").length
                ? ".col-md-12"
                : ".col-md-6",
              o = i(this).parents(n),
              a = i(".mainCount span"),
              r = i(".chooseItem:checked"),
              s = parseInt(a.text());
            i(".counterContainer").length > 1 &&
              (i(".counterContainer").hide(),
              (t = (e = i(this)
                .parents(".card0")
                .find(".counterContainer")).find(".choosedCount")),
              (a = e.find(".mainCount span")),
              (s = parseInt(a.text())),
              e.show()),
              i(e).find(".unpublishItems").hide(),
              i(e).find(".publishItems").hide();
            var l = !1,
              c = !1;
            r.each(function () {
              var e = i(this).parents(n).find("#switch_publish").length
                ? i(this).parents(n).find("#switch_publish").prop("checked")
                : i(this)
                    .parents(n)
                    .find(".removeFromPublication input:visible").length;
              if (
                (i(".moderationStatus").length &&
                  (e =
                    "Опубликован" ===
                    i(this).parents(n).find(".moderationStatus").text()),
                e)
              )
                l = !0;
              else {
                var t = i(this)
                  .parents(n)
                  .find(".product_public_status")
                  .text();
                (t && "На модерации" === i.trim(t)) || (c = !0);
              }
            }),
              (l && c) ||
                (l
                  ? i(e).find(".unpublishItems").show()
                  : c && i(e).find(".publishItems").show()),
              Number.isNaN(s) && (s = 0),
              i(this).prop("checked")
                ? ((s += 1),
                  t.hasClass("d-none") &&
                    (t.removeClass("d-none"), a.removeClass("d-none")))
                : ((s -= 1) < 1 && (t.addClass("d-none"), a.addClass("d-none")),
                  i(o)
                    .parents(".card-body")
                    .first()
                    .find(".name")
                    .text(" Выбрать все "),
                  i(o)
                    .parents(".card-body")
                    .first()
                    .find(".selectAll input")
                    .prop("checked", !1)),
              a.text(s),
              i(e).find(".mainCount").find("span").text(s);
          }),
          i(document).on("click", ".unselect", function () {
            var e = i(this).parents(".card-body"),
              t = i("input.chooseItem:checked"),
              n = e.find(".count"),
              o = i(".selectAll input"),
              a = e.find("span.name");
            i(o).prop("checked", !1),
              i(".selectAll span.name").text(" Выбрать все "),
              t.each(function () {
                i(this).prop("checked", !1);
              }),
              n.text(0),
              i(".mainCount").find("span").text(0),
              n.addClass("d-none"),
              i(".unpublishItems").hide(),
              i(".publishItems").hide(),
              a.text(" Выбрать все "),
              i(".choosedCount").addClass("d-none");
          }),
          i(document).on("click", ".deleteItems", function () {
            var e = i(this)
                .parents(".card-body")
                .find("input.chooseItem:checked"),
              t = i(this).parents(".card-body").find(".mainCount"),
              n = parseInt(t.find("span").text()),
              o = i(this).data().rout;
            "companyObjectDelete" === o
              ? ((e = i(this)
                  .parents("#profileInfo")
                  .find("input.chooseItem:checked")),
                (t = i(this).parents("#profileInfo").find(".mainCount")),
                (n = parseInt(t.find("span").text())))
              : "rentDeleteRoom" === o &&
                ((e = i(this)
                  .parents(".form_big.accordion_profile")
                  .find("input.chooseItem:checked")),
                (t = i(this)
                  .parents(".form_big.accordion_profile")
                  .find(".mainCount")),
                (n = parseInt(t.find("span").text()))),
              icHelper.showModalConfirm("Подтвердить удаление", function () {
                icHelper.loaderSpin(),
                  e.each(function () {
                    var e = i(this).data().guid,
                      t = {};
                    if (-1 !== i.inArray(o, ["deleteCompanyNeeds"]))
                      t = {
                        id: e,
                        simpleResponse: !0,
                      };
                    else if ("productDelete" === o) {
                      t = {
                        guid: e,
                        type: i("#deleteProduction").data().type,
                      };
                    } else
                      "profile_company_project_remove" === o
                        ? (t = {
                            guid: e,
                          })
                        : "companyObjectDelete" === o
                        ? (t = {
                            objectId: e,
                          })
                        : "equipDelete" === o
                        ? (t = {
                            confirm: !0,
                            guid: e,
                          })
                        : "rentDeleteRoom" === o &&
                          (t = {
                            id: e,
                          });
                    e &&
                      ((n -= 1),
                      i
                        .ajax({
                          url: Routing.generate(o, t),
                          type: "GET",
                          async: !1,
                        })
                        .done(function (e) {
                          if (0 === n) {
                            if ("equipDelete" === o) {
                              var t = i("#eqCount").text();
                              i("#eqCount").text(t - 1),
                                i(".eq-page").remove(),
                                i(".unselect").click(),
                                i("#companyProductsContainer").append(e);
                            } else
                              "rentDeleteRoom" === o
                                ? (i(".form_big.accordion_profile").remove(),
                                  i(".unselect").click(),
                                  i("#pjax-container").append(e))
                                : "companyObjectDelete" === o
                                ? (i(".unselect").click(),
                                  i("#profileInfo").html(e))
                                : window.location.reload();
                            icHelper.removeLoader();
                          }
                        })
                        .fail(function (e, t, n) {
                          return (
                            icHelper.removeLoader(),
                            icHelper.showModalAlert(
                              "Ошибка",
                              "Ошибка сервера, попробуйте позднее."
                            ),
                            !1
                          );
                        }));
                  });
              });
          }),
          i(document).on("click", ".unpublishItems", function () {
            R("unpublish", this);
          }),
          i(document).on("click", ".publishItems", function () {
            R("publish", this);
          }),
          i(document).on("click", ".selectAll", function () {
            var e = i(this).parents(".card-body").find("input.chooseItem"),
              t = i(this).find("span.name").text(),
              n = " Выбрать все " === t ? " Снять выделение " : " Выбрать все ";
            i(this).find("input").prop("checked", !0),
              e.each(function () {
                " Выбрать все " === t
                  ? i(this).prop("checked") || i(this).trigger("click")
                  : i(this).prop("checked") && i(this).trigger("click");
              });
            var o = " Выбрать все " === t ? e.length : 0;
            i(this).find("span.name").text(n),
              i(".mainCount").find("span").text(o);
          }),
          i(document).on("click", ".saveMenuItems", function () {
            var e = [],
              t = i(this).data().page;
            i("#modalBody .menuItem").each(function () {
              i(this).prop("checked") && e.push(i(this).val());
            }),
              icHelper.loaderSpin(),
              i
                .ajax({
                  method: "post",
                  global: !0,
                  url: Routing.generate("save_menu_items"),
                  data: {
                    pageName: t,
                    items: e,
                  },
                })
                .done(function (e, t, n) {
                  window.location.reload();
                })
                .fail(function (e, t, n) {
                  icHelper.showModalAlert(
                    "Во время сохранения произошла ошибка."
                  );
                })
                .always(function () {});
          }),
          i(document).on("click", ".returnDefault", function () {
            i("#modalBody .menuItem").prop("checked", !0);
          }),
          i(document).on("click", ".profile_projects_search", function () {
            H();
          }),
          i(document).on("click", '[name="progTopFilter"]', function () {
            i('[name="progTopFilter"]').parent().removeClass("active"),
              i(this).parent().addClass("active"),
              "needs" === i(this).data().part
                ? i(".specFilters").hide()
                : i(".specFilters").show(),
              H();
          }),
          i(document).on("click", "a.nav-link.needs_tab", function () {
            var e = i(this).data("href");
            i(this)
              .parents(".dt2")
              .first()
              .find(".tab-pane")
              .removeClass("active show"),
              i(e).each(function () {
                i(this).hasClass("active show") ||
                  i(this).addClass("active show");
              });
          }),
          "#pn_find" === window.location.hash &&
            (i('a[href="#pn_find"]').click(), H()),
          i(document).on("click", 'a[href="#pn_find"]', function () {
            H();
          }),
          i(document).on("click", 'a[href="#pn_my"]', function () {
            H();
          }),
          i(document).on("keypress", ".projectsInput", function (e) {
            13 === e.which && H();
          }),
          i(document).on("click", ".addTrustee", function () {
            var e = Routing.generate("sudir_trustee_list_x509"),
              t = setTimeout(function () {
                i("#siteModalAlert").on("hidden.bs.modal"), (location.href = e);
              }, 5e3);
            icHelper.showModalConfirm(
              '<div class="tam_img"><img src="/build/img/ico80_sent.svg"></div><div class="tam_tit">Переадресация</div><div class="tam_text tam_text1 fwn">Вы будете перенаправлены на авторизацию<br>с УКЭП через <span class="color_a2 color_a2bl"><span id="time_ukep">5</span> секунд</span></div>',
              function () {
                i("#siteModalAlert").on("hidden.bs.modal"), (location.href = e);
              },
              function () {
                clearTimeout(t);
              },
              '<div class="modal_btn modal_btn_alert btn_center"><button class="btn btn2-light btn-no">Отмена</button><button class="btn btn-grad btn-yes">Далее</button></div>',
              "ukep_confirm_modal"
            ),
              setInterval(function () {
                var e = i("#time_ukep").text() - 0;
                e > 0 && i("#time_ukep").text(e - 1);
              }, 1e3);
          }),
          window.location.href.indexOf("profile/services") > -1 &&
            i(document).on(
              "click",
              ".previous > a, .page > a, .nex > a",
              function (e) {
                e.preventDefault(), A(i(this).data().pagenum);
              }
            ),
          window.location.href.indexOf("profile/products") > -1 &&
            i(document).on(
              "click",
              ".previous > a, .page > a, .nex > a",
              function (e) {
                e.preventDefault(),
                  (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      t = i(x).val(),
                      n = "#Products-content",
                      o = i(".productsStatus.active").data().status;
                    icHelper.loaderSpin(n),
                      i
                        .ajax({
                          url: Routing.generate("profile_products"),
                          global: !0,
                          method: "POST",
                          data: {
                            status: o,
                            page: e,
                            searchText: t,
                          },
                        })
                        .done(function (e) {
                          i(n).html(e);
                        })
                        .always(function () {
                          icHelper.removeLoader();
                        });
                  })(i(this).data().pagenum);
              }
            ),
          window.location.href.indexOf("profile/equips") > -1 &&
            i(document).on(
              "click",
              ".previous > a, .page > a, .nex > a",
              function (e) {
                e.preventDefault(), I(i(this).data().pagenum);
              }
            ),
          window.location.href.indexOf("profile/clusters") > -1 &&
            (i(document).on(
              "click",
              ".previous > a, .page > a, .nex > a",
              function (e) {
                e.preventDefault(), E(i(this).data().pagenum);
              }
            ),
            i(".findCluster").click()),
          i(document).on("click", ".acceleratorStatus", function () {
            var e, t;
            i(".acceleratorStatus").removeClass("active"),
              i(this).addClass("active"),
              (e = ".tl_wrap.tl_wrap2"),
              (t = i(".acceleratorStatus.active").data().status),
              icHelper.loaderSpin(e),
              i
                .ajax({
                  url: Routing.generate("profile_accelerator"),
                  global: !0,
                  method: "POST",
                  data: {
                    status: t,
                  },
                })
                .done(function (t) {
                  i(e).html(t);
                })
                .always(function () {
                  icHelper.removeLoader();
                });
          }),
          i(document).on("click", ".techContestsStatus", function () {
            var e, t;
            i(".techContestsStatus").removeClass("active"),
              i(this).addClass("active"),
              (e = ".techContestsDataContainer"),
              (t = i(".techContestsStatus.active").data().status),
              icHelper.loaderSpin(e),
              i
                .ajax({
                  url: Routing.generate("profile_techcontests"),
                  global: !0,
                  method: "POST",
                  data: {
                    status: t,
                  },
                })
                .done(function (t) {
                  i(e).html(t);
                })
                .always(function () {
                  icHelper.removeLoader();
                });
          });
      });
    },
  },
]);
